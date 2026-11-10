/**
 * KONAN AI - Ce compte existe-t-il ?   POST /api/account-exists   { email }  ->  { exists, providers }
 *
 * Pourquoi côté serveur : Firebase protège les comptes contre l'« énumération » et répond la même chose
 * pour « compte inexistant » et « mauvais mot de passe ». Pour pouvoir dire clairement à l'élève
 * « ce compte n'existe pas, crée-le » ou « ce compte existe déjà, connecte-toi », le serveur interroge
 * Firebase Authentication avec la clé de service (API Identity Toolkit « accounts:lookup »).
 *
 * Protections : appels acceptés seulement depuis le site, nombre de vérifications limité par adresse IP,
 * aucune autre information renvoyée que « existe / n'existe pas » et le mode de connexion (email ou Google).
 */
import { loadLocalEnvIfPresent } from './_env.js';

// Beaucoup d'élèves partagent la même adresse IP (réseau mobile de l'opérateur, Wi-Fi de l'école) :
// la limite reste anti-abus mais ne doit pas bloquer une classe entière qui s'inscrit en même temps.
const RATE_LIMIT = 80;                 // vérifications
const RATE_WINDOW_MS = 10 * 60 * 1000; // par tranche de 10 minutes et par adresse IP
const recentCalls = new Map();

let credentialCache = null;

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
    if (size > 2000) throw new Error('TOO_LARGE');
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

function clientIp(req) {
  const fwd = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return fwd || req.socket?.remoteAddress || 'inconnu';
}

function isRateLimited(ip) {
  const now = Date.now();
  const calls = (recentCalls.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (calls.length >= RATE_LIMIT) {
    recentCalls.set(ip, calls);
    return true;
  }
  calls.push(now);
  recentCalls.set(ip, calls);
  if (recentCalls.size > 5000) recentCalls.clear();
  return false;
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

/** Clé de service Firebase -> jeton d'accès Google (mis en cache par firebase-admin). */
async function getServiceCredential() {
  if (credentialCache) return credentialCache;
  const raw = String(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '').trim();
  if (!raw) throw new Error('MISSING_SERVICE_ACCOUNT_KEY');
  const parsed = raw.startsWith('{') ? JSON.parse(raw) : JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'));
  const { cert } = await import('firebase-admin/app');
  credentialCache = { credential: cert(parsed), projectId: parsed.project_id || process.env.VITE_FIREBASE_PROJECT_ID };
  return credentialCache;
}

/** Interroge Firebase Authentication : renvoie { exists, providers }. */
export async function lookupAccount(email) {
  const { credential, projectId } = await getServiceCredential();
  const { access_token: accessToken } = await credential.getAccessToken();
  const res = await fetch(`https://identitytoolkit.googleapis.com/v1/projects/${projectId}/accounts:lookup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ email: [email] }),
  });
  if (!res.ok) throw new Error(`LOOKUP_FAILED_${res.status}`);
  const data = await res.json();
  const user = Array.isArray(data.users) ? data.users[0] : null;
  if (!user) return { exists: false, providers: [] };
  const providers = Array.isArray(user.providerUserInfo)
    ? [...new Set(user.providerUserInfo.map((p) => p.providerId).filter(Boolean))]
    : [];
  if (user.passwordHash && !providers.includes('password')) providers.push('password');
  return { exists: true, providers, disabled: Boolean(user.disabled) };
}

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { error: 'METHOD_NOT_ALLOWED' });
  }
  if (!isAllowedOrigin(req)) return send(res, 403, { error: 'FORBIDDEN_ORIGIN' });
  if (isRateLimited(clientIp(req))) {
    return send(res, 429, { error: 'RATE_LIMITED', message: 'Trop de vérifications. Réessaie dans quelques minutes.' });
  }
  loadLocalEnvIfPresent();

  let email = '';
  try {
    email = String((await readBody(req))?.email || '').trim().toLowerCase();
  } catch {
    return send(res, 400, { error: 'BAD_BODY' });
  }
  if (!EMAIL_RE.test(email)) return send(res, 400, { error: 'BAD_EMAIL' });

  try {
    const result = await lookupAccount(email);
    return send(res, 200, { exists: result.exists, providers: result.providers, disabled: result.disabled || false });
  } catch (err) {
    console.error('[account-exists]', String(err?.message || err).slice(0, 120));
    return send(res, 503, { error: 'LOOKUP_UNAVAILABLE' });
  }
}
