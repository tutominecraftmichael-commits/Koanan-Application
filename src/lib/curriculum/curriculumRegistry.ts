import type { CurriculumChapter, CurriculumGradeLevel, StemSubjectId } from './types';
import { expandChapterTo6MiniLessons } from './curriculumExpander';
import { applyIllustrations } from '../../data/illustrations';
import { isSubjectHidden } from './subjectVisibility';

// ============================================================================
// COURS AUTHENTIQUES UNIQUEMENT
// Seuls les chapitres rédigés à partir des leçons officielles (src/data/courses)
// sont servis aux élèves. L'ancien tableau de chapitres génériques « de remplissage »
// (6e à Terminale, jamais affiché, ≈ 5 Mo) a été supprimé le 2026-11-14 : sans cours
// officiel, l'élève voit « Cours en préparation ».
// ============================================================================
// ============================================================================
// CHARGEMENT À LA DEMANDE, PAR NIVEAU ET PAR MATIÈRE
// Les cours pèsent plus de 15 Mo : un élève ne télécharge que les paquets de son niveau
// (Seconde, Première ou Terminale) et des matières dont il a besoin, une seule fois.
// Toute lecture des cours doit être précédée de `await loadCurriculumFor(classe, [matières])` ;
// les scripts de contrôle appellent loadAllCurriculum().
// ============================================================================
export type CurriculumLevel = 'seconde' | 'premiere' | 'terminale' | 'lmd_entd_l1' | 'lmd_srit_l1';
const LEVELS: CurriculumLevel[] = ['seconde', 'premiere', 'terminale', 'lmd_entd_l1', 'lmd_srit_l1'];
const SUBJECT_ORDER: StemSubjectId[] = [
  'maths', 'physique_chimie', 'svt', 'francais', 'histoire_geo', 'philosophie',
  'lmd_algorithmique', 'lmd_algebre', 'lmd_analyse', 'lmd_logique_math', 'lmd_stat_descriptive', 'lmd_reseaux',
  'lmd_intro_eco_num', 'lmd_modele_dev_eco_num', 'lmd_macroeconomie', 'lmd_microeconomie', 'lmd_banque', 'lmd_assurance',
  'lmd_compta_generale', 'lmd_compta_analytique', 'lmd_oge', 'lmd_intro_management', 'lmd_intro_marketing', 'lmd_intro_droit_num', 'lmd_droit_numerique',
  'lmd_bureautique', 'lmd_init_info', 'lmd_tef', 'lmd_ecriture_creative', 'lmd_dev_perso',
  'lmd_structures_algebriques', 'lmd_geometrie_diff', 'lmd_analyse_2', 'lmd_archi_ordinateurs', 'lmd_algo_python',
  'lmd_optique_geometrique', 'lmd_pde', 'lmd_electrostatique', 'lmd_electrocinetique', 'lmd_electronique_fondamentale', 'lmd_electronique_numerique', 'lmd_mecanique_point',
  'lmd_analyse_economique', 'lmd_intro_droit', 'lmd_anglais',
];

type LmdEntdPackKey =
  | 'lmd_entd_l1_maths_info'
  | 'lmd_entd_l1_eco_finance'
  | 'lmd_entd_l1_gestion_droit'
  | 'lmd_entd_l1_comm_bureau';
type LmdSritPackKey =
  | 'lmd_srit_l1_maths_info'
  | 'lmd_srit_l1_physique_elec'
  | 'lmd_srit_l1_eco_droit_lang';
type LmdPackKey = LmdEntdPackKey | LmdSritPackKey;
type LyceePackKey = `${'seconde' | 'premiere' | 'terminale'}_${'maths' | 'physique_chimie' | 'svt' | 'francais' | 'histoire_geo' | 'philosophie'}`;
type PackKey = LyceePackKey | LmdPackKey;

const LMD_SUBJECT_PACK: Partial<Record<StemSubjectId, LmdPackKey>> = {
  lmd_algorithmique: 'lmd_entd_l1_maths_info',
  lmd_algebre: 'lmd_entd_l1_maths_info',
  lmd_analyse: 'lmd_entd_l1_maths_info',
  lmd_logique_math: 'lmd_entd_l1_maths_info',
  lmd_stat_descriptive: 'lmd_entd_l1_maths_info',
  lmd_reseaux: 'lmd_entd_l1_maths_info',
  lmd_intro_eco_num: 'lmd_entd_l1_eco_finance',
  lmd_modele_dev_eco_num: 'lmd_entd_l1_eco_finance',
  lmd_macroeconomie: 'lmd_entd_l1_eco_finance',
  lmd_microeconomie: 'lmd_entd_l1_eco_finance',
  lmd_banque: 'lmd_entd_l1_eco_finance',
  lmd_assurance: 'lmd_entd_l1_eco_finance',
  lmd_compta_generale: 'lmd_entd_l1_gestion_droit',
  lmd_compta_analytique: 'lmd_entd_l1_gestion_droit',
  lmd_oge: 'lmd_entd_l1_gestion_droit',
  lmd_intro_management: 'lmd_entd_l1_gestion_droit',
  lmd_intro_marketing: 'lmd_entd_l1_gestion_droit',
  lmd_intro_droit_num: 'lmd_entd_l1_gestion_droit',
  lmd_droit_numerique: 'lmd_entd_l1_gestion_droit',
  lmd_bureautique: 'lmd_entd_l1_comm_bureau',
  lmd_init_info: 'lmd_entd_l1_comm_bureau',
  lmd_tef: 'lmd_entd_l1_comm_bureau',
  lmd_ecriture_creative: 'lmd_entd_l1_comm_bureau',
  lmd_dev_perso: 'lmd_entd_l1_comm_bureau',
  // SRIT L1 — Maths & Info
  lmd_structures_algebriques: 'lmd_srit_l1_maths_info',
  lmd_geometrie_diff: 'lmd_srit_l1_maths_info',
  lmd_analyse_2: 'lmd_srit_l1_maths_info',
  lmd_archi_ordinateurs: 'lmd_srit_l1_maths_info',
  lmd_algo_python: 'lmd_srit_l1_maths_info',
  // SRIT L1 — Physique, Électricité & Électronique
  lmd_optique_geometrique: 'lmd_srit_l1_physique_elec',
  lmd_pde: 'lmd_srit_l1_physique_elec',
  lmd_electrostatique: 'lmd_srit_l1_physique_elec',
  lmd_electrocinetique: 'lmd_srit_l1_physique_elec',
  lmd_electronique_fondamentale: 'lmd_srit_l1_physique_elec',
  lmd_electronique_numerique: 'lmd_srit_l1_physique_elec',
  lmd_mecanique_point: 'lmd_srit_l1_physique_elec',
  // SRIT L1 — Économie, Droit & Anglais
  lmd_analyse_economique: 'lmd_srit_l1_eco_droit_lang',
  lmd_intro_droit: 'lmd_srit_l1_eco_droit_lang',
  lmd_anglais: 'lmd_srit_l1_eco_droit_lang',
};

const ALL_PACK_ORDER: PackKey[] = [
  'seconde_maths', 'seconde_physique_chimie', 'seconde_svt', 'seconde_francais', 'seconde_histoire_geo',
  'premiere_maths', 'premiere_physique_chimie', 'premiere_svt', 'premiere_francais', 'premiere_histoire_geo', 'premiere_philosophie',
  'terminale_maths', 'terminale_physique_chimie', 'terminale_svt', 'terminale_francais', 'terminale_histoire_geo', 'terminale_philosophie',
  'lmd_entd_l1_maths_info', 'lmd_entd_l1_eco_finance', 'lmd_entd_l1_gestion_droit', 'lmd_entd_l1_comm_bureau',
  'lmd_srit_l1_maths_info', 'lmd_srit_l1_physique_elec', 'lmd_srit_l1_eco_droit_lang',
];

/** Paquets existants (src/data/coursePacks/<niveau>_<matière|groupe>.ts). */
const PACK_LOADERS: Partial<Record<PackKey, () => Promise<{ CHAPTERS: CurriculumChapter[] }>>> = {
  seconde_maths: () => import('../../data/coursePacks/seconde_maths'),
  seconde_physique_chimie: () => import('../../data/coursePacks/seconde_physique_chimie'),
  seconde_svt: () => import('../../data/coursePacks/seconde_svt'),
  seconde_francais: () => import('../../data/coursePacks/seconde_francais'),
  seconde_histoire_geo: () => import('../../data/coursePacks/seconde_histoire_geo'),
  premiere_maths: () => import('../../data/coursePacks/premiere_maths'),
  premiere_physique_chimie: () => import('../../data/coursePacks/premiere_physique_chimie'),
  premiere_svt: () => import('../../data/coursePacks/premiere_svt'),
  premiere_francais: () => import('../../data/coursePacks/premiere_francais'),
  premiere_histoire_geo: () => import('../../data/coursePacks/premiere_histoire_geo'),
  premiere_philosophie: () => import('../../data/coursePacks/premiere_philosophie'),
  terminale_maths: () => import('../../data/coursePacks/terminale_maths'),
  terminale_physique_chimie: () => import('../../data/coursePacks/terminale_physique_chimie'),
  terminale_svt: () => import('../../data/coursePacks/terminale_svt'),
  terminale_francais: () => import('../../data/coursePacks/terminale_francais'),
  terminale_histoire_geo: () => import('../../data/coursePacks/terminale_histoire_geo'),
  terminale_philosophie: () => import('../../data/coursePacks/terminale_philosophie'),
  lmd_entd_l1_maths_info: () => import('../../data/coursePacks/lmd_entd_l1_maths_info'),
  lmd_entd_l1_eco_finance: () => import('../../data/coursePacks/lmd_entd_l1_eco_finance'),
  lmd_entd_l1_gestion_droit: () => import('../../data/coursePacks/lmd_entd_l1_gestion_droit'),
  lmd_entd_l1_comm_bureau: () => import('../../data/coursePacks/lmd_entd_l1_comm_bureau'),
  lmd_srit_l1_maths_info: () => import('../../data/coursePacks/lmd_srit_l1_maths_info'),
  lmd_srit_l1_physique_elec: () => import('../../data/coursePacks/lmd_srit_l1_physique_elec'),
  lmd_srit_l1_eco_droit_lang: () => import('../../data/coursePacks/lmd_srit_l1_eco_droit_lang'),
};
// Pays de l'élève (subjectVisibility) : hors Côte d'Ivoire, pas d'Histoire-Géographie du lycée.
// Sans cours, la matière n'a ni leçons guidées, ni QCM, ni sujet de 2 h (« Cours en préparation »).
const visible = (c: CurriculumChapter) => !isSubjectHidden(c.subjectId);

const loadedPacks = new Map<PackKey, CurriculumChapter[]>();
const pendingPacks = new Map<PackKey, Promise<void>>();
let AUTHORED_CHAPTERS: CurriculumChapter[] = [];

/** Niveau (paquet de cours) d'une classe : seconde_c → 'seconde', premiere_a1 → 'premiere', lmd_entd_l1 → 'lmd_entd_l1'… */
export function curriculumLevelOf(gradeLevel?: string | null): CurriculumLevel | null {
  const g = String(gradeLevel || '');
  return LEVELS.find((l) => g.startsWith(l)) ?? null;
}

function packKeysFor(gradeLevel?: string | null, subjects?: readonly StemSubjectId[]): PackKey[] {
  const level = curriculumLevelOf(gradeLevel);
  if (!level) return [];
  if (level === 'lmd_entd_l1') {
    if (!subjects?.length) {
      return ['lmd_entd_l1_maths_info', 'lmd_entd_l1_eco_finance', 'lmd_entd_l1_gestion_droit', 'lmd_entd_l1_comm_bureau', 'lmd_srit_l1_eco_droit_lang'];
    }
    const keys = subjects
      .map((s) => LMD_SUBJECT_PACK[s])
      .filter((k): k is LmdPackKey => Boolean(k));
    return [...new Set(keys)];
  }
  if (level === 'lmd_srit_l1') {
    if (!subjects?.length) {
      return ['lmd_entd_l1_maths_info', 'lmd_entd_l1_comm_bureau', 'lmd_srit_l1_maths_info', 'lmd_srit_l1_physique_elec', 'lmd_srit_l1_eco_droit_lang'];
    }
    const keys = subjects
      .map((s) => LMD_SUBJECT_PACK[s])
      .filter((k): k is LmdPackKey => Boolean(k));
    return [...new Set(keys)];
  }
  return (subjects?.length ? subjects : SUBJECT_ORDER)
    .map((s) => `${level}_${s}` as PackKey)
    .filter((k) => PACK_LOADERS[k]);
}

function loadPack(key: PackKey): Promise<void> {
  if (loadedPacks.has(key)) return Promise.resolve();
  let pending = pendingPacks.get(key);
  if (!pending) {
    pending = PACK_LOADERS[key]!()
      .then((m) => {
        loadedPacks.set(key, m.CHAPTERS);
        // Ordre stable : niveau puis matière / paquet
        AUTHORED_CHAPTERS = ALL_PACK_ORDER.flatMap((k) => loadedPacks.get(k) || []);
      })
      .finally(() => pendingPacks.delete(key));
    pendingPacks.set(key, pending);
  }
  return pending;
}

/**
 * Charge (une seule fois) les cours de cette classe : seulement les matières demandées,
 * ou toutes les matières du niveau si aucune n'est précisée.
 */
export async function loadCurriculumFor(gradeLevel?: string | null, subjects?: readonly StemSubjectId[]): Promise<void> {
  await Promise.all(packKeysFor(gradeLevel, subjects).map(loadPack));
}

/** Les cours de cette classe (et de ces matières) sont-ils déjà en mémoire ? */
export function isCurriculumLoadedFor(gradeLevel?: string | null, subjects?: readonly StemSubjectId[]): boolean {
  return packKeysFor(gradeLevel, subjects).every((k) => loadedPacks.has(k));
}

/** Tous les niveaux et toutes les matières (scripts de contrôle, générateur de dessins). */
export async function loadAllCurriculum(): Promise<void> {
  await Promise.all((Object.keys(PACK_LOADERS) as PackKey[]).map(loadPack));
}

/** Leçons telles qu'écrites (avant figures et découpage) : sert aux scripts (ex. générateur de dessins). */
export function getAuthoredChaptersRaw(): readonly CurriculumChapter[] {
  return AUTHORED_CHAPTERS;
}

/** Alias de filières historiques (premiere_a / terminale_a -> A1). */
export function normalizeGradeForLookup(gradeLevel: CurriculumGradeLevel): CurriculumGradeLevel {
  if (gradeLevel === 'terminale_a') return 'terminale_a1';
  if (gradeLevel === 'premiere_a') return 'premiere_a1';
  return gradeLevel;
}

// Cache des chapitres déjà découpés en mini-leçons (l'expansion est coûteuse et déterministe)
const expandedChapterCache = new Map<string, CurriculumChapter>();

function getExpandedChapter(chapter: CurriculumChapter): CurriculumChapter {
  let expanded = expandedChapterCache.get(chapter.id);
  if (!expanded) {
    expanded = expandChapterTo6MiniLessons(applyIllustrations(chapter));
    expandedChapterCache.set(chapter.id, expanded);
  }
  return expanded;
}

/**
 * Vérifie instantanément (en microsecondes, sans étendre les chapitres en mémoire)
 * si des cours existent pour cette matière et cette classe.
 */
export function hasCurriculumChapters(
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel
): boolean {
  return AUTHORED_CHAPTERS.some(
    (c) => c.subjectId === subjectId && visible(c) && chapterServesGrade(c, gradeLevel)
  );
}

/**
 * Récupère les chapitres officiels pour une matière et une classe données.
 * RÈGLE STRICTE : uniquement la classe exacte de l'élève. Aucune bascule vers
 * une autre classe ou une autre matière. Renvoie un tableau vide si le cours
 * de cette classe n'est pas encore disponible (« Cours en préparation »).
 */
export function getCurriculumChapters(
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel
): CurriculumChapter[] {
  return AUTHORED_CHAPTERS
    .filter((c) => c.subjectId === subjectId && visible(c) && chapterServesGrade(c, gradeLevel))
    .map((c) => ({ chapter: c, order: chapterOrderForGrade(c, gradeLevel) }))
    .sort((a, b) => a.order - b.order)
    .map(({ chapter, order }) => {
      const expanded = getExpandedChapter(chapter);
      // Ordre propre à la classe (orderForGrades) : copie légère, l'objet en cache garde son ordre d'origine.
      return order === expanded.order ? expanded : { ...expanded, order };
    });
}

/** Numéro d'ordre de la leçon dans cette classe (orderForGrades en priorité, sinon order). */
function chapterOrderForGrade(chapter: CurriculumChapter, gradeLevel: CurriculumGradeLevel): number {
  const perGrade = chapter.orderForGrades;
  return perGrade?.[gradeLevel] ?? perGrade?.[normalizeGradeForLookup(gradeLevel)] ?? chapter.order;
}

/** Le chapitre est-il au programme de cette classe (classe principale ou classes partageant la même leçon) ? */
function chapterServesGrade(chapter: CurriculumChapter, gradeLevel: CurriculumGradeLevel): boolean {
  const resolvedGrade = normalizeGradeForLookup(gradeLevel);
  const grades = [chapter.gradeLevel, ...(chapter.alsoForGrades || [])];
  return grades.includes(resolvedGrade) || grades.includes(gradeLevel);
}

/** Recherche un chapitre authentique par identifiant, limité à une classe si elle est fournie. */
export function getCurriculumChapterById(
  chapterId: string,
  gradeLevel?: CurriculumGradeLevel
): CurriculumChapter | undefined {
  const chap = AUTHORED_CHAPTERS.find(
    (c) => c.id === chapterId && visible(c) && (!gradeLevel || chapterServesGrade(c, gradeLevel))
  );
  return chap ? getExpandedChapter(chap) : undefined;
}
