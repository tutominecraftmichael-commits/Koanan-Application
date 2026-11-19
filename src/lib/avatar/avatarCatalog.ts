/**
 * Catalogue officiel des Avatars Animés Personnalisables KONAN.
 * Synchronisé 1:1 avec api/_avatar.js (prix, IDs et restrictions de genre vérifiés côté serveur).
 */

export type AvatarGender = 'male' | 'female';
export type AvatarItemGender = 'male' | 'female' | 'unisex';

export interface AvatarConfig {
  gender: AvatarGender;
  skinColor: string;
  hair: string;
  hairColor?: string;
  eyes: string;
  mouth: string;
  outfit: string;
  accessory: string;
  bgColor?: string;
}

export interface AvatarItemOption {
  id: string;
  label: string;
  /** 0 = gratuit, > 0 = prix en pièces d'or */
  price: number;
  /** 'male' = réservé Homme, 'female' = réservé Femme, 'unisex' = disponible pour les deux */
  gender: AvatarItemGender;
  tag?: string;
}

export interface SwatchOption {
  value: string;
  label: string;
}

export const SKIN_TONES: SwatchOption[] = [
  { value: '#3B1E12', label: 'Ébène profond' },
  { value: '#522B1B', label: 'Cacao foncé' },
  { value: '#6F3B24', label: 'Chocolat' },
  { value: '#8D5524', label: 'Caramel riche' },
  { value: '#A96E44', label: 'Miel doré' },
  { value: '#C68642', label: 'Ambre chaud' },
  { value: '#DCA67B', label: 'Beige doré' },
  { value: '#EEBE9B', label: 'Clair chaud' },
  { value: '#FADAC1', label: 'Ivoire clair' },
];

export const HAIR_COLORS: SwatchOption[] = [
  { value: '#151218', label: 'Noir intense' },
  { value: '#2C1B12', label: 'Brun foncé' },
  { value: '#5C3317', label: 'Châtain' },
  { value: '#8B4513', label: 'Cuivré' },
  { value: '#C9973E', label: 'Blond doré' },
  { value: '#7C2D12', label: 'Acajou' },
  { value: '#38BDF8', label: 'Bleu KONAN' },
];

export const BG_COLORS: SwatchOption[] = [
  { value: '#0F172A', label: 'Nuit' },
  { value: '#1E293B', label: 'Ardoise' },
  { value: '#1E3A5F', label: 'Océan' },
  { value: '#312E81', label: 'Indigo' },
  { value: '#3B1F4A', label: 'Améthyste' },
  { value: '#134E4A', label: 'Émeraude' },
  { value: '#451A03', label: 'Ambre' },
  { value: '#3F1D2E', label: 'Rubis' },
];

export const HAIR_OPTIONS: AvatarItemOption[] = [
  // Gratuits — Homme
  { id: 'hair_short_fade', label: 'Dégradé court', price: 0, gender: 'male' },
  { id: 'hair_buzz', label: 'Coupe rasée', price: 0, gender: 'male' },
  { id: 'hair_curly', label: 'Taper bouclé', price: 0, gender: 'male' },
  { id: 'hair_quiff', label: 'Coupe structurée', price: 0, gender: 'male' },
  { id: 'hair_high_top', label: 'High-Top Fade', price: 0, gender: 'male' },
  // Gratuits — Femme
  { id: 'hair_braids', label: 'Tresses longues', price: 0, gender: 'female' },
  { id: 'hair_bun', label: 'Chignon haut', price: 0, gender: 'female' },
  { id: 'hair_bob', label: 'Carré lisse', price: 0, gender: 'female' },
  { id: 'hair_waves', label: 'Long ondulé', price: 0, gender: 'female' },
  { id: 'hair_ponytail', label: 'Queue de cheval', price: 0, gender: 'female' },
  // Gratuits — Mixtes
  { id: 'hair_afro', label: 'Afro naturel', price: 0, gender: 'unisex' },
  { id: 'hair_locs', label: 'Locks', price: 0, gender: 'unisex' },
  // Premium — Homme
  { id: 'hair_cyber_fade', label: 'Dégradé Éclair', price: 50, gender: 'male', tag: 'Style' },
  { id: 'hair_gold_taper', label: 'Taper Ligne Or', price: 100, gender: 'male', tag: 'Boss' },
  // Premium — Femme
  { id: 'hair_crown_braids', label: 'Tresses Royales', price: 100, gender: 'female', tag: 'Royal' },
  { id: 'hair_star_puffs', label: 'Double Afro Puff', price: 100, gender: 'female', tag: 'Style' },
  // Premium — Mixte
  { id: 'hair_flame_locs', label: 'Locks Dorées', price: 150, gender: 'unisex', tag: 'Élite' },
];

export const EYE_OPTIONS: AvatarItemOption[] = [
  { id: 'eyes_classic', label: 'Classique', price: 0, gender: 'unisex' },
  { id: 'eyes_determined', label: 'Déterminé', price: 0, gender: 'unisex' },
  { id: 'eyes_happy', label: 'Doux & rieur', price: 0, gender: 'unisex' },
  { id: 'eyes_focused', label: 'Concentré', price: 0, gender: 'unisex' },
  { id: 'eyes_fierce', label: 'Intense', price: 0, gender: 'unisex' },
];

export const MOUTH_OPTIONS: AvatarItemOption[] = [
  { id: 'mouth_smile', label: 'Souriant', price: 0, gender: 'unisex' },
  { id: 'mouth_confident', label: 'Confiant', price: 0, gender: 'unisex' },
  { id: 'mouth_focused', label: 'Concentré', price: 0, gender: 'unisex' },
  { id: 'mouth_playful', label: 'Malin', price: 0, gender: 'unisex' },
  { id: 'mouth_determined', label: 'Déterminé', price: 0, gender: 'unisex' },
];

export const OUTFIT_OPTIONS: AvatarItemOption[] = [
  // Gratuits — Mixtes
  { id: 'outfit_tee_blue', label: 'T-shirt Bleu', price: 0, gender: 'unisex' },
  { id: 'outfit_tee_dark', label: 'T-shirt Noir', price: 0, gender: 'unisex' },
  { id: 'outfit_school_polo', label: 'Polo scolaire', price: 0, gender: 'unisex' },
  { id: 'outfit_hoodie_basic', label: 'Sweat simple', price: 0, gender: 'unisex' },
  // Gratuits — Homme
  { id: 'outfit_school_uniform', label: 'Chemise & Cravate', price: 0, gender: 'male' },
  { id: 'outfit_varsity', label: 'Blouson Campus', price: 0, gender: 'male' },
  // Gratuits — Femme
  { id: 'outfit_school_girl', label: 'Uniforme & Ruban', price: 0, gender: 'female' },
  { id: 'outfit_dress_chic', label: 'Robe Moderne', price: 0, gender: 'female' },
  // Premium — Homme
  { id: 'outfit_boss_suit', label: 'Costume de Boss', price: 150, gender: 'male', tag: 'Boss' },
  // Premium — Femme
  { id: 'outfit_boss_lady', label: 'Tailleur de Boss', price: 150, gender: 'female', tag: 'Boss' },
  // Premium — Mixtes
  { id: 'outfit_cyber_gamer', label: 'Sweat Cyber', price: 150, gender: 'unisex', tag: 'Gaming' },
  { id: 'outfit_kente_royal', label: 'Tenue Kita Moderne', price: 200, gender: 'unisex', tag: 'Heritage' },
  { id: 'outfit_elite_gold', label: 'Tenue d’Élite Or', price: 250, gender: 'unisex', tag: 'Légende' },
];

export const ACCESSORY_OPTIONS: AvatarItemOption[] = [
  // Gratuits
  { id: 'acc_none', label: 'Aucun', price: 0, gender: 'unisex' },
  { id: 'acc_beard_clean', label: 'Barbe taillée', price: 0, gender: 'male' },
  { id: 'acc_earrings_pearl', label: 'Boucles Perles', price: 0, gender: 'female' },
  // Premium — Mixtes
  { id: 'acc_glasses_smart', label: 'Lunettes Intellect.', price: 50, gender: 'unisex', tag: 'Lunettes' },
  { id: 'acc_shades_cool', label: 'Lunettes de Soleil', price: 100, gender: 'unisex', tag: 'Lunettes' },
  { id: 'acc_cap_konan', label: 'Casquette KONAN', price: 100, gender: 'unisex', tag: 'Chapeau' },
  // Premium — Homme
  { id: 'acc_beanie', label: 'Bonnet stylé', price: 50, gender: 'male', tag: 'Chapeau' },
  { id: 'acc_chain_gold', label: 'Chaîne Or', price: 100, gender: 'male', tag: 'Style' },
  { id: 'acc_headband_gold', label: 'Bandeau Champion', price: 150, gender: 'male', tag: 'Élite' },
  { id: 'acc_crown_boss', label: 'Couronne Roi', price: 250, gender: 'male', tag: 'Légende' },
  // Premium — Femme
  { id: 'acc_earrings_gold', label: 'Créoles Or', price: 50, gender: 'female', tag: 'Bijou' },
  { id: 'acc_headband_ribbon', label: 'Serre-tête Ruban', price: 50, gender: 'female', tag: 'Style' },
  { id: 'acc_glasses_cat', label: 'Lunettes Œil-de-Chat', price: 100, gender: 'female', tag: 'Lunettes' },
  { id: 'acc_necklace_gold', label: 'Collier Or', price: 150, gender: 'female', tag: 'Bijou' },
  { id: 'acc_tiara_queen', label: 'Tiare Royale', price: 250, gender: 'female', tag: 'Légende' },
];

export const ALL_AVATAR_ITEMS: Record<string, AvatarItemOption> = Object.fromEntries(
  [...HAIR_OPTIONS, ...EYE_OPTIONS, ...MOUTH_OPTIONS, ...OUTFIT_OPTIONS, ...ACCESSORY_OPTIONS].map((item) => [item.id, item]),
);

export const DEFAULT_AVATAR_CONFIG: AvatarConfig = {
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

/** Filtre une liste d'items selon le modèle choisi (Homme ou Femme). */
export function filterByGender(options: AvatarItemOption[], gender: AvatarGender): AvatarItemOption[] {
  return options.filter((item) => item.gender === 'unisex' || item.gender === gender);
}

/** Vérifie si un item est compatible avec le genre choisi. */
export function isItemAllowedForGender(itemId: string, gender: AvatarGender): boolean {
  const item = ALL_AVATAR_ITEMS[itemId];
  if (!item) return false;
  return item.gender === 'unisex' || item.gender === gender;
}

/**
 * Adapte automatiquement une config quand l'élève bascule entre Homme et Femme (ou à l'ouverture) :
 * remplace tout élément réservé à l'autre genre par l'équivalent naturel (gratuit).
 */
export function adaptAvatarForGender(config: AvatarConfig, nextGender: AvatarGender): AvatarConfig {
  const nextHair = isItemAllowedForGender(config.hair, nextGender)
    ? config.hair
    : (nextGender === 'female' ? 'hair_braids' : 'hair_short_fade');

  let nextOutfit = config.outfit;
  if (!isItemAllowedForGender(nextOutfit, nextGender)) {
    if (nextOutfit === 'outfit_school_uniform' && nextGender === 'female') nextOutfit = 'outfit_school_girl';
    else if (nextOutfit === 'outfit_school_girl' && nextGender === 'male') nextOutfit = 'outfit_school_uniform';
    else nextOutfit = 'outfit_tee_blue';
  }

  const nextAcc = isItemAllowedForGender(config.accessory, nextGender)
    ? config.accessory
    : 'acc_none';

  return {
    ...config,
    gender: nextGender,
    hair: nextHair,
    outfit: nextOutfit,
    accessory: nextAcc,
  };
}

/** Hash déterministe simple sur une chaîne (ID KONAN, nom, UID). */
export function hashAvatarSeed(seed?: string | null): number {
  const s = String(seed || 'konan');
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/** Avatar animé par défaut déterministe pour les comptes n'ayant pas encore personnalisé leur personnage. */
export function defaultAvatarForSeed(seed?: string | null): AvatarConfig {
  const h = hashAvatarSeed(seed);
  const gender: AvatarGender = h % 2 === 0 ? 'male' : 'female';
  const freeHairs = filterByGender(HAIR_OPTIONS, gender).filter((x) => x.price === 0);
  const freeOutfits = filterByGender(OUTFIT_OPTIONS, gender).filter((x) => x.price === 0);
  return {
    gender,
    skinColor: SKIN_TONES[h % 6].value,
    hair: freeHairs[(h >> 3) % freeHairs.length]?.id || (gender === 'female' ? 'hair_braids' : 'hair_short_fade'),
    hairColor: HAIR_COLORS[(h >> 5) % 3].value,
    eyes: EYE_OPTIONS[(h >> 7) % EYE_OPTIONS.length].id,
    mouth: MOUTH_OPTIONS[(h >> 9) % MOUTH_OPTIONS.length].id,
    outfit: freeOutfits[(h >> 11) % freeOutfits.length]?.id || 'outfit_tee_blue',
    accessory: 'acc_none',
    bgColor: BG_COLORS[(h >> 13) % BG_COLORS.length].value,
  };
}

/** Génère un look aléatoire uniquement à partir des éléments compatibles avec le genre et déjà débloqués. */
export function randomizeUnlockedAvatar(unlockedItems: string[], currentGender?: AvatarGender): AvatarConfig {
  const owned = new Set(unlockedItems);
  const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
  const gender: AvatarGender = currentGender || (Math.random() > 0.5 ? 'male' : 'female');
  const availHair = filterByGender(HAIR_OPTIONS, gender).filter((i) => i.price === 0 || owned.has(i.id));
  const availOutfit = filterByGender(OUTFIT_OPTIONS, gender).filter((i) => i.price === 0 || owned.has(i.id));
  const availAcc = filterByGender(ACCESSORY_OPTIONS, gender).filter((i) => i.price === 0 || owned.has(i.id));
  return {
    gender,
    skinColor: pick(SKIN_TONES).value,
    hair: pick(availHair).id,
    hairColor: pick(HAIR_COLORS).value,
    eyes: pick(EYE_OPTIONS).id,
    mouth: pick(MOUTH_OPTIONS).id,
    outfit: pick(availOutfit).id,
    accessory: pick(availAcc).id,
    bgColor: pick(BG_COLORS).value,
  };
}
