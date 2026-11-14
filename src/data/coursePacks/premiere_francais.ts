/**
 * Paquet de cours : premiere_francais. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { FR_1RE_EE_L02_COMMENTAIRE_COMPOSE } from '../courses/premiere/fr_1re_commentaire_compose';
import { FR_1RE_EE_L03_DISSERTATION_LITTERAIRE } from '../courses/premiere/fr_1re_dissertation_litteraire';
import { FR_1RE_EE_RESUME_PRODUCTION_ECRITE } from '../courses/premiere/fr_1re_resume_production_ecrite';
import { FR_1RE_PL_L02_TONALITES } from '../courses/premiere/fr_1re_tonalites';
import { FR_1RE_PL_L03_RYTHME } from '../courses/premiere/fr_1re_rythme';

export const CHAPTERS: CurriculumChapter[] = [
  FR_1RE_EE_L02_COMMENTAIRE_COMPOSE,
  FR_1RE_EE_L03_DISSERTATION_LITTERAIRE,
  FR_1RE_EE_RESUME_PRODUCTION_ECRITE,
  FR_1RE_PL_L02_TONALITES,
  FR_1RE_PL_L03_RYTHME,
];
