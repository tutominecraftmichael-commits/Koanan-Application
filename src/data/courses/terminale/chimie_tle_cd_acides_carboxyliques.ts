import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 4 : Acides carboxyliques et dérivés » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1311
export const CHIMIE_TLE_CD_L04_ACIDES_CARBOXYLIQUES: CurriculumChapter = {
  "id": "terminale_c_chimie_l04_acides_carboxyliques",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 4,
  "title": "Leçon 4 : Acides carboxyliques et dérivés",
  "summary": "On définit les acides carboxyliques et leur nomenclature, puis on étudie leurs quatre dérivés (chlorures d'acyle, anhydrides, amides, esters) et les équations qui permettent de passer d'un acide à chacun de ses dérivés.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1311",
  "points": [
    {
      "id": "terminale_c_chimie_l04_acides_carboxyliques_p01",
      "order": 1,
      "title": "Les acides carboxyliques",
      "summary": "Le groupe carboxyle, la formule générale, la nomenclature et le caractère d'acide faible.",
      "conceptExplanation": "Les acides carboxyliques sont des composés organiques oxygénés de formule générale R–COOH, où R est un atome d'hydrogène ou un groupe alkyle ou aryle.\nLeur groupement fonctionnel est le groupement carboxyle –COOH.\nLa formule brute générale des monoacides carboxyliques est $\\mathrm{C_nH_{2n}O_2}$.\nLe nom d'un acide s'obtient en faisant suivre le mot « acide » du nom de l'hydrocarbure correspondant, dont le « e » final est remplacé par la terminaison « oïque » : l'acide éthanoïque est celui du vinaigre.\nLes acides carboxyliques sont des acides faibles : leur réaction avec l'eau est réversible et leur dissociation est partielle.",
      "keyRule": "Groupe carboxyle –COOH → nom en « acide …oïque » ; ce sont des acides faibles, partiellement dissociés dans l'eau.",
      "formulas": [
        {
          "name": "Formule générale des acides carboxyliques",
          "formula": "\\mathrm{R-COOH}",
          "note": "R est un atome d'hydrogène ou un groupe alkyle ou aryle."
        },
        {
          "name": "Formule brute générale des monoacides",
          "formula": "\\mathrm{C_nH_{2n}O_2}",
          "note": "n est le nombre d'atomes de carbone."
        },
        {
          "name": "Réaction avec l'eau",
          "formula": "\\mathrm{R-COOH + H_2O \\rightleftharpoons H_3O^+ + R-COO^-}",
          "note": "Réaction réversible : la dissociation est partielle."
        }
      ],
      "workedExample": {
        "title": "Nommer H–COOH et CH₃–COOH (activité d'application)",
        "statement": "Nomme les acides H–COOH et CH₃–COOH, et précise le comportement de l'acide méthanoïque dans l'eau.",
        "methodSteps": [
          "H–COOH a un seul carbone : c'est l'acide méthanoïque.",
          "CH₃–COOH (écrit aussi HOOC–CH₃) a deux carbones : c'est l'acide éthanoïque.",
          "Comme tous les acides carboxyliques, l'acide méthanoïque est un acide faible : dans l'eau, il est partiellement dissocié."
        ],
        "conclusion": "On retrouve la solution de l'activité : acide méthanoïque, acide éthanoïque, dissociation partielle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le groupement carboxyle",
          "stepTheme": "Le groupement carboxyle",
          "stepBadge": "Le groupement carboxyle",
          "paragraphText": "• Groupement carboxyle : le groupe –COOH, qui associe un carbonyle C=O et un hydroxyle –OH sur le même carbone.\nC'est le groupement fonctionnel des acides carboxyliques.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p01_q1",
            "type": "mcq",
            "prompt": "Le groupement fonctionnel des acides carboxyliques est :",
            "options": [
              "Le groupement carboxyle –COOH",
              "Le groupement hydroxyle –OH",
              "Le groupement carbonyle C=O seul",
              "Le groupement amine –NH₂"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé nomme le groupement fonctionnel : c'est le groupement carboxyle, –COOH."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule brute générale",
          "stepTheme": "La formule brute générale",
          "stepBadge": "La formule brute générale",
          "paragraphText": "La formule brute générale des monoacides carboxyliques est $\\mathrm{C_nH_{2n}O_2}$.\nLes deux atomes d'oxygène viennent du groupement carboxyle.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p01_q2",
            "type": "mcq",
            "prompt": "Quelle est la formule brute générale d'un monoacide carboxylique comportant n atomes de carbone ?",
            "options": [
              "$\\mathrm{C_nH_{2n}O}$",
              "$\\mathrm{C_nH_{2n}O_2}$",
              "$\\mathrm{C_nH_{2n+2}O}$",
              "$\\mathrm{C_nH_{2n+2}O_2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé donne $\\mathrm{C_nH_{2n}O_2}$ : deux oxygènes pour un seul groupe carboxyle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Nommer un acide carboxylique",
          "stepTheme": "Nommer un acide carboxylique",
          "stepBadge": "Nommer un acide carboxylique",
          "paragraphText": "Règle : le nom s'obtient en faisant suivre le mot « acide » du nom de l'hydrocarbure correspondant, le « e » final étant remplacé par « oïque ».\nExemples : CH₃–CH₂–COOH est l'acide propanoïque ; CH₃–CH₂–CH₂–COOH l'acide butanoïque.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p01_q3",
            "type": "mcq",
            "prompt": "Le composé CH₃–CH₂–COOH se nomme :",
            "options": [
              "L'acide propanoïque",
              "L'acide éthanoïque",
              "Le propanal",
              "Le propanoate de méthyle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Trois carbones et un groupe –COOH : c'est l'acide propanoïque."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Des acides faibles, partiellement dissociés",
          "stepTheme": "Des acides faibles, partiellement dissociés",
          "stepBadge": "Des acides faibles, partiellement dissociés",
          "paragraphText": "Les acides carboxyliques sont des acides faibles.\nLeur réaction avec l'eau est réversible : R–COOH + H₂O ⇌ H₃O⁺ + R–COO⁻ ; la dissociation est donc partielle.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p01_q4",
            "type": "mcq",
            "prompt": "Dans l'eau, l'acide méthanoïque est :",
            "options": [
              "Totalement dissocié",
              "Insoluble",
              "Partiellement dissocié",
              "Transformé en ester"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution de l'activité d'application le confirme : l'acide méthanoïque, acide faible, est partiellement dissocié dans l'eau."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le carbone du carboxyle compte dans la chaîne",
          "stepTheme": "Le carbone du carboxyle compte dans la chaîne",
          "stepBadge": "Le carbone du carboxyle compte dans la chaîne",
          "paragraphText": "Piège : oublier que le carbone du groupe –COOH fait partie de la chaîne principale.\nCH₃–CH₂–COOH compte donc 3 carbones au total : c'est l'acide propanoïque, et non butanoïque.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p01_q5",
            "type": "mcq",
            "prompt": "L'acide butanoïque a pour formule semi-développée :",
            "options": [
              "CH₃–COOH",
              "CH₃–CH₂–COOH",
              "H–COOH",
              "CH₃–CH₂–CH₂–COOH"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'acide butanoïque compte 4 carbones, dont celui du carboxyle : CH₃–CH₂–CH₂–COOH."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'acide du vinaigre",
          "stepTheme": "L'acide du vinaigre",
          "stepBadge": "L'acide du vinaigre",
          "paragraphText": "La situation d'apprentissage rappelle que le vinaigre contient un acide carboxylique.\nD'après la documentation du résumé, il s'agit de l'acide éthanoïque, l'un des plus importants intermédiaires organiques, fabriqué à raison de 5 millions de tonnes par an dans le monde.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p01_q6",
            "type": "mcq",
            "prompt": "L'acide carboxylique présent dans le vinaigre est :",
            "options": [
              "L'acide méthanoïque",
              "L'acide éthanoïque",
              "L'acide propanoïque",
              "L'acide benzoïque"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La documentation du résumé indique que l'acide éthanoïque se retrouve dans le vinaigre."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p01_q1",
          "type": "mcq",
          "prompt": "Le groupement fonctionnel des acides carboxyliques est :",
          "options": [
            "Le groupement carboxyle –COOH",
            "Le groupement hydroxyle –OH",
            "Le groupement carbonyle C=O seul",
            "Le groupement amine –NH₂"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé nomme le groupement fonctionnel : c'est le groupement carboxyle, –COOH."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p01_q2",
          "type": "mcq",
          "prompt": "Quelle est la formule brute générale d'un monoacide carboxylique comportant n atomes de carbone ?",
          "options": [
            "$\\mathrm{C_nH_{2n}O}$",
            "$\\mathrm{C_nH_{2n}O_2}$",
            "$\\mathrm{C_nH_{2n+2}O}$",
            "$\\mathrm{C_nH_{2n+2}O_2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé donne $\\mathrm{C_nH_{2n}O_2}$ : deux oxygènes pour un seul groupe carboxyle."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p01_q3",
          "type": "mcq",
          "prompt": "Le composé CH₃–CH₂–COOH se nomme :",
          "options": [
            "L'acide propanoïque",
            "L'acide éthanoïque",
            "Le propanal",
            "Le propanoate de méthyle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Trois carbones et un groupe –COOH : c'est l'acide propanoïque."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p01_q4",
          "type": "mcq",
          "prompt": "Dans l'eau, l'acide méthanoïque est :",
          "options": [
            "Totalement dissocié",
            "Insoluble",
            "Partiellement dissocié",
            "Transformé en ester"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution de l'activité d'application le confirme : l'acide méthanoïque, acide faible, est partiellement dissocié dans l'eau."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p01_q5",
          "type": "mcq",
          "prompt": "L'acide butanoïque a pour formule semi-développée :",
          "options": [
            "CH₃–COOH",
            "CH₃–CH₂–COOH",
            "H–COOH",
            "CH₃–CH₂–CH₂–COOH"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'acide butanoïque compte 4 carbones, dont celui du carboxyle : CH₃–CH₂–CH₂–COOH."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p01_q6",
          "type": "mcq",
          "prompt": "L'acide carboxylique présent dans le vinaigre est :",
          "options": [
            "L'acide méthanoïque",
            "L'acide éthanoïque",
            "L'acide propanoïque",
            "L'acide benzoïque"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La documentation du résumé indique que l'acide éthanoïque se retrouve dans le vinaigre."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l04_acides_carboxyliques_p02",
      "order": 2,
      "title": "Les chlorures d'acyle",
      "summary": "Obtenir un chlorure d'acyle avec SOCl₂ ou PCl₅, et le nommer en « chlorure de …oyle ».",
      "conceptExplanation": "Les chlorures d'acyle sont les dérivés d'acides où le –OH du carboxyle est remplacé par un atome de chlore (Z = Cl).\nOn les obtient à partir de l'acide carboxylique, soit avec le chlorure de thionyle SOCl₂ (il se dégage SO₂ et HCl), soit avec le pentachlorure de phosphore PCl₅ (il se forme POCl₃ et HCl).\nLe nom d'un chlorure d'acyle s'obtient à partir de celui de l'acide correspondant, en remplaçant « acide » par « chlorure de » et la terminaison « oïque » par « oyle ».",
      "keyRule": "Acide + SOCl₂ ou PCl₅ → chlorure d'acyle ; le nom passe de « acide …oïque » à « chlorure de …oyle ».",
      "formulas": [
        {
          "name": "Obtention avec le chlorure de thionyle",
          "formula": "\\mathrm{R-COOH + SOCl_2 \\longrightarrow R-COCl + SO_2 + HCl}",
          "note": "Le chlorure d'acyle remplace le –OH par Cl."
        },
        {
          "name": "Obtention avec le pentachlorure de phosphore",
          "formula": "\\mathrm{R-COOH + PCl_5 \\longrightarrow R-COCl + POCl_3 + HCl}",
          "note": "Deuxième voie d'obtention des chlorures d'acyle."
        }
      ],
      "workedExample": {
        "title": "Le composé B de l'exercice 2",
        "statement": "On fait réagir du chlorure de thionyle sur l'acide éthanoïque. Donne le nom du composé organique B obtenu.",
        "methodSteps": [
          "Le chlorure de thionyle transforme l'acide carboxylique en son chlorure d'acyle : CH₃–COOH devient CH₃–COCl.",
          "La fonction de B est donc « chlorure d'acyle », de groupe fonctionnel –COCl.",
          "Le nom se déduit de l'acide éthanoïque : chlorure d'éthanoyle."
        ],
        "conclusion": "B est le chlorure d'éthanoyle, conformément à la solution de l'exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un dérivé où Z = Cl",
          "stepTheme": "Un dérivé où Z = Cl",
          "stepBadge": "Un dérivé où Z = Cl",
          "paragraphText": "Les dérivés d'acides ont la formule générale R–CO–Z.\nPour les chlorures d'acyle, Z est un atome de chlore : la formule est R–COCl.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p02_q1",
            "type": "mcq",
            "prompt": "Dans un chlorure d'acyle R–CO–Z, le groupe Z est :",
            "options": [
              "Un atome de chlore",
              "Un groupe –O–R'",
              "Un groupe –NH₂",
              "Un groupe –COO–R'"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le tableau des dérivés du résumé donne Z = Cl pour les chlorures d'acyle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Obtention avec le chlorure de thionyle",
          "stepTheme": "Obtention avec le chlorure de thionyle",
          "stepBadge": "Obtention avec le chlorure de thionyle",
          "paragraphText": "Avec le chlorure de thionyle SOCl₂, l'acide carboxylique donne le chlorure d'acyle, du dioxyde de soufre et du chlorure d'hydrogène.\nÉquation : R–COOH + SOCl₂ → R–COCl + SO₂ + HCl.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p02_q2",
            "type": "mcq",
            "prompt": "La réaction d'un acide carboxylique avec le chlorure de thionyle produit, en plus du chlorure d'acyle :",
            "options": [
              "De l'eau et du CO₂",
              "Du dioxyde de soufre et du chlorure d'hydrogène",
              "De l'ammoniac",
              "Du dioxygène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'équation du résumé fait apparaître SO₂ et HCl comme coproduits."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Obtention avec le pentachlorure de phosphore",
          "stepTheme": "Obtention avec le pentachlorure de phosphore",
          "stepBadge": "Obtention avec le pentachlorure de phosphore",
          "paragraphText": "Avec le pentachlorure de phosphore PCl₅, on obtient aussi le chlorure d'acyle, accompagné de trichlorure de phosphoryle POCl₃ et de HCl.\nÉquation : R–COOH + PCl₅ → R–COCl + POCl₃ + HCl.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p02_q3",
            "type": "mcq",
            "prompt": "Quel réactif peut aussi transformer un acide carboxylique en chlorure d'acyle ?",
            "options": [
              "L'eau distillée",
              "L'ammoniac",
              "Le pentachlorure de phosphore PCl₅",
              "Un alcool"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé donne deux réactifs : le chlorure de thionyle SOCl₂ et le pentachlorure de phosphore PCl₅."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Nommer un chlorure d'acyle",
          "stepTheme": "Nommer un chlorure d'acyle",
          "stepBadge": "Nommer un chlorure d'acyle",
          "paragraphText": "Règle : on remplace « acide » par « chlorure de » et la terminaison « oïque » par « oyle ».\nExemple du résumé : l'acide éthanoïque correspond au chlorure d'éthanoyle, CH₃–COCl.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p02_q4",
            "type": "mcq",
            "prompt": "Le chlorure d'acyle dérivant de l'acide éthanoïque se nomme :",
            "options": [
              "Le chlorure d'éthanoate",
              "Le chlorure d'acétyle",
              "Le chlorure de méthanoyle",
              "Le chlorure d'éthanoyle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Acide éthanoïque » devient « chlorure d'éthanoyle » en appliquant la règle du résumé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le chlorure de 2-méthylpropanoyle",
          "stepTheme": "Le chlorure de 2-méthylpropanoyle",
          "stepBadge": "Le chlorure de 2-méthylpropanoyle",
          "paragraphText": "Piège : perdre la ramification en nommant le dérivé.\nLe composé (CH₃)₂CH–COCl dérive de l'acide 2-méthylpropanoïque : il se nomme chlorure de 2-méthylpropanoyle, comme dans les exemples du résumé.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p02_q5",
            "type": "mcq",
            "prompt": "Le composé (CH₃)₂CH–COCl se nomme :",
            "options": [
              "Le chlorure de 2-méthylpropanoyle",
              "Le chlorure de butanoyle",
              "Le chlorure de propanoyle",
              "Le chlorure d'éthanoyle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La chaîne ramifiée à 3 carbones (plus le carbone du carbonyle) correspond à l'acide 2-méthylpropanoïque : le dérivé est le chlorure de 2-méthylpropanoyle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le volume de HCl dégagé (exercice 2)",
          "stepTheme": "Le volume de HCl dégagé (exercice 2)",
          "stepBadge": "Le volume de HCl dégagé (exercice 2)",
          "paragraphText": "Dans l'exercice 2, on fait réagir SOCl₂ sur 3 g d'acide éthanoïque (M = 60 g/mol, soit 0,05 mol).\nLa solution calcule le volume de chlorure d'hydrogène dégagé : 1,2 L (avec un volume molaire de 24 L/mol).",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p02_q6",
            "type": "mcq",
            "prompt": "D'après l'exercice 2, la réaction de 3 g d'acide éthanoïque avec SOCl₂ dégage un volume de HCl de :",
            "options": [
              "0,6 L",
              "1,2 L",
              "2,4 L",
              "12 L"
            ],
            "correctAnswerIndex": 1,
            "explanation": "0,05 mol d'acide donne 0,05 mol de HCl, soit 0,05 × 24 = 1,2 L : c'est le résultat de la solution de l'exercice 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p02_q1",
          "type": "mcq",
          "prompt": "Dans un chlorure d'acyle R–CO–Z, le groupe Z est :",
          "options": [
            "Un atome de chlore",
            "Un groupe –O–R'",
            "Un groupe –NH₂",
            "Un groupe –COO–R'"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le tableau des dérivés du résumé donne Z = Cl pour les chlorures d'acyle."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p02_q2",
          "type": "mcq",
          "prompt": "La réaction d'un acide carboxylique avec le chlorure de thionyle produit, en plus du chlorure d'acyle :",
          "options": [
            "De l'eau et du CO₂",
            "Du dioxyde de soufre et du chlorure d'hydrogène",
            "De l'ammoniac",
            "Du dioxygène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'équation du résumé fait apparaître SO₂ et HCl comme coproduits."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p02_q3",
          "type": "mcq",
          "prompt": "Quel réactif peut aussi transformer un acide carboxylique en chlorure d'acyle ?",
          "options": [
            "L'eau distillée",
            "L'ammoniac",
            "Le pentachlorure de phosphore PCl₅",
            "Un alcool"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé donne deux réactifs : le chlorure de thionyle SOCl₂ et le pentachlorure de phosphore PCl₅."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p02_q4",
          "type": "mcq",
          "prompt": "Le chlorure d'acyle dérivant de l'acide éthanoïque se nomme :",
          "options": [
            "Le chlorure d'éthanoate",
            "Le chlorure d'acétyle",
            "Le chlorure de méthanoyle",
            "Le chlorure d'éthanoyle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Acide éthanoïque » devient « chlorure d'éthanoyle » en appliquant la règle du résumé."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p02_q5",
          "type": "mcq",
          "prompt": "Le composé (CH₃)₂CH–COCl se nomme :",
          "options": [
            "Le chlorure de 2-méthylpropanoyle",
            "Le chlorure de butanoyle",
            "Le chlorure de propanoyle",
            "Le chlorure d'éthanoyle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La chaîne ramifiée à 3 carbones (plus le carbone du carbonyle) correspond à l'acide 2-méthylpropanoïque : le dérivé est le chlorure de 2-méthylpropanoyle."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p02_q6",
          "type": "mcq",
          "prompt": "D'après l'exercice 2, la réaction de 3 g d'acide éthanoïque avec SOCl₂ dégage un volume de HCl de :",
          "options": [
            "0,6 L",
            "1,2 L",
            "2,4 L",
            "12 L"
          ],
          "correctAnswerIndex": 1,
          "explanation": "0,05 mol d'acide donne 0,05 mol de HCl, soit 0,05 × 24 = 1,2 L : c'est le résultat de la solution de l'exercice 2."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l04_acides_carboxyliques_p03",
      "order": 3,
      "title": "Les anhydrides d'acide",
      "summary": "Obtenir un anhydride par déshydratation de deux acides, et le nommer.",
      "conceptExplanation": "Un anhydride d'acide résulte de l'élimination d'une molécule d'eau entre deux molécules d'acides carboxyliques.\nCette déshydratation se fait par simple chauffage, en présence d'un déshydratant énergétique comme le décaoxyde de tétraphosphore P₄O₁₀.\nDans la formule générale R–CO–Z, le groupe Z d'un anhydride est –COO–R'.\nLe nom d'un anhydride s'obtient en remplaçant, dans celui de l'acide, le mot « acide » par le mot « anhydride » : l'anhydride éthanoïque vient de l'acide éthanoïque.",
      "keyRule": "Deux acides moins une molécule d'eau (chauffage, P₄O₁₀) = un anhydride d'acide.",
      "formulas": [
        {
          "name": "Formation d'un anhydride",
          "formula": "\\mathrm{R-COOH + R'-COOH \\xrightarrow{P_4O_{10},\\ \\Delta} R-CO-O-CO-R' + H_2O}",
          "note": "Déshydratation entre deux molécules d'acide."
        }
      ],
      "workedExample": {
        "title": "Nommer l'anhydride CH₃–CO–O–CO–CH₃",
        "statement": "Donne le nom de l'anhydride de formule CH₃–CO–O–CO–CH₃.",
        "methodSteps": [
          "Les deux parties de l'anhydride viennent du même acide, l'acide éthanoïque (2 carbones de chaque côté).",
          "On remplace le mot « acide » par « anhydride » dans le nom de l'acide."
        ],
        "conclusion": "C'est l'anhydride éthanoïque, l'exemple même du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une déshydratation entre deux acides",
          "stepTheme": "Une déshydratation entre deux acides",
          "stepBadge": "Une déshydratation entre deux acides",
          "paragraphText": "• Anhydride d'acide : dérivé résultant de l'élimination d'une molécule d'eau entre deux molécules d'acides carboxyliques.\nSa structure contient le motif –CO–O–CO–.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p03_q1",
            "type": "mcq",
            "prompt": "Un anhydride d'acide résulte :",
            "options": [
              "De l'élimination d'une molécule d'eau entre deux molécules d'acide",
              "De l'addition d'eau sur un acide",
              "De la réaction d'un acide avec un alcool",
              "De la chloration d'un acide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du résumé : une déshydratation intermoléculaire entre deux acides."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les conditions : chauffage et P₄O₁₀",
          "stepTheme": "Les conditions : chauffage et P₄O₁₀",
          "stepBadge": "Les conditions : chauffage et P₄O₁₀",
          "paragraphText": "La déshydratation se fait par simple chauffage, en présence d'un déshydratant énergétique.\nLe résumé cite le décaoxyde de tétraphosphore, P₄O₁₀.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p03_q2",
            "type": "mcq",
            "prompt": "La formation d'un anhydride d'acide nécessite :",
            "options": [
              "Un refroidissement intense",
              "Un chauffage en présence d'un déshydratant comme P₄O₁₀",
              "Une solution de soude",
              "La lumière du soleil"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé indique un simple chauffage en présence d'un déshydratant énergétique, le décaoxyde de tétraphosphore."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Nommer un anhydride",
          "stepTheme": "Nommer un anhydride",
          "stepBadge": "Nommer un anhydride",
          "paragraphText": "Règle : on remplace le mot « acide » par le mot « anhydride » dans le nom de l'acide.\nSi les deux acides sont différents, on cite les deux : anhydride éthanoïque et propanoïque pour CH₃–CO–O–CO–CH₂–CH₃.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p03_q3",
            "type": "mcq",
            "prompt": "L'anhydride obtenu à partir de deux molécules d'acide éthanoïque se nomme :",
            "options": [
              "L'anhydride méthanoïque",
              "L'acide éthanoïque anhydre",
              "L'anhydride éthanoïque",
              "L'éthanoate d'éthyle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On remplace « acide » par « anhydride » : anhydride éthanoïque."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le groupe caractéristique de l'anhydride",
          "stepTheme": "Le groupe caractéristique de l'anhydride",
          "stepBadge": "Le groupe caractéristique de l'anhydride",
          "paragraphText": "Piège : confondre le groupe de l'anhydride (–CO–O–CO–) avec celui de l'ester (–COO– lié à un seul carbonyle).\nDans le tableau de l'activité 2 du résumé, l'anhydride méthanoïque a pour groupe caractéristique C–O–C avec deux carbonyles.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p03_q4",
            "type": "mcq",
            "prompt": "Le groupe caractéristique d'un anhydride d'acide est :",
            "options": [
              "–COCl",
              "–COOH",
              "–COO–R'",
              "–CO–O–CO–"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'anhydride relie deux groupes carbonyle par un atome d'oxygène : –CO–O–CO–."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'anhydride, réactif d'estérification indirecte",
          "stepTheme": "L'anhydride, réactif d'estérification indirecte",
          "stepBadge": "L'anhydride, réactif d'estérification indirecte",
          "paragraphText": "Avec un alcool, un anhydride donne un ester et un acide carboxylique.\nCette estérification indirecte est totale, rapide et exothermique, contrairement à l'estérification directe.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p03_q5",
            "type": "mcq",
            "prompt": "La réaction d'un anhydride d'acide avec un alcool donne :",
            "options": [
              "Un ester et un acide carboxylique",
              "Un amide et de l'eau",
              "Deux esters",
              "Un chlorure d'acyle et de l'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le « cas des anhydrides » de l'estérification indirecte décrite dans le résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un anhydride mixte",
          "stepTheme": "Un anhydride mixte",
          "stepBadge": "Un anhydride mixte",
          "paragraphText": "Le résumé donne l'exemple de CH₃–CH₂–CO–O–CO–CH₃, formé à partir de l'acide propanoïque et de l'acide éthanoïque.\nSon nom cite les deux acides : anhydride éthanoïque et propanoïque.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p03_q6",
            "type": "mcq",
            "prompt": "L'anhydride CH₃–CO–O–CO–CH₂–CH₃ est dit « mixte » parce que :",
            "options": [
              "Il contient deux atomes d'oxygène",
              "Il provient de deux acides différents, éthanoïque et propanoïque",
              "Il réagit avec l'eau",
              "Il contient un atome de chlore"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ses deux moitiés viennent de deux acides différents, ce que son nom indique en citant les deux."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p03_q1",
          "type": "mcq",
          "prompt": "Un anhydride d'acide résulte :",
          "options": [
            "De l'élimination d'une molécule d'eau entre deux molécules d'acide",
            "De l'addition d'eau sur un acide",
            "De la réaction d'un acide avec un alcool",
            "De la chloration d'un acide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du résumé : une déshydratation intermoléculaire entre deux acides."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p03_q2",
          "type": "mcq",
          "prompt": "La formation d'un anhydride d'acide nécessite :",
          "options": [
            "Un refroidissement intense",
            "Un chauffage en présence d'un déshydratant comme P₄O₁₀",
            "Une solution de soude",
            "La lumière du soleil"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé indique un simple chauffage en présence d'un déshydratant énergétique, le décaoxyde de tétraphosphore."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p03_q3",
          "type": "mcq",
          "prompt": "L'anhydride obtenu à partir de deux molécules d'acide éthanoïque se nomme :",
          "options": [
            "L'anhydride méthanoïque",
            "L'acide éthanoïque anhydre",
            "L'anhydride éthanoïque",
            "L'éthanoate d'éthyle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On remplace « acide » par « anhydride » : anhydride éthanoïque."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p03_q4",
          "type": "mcq",
          "prompt": "Le groupe caractéristique d'un anhydride d'acide est :",
          "options": [
            "–COCl",
            "–COOH",
            "–COO–R'",
            "–CO–O–CO–"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'anhydride relie deux groupes carbonyle par un atome d'oxygène : –CO–O–CO–."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p03_q5",
          "type": "mcq",
          "prompt": "La réaction d'un anhydride d'acide avec un alcool donne :",
          "options": [
            "Un ester et un acide carboxylique",
            "Un amide et de l'eau",
            "Deux esters",
            "Un chlorure d'acyle et de l'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le « cas des anhydrides » de l'estérification indirecte décrite dans le résumé."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p03_q6",
          "type": "mcq",
          "prompt": "L'anhydride CH₃–CO–O–CO–CH₂–CH₃ est dit « mixte » parce que :",
          "options": [
            "Il contient deux atomes d'oxygène",
            "Il provient de deux acides différents, éthanoïque et propanoïque",
            "Il réagit avec l'eau",
            "Il contient un atome de chlore"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ses deux moitiés viennent de deux acides différents, ce que son nom indique en citant les deux."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l04_acides_carboxyliques_p04",
      "order": 4,
      "title": "Les amides",
      "summary": "Obtenir un amide depuis l'acide (deux étapes) ou depuis le chlorure d'acyle (une étape), et le nommer.",
      "conceptExplanation": "Les amides sont les dérivés où le groupe Z est –NH₂ (ou un groupe substitué –NHR, –NR₂).\nÀ partir d'un acide carboxylique et de l'ammoniac, la réaction se déroule en deux étapes : d'abord une réaction acide-base qui donne un carboxylate d'ammonium, puis la déshydratation de ce sel par chauffage, qui donne l'amide non substitué.\nÀ partir d'un chlorure d'acyle et de l'ammoniac, la réaction est rapide, totale et se déroule en une seule étape.\nAvec des amines primaires ou secondaires à la place de l'ammoniac, on obtient des amides secondaires ou tertiaires.\nLe nom d'un amide s'obtient en remplaçant le « e » final du nom de l'hydrocarbure par « amide », les substituants de l'azote étant précédés de la lettre N.",
      "keyRule": "Acide + NH₃ : deux étapes (sel d'ammonium, puis chauffage). Chlorure d'acyle + NH₃ : une étape, rapide et totale.",
      "formulas": [
        {
          "name": "Première étape : le carboxylate d'ammonium",
          "formula": "\\mathrm{R-COOH + NH_3 \\longrightarrow R-COO^- + NH_4^+}",
          "note": "Simple réaction acide-base."
        },
        {
          "name": "Deuxième étape : déshydratation par chauffage",
          "formula": "\\mathrm{R-COO^- + NH_4^+ \\xrightarrow{\\Delta} R-CONH_2 + H_2O}",
          "note": "On obtient un amide non substitué."
        },
        {
          "name": "À partir d'un chlorure d'acyle",
          "formula": "\\mathrm{R-COCl + NH_3 \\longrightarrow R-CONH_2 + HCl}",
          "note": "Réaction rapide, totale, en une seule étape."
        }
      ],
      "workedExample": {
        "title": "Du propanoïque au propanamide (exercice 5, résumé du chapitre acides)",
        "statement": "On traite l'acide propanoïque par PCl₅, puis le produit obtenu par l'ammoniac. Quel composé final obtient-on ?",
        "methodSteps": [
          "PCl₅ transforme l'acide propanoïque en chlorure de propanoyle, CH₃–CH₂–COCl.",
          "Le chlorure d'acyle réagit avec l'ammoniac en une étape : CH₃–CH₂–COCl + NH₃ → CH₃–CH₂–CONH₂ + HCl.",
          "Le produit est un amide : le propanamide."
        ],
        "conclusion": "On obtient le propanamide, un amide, comme dans la solution de l'exercice 5."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le groupe des amides : –CONH₂",
          "stepTheme": "Le groupe des amides : –CONH₂",
          "stepBadge": "Le groupe des amides : –CONH₂",
          "paragraphText": "• Amide : dérivé d'acide dont le groupe Z est un groupe azoté, –NH₂ pour un amide non substitué.\nLa formule générale est R–CO–NH₂, par exemple le méthanamide H–CO–NH₂.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p04_q1",
            "type": "mcq",
            "prompt": "Dans un amide non substitué R–CO–Z, le groupe Z est :",
            "options": [
              "–NH₂",
              "–Cl",
              "–O–R'",
              "–COO–R'"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le tableau des dérivés du résumé donne Z = NH₂ pour les amides."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Première étape : la réaction acide-base",
          "stepTheme": "Première étape : la réaction acide-base",
          "stepBadge": "Première étape : la réaction acide-base",
          "paragraphText": "À partir de l'acide, la première étape est une simple réaction acide-base avec l'ammoniac.\nElle aboutit à la formation d'un carboxylate d'ammonium : R–COOH + NH₃ → R–COO⁻ + NH₄⁺.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p04_q2",
            "type": "mcq",
            "prompt": "La réaction d'un acide carboxylique avec l'ammoniac donne d'abord :",
            "options": [
              "Un amide directement",
              "Un carboxylate d'ammonium",
              "Un ester",
              "Un chlorure d'acyle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé décrit la première étape comme une réaction acide-base conduisant au carboxylate d'ammonium."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Deuxième étape : la déshydratation par chauffage",
          "stepTheme": "Deuxième étape : la déshydratation par chauffage",
          "stepBadge": "Deuxième étape : la déshydratation par chauffage",
          "paragraphText": "Le carboxylate d'ammonium est ensuite déshydraté par chauffage.\nIl perd une molécule d'eau et donne l'amide non substitué R–CO–NH₂.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p04_q3",
            "type": "mcq",
            "prompt": "Pour passer du carboxylate d'ammonium à l'amide, il faut :",
            "options": [
              "Ajouter de l'eau",
              "Ajouter du chlorure de thionyle",
              "Chauffer pour déshydrater le sel",
              "Ajouter un alcool"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La deuxième étape du résumé est la déshydratation du carboxylate d'ammonium par chauffage."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "La voie directe par le chlorure d'acyle",
          "stepTheme": "La voie directe par le chlorure d'acyle",
          "stepBadge": "La voie directe par le chlorure d'acyle",
          "paragraphText": "Piège : décrire la formation d'un amide à partir d'un chlorure d'acyle comme une réaction en deux étapes.\nLe résumé précise qu'elle est rapide, totale et se déroule en une seule étape.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p04_q4",
            "type": "mcq",
            "prompt": "La réaction d'un chlorure d'acyle avec l'ammoniac est :",
            "options": [
              "Lente et limitée",
              "En deux étapes",
              "Réversible et athermique",
              "Rapide, totale et en une seule étape"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le contraste fait par le résumé entre la voie « acide » (deux étapes) et la voie « chlorure d'acyle » (une étape, rapide et totale)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Nommer un amide",
          "stepTheme": "Nommer un amide",
          "stepBadge": "Nommer un amide",
          "paragraphText": "Règle : on remplace le « e » final du nom de l'hydrocarbure par « amide », et chaque substituant de l'atome d'azote est précédé de la lettre N.\nExemples : méthanamide (amide primaire), N-méthyléthanamide (amide secondaire), N-éthyl-N-méthylpropanamide (amide tertiaire).",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p04_q5",
            "type": "mcq",
            "prompt": "Le composé CH₃–CO–NH–CH₃ se nomme :",
            "options": [
              "Le N-méthyléthanamide",
              "L'éthanamide",
              "Le N-méthyléthanoate",
              "La N-méthyléthanamine"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaîne éthane + suffixe « amide », avec un méthyle sur l'azote désigné par N- : c'est le N-méthyléthanamide, un amide secondaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Amides secondaires et tertiaires",
          "stepTheme": "Amides secondaires et tertiaires",
          "stepBadge": "Amides secondaires et tertiaires",
          "paragraphText": "Remarque du résumé : avec les amines primaires et secondaires à la place de l'ammoniac, on obtient des amides secondaires et tertiaires.\nL'exercice 1 cite ainsi le N-éthylpropanamide, CH₃–CH₂–CO–NH–C₂H₅.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p04_q6",
            "type": "mcq",
            "prompt": "En faisant réagir un chlorure d'acyle avec une amine primaire, on obtient :",
            "options": [
              "Un amide primaire",
              "Un amide secondaire",
              "Un ester",
              "Un anhydride"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'azote de l'amide garde un substituant carboné venu de l'amine : l'amide obtenu est secondaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p04_q1",
          "type": "mcq",
          "prompt": "Dans un amide non substitué R–CO–Z, le groupe Z est :",
          "options": [
            "–NH₂",
            "–Cl",
            "–O–R'",
            "–COO–R'"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le tableau des dérivés du résumé donne Z = NH₂ pour les amides."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p04_q2",
          "type": "mcq",
          "prompt": "La réaction d'un acide carboxylique avec l'ammoniac donne d'abord :",
          "options": [
            "Un amide directement",
            "Un carboxylate d'ammonium",
            "Un ester",
            "Un chlorure d'acyle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé décrit la première étape comme une réaction acide-base conduisant au carboxylate d'ammonium."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p04_q3",
          "type": "mcq",
          "prompt": "Pour passer du carboxylate d'ammonium à l'amide, il faut :",
          "options": [
            "Ajouter de l'eau",
            "Ajouter du chlorure de thionyle",
            "Chauffer pour déshydrater le sel",
            "Ajouter un alcool"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La deuxième étape du résumé est la déshydratation du carboxylate d'ammonium par chauffage."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p04_q4",
          "type": "mcq",
          "prompt": "La réaction d'un chlorure d'acyle avec l'ammoniac est :",
          "options": [
            "Lente et limitée",
            "En deux étapes",
            "Réversible et athermique",
            "Rapide, totale et en une seule étape"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le contraste fait par le résumé entre la voie « acide » (deux étapes) et la voie « chlorure d'acyle » (une étape, rapide et totale)."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p04_q5",
          "type": "mcq",
          "prompt": "Le composé CH₃–CO–NH–CH₃ se nomme :",
          "options": [
            "Le N-méthyléthanamide",
            "L'éthanamide",
            "Le N-méthyléthanoate",
            "La N-méthyléthanamine"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaîne éthane + suffixe « amide », avec un méthyle sur l'azote désigné par N- : c'est le N-méthyléthanamide, un amide secondaire."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p04_q6",
          "type": "mcq",
          "prompt": "En faisant réagir un chlorure d'acyle avec une amine primaire, on obtient :",
          "options": [
            "Un amide primaire",
            "Un amide secondaire",
            "Un ester",
            "Un anhydride"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'azote de l'amide garde un substituant carboné venu de l'amine : l'amide obtenu est secondaire."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l04_acides_carboxyliques_p05",
      "order": 5,
      "title": "Les esters : estérification directe et indirecte",
      "summary": "Deux voies pour faire un ester, aux caractéristiques opposées, et la nomenclature en « …oate de … ».",
      "conceptExplanation": "Les esters sont les dérivés où Z est un groupe –O–R'.\nL'estérification directe est la réaction entre un acide carboxylique et un alcool ; elle est lente, athermique, réversible et limitée. Sa réaction inverse est l'hydrolyse de l'ester, qui a les mêmes caractéristiques.\nL'estérification indirecte fait réagir un dérivé d'acide (chlorure d'acyle ou anhydride) avec un alcool ; elle est totale, rapide et exothermique.\nLe nom d'un ester s'obtient à partir de celui de l'acide : on supprime le mot « acide », on remplace « oïque » par « oate », et on ajoute « de » suivi du nom du groupe alkyle lié à l'oxygène.",
      "keyRule": "Directe : lente, athermique, réversible, limitée. Indirecte : rapide, totale, exothermique. Ce sont les deux listes à ne pas intervertir.",
      "formulas": [
        {
          "name": "Estérification directe",
          "formula": "\\mathrm{R-COOH + R'-OH \\rightleftharpoons R-COO-R' + H_2O}",
          "note": "Lente, athermique, réversible et limitée."
        },
        {
          "name": "Estérification indirecte (chlorure d'acyle)",
          "formula": "\\mathrm{R-COCl + R'-OH \\longrightarrow R-COO-R' + HCl}",
          "note": "Rapide, totale et exothermique."
        }
      ],
      "workedExample": {
        "title": "Nommer les esters des exemples du résumé",
        "statement": "Donne les noms des esters H–COO–CH₂–CH₃ et CH₃–COO–CH₃.",
        "methodSteps": [
          "H–COO–CH₂–CH₃ vient de l'acide méthanoïque et du groupe éthyle : méthanoate d'éthyle.",
          "CH₃–COO–CH₃ vient de l'acide éthanoïque et du groupe méthyle : éthanoate de méthyle."
        ],
        "conclusion": "Ce sont les deux exemples de nomenclature donnés dans le résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'estérification directe",
          "stepTheme": "L'estérification directe",
          "stepBadge": "L'estérification directe",
          "paragraphText": "• Estérification directe : réaction entre un acide carboxylique et un alcool, qui donne un ester et de l'eau.\nÉquation générale : R–COOH + R'–OH ⇌ R–COO–R' + H₂O.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p05_q1",
            "type": "mcq",
            "prompt": "L'estérification directe est la réaction entre :",
            "options": [
              "Un acide carboxylique et un alcool",
              "Un chlorure d'acyle et l'ammoniac",
              "Deux acides carboxyliques",
              "Un ester et l'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du résumé : l'estérification directe oppose un acide carboxylique à un alcool."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les quatre caractéristiques de l'estérification directe",
          "stepTheme": "Les quatre caractéristiques de l'estérification directe",
          "stepBadge": "Les quatre caractéristiques de l'estérification directe",
          "paragraphText": "L'estérification directe est lente, athermique, réversible et limitée.\n« Limitée » signifie qu'elle ne transforme jamais complètement les réactifs, même après un temps long.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p05_q2",
            "type": "mcq",
            "prompt": "L'estérification directe est une réaction :",
            "options": [
              "Rapide, totale et exothermique",
              "Lente, athermique, réversible et limitée",
              "Instantanée et irréversible",
              "Lente, endothermique et totale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les quatre caractéristiques énoncées dans le résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'hydrolyse d'un ester",
          "stepTheme": "L'hydrolyse d'un ester",
          "stepBadge": "L'hydrolyse d'un ester",
          "paragraphText": "• Hydrolyse d'un ester : réaction inverse de l'estérification directe, entre un ester et l'eau.\nElle redonne l'acide carboxylique et l'alcool, et possède les mêmes caractéristiques que l'estérification directe.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p05_q3",
            "type": "mcq",
            "prompt": "L'hydrolyse d'un ester donne :",
            "options": [
              "Un chlorure d'acyle et un alcool",
              "Un amide et de l'eau",
              "Un acide carboxylique et un alcool",
              "Deux acides carboxyliques"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'hydrolyse est l'inverse de l'estérification : elle régénère l'acide et l'alcool de départ."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'estérification indirecte",
          "stepTheme": "L'estérification indirecte",
          "stepBadge": "L'estérification indirecte",
          "paragraphText": "L'estérification indirecte fait réagir un dérivé d'acide (chlorure d'acyle ou anhydride) avec un alcool.\nElle est totale, rapide et exothermique : c'est la voie efficace pour préparer un ester en laboratoire.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p05_q4",
            "type": "mcq",
            "prompt": "L'estérification indirecte est une réaction :",
            "options": [
              "Lente et limitée",
              "Athermique et réversible",
              "Qui exige un chauffage prolongé",
              "Totale, rapide et exothermique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé oppose ces trois caractéristiques à celles de l'estérification directe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas intervertir les caractéristiques",
          "stepTheme": "Ne pas intervertir les caractéristiques",
          "stepBadge": "Ne pas intervertir les caractéristiques",
          "paragraphText": "Piège classique de la situation d'évaluation : attribuer à la réaction acide + alcool les propriétés de la réaction chlorure + alcool.\nAcide + alcool : lente et limitée ; chlorure d'acyle + alcool : rapide et totale, avec dégagement de HCl.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p05_q5",
            "type": "mcq",
            "prompt": "La réaction entre un chlorure d'acyle et un alcool dégage, en plus de l'ester :",
            "options": [
              "Du chlorure d'hydrogène HCl",
              "De l'eau uniquement",
              "Du dioxyde de carbone",
              "De l'ammoniac"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'équation du résumé montre HCl comme coproduit de l'estérification indirecte à partir d'un chlorure d'acyle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Nommer un ester",
          "stepTheme": "Nommer un ester",
          "stepBadge": "Nommer un ester",
          "paragraphText": "Règle : supprimer le mot « acide », remplacer « oïque » par « oate », ajouter « de » et le nom du groupe alkyle lié à l'oxygène.\nExemple : C₂H₅–COO–C₂H₅ est le propanoate d'éthyle (activité 2 du résumé).",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p05_q6",
            "type": "mcq",
            "prompt": "Le nom d'un ester s'obtient en remplaçant le suffixe « oïque » de l'acide par :",
            "options": [
              "« oyle »",
              "« oate »",
              "« amide »",
              "« ol »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Oate » est le suffixe des esters (éthanoate de méthyle) ; « oyle » est celui des chlorures d'acyle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p05_q1",
          "type": "mcq",
          "prompt": "L'estérification directe est la réaction entre :",
          "options": [
            "Un acide carboxylique et un alcool",
            "Un chlorure d'acyle et l'ammoniac",
            "Deux acides carboxyliques",
            "Un ester et l'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du résumé : l'estérification directe oppose un acide carboxylique à un alcool."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p05_q2",
          "type": "mcq",
          "prompt": "L'estérification directe est une réaction :",
          "options": [
            "Rapide, totale et exothermique",
            "Lente, athermique, réversible et limitée",
            "Instantanée et irréversible",
            "Lente, endothermique et totale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les quatre caractéristiques énoncées dans le résumé."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p05_q3",
          "type": "mcq",
          "prompt": "L'hydrolyse d'un ester donne :",
          "options": [
            "Un chlorure d'acyle et un alcool",
            "Un amide et de l'eau",
            "Un acide carboxylique et un alcool",
            "Deux acides carboxyliques"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'hydrolyse est l'inverse de l'estérification : elle régénère l'acide et l'alcool de départ."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p05_q4",
          "type": "mcq",
          "prompt": "L'estérification indirecte est une réaction :",
          "options": [
            "Lente et limitée",
            "Athermique et réversible",
            "Qui exige un chauffage prolongé",
            "Totale, rapide et exothermique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé oppose ces trois caractéristiques à celles de l'estérification directe."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p05_q5",
          "type": "mcq",
          "prompt": "La réaction entre un chlorure d'acyle et un alcool dégage, en plus de l'ester :",
          "options": [
            "Du chlorure d'hydrogène HCl",
            "De l'eau uniquement",
            "Du dioxyde de carbone",
            "De l'ammoniac"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équation du résumé montre HCl comme coproduit de l'estérification indirecte à partir d'un chlorure d'acyle."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p05_q6",
          "type": "mcq",
          "prompt": "Le nom d'un ester s'obtient en remplaçant le suffixe « oïque » de l'acide par :",
          "options": [
            "« oyle »",
            "« oate »",
            "« amide »",
            "« ol »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Oate » est le suffixe des esters (éthanoate de méthyle) ; « oyle » est celui des chlorures d'acyle."
        }
      ]
    },
    {
      "id": "terminale_c_chimie_l04_acides_carboxyliques_p06",
      "order": 6,
      "title": "Identifier un ester inconnu (situation d'évaluation)",
      "summary": "Retrouver la structure d'un ester à partir de son hydrolyse et de son pourcentage d'oxygène.",
      "conceptExplanation": "La situation d'évaluation étudie un ester saturé E de formule $\\mathrm{C_nH_{2n}O_2}$ contenant 31,37 % d'oxygène : sa masse molaire vaut 102 g/mol, ce qui donne $n = 5$.\nSon hydrolyse donne un acide A (solution conductrice, bleu de bromothymol jaune, 2 carbones : l'acide éthanoïque) et un alcool secondaire B.\nB est obtenu par hydratation du propène selon Markovnikov : c'est le propan-2-ol, dont l'oxydation donne la propanone D.\nL'ester E est donc l'éthanoate d'isopropyle, que l'on peut préparer par estérification directe (A + B) ou indirecte (chlorure d'éthanoyle + B).",
      "keyRule": "Hydrolyser l'ester pour le couper en son acide et son alcool, les identifier séparément, puis recoller : c'est la démarche gagnante.",
      "formulas": [
        {
          "name": "Masse molaire d'un ester saturé",
          "formula": "M = 14n + 32",
          "note": "M en g/mol, n = nombre total d'atomes de carbone de l'ester."
        }
      ],
      "workedExample": {
        "title": "La formule brute de l'ester E",
        "statement": "Vérifie que l'ester saturé E, qui contient 31,37 % d'oxygène, a pour formule brute $\\mathrm{C_5H_{10}O_2}$.",
        "methodSteps": [
          "Un ester contient deux atomes d'oxygène, soit 32 g d'oxygène par mole.",
          "La masse molaire vaut donc $M = 32 / 0{,}3137 \\approx 102\\ \\mathrm{g/mol}$.",
          "Pour un ester saturé $\\mathrm{C_nH_{2n}O_2}$, $M = 14n + 32$ ; on résout $14n + 32 = 102$, soit $n = 5$."
        ],
        "conclusion": "La formule brute de E est $\\mathrm{C_5H_{10}O_2}$, comme l'établit la résolution du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Le pourcentage d'oxygène donne la masse molaire",
          "stepTheme": "Le pourcentage d'oxygène donne la masse molaire",
          "stepBadge": "Le pourcentage d'oxygène donne la masse molaire",
          "paragraphText": "L'ester contient deux atomes d'oxygène, soit 32 g/mol d'oxygène.\nSi cela représente 31,37 % de la masse molaire, celle-ci vaut environ 102 g/mol.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p06_q1",
            "type": "mcq",
            "prompt": "Un ester saturé contient 31,37 % d'oxygène en masse. Sa masse molaire vaut environ :",
            "options": [
              "$88\\ \\mathrm{g/mol}$",
              "$102\\ \\mathrm{g/mol}$",
              "$116\\ \\mathrm{g/mol}$",
              "$74\\ \\mathrm{g/mol}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La résolution de la situation d'évaluation donne M = 102 g/mol."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Identifier l'acide A par le bleu de bromothymol",
          "stepTheme": "Identifier l'acide A par le bleu de bromothymol",
          "stepBadge": "Identifier l'acide A par le bleu de bromothymol",
          "paragraphText": "Le composé A, produit d'hydrolyse, est soluble dans l'eau, sa solution conduit le courant et le bleu de bromothymol y vire au jaune.\nCe sont les signes d'un acide carboxylique ; avec 2 carbones, c'est l'acide éthanoïque.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p06_q2",
            "type": "mcq",
            "prompt": "Le bleu de bromothymol vire au jaune dans la solution du composé A. A est donc :",
            "options": [
              "Une base",
              "Un alcool",
              "Un acide carboxylique",
              "Un ester"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le virage au jaune du BBT traduit le caractère acide : A est l'acide éthanoïque, d'après la résolution."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Identifier l'alcool B par son oxydation",
          "stepTheme": "Identifier l'alcool B par son oxydation",
          "stepBadge": "Identifier l'alcool B par son oxydation",
          "paragraphText": "L'oxydation ménagée de B donne D, qui réagit avec la 2,4-DNPH mais pas avec la liqueur de Fehling : D est une cétone.\nB est donc un alcool secondaire ; obtenu par hydratation du propène, c'est le propan-2-ol, et D est la propanone.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p06_q3",
            "type": "mcq",
            "prompt": "Le composé B s'oxyde en une cétone. B est donc :",
            "options": [
              "Un alcool primaire",
              "Un alcool tertiaire",
              "Un aldéhyde",
              "Un alcool secondaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Seuls les alcools secondaires s'oxydent en cétones : B est le propan-2-ol."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "DNPH positive + Fehling négative = cétone",
          "stepTheme": "DNPH positive + Fehling négative = cétone",
          "stepBadge": "DNPH positive + Fehling négative = cétone",
          "paragraphText": "Le raisonnement sur D est celui de la leçon sur les composés carbonylés.\nPrécipité jaune avec la DNPH : D est carbonylé ; pas de réaction avec Fehling : D n'est pas un aldéhyde, c'est une cétone.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p06_q4",
            "type": "mcq",
            "prompt": "Le composé D donne un précipité jaune avec la 2,4-DNPH mais ne réagit pas avec la liqueur de Fehling. D est :",
            "options": [
              "Une cétone",
              "Un aldéhyde",
              "Un alcool",
              "Un acide carboxylique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Carbonylé mais non réducteur : D est la propanone, une cétone."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Recoller les morceaux : l'ester E",
          "stepTheme": "Recoller les morceaux : l'ester E",
          "stepBadge": "Recoller les morceaux : l'ester E",
          "paragraphText": "A est l'acide éthanoïque et B le propan-2-ol : l'ester E est formé des deux parties reliées par –COO–.\nLa résolution le nomme éthanoate de méthyl-éthyle, ou éthanoate d'isopropyle.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p06_q5",
            "type": "mcq",
            "prompt": "L'ester E formé à partir de l'acide éthanoïque et du propan-2-ol se nomme :",
            "options": [
              "Le propanoate d'éthyle",
              "L'éthanoate d'isopropyle",
              "L'éthanoate d'éthyle",
              "Le propanoate de propyle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Partie acide : éthanoate ; partie alcool : isopropyle (le groupe du propan-2-ol). C'est le nom donné par la résolution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Deux synthèses de E à comparer",
          "stepTheme": "Deux synthèses de E à comparer",
          "stepBadge": "Deux synthèses de E à comparer",
          "paragraphText": "La réaction (1) oppose l'acide éthanoïque au propan-2-ol : c'est l'estérification directe, lente, limitée et athermique.\nLa réaction (2) oppose le chlorure d'éthanoyle F au propan-2-ol : rapide, totale et exothermique, avec dégagement de HCl.",
          "exercise": {
            "id": "terminale_c_chimie_l04_acides_carboxyliques_p06_q6",
            "type": "mcq",
            "prompt": "Pour préparer l'ester E rapidement et totalement, il vaut mieux utiliser :",
            "options": [
              "L'acide éthanoïque et le propan-2-ol",
              "Le chlorure d'éthanoyle et le propan-2-ol",
              "L'acide éthanoïque et l'eau",
              "L'anhydride éthanoïque et l'eau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La voie indirecte (chlorure d'acyle + alcool) est rapide, totale et exothermique, contrairement à l'estérification directe."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p06_q1",
          "type": "mcq",
          "prompt": "Un ester saturé contient 31,37 % d'oxygène en masse. Sa masse molaire vaut environ :",
          "options": [
            "$88\\ \\mathrm{g/mol}$",
            "$102\\ \\mathrm{g/mol}$",
            "$116\\ \\mathrm{g/mol}$",
            "$74\\ \\mathrm{g/mol}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La résolution de la situation d'évaluation donne M = 102 g/mol."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p06_q2",
          "type": "mcq",
          "prompt": "Le bleu de bromothymol vire au jaune dans la solution du composé A. A est donc :",
          "options": [
            "Une base",
            "Un alcool",
            "Un acide carboxylique",
            "Un ester"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le virage au jaune du BBT traduit le caractère acide : A est l'acide éthanoïque, d'après la résolution."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p06_q3",
          "type": "mcq",
          "prompt": "Le composé B s'oxyde en une cétone. B est donc :",
          "options": [
            "Un alcool primaire",
            "Un alcool tertiaire",
            "Un aldéhyde",
            "Un alcool secondaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Seuls les alcools secondaires s'oxydent en cétones : B est le propan-2-ol."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p06_q4",
          "type": "mcq",
          "prompt": "Le composé D donne un précipité jaune avec la 2,4-DNPH mais ne réagit pas avec la liqueur de Fehling. D est :",
          "options": [
            "Une cétone",
            "Un aldéhyde",
            "Un alcool",
            "Un acide carboxylique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Carbonylé mais non réducteur : D est la propanone, une cétone."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p06_q5",
          "type": "mcq",
          "prompt": "L'ester E formé à partir de l'acide éthanoïque et du propan-2-ol se nomme :",
          "options": [
            "Le propanoate d'éthyle",
            "L'éthanoate d'isopropyle",
            "L'éthanoate d'éthyle",
            "Le propanoate de propyle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Partie acide : éthanoate ; partie alcool : isopropyle (le groupe du propan-2-ol). C'est le nom donné par la résolution."
        },
        {
          "id": "terminale_c_chimie_l04_acides_carboxyliques_p06_q6",
          "type": "mcq",
          "prompt": "Pour préparer l'ester E rapidement et totalement, il vaut mieux utiliser :",
          "options": [
            "L'acide éthanoïque et le propan-2-ol",
            "Le chlorure d'éthanoyle et le propan-2-ol",
            "L'acide éthanoïque et l'eau",
            "L'anhydride éthanoïque et l'eau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La voie indirecte (chlorure d'acyle + alcool) est rapide, totale et exothermique, contrairement à l'estérification directe."
        }
      ]
    }
  ]
};
