/**
 * Outils communs aux sujets de devoir (création et correction) :
 * réponse JSON, lecture du corps, origine autorisée, élève connecté, compteur du jour, appel à Gemini.
 */
import { loadLocalEnvIfPresent } from './_env.js';
import { verifyFirebaseIdToken } from './_firebaseToken.js';

export const MODELS = ['gemini-3.5-flash', 'gemini-3.5-flash-lite'];

let initializeApp, getApps, cert, getFirestore;
export async function getDb() {
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

export function send(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
}

export async function readBody(req, maxBytes = 4_400_000) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body);
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > maxBytes) throw Object.assign(new Error('TOO_LARGE'), { code: 413 });
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

export function isAllowedOrigin(req) {
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

export const str = (v, max) => (typeof v === 'string' ? v.replace(/[ \t]+/g, ' ').trim().slice(0, max) : '');

const today = () => new Date().toISOString().slice(0, 10);

/** Contrôles d'entrée communs : méthode, origine, clé IA, élève connecté. Renvoie { uid, apiKey } ou null (réponse déjà envoyée). */
export async function guard(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    send(res, 405, { success: false, error: 'METHOD_NOT_ALLOWED' });
    return null;
  }
  if (!isAllowedOrigin(req)) {
    send(res, 403, { success: false, error: 'FORBIDDEN_ORIGIN' });
    return null;
  }
  loadLocalEnvIfPresent();
  const authHeader = String(req.headers.authorization || '');
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  let uid;
  try {
    uid = (await verifyFirebaseIdToken(token)).sub;
  } catch (e) {
    send(res, 401, { success: false, error: e?.message === 'TOKEN_EXPIRED' ? 'TOKEN_EXPIRED' : 'UNAUTHORIZED' });
    return null;
  }
  const apiKey = String(process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) {
    send(res, 503, { success: false, error: 'AI_NOT_CONFIGURED' });
    return null;
  }
  return { uid, apiKey };
}

/** Compteur du jour par élève (Firestore exam_usage/<uid>, écrit par le serveur seulement). */
export async function readUsage(uid, kind) {
  const db = await getDb();
  const ref = db.collection('exam_usage').doc(uid);
  const snap = await ref.get();
  const data = snap.exists ? snap.data() : null;
  const used = data?.date === today() ? Number(data?.[kind] || 0) : 0;
  return { ref, used };
}

export async function addUsage(ref, uid, kind) {
  try {
    const snap = await ref.get();
    const data = snap.exists && snap.data()?.date === today() ? snap.data() : { date: today() };
    await ref.set({ ...data, date: today(), [kind]: Number(data[kind] || 0) + 1, userId: uid }, { merge: true });
  } catch {
    // compteur non mis à jour : sans gravité
  }
}

/** Demande une réponse JSON à Gemini (essaie les modèles dans l'ordre) et la valide avec `clean`. */
export async function askGeminiJson(apiKey, parts, clean, temperature = 0.4) {
  const { GoogleGenAI } = await import('@google/genai');
  const ai = new GoogleGenAI({ apiKey });
  let lastErr;
  for (const model of MODELS) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: [{ role: 'user', parts }],
        config: { responseMimeType: 'application/json', temperature },
      });
      const text = String(response.text || '').trim().replace(/^```json\s*|```$/g, '');
      const value = clean(JSON.parse(text));
      if (value) return value;
      lastErr = new Error('BAD_AI_ANSWER');
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}
