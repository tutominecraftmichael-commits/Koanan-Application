/**
 * KONAN Plus — l'objectif de l'élève (idée du fondateur, 2026-11-23).
 *
 * L'élève Plus choisit son objectif : 12 de moyenne, 16 (mention) ou major de sa classe.
 * KONE et KONAN adaptent alors leur langage et leur exigence partout (KONE, Feynman, corrections,
 * sujets de devoir, notifications) : plus encourageant pour 12, motivant et exigeant pour 16,
 * rigoureux comme un coach de haut niveau pour major. Exigeant ne veut JAMAIS dire méchant.
 *
 * Stockage : Firestore study_goals/{uid} = { goal, updatedAt, byAdmin }, écrit par le serveur seulement
 * (firestore.rules refuse tout le reste à l'application). L'objectif ne compte que si l'élève a KONAN Plus
 * (vérifié par le serveur) ou si c'est le compte administrateur.
 */
import { paymentsEnabled } from './_subscriptionRules.js';
import { cleanGoal } from './_goalTone.js';

export { GOALS, GOAL_TARGET, GOAL_TEXT, cleanGoal, goalLines } from './_goalTone.js';

// ---------------------------------------------------------------------------
// Firestore
// ---------------------------------------------------------------------------
const goalRef = (db, uid) => db.collection('study_goals').doc(uid);

/**
 * KONAN Plus actif (vérifié par le serveur). Administrateur : seulement en « Mode Plus » (Paramètres).
 * Paiement éteint : non (Plus n'est jamais donné sans abonnement Plus ; choix du fondateur, 2026-11-24).
 */
export async function hasPlusAccess(db, uid, { admin = false, env = process.env, nowMs = Date.now() } = {}) {
  if (admin) {
    const { readAdminTier } = await import('./_adminMode.js');
    return (await readAdminTier(db, uid)) === 'plus';
  }
  if (!paymentsEnabled(env)) return false;
  const { serverPlanTier } = await import('./_subscriptionStore.js');
  return (await serverPlanTier(db, uid, null, nowMs, env)) === 'plus';
}

/** Document study_goals → { goal, byAdmin, updatedAt } (goal = '' si aucun). */
export function savedGoalOf(data) {
  return { goal: cleanGoal(data?.goal), byAdmin: data?.byAdmin === true, updatedAt: data?.updatedAt || null };
}

/** Objectif enregistré, même si l'abonnement Plus est fini ({ goal: '' } si aucun). */
export async function readStudyGoal(db, uid) {
  const snap = await goalRef(db, uid).get();
  return savedGoalOf(snap.exists ? snap.data() : null);
}

/** Objectif déjà lu → objectif à appliquer ('' si l'élève n'a plus KONAN Plus). */
export async function activeGoalOf(db, uid, saved, { admin = false, env = process.env, nowMs = Date.now() } = {}) {
  try {
    if (!saved?.goal) return '';
    if (await hasPlusAccess(db, uid, { admin, env, nowMs })) return saved.goal;
    return '';
  } catch {
    return '';
  }
}

/**
 * Objectif à appliquer maintenant : '' si l'élève n'en a pas ou n'a plus KONAN Plus.
 * Ne lit l'abonnement que pour les élèves qui ont un objectif (les autres : une seule lecture).
 */
export async function activeStudyGoal(db, uid, opts = {}) {
  try {
    return await activeGoalOf(db, uid, await readStudyGoal(db, uid), opts);
  } catch {
    return ''; // objectif illisible : l'appli marche normalement, sans ton adapté
  }
}

/** Enregistre l'objectif (KONAN Plus seulement). */
export async function saveStudyGoal(db, uid, value, { admin = false, env = process.env, nowMs = Date.now() } = {}) {
  const goal = cleanGoal(value);
  if (!goal) return { ok: false, error: 'BAD_GOAL' };
  if (!(await hasPlusAccess(db, uid, { admin, env, nowMs }))) return { ok: false, error: 'PLUS_REQUIRED' };
  await goalRef(db, uid).set({ goal, updatedAt: new Date(nowMs).toISOString(), byAdmin: admin === true });
  return { ok: true, goal };
}
