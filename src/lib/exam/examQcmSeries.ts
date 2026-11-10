/**
 * SÉRIE DE 30 QUESTIONS DE DEVOIR
 *  - pas de mini-leçon : 30 questions qui mélangent les chapitres choisis pour le devoir ;
 *  - les questions RATÉES avant (cours guidés ou séries précédentes) reviennent en priorité,
 *    glissées dans la série (pas toutes d'affilée), avec un petit mot de KONAN ;
 *  - le reste : les questions jamais vues d'abord, puis les moins récemment vues, chapitre après chapitre.
 * Si les chapitres choisis contiennent moins de 30 questions, la série les pose toutes (sans doublon).
 */
import type { CurriculumChapter, CurriculumPoint, InteractiveExercise, StemSubCategory } from '../curriculum/types';
import type { ReviewEntry } from '../curriculum/reviewMemory';
import { QCM_SERIES_LENGTH } from './examPrepRules';

export interface ExamQcmItem {
  exercise: InteractiveExercise;
  chapterId: string;
  chapterTitle: string;
  pointId: string;
  pointTitle: string;
  subCategory: StemSubCategory;
  /** Question ratée avant : KONAN la repose. */
  isRetry: boolean;
  /** Réponse fausse donnée la dernière fois (si connue). */
  lastWrongAnswer?: string;
}

function pointExercises(point: CurriculumPoint): InteractiveExercise[] {
  const list = point.exercises?.length ? point.exercises : (point.structuredSteps || []).map((s) => s.exercise);
  return list.filter((ex) => ex && ex.id && Array.isArray(ex.options) && ex.options.length >= 2 && typeof ex.correctAnswerIndex === 'number');
}

/** Petit générateur pseudo-aléatoire stable (même graine = même série si l'élève revient). */
function seeded(seedText: string) {
  let h = 2166136261;
  for (let i = 0; i < seedText.length; i++) h = Math.imul(h ^ seedText.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

export function buildExamQcmSeries(params: {
  chapters: CurriculumChapter[];
  getSubCategory: (c: CurriculumChapter) => StemSubCategory;
  /** Questions encore ratées (mémoire des erreurs), les plus récentes d'abord. */
  wrong: ReviewEntry[];
  /** Mémoire complète (pour savoir ce qui a déjà été vu et quand). */
  seenAt: Map<string, number>;
  seed: string;
  length?: number;
}): ExamQcmItem[] {
  const { chapters, getSubCategory, wrong, seenAt, seed } = params;
  const length = params.length ?? QCM_SERIES_LENGTH;
  const rand = seeded(seed);

  // Toutes les questions des chapitres, rangées par chapitre
  const byChapter = new Map<string, ExamQcmItem[]>();
  const byId = new Map<string, ExamQcmItem>();
  for (const chapter of chapters) {
    const items: ExamQcmItem[] = [];
    for (const point of chapter.points) {
      for (const exercise of pointExercises(point)) {
        if (byId.has(exercise.id)) continue;
        const item: ExamQcmItem = {
          exercise,
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          pointId: point.id,
          pointTitle: point.title,
          subCategory: getSubCategory(chapter),
          isRetry: false,
        };
        items.push(item);
        byId.set(exercise.id, item);
      }
    }
    byChapter.set(chapter.id, items);
  }

  // 1. Les questions ratées encore présentes dans les chapitres (au plus la moitié de la série)
  const retries: ExamQcmItem[] = [];
  for (const entry of wrong) {
    const item = byId.get(entry.exerciseId);
    if (!item || retries.length >= Math.ceil(length / 2)) continue;
    retries.push({ ...item, isRetry: true, lastWrongAnswer: entry.wrongAnswer });
  }
  const retryIds = new Set(retries.map((r) => r.exercise.id));

  // 2. Le reste : par chapitre, jamais vues d'abord, puis les plus anciennes ; ordre varié d'un jour à l'autre
  const queues = [...byChapter.values()].map((items) =>
    items
      .filter((it) => !retryIds.has(it.exercise.id))
      .map((it) => ({ it, seen: seenAt.get(it.exercise.id) ?? 0, r: rand() }))
      .sort((a, b) => a.seen - b.seen || a.r - b.r)
      .map((x) => x.it),
  ).filter((q) => q.length);
  // Ordre des chapitres varié, puis tirage chapitre après chapitre (mélange équilibré)
  queues.sort(() => rand() - 0.5);
  const fresh: ExamQcmItem[] = [];
  const freshTarget = Math.max(0, length - retries.length);
  while (fresh.length < freshTarget && queues.some((q) => q.length)) {
    for (const q of queues) {
      const next = q.shift();
      if (next) fresh.push(next);
      if (fresh.length >= freshTarget) break;
    }
  }

  // 3. On glisse les questions ratées dans la série : une toutes les 2 à 3 questions, dès le début
  const series: ExamQcmItem[] = [];
  const gap = retries.length ? Math.max(1, Math.floor((retries.length + fresh.length) / retries.length)) : 0;
  let r = 0;
  let f = 0;
  while (series.length < retries.length + fresh.length) {
    const takeRetry = r < retries.length && (f >= fresh.length || series.length % Math.max(2, Math.min(3, gap)) === 0);
    if (takeRetry) series.push(retries[r++]);
    else if (f < fresh.length) series.push(fresh[f++]);
    else series.push(retries[r++]);
  }
  return series.slice(0, length);
}
