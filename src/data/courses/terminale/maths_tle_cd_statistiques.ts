import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 11 : Statistiques » (statistique à deux variables) (format v2 : mini-leçons de 5 à 8 étapes). Pas de livre 2025-2026 pour cette leçon.
// Source : https://lyc.ecole-ci.org/course/view.php?id=2854
export const MATHS_TLE_CD_L11_STATISTIQUES: CurriculumChapter = {
  "id": "terminale_c_maths_statistiques_l11_statistiques",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 11,
  "orderForGrades": {"terminale_c":11.5},
  "title": "Leçon 11 : Statistiques",
  "summary": "Série statistique double, tableaux de contingence et séries marginales, nuage de points et point moyen, covariance, coefficient de corrélation linéaire, droites de régression et estimation.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2854",
  "points": [
    {
      "id": "terminale_c_maths_statistiques_l11_statistiques_p01",
      "order": 1,
      "title": "Série statistique double et tableau de contingence",
      "summary": "Définition d'une série statistique double, lecture d'un tableau de contingence et séries marginales.",
      "conceptExplanation": "On considère deux caractères quantitatifs $X$ et $Y$ sur une même population de $n$ individus.\nOn note $x_1, x_2, \\ldots, x_p$ les valeurs du caractère $X$, $y_1, y_2, \\ldots, y_q$ les valeurs du caractère $Y$ et $n_{ij}$ l'effectif du couple $(x_i, y_j)$.\nOn appelle série statistique double de caractère $(X, Y)$ l'ensemble des triplets $(x_i, y_j, n_{ij})$.\nLe tableau à double entrée qui présente ces effectifs est appelé tableau de contingence.\nEn additionnant les effectifs d'une colonne, on obtient l'effectif de la modalité correspondante de $X$ ; en additionnant ceux d'une ligne, celui de la modalité correspondante de $Y$ : ce sont les séries marginales. La fréquence d'une modalité est son effectif divisé par l'effectif total.",
      "keyRule": "Série double = triplets (x_i ; y_j ; n_ij). Marginale de X : sommes par colonne ; marginale de Y : sommes par ligne.",
      "formulas": [
        {
          "name": "Effectif marginal de X",
          "formula": "n_{i\\bullet} = \\sum_j n_{ij}",
          "note": "Somme des effectifs de la colonne x_i."
        },
        {
          "name": "Effectif marginal de Y",
          "formula": "n_{\\bullet j} = \\sum_i n_{ij}",
          "note": "Somme des effectifs de la ligne y_j."
        },
        {
          "name": "Fréquence marginale",
          "formula": "f_i = \\frac{n_i}{n}",
          "note": "Effectif de la modalité divisé par l'effectif total."
        }
      ],
      "workedExample": {
        "title": "Le tableau de contingence des 100 ménages",
        "statement": "Une étude porte sur 100 ménages : $X$ est le nombre d'enfants, $Y$ le nombre de pièces de l'appartement. Combien de ménages ont deux enfants et occupent un appartement de quatre pièces ? Combien de ménages n'ont pas d'enfants ?",
        "methodSteps": [
          "On croise la colonne de la valeur $2$ du caractère $X$ et la ligne de la valeur $4$ du caractère $Y$ : l'intersection est $3$.",
          "Pour les ménages sans enfant, on additionne la colonne de la valeur $0$ de $X$ : $6 + 3 + 1 + 0 = 10$.",
          "Donc 3 ménages ont deux enfants et quatre pièces, et 10 ménages n'ont pas d'enfants."
        ],
        "conclusion": "3 ménages ont deux enfants et quatre pièces ; 10 ménages n'ont pas d'enfants."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d'une série statistique double",
          "stepTheme": "La définition d'une série statistique double",
          "stepBadge": "La définition d'une série statistique double",
          "paragraphText": "• On considère deux caractères quantitatifs $X$ et $Y$ sur une même population de $n$ individus.\nOn note $x_i$ les valeurs de $X$, $y_j$ celles de $Y$ et $n_{ij}$ l'effectif du couple $(x_i, y_j)$.\nLa série statistique double de caractère $(X, Y)$ est l'ensemble des triplets $(x_i, y_j, n_{ij})$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une série statistique double de caractère $(X, Y)$ ?",
            "options": [
              "L'ensemble des triplets $(x_i ; y_j ; n_{ij})$",
              "L'ensemble des couples $(x_i ; y_i)$",
              "Le tableau des fréquences marginales",
              "Le nuage de points associé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une série statistique double de caractère (X, Y) est l'ensemble des triplets (x_i ; y_j ; n_ij), où n_ij est l'effectif du couple (x_i, y_j)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Lire un tableau de contingence : 2 enfants et 4 pièces",
          "stepTheme": "Lire un tableau de contingence : 2 enfants et 4 pièces",
          "stepBadge": "Lire un tableau de contingence : 2 enfants et 4 pièces",
          "paragraphText": "• Dans le tableau de contingence des 100 ménages, $X$ est le nombre d'enfants et $Y$ le nombre de pièces.\nPour trouver les ménages qui ont deux enfants et quatre pièces, on croise la colonne $X = 2$ et la ligne $Y = 4$.\nL'intersection est $3$ : 3 ménages ont deux enfants et occupent un appartement de quatre pièces.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p01_q2",
            "type": "mcq",
            "prompt": "Dans l'étude des 100 ménages, combien de ménages ont deux enfants et occupent un appartement de quatre pièces ?",
            "options": [
              "$3$ ménages",
              "$4$ ménages",
              "$5$ ménages",
              "$13$ ménages"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À l'intersection de la colonne X = 2 et de la ligne Y = 4, on lit 3 : 3 ménages ont deux enfants et quatre pièces."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'effectif marginal : les ménages sans enfant",
          "stepTheme": "L'effectif marginal : les ménages sans enfant",
          "stepBadge": "L'effectif marginal : les ménages sans enfant",
          "paragraphText": "• Pour trouver l'effectif de la valeur $0$ du caractère $X$, on additionne tous les $n_{ij}$ de la colonne $X = 0$.\nOn a $6 + 3 + 1 + 0 = 10$.\nDonc 10 ménages n'ont pas d'enfants.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p01_q3",
            "type": "mcq",
            "prompt": "Dans l'étude des 100 ménages, combien de ménages n'ont pas d'enfants ?",
            "options": [
              "$10$ ménages",
              "$6$ ménages",
              "$19$ ménages",
              "$11$ ménages"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On additionne la colonne X = 0 : 6 + 3 + 1 + 0 = 10 ménages n'ont pas d'enfants."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'effectif marginal : les ménages à quatre enfants",
          "stepTheme": "L'effectif marginal : les ménages à quatre enfants",
          "stepBadge": "L'effectif marginal : les ménages à quatre enfants",
          "paragraphText": "• Pour trouver l'effectif de la valeur $4$ du caractère $X$, on additionne tous les $n_{ij}$ de la colonne $X = 4$.\nOn a $0 + 1 + 4 + 8 = 13$.\nDonc 13 ménages ont quatre enfants.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p01_q4",
            "type": "mcq",
            "prompt": "Dans l'étude des 100 ménages, combien de ménages ont quatre enfants ?",
            "options": [
              "$13$ ménages",
              "$8$ ménages",
              "$4$ ménages",
              "$21$ ménages"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On additionne la colonne X = 4 : 0 + 1 + 4 + 8 = 13 ménages ont quatre enfants."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La série marginale du caractère $Y$",
          "stepTheme": "La série marginale du caractère $Y$",
          "stepBadge": "La série marginale du caractère $Y$",
          "paragraphText": "• En additionnant les effectifs de chaque ligne du tableau de contingence, on obtient la série marginale du caractère $Y$.\nPour $Y = 1$ : $6 + 4 + 1 + 0 + 0 + 0 = 11$ ; pour $Y = 2$ : $30$ ; pour $Y = 3$ : $38$ ; pour $Y = 4$ : $21$.\nLa série marginale de $Y$ est donc : $11, 30, 38, 21$ (total $100$).",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p01_q5",
            "type": "mcq",
            "prompt": "Quelle est la série marginale du caractère $Y$ (nombre de pièces) dans l'étude des 100 ménages ?",
            "options": [
              "$11, 30, 38, 21$",
              "$10, 19, 30, 23, 13, 5$",
              "$6, 4, 1, 0, 0, 0$",
              "$100, 100, 100, 100$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En additionnant chaque ligne : Y = 1 donne 11, Y = 2 donne 30, Y = 3 donne 38, Y = 4 donne 21."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Quels tableaux définissent une série statistique double ?",
          "stepTheme": "Quels tableaux définissent une série statistique double ?",
          "stepBadge": "Quels tableaux définissent une série statistique double ?",
          "paragraphText": "• Une série statistique double porte sur deux caractères : il faut deux variables.\nUn tableau « notes / effectif » ne porte que sur un seul caractère (les notes) avec ses effectifs : c'est une série simple.\nUn tableau « poids / âge » croise deux caractères quantitatifs : c'est une série statistique double.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p01_q6",
            "type": "mcq",
            "prompt": "Parmi ces tableaux, lesquels définissent une série statistique double ?",
            "options": [
              "Les tableaux « poids / âge »",
              "Les tableaux « notes / effectif »",
              "Le tableau « notes / effectif » seulement",
              "Tous les tableaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une série double croise deux caractères : les tableaux « poids / âge » définissent une série double, alors que « notes / effectif » est une série simple."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une série statistique double de caractère $(X, Y)$ ?",
          "options": [
            "L'ensemble des triplets $(x_i ; y_j ; n_{ij})$",
            "L'ensemble des couples $(x_i ; y_i)$",
            "Le tableau des fréquences marginales",
            "Le nuage de points associé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une série statistique double de caractère (X, Y) est l'ensemble des triplets (x_i ; y_j ; n_ij), où n_ij est l'effectif du couple (x_i, y_j)."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p01_q2",
          "type": "mcq",
          "prompt": "Dans l'étude des 100 ménages, combien de ménages ont deux enfants et occupent un appartement de quatre pièces ?",
          "options": [
            "$3$ ménages",
            "$4$ ménages",
            "$5$ ménages",
            "$13$ ménages"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À l'intersection de la colonne X = 2 et de la ligne Y = 4, on lit 3 : 3 ménages ont deux enfants et quatre pièces."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p01_q3",
          "type": "mcq",
          "prompt": "Dans l'étude des 100 ménages, combien de ménages n'ont pas d'enfants ?",
          "options": [
            "$10$ ménages",
            "$6$ ménages",
            "$19$ ménages",
            "$11$ ménages"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On additionne la colonne X = 0 : 6 + 3 + 1 + 0 = 10 ménages n'ont pas d'enfants."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p01_q4",
          "type": "mcq",
          "prompt": "Dans l'étude des 100 ménages, combien de ménages ont quatre enfants ?",
          "options": [
            "$13$ ménages",
            "$8$ ménages",
            "$4$ ménages",
            "$21$ ménages"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On additionne la colonne X = 4 : 0 + 1 + 4 + 8 = 13 ménages ont quatre enfants."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p01_q5",
          "type": "mcq",
          "prompt": "Quelle est la série marginale du caractère $Y$ (nombre de pièces) dans l'étude des 100 ménages ?",
          "options": [
            "$11, 30, 38, 21$",
            "$10, 19, 30, 23, 13, 5$",
            "$6, 4, 1, 0, 0, 0$",
            "$100, 100, 100, 100$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En additionnant chaque ligne : Y = 1 donne 11, Y = 2 donne 30, Y = 3 donne 38, Y = 4 donne 21."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p01_q6",
          "type": "mcq",
          "prompt": "Parmi ces tableaux, lesquels définissent une série statistique double ?",
          "options": [
            "Les tableaux « poids / âge »",
            "Les tableaux « notes / effectif »",
            "Le tableau « notes / effectif » seulement",
            "Tous les tableaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une série double croise deux caractères : les tableaux « poids / âge » définissent une série double, alors que « notes / effectif » est une série simple."
        }
      ]
    },
    {
      "id": "terminale_c_maths_statistiques_l11_statistiques_p02",
      "order": 2,
      "title": "Nuage de points et point moyen",
      "summary": "Le nuage de points associé à une série double et le point moyen G, moyenne des abscisses et des ordonnées.",
      "conceptExplanation": "On appelle nuage de points associé à la série statistique double de caractère $(X, Y)$ l'ensemble des points de coordonnées $(x_i ; y_j)$ d'effectifs non nuls.\nOn appelle point moyen du nuage de $n$ points $M_i$ de coordonnées $(x_i ; y_i)$ le point $G$ de coordonnées $(x_G ; y_G)$ avec $x_G = \\bar{X} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$ et $y_G = \\bar{Y} = \\frac{y_1 + y_2 + \\cdots + y_n}{n}$.\nDans la suite, les séries doubles considérées sont telles que l'effectif $n_{ij}$ du couple $(x_i, y_j)$ vaut $1$.",
      "keyRule": "Nuage : points (x_i ; y_j) d'effectifs non nuls. Point moyen G(X̄ ; Ȳ) : moyennes des deux caractères.",
      "formulas": [
        {
          "name": "Abscisse du point moyen",
          "formula": "x_G = \\bar{X} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}",
          "note": "Moyenne des valeurs de X."
        },
        {
          "name": "Ordonnée du point moyen",
          "formula": "y_G = \\bar{Y} = \\frac{y_1 + y_2 + \\cdots + y_n}{n}",
          "note": "Moyenne des valeurs de Y."
        }
      ],
      "workedExample": {
        "title": "Le point moyen des exploitations agricoles",
        "statement": "Le tableau donne le nombre d'exploitations agricoles selon leur superficie : X = 2, 2, 3, 4, 5, 6, 7, 7,6 et Y = 14, 26, 31, 29, 44, 40, 54, 50. Détermine les coordonnées du point moyen du nuage de points.",
        "methodSteps": [
          "On a $\\bar{X} = \\frac{2 + 2 + 3 + 4 + 5 + 6 + 7 + 7{,}6}{8} = \\frac{36{,}6}{8} = 4{,}575$.",
          "On a $\\bar{Y} = \\frac{14 + 26 + 31 + 29 + 44 + 40 + 54 + 50}{8} = \\frac{288}{8} = 36$.",
          "Donc le point moyen est $G(4{,}575 ; 36)$."
        ],
        "conclusion": "Le point moyen du nuage est $G(4{,}575 ; 36)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le nuage de points associé à une série double",
          "stepTheme": "Le nuage de points associé à une série double",
          "stepBadge": "Le nuage de points associé à une série double",
          "paragraphText": "• On appelle nuage de points associé à la série statistique double de caractère $(X, Y)$ l'ensemble des points de coordonnées $(x_i ; y_j)$ d'effectifs non nuls.\nChaque point du nuage représente un couple observé $(x_i, y_j)$.\nLe nuage permet de visualiser la relation entre les deux caractères.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p02_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que le nuage de points associé à une série statistique double de caractère $(X, Y)$ ?",
            "options": [
              "L'ensemble des points $(x_i ; y_j)$ d'effectifs non nuls",
              "L'ensemble des points $(x_i ; x_i)$",
              "Le tableau des fréquences marginales",
              "La droite de régression du nuage"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le nuage de points est l'ensemble des points de coordonnées (x_i ; y_j) dont l'effectif est non nul."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le point moyen des exploitations agricoles : $G(4{,}575 ; 36)$",
          "stepTheme": "Le point moyen des exploitations agricoles : $G(4{,}575 ; 36)$",
          "stepBadge": "Le point moyen des exploitations agricoles : $G(4{,}575 ; 36)$",
          "paragraphText": "• Pour la série des exploitations agricoles, $\\bar{X} = \\frac{2 + 2 + 3 + 4 + 5 + 6 + 7 + 7{,}6}{8} = \\frac{36{,}6}{8} = 4{,}575$.\nEt $\\bar{Y} = \\frac{14 + 26 + 31 + 29 + 44 + 40 + 54 + 50}{8} = \\frac{288}{8} = 36$.\nLe point moyen est donc $G(4{,}575 ; 36)$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p02_q2",
            "type": "mcq",
            "prompt": "Quel est le point moyen du nuage des exploitations agricoles (X = 2, 2, 3, 4, 5, 6, 7, 7,6 ; Y = 14, 26, 31, 29, 44, 40, 54, 50) ?",
            "options": [
              "$G(4{,}575 ; 36)$",
              "$G(36 ; 4{,}575)$",
              "$G(4{,}575 ; 28{,}8)$",
              "$G(5 ; 36)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "X̄ = 36,6/8 = 4,575 et Ȳ = 288/8 = 36 : le point moyen est G(4,575 ; 36)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le point moyen de la série $(1 ; 2), (4 ; 7), (7 ; 8), (8 ; 10), (10 ; 13)$",
          "stepTheme": "Le point moyen de la série $(1 ; 2), (4 ; 7), (7 ; 8), (8 ; 10), (10 ; 13)$",
          "stepBadge": "Le point moyen de la série $(1 ; 2), (4 ; 7), (7 ; 8), (8 ; 10), (10 ; 13)$",
          "paragraphText": "• On a $x_G = \\bar{X} = \\frac{1 + 4 + 7 + 8 + 10}{5} = \\frac{30}{5} = 6$.\nEt $y_G = \\bar{Y} = \\frac{2 + 7 + 8 + 10 + 13}{5} = \\frac{40}{5} = 8$.\nDonc le point moyen est $G(6 ; 8)$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p02_q3",
            "type": "mcq",
            "prompt": "On considère la série X = 1, 4, 7, 8, 10 et Y = 2, 7, 8, 10, 13. Quelles sont les coordonnées du point moyen G ?",
            "options": [
              "$G(6 ; 8)$",
              "$G(8 ; 6)$",
              "$G(5 ; 8)$",
              "$G(6 ; 10)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "X̄ = 30/5 = 6 et Ȳ = 40/5 = 8 : le point moyen est G(6 ; 8)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le point moyen quand $\\bar{X} = 4$ et $\\bar{Y} = 6$",
          "stepTheme": "Le point moyen quand $\\bar{X} = 4$ et $\\bar{Y} = 6$",
          "stepBadge": "Le point moyen quand $\\bar{X} = 4$ et $\\bar{Y} = 6$",
          "paragraphText": "• Le point moyen $G$ a pour coordonnées $(\\bar{X} ; \\bar{Y})$ : l'abscisse est la moyenne de $X$, l'ordonnée la moyenne de $Y$.\nSi $\\bar{X} = 4$ et $\\bar{Y} = 6$, alors $G(4 ; 6)$.\nAttention à ne pas inverser les coordonnées : $G(6 ; 4)$ serait faux.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p02_q4",
            "type": "mcq",
            "prompt": "On donne $\\bar{X} = 4$ et $\\bar{Y} = 6$. Quelles sont les coordonnées du point moyen G ?",
            "options": [
              "$G(4 ; 6)$",
              "$G(6 ; 5)$",
              "$G(6 ; 4)$",
              "$G(4 ; 5{,}5)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le point moyen est G(X̄ ; Ȳ) = G(4 ; 6)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'âge moyen d'une population",
          "stepTheme": "L'âge moyen d'une population",
          "stepBadge": "L'âge moyen d'une population",
          "paragraphText": "• On considère le tableau X = 7, 3, 12, 8 (les âges) et Y = 15, 20, 25, 30 (les poids).\nL'âge moyen est $\\bar{X} = \\frac{7 + 3 + 12 + 8}{4} = \\frac{30}{4} = 7{,}5$.\nC'est la moyenne des valeurs du caractère $X$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p02_q5",
            "type": "mcq",
            "prompt": "Pour le tableau X = 7, 3, 12, 8 et Y = 15, 20, 25, 30, quel est l'âge moyen de cette population ?",
            "options": [
              "$7{,}5$",
              "$12$",
              "$25$",
              "$22{,}5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'âge moyen est X̄ = (7 + 3 + 12 + 8)/4 = 30/4 = 7,5."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le poids moyen d'une population",
          "stepTheme": "Le poids moyen d'une population",
          "stepBadge": "Le poids moyen d'une population",
          "paragraphText": "• Pour le même tableau X = 7, 3, 12, 8 et Y = 15, 20, 25, 30, le poids moyen est la moyenne des valeurs de $Y$.\n$\\bar{Y} = \\frac{15 + 20 + 25 + 30}{4} = \\frac{90}{4} = 22{,}5$.\nLe point moyen de cette série est donc $G(7{,}5 ; 22{,}5)$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p02_q6",
            "type": "mcq",
            "prompt": "Pour le tableau X = 7, 3, 12, 8 et Y = 15, 20, 25, 30, quel est le poids moyen de cette population ?",
            "options": [
              "$22{,}5$",
              "$12$",
              "$25$",
              "$7{,}5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le poids moyen est Ȳ = (15 + 20 + 25 + 30)/4 = 90/4 = 22,5."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p02_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que le nuage de points associé à une série statistique double de caractère $(X, Y)$ ?",
          "options": [
            "L'ensemble des points $(x_i ; y_j)$ d'effectifs non nuls",
            "L'ensemble des points $(x_i ; x_i)$",
            "Le tableau des fréquences marginales",
            "La droite de régression du nuage"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le nuage de points est l'ensemble des points de coordonnées (x_i ; y_j) dont l'effectif est non nul."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p02_q2",
          "type": "mcq",
          "prompt": "Quel est le point moyen du nuage des exploitations agricoles (X = 2, 2, 3, 4, 5, 6, 7, 7,6 ; Y = 14, 26, 31, 29, 44, 40, 54, 50) ?",
          "options": [
            "$G(4{,}575 ; 36)$",
            "$G(36 ; 4{,}575)$",
            "$G(4{,}575 ; 28{,}8)$",
            "$G(5 ; 36)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "X̄ = 36,6/8 = 4,575 et Ȳ = 288/8 = 36 : le point moyen est G(4,575 ; 36)."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p02_q3",
          "type": "mcq",
          "prompt": "On considère la série X = 1, 4, 7, 8, 10 et Y = 2, 7, 8, 10, 13. Quelles sont les coordonnées du point moyen G ?",
          "options": [
            "$G(6 ; 8)$",
            "$G(8 ; 6)$",
            "$G(5 ; 8)$",
            "$G(6 ; 10)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "X̄ = 30/5 = 6 et Ȳ = 40/5 = 8 : le point moyen est G(6 ; 8)."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p02_q4",
          "type": "mcq",
          "prompt": "On donne $\\bar{X} = 4$ et $\\bar{Y} = 6$. Quelles sont les coordonnées du point moyen G ?",
          "options": [
            "$G(4 ; 6)$",
            "$G(6 ; 5)$",
            "$G(6 ; 4)$",
            "$G(4 ; 5{,}5)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le point moyen est G(X̄ ; Ȳ) = G(4 ; 6)."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p02_q5",
          "type": "mcq",
          "prompt": "Pour le tableau X = 7, 3, 12, 8 et Y = 15, 20, 25, 30, quel est l'âge moyen de cette population ?",
          "options": [
            "$7{,}5$",
            "$12$",
            "$25$",
            "$22{,}5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'âge moyen est X̄ = (7 + 3 + 12 + 8)/4 = 30/4 = 7,5."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p02_q6",
          "type": "mcq",
          "prompt": "Pour le tableau X = 7, 3, 12, 8 et Y = 15, 20, 25, 30, quel est le poids moyen de cette population ?",
          "options": [
            "$22{,}5$",
            "$12$",
            "$25$",
            "$7{,}5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le poids moyen est Ȳ = (15 + 20 + 25 + 30)/4 = 90/4 = 22,5."
        }
      ]
    },
    {
      "id": "terminale_c_maths_statistiques_l11_statistiques_p03",
      "order": 3,
      "title": "Covariance et coefficient de corrélation linéaire",
      "summary": "La covariance mesure la liaison entre les deux caractères ; le coefficient de corrélation linéaire r, compris entre -1 et 1, mesure la force de la corrélation linéaire.",
      "conceptExplanation": "On appelle covariance de la série statistique double de caractère $(X, Y)$ le nombre réel $COV(X, Y) = \\frac{1}{n}\\sum n_{ij}(x_i - \\bar{X})(y_j - \\bar{Y}) = \\frac{\\sum n_{ij}x_i y_j}{n} - \\bar{X}\\bar{Y}$.\nOn appelle coefficient de corrélation linéaire le nombre réel $r = \\frac{COV(X, Y)}{\\sqrt{V(X)}\\sqrt{V(Y)}}$, où $V(X)$ et $V(Y)$ sont les variances des séries marginales.\n$r$ est un nombre réel de même signe que $COV(X, Y)$ et on a $-1 \\leq r \\leq 1$.\nSi $|r|$ est proche de $1$, c'est-à-dire en pratique $0{,}87 \\leq r < 1$ ou $-1 < r \\leq -0{,}87$, alors on dit qu'il y a une forte corrélation linéaire entre les deux caractères $X$ et $Y$.",
      "keyRule": "COV(X;Y) = Σx_i·y_i/n − X̄·Ȳ. r = COV/√(V(X)·V(Y)), −1 ≤ r ≤ 1. |r| ≥ 0,87 : forte corrélation.",
      "formulas": [
        {
          "name": "Covariance",
          "formula": "COV(X, Y) = \\frac{\\sum n_{ij}x_i y_j}{n} - \\bar{X}\\bar{Y}",
          "note": "Autre forme : (1/n)Σn_ij(x_i − X̄)(y_j − Ȳ)."
        },
        {
          "name": "Coefficient de corrélation linéaire",
          "formula": "r = \\frac{COV(X, Y)}{\\sqrt{V(X)}\\sqrt{V(Y)}}",
          "note": "Avec −1 ≤ r ≤ 1."
        },
        {
          "name": "Variance d'une série",
          "formula": "V(X) = \\frac{\\sum x_i^2}{n} - \\bar{X}^2",
          "note": "Moyenne des carrés moins le carré de la moyenne."
        }
      ],
      "workedExample": {
        "title": "La covariance et le coefficient $r$ des exploitations agricoles",
        "statement": "Pour la série des exploitations agricoles, on a $\\bar{X} = 4{,}575$, $\\bar{Y} = 36$, $V(X) = 4{,}16$ et $V(Y) = 157{,}25$. Calcule la covariance et le coefficient de corrélation linéaire.",
        "methodSteps": [
          "La somme des produits vaut $\\sum x_i y_i = 2 \\times 14 + 2 \\times 26 + 3 \\times 31 + 4 \\times 29 + 5 \\times 44 + 6 \\times 40 + 7 \\times 54 + 7{,}6 \\times 50 = 1507$.",
          "Donc $COV(X, Y) = \\frac{1507}{8} - 4{,}575 \\times 36 = 188{,}375 - 164{,}7 = 23{,}675$.",
          "Puis $r = \\frac{23{,}675}{\\sqrt{4{,}16} \\times \\sqrt{157{,}25}} \\approx 0{,}92$."
        ],
        "conclusion": "$COV(X, Y) = 23{,}675$ et $r \\approx 0{,}92$ : il y a une forte corrélation entre la superficie et le nombre d'exploitations."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule de la covariance",
          "stepTheme": "La formule de la covariance",
          "stepBadge": "La formule de la covariance",
          "paragraphText": "• La covariance de la série double $(X, Y)$ est $COV(X, Y) = \\frac{1}{n}\\sum n_{ij}(x_i - \\bar{X})(y_j - \\bar{Y})$.\nOn peut aussi la calculer avec $COV(X, Y) = \\frac{\\sum n_{ij}x_i y_j}{n} - \\bar{X}\\bar{Y}$.\nElle mesure comment les deux caractères varient ensemble : positive si $X$ et $Y$ augmentent ensemble, négative sinon.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p03_q1",
            "type": "mcq",
            "prompt": "Quelle est la formule de la covariance $COV(X, Y)$ ?",
            "options": [
              "$COV(X, Y) = \\frac{1}{n}\\sum n_{ij}(x_i - \\bar{X})(y_j - \\bar{Y})$",
              "$COV(X, Y) = \\frac{1}{n}\\sum (x_i - \\bar{X})^2$",
              "$COV(X, Y) = \\sqrt{V(X)V(Y)}$",
              "$COV(X, Y) = V(X) + V(Y)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "COV(X, Y) = (1/n)Σn_ij(x_i − X̄)(y_j − Ȳ), ce qui équivaut à Σn_ij·x_i·y_j/n − X̄·Ȳ."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La covariance des exploitations agricoles : $23{,}675$",
          "stepTheme": "La covariance des exploitations agricoles : $23{,}675$",
          "stepBadge": "La covariance des exploitations agricoles : $23{,}675$",
          "paragraphText": "• Pour la série des exploitations agricoles, $\\sum x_i y_i = 1507$ et $n = 8$, donc $\\frac{\\sum x_i y_i}{n} = \\frac{1507}{8} = 188{,}375$.\nAvec $\\bar{X} = 4{,}575$ et $\\bar{Y} = 36$, on a $\\bar{X}\\bar{Y} = 164{,}7$.\nDonc $COV(X, Y) = 188{,}375 - 164{,}7 = 23{,}675$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p03_q2",
            "type": "mcq",
            "prompt": "Pour la série des exploitations agricoles, $\\sum x_i y_i = 1507$, $n = 8$, $\\bar{X} = 4{,}575$ et $\\bar{Y} = 36$. Que vaut la covariance $COV(X, Y)$ ?",
            "options": [
              "$23{,}675$",
              "$23{,}875$",
              "$164{,}7$",
              "$150{,}3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "COV(X, Y) = 1507/8 − 4,575×36 = 188,375 − 164,7 = 23,675."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La covariance de la série $(1 ; 2), (4 ; 7), (7 ; 8), (8 ; 10), (10 ; 13)$",
          "stepTheme": "La covariance de la série $(1 ; 2), (4 ; 7), (7 ; 8), (8 ; 10), (10 ; 13)$",
          "stepBadge": "La covariance de la série $(1 ; 2), (4 ; 7), (7 ; 8), (8 ; 10), (10 ; 13)$",
          "paragraphText": "• Pour cette série, $\\bar{X} = 6$ et $\\bar{Y} = 8$.\nLa somme des produits vaut $\\sum x_i y_i = 1 \\times 2 + 4 \\times 7 + 7 \\times 8 + 8 \\times 10 + 10 \\times 13 = 296$.\nDonc $COV(X, Y) = \\frac{296}{5} - 6 \\times 8 = 59{,}2 - 48 = 11{,}2$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p03_q3",
            "type": "mcq",
            "prompt": "Pour la série X = 1, 4, 7, 8, 10 et Y = 2, 7, 8, 10, 13, que vaut la covariance $COV(X, Y)$ ?",
            "options": [
              "$11{,}2$",
              "$59{,}2$",
              "$48$",
              "$5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Σx_i·y_i = 296, donc COV(X, Y) = 296/5 − 6×8 = 59,2 − 48 = 11,2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La formule du coefficient de corrélation linéaire",
          "stepTheme": "La formule du coefficient de corrélation linéaire",
          "stepBadge": "La formule du coefficient de corrélation linéaire",
          "paragraphText": "• Le coefficient de corrélation linéaire est $r = \\frac{COV(X, Y)}{\\sqrt{V(X)}\\sqrt{V(Y)}}$.\nIl est du même signe que la covariance et vérifie $-1 \\leq r \\leq 1$.\nIl permet de voir la dépendance linéaire des deux caractères $X$ et $Y$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p03_q4",
            "type": "mcq",
            "prompt": "Quelle est la formule du coefficient de corrélation linéaire $r$ ?",
            "options": [
              "$r = \\frac{COV(X, Y)}{\\sqrt{V(X)}\\sqrt{V(Y)}}$",
              "$r = \\frac{COV(X, Y)}{V(X) + V(Y)}$",
              "$r = \\frac{\\sqrt{V(X)V(Y)}}{COV(X, Y)}$",
              "$r = COV(X, Y) \\times \\sqrt{V(X)V(Y)}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "r = COV(X, Y) / (√V(X)·√V(Y))."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Interpréter $r = 0{,}92$ : une forte corrélation",
          "stepTheme": "Interpréter $r = 0{,}92$ : une forte corrélation",
          "stepBadge": "Interpréter $r = 0{,}92$ : une forte corrélation",
          "paragraphText": "• Pour la série des exploitations agricoles, $r = \\frac{23{,}675}{\\sqrt{4{,}16} \\times \\sqrt{157{,}25}} \\approx 0{,}92$.\nComme $0{,}87 \\leq r < 1$, on dit qu'il y a une forte corrélation linéaire entre les deux caractères.\nIl y a donc une forte corrélation entre la superficie et le nombre d'exploitations agricoles de cette région.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p03_q5",
            "type": "mcq",
            "prompt": "Pour la série des exploitations agricoles, $r \\approx 0{,}92$. Comment interprète-t-on ce coefficient ?",
            "options": [
              "Il y a une forte corrélation linéaire entre les deux caractères",
              "La corrélation linéaire est faible",
              "Il n'y a aucune corrélation entre les deux caractères",
              "La corrélation linéaire est parfaite"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme 0,87 ≤ r < 1, il y a une forte corrélation linéaire entre la superficie et le nombre d'exploitations."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le coefficient $r$ quand $COV = 120$, $V(X) = 109$ et $V(Y) = 225$",
          "stepTheme": "Le coefficient $r$ quand $COV = 120$, $V(X) = 109$ et $V(Y) = 225$",
          "stepBadge": "Le coefficient $r$ quand $COV = 120$, $V(X) = 109$ et $V(Y) = 225$",
          "paragraphText": "• On a $r = \\frac{COV(X, Y)}{\\sqrt{V(X)}\\sqrt{V(Y)}} = \\frac{120}{\\sqrt{109} \\times \\sqrt{225}}$.\nOr $\\sqrt{109} \\times \\sqrt{225} = \\sqrt{109 \\times 225} = \\sqrt{24525} \\approx 156{,}6$.\nDonc $r \\approx \\frac{120}{156{,}6} \\approx 0{,}766$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p03_q6",
            "type": "mcq",
            "prompt": "On donne $COV(X, Y) = 120$, $V(X) = 109$ et $V(Y) = 225$. Que vaut le coefficient de corrélation linéaire $r$ ?",
            "options": [
              "$r \\approx 0{,}766$",
              "$r \\approx 0{,}066$",
              "$r \\approx 0{,}051$",
              "$r \\approx 1{,}305$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "r = 120/√(109×225) = 120/√24525 ≈ 120/156,6 ≈ 0,766."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p03_q1",
          "type": "mcq",
          "prompt": "Quelle est la formule de la covariance $COV(X, Y)$ ?",
          "options": [
            "$COV(X, Y) = \\frac{1}{n}\\sum n_{ij}(x_i - \\bar{X})(y_j - \\bar{Y})$",
            "$COV(X, Y) = \\frac{1}{n}\\sum (x_i - \\bar{X})^2$",
            "$COV(X, Y) = \\sqrt{V(X)V(Y)}$",
            "$COV(X, Y) = V(X) + V(Y)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "COV(X, Y) = (1/n)Σn_ij(x_i − X̄)(y_j − Ȳ), ce qui équivaut à Σn_ij·x_i·y_j/n − X̄·Ȳ."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p03_q2",
          "type": "mcq",
          "prompt": "Pour la série des exploitations agricoles, $\\sum x_i y_i = 1507$, $n = 8$, $\\bar{X} = 4{,}575$ et $\\bar{Y} = 36$. Que vaut la covariance $COV(X, Y)$ ?",
          "options": [
            "$23{,}675$",
            "$23{,}875$",
            "$164{,}7$",
            "$150{,}3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "COV(X, Y) = 1507/8 − 4,575×36 = 188,375 − 164,7 = 23,675."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p03_q3",
          "type": "mcq",
          "prompt": "Pour la série X = 1, 4, 7, 8, 10 et Y = 2, 7, 8, 10, 13, que vaut la covariance $COV(X, Y)$ ?",
          "options": [
            "$11{,}2$",
            "$59{,}2$",
            "$48$",
            "$5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Σx_i·y_i = 296, donc COV(X, Y) = 296/5 − 6×8 = 59,2 − 48 = 11,2."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p03_q4",
          "type": "mcq",
          "prompt": "Quelle est la formule du coefficient de corrélation linéaire $r$ ?",
          "options": [
            "$r = \\frac{COV(X, Y)}{\\sqrt{V(X)}\\sqrt{V(Y)}}$",
            "$r = \\frac{COV(X, Y)}{V(X) + V(Y)}$",
            "$r = \\frac{\\sqrt{V(X)V(Y)}}{COV(X, Y)}$",
            "$r = COV(X, Y) \\times \\sqrt{V(X)V(Y)}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "r = COV(X, Y) / (√V(X)·√V(Y))."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p03_q5",
          "type": "mcq",
          "prompt": "Pour la série des exploitations agricoles, $r \\approx 0{,}92$. Comment interprète-t-on ce coefficient ?",
          "options": [
            "Il y a une forte corrélation linéaire entre les deux caractères",
            "La corrélation linéaire est faible",
            "Il n'y a aucune corrélation entre les deux caractères",
            "La corrélation linéaire est parfaite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme 0,87 ≤ r < 1, il y a une forte corrélation linéaire entre la superficie et le nombre d'exploitations."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p03_q6",
          "type": "mcq",
          "prompt": "On donne $COV(X, Y) = 120$, $V(X) = 109$ et $V(Y) = 225$. Que vaut le coefficient de corrélation linéaire $r$ ?",
          "options": [
            "$r \\approx 0{,}766$",
            "$r \\approx 0{,}066$",
            "$r \\approx 0{,}051$",
            "$r \\approx 1{,}305$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "r = 120/√(109×225) = 120/√24525 ≈ 120/156,6 ≈ 0,766."
        }
      ]
    },
    {
      "id": "terminale_c_maths_statistiques_l11_statistiques_p04",
      "order": 4,
      "title": "Droites de régression par la méthode des moindres carrés",
      "summary": "Les droites de régression de Y en X et de X en Y, leurs coefficients, leurs propriétés et la droite de Mayer.",
      "conceptExplanation": "Quand il y a une forte corrélation entre $X$ et $Y$, la droite $(D)$ d'équation $y = ax + b$ avec $a = \\frac{COV(X, Y)}{V(X)}$ et $b = \\bar{Y} - a\\bar{X}$ est appelée droite de régression de $Y$ en $X$ par la méthode des moindres carrés.\nLa droite $(D')$ d'équation $x = a'y + b'$ avec $a' = \\frac{COV(X, Y)}{V(Y)}$ et $b' = \\bar{X} - a'\\bar{Y}$ est appelée droite de régression de $X$ en $Y$.\nLes droites $(D)$ et $(D')$ passent toutes les deux par le point moyen $G$ du nuage de points.\nSi $r$ est le coefficient de corrélation linéaire, on a $aa' = r^2$ et $|r| = \\sqrt{aa'}$ ; si $a > 0$ et $a' > 0$, alors $r = \\sqrt{aa'}$ ; si $a < 0$ et $a' < 0$, alors $r = -\\sqrt{aa'}$ ; si $r^2 = 1$, alors $a = \\frac{1}{a'}$ et les deux droites sont confondues.\nLa droite de Mayer est la droite qui passe par les points moyens $G_1$ et $G_2$ de deux sous-groupes du nuage (par exemple $G_1(35 ; 124)$ et $G_2(53 ; 141)$ pour la tension artérielle en fonction de l'âge).",
      "keyRule": "(D) Y en X : a = COV/V(X), b = Ȳ − aX̄. (D') X en Y : a' = COV/V(Y), b' = X̄ − a'Ȳ. Les deux passent par G ; aa' = r².",
      "formulas": [
        {
          "name": "Droite de régression de Y en X",
          "formula": "y = ax + b, \\quad a = \\frac{COV(X, Y)}{V(X)}, \\quad b = \\bar{Y} - a\\bar{X}",
          "note": "Méthode des moindres carrés."
        },
        {
          "name": "Droite de régression de X en Y",
          "formula": "x = a'y + b', \\quad a' = \\frac{COV(X, Y)}{V(Y)}, \\quad b' = \\bar{X} - a'\\bar{Y}",
          "note": "Méthode des moindres carrés."
        },
        {
          "name": "Relation entre a, a' et r",
          "formula": "aa' = r^2",
          "note": "Les deux droites passent par G."
        }
      ],
      "workedExample": {
        "title": "Les droites de régression des exploitations agricoles",
        "statement": "Pour la série des exploitations agricoles, on a $COV(X, Y) = 23{,}675$, $V(X) = 4{,}16$, $V(Y) = 157{,}25$, $\\bar{X} = 4{,}575$ et $\\bar{Y} = 36$. Détermine les droites de régression de $Y$ en $X$ et de $X$ en $Y$.",
        "methodSteps": [
          "Pour $(D)$ : $a = \\frac{23{,}675}{4{,}16} = 5{,}69$ et $b = 36 - 5{,}69 \\times 4{,}575 = 9{,}97$, donc $(D) : y = 5{,}69x + 9{,}97$.",
          "Pour $(D')$ : $a' = \\frac{23{,}675}{157{,}25} = 0{,}15$ et $b' = 4{,}575 - 0{,}15 \\times 36 = -0{,}825$, donc $(D') : x = 0{,}15y - 0{,}825$.",
          "On vérifie que les deux droites passent par $G(4{,}575 ; 36)$."
        ],
        "conclusion": "$(D) : y = 5{,}69x + 9{,}97$ et $(D') : x = 0{,}15y - 0{,}825$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les coefficients de la droite de régression de $Y$ en $X$",
          "stepTheme": "Les coefficients de la droite de régression de $Y$ en $X$",
          "stepBadge": "Les coefficients de la droite de régression de $Y$ en $X$",
          "paragraphText": "• La droite de régression de $Y$ en $X$ a pour équation $y = ax + b$ avec $a = \\frac{COV(X, Y)}{V(X)}$ et $b = \\bar{Y} - a\\bar{X}$.\nLe coefficient $a$ est le quotient de la covariance par la variance de $X$ ; l'ordonnée à l'origine $b$ se déduit du point moyen.\nC'est la droite d'ajustement linéaire de $Y$ en $X$ par la méthode des moindres carrés.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p04_q1",
            "type": "mcq",
            "prompt": "Quels sont les coefficients $a$ et $b$ de la droite de régression de $Y$ en $X$ ?",
            "options": [
              "$a = \\frac{COV(X, Y)}{V(X)}$ et $b = \\bar{Y} - a\\bar{X}$",
              "$a = \\frac{COV(X, Y)}{V(Y)}$ et $b = \\bar{X} - a\\bar{Y}$",
              "$a = \\frac{V(X)}{COV(X, Y)}$ et $b = \\bar{Y} + a\\bar{X}$",
              "$a = r$ et $b = \\bar{Y}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour (D) : y = ax + b avec a = COV(X, Y)/V(X) et b = Ȳ − aX̄."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La droite de régression de $Y$ en $X$ des exploitations",
          "stepTheme": "La droite de régression de $Y$ en $X$ des exploitations",
          "stepBadge": "La droite de régression de $Y$ en $X$ des exploitations",
          "paragraphText": "• Pour la série des exploitations agricoles, $COV(X, Y) = 23{,}675$, $V(X) = 4{,}16$, $\\bar{X} = 4{,}575$ et $\\bar{Y} = 36$.\nOn a $a = \\frac{23{,}675}{4{,}16} = 5{,}69$ et $b = 36 - 5{,}69 \\times 4{,}575 = 9{,}97$.\nDonc $(D) : y = 5{,}69x + 9{,}97$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p04_q2",
            "type": "mcq",
            "prompt": "Pour la série des exploitations agricoles, quelle est l'équation de la droite de régression de $Y$ en $X$ ?",
            "options": [
              "$y = 5{,}69x + 9{,}97$",
              "$y = 5{,}69x - 9{,}97$",
              "$y = 0{,}15x - 0{,}825$",
              "$y = 9{,}97x + 5{,}69$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "a = 23,675/4,16 = 5,69 et b = 36 − 5,69×4,575 = 9,97 : (D) : y = 5,69x + 9,97."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La droite de régression de $X$ en $Y$ des exploitations",
          "stepTheme": "La droite de régression de $X$ en $Y$ des exploitations",
          "stepBadge": "La droite de régression de $X$ en $Y$ des exploitations",
          "paragraphText": "• Pour la même série, $a' = \\frac{COV(X, Y)}{V(Y)} = \\frac{23{,}675}{157{,}25} = 0{,}15$ et $b' = \\bar{X} - a'\\bar{Y} = 4{,}575 - 0{,}15 \\times 36 = -0{,}825$.\nDonc $(D') : x = 0{,}15y - 0{,}825$.\nAttention : $(D')$ exprime $x$ en fonction de $y$, et non $y$ en fonction de $x$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p04_q3",
            "type": "mcq",
            "prompt": "Pour la série des exploitations agricoles, quelle est l'équation de la droite de régression de $X$ en $Y$ ?",
            "options": [
              "$x = 0{,}15y - 0{,}825$",
              "$x = 5{,}69y + 9{,}97$",
              "$x = 0{,}15y + 0{,}825$",
              "$y = 0{,}15x - 0{,}825$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "a' = 23,675/157,25 = 0,15 et b' = 4,575 − 0,15×36 = −0,825 : (D') : x = 0,15y − 0,825."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les deux droites de régression passent par $G$",
          "stepTheme": "Les deux droites de régression passent par $G$",
          "stepBadge": "Les deux droites de régression passent par $G$",
          "paragraphText": "• Les droites $(D)$ et $(D')$ passent toutes les deux par le point moyen $G$ du nuage de points.\nC'est une conséquence de leurs équations : $b = \\bar{Y} - a\\bar{X}$ et $b' = \\bar{X} - a'\\bar{Y}$.\nOn peut donc vérifier une équation de droite de régression en testant si elle passe par $G$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p04_q4",
            "type": "mcq",
            "prompt": "Que peut-on dire des droites de régression $(D)$ et $(D')$ par rapport au point moyen $G$ ?",
            "options": [
              "Elles passent toutes les deux par le point moyen $G$",
              "Elles sont parallèles",
              "Elles sont perpendiculaires",
              "Elles ne se coupent pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les droites (D) et (D') passent toutes les deux par le point moyen G du nuage de points."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La relation $aa' = r^2$",
          "stepTheme": "La relation $aa' = r^2$",
          "stepBadge": "La relation $aa' = r^2$",
          "paragraphText": "• Si $r$ est le coefficient de corrélation linéaire, on a $aa' = r^2$ et $|r| = \\sqrt{aa'}$.\nSi $a > 0$ et $a' > 0$, alors $r = \\sqrt{aa'}$ ; si $a < 0$ et $a' < 0$, alors $r = -\\sqrt{aa'}$.\nSi $r^2 = 1$, alors $a = \\frac{1}{a'}$ et les deux droites sont confondues.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p04_q5",
            "type": "mcq",
            "prompt": "Quelle relation lie les coefficients $a$ et $a'$ des deux droites de régression au coefficient de corrélation $r$ ?",
            "options": [
              "$aa' = r^2$",
              "$aa' = r$",
              "$a + a' = r$",
              "$aa' = 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On a aa' = r² et |r| = √aa'."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Quelle droite peut passer par $G(6 ; 9)$ ?",
          "stepTheme": "Quelle droite peut passer par $G(6 ; 9)$ ?",
          "stepBadge": "Quelle droite peut passer par $G(6 ; 9)$ ?",
          "paragraphText": "• Une droite de régression passe par le point moyen $G$ : on peut donc tester les équations proposées en $G(6 ; 9)$.\nPour $y = 2x - 3$ : $2 \\times 6 - 3 = 9$ : la droite passe par $G$.\nPour $y = -3x + 2$, $y = -2x - 3$ et $y = 3x - 2$, on obtient respectivement $-16$, $-15$ et $16$ : elles ne passent pas par $G$.",
          "konanTip": "Dans le livre H5P, l'option « (D): Y = 3X-2 » apparaissait pré-cochée à l'arrivée pour cette question : c'est un état préexistant du site, et cette droite ne passe pas par G(6 ; 9).",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p04_q6",
            "type": "mcq",
            "prompt": "Le point moyen est $G(6 ; 9)$. Laquelle de ces droites peut être une droite de régression de $Y$ en $X$ ?",
            "options": [
              "$y = 2x - 3$",
              "$y = -3x + 2$",
              "$y = -2x - 3$",
              "$y = 3x - 2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une droite de régression passe par G : seule y = 2x − 3 vérifie 2×6 − 3 = 9."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p04_q1",
          "type": "mcq",
          "prompt": "Quels sont les coefficients $a$ et $b$ de la droite de régression de $Y$ en $X$ ?",
          "options": [
            "$a = \\frac{COV(X, Y)}{V(X)}$ et $b = \\bar{Y} - a\\bar{X}$",
            "$a = \\frac{COV(X, Y)}{V(Y)}$ et $b = \\bar{X} - a\\bar{Y}$",
            "$a = \\frac{V(X)}{COV(X, Y)}$ et $b = \\bar{Y} + a\\bar{X}$",
            "$a = r$ et $b = \\bar{Y}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour (D) : y = ax + b avec a = COV(X, Y)/V(X) et b = Ȳ − aX̄."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p04_q2",
          "type": "mcq",
          "prompt": "Pour la série des exploitations agricoles, quelle est l'équation de la droite de régression de $Y$ en $X$ ?",
          "options": [
            "$y = 5{,}69x + 9{,}97$",
            "$y = 5{,}69x - 9{,}97$",
            "$y = 0{,}15x - 0{,}825$",
            "$y = 9{,}97x + 5{,}69$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "a = 23,675/4,16 = 5,69 et b = 36 − 5,69×4,575 = 9,97 : (D) : y = 5,69x + 9,97."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p04_q3",
          "type": "mcq",
          "prompt": "Pour la série des exploitations agricoles, quelle est l'équation de la droite de régression de $X$ en $Y$ ?",
          "options": [
            "$x = 0{,}15y - 0{,}825$",
            "$x = 5{,}69y + 9{,}97$",
            "$x = 0{,}15y + 0{,}825$",
            "$y = 0{,}15x - 0{,}825$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "a' = 23,675/157,25 = 0,15 et b' = 4,575 − 0,15×36 = −0,825 : (D') : x = 0,15y − 0,825."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p04_q4",
          "type": "mcq",
          "prompt": "Que peut-on dire des droites de régression $(D)$ et $(D')$ par rapport au point moyen $G$ ?",
          "options": [
            "Elles passent toutes les deux par le point moyen $G$",
            "Elles sont parallèles",
            "Elles sont perpendiculaires",
            "Elles ne se coupent pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les droites (D) et (D') passent toutes les deux par le point moyen G du nuage de points."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p04_q5",
          "type": "mcq",
          "prompt": "Quelle relation lie les coefficients $a$ et $a'$ des deux droites de régression au coefficient de corrélation $r$ ?",
          "options": [
            "$aa' = r^2$",
            "$aa' = r$",
            "$a + a' = r$",
            "$aa' = 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On a aa' = r² et |r| = √aa'."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p04_q6",
          "type": "mcq",
          "prompt": "Le point moyen est $G(6 ; 9)$. Laquelle de ces droites peut être une droite de régression de $Y$ en $X$ ?",
          "options": [
            "$y = 2x - 3$",
            "$y = -3x + 2$",
            "$y = -2x - 3$",
            "$y = 3x - 2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une droite de régression passe par G : seule y = 2x − 3 vérifie 2×6 − 3 = 9."
        }
      ]
    },
    {
      "id": "terminale_c_maths_statistiques_l11_statistiques_p05",
      "order": 5,
      "title": "Estimation et situation complexe du club littéraire",
      "summary": "Utiliser la droite de régression pour estimer une valeur, et la situation complexe du club littéraire : prévoir quand le nombre d'adhérents dépassera 3000.",
      "conceptExplanation": "La droite d'ajustement permet une estimation de $y$ connaissant $x$ (ou de $x$ connaissant $y$) : on remplace la valeur connue dans l'équation de la droite.\nGraphiquement, on lit l'estimation sur la droite tracée ; par le calcul, on utilise l'équation de la droite de régression.\nSituation complexe : le club littéraire comptait ses adhérents chaque mois en 2020 (rang $x_i$ de $1$ à $12$, effectifs $y_i$). Une ONG promet une aide si le nombre d'adhérents dépasse $3000$ : on détermine la droite de régression de $Y$ en $X$, puis le rang $x$ pour lequel $y = 3000$.",
      "keyRule": "Estimation : on remplace x (ou y) dans l'équation de la droite de régression. Club : (D) y = 86,046x + 1014,868 ; y = 3000 au rang ≈ 24.",
      "formulas": [
        {
          "name": "Estimation par la droite de régression",
          "formula": "y_{est} = ax + b",
          "note": "Avec (D) : y = ax + b, droite de Y en X."
        },
        {
          "name": "Droite de régression du club littéraire",
          "formula": "y = 86{,}046x + 1014{,}868",
          "note": "x = rang du mois, y = nombre d'adhérents."
        }
      ],
      "workedExample": {
        "title": "Le club littéraire : quand dépassera-t-on 3000 adhérents ?",
        "statement": "Le nombre d'adhérents du club littéraire en 2020 suit la droite de régression $(D) : y = 86{,}046x + 1014{,}868$, où $x$ est le rang du mois. Détermine la date probable à laquelle le nombre d'adhérents dépassera 3000.",
        "methodSteps": [
          "On résout $y = 3000$ : $x = \\frac{3000 - 1014{,}868}{86{,}046} = \\frac{1985{,}132}{86{,}046} \\approx 23{,}07$.",
          "Le rang cherché est sensiblement égal à $24$.",
          "Le rang $1$ est janvier 2020 : le rang $24$ est décembre 2021."
        ],
        "conclusion": "La date probable de la réception du don est décembre 2021."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Estimer le nombre d'exploitations pour 9 ha",
          "stepTheme": "Estimer le nombre d'exploitations pour 9 ha",
          "stepBadge": "Estimer le nombre d'exploitations pour 9 ha",
          "paragraphText": "• Pour la série des exploitations agricoles, la droite de régression de $Y$ en $X$ est $y = 5{,}69x + 9{,}97$.\nUne superficie de $9$ ha correspond à $x = 9$ : $y = 5{,}69 \\times 9 + 9{,}97 = 51{,}21 + 9{,}97 = 61{,}18$.\nDonc pour une superficie de $9$ ha, le nombre d'exploitations agricoles est estimé à environ $61$.",
          "konanTip": "Le PDF écrit « 5,69 x 9 + 9,97 = 61,8 » puis « 62 » : le calcul exact donne 5,69 x 9 + 9,97 = 61,18, soit environ 61 exploitations.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p05_q1",
            "type": "mcq",
            "prompt": "Avec la droite $y = 5{,}69x + 9{,}97$, combien d'exploitations agricoles estime-t-on pour une superficie de $9$ ha ?",
            "options": [
              "Environ $61$ exploitations",
              "Environ $62$ exploitations",
              "Environ $52$ exploitations",
              "Environ $70$ exploitations"
            ],
            "correctAnswerIndex": 0,
            "explanation": "y = 5,69×9 + 9,97 = 61,18 : le nombre d'exploitations est estimé à environ 61."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La droite de régression du club littéraire",
          "stepTheme": "La droite de régression du club littéraire",
          "stepBadge": "La droite de régression du club littéraire",
          "paragraphText": "• Pour le club littéraire, le point moyen est $G(6{,}5 ; 1574{,}167)$, $V(X) = 11{,}917$ et $COV(X, Y) = 1025{,}4145$.\nOn a $a = \\frac{1025{,}4145}{11{,}917} = 86{,}046$ et $b = 1574{,}167 - 86{,}046 \\times 6{,}5 = 1014{,}868$.\nDonc $(D) : y = 86{,}046x + 1014{,}868$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p05_q2",
            "type": "mcq",
            "prompt": "Pour le club littéraire, quelle est l'équation de la droite de régression de $Y$ en $X$ ?",
            "options": [
              "$y = 86{,}046x + 1014{,}868$",
              "$y = 86{,}046x - 1014{,}868$",
              "$y = 1014{,}868x + 86{,}046$",
              "$y = 86{,}046x + 1574{,}167$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "a = 1025,4145/11,917 = 86,046 et b = 1574,167 − 86,046×6,5 = 1014,868 : (D) : y = 86,046x + 1014,868."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le rang du mois où $y = 3000$",
          "stepTheme": "Le rang du mois où $y = 3000$",
          "stepBadge": "Le rang du mois où $y = 3000$",
          "paragraphText": "• On cherche le rang $x$ pour lequel le nombre d'adhérents atteint $3000$ : $86{,}046x + 1014{,}868 = 3000$.\nOn obtient $x = \\frac{3000 - 1014{,}868}{86{,}046} = \\frac{1985{,}132}{86{,}046} \\approx 23{,}07$.\nLe rang cherché est sensiblement égal à $24$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p05_q3",
            "type": "mcq",
            "prompt": "Avec $(D) : y = 86{,}046x + 1014{,}868$, quel est le rang du mois où le nombre d'adhérents atteint $3000$ ?",
            "options": [
              "Environ $24$",
              "Environ $23$",
              "Environ $25$",
              "Environ $12$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "x = (3000 − 1014,868)/86,046 ≈ 23,07 : le rang cherché est sensiblement égal à 24."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La date probable de la réception du don",
          "stepTheme": "La date probable de la réception du don",
          "stepBadge": "La date probable de la réception du don",
          "paragraphText": "• Le rang $1$ correspond à janvier 2020 : les rangs $1$ à $12$ sont les mois de 2020.\nLe rang $13$ est janvier 2021 et le rang $24$ est décembre 2021.\nLa date probable de la réception du don est donc décembre 2021.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p05_q4",
            "type": "mcq",
            "prompt": "Le rang $1$ est janvier 2020 et le nombre d'adhérents dépasse $3000$ au rang $24$. Quelle est la date probable de la réception du don ?",
            "options": [
              "Décembre 2021",
              "Décembre 2020",
              "Janvier 2022",
              "Juin 2021"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le rang 13 est janvier 2021 : le rang 24 est décembre 2021."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La droite de régression de la tension artérielle : $y = -18{,}84x + 135{,}36$",
          "stepTheme": "La droite de régression de la tension artérielle : $y = -18{,}84x + 135{,}36$",
          "stepBadge": "La droite de régression de la tension artérielle : $y = -18{,}84x + 135{,}36$",
          "paragraphText": "• Pour la série tension artérielle (X de $0$ à $8$, Y de $160$ à $3$), on a $\\bar{X} = 4$, $\\bar{Y} = 60$, $COV(X, Y) = -125{,}67$, $V(X) = 6{,}67$ et $V(Y) = 2570$.\nLa droite de régression de $Y$ en $X$ a pour coefficient $a = \\frac{-125{,}67}{6{,}67} = -18{,}84$ et $b = 60 + 18{,}84 \\times 4 = 135{,}36$.\nDonc $(D) : y = -18{,}84x + 135{,}36$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p05_q5",
            "type": "mcq",
            "prompt": "Pour la série de la tension artérielle, quelle est l'équation de la droite de régression de $Y$ en $X$ ?",
            "options": [
              "$y = -18{,}84x + 135{,}36$",
              "$y = 18{,}84x + 135{,}36$",
              "$y = -18{,}84x - 135{,}36$",
              "$x = -18{,}84y + 135{,}36$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "a = −125,67/6,67 = −18,84 et b = 60 + 18,84×4 = 135,36 : (D) : y = −18,84x + 135,36."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La droite de régression de $X$ en $Y$ de la tension artérielle",
          "stepTheme": "La droite de régression de $X$ en $Y$ de la tension artérielle",
          "stepBadge": "La droite de régression de $X$ en $Y$ de la tension artérielle",
          "paragraphText": "• Pour la même série, $a' = \\frac{COV(X, Y)}{V(Y)} = \\frac{-125{,}67}{2570} = -0{,}049$ et $b' = \\bar{X} - a'\\bar{Y} = 4 + 0{,}049 \\times 60 = 6{,}94$.\nDonc $(D') : x = -0{,}049y + 6{,}94$.\nLe coefficient de corrélation est $r = \\frac{-125{,}67}{\\sqrt{6{,}67} \\times \\sqrt{2570}} \\approx -0{,}96$ : comme $-1 < r \\leq -0{,}87$, il y a une forte corrélation linéaire.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p05_q6",
            "type": "mcq",
            "prompt": "Pour la série de la tension artérielle, quelle est l'équation de la droite de régression de $X$ en $Y$ ?",
            "options": [
              "$x = -0{,}049y + 6{,}94$",
              "$x = 0{,}049y + 6{,}94$",
              "$x = -0{,}049y - 6{,}94$",
              "$y = -0{,}049x + 6{,}94$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "a' = −125,67/2570 = −0,049 et b' = 4 + 0,049×60 = 6,94 : (D') : x = −0,049y + 6,94."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p05_q1",
          "type": "mcq",
          "prompt": "Avec la droite $y = 5{,}69x + 9{,}97$, combien d'exploitations agricoles estime-t-on pour une superficie de $9$ ha ?",
          "options": [
            "Environ $61$ exploitations",
            "Environ $62$ exploitations",
            "Environ $52$ exploitations",
            "Environ $70$ exploitations"
          ],
          "correctAnswerIndex": 0,
          "explanation": "y = 5,69×9 + 9,97 = 61,18 : le nombre d'exploitations est estimé à environ 61."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p05_q2",
          "type": "mcq",
          "prompt": "Pour le club littéraire, quelle est l'équation de la droite de régression de $Y$ en $X$ ?",
          "options": [
            "$y = 86{,}046x + 1014{,}868$",
            "$y = 86{,}046x - 1014{,}868$",
            "$y = 1014{,}868x + 86{,}046$",
            "$y = 86{,}046x + 1574{,}167$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "a = 1025,4145/11,917 = 86,046 et b = 1574,167 − 86,046×6,5 = 1014,868 : (D) : y = 86,046x + 1014,868."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p05_q3",
          "type": "mcq",
          "prompt": "Avec $(D) : y = 86{,}046x + 1014{,}868$, quel est le rang du mois où le nombre d'adhérents atteint $3000$ ?",
          "options": [
            "Environ $24$",
            "Environ $23$",
            "Environ $25$",
            "Environ $12$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "x = (3000 − 1014,868)/86,046 ≈ 23,07 : le rang cherché est sensiblement égal à 24."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p05_q4",
          "type": "mcq",
          "prompt": "Le rang $1$ est janvier 2020 et le nombre d'adhérents dépasse $3000$ au rang $24$. Quelle est la date probable de la réception du don ?",
          "options": [
            "Décembre 2021",
            "Décembre 2020",
            "Janvier 2022",
            "Juin 2021"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rang 13 est janvier 2021 : le rang 24 est décembre 2021."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p05_q5",
          "type": "mcq",
          "prompt": "Pour la série de la tension artérielle, quelle est l'équation de la droite de régression de $Y$ en $X$ ?",
          "options": [
            "$y = -18{,}84x + 135{,}36$",
            "$y = 18{,}84x + 135{,}36$",
            "$y = -18{,}84x - 135{,}36$",
            "$x = -18{,}84y + 135{,}36$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "a = −125,67/6,67 = −18,84 et b = 60 + 18,84×4 = 135,36 : (D) : y = −18,84x + 135,36."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p05_q6",
          "type": "mcq",
          "prompt": "Pour la série de la tension artérielle, quelle est l'équation de la droite de régression de $X$ en $Y$ ?",
          "options": [
            "$x = -0{,}049y + 6{,}94$",
            "$x = 0{,}049y + 6{,}94$",
            "$x = -0{,}049y - 6{,}94$",
            "$y = -0{,}049x + 6{,}94$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "a' = −125,67/2570 = −0,049 et b' = 4 + 0,049×60 = 6,94 : (D') : x = −0,049y + 6,94."
        }
      ]
    },
    {
      "id": "terminale_c_maths_statistiques_l11_statistiques_p06",
      "order": 6,
      "title": "Variances et approfondissement : les exploitations d'hévéa",
      "summary": "La formule de la variance, les variances d'une série double et l'étude complète des exploitations d'hévéa : point moyen, variances, covariance, corrélation et droite d'ajustement.",
      "conceptExplanation": "La variance d'une série de caractère $X$ se calcule par $V(X) = \\frac{\\sum x_i^2}{n} - \\bar{X}^2$ (moyenne des carrés moins le carré de la moyenne).\nDe même, $V(Y) = \\frac{\\sum y_i^2}{n} - \\bar{Y}^2$.\nApprofondissement (hévéa) : huit exploitations, $X$ = nombre de travailleurs (2, 4, 4, 5, 7, 7, 8, 8) et $Y$ = superficie exploitée en ha (3, 5, 6, 7, 10, 11, 8, 12). Le point moyen est $G(5{,}63 ; 7{,}75)$, $V(X) = 4{,}18$, $V(Y) = 8{,}44$, $COV(X, Y) = 5{,}37$, $r \\approx 0{,}90$ et la droite d'ajustement est $y = 1{,}28x + 0{,}54$.",
      "keyRule": "V(X) = Σx_i²/n − X̄². Hévéa : G(5,63 ; 7,75), V(X)=4,18, V(Y)=8,44, COV=5,37, r≈0,90, (D) y=1,28x+0,54.",
      "formulas": [
        {
          "name": "Variance de X",
          "formula": "V(X) = \\frac{\\sum x_i^2}{n} - \\bar{X}^2",
          "note": "Moyenne des carrés moins le carré de la moyenne."
        },
        {
          "name": "Variance de Y",
          "formula": "V(Y) = \\frac{\\sum y_i^2}{n} - \\bar{Y}^2",
          "note": "Moyenne des carrés moins le carré de la moyenne."
        }
      ],
      "workedExample": {
        "title": "Les variances et la covariance des exploitations d'hévéa",
        "statement": "Pour les huit exploitations d'hévéa, X = 2, 4, 4, 5, 7, 7, 8, 8 et Y = 3, 5, 6, 7, 10, 11, 8, 12. Justifie que $V(X) = 4{,}18$, $V(Y) = 8{,}44$ et $COV(X, Y) = 5{,}37$.",
        "methodSteps": [
          "On a $\\bar{X} = 5{,}63$ et $\\bar{Y} = 7{,}75$.",
          "$V(X) = \\frac{2^2 + 4^2 + 4^2 + 5^2 + 7^2 + 7^2 + 8^2 + 8^2}{8} - 5{,}63^2 = 35{,}875 - 31{,}6969 \\approx 4{,}18$.",
          "$V(Y) = \\frac{3^2 + 5^2 + 6^2 + 7^2 + 10^2 + 11^2 + 8^2 + 12^2}{8} - 7{,}75^2 = 68{,}5 - 60{,}0625 \\approx 8{,}44$.",
          "$COV(X, Y) = \\frac{2 \\times 3 + 4 \\times 5 + 4 \\times 6 + 5 \\times 7 + 7 \\times 10 + 7 \\times 11 + 8 \\times 8 + 8 \\times 12}{8} - 5{,}63 \\times 7{,}75 = 49 - 43{,}6325 \\approx 5{,}37$."
        ],
        "conclusion": "$V(X) = 4{,}18$, $V(Y) = 8{,}44$ et $COV(X, Y) = 5{,}37$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule de la variance",
          "stepTheme": "La formule de la variance",
          "stepBadge": "La formule de la variance",
          "paragraphText": "• La variance de la série de caractère $X$ est $V(X) = \\frac{\\sum x_i^2}{n} - \\bar{X}^2$.\nC'est la moyenne des carrés des valeurs moins le carré de la moyenne.\nDe même, $V(Y) = \\frac{\\sum y_i^2}{n} - \\bar{Y}^2$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p06_q1",
            "type": "mcq",
            "prompt": "Quelle est la formule de la variance $V(X)$ d'une série de $n$ valeurs $x_i$ de moyenne $\\bar{X}$ ?",
            "options": [
              "$V(X) = \\frac{\\sum x_i^2}{n} - \\bar{X}^2$",
              "$V(X) = \\frac{\\sum x_i}{n} - \\bar{X}$",
              "$V(X) = \\sqrt{\\frac{\\sum x_i^2}{n}}$",
              "$V(X) = \\bar{X}^2 - \\frac{\\sum x_i^2}{n}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "V(X) = (Σx_i²/n) − X̄² : moyenne des carrés moins le carré de la moyenne."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La variance de $X$ : $10{,}25$",
          "stepTheme": "La variance de $X$ : $10{,}25$",
          "stepBadge": "La variance de $X$ : $10{,}25$",
          "paragraphText": "• Pour le tableau X = 7, 3, 12, 8 et Y = 15, 20, 25, 30, on a $\\bar{X} = 7{,}5$.\n$V(X) = \\frac{7^2 + 3^2 + 12^2 + 8^2}{4} - 7{,}5^2 = \\frac{266}{4} - 56{,}25 = 66{,}5 - 56{,}25 = 10{,}25$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p06_q2",
            "type": "mcq",
            "prompt": "Pour le tableau X = 7, 3, 12, 8 et Y = 15, 20, 25, 30, que vaut la variance de $X$ ?",
            "options": [
              "$10{,}25$",
              "$22{,}5$",
              "$25$",
              "$31{,}25$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "X̄ = 7,5 ; V(X) = (49 + 9 + 144 + 64)/4 − 7,5² = 66,5 − 56,25 = 10,25."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La variance de $Y$ : $31{,}25$",
          "stepTheme": "La variance de $Y$ : $31{,}25$",
          "stepBadge": "La variance de $Y$ : $31{,}25$",
          "paragraphText": "• Pour le même tableau, $\\bar{Y} = 22{,}5$.\n$V(Y) = \\frac{15^2 + 20^2 + 25^2 + 30^2}{4} - 22{,}5^2 = \\frac{2150}{4} - 506{,}25 = 537{,}5 - 506{,}25 = 31{,}25$.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p06_q3",
            "type": "mcq",
            "prompt": "Pour le tableau X = 7, 3, 12, 8 et Y = 15, 20, 25, 30, que vaut la variance de $Y$ ?",
            "options": [
              "$31{,}25$",
              "$22{,}5$",
              "$25$",
              "$10{,}25$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ȳ = 22,5 ; V(Y) = (225 + 400 + 625 + 900)/4 − 22,5² = 537,5 − 506,25 = 31,25."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La covariance des exploitations d'hévéa : $5{,}37$",
          "stepTheme": "La covariance des exploitations d'hévéa : $5{,}37$",
          "stepBadge": "La covariance des exploitations d'hévéa : $5{,}37$",
          "paragraphText": "• Pour les huit exploitations d'hévéa, $\\sum x_i y_i = 2 \\times 3 + 4 \\times 5 + 4 \\times 6 + 5 \\times 7 + 7 \\times 10 + 7 \\times 11 + 8 \\times 8 + 8 \\times 12 = 392$.\nAvec $\\bar{X} = 5{,}63$ et $\\bar{Y} = 7{,}75$, on a $COV(X, Y) = \\frac{392}{8} - 5{,}63 \\times 7{,}75 = 49 - 43{,}6325 = 5{,}3675$.\nDonc $COV(X, Y) \\approx 5{,}37$.",
          "konanTip": "La covariance de l'approfondissement vaut 5,37 (le document de contenu indiquait 5,57 par erreur de transcription).",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p06_q4",
            "type": "mcq",
            "prompt": "Pour les exploitations d'hévéa, que vaut la covariance $COV(X, Y)$ ?",
            "options": [
              "$5{,}37$",
              "$5{,}57$",
              "$4{,}18$",
              "$8{,}44$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Σx_i·y_i = 392, donc COV(X, Y) = 392/8 − 5,63×7,75 = 49 − 43,6325 ≈ 5,37."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le coefficient de corrélation des exploitations d'hévéa : $r \\approx 0{,}90$",
          "stepTheme": "Le coefficient de corrélation des exploitations d'hévéa : $r \\approx 0{,}90$",
          "stepBadge": "Le coefficient de corrélation des exploitations d'hévéa : $r \\approx 0{,}90$",
          "paragraphText": "• Pour les exploitations d'hévéa, $COV(X, Y) = 5{,}37$, $V(X) = 4{,}18$ et $V(Y) = 8{,}44$.\nDonc $r = \\frac{5{,}37}{\\sqrt{4{,}18} \\times \\sqrt{8{,}44}} = \\frac{5{,}37}{\\sqrt{35{,}2792}} \\approx 0{,}904$, soit $r \\approx 0{,}90$.\nComme $0{,}87 \\leq r < 1$, il y a une forte corrélation entre le nombre de travailleurs et la superficie exploitée.",
          "konanTip": "Le PDF écrit « r = 0,939 soit r = 0,90 » : le calcul donne r ≈ 0,904, soit 0,90.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p06_q5",
            "type": "mcq",
            "prompt": "Pour les exploitations d'hévéa, $COV(X, Y) = 5{,}37$, $V(X) = 4{,}18$ et $V(Y) = 8{,}44$. Que vaut $r$ et comment l'interprète-t-on ?",
            "options": [
              "$r \\approx 0{,}90$ : forte corrélation linéaire",
              "$r \\approx 0{,}939$ : forte corrélation linéaire",
              "$r \\approx 0{,}50$ : corrélation faible",
              "$r \\approx 1$ : corrélation parfaite"
            ],
            "correctAnswerIndex": 0,
            "explanation": "r = 5,37/√(4,18×8,44) ≈ 0,904, soit r ≈ 0,90 ; comme 0,87 ≤ r < 1, il y a une forte corrélation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La droite d'ajustement des exploitations d'hévéa : $y = 1{,}28x + 0{,}54$",
          "stepTheme": "La droite d'ajustement des exploitations d'hévéa : $y = 1{,}28x + 0{,}54$",
          "stepBadge": "La droite d'ajustement des exploitations d'hévéa : $y = 1{,}28x + 0{,}54$",
          "paragraphText": "• Pour les exploitations d'hévéa, $a = \\frac{COV(X, Y)}{V(X)} = \\frac{5{,}37}{4{,}18} = 1{,}28$ et $b = \\bar{Y} - a\\bar{X} = 7{,}75 - 1{,}28 \\times 5{,}63 = 0{,}54$.\nDonc la droite d'ajustement de $Y$ en $X$ est $(D) : y = 1{,}28x + 0{,}54$.",
          "konanTip": "La question 5a demande de justifier « y = 1,33x + 0,54 » alors que la solution donne « y = 1,28x + 0,54 ». L'estimation de la question 6 n'est pas convertie en QCM : l'ajustement à utiliser pour estimer X à partir de Y est ambigu dans le PDF.",
          "exercise": {
            "id": "terminale_c_maths_statistiques_l11_statistiques_p06_q6",
            "type": "mcq",
            "prompt": "Pour les exploitations d'hévéa, quelle est l'équation de la droite d'ajustement de $Y$ en $X$ ?",
            "options": [
              "$y = 1{,}28x + 0{,}54$",
              "$y = 1{,}33x + 0{,}54$",
              "$y = 1{,}28x - 0{,}54$",
              "$x = 1{,}28y + 0{,}54$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "a = 5,37/4,18 = 1,28 et b = 7,75 − 1,28×5,63 = 0,54 : (D) : y = 1,28x + 0,54."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p06_q1",
          "type": "mcq",
          "prompt": "Quelle est la formule de la variance $V(X)$ d'une série de $n$ valeurs $x_i$ de moyenne $\\bar{X}$ ?",
          "options": [
            "$V(X) = \\frac{\\sum x_i^2}{n} - \\bar{X}^2$",
            "$V(X) = \\frac{\\sum x_i}{n} - \\bar{X}$",
            "$V(X) = \\sqrt{\\frac{\\sum x_i^2}{n}}$",
            "$V(X) = \\bar{X}^2 - \\frac{\\sum x_i^2}{n}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "V(X) = (Σx_i²/n) − X̄² : moyenne des carrés moins le carré de la moyenne."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p06_q2",
          "type": "mcq",
          "prompt": "Pour le tableau X = 7, 3, 12, 8 et Y = 15, 20, 25, 30, que vaut la variance de $X$ ?",
          "options": [
            "$10{,}25$",
            "$22{,}5$",
            "$25$",
            "$31{,}25$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "X̄ = 7,5 ; V(X) = (49 + 9 + 144 + 64)/4 − 7,5² = 66,5 − 56,25 = 10,25."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p06_q3",
          "type": "mcq",
          "prompt": "Pour le tableau X = 7, 3, 12, 8 et Y = 15, 20, 25, 30, que vaut la variance de $Y$ ?",
          "options": [
            "$31{,}25$",
            "$22{,}5$",
            "$25$",
            "$10{,}25$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ȳ = 22,5 ; V(Y) = (225 + 400 + 625 + 900)/4 − 22,5² = 537,5 − 506,25 = 31,25."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p06_q4",
          "type": "mcq",
          "prompt": "Pour les exploitations d'hévéa, que vaut la covariance $COV(X, Y)$ ?",
          "options": [
            "$5{,}37$",
            "$5{,}57$",
            "$4{,}18$",
            "$8{,}44$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Σx_i·y_i = 392, donc COV(X, Y) = 392/8 − 5,63×7,75 = 49 − 43,6325 ≈ 5,37."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p06_q5",
          "type": "mcq",
          "prompt": "Pour les exploitations d'hévéa, $COV(X, Y) = 5{,}37$, $V(X) = 4{,}18$ et $V(Y) = 8{,}44$. Que vaut $r$ et comment l'interprète-t-on ?",
          "options": [
            "$r \\approx 0{,}90$ : forte corrélation linéaire",
            "$r \\approx 0{,}939$ : forte corrélation linéaire",
            "$r \\approx 0{,}50$ : corrélation faible",
            "$r \\approx 1$ : corrélation parfaite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "r = 5,37/√(4,18×8,44) ≈ 0,904, soit r ≈ 0,90 ; comme 0,87 ≤ r < 1, il y a une forte corrélation."
        },
        {
          "id": "terminale_c_maths_statistiques_l11_statistiques_p06_q6",
          "type": "mcq",
          "prompt": "Pour les exploitations d'hévéa, quelle est l'équation de la droite d'ajustement de $Y$ en $X$ ?",
          "options": [
            "$y = 1{,}28x + 0{,}54$",
            "$y = 1{,}33x + 0{,}54$",
            "$y = 1{,}28x - 0{,}54$",
            "$x = 1{,}28y + 0{,}54$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "a = 5,37/4,18 = 1,28 et b = 7,75 − 1,28×5,63 = 0,54 : (D) : y = 1,28x + 0,54."
        }
      ]
    }
  ]
};
