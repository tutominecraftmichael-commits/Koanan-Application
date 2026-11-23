/**
 * Outils communs aux sujets de devoir (création et correction) :
 * réponse JSON, lecture du corps, origine autorisée, élève connecté, compteur du jour, appel à Gemini.
 */
import { loadLocalEnvIfPresent } from './_env.js';
import { isAdminPayload, verifyFirebaseIdToken } from './_firebaseToken.js';
import { paymentsEnabled } from './_subscriptionRules.js';

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
  let admin = false;
  try {
    const payload = await verifyFirebaseIdToken(token);
    uid = payload.sub;
    admin = isAdminPayload(payload);
  } catch (e) {
    send(res, 401, { success: false, error: e?.message === 'TOKEN_EXPIRED' ? 'TOKEN_EXPIRED' : 'UNAUTHORIZED' });
    return null;
  }
  const apiKey = String(process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) {
    send(res, 503, { success: false, error: 'AI_NOT_CONFIGURED' });
    return null;
  }
  // Devoirs = KONAN Pro. Quand le paiement est activé, seul un abonnement payé (vérifié par le serveur) y donne accès.
  // Le compte administrateur a toujours accès (isAdminPayload).
  if (paymentsEnabled() && !admin) {
    try {
      const { serverPlanTier } = await import('./_subscriptionStore.js');
      const tier = await serverPlanTier(await getDb(), uid, null);
      if (tier !== 'pro' && tier !== 'plus') {
        send(res, 403, { success: false, error: 'PRO_REQUIRED' });
        return null;
      }
    } catch {
      send(res, 503, { success: false, error: 'SUBSCRIPTION_UNAVAILABLE' });
      return null;
    }
  }
  return { uid, apiKey, admin };
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

/**
 * Nature d'une erreur de Gemini :
 * - 'quota'     : limite de la clé atteinte (formule gratuite : 20 demandes par jour et par modèle) ;
 * - 'transient' : service surchargé ou coupure passagère (503, 500, 429 « par minute »…) : réessayer aide ;
 * - 'bad'       : réponse reçue mais inutilisable (JSON invalide, sujet incomplet) : réessayer aide aussi ;
 * - 'fatal'     : clé refusée, modèle inconnu, demande invalide : réessayer ne sert à rien.
 */
export function classifyAiError(e) {
  const msg = String(e?.message || e || '');
  const status = Number(e?.status || e?.code) || Number((msg.match(/"code"\s*:\s*(\d{3})/) || [])[1]) || 0;
  if (e?.message === 'BAD_AI_ANSWER' || e instanceof SyntaxError) return 'bad';
  if (status === 429 || /RESOURCE_EXHAUSTED|quota/i.test(msg)) {
    // Limite par minute : passagère. Limite par jour (formule gratuite) : inutile de réessayer ce modèle aujourd'hui
    if (/per ?minute|PerMinute/i.test(msg)) return 'transient';
    return /per ?day|PerDay|daily|free_tier|FreeTier/i.test(msg) ? 'quota' : 'transient';
  }
  if (status >= 500 || /UNAVAILABLE|overloaded|INTERNAL|DEADLINE|ECONNRESET|ETIMEDOUT|fetch failed|socket/i.test(msg)) return 'transient';
  return 'fatal';
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Demande une réponse JSON à Gemini et la valide avec `clean`. Pour ne pas laisser l'élève sur une erreur :
 * modèle principal, puis nouvel essai après une courte pause si la panne est passagère ou la réponse
 * inutilisable, puis modèle de secours (même chose). On ne lance un essai que s'il a le temps de finir
 * avant la limite de la fonction (vercel.json). Si toutes les limites du jour sont atteintes,
 * l'erreur a le code « AI_QUOTA » (message honnête côté élève).
 * `primaryConfig` : réglages ajoutés pour le modèle principal seulement (le modèle de secours ne les accepte pas tous).
 * `opts.budgetMs` : temps total disponible ; `opts.attemptMs` : durée prévue d'un essai.
 * Chaque essai a son propre délai (jamais au-delà du temps restant) : un appel bloqué ne peut plus empêcher
 * le nouvel essai ni le modèle de secours (2026-11-22 : sujets 49-55 s et corrections 40 s mesurés pour une
 * limite de 60 s — un essai lent faisait échouer toute la demande).
 */
export async function askGeminiJson(apiKey, parts, clean, temperature = 0.4, primaryConfig = {}, opts = {}) {
  const { GoogleGenAI } = await import('@google/genai');
  const ai = new GoogleGenAI({ apiKey });
  const generate = opts.generate || ((req) => ai.models.generateContent(req));
  const budgetMs = opts.budgetMs ?? 52_000;
  const attemptMs = opts.attemptMs ?? 20_000;
  // Délai d'un essai : on garde de quoi faire un essai de secours (modèle « lite », rapide) quand c'est possible.
  // Google refuse un délai de moins de 10 s.
  const attemptTimeout = (isLastChance) => Math.max(10_000, isLastChance ? timeLeft() - 1_000 : Math.min(opts.maxAttemptMs ?? budgetMs, timeLeft() - (opts.reserveMs ?? 0)));
  const started = Date.now();
  const timeLeft = () => budgetMs - (Date.now() - started);
  let lastErr;
  let sawQuota = false;
  for (const model of MODELS) {
    for (let attempt = 0; attempt < 2; attempt++) {
      // Premier essai : toujours ; les suivants seulement s'ils ont le temps de finir
      if ((attempt > 0 || model !== MODELS[0]) && timeLeft() < attemptMs) break;
      const isLastChance = model === MODELS[MODELS.length - 1];
      try {
        const response = await generate({
          model,
          contents: [{ role: 'user', parts }],
          config: {
            responseMimeType: 'application/json',
            // Nouvel essai : un peu moins de fantaisie, pour une réponse plus sage
            temperature: attempt > 0 ? Math.max(0.1, temperature - 0.2) : temperature,
            ...(opts.sharedConfig || {}),
            ...(model === MODELS[0] ? primaryConfig : {}),
            httpOptions: { timeout: attemptTimeout(isLastChance) },
          },
        });
        const text = String(response.text || '').trim().replace(/^```json\s*|```$/g, '');
        const value = clean(JSON.parse(text));
        if (value) return value;
        lastErr = new Error('BAD_AI_ANSWER');
      } catch (e) {
        lastErr = e;
      }
      const kind = classifyAiError(lastErr);
      console.warn(`[gemini] ${model} essai ${attempt + 1} : ${kind} (${String(lastErr?.message || lastErr).slice(0, 140)})`);
      if (kind === 'quota') { sawQuota = true; break; } // modèle suivant
      if (kind === 'fatal') break;
      if (kind === 'transient') await sleep(Math.min(3000, Math.max(0, timeLeft() - attemptMs)));
    }
  }
  if (sawQuota && classifyAiError(lastErr) === 'quota') throw Object.assign(new Error('AI_QUOTA'), { code: 'AI_QUOTA', cause: lastErr });
  throw lastErr;
}

// ---------------------------------------------------------------------------
// Chrono du devoir de 2 h (2026-11-17) : début noté par le serveur, rappels envoyés par le cron,
// retard calculé à la correction. Collection exam_timers/{uid}_{sessionId}, écrite par le serveur seulement.
// ---------------------------------------------------------------------------
export const EXAM_DURATION_MS = 2 * 60 * 60 * 1000;
/** Marge pour photographier et envoyer la copie après les 2 h. */
export const EXAM_GRACE_MS = 15 * 60 * 1000;

const timerRef = (db, uid, sessionId) => db.collection('exam_timers').doc(`${uid}_${String(sessionId).replace(/[^\w-]/g, '').slice(0, 80)}`);

/** Démarre le chrono (ou renvoie celui déjà lancé : relancer ne remet jamais le compteur à zéro). */
export async function startExamTimer(db, uid, sessionId, nowMs) {
  if (!sessionId) throw Object.assign(new Error('NO_SESSION'), { code: 400 });
  const ref = timerRef(db, uid, sessionId);
  return db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (snap.exists && Number(snap.get('startedAt')) > 0) {
      return { startedAt: Number(snap.get('startedAt')), endsAt: Number(snap.get('endsAt')) };
    }
    const timer = { uid, sessionId, startedAt: nowMs, endsAt: nowMs + EXAM_DURATION_MS, sent: [] };
    tx.set(ref, timer);
    return { startedAt: timer.startedAt, endsAt: timer.endsAt };
  });
}

/**
 * Temps mis par l'élève, d'après le chrono du serveur. lateMinutes > 0 seulement au-delà des 2 h + 15 min
 * de marge (minutes comptées depuis la fin des 2 h). Null si le chrono n'a pas été lancé sur le serveur.
 */
export async function examTiming(db, uid, sessionId, nowMs) {
  if (!sessionId) return null;
  const ref = timerRef(db, uid, sessionId);
  const snap = await ref.get();
  if (!snap.exists) return null;
  // Heure du PREMIER envoi de la copie : si l'IA est en panne et que l'élève renvoie plus tard, il n'est pas pénalisé
  let submittedAt = Number(snap.get('firstSubmitAt')) || 0;
  if (!submittedAt) {
    submittedAt = nowMs;
    try { await ref.update({ firstSubmitAt: nowMs }); } catch { /* sans gravité */ }
  }
  return timingFrom(Number(snap.get('startedAt')), submittedAt);
}

export function timingFrom(startedAt, nowMs) {
  if (!(startedAt > 0)) return null;
  const endsAt = startedAt + EXAM_DURATION_MS;
  const overMs = nowMs - endsAt;
  return {
    startedAt,
    endsAt,
    submittedAt: nowMs,
    elapsedMinutes: Math.max(0, Math.round((nowMs - startedAt) / 60000)),
    lateMinutes: overMs > EXAM_GRACE_MS ? Math.round(overMs / 60000) : 0,
  };
}

/** Code d'erreur renvoyé à l'élève quand l'IA n'a pas pu répondre. */
export const aiErrorCode = (e) => (e?.code === 'AI_QUOTA' ? 'AI_QUOTA' : 'AI_UNAVAILABLE');
