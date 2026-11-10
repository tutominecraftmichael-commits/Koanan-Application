/**
 * KONAN AI - Envoi des notifications push (rappel, retard, séance manquée, rattrapage).
 * Endpoint : /api/cron-notifications, appelé CHAQUE MINUTE par cron-job.org.
 *
 * Comment ça marche :
 * 1. L'application de l'élève dépose à l'avance, dans la collection `push_queue`, une « enveloppe »
 *    par alerte prévue sur les 7 prochains jours (sans texte : juste la séance, l'heure et la situation).
 * 2. Ce travailleur lit UNIQUEMENT les enveloppes arrivées à échéance (sendAt <= maintenant).
 * 3. Pour chacune, il relit la fiche de l'élève (users/{uid}) : séance pas déjà faite, pas déplacée ?
 *    (Notifications pour TOUS les élèves : Gratuit, Pro et Plus.) Puis il construit le contexte de l'élève et demande à Gemini d'écrire le message
 *    (3 secondes maximum, sinon banque de messages locale), et l'envoie sur TOUS ses appareils.
 * 4. Chaque enveloppe traitée est supprimée. Une enveloppe en retard de plus de 20 minutes est jetée sans envoi.
 *
 * Accès : secret CRON_SECRET, dans l'en-tête « X-Cron-Secret », « Authorization: Bearer … » ou « ?key=… ».
 * Outils (même secret) : ?diagnostic=1 (état de la configuration), ?test=<email>&situation=avant|retard|manquee|rattrapage
 * (envoie une vraie notification à cet élève), &dry=1 (écrit le message sans l'envoyer).
 */

import { loadLocalEnvIfPresent, secretsMatch, providedSecret } from './_env.js';
import {
  ALERT_KINDS,
  buildStudentContext,
  DEFAULT_TIMEZONE,
  ymdIn,
} from './_konanVoice.js';
import { generateKonanMessage, mapWithLimit } from './_konanAI.js';

// Clé PUBLIQUE utilisée par l'application pour abonner les téléphones (src/services/webPushService.ts).
// Le serveur doit signer avec la clé privée qui lui correspond, sinon les services push refusent l'envoi.
const APP_VAPID_PUBLIC_KEY = 'BFMUUoknQ9de4CCl1wew4j3SGHtMDBRpk9DhE1vAH3OewLXF8m43FhO26yq1X5eeOZ97jNvbScN_41u10gxy4PY';
const STALE_MS = 20 * 60 * 1000;
const MAX_PER_RUN = 150;

let webpush, initializeApp, getApps, cert, getFirestore, FieldValue;
let modulesLoaded = false;

async function loadHeavyModules() {
  if (modulesLoaded) return;
  const [wp, appMod, fsMod] = await Promise.all([
    import('web-push'),
    import('firebase-admin/app'),
    import('firebase-admin/firestore'),
  ]);
  webpush = wp.default;
  ({ initializeApp, getApps, cert } = appMod);
  ({ getFirestore, FieldValue } = fsMod);
  modulesLoaded = true;
}

function getDb() {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) return { error: 'MISSING_SERVICE_ACCOUNT_KEY' };
  let app = getApps()[0];
  if (!app) {
    try {
      const raw = serviceAccountKey.trim();
      const parsed = raw.startsWith('{') ? JSON.parse(raw) : JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'));
      app = initializeApp({
        credential: cert(parsed),
        projectId: parsed.project_id || process.env.VITE_FIREBASE_PROJECT_ID || 'konanai-ed046',
      });
    } catch (e) {
      return { error: 'INVALID_SERVICE_ACCOUNT_KEY', details: String(e?.message || e).slice(0, 120) };
    }
  }
  return { db: getFirestore(app) };
}

function vapidPublicKey() {
  return String(process.env.VAPID_PUBLIC_KEY || process.env.VITE_VAPID_PUBLIC_KEY || '').trim();
}

function configureVapid() {
  const publicKey = vapidPublicKey();
  const privateKey = String(process.env.VAPID_PRIVATE_KEY || '').trim();
  const subject = String(process.env.VAPID_SUBJECT || 'mailto:contact@konan-ai.com').trim();
  if (!publicKey || !privateKey) return 'VAPID_NOT_CONFIGURED';
  try {
    webpush.setVapidDetails(subject, publicKey, privateKey);
    return null;
  } catch {
    return 'VAPID_INVALID';
  }
}

function queryParams(req) {
  try {
    const url = new URL(req.url, 'http://localhost');
    return url.searchParams;
  } catch {
    return new URLSearchParams();
  }
}

// ---------------------------------------------------------------------------
// Élève et appareils
// ---------------------------------------------------------------------------
function planTierOf(userData, deviceData) {
  const raw = userData
    ? (userData.planTier || userData.userAccount?.planTier || userData.tier)
    : deviceData?.planTier;
  const tier = String(raw || 'free').toLowerCase().trim();
  return tier === 'pro' || tier === 'plus' ? tier : 'free';
}

/** Tous les abonnements push de l'élève (un par appareil), sans doublon. */
function subscriptionsOf(deviceData) {
  const out = [];
  const seen = new Set();
  const add = (key, sub) => {
    if (!sub?.endpoint || !sub?.keys?.p256dh || !sub?.keys?.auth || seen.has(sub.endpoint)) return;
    seen.add(sub.endpoint);
    out.push({ key, subscription: { endpoint: sub.endpoint, keys: sub.keys } });
  };
  const map = deviceData?.subscriptions;
  if (map && typeof map === 'object') {
    for (const [key, entry] of Object.entries(map)) add(key, entry?.subscription);
  }
  add('__legacy__', deviceData?.subscription);
  return out;
}

async function loadUsers(db, userIds) {
  const ids = [...new Set(userIds)].filter(Boolean);
  if (!ids.length) return new Map();
  const userRefs = ids.map((id) => db.collection('users').doc(id));
  const deviceRefs = ids.map((id) => db.collection('push_queue').doc(`device_${id}`));
  const [userSnaps, deviceSnaps] = await Promise.all([db.getAll(...userRefs), db.getAll(...deviceRefs)]);
  const map = new Map();
  ids.forEach((id, i) => {
    map.set(id, {
      user: userSnaps[i].exists ? userSnaps[i].data() : null,
      device: deviceSnaps[i].exists ? deviceSnaps[i].data() : null,
    });
  });
  return map;
}

/**
 * Relit la séance dans la fiche de l'élève : l'alerte est-elle encore juste ?
 * @returns {{ ok: true, alert: object } | { ok: false, reason: string }}
 */
function checkEnvelope(env, userData) {
  if (!env?.kind || !ALERT_KINDS[env.kind] || !env.sessionId || !env.date) {
    return { ok: false, reason: 'ancienne enveloppe' };
  }
  // Enveloppes d'avant la v3 : déposées sans nettoyage des anciens plannings, elles pouvaient
  // annoncer une matière ou une heure qui n'existe plus. L'application les remplace dès son ouverture.
  if (Number(env.v) !== 3) return { ok: false, reason: 'ancienne enveloppe (v2)' };

  // L'enveloppe vient du planning de l'appareil que l'élève utilise (le serveur efface toutes les
  // autres) : c'est elle qui fait foi pour la matière et l'heure. La fiche cloud peut être en retard
  // sur ce planning ; on ne s'en sert que pour savoir si la séance est déjà faite.
  if (userData?.cycleCompletedDate === env.date) return { ok: false, reason: 'programme du jour terminé' };
  const sessions = Array.isArray(userData?.studySessions) ? userData.studySessions : [];
  const s = sessions.find((x) => x && x.id === env.sessionId);
  if (s?.completed && s.subjectId === env.subjectId) return { ok: false, reason: 'séance déjà faite' };
  return { ok: true, alert: env };
}

/**
 * Lecture seule, pour vérifier ce que le serveur enverra à un élève : matières de sa fiche cloud et
 * alertes en attente. Aucune notification n'est envoyée.
 */
async function inspectUser(db, email, now) {
  const userSnap = await db.collection('users').where('email', '==', email).limit(1).get();
  if (userSnap.empty) return { success: false, diagnostic: 'USER_NOT_FOUND' };
  const userId = userSnap.docs[0].id;
  const user = userSnap.docs[0].data() || {};
  const subjects = Array.isArray(user.subjects) ? user.subjects : [];
  const nameOf = (id) => subjects.find((x) => x?.id === id)?.name || '?';
  const days = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];
  const queue = await db.collection('push_queue').where('userId', '==', userId).get();
  const envelopes = queue.docs
    .filter((d) => d.id.startsWith(`${userId}_`))
    .map((d) => d.data())
    .sort((a, b) => Number(a.sendAt) - Number(b.sendAt))
    .map((e) => ({
      v: e.v || 2,
      kind: e.kind,
      date: e.date,
      seance: e.startTime,
      matiere: e.subjectName,
      envoi: new Date(Number(e.sendAt)).toISOString().slice(0, 16).replace('T', ' ') + ' UTC',
      echue: Number(e.sendAt) <= now.getTime(),
    }));
  const deviceSnap = await db.collection('push_queue').doc(`device_${userId}`).get();
  const deviceMap = deviceSnap.exists ? deviceSnap.get('subscriptions') || {} : {};
  const appareils = Object.values(deviceMap).map((d) => ({
    appareil: String(d?.device || '').replace(/^Mozilla\/5\.0 \(([^)]*)\).*/, '$1').slice(0, 60),
    inscritLe: d?.updatedAt || null,
  }));
  return {
    success: true,
    inspect: true,
    appareils,
    cloud: {
      lastSyncedAt: user.lastSyncedAt || null,
      matieres: subjects.map((x) => x?.name).filter(Boolean),
      seances: (Array.isArray(user.studySessions) ? user.studySessions : [])
        .map((x) => `${days[x?.dayOfWeek] || '?'} ${x?.startTime}-${x?.endTime} ${nameOf(x?.subjectId)}${x?.completed ? ' (faite)' : ''}`),
    },
    alertesEnAttente: envelopes.length,
    alertes: envelopes.slice(0, 60),
  };
}

/** Derniers messages reçus par l'élève (titres et textes), mémorisés sur sa fiche « appareils ». */
function recentOf(deviceData) {
  return Array.isArray(deviceData?.recentMessages) ? deviceData.recentMessages.map(String).slice(0, 12) : [];
}

async function writeMessage(alert, userData, deviceData, now, recent = recentOf(deviceData)) {
  const tz = deviceData?.timezone || DEFAULT_TIMEZONE;
  const ctx = buildStudentContext(userData || {}, alert, now, tz);
  const message = await generateKonanMessage(ctx, {
    apiKey: String(process.env.GEMINI_API_KEY || '').trim(),
    seed: `${alert.sessionId}|${alert.date}|${alert.kind}`,
    recent,
  });
  return { ctx, message };
}

/** Mémorise les messages envoyés (les 12 derniers) pour que KONAN ne se répète pas. */
async function rememberMessages(db, userId, previous, sentMessages) {
  if (!sentMessages.length) return;
  const recentMessages = [...sentMessages.flatMap((m) => [m.body, m.title]), ...previous].slice(0, 12);
  try {
    await db.collection('push_queue').doc(`device_${userId}`).set({ recentMessages }, { merge: true });
  } catch {
    // non bloquant
  }
}

function pushPayload(message, alert) {
  return JSON.stringify({
    title: message.title,
    body: message.body,
    icon: '/icons/konan-notif-192.png',
    badge: '/icons/konan-badge-96.png',
    tag: `konan-${alert.sessionId}-${alert.kind}`,
    data: {
      url: '/',
      sessionId: alert.sessionId,
      kind: alert.kind,
      alertKey: `${alert.sessionId}_${alert.date}_${alert.kind}`,
      source: message.source,
    },
  });
}

/** Envoie sur tous les appareils ; renvoie le nombre de réussites et les abonnements morts. */
async function sendToDevices(subs, payload) {
  let delivered = 0;
  const dead = [];
  const errors = [];
  await Promise.all(subs.map(async ({ key, subscription }) => {
    try {
      await webpush.sendNotification(subscription, payload, { TTL: 900, urgency: 'high' });
      delivered += 1;
    } catch (err) {
      const code = err?.statusCode;
      if (code === 404 || code === 410) dead.push(key);
      errors.push(code ? `HTTP ${code}${code === 403 ? ' (clés VAPID différentes)' : ''}` : String(err?.message || err).slice(0, 80));
    }
  }));
  return { delivered, dead, errors };
}

async function removeDeadSubscriptions(db, userId, deadKeys) {
  if (!deadKeys.length) return;
  const update = {};
  for (const key of deadKeys) {
    if (key === '__legacy__') update.subscription = null;
    else update[`subscriptions.${key}`] = FieldValue.delete();
  }
  try {
    await db.collection('push_queue').doc(`device_${userId}`).update(update);
  } catch {
    // appareil déjà supprimé : rien à faire
  }
}

/** Fonctions internes exposées pour les tests à blanc (aucun accès réseau). */
export const __test = { checkEnvelope, subscriptionsOf, planTierOf };

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------
export default async function handler(req, res) {
  if (typeof res.status !== 'function') {
    res.status = (code) => { res.statusCode = code; return res; };
    res.json = (data) => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(data)); return res; };
  }
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ success: false, error: 'METHOD_NOT_ALLOWED' });
  }

  loadLocalEnvIfPresent();
  const params = queryParams(req);
  const expectedSecret = String(process.env.CRON_SECRET || '').trim();
  if (!expectedSecret) return res.status(503).json({ success: false, error: 'CRON_NOT_CONFIGURED' });
  const given = providedSecret(req, 'x-cron-secret') || String(params.get('key') || '').trim();
  if (!secretsMatch(given, expectedSecret)) return res.status(401).json({ success: false, error: 'UNAUTHORIZED' });

  try {
    await loadHeavyModules();
  } catch (loadErr) {
    return res.status(500).json({ success: false, error: 'MODULE_LOAD_FAILED', detail: String(loadErr?.message || loadErr).slice(0, 200), node: process.version });
  }

  const now = new Date();
  const nowMs = now.getTime();

  // ----- Diagnostic de la configuration -----
  if (params.get('diagnostic')) {
    const fb = getDb();
    let dueCount = null;
    let firestoreError = fb.error || null;
    if (fb.db) {
      try {
        dueCount = (await fb.db.collection('push_queue').where('sendAt', '<=', nowMs).limit(500).get()).size;
      } catch (e) { firestoreError = String(e?.message || e).slice(0, 120); }
    }
    return res.status(200).json({
      success: true,
      serverTime: now.toISOString(),
      abidjanTime: `${ymdIn(now)} ${String(now.getUTCHours()).padStart(2, '0')}:${String(now.getUTCMinutes()).padStart(2, '0')}`,
      vapidConfigured: configureVapid() === null,
      vapidPublicKeyMatchesApp: vapidPublicKey() === APP_VAPID_PUBLIC_KEY,
      geminiKeyPresent: Boolean(String(process.env.GEMINI_API_KEY || '').trim()),
      firestore: firestoreError ? `ERREUR : ${firestoreError}` : 'OK',
      envelopesDueNow: dueCount,
    });
  }

  const vapidError = configureVapid();
  if (vapidError) return res.status(503).json({ success: false, error: vapidError });

  const fb = getDb();
  if (fb.error) return res.status(200).json({ success: false, diagnostic: fb.error, details: fb.details });
  const { db } = fb;

  try {
    // ----- Inspection en lecture seule d'un élève -----
    const inspectEmail = String(params.get('inspect') || '').toLowerCase().trim();
    if (inspectEmail) return res.status(200).json(await inspectUser(db, inspectEmail, now));

    // ----- Mode test : vraie notification à un élève (ou message seul avec &dry=1) -----
    const testEmail = String(params.get('test') || '').toLowerCase().trim();
    if (testEmail) {
      const kind = ALERT_KINDS[params.get('situation')] ? params.get('situation') : 'avant';
      const userSnap = await db.collection('users').where('email', '==', testEmail).limit(1).get();
      if (userSnap.empty) return res.status(200).json({ success: false, testMode: true, diagnostic: 'USER_NOT_FOUND' });
      const userId = userSnap.docs[0].id;
      const { user, device } = (await loadUsers(db, [userId])).get(userId);
      const sessions = Array.isArray(user?.studySessions) ? user.studySessions : [];
      const s = sessions[0];
      const subject = (user?.subjects || []).find((x) => x.id === s?.subjectId);
      const alert = {
        kind, situation: ALERT_KINDS[kind].situation, sessionId: s?.id || 'test', date: ymdIn(now),
        subjectId: s?.subjectId || '', subjectName: subject?.name || s?.title || 'Mathématiques',
        startTime: s?.startTime || '18:00', durationMinutes: s?.durationMinutes || 30,
        rattrapageA: kind === 'manquee' || kind === 'retard' || kind === 'rattrapage' ? '20:00' : null,
        isRattrapage: kind === 'rattrapage',
      };
      const { ctx, message } = await writeMessage(alert, user, device, now);
      const subs = subscriptionsOf(device);
      if (params.get('dry')) return res.status(200).json({ success: true, testMode: true, dry: true, message, context: ctx, devices: subs.length });
      if (!subs.length) return res.status(200).json({ success: false, testMode: true, diagnostic: 'NO_DEVICE', message, instruction: "L'élève doit ouvrir l'application Pro sur son téléphone et accepter les notifications." });
      const sent = await sendToDevices(subs, pushPayload(message, alert));
      await removeDeadSubscriptions(db, userId, sent.dead);
      return res.status(200).json({ success: sent.delivered > 0, testMode: true, message, devices: subs.length, delivered: sent.delivered, errors: sent.errors });
    }

    // ----- Traitement normal de la file -----
    const snap = await db.collection('push_queue').where('sendAt', '<=', nowMs).limit(MAX_PER_RUN).get();
    const envelopes = snap.docs
      .map((d) => ({ id: d.id, ref: d.ref, data: d.data() }))
      .filter((e) => e.data?.type !== 'device_sub' && !e.id.startsWith('device_'));

    const people = await loadUsers(db, envelopes.map((e) => e.data.userId));
    const stats = { found: envelopes.length, sent: 0, delivered: 0, ai: 0, fallback: 0, skipped: {}, errors: [] };
    const skip = (reason) => { stats.skipped[reason] = (stats.skipped[reason] || 0) + 1; };
    const sentByUser = new Map(); // messages envoyés pendant ce passage, par élève

    await mapWithLimit(envelopes, 8, async (e) => {
      const env = e.data;
      const person = people.get(env.userId) || {};
      if (nowMs - Number(env.sendAt) > STALE_MS) return skip('trop tard (plus de 20 min)');
      // Notifications ouvertes à TOUS les élèves (Gratuit, Pro, Plus) : pas de filtre sur la formule
      const subs = subscriptionsOf(person.device);
      if (!subs.length) return skip('aucun appareil abonné');
      const check = checkEnvelope(env, person.user);
      if (!check.ok) return skip(check.reason);

      const already = sentByUser.get(env.userId) || [];
      const recent = [...already.flatMap((m) => [m.body, m.title]), ...recentOf(person.device)];
      const { message } = await writeMessage(check.alert, person.user, person.device, now, recent);
      if (message.source === 'ia') stats.ai += 1; else stats.fallback += 1;
      const sent = await sendToDevices(subs, pushPayload(message, check.alert));
      if (sent.delivered > 0) sentByUser.set(env.userId, [...already, message]);
      stats.sent += 1;
      stats.delivered += sent.delivered;
      if (sent.errors.length && stats.errors.length < 10) stats.errors.push(...sent.errors);
      await removeDeadSubscriptions(db, env.userId, sent.dead);
    });

    await Promise.all([...sentByUser.entries()].map(([userId, msgs]) =>
      rememberMessages(db, userId, recentOf(people.get(userId)?.device), msgs)));

    // Chaque enveloppe traitée (envoyée ou écartée) quitte la file
    for (let i = 0; i < envelopes.length; i += 400) {
      const batch = db.batch();
      envelopes.slice(i, i + 400).forEach((e) => batch.delete(e.ref));
      await batch.commit();
    }

    return res.status(200).json({ success: true, durationMs: Date.now() - nowMs, stats, timestamp: now.toISOString() });
  } catch (err) {
    const msg = String(err?.message || 'Erreur interne');
    const isQuota = msg.includes('Quota exceeded') || msg.includes('RESOURCE_EXHAUSTED');
    console.error('[cron-notifications]', msg);
    return res.status(200).json({
      success: false,
      diagnostic: isQuota ? 'FIRESTORE_QUOTA_EXCEEDED' : 'GLOBAL_ERROR_CAUGHT',
      error: msg.slice(0, 200),
      timestamp: now.toISOString(),
    });
  }
}
