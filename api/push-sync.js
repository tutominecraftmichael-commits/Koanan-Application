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
 */
import { loadLocalEnvIfPresent } from './_env.js';
import { verifyFirebaseIdToken } from './_firebaseToken.js';

const KINDS = new Set(['avant', 'retard', 'manquee', 'rattrapage']);
const SITUATIONS = new Set(['5_MIN_AVANT', 'RETARD_15_MIN', 'SEANCE_MANQUEE']);
const MAX_ITEMS = 400;
const MAX_KEEP = 3000;
const DAY_MS = 24 * 60 * 60 * 1000;

let initializeApp, getApps, cert, getFirestore;
async function getDb() {
  if (!getFirestore) {
    const [appMod, fsMod] = await Promise.all([import('firebase-admin/app'), import('firebase-admin/firestore')]);
    ({ initializeApp, getApps, cert } = appMod);
    ({ getFirestore } = fsMod);
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
  if (!Number.isFinite(sendAt) || sendAt < nowMs - DAY_MS || sendAt > nowMs + 8 * DAY_MS) return null;
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

  // 1. Identité de l'élève (jeton Firebase signé par Google)
  const authHeader = String(req.headers.authorization || '');
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  let uid;
  try {
    uid = (await verifyFirebaseIdToken(token)).sub;
  } catch (e) {
    return send(res, 401, { success: false, error: e?.message === 'TOKEN_EXPIRED' ? 'TOKEN_EXPIRED' : 'UNAUTHORIZED' });
  }

  let body;
  try {
    body = await readBody(req);
  } catch (e) {
    return send(res, e?.code === 413 ? 413 : 400, { success: false, error: 'BAD_BODY' });
  }

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
      // Copie facultative sur la fiche élève (pour la console admin)
      await db.collection('users').doc(uid).set({
        notificationsEnabled: true,
        pushNotificationsEnabled: true,
        webPushUpdatedAt: now.toISOString(),
        timezone,
      }, { merge: true }).catch(() => {});
      return send(res, 200, { success: true, device: endpointKey(subscription.endpoint) });
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
      return send(res, 200, { success: true, written: ops.filter((o) => o.type === 'set').length, deleted: deleteIds.length, replaced, rejected });
    }

    return send(res, 400, { success: false, error: 'UNKNOWN_ACTION' });
  } catch (err) {
    console.error('[push-sync]', err?.message || err);
    return send(res, 500, { success: false, error: String(err?.message || 'SERVER_ERROR').slice(0, 120) });
  }
}
