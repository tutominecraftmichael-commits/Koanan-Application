/**
 * Description d'une scène illustrée (dessin d'ambiance) : Gemini la choisit une fois à partir du cours,
 * puis le code de KONAN la dessine toujours dans le même style (sceneRenderer.ts).
 * Seuls les mots des listes ci-dessous sont acceptés : tout le reste est ignoré à la validation.
 */

export const SETTINGS = [
  'savane', 'village', 'foret', 'desert', 'cote_mer', 'fleuve', 'ville', 'salle_classe', 'agora',
  'laboratoire', 'palais', 'plantation', 'champ', 'tribunal', 'bureau', 'marche', 'montagne', 'usine',
] as const;

export const COSTUMES = [
  'eleve_garcon', 'eleve_fille', 'enseignant', 'villageois', 'villageoise', 'enfant', 'paysan', 'pecheur',
  'ouvrier', 'commercante', 'philosophe_antique', 'philosophe_lumieres', 'savant', 'medecin', 'ecrivain',
  'roi_africain', 'reine_africaine', 'chef_traditionnel', 'griot', 'pharaon', 'citoyen_grec', 'soldat_colonial',
  'colon_europeen', 'marin_europeen', 'marchand_arabe', 'captif', 'juge', 'homme_politique', 'femme_politique',
  'explorateur', 'religieux', 'medecin_traditionnel',
] as const;

export const POSES = ['debout', 'marche', 'court', 'joie', 'triste', 'montre', 'reflechit', 'lit', 'parle', 'ecrit', 'salue'] as const;
export const MOODS = ['content', 'triste', 'neutre', 'determine', 'surpris'] as const;
export const SKINS = ['fonce', 'brun', 'moyen', 'clair', 'tres_clair'] as const;
export const HELD = ['livre', 'parchemin', 'baton', 'lance', 'plume', 'torche', 'drapeau', 'houe', 'loupe', 'eprouvette', 'micro'] as const;

export const PROPS = [
  'livre_ouvert', 'globe', 'microscope', 'plante', 'arbre', 'palmier', 'case', 'pyramide', 'colonnes', 'navire', 'pirogue',
  'chameau', 'vache', 'poisson', 'cacao', 'tableau', 'urne', 'drapeau_ci', 'balance', 'ampoule', 'coeur', 'cellule',
  'soleil', 'pluie', 'usine', 'chaines_brisees', 'carte', 'fort', 'feu', 'panier', 'ordinateur', 'telephone', 'montagne',
  'cerveau', 'adn', 'atome', 'fiole', 'horloge', 'pieces', 'graphique',
] as const;

export const PLACES = ['gauche', 'centre', 'droite', 'fond'] as const;
/** Véhicule dans lequel le personnage est assis (il est dessiné au volant / à la fenêtre). */
export const VEHICLES = ['voiture', 'gbaka', 'train'] as const;
export type VehicleId = typeof VEHICLES[number];

export type SettingId = typeof SETTINGS[number];
export type CostumeId = typeof COSTUMES[number];
export type PoseId = typeof POSES[number];
export type MoodId = typeof MOODS[number];
export type SkinId = typeof SKINS[number];
export type HeldId = typeof HELD[number];
export type PropId = typeof PROPS[number];
export type PlaceId = typeof PLACES[number];

export interface SceneCharacter {
  costume: CostumeId;
  pose: PoseId;
  mood: MoodId;
  skin?: SkinId;
  /** Regard vers la gauche ou vers la droite (par défaut : vers le centre de la scène). */
  facing?: 'gauche' | 'droite';
  holding?: HeldId;
  /** Mains liées (captif). */
  bound?: boolean;
  child?: boolean;
  /** Assis dans un véhicule (voiture, gbaka, train). */
  vehicle?: VehicleId;
}

export interface SceneProp {
  kind: PropId;
  place: PlaceId;
}

export interface SceneSpec {
  setting: SettingId;
  time?: 'jour' | 'soir' | 'nuit';
  characters: SceneCharacter[];
  props?: SceneProp[];
  /** Bulle de parole d'un personnage (index dans characters), texte court. */
  bubble?: { from: number; text: string };
  /** Pancarte ou écriteau (date, mot-clé), texte très court. */
  sign?: string;
}

const pick = <T extends string>(list: readonly T[], v: unknown): T | undefined =>
  (typeof v === 'string' && (list as readonly string[]).includes(v) ? (v as T) : undefined);

const cleanText = (v: unknown, max: number): string | undefined => {
  if (typeof v !== 'string') return undefined;
  const t = v.replace(/[<>&"]/g, '').replace(/\s+/g, ' ').trim();
  return t && t.length <= max ? t : undefined;
};

/**
 * Valide une description venue de l'IA : ne garde que le vocabulaire connu, borne les quantités.
 * Renvoie null si la scène n'est pas dessinable.
 */
export function validateSceneSpec(raw: unknown): SceneSpec | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  const setting = pick(SETTINGS, r.setting);
  if (!setting) return null;
  const characters: SceneCharacter[] = (Array.isArray(r.characters) ? r.characters : [])
    .slice(0, 4)
    .map((c): SceneCharacter | null => {
      if (!c || typeof c !== 'object') return null;
      const o = c as Record<string, unknown>;
      const costume = pick(COSTUMES, o.costume);
      if (!costume) return null;
      const ch: SceneCharacter = { costume, pose: pick(POSES, o.pose) ?? 'debout', mood: pick(MOODS, o.mood) ?? 'neutre' };
      const skin = pick(SKINS, o.skin);
      const holding = pick(HELD, o.holding);
      if (skin) ch.skin = skin;
      if (o.facing === 'gauche' || o.facing === 'droite') ch.facing = o.facing;
      if (holding) ch.holding = holding;
      if (o.bound === true) ch.bound = true;
      if (o.child === true) ch.child = true;
      const vehicle = pick(VEHICLES, o.vehicle);
      if (vehicle) ch.vehicle = vehicle;
      return ch;
    })
    .filter((c): c is SceneCharacter => c !== null);
  const props: SceneProp[] = (Array.isArray(r.props) ? r.props : [])
    .slice(0, 4)
    .map((p): SceneProp | null => {
      if (!p || typeof p !== 'object') return null;
      const o = p as Record<string, unknown>;
      const kind = pick(PROPS, o.kind);
      return kind ? { kind, place: pick(PLACES, o.place) ?? 'fond' } : null;
    })
    .filter((p): p is SceneProp => p !== null);
  if (!characters.length && !props.length) return null;
  const spec: SceneSpec = { setting, characters, props };
  const time = r.time === 'soir' || r.time === 'nuit' || r.time === 'jour' ? r.time : undefined;
  if (time) spec.time = time;
  const b = r.bubble as Record<string, unknown> | undefined;
  const bubbleText = cleanText(b?.text, 42);
  const from = Number(b?.from);
  if (bubbleText && Number.isInteger(from) && from >= 0 && from < characters.length) spec.bubble = { from, text: bubbleText };
  const sign = cleanText(r.sign, 18);
  if (sign) spec.sign = sign;
  return spec;
}
