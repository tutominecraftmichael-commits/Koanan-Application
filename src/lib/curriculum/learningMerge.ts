/**
 * Fusion de deux copies de la progression d'un élève (ce téléphone ↔ son compte).
 * Règle : pour chaque volet (ex. Physique) et pour chaque question, la version la PLUS RÉCENTE gagne.
 * Ainsi, travailler la Physique sur un téléphone et la Chimie sur un autre ne fait rien perdre.
 */
import type { StudentCurriculumProgressMap, SubjectStudentProgress } from './types';
import type { ReviewEntry } from './reviewMemory';

const time = (iso?: string) => {
  const t = iso ? Date.parse(iso) : NaN;
  return Number.isFinite(t) ? t : 0;
};

function mergeSubject(a: SubjectStudentProgress, b: SubjectStudentProgress): SubjectStudentProgress {
  const newer = time(b.lastSessionAt) > time(a.lastSessionAt) ? b : a;
  const subCategories: NonNullable<SubjectStudentProgress['subCategories']> = {};
  const keys = new Set([...Object.keys(a.subCategories || {}), ...Object.keys(b.subCategories || {})]);
  for (const key of keys) {
    const sa = a.subCategories?.[key as keyof typeof a.subCategories];
    const sb = b.subCategories?.[key as keyof typeof b.subCategories];
    if (!sa || !sb) { (subCategories as Record<string, unknown>)[key] = sa || sb; continue; }
    const winner = time(sb.lastSessionAt) > time(sa.lastSessionAt) ? sb : sa;
    (subCategories as Record<string, unknown>)[key] = {
      ...winner,
      // Les notions maîtrisées s'additionnent, d'où qu'elles viennent
      masteredPointIds: Array.from(new Set([...(sa.masteredPointIds || []), ...(sb.masteredPointIds || [])])),
      completedChapterIds: Array.from(new Set([...(sa.completedChapterIds || []), ...(sb.completedChapterIds || [])])),
    };
  }
  return {
    ...newer,
    masteredPointIds: Array.from(new Set([...(a.masteredPointIds || []), ...(b.masteredPointIds || [])])),
    completedChapterIds: Array.from(new Set([...(a.completedChapterIds || []), ...(b.completedChapterIds || [])])),
    subCategories,
  };
}

export function mergeProgressMaps(local: StudentCurriculumProgressMap, remote: StudentCurriculumProgressMap): StudentCurriculumProgressMap {
  const out: StudentCurriculumProgressMap = { ...remote };
  for (const [key, value] of Object.entries(local)) {
    if (!value) continue;
    const other = out[key];
    out[key] = other ? mergeSubject(value, other) : value;
  }
  return out;
}

export function mergeReviewMaps(local: Record<string, ReviewEntry>, remote: Record<string, ReviewEntry>): Record<string, ReviewEntry> {
  const out: Record<string, ReviewEntry> = { ...remote };
  for (const [id, entry] of Object.entries(local)) {
    const other = out[id];
    if (!other || (entry.updatedAt || 0) >= (other.updatedAt || 0)) out[id] = entry;
  }
  return out;
}
