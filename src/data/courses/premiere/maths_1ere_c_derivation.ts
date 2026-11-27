import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Dérivation » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Dérivation » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L09_DERIVATION: CurriculumChapter = {
  "id": "premiere_c_maths_numerique_l09_derivation",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 9,
  "title": "Leçon 9 : Dérivation",
  "summary": "La leçon définit le nombre dérivé et la tangente, relie dérivabilité et continuité, présente la fonction dérivée, les dérivées de référence et les opérations, puis applique la dérivée aux variations, aux extremums et à un problème d’optimisation.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Dérivation » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_numerique_l09_derivation_p01",
      "order": 1,
      "title": "Nombre dérivé d’une fonction en un point",
      "summary": "Définir la dérivabilité en un point et calculer un nombre dérivé avec la limite du taux d’accroissement.",
      "conceptExplanation": "Soit $f$ une fonction définie sur un intervalle ouvert $K$ contenant $x_0$. On dit que $f$ est dérivable en $x_0$ si l’expression $\\frac{f(x) - f(x_0)}{x - x_0}$ admet une limite finie en $x_0$. Cette limite finie est appelée le nombre dérivé de $f$ en $x_0$ et est notée $f^\\prime(x_0)$.\nExemple : pour $f(x) = x^2 - 2$, le taux en $3$ vaut $x + 3$ après simplification, donc $f^\\prime(3) = 6$. En revanche, pour $g(x) = \\sqrt{x}$, le taux en $0$ tend vers $+\\infty$ : $g$ n’est pas dérivable en $0$.",
      "keyRule": "Le nombre dérivé est la limite finie du taux d’accroissement : sans limite finie, pas de dérivabilité.",
      "formulas": [
        {
          "name": "Nombre dérivé",
          "formula": "f^\\prime(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}",
          "note": "Lorsque cette limite est finie."
        }
      ],
      "workedExample": {
        "title": "Calculer $f^\\prime(3)$ par la définition",
        "statement": "Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = x^2 - 2$. Montre, en utilisant la définition, que $f$ est dérivable en $3$ et donne son nombre dérivé.",
        "methodSteps": [
          "On forme le taux $\\frac{f(x) - f(3)}{x - 3}$ avec $f(3) = 7$.",
          "On simplifie : $\\frac{x^2 - 9}{x - 3} = x + 3$ pour $x \\neq 3$.",
          "On passe à la limite : la limite de $x + 3$ en $3$ est $6$, un nombre réel."
        ],
        "conclusion": "$f$ est dérivable en $3$ et $f^\\prime(3) = 6$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le taux d’accroissement",
          "stepTheme": "Le taux d’accroissement",
          "stepBadge": "Le taux d’accroissement",
          "paragraphText": "• Nombre dérivé : $f$ est dérivable en $x_0$ si le taux $\\frac{f(x) - f(x_0)}{x - x_0}$ admet une limite finie en $x_0$.\nCette limite finie est le nombre dérivé de $f$ en $x_0$, noté $f^\\prime(x_0)$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p01_q1",
            "type": "mcq",
            "prompt": "$f$ est dérivable en $x_0$ lorsque le taux $\\frac{f(x) - f(x_0)}{x - x_0}$ admet :",
            "options": [
              "Une limite finie en $x_0$",
              "Une limite égale à $+\\infty$ en $x_0$",
              "Aucune limite en $x_0$",
              "Une limite égale à $-\\infty$ en $x_0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La limite doit être finie : c’est alors le nombre dérivé $f^\\prime(x_0)$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le cas de $f(x) = x^2 - 2$ en $3$",
          "stepTheme": "Le cas de $f(x) = x^2 - 2$ en $3$",
          "stepBadge": "Le cas de $f(x) = x^2 - 2$ en $3$",
          "paragraphText": "• Exemple de la leçon : pour $f(x) = x^2 - 2$, le taux en $3$ se simplifie en $x + 3$.\nSa limite en $3$ vaut $6$, donc $f$ est dérivable en $3$ et $f^\\prime(3) = 6$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p01_q2",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^2 - 2$, que vaut $f^\\prime(3)$ ?",
            "options": [
              "$3$",
              "$7$",
              "$6$",
              "$9$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le taux vaut $\\frac{x^2 - 9}{x - 3} = x + 3$, dont la limite en $3$ est $6$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La racine carrée en $0$",
          "stepTheme": "La racine carrée en $0$",
          "stepBadge": "La racine carrée en $0$",
          "paragraphText": "• Exemple de la leçon : pour $g(x) = \\sqrt{x}$, le taux en $0$ est $\\frac{1}{\\sqrt{x}}$ pour $x > 0$.\nSa limite est $+\\infty$, qui n’est pas un nombre réel : $g$ n’est pas dérivable en $0$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p01_q3",
            "type": "mcq",
            "prompt": "Pour $g(x) = \\sqrt{x}$, pourquoi $g$ n’est-elle pas dérivable en $0$ ?",
            "options": [
              "Parce que $g(0)$ n’existe pas",
              "Parce que le taux a pour limite $0$",
              "Parce que $g$ est décroissante",
              "Parce que le taux a pour limite $+\\infty$, qui n’est pas finie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La dérivabilité exige une limite finie ; ici la limite du taux est infinie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Utiliser la définition pour un nombre dérivé",
          "stepTheme": "Utiliser la définition pour un nombre dérivé",
          "stepBadge": "Utiliser la définition pour un nombre dérivé",
          "paragraphText": "• Méthode : former le taux, le simplifier, puis passer à la limite.\nDans les exercices, pour $f(x) = x^2 + 2x - 3$ en $x_0 = -1$, le taux se simplifie en $x + 1$, de limite $0$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p01_q4",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^2 + 2x - 3$, que vaut $f^\\prime(-1)$ d’après la définition ?",
            "options": [
              "$0$",
              "$-1$",
              "$2$",
              "$-4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le taux vaut $\\frac{(x + 1)^2}{x + 1} = x + 1$, dont la limite en $-1$ est $0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une limite infinie ne donne pas de nombre dérivé",
          "stepTheme": "Une limite infinie ne donne pas de nombre dérivé",
          "stepBadge": "Une limite infinie ne donne pas de nombre dérivé",
          "paragraphText": "• Piège : les cas où le taux tend vers $+\\infty$ ou $-\\infty$, ou n’a pas de limite, ne donnent pas de dérivabilité.\nSeul le cas d’une limite finie, par exemple $-3$, correspond à une fonction dérivable en $x_0$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p01_q5",
            "type": "mcq",
            "prompt": "Dans quel cas $f$ est-elle dérivable en $x_0$ ?",
            "options": [
              "Le taux tend vers $-\\infty$",
              "Le taux n’a pas de limite",
              "Le taux tend vers $+\\infty$",
              "Le taux tend vers $-3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une limite finie, ici $-3$, est la seule qui définisse un nombre dérivé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Reconnaître le nombre dérivé",
          "stepTheme": "Reconnaître le nombre dérivé",
          "stepBadge": "Reconnaître le nombre dérivé",
          "paragraphText": "• Propriété : le nombre dérivé est la limite finie du taux d’accroissement.\nPour $f(x) = \\frac{x + 2}{x + 1}$ en $0$, les exercices donnent $f^\\prime(0) = -1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p01_q6",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\frac{x + 2}{x + 1}$, que vaut $f^\\prime(0)$ d’après les exercices de la leçon ?",
            "options": [
              "$2$",
              "$1$",
              "$-1$",
              "$-2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le calcul par la définition donne une limite égale à $-1$ en $0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p01_q1",
          "type": "mcq",
          "prompt": "$f$ est dérivable en $x_0$ lorsque le taux $\\frac{f(x) - f(x_0)}{x - x_0}$ admet :",
          "options": [
            "Une limite finie en $x_0$",
            "Une limite égale à $+\\infty$ en $x_0$",
            "Aucune limite en $x_0$",
            "Une limite égale à $-\\infty$ en $x_0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La limite doit être finie : c’est alors le nombre dérivé $f^\\prime(x_0)$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p01_q2",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^2 - 2$, que vaut $f^\\prime(3)$ ?",
          "options": [
            "$3$",
            "$7$",
            "$6$",
            "$9$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le taux vaut $\\frac{x^2 - 9}{x - 3} = x + 3$, dont la limite en $3$ est $6$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p01_q3",
          "type": "mcq",
          "prompt": "Pour $g(x) = \\sqrt{x}$, pourquoi $g$ n’est-elle pas dérivable en $0$ ?",
          "options": [
            "Parce que $g(0)$ n’existe pas",
            "Parce que le taux a pour limite $0$",
            "Parce que $g$ est décroissante",
            "Parce que le taux a pour limite $+\\infty$, qui n’est pas finie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La dérivabilité exige une limite finie ; ici la limite du taux est infinie."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p01_q4",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^2 + 2x - 3$, que vaut $f^\\prime(-1)$ d’après la définition ?",
          "options": [
            "$0$",
            "$-1$",
            "$2$",
            "$-4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le taux vaut $\\frac{(x + 1)^2}{x + 1} = x + 1$, dont la limite en $-1$ est $0$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p01_q5",
          "type": "mcq",
          "prompt": "Dans quel cas $f$ est-elle dérivable en $x_0$ ?",
          "options": [
            "Le taux tend vers $-\\infty$",
            "Le taux n’a pas de limite",
            "Le taux tend vers $+\\infty$",
            "Le taux tend vers $-3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une limite finie, ici $-3$, est la seule qui définisse un nombre dérivé."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p01_q6",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\frac{x + 2}{x + 1}$, que vaut $f^\\prime(0)$ d’après les exercices de la leçon ?",
          "options": [
            "$2$",
            "$1$",
            "$-1$",
            "$-2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le calcul par la définition donne une limite égale à $-1$ en $0$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l09_derivation_p02",
      "order": 2,
      "title": "Interprétation graphique : la tangente à la courbe",
      "summary": "Interpréter le nombre dérivé comme coefficient directeur de la tangente et déterminer une équation de tangente.",
      "conceptExplanation": "Soit $f$ une fonction et $(C_f)$ sa courbe représentative dans un repère $(O, I, J)$, et $A$ un point de $(C_f)$ d’abscisse $x_0$. Si $f$ est dérivable en $x_0$, alors $(C_f)$ admet en $A$ une tangente $(T)$ de coefficient directeur $f^\\prime(x_0)$.\nUne équation de $(T)$ est $y = f^\\prime(x_0)(x - x_0) + f(x_0)$.",
      "keyRule": "Le nombre dérivé en un point est le coefficient directeur de la tangente à la courbe en ce point.",
      "formulas": [
        {
          "name": "Équation de la tangente",
          "formula": "y = f^\\prime(x_0)(x - x_0) + f(x_0)"
        }
      ],
      "workedExample": {
        "title": "Équation de la tangente en $2$",
        "statement": "La fonction $f$ est définie et dérivable en $2$, avec $f(2) = -4$ et $f^\\prime(2) = -3$. Détermine une équation de la tangente à sa courbe au point d’abscisse $2$.",
        "methodSteps": [
          "On applique la formule avec $x_0 = 2$, $f(2) = -4$ et $f^\\prime(2) = -3$.",
          "On écrit $y = -3(x - 2) - 4$.",
          "On développe : $y = -3x + 6 - 4 = -3x + 2$."
        ],
        "conclusion": "La tangente a pour équation $y = -3x + 2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La tangente au point d’abscisse $x_0$",
          "stepTheme": "La tangente au point d’abscisse $x_0$",
          "stepBadge": "La tangente au point d’abscisse $x_0$",
          "paragraphText": "• Interprétation graphique : si $f$ est dérivable en $x_0$, sa courbe admet en son point d’abscisse $x_0$ une tangente.\nLe coefficient directeur de cette tangente est $f^\\prime(x_0)$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p02_q1",
            "type": "mcq",
            "prompt": "Si $f$ est dérivable en $x_0$, le coefficient directeur de la tangente en $x_0$ est :",
            "options": [
              "$f(x_0)$",
              "$f^\\prime(0)$",
              "$x_0$",
              "$f^\\prime(x_0)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le nombre dérivé est le coefficient directeur de la tangente au point considéré."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’équation de la tangente",
          "stepTheme": "L’équation de la tangente",
          "stepBadge": "L’équation de la tangente",
          "paragraphText": "• Propriété : une équation de la tangente $(T)$ au point d’abscisse $x_0$ est $y = f^\\prime(x_0)(x - x_0) + f(x_0)$.\nIl faut donc connaître à la fois l’image et le nombre dérivé en $x_0$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p02_q2",
            "type": "mcq",
            "prompt": "Une équation de la tangente au point d’abscisse $x_0$ est :",
            "options": [
              "$y = f(x_0)(x - x_0) + f^\\prime(x_0)$",
              "$y = x_0(x - x_0) + f(x_0)$",
              "$y = f^\\prime(x_0)(x - x_0) + f(x_0)$",
              "$y = f^\\prime(x_0) + f(x_0)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On retient la forme $y = f^\\prime(x_0)(x - x_0) + f(x_0)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La tangente en $2$ de l’exercice de fixation",
          "stepTheme": "La tangente en $2$ de l’exercice de fixation",
          "stepBadge": "La tangente en $2$ de l’exercice de fixation",
          "paragraphText": "• Exercice de fixation : $f(2) = -4$ et $f^\\prime(2) = -3$.\nLa tangente a pour équation $y = -3(x - 2) - 4$, soit $y = -3x + 2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p02_q3",
            "type": "mcq",
            "prompt": "Avec $f(2) = -4$ et $f^\\prime(2) = -3$, la tangente en $2$ a pour équation :",
            "options": [
              "$y = -3x - 4$",
              "$y = 3x + 2$",
              "$y = -3x + 10$",
              "$y = -3x + 2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $-3(x - 2) - 4 = -3x + 6 - 4 = -3x + 2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les deux données nécessaires",
          "stepTheme": "Les deux données nécessaires",
          "stepBadge": "Les deux données nécessaires",
          "paragraphText": "• Méthode : relever $f(x_0)$ et $f^\\prime(x_0)$, les placer dans la formule, puis simplifier.\nOublier l’un des deux nombres rend l’équation impossible à déterminer.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p02_q4",
            "type": "mcq",
            "prompt": "Pour écrire la tangente en $x_0$, quelles données faut-il ?",
            "options": [
              "$f(x_0)$ et $f^\\prime(x_0)$",
              "Seulement $f(x_0)$",
              "Seulement $x_0$",
              "Seulement $f^\\prime(x_0)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La formule utilise l’image $f(x_0)$ et le nombre dérivé $f^\\prime(x_0)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre image et nombre dérivé",
          "stepTheme": "Ne pas confondre image et nombre dérivé",
          "stepBadge": "Ne pas confondre image et nombre dérivé",
          "paragraphText": "• Piège : dans $y = -3(x - 2) - 4$, le coefficient $-3$ est le nombre dérivé et $-4$ est l’image.\nInverser les deux nombres change complètement la droite obtenue.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p02_q5",
            "type": "mcq",
            "prompt": "Dans l’exercice de fixation en $2$, le nombre $-3$ représente :",
            "options": [
              "L’image $f(2)$",
              "L’abscisse du point",
              "Le nombre dérivé $f^\\prime(2)$",
              "L’ordonnée à l’origine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le coefficient directeur de la tangente est le nombre dérivé, ici $f^\\prime(2) = -3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La tangente à l’hyperbole en $-2$",
          "stepTheme": "La tangente à l’hyperbole en $-2$",
          "stepBadge": "La tangente à l’hyperbole en $-2$",
          "paragraphText": "• Exercice de la leçon : pour $f(x) = \\frac{1}{x}$, on a $f^\\prime(-2) = -\\frac{1}{4}$ et $f(-2) = -\\frac{1}{2}$.\nLa tangente en $-2$ a donc pour équation $y = -\\frac{1}{4}x - 1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p02_q6",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\frac{1}{x}$, la tangente au point d’abscisse $-2$ a pour équation :",
            "options": [
              "$y = -\\frac{1}{4}x - 1$",
              "$y = \\frac{1}{4}x - 1$",
              "$y = -\\frac{1}{4}x + 1$",
              "$y = -4x - 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $f^\\prime(-2) = -\\frac{1}{4}$ et $f(-2) = -\\frac{1}{2}$, on obtient $-\\frac{1}{4}(x + 2) - \\frac{1}{2} = -\\frac{1}{4}x - 1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p02_q1",
          "type": "mcq",
          "prompt": "Si $f$ est dérivable en $x_0$, le coefficient directeur de la tangente en $x_0$ est :",
          "options": [
            "$f(x_0)$",
            "$f^\\prime(0)$",
            "$x_0$",
            "$f^\\prime(x_0)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le nombre dérivé est le coefficient directeur de la tangente au point considéré."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p02_q2",
          "type": "mcq",
          "prompt": "Une équation de la tangente au point d’abscisse $x_0$ est :",
          "options": [
            "$y = f(x_0)(x - x_0) + f^\\prime(x_0)$",
            "$y = x_0(x - x_0) + f(x_0)$",
            "$y = f^\\prime(x_0)(x - x_0) + f(x_0)$",
            "$y = f^\\prime(x_0) + f(x_0)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On retient la forme $y = f^\\prime(x_0)(x - x_0) + f(x_0)$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p02_q3",
          "type": "mcq",
          "prompt": "Avec $f(2) = -4$ et $f^\\prime(2) = -3$, la tangente en $2$ a pour équation :",
          "options": [
            "$y = -3x - 4$",
            "$y = 3x + 2$",
            "$y = -3x + 10$",
            "$y = -3x + 2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $-3(x - 2) - 4 = -3x + 6 - 4 = -3x + 2$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p02_q4",
          "type": "mcq",
          "prompt": "Pour écrire la tangente en $x_0$, quelles données faut-il ?",
          "options": [
            "$f(x_0)$ et $f^\\prime(x_0)$",
            "Seulement $f(x_0)$",
            "Seulement $x_0$",
            "Seulement $f^\\prime(x_0)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La formule utilise l’image $f(x_0)$ et le nombre dérivé $f^\\prime(x_0)$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p02_q5",
          "type": "mcq",
          "prompt": "Dans l’exercice de fixation en $2$, le nombre $-3$ représente :",
          "options": [
            "L’image $f(2)$",
            "L’abscisse du point",
            "Le nombre dérivé $f^\\prime(2)$",
            "L’ordonnée à l’origine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le coefficient directeur de la tangente est le nombre dérivé, ici $f^\\prime(2) = -3$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p02_q6",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\frac{1}{x}$, la tangente au point d’abscisse $-2$ a pour équation :",
          "options": [
            "$y = -\\frac{1}{4}x - 1$",
            "$y = \\frac{1}{4}x - 1$",
            "$y = -\\frac{1}{4}x + 1$",
            "$y = -4x - 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $f^\\prime(-2) = -\\frac{1}{4}$ et $f(-2) = -\\frac{1}{2}$, on obtient $-\\frac{1}{4}(x + 2) - \\frac{1}{2} = -\\frac{1}{4}x - 1$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l09_derivation_p03",
      "order": 3,
      "title": "Dérivabilité et continuité",
      "summary": "Établir le lien entre dérivabilité et continuité en un point, et connaître le contre-exemple de la réciproque.",
      "conceptExplanation": "Propriété : si une fonction $f$ est dérivable en $x_0$, alors $f$ est continue en $x_0$.\nLa réciproque est fausse : $f$ continue en $x_0$ n’implique pas que $f$ soit dérivable en $x_0$. En effet, la fonction $g$ définie sur $[0 ; +\\infty[$ par $g(x) = \\sqrt{x}$ est continue en $0$, mais elle n’est pas dérivable en $0$, car son taux d’accroissement en $0$ tend vers $+\\infty$.\nPar contraposée, toute fonction qui n’est pas continue en $x_0$ n’est pas dérivable en $x_0$.",
      "keyRule": "Dérivable en un point implique toujours continue en ce point, mais continue n’implique pas dérivable.",
      "formulas": [],
      "workedExample": {
        "title": "Les trois affirmations de l’exercice d’application",
        "statement": "Réponds par Vrai ou Faux : 1) toute fonction continue en $x_0$ est dérivable en $x_0$ ; 2) toute fonction non continue en $x_0$ n’est pas dérivable en $x_0$ ; 3) toute fonction dérivable en $x_0$ est continue en $x_0$.",
        "methodSteps": [
          "L’affirmation 1 est la réciproque de la propriété : elle est fausse, la racine carrée en $0$ le montre.",
          "L’affirmation 2 est la contraposée de la propriété : elle est vraie.",
          "L’affirmation 3 est la propriété elle-même : elle est vraie."
        ],
        "conclusion": "Les réponses de la leçon sont : Faux, Vrai, Vrai."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Dérivable implique continue",
          "stepTheme": "Dérivable implique continue",
          "stepBadge": "Dérivable implique continue",
          "paragraphText": "• Propriété : si une fonction $f$ est dérivable en $x_0$, alors $f$ est continue en $x_0$.\nLa dérivabilité est donc une condition plus forte que la continuité.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p03_q1",
            "type": "mcq",
            "prompt": "Si $f$ est dérivable en $x_0$, alors nécessairement :",
            "options": [
              "$f$ est croissante en $x_0$",
              "$f$ est paire",
              "$f^\\prime(x_0) = 0$",
              "$f$ est continue en $x_0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la propriété de la leçon : la dérivabilité en un point entraîne la continuité en ce point."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "La réciproque est fausse",
          "stepTheme": "La réciproque est fausse",
          "stepBadge": "La réciproque est fausse",
          "paragraphText": "• Remarque de la leçon : une fonction continue en $x_0$ n’est pas nécessairement dérivable en $x_0$.\nLa continuité seule ne suffit donc pas à conclure à la dérivabilité.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p03_q2",
            "type": "mcq",
            "prompt": "L’affirmation « toute fonction continue en $x_0$ est dérivable en $x_0$ » est :",
            "options": [
              "Fausse",
              "Toujours vraie pour les polynômes seulement",
              "Vraie",
              "Vraie si $f(x_0) = 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La réciproque de la propriété est fausse, comme le montre la fonction racine carrée en $0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le contre-exemple de la racine carrée",
          "stepTheme": "Le contre-exemple de la racine carrée",
          "stepBadge": "Le contre-exemple de la racine carrée",
          "paragraphText": "• Exemple de la leçon : $g(x) = \\sqrt{x}$ est continue en $0$.\nPourtant, son taux d’accroissement en $0$ tend vers $+\\infty$ : elle n’est pas dérivable en $0$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p03_q3",
            "type": "mcq",
            "prompt": "La fonction $g(x) = \\sqrt{x}$ en $0$ est :",
            "options": [
              "Continue et dérivable",
              "Ni continue ni dérivable",
              "Dérivable mais non continue",
              "Continue mais non dérivable"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Elle est continue en $0$, mais le taux y a une limite infinie : elle n’y est pas dérivable."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La contraposée utile",
          "stepTheme": "La contraposée utile",
          "stepBadge": "La contraposée utile",
          "paragraphText": "• Conséquence : si $f$ n’est pas continue en $x_0$, alors $f$ n’est pas dérivable en $x_0$.\nC’est la contraposée de la propriété, utilisée dans l’exercice d’application de la leçon.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p03_q4",
            "type": "mcq",
            "prompt": "Si $f$ n’est pas continue en $x_0$, que peut-on affirmer ?",
            "options": [
              "$f$ n’est pas dérivable en $x_0$",
              "$f$ est dérivable en $x_0$",
              "$f^\\prime(x_0) = 0$",
              "On ne peut rien dire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par contraposée, pas de continuité implique pas de dérivabilité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Répondre aux affirmations de l’exercice",
          "stepTheme": "Répondre aux affirmations de l’exercice",
          "stepBadge": "Répondre aux affirmations de l’exercice",
          "paragraphText": "• Exercice d’application : « continue implique dérivable » est faux, « non continue implique non dérivable » est vrai, « dérivable implique continue » est vrai.\nOn retient la solution de la leçon : Faux, Vrai, Vrai.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p03_q5",
            "type": "mcq",
            "prompt": "Dans l’exercice d’application, l’affirmation « toute fonction dérivable en $x_0$ est continue en $x_0$ » est :",
            "options": [
              "Fausse",
              "Indécidable",
              "Vraie seulement en $0$",
              "Vraie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est exactement la propriété énoncée dans le cours."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Ce que la dérivabilité exige de plus",
          "stepTheme": "Ce que la dérivabilité exige de plus",
          "stepBadge": "Ce que la dérivabilité exige de plus",
          "paragraphText": "• Définition rappelée : la dérivabilité demande une limite finie du taux d’accroissement.\nLa continuité ne contrôle que la limite de $f(x)$ vers $f(x_0)$, pas celle du taux.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p03_q6",
            "type": "mcq",
            "prompt": "La dérivabilité en $x_0$ exige, en plus de la continuité :",
            "options": [
              "Que $f(x_0) = 0$",
              "Une limite finie du taux d’accroissement en $x_0$",
              "Que $f$ soit un polynôme",
              "Que la courbe admette une asymptote"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le nombre dérivé n’existe que si le taux a une limite finie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p03_q1",
          "type": "mcq",
          "prompt": "Si $f$ est dérivable en $x_0$, alors nécessairement :",
          "options": [
            "$f$ est croissante en $x_0$",
            "$f$ est paire",
            "$f^\\prime(x_0) = 0$",
            "$f$ est continue en $x_0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la propriété de la leçon : la dérivabilité en un point entraîne la continuité en ce point."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p03_q2",
          "type": "mcq",
          "prompt": "L’affirmation « toute fonction continue en $x_0$ est dérivable en $x_0$ » est :",
          "options": [
            "Fausse",
            "Toujours vraie pour les polynômes seulement",
            "Vraie",
            "Vraie si $f(x_0) = 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réciproque de la propriété est fausse, comme le montre la fonction racine carrée en $0$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p03_q3",
          "type": "mcq",
          "prompt": "La fonction $g(x) = \\sqrt{x}$ en $0$ est :",
          "options": [
            "Continue et dérivable",
            "Ni continue ni dérivable",
            "Dérivable mais non continue",
            "Continue mais non dérivable"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Elle est continue en $0$, mais le taux y a une limite infinie : elle n’y est pas dérivable."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p03_q4",
          "type": "mcq",
          "prompt": "Si $f$ n’est pas continue en $x_0$, que peut-on affirmer ?",
          "options": [
            "$f$ n’est pas dérivable en $x_0$",
            "$f$ est dérivable en $x_0$",
            "$f^\\prime(x_0) = 0$",
            "On ne peut rien dire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par contraposée, pas de continuité implique pas de dérivabilité."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p03_q5",
          "type": "mcq",
          "prompt": "Dans l’exercice d’application, l’affirmation « toute fonction dérivable en $x_0$ est continue en $x_0$ » est :",
          "options": [
            "Fausse",
            "Indécidable",
            "Vraie seulement en $0$",
            "Vraie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est exactement la propriété énoncée dans le cours."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p03_q6",
          "type": "mcq",
          "prompt": "La dérivabilité en $x_0$ exige, en plus de la continuité :",
          "options": [
            "Que $f(x_0) = 0$",
            "Une limite finie du taux d’accroissement en $x_0$",
            "Que $f$ soit un polynôme",
            "Que la courbe admette une asymptote"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le nombre dérivé n’existe que si le taux a une limite finie."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l09_derivation_p04",
      "order": 4,
      "title": "Fonction dérivée et dérivées de fonctions de référence",
      "summary": "Définir la fonction dérivée et connaître les dérivées des fonctions de référence avec leurs ensembles de dérivabilité.",
      "conceptExplanation": "Une fonction $f$ est dérivable sur un intervalle ouvert $K$ lorsqu’elle est dérivable en chaque élément de $K$. La fonction dérivée de $f$ sur $K$, notée $f^\\prime$, associe à chaque $x$ de $K$ le nombre dérivé $f^\\prime(x)$.\nDérivées de référence : constante $k$ donne $0$ ; $x$ donne $1$ ; $ax + b$ donne $a$ ; $x^n$ donne $nx^{n-1}$ ; $\\sqrt{x}$ donne $\\frac{1}{2\\sqrt{x}}$ sur $]0 ; +\\infty[$ ; $\\frac{1}{x}$ donne $-\\frac{1}{x^2}$ sur $\\mathbb{R}^*$ ; $\\sin x$ donne $\\cos x$ ; $\\cos x$ donne $-\\sin x$ ; $\\tan x$ donne $1 + \\tan^2 x$. Les fonctions élémentaires, polynômes, rationnelles et trigonométriques sont dérivables sur tout intervalle ouvert inclus dans leur ensemble de définition.",
      "keyRule": "On apprend le tableau des dérivées de référence avec, pour chacune, son ensemble de dérivabilité.",
      "formulas": [
        {
          "name": "Dérivée d’une puissance",
          "formula": "(x^n)^\\prime = nx^{n-1}"
        },
        {
          "name": "Dérivée de la racine carrée",
          "formula": "(\\sqrt{x})^\\prime = \\frac{1}{2\\sqrt{x}}",
          "note": "Sur $]0 ; +\\infty[$."
        },
        {
          "name": "Dérivée de l’inverse",
          "formula": "\\left(\\frac{1}{x}\\right)^\\prime = -\\frac{1}{x^2}",
          "note": "Sur $\\mathbb{R}^*$."
        }
      ],
      "workedExample": {
        "title": "Fonction dérivée de $g(x) = x^3$ par la définition",
        "statement": "Détermine la fonction dérivée de la fonction $g$ définie sur $\\mathbb{R}$ par $g(x) = x^3$.",
        "methodSteps": [
          "Pour $x_0$ réel, on forme le taux $\\frac{x^3 - x_0^3}{x - x_0}$.",
          "On factorise : le taux vaut $x^2 + xx_0 + x_0^2$.",
          "Sa limite en $x_0$ est $3x_0^2$."
        ],
        "conclusion": "La fonction dérivée de $g$ est $g^\\prime : x \\mapsto 3x^2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fonction dérivée",
          "stepTheme": "La fonction dérivée",
          "stepBadge": "La fonction dérivée",
          "paragraphText": "• Définition : si $f$ est dérivable sur un intervalle ouvert $K$, l’application qui à chaque $x$ de $K$ associe $f^\\prime(x)$ est la fonction dérivée de $f$ sur $K$, notée $f^\\prime$.\nL’ensemble des réels en lesquels $f$ est dérivable est son ensemble de dérivabilité.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p04_q1",
            "type": "mcq",
            "prompt": "La fonction dérivée $f^\\prime$ associe à chaque $x$ de $K$ :",
            "options": [
              "$f(x)$",
              "Le nombre dérivé de $f$ en $x$",
              "La tangente en $x$",
              "$f(x_0)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $f^\\prime$ envoie $x$ sur le nombre dérivé de $f$ en $x$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La dérivée de $g(x) = x^3$",
          "stepTheme": "La dérivée de $g(x) = x^3$",
          "stepBadge": "La dérivée de $g(x) = x^3$",
          "paragraphText": "• Exemple de la leçon : le taux de $g(x) = x^3$ en $x_0$ se simplifie et tend vers $3x_0^2$.\nLa fonction dérivée de $g$ est donc $g^\\prime : x \\mapsto 3x^2$ sur $\\mathbb{R}$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p04_q2",
            "type": "mcq",
            "prompt": "La fonction dérivée de $g(x) = x^3$ est :",
            "options": [
              "$x \\mapsto x^2$",
              "$x \\mapsto 3x$",
              "$x \\mapsto \\frac{x^4}{4}$",
              "$x \\mapsto 3x^2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D’après l’exemple traité par la définition, $g^\\prime(x_0) = 3x_0^2$ pour tout réel $x_0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les dérivées de référence : puissances",
          "stepTheme": "Les dérivées de référence : puissances",
          "stepBadge": "Les dérivées de référence : puissances",
          "paragraphText": "• Tableau de la leçon : $x \\mapsto k$ a pour dérivée $x \\mapsto 0$ ; $x \\mapsto x$ a pour dérivée $x \\mapsto 1$ ; $x \\mapsto ax + b$ a pour dérivée $x \\mapsto a$.\nPour $n \\geq 1$, $x \\mapsto x^n$ a pour dérivée $x \\mapsto nx^{n-1}$ sur $\\mathbb{R}$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p04_q3",
            "type": "mcq",
            "prompt": "La dérivée de $x \\mapsto x^4$ est :",
            "options": [
              "$x \\mapsto 4x^3$",
              "$x \\mapsto x^3$",
              "$x \\mapsto 4x^4$",
              "$x \\mapsto 3x^4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On applique $x^n$ donne $nx^{n-1}$ avec $n = 4$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les dérivées de référence : inverse et racine",
          "stepTheme": "Les dérivées de référence : inverse et racine",
          "stepBadge": "Les dérivées de référence : inverse et racine",
          "paragraphText": "• Tableau de la leçon : $x \\mapsto \\frac{1}{x}$ a pour dérivée $x \\mapsto -\\frac{1}{x^2}$ sur $\\mathbb{R}^*$.\n$x \\mapsto \\sqrt{x}$ a pour dérivée $x \\mapsto \\frac{1}{2\\sqrt{x}}$ sur $]0 ; +\\infty[$, et $x \\mapsto \\frac{1}{x^n}$ a pour dérivée $x \\mapsto -\\frac{n}{x^{n+1}}$ sur $\\mathbb{R}^*$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p04_q4",
            "type": "mcq",
            "prompt": "La dérivée de $x \\mapsto \\frac{1}{x^4}$ est :",
            "options": [
              "$x \\mapsto \\frac{4}{x^5}$",
              "$x \\mapsto -\\frac{4}{x^5}$",
              "$x \\mapsto -\\frac{1}{x^3}$",
              "$x \\mapsto \\frac{1}{4x^3}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On applique la ligne des inverses de puissances avec $n = 4$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les dérivées trigonométriques de référence",
          "stepTheme": "Les dérivées trigonométriques de référence",
          "stepBadge": "Les dérivées trigonométriques de référence",
          "paragraphText": "• Tableau de la leçon : $\\sin$ a pour dérivée $\\cos$ et $\\cos$ a pour dérivée $-\\sin$, sur $\\mathbb{R}$.\nLa dérivée de $\\tan$ est $x \\mapsto 1 + \\tan^2 x$, aussi égale à $x \\mapsto \\frac{1}{\\cos^2 x}$, hors des valeurs $\\frac{\\pi}{2} + k\\pi$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p04_q5",
            "type": "mcq",
            "prompt": "La dérivée de $x \\mapsto \\cos x$ est :",
            "options": [
              "$x \\mapsto \\sin x$",
              "$x \\mapsto \\cos x$",
              "$x \\mapsto -\\sin x$",
              "$x \\mapsto -\\cos x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D’après le tableau des fonctions de référence, la dérivée de $\\cos$ est $-\\sin$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L’ensemble de dérivabilité compte",
          "stepTheme": "L’ensemble de dérivabilité compte",
          "stepBadge": "L’ensemble de dérivabilité compte",
          "paragraphText": "• Piège : une formule de dérivée ne vaut que sur l’ensemble de dérivabilité indiqué.\nPar exemple, la dérivée de la racine carrée n’est donnée que sur $]0 ; +\\infty[$, et celle de l’inverse que sur $\\mathbb{R}^*$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p04_q6",
            "type": "mcq",
            "prompt": "Sur quel ensemble la fonction $x \\mapsto \\sqrt{x}$ est-elle dérivable d’après le tableau ?",
            "options": [
              "Sur $\\mathbb{R}$",
              "Sur $\\mathbb{R}^*$",
              "Sur $[0 ; +\\infty[$",
              "Sur $]0 ; +\\infty[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le tableau donne l’ensemble de dérivabilité $]0 ; +\\infty[$ pour la racine carrée."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p04_q1",
          "type": "mcq",
          "prompt": "La fonction dérivée $f^\\prime$ associe à chaque $x$ de $K$ :",
          "options": [
            "$f(x)$",
            "Le nombre dérivé de $f$ en $x$",
            "La tangente en $x$",
            "$f(x_0)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $f^\\prime$ envoie $x$ sur le nombre dérivé de $f$ en $x$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p04_q2",
          "type": "mcq",
          "prompt": "La fonction dérivée de $g(x) = x^3$ est :",
          "options": [
            "$x \\mapsto x^2$",
            "$x \\mapsto 3x$",
            "$x \\mapsto \\frac{x^4}{4}$",
            "$x \\mapsto 3x^2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D’après l’exemple traité par la définition, $g^\\prime(x_0) = 3x_0^2$ pour tout réel $x_0$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p04_q3",
          "type": "mcq",
          "prompt": "La dérivée de $x \\mapsto x^4$ est :",
          "options": [
            "$x \\mapsto 4x^3$",
            "$x \\mapsto x^3$",
            "$x \\mapsto 4x^4$",
            "$x \\mapsto 3x^4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On applique $x^n$ donne $nx^{n-1}$ avec $n = 4$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p04_q4",
          "type": "mcq",
          "prompt": "La dérivée de $x \\mapsto \\frac{1}{x^4}$ est :",
          "options": [
            "$x \\mapsto \\frac{4}{x^5}$",
            "$x \\mapsto -\\frac{4}{x^5}$",
            "$x \\mapsto -\\frac{1}{x^3}$",
            "$x \\mapsto \\frac{1}{4x^3}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On applique la ligne des inverses de puissances avec $n = 4$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p04_q5",
          "type": "mcq",
          "prompt": "La dérivée de $x \\mapsto \\cos x$ est :",
          "options": [
            "$x \\mapsto \\sin x$",
            "$x \\mapsto \\cos x$",
            "$x \\mapsto -\\sin x$",
            "$x \\mapsto -\\cos x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D’après le tableau des fonctions de référence, la dérivée de $\\cos$ est $-\\sin$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p04_q6",
          "type": "mcq",
          "prompt": "Sur quel ensemble la fonction $x \\mapsto \\sqrt{x}$ est-elle dérivable d’après le tableau ?",
          "options": [
            "Sur $\\mathbb{R}$",
            "Sur $\\mathbb{R}^*$",
            "Sur $[0 ; +\\infty[$",
            "Sur $]0 ; +\\infty[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le tableau donne l’ensemble de dérivabilité $]0 ; +\\infty[$ pour la racine carrée."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l09_derivation_p05",
      "order": 5,
      "title": "Dérivées et opérations",
      "summary": "Dériver une somme, un produit, un inverse, un quotient et les composées élémentaires de la leçon.",
      "conceptExplanation": "On suppose $u$ et $v$ dérivables sur un intervalle ouvert $K$. Alors $u + v$ a pour dérivée $u^\\prime + v^\\prime$ ; $uv$ a pour dérivée $u^\\prime v + uv^\\prime$ ; $au$ a pour dérivée $au^\\prime$ ; $\\frac{1}{u}$ a pour dérivée $-\\frac{u^\\prime}{u^2}$ si $u$ ne s’annule pas ; $\\frac{u}{v}$ a pour dérivée $\\frac{u^\\prime v - uv^\\prime}{v^2}$ si $v$ ne s’annule pas.\nComposées usuelles : $\\cos(ax + b)$ donne $-a\\sin(ax + b)$, $\\sin(ax + b)$ donne $a\\cos(ax + b)$, et $\\sqrt{ax + b}$ donne $\\frac{a}{2\\sqrt{ax + b}}$.",
      "keyRule": "On choisit la formule selon l’opération : somme terme à terme, produit et quotient avec leurs formules propres, sans oublier le facteur intérieur des composées.",
      "formulas": [
        {
          "name": "Dérivée d’un produit",
          "formula": "(uv)^\\prime = u^\\prime v + uv^\\prime"
        },
        {
          "name": "Dérivée d’un quotient",
          "formula": "\\left(\\frac{u}{v}\\right)^\\prime = \\frac{u^\\prime v - uv^\\prime}{v^2}"
        },
        {
          "name": "Dérivée de l’inverse",
          "formula": "\\left(\\frac{1}{u}\\right)^\\prime = -\\frac{u^\\prime}{u^2}"
        }
      ],
      "workedExample": {
        "title": "Dériver un quotient (exercice de fixation)",
        "statement": "Détermine la fonction dérivée de $g(x) = \\frac{x^2}{x + 5}$.",
        "methodSteps": [
          "$g$ est dérivable sur $\\mathbb{R}$ privé de $-5$, où le dénominateur s’annule.",
          "On applique la formule du quotient avec $u(x) = x^2$ et $v(x) = x + 5$.",
          "On obtient $\\frac{2x(x + 5) - x^2}{(x + 5)^2}$, qui se simplifie en $\\frac{x^2 + 10x}{(x + 5)^2}$."
        ],
        "conclusion": "Pour tout $x \\neq -5$, $g^\\prime(x) = \\frac{x^2 + 10x}{(x + 5)^2}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Dérivée d’une somme et d’un produit",
          "stepTheme": "Dérivée d’une somme et d’un produit",
          "stepBadge": "Dérivée d’une somme et d’un produit",
          "paragraphText": "• Propriétés : $(u + v)^\\prime = u^\\prime + v^\\prime$ et $(uv)^\\prime = u^\\prime v + uv^\\prime$.\nPour un réel $a$, $(au)^\\prime = au^\\prime$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p05_q1",
            "type": "mcq",
            "prompt": "La dérivée du produit $uv$ est :",
            "options": [
              "$u^\\prime v^\\prime$",
              "$u^\\prime v + uv^\\prime$",
              "$u^\\prime + v^\\prime$",
              "$uv^\\prime - u^\\prime v$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La formule du produit est $u^\\prime v + uv^\\prime$, à ne pas confondre avec celle de la somme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Dérivée de l’inverse et du quotient",
          "stepTheme": "Dérivée de l’inverse et du quotient",
          "stepBadge": "Dérivée de l’inverse et du quotient",
          "paragraphText": "• Propriétés : $\\left(\\frac{1}{u}\\right)^\\prime = -\\frac{u^\\prime}{u^2}$ si $u$ ne s’annule pas sur $K$.\n$\\left(\\frac{u}{v}\\right)^\\prime = \\frac{u^\\prime v - uv^\\prime}{v^2}$ si $v$ ne s’annule pas sur $K$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p05_q2",
            "type": "mcq",
            "prompt": "La dérivée du quotient $\\frac{u}{v}$ est :",
            "options": [
              "$\\frac{u^\\prime}{v^\\prime}$",
              "$\\frac{uv^\\prime - u^\\prime v}{v^2}$",
              "$\\frac{u^\\prime v - uv^\\prime}{v^2}$",
              "$\\frac{u^\\prime v + uv^\\prime}{v^2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le numérateur est $u^\\prime v - uv^\\prime$, dans cet ordre, sur $v^2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Dérivées des fonctions composées de la leçon",
          "stepTheme": "Dérivées des fonctions composées de la leçon",
          "stepBadge": "Dérivées des fonctions composées de la leçon",
          "paragraphText": "• Propriétés : $\\cos(ax + b)$ a pour dérivée $-a\\sin(ax + b)$ et $\\sin(ax + b)$ a pour dérivée $a\\cos(ax + b)$.\n$\\sqrt{ax + b}$ a pour dérivée $\\frac{a}{2\\sqrt{ax + b}}$ là où elle est définie.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p05_q3",
            "type": "mcq",
            "prompt": "La dérivée de $x \\mapsto \\sin(ax + b)$ est :",
            "options": [
              "$x \\mapsto \\cos(ax + b)$",
              "$x \\mapsto -a\\cos(ax + b)$",
              "$x \\mapsto a\\sin(ax + b)$",
              "$x \\mapsto a\\cos(ax + b)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le facteur $a$, dérivée de $ax + b$, multiplie $\\cos(ax + b)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un mélange somme, inverse et cosinus",
          "stepTheme": "Un mélange somme, inverse et cosinus",
          "stepBadge": "Un mélange somme, inverse et cosinus",
          "paragraphText": "• Exercice de fixation : pour $f(x) = x^3 + \\frac{1}{x} + \\cos x$, dérivable sur $\\mathbb{R}^*$, on obtient $f^\\prime(x) = 3x^2 - \\frac{1}{x^2} - \\sin x$.\nChaque terme se dérive séparément, puis on additionne.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p05_q4",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^3 + \\frac{1}{x} + \\cos x$, $f^\\prime(x)$ vaut :",
            "options": [
              "$3x^2 - \\frac{1}{x^2} - \\sin x$",
              "$3x^2 + \\frac{1}{x^2} - \\sin x$",
              "$3x^2 - \\frac{1}{x^2} + \\sin x$",
              "$x^2 - \\frac{1}{x^2} - \\sin x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Terme à terme : $3x^2$, puis $-\\frac{1}{x^2}$ pour l’inverse, puis $-\\sin x$ pour le cosinus."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un quotient : $g(x) = \\frac{x^2}{x + 5}$",
          "stepTheme": "Un quotient : $g(x) = \\frac{x^2}{x + 5}$",
          "stepBadge": "Un quotient : $g(x) = \\frac{x^2}{x + 5}$",
          "paragraphText": "• Exercice de fixation : $g$ est dérivable sur $\\mathbb{R}$ privé de $-5$.\nLe quotient donne $g^\\prime(x) = \\frac{x^2 + 10x}{(x + 5)^2}$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p05_q5",
            "type": "mcq",
            "prompt": "Pour $g(x) = \\frac{x^2}{x + 5}$, $g^\\prime(x)$ vaut :",
            "options": [
              "$\\frac{2x}{1}$",
              "$\\frac{x^2 + 10x}{(x + 5)^2}$",
              "$\\frac{x^2}{(x + 5)^2}$",
              "$\\frac{10x}{(x + 5)^2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $\\frac{2x(x + 5) - x^2}{(x + 5)^2} = \\frac{x^2 + 10x}{(x + 5)^2}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La racine d’une fonction affine",
          "stepTheme": "La racine d’une fonction affine",
          "stepBadge": "La racine d’une fonction affine",
          "paragraphText": "• Exercice de fixation : pour $h(x) = \\sqrt{3x + 6}$, dérivable sur $]-2 ; +\\infty[$, on a $h^\\prime(x) = \\frac{3}{2\\sqrt{3x + 6}}$.\nPiège : oublier le facteur $3$, dérivée de $3x + 6$, donne un résultat faux.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p05_q6",
            "type": "mcq",
            "prompt": "Pour $h(x) = \\sqrt{3x + 6}$, $h^\\prime(x)$ vaut :",
            "options": [
              "$\\frac{1}{2\\sqrt{3x + 6}}$",
              "$\\frac{3}{\\sqrt{3x + 6}}$",
              "$\\frac{3}{2\\sqrt{3x + 6}}$",
              "$\\frac{1}{\\sqrt{3x + 6}}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La formule $\\frac{a}{2\\sqrt{ax + b}}$ donne ici $a = 3$ au numérateur."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p05_q1",
          "type": "mcq",
          "prompt": "La dérivée du produit $uv$ est :",
          "options": [
            "$u^\\prime v^\\prime$",
            "$u^\\prime v + uv^\\prime$",
            "$u^\\prime + v^\\prime$",
            "$uv^\\prime - u^\\prime v$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La formule du produit est $u^\\prime v + uv^\\prime$, à ne pas confondre avec celle de la somme."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p05_q2",
          "type": "mcq",
          "prompt": "La dérivée du quotient $\\frac{u}{v}$ est :",
          "options": [
            "$\\frac{u^\\prime}{v^\\prime}$",
            "$\\frac{uv^\\prime - u^\\prime v}{v^2}$",
            "$\\frac{u^\\prime v - uv^\\prime}{v^2}$",
            "$\\frac{u^\\prime v + uv^\\prime}{v^2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le numérateur est $u^\\prime v - uv^\\prime$, dans cet ordre, sur $v^2$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p05_q3",
          "type": "mcq",
          "prompt": "La dérivée de $x \\mapsto \\sin(ax + b)$ est :",
          "options": [
            "$x \\mapsto \\cos(ax + b)$",
            "$x \\mapsto -a\\cos(ax + b)$",
            "$x \\mapsto a\\sin(ax + b)$",
            "$x \\mapsto a\\cos(ax + b)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le facteur $a$, dérivée de $ax + b$, multiplie $\\cos(ax + b)$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p05_q4",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^3 + \\frac{1}{x} + \\cos x$, $f^\\prime(x)$ vaut :",
          "options": [
            "$3x^2 - \\frac{1}{x^2} - \\sin x$",
            "$3x^2 + \\frac{1}{x^2} - \\sin x$",
            "$3x^2 - \\frac{1}{x^2} + \\sin x$",
            "$x^2 - \\frac{1}{x^2} - \\sin x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Terme à terme : $3x^2$, puis $-\\frac{1}{x^2}$ pour l’inverse, puis $-\\sin x$ pour le cosinus."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p05_q5",
          "type": "mcq",
          "prompt": "Pour $g(x) = \\frac{x^2}{x + 5}$, $g^\\prime(x)$ vaut :",
          "options": [
            "$\\frac{2x}{1}$",
            "$\\frac{x^2 + 10x}{(x + 5)^2}$",
            "$\\frac{x^2}{(x + 5)^2}$",
            "$\\frac{10x}{(x + 5)^2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $\\frac{2x(x + 5) - x^2}{(x + 5)^2} = \\frac{x^2 + 10x}{(x + 5)^2}$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p05_q6",
          "type": "mcq",
          "prompt": "Pour $h(x) = \\sqrt{3x + 6}$, $h^\\prime(x)$ vaut :",
          "options": [
            "$\\frac{1}{2\\sqrt{3x + 6}}$",
            "$\\frac{3}{\\sqrt{3x + 6}}$",
            "$\\frac{3}{2\\sqrt{3x + 6}}$",
            "$\\frac{1}{\\sqrt{3x + 6}}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La formule $\\frac{a}{2\\sqrt{ax + b}}$ donne ici $a = 3$ au numérateur."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l09_derivation_p06",
      "order": 6,
      "title": "Dérivée et sens de variation",
      "summary": "Lire le sens de variation d’une fonction dans le signe de sa dérivée.",
      "conceptExplanation": "Soit $f$ une fonction dérivable sur un intervalle ouvert $K$. $f$ est croissante sur $K$ si et seulement si $f^\\prime$ est positive sur $K$ ; $f$ est décroissante sur $K$ si et seulement si $f^\\prime$ est négative sur $K$ ; $f$ est constante sur $K$ si et seulement si $f^\\prime$ est nulle sur $K$.\nVersion stricte : $f$ est strictement croissante sur $K$ si et seulement si $f^\\prime$ est strictement positive sur $K$, et strictement décroissante si et seulement si $f^\\prime$ est strictement négative sur $K$. Si $f^\\prime$ est positive et ne s’annule qu’en un nombre fini d’éléments de $K$, alors $f$ est strictement croissante sur $K$ (remarque symétrique pour le signe négatif).",
      "keyRule": "Le signe de la dérivée décide du sens de variation : positif, ça monte ; négatif, ça descend ; nul, c’est constant.",
      "formulas": [
        {
          "name": "Variation et signe de la dérivée",
          "formula": "f^\\prime \\geq 0 \\text{ sur } K \\iff f \\text{ croissante sur } K"
        }
      ],
      "workedExample": {
        "title": "Variations de $f(x) = x^3 - 3x$",
        "statement": "Détermine $f^\\prime(x)$ pour $f(x) = x^3 - 3x$, puis les sens de variation de $f$ sur $\\mathbb{R}$.",
        "methodSteps": [
          "$f$ est dérivable sur $\\mathbb{R}$ et $f^\\prime(x) = 3x^2 - 3 = 3(x + 1)(x - 1)$.",
          "$f^\\prime(x) = 0$ pour $x = -1$ ou $x = 1$, $f^\\prime(x) < 0$ sur $]-1 ; 1[$ et $f^\\prime(x) > 0$ à l’extérieur.",
          "On conclut intervalle par intervalle avec les propriétés."
        ],
        "conclusion": "$f$ est strictement croissante sur $]-\\infty ; -1[$ et sur $]1 ; +\\infty[$, strictement décroissante sur $]-1 ; 1[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le signe de la dérivée donne le sens de variation",
          "stepTheme": "Le signe de la dérivée donne le sens de variation",
          "stepBadge": "Le signe de la dérivée donne le sens de variation",
          "paragraphText": "• Propriété 1 : $f$ est croissante sur $K$ si et seulement si $f^\\prime$ est positive sur $K$ ; décroissante si et seulement si $f^\\prime$ est négative ; constante si et seulement si $f^\\prime$ est nulle.\nC’est le pont entre dérivée et variations.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p06_q1",
            "type": "mcq",
            "prompt": "Si $f^\\prime$ est négative sur $K$, alors $f$ est :",
            "options": [
              "Croissante sur $K$",
              "Constante sur $K$",
              "Décroissante sur $K$",
              "Positive sur $K$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une dérivée négative correspond à une fonction décroissante."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les variations strictes",
          "stepTheme": "Les variations strictes",
          "stepBadge": "Les variations strictes",
          "paragraphText": "• Propriété 2 : $f$ est strictement croissante sur $K$ si et seulement si $f^\\prime$ est strictement positive sur $K$.\nDe même, strictement décroissante correspond à $f^\\prime$ strictement négative sur $K$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p06_q2",
            "type": "mcq",
            "prompt": "Si $f^\\prime$ est strictement positive sur $K$, alors $f$ est :",
            "options": [
              "Strictement croissante sur $K$",
              "Constante sur $K$",
              "Strictement décroissante sur $K$",
              "Nulle sur $K$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la propriété 2 de la leçon pour les variations strictes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La dérivée de $f(x) = x^3 - 3x$",
          "stepTheme": "La dérivée de $f(x) = x^3 - 3x$",
          "stepBadge": "La dérivée de $f(x) = x^3 - 3x$",
          "paragraphText": "• Exercice de fixation : $f$ est dérivable sur $\\mathbb{R}$ et $f^\\prime(x) = 3x^2 - 3$.\nCette dérivée se factorise en $3(x + 1)(x - 1)$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p06_q3",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^3 - 3x$, $f^\\prime(x)$ vaut :",
            "options": [
              "$x^2 - 3$",
              "$3x^2 - 3$",
              "$3x^2 + 3$",
              "$x^3 - 3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On dérive terme à terme : $3x^2$ pour $x^3$ et $-3$ pour $-3x$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Étudier le signe de $f^\\prime$",
          "stepTheme": "Étudier le signe de $f^\\prime$",
          "stepBadge": "Étudier le signe de $f^\\prime$",
          "paragraphText": "• Méthode de l’exercice : $f^\\prime(x) = 0$ pour $x = -1$ ou $x = 1$ ; $f^\\prime(x) < 0$ sur $]-1 ; 1[$.\n$f^\\prime(x) > 0$ sur $]-\\infty ; -1[$ et sur $]1 ; +\\infty[$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p06_q4",
            "type": "mcq",
            "prompt": "Sur quel intervalle $f^\\prime$ est-elle négative pour $f(x) = x^3 - 3x$ ?",
            "options": [
              "Sur $]-\\infty ; -1[$",
              "Sur $]1 ; +\\infty[$",
              "Sur $]-1 ; 1[$",
              "Sur $\\mathbb{R}$ entier"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Entre les racines $-1$ et $1$ de $3(x + 1)(x - 1)$, le produit est négatif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "En déduire les variations",
          "stepTheme": "En déduire les variations",
          "stepBadge": "En déduire les variations",
          "paragraphText": "• Conclusion de l’exercice : $f$ est strictement décroissante sur $]-1 ; 1[$.\n$f$ est strictement croissante sur $]-\\infty ; -1[$ et sur $]1 ; +\\infty[$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p06_q5",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^3 - 3x$, $f$ est strictement croissante sur :",
            "options": [
              "$]-1 ; 1[$ seulement",
              "$]-\\infty ; -1[$ et $]1 ; +\\infty[$",
              "Aucun intervalle",
              "$\\mathbb{R}$ entier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Là où $f^\\prime$ est strictement positive, c’est-à-dire à l’extérieur de $[-1 ; 1]$, $f$ croît strictement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une dérivée positive qui s’annule rarement",
          "stepTheme": "Une dérivée positive qui s’annule rarement",
          "stepBadge": "Une dérivée positive qui s’annule rarement",
          "paragraphText": "• Remarques de la leçon : si $f^\\prime$ est positive sur $K$ et ne s’annule qu’en un nombre fini d’éléments de $K$, alors $f$ est strictement croissante sur $K$.\nLa remarque symétrique vaut pour $f^\\prime$ négative et la stricte décroissance.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p06_q6",
            "type": "mcq",
            "prompt": "Si $f^\\prime$ est positive sur $K$ et ne s’annule qu’en un nombre fini de points de $K$, alors $f$ est :",
            "options": [
              "Constante sur $K$",
              "Strictement décroissante sur $K$",
              "Strictement croissante sur $K$",
              "Non dérivable sur $K$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la remarque de la leçon qui renforce la propriété 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p06_q1",
          "type": "mcq",
          "prompt": "Si $f^\\prime$ est négative sur $K$, alors $f$ est :",
          "options": [
            "Croissante sur $K$",
            "Constante sur $K$",
            "Décroissante sur $K$",
            "Positive sur $K$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une dérivée négative correspond à une fonction décroissante."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p06_q2",
          "type": "mcq",
          "prompt": "Si $f^\\prime$ est strictement positive sur $K$, alors $f$ est :",
          "options": [
            "Strictement croissante sur $K$",
            "Constante sur $K$",
            "Strictement décroissante sur $K$",
            "Nulle sur $K$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la propriété 2 de la leçon pour les variations strictes."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p06_q3",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^3 - 3x$, $f^\\prime(x)$ vaut :",
          "options": [
            "$x^2 - 3$",
            "$3x^2 - 3$",
            "$3x^2 + 3$",
            "$x^3 - 3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On dérive terme à terme : $3x^2$ pour $x^3$ et $-3$ pour $-3x$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p06_q4",
          "type": "mcq",
          "prompt": "Sur quel intervalle $f^\\prime$ est-elle négative pour $f(x) = x^3 - 3x$ ?",
          "options": [
            "Sur $]-\\infty ; -1[$",
            "Sur $]1 ; +\\infty[$",
            "Sur $]-1 ; 1[$",
            "Sur $\\mathbb{R}$ entier"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Entre les racines $-1$ et $1$ de $3(x + 1)(x - 1)$, le produit est négatif."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p06_q5",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^3 - 3x$, $f$ est strictement croissante sur :",
          "options": [
            "$]-1 ; 1[$ seulement",
            "$]-\\infty ; -1[$ et $]1 ; +\\infty[$",
            "Aucun intervalle",
            "$\\mathbb{R}$ entier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Là où $f^\\prime$ est strictement positive, c’est-à-dire à l’extérieur de $[-1 ; 1]$, $f$ croît strictement."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p06_q6",
          "type": "mcq",
          "prompt": "Si $f^\\prime$ est positive sur $K$ et ne s’annule qu’en un nombre fini de points de $K$, alors $f$ est :",
          "options": [
            "Constante sur $K$",
            "Strictement décroissante sur $K$",
            "Strictement croissante sur $K$",
            "Non dérivable sur $K$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la remarque de la leçon qui renforce la propriété 1."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l09_derivation_p07",
      "order": 7,
      "title": "Extremums relatifs et optimisation",
      "summary": "Reconnaître un extremum relatif au changement de signe de la dérivée et résoudre le problème d’optimisation de la leçon.",
      "conceptExplanation": "Soit $f$ une fonction dérivable sur un intervalle ouvert $K$ et $x_0$ un élément de $K$. Si $f^\\prime$ s’annule et change de signe en $x_0$, alors $f(x_0)$ est un extremum relatif de $f$ : un maximum relatif si $f^\\prime$ passe du plus au moins, un minimum relatif si $f^\\prime$ passe du moins au plus.\nApplication : pour la caisse de volume $8$ dont la base est un carré de côté $x$, la hauteur est $h = \\frac{8}{x^2}$ et l’aire totale est $f(x) = 2x^2 + \\frac{32}{x}$. La dérivée change de signe en $2$ : l’aire est minimale pour $x = 2$ et $h = 2$. De même, dans la situation d’apprentissage, l’aire du rectangle $BPMQ$ inscrit dans le triangle est maximale pour $x = 5$, avec une aire de $12$.",
      "keyRule": "Un extremum relatif se lit au changement de signe de la dérivée : moins puis plus donne un minimum, plus puis moins donne un maximum.",
      "formulas": [
        {
          "name": "Aire totale de la caisse",
          "formula": "f(x) = 2x^2 + \\frac{32}{x}",
          "note": "Pour un volume de $8$ et une base carrée de côté $x$."
        }
      ],
      "workedExample": {
        "title": "La caisse de volume $8$ de Monsieur Moussa",
        "statement": "Une caisse en forme de pavé droit a un volume de $8$ et une base carrée de côté $x$. Quelles dimensions minimisent l’aire de la surface totale, donc le bois utilisé ?",
        "methodSteps": [
          "La hauteur est $h = \\frac{8}{x^2}$, car le volume vaut $x^2 h$.",
          "L’aire totale vaut $f(x) = 2x^2 + \\frac{32}{x}$ : deux faces carrées et quatre faces rectangulaires.",
          "$f^\\prime$ est négative sur $]0 ; 2[$ et positive sur $]2 ; +\\infty[$ : $f$ décroît puis croît.",
          "La valeur exacte du minimum est $f(2) = 24$ ; le corrigé du document source annonce $16$, ce qui est une erreur de la source."
        ],
        "conclusion": "Le bois est minimisé pour un côté de base de $2$ m et une hauteur de $2$ m, avec une aire totale minimale de $24$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’extremum relatif",
          "stepTheme": "L’extremum relatif",
          "stepBadge": "L’extremum relatif",
          "paragraphText": "• Propriété : si $f^\\prime$ s’annule et change de signe en $x_0$, alors $f(x_0)$ est un extremum relatif de $f$.\nSans changement de signe, l’annulation seule ne donne pas d’extremum.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p07_q1",
            "type": "mcq",
            "prompt": "Pour que $f(x_0)$ soit un extremum relatif, il faut que $f^\\prime$ en $x_0$ :",
            "options": [
              "Soit strictement positive",
              "S’annule et change de signe",
              "Soit constante",
              "Ne s’annule jamais"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La propriété exige l’annulation accompagnée d’un changement de signe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Maximum et minimum relatifs",
          "stepTheme": "Maximum et minimum relatifs",
          "stepBadge": "Maximum et minimum relatifs",
          "paragraphText": "• Tableaux de la leçon : si $f^\\prime$ passe du signe plus au signe moins en $x_0$, $f(x_0)$ est un maximum relatif.\nSi $f^\\prime$ passe du signe moins au signe plus en $x_0$, $f(x_0)$ est un minimum relatif.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p07_q2",
            "type": "mcq",
            "prompt": "Si $f^\\prime$ passe du signe moins au signe plus en $x_0$, alors $f(x_0)$ est :",
            "options": [
              "Un maximum relatif",
              "Un minimum relatif",
              "Ni l’un ni l’autre",
              "Une asymptote"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La fonction descend puis monte : le point bas est un minimum relatif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L’extremum lu dans un tableau de variation",
          "stepTheme": "L’extremum lu dans un tableau de variation",
          "stepBadge": "L’extremum lu dans un tableau de variation",
          "paragraphText": "• Exercice de fixation : dans le tableau de la fonction $g$ des exercices, la dérivée s’annule en $\\frac{3}{2}$ en changeant de signe, du moins vers le plus.\n$g$ admet donc en $\\frac{3}{2}$ un minimum relatif égal à $\\frac{27}{4}$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p07_q3",
            "type": "mcq",
            "prompt": "D’après l’exercice de fixation, le minimum relatif de $g$ vaut :",
            "options": [
              "$\\frac{27}{4}$",
              "$\\frac{3}{2}$",
              "$0$",
              "$\\frac{4}{27}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La valeur de l’extremum est $g\\left(\\frac{3}{2}\\right) = \\frac{27}{4}$, à distinguer de l’abscisse $\\frac{3}{2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La démarche d’optimisation de la situation complexe",
          "stepTheme": "La démarche d’optimisation de la situation complexe",
          "stepBadge": "La démarche d’optimisation de la situation complexe",
          "paragraphText": "• Situation complexe de la leçon : pour la caisse de volume $8$ à base carrée, on exprime l’aire totale en fonction du côté $x$.\nOn étudie ensuite la fonction obtenue pour trouver son extremum, puis on conclut sur les dimensions.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p07_q4",
            "type": "mcq",
            "prompt": "Dans un problème d’optimisation, après avoir exprimé la quantité en fonction de $x$, on :",
            "options": [
              "Trace la courbe au hasard",
              "Étudie la fonction obtenue pour trouver ses extremums",
              "Calcule uniquement $f(0)$",
              "Change de variable"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la démarche annoncée dans la solution de la situation complexe."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La caisse de Monsieur Moussa",
          "stepTheme": "La caisse de Monsieur Moussa",
          "stepBadge": "La caisse de Monsieur Moussa",
          "paragraphText": "• Solution de la leçon : avec $h = \\frac{8}{x^2}$, l’aire totale est $f(x) = 2x^2 + \\frac{32}{x}$ sur $]0 ; +\\infty[$.\nSa dérivée est négative sur $]0 ; 2[$ et positive sur $]2 ; +\\infty[$ : le minimum est atteint en $x = 2$, et alors $h = 2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p07_q5",
            "type": "mcq",
            "prompt": "Pour la caisse de volume $8$, le côté de la base qui minimise l’aire vaut :",
            "options": [
              "$8$",
              "$4$",
              "$2$",
              "$1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le changement de signe de $f^\\prime$ a lieu en $x = 2$, où la hauteur vaut aussi $2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre l’abscisse et la valeur de l’extremum",
          "stepTheme": "Confondre l’abscisse et la valeur de l’extremum",
          "stepBadge": "Confondre l’abscisse et la valeur de l’extremum",
          "paragraphText": "• Piège : l’extremum relatif est la valeur $f(x_0)$, pas l’abscisse $x_0$ où il est atteint.\nDans l’exercice sur $g$, l’abscisse est $\\frac{3}{2}$ et la valeur du minimum est $\\frac{27}{4}$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l09_derivation_p07_q6",
            "type": "mcq",
            "prompt": "L’extremum relatif d’une fonction en $x_0$ est :",
            "options": [
              "L’abscisse $x_0$",
              "La valeur $f(x_0)$",
              "La dérivée $f^\\prime(x_0)$",
              "Le signe de $f^\\prime$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, l’extremum est l’image $f(x_0)$ ; $x_0$ est seulement l’endroit où il est atteint."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p07_q1",
          "type": "mcq",
          "prompt": "Pour que $f(x_0)$ soit un extremum relatif, il faut que $f^\\prime$ en $x_0$ :",
          "options": [
            "Soit strictement positive",
            "S’annule et change de signe",
            "Soit constante",
            "Ne s’annule jamais"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La propriété exige l’annulation accompagnée d’un changement de signe."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p07_q2",
          "type": "mcq",
          "prompt": "Si $f^\\prime$ passe du signe moins au signe plus en $x_0$, alors $f(x_0)$ est :",
          "options": [
            "Un maximum relatif",
            "Un minimum relatif",
            "Ni l’un ni l’autre",
            "Une asymptote"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La fonction descend puis monte : le point bas est un minimum relatif."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p07_q3",
          "type": "mcq",
          "prompt": "D’après l’exercice de fixation, le minimum relatif de $g$ vaut :",
          "options": [
            "$\\frac{27}{4}$",
            "$\\frac{3}{2}$",
            "$0$",
            "$\\frac{4}{27}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La valeur de l’extremum est $g\\left(\\frac{3}{2}\\right) = \\frac{27}{4}$, à distinguer de l’abscisse $\\frac{3}{2}$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p07_q4",
          "type": "mcq",
          "prompt": "Dans un problème d’optimisation, après avoir exprimé la quantité en fonction de $x$, on :",
          "options": [
            "Trace la courbe au hasard",
            "Étudie la fonction obtenue pour trouver ses extremums",
            "Calcule uniquement $f(0)$",
            "Change de variable"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la démarche annoncée dans la solution de la situation complexe."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p07_q5",
          "type": "mcq",
          "prompt": "Pour la caisse de volume $8$, le côté de la base qui minimise l’aire vaut :",
          "options": [
            "$8$",
            "$4$",
            "$2$",
            "$1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le changement de signe de $f^\\prime$ a lieu en $x = 2$, où la hauteur vaut aussi $2$."
        },
        {
          "id": "premiere_c_maths_numerique_l09_derivation_p07_q6",
          "type": "mcq",
          "prompt": "L’extremum relatif d’une fonction en $x_0$ est :",
          "options": [
            "L’abscisse $x_0$",
            "La valeur $f(x_0)$",
            "La dérivée $f^\\prime(x_0)$",
            "Le signe de $f^\\prime$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, l’extremum est l’image $f(x_0)$ ; $x_0$ est seulement l’endroit où il est atteint."
        }
      ]
    }
  ]
};
