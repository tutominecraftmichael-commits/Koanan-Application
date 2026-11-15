/**
 * Paquet de cours : seconde_svt. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { svt2deCChapters } from '../courses/svt_2de_c';
import { svt2deALeMessageNerveuxChapter, svt2deALeMessageHormonalChapter, svt2deALesGrandsEnsemblesEnvironnementauxChapter, svt2deALaProductionMatiereOrganiqueChapter, svt2deALeChangementClimatiqueChapter, svt2deALaStructureCelluleAnimaleChapter, svt2deALaReproductionConformeMitoseChapter, svt2deADiversiteComportementsAlimentairesChapter, svt2deAHabitudesAlimentairesEtSanteChapter } from '../courses/svt_2de_a';

export const CHAPTERS: CurriculumChapter[] = [
  ...svt2deCChapters,
  svt2deALeMessageNerveuxChapter,
  svt2deALeMessageHormonalChapter,
  svt2deALesGrandsEnsemblesEnvironnementauxChapter,
  svt2deALaProductionMatiereOrganiqueChapter,
  svt2deALeChangementClimatiqueChapter,
  svt2deALaStructureCelluleAnimaleChapter,
  svt2deALaReproductionConformeMitoseChapter,
  svt2deADiversiteComportementsAlimentairesChapter,
  svt2deAHabitudesAlimentairesEtSanteChapter,
];
