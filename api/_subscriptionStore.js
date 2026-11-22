/**
 * KONAN AI - Abonnements : lecture et écriture dans Firestore (serveur uniquement).
 *
 * Collections (jamais lisibles ni modifiables par l'application : règle « tout refuser » de firestore.rules) :
 *  - <préfixe>payments/{numéro de transaction normalisé}  → un numéro ne peut exister qu'UNE fois
 *  - <préfixe>subscriptions/{uid}                          → formule réelle, calculée par le serveur
 * Sur l'ordinateur, le préfixe est toujours « zz_test_ » (zone de test) : voir paymentCollectionPrefix.
 */
import {
  PAYMENT_STATUS, PERIOD_DAYS, PRICES, PROVIDERS, SELLABLE_TIERS,
  adminDecision, computeEntitlement, expectedAmount, isTrustBlocked, paymentCollectionPrefix,
  launchGraceUntil, paymentsEnabled, publicStatus, serverTierFrom, validateDeclaration, validateSaspayStart,
} from './_subscriptionRules.js';
import {
  SASPAY_CHECK_WINDOW_MS, SASPAY_MAX_SESSIONS_PER_DAY, createCheckoutSession, getCheckoutStatus,
  isSaspayId, judgeSaspay, saspayConfig, saspayPaymentId, verifyPayment,
} from './_saspay.js';

export const isProduction = (env = process.env) => Boolean(env.VERCEL) || env.NODE_ENV === 'production';

export function payCol(db, name, env = process.env) {
  return db.collection(`${paymentCollectionPrefix(env, isProduction(env))}${name}`);
}

/** Réglages lus dans les variables du serveur (numéros de paiement, prix de test hors production). */
export function paymentConfig(env = process.env) {
  const production = isProduction(env);
  const clean = (v) => String(v || '').replace(/[^\d+ ]/g, '').trim().slice(0, 20);
  const receivers = {};
  if (clean(env.KONAN_WAVE_NUMBER)) receivers.wave = { label: PROVIDERS.wave, number: clean(env.KONAN_WAVE_NUMBER) };
  if (clean(env.KONAN_ORANGE_NUMBER)) receivers.orange = { label: PROVIDERS.orange, number: clean(env.KONAN_ORANGE_NUMBER) };
  const offers = SELLABLE_TIERS.flatMap((tier) => Object.keys(PERIOD_DAYS).map((period) => ({
    tier, period, days: PERIOD_DAYS[period], amount: expectedAmount(tier, period), normalAmount: PRICES[tier][period],
  })));
  const saspay = saspayConfig(env, production);
  return {
    enabled: paymentsEnabled(env),
    production,
    testMode: !production,
    // SasPay configuré (clé API sur le serveur) : paiement automatique, l'élève ne recopie plus de numéro
    saspay: saspay.enabled,
    saspaySandbox: Boolean(saspay.enabled && saspay.sandbox),
    receiverName: String(env.KONAN_PAYMENT_NAME || '').replace(/[<>]/g, '').trim().slice(0, 60),
    receivers,
    offers,
  };
}

const docData = (snap) => ({ id: snap.id, ...snap.data() });

async function paymentsOf(db, uid, tx, env) {
  const q = payCol(db, 'payments', env).where('uid', '==', uid);
  const snap = tx ? await tx.get(q) : await q.get();
  return snap.docs.map(docData);
}

function subscriptionDoc(payments, nowMs, env = process.env) {
  const graceUntilMs = launchGraceUntil(env);
  const ent = graceUntilMs && nowMs < graceUntilMs
    ? computeEntitlement(payments, graceUntilMs, { startAfterMs: graceUntilMs })
    : computeEntitlement(payments, nowMs, { startAfterMs: graceUntilMs });
  return {
    tier: ent.tier,
    endsAt: ent.endsAt ? new Date(ent.endsAt).toISOString() : null,
    provisional: ent.provisional,
    trustBlocked: isTrustBlocked(payments),
    updatedAt: new Date(nowMs).toISOString(),
  };
}

/** État de l'abonnement d'un élève (ce que voit l'élève). */
export async function getStatus(db, uid, nowMs = Date.now(), env = process.env) {
  return publicStatus(await paymentsOf(db, uid, null, env), nowMs, { graceUntilMs: launchGraceUntil(env) });
}

/**
 * Déclaration d'un paiement par l'élève. Tout se passe dans UNE transaction :
 * - le numéro de transaction est l'identifiant du document → « create » échoue s'il a déjà servi
 *   (même depuis un autre compte, même au même instant) ;
 * - la fiche d'abonnement de l'élève est lue puis réécrite → deux déclarations simultanées du même
 *   élève passent l'une après l'autre (la seconde voit la première « en attente » et est refusée).
 */
export async function declarePayment(db, uid, body, who = {}, nowMs = Date.now(), env = process.env) {
  const config = paymentConfig(env);
  if (!config.enabled) return { ok: false, error: 'PAYMENTS_DISABLED' };
  if (!config.receivers[String(body?.provider || '')]) return { ok: false, error: 'BAD_PROVIDER' };
  const subRef = payCol(db, 'subscriptions', env).doc(uid);
  try {
    return await db.runTransaction(async (tx) => {
      await tx.get(subRef); // verrou : sérialise les déclarations d'un même élève
      const existing = await paymentsOf(db, uid, tx, env);
      const check = validateDeclaration(body, existing, { nowMs });
      if (!check.ok) return { ok: false, error: check.error };
      const { tier, period, provider, ref, payerPhone } = check.clean;
      const payRef = payCol(db, 'payments', env).doc(ref);
      if ((await tx.get(payRef)).exists) return { ok: false, error: 'REF_USED' };
      const payment = {
        id: ref,
        uid,
        tier,
        period,
        provider,
        ref,
        refRaw: String(body.ref).slice(0, 60),
        payerPhone,
        amount: expectedAmount(tier, period),
        receiverNumber: config.receivers[provider].number,
        status: PAYMENT_STATUS.pending,
        declaredAt: new Date(nowMs).toISOString(),
        studentName: String(who.name || '').slice(0, 80),
        studentEmail: String(who.email || '').slice(0, 120),
        testMode: config.testMode,
      };
      tx.create(payRef, payment);
      const all = [...existing, payment];
      tx.set(subRef, subscriptionDoc(all, nowMs, env));
      return { ok: true, status: publicStatus(all, nowMs, { graceUntilMs: launchGraceUntil(env) }) };
    }, { maxAttempts: 5 });
  } catch (e) {
    // Deux comptes qui déclarent le même numéro au même instant : le second « create » échoue
    if (e?.code === 6 || /ALREADY_EXISTS|already exists/i.test(String(e?.message || ''))) return { ok: false, error: 'REF_USED' };
    throw e;
  }
}

// ---------------------------------------------------------------------------------------------
// SasPay : page de paiement hébergée. Collection <préfixe>saspay_sessions/{id de session SasPay}.
// ---------------------------------------------------------------------------------------------

const SASPAY_OPEN = 'PENDING';

async function saspaySessionsOf(db, uid, env) {
  const snap = await payCol(db, 'saspay_sessions', env).where('uid', '==', uid).get();
  return snap.docs.map(docData);
}

/** Session de paiement encore ouverte, montrée à l'élève (« continuer le paiement »). */
export function saspayPendingView(sessions, nowMs) {
  const open = (sessions || [])
    .filter((s) => s.status === SASPAY_OPEN && nowMs - Date.parse(s.createdAt) < SASPAY_CHECK_WINDOW_MS)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))[0];
  if (!open) return null;
  const expired = Date.parse(open.expiresAt) <= nowMs;
  return { sessionId: open.id, period: open.period, amount: open.amount, createdAt: open.createdAt, checkoutUrl: expired ? null : open.checkoutUrl };
}

/**
 * L'élève choisit sa formule : on crée la page de paiement SasPay et on la retient dans la base.
 * Le prix vient des règles du serveur. Renvoie { ok, checkoutUrl, sessionId } ou { ok:false, error }.
 */
export async function startSaspayCheckout(db, uid, body, who = {}, { appUrl = '', nowMs = Date.now(), env = process.env, fetchImpl } = {}) {
  const config = paymentConfig(env);
  if (!config.enabled) return { ok: false, error: 'PAYMENTS_DISABLED' };
  const sp = saspayConfig(env, config.production);
  if (!sp.enabled) return { ok: false, error: 'SASPAY_NOT_CONFIGURED' };
  const email = String(who.email || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'NO_EMAIL' };

  const [payments, sessions] = await Promise.all([paymentsOf(db, uid, null, env), saspaySessionsOf(db, uid, env)]);
  const sessionsLast24h = sessions.filter((s) => nowMs - Date.parse(s.createdAt) < 24 * 3600 * 1000).length;
  const check = validateSaspayStart(body, payments, { nowMs, sessionsLast24h, maxPerDay: SASPAY_MAX_SESSIONS_PER_DAY });
  if (!check.ok) return { ok: false, error: check.error };
  const { tier, period, amount } = check.clean;

  const base = sp.appUrl || appUrl;
  const created = await createCheckoutSession(sp, {
    amount,
    description: `KONAN Pro · ${period === 'mois' ? '1 mois' : '6 mois'}`,
    email,
    name: who.name,
    returnUrl: base ? `${base}/?paiement=saspay` : '',
    metadata: { app: 'konan', tier, period },
    nowMs,
  }, { fetchImpl });
  if (!created.ok) {
    console.error('[saspay] création de session refusée :', created.status, created.error);
    return { ok: false, error: created.status === 429 ? 'TOO_MANY' : 'SASPAY_UNAVAILABLE' };
  }
  const s = created.data || {};
  if (!isSaspayId(s.id) || !/^https:\/\//.test(String(s.checkout_url || ''))) {
    console.error('[saspay] réponse de création inattendue');
    return { ok: false, error: 'SASPAY_UNAVAILABLE' };
  }
  await payCol(db, 'saspay_sessions', env).doc(s.id).set({
    uid, tier, period, amount,
    status: SASPAY_OPEN,
    checkoutUrl: s.checkout_url,
    createdAt: new Date(nowMs).toISOString(),
    expiresAt: s.expires_at || new Date(nowMs + 3600_000).toISOString(),
    studentName: String(who.name || '').slice(0, 80),
    studentEmail: email.slice(0, 120),
    sandbox: sp.sandbox,
  });
  return { ok: true, checkoutUrl: s.checkout_url, sessionId: s.id };
}

/**
 * Vérifie auprès de SasPay une session de l'élève et, SEULEMENT si le paiement est « SUCCESS », active Pro.
 * Livraison unique : le paiement porte l'identifiant de la transaction SasPay (« create » échoue s'il existe déjà).
 */
async function settleSaspaySession(db, session, { nowMs, env, sp, fetchImpl }) {
  const st = await getCheckoutStatus(sp, session.id, { fetchImpl });
  if (!st.ok) return { outcome: 'pending', reason: st.error };
  let verify = null;
  if (String(st.data?.status || '').toUpperCase() === 'PAID' && isSaspayId(st.data?.transaction_id)) {
    const v = await verifyPayment(sp, st.data.transaction_id, { fetchImpl });
    if (!v.ok) return { outcome: 'pending', reason: v.error };
    verify = v.data;
  }
  const decision = judgeSaspay({ session, status: st.data, verify });
  const sessionRef = payCol(db, 'saspay_sessions', env).doc(session.id);
  const at = new Date(nowMs).toISOString();

  if (decision.outcome === 'closed' || decision.outcome === 'failed') {
    await sessionRef.update({ status: decision.outcome === 'closed' ? String(decision.reason || 'CLOSED') : 'FAILED', checkedAt: at, failReason: decision.reason || null });
    if (decision.outcome === 'failed') console.error('[saspay] paiement non livré :', session.id, decision.reason);
    return decision;
  }
  if (decision.outcome !== 'paid') return decision;

  const paymentId = saspayPaymentId(st.data.transaction_id);
  const payRef = payCol(db, 'payments', env).doc(paymentId);
  const subRef = payCol(db, 'subscriptions', env).doc(session.uid);
  await db.runTransaction(async (tx) => {
    const [sessSnap, paySnap] = await Promise.all([tx.get(sessionRef), tx.get(payRef)]);
    await tx.get(subRef);
    if (paySnap.exists) {
      // Déjà livré (deux vérifications au même moment) : on referme seulement la session
      if (sessSnap.exists && sessSnap.data().status === SASPAY_OPEN) tx.update(sessionRef, { status: 'PAID', paymentId, checkedAt: at });
      return;
    }
    const existing = await paymentsOf(db, session.uid, tx, env);
    const payment = {
      id: paymentId,
      uid: session.uid,
      tier: session.tier,
      period: session.period,
      provider: 'saspay',
      ref: String(verify?.reference || st.data.transaction_reference || st.data.transaction_id).slice(0, 60),
      amount: session.amount,
      status: PAYMENT_STATUS.confirmed,
      declaredAt: at,
      checkedAt: at,
      checkedBy: 'saspay',
      saspaySessionId: session.id,
      saspayTransactionId: st.data.transaction_id,
      network: String(verify?.network_code || '').slice(0, 30), // « wave_ci », « orange_ci »…
      netAmount: verify?.net_amount ?? null, // ce qui revient à KONAN
      debitedAmount: verify?.debited_amount ?? null, // ce que l'élève a payé (frais compris)
      fee: verify?.amounts?.fee ?? verify?.client_fee ?? null,
      studentName: session.studentName || '',
      studentEmail: session.studentEmail || '',
      testMode: !isProduction(env) || Boolean(session.sandbox),
    };
    tx.create(payRef, payment);
    tx.update(sessionRef, { status: 'PAID', paymentId, checkedAt: at });
    tx.set(subRef, subscriptionDoc([...existing, payment], nowMs, env));
  }, { maxAttempts: 5 });
  return { outcome: 'paid' };
}

/**
 * Vérifie les sessions SasPay encore ouvertes d'un élève (au plus 3, des 48 dernières heures).
 * Appelé à chaque lecture de l'abonnement : l'élève qui revient dans l'appli après avoir payé devient Pro.
 */
export async function checkSaspayForUser(db, uid, { nowMs = Date.now(), env = process.env, fetchImpl } = {}) {
  const sp = saspayConfig(env, isProduction(env));
  if (!sp.enabled) return [];
  const open = (await saspaySessionsOf(db, uid, env))
    .filter((s) => s.status === SASPAY_OPEN && nowMs - Date.parse(s.createdAt) < SASPAY_CHECK_WINDOW_MS)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, 3);
  const results = [];
  for (const s of open) {
    try {
      results.push({ sessionId: s.id, ...(await settleSaspaySession(db, s, { nowMs, env, sp, fetchImpl })) });
    } catch (e) {
      console.error('[saspay] vérification impossible :', s.id, e?.message || e);
      results.push({ sessionId: s.id, outcome: 'pending', reason: 'error' });
    }
  }
  return results;
}

/** Session ouverte de l'élève (pour l'écran d'abonnement). */
export async function saspayPendingFor(db, uid, nowMs = Date.now(), env = process.env) {
  return saspayPendingView(await saspaySessionsOf(db, uid, env), nowMs);
}

/** Liste pour l'administrateur : paiements à vérifier d'abord, puis les derniers traités. */
export async function adminList(db, env = process.env) {
  const col = payCol(db, 'payments', env);
  const [pendingSnap, recentSnap] = await Promise.all([
    col.where('status', '==', PAYMENT_STATUS.pending).get(),
    col.orderBy('declaredAt', 'desc').limit(60).get(),
  ]);
  const pending = pendingSnap.docs.map(docData).sort((a, b) => Date.parse(a.declaredAt) - Date.parse(b.declaredAt));
  const recent = recentSnap.docs.map(docData).filter((p) => p.status !== PAYMENT_STATUS.pending);
  return { pending, recent };
}

/** Décision de l'administrateur : « confirm » ou « reject » (avec une raison). */
export async function adminDecide(db, paymentId, action, { reason, adminUid } = {}, nowMs = Date.now(), env = process.env) {
  const id = String(paymentId || '');
  if (!/^[A-Z0-9.]{6,40}$/.test(id)) return { ok: false, error: 'NOT_FOUND' };
  const payRef = payCol(db, 'payments', env).doc(id);
  return db.runTransaction(async (tx) => {
    const snap = await tx.get(payRef);
    if (!snap.exists) return { ok: false, error: 'NOT_FOUND' };
    const payment = docData(snap);
    const subRef = payCol(db, 'subscriptions', env).doc(payment.uid);
    await tx.get(subRef);
    const others = (await paymentsOf(db, payment.uid, tx, env)).filter((p) => p.id !== id);
    const decision = adminDecision(payment, action, { reason, nowMs, adminUid });
    if (!decision.ok) return decision;
    tx.update(payRef, decision.patch);
    const all = [...others, { ...payment, ...decision.patch }];
    const sub = subscriptionDoc(all, nowMs, env);
    tx.set(subRef, sub);
    return { ok: true, payment: { ...payment, ...decision.patch }, subscription: sub };
  }, { maxAttempts: 5 });
}

/**
 * Formule réelle d'un élève pour les autres routes du serveur (ligue, devoirs).
 * Paiement activé : fiche d'abonnement écrite par le serveur, jamais la formule de l'application.
 */
export async function serverPlanTier(db, uid, userDoc, nowMs = Date.now(), env = process.env) {
  const enabled = paymentsEnabled(env);
  let subscriptionDoc = null;
  if (enabled) {
    const snap = await payCol(db, 'subscriptions', env).doc(uid).get();
    subscriptionDoc = snap.exists ? snap.data() : null;
  }
  return serverTierFrom({ paymentsEnabled: enabled, subscriptionDoc, userDoc, nowMs, graceUntilMs: launchGraceUntil(env) });
}
