/**
 * KONAN AI - Paiement de KONAN Pro par SasPay (page de paiement hébergée : Wave, Orange Money, carte…).
 *
 * Parcours (aucune livraison sans preuve) :
 *  1. L'élève choisit sa formule → le serveur crée une session SasPay (POST /checkout-sessions/)
 *     et renvoie `checkout_url` : l'élève paie sur la page de SasPay.
 *  2. À son retour (ou à la prochaine ouverture de l'appli), le serveur demande à SasPay l'état de la
 *     session (GET /checkout-sessions/{id}/status/) puis vérifie le paiement lui-même
 *     (GET /payments/{transaction_id}/verify/). SEUL le statut « SUCCESS » active Pro, une seule fois
 *     (identifiant du paiement = identifiant de la transaction SasPay, créé une seule fois dans la base).
 *
 * La clé API reste sur le serveur (variable SASPAY_API_KEY), jamais dans l'application ni dans les journaux.
 * Spécification suivie : https://docs.saspay.me/api-reference/openapi.json (aucune route inventée).
 *
 * Ce fichier contient les appels à SasPay et des fonctions PURES (testées sans réseau).
 */

export const SASPAY_LIVE_BASE = 'https://api.saspay.me/api/v1';
export const SASPAY_SANDBOX_BASE = 'https://sandbox-api.saspay.me/api/v1';

/** Une session de paiement non payée expire après ce délai (l'élève en recrée une s'il le faut). */
export const SASPAY_SESSION_TTL_MS = 60 * 60 * 1000;
/** On vérifie encore une session « en cours » jusqu'à 48 h après sa création (paiement lent, retour tardif). */
export const SASPAY_CHECK_WINDOW_MS = 48 * 3600 * 1000;
/** Garde-fou : 8 sessions de paiement au plus par élève et par 24 h. */
export const SASPAY_MAX_SESSIONS_PER_DAY = 8;

/**
 * Réglages SasPay lus dans les variables du serveur.
 * - sk_test_… → bac à sable SasPay (aucun argent réel) ; sk_live_… → paiements réels.
 * - Sur l'ordinateur (hors production), une clé sk_live_ est REFUSÉE : on ne teste jamais avec de l'argent réel.
 */
export function saspayConfig(env = process.env, production = Boolean(env.VERCEL) || env.NODE_ENV === 'production') {
  const key = String(env.SASPAY_API_KEY || '').trim();
  const isTest = key.startsWith('sk_test_');
  const isLive = key.startsWith('sk_live_');
  if (!isTest && !isLive) return { enabled: false, reason: key ? 'BAD_KEY' : 'NO_KEY' };
  if (isLive && !production) return { enabled: false, reason: 'LIVE_KEY_LOCAL' };
  const appUrl = String(env.APP_URL || '').trim().replace(/\/+$/, '');
  return {
    enabled: true,
    sandbox: isTest,
    base: isTest ? SASPAY_SANDBOX_BASE : SASPAY_LIVE_BASE,
    key,
    appUrl: /^https?:\/\/[^\s/]+$/.test(appUrl) ? appUrl : '',
  };
}

/** Montant au format attendu par SasPay : chaîne décimale « 2500.00 » (jamais un nombre à virgule flottante). */
export function saspayAmount(fcfa) {
  const n = Math.round(Number(fcfa));
  if (!Number.isSafeInteger(n) || n <= 0) throw new Error('BAD_AMOUNT');
  return `${n}.00`;
}

/** Identifiant du paiement dans la base KONAN : « SP » + identifiant SasPay en majuscules, sans tirets. */
export function saspayPaymentId(transactionId) {
  const hex = String(transactionId || '').replace(/-/g, '').toUpperCase();
  return /^[0-9A-F]{16,36}$/.test(hex) ? `SP${hex}` : '';
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const isSaspayId = (id) => UUID_RE.test(String(id || ''));

/**
 * Décision à partir de l'état de la session et de la vérification du paiement (fonction pure).
 * Renvoie { outcome: 'paid' | 'pending' | 'closed' | 'failed', reason? }.
 * - 'paid'   : session PAID ET vérification SUCCESS ET montant demandé ≥ prix → on active Pro.
 * - 'pending': rien de définitif (on revérifiera plus tard, on ne livre rien).
 * - 'closed' : session expirée ou annulée sans paiement.
 * - 'failed' : paiement refusé, ou montant incohérent (jamais de livraison).
 */
export function judgeSaspay({ session, status, verify }) {
  const s = String(status?.status || '').toUpperCase();
  if (s === 'EXPIRED' || s === 'CANCELLED') return { outcome: 'closed', reason: s };
  if (s !== 'PAID') return { outcome: 'pending' };
  if (!isSaspayId(status?.transaction_id)) return { outcome: 'pending', reason: 'NO_TRANSACTION' };
  const v = String(verify?.status || '').toUpperCase();
  if (v === 'FAILED' || v === 'CANCELLED') return { outcome: 'failed', reason: v };
  if (v !== 'SUCCESS') return { outcome: 'pending', reason: v || 'UNVERIFIED' };
  if (verify?.id && String(verify.id).toLowerCase() !== String(status.transaction_id).toLowerCase()) {
    return { outcome: 'failed', reason: 'ID_MISMATCH' };
  }
  // Le prix est fixé par NOTRE serveur à la création de la session ; contrôle en plus du montant demandé
  const asked = Number(verify?.requested_amount);
  if (Number.isFinite(asked) && asked + 0.5 < Number(session?.amount || 0)) return { outcome: 'failed', reason: 'AMOUNT_TOO_LOW' };
  return { outcome: 'paid' };
}

/** Appel à l'API SasPay (serveur uniquement). Renvoie { ok, status, data, error }. Jamais la clé dans les erreurs. */
export async function saspayRequest(config, method, path, body, { fetchImpl = fetch, timeoutMs = 15_000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetchImpl(`${config.base}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${config.key}`,
        Accept: 'application/json',
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    let json = null;
    try { json = await res.json(); } catch { /* réponse vide */ }
    if (res.ok && json && json.success !== false) return { ok: true, status: res.status, data: json.data ?? json };
    const code = json?.error?.code || (res.status === 429 ? 'rate_limited' : `http_${res.status}`);
    return { ok: false, status: res.status, error: String(code).slice(0, 60) };
  } catch (e) {
    return { ok: false, status: 0, error: e?.name === 'AbortError' ? 'timeout' : 'network' };
  } finally {
    clearTimeout(timer);
  }
}

/** Crée la page de paiement SasPay (le prix vient du serveur, jamais de l'application). */
export function createCheckoutSession(config, { amount, description, email, name, returnUrl, metadata, nowMs = Date.now() }, opts) {
  return saspayRequest(config, 'POST', '/checkout-sessions/', {
    amount: saspayAmount(amount),
    currency: 'XOF',
    country: 'CI',
    description: String(description || '').slice(0, 120),
    customer_email: email,
    customer_name: String(name || 'Élève KONAN').slice(0, 80),
    ...(returnUrl ? { return_url: returnUrl } : {}),
    metadata: metadata || {},
    expires_at: new Date(nowMs + SASPAY_SESSION_TTL_MS).toISOString(),
  }, opts);
}

export function getCheckoutStatus(config, sessionId, opts) {
  if (!isSaspayId(sessionId)) return Promise.resolve({ ok: false, status: 400, error: 'bad_id' });
  return saspayRequest(config, 'GET', `/checkout-sessions/${sessionId}/status/`, null, opts);
}

export function verifyPayment(config, transactionId, opts) {
  if (!isSaspayId(transactionId)) return Promise.resolve({ ok: false, status: 400, error: 'bad_id' });
  return saspayRequest(config, 'GET', `/payments/${transactionId}/verify/`, null, opts);
}
