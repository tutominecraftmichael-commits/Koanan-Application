/**
 * Paquet de cours : terminale_francais. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { FR_TLE_EOI_L01_SOLEILS_INDEPENDANCES } from '../courses/terminale/fr_tle_soleils_independances';
import { FR_TLE_GT_L02_CHAKA_HEROS_EPIQUE } from '../courses/terminale/fr_tle_chaka_heros_epique';
import { FR_TLE_EE_L03_RESUME_TEXTE } from '../courses/terminale/fr_tle_resume_texte';

export const CHAPTERS: CurriculumChapter[] = [
  FR_TLE_EOI_L01_SOLEILS_INDEPENDANCES,
  FR_TLE_GT_L02_CHAKA_HEROS_EPIQUE,
  FR_TLE_EE_L03_RESUME_TEXTE,
];
