import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Dérivation » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Dérivation » (document PDF officiel, Mathématiques 1ère D, lot P07)
export const MATHS_1ERE_D_L06_DERIVATION: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l06_derivation",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 6,
  "title": "Leçon 6 : Dérivation",
  "summary": "La leçon définit le nombre dérivé en un point et son interprétation comme coefficient directeur de la tangente, présente la fonction dérivée, les dérivées de référence et les règles d’opérations, puis applique la dérivation à l’étude des variations et des extremums d’une fonction.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Dérivation » (document PDF officiel, Mathématiques 1ère D, lot P07)",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l06_derivation_p01",
      "order": 1,
      "title": "Nombre dérivé d’une fonction en un point",
      "summary": "Définir la dérivabilité en un point par la limite finie du taux d’accroissement et calculer un nombre dérivé par la définition.",
      "conceptExplanation": "Définition : soit $f$ une fonction définie sur un intervalle ouvert $K$ contenant le réel $x_0$. On dit que $f$ est dérivable en $x_0$ si le taux d’accroissement de $f$ entre $x_0$ et $x$ admet une limite finie en $x_0$.\nCette limite finie est appelée le nombre dérivé de $f$ en $x_0$ et est notée $f'(x_0)$.\nExemple 1 : pour $f(x) = x^2 - 2$, le taux en $3$ se simplifie en $x + 3$ et tend vers $6$ : $f$ est dérivable en $3$ et $f'(3) = 6$.\nExemple 2 : pour $g(x) = \\sqrt{x}$, le taux en $0$ est l’inverse de $\\sqrt{x}$ et tend vers $+\\infty$, qui n’est pas un nombre réel : $g$ n’est pas dérivable en $0$.",
      "keyRule": "Dérivable en $x_0$ veut dire : le taux d’accroissement a une limite finie en $x_0$, et cette limite est le nombre dérivé.",
      "formulas": [
        {
          "name": "Nombre dérivé en un point",
          "formula": "f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}",
          "note": "La limite doit être finie."
        }
      ],
      "workedExample": {
        "title": "Le nombre dérivé de $x^2 - 2$ en $3$ (exemple 1)",
        "statement": "Soit la fonction $f$ de $\\mathbb{R}$ vers $\\mathbb{R}$ définie par $f(x) = x^2 - 2$. En utilisant la définition, montre que $f$ est dérivable en $3$ et détermine son nombre dérivé en $3$.",
        "methodSteps": [
          "On calcule $f(3) = 3^2 - 2 = 7$, puis le taux d’accroissement entre $3$ et $x$.",
          "Le numérateur vaut $(x^2 - 2) - 7 = x^2 - 9$, qui se factorise en $(x - 3)(x + 3)$.",
          "Après simplification par $x - 3$, le taux vaut $x + 3$, dont la limite en $3$ est $6$.",
          "Cette limite est finie : $6$ est un nombre réel."
        ],
        "conclusion": "La fonction $f$ est dérivable en $3$ et son nombre dérivé en $3$ est $f'(3) = 6$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de la dérivabilité en un point",
          "stepTheme": "La définition de la dérivabilité en un point",
          "stepBadge": "La définition de la dérivabilité en un point",
          "paragraphText": "• Définition : $f$ est dérivable en $x_0$ si son taux d’accroissement entre $x_0$ et $x$ admet une limite finie en $x_0$.\nCette limite finie est le nombre dérivé de $f$ en $x_0$, noté $f'(x_0)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p01_q1",
            "type": "mcq",
            "prompt": "$f$ est dérivable en $x_0$ lorsque :",
            "options": [
              "Son taux d’accroissement admet une limite finie en $x_0$",
              "Son taux d’accroissement tend vers $+\\infty$ en $x_0$",
              "Elle est définie en $x_0$",
              "Sa courbe admet une tangente verticale en $x_0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La définition exige une limite finie du taux d’accroissement : cette limite est $f'(x_0)$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le nombre dérivé de $x^2 - 2$ en $3$",
          "stepTheme": "Le nombre dérivé de $x^2 - 2$ en $3$",
          "stepBadge": "Le nombre dérivé de $x^2 - 2$ en $3$",
          "paragraphText": "• Exemple 1 de la leçon : le taux de $f(x) = x^2 - 2$ en $3$ se simplifie en $x + 3$.\nSa limite en $3$ est $6$, un nombre réel.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p01_q2",
            "type": "mcq",
            "prompt": "Que vaut le nombre dérivé de $f(x) = x^2 - 2$ en $3$ ?",
            "options": [
              "$7$",
              "$3$",
              "$6$",
              "$9$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Après simplification, le taux vaut $x + 3$, qui tend vers $6$ : $f'(3) = 6$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Simplifier le taux avant de passer à la limite",
          "stepTheme": "Simplifier le taux avant de passer à la limite",
          "stepBadge": "Simplifier le taux avant de passer à la limite",
          "paragraphText": "• Méthode de l’exemple 1 : le numérateur du taux, $x^2 - 9$, se factorise en $(x - 3)(x + 3)$.\nOn simplifie alors par le dénominateur $x - 3$ avant de calculer la limite.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p01_q3",
            "type": "mcq",
            "prompt": "Après simplification, le taux d’accroissement de $f(x) = x^2 - 2$ entre $3$ et $x$ vaut :",
            "options": [
              "$x - 3$",
              "$x + 3$",
              "$x^2 - 9$",
              "$2x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La factorisation de $x^2 - 9$ et la simplification par $x - 3$ laissent $x + 3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La racine carrée n’est pas dérivable en 0",
          "stepTheme": "La racine carrée n’est pas dérivable en 0",
          "stepBadge": "La racine carrée n’est pas dérivable en 0",
          "paragraphText": "• Exemple 2 de la leçon : pour $g(x) = \\sqrt{x}$, le taux en $0$ est l’inverse de $\\sqrt{x}$ pour $x > 0$.\nSa limite en $0$ est $+\\infty$, qui n’est pas un nombre réel.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p01_q4",
            "type": "mcq",
            "prompt": "Quelle est la conclusion de l’exemple 2 pour $g(x) = \\sqrt{x}$ en $0$ ?",
            "options": [
              "$g$ est dérivable en $0$ et $g'(0) = 0$",
              "$g$ est dérivable en $0$ et $g'(0) = 1$",
              "$g$ n’est pas définie en $0$",
              "$g$ n’est pas dérivable en $0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La limite du taux n’est pas un nombre réel : $g$ n’est pas dérivable en $0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une limite infinie ne donne pas de nombre dérivé",
          "stepTheme": "Une limite infinie ne donne pas de nombre dérivé",
          "stepBadge": "Une limite infinie ne donne pas de nombre dérivé",
          "paragraphText": "• Exercice de fixation : la fonction n’est dérivable en $x_0$ que dans le cas où la limite du taux vaut $-3$.\nLes cas où cette limite vaut $-\\infty$, vaut $+\\infty$ ou n’existe pas ne donnent pas de nombre dérivé.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p01_q5",
            "type": "mcq",
            "prompt": "Si la limite du taux d’accroissement en $x_0$ vaut $-\\infty$, alors :",
            "options": [
              "$f$ est dérivable en $x_0$",
              "$f$ n’est pas dérivable en $x_0$",
              "$f'(x_0) = -\\infty$",
              "$f'(x_0) = 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une limite infinie n’est pas une limite finie : il n’y a pas de nombre dérivé en $x_0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Un nombre dérivé nul calculé par la définition",
          "stepTheme": "Un nombre dérivé nul calculé par la définition",
          "stepBadge": "Un nombre dérivé nul calculé par la définition",
          "paragraphText": "• Exercice 2 de la leçon : pour $f(x) = x^2 + 2x - 3$, le taux en $-1$ se simplifie en $x + 1$.\nSa limite en $-1$ vaut $0$ : le nombre dérivé en $-1$ est nul, sans que la fonction soit constante.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p01_q6",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^2 + 2x - 3$, que vaut $f'(-1)$ ?",
            "options": [
              "$-1$",
              "$1$",
              "$0$",
              "$-4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le taux simplifié $x + 1$ tend vers $0$ en $-1$ : $f'(-1) = 0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p01_q1",
          "type": "mcq",
          "prompt": "$f$ est dérivable en $x_0$ lorsque :",
          "options": [
            "Son taux d’accroissement admet une limite finie en $x_0$",
            "Son taux d’accroissement tend vers $+\\infty$ en $x_0$",
            "Elle est définie en $x_0$",
            "Sa courbe admet une tangente verticale en $x_0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La définition exige une limite finie du taux d’accroissement : cette limite est $f'(x_0)$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p01_q2",
          "type": "mcq",
          "prompt": "Que vaut le nombre dérivé de $f(x) = x^2 - 2$ en $3$ ?",
          "options": [
            "$7$",
            "$3$",
            "$6$",
            "$9$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Après simplification, le taux vaut $x + 3$, qui tend vers $6$ : $f'(3) = 6$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p01_q3",
          "type": "mcq",
          "prompt": "Après simplification, le taux d’accroissement de $f(x) = x^2 - 2$ entre $3$ et $x$ vaut :",
          "options": [
            "$x - 3$",
            "$x + 3$",
            "$x^2 - 9$",
            "$2x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La factorisation de $x^2 - 9$ et la simplification par $x - 3$ laissent $x + 3$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p01_q4",
          "type": "mcq",
          "prompt": "Quelle est la conclusion de l’exemple 2 pour $g(x) = \\sqrt{x}$ en $0$ ?",
          "options": [
            "$g$ est dérivable en $0$ et $g'(0) = 0$",
            "$g$ est dérivable en $0$ et $g'(0) = 1$",
            "$g$ n’est pas définie en $0$",
            "$g$ n’est pas dérivable en $0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La limite du taux n’est pas un nombre réel : $g$ n’est pas dérivable en $0$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p01_q5",
          "type": "mcq",
          "prompt": "Si la limite du taux d’accroissement en $x_0$ vaut $-\\infty$, alors :",
          "options": [
            "$f$ est dérivable en $x_0$",
            "$f$ n’est pas dérivable en $x_0$",
            "$f'(x_0) = -\\infty$",
            "$f'(x_0) = 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une limite infinie n’est pas une limite finie : il n’y a pas de nombre dérivé en $x_0$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p01_q6",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^2 + 2x - 3$, que vaut $f'(-1)$ ?",
          "options": [
            "$-1$",
            "$1$",
            "$0$",
            "$-4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le taux simplifié $x + 1$ tend vers $0$ en $-1$ : $f'(-1) = 0$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l06_derivation_p02",
      "order": 2,
      "title": "Interprétation graphique : la tangente à la courbe",
      "summary": "Interpréter le nombre dérivé comme coefficient directeur de la tangente et déterminer une équation de cette tangente.",
      "conceptExplanation": "Propriété : soit $f$ une fonction, sa courbe représentative dans le plan muni d’un repère, et $A$ un point de cette courbe d’abscisse $x_0$.\nSi $f$ est dérivable en $x_0$, alors la courbe admet en son point $A$ une tangente de coefficient directeur $f'(x_0)$.\nUne équation de cette tangente est : $y = f'(x_0)(x - x_0) + f(x_0)$.\nExemple de l’exercice 3 : pour la fonction inverse en $-2$, le nombre dérivé vaut moins un quart et l’image vaut moins un demi, ce qui donne une tangente d’équation explicite.",
      "keyRule": "Tangente en $x_0$ : son coefficient directeur est le nombre dérivé $f'(x_0)$, et elle passe par le point de coordonnées $x_0$ et $f(x_0)$.",
      "formulas": [
        {
          "name": "Équation de la tangente en un point",
          "formula": "y = f'(x_0)(x - x_0) + f(x_0)"
        }
      ],
      "workedExample": {
        "title": "La tangente en $2$ (exercice de fixation)",
        "statement": "Soit la fonction $f$ définie et dérivable en $2$ telle que $f(2) = -4$ et $f'(2) = -3$. Détermine une équation de la tangente à sa courbe au point d’abscisse $2$.",
        "methodSteps": [
          "Une équation de la tangente est $y = f'(2)(x - 2) + f(2)$.",
          "On remplace $f'(2)$ par $-3$ et $f(2)$ par $-4$ : $y = -3(x - 2) - 4$.",
          "On développe : $y = -3x + 6 - 4$."
        ],
        "conclusion": "La tangente a pour équation $y = -3x + 2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le nombre dérivé, coefficient directeur de la tangente",
          "stepTheme": "Le nombre dérivé, coefficient directeur de la tangente",
          "stepBadge": "Le nombre dérivé, coefficient directeur de la tangente",
          "paragraphText": "• Propriété : si $f$ est dérivable en $x_0$, sa courbe admet au point d’abscisse $x_0$ une tangente de coefficient directeur $f'(x_0)$.\nLe nombre dérivé se lit donc graphiquement comme une pente.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p02_q1",
            "type": "mcq",
            "prompt": "Le coefficient directeur de la tangente à la courbe de $f$ au point d’abscisse $x_0$ est :",
            "options": [
              "$f(x_0)$",
              "$x_0$",
              "$f'(x_0)$",
              "Le produit de $f(x_0)$ par $x_0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la propriété d’interprétation graphique du nombre dérivé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’équation de la tangente",
          "stepTheme": "L’équation de la tangente",
          "stepBadge": "L’équation de la tangente",
          "paragraphText": "• Propriété : une équation de la tangente au point d’abscisse $x_0$ est $y = f'(x_0)(x - x_0) + f(x_0)$.\nIl faut donc connaître à la fois l’image et le nombre dérivé au point.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p02_q2",
            "type": "mcq",
            "prompt": "Une équation de la tangente à la courbe de $f$ au point d’abscisse $x_0$ est :",
            "options": [
              "$y = f(x_0)(x - x_0) + f'(x_0)$",
              "$y = f'(x_0)(x - x_0) + f(x_0)$",
              "$y = f'(x) + f(x)$",
              "$y = x_0(x - f(x_0)) + f'(x_0)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le coefficient directeur est $f'(x_0)$ et la droite passe par le point d’ordonnée $f(x_0)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Calculer une équation de tangente",
          "stepTheme": "Calculer une équation de tangente",
          "stepBadge": "Calculer une équation de tangente",
          "paragraphText": "• Exercice de fixation : avec $f(2) = -4$ et $f'(2) = -3$, l’équation $y = -3(x - 2) - 4$ se développe en $y = -3x + 2$.\nLa tangente est donc une droite de coefficient directeur $-3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p02_q3",
            "type": "mcq",
            "prompt": "Avec $f(2) = -4$ et $f'(2) = -3$, la tangente au point d’abscisse $2$ a pour équation :",
            "options": [
              "$y = -3x - 4$",
              "$y = 3x + 2$",
              "$y = -3x + 2$",
              "$y = -4x - 3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $-3(x - 2) - 4 = -3x + 6 - 4 = -3x + 2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La tangente à la courbe de la fonction inverse",
          "stepTheme": "La tangente à la courbe de la fonction inverse",
          "stepBadge": "La tangente à la courbe de la fonction inverse",
          "paragraphText": "• Exercice 3 : pour $f(x) = \\frac{1}{x}$, les calculs donnent $f'(-2)$ égal à moins un quart et $f(-2)$ égal à moins un demi.\nLa tangente au point d’abscisse $-2$ a ainsi un coefficient directeur négatif et faible en valeur absolue.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p02_q4",
            "type": "mcq",
            "prompt": "Pour la fonction inverse, que vaut le coefficient directeur de la tangente au point d’abscisse $-2$ ?",
            "options": [
              "Moins un quart",
              "Moins un demi",
              "Un quart",
              "Moins deux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé donne $f'(-2)$ égal à moins un quart, d’où la tangente d’équation $y$ égale à moins un quart de $x$, moins $1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un nombre dérivé nul donne une tangente horizontale",
          "stepTheme": "Un nombre dérivé nul donne une tangente horizontale",
          "stepBadge": "Un nombre dérivé nul donne une tangente horizontale",
          "paragraphText": "• Exercice 5 de la leçon : l’affirmation « si $f'(a) = 0$, alors la courbe de $f$ admet une tangente verticale au point d’abscisse $a$ » est fausse.\nUn coefficient directeur nul correspond à une droite horizontale.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p02_q5",
            "type": "mcq",
            "prompt": "Si $f'(a) = 0$, la tangente à la courbe de $f$ au point d’abscisse $a$ est :",
            "options": [
              "Verticale",
              "Horizontale",
              "Inexistante",
              "Confondue avec la courbe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le coefficient directeur vaut $0$ : la tangente est horizontale, et l’affirmation de l’exercice 5 est fausse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La démarche pour une équation de tangente",
          "stepTheme": "La démarche pour une équation de tangente",
          "stepBadge": "La démarche pour une équation de tangente",
          "paragraphText": "• Méthode : on relève ou on calcule l’image $f(x_0)$ et le nombre dérivé $f'(x_0)$, puis on les reporte dans la formule de la tangente.\nC’est la démarche suivie dans l’exercice de fixation et dans l’exercice 3.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p02_q6",
            "type": "mcq",
            "prompt": "Pour déterminer l’équation de la tangente au point d’abscisse $x_0$, il faut connaître :",
            "options": [
              "Seulement $f(x_0)$",
              "Seulement la courbe",
              "La dérivée de $f$ sur tout son domaine",
              "$f(x_0)$ et $f'(x_0)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La formule $y = f'(x_0)(x - x_0) + f(x_0)$ utilise les deux valeurs au point."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p02_q1",
          "type": "mcq",
          "prompt": "Le coefficient directeur de la tangente à la courbe de $f$ au point d’abscisse $x_0$ est :",
          "options": [
            "$f(x_0)$",
            "$x_0$",
            "$f'(x_0)$",
            "Le produit de $f(x_0)$ par $x_0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la propriété d’interprétation graphique du nombre dérivé."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p02_q2",
          "type": "mcq",
          "prompt": "Une équation de la tangente à la courbe de $f$ au point d’abscisse $x_0$ est :",
          "options": [
            "$y = f(x_0)(x - x_0) + f'(x_0)$",
            "$y = f'(x_0)(x - x_0) + f(x_0)$",
            "$y = f'(x) + f(x)$",
            "$y = x_0(x - f(x_0)) + f'(x_0)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le coefficient directeur est $f'(x_0)$ et la droite passe par le point d’ordonnée $f(x_0)$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p02_q3",
          "type": "mcq",
          "prompt": "Avec $f(2) = -4$ et $f'(2) = -3$, la tangente au point d’abscisse $2$ a pour équation :",
          "options": [
            "$y = -3x - 4$",
            "$y = 3x + 2$",
            "$y = -3x + 2$",
            "$y = -4x - 3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $-3(x - 2) - 4 = -3x + 6 - 4 = -3x + 2$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p02_q4",
          "type": "mcq",
          "prompt": "Pour la fonction inverse, que vaut le coefficient directeur de la tangente au point d’abscisse $-2$ ?",
          "options": [
            "Moins un quart",
            "Moins un demi",
            "Un quart",
            "Moins deux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé donne $f'(-2)$ égal à moins un quart, d’où la tangente d’équation $y$ égale à moins un quart de $x$, moins $1$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p02_q5",
          "type": "mcq",
          "prompt": "Si $f'(a) = 0$, la tangente à la courbe de $f$ au point d’abscisse $a$ est :",
          "options": [
            "Verticale",
            "Horizontale",
            "Inexistante",
            "Confondue avec la courbe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le coefficient directeur vaut $0$ : la tangente est horizontale, et l’affirmation de l’exercice 5 est fausse."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p02_q6",
          "type": "mcq",
          "prompt": "Pour déterminer l’équation de la tangente au point d’abscisse $x_0$, il faut connaître :",
          "options": [
            "Seulement $f(x_0)$",
            "Seulement la courbe",
            "La dérivée de $f$ sur tout son domaine",
            "$f(x_0)$ et $f'(x_0)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La formule $y = f'(x_0)(x - x_0) + f(x_0)$ utilise les deux valeurs au point."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l06_derivation_p03",
      "order": 3,
      "title": "Dérivabilité et continuité",
      "summary": "Utiliser l’implication « dérivable en un point donc continue en ce point » et savoir que la réciproque est fausse.",
      "conceptExplanation": "Propriété : si une fonction $f$ est dérivable en $x_0$, alors $f$ est continue en $x_0$.\nRemarque : réciproquement, $f$ continue en $x_0$ n’implique pas que $f$ soit dérivable en $x_0$.\nEn effet, la fonction $g$ définie sur $[0 ; +\\infty[$ par $g(x) = \\sqrt{x}$ est continue en $0$, mais elle n’est pas dérivable en $0$, comme l’a montré l’exemple 2 du premier point.\nExercice d’application : l’affirmation « toute fonction continue en $x_0$ est dérivable en $x_0$ » est fausse ; l’affirmation « toute fonction qui n’est pas continue en $x_0$ n’est pas dérivable en $x_0$ » est vraie ; l’affirmation « toute fonction dérivable en $x_0$ est continue en $x_0$ » est vraie.",
      "keyRule": "La dérivabilité est plus forte que la continuité : dérivable implique continue, mais continue n’implique pas dérivable.",
      "formulas": [
        {
          "name": "Dérivabilité et continuité",
          "formula": "f \\text{ dérivable en } x_0 \\implies f \\text{ continue en } x_0"
        }
      ],
      "workedExample": {
        "title": "Le contre-exemple de la racine carrée en $0$",
        "statement": "La fonction $g$ de $[0 ; +\\infty[$ vers $\\mathbb{R}$ est définie par $g(x) = \\sqrt{x}$. Que peut-on dire de sa continuité et de sa dérivabilité en $0$ ?",
        "methodSteps": [
          "La fonction racine carrée est continue en $0$, point de son ensemble de définition.",
          "Son taux d’accroissement en $0$ est l’inverse de $\\sqrt{x}$, qui tend vers $+\\infty$.",
          "Cette limite n’est pas finie : $g$ n’est pas dérivable en $0$."
        ],
        "conclusion": "$g$ est continue en $0$ mais pas dérivable en $0$ : la réciproque de la propriété est fausse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Dérivable implique continue",
          "stepTheme": "Dérivable implique continue",
          "stepBadge": "Dérivable implique continue",
          "paragraphText": "• Propriété : si une fonction $f$ est dérivable en $x_0$, alors $f$ est continue en $x_0$.\nC’est l’affirmation 3 de l’exercice d’application, déclarée vraie.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p03_q1",
            "type": "mcq",
            "prompt": "Si $f$ est dérivable en $x_0$, alors nécessairement :",
            "options": [
              "$f$ est continue en $x_0$",
              "$f'(x_0) = 0$",
              "$f$ est constante au voisinage de $x_0$",
              "$f$ n’est pas continue en $x_0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la propriété de la leçon : la dérivabilité en un point entraîne la continuité en ce point."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "La réciproque est fausse",
          "stepTheme": "La réciproque est fausse",
          "stepBadge": "La réciproque est fausse",
          "paragraphText": "• Exercice d’application : l’affirmation « toute fonction continue en $x_0$ est dérivable en $x_0$ » est fausse.\nLa continuité en un point ne suffit donc pas à garantir la dérivabilité en ce point.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p03_q2",
            "type": "mcq",
            "prompt": "L’affirmation « toute fonction continue en $x_0$ est dérivable en $x_0$ » est :",
            "options": [
              "Vraie",
              "Fausse",
              "Vraie seulement pour les polynômes dans cet exercice",
              "Non traitée dans la leçon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé de l’exercice d’application répond Faux à cette première affirmation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Continue en 0 mais pas dérivable en 0",
          "stepTheme": "Continue en 0 mais pas dérivable en 0",
          "stepBadge": "Continue en 0 mais pas dérivable en 0",
          "paragraphText": "• Exemple de la remarque : la fonction $g(x) = \\sqrt{x}$ est continue en $0$.\nPourtant son taux d’accroissement en $0$ tend vers $+\\infty$ : elle n’est pas dérivable en $0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p03_q3",
            "type": "mcq",
            "prompt": "Pour $g(x) = \\sqrt{x}$ en $0$, on a :",
            "options": [
              "Continue et dérivable",
              "Ni continue ni dérivable",
              "Continue mais pas dérivable",
              "Dérivable mais pas continue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le contre-exemple officiel de la leçon à la réciproque de la propriété."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La contraposée : pas continue, pas dérivable",
          "stepTheme": "La contraposée : pas continue, pas dérivable",
          "stepBadge": "La contraposée : pas continue, pas dérivable",
          "paragraphText": "• Exercice d’application : l’affirmation « toute fonction qui n’est pas continue en $x_0$ n’est pas dérivable en $x_0$ » est vraie.\nC’est la contraposée de la propriété : si $f$ était dérivable en $x_0$, elle serait continue en $x_0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p03_q4",
            "type": "mcq",
            "prompt": "Si $f$ n’est pas continue en $x_0$, que peut-on conclure ?",
            "options": [
              "$f$ est dérivable en $x_0$",
              "$f'(x_0) = 0$",
              "On ne peut rien conclure",
              "$f$ n’est pas dérivable en $x_0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corrigé déclare cette affirmation vraie : sans continuité, pas de dérivabilité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le bilan de l’exercice d’application",
          "stepTheme": "Le bilan de l’exercice d’application",
          "stepBadge": "Le bilan de l’exercice d’application",
          "paragraphText": "• Corrigé de l’exercice d’application : Faux pour « continue implique dérivable », Vrai pour « non continue implique non dérivable », Vrai pour « dérivable implique continue ».\nLes deux dernières affirmations disent la même chose, sous deux formes équivalentes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p03_q5",
            "type": "mcq",
            "prompt": "Dans l’exercice d’application, l’affirmation « toute fonction dérivable en $x_0$ est continue en $x_0$ » est :",
            "options": [
              "Vraie",
              "Fausse",
              "Vraie seulement en $0$",
              "Non corrigée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la troisième affirmation, déclarée vraie dans la solution de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Deux façons de montrer qu’une fonction n’est pas dérivable",
          "stepTheme": "Deux façons de montrer qu’une fonction n’est pas dérivable",
          "stepBadge": "Deux façons de montrer qu’une fonction n’est pas dérivable",
          "paragraphText": "• Méthode tirée de la leçon : pour montrer que $f$ n’est pas dérivable en $x_0$, on peut montrer qu’elle n’y est pas continue, par la contraposée.\nOn peut aussi, comme pour la racine carrée en $0$, montrer que son taux d’accroissement n’a pas de limite finie en $x_0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p03_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces démarches prouve que $f$ n’est pas dérivable en $x_0$ ?",
            "options": [
              "Montrer que $f(x_0) = 0$",
              "Montrer que $f$ n’est pas continue en $x_0$",
              "Montrer que $f$ est continue en $x_0$",
              "Calculer $f'(x)$ en un autre point"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par la contraposée de la propriété, l’absence de continuité en $x_0$ interdit la dérivabilité en $x_0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p03_q1",
          "type": "mcq",
          "prompt": "Si $f$ est dérivable en $x_0$, alors nécessairement :",
          "options": [
            "$f$ est continue en $x_0$",
            "$f'(x_0) = 0$",
            "$f$ est constante au voisinage de $x_0$",
            "$f$ n’est pas continue en $x_0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la propriété de la leçon : la dérivabilité en un point entraîne la continuité en ce point."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p03_q2",
          "type": "mcq",
          "prompt": "L’affirmation « toute fonction continue en $x_0$ est dérivable en $x_0$ » est :",
          "options": [
            "Vraie",
            "Fausse",
            "Vraie seulement pour les polynômes dans cet exercice",
            "Non traitée dans la leçon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé de l’exercice d’application répond Faux à cette première affirmation."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p03_q3",
          "type": "mcq",
          "prompt": "Pour $g(x) = \\sqrt{x}$ en $0$, on a :",
          "options": [
            "Continue et dérivable",
            "Ni continue ni dérivable",
            "Continue mais pas dérivable",
            "Dérivable mais pas continue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le contre-exemple officiel de la leçon à la réciproque de la propriété."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p03_q4",
          "type": "mcq",
          "prompt": "Si $f$ n’est pas continue en $x_0$, que peut-on conclure ?",
          "options": [
            "$f$ est dérivable en $x_0$",
            "$f'(x_0) = 0$",
            "On ne peut rien conclure",
            "$f$ n’est pas dérivable en $x_0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corrigé déclare cette affirmation vraie : sans continuité, pas de dérivabilité."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p03_q5",
          "type": "mcq",
          "prompt": "Dans l’exercice d’application, l’affirmation « toute fonction dérivable en $x_0$ est continue en $x_0$ » est :",
          "options": [
            "Vraie",
            "Fausse",
            "Vraie seulement en $0$",
            "Non corrigée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la troisième affirmation, déclarée vraie dans la solution de la leçon."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p03_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces démarches prouve que $f$ n’est pas dérivable en $x_0$ ?",
          "options": [
            "Montrer que $f(x_0) = 0$",
            "Montrer que $f$ n’est pas continue en $x_0$",
            "Montrer que $f$ est continue en $x_0$",
            "Calculer $f'(x)$ en un autre point"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par la contraposée de la propriété, l’absence de continuité en $x_0$ interdit la dérivabilité en $x_0$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l06_derivation_p04",
      "order": 4,
      "title": "Fonction dérivée et dérivées de fonctions de référence",
      "summary": "Définir la fonction dérivée sur un intervalle et connaître les dérivées des fonctions de référence.",
      "conceptExplanation": "Définitions : on dit qu’une fonction $f$ est dérivable sur un intervalle ouvert $K$ lorsqu’elle est dérivable en chaque élément de $K$. L’application qui, à chaque élément $x$ de $K$, associe le nombre dérivé de $f$ en $x$ est appelée fonction dérivée de $f$ sur $K$ et notée $f'$. L’ensemble des nombres réels en lesquels $f$ est dérivable est son ensemble de dérivabilité.\nExemple : pour $g(x) = x^3$, le taux en un réel $x_0$ se simplifie et tend vers trois fois le carré de $x_0$ ; la fonction dérivée de $g$ est donc la fonction qui à $x$ associe $3x^2$.\nTableau des dérivées de référence : la dérivée d’une constante est nulle ; celle de $x$ est $1$ ; celle de $ax + b$ est $a$ ; celle de $x^n$ ($n$ entier naturel non nul) est $n$ fois $x$ à la puissance $n - 1$ ; celle de la racine carrée est l’inverse de deux fois la racine carrée de $x$, sur $]0 ; +\\infty[$ ; celle de l’inverse de $x$ est l’opposé de l’inverse de $x^2$, sur $\\mathbb{R}^*$ ; celle du sinus est le cosinus et celle du cosinus est l’opposé du sinus, sur $\\mathbb{R}$ ; celle de la tangente est $1$ plus le carré de la tangente.",
      "keyRule": "La fonction dérivée collecte tous les nombres dérivés : retiens le tableau de référence et l’ensemble de dérivabilité de chaque fonction.",
      "formulas": [
        {
          "name": "Dérivée d’une puissance",
          "formula": "(x^n)' = n x^{n - 1}",
          "note": "Pour $n$ entier naturel non nul, sur $\\mathbb{R}$."
        },
        {
          "name": "Dérivée de la racine carrée",
          "formula": "(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}",
          "note": "Sur $]0 ; +\\infty[$."
        },
        {
          "name": "Dérivées trigonométriques",
          "formula": "(\\sin x)' = \\cos x \\quad ; \\quad (\\cos x)' = -\\sin x"
        }
      ],
      "workedExample": {
        "title": "Relier chaque fonction à sa dérivée (exercice de fixation)",
        "statement": "Relie chaque fonction à sa fonction dérivée : la constante $-3$, la fonction $-3x$, la fonction $x^4$, le cosinus, l’inverse de $x$ et le sinus.",
        "methodSteps": [
          "La constante $-3$ a pour dérivée la fonction nulle.",
          "La fonction $-3x$ a pour dérivée la constante $-3$, et $x^4$ a pour dérivée $4x^3$.",
          "Le cosinus a pour dérivée l’opposé du sinus, et le sinus a pour dérivée le cosinus.",
          "L’inverse de $x$ a pour dérivée l’opposé de l’inverse de $x^2$."
        ],
        "conclusion": "Chaque fonction de référence a sa dérivée propre dans le tableau de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fonction dérivée",
          "stepTheme": "La fonction dérivée",
          "stepBadge": "La fonction dérivée",
          "paragraphText": "• Définition : la fonction dérivée de $f$ sur un intervalle ouvert $K$ est l’application qui, à chaque élément $x$ de $K$, associe le nombre dérivé de $f$ en $x$.\nElle est notée $f'$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p04_q1",
            "type": "mcq",
            "prompt": "La fonction dérivée $f'$ associe à chaque $x$ d’un intervalle où $f$ est dérivable :",
            "options": [
              "La valeur $f(x)$",
              "Le nombre dérivé de $f$ en $x$",
              "La tangente à la courbe",
              "L’image de $x$ par la courbe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $f'$ envoie $x$ sur $f'(x)$, le nombre dérivé de $f$ en $x$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La dérivée du cube par la définition",
          "stepTheme": "La dérivée du cube par la définition",
          "stepBadge": "La dérivée du cube par la définition",
          "paragraphText": "• Exemple de la leçon : pour $g(x) = x^3$, le taux en $x_0$ se factorise et tend vers trois fois le carré de $x_0$.\nDonc $g'(x_0)$ vaut cette limite, pour tout réel $x_0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p04_q2",
            "type": "mcq",
            "prompt": "Pour $g(x) = x^3$, que vaut $g'(x_0)$ pour un réel $x_0$ quelconque ?",
            "options": [
              "$x_0^3$",
              "$3x_0$",
              "$3x_0^2$",
              "$x_0^2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La limite du taux est trois fois le carré de $x_0$ : la fonction dérivée de $g$ est $x \\mapsto 3x^2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La dérivée d’une puissance",
          "stepTheme": "La dérivée d’une puissance",
          "stepBadge": "La dérivée d’une puissance",
          "paragraphText": "• Tableau de référence : la fonction $x \\mapsto x^n$, pour $n$ entier naturel non nul, a pour dérivée la fonction $x \\mapsto n x^{n - 1}$, sur $\\mathbb{R}$.\nPour $n = 4$, on obtient la dérivée de $x^4$ utilisée dans l’exercice de fixation.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p04_q3",
            "type": "mcq",
            "prompt": "Quelle est la fonction dérivée de $x \\mapsto x^4$ ?",
            "options": [
              "$4x^3$",
              "$x^3$",
              "$4x^4$",
              "$3x^4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On applique la formule avec $n = 4$ : $4 \\times x^{4 - 1} = 4x^3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La dérivée de la racine carrée",
          "stepTheme": "La dérivée de la racine carrée",
          "stepBadge": "La dérivée de la racine carrée",
          "paragraphText": "• Tableau de référence : la fonction racine carrée a pour dérivée la fonction qui à $x$ associe l’inverse de deux fois $\\sqrt{x}$.\nSon ensemble de dérivabilité est $]0 ; +\\infty[$, et non $\\mathbb{R}$ entier.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p04_q4",
            "type": "mcq",
            "prompt": "Sur quel ensemble la fonction racine carrée est-elle dérivable ?",
            "options": [
              "$\\mathbb{R}$",
              "$\\mathbb{R}^*$",
              "$[0 ; +\\infty[$",
              "$]0 ; +\\infty[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le tableau donne l’ensemble de dérivabilité $]0 ; +\\infty[$ pour la racine carrée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les dérivées du sinus et du cosinus",
          "stepTheme": "Les dérivées du sinus et du cosinus",
          "stepBadge": "Les dérivées du sinus et du cosinus",
          "paragraphText": "• Tableau de référence : le sinus a pour dérivée le cosinus, et le cosinus a pour dérivée l’opposé du sinus, sur $\\mathbb{R}$.\nL’exercice de fixation relie ainsi le cosinus à l’opposé du sinus.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p04_q5",
            "type": "mcq",
            "prompt": "Quelle est la fonction dérivée du cosinus ?",
            "options": [
              "Le sinus",
              "L’opposé du sinus",
              "Le cosinus",
              "L’opposé du cosinus"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau de référence donne : la dérivée de $\\cos x$ est $-\\sin x$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L’ensemble de dérivabilité compte autant que la formule",
          "stepTheme": "L’ensemble de dérivabilité compte autant que la formule",
          "stepBadge": "L’ensemble de dérivabilité compte autant que la formule",
          "paragraphText": "• Piège : la fonction inverse de $x$ a pour dérivée l’opposé de l’inverse de $x^2$, mais seulement sur $\\mathbb{R}^*$.\nEn $0$, la fonction inverse n’est même pas définie : elle n’y est donc pas dérivable.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p04_q6",
            "type": "mcq",
            "prompt": "La fonction $x \\mapsto \\frac{1}{x}$ est-elle dérivable en $0$ ?",
            "options": [
              "Oui, sa dérivée y vaut $0$",
              "Oui, sa dérivée y vaut $1$",
              "Non, elle n’est pas définie en $0$",
              "Oui, car elle est dérivable sur $\\mathbb{R}^*$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’ensemble de dérivabilité du tableau est $\\mathbb{R}^*$ : le point $0$ en est exclu."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p04_q1",
          "type": "mcq",
          "prompt": "La fonction dérivée $f'$ associe à chaque $x$ d’un intervalle où $f$ est dérivable :",
          "options": [
            "La valeur $f(x)$",
            "Le nombre dérivé de $f$ en $x$",
            "La tangente à la courbe",
            "L’image de $x$ par la courbe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $f'$ envoie $x$ sur $f'(x)$, le nombre dérivé de $f$ en $x$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p04_q2",
          "type": "mcq",
          "prompt": "Pour $g(x) = x^3$, que vaut $g'(x_0)$ pour un réel $x_0$ quelconque ?",
          "options": [
            "$x_0^3$",
            "$3x_0$",
            "$3x_0^2$",
            "$x_0^2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La limite du taux est trois fois le carré de $x_0$ : la fonction dérivée de $g$ est $x \\mapsto 3x^2$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p04_q3",
          "type": "mcq",
          "prompt": "Quelle est la fonction dérivée de $x \\mapsto x^4$ ?",
          "options": [
            "$4x^3$",
            "$x^3$",
            "$4x^4$",
            "$3x^4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On applique la formule avec $n = 4$ : $4 \\times x^{4 - 1} = 4x^3$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p04_q4",
          "type": "mcq",
          "prompt": "Sur quel ensemble la fonction racine carrée est-elle dérivable ?",
          "options": [
            "$\\mathbb{R}$",
            "$\\mathbb{R}^*$",
            "$[0 ; +\\infty[$",
            "$]0 ; +\\infty[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le tableau donne l’ensemble de dérivabilité $]0 ; +\\infty[$ pour la racine carrée."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p04_q5",
          "type": "mcq",
          "prompt": "Quelle est la fonction dérivée du cosinus ?",
          "options": [
            "Le sinus",
            "L’opposé du sinus",
            "Le cosinus",
            "L’opposé du cosinus"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau de référence donne : la dérivée de $\\cos x$ est $-\\sin x$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p04_q6",
          "type": "mcq",
          "prompt": "La fonction $x \\mapsto \\frac{1}{x}$ est-elle dérivable en $0$ ?",
          "options": [
            "Oui, sa dérivée y vaut $0$",
            "Oui, sa dérivée y vaut $1$",
            "Non, elle n’est pas définie en $0$",
            "Oui, car elle est dérivable sur $\\mathbb{R}^*$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’ensemble de dérivabilité du tableau est $\\mathbb{R}^*$ : le point $0$ en est exclu."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l06_derivation_p05",
      "order": 5,
      "title": "Dérivées et opérations",
      "summary": "Dériver une somme, un produit, un quotient, un multiple et des fonctions composées simples.",
      "conceptExplanation": "Propriété : on suppose que $u$ et $v$ sont deux fonctions dérivables sur un intervalle ouvert $K$.\nLa dérivée d’une somme $u + v$ est la somme des dérivées ; la dérivée d’un produit $uv$ est $u'v + uv'$ ; la dérivée d’un multiple $au$ (avec $a$ réel) est $a$ fois $u'$ ; la dérivée de l’inverse de $u$, quand $u$ ne s’annule pas sur $K$, est l’opposé de $u'$ divisé par le carré de $u$ ; la dérivée du quotient de $u$ par $v$, quand $v$ ne s’annule pas sur $K$, est le quotient de $u'v - uv'$ par le carré de $v$.\nComposées usuelles du tableau : la dérivée de $x \\mapsto \\cos(ax + b)$ est $x \\mapsto -a \\sin(ax + b)$, celle de $x \\mapsto \\sin(ax + b)$ est $x \\mapsto a \\cos(ax + b)$, et celle de $x \\mapsto \\sqrt{ax + b}$ est $x \\mapsto \\frac{a}{2\\sqrt{ax + b}}$.\nExercice de fixation : ces règles donnent les dérivées de $x^3 + \\frac{1}{x} + \\cos x$, du quotient de $x^2$ par $x + 5$ et de $\\sqrt{3x + 6}$.",
      "keyRule": "Produit et quotient ont leurs formules propres : $(uv)' = u'v + uv'$ et le quotient retranche les termes au numérateur, jamais l’inverse.",
      "formulas": [
        {
          "name": "Dérivée d’un produit",
          "formula": "(uv)' = u'v + uv'"
        },
        {
          "name": "Dérivée d’un quotient",
          "formula": "\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}",
          "note": "Si $v$ ne s’annule pas sur $K$."
        },
        {
          "name": "Dérivée de l’inverse d’une fonction",
          "formula": "\\left(\\frac{1}{u}\\right)' = \\frac{-u'}{u^2}",
          "note": "Si $u$ ne s’annule pas sur $K$."
        }
      ],
      "workedExample": {
        "title": "Trois dérivées par les opérations (exercice de fixation)",
        "statement": "Détermine la fonction dérivée de chacune des fonctions suivantes : $f(x) = x^3 + \\frac{1}{x} + \\cos(x)$, le quotient $g(x)$ de $x^2$ par $x + 5$, et $h(x) = \\sqrt{3x + 6}$.",
        "methodSteps": [
          "$f$ est dérivable sur $\\mathbb{R}^*$ et $f'(x) = 3x^2 - \\frac{1}{x^2} - \\sin(x)$, par somme des dérivées de référence.",
          "$g$ est dérivable sur $\\mathbb{R}$ privé de $-5$ et la règle du quotient donne $g'(x)$ égal au quotient de $x^2 + 10x$ par le carré de $x + 5$.",
          "$h$ est dérivable sur $]-2 ; +\\infty[$ et $h'(x)$ est le quotient de $3$ par deux fois $\\sqrt{3x + 6}$."
        ],
        "conclusion": "Chaque fonction se dérive en choisissant la règle adaptée : somme, quotient ou composée avec une racine carrée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dérivée d’une somme et d’un multiple",
          "stepTheme": "La dérivée d’une somme et d’un multiple",
          "stepBadge": "La dérivée d’une somme et d’un multiple",
          "paragraphText": "• Propriété : la dérivée de $u + v$ est $u' + v'$ et celle de $au$ est $a$ fois $u'$.\nC’est ce qui permet de dériver terme à terme la fonction de l’exercice de fixation.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p05_q1",
            "type": "mcq",
            "prompt": "La dérivée de la fonction $u + v$ est :",
            "options": [
              "$u' + v'$",
              "$u'v'$",
              "$uv'$ seulement",
              "$u' - v'$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée d’une somme est la somme des dérivées."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La dérivée d’un produit",
          "stepTheme": "La dérivée d’un produit",
          "stepBadge": "La dérivée d’un produit",
          "paragraphText": "• Propriété : la dérivée du produit $uv$ est $u'v + uv'$.\nChaque facteur est dérivé à tour de rôle, l’autre restant inchangé.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p05_q2",
            "type": "mcq",
            "prompt": "La dérivée du produit $uv$ est :",
            "options": [
              "$u'v'$",
              "$u'v + uv'$",
              "$u'v - uv'$",
              "$uv$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la formule du tableau des opérations : $(uv)' = u'v + uv'$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La dérivée d’un quotient",
          "stepTheme": "La dérivée d’un quotient",
          "stepBadge": "La dérivée d’un quotient",
          "paragraphText": "• Propriété : la dérivée du quotient de $u$ par $v$ est le quotient de $u'v - uv'$ par le carré de $v$, si $v$ ne s’annule pas.\nPour le quotient de $x^2$ par $x + 5$, le numérateur obtenu est $x^2 + 10x$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p05_q3",
            "type": "mcq",
            "prompt": "Pour $g(x)$ quotient de $x^2$ par $x + 5$, $g'(x)$ est le quotient de :",
            "options": [
              "$2x$ par $x + 5$",
              "$x^2$ par le carré de $x + 5$",
              "$x^2 + 10x$ par le carré de $x + 5$",
              "$10x$ par $x + 5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé calcule $2x(x + 5) - x^2 = x^2 + 10x$, divisé par le carré de $x + 5$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La dérivée d’une racine composée",
          "stepTheme": "La dérivée d’une racine composée",
          "stepBadge": "La dérivée d’une racine composée",
          "paragraphText": "• Tableau des opérations : la dérivée de $x \\mapsto \\sqrt{ax + b}$ est $x \\mapsto \\frac{a}{2\\sqrt{ax + b}}$.\nPour $h(x) = \\sqrt{3x + 6}$, le coefficient $a$ vaut $3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p05_q4",
            "type": "mcq",
            "prompt": "Que vaut $h'(x)$ pour $h(x) = \\sqrt{3x + 6}$ ?",
            "options": [
              "Le quotient de $1$ par deux fois $\\sqrt{3x + 6}$",
              "Le quotient de $3$ par $\\sqrt{3x + 6}$",
              "$\\sqrt{3}$",
              "Le quotient de $3$ par deux fois $\\sqrt{3x + 6}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On applique la formule avec $a = 3$ : $h'(x)$ est le quotient de $3$ par deux fois la racine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La dérivée complète de l’exercice de fixation",
          "stepTheme": "La dérivée complète de l’exercice de fixation",
          "stepBadge": "La dérivée complète de l’exercice de fixation",
          "paragraphText": "• Corrigé : $f$ est dérivable sur $\\mathbb{R}^*$ et, pour tout $x$ de cet ensemble, $f'(x) = 3x^2 - \\frac{1}{x^2} - \\sin(x)$.\nOn y reconnaît les dérivées de $x^3$, de l’inverse de $x$ et du cosinus.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p05_q5",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^3 + \\frac{1}{x} + \\cos(x)$, $f'(x)$ vaut :",
            "options": [
              "$3x^2 - \\frac{1}{x^2} - \\sin(x)$",
              "$3x^2 + \\frac{1}{x^2} + \\sin(x)$",
              "$3x^2 - \\frac{1}{x^2} + \\sin(x)$",
              "$x^2 - \\frac{1}{x} - \\sin(x)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Terme à terme : $3x^2$ pour le cube, moins l’inverse de $x^2$ pour l’inverse, moins le sinus pour le cosinus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La dérivée de l’inverse d’une fonction garde le $u'$",
          "stepTheme": "La dérivée de l’inverse d’une fonction garde le $u'$",
          "stepBadge": "La dérivée de l’inverse d’une fonction garde le $u'$",
          "paragraphText": "• Exercice 5 de la leçon : l’affirmation donnant la dérivée de l’inverse de $v$ comme l’opposé de l’inverse du carré de $v$ est fausse.\nLa formule correcte fait intervenir $v'$ au numérateur : c’est l’opposé de $v'$ divisé par le carré de $v$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p05_q6",
            "type": "mcq",
            "prompt": "Si $v$ est dérivable et ne s’annule pas sur $K$, la dérivée de l’inverse de $v$ est :",
            "options": [
              "L’opposé de l’inverse du carré de $v$",
              "L’opposé de $v'$ divisé par le carré de $v$",
              "$v'$ divisé par le carré de $v$",
              "L’inverse de $v'$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le numérateur contient $v'$ avec un signe moins : sans $v'$, la formule est fausse, comme le signale l’exercice 5."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p05_q1",
          "type": "mcq",
          "prompt": "La dérivée de la fonction $u + v$ est :",
          "options": [
            "$u' + v'$",
            "$u'v'$",
            "$uv'$ seulement",
            "$u' - v'$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée d’une somme est la somme des dérivées."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p05_q2",
          "type": "mcq",
          "prompt": "La dérivée du produit $uv$ est :",
          "options": [
            "$u'v'$",
            "$u'v + uv'$",
            "$u'v - uv'$",
            "$uv$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la formule du tableau des opérations : $(uv)' = u'v + uv'$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p05_q3",
          "type": "mcq",
          "prompt": "Pour $g(x)$ quotient de $x^2$ par $x + 5$, $g'(x)$ est le quotient de :",
          "options": [
            "$2x$ par $x + 5$",
            "$x^2$ par le carré de $x + 5$",
            "$x^2 + 10x$ par le carré de $x + 5$",
            "$10x$ par $x + 5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé calcule $2x(x + 5) - x^2 = x^2 + 10x$, divisé par le carré de $x + 5$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p05_q4",
          "type": "mcq",
          "prompt": "Que vaut $h'(x)$ pour $h(x) = \\sqrt{3x + 6}$ ?",
          "options": [
            "Le quotient de $1$ par deux fois $\\sqrt{3x + 6}$",
            "Le quotient de $3$ par $\\sqrt{3x + 6}$",
            "$\\sqrt{3}$",
            "Le quotient de $3$ par deux fois $\\sqrt{3x + 6}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On applique la formule avec $a = 3$ : $h'(x)$ est le quotient de $3$ par deux fois la racine."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p05_q5",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^3 + \\frac{1}{x} + \\cos(x)$, $f'(x)$ vaut :",
          "options": [
            "$3x^2 - \\frac{1}{x^2} - \\sin(x)$",
            "$3x^2 + \\frac{1}{x^2} + \\sin(x)$",
            "$3x^2 - \\frac{1}{x^2} + \\sin(x)$",
            "$x^2 - \\frac{1}{x} - \\sin(x)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Terme à terme : $3x^2$ pour le cube, moins l’inverse de $x^2$ pour l’inverse, moins le sinus pour le cosinus."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p05_q6",
          "type": "mcq",
          "prompt": "Si $v$ est dérivable et ne s’annule pas sur $K$, la dérivée de l’inverse de $v$ est :",
          "options": [
            "L’opposé de l’inverse du carré de $v$",
            "L’opposé de $v'$ divisé par le carré de $v$",
            "$v'$ divisé par le carré de $v$",
            "L’inverse de $v'$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le numérateur contient $v'$ avec un signe moins : sans $v'$, la formule est fausse, comme le signale l’exercice 5."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l06_derivation_p06",
      "order": 6,
      "title": "Dérivée et sens de variation",
      "summary": "Déduire le sens de variation d’une fonction du signe de sa dérivée et dresser un tableau de variation.",
      "conceptExplanation": "Propriété 1 : soit $f$ une fonction dérivable sur un intervalle ouvert $K$. $f$ est croissante sur $K$ si et seulement si $f'$ est positive sur $K$ ; $f$ est décroissante sur $K$ si et seulement si $f'$ est négative sur $K$ ; $f$ est constante sur $K$ si et seulement si $f'$ est nulle sur $K$.\nPropriété 2 : $f$ est strictement croissante sur $K$ si et seulement si $f'$ est strictement positive sur $K$, et strictement décroissante sur $K$ si et seulement si $f'$ est strictement négative sur $K$.\nRemarques : si $f'$ est positive sur $K$ et ne s’annule qu’en un nombre fini d’éléments de $K$, alors $f$ est strictement croissante sur $K$ ; de même en négatif pour la stricte décroissance.\nExemple : pour $f(x) = x^3 - 3x$, la dérivée est $3x^2 - 3$, qui s’annule en $-1$ et en $1$, est négative entre ces deux valeurs et positive à l’extérieur ; $f$ est donc strictement décroissante sur $]-1 ; 1[$ et strictement croissante sur $]-\\infty ; -1[$ et sur $]1 ; +\\infty[$.",
      "keyRule": "Le signe de $f'$ commande les variations de $f$ : positif, ça monte ; négatif, ça descend ; nul partout, c’est constant.",
      "formulas": [
        {
          "name": "Critère de monotonie",
          "formula": "f' \\geq 0 \\text{ sur } K \\iff f \\text{ croissante sur } K"
        }
      ],
      "workedExample": {
        "title": "Les variations de $x^3 - 3x$ (exercice de fixation)",
        "statement": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^3 - 3x$. Détermine $f'(x)$ pour tout réel $x$, puis les sens de variation de $f$.",
        "methodSteps": [
          "$f$ est dérivable sur $\\mathbb{R}$ et $f'(x) = 3x^2 - 3 = 3(x + 1)(x - 1)$.",
          "$f'(x) = 0$ équivaut à $x = 1$ ou $x = -1$.",
          "Sur $]-1 ; 1[$, $f'(x)$ est négatif ; sur $]-\\infty ; -1[$ et sur $]1 ; +\\infty[$, $f'(x)$ est positif."
        ],
        "conclusion": "$f$ est strictement décroissante sur $]-1 ; 1[$ et strictement croissante sur $]-\\infty ; -1[$ et sur $]1 ; +\\infty[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le signe de la dérivée et les variations",
          "stepTheme": "Le signe de la dérivée et les variations",
          "stepBadge": "Le signe de la dérivée et les variations",
          "paragraphText": "• Propriété 1 : $f$ est croissante sur $K$ si et seulement si $f'$ est positive sur $K$, et décroissante sur $K$ si et seulement si $f'$ est négative sur $K$.\nSi $f'$ est nulle sur $K$, alors $f$ est constante sur $K$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p06_q1",
            "type": "mcq",
            "prompt": "Si $f'$ est positive sur l’intervalle $K$, alors $f$ est :",
            "options": [
              "Décroissante sur $K$",
              "Constante sur $K$",
              "Croissante sur $K$",
              "Positive sur $K$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la propriété 1 : le signe positif de la dérivée donne la croissance de la fonction."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La stricte monotonie",
          "stepTheme": "La stricte monotonie",
          "stepBadge": "La stricte monotonie",
          "paragraphText": "• Propriété 2 : $f$ est strictement croissante sur $K$ si et seulement si $f'$ est strictement positive sur $K$.\nDe même, la stricte décroissance correspond à une dérivée strictement négative.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p06_q2",
            "type": "mcq",
            "prompt": "Si $f'$ est strictement négative sur $K$, alors $f$ est :",
            "options": [
              "Strictement croissante sur $K$",
              "Strictement décroissante sur $K$",
              "Constante sur $K$",
              "D’abord croissante puis décroissante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la propriété 2 appliquée au signe strictement négatif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La dérivée de $x^3 - 3x$",
          "stepTheme": "La dérivée de $x^3 - 3x$",
          "stepBadge": "La dérivée de $x^3 - 3x$",
          "paragraphText": "• Exercice de fixation : $f$ est dérivable sur $\\mathbb{R}$ et sa dérivée se factorise.\nCette factorisation permet d’étudier le signe de $f'(x)$ sur chaque intervalle.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p06_q3",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^3 - 3x$, $f'(x)$ vaut :",
            "options": [
              "$x^2 - 3$",
              "$3x^2 + 3$",
              "$3x^2 - 3 = 3(x + 1)(x - 1)$",
              "$x^3 - 3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On dérive terme à terme : $3x^2 - 3$, qui se factorise en $3(x + 1)(x - 1)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L’intervalle de décroissance de $x^3 - 3x$",
          "stepTheme": "L’intervalle de décroissance de $x^3 - 3x$",
          "stepBadge": "L’intervalle de décroissance de $x^3 - 3x$",
          "paragraphText": "• Étude de signe du corrigé : $f'(x)$ s’annule en $-1$ et en $1$ et est négatif entre ces deux valeurs.\nPar la propriété 1, c’est là que la fonction décroît, strictement.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p06_q4",
            "type": "mcq",
            "prompt": "Sur quel intervalle la fonction $f(x) = x^3 - 3x$ est-elle strictement décroissante ?",
            "options": [
              "$]-\\infty ; -1[$",
              "$]1 ; +\\infty[$",
              "$\\mathbb{R}$ tout entier",
              "$]-1 ; 1[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La dérivée y est strictement négative : $f$ est strictement décroissante sur $]-1 ; 1[$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les variations de la fonction de l’exercice 7",
          "stepTheme": "Les variations de la fonction de l’exercice 7",
          "stepBadge": "Les variations de la fonction de l’exercice 7",
          "paragraphText": "• Exercice 7 : pour la fonction $h$ définie par un tiers de $x^3$, moins $x^2$, moins $3x$, plus $2$, la dérivée est le produit de $x + 1$ par $x - 3$.\nElle est positive à l’extérieur des racines $-1$ et $3$, et négative entre elles.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p06_q5",
            "type": "mcq",
            "prompt": "Pour cette fonction $h$, les intervalles de stricte croissance sont :",
            "options": [
              "$]-\\infty ; -1[$ et $]3 ; +\\infty[$",
              "$]-1 ; 3[$ seulement",
              "$]3 ; +\\infty[$ seulement",
              "Aucun, $h$ est décroissante partout"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée est positive sur $]-\\infty ; -1[$ et sur $]3 ; +\\infty[$ : $h$ y est strictement croissante."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une fonction positive n’est pas forcément croissante",
          "stepTheme": "Une fonction positive n’est pas forcément croissante",
          "stepBadge": "Une fonction positive n’est pas forcément croissante",
          "paragraphText": "• Exercice 5 de la leçon : l’affirmation « si la fonction $f$ est positive sur un intervalle $K$, alors $f$ est croissante sur $K$ » est fausse.\nC’est le signe de la dérivée, et non celui de la fonction, qui décide des variations.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p06_q6",
            "type": "mcq",
            "prompt": "L’affirmation « si $f$ est positive sur $K$, alors $f$ est croissante sur $K$ » est :",
            "options": [
              "Vraie",
              "Fausse, ce sont les variations que donne le signe de $f'$",
              "Vraie si $K$ est borné",
              "Non traitée dans la leçon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé de l’exercice 5 répond Faux : la positivité de $f$ ne dit rien de ses variations."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p06_q1",
          "type": "mcq",
          "prompt": "Si $f'$ est positive sur l’intervalle $K$, alors $f$ est :",
          "options": [
            "Décroissante sur $K$",
            "Constante sur $K$",
            "Croissante sur $K$",
            "Positive sur $K$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la propriété 1 : le signe positif de la dérivée donne la croissance de la fonction."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p06_q2",
          "type": "mcq",
          "prompt": "Si $f'$ est strictement négative sur $K$, alors $f$ est :",
          "options": [
            "Strictement croissante sur $K$",
            "Strictement décroissante sur $K$",
            "Constante sur $K$",
            "D’abord croissante puis décroissante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la propriété 2 appliquée au signe strictement négatif."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p06_q3",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^3 - 3x$, $f'(x)$ vaut :",
          "options": [
            "$x^2 - 3$",
            "$3x^2 + 3$",
            "$3x^2 - 3 = 3(x + 1)(x - 1)$",
            "$x^3 - 3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On dérive terme à terme : $3x^2 - 3$, qui se factorise en $3(x + 1)(x - 1)$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p06_q4",
          "type": "mcq",
          "prompt": "Sur quel intervalle la fonction $f(x) = x^3 - 3x$ est-elle strictement décroissante ?",
          "options": [
            "$]-\\infty ; -1[$",
            "$]1 ; +\\infty[$",
            "$\\mathbb{R}$ tout entier",
            "$]-1 ; 1[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La dérivée y est strictement négative : $f$ est strictement décroissante sur $]-1 ; 1[$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p06_q5",
          "type": "mcq",
          "prompt": "Pour cette fonction $h$, les intervalles de stricte croissance sont :",
          "options": [
            "$]-\\infty ; -1[$ et $]3 ; +\\infty[$",
            "$]-1 ; 3[$ seulement",
            "$]3 ; +\\infty[$ seulement",
            "Aucun, $h$ est décroissante partout"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée est positive sur $]-\\infty ; -1[$ et sur $]3 ; +\\infty[$ : $h$ y est strictement croissante."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p06_q6",
          "type": "mcq",
          "prompt": "L’affirmation « si $f$ est positive sur $K$, alors $f$ est croissante sur $K$ » est :",
          "options": [
            "Vraie",
            "Fausse, ce sont les variations que donne le signe de $f'$",
            "Vraie si $K$ est borné",
            "Non traitée dans la leçon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé de l’exercice 5 répond Faux : la positivité de $f$ ne dit rien de ses variations."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l06_derivation_p07",
      "order": 7,
      "title": "Extremums relatifs et optimisation",
      "summary": "Reconnaître un extremum relatif par le changement de signe de la dérivée et résoudre un problème d’optimisation.",
      "conceptExplanation": "Propriété : soit $f$ une fonction dérivable sur un intervalle ouvert $K$ et $x_0$ un élément de $K$. Si $f'$ s’annule et change de signe en $x_0$, alors $f(x_0)$ est un extremum relatif de la fonction $f$.\nSi la dérivée passe du positif au négatif en $x_0$, alors $f(x_0)$ est un maximum relatif ; si elle passe du négatif au positif en $x_0$, alors $f(x_0)$ est un minimum relatif.\nExemple de l’exercice de fixation : pour la fonction $g$ définie par le quotient de $x^3$ par $x - 1$, la dérivée s’annule en trois demis en changeant de signe, du négatif au positif ; la fonction admet donc en trois demis un minimum relatif égal à vingt-sept quarts.\nApplication : dans la situation d’apprentissage reprise en exercice d’approfondissement, l’aire du rectangle $BPMQ$ inscrit dans le triangle $ABC$ rectangle en $B$, avec $AB = 8$, $BC = 6$ et $MC = x$, est une fonction de $x$ dont l’étude de la dérivée donne le maximum.",
      "keyRule": "Un extremum relatif se repère là où la dérivée s’annule en changeant de signe : plus puis moins, maximum ; moins puis plus, minimum.",
      "formulas": [
        {
          "name": "Aire du rectangle BPMQ",
          "formula": "f(x) = \\frac{12}{5} x \\left(2 - \\frac{x}{5}\\right)",
          "note": "Sur $]0 ; 10[$, avec $MC = x$."
        }
      ],
      "workedExample": {
        "title": "L’aire maximale du rectangle BPMQ (exercice 9)",
        "statement": "Dans le triangle $ABC$ rectangle en $B$, avec $AB = 8$, $BC = 6$ et $AC = 10$, on construit le rectangle $BPMQ$ avec $M$ sur le segment d’extrémités $A$ et $C$, et on pose $MC = x$. Détermine la valeur de $x$ pour laquelle l’aire du rectangle est maximale, et cette aire.",
        "methodSteps": [
          "Par la propriété de Thalès dans le triangle $ABC$, on obtient $MQ$ égal à $6$ moins trois cinquièmes de $x$, et le triangle $CMP$ rectangle en $P$ donne $MP$ égal à quatre cinquièmes de $x$.",
          "L’aire est le produit de $MP$ par $MQ$ : c’est la fonction $f$ donnée par douze cinquièmes de $x$, multiplié par la différence de $2$ et d’un cinquième de $x$, sur $]0 ; 10[$.",
          "Sa dérivée est proportionnelle à $5 - x$ : positive sur $]0 ; 5[$ et négative sur $]5 ; 10[$, elle s’annule en $5$ en changeant de signe.",
          "La fonction $f$ est donc strictement croissante puis strictement décroissante, et son maximum est atteint en $5$."
        ],
        "conclusion": "L’aire du rectangle est maximale pour $x = 5$ et elle vaut alors $12$ centimètres carrés."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La condition d’un extremum relatif",
          "stepTheme": "La condition d’un extremum relatif",
          "stepBadge": "La condition d’un extremum relatif",
          "paragraphText": "• Propriété : si $f'$ s’annule et change de signe en $x_0$, alors $f(x_0)$ est un extremum relatif de $f$.\nLes deux conditions comptent : annulation et changement de signe.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p07_q1",
            "type": "mcq",
            "prompt": "Pour que $f(x_0)$ soit un extremum relatif, il faut que $f'$ :",
            "options": [
              "Soit positive en $x_0$",
              "S’annule et change de signe en $x_0$",
              "Soit constante autour de $x_0$",
              "Ne s’annule jamais"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la propriété des extremums relatifs énoncée dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Reconnaître un maximum relatif",
          "stepTheme": "Reconnaître un maximum relatif",
          "stepBadge": "Reconnaître un maximum relatif",
          "paragraphText": "• Tableau de la propriété : si la dérivée est positive avant $x_0$, nulle en $x_0$ et négative après, la fonction monte puis descend.\nLa valeur $f(x_0)$ est alors un maximum relatif.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p07_q2",
            "type": "mcq",
            "prompt": "Si $f'$ passe du signe plus au signe moins en $x_0$ en s’annulant, alors $f(x_0)$ est :",
            "options": [
              "Un minimum relatif",
              "Ni un maximum ni un minimum",
              "Un maximum relatif",
              "La valeur de la dérivée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Monter puis descendre donne un maximum relatif en $x_0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Reconnaître un minimum relatif",
          "stepTheme": "Reconnaître un minimum relatif",
          "stepBadge": "Reconnaître un minimum relatif",
          "paragraphText": "• Tableau de la propriété : si la dérivée est négative avant $x_0$, nulle en $x_0$ et positive après, la fonction descend puis monte.\nLa valeur $f(x_0)$ est alors un minimum relatif.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p07_q3",
            "type": "mcq",
            "prompt": "Si $f'$ passe du signe moins au signe plus en $x_0$ en s’annulant, alors $f(x_0)$ est :",
            "options": [
              "Un maximum relatif",
              "Un minimum relatif",
              "Toujours nul",
              "La pente de la tangente"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Descendre puis monter donne un minimum relatif en $x_0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le minimum lu sur le tableau de variation",
          "stepTheme": "Le minimum lu sur le tableau de variation",
          "stepBadge": "Le minimum lu sur le tableau de variation",
          "paragraphText": "• Exercice de fixation : dans le tableau de variation de la fonction $g$, quotient de $x^3$ par $x - 1$, la dérivée s’annule en trois demis en changeant de signe, du négatif au positif.\nLa valeur correspondante de $g$ est vingt-sept quarts.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p07_q4",
            "type": "mcq",
            "prompt": "Quel extremum la fonction $g$ admet-elle d’après son tableau ?",
            "options": [
              "Un maximum relatif égal à vingt-sept quarts",
              "Aucun extremum relatif",
              "Un minimum relatif égal à trois demis",
              "Un minimum relatif égal à vingt-sept quarts, atteint en trois demis"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La dérivée change de signe en trois demis, de moins à plus : c’est un minimum relatif, de valeur vingt-sept quarts."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les extremums de la fonction de l’exercice 7",
          "stepTheme": "Les extremums de la fonction de l’exercice 7",
          "stepBadge": "Les extremums de la fonction de l’exercice 7",
          "paragraphText": "• Exercice 7 : la fonction $h$ a pour dérivée le produit de $x + 1$ par $x - 3$ ; elle croît, puis décroît, puis croît.\nSon maximum relatif est atteint en $-1$ et son minimum relatif en $3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p07_q5",
            "type": "mcq",
            "prompt": "Que vaut le maximum relatif de la fonction $h$ de l’exercice 7 ?",
            "options": [
              "Onze tiers, atteint en $-1$",
              "Moins sept, atteint en $3$",
              "Deux, atteint en $0$",
              "Onze tiers, atteint en $3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le tableau de variation donne un maximum relatif de onze tiers en $-1$, et un minimum relatif de moins sept en $3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’optimisation du rectangle inscrit",
          "stepTheme": "L’optimisation du rectangle inscrit",
          "stepBadge": "L’optimisation du rectangle inscrit",
          "paragraphText": "• Exercice 9 : l’aire du rectangle $BPMQ$ est une fonction de $x = MC$ dont la dérivée s’annule en $5$ en changeant de signe.\nLa fonction croît sur $]0 ; 5[$ puis décroît sur $]5 ; 10[$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l06_derivation_p07_q6",
            "type": "mcq",
            "prompt": "Pour quelle valeur de $x$ l’aire du rectangle $BPMQ$ est-elle maximale ?",
            "options": [
              "$x = 10$",
              "$x = 2$",
              "$x = 5$",
              "$x = 12$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La dérivée change de signe en $5$, de plus à moins : le maximum de l’aire, $12$ centimètres carrés, est atteint pour $x = 5$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p07_q1",
          "type": "mcq",
          "prompt": "Pour que $f(x_0)$ soit un extremum relatif, il faut que $f'$ :",
          "options": [
            "Soit positive en $x_0$",
            "S’annule et change de signe en $x_0$",
            "Soit constante autour de $x_0$",
            "Ne s’annule jamais"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la propriété des extremums relatifs énoncée dans la leçon."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p07_q2",
          "type": "mcq",
          "prompt": "Si $f'$ passe du signe plus au signe moins en $x_0$ en s’annulant, alors $f(x_0)$ est :",
          "options": [
            "Un minimum relatif",
            "Ni un maximum ni un minimum",
            "Un maximum relatif",
            "La valeur de la dérivée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Monter puis descendre donne un maximum relatif en $x_0$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p07_q3",
          "type": "mcq",
          "prompt": "Si $f'$ passe du signe moins au signe plus en $x_0$ en s’annulant, alors $f(x_0)$ est :",
          "options": [
            "Un maximum relatif",
            "Un minimum relatif",
            "Toujours nul",
            "La pente de la tangente"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Descendre puis monter donne un minimum relatif en $x_0$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p07_q4",
          "type": "mcq",
          "prompt": "Quel extremum la fonction $g$ admet-elle d’après son tableau ?",
          "options": [
            "Un maximum relatif égal à vingt-sept quarts",
            "Aucun extremum relatif",
            "Un minimum relatif égal à trois demis",
            "Un minimum relatif égal à vingt-sept quarts, atteint en trois demis"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La dérivée change de signe en trois demis, de moins à plus : c’est un minimum relatif, de valeur vingt-sept quarts."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p07_q5",
          "type": "mcq",
          "prompt": "Que vaut le maximum relatif de la fonction $h$ de l’exercice 7 ?",
          "options": [
            "Onze tiers, atteint en $-1$",
            "Moins sept, atteint en $3$",
            "Deux, atteint en $0$",
            "Onze tiers, atteint en $3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le tableau de variation donne un maximum relatif de onze tiers en $-1$, et un minimum relatif de moins sept en $3$."
        },
        {
          "id": "premiere_d_maths_numerique_l06_derivation_p07_q6",
          "type": "mcq",
          "prompt": "Pour quelle valeur de $x$ l’aire du rectangle $BPMQ$ est-elle maximale ?",
          "options": [
            "$x = 10$",
            "$x = 2$",
            "$x = 5$",
            "$x = 12$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La dérivée change de signe en $5$, de plus à moins : le maximum de l’aire, $12$ centimètres carrés, est atteint pour $x = 5$."
        }
      ]
    }
  ]
};
