import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 3 : GENERALITES SUR LES FONCTIONS » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=867
export const MATHS_1ERE_A_L03_GENERALITES_FONCTIONS: CurriculumChapter = {
  "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions",
  "subjectId": "maths",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 3,
  "title": "Leçon 3 : Généralités sur les fonctions",
  "summary": "À partir des positions d'un mobile sur un écran, on étudie les fonctions paires et impaires, puis les axes et centres de symétrie d'une courbe et leur lien avec la parité.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=867",
  "points": [
    {
      "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01",
      "order": 1,
      "title": "Fonctions paires",
      "summary": "Reconnaître une fonction paire par la définition $f(-x) = f(x)$ et par la symétrie de sa courbe par rapport à l'axe des ordonnées.",
      "conceptExplanation": "Soit $f$ une fonction numérique d'ensemble de définition $D_f$. La fonction $f$ est paire lorsque, pour tout $x \\in D_f$, on a $-x \\in D_f$ et $f(-x) = f(x)$.\nExemple : la fonction définie sur $\\mathbb{R}$ par $f(x) = x^2 + 2$ est paire, car pour tout réel $x$, $-x \\in D_f$ et $f(-x) = (-x)^2 + 2 = x^2 + 2 = f(x)$.\nPropriété : une fonction est paire si et seulement si l'axe des ordonnées $(OJ)$ est un axe de symétrie de sa courbe représentative.",
      "keyRule": "Paire rime avec axe des ordonnées : $f(-x) = f(x)$ et courbe symétrique par rapport à $(OJ)$.",
      "formulas": [
        {
          "name": "Fonction paire",
          "formula": "\\forall x \\in D_f,\\ f(-x) = f(x)",
          "note": "Avec aussi $-x \\in D_f$ pour tout $x \\in D_f$."
        }
      ],
      "workedExample": {
        "title": "$f(x) = x^2 + 2$ est paire (exemple de la leçon)",
        "statement": "On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = x^2 + 2$. Montre que $f$ est paire.",
        "methodSteps": [
          "L'ensemble de définition est $D_f = \\mathbb{R}$, car $f$ est une fonction polynôme.",
          "Pour tout réel $x$, $-x \\in D_f$.",
          "On calcule $f(-x) = (-x)^2 + 2 = x^2 + 2 = f(x)$."
        ],
        "conclusion": "La fonction $f$ est paire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d'une fonction paire",
          "stepTheme": "La définition d'une fonction paire",
          "stepBadge": "La définition d'une fonction paire",
          "paragraphText": "• Définition : une fonction $f$ d'ensemble de définition $D_f$ est paire lorsque, pour tout $x \\in D_f$, on a $-x \\in D_f$ et $f(-x) = f(x)$.\nLes deux conditions doivent être vérifiées : d'abord la symétrie de l'ensemble de définition, puis l'égalité des images.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01_q1",
            "type": "mcq",
            "prompt": "Quelles sont les deux conditions pour qu'une fonction $f$ soit paire ?",
            "options": [
              "$-x \\in D_f$ et $f(-x) = -f(x)$",
              "$f(0) = 0$ et $f$ est croissante",
              "$-x \\in D_f$ et $f(-x) = f(x)$",
              "$f(-x) = f(x)$ seulement, sans condition sur $D_f$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La définition exige la symétrie de $D_f$ par rapport à $0$ et l'égalité $f(-x) = f(x)$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'exemple de la fonction carré décalée",
          "stepTheme": "L'exemple de la fonction carré décalée",
          "stepBadge": "L'exemple de la fonction carré décalée",
          "paragraphText": "• Exemple de la leçon : pour $f(x) = x^2 + 2$ définie sur $\\mathbb{R}$, on a $f(-x) = (-x)^2 + 2 = x^2 + 2 = f(x)$.\nLa fonction $f$ est donc paire.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01_q2",
            "type": "mcq",
            "prompt": "La fonction $f$ définie par $f(x) = x^2 + 2$ est :",
            "options": [
              "Paire",
              "Impaire",
              "Ni paire ni impaire",
              "Définie seulement sur les positifs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On a $f(-x) = x^2 + 2 = f(x)$ pour tout réel $x$ : la fonction est paire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'axe des ordonnées comme axe de symétrie",
          "stepTheme": "L'axe des ordonnées comme axe de symétrie",
          "stepBadge": "L'axe des ordonnées comme axe de symétrie",
          "paragraphText": "• Propriété : une fonction est paire si et seulement si l'axe des ordonnées $(OJ)$ est un axe de symétrie de sa courbe représentative.\nDans l'exercice de fixation de la leçon, c'est la figure $3$ qui représente une fonction paire.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01_q3",
            "type": "mcq",
            "prompt": "Une fonction est paire si et seulement si sa courbe admet quel élément de symétrie ?",
            "options": [
              "L'origine du repère comme centre",
              "L'axe des abscisses comme axe",
              "La droite d'équation $x = 2$ comme axe",
              "L'axe des ordonnées comme axe"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La propriété de la leçon : la parité équivaut à la symétrie par rapport à l'axe des ordonnées $(OJ)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La méthode d'étude de la parité",
          "stepTheme": "La méthode d'étude de la parité",
          "stepBadge": "La méthode d'étude de la parité",
          "paragraphText": "• Méthode de la leçon : déterminer d'abord l'ensemble de définition $D_f$, vérifier que $-x \\in D_f$ pour tout $x \\in D_f$, puis calculer $f(-x)$ et le comparer à $f(x)$ et à $-f(x)$.\nC'est cet ordre qui structure tous les exemples du résumé.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01_q4",
            "type": "mcq",
            "prompt": "Quelle est la première étape de l'étude de la parité d'une fonction ?",
            "options": [
              "Calculer $f(1)$",
              "Déterminer l'ensemble de définition $D_f$",
              "Tracer la courbe",
              "Calculer la dérivée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tous les exemples de la leçon commencent par la détermination de l'ensemble de définition."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Oublier la condition sur l'ensemble de définition",
          "stepTheme": "Oublier la condition sur l'ensemble de définition",
          "stepBadge": "Oublier la condition sur l'ensemble de définition",
          "paragraphText": "• Piège : l'égalité $f(-x) = f(x)$ ne suffit pas si l'ensemble de définition n'est pas symétrique par rapport à $0$.\nSans la condition $-x \\in D_f$, on ne peut pas conclure que la fonction est paire.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01_q5",
            "type": "mcq",
            "prompt": "Peut-on conclure qu'une fonction est paire si on a seulement vérifié $f(-x) = f(x)$, sans regarder $D_f$ ?",
            "options": [
              "Non, il faut aussi que $-x \\in D_f$ pour tout $x \\in D_f$",
              "Oui, c'est suffisant",
              "Oui, si la fonction est un polynôme",
              "Non, car il faut $f(0) = 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La définition comporte deux conditions : la symétrie de $D_f$ est indispensable."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Compléter un tableau pour une fonction paire",
          "stepTheme": "Compléter un tableau pour une fonction paire",
          "stepBadge": "Compléter un tableau pour une fonction paire",
          "paragraphText": "• Exercice de fixation : on donne un tableau où $f(-3) = 7$, $f(-1) = 2$, $f(0) = -3$ et $f(2) = -4{,}5$.\nSi $f$ est paire, les images des opposés sont égales : $f(3) = f(-3)$, $f(1) = f(-1)$ et $f(-2) = f(2)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01_q6",
            "type": "mcq",
            "prompt": "Si $f$ est paire et $f(-3) = 7$, que vaut $f(3)$ ?",
            "options": [
              "$-7$",
              "$0$",
              "$7$",
              "$3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour une fonction paire, $f(3) = f(-3) = 7$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01_q1",
          "type": "mcq",
          "prompt": "Quelles sont les deux conditions pour qu'une fonction $f$ soit paire ?",
          "options": [
            "$-x \\in D_f$ et $f(-x) = -f(x)$",
            "$f(0) = 0$ et $f$ est croissante",
            "$-x \\in D_f$ et $f(-x) = f(x)$",
            "$f(-x) = f(x)$ seulement, sans condition sur $D_f$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La définition exige la symétrie de $D_f$ par rapport à $0$ et l'égalité $f(-x) = f(x)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01_q2",
          "type": "mcq",
          "prompt": "La fonction $f$ définie par $f(x) = x^2 + 2$ est :",
          "options": [
            "Paire",
            "Impaire",
            "Ni paire ni impaire",
            "Définie seulement sur les positifs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On a $f(-x) = x^2 + 2 = f(x)$ pour tout réel $x$ : la fonction est paire."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01_q3",
          "type": "mcq",
          "prompt": "Une fonction est paire si et seulement si sa courbe admet quel élément de symétrie ?",
          "options": [
            "L'origine du repère comme centre",
            "L'axe des abscisses comme axe",
            "La droite d'équation $x = 2$ comme axe",
            "L'axe des ordonnées comme axe"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La propriété de la leçon : la parité équivaut à la symétrie par rapport à l'axe des ordonnées $(OJ)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01_q4",
          "type": "mcq",
          "prompt": "Quelle est la première étape de l'étude de la parité d'une fonction ?",
          "options": [
            "Calculer $f(1)$",
            "Déterminer l'ensemble de définition $D_f$",
            "Tracer la courbe",
            "Calculer la dérivée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tous les exemples de la leçon commencent par la détermination de l'ensemble de définition."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01_q5",
          "type": "mcq",
          "prompt": "Peut-on conclure qu'une fonction est paire si on a seulement vérifié $f(-x) = f(x)$, sans regarder $D_f$ ?",
          "options": [
            "Non, il faut aussi que $-x \\in D_f$ pour tout $x \\in D_f$",
            "Oui, c'est suffisant",
            "Oui, si la fonction est un polynôme",
            "Non, car il faut $f(0) = 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La définition comporte deux conditions : la symétrie de $D_f$ est indispensable."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p01_q6",
          "type": "mcq",
          "prompt": "Si $f$ est paire et $f(-3) = 7$, que vaut $f(3)$ ?",
          "options": [
            "$-7$",
            "$0$",
            "$7$",
            "$3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour une fonction paire, $f(3) = f(-3) = 7$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02",
      "order": 2,
      "title": "Fonctions impaires",
      "summary": "Reconnaître une fonction impaire par la définition $f(-x) = -f(x)$ et par la symétrie de sa courbe par rapport à l'origine.",
      "conceptExplanation": "Soit $f$ une fonction numérique d'ensemble de définition $D_f$. La fonction $f$ est impaire lorsque, pour tout $x \\in D_f$, on a $-x \\in D_f$ et $f(-x) = -f(x)$.\nExemple : la fonction définie sur $\\mathbb{R}$ par $f(x) = x^3 - 6x$ est impaire, car $f(-x) = -x^3 + 6x = -(x^3 - 6x) = -f(x)$.\nPropriété : une fonction est impaire si et seulement si l'origine $O$ du repère est un centre de symétrie de sa courbe représentative.\nRemarque : il existe de nombreuses fonctions qui ne sont ni paires ni impaires, comme $f(x) = 3x^2 - 2x$.",
      "keyRule": "Impaire rime avec origine : $f(-x) = -f(x)$ et courbe symétrique par rapport à $O$.",
      "formulas": [
        {
          "name": "Fonction impaire",
          "formula": "\\forall x \\in D_f,\\ f(-x) = -f(x)",
          "note": "Avec aussi $-x \\in D_f$ pour tout $x \\in D_f$."
        }
      ],
      "workedExample": {
        "title": "$f(x) = x^3 - 6x$ est impaire (exemple de la leçon)",
        "statement": "On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = x^3 - 6x$. Montre que $f$ est impaire.",
        "methodSteps": [
          "L'ensemble de définition est $D_f = \\mathbb{R}$, car $f$ est une fonction polynôme.",
          "Pour tout réel $x$, $-x \\in D_f$.",
          "On calcule $f(-x) = (-x)^3 - 6(-x) = -x^3 + 6x = -(x^3 - 6x) = -f(x)$."
        ],
        "conclusion": "La fonction $f$ est impaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d'une fonction impaire",
          "stepTheme": "La définition d'une fonction impaire",
          "stepBadge": "La définition d'une fonction impaire",
          "paragraphText": "• Définition : une fonction $f$ d'ensemble de définition $D_f$ est impaire lorsque, pour tout $x \\in D_f$, on a $-x \\in D_f$ et $f(-x) = -f(x)$.\nLa différence avec la parité tient au signe : l'image de l'opposé est l'opposée de l'image.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02_q1",
            "type": "mcq",
            "prompt": "Quelles sont les deux conditions pour qu'une fonction $f$ soit impaire ?",
            "options": [
              "$-x \\in D_f$ et $f(-x) = f(x)$",
              "$-x \\in D_f$ et $f(-x) = -f(x)$",
              "$f(0) = 1$ et $f$ est décroissante",
              "$f(-x) = -f(x)$ seulement, sans condition sur $D_f$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition exige la symétrie de $D_f$ par rapport à $0$ et l'égalité $f(-x) = -f(x)$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'exemple du polynôme impair",
          "stepTheme": "L'exemple du polynôme impair",
          "stepBadge": "L'exemple du polynôme impair",
          "paragraphText": "• Exemple de la leçon : pour $f(x) = x^3 - 6x$ définie sur $\\mathbb{R}$, on a $f(-x) = -x^3 + 6x = -(x^3 - 6x) = -f(x)$.\nLa fonction $f$ est donc impaire.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02_q2",
            "type": "mcq",
            "prompt": "La fonction $f$ définie par $f(x) = x^3 - 6x$ est :",
            "options": [
              "Paire",
              "Ni paire ni impaire",
              "Constante",
              "Impaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On a $f(-x) = -x^3 + 6x = -f(x)$ pour tout réel $x$ : la fonction est impaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'origine comme centre de symétrie",
          "stepTheme": "L'origine comme centre de symétrie",
          "stepBadge": "L'origine comme centre de symétrie",
          "paragraphText": "• Propriété : une fonction est impaire si et seulement si l'origine $O$ du repère est un centre de symétrie de sa courbe représentative.\nDans l'exercice de fixation de la leçon, les figures $2$ et $4$ représentent des fonctions impaires.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02_q3",
            "type": "mcq",
            "prompt": "Une fonction est impaire si et seulement si sa courbe admet quel élément de symétrie ?",
            "options": [
              "L'axe des ordonnées comme axe",
              "L'axe des abscisses comme axe",
              "L'origine du repère comme centre",
              "Une asymptote verticale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La propriété de la leçon : l'imparité équivaut à la symétrie centrale par rapport à l'origine $O$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ni paire ni impaire, c'est possible",
          "stepTheme": "Ni paire ni impaire, c'est possible",
          "stepBadge": "Ni paire ni impaire, c'est possible",
          "paragraphText": "• Remarque de la leçon : de nombreuses fonctions ne sont ni paires ni impaires.\nDans l'étude de la parité, on arrive à l'une des trois conclusions : $f$ est paire, $f$ est impaire, ou $f$ est ni paire ni impaire.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02_q4",
            "type": "mcq",
            "prompt": "Une fonction qui n'est pas paire est-elle forcément impaire ?",
            "options": [
              "Non, elle peut être ni paire ni impaire",
              "Oui, toujours",
              "Oui, si elle est définie sur $\\mathbb{R}$",
              "Non, car toute fonction est paire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La remarque de la leçon le dit : beaucoup de fonctions sont ni paires ni impaires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une fonction ni paire ni impaire",
          "stepTheme": "Une fonction ni paire ni impaire",
          "stepBadge": "Une fonction ni paire ni impaire",
          "paragraphText": "• Exercice de fixation : pour $f(x) = 3x^2 - 2x$, on calcule $f(1) = 1$ et $f(-1) = 5$.\nComme $f(-1) \\neq f(1)$ et $f(-1) \\neq -f(1)$, la fonction n'est ni paire ni impaire.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02_q5",
            "type": "mcq",
            "prompt": "Pour $f(x) = 3x^2 - 2x$, que valent $f(1)$ et $f(-1)$ ?",
            "options": [
              "$f(1) = 5$ et $f(-1) = 1$",
              "$f(1) = 1$ et $f(-1) = 1$",
              "$f(1) = -1$ et $f(-1) = 5$",
              "$f(1) = 1$ et $f(-1) = 5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $f(1) = 3 - 2 = 1$ et $f(-1) = 3 + 2 = 5$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Compléter un tableau pour une fonction impaire",
          "stepTheme": "Compléter un tableau pour une fonction impaire",
          "stepBadge": "Compléter un tableau pour une fonction impaire",
          "paragraphText": "• Exercice de fixation : avec le même tableau que pour la parité, si $f$ est impaire, les images des opposés sont opposées.\nPar exemple, $f(-3) = 7$ donne $f(3) = -7$, et $f(-1) = 2$ donne $f(1) = -2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02_q6",
            "type": "mcq",
            "prompt": "Si $f$ est impaire et $f(-3) = 7$, que vaut $f(3)$ ?",
            "options": [
              "$7$",
              "$-7$",
              "$0$",
              "$3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour une fonction impaire, $f(3) = -f(-3) = -7$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02_q1",
          "type": "mcq",
          "prompt": "Quelles sont les deux conditions pour qu'une fonction $f$ soit impaire ?",
          "options": [
            "$-x \\in D_f$ et $f(-x) = f(x)$",
            "$-x \\in D_f$ et $f(-x) = -f(x)$",
            "$f(0) = 1$ et $f$ est décroissante",
            "$f(-x) = -f(x)$ seulement, sans condition sur $D_f$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition exige la symétrie de $D_f$ par rapport à $0$ et l'égalité $f(-x) = -f(x)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02_q2",
          "type": "mcq",
          "prompt": "La fonction $f$ définie par $f(x) = x^3 - 6x$ est :",
          "options": [
            "Paire",
            "Ni paire ni impaire",
            "Constante",
            "Impaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On a $f(-x) = -x^3 + 6x = -f(x)$ pour tout réel $x$ : la fonction est impaire."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02_q3",
          "type": "mcq",
          "prompt": "Une fonction est impaire si et seulement si sa courbe admet quel élément de symétrie ?",
          "options": [
            "L'axe des ordonnées comme axe",
            "L'axe des abscisses comme axe",
            "L'origine du repère comme centre",
            "Une asymptote verticale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La propriété de la leçon : l'imparité équivaut à la symétrie centrale par rapport à l'origine $O$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02_q4",
          "type": "mcq",
          "prompt": "Une fonction qui n'est pas paire est-elle forcément impaire ?",
          "options": [
            "Non, elle peut être ni paire ni impaire",
            "Oui, toujours",
            "Oui, si elle est définie sur $\\mathbb{R}$",
            "Non, car toute fonction est paire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La remarque de la leçon le dit : beaucoup de fonctions sont ni paires ni impaires."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02_q5",
          "type": "mcq",
          "prompt": "Pour $f(x) = 3x^2 - 2x$, que valent $f(1)$ et $f(-1)$ ?",
          "options": [
            "$f(1) = 5$ et $f(-1) = 1$",
            "$f(1) = 1$ et $f(-1) = 1$",
            "$f(1) = -1$ et $f(-1) = 5$",
            "$f(1) = 1$ et $f(-1) = 5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $f(1) = 3 - 2 = 1$ et $f(-1) = 3 + 2 = 5$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p02_q6",
          "type": "mcq",
          "prompt": "Si $f$ est impaire et $f(-3) = 7$, que vaut $f(3)$ ?",
          "options": [
            "$7$",
            "$-7$",
            "$0$",
            "$3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour une fonction impaire, $f(3) = -f(-3) = -7$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03",
      "order": 3,
      "title": "Axe de symétrie d'une courbe",
      "summary": "Justifier qu'une droite d'équation $x = a$ est un axe de symétrie d'une courbe à l'aide de l'égalité $f(a + h) = f(a - h)$.",
      "conceptExplanation": "Soit $f$ une fonction de représentation graphique $(C_f)$ et soit la droite $(\\Delta)$ d'équation $x = a$. La droite $(\\Delta)$ est un axe de symétrie de $(C_f)$ si et seulement si, pour tout $h \\in \\mathbb{R}$ tel que $a + h \\in D_f$, on a $a - h \\in D_f$ et $f(a + h) = f(a - h)$.\nExemple : pour $f(x) = (x - 2)^2 + 1$, on a $f(2 + h) = h^2 + 1$ et $f(2 - h) = h^2 + 1$, donc la droite d'équation $x = 2$ est un axe de symétrie de la courbe.\nLe cas $a = 0$ redonne la fonction paire, symétrique par rapport à l'axe des ordonnées.",
      "keyRule": "Axe $x = a$ : les images de $a + h$ et de $a - h$ doivent être égales.",
      "formulas": [
        {
          "name": "Axe de symétrie",
          "formula": "f(a + h) = f(a - h)",
          "note": "Pour la droite d'équation $x = a$, avec $a - h \\in D_f$."
        }
      ],
      "workedExample": {
        "title": "La droite d'équation $x = 2$ (exercice de fixation)",
        "statement": "Soit la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = (x - 2)^2 + 1$. Justifie que la droite d'équation $x = 2$ est un axe de symétrie de sa courbe.",
        "methodSteps": [
          "L'ensemble de définition est $D_f = \\mathbb{R}$ : pour tout $h$, $2 - h \\in D_f$.",
          "On calcule $f(2 + h) = h^2 + 1$.",
          "On calcule $f(2 - h) = (-h)^2 + 1 = h^2 + 1$."
        ],
        "conclusion": "Les deux images sont égales : la droite d'équation $x = 2$ est bien un axe de symétrie de la courbe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La propriété de l'axe de symétrie",
          "stepTheme": "La propriété de l'axe de symétrie",
          "stepBadge": "La propriété de l'axe de symétrie",
          "paragraphText": "• Propriété : la droite $(\\Delta)$ d'équation $x = a$ est un axe de symétrie de la courbe de $f$ si et seulement si, pour tout $h \\in \\mathbb{R}$ tel que $a + h \\in D_f$, on a $a - h \\in D_f$ et $f(a + h) = f(a - h)$.\nOn compare donc les images de deux points symétriques par rapport à $a$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03_q1",
            "type": "mcq",
            "prompt": "Quelle égalité caractérise un axe de symétrie d'équation $x = a$ pour la courbe de $f$ ?",
            "options": [
              "$f(a + h) = f(a - h)$",
              "$f(a + h) = -f(a - h)$",
              "$f(a + h) + f(a - h) = 0$",
              "$f(h) = f(a)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour un axe vertical d'équation $x = a$, les points symétriques $a + h$ et $a - h$ ont la même image."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'axe d'équation x égale 2",
          "stepTheme": "L'axe d'équation x égale 2",
          "stepBadge": "L'axe d'équation x égale 2",
          "paragraphText": "• Exercice de fixation : pour $f(x) = (x - 2)^2 + 1$, la droite d'équation $x = 2$ est un axe de symétrie de la courbe.\nOn le vérifie en calculant $f(2 + h)$ et $f(2 - h)$, qui donnent tous deux $h^2 + 1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03_q2",
            "type": "mcq",
            "prompt": "Pour $f(x) = (x - 2)^2 + 1$, que valent $f(2 + h)$ et $f(2 - h)$ ?",
            "options": [
              "$h^2 + 1$ et $h^2 - 1$",
              "$h^2$ et $-h^2$",
              "Tous deux $h^2 + 1$",
              "$2h + 1$ et $-2h + 1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $f(2 + h) = h^2 + 1$ et $f(2 - h) = (-h)^2 + 1 = h^2 + 1$ : ils sont égaux."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La démarche de justification",
          "stepTheme": "La démarche de justification",
          "stepBadge": "La démarche de justification",
          "paragraphText": "• Méthode de l'exercice : préciser l'ensemble de définition, vérifier que $a - h \\in D_f$, puis calculer séparément $f(a + h)$ et $f(a - h)$ avant de les comparer.\nLa conclusion ne vient qu'après l'égalité des deux calculs.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03_q3",
            "type": "mcq",
            "prompt": "Pour justifier que $x = 2$ est un axe de symétrie, quels deux calculs faut-il comparer ?",
            "options": [
              "$f(2)$ et $f(0)$",
              "$f(2 + h)$ et $f(2 - h)$",
              "$f(h)$ et $f(-h)$",
              "$f(2 + h)$ et $-f(2 - h)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La propriété compare les images des points symétriques par rapport à $2$ : $2 + h$ et $2 - h$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le lien avec la parité",
          "stepTheme": "Le lien avec la parité",
          "stepBadge": "Le lien avec la parité",
          "paragraphText": "• Une fonction paire correspond au cas particulier où l'axe de symétrie est l'axe des ordonnées, d'équation $x = 0$.\nDans l'exercice de renforcement de la leçon, la figure (c) a pour axe la droite d'équation $x = 2$ : la fonction correspondante est ni paire ni impaire, car l'axe n'est pas $(OJ)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03_q4",
            "type": "mcq",
            "prompt": "Une courbe admet pour axe de symétrie la droite d'équation $x = 2$. Que peut-on dire de la parité de la fonction ?",
            "options": [
              "Elle est paire",
              "Elle est impaire",
              "Elle est paire et impaire",
              "Elle est ni paire ni impaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La parité exige l'axe des ordonnées : avec l'axe $x = 2$, différent de $(OJ)$, la fonction est ni paire ni impaire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un axe différent de l'axe des ordonnées",
          "stepTheme": "Un axe différent de l'axe des ordonnées",
          "stepBadge": "Un axe différent de l'axe des ordonnées",
          "paragraphText": "• Piège de l'exercice de renforcement : la figure (d) admet l'axe des ordonnées comme axe de symétrie, mais son ensemble de définition n'est pas symétrique au sens de la parité usuelle traitée ; la correction conclut « ni paire ni impaire » pour un axe différent de $(OJ)$ dans la figure (c).\nIl faut donc toujours identifier précisément l'axe avant de parler de parité.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03_q5",
            "type": "mcq",
            "prompt": "Quel axe de symétrie correspond exactement à une fonction paire ?",
            "options": [
              "La droite d'équation $x = 2$",
              "L'axe des abscisses",
              "L'axe des ordonnées $(OJ)$",
              "La droite d'équation $x = -1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par propriété, la parité équivaut à la symétrie par rapport à l'axe des ordonnées."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Compléter une figure par symétrie axiale",
          "stepTheme": "Compléter une figure par symétrie axiale",
          "stepBadge": "Compléter une figure par symétrie axiale",
          "paragraphText": "• Situation complexe de la leçon : la représentation graphique de la figure $1$ admet l'axe des ordonnées comme axe de symétrie.\nOn complète donc la partie imprimée en construisant son symétrique par rapport à l'axe $(OJ)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03_q6",
            "type": "mcq",
            "prompt": "Dans la situation complexe, comment complète-t-on la figure dont l'axe des ordonnées est un axe de symétrie ?",
            "options": [
              "En construisant le symétrique par rapport à l'axe $(OJ)$",
              "Par une translation",
              "En tournant la figure d'un demi-tour",
              "Au hasard, la figure est libre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On construit le symétrique de la partie connue par rapport à l'axe des ordonnées."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03_q1",
          "type": "mcq",
          "prompt": "Quelle égalité caractérise un axe de symétrie d'équation $x = a$ pour la courbe de $f$ ?",
          "options": [
            "$f(a + h) = f(a - h)$",
            "$f(a + h) = -f(a - h)$",
            "$f(a + h) + f(a - h) = 0$",
            "$f(h) = f(a)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour un axe vertical d'équation $x = a$, les points symétriques $a + h$ et $a - h$ ont la même image."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03_q2",
          "type": "mcq",
          "prompt": "Pour $f(x) = (x - 2)^2 + 1$, que valent $f(2 + h)$ et $f(2 - h)$ ?",
          "options": [
            "$h^2 + 1$ et $h^2 - 1$",
            "$h^2$ et $-h^2$",
            "Tous deux $h^2 + 1$",
            "$2h + 1$ et $-2h + 1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $f(2 + h) = h^2 + 1$ et $f(2 - h) = (-h)^2 + 1 = h^2 + 1$ : ils sont égaux."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03_q3",
          "type": "mcq",
          "prompt": "Pour justifier que $x = 2$ est un axe de symétrie, quels deux calculs faut-il comparer ?",
          "options": [
            "$f(2)$ et $f(0)$",
            "$f(2 + h)$ et $f(2 - h)$",
            "$f(h)$ et $f(-h)$",
            "$f(2 + h)$ et $-f(2 - h)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La propriété compare les images des points symétriques par rapport à $2$ : $2 + h$ et $2 - h$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03_q4",
          "type": "mcq",
          "prompt": "Une courbe admet pour axe de symétrie la droite d'équation $x = 2$. Que peut-on dire de la parité de la fonction ?",
          "options": [
            "Elle est paire",
            "Elle est impaire",
            "Elle est paire et impaire",
            "Elle est ni paire ni impaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La parité exige l'axe des ordonnées : avec l'axe $x = 2$, différent de $(OJ)$, la fonction est ni paire ni impaire."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03_q5",
          "type": "mcq",
          "prompt": "Quel axe de symétrie correspond exactement à une fonction paire ?",
          "options": [
            "La droite d'équation $x = 2$",
            "L'axe des abscisses",
            "L'axe des ordonnées $(OJ)$",
            "La droite d'équation $x = -1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par propriété, la parité équivaut à la symétrie par rapport à l'axe des ordonnées."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p03_q6",
          "type": "mcq",
          "prompt": "Dans la situation complexe, comment complète-t-on la figure dont l'axe des ordonnées est un axe de symétrie ?",
          "options": [
            "En construisant le symétrique par rapport à l'axe $(OJ)$",
            "Par une translation",
            "En tournant la figure d'un demi-tour",
            "Au hasard, la figure est libre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On construit le symétrique de la partie connue par rapport à l'axe des ordonnées."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04",
      "order": 4,
      "title": "Centre de symétrie d'une courbe",
      "summary": "Justifier qu'un point $\\Omega(a ; b)$ est un centre de symétrie d'une courbe à l'aide de la demi-somme des images.",
      "conceptExplanation": "Soit $f$ une fonction de représentation graphique $(C_f)$ et $\\Omega(a ; b)$ un point du plan. Le point $\\Omega$ est un centre de symétrie de $(C_f)$ si et seulement si, pour tout $h \\in \\mathbb{R}$ tel que $a + h \\in D_f$, on a $a - h \\in D_f$ et $\\frac{f(a + h) + f(a - h)}{2} = b$.\nLe cas du centre $O(0 ; 0)$ redonne la fonction impaire, symétrique par rapport à l'origine du repère.\nSi le centre est différent de l'origine, comme le point $A(1 ; 1)$ d'un exercice de la leçon, la fonction est ni paire ni impaire.",
      "keyRule": "Centre $\\Omega(a ; b)$ : la demi-somme des images de $a + h$ et de $a - h$ doit valoir $b$.",
      "formulas": [
        {
          "name": "Centre de symétrie",
          "formula": "\\frac{f(a + h) + f(a - h)}{2} = b",
          "note": "Pour le centre $\\Omega(a ; b)$, avec $a - h \\in D_f$."
        }
      ],
      "workedExample": {
        "title": "Un centre différent de l'origine (exercice de renforcement)",
        "statement": "Sur une figure de l'exercice, la courbe a pour ensemble de définition $[-1 ; 3]$ et pour centre de symétrie le point $A(1 ; 1)$. Précise l'élément de symétrie et la parité de la fonction.",
        "methodSteps": [
          "L'ensemble de définition lu sur la figure est $[-1 ; 3]$.",
          "L'élément de symétrie est un centre : le point $A(1 ; 1)$.",
          "Ce centre est différent de l'origine du repère."
        ],
        "conclusion": "La fonction est ni paire ni impaire : seul le centre $O$ donne une fonction impaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La propriété du centre de symétrie",
          "stepTheme": "La propriété du centre de symétrie",
          "stepBadge": "La propriété du centre de symétrie",
          "paragraphText": "• Propriété : le point $\\Omega(a ; b)$ est un centre de symétrie de la courbe de $f$ si et seulement si, pour tout $h \\in \\mathbb{R}$ tel que $a + h \\in D_f$, on a $a - h \\in D_f$ et $\\frac{f(a + h) + f(a - h)}{2} = b$.\nC'est la moyenne des deux images qui doit valoir l'ordonnée du centre.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04_q1",
            "type": "mcq",
            "prompt": "Quelle égalité caractérise un centre de symétrie $\\Omega(a ; b)$ pour la courbe de $f$ ?",
            "options": [
              "$f(a + h) = f(a - h)$",
              "$f(a + h) + f(a - h) = 0$ dans tous les cas",
              "$f(a) = b$ seulement",
              "$\\frac{f(a + h) + f(a - h)}{2} = b$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pour un centre $\\Omega(a ; b)$, la demi-somme des images des points symétriques vaut $b$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le lien avec l'imparité",
          "stepTheme": "Le lien avec l'imparité",
          "stepBadge": "Le lien avec l'imparité",
          "paragraphText": "• Une fonction impaire correspond au cas particulier où le centre de symétrie est l'origine $O(0 ; 0)$ du repère.\nDans l'exercice de renforcement de la leçon, les figures (b) et (e) ont pour centre l'origine : les fonctions correspondantes sont impaires.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04_q2",
            "type": "mcq",
            "prompt": "Quel centre de symétrie correspond exactement à une fonction impaire ?",
            "options": [
              "Le point $A(1 ; 1)$",
              "L'origine $O$ du repère",
              "Le point $A(1 ; 2)$",
              "N'importe quel point du plan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par propriété, l'imparité équivaut à la symétrie centrale par rapport à l'origine $O$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Un centre différent de l'origine",
          "stepTheme": "Un centre différent de l'origine",
          "stepBadge": "Un centre différent de l'origine",
          "paragraphText": "• Piège de l'exercice de renforcement : la figure (a) a pour centre de symétrie le point $A(1 ; 1)$, différent de l'origine.\nLa fonction correspondante est donc ni paire ni impaire, malgré l'existence d'un centre de symétrie.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04_q3",
            "type": "mcq",
            "prompt": "Une courbe admet pour centre de symétrie le point $A(1 ; 1)$. Que peut-on dire de la parité de la fonction ?",
            "options": [
              "Elle est ni paire ni impaire",
              "Elle est impaire",
              "Elle est paire",
              "Elle est impaire car tout centre donne l'imparité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'imparité exige le centre $O$ : avec un autre centre, la fonction est ni paire ni impaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La démarche de justification",
          "stepTheme": "La démarche de justification",
          "stepBadge": "La démarche de justification",
          "paragraphText": "• Méthode : préciser l'ensemble de définition, vérifier que $a - h \\in D_f$, calculer $f(a + h)$ et $f(a - h)$, puis leur demi-somme.\nLa conclusion vient seulement si cette demi-somme est constante et égale à $b$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04_q4",
            "type": "mcq",
            "prompt": "Dans la justification d'un centre de symétrie $\\Omega(a ; b)$, quelle quantité doit-on calculer en dernier ?",
            "options": [
              "Le produit $f(a + h) \\times f(a - h)$",
              "La différence $f(a + h) - f(a - h)$",
              "La demi-somme $\\frac{f(a + h) + f(a - h)}{2}$",
              "L'image $f(a)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la demi-somme des deux images qui doit valoir l'ordonnée $b$ du centre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Retrouver la parité sur des figures",
          "stepTheme": "Retrouver la parité sur des figures",
          "stepBadge": "Retrouver la parité sur des figures",
          "paragraphText": "• Exercice de renforcement : la figure (f) a pour ensemble de définition $[-5 ; 5]$ et pour axe de symétrie l'axe des ordonnées.\nLa fonction correspondante est donc paire, tandis que les figures (b) et (e), de centre l'origine, sont impaires.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04_q5",
            "type": "mcq",
            "prompt": "La figure (f) de l'exercice a pour axe de symétrie l'axe des ordonnées et pour domaine $[-5 ; 5]$. La fonction est :",
            "options": [
              "Impaire",
              "Paire",
              "Ni paire ni impaire",
              "Non définie en $0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'axe des ordonnées comme axe de symétrie caractérise les fonctions paires."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les trois conclusions possibles",
          "stepTheme": "Les trois conclusions possibles",
          "stepBadge": "Les trois conclusions possibles",
          "paragraphText": "• Synthèse de la leçon : après l'étude, une fonction est paire, impaire, ou ni paire ni impaire.\nUn axe ou un centre de symétrie différent de $(OJ)$ ou de $O$ conduit à la troisième conclusion, comme dans les figures (a) et (c) de l'exercice de renforcement.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04_q6",
            "type": "mcq",
            "prompt": "Quelles sont les trois conclusions possibles d'une étude de parité ?",
            "options": [
              "Croissante, décroissante, constante",
              "Positive, négative, nulle",
              "Continue, discontinue, affine",
              "Paire, impaire, ni paire ni impaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La remarque de la leçon conclut toujours par l'une de ces trois réponses."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04_q1",
          "type": "mcq",
          "prompt": "Quelle égalité caractérise un centre de symétrie $\\Omega(a ; b)$ pour la courbe de $f$ ?",
          "options": [
            "$f(a + h) = f(a - h)$",
            "$f(a + h) + f(a - h) = 0$ dans tous les cas",
            "$f(a) = b$ seulement",
            "$\\frac{f(a + h) + f(a - h)}{2} = b$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pour un centre $\\Omega(a ; b)$, la demi-somme des images des points symétriques vaut $b$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04_q2",
          "type": "mcq",
          "prompt": "Quel centre de symétrie correspond exactement à une fonction impaire ?",
          "options": [
            "Le point $A(1 ; 1)$",
            "L'origine $O$ du repère",
            "Le point $A(1 ; 2)$",
            "N'importe quel point du plan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par propriété, l'imparité équivaut à la symétrie centrale par rapport à l'origine $O$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04_q3",
          "type": "mcq",
          "prompt": "Une courbe admet pour centre de symétrie le point $A(1 ; 1)$. Que peut-on dire de la parité de la fonction ?",
          "options": [
            "Elle est ni paire ni impaire",
            "Elle est impaire",
            "Elle est paire",
            "Elle est impaire car tout centre donne l'imparité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'imparité exige le centre $O$ : avec un autre centre, la fonction est ni paire ni impaire."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04_q4",
          "type": "mcq",
          "prompt": "Dans la justification d'un centre de symétrie $\\Omega(a ; b)$, quelle quantité doit-on calculer en dernier ?",
          "options": [
            "Le produit $f(a + h) \\times f(a - h)$",
            "La différence $f(a + h) - f(a - h)$",
            "La demi-somme $\\frac{f(a + h) + f(a - h)}{2}$",
            "L'image $f(a)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la demi-somme des deux images qui doit valoir l'ordonnée $b$ du centre."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04_q5",
          "type": "mcq",
          "prompt": "La figure (f) de l'exercice a pour axe de symétrie l'axe des ordonnées et pour domaine $[-5 ; 5]$. La fonction est :",
          "options": [
            "Impaire",
            "Paire",
            "Ni paire ni impaire",
            "Non définie en $0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'axe des ordonnées comme axe de symétrie caractérise les fonctions paires."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_sur_les_fonctions_p04_q6",
          "type": "mcq",
          "prompt": "Quelles sont les trois conclusions possibles d'une étude de parité ?",
          "options": [
            "Croissante, décroissante, constante",
            "Positive, négative, nulle",
            "Continue, discontinue, affine",
            "Paire, impaire, ni paire ni impaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La remarque de la leçon conclut toujours par l'une de ces trois réponses."
        }
      ]
    }
  ]
};
