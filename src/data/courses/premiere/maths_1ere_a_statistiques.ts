import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 6 : STATISTIQUES » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=870
export const MATHS_1ERE_A_L06_STATISTIQUES: CurriculumChapter = {
  "id": "premiere_a1_maths_numerique_l06_statistiques",
  "subjectId": "maths",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 6,
  "title": "Leçon 6 : Statistiques",
  "summary": "À partir des notes d'une classe après un devoir, on organise les données en classes et on calcule leurs caractéristiques de position (classe modale, moyenne, médiane, quartiles) et de dispersion (variance, écart type, écarts), avec leurs représentations graphiques.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=870",
  "points": [
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p01",
      "order": 1,
      "title": "Classes, amplitude, centre et densité",
      "summary": "Calculer l'amplitude, le centre et la densité de chaque classe d'une série statistique regroupée en classes.",
      "conceptExplanation": "Lorsqu'il est question d'une série statistique regroupée en classes, on considère les valeurs regroupées dans les classes $[x_1 ; x_2[$, $[x_2 ; x_3[$, etc., avec leurs effectifs. L'amplitude de la classe $[x_1 ; x_2[$ est $x_2 - x_1$ et son centre est $c_1 = \\frac{x_1 + x_2}{2}$.\nExemple : pour les classes $[1 ; 5[$, $[5 ; 8[$, $[8 ; 13[$, $[13 ; 14[$ et $[14 ; 21[$, d'effectifs $12$, $28$, $32$, $24$ et $8$, les centres sont $3$, $6{,}5$, $10{,}5$, $13{,}5$ et $17{,}5$, et les amplitudes $4$, $3$, $5$, $1$ et $7$.\nOn appelle densité d'une classe le quotient de l'effectif de la classe par l'amplitude de cette classe : celle de $[1 ; 5[$ vaut $3$.",
      "keyRule": "Centre égale milieu des bornes, amplitude égale écart des bornes, densité égale effectif divisé par amplitude.",
      "formulas": [
        {
          "name": "Centre d'une classe",
          "formula": "c_1 = \\frac{x_1 + x_2}{2}",
          "note": "Pour la classe $[x_1 ; x_2[$."
        },
        {
          "name": "Densité d'une classe",
          "formula": "\\text{densité} = \\frac{\\text{effectif}}{\\text{amplitude}}",
          "note": "Quotient de l'effectif par l'amplitude."
        }
      ],
      "workedExample": {
        "title": "Amplitudes et centres (exemple de la leçon)",
        "statement": "On donne les classes $[1 ; 5[$, $[5 ; 8[$, $[8 ; 13[$, $[13 ; 14[$ et $[14 ; 21[$, d'effectifs $12$, $28$, $32$, $24$ et $8$. Détermine les amplitudes et les centres de ces classes.",
        "methodSteps": [
          "Pour $[1 ; 5[$ : amplitude $5 - 1 = 4$ et centre $\\frac{1 + 5}{2} = 3$.",
          "On continue de même : amplitudes $3$, $5$, $1$ et $7$.",
          "Les centres correspondants sont $6{,}5$, $10{,}5$, $13{,}5$ et $17{,}5$."
        ],
        "conclusion": "La densité de la première classe vaut $3$ : c'est le quotient de son effectif par son amplitude."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Amplitude et centre d'une classe",
          "stepTheme": "Amplitude et centre d'une classe",
          "stepBadge": "Amplitude et centre d'une classe",
          "paragraphText": "• Rappel de la leçon : pour une série regroupée en classes, l'amplitude de la classe $[x_1 ; x_2[$ est $x_2 - x_1$ et son centre est $c_1 = \\frac{x_1 + x_2}{2}$.\nExemple : la classe $[1 ; 5[$ a pour amplitude $4$ et pour centre $3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q1",
            "type": "mcq",
            "prompt": "Quelle est l'amplitude de la classe $[1 ; 5[$ ?",
            "options": [
              "$3$",
              "$5$",
              "$4$",
              "$6$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'amplitude est la différence des bornes : $5 - 1 = 4$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calculer le centre d'une classe",
          "stepTheme": "Calculer le centre d'une classe",
          "stepBadge": "Calculer le centre d'une classe",
          "paragraphText": "• Méthode : le centre d'une classe est la moyenne de ses deux bornes.\nPour la classe $[5 ; 8[$ de l'exemple, le centre est la moyenne de $5$ et de $8$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q2",
            "type": "mcq",
            "prompt": "Quel est le centre de la classe $[5 ; 8[$ ?",
            "options": [
              "$6{,}5$",
              "$5$",
              "$8$",
              "$3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le centre est $\\frac{5 + 8}{2} = 6{,}5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La densité d'une classe",
          "stepTheme": "La densité d'une classe",
          "stepBadge": "La densité d'une classe",
          "paragraphText": "• Définition : on appelle densité d'une classe le quotient de l'effectif de la classe par l'amplitude de cette classe.\nExemple de la leçon : la densité de la classe $[1 ; 5[$, d'effectif $12$ et d'amplitude $4$, vaut $3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est la densité de la classe $[13 ; 14[$, d'effectif $24$ et d'amplitude $1$ ?",
            "options": [
              "$1$",
              "$13{,}5$",
              "$0{,}24$",
              "$24$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La densité est le quotient de l'effectif par l'amplitude : elle vaut $24$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les centres de l'exemple de la leçon",
          "stepTheme": "Les centres de l'exemple de la leçon",
          "stepBadge": "Les centres de l'exemple de la leçon",
          "paragraphText": "• Dans l'exemple qui sert de fil conducteur, les classes sont $[1 ; 5[$, $[5 ; 8[$, $[8 ; 13[$, $[13 ; 14[$ et $[14 ; 21[$.\nLeurs centres sont respectivement $3$, $6{,}5$, $10{,}5$, $13{,}5$ et $17{,}5$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q4",
            "type": "mcq",
            "prompt": "Quel est le centre de la classe $[14 ; 21[$ ?",
            "options": [
              "$7$",
              "$17{,}5$",
              "$21$",
              "$14$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le centre est $\\frac{14 + 21}{2} = 17{,}5$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre centre et amplitude",
          "stepTheme": "Ne pas confondre centre et amplitude",
          "stepBadge": "Ne pas confondre centre et amplitude",
          "paragraphText": "• Piège : l'amplitude de $[8 ; 13[$ vaut $5$, alors que son centre vaut $10{,}5$.\nL'amplitude est une longueur d'intervalle ; le centre est le milieu de l'intervalle.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q5",
            "type": "mcq",
            "prompt": "Quelle est l'amplitude de la classe $[8 ; 13[$ ?",
            "options": [
              "$5$",
              "$10{,}5$",
              "$13$",
              "$8$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'amplitude est $13 - 8 = 5$ ; le nombre $10{,}5$ est le centre de la classe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'effectif total de la série",
          "stepTheme": "L'effectif total de la série",
          "stepBadge": "L'effectif total de la série",
          "paragraphText": "• Les effectifs de l'exemple sont $12$, $28$, $32$, $24$ et $8$ pour les cinq classes.\nLeur somme donne l'effectif total $N$ de la série, utilisé dans tous les calculs de position et de dispersion.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q6",
            "type": "mcq",
            "prompt": "Quel est l'effectif total de la série de l'exemple, d'effectifs $12$, $28$, $32$, $24$ et $8$ ?",
            "options": [
              "$96$",
              "$100$",
              "$104$",
              "$112$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On additionne : $12 + 28 + 32 + 24 + 8 = 104$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q1",
          "type": "mcq",
          "prompt": "Quelle est l'amplitude de la classe $[1 ; 5[$ ?",
          "options": [
            "$3$",
            "$5$",
            "$4$",
            "$6$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'amplitude est la différence des bornes : $5 - 1 = 4$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q2",
          "type": "mcq",
          "prompt": "Quel est le centre de la classe $[5 ; 8[$ ?",
          "options": [
            "$6{,}5$",
            "$5$",
            "$8$",
            "$3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centre est $\\frac{5 + 8}{2} = 6{,}5$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est la densité de la classe $[13 ; 14[$, d'effectif $24$ et d'amplitude $1$ ?",
          "options": [
            "$1$",
            "$13{,}5$",
            "$0{,}24$",
            "$24$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La densité est le quotient de l'effectif par l'amplitude : elle vaut $24$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q4",
          "type": "mcq",
          "prompt": "Quel est le centre de la classe $[14 ; 21[$ ?",
          "options": [
            "$7$",
            "$17{,}5$",
            "$21$",
            "$14$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le centre est $\\frac{14 + 21}{2} = 17{,}5$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q5",
          "type": "mcq",
          "prompt": "Quelle est l'amplitude de la classe $[8 ; 13[$ ?",
          "options": [
            "$5$",
            "$10{,}5$",
            "$13$",
            "$8$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'amplitude est $13 - 8 = 5$ ; le nombre $10{,}5$ est le centre de la classe."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p01_q6",
          "type": "mcq",
          "prompt": "Quel est l'effectif total de la série de l'exemple, d'effectifs $12$, $28$, $32$, $24$ et $8$ ?",
          "options": [
            "$96$",
            "$100$",
            "$104$",
            "$112$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On additionne : $12 + 28 + 32 + 24 + 8 = 104$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p02",
      "order": 2,
      "title": "Classe modale et moyenne",
      "summary": "Déterminer la classe modale par les densités et calculer la moyenne d'une série regroupée en classes.",
      "conceptExplanation": "On appelle classe modale toute classe dont la densité est maximale. Dans l'exemple de la leçon, les densités des classes $[1 ; 5[$, $[5 ; 8[$, $[8 ; 13[$, $[13 ; 14[$ et $[14 ; 21[$ sont $3$, environ $9{,}33$, $6{,}4$, $24$ et environ $1{,}14$ : la classe modale est $[13 ; 14[$. Si toutes les classes ont la même amplitude, une classe modale est une classe dont l'effectif est maximal.\nLa moyenne d'une série statistique, notée $\\bar{x}$, est donnée par $\\bar{x} = \\frac{1}{N}(n_1 c_1 + n_2 c_2 + \\ldots + n_p c_p)$. Pour la série de l'exemple, elle vaut environ $9{,}79$.",
      "keyRule": "Classe modale égale densité maximale ; moyenne égale somme des effectifs fois centres, divisée par l'effectif total.",
      "formulas": [
        {
          "name": "Moyenne d'une série en classes",
          "formula": "\\bar{x} = \\frac{1}{N}(n_1 c_1 + n_2 c_2 + \\ldots + n_p c_p)",
          "note": "Les $c_i$ sont les centres des classes et $N$ l'effectif total."
        }
      ],
      "workedExample": {
        "title": "La moyenne de la série (exercice de fixation)",
        "statement": "Pour les classes $[1 ; 5[$, $[5 ; 8[$, $[8 ; 13[$, $[13 ; 14[$ et $[14 ; 21[$, d'effectifs $12$, $28$, $32$, $24$ et $8$, calcule la moyenne de la série.",
        "methodSteps": [
          "On écrit les centres : $3$, $6{,}5$, $10{,}5$, $13{,}5$ et $17{,}5$, et l'effectif total $N = 104$.",
          "On calcule la somme des produits des effectifs par les centres.",
          "On divise cette somme par $104$."
        ],
        "conclusion": "La moyenne de la série vaut environ $9{,}79$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La classe modale",
          "stepTheme": "La classe modale",
          "stepBadge": "La classe modale",
          "paragraphText": "• Définition : on appelle classe modale toute classe dont la densité est maximale.\nDans l'exemple de la leçon, les densités sont $3$, environ $9{,}33$, $6{,}4$, $24$ et environ $1{,}14$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q1",
            "type": "mcq",
            "prompt": "Quelle est la classe modale de la série de l'exemple, dont la plus grande densité vaut $24$ ?",
            "options": [
              "$[1 ; 5[$",
              "$[13 ; 14[$",
              "$[5 ; 8[$",
              "$[8 ; 13[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La classe de densité maximale $24$ est $[13 ; 14[$ : c'est la classe modale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cas des amplitudes égales",
          "stepTheme": "Le cas des amplitudes égales",
          "stepBadge": "Le cas des amplitudes égales",
          "paragraphText": "• Cas particulier de la leçon : si toutes les classes ont la même amplitude, alors une classe modale est une classe dont l'effectif est maximal.\nComparer les densités revient alors à comparer les effectifs.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q2",
            "type": "mcq",
            "prompt": "Si toutes les classes ont la même amplitude, comment repère-t-on la classe modale ?",
            "options": [
              "Par le plus petit effectif",
              "Par le plus grand centre",
              "Par la plus grande borne",
              "Par l'effectif maximal"
            ],
            "correctAnswerIndex": 3,
            "explanation": "À amplitudes égales, la densité maximale correspond à l'effectif maximal."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La moyenne d'une série en classes",
          "stepTheme": "La moyenne d'une série en classes",
          "stepBadge": "La moyenne d'une série en classes",
          "paragraphText": "• La moyenne d'une série statistique regroupée en classes, notée $\\bar{x}$, est donnée par $\\bar{x} = \\frac{1}{N}(n_1 c_1 + n_2 c_2 + \\ldots + n_p c_p)$, où les $c_i$ sont les centres des classes.\nEn utilisant les fréquences, on a aussi $\\bar{x} = f_1 c_1 + f_2 c_2 + \\ldots + f_p c_p$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q3",
            "type": "mcq",
            "prompt": "Dans la formule de la moyenne d'une série en classes, que représentent les nombres $c_i$ ?",
            "options": [
              "Les amplitudes des classes",
              "Les effectifs cumulés",
              "Les centres des classes",
              "Les densités des classes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque classe est représentée par son centre dans le calcul de la moyenne."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Préparer le calcul de la moyenne",
          "stepTheme": "Préparer le calcul de la moyenne",
          "stepBadge": "Préparer le calcul de la moyenne",
          "paragraphText": "• Méthode de l'exercice de fixation : on complète le tableau avec les centres des classes et l'effectif total $N = 104$.\nOn calcule ensuite les produits des effectifs par les centres, classe par classe.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q4",
            "type": "mcq",
            "prompt": "Quel est le produit de l'effectif par le centre pour la classe $[8 ; 13[$, d'effectif $32$ et de centre $10{,}5$ ?",
            "options": [
              "$336$",
              "$320$",
              "$42{,}5$",
              "$104$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On multiplie l'effectif par le centre de la classe : le produit vaut $336$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La moyenne de la série de l'exemple",
          "stepTheme": "La moyenne de la série de l'exemple",
          "stepBadge": "La moyenne de la série de l'exemple",
          "paragraphText": "• Exercice de fixation : la somme des produits effectifs par centres vaut $1018$ pour un effectif total de $104$.\nLa moyenne de la série s'en déduit par une division.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q5",
            "type": "mcq",
            "prompt": "Que vaut la moyenne de la série de l'exemple, d'effectif total $104$ ?",
            "options": [
              "$10{,}5$",
              "$13{,}5$",
              "$104$",
              "$9{,}79$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La moyenne vaut environ $9{,}79$, résultat donné par l'exercice de fixation de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas moyenner les bornes des classes",
          "stepTheme": "Ne pas moyenner les bornes des classes",
          "stepBadge": "Ne pas moyenner les bornes des classes",
          "paragraphText": "• Piège : la moyenne se calcule avec les centres des classes, pas avec leurs bornes.\nUtiliser les bornes inférieures ou supérieures fausserait le résultat, car chaque classe est représentée par son centre.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q6",
            "type": "mcq",
            "prompt": "Quelles valeurs utilise-t-on pour représenter chaque classe dans le calcul de la moyenne ?",
            "options": [
              "Les bornes inférieures",
              "Les centres des classes",
              "Les bornes supérieures",
              "Les amplitudes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La formule de la leçon utilise les centres $c_i$ des classes, pondérés par les effectifs."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q1",
          "type": "mcq",
          "prompt": "Quelle est la classe modale de la série de l'exemple, dont la plus grande densité vaut $24$ ?",
          "options": [
            "$[1 ; 5[$",
            "$[13 ; 14[$",
            "$[5 ; 8[$",
            "$[8 ; 13[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La classe de densité maximale $24$ est $[13 ; 14[$ : c'est la classe modale."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q2",
          "type": "mcq",
          "prompt": "Si toutes les classes ont la même amplitude, comment repère-t-on la classe modale ?",
          "options": [
            "Par le plus petit effectif",
            "Par le plus grand centre",
            "Par la plus grande borne",
            "Par l'effectif maximal"
          ],
          "correctAnswerIndex": 3,
          "explanation": "À amplitudes égales, la densité maximale correspond à l'effectif maximal."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q3",
          "type": "mcq",
          "prompt": "Dans la formule de la moyenne d'une série en classes, que représentent les nombres $c_i$ ?",
          "options": [
            "Les amplitudes des classes",
            "Les effectifs cumulés",
            "Les centres des classes",
            "Les densités des classes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque classe est représentée par son centre dans le calcul de la moyenne."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q4",
          "type": "mcq",
          "prompt": "Quel est le produit de l'effectif par le centre pour la classe $[8 ; 13[$, d'effectif $32$ et de centre $10{,}5$ ?",
          "options": [
            "$336$",
            "$320$",
            "$42{,}5$",
            "$104$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On multiplie l'effectif par le centre de la classe : le produit vaut $336$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q5",
          "type": "mcq",
          "prompt": "Que vaut la moyenne de la série de l'exemple, d'effectif total $104$ ?",
          "options": [
            "$10{,}5$",
            "$13{,}5$",
            "$104$",
            "$9{,}79$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La moyenne vaut environ $9{,}79$, résultat donné par l'exercice de fixation de la leçon."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p02_q6",
          "type": "mcq",
          "prompt": "Quelles valeurs utilise-t-on pour représenter chaque classe dans le calcul de la moyenne ?",
          "options": [
            "Les bornes inférieures",
            "Les centres des classes",
            "Les bornes supérieures",
            "Les amplitudes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La formule de la leçon utilise les centres $c_i$ des classes, pondérés par les effectifs."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p03",
      "order": 3,
      "title": "La médiane",
      "summary": "Déterminer la médiane d'une série en classes, graphiquement et par interpolation linéaire.",
      "conceptExplanation": "La médiane d'une série statistique continue est un nombre qui sépare les valeurs ordonnées de la série en deux familles de même effectif : au moins $50$ pour cent des individus ont une valeur du caractère supérieure ou égale à $M$.\nElle se détermine soit graphiquement, comme l'abscisse du point de la courbe cumulative des effectifs dont l'ordonnée est la moitié de l'effectif total, soit par interpolation linéaire.\nDans l'exemple de la leçon, $\\frac{N}{2} = 52$ est compris entre les cumuls $40$ et $72$ : la médiane est dans la classe $[8 ; 13[$, elle vaut environ $9$ graphiquement et environ $9{,}87$ par interpolation.",
      "keyRule": "La médiane se cherche au rang $\\frac{N}{2}$ dans les effectifs cumulés, puis on interpole dans sa classe.",
      "formulas": [
        {
          "name": "Rang de la médiane",
          "formula": "\\frac{N}{2}",
          "note": "La médiane correspond à la moitié de l'effectif total sur la courbe cumulative."
        }
      ],
      "workedExample": {
        "title": "La médiane par interpolation (exemple de la leçon)",
        "statement": "Pour la série de l'exemple, d'effectif total $104$ et de cumuls $12$, $40$, $72$, $96$, $104$, détermine la médiane par interpolation linéaire.",
        "methodSteps": [
          "On calcule la moitié de l'effectif total : $52$.",
          "Le rang $52$ est entre $40$ et $72$ : la médiane est dans la classe $[8 ; 13[$.",
          "On écrit la proportionnalité entre les abscisses $8$, $M_e$, $13$ et les cumuls $40$, $52$, $72$, puis on résout."
        ],
        "conclusion": "La médiane vaut environ $9{,}87$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de la médiane",
          "stepTheme": "La définition de la médiane",
          "stepBadge": "La définition de la médiane",
          "paragraphText": "• Définition : la médiane d'une série statistique continue est un nombre qui sépare les valeurs ordonnées de la série en deux familles de même effectif.\nAutrement dit, au moins $50$ pour cent des individus ont une valeur supérieure ou égale à la médiane $M$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q1",
            "type": "mcq",
            "prompt": "Que partage la médiane d'une série statistique continue ?",
            "options": [
              "Les valeurs ordonnées en deux familles de même effectif",
              "Les valeurs en deux familles d'effectifs différents",
              "Les classes en deux groupes d'amplitudes égales",
              "L'effectif total en classes modales"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, la médiane sépare les valeurs ordonnées en deux familles de même effectif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La détermination graphique",
          "stepTheme": "La détermination graphique",
          "stepBadge": "La détermination graphique",
          "paragraphText": "• Graphiquement, la médiane est l'abscisse du point de la courbe cumulative des effectifs dont l'ordonnée est la moitié de l'effectif total, soit $\\frac{N}{2}$.\nAvec les fréquences cumulées, l'ordonnée correspondante est $0{,}5$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q2",
            "type": "mcq",
            "prompt": "Pour $N = 104$, quelle ordonnée du polygone des effectifs cumulés croissants donne la médiane ?",
            "options": [
              "$104$",
              "$26$",
              "$52$",
              "$78$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La médiane correspond à la moitié de l'effectif total : $\\frac{104}{2} = 52$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Repérer la classe de la médiane",
          "stepTheme": "Repérer la classe de la médiane",
          "stepBadge": "Repérer la classe de la médiane",
          "paragraphText": "• Les effectifs cumulés croissants de l'exemple sont $12$, $40$, $72$, $96$ et $104$.\nLe rang $52$ est compris entre le $40$e rang et le $72$e rang : la médiane appartient donc à la classe $[8 ; 13[$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q3",
            "type": "mcq",
            "prompt": "À quelle classe la médiane de la série de l'exemple appartient-elle ?",
            "options": [
              "$[5 ; 8[$",
              "$[8 ; 13[$",
              "$[13 ; 14[$",
              "$[14 ; 21[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le rang $52$ est entre les cumuls $40$ et $72$, qui encadrent la classe $[8 ; 13[$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'interpolation linéaire",
          "stepTheme": "L'interpolation linéaire",
          "stepBadge": "L'interpolation linéaire",
          "paragraphText": "• Par interpolation linéaire, on écrit la proportionnalité $\\frac{M_e - 8}{13 - 8} = \\frac{52 - 40}{72 - 40}$ dans la classe de la médiane.\nCette égalité permet de calculer une valeur précise de la médiane.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q4",
            "type": "mcq",
            "prompt": "Que vaut la médiane de la série de l'exemple par interpolation linéaire ?",
            "options": [
              "$9$ exactement, sans calcul",
              "Environ $10{,}5$",
              "Environ $13$",
              "Environ $9{,}87$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'interpolation dans la classe $[8 ; 13[$ donne une médiane d'environ $9{,}87$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La lecture graphique approchée",
          "stepTheme": "La lecture graphique approchée",
          "stepBadge": "La lecture graphique approchée",
          "paragraphText": "• Exemple de la leçon : sur le polygone des effectifs cumulés croissants, la médiane lue graphiquement est environ égale à $9$.\nL'interpolation linéaire donne ensuite la valeur plus précise, environ $9{,}87$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q5",
            "type": "mcq",
            "prompt": "Quelle valeur approchée de la médiane lit-on graphiquement dans l'exemple de la leçon ?",
            "options": [
              "Environ $6{,}5$",
              "Environ $13$",
              "Environ $9$",
              "Environ $52$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La lecture sur le polygone des effectifs cumulés donne une médiane d'environ $9$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre médiane et moyenne",
          "stepTheme": "Ne pas confondre médiane et moyenne",
          "stepBadge": "Ne pas confondre médiane et moyenne",
          "paragraphText": "• Piège : la médiane de l'exemple vaut environ $9{,}87$ par interpolation, alors que sa moyenne vaut environ $9{,}79$.\nCe sont deux caractéristiques de position différentes, calculées par des méthodes différentes.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q6",
            "type": "mcq",
            "prompt": "La médiane et la moyenne de la série de l'exemple sont-elles la même caractéristique ?",
            "options": [
              "Non, la médiane partage les effectifs et la moyenne pondère les centres",
              "Oui, ce sont deux noms du même nombre",
              "Oui, elles valent toutes deux $9{,}79$",
              "Non, la médiane est toujours un effectif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La médiane sépare la série en deux familles de même effectif ; la moyenne est une somme pondérée divisée par $N$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q1",
          "type": "mcq",
          "prompt": "Que partage la médiane d'une série statistique continue ?",
          "options": [
            "Les valeurs ordonnées en deux familles de même effectif",
            "Les valeurs en deux familles d'effectifs différents",
            "Les classes en deux groupes d'amplitudes égales",
            "L'effectif total en classes modales"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, la médiane sépare les valeurs ordonnées en deux familles de même effectif."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q2",
          "type": "mcq",
          "prompt": "Pour $N = 104$, quelle ordonnée du polygone des effectifs cumulés croissants donne la médiane ?",
          "options": [
            "$104$",
            "$26$",
            "$52$",
            "$78$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La médiane correspond à la moitié de l'effectif total : $\\frac{104}{2} = 52$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q3",
          "type": "mcq",
          "prompt": "À quelle classe la médiane de la série de l'exemple appartient-elle ?",
          "options": [
            "$[5 ; 8[$",
            "$[8 ; 13[$",
            "$[13 ; 14[$",
            "$[14 ; 21[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le rang $52$ est entre les cumuls $40$ et $72$, qui encadrent la classe $[8 ; 13[$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q4",
          "type": "mcq",
          "prompt": "Que vaut la médiane de la série de l'exemple par interpolation linéaire ?",
          "options": [
            "$9$ exactement, sans calcul",
            "Environ $10{,}5$",
            "Environ $13$",
            "Environ $9{,}87$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'interpolation dans la classe $[8 ; 13[$ donne une médiane d'environ $9{,}87$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q5",
          "type": "mcq",
          "prompt": "Quelle valeur approchée de la médiane lit-on graphiquement dans l'exemple de la leçon ?",
          "options": [
            "Environ $6{,}5$",
            "Environ $13$",
            "Environ $9$",
            "Environ $52$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La lecture sur le polygone des effectifs cumulés donne une médiane d'environ $9$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p03_q6",
          "type": "mcq",
          "prompt": "La médiane et la moyenne de la série de l'exemple sont-elles la même caractéristique ?",
          "options": [
            "Non, la médiane partage les effectifs et la moyenne pondère les centres",
            "Oui, ce sont deux noms du même nombre",
            "Oui, elles valent toutes deux $9{,}79$",
            "Non, la médiane est toujours un effectif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La médiane sépare la série en deux familles de même effectif ; la moyenne est une somme pondérée divisée par $N$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p04",
      "order": 4,
      "title": "Les quartiles",
      "summary": "Déterminer le premier et le troisième quartile d'une série en classes, graphiquement et par interpolation linéaire.",
      "conceptExplanation": "Les valeurs de la série étant ordonnées, le premier quartile $Q_1$ est la valeur telle que $25$ pour cent des valeurs sont inférieures ou égales à $Q_1$ et $75$ pour cent lui sont supérieures ; le deuxième quartile $Q_2$ est la médiane ; le troisième quartile $Q_3$ est la valeur telle que $75$ pour cent des valeurs sont inférieures ou égales à $Q_3$ et $25$ pour cent lui sont supérieures.\nGraphiquement, $Q_1$ correspond à $25$ pour cent de l'effectif sur le polygone des effectifs cumulés croissants et $Q_3$ à $75$ pour cent. On peut calculer des valeurs plus précises par interpolation linéaire.\nDans l'exemple de la leçon, $Q_1 = 6{,}5$ et $Q_3 = 13{,}25$ par interpolation.",
      "keyRule": "Quartiles égale rangs $25$ pour cent et $75$ pour cent de l'effectif, puis interpolation dans la classe repérée.",
      "formulas": [],
      "workedExample": {
        "title": "Les deux quartiles par interpolation (exemple de la leçon)",
        "statement": "Pour la série de l'exemple, d'effectif total $104$, calcule le premier quartile et le troisième quartile par interpolation linéaire.",
        "methodSteps": [
          "Pour $Q_1$ : le rang est $26$, entre les cumuls $12$ et $40$, donc $Q_1$ est dans $[5 ; 8[$ et l'interpolation donne $6{,}5$.",
          "Pour $Q_3$ : le rang est $78$, entre les cumuls $72$ et $96$, donc $Q_3$ est dans $[13 ; 14[$.",
          "L'interpolation dans cette classe donne $13{,}25$."
        ],
        "conclusion": "Le premier quartile vaut $6{,}5$ et le troisième quartile vaut $13{,}25$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les trois quartiles",
          "stepTheme": "Les trois quartiles",
          "stepBadge": "Les trois quartiles",
          "paragraphText": "• Définitions : le premier quartile $Q_1$ est la valeur telle que $25$ pour cent des valeurs sont inférieures ou égales à $Q_1$ ; le deuxième quartile $Q_2$ est la médiane ; le troisième quartile $Q_3$ est la valeur telle que $75$ pour cent des valeurs sont inférieures ou égales à $Q_3$.\nLes valeurs de la série sont supposées ordonnées.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q1",
            "type": "mcq",
            "prompt": "À quelle caractéristique le deuxième quartile $Q_2$ correspond-il ?",
            "options": [
              "À la moyenne",
              "À la classe modale",
              "À l'écart type",
              "À la médiane"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, le deuxième quartile est la médiane de la série."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les rangs des quartiles",
          "stepTheme": "Les rangs des quartiles",
          "stepBadge": "Les rangs des quartiles",
          "paragraphText": "• Graphiquement, $Q_1$ correspond à $25$ pour cent de l'effectif sur le polygone des effectifs cumulés croissants, et $Q_3$ à $75$ pour cent de l'effectif.\nPour $N = 104$, ces rangs sont $26$ et $78$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q2",
            "type": "mcq",
            "prompt": "Pour $N = 104$, quel rang correspond au troisième quartile $Q_3$ ?",
            "options": [
              "$26$",
              "$78$",
              "$52$",
              "$104$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le troisième quartile correspond à $75$ pour cent de $104$, soit le rang $78$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le calcul du premier quartile",
          "stepTheme": "Le calcul du premier quartile",
          "stepBadge": "Le calcul du premier quartile",
          "paragraphText": "• Le rang $26$ est compris entre les cumuls $12$ et $40$ : $Q_1$ appartient à la classe $[5 ; 8[$.\nL'interpolation linéaire dans cette classe donne la valeur de $Q_1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q3",
            "type": "mcq",
            "prompt": "Que vaut le premier quartile de la série de l'exemple par interpolation linéaire ?",
            "options": [
              "$6{,}5$",
              "$5$",
              "$7$ environ, sans interpolation",
              "$8$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'interpolation dans la classe $[5 ; 8[$ donne $Q_1 = 6{,}5$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le calcul du troisième quartile",
          "stepTheme": "Le calcul du troisième quartile",
          "stepBadge": "Le calcul du troisième quartile",
          "paragraphText": "• Le rang $78$ est compris entre les cumuls $72$ et $96$ : $Q_3$ appartient à la classe $[13 ; 14[$.\nL'interpolation linéaire dans cette classe donne la valeur de $Q_3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q4",
            "type": "mcq",
            "prompt": "Que vaut le troisième quartile de la série de l'exemple par interpolation linéaire ?",
            "options": [
              "$13$",
              "$14$",
              "$13{,}25$",
              "$12$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'interpolation dans la classe $[13 ; 14[$ donne $Q_3 = 13{,}25$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les lectures graphiques approchées",
          "stepTheme": "Les lectures graphiques approchées",
          "stepBadge": "Les lectures graphiques approchées",
          "paragraphText": "• Exemple de la leçon : sur le polygone des effectifs cumulés croissants, le premier quartile est environ égal à $7$ et le troisième quartile environ égal à $13$.\nL'interpolation donne ensuite les valeurs plus précises $6{,}5$ et $13{,}25$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q5",
            "type": "mcq",
            "prompt": "Quelles valeurs approchées des quartiles lit-on graphiquement dans l'exemple ?",
            "options": [
              "$Q_1$ environ $5$ et $Q_3$ environ $14$",
              "$Q_1$ environ $7$ et $Q_3$ environ $13$",
              "$Q_1$ environ $9$ et $Q_3$ environ $10$",
              "$Q_1$ environ $26$ et $Q_3$ environ $78$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La lecture graphique de la leçon donne environ $7$ pour $Q_1$ et environ $13$ pour $Q_3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre rang et valeur",
          "stepTheme": "Ne pas confondre rang et valeur",
          "stepBadge": "Ne pas confondre rang et valeur",
          "paragraphText": "• Piège : le nombre $26$ est un rang, celui du premier quartile pour $N = 104$ ; ce n'est pas la valeur de $Q_1$.\nLa valeur de $Q_1$ se trouve dans la classe repérée grâce à ce rang, ici $[5 ; 8[$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q6",
            "type": "mcq",
            "prompt": "Dans le calcul de $Q_1$ pour $N = 104$, que représente le nombre $26$ ?",
            "options": [
              "La valeur de $Q_1$",
              "L'amplitude de la classe de $Q_1$",
              "La densité de la classe de $Q_1$",
              "Le rang correspondant à $25$ pour cent de l'effectif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est $25$ pour cent de l'effectif total : un rang à situer dans les cumuls, pas la valeur du quartile."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q1",
          "type": "mcq",
          "prompt": "À quelle caractéristique le deuxième quartile $Q_2$ correspond-il ?",
          "options": [
            "À la moyenne",
            "À la classe modale",
            "À l'écart type",
            "À la médiane"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, le deuxième quartile est la médiane de la série."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q2",
          "type": "mcq",
          "prompt": "Pour $N = 104$, quel rang correspond au troisième quartile $Q_3$ ?",
          "options": [
            "$26$",
            "$78$",
            "$52$",
            "$104$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le troisième quartile correspond à $75$ pour cent de $104$, soit le rang $78$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q3",
          "type": "mcq",
          "prompt": "Que vaut le premier quartile de la série de l'exemple par interpolation linéaire ?",
          "options": [
            "$6{,}5$",
            "$5$",
            "$7$ environ, sans interpolation",
            "$8$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'interpolation dans la classe $[5 ; 8[$ donne $Q_1 = 6{,}5$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q4",
          "type": "mcq",
          "prompt": "Que vaut le troisième quartile de la série de l'exemple par interpolation linéaire ?",
          "options": [
            "$13$",
            "$14$",
            "$13{,}25$",
            "$12$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'interpolation dans la classe $[13 ; 14[$ donne $Q_3 = 13{,}25$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q5",
          "type": "mcq",
          "prompt": "Quelles valeurs approchées des quartiles lit-on graphiquement dans l'exemple ?",
          "options": [
            "$Q_1$ environ $5$ et $Q_3$ environ $14$",
            "$Q_1$ environ $7$ et $Q_3$ environ $13$",
            "$Q_1$ environ $9$ et $Q_3$ environ $10$",
            "$Q_1$ environ $26$ et $Q_3$ environ $78$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La lecture graphique de la leçon donne environ $7$ pour $Q_1$ et environ $13$ pour $Q_3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p04_q6",
          "type": "mcq",
          "prompt": "Dans le calcul de $Q_1$ pour $N = 104$, que représente le nombre $26$ ?",
          "options": [
            "La valeur de $Q_1$",
            "L'amplitude de la classe de $Q_1$",
            "La densité de la classe de $Q_1$",
            "Le rang correspondant à $25$ pour cent de l'effectif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est $25$ pour cent de l'effectif total : un rang à situer dans les cumuls, pas la valeur du quartile."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p05",
      "order": 5,
      "title": "Histogramme, polygones et courbes cumulatives",
      "summary": "Construire et lire l'histogramme, le polygone des fréquences et la courbe cumulative d'une série en classes.",
      "conceptExplanation": "L'histogramme d'une série statistique regroupée en classes est constitué de rectangles juxtaposés : l'aire de chaque rectangle est proportionnelle à l'effectif, respectivement à la fréquence, de la classe ; les largeurs des rectangles sont proportionnelles aux amplitudes des classes et leurs hauteurs aux densités des classes.\nLe polygone des effectifs, respectivement des fréquences, est obtenu en joignant les milieux successifs des côtés les plus hauts de chaque rectangle de l'histogramme.\nLa courbe cumulative des effectifs est la représentation graphique de la fonction qui vaut $0$ avant la première classe, qui est affine sur chaque classe en reliant les effectifs cumulés croissants, et qui vaut $N$ après la dernière classe. La courbe cumulative des fréquences a la même construction, avec des valeurs entre $0$ et $1$.",
      "keyRule": "Histogramme égale rectangles d'aire proportionnelle ; polygone égale milieux des sommets joints ; courbe cumulative égale cumuls reliés.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le tableau d'un histogramme (exercice de fixation)",
        "statement": "On donne les classes $[2 ; 3[$, $[3 ; 4{,}5[$, $[4{,}5 ; 5{,}5[$, $[5{,}5 ; 6[$ et $[6 ; 8[$, de fréquences $0{,}15$, $0{,}35$, $0{,}25$, $0{,}1$ et $0{,}15$. Complète le tableau avec les amplitudes, les centres et les densités, en vue de construire l'histogramme des fréquences.",
        "methodSteps": [
          "Les amplitudes sont $1$, $1{,}5$, $1$, $0{,}5$ et $2$.",
          "Les centres sont $2{,}5$, $3{,}75$, $5$, $5{,}75$ et $7$.",
          "Les densités, quotients des fréquences par les amplitudes, sont $0{,}15$, environ $0{,}23$, $0{,}25$, $0{,}2$ et $0{,}075$."
        ],
        "conclusion": "Le tableau complété permet de construire l'histogramme, dont les hauteurs sont les densités."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'histogramme",
          "stepTheme": "L'histogramme",
          "stepBadge": "L'histogramme",
          "paragraphText": "• L'histogramme d'une série regroupée en classes est constitué de rectangles juxtaposés : l'aire de chaque rectangle est proportionnelle à l'effectif, ou à la fréquence, de la classe.\nLes largeurs des rectangles sont proportionnelles aux amplitudes des classes et leurs hauteurs aux densités des classes.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q1",
            "type": "mcq",
            "prompt": "Dans un histogramme, à quoi la hauteur de chaque rectangle est-elle proportionnelle ?",
            "options": [
              "À l'effectif de la classe",
              "Au centre de la classe",
              "À la densité de la classe",
              "À l'effectif total"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon précise que les hauteurs sont proportionnelles aux densités des classes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'aire des rectangles",
          "stepTheme": "L'aire des rectangles",
          "stepBadge": "L'aire des rectangles",
          "paragraphText": "• L'aire de chaque rectangle de l'histogramme est proportionnelle à l'effectif, respectivement à la fréquence, de la classe correspondante.\nC'est pour cela qu'on utilise la densité en hauteur quand les amplitudes sont différentes.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q2",
            "type": "mcq",
            "prompt": "Dans un histogramme des fréquences, que représente l'aire d'un rectangle ?",
            "options": [
              "La fréquence de la classe, à une échelle près",
              "Le centre de la classe",
              "L'amplitude de la classe",
              "La médiane"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'aire de chaque rectangle est proportionnelle à la fréquence de sa classe."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Compléter un tableau avant l'histogramme",
          "stepTheme": "Compléter un tableau avant l'histogramme",
          "stepBadge": "Compléter un tableau avant l'histogramme",
          "paragraphText": "• Exercice de fixation : pour les classes $[2 ; 3[$, $[3 ; 4{,}5[$, $[4{,}5 ; 5{,}5[$, $[5{,}5 ; 6[$ et $[6 ; 8[$, de fréquences $0{,}15$, $0{,}35$, $0{,}25$, $0{,}1$ et $0{,}15$, on calcule d'abord les amplitudes, les centres et les densités.\nLes amplitudes sont $1$, $1{,}5$, $1$, $0{,}5$ et $2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q3",
            "type": "mcq",
            "prompt": "Quelle est la densité de la classe $[3 ; 4{,}5[$, de fréquence $0{,}35$ et d'amplitude $1{,}5$ ?",
            "options": [
              "$0{,}35$",
              "$0{,}525$",
              "$1{,}5$",
              "Environ $0{,}23$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La densité est le quotient de la fréquence par l'amplitude : elle vaut environ $0{,}23$ d'après la correction de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le polygone des effectifs et des fréquences",
          "stepTheme": "Le polygone des effectifs et des fréquences",
          "stepBadge": "Le polygone des effectifs et des fréquences",
          "paragraphText": "• Le polygone des effectifs, respectivement des fréquences, est obtenu en joignant les milieux successifs des côtés les plus hauts de chaque rectangle de l'histogramme.\nIl se construit donc à partir de l'histogramme déjà tracé.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q4",
            "type": "mcq",
            "prompt": "Comment obtient-on le polygone des fréquences ?",
            "options": [
              "En joignant les centres des classes au hasard",
              "En joignant les milieux successifs des côtés les plus hauts des rectangles de l'histogramme",
              "En cumulant les fréquences",
              "En traçant les axes de symétrie des rectangles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition de la leçon : on joint les milieux successifs des côtés supérieurs des rectangles."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La courbe cumulative des effectifs",
          "stepTheme": "La courbe cumulative des effectifs",
          "stepBadge": "La courbe cumulative des effectifs",
          "paragraphText": "• La courbe cumulative des effectifs est la représentation graphique d'une fonction qui vaut $0$ avant la première classe, qui coïncide sur chaque classe avec une fonction affine reliant les effectifs cumulés, et qui vaut $N$ après la dernière classe.\nC'est elle qui permet de déterminer graphiquement la médiane et les quartiles.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q5",
            "type": "mcq",
            "prompt": "Que vaut la fonction de la courbe cumulative des effectifs pour $x$ supérieur ou égal à la borne finale de la dernière classe ?",
            "options": [
              "$N$, l'effectif total",
              "$0$",
              "$1$",
              "La moitié de l'effectif total"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Après la dernière classe, tous les individus sont comptés : la fonction vaut $N$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les fréquences cumulées croissantes",
          "stepTheme": "Les fréquences cumulées croissantes",
          "stepBadge": "Les fréquences cumulées croissantes",
          "paragraphText": "• Exercice de fixation : pour les classes $[2 ; 3[$, $[3 ; 4{,}5[$, $[4{,}5 ; 5{,}5[$, $[5{,}5 ; 6[$ et $[6 ; 8[$, les fréquences sont $0{,}15$, $0{,}35$, $0{,}25$, $0{,}1$ et $0{,}15$.\nLes fréquences cumulées croissantes sont donc $0{,}15$, $0{,}5$, $0{,}75$, $0{,}85$ et $1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q6",
            "type": "mcq",
            "prompt": "Quelle est la fréquence cumulée croissante après la troisième classe, de fréquences $0{,}15$, $0{,}35$ puis $0{,}25$ ?",
            "options": [
              "$0{,}25$",
              "$0{,}5$",
              "$0{,}75$",
              "$1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On additionne les trois premières fréquences : on obtient $0{,}75$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q1",
          "type": "mcq",
          "prompt": "Dans un histogramme, à quoi la hauteur de chaque rectangle est-elle proportionnelle ?",
          "options": [
            "À l'effectif de la classe",
            "Au centre de la classe",
            "À la densité de la classe",
            "À l'effectif total"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon précise que les hauteurs sont proportionnelles aux densités des classes."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q2",
          "type": "mcq",
          "prompt": "Dans un histogramme des fréquences, que représente l'aire d'un rectangle ?",
          "options": [
            "La fréquence de la classe, à une échelle près",
            "Le centre de la classe",
            "L'amplitude de la classe",
            "La médiane"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'aire de chaque rectangle est proportionnelle à la fréquence de sa classe."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q3",
          "type": "mcq",
          "prompt": "Quelle est la densité de la classe $[3 ; 4{,}5[$, de fréquence $0{,}35$ et d'amplitude $1{,}5$ ?",
          "options": [
            "$0{,}35$",
            "$0{,}525$",
            "$1{,}5$",
            "Environ $0{,}23$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La densité est le quotient de la fréquence par l'amplitude : elle vaut environ $0{,}23$ d'après la correction de la leçon."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q4",
          "type": "mcq",
          "prompt": "Comment obtient-on le polygone des fréquences ?",
          "options": [
            "En joignant les centres des classes au hasard",
            "En joignant les milieux successifs des côtés les plus hauts des rectangles de l'histogramme",
            "En cumulant les fréquences",
            "En traçant les axes de symétrie des rectangles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition de la leçon : on joint les milieux successifs des côtés supérieurs des rectangles."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q5",
          "type": "mcq",
          "prompt": "Que vaut la fonction de la courbe cumulative des effectifs pour $x$ supérieur ou égal à la borne finale de la dernière classe ?",
          "options": [
            "$N$, l'effectif total",
            "$0$",
            "$1$",
            "La moitié de l'effectif total"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Après la dernière classe, tous les individus sont comptés : la fonction vaut $N$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p05_q6",
          "type": "mcq",
          "prompt": "Quelle est la fréquence cumulée croissante après la troisième classe, de fréquences $0{,}15$, $0{,}35$ puis $0{,}25$ ?",
          "options": [
            "$0{,}25$",
            "$0{,}5$",
            "$0{,}75$",
            "$1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On additionne les trois premières fréquences : on obtient $0{,}75$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p06",
      "order": 6,
      "title": "Variance et écart type",
      "summary": "Calculer la variance d'une série en classes par ses deux formules et en déduire l'écart type.",
      "conceptExplanation": "La variance d'une série statistique regroupée en classes, notée $V$, est donnée par $V = \\frac{1}{N}\\left[n_1 (c_1 - \\bar{x})^2 + n_2 (c_2 - \\bar{x})^2 + \\ldots + n_p (c_p - \\bar{x})^2\\right]$. Autre formule : $V = \\frac{1}{N}(n_1 c_1^2 + n_2 c_2^2 + \\ldots + n_p c_p^2) - \\bar{x}^2$.\nL'écart type d'une série statistique, noté $\\sigma$, est $\\sigma = \\sqrt{V}$.\nExemple : pour le temps de sport de $125$ élèves, la moyenne vaut $39{,}84$, la variance environ $988{,}77$ et l'écart type environ $31{,}44$.",
      "keyRule": "Écart type égale racine carrée de la variance : ne jamais livrer la variance quand on demande l'écart type.",
      "formulas": [
        {
          "name": "Variance, autre formule",
          "formula": "V = \\frac{1}{N}(n_1 c_1^2 + \\ldots + n_p c_p^2) - \\bar{x}^2",
          "note": "Les $c_i$ sont les centres des classes."
        },
        {
          "name": "Écart type",
          "formula": "\\sigma = \\sqrt{V}",
          "note": "Racine carrée de la variance."
        }
      ],
      "workedExample": {
        "title": "Variance et écart type du temps de sport (exercice de fixation)",
        "statement": "Pour $125$ élèves, le temps de sport hebdomadaire est regroupé dans les classes $[0 ; 20[$, $[20 ; 40[$, $[40 ; 60[$, $[60 ; 100[$, $[100 ; 140[$ et $[140 ; 200[$, d'effectifs $35$, $41$, $30$, $12$, $5$ et $2$. Calcule la variance puis l'écart type de cette série.",
        "methodSteps": [
          "Les centres sont $10$, $30$, $50$, $80$, $120$ et $170$ et la moyenne vaut $39{,}84$.",
          "On applique l'autre formule de la variance avec les carrés des centres.",
          "On obtient $V$ environ $988{,}77$, puis $\\sigma$ comme racine carrée de $V$."
        ],
        "conclusion": "La variance vaut environ $988{,}77$ et l'écart type environ $31{,}44$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La variance",
          "stepTheme": "La variance",
          "stepBadge": "La variance",
          "paragraphText": "• La variance d'une série statistique regroupée en classes, notée $V$, est donnée par $V = \\frac{1}{N}\\left[n_1 (c_1 - \\bar{x})^2 + \\ldots + n_p (c_p - \\bar{x})^2\\right]$.\nElle mesure la dispersion des valeurs autour de la moyenne.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q1",
            "type": "mcq",
            "prompt": "Que mesure la variance d'une série statistique ?",
            "options": [
              "La valeur centrale de la série",
              "La dispersion des valeurs autour de la moyenne",
              "Le plus grand effectif",
              "Le nombre de classes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La variance moyenne les écarts au carré entre les centres et la moyenne : elle mesure la dispersion."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'autre formule de la variance",
          "stepTheme": "L'autre formule de la variance",
          "stepBadge": "L'autre formule de la variance",
          "paragraphText": "• Autre formule de la leçon : $V = \\frac{1}{N}(n_1 c_1^2 + n_2 c_2^2 + \\ldots + n_p c_p^2) - \\bar{x}^2$.\nElle évite de calculer chaque écart à la moyenne et donne le même résultat.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q2",
            "type": "mcq",
            "prompt": "Dans l'autre formule de la variance, que soustrait-on à la moyenne des carrés pondérés ?",
            "options": [
              "La médiane",
              "L'écart type",
              "Le premier quartile",
              "Le carré de la moyenne"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La formule soustrait $\\bar{x}^2$, le carré de la moyenne de la série."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Préparer le calcul avec les centres",
          "stepTheme": "Préparer le calcul avec les centres",
          "stepBadge": "Préparer le calcul avec les centres",
          "paragraphText": "• Exercice de fixation : pour le temps de sport de $125$ élèves, les classes sont $[0 ; 20[$, $[20 ; 40[$, $[40 ; 60[$, $[60 ; 100[$, $[100 ; 140[$ et $[140 ; 200[$, d'effectifs $35$, $41$, $30$, $12$, $5$ et $2$.\nLes centres correspondants sont $10$, $30$, $50$, $80$, $120$ et $170$, et la moyenne vaut $39{,}84$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q3",
            "type": "mcq",
            "prompt": "Quel est le centre de la classe $[60 ; 100[$ dans l'exercice sur le temps de sport ?",
            "options": [
              "$60$",
              "$100$",
              "$80$",
              "$40$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le centre est la moyenne des bornes : $80$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La variance du temps de sport",
          "stepTheme": "La variance du temps de sport",
          "stepBadge": "La variance du temps de sport",
          "paragraphText": "• Suite de l'exercice : en appliquant l'autre formule avec la moyenne $39{,}84$, on obtient la variance de la série du temps de sport.\nElle vaut environ $988{,}77$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q4",
            "type": "mcq",
            "prompt": "Que vaut la variance de la série du temps de sport, de moyenne $39{,}84$ ?",
            "options": [
              "Environ $988{,}77$",
              "Environ $31{,}44$",
              "$39{,}84$",
              "Environ $23{,}17$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le calcul de l'exercice de fixation donne une variance d'environ $988{,}77$ ; $31{,}44$ est l'écart type."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'écart type",
          "stepTheme": "L'écart type",
          "stepBadge": "L'écart type",
          "paragraphText": "• L'écart type d'une série statistique, noté $\\sigma$, est la racine carrée de la variance : $\\sigma = \\sqrt{V}$.\nIl a la même unité que les valeurs de la série, contrairement à la variance.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q5",
            "type": "mcq",
            "prompt": "Que vaut l'écart type de la série du temps de sport, dont la variance est d'environ $988{,}77$ ?",
            "options": [
              "Environ $988{,}77$",
              "Environ $494$",
              "Environ $23{,}17$",
              "Environ $31{,}44$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'écart type est la racine carrée de la variance : il vaut environ $31{,}44$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre variance et écart type",
          "stepTheme": "Ne pas confondre variance et écart type",
          "stepBadge": "Ne pas confondre variance et écart type",
          "paragraphText": "• Piège : pour la série du temps de sport, $988{,}77$ est la variance et $31{,}44$ est l'écart type.\nDonner l'un pour l'autre est l'erreur la plus fréquente de cette partie.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q6",
            "type": "mcq",
            "prompt": "Lequel de ces nombres est l'écart type de la série du temps de sport ?",
            "options": [
              "$988{,}77$",
              "$31{,}44$",
              "$39{,}84$",
              "$125$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'écart type est la racine carrée de la variance $988{,}77$ : environ $31{,}44$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q1",
          "type": "mcq",
          "prompt": "Que mesure la variance d'une série statistique ?",
          "options": [
            "La valeur centrale de la série",
            "La dispersion des valeurs autour de la moyenne",
            "Le plus grand effectif",
            "Le nombre de classes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La variance moyenne les écarts au carré entre les centres et la moyenne : elle mesure la dispersion."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q2",
          "type": "mcq",
          "prompt": "Dans l'autre formule de la variance, que soustrait-on à la moyenne des carrés pondérés ?",
          "options": [
            "La médiane",
            "L'écart type",
            "Le premier quartile",
            "Le carré de la moyenne"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La formule soustrait $\\bar{x}^2$, le carré de la moyenne de la série."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q3",
          "type": "mcq",
          "prompt": "Quel est le centre de la classe $[60 ; 100[$ dans l'exercice sur le temps de sport ?",
          "options": [
            "$60$",
            "$100$",
            "$80$",
            "$40$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le centre est la moyenne des bornes : $80$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q4",
          "type": "mcq",
          "prompt": "Que vaut la variance de la série du temps de sport, de moyenne $39{,}84$ ?",
          "options": [
            "Environ $988{,}77$",
            "Environ $31{,}44$",
            "$39{,}84$",
            "Environ $23{,}17$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcul de l'exercice de fixation donne une variance d'environ $988{,}77$ ; $31{,}44$ est l'écart type."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q5",
          "type": "mcq",
          "prompt": "Que vaut l'écart type de la série du temps de sport, dont la variance est d'environ $988{,}77$ ?",
          "options": [
            "Environ $988{,}77$",
            "Environ $494$",
            "Environ $23{,}17$",
            "Environ $31{,}44$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'écart type est la racine carrée de la variance : il vaut environ $31{,}44$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p06_q6",
          "type": "mcq",
          "prompt": "Lequel de ces nombres est l'écart type de la série du temps de sport ?",
          "options": [
            "$988{,}77$",
            "$31{,}44$",
            "$39{,}84$",
            "$125$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'écart type est la racine carrée de la variance $988{,}77$ : environ $31{,}44$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l06_statistiques_p07",
      "order": 7,
      "title": "Écart absolu moyen et écart interquartile",
      "summary": "Calculer l'écart absolu moyen et l'écart interquartile d'une série regroupée en classes.",
      "conceptExplanation": "L'écart absolu moyen, noté $e_m$, est le réel $e_m = \\frac{1}{N}\\left[n_1 |c_1 - \\bar{x}| + n_2 |c_2 - \\bar{x}| + \\ldots + n_p |c_p - \\bar{x}|\\right]$. Pour la série du temps de sport, il vaut environ $23{,}17$.\nL'écart interquartile est la différence entre le troisième et le premier quartile : c'est le nombre $Q_3 - Q_1$.\nPour la série du temps de sport, l'interpolation linéaire donne $Q_1$ environ $17{,}86$ et $Q_3$ environ $51{,}83$ : l'écart interquartile vaut environ $33{,}97$.",
      "keyRule": "Deux écarts à ne pas confondre : absolu moyen autour de la moyenne, interquartile entre $Q_3$ et $Q_1$.",
      "formulas": [
        {
          "name": "Écart absolu moyen",
          "formula": "e_m = \\frac{1}{N}\\left[n_1 |c_1 - \\bar{x}| + \\ldots + n_p |c_p - \\bar{x}|\\right]",
          "note": "Moyenne pondérée des écarts absolus à la moyenne."
        },
        {
          "name": "Écart interquartile",
          "formula": "Q_3 - Q_1",
          "note": "Différence entre le troisième et le premier quartile."
        }
      ],
      "workedExample": {
        "title": "L'écart interquartile du temps de sport (exercice de fixation)",
        "statement": "Pour la série du temps de sport de $125$ élèves, calcule l'écart interquartile.",
        "methodSteps": [
          "Les effectifs cumulés croissants sont $35$, $76$, $106$, $118$, $123$ et $125$.",
          "Le rang de $Q_1$ est $31{,}25$ : $Q_1$ est dans $[0 ; 20[$ et vaut environ $17{,}86$ par interpolation.",
          "Le rang de $Q_3$ est $93{,}75$ : $Q_3$ est dans $[40 ; 60[$ et vaut environ $51{,}83$ par interpolation, puis on soustrait."
        ],
        "conclusion": "L'écart interquartile vaut environ $33{,}97$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'écart absolu moyen",
          "stepTheme": "L'écart absolu moyen",
          "stepBadge": "L'écart absolu moyen",
          "paragraphText": "• L'écart absolu moyen, noté $e_m$, est le réel $e_m = \\frac{1}{N}\\left[n_1 |c_1 - \\bar{x}| + n_2 |c_2 - \\bar{x}| + \\ldots + n_p |c_p - \\bar{x}|\\right]$.\nIl moyenne les écarts absolus entre les centres des classes et la moyenne.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p07_q1",
            "type": "mcq",
            "prompt": "Dans la formule de l'écart absolu moyen, que calcule-t-on pour chaque classe ?",
            "options": [
              "La valeur absolue de l'écart entre le centre et la moyenne, pondérée par l'effectif",
              "Le carré de l'écart à la moyenne",
              "Le produit des bornes",
              "La densité de la classe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque terme est l'effectif multiplié par la valeur absolue de l'écart entre le centre et la moyenne."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'écart absolu moyen du temps de sport",
          "stepTheme": "L'écart absolu moyen du temps de sport",
          "stepBadge": "L'écart absolu moyen du temps de sport",
          "paragraphText": "• Exercice de fixation : pour la série du temps de sport, de moyenne $39{,}84$, la somme des produits des effectifs par les écarts absolus vaut $2895{,}68$ pour $125$ élèves.\nL'écart absolu moyen s'en déduit par une division.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p07_q2",
            "type": "mcq",
            "prompt": "Que vaut l'écart absolu moyen de la série du temps de sport ?",
            "options": [
              "Environ $31{,}44$",
              "Environ $988{,}77$",
              "Environ $23{,}17$",
              "$39{,}84$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On divise la somme pondérée des écarts absolus par l'effectif total : on obtient environ $23{,}17$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'écart interquartile",
          "stepTheme": "L'écart interquartile",
          "stepBadge": "L'écart interquartile",
          "paragraphText": "• L'écart interquartile est la différence entre le troisième et le premier quartile : c'est le nombre $Q_3 - Q_1$.\nIl mesure la dispersion de la moitié centrale des valeurs de la série.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p07_q3",
            "type": "mcq",
            "prompt": "Comment calcule-t-on l'écart interquartile ?",
            "options": [
              "$Q_3 + Q_1$",
              "$Q_3 - Q_1$",
              "$\\frac{Q_3}{Q_1}$",
              "$Q_2 - Q_1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, l'écart interquartile est la différence $Q_3 - Q_1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les quartiles du temps de sport",
          "stepTheme": "Les quartiles du temps de sport",
          "stepBadge": "Les quartiles du temps de sport",
          "paragraphText": "• Exercice de fixation : pour la série du temps de sport, les effectifs cumulés croissants sont $35$, $76$, $106$, $118$, $123$ et $125$.\nLe rang du premier quartile est $31{,}25$ et celui du troisième quartile est $93{,}75$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p07_q4",
            "type": "mcq",
            "prompt": "Dans quelle classe le premier quartile de la série du temps de sport se situe-t-il ?",
            "options": [
              "$[20 ; 40[$",
              "$[40 ; 60[$",
              "$[60 ; 100[$",
              "$[0 ; 20[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le rang $31{,}25$ est inférieur au premier cumul $35$ : $Q_1$ est dans la première classe $[0 ; 20[$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les valeurs des quartiles du temps de sport",
          "stepTheme": "Les valeurs des quartiles du temps de sport",
          "stepBadge": "Les valeurs des quartiles du temps de sport",
          "paragraphText": "• Par interpolation linéaire, la leçon obtient $Q_1$ environ $17{,}86$ dans la classe $[0 ; 20[$ et $Q_3$ environ $51{,}83$ dans la classe $[40 ; 60[$.\nL'écart interquartile se calcule alors directement.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p07_q5",
            "type": "mcq",
            "prompt": "Que vaut l'écart interquartile de la série du temps de sport, avec $Q_1$ environ $17{,}86$ et $Q_3$ environ $51{,}83$ ?",
            "options": [
              "Environ $69{,}69$",
              "Environ $17{,}86$",
              "Environ $33{,}97$",
              "Environ $25$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On soustrait : l'écart interquartile vaut environ $33{,}97$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Dispersion et position ne se mélangent pas",
          "stepTheme": "Dispersion et position ne se mélangent pas",
          "stepBadge": "Dispersion et position ne se mélangent pas",
          "paragraphText": "• Piège : la moyenne $39{,}84$ et la médiane sont des caractéristiques de position, alors que la variance, l'écart type, l'écart absolu moyen et l'écart interquartile sont des caractéristiques de dispersion.\nUne question de dispersion ne se répond jamais par une moyenne.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l06_statistiques_p07_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces caractéristiques est une caractéristique de dispersion ?",
            "options": [
              "L'écart interquartile",
              "La moyenne",
              "La médiane",
              "Le premier quartile"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'écart interquartile mesure un écart entre deux valeurs : c'est une caractéristique de dispersion."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p07_q1",
          "type": "mcq",
          "prompt": "Dans la formule de l'écart absolu moyen, que calcule-t-on pour chaque classe ?",
          "options": [
            "La valeur absolue de l'écart entre le centre et la moyenne, pondérée par l'effectif",
            "Le carré de l'écart à la moyenne",
            "Le produit des bornes",
            "La densité de la classe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque terme est l'effectif multiplié par la valeur absolue de l'écart entre le centre et la moyenne."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p07_q2",
          "type": "mcq",
          "prompt": "Que vaut l'écart absolu moyen de la série du temps de sport ?",
          "options": [
            "Environ $31{,}44$",
            "Environ $988{,}77$",
            "Environ $23{,}17$",
            "$39{,}84$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On divise la somme pondérée des écarts absolus par l'effectif total : on obtient environ $23{,}17$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p07_q3",
          "type": "mcq",
          "prompt": "Comment calcule-t-on l'écart interquartile ?",
          "options": [
            "$Q_3 + Q_1$",
            "$Q_3 - Q_1$",
            "$\\frac{Q_3}{Q_1}$",
            "$Q_2 - Q_1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, l'écart interquartile est la différence $Q_3 - Q_1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p07_q4",
          "type": "mcq",
          "prompt": "Dans quelle classe le premier quartile de la série du temps de sport se situe-t-il ?",
          "options": [
            "$[20 ; 40[$",
            "$[40 ; 60[$",
            "$[60 ; 100[$",
            "$[0 ; 20[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le rang $31{,}25$ est inférieur au premier cumul $35$ : $Q_1$ est dans la première classe $[0 ; 20[$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p07_q5",
          "type": "mcq",
          "prompt": "Que vaut l'écart interquartile de la série du temps de sport, avec $Q_1$ environ $17{,}86$ et $Q_3$ environ $51{,}83$ ?",
          "options": [
            "Environ $69{,}69$",
            "Environ $17{,}86$",
            "Environ $33{,}97$",
            "Environ $25$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On soustrait : l'écart interquartile vaut environ $33{,}97$."
        },
        {
          "id": "premiere_a1_maths_numerique_l06_statistiques_p07_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces caractéristiques est une caractéristique de dispersion ?",
          "options": [
            "L'écart interquartile",
            "La moyenne",
            "La médiane",
            "Le premier quartile"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'écart interquartile mesure un écart entre deux valeurs : c'est une caractéristique de dispersion."
        }
      ]
    }
  ]
};
