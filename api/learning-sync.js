/**
 * KONAN AI - Copie dans le compte de l'élève de sa progression dans les cours guidés :
 * position dans chaque volet, marque-pages (séance coupée par la fin du temps) et mémoire des
 * révisions espacées. L'élève retrouve tout sur un autre téléphone ou après une réinstallation.
 *
 * Endpoint : POST /api/learning-sync   (en-tête Authorization: Bearer <jeton Firebase de l'élève>)
 *   { action: 'get' }                              → { progress, reviews, updatedAt }
 *   { action: 'put', progress, reviews }           → enregistre (textes JSON, taille bornée)
 * Écrit par le serveur seulement (document learning/<uid>), chaque élève ne touche qu'au sien.
 */
import { loadLocalEnvIfPresent } from './_env.js';
import { verifyFirebaseIdToken } from './_firebaseToken.js';

const MAX_FIELD = 700_000; // caractères par champ (le document Firestore est limité à 1 Mo)

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
    if (size > 2_000_000) throw Object.assign(new Error('TOO_LARGE'), { code: 413 });
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

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

/** Texte JSON d'objet, de taille raisonnable ; null sinon. */
export function cleanJsonObjectText(value) {
  if (typeof value !== 'string' || value.length > MAX_FIELD) return null;
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? value : null;
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { success: false, error: 'METHOD_NOT_ALLOWED' });
  }
  if (!isAllowedOrigin(req)) return send(res, 403, { success: false, error: 'FORBIDDEN_ORIGIN' });
  loadLocalEnvIfPresent();

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
    const ref = (await getDb()).collection('learning').doc(uid);
    if (body.action === 'get') {
      const snap = await ref.get();
      const data = snap.exists ? snap.data() : {};
      return send(res, 200, { success: true, progress: data.progress || null, reviews: data.reviews || null, updatedAt: data.updatedAt || null });
    }
    if (body.action === 'put') {
      const progress = cleanJsonObjectText(body.progress);
      const reviews = cleanJsonObjectText(body.reviews);
      if (progress === null && reviews === null) return send(res, 400, { success: false, error: 'BAD_DATA' });
      const update = { userId: uid, updatedAt: new Date().toISOString() };
      if (progress !== null) update.progress = progress;
      if (reviews !== null) update.reviews = reviews;
      await ref.set(update, { merge: true });
      return send(res, 200, { success: true });
    }
    return send(res, 400, { success: false, error: 'UNKNOWN_ACTION' });
  } catch (err) {
    console.error('[learning-sync]', err?.message || err);
    return send(res, 500, { success: false, error: String(err?.message || 'SERVER_ERROR').slice(0, 120) });
  }
}
