import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Statistiques » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Statistiques » (document PDF officiel, Mathématiques 1ère D, lot P07)
export const MATHS_1ERE_D_L15_STATISTIQUES: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l15_statistiques",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 15,
  "title": "Leçon 15 : Statistiques",
  "summary": "La leçon traite les séries statistiques regroupées en classes : amplitude, centre et densité, classe modale, moyenne, médiane et quartiles par interpolation linéaire, représentations graphiques, puis les caractéristiques de dispersion (variance, écart type, écart absolu moyen et écart interquartile).",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Statistiques » (document PDF officiel, Mathématiques 1ère D, lot P07)",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p01",
      "order": 1,
      "title": "Séries regroupées en classes : amplitude, centre et densité",
      "summary": "Lire un tableau en classes et calculer l’amplitude, le centre et la densité de chaque classe.",
      "conceptExplanation": "Lorsqu’une série statistique est regroupée en classes, on considère les classes $[x_i ; x_{i+1}[$, leurs effectifs $n_i$ et l’effectif total $N$.\nL’amplitude de la classe $[x_i ; x_{i+1}[$ est $x_{i+1} - x_i$ et son centre est $c_i$, moyenne des deux bornes.\nOn appelle densité d’une classe le quotient de l’effectif de la classe par l’amplitude de cette classe.\nExemple des coopératives de cacao : pour les classes $[0 ; 30[$, $[30 ; 45[$, $[45 ; 70[$, $[70 ; 80[$, $[80 ; 100[$ d’effectifs $13$, $20$, $25$, $15$, $17$, les amplitudes sont $30$, $15$, $25$, $10$, $20$ et les densités $0{,}43$, $1{,}33$, $1$, $1{,}5$, $0{,}85$.",
      "keyRule": "Amplitude : différence des bornes ; centre : milieu des bornes ; densité : effectif divisé par amplitude.",
      "formulas": [
        {
          "name": "Amplitude d’une classe",
          "formula": "a_i = x_{i+1} - x_i"
        },
        {
          "name": "Centre d’une classe",
          "formula": "c_i = \\frac{x_i + x_{i+1}}{2}"
        },
        {
          "name": "Densité d’une classe",
          "formula": "d_i = \\frac{n_i}{a_i}",
          "note": "Quotient de l’effectif par l’amplitude."
        }
      ],
      "workedExample": {
        "title": "Amplitudes et densités des coopératives de cacao (exemple de la leçon)",
        "statement": "La production de coopératives de cacao est regroupée en classes $[0 ; 30[$, $[30 ; 45[$, $[45 ; 70[$, $[70 ; 80[$, $[80 ; 100[$, d’effectifs respectifs $13$, $20$, $25$, $15$, $17$. Détermine l’amplitude et la densité de chaque classe.",
        "methodSteps": [
          "Les amplitudes sont $30$, $15$, $25$, $10$ et $20$.",
          "La densité de $[0 ; 30[$ vaut $0{,}43$, celle de $[30 ; 45[$ vaut $1{,}33$, celle de $[45 ; 70[$ vaut $1$.",
          "La densité de $[70 ; 80[$ vaut $1{,}5$ et celle de $[80 ; 100[$ vaut $0{,}85$."
        ],
        "conclusion": "La classe la plus concentrée est $[70 ; 80[$, avec la densité $1{,}5$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le tableau d’une série regroupée en classes",
          "stepTheme": "Le tableau d’une série regroupée en classes",
          "stepBadge": "Le tableau d’une série regroupée en classes",
          "paragraphText": "• Série regroupée en classes : les valeurs du caractère $X$ sont rangées dans des classes $[x_i ; x_{i+1}[$, chacune avec son effectif $n_i$, et l’effectif total est noté $N$.\nChaque classe a aussi un centre $c_i$, utilisé pour les calculs de moyenne et de dispersion.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q1",
            "type": "mcq",
            "prompt": "Dans un tableau de série regroupée en classes, $N$ désigne :",
            "options": [
              "Le nombre de classes",
              "L’effectif total",
              "Le centre de la première classe",
              "L’amplitude totale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$N$ est la somme de tous les effectifs $n_i$ : c’est l’effectif total de la série."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’amplitude d’une classe",
          "stepTheme": "L’amplitude d’une classe",
          "stepBadge": "L’amplitude d’une classe",
          "paragraphText": "• Amplitude : l’amplitude de la classe $[x_i ; x_{i+1}[$ est $x_{i+1} - x_i$.\nDans l’exemple des coopératives de cacao, la classe $[45 ; 70[$ a pour amplitude $25$, et la classe $[70 ; 80[$ a pour amplitude $10$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q2",
            "type": "mcq",
            "prompt": "L’amplitude de la classe $[45 ; 70[$ est :",
            "options": [
              "$115$",
              "$45$",
              "$25$",
              "$70$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $70 - 45 = 25$ : l’amplitude est la différence des deux bornes de la classe."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le centre d’une classe",
          "stepTheme": "Le centre d’une classe",
          "stepBadge": "Le centre d’une classe",
          "paragraphText": "• Centre : le centre de la classe $[x_i ; x_{i+1}[$ est la moyenne de ses deux bornes.\nDans l’exemple du cacao, le centre de $[30 ; 45[$ est $37{,}5$ et celui de $[80 ; 100[$ est $90$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q3",
            "type": "mcq",
            "prompt": "Le centre de la classe $[30 ; 45[$ est :",
            "options": [
              "$45$",
              "$30$",
              "$15$",
              "$37{,}5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le centre est la demi-somme des bornes : on obtient $37{,}5$, comme dans le tableau de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La densité d’une classe",
          "stepTheme": "La densité d’une classe",
          "stepBadge": "La densité d’une classe",
          "paragraphText": "• Densité : on appelle densité d’une classe le quotient de l’effectif de la classe par l’amplitude de cette classe.\nElle mesure la concentration des individus dans la classe, ce qui est indispensable quand les amplitudes sont différentes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q4",
            "type": "mcq",
            "prompt": "La densité d’une classe est le quotient de :",
            "options": [
              "L’effectif de la classe par son amplitude",
              "L’amplitude par l’effectif",
              "L’effectif total par le nombre de classes",
              "Le centre par l’effectif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition de la leçon : densité égale effectif divisé par amplitude."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les densités des coopératives de cacao",
          "stepTheme": "Les densités des coopératives de cacao",
          "stepBadge": "Les densités des coopératives de cacao",
          "paragraphText": "Pour la série des coopératives de cacao (classes $[0 ; 30[$, $[30 ; 45[$, $[45 ; 70[$, $[70 ; 80[$, $[80 ; 100[$ et effectifs $13$, $20$, $25$, $15$, $17$), les densités sont $0{,}43$, $1{,}33$, $1$, $1{,}5$ et $0{,}85$.\nPar exemple, la densité de la classe $[0 ; 30[$ est obtenue à partir de l’effectif $13$ et de l’amplitude $30$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q5",
            "type": "mcq",
            "prompt": "La densité de la classe $[70 ; 80[$ des coopératives (effectif $15$, amplitude $10$) est :",
            "options": [
              "$0{,}85$",
              "$1{,}5$",
              "$1{,}33$",
              "$0{,}43$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le quotient de l’effectif par l’amplitude donne $1{,}5$ : c’est la plus forte densité de la série."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Des amplitudes inégales faussent les effectifs",
          "stepTheme": "Des amplitudes inégales faussent les effectifs",
          "stepBadge": "Des amplitudes inégales faussent les effectifs",
          "paragraphText": "• Piège : quand les classes n’ont pas la même amplitude, comparer les seuls effectifs trompe : une classe large rassemble mécaniquement plus d’individus.\nC’est la densité, et non l’effectif brut, qui dit où la concentration est la plus forte.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p01_q6",
            "type": "mcq",
            "prompt": "Quand les amplitudes des classes sont inégales, la concentration d’une classe se juge avec :",
            "options": [
              "Son seul effectif",
              "Son centre",
              "Sa densité",
              "Sa borne supérieure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La densité tient compte de la largeur de la classe : elle seule permet une comparaison honnête."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q1",
          "type": "mcq",
          "prompt": "Dans un tableau de série regroupée en classes, $N$ désigne :",
          "options": [
            "Le nombre de classes",
            "L’effectif total",
            "Le centre de la première classe",
            "L’amplitude totale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$N$ est la somme de tous les effectifs $n_i$ : c’est l’effectif total de la série."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q2",
          "type": "mcq",
          "prompt": "L’amplitude de la classe $[45 ; 70[$ est :",
          "options": [
            "$115$",
            "$45$",
            "$25$",
            "$70$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $70 - 45 = 25$ : l’amplitude est la différence des deux bornes de la classe."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q3",
          "type": "mcq",
          "prompt": "Le centre de la classe $[30 ; 45[$ est :",
          "options": [
            "$45$",
            "$30$",
            "$15$",
            "$37{,}5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le centre est la demi-somme des bornes : on obtient $37{,}5$, comme dans le tableau de la leçon."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q4",
          "type": "mcq",
          "prompt": "La densité d’une classe est le quotient de :",
          "options": [
            "L’effectif de la classe par son amplitude",
            "L’amplitude par l’effectif",
            "L’effectif total par le nombre de classes",
            "Le centre par l’effectif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition de la leçon : densité égale effectif divisé par amplitude."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q5",
          "type": "mcq",
          "prompt": "La densité de la classe $[70 ; 80[$ des coopératives (effectif $15$, amplitude $10$) est :",
          "options": [
            "$0{,}85$",
            "$1{,}5$",
            "$1{,}33$",
            "$0{,}43$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le quotient de l’effectif par l’amplitude donne $1{,}5$ : c’est la plus forte densité de la série."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p01_q6",
          "type": "mcq",
          "prompt": "Quand les amplitudes des classes sont inégales, la concentration d’une classe se juge avec :",
          "options": [
            "Son seul effectif",
            "Son centre",
            "Sa densité",
            "Sa borne supérieure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La densité tient compte de la largeur de la classe : elle seule permet une comparaison honnête."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p02",
      "order": 2,
      "title": "Classe modale et moyenne",
      "summary": "Déterminer la classe modale par la densité et calculer la moyenne à partir des centres des classes.",
      "conceptExplanation": "On appelle classe modale toute classe dont la densité est maximale. Pour les coopératives de cacao, la classe modale est $[70 ; 80[$, de densité $1{,}5$ : elle comporte la plus grande concentration de coopératives.\nCas particulier : si toutes les classes ont la même amplitude, une classe modale est une classe dont l’effectif est maximal.\nLa moyenne d’une série regroupée en classes se calcule avec les centres $c_i$ : c’est la somme des $n_i c_i$ divisée par $N$, ou la somme des $f_i c_i$ avec les fréquences.\nPour le cacao, les centres $15$, $37{,}5$, $57{,}5$, $75$, $90$ et l’effectif total $90$ donnent une moyenne de $55{,}97$ tonnes.",
      "keyRule": "Classe modale égale densité maximale ; moyenne égale somme des produits effectif par centre, divisée par l’effectif total.",
      "formulas": [
        {
          "name": "Moyenne avec les effectifs",
          "formula": "\\bar{x} = \\frac{1}{N} \\sum_{i=1}^{p} n_i c_i"
        },
        {
          "name": "Moyenne avec les fréquences",
          "formula": "\\bar{x} = \\sum_{i=1}^{p} f_i c_i"
        }
      ],
      "workedExample": {
        "title": "Calculer la moyenne des coopératives de cacao (exercice de fixation)",
        "statement": "La série des coopératives a pour classes $[0 ; 30[$, $[30 ; 45[$, $[45 ; 70[$, $[70 ; 80[$, $[80 ; 100[$ et pour effectifs $13$, $20$, $25$, $15$, $17$. Calcule sa moyenne.",
        "methodSteps": [
          "Les centres des classes sont $15$, $37{,}5$, $57{,}5$, $75$ et $90$.",
          "Les produits $n_i c_i$ valent $195$, $750$, $1437{,}5$, $1125$ et $1530$, de somme $5037{,}5$.",
          "On divise par l’effectif total $N = 90$ : la moyenne vaut $55{,}97$."
        ],
        "conclusion": "La production moyenne de l’ensemble des coopératives est $55{,}97$ tonnes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La classe modale",
          "stepTheme": "La classe modale",
          "stepBadge": "La classe modale",
          "paragraphText": "• Classe modale : on appelle classe modale toute classe dont la densité est maximale.\nDans l’exemple du cacao, la densité maximale est $1{,}5$, atteinte par la classe $[70 ; 80[$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q1",
            "type": "mcq",
            "prompt": "La classe modale d’une série regroupée en classes est une classe dont :",
            "options": [
              "L’effectif est nul",
              "La densité est maximale",
              "Le centre est le plus grand",
              "L’amplitude est la plus grande"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, la classe modale est celle de densité maximale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La classe modale des coopératives",
          "stepTheme": "La classe modale des coopératives",
          "stepBadge": "La classe modale des coopératives",
          "paragraphText": "Les densités du cacao sont $0{,}43$, $1{,}33$, $1$, $1{,}5$ et $0{,}85$ : la plus grande est $1{,}5$.\nInterprétation de la leçon : la classe $[70 ; 80[$ comporte la plus grande concentration de coopératives.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q2",
            "type": "mcq",
            "prompt": "La classe modale de la série des coopératives de cacao est :",
            "options": [
              "$[30 ; 45[$",
              "$[45 ; 70[$",
              "$[70 ; 80[$",
              "$[80 ; 100[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sa densité $1{,}5$ est la plus élevée des cinq classes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cas d’amplitudes égales",
          "stepTheme": "Le cas d’amplitudes égales",
          "stepBadge": "Le cas d’amplitudes égales",
          "paragraphText": "• Cas particulier de la leçon : si toutes les classes ont la même amplitude, alors une classe modale est une classe dont l’effectif est maximal.\nLes densités sont alors proportionnelles aux effectifs, donc les deux critères coïncident.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q3",
            "type": "mcq",
            "prompt": "Si toutes les classes ont la même amplitude, une classe modale est une classe dont :",
            "options": [
              "Le centre est maximal",
              "La densité est minimale",
              "La fréquence est nulle",
              "L’effectif est maximal"
            ],
            "correctAnswerIndex": 3,
            "explanation": "À amplitudes égales, la densité maximale correspond à l’effectif maximal."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La moyenne avec les centres des classes",
          "stepTheme": "La moyenne avec les centres des classes",
          "stepBadge": "La moyenne avec les centres des classes",
          "paragraphText": "• Moyenne : pour une série regroupée en classes, on remplace chaque classe par son centre $c_i$.\nLa moyenne est la somme des produits $n_i c_i$ divisée par l’effectif total $N$ ; avec les fréquences, elle est la somme des produits $f_i c_i$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q4",
            "type": "mcq",
            "prompt": "Pour calculer la moyenne d’une série regroupée en classes, chaque classe est représentée par :",
            "options": [
              "Son centre",
              "Sa borne inférieure",
              "Son amplitude",
              "Sa densité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tous les calculs de position et de dispersion utilisent les centres $c_i$ des classes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La moyenne des coopératives de cacao",
          "stepTheme": "La moyenne des coopératives de cacao",
          "stepBadge": "La moyenne des coopératives de cacao",
          "paragraphText": "Pour le cacao, les centres sont $15$, $37{,}5$, $57{,}5$, $75$, $90$ et les produits $n_i c_i$ valent $195$, $750$, $1437{,}5$, $1125$, $1530$, de somme $5037{,}5$.\nLa moyenne vaut alors $55{,}97$ tonnes : c’est la production moyenne de l’ensemble des coopératives.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q5",
            "type": "mcq",
            "prompt": "La moyenne de la série des coopératives de cacao est environ :",
            "options": [
              "$50{,}00$ tonnes",
              "$55{,}97$ tonnes",
              "$57{,}50$ tonnes",
              "$90{,}00$ tonnes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La somme des produits effectif par centre vaut $5037{,}5$ pour un effectif total de $90$, ce qui donne $55{,}97$ tonnes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre classe modale et plus gros effectif",
          "stepTheme": "Confondre classe modale et plus gros effectif",
          "stepBadge": "Confondre classe modale et plus gros effectif",
          "paragraphText": "• Piège : la classe $[45 ; 70[$ du cacao a le plus gros effectif, $25$, mais sa densité ne vaut que $1$.\nLa classe modale reste $[70 ; 80[$ : avec des amplitudes inégales, le critère est la densité.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p02_q6",
            "type": "mcq",
            "prompt": "Dans la série du cacao, la classe $[45 ; 70[$ a le plus gros effectif. Est-elle la classe modale ?",
            "options": [
              "Oui, car son centre est le plus grand",
              "Oui, car son effectif est maximal",
              "Non, car sa densité n’est pas maximale",
              "Non, car son amplitude est nulle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Son effectif est maximal mais sa densité vaut $1$, inférieure à $1{,}5$ : elle n’est pas modale."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q1",
          "type": "mcq",
          "prompt": "La classe modale d’une série regroupée en classes est une classe dont :",
          "options": [
            "L’effectif est nul",
            "La densité est maximale",
            "Le centre est le plus grand",
            "L’amplitude est la plus grande"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, la classe modale est celle de densité maximale."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q2",
          "type": "mcq",
          "prompt": "La classe modale de la série des coopératives de cacao est :",
          "options": [
            "$[30 ; 45[$",
            "$[45 ; 70[$",
            "$[70 ; 80[$",
            "$[80 ; 100[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sa densité $1{,}5$ est la plus élevée des cinq classes."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q3",
          "type": "mcq",
          "prompt": "Si toutes les classes ont la même amplitude, une classe modale est une classe dont :",
          "options": [
            "Le centre est maximal",
            "La densité est minimale",
            "La fréquence est nulle",
            "L’effectif est maximal"
          ],
          "correctAnswerIndex": 3,
          "explanation": "À amplitudes égales, la densité maximale correspond à l’effectif maximal."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q4",
          "type": "mcq",
          "prompt": "Pour calculer la moyenne d’une série regroupée en classes, chaque classe est représentée par :",
          "options": [
            "Son centre",
            "Sa borne inférieure",
            "Son amplitude",
            "Sa densité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tous les calculs de position et de dispersion utilisent les centres $c_i$ des classes."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q5",
          "type": "mcq",
          "prompt": "La moyenne de la série des coopératives de cacao est environ :",
          "options": [
            "$50{,}00$ tonnes",
            "$55{,}97$ tonnes",
            "$57{,}50$ tonnes",
            "$90{,}00$ tonnes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La somme des produits effectif par centre vaut $5037{,}5$ pour un effectif total de $90$, ce qui donne $55{,}97$ tonnes."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p02_q6",
          "type": "mcq",
          "prompt": "Dans la série du cacao, la classe $[45 ; 70[$ a le plus gros effectif. Est-elle la classe modale ?",
          "options": [
            "Oui, car son centre est le plus grand",
            "Oui, car son effectif est maximal",
            "Non, car sa densité n’est pas maximale",
            "Non, car son amplitude est nulle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Son effectif est maximal mais sa densité vaut $1$, inférieure à $1{,}5$ : elle n’est pas modale."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p03",
      "order": 3,
      "title": "La médiane : lecture graphique et interpolation linéaire",
      "summary": "Définir la médiane, la lire sur la courbe cumulative et la calculer par interpolation linéaire.",
      "conceptExplanation": "La médiane d’une série statistique continue est un nombre qui sépare les valeurs ordonnées de la série en deux familles de même effectif.\nElle se détermine graphiquement : c’est l’abscisse du point de la courbe cumulative des effectifs dont l’ordonnée est la moitié de l’effectif total, ou l’abscisse correspondant à $0{,}5$ pour les fréquences.\nElle se calcule aussi par interpolation linéaire. Pour les heures d’absence des élèves de 1ère C (effectif total $104$, effectifs cumulés $12$, $40$, $72$, $96$, $104$), le rang $52$ est compris entre $40$ et $72$, donc la médiane est dans la classe $[8 ; 13[$ et vaut exactement $9{,}875$, valeur arrondie à $9{,}87$ dans la leçon.\nRemarque : la médiane peut aussi être déterminée à l’aide du polygone des effectifs cumulés décroissants.",
      "keyRule": "Repère d’abord la classe où le cumul atteint la moitié de l’effectif total, puis interpole dans cette classe.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer la médiane des heures d’absence (exemple de la leçon)",
        "statement": "Les heures d’absence des élèves de 1ère C sont regroupées en classes $[1 ; 5[$, $[5 ; 8[$, $[8 ; 13[$, $[13 ; 14[$, $[14 ; 21[$, d’effectifs $12$, $28$, $32$, $24$, $8$. Détermine la médiane par interpolation linéaire.",
        "methodSteps": [
          "L’effectif total est $104$ et sa moitié vaut $52$ ; les effectifs cumulés croissants sont $12$, $40$, $72$, $96$, $104$.",
          "Le rang $52$ est compris entre $40$ et $72$ : la médiane appartient à la classe $[8 ; 13[$.",
          "L’interpolation linéaire entre les points de cumul $40$ et $72$ donne la médiane exacte $9{,}875$."
        ],
        "conclusion": "La médiane vaut $9{,}875$, arrondie à $9{,}87$ dans la leçon : la moitié des élèves a un nombre d’heures d’absence supérieur ou égal à cette valeur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La médiane d’une série continue",
          "stepTheme": "La médiane d’une série continue",
          "stepBadge": "La médiane d’une série continue",
          "paragraphText": "• Médiane : la médiane d’une série statistique continue est un nombre qui sépare les valeurs ordonnées de la série en deux familles de même effectif.\nAutrement dit, c’est un nombre $M$ tel qu’au moins la moitié des individus aient une valeur du caractère supérieure ou égale à $M$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q1",
            "type": "mcq",
            "prompt": "La médiane d’une série statistique continue est un nombre qui :",
            "options": [
              "Sépare les valeurs ordonnées en deux familles de même effectif",
              "Est toujours la plus grande valeur",
              "Est la valeur la plus fréquente",
              "Vaut la somme des valeurs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La médiane partage la série ordonnée en deux moitiés de même effectif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La médiane graphique",
          "stepTheme": "La médiane graphique",
          "stepBadge": "La médiane graphique",
          "paragraphText": "• Détermination graphique : la médiane est l’abscisse du point de la courbe cumulative des effectifs dont l’ordonnée est la moitié de l’effectif total.\nAvec les fréquences cumulées, on cherche l’abscisse correspondant à l’ordonnée $0{,}5$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q2",
            "type": "mcq",
            "prompt": "Graphiquement, la médiane est l’abscisse du point de la courbe cumulative dont l’ordonnée est :",
            "options": [
              "L’effectif total",
              "Le quart de l’effectif total",
              "La moitié de l’effectif total",
              "Le double de l’effectif total"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On se place à la moitié de l’effectif total sur l’axe des ordonnées, puis on lit l’abscisse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L’exemple des heures d’absence",
          "stepTheme": "L’exemple des heures d’absence",
          "stepBadge": "L’exemple des heures d’absence",
          "paragraphText": "Pour les heures d’absence des élèves de 1ère C (classes $[1 ; 5[$, $[5 ; 8[$, $[8 ; 13[$, $[13 ; 14[$, $[14 ; 21[$, effectifs $12$, $28$, $32$, $24$, $8$ et effectifs cumulés croissants $12$, $40$, $72$, $96$, $104$), l’effectif total est $104$ et sa moitié vaut $52$.\nLa lecture du polygone des effectifs cumulés croissants donne une médiane environ égale à $9$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q3",
            "type": "mcq",
            "prompt": "Pour la série des absences (effectif total $104$), l’ordonnée à utiliser pour lire la médiane est :",
            "options": [
              "$104$",
              "$52$",
              "$40$",
              "$26$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La moitié de $104$ vaut $52$ : c’est l’ordonnée du point dont l’abscisse est la médiane."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Encadrer la médiane avant l’interpolation",
          "stepTheme": "Encadrer la médiane avant l’interpolation",
          "stepBadge": "Encadrer la médiane avant l’interpolation",
          "paragraphText": "Le rang $52$ est compris entre le $40$e rang et le $72$e rang des effectifs cumulés.\nLa médiane appartient donc à la classe $[8 ; 13[$ : c’est dans cette classe que l’interpolation linéaire va la préciser.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q4",
            "type": "mcq",
            "prompt": "Le rang $52$ étant compris entre $40$ et $72$, la médiane des absences appartient à la classe :",
            "options": [
              "$[5 ; 8[$",
              "$[13 ; 14[$",
              "$[1 ; 5[$",
              "$[8 ; 13[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les effectifs cumulés $40$ et $72$ encadrent $52$ : la classe correspondante est $[8 ; 13[$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L’interpolation linéaire de la médiane",
          "stepTheme": "L’interpolation linéaire de la médiane",
          "stepBadge": "L’interpolation linéaire de la médiane",
          "paragraphText": "• Interpolation linéaire : dans la classe médiane, on suppose la répartition régulière entre les deux points du polygone cumulatif.\nPour les absences, le calcul exact donne une médiane de $9{,}875$, valeur que la leçon arrondit en $9{,}87$ : la moitié des élèves a un nombre d’heures d’absence supérieur ou égal à cette valeur.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q5",
            "type": "mcq",
            "prompt": "La valeur exacte de la médiane des absences, par interpolation linéaire, est :",
            "options": [
              "$9{,}875$",
              "$9{,}00$",
              "$8{,}50$",
              "$10{,}50$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans la classe $[8 ; 13[$, on part de $8$ et on ajoute la part correspondant au passage de $40$ à $52$ entre $40$ et $72$, ce qui donne $9{,}875$, arrondi à $9{,}87$ dans la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La médiane peut aussi se lire en décroissant",
          "stepTheme": "La médiane peut aussi se lire en décroissant",
          "stepBadge": "La médiane peut aussi se lire en décroissant",
          "paragraphText": "• Remarque de la leçon : la médiane peut être déterminée graphiquement à l’aide du polygone des effectifs cumulés décroissants.\n• Piège : ne pas confondre la lecture graphique, qui donne une valeur approchée, avec l’interpolation linéaire, qui donne une valeur plus précise.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p03_q6",
            "type": "mcq",
            "prompt": "Quelle méthode donne la valeur la plus précise de la médiane dans cette leçon ?",
            "options": [
              "La lecture sur le polygone décroissant seulement",
              "L’interpolation linéaire",
              "Le choix de la classe la plus remplie",
              "La moyenne des deux bornes de la série"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon présente l’interpolation linéaire comme le calcul précis, la lecture graphique restant une approximation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q1",
          "type": "mcq",
          "prompt": "La médiane d’une série statistique continue est un nombre qui :",
          "options": [
            "Sépare les valeurs ordonnées en deux familles de même effectif",
            "Est toujours la plus grande valeur",
            "Est la valeur la plus fréquente",
            "Vaut la somme des valeurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La médiane partage la série ordonnée en deux moitiés de même effectif."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q2",
          "type": "mcq",
          "prompt": "Graphiquement, la médiane est l’abscisse du point de la courbe cumulative dont l’ordonnée est :",
          "options": [
            "L’effectif total",
            "Le quart de l’effectif total",
            "La moitié de l’effectif total",
            "Le double de l’effectif total"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On se place à la moitié de l’effectif total sur l’axe des ordonnées, puis on lit l’abscisse."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q3",
          "type": "mcq",
          "prompt": "Pour la série des absences (effectif total $104$), l’ordonnée à utiliser pour lire la médiane est :",
          "options": [
            "$104$",
            "$52$",
            "$40$",
            "$26$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La moitié de $104$ vaut $52$ : c’est l’ordonnée du point dont l’abscisse est la médiane."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q4",
          "type": "mcq",
          "prompt": "Le rang $52$ étant compris entre $40$ et $72$, la médiane des absences appartient à la classe :",
          "options": [
            "$[5 ; 8[$",
            "$[13 ; 14[$",
            "$[1 ; 5[$",
            "$[8 ; 13[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les effectifs cumulés $40$ et $72$ encadrent $52$ : la classe correspondante est $[8 ; 13[$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q5",
          "type": "mcq",
          "prompt": "La valeur exacte de la médiane des absences, par interpolation linéaire, est :",
          "options": [
            "$9{,}875$",
            "$9{,}00$",
            "$8{,}50$",
            "$10{,}50$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans la classe $[8 ; 13[$, on part de $8$ et on ajoute la part correspondant au passage de $40$ à $52$ entre $40$ et $72$, ce qui donne $9{,}875$, arrondi à $9{,}87$ dans la leçon."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p03_q6",
          "type": "mcq",
          "prompt": "Quelle méthode donne la valeur la plus précise de la médiane dans cette leçon ?",
          "options": [
            "La lecture sur le polygone décroissant seulement",
            "L’interpolation linéaire",
            "Le choix de la classe la plus remplie",
            "La moyenne des deux bornes de la série"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon présente l’interpolation linéaire comme le calcul précis, la lecture graphique restant une approximation."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p04",
      "order": 4,
      "title": "Les quartiles",
      "summary": "Définir les trois quartiles, les lire graphiquement et les calculer par interpolation linéaire.",
      "conceptExplanation": "Les valeurs de la série étant ordonnées, le premier quartile $Q_1$ est la valeur telle que $25$ % des valeurs sont inférieures ou égales à $Q_1$ et $75$ % lui sont supérieures ; le deuxième quartile $Q_2$ est la médiane ; le troisième quartile $Q_3$ est la valeur telle que $75$ % des valeurs sont inférieures ou égales à $Q_3$ et $25$ % lui sont supérieures.\nGraphiquement, $Q_1$ correspond à $25$ % de l’effectif et $Q_3$ à $75$ % de l’effectif sur le polygone des effectifs cumulés croissants.\nPour les heures d’absence (effectif total $104$), $Q_1$ est dans la classe $[5 ; 8[$ et vaut $6{,}5$ par interpolation ; $Q_3$ est dans la classe $[13 ; 14[$ et vaut $13{,}25$.",
      "keyRule": "Quart égale $Q_1$, moitié égale médiane et $Q_2$, trois quarts égale $Q_3$ : les quartiles se lisent aux mêmes rangs que les pourcentages.",
      "formulas": [
        {
          "name": "Premier quartile",
          "formula": "Q_1",
          "note": "25 % des valeurs sont inférieures ou égales à $Q_1$."
        },
        {
          "name": "Troisième quartile",
          "formula": "Q_3",
          "note": "75 % des valeurs sont inférieures ou égales à $Q_3$."
        }
      ],
      "workedExample": {
        "title": "Calculer les quartiles des heures d’absence (exemple de la leçon)",
        "statement": "Pour la série des absences (effectif total $104$, effectifs cumulés $12$, $40$, $72$, $96$, $104$), calcule $Q_1$ et $Q_3$ par interpolation linéaire.",
        "methodSteps": [
          "Le quart de l’effectif vaut $26$, compris entre $12$ et $40$ : $Q_1$ est dans $[5 ; 8[$ et l’interpolation donne $Q_1 = 6{,}5$.",
          "Les trois quarts de l’effectif valent $78$, compris entre $72$ et $96$ : $Q_3$ est dans $[13 ; 14[$.",
          "L’interpolation entre les cumuls $72$ et $96$ donne $Q_3 = 13{,}25$."
        ],
        "conclusion": "$26$ élèves ont un nombre d’heures d’absence inférieur ou égal à $6{,}5$, et $78$ élèves ont un nombre inférieur ou égal à $13{,}25$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le premier quartile",
          "stepTheme": "Le premier quartile",
          "stepBadge": "Le premier quartile",
          "paragraphText": "• Premier quartile : les valeurs de la série étant ordonnées, le premier quartile $Q_1$ est la valeur telle que $25$ % des valeurs sont inférieures ou égales à $Q_1$ et $75$ % lui sont supérieures.\nIl correspond à $25$ % de l’effectif sur le polygone des effectifs cumulés croissants.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q1",
            "type": "mcq",
            "prompt": "Le premier quartile $Q_1$ est la valeur telle que :",
            "options": [
              "La moitié des valeurs lui sont inférieures ou égales",
              "25 % des valeurs sont inférieures ou égales à $Q_1$",
              "75 % des valeurs sont inférieures ou égales à $Q_1$",
              "Toutes les valeurs lui sont supérieures"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $Q_1$ laisse un quart des valeurs en dessous de lui et trois quarts au-dessus."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le deuxième et le troisième quartile",
          "stepTheme": "Le deuxième et le troisième quartile",
          "stepBadge": "Le deuxième et le troisième quartile",
          "paragraphText": "• Deuxième quartile : le deuxième quartile $Q_2$ est la médiane.\n• Troisième quartile : $Q_3$ est la valeur telle que $75$ % des valeurs sont inférieures ou égales à $Q_3$ et $25$ % lui sont supérieures ; il correspond à $75$ % de l’effectif sur le polygone cumulatif.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q2",
            "type": "mcq",
            "prompt": "Le deuxième quartile $Q_2$ est :",
            "options": [
              "Le premier quartile",
              "La moyenne",
              "La médiane",
              "L’écart interquartile"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon identifie $Q_2$ à la médiane de la série."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les rangs des quartiles des absences",
          "stepTheme": "Les rangs des quartiles des absences",
          "stepBadge": "Les rangs des quartiles des absences",
          "paragraphText": "Pour les absences (classes $[1 ; 5[$, $[5 ; 8[$, $[8 ; 13[$, $[13 ; 14[$, $[14 ; 21[$, effectifs $12$, $28$, $32$, $24$, $8$ et effectifs cumulés croissants $12$, $40$, $72$, $96$, $104$), le quart de l’effectif total vaut $26$ et les trois quarts valent $78$.\n$Q_1$ se cherche donc autour du rang $26$ et $Q_3$ autour du rang $78$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q3",
            "type": "mcq",
            "prompt": "Pour un effectif total de $104$, le rang associé au troisième quartile est :",
            "options": [
              "$26$",
              "$52$",
              "$104$",
              "$78$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les trois quarts de $104$ valent $78$ : $Q_3$ correspond au cumul $78$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer le premier quartile",
          "stepTheme": "Calculer le premier quartile",
          "stepBadge": "Calculer le premier quartile",
          "paragraphText": "Le rang $26$ est compris entre le $12$e rang et le $40$e rang : $Q_1$ appartient à la classe $[5 ; 8[$.\nL’interpolation linéaire entre les cumuls $12$ et $40$ donne $Q_1 = 6{,}5$ : $26$ élèves ont un nombre d’heures d’absence inférieur ou égal à $6{,}5$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q4",
            "type": "mcq",
            "prompt": "Par interpolation linéaire, le premier quartile des heures d’absence vaut :",
            "options": [
              "$6{,}5$",
              "$7{,}5$",
              "$5{,}0$",
              "$9{,}87$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Entre les cumuls $12$ et $40$, le rang $26$ est exactement au milieu : $Q_1$ est au milieu de la classe $[5 ; 8[$, soit $6{,}5$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calculer le troisième quartile",
          "stepTheme": "Calculer le troisième quartile",
          "stepBadge": "Calculer le troisième quartile",
          "paragraphText": "Le rang $78$ est compris entre le $72$e rang et le $96$e rang : $Q_3$ appartient à la classe $[13 ; 14[$.\nL’interpolation linéaire donne $Q_3 = 13{,}25$ : $78$ élèves ont un nombre d’heures d’absence inférieur ou égal à $13{,}25$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q5",
            "type": "mcq",
            "prompt": "Par interpolation linéaire, le troisième quartile des heures d’absence vaut :",
            "options": [
              "$12{,}50$",
              "$13{,}25$",
              "$14{,}00$",
              "$13{,}50$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Entre les cumuls $72$ et $96$, le rang $78$ est au quart de l’intervalle : $Q_3$ vaut $13{,}25$, et non $13{,}5$ comme une phrase d’interprétation de la source l’écrit par erreur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre les deux rangs",
          "stepTheme": "Ne pas confondre les deux rangs",
          "stepBadge": "Ne pas confondre les deux rangs",
          "paragraphText": "• Piège : $Q_1$ se cherche au quart de l’effectif et $Q_3$ aux trois quarts ; inverser les deux rangs échange les deux quartiles.\nLa lecture graphique donne environ $7$ pour $Q_1$ et environ $13$ pour $Q_3$, valeurs approchées que l’interpolation précise.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p04_q6",
            "type": "mcq",
            "prompt": "Graphiquement, la leçon lit pour les absences des valeurs approchées de $Q_1$ et $Q_3$ égales à :",
            "options": [
              "Environ $13$ et environ $7$",
              "Environ $9$ et environ $9$",
              "Environ $7$ et environ $13$",
              "Environ $6{,}5$ et environ $13{,}25$ exactement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La lecture sur le polygone donne environ $7$ pour $Q_1$ et environ $13$ pour $Q_3$ ; les valeurs exactes par interpolation sont $6{,}5$ et $13{,}25$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q1",
          "type": "mcq",
          "prompt": "Le premier quartile $Q_1$ est la valeur telle que :",
          "options": [
            "La moitié des valeurs lui sont inférieures ou égales",
            "25 % des valeurs sont inférieures ou égales à $Q_1$",
            "75 % des valeurs sont inférieures ou égales à $Q_1$",
            "Toutes les valeurs lui sont supérieures"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $Q_1$ laisse un quart des valeurs en dessous de lui et trois quarts au-dessus."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q2",
          "type": "mcq",
          "prompt": "Le deuxième quartile $Q_2$ est :",
          "options": [
            "Le premier quartile",
            "La moyenne",
            "La médiane",
            "L’écart interquartile"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon identifie $Q_2$ à la médiane de la série."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q3",
          "type": "mcq",
          "prompt": "Pour un effectif total de $104$, le rang associé au troisième quartile est :",
          "options": [
            "$26$",
            "$52$",
            "$104$",
            "$78$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les trois quarts de $104$ valent $78$ : $Q_3$ correspond au cumul $78$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q4",
          "type": "mcq",
          "prompt": "Par interpolation linéaire, le premier quartile des heures d’absence vaut :",
          "options": [
            "$6{,}5$",
            "$7{,}5$",
            "$5{,}0$",
            "$9{,}87$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Entre les cumuls $12$ et $40$, le rang $26$ est exactement au milieu : $Q_1$ est au milieu de la classe $[5 ; 8[$, soit $6{,}5$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q5",
          "type": "mcq",
          "prompt": "Par interpolation linéaire, le troisième quartile des heures d’absence vaut :",
          "options": [
            "$12{,}50$",
            "$13{,}25$",
            "$14{,}00$",
            "$13{,}50$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Entre les cumuls $72$ et $96$, le rang $78$ est au quart de l’intervalle : $Q_3$ vaut $13{,}25$, et non $13{,}5$ comme une phrase d’interprétation de la source l’écrit par erreur."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p04_q6",
          "type": "mcq",
          "prompt": "Graphiquement, la leçon lit pour les absences des valeurs approchées de $Q_1$ et $Q_3$ égales à :",
          "options": [
            "Environ $13$ et environ $7$",
            "Environ $9$ et environ $9$",
            "Environ $7$ et environ $13$",
            "Environ $6{,}5$ et environ $13{,}25$ exactement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La lecture sur le polygone donne environ $7$ pour $Q_1$ et environ $13$ pour $Q_3$ ; les valeurs exactes par interpolation sont $6{,}5$ et $13{,}25$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p05",
      "order": 5,
      "title": "Représentations graphiques : histogramme, polygones et courbes cumulatives",
      "summary": "Construire et lire un histogramme, un polygone des effectifs ou des fréquences et une courbe cumulative.",
      "conceptExplanation": "L’histogramme d’une série regroupée en classes est constitué de rectangles juxtaposés : l’aire de chaque rectangle est proportionnelle à l’effectif ou à la fréquence de la classe, les largeurs sont proportionnelles aux amplitudes et les hauteurs aux densités.\nLe polygone des effectifs ou des fréquences est obtenu en joignant les milieux successifs des côtés les plus hauts de chaque rectangle de l’histogramme.\nLa courbe cumulative des effectifs représente la fonction affine par morceaux qui relie les effectifs cumulés croissants : elle vaut $0$ avant la première classe et $N$ après la dernière. La courbe cumulative des fréquences suit le même principe, entre $0$ et $1$.\nExemple de la leçon : pour les fréquences $0{,}15$, $0{,}35$, $0{,}25$, $0{,}1$, $0{,}15$, les fréquences cumulées croissantes sont $0{,}15$, $0{,}5$, $0{,}75$, $0{,}85$, $1$.",
      "keyRule": "Dans un histogramme, ce sont les aires qui comptent : hauteur égale densité, largeur égale amplitude.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le tableau de l’exercice de fixation (histogramme des fréquences)",
        "statement": "Pour les classes $[2 ; 3[$, $[3 ; 4{,}5[$, $[4{,}5 ; 5{,}5[$, $[5{,}5 ; 6[$, $[6 ; 8[$ de fréquences $0{,}15$, $0{,}35$, $0{,}25$, $0{,}1$, $0{,}15$, complète les amplitudes, les centres et les densités.",
        "methodSteps": [
          "Les amplitudes sont $1$, $1{,}5$, $1$, $0{,}5$ et $2$.",
          "Les centres sont $2{,}5$, $3{,}75$, $5$, $5{,}75$ et $7$.",
          "Les densités sont environ $0{,}15$, $0{,}23$, $0{,}25$, $0{,}2$ et $0{,}075$."
        ],
        "conclusion": "Le tableau complété permet de construire l’histogramme des fréquences avec des hauteurs proportionnelles aux densités."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’histogramme",
          "stepTheme": "L’histogramme",
          "stepBadge": "L’histogramme",
          "paragraphText": "• Histogramme : l’histogramme d’une série regroupée en classes est constitué de rectangles juxtaposés.\nL’aire de chaque rectangle est proportionnelle à l’effectif, ou à la fréquence, de la classe correspondante.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q1",
            "type": "mcq",
            "prompt": "Dans un histogramme, l’aire de chaque rectangle est proportionnelle à :",
            "options": [
              "L’effectif ou la fréquence de la classe",
              "Au centre de la classe",
              "À la médiane",
              "À l’amplitude totale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le principe de l’histogramme : les aires portent les effectifs ou les fréquences."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Largeurs et hauteurs des rectangles",
          "stepTheme": "Largeurs et hauteurs des rectangles",
          "stepBadge": "Largeurs et hauteurs des rectangles",
          "paragraphText": "Les largeurs des rectangles sont proportionnelles aux amplitudes des classes.\nLes hauteurs des rectangles sont proportionnelles aux densités des classes : c’est ce qui rend l’histogramme correct même avec des amplitudes inégales.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q2",
            "type": "mcq",
            "prompt": "Dans un histogramme, les hauteurs des rectangles sont proportionnelles :",
            "options": [
              "Aux effectifs cumulés",
              "Aux densités des classes",
              "Aux centres des classes",
              "Aux fréquences cumulées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Hauteur proportionnelle à la densité : ainsi l’aire du rectangle reste proportionnelle à l’effectif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le tableau de l’exercice de fixation",
          "stepTheme": "Le tableau de l’exercice de fixation",
          "stepBadge": "Le tableau de l’exercice de fixation",
          "paragraphText": "Pour les classes $[2 ; 3[$, $[3 ; 4{,}5[$, $[4{,}5 ; 5{,}5[$, $[5{,}5 ; 6[$, $[6 ; 8[$ de fréquences $0{,}15$, $0{,}35$, $0{,}25$, $0{,}1$, $0{,}15$, les amplitudes sont $1$, $1{,}5$, $1$, $0{,}5$, $2$.\nLes centres sont $2{,}5$, $3{,}75$, $5$, $5{,}75$, $7$ et les densités des fréquences environ $0{,}15$, $0{,}23$, $0{,}25$, $0{,}2$, $0{,}075$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q3",
            "type": "mcq",
            "prompt": "La densité de fréquence de la classe $[5{,}5 ; 6[$, de fréquence $0{,}1$ et d’amplitude $0{,}5$, est :",
            "options": [
              "$0{,}05$",
              "$0{,}1$",
              "$0{,}6$",
              "$0{,}2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le quotient de la fréquence par l’amplitude donne $0{,}2$, comme dans la solution de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le polygone des effectifs et des fréquences",
          "stepTheme": "Le polygone des effectifs et des fréquences",
          "stepBadge": "Le polygone des effectifs et des fréquences",
          "paragraphText": "• Polygone des effectifs ou des fréquences : il est obtenu en joignant les milieux successifs des côtés les plus hauts de chaque rectangle de l’histogramme.\nOn obtient ainsi un résumé visuel de la forme de la distribution.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q4",
            "type": "mcq",
            "prompt": "Le polygone des fréquences s’obtient en joignant :",
            "options": [
              "Les milieux successifs des côtés les plus hauts des rectangles",
              "Les coins inférieurs des rectangles",
              "Les centres des classes entre eux au hasard",
              "Les bornes des classes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On relie les milieux des sommets des rectangles, dans l’ordre des classes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les courbes cumulatives",
          "stepTheme": "Les courbes cumulatives",
          "stepBadge": "Les courbes cumulatives",
          "paragraphText": "• Courbe cumulative : la courbe cumulative des effectifs représente la fonction qui, sur chaque intervalle de classe, coïncide avec la fonction affine reliant les effectifs cumulés croissants aux bornes.\nElle vaut $0$ avant la première classe et $N$ après la dernière ; la courbe des fréquences suit le même principe entre $0$ et $1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q5",
            "type": "mcq",
            "prompt": "Après la dernière classe, la courbe cumulative des fréquences vaut :",
            "options": [
              "$0$",
              "$1$",
              "$N$",
              "$0{,}5$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Toutes les fréquences sont cumulées après la dernière classe : le cumul atteint $1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les fréquences cumulées de l’exercice",
          "stepTheme": "Les fréquences cumulées de l’exercice",
          "stepBadge": "Les fréquences cumulées de l’exercice",
          "paragraphText": "Pour l’exercice de fixation, les fréquences $0{,}15$, $0{,}35$, $0{,}25$, $0{,}1$, $0{,}15$ donnent les fréquences cumulées croissantes $0{,}15$, $0{,}5$, $0{,}75$, $0{,}85$, $1$.\n• Piège : une courbe cumulative croissante ne descend jamais ; un cumul qui baisse signale une erreur de calcul.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p05_q6",
            "type": "mcq",
            "prompt": "Les fréquences cumulées croissantes de $0{,}15$, $0{,}35$, $0{,}25$, $0{,}1$, $0{,}15$ se terminent par :",
            "options": [
              "$0{,}85$",
              "$0{,}75$",
              "$1$",
              "$0{,}5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La somme de toutes les fréquences vaut $1$ : le dernier cumul est $1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q1",
          "type": "mcq",
          "prompt": "Dans un histogramme, l’aire de chaque rectangle est proportionnelle à :",
          "options": [
            "L’effectif ou la fréquence de la classe",
            "Au centre de la classe",
            "À la médiane",
            "À l’amplitude totale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le principe de l’histogramme : les aires portent les effectifs ou les fréquences."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q2",
          "type": "mcq",
          "prompt": "Dans un histogramme, les hauteurs des rectangles sont proportionnelles :",
          "options": [
            "Aux effectifs cumulés",
            "Aux densités des classes",
            "Aux centres des classes",
            "Aux fréquences cumulées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Hauteur proportionnelle à la densité : ainsi l’aire du rectangle reste proportionnelle à l’effectif."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q3",
          "type": "mcq",
          "prompt": "La densité de fréquence de la classe $[5{,}5 ; 6[$, de fréquence $0{,}1$ et d’amplitude $0{,}5$, est :",
          "options": [
            "$0{,}05$",
            "$0{,}1$",
            "$0{,}6$",
            "$0{,}2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le quotient de la fréquence par l’amplitude donne $0{,}2$, comme dans la solution de la leçon."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q4",
          "type": "mcq",
          "prompt": "Le polygone des fréquences s’obtient en joignant :",
          "options": [
            "Les milieux successifs des côtés les plus hauts des rectangles",
            "Les coins inférieurs des rectangles",
            "Les centres des classes entre eux au hasard",
            "Les bornes des classes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On relie les milieux des sommets des rectangles, dans l’ordre des classes."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q5",
          "type": "mcq",
          "prompt": "Après la dernière classe, la courbe cumulative des fréquences vaut :",
          "options": [
            "$0$",
            "$1$",
            "$N$",
            "$0{,}5$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Toutes les fréquences sont cumulées après la dernière classe : le cumul atteint $1$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p05_q6",
          "type": "mcq",
          "prompt": "Les fréquences cumulées croissantes de $0{,}15$, $0{,}35$, $0{,}25$, $0{,}1$, $0{,}15$ se terminent par :",
          "options": [
            "$0{,}85$",
            "$0{,}75$",
            "$1$",
            "$0{,}5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La somme de toutes les fréquences vaut $1$ : le dernier cumul est $1$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p06",
      "order": 6,
      "title": "Variance et écart type",
      "summary": "Calculer la variance avec la formule pratique et l’écart type, puis interpréter la dispersion.",
      "conceptExplanation": "La variance d’une série regroupée en classes, notée $V$, est la moyenne des carrés des écarts entre les centres et la moyenne, pondérés par les effectifs.\nLa formule pratique donne la variance comme la moyenne des carrés des centres, moins le carré de la moyenne.\nPour le temps de sport de $125$ élèves, la moyenne vaut $39{,}84$ minutes et la somme des $n_i c_i^2$ vaut $322000$, ce qui donne une variance de $988{,}77$.\nL’écart type, noté $\\sigma$, est la racine carrée de la variance : il vaut environ $31{,}44$ minutes. Plus l’écart type est élevé, plus la dispersion des valeurs autour de la moyenne est élevée.",
      "keyRule": "Variance égale moyenne des carrés moins carré de la moyenne ; écart type égale racine carrée de la variance.",
      "formulas": [
        {
          "name": "Variance, formule pratique",
          "formula": "V = \\frac{1}{N} \\sum_{i=1}^{p} n_i c_i^2 - \\bar{x}^2"
        },
        {
          "name": "Écart type",
          "formula": "\\sigma = \\sqrt{V}"
        }
      ],
      "workedExample": {
        "title": "Variance et écart type du temps de sport (exercice de fixation)",
        "statement": "Pour $125$ élèves, les temps de sport hebdomadaires sont regroupés en classes $[0 ; 20[$, $[20 ; 40[$, $[40 ; 60[$, $[60 ; 100[$, $[100 ; 140[$, $[140 ; 200[$, d’effectifs $35$, $41$, $30$, $12$, $5$, $2$. Justifie que la moyenne est $39{,}84$, puis calcule la variance et l’écart type.",
        "methodSteps": [
          "Les centres sont $10$, $30$, $50$, $80$, $120$, $170$ et la somme des $n_i c_i$ vaut $4980$ : la moyenne est $39{,}84$.",
          "La somme des $n_i c_i^2$ vaut $322000$ : la formule pratique donne la variance $988{,}77$.",
          "L’écart type est la racine carrée de la variance : environ $31{,}44$."
        ],
        "conclusion": "La variance vaut $988{,}77$ et l’écart type $31{,}44$ minutes, élevé : les temps sont dispersés autour de la moyenne."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La variance",
          "stepTheme": "La variance",
          "stepBadge": "La variance",
          "paragraphText": "• Variance : la variance d’une série regroupée en classes, notée $V$, mesure la dispersion des valeurs autour de la moyenne.\nElle se calcule à partir des écarts entre les centres $c_i$ et la moyenne, pondérés par les effectifs.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q1",
            "type": "mcq",
            "prompt": "La variance d’une série statistique mesure :",
            "options": [
              "La valeur la plus fréquente",
              "La dispersion des valeurs autour de la moyenne",
              "La moitié de l’effectif",
              "La plus grande amplitude"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Variance et écart type sont les caractéristiques de dispersion autour de la moyenne."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule pratique de la variance",
          "stepTheme": "La formule pratique de la variance",
          "stepBadge": "La formule pratique de la variance",
          "paragraphText": "• Autre formule de la leçon : la variance est la moyenne des carrés des centres, moins le carré de la moyenne.\nC’est cette formule qui sert dans les exercices, avec la colonne des produits $n_i c_i^2$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q2",
            "type": "mcq",
            "prompt": "La formule pratique de la variance est :",
            "options": [
              "La moyenne des centres, moins la moyenne",
              "La moyenne des carrés des centres, plus le carré de la moyenne",
              "La moyenne des carrés des centres, moins le carré de la moyenne",
              "Le carré de l’écart type, moins la moyenne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule d’abord la moyenne des $c_i^2$ pondérés, puis on retranche le carré de la moyenne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La moyenne du temps de sport",
          "stepTheme": "La moyenne du temps de sport",
          "stepBadge": "La moyenne du temps de sport",
          "paragraphText": "Pour le temps de sport hebdomadaire de $125$ élèves (classes $[0 ; 20[$, $[20 ; 40[$, $[40 ; 60[$, $[60 ; 100[$, $[100 ; 140[$, $[140 ; 200[$ et effectifs $35$, $41$, $30$, $12$, $5$, $2$), les centres sont $10$, $30$, $50$, $80$, $120$, $170$.\nLa somme des produits $n_i c_i$ vaut $4980$, ce qui donne la moyenne $39{,}84$ minutes, comme le demande la première question de l’exercice.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q3",
            "type": "mcq",
            "prompt": "La moyenne du temps de sport des $125$ élèves est :",
            "options": [
              "$35{,}00$ minutes",
              "$49{,}80$ minutes",
              "$125$ minutes",
              "$39{,}84$ minutes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La somme des produits vaut $4980$ pour $125$ élèves : la moyenne est $39{,}84$ minutes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La variance du temps de sport",
          "stepTheme": "La variance du temps de sport",
          "stepBadge": "La variance du temps de sport",
          "paragraphText": "La somme des produits $n_i c_i^2$ vaut $322000$ pour cette série.\nLa formule pratique donne alors une variance de $988{,}77$ : c’est la valeur obtenue dans la solution de la leçon, recalculée à partir des données.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q4",
            "type": "mcq",
            "prompt": "La variance du temps de sport est environ :",
            "options": [
              "$988{,}77$",
              "$31{,}44$",
              "$2576$",
              "$39{,}84$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La moyenne des carrés vaut $2576$ et le carré de la moyenne vaut environ $1587{,}23$ : la différence donne $988{,}77$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L’écart type",
          "stepTheme": "L’écart type",
          "stepBadge": "L’écart type",
          "paragraphText": "• Écart type : l’écart type d’une série statistique, noté $\\sigma$, est la racine carrée de la variance.\nPour le temps de sport, il vaut environ $31{,}44$ minutes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q5",
            "type": "mcq",
            "prompt": "L’écart type est égal à :",
            "options": [
              "La variance au carré",
              "La racine carrée de la variance",
              "La variance divisée par la moyenne",
              "La moitié de la variance"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, l’écart type est la racine carrée de la variance : il s’exprime dans la même unité que les valeurs."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Interpréter un écart type élevé",
          "stepTheme": "Interpréter un écart type élevé",
          "stepBadge": "Interpréter un écart type élevé",
          "paragraphText": "• Interprétation de la leçon : plus l’écart type est élevé, plus la dispersion des valeurs autour de la moyenne est élevée.\nIci, $31{,}44$ est élevé : le temps de sport hebdomadaire de la majorité des élèves n’est pas proche de la moyenne $39{,}84$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p06_q6",
            "type": "mcq",
            "prompt": "Un écart type élevé signifie que :",
            "options": [
              "Les valeurs sont très regroupées autour de la moyenne",
              "La moyenne est fausse",
              "La dispersion des valeurs autour de la moyenne est élevée",
              "L’effectif est grand"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’interprétation donnée par la leçon : grand écart type égale forte dispersion."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q1",
          "type": "mcq",
          "prompt": "La variance d’une série statistique mesure :",
          "options": [
            "La valeur la plus fréquente",
            "La dispersion des valeurs autour de la moyenne",
            "La moitié de l’effectif",
            "La plus grande amplitude"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Variance et écart type sont les caractéristiques de dispersion autour de la moyenne."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q2",
          "type": "mcq",
          "prompt": "La formule pratique de la variance est :",
          "options": [
            "La moyenne des centres, moins la moyenne",
            "La moyenne des carrés des centres, plus le carré de la moyenne",
            "La moyenne des carrés des centres, moins le carré de la moyenne",
            "Le carré de l’écart type, moins la moyenne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule d’abord la moyenne des $c_i^2$ pondérés, puis on retranche le carré de la moyenne."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q3",
          "type": "mcq",
          "prompt": "La moyenne du temps de sport des $125$ élèves est :",
          "options": [
            "$35{,}00$ minutes",
            "$49{,}80$ minutes",
            "$125$ minutes",
            "$39{,}84$ minutes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La somme des produits vaut $4980$ pour $125$ élèves : la moyenne est $39{,}84$ minutes."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q4",
          "type": "mcq",
          "prompt": "La variance du temps de sport est environ :",
          "options": [
            "$988{,}77$",
            "$31{,}44$",
            "$2576$",
            "$39{,}84$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La moyenne des carrés vaut $2576$ et le carré de la moyenne vaut environ $1587{,}23$ : la différence donne $988{,}77$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q5",
          "type": "mcq",
          "prompt": "L’écart type est égal à :",
          "options": [
            "La variance au carré",
            "La racine carrée de la variance",
            "La variance divisée par la moyenne",
            "La moitié de la variance"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, l’écart type est la racine carrée de la variance : il s’exprime dans la même unité que les valeurs."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p06_q6",
          "type": "mcq",
          "prompt": "Un écart type élevé signifie que :",
          "options": [
            "Les valeurs sont très regroupées autour de la moyenne",
            "La moyenne est fausse",
            "La dispersion des valeurs autour de la moyenne est élevée",
            "L’effectif est grand"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’interprétation donnée par la leçon : grand écart type égale forte dispersion."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l15_statistiques_p07",
      "order": 7,
      "title": "Écart absolu moyen et écart interquartile",
      "summary": "Calculer l’écart absolu moyen et l’écart interquartile, et interpréter ces deux mesures de dispersion.",
      "conceptExplanation": "L’écart absolu moyen, noté $e_m$, est la moyenne des écarts absolus entre les centres des classes et la moyenne, pondérés par les effectifs : il indique la distance moyenne entre la moyenne et les valeurs de la série. Pour le temps de sport, il vaut $23{,}17$ minutes.\nL’écart interquartile est la différence entre le troisième et le premier quartile. Pour le temps de sport, $Q_1 = 17{,}86$ et $Q_3 = 51{,}83$ par interpolation linéaire, donc l’écart interquartile vaut $33{,}97$.\nInterprétation : $50$ % des valeurs sont comprises entre le premier quartile et le troisième quartile.",
      "keyRule": "Écart absolu moyen pour la distance typique à la moyenne, écart interquartile pour l’étalement de la moitié centrale des valeurs.",
      "formulas": [
        {
          "name": "Écart absolu moyen",
          "formula": "e_m = \\frac{1}{N} \\sum_{i=1}^{p} n_i |c_i - \\bar{x}|"
        },
        {
          "name": "Écart interquartile",
          "formula": "Q_3 - Q_1"
        }
      ],
      "workedExample": {
        "title": "Écart interquartile du temps de sport (exercice de fixation)",
        "statement": "Pour la série du temps de sport (effectif total $125$, effectifs cumulés $35$, $76$, $106$, $118$, $123$, $125$), calcule l’écart interquartile et interprète le résultat.",
        "methodSteps": [
          "Le quart de l’effectif vaut $31{,}25$ : $Q_1$ est dans $[0 ; 20[$ et l’interpolation donne $Q_1 = 17{,}86$.",
          "Les trois quarts valent $93{,}75$ : $Q_3$ est dans $[40 ; 60[$ et l’interpolation donne $Q_3 = 51{,}83$.",
          "L’écart interquartile est la différence des deux quartiles : $33{,}97$."
        ],
        "conclusion": "$50$ % des élèves ont leur temps de sport compris entre $17{,}86$ et $51{,}83$ minutes, dans un intervalle d’amplitude $33{,}97$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’écart absolu moyen",
          "stepTheme": "L’écart absolu moyen",
          "stepBadge": "L’écart absolu moyen",
          "paragraphText": "• Écart absolu moyen : noté $e_m$, c’est la moyenne des écarts absolus entre les centres des classes et la moyenne, pondérés par les effectifs.\nInterprétation de la leçon : il indique la distance moyenne entre la moyenne et les valeurs de la série.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q1",
            "type": "mcq",
            "prompt": "L’écart absolu moyen indique :",
            "options": [
              "La distance moyenne entre la moyenne et les valeurs de la série",
              "La plus grande valeur de la série",
              "La différence entre les quartiles",
              "La valeur centrale de la série"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la moyenne des distances des centres à la moyenne, comptées positivement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les écarts absolus du temps de sport",
          "stepTheme": "Les écarts absolus du temps de sport",
          "stepBadge": "Les écarts absolus du temps de sport",
          "paragraphText": "Avec la moyenne $39{,}84$, les écarts absolus des centres $10$, $30$, $50$, $80$, $120$, $170$ sont $29{,}84$, $9{,}84$, $10{,}16$, $40{,}16$, $80{,}16$, $130{,}16$.\nLes produits par les effectifs totalisent $2895{,}68$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q2",
            "type": "mcq",
            "prompt": "L’écart absolu du centre $50$ par rapport à la moyenne $39{,}84$ est :",
            "options": [
              "$89{,}84$",
              "$10{,}16$",
              "$-10{,}16$",
              "$39{,}84$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La valeur absolue de la différence entre $50$ et $39{,}84$ vaut $10{,}16$ : un écart absolu est toujours positif ou nul."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La valeur de l’écart absolu moyen du sport",
          "stepTheme": "La valeur de l’écart absolu moyen du sport",
          "stepBadge": "La valeur de l’écart absolu moyen du sport",
          "paragraphText": "En divisant la somme pondérée $2895{,}68$ par l’effectif total $125$, on obtient un écart absolu moyen de $23{,}17$ minutes.\nInterprétation : le temps de sport hebdomadaire d’un élève est à $23{,}17$ minutes de la moyenne.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q3",
            "type": "mcq",
            "prompt": "L’écart absolu moyen du temps de sport vaut environ :",
            "options": [
              "$31{,}44$ minutes",
              "$39{,}84$ minutes",
              "$23{,}17$ minutes",
              "$988{,}77$ minutes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La somme pondérée des écarts absolus vaut $2895{,}68$ pour $125$ élèves : le quotient donne $23{,}17$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’écart interquartile",
          "stepTheme": "L’écart interquartile",
          "stepBadge": "L’écart interquartile",
          "paragraphText": "• Écart interquartile : c’est la différence entre le troisième et le premier quartile.\nInterprétation de la leçon : $50$ % des valeurs sont comprises entre le premier quartile et le troisième quartile.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q4",
            "type": "mcq",
            "prompt": "L’écart interquartile est égal à :",
            "options": [
              "$Q_3 + Q_1$",
              "$Q_2 - Q_1$",
              "La médiane",
              "$Q_3 - Q_1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, l’écart interquartile est la différence entre le troisième et le premier quartile."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Les quartiles du temps de sport",
          "stepTheme": "Les quartiles du temps de sport",
          "stepBadge": "Les quartiles du temps de sport",
          "paragraphText": "Les effectifs cumulés croissants du sport sont $35$, $76$, $106$, $118$, $123$, $125$. Le quart de l’effectif vaut $31{,}25$, donc $Q_1$ est dans $[0 ; 20[$ et vaut $17{,}86$ par interpolation.\nLes trois quarts valent $93{,}75$, donc $Q_3$ est dans $[40 ; 60[$ et vaut $51{,}83$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q5",
            "type": "mcq",
            "prompt": "Le premier quartile du temps de sport, par interpolation linéaire, vaut environ :",
            "options": [
              "$17{,}86$",
              "$31{,}25$",
              "$51{,}83$",
              "$20{,}00$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le rang $31{,}25$ est atteint avant le cumul $35$ : dans la classe $[0 ; 20[$, l’interpolation donne $17{,}86$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L’écart interquartile du temps de sport",
          "stepTheme": "L’écart interquartile du temps de sport",
          "stepBadge": "L’écart interquartile du temps de sport",
          "paragraphText": "• Piège : ne pas confondre l’écart interquartile avec l’étendue de la série, qui vaut ici $200$.\nL’écart interquartile vaut $33{,}97$, différence entre $Q_3 = 51{,}83$ et $Q_1 = 17{,}86$.\nL’étendue de la série est $200$ : l’intervalle interquartile représente environ un quart de l’étendue, et $50$ % des élèves ont leur temps de sport proche de la médiane.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l15_statistiques_p07_q6",
            "type": "mcq",
            "prompt": "L’écart interquartile du temps de sport vaut environ :",
            "options": [
              "$51{,}83$",
              "$33{,}97$",
              "$17{,}86$",
              "$69{,}69$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On retranche le premier quartile du troisième : la différence donne $33{,}97$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q1",
          "type": "mcq",
          "prompt": "L’écart absolu moyen indique :",
          "options": [
            "La distance moyenne entre la moyenne et les valeurs de la série",
            "La plus grande valeur de la série",
            "La différence entre les quartiles",
            "La valeur centrale de la série"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la moyenne des distances des centres à la moyenne, comptées positivement."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q2",
          "type": "mcq",
          "prompt": "L’écart absolu du centre $50$ par rapport à la moyenne $39{,}84$ est :",
          "options": [
            "$89{,}84$",
            "$10{,}16$",
            "$-10{,}16$",
            "$39{,}84$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La valeur absolue de la différence entre $50$ et $39{,}84$ vaut $10{,}16$ : un écart absolu est toujours positif ou nul."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q3",
          "type": "mcq",
          "prompt": "L’écart absolu moyen du temps de sport vaut environ :",
          "options": [
            "$31{,}44$ minutes",
            "$39{,}84$ minutes",
            "$23{,}17$ minutes",
            "$988{,}77$ minutes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La somme pondérée des écarts absolus vaut $2895{,}68$ pour $125$ élèves : le quotient donne $23{,}17$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q4",
          "type": "mcq",
          "prompt": "L’écart interquartile est égal à :",
          "options": [
            "$Q_3 + Q_1$",
            "$Q_2 - Q_1$",
            "La médiane",
            "$Q_3 - Q_1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, l’écart interquartile est la différence entre le troisième et le premier quartile."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q5",
          "type": "mcq",
          "prompt": "Le premier quartile du temps de sport, par interpolation linéaire, vaut environ :",
          "options": [
            "$17{,}86$",
            "$31{,}25$",
            "$51{,}83$",
            "$20{,}00$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rang $31{,}25$ est atteint avant le cumul $35$ : dans la classe $[0 ; 20[$, l’interpolation donne $17{,}86$."
        },
        {
          "id": "premiere_d_maths_numerique_l15_statistiques_p07_q6",
          "type": "mcq",
          "prompt": "L’écart interquartile du temps de sport vaut environ :",
          "options": [
            "$51{,}83$",
            "$33{,}97$",
            "$17{,}86$",
            "$69{,}69$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On retranche le premier quartile du troisième : la différence donne $33{,}97$."
        }
      ]
    }
  ]
};
