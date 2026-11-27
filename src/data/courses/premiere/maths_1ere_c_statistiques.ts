import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Statistiques » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Statistiques » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L17_STATISTIQUES: CurriculumChapter = {
  "id": "premiere_c_maths_numerique_l17_statistiques",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 17,
  "title": "Leçon 17 : Statistiques",
  "summary": "La leçon traite des séries statistiques regroupées en classes : amplitude, centre et densité, classe modale, moyenne, médiane et quartiles par interpolation linéaire, représentations graphiques, puis les caractéristiques de dispersion (variance, écart type, écart absolu moyen, écart interquartile) appliquées au choix entre deux machines.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Statistiques » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_numerique_l17_statistiques_p01",
      "order": 1,
      "title": "Séries regroupées en classes : amplitude, centre, densité",
      "summary": "Décrire une série statistique regroupée en classes et calculer amplitudes, centres et densités.",
      "conceptExplanation": "Lorsqu’il est question d’une série statistique regroupée en classes, chaque classe est définie par ses bornes, son effectif et son centre.\nL’amplitude de la classe est la différence de ses bornes, et son centre est la moyenne des deux bornes.\nOn appelle densité d’une classe le quotient de l’effectif de la classe par l’amplitude de cette classe.\nDans l’exemple de la leçon sur les coopératives de planteurs de cacao, les densités des cinq classes valent environ $0{,}43$, $1{,}33$, $1$, $1{,}5$ et $0{,}85$.",
      "keyRule": "Centre égale milieu de la classe, densité égale effectif divisé par amplitude : les deux réflexes de lecture d’un tableau en classes.",
      "formulas": [
        {
          "name": "Centre de classe",
          "formula": "c_i = \\frac{x_i + x_{i + 1}}{2}"
        },
        {
          "name": "Densité de classe",
          "formula": "d_i = \\frac{n_i}{\\text{amplitude}}"
        }
      ],
      "workedExample": {
        "title": "Le regroupement des versements de la banque",
        "statement": "Les montants des versements d’une agence bancaire sont regroupés en classes d’amplitude $300$ à partir de $0$. Donne les centres des cinq classes.",
        "methodSteps": [
          "Chaque classe a pour amplitude $300$ : les bornes se succèdent de $300$ en $300$.",
          "Le centre de chaque classe est le milieu de ses bornes."
        ],
        "conclusion": "Les centres sont $150$, $450$, $750$, $1050$ et $1350$, pour des effectifs de $19$, $14$, $6$, $8$ et $2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Amplitude et centre d’une classe",
          "stepTheme": "Amplitude et centre d’une classe",
          "stepBadge": "Amplitude et centre d’une classe",
          "paragraphText": "• Rappel : pour une série regroupée en classes, l’amplitude de la classe formée par les bornes $x_i$ et $x_{i + 1}$ est la différence des bornes.\nLe centre de la classe est la moyenne des deux bornes.",
          "formula": {
            "name": "Centre de classe",
            "formula": "c_i = \\frac{x_i + x_{i + 1}}{2}"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p01_q1",
            "type": "mcq",
            "prompt": "Le centre d’une classe est :",
            "options": [
              "L’effectif de la classe",
              "La borne supérieure de la classe",
              "La différence des bornes",
              "La moyenne des deux bornes de la classe"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le centre est le milieu de la classe : la moyenne de ses deux bornes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les centres de l’exemple de la banque",
          "stepTheme": "Les centres de l’exemple de la banque",
          "stepBadge": "Les centres de l’exemple de la banque",
          "paragraphText": "• Exemple de la leçon : les versements d’une agence bancaire sont regroupés en classes d’amplitude $300$, la première commençant à $0$.\nLes centres sont donc $150$, $450$, $750$, $1050$ et $1350$, et les effectifs correspondants sont $19$, $14$, $6$, $8$ et $2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p01_q2",
            "type": "mcq",
            "prompt": "Le centre de la deuxième classe de cet exemple est :",
            "options": [
              "$600$",
              "$450$",
              "$750$",
              "$300$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La deuxième classe va de $300$ à $600$ : son centre est la moyenne de $300$ et de $600$, soit $450$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La densité d’une classe",
          "stepTheme": "La densité d’une classe",
          "stepBadge": "La densité d’une classe",
          "paragraphText": "• Définition : on appelle densité d’une classe le quotient de l’effectif de la classe par l’amplitude de cette classe.\nLa densité mesure la concentration des individus dans la classe.",
          "formula": {
            "name": "Densité",
            "formula": "d_i = \\frac{n_i}{\\text{amplitude}}"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p01_q3",
            "type": "mcq",
            "prompt": "La densité d’une classe est :",
            "options": [
              "L’amplitude divisée par l’effectif",
              "L’effectif divisé par l’amplitude",
              "Le centre divisé par l’effectif",
              "L’effectif multiplié par l’amplitude"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, la densité est le quotient de l’effectif par l’amplitude."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les densités des coopératives de cacao",
          "stepTheme": "Les densités des coopératives de cacao",
          "stepBadge": "Les densités des coopératives de cacao",
          "paragraphText": "• Exemple de la leçon : pour les coopératives de planteurs de cacao, la première classe a un effectif de $13$ et une amplitude de $30$.\nSa densité vaut donc environ $0{,}43$, comme indiqué dans le tableau de la leçon.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p01_q4",
            "type": "mcq",
            "prompt": "La densité de cette première classe est environ :",
            "options": [
              "$1{,}5$",
              "$0{,}85$",
              "$1{,}33$",
              "$0{,}43$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On divise l’effectif par l’amplitude : le quotient de $13$ par $30$ vaut environ $0{,}43$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le tableau complet des densités du cacao",
          "stepTheme": "Le tableau complet des densités du cacao",
          "stepBadge": "Le tableau complet des densités du cacao",
          "paragraphText": "• Exemple de la leçon : les cinq classes des coopératives ont pour densités environ $0{,}43$, $1{,}33$, $1$, $1{,}5$ et $0{,}85$.\nLa plus grande densité correspond à la classe allant de $70$ à $80$, d’effectif $15$ et d’amplitude $10$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p01_q5",
            "type": "mcq",
            "prompt": "La classe de plus grande densité dans cet exemple est :",
            "options": [
              "La classe de $0$ à $30$",
              "La classe de $30$ à $45$",
              "La classe de $45$ à $70$",
              "La classe de $70$ à $80$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sa densité vaut le quotient de $15$ par $10$, soit $1{,}5$ : c’est la plus grande des cinq densités."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le piège des classes d’amplitudes différentes",
          "stepTheme": "Le piège des classes d’amplitudes différentes",
          "stepBadge": "Le piège des classes d’amplitudes différentes",
          "paragraphText": "• Piège : quand les amplitudes des classes sont différentes, comparer les seuls effectifs ne suffit pas pour juger de la concentration.\nC’est la densité, qui tient compte de l’amplitude, qui permet la comparaison.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p01_q6",
            "type": "mcq",
            "prompt": "Pour comparer la concentration de classes d’amplitudes différentes, on compare :",
            "options": [
              "Les centres des classes",
              "Les amplitudes seules",
              "Les effectifs seuls",
              "Les densités des classes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La densité rapporte l’effectif à l’amplitude : elle seule rend les classes comparables."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p01_q1",
          "type": "mcq",
          "prompt": "Le centre d’une classe est :",
          "options": [
            "L’effectif de la classe",
            "La borne supérieure de la classe",
            "La différence des bornes",
            "La moyenne des deux bornes de la classe"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le centre est le milieu de la classe : la moyenne de ses deux bornes."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p01_q2",
          "type": "mcq",
          "prompt": "Le centre de la deuxième classe de cet exemple est :",
          "options": [
            "$600$",
            "$450$",
            "$750$",
            "$300$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La deuxième classe va de $300$ à $600$ : son centre est la moyenne de $300$ et de $600$, soit $450$."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p01_q3",
          "type": "mcq",
          "prompt": "La densité d’une classe est :",
          "options": [
            "L’amplitude divisée par l’effectif",
            "L’effectif divisé par l’amplitude",
            "Le centre divisé par l’effectif",
            "L’effectif multiplié par l’amplitude"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, la densité est le quotient de l’effectif par l’amplitude."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p01_q4",
          "type": "mcq",
          "prompt": "La densité de cette première classe est environ :",
          "options": [
            "$1{,}5$",
            "$0{,}85$",
            "$1{,}33$",
            "$0{,}43$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On divise l’effectif par l’amplitude : le quotient de $13$ par $30$ vaut environ $0{,}43$."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p01_q5",
          "type": "mcq",
          "prompt": "La classe de plus grande densité dans cet exemple est :",
          "options": [
            "La classe de $0$ à $30$",
            "La classe de $30$ à $45$",
            "La classe de $45$ à $70$",
            "La classe de $70$ à $80$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sa densité vaut le quotient de $15$ par $10$, soit $1{,}5$ : c’est la plus grande des cinq densités."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p01_q6",
          "type": "mcq",
          "prompt": "Pour comparer la concentration de classes d’amplitudes différentes, on compare :",
          "options": [
            "Les centres des classes",
            "Les amplitudes seules",
            "Les effectifs seuls",
            "Les densités des classes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La densité rapporte l’effectif à l’amplitude : elle seule rend les classes comparables."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l17_statistiques_p02",
      "order": 2,
      "title": "Classe modale et moyenne d’une série en classes",
      "summary": "Déterminer la classe modale d’une série en classes et calculer sa moyenne à partir des centres.",
      "conceptExplanation": "On appelle classe modale toute classe dont la densité est maximale ; dans l’exemple des coopératives de cacao, c’est la classe allant de $70$ à $80$, qui comporte la plus grande concentration de coopératives. Si toutes les classes ont la même amplitude, une classe modale est une classe d’effectif maximal.\nLa moyenne d’une série statistique regroupée en classes est le quotient de la somme des produits des effectifs par les centres, par l’effectif total ; avec les fréquences, c’est la somme des produits des fréquences par les centres.\nPour les coopératives, cette moyenne vaut environ $55{,}97$ tonnes.",
      "keyRule": "Modale égale densité maximale ; moyenne égale somme des effectifs fois centres, divisée par l’effectif total.",
      "formulas": [
        {
          "name": "Moyenne avec les effectifs",
          "formula": "\\bar{x} = \\frac{1}{N} \\sum n_i c_i"
        },
        {
          "name": "Moyenne avec les fréquences",
          "formula": "\\bar{x} = \\sum f_i c_i"
        }
      ],
      "workedExample": {
        "title": "La moyenne des coopératives de cacao (exercice de fixation)",
        "statement": "Calcule la moyenne de la série des productions des coopératives de cacao.",
        "methodSteps": [
          "On calcule les centres des classes : $15$, $37{,}5$, $57{,}5$, $75$ et $90$.",
          "On calcule les produits des effectifs par les centres et on les additionne : le total est $5037{,}5$.",
          "On divise par l’effectif total, qui est $90$."
        ],
        "conclusion": "La production moyenne de l’ensemble des coopératives est de $55{,}97$ tonnes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La classe modale",
          "stepTheme": "La classe modale",
          "stepBadge": "La classe modale",
          "paragraphText": "• Définition : on appelle classe modale toute classe dont la densité est maximale.\nDans l’exemple des coopératives de cacao, la classe modale est celle qui a la plus grande concentration de coopératives.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p02_q1",
            "type": "mcq",
            "prompt": "Une classe modale est une classe :",
            "options": [
              "Dont le centre est maximal",
              "D’amplitude maximale",
              "D’effectif nul",
              "Dont la densité est maximale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, la classe modale est celle dont la densité est la plus grande."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La classe modale des coopératives",
          "stepTheme": "La classe modale des coopératives",
          "stepBadge": "La classe modale des coopératives",
          "paragraphText": "• Exemple de la leçon : les densités des classes des coopératives sont $0{,}43$, $1{,}33$, $1$, $1{,}5$ et $0{,}85$.\nLa plus grande est $1{,}5$ : la classe modale est donc la classe allant de $70$ à $80$ tonnes.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p02_q2",
            "type": "mcq",
            "prompt": "La classe modale de cette série est :",
            "options": [
              "La classe de $45$ à $70$",
              "La classe de $70$ à $80$",
              "La classe de $80$ à $100$",
              "La classe de $0$ à $30$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La densité $1{,}5$ de cette classe est la plus grande : elle comporte la plus grande concentration de coopératives."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cas particulier des amplitudes égales",
          "stepTheme": "Le cas particulier des amplitudes égales",
          "stepBadge": "Le cas particulier des amplitudes égales",
          "paragraphText": "• Cas particulier de la leçon : si toutes les classes ont la même amplitude, alors une classe modale est une classe dont l’effectif est maximal.\nDans ce cas seulement, la comparaison des densités revient à celle des effectifs.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p02_q3",
            "type": "mcq",
            "prompt": "Si toutes les classes ont la même amplitude, la classe modale est :",
            "options": [
              "Une classe d’effectif maximal",
              "La première classe",
              "La classe de centre maximal",
              "Une classe quelconque"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À amplitudes égales, la densité est proportionnelle à l’effectif : le maximum de densité est le maximum d’effectif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La formule de la moyenne en classes",
          "stepTheme": "La formule de la moyenne en classes",
          "stepBadge": "La formule de la moyenne en classes",
          "paragraphText": "• Propriété : la moyenne d’une série regroupée en classes est le quotient de la somme des produits des effectifs par les centres, par l’effectif total.\nEn utilisant les fréquences, la moyenne est la somme des produits des fréquences par les centres.",
          "formula": {
            "name": "Moyenne en classes",
            "formula": "\\bar{x} = \\frac{1}{N} \\sum n_i c_i"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p02_q4",
            "type": "mcq",
            "prompt": "La moyenne d’une série en classes se calcule à partir :",
            "options": [
              "Des amplitudes seulement",
              "Des densités seulement",
              "Des bornes inférieures des classes",
              "Des centres des classes, pondérés par les effectifs"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Chaque classe est représentée par son centre, avec le poids de son effectif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La moyenne des coopératives de cacao",
          "stepTheme": "La moyenne des coopératives de cacao",
          "stepBadge": "La moyenne des coopératives de cacao",
          "paragraphText": "• Exercice de fixation : pour les coopératives, les produits des effectifs par les centres valent $195$, $750$, des produits intermédiaires, et la somme totale de ces produits vaut $5037{,}5$ pour un effectif total de $90$.\nLa moyenne de la série est donc environ $55{,}97$ tonnes.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p02_q5",
            "type": "mcq",
            "prompt": "La production moyenne des coopératives est environ :",
            "options": [
              "$60{,}5$ tonnes",
              "$90$ tonnes",
              "$50$ tonnes",
              "$55{,}97$ tonnes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On divise la somme des produits, $5037{,}5$, par l’effectif total $90$ : on obtient environ $55{,}97$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le piège de la moyenne sans les centres",
          "stepTheme": "Le piège de la moyenne sans les centres",
          "stepBadge": "Le piège de la moyenne sans les centres",
          "paragraphText": "• Piège : pour une série en classes, on ne connaît pas les valeurs individuelles ; la moyenne se calcule avec les centres des classes, qui représentent chaque classe.\nUtiliser une borne au lieu du centre fausse le résultat.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p02_q6",
            "type": "mcq",
            "prompt": "Dans le calcul de la moyenne d’une série en classes, chaque classe est représentée par :",
            "options": [
              "Sa borne inférieure",
              "Sa borne supérieure",
              "Son amplitude",
              "Son centre"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le centre est la valeur représentative de la classe dans toutes les formules de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p02_q1",
          "type": "mcq",
          "prompt": "Une classe modale est une classe :",
          "options": [
            "Dont le centre est maximal",
            "D’amplitude maximale",
            "D’effectif nul",
            "Dont la densité est maximale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, la classe modale est celle dont la densité est la plus grande."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p02_q2",
          "type": "mcq",
          "prompt": "La classe modale de cette série est :",
          "options": [
            "La classe de $45$ à $70$",
            "La classe de $70$ à $80$",
            "La classe de $80$ à $100$",
            "La classe de $0$ à $30$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La densité $1{,}5$ de cette classe est la plus grande : elle comporte la plus grande concentration de coopératives."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p02_q3",
          "type": "mcq",
          "prompt": "Si toutes les classes ont la même amplitude, la classe modale est :",
          "options": [
            "Une classe d’effectif maximal",
            "La première classe",
            "La classe de centre maximal",
            "Une classe quelconque"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À amplitudes égales, la densité est proportionnelle à l’effectif : le maximum de densité est le maximum d’effectif."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p02_q4",
          "type": "mcq",
          "prompt": "La moyenne d’une série en classes se calcule à partir :",
          "options": [
            "Des amplitudes seulement",
            "Des densités seulement",
            "Des bornes inférieures des classes",
            "Des centres des classes, pondérés par les effectifs"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Chaque classe est représentée par son centre, avec le poids de son effectif."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p02_q5",
          "type": "mcq",
          "prompt": "La production moyenne des coopératives est environ :",
          "options": [
            "$60{,}5$ tonnes",
            "$90$ tonnes",
            "$50$ tonnes",
            "$55{,}97$ tonnes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On divise la somme des produits, $5037{,}5$, par l’effectif total $90$ : on obtient environ $55{,}97$."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p02_q6",
          "type": "mcq",
          "prompt": "Dans le calcul de la moyenne d’une série en classes, chaque classe est représentée par :",
          "options": [
            "Sa borne inférieure",
            "Sa borne supérieure",
            "Son amplitude",
            "Son centre"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le centre est la valeur représentative de la classe dans toutes les formules de la leçon."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l17_statistiques_p03",
      "order": 3,
      "title": "Médiane et quartiles d’une série en classes",
      "summary": "Déterminer la médiane et les quartiles d’une série continue, graphiquement et par interpolation linéaire.",
      "conceptExplanation": "La médiane d’une série statistique continue est un nombre qui sépare les valeurs ordonnées de la série en deux familles de même effectif. Elle se détermine graphiquement comme l’abscisse du point de la courbe cumulative des effectifs dont l’ordonnée est la moitié de l’effectif total, ou par le calcul à l’aide d’une interpolation linéaire.\nLe premier quartile est la valeur telle que le quart des valeurs sont inférieures ou égales à ce nombre, le deuxième quartile est la médiane, et le troisième quartile correspond aux trois quarts des valeurs.\nDans l’exemple des heures d’absence de la leçon, la médiane vaut environ $9{,}87$, le premier quartile $6{,}5$ et le troisième quartile $13{,}25$.",
      "keyRule": "Médiane à la moitié des rangs, premier quartile au quart, troisième quartile aux trois quarts : toujours par le polygone cumulé ou l’interpolation.",
      "formulas": [
        {
          "name": "Premier quartile",
          "formula": "Q_1 \\text{ au rang } \\frac{N}{4}"
        },
        {
          "name": "Troisième quartile",
          "formula": "Q_3 \\text{ au rang } \\frac{3N}{4}"
        }
      ],
      "workedExample": {
        "title": "La médiane des heures d’absence par interpolation",
        "statement": "Détermine par le calcul la médiane de la série des heures d’absence des élèves.",
        "methodSteps": [
          "La moitié de l’effectif total $104$ est $52$, comprise entre les effectifs cumulés $40$ et $72$.",
          "La médiane est donc dans la classe allant de $8$ à $13$.",
          "L’interpolation linéaire proportionne les écarts d’abscisses et d’effectifs cumulés."
        ],
        "conclusion": "La médiane vaut environ $9{,}87$ : la moitié des élèves a un nombre d’heures d’absence supérieur ou égal à cette valeur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de la médiane",
          "stepTheme": "La définition de la médiane",
          "stepBadge": "La définition de la médiane",
          "paragraphText": "• Définition : la médiane d’une série statistique continue est un nombre qui sépare les valeurs ordonnées de la série en deux familles de même effectif.\nC’est un nombre tel qu’au moins la moitié des individus ont une valeur supérieure ou égale à ce nombre.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p03_q1",
            "type": "mcq",
            "prompt": "La médiane d’une série statistique est un nombre qui :",
            "options": [
              "Égale la plus grande valeur",
              "Égale le centre de la classe modale",
              "Égale la moyenne de la série",
              "Sépare les valeurs ordonnées en deux familles de même effectif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, la médiane partage la série ordonnée en deux moitiés de même effectif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Déterminer la médiane graphiquement",
          "stepTheme": "Déterminer la médiane graphiquement",
          "stepBadge": "Déterminer la médiane graphiquement",
          "paragraphText": "• Méthode graphique : la médiane est l’abscisse du point de la courbe cumulative des effectifs dont l’ordonnée est la moitié de l’effectif total.\nAvec les fréquences cumulées, on cherche de même l’abscisse correspondant à une ordonnée de $0{,}5$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p03_q2",
            "type": "mcq",
            "prompt": "Graphiquement, la médiane correspond sur la courbe cumulative à l’ordonnée :",
            "options": [
              "Le quart de l’effectif total",
              "La moitié de l’effectif total",
              "Le double de l’effectif total",
              "L’effectif total"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La médiane est lue à la moitié de l’effectif total sur le polygone des effectifs cumulés croissants."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La médiane des heures d’absence",
          "stepTheme": "La médiane des heures d’absence",
          "stepBadge": "La médiane des heures d’absence",
          "paragraphText": "• Exemple de la leçon : pour les heures d’absence des élèves, l’effectif total est $104$ et les effectifs cumulés croissants sont $12$, $40$, $72$, $96$ et $104$.\nLa moitié de l’effectif est $52$, comprise entre le quarantième et le soixante-douzième rang : la médiane est dans la classe allant de $8$ à $13$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p03_q3",
            "type": "mcq",
            "prompt": "La médiane de cette série se trouve dans la classe :",
            "options": [
              "De $1$ à $5$",
              "De $5$ à $8$",
              "De $8$ à $13$",
              "De $14$ à $21$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le rang $52$ est atteint dans la classe dont l’effectif cumulé passe de $40$ à $72$ : la classe de $8$ à $13$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L’interpolation linéaire pour la médiane",
          "stepTheme": "L’interpolation linéaire pour la médiane",
          "stepBadge": "L’interpolation linéaire pour la médiane",
          "paragraphText": "• Méthode de calcul : la détermination de la médiane par le calcul se fait par interpolation linéaire dans la classe qui la contient.\nOn proportionne l’écart de la médiane à la borne inférieure avec l’écart des rangs, comme le fait l’exemple de la leçon, qui obtient une médiane d’environ $9{,}87$.",
          "formula": {
            "name": "Interpolation de la médiane",
            "formula": "\\frac{M_e - 8}{13 - 8} = \\frac{52 - 40}{72 - 40}"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p03_q4",
            "type": "mcq",
            "prompt": "La médiane des heures d’absence vaut environ :",
            "options": [
              "$9{,}87$",
              "$8$",
              "$13$",
              "$9$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’interpolation linéaire dans la classe de $8$ à $13$ donne une médiane d’environ $9{,}87$ ; la moitié des élèves a un nombre d’heures d’absence supérieur ou égal à cette valeur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les quartiles Q1, Q2 et Q3",
          "stepTheme": "Les quartiles Q1, Q2 et Q3",
          "stepBadge": "Les quartiles Q1, Q2 et Q3",
          "paragraphText": "• Définitions : les valeurs de la série étant ordonnées, le premier quartile est la valeur telle que le quart des valeurs lui sont inférieures ou égales ; le deuxième quartile est la médiane.\nLe troisième quartile est la valeur telle que les trois quarts des valeurs lui sont inférieurs ou égaux.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p03_q5",
            "type": "mcq",
            "prompt": "Le deuxième quartile d’une série est :",
            "options": [
              "Le premier quartile",
              "La moyenne",
              "La médiane",
              "Le troisième quartile"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par définition, le deuxième quartile est la médiane de la série."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les quartiles des heures d’absence",
          "stepTheme": "Les quartiles des heures d’absence",
          "stepBadge": "Les quartiles des heures d’absence",
          "paragraphText": "• Exemple de la leçon : le premier quartile correspond au rang $26$ et le troisième au rang $78$ de la série des absences.\nPar interpolation linéaire, le premier quartile vaut $6{,}5$ et le troisième vaut $13{,}25$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p03_q6",
            "type": "mcq",
            "prompt": "Le troisième quartile de cette série vaut :",
            "options": [
              "$6{,}5$",
              "$9{,}87$",
              "$13{,}25$",
              "$17$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le rang des trois quarts est $78$, situé dans la classe de $13$ à $14$ : l’interpolation donne $13{,}25$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p03_q1",
          "type": "mcq",
          "prompt": "La médiane d’une série statistique est un nombre qui :",
          "options": [
            "Égale la plus grande valeur",
            "Égale le centre de la classe modale",
            "Égale la moyenne de la série",
            "Sépare les valeurs ordonnées en deux familles de même effectif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, la médiane partage la série ordonnée en deux moitiés de même effectif."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p03_q2",
          "type": "mcq",
          "prompt": "Graphiquement, la médiane correspond sur la courbe cumulative à l’ordonnée :",
          "options": [
            "Le quart de l’effectif total",
            "La moitié de l’effectif total",
            "Le double de l’effectif total",
            "L’effectif total"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La médiane est lue à la moitié de l’effectif total sur le polygone des effectifs cumulés croissants."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p03_q3",
          "type": "mcq",
          "prompt": "La médiane de cette série se trouve dans la classe :",
          "options": [
            "De $1$ à $5$",
            "De $5$ à $8$",
            "De $8$ à $13$",
            "De $14$ à $21$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le rang $52$ est atteint dans la classe dont l’effectif cumulé passe de $40$ à $72$ : la classe de $8$ à $13$."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p03_q4",
          "type": "mcq",
          "prompt": "La médiane des heures d’absence vaut environ :",
          "options": [
            "$9{,}87$",
            "$8$",
            "$13$",
            "$9$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’interpolation linéaire dans la classe de $8$ à $13$ donne une médiane d’environ $9{,}87$ ; la moitié des élèves a un nombre d’heures d’absence supérieur ou égal à cette valeur."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p03_q5",
          "type": "mcq",
          "prompt": "Le deuxième quartile d’une série est :",
          "options": [
            "Le premier quartile",
            "La moyenne",
            "La médiane",
            "Le troisième quartile"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par définition, le deuxième quartile est la médiane de la série."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p03_q6",
          "type": "mcq",
          "prompt": "Le troisième quartile de cette série vaut :",
          "options": [
            "$6{,}5$",
            "$9{,}87$",
            "$13{,}25$",
            "$17$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le rang des trois quarts est $78$, situé dans la classe de $13$ à $14$ : l’interpolation donne $13{,}25$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l17_statistiques_p04",
      "order": 4,
      "title": "Histogramme, polygones et courbes cumulatives",
      "summary": "Construire et lire un histogramme, un polygone des fréquences et une courbe cumulative.",
      "conceptExplanation": "L’histogramme d’une série regroupée en classes est constitué de rectangles juxtaposés : l’aire de chaque rectangle est proportionnelle à l’effectif ou à la fréquence de la classe, les largeurs sont proportionnelles aux amplitudes et les hauteurs aux densités.\nLe polygone des effectifs ou des fréquences est obtenu en joignant les milieux successifs des côtés les plus hauts de chaque rectangle de l’histogramme.\nLa courbe cumulative des effectifs relie les effectifs cumulés croissants par des segments affines sur chaque classe ; c’est elle qui permet les lectures graphiques de la médiane et des quartiles.",
      "keyRule": "Dans un histogramme, c’est l’aire qui parle : largeur pour l’amplitude, hauteur pour la densité.",
      "formulas": [
        {
          "name": "Aire d’un rectangle",
          "formula": "\\text{aire} \\propto \\text{effectif}"
        }
      ],
      "workedExample": {
        "title": "Compléter le tableau de l’exercice de fixation",
        "statement": "Pour la série de l’exercice de fixation donnée en fréquences, complète les amplitudes, centres et densités des classes.",
        "methodSteps": [
          "On calcule chaque amplitude comme différence des bornes et chaque centre comme milieu de la classe.",
          "On calcule chaque densité comme le quotient de la fréquence par l’amplitude."
        ],
        "conclusion": "On obtient notamment les densités $0{,}15$, environ $0{,}23$, $0{,}25$, $0{,}2$ et $0{,}075$, qui sont les hauteurs des rectangles de l’histogramme des fréquences."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’histogramme d’une série en classes",
          "stepTheme": "L’histogramme d’une série en classes",
          "stepBadge": "L’histogramme d’une série en classes",
          "paragraphText": "• Définition : l’histogramme d’une série regroupée en classes est constitué de rectangles juxtaposés.\nL’aire de chaque rectangle est proportionnelle à l’effectif, ou à la fréquence, de la classe correspondante.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p04_q1",
            "type": "mcq",
            "prompt": "Dans un histogramme, l’aire de chaque rectangle est proportionnelle :",
            "options": [
              "À l’effectif ou à la fréquence de la classe",
              "À l’amplitude seule",
              "À la médiane",
              "Au centre de la classe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la règle de construction de la leçon : c’est l’aire, et non la hauteur seule, qui représente l’effectif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Largeurs et hauteurs des rectangles",
          "stepTheme": "Largeurs et hauteurs des rectangles",
          "stepBadge": "Largeurs et hauteurs des rectangles",
          "paragraphText": "• Propriétés : les largeurs des rectangles sont proportionnelles aux amplitudes des classes.\nLes hauteurs des rectangles sont proportionnelles aux densités des classes.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p04_q2",
            "type": "mcq",
            "prompt": "Dans un histogramme, les hauteurs des rectangles sont proportionnelles :",
            "options": [
              "Aux effectifs dans tous les cas",
              "Aux centres des classes",
              "Aux densités des classes",
              "Aux effectifs cumulés"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La hauteur représente la densité ; c’est pour cela que l’aire donne l’effectif même si les amplitudes diffèrent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Compléter le tableau de l’exercice de fixation",
          "stepTheme": "Compléter le tableau de l’exercice de fixation",
          "stepBadge": "Compléter le tableau de l’exercice de fixation",
          "paragraphText": "• Exercice de fixation : pour une série donnée en fréquences, on complète les amplitudes, les centres et les densités avant de construire l’histogramme des fréquences.\nLa première classe, allant de $2$ à $3$ avec une fréquence de $0{,}15$, a une amplitude de $1$, un centre de $2{,}5$ et une densité de $0{,}15$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p04_q3",
            "type": "mcq",
            "prompt": "La densité de cette première classe est :",
            "options": [
              "$0{,}15$",
              "$0{,}35$",
              "$0{,}25$",
              "$0{,}075$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La densité est le quotient de la fréquence par l’amplitude : avec une amplitude de $1$, elle égale la fréquence $0{,}15$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une densité avec une amplitude différente de 1",
          "stepTheme": "Une densité avec une amplitude différente de 1",
          "stepBadge": "Une densité avec une amplitude différente de 1",
          "paragraphText": "• Exercice de fixation : la dernière classe, allant de $6$ à $8$ avec une fréquence de $0{,}15$, a une amplitude de $2$.\nSa densité est donc la moitié de sa fréquence, soit $0{,}075$ : c’est la hauteur de son rectangle dans l’histogramme des fréquences.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p04_q4",
            "type": "mcq",
            "prompt": "La densité de cette dernière classe est :",
            "options": [
              "$0{,}15$",
              "$0{,}3$",
              "$0{,}075$",
              "$0{,}25$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On divise la fréquence $0{,}15$ par l’amplitude $2$ : on obtient $0{,}075$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le polygone des effectifs et des fréquences",
          "stepTheme": "Le polygone des effectifs et des fréquences",
          "stepBadge": "Le polygone des effectifs et des fréquences",
          "paragraphText": "• Définition : le polygone des effectifs, ou des fréquences, est obtenu en joignant les milieux successifs des côtés les plus hauts de chaque rectangle de l’histogramme.\nIl donne une lecture rapide de la forme de la distribution.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p04_q5",
            "type": "mcq",
            "prompt": "Le polygone des fréquences s’obtient en joignant :",
            "options": [
              "Les milieux successifs des côtés les plus hauts des rectangles",
              "Les centres des classes sur l’axe des abscisses",
              "Les points de la courbe cumulative",
              "Les coins inférieurs des rectangles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la construction donnée par la leçon, à partir de l’histogramme déjà tracé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les courbes cumulatives",
          "stepTheme": "Les courbes cumulatives",
          "stepBadge": "Les courbes cumulatives",
          "paragraphText": "• Définition : la courbe cumulative des effectifs est la représentation graphique d’une fonction qui vaut $0$ avant la première classe, qui est affine sur chaque classe en reliant les effectifs cumulés croissants, et qui vaut l’effectif total après la dernière classe.\nLa courbe cumulative des fréquences suit le même principe, avec des valeurs entre $0$ et $1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p04_q6",
            "type": "mcq",
            "prompt": "Sur chaque classe, la courbe cumulative des effectifs coïncide avec :",
            "options": [
              "Une fonction affine reliant les effectifs cumulés des bornes",
              "Une parabole",
              "La densité de la classe",
              "Une fonction constante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Entre deux bornes successives, la courbe joint les effectifs cumulés par un segment : c’est une fonction affine par morceaux."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p04_q1",
          "type": "mcq",
          "prompt": "Dans un histogramme, l’aire de chaque rectangle est proportionnelle :",
          "options": [
            "À l’effectif ou à la fréquence de la classe",
            "À l’amplitude seule",
            "À la médiane",
            "Au centre de la classe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la règle de construction de la leçon : c’est l’aire, et non la hauteur seule, qui représente l’effectif."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p04_q2",
          "type": "mcq",
          "prompt": "Dans un histogramme, les hauteurs des rectangles sont proportionnelles :",
          "options": [
            "Aux effectifs dans tous les cas",
            "Aux centres des classes",
            "Aux densités des classes",
            "Aux effectifs cumulés"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La hauteur représente la densité ; c’est pour cela que l’aire donne l’effectif même si les amplitudes diffèrent."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p04_q3",
          "type": "mcq",
          "prompt": "La densité de cette première classe est :",
          "options": [
            "$0{,}15$",
            "$0{,}35$",
            "$0{,}25$",
            "$0{,}075$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La densité est le quotient de la fréquence par l’amplitude : avec une amplitude de $1$, elle égale la fréquence $0{,}15$."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p04_q4",
          "type": "mcq",
          "prompt": "La densité de cette dernière classe est :",
          "options": [
            "$0{,}15$",
            "$0{,}3$",
            "$0{,}075$",
            "$0{,}25$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On divise la fréquence $0{,}15$ par l’amplitude $2$ : on obtient $0{,}075$."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p04_q5",
          "type": "mcq",
          "prompt": "Le polygone des fréquences s’obtient en joignant :",
          "options": [
            "Les milieux successifs des côtés les plus hauts des rectangles",
            "Les centres des classes sur l’axe des abscisses",
            "Les points de la courbe cumulative",
            "Les coins inférieurs des rectangles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la construction donnée par la leçon, à partir de l’histogramme déjà tracé."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p04_q6",
          "type": "mcq",
          "prompt": "Sur chaque classe, la courbe cumulative des effectifs coïncide avec :",
          "options": [
            "Une fonction affine reliant les effectifs cumulés des bornes",
            "Une parabole",
            "La densité de la classe",
            "Une fonction constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Entre deux bornes successives, la courbe joint les effectifs cumulés par un segment : c’est une fonction affine par morceaux."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l17_statistiques_p05",
      "order": 5,
      "title": "Variance et écart type d’une série en classes",
      "summary": "Calculer la variance et l’écart type d’une série regroupée en classes et interpréter la dispersion.",
      "conceptExplanation": "La variance d’une série statistique regroupée en classes est la moyenne pondérée des carrés des écarts des centres à la moyenne ; elle vaut aussi la moyenne pondérée des carrés des centres moins le carré de la moyenne.\nL’écart type, noté $\\sigma$, est la racine carrée de la variance : plus il est élevé, plus la dispersion des valeurs autour de la moyenne est élevée.\nDans l’exercice de fixation de la leçon, le temps de sport de $125$ élèves a une moyenne de $39{,}84$ minutes, une variance d’environ $988{,}77$ et un écart type d’environ $31{,}44$ minutes, jugé élevé.",
      "keyRule": "Variance égale moyenne des carrés moins carré de la moyenne ; écart type égale racine de la variance.",
      "formulas": [
        {
          "name": "Variance",
          "formula": "V = \\frac{1}{N} \\sum n_i c_i^2 - \\bar{x}^2"
        },
        {
          "name": "Écart type",
          "formula": "\\sigma = \\sqrt{V}"
        }
      ],
      "workedExample": {
        "title": "La variance du temps de sport (exercice de fixation)",
        "statement": "Justifie que la moyenne du temps de sport est $39{,}84$ minutes, puis calcule la variance de la série.",
        "methodSteps": [
          "La somme des produits des effectifs par les centres vaut $4980$ pour $125$ élèves : la moyenne vaut $39{,}84$.",
          "La somme des produits des effectifs par les carrés des centres vaut $322\\ 000$.",
          "On applique l’autre formule de la variance avec ces deux totaux."
        ],
        "conclusion": "La variance vaut environ $988{,}77$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La variance : première formule",
          "stepTheme": "La variance : première formule",
          "stepBadge": "La variance : première formule",
          "paragraphText": "• Définition : la variance d’une série regroupée en classes est la moyenne des carrés des écarts des centres à la moyenne, pondérés par les effectifs.\nElle mesure la dispersion des valeurs autour de la moyenne.",
          "formula": {
            "name": "Variance",
            "formula": "V = \\frac{1}{N} \\sum n_i (c_i - \\bar{x})^2"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p05_q1",
            "type": "mcq",
            "prompt": "La variance d’une série est :",
            "options": [
              "La moyenne pondérée des carrés des écarts des centres à la moyenne",
              "Le carré de la médiane",
              "La différence entre la plus grande et la plus petite valeur",
              "La moyenne des écarts simples à la moyenne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, la variance moyenne les carrés des écarts à la moyenne, avec les effectifs comme poids."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’autre formule de la variance",
          "stepTheme": "L’autre formule de la variance",
          "stepBadge": "L’autre formule de la variance",
          "paragraphText": "• Autre formule : la variance est aussi la différence entre la moyenne pondérée des carrés des centres et le carré de la moyenne.\nC’est cette formule qui est utilisée dans les calculs de la leçon, car elle évite de calculer chaque écart.",
          "formula": {
            "name": "Variance, autre formule",
            "formula": "V = \\frac{1}{N} \\sum n_i c_i^2 - \\bar{x}^2"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p05_q2",
            "type": "mcq",
            "prompt": "L’autre formule de la variance s’écrit comme la différence entre :",
            "options": [
              "La moyenne pondérée des carrés des centres et le carré de la moyenne",
              "Le carré de la moyenne et la moyenne des centres",
              "La somme des centres et l’effectif total",
              "La moyenne des centres et la médiane"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La variance vaut la moyenne des carrés moins le carré de la moyenne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La moyenne du temps de sport (exercice de fixation)",
          "stepTheme": "La moyenne du temps de sport (exercice de fixation)",
          "stepBadge": "La moyenne du temps de sport (exercice de fixation)",
          "paragraphText": "• Exercice de fixation : pour le temps de sport hebdomadaire de $125$ élèves, la somme des produits des effectifs par les centres vaut $4980$.\nLa moyenne est donc le quotient de cette somme par $125$, soit $39{,}84$ minutes.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p05_q3",
            "type": "mcq",
            "prompt": "La moyenne de cette série est :",
            "options": [
              "$31{,}44$ minutes",
              "$125$ minutes",
              "$39{,}84$ minutes",
              "$49{,}80$ minutes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On divise la somme des produits, $4980$, par l’effectif total $125$ : on obtient $39{,}84$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La variance du temps de sport",
          "stepTheme": "La variance du temps de sport",
          "stepBadge": "La variance du temps de sport",
          "paragraphText": "• Exercice de fixation : la somme des produits des effectifs par les carrés des centres vaut $322\\ 000$ pour cette même série.\nL’application de l’autre formule donne une variance d’environ $988{,}77$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p05_q4",
            "type": "mcq",
            "prompt": "La variance de cette série vaut environ :",
            "options": [
              "$2576$",
              "$31{,}44$",
              "$39{,}84$",
              "$988{,}77$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule la moyenne des carrés, puis on retranche le carré de la moyenne $39{,}84$ : on obtient environ $988{,}77$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L’écart type",
          "stepTheme": "L’écart type",
          "stepBadge": "L’écart type",
          "paragraphText": "• Définition : l’écart type d’une série statistique, noté $\\sigma$, est la racine carrée de la variance.\nPlus l’écart type est élevé, plus la dispersion des valeurs autour de la moyenne est élevée.",
          "formula": {
            "name": "Écart type",
            "formula": "\\sigma = \\sqrt{V}"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p05_q5",
            "type": "mcq",
            "prompt": "L’écart type est :",
            "options": [
              "Le carré de la variance",
              "La racine carrée de la variance",
              "La variance divisée par l’effectif",
              "La différence entre les quartiles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, l’écart type est la racine carrée de la variance, dans la même unité que les valeurs."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’écart type du temps de sport et son interprétation",
          "stepTheme": "L’écart type du temps de sport et son interprétation",
          "stepBadge": "L’écart type du temps de sport et son interprétation",
          "paragraphText": "• Exercice de fixation : avec une variance d’environ $988{,}77$, l’écart type du temps de sport vaut environ $31{,}44$ minutes.\nLa leçon l’interprète comme élevé : dans la majorité, le temps de sport des élèves n’est pas proche de la moyenne de $39{,}84$ minutes.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p05_q6",
            "type": "mcq",
            "prompt": "L’écart type de cette série vaut environ :",
            "options": [
              "$23{,}17$ minutes",
              "$31{,}44$ minutes",
              "$39{,}84$ minutes",
              "$988{,}77$ minutes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On prend la racine carrée de la variance $988{,}77$ : on obtient environ $31{,}44$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p05_q1",
          "type": "mcq",
          "prompt": "La variance d’une série est :",
          "options": [
            "La moyenne pondérée des carrés des écarts des centres à la moyenne",
            "Le carré de la médiane",
            "La différence entre la plus grande et la plus petite valeur",
            "La moyenne des écarts simples à la moyenne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, la variance moyenne les carrés des écarts à la moyenne, avec les effectifs comme poids."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p05_q2",
          "type": "mcq",
          "prompt": "L’autre formule de la variance s’écrit comme la différence entre :",
          "options": [
            "La moyenne pondérée des carrés des centres et le carré de la moyenne",
            "Le carré de la moyenne et la moyenne des centres",
            "La somme des centres et l’effectif total",
            "La moyenne des centres et la médiane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La variance vaut la moyenne des carrés moins le carré de la moyenne."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p05_q3",
          "type": "mcq",
          "prompt": "La moyenne de cette série est :",
          "options": [
            "$31{,}44$ minutes",
            "$125$ minutes",
            "$39{,}84$ minutes",
            "$49{,}80$ minutes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On divise la somme des produits, $4980$, par l’effectif total $125$ : on obtient $39{,}84$."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p05_q4",
          "type": "mcq",
          "prompt": "La variance de cette série vaut environ :",
          "options": [
            "$2576$",
            "$31{,}44$",
            "$39{,}84$",
            "$988{,}77$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule la moyenne des carrés, puis on retranche le carré de la moyenne $39{,}84$ : on obtient environ $988{,}77$."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p05_q5",
          "type": "mcq",
          "prompt": "L’écart type est :",
          "options": [
            "Le carré de la variance",
            "La racine carrée de la variance",
            "La variance divisée par l’effectif",
            "La différence entre les quartiles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, l’écart type est la racine carrée de la variance, dans la même unité que les valeurs."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p05_q6",
          "type": "mcq",
          "prompt": "L’écart type de cette série vaut environ :",
          "options": [
            "$23{,}17$ minutes",
            "$31{,}44$ minutes",
            "$39{,}84$ minutes",
            "$988{,}77$ minutes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On prend la racine carrée de la variance $988{,}77$ : on obtient environ $31{,}44$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l17_statistiques_p06",
      "order": 6,
      "title": "Écart absolu moyen et écart interquartile",
      "summary": "Calculer l’écart absolu moyen et l’écart interquartile d’une série en classes et les interpréter.",
      "conceptExplanation": "L’écart absolu moyen, noté $e_m$, est la moyenne pondérée des valeurs absolues des écarts des centres à la moyenne ; il indique la distance moyenne entre la moyenne et les valeurs de la série.\nL’écart interquartile est la différence entre le troisième quartile et le premier quartile ; la moitié des valeurs sont comprises entre ces deux quartiles.\nDans l’exercice de fixation de la leçon sur le temps de sport, l’écart absolu moyen vaut environ $23{,}17$ minutes, le premier quartile environ $17{,}86$, le troisième environ $51{,}83$, et l’écart interquartile environ $33{,}97$ minutes.",
      "keyRule": "Deux dispersions complémentaires : distance moyenne à la moyenne, et largeur de la moitié centrale des valeurs.",
      "formulas": [
        {
          "name": "Écart absolu moyen",
          "formula": "e_m = \\frac{1}{N} \\sum n_i |c_i - \\bar{x}|"
        },
        {
          "name": "Écart interquartile",
          "formula": "Q_3 - Q_1"
        }
      ],
      "workedExample": {
        "title": "L’écart interquartile du temps de sport (exercice de fixation)",
        "statement": "Calcule l’écart interquartile de la série du temps de sport des $125$ élèves.",
        "methodSteps": [
          "Le rang du premier quartile est $31{,}25$ : l’interpolation dans la première classe donne environ $17{,}86$.",
          "Le rang du troisième quartile est $93{,}75$ : l’interpolation dans la classe de $40$ à $60$ donne environ $51{,}83$.",
          "On fait la différence des deux quartiles."
        ],
        "conclusion": "L’écart interquartile vaut environ $33{,}97$ minutes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’écart absolu moyen",
          "stepTheme": "L’écart absolu moyen",
          "stepBadge": "L’écart absolu moyen",
          "paragraphText": "• Définition : l’écart absolu moyen, noté $e_m$, est la moyenne pondérée des valeurs absolues des écarts des centres à la moyenne.\nIl indique la distance moyenne entre la moyenne et les valeurs de la série statistique.",
          "formula": {
            "name": "Écart absolu moyen",
            "formula": "e_m = \\frac{1}{N} \\sum n_i |c_i - \\bar{x}|"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p06_q1",
            "type": "mcq",
            "prompt": "L’écart absolu moyen mesure :",
            "options": [
              "La différence entre les quartiles",
              "Le carré de l’écart type",
              "La distance moyenne entre la moyenne et les valeurs de la série",
              "L’écart entre les deux valeurs extrêmes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’interprétation donnée par la leçon : une distance moyenne à la moyenne, sans carrés."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L’écart absolu moyen du temps de sport",
          "stepTheme": "L’écart absolu moyen du temps de sport",
          "stepBadge": "L’écart absolu moyen du temps de sport",
          "paragraphText": "• Exercice de fixation : pour le temps de sport, la somme des produits des effectifs par les valeurs absolues des écarts vaut $2895{,}68$ pour $125$ élèves.\nL’écart absolu moyen vaut donc environ $23{,}17$ minutes.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p06_q2",
            "type": "mcq",
            "prompt": "L’écart absolu moyen de cette série vaut environ :",
            "options": [
              "$39{,}84$ minutes",
              "$23{,}17$ minutes",
              "$988{,}77$ minutes",
              "$31{,}44$ minutes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On divise la somme pondérée $2895{,}68$ par l’effectif total $125$ : on obtient environ $23{,}17$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L’écart interquartile",
          "stepTheme": "L’écart interquartile",
          "stepBadge": "L’écart interquartile",
          "paragraphText": "• Définition : l’écart interquartile est la différence entre le troisième quartile et le premier quartile.\nPar interprétation, la moitié des valeurs de la série sont comprises entre le premier quartile et le troisième quartile.",
          "formula": {
            "name": "Écart interquartile",
            "formula": "Q_3 - Q_1"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p06_q3",
            "type": "mcq",
            "prompt": "L’écart interquartile est :",
            "options": [
              "La différence entre le troisième et le premier quartile",
              "La différence entre la médiane et la moyenne",
              "Le produit des deux quartiles",
              "La somme du premier et du troisième quartile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, l’écart interquartile vaut la différence entre le troisième et le premier quartile."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les quartiles du temps de sport",
          "stepTheme": "Les quartiles du temps de sport",
          "stepBadge": "Les quartiles du temps de sport",
          "paragraphText": "• Exercice de fixation : les effectifs cumulés croissants du temps de sport sont $35$, $76$, $106$, $118$, $123$ et $125$.\nLe rang du premier quartile est $31{,}25$, atteint dans la première classe ; celui du troisième quartile est $93{,}75$, atteint dans la classe allant de $40$ à $60$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p06_q4",
            "type": "mcq",
            "prompt": "Le premier quartile de cette série se trouve dans la classe :",
            "options": [
              "De $40$ à $60$",
              "De $100$ à $140$",
              "De $0$ à $20$",
              "De $20$ à $40$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le rang $31{,}25$ est plus petit que le premier effectif cumulé $35$ : le premier quartile est dans la première classe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les valeurs des quartiles du temps de sport",
          "stepTheme": "Les valeurs des quartiles du temps de sport",
          "stepBadge": "Les valeurs des quartiles du temps de sport",
          "paragraphText": "• Exercice de fixation : par interpolation linéaire, le premier quartile du temps de sport vaut environ $17{,}86$ minutes.\nLe troisième quartile vaut environ $51{,}83$ minutes.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p06_q5",
            "type": "mcq",
            "prompt": "Le troisième quartile de cette série vaut environ :",
            "options": [
              "$33{,}97$ minutes",
              "$51{,}83$ minutes",
              "$93{,}75$ minutes",
              "$17{,}86$ minutes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’interpolation dans la classe de $40$ à $60$, entre les rangs $76$ et $106$, donne environ $51{,}83$ pour le rang $93{,}75$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L’écart interquartile du temps de sport",
          "stepTheme": "L’écart interquartile du temps de sport",
          "stepBadge": "L’écart interquartile du temps de sport",
          "paragraphText": "• Exercice de fixation : l’écart interquartile est la différence entre les deux quartiles calculés.\nIl vaut environ $33{,}97$ minutes, alors que l’étendue de la série est de $200$ minutes.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p06_q6",
            "type": "mcq",
            "prompt": "L’écart interquartile de cette série vaut environ :",
            "options": [
              "$33{,}97$ minutes",
              "$17{,}86$ minutes",
              "$200$ minutes",
              "$51{,}83$ minutes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule la différence entre $51{,}83$ et $17{,}86$ : on obtient environ $33{,}97$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p06_q1",
          "type": "mcq",
          "prompt": "L’écart absolu moyen mesure :",
          "options": [
            "La différence entre les quartiles",
            "Le carré de l’écart type",
            "La distance moyenne entre la moyenne et les valeurs de la série",
            "L’écart entre les deux valeurs extrêmes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’interprétation donnée par la leçon : une distance moyenne à la moyenne, sans carrés."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p06_q2",
          "type": "mcq",
          "prompt": "L’écart absolu moyen de cette série vaut environ :",
          "options": [
            "$39{,}84$ minutes",
            "$23{,}17$ minutes",
            "$988{,}77$ minutes",
            "$31{,}44$ minutes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On divise la somme pondérée $2895{,}68$ par l’effectif total $125$ : on obtient environ $23{,}17$."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p06_q3",
          "type": "mcq",
          "prompt": "L’écart interquartile est :",
          "options": [
            "La différence entre le troisième et le premier quartile",
            "La différence entre la médiane et la moyenne",
            "Le produit des deux quartiles",
            "La somme du premier et du troisième quartile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, l’écart interquartile vaut la différence entre le troisième et le premier quartile."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p06_q4",
          "type": "mcq",
          "prompt": "Le premier quartile de cette série se trouve dans la classe :",
          "options": [
            "De $40$ à $60$",
            "De $100$ à $140$",
            "De $0$ à $20$",
            "De $20$ à $40$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le rang $31{,}25$ est plus petit que le premier effectif cumulé $35$ : le premier quartile est dans la première classe."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p06_q5",
          "type": "mcq",
          "prompt": "Le troisième quartile de cette série vaut environ :",
          "options": [
            "$33{,}97$ minutes",
            "$51{,}83$ minutes",
            "$93{,}75$ minutes",
            "$17{,}86$ minutes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’interpolation dans la classe de $40$ à $60$, entre les rangs $76$ et $106$, donne environ $51{,}83$ pour le rang $93{,}75$."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p06_q6",
          "type": "mcq",
          "prompt": "L’écart interquartile de cette série vaut environ :",
          "options": [
            "$33{,}97$ minutes",
            "$17{,}86$ minutes",
            "$200$ minutes",
            "$51{,}83$ minutes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule la différence entre $51{,}83$ et $17{,}86$ : on obtient environ $33{,}97$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l17_statistiques_p07",
      "order": 7,
      "title": "Choisir une machine : moyenne, dispersion et intervalle",
      "summary": "Appliquer les caractéristiques de position et de dispersion pour départager deux séries statistiques.",
      "conceptExplanation": "Dans la situation complexe de la leçon, deux machines testées sur $80$ sacs sont comparées selon trois conditions simultanées : une moyenne comprise entre $49{,}7$ et $50{,}3$, un écart type inférieur à $0{,}5$ kilogramme, et un intervalle imposé devant contenir $85$ pour cent des sacs.\nLes moyennes des deux machines, environ $49{,}80$ et $49{,}89$ kilogrammes, et leurs écarts types, environ $0{,}39$ et $0{,}37$ kilogramme, remplissent les deux premières conditions.\nL’estimation par interpolation linéaire des fréquences cumulées donne environ $84{,}35$ pour cent des sacs dans l’intervalle pour la première machine, et environ $89{,}4$ pour cent pour la seconde : seule la seconde machine remplit les trois conditions.",
      "keyRule": "Un choix statistique se justifie condition par condition : moyenne, dispersion, puis proportion dans l’intervalle.",
      "formulas": [
        {
          "name": "Moyenne de la machine B",
          "formula": "\\bar{x} = \\frac{3991{,}2}{80}"
        },
        {
          "name": "Écart type",
          "formula": "\\sigma = \\sqrt{V}"
        }
      ],
      "workedExample": {
        "title": "Le choix de la machine du comité de gestion",
        "statement": "À l’aide des calculs de la situation complexe, détermine quelle machine le président du comité doit choisir.",
        "methodSteps": [
          "On calcule les moyennes : environ $49{,}80$ et $49{,}89$ kilogrammes, toutes deux dans l’intervalle imposé.",
          "On calcule les écarts types : environ $0{,}39$ et $0{,}37$ kilogramme, tous deux sous le seuil.",
          "On estime les proportions dans l’intervalle : environ $84{,}35$ pour cent pour la première machine, environ $89{,}4$ pour cent pour la seconde."
        ],
        "conclusion": "Le président doit choisir la machine B, la seule à remplir simultanément les trois conditions."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les trois conditions d’une bonne machine",
          "stepTheme": "Les trois conditions d’une bonne machine",
          "stepBadge": "Les trois conditions d’une bonne machine",
          "paragraphText": "• Situation complexe : un commerçant propose deux machines pour stocker une récolte dans des sacs de $50$ kilogrammes, testées sur $80$ sacs chacune.\nSelon l’agent du service qualité, une machine est bonne si trois conditions sont simultanément réalisées : une moyenne entre $49{,}7$ et $50{,}3$, un écart type inférieur à $0{,}5$ kilogramme, et un intervalle imposé contenant $85$ pour cent des sacs.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p07_q1",
            "type": "mcq",
            "prompt": "Combien de conditions une machine doit-elle remplir simultanément pour être jugée bonne ?",
            "options": [
              "Une seule au choix",
              "Deux sur trois",
              "Les trois conditions",
              "Aucune, le choix est libre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La situation complexe exige les trois conditions à la fois : moyenne, écart type et proportion de sacs dans l’intervalle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les moyennes des deux machines",
          "stepTheme": "Les moyennes des deux machines",
          "stepBadge": "Les moyennes des deux machines",
          "paragraphText": "• Situation complexe : les centres des classes de stockage vont de $49{,}1$ à $50{,}5$ par pas de $0{,}2$.\nLa machine A a une moyenne d’environ $49{,}80$ kilogrammes et la machine B une moyenne d’environ $49{,}89$ kilogrammes : toutes les deux sont dans l’intervalle imposé.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p07_q2",
            "type": "mcq",
            "prompt": "La moyenne de la machine B vaut environ :",
            "options": [
              "$50{,}50$ kilogrammes",
              "$49{,}10$ kilogrammes",
              "$49{,}89$ kilogrammes",
              "$49{,}79$ kilogrammes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La somme des produits des effectifs par les centres vaut $3991{,}2$ pour $80$ sacs : le quotient vaut environ $49{,}89$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les écarts types des deux machines",
          "stepTheme": "Les écarts types des deux machines",
          "stepBadge": "Les écarts types des deux machines",
          "paragraphText": "• Situation complexe : le calcul de la variance donne environ $0{,}16$ pour la machine A, soit un écart type d’environ $0{,}39$ kilogramme.\nPour la machine B, la variance vaut environ $0{,}14$, soit un écart type d’environ $0{,}37$ kilogramme : les deux écarts types sont inférieurs à $0{,}5$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p07_q3",
            "type": "mcq",
            "prompt": "L’écart type de la machine A vaut environ :",
            "options": [
              "$0{,}16$ kilogramme",
              "$1{,}20$ kilogramme",
              "$0{,}62$ kilogramme",
              "$0{,}39$ kilogramme"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La variance de la machine A vaut environ $0{,}16$ ; son écart type est la racine carrée de cette variance, soit environ $0{,}39$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Estimer une fréquence par interpolation linéaire",
          "stepTheme": "Estimer une fréquence par interpolation linéaire",
          "stepBadge": "Estimer une fréquence par interpolation linéaire",
          "paragraphText": "• Méthode de la situation complexe : pour connaître la proportion de sacs dans l’intervalle imposé, on estime par interpolation linéaire les fréquences cumulées correspondant à ses deux bornes à partir du tableau des fréquences cumulées croissantes.\nLa proportion cherchée est la différence de ces deux fréquences cumulées estimées.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p07_q4",
            "type": "mcq",
            "prompt": "La proportion de sacs dans l’intervalle s’obtient :",
            "options": [
              "En lisant un seul effectif du tableau",
              "En faisant la différence des fréquences cumulées estimées aux deux bornes",
              "En calculant la moyenne des deux bornes",
              "En comptant les classes entières seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les bornes tombent à l’intérieur des classes : on interpole les fréquences cumulées, puis on fait leur différence."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les proportions dans l’intervalle imposé",
          "stepTheme": "Les proportions dans l’intervalle imposé",
          "stepBadge": "Les proportions dans l’intervalle imposé",
          "paragraphText": "• Situation complexe : pour la machine A, les fréquences cumulées estimées aux bornes de l’intervalle donnent une proportion d’environ $84{,}35$ pour cent des sacs.\nPour la machine B, la même estimation donne environ $89{,}4$ pour cent des sacs.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p07_q5",
            "type": "mcq",
            "prompt": "La proportion de sacs de la machine A dans l’intervalle imposé est environ :",
            "options": [
              "$84{,}35$ pour cent",
              "$85$ pour cent exactement",
              "$89{,}4$ pour cent",
              "$96{,}9$ pour cent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La différence des fréquences cumulées interpolées, environ $96{,}9$ et $12{,}55$, donne environ $84{,}35$ pour cent."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le piège de la machine qui échoue à une condition",
          "stepTheme": "Le piège de la machine qui échoue à une condition",
          "stepBadge": "Le piège de la machine qui échoue à une condition",
          "paragraphText": "• Situation complexe : la machine A remplit les conditions de moyenne et d’écart type, mais sa proportion de sacs dans l’intervalle est sous le seuil de $85$ pour cent.\nComme les trois conditions doivent être simultanément réalisées, la machine A n’est pas retenue.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l17_statistiques_p07_q6",
            "type": "mcq",
            "prompt": "Quelle machine le président du comité de gestion doit-il choisir ?",
            "options": [
              "La machine A",
              "La machine B",
              "Les deux machines",
              "Aucune des deux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La machine B remplit les trois conditions : moyenne dans l’intervalle, écart type sous le seuil et environ $89{,}4$ pour cent des sacs dans l’intervalle."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p07_q1",
          "type": "mcq",
          "prompt": "Combien de conditions une machine doit-elle remplir simultanément pour être jugée bonne ?",
          "options": [
            "Une seule au choix",
            "Deux sur trois",
            "Les trois conditions",
            "Aucune, le choix est libre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La situation complexe exige les trois conditions à la fois : moyenne, écart type et proportion de sacs dans l’intervalle."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p07_q2",
          "type": "mcq",
          "prompt": "La moyenne de la machine B vaut environ :",
          "options": [
            "$50{,}50$ kilogrammes",
            "$49{,}10$ kilogrammes",
            "$49{,}89$ kilogrammes",
            "$49{,}79$ kilogrammes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La somme des produits des effectifs par les centres vaut $3991{,}2$ pour $80$ sacs : le quotient vaut environ $49{,}89$."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p07_q3",
          "type": "mcq",
          "prompt": "L’écart type de la machine A vaut environ :",
          "options": [
            "$0{,}16$ kilogramme",
            "$1{,}20$ kilogramme",
            "$0{,}62$ kilogramme",
            "$0{,}39$ kilogramme"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La variance de la machine A vaut environ $0{,}16$ ; son écart type est la racine carrée de cette variance, soit environ $0{,}39$."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p07_q4",
          "type": "mcq",
          "prompt": "La proportion de sacs dans l’intervalle s’obtient :",
          "options": [
            "En lisant un seul effectif du tableau",
            "En faisant la différence des fréquences cumulées estimées aux deux bornes",
            "En calculant la moyenne des deux bornes",
            "En comptant les classes entières seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les bornes tombent à l’intérieur des classes : on interpole les fréquences cumulées, puis on fait leur différence."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p07_q5",
          "type": "mcq",
          "prompt": "La proportion de sacs de la machine A dans l’intervalle imposé est environ :",
          "options": [
            "$84{,}35$ pour cent",
            "$85$ pour cent exactement",
            "$89{,}4$ pour cent",
            "$96{,}9$ pour cent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La différence des fréquences cumulées interpolées, environ $96{,}9$ et $12{,}55$, donne environ $84{,}35$ pour cent."
        },
        {
          "id": "premiere_c_maths_numerique_l17_statistiques_p07_q6",
          "type": "mcq",
          "prompt": "Quelle machine le président du comité de gestion doit-il choisir ?",
          "options": [
            "La machine A",
            "La machine B",
            "Les deux machines",
            "Aucune des deux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La machine B remplit les trois conditions : moyenne dans l’intervalle, écart type sous le seuil et environ $89{,}4$ pour cent des sacs dans l’intervalle."
        }
      ]
    }
  ]
};
