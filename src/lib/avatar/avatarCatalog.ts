/**
 * Catalogue officiel des Avatars Animés Personnalisables KONAN.
 * Synchronisé 1:1 avec api/_avatar.js (prix et IDs vérifiés côté serveur).
 */

export type AvatarGender = 'male' | 'female';

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
  // Gratuits
  { id: 'hair_short_fade', label: 'Dégradé court', price: 0 },
  { id: 'hair_afro', label: 'Afro naturel', price: 0 },
  { id: 'hair_braids', label: 'Tresses', price: 0 },
  { id: 'hair_locs', label: 'Locks', price: 0 },
  { id: 'hair_bun', label: 'Chignon haut', price: 0 },
  { id: 'hair_bob', label: 'Carré lisse', price: 0 },
  { id: 'hair_curly', label: 'Boucles courtes', price: 0 },
  { id: 'hair_waves', label: 'Ondulations', price: 0 },
  // Premium (pièces d'or)
  { id: 'hair_cyber_fade', label: 'Dégradé Éclair', price: 50, tag: 'Style' },
  { id: 'hair_crown_braids', label: 'Tresses Royales', price: 100, tag: 'Royal' },
  { id: 'hair_star_puffs', label: 'Double Afro Puff', price: 100, tag: 'Style' },
  { id: 'hair_flame_locs', label: 'Locks Dorées', price: 150, tag: 'Élite' },
];

export const EYE_OPTIONS: AvatarItemOption[] = [
  { id: 'eyes_classic', label: 'Classique', price: 0 },
  { id: 'eyes_determined', label: 'Déterminé', price: 0 },
  { id: 'eyes_happy', label: 'Doux & rieur', price: 0 },
  { id: 'eyes_focused', label: 'Concentré', price: 0 },
  { id: 'eyes_fierce', label: 'Intense', price: 0 },
];

export const MOUTH_OPTIONS: AvatarItemOption[] = [
  { id: 'mouth_smile', label: 'Souriant', price: 0 },
  { id: 'mouth_confident', label: 'Confiant', price: 0 },
  { id: 'mouth_focused', label: 'Concentré', price: 0 },
  { id: 'mouth_playful', label: 'Malin', price: 0 },
  { id: 'mouth_determined', label: 'Déterminé', price: 0 },
];

export const OUTFIT_OPTIONS: AvatarItemOption[] = [
  // Gratuits
  { id: 'outfit_tee_blue', label: 'T-shirt Bleu', price: 0 },
  { id: 'outfit_tee_dark', label: 'T-shirt Noir', price: 0 },
  { id: 'outfit_school_polo', label: 'Polo scolaire', price: 0 },
  { id: 'outfit_school_uniform', label: 'Tenue scolaire', price: 0 },
  { id: 'outfit_hoodie_basic', label: 'Sweat simple', price: 0 },
  // Premium (pièces d'or)
  { id: 'outfit_boss_suit', label: 'Costume de Boss', price: 150, tag: 'Boss' },
  { id: 'outfit_cyber_gamer', label: 'Sweat Cyber', price: 150, tag: 'Gaming' },
  { id: 'outfit_kente_royal', label: 'Tenue Kita Moderne', price: 200, tag: 'Heritage' },
  { id: 'outfit_elite_gold', label: 'Tenue d’Élite Or', price: 250, tag: 'Légende' },
];

export const ACCESSORY_OPTIONS: AvatarItemOption[] = [
  // Gratuit
  { id: 'acc_none', label: 'Aucun', price: 0 },
  // Premium (pièces d'or)
  { id: 'acc_glasses_smart', label: 'Lunettes Intellect.', price: 50, tag: 'Lunettes' },
  { id: 'acc_beanie', label: 'Bonnet stylé', price: 50, tag: 'Chapeau' },
  { id: 'acc_shades_cool', label: 'Lunettes de Soleil', price: 100, tag: 'Lunettes' },
  { id: 'acc_cap_konan', label: 'Casquette KONAN', price: 100, tag: 'Chapeau' },
  { id: 'acc_headband_gold', label: 'Bandeau Champion', price: 150, tag: 'Élite' },
  { id: 'acc_crown_boss', label: 'Couronne Légende', price: 250, tag: 'Légende' },
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
  const freeHairs = HAIR_OPTIONS.filter((x) => x.price === 0);
  const freeOutfits = OUTFIT_OPTIONS.filter((x) => x.price === 0);
  const gender: AvatarGender = h % 2 === 0 ? 'male' : 'female';
  const maleFreeHairs = ['hair_short_fade', 'hair_afro', 'hair_locs', 'hair_curly'];
  const femaleFreeHairs = ['hair_braids', 'hair_bun', 'hair_bob', 'hair_waves', 'hair_afro'];
  const pool = gender === 'male' ? maleFreeHairs : femaleFreeHairs;
  return {
    gender,
    skinColor: SKIN_TONES[h % 6].value,
    hair: pool[(h >> 3) % pool.length] || freeHairs[0].id,
    hairColor: HAIR_COLORS[(h >> 5) % 3].value,
    eyes: EYE_OPTIONS[(h >> 7) % EYE_OPTIONS.length].id,
    mouth: MOUTH_OPTIONS[(h >> 9) % MOUTH_OPTIONS.length].id,
    outfit: freeOutfits[(h >> 11) % freeOutfits.length].id,
    accessory: 'acc_none',
    bgColor: BG_COLORS[(h >> 13) % BG_COLORS.length].value,
  };
}

/** Génère un look aléatoire uniquement à partir des éléments gratuits ou déjà possédés. */
export function randomizeUnlockedAvatar(unlockedItems: string[], currentGender?: AvatarGender): AvatarConfig {
  const owned = new Set(unlockedItems);
  const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
  const availHair = HAIR_OPTIONS.filter((i) => i.price === 0 || owned.has(i.id));
  const availOutfit = OUTFIT_OPTIONS.filter((i) => i.price === 0 || owned.has(i.id));
  const availAcc = ACCESSORY_OPTIONS.filter((i) => i.price === 0 || owned.has(i.id));
  return {
    gender: currentGender || (Math.random() > 0.5 ? 'male' : 'female'),
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
