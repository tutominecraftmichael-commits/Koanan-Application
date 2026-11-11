import type { CurriculumChapter, InteractiveExercise, PointVisualSchema } from '../../lib/curriculum/types';
import { MATHS_2DE_C_NUMERIQUE_ILLUSTRATIONS } from './maths_2de_c_numerique';
import { GEO_TERMINALE_ILLUSTRATIONS } from './geo_terminale';
import { SECONDE_A_ILLUSTRATIONS } from './seconde_a';
import { SCENE_ILLUSTRATIONS } from './scenes';
import { GENERATED_SCENES } from './generatedScenes';

/**
 * Figure(s) rattachée(s) à une question, repérée par l'identifiant ORIGINAL de l'exercice :
 * - course : figure de la fiche de cours de l'étape (elle enseigne la notion) ;
 * - question : figure affichée avec l'énoncé (ex: « lis la courbe »).
 */
export interface ExerciseIllustration {
  course?: PointVisualSchema;
  question?: PointVisualSchema;
}

/**
 * Matières qui reçoivent des scènes dessinées (personnages, décors) : UNIQUEMENT l'Histoire-Géographie
 * et la Philosophie (règle fixée par le fondateur le 2026-11-10). Les sciences et le Français gardent
 * seulement les figures tracées par le code (courbes, schémas, tableaux).
 */
export const SCENE_SUBJECTS: readonly string[] = ['histoire_geo', 'philosophie'];

const isSceneIllustration = (ill: ExerciseIllustration) =>
  Boolean(ill.course?.scene || ill.course?.sceneSpec || ill.question?.scene || ill.question?.sceneSpec);

/** Scènes générées (Gemini choisit, le moteur de KONAN dessine), au même format que les autres figures. */
const GENERATED_ILLUSTRATIONS: Record<string, ExerciseIllustration> = Object.fromEntries(
  Object.entries(GENERATED_SCENES).map(([id, s]) => [
    id,
    { course: { type: 'custom_svg', scene: true, title: s.title, caption: s.caption, sceneSpec: s.spec } },
  ]),
);

const ALL_ILLUSTRATIONS: Record<string, ExerciseIllustration> = {
  // Ordre de priorité (le dernier gagne) : scènes générées < scènes dessinées à la main < figures
  // (schéma, carte, courbe…) déjà prévues pour la même étape.
  ...GENERATED_ILLUSTRATIONS,
  ...SCENE_ILLUSTRATIONS,
  ...MATHS_2DE_C_NUMERIQUE_ILLUSTRATIONS,
  ...GEO_TERMINALE_ILLUSTRATIONS,
  ...SECONDE_A_ILLUSTRATIONS,
};

/** Étapes déjà illustrées à la main (figure ou scène) : le générateur de scènes n'y touche pas. */
export const HANDMADE_ILLUSTRATION_IDS: ReadonlySet<string> = new Set([
  ...Object.keys(SCENE_ILLUSTRATIONS),
  ...Object.keys(MATHS_2DE_C_NUMERIQUE_ILLUSTRATIONS),
  ...Object.keys(GEO_TERMINALE_ILLUSTRATIONS),
  ...Object.keys(SECONDE_A_ILLUSTRATIONS),
]);

function withIllustration(exercise: InteractiveExercise, scenesAllowed: boolean): InteractiveExercise {
  const ill = ALL_ILLUSTRATIONS[exercise.id];
  if (!ill) return exercise;
  if (!scenesAllowed && isSceneIllustration(ill)) return exercise;
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
  const scenesAllowed = SCENE_SUBJECTS.includes(chapter.subjectId);
  const points = chapter.points.map((point) => {
    const exercises = point.exercises?.map((ex) => {
      const next = withIllustration(ex, scenesAllowed);
      if (next !== ex) touched = true;
      return next;
    });
    const structuredSteps = point.structuredSteps?.map((step) => {
      const ex = withIllustration(step.exercise, scenesAllowed);
      if (ex === step.exercise) return step;
      touched = true;
      return { ...step, exercise: ex };
    });
    return { ...point, exercises: exercises ?? point.exercises, structuredSteps: structuredSteps ?? point.structuredSteps };
  });
  return touched ? { ...chapter, points } : chapter;
}
