/**
 * Vérification d'un jeton d'identité Firebase (ID token) SANS firebase-admin/auth.
 * (Sur Vercel, firebase-admin/auth ne se charge pas : jwks-rsa -> jose ESM.)
 *
 * Procédure officielle Firebase : signature RS256 vérifiée avec les clés publiques de Google,
 * puis contrôle de aud (projet), iss, exp, iat, auth_time et sub.
 * https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_a_third-party_jwt_library
 */
import { createVerify } from 'crypto';

const CERTS_URL = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';
const CLOCK_SKEW_SEC = 300;
let certCache = { certs: null, expiresAt: 0 };
let certsOverride = null; // tests uniquement

/** Pour les tests automatisés : remplace les clés publiques de Google par des clés de test. */
export function __setCertsForTests(certs) {
  certsOverride = certs;
}

async function getGoogleCerts() {
  if (certsOverride) return certsOverride;
  if (certCache.certs && Date.now() < certCache.expiresAt) return certCache.certs;
  const res = await fetch(CERTS_URL);
  if (!res.ok) throw new Error('CERTS_UNAVAILABLE');
  const certs = await res.json();
  const maxAge = Number(((res.headers.get('cache-control') || '').match(/max-age=(\d+)/) || [])[1] || 3600);
  certCache = { certs, expiresAt: Date.now() + maxAge * 1000 };
  return certs;
}

/** Identifiant du projet Firebase (même source que l'application). */
export function getFirebaseProjectId() {
  const fromEnv = process.env.FIREBASE_PROJECT_ID || process.env.VITE_FIREBASE_PROJECT_ID;
  if (fromEnv) return String(fromEnv).trim();
  try {
    const raw = String(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '').trim();
    if (raw) {
      const parsed = raw.startsWith('{') ? JSON.parse(raw) : JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'));
      if (parsed.project_id) return parsed.project_id;
    }
  } catch {
    // clé de service illisible : on garde la valeur par défaut
  }
  return 'konanai-ed046';
}

function decodeSegment(segment) {
  return JSON.parse(Buffer.from(segment, 'base64url').toString('utf8'));
}

/**
 * Vérifie un ID token Firebase. Renvoie son contenu (payload) ou lève une erreur dont le message
 * est un code : INVALID_TOKEN, TOKEN_EXPIRED, CERTS_UNAVAILABLE.
 */
export async function verifyFirebaseIdToken(idToken) {
  const parts = String(idToken || '').split('.');
  if (parts.length !== 3) throw new Error('INVALID_TOKEN');
  const [headerB64, payloadB64, signatureB64] = parts;

  let header, payload;
  try {
    header = decodeSegment(headerB64);
    payload = decodeSegment(payloadB64);
  } catch {
    throw new Error('INVALID_TOKEN');
  }
  if (header.alg !== 'RS256' || !header.kid) throw new Error('INVALID_TOKEN');

  const certs = await getGoogleCerts();
  const cert = certs[header.kid];
  if (!cert) throw new Error('INVALID_TOKEN');
  const verifier = createVerify('RSA-SHA256');
  verifier.update(`${headerB64}.${payloadB64}`);
  if (!verifier.verify(cert, Buffer.from(signatureB64, 'base64url'))) throw new Error('INVALID_TOKEN');

  const projectId = getFirebaseProjectId();
  const now = Math.floor(Date.now() / 1000);
  if (payload.aud !== projectId) throw new Error('INVALID_TOKEN');
  if (payload.iss !== `https://securetoken.google.com/${projectId}`) throw new Error('INVALID_TOKEN');
  if (typeof payload.sub !== 'string' || !payload.sub || payload.sub.length > 128) throw new Error('INVALID_TOKEN');
  if (typeof payload.iat !== 'number' || payload.iat > now + CLOCK_SKEW_SEC) throw new Error('INVALID_TOKEN');
  if (typeof payload.auth_time !== 'number' || payload.auth_time > now + CLOCK_SKEW_SEC) throw new Error('INVALID_TOKEN');
  if (typeof payload.exp !== 'number' || payload.exp <= now) throw new Error('TOKEN_EXPIRED');
  return payload;
}

/**
 * Accès administrateur : jeton valide + autorisation « admin » (custom claim posé par
 * scripts/set-admin-claim.mjs) + connexion par Google (dont la validation en deux étapes protège
 * le compte) + connexion récente.
 * Renvoie { ok: true, payload } ou { ok: false, status, error, message }.
 */
export async function verifyAdminIdToken(idToken, { maxAuthAgeSec = 12 * 3600 } = {}) {
  let payload;
  try {
    payload = await verifyFirebaseIdToken(idToken);
  } catch (err) {
    const code = err && err.message === 'TOKEN_EXPIRED' ? 'TOKEN_EXPIRED' : err && err.message === 'CERTS_UNAVAILABLE' ? 'CERTS_UNAVAILABLE' : 'INVALID_TOKEN';
    return {
      ok: false,
      status: code === 'CERTS_UNAVAILABLE' ? 503 : 401,
      error: code,
      message: code === 'TOKEN_EXPIRED' ? 'Session expirée : reconnectez-vous.' : 'Identité administrateur invalide.',
    };
  }
  if (payload.admin !== true) {
    return { ok: false, status: 403, error: 'NOT_ADMIN', message: "Ce compte n'est pas administrateur." };
  }
  if (payload.firebase?.sign_in_provider !== 'google.com' || payload.email_verified !== true) {
    return { ok: false, status: 403, error: 'GOOGLE_REQUIRED', message: 'Connexion administrateur par Google obligatoire.' };
  }
  const age = Math.floor(Date.now() / 1000) - payload.auth_time;
  if (age > maxAuthAgeSec) {
    return { ok: false, status: 401, error: 'REAUTH_REQUIRED', message: 'Pour votre sécurité, reconnectez-vous avec Google.' };
  }
  return { ok: true, payload };
}
