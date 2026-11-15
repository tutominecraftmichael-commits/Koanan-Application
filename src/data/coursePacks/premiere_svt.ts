/**
 * Paquet de cours : premiere_svt. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { SVT_1RE_A_L01_REFLEXE_CONDITIONNEL } from '../courses/premiere/svt_1re_a_reflexe_conditionnel';
import { SVT_1RE_A_L02_EFFETS_DROGUES_COMPORTEMENT } from '../courses/premiere/svt_1re_a_effets_drogues';
import { SVT_1RE_A_L03_ANOMALIES_CHROMOSOMIQUES } from '../courses/premiere/svt_1re_a_anomalies_chromosomiques';

export const CHAPTERS: CurriculumChapter[] = [
  SVT_1RE_A_L01_REFLEXE_CONDITIONNEL,
  SVT_1RE_A_L02_EFFETS_DROGUES_COMPORTEMENT,
  SVT_1RE_A_L03_ANOMALIES_CHROMOSOMIQUES,
];
