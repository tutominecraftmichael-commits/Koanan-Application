/**
 * Paquet de cours : terminale_francais. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Généré le 2026-11-27 à partir des cours fournis par le fondateur (src/data/courses/terminale/).
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { FR_TLE_EE_L01_DISSERTATION } from '../courses/terminale/fr_tle_dissertation';
import { FR_TLE_EE_L02_COMMENTAIRE_COMPOSE } from '../courses/terminale/fr_tle_commentaire_compose';
import { FR_TLE_EE_L03_RESUME_TEXTE } from '../courses/terminale/fr_tle_resume_texte';
import { FR_TLE_EE_L04_PRODUCTION_ECRITE } from '../courses/terminale/fr_tle_production_ecrite';
import { FR_TLE_PL_L05_FIGURES_STYLE } from '../courses/terminale/fr_tle_figures_style';
import { FR_TLE_PL_L06_FOCALISATION } from '../courses/terminale/fr_tle_focalisation';
import { FR_TLE_PL_L07_TEMPS_VERBAUX } from '../courses/terminale/fr_tle_temps_verbaux';
import { FR_TLE_PL_L08_TONALITES } from '../courses/terminale/fr_tle_tonalites';
import { FR_TLE_GT_L09_GROUPEMENT_TEXTES_THEATRAUX } from '../courses/terminale/fr_tle_groupement_textes_theatraux';
import { FR_TLE_EOI_L10_OEUVRE_NARRATIVE } from '../courses/terminale/fr_tle_oeuvre_narrative';
import { FR_TLE_EOI_L11_OEUVRE_POETIQUE } from '../courses/terminale/fr_tle_oeuvre_poetique';
import { FR_TLE_SF_L12_PREPARATION_ORAL_BAC } from '../courses/terminale/fr_tle_preparation_oral_bac';
import { FR_TLE_PL_L13_CONNECTEURS_LOGIQUES } from '../courses/terminale/fr_tle_connecteurs_logiques';
import { FR_TLE_PL_L14_ENONCIATION } from '../courses/terminale/fr_tle_enonciation';

export const CHAPTERS: CurriculumChapter[] = [
  FR_TLE_EE_L01_DISSERTATION,
  FR_TLE_EE_L02_COMMENTAIRE_COMPOSE,
  FR_TLE_EE_L03_RESUME_TEXTE,
  FR_TLE_EE_L04_PRODUCTION_ECRITE,
  FR_TLE_PL_L05_FIGURES_STYLE,
  FR_TLE_PL_L06_FOCALISATION,
  FR_TLE_PL_L07_TEMPS_VERBAUX,
  FR_TLE_PL_L08_TONALITES,
  FR_TLE_GT_L09_GROUPEMENT_TEXTES_THEATRAUX,
  FR_TLE_EOI_L10_OEUVRE_NARRATIVE,
  FR_TLE_EOI_L11_OEUVRE_POETIQUE,
  FR_TLE_SF_L12_PREPARATION_ORAL_BAC,
  FR_TLE_PL_L13_CONNECTEURS_LOGIQUES,
  FR_TLE_PL_L14_ENONCIATION,
];
