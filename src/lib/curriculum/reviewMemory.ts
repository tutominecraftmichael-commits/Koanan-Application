/**
 * RÉVISION ESPACÉE (mémoire des questions de KONAN)
 *
 * KONAN retient, pour chaque question du cours guidé, si l'élève l'a réussie ou ratée, puis la fait
 * revenir au bon moment (méthode des boîtes de Leitner) :
 *   - une question ratée revient le LENDEMAIN ;
 *   - une question réussie revient de plus en plus tard : 1 jour, 3 jours, 7 jours, 14 jours, puis 30 jours.
 * Au début de chaque séance, les questions « à revoir aujourd'hui » du même volet (ex. Physique) sont
 * posées en premier, sans montrer la fiche de cours (on se teste de mémoire).
 *
 * Stockage : sur l'appareil (comme la progression du cours), une fiche par élève.
 */
import type { CurriculumGradeLevel, InteractiveExercise, StemSubjectId, StemSubCategory } from './types';
import { notifyLearningChanged } from './learningEvents';

const STORAGE_PREFIX = 'konan_review_memory_v1_';
/** Délai (en jours) avant le prochain rappel, selon la boîte atteinte. */
export const BOX_INTERVAL_DAYS = [1, 3, 7, 14, 30] as const;
const MAX_ITEMS = 2000;

export interface ReviewEntry {
  exerciseId: string;
  pointId: string;
  chapterId: string;
  subject: StemSubjectId;
  grade: CurriculumGradeLevel;
  subCategory: StemSubCategory;
  /** Boîte de Leitner : 0 = à revoir demain … 4 = très bien sue (30 jours). */
  box: number;
  /** Date du prochain rappel (AAAA-MM-JJ, heure locale). */
  due: string;
  lastResult: 'ok' | 'ko';
  seen: number;
  updatedAt: number;
}

type ReviewMap = Record<string, ReviewEntry>;

export function localYmd(d: Date = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function addDays(ymd: string, days: number): string {
  const [y, m, d] = ymd.split('-').map(Number);
  return localYmd(new Date(y, m - 1, d + days));
}

function read(userId: string): ReviewMap {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${userId}`);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

/** Mémoire complète (pour la synchronisation avec le compte). */
export function getReviewMap(userId: string): ReviewMap {
  return read(userId);
}

/** Remplace la mémoire locale par une version fusionnée venue du compte (sans renvoyer au compte). */
export function replaceReviewMap(userId: string, map: ReviewMap): void {
  write(userId, map, true);
}

function write(userId: string, map: ReviewMap, silent = false): void {
  try {
    const entries = Object.values(map);
    // Garde-fou de taille : on oublie d'abord les questions les mieux sues et les plus anciennes
    if (entries.length > MAX_ITEMS) {
      entries.sort((a, b) => b.box - a.box || a.updatedAt - b.updatedAt);
      for (const e of entries.slice(0, entries.length - MAX_ITEMS)) delete map[e.exerciseId];
    }
    localStorage.setItem(`${STORAGE_PREFIX}${userId}`, JSON.stringify(map));
  } catch {
    // stockage plein ou indisponible : la révision espacée reprendra plus tard
  }
  if (!silent) notifyLearningChanged(userId);
}

export interface ReviewContext {
  subject: StemSubjectId;
  grade: CurriculumGradeLevel;
  subCategory: StemSubCategory;
  chapterId: string;
  pointId: string;
}

/**
 * Enregistre la réponse de l'élève à une question.
 * `correct` = réussie du premier coup (une réussite après correction ne compte pas comme sue).
 */
export function recordReviewAnswer(userId: string, ctx: ReviewContext, exerciseId: string, correct: boolean, today: string = localYmd()): ReviewEntry {
  const map = read(userId);
  const prev = map[exerciseId];
  const box = correct ? Math.min(BOX_INTERVAL_DAYS.length - 1, prev ? prev.box + 1 : 0) : 0;
  const entry: ReviewEntry = {
    exerciseId,
    pointId: ctx.pointId,
    chapterId: ctx.chapterId,
    subject: ctx.subject,
    grade: ctx.grade,
    subCategory: ctx.subCategory,
    box,
    due: addDays(today, correct ? BOX_INTERVAL_DAYS[box] : 1),
    lastResult: correct ? 'ok' : 'ko',
    seen: (prev?.seen ?? 0) + 1,
    updatedAt: Date.now(),
  };
  map[exerciseId] = entry;
  write(userId, map);
  return entry;
}

/** Questions à revoir aujourd'hui (ou en retard) pour ce volet, les plus urgentes d'abord. */
export function getDueReviews(
  userId: string,
  subject: StemSubjectId,
  grade: CurriculumGradeLevel,
  subCategory: StemSubCategory,
  limit = 3,
  today: string = localYmd(),
): ReviewEntry[] {
  return Object.values(read(userId))
    .filter((e) => e.subject === subject && e.grade === grade && e.subCategory === subCategory && e.due <= today)
    // Les ratées d'abord, puis les plus en retard, puis les moins bien sues
    .sort((a, b) => (a.lastResult === b.lastResult ? 0 : a.lastResult === 'ko' ? -1 : 1) || a.due.localeCompare(b.due) || a.box - b.box)
    .slice(0, limit);
}

/** Une question de cours disparue (contenu mis à jour) est retirée de la mémoire. */
export function forgetReview(userId: string, exerciseId: string): void {
  const map = read(userId);
  if (map[exerciseId]) {
    delete map[exerciseId];
    write(userId, map);
  }
}

/** Retrouve l'exercice d'origine d'une fiche de révision (null s'il n'existe plus). */
export function findReviewExercise(
  chapters: { id: string; points: { id: string; exercises?: InteractiveExercise[]; structuredSteps?: { exercise: InteractiveExercise }[] }[] }[],
  entry: ReviewEntry,
): { exercise: InteractiveExercise; stepIndex: number; point: any; chapter: any } | null {
  const chapter = chapters.find((c) => c.id === entry.chapterId);
  const point = chapter?.points.find((p) => p.id === entry.pointId);
  if (!chapter || !point) return null;
  const list = point.exercises && point.exercises.length ? point.exercises : (point.structuredSteps || []).map((s) => s.exercise);
  const stepIndex = list.findIndex((ex) => ex?.id === entry.exerciseId);
  if (stepIndex === -1) return null;
  return { exercise: list[stepIndex], stepIndex, point, chapter };
}
