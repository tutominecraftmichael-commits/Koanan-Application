/**
 * KONAN AI - Règles des abonnements payés par Wave ou Orange Money (sans API de paiement).
 *
 * Principe « activé tout de suite, vérifié plus tard » :
 *  1. L'élève envoie l'argent au numéro de KONAN, puis déclare le numéro de transaction.
 *  2. Le serveur l'active AUSSITÔT (Pro « en vérification »), à n'importe quelle heure.
 *  3. L'administrateur compare plus tard avec son historique Wave / Orange Money :
 *     « Confirmer » (l'argent est arrivé) ou « Refuser » (rien reçu → Pro retiré tout de suite,
 *     et cet élève ne peut plus être activé avant vérification).
 *
 * Fonctions PURES (aucun accès à la base) : testées sans Firestore.
 * Le serveur fait foi : l'application de l'élève ne peut jamais se déclarer Pro elle-même.
 */

/** Prix officiels en FCFA. */
export const PRICES = {
  pro: { mois: 2500, semestre: 9950 },
  plus: { mois: 5000, semestre: 19950 },
};

/** Durée de chaque formule en jours. */
export const PERIOD_DAYS = { mois: 30, semestre: 183 };

/** Formules en vente aujourd'hui : KONAN Plus reste en liste d'attente. */
export const SELLABLE_TIERS = ['pro'];

/**
 * Classes qui ont les cours guidés et la préparation aux devoirs (même liste que EXAM_PREP_GRADES,
 * src/lib/exam/examPrepRules.ts). Pour information : depuis le 2026-11-22 (soir), KONAN Pro est EN VENTE
 * pour TOUTES les classes de Côte d'Ivoire (choix du fondateur). Les autres classes sont prévenues avant de
 * payer qu'elles n'ont pas encore de cours (planning, « Je ne comprends pas », méthodes Pro seulement).
 */
export const GRADES_WITH_COURSES = [
  'seconde_a', 'seconde_c',
  'premiere_a', 'premiere_a1', 'premiere_a2', 'premiere_c', 'premiere_d',
  'terminale_a', 'terminale_a1', 'terminale_a2', 'terminale_c', 'terminale_d',
  'lmd_entd_l1',
];
/** Pro est vendu à toutes les classes (le pays, lui, doit être la Côte d'Ivoire). */
export const proAvailableForGrade = () => true;

/**
 * Pro vendu seulement en Côte d'Ivoire : les cours et les devoirs suivent le programme ivoirien
 * (src/lib/country.ts). Pays absent = ancien compte = Côte d'Ivoire.
 */
export const proAvailableForCountry = (country) => {
  const c = String(country || '').trim().toUpperCase();
  return !c || c === 'CI';
};

export const PROVIDERS = { wave: 'Wave', orange: 'Orange Money' };

const DAY_MS = 24 * 3600 * 1000;

export const PAYMENT_STATUS = { pending: 'pending', confirmed: 'confirmed', rejected: 'rejected' };

/** Raisons de refus proposées à l'administrateur (texte montré à l'élève). */
export const REJECT_REASONS = {
  not_received: 'Aucun paiement reçu avec ce numéro de transaction.',
  wrong_amount: 'Le montant reçu ne correspond pas au prix de la formule.',
  duplicate: 'Ce paiement avait déjà été utilisé.',
  other: 'Paiement non validé.',
};

/**
 * Numéro de transaction normalisé : majuscules, sans espaces ni tirets décoratifs.
 * Il sert d'identifiant UNIQUE dans la base : un même numéro ne peut servir qu'une fois,
 * quel que soit le compte (et quel que soit le moyen de paiement choisi).
 * Renvoie '' si le numéro n'a pas une forme possible.
 */
export function normalizeTransactionRef(raw) {
  const s = String(raw ?? '').normalize('NFKC').toUpperCase().replace(/[\s \-–—_:#]/g, '');
  if (!/^[A-Z0-9.]{6,40}$/.test(s)) return '';
  if (!/[0-9]/.test(s)) return ''; // un vrai numéro de transaction contient toujours des chiffres
  if (/^(.)\1+$/.test(s.replace(/\./g, ''))) return ''; // « 000000 », « AAAAAA1 » refusés
  if (/^\.+|\.+$/.test(s) || s.includes('..')) return '';
  return s;
}

/**
 * Numéro de téléphone ivoirien qui a payé (10 chiffres commençant par 01, 05 ou 07, +225 accepté).
 * Il aide l'administrateur à retrouver le paiement dans son historique. Renvoie '' si invalide.
 */
export function normalizePayerPhone(raw) {
  let d = String(raw ?? '').replace(/[^\d+]/g, '');
  if (d.startsWith('+225')) d = d.slice(4);
  else if (d.startsWith('00225')) d = d.slice(5);
  else if (d.length === 13 && d.startsWith('225')) d = d.slice(3);
  if (!/^(01|05|07)\d{8}$/.test(d)) return '';
  return d;
}

/** Montant attendu pour une formule : toujours le vrai prix. */
export function expectedAmount(tier, period) {
  return PRICES[tier]?.[period] || 0;
}

/**
 * Vérifie une déclaration de paiement AVANT écriture (la base vérifie en plus l'unicité du numéro).
 * `existing` = paiements déjà enregistrés de cet élève. Renvoie { ok, error, clean }.
 */
export function validateDeclaration(body, existing, { nowMs, sellable = SELLABLE_TIERS } = {}) {
  const tier = String(body?.tier || '');
  const period = String(body?.period || '');
  const provider = String(body?.provider || '');
  if (!PRICES[tier] || !sellable.includes(tier)) return { ok: false, error: 'TIER_NOT_SOLD' };
  // Pro vendu seulement aux classes qui ont les cours (protège l'élève : il ne paie pas pour rien)
  if (tier === 'pro' && !proAvailableForCountry(body?.country)) return { ok: false, error: 'PRO_NOT_FOR_COUNTRY' };
  if (tier === 'pro' && !proAvailableForGrade(body?.gradeLevel)) return { ok: false, error: 'PRO_NOT_FOR_GRADE' };
  if (!PERIOD_DAYS[period]) return { ok: false, error: 'BAD_PERIOD' };
  if (!PROVIDERS[provider]) return { ok: false, error: 'BAD_PROVIDER' };
  const ref = normalizeTransactionRef(body?.ref);
  if (!ref) return { ok: false, error: 'BAD_REF' };
  const payerPhone = normalizePayerPhone(body?.payerPhone);
  if (!payerPhone) return { ok: false, error: 'BAD_PHONE' };

  const list = Array.isArray(existing) ? existing : [];
  // Un seul paiement en attente de vérification à la fois
  if (list.some((p) => p.status === PAYMENT_STATUS.pending)) return { ok: false, error: 'PENDING_EXISTS' };
  // Pas de changement de formule tant qu'une autre formule est en cours (Pro → Plus : plus tard)
  const ent = computeEntitlement(list, nowMs);
  if (ent.tier !== 'free' && ent.tier !== tier) return { ok: false, error: 'OTHER_TIER_ACTIVE' };
  // Garde-fou contre le spam : 5 déclarations au plus par 24 h
  const recent = list.filter((p) => nowMs - Date.parse(p.declaredAt) < DAY_MS).length;
  if (recent >= 5) return { ok: false, error: 'TOO_MANY' };
  return { ok: true, clean: { tier, period, provider, ref, payerPhone } };
}

/**
 * Démarrage d'un paiement SasPay (page de paiement hébergée). Mêmes règles que la déclaration manuelle
 * pour la formule, le pays et la classe ; pas de numéro de transaction à recopier (SasPay le fournit).
 * `sessionsLast24h` = nombre de sessions SasPay créées par l'élève ces dernières 24 h.
 */
export function validateSaspayStart(body, existing, { nowMs, sessionsLast24h = 0, maxPerDay = 8, sellable = SELLABLE_TIERS } = {}) {
  const tier = String(body?.tier || 'pro');
  const period = String(body?.period || '');
  if (!PRICES[tier] || !sellable.includes(tier)) return { ok: false, error: 'TIER_NOT_SOLD' };
  if (tier === 'pro' && !proAvailableForCountry(body?.country)) return { ok: false, error: 'PRO_NOT_FOR_COUNTRY' };
  if (tier === 'pro' && !proAvailableForGrade(body?.gradeLevel)) return { ok: false, error: 'PRO_NOT_FOR_GRADE' };
  if (!PERIOD_DAYS[period]) return { ok: false, error: 'BAD_PERIOD' };
  const list = Array.isArray(existing) ? existing : [];
  const ent = computeEntitlement(list, nowMs);
  if (ent.tier !== 'free' && ent.tier !== tier) return { ok: false, error: 'OTHER_TIER_ACTIVE' };
  if (sessionsLast24h >= maxPerDay) return { ok: false, error: 'TOO_MANY' };
  return { ok: true, clean: { tier, period, amount: expectedAmount(tier, period) } };
}

/**
 * Un élève dont un paiement a été REFUSÉ n'est plus activé avant vérification :
 * ses paiements suivants attendent la confirmation de l'administrateur.
 */
export function isTrustBlocked(payments) {
  return (payments || []).some((p) => p.status === PAYMENT_STATUS.rejected);
}

/**
 * Droits de l'élève calculés à partir de TOUS ses paiements (jamais d'un champ que l'élève peut écrire).
 * Les périodes s'enchaînent dans l'ordre des déclarations : payer avant la fin prolonge l'abonnement.
 * - paiement confirmé : compte toujours ;
 * - paiement en attente : compte seulement si l'élève n'a jamais eu de paiement refusé ;
 * - paiement refusé : ne compte jamais (et les périodes suivantes sont recalculées sans lui).
 * Renvoie { tier, endsAt (ms|null), provisional, coveringId }.
 */
/**
 * Offre de lancement : KONAN Pro offert à TOUS les élèves jusqu'à la fin du jour KONAN_PRO_FREE_UNTIL (AAAA-MM-JJ).
 * Renvoie l'instant de fin en millisecondes, ou 0 s'il n'y a pas d'offre.
 */
export function launchGraceUntil(env = process.env) {
  const raw = String(env.KONAN_PRO_FREE_UNTIL || '').trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) return 0;
  const ms = Date.parse(`${raw}T23:59:59Z`);
  return Number.isFinite(ms) ? ms : 0;
}

export function computeEntitlement(payments, nowMs, { startAfterMs = 0 } = {}) {
  const blocked = isTrustBlocked(payments);
  const counted = (payments || [])
    .filter((p) => p.status === PAYMENT_STATUS.confirmed || (p.status === PAYMENT_STATUS.pending && !blocked))
    .filter((p) => PRICES[p.tier] && PERIOD_DAYS[p.period] && Number.isFinite(Date.parse(p.declaredAt)))
    .sort((a, b) => Date.parse(a.declaredAt) - Date.parse(b.declaredAt) || String(a.id).localeCompare(String(b.id)));

  // Pendant l’offre de lancement, un paiement commence à la fin de l’offre (aucun jour perdu)
  let cursor = startAfterMs > 0 ? startAfterMs : 0;
  const spans = [];
  for (const p of counted) {
    const start = Math.max(Date.parse(p.declaredAt), cursor);
    const end = start + PERIOD_DAYS[p.period] * DAY_MS;
    spans.push({ p, start, end });
    cursor = end;
  }
  const current = spans.find((s) => s.start <= nowMs && nowMs < s.end);
  if (!current) return { tier: 'free', endsAt: null, provisional: false, coveringId: null };
  // Fin de l'abonnement = fin de la dernière période qui suit sans trou (même formule)
  let endsAt = current.end;
  let provisional = current.p.status === PAYMENT_STATUS.pending;
  for (const s of spans) {
    if (s.start === endsAt && s.p.tier === current.p.tier) {
      endsAt = s.end;
      if (s.p.status === PAYMENT_STATUS.pending) provisional = true;
    }
  }
  return { tier: current.p.tier, endsAt, provisional, coveringId: current.p.id };
}

/** Ce que l'élève voit de son abonnement (jamais le numéro de téléphone complet ni les notes admin). */
export function publicStatus(payments, nowMs, { graceUntilMs = 0 } = {}) {
  let ent = computeEntitlement(payments, nowMs, { startAfterMs: graceUntilMs });
  let grace = false;
  if (graceUntilMs && nowMs < graceUntilMs) {
    // Offre de lancement : Pro jusqu'à la fin de l'offre, prolongé par les paiements déjà faits
    const after = computeEntitlement(payments, graceUntilMs, { startAfterMs: graceUntilMs });
    ent = { tier: after.tier !== 'free' ? after.tier : 'pro', endsAt: after.tier !== 'free' ? after.endsAt : graceUntilMs, provisional: after.provisional, coveringId: after.coveringId };
    grace = true;
  }
  const sorted = [...(payments || [])].sort((a, b) => Date.parse(b.declaredAt) - Date.parse(a.declaredAt));
  const pending = sorted.find((p) => p.status === PAYMENT_STATUS.pending) || null;
  const lastRejected = sorted.find((p) => p.status === PAYMENT_STATUS.rejected) || null;
  const view = (p) => p && {
    id: p.id, tier: p.tier, period: p.period, provider: p.provider, ref: p.ref, amount: p.amount,
    status: p.status, declaredAt: p.declaredAt, checkedAt: p.checkedAt || null,
    rejectMessage: p.status === PAYMENT_STATUS.rejected ? (REJECT_REASONS[p.rejectReason] || REJECT_REASONS.other) : null,
  };
  return {
    tier: ent.tier,
    endsAt: ent.endsAt ? new Date(ent.endsAt).toISOString() : null,
    provisional: ent.provisional,
    grace,
    graceUntil: graceUntilMs ? new Date(graceUntilMs).toISOString() : null,
    trustBlocked: isTrustBlocked(payments),
    pending: view(pending),
    lastRejected: view(lastRejected),
    history: sorted.slice(0, 10).map(view),
  };
}

/** Transition d'un paiement par l'administrateur. Renvoie { ok, error, patch }. */
export function adminDecision(payment, action, { reason, nowMs, adminUid } = {}) {
  if (!payment) return { ok: false, error: 'NOT_FOUND' };
  const at = new Date(nowMs).toISOString();
  if (action === 'confirm') {
    if (payment.status !== PAYMENT_STATUS.pending) return { ok: false, error: 'NOT_PENDING' };
    return { ok: true, patch: { status: PAYMENT_STATUS.confirmed, checkedAt: at, checkedBy: adminUid } };
  }
  if (action === 'reject') {
    // Refus possible aussi après une confirmation faite par erreur
    if (payment.status === PAYMENT_STATUS.rejected) return { ok: false, error: 'ALREADY_REJECTED' };
    const r = REJECT_REASONS[reason] ? reason : 'other';
    return { ok: true, patch: { status: PAYMENT_STATUS.rejected, rejectReason: r, checkedAt: at, checkedBy: adminUid } };
  }
  return { ok: false, error: 'BAD_ACTION' };
}

/**
 * Formule réelle d'un élève vue par le serveur (ligue, devoirs…).
 * Paiement activé : SEULEMENT la fiche d'abonnement écrite par le serveur.
 * Paiement pas encore activé : ancien comportement (formule enregistrée par l'application).
 */
export function serverTierFrom({ paymentsEnabled, subscriptionDoc, userDoc, nowMs, graceUntilMs = 0 }) {
  if (paymentsEnabled) {
    if (graceUntilMs && nowMs < graceUntilMs) return subscriptionDoc?.tier === 'plus' ? 'plus' : 'pro'; // offre de lancement
    const tier = subscriptionDoc?.tier;
    const endsAt = Date.parse(subscriptionDoc?.endsAt || '');
    return (tier === 'pro' || tier === 'plus') && Number.isFinite(endsAt) && endsAt > nowMs ? tier : 'free';
  }
  const raw = String(userDoc?.planTier || userDoc?.userAccount?.planTier || 'free').toLowerCase();
  return raw === 'pro' || raw === 'plus' ? raw : 'free';
}

/**
 * Interrupteur principal dans le code : tant qu'il vaut false, le paiement est ÉTEINT partout, même si
 * KONAN_PAYMENTS=on est resté sur Vercel. Éteint le 2026-11-16, RALLUMÉ le 2026-11-22 (choix du fondateur :
 * Pro payant, seulement pour les classes qui ont les cours). Le paiement ne démarre vraiment qu'avec
 * KONAN_PAYMENTS=on sur Vercel (et PAYMENTS_OPEN = true dans src/lib/subscriptionPlans.ts).
 */
export const PAYMENTS_ALLOWED_IN_CODE = true;

/** Interrupteur général : le paiement n'est actif que si le code l'autorise ET KONAN_PAYMENTS=on sur le serveur. */
export function paymentsEnabled(env = process.env) {
  // Tests sur l'ordinateur seulement (KONAN_PAYMENTS_TEST_UNLOCK=1) : jamais possible sur le site en ligne
  const testUnlock = env.KONAN_PAYMENTS_TEST_UNLOCK === '1' && env.VERCEL_ENV !== 'production' && env.NODE_ENV !== 'production';
  if (!PAYMENTS_ALLOWED_IN_CODE && !testUnlock) return false;
  return String(env.KONAN_PAYMENTS || '').trim().toLowerCase() === 'on';
}

/**
 * Préfixe des collections. Sur l'ordinateur (hors production) : TOUJOURS une zone de test séparée,
 * pour qu'une simulation ne touche jamais les vrais élèves.
 */
export function paymentCollectionPrefix(env = process.env, production = Boolean(env.VERCEL) || env.NODE_ENV === 'production') {
  const p = String(env.PAYMENT_COLLECTION_PREFIX || '').trim();
  if (production) return /^[a-z0-9_]{0,20}$/.test(p) ? p : '';
  return /^[a-z0-9_]{1,20}$/.test(p) ? p : 'zz_test_';
}
