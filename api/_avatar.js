/**
 * AVATARS ANIMÉS PERSONNALISABLES & BOUTIQUE DE SKINS (PIÈCES KONAN / OR) + EXCLUSIVITÉ KONAN PRO.
 *
 * - Catalogue validé côté serveur (aucun prix, genre, ni item falsifiable depuis le client).
 * - Exclusivité KONAN PRO : `outfit_pro_gold` ("Tenue Or Massif (PRO)") :
 *   - Non achetable avec les pièces KONAN.
 *   - Uniquement équipable si le statut KONAN Pro actif est confirmé côté serveur (serverPlanTier).
 *   - Si l'abonnement Pro expire, sanitizeAvatarConfig / getAvatarState repasse automatiquement
 *     sur la tenue de base par défaut ('outfit_tee_blue').
 */
import { FieldValue } from 'firebase-admin/firestore';
import { leagueCol } from './_leagueRules.js';
import { INITIAL_GOLD, ensureUserGold } from './_quests.js';
import { serverPlanTier } from './_subscriptionStore.js';

export const ALLOWED_GENDERS = ['male', 'female'];
export const PRO_ONLY_OUTFIT_ID = 'outfit_pro_gold';

export const ALLOWED_SKIN_COLORS = [
  '#3B1E12',
  '#522B1B',
  '#6F3B24',
  '#8D5524',
  '#A96E44',
  '#C68642',
  '#DCA67B',
  '#EEBE9B',
  '#FADAC1',
];

/** Palette officielle des couleurs de cheveux (Gratuite) + compatibilité anciennes teintes. */
export const ALLOWED_HAIR_COLORS = [
  '#141414', // Noir profond
  '#3B2314', // Brun foncé
  '#6F4E37', // Châtain
  '#D4AF37', // Blond doré
  '#A53F2B', // Roux
  '#B0B7C0', // Gris argenté
  '#0088FF', // Bleu électrique
  '#8A2BE2', // Violet
  '#E63946', // Rouge/Rose
  // Compatibilité anciennes valeurs enregistrées
  '#151218',
  '#2C1B12',
  '#5C3317',
  '#8B4513',
  '#C9973E',
  '#7C2D12',
  '#38BDF8',
];

/** Palette officielle des couleurs d'iris (Gratuite). */
export const ALLOWED_EYE_COLORS = [
  '#111111', // Noir
  '#4E342E', // Marron
  '#8D6E63', // Noisette
  '#D9822B', // Ambre / Miel
  '#2E7D32', // Vert
  '#1976D2', // Bleu
  '#7B1FA2', // Violet
];

export const ALLOWED_BG_COLORS = [
  '#0F172A',
  '#1E293B',
  '#1E3A5F',
  '#312E81',
  '#3B1F4A',
  '#134E4A',
  '#451A03',
  '#3F1D2E',
];

export const FREE_HAIR_IDS = [
  'hair_short_fade', // Dégradé simple (male)
  'hair_buzz',       // Coupe courte classique (male)
  'hair_afro',       // Afro naturel (unisex)
  'hair_ponytail',   // Queue de cheval simple (female)
  'hair_bob',        // Carré lisse (female)
];

export const FREE_EYE_IDS = [
  'eyes_classic',
  'eyes_determined',
  'eyes_happy',
  'eyes_focused',
  'eyes_fierce',
];

export const FREE_MOUTH_IDS = [
  'mouth_smile',
  'mouth_confident',
  'mouth_focused',
  'mouth_playful',
  'mouth_determined',
];

export const FREE_GLASSES_IDS = [
  'glasses_none',
  'glasses_round_thin',
  'glasses_square_classic',
];

export const FREE_ACCESSORY_IDS = [
  'acc_none',
  'acc_sport_band',
  'acc_beard_clean',
  'acc_earrings_pearl',
];

export const FREE_OUTFIT_IDS = [
  'outfit_tee_blue',      // T-shirt KONAN officiel
  'outfit_school_polo',   // Polo scolaire classique
  'outfit_sweater_basic', // Pull simple
  // Compatibilité anciennes tenues gratuites
  'outfit_tee_dark',
  'outfit_school_uniform',
  'outfit_school_girl',
];

/** Prix officiels (en pièces d'or) des skins et accessoires premium. */
export const PREMIUM_ITEM_PRICES = {
  // Coiffures premium
  hair_cyber_fade: 50,
  hair_quiff: 50,
  hair_high_top: 50,
  hair_curly: 50,
  hair_braids: 50,
  hair_bun: 50,
  hair_waves: 50,
  hair_locs: 50,
  hair_gold_taper: 100,
  hair_crown_braids: 100,
  hair_star_puffs: 100,
  hair_afro_big: 100,
  hair_anime_spiky: 100,
  hair_flame_locs: 150,

  // Lunettes premium
  glasses_smart: 50,
  glasses_shades_vip: 100,
  glasses_aviator_gold: 100,
  glasses_tinted_star: 100,
  glasses_cat_eye: 100,
  glasses_cyber_visor: 150,

  // Accessoires & Couvre-chefs premium
  acc_beanie: 50,
  acc_earrings_gold: 50,
  acc_headband_ribbon: 50,
  acc_cap_konan: 100,
  acc_cap_backwards: 100,
  acc_bucket_hat: 100,
  acc_ninja_band: 100,
  acc_chain_gold: 100,
  acc_gaming_headset: 150,
  acc_headband_gold: 150,
  acc_necklace_gold: 150,
  acc_crown_boss: 250,
  acc_tiara_queen: 250,

  // Habits / Tenues premium (NOTE : outfit_pro_gold n'est PAS achetable en pièces)
  outfit_hoodie_basic: 50,
  outfit_varsity: 100,
  outfit_denim_jacket: 100,
  outfit_sport_jersey: 100,
  outfit_modern_shirt: 100,
  outfit_dress_chic: 100,
  outfit_boss_suit: 150,
  outfit_boss_lady: 150,
  outfit_cyber_gamer: 150,
  outfit_kente_royal: 200,
  outfit_elite_gold: 250,
};

/** Alias rétro-compatibilité pour anciens achats de lunettes stockés sous acc_glasses_* */
const LEGACY_GLASSES_ALIAS = {
  acc_glasses_smart: 'glasses_smart',
  acc_shades_cool: 'glasses_shades_vip',
  acc_glasses_cat: 'glasses_cat_eye',
};

/** Restriction de genre des items (les items absents de cette table sont mixtes). */
export const ITEM_GENDER = {
  // Coiffures Homme
  hair_short_fade: 'male',
  hair_buzz: 'male',
  hair_curly: 'male',
  hair_quiff: 'male',
  hair_high_top: 'male',
  hair_cyber_fade: 'male',
  hair_gold_taper: 'male',
  // Coiffures Femme
  hair_braids: 'female',
  hair_bun: 'female',
  hair_bob: 'female',
  hair_waves: 'female',
  hair_ponytail: 'female',
  hair_crown_braids: 'female',
  hair_star_puffs: 'female',
  // Lunettes Femme
  glasses_cat_eye: 'female',
  // Tenues Homme
  outfit_school_uniform: 'male',
  outfit_modern_shirt: 'male',
  outfit_boss_suit: 'male',
  // Tenues Femme
  outfit_school_girl: 'female',
  outfit_dress_chic: 'female',
  outfit_boss_lady: 'female',
  // Accessoires Homme
  acc_beard_clean: 'male',
  acc_chain_gold: 'male',
  acc_headband_gold: 'male',
  acc_crown_boss: 'male',
  // Accessoires Femme
  acc_earrings_pearl: 'female',
  acc_earrings_gold: 'female',
  acc_headband_ribbon: 'female',
  acc_necklace_gold: 'female',
  acc_tiara_queen: 'female',
};

const PREMIUM_HAIR_IDS = [
  'hair_cyber_fade', 'hair_quiff', 'hair_high_top', 'hair_curly', 'hair_braids',
  'hair_bun', 'hair_waves', 'hair_locs', 'hair_gold_taper', 'hair_crown_braids',
  'hair_star_puffs', 'hair_afro_big', 'hair_anime_spiky', 'hair_flame_locs',
];

const PREMIUM_GLASSES_IDS = [
  'glasses_smart', 'glasses_shades_vip', 'glasses_aviator_gold',
  'glasses_tinted_star', 'glasses_cat_eye', 'glasses_cyber_visor',
];

const PREMIUM_ACCESSORY_IDS = [
  'acc_beanie', 'acc_earrings_gold', 'acc_headband_ribbon', 'acc_cap_konan',
  'acc_cap_backwards', 'acc_bucket_hat', 'acc_ninja_band', 'acc_chain_gold',
  'acc_gaming_headset', 'acc_headband_gold', 'acc_necklace_gold',
  'acc_crown_boss', 'acc_tiara_queen',
];

const PREMIUM_OUTFIT_IDS = [
  'outfit_hoodie_basic', 'outfit_varsity', 'outfit_denim_jacket', 'outfit_sport_jersey',
  'outfit_modern_shirt', 'outfit_dress_chic', 'outfit_boss_suit', 'outfit_boss_lady',
  'outfit_cyber_gamer', 'outfit_kente_royal', 'outfit_elite_gold',
];

export const ALL_HAIR_IDS = [...FREE_HAIR_IDS, ...PREMIUM_HAIR_IDS];
export const ALL_GLASSES_IDS = [...FREE_GLASSES_IDS, ...PREMIUM_GLASSES_IDS];
export const ALL_ACCESSORY_IDS = [...FREE_ACCESSORY_IDS, ...PREMIUM_ACCESSORY_IDS];
export const ALL_OUTFIT_IDS = [PRO_ONLY_OUTFIT_ID, ...FREE_OUTFIT_IDS, ...PREMIUM_OUTFIT_IDS];

export const DEFAULT_AVATAR_CONFIG = {
  gender: 'male',
  skinColor: '#6F3B24',
  hair: 'hair_short_fade',
  hairColor: '#141414',
  eyes: 'eyes_classic',
  eyeColor: '#111111',
  mouth: 'mouth_smile',
  glasses: 'glasses_none',
  outfit: 'outfit_tee_blue',
  accessory: 'acc_none',
  bgColor: '#1E3A5F',
};

/** Détermine si un compte a un abonnement KONAN Pro actif (vérifié côté serveur). */
export async function isUserKonanPro(db, uid, userDoc) {
  try {
    const tier = await serverPlanTier(db, uid, userDoc);
    if (tier === 'pro' || tier === 'plus') return true;
  } catch {
    // Fallback prudent sur la fiche Firestore en cas d'environnement sans sous-collection
  }
  return userDoc?.isPro === true || String(userDoc?.plan || '').toLowerCase() === 'pro';
}

/** Normalise la liste des items débloqués en migrant les anciens IDs de lunettes. */
function normalizeUnlockedItems(rawList) {
  if (!Array.isArray(rawList)) return [];
  const out = new Set();
  for (const id of rawList) {
    if (typeof id !== 'string') continue;
    const mapped = LEGACY_GLASSES_ALIAS[id] || id;
    if (Object.prototype.hasOwnProperty.call(PREMIUM_ITEM_PRICES, mapped)) {
      out.add(mapped);
    }
  }
  return Array.from(out);
}

/**
 * Nettoie et valide un objet avatarConfig en garantissant :
 * - la cohérence genre ↔ items,
 * - la migration douce d'anciennes lunettes stockées dans `accessory`,
 * - le retrait automatique de `outfit_pro_gold` si `opts.isPro === false` (abonnement Pro expiré).
 */
export function sanitizeAvatarConfig(raw, opts = {}) {
  if (!raw || typeof raw !== 'object') return null;
  const pick = (val, allowed, fallback) => (allowed.includes(val) ? val : fallback);
  const gender = pick(String(raw.gender || ''), ALLOWED_GENDERS, DEFAULT_AVATAR_CONFIG.gender);
  const pickGendered = (val, allowed, fallback) => {
    const chosen = pick(val, allowed, fallback);
    const restricted = ITEM_GENDER[chosen];
    if (restricted && restricted !== gender) return fallback;
    return chosen;
  };

  // Migration douce des anciennes lunettes stockées dans accessory
  let rawGlasses = String(raw.glasses || '');
  let rawAccessory = String(raw.accessory || '');
  if (!rawGlasses && LEGACY_GLASSES_ALIAS[rawAccessory]) {
    rawGlasses = LEGACY_GLASSES_ALIAS[rawAccessory];
    rawAccessory = 'acc_none';
  }

  let outfit = pickGendered(String(raw.outfit || ''), ALL_OUTFIT_IDS, DEFAULT_AVATAR_CONFIG.outfit);
  // Expiration Pro : si le membre n'est explicitement plus Pro, repasse automatiquement sur la tenue de base
  if (outfit === PRO_ONLY_OUTFIT_ID && opts.isPro === false) {
    outfit = DEFAULT_AVATAR_CONFIG.outfit;
  }

  const defaultHair = gender === 'female' ? 'hair_ponytail' : DEFAULT_AVATAR_CONFIG.hair;
  return {
    gender,
    skinColor: pick(String(raw.skinColor || ''), ALLOWED_SKIN_COLORS, DEFAULT_AVATAR_CONFIG.skinColor),
    hair: pickGendered(String(raw.hair || ''), ALL_HAIR_IDS, defaultHair),
    hairColor: pick(String(raw.hairColor || ''), ALLOWED_HAIR_COLORS, DEFAULT_AVATAR_CONFIG.hairColor),
    eyes: pick(String(raw.eyes || ''), FREE_EYE_IDS, DEFAULT_AVATAR_CONFIG.eyes),
    eyeColor: pick(String(raw.eyeColor || ''), ALLOWED_EYE_COLORS, DEFAULT_AVATAR_CONFIG.eyeColor),
    mouth: pick(String(raw.mouth || ''), FREE_MOUTH_IDS, DEFAULT_AVATAR_CONFIG.mouth),
    glasses: pickGendered(rawGlasses, ALL_GLASSES_IDS, DEFAULT_AVATAR_CONFIG.glasses),
    outfit,
    accessory: pickGendered(rawAccessory, ALL_ACCESSORY_IDS, DEFAULT_AVATAR_CONFIG.accessory),
    bgColor: pick(String(raw.bgColor || ''), ALLOWED_BG_COLORS, DEFAULT_AVATAR_CONFIG.bgColor),
  };
}

/** Retourne l'état avatar de l'utilisateur : solde d'or, statut Pro, config enregistrée, items débloqués. */
export async function getAvatarState(db, uid) {
  const [gold, userSnap] = await Promise.all([
    ensureUserGold(db, uid),
    db.collection('users').doc(uid).get(),
  ]);
  const data = userSnap.exists ? userSnap.data() : {};
  const isPro = await isUserKonanPro(db, uid, data);
  const rawStored = data?.avatarConfig;
  const avatarConfig = sanitizeAvatarConfig(rawStored, { isPro });
  const unlockedItems = normalizeUnlockedItems(data?.unlockedItems);

  // Si l'utilisateur portait la tenue Pro et que son abonnement Pro a expiré, on nettoie Firestore + Ligue
  if (!isPro && rawStored?.outfit === PRO_ONLY_OUTFIT_ID && avatarConfig) {
    const nowIso = new Date().toISOString();
    await Promise.allSettled([
      db.collection('users').doc(uid).set({ avatarConfig, avatarUpdatedAt: nowIso }, { merge: true }),
      leagueCol(db, 'league_players').doc(uid).update({ avatarConfig, updatedAt: nowIso }),
    ]);
  }

  return {
    gold,
    isPro,
    avatarConfig,
    unlockedItems,
    hasCustomized: Boolean(avatarConfig),
  };
}

/**
 * Achète un skin / accessoire premium avec les pièces d'or de l'utilisateur (transaction atomique Firestore).
 * Refuse strictement l'achat de la Tenue Or Massif (PRO).
 */
export async function buyAvatarItem(db, uid, itemId) {
  const cleanId = String(itemId || '').trim();
  if (cleanId === PRO_ONLY_OUTFIT_ID) {
    return { error: 'PRO_ONLY_ITEM' };
  }
  if (!Object.prototype.hasOwnProperty.call(PREMIUM_ITEM_PRICES, cleanId)) {
    return { error: 'INVALID_ITEM' };
  }
  const price = PREMIUM_ITEM_PRICES[cleanId];
  const userRef = db.collection('users').doc(uid);

  const result = await db.runTransaction(async (tx) => {
    const snap = await tx.get(userRef);
    const data = snap.exists ? snap.data() : {};
    const unlocked = normalizeUnlockedItems(data?.unlockedItems);
    if (unlocked.includes(cleanId)) {
      const currentGold = typeof data?.gold === 'number' && Number.isFinite(data.gold) ? Math.max(0, Math.floor(data.gold)) : INITIAL_GOLD;
      return { alreadyOwned: true, gold: currentGold, unlockedItems: unlocked };
    }

    const hasNumericGold = typeof data?.gold === 'number' && Number.isFinite(data.gold);
    const currentGold = hasNumericGold ? Math.max(0, Math.floor(data.gold)) : INITIAL_GOLD;
    if (currentGold < price) {
      return { error: 'INSUFFICIENT_GOLD', gold: currentGold, price };
    }

    const nextGold = currentGold - price;
    const nextUnlocked = [...new Set([...unlocked, cleanId])];
    if (hasNumericGold) {
      tx.set(userRef, {
        gold: FieldValue.increment(-price),
        unlockedItems: FieldValue.arrayUnion(cleanId),
        goldUpdatedAt: new Date().toISOString(),
      }, { merge: true });
    } else {
      tx.set(userRef, {
        gold: nextGold,
        unlockedItems: nextUnlocked,
        goldUpdatedAt: new Date().toISOString(),
      }, { merge: true });
    }

    return { alreadyOwned: false, gold: nextGold, unlockedItems: nextUnlocked, itemId: cleanId, price };
  });

  return result;
}

/**
 * Enregistre la configuration de l'avatar dans users/{uid}.avatarConfig
 * après vérification stricte de propriété des items payants et du statut KONAN Pro.
 * Propage également dans league_players/{uid}.avatarConfig pour mise à jour immédiate en Ligue.
 */
export async function saveAvatarConfig(db, uid, rawConfig) {
  const userRef = db.collection('users').doc(uid);
  const snap = await userRef.get();
  const data = snap.exists ? snap.data() : {};
  const isPro = await isUserKonanPro(db, uid, data);

  if (String(rawConfig?.outfit || '') === PRO_ONLY_OUTFIT_ID && !isPro) {
    return { error: 'PRO_REQUIRED', itemId: PRO_ONLY_OUTFIT_ID };
  }

  const clean = sanitizeAvatarConfig(rawConfig, { isPro });
  if (!clean) return { error: 'INVALID_CONFIG' };

  const unlocked = new Set(normalizeUnlockedItems(data?.unlockedItems));

  // Vérification anti-triche : impossible d'équiper un item payant non possédé
  for (const chosenId of [clean.hair, clean.glasses, clean.outfit, clean.accessory]) {
    if (chosenId === PRO_ONLY_OUTFIT_ID) continue;
    if (Object.prototype.hasOwnProperty.call(PREMIUM_ITEM_PRICES, chosenId) && !unlocked.has(chosenId)) {
      return { error: 'ITEM_LOCKED', itemId: chosenId };
    }
  }

  const nowIso = new Date().toISOString();
  await userRef.set({
    avatarConfig: clean,
    avatarUpdatedAt: nowIso,
  }, { merge: true });

  // Synchronise aussi le joueur dans la Ligue s'il a déjà un profil league_players/{uid}
  try {
    const playerRef = leagueCol(db, 'league_players').doc(uid);
    const pSnap = await playerRef.get();
    if (pSnap.exists) {
      await playerRef.update({ avatarConfig: clean, updatedAt: nowIso });
    }
  } catch {
    // Pas bloquant si le joueur n'est pas encore inscrit en Ligue
  }

  return { avatarConfig: clean, isPro };
}
