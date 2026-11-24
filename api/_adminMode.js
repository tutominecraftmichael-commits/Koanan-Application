/**
 * Formule du compte administrateur (choix du fondateur, 2026-11-24).
 *
 * L'administrateur ne paie pas : il est KONAN Pro par défaut, et passe en KONAN Plus seulement s'il appuie
 * sur « Mode Plus » dans les Paramètres (pour essayer Plus comme un élève). Avant, il avait toujours les
 * avantages de Plus (100 messages par jour à KONE…), ce qui faussait ce qu'il voyait en Pro.
 *
 * Stockage : Firestore admin_mode/{uid} = { tier: 'pro' | 'plus', updatedAt }, écrit par le serveur seulement.
 */

export const ADMIN_TIERS = ['pro', 'plus'];

/** Valeur propre : 'plus' seulement si c'est exactement demandé, sinon 'pro'. */
export function cleanAdminTier(raw) {
  return raw === 'plus' ? 'plus' : 'pro';
}

const modeRef = (db, uid) => db.collection('admin_mode').doc(uid);

/** Formule choisie par l'administrateur ('pro' par défaut, et en cas d'erreur de lecture). */
export async function readAdminTier(db, uid) {
  try {
    const snap = await modeRef(db, uid).get();
    return cleanAdminTier(snap.exists ? snap.data()?.tier : '');
  } catch {
    return 'pro';
  }
}

/** Enregistre la formule de l'administrateur. */
export async function saveAdminTier(db, uid, raw, nowMs = Date.now()) {
  const tier = cleanAdminTier(raw);
  await modeRef(db, uid).set({ tier, updatedAt: new Date(nowMs).toISOString() });
  return tier;
}
