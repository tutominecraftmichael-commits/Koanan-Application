/**
 * KONAN AI - Abonnements KONAN Pro payés par Wave ou Orange Money.
 * Endpoint : POST /api/subscription   (en-tête Authorization: Bearer <jeton Firebase>)
 *
 * Élève :
 *   { action: 'status' }                                         → réglages (prix, numéros) + son abonnement
 *   { action: 'declare', tier, period, provider, ref, payerPhone } → « J'ai payé » : activé tout de suite
 * Administrateur (compte Google avec l'autorisation « admin », connexion de moins de 12 h) :
 *   { action: 'admin_list' }                                     → paiements à vérifier + derniers traités
 *   { action: 'admin_confirm', paymentId }                       → l'argent est bien arrivé
 *   { action: 'admin_reject', paymentId, reason }                → rien reçu : Pro retiré tout de suite
 *
 * Interrupteur : rien n'est vendu tant que KONAN_PAYMENTS=on n'est pas défini sur le serveur.
 * Sur l'ordinateur, tout est écrit dans une zone de test séparée (collections « zz_test_… »).
 */
import { getDb, send, readBody, isAllowedOrigin } from './_examCommon.js';
import { loadLocalEnvIfPresent } from './_env.js';
import { verifyAdminIdToken, verifyFirebaseIdToken } from './_firebaseToken.js';
import { adminDecide, adminList, declarePayment, getStatus, paymentConfig } from './_subscriptionStore.js';

const ADMIN_ACTIONS = new Set(['admin_list', 'admin_confirm', 'admin_reject']);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { success: false, error: 'METHOD_NOT_ALLOWED' });
  }
  if (!isAllowedOrigin(req)) return send(res, 403, { success: false, error: 'FORBIDDEN_ORIGIN' });
  loadLocalEnvIfPresent();

  const authHeader = String(req.headers.authorization || '');
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  let body;
  try {
    body = (await readBody(req, 20_000)) || {};
  } catch (e) {
    return send(res, e?.code === 413 ? 413 : 400, { success: false, error: 'BAD_BODY' });
  }
  const action = String(body.action || '');

  try {
    // --- Administrateur : jeton Google + autorisation « admin » (jamais l'ancien mot de passe partagé)
    if (ADMIN_ACTIONS.has(action)) {
      const check = await verifyAdminIdToken(token);
      if (!check.ok) return send(res, check.status, { success: false, error: check.error, message: check.message });
      const db = await getDb();
      const config = paymentConfig();
      if (action === 'admin_list') {
        return send(res, 200, { success: true, config: { enabled: config.enabled, testMode: config.testMode }, ...(await adminList(db)) });
      }
      const out = await adminDecide(db, body.paymentId, action === 'admin_confirm' ? 'confirm' : 'reject', {
        reason: String(body.reason || ''), adminUid: check.payload.sub,
      });
      return send(res, out.ok ? 200 : 409, { success: out.ok, ...out });
    }

    // --- Élève connecté
    let payload;
    try {
      payload = await verifyFirebaseIdToken(token);
    } catch (e) {
      return send(res, 401, { success: false, error: e?.message === 'TOKEN_EXPIRED' ? 'TOKEN_EXPIRED' : 'UNAUTHORIZED' });
    }
    const uid = payload.sub;
    const config = paymentConfig();
    const publicConfig = { enabled: config.enabled, testMode: config.testMode, receiverName: config.receiverName, receivers: config.receivers, offers: config.offers };

    if (action === 'status') {
      if (!config.enabled) return send(res, 200, { success: true, config: publicConfig, status: null });
      const db = await getDb();
      return send(res, 200, { success: true, config: publicConfig, status: await getStatus(db, uid) });
    }
    if (action === 'declare') {
      const db = await getDb();
      const out = await declarePayment(db, uid, body, { name: payload.name, email: payload.email });
      if (!out.ok) return send(res, 409, { success: false, error: out.error });
      return send(res, 200, { success: true, config: publicConfig, status: out.status });
    }
    return send(res, 400, { success: false, error: 'BAD_ACTION' });
  } catch (err) {
    console.error('[subscription]', err?.message || err);
    return send(res, 500, { success: false, error: 'SERVER_ERROR' });
  }
}
