/**
 * Paquet de cours : terminale_svt. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { SVT_TLE_D_L01_FONCTIONNEMENT_TISSU_NERVEUX } from '../courses/terminale/svt_tle_d_01_fonctionnement_tissu_nerveux';
import { SVT_TLE_D_L02_FONCTIONNEMENT_MUSCLE_STRIE_SQUELETTIQUE } from '../courses/terminale/svt_tle_d_02_fonctionnement_muscle_strie_squelettique';
import { SVT_TLE_D_L03_REFLEXE_CONDITIONNEL } from '../courses/terminale/svt_tle_d_03_reflexe_conditionnel';
import { SVT_TLE_D_L04_FONCTIONNEMENT_DU_COEUR } from '../courses/terminale/svt_tle_d_04_fonctionnement_du_coeur';
import { SVT_TLE_D_L05_SYSTEME_DEFENSE_ORGANISME } from '../courses/terminale/svt_tle_d_05_systeme_defense_organisme';
import { SVT_TLE_D_L06_MAINTIEN_CONSTANCE_MILIEU_INTERIEUR } from '../courses/terminale/svt_tle_d_06_maintien_constance_milieu_interieur';
import { SVT_TLE_D_L07_ORGANES_SEXUELS_HOMME } from '../courses/terminale/svt_tle_d_07_organes_sexuels_homme';
import { SVT_TLE_D_L08_DEVENIR_CELLULES_SEXUELLES } from '../courses/terminale/svt_tle_d_08_devenir_cellules_sexuelles';
import { SVT_TLE_D_L09_INFECTION_VIH_SIDA } from '../courses/terminale/svt_tle_d_09_infection_vih_sida';
import { SVT_TLE_D_L10_REPRODUCTION_SPERMAPHYTES } from '../courses/terminale/svt_tle_d_10_reproduction_chez_les_spermaphytes';
import { SVT_TLE_D_L11_TRANSMISSION_UN_CARACTERE_HOMME } from '../courses/terminale/svt_tle_d_11_transmission_un_caractere_homme';
import { SVT_TLE_D_L12_TRANSMISSION_DEUX_CARACTERES_VIVANTS } from '../courses/terminale/svt_tle_d_12_transmission_deux_caracteres_etres_vivants';
import { SVT_TLE_D_L13_AMELIORATION_PROTECTION_DES_SOLS } from '../courses/terminale/svt_tle_d_13_amelioration_protection_des_sols';
import { SVT_TLE_D_L14_EXPLOITATION_GISEMENTS_MINIERS } from '../courses/terminale/svt_tle_d_14_exploitation_gisements_miniers';
import { SVT_TLE_A_L01_REACTIONS_EMOTIONNELLES } from '../courses/terminale/svt_tle_a_reactions_emotionnelles';
import { SVT_TLE_A_L02_ACTIVITE_CEREBRALE } from '../courses/terminale/svt_tle_a_activite_cerebrale';
import { SVT_TLE_A_L03_ORIGINE_VIE } from '../courses/terminale/svt_tle_a_origine_vie';
import { SVT_TLE_A_L04_EVOLUTION_LIGNEE_HUMAINE } from '../courses/terminale/svt_tle_a_evolution_lignee_humaine';
import { SVT_TLE_A_L05_HEREDITE_SEXE_GROUPE_SANGUIN } from '../courses/terminale/svt_tle_a_heredite_sexe_groupe_sanguin';
import { SVT_TLE_A_L06_PREVISIONS_GENETIQUES } from '../courses/terminale/svt_tle_a_previsions_genetiques';
import { SVT_TLE_A_L07_BIOSYNTHESE_PROTEINES } from '../courses/terminale/svt_tle_a_biosynthese_proteines';

export const CHAPTERS: CurriculumChapter[] = [
  SVT_TLE_D_L01_FONCTIONNEMENT_TISSU_NERVEUX,
  SVT_TLE_D_L02_FONCTIONNEMENT_MUSCLE_STRIE_SQUELETTIQUE,
  SVT_TLE_D_L03_REFLEXE_CONDITIONNEL,
  SVT_TLE_D_L04_FONCTIONNEMENT_DU_COEUR,
  SVT_TLE_D_L05_SYSTEME_DEFENSE_ORGANISME,
  SVT_TLE_D_L06_MAINTIEN_CONSTANCE_MILIEU_INTERIEUR,
  SVT_TLE_D_L07_ORGANES_SEXUELS_HOMME,
  SVT_TLE_D_L08_DEVENIR_CELLULES_SEXUELLES,
  SVT_TLE_D_L09_INFECTION_VIH_SIDA,
  SVT_TLE_D_L10_REPRODUCTION_SPERMAPHYTES,
  SVT_TLE_D_L11_TRANSMISSION_UN_CARACTERE_HOMME,
  SVT_TLE_D_L12_TRANSMISSION_DEUX_CARACTERES_VIVANTS,
  SVT_TLE_D_L13_AMELIORATION_PROTECTION_DES_SOLS,
  SVT_TLE_D_L14_EXPLOITATION_GISEMENTS_MINIERS,
  SVT_TLE_A_L01_REACTIONS_EMOTIONNELLES,
  SVT_TLE_A_L02_ACTIVITE_CEREBRALE,
  SVT_TLE_A_L03_ORIGINE_VIE,
  SVT_TLE_A_L04_EVOLUTION_LIGNEE_HUMAINE,
  SVT_TLE_A_L05_HEREDITE_SEXE_GROUPE_SANGUIN,
  SVT_TLE_A_L06_PREVISIONS_GENETIQUES,
  SVT_TLE_A_L07_BIOSYNTHESE_PROTEINES,
];
