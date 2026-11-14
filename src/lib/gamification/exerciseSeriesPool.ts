/**
 * Questions de l'icône d'exercices.
 *
 * VERROU : une matière n'entre dans les exercices que si l'élève y a déjà terminé au moins UNE mini-leçon
 * dans KONAN (c'est ce qui situe l'élève dans son programme). Sans aucune mini-leçon : pas de série.
 *
 * Questions posées : TOUT le chapitre sur lequel l'élève travaille (même les parties pas encore faites
 * dans l'appli), plus les chapitres d'avant (du même volet), jusqu'à 5 matières mélangées.
 *
 * Difficulté selon le niveau de la série enchaînée :
 *   niveau 1 : surtout définitions et propriétés ; niveau 2 : + méthodes et exemples ;
 *   niveau 3 : tout mélangé ; niveau 4 : questions déjà ratées et pièges d'abord.
 */
import type {
  CurriculumChapter, CurriculumGradeLevel, InteractiveExercise, StemSubjectId, StepKind, StudentCurriculumProgressMap,
} from '../curriculum/types';
import { STEM_SUBJECTS } from '../curriculum/types';

export interface SeriesQuestion {
  key: string;
  subjectId: StemSubjectId;
  subjectName: string;
  chapterTitle: string;
  difficulty: 1 | 2 | 3;
  exercise: InteractiveExercise;
}

const MAX_SUBJECTS = 5;

/** Générateur pseudo-aléatoire reproductible (tests) ; Math.random par défaut. */
export function seededRandom(seed: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(list: T[], rnd: () => number): T[] {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const isUsableQcm = (e?: InteractiveExercise): e is InteractiveExercise =>
  Boolean(e && e.prompt && Array.isArray(e.options) && e.options.length >= 2 && Number.isInteger(e.correctAnswerIndex)
    && (e.correctAnswerIndex as number) >= 0 && (e.correctAnswerIndex as number) < e.options.length);

const DIFFICULTY: Record<StepKind, 1 | 2 | 3> = { definition: 1, propriete: 1, methode: 2, exemple: 2, piege: 3 };

/**
 * Chapitres à interroger pour chaque matière (verrou : au moins une mini-leçon terminée dans la matière).
 * `subCategoryOf` donne le volet d'un chapitre (Physique / Chimie, Histoire / Géographie…).
 */
export function studiedChapters(
  map: StudentCurriculumProgressMap,
  gradeKey: string,
  getChapters: (subjectId: StemSubjectId) => CurriculumChapter[],
  subCategoryOf: (chapter: CurriculumChapter) => string,
): Map<StemSubjectId, Set<string>> {
  const out = new Map<StemSubjectId, Set<string>>();
  for (const subjectId of Object.keys(STEM_SUBJECTS) as StemSubjectId[]) {
    const prog = map[`${gradeKey}::${subjectId}`];
    if (!prog) continue;
    const mastered = new Set<string>(prog.masteredPointIds || []);
    const current = new Set<string>(prog.currentChapterId ? [prog.currentChapterId] : []);
    for (const sub of Object.values(prog.subCategories || {})) {
      for (const id of sub?.masteredPointIds || []) mastered.add(id);
      if (sub?.currentChapterId) current.add(sub.currentChapterId);
    }
    if (!mastered.size) continue; // verrou : aucune mini-leçon faite dans cette matière
    const chapters = getChapters(subjectId);
    // Chapitres « repères » : chapitre en cours de chaque volet et chapitres où une mini-leçon a été faite
    const anchors = chapters.filter((c) => current.has(c.id) || (c.points || []).some((p) => mastered.has(p.id)));
    const chosen = new Set<string>();
    for (const anchor of anchors) {
      const volet = subCategoryOf(anchor);
      for (const c of chapters) {
        if (subCategoryOf(c) === volet && (c.order ?? 0) <= (anchor.order ?? 0)) chosen.add(c.id);
      }
    }
    if (chosen.size) out.set(subjectId, chosen);
  }
  return out;
}

function priority(q: SeriesQuestion, levelIndex: number, wrongIds: Set<string>): number {
  if (levelIndex <= 0) return q.difficulty - 1;              // définitions d'abord
  if (levelIndex === 1) return q.difficulty <= 2 ? 0 : 1;    // + méthodes et exemples
  if (levelIndex === 2) return 0;                            // tout mélangé
  if (wrongIds.has(q.exercise.id)) return 0;                 // niveau 4 : questions déjà ratées
  return 4 - q.difficulty;                                   // puis pièges, méthodes, définitions
}

/**
 * Construit la série : `count` questions des chapitres étudiés, à tour de rôle entre jusqu'à 5 matières.
 * Moins de questions si le programme étudié est encore court (0 = rien à interroger).
 */
export function buildExerciseSeries(
  scope: Map<StemSubjectId, Set<string>>,
  gradeLevel: CurriculumGradeLevel,
  getChapters: (subjectId: StemSubjectId, gradeLevel: CurriculumGradeLevel) => CurriculumChapter[],
  options: { count: number; levelIndex: number; wrongIds?: Set<string>; rnd?: () => number },
): SeriesQuestion[] {
  const rnd = options.rnd || Math.random;
  const wrongIds = options.wrongIds || new Set<string>();
  const pools: SeriesQuestion[][] = [];
  for (const [subjectId, chapterIds] of scope) {
    const subjectName = STEM_SUBJECTS[subjectId]?.name || subjectId;
    const pool: SeriesQuestion[] = [];
    const seen = new Set<string>();
    for (const chapter of getChapters(subjectId, gradeLevel)) {
      if (!chapterIds.has(chapter.id)) continue;
      for (const point of chapter.points || []) {
        const fromSteps = (point.structuredSteps || []).map((s) => ({ ex: s.exercise, kind: s.stepKind }));
        const plain = (point.exercises || []).map((ex) => ({ ex, kind: undefined as StepKind | undefined }));
        for (const { ex, kind } of [...fromSteps, ...plain]) {
          if (!isUsableQcm(ex) || seen.has(ex.prompt)) continue;
          seen.add(ex.prompt);
          pool.push({
            key: `${subjectId}:${ex.id || pool.length}`, subjectId, subjectName, chapterTitle: chapter.title,
            difficulty: kind ? DIFFICULTY[kind] : 2, exercise: ex,
          });
        }
      }
    }
    if (!pool.length) continue;
    const ordered = shuffle(pool, rnd)
      .map((q, i) => ({ q, i, p: priority(q, options.levelIndex, wrongIds) }))
      .sort((a, b) => a.p - b.p || a.i - b.i)
      .map((x) => x.q);
    pools.push(ordered);
  }
  const chosen = shuffle(pools, rnd).slice(0, MAX_SUBJECTS);
  const series: SeriesQuestion[] = [];
  for (let round = 0; series.length < options.count && chosen.some((p) => p.length > round); round++) {
    for (const pool of chosen) {
      if (series.length >= options.count) break;
      if (pool[round]) series.push(pool[round]);
    }
  }
  return shuffle(series, rnd);
}
