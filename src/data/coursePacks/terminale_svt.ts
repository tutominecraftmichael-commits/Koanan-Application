/**
 * Paquet de cours : terminale_svt. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Généré le 2026-11-27 à partir des cours fournis par le fondateur (src/data/courses/terminale/).
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { SVT_TLE_A_L01_REACTIONS_EMOTIONNELLES } from '../courses/terminale/svt_tle_a_reactions_emotionnelles';
import { SVT_TLE_A_L02_ACTIVITE_CEREBRALE } from '../courses/terminale/svt_tle_a_activite_cerebrale';
import { SVT_TLE_A_L03_ORIGINE_VIE } from '../courses/terminale/svt_tle_a_origine_vie';
import { SVT_TLE_A_L04_EVOLUTION_LIGNEE_HUMAINE } from '../courses/terminale/svt_tle_a_evolution_lignee_humaine';
import { SVT_TLE_A_L05_HEREDITE_SEXE_GROUPE_SANGUIN } from '../courses/terminale/svt_tle_a_heredite_sexe_groupe_sanguin';
import { SVT_TLE_A_L06_PREVISIONS_GENETIQUES } from '../courses/terminale/svt_tle_a_previsions_genetiques';
import { SVT_TLE_A_L07_BIOSYNTHESE_PROTEINES } from '../courses/terminale/svt_tle_a_biosynthese_proteines';
import { SVT_TLE_C_L01_COMMUNICATION_NERVEUSE } from '../courses/terminale/svt_tle_c_communication_nerveuse';
import { SVT_TLE_C_L02_DROGUES_SYSTEME_NERVEUX } from '../courses/terminale/svt_tle_c_drogues_systeme_nerveux';
import { SVT_TLE_C_L03_PRODUCTION_ENERGIE_CELLULE } from '../courses/terminale/svt_tle_c_production_energie_cellule';
import { SVT_TLE_C_L04_UTILISATION_ENERGIE_CELLULE_MUSCULAIRE } from '../courses/terminale/svt_tle_c_utilisation_energie_cellule_musculaire';
import { SVT_TLE_C_L05_SYSTEME_DEFENSE_ORGANISME } from '../courses/terminale/svt_tle_c_systeme_defense_organisme';
import { SVT_TLE_CD_L06_INFECTION_VIH } from '../courses/terminale/svt_tle_cd_infection_vih';
import { SVT_TLE_C_L07_CYCLES_SEXUELS_FEMME } from '../courses/terminale/svt_tle_c_cycles_sexuels_femme';
import { SVT_TLE_CD_L08_TRANSMISSION_CARACTERE_HEREDITAIRE } from '../courses/terminale/svt_tle_cd_transmission_caractere_hereditaire';
import { SVT_TLE_C_L09_MISE_EN_PLACE_GISEMENTS_PETROLIFERES } from '../courses/terminale/svt_tle_c_mise_en_place_gisements_petroliferes';
import { SVT_TLE_C_L10_EXPLOITATION_GISEMENTS_PETROLIFERES } from '../courses/terminale/svt_tle_c_exploitation_gisements_petroliferes';
import { SVT_TLE_C_L11_AMELIORATION_FERTILITE_SOLS } from '../courses/terminale/svt_tle_c_amelioration_fertilite_sols';
import { SVT_TLE_D_L01_REFLEXE_CONDITIONNEL } from '../courses/terminale/svt_tle_d_reflexe_conditionnel';
import { SVT_TLE_D_L02_FONCTIONNEMENT_TISSU_NERVEUX } from '../courses/terminale/svt_tle_d_fonctionnement_tissu_nerveux';
import { SVT_TLE_D_L03_FONCTIONNEMENT_MUSCLE_STRIE } from '../courses/terminale/svt_tle_d_fonctionnement_muscle_strie';
import { SVT_TLE_D_L04_FONCTIONNEMENT_COEUR } from '../courses/terminale/svt_tle_d_fonctionnement_coeur';
import { SVT_TLE_D_L05_CONSTANCE_MILIEU_INTERIEUR } from '../courses/terminale/svt_tle_d_constance_milieu_interieur';
import { SVT_TLE_D_L06_SYSTEME_DEFENSE_ORGANISME } from '../courses/terminale/svt_tle_d_systeme_defense_organisme';
import { SVT_TLE_D_L08_DEVENIR_CELLULES_SEXUELLES } from '../courses/terminale/svt_tle_d_devenir_cellules_sexuelles';
import { SVT_TLE_D_L09_FONCTIONNEMENT_ORGANES_SEXUELS } from '../courses/terminale/svt_tle_d_fonctionnement_organes_sexuels';
import { SVT_TLE_D_L10_REPRODUCTION_SPERMAPHYTES } from '../courses/terminale/svt_tle_d_reproduction_spermaphytes';
import { SVT_TLE_D_L12_TRANSMISSION_DEUX_CARACTERES } from '../courses/terminale/svt_tle_d_transmission_deux_caracteres';
import { SVT_TLE_D_L14_EXPLOITATION_GISEMENTS_MINIERS } from '../courses/terminale/svt_tle_d_exploitation_gisements_miniers';
import { SVT_TLE_D_L15_AMELIORATION_PROTECTION_SOLS } from '../courses/terminale/svt_tle_d_amelioration_protection_sols';

export const CHAPTERS: CurriculumChapter[] = [
  SVT_TLE_A_L01_REACTIONS_EMOTIONNELLES,
  SVT_TLE_A_L02_ACTIVITE_CEREBRALE,
  SVT_TLE_A_L03_ORIGINE_VIE,
  SVT_TLE_A_L04_EVOLUTION_LIGNEE_HUMAINE,
  SVT_TLE_A_L05_HEREDITE_SEXE_GROUPE_SANGUIN,
  SVT_TLE_A_L06_PREVISIONS_GENETIQUES,
  SVT_TLE_A_L07_BIOSYNTHESE_PROTEINES,
  SVT_TLE_C_L01_COMMUNICATION_NERVEUSE,
  SVT_TLE_C_L02_DROGUES_SYSTEME_NERVEUX,
  SVT_TLE_C_L03_PRODUCTION_ENERGIE_CELLULE,
  SVT_TLE_C_L04_UTILISATION_ENERGIE_CELLULE_MUSCULAIRE,
  SVT_TLE_C_L05_SYSTEME_DEFENSE_ORGANISME,
  SVT_TLE_CD_L06_INFECTION_VIH,
  SVT_TLE_C_L07_CYCLES_SEXUELS_FEMME,
  SVT_TLE_CD_L08_TRANSMISSION_CARACTERE_HEREDITAIRE,
  SVT_TLE_C_L09_MISE_EN_PLACE_GISEMENTS_PETROLIFERES,
  SVT_TLE_C_L10_EXPLOITATION_GISEMENTS_PETROLIFERES,
  SVT_TLE_C_L11_AMELIORATION_FERTILITE_SOLS,
  SVT_TLE_D_L01_REFLEXE_CONDITIONNEL,
  SVT_TLE_D_L02_FONCTIONNEMENT_TISSU_NERVEUX,
  SVT_TLE_D_L03_FONCTIONNEMENT_MUSCLE_STRIE,
  SVT_TLE_D_L04_FONCTIONNEMENT_COEUR,
  SVT_TLE_D_L05_CONSTANCE_MILIEU_INTERIEUR,
  SVT_TLE_D_L06_SYSTEME_DEFENSE_ORGANISME,
  SVT_TLE_D_L08_DEVENIR_CELLULES_SEXUELLES,
  SVT_TLE_D_L09_FONCTIONNEMENT_ORGANES_SEXUELS,
  SVT_TLE_D_L10_REPRODUCTION_SPERMAPHYTES,
  SVT_TLE_D_L12_TRANSMISSION_DEUX_CARACTERES,
  SVT_TLE_D_L14_EXPLOITATION_GISEMENTS_MINIERS,
  SVT_TLE_D_L15_AMELIORATION_PROTECTION_SOLS,
];
