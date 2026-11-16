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
  paymentsEnabled, publicStatus, serverTierFrom, validateDeclaration,
} from './_subscriptionRules.js';

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
  return {
    enabled: paymentsEnabled(env),
    production,
    testMode: !production,
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

function subscriptionDoc(payments, nowMs) {
  const ent = computeEntitlement(payments, nowMs);
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
  return publicStatus(await paymentsOf(db, uid, null, env), nowMs);
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
      tx.set(subRef, subscriptionDoc(all, nowMs));
      return { ok: true, status: publicStatus(all, nowMs) };
    }, { maxAttempts: 5 });
  } catch (e) {
    // Deux comptes qui déclarent le même numéro au même instant : le second « create » échoue
    if (e?.code === 6 || /ALREADY_EXISTS|already exists/i.test(String(e?.message || ''))) return { ok: false, error: 'REF_USED' };
    throw e;
  }
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
    const sub = subscriptionDoc(all, nowMs);
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
  return serverTierFrom({ paymentsEnabled: enabled, subscriptionDoc, userDoc, nowMs });
}
