/**
 * KONAN AI - Enregistrement des appareils et des alertes de révision, CÔTÉ SERVEUR.
 * Endpoint : POST /api/push-sync   (en-tête Authorization: Bearer <jeton Firebase de l'élève>)
 *
 * Pourquoi passer par le serveur : les règles Firestore publiées dans la console peuvent refuser
 * l'écriture directe depuis le téléphone (« permission-denied »). Ici, le serveur vérifie l'identité
 * de l'élève avec son jeton Firebase, puis écrit lui-même avec la clé de service.
 * Chaque élève ne peut écrire que SES documents : « device_<uid> » et « <uid>_… ».
 *
 * Corps JSON :
 *   { action: 'register', subscription: {endpoint, keys:{p256dh, auth}}, planTier, timezone, email, device }
 *   { action: 'plan', writes: [{ id, data }], deletes: [id] }
 *   { action: 'plan', replaceFuture: true, keep: [id] }  → efface toute autre alerte FUTURE de l'élève
 *     (anciens plannings, autre appareil resté sur une vieille version) : le planning de l'appareil
 *     que l'élève utilise devient la seule référence.
 *   { action: 'cancel', ids: [id] }
 *   { action: 'unregister', endpoint }  → à la déconnexion : ce téléphone quitte ce compte
 */
import { loadLocalEnvIfPresent } from './_env.js';
import { verifyFirebaseIdToken } from './_firebaseToken.js';

const KINDS = new Set(['avant', 'retard', 'manquee', 'rattrapage']);
const SITUATIONS = new Set(['5_MIN_AVANT', 'RETARD_15_MIN', 'SEANCE_MANQUEE']);
const MAX_ITEMS = 400;
const MAX_KEEP = 3000;
const DAY_MS = 24 * 60 * 60 * 1000;

let initializeApp, getApps, cert, getFirestore, FieldValue;
async function getDb() {
  if (!getFirestore) {
    const [appMod, fsMod] = await Promise.all([import('firebase-admin/app'), import('firebase-admin/firestore')]);
    ({ initializeApp, getApps, cert } = appMod);
    ({ getFirestore, FieldValue } = fsMod);
  }
  const raw = String(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '').trim();
  if (!raw) throw new Error('MISSING_SERVICE_ACCOUNT_KEY');
  let app = getApps()[0];
  if (!app) {
    const parsed = raw.startsWith('{') ? JSON.parse(raw) : JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'));
    app = initializeApp({ credential: cert(parsed), projectId: parsed.project_id || process.env.VITE_FIREBASE_PROJECT_ID || 'konanai-ed046' });
  }
  return getFirestore(app);
}

function send(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body);
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 400_000) throw Object.assign(new Error('TOO_LARGE'), { code: 413 });
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

/** Appel accepté seulement depuis le site lui-même (ou en développement local). */
function isAllowedOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true;
  try {
    const o = new URL(origin);
    const host = String(req.headers['x-forwarded-host'] || req.headers.host || '');
    return o.host === host || o.hostname === 'localhost' || o.hostname === '127.0.0.1';
  } catch {
    return false;
  }
}

/** Même clé que l'application (src/services/webPushService.ts) pour nommer un abonnement. */
export function endpointKey(endpoint) {
  let h = 5381;
  for (let i = 0; i < endpoint.length; i++) h = ((h * 33) ^ endpoint.charCodeAt(i)) >>> 0;
  return `d${h.toString(36)}`;
}

const str = (v, max) => (typeof v === 'string' ? v.slice(0, max) : '');
const isOwnId = (id, uid) => typeof id === 'string' && id.length <= 220 && /^[A-Za-z0-9_-]+$/.test(id) && id.startsWith(`${uid}_`);

/** Ne garde que les champs attendus d'une enveloppe, avec les bons types. Null si invalide. */
export function cleanEnvelope(data, uid, nowMs = Date.now()) {
  if (!data || typeof data !== 'object') return null;
  const sendAt = Number(data.sendAt);
  // L'application dépose les alertes des 14 prochains jours
  if (!Number.isFinite(sendAt) || sendAt < nowMs - DAY_MS || sendAt > nowMs + 15 * DAY_MS) return null;
  if (!KINDS.has(data.kind) || !SITUATIONS.has(data.situation)) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(data.date || ''))) return null;
  const hhmm = (v) => (typeof v === 'string' && /^\d{1,2}:\d{2}$/.test(v) ? v : null);
  return {
    userId: uid,
    v: Number(data.v) === 3 ? 3 : 2,
    kind: data.kind,
    situation: data.situation,
    sendAt,
    sessionId: str(data.sessionId, 120),
    date: data.date,
    subjectId: str(data.subjectId, 120),
    subjectName: str(data.subjectName, 120),
    startTime: hhmm(data.startTime) || '',
    durationMinutes: Math.max(5, Math.min(240, Number(data.durationMinutes) || 25)),
    rattrapageA: hhmm(data.rattrapageA),
    isRattrapage: Boolean(data.isRattrapage),
  };
}

/** Retire cet abonnement (ce téléphone) des fiches « appareils » de tous les AUTRES comptes. */
export async function detachFromOtherAccounts(db, uid, endpoint, fieldValue = FieldValue) {
  const del = () => fieldValue.delete();
  const key = endpointKey(endpoint);
  const [byMap, byLegacy] = await Promise.all([
    db.collection('push_queue').where(`subscriptions.${key}.subscription.endpoint`, '==', endpoint).get(),
    db.collection('push_queue').where('subscription.endpoint', '==', endpoint).get(),
  ]);
  const mine = `device_${uid}`;
  const updates = [];
  for (const doc of byMap.docs) {
    if (doc.id !== mine && doc.id.startsWith('device_')) {
      updates.push(doc.ref.update({ [`subscriptions.${key}`]: del() }));
    }
  }
  for (const doc of byLegacy.docs) {
    if (doc.id !== mine && doc.id.startsWith('device_')) updates.push(doc.ref.update({ subscription: null }));
  }
  await Promise.all(updates);
  return updates.length;
}

/**
 * Remplace un abonnement renouvelé par le navigateur (événement « pushsubscriptionchange ») dans la
 * fiche « appareils » qui le contient. Renvoie le nombre de fiches mises à jour (0 si inconnu).
 */
export async function replaceSubscription(db, oldEndpoint, subscription, fieldValue = FieldValue) {
  if (!/^https:\/\//.test(oldEndpoint) || !subscription || subscription.endpoint === oldEndpoint) return 0;
  const oldKey = endpointKey(oldEndpoint);
  const snap = await db.collection('push_queue').where(`subscriptions.${oldKey}.subscription.endpoint`, '==', oldEndpoint).get();
  const now = new Date().toISOString();
  let count = 0;
  for (const doc of snap.docs) {
    if (!doc.id.startsWith('device_')) continue;
    const previous = doc.get(`subscriptions.${oldKey}`) || {};
    await doc.ref.update({
      [`subscriptions.${oldKey}`]: fieldValue.delete(),
      [`subscriptions.${endpointKey(subscription.endpoint)}`]: { subscription, updatedAt: now, device: previous.device || '', renewedBy: 'service-worker' },
      updatedAt: now,
    });
    count += 1;
  }
  return count;
}

export function cleanSubscription(sub) {
  const endpoint = str(sub?.endpoint, 1000);
  const p256dh = str(sub?.keys?.p256dh, 200);
  const auth = str(sub?.keys?.auth, 100);
  if (!/^https:\/\//.test(endpoint) || !p256dh || !auth) return null;
  return { endpoint, keys: { p256dh, auth } };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { success: false, error: 'METHOD_NOT_ALLOWED' });
  }
  if (!isAllowedOrigin(req)) return send(res, 403, { success: false, error: 'FORBIDDEN_ORIGIN' });
  loadLocalEnvIfPresent();

  // 0. Relais du Service Worker : le navigateur a renouvelé l'abonnement, application fermée (pas de jeton).
  //    L'ancienne adresse d'abonnement est secrète : seul l'appareil qui la détenait peut la remplacer.
  let early;
  try {
    early = await readBody(req);
  } catch (e) {
    return send(res, e?.code === 413 ? 413 : 400, { success: false, error: 'BAD_BODY' });
  }
  if (early?.action === 'resubscribe') {
    try {
      const replaced = await replaceSubscription(await getDb(), str(early.oldEndpoint, 1000), cleanSubscription(early.subscription));
      return send(res, replaced ? 200 : 404, { success: replaced > 0, replaced });
    } catch (err) {
      return send(res, 500, { success: false, error: String(err?.message || 'SERVER_ERROR').slice(0, 120) });
    }
  }

  // 1. Identité de l'élève (jeton Firebase signé par Google)
  const authHeader = String(req.headers.authorization || '');
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  let uid;
  try {
    uid = (await verifyFirebaseIdToken(token)).sub;
  } catch (e) {
    return send(res, 401, { success: false, error: e?.message === 'TOKEN_EXPIRED' ? 'TOKEN_EXPIRED' : 'UNAUTHORIZED' });
  }

  const body = early || {};

  try {
    const db = await getDb();
    const now = new Date();

    // ----- Enregistrement d'un appareil -----
    if (body.action === 'register') {
      const subscription = cleanSubscription(body.subscription);
      if (!subscription) return send(res, 400, { success: false, error: 'BAD_SUBSCRIPTION' });
      const timezone = str(body.timezone, 60) || 'Africa/Abidjan';
      await db.collection('push_queue').doc(`device_${uid}`).set({
        userId: uid,
        email: str(body.email, 200).toLowerCase().trim(),
        subscriptions: {
          [endpointKey(subscription.endpoint)]: {
            subscription,
            updatedAt: now.toISOString(),
            device: str(body.device, 120),
          },
        },
        planTier: ['free', 'pro', 'plus'].includes(body.planTier) ? body.planTier : 'free',
        notificationsEnabled: true,
        timezone,
        sendAt: 9999999999999, // jamais « à échéance » : cette fiche n'est pas une notification
        sessionId: 'device_sub',
        type: 'device_sub',
        updatedAt: now.toISOString(),
      }, { merge: true });
      // Un téléphone ne reçoit QUE les notifications du compte connecté : on le retire des autres comptes
      // (ex. deux comptes utilisés sur le même téléphone, l'un après l'autre)
      await detachFromOtherAccounts(db, uid, subscription.endpoint).catch((e) => console.warn('[push-sync] detach', e?.message || e));
      // Copie facultative sur la fiche élève (pour la console admin)
      await db.collection('users').doc(uid).set({
        notificationsEnabled: true,
        pushNotificationsEnabled: true,
        webPushUpdatedAt: now.toISOString(),
        timezone,
      }, { merge: true }).catch(() => {});
      return send(res, 200, { success: true, device: endpointKey(subscription.endpoint) });
    }

    // ----- Déconnexion : ce téléphone ne reçoit plus les notifications de ce compte -----
    if (body.action === 'unregister') {
      const endpoint = str(body.endpoint, 1000);
      if (!/^https:\/\//.test(endpoint)) return send(res, 400, { success: false, error: 'BAD_SUBSCRIPTION' });
      const ref = db.collection('push_queue').doc(`device_${uid}`);
      const snap = await ref.get();
      if (snap.exists) {
        const update = { [`subscriptions.${endpointKey(endpoint)}`]: FieldValue.delete() };
        if (snap.get('subscription.endpoint') === endpoint) update.subscription = null;
        await ref.update(update);
      }
      return send(res, 200, { success: true });
    }

    // ----- Dépôt / retrait des alertes de la semaine -----
    if (body.action === 'plan' || body.action === 'cancel') {
      const writes = body.action === 'plan' && Array.isArray(body.writes) ? body.writes.slice(0, MAX_ITEMS) : [];
      const deletes = (body.action === 'plan' ? body.deletes : body.ids);
      const deleteIds = (Array.isArray(deletes) ? deletes.slice(0, MAX_ITEMS) : []).filter((id) => isOwnId(id, uid));
      const ops = [];
      let rejected = 0;
      for (const w of writes) {
        const data = isOwnId(w?.id, uid) ? cleanEnvelope(w.data, uid, now.getTime()) : null;
        if (data) ops.push({ type: 'set', id: w.id, data });
        else rejected += 1;
      }
      for (const id of deleteIds) ops.push({ type: 'delete', id });

      // Planning de référence : toute autre alerte future de cet élève est effacée
      let replaced = 0;
      if (body.action === 'plan' && body.replaceFuture === true && Array.isArray(body.keep)) {
        const keep = new Set(body.keep.slice(0, MAX_KEEP).filter((id) => isOwnId(id, uid)));
        const nowMs = now.getTime();
        const mine = await db.collection('push_queue').where('userId', '==', uid).get();
        for (const doc of mine.docs) {
          if (!doc.id.startsWith(`${uid}_`) || keep.has(doc.id)) continue;
          if (Number(doc.get('sendAt')) <= nowMs) continue; // déjà échue : le cron s'en occupe
          if (ops.some((o) => o.id === doc.id)) continue;
          ops.push({ type: 'delete', id: doc.id });
          replaced += 1;
        }
      }

      for (let i = 0; i < ops.length; i += 450) {
        const batch = db.batch();
        for (const op of ops.slice(i, i + 450)) {
          const ref = db.collection('push_queue').doc(op.id);
          if (op.type === 'set') batch.set(ref, op.data);
          else batch.delete(ref);
        }
        await batch.commit();
      }
      // Date du dernier planning reçu : tant qu'il est récent, le serveur ne prolonge pas les alertes lui-même
      if (body.action === 'plan' && body.replaceFuture === true) {
        await db.collection('push_queue').doc(`device_${uid}`).set({
          userId: uid, type: 'device_sub', sessionId: 'device_sub', sendAt: 9999999999999, lastPlanAt: now.getTime(),
        }, { merge: true }).catch(() => {});
      }
      return send(res, 200, { success: true, written: ops.filter((o) => o.type === 'set').length, deleted: deleteIds.length, replaced, rejected });
    }

    return send(res, 400, { success: false, error: 'UNKNOWN_ACTION' });
  } catch (err) {
    console.error('[push-sync]', err?.message || err);
    return send(res, 500, { success: false, error: String(err?.message || 'SERVER_ERROR').slice(0, 120) });
  }
}
