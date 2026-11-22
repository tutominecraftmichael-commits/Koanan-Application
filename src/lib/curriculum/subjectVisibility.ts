/**
 * Matières cachées selon le pays de l'élève (choix du fondateur, 2026-11-22) : hors Côte d'Ivoire,
 * l'Histoire-Géographie du lycée n'est pas proposée (programme propre au pays). Tout le reste est ouvert.
 * Module minuscule : l'appli le règle dès que le pays est connu, sans charger le catalogue des cours.
 */
import type { StemSubjectId } from './types';

const NOTHING_HIDDEN: ReadonlySet<StemSubjectId> = new Set();
const HIDDEN_OUTSIDE_CI: ReadonlySet<StemSubjectId> = new Set<StemSubjectId>(['histoire_geo']);
let hiddenSubjects = NOTHING_HIDDEN;
let currentCountry = '';

/** À appeler avec le pays de l'élève (code « CI », « SN »…, vide = ancien compte = Côte d'Ivoire). */
export function setCurriculumCountry(country?: string | null): void {
  const code = String(country || '').trim().toUpperCase();
  currentCountry = code;
  hiddenSubjects = code && code !== 'CI' ? HIDDEN_OUTSIDE_CI : NOTHING_HIDDEN;
}

/** Pays de l'élève, envoyé aux fonctions d'IA (sujets, corrections, tuteur, Feynman) : '' = Côte d'Ivoire. */
export function getStudentCountry(): string {
  return currentCountry;
}

export function isSubjectHidden(subjectId: StemSubjectId): boolean {
  return hiddenSubjects.has(subjectId);
}
