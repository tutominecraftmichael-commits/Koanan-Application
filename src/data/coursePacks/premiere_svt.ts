/**
 * Paquet de cours : premiere_svt. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { SVT_1RE_A_L01_REFLEXE_CONDITIONNEL } from '../courses/premiere/svt_1re_a_reflexe_conditionnel';
import { SVT_1RE_A_L02_EFFETS_DROGUES_COMPORTEMENT } from '../courses/premiere/svt_1re_a_effets_drogues';
import { SVT_1RE_A_L03_ANOMALIES_CHROMOSOMIQUES } from '../courses/premiere/svt_1re_a_anomalies_chromosomiques';
import { SVT_1RE_A_L04_CYCLES_SEXUELS_FEMME } from '../courses/premiere/svt_1re_a_cycles_sexuels';
import { SVT_1RE_A_L05_REGULATION_NAISSANCES } from '../courses/premiere/svt_1re_a_regulation_naissances';
import { SVT_1RE_A_L06_TRANSMISSION_CARACTERE_AUTOSOMES } from '../courses/premiere/svt_1re_a_transmission_autosomes';
import { SVT_1RE_A_L08_PRODUCTION_ENERGIE_CELLULE } from '../courses/premiere/svt_1re_a_production_energie';
import { SVT_1RE_A_L09_MISE_EN_RESERVE_NUTRIMENTS } from '../courses/premiere/svt_1re_a_mise_en_reserve_nutriments';
import { SVT_1RE_C_L01_STRUCTURE_INTERNE_GLOBE } from '../courses/premiere/svt_1re_c_structure_interne_globe';
import { SVT_1RE_C_L03_ECHANGES_IONS_SOL } from '../courses/premiere/svt_1re_c_echanges_ions_sol';
import { SVT_1RE_C_L04_GAMETOGENESE_MAMMIFERES } from '../courses/premiere/svt_1re_c_gametogenese';
import { SVT_1RE_C_L05_FECONDATION_MAMMIFERES } from '../courses/premiere/svt_1re_c_fecondation';
import { SVT_1RE_C_L06_SYNTHESE_PROTEINES } from '../courses/premiere/svt_1re_c_synthese_proteines';
import { SVT_1RE_C_L07_TRANSMISSION_CARACTERE_HEREDITAIRE } from '../courses/premiere/svt_1re_c_transmission_caractere';
import { SVT_1RE_C_L08_PHOTOSYNTHESE } from '../courses/premiere/svt_1re_c_photosynthese';
import { SVT_1RE_C_L09_ECOSYSTEME_NATUREL_AGROSYSTEME } from '../courses/premiere/svt_1re_c_ecosystemes';
import { SVT_1RE_D_L01_REFLEXE_INNE } from '../courses/premiere/svt_1re_d_reflexe_inne';
import { SVT_1RE_D_L02_FONCTIONS_GONADES } from '../courses/premiere/svt_1re_d_fonctions_gonades';
import { SVT_1RE_D_L03_GAMETOGENESE } from '../courses/premiere/svt_1re_d_gametogenese';

export const CHAPTERS: CurriculumChapter[] = [
  SVT_1RE_A_L01_REFLEXE_CONDITIONNEL,
  SVT_1RE_A_L02_EFFETS_DROGUES_COMPORTEMENT,
  SVT_1RE_A_L03_ANOMALIES_CHROMOSOMIQUES,
  SVT_1RE_A_L04_CYCLES_SEXUELS_FEMME,
  SVT_1RE_A_L05_REGULATION_NAISSANCES,
  SVT_1RE_A_L06_TRANSMISSION_CARACTERE_AUTOSOMES,
  SVT_1RE_A_L08_PRODUCTION_ENERGIE_CELLULE,
  SVT_1RE_A_L09_MISE_EN_RESERVE_NUTRIMENTS,
  SVT_1RE_C_L01_STRUCTURE_INTERNE_GLOBE,
  SVT_1RE_C_L03_ECHANGES_IONS_SOL,
  SVT_1RE_C_L04_GAMETOGENESE_MAMMIFERES,
  SVT_1RE_C_L05_FECONDATION_MAMMIFERES,
  SVT_1RE_C_L06_SYNTHESE_PROTEINES,
  SVT_1RE_C_L07_TRANSMISSION_CARACTERE_HEREDITAIRE,
  SVT_1RE_C_L08_PHOTOSYNTHESE,
  SVT_1RE_C_L09_ECOSYSTEME_NATUREL_AGROSYSTEME,
  SVT_1RE_D_L01_REFLEXE_INNE,
  SVT_1RE_D_L02_FONCTIONS_GONADES,
  SVT_1RE_D_L03_GAMETOGENESE,
];
