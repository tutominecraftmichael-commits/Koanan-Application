/**
 * Progression de l'élève par matière, pour que le planning s'adapte (src/services/plannerAlgorithm.ts) :
 * une matière dont toutes les mini-leçons sont faites passe en révisions espacées, au lieu de revenir
 * tous les jours ; une matière où il reste peu de leçons a juste le nombre de séances qu'il faut.
 * Les matières sans cours KONAN (Anglais, Philosophie…) ne sont pas dans le résultat : le planning les
 * répartit comme avant (coefficient et difficulté).
 */
import type { Subject } from '../../types';
import type { SubjectWorkloadMap } from '../../services/plannerAlgorithm';
import { canonicalGradeLevel, matchSubjectToStemCurriculum, shouldLaunchInteractiveTutor, tryResolveGradeLevel } from './curriculumMatcher';
import { loadCurriculumFor } from './curriculumRegistry';
import { getSubjectLessonStatus } from './studentProgressService';
import type { StemSubjectId } from './types';

const DAY_MS = 24 * 60 * 60 * 1000;

/** Nombre de jours entre deux dates (à minuit, heure du téléphone). */
function daysBetween(fromIso: string, now: Date): number | null {
  const t = Date.parse(fromIso);
  if (!Number.isFinite(t)) return null;
  const a = new Date(t);
  const start = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime();
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.max(0, Math.round((end - start) / DAY_MS));
}

export async function computeSubjectWorkloads(
  userId: string,
  gradeRaw: string | null | undefined,
  subjects: Subject[],
  now: Date = new Date()
): Promise<SubjectWorkloadMap> {
  const grade = canonicalGradeLevel(tryResolveGradeLevel(gradeRaw ?? undefined));
  if (!userId || !grade) return {};
  const withCourse = subjects
    .map((s) => ({ s, stem: matchSubjectToStemCurriculum(s.name).stemSubjectId as StemSubjectId | undefined }))
    .filter((x): x is { s: Subject; stem: StemSubjectId } => Boolean(x.stem) && shouldLaunchInteractiveTutor(x.s.name, grade));
  if (!withCourse.length) return {};
  await loadCurriculumFor(grade, [...new Set(withCourse.map((x) => x.stem))]);
  const map: SubjectWorkloadMap = {};
  for (const { s, stem } of withCourse) {
    const status = getSubjectLessonStatus(userId, stem, grade, s.name);
    if (!status || status.totalLessons === 0) continue;
    map[s.id] = {
      hasCourse: true,
      newLessonsLeft: status.newLessonsLeft,
      lastStudiedDaysAgo: status.lastStudiedAt ? daysBetween(status.lastStudiedAt, now) : null,
    };
  }
  return map;
}

/** Signature courte (pour savoir si la progression a vraiment changé : nouvelle matière terminée…). */
export function workloadSignature(map: SubjectWorkloadMap): string {
  return Object.keys(map).sort().map((k) => `${k}:${map[k].newLessonsLeft > 0 ? 'new' : 'review'}`).join('|');
}
