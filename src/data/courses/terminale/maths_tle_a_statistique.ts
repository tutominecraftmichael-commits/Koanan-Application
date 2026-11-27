import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 6 : Statistique à deux variables » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1612
export const MATHS_TLE_A_L06_STATISTIQUE: CurriculumChapter = {
  "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 6,
  "title": "Leçon 6 : Statistique à deux variables",
  "summary": "Des élèves cherchent à savoir si la pluviométrie d'une ville est liée à sa température afin de prévoir la pluviométrie d'un mois connaissant sa température : la statistique à deux variables étudie deux caractères quantitatifs sur une même population grâce au nuage de points, au point moyen, aux ajustements linéaires et au coefficient de corrélation linéaire.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1612",
  "points": [
    {
      "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01",
      "order": 1,
      "title": "La série statistique double et le tableau de contingence",
      "summary": "Présenter deux caractères quantitatifs étudiés sur une même population et lire un tableau à double entrée.",
      "conceptExplanation": "On considère deux caractères quantitatifs $X$ et $Y$ sur une même population de $n$ individus. On note $x_1, x_2, \\ldots, x_p$ les valeurs du caractère $X$, $y_1, y_2, \\ldots, y_q$ les valeurs du caractère $Y$ et $n_{ij}$ l'effectif du couple $(x_i ; y_j)$.\nOn appelle série statistique double de caractère $(X, Y)$ l'ensemble des triplets $(x_i, y_j, n_{ij})$.\nDans l'exemple de la leçon, une étude porte sur $100$ ménages : $X$ est le nombre d'enfants et $Y$ le nombre de pièces de l'appartement occupé. Les valeurs de $Y$ sont inscrites sur la première ligne ($1, 2, 3, 4$), celles de $X$ dans la première colonne ($0, 1, 2, 3, 4, 5$), et les nombres intérieurs sont les effectifs $n_{ij}$ des couples. Ce tableau à double entrée est appelé tableau de contingence : ainsi, il y a $6$ ménages qui n'ont aucun enfant et qui occupent un appartement d'une pièce, donc l'effectif du couple $(0 ; 1)$ est $6$.",
      "keyRule": "Dans un tableau de contingence, l'effectif d'un couple se lit à l'intersection de la ligne de sa valeur de X et de la colonne de sa valeur de Y.",
      "formulas": [
        {
          "name": "Effectif d'un couple",
          "formula": "n_{ij} \\text{ : effectif du couple } (x_i ; y_j)"
        }
      ],
      "workedExample": {
        "title": "Combien de ménages ont deux enfants et trois pièces ?",
        "statement": "Dans le tableau de contingence de la leçon (100 ménages, X = nombre d'enfants, Y = nombre de pièces), détermine le nombre de ménages qui ont deux enfants et qui occupent un appartement de trois pièces.",
        "methodSteps": [
          "On repère la ligne correspondant à la valeur $2$ du caractère $X$ (deux enfants).",
          "On repère la colonne correspondant à la valeur $3$ du caractère $Y$ (trois pièces).",
          "L'intersection de cette ligne et de cette colonne donne $16$."
        ],
        "conclusion": "16 ménages ont deux enfants et occupent un appartement de trois pièces : l'effectif du couple $(2 ; 3)$ est $16$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La série statistique double",
          "stepTheme": "La série statistique double",
          "stepBadge": "La série statistique double",
          "paragraphText": "• On appelle série statistique double de caractère $(X, Y)$ l'ensemble des triplets $(x_i, y_j, n_{ij})$.\n$X$ et $Y$ sont deux caractères quantitatifs étudiés sur une même population de $n$ individus.\n$n_{ij}$ est l'effectif du couple $(x_i ; y_j)$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01_q1",
            "type": "mcq",
            "prompt": "On appelle série statistique double de caractère $(X, Y)$ :",
            "options": [
              "L'ensemble des valeurs de $X$ seulement",
              "L'ensemble des triplets $(x_i, y_j, n_{ij})$",
              "La liste des effectifs de $Y$ seulement",
              "Un tableau de fréquences d'un seul caractère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la leçon : la série double rassemble, pour chaque couple de valeurs, son effectif $n_{ij}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le tableau de contingence",
          "stepTheme": "Le tableau de contingence",
          "stepBadge": "Le tableau de contingence",
          "paragraphText": "• Le tableau qui présente la série statistique double est un tableau à double entrée appelé tableau de contingence.\nDans l'exemple de la leçon, la première ligne donne les valeurs de $Y$ : $y_1 = 1$, $y_2 = 2$, $y_3 = 3$, $y_4 = 4$.\nLa première colonne donne les valeurs de $X$ : $0, 1, 2, 3, 4, 5$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01_q2",
            "type": "mcq",
            "prompt": "Dans le tableau de contingence de la leçon, les valeurs du caractère $Y$ (nombre de pièces) sont :",
            "options": [
              "$0, 1, 2, 3, 4, 5$",
              "$1, 2, 3, 4, 5, 6$",
              "$1, 2, 3, 4$",
              "$2, 4, 6, 8$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La première ligne du tableau affiche $y_1 = 1$, $y_2 = 2$, $y_3 = 3$ et $y_4 = 4$. Les valeurs $0$ à $5$ sont celles du caractère $X$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'effectif du couple (0 ; 1)",
          "stepTheme": "L'effectif du couple (0 ; 1)",
          "stepBadge": "L'effectif du couple (0 ; 1)",
          "paragraphText": "• Le nombre $6$ du tableau se trouve dans la colonne de la valeur $1$ du caractère $Y$ et dans la ligne de la valeur $0$ du caractère $X$.\nIl y a donc $6$ ménages qui n'ont aucun enfant et qui occupent un appartement d'une pièce.\nOn dit que l'effectif du couple $(0 ; 1)$ est $6$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01_q3",
            "type": "mcq",
            "prompt": "Dans le tableau de la leçon, l'effectif du couple $(0 ; 1)$ est :",
            "options": [
              "$3$",
              "$6$",
              "$1$",
              "$10$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "À l'intersection de la ligne $X = 0$ et de la colonne $Y = 1$, on lit $6$ : c'est l'effectif du couple $(0 ; 1)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'effectif du couple (2 ; 3)",
          "stepTheme": "L'effectif du couple (2 ; 3)",
          "stepBadge": "L'effectif du couple (2 ; 3)",
          "paragraphText": "• Pour trouver le nombre de ménages ayant deux enfants et un appartement de trois pièces, on croise la ligne de la valeur $2$ de $X$ et la colonne de la valeur $3$ de $Y$.\nL'intersection donne $16$.\nOn dit que l'effectif du couple $(2 ; 3)$ est $16$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01_q4",
            "type": "mcq",
            "prompt": "Dans le tableau de la leçon, combien de ménages ont deux enfants et occupent un appartement de trois pièces ?",
            "options": [
              "$10$",
              "$30$",
              "$3$",
              "$16$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'intersection de la ligne $X = 2$ et de la colonne $Y = 3$ donne $16$ ménages."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La population étudiée compte 100 ménages",
          "stepTheme": "La population étudiée compte 100 ménages",
          "stepBadge": "La population étudiée compte 100 ménages",
          "paragraphText": "• L'étude porte sur une population de $100$ ménages.\nLes deux caractères étudiés sont le nombre d'enfants (caractère $X$) et le nombre de pièces de l'appartement occupé (caractère $Y$).\nCe sont deux caractères quantitatifs observés sur la même population : c'est ce qui fait de la série une série double.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01_q5",
            "type": "mcq",
            "prompt": "Dans l'exemple de la leçon, les deux caractères étudiés sur les 100 ménages sont :",
            "options": [
              "Le nombre d'enfants et le nombre de pièces de l'appartement",
              "Le nombre d'enfants et le loyer de l'appartement",
              "Le nombre de pièces et la surface de l'appartement",
              "Le nombre d'enfants et l'âge des parents"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'énoncé de l'exemple le dit : $X$ est le nombre d'enfants et $Y$ le nombre de pièces de l'appartement occupé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas intervertir ligne et colonne",
          "stepTheme": "Ne pas intervertir ligne et colonne",
          "stepBadge": "Ne pas intervertir ligne et colonne",
          "paragraphText": "• Piège : le couple $(x_i ; y_j)$ se lit ligne de $X$ d'abord, colonne de $Y$ ensuite.\nLe nombre $6$ est l'effectif du couple $(0 ; 1)$, et non du couple $(1 ; 0)$, qui n'existe même pas car $0$ n'est pas une valeur de $Y$.\nIntervertir les deux caractères donne un couple différent, voire impossible.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01_q6",
            "type": "mcq",
            "prompt": "Le nombre $6$ dans le tableau de contingence est l'effectif du couple :",
            "options": [
              "$(1 ; 0)$",
              "$(0 ; 1)$",
              "$(6 ; 1)$",
              "$(0 ; 6)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le $6$ est sur la ligne de la valeur $0$ de $X$ et dans la colonne de la valeur $1$ de $Y$ : c'est l'effectif du couple $(0 ; 1)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01_q1",
          "type": "mcq",
          "prompt": "On appelle série statistique double de caractère $(X, Y)$ :",
          "options": [
            "L'ensemble des valeurs de $X$ seulement",
            "L'ensemble des triplets $(x_i, y_j, n_{ij})$",
            "La liste des effectifs de $Y$ seulement",
            "Un tableau de fréquences d'un seul caractère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la leçon : la série double rassemble, pour chaque couple de valeurs, son effectif $n_{ij}$."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01_q2",
          "type": "mcq",
          "prompt": "Dans le tableau de contingence de la leçon, les valeurs du caractère $Y$ (nombre de pièces) sont :",
          "options": [
            "$0, 1, 2, 3, 4, 5$",
            "$1, 2, 3, 4, 5, 6$",
            "$1, 2, 3, 4$",
            "$2, 4, 6, 8$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La première ligne du tableau affiche $y_1 = 1$, $y_2 = 2$, $y_3 = 3$ et $y_4 = 4$. Les valeurs $0$ à $5$ sont celles du caractère $X$."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01_q3",
          "type": "mcq",
          "prompt": "Dans le tableau de la leçon, l'effectif du couple $(0 ; 1)$ est :",
          "options": [
            "$3$",
            "$6$",
            "$1$",
            "$10$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "À l'intersection de la ligne $X = 0$ et de la colonne $Y = 1$, on lit $6$ : c'est l'effectif du couple $(0 ; 1)$."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01_q4",
          "type": "mcq",
          "prompt": "Dans le tableau de la leçon, combien de ménages ont deux enfants et occupent un appartement de trois pièces ?",
          "options": [
            "$10$",
            "$30$",
            "$3$",
            "$16$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'intersection de la ligne $X = 2$ et de la colonne $Y = 3$ donne $16$ ménages."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01_q5",
          "type": "mcq",
          "prompt": "Dans l'exemple de la leçon, les deux caractères étudiés sur les 100 ménages sont :",
          "options": [
            "Le nombre d'enfants et le nombre de pièces de l'appartement",
            "Le nombre d'enfants et le loyer de l'appartement",
            "Le nombre de pièces et la surface de l'appartement",
            "Le nombre d'enfants et l'âge des parents"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'énoncé de l'exemple le dit : $X$ est le nombre d'enfants et $Y$ le nombre de pièces de l'appartement occupé."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p01_q6",
          "type": "mcq",
          "prompt": "Le nombre $6$ dans le tableau de contingence est l'effectif du couple :",
          "options": [
            "$(1 ; 0)$",
            "$(0 ; 1)$",
            "$(6 ; 1)$",
            "$(0 ; 6)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le $6$ est sur la ligne de la valeur $0$ de $X$ et dans la colonne de la valeur $1$ de $Y$ : c'est l'effectif du couple $(0 ; 1)$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02",
      "order": 2,
      "title": "Les séries marginales",
      "summary": "Extraire du tableau de contingence la série de chaque caractère séparément, avec ses effectifs et ses fréquences.",
      "conceptExplanation": "À partir du tableau de contingence, on peut étudier chaque caractère séparément. Pour trouver l'effectif d'une valeur du caractère $X$, on additionne tous les $n_{ij}$ situés sur la ligne de cette valeur : par exemple, l'effectif de la valeur $0$ est $6 + 3 + 1 + 0 = 10$, et celui de la valeur $3$ est $0 + 5 + 13 + 5 = 23$. On obtient la série marginale du caractère $X$ : valeurs $0, 1, 2, 3, 4, 5$ d'effectifs $10, 19, 30, 23, 13, 5$.\nDe même, en additionnant par colonne, on obtient la série marginale du caractère $Y$ : valeurs $1, 2, 3, 4$ d'effectifs $11, 30, 38, 21$. L'effectif de la modalité $1$ de $Y$ est par exemple $6 + 4 + 1 + 0 + 0 + 0 = 11$.\nLa fréquence d'une modalité est son effectif divisé par l'effectif total : les fréquences marginales de $X$ sont $\\frac{10}{100}$, $\\frac{19}{100}$, $\\frac{30}{100}$, $\\frac{23}{100}$, $\\frac{13}{100}$, $\\frac{5}{100}$, et celles de $Y$ sont $\\frac{11}{100}$, $\\frac{30}{100}$, $\\frac{38}{100}$, $\\frac{21}{100}$.",
      "keyRule": "Série marginale : on additionne une ligne (pour X) ou une colonne (pour Y) du tableau de contingence ; la fréquence est l'effectif divisé par l'effectif total.",
      "formulas": [
        {
          "name": "Fréquence d'une modalité",
          "formula": "f_i = \\frac{\\text{effectif de la modalité}}{\\text{effectif total}}"
        }
      ],
      "workedExample": {
        "title": "L'effectif de la valeur 3 du caractère X",
        "statement": "Dans le tableau de contingence de la leçon (100 ménages), détermine l'effectif de la valeur 3 du caractère X (nombre d'enfants).",
        "methodSteps": [
          "On repère la ligne du tableau correspondant à la valeur $3$ du caractère $X$.",
          "On additionne tous les effectifs $n_{ij}$ de cette ligne : $0 + 5 + 13 + 5$.",
          "Le total obtenu est l'effectif cherché."
        ],
        "conclusion": "L'effectif de la valeur $3$ du caractère $X$ est $23$ : c'est une valeur de la série marginale de $X$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La série marginale du caractère X",
          "stepTheme": "La série marginale du caractère X",
          "stepBadge": "La série marginale du caractère X",
          "paragraphText": "• La série marginale du caractère $X$ s'obtient en additionnant les effectifs de chaque ligne du tableau de contingence.\nPour les $100$ ménages de la leçon : valeurs $0, 1, 2, 3, 4, 5$ et effectifs $10, 19, 30, 23, 13, 5$.\nCes effectifs figurent dans la dernière colonne du tableau complété (colonne Total).",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02_q1",
            "type": "mcq",
            "prompt": "Dans la série marginale de $X$ (nombre d'enfants), l'effectif de la valeur $2$ est :",
            "options": [
              "$16$",
              "$30$",
              "$10$",
              "$38$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On additionne la ligne $X = 2$ : $1 + 10 + 16 + 3 = 30$. Le nombre $16$ est seulement l'effectif du couple $(2 ; 3)$, pas celui de la valeur $2$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'effectif de la valeur 0 du caractère X",
          "stepTheme": "L'effectif de la valeur 0 du caractère X",
          "stepBadge": "L'effectif de la valeur 0 du caractère X",
          "paragraphText": "• Pour trouver l'effectif de la valeur $0$ de $X$, on additionne tous les $n_{ij}$ de la ligne de la valeur $0$.\nLa leçon calcule : $6 + 3 + 1 + 0$.\nLe résultat est l'effectif marginal de la modalité $0$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02_q2",
            "type": "mcq",
            "prompt": "L'effectif de la valeur $0$ du caractère $X$ est :",
            "options": [
              "$6$",
              "$11$",
              "$10$",
              "$0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La somme de la première ligne de données vaut $6 + 3 + 1 + 0 = 10$ : $10$ ménages n'ont aucun enfant."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La série marginale du caractère Y",
          "stepTheme": "La série marginale du caractère Y",
          "stepBadge": "La série marginale du caractère Y",
          "paragraphText": "• La série marginale du caractère $Y$ s'obtient en additionnant les effectifs de chaque colonne du tableau de contingence.\nPour les $100$ ménages : valeurs $1, 2, 3, 4$ et effectifs $11, 30, 38, 21$.\nCes effectifs figurent dans la dernière ligne du tableau complété (ligne Total).",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02_q3",
            "type": "mcq",
            "prompt": "Dans la série marginale de $Y$ (nombre de pièces), l'effectif de la valeur $3$ est :",
            "options": [
              "$38$",
              "$30$",
              "$21$",
              "$13$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On additionne la colonne $Y = 3$ : $1 + 3 + 16 + 13 + 4 + 1 = 38$ ménages occupent un appartement de trois pièces."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les fréquences marginales du caractère X",
          "stepTheme": "Les fréquences marginales du caractère X",
          "stepBadge": "Les fréquences marginales du caractère X",
          "paragraphText": "• La fréquence d'une modalité est son effectif divisé par l'effectif total, ici $100$.\nLe tableau des fréquences marginales de $X$ associe à la valeur $0$ la fréquence $\\frac{10}{100}$, à la valeur $1$ la fréquence $\\frac{19}{100}$, et ainsi de suite.\nChaque fréquence se calcule donc à partir de l'effectif marginal correspondant.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02_q4",
            "type": "mcq",
            "prompt": "Dans le tableau des fréquences marginales de $X$, la fréquence de la valeur $0$ est :",
            "options": [
              "$\\frac{10}{100}$",
              "$\\frac{6}{100}$",
              "$\\frac{10}{30}$",
              "$10$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'effectif marginal de la valeur $0$ est $10$ et l'effectif total est $100$ : la fréquence vaut $\\frac{10}{100}$. La valeur $\\frac{6}{100}$ utiliserait l'effectif d'un seul couple."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La fréquence de la modalité 2 du caractère Y",
          "stepTheme": "La fréquence de la modalité 2 du caractère Y",
          "stepBadge": "La fréquence de la modalité 2 du caractère Y",
          "paragraphText": "• L'effectif marginal de la modalité $2$ du caractère $Y$ est $30$ (somme de la colonne $Y = 2$).\nL'effectif total est $100$.\nSa fréquence marginale est donc le quotient de ces deux nombres.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02_q5",
            "type": "mcq",
            "prompt": "La fréquence marginale de la modalité $2$ du caractère $Y$ est :",
            "options": [
              "$\\frac{30}{38}$",
              "$\\frac{2}{100}$",
              "$\\frac{30}{100}$",
              "$30$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Fréquence égale effectif de la modalité sur effectif total : $\\frac{30}{100}$, d'après le tableau des fréquences marginales de $Y$ construit comme celui de $X$ dans la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le total des effectifs marginaux",
          "stepTheme": "Le total des effectifs marginaux",
          "stepBadge": "Le total des effectifs marginaux",
          "paragraphText": "• Piège : la somme des effectifs d'une série marginale redonne l'effectif total de la population.\nPour $X$ : $10 + 19 + 30 + 23 + 13 + 5$ ; pour $Y$ : $11 + 30 + 38 + 21$.\nSi le total obtenu n'est pas $100$, une ligne ou une colonne a été oubliée ou comptée deux fois.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02_q6",
            "type": "mcq",
            "prompt": "La somme des effectifs de la série marginale du caractère $X$ vaut :",
            "options": [
              "$95$",
              "$100$",
              "$90$",
              "$105$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque ménage est compté exactement une fois dans une ligne : $10 + 19 + 30 + 23 + 13 + 5 = 100$, l'effectif total de la population."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02_q1",
          "type": "mcq",
          "prompt": "Dans la série marginale de $X$ (nombre d'enfants), l'effectif de la valeur $2$ est :",
          "options": [
            "$16$",
            "$30$",
            "$10$",
            "$38$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On additionne la ligne $X = 2$ : $1 + 10 + 16 + 3 = 30$. Le nombre $16$ est seulement l'effectif du couple $(2 ; 3)$, pas celui de la valeur $2$."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02_q2",
          "type": "mcq",
          "prompt": "L'effectif de la valeur $0$ du caractère $X$ est :",
          "options": [
            "$6$",
            "$11$",
            "$10$",
            "$0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La somme de la première ligne de données vaut $6 + 3 + 1 + 0 = 10$ : $10$ ménages n'ont aucun enfant."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02_q3",
          "type": "mcq",
          "prompt": "Dans la série marginale de $Y$ (nombre de pièces), l'effectif de la valeur $3$ est :",
          "options": [
            "$38$",
            "$30$",
            "$21$",
            "$13$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On additionne la colonne $Y = 3$ : $1 + 3 + 16 + 13 + 4 + 1 = 38$ ménages occupent un appartement de trois pièces."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02_q4",
          "type": "mcq",
          "prompt": "Dans le tableau des fréquences marginales de $X$, la fréquence de la valeur $0$ est :",
          "options": [
            "$\\frac{10}{100}$",
            "$\\frac{6}{100}$",
            "$\\frac{10}{30}$",
            "$10$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'effectif marginal de la valeur $0$ est $10$ et l'effectif total est $100$ : la fréquence vaut $\\frac{10}{100}$. La valeur $\\frac{6}{100}$ utiliserait l'effectif d'un seul couple."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02_q5",
          "type": "mcq",
          "prompt": "La fréquence marginale de la modalité $2$ du caractère $Y$ est :",
          "options": [
            "$\\frac{30}{38}$",
            "$\\frac{2}{100}$",
            "$\\frac{30}{100}$",
            "$30$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Fréquence égale effectif de la modalité sur effectif total : $\\frac{30}{100}$, d'après le tableau des fréquences marginales de $Y$ construit comme celui de $X$ dans la leçon."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p02_q6",
          "type": "mcq",
          "prompt": "La somme des effectifs de la série marginale du caractère $X$ vaut :",
          "options": [
            "$95$",
            "$100$",
            "$90$",
            "$105$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque ménage est compté exactement une fois dans une ligne : $10 + 19 + 30 + 23 + 13 + 5 = 100$, l'effectif total de la population."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03",
      "order": 3,
      "title": "Le nuage de points et le point moyen",
      "summary": "Représenter une série double par un nuage de points et déterminer les coordonnées de son point moyen.",
      "conceptExplanation": "On appelle nuage de points associé à la série statistique double de caractère $(X, Y)$ la représentation, dans un repère orthogonal, des points de coordonnées $(x_i ; y_j)$ d'effectifs non nuls. Dans la suite de la leçon, les séries doubles considérées sont telles que l'effectif de chaque couple $(x_i ; y_i)$ vaut $1$.\nOn appelle point moyen d'un nuage de $n$ points $M_i$ de coordonnées $(x_i ; y_i)$ le point $G$ de coordonnées $(\\bar{x} ; \\bar{y})$ telles que $\\bar{x}$ est la moyenne des abscisses et $\\bar{y}$ la moyenne des ordonnées.\nPour la série des exploitations agricoles de la leçon (superficie $X$ : $2, 2, 3, 4, 5, 6, 7, 7{,}6$ ; nombre d'exploitations $Y$ : $14, 26, 31, 29, 44, 40, 54, 50$), on obtient $\\bar{x} = \\frac{36{,}6}{8} = 4{,}575$ et $\\bar{y} = \\frac{288}{8} = 36$, donc $G(4{,}575 ; 36)$.",
      "keyRule": "Le point moyen G a pour abscisse la moyenne des $x_i$ et pour ordonnée la moyenne des $y_i$.",
      "formulas": [
        {
          "name": "Coordonnées du point moyen",
          "formula": "G(\\bar{x} ; \\bar{y}) \\text{ avec } \\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n} \\text{ et } \\bar{y} = \\frac{y_1 + y_2 + \\cdots + y_n}{n}"
        }
      ],
      "workedExample": {
        "title": "Le point moyen de la série des exploitations agricoles",
        "statement": "Détermine les coordonnées du point moyen du nuage de points de la série suivante : superficies X : 2 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 7,6 et nombres d'exploitations Y : 14 ; 26 ; 31 ; 29 ; 44 ; 40 ; 54 ; 50.",
        "methodSteps": [
          "La série compte $8$ couples, donc $n = 8$.",
          "Moyenne des abscisses : $\\bar{x} = \\frac{2 + 2 + 3 + 4 + 5 + 6 + 7 + 7{,}6}{8} = \\frac{36{,}6}{8} = 4{,}575$.",
          "Moyenne des ordonnées : $\\bar{y} = \\frac{14 + 26 + 31 + 29 + 44 + 40 + 54 + 50}{8} = \\frac{288}{8} = 36$."
        ],
        "conclusion": "Le point moyen du nuage est $G(4{,}575 ; 36)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le nuage de points",
          "stepTheme": "Le nuage de points",
          "stepBadge": "Le nuage de points",
          "paragraphText": "• On appelle nuage de points associé à la série statistique double de caractère $(X, Y)$ la représentation, dans un repère orthogonal, des points de coordonnées $(x_i ; y_j)$ d'effectifs non nuls.\nChaque individu de la population fournit un point du nuage.\nDans la suite de la leçon, l'effectif de chaque couple $(x_i ; y_i)$ vaut $1$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03_q1",
            "type": "mcq",
            "prompt": "Le nuage de points associé à une série statistique double est :",
            "options": [
              "La représentation des points de coordonnées $(x_i ; y_j)$ d'effectifs non nuls dans un repère orthogonal",
              "La courbe qui relie les effectifs de $X$",
              "Le tableau de contingence dessiné",
              "La représentation des seules valeurs de $Y$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la leçon : on place dans un repère orthogonal les points dont les coordonnées sont les couples de valeurs des deux caractères."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un point du nuage des exploitations agricoles",
          "stepTheme": "Un point du nuage des exploitations agricoles",
          "stepBadge": "Un point du nuage des exploitations agricoles",
          "paragraphText": "• La série des exploitations agricoles associe à la superficie $7{,}6$ hectares le nombre d'exploitations $50$.\nLe nuage contient donc le point de coordonnées $(7{,}6 ; 50)$.\nDe même, la superficie $2$ hectares apparaît avec les ordonnées $14$ et $26$ : le nuage contient deux points d'abscisse $2$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03_q2",
            "type": "mcq",
            "prompt": "Dans le nuage de points de la série des exploitations agricoles, le point d'abscisse $7{,}6$ a pour ordonnée :",
            "options": [
              "$54$",
              "$50$",
              "$44$",
              "$40$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans le tableau de la série, la superficie $7{,}6$ est associée au nombre d'exploitations $50$ : le point est $(7{,}6 ; 50)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le point moyen d'un nuage",
          "stepTheme": "Le point moyen d'un nuage",
          "stepBadge": "Le point moyen d'un nuage",
          "paragraphText": "• On appelle point moyen d'un nuage de $n$ points $M_i$ de coordonnées $(x_i ; y_i)$ le point $G$ de coordonnées $(\\bar{x} ; \\bar{y})$.\n$\\bar{x}$ est la moyenne des abscisses des points et $\\bar{y}$ la moyenne de leurs ordonnées.\nLe point moyen résume donc la position centrale du nuage.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03_q3",
            "type": "mcq",
            "prompt": "Les coordonnées du point moyen $G$ d'un nuage de points sont :",
            "options": [
              "(moyenne des ordonnées ; moyenne des abscisses)",
              "(plus grande abscisse ; plus grande ordonnée)",
              "(moyenne des abscisses ; moyenne des ordonnées)",
              "(premier $x_i$ ; premier $y_i$)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par définition, $G(\\bar{x} ; \\bar{y})$ avec $\\bar{x}$ moyenne des abscisses et $\\bar{y}$ moyenne des ordonnées, dans cet ordre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le point moyen de la série des exploitations",
          "stepTheme": "Le point moyen de la série des exploitations",
          "stepBadge": "Le point moyen de la série des exploitations",
          "paragraphText": "• Pour la série des exploitations, $\\bar{x} = \\frac{36{,}6}{8} = 4{,}575$.\nEt $\\bar{y} = \\frac{288}{8} = 36$.\nLe point moyen se place donc au centre du nuage, en abscisse $4{,}575$ et en ordonnée $36$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03_q4",
            "type": "mcq",
            "prompt": "Le point moyen du nuage de la série des exploitations agricoles est :",
            "options": [
              "$G(36 ; 4{,}575)$",
              "$G(4{,}575 ; 36)$",
              "$G(4{,}5 ; 36)$",
              "$G(7{,}6 ; 50)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On a calculé $\\bar{x} = 4{,}575$ et $\\bar{y} = 36$, donc $G(4{,}575 ; 36)$. Le point $(7{,}6 ; 50)$ est un point du nuage, pas son point moyen."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le point moyen de l'exercice de maison",
          "stepTheme": "Le point moyen de l'exercice de maison",
          "stepBadge": "Le point moyen de l'exercice de maison",
          "paragraphText": "• Exercice de maison de la leçon : $x_i$ prend les valeurs $0, 1, 2, 3, 4, 5, 6, 7, 8$ et $y_i$ les valeurs $160, 110, 100, 72, 36, 29, 20, 10, 3$.\nLa série compte $9$ couples.\nOn applique la définition du point moyen aux deux listes de valeurs.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03_q5",
            "type": "mcq",
            "prompt": "Pour la série de l'exercice de maison ($x_i$ de $0$ à $8$ ; $y_i$ : $160, 110, 100, 72, 36, 29, 20, 10, 3$), le point moyen est :",
            "options": [
              "$G(4 ; 60)$",
              "$G(60 ; 4)$",
              "$G(4{,}5 ; 60)$",
              "$G(8 ; 3)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Moyenne des $x_i$ : $\\frac{36}{9} = 4$ ; moyenne des $y_i$ : $\\frac{540}{9} = 60$. Donc $G(4 ; 60)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas intervertir abscisse et ordonnée de G",
          "stepTheme": "Ne pas intervertir abscisse et ordonnée de G",
          "stepBadge": "Ne pas intervertir abscisse et ordonnée de G",
          "paragraphText": "• Piège : dans $G(\\bar{x} ; \\bar{y})$, la première coordonnée est la moyenne des valeurs de $X$, la seconde celle des valeurs de $Y$.\nPour la série des exploitations, écrire $G(36 ; 4{,}575)$ inverse les deux moyennes.\nCette inversion fausse ensuite tous les calculs d'ajustement qui utilisent le point moyen.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03_q6",
            "type": "mcq",
            "prompt": "Un élève écrit $G(36 ; 4{,}575)$ pour le nuage de la série des exploitations agricoles. Son erreur est :",
            "options": [
              "Il a utilisé $7$ points au lieu de $8$",
              "Il a interverti l'abscisse et l'ordonnée du point moyen",
              "Il a confondu le nuage avec le tableau de contingence",
              "Il n'y a aucune erreur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La moyenne des abscisses vaut $4{,}575$ et celle des ordonnées $36$ : le point moyen est $G(4{,}575 ; 36)$. L'élève a interverti les deux coordonnées."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03_q1",
          "type": "mcq",
          "prompt": "Le nuage de points associé à une série statistique double est :",
          "options": [
            "La représentation des points de coordonnées $(x_i ; y_j)$ d'effectifs non nuls dans un repère orthogonal",
            "La courbe qui relie les effectifs de $X$",
            "Le tableau de contingence dessiné",
            "La représentation des seules valeurs de $Y$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la leçon : on place dans un repère orthogonal les points dont les coordonnées sont les couples de valeurs des deux caractères."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03_q2",
          "type": "mcq",
          "prompt": "Dans le nuage de points de la série des exploitations agricoles, le point d'abscisse $7{,}6$ a pour ordonnée :",
          "options": [
            "$54$",
            "$50$",
            "$44$",
            "$40$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans le tableau de la série, la superficie $7{,}6$ est associée au nombre d'exploitations $50$ : le point est $(7{,}6 ; 50)$."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03_q3",
          "type": "mcq",
          "prompt": "Les coordonnées du point moyen $G$ d'un nuage de points sont :",
          "options": [
            "(moyenne des ordonnées ; moyenne des abscisses)",
            "(plus grande abscisse ; plus grande ordonnée)",
            "(moyenne des abscisses ; moyenne des ordonnées)",
            "(premier $x_i$ ; premier $y_i$)"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par définition, $G(\\bar{x} ; \\bar{y})$ avec $\\bar{x}$ moyenne des abscisses et $\\bar{y}$ moyenne des ordonnées, dans cet ordre."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03_q4",
          "type": "mcq",
          "prompt": "Le point moyen du nuage de la série des exploitations agricoles est :",
          "options": [
            "$G(36 ; 4{,}575)$",
            "$G(4{,}575 ; 36)$",
            "$G(4{,}5 ; 36)$",
            "$G(7{,}6 ; 50)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On a calculé $\\bar{x} = 4{,}575$ et $\\bar{y} = 36$, donc $G(4{,}575 ; 36)$. Le point $(7{,}6 ; 50)$ est un point du nuage, pas son point moyen."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03_q5",
          "type": "mcq",
          "prompt": "Pour la série de l'exercice de maison ($x_i$ de $0$ à $8$ ; $y_i$ : $160, 110, 100, 72, 36, 29, 20, 10, 3$), le point moyen est :",
          "options": [
            "$G(4 ; 60)$",
            "$G(60 ; 4)$",
            "$G(4{,}5 ; 60)$",
            "$G(8 ; 3)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Moyenne des $x_i$ : $\\frac{36}{9} = 4$ ; moyenne des $y_i$ : $\\frac{540}{9} = 60$. Donc $G(4 ; 60)$."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p03_q6",
          "type": "mcq",
          "prompt": "Un élève écrit $G(36 ; 4{,}575)$ pour le nuage de la série des exploitations agricoles. Son erreur est :",
          "options": [
            "Il a utilisé $7$ points au lieu de $8$",
            "Il a interverti l'abscisse et l'ordonnée du point moyen",
            "Il a confondu le nuage avec le tableau de contingence",
            "Il n'y a aucune erreur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La moyenne des abscisses vaut $4{,}575$ et celle des ordonnées $36$ : le point moyen est $G(4{,}575 ; 36)$. L'élève a interverti les deux coordonnées."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04",
      "order": 4,
      "title": "L'ajustement linéaire par la méthode de Mayer",
      "summary": "Partager le nuage en deux sous-nuages, calculer leurs points moyens et déterminer l'équation de la droite de Mayer.",
      "conceptExplanation": "Faire un ajustement d'un nuage de points, c'est trouver une courbe qui passe le plus près possible du maximum de points de ce nuage. Lorsque cette courbe est une droite, l'ajustement est dit affine ou linéaire.\nMéthode de Mayer : on range la série suivant les valeurs croissantes des $x_i$, puis on la partage en deux sous-nuages : si $n$ est pair, deux séries de même effectif ; si $n$ est impair, deux sous-nuages d'effectifs $\\frac{n + 1}{2}$ et $\\frac{n + 1}{2} - 1$. On détermine le point moyen $G_1$ du premier sous-nuage et le point moyen $G_2$ du deuxième. La droite $(G_1G_2)$ est la droite d'ajustement par la méthode de Mayer, et elle passe par le point moyen $G$ du nuage.\nPour la série des exploitations ($n = 8$), les deux sous-nuages d'effectif $4$ donnent $G_1(2{,}75 ; 25)$ et $G_2(6{,}4 ; 47)$ ; la droite de Mayer a pour équation $y = \\frac{440}{73}x + \\frac{615}{73}$.",
      "keyRule": "Mayer : deux sous-nuages, deux points moyens $G_1$ et $G_2$, et la droite d'ajustement est la droite $(G_1G_2)$.",
      "formulas": [
        {
          "name": "Coefficient directeur de la droite de Mayer",
          "formula": "a = \\frac{Y_2 - Y_1}{X_2 - X_1}"
        },
        {
          "name": "Équation de la droite de Mayer",
          "formula": "y = ax + b \\text{ avec } b = Y_1 - aX_1",
          "note": "On peut aussi calculer $b = Y_2 - aX_2$."
        }
      ],
      "workedExample": {
        "title": "Une équation de la droite de Mayer de la série des exploitations",
        "statement": "Pour la série des exploitations agricoles, on a partagé le nuage en deux sous-nuages de 4 points, de points moyens $G_1(2{,}75 ; 25)$ et $G_2(6{,}4 ; 47)$. Détermine une équation de la droite d'ajustement linéaire par la méthode de Mayer.",
        "methodSteps": [
          "La droite cherchée est la droite $(G_1G_2)$, d'équation $y = ax + b$.",
          "Coefficient directeur : $a = \\frac{47 - 25}{6{,}4 - 2{,}75} = \\frac{440}{73}$.",
          "Ordonnée à l'origine : $b = Y_1 - aX_1 = 25 - \\frac{440}{73} \\times 2{,}75 = \\frac{615}{73}$."
        ],
        "conclusion": "La droite de Mayer a pour équation $y = \\frac{440}{73}x + \\frac{615}{73}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'ajustement d'un nuage de points",
          "stepTheme": "L'ajustement d'un nuage de points",
          "stepBadge": "L'ajustement d'un nuage de points",
          "paragraphText": "• Faire un ajustement d'un nuage de points, c'est trouver une courbe qui passe le plus près possible du maximum de points du nuage.\nLorsque cette courbe est une droite, on dit que l'ajustement est affine ou linéaire.\nLa méthode de Mayer et la méthode des moindres carrés donnent chacune une droite d'ajustement.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q1",
            "type": "mcq",
            "prompt": "Lorsque la courbe d'ajustement d'un nuage de points est une droite, l'ajustement est dit :",
            "options": [
              "Circulaire",
              "Affine ou linéaire",
              "Parabolique",
              "Marginal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la présentation de la leçon : un ajustement par une droite est un ajustement affine ou linéaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le partage du nuage selon la parité de n",
          "stepTheme": "Le partage du nuage selon la parité de n",
          "stepBadge": "Le partage du nuage selon la parité de n",
          "paragraphText": "• On commence par ranger la série suivant les valeurs croissantes des $x_i$.\nSi le nombre $n$ de points est pair, on partage la série en deux séries de même effectif.\nSi $n$ est impair, on partage le nuage en deux sous-nuages d'effectifs $\\frac{n + 1}{2}$ et $\\frac{n + 1}{2} - 1$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q2",
            "type": "mcq",
            "prompt": "Pour la méthode de Mayer, si le nombre $n$ de points du nuage est pair, on partage la série en :",
            "options": [
              "Deux séries d'effectifs $n$ et $0$",
              "Une seule série",
              "Deux séries de même effectif",
              "Trois séries de même effectif"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la règle de la leçon : pour $n$ pair, deux sous-nuages de même effectif ; leurs points moyens $G_1$ et $G_2$ définissent la droite de Mayer."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Ranger la série avant de la partager",
          "stepTheme": "Ranger la série avant de la partager",
          "stepBadge": "Ranger la série avant de la partager",
          "paragraphText": "• Piège : la première étape de la méthode de Mayer est de ranger la série suivant les valeurs croissantes des $x_i$.\nPartager la série dans le désordre donnerait des sous-nuages mélangés, donc des points moyens $G_1$ et $G_2$ faux.\nLe partage ne se fait qu'ensuite, selon la parité de $n$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q3",
            "type": "mcq",
            "prompt": "Avant de partager la série en deux sous-nuages pour la méthode de Mayer, il faut d'abord :",
            "options": [
              "Calculer la covariance de la série",
              "Tracer le nuage de points",
              "Ranger la série suivant les valeurs croissantes des $x_i$",
              "Calculer le coefficient de corrélation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La méthode décrite dans la leçon commence par : « On range la série statistique double suivant les valeurs croissantes des $x_i$ », et seulement ensuite on la partage."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les points moyens des deux sous-nuages des exploitations",
          "stepTheme": "Les points moyens des deux sous-nuages des exploitations",
          "stepBadge": "Les points moyens des deux sous-nuages des exploitations",
          "paragraphText": "• La série des exploitations compte $8$ points : on la partage en deux séries d'effectif $4$.\nPremier sous-nuage : $G_1$ avec $\\bar{x}_1 = \\frac{2 + 2 + 3 + 4}{4} = 2{,}75$ et $\\bar{y}_1 = \\frac{14 + 26 + 31 + 29}{4} = 25$.\nDeuxième sous-nuage : $G_2$ avec $\\bar{x}_2 = \\frac{5 + 6 + 7 + 7{,}6}{4} = 6{,}4$ et $\\bar{y}_2 = \\frac{44 + 40 + 54 + 50}{4} = 47$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q4",
            "type": "mcq",
            "prompt": "Pour la série des exploitations partagée en deux sous-nuages de 4 points, les points moyens sont :",
            "options": [
              "$G_1(2{,}75 ; 25)$ et $G_2(6{,}4 ; 47)$",
              "$G_1(25 ; 2{,}75)$ et $G_2(47 ; 6{,}4)$",
              "$G_1(4{,}575 ; 36)$ et $G_2(6{,}4 ; 47)$",
              "$G_1(2{,}75 ; 47)$ et $G_2(6{,}4 ; 25)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les moyennes de chaque sous-nuage donnent $G_1(2{,}75 ; 25)$ et $G_2(6{,}4 ; 47)$. Le point $G(4{,}575 ; 36)$ est le point moyen du nuage entier."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La droite de Mayer passe par le point moyen G",
          "stepTheme": "La droite de Mayer passe par le point moyen G",
          "stepBadge": "La droite de Mayer passe par le point moyen G",
          "paragraphText": "• Remarque de la leçon : la droite $(G_1G_2)$ passe par le point moyen $G$ du nuage de points.\nC'est un contrôle utile après le calcul de l'équation de la droite.\nToutes les droites d'ajustement de la leçon (Mayer et régressions) partagent cette propriété.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q5",
            "type": "mcq",
            "prompt": "D'après la remarque de la leçon, la droite d'ajustement de Mayer $(G_1G_2)$ :",
            "options": [
              "Passe par l'origine du repère",
              "Passe par le point moyen $G$ du nuage",
              "Ne passe par aucun point moyen",
              "Est toujours horizontale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remarque est explicite : la droite $(G_1G_2)$ passe par le point moyen $G$ du nuage de points."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'équation de la droite de Mayer des exploitations",
          "stepTheme": "L'équation de la droite de Mayer des exploitations",
          "stepBadge": "L'équation de la droite de Mayer des exploitations",
          "paragraphText": "• Avec $G_1(2{,}75 ; 25)$ et $G_2(6{,}4 ; 47)$, le coefficient directeur vaut $a = \\frac{47 - 25}{6{,}4 - 2{,}75} = \\frac{440}{73}$.\nL'ordonnée à l'origine vaut $b = 25 - \\frac{440}{73} \\times 2{,}75 = \\frac{615}{73}$.\nL'équation s'écrit donc avec ces deux coefficients.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q6",
            "type": "mcq",
            "prompt": "Une équation de la droite de Mayer de la série des exploitations est :",
            "options": [
              "$y = \\frac{615}{73}x + \\frac{440}{73}$",
              "$y = 25x + 47$",
              "$y = \\frac{440}{73}x + \\frac{615}{73}$",
              "$y = \\frac{73}{440}x + \\frac{73}{615}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec $a = \\frac{440}{73}$ et $b = \\frac{615}{73}$, la droite $(G_1G_2)$ a pour équation $y = \\frac{440}{73}x + \\frac{615}{73}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "La droite de Mayer des nouveau-nés (exercice 1 de renforcement)",
          "stepTheme": "La droite de Mayer des nouveau-nés (exercice 1 de renforcement)",
          "stepBadge": "La droite de Mayer des nouveau-nés (exercice 1 de renforcement)",
          "paragraphText": "• L'exercice 1 de renforcement donne la taille moyenne des nouveau-nés selon l'âge gestationnel, en $16$ points.\nLe partage en deux sous-nuages de $8$ points donne $G_1(33{,}5 ; 49{,}65)$ et $G_2(41{,}5 ; 52{,}625)$.\nLe coefficient directeur vaut $a = \\frac{52{,}625 - 49{,}65}{41{,}5 - 33{,}5} = 0{,}372$ et $b = 49{,}65 - 0{,}372 \\times 33{,}5 = 37{,}188$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q7",
            "type": "mcq",
            "prompt": "Dans l'exercice 1 de renforcement (nouveau-nés), une équation de la droite d'ajustement $(G_1G_2)$ est :",
            "options": [
              "$y = 0{,}372x + 37{,}188$",
              "$y = 37{,}188x + 0{,}372$",
              "$y = 0{,}372x + 49{,}65$",
              "$y = 2{,}975x + 8$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $a = 0{,}372$ et $b = 37{,}188$, la droite $(G_1G_2)$ a pour équation $y = 0{,}372x + 37{,}188$, comme dans la solution de l'exercice."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q1",
          "type": "mcq",
          "prompt": "Lorsque la courbe d'ajustement d'un nuage de points est une droite, l'ajustement est dit :",
          "options": [
            "Circulaire",
            "Affine ou linéaire",
            "Parabolique",
            "Marginal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la présentation de la leçon : un ajustement par une droite est un ajustement affine ou linéaire."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q2",
          "type": "mcq",
          "prompt": "Pour la méthode de Mayer, si le nombre $n$ de points du nuage est pair, on partage la série en :",
          "options": [
            "Deux séries d'effectifs $n$ et $0$",
            "Une seule série",
            "Deux séries de même effectif",
            "Trois séries de même effectif"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la règle de la leçon : pour $n$ pair, deux sous-nuages de même effectif ; leurs points moyens $G_1$ et $G_2$ définissent la droite de Mayer."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q3",
          "type": "mcq",
          "prompt": "Avant de partager la série en deux sous-nuages pour la méthode de Mayer, il faut d'abord :",
          "options": [
            "Calculer la covariance de la série",
            "Tracer le nuage de points",
            "Ranger la série suivant les valeurs croissantes des $x_i$",
            "Calculer le coefficient de corrélation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La méthode décrite dans la leçon commence par : « On range la série statistique double suivant les valeurs croissantes des $x_i$ », et seulement ensuite on la partage."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q4",
          "type": "mcq",
          "prompt": "Pour la série des exploitations partagée en deux sous-nuages de 4 points, les points moyens sont :",
          "options": [
            "$G_1(2{,}75 ; 25)$ et $G_2(6{,}4 ; 47)$",
            "$G_1(25 ; 2{,}75)$ et $G_2(47 ; 6{,}4)$",
            "$G_1(4{,}575 ; 36)$ et $G_2(6{,}4 ; 47)$",
            "$G_1(2{,}75 ; 47)$ et $G_2(6{,}4 ; 25)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les moyennes de chaque sous-nuage donnent $G_1(2{,}75 ; 25)$ et $G_2(6{,}4 ; 47)$. Le point $G(4{,}575 ; 36)$ est le point moyen du nuage entier."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q5",
          "type": "mcq",
          "prompt": "D'après la remarque de la leçon, la droite d'ajustement de Mayer $(G_1G_2)$ :",
          "options": [
            "Passe par l'origine du repère",
            "Passe par le point moyen $G$ du nuage",
            "Ne passe par aucun point moyen",
            "Est toujours horizontale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remarque est explicite : la droite $(G_1G_2)$ passe par le point moyen $G$ du nuage de points."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q6",
          "type": "mcq",
          "prompt": "Une équation de la droite de Mayer de la série des exploitations est :",
          "options": [
            "$y = \\frac{615}{73}x + \\frac{440}{73}$",
            "$y = 25x + 47$",
            "$y = \\frac{440}{73}x + \\frac{615}{73}$",
            "$y = \\frac{73}{440}x + \\frac{73}{615}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec $a = \\frac{440}{73}$ et $b = \\frac{615}{73}$, la droite $(G_1G_2)$ a pour équation $y = \\frac{440}{73}x + \\frac{615}{73}$."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p04_q7",
          "type": "mcq",
          "prompt": "Dans l'exercice 1 de renforcement (nouveau-nés), une équation de la droite d'ajustement $(G_1G_2)$ est :",
          "options": [
            "$y = 0{,}372x + 37{,}188$",
            "$y = 37{,}188x + 0{,}372$",
            "$y = 0{,}372x + 49{,}65$",
            "$y = 2{,}975x + 8$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $a = 0{,}372$ et $b = 37{,}188$, la droite $(G_1G_2)$ a pour équation $y = 0{,}372x + 37{,}188$, comme dans la solution de l'exercice."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05",
      "order": 5,
      "title": "Covariance et coefficient de corrélation linéaire",
      "summary": "Calculer la covariance d'une série double, puis son coefficient de corrélation linéaire, et interpréter sa valeur.",
      "conceptExplanation": "On appelle covariance de la série statistique double de caractère $(X ; Y)$ le nombre réel $\\mathrm{Cov}(X, Y) = \\frac{1}{n} \\sum (x_i - \\bar{x})(y_i - \\bar{y})$, que l'on calcule aussi par $\\mathrm{Cov}(X, Y) = \\frac{\\sum x_i y_i}{n} - \\bar{x} \\bar{y}$.\nPour la série des exploitations, la somme des produits vaut $1507$, donc $\\mathrm{Cov}(X, Y) = \\frac{1507}{8} - 4{,}575 \\times 36 = 23{,}675$.\nLe coefficient de corrélation linéaire est $r = \\frac{\\mathrm{Cov}(X, Y)}{\\sqrt{V(X)} \\sqrt{V(Y)}}$, où $V(X) = \\frac{\\sum x_i^2}{n} - \\bar{x}^2$ et $V(Y) = \\frac{\\sum y_i^2}{n} - \\bar{y}^2$. Pour cette série, $V(X) \\approx 4{,}16$, $V(Y) = 157{,}25$ et $r \\approx 0{,}92$. Le coefficient $r$ a le même signe que la covariance et vérifie $-1 \\leq r \\leq 1$ ; si $|r|$ est proche de $1$, en pratique si $0{,}87 \\leq r \\leq 1$ ou $-1 \\leq r \\leq -0{,}87$, il y a une forte corrélation linéaire entre les deux caractères.",
      "keyRule": "La covariance mesure le sens de variation commun des deux caractères ; $r$ proche de $1$ ou de $-1$ (dès $0{,}87$ en valeur absolue) signale une forte corrélation linéaire.",
      "formulas": [
        {
          "name": "Covariance",
          "formula": "\\mathrm{Cov}(X, Y) = \\frac{\\sum x_i y_i}{n} - \\bar{x} \\bar{y}"
        },
        {
          "name": "Variance (rappel)",
          "formula": "V(X) = \\frac{\\sum x_i^2}{n} - \\bar{x}^2"
        },
        {
          "name": "Coefficient de corrélation linéaire",
          "formula": "r = \\frac{\\mathrm{Cov}(X, Y)}{\\sqrt{V(X)} \\sqrt{V(Y)}}"
        }
      ],
      "workedExample": {
        "title": "La covariance de la série des exploitations agricoles",
        "statement": "Calcule la covariance de la série des exploitations agricoles (superficies X : 2 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 7,6 et nombres d'exploitations Y : 14 ; 26 ; 31 ; 29 ; 44 ; 40 ; 54 ; 50), sachant que son point moyen est $G(4{,}575 ; 36)$.",
        "methodSteps": [
          "On utilise la formule $\\mathrm{Cov}(X, Y) = \\frac{\\sum x_i y_i}{n} - \\bar{x} \\bar{y}$ avec $n = 8$, $\\bar{x} = 4{,}575$ et $\\bar{y} = 36$.",
          "La somme des produits vaut $2 \\times 14 + 2 \\times 26 + 3 \\times 31 + 4 \\times 29 + 5 \\times 44 + 6 \\times 40 + 7 \\times 54 + 7{,}6 \\times 50 = 1507$.",
          "Donc $\\mathrm{Cov}(X, Y) = \\frac{1507}{8} - 4{,}575 \\times 36 = 188{,}375 - 164{,}7$."
        ],
        "conclusion": "La covariance de cette série statistique est $\\mathrm{Cov}(X, Y) = 23{,}675$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La covariance d'une série double",
          "stepTheme": "La covariance d'une série double",
          "stepBadge": "La covariance d'une série double",
          "paragraphText": "• On appelle covariance de la série statistique double de caractère $(X ; Y)$ le nombre réel noté $\\mathrm{Cov}(X ; Y)$.\nElle se calcule par $\\mathrm{Cov}(X, Y) = \\frac{1}{n} \\sum (x_i - \\bar{x})(y_i - \\bar{y})$.\nLa forme pratique utilisée dans les exercices est $\\mathrm{Cov}(X, Y) = \\frac{\\sum x_i y_i}{n} - \\bar{x} \\bar{y}$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05_q1",
            "type": "mcq",
            "prompt": "La covariance d'une série statistique double $(X ; Y)$ se calcule par :",
            "options": [
              "$\\mathrm{Cov}(X, Y) = \\frac{\\sum x_i y_i}{n} - \\bar{x} \\bar{y}$",
              "$\\mathrm{Cov}(X, Y) = \\frac{\\sum x_i}{n} \\times \\frac{\\sum y_i}{n}$",
              "$\\mathrm{Cov}(X, Y) = \\bar{x} + \\bar{y}$",
              "$\\mathrm{Cov}(X, Y) = \\frac{\\sum x_i^2}{n} - \\bar{x}^2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la deuxième forme donnée par la définition de la leçon. La dernière formule est celle de la variance de $X$, pas de la covariance."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Calculer la covariance des exploitations",
          "stepTheme": "Calculer la covariance des exploitations",
          "stepBadge": "Calculer la covariance des exploitations",
          "paragraphText": "• Pour la série des exploitations, la somme des produits $x_i y_i$ vaut $1507$ et le point moyen est $G(4{,}575 ; 36)$.\nOn applique : $\\mathrm{Cov}(X, Y) = \\frac{1507}{8} - 4{,}575 \\times 36$.\nLe premier terme vaut $188{,}375$ et le second $164{,}7$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05_q2",
            "type": "mcq",
            "prompt": "La covariance de la série des exploitations agricoles vaut :",
            "options": [
              "$164{,}7$",
              "$23{,}675$",
              "$188{,}375$",
              "$353{,}075$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\mathrm{Cov}(X, Y) = 188{,}375 - 164{,}7 = 23{,}675$, comme dans la solution de l'exercice de fixation de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "La variance n'est pas la moyenne des carrés",
          "stepTheme": "La variance n'est pas la moyenne des carrés",
          "stepBadge": "La variance n'est pas la moyenne des carrés",
          "paragraphText": "• Piège : $V(X) = \\frac{\\sum x_i^2}{n} - \\bar{x}^2$ : il faut retrancher le carré de la moyenne.\nPour la série des exploitations, $\\frac{\\sum x_i^2}{n} = \\frac{200{,}76}{8} = 25{,}095$ et $\\bar{x}^2 = 4{,}575^2$.\nLa variance est donc nettement plus petite que la moyenne des carrés.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05_q3",
            "type": "mcq",
            "prompt": "La variance $V(X)$ de la série des exploitations agricoles vaut environ :",
            "options": [
              "$25{,}09$",
              "$20{,}93$",
              "$157{,}25$",
              "$4{,}16$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$V(X) = \\frac{200{,}76}{8} - 4{,}575^2 \\approx 25{,}095 - 20{,}93 \\approx 4{,}16$. La valeur $157{,}25$ est la variance de $Y$, pas celle de $X$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le coefficient de corrélation linéaire",
          "stepTheme": "Le coefficient de corrélation linéaire",
          "stepBadge": "Le coefficient de corrélation linéaire",
          "paragraphText": "• On appelle coefficient de corrélation linéaire de la série double $(X ; Y)$ le nombre réel noté $r$ tel que $r = \\frac{\\mathrm{Cov}(X, Y)}{\\sqrt{V(X)} \\sqrt{V(Y)}}$.\n$V(X)$ et $V(Y)$ sont les variances des deux séries marginales.\nCe coefficient permet de voir la dépendance linéaire des deux caractères $X$ et $Y$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05_q4",
            "type": "mcq",
            "prompt": "Le coefficient de corrélation linéaire $r$ est défini par :",
            "options": [
              "$r = \\frac{V(X)}{V(Y)}$",
              "$r = \\frac{\\mathrm{Cov}(X, Y)}{\\sqrt{V(X)} \\sqrt{V(Y)}}$",
              "$r = \\mathrm{Cov}(X, Y) \\times \\sqrt{V(X) V(Y)}$",
              "$r = \\frac{\\bar{x}}{\\bar{y}}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la leçon : la covariance divisée par le produit des écarts-types des deux caractères."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le coefficient de corrélation des exploitations",
          "stepTheme": "Le coefficient de corrélation des exploitations",
          "stepBadge": "Le coefficient de corrélation des exploitations",
          "paragraphText": "• Pour la série des exploitations : $\\mathrm{Cov}(X, Y) = 23{,}675$, $V(X) \\approx 4{,}16$ et $V(Y) = 157{,}25$.\nOn calcule $r = \\frac{23{,}675}{\\sqrt{4{,}16 \\times 157{,}25}}$.\nLe dénominateur vaut environ $25{,}6$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05_q5",
            "type": "mcq",
            "prompt": "Le coefficient de corrélation linéaire de la série des exploitations agricoles vaut environ :",
            "options": [
              "$0{,}92$",
              "$0{,}50$",
              "$1{,}92$",
              "$23{,}675$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$r = \\frac{23{,}675}{\\sqrt{4{,}16 \\times 157{,}25}} \\approx 0{,}92$, comme dans la solution de l'exercice de fixation. La valeur $23{,}675$ est la covariance, pas $r$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Interpréter une forte corrélation linéaire",
          "stepTheme": "Interpréter une forte corrélation linéaire",
          "stepBadge": "Interpréter une forte corrélation linéaire",
          "paragraphText": "• Le coefficient $r$ est un réel de même signe que $\\mathrm{Cov}(X, Y)$ et on a $-1 \\leq r \\leq 1$.\nSi $|r|$ est proche de $1$, en pratique si $0{,}87 \\leq r \\leq 1$ ou $-1 \\leq r \\leq -0{,}87$, on dit qu'il y a une bonne corrélation linéaire, ou forte corrélation linéaire, entre $X$ et $Y$.\nC'est seulement dans ce cas que les droites de régression du point suivant ont un sens.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05_q6",
            "type": "mcq",
            "prompt": "Pour la série des exploitations, on a calculé $r = 0{,}92$. Que conclut la leçon ?",
            "options": [
              "Il n'y a aucun lien entre la superficie et le nombre d'exploitations",
              "Il y a une forte corrélation entre la superficie et le nombre d'exploitations agricoles de cette région",
              "La corrélation est faible car $r < 1$",
              "On ne peut rien conclure sans la droite de Mayer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Comme $0{,}87 \\leq 0{,}92 \\leq 1$, l'interprétation de la leçon est : il y a une forte corrélation entre la superficie et le nombre d'exploitations agricoles de cette région."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05_q1",
          "type": "mcq",
          "prompt": "La covariance d'une série statistique double $(X ; Y)$ se calcule par :",
          "options": [
            "$\\mathrm{Cov}(X, Y) = \\frac{\\sum x_i y_i}{n} - \\bar{x} \\bar{y}$",
            "$\\mathrm{Cov}(X, Y) = \\frac{\\sum x_i}{n} \\times \\frac{\\sum y_i}{n}$",
            "$\\mathrm{Cov}(X, Y) = \\bar{x} + \\bar{y}$",
            "$\\mathrm{Cov}(X, Y) = \\frac{\\sum x_i^2}{n} - \\bar{x}^2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la deuxième forme donnée par la définition de la leçon. La dernière formule est celle de la variance de $X$, pas de la covariance."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05_q2",
          "type": "mcq",
          "prompt": "La covariance de la série des exploitations agricoles vaut :",
          "options": [
            "$164{,}7$",
            "$23{,}675$",
            "$188{,}375$",
            "$353{,}075$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\mathrm{Cov}(X, Y) = 188{,}375 - 164{,}7 = 23{,}675$, comme dans la solution de l'exercice de fixation de la leçon."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05_q3",
          "type": "mcq",
          "prompt": "La variance $V(X)$ de la série des exploitations agricoles vaut environ :",
          "options": [
            "$25{,}09$",
            "$20{,}93$",
            "$157{,}25$",
            "$4{,}16$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$V(X) = \\frac{200{,}76}{8} - 4{,}575^2 \\approx 25{,}095 - 20{,}93 \\approx 4{,}16$. La valeur $157{,}25$ est la variance de $Y$, pas celle de $X$."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05_q4",
          "type": "mcq",
          "prompt": "Le coefficient de corrélation linéaire $r$ est défini par :",
          "options": [
            "$r = \\frac{V(X)}{V(Y)}$",
            "$r = \\frac{\\mathrm{Cov}(X, Y)}{\\sqrt{V(X)} \\sqrt{V(Y)}}$",
            "$r = \\mathrm{Cov}(X, Y) \\times \\sqrt{V(X) V(Y)}$",
            "$r = \\frac{\\bar{x}}{\\bar{y}}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la leçon : la covariance divisée par le produit des écarts-types des deux caractères."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05_q5",
          "type": "mcq",
          "prompt": "Le coefficient de corrélation linéaire de la série des exploitations agricoles vaut environ :",
          "options": [
            "$0{,}92$",
            "$0{,}50$",
            "$1{,}92$",
            "$23{,}675$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$r = \\frac{23{,}675}{\\sqrt{4{,}16 \\times 157{,}25}} \\approx 0{,}92$, comme dans la solution de l'exercice de fixation. La valeur $23{,}675$ est la covariance, pas $r$."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p05_q6",
          "type": "mcq",
          "prompt": "Pour la série des exploitations, on a calculé $r = 0{,}92$. Que conclut la leçon ?",
          "options": [
            "Il n'y a aucun lien entre la superficie et le nombre d'exploitations",
            "Il y a une forte corrélation entre la superficie et le nombre d'exploitations agricoles de cette région",
            "La corrélation est faible car $r < 1$",
            "On ne peut rien conclure sans la droite de Mayer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Comme $0{,}87 \\leq 0{,}92 \\leq 1$, l'interprétation de la leçon est : il y a une forte corrélation entre la superficie et le nombre d'exploitations agricoles de cette région."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06",
      "order": 6,
      "title": "Les droites de régression et l'estimation",
      "summary": "Déterminer les droites de régression de Y en X et de X en Y par les moindres carrés, puis estimer une valeur inconnue.",
      "conceptExplanation": "On suppose qu'il y a une forte corrélation entre les caractères $X$ et $Y$. La droite de régression de $Y$ en $X$ par la méthode des moindres carrés est la droite $(D)$ d'équation $y = ax + b$ avec $a = \\frac{\\mathrm{Cov}(X, Y)}{V(X)}$ et $b = \\bar{y} - a\\bar{x}$. La droite de régression de $X$ en $Y$ est la droite $(D')$ d'équation $x = a'y + b'$ avec $a' = \\frac{\\mathrm{Cov}(X, Y)}{V(Y)}$ et $b' = \\bar{x} - a'\\bar{y}$. Les deux droites passent par le point moyen $G$ du nuage, et leurs coefficients vérifient $aa' = r^2$.\nPour la série des exploitations : $(D) : y = 5{,}69x + 9{,}97$ et $(D') : x = 0{,}15y - 0{,}83$.\nEstimation : la droite d'ajustement tracée permet graphiquement une estimation de $y$ connaissant $x$ (ou de $x$ connaissant $y$), et son équation permet de la calculer. Pour le site de vente en ligne de l'exercice 2 de la leçon, la droite de régression de $Y$ en $X$ est $y = 0{,}027x + 87{,}63$, ce qui estime le chiffre d'affaires à $492{,}63$ pour $15000$ commandes.",
      "keyRule": "Régression de Y en X : $a = \\frac{\\mathrm{Cov}(X, Y)}{V(X)}$ ; l'équation de la droite donne ensuite l'estimation cherchée.",
      "formulas": [
        {
          "name": "Droite de régression de Y en X",
          "formula": "y = ax + b \\text{ avec } a = \\frac{\\mathrm{Cov}(X, Y)}{V(X)} \\text{ et } b = \\bar{y} - a\\bar{x}"
        },
        {
          "name": "Droite de régression de X en Y",
          "formula": "x = a'y + b' \\text{ avec } a' = \\frac{\\mathrm{Cov}(X, Y)}{V(Y)} \\text{ et } b' = \\bar{x} - a'\\bar{y}"
        },
        {
          "name": "Lien entre les coefficients et r",
          "formula": "aa' = r^2"
        }
      ],
      "workedExample": {
        "title": "Les deux droites de régression du site de vente en ligne (exercice 2, partie B)",
        "statement": "Pour le site de vente en ligne de l'exercice 2 (X = nombre de commandes, Y = chiffre d'affaires mensuel), on a $\\bar{x} = 9254{,}17$, $\\bar{y} = 337{,}5$, $\\mathrm{Cov}(X, Y) = 77947{,}9$, $V(X) = 2878824{,}824$ et $V(Y) = 2181{,}254$, avec $r = 0{,}98$. Détermine une équation de la droite de régression de Y en X et une équation de la droite de régression de X en Y par la méthode des moindres carrés.",
        "methodSteps": [
          "Il y a une forte corrélation ($r = 0{,}98$) : les droites de régression ont un sens.",
          "Droite de $Y$ en $X$ : $a = \\frac{77947{,}9}{2878824{,}824} = 0{,}027$ et $b = 337{,}5 - 0{,}027 \\times 9254{,}17 = 87{,}63$.",
          "Droite de $X$ en $Y$ : $a' = \\frac{77947{,}9}{2181{,}254} = 35{,}735$ et $b' = 9254{,}17 - 35{,}735 \\times 337{,}5 = -2806{,}39$."
        ],
        "conclusion": "$(D) : y = 0{,}027x + 87{,}63$ et $(D') : x = 35{,}735y - 2806{,}39$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'estimation à l'aide d'une droite d'ajustement",
          "stepTheme": "L'estimation à l'aide d'une droite d'ajustement",
          "stepBadge": "L'estimation à l'aide d'une droite d'ajustement",
          "paragraphText": "• La droite d'ajustement tracée du nuage de points permet graphiquement une estimation de $y$ connaissant $x$ (respectivement de $x$ connaissant $y$).\n• L'équation de la droite d'ajustement permet de calculer cette estimation.\nEstimer, c'est donc prolonger la tendance dégagée par le nuage vers une valeur qui ne figure pas dans la série.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q1",
            "type": "mcq",
            "prompt": "D'après la partie « Estimation » de la leçon, l'équation de la droite d'ajustement permet :",
            "options": [
              "De calculer une estimation de $y$ connaissant $x$ (ou de $x$ connaissant $y$)",
              "De retrouver le tableau de contingence",
              "De calculer les séries marginales",
              "De supprimer les points du nuage"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le principe de l'estimation dans la leçon : l'équation de la droite fournit par le calcul l'estimation que le tracé de la droite fournit graphiquement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La droite de régression de Y en X",
          "stepTheme": "La droite de régression de Y en X",
          "stepBadge": "La droite de régression de Y en X",
          "paragraphText": "• La droite de régression de $Y$ en $X$ par les moindres carrés a pour équation $y = ax + b$.\nSon coefficient directeur est $a = \\frac{\\mathrm{Cov}(X, Y)}{V(X)}$ : c'est la variance de $X$ qui est au dénominateur.\nSon ordonnée à l'origine est $b = \\bar{y} - a\\bar{x}$, ce qui traduit que la droite passe par le point moyen $G$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q2",
            "type": "mcq",
            "prompt": "Dans la droite de régression de $Y$ en $X$, le coefficient directeur $a$ vaut :",
            "options": [
              "$\\frac{V(X)}{\\mathrm{Cov}(X, Y)}$",
              "$\\frac{\\mathrm{Cov}(X, Y)}{V(X)}$",
              "$\\frac{\\mathrm{Cov}(X, Y)}{V(Y)}$",
              "$\\bar{y} - a\\bar{x}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $a = \\frac{\\mathrm{Cov}(X, Y)}{V(X)}$. Le quotient avec $V(Y)$ donne le coefficient $a'$ de la droite de régression de $X$ en $Y$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La droite de régression de Y en X des exploitations",
          "stepTheme": "La droite de régression de Y en X des exploitations",
          "stepBadge": "La droite de régression de Y en X des exploitations",
          "paragraphText": "• Pour la série des exploitations : $\\mathrm{Cov}(X, Y) = 23{,}675$ et $V(X) = 4{,}16$ (valeur utilisée dans le calcul de la leçon).\nDonc $a = \\frac{23{,}675}{4{,}16} = 5{,}69$ et $b = 36 - 5{,}69 \\times 4{,}575 = 9{,}97$.\nLa droite $(D)$ est ainsi entièrement déterminée.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q3",
            "type": "mcq",
            "prompt": "Une équation de la droite de régression de $Y$ en $X$ de la série des exploitations est :",
            "options": [
              "$y = 0{,}15x - 0{,}83$",
              "$y = 5{,}69x + 36$",
              "$y = 9{,}97x + 5{,}69$",
              "$y = 5{,}69x + 9{,}97$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec $a = 5{,}69$ et $b = 9{,}97$, on obtient $(D) : y = 5{,}69x + 9{,}97$, comme dans la solution de l'exercice de fixation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La droite de régression de X en Y",
          "stepTheme": "La droite de régression de X en Y",
          "stepBadge": "La droite de régression de X en Y",
          "paragraphText": "• La droite de régression de $X$ en $Y$ a pour équation $x = a'y + b'$ avec $a' = \\frac{\\mathrm{Cov}(X, Y)}{V(Y)}$ et $b' = \\bar{x} - a'\\bar{y}$.\nLes droites $(D)$ et $(D')$ passent toutes les deux par le point moyen $G$ du nuage.\nSi $r$ est le coefficient de corrélation, on a $aa' = r^2$ et $|r| = \\sqrt{aa'}$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q4",
            "type": "mcq",
            "prompt": "Pour la série des exploitations, une équation de la droite de régression de $X$ en $Y$ est :",
            "options": [
              "$x = 0{,}15y - 0{,}83$",
              "$x = 5{,}69y + 9{,}97$",
              "$y = 0{,}15x - 0{,}83$",
              "$x = 35{,}735y - 2806{,}39$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $a' = \\frac{23{,}675}{157{,}25} = 0{,}15$ et $b' = 4{,}575 - 0{,}15 \\times 36 = -0{,}825$, arrondi à $-0{,}83$ : $(D') : x = 0{,}15y - 0{,}83$. La dernière équation concerne le site de vente en ligne, pas les exploitations."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre les deux droites de régression",
          "stepTheme": "Ne pas confondre les deux droites de régression",
          "stepBadge": "Ne pas confondre les deux droites de régression",
          "paragraphText": "• Piège : $(D)$ donne $y$ en fonction de $x$, tandis que $(D')$ donne $x$ en fonction de $y$.\nLeurs coefficients directeurs sont différents : pour les exploitations, $a = 5{,}69$ et $a' = 0{,}15$.\nOn choisit la droite selon la valeur connue et celle que l'on veut estimer.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q5",
            "type": "mcq",
            "prompt": "Pour estimer le nombre d'exploitations $y$ connaissant la superficie $x$ dans la série des exploitations, on utilise :",
            "options": [
              "La droite de régression de $X$ en $Y$",
              "La droite de régression de $Y$ en $X$ : $y = 5{,}69x + 9{,}97$",
              "Le tableau de contingence",
              "La série marginale de $Y$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On cherche $y$ à partir de $x$ : c'est la droite de régression de $Y$ en $X$ qui donne $y$ en fonction de $x$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Estimer le chiffre d'affaires pour 15 000 commandes (moindres carrés)",
          "stepTheme": "Estimer le chiffre d'affaires pour 15 000 commandes (moindres carrés)",
          "stepBadge": "Estimer le chiffre d'affaires pour 15 000 commandes (moindres carrés)",
          "paragraphText": "• Exercice 2 de la leçon : la droite de régression de $Y$ en $X$ du site de vente en ligne est $y = 0{,}027x + 87{,}63$.\nPour $15000$ commandes, on remplace $x$ par $15000$ dans cette équation.\nPar la méthode de Mayer, la même estimation donnait $y = 0{,}028 \\times 15000 + 78 = 498$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q6",
            "type": "mcq",
            "prompt": "Avec la droite de régression $y = 0{,}027x + 87{,}63$, le chiffre d'affaires estimé pour $15000$ commandes est :",
            "options": [
              "$498$",
              "$405$",
              "$492{,}63$",
              "$87630$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$y = 0{,}027 \\times 15000 + 87{,}63 = 405 + 87{,}63 = 492{,}63$, soit un chiffre d'affaires d'environ $492630000$ francs d'après la solution de l'exercice."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "La pluviométrie est-elle liée à la température ? (situation complexe)",
          "stepTheme": "La pluviométrie est-elle liée à la température ? (situation complexe)",
          "stepBadge": "La pluviométrie est-elle liée à la température ? (situation complexe)",
          "paragraphText": "• Situation d'apprentissage traitée en situation complexe : $X$ est la pluviométrie et $Y$ la température, relevées sur $12$ mois.\nLe point moyen est $G(36{,}333 ; 17{,}333)$, la covariance vaut $-127{,}26$ et le coefficient de corrélation $r = -0{,}884$ : comme $0{,}87 \\leq |r| < 1$, il y a une bonne corrélation linéaire, la pluviométrie est donc liée à la température.\nLa droite de régression de $Y$ en $X$ est $y = -0{,}233x + 25{,}798$ ; pour la température d'octobre 2019, $y = 32$, on obtient $x = \\frac{32 - 25{,}798}{-0{,}233} \\approx -26{,}62$, valeur impossible pour une pluviométrie.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q7",
            "type": "mcq",
            "prompt": "Pour une température moyenne de $32$ °C en octobre 2019, l'estimation de la pluviométrie obtenue par la leçon est :",
            "options": [
              "Environ $79$ mm",
              "Environ $26{,}62$ mm",
              "Quasi-nulle, car le calcul donne une valeur négative (environ $-26{,}62$)",
              "Environ $32$ mm"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La bonne corrélation ($r = -0{,}884$) justifie l'estimation par la droite de régression, mais le calcul donne $x \\approx -26{,}62$, impossible pour une pluviométrie : la conclusion de la situation complexe est qu'elle est quasi-nulle."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Le don du club littéraire : la date estimée par les moindres carrés",
          "stepTheme": "Le don du club littéraire : la date estimée par les moindres carrés",
          "stepBadge": "Le don du club littéraire : la date estimée par les moindres carrés",
          "paragraphText": "• Situation complexe de la leçon : le nombre d'adhérents du club littéraire suit les rangs des mois de 2020, et une ONG promet une aide si le nombre d'adhérents dépasse $3000$.\nPar les moindres carrés (classes de TA1) : $\\bar{x} = 6{,}5$, $\\bar{y} = 1574{,}167$, $V(X) = 11{,}917$ et $\\mathrm{Cov}(X, Y) = 1025{,}4145$.\nLa droite de régression de $Y$ en $X$ est $y = 86{,}046x + 1014{,}868$ ; pour $y = 3000$, on obtient $x \\approx 23{,}07$, soit le rang $24$.",
          "exercise": {
            "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q8",
            "type": "mcq",
            "prompt": "D'après la résolution par les moindres carrés de la situation complexe, la date probable de réception du don (seuil de $3000$ adhérents) est :",
            "options": [
              "Mars 2022",
              "Décembre 2021",
              "Janvier 2021",
              "Juin 2022"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le rang cherché est sensiblement égal à $24$ : le 24e mois à partir de janvier 2020 est décembre 2021. C'est la conclusion de la résolution par les moindres carrés, celle des classes de TA1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q1",
          "type": "mcq",
          "prompt": "D'après la partie « Estimation » de la leçon, l'équation de la droite d'ajustement permet :",
          "options": [
            "De calculer une estimation de $y$ connaissant $x$ (ou de $x$ connaissant $y$)",
            "De retrouver le tableau de contingence",
            "De calculer les séries marginales",
            "De supprimer les points du nuage"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le principe de l'estimation dans la leçon : l'équation de la droite fournit par le calcul l'estimation que le tracé de la droite fournit graphiquement."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q2",
          "type": "mcq",
          "prompt": "Dans la droite de régression de $Y$ en $X$, le coefficient directeur $a$ vaut :",
          "options": [
            "$\\frac{V(X)}{\\mathrm{Cov}(X, Y)}$",
            "$\\frac{\\mathrm{Cov}(X, Y)}{V(X)}$",
            "$\\frac{\\mathrm{Cov}(X, Y)}{V(Y)}$",
            "$\\bar{y} - a\\bar{x}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $a = \\frac{\\mathrm{Cov}(X, Y)}{V(X)}$. Le quotient avec $V(Y)$ donne le coefficient $a'$ de la droite de régression de $X$ en $Y$."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q3",
          "type": "mcq",
          "prompt": "Une équation de la droite de régression de $Y$ en $X$ de la série des exploitations est :",
          "options": [
            "$y = 0{,}15x - 0{,}83$",
            "$y = 5{,}69x + 36$",
            "$y = 9{,}97x + 5{,}69$",
            "$y = 5{,}69x + 9{,}97$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec $a = 5{,}69$ et $b = 9{,}97$, on obtient $(D) : y = 5{,}69x + 9{,}97$, comme dans la solution de l'exercice de fixation."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q4",
          "type": "mcq",
          "prompt": "Pour la série des exploitations, une équation de la droite de régression de $X$ en $Y$ est :",
          "options": [
            "$x = 0{,}15y - 0{,}83$",
            "$x = 5{,}69y + 9{,}97$",
            "$y = 0{,}15x - 0{,}83$",
            "$x = 35{,}735y - 2806{,}39$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $a' = \\frac{23{,}675}{157{,}25} = 0{,}15$ et $b' = 4{,}575 - 0{,}15 \\times 36 = -0{,}825$, arrondi à $-0{,}83$ : $(D') : x = 0{,}15y - 0{,}83$. La dernière équation concerne le site de vente en ligne, pas les exploitations."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q5",
          "type": "mcq",
          "prompt": "Pour estimer le nombre d'exploitations $y$ connaissant la superficie $x$ dans la série des exploitations, on utilise :",
          "options": [
            "La droite de régression de $X$ en $Y$",
            "La droite de régression de $Y$ en $X$ : $y = 5{,}69x + 9{,}97$",
            "Le tableau de contingence",
            "La série marginale de $Y$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On cherche $y$ à partir de $x$ : c'est la droite de régression de $Y$ en $X$ qui donne $y$ en fonction de $x$."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q6",
          "type": "mcq",
          "prompt": "Avec la droite de régression $y = 0{,}027x + 87{,}63$, le chiffre d'affaires estimé pour $15000$ commandes est :",
          "options": [
            "$498$",
            "$405$",
            "$492{,}63$",
            "$87630$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$y = 0{,}027 \\times 15000 + 87{,}63 = 405 + 87{,}63 = 492{,}63$, soit un chiffre d'affaires d'environ $492630000$ francs d'après la solution de l'exercice."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q7",
          "type": "mcq",
          "prompt": "Pour une température moyenne de $32$ °C en octobre 2019, l'estimation de la pluviométrie obtenue par la leçon est :",
          "options": [
            "Environ $79$ mm",
            "Environ $26{,}62$ mm",
            "Quasi-nulle, car le calcul donne une valeur négative (environ $-26{,}62$)",
            "Environ $32$ mm"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La bonne corrélation ($r = -0{,}884$) justifie l'estimation par la droite de régression, mais le calcul donne $x \\approx -26{,}62$, impossible pour une pluviométrie : la conclusion de la situation complexe est qu'elle est quasi-nulle."
        },
        {
          "id": "terminale_a1_maths_statistiques_l06_statistique_deux_variables_p06_q8",
          "type": "mcq",
          "prompt": "D'après la résolution par les moindres carrés de la situation complexe, la date probable de réception du don (seuil de $3000$ adhérents) est :",
          "options": [
            "Mars 2022",
            "Décembre 2021",
            "Janvier 2021",
            "Juin 2022"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le rang cherché est sensiblement égal à $24$ : le 24e mois à partir de janvier 2020 est décembre 2021. C'est la conclusion de la résolution par les moindres carrés, celle des classes de TA1."
        }
      ]
    }
  ]
};
