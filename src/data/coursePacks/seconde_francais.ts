/**
 * Paquet de cours : seconde_francais. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { FR_2DE_PL_L01_FONCTIONS_LANGAGE } from '../courses/seconde/fr_2de_fonctions_langage';
import { FR_2DE_PL_L02_CONNECTEURS_LOGIQUES } from '../courses/seconde/fr_2de_connecteurs_logiques';
import { FR_2DE_PL_L02B_EXPRESSION_OPINION } from '../courses/seconde/fr_2de_expression_opinion';
import { FR_2DE_PL_L03_SEMANTIQUE } from '../courses/seconde/fr_2de_semantique';
import { FR_2DE_PL_L04_ENONCIATION } from '../courses/seconde/fr_2de_enonciation';
import { FR_2DE_PL_L05_FIGURES_ANALOGIE_SUBSTITUTION } from '../courses/seconde/fr_2de_figures_analogie_substitution';
import { FR_2DE_PL_L05B_FIGURES_AMPLIFICATION_ATTENUATION } from '../courses/seconde/fr_2de_figures_amplification_attenuation';
import { FR_2DE_PL_L05C_FIGURES_OPPOSITION_CONSTRUCTION } from '../courses/seconde/fr_2de_figures_opposition_construction';
import { FR_2DE_PL_L06_VERSIFICATION_VERS_STROPHES } from '../courses/seconde/fr_2de_versification_vers_strophes';
import { FR_2DE_PL_L06B_VERSIFICATION_SONORITES_RYTHME } from '../courses/seconde/fr_2de_versification_sonorites_rythme';
import { FR_2DE_PL_L07_IMPLICITE } from '../courses/seconde/fr_2de_implicite';
import { FR_2DE_SF_L02_EXPOSE_ORAL } from '../courses/seconde/fr_2de_expose_oral';
import { francais2deAChapters } from '../courses/francais_2de_a';

export const CHAPTERS: CurriculumChapter[] = [
  FR_2DE_PL_L01_FONCTIONS_LANGAGE,
  FR_2DE_PL_L02_CONNECTEURS_LOGIQUES,
  FR_2DE_PL_L02B_EXPRESSION_OPINION,
  FR_2DE_PL_L03_SEMANTIQUE,
  FR_2DE_PL_L04_ENONCIATION,
  FR_2DE_PL_L05_FIGURES_ANALOGIE_SUBSTITUTION,
  FR_2DE_PL_L05B_FIGURES_AMPLIFICATION_ATTENUATION,
  FR_2DE_PL_L05C_FIGURES_OPPOSITION_CONSTRUCTION,
  FR_2DE_PL_L06_VERSIFICATION_VERS_STROPHES,
  FR_2DE_PL_L06B_VERSIFICATION_SONORITES_RYTHME,
  FR_2DE_PL_L07_IMPLICITE,
  FR_2DE_SF_L02_EXPOSE_ORAL,
  ...francais2deAChapters,
];
