import type { CurriculumChapter, CurriculumGradeLevel, StemSubjectId } from './types';
import { expandChapterTo6MiniLessons } from './curriculumExpander';
import { applyIllustrations } from '../../data/illustrations';

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
export type CurriculumLevel = 'seconde' | 'premiere' | 'terminale';
const LEVELS: CurriculumLevel[] = ['seconde', 'premiere', 'terminale'];
const SUBJECT_ORDER: StemSubjectId[] = ['maths', 'physique_chimie', 'svt', 'francais', 'histoire_geo', 'philosophie'];
type PackKey = `${CurriculumLevel}_${StemSubjectId}`;
/** Paquets existants (src/data/coursePacks/<niveau>_<matière>.ts). */
const PACK_LOADERS: Partial<Record<PackKey, () => Promise<{ CHAPTERS: CurriculumChapter[] }>>> = {
  seconde_maths: () => import('../../data/coursePacks/seconde_maths'),
  seconde_physique_chimie: () => import('../../data/coursePacks/seconde_physique_chimie'),
  seconde_svt: () => import('../../data/coursePacks/seconde_svt'),
  seconde_francais: () => import('../../data/coursePacks/seconde_francais'),
  seconde_histoire_geo: () => import('../../data/coursePacks/seconde_histoire_geo'),
  premiere_maths: () => import('../../data/coursePacks/premiere_maths'),
  premiere_physique_chimie: () => import('../../data/coursePacks/premiere_physique_chimie'),
  premiere_francais: () => import('../../data/coursePacks/premiere_francais'),
  premiere_histoire_geo: () => import('../../data/coursePacks/premiere_histoire_geo'),
  premiere_philosophie: () => import('../../data/coursePacks/premiere_philosophie'),
  terminale_maths: () => import('../../data/coursePacks/terminale_maths'),
  terminale_physique_chimie: () => import('../../data/coursePacks/terminale_physique_chimie'),
  terminale_svt: () => import('../../data/coursePacks/terminale_svt'),
  terminale_francais: () => import('../../data/coursePacks/terminale_francais'),
  terminale_histoire_geo: () => import('../../data/coursePacks/terminale_histoire_geo'),
  terminale_philosophie: () => import('../../data/coursePacks/terminale_philosophie'),
};
const loadedPacks = new Map<PackKey, CurriculumChapter[]>();
const pendingPacks = new Map<PackKey, Promise<void>>();
let AUTHORED_CHAPTERS: CurriculumChapter[] = [];

/** Niveau (paquet de cours) d'une classe : seconde_c → 'seconde', premiere_a1 → 'premiere'… */
export function curriculumLevelOf(gradeLevel?: string | null): CurriculumLevel | null {
  const g = String(gradeLevel || '');
  return LEVELS.find((l) => g.startsWith(l)) ?? null;
}

function packKeysFor(gradeLevel?: string | null, subjects?: readonly StemSubjectId[]): PackKey[] {
  const level = curriculumLevelOf(gradeLevel);
  if (!level) return [];
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
        // Ordre stable : niveau puis matière
        AUTHORED_CHAPTERS = LEVELS.flatMap((l) => SUBJECT_ORDER.flatMap((s) => loadedPacks.get(`${l}_${s}`) || []));
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
    (c) => c.subjectId === subjectId && chapterServesGrade(c, gradeLevel)
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
    .filter((c) => c.subjectId === subjectId && chapterServesGrade(c, gradeLevel))
    .sort((a, b) => a.order - b.order)
    .map(getExpandedChapter);
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
    (c) => c.id === chapterId && (!gradeLevel || chapterServesGrade(c, gradeLevel))
  );
  return chap ? getExpandedChapter(chap) : undefined;
}
