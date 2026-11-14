/**
 * Paquet de cours : seconde_maths. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { maths2deCGeometryChapters } from '../courses/maths_2de_c';
import { maths2deCNumericChapters } from '../courses/maths_2de_c_numerique';
import { maths2deACalculsNumeriquesChapter } from '../courses/maths_2de_a';

export const CHAPTERS: CurriculumChapter[] = [
  ...maths2deCGeometryChapters,
  ...maths2deCNumericChapters,
  maths2deACalculsNumeriquesChapter,
];
