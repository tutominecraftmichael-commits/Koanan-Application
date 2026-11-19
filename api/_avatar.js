/**
 * AVATARS ANIMÉS PERSONNALISABLES & BOUTIQUE DE SKINS (PIÈCES D'OR).
 *
 * - Catalogue validé côté serveur (aucun prix ni item falsifiable depuis le client).
 * - Stockage dans Firestore :
 *   - users/{uid}.avatarConfig : { gender, skinColor, hair, hairColor, eyes, mouth, outfit, accessory, bgColor }
 *   - users/{uid}.unlockedItems : string[] (IDs des skins achetés définitivement avec les pièces d'or)
 *   - users/{uid}.gold : number (déduit atomiquement dans une transaction Firestore à l'achat)
 * - Synchronise aussi league_players/{uid}.avatarConfig pour mise à jour instantanée dans la Ligue.
 */
import { FieldValue } from 'firebase-admin/firestore';
import { leagueCol } from './_leagueRules.js';
import { INITIAL_GOLD, ensureUserGold } from './_quests.js';

export const ALLOWED_GENDERS = ['male', 'female'];

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

export const ALLOWED_HAIR_COLORS = [
  '#151218',
  '#2C1B12',
  '#5C3317',
  '#8B4513',
  '#C9973E',
  '#7C2D12',
  '#38BDF8',
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
  'hair_short_fade',
  'hair_afro',
  'hair_braids',
  'hair_locs',
  'hair_bun',
  'hair_bob',
  'hair_curly',
  'hair_waves',
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

export const FREE_OUTFIT_IDS = [
  'outfit_tee_blue',
  'outfit_tee_dark',
  'outfit_school_polo',
  'outfit_school_uniform',
  'outfit_hoodie_basic',
];

export const FREE_ACCESSORY_IDS = ['acc_none'];

/** Prix officiels (en pièces d'or) des skins et accessoires premium. */
export const PREMIUM_ITEM_PRICES = {
  // Coiffures premium
  hair_cyber_fade: 50,
  hair_crown_braids: 100,
  hair_star_puffs: 100,
  hair_flame_locs: 150,
  // Tenues spéciales premium
  outfit_boss_suit: 150,
  outfit_cyber_gamer: 150,
  outfit_kente_royal: 200,
  outfit_elite_gold: 250,
  // Accessoires (lunettes & couvre-chefs) premium
  acc_glasses_smart: 50,
  acc_beanie: 50,
  acc_shades_cool: 100,
  acc_cap_konan: 100,
  acc_headband_gold: 150,
  acc_crown_boss: 250,
};

const PREMIUM_HAIR_IDS = ['hair_cyber_fade', 'hair_crown_braids', 'hair_star_puffs', 'hair_flame_locs'];
const PREMIUM_OUTFIT_IDS = ['outfit_boss_suit', 'outfit_cyber_gamer', 'outfit_kente_royal', 'outfit_elite_gold'];
const PREMIUM_ACCESSORY_IDS = [
  'acc_glasses_smart',
  'acc_beanie',
  'acc_shades_cool',
  'acc_cap_konan',
  'acc_headband_gold',
  'acc_crown_boss',
];

export const ALL_HAIR_IDS = [...FREE_HAIR_IDS, ...PREMIUM_HAIR_IDS];
export const ALL_OUTFIT_IDS = [...FREE_OUTFIT_IDS, ...PREMIUM_OUTFIT_IDS];
export const ALL_ACCESSORY_IDS = [...FREE_ACCESSORY_IDS, ...PREMIUM_ACCESSORY_IDS];

export const DEFAULT_AVATAR_CONFIG = {
  gender: 'male',
  skinColor: '#6F3B24',
  hair: 'hair_short_fade',
  hairColor: '#151218',
  eyes: 'eyes_classic',
  mouth: 'mouth_smile',
  outfit: 'outfit_tee_blue',
  accessory: 'acc_none',
  bgColor: '#1E3A5F',
};

/** Nettoie et valide un objet avatarConfig (sans vérifier la propriété des items payants). */
export function sanitizeAvatarConfig(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const pick = (val, allowed, fallback) => (allowed.includes(val) ? val : fallback);
  return {
    gender: pick(String(raw.gender || ''), ALLOWED_GENDERS, DEFAULT_AVATAR_CONFIG.gender),
    skinColor: pick(String(raw.skinColor || ''), ALLOWED_SKIN_COLORS, DEFAULT_AVATAR_CONFIG.skinColor),
    hair: pick(String(raw.hair || ''), ALL_HAIR_IDS, DEFAULT_AVATAR_CONFIG.hair),
    hairColor: pick(String(raw.hairColor || ''), ALLOWED_HAIR_COLORS, DEFAULT_AVATAR_CONFIG.hairColor),
    eyes: pick(String(raw.eyes || ''), FREE_EYE_IDS, DEFAULT_AVATAR_CONFIG.eyes),
    mouth: pick(String(raw.mouth || ''), FREE_MOUTH_IDS, DEFAULT_AVATAR_CONFIG.mouth),
    outfit: pick(String(raw.outfit || ''), ALL_OUTFIT_IDS, DEFAULT_AVATAR_CONFIG.outfit),
    accessory: pick(String(raw.accessory || ''), ALL_ACCESSORY_IDS, DEFAULT_AVATAR_CONFIG.accessory),
    bgColor: pick(String(raw.bgColor || ''), ALLOWED_BG_COLORS, DEFAULT_AVATAR_CONFIG.bgColor),
  };
}

/** Retourne l'état avatar de l'utilisateur : solde d'or, config enregistrée, items débloqués. */
export async function getAvatarState(db, uid) {
  const [gold, userSnap] = await Promise.all([
    ensureUserGold(db, uid),
    db.collection('users').doc(uid).get(),
  ]);
  const data = userSnap.exists ? userSnap.data() : {};
  const avatarConfig = sanitizeAvatarConfig(data?.avatarConfig);
  const unlockedItems = Array.isArray(data?.unlockedItems)
    ? [...new Set(data.unlockedItems.filter((id) => typeof id === 'string' && Object.prototype.hasOwnProperty.call(PREMIUM_ITEM_PRICES, id)))]
    : [];
  return {
    gold,
    avatarConfig,
    unlockedItems,
    hasCustomized: Boolean(avatarConfig),
  };
}

/**
 * Achète un skin / accessoire premium avec les pièces d'or de l'utilisateur (transaction atomique Firestore).
 */
export async function buyAvatarItem(db, uid, itemId) {
  const cleanId = String(itemId || '').trim();
  if (!Object.prototype.hasOwnProperty.call(PREMIUM_ITEM_PRICES, cleanId)) {
    return { error: 'INVALID_ITEM' };
  }
  const price = PREMIUM_ITEM_PRICES[cleanId];
  const userRef = db.collection('users').doc(uid);

  const result = await db.runTransaction(async (tx) => {
    const snap = await tx.get(userRef);
    const data = snap.exists ? snap.data() : {};
    const unlocked = Array.isArray(data?.unlockedItems) ? data.unlockedItems.filter((x) => typeof x === 'string') : [];
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
      }, { merge: true });
    } else {
      tx.set(userRef, {
        gold: nextGold,
        unlockedItems: nextUnlocked,
      }, { merge: true });
    }
    return { gold: nextGold, unlockedItems: nextUnlocked, purchasedItemId: cleanId, price };
  });

  return result;
}

/**
 * Sauvegarde `avatarConfig` dans `users/{uid}` (après vérification que chaque skin premium équipé est bien acheté)
 * et propage immédiatement la configuration vers `league_players/{uid}` pour le classement de la Ligue.
 */
export async function saveAvatarConfig(db, uid, rawConfig) {
  const clean = sanitizeAvatarConfig(rawConfig);
  if (!clean) return { error: 'INVALID_CONFIG' };

  const userRef = db.collection('users').doc(uid);
  const snap = await userRef.get();
  const data = snap.exists ? snap.data() : {};
  const unlocked = new Set(Array.isArray(data?.unlockedItems) ? data.unlockedItems : []);

  const toCheck = [clean.hair, clean.outfit, clean.accessory];
  for (const itemId of toCheck) {
    if (Object.prototype.hasOwnProperty.call(PREMIUM_ITEM_PRICES, itemId) && !unlocked.has(itemId)) {
      return { error: 'ITEM_LOCKED', lockedItemId: itemId };
    }
  }

  await userRef.set({
    avatarConfig: clean,
    avatarUpdatedAt: new Date().toISOString(),
  }, { merge: true });

  // Met à jour la fiche de ligue si l'élève est déjà classé (non bloquant si absent)
  const lpRef = leagueCol(db, 'league_players').doc(uid);
  const lpSnap = await lpRef.get().catch(() => null);
  if (lpSnap?.exists) {
    await lpRef.update({ avatarConfig: clean }).catch(() => {});
  }

  return { avatarConfig: clean };
}
