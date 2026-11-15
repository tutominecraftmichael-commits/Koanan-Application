/**
 * Paquet de cours : seconde_physique_chimie. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { chimie2deCChapters } from '../courses/chimie_2de_c';
import { physique2deCChapters } from '../courses/physique_2de_c';
import { chimie2deAElementChimiqueChapter, chimie2deAStructureAtomeChapter, chimie2deAClassificationPeriodiqueChapter, chimie2deAIonsEtMoleculesChapter, chimie2deAMoleEtGrandeursMolairesChapter, chimie2deAEquationBilanChapter, chimie2deASolutionsAqueusesIoniquesChapter, chimie2deATestsIdentificationIonsChapter } from '../courses/chimie_2de_a';
import { physique2deALeMouvementChapter, physique2deAEquilibreSolideDeuxForcesChapter } from '../courses/physique_2de_a';

export const CHAPTERS: CurriculumChapter[] = [
  ...chimie2deCChapters,
  ...physique2deCChapters,
  chimie2deAElementChimiqueChapter,
  chimie2deAStructureAtomeChapter,
  chimie2deAClassificationPeriodiqueChapter,
  chimie2deAIonsEtMoleculesChapter,
  chimie2deAMoleEtGrandeursMolairesChapter,
  chimie2deAEquationBilanChapter,
  chimie2deASolutionsAqueusesIoniquesChapter,
  chimie2deATestsIdentificationIonsChapter,
  physique2deALeMouvementChapter,
  physique2deAEquilibreSolideDeuxForcesChapter,
];
