import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Équations et inéquations du second degré dans ℝ » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Équations et inéquations du second degré dans ℝ » (document PDF officiel, Mathématiques 1ère D, lot P07)
export const MATHS_1ERE_D_L01_EQUATIONS_INEQUATIONS_SECOND_DEGRE: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 1,
  "title": "Leçon 1 : Équations et inéquations du second degré dans ℝ",
  "summary": "La leçon étudie le discriminant d’un polynôme du second degré, la résolution algébrique et graphique des équations et inéquations du second degré, la somme et le produit des solutions, puis les équations bicarrées et irrationnelles qui s’y ramènent.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Équations et inéquations du second degré dans ℝ » (document PDF officiel, Mathématiques 1ère D, lot P07)",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01",
      "order": 1,
      "title": "Discriminant et zéros d’un polynôme du second degré",
      "summary": "Définir le discriminant et déterminer, selon son signe, les zéros éventuels et la factorisation du polynôme.",
      "conceptExplanation": "On considère le polynôme du second degré $P$ défini par $P(x) = ax^2 + bx + c$, où $a \\neq 0$.\nOn appelle discriminant de $P$ le nombre réel noté $\\Delta$ défini par $\\Delta = b^2 - 4ac$. Exemple : pour $P(x) = 3x^2 + 2x - 4$, on a $a = 3$, $b = 2$ et $c = -4$, donc $\\Delta = 52$.\nSi $\\Delta > 0$, $P$ admet deux zéros distincts $x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}$ et $x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$, et $P(x) = a(x - x_1)(x - x_2)$.\nSi $\\Delta = 0$, $P$ admet un zéro double $x_0 = \\frac{-b}{2a}$ et $P(x) = a(x - x_0)^2$.\nSi $\\Delta < 0$, $P$ n’admet pas de zéro et n’est pas factorisable.",
      "keyRule": "Le signe de $\\Delta$ décide de tout : deux zéros distincts, un zéro double, ou aucun zéro.",
      "formulas": [
        {
          "name": "Discriminant",
          "formula": "\\Delta = b^2 - 4ac",
          "note": "Pour $P(x) = ax^2 + bx + c$ avec $a \\neq 0$."
        }
      ],
      "workedExample": {
        "title": "Zéros et factorisation de trois polynômes (exercice de fixation)",
        "statement": "Calcule les zéros éventuels des polynômes $P(x) = -2x^2 + x - 3$, $Q(x) = x^2 - 4x + 4$ et $R(x) = 2x^2 + 3x - 5$, puis factorise chacun d’eux si possible.",
        "methodSteps": [
          "Pour $P$ : $\\Delta = -23 < 0$, donc $P$ n’admet pas de zéro et n’est pas factorisable.",
          "Pour $Q$ : $\\Delta = 0$, donc $Q$ admet un zéro double $x_0 = 2$ et $Q(x) = (x - 2)^2$.",
          "Pour $R$ : $\\Delta = 49 > 0$, donc $R$ admet deux zéros $x_1 = -\\frac{5}{2}$ et $x_2 = 1$.",
          "On factorise : $R(x) = 2\\left(x + \\frac{5}{2}\\right)(x - 1)$."
        ],
        "conclusion": "Le discriminant décide à lui seul des zéros et de la factorisation de chaque polynôme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le discriminant d’un polynôme",
          "stepTheme": "Le discriminant d’un polynôme",
          "stepBadge": "Le discriminant d’un polynôme",
          "paragraphText": "• Définition : pour le polynôme du second degré $P$ défini par $P(x) = ax^2 + bx + c$, où $a \\neq 0$, on appelle discriminant de $P$ le nombre réel $\\Delta = b^2 - 4ac$.\nExemple de la leçon : pour $P(x) = 3x^2 + 2x - 4$, on a $a = 3$, $b = 2$ et $c = -4$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q1",
            "type": "mcq",
            "prompt": "Pour $P(x) = 3x^2 + 2x - 4$, que vaut le discriminant $\\Delta$ ?",
            "options": [
              "$-52$",
              "$44$",
              "$52$",
              "$-44$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $\\Delta = 2^2 - 4 \\times 3 \\times (-4) = 4 + 48 = 52$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deux zéros distincts quand le discriminant est positif",
          "stepTheme": "Deux zéros distincts quand le discriminant est positif",
          "stepBadge": "Deux zéros distincts quand le discriminant est positif",
          "paragraphText": "• Propriété : si $\\Delta > 0$, le polynôme $P$ admet deux zéros distincts $x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}$ et $x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$.\nLa forme factorisée est alors $P(x) = a(x - x_1)(x - x_2)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q2",
            "type": "mcq",
            "prompt": "Si $\\Delta > 0$, combien le polynôme $P$ admet-il de zéros ?",
            "options": [
              "Aucun",
              "Un zéro double",
              "Deux zéros distincts",
              "Une infinité"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un discriminant strictement positif donne deux zéros distincts."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un zéro double quand le discriminant est nul",
          "stepTheme": "Un zéro double quand le discriminant est nul",
          "stepBadge": "Un zéro double quand le discriminant est nul",
          "paragraphText": "• Propriété : si $\\Delta = 0$, le polynôme $P$ admet un zéro double $x_0 = \\frac{-b}{2a}$.\nSa forme factorisée est $P(x) = a(x - x_0)^2$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q3",
            "type": "mcq",
            "prompt": "Pour $Q(x) = x^2 - 4x + 4$, que vaut le zéro double ?",
            "options": [
              "$-2$",
              "$2$",
              "$4$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ici $\\Delta = 0$ et $x_0 = \\frac{4}{2} = 2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Aucun zéro quand le discriminant est négatif",
          "stepTheme": "Aucun zéro quand le discriminant est négatif",
          "stepBadge": "Aucun zéro quand le discriminant est négatif",
          "paragraphText": "• Propriété : si $\\Delta < 0$, le polynôme $P$ n’admet pas de zéro.\nIl n’est alors pas factorisable, comme $P(x) = -2x^2 + x - 3$ dont le discriminant vaut $-23$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q4",
            "type": "mcq",
            "prompt": "Le polynôme $P(x) = -2x^2 + x - 3$ admet-il des zéros ?",
            "options": [
              "Oui, deux zéros distincts",
              "Oui, un zéro double",
              "Non, car son discriminant est négatif",
              "Oui, le zéro $3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Son discriminant vaut $1 - 24 = -23 < 0$ : aucun zéro, aucune factorisation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calculer le discriminant pas à pas",
          "stepTheme": "Calculer le discriminant pas à pas",
          "stepBadge": "Calculer le discriminant pas à pas",
          "paragraphText": "• Méthode : repérer $a$, $b$ et $c$, puis calculer $\\Delta = b^2 - 4ac$ en respectant les signes.\nPour $P(x) = 3x^2 + 2x - 4$ : $a = 3$, $b = 2$, $c = -4$, donc $\\Delta = 4 + 48 = 52$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q5",
            "type": "mcq",
            "prompt": "Pour $P(x) = 3x^2 + 2x - 4$, quelles sont les valeurs de $a$, $b$ et $c$ ?",
            "options": [
              "$a = 3$, $b = 2$, $c = 4$",
              "$a = 2$, $b = 3$, $c = -4$",
              "$a = 3$, $b = 2$, $c = -4$",
              "$a = 3$, $b = -4$, $c = 2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On lit les coefficients dans l’ordre : $3$ pour $x^2$, $2$ pour $x$, $-4$ pour la constante."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Factoriser avec les deux zéros",
          "stepTheme": "Factoriser avec les deux zéros",
          "stepBadge": "Factoriser avec les deux zéros",
          "paragraphText": "• Exemple de la leçon : quand $\\Delta > 0$, on écrit $P(x) = a(x - x_1)(x - x_2)$ avec le coefficient $a$ devant.\nPour $R(x) = 2x^2 + 3x - 5$, les zéros sont $-\\frac{5}{2}$ et $1$, d’où $R(x) = 2\\left(x + \\frac{5}{2}\\right)(x - 1)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q6",
            "type": "mcq",
            "prompt": "Quelle est la forme factorisée de $R(x) = 2x^2 + 3x - 5$ ?",
            "options": [
              "$(x - 1)(x + 1)$",
              "$2\\left(x + \\frac{5}{2}\\right)(x - 1)$",
              "$2(x - 1)^2$",
              "$R$ n’est pas factorisable"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les zéros sont $-\\frac{5}{2}$ et $1$ et le coefficient dominant est $2$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le piège du coefficient dominant",
          "stepTheme": "Le piège du coefficient dominant",
          "stepBadge": "Le piège du coefficient dominant",
          "paragraphText": "• Piège : la forme factorisée commence par le coefficient $a$ : $P(x) = a(x - x_1)(x - x_2)$.\nOublier le facteur $2$ pour $R(x) = 2x^2 + 3x - 5$ donne un polynôme différent, de coefficient dominant $1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q7",
            "type": "mcq",
            "prompt": "Dans la factorisation de $R(x) = 2x^2 + 3x - 5$, quel facteur ne faut-il pas oublier devant les parenthèses ?",
            "options": [
              "Le facteur $3$",
              "Le facteur $-5$",
              "Le facteur $2$, coefficient de $x^2$",
              "Aucun facteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La forme factorisée est $a(x - x_1)(x - x_2)$ : ici $a = 2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q1",
          "type": "mcq",
          "prompt": "Pour $P(x) = 3x^2 + 2x - 4$, que vaut le discriminant $\\Delta$ ?",
          "options": [
            "$-52$",
            "$44$",
            "$52$",
            "$-44$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $\\Delta = 2^2 - 4 \\times 3 \\times (-4) = 4 + 48 = 52$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q2",
          "type": "mcq",
          "prompt": "Si $\\Delta > 0$, combien le polynôme $P$ admet-il de zéros ?",
          "options": [
            "Aucun",
            "Un zéro double",
            "Deux zéros distincts",
            "Une infinité"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un discriminant strictement positif donne deux zéros distincts."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q3",
          "type": "mcq",
          "prompt": "Pour $Q(x) = x^2 - 4x + 4$, que vaut le zéro double ?",
          "options": [
            "$-2$",
            "$2$",
            "$4$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ici $\\Delta = 0$ et $x_0 = \\frac{4}{2} = 2$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q4",
          "type": "mcq",
          "prompt": "Le polynôme $P(x) = -2x^2 + x - 3$ admet-il des zéros ?",
          "options": [
            "Oui, deux zéros distincts",
            "Oui, un zéro double",
            "Non, car son discriminant est négatif",
            "Oui, le zéro $3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Son discriminant vaut $1 - 24 = -23 < 0$ : aucun zéro, aucune factorisation."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q5",
          "type": "mcq",
          "prompt": "Pour $P(x) = 3x^2 + 2x - 4$, quelles sont les valeurs de $a$, $b$ et $c$ ?",
          "options": [
            "$a = 3$, $b = 2$, $c = 4$",
            "$a = 2$, $b = 3$, $c = -4$",
            "$a = 3$, $b = 2$, $c = -4$",
            "$a = 3$, $b = -4$, $c = 2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On lit les coefficients dans l’ordre : $3$ pour $x^2$, $2$ pour $x$, $-4$ pour la constante."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q6",
          "type": "mcq",
          "prompt": "Quelle est la forme factorisée de $R(x) = 2x^2 + 3x - 5$ ?",
          "options": [
            "$(x - 1)(x + 1)$",
            "$2\\left(x + \\frac{5}{2}\\right)(x - 1)$",
            "$2(x - 1)^2$",
            "$R$ n’est pas factorisable"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les zéros sont $-\\frac{5}{2}$ et $1$ et le coefficient dominant est $2$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p01_q7",
          "type": "mcq",
          "prompt": "Dans la factorisation de $R(x) = 2x^2 + 3x - 5$, quel facteur ne faut-il pas oublier devant les parenthèses ?",
          "options": [
            "Le facteur $3$",
            "Le facteur $-5$",
            "Le facteur $2$, coefficient de $x^2$",
            "Aucun facteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La forme factorisée est $a(x - x_1)(x - x_2)$ : ici $a = 2$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02",
      "order": 2,
      "title": "Résoudre une équation du second degré",
      "summary": "Résoudre algébriquement une équation du second degré grâce aux zéros du polynôme, ou graphiquement par les intersections de la courbe avec l’axe des abscisses.",
      "conceptExplanation": "On appelle équation du second degré toute équation de la forme $ax^2 + bx + c = 0$, où $a$, $b$ et $c$ sont des nombres réels et $a \\neq 0$. Par exemple, $-3x^2 + x + 4 = 0$ est une équation du second degré.\nRésoudre algébriquement l’équation $ax^2 + bx + c = 0$ revient à déterminer les zéros éventuels du polynôme $P$ défini par $P(x) = ax^2 + bx + c$ : deux solutions distinctes si $\\Delta > 0$, une solution unique $x_0$ si $\\Delta = 0$, aucune solution si $\\Delta < 0$.\nRemarque de la leçon : si $a$ et $c$ sont de signes contraires, le discriminant est positif et l’équation admet deux solutions distinctes.\nGraphiquement, les solutions sont les abscisses des points d’intersection de la parabole avec l’axe des abscisses.",
      "keyRule": "Résoudre $ax^2 + bx + c = 0$, c’est chercher les zéros du polynôme : tout passe par le signe de $\\Delta$.",
      "formulas": [
        {
          "name": "Solutions d’une équation du second degré",
          "formula": "x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} \\quad \\text{et} \\quad x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}",
          "note": "Lorsque $\\Delta > 0$ ; si $\\Delta = 0$, l’unique solution est $x_0 = \\frac{-b}{2a}$."
        }
      ],
      "workedExample": {
        "title": "Résoudre $-x^2 + x + 2 = 0$ (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ l’équation $-x^2 + x + 2 = 0$.",
        "methodSteps": [
          "On calcule le discriminant : $\\Delta = 1^2 - 4 \\times (-1) \\times 2 = 9$.",
          "$\\Delta > 0$ : l’équation admet deux solutions distinctes.",
          "On obtient les deux solutions $-1$ et $2$."
        ],
        "conclusion": "L’ensemble des solutions est $S = \\{-1 ; 2\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une équation du second degré",
          "stepTheme": "Une équation du second degré",
          "stepBadge": "Une équation du second degré",
          "paragraphText": "• Définition : on appelle équation du second degré toute équation de la forme $ax^2 + bx + c = 0$, où $a$, $b$ et $c$ sont des nombres réels et $a \\neq 0$.\nExemple de la leçon : $-3x^2 + x + 4 = 0$ est une équation du second degré.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces équations est une équation du second degré ?",
            "options": [
              "$2x + 4 = 0$",
              "$-3x^2 + x + 4 = 0$",
              "$x^3 - x = 0$",
              "$5 = 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il faut un terme en $x^2$ de coefficient non nul et aucun degré supérieur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La résolution algébrique",
          "stepTheme": "La résolution algébrique",
          "stepBadge": "La résolution algébrique",
          "paragraphText": "• Méthode : résoudre $ax^2 + bx + c = 0$ revient à déterminer les zéros éventuels du polynôme $P$ défini par $P(x) = ax^2 + bx + c$.\nOn calcule donc $\\Delta = b^2 - 4ac$, puis on conclut selon son signe.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02_q2",
            "type": "mcq",
            "prompt": "Résoudre algébriquement une équation du second degré revient à :",
            "options": [
              "Tracer la parabole",
              "Déterminer les zéros éventuels du polynôme associé",
              "Calculer la somme des coefficients",
              "Factoriser par $x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les solutions de l’équation sont exactement les zéros du polynôme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $-x^2 + x + 2 = 0$",
          "stepTheme": "Résoudre $-x^2 + x + 2 = 0$",
          "stepBadge": "Résoudre $-x^2 + x + 2 = 0$",
          "paragraphText": "• Exemple de la leçon : pour $-x^2 + x + 2 = 0$, le discriminant vaut $\\Delta = 9 > 0$.\nL’équation admet deux solutions distinctes : $-1$ et $2$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02_q3",
            "type": "mcq",
            "prompt": "Quel est l’ensemble des solutions de l’équation $-x^2 + x + 2 = 0$ ?",
            "options": [
              "$S = \\{1 ; 2\\}$",
              "$S = \\{-1 ; -2\\}$",
              "$S = \\{-1 ; 2\\}$",
              "$S = \\emptyset$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec $\\Delta = 9$, les deux solutions sont $-1$ et $2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Quand a et c sont de signes contraires",
          "stepTheme": "Quand a et c sont de signes contraires",
          "stepBadge": "Quand a et c sont de signes contraires",
          "paragraphText": "• Remarque de la leçon : si l’équation $ax^2 + bx + c = 0$ est telle que $a$ et $c$ sont de signes contraires, alors le discriminant est positif.\nL’équation admet dans ce cas deux solutions distinctes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02_q4",
            "type": "mcq",
            "prompt": "Si $a$ et $c$ sont de signes contraires dans $ax^2 + bx + c = 0$, alors l’équation :",
            "options": [
              "N’admet aucune solution",
              "Admet un zéro double",
              "Admet deux solutions distinctes",
              "Est impossible à résoudre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le produit $4ac$ est négatif, donc $\\Delta = b^2 - 4ac > 0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La résolution graphique",
          "stepTheme": "La résolution graphique",
          "stepBadge": "La résolution graphique",
          "paragraphText": "• Méthode graphique : les solutions de l’équation $f(x) = 0$ sont les abscisses des points où la courbe de $f$ coupe l’axe des abscisses.\nDans l’exercice de la leçon, la courbe de $f$ coupe l’axe en $3$, celle de $g$ ne le coupe pas, et celle de $h$ le coupe en $-1$ et $2$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02_q5",
            "type": "mcq",
            "prompt": "La courbe de $h$ coupe l’axe des abscisses aux points d’abscisses $-1$ et $2$. L’ensemble des solutions de $h(x) = 0$ est :",
            "options": [
              "$S = \\emptyset$",
              "$S = \\{2\\}$",
              "$S = \\{-1 ; 2\\}$",
              "$S = \\{-2 ; 1\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Graphiquement, on lit les abscisses des points d’intersection avec l’axe des abscisses."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une courbe qui ne coupe pas l’axe",
          "stepTheme": "Une courbe qui ne coupe pas l’axe",
          "stepBadge": "Une courbe qui ne coupe pas l’axe",
          "paragraphText": "• Piège : si la courbe ne coupe pas l’axe des abscisses, l’équation n’a aucune solution, comme pour $g$ dans l’exercice de la leçon.\nIl ne faut pas inventer de solution : $S = \\emptyset$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02_q6",
            "type": "mcq",
            "prompt": "La courbe de $g$ ne coupe pas l’axe des abscisses. Que vaut l’ensemble des solutions de $g(x) = 0$ ?",
            "options": [
              "$S = \\{0\\}$",
              "$S = \\emptyset$",
              "$S = \\mathbb{R}$",
              "$S = \\{1\\}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Aucun point d’intersection, donc aucune solution."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces équations est une équation du second degré ?",
          "options": [
            "$2x + 4 = 0$",
            "$-3x^2 + x + 4 = 0$",
            "$x^3 - x = 0$",
            "$5 = 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il faut un terme en $x^2$ de coefficient non nul et aucun degré supérieur."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02_q2",
          "type": "mcq",
          "prompt": "Résoudre algébriquement une équation du second degré revient à :",
          "options": [
            "Tracer la parabole",
            "Déterminer les zéros éventuels du polynôme associé",
            "Calculer la somme des coefficients",
            "Factoriser par $x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les solutions de l’équation sont exactement les zéros du polynôme."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02_q3",
          "type": "mcq",
          "prompt": "Quel est l’ensemble des solutions de l’équation $-x^2 + x + 2 = 0$ ?",
          "options": [
            "$S = \\{1 ; 2\\}$",
            "$S = \\{-1 ; -2\\}$",
            "$S = \\{-1 ; 2\\}$",
            "$S = \\emptyset$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec $\\Delta = 9$, les deux solutions sont $-1$ et $2$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02_q4",
          "type": "mcq",
          "prompt": "Si $a$ et $c$ sont de signes contraires dans $ax^2 + bx + c = 0$, alors l’équation :",
          "options": [
            "N’admet aucune solution",
            "Admet un zéro double",
            "Admet deux solutions distinctes",
            "Est impossible à résoudre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le produit $4ac$ est négatif, donc $\\Delta = b^2 - 4ac > 0$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02_q5",
          "type": "mcq",
          "prompt": "La courbe de $h$ coupe l’axe des abscisses aux points d’abscisses $-1$ et $2$. L’ensemble des solutions de $h(x) = 0$ est :",
          "options": [
            "$S = \\emptyset$",
            "$S = \\{2\\}$",
            "$S = \\{-1 ; 2\\}$",
            "$S = \\{-2 ; 1\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Graphiquement, on lit les abscisses des points d’intersection avec l’axe des abscisses."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p02_q6",
          "type": "mcq",
          "prompt": "La courbe de $g$ ne coupe pas l’axe des abscisses. Que vaut l’ensemble des solutions de $g(x) = 0$ ?",
          "options": [
            "$S = \\{0\\}$",
            "$S = \\emptyset$",
            "$S = \\mathbb{R}$",
            "$S = \\{1\\}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Aucun point d’intersection, donc aucune solution."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03",
      "order": 3,
      "title": "Somme et produit des solutions",
      "summary": "Utiliser la somme et le produit des solutions pour retrouver une solution ou deux nombres de somme et produit donnés.",
      "conceptExplanation": "Propriété 1 : si l’équation du second degré $ax^2 + bx + c = 0$ possède deux solutions $x_1$ et $x_2$ (distinctes ou non), alors $x_1 + x_2 = -\\frac{b}{a}$ et $x_1 x_2 = \\frac{c}{a}$.\nPropriété 2 : soient $S$ et $P$ deux nombres réels. Si $S^2 - 4P \\geq 0$, alors il existe deux nombres réels dont la somme est $S$ et le produit est $P$ : ce sont les solutions de l’équation $x^2 - Sx + P = 0$.\nPoint méthode : pour déterminer deux nombres de somme $S$ et de produit $P$, on vérifie que $S^2 - 4P \\geq 0$, on résout $x^2 - Sx + P = 0$, et les solutions sont les nombres cherchés.",
      "keyRule": "Somme et produit donnent deux relations pour retrouver une solution sans tout recalculer.",
      "formulas": [
        {
          "name": "Somme et produit des solutions",
          "formula": "x_1 + x_2 = -\\frac{b}{a} \\quad \\text{et} \\quad x_1 x_2 = \\frac{c}{a}",
          "note": "Lorsque l’équation admet deux solutions, distinctes ou non."
        },
        {
          "name": "Équation associée à une somme et un produit",
          "formula": "x^2 - Sx + P = 0",
          "note": "Ses solutions sont les deux nombres de somme $S$ et de produit $P$, s’ils existent."
        }
      ],
      "workedExample": {
        "title": "Retrouver l’autre solution de $x^2 + 5x + 4 = 0$",
        "statement": "L’équation $x^2 + 5x + 4 = 0$ admet deux solutions dont l’une est $-1$. Détermine l’autre solution.",
        "methodSteps": [
          "On note $x_1 = -1$ et $x_2$ l’autre solution.",
          "Par la somme : $x_1 + x_2 = -5$, donc $-1 + x_2 = -5$ et $x_2 = -4$.",
          "Vérification par le produit : $x_1 x_2 = 4$ et $(-1) \\times (-4) = 4$."
        ],
        "conclusion": "L’autre solution est $-4$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Somme S et produit P de deux nombres",
          "stepTheme": "Somme S et produit P de deux nombres",
          "stepBadge": "Somme S et produit P de deux nombres",
          "paragraphText": "• Dans ce point, $S$ désigne la somme de deux nombres et $P$ leur produit.\nLa leçon relie ces deux quantités aux coefficients de l’équation du second degré dont ils sont solutions.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q1",
            "type": "mcq",
            "prompt": "Dans les propriétés de ce point, que désignent $S$ et $P$ ?",
            "options": [
              "La somme et le produit de deux nombres",
              "Le discriminant et le coefficient $a$",
              "Deux polynômes",
              "Les bornes d’un intervalle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$S$ est la somme des deux nombres et $P$ leur produit."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Somme et produit des deux solutions",
          "stepTheme": "Somme et produit des deux solutions",
          "stepBadge": "Somme et produit des deux solutions",
          "paragraphText": "• Propriété : si $ax^2 + bx + c = 0$ possède deux solutions $x_1$ et $x_2$, alors $x_1 + x_2 = -\\frac{b}{a}$ et $x_1 x_2 = \\frac{c}{a}$.\nCes deux relations restent vraies même si les deux solutions sont égales.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q2",
            "type": "mcq",
            "prompt": "Pour l’équation $x^2 + 5x + 4 = 0$, que valent la somme et le produit des solutions ?",
            "options": [
              "Somme $5$, produit $4$",
              "Somme $-5$, produit $4$",
              "Somme $-5$, produit $-4$",
              "Somme $4$, produit $5$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $a = 1$, $b = 5$ et $c = 4$ : somme $-\\frac{b}{a} = -5$, produit $\\frac{c}{a} = 4$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Retrouver une solution grâce à la somme",
          "stepTheme": "Retrouver une solution grâce à la somme",
          "stepBadge": "Retrouver une solution grâce à la somme",
          "paragraphText": "• Exemple de la leçon : $x^2 + 5x + 4 = 0$ admet $-1$ pour solution.\nLa somme des solutions vaut $-5$, donc l’autre solution vérifie $-1 + x_2 = -5$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q3",
            "type": "mcq",
            "prompt": "L’équation $x^2 + 5x + 4 = 0$ admet $-1$ comme solution. Quelle est l’autre solution ?",
            "options": [
              "$4$",
              "$-5$",
              "$-4$",
              "$5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Somme $-5$ : $-1 + x_2 = -5$ donne $x_2 = -4$ ; le produit $(-1) \\times (-4) = 4$ confirme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’équation de la somme et du produit",
          "stepTheme": "L’équation de la somme et du produit",
          "stepBadge": "L’équation de la somme et du produit",
          "paragraphText": "• Propriété : soient $S$ et $P$ deux nombres réels. Si $S^2 - 4P \\geq 0$, il existe deux nombres réels de somme $S$ et de produit $P$.\nCes deux nombres sont les solutions de l’équation $x^2 - Sx + P = 0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q4",
            "type": "mcq",
            "prompt": "Deux nombres ont pour somme $S$ et pour produit $P$. De quelle équation sont-ils solutions ?",
            "options": [
              "$x^2 + Sx + P = 0$",
              "$x^2 - Sx - P = 0$",
              "$x^2 - Sx + P = 0$",
              "$x^2 + Px + S = 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’équation associée est $x^2 - Sx + P = 0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Vérifier la condition d’existence",
          "stepTheme": "Vérifier la condition d’existence",
          "stepBadge": "Vérifier la condition d’existence",
          "paragraphText": "• Point méthode de la leçon : on vérifie d’abord que $S^2 - 4P \\geq 0$, puis on résout $x^2 - Sx + P = 0$.\nLes solutions de cette équation sont les deux nombres recherchés.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q5",
            "type": "mcq",
            "prompt": "Avant de chercher deux nombres de somme $S$ et de produit $P$, que faut-il vérifier ?",
            "options": [
              "Que $S$ est positif",
              "Que $S^2 - 4P \\geq 0$",
              "Que $P$ est un carré parfait",
              "Que $S = P$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la condition d’existence donnée par la propriété."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Trouver deux nombres de somme et produit donnés",
          "stepTheme": "Trouver deux nombres de somme et produit donnés",
          "stepBadge": "Trouver deux nombres de somme et produit donnés",
          "paragraphText": "• Exemple de la leçon : pour $S = -3$ et $P = -4$, on a $S^2 - 4P = 25 \\geq 0$.\nLes deux nombres sont les solutions de $x^2 + 3x - 4 = 0$, dont le discriminant vaut $25$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q6",
            "type": "mcq",
            "prompt": "Quels sont les deux nombres de somme $-3$ et de produit $-4$ ?",
            "options": [
              "$1$ et $-4$",
              "$-1$ et $4$",
              "$3$ et $-4$",
              "$-3$ et $-4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les solutions de $x^2 + 3x - 4 = 0$ : $1$ et $-4$ ; somme $-3$, produit $-4$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le signe de la somme",
          "stepTheme": "Le signe de la somme",
          "stepBadge": "Le signe de la somme",
          "paragraphText": "• Piège : la somme des solutions est $-\\frac{b}{a}$, avec un signe moins.\nPour $x^2 + 5x + 4 = 0$, la somme vaut $-5$ et non $5$ : les deux solutions $-1$ et $-4$ sont négatives.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q7",
            "type": "mcq",
            "prompt": "Quelle est la somme des solutions de $x^2 + 5x + 4 = 0$ ?",
            "options": [
              "$5$",
              "$-5$",
              "$4$",
              "$-4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Somme $= -\\frac{b}{a} = -5$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q1",
          "type": "mcq",
          "prompt": "Dans les propriétés de ce point, que désignent $S$ et $P$ ?",
          "options": [
            "La somme et le produit de deux nombres",
            "Le discriminant et le coefficient $a$",
            "Deux polynômes",
            "Les bornes d’un intervalle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$S$ est la somme des deux nombres et $P$ leur produit."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q2",
          "type": "mcq",
          "prompt": "Pour l’équation $x^2 + 5x + 4 = 0$, que valent la somme et le produit des solutions ?",
          "options": [
            "Somme $5$, produit $4$",
            "Somme $-5$, produit $4$",
            "Somme $-5$, produit $-4$",
            "Somme $4$, produit $5$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $a = 1$, $b = 5$ et $c = 4$ : somme $-\\frac{b}{a} = -5$, produit $\\frac{c}{a} = 4$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q3",
          "type": "mcq",
          "prompt": "L’équation $x^2 + 5x + 4 = 0$ admet $-1$ comme solution. Quelle est l’autre solution ?",
          "options": [
            "$4$",
            "$-5$",
            "$-4$",
            "$5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Somme $-5$ : $-1 + x_2 = -5$ donne $x_2 = -4$ ; le produit $(-1) \\times (-4) = 4$ confirme."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q4",
          "type": "mcq",
          "prompt": "Deux nombres ont pour somme $S$ et pour produit $P$. De quelle équation sont-ils solutions ?",
          "options": [
            "$x^2 + Sx + P = 0$",
            "$x^2 - Sx - P = 0$",
            "$x^2 - Sx + P = 0$",
            "$x^2 + Px + S = 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’équation associée est $x^2 - Sx + P = 0$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q5",
          "type": "mcq",
          "prompt": "Avant de chercher deux nombres de somme $S$ et de produit $P$, que faut-il vérifier ?",
          "options": [
            "Que $S$ est positif",
            "Que $S^2 - 4P \\geq 0$",
            "Que $P$ est un carré parfait",
            "Que $S = P$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la condition d’existence donnée par la propriété."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q6",
          "type": "mcq",
          "prompt": "Quels sont les deux nombres de somme $-3$ et de produit $-4$ ?",
          "options": [
            "$1$ et $-4$",
            "$-1$ et $4$",
            "$3$ et $-4$",
            "$-3$ et $-4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les solutions de $x^2 + 3x - 4 = 0$ : $1$ et $-4$ ; somme $-3$, produit $-4$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p03_q7",
          "type": "mcq",
          "prompt": "Quelle est la somme des solutions de $x^2 + 5x + 4 = 0$ ?",
          "options": [
            "$5$",
            "$-5$",
            "$4$",
            "$-4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Somme $= -\\frac{b}{a} = -5$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04",
      "order": 4,
      "title": "Signe d’un polynôme du second degré",
      "summary": "Établir le tableau de signes d’un polynôme du second degré selon le signe du discriminant et celui de $a$.",
      "conceptExplanation": "Soit $P$ le polynôme du second degré défini par $P(x) = ax^2 + bx + c$, avec $a \\neq 0$, et $\\Delta$ son discriminant.\nSi $\\Delta > 0$, $P$ a deux zéros distincts $x_1$ et $x_2$ (avec $x_1 < x_2$) : $P(x)$ est du signe de $a$ à l’extérieur des racines et du signe de $-a$ entre les racines.\nSi $\\Delta = 0$, $P$ admet un zéro double $x_0$ : $P(x)$ est du signe de $a$ partout, sauf en $x_0$ où il vaut $0$.\nSi $\\Delta < 0$, $P$ n’admet pas de zéro : $P(x)$ est toujours du signe de $a$.",
      "keyRule": "Signe de $a$ à l’extérieur des racines, signe contraire entre les racines : c’est le réflexe du tableau de signes.",
      "formulas": [],
      "workedExample": {
        "title": "Signe de $P(x) = 2x^2 - 8x + 6$",
        "statement": "Étudie le signe du polynôme $P(x) = 2x^2 - 8x + 6$, dont les zéros sont $1$ et $3$.",
        "methodSteps": [
          "Le discriminant est positif et le coefficient de $x^2$ est $a = 2 > 0$.",
          "Le polynôme est positif à l’extérieur des racines : $P(x) > 0$ pour $x \\in ]-\\infty ; 1[ \\cup ]3 ; +\\infty[$.",
          "Il est négatif entre les racines : $P(x) < 0$ pour $x \\in ]1 ; 3[$, et nul en $1$ et $3$."
        ],
        "conclusion": "Le signe de $a$ à l’extérieur, le signe contraire à l’intérieur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le tableau de signes d’un polynôme",
          "stepTheme": "Le tableau de signes d’un polynôme",
          "stepBadge": "Le tableau de signes d’un polynôme",
          "paragraphText": "• Étudier le signe d’un polynôme, c’est déterminer, selon les valeurs de $x$, quand il est positif, négatif ou nul.\nLe résultat se présente dans un tableau de signes construit à partir des zéros du polynôme et du signe de $a$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04_q1",
            "type": "mcq",
            "prompt": "Étudier le signe d’un polynôme du second degré, c’est :",
            "options": [
              "Calculer son discriminant seulement",
              "Déterminer quand il est positif, négatif ou nul selon les valeurs de $x$",
              "Le factoriser dans tous les cas",
              "Tracer sa courbe sans calcul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’étude de signe décrit le signe du polynôme sur tout $\\mathbb{R}$, en s’appuyant sur ses zéros."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deux zéros : le signe de a à l’extérieur",
          "stepTheme": "Deux zéros : le signe de a à l’extérieur",
          "stepBadge": "Deux zéros : le signe de a à l’extérieur",
          "paragraphText": "• Propriété : si $\\Delta > 0$, avec deux zéros $x_1 < x_2$, le polynôme est du signe de $a$ à l’extérieur des racines et du signe de $-a$ entre les racines.\nLes valeurs $x_1$ et $x_2$ annulent le polynôme.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04_q2",
            "type": "mcq",
            "prompt": "Si $\\Delta > 0$, quel est le signe de $P(x)$ entre ses deux zéros ?",
            "options": [
              "Le signe de $a$",
              "Le signe de $-a$",
              "Toujours positif",
              "Toujours nul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Entre les racines, le polynôme prend le signe contraire de $a$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le signe de $2x^2 - 8x + 6$",
          "stepTheme": "Le signe de $2x^2 - 8x + 6$",
          "stepBadge": "Le signe de $2x^2 - 8x + 6$",
          "paragraphText": "• Exemple de la leçon : $P(x) = 2x^2 - 8x + 6$ a pour zéros $1$ et $3$, avec $a = 2 > 0$.\nDonc $P(x) > 0$ sur $]-\\infty ; 1[ \\cup ]3 ; +\\infty[$ et $P(x) < 0$ sur $]1 ; 3[$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04_q3",
            "type": "mcq",
            "prompt": "Pour $P(x) = 2x^2 - 8x + 6$, sur quel intervalle a-t-on $P(x) < 0$ ?",
            "options": [
              "$]-\\infty ; 1[$",
              "$]3 ; +\\infty[$",
              "$]1 ; 3[$",
              "Aucun intervalle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$a$ est positif : le polynôme est négatif entre ses racines $1$ et $3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Zéro double et absence de zéro",
          "stepTheme": "Zéro double et absence de zéro",
          "stepBadge": "Zéro double et absence de zéro",
          "paragraphText": "• Si $\\Delta = 0$, le polynôme garde le signe de $a$ partout, sauf en son zéro double où il vaut $0$.\n• Si $\\Delta < 0$, il n’a pas de zéro et garde le signe de $a$ sur tout $\\mathbb{R}$, comme $Q(x) = -2x^2 - 8x - 11$, toujours négatif car $a = -2 < 0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04_q4",
            "type": "mcq",
            "prompt": "Le polynôme $Q(x) = -2x^2 - 8x - 11$ n’a pas de zéro et $a = -2$. Son signe est :",
            "options": [
              "Toujours positif",
              "Toujours négatif",
              "Positif puis négatif",
              "Nul en un point"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans zéro et avec $a < 0$, $Q(x) < 0$ pour tout réel $x$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le signe de $-x^2 + 10x - 25$",
          "stepTheme": "Le signe de $-x^2 + 10x - 25$",
          "stepBadge": "Le signe de $-x^2 + 10x - 25$",
          "paragraphText": "• Exemple de la leçon : $R(x) = -x^2 + 10x - 25$ a pour zéro double $5$, avec $a = -1 < 0$ et $\\Delta = 0$.\nDonc $R(x) < 0$ pour $x \\neq 5$ et $R(5) = 0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04_q5",
            "type": "mcq",
            "prompt": "Pour $R(x) = -x^2 + 10x - 25$, que vaut $R(x)$ lorsque $x \\neq 5$ ?",
            "options": [
              "$R(x) > 0$",
              "$R(x) = 0$",
              "$R(x) < 0$",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Zéro double en $5$ et signe de $a = -1$ partout ailleurs : $R(x) < 0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser l’intérieur et l’extérieur",
          "stepTheme": "Ne pas inverser l’intérieur et l’extérieur",
          "stepBadge": "Ne pas inverser l’intérieur et l’extérieur",
          "paragraphText": "• Piège : entre les deux racines, le signe est celui de $-a$, pas celui de $a$.\nPour $P(x) = 2x^2 - 8x + 6$ avec $a > 0$, le polynôme est négatif entre $1$ et $3$, bien que $a$ soit positif.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04_q6",
            "type": "mcq",
            "prompt": "Pour $P(x) = 2x^2 - 8x + 6$, quel est le signe de $P(x)$ pour $x = 2$ ?",
            "options": [
              "Positif",
              "Négatif",
              "Nul",
              "Égal à $2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2$ est entre les racines $1$ et $3$ : le signe est celui de $-a$, donc négatif. On vérifie : $P(2) = -2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04_q1",
          "type": "mcq",
          "prompt": "Étudier le signe d’un polynôme du second degré, c’est :",
          "options": [
            "Calculer son discriminant seulement",
            "Déterminer quand il est positif, négatif ou nul selon les valeurs de $x$",
            "Le factoriser dans tous les cas",
            "Tracer sa courbe sans calcul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’étude de signe décrit le signe du polynôme sur tout $\\mathbb{R}$, en s’appuyant sur ses zéros."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04_q2",
          "type": "mcq",
          "prompt": "Si $\\Delta > 0$, quel est le signe de $P(x)$ entre ses deux zéros ?",
          "options": [
            "Le signe de $a$",
            "Le signe de $-a$",
            "Toujours positif",
            "Toujours nul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Entre les racines, le polynôme prend le signe contraire de $a$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04_q3",
          "type": "mcq",
          "prompt": "Pour $P(x) = 2x^2 - 8x + 6$, sur quel intervalle a-t-on $P(x) < 0$ ?",
          "options": [
            "$]-\\infty ; 1[$",
            "$]3 ; +\\infty[$",
            "$]1 ; 3[$",
            "Aucun intervalle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$a$ est positif : le polynôme est négatif entre ses racines $1$ et $3$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04_q4",
          "type": "mcq",
          "prompt": "Le polynôme $Q(x) = -2x^2 - 8x - 11$ n’a pas de zéro et $a = -2$. Son signe est :",
          "options": [
            "Toujours positif",
            "Toujours négatif",
            "Positif puis négatif",
            "Nul en un point"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans zéro et avec $a < 0$, $Q(x) < 0$ pour tout réel $x$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04_q5",
          "type": "mcq",
          "prompt": "Pour $R(x) = -x^2 + 10x - 25$, que vaut $R(x)$ lorsque $x \\neq 5$ ?",
          "options": [
            "$R(x) > 0$",
            "$R(x) = 0$",
            "$R(x) < 0$",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Zéro double en $5$ et signe de $a = -1$ partout ailleurs : $R(x) < 0$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p04_q6",
          "type": "mcq",
          "prompt": "Pour $P(x) = 2x^2 - 8x + 6$, quel est le signe de $P(x)$ pour $x = 2$ ?",
          "options": [
            "Positif",
            "Négatif",
            "Nul",
            "Égal à $2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2$ est entre les racines $1$ et $3$ : le signe est celui de $-a$, donc négatif. On vérifie : $P(2) = -2$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05",
      "order": 5,
      "title": "Inéquations du second degré",
      "summary": "Définir une inéquation du second degré et la résoudre en étudiant le signe du polynôme associé.",
      "conceptExplanation": "Soit $P$ un polynôme du second degré. Toute inéquation de l’un des types $P(x) > 0$, $P(x) \\geq 0$, $P(x) < 0$ ou $P(x) \\leq 0$ est appelée inéquation du second degré. Exemple : $-3x^2 + 5x - 2 > 0$ est une inéquation du second degré.\nRésoudre une telle inéquation revient à étudier le signe du polynôme $P(x)$, puis à trouver l’intervalle ou les intervalles correspondant à l’ensemble des solutions.\nTrois situations de la leçon : pour $2x^2 - 5x + 3 < 0$, la solution est $]1 ; \\frac{3}{2}[$ ; pour $-x^2 - 4x - 4 \\geq 0$, la solution est $\\{-2\\}$ ; pour $x^2 + x + 2 > 0$, la solution est $\\mathbb{R}$.",
      "keyRule": "Une inéquation se résout par un tableau de signes : on lit ensuite les intervalles qui conviennent.",
      "formulas": [],
      "workedExample": {
        "title": "Résoudre $2x^2 - 5x + 3 < 0$",
        "statement": "Résous dans $\\mathbb{R}$ l’inéquation $2x^2 - 5x + 3 < 0$.",
        "methodSteps": [
          "On calcule le discriminant du polynôme $P(x) = 2x^2 - 5x + 3$ : $\\Delta = 25 - 24 = 1$.",
          "Le polynôme admet deux zéros : $x_1 = 1$ et $x_2 = \\frac{3}{2}$.",
          "Avec $a = 2 > 0$, $P(x)$ est négatif entre les racines."
        ],
        "conclusion": "L’ensemble des solutions est $S = ]1 ; \\frac{3}{2}[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une inéquation du second degré",
          "stepTheme": "Une inéquation du second degré",
          "stepBadge": "Une inéquation du second degré",
          "paragraphText": "• Définition : soit $P$ un polynôme du second degré ; toute inéquation des types $P(x) > 0$, $P(x) \\geq 0$, $P(x) < 0$ ou $P(x) \\leq 0$ est une inéquation du second degré.\nExemple de la leçon : $-3x^2 + 5x - 2 > 0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces inéquations est du second degré ?",
            "options": [
              "$2x - 1 > 0$",
              "$-3x^2 + 5x - 2 > 0$",
              "$x^3 + 1 < 0$",
              "$4 > 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le membre de gauche est un polynôme du second degré comparé à $0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Résoudre par le signe du polynôme",
          "stepTheme": "Résoudre par le signe du polynôme",
          "stepBadge": "Résoudre par le signe du polynôme",
          "paragraphText": "• Méthode de la leçon : résoudre une inéquation du second degré revient à étudier le signe du polynôme, puis à trouver l’intervalle ou les intervalles correspondant aux solutions.\nLe tableau de signes est donc l’outil central de la résolution.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05_q2",
            "type": "mcq",
            "prompt": "Résoudre une inéquation du second degré revient d’abord à :",
            "options": [
              "Étudier le signe du polynôme associé",
              "Remplacer $x$ par $0$",
              "Tracer la courbe sans calcul",
              "Élever les deux membres au carré"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On étudie le signe du polynôme, puis on lit les intervalles solutions."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $2x^2 - 5x + 3 < 0$",
          "stepTheme": "Résoudre $2x^2 - 5x + 3 < 0$",
          "stepBadge": "Résoudre $2x^2 - 5x + 3 < 0$",
          "paragraphText": "• Exemple de la leçon : le discriminant de $2x^2 - 5x + 3$ vaut $1$ et ses zéros sont $1$ et $\\frac{3}{2}$.\nLe polynôme est négatif entre les racines car $a = 2 > 0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05_q3",
            "type": "mcq",
            "prompt": "Quel est l’ensemble des solutions de $2x^2 - 5x + 3 < 0$ ?",
            "options": [
              "$]-\\infty ; 1[$",
              "$]\\frac{3}{2} ; +\\infty[$",
              "$]1 ; \\frac{3}{2}[$",
              "$\\{1 ; \\frac{3}{2}\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le polynôme est négatif strictement entre ses racines $1$ et $\\frac{3}{2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le cas du zéro double",
          "stepTheme": "Le cas du zéro double",
          "stepBadge": "Le cas du zéro double",
          "paragraphText": "• Exemple de la leçon : pour $Q(x) = -x^2 - 4x - 4$, on a $\\Delta = 0$ et un zéro double $-2$.\nLe tableau de signes donne $Q(x) < 0$ partout sauf en $-2$ où $Q(x) = 0$ : l’inéquation $Q(x) \\geq 0$ n’est vraie qu’en $-2$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05_q4",
            "type": "mcq",
            "prompt": "Quel est l’ensemble des solutions de $-x^2 - 4x - 4 \\geq 0$ ?",
            "options": [
              "$\\mathbb{R}$",
              "$\\emptyset$",
              "$\\{-2\\}$",
              "$[-2 ; +\\infty[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$Q(x)$ est négatif partout sauf en $-2$ où il vaut $0$ : seule la valeur $-2$ convient."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le cas sans zéro",
          "stepTheme": "Le cas sans zéro",
          "stepBadge": "Le cas sans zéro",
          "paragraphText": "• Cas $\\Delta < 0$ : le polynôme garde le signe de $a$ sur tout $\\mathbb{R}$.\nPour $R(x) = x^2 + x + 2$, $\\Delta = -7$ et $a = 1 > 0$ : $R(x) > 0$ pour tout réel $x$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05_q5",
            "type": "mcq",
            "prompt": "Quel est l’ensemble des solutions de $x^2 + x + 2 > 0$ ?",
            "options": [
              "$\\emptyset$",
              "$\\mathbb{R}$",
              "$]0 ; +\\infty[$",
              "$\\{-1 ; -2\\}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans zéro et avec $a > 0$, le polynôme est toujours strictement positif."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les bornes des intervalles",
          "stepTheme": "Les bornes des intervalles",
          "stepBadge": "Les bornes des intervalles",
          "paragraphText": "• Piège : pour une inégalité stricte comme $P(x) < 0$, les zéros du polynôme sont exclus des solutions.\nC’est pourquoi la solution de $2x^2 - 5x + 3 < 0$ est l’intervalle ouvert $]1 ; \\frac{3}{2}[$, sans les bornes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05_q6",
            "type": "mcq",
            "prompt": "Dans la solution de $2x^2 - 5x + 3 < 0$, les valeurs $1$ et $\\frac{3}{2}$ sont-elles solutions ?",
            "options": [
              "Oui, car ce sont les zéros",
              "Non, l’inégalité est stricte et le polynôme y vaut $0$",
              "Oui, seulement $1$",
              "Oui, seulement $\\frac{3}{2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En $1$ et en $\\frac{3}{2}$, le polynôme vaut $0$, ce qui ne satisfait pas l’inégalité stricte."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces inéquations est du second degré ?",
          "options": [
            "$2x - 1 > 0$",
            "$-3x^2 + 5x - 2 > 0$",
            "$x^3 + 1 < 0$",
            "$4 > 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le membre de gauche est un polynôme du second degré comparé à $0$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05_q2",
          "type": "mcq",
          "prompt": "Résoudre une inéquation du second degré revient d’abord à :",
          "options": [
            "Étudier le signe du polynôme associé",
            "Remplacer $x$ par $0$",
            "Tracer la courbe sans calcul",
            "Élever les deux membres au carré"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On étudie le signe du polynôme, puis on lit les intervalles solutions."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05_q3",
          "type": "mcq",
          "prompt": "Quel est l’ensemble des solutions de $2x^2 - 5x + 3 < 0$ ?",
          "options": [
            "$]-\\infty ; 1[$",
            "$]\\frac{3}{2} ; +\\infty[$",
            "$]1 ; \\frac{3}{2}[$",
            "$\\{1 ; \\frac{3}{2}\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le polynôme est négatif strictement entre ses racines $1$ et $\\frac{3}{2}$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05_q4",
          "type": "mcq",
          "prompt": "Quel est l’ensemble des solutions de $-x^2 - 4x - 4 \\geq 0$ ?",
          "options": [
            "$\\mathbb{R}$",
            "$\\emptyset$",
            "$\\{-2\\}$",
            "$[-2 ; +\\infty[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$Q(x)$ est négatif partout sauf en $-2$ où il vaut $0$ : seule la valeur $-2$ convient."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05_q5",
          "type": "mcq",
          "prompt": "Quel est l’ensemble des solutions de $x^2 + x + 2 > 0$ ?",
          "options": [
            "$\\emptyset$",
            "$\\mathbb{R}$",
            "$]0 ; +\\infty[$",
            "$\\{-1 ; -2\\}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans zéro et avec $a > 0$, le polynôme est toujours strictement positif."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p05_q6",
          "type": "mcq",
          "prompt": "Dans la solution de $2x^2 - 5x + 3 < 0$, les valeurs $1$ et $\\frac{3}{2}$ sont-elles solutions ?",
          "options": [
            "Oui, car ce sont les zéros",
            "Non, l’inégalité est stricte et le polynôme y vaut $0$",
            "Oui, seulement $1$",
            "Oui, seulement $\\frac{3}{2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En $1$ et en $\\frac{3}{2}$, le polynôme vaut $0$, ce qui ne satisfait pas l’inégalité stricte."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06",
      "order": 6,
      "title": "Équations bicarrées",
      "summary": "Reconnaître une équation bicarrée et la résoudre par le changement d’inconnue $X = x^2$.",
      "conceptExplanation": "On appelle équation bicarrée une équation du type $ax^4 + bx^2 + c = 0$, où $a$, $b$ et $c$ sont des nombres réels avec $a \\neq 0$. Exemple : $-3x^4 + 5x^2 - 2 = 0$ est une équation bicarrée.\nPoint méthode : on pose $X = x^2$, on résout l’équation du second degré $aX^2 + bX + c = 0$, puis on résout, s’il y a lieu, les équations d’inconnue $x$ du type $x^2 = X$.\nAttention : une valeur négative de $X$ ne donne aucune valeur de $x$, car un carré est toujours positif ou nul.",
      "keyRule": "Bicarrée : pose $X = x^2$, résous le second degré, puis reviens à $x$ sans oublier les deux signes.",
      "formulas": [
        {
          "name": "Forme d’une équation bicarrée",
          "formula": "ax^4 + bx^2 + c = 0 \\quad (a \\neq 0)",
          "note": "On la ramène au second degré en posant $X = x^2$."
        }
      ],
      "workedExample": {
        "title": "Résoudre $2x^4 - 3x^2 + 1 = 0$ (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ l’équation $2x^4 - 3x^2 + 1 = 0$.",
        "methodSteps": [
          "On pose $X = x^2$ : l’équation devient $2X^2 - 3X + 1 = 0$.",
          "Son discriminant vaut $\\Delta = 9 - 8 = 1$ : les solutions sont $X_1 = \\frac{1}{2}$ et $X_2 = 1$.",
          "On résout $x^2 = \\frac{1}{2}$, qui donne $x = \\frac{\\sqrt{2}}{2}$ ou $x = -\\frac{\\sqrt{2}}{2}$.",
          "On résout $x^2 = 1$, qui donne $x = 1$ ou $x = -1$."
        ],
        "conclusion": "L’ensemble des solutions est $S = \\{-1 ; -\\frac{\\sqrt{2}}{2} ; \\frac{\\sqrt{2}}{2} ; 1\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une équation bicarrée",
          "stepTheme": "Une équation bicarrée",
          "stepBadge": "Une équation bicarrée",
          "paragraphText": "• Définition : on appelle équation bicarrée une équation du type $ax^4 + bx^2 + c = 0$, où $a$, $b$ et $c$ sont des nombres réels avec $a \\neq 0$.\nExemple de la leçon : $-3x^4 + 5x^2 - 2 = 0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces équations est bicarrée ?",
            "options": [
              "$x^4 + x^3 + 1 = 0$",
              "$-3x^4 + 5x^2 - 2 = 0$",
              "$2x^2 + 3x - 5 = 0$",
              "$x^4 + x = 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une bicarrée ne contient que des puissances $x^4$, $x^2$ et un terme constant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le changement d’inconnue",
          "stepTheme": "Le changement d’inconnue",
          "stepBadge": "Le changement d’inconnue",
          "paragraphText": "• Point méthode de la leçon : on pose $X = x^2$, on résout l’équation du second degré $aX^2 + bX + c = 0$, puis on résout les équations $x^2 = X$.\nLa bicarrée devient ainsi une équation du second degré ordinaire.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06_q2",
            "type": "mcq",
            "prompt": "Quel changement d’inconnue utilise-t-on pour une équation bicarrée ?",
            "options": [
              "$X = x^4$",
              "$X = x^2$",
              "$X = 2x$",
              "$X = x + 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On pose $X = x^2$ pour ramener l’équation au second degré."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $2x^4 - 3x^2 + 1 = 0$",
          "stepTheme": "Résoudre $2x^4 - 3x^2 + 1 = 0$",
          "stepBadge": "Résoudre $2x^4 - 3x^2 + 1 = 0$",
          "paragraphText": "• Exemple de la leçon : en posant $X = x^2$, l’équation devient $2X^2 - 3X + 1 = 0$, de discriminant $1$.\nSes solutions sont $X = \\frac{1}{2}$ et $X = 1$, ce qui donne quatre valeurs de $x$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06_q3",
            "type": "mcq",
            "prompt": "Après le changement $X = x^2$, quelles sont les valeurs de $X$ pour $2x^4 - 3x^2 + 1 = 0$ ?",
            "options": [
              "$X = 1$ et $X = 2$",
              "$X = \\frac{1}{2}$ et $X = 1$",
              "$X = -1$ et $X = 1$",
              "$X = 0$ et $X = 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le discriminant de $2X^2 - 3X + 1$ vaut $1$ et les solutions sont $\\frac{3 - 1}{4} = \\frac{1}{2}$ et $\\frac{3 + 1}{4} = 1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Revenir de X à x",
          "stepTheme": "Revenir de X à x",
          "stepBadge": "Revenir de X à x",
          "paragraphText": "• Chaque valeur positive de $X$ donne deux valeurs de $x$, opposées l’une de l’autre.\nIci, $x^2 = \\frac{1}{2}$ donne $\\frac{\\sqrt{2}}{2}$ et $-\\frac{\\sqrt{2}}{2}$, et $x^2 = 1$ donne $1$ et $-1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06_q4",
            "type": "mcq",
            "prompt": "Combien de solutions l’équation $2x^4 - 3x^2 + 1 = 0$ admet-elle ?",
            "options": [
              "Deux solutions",
              "Trois solutions",
              "Quatre solutions",
              "Aucune solution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Deux valeurs positives de $X$, chacune donnant deux valeurs opposées de $x$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une valeur négative de X ne donne pas de x",
          "stepTheme": "Une valeur négative de X ne donne pas de x",
          "stepBadge": "Une valeur négative de X ne donne pas de x",
          "paragraphText": "• Piège : si l’équation en $X$ admet une solution négative, elle ne fournit aucune valeur de $x$, car $x^2 = X$ est impossible pour $X < 0$.\nLa leçon le dit dans son point méthode : on résout $x^2 = X$ « s’il y a lieu ».",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06_q5",
            "type": "mcq",
            "prompt": "Si l’équation en $X$ donne $X = -4$, que peut-on en déduire pour $x$ ?",
            "options": [
              "$x = 2$ ou $x = -2$",
              "$x = -4$",
              "Aucune valeur de $x$, car un carré ne peut pas valoir $-4$",
              "$x = 16$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un carré de réel est toujours positif ou nul : $x^2 = -4$ est impossible."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’ensemble des solutions",
          "stepTheme": "L’ensemble des solutions",
          "stepBadge": "L’ensemble des solutions",
          "paragraphText": "• Bilan de l’exemple de la leçon : les quatre solutions sont $-1$, $-\\frac{\\sqrt{2}}{2}$, $\\frac{\\sqrt{2}}{2}$ et $1$.\nOn peut les vérifier : pour $x^2 = 1$ comme pour $x^2 = \\frac{1}{2}$, l’équation de départ est satisfaite.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06_q6",
            "type": "mcq",
            "prompt": "Quel est l’ensemble des solutions de $2x^4 - 3x^2 + 1 = 0$ ?",
            "options": [
              "$\\{-1 ; 1 ; -\\sqrt{2} ; \\sqrt{2}\\}$",
              "$\\{-1 ; -\\frac{\\sqrt{2}}{2} ; \\frac{\\sqrt{2}}{2} ; 1\\}$",
              "$\\{\\frac{1}{2} ; 1\\}$",
              "$\\{-1 ; 1\\}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les valeurs de $X$ sont $\\frac{1}{2}$ et $1$ : $x^2 = \\frac{1}{2}$ donne $\\pm \\frac{\\sqrt{2}}{2}$ et $x^2 = 1$ donne $\\pm 1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces équations est bicarrée ?",
          "options": [
            "$x^4 + x^3 + 1 = 0$",
            "$-3x^4 + 5x^2 - 2 = 0$",
            "$2x^2 + 3x - 5 = 0$",
            "$x^4 + x = 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une bicarrée ne contient que des puissances $x^4$, $x^2$ et un terme constant."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06_q2",
          "type": "mcq",
          "prompt": "Quel changement d’inconnue utilise-t-on pour une équation bicarrée ?",
          "options": [
            "$X = x^4$",
            "$X = x^2$",
            "$X = 2x$",
            "$X = x + 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On pose $X = x^2$ pour ramener l’équation au second degré."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06_q3",
          "type": "mcq",
          "prompt": "Après le changement $X = x^2$, quelles sont les valeurs de $X$ pour $2x^4 - 3x^2 + 1 = 0$ ?",
          "options": [
            "$X = 1$ et $X = 2$",
            "$X = \\frac{1}{2}$ et $X = 1$",
            "$X = -1$ et $X = 1$",
            "$X = 0$ et $X = 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le discriminant de $2X^2 - 3X + 1$ vaut $1$ et les solutions sont $\\frac{3 - 1}{4} = \\frac{1}{2}$ et $\\frac{3 + 1}{4} = 1$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06_q4",
          "type": "mcq",
          "prompt": "Combien de solutions l’équation $2x^4 - 3x^2 + 1 = 0$ admet-elle ?",
          "options": [
            "Deux solutions",
            "Trois solutions",
            "Quatre solutions",
            "Aucune solution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Deux valeurs positives de $X$, chacune donnant deux valeurs opposées de $x$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06_q5",
          "type": "mcq",
          "prompt": "Si l’équation en $X$ donne $X = -4$, que peut-on en déduire pour $x$ ?",
          "options": [
            "$x = 2$ ou $x = -2$",
            "$x = -4$",
            "Aucune valeur de $x$, car un carré ne peut pas valoir $-4$",
            "$x = 16$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un carré de réel est toujours positif ou nul : $x^2 = -4$ est impossible."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p06_q6",
          "type": "mcq",
          "prompt": "Quel est l’ensemble des solutions de $2x^4 - 3x^2 + 1 = 0$ ?",
          "options": [
            "$\\{-1 ; 1 ; -\\sqrt{2} ; \\sqrt{2}\\}$",
            "$\\{-1 ; -\\frac{\\sqrt{2}}{2} ; \\frac{\\sqrt{2}}{2} ; 1\\}$",
            "$\\{\\frac{1}{2} ; 1\\}$",
            "$\\{-1 ; 1\\}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les valeurs de $X$ sont $\\frac{1}{2}$ et $1$ : $x^2 = \\frac{1}{2}$ donne $\\pm \\frac{\\sqrt{2}}{2}$ et $x^2 = 1$ donne $\\pm 1$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07",
      "order": 7,
      "title": "Équations et inéquations irrationnelles",
      "summary": "Résoudre les équations et inéquations avec une racine carrée grâce aux équivalences données par la leçon.",
      "conceptExplanation": "Pour résoudre une équation irrationnelle du type $\\sqrt{P(x)} = Q(x)$, la leçon utilise l’équivalence : $\\sqrt{P(x)} = Q(x)$ équivaut au système $Q(x) \\geq 0$ et $P(x) = (Q(x))^2$.\nPour une inéquation du type $\\sqrt{P(x)} < Q(x)$ : le système est $P(x) \\geq 0$, $Q(x) \\geq 0$ et $P(x) < (Q(x))^2$.\nPour une inéquation du type $\\sqrt{P(x)} \\geq Q(x)$ : on distingue deux cas, $Q(x) \\geq 0$ avec $P(x) \\geq (Q(x))^2$, ou bien $P(x) \\geq 0$ avec $Q(x) \\leq 0$.\nDans chaque cas, l’ensemble des solutions de l’équation ou de l’inéquation est l’ensemble des solutions du système.",
      "keyRule": "Avec une racine carrée, ne résous jamais sans conditions : signe du second membre et domaine d’abord, élévation au carré ensuite.",
      "formulas": [
        {
          "name": "Équation irrationnelle",
          "formula": "\\sqrt{P(x)} = Q(x) \\iff Q(x) \\geq 0 \\text{ et } P(x) = (Q(x))^2",
          "note": "Équivalence donnée par le point méthode de la leçon."
        },
        {
          "name": "Inéquation irrationnelle stricte",
          "formula": "\\sqrt{P(x)} < Q(x) \\iff P(x) \\geq 0,\\ Q(x) \\geq 0 \\text{ et } P(x) < (Q(x))^2",
          "note": "Les trois conditions doivent être réunies."
        }
      ],
      "workedExample": {
        "title": "Résoudre $\\sqrt{x^2 - 1} = x + 2$ (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ l’équation $\\sqrt{x^2 - 1} = x + 2$.",
        "methodSteps": [
          "L’équation équivaut au système : $x + 2 \\geq 0$ et $x^2 - 1 = (x + 2)^2$.",
          "La première condition donne $x \\in [-2 ; +\\infty[$.",
          "La seconde donne $x^2 - 1 = x^2 + 4x + 4$, soit $x = -\\frac{5}{4}$, qui appartient bien à $[-2 ; +\\infty[$."
        ],
        "conclusion": "L’ensemble des solutions est $S = \\{-\\frac{5}{4}\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une équation irrationnelle",
          "stepTheme": "Une équation irrationnelle",
          "stepBadge": "Une équation irrationnelle",
          "paragraphText": "• Une équation irrationnelle contient l’inconnue sous une racine carrée, comme $\\sqrt{P(x)} = Q(x)$.\nLa leçon la résout par une équivalence : elle la remplace par un système de conditions et d’équation sans racine.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q1",
            "type": "mcq",
            "prompt": "Une équation irrationnelle est une équation :",
            "options": [
              "Sans solution",
              "Où l’inconnue apparaît sous une racine carrée",
              "Du second degré seulement",
              "Qui se résout sans condition"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’inconnue sous la racine carrée impose une résolution par équivalence."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’équivalence de l’équation irrationnelle",
          "stepTheme": "L’équivalence de l’équation irrationnelle",
          "stepBadge": "L’équivalence de l’équation irrationnelle",
          "paragraphText": "• Point méthode de la leçon : $\\sqrt{P(x)} = Q(x)$ équivaut au système formé de $Q(x) \\geq 0$ et de $P(x) = (Q(x))^2$.\nL’ensemble des solutions de l’équation est l’ensemble des solutions de ce système.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q2",
            "type": "mcq",
            "prompt": "Pour résoudre $\\sqrt{P(x)} = Q(x)$, quel système faut-il résoudre ?",
            "options": [
              "$Q(x) \\geq 0$ et $P(x) = (Q(x))^2$",
              "$P(x) \\geq 0$ seulement",
              "$P(x) = Q(x)$",
              "$Q(x) \\leq 0$ et $P(x) = (Q(x))^2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’équivalence du point méthode : signe du second membre, puis égalité des carrés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $\\sqrt{x^2 - 1} = x + 2$",
          "stepTheme": "Résoudre $\\sqrt{x^2 - 1} = x + 2$",
          "stepBadge": "Résoudre $\\sqrt{x^2 - 1} = x + 2$",
          "paragraphText": "• Exemple de la leçon : l’équation équivaut à $x + 2 \\geq 0$ et $x^2 - 1 = (x + 2)^2$.\nLa seconde condition donne $x = -\\frac{5}{4}$, qui vérifie bien $x \\geq -2$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q3",
            "type": "mcq",
            "prompt": "Quelle est la solution de $\\sqrt{x^2 - 1} = x + 2$ ?",
            "options": [
              "$x = \\frac{5}{4}$",
              "$x = -\\frac{5}{4}$",
              "$x = -2$",
              "Aucune solution"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le système donne $x = -\\frac{5}{4}$, qui appartient à $[-2 ; +\\infty[$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Élever au carré sans condition",
          "stepTheme": "Élever au carré sans condition",
          "stepBadge": "Élever au carré sans condition",
          "paragraphText": "• Piège : élever au carré sans exiger $Q(x) \\geq 0$ peut introduire des solutions parasites.\nUne racine carrée est toujours positive ou nulle : le second membre doit l’être aussi.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q4",
            "type": "mcq",
            "prompt": "Pourquoi impose-t-on $Q(x) \\geq 0$ dans la résolution de $\\sqrt{P(x)} = Q(x)$ ?",
            "options": [
              "Parce qu’une racine carrée est toujours positive ou nulle",
              "Pour simplifier les calculs",
              "Parce que $P(x)$ est un polynôme",
              "Ce n’est pas nécessaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le membre de gauche, une racine carrée, ne peut égaler un nombre strictement négatif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L’inéquation irrationnelle stricte",
          "stepTheme": "L’inéquation irrationnelle stricte",
          "stepBadge": "L’inéquation irrationnelle stricte",
          "paragraphText": "• Point méthode de la leçon : $\\sqrt{P(x)} < Q(x)$ équivaut au système $P(x) \\geq 0$, $Q(x) \\geq 0$ et $P(x) < (Q(x))^2$.\nExemple de la leçon : $\\sqrt{x^2 + 5x + 3} < 2x + 1$ a pour ensemble de solutions $]1 ; +\\infty[$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q5",
            "type": "mcq",
            "prompt": "Quel est l’ensemble des solutions de $\\sqrt{x^2 + 5x + 3} < 2x + 1$ ?",
            "options": [
              "$]-\\infty ; 1[$",
              "$[1 ; +\\infty[$",
              "$]1 ; +\\infty[$",
              "$\\emptyset$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La résolution du système de la leçon donne $]1 ; +\\infty[$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L’inéquation irrationnelle large",
          "stepTheme": "L’inéquation irrationnelle large",
          "stepBadge": "L’inéquation irrationnelle large",
          "paragraphText": "• Point méthode de la leçon : $\\sqrt{P(x)} \\geq Q(x)$ équivaut à deux cas réunis : $Q(x) \\geq 0$ et $P(x) \\geq (Q(x))^2$, ou bien $P(x) \\geq 0$ et $Q(x) \\leq 0$.\nExemple de la leçon : $\\sqrt{2 - x} \\geq x + 4$ a pour ensemble de solutions $]-\\infty ; -2]$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q6",
            "type": "mcq",
            "prompt": "Quel est l’ensemble des solutions de $\\sqrt{2 - x} \\geq x + 4$ ?",
            "options": [
              "$[-2 ; +\\infty[$",
              "$]-\\infty ; -2]$",
              "$\\{-2\\}$",
              "$[-4 ; -2]$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux cas de l’équivalence donnent $[-4 ; -2]$ et $]-\\infty ; -4]$, dont la réunion est $]-\\infty ; -2]$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "La démarche complète",
          "stepTheme": "La démarche complète",
          "stepBadge": "La démarche complète",
          "paragraphText": "• Méthode récapitulative de la leçon : écrire l’équivalence adaptée au type d’équation ou d’inéquation, résoudre le système obtenu, puis conclure par l’ensemble des solutions.\nOn ne retient que les valeurs qui satisfont toutes les conditions du système.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q7",
            "type": "mcq",
            "prompt": "Après avoir résolu le système d’une équation irrationnelle, que retient-on comme solutions ?",
            "options": [
              "Toutes les valeurs trouvées après élévation au carré",
              "Uniquement les valeurs qui satisfont toutes les conditions du système",
              "Seulement les valeurs positives",
              "Seulement les entiers"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une solution du système doit vérifier à la fois les conditions de signe et l’équation élevée au carré."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q1",
          "type": "mcq",
          "prompt": "Une équation irrationnelle est une équation :",
          "options": [
            "Sans solution",
            "Où l’inconnue apparaît sous une racine carrée",
            "Du second degré seulement",
            "Qui se résout sans condition"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’inconnue sous la racine carrée impose une résolution par équivalence."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q2",
          "type": "mcq",
          "prompt": "Pour résoudre $\\sqrt{P(x)} = Q(x)$, quel système faut-il résoudre ?",
          "options": [
            "$Q(x) \\geq 0$ et $P(x) = (Q(x))^2$",
            "$P(x) \\geq 0$ seulement",
            "$P(x) = Q(x)$",
            "$Q(x) \\leq 0$ et $P(x) = (Q(x))^2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’équivalence du point méthode : signe du second membre, puis égalité des carrés."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q3",
          "type": "mcq",
          "prompt": "Quelle est la solution de $\\sqrt{x^2 - 1} = x + 2$ ?",
          "options": [
            "$x = \\frac{5}{4}$",
            "$x = -\\frac{5}{4}$",
            "$x = -2$",
            "Aucune solution"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le système donne $x = -\\frac{5}{4}$, qui appartient à $[-2 ; +\\infty[$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q4",
          "type": "mcq",
          "prompt": "Pourquoi impose-t-on $Q(x) \\geq 0$ dans la résolution de $\\sqrt{P(x)} = Q(x)$ ?",
          "options": [
            "Parce qu’une racine carrée est toujours positive ou nulle",
            "Pour simplifier les calculs",
            "Parce que $P(x)$ est un polynôme",
            "Ce n’est pas nécessaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le membre de gauche, une racine carrée, ne peut égaler un nombre strictement négatif."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q5",
          "type": "mcq",
          "prompt": "Quel est l’ensemble des solutions de $\\sqrt{x^2 + 5x + 3} < 2x + 1$ ?",
          "options": [
            "$]-\\infty ; 1[$",
            "$[1 ; +\\infty[$",
            "$]1 ; +\\infty[$",
            "$\\emptyset$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La résolution du système de la leçon donne $]1 ; +\\infty[$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q6",
          "type": "mcq",
          "prompt": "Quel est l’ensemble des solutions de $\\sqrt{2 - x} \\geq x + 4$ ?",
          "options": [
            "$[-2 ; +\\infty[$",
            "$]-\\infty ; -2]$",
            "$\\{-2\\}$",
            "$[-4 ; -2]$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux cas de l’équivalence donnent $[-4 ; -2]$ et $]-\\infty ; -4]$, dont la réunion est $]-\\infty ; -2]$."
        },
        {
          "id": "premiere_d_maths_numerique_l01_equations_inequations_second_degre_p07_q7",
          "type": "mcq",
          "prompt": "Après avoir résolu le système d’une équation irrationnelle, que retient-on comme solutions ?",
          "options": [
            "Toutes les valeurs trouvées après élévation au carré",
            "Uniquement les valeurs qui satisfont toutes les conditions du système",
            "Seulement les valeurs positives",
            "Seulement les entiers"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une solution du système doit vérifier à la fois les conditions de signe et l’équation élevée au carré."
        }
      ]
    }
  ]
};
