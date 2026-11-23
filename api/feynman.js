/**
 * KONAN AI - Méthode Feynman : l'élève explique une notion avec ses mots (à l'oral, ou par écrit),
 * Gemini l'écoute et vérifie que c'est JUSTE (fidèle au cours), CLAIR et SIMPLE (pas récité).
 * Endpoint : POST /api/feynman   (en-tête Authorization: Bearer <jeton Firebase de l'élève>)
 *
 * Corps JSON :
 *   { notion, reference, classe, audio: <base64>, mimeType }   → explication orale (3 par jour)
 *   { notion, reference, classe, text }                          → explication écrite (10 par jour)
 *
 * La voix n'est jamais enregistrée : elle est envoyée à Gemini pour l'analyse, puis oubliée.
 * Le compteur du jour est gardé dans Firestore (feynman_usage/<uid>), écrit par le serveur seulement.
 */
import { loadLocalEnvIfPresent } from './_env.js';
import { verifyFirebaseIdToken } from './_firebaseToken.js';
import { paymentsEnabled } from './_subscriptionRules.js';
import { isOutsideCI, neutralizeForCountry, NEUTRAL_COUNTRY_RULE } from './_country.js';

export const DAILY_LIMITS = { audio: 3, text: 10 };
const MAX_AUDIO_BYTES = 3 * 1024 * 1024; // ~3 Mo : largement plus qu'une minute de voix compressée
// Réflexion « basse » : environ 3 à 5 s au lieu de 10 à 25 s, et le même jugement (mesuré le 2026-11-15 :
// 4 explications sur 4 bien jugées). Le modèle « lite » (1 à 2 s) sert de secours.
const MODELS = [
  { model: 'gemini-3.5-flash', config: { thinkingConfig: { thinkingLevel: 'low' } } },
  { model: 'gemini-3.5-flash-lite', config: {} },
];
const AUDIO_TYPES = /^audio\/(webm|ogg|mp4|mpeg|aac|wav|x-m4a|m4a)/;

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
    if (size > 5_000_000) throw Object.assign(new Error('TOO_LARGE'), { code: 413 });
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

const str = (v, max) => (typeof v === 'string' ? v.replace(/\s+/g, ' ').trim().slice(0, max) : '');

/** Jour civil à Abidjan (UTC), pour le compteur quotidien. */
const today = () => new Date().toISOString().slice(0, 10);

export function buildFeynmanPrompt({ notion, reference, classe, written, country }) {
  const prompt = buildFeynmanPromptCI({ notion, reference, classe, written });
  // Élève hors Côte d'Ivoire : aucune mention ivoirienne dans le conseil
  return isOutsideCI(country) ? `${neutralizeForCountry(prompt, country)}\n${NEUTRAL_COUNTRY_RULE}` : prompt;
}

function buildFeynmanPromptCI({ notion, reference, classe, written }) {
  return [
    // KONE, le meilleur ami de KONAN, écoute les explications Feynman (même peluche que « Je ne comprends pas »)
    "Tu es KONE, le meilleur ami de KONAN : un professeur bienveillant de l'application d'étude KONAN pour les élèves de Côte d'Ivoire.",
    `Un élève${classe ? ` de ${classe}` : ''} doit expliquer avec SES mots, comme à un élève de 6ème, la notion : « ${notion} ».`,
    `Ce que dit le cours (référence) : ${reference || '(non fourni)'}`,
    written
      ? "Voici son explication écrite (plus bas)."
      : "Écoute son explication orale (fichier audio joint). Il parle français, parfois avec l'accent et des mots ivoiriens : c'est normal.",
    'Évalue trois choses :',
    '- juste : aucune erreur par rapport au cours (une imprécision légère est tolérée) ;',
    '- clair : on comprend ce qu’il veut dire, les idées sont dans l’ordre ;',
    '- simple : il utilise des mots simples ou un exemple, il ne récite pas le cours mot à mot.',
    'recite = true s’il répète le cours par cœur sans l’expliquer.',
    'Si l’audio est vide, inaudible ou hors sujet : transcription vide ou courte, juste/clair/simple à false, et conseil qui demande de réessayer.',
    'conseil : 1 ou 2 phrases, tutoiement, encourageant, concret (dis ce qui manque ou ce qu’il faut simplifier). Jamais de moquerie.',
    'L’élève peut être une fille ou un garçon : aucune formule genrée (pas de « mon grand », « ma grande », « mon petit »), aucun accord au masculin ou au féminin qui le désigne (écris « Bravo ! » plutôt que « tu es doué »).',
    'Une explication vague ou incomplète (l’idée principale du cours manque) n’est pas « juste » : note de 6 au plus.',
    'transcription : écris FIDÈLEMENT ce que l’élève a dit, mot pour mot (sans corriger ses erreurs).',
    'manquants : les idées clés du cours qui MANQUENT ou sont FAUSSES dans son explication (3 au plus, quelques mots chacune, ex. « le rôle de la membrane ») ; [] si rien ne manque.',
    'modele : une explication modèle de la notion en 2 ou 3 phrases très simples, avec un exemple de la vie de tous les jours, comme KONAN l’expliquerait à un élève de 6ème. Formules éventuelles en LaTeX entre $…$.',
    'Réponds UNIQUEMENT en JSON : {"transcription":"…","juste":true,"clair":true,"simple":true,"recite":false,"note":8,"conseil":"…","manquants":["…"],"modele":"…"} (note de 0 à 10).',
  ].join('\n');
}

export function cleanVerdict(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const note = Math.max(0, Math.min(10, Math.round(Number(raw.note))));
  const conseil = str(raw.conseil, 300);
  if (!Number.isFinite(note) || !conseil) return null;
  return {
    transcription: str(raw.transcription, 2000),
    juste: raw.juste === true,
    clair: raw.clair === true,
    simple: raw.simple === true,
    recite: raw.recite === true,
    note,
    conseil,
    // Écoute plus fine (2026-11-23) : idées clés oubliées + explication modèle à comparer
    manquants: Array.isArray(raw.manquants) ? raw.manquants.map((m) => str(String(m ?? ''), 120)).filter(Boolean).slice(0, 3) : [],
    modele: typeof raw.modele === 'string' ? raw.modele.replace(/[ \t]+/g, ' ').trim().slice(0, 600) : '',
  };
}

async function askGemini(apiKey, parts) {
  const { GoogleGenAI } = await import('@google/genai');
  const ai = new GoogleGenAI({ apiKey });
  let lastErr;
  const started = Date.now();
  for (const [i, { model, config }] of MODELS.entries()) {
    // vercel.json : 60 s. Modèle principal plafonné à 25 s (3 à 5 s d'habitude) : s'il traîne, le modèle
    // « lite » a encore le temps de répondre (avant, un essai lent faisait échouer l'explication entière).
    const left = 55_000 - (Date.now() - started);
    if (left < 10_000) break;
    try {
      const response = await ai.models.generateContent({
        model,
        contents: [{ role: 'user', parts }],
        config: {
          responseMimeType: 'application/json', temperature: 0.3, ...config,
          httpOptions: { timeout: Math.max(10_000, i < MODELS.length - 1 ? Math.min(25_000, left - 15_000) : left - 1_000) },
        },
      });
      const text = String(response.text || '').trim().replace(/^```json\s*|```$/g, '');
      const verdict = cleanVerdict(JSON.parse(text));
      if (verdict) return verdict;
      lastErr = new Error('BAD_AI_ANSWER');
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
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

  // Mode « Je ne comprends pas » (professeur particulier) : même fonction serveur, Vercel gratuit = 12 fonctions au plus
  if (body?.action === 'tutor' || body?.action === 'tutor_status' || body?.action === 'tutor_voice') {
    const { handleTutorAction } = await import('./_tutor.js');
    const { status, data } = await handleTutorAction({ body, uid, getDb });
    return send(res, status, data);
  }

  // Feynman = KONAN Pro. Quand le paiement est ouvert, seul un abonnement payé (vérifié par le serveur) y donne accès.
  if (paymentsEnabled()) {
    try {
      const { serverPlanTier } = await import('./_subscriptionStore.js');
      const tier = await serverPlanTier(await getDb(), uid, null);
      if (tier !== 'pro' && tier !== 'plus') return send(res, 403, { success: false, error: 'PRO_REQUIRED' });
    } catch {
      return send(res, 503, { success: false, error: 'SUBSCRIPTION_UNAVAILABLE' });
    }
  }

  const notion = str(body.notion, 200);
  const reference = str(body.reference, 1800);
  const classe = str(body.classe, 40);
  const country = str(body.country, 4);
  const written = typeof body.text === 'string';
  const kind = written ? 'text' : 'audio';
  if (!notion) return send(res, 400, { success: false, error: 'MISSING_NOTION' });

  let parts;
  if (written) {
    const text = str(body.text, 1500);
    if (text.length < 15) return send(res, 400, { success: false, error: 'TOO_SHORT' });
    parts = [{ text: `${buildFeynmanPrompt({ notion, reference, classe, written: true, country })}\n\nExplication de l’élève :\n${text}` }];
  } else {
    const mimeType = String(body.mimeType || '').split(';')[0].trim();
    const audio = typeof body.audio === 'string' ? body.audio : '';
    if (!AUDIO_TYPES.test(mimeType) || !audio) return send(res, 400, { success: false, error: 'BAD_AUDIO' });
    if (audio.length * 0.75 > MAX_AUDIO_BYTES) return send(res, 413, { success: false, error: 'AUDIO_TOO_LONG' });
    parts = [{ inlineData: { mimeType, data: audio } }, { text: buildFeynmanPrompt({ notion, reference, classe, written: false, country }) }];
  }

  const apiKey = String(process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) return send(res, 503, { success: false, error: 'AI_NOT_CONFIGURED' });

  // Limite par jour et par élève (compteur côté serveur)
  let db;
  let usageRef;
  let used = 0;
  try {
    db = await getDb();
    usageRef = db.collection('feynman_usage').doc(uid);
    const snap = await usageRef.get();
    const data = snap.exists ? snap.data() : null;
    used = data?.date === today() ? Number(data?.[kind] || 0) : 0;
  } catch (e) {
    return send(res, 500, { success: false, error: String(e?.message || 'SERVER_ERROR').slice(0, 120) });
  }
  const limit = DAILY_LIMITS[kind];
  if (used >= limit) return send(res, 429, { success: false, error: 'DAILY_LIMIT', limit, remaining: 0, kind });

  let verdict;
  try {
    verdict = await askGemini(apiKey, parts);
  } catch (e) {
    console.error('[feynman]', String(e?.message || e).slice(0, 200));
    return send(res, 502, { success: false, error: 'AI_UNAVAILABLE' });
  }

  // On ne compte que les analyses réussies
  try {
    const snap = await usageRef.get();
    const data = snap.exists && snap.data()?.date === today() ? snap.data() : { date: today(), audio: 0, text: 0 };
    await usageRef.set({ date: today(), audio: Number(data.audio || 0) + (kind === 'audio' ? 1 : 0), text: Number(data.text || 0) + (kind === 'text' ? 1 : 0), userId: uid }, { merge: true });
  } catch {
    // compteur non mis à jour : sans gravité
  }

  return send(res, 200, { success: true, verdict, kind, limit, remaining: Math.max(0, limit - used - 1) });
}
