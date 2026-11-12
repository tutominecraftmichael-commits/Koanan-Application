import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon Masterclass officielle rédigée d'après le PDF officiel de l'École Numérique de Côte d'Ivoire
// Niveau : TCDE — Thème : Chimie Organique — Titre : Acides carboxyliques et dérivés
export const CHIMIE_TLE_CD_L03_ACIDES_CARBOXYLIQUES_ET_DERIVES: CurriculumChapter = {
  "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 3,
  "title": "Leçon 3 : Acides carboxyliques et dérivés",
  "summary": "Groupe carboxyle, acidité faible, chlorures d'acyle (SOCl2, PCl5), anhydrides d'acide (P4O10), amides (chauffage de carboxylate d'ammonium ou action sur chlorure), esters (estérification directe réversible vs indirecte totale) et nomenclatures systématiques.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "École Numérique – Côte d'Ivoire (Niveau : TCDE – Chimie Organique – Acides carboxyliques et dérivés)",
  "points": [
    {
      "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01",
      "order": 1,
      "title": "Les acides carboxyliques : Structure, nomenclature et acidité faible",
      "summary": "Groupe fonctionnel carboxyle -COOH, formule brute CnH2nO2, nomenclature acide ...-oïque, dissociation partielle dans l'eau et constante d'acidité Ka.",
      "conceptExplanation": "Les acides carboxyliques sont des composés organiques oxygénés comportant le groupe fonctionnel carboxyle (-COOH), résultant formellement de la combinaison d'un groupe carbonyle C=O et d'un groupe hydroxyle -OH sur le même atome de carbone.\n\n1. Formules générales :\n- Formule générale : R-COOH (où R est un atome d'hydrogène H ou un groupe alkyle saturé ou aryle).\n- Formule brute des monoacides carboxyliques saturés acycliques : CnH2nO2 avec n >= 1.\n- Masse molaire : M = 14n + 32 g/mol.\n\n2. Nomenclature officielle IUPAC :\nLe nom s'obtient en faisant précéder du mot « acide » le nom de l'alcane correspondant à la chaîne principale la plus longue contenant le carbone carboxyle, dont le « e » final est remplacé par la terminaison « oïque » (ex : acide éthanoïque CH3-COOH, acide propanoïque C2H5-COOH). Le carbone du groupe -COOH porte impérativement le numéro 1.\n\n3. Propriétés chimiques et acidité faible :\nLes acides carboxyliques sont des acides faibles dans l'eau : leur ionisation est partielle et réversible, régie par un équilibre chimique :\nR-COOH + H2O <===> R-COO- + H3O+.\nLeur pKa se situe généralement entre 3,75 et 4,90 à 25 °C (acide méthanoïque HCOOH : pKa = 3,77 ; acide éthanoïque CH3COOH : pKa = 4,76).",
      "keyRule": "Le groupe carboxyle -COOH est un acide faible : sa dissociation dans l'eau est partielle (double flèche), avec une constante d'acidité Ka = ([R-COO-][H3O+]) / [R-COOH]. Le carbone -COOH est toujours le carbone n°1.",
      "formulas": [
        {
          "name": "Dissociation d'un acide carboxylique dans l'eau",
          "formula": "\\mathrm{R-COOH} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{R-COO^-} + \\mathrm{H_3O^+}",
          "note": "Équilibre acido-basique réversible (acide faible)"
        },
        {
          "name": "Formule brute générale",
          "formula": "\\mathrm{C_n H_{2n} O_2} \\quad (n \\ge 1)",
          "note": "Masse molaire M = 14n + 32 g/mol"
        }
      ],
      "workedExample": {
        "title": "Calcul du pH et du coefficient de dissociation d'une solution d'acide éthanoïque",
        "statement": "On dissout de l'acide éthanoïque de concentration C = 1,0 * 10^-2 mol/L (pKa = 4,76 à 25 °C). Calcule le pH de la solution.",
        "methodSteps": [
          "Étape 1 : Pour un acide faible peu dissocié (taux alpha < 0,05), on applique la formule approchée : pH = 0,5 * (pKa - log C).",
          "Étape 2 : log C = log(10^-2) = -2,0.",
          "Étape 3 : Calculer le pH : pH = 0,5 * (4,76 - (-2,0)) = 0,5 * (6,76) = 3,38.",
          "Étape 4 : Vérifier la validité de l'approximation : [H3O+] = 10^(-3,38) = 4,17 * 10^-4 mol/L. Le rapport [H3O+]/C = 4,17*10^-4 / 10^-2 = 0,0417 (4,17 % < 5 %), l'approximation est parfaitement vérifiée."
        ],
        "conclusion": "Le pH de la solution est pH = 3,38."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau officiel des acides carboxyliques usuels et de leurs pKa",
        "tableData": {
          "headers": [
            "Nombre de carbones",
            "Formule semi-développée",
            "Nom usuel",
            "Nomenclature IUPAC",
            "pKa à 25 °C"
          ],
          "rows": [
            [
              "n = 1",
              "H-COOH",
              "Acide formique",
              "Acide méthanoïque",
              "3,77"
            ],
            [
              "n = 2",
              "CH3-COOH",
              "Acide acétique",
              "Acide éthanoïque",
              "4,76"
            ],
            [
              "n = 3",
              "CH3-CH2-COOH",
              "Acide propionique",
              "Acide propanoïque",
              "4,88"
            ],
            [
              "n = 4",
              "CH3-(CH2)2-COOH",
              "Acide butyrique",
              "Acide butanoïque",
              "4,82"
            ],
            [
              "n = 16",
              "CH3-(CH2)14-COOH",
              "Acide palmitique",
              "Acide hexadécanoïque",
              "~4,9 (acide gras)"
            ],
            [
              "n = 18",
              "CH3-(CH2)16-COOH",
              "Acide stéarique",
              "Acide octadécanoïque",
              "~4,9 (acide gras)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le groupement fonctionnel carboxyle",
          "stepTheme": "Structure du carboxyle",
          "stepBadge": "Groupe -COOH",
          "paragraphText": "Le groupe carboxyle -COOH associe un groupe carbonyle C=O et un groupe hydroxyle -OH. Cette proximité crée un effet de conjugaison électronique : le doublet non liant de l'oxygène de l'hydroxyle se délocalise vers le carbonyle, ce qui fragilise considérablement la liaison O-H et facilite le départ de l'atome d'hydrogène sous forme d'ion H+.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q1",
            "type": "mcq",
            "prompt": "Pourquoi l'atome d'hydrogène du groupe -OH d'un acide carboxylique est-il beaucoup plus acide et mobile que celui d'un alcool ordinaire (pKa ~ 4,8 contre pKa ~ 16) ?",
            "options": [
              "Parce que la liaison C-C est plus courte dans les acides.",
              "Parce que l'ion carboxylate R-COO- formé après le départ de H+ est puissamment stabilisé par résonance (mésomérie) sur les deux atomes d'oxygène.",
              "Parce que l'acide carboxylique réagit spontanément avec l'azote de l'air.",
              "Parce que les alcools possèdent deux atomes d'oxygène supplémentaires."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La charge négative de l'ion carboxylate R-COO- est équitablement partagée entre les deux atomes d'oxygène par mésomérie, ce qui stabilise considérablement la base conjuguée et favorise la déprotonation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Formule brute générale CnH2nO2 et relation de masse molaire",
          "stepTheme": "Formule brute",
          "stepBadge": "M = 14n + 32",
          "paragraphText": "La formule brute d'un monoacide carboxylique saturé non cyclique est CnH2nO2. Sa masse molaire moléculaire vaut M = 14n + 32 g/mol. La teneur en oxygène est donnée par %O = (32 / M) * 100.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q2",
            "type": "mcq",
            "prompt": "Un acide carboxylique saturé A présente une masse molaire M = 88 g/mol. Quel est son nombre d'atomes de carbone n et sa formule brute ?",
            "options": [
              "n = 3 (C3H6O2)",
              "n = 4 (C4H8O2)",
              "n = 5 (C5H10O2)",
              "n = 6 (C6H12O2)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "14n + 32 = 88 => 14n = 88 - 32 = 56 => n = 56 / 14 = 4. La formule brute est donc C4H8O2 (acide butanoïque ou 2-méthylpropanoïque)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Nomenclature des acides carboxyliques ramifiés",
          "stepTheme": "Nomenclature IUPAC",
          "stepBadge": "Acide ...-oïque",
          "paragraphText": "Dans un acide carboxylique ramifié, le carbone du carboxyle -COOH est impérativement le carbone numéro 1. On cherche la chaîne la plus longue partant de ce carbone, on numérote les substituants, et on fait précéder le tout du mot « acide » et suivre du suffixe « oïque ».",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q3",
            "type": "mcq",
            "prompt": "Quel est le nom officiel de la molécule : CH3-CH(C2H5)-COOH ?",
            "options": [
              "Acide 2-éthylpropanoïque",
              "Acide 2-méthylbutanoïque",
              "Acide 3-méthylbutanoïque",
              "Acide pentanoïque"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La chaîne la plus longue partant du carbone C1 (-COOH) passe par le -CH- (C2) puis englobe le groupe éthyle -CH2-CH3 (C3 et C4). C'est une chaîne à 4 carbones portant un groupe méthyle en C2 : l'acide 2-méthylbutanoïque (et non 2-éthylpropanoïque, car la chaîne à 3 carbones n'est pas la plus longue)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Caractère partiel et équilibré de la dissociation dans l'eau",
          "stepTheme": "Acidité faible",
          "stepBadge": "Équilibre chimique",
          "paragraphText": "Contrairement à l'acide chlorhydrique (acide fort totalement dissocié), les acides carboxyliques ne se dissocient que très faiblement dans l'eau (généralement moins de 5 % des molécules sont ionisées à 10^-2 mol/L). Le taux d'avancement final tau = [H3O+] / C est strictement inférieur à 1.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q4",
            "type": "mcq",
            "prompt": "On mesure le pH d'une solution d'acide méthanoïque de concentration C = 0,10 mol/L et on trouve pH = 2,4. Quel est le taux de dissociation alpha de cet acide et que prouve-t-il ?",
            "options": [
              "alpha = 100 % : l'acide est totalement dissocié (acide fort).",
              "alpha = [H3O+]/C = 10^(-2,4)/0,10 = 4,0 * 10^-3 / 0,10 = 0,040 (4,0 %) : l'acide n'est que très partiellement dissocié, confirmant qu'il s'agit d'un acide faible.",
              "alpha = 50 % : l'acide est à demi-dissocié à toutes les concentrations.",
              "alpha = 0 % : l'acide est insoluble dans l'eau."
            ],
            "correctAnswerIndex": 1,
            "explanation": "[H3O+] = 10^(-2,4) = 4,0 * 10^-3 mol/L. Le taux de dissociation vaut alpha = 4,0 * 10^-3 / 0,10 = 0,040, soit 4,0 % : la dissociation est partielle et réversible, caractéristique absolue d'un acide faible."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Réaction acido-basique totale avec les bases fortes",
          "stepTheme": "Neutralisation",
          "stepBadge": "Action de la soude",
          "paragraphText": "Même s'ils sont des acides faibles dans l'eau pure, les acides carboxyliques réagissent de manière totale et quasi instantanée avec les solutions de bases fortes (soude NaOH, potasse KOH) : R-COOH + OH- -> R-COO- + H2O. Cette réaction sert au dosage volumétrique.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q5",
            "type": "mcq",
            "prompt": "On titre un volume Va = 20 mL d'acide éthanoïque par une solution de soude de concentration Cb = 0,10 mol/L. L'équivalence a lieu pour Vbe = 14 mL. Quelle est la concentration Ca de l'acide ?",
            "options": [
              "0,050 mol/L",
              "0,070 mol/L",
              "0,14 mol/L",
              "0,20 mol/L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "À l'équivalence d'un monoacide : Ca * Va = Cb * Vbe, soit Ca = (0,10 * 14) / 20 = 0,070 mol/L."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : pKa et force relative des acides carboxyliques",
          "stepTheme": "Comparaison des pKa",
          "stepBadge": "Force relative",
          "paragraphText": "Plus le pKa est faible, plus l'acide est fort (plus sa dissociation dans l'eau est avancée). L'acide méthanoïque (pKa = 3,77) est ainsi environ 10 fois plus dissocié que l'acide éthanoïque (pKa = 4,76). L'introduction d'atomes électronégatifs sur la chaîne (ex : acide chloroéthanoïque Cl-CH2-COOH, pKa = 2,86) stabilise encore davantage l'ion carboxylate par effet inductif attracteur, augmentant considérablement la force de l'acide.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q6",
            "type": "mcq",
            "prompt": "Pourquoi l'acide chloroéthanoïque (Cl-CH2-COOH, pKa = 2,86) est-il un acide nettement plus fort que l'acide éthanoïque (CH3-COOH, pKa = 4,76) ?",
            "options": [
              "Parce que le chlore est un métal lourd qui alourdit la molécule.",
              "Parce que l'atome de chlore très électronégatif attire les électrons par effet inductif (-I), dispersant la charge négative de l'ion carboxylate et facilitant l'ionisation du proton.",
              "Parce que le chlore réagit spontanément avec l'eau pour produire de l'oxygène.",
              "Parce que sa masse molaire est plus petite."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'effet inductif attracteur de l'atome de chlore électronégatif stabilise l'anion Cl-CH2-COO- en dispersant la densité de charge négative, ce qui renforce l'acidité (pKa plus bas)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Les acides gras supérieurs : constituants des graisses naturelles",
          "stepTheme": "Acides gras",
          "stepBadge": "Acides palmitique et stéarique",
          "paragraphText": "Les acides carboxyliques à longue chaîne carbonée saturée (16 à 18 atomes de carbone ou plus) sont appelés acides gras supérieurs : l'acide palmitique (C16H32O2 ou CH3-(CH2)14-COOH) et l'acide stéarique (C18H36O2 ou CH3-(CH2)16-COOH). Solides et insolubles dans l'eau, ils sont les matières premières de la fabrication des bougies et des savons.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q7",
            "type": "mcq",
            "prompt": "Quelle est la formule semi-développée officielle de l'acide stéarique, acide gras saturé à 18 atomes de carbone présent dans le beurre de cacao et le suif ?",
            "options": [
              "CH3-(CH2)14-COOH",
              "CH3-(CH2)16-COOH",
              "CH3-(CH2)18-COOH",
              "C17H33-COOH"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'acide stéarique compte 18 carbones au total : 1 carbone dans le groupe méthyle terminal CH3-, 16 carbones dans les groupes méthylènes -(CH2)16- et 1 carbone dans le groupe carboxyle -COOH (1 + 16 + 1 = 18)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q1",
          "type": "mcq",
          "prompt": "Pourquoi l'atome d'hydrogène du groupe -OH d'un acide carboxylique est-il beaucoup plus acide et mobile que celui d'un alcool ordinaire (pKa ~ 4,8 contre pKa ~ 16) ?",
          "options": [
            "Parce que la liaison C-C est plus courte dans les acides.",
            "Parce que l'ion carboxylate R-COO- formé après le départ de H+ est puissamment stabilisé par résonance (mésomérie) sur les deux atomes d'oxygène.",
            "Parce que l'acide carboxylique réagit spontanément avec l'azote de l'air.",
            "Parce que les alcools possèdent deux atomes d'oxygène supplémentaires."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La charge négative de l'ion carboxylate R-COO- est équitablement partagée entre les deux atomes d'oxygène par mésomérie, ce qui stabilise considérablement la base conjuguée et favorise la déprotonation."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q2",
          "type": "mcq",
          "prompt": "Un acide carboxylique saturé A présente une masse molaire M = 88 g/mol. Quel est son nombre d'atomes de carbone n et sa formule brute ?",
          "options": [
            "n = 3 (C3H6O2)",
            "n = 4 (C4H8O2)",
            "n = 5 (C5H10O2)",
            "n = 6 (C6H12O2)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "14n + 32 = 88 => 14n = 88 - 32 = 56 => n = 56 / 14 = 4. La formule brute est donc C4H8O2 (acide butanoïque ou 2-méthylpropanoïque)."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q3",
          "type": "mcq",
          "prompt": "Quel est le nom officiel de la molécule : CH3-CH(C2H5)-COOH ?",
          "options": [
            "Acide 2-éthylpropanoïque",
            "Acide 2-méthylbutanoïque",
            "Acide 3-méthylbutanoïque",
            "Acide pentanoïque"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La chaîne la plus longue partant du carbone C1 (-COOH) passe par le -CH- (C2) puis englobe le groupe éthyle -CH2-CH3 (C3 et C4). C'est une chaîne à 4 carbones portant un groupe méthyle en C2 : l'acide 2-méthylbutanoïque (et non 2-éthylpropanoïque, car la chaîne à 3 carbones n'est pas la plus longue)."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q4",
          "type": "mcq",
          "prompt": "On mesure le pH d'une solution d'acide méthanoïque de concentration C = 0,10 mol/L et on trouve pH = 2,4. Quel est le taux de dissociation alpha de cet acide et que prouve-t-il ?",
          "options": [
            "alpha = 100 % : l'acide est totalement dissocié (acide fort).",
            "alpha = [H3O+]/C = 10^(-2,4)/0,10 = 4,0 * 10^-3 / 0,10 = 0,040 (4,0 %) : l'acide n'est que très partiellement dissocié, confirmant qu'il s'agit d'un acide faible.",
            "alpha = 50 % : l'acide est à demi-dissocié à toutes les concentrations.",
            "alpha = 0 % : l'acide est insoluble dans l'eau."
          ],
          "correctAnswerIndex": 1,
          "explanation": "[H3O+] = 10^(-2,4) = 4,0 * 10^-3 mol/L. Le taux de dissociation vaut alpha = 4,0 * 10^-3 / 0,10 = 0,040, soit 4,0 % : la dissociation est partielle et réversible, caractéristique absolue d'un acide faible."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q5",
          "type": "mcq",
          "prompt": "On titre un volume Va = 20 mL d'acide éthanoïque par une solution de soude de concentration Cb = 0,10 mol/L. L'équivalence a lieu pour Vbe = 14 mL. Quelle est la concentration Ca de l'acide ?",
          "options": [
            "0,050 mol/L",
            "0,070 mol/L",
            "0,14 mol/L",
            "0,20 mol/L"
          ],
          "correctAnswerIndex": 1,
          "explanation": "À l'équivalence d'un monoacide : Ca * Va = Cb * Vbe, soit Ca = (0,10 * 14) / 20 = 0,070 mol/L."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q6",
          "type": "mcq",
          "prompt": "Pourquoi l'acide chloroéthanoïque (Cl-CH2-COOH, pKa = 2,86) est-il un acide nettement plus fort que l'acide éthanoïque (CH3-COOH, pKa = 4,76) ?",
          "options": [
            "Parce que le chlore est un métal lourd qui alourdit la molécule.",
            "Parce que l'atome de chlore très électronégatif attire les électrons par effet inductif (-I), dispersant la charge négative de l'ion carboxylate et facilitant l'ionisation du proton.",
            "Parce que le chlore réagit spontanément avec l'eau pour produire de l'oxygène.",
            "Parce que sa masse molaire est plus petite."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'effet inductif attracteur de l'atome de chlore électronégatif stabilise l'anion Cl-CH2-COO- en dispersant la densité de charge négative, ce qui renforce l'acidité (pKa plus bas)."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p01_q7",
          "type": "mcq",
          "prompt": "Quelle est la formule semi-développée officielle de l'acide stéarique, acide gras saturé à 18 atomes de carbone présent dans le beurre de cacao et le suif ?",
          "options": [
            "CH3-(CH2)14-COOH",
            "CH3-(CH2)16-COOH",
            "CH3-(CH2)18-COOH",
            "C17H33-COOH"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'acide stéarique compte 18 carbones au total : 1 carbone dans le groupe méthyle terminal CH3-, 16 carbones dans les groupes méthylènes -(CH2)16- et 1 carbone dans le groupe carboxyle -COOH (1 + 16 + 1 = 18)."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02",
      "order": 2,
      "title": "Les quatre fonctions dérivées des acides carboxyliques (R-CO-Z)",
      "summary": "Présentation générale des dérivés d'acides : chlorures d'acyle (Z = Cl), anhydrides d'acide (Z = O-CO-R'), esters (Z = O-R') et amides (Z = NH2 / NHR / NRR').",
      "conceptExplanation": "Un dérivé d'acide carboxylique est un composé organique obtenu formellement en remplaçant le groupe hydroxyle (-OH) de l'acide par un autre atome ou groupe d'atomes noté Z :\nFormule générale : R-CO-Z (où R-CO- est le groupe acyle).\n\nLes quatre fonctions dérivées fondamentales au programme officiel :\n1. Les chlorures d'acyle (ou chlorures d'acide) :\n- Nature de Z : un atome de chlore (-Cl).\n- Formule générale : R-CO-Cl.\n- Propriété : dérivés les plus réactifs de la chimie organique, ils réagissent de manière brutale, totale et exothermique avec les nucléophiles en dégageant du gaz chlorure d'hydrogène (HCl).\n\n2. Les anhydrides d'acide :\n- Nature de Z : un groupement carboxylate (-O-CO-R').\n- Formule générale : R-CO-O-CO-R'.\n- Propriété : dérivés très réactifs, obtenus par déshydratation entre deux molécules d'acide.\n\n3. Les esters :\n- Nature de Z : un groupe alcoxyle (-O-R').\n- Formule générale : R-CO-O-R'.\n- Propriété : molécules volatiles à odeur fruitée agréable, synthétisées par estérification.\n\n4. Les amides :\n- Nature de Z : un groupe aminé (-NH2 pour un amide primaire, -NH-R' pour un amide secondaire, -NR'R'' pour un amide tertiaire).\n- Formule générale : R-CO-NH2 (ou substitué sur l'azote).\n- Propriété : fonction stable formant les liaisons peptidiques des protéines.",
      "keyRule": "Tout dérivé d'acide répond à la formule R-CO-Z. Si Z = Cl -> chlorure d'acyle ; si Z = O-CO-R' -> anhydride ; si Z = O-R' -> ester ; si Z = NH2 / NHR -> amide.",
      "formulas": [],
      "workedExample": {
        "title": "Identification des dérivés d'acide à partir de leur formule développée",
        "statement": "Identifie la fonction chimique des trois molécules suivantes : (1) CH3-CO-Cl ; (2) CH3-CO-O-CH2-CH3 ; (3) CH3-CH2-CO-NH-CH3.",
        "methodSteps": [
          "Étape 1 : Analyser la molécule (1) : le groupe acyle CH3-CO- est lié à un atome de chlore Cl -> chlorure d'acyle.",
          "Étape 2 : Analyser la molécule (2) : le groupe acyle CH3-CO- est lié à un groupe alcoxyle -O-C2H5 -> ester.",
          "Étape 3 : Analyser la molécule (3) : le groupe acyle C2H5-CO- est lié à un groupe azoté -NH-CH3 -> amide (secondaire)."
        ],
        "conclusion": "(1) est un chlorure d'acyle, (2) est un ester, (3) est un amide."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau officiel des quatre fonctions dérivées des acides carboxyliques",
        "tableData": {
          "headers": [
            "Fonction dérivée",
            "Nature du groupe Z",
            "Formule générale",
            "Groupe caractéristique",
            "Exemple type"
          ],
          "rows": [
            [
              "Chlorure d'acyle",
              "-Cl",
              "R-CO-Cl",
              "-CO-Cl",
              "CH3-CO-Cl (chlorure d'éthanoyle)"
            ],
            [
              "Anhydride d'acide",
              "-O-CO-R'",
              "R-CO-O-CO-R'",
              "-CO-O-CO-",
              "(CH3-CO)2O (anhydride éthanoïque)"
            ],
            [
              "Ester",
              "-O-R'",
              "R-CO-O-R'",
              "-COO-",
              "CH3-COO-C2H5 (éthanoate d'éthyle)"
            ],
            [
              "Amide",
              "-NH2 / -NHR / -NRR'",
              "R-CO-NH2",
              "-CO-N<",
              "CH3-CO-NH2 (éthanamide)"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le groupe acyle R-CO- : pivot de toutes les fonctions dérivées",
          "stepTheme": "Structure générale",
          "stepBadge": "Groupe acyle",
          "paragraphText": "Toutes les fonctions dérivées des acides carboxyliques possèdent en commun le fragment R-CO-, appelé groupe acyle (ou alcoyle). C'est la nature de l'hétéroatome directement fixé sur ce carbone acyle (chlore, oxygène d'un autre carbonyle, oxygène d'un alkyle, ou azote) qui définit la famille du dérivé.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q1",
            "type": "mcq",
            "prompt": "Quel fragment structural moléculaire retrouve-t-on obligatoirement au sein des chlorures d'acyle, des anhydrides d'acide, des esters et des amides ?",
            "options": [
              "Le fragment alkoxyle R-O-",
              "Le fragment acyle R-CO-",
              "Le fragment hydroxyle -OH",
              "Le fragment halogène -X"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Toutes ces fonctions dérivent de l'acide carboxylique par substitution du groupe -OH sur le groupe acyle commun R-CO-."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Échelle de réactivité des dérivés d'acides",
          "stepTheme": "Réactivité chimique",
          "stepBadge": "Échelle de réactivité",
          "paragraphText": "La réactivité des dérivés d'acide dépend de la facilité avec laquelle le groupe Z peut être expulsé comme groupe partant : Chlorure d'acyle (extrêmement réactif) > Anhydride d'acide (très réactif) > Ester (modérément réactif) > Amide (très stable). C'est pourquoi on utilise les chlorures d'acyle et les anhydrides lorsqu'on veut réaliser des synthèses totales et rapides à température ambiante.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q2",
            "type": "mcq",
            "prompt": "Dans quel ordre décroissant de réactivité chimique vis-à-vis des nucléophiles (eau, alcools, amines) se classent les dérivés d'acides carboxyliques ?",
            "options": [
              "Amide > Ester > Anhydride > Chlorure d'acyle",
              "Chlorure d'acyle > Anhydride d'acide > Ester > Amide",
              "Ester > Chlorure d'acyle > Amide > Anhydride",
              "Anhydride > Amide > Chlorure d'acyle > Ester"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les chlorures d'acyle sont les plus réactifs (le chlore est un excellent groupe partant), suivis des anhydrides, puis des esters, et enfin des amides qui sont les plus stables."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le groupement fonctionnel des chlorures d'acyle",
          "stepTheme": "Chlorures d'acyle",
          "stepBadge": "-CO-Cl",
          "paragraphText": "Le groupe caractéristique des chlorures d'acyle est le groupe carbonyle lié directement à un atome de chlore : -CO-Cl. Fumant à l'air humide, ces composés s'hydrolysent spontanément au contact de l'humidité atmosphérique en régénérant l'acide carboxylique et en dégageant des vapeurs blanches et suffocantes de chlorure d'hydrogène HCl.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q3",
            "type": "mcq",
            "prompt": "Pourquoi un flacon de chlorure d'éthanoyle CH3-CO-Cl dégage-t-il des fumées blanches suffocantes dès qu'on l'ouvre à l'air libre ?",
            "options": [
              "Parce qu'il s'évapore instantanément à température ambiante.",
              "Parce qu'il réagit immédiatement avec la vapeur d'eau de l'air en s'hydrolysant pour former de l'acide éthanoïque et du gaz HCl (fumées blanches de microgouttelettes acides).",
              "Parce qu'il brûle spontanément au contact du diazote.",
              "Parce qu'il sublime de la poudre de chlore pur."
            ],
            "correctAnswerIndex": 1,
            "explanation": "CH3-CO-Cl + H2O -> CH3-COOH + HCl. Le gaz chlorure d'hydrogène dégagé s'hydrate dans l'air pour former un brouillard acide blanc très corrosif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le groupement fonctionnel des anhydrides d'acide",
          "stepTheme": "Anhydrides d'acide",
          "stepBadge": "-CO-O-CO-",
          "paragraphText": "Le groupe caractéristique des anhydrides d'acide est constitué de deux groupes acyles reliés par un même atome d'oxygène pontal : -CO-O-CO-. Le mot « anhydride » signifie littéralement « privé d'eau », rappelant qu'il dérive de la condensation de deux acides avec perte de H2O.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q4",
            "type": "mcq",
            "prompt": "Quelle est la formule semi-développée de l'anhydride éthanoïque (ou anhydride acétique) utilisé pour la synthèse de l'aspirine ?",
            "options": [
              "CH3-COO-CH3",
              "CH3-CO-O-CO-CH3",
              "CH3-CH2-O-CH2-CH3",
              "CH3-CO-O-OH"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'anhydride éthanoïque résulte de la condensation de deux molécules d'acide éthanoïque : CH3-CO-O-CO-CH3 (noté aussi (CH3CO)2O)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le groupement fonctionnel ester",
          "stepTheme": "Les Esters",
          "stepBadge": "-COO-R'",
          "paragraphText": "Dans un ester, le carbone carbonyle est lié à un atome d'oxygène, lui-même relié à une chaîne alkyle ou aryle R' (différente de H) : -CO-O-R'. Les esters sont abondants dans la nature : ils sont responsables de l'arôme caractéristique des fruits (l'éthanoate de butyle sent la pomme, le méthanoate d'éthyle sent le rhum).",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q5",
            "type": "mcq",
            "prompt": "Quelle molécule représente le propanoate d'éthyle ?",
            "options": [
              "CH3-COO-CH2-CH2-CH3",
              "CH3-CH2-COO-CH2-CH3",
              "CH3-CH2-CO-NH-C2H5",
              "CH3-CH2-O-CO-CH2-CH3"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Propanoate = 3 carbones du côté acyle (CH3-CH2-CO-) ; éthyle = 2 carbones du côté alkyle (-O-CH2-CH3) : CH3-CH2-COO-CH2-CH3."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le groupement fonctionnel amide",
          "stepTheme": "Les Amides",
          "stepBadge": "-CO-N<",
          "paragraphText": "Le groupe fonctionnel amide comporte un azote directement fixé sur le carbone carbonyle : -CO-N<. Contrairement aux amines dont le doublet de l'azote est disponible pour capter un proton (caractère basique), le doublet de l'azote dans un amide est fortement délocalisé sur le groupe C=O : les amides sont donc des espèces chimiquement neutres en solution aqueuse.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q6",
            "type": "mcq",
            "prompt": "Pourquoi une solution aqueuse d'éthanamide CH3-CO-NH2 a-t-elle un pH proche de 7 (neutre), alors qu'une solution d'éthylamine C2H5-NH2 est nettement basique (pH ~ 11) ?",
            "options": [
              "Parce que l'éthanamide est un sel d'argent.",
              "Parce que le doublet non liant de l'azote de l'amide est délocalisé par conjugaison avec la double liaison C=O voisine, ce qui supprime son pouvoir capteur de protons.",
              "Parce que l'éthylamine contient du sodium.",
              "Parce que l'azote de l'amide porte une charge négative fixe."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conjugaison du doublet de l'azote avec le carbonyle C=O (forme mésomère R-C(O-)=NH2+) supprime le caractère basique de l'azote : les amides sont neutres."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Reconnaître le sens de lecture d'une chaîne ester",
          "stepTheme": "Sens d'écriture d'un ester",
          "stepBadge": "Attention au sens",
          "paragraphText": "Méfie-toi de l'écriture inversée des esters : la formule CH3-CH2-O-CO-CH3 ne correspond PAS au propanoate de méthyle ! L'atome de carbone qui porte la double liaison C=O est celui du groupe CH3-CO- (acyle dérivant de l'acide éthanoïque), et le groupe lié à l'oxygène simple est le groupe éthyle -CH2-CH3. C'est donc l'éthanoate d'éthyle.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q7",
            "type": "mcq",
            "prompt": "Quel est le nom de l'ester écrit sous la forme compacte : C2H5-O-CO-H ?",
            "options": [
              "Éthanoate de méthyle",
              "Méthanoate d'éthyle",
              "Propanoate d'hydrogène",
              "Acide éthanoïque"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le carbone du carbonyle est H-CO- (dérive de l'acide méthanoïque), et le groupe alkyle lié à l'oxygène est -C2H5 (éthyle) : il s'agit du méthanoate d'éthyle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q1",
          "type": "mcq",
          "prompt": "Quel fragment structural moléculaire retrouve-t-on obligatoirement au sein des chlorures d'acyle, des anhydrides d'acide, des esters et des amides ?",
          "options": [
            "Le fragment alkoxyle R-O-",
            "Le fragment acyle R-CO-",
            "Le fragment hydroxyle -OH",
            "Le fragment halogène -X"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Toutes ces fonctions dérivent de l'acide carboxylique par substitution du groupe -OH sur le groupe acyle commun R-CO-."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q2",
          "type": "mcq",
          "prompt": "Dans quel ordre décroissant de réactivité chimique vis-à-vis des nucléophiles (eau, alcools, amines) se classent les dérivés d'acides carboxyliques ?",
          "options": [
            "Amide > Ester > Anhydride > Chlorure d'acyle",
            "Chlorure d'acyle > Anhydride d'acide > Ester > Amide",
            "Ester > Chlorure d'acyle > Amide > Anhydride",
            "Anhydride > Amide > Chlorure d'acyle > Ester"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les chlorures d'acyle sont les plus réactifs (le chlore est un excellent groupe partant), suivis des anhydrides, puis des esters, et enfin des amides qui sont les plus stables."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q3",
          "type": "mcq",
          "prompt": "Pourquoi un flacon de chlorure d'éthanoyle CH3-CO-Cl dégage-t-il des fumées blanches suffocantes dès qu'on l'ouvre à l'air libre ?",
          "options": [
            "Parce qu'il s'évapore instantanément à température ambiante.",
            "Parce qu'il réagit immédiatement avec la vapeur d'eau de l'air en s'hydrolysant pour former de l'acide éthanoïque et du gaz HCl (fumées blanches de microgouttelettes acides).",
            "Parce qu'il brûle spontanément au contact du diazote.",
            "Parce qu'il sublime de la poudre de chlore pur."
          ],
          "correctAnswerIndex": 1,
          "explanation": "CH3-CO-Cl + H2O -> CH3-COOH + HCl. Le gaz chlorure d'hydrogène dégagé s'hydrate dans l'air pour former un brouillard acide blanc très corrosif."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q4",
          "type": "mcq",
          "prompt": "Quelle est la formule semi-développée de l'anhydride éthanoïque (ou anhydride acétique) utilisé pour la synthèse de l'aspirine ?",
          "options": [
            "CH3-COO-CH3",
            "CH3-CO-O-CO-CH3",
            "CH3-CH2-O-CH2-CH3",
            "CH3-CO-O-OH"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'anhydride éthanoïque résulte de la condensation de deux molécules d'acide éthanoïque : CH3-CO-O-CO-CH3 (noté aussi (CH3CO)2O)."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q5",
          "type": "mcq",
          "prompt": "Quelle molécule représente le propanoate d'éthyle ?",
          "options": [
            "CH3-COO-CH2-CH2-CH3",
            "CH3-CH2-COO-CH2-CH3",
            "CH3-CH2-CO-NH-C2H5",
            "CH3-CH2-O-CO-CH2-CH3"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Propanoate = 3 carbones du côté acyle (CH3-CH2-CO-) ; éthyle = 2 carbones du côté alkyle (-O-CH2-CH3) : CH3-CH2-COO-CH2-CH3."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q6",
          "type": "mcq",
          "prompt": "Pourquoi une solution aqueuse d'éthanamide CH3-CO-NH2 a-t-elle un pH proche de 7 (neutre), alors qu'une solution d'éthylamine C2H5-NH2 est nettement basique (pH ~ 11) ?",
          "options": [
            "Parce que l'éthanamide est un sel d'argent.",
            "Parce que le doublet non liant de l'azote de l'amide est délocalisé par conjugaison avec la double liaison C=O voisine, ce qui supprime son pouvoir capteur de protons.",
            "Parce que l'éthylamine contient du sodium.",
            "Parce que l'azote de l'amide porte une charge négative fixe."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conjugaison du doublet de l'azote avec le carbonyle C=O (forme mésomère R-C(O-)=NH2+) supprime le caractère basique de l'azote : les amides sont neutres."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p02_q7",
          "type": "mcq",
          "prompt": "Quel est le nom de l'ester écrit sous la forme compacte : C2H5-O-CO-H ?",
          "options": [
            "Éthanoate de méthyle",
            "Méthanoate d'éthyle",
            "Propanoate d'hydrogène",
            "Acide éthanoïque"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le carbone du carbonyle est H-CO- (dérive de l'acide méthanoïque), et le groupe alkyle lié à l'oxygène est -C2H5 (éthyle) : il s'agit du méthanoate d'éthyle."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03",
      "order": 3,
      "title": "Les chlorures d'acyle : Synthèse par SOCl2 et PCl5, nomenclature",
      "summary": "Préparation à partir de l'acide carboxylique avec le chlorure de thionyle ou le pentachlorure de phosphore, nomenclature chlorure de ...-oyle, et calculs quantitatifs.",
      "conceptExplanation": "Les chlorures d'acyle (ou chlorures d'acide) sont les dérivés d'acides les plus employés en synthèse pour leur extrême réactivité.\n\n1. Méthodes d'obtention au laboratoire :\nOn remplace le groupe -OH de l'acide carboxylique par un atome de chlore à l'aide d'agents chlorurants minéraux énergiques :\n- Avec le chlorure de thionyle (SOCl2) :\nR-COOH + SOCl2 ---> R-CO-Cl + SO2(g) + HCl(g).\nAvantage majeur : les deux sous-produits (dioxyde de soufre SO2 et chlorure d'hydrogène HCl) sont des gaz qui s'échappent spontanément du milieu réactionnel, ce qui permet d'obtenir le chlorure d'acyle pur sans étape complexe de séparation.\n- Avec le pentachlorure de phosphore (PCl5) :\nR-COOH + PCl5 ---> R-CO-Cl + POCl3(l) + HCl(g).\nLe sous-produit POCl3 (oxychlorure de phosphore) est un liquide qu'il faut séparer par distillation.\n\n2. Nomenclature officielle IUPAC :\nLe nom d'un chlorure d'acyle s'obtient à partir de celui de l'acide carboxylique correspondant en :\n- remplaçant le mot « acide » par « chlorure de »,\n- remplaçant la terminaison « oïque » par « oyle ».\nExemples :\n- H-CO-Cl : chlorure de méthanoyle (très instable)\n- CH3-CO-Cl : chlorure d'éthanoyle (ou chlorure d'acétyle)\n- CH3-CH2-CO-Cl : chlorure de propanoyle\n- CH3-CH(CH3)-CO-Cl : chlorure de 2-méthylpropanoyle\n- C6H5-CO-Cl : chlorure de benzoyle.",
      "keyRule": "Acide ...-oïque  ===>  Chlorure de ...-oyle. La réaction avec SOCl2 est privilégiée car tous les sous-produits (SO2 et HCl) sont gazeux.",
      "formulas": [
        {
          "name": "Synthèse d'un chlorure d'acyle par le chlorure de thionyle",
          "formula": "\\mathrm{R-COOH} + \\mathrm{SOCl_2} \\longrightarrow \\mathrm{R-CO-Cl} + \\mathrm{SO_2} \\uparrow + \\mathrm{HCl} \\uparrow",
          "note": "Production de deux gaz faciles à évacuer"
        },
        {
          "name": "Synthèse par le pentachlorure de phosphore",
          "formula": "\\mathrm{R-COOH} + \\mathrm{PCl_5} \\longrightarrow \\mathrm{R-CO-Cl} + \\mathrm{POCl_3} + \\mathrm{HCl} \\uparrow",
          "note": "Formation d'oxychlorure de phosphore POCl3 et de gaz HCl"
        }
      ],
      "workedExample": {
        "title": "Calcul du volume de gaz dégagé lors de la synthèse du chlorure d'éthanoyle",
        "statement": "On traite m = 3,0 g d'acide éthanoïque pur (M = 60 g/mol) par un excès de chlorure de thionyle SOCl2. Quel est le volume de chlorure d'hydrogène HCl gazeux dégagé dans les conditions où Vm = 24 L/mol ?",
        "methodSteps": [
          "Étape 1 : Écrire l'équation-bilan : CH3-COOH + SOCl2 -> CH3-CO-Cl + SO2 + HCl.",
          "Étape 2 : Calculer la quantité de matière d'acide éthanoïque : n = m / M = 3,0 / 60 = 0,050 mol.",
          "Étape 3 : Déterminer la quantité de gaz HCl : d'après la stœchiométrie (1:1), n(HCl) = n(acide) = 0,050 mol.",
          "Étape 4 : Calculer le volume de HCl : V = n(HCl) * Vm = 0,050 * 24 = 1,20 L."
        ],
        "conclusion": "Le volume de chlorure d'hydrogène dégagé est V = 1,2 L (un volume identique de 1,2 L de SO2 se dégage également)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Comparaison des deux méthodes de synthèse des chlorures d'acyle",
        "tableData": {
          "headers": [
            "Agent chlorurant",
            "Équation de réaction",
            "Sous-produits formés",
            "État physique des sous-produits",
            "Facilité de purification"
          ],
          "rows": [
            [
              "Chlorure de thionyle SOCl2",
              "R-COOH + SOCl2 -> R-CO-Cl + SO2 + HCl",
              "SO2 et HCl",
              "Tous deux gazeux (s'échappent)",
              "Excellente (le produit reste seul dans le ballon)"
            ],
            [
              "Pentachlorure de phosphore PCl5",
              "R-COOH + PCl5 -> R-CO-Cl + POCl3 + HCl",
              "POCl3 et HCl",
              "POCl3 est un liquide volatil",
              "Nécessite une distillation fractionnée"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Action du chlorure de thionyle SOCl2",
          "stepTheme": "Synthèse de chlorures d'acyle",
          "stepBadge": "SOCl2",
          "paragraphText": "Le chlorure de thionyle SOCl2 réagit mole à mole avec les acides carboxyliques. C'est le réactif de choix au laboratoire car le dégagement de deux gaz corrosifs (SO2 et HCl) déplace totalement l'équilibre vers la formation du chlorure d'acyle sans nécessiter d'excès gênant.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q1",
            "type": "mcq",
            "prompt": "Pourquoi les chimistes préfèrent-ils généralement utiliser le chlorure de thionyle SOCl2 plutôt que le pentachlorure de phosphore PCl5 pour préparer un chlorure d'acyle ?",
            "options": [
              "Parce que SOCl2 est totalement inodore et sans danger pour la santé.",
              "Parce que les deux sous-produits formés (SO2 et HCl) sont entièrement gazeux, ce qui simplifie grandement l'isolement du chlorure d'acyle pur.",
              "Parce que PCl5 ne réagit qu'avec les alcools primaires.",
              "Parce que SOCl2 ne consomme aucun atome de chlore."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'évacuation spontanée de SO2 et HCl sous forme de gaz permet de recueillir directement le chlorure d'acyle résiduel dans le ballon sans purification délicate."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Action du pentachlorure de phosphore PCl5",
          "stepTheme": "Synthèse de chlorures d'acyle",
          "stepBadge": "PCl5",
          "paragraphText": "Le pentachlorure de phosphore PCl5 est un solide jaunâtre très avide d'eau. Sa réaction avec un acide carboxylique fournit le chlorure d'acyle, du gaz chlorure d'hydrogène HCl et de l'oxychlorure de phosphore POCl3 (liquide bouillant à 106 °C).",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q2",
            "type": "mcq",
            "prompt": "On fait réagir de l'acide propanoïque avec du pentachlorure de phosphore PCl5. Quelle est l'équation-bilan de la réaction ?",
            "options": [
              "CH3-CH2-COOH + PCl5 -> CH3-CH2-CO-Cl + POCl3 + HCl",
              "CH3-CH2-COOH + PCl5 -> CH3-CH2-Cl + POCl3 + CO2",
              "CH3-CH2-COOH + PCl5 -> CH3-CH2-CO-Cl + PCl3 + H2O",
              "CH3-CH2-COOH + PCl5 -> CH3-CH2-CO-O-PCl4 + HCl"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'équation officielle est R-COOH + PCl5 -> R-CO-Cl + POCl3 + HCl. Avec l'acide propanoïque, on obtient le chlorure de propanoyle, POCl3 et HCl."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Règles de nomenclature systématique des chlorures d'acyle",
          "stepTheme": "Nomenclature",
          "stepBadge": "Chlorure de ...-oyle",
          "paragraphText": "Pour nommer un chlorure d'acyle : 1) Trouver l'acide carboxylique correspondant ; 2) Remplacer 'acide' par 'chlorure de' ; 3) Remplacer la terminaison 'oïque' par 'oyle'. Exemple : acide 2-méthylpropanoïque -> chlorure de 2-méthylpropanoyle.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q3",
            "type": "mcq",
            "prompt": "Quel est le nom officiel de la molécule : CH3-CH(CH3)-CH2-CO-Cl ?",
            "options": [
              "Chlorure de 3-méthylbutanoyle",
              "Chlorure de 2-méthylbutanoyle",
              "Chlorure de pentanoyle",
              "1-chloro-3-méthylbutanone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le carbone C1 est le -CO-Cl. C2 est -CH2-, C3 porte le méthyle -CH3, et C4 est le -CH3 terminal. La chaîne principale a 4 carbones : c'est le chlorure de 3-méthylbutanoyle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Hydrolyse violente des chlorures d'acyle",
          "stepTheme": "Réactivité",
          "stepBadge": "Réaction avec l'eau",
          "paragraphText": "Lorsqu'on verse quelques gouttes d'eau dans un tube contenant un chlorure d'acyle, une réaction vive et très exothermique a lieu instantanément : R-CO-Cl + H2O -> R-COOH + HCl. Le papier pH rougit immédiatement au contact de la vapeur et une tige de verre trempée dans l'ammoniaque produit d'épaisses fumées blanches de chlorure d'ammonium NH4Cl.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q4",
            "type": "mcq",
            "prompt": "Quelle caractéristique fondamentale distingue la réaction d'un chlorure d'acyle avec l'eau de celle d'un ester avec l'eau (hydrolyse d'un ester) ?",
            "options": [
              "La réaction du chlorure d'acyle avec l'eau est lente et limitée par un équilibre chimique.",
              "La réaction du chlorure d'acyle avec l'eau est totale, quasi instantanée et fortement exothermique, alors que l'hydrolyse d'un ester est lente, limitée et athermique.",
              "Le chlorure d'acyle ne réagit jamais avec l'eau sans catalyseur de platine.",
              "L'hydrolyse du chlorure d'acyle produit un alcool et une base forte."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le chlorure d'acyle réagit de façon totale, violente et irréversible avec l'eau, à l'opposé complet de l'hydrolyse d'un ester qui est lente et équilibrée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Ne pas confondre chlorure d'acyle et halogénoalcane",
          "stepTheme": "Piège de structure",
          "stepBadge": "R-CO-Cl vs R-Cl",
          "paragraphText": "Ne confonds jamais un chlorure d'acyle R-CO-Cl (qui comporte un groupe carbonyle C=O lié au chlore) et un dérivé halogéné d'alcane R-Cl (comme le 1-chloropropane CH3-CH2-CH2-Cl, où le chlore est lié à un carbone sp3 sans carbonyle). Leur réactivité chimique est totalement différente.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q5",
            "type": "mcq",
            "prompt": "Parmi les deux formules suivantes : (1) CH3-CH2-CO-Cl et (2) CH3-CH2-CH2-Cl, quelle est la classification respective exacte ?",
            "options": [
              "(1) est un chlorure d'acyle et (2) est un halogénoalcane (chloroalcane).",
              "(1) est un chloroalcane et (2) est un ester halogéné.",
              "Toutes deux sont des chlorures d'acyle isomères.",
              "Toutes deux sont des acides carboxyliques minéraux."
            ],
            "correctAnswerIndex": 0,
            "explanation": "(1) contient le groupe acyle -CO-Cl (chlorure de propanoyle), tandis que (2) est un alcane chloré sans groupe carbonyle (1-chloropropane)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Calcul du volume total de gaz produit lors de la synthèse",
          "stepTheme": "Calculs d'examen",
          "stepBadge": "Volume de gaz",
          "paragraphText": "Lors de la réaction R-COOH + SOCl2 -> R-CO-Cl + SO2(g) + HCl(g), chaque mole d'acide consommée génère exactement 2 moles de gaz au total (1 mole de SO2 et 1 mole de HCl). Le volume gazeux total recueilli vaut V_gaz_total = 2 * n(acide) * Vm.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q6",
            "type": "mcq",
            "prompt": "On fait réagir 0,10 mole d'acide éthanoïque avec une quantité stœchiométrique de SOCl2. Quel est le volume total de gaz (SO2 + HCl) dégagé dans des conditions où Vm = 24 L/mol ?",
            "options": [
              "2,4 L",
              "4,8 L",
              "1,2 L",
              "24,0 L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "1 mole d'acide produit 1 mole de SO2 et 1 mole de HCl, soit 2 moles de molécules gazeuses. Pour 0,10 mole d'acide : n(gaz total) = 0,20 mole. Volume V = 0,20 * 24 = 4,8 L."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Sécurité et manipulation des chlorures d'acyle au laboratoire",
          "stepTheme": "Sécurité",
          "stepBadge": "Hotte aspirante",
          "paragraphText": "En raison de leur réactivité explosive avec l'eau et de l'émission constante de vapeurs acides de HCl très toxiques pour les voies respiratoires, toute manipulation de chlorure d'acyle doit obligatoirement être réalisée sous une hotte aspirante en marche, avec gants et lunettes de protection.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q7",
            "type": "mcq",
            "prompt": "Quelle consigne de sécurité expérimentale s'impose obligatoirement lors de la manipulation du chlorure de propanoyle au laboratoire ?",
            "options": [
              "Travailler fenêtres fermées sans aucune aération.",
              "Manipuler impérativement sous une hotte aspirante ventilée pour évacuer les vapeurs toxiques et corrosives de HCl formées avec l'humidité de l'air.",
              "Laver préalablement la verrerie avec de l'eau tiède sans la sécher.",
              "Refroidir le réactif à -50 °C avant chaque prélèvement."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'hydrolyse au contact de l'humidité de l'air libère du gaz chlorure d'hydrogène HCl extrêmement suffocant et corrosif, imposant l'usage de la hotte aspirante."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q1",
          "type": "mcq",
          "prompt": "Pourquoi les chimistes préfèrent-ils généralement utiliser le chlorure de thionyle SOCl2 plutôt que le pentachlorure de phosphore PCl5 pour préparer un chlorure d'acyle ?",
          "options": [
            "Parce que SOCl2 est totalement inodore et sans danger pour la santé.",
            "Parce que les deux sous-produits formés (SO2 et HCl) sont entièrement gazeux, ce qui simplifie grandement l'isolement du chlorure d'acyle pur.",
            "Parce que PCl5 ne réagit qu'avec les alcools primaires.",
            "Parce que SOCl2 ne consomme aucun atome de chlore."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'évacuation spontanée de SO2 et HCl sous forme de gaz permet de recueillir directement le chlorure d'acyle résiduel dans le ballon sans purification délicate."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q2",
          "type": "mcq",
          "prompt": "On fait réagir de l'acide propanoïque avec du pentachlorure de phosphore PCl5. Quelle est l'équation-bilan de la réaction ?",
          "options": [
            "CH3-CH2-COOH + PCl5 -> CH3-CH2-CO-Cl + POCl3 + HCl",
            "CH3-CH2-COOH + PCl5 -> CH3-CH2-Cl + POCl3 + CO2",
            "CH3-CH2-COOH + PCl5 -> CH3-CH2-CO-Cl + PCl3 + H2O",
            "CH3-CH2-COOH + PCl5 -> CH3-CH2-CO-O-PCl4 + HCl"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équation officielle est R-COOH + PCl5 -> R-CO-Cl + POCl3 + HCl. Avec l'acide propanoïque, on obtient le chlorure de propanoyle, POCl3 et HCl."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q3",
          "type": "mcq",
          "prompt": "Quel est le nom officiel de la molécule : CH3-CH(CH3)-CH2-CO-Cl ?",
          "options": [
            "Chlorure de 3-méthylbutanoyle",
            "Chlorure de 2-méthylbutanoyle",
            "Chlorure de pentanoyle",
            "1-chloro-3-méthylbutanone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le carbone C1 est le -CO-Cl. C2 est -CH2-, C3 porte le méthyle -CH3, et C4 est le -CH3 terminal. La chaîne principale a 4 carbones : c'est le chlorure de 3-méthylbutanoyle."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q4",
          "type": "mcq",
          "prompt": "Quelle caractéristique fondamentale distingue la réaction d'un chlorure d'acyle avec l'eau de celle d'un ester avec l'eau (hydrolyse d'un ester) ?",
          "options": [
            "La réaction du chlorure d'acyle avec l'eau est lente et limitée par un équilibre chimique.",
            "La réaction du chlorure d'acyle avec l'eau est totale, quasi instantanée et fortement exothermique, alors que l'hydrolyse d'un ester est lente, limitée et athermique.",
            "Le chlorure d'acyle ne réagit jamais avec l'eau sans catalyseur de platine.",
            "L'hydrolyse du chlorure d'acyle produit un alcool et une base forte."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le chlorure d'acyle réagit de façon totale, violente et irréversible avec l'eau, à l'opposé complet de l'hydrolyse d'un ester qui est lente et équilibrée."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q5",
          "type": "mcq",
          "prompt": "Parmi les deux formules suivantes : (1) CH3-CH2-CO-Cl et (2) CH3-CH2-CH2-Cl, quelle est la classification respective exacte ?",
          "options": [
            "(1) est un chlorure d'acyle et (2) est un halogénoalcane (chloroalcane).",
            "(1) est un chloroalcane et (2) est un ester halogéné.",
            "Toutes deux sont des chlorures d'acyle isomères.",
            "Toutes deux sont des acides carboxyliques minéraux."
          ],
          "correctAnswerIndex": 0,
          "explanation": "(1) contient le groupe acyle -CO-Cl (chlorure de propanoyle), tandis que (2) est un alcane chloré sans groupe carbonyle (1-chloropropane)."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q6",
          "type": "mcq",
          "prompt": "On fait réagir 0,10 mole d'acide éthanoïque avec une quantité stœchiométrique de SOCl2. Quel est le volume total de gaz (SO2 + HCl) dégagé dans des conditions où Vm = 24 L/mol ?",
          "options": [
            "2,4 L",
            "4,8 L",
            "1,2 L",
            "24,0 L"
          ],
          "correctAnswerIndex": 1,
          "explanation": "1 mole d'acide produit 1 mole de SO2 et 1 mole de HCl, soit 2 moles de molécules gazeuses. Pour 0,10 mole d'acide : n(gaz total) = 0,20 mole. Volume V = 0,20 * 24 = 4,8 L."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p03_q7",
          "type": "mcq",
          "prompt": "Quelle consigne de sécurité expérimentale s'impose obligatoirement lors de la manipulation du chlorure de propanoyle au laboratoire ?",
          "options": [
            "Travailler fenêtres fermées sans aucune aération.",
            "Manipuler impérativement sous une hotte aspirante ventilée pour évacuer les vapeurs toxiques et corrosives de HCl formées avec l'humidité de l'air.",
            "Laver préalablement la verrerie avec de l'eau tiède sans la sécher.",
            "Refroidir le réactif à -50 °C avant chaque prélèvement."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'hydrolyse au contact de l'humidité de l'air libère du gaz chlorure d'hydrogène HCl extrêmement suffocant et corrosif, imposant l'usage de la hotte aspirante."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04",
      "order": 4,
      "title": "Les anhydrides d'acide : Synthèse par déshydratation au P4O10, nomenclature",
      "summary": "Élimination intermoléculaire d'eau entre deux acides carboxyliques sous l'action du décaoxyde de tétraphosphore P4O10 à chaud, nomenclature des anhydrides symétriques et mixtes.",
      "conceptExplanation": "Un anhydride d'acide résulte formellement de l'élimination d'une molécule d'eau entre deux molécules d'acides carboxyliques identiques ou différents.\n\n1. Méthode d'obtention par déshydratation chimique :\nCette réaction de déshydratation intermoléculaire se réalise par chauffage modéré de l'acide carboxylique en présence d'un agent déshydratant minéral très puissant : le décaoxyde de tétraphosphore (P4O10, parfois écrit P2O5) :\nR-COOH + R'-COOH ---(P4O10 / chauffage)---> R-CO-O-CO-R' + H2O.\nLe réactif P4O10 capte l'eau de manière irréversible pour former de l'acide phosphorique H3PO4, ce qui force la réaction à être totale et rapide.\n\n2. Nomenclature officielle IUPAC :\nLe nom d'un anhydride d'acide s'obtient à partir de celui de l'acide correspondant en remplaçant simplement le mot « acide » par le mot « anhydride » :\n- Anhydride symétrique (formé à partir de deux molécules du même acide) :\n  * (CH3-CO)2O : anhydride éthanoïque\n  * (CH3-CH2-CO)2O : anhydride propanoïque\n  * (H-CO)2O : anhydride méthanoïque (instable)\n- Anhydride mixte (ou dissymétrique, formé de deux acides distincts) :\n  On énonce les noms des deux acides d'origine par ordre alphabétique après le mot « anhydride » :\n  * CH3-CH2-CO-O-CO-CH3 : anhydride éthanoïque et propanoïque (ordre alphabétique : 'éthanoïque' avant 'propanoïque').",
      "keyRule": "Anhydride symétrique = 'anhydride' + nom de l'acide sans 'acide'. Anhydride mixte = 'anhydride' + les deux noms d'acides par ordre alphabétique.",
      "formulas": [
        {
          "name": "Synthèse d'un anhydride d'acide",
          "formula": "\\mathrm{R-COOH} + \\mathrm{R'-COOH} \\xrightarrow[\\Delta]{\\mathrm{P_4O_{10}}} \\mathrm{R-CO-O-CO-R'} + \\mathrm{H_2O}",
          "note": "Déshydratation intermoléculaire forcée par P4O10 à chaud"
        }
      ],
      "workedExample": {
        "title": "Nommer un anhydride d'acide mixte",
        "statement": "Trouve le nom officiel de l'anhydride de formule semi-développée : CH3-CO-O-CO-CH2-CH2-CH3.",
        "methodSteps": [
          "Étape 1 : Identifier le groupe acyle de gauche : CH3-CO- (dérive de l'acide éthanoïque).",
          "Étape 2 : Identifier le groupe acyle de droite : -CO-CH2-CH2-CH3 (dérive de l'acide butanoïque).",
          "Étape 3 : Classer les deux noms d'acides par ordre alphabétique : 'butanoïque' précède 'éthanoïque'.",
          "Étape 4 : Assembler avec le mot 'anhydride' : anhydride butanoïque et éthanoïque."
        ],
        "conclusion": "Le nom officiel est : anhydride butanoïque et éthanoïque (ou éthanoïque et butanoïque selon l'ordre alphabétique rigoureux)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau des anhydrides d'acides représentatifs",
        "tableData": {
          "headers": [
            "Type d'anhydride",
            "Formule semi-développée",
            "Acide(s) précurseur(s)",
            "Nom officiel IUPAC"
          ],
          "rows": [
            [
              "Symétrique",
              "CH3-CO-O-CO-CH3",
              "Acide éthanoïque seul",
              "Anhydride éthanoïque"
            ],
            [
              "Symétrique",
              "C2H5-CO-O-CO-C2H5",
              "Acide propanoïque seul",
              "Anhydride propanoïque"
            ],
            [
              "Mixte",
              "CH3-CO-O-CO-C2H5",
              "Acide éthanoïque + acide propanoïque",
              "Anhydride éthanoïque et propanoïque"
            ],
            [
              "Mixte",
              "CH3-CO-O-CO-C3H7",
              "Acide butanoïque + acide éthanoïque",
              "Anhydride butanoïque et éthanoïque"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Rôle du décaoxyde de tétraphosphore P4O10",
          "stepTheme": "Agent déshydratant",
          "stepBadge": "P4O10",
          "paragraphText": "Le décaoxyde de tétraphosphore P4O10 est l'un des plus puissants déshydratants chimiques connus. Son avidité pour l'eau est telle qu'il arrache une molécule de H2O entre deux fonctions carboxyles voisines selon : P4O10 + 6 H2O -> 4 H3PO4, déplaçant intégralement l'équilibre vers la formation de l'anhydride.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q1",
            "type": "mcq",
            "prompt": "Quel est le rôle précis du décaoxyde de tétraphosphore P4O10 dans la synthèse d'un anhydride d'acide ?",
            "options": [
              "Il agit comme oxydant pour transformer l'acide en ester.",
              "Il joue le rôle de déshydratant chimique puissant en fixant l'eau éliminée entre deux molécules d'acide carboxylique.",
              "Il neutralise les ions chlorure du milieu.",
              "Il colore la solution pour indiquer la fin de la réaction."
            ],
            "correctAnswerIndex": 1,
            "explanation": "P4O10 capte avidement la molécule d'eau issue de la condensation des deux acides, rendant la déshydratation complète."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Nomenclature des anhydrides symétriques",
          "stepTheme": "Nomenclature",
          "stepBadge": "Anhydrides symétriques",
          "paragraphText": "Lorsqu'un anhydride provient de la condensation de deux molécules d'un même acide carboxylique, on remplace simplement le mot 'acide' par 'anhydride'. Par exemple, deux molécules d'acide propanoïque donnent l'anhydride propanoïque (CH3-CH2-CO)2O.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q2",
            "type": "mcq",
            "prompt": "Quel est le nom IUPAC de l'anhydride symétrique : CH3-CH2-CH2-CO-O-CO-CH2-CH2-CH3 ?",
            "options": [
              "Anhydride butanoïque",
              "Anhydride octanoïque",
              "Dibutanoate d'oxygène",
              "Anhydride propanoïque"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque fragment acyle comporte 4 carbones et dérive de l'acide butanoïque : le nom officiel est donc l'anhydride butanoïque (et non octanoïque, car on compte le nombre de carbones d'une seule branche acyle)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Règle de l'ordre alphabétique pour les anhydrides mixtes",
          "stepTheme": "Nomenclature",
          "stepBadge": "Anhydrides mixtes",
          "paragraphText": "Si les deux chaînes acyles reliées à l'oxygène central ont des longueurs différentes, l'anhydride est mixte. On cite les deux adjectifs correspondant aux acides d'origine par ordre alphabétique, reliés par la conjonction 'et'.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q3",
            "type": "mcq",
            "prompt": "Quel est le nom systématique de l'anhydride obtenu par condensation d'une molécule d'acide méthanoïque (C1) et d'une molécule d'acide éthanoïque (C2) ?",
            "options": [
              "Anhydride méthanoïque",
              "Anhydride éthanoïque et méthanoïque",
              "Anhydride méthano-éthanoïque",
              "Acide éthano-formique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par ordre alphabétique des deux acides constitutifs ('éthanoïque' précède 'méthanoïque') : anhydride éthanoïque et méthanoïque."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Hydrolyse d'un anhydride d'acide",
          "stepTheme": "Réactivité",
          "stepBadge": "Réaction avec l'eau",
          "paragraphText": "En présence d'eau, un anhydride d'acide s'hydrolyse rapidement et totalement en régénérant les deux molécules d'acides carboxyliques : R-CO-O-CO-R' + H2O -> R-COOH + R'-COOH. Cette réaction est beaucoup moins brutale que l'hydrolyse d'un chlorure d'acyle et ne dégage aucun gaz acide de HCl.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q4",
            "type": "mcq",
            "prompt": "Quels produits organiques obtient-on par hydrolyse complète d'une mole d'anhydride éthanoïque et propanoïque ?",
            "options": [
              "Deux moles d'acide éthanoïque.",
              "Une mole d'acide éthanoïque et une mole d'acide propanoïque.",
              "Une mole d'acétate d'éthyle et de l'eau.",
              "Du dioxyde de carbone et de l'éthanol."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'hydrolyse coupe la liaison centrale et restitue les deux acides d'origine : 1 mole d'acide éthanoïque + 1 mole d'acide propanoïque."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Ne pas confondre anhydride et ester",
          "stepTheme": "Piège structural",
          "stepBadge": "Anhydride vs Ester",
          "paragraphText": "Un ester ne possède qu'un seul groupe carbonyle C=O lié à un oxygène alcoxyle (-CO-O-C-), alors qu'un anhydride possède DEUX groupes carbonyles encadrant l'atome d'oxygène central (-CO-O-CO-). Leurs formules générales et leurs masses molaires sont donc radicalement distinctes.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q5",
            "type": "mcq",
            "prompt": "On compare les deux molécules : (A) CH3-CO-O-CH2-CH3 et (B) CH3-CO-O-CO-CH3. Quelle est leur nature respective ?",
            "options": [
              "(A) est un anhydride et (B) est un ester.",
              "(A) est un ester (éthanoate d'éthyle) et (B) est un anhydride d'acide (anhydride éthanoïque).",
              "Toutes deux sont des esters isomères.",
              "Toutes deux sont des étheroxydes."
            ],
            "correctAnswerIndex": 1,
            "explanation": "(A) n'a qu'un seul carbonyle C=O (c'est un ester), tandis que (B) possède deux carbonyles symétriques de part et d'autre de l'oxygène (c'est un anhydride d'acide)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Avantage industriel de l'anhydride éthanoïque dans la synthèse de l'aspirine",
          "stepTheme": "Synthèse industrielle",
          "stepBadge": "Aspirine",
          "paragraphText": "Pour fabriquer l'aspirine (acide acétylsalicylique), l'industrie fait réagir l'acide salicylique avec l'anhydride éthanoïque plutôt qu'avec l'acide éthanoïque. La réaction avec l'anhydride est totale et rapide (au lieu d'être limitée à 67 %), et elle est préférée au chlorure d'éthanoyle car elle ne dégage pas de gaz toxique et corrosif HCl.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q6",
            "type": "mcq",
            "prompt": "Pourquoi l'anhydride éthanoïque est-il le réactif idéal pour la synthèse industrielle de l'aspirine à grande échelle ?",
            "options": [
              "Parce qu'il ne coûte rien et se trouve directement dans la nature.",
              "Parce qu'il assure une réaction totale et rapide avec un excellent rendement, sans dégager de gaz corrosif et dangereux de HCl comme le ferait un chlorure d'acyle.",
              "Parce qu'il transforme l'aspirine en vitamine C.",
              "Parce qu'il empêche le mélange de chauffer."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'anhydride concilie un rendement quantitatif (réaction totale) avec la sécurité industrielle (le sous-produit est l'acide acétique inoffensif et non le gaz HCl toxique)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Calcul de stœchiométrie lors de l'acylation par un anhydride",
          "stepTheme": "Stœchiométrie",
          "stepBadge": "Bilan de masse",
          "paragraphText": "Lors de la réaction d'une mole d'alcool R'-OH avec une mole d'anhydride (R-CO)2O, on forme exactement une mole d'ester R-COOR' et une mole d'acide carboxylique R-COOH. La conservation de la matière permet de calculer directement la masse d'ester produit : n(ester) = n(anhydride consommé).",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q7",
            "type": "mcq",
            "prompt": "On fait réagir 0,20 mole d'anhydride éthanoïque ((CH3CO)2O, M = 102 g/mol) avec un excès d'éthanol. Sachant que la réaction est totale, quelle masse d'éthanoate d'éthyle (M = 88 g/mol) recueille-t-on théoriquement ?",
            "options": [
              "8,8 g",
              "17,6 g",
              "20,4 g",
              "35,2 g"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La réaction étant totale : n(ester) = n(anhydride) = 0,20 mol. Masse m = n * M = 0,20 * 88 = 17,6 g."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q1",
          "type": "mcq",
          "prompt": "Quel est le rôle précis du décaoxyde de tétraphosphore P4O10 dans la synthèse d'un anhydride d'acide ?",
          "options": [
            "Il agit comme oxydant pour transformer l'acide en ester.",
            "Il joue le rôle de déshydratant chimique puissant en fixant l'eau éliminée entre deux molécules d'acide carboxylique.",
            "Il neutralise les ions chlorure du milieu.",
            "Il colore la solution pour indiquer la fin de la réaction."
          ],
          "correctAnswerIndex": 1,
          "explanation": "P4O10 capte avidement la molécule d'eau issue de la condensation des deux acides, rendant la déshydratation complète."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q2",
          "type": "mcq",
          "prompt": "Quel est le nom IUPAC de l'anhydride symétrique : CH3-CH2-CH2-CO-O-CO-CH2-CH2-CH3 ?",
          "options": [
            "Anhydride butanoïque",
            "Anhydride octanoïque",
            "Dibutanoate d'oxygène",
            "Anhydride propanoïque"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque fragment acyle comporte 4 carbones et dérive de l'acide butanoïque : le nom officiel est donc l'anhydride butanoïque (et non octanoïque, car on compte le nombre de carbones d'une seule branche acyle)."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q3",
          "type": "mcq",
          "prompt": "Quel est le nom systématique de l'anhydride obtenu par condensation d'une molécule d'acide méthanoïque (C1) et d'une molécule d'acide éthanoïque (C2) ?",
          "options": [
            "Anhydride méthanoïque",
            "Anhydride éthanoïque et méthanoïque",
            "Anhydride méthano-éthanoïque",
            "Acide éthano-formique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par ordre alphabétique des deux acides constitutifs ('éthanoïque' précède 'méthanoïque') : anhydride éthanoïque et méthanoïque."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q4",
          "type": "mcq",
          "prompt": "Quels produits organiques obtient-on par hydrolyse complète d'une mole d'anhydride éthanoïque et propanoïque ?",
          "options": [
            "Deux moles d'acide éthanoïque.",
            "Une mole d'acide éthanoïque et une mole d'acide propanoïque.",
            "Une mole d'acétate d'éthyle et de l'eau.",
            "Du dioxyde de carbone et de l'éthanol."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'hydrolyse coupe la liaison centrale et restitue les deux acides d'origine : 1 mole d'acide éthanoïque + 1 mole d'acide propanoïque."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q5",
          "type": "mcq",
          "prompt": "On compare les deux molécules : (A) CH3-CO-O-CH2-CH3 et (B) CH3-CO-O-CO-CH3. Quelle est leur nature respective ?",
          "options": [
            "(A) est un anhydride et (B) est un ester.",
            "(A) est un ester (éthanoate d'éthyle) et (B) est un anhydride d'acide (anhydride éthanoïque).",
            "Toutes deux sont des esters isomères.",
            "Toutes deux sont des étheroxydes."
          ],
          "correctAnswerIndex": 1,
          "explanation": "(A) n'a qu'un seul carbonyle C=O (c'est un ester), tandis que (B) possède deux carbonyles symétriques de part et d'autre de l'oxygène (c'est un anhydride d'acide)."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q6",
          "type": "mcq",
          "prompt": "Pourquoi l'anhydride éthanoïque est-il le réactif idéal pour la synthèse industrielle de l'aspirine à grande échelle ?",
          "options": [
            "Parce qu'il ne coûte rien et se trouve directement dans la nature.",
            "Parce qu'il assure une réaction totale et rapide avec un excellent rendement, sans dégager de gaz corrosif et dangereux de HCl comme le ferait un chlorure d'acyle.",
            "Parce qu'il transforme l'aspirine en vitamine C.",
            "Parce qu'il empêche le mélange de chauffer."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'anhydride concilie un rendement quantitatif (réaction totale) avec la sécurité industrielle (le sous-produit est l'acide acétique inoffensif et non le gaz HCl toxique)."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p04_q7",
          "type": "mcq",
          "prompt": "On fait réagir 0,20 mole d'anhydride éthanoïque ((CH3CO)2O, M = 102 g/mol) avec un excès d'éthanol. Sachant que la réaction est totale, quelle masse d'éthanoate d'éthyle (M = 88 g/mol) recueille-t-on théoriquement ?",
          "options": [
            "8,8 g",
            "17,6 g",
            "20,4 g",
            "35,2 g"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La réaction étant totale : n(ester) = n(anhydride) = 0,20 mol. Masse m = n * M = 0,20 * 88 = 17,6 g."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05",
      "order": 5,
      "title": "Les amides : Synthèse en 2 étapes, synthèse sur chlorure d'acyle, nomenclature",
      "summary": "Formation du carboxylate d'ammonium puis déshydratation thermique, réaction directe sur chlorure d'acyle (rapide et totale), trois classes d'amides et nomenclature avec préfixe N-.",
      "conceptExplanation": "Les amides sont des dérivés d'acides où le groupe -OH est remplacé par un groupe azoté. On distingue trois classes d'amides selon le degré de substitution de l'azote :\n- Amide non substitué (primaire) : R-CO-NH2 (l'azote porte 2 H).\n- Amide N-substitué (secondaire) : R-CO-NH-R' (l'azote porte 1 H et 1 alkyle).\n- Amide N,N-disubstitué (tertiaire) : R-CO-N(R')-R'' (l'azote porte 2 alkyles).\n\n1. Synthèse à partir d'un acide carboxylique et de l'ammoniac (en deux étapes) :\n- 1ère étape : Réaction acido-basique instantanée à froid entre l'acide carboxylique et l'ammoniac NH3 pour former un sel solide : le carboxylate d'ammonium :\nR-COOH + NH3 ---> R-COO- + NH4+.\n- 2ème étape : Déshydratation thermique par chauffage prolongé du sel d'ammonium sec pour éliminer H2O :\nR-COO- + NH4+ ---(chauffage Delta)---> R-CO-NH2 + H2O.\n\n2. Synthèse directe à partir d'un chlorure d'acyle (en une seule étape) :\nL'action de l'ammoniac sur un chlorure d'acyle est quasi instantanée, totale et très exothermique :\nR-CO-Cl + 2 NH3 ---> R-CO-NH2 + NH4Cl (ou R-CO-Cl + NH3 -> R-CO-NH2 + HCl).\nEn utilisant une amine primaire (R'-NH2) ou secondaire (R'R''NH), on obtient directement des amides secondaires ou tertiaires.\n\n3. Nomenclature officielle IUPAC :\nOn remplace le « e » final du nom de l'alcane par « amide ». Si des groupes alkyles sont fixés sur l'azote, on les nomme en préfixe précédés de la lettre N (ou N,N) :\n- H-CO-NH2 : méthanamide\n- CH3-CO-NH2 : éthanamide (acétamide)\n- CH3-CO-NH-CH3 : N-méthyléthanamide\n- CH3-CH2-CO-N(CH3)-C2H5 : N-éthyl-N-méthylpropanamide.",
      "keyRule": "Acide + NH3 = sel à froid, puis chauffage = amide (2 étapes). Chlorure d'acyle + NH3 = amide + chlorure d'ammonium (1 seule étape, rapide et totale). Tout substituant sur l'azote est précédé de la lettre N.",
      "formulas": [
        {
          "name": "Synthèse en deux étapes via carboxylate d'ammonium",
          "formula": "\\mathrm{R-COOH} + \\mathrm{NH_3} \\longrightarrow \\mathrm{R-COO^- NH_4^+} \\xrightarrow{\\Delta} \\mathrm{R-CO-NH_2} + \\mathrm{H_2O}",
          "note": "Sel d'ammonium à froid, puis déshydratation à chaud"
        },
        {
          "name": "Synthèse directe rapide via chlorure d'acyle",
          "formula": "\\mathrm{R-CO-Cl} + 2\\,\\mathrm{NH_3} \\longrightarrow \\mathrm{R-CO-NH_2} + \\mathrm{NH_4Cl}",
          "note": "Réaction totale, rapide et exothermique en une seule étape"
        }
      ],
      "workedExample": {
        "title": "Synthèse et nomenclature d'un amide secondaire",
        "statement": "On fait réagir du chlorure de propanoyle avec de la méthylamine (CH3-NH2). Écris l'équation de la réaction et donne le nom de l'amide formé.",
        "methodSteps": [
          "Étape 1 : Formule du chlorure d'acyle : CH3-CH2-CO-Cl.",
          "Étape 2 : Formule de l'amine primaire : CH3-NH2.",
          "Étape 3 : Écrire l'équation de condensation : CH3-CH2-CO-Cl + CH3-NH2 -> CH3-CH2-CO-NH-CH3 + HCl.",
          "Étape 4 : Nommer la chaîne acyle (3 carbones) : propanamide.",
          "Étape 5 : Nommer le groupe fixé sur l'azote : substituant méthyle précédé de N-."
        ],
        "conclusion": "L'amide formé est le N-méthylpropanamide (amide secondaire)."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif des trois classes d'amides",
        "tableData": {
          "headers": [
            "Classe d'amide",
            "Substituants sur l'azote",
            "Formule générale",
            "Exemple type",
            "Nom systématique"
          ],
          "rows": [
            [
              "Primaire (non substitué)",
              "Deux atomes H (-NH2)",
              "R-CO-NH2",
              "H-CO-NH2",
              "Méthanamide"
            ],
            [
              "Secondaire (N-substitué)",
              "Un H et un alkyle (-NH-R')",
              "R-CO-NH-R'",
              "CH3-CO-NH-CH3",
              "N-méthyléthanamide"
            ],
            [
              "Tertiaire (N,N-disubstitué)",
              "Deux alkyles (-NR'R'')",
              "R-CO-N(R')-R''",
              "CH3-CH2-CO-N(CH3)2",
              "N,N-diméthylpropanamide"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La première étape : simple transfert de proton acido-basique",
          "stepTheme": "Synthèse en 2 étapes",
          "stepBadge": "Sel d'ammonium",
          "paragraphText": "Lorsqu'on met en contact un acide carboxylique R-COOH et de l'ammoniac gazeux NH3 à température ambiante, il ne se forme aucun amide : il se produit uniquement une réaction acide-base instantanée entre l'acide et la base, conduisant à la précipitation d'un sel blanc ionique : le carboxylate d'ammonium (R-COO- + NH4+).",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q1",
            "type": "mcq",
            "prompt": "Quel produit solide obtient-on immédiatement lorsqu'on mélange à froid de l'acide éthanoïque et de l'ammoniac sans chauffer ?",
            "options": [
              "De l'éthanamide pur",
              "De l'éthanoate d'ammonium (sel ionique solide)",
              "De l'éthylamine",
              "Du nitrate d'ammonium et du méthane"
            ],
            "correctAnswerIndex": 1,
            "explanation": "À froid, la réaction est un simple transfert de proton H+ : CH3-COOH + NH3 -> CH3-COO- + NH4+ (éthanoate d'ammonium)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La deuxième étape : déshydratation par chauffage thermique",
          "stepTheme": "Synthèse en 2 étapes",
          "stepBadge": "Déshydratation à chaud",
          "paragraphText": "Pour transformer le carboxylate d'ammonium en amide, il est obligatoire de le chauffer fortement à l'état sec (thermo-déshydratation) : le sel perd une molécule d'eau pour donner l'amide primaire non substitué : R-COO- NH4+ --(chauffage)--> R-CO-NH2 + H2O.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q2",
            "type": "mcq",
            "prompt": "Quelle opération physique est indispensable pour convertir le propanoate d'ammonium solide en propanamide ?",
            "options": [
              "Dissoudre le sel dans un grand volume d'eau glacée.",
              "Chauffer fortement le sel d'ammonium sec pour provoquer l'élimination thermique d'une molécule d'eau.",
              "Exposer le sel à des rayons ultraviolets.",
              "Ajouter de la poudre de zinc métallique."
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'apport d'énergie thermique (chauffage) qui déclenche la pyrolyse déshydratante du sel en propanamide et vapeur d'eau."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Action d'un chlorure d'acyle sur l'ammoniac : supériorité synthétique",
          "stepTheme": "Synthèse sur chlorure",
          "stepBadge": "Rapide et totale",
          "paragraphText": "Faire réagir un chlorure d'acyle avec l'ammoniac permet de s'affranchir du sel intermédiaire et du chauffage : la réaction se déroule en une seule étape, instantanée, totale et très exothermique dès 0 °C : R-CO-Cl + NH3 -> R-CO-NH2 + HCl (le HCl formé étant généralement neutralisé par un deuxième équivalent de base).",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q3",
            "type": "mcq",
            "prompt": "Quels sont les deux avantages majeurs de la préparation d'un amide à partir d'un chlorure d'acyle plutôt qu'à partir d'un acide carboxylique ?",
            "options": [
              "Elle utilise moins d'électricité et ne dégage aucune chaleur.",
              "Elle se fait en une seule étape directe et la réaction est rapide et totale sans nécessiter de chauffage prolongé.",
              "Elle produit simultanément un alcool et un aldéhyde.",
              "Elle ne nécessite aucun réactif azoté."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La grande réactivité du chlorure d'acyle permet une synthèse quantitative directe en une étape sans passer par l'isolement puis la pyrolyse du sel d'ammonium."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Nomenclature des amides primaires, secondaires et tertiaires",
          "stepTheme": "Nomenclature des amides",
          "stepBadge": "Préfixe N-",
          "paragraphText": "Règle IUPAC pour les amides substitués sur l'azote :\n- Si l'azote porte un seul groupe alkyle R' : nom de la chaîne principale terminé par 'amide', précédé de 'N-alkyle' (ex : N-éthylpropanamide).\n- Si l'azote porte deux groupes alkyles identiques : 'N,N-dialkyle...amide' (ex : N,N-diméthyléthanamide).\n- Si les deux groupes sont différents : énoncer par ordre alphabétique (ex : N-éthyl-N-méthylbutanamide).",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q4",
            "type": "mcq",
            "prompt": "Quel est le nom officiel de l'amide suivant : CH3-CH2-CO-N(CH3)-CH2-CH3 ?",
            "options": [
              "N-éthyl-N-méthylpropanamide",
              "N-méthyl-N-éthylpropanamide",
              "Diéthylméthylamide",
              "Hexanamide substitué"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La chaîne acyle CH3-CH2-CO- compte 3 carbones (propanamide). Les deux substituants sur l'azote sont un éthyle et un méthyle : par ordre alphabétique, 'éthyl' précède 'méthyl' -> N-éthyl-N-méthylpropanamide."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La liaison peptidique : une liaison amide fondamentale du vivant",
          "stepTheme": "Biochimie des amides",
          "stepBadge": "Liaison peptidique",
          "paragraphText": "En biochimie, la liaison qui unit deux acides aminés pour former des peptides et des protéines est rigoureusement une fonction amide : -CO-NH-. Elle résulte de la condensation du groupe carboxyle d'un acide aminé avec le groupe amine primaire de l'acide aminé suivant.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q5",
            "type": "mcq",
            "prompt": "À quelle famille chimique de dérivés d'acides carboxyliques appartient la liaison peptidique responsable de la structure des protéines ?",
            "options": [
              "Famille des esters",
              "Famille des anhydrides d'acides",
              "Famille des amides",
              "Famille des chlorures d'acyle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La liaison peptidique -CO-NH- est une fonction amide secondaire reliant le carboxyle d'un acide aminé à l'amine d'un autre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège d'examen : Ne pas confondre les classes d'amines et les classes d'amides",
          "stepTheme": "Piège de classification",
          "stepBadge": "Classes comparées",
          "paragraphText": "Attention : pour un amide, la classe dépend du nombre de groupes carbonés liés à l'atome d'AZOTE (et non au carbone carbonyle) : si l'azote est lié à 0 carbone supplémentaire (-NH2), l'amide est dit primaire ou non substitué ; s'il est lié à 1 carbone supplémentaire (-NHR), l'amide est secondaire ; s'il est lié à 2 carbones (-NRR'), il est tertiaire.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q6",
            "type": "mcq",
            "prompt": "On considère la molécule d'acétamide CH3-CO-NH2. Quelle est sa classe exacte ?",
            "options": [
              "Amide primaire (non substitué)",
              "Amide secondaire",
              "Amide tertiaire",
              "Amine quaternaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'atome d'azote ne porte aucun groupe alkyle supplémentaire (il porte 2 atomes H) : c'est un amide primaire non substitué."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Détermination de la structure d'un amide à partir de sa masse molaire",
          "stepTheme": "Stœchiométrie",
          "stepBadge": "Calcul d'analyse",
          "paragraphText": "Un amide primaire aliphatique saturé répond à la formule générale CnH(2n+1)ON. Sa masse molaire s'écrit M = 12n + (2n+1) + 16 + 14 = 14n + 31 g/mol. La connaissance de M permet de déterminer immédiatement n = (M - 31) / 14.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q7",
            "type": "mcq",
            "prompt": "Un amide primaire non substitué A a une masse molaire moléculaire M = 73 g/mol. Quel est son nom systématique IUPAC ?",
            "options": [
              "Méthanamide (M = 45 g/mol)",
              "Éthanamide (M = 59 g/mol)",
              "Propanamide (M = 73 g/mol)",
              "Butanamide (M = 87 g/mol)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "14n + 31 = 73 => 14n = 42 => n = 3 atomes de carbone. Il s'agit du propanamide CH3-CH2-CO-NH2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q1",
          "type": "mcq",
          "prompt": "Quel produit solide obtient-on immédiatement lorsqu'on mélange à froid de l'acide éthanoïque et de l'ammoniac sans chauffer ?",
          "options": [
            "De l'éthanamide pur",
            "De l'éthanoate d'ammonium (sel ionique solide)",
            "De l'éthylamine",
            "Du nitrate d'ammonium et du méthane"
          ],
          "correctAnswerIndex": 1,
          "explanation": "À froid, la réaction est un simple transfert de proton H+ : CH3-COOH + NH3 -> CH3-COO- + NH4+ (éthanoate d'ammonium)."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q2",
          "type": "mcq",
          "prompt": "Quelle opération physique est indispensable pour convertir le propanoate d'ammonium solide en propanamide ?",
          "options": [
            "Dissoudre le sel dans un grand volume d'eau glacée.",
            "Chauffer fortement le sel d'ammonium sec pour provoquer l'élimination thermique d'une molécule d'eau.",
            "Exposer le sel à des rayons ultraviolets.",
            "Ajouter de la poudre de zinc métallique."
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'apport d'énergie thermique (chauffage) qui déclenche la pyrolyse déshydratante du sel en propanamide et vapeur d'eau."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q3",
          "type": "mcq",
          "prompt": "Quels sont les deux avantages majeurs de la préparation d'un amide à partir d'un chlorure d'acyle plutôt qu'à partir d'un acide carboxylique ?",
          "options": [
            "Elle utilise moins d'électricité et ne dégage aucune chaleur.",
            "Elle se fait en une seule étape directe et la réaction est rapide et totale sans nécessiter de chauffage prolongé.",
            "Elle produit simultanément un alcool et un aldéhyde.",
            "Elle ne nécessite aucun réactif azoté."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La grande réactivité du chlorure d'acyle permet une synthèse quantitative directe en une étape sans passer par l'isolement puis la pyrolyse du sel d'ammonium."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q4",
          "type": "mcq",
          "prompt": "Quel est le nom officiel de l'amide suivant : CH3-CH2-CO-N(CH3)-CH2-CH3 ?",
          "options": [
            "N-éthyl-N-méthylpropanamide",
            "N-méthyl-N-éthylpropanamide",
            "Diéthylméthylamide",
            "Hexanamide substitué"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La chaîne acyle CH3-CH2-CO- compte 3 carbones (propanamide). Les deux substituants sur l'azote sont un éthyle et un méthyle : par ordre alphabétique, 'éthyl' précède 'méthyl' -> N-éthyl-N-méthylpropanamide."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q5",
          "type": "mcq",
          "prompt": "À quelle famille chimique de dérivés d'acides carboxyliques appartient la liaison peptidique responsable de la structure des protéines ?",
          "options": [
            "Famille des esters",
            "Famille des anhydrides d'acides",
            "Famille des amides",
            "Famille des chlorures d'acyle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La liaison peptidique -CO-NH- est une fonction amide secondaire reliant le carboxyle d'un acide aminé à l'amine d'un autre."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q6",
          "type": "mcq",
          "prompt": "On considère la molécule d'acétamide CH3-CO-NH2. Quelle est sa classe exacte ?",
          "options": [
            "Amide primaire (non substitué)",
            "Amide secondaire",
            "Amide tertiaire",
            "Amine quaternaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'atome d'azote ne porte aucun groupe alkyle supplémentaire (il porte 2 atomes H) : c'est un amide primaire non substitué."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p05_q7",
          "type": "mcq",
          "prompt": "Un amide primaire non substitué A a une masse molaire moléculaire M = 73 g/mol. Quel est son nom systématique IUPAC ?",
          "options": [
            "Méthanamide (M = 45 g/mol)",
            "Éthanamide (M = 59 g/mol)",
            "Propanamide (M = 73 g/mol)",
            "Butanamide (M = 87 g/mol)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "14n + 31 = 73 => 14n = 42 => n = 3 atomes de carbone. Il s'agit du propanamide CH3-CH2-CO-NH2."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06",
      "order": 6,
      "title": "Les esters : Estérification directe équilibrée vs indirecte totale, hydrolyse",
      "summary": "Estérification directe (lente, athermique, réversible, limitée à 67% pour alcool primaire), hydrolyse d'ester, estérification indirecte sur chlorure d'acyle ou anhydride (totale, rapide, exothermique), et nomenclature.",
      "conceptExplanation": "Les esters sont parmi les dérivés d'acides les plus étudiés au Baccalauréat en raison des deux voies de synthèse antagonistes qui permettent d'illustrer la notion d'équilibre chimique face à une réaction totale.\n\n1. L'estérification directe (réaction réversible et équilibrée) :\nC'est la réaction entre un acide carboxylique et un alcool :\nR-COOH + R'-OH <=====> R-COO-R' + H2O.\nSes quatre caractéristiques fondamentales :\n- Lente : nécessite un chauffage ou un catalyseur acide (quelques gouttes de H2SO4 concentré) pour être accélérée sans modifier l'état final.\n- Athermique : la réaction ne dégage ni n'absorbe de chaleur (Delta H = 0) ; par conséquent, la température augmente la vitesse mais ne modifie pas le rendement à l'équilibre.\n- Réversible : l'ester et l'eau formés réagissent en sens inverse (réaction d'hydrolyse de l'ester).\n- Limitée par un équilibre chimique : pour un mélange équimolaire initial d'acide et d'alcool, le rendement maximal dépend de la classe de l'alcool :\n  * Alcool primaire : rendement limite d'environ 67 % (2/3 d'ester formé).\n  * Alcool secondaire : rendement limite d'environ 60 %.\n  * Alcool tertiaire : rendement très faible (environ 5 %).\n\n2. L'hydrolyse d'un ester (réaction inverse) :\nR-COO-R' + H2O <=====> R-COOH + R'-OH.\nElle possède rigoureusement les mêmes caractéristiques (lente, athermique, réversible, limitée à 33 % d'hydrolyse pour un mélange équimolaire initial ester + eau avec un ester d'alcool primaire).\n\n3. L'estérification indirecte (réaction totale et irréversible) :\nPour surmonter la limite des 67 % et obtenir un rendement de 100 %, on remplace l'acide carboxylique par un dérivé activé plus réactif :\n- À partir d'un chlorure d'acyle : R-CO-Cl + R'-OH ---> R-COO-R' + HCl(g).\n- À partir d'un anhydride d'acide : (R-CO)2O + R'-OH ---> R-COO-R' + R-COOH.\nCaractéristiques de l'estérification indirecte : TOTALE (irréversible, flèche simple, rendement 100 %), RAPIDE (dès température ambiante) et EXOTHERMIQUE.\n\n4. Nomenclature des esters :\nLe nom de l'ester s'obtient à partir de celui de l'acide en remplaçant la terminaison « oïque » par « oate », suivi de la préposition « de » et du nom du groupe alkyle R' lié à l'oxygène (ex : éthanoate de méthyle CH3-COO-CH3).",
      "keyRule": "Acide + Alcool ⇌ Ester + Eau : lente, athermique, réversible et limitée (67 % pour alcool I). Chlorure ou Anhydride + Alcool -> Ester : rapide, totale (100 %) et exothermique.",
      "formulas": [
        {
          "name": "Estérification directe équilibrée",
          "formula": "\\mathrm{R-COOH} + \\mathrm{R'-OH} \\rightleftharpoons \\mathrm{R-COO-R'} + \\mathrm{H_2O}",
          "note": "Lente, athermique, réversible, limitée (rendement ~67 % avec alcool primaire)"
        },
        {
          "name": "Estérification indirecte sur chlorure d'acyle",
          "formula": "\\mathrm{R-CO-Cl} + \\mathrm{R'-OH} \\longrightarrow \\mathrm{R-COO-R'} + \\mathrm{HCl}",
          "note": "Totale (100 %), rapide et exothermique"
        },
        {
          "name": "Estérification indirecte sur anhydride d'acide",
          "formula": "\\mathrm{(R-CO)_2O} + \\mathrm{R'-OH} \\longrightarrow \\mathrm{R-COO-R'} + \\mathrm{R-COOH}",
          "note": "Totale, rapide, exothermique sans dégagement de HCl"
        }
      ],
      "workedExample": {
        "title": "Calcul du rendement d'une estérification directe",
        "statement": "On mélange 1,0 mole d'acide éthanoïque et 1,0 mole d'éthanol en présence de quelques gouttes de H2SO4. À l'équilibre, on dose l'acide restant par de la soude et on trouve n_acide_restant = 0,33 mole. Détermine le rendement de l'estérification.",
        "methodSteps": [
          "Étape 1 : Calculer la quantité d'acide ayant réagi : n_acide_consommé = n_initial - n_restant = 1,0 - 0,33 = 0,67 mole.",
          "Étape 2 : D'après la stœchiométrie 1:1, la quantité d'ester formée à l'équilibre vaut n_ester = 0,67 mole.",
          "Étape 3 : Calculer le rendement r : r = (n_ester_obtenu / n_théorique_max) * 100 = (0,67 / 1,0) * 100 = 67 %."
        ],
        "conclusion": "Le rendement à l'équilibre est de 67 %, ce qui confirme l'usage d'un alcool primaire."
      },
      "visualSchema": {
        "type": "custom_svg",
        "title": "Tableau comparatif officiel : Estérification directe vs Estérification indirecte",
        "tableData": {
          "headers": [
            "Critère",
            "Estérification directe",
            "Estérification indirecte (Chlorure d'acyle)",
            "Estérification indirecte (Anhydride d'acide)"
          ],
          "rows": [
            [
              "Réactifs",
              "Acide carboxylique + Alcool",
              "Chlorure d'acyle + Alcool",
              "Anhydride d'acide + Alcool"
            ],
            [
              "Vitesse",
              "Lente (des heures à reflux)",
              "Très rapide (quelques secondes)",
              "Rapide"
            ],
            [
              "Caractère thermique",
              "Athermique (Delta H = 0)",
              "Exothermique",
              "Exothermique"
            ],
            [
              "Réversibilité",
              "Réversible (double flèche)",
              "Totale (flèche simple)",
              "Totale (flèche simple)"
            ],
            [
              "Rendement maximal",
              "Limité (~67 % pour alcool I)",
              "Total (100 %)",
              "Total (100 %)"
            ],
            [
              "Sous-produit",
              "Eau H2O",
              "Chlorure d'hydrogène HCl (gaz)",
              "Acide carboxylique R-COOH"
            ]
          ]
        }
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les quatre caractéristiques de l'estérification directe",
          "stepTheme": "Estérification directe",
          "stepBadge": "Caractéristiques",
          "paragraphText": "L'estérification directe entre un acide carboxylique et un alcool présente quatre attributs fondamentaux immuables : elle est lente (vitesse faible), athermique (elle n'échange aucune chaleur avec l'extérieur), réversible (l'ester et l'eau se recombinent) et limitée (l'avancement final xf est inférieur à l'avancement maximal xmax).",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q1",
            "type": "mcq",
            "prompt": "Quelles sont les quatre propriétés caractéristiques fondamentales de la réaction d'estérification directe entre un acide carboxylique et un alcool ?",
            "options": [
              "Rapide, totale, exothermique et irréversible.",
              "Lente, athermique, réversible et limitée par un état d'équilibre dynamique.",
              "Instantanée, athermique, explosive et complète.",
              "Lente, endothermique, totale et spontanée."
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'estérification directe est typiquement lente, athermique (sa constante d'équilibre K ne dépend pas de la température), réversible et limitée par l'hydrolyse inverse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Rendement selon la classe de l'alcool dans un mélange équimolaire",
          "stepTheme": "Rendement d'équilibre",
          "stepBadge": "67 % / 60 % / 5 %",
          "paragraphText": "Dans un mélange équimolaire initial (1 mol d'acide + 1 mol d'alcool), le rendement à l'équilibre chimique est strictement gouverné par l'encombrement stérique de l'alcool :\n- Alcool primaire : 67 % (2/3 d'ester)\n- Alcool secondaire : 60 %\n- Alcool tertiaire : seulement 5 % (déshydratation compétitive en alcène).",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q2",
            "type": "mcq",
            "prompt": "On fait réagir 1 mole d'acide éthanoïque avec 1 mole d'un alcool inconnu X. À l'équilibre, on ne recueille que 0,05 mole d'ester. Quelle est la classe de l'alcool X ?",
            "options": [
              "Alcool primaire",
              "Alcool secondaire",
              "Alcool tertiaire",
              "Phénol aromatique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un rendement d'estérification directe de seulement 5 % (0,05 mol pour 1 mol initiale) est la signature expérimentale caractéristique d'un alcool tertiaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Méthodes pour déplacer l'équilibre et augmenter le rendement",
          "stepTheme": "Déplacement d'équilibre",
          "stepBadge": "Amélioration du rendement",
          "paragraphText": "D'après la loi de Le Chatelier, pour déplacer l'équilibre de l'estérification directe et augmenter le rendement au-delà de 67 %, on dispose de deux leviers chimiques : 1) Introduire l'un des réactifs en large excès (généralement l'acide ou l'alcool le moins cher) ; 2) Éliminer l'un des produits au fur et à mesure de sa formation (distillation de l'ester s'il est le plus volatil, ou extraction de l'eau à l'aide d'un appareil de Dean-Stark).",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q3",
            "type": "mcq",
            "prompt": "Comment peut-on déplacer l'équilibre de l'estérification directe vers la formation accrue d'ester sans changer de réactifs ?",
            "options": [
              "En augmentant fortement la température du ballon (la réaction étant athermique).",
              "En éliminant l'eau au fur et à mesure de sa formation à l'aide d'un appareil de Dean-Stark ou en introduisant l'alcool en large excès.",
              "En ajoutant une masse importante d'eau liquide dès le début.",
              "En réalisant la réaction dans l'obscurité totale."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Éliminer un produit (l'eau) ou mettre un réactif en excès déplace l'équilibre dans le sens direct selon le principe de Le Chatelier."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Rôle du catalyseur acide et de la température",
          "stepTheme": "Cinétique d'estérification",
          "stepBadge": "Catalyseur H2SO4",
          "paragraphText": "L'ajout de quelques gouttes d'acide sulfurique concentré H2SO4 et le chauffage à reflux augmentent considérablement la vitesse de réaction (on atteint l'équilibre en quelques dizaines de minutes au lieu de plusieurs mois à froid), mais NE MODIFIENT EN RIEN la composition du mélange à l'équilibre ni le rendement final (qui reste fixé à 67 % pour un alcool primaire équimolaire).",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q4",
            "type": "mcq",
            "prompt": "Quel est l'effet précis de l'ajout d'ions H+ (catalyseur H2SO4) et de l'augmentation de la température sur la réaction d'estérification directe ?",
            "options": [
              "Ils augmentent le rendement final de 67 % à 100 %.",
              "Ils accélèrent la réaction (rôle cinétique) pour atteindre l'état d'équilibre beaucoup plus rapidement, sans modifier la position de l'équilibre ni le rendement final.",
              "Ils empêchent l'hydrolyse inverse de se produire.",
              "Ils changent la classe de l'alcool utilisé."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un catalyseur et la température n'ont qu'un rôle cinétique : ils réduisent le temps nécessaire pour parvenir à l'équilibre sans modifier la constante K ni le rendement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Estérification indirecte : rapidité, exothermicité et rendement total de 100 %",
          "stepTheme": "Estérification indirecte",
          "stepBadge": "Rendement 100 %",
          "paragraphText": "En remplaçant l'acide par son chlorure d'acyle ou son anhydride, la réaction avec l'alcool devient TOTALE, RAPIDE et EXOTHERMIQUE. L'absence d'eau parmi les produits élimine tout risque d'hydrolyse compétitive. Le rendement atteint 100 % même avec les alcools tertiaires encombrés.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q5",
            "type": "mcq",
            "prompt": "On désire préparer du propanoate de méthyle avec un rendement quantitatif de 100 % en quelques minutes à température ambiante. Quel couple de réactifs doit-on choisir ?",
            "options": [
              "Acide propanoïque + Méthanol (avec catalyseur acide)",
              "Chlorure de propanoyle + Méthanol",
              "Propane + Méthanol",
              "Propanal + Méthanal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le chlorure de propanoyle réagit avec le méthanol dans une réaction totale, rapide et irréversible à 100 % : CH3-CH2-CO-Cl + CH3-OH -> CH3-CH2-COO-CH3 + HCl."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Règles officielles de nomenclature des esters",
          "stepTheme": "Nomenclature des esters",
          "stepBadge": "...oate de ...yle",
          "paragraphText": "Pour nommer un ester R-COO-R' :\n1) Nommer la partie acyle R-CO- dérivée de l'acide en remplaçant la terminaison 'oïque' par 'oate' ;\n2) Ajouter la préposition 'de' ;\n3) Nommer le groupe alkyle R' fixé sur l'oxygène avec la terminaison 'yle' (ex : éthanoate d'isopropyle ou éthanoate de 1-méthyléthyle).",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q6",
            "type": "mcq",
            "prompt": "Quel est le nom systématique IUPAC de l'ester de formule semi-développée : H-COO-CH(CH3)-CH3 ?",
            "options": [
              "Éthanoate d'éthyle",
              "Méthanoate de 1-méthyléthyle (ou méthanoate d'isopropyle)",
              "Propanoate de méthyle",
              "Méthanoate de propyle linéaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Partie acyle : H-CO- (dérive de l'acide méthanoïque -> méthanoate). Partie alkyle : -CH(CH3)2 (groupe 1-méthyléthyle ou isopropyle) : méthanoate de 1-méthyléthyle."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Identification d'un ester inconnu à partir de son hydrolyse",
          "stepTheme": "Problème type Bac",
          "stepBadge": "Déduction structurale",
          "paragraphText": "Un classique du Baccalauréat consiste à hydrolyser un ester E pour obtenir un acide A et un alcool B, puis à identifier A par dosage acido-basique et B par oxydation ménagée. La formule de l'ester E résulte ensuite simplement de la combinaison de la partie acyle de A et du groupe alkyle de B.",
          "exercise": {
            "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q7",
            "type": "mcq",
            "prompt": "L'hydrolyse d'un ester E de formule C5H10O2 donne un acide A contenant 2 atomes de carbone et un alcool B. L'oxydation ménagée de B donne un produit qui réagit avec la 2,4-DNPH mais ne réagit pas avec la liqueur de Fehling. Quelle est la formule semi-développée et le nom de l'ester E ?",
            "options": [
              "CH3-COO-CH2-CH2-CH3 (éthanoate de propyle)",
              "CH3-COO-CH(CH3)-CH3 (éthanoate de 1-méthyléthyle ou d'isopropyle)",
              "CH3-CH2-COO-CH2-CH3 (propanoate d'éthyle)",
              "H-COO-CH2-CH(CH3)-CH3 (méthanoate d'isobutyle)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Acide A à 2 carbones = acide éthanoïque CH3-COOH. Le produit d'oxydation de B réagit à la 2,4-DNPH mais pas à Fehling : c'est une cétone (la propanone), donc B est le propan-2-ol CH3-CH(OH)-CH3. L'ester E est donc l'éthanoate de 1-méthyléthyle (ou éthanoate d'isopropyle) CH3-COO-CH(CH3)2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q1",
          "type": "mcq",
          "prompt": "Quelles sont les quatre propriétés caractéristiques fondamentales de la réaction d'estérification directe entre un acide carboxylique et un alcool ?",
          "options": [
            "Rapide, totale, exothermique et irréversible.",
            "Lente, athermique, réversible et limitée par un état d'équilibre dynamique.",
            "Instantanée, athermique, explosive et complète.",
            "Lente, endothermique, totale et spontanée."
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'estérification directe est typiquement lente, athermique (sa constante d'équilibre K ne dépend pas de la température), réversible et limitée par l'hydrolyse inverse."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q2",
          "type": "mcq",
          "prompt": "On fait réagir 1 mole d'acide éthanoïque avec 1 mole d'un alcool inconnu X. À l'équilibre, on ne recueille que 0,05 mole d'ester. Quelle est la classe de l'alcool X ?",
          "options": [
            "Alcool primaire",
            "Alcool secondaire",
            "Alcool tertiaire",
            "Phénol aromatique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un rendement d'estérification directe de seulement 5 % (0,05 mol pour 1 mol initiale) est la signature expérimentale caractéristique d'un alcool tertiaire."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q3",
          "type": "mcq",
          "prompt": "Comment peut-on déplacer l'équilibre de l'estérification directe vers la formation accrue d'ester sans changer de réactifs ?",
          "options": [
            "En augmentant fortement la température du ballon (la réaction étant athermique).",
            "En éliminant l'eau au fur et à mesure de sa formation à l'aide d'un appareil de Dean-Stark ou en introduisant l'alcool en large excès.",
            "En ajoutant une masse importante d'eau liquide dès le début.",
            "En réalisant la réaction dans l'obscurité totale."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Éliminer un produit (l'eau) ou mettre un réactif en excès déplace l'équilibre dans le sens direct selon le principe de Le Chatelier."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q4",
          "type": "mcq",
          "prompt": "Quel est l'effet précis de l'ajout d'ions H+ (catalyseur H2SO4) et de l'augmentation de la température sur la réaction d'estérification directe ?",
          "options": [
            "Ils augmentent le rendement final de 67 % à 100 %.",
            "Ils accélèrent la réaction (rôle cinétique) pour atteindre l'état d'équilibre beaucoup plus rapidement, sans modifier la position de l'équilibre ni le rendement final.",
            "Ils empêchent l'hydrolyse inverse de se produire.",
            "Ils changent la classe de l'alcool utilisé."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un catalyseur et la température n'ont qu'un rôle cinétique : ils réduisent le temps nécessaire pour parvenir à l'équilibre sans modifier la constante K ni le rendement."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q5",
          "type": "mcq",
          "prompt": "On désire préparer du propanoate de méthyle avec un rendement quantitatif de 100 % en quelques minutes à température ambiante. Quel couple de réactifs doit-on choisir ?",
          "options": [
            "Acide propanoïque + Méthanol (avec catalyseur acide)",
            "Chlorure de propanoyle + Méthanol",
            "Propane + Méthanol",
            "Propanal + Méthanal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le chlorure de propanoyle réagit avec le méthanol dans une réaction totale, rapide et irréversible à 100 % : CH3-CH2-CO-Cl + CH3-OH -> CH3-CH2-COO-CH3 + HCl."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q6",
          "type": "mcq",
          "prompt": "Quel est le nom systématique IUPAC de l'ester de formule semi-développée : H-COO-CH(CH3)-CH3 ?",
          "options": [
            "Éthanoate d'éthyle",
            "Méthanoate de 1-méthyléthyle (ou méthanoate d'isopropyle)",
            "Propanoate de méthyle",
            "Méthanoate de propyle linéaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Partie acyle : H-CO- (dérive de l'acide méthanoïque -> méthanoate). Partie alkyle : -CH(CH3)2 (groupe 1-méthyléthyle ou isopropyle) : méthanoate de 1-méthyléthyle."
        },
        {
          "id": "terminale_c_chimie_l03_acides_carboxyliques_et_derives_p06_q7",
          "type": "mcq",
          "prompt": "L'hydrolyse d'un ester E de formule C5H10O2 donne un acide A contenant 2 atomes de carbone et un alcool B. L'oxydation ménagée de B donne un produit qui réagit avec la 2,4-DNPH mais ne réagit pas avec la liqueur de Fehling. Quelle est la formule semi-développée et le nom de l'ester E ?",
          "options": [
            "CH3-COO-CH2-CH2-CH3 (éthanoate de propyle)",
            "CH3-COO-CH(CH3)-CH3 (éthanoate de 1-méthyléthyle ou d'isopropyle)",
            "CH3-CH2-COO-CH2-CH3 (propanoate d'éthyle)",
            "H-COO-CH2-CH(CH3)-CH3 (méthanoate d'isobutyle)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Acide A à 2 carbones = acide éthanoïque CH3-COOH. Le produit d'oxydation de B réagit à la 2,4-DNPH mais pas à Fehling : c'est une cétone (la propanone), donc B est le propan-2-ol CH3-CH(OH)-CH3. L'ester E est donc l'éthanoate de 1-méthyléthyle (ou éthanoate d'isopropyle) CH3-COO-CH(CH3)2."
        }
      ]
    }
  ]
};
