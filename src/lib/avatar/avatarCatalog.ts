/**
 * Catalogue officiel des Avatars Animés Personnalisables KONAN.
 * Synchronisé 1:1 avec api/_avatar.js (prix, IDs, restrictions Homme/Femme et exclusivité KONAN Pro).
 */

export type AvatarGender = 'male' | 'female';
export type AvatarItemGender = 'male' | 'female' | 'unisex';

export const PRO_ONLY_OUTFIT_ID = 'outfit_pro_gold';

export interface AvatarConfig {
  gender: AvatarGender;
  skinColor: string;
  hair: string;
  hairColor?: string;
  eyes: string;
  eyeColor?: string;
  mouth: string;
  glasses?: string;
  outfit: string;
  accessory: string;
  bgColor?: string;
}

export interface AvatarItemOption {
  id: string;
  label: string;
  /** 0 = gratuit (ou inclus Pro si proOnly), > 0 = prix en pièces d'or */
  price: number;
  /** 'male' = réservé Homme, 'female' = réservé Femme, 'unisex' = disponible pour les deux */
  gender: AvatarItemGender;
  /** Exclusif KONAN Pro (non achetable en pièces d'or) */
  proOnly?: boolean;
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

/** Palette officielle des couleurs de cheveux (Gratuite). */
export const HAIR_COLORS: SwatchOption[] = [
  { value: '#141414', label: 'Noir profond' },
  { value: '#3B2314', label: 'Brun foncé' },
  { value: '#6F4E37', label: 'Châtain' },
  { value: '#D4AF37', label: 'Blond doré' },
  { value: '#A53F2B', label: 'Roux' },
  { value: '#B0B7C0', label: 'Gris argenté' },
  { value: '#0088FF', label: 'Bleu électrique' },
  { value: '#8A2BE2', label: 'Violet' },
  { value: '#E63946', label: 'Rouge / Rose' },
];

/** Palette officielle des couleurs d'iris (Gratuite). */
export const EYE_COLORS: SwatchOption[] = [
  { value: '#111111', label: 'Noir' },
  { value: '#4E342E', label: 'Marron' },
  { value: '#8D6E63', label: 'Noisette' },
  { value: '#D9822B', label: 'Ambre / Miel' },
  { value: '#2E7D32', label: 'Vert' },
  { value: '#1976D2', label: 'Bleu' },
  { value: '#7B1FA2', label: 'Violet' },
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
  // Gratuits
  { id: 'hair_buzz', label: 'Coupe courte classique', price: 0, gender: 'male' },
  { id: 'hair_short_fade', label: 'Dégradé simple', price: 0, gender: 'male' },
  { id: 'hair_ponytail', label: 'Queue de cheval simple', price: 0, gender: 'female' },
  { id: 'hair_bob', label: 'Carré lisse', price: 0, gender: 'female' },
  { id: 'hair_afro', label: 'Afro naturel', price: 0, gender: 'unisex' },
  // Payants — Homme
  { id: 'hair_cyber_fade', label: 'Dégradé Éclair', price: 50, gender: 'male', tag: 'Motifs' },
  { id: 'hair_quiff', label: 'Coupe moderne stylée', price: 50, gender: 'male', tag: 'Style' },
  { id: 'hair_high_top', label: 'High-Top Fade', price: 50, gender: 'male', tag: 'Style' },
  { id: 'hair_curly', label: 'Taper bouclé', price: 50, gender: 'male', tag: 'Style' },
  { id: 'hair_gold_taper', label: 'Dégradé Motifs Or', price: 100, gender: 'male', tag: 'Boss' },
  // Payants — Femme
  { id: 'hair_braids', label: 'Tresses collées', price: 50, gender: 'female', tag: 'Braids' },
  { id: 'hair_bun', label: 'Chignon haut', price: 50, gender: 'female', tag: 'Chic' },
  { id: 'hair_waves', label: 'Long ondulé', price: 50, gender: 'female', tag: 'Style' },
  { id: 'hair_crown_braids', label: 'Tresses Royales', price: 100, gender: 'female', tag: 'Royal' },
  { id: 'hair_star_puffs', label: 'Chignon double', price: 100, gender: 'female', tag: 'Style' },
  // Payants — Mixtes
  { id: 'hair_locs', label: 'Locks courtes', price: 50, gender: 'unisex', tag: 'Style' },
  { id: 'hair_afro_big', label: 'Afro volumineux', price: 100, gender: 'unisex', tag: 'Volume' },
  { id: 'hair_anime_spiky', label: 'Coiffure Anime / Spiky', price: 100, gender: 'unisex', tag: 'Anime' },
  { id: 'hair_flame_locs', label: 'Locks longues dorées', price: 150, gender: 'unisex', tag: 'Élite' },
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

export const GLASSES_OPTIONS: AvatarItemOption[] = [
  // Gratuits
  { id: 'glasses_none', label: 'Aucune', price: 0, gender: 'unisex' },
  { id: 'glasses_round_thin', label: 'Rondes fines', price: 0, gender: 'unisex' },
  { id: 'glasses_square_classic', label: 'Carrées classiques', price: 0, gender: 'unisex' },
  // Payants
  { id: 'glasses_smart', label: 'Intellectuel épaisse', price: 50, gender: 'unisex', tag: 'Classique' },
  { id: 'glasses_shades_vip', label: 'Soleil noires VIP', price: 100, gender: 'unisex', tag: 'VIP' },
  { id: 'glasses_aviator_gold', label: 'Aviateur dorées', price: 100, gender: 'unisex', tag: 'Or' },
  { id: 'glasses_tinted_star', label: 'Teintées style Star', price: 100, gender: 'unisex', tag: 'Star' },
  { id: 'glasses_cat_eye', label: 'Œil-de-Chat chic', price: 100, gender: 'female', tag: 'Chic' },
  { id: 'glasses_cyber_visor', label: 'Visière Cyber', price: 150, gender: 'unisex', tag: 'Futur' },
];

export const ACCESSORY_OPTIONS: AvatarItemOption[] = [
  // Gratuits
  { id: 'acc_none', label: 'Aucun', price: 0, gender: 'unisex' },
  { id: 'acc_sport_band', label: 'Bandeau de sport', price: 0, gender: 'unisex' },
  { id: 'acc_beard_clean', label: 'Barbe taillée', price: 0, gender: 'male' },
  { id: 'acc_earrings_pearl', label: 'Boucles Perles', price: 0, gender: 'female' },
  // Payants — Mixtes
  { id: 'acc_beanie', label: 'Bonnet stylé', price: 50, gender: 'unisex', tag: 'Chapeau' },
  { id: 'acc_cap_konan', label: 'Casquette Streetwear', price: 100, gender: 'unisex', tag: 'Street' },
  { id: 'acc_cap_backwards', label: 'Casquette à l’envers', price: 100, gender: 'unisex', tag: 'Street' },
  { id: 'acc_bucket_hat', label: 'Bob tendance', price: 100, gender: 'unisex', tag: 'Chapeau' },
  { id: 'acc_ninja_band', label: 'Bandeau Manga / Ninja', price: 100, gender: 'unisex', tag: 'Manga' },
  { id: 'acc_gaming_headset', label: 'Casque Gaming', price: 150, gender: 'unisex', tag: 'Gaming' },
  // Payants — Homme
  { id: 'acc_chain_gold', label: 'Chaîne dorée', price: 100, gender: 'male', tag: 'Or' },
  { id: 'acc_headband_gold', label: 'Bandeau Champion', price: 150, gender: 'male', tag: 'Élite' },
  { id: 'acc_crown_boss', label: 'Couronne de Champion', price: 250, gender: 'male', tag: 'Ligue' },
  // Payants — Femme
  { id: 'acc_earrings_gold', label: 'Créoles dorées', price: 50, gender: 'female', tag: 'Bijou' },
  { id: 'acc_headband_ribbon', label: 'Serre-tête Ruban', price: 50, gender: 'female', tag: 'Style' },
  { id: 'acc_necklace_gold', label: 'Collier doré', price: 150, gender: 'female', tag: 'Bijou' },
  { id: 'acc_tiara_queen', label: 'Couronne de Championne', price: 250, gender: 'female', tag: 'Ligue' },
];

export const OUTFIT_OPTIONS: AvatarItemOption[] = [
  // Exclusivité KONAN PRO (toujours en haut de la catégorie Habits)
  { id: PRO_ONLY_OUTFIT_ID, label: 'Tenue Or Massif (PRO)', price: 0, gender: 'unisex', proOnly: true, tag: 'PRO' },
  // Gratuits
  { id: 'outfit_tee_blue', label: 'T-shirt KONAN officiel', price: 0, gender: 'unisex' },
  { id: 'outfit_school_polo', label: 'Polo scolaire classique', price: 0, gender: 'unisex' },
  { id: 'outfit_sweater_basic', label: 'Pull simple', price: 0, gender: 'unisex' },
  // Payants — Campus & Streetwear
  { id: 'outfit_hoodie_basic', label: 'Hoodie oversize', price: 50, gender: 'unisex', tag: 'Street' },
  { id: 'outfit_varsity', label: 'Veste Varsity campus', price: 100, gender: 'unisex', tag: 'Campus' },
  { id: 'outfit_denim_jacket', label: 'Veste en jean', price: 100, gender: 'unisex', tag: 'Street' },
  { id: 'outfit_sport_jersey', label: 'Maillot sportif', price: 100, gender: 'unisex', tag: 'Sport' },
  // Payants — Boss & Élégance
  { id: 'outfit_modern_shirt', label: 'Chemise moderne', price: 100, gender: 'male', tag: 'Chic' },
  { id: 'outfit_dress_chic', label: 'Robe moderne chic', price: 100, gender: 'female', tag: 'Chic' },
  { id: 'outfit_boss_suit', label: 'Costume-cravate PDG', price: 150, gender: 'male', tag: 'Boss' },
  { id: 'outfit_boss_lady', label: 'Blazer chic', price: 150, gender: 'female', tag: 'Boss' },
  // Payants — Culture & Tech
  { id: 'outfit_cyber_gamer', label: 'Veste Cyber néon', price: 150, gender: 'unisex', tag: 'Tech' },
  { id: 'outfit_kente_royal', label: 'Tenue africaine brodée', price: 200, gender: 'unisex', tag: 'Culture' },
  { id: 'outfit_elite_gold', label: 'Tenue d’Élite', price: 250, gender: 'unisex', tag: 'Légende' },
];

export const ALL_AVATAR_ITEMS: Record<string, AvatarItemOption> = Object.fromEntries(
  [...HAIR_OPTIONS, ...EYE_OPTIONS, ...MOUTH_OPTIONS, ...GLASSES_OPTIONS, ...OUTFIT_OPTIONS, ...ACCESSORY_OPTIONS].map((item) => [item.id, item]),
);

export const DEFAULT_AVATAR_CONFIG: AvatarConfig = {
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
 * - remplace tout élément réservé à l'autre genre par l'équivalent naturel (gratuit),
 * - migre les anciennes lunettes stockées dans `accessory`,
 * - retire la Tenue Or Massif si `isPro === false`.
 */
export function adaptAvatarForGender(
  config: AvatarConfig,
  nextGender: AvatarGender,
  opts?: { isPro?: boolean },
): AvatarConfig {
  let glasses = config.glasses || 'glasses_none';
  let accessory = config.accessory || 'acc_none';
  if (glasses === 'glasses_none') {
    if (accessory === 'acc_glasses_smart') { glasses = 'glasses_smart'; accessory = 'acc_none'; }
    else if (accessory === 'acc_shades_cool') { glasses = 'glasses_shades_vip'; accessory = 'acc_none'; }
    else if (accessory === 'acc_glasses_cat') { glasses = 'glasses_cat_eye'; accessory = 'acc_none'; }
  }

  const nextHair = isItemAllowedForGender(config.hair, nextGender)
    ? config.hair
    : (nextGender === 'female' ? 'hair_ponytail' : 'hair_short_fade');

  const nextGlasses = isItemAllowedForGender(glasses, nextGender) ? glasses : 'glasses_none';

  let nextOutfit = isItemAllowedForGender(config.outfit, nextGender)
    ? config.outfit
    : 'outfit_tee_blue';
  if (nextOutfit === PRO_ONLY_OUTFIT_ID && opts?.isPro === false) {
    nextOutfit = 'outfit_tee_blue';
  }

  const nextAcc = isItemAllowedForGender(accessory, nextGender) ? accessory : 'acc_none';

  return {
    ...config,
    gender: nextGender,
    hair: nextHair,
    glasses: nextGlasses,
    outfit: nextOutfit,
    accessory: nextAcc,
    eyeColor: config.eyeColor || '#111111',
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
  const freeOutfits = filterByGender(OUTFIT_OPTIONS, gender).filter((x) => x.price === 0 && !x.proOnly);
  return {
    gender,
    skinColor: SKIN_TONES[h % 6].value,
    hair: freeHairs[(h >> 3) % freeHairs.length]?.id || (gender === 'female' ? 'hair_ponytail' : 'hair_short_fade'),
    hairColor: HAIR_COLORS[(h >> 5) % 3].value,
    eyes: EYE_OPTIONS[(h >> 7) % EYE_OPTIONS.length].id,
    eyeColor: EYE_COLORS[(h >> 8) % 4].value,
    mouth: MOUTH_OPTIONS[(h >> 9) % MOUTH_OPTIONS.length].id,
    glasses: 'glasses_none',
    outfit: freeOutfits[(h >> 11) % freeOutfits.length]?.id || 'outfit_tee_blue',
    accessory: 'acc_none',
    bgColor: BG_COLORS[(h >> 13) % BG_COLORS.length].value,
  };
}

/**
 * Génère un look aléatoire uniquement à partir des éléments compatibles avec le genre et déjà débloqués.
 * Exclut strictement la Tenue Or Massif (PRO) si l'utilisateur n'est pas membre KONAN Pro.
 */
export function randomizeUnlockedAvatar(
  unlockedItems: string[],
  currentGender?: AvatarGender,
  isPro: boolean = false,
): AvatarConfig {
  const owned = new Set(unlockedItems);
  const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
  const gender: AvatarGender = currentGender || (Math.random() > 0.5 ? 'male' : 'female');
  const availHair = filterByGender(HAIR_OPTIONS, gender).filter((i) => i.price === 0 || owned.has(i.id));
  const availGlasses = filterByGender(GLASSES_OPTIONS, gender).filter((i) => i.price === 0 || owned.has(i.id));
  const availOutfit = filterByGender(OUTFIT_OPTIONS, gender).filter((i) => {
    if (i.proOnly) return isPro;
    return i.price === 0 || owned.has(i.id);
  });
  const availAcc = filterByGender(ACCESSORY_OPTIONS, gender).filter((i) => i.price === 0 || owned.has(i.id));
  return {
    gender,
    skinColor: pick(SKIN_TONES).value,
    hair: pick(availHair).id,
    hairColor: pick(HAIR_COLORS).value,
    eyes: pick(EYE_OPTIONS).id,
    eyeColor: pick(EYE_COLORS).value,
    mouth: pick(MOUTH_OPTIONS).id,
    glasses: pick(availGlasses).id,
    outfit: pick(availOutfit).id,
    accessory: pick(availAcc).id,
    bgColor: pick(BG_COLORS).value,
  };
}
