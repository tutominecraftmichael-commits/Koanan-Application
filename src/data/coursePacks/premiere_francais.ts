/**
 * Paquet de cours : premiere_francais. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Généré le 2026-11-27 à partir des cours fournis par le fondateur (src/data/courses/premiere/).
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { FR_1ERE_EE_L01_COMMENTAIRE_COMPOSE } from '../courses/premiere/fr_1ere_commentaire_compose';
import { FR_1ERE_EE_L02_DISSERTATION } from '../courses/premiere/fr_1ere_dissertation';
import { FR_1ERE_EE_L03_PRODUCTION_ECRITE_RESUME } from '../courses/premiere/fr_1ere_production_ecrite_resume';
import { FR_1ERE_PL_L04_RYTHME } from '../courses/premiere/fr_1ere_rythme';
import { FR_1ERE_PL_L05_TONALITES } from '../courses/premiere/fr_1ere_tonalites';
import { FR_1ERE_PL_L06_FOCALISATION } from '../courses/premiere/fr_1ere_focalisation';
import { FR_1ERE_PL_L07_MODES_RAISONNEMENT } from '../courses/premiere/fr_1ere_modes_raisonnement';
import { FR_1ERE_PL_L08_IMPLICITE } from '../courses/premiere/fr_1ere_implicite';
import { FR_1ERE_PL_L09_VALEURS_TEMPS_VERBAUX } from '../courses/premiere/fr_1ere_valeurs_temps_verbaux';
import { FR_1ERE_SF_L10_PREPARATION_ORAL_BAC } from '../courses/premiere/fr_1ere_preparation_oral_bac';
import { FR_1ERE_EOI_L11_GROUPEMENT_TEXTES_ROMANESQUES } from '../courses/premiere/fr_1ere_groupement_textes_romanesques';

export const CHAPTERS: CurriculumChapter[] = [
  FR_1ERE_EE_L01_COMMENTAIRE_COMPOSE,
  FR_1ERE_EE_L02_DISSERTATION,
  FR_1ERE_EE_L03_PRODUCTION_ECRITE_RESUME,
  FR_1ERE_PL_L04_RYTHME,
  FR_1ERE_PL_L05_TONALITES,
  FR_1ERE_PL_L06_FOCALISATION,
  FR_1ERE_PL_L07_MODES_RAISONNEMENT,
  FR_1ERE_PL_L08_IMPLICITE,
  FR_1ERE_PL_L09_VALEURS_TEMPS_VERBAUX,
  FR_1ERE_SF_L10_PREPARATION_ORAL_BAC,
  FR_1ERE_EOI_L11_GROUPEMENT_TEXTES_ROMANESQUES,
];
