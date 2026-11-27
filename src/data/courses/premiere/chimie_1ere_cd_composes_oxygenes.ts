import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Quelques composés oxygénés » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Quelques composés oxygénés » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const CHIMIE_1ERE_CD_L05_COMPOSES_OXYGENES: CurriculumChapter = {
  "id": "premiere_c_chimie_l05_composes_oxygenes",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 5,
  "title": "Leçon 5 : Quelques composés oxygénés",
  "summary": "Un composé oxygéné comporte au moins un atome d'oxygène : on étudie les formules générales et la nomenclature des alcools, éthers-oxydes, aldéhydes, cétones, acides carboxyliques et esters, puis leur intérêt général.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Quelques composés oxygénés » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_chimie_l05_composes_oxygenes_p01",
      "order": 1,
      "title": "Les alcools",
      "summary": "Groupe hydroxyle sur un carbone tétragonal, formule $\\mathrm{C_nH_{2n+2}O}$ et suffixe « ol ».",
      "conceptExplanation": "Un alcool est un composé organique dans lequel un groupe hydroxyle –OH est fixé sur un atome de carbone tétragonal. Ce carbone est dit carbone fonctionnel.\nLa formule brute générale d'un alcool à chaîne carbonée saturée contenant n atomes de carbone est $\\mathrm{C_nH_{2n+2}O}$.\nLa nomenclature des alcools est semblable à celle des alcanes : le « e » final du nom de l'alcane analogue est remplacé par « ol », précédé de l'indice de position du carbone fonctionnel si cela est nécessaire.\nL'indice de position doit être le plus bas possible lors de la numérotation de la chaîne principale. Exemples du document : le propan-1-ol, le butan-2-ol et le 2-méthylpropan-2-ol.",
      "keyRule": "Alcool = –OH sur un carbone tétragonal, formule $\\mathrm{C_nH_{2n+2}O}$, nom en « ol » avec le plus petit indice pour le carbone fonctionnel.",
      "formulas": [
        {
          "name": "Formule brute générale des alcools",
          "formula": "\\mathrm{C_nH_{2n+2}O}",
          "note": "Chaîne carbonée saturée."
        },
        {
          "name": "Groupe fonctionnel des alcools",
          "formula": "\\mathrm{-OH}",
          "note": "Groupe hydroxyle fixé sur le carbone fonctionnel."
        }
      ],
      "workedExample": {
        "title": "Nommer l'alcool CH₃–CH₂–CH(OH)–CH₃",
        "statement": "Donne le nom de l'alcool dont le groupe –OH est sur le carbone n°2 d'une chaîne de 4 carbones, exemple du document.",
        "methodSteps": [
          "La chaîne principale compte 4 carbones : c'est un dérivé du butane.",
          "On numérote pour donner au carbone fonctionnel l'indice le plus bas : le –OH est en position 2.",
          "On remplace le « e » final de butane par « ol », précédé de l'indice 2."
        ],
        "conclusion": "Le composé est le butan-2-ol."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un alcool",
          "stepTheme": "Définition d'un alcool",
          "stepBadge": "Définition d'un alcool",
          "paragraphText": "• Alcool : composé organique dans lequel un groupe hydroxyle –OH est fixé sur un atome de carbone tétragonal.\nCe carbone est appelé carbone fonctionnel.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p01_q1",
            "type": "mcq",
            "prompt": "Un alcool est caractérisé par :",
            "options": [
              "Un groupe hydroxyle –OH fixé sur un carbone tétragonal",
              "Un groupe carboxyle –COOH",
              "Un oxygène lié à deux carbones",
              "Une double liaison C=O en bout de chaîne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du document : –OH sur un carbone tétragonal, dit carbone fonctionnel."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule brute des alcools",
          "stepTheme": "La formule brute des alcools",
          "stepBadge": "La formule brute des alcools",
          "paragraphText": "La formule brute générale d'un alcool saturé est $\\mathrm{C_nH_{2n+2}O}$.\nElle contient un seul atome d'oxygène, celui du groupe hydroxyle.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p01_q2",
            "type": "mcq",
            "prompt": "Un alcool saturé comportant 3 atomes de carbone a pour formule brute :",
            "options": [
              "$\\mathrm{C_3H_6O}$",
              "$\\mathrm{C_3H_8O_2}$",
              "$\\mathrm{C_3H_8O}$",
              "$\\mathrm{C_3H_6O_2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec $\\mathrm{C_nH_{2n+2}O}$ et $n = 3$, on obtient $\\mathrm{C_3H_8O}$, celle du propanol."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Nommer un alcool",
          "stepTheme": "Nommer un alcool",
          "stepBadge": "Nommer un alcool",
          "paragraphText": "Méthode : partir de l'alcane analogue, remplacer son « e » final par « ol ».\nOn fait précéder « ol » de l'indice de position du carbone fonctionnel quand c'est nécessaire.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p01_q3",
            "type": "mcq",
            "prompt": "Pour nommer un alcool, on remplace le « e » final de l'alcane analogue par :",
            "options": [
              "« al »",
              "« ol »",
              "« one »",
              "« oïque »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le suffixe des alcools est « ol » : propan-1-ol, butan-2-ol."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le plus petit indice possible",
          "stepTheme": "Le plus petit indice possible",
          "stepBadge": "Le plus petit indice possible",
          "paragraphText": "L'indice de position du carbone fonctionnel doit être le plus bas possible lors de la numérotation.\nC'est ce qui impose le sens de numérotation de la chaîne principale.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p01_q4",
            "type": "mcq",
            "prompt": "Lors de la numérotation d'un alcool, l'indice du carbone fonctionnel doit être :",
            "options": [
              "Le plus grand possible",
              "Toujours égal à 1",
              "Le plus bas possible",
              "Sans importance"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document impose l'indice de position le plus bas possible pour le carbone fonctionnel."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le 2-méthylpropan-2-ol",
          "stepTheme": "Le 2-méthylpropan-2-ol",
          "stepBadge": "Le 2-méthylpropan-2-ol",
          "paragraphText": "Piège : dans le 2-méthylpropan-2-ol, les deux indices 2 ne jouent pas le même rôle.\nLe premier situe le groupe méthyle, le second situe le groupe hydroxyle sur le même carbone central.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p01_q5",
            "type": "mcq",
            "prompt": "Dans le 2-méthylpropan-2-ol, le groupe –OH est fixé sur :",
            "options": [
              "Le carbone n°1",
              "Le groupe méthyle",
              "Un carbone hors chaîne",
              "Le carbone n°2"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'indice juste avant « ol » est celui du carbone fonctionnel : ici le carbone n°2, qui porte aussi le méthyle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le propan-1-ol de l'activité d'application",
          "stepTheme": "Le propan-1-ol de l'activité d'application",
          "stepBadge": "Le propan-1-ol de l'activité d'application",
          "paragraphText": "L'activité d'application demande la formule semi-développée du propan-1-ol.\nSa solution écrit CH₃–CH₂–CH₂–OH : le –OH est en bout de chaîne, sur le carbone n°1.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p01_q6",
            "type": "mcq",
            "prompt": "La formule semi-développée du propan-1-ol est :",
            "options": [
              "CH₃–CH(OH)–CH₃",
              "CH₃–CH₂–CH₂–OH",
              "CH₃–O–CH₂–CH₃",
              "CH₃–CH₂–CHO"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le –OH en position 1 donne CH₃–CH₂–CH₂–OH ; la première formule est celle du propan-2-ol."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p01_q1",
          "type": "mcq",
          "prompt": "Un alcool est caractérisé par :",
          "options": [
            "Un groupe hydroxyle –OH fixé sur un carbone tétragonal",
            "Un groupe carboxyle –COOH",
            "Un oxygène lié à deux carbones",
            "Une double liaison C=O en bout de chaîne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du document : –OH sur un carbone tétragonal, dit carbone fonctionnel."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p01_q2",
          "type": "mcq",
          "prompt": "Un alcool saturé comportant 3 atomes de carbone a pour formule brute :",
          "options": [
            "$\\mathrm{C_3H_6O}$",
            "$\\mathrm{C_3H_8O_2}$",
            "$\\mathrm{C_3H_8O}$",
            "$\\mathrm{C_3H_6O_2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec $\\mathrm{C_nH_{2n+2}O}$ et $n = 3$, on obtient $\\mathrm{C_3H_8O}$, celle du propanol."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p01_q3",
          "type": "mcq",
          "prompt": "Pour nommer un alcool, on remplace le « e » final de l'alcane analogue par :",
          "options": [
            "« al »",
            "« ol »",
            "« one »",
            "« oïque »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le suffixe des alcools est « ol » : propan-1-ol, butan-2-ol."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p01_q4",
          "type": "mcq",
          "prompt": "Lors de la numérotation d'un alcool, l'indice du carbone fonctionnel doit être :",
          "options": [
            "Le plus grand possible",
            "Toujours égal à 1",
            "Le plus bas possible",
            "Sans importance"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document impose l'indice de position le plus bas possible pour le carbone fonctionnel."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p01_q5",
          "type": "mcq",
          "prompt": "Dans le 2-méthylpropan-2-ol, le groupe –OH est fixé sur :",
          "options": [
            "Le carbone n°1",
            "Le groupe méthyle",
            "Un carbone hors chaîne",
            "Le carbone n°2"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'indice juste avant « ol » est celui du carbone fonctionnel : ici le carbone n°2, qui porte aussi le méthyle."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p01_q6",
          "type": "mcq",
          "prompt": "La formule semi-développée du propan-1-ol est :",
          "options": [
            "CH₃–CH(OH)–CH₃",
            "CH₃–CH₂–CH₂–OH",
            "CH₃–O–CH₂–CH₃",
            "CH₃–CH₂–CHO"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le –OH en position 1 donne CH₃–CH₂–CH₂–OH ; la première formule est celle du propan-2-ol."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l05_composes_oxygenes_p02",
      "order": 2,
      "title": "Les éthers-oxydes",
      "summary": "Un oxygène lié à deux carbones, formule $\\mathrm{C_nH_{2n+2}O}$ et deux façons de nommer.",
      "conceptExplanation": "Les éthers-oxydes sont des composés organiques dans lesquels un atome d'oxygène est directement lié à deux atomes de carbone tétragonaux.\nOn peut les représenter par la formule générale $\\mathrm{R_1-O-R_2}$, où $\\mathrm{R_1}$ et $\\mathrm{R_2}$ sont des groupes alkyles. Les éthers-oxydes contenant n atomes de carbone ont pour formule brute générale $\\mathrm{C_nH_{2n+2}O}$, la même que les alcools.\nLe nom d'un éther-oxyde peut être formé de deux façons : soit en faisant suivre le mot « oxyde » par les noms des deux groupes alkyles liés à l'oxygène, par ordre alphabétique ; soit en remplaçant la terminaison « yle » du nom du plus petit groupe alkyle par « oxy », suivi du nom de l'alcane correspondant à l'autre groupe.\nExemples : l'oxyde d'éthyle et de méthyle, aussi appelé méthoxyéthane, et l'oxyde de diéthyle, aussi appelé éthoxyéthane.",
      "keyRule": "Éther-oxyde = un oxygène entre deux carbones, $\\mathrm{R_1-O-R_2}$, même formule brute que les alcools mais aucun groupe –OH.",
      "formulas": [
        {
          "name": "Formule générale des éthers-oxydes",
          "formula": "\\mathrm{R_1-O-R_2}",
          "note": "R₁ et R₂ sont des groupes alkyles."
        },
        {
          "name": "Formule brute générale des éthers-oxydes",
          "formula": "\\mathrm{C_nH_{2n+2}O}",
          "note": "Identique à celle des alcools : ce sont des isomères de fonction."
        }
      ],
      "workedExample": {
        "title": "Les deux noms de CH₃–O–CH₂–CH₃",
        "statement": "Donne les deux noms possibles de l'éther-oxyde CH₃–O–CH₂–CH₃, d'après les exemples du document.",
        "methodSteps": [
          "L'oxygène est lié à un groupe méthyle et à un groupe éthyle.",
          "Première façon : on fait suivre « oxyde » des deux groupes alkyles, par ordre alphabétique.",
          "Deuxième façon : le plus petit groupe, méthyle, devient « méthoxy », suivi de l'alcane de l'autre groupe, l'éthane."
        ],
        "conclusion": "Le composé est l'oxyde d'éthyle et de méthyle, aussi appelé méthoxyéthane."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un éther-oxyde",
          "stepTheme": "Définition d'un éther-oxyde",
          "stepBadge": "Définition d'un éther-oxyde",
          "paragraphText": "• Éther-oxyde : composé organique dans lequel un atome d'oxygène est directement lié à deux atomes de carbone tétragonaux.\nSa formule générale est $\\mathrm{R_1-O-R_2}$.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p02_q1",
            "type": "mcq",
            "prompt": "Un éther-oxyde est caractérisé par :",
            "options": [
              "Un groupe –OH en bout de chaîne",
              "Un groupe –COOH",
              "Une double liaison C=O",
              "Un atome d'oxygène directement lié à deux atomes de carbone"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'oxygène pont entre deux carbones définit les éthers-oxydes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule brute des éthers-oxydes",
          "stepTheme": "La formule brute des éthers-oxydes",
          "stepBadge": "La formule brute des éthers-oxydes",
          "paragraphText": "Les éthers-oxydes ont pour formule brute générale $\\mathrm{C_nH_{2n+2}O}$.\nC'est exactement la même formule que celle des alcools à même nombre de carbones.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p02_q2",
            "type": "mcq",
            "prompt": "La formule brute générale d'un éther-oxyde à n carbones est :",
            "options": [
              "$\\mathrm{C_nH_{2n}O}$",
              "$\\mathrm{C_nH_{2n}O_2}$",
              "$\\mathrm{C_nH_{2n-2}O}$",
              "$\\mathrm{C_nH_{2n+2}O}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un seul oxygène et une chaîne saturée : $\\mathrm{C_nH_{2n+2}O}$, comme les alcools."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Nommer par « oxyde de »",
          "stepTheme": "Nommer par « oxyde de »",
          "stepBadge": "Nommer par « oxyde de »",
          "paragraphText": "Première façon de nommer : faire suivre le mot « oxyde » des noms des deux groupes alkyles liés à l'oxygène, par ordre alphabétique.\nAinsi CH₃–CH₂–O–CH₂–CH₃, avec deux éthyles, est l'oxyde de diéthyle.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p02_q3",
            "type": "mcq",
            "prompt": "Le composé CH₃–CH₂–O–CH₂–CH₃ se nomme, selon la première façon :",
            "options": [
              "Oxyde de diéthyle",
              "Éthanol",
              "Méthoxyéthane",
              "Oxyde de diméthyle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux groupes éthyle liés à l'oxygène : oxyde de diéthyle, aussi appelé éthoxyéthane."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Nommer par « oxy »",
          "stepTheme": "Nommer par « oxy »",
          "stepBadge": "Nommer par « oxy »",
          "paragraphText": "Deuxième façon : remplacer la terminaison « yle » du plus petit groupe alkyle par « oxy », suivi du nom de l'alcane de l'autre groupe.\nL'oxyde de diéthyle devient ainsi l'éthoxyéthane.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p02_q4",
            "type": "mcq",
            "prompt": "Dans la deuxième façon de nommer, on remplace la terminaison « yle » du plus petit groupe alkyle par :",
            "options": [
              "« al »",
              "« oxy »",
              "« one »",
              "« oate »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Exemple du document : éthyle devient « éthoxy » dans éthoxyéthane."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Même formule brute qu'un alcool",
          "stepTheme": "Même formule brute qu'un alcool",
          "stepBadge": "Même formule brute qu'un alcool",
          "paragraphText": "Piège : $\\mathrm{C_3H_8O}$ ne désigne pas forcément un alcool.\nL'exercice 2 du document montre que cette formule correspond aussi à un éther-oxyde, l'oxyde d'éthyle et de méthyle.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p02_q5",
            "type": "mcq",
            "prompt": "Le composé CH₃–CH₂–O–CH₃, de formule $\\mathrm{C_3H_8O}$, est :",
            "options": [
              "Le propan-1-ol",
              "Le propan-2-ol",
              "Un éther-oxyde : l'oxyde d'éthyle et de méthyle",
              "Le propanal"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'oxygène est lié à deux carbones, sans groupe –OH : c'est un éther-oxyde, isomère des propanols."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'oxyde d'éthyle et de propyle",
          "stepTheme": "L'oxyde d'éthyle et de propyle",
          "stepBadge": "L'oxyde d'éthyle et de propyle",
          "paragraphText": "L'activité d'application demande la formule semi-développée de l'oxyde d'éthyle et de propyle.\nSa solution écrit CH₃–CH₂–O–CH₂–CH₂–CH₃ : l'oxygène relie un éthyle et un propyle.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p02_q6",
            "type": "mcq",
            "prompt": "La formule semi-développée de l'oxyde d'éthyle et de propyle est :",
            "options": [
              "CH₃–CH₂–CH₂–CH₂–CH₃",
              "CH₃–CH₂–O–CH₂–CH₂–CH₃",
              "CH₃–O–CH₃",
              "CH₃–CH₂–CH₂–CH₂–OH"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux groupes alkyles, éthyle et propyle, sont de part et d'autre de l'oxygène."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p02_q1",
          "type": "mcq",
          "prompt": "Un éther-oxyde est caractérisé par :",
          "options": [
            "Un groupe –OH en bout de chaîne",
            "Un groupe –COOH",
            "Une double liaison C=O",
            "Un atome d'oxygène directement lié à deux atomes de carbone"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'oxygène pont entre deux carbones définit les éthers-oxydes."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p02_q2",
          "type": "mcq",
          "prompt": "La formule brute générale d'un éther-oxyde à n carbones est :",
          "options": [
            "$\\mathrm{C_nH_{2n}O}$",
            "$\\mathrm{C_nH_{2n}O_2}$",
            "$\\mathrm{C_nH_{2n-2}O}$",
            "$\\mathrm{C_nH_{2n+2}O}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un seul oxygène et une chaîne saturée : $\\mathrm{C_nH_{2n+2}O}$, comme les alcools."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p02_q3",
          "type": "mcq",
          "prompt": "Le composé CH₃–CH₂–O–CH₂–CH₃ se nomme, selon la première façon :",
          "options": [
            "Oxyde de diéthyle",
            "Éthanol",
            "Méthoxyéthane",
            "Oxyde de diméthyle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux groupes éthyle liés à l'oxygène : oxyde de diéthyle, aussi appelé éthoxyéthane."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p02_q4",
          "type": "mcq",
          "prompt": "Dans la deuxième façon de nommer, on remplace la terminaison « yle » du plus petit groupe alkyle par :",
          "options": [
            "« al »",
            "« oxy »",
            "« one »",
            "« oate »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Exemple du document : éthyle devient « éthoxy » dans éthoxyéthane."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p02_q5",
          "type": "mcq",
          "prompt": "Le composé CH₃–CH₂–O–CH₃, de formule $\\mathrm{C_3H_8O}$, est :",
          "options": [
            "Le propan-1-ol",
            "Le propan-2-ol",
            "Un éther-oxyde : l'oxyde d'éthyle et de méthyle",
            "Le propanal"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'oxygène est lié à deux carbones, sans groupe –OH : c'est un éther-oxyde, isomère des propanols."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p02_q6",
          "type": "mcq",
          "prompt": "La formule semi-développée de l'oxyde d'éthyle et de propyle est :",
          "options": [
            "CH₃–CH₂–CH₂–CH₂–CH₃",
            "CH₃–CH₂–O–CH₂–CH₂–CH₃",
            "CH₃–O–CH₃",
            "CH₃–CH₂–CH₂–CH₂–OH"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux groupes alkyles, éthyle et propyle, sont de part et d'autre de l'oxygène."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l05_composes_oxygenes_p03",
      "order": 3,
      "title": "Les aldéhydes",
      "summary": "Groupe fonctionnel en bout de chaîne, formule $\\mathrm{C_nH_{2n}O}$ et suffixe « al ».",
      "conceptExplanation": "Les aldéhydes sont des composés organiques qui possèdent un groupe fonctionnel formé d'un carbone lié à l'oxygène par une double liaison et à un hydrogène. Ce carbone est dit carbone fonctionnel.\nLa formule brute générale des aldéhydes contenant n atomes de carbone est $\\mathrm{C_nH_{2n}O}$.\nLe nom d'un aldéhyde dérive de celui de l'alcane correspondant en remplaçant le « e » final par la terminaison « al ». La chaîne carbonée se numérote toujours à partir du carbone du groupe fonctionnel.\nExemples du document : le propanal et le 3-méthylbutanal.",
      "keyRule": "Aldéhyde = groupe –CHO toujours en bout de chaîne, donc toujours carbone n°1, formule $\\mathrm{C_nH_{2n}O}$, nom en « al ».",
      "formulas": [
        {
          "name": "Formule brute générale des aldéhydes",
          "formula": "\\mathrm{C_nH_{2n}O}",
          "note": "Un seul oxygène, en double liaison sur le carbone fonctionnel terminal."
        },
        {
          "name": "Exemple : propanal",
          "formula": "\\mathrm{CH_3-CH_2-CHO}",
          "note": "Aldéhyde à 3 carbones."
        }
      ],
      "workedExample": {
        "title": "Nommer l'aldéhyde à chaîne ramifiée de l'exemple",
        "statement": "Un aldéhyde compte 4 carbones dans sa chaîne principale numérotée depuis le groupe fonctionnel, avec un méthyle sur le carbone n°3. Donne son nom, comme dans les exemples du document.",
        "methodSteps": [
          "Le carbone du groupe fonctionnel est le carbone n°1 par définition.",
          "La chaîne principale a 4 carbones : racine « but », terminaison « al ».",
          "Le méthyle est en position 3, comptée depuis le groupe fonctionnel."
        ],
        "conclusion": "Le composé est le 3-méthylbutanal."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un aldéhyde",
          "stepTheme": "Définition d'un aldéhyde",
          "stepBadge": "Définition d'un aldéhyde",
          "paragraphText": "• Aldéhyde : composé organique possédant le groupe fonctionnel –CHO, dont le carbone, lié à l'oxygène par une double liaison, est le carbone fonctionnel.\nCe groupe est toujours en bout de chaîne.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p03_q1",
            "type": "mcq",
            "prompt": "Le groupe fonctionnel d'un aldéhyde est situé :",
            "options": [
              "Toujours en bout de chaîne",
              "Au milieu de la chaîne",
              "Sur une ramification",
              "Hors de la chaîne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le carbone fonctionnel d'un aldéhyde porte un hydrogène : il ne peut être qu'en extrémité de chaîne."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule brute des aldéhydes",
          "stepTheme": "La formule brute des aldéhydes",
          "stepBadge": "La formule brute des aldéhydes",
          "paragraphText": "La formule brute générale des aldéhydes est $\\mathrm{C_nH_{2n}O}$.\nLa double liaison C=O fait perdre deux hydrogènes par rapport à l'alcool correspondant.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p03_q2",
            "type": "mcq",
            "prompt": "Un aldéhyde comportant 3 atomes de carbone a pour formule brute :",
            "options": [
              "$\\mathrm{C_3H_8O}$",
              "$\\mathrm{C_3H_6O_2}$",
              "$\\mathrm{C_3H_6O}$",
              "$\\mathrm{C_3H_4O}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec $\\mathrm{C_nH_{2n}O}$ et $n = 3$, on obtient $\\mathrm{C_3H_6O}$, celle du propanal."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Nommer un aldéhyde",
          "stepTheme": "Nommer un aldéhyde",
          "stepBadge": "Nommer un aldéhyde",
          "paragraphText": "Méthode : remplacer le « e » final de l'alcane correspondant par « al ».\nOn numérote toujours la chaîne à partir du carbone du groupe fonctionnel.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p03_q3",
            "type": "mcq",
            "prompt": "Le nom d'un aldéhyde se termine par :",
            "options": [
              "« ol »",
              "« one »",
              "« oïque »",
              "« al »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Propane devient propanal : la terminaison des aldéhydes est « al »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Numéroter depuis le groupe fonctionnel",
          "stepTheme": "Numéroter depuis le groupe fonctionnel",
          "stepBadge": "Numéroter depuis le groupe fonctionnel",
          "paragraphText": "La chaîne carbonée d'un aldéhyde se numérote toujours à partir du carbone du groupe fonctionnel.\nCe carbone reçoit donc obligatoirement le numéro 1.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p03_q4",
            "type": "mcq",
            "prompt": "Dans un aldéhyde, le carbone du groupe fonctionnel porte toujours le numéro :",
            "options": [
              "1",
              "2",
              "Le plus grand de la chaîne",
              "Cela dépend de la ramification"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La numérotation part du groupe fonctionnel : c'est une règle propre aux aldéhydes (et aux acides)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le 2-méthylbutanal de l'activité",
          "stepTheme": "Le 2-méthylbutanal de l'activité",
          "stepBadge": "Le 2-méthylbutanal de l'activité",
          "paragraphText": "Piège : placer le méthyle du mauvais côté en numérotant depuis le mauvais bout.\nL'activité d'application écrit le 2-méthylbutanal avec le méthyle sur le carbone voisin du groupe fonctionnel.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p03_q5",
            "type": "mcq",
            "prompt": "Dans le 2-méthylbutanal, le groupe méthyle est situé sur :",
            "options": [
              "Le carbone du groupe fonctionnel",
              "Le carbone n°2, voisin du groupe fonctionnel",
              "Le carbone n°4",
              "L'oxygène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La numérotation part du –CHO (n°1) : le méthyle est sur le carbone suivant, le n°2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le propanal",
          "stepTheme": "Le propanal",
          "stepBadge": "Le propanal",
          "paragraphText": "Le propanal est l'aldéhyde à 3 carbones donné en exemple dans le document.\nSa formule semi-développée est CH₃–CH₂–CHO.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p03_q6",
            "type": "mcq",
            "prompt": "La formule semi-développée du propanal est :",
            "options": [
              "CH₃–CO–CH₃",
              "CH₃–CH₂–CH₂–OH",
              "CH₃–CH₂–CHO",
              "CH₃–CH₂–COOH"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Trois carbones et un groupe –CHO terminal : CH₃–CH₂–CHO. La première formule est la propanone, une cétone."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p03_q1",
          "type": "mcq",
          "prompt": "Le groupe fonctionnel d'un aldéhyde est situé :",
          "options": [
            "Toujours en bout de chaîne",
            "Au milieu de la chaîne",
            "Sur une ramification",
            "Hors de la chaîne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le carbone fonctionnel d'un aldéhyde porte un hydrogène : il ne peut être qu'en extrémité de chaîne."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p03_q2",
          "type": "mcq",
          "prompt": "Un aldéhyde comportant 3 atomes de carbone a pour formule brute :",
          "options": [
            "$\\mathrm{C_3H_8O}$",
            "$\\mathrm{C_3H_6O_2}$",
            "$\\mathrm{C_3H_6O}$",
            "$\\mathrm{C_3H_4O}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec $\\mathrm{C_nH_{2n}O}$ et $n = 3$, on obtient $\\mathrm{C_3H_6O}$, celle du propanal."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p03_q3",
          "type": "mcq",
          "prompt": "Le nom d'un aldéhyde se termine par :",
          "options": [
            "« ol »",
            "« one »",
            "« oïque »",
            "« al »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Propane devient propanal : la terminaison des aldéhydes est « al »."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p03_q4",
          "type": "mcq",
          "prompt": "Dans un aldéhyde, le carbone du groupe fonctionnel porte toujours le numéro :",
          "options": [
            "1",
            "2",
            "Le plus grand de la chaîne",
            "Cela dépend de la ramification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La numérotation part du groupe fonctionnel : c'est une règle propre aux aldéhydes (et aux acides)."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p03_q5",
          "type": "mcq",
          "prompt": "Dans le 2-méthylbutanal, le groupe méthyle est situé sur :",
          "options": [
            "Le carbone du groupe fonctionnel",
            "Le carbone n°2, voisin du groupe fonctionnel",
            "Le carbone n°4",
            "L'oxygène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La numérotation part du –CHO (n°1) : le méthyle est sur le carbone suivant, le n°2."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p03_q6",
          "type": "mcq",
          "prompt": "La formule semi-développée du propanal est :",
          "options": [
            "CH₃–CO–CH₃",
            "CH₃–CH₂–CH₂–OH",
            "CH₃–CH₂–CHO",
            "CH₃–CH₂–COOH"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Trois carbones et un groupe –CHO terminal : CH₃–CH₂–CHO. La première formule est la propanone, une cétone."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l05_composes_oxygenes_p04",
      "order": 4,
      "title": "Les cétones et les composés carbonylés",
      "summary": "Groupe carbonyle au milieu de la chaîne, formule $\\mathrm{C_nH_{2n}O}$ et suffixe « one ».",
      "conceptExplanation": "Les cétones sont les composés organiques dont la molécule renferme un groupe fonctionnel formé d'un carbone lié à l'oxygène par une double liaison et à deux autres carbones.\nLa formule brute générale des cétones est $\\mathrm{C_nH_{2n}O}$, la même que celle des aldéhydes.\nLe nom d'une cétone dérive de celui de l'alcane analogue en remplaçant le « e » final par la terminaison « one », précédée de l'indice de position du carbone fonctionnel. On numérote la chaîne principale de manière à attribuer le plus petit indice possible au carbone fonctionnel.\nExemples du document : la butan-2-one et la 3-méthylbutan-2-one.\nRemarque du document : les aldéhydes et les cétones ont en commun un groupe caractéristique appelé groupe carbonyle. On les appelle composés carbonylés.",
      "keyRule": "Cétone = carbonyle au milieu de la chaîne, nom en « one » avec indice ; aldéhydes et cétones sont les composés carbonylés, de même formule $\\mathrm{C_nH_{2n}O}$.",
      "formulas": [
        {
          "name": "Formule brute générale des cétones",
          "formula": "\\mathrm{C_nH_{2n}O}",
          "note": "Identique à celle des aldéhydes."
        },
        {
          "name": "Exemple : butan-2-one",
          "formula": "\\mathrm{CH_3-CO-CH_2-CH_3}",
          "note": "Le carbone fonctionnel est le n°2."
        }
      ],
      "workedExample": {
        "title": "Nommer la cétone de l'activité d'application",
        "statement": "Donne le nom de la cétone dont le groupe fonctionnel est sur le carbone n°3 d'une chaîne de 5 carbones portant un méthyle sur le carbone n°2, composé demandé dans l'activité d'application.",
        "methodSteps": [
          "La chaîne principale compte 5 carbones : racine « pent ».",
          "Le carbone fonctionnel est en position 3 et le méthyle en position 2, avec la numérotation donnant le plus petit indice au groupe fonctionnel.",
          "On cite le méthyle, puis la racine avec l'indice 3 et la terminaison « one »."
        ],
        "conclusion": "Le composé est la 2-méthylpentan-3-one, dont la solution donne la formule semi-développée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'une cétone",
          "stepTheme": "Définition d'une cétone",
          "stepBadge": "Définition d'une cétone",
          "paragraphText": "• Cétone : composé organique dont la molécule renferme le groupe C=O lié à deux atomes de carbone.\nLe carbone fonctionnel d'une cétone est donc toujours à l'intérieur de la chaîne.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p04_q1",
            "type": "mcq",
            "prompt": "Dans une cétone, le carbone du groupe C=O est lié à :",
            "options": [
              "Un hydrogène et un carbone",
              "Trois atomes de carbone",
              "Un oxygène et un carbone",
              "Deux atomes de carbone"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est ce qui distingue la cétone de l'aldéhyde, dont le carbone fonctionnel porte un hydrogène."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule brute des cétones",
          "stepTheme": "La formule brute des cétones",
          "stepBadge": "La formule brute des cétones",
          "paragraphText": "La formule brute générale des cétones est $\\mathrm{C_nH_{2n}O}$.\nC'est la même que celle des aldéhydes : aldéhydes et cétones de même n sont isomères.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p04_q2",
            "type": "mcq",
            "prompt": "La formule brute générale des cétones est :",
            "options": [
              "$\\mathrm{C_nH_{2n+2}O}$",
              "$\\mathrm{C_nH_{2n}O_2}$",
              "$\\mathrm{C_nH_{2n}O}$",
              "$\\mathrm{C_nH_{2n-2}O}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un seul oxygène et une double liaison : $\\mathrm{C_nH_{2n}O}$, comme les aldéhydes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Nommer une cétone",
          "stepTheme": "Nommer une cétone",
          "stepBadge": "Nommer une cétone",
          "paragraphText": "Méthode : remplacer le « e » final de l'alcane analogue par « one », précédé de l'indice du carbone fonctionnel.\nOn numérote pour attribuer le plus petit indice possible à ce carbone.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p04_q3",
            "type": "mcq",
            "prompt": "La terminaison caractéristique des cétones est :",
            "options": [
              "« al »",
              "« ol »",
              "« oate »",
              "« one »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Butane devient butan-2-one : la terminaison des cétones est « one »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le groupe carbonyle",
          "stepTheme": "Le groupe carbonyle",
          "stepBadge": "Le groupe carbonyle",
          "paragraphText": "• Groupe carbonyle : groupe C=O commun aux aldéhydes et aux cétones.\nLe document appelle ces deux familles les composés carbonylés.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p04_q4",
            "type": "mcq",
            "prompt": "Les aldéhydes et les cétones sont regroupés sous le nom de composés carbonylés parce qu'ils partagent :",
            "options": [
              "Le groupe carboxyle",
              "Le groupe carbonyle",
              "Le groupe hydroxyle",
              "La même terminaison de nom"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Leur point commun est le groupe carbonyle C=O, souligné dans la remarque du document."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Aldéhyde ou cétone pour $\\mathrm{C_3H_6O}$ ?",
          "stepTheme": "Aldéhyde ou cétone pour $\\mathrm{C_3H_6O}$ ?",
          "stepBadge": "Aldéhyde ou cétone pour $\\mathrm{C_3H_6O}$ ?",
          "paragraphText": "Piège : le propanal et la propanone ont la même formule brute, $\\mathrm{C_3H_6O}$.\nOn les distingue par la place du groupe : en bout de chaîne pour l'aldéhyde, au centre pour la cétone à 3 carbones.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p04_q5",
            "type": "mcq",
            "prompt": "La propanone se distingue du propanal par :",
            "options": [
              "Sa formule brute",
              "Le nombre de ses oxygènes",
              "La position centrale de son groupe C=O",
              "La présence d'un groupe –OH"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Même formule brute pour les deux : seul l'emplacement du groupe carbonyle les différencie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La butan-2-one",
          "stepTheme": "La butan-2-one",
          "stepBadge": "La butan-2-one",
          "paragraphText": "La butan-2-one est l'exemple de cétone du document, de formule CH₃–CO–CH₂–CH₃.\nSon carbone fonctionnel est le carbone n°2 de la chaîne de 4 carbones.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p04_q6",
            "type": "mcq",
            "prompt": "Dans la butan-2-one, le groupe C=O est porté par :",
            "options": [
              "Le carbone n°1",
              "Le carbone n°2",
              "Le carbone n°4",
              "Un carbone de ramification"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'indice placé avant « one » est celui du carbone fonctionnel : ici 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p04_q1",
          "type": "mcq",
          "prompt": "Dans une cétone, le carbone du groupe C=O est lié à :",
          "options": [
            "Un hydrogène et un carbone",
            "Trois atomes de carbone",
            "Un oxygène et un carbone",
            "Deux atomes de carbone"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est ce qui distingue la cétone de l'aldéhyde, dont le carbone fonctionnel porte un hydrogène."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p04_q2",
          "type": "mcq",
          "prompt": "La formule brute générale des cétones est :",
          "options": [
            "$\\mathrm{C_nH_{2n+2}O}$",
            "$\\mathrm{C_nH_{2n}O_2}$",
            "$\\mathrm{C_nH_{2n}O}$",
            "$\\mathrm{C_nH_{2n-2}O}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un seul oxygène et une double liaison : $\\mathrm{C_nH_{2n}O}$, comme les aldéhydes."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p04_q3",
          "type": "mcq",
          "prompt": "La terminaison caractéristique des cétones est :",
          "options": [
            "« al »",
            "« ol »",
            "« oate »",
            "« one »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Butane devient butan-2-one : la terminaison des cétones est « one »."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p04_q4",
          "type": "mcq",
          "prompt": "Les aldéhydes et les cétones sont regroupés sous le nom de composés carbonylés parce qu'ils partagent :",
          "options": [
            "Le groupe carboxyle",
            "Le groupe carbonyle",
            "Le groupe hydroxyle",
            "La même terminaison de nom"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Leur point commun est le groupe carbonyle C=O, souligné dans la remarque du document."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p04_q5",
          "type": "mcq",
          "prompt": "La propanone se distingue du propanal par :",
          "options": [
            "Sa formule brute",
            "Le nombre de ses oxygènes",
            "La position centrale de son groupe C=O",
            "La présence d'un groupe –OH"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Même formule brute pour les deux : seul l'emplacement du groupe carbonyle les différencie."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p04_q6",
          "type": "mcq",
          "prompt": "Dans la butan-2-one, le groupe C=O est porté par :",
          "options": [
            "Le carbone n°1",
            "Le carbone n°2",
            "Le carbone n°4",
            "Un carbone de ramification"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'indice placé avant « one » est celui du carbone fonctionnel : ici 2."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l05_composes_oxygenes_p05",
      "order": 5,
      "title": "Les acides carboxyliques",
      "summary": "Groupe carboxyle –COOH, formule $\\mathrm{C_nH_{2n}O_2}$ et nom « acide …oïque ».",
      "conceptExplanation": "On appelle acides carboxyliques les composés organiques comportant le groupe carboxyle –COOH, formé d'un carbone lié à un oxygène par une double liaison et à un groupe –OH.\nLeur formule générale s'écrit $\\mathrm{R-COOH}$, où R est un radical alkyle ou un atome d'hydrogène. La formule brute générale des acides carboxyliques à chaîne saturée contenant n atomes de carbone est $\\mathrm{C_nH_{2n}O_2}$.\nOn nomme un acide carboxylique en remplaçant le « e » final de l'alcane correspondant par la terminaison « oïque », l'ensemble étant précédé du mot « acide ».\nOn numérote la chaîne principale à partir du carbone du groupe carboxyle. Exemples du document : l'acide propanoïque et l'acide 3-méthylbutanoïque.",
      "keyRule": "Acide carboxylique = –COOH toujours en position 1, formule $\\mathrm{C_nH_{2n}O_2}$, nom « acide » + racine en « oïque ».",
      "formulas": [
        {
          "name": "Formule générale des acides carboxyliques",
          "formula": "\\mathrm{R-COOH}",
          "note": "R est un radical alkyle ou un hydrogène."
        },
        {
          "name": "Formule brute générale (chaîne saturée)",
          "formula": "\\mathrm{C_nH_{2n}O_2}",
          "note": "Deux oxygènes, ceux du groupe carboxyle."
        }
      ],
      "workedExample": {
        "title": "Nommer l'acide de l'exemple ramifié du document",
        "statement": "Un acide carboxylique a une chaîne principale de 4 carbones numérotée depuis le groupe carboxyle et un méthyle sur le carbone n°3. Donne son nom.",
        "methodSteps": [
          "Le carbone du groupe carboxyle est le carbone n°1.",
          "La chaîne principale compte 4 carbones : racine « butan » + « oïque », précédée du mot « acide ».",
          "Le méthyle est en position 3."
        ],
        "conclusion": "Le composé est l'acide 3-méthylbutanoïque, exemple du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le groupe carboxyle",
          "stepTheme": "Le groupe carboxyle",
          "stepBadge": "Le groupe carboxyle",
          "paragraphText": "• Groupe carboxyle : groupe –COOH qui caractérise les acides carboxyliques.\nIl réunit un C=O et un –OH sur le même carbone, toujours en bout de chaîne.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p05_q1",
            "type": "mcq",
            "prompt": "Les acides carboxyliques sont caractérisés par le groupe :",
            "options": [
              "Hydroxyle –OH seul",
              "Carboxyle –COOH",
              "Carbonyle au milieu de la chaîne",
              "Éther –O–"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du document : le groupe carboxyle définit la famille."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule brute des acides",
          "stepTheme": "La formule brute des acides",
          "stepBadge": "La formule brute des acides",
          "paragraphText": "La formule brute générale des acides carboxyliques saturés est $\\mathrm{C_nH_{2n}O_2}$.\nLes deux oxygènes sont ceux du groupe carboxyle.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p05_q2",
            "type": "mcq",
            "prompt": "Un acide carboxylique saturé comportant 3 atomes de carbone a pour formule brute :",
            "options": [
              "$\\mathrm{C_3H_6O}$",
              "$\\mathrm{C_3H_8O}$",
              "$\\mathrm{C_3H_6O_2}$",
              "$\\mathrm{C_3H_4O_2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec $\\mathrm{C_nH_{2n}O_2}$ et $n = 3$, on obtient $\\mathrm{C_3H_6O_2}$, celle de l'acide propanoïque."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Nommer un acide carboxylique",
          "stepTheme": "Nommer un acide carboxylique",
          "stepBadge": "Nommer un acide carboxylique",
          "paragraphText": "Méthode : faire précéder le nom du mot « acide », et remplacer le « e » final de l'alcane correspondant par « oïque ».\nOn numérote la chaîne à partir du carbone du groupe carboxyle.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p05_q3",
            "type": "mcq",
            "prompt": "Le nom d'un acide carboxylique se forme avec le mot « acide » et la terminaison :",
            "options": [
              "« al »",
              "« oïque »",
              "« one »",
              "« oate »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Propane donne « acide propanoïque » : terminaison « oïque »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le radical R de R–COOH",
          "stepTheme": "Le radical R de R–COOH",
          "stepBadge": "Le radical R de R–COOH",
          "paragraphText": "La formule générale d'un acide s'écrit $\\mathrm{R-COOH}$.\nLe document précise que R peut être un radical alkyle ou simplement un atome d'hydrogène.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p05_q4",
            "type": "mcq",
            "prompt": "Dans la formule $\\mathrm{R-COOH}$ d'un acide carboxylique, R peut être :",
            "options": [
              "Uniquement un groupe méthyle",
              "Un radical alkyle ou un atome d'hydrogène",
              "Un atome d'oxygène",
              "Un groupe hydroxyle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Quand R est un hydrogène, on obtient l'acide méthanoïque ; sinon, R est un alkyle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Numéroter depuis le carboxyle",
          "stepTheme": "Numéroter depuis le carboxyle",
          "stepBadge": "Numéroter depuis le carboxyle",
          "paragraphText": "Piège : numéroter un acide depuis le mauvais bout déplace toutes les positions des ramifications.\nLa chaîne principale se numérote toujours à partir du carbone du groupe carboxyle.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p05_q5",
            "type": "mcq",
            "prompt": "Pour nommer un acide carboxylique, on numérote la chaîne principale à partir :",
            "options": [
              "Du carbone le plus ramifié",
              "De la ramification la plus proche",
              "Du carbone du groupe carboxyle",
              "Du milieu de la chaîne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le carbone du –COOH est obligatoirement le carbone n°1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'acide propanoïque",
          "stepTheme": "L'acide propanoïque",
          "stepBadge": "L'acide propanoïque",
          "paragraphText": "L'acide propanoïque est le premier exemple du document, de formule CH₃–CH₂–COOH.\nIl compte 3 carbones, dont celui du groupe carboxyle.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p05_q6",
            "type": "mcq",
            "prompt": "La formule semi-développée de l'acide propanoïque est :",
            "options": [
              "CH₃–CH₂–CHO",
              "CH₃–CO–CH₃",
              "CH₃–CH₂–CH₂–OH",
              "CH₃–CH₂–COOH"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le groupe –COOH en bout d'une chaîne à 2 autres carbones donne CH₃–CH₂–COOH."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p05_q1",
          "type": "mcq",
          "prompt": "Les acides carboxyliques sont caractérisés par le groupe :",
          "options": [
            "Hydroxyle –OH seul",
            "Carboxyle –COOH",
            "Carbonyle au milieu de la chaîne",
            "Éther –O–"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du document : le groupe carboxyle définit la famille."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p05_q2",
          "type": "mcq",
          "prompt": "Un acide carboxylique saturé comportant 3 atomes de carbone a pour formule brute :",
          "options": [
            "$\\mathrm{C_3H_6O}$",
            "$\\mathrm{C_3H_8O}$",
            "$\\mathrm{C_3H_6O_2}$",
            "$\\mathrm{C_3H_4O_2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec $\\mathrm{C_nH_{2n}O_2}$ et $n = 3$, on obtient $\\mathrm{C_3H_6O_2}$, celle de l'acide propanoïque."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p05_q3",
          "type": "mcq",
          "prompt": "Le nom d'un acide carboxylique se forme avec le mot « acide » et la terminaison :",
          "options": [
            "« al »",
            "« oïque »",
            "« one »",
            "« oate »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Propane donne « acide propanoïque » : terminaison « oïque »."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p05_q4",
          "type": "mcq",
          "prompt": "Dans la formule $\\mathrm{R-COOH}$ d'un acide carboxylique, R peut être :",
          "options": [
            "Uniquement un groupe méthyle",
            "Un radical alkyle ou un atome d'hydrogène",
            "Un atome d'oxygène",
            "Un groupe hydroxyle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Quand R est un hydrogène, on obtient l'acide méthanoïque ; sinon, R est un alkyle."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p05_q5",
          "type": "mcq",
          "prompt": "Pour nommer un acide carboxylique, on numérote la chaîne principale à partir :",
          "options": [
            "Du carbone le plus ramifié",
            "De la ramification la plus proche",
            "Du carbone du groupe carboxyle",
            "Du milieu de la chaîne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le carbone du –COOH est obligatoirement le carbone n°1."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p05_q6",
          "type": "mcq",
          "prompt": "La formule semi-développée de l'acide propanoïque est :",
          "options": [
            "CH₃–CH₂–CHO",
            "CH₃–CO–CH₃",
            "CH₃–CH₂–CH₂–OH",
            "CH₃–CH₂–COOH"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le groupe –COOH en bout d'une chaîne à 2 autres carbones donne CH₃–CH₂–COOH."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l05_composes_oxygenes_p06",
      "order": 6,
      "title": "Les esters",
      "summary": "Groupe fonctionnel –COO– lié à deux carbones, formule $\\mathrm{C_nH_{2n}O_2}$ et nom en deux termes.",
      "conceptExplanation": "Les esters sont des composés organiques dont la molécule comporte un groupe fonctionnel formé d'un carbone lié à un oxygène par une double liaison et à un second oxygène lui-même lié à un carbone.\nLeur formule brute est $\\mathrm{C_nH_{2n}O_2}$, la même que celle des acides carboxyliques.\nLe nom d'un ester comporte deux termes : le premier, qui se termine par le suffixe « oate », est nommé comme dérivant d'un acide carboxylique ; le second est le nom du groupe alkyle lié par simple liaison covalente au deuxième atome d'oxygène.\nExemples du document : l'éthanoate de méthyle et le 3-méthylbutanoate de méthyle.",
      "keyRule": "Ester = nom en deux morceaux : « …oate de …yle » ; la partie « oate » vient de l'acide, la partie alkyle est liée au second oxygène.",
      "formulas": [
        {
          "name": "Formule brute générale des esters",
          "formula": "\\mathrm{C_nH_{2n}O_2}",
          "note": "Identique à celle des acides carboxyliques."
        },
        {
          "name": "Exemple : éthanoate de méthyle",
          "formula": "\\mathrm{CH_3-COO-CH_3}",
          "note": "Partie acide : éthanoate ; groupe alkyle : méthyle."
        }
      ],
      "workedExample": {
        "title": "Écrire le propanoate de propyle de l'activité",
        "statement": "Écris la formule semi-développée du propanoate de propyle demandé dans l'activité d'application du document.",
        "methodSteps": [
          "La partie « propanoate » vient de l'acide propanoïque : elle compte 3 carbones, dont celui du groupe fonctionnel.",
          "La partie « propyle » est le groupe alkyle lié au deuxième oxygène : il compte 3 carbones.",
          "On relie les deux parties par l'oxygène simple."
        ],
        "conclusion": "La solution donne CH₃–CH₂–COO–CH₂–CH₂–CH₃, un ester à 6 carbones au total."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un ester",
          "stepTheme": "Définition d'un ester",
          "stepBadge": "Définition d'un ester",
          "paragraphText": "• Ester : composé organique dont la molécule comporte le groupe –COO–, le second oxygène étant lié à un autre carbone.\nOn le reconnaît à son nom en deux termes.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p06_q1",
            "type": "mcq",
            "prompt": "Un ester est caractérisé par un groupe fonctionnel comportant :",
            "options": [
              "Deux oxygènes, dont l'un lie le groupe à un autre carbone",
              "Un seul oxygène lié à un hydrogène",
              "Un groupe –OH terminal",
              "Aucun oxygène"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le groupe d'un ester contient deux oxygènes : un en double liaison, l'autre reliant deux carbones."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule brute des esters",
          "stepTheme": "La formule brute des esters",
          "stepBadge": "La formule brute des esters",
          "paragraphText": "La formule brute générale des esters est $\\mathrm{C_nH_{2n}O_2}$.\nC'est la même que celle des acides carboxyliques : un acide et un ester de même n sont isomères.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p06_q2",
            "type": "mcq",
            "prompt": "La formule brute générale d'un ester est :",
            "options": [
              "$\\mathrm{C_nH_{2n}O}$",
              "$\\mathrm{C_nH_{2n+2}O}$",
              "$\\mathrm{C_nH_{2n}O_2}$",
              "$\\mathrm{C_nH_{2n-2}O_2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Deux oxygènes et une double liaison donnent $\\mathrm{C_nH_{2n}O_2}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Les deux termes du nom d'un ester",
          "stepTheme": "Les deux termes du nom d'un ester",
          "stepBadge": "Les deux termes du nom d'un ester",
          "paragraphText": "Le nom d'un ester comporte deux termes : le premier se termine par « oate » et dérive d'un acide carboxylique.\nLe second terme est le nom du groupe alkyle lié au deuxième oxygène.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p06_q3",
            "type": "mcq",
            "prompt": "Dans le nom d'un ester, le premier terme se termine par le suffixe :",
            "options": [
              "« oïque »",
              "« yle »",
              "« al »",
              "« oate »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Éthanoate de méthyle : « oate » pour la partie issue de l'acide éthanoïque."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le second terme du nom",
          "stepTheme": "Le second terme du nom",
          "stepBadge": "Le second terme du nom",
          "paragraphText": "Le second terme du nom est le nom du groupe alkyle lié par simple liaison covalente au deuxième atome d'oxygène.\nDans l'éthanoate de méthyle, c'est le groupe méthyle qui est lié à cet oxygène.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p06_q4",
            "type": "mcq",
            "prompt": "Dans l'éthanoate de méthyle, le groupe méthyle est :",
            "options": [
              "La partie dérivant de l'acide",
              "Le groupe alkyle lié au deuxième oxygène",
              "Le carbone fonctionnel",
              "Une ramification de la chaîne acide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le nom se lit dans l'ordre : partie acide d'abord (éthanoate), groupe alkyle lié au second oxygène ensuite (méthyle)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Acide ou ester pour $\\mathrm{C_4H_8O_2}$ ?",
          "stepTheme": "Acide ou ester pour $\\mathrm{C_4H_8O_2}$ ?",
          "stepBadge": "Acide ou ester pour $\\mathrm{C_4H_8O_2}$ ?",
          "paragraphText": "Piège : la formule $\\mathrm{C_4H_8O_2}$ convient à un acide comme à un ester.\nLa situation d'évaluation du document tranche grâce à la structure : son composé est le méthanoate d'isopropyle, un ester.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p06_q5",
            "type": "mcq",
            "prompt": "Le composé $\\mathrm{C_4H_8O_2}$ identifié dans la situation d'évaluation du document est :",
            "options": [
              "L'acide butanoïque",
              "Le méthanoate d'isopropyle",
              "Le butanal",
              "La butanone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Son carbone fonctionnel n'est fixé qu'à un seul hydrogène et sa chaîne est ramifiée : la solution conclut au méthanoate d'isopropyle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'arôme d'ananas de l'exercice 4",
          "stepTheme": "L'arôme d'ananas de l'exercice 4",
          "stepBadge": "L'arôme d'ananas de l'exercice 4",
          "paragraphText": "Dans l'exercice 4, Akoua étudie une poudre d'arôme d'ananas formée à partir d'acide butanoïque, de masse molaire $116\\ \\mathrm{g/mol}$.\nLe corrigé détermine sa formule brute, $\\mathrm{C_6H_{12}O_2}$, et la nomme butanoate d'éthyle : c'est un ester.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p06_q6",
            "type": "mcq",
            "prompt": "D'après le corrigé de l'exercice 4, le composé d'arôme d'ananas est :",
            "options": [
              "Un acide carboxylique",
              "Un alcool",
              "Un ester : le butanoate d'éthyle",
              "Une cétone"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Formé à partir d'acide butanoïque, de formule $\\mathrm{C_6H_{12}O_2}$ : le corrigé le nomme butanoate d'éthyle."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p06_q1",
          "type": "mcq",
          "prompt": "Un ester est caractérisé par un groupe fonctionnel comportant :",
          "options": [
            "Deux oxygènes, dont l'un lie le groupe à un autre carbone",
            "Un seul oxygène lié à un hydrogène",
            "Un groupe –OH terminal",
            "Aucun oxygène"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le groupe d'un ester contient deux oxygènes : un en double liaison, l'autre reliant deux carbones."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p06_q2",
          "type": "mcq",
          "prompt": "La formule brute générale d'un ester est :",
          "options": [
            "$\\mathrm{C_nH_{2n}O}$",
            "$\\mathrm{C_nH_{2n+2}O}$",
            "$\\mathrm{C_nH_{2n}O_2}$",
            "$\\mathrm{C_nH_{2n-2}O_2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Deux oxygènes et une double liaison donnent $\\mathrm{C_nH_{2n}O_2}$."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p06_q3",
          "type": "mcq",
          "prompt": "Dans le nom d'un ester, le premier terme se termine par le suffixe :",
          "options": [
            "« oïque »",
            "« yle »",
            "« al »",
            "« oate »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Éthanoate de méthyle : « oate » pour la partie issue de l'acide éthanoïque."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p06_q4",
          "type": "mcq",
          "prompt": "Dans l'éthanoate de méthyle, le groupe méthyle est :",
          "options": [
            "La partie dérivant de l'acide",
            "Le groupe alkyle lié au deuxième oxygène",
            "Le carbone fonctionnel",
            "Une ramification de la chaîne acide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le nom se lit dans l'ordre : partie acide d'abord (éthanoate), groupe alkyle lié au second oxygène ensuite (méthyle)."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p06_q5",
          "type": "mcq",
          "prompt": "Le composé $\\mathrm{C_4H_8O_2}$ identifié dans la situation d'évaluation du document est :",
          "options": [
            "L'acide butanoïque",
            "Le méthanoate d'isopropyle",
            "Le butanal",
            "La butanone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Son carbone fonctionnel n'est fixé qu'à un seul hydrogène et sa chaîne est ramifiée : la solution conclut au méthanoate d'isopropyle."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p06_q6",
          "type": "mcq",
          "prompt": "D'après le corrigé de l'exercice 4, le composé d'arôme d'ananas est :",
          "options": [
            "Un acide carboxylique",
            "Un alcool",
            "Un ester : le butanoate d'éthyle",
            "Une cétone"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Formé à partir d'acide butanoïque, de formule $\\mathrm{C_6H_{12}O_2}$ : le corrigé le nomme butanoate d'éthyle."
        }
      ]
    },
    {
      "id": "premiere_c_chimie_l05_composes_oxygenes_p07",
      "order": 7,
      "title": "Intérêt général et identification d'un composé oxygéné",
      "summary": "Usages des familles oxygénées et méthode pour déterminer la formule brute d'un composé inconnu.",
      "conceptExplanation": "Les alcools et les éthers-oxydes sont des solvants et sont utilisés en médecine comme désinfectants. L'éthanol, contenu dans les boissons alcoolisées, est aussi utilisé comme biocarburant.\nLes aldéhydes et les cétones sont des solvants beaucoup utilisés en parfumerie ; le formol, aldéhyde particulier, est utilisé pour la conservation des corps.\nLes acides carboxyliques sont utilisés dans l'alimentation : l'acide citrique dans le citron, l'acide éthanoïque dans le vinaigre.\nLes esters, présents dans les arômes naturels et les corps gras, sont utilisés dans la parfumerie et dans la savonnerie.\nPour identifier un composé, la situation d'évaluation utilise le pourcentage massique d'oxygène : pour un composé de formule $\\mathrm{C_xH_{2x}O_2}$, la masse molaire vaut $M = 14x + 32$ ; avec 36,36 % d'oxygène, on obtient $M = 88\\ \\mathrm{g/mol}$, donc $x = 4$ et la formule $\\mathrm{C_4H_8O_2}$.",
      "keyRule": "Chaque famille a ses usages, et un pourcentage massique peut livrer la masse molaire, donc la formule brute : pour $\\mathrm{C_xH_{2x}O_2}$, $M = 14x + 32$.",
      "formulas": [
        {
          "name": "Masse molaire d'un composé $\\mathrm{C_xH_{2x}O_2}$",
          "formula": "M = 14x + 32",
          "note": "M en g/mol ; les 32 viennent des deux oxygènes."
        }
      ],
      "workedExample": {
        "title": "Déterminer la formule du composé de la situation d'évaluation",
        "statement": "Un composé a pour formule $\\mathrm{C_xH_{2x}O_2}$ et contient en masse 36,36 % d'oxygène. Détermine sa formule brute, comme dans la solution du document.",
        "methodSteps": [
          "La masse molaire s'écrit $M = 14x + 32$, en g/mol.",
          "Le pourcentage d'oxygène donne $M = 88\\ \\mathrm{g/mol}$.",
          "On résout $14x + 32 = 88$, ce qui donne $x = 4$."
        ],
        "conclusion": "La formule brute du composé est $\\mathrm{C_4H_8O_2}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un composé oxygéné",
          "stepTheme": "Un composé oxygéné",
          "stepBadge": "Un composé oxygéné",
          "paragraphText": "• Composé oxygéné : corps pur organique dont la molécule comporte au moins un atome d'oxygène, d'après la documentation.\nLes six familles de la leçon sont toutes des composés oxygénés.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p07_q1",
            "type": "mcq",
            "prompt": "Un composé organique est dit oxygéné si sa molécule comporte :",
            "options": [
              "Au moins un atome d'oxygène",
              "Au moins un atome de carbone",
              "Uniquement de l'oxygène",
              "Un groupe méthyle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la partie documentation : la présence d'au moins un oxygène."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les usages des alcools et éthers-oxydes",
          "stepTheme": "Les usages des alcools et éthers-oxydes",
          "stepBadge": "Les usages des alcools et éthers-oxydes",
          "paragraphText": "Les alcools et les éthers-oxydes sont des solvants, utilisés aussi en médecine comme désinfectants.\nL'éthanol est en outre utilisé comme biocarburant.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p07_q2",
            "type": "mcq",
            "prompt": "D'après le document, l'éthanol est notamment utilisé comme :",
            "options": [
              "Conservateur des corps",
              "Produit de savonnerie",
              "Arôme alimentaire uniquement",
              "Biocarburant"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le document cite l'éthanol des boissons alcoolisées comme biocarburant ; le formol sert à la conservation des corps."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les usages des aldéhydes et cétones",
          "stepTheme": "Les usages des aldéhydes et cétones",
          "stepBadge": "Les usages des aldéhydes et cétones",
          "paragraphText": "Les aldéhydes et les cétones sont des solvants beaucoup utilisés en parfumerie.\nLe formol, aldéhyde particulier, sert à la conservation des corps.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p07_q3",
            "type": "mcq",
            "prompt": "Le formol, aldéhyde particulier cité dans le document, est utilisé pour :",
            "options": [
              "La conservation des corps",
              "L'alimentation",
              "La savonnerie",
              "Le graissage des moteurs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'usage particulier du formol donné dans la partie « intérêt général »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les acides dans l'alimentation",
          "stepTheme": "Les acides dans l'alimentation",
          "stepBadge": "Les acides dans l'alimentation",
          "paragraphText": "Les acides carboxyliques sont utilisés dans l'alimentation.\nLe document cite l'acide citrique du citron et l'acide éthanoïque du vinaigre.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p07_q4",
            "type": "mcq",
            "prompt": "L'acide éthanoïque est l'acide que l'on trouve, d'après le document, dans :",
            "options": [
              "Le citron",
              "Les corps gras",
              "Le vinaigre",
              "Les arômes d'ananas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le vinaigre doit son acidité à l'acide éthanoïque ; l'acide du citron est l'acide citrique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les esters ne servent pas qu'aux arômes",
          "stepTheme": "Les esters ne servent pas qu'aux arômes",
          "stepBadge": "Les esters ne servent pas qu'aux arômes",
          "paragraphText": "Piège : réduire les esters aux seuls parfums oublie leur autre grand domaine cité.\nLe document les dit présents dans les arômes naturels et les corps gras, et utilisés en parfumerie et en savonnerie.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p07_q5",
            "type": "mcq",
            "prompt": "D'après le document, les esters sont utilisés dans :",
            "options": [
              "La parfumerie et la savonnerie",
              "La médecine uniquement",
              "La construction routière",
              "La réfrigération"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Parfumerie et savonnerie sont les deux domaines cités pour les esters."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Retrouver x grâce au pourcentage d'oxygène",
          "stepTheme": "Retrouver x grâce au pourcentage d'oxygène",
          "stepBadge": "Retrouver x grâce au pourcentage d'oxygène",
          "paragraphText": "Dans la situation d'évaluation, le pourcentage massique d'oxygène, 36,36 %, donne la masse molaire du composé.\nOn en déduit $x = 4$, puis la formule brute.",
          "exercise": {
            "id": "premiere_c_chimie_l05_composes_oxygenes_p07_q6",
            "type": "mcq",
            "prompt": "Dans la situation d'évaluation, la valeur trouvée pour x est :",
            "options": [
              "3",
              "5",
              "6",
              "4"
            ],
            "correctAnswerIndex": 3,
            "explanation": "De $M = 88\\ \\mathrm{g/mol}$ et $M = 14x + 32$, on tire $14x = 56$, donc $x = 4$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p07_q1",
          "type": "mcq",
          "prompt": "Un composé organique est dit oxygéné si sa molécule comporte :",
          "options": [
            "Au moins un atome d'oxygène",
            "Au moins un atome de carbone",
            "Uniquement de l'oxygène",
            "Un groupe méthyle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la partie documentation : la présence d'au moins un oxygène."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p07_q2",
          "type": "mcq",
          "prompt": "D'après le document, l'éthanol est notamment utilisé comme :",
          "options": [
            "Conservateur des corps",
            "Produit de savonnerie",
            "Arôme alimentaire uniquement",
            "Biocarburant"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le document cite l'éthanol des boissons alcoolisées comme biocarburant ; le formol sert à la conservation des corps."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p07_q3",
          "type": "mcq",
          "prompt": "Le formol, aldéhyde particulier cité dans le document, est utilisé pour :",
          "options": [
            "La conservation des corps",
            "L'alimentation",
            "La savonnerie",
            "Le graissage des moteurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'usage particulier du formol donné dans la partie « intérêt général »."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p07_q4",
          "type": "mcq",
          "prompt": "L'acide éthanoïque est l'acide que l'on trouve, d'après le document, dans :",
          "options": [
            "Le citron",
            "Les corps gras",
            "Le vinaigre",
            "Les arômes d'ananas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le vinaigre doit son acidité à l'acide éthanoïque ; l'acide du citron est l'acide citrique."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p07_q5",
          "type": "mcq",
          "prompt": "D'après le document, les esters sont utilisés dans :",
          "options": [
            "La parfumerie et la savonnerie",
            "La médecine uniquement",
            "La construction routière",
            "La réfrigération"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Parfumerie et savonnerie sont les deux domaines cités pour les esters."
        },
        {
          "id": "premiere_c_chimie_l05_composes_oxygenes_p07_q6",
          "type": "mcq",
          "prompt": "Dans la situation d'évaluation, la valeur trouvée pour x est :",
          "options": [
            "3",
            "5",
            "6",
            "4"
          ],
          "correctAnswerIndex": 3,
          "explanation": "De $M = 88\\ \\mathrm{g/mol}$ et $M = 14x + 32$, on tire $14x = 56$, donc $x = 4$."
        }
      ]
    }
  ]
};
