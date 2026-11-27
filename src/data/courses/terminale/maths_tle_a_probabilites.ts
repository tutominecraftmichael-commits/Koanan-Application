import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 2 : Probabilités » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1622
export const MATHS_TLE_A_L02_PROBABILITES: CurriculumChapter = {
  "id": "terminale_a1_maths_probabilites_l02_probabilites",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 2,
  "title": "Leçon 2 : Probabilités",
  "summary": "Pour le jeu de la kermesse organisé par les élèves, cette leçon modélise une expérience aléatoire : univers et événements, probabilité sur un ensemble fini, équiprobabilité, puis variable aléatoire avec son espérance, sa variance et son écart type.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1622",
  "points": [
    {
      "id": "terminale_a1_maths_probabilites_l02_probabilites_p01",
      "order": 1,
      "title": "Expériences aléatoires, éventualités et événements",
      "summary": "Reconnaître une expérience aléatoire, écrire son univers et décrire un événement en extension.",
      "conceptExplanation": "On lance un dé non truqué à six faces numérotées de $1$ à $6$ et on note le nombre de la face supérieure. Les résultats possibles sont finis et connus, mais on ne peut pas prévoir d'avance le résultat : c'est une expérience aléatoire, c'est-à-dire une expérience dont l'issue ne peut être connue d'avance.\nChaque résultat possible est appelé une éventualité. L'ensemble de toutes les éventualités est appelé l'univers, noté en général $\\Omega$ : ici $\\Omega = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$ et $6$ est une éventualité.\nOn appelle événement tout sous-ensemble de l'univers. Par exemple, l'événement $A$ « obtenir un nombre pair » s'écrit $A = \\{2 ; 4 ; 6\\}$. Un événement $A$ est réalisé si l'issue de l'expérience appartient à $A$.",
      "keyRule": "Expérience aléatoire : résultats connus mais imprévisibles ; l'univers regroupe toutes les éventualités ; un événement est un sous-ensemble de l'univers.",
      "formulas": [
        {
          "name": "Univers d'un dé",
          "formula": "\\Omega = \\{1 {;} 2 {;} 3 {;} 4 {;} 5 {;} 6\\}",
          "note": "L'univers est l'ensemble de toutes les éventualités."
        },
        {
          "name": "Événement pair",
          "formula": "A = \\{2 {;} 4 {;} 6\\}",
          "note": "Un événement est un sous-ensemble de l'univers : $A \\subset \\Omega$."
        }
      ],
      "workedExample": {
        "title": "Deux lancers d'une pièce (exercices de fixation)",
        "statement": "On lance deux fois de suite une pièce de monnaie. Écris en extension l'univers $\\Omega$ et l'événement $B$ « obtenir face au premier lancer ».",
        "methodSteps": [
          "Chaque lancer donne pile, noté $P$, ou face, noté $F$ : il y a quatre couples possibles.",
          "L'univers est $\\Omega = \\{(P, P) ; (P, F) ; (F, P) ; (F, F)\\}$.",
          "L'événement $B$ regroupe les couples dont le premier élément est $F$ : $B = \\{(F, P) ; (F, F)\\}$."
        ],
        "conclusion": "L'univers compte quatre éventualités et l'événement $B$ en regroupe deux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une expérience aléatoire",
          "stepTheme": "Une expérience aléatoire",
          "stepBadge": "Une expérience aléatoire",
          "paragraphText": "• Expérience aléatoire : expérience dont l'issue ne peut être connue d'avance, alors que les résultats possibles sont finis et connus.\nLancer un dé et noter la face supérieure en est l'exemple d'ouverture de la leçon.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p01_q1",
            "type": "mcq",
            "prompt": "Pourquoi le lancer d'un dé est-il une expérience aléatoire ?",
            "options": [
              "Parce que son issue ne peut pas être connue d'avance",
              "Parce que le dé a six faces",
              "Parce qu'on peut le lancer plusieurs fois",
              "Parce que les résultats sont des nombres"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon définit une expérience aléatoire comme une expérience dont l'issue ne peut être connue d'avance."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Éventualité et univers",
          "stepTheme": "Éventualité et univers",
          "stepBadge": "Éventualité et univers",
          "paragraphText": "• Éventualité : chaque résultat possible d'une expérience aléatoire.\n• Univers : ensemble de toutes les éventualités, noté $\\Omega$. Pour le dé à six faces, $\\Omega = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p01_q2",
            "type": "mcq",
            "prompt": "Dans le lancer d'un dé à six faces, le nombre $6$ est :",
            "options": [
              "Une éventualité",
              "Un événement",
              "L'univers",
              "Une probabilité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque résultat possible est une éventualité : $6$ est l'une des six éventualités du dé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un événement est un sous-ensemble",
          "stepTheme": "Un événement est un sous-ensemble",
          "stepBadge": "Un événement est un sous-ensemble",
          "paragraphText": "• Un événement est tout sous-ensemble de l'univers : on note $A \\subset \\Omega$.\nUne éventualité, elle, appartient à l'univers : on note $\\omega \\in \\Omega$. Les deux notations ne se confondent pas.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p01_q3",
            "type": "mcq",
            "prompt": "Comment note-t-on qu'un événement $A$ est un sous-ensemble de l'univers $\\Omega$ ?",
            "options": [
              "$A \\in \\Omega$",
              "$A \\subset \\Omega$",
              "$\\Omega \\subset A$",
              "$A = \\Omega$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un événement est inclus dans l'univers : $A \\subset \\Omega$. L'appartenance $\\in$ concerne les éventualités."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Un événement réalisé",
          "stepTheme": "Un événement réalisé",
          "stepBadge": "Un événement réalisé",
          "paragraphText": "• Un événement $A$ est réalisé si l'issue de l'expérience appartient à $A$.\nPour $A$ « obtenir un nombre pair », le résultat $2$ réalise $A$ car $2 \\in A$.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p01_q4",
            "type": "mcq",
            "prompt": "Pour l'événement $A$ « obtenir un nombre pair » au dé, quel résultat réalise $A$ ?",
            "options": [
              "$3$",
              "$5$",
              "$2$",
              "$1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résultat $2$ appartient à $A = \\{2 ; 4 ; 6\\}$ : il réalise l'événement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre appartient et inclus",
          "stepTheme": "Confondre appartient et inclus",
          "stepBadge": "Confondre appartient et inclus",
          "paragraphText": "• Piège de notation : une éventualité $\\omega$ appartient à l'univers, mais un événement est inclus dans l'univers.\nÉcrire qu'un événement appartient à $\\Omega$ avec le symbole d'appartenance est une erreur de vocabulaire ensembliste.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p01_q5",
            "type": "mcq",
            "prompt": "Quelle écriture est correcte pour un événement $A$ et l'univers $\\Omega$ ?",
            "options": [
              "$A \\in \\Omega$",
              "$\\Omega \\in A$",
              "$A \\subset \\Omega$",
              "$A \\notin \\Omega$ toujours"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un événement est un sous-ensemble de l'univers : on utilise l'inclusion $\\subset$, réservant $\\in$ aux éventualités."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'événement pair du dé",
          "stepTheme": "L'événement pair du dé",
          "stepBadge": "L'événement pair du dé",
          "paragraphText": "• Exemple de la leçon : au lancer d'un dé, l'événement $A$ « obtenir un nombre pair » regroupe les faces paires.\nEn extension, $A = \\{2 ; 4 ; 6\\}$.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p01_q6",
            "type": "mcq",
            "prompt": "Comment s'écrit en extension l'événement « obtenir un nombre pair » au dé à six faces ?",
            "options": [
              "$\\{1 ; 3 ; 5\\}$",
              "$\\{6\\}$",
              "$\\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$",
              "$\\{2 ; 4 ; 6\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les nombres pairs entre $1$ et $6$ sont $2$, $4$ et $6$ : $A = \\{2 ; 4 ; 6\\}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p01_q1",
          "type": "mcq",
          "prompt": "Pourquoi le lancer d'un dé est-il une expérience aléatoire ?",
          "options": [
            "Parce que son issue ne peut pas être connue d'avance",
            "Parce que le dé a six faces",
            "Parce qu'on peut le lancer plusieurs fois",
            "Parce que les résultats sont des nombres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon définit une expérience aléatoire comme une expérience dont l'issue ne peut être connue d'avance."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p01_q2",
          "type": "mcq",
          "prompt": "Dans le lancer d'un dé à six faces, le nombre $6$ est :",
          "options": [
            "Une éventualité",
            "Un événement",
            "L'univers",
            "Une probabilité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque résultat possible est une éventualité : $6$ est l'une des six éventualités du dé."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p01_q3",
          "type": "mcq",
          "prompt": "Comment note-t-on qu'un événement $A$ est un sous-ensemble de l'univers $\\Omega$ ?",
          "options": [
            "$A \\in \\Omega$",
            "$A \\subset \\Omega$",
            "$\\Omega \\subset A$",
            "$A = \\Omega$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un événement est inclus dans l'univers : $A \\subset \\Omega$. L'appartenance $\\in$ concerne les éventualités."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p01_q4",
          "type": "mcq",
          "prompt": "Pour l'événement $A$ « obtenir un nombre pair » au dé, quel résultat réalise $A$ ?",
          "options": [
            "$3$",
            "$5$",
            "$2$",
            "$1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résultat $2$ appartient à $A = \\{2 ; 4 ; 6\\}$ : il réalise l'événement."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p01_q5",
          "type": "mcq",
          "prompt": "Quelle écriture est correcte pour un événement $A$ et l'univers $\\Omega$ ?",
          "options": [
            "$A \\in \\Omega$",
            "$\\Omega \\in A$",
            "$A \\subset \\Omega$",
            "$A \\notin \\Omega$ toujours"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un événement est un sous-ensemble de l'univers : on utilise l'inclusion $\\subset$, réservant $\\in$ aux éventualités."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p01_q6",
          "type": "mcq",
          "prompt": "Comment s'écrit en extension l'événement « obtenir un nombre pair » au dé à six faces ?",
          "options": [
            "$\\{1 ; 3 ; 5\\}$",
            "$\\{6\\}$",
            "$\\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$",
            "$\\{2 ; 4 ; 6\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les nombres pairs entre $1$ et $6$ sont $2$, $4$ et $6$ : $A = \\{2 ; 4 ; 6\\}$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_probabilites_l02_probabilites_p02",
      "order": 2,
      "title": "Le vocabulaire des probabilités",
      "summary": "Traduire les opérations ensemblistes en langage probabiliste : impossible, et, ou, incompatibles et contraire.",
      "conceptExplanation": "Le tableau de la leçon associe vocabulaire ensembliste et vocabulaire probabiliste. L'ensemble vide correspond à l'événement impossible, et $\\Omega$ à l'univers.\nL'intersection $A \\cap B$ est l'événement « $A$ et $B$ » : il ne se réalise que si $A$ et $B$ se réalisent à la fois. La réunion $A \\cup B$ est l'événement « $A$ ou $B$ » : il se réalise si l'un au moins des événements $A$ et $B$ se réalise.\nSi $A \\cap B = \\emptyset$, les événements $A$ et $B$ sont disjoints, donc incompatibles. Le complémentaire de $A$, noté $\\bar{A}$, est l'événement contraire de $A$ : $A$ se réalise si et seulement si $\\bar{A}$ ne se réalise pas.\nSi $A \\subset B$, la réalisation de $A$ entraîne celle de $B$ : on dit que $A$ implique $B$.",
      "keyRule": "« Et » égale intersection, « ou » égale réunion, intersection vide égale incompatibles, et le contraire est le complémentaire.",
      "formulas": [
        {
          "name": "Événement « A et B »",
          "formula": "A \\cap B",
          "note": "Il faut que $A$ et $B$ se réalisent à la fois."
        },
        {
          "name": "Événement « A ou B »",
          "formula": "A \\cup B",
          "note": "Il suffit que l'un au moins des deux se réalise."
        },
        {
          "name": "Événements incompatibles",
          "formula": "A \\cap B = \\emptyset",
          "note": "Deux événements contraires sont incompatibles, mais l'inverse est faux."
        }
      ],
      "workedExample": {
        "title": "Intersection et réunion au dé (exemples du tableau)",
        "statement": "Au lancer d'un dé, soit $A$ « obtenir un nombre pair » et $B$ « obtenir un multiple de $3$ ». Détermine $A \\cap B$ et $A \\cup B$.",
        "methodSteps": [
          "On écrit $A = \\{2 ; 4 ; 6\\}$ et $B = \\{3 ; 6\\}$.",
          "L'événement « $A$ et $B$ » regroupe les éléments communs : $A \\cap B = \\{6\\}$.",
          "L'événement « $A$ ou $B$ » regroupe tous les éléments de $A$ et de $B$ : $A \\cup B = \\{2 ; 3 ; 4 ; 6\\}$."
        ],
        "conclusion": "$A \\cap B = \\{6\\}$ et $A \\cup B = \\{2 ; 3 ; 4 ; 6\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'événement impossible",
          "stepTheme": "L'événement impossible",
          "stepBadge": "L'événement impossible",
          "paragraphText": "• Événement impossible : événement qui ne se réalise jamais, associé à l'ensemble vide.\nExemple du tableau : « obtenir un multiple de $3$ inférieur ou égal à $2$ » au dé est impossible, car aucun nombre de $1$ à $6$ ne convient.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p02_q1",
            "type": "mcq",
            "prompt": "À quel ensemble correspond l'événement impossible ?",
            "options": [
              "À l'ensemble vide $\\emptyset$",
              "À $\\Omega$",
              "À un singleton",
              "À $\\bar{A}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'événement impossible correspond à l'ensemble vide, noté $\\emptyset$ ou $\\{\\}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'événement « A et B »",
          "stepTheme": "L'événement « A et B »",
          "stepBadge": "L'événement « A et B »",
          "paragraphText": "• L'intersection $A \\cap B$ est l'événement « $A$ et $B$ ».\nIl ne se réalise que si $A$ et $B$ se réalisent à la fois, comme obtenir à la fois un nombre pair et un multiple de $3$ au dé, soit le $6$.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p02_q2",
            "type": "mcq",
            "prompt": "L'événement « $A$ et $B$ » se note :",
            "options": [
              "$A \\cup B$",
              "$A \\cap B$",
              "$\\bar{A}$",
              "$A \\subset B$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« $A$ et $B$ » est l'intersection $A \\cap B$, réalisée quand les deux événements se réalisent ensemble."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'événement « A ou B »",
          "stepTheme": "L'événement « A ou B »",
          "stepBadge": "L'événement « A ou B »",
          "paragraphText": "• La réunion $A \\cup B$ est l'événement « $A$ ou $B$ ».\nIl se réalise si l'un au moins des événements $A$ et $B$ se réalise : pour pair ou multiple de $3$, on obtient $\\{2 ; 3 ; 4 ; 6\\}$.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p02_q3",
            "type": "mcq",
            "prompt": "Quand l'événement « $A$ ou $B$ » est-il réalisé ?",
            "options": [
              "Quand $A$ et $B$ se réalisent à la fois uniquement",
              "Quand l'un au moins des événements $A$ et $B$ se réalise",
              "Quand aucun des deux ne se réalise",
              "Quand $A$ implique $B$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La réunion se réalise dès que l'un au moins des deux événements se réalise."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Des événements incompatibles",
          "stepTheme": "Des événements incompatibles",
          "stepBadge": "Des événements incompatibles",
          "paragraphText": "• Si $A \\cap B = \\emptyset$, alors $A$ et $B$ sont disjoints : en probabilités, on dit qu'ils sont incompatibles.\nExemple du tableau : « obtenir un nombre pair » et « obtenir un nombre impair » sont incompatibles.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p02_q4",
            "type": "mcq",
            "prompt": "Deux événements $A$ et $B$ sont incompatibles lorsque :",
            "options": [
              "$A \\cup B = \\Omega$",
              "$A = B$",
              "$A \\cap B = \\emptyset$",
              "$A \\subset B$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Incompatibles signifie que l'intersection est vide : ils ne peuvent pas se réaliser en même temps."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Incompatibles ne veut pas dire contraires",
          "stepTheme": "Incompatibles ne veut pas dire contraires",
          "stepBadge": "Incompatibles ne veut pas dire contraires",
          "paragraphText": "• Piège de l'exercice de fixation : affirmer que deux événements incompatibles sont contraires est faux.\nEn revanche, deux événements contraires sont bien incompatibles : c'est l'affirmation vraie du même exercice.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p02_q5",
            "type": "mcq",
            "prompt": "L'affirmation « deux événements incompatibles sont contraires » est :",
            "options": [
              "Vraie",
              "Vraie seulement pour le dé",
              "Toujours impossible à décider",
              "Fausse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la correction de l'exercice de fixation : incompatibles n'implique pas contraires, alors que contraires implique incompatibles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le contraire de pair",
          "stepTheme": "Le contraire de pair",
          "stepBadge": "Le contraire de pair",
          "paragraphText": "• Exemple du tableau : pour $A$ « obtenir un nombre pair », l'événement contraire est « obtenir un nombre impair ».\nLe contraire regroupe toutes les éventualités de l'univers qui ne sont pas dans $A$.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p02_q6",
            "type": "mcq",
            "prompt": "Quel est l'événement contraire de $A$ « obtenir un nombre pair » au dé ?",
            "options": [
              "Obtenir un multiple de $3$",
              "Obtenir le $6$",
              "Obtenir un nombre inférieur à $4$",
              "Obtenir un nombre impair"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le contraire de pair est impair : $\\bar{A} = \\{1 ; 3 ; 5\\}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p02_q1",
          "type": "mcq",
          "prompt": "À quel ensemble correspond l'événement impossible ?",
          "options": [
            "À l'ensemble vide $\\emptyset$",
            "À $\\Omega$",
            "À un singleton",
            "À $\\bar{A}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'événement impossible correspond à l'ensemble vide, noté $\\emptyset$ ou $\\{\\}$."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p02_q2",
          "type": "mcq",
          "prompt": "L'événement « $A$ et $B$ » se note :",
          "options": [
            "$A \\cup B$",
            "$A \\cap B$",
            "$\\bar{A}$",
            "$A \\subset B$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« $A$ et $B$ » est l'intersection $A \\cap B$, réalisée quand les deux événements se réalisent ensemble."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p02_q3",
          "type": "mcq",
          "prompt": "Quand l'événement « $A$ ou $B$ » est-il réalisé ?",
          "options": [
            "Quand $A$ et $B$ se réalisent à la fois uniquement",
            "Quand l'un au moins des événements $A$ et $B$ se réalise",
            "Quand aucun des deux ne se réalise",
            "Quand $A$ implique $B$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La réunion se réalise dès que l'un au moins des deux événements se réalise."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p02_q4",
          "type": "mcq",
          "prompt": "Deux événements $A$ et $B$ sont incompatibles lorsque :",
          "options": [
            "$A \\cup B = \\Omega$",
            "$A = B$",
            "$A \\cap B = \\emptyset$",
            "$A \\subset B$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Incompatibles signifie que l'intersection est vide : ils ne peuvent pas se réaliser en même temps."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p02_q5",
          "type": "mcq",
          "prompt": "L'affirmation « deux événements incompatibles sont contraires » est :",
          "options": [
            "Vraie",
            "Vraie seulement pour le dé",
            "Toujours impossible à décider",
            "Fausse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la correction de l'exercice de fixation : incompatibles n'implique pas contraires, alors que contraires implique incompatibles."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p02_q6",
          "type": "mcq",
          "prompt": "Quel est l'événement contraire de $A$ « obtenir un nombre pair » au dé ?",
          "options": [
            "Obtenir un multiple de $3$",
            "Obtenir le $6$",
            "Obtenir un nombre inférieur à $4$",
            "Obtenir un nombre impair"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le contraire de pair est impair : $\\bar{A} = \\{1 ; 3 ; 5\\}$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_probabilites_l02_probabilites_p03",
      "order": 3,
      "title": "Probabilité sur un ensemble fini et propriétés",
      "summary": "Définir une probabilité par la somme des probabilités des éventualités, puis appliquer les propriétés du contraire et de la réunion.",
      "conceptExplanation": "Définir une probabilité sur $\\Omega = \\{\\omega_1 ; \\omega_2 ; \\dots ; \\omega_n\\}$, c'est associer à chaque résultat $\\omega_i$ un nombre $P_i$, positif ou nul, de telle façon que $P_1 + P_2 + \\dots + P_n = 1$.\nLa probabilité d'un événement $A$ est la somme des probabilités des éventualités qui constituent $A$. On a toujours $0 \\leq P(A) \\leq 1$.\nPropriétés : la probabilité de l'événement certain est $1$, celle de l'événement impossible est $0$ ; si $A \\subset B$, alors $P(A) \\leq P(B)$ ; $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ ; si $A$ et $B$ sont incompatibles, $P(A \\cup B) = P(A) + P(B)$ ; et $P(\\bar{A}) = 1 - P(A)$.",
      "keyRule": "La somme de toutes les probabilités élémentaires vaut $1$ ; pour une réunion, on n'oublie pas de retirer l'intersection comptée deux fois.",
      "formulas": [
        {
          "name": "Probabilité de la réunion",
          "formula": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
          "note": "Si $A$ et $B$ sont incompatibles, le dernier terme est nul."
        },
        {
          "name": "Probabilité du contraire",
          "formula": "P(\\bar{A}) = 1 - P(A)",
          "note": "Le réflexe pour les événements du type « au moins »."
        },
        {
          "name": "Bornes d'une probabilité",
          "formula": "0 \\leq P(A) \\leq 1",
          "note": "Avec $P(\\Omega) = 1$ et $P(\\emptyset) = 0$."
        }
      ],
      "workedExample": {
        "title": "Réunion et contraires (exercice de fixation)",
        "statement": "Deux événements $A$ et $B$ vérifient $P(A) = 0{,}3$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}1$. Calcule $P(A \\cup B)$, $P(\\bar{A})$, $P(\\bar{B})$ et la probabilité du contraire de $A \\cup B$.",
        "methodSteps": [
          "Réunion : $P(A \\cup B) = 0{,}3 + 0{,}5 - 0{,}1 = 0{,}7$.",
          "Contraires : $P(\\bar{A}) = 1 - 0{,}3 = 0{,}7$ et $P(\\bar{B}) = 1 - 0{,}5 = 0{,}5$.",
          "Contraire de la réunion : $1 - 0{,}7 = 0{,}3$."
        ],
        "conclusion": "$P(A \\cup B) = 0{,}7$, $P(\\bar{A}) = 0{,}7$, $P(\\bar{B}) = 0{,}5$ et le contraire de la réunion a pour probabilité $0{,}3$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définir une probabilité",
          "stepTheme": "Définir une probabilité",
          "stepBadge": "Définir une probabilité",
          "paragraphText": "• Définir une probabilité sur $\\Omega$, c'est associer à chaque éventualité $\\omega_i$ un nombre $P_i$ positif ou nul.\nLa condition essentielle est que la somme de tous ces nombres vaille $1$.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p03_q1",
            "type": "mcq",
            "prompt": "Quelle condition doivent vérifier les probabilités $P_i$ des éventualités ?",
            "options": [
              "Leur somme vaut $1$",
              "Leur somme vaut $0$",
              "Chaque $P_i$ vaut $1$",
              "Leur produit vaut $1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, $P_1 + P_2 + \\dots + P_n = 1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La probabilité du contraire",
          "stepTheme": "La probabilité du contraire",
          "stepBadge": "La probabilité du contraire",
          "paragraphText": "• Propriété : $P(\\bar{A}) = 1 - P(A)$.\nElle sert dès qu'un événement est plus facile à décrire par ce qu'il exclut que par ce qu'il contient.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p03_q2",
            "type": "mcq",
            "prompt": "Si $P(A) = 0{,}3$, que vaut $P(\\bar{A})$ ?",
            "options": [
              "$0{,}3$",
              "$0{,}5$",
              "$0{,}7$",
              "$1{,}3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par la propriété du contraire : $1 - 0{,}3 = 0{,}7$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La probabilité d'une réunion",
          "stepTheme": "La probabilité d'une réunion",
          "stepBadge": "La probabilité d'une réunion",
          "paragraphText": "• Propriété : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.\nLe terme retiré évite de compter deux fois les éventualités communes à $A$ et à $B$.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p03_q3",
            "type": "mcq",
            "prompt": "Avec $P(A) = 0{,}3$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}1$, que vaut $P(A \\cup B)$ ?",
            "options": [
              "$0{,}8$",
              "$0{,}7$",
              "$0{,}9$",
              "$0{,}6$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On applique la formule : $0{,}3 + 0{,}5 - 0{,}1 = 0{,}7$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Retrouver une probabilité manquante",
          "stepTheme": "Retrouver une probabilité manquante",
          "stepBadge": "Retrouver une probabilité manquante",
          "paragraphText": "• Méthode de l'exercice de fixation : on utilise que la somme des probabilités des faces vaut $1$.\nPour le dé pipé de la leçon, trois faces ont pour probabilité $\\frac{1}{8}$ et deux faces $\\frac{1}{4}$ : il reste une seule inconnue, $P(5)$.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p03_q4",
            "type": "mcq",
            "prompt": "Un dé pipé vérifie $P(1) = P(3) = P(4) = \\frac{1}{8}$ et $P(2) = P(6) = \\frac{1}{4}$. Que vaut $P(5)$ ?",
            "options": [
              "$\\frac{1}{4}$",
              "$\\frac{3}{8}$",
              "$\\frac{1}{8}$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La somme vaut $1$ : il reste $1$ diminué des cinq probabilités connues, soit $\\frac{1}{8}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une probabilité ne dépasse jamais 1",
          "stepTheme": "Une probabilité ne dépasse jamais 1",
          "stepBadge": "Une probabilité ne dépasse jamais 1",
          "paragraphText": "• Piège : la probabilité d'un événement vérifie toujours $0 \\leq P(A) \\leq 1$.\nUn résultat supérieur à $1$ signale forcément une erreur de calcul ou de formule.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p03_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces valeurs peut être la probabilité d'un événement ?",
            "options": [
              "$0{,}7$",
              "$1{,}2$",
              "$-0{,}1$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule la valeur $0{,}7$ est comprise entre $0$ et $1$, comme l'exige la remarque de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le contraire d'une réunion",
          "stepTheme": "Le contraire d'une réunion",
          "stepBadge": "Le contraire d'une réunion",
          "paragraphText": "• Exemple de l'exercice de fixation : une fois la réunion calculée, son contraire s'obtient par la même propriété $P(\\bar{A}) = 1 - P(A)$.\nIci la réunion $A \\cup B$ a pour probabilité $0{,}7$.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p03_q6",
            "type": "mcq",
            "prompt": "Si $P(A \\cup B) = 0{,}7$, que vaut la probabilité du contraire de $A \\cup B$ ?",
            "options": [
              "$0{,}7$",
              "$0$",
              "$1$",
              "$0{,}3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le contraire de la réunion a pour probabilité $1 - 0{,}7 = 0{,}3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p03_q1",
          "type": "mcq",
          "prompt": "Quelle condition doivent vérifier les probabilités $P_i$ des éventualités ?",
          "options": [
            "Leur somme vaut $1$",
            "Leur somme vaut $0$",
            "Chaque $P_i$ vaut $1$",
            "Leur produit vaut $1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, $P_1 + P_2 + \\dots + P_n = 1$."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p03_q2",
          "type": "mcq",
          "prompt": "Si $P(A) = 0{,}3$, que vaut $P(\\bar{A})$ ?",
          "options": [
            "$0{,}3$",
            "$0{,}5$",
            "$0{,}7$",
            "$1{,}3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par la propriété du contraire : $1 - 0{,}3 = 0{,}7$."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p03_q3",
          "type": "mcq",
          "prompt": "Avec $P(A) = 0{,}3$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}1$, que vaut $P(A \\cup B)$ ?",
          "options": [
            "$0{,}8$",
            "$0{,}7$",
            "$0{,}9$",
            "$0{,}6$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On applique la formule : $0{,}3 + 0{,}5 - 0{,}1 = 0{,}7$."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p03_q4",
          "type": "mcq",
          "prompt": "Un dé pipé vérifie $P(1) = P(3) = P(4) = \\frac{1}{8}$ et $P(2) = P(6) = \\frac{1}{4}$. Que vaut $P(5)$ ?",
          "options": [
            "$\\frac{1}{4}$",
            "$\\frac{3}{8}$",
            "$\\frac{1}{8}$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La somme vaut $1$ : il reste $1$ diminué des cinq probabilités connues, soit $\\frac{1}{8}$."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p03_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces valeurs peut être la probabilité d'un événement ?",
          "options": [
            "$0{,}7$",
            "$1{,}2$",
            "$-0{,}1$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule la valeur $0{,}7$ est comprise entre $0$ et $1$, comme l'exige la remarque de la leçon."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p03_q6",
          "type": "mcq",
          "prompt": "Si $P(A \\cup B) = 0{,}7$, que vaut la probabilité du contraire de $A \\cup B$ ?",
          "options": [
            "$0{,}7$",
            "$0$",
            "$1$",
            "$0{,}3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le contraire de la réunion a pour probabilité $1 - 0{,}7 = 0{,}3$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_probabilites_l02_probabilites_p04",
      "order": 4,
      "title": "L'équiprobabilité",
      "summary": "Quand toutes les éventualités ont la même probabilité, compter les cas favorables et les cas possibles.",
      "conceptExplanation": "Lorsque tous les événements élémentaires d'un univers ont la même probabilité, on dit qu'il y a équiprobabilité. Dans ce cas, chaque éventualité a pour probabilité $\\frac{1}{\\text{card}(\\Omega)}$, et pour tout événement $A$ : $P(A) = \\frac{\\text{card}(A)}{\\text{card}(\\Omega)}$, c'est-à-dire le nombre de cas favorables divisé par le nombre de cas possibles.\nLes expressions « dé parfait ou équilibré », « boule tirée de l'urne au hasard » ou « boules indiscernables au toucher » indiquent que le modèle associé est l'équiprobabilité.\nLe cardinal d'un ensemble fini est le nombre de ses éléments, une notion rappelée dans l'exercice de fixation du vocabulaire.",
      "keyRule": "Équiprobabilité : cas favorables sur cas possibles. Les mots « au hasard » et « indiscernables au toucher » sont le signal.",
      "formulas": [
        {
          "name": "Probabilité en équiprobabilité",
          "formula": "P(A) = \\frac{\\text{card}(A)}{\\text{card}(\\Omega)}",
          "note": "Cas favorables divisés par cas possibles."
        },
        {
          "name": "Probabilité d'une éventualité",
          "formula": "P(\\{\\omega_i\\}) = \\frac{1}{\\text{card}(\\Omega)}",
          "note": "Toutes les éventualités ont la même probabilité."
        }
      ],
      "workedExample": {
        "title": "Le tirage de pièces (exercice de fixation)",
        "statement": "Un sac contient $5$ pièces de $500$ F, $10$ pièces de $250$ F et $15$ pièces de $25$ F, indiscernables au toucher. On tire simultanément $4$ pièces. Calcule la probabilité de n'avoir aucune pièce de $25$ F, puis celle d'avoir uniquement des pièces de $250$ F.",
        "methodSteps": [
          "L'univers compte $C_{30}^{4} = 27405$ tirages possibles.",
          "Aucune pièce de $25$ F : on choisit les $4$ pièces parmi les $15$ autres, soit $C_{15}^{4} = 1365$ cas, d'où une probabilité de $\\frac{1365}{27405} = \\frac{13}{261}$.",
          "Uniquement des pièces de $250$ F : $C_{10}^{4} = 210$ cas, d'où une probabilité de $\\frac{210}{27405} = \\frac{2}{261}$."
        ],
        "conclusion": "La probabilité de n'avoir aucune pièce de $25$ F est $\\frac{13}{261}$ et celle d'avoir uniquement des pièces de $250$ F est $\\frac{2}{261}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'équiprobabilité",
          "stepTheme": "L'équiprobabilité",
          "stepBadge": "L'équiprobabilité",
          "paragraphText": "• Équiprobabilité : situation où tous les événements élémentaires d'un univers ont la même probabilité.\nChaque éventualité a alors pour probabilité l'inverse du cardinal de l'univers.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p04_q1",
            "type": "mcq",
            "prompt": "Quand dit-on qu'il y a équiprobabilité ?",
            "options": [
              "Quand tous les événements élémentaires ont la même probabilité",
              "Quand l'univers est infini",
              "Quand un événement est certain",
              "Quand deux événements sont incompatibles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la leçon : toutes les éventualités ont la même probabilité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule des cas favorables",
          "stepTheme": "La formule des cas favorables",
          "stepBadge": "La formule des cas favorables",
          "paragraphText": "• En équiprobabilité, $P(A) = \\frac{\\text{card}(A)}{\\text{card}(\\Omega)}$.\nC'est le quotient du nombre de cas favorables par le nombre de cas possibles.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p04_q2",
            "type": "mcq",
            "prompt": "En équiprobabilité, la probabilité d'un événement $A$ est :",
            "options": [
              "Le cardinal de $A$ seul",
              "Le nombre de cas possibles divisé par le nombre de cas favorables",
              "Toujours $\\frac{1}{2}$",
              "Le nombre de cas favorables divisé par le nombre de cas possibles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La formule de la leçon : cas favorables sur cas possibles."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La probabilité d'une face du dé équilibré",
          "stepTheme": "La probabilité d'une face du dé équilibré",
          "stepBadge": "La probabilité d'une face du dé équilibré",
          "paragraphText": "• Pour un dé parfait à six faces, chaque face a pour probabilité $\\frac{1}{\\text{card}(\\Omega)}$.\nL'univers compte six éventualités équiprobables.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p04_q3",
            "type": "mcq",
            "prompt": "Pour un dé équilibré à six faces, que vaut la probabilité d'obtenir le $4$ ?",
            "options": [
              "$\\frac{1}{4}$",
              "$\\frac{1}{6}$",
              "$\\frac{4}{6}$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque éventualité a pour probabilité $\\frac{1}{6}$ en équiprobabilité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Compter avec les combinaisons",
          "stepTheme": "Compter avec les combinaisons",
          "stepBadge": "Compter avec les combinaisons",
          "paragraphText": "• Méthode de l'exercice des pièces : pour un tirage simultané, le nombre de cas se compte avec les combinaisons.\nL'univers des tirages de $4$ pièces parmi $30$ compte $C_{30}^{4} = 27405$ cas possibles.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p04_q4",
            "type": "mcq",
            "prompt": "Combien de tirages possibles y a-t-il quand on tire simultanément $4$ pièces parmi $30$ ?",
            "options": [
              "$120$",
              "$30$",
              "$27405$",
              "$657720$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le nombre de cas possibles est $C_{30}^{4} = 27405$, comme dans la correction de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le signal de l'équiprobabilité",
          "stepTheme": "Le signal de l'équiprobabilité",
          "stepBadge": "Le signal de l'équiprobabilité",
          "paragraphText": "• Piège : appliquer la formule des cas favorables suppose l'équiprobabilité.\nLes expressions « boules indiscernables au toucher » ou « tirée au hasard » sont justement les indices, donnés par la remarque de la leçon, que ce modèle s'applique.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p04_q5",
            "type": "mcq",
            "prompt": "Quelle expression indique, selon la remarque de la leçon, que le modèle est l'équiprobabilité ?",
            "options": [
              "« Dé pipé »",
              "« Boules indiscernables au toucher »",
              "« Boules de couleurs différentes »",
              "« Tirage truqué »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remarque cite « dé parfait ou équilibré », « boule tirée au hasard » et « boules indiscernables au toucher » comme indices d'équiprobabilité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Au moins une pièce de 500 F",
          "stepTheme": "Au moins une pièce de 500 F",
          "stepBadge": "Au moins une pièce de 500 F",
          "paragraphText": "• Exemple de l'exercice de fixation : l'événement $E$ « avoir obtenu au moins une pièce de $500$ F » se calcule par son contraire, aucune pièce de $500$ F.\nLe contraire correspond à choisir les $4$ pièces parmi les $25$ autres, soit $C_{25}^{4} = 12650$ cas sur $27405$.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la probabilité d'avoir obtenu au moins une pièce de $500$ F ?",
            "options": [
              "$\\frac{12650}{27405}$",
              "$\\frac{13}{261}$",
              "$\\frac{2}{261}$",
              "$\\frac{2951}{5481}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par le contraire : la probabilité vaut $1$ diminué de $\\frac{12650}{27405}$, soit $\\frac{14755}{27405} = \\frac{2951}{5481}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p04_q1",
          "type": "mcq",
          "prompt": "Quand dit-on qu'il y a équiprobabilité ?",
          "options": [
            "Quand tous les événements élémentaires ont la même probabilité",
            "Quand l'univers est infini",
            "Quand un événement est certain",
            "Quand deux événements sont incompatibles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la leçon : toutes les éventualités ont la même probabilité."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p04_q2",
          "type": "mcq",
          "prompt": "En équiprobabilité, la probabilité d'un événement $A$ est :",
          "options": [
            "Le cardinal de $A$ seul",
            "Le nombre de cas possibles divisé par le nombre de cas favorables",
            "Toujours $\\frac{1}{2}$",
            "Le nombre de cas favorables divisé par le nombre de cas possibles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La formule de la leçon : cas favorables sur cas possibles."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p04_q3",
          "type": "mcq",
          "prompt": "Pour un dé équilibré à six faces, que vaut la probabilité d'obtenir le $4$ ?",
          "options": [
            "$\\frac{1}{4}$",
            "$\\frac{1}{6}$",
            "$\\frac{4}{6}$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque éventualité a pour probabilité $\\frac{1}{6}$ en équiprobabilité."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p04_q4",
          "type": "mcq",
          "prompt": "Combien de tirages possibles y a-t-il quand on tire simultanément $4$ pièces parmi $30$ ?",
          "options": [
            "$120$",
            "$30$",
            "$27405$",
            "$657720$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le nombre de cas possibles est $C_{30}^{4} = 27405$, comme dans la correction de la leçon."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p04_q5",
          "type": "mcq",
          "prompt": "Quelle expression indique, selon la remarque de la leçon, que le modèle est l'équiprobabilité ?",
          "options": [
            "« Dé pipé »",
            "« Boules indiscernables au toucher »",
            "« Boules de couleurs différentes »",
            "« Tirage truqué »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remarque cite « dé parfait ou équilibré », « boule tirée au hasard » et « boules indiscernables au toucher » comme indices d'équiprobabilité."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la probabilité d'avoir obtenu au moins une pièce de $500$ F ?",
          "options": [
            "$\\frac{12650}{27405}$",
            "$\\frac{13}{261}$",
            "$\\frac{2}{261}$",
            "$\\frac{2951}{5481}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par le contraire : la probabilité vaut $1$ diminué de $\\frac{12650}{27405}$, soit $\\frac{14755}{27405} = \\frac{2951}{5481}$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_probabilites_l02_probabilites_p05",
      "order": 5,
      "title": "Variable aléatoire et loi de probabilité",
      "summary": "Une variable aléatoire transforme chaque issue en un nombre ; sa loi donne la probabilité de chaque valeur.",
      "conceptExplanation": "On appelle variable aléatoire toute fonction $X$ de $\\Omega$ dans $\\mathbb{R}$ qui, à tout élément de $\\Omega$, fait correspondre un nombre réel. L'événement noté $\\{X = x\\}$ est l'ensemble des éléments de $\\Omega$ qui ont pour image $x$ par $X$. L'ensemble des valeurs prises par $X$ est noté $\\Omega'$.\nExemple de la leçon : au lancer d'un dé, $X$ vaut $0$ si le nombre est pair et $1$ si le nombre est impair ; alors $\\Omega' = \\{0 ; 1\\}$.\nLa loi de probabilité de $X$ est la fonction définie sur $\\Omega'$ qui, à chaque valeur $x_i$, fait correspondre $p_i = P(X = x_i)$. La somme de toutes ces probabilités vaut $1$, et la loi se présente en tableau : les valeurs en première ligne, leurs probabilités en seconde ligne.",
      "keyRule": "Variable aléatoire : une fonction des issues vers les réels ; sa loi est un tableau dont les probabilités totalisent $1$.",
      "formulas": [
        {
          "name": "Loi de probabilité",
          "formula": "p_i = P(X = x_i), \\quad p_1 + p_2 + \\dots + p_n = 1",
          "note": "La loi associe à chaque valeur prise par $X$ sa probabilité."
        },
        {
          "name": "Ensemble des valeurs prises",
          "formula": "\\Omega' = \\{x_1 {;} x_2 {;} \\dots {;} x_m\\}",
          "note": "C'est l'ensemble de toutes les images des éléments de $\\Omega$ par $X$."
        }
      ],
      "workedExample": {
        "title": "Le nombre de boules noires tirées (exercice de fixation)",
        "statement": "Une urne contient $5$ boules : $2$ noires et $3$ rouges. On tire simultanément $2$ boules et $X$ est le nombre de boules noires tirées. Détermine la loi de probabilité de $X$.",
        "methodSteps": [
          "On peut tirer $0$, $1$ ou $2$ boules noires : $\\Omega' = \\{0 ; 1 ; 2\\}$.",
          "L'univers compte $C_{5}^{2} = 10$ tirages.",
          "Aucune noire : $C_{3}^{2} = 3$ cas, donc $P(X = 0) = \\frac{3}{10}$ ; deux noires : $1$ cas, donc $P(X = 2) = \\frac{1}{10}$.",
          "Une seule noire : $2 \\times 3 = 6$ cas, donc $P(X = 1) = \\frac{6}{10} = \\frac{3}{5}$."
        ],
        "conclusion": "La loi de $X$ est : $\\frac{3}{10}$ pour $0$, $\\frac{6}{10}$ pour $1$ et $\\frac{1}{10}$ pour $2$, de somme $1$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une variable aléatoire",
          "stepTheme": "Une variable aléatoire",
          "stepBadge": "Une variable aléatoire",
          "paragraphText": "• Variable aléatoire : toute fonction $X$ de $\\Omega$ dans $\\mathbb{R}$ qui, à tout élément de $\\Omega$, fait correspondre un nombre réel.\nElle transforme donc une expérience en nombres, que l'on peut ensuite traiter par le calcul.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p05_q1",
            "type": "mcq",
            "prompt": "Une variable aléatoire est :",
            "options": [
              "Une fonction de $\\Omega$ dans $\\mathbb{R}$",
              "Un événement de l'univers",
              "Une probabilité comprise entre $0$ et $1$",
              "L'univers lui-même"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la leçon, marquée « Série A1 seulement » : une fonction de l'univers vers les réels."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'ensemble des valeurs prises",
          "stepTheme": "L'ensemble des valeurs prises",
          "stepBadge": "L'ensemble des valeurs prises",
          "paragraphText": "• L'ensemble des valeurs prises par $X$ est l'ensemble de toutes les images des éléments de $\\Omega$ par $X$, noté $\\Omega'$.\nPour $X$ valant $0$ si le dé donne un nombre pair et $1$ sinon, $\\Omega' = \\{0 ; 1\\}$.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p05_q2",
            "type": "mcq",
            "prompt": "Pour le dé avec $X = 0$ si le nombre est pair et $X = 1$ s'il est impair, que vaut $\\Omega'$ ?",
            "options": [
              "$\\{0 ; 1\\}$",
              "$\\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$",
              "$\\{0\\}$",
              "$\\{2 ; 4 ; 6\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les seules images possibles sont $0$ pour un nombre pair et $1$ pour un nombre impair : $\\Omega' = \\{0 ; 1\\}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La somme des probabilités d'une loi",
          "stepTheme": "La somme des probabilités d'une loi",
          "stepBadge": "La somme des probabilités d'une loi",
          "paragraphText": "• La loi de probabilité associe à chaque valeur $x_i$ le nombre $p_i = P(X = x_i)$.\nComme pour toute probabilité, la somme de tous les $p_i$ vaut $1$ : c'est le contrôle à faire après chaque calcul de loi.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p05_q3",
            "type": "mcq",
            "prompt": "Que vaut la somme des probabilités d'une loi de probabilité ?",
            "options": [
              "$0$",
              "$1$",
              "Le nombre de valeurs prises",
              "Cela dépend de $X$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remarque de la leçon le rappelle : la somme des $p_i$ d'une loi vaut $1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Construire une loi par dénombrement",
          "stepTheme": "Construire une loi par dénombrement",
          "stepBadge": "Construire une loi par dénombrement",
          "paragraphText": "• Méthode de l'exercice des boules : on compte les tirages avec les combinaisons, valeur par valeur.\nPour $X$ nombre de boules noires parmi $2$ tirées d'une urne de $2$ noires et $3$ rouges, l'univers compte $C_{5}^{2} = 10$ tirages.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p05_q4",
            "type": "mcq",
            "prompt": "Dans cet exercice, que vaut $P(X = 1)$ ?",
            "options": [
              "$\\frac{1}{10}$",
              "$\\frac{3}{10}$",
              "$\\frac{6}{10}$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une noire et une rouge : $2 \\times 3 = 6$ cas favorables sur $10$, soit $\\frac{6}{10}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'événement X égale x",
          "stepTheme": "L'événement X égale x",
          "stepBadge": "L'événement X égale x",
          "paragraphText": "• Piège : $\\{X = x\\}$ n'est pas le nombre $x$ lui-même.\nC'est l'ensemble des éléments de $\\Omega$ qui ont pour image $x$ par $X$, donc un événement de l'univers, auquel on peut associer une probabilité.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p05_q5",
            "type": "mcq",
            "prompt": "Que désigne l'écriture $\\{X = x\\}$ ?",
            "options": [
              "La valeur $x$ seule",
              "L'univers $\\Omega'$",
              "L'ensemble des éléments de $\\Omega$ qui ont pour image $x$ par $X$",
              "La probabilité de $x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par définition, $\\{X = x\\}$ est l'ensemble des issues dont l'image par $X$ est $x$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La loi de l'exemple du dé",
          "stepTheme": "La loi de l'exemple du dé",
          "stepBadge": "La loi de l'exemple du dé",
          "paragraphText": "• Exemple de la leçon : $X$ vaut $0$ pour un nombre pair et $1$ pour un nombre impair au lancer d'un dé équilibré.\nIl y a trois nombres pairs et trois nombres impairs, donc chaque valeur a la même probabilité.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p05_q6",
            "type": "mcq",
            "prompt": "Dans cet exemple, que valent $P(X = 0)$ et $P(X = 1)$ ?",
            "options": [
              "$0$ et $1$",
              "$\\frac{1}{6}$ et $\\frac{5}{6}$",
              "$\\frac{1}{3}$ et $\\frac{2}{3}$",
              "$\\frac{1}{2}$ et $\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Trois cas sur six pour chaque valeur : la loi donne $\\frac{1}{2}$ pour $0$ et $\\frac{1}{2}$ pour $1$, comme dans le tableau de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p05_q1",
          "type": "mcq",
          "prompt": "Une variable aléatoire est :",
          "options": [
            "Une fonction de $\\Omega$ dans $\\mathbb{R}$",
            "Un événement de l'univers",
            "Une probabilité comprise entre $0$ et $1$",
            "L'univers lui-même"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la leçon, marquée « Série A1 seulement » : une fonction de l'univers vers les réels."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p05_q2",
          "type": "mcq",
          "prompt": "Pour le dé avec $X = 0$ si le nombre est pair et $X = 1$ s'il est impair, que vaut $\\Omega'$ ?",
          "options": [
            "$\\{0 ; 1\\}$",
            "$\\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$",
            "$\\{0\\}$",
            "$\\{2 ; 4 ; 6\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les seules images possibles sont $0$ pour un nombre pair et $1$ pour un nombre impair : $\\Omega' = \\{0 ; 1\\}$."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p05_q3",
          "type": "mcq",
          "prompt": "Que vaut la somme des probabilités d'une loi de probabilité ?",
          "options": [
            "$0$",
            "$1$",
            "Le nombre de valeurs prises",
            "Cela dépend de $X$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remarque de la leçon le rappelle : la somme des $p_i$ d'une loi vaut $1$."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p05_q4",
          "type": "mcq",
          "prompt": "Dans cet exercice, que vaut $P(X = 1)$ ?",
          "options": [
            "$\\frac{1}{10}$",
            "$\\frac{3}{10}$",
            "$\\frac{6}{10}$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une noire et une rouge : $2 \\times 3 = 6$ cas favorables sur $10$, soit $\\frac{6}{10}$."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p05_q5",
          "type": "mcq",
          "prompt": "Que désigne l'écriture $\\{X = x\\}$ ?",
          "options": [
            "La valeur $x$ seule",
            "L'univers $\\Omega'$",
            "L'ensemble des éléments de $\\Omega$ qui ont pour image $x$ par $X$",
            "La probabilité de $x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par définition, $\\{X = x\\}$ est l'ensemble des issues dont l'image par $X$ est $x$."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p05_q6",
          "type": "mcq",
          "prompt": "Dans cet exemple, que valent $P(X = 0)$ et $P(X = 1)$ ?",
          "options": [
            "$0$ et $1$",
            "$\\frac{1}{6}$ et $\\frac{5}{6}$",
            "$\\frac{1}{3}$ et $\\frac{2}{3}$",
            "$\\frac{1}{2}$ et $\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Trois cas sur six pour chaque valeur : la loi donne $\\frac{1}{2}$ pour $0$ et $\\frac{1}{2}$ pour $1$, comme dans le tableau de la leçon."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_probabilites_l02_probabilites_p06",
      "order": 6,
      "title": "Espérance, variance et écart type",
      "summary": "L'espérance est la moyenne des valeurs pondérées par leurs probabilités ; la variance mesure la dispersion et l'écart type en est la racine carrée.",
      "conceptExplanation": "L'espérance mathématique de $X$ est le nombre $E(X)$ défini par $E(X) = p_1 x_1 + p_2 x_2 + \\dots + p_n x_n$. C'est la moyenne des valeurs prises par $X$ sur un grand nombre de parties.\nLa variance est le nombre $V(X)$ défini par $V(X) = p_1 x_1^2 + p_2 x_2^2 + \\dots + p_n x_n^2 - (E(X))^2$. L'écart type est le nombre $\\sigma$ défini par $\\sigma = \\sqrt{V(X)}$.\nLorsque $X$ représente le gain algébrique d'un joueur : si $E(X) = 0$, le jeu est équitable ; si $E(X) > 0$, le jeu est favorable au joueur ; si $E(X) < 0$, le jeu est défavorable au joueur.",
      "keyRule": "Espérance positive : jeu favorable ; nulle : jeu équitable ; négative : jeu défavorable. Et l'écart type est la racine carrée de la variance.",
      "formulas": [
        {
          "name": "Espérance mathématique",
          "formula": "E(X) = p_1 x_1 + p_2 x_2 + \\dots + p_n x_n",
          "note": "C'est la moyenne des valeurs prises par $X$ sur un grand nombre de parties."
        },
        {
          "name": "Variance",
          "formula": "V(X) = p_1 x_1^2 + \\dots + p_n x_n^2 - (E(X))^2",
          "note": "On retire le carré de l'espérance à la moyenne des carrés."
        },
        {
          "name": "Écart type",
          "formula": "\\sigma = \\sqrt{V(X)}",
          "note": "L'écart type mesure la dispersion autour de l'espérance."
        }
      ],
      "workedExample": {
        "title": "Espérance et dispersion du nombre de boules noires (exercice de fixation)",
        "statement": "Pour la loi $P(X = 0) = \\frac{3}{10}$, $P(X = 1) = \\frac{6}{10}$ et $P(X = 2) = \\frac{1}{10}$, calcule l'espérance, la variance et l'écart type de $X$.",
        "methodSteps": [
          "Espérance : on pondère chaque valeur par sa probabilité, ce qui donne $\\frac{8}{10} = \\frac{4}{5}$.",
          "Moyenne des carrés : les carrés $0$, $1$ et $4$ pondérés donnent $1$.",
          "Variance : $1$ diminué du carré de l'espérance donne $\\frac{9}{25}$.",
          "Écart type : la racine carrée de la variance donne $\\frac{3}{5}$."
        ],
        "conclusion": "$E(X) = \\frac{4}{5}$, $V(X) = \\frac{9}{25}$ et $\\sigma = \\frac{3}{5}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'espérance mathématique",
          "stepTheme": "L'espérance mathématique",
          "stepBadge": "L'espérance mathématique",
          "paragraphText": "• Espérance mathématique : le nombre $E(X) = p_1 x_1 + p_2 x_2 + \\dots + p_n x_n$.\nLa leçon la présente comme la moyenne des valeurs prises par $X$ sur un grand nombre de parties.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p06_q1",
            "type": "mcq",
            "prompt": "Comment se définit l'espérance mathématique de $X$ ?",
            "options": [
              "La somme des valeurs pondérées par leurs probabilités",
              "La plus grande valeur prise par $X$",
              "La somme des probabilités",
              "La racine carrée de la variance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, $E(X)$ est la somme des produits de chaque valeur par sa probabilité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La variance et l'écart type",
          "stepTheme": "La variance et l'écart type",
          "stepBadge": "La variance et l'écart type",
          "paragraphText": "• La variance est $V(X) = p_1 x_1^2 + \\dots + p_n x_n^2 - (E(X))^2$.\n• L'écart type est $\\sigma = \\sqrt{V(X)}$ : il se déduit donc directement de la variance.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p06_q2",
            "type": "mcq",
            "prompt": "Comment obtient-on l'écart type à partir de la variance ?",
            "options": [
              "En divisant la variance par $2$",
              "En prenant la racine carrée de la variance",
              "En élevant la variance au carré",
              "En ajoutant l'espérance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $\\sigma = \\sqrt{V(X)}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le signe de l'espérance et le jeu",
          "stepTheme": "Le signe de l'espérance et le jeu",
          "stepBadge": "Le signe de l'espérance et le jeu",
          "paragraphText": "• Quand $X$ est le gain algébrique d'un joueur, le signe de $E(X)$ tranche : positif, jeu favorable ; nul, jeu équitable ; négatif, jeu défavorable.\nC'est la remarque de la leçon qui sert dans les situations de jeu.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p06_q3",
            "type": "mcq",
            "prompt": "Si le gain algébrique $X$ d'un joueur vérifie $E(X) = 0$, le jeu est :",
            "options": [
              "Favorable au joueur",
              "Équitable",
              "Défavorable au joueur",
              "Impossible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remarque de la leçon : $E(X) = 0$ signifie que le jeu est équitable."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer une espérance à partir d'un tableau",
          "stepTheme": "Calculer une espérance à partir d'un tableau",
          "stepBadge": "Calculer une espérance à partir d'un tableau",
          "paragraphText": "• Méthode de l'exercice d'application 2 : on multiplie chaque valeur par sa probabilité, puis on additionne.\nPour les valeurs $-15$, $0$, $15$ et $30$ de probabilités $\\frac{1}{8}$, $\\frac{3}{8}$, $\\frac{3}{8}$ et $\\frac{1}{8}$, les produits se compensent partiellement.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p06_q4",
            "type": "mcq",
            "prompt": "Pour cette loi, que vaut $E(X)$ ?",
            "options": [
              "$0$",
              "$15$",
              "$\\frac{15}{2}$",
              "$\\frac{60}{8}$ simplifié en $30$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le calcul donne $\\frac{60}{8}$, qui se simplifie en $\\frac{15}{2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un jeu défavorable a une espérance négative",
          "stepTheme": "Un jeu défavorable a une espérance négative",
          "stepBadge": "Un jeu défavorable a une espérance négative",
          "paragraphText": "• Piège : un jeu favorable au joueur correspond à $E(X) > 0$, pas à $E(X) < 0$.\nUne espérance négative signifie que le joueur perd en moyenne : le jeu lui est défavorable.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p06_q5",
            "type": "mcq",
            "prompt": "Si $E(X) < 0$ pour le gain algébrique d'un joueur, le jeu est :",
            "options": [
              "Favorable au joueur",
              "Équitable",
              "Toujours gagnant",
              "Défavorable au joueur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une espérance négative traduit une perte moyenne : le jeu est défavorable au joueur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La valeur minimale de m (situation complexe)",
          "stepTheme": "La valeur minimale de m (situation complexe)",
          "stepBadge": "La valeur minimale de m (situation complexe)",
          "paragraphText": "• Exemple de la situation complexe : une urne contient $3$ boules jaunes, $2$ bleues, $1$ rouge et $4$ vertes ; les gains sont $30$ F pour une jaune, $m$ francs pour une bleue, $100$ F pour une rouge et $20$ F pour une verte.\nL'espérance du gain vaut alors une expression en $m$, et Mariam veut qu'elle soit d'au moins $45$ F en moyenne.",
          "exercise": {
            "id": "terminale_a1_maths_probabilites_l02_probabilites_p06_q6",
            "type": "mcq",
            "prompt": "Quelle est la valeur minimale de $m$ pour gagner en moyenne au moins $45$ F ?",
            "options": [
              "$45$ F",
              "$180$ F",
              "$270$ F",
              "$90$ F"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La correction donne une espérance de $\\frac{270 + 2m}{10}$ ; la condition d'atteindre $45$ conduit à $m \\geq 90$, donc la valeur minimale est $90$ F."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p06_q1",
          "type": "mcq",
          "prompt": "Comment se définit l'espérance mathématique de $X$ ?",
          "options": [
            "La somme des valeurs pondérées par leurs probabilités",
            "La plus grande valeur prise par $X$",
            "La somme des probabilités",
            "La racine carrée de la variance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, $E(X)$ est la somme des produits de chaque valeur par sa probabilité."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p06_q2",
          "type": "mcq",
          "prompt": "Comment obtient-on l'écart type à partir de la variance ?",
          "options": [
            "En divisant la variance par $2$",
            "En prenant la racine carrée de la variance",
            "En élevant la variance au carré",
            "En ajoutant l'espérance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $\\sigma = \\sqrt{V(X)}$."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p06_q3",
          "type": "mcq",
          "prompt": "Si le gain algébrique $X$ d'un joueur vérifie $E(X) = 0$, le jeu est :",
          "options": [
            "Favorable au joueur",
            "Équitable",
            "Défavorable au joueur",
            "Impossible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remarque de la leçon : $E(X) = 0$ signifie que le jeu est équitable."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p06_q4",
          "type": "mcq",
          "prompt": "Pour cette loi, que vaut $E(X)$ ?",
          "options": [
            "$0$",
            "$15$",
            "$\\frac{15}{2}$",
            "$\\frac{60}{8}$ simplifié en $30$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le calcul donne $\\frac{60}{8}$, qui se simplifie en $\\frac{15}{2}$."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p06_q5",
          "type": "mcq",
          "prompt": "Si $E(X) < 0$ pour le gain algébrique d'un joueur, le jeu est :",
          "options": [
            "Favorable au joueur",
            "Équitable",
            "Toujours gagnant",
            "Défavorable au joueur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une espérance négative traduit une perte moyenne : le jeu est défavorable au joueur."
        },
        {
          "id": "terminale_a1_maths_probabilites_l02_probabilites_p06_q6",
          "type": "mcq",
          "prompt": "Quelle est la valeur minimale de $m$ pour gagner en moyenne au moins $45$ F ?",
          "options": [
            "$45$ F",
            "$180$ F",
            "$270$ F",
            "$90$ F"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La correction donne une espérance de $\\frac{270 + 2m}{10}$ ; la condition d'atteindre $45$ conduit à $m \\geq 90$, donc la valeur minimale est $90$ F."
        }
      ]
    }
  ]
};
