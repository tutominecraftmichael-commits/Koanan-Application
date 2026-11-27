import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Équations et inéquations du second degré » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Équations et inéquations du second degré » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L01_EQUATIONS_INEQUATIONS_SECOND_DEGRE: CurriculumChapter = {
  "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 1,
  "title": "Leçon 1 : Équations et inéquations du second degré",
  "summary": "La leçon définit le discriminant d'un polynôme du second degré, la résolution algébrique et graphique des équations, la somme et le produit des solutions, le signe d'un polynôme, les inéquations, puis les équations bicarrées et irrationnelles qui s'y ramènent.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Équations et inéquations du second degré » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01",
      "order": 1,
      "title": "Discriminant et zéros d'un polynôme du second degré",
      "summary": "Définir le discriminant et déterminer, selon son signe, les zéros éventuels d'un polynôme du second degré et sa factorisation.",
      "conceptExplanation": "On considère le polynôme du second degré $P$ tel que $P(x) = ax^2 + bx + c$, où $a \\neq 0$.\nOn appelle discriminant de $P$ le nombre réel noté $\\Delta$ défini par $\\Delta = b^2 - 4ac$.\nSi $\\Delta > 0$, $P$ admet deux zéros distincts $x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}$ et $x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$, et $P(x) = a(x - x_1)(x - x_2)$.\nSi $\\Delta = 0$, $P$ admet un zéro double $x_0 = \\frac{-b}{2a}$, et $P(x) = a(x - x_0)^2$.\nSi $\\Delta < 0$, $P$ n'admet pas de zéro et $P$ n'est pas factorisable.",
      "keyRule": "Le signe du discriminant décide du nombre de zéros : deux si $\\Delta > 0$, un double si $\\Delta = 0$, aucun si $\\Delta < 0$.",
      "formulas": [
        {
          "name": "Discriminant",
          "formula": "\\Delta = b^2 - 4ac"
        },
        {
          "name": "Zéros si $\\Delta > 0$",
          "formula": "x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} \\text{ et } x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}"
        }
      ],
      "workedExample": {
        "title": "Zéros et factorisation de trois polynômes (exercice de fixation)",
        "statement": "Calcule les zéros éventuels de $P(x) = -2x^2 + x - 3$, $Q(x) = x^2 - 4x + 4$ et $R(x) = 2x^2 + 3x - 5$, puis factorise si possible chacun d'eux.",
        "methodSteps": [
          "Pour $P$ : $\\Delta = -23 < 0$, donc $P$ n'admet pas de zéro et n'est pas factorisable.",
          "Pour $Q$ : $\\Delta = 0$, donc $Q$ admet le zéro double $x_0 = 2$ et $Q(x) = (x - 2)^2$.",
          "Pour $R$ : $\\Delta = 49 > 0$, donc $R$ admet deux zéros, $-\\frac{5}{2}$ et $1$, et $R(x) = 2\\left(x + \\frac{5}{2}\\right)(x - 1)$."
        ],
        "conclusion": "Le calcul du discriminant suffit pour connaître les zéros et la factorisation éventuelle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le discriminant d'un polynôme",
          "stepTheme": "Le discriminant d'un polynôme",
          "stepBadge": "Le discriminant d'un polynôme",
          "paragraphText": "• Définition : pour $P(x) = ax^2 + bx + c$ avec $a \\neq 0$, le discriminant est le réel $\\Delta = b^2 - 4ac$.\nIl se calcule à partir des trois coefficients $a$, $b$ et $c$ du polynôme.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01_q1",
            "type": "mcq",
            "prompt": "Le discriminant du polynôme $P(x) = ax^2 + bx + c$ est :",
            "options": [
              "$\\Delta = b^2 + 4ac$",
              "$\\Delta = b^2 - 4ac$",
              "$\\Delta = 4ac - b^2$",
              "$\\Delta = b - 4ac$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $\\Delta = b^2 - 4ac$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un premier calcul de discriminant",
          "stepTheme": "Un premier calcul de discriminant",
          "stepBadge": "Un premier calcul de discriminant",
          "paragraphText": "• Exemple de la leçon : pour $P(x) = 3x^2 + 2x - 4$, on a $a = 3$, $b = 2$ et $c = -4$.\nSon discriminant vaut $\\Delta = 52$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01_q2",
            "type": "mcq",
            "prompt": "Pour $P(x) = 3x^2 + 2x - 4$, le discriminant vaut :",
            "options": [
              "$-44$",
              "$44$",
              "$52$",
              "$-52$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $2^2 - 4 \\times 3 \\times (-4) = 4 + 48 = 52$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cas où le discriminant est positif",
          "stepTheme": "Le cas où le discriminant est positif",
          "stepBadge": "Le cas où le discriminant est positif",
          "paragraphText": "• Propriété : si $\\Delta > 0$, $P$ admet deux zéros distincts $x_1$ et $x_2$.\nLa forme factorisée est alors $P(x) = a(x - x_1)(x - x_2)$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01_q3",
            "type": "mcq",
            "prompt": "Si $\\Delta > 0$, le polynôme $P$ admet :",
            "options": [
              "Un zéro double",
              "Aucun zéro",
              "Deux zéros égaux",
              "Deux zéros distincts"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un discriminant strictement positif donne deux zéros distincts."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les cas où le discriminant est nul ou négatif",
          "stepTheme": "Les cas où le discriminant est nul ou négatif",
          "stepBadge": "Les cas où le discriminant est nul ou négatif",
          "paragraphText": "• Si $\\Delta = 0$, $P$ admet un zéro double $x_0 = \\frac{-b}{2a}$ et $P(x) = a(x - x_0)^2$.\n• Si $\\Delta < 0$, $P$ n'admet pas de zéro et n'est pas factorisable.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01_q4",
            "type": "mcq",
            "prompt": "Si $\\Delta = 0$, le polynôme $P$ admet :",
            "options": [
              "Un zéro double",
              "Deux zéros distincts",
              "Aucun zéro",
              "Trois zéros"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un discriminant nul donne un unique zéro, dit double."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Factoriser le polynôme R de l'exercice",
          "stepTheme": "Factoriser le polynôme R de l'exercice",
          "stepBadge": "Factoriser le polynôme R de l'exercice",
          "paragraphText": "• Méthode : pour $R(x) = 2x^2 + 3x - 5$, le discriminant vaut $49$.\nLes zéros sont $-\\frac{5}{2}$ et $1$, d'où la factorisation avec le coefficient $a = 2$ devant.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01_q5",
            "type": "mcq",
            "prompt": "La factorisation de $R(x) = 2x^2 + 3x - 5$ est :",
            "options": [
              "$2(x - 1)\\left(x - \\frac{5}{2}\\right)$",
              "$(x + 1)\\left(x - \\frac{5}{2}\\right)$",
              "$2\\left(x + \\frac{5}{2}\\right)(x - 1)$",
              "$R$ n'est pas factorisable"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les zéros sont $-\\frac{5}{2}$ et $1$ et le coefficient dominant est $2$ : $R(x) = 2\\left(x + \\frac{5}{2}\\right)(x - 1)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le coefficient a ne doit pas être nul",
          "stepTheme": "Le coefficient a ne doit pas être nul",
          "stepBadge": "Le coefficient a ne doit pas être nul",
          "paragraphText": "• Piège : un polynôme du second degré exige $a \\neq 0$.\nSi $a = 0$, l'expression n'est plus du second degré et la formule du discriminant ne s'applique plus de la même façon.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01_q6",
            "type": "mcq",
            "prompt": "Dans $P(x) = ax^2 + bx + c$, quelle condition doit vérifier $a$ ?",
            "options": [
              "$a > 0$",
              "$a = 1$",
              "$a \\geq 0$",
              "$a \\neq 0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La définition impose $a \\neq 0$ pour un polynôme du second degré."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01_q1",
          "type": "mcq",
          "prompt": "Le discriminant du polynôme $P(x) = ax^2 + bx + c$ est :",
          "options": [
            "$\\Delta = b^2 + 4ac$",
            "$\\Delta = b^2 - 4ac$",
            "$\\Delta = 4ac - b^2$",
            "$\\Delta = b - 4ac$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $\\Delta = b^2 - 4ac$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01_q2",
          "type": "mcq",
          "prompt": "Pour $P(x) = 3x^2 + 2x - 4$, le discriminant vaut :",
          "options": [
            "$-44$",
            "$44$",
            "$52$",
            "$-52$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $2^2 - 4 \\times 3 \\times (-4) = 4 + 48 = 52$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01_q3",
          "type": "mcq",
          "prompt": "Si $\\Delta > 0$, le polynôme $P$ admet :",
          "options": [
            "Un zéro double",
            "Aucun zéro",
            "Deux zéros égaux",
            "Deux zéros distincts"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un discriminant strictement positif donne deux zéros distincts."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01_q4",
          "type": "mcq",
          "prompt": "Si $\\Delta = 0$, le polynôme $P$ admet :",
          "options": [
            "Un zéro double",
            "Deux zéros distincts",
            "Aucun zéro",
            "Trois zéros"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un discriminant nul donne un unique zéro, dit double."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01_q5",
          "type": "mcq",
          "prompt": "La factorisation de $R(x) = 2x^2 + 3x - 5$ est :",
          "options": [
            "$2(x - 1)\\left(x - \\frac{5}{2}\\right)$",
            "$(x + 1)\\left(x - \\frac{5}{2}\\right)$",
            "$2\\left(x + \\frac{5}{2}\\right)(x - 1)$",
            "$R$ n'est pas factorisable"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les zéros sont $-\\frac{5}{2}$ et $1$ et le coefficient dominant est $2$ : $R(x) = 2\\left(x + \\frac{5}{2}\\right)(x - 1)$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p01_q6",
          "type": "mcq",
          "prompt": "Dans $P(x) = ax^2 + bx + c$, quelle condition doit vérifier $a$ ?",
          "options": [
            "$a > 0$",
            "$a = 1$",
            "$a \\geq 0$",
            "$a \\neq 0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La définition impose $a \\neq 0$ pour un polynôme du second degré."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02",
      "order": 2,
      "title": "Résolution d'une équation du second degré",
      "summary": "Résoudre une équation du second degré algébriquement, par les zéros du polynôme, et graphiquement, par les abscisses des points d'intersection avec l'axe des abscisses.",
      "conceptExplanation": "On appelle équation du second degré toute équation de la forme $ax^2 + bx + c = 0$, où $a$, $b$ et $c$ sont des réels et $a \\neq 0$.\nRésoudre algébriquement cette équation revient à déterminer les zéros éventuels du polynôme $P$ tel que $P(x) = ax^2 + bx + c$.\nGraphiquement, les solutions sont les abscisses des points où la courbe représentative coupe l'axe des abscisses : deux solutions si $\\Delta > 0$, une solution unique $x_0$ si $\\Delta = 0$, aucune si $\\Delta < 0$.\nRemarque : si $a$ et $c$ sont de signes contraires, le discriminant est positif et l'équation admet deux solutions distinctes.",
      "keyRule": "Résoudre une équation du second degré, c'est chercher les zéros du polynôme associé, ou lire les abscisses d'intersection de sa courbe avec l'axe des abscisses.",
      "formulas": [
        {
          "name": "Équation du second degré",
          "formula": "ax^2 + bx + c = 0 \\text{ avec } a \\neq 0"
        }
      ],
      "workedExample": {
        "title": "Résoudre une équation par le discriminant (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ l'équation $-x^2 + x + 2 = 0$.",
        "methodSteps": [
          "Le discriminant est $\\Delta = 9$, qui est strictement positif : l'équation admet deux solutions distinctes.",
          "Les deux solutions sont $-1$ et $2$."
        ],
        "conclusion": "L'ensemble des solutions est $S = \\{-1 ; 2\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'équation du second degré",
          "stepTheme": "L'équation du second degré",
          "stepBadge": "L'équation du second degré",
          "paragraphText": "• Définition : une équation du second degré est de la forme $ax^2 + bx + c = 0$ avec $a \\neq 0$.\nExemple de la leçon : $-3x^2 + x + 4 = 0$ est une équation du second degré.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces équations est du second degré ?",
            "options": [
              "$5x + 4 = 0$",
              "$-3x^2 + x + 4 = 0$",
              "$x^3 + x = 0$",
              "$\\frac{1}{x} + 2 = 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seule l'équation en $x^2$, avec un coefficient de $x^2$ non nul, est du second degré."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La résolution algébrique",
          "stepTheme": "La résolution algébrique",
          "stepBadge": "La résolution algébrique",
          "paragraphText": "• Méthode : résoudre $ax^2 + bx + c = 0$ revient à déterminer les zéros éventuels du polynôme $P(x) = ax^2 + bx + c$.\nOn calcule donc le discriminant, puis les zéros selon son signe.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02_q2",
            "type": "mcq",
            "prompt": "Résoudre algébriquement une équation du second degré revient à :",
            "options": [
              "Tracer une courbe",
              "Calculer une dérivée",
              "Déterminer les zéros du polynôme associé",
              "Étudier un tableau de variations"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les solutions de l'équation sont exactement les zéros du polynôme associé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'équation de l'exercice de fixation",
          "stepTheme": "L'équation de l'exercice de fixation",
          "stepBadge": "L'équation de l'exercice de fixation",
          "paragraphText": "• Exercice de fixation : pour $-x^2 + x + 2 = 0$, le discriminant vaut $9$.\nL'équation admet deux solutions distinctes, $-1$ et $2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02_q3",
            "type": "mcq",
            "prompt": "L'ensemble des solutions de $-x^2 + x + 2 = 0$ est :",
            "options": [
              "$\\{1 ; 2\\}$",
              "$\\{-2 ; 1\\}$",
              "$\\{-1 ; 2\\}$",
              "$\\emptyset$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec $\\Delta = 9$, les solutions sont $-1$ et $2$, que l'on vérifie en remplaçant dans l'équation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La lecture graphique des solutions",
          "stepTheme": "La lecture graphique des solutions",
          "stepBadge": "La lecture graphique des solutions",
          "paragraphText": "• Résolution graphique : les solutions de $f(x) = 0$ sont les abscisses des points où la courbe coupe l'axe des abscisses.\nDans l'exercice de la leçon, la courbe de $f$ coupe l'axe en $3$, celle de $g$ ne le coupe pas et celle de $h$ le coupe en $-1$ et $2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02_q4",
            "type": "mcq",
            "prompt": "Si la courbe d'une fonction ne coupe pas l'axe des abscisses, l'équation $f(x) = 0$ a pour ensemble de solutions :",
            "options": [
              "$\\{0\\}$",
              "$\\mathbb{R}$",
              "Un singleton",
              "$\\emptyset$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sans point d'intersection avec l'axe des abscisses, il n'y a aucune solution."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le cas des coefficients a et c de signes contraires",
          "stepTheme": "Le cas des coefficients a et c de signes contraires",
          "stepBadge": "Le cas des coefficients a et c de signes contraires",
          "paragraphText": "• Remarque de la leçon : si $a$ et $c$ sont de signes contraires, le discriminant est positif.\nL'équation admet alors deux solutions distinctes, sans calcul supplémentaire.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02_q5",
            "type": "mcq",
            "prompt": "Si $a$ et $c$ sont de signes contraires dans $ax^2 + bx + c = 0$, alors l'équation admet :",
            "options": [
              "Aucune solution",
              "Deux solutions distinctes",
              "Une solution double",
              "Une infinité de solutions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le produit $ac$ est négatif, donc $-4ac$ est positif et $\\Delta = b^2 - 4ac > 0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre zéro du polynôme et coefficient nul",
          "stepTheme": "Confondre zéro du polynôme et coefficient nul",
          "stepBadge": "Confondre zéro du polynôme et coefficient nul",
          "paragraphText": "• Piège : un zéro d'un polynôme est une valeur de $x$ qui annule le polynôme.\nCe n'est ni le coefficient $c$, ni la valeur du discriminant : il faut résoudre l'équation associée.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02_q6",
            "type": "mcq",
            "prompt": "Un zéro du polynôme $P$ est un réel $x$ tel que :",
            "options": [
              "$P(x) = 1$",
              "$\\Delta = 0$",
              "$P(x) = 0$",
              "$a = 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par définition, $x$ est un zéro de $P$ lorsque $P(x) = 0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces équations est du second degré ?",
          "options": [
            "$5x + 4 = 0$",
            "$-3x^2 + x + 4 = 0$",
            "$x^3 + x = 0$",
            "$\\frac{1}{x} + 2 = 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seule l'équation en $x^2$, avec un coefficient de $x^2$ non nul, est du second degré."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02_q2",
          "type": "mcq",
          "prompt": "Résoudre algébriquement une équation du second degré revient à :",
          "options": [
            "Tracer une courbe",
            "Calculer une dérivée",
            "Déterminer les zéros du polynôme associé",
            "Étudier un tableau de variations"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les solutions de l'équation sont exactement les zéros du polynôme associé."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02_q3",
          "type": "mcq",
          "prompt": "L'ensemble des solutions de $-x^2 + x + 2 = 0$ est :",
          "options": [
            "$\\{1 ; 2\\}$",
            "$\\{-2 ; 1\\}$",
            "$\\{-1 ; 2\\}$",
            "$\\emptyset$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec $\\Delta = 9$, les solutions sont $-1$ et $2$, que l'on vérifie en remplaçant dans l'équation."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02_q4",
          "type": "mcq",
          "prompt": "Si la courbe d'une fonction ne coupe pas l'axe des abscisses, l'équation $f(x) = 0$ a pour ensemble de solutions :",
          "options": [
            "$\\{0\\}$",
            "$\\mathbb{R}$",
            "Un singleton",
            "$\\emptyset$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sans point d'intersection avec l'axe des abscisses, il n'y a aucune solution."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02_q5",
          "type": "mcq",
          "prompt": "Si $a$ et $c$ sont de signes contraires dans $ax^2 + bx + c = 0$, alors l'équation admet :",
          "options": [
            "Aucune solution",
            "Deux solutions distinctes",
            "Une solution double",
            "Une infinité de solutions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le produit $ac$ est négatif, donc $-4ac$ est positif et $\\Delta = b^2 - 4ac > 0$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p02_q6",
          "type": "mcq",
          "prompt": "Un zéro du polynôme $P$ est un réel $x$ tel que :",
          "options": [
            "$P(x) = 1$",
            "$\\Delta = 0$",
            "$P(x) = 0$",
            "$a = 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par définition, $x$ est un zéro de $P$ lorsque $P(x) = 0$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03",
      "order": 3,
      "title": "Somme et produit des solutions",
      "summary": "Utiliser la somme et le produit des solutions d'une équation du second degré, et déterminer deux réels dont on connaît la somme et le produit.",
      "conceptExplanation": "Propriété 1 : si l'équation $ax^2 + bx + c = 0$ possède deux solutions $x_1$ et $x_2$, distinctes ou non, alors $x_1 + x_2 = -\\frac{b}{a}$ et $x_1 x_2 = \\frac{c}{a}$.\nPropriété 2 : soient $S$ et $P$ deux réels. Si $S^2 - 4P \\geq 0$, alors il existe deux réels dont la somme est $S$ et le produit est $P$ ; ce sont les solutions de l'équation $x^2 - Sx + P = 0$.\nPoint méthode : on vérifie que $S^2 - 4P \\geq 0$, on résout $x^2 - Sx + P = 0$, et les nombres cherchés sont les solutions de cette équation.",
      "keyRule": "Connaître une solution et la somme ou le produit permet de retrouver l'autre solution sans recalculer le discriminant.",
      "formulas": [
        {
          "name": "Somme et produit",
          "formula": "x_1 + x_2 = -\\frac{b}{a} \\text{ et } x_1 x_2 = \\frac{c}{a}"
        },
        {
          "name": "Équation associée à S et P",
          "formula": "x^2 - Sx + P = 0"
        }
      ],
      "workedExample": {
        "title": "Retrouver l'autre solution (exercice de fixation)",
        "statement": "L'équation $x^2 + 5x + 4 = 0$ admet deux solutions dont l'une est $-1$. Détermine l'autre solution.",
        "methodSteps": [
          "Par la somme : $x_1 + x_2 = -5$, donc $-1 + x_2 = -5$, d'où $x_2 = -4$.",
          "Contrôle par le produit : $x_1 x_2 = 4$, et $-1 \\times (-4) = 4$."
        ],
        "conclusion": "L'autre solution est $-4$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La somme des solutions",
          "stepTheme": "La somme des solutions",
          "stepBadge": "La somme des solutions",
          "paragraphText": "• Propriété : les deux solutions $x_1$ et $x_2$ de $ax^2 + bx + c = 0$ vérifient $x_1 + x_2 = -\\frac{b}{a}$.\nC'est la première des deux relations de somme et de produit.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03_q1",
            "type": "mcq",
            "prompt": "La somme des solutions de $ax^2 + bx + c = 0$ est :",
            "options": [
              "$\\frac{b}{a}$",
              "$\\frac{c}{a}$",
              "$-\\frac{b}{a}$",
              "$-\\frac{c}{a}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La somme vaut $-\\frac{b}{a}$ ; le produit, lui, vaut $\\frac{c}{a}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le produit des solutions",
          "stepTheme": "Le produit des solutions",
          "stepBadge": "Le produit des solutions",
          "paragraphText": "• Propriété : les deux solutions vérifient aussi $x_1 x_2 = \\frac{c}{a}$.\nCes deux relations restent vraies si les deux solutions sont confondues.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03_q2",
            "type": "mcq",
            "prompt": "Le produit des solutions de $ax^2 + bx + c = 0$ est :",
            "options": [
              "$\\frac{c}{a}$",
              "$-\\frac{b}{a}$",
              "$\\frac{b}{c}$",
              "$ac$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le produit des solutions est $\\frac{c}{a}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Retrouver une solution par la somme",
          "stepTheme": "Retrouver une solution par la somme",
          "stepBadge": "Retrouver une solution par la somme",
          "paragraphText": "• Exercice de fixation : pour $x^2 + 5x + 4 = 0$, la somme des solutions vaut $-5$.\nSi l'une des solutions est $-1$, l'autre s'obtient par $-1 + x_2 = -5$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03_q3",
            "type": "mcq",
            "prompt": "Dans cet exercice, l'autre solution est :",
            "options": [
              "$-5$",
              "$4$",
              "$-1$",
              "$-4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "De $-1 + x_2 = -5$, on tire $x_2 = -5 + 1 = -4$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La condition d'existence de deux nombres",
          "stepTheme": "La condition d'existence de deux nombres",
          "stepBadge": "La condition d'existence de deux nombres",
          "paragraphText": "• Point méthode : deux réels de somme $S$ et de produit $P$ existent si $S^2 - 4P \\geq 0$.\nOn résout ensuite l'équation $x^2 - Sx + P = 0$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03_q4",
            "type": "mcq",
            "prompt": "Deux réels de somme $S$ et de produit $P$ existent lorsque :",
            "options": [
              "$S + P \\geq 0$",
              "$S^2 - 4P \\geq 0$",
              "$S^2 + 4P \\geq 0$",
              "$SP \\geq 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La condition d'existence est $S^2 - 4P \\geq 0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Somme -3 et produit -4",
          "stepTheme": "Somme -3 et produit -4",
          "stepBadge": "Somme -3 et produit -4",
          "paragraphText": "• Exercice de fixation : pour $S = -3$ et $P = -4$, on a $S^2 - 4P = 25 \\geq 0$.\nLes deux nombres sont les solutions de $x^2 + 3x - 4 = 0$, de discriminant $25$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03_q5",
            "type": "mcq",
            "prompt": "Les deux nombres de somme $-3$ et de produit $-4$ sont :",
            "options": [
              "$3$ et $-4$",
              "$1$ et $-4$",
              "$1$ et $4$",
              "$-1$ et $4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les solutions de $x^2 + 3x - 4 = 0$ sont $1$ et $-4$ : leur somme vaut $-3$ et leur produit $-4$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'équation associée n'est pas x² + Sx + P",
          "stepTheme": "L'équation associée n'est pas x² + Sx + P",
          "stepBadge": "L'équation associée n'est pas x² + Sx + P",
          "paragraphText": "• Piège : l'équation dont les solutions ont pour somme $S$ et produit $P$ est $x^2 - Sx + P = 0$.\nLe signe moins devant $S$ est essentiel : l'oublier change les deux nombres.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03_q6",
            "type": "mcq",
            "prompt": "L'équation associée à la somme $S$ et au produit $P$ est :",
            "options": [
              "$x^2 + Sx + P = 0$",
              "$x^2 - Px + S = 0$",
              "$x^2 - Sx + P = 0$",
              "$x^2 + Sx - P = 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est $x^2 - Sx + P = 0$, avec un signe moins devant le terme en $S$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03_q1",
          "type": "mcq",
          "prompt": "La somme des solutions de $ax^2 + bx + c = 0$ est :",
          "options": [
            "$\\frac{b}{a}$",
            "$\\frac{c}{a}$",
            "$-\\frac{b}{a}$",
            "$-\\frac{c}{a}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La somme vaut $-\\frac{b}{a}$ ; le produit, lui, vaut $\\frac{c}{a}$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03_q2",
          "type": "mcq",
          "prompt": "Le produit des solutions de $ax^2 + bx + c = 0$ est :",
          "options": [
            "$\\frac{c}{a}$",
            "$-\\frac{b}{a}$",
            "$\\frac{b}{c}$",
            "$ac$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le produit des solutions est $\\frac{c}{a}$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03_q3",
          "type": "mcq",
          "prompt": "Dans cet exercice, l'autre solution est :",
          "options": [
            "$-5$",
            "$4$",
            "$-1$",
            "$-4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "De $-1 + x_2 = -5$, on tire $x_2 = -5 + 1 = -4$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03_q4",
          "type": "mcq",
          "prompt": "Deux réels de somme $S$ et de produit $P$ existent lorsque :",
          "options": [
            "$S + P \\geq 0$",
            "$S^2 - 4P \\geq 0$",
            "$S^2 + 4P \\geq 0$",
            "$SP \\geq 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La condition d'existence est $S^2 - 4P \\geq 0$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03_q5",
          "type": "mcq",
          "prompt": "Les deux nombres de somme $-3$ et de produit $-4$ sont :",
          "options": [
            "$3$ et $-4$",
            "$1$ et $-4$",
            "$1$ et $4$",
            "$-1$ et $4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les solutions de $x^2 + 3x - 4 = 0$ sont $1$ et $-4$ : leur somme vaut $-3$ et leur produit $-4$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p03_q6",
          "type": "mcq",
          "prompt": "L'équation associée à la somme $S$ et au produit $P$ est :",
          "options": [
            "$x^2 + Sx + P = 0$",
            "$x^2 - Px + S = 0$",
            "$x^2 - Sx + P = 0$",
            "$x^2 + Sx - P = 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est $x^2 - Sx + P = 0$, avec un signe moins devant le terme en $S$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04",
      "order": 4,
      "title": "Signe d'un polynôme du second degré",
      "summary": "Établir le tableau de signes d'un polynôme du second degré selon le signe de son discriminant et celui du coefficient a.",
      "conceptExplanation": "Soit $P(x) = ax^2 + bx + c$ avec $a \\neq 0$ et $\\Delta$ son discriminant.\nSi $\\Delta > 0$, $P$ a deux zéros distincts $x_1 < x_2$ : $P(x)$ est du signe de $a$ à l'extérieur des zéros et du signe contraire de $a$ entre les zéros.\nSi $\\Delta = 0$, $P$ admet un zéro double $x_0$ : $P(x)$ est du signe de $a$ partout, sauf en $x_0$ où il s'annule.\nSi $\\Delta < 0$, $P$ n'admet pas de zéro : $P(x)$ est du signe de $a$ pour tout réel $x$.",
      "keyRule": "À l'extérieur des zéros, le polynôme est du signe de a ; entre les deux zéros, il est du signe contraire.",
      "formulas": [
        {
          "name": "Signe si $\\Delta > 0$",
          "formula": "\\text{ Signe de } a \\text{ à l'extérieur des zéros, signe contraire entre les zéros }"
        }
      ],
      "workedExample": {
        "title": "Signe de trois polynômes (exercice de fixation)",
        "statement": "Étudie le signe de $P(x) = 2x^2 - 8x + 6$ de zéros $1$ et $3$, de $Q(x) = -2x^2 - 8x - 11$ sans zéro, et de $R(x) = -x^2 + 10x - 25$ de zéro $5$.",
        "methodSteps": [
          "Pour $P$, $a = 2 > 0$ et $\\Delta > 0$ : $P(x) > 0$ hors de l'intervalle fermé des zéros, $P(x) < 0$ entre $1$ et $3$, et $P$ s'annule en $1$ et $3$.",
          "Pour $Q$, $a = -2 < 0$ et $\\Delta < 0$ : $Q(x) < 0$ pour tout réel $x$.",
          "Pour $R$, $a = -1 < 0$ et $\\Delta = 0$ : $R(x) < 0$ sauf en $5$, où $R$ s'annule."
        ],
        "conclusion": "Le tableau de signes dépend uniquement du signe de $\\Delta$ et de celui de $a$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le signe lorsque le discriminant est positif",
          "stepTheme": "Le signe lorsque le discriminant est positif",
          "stepBadge": "Le signe lorsque le discriminant est positif",
          "paragraphText": "• Propriété : si $\\Delta > 0$, avec $x_1 < x_2$, $P(x)$ est du signe de $a$ à l'extérieur des zéros.\nEntre les zéros, $P(x)$ est du signe contraire de $a$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04_q1",
            "type": "mcq",
            "prompt": "Si $\\Delta > 0$, entre les deux zéros, $P(x)$ est :",
            "options": [
              "Du signe de $a$",
              "Nul partout",
              "Du signe contraire de $a$",
              "Sans signe constant"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Entre les zéros, le signe est celui, contraire, de $-a$ dans le tableau de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le signe lorsque le discriminant est nul",
          "stepTheme": "Le signe lorsque le discriminant est nul",
          "stepBadge": "Le signe lorsque le discriminant est nul",
          "paragraphText": "• Propriété : si $\\Delta = 0$, $P(x)$ garde le signe de $a$ sur tout $\\mathbb{R}$.\nIl s'annule uniquement en son zéro double $x_0$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04_q2",
            "type": "mcq",
            "prompt": "Si $\\Delta = 0$, le polynôme $P$ s'annule :",
            "options": [
              "En deux points",
              "En aucun point",
              "En son zéro double uniquement",
              "Partout"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec un zéro double, $P$ ne s'annule qu'en ce point et garde ailleurs le signe de $a$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le signe lorsque le discriminant est négatif",
          "stepTheme": "Le signe lorsque le discriminant est négatif",
          "stepBadge": "Le signe lorsque le discriminant est négatif",
          "paragraphText": "• Propriété : si $\\Delta < 0$, $P$ n'a pas de zéro.\n$P(x)$ est alors du signe de $a$ pour tout réel $x$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04_q3",
            "type": "mcq",
            "prompt": "Si $\\Delta < 0$ et $a < 0$, alors pour tout réel $x$ :",
            "options": [
              "$P(x) > 0$",
              "$P(x) < 0$",
              "$P(x) = 0$",
              "Le signe de $P(x)$ change"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans zéro et avec $a < 0$, le polynôme reste strictement négatif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le signe de P entre ses zéros",
          "stepTheme": "Le signe de P entre ses zéros",
          "stepBadge": "Le signe de P entre ses zéros",
          "paragraphText": "• Exemple de la leçon : $P(x) = 2x^2 - 8x + 6$ a pour zéros $1$ et $3$, avec $a = 2 > 0$.\n$P(x)$ est strictement négatif entre $1$ et $3$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04_q4",
            "type": "mcq",
            "prompt": "Pour $P(x) = 2x^2 - 8x + 6$, sur l'intervalle ouvert entre $1$ et $3$, $P(x)$ est :",
            "options": [
              "Positif",
              "Nul",
              "Négatif",
              "Égal à $2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "À l'intérieur des zéros, le signe est contraire à celui de $a$, donc négatif ici."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le signe de R de zéro double 5",
          "stepTheme": "Le signe de R de zéro double 5",
          "stepBadge": "Le signe de R de zéro double 5",
          "paragraphText": "• Exemple de la leçon : $R(x) = -x^2 + 10x - 25$ a pour zéro $5$ et $a = -1$.\n$R(x)$ est négatif partout ailleurs et nul en $5$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04_q5",
            "type": "mcq",
            "prompt": "Pour $R(x) = -x^2 + 10x - 25$, on a $R(5)$ égal à :",
            "options": [
              "$-25$",
              "$5$",
              "$-1$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le réel $5$ est le zéro de $R$, donc $R(5) = 0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser intérieur et extérieur",
          "stepTheme": "Ne pas inverser intérieur et extérieur",
          "stepBadge": "Ne pas inverser intérieur et extérieur",
          "paragraphText": "• Piège : le signe de $a$ se retrouve à l'extérieur des zéros, pas entre eux.\nInverser les deux zones inverse tout le tableau de signes.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04_q6",
            "type": "mcq",
            "prompt": "Si $\\Delta > 0$, à l'extérieur des zéros, $P(x)$ est :",
            "options": [
              "Du signe contraire de $a$",
              "Du signe de $a$",
              "Toujours positif",
              "Toujours nul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau de la leçon donne le signe de $a$ à l'extérieur des zéros."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04_q1",
          "type": "mcq",
          "prompt": "Si $\\Delta > 0$, entre les deux zéros, $P(x)$ est :",
          "options": [
            "Du signe de $a$",
            "Nul partout",
            "Du signe contraire de $a$",
            "Sans signe constant"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Entre les zéros, le signe est celui, contraire, de $-a$ dans le tableau de la leçon."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04_q2",
          "type": "mcq",
          "prompt": "Si $\\Delta = 0$, le polynôme $P$ s'annule :",
          "options": [
            "En deux points",
            "En aucun point",
            "En son zéro double uniquement",
            "Partout"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec un zéro double, $P$ ne s'annule qu'en ce point et garde ailleurs le signe de $a$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04_q3",
          "type": "mcq",
          "prompt": "Si $\\Delta < 0$ et $a < 0$, alors pour tout réel $x$ :",
          "options": [
            "$P(x) > 0$",
            "$P(x) < 0$",
            "$P(x) = 0$",
            "Le signe de $P(x)$ change"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans zéro et avec $a < 0$, le polynôme reste strictement négatif."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04_q4",
          "type": "mcq",
          "prompt": "Pour $P(x) = 2x^2 - 8x + 6$, sur l'intervalle ouvert entre $1$ et $3$, $P(x)$ est :",
          "options": [
            "Positif",
            "Nul",
            "Négatif",
            "Égal à $2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "À l'intérieur des zéros, le signe est contraire à celui de $a$, donc négatif ici."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04_q5",
          "type": "mcq",
          "prompt": "Pour $R(x) = -x^2 + 10x - 25$, on a $R(5)$ égal à :",
          "options": [
            "$-25$",
            "$5$",
            "$-1$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le réel $5$ est le zéro de $R$, donc $R(5) = 0$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p04_q6",
          "type": "mcq",
          "prompt": "Si $\\Delta > 0$, à l'extérieur des zéros, $P(x)$ est :",
          "options": [
            "Du signe contraire de $a$",
            "Du signe de $a$",
            "Toujours positif",
            "Toujours nul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau de la leçon donne le signe de $a$ à l'extérieur des zéros."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05",
      "order": 5,
      "title": "Inéquations du second degré",
      "summary": "Définir une inéquation du second degré et la résoudre en étudiant le signe du polynôme associé.",
      "conceptExplanation": "Toute inéquation de l'un des types $P(x) > 0$, $P(x) \\geq 0$, $P(x) < 0$ ou $P(x) \\leq 0$, où $P$ est un polynôme du second degré, est appelée inéquation du second degré.\nRésoudre une telle inéquation revient à étudier le signe du polynôme $P(x)$, puis à trouver l'intervalle ou les intervalles correspondant à l'ensemble des solutions.\nExemple de la leçon : $-3x^2 + 5x - 2 > 0$ est une inéquation du second degré.",
      "keyRule": "Résoudre une inéquation du second degré, c'est lire dans le tableau de signes les intervalles où le polynôme a le signe demandé.",
      "formulas": [
        {
          "name": "Inéquation du second degré",
          "formula": "P(x) > 0 \\text{ , } P(x) \\geq 0 \\text{ , } P(x) < 0 \\text{ ou } P(x) \\leq 0"
        }
      ],
      "workedExample": {
        "title": "Trois inéquations résolues (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ les inéquations $2x^2 - 5x + 3 < 0$, $-x^2 - 4x - 4 \\geq 0$ et $x^2 + x + 2 > 0$.",
        "methodSteps": [
          "Pour la première, $\\Delta = 1$, les zéros sont $1$ et $\\frac{3}{2}$, et le polynôme est négatif entre eux : l'ensemble solution est l'intervalle ouvert de bornes $1$ et $\\frac{3}{2}$.",
          "Pour la deuxième, $\\Delta = 0$, le zéro double est $-2$ et le polynôme est négatif ailleurs : l'ensemble solution est $\\{-2\\}$.",
          "Pour la troisième, $\\Delta = -7$, le polynôme est toujours positif : l'ensemble solution est $\\mathbb{R}$."
        ],
        "conclusion": "Chaque inéquation se résout par le tableau de signes du polynôme associé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une inéquation du second degré",
          "stepTheme": "Une inéquation du second degré",
          "stepBadge": "Une inéquation du second degré",
          "paragraphText": "• Définition : une inéquation du second degré est de l'un des types $P(x) > 0$, $P(x) \\geq 0$, $P(x) < 0$ ou $P(x) \\leq 0$.\nExemple de la leçon : $-3x^2 + 5x - 2 > 0$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces relations est une inéquation du second degré ?",
            "options": [
              "$-3x^2 + 5x - 2 > 0$",
              "$2x + 1 > 0$",
              "$x^3 - 1 > 0$",
              "$5 > 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle porte sur un polynôme du second degré comparé à zéro."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La méthode de résolution",
          "stepTheme": "La méthode de résolution",
          "stepBadge": "La méthode de résolution",
          "paragraphText": "• Méthode : résoudre une inéquation du second degré revient à étudier le signe du polynôme.\nOn retient ensuite les intervalles où le signe correspond à l'inégalité demandée.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05_q2",
            "type": "mcq",
            "prompt": "Pour résoudre une inéquation du second degré, on commence par :",
            "options": [
              "Calculer une image",
              "Étudier le signe du polynôme associé",
              "Tracer la courbe entièrement",
              "Chercher un antécédent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'étude du signe donne directement les intervalles solutions."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une inéquation à discriminant positif",
          "stepTheme": "Une inéquation à discriminant positif",
          "stepBadge": "Une inéquation à discriminant positif",
          "paragraphText": "• Exercice de fixation : $2x^2 - 5x + 3 < 0$ a pour discriminant $1$ et pour zéros $1$ et $\\frac{3}{2}$.\nLe polynôme est négatif entre ses zéros.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05_q3",
            "type": "mcq",
            "prompt": "L'ensemble des solutions de $2x^2 - 5x + 3 < 0$ est l'intervalle ouvert de bornes :",
            "options": [
              "$0$ et $1$",
              "$1$ et $\\frac{3}{2}$",
              "$\\frac{3}{2}$ et $3$",
              "$-1$ et $1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le polynôme est strictement négatif entre ses zéros $1$ et $\\frac{3}{2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une inéquation à discriminant nul",
          "stepTheme": "Une inéquation à discriminant nul",
          "stepBadge": "Une inéquation à discriminant nul",
          "paragraphText": "• Exercice de fixation : $-x^2 - 4x - 4 \\geq 0$ a un discriminant nul et un zéro double $-2$.\nLe polynôme est négatif partout ailleurs, donc seule la valeur $-2$ convient.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05_q4",
            "type": "mcq",
            "prompt": "L'ensemble des solutions de $-x^2 - 4x - 4 \\geq 0$ est :",
            "options": [
              "$\\mathbb{R}$",
              "$\\emptyset$",
              "$\\{-2\\}$",
              "$\\{2\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le polynôme ne s'annule qu'en $-2$ et est négatif ailleurs : seule $-2$ rend l'inégalité large vraie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une inéquation à discriminant négatif",
          "stepTheme": "Une inéquation à discriminant négatif",
          "stepBadge": "Une inéquation à discriminant négatif",
          "paragraphText": "• Exercice de fixation : $x^2 + x + 2 > 0$ a pour discriminant $-7$.\nLe polynôme, de coefficient dominant positif, est strictement positif pour tout réel.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05_q5",
            "type": "mcq",
            "prompt": "L'ensemble des solutions de $x^2 + x + 2 > 0$ est :",
            "options": [
              "$\\emptyset$",
              "$\\mathbb{R}$",
              "$\\{2\\}$",
              "L'intervalle de bornes $-1$ et $2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans zéro et avec $a > 0$, le polynôme est toujours strictement positif : tout réel est solution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Oublier le cas du singleton",
          "stepTheme": "Oublier le cas du singleton",
          "stepBadge": "Oublier le cas du singleton",
          "paragraphText": "• Piège : avec un discriminant nul et une inégalité large, la solution peut se réduire à un seul nombre.\nIl ne faut pas conclure trop vite à l'ensemble vide parce que le polynôme ne change pas de signe.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05_q6",
            "type": "mcq",
            "prompt": "Avec $\\Delta = 0$, $a < 0$ et l'inégalité $P(x) \\geq 0$, l'ensemble solution est :",
            "options": [
              "$\\mathbb{R}$",
              "Toujours vide",
              "Réduit au zéro double",
              "Un intervalle ouvert"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le polynôme est négatif sauf en son zéro double, où il vaut zéro : seul ce point vérifie l'inégalité large."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces relations est une inéquation du second degré ?",
          "options": [
            "$-3x^2 + 5x - 2 > 0$",
            "$2x + 1 > 0$",
            "$x^3 - 1 > 0$",
            "$5 > 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle porte sur un polynôme du second degré comparé à zéro."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05_q2",
          "type": "mcq",
          "prompt": "Pour résoudre une inéquation du second degré, on commence par :",
          "options": [
            "Calculer une image",
            "Étudier le signe du polynôme associé",
            "Tracer la courbe entièrement",
            "Chercher un antécédent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'étude du signe donne directement les intervalles solutions."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05_q3",
          "type": "mcq",
          "prompt": "L'ensemble des solutions de $2x^2 - 5x + 3 < 0$ est l'intervalle ouvert de bornes :",
          "options": [
            "$0$ et $1$",
            "$1$ et $\\frac{3}{2}$",
            "$\\frac{3}{2}$ et $3$",
            "$-1$ et $1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le polynôme est strictement négatif entre ses zéros $1$ et $\\frac{3}{2}$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05_q4",
          "type": "mcq",
          "prompt": "L'ensemble des solutions de $-x^2 - 4x - 4 \\geq 0$ est :",
          "options": [
            "$\\mathbb{R}$",
            "$\\emptyset$",
            "$\\{-2\\}$",
            "$\\{2\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le polynôme ne s'annule qu'en $-2$ et est négatif ailleurs : seule $-2$ rend l'inégalité large vraie."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05_q5",
          "type": "mcq",
          "prompt": "L'ensemble des solutions de $x^2 + x + 2 > 0$ est :",
          "options": [
            "$\\emptyset$",
            "$\\mathbb{R}$",
            "$\\{2\\}$",
            "L'intervalle de bornes $-1$ et $2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans zéro et avec $a > 0$, le polynôme est toujours strictement positif : tout réel est solution."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p05_q6",
          "type": "mcq",
          "prompt": "Avec $\\Delta = 0$, $a < 0$ et l'inégalité $P(x) \\geq 0$, l'ensemble solution est :",
          "options": [
            "$\\mathbb{R}$",
            "Toujours vide",
            "Réduit au zéro double",
            "Un intervalle ouvert"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le polynôme est négatif sauf en son zéro double, où il vaut zéro : seul ce point vérifie l'inégalité large."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06",
      "order": 6,
      "title": "Équations bicarrées",
      "summary": "Définir une équation bicarrée et la résoudre par le changement d'inconnue consistant à poser X égal au carré de x.",
      "conceptExplanation": "On appelle équation bicarrée une équation du type $ax^4 + bx^2 + c = 0$, où $a$, $b$ et $c$ sont des réels avec $a \\neq 0$.\nPoint méthode : on pose $X = x^2$, on résout l'équation du second degré $aX^2 + bX + c = 0$, puis on résout, s'il y a lieu, les équations d'inconnue $x$ du type $x^2 = X$.\nExemple de la leçon : $-3x^4 + 5x^2 - 2 = 0$ est une équation bicarrée.",
      "keyRule": "Poser $X = x^2$ ramène une équation bicarrée à une équation du second degré, mais seuls les $X$ positifs ou nuls donnent des valeurs de $x$.",
      "formulas": [
        {
          "name": "Équation bicarrée",
          "formula": "ax^4 + bx^2 + c = 0 \\text{ avec } a \\neq 0"
        },
        {
          "name": "Changement d'inconnue",
          "formula": "X = x^2"
        }
      ],
      "workedExample": {
        "title": "Résoudre une équation bicarrée (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ l'équation $2x^4 - 3x^2 + 1 = 0$.",
        "methodSteps": [
          "On pose $X = x^2$ : l'équation devient $2X^2 - 3X + 1 = 0$.",
          "Son discriminant est $1$ : ses solutions sont $X = \\frac{1}{2}$ et $X = 1$.",
          "On résout $x^2 = \\frac{1}{2}$ et $x^2 = 1$, ce qui donne $x = -\\frac{\\sqrt{2}}{2}$, $x = \\frac{\\sqrt{2}}{2}$, $x = -1$ et $x = 1$."
        ],
        "conclusion": "L'ensemble des solutions comporte quatre nombres, symétriques deux à deux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'équation bicarrée",
          "stepTheme": "L'équation bicarrée",
          "stepBadge": "L'équation bicarrée",
          "paragraphText": "• Définition : une équation bicarrée est du type $ax^4 + bx^2 + c = 0$ avec $a \\neq 0$.\nElle ne contient que des puissances paires de l'inconnue : $x^4$, $x^2$ et le terme constant.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces équations est bicarrée ?",
            "options": [
              "$-3x^4 + 5x^2 - 2 = 0$",
              "$x^4 + x^3 + 1 = 0$",
              "$2x^2 + 3x + 1 = 0$",
              "$x^5 - 2 = 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle est de la forme $ax^4 + bx^2 + c = 0$, sans terme en $x$ ni en $x^3$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le changement d'inconnue",
          "stepTheme": "Le changement d'inconnue",
          "stepBadge": "Le changement d'inconnue",
          "paragraphText": "• Point méthode : on pose $X = x^2$ pour obtenir une équation du second degré en $X$.\nOn résout ensuite, pour chaque valeur de $X$ retenue, l'équation $x^2 = X$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06_q2",
            "type": "mcq",
            "prompt": "Dans la méthode de résolution d'une bicarrée, on pose :",
            "options": [
              "$X = x^4$",
              "$X = 2x$",
              "$X = x^2$",
              "$X = -x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le changement d'inconnue de la leçon est $X = x^2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les valeurs de X à retenir",
          "stepTheme": "Les valeurs de X à retenir",
          "stepBadge": "Les valeurs de X à retenir",
          "paragraphText": "• Propriété : $X = x^2$ est toujours positif ou nul.\nUn $X$ strictement négatif, solution de l'équation en $X$, ne donne aucune valeur réelle de $x$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06_q3",
            "type": "mcq",
            "prompt": "Si l'équation en $X$ donne $X = -4$, alors l'équation $x^2 = X$ admet :",
            "options": [
              "Deux solutions",
              "Une solution double",
              "Aucune solution réelle",
              "Quatre solutions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un carré réel ne peut pas valoir $-4$ : aucune solution réelle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les solutions en X de l'exercice",
          "stepTheme": "Les solutions en X de l'exercice",
          "stepBadge": "Les solutions en X de l'exercice",
          "paragraphText": "• Exercice de fixation : $2x^4 - 3x^2 + 1 = 0$ devient $2X^2 - 3X + 1 = 0$, de discriminant $1$.\nLes solutions en $X$ sont $\\frac{1}{2}$ et $1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06_q4",
            "type": "mcq",
            "prompt": "Pour $2X^2 - 3X + 1 = 0$, les solutions sont :",
            "options": [
              "$1$ et $2$",
              "$\\frac{1}{2}$ et $1$",
              "$-1$ et $\\frac{1}{2}$",
              "$2$ et $3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $\\Delta = 1$, les solutions sont $\\frac{3 - 1}{4} = \\frac{1}{2}$ et $\\frac{3 + 1}{4} = 1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les solutions finales de l'exercice",
          "stepTheme": "Les solutions finales de l'exercice",
          "stepBadge": "Les solutions finales de l'exercice",
          "paragraphText": "• Fin de l'exercice : $x^2 = 1$ donne $-1$ et $1$, et $x^2 = \\frac{1}{2}$ donne $-\\frac{\\sqrt{2}}{2}$ et $\\frac{\\sqrt{2}}{2}$.\nL'équation bicarrée admet donc quatre solutions.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06_q5",
            "type": "mcq",
            "prompt": "L'équation $2x^4 - 3x^2 + 1 = 0$ admet pour solutions :",
            "options": [
              "$-1$ et $1$ seulement",
              "$-\\sqrt{2}$, $-1$, $1$ et $\\sqrt{2}$",
              "$-1$, $-\\frac{\\sqrt{2}}{2}$, $\\frac{\\sqrt{2}}{2}$ et $1$",
              "$\\frac{1}{2}$ et $1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chacun des deux $X$ positifs, $\\frac{1}{2}$ et $1$, donne deux valeurs de $x$ opposées."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "S'arrêter aux valeurs de X",
          "stepTheme": "S'arrêter aux valeurs de X",
          "stepBadge": "S'arrêter aux valeurs de X",
          "paragraphText": "• Piège : les valeurs de $X$ ne sont pas les solutions de l'équation bicarrée.\nIl faut toujours revenir à l'inconnue $x$ en résolvant $x^2 = X$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06_q6",
            "type": "mcq",
            "prompt": "Après avoir trouvé $X = 1$, que reste-t-il à faire ?",
            "options": [
              "Rien, $1$ est la seule solution",
              "Résoudre $x^2 = 1$, ce qui donne $-1$ et $1$",
              "Calculer le discriminant de nouveau",
              "Poser un nouveau changement d'inconnue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le changement d'inconnue doit être défait : $x^2 = 1$ donne deux solutions."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces équations est bicarrée ?",
          "options": [
            "$-3x^4 + 5x^2 - 2 = 0$",
            "$x^4 + x^3 + 1 = 0$",
            "$2x^2 + 3x + 1 = 0$",
            "$x^5 - 2 = 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle est de la forme $ax^4 + bx^2 + c = 0$, sans terme en $x$ ni en $x^3$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06_q2",
          "type": "mcq",
          "prompt": "Dans la méthode de résolution d'une bicarrée, on pose :",
          "options": [
            "$X = x^4$",
            "$X = 2x$",
            "$X = x^2$",
            "$X = -x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le changement d'inconnue de la leçon est $X = x^2$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06_q3",
          "type": "mcq",
          "prompt": "Si l'équation en $X$ donne $X = -4$, alors l'équation $x^2 = X$ admet :",
          "options": [
            "Deux solutions",
            "Une solution double",
            "Aucune solution réelle",
            "Quatre solutions"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un carré réel ne peut pas valoir $-4$ : aucune solution réelle."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06_q4",
          "type": "mcq",
          "prompt": "Pour $2X^2 - 3X + 1 = 0$, les solutions sont :",
          "options": [
            "$1$ et $2$",
            "$\\frac{1}{2}$ et $1$",
            "$-1$ et $\\frac{1}{2}$",
            "$2$ et $3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $\\Delta = 1$, les solutions sont $\\frac{3 - 1}{4} = \\frac{1}{2}$ et $\\frac{3 + 1}{4} = 1$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06_q5",
          "type": "mcq",
          "prompt": "L'équation $2x^4 - 3x^2 + 1 = 0$ admet pour solutions :",
          "options": [
            "$-1$ et $1$ seulement",
            "$-\\sqrt{2}$, $-1$, $1$ et $\\sqrt{2}$",
            "$-1$, $-\\frac{\\sqrt{2}}{2}$, $\\frac{\\sqrt{2}}{2}$ et $1$",
            "$\\frac{1}{2}$ et $1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chacun des deux $X$ positifs, $\\frac{1}{2}$ et $1$, donne deux valeurs de $x$ opposées."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p06_q6",
          "type": "mcq",
          "prompt": "Après avoir trouvé $X = 1$, que reste-t-il à faire ?",
          "options": [
            "Rien, $1$ est la seule solution",
            "Résoudre $x^2 = 1$, ce qui donne $-1$ et $1$",
            "Calculer le discriminant de nouveau",
            "Poser un nouveau changement d'inconnue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le changement d'inconnue doit être défait : $x^2 = 1$ donne deux solutions."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07",
      "order": 7,
      "title": "Équations et inéquations irrationnelles",
      "summary": "Résoudre une équation ou une inéquation comportant une racine carrée grâce aux équivalences données par la leçon.",
      "conceptExplanation": "Pour résoudre une équation irrationnelle du type $\\sqrt{P(x)} = Q(x)$, on utilise l'équivalence : $Q(x) \\geq 0$ et $P(x) = (Q(x))^2$.\nPour une inéquation du type $\\sqrt{P(x)} < Q(x)$, l'équivalence est le système : $P(x) \\geq 0$, $Q(x) \\geq 0$ et $P(x) < (Q(x))^2$.\nPour une inéquation du type $\\sqrt{P(x)} \\geq Q(x)$, l'équivalence est la réunion de deux cas : soit $Q(x) \\geq 0$ et $P(x) \\geq (Q(x))^2$, soit $P(x) \\geq 0$ et $Q(x) \\leq 0$.\nL'ensemble des solutions est l'ensemble des solutions du système correspondant.",
      "keyRule": "Élever au carré n'est légitime qu'avec les conditions de signe : ce sont elles qui font des équivalences, et non de simples implications.",
      "formulas": [
        {
          "name": "Équation irrationnelle",
          "formula": "\\sqrt{P(x)} = Q(x) \\iff Q(x) \\geq 0 \\text{ et } P(x) = (Q(x))^2"
        }
      ],
      "workedExample": {
        "title": "Résoudre une équation irrationnelle (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ l'équation $\\sqrt{x^2 - 1} = x + 2$.",
        "methodSteps": [
          "L'équivalence impose $x + 2 \\geq 0$, c'est-à-dire $x$ dans l'intervalle fermé commençant en $-2$.",
          "En élevant au carré, $x^2 - 1 = x^2 + 4x + 4$, ce qui donne $x = -\\frac{5}{4}$.",
          "La valeur $-\\frac{5}{4}$ appartient à l'intervalle des $x$ supérieurs ou égaux à $-2$ : elle est retenue."
        ],
        "conclusion": "L'ensemble des solutions est $\\left\\{-\\frac{5}{4}\\right\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'équivalence pour une équation irrationnelle",
          "stepTheme": "L'équivalence pour une équation irrationnelle",
          "stepBadge": "L'équivalence pour une équation irrationnelle",
          "paragraphText": "• Point méthode : $\\sqrt{P(x)} = Q(x)$ équivaut au système formé par $Q(x) \\geq 0$ et $P(x) = (Q(x))^2$.\nLes deux conditions doivent être vérifiées en même temps.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07_q1",
            "type": "mcq",
            "prompt": "Résoudre $\\sqrt{P(x)} = Q(x)$ équivaut à résoudre le système :",
            "options": [
              "$Q(x) \\leq 0$ et $P(x) = Q(x)$",
              "$Q(x) \\geq 0$ et $P(x) = (Q(x))^2$",
              "$P(x) \\geq 0$ seulement",
              "$P(x) = (Q(x))^2$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'équivalence de la leçon associe la condition $Q(x) \\geq 0$ à l'égalité des carrés."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La solution de l'équation de l'exercice",
          "stepTheme": "La solution de l'équation de l'exercice",
          "stepBadge": "La solution de l'équation de l'exercice",
          "paragraphText": "• Exercice de fixation : $\\sqrt{x^2 - 1} = x + 2$ conduit, après élévation au carré, à $x = -\\frac{5}{4}$.\nCette valeur vérifie bien la condition $x + 2 \\geq 0$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07_q2",
            "type": "mcq",
            "prompt": "L'ensemble des solutions de $\\sqrt{x^2 - 1} = x + 2$ est :",
            "options": [
              "$\\left\\{-\\frac{5}{4}\\right\\}$",
              "$\\left\\{\\frac{5}{4}\\right\\}$",
              "$\\{-2\\}$",
              "$\\emptyset$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La seule valeur obtenue, $-\\frac{5}{4}$, respecte la condition de signe et est donc solution."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "L'inéquation avec un symbole strictement inférieur",
          "stepTheme": "L'inéquation avec un symbole strictement inférieur",
          "stepBadge": "L'inéquation avec un symbole strictement inférieur",
          "paragraphText": "• Point méthode : $\\sqrt{P(x)} < Q(x)$ équivaut au système $P(x) \\geq 0$, $Q(x) \\geq 0$ et $P(x) < (Q(x))^2$.\nLes trois conditions sont nécessaires : existence de la racine, signe du second membre et comparaison des carrés.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07_q3",
            "type": "mcq",
            "prompt": "Pour $\\sqrt{P(x)} < Q(x)$, le système équivalent comporte combien de conditions ?",
            "options": [
              "Une",
              "Deux",
              "Quatre",
              "Trois"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il y a trois conditions : $P(x) \\geq 0$, $Q(x) \\geq 0$ et $P(x) < (Q(x))^2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'inéquation irrationnelle de l'exercice",
          "stepTheme": "L'inéquation irrationnelle de l'exercice",
          "stepBadge": "L'inéquation irrationnelle de l'exercice",
          "paragraphText": "• Exercice de fixation : l'inéquation portant sur $\\sqrt{x^2 + 5x + 3}$ comparé à $2x + 1$ se résout par le système équivalent.\nL'intersection des conditions donne les réels strictement supérieurs à $1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07_q4",
            "type": "mcq",
            "prompt": "L'ensemble des solutions de cette inéquation irrationnelle est :",
            "options": [
              "L'intervalle des réels inférieurs à $1$",
              "$\\mathbb{R}$",
              "L'intervalle des réels strictement supérieurs à $1$",
              "$\\{1\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La résolution du système de la leçon aboutit aux réels strictement supérieurs à $1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'inéquation avec un symbole supérieur ou égal",
          "stepTheme": "L'inéquation avec un symbole supérieur ou égal",
          "stepBadge": "L'inéquation avec un symbole supérieur ou égal",
          "paragraphText": "• Propriété : $\\sqrt{P(x)} \\geq Q(x)$ se traite en deux cas, selon le signe de $Q(x)$.\nSi $Q(x) \\leq 0$ et $P(x) \\geq 0$, l'inégalité est automatique ; sinon, on compare les carrés.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07_q5",
            "type": "mcq",
            "prompt": "Pour $\\sqrt{P(x)} \\geq Q(x)$, le cas $Q(x) \\leq 0$ exige quelle condition sur $P$ ?",
            "options": [
              "$P(x) < 0$",
              "$P(x) = 0$",
              "Aucune condition",
              "$P(x) \\geq 0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La racine doit exister, donc $P(x) \\geq 0$ ; l'inégalité est alors vraie car le membre de gauche est positif ou nul."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Élever au carré sans condition",
          "stepTheme": "Élever au carré sans condition",
          "stepBadge": "Élever au carré sans condition",
          "paragraphText": "• Piège : élever au carré sans la condition de signe peut introduire des valeurs qui ne sont pas solutions.\nC'est pour cela que la leçon donne des équivalences, avec les conditions, et pas seulement l'égalité des carrés.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07_q6",
            "type": "mcq",
            "prompt": "Pourquoi la condition $Q(x) \\geq 0$ est-elle indispensable pour $\\sqrt{P(x)} = Q(x)$ ?",
            "options": [
              "Parce qu'une racine carrée est toujours positive ou nulle",
              "Parce que $P$ doit être un polynôme",
              "Parce que le discriminant doit être positif",
              "Parce que $x$ doit être entier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une racine carrée ne peut pas égaler un nombre strictement négatif : $Q(x)$ doit être positif ou nul."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07_q1",
          "type": "mcq",
          "prompt": "Résoudre $\\sqrt{P(x)} = Q(x)$ équivaut à résoudre le système :",
          "options": [
            "$Q(x) \\leq 0$ et $P(x) = Q(x)$",
            "$Q(x) \\geq 0$ et $P(x) = (Q(x))^2$",
            "$P(x) \\geq 0$ seulement",
            "$P(x) = (Q(x))^2$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'équivalence de la leçon associe la condition $Q(x) \\geq 0$ à l'égalité des carrés."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07_q2",
          "type": "mcq",
          "prompt": "L'ensemble des solutions de $\\sqrt{x^2 - 1} = x + 2$ est :",
          "options": [
            "$\\left\\{-\\frac{5}{4}\\right\\}$",
            "$\\left\\{\\frac{5}{4}\\right\\}$",
            "$\\{-2\\}$",
            "$\\emptyset$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La seule valeur obtenue, $-\\frac{5}{4}$, respecte la condition de signe et est donc solution."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07_q3",
          "type": "mcq",
          "prompt": "Pour $\\sqrt{P(x)} < Q(x)$, le système équivalent comporte combien de conditions ?",
          "options": [
            "Une",
            "Deux",
            "Quatre",
            "Trois"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il y a trois conditions : $P(x) \\geq 0$, $Q(x) \\geq 0$ et $P(x) < (Q(x))^2$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07_q4",
          "type": "mcq",
          "prompt": "L'ensemble des solutions de cette inéquation irrationnelle est :",
          "options": [
            "L'intervalle des réels inférieurs à $1$",
            "$\\mathbb{R}$",
            "L'intervalle des réels strictement supérieurs à $1$",
            "$\\{1\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La résolution du système de la leçon aboutit aux réels strictement supérieurs à $1$."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07_q5",
          "type": "mcq",
          "prompt": "Pour $\\sqrt{P(x)} \\geq Q(x)$, le cas $Q(x) \\leq 0$ exige quelle condition sur $P$ ?",
          "options": [
            "$P(x) < 0$",
            "$P(x) = 0$",
            "Aucune condition",
            "$P(x) \\geq 0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La racine doit exister, donc $P(x) \\geq 0$ ; l'inégalité est alors vraie car le membre de gauche est positif ou nul."
        },
        {
          "id": "premiere_c_maths_numerique_l01_equations_inequations_second_degre_p07_q6",
          "type": "mcq",
          "prompt": "Pourquoi la condition $Q(x) \\geq 0$ est-elle indispensable pour $\\sqrt{P(x)} = Q(x)$ ?",
          "options": [
            "Parce qu'une racine carrée est toujours positive ou nulle",
            "Parce que $P$ doit être un polynôme",
            "Parce que le discriminant doit être positif",
            "Parce que $x$ doit être entier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une racine carrée ne peut pas égaler un nombre strictement négatif : $Q(x)$ doit être positif ou nul."
        }
      ]
    }
  ]
};
