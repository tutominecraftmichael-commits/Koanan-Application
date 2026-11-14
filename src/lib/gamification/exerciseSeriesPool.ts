/**
 * Série de l'icône d'exercices : 10 QCM tirés au hasard dans les mini-leçons que l'élève a DÉJÀ
 * terminées dans KONAN (jamais sur une notion pas encore vue), jusqu'à 5 matières mélangées.
 */
import type { CurriculumChapter, CurriculumGradeLevel, InteractiveExercise, StemSubjectId, StudentCurriculumProgressMap } from '../curriculum/types';
import { STEM_SUBJECTS } from '../curriculum/types';
import { SERIES_LENGTH } from './gamification';

export interface SeriesQuestion {
  key: string;
  subjectId: StemSubjectId;
  subjectName: string;
  chapterTitle: string;
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

/** Mini-leçons terminées de chaque matière, pour la classe de l'élève. */
export function masteredPointsBySubject(map: StudentCurriculumProgressMap, gradeKey: string): Map<StemSubjectId, Set<string>> {
  const out = new Map<StemSubjectId, Set<string>>();
  for (const subjectId of Object.keys(STEM_SUBJECTS) as StemSubjectId[]) {
    const prog = map[`${gradeKey}::${subjectId}`];
    if (!prog) continue;
    const ids = new Set<string>(prog.masteredPointIds || []);
    for (const sub of Object.values(prog.subCategories || {})) for (const id of sub?.masteredPointIds || []) ids.add(id);
    if (ids.size) out.set(subjectId, ids);
  }
  return out;
}

/**
 * Construit la série. `getChapters` donne les chapitres d'une matière pour la classe (registre des cours).
 * Renvoie moins de 10 questions si l'élève a encore peu de mini-leçons terminées (0 = rien à réviser).
 */
export function buildExerciseSeries(
  mastered: Map<StemSubjectId, Set<string>>,
  gradeLevel: CurriculumGradeLevel,
  getChapters: (subjectId: StemSubjectId, gradeLevel: CurriculumGradeLevel) => CurriculumChapter[],
  rnd: () => number = Math.random,
): SeriesQuestion[] {
  const pools: SeriesQuestion[][] = [];
  for (const [subjectId, ids] of mastered) {
    const subjectName = STEM_SUBJECTS[subjectId]?.name || subjectId;
    const pool: SeriesQuestion[] = [];
    const seen = new Set<string>();
    for (const chapter of getChapters(subjectId, gradeLevel)) {
      for (const point of chapter.points || []) {
        if (!ids.has(point.id)) continue;
        const exercises = [...(point.exercises || []), ...(point.structuredSteps || []).map((s) => s.exercise)];
        for (const ex of exercises) {
          if (!isUsableQcm(ex) || seen.has(ex.prompt)) continue;
          seen.add(ex.prompt);
          pool.push({ key: `${subjectId}:${ex.id || pool.length}`, subjectId, subjectName, chapterTitle: chapter.title, exercise: ex });
        }
      }
    }
    if (pool.length) pools.push(shuffle(pool, rnd));
  }
  // Jusqu'à 5 matières tirées au hasard, puis questions réparties à tour de rôle
  const chosen = shuffle(pools, rnd).slice(0, MAX_SUBJECTS);
  const series: SeriesQuestion[] = [];
  for (let round = 0; series.length < SERIES_LENGTH && chosen.some((p) => p.length > round); round++) {
    for (const pool of chosen) {
      if (series.length >= SERIES_LENGTH) break;
      if (pool[round]) series.push(pool[round]);
    }
  }
  return shuffle(series, rnd);
}
