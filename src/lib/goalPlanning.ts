/**
 * KONAN Plus (étape 4, 2026-11-24) — le planning réglé sur l'objectif.
 *
 * L'élève donne sa moyenne actuelle dans chaque matière (facultatif). KONAN calcule sa moyenne générale
 * (pondérée par les coefficients), l'écart avec son objectif (12, 16, 18), puis OÙ gagner les points qui
 * manquent au moindre effort : un point gagné dans une matière à fort coefficient rapporte plus, et monter
 * de 9 à 11 est plus facile que de 17 à 19 (rendements décroissants). Le résultat : une note visée par
 * matière (Subject.targetGrade) ; le planning donne ensuite plus de séances là où l'écart est grand.
 */

export interface GoalSubjectInput {
  id: string;
  name: string;
  coefficient: number;
  /** Moyenne actuelle sur 20 (absente : l'élève ne sait pas) */
  current?: number | null;
}

export type GoalPriority = 'priorite' | 'renforcer' | 'maintien';

export interface GoalPlanRow {
  id: string;
  name: string;
  coefficient: number;
  current: number | null;
  /** Note visée proposée pour atteindre l'objectif */
  suggested: number;
  /** Points de moyenne générale gagnés si la note visée est atteinte */
  gainOnAverage: number;
  priority: GoalPriority;
}

export interface GoalPlan {
  goalTarget: number;
  /** Moyenne générale actuelle (matières avec une note), ou null si aucune note */
  currentAverage: number | null;
  /** Moyenne générale si chaque note visée est atteinte */
  projectedAverage: number | null;
  /** Points de moyenne générale qui manquent (0 si l'objectif est déjà atteint) */
  gap: number;
  /** L'objectif est-il atteignable avec des progrès réalistes (au plus +6 points par matière) ? */
  reachable: boolean;
  /** Matières sans note : leur note visée est l'objectif lui-même */
  withoutGrade: number;
  rows: GoalPlanRow[];
}

const STEP = 0.5;
/** Au plus +6 points dans une matière sur la période : au-delà, ce n'est plus réaliste */
const MAX_RISE = 6;
/** Note visée la plus haute proposée : 19 (viser 20 n'est pas un plan réaliste) */
const MAX_TARGET = 19;
const round2 = (n: number) => Math.round(n * 100) / 100;
const roundHalf = (n: number) => Math.round(n * 2) / 2;

export function cleanGrade(v: unknown): number | null {
  if (v === null || v === undefined || v === '') return null;
  const n = Number(String(v).replace(',', '.'));
  return Number.isFinite(n) && n >= 0 && n <= 20 ? Math.round(n * 100) / 100 : null;
}

/** Moyenne pondérée par les coefficients (seulement les matières qui ont une note). */
export function weightedAverage(list: Array<{ coefficient: number; grade: number | null }>): number | null {
  const graded = list.filter((s) => s.grade !== null && s.coefficient > 0);
  const coefs = graded.reduce((s, x) => s + x.coefficient, 0);
  if (!coefs) return null;
  return round2(graded.reduce((s, x) => s + x.coefficient * (x.grade as number), 0) / coefs);
}

/**
 * Effort pour gagner le demi-point suivant dans une matière : plus on est déjà monté (ou plus la note est haute),
 * plus c'est dur. Le rapport « coefficient / effort » dit où le prochain demi-point rapporte le plus.
 */
function stepCost(current: number, risen: number): number {
  const next = current + risen + STEP;
  return 1 + risen / 2 + (next > 16 ? 1 : 0) + (next > 18 ? 2 : 0);
}

export function planForGoal(subjects: GoalSubjectInput[], goalTarget: number): GoalPlan {
  const list = subjects
    .filter((s) => s.coefficient > 0)
    .map((s) => ({ ...s, current: cleanGrade(s.current) }));
  const graded = list.filter((s) => s.current !== null);
  const coefs = graded.reduce((s, x) => s + x.coefficient, 0);
  const currentAverage = weightedAverage(graded.map((s) => ({ coefficient: s.coefficient, grade: s.current })));

  // Points pondérés à gagner (somme des coef × points) pour que la moyenne atteigne l'objectif
  const rise = new Map<string, number>(graded.map((s) => [s.id, 0]));
  let needed = currentAverage === null ? 0 : Math.max(0, (goalTarget - currentAverage) * coefs);
  while (needed > 1e-9) {
    let best: (typeof graded)[number] | null = null;
    let bestValue = 0;
    for (const s of graded) {
      const r = rise.get(s.id) as number;
      if (r + STEP > MAX_RISE || (s.current as number) + r + STEP > MAX_TARGET) continue;
      const value = s.coefficient / stepCost(s.current as number, r);
      if (value > bestValue) { best = s; bestValue = value; }
    }
    if (!best) break; // plus aucun progrès réaliste possible
    rise.set(best.id, (rise.get(best.id) as number) + STEP);
    needed -= best.coefficient * STEP;
  }
  const reachable = needed <= 1e-9;

  const rows: GoalPlanRow[] = list.map((s) => {
    if (s.current === null) {
      return { id: s.id, name: s.name, coefficient: s.coefficient, current: null, suggested: goalTarget, gainOnAverage: 0, priority: s.coefficient >= 4 ? 'renforcer' : 'maintien' };
    }
    const r = rise.get(s.id) as number;
    return {
      id: s.id, name: s.name, coefficient: s.coefficient, current: s.current,
      // Jamais une note visée plus basse que la note actuelle
      suggested: Math.min(20, roundHalf(s.current + r)),
      gainOnAverage: coefs ? round2((s.coefficient * r) / coefs) : 0,
      priority: r >= 2 ? 'priorite' : r > 0 ? 'renforcer' : 'maintien',
    };
  });
  // Ordre d'affichage : là où l'on gagne le plus d'abord, puis par coefficient
  rows.sort((a, b) => b.gainOnAverage - a.gainOnAverage || b.coefficient - a.coefficient);

  const projectedAverage = graded.length
    ? weightedAverage(rows.filter((r) => r.current !== null).map((r) => ({ coefficient: r.coefficient, grade: r.suggested })))
    : null;
  return {
    goalTarget,
    currentAverage,
    projectedAverage,
    gap: currentAverage === null ? 0 : round2(Math.max(0, goalTarget - currentAverage)),
    reachable,
    withoutGrade: list.length - graded.length,
    rows,
  };
}

/**
 * Poids d'une matière dans le planning selon l'écart entre sa note visée et sa note actuelle :
 * 1 sans note ; jusqu'à ×1,8 pour un gros écart ; ×0,8 pour une matière déjà au-dessus de sa note visée.
 */
export function goalPlanningFactor(current: number | null | undefined, target: number | null | undefined): number {
  const c = cleanGrade(current);
  const t = cleanGrade(target);
  if (c === null || t === null) return 1;
  return Math.max(0.8, Math.min(1.8, 1 + (t - c) / 6));
}

/** Temps de travail conseillé par jour (minutes) selon l'objectif. */
export const GOAL_DAILY_MINUTES: Record<string, number> = { target_12: 60, target_16: 90, major_promotion: 120 };
