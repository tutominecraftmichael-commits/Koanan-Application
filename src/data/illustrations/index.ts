import type { CurriculumChapter, InteractiveExercise, PointVisualSchema } from '../../lib/curriculum/types';
import { MATHS_2DE_C_NUMERIQUE_ILLUSTRATIONS } from './maths_2de_c_numerique';
import { GEO_TERMINALE_ILLUSTRATIONS } from './geo_terminale';
import { SECONDE_A_ILLUSTRATIONS } from './seconde_a';

/**
 * Figure(s) rattachée(s) à une question, repérée par l'identifiant ORIGINAL de l'exercice :
 * - course : figure de la fiche de cours de l'étape (elle enseigne la notion) ;
 * - question : figure affichée avec l'énoncé (ex: « lis la courbe »).
 */
export interface ExerciseIllustration {
  course?: PointVisualSchema;
  question?: PointVisualSchema;
}

const ALL_ILLUSTRATIONS: Record<string, ExerciseIllustration> = {
  ...MATHS_2DE_C_NUMERIQUE_ILLUSTRATIONS,
  ...GEO_TERMINALE_ILLUSTRATIONS,
  ...SECONDE_A_ILLUSTRATIONS,
};

function withIllustration(exercise: InteractiveExercise): InteractiveExercise {
  const ill = ALL_ILLUSTRATIONS[exercise.id];
  if (!ill) return exercise;
  return {
    ...exercise,
    courseVisualSchema: ill.course ?? exercise.courseVisualSchema,
    visualSchema: ill.question ?? exercise.visualSchema,
  };
}

/**
 * Ajoute les figures dessinées au chapitre, AVANT le découpage en mini-leçons
 * (les identifiants d'exercices sont encore les identifiants d'origine).
 * Ne modifie jamais les données importées : renvoie une copie.
 */
export function applyIllustrations(chapter: CurriculumChapter): CurriculumChapter {
  let touched = false;
  const points = chapter.points.map((point) => {
    const exercises = point.exercises?.map((ex) => {
      const next = withIllustration(ex);
      if (next !== ex) touched = true;
      return next;
    });
    const structuredSteps = point.structuredSteps?.map((step) => {
      const ex = withIllustration(step.exercise);
      if (ex === step.exercise) return step;
      touched = true;
      return { ...step, exercise: ex };
    });
    return { ...point, exercises: exercises ?? point.exercises, structuredSteps: structuredSteps ?? point.structuredSteps };
  });
  return touched ? { ...chapter, points } : chapter;
}
