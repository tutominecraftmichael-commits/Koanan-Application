import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 1 : Équations et inéquations dans ℝ » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=865
export const MATHS_1ERE_A_L01_EQUATIONS_INEQUATIONS: CurriculumChapter = {
  "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r",
  "subjectId": "maths",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 1,
  "title": "Leçon 1 : Équations et inéquations dans ℝ",
  "summary": "À partir du terrain rectangulaire de la coopérative scolaire dont l'aire doit atteindre $88$, on étudie les polynômes du second degré, le discriminant, la résolution et la factorisation, le signe, puis les équations et inéquations faisant intervenir un quotient.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=865",
  "points": [
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01",
      "order": 1,
      "title": "Polynôme du second degré",
      "summary": "Reconnaître un polynôme du second degré et identifier ses coefficients $a$, $b$ et $c$.",
      "conceptExplanation": "Toute expression de la forme $ax^2 + bx + c$, où $a$, $b$ et $c$ sont des nombres réels et $a \\neq 0$, est appelée polynôme du second degré.\nLe coefficient du terme de degré $2$ est $a$, le coefficient du terme de degré $1$ est $b$ et le coefficient du terme de degré $0$ est $c$.\nExemples de la leçon : $x^2 + 4x + 3$ a pour coefficients $a = 1$, $b = 4$ et $c = 3$ ; $4x^2$ a pour coefficients $a = 4$, $b = 0$ et $c = 0$ ; $3x^2 - 1$ a pour coefficients $a = 3$, $b = 0$ et $c = -1$.",
      "keyRule": "Toujours écrire le polynôme sous la forme $ax^2 + bx + c$ avec $a \\neq 0$ avant de lire ses coefficients.",
      "formulas": [
        {
          "name": "Forme générale",
          "formula": "ax^2 + bx + c,\\quad a \\neq 0",
          "note": "$a$ est le coefficient de $x^2$, $b$ celui de $x$ et $c$ le terme constant."
        }
      ],
      "workedExample": {
        "title": "Lire les coefficients (exercice de fixation)",
        "statement": "Trouve les réels $a$, $b$ et $c$ pour chacun des polynômes suivants : $-4x^2 + x + 10$ ; $x^2 + 3x$ ; $5x^2 - 4$ ; $-10x^2$.",
        "methodSteps": [
          "Pour $-4x^2 + x + 10$ : $a = -4$, $b = 1$ et $c = 10$.",
          "Pour $x^2 + 3x$ : $a = 1$, $b = 3$ et $c = 0$.",
          "Pour $5x^2 - 4$ : $a = 5$, $b = 0$ et $c = -4$.",
          "Pour $-10x^2$ : $a = -10$, $b = 0$ et $c = 0$."
        ],
        "conclusion": "Un terme absent a pour coefficient $0$ ; seul le coefficient $a$ ne peut jamais être nul."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La forme générale",
          "stepTheme": "La forme générale",
          "stepBadge": "La forme générale",
          "paragraphText": "• Définition : toute expression de la forme $ax^2 + bx + c$, où $a$, $b$ et $c$ sont des nombres réels et $a \\neq 0$, est appelée polynôme du second degré.\nLe coefficient du terme de degré $2$ est $a$, celui du terme de degré $1$ est $b$ et celui du terme de degré $0$ est $c$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01_q1",
            "type": "mcq",
            "prompt": "Quelle condition le coefficient $a$ doit-il vérifier pour que $ax^2 + bx + c$ soit un polynôme du second degré ?",
            "options": [
              "$a = 0$",
              "$a > 0$",
              "$a \\neq 0$",
              "$a = 1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La définition impose $a \\neq 0$ : sans terme en $x^2$, l'expression n'est plus du second degré."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Identifier les coefficients",
          "stepTheme": "Identifier les coefficients",
          "stepBadge": "Identifier les coefficients",
          "paragraphText": "• Exemple de la leçon : pour le polynôme $x^2 + 4x + 3$, les coefficients sont $a = 1$, $b = 4$ et $c = 3$.\nOn lit $a$ devant $x^2$, $b$ devant $x$ et $c$ pour le terme constant.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01_q2",
            "type": "mcq",
            "prompt": "Quels sont les coefficients du polynôme $x^2 + 4x + 3$ ?",
            "options": [
              "$a = 1$, $b = 4$ et $c = 3$",
              "$a = 3$, $b = 4$ et $c = 1$",
              "$a = 1$, $b = 3$ et $c = 4$",
              "$a = 4$, $b = 1$ et $c = 3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le coefficient de $x^2$ est $1$, celui de $x$ est $4$ et le terme constant est $3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Un coefficient peut être nul, sauf a",
          "stepTheme": "Un coefficient peut être nul, sauf a",
          "stepBadge": "Un coefficient peut être nul, sauf a",
          "paragraphText": "• Exemple de la leçon : les coefficients de $3x^2 - 1$ sont $a = 3$, $b = 0$ et $c = -1$.\nIl n'y a pas de terme en $x$ : le coefficient $b$ vaut donc $0$, ce qui est autorisé.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01_q3",
            "type": "mcq",
            "prompt": "Quels sont les coefficients du polynôme $3x^2 - 1$ ?",
            "options": [
              "$a = 3$, $b = -1$ et $c = 0$",
              "$a = -1$, $b = 0$ et $c = 3$",
              "$a = 3$, $b = 1$ et $c = -1$",
              "$a = 3$, $b = 0$ et $c = -1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On écrit $3x^2 + 0x - 1$ : $a = 3$, $b = 0$ et $c = -1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le cas du monôme",
          "stepTheme": "Le cas du monôme",
          "stepBadge": "Le cas du monôme",
          "paragraphText": "• Exemple de la leçon : $4x^2$ est un polynôme du second degré, de coefficients $a = 4$, $b = 0$ et $c = 0$.\nMéthode : compléter mentalement la forme $ax^2 + bx + c$ avec des zéros pour les termes absents.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01_q4",
            "type": "mcq",
            "prompt": "Quels sont les coefficients du polynôme $4x^2$ ?",
            "options": [
              "$a = 4$, $b = 4$ et $c = 4$",
              "$a = 4$, $b = 0$ et $c = 0$",
              "$a = 0$, $b = 0$ et $c = 4$",
              "Ce n'est pas un polynôme du second degré"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il n'y a ni terme en $x$ ni terme constant : $b = 0$ et $c = 0$, et $a = 4 \\neq 0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le piège du coefficient a nul",
          "stepTheme": "Le piège du coefficient a nul",
          "stepBadge": "Le piège du coefficient a nul",
          "paragraphText": "• Piège : si $a = 0$, l'expression se réduit à $bx + c$, qui est du premier degré.\nAinsi $0x^2 + 3x + 1$, c'est-à-dire $3x + 1$, n'est pas un polynôme du second degré.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01_q5",
            "type": "mcq",
            "prompt": "L'expression $0x^2 + 3x + 1$ est-elle un polynôme du second degré ?",
            "options": [
              "Non, car $a = 0$",
              "Oui, car elle s'écrit avec un terme en $x^2$",
              "Oui, car $b$ et $c$ sont non nuls",
              "Non, car $c = 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $a = 0$, le terme en $x^2$ disparaît : il reste un polynôme du premier degré."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lire les coefficients avec des signes",
          "stepTheme": "Lire les coefficients avec des signes",
          "stepBadge": "Lire les coefficients avec des signes",
          "paragraphText": "• Exemple de l'exercice de fixation : pour $-4x^2 + x + 10$, les coefficients sont $a = -4$, $b = 1$ et $c = 10$.\nAttention au signe de $a$ et au coefficient $1$ du terme en $x$, souvent invisible.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01_q6",
            "type": "mcq",
            "prompt": "Quel est le coefficient $c$ du polynôme $-4x^2 + x + 10$ ?",
            "options": [
              "$-4$",
              "$1$",
              "$10$",
              "$0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le terme constant, coefficient du terme de degré $0$, est $10$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01_q1",
          "type": "mcq",
          "prompt": "Quelle condition le coefficient $a$ doit-il vérifier pour que $ax^2 + bx + c$ soit un polynôme du second degré ?",
          "options": [
            "$a = 0$",
            "$a > 0$",
            "$a \\neq 0$",
            "$a = 1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La définition impose $a \\neq 0$ : sans terme en $x^2$, l'expression n'est plus du second degré."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01_q2",
          "type": "mcq",
          "prompt": "Quels sont les coefficients du polynôme $x^2 + 4x + 3$ ?",
          "options": [
            "$a = 1$, $b = 4$ et $c = 3$",
            "$a = 3$, $b = 4$ et $c = 1$",
            "$a = 1$, $b = 3$ et $c = 4$",
            "$a = 4$, $b = 1$ et $c = 3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le coefficient de $x^2$ est $1$, celui de $x$ est $4$ et le terme constant est $3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01_q3",
          "type": "mcq",
          "prompt": "Quels sont les coefficients du polynôme $3x^2 - 1$ ?",
          "options": [
            "$a = 3$, $b = -1$ et $c = 0$",
            "$a = -1$, $b = 0$ et $c = 3$",
            "$a = 3$, $b = 1$ et $c = -1$",
            "$a = 3$, $b = 0$ et $c = -1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On écrit $3x^2 + 0x - 1$ : $a = 3$, $b = 0$ et $c = -1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01_q4",
          "type": "mcq",
          "prompt": "Quels sont les coefficients du polynôme $4x^2$ ?",
          "options": [
            "$a = 4$, $b = 4$ et $c = 4$",
            "$a = 4$, $b = 0$ et $c = 0$",
            "$a = 0$, $b = 0$ et $c = 4$",
            "Ce n'est pas un polynôme du second degré"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il n'y a ni terme en $x$ ni terme constant : $b = 0$ et $c = 0$, et $a = 4 \\neq 0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01_q5",
          "type": "mcq",
          "prompt": "L'expression $0x^2 + 3x + 1$ est-elle un polynôme du second degré ?",
          "options": [
            "Non, car $a = 0$",
            "Oui, car elle s'écrit avec un terme en $x^2$",
            "Oui, car $b$ et $c$ sont non nuls",
            "Non, car $c = 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $a = 0$, le terme en $x^2$ disparaît : il reste un polynôme du premier degré."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p01_q6",
          "type": "mcq",
          "prompt": "Quel est le coefficient $c$ du polynôme $-4x^2 + x + 10$ ?",
          "options": [
            "$-4$",
            "$1$",
            "$10$",
            "$0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le terme constant, coefficient du terme de degré $0$, est $10$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02",
      "order": 2,
      "title": "Le discriminant",
      "summary": "Calculer le discriminant $\\Delta = b^2 - 4ac$ d'un polynôme ou d'une équation du second degré.",
      "conceptExplanation": "Soit l'équation du second degré $ax^2 + bx + c = 0$ où $a \\neq 0$. Le nombre réel noté $\\Delta$ tel que $\\Delta = b^2 - 4ac$ est appelé le discriminant de cette équation. $\\Delta$ est aussi appelé le discriminant du polynôme du second degré $ax^2 + bx + c$.\nExemple : pour $x^2 + 4x + 3 = 0$, $\\Delta = 4^2 - 4 \\times 1 \\times 3 = 4$.\nExercice de fixation : le discriminant de $2x^2 - 3x + 1$ est $1$ ; celui de $x^2 - 4x + 4$ est $0$ ; celui de $x^2 + x + 1$ est $-3$.",
      "keyRule": "Avant tout calcul de discriminant, identifier soigneusement $a$, $b$ et $c$, avec leurs signes.",
      "formulas": [
        {
          "name": "Discriminant",
          "formula": "\\Delta = b^2 - 4ac",
          "note": "$a$, $b$ et $c$ sont les coefficients du polynôme $ax^2 + bx + c$."
        }
      ],
      "workedExample": {
        "title": "Trois discriminants (exercice de fixation)",
        "statement": "Calcule le discriminant de chacun des polynômes suivants : $2x^2 - 3x + 1$ ; $x^2 - 4x + 4$ ; $x^2 + x + 1$.",
        "methodSteps": [
          "Pour $2x^2 - 3x + 1$ : $\\Delta = (-3)^2 - 4 \\times 2 \\times 1 = 1$.",
          "Pour $x^2 - 4x + 4$ : $\\Delta = (-4)^2 - 4 \\times 1 \\times 4 = 0$.",
          "Pour $x^2 + x + 1$ : $\\Delta = 1^2 - 4 \\times 1 \\times 1 = -3$."
        ],
        "conclusion": "Les trois discriminants valent respectivement $1$, $0$ et $-3$ : un de chaque signe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule du discriminant",
          "stepTheme": "La formule du discriminant",
          "stepBadge": "La formule du discriminant",
          "paragraphText": "• Définition : pour l'équation du second degré $ax^2 + bx + c = 0$ avec $a \\neq 0$, le nombre réel $\\Delta = b^2 - 4ac$ est appelé le discriminant de cette équation.\nC'est aussi le discriminant du polynôme $ax^2 + bx + c$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02_q1",
            "type": "mcq",
            "prompt": "Quelle est la formule du discriminant d'un polynôme du second degré $ax^2 + bx + c$ ?",
            "options": [
              "$\\Delta = b^2 + 4ac$",
              "$\\Delta = b^2 - 4ac$",
              "$\\Delta = 4ac - b^2$",
              "$\\Delta = b - 4ac$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le discriminant est $\\Delta = b^2 - 4ac$, par définition de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un premier calcul de discriminant",
          "stepTheme": "Un premier calcul de discriminant",
          "stepBadge": "Un premier calcul de discriminant",
          "paragraphText": "• Exemple de la leçon : pour l'équation $x^2 + 4x + 3 = 0$, on a $a = 1$, $b = 4$ et $c = 3$.\nLe calcul donne $\\Delta = 4^2 - 4 \\times 1 \\times 3 = 4$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02_q2",
            "type": "mcq",
            "prompt": "Que vaut le discriminant du polynôme $x^2 + 4x + 3$ ?",
            "options": [
              "$16$",
              "$28$",
              "$-4$",
              "$4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $\\Delta = 4^2 - 4 \\times 1 \\times 3 = 16 - 12 = 4$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Identifier a, b et c avant de calculer",
          "stepTheme": "Identifier a, b et c avant de calculer",
          "stepBadge": "Identifier a, b et c avant de calculer",
          "paragraphText": "• Méthode : identifier d'abord $a$, $b$ et $c$, puis appliquer $\\Delta = b^2 - 4ac$.\nPour $2x^2 - 3x + 1$, on a $a = 2$, $b = -3$ et $c = 1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02_q3",
            "type": "mcq",
            "prompt": "Que vaut le discriminant du polynôme $2x^2 - 3x + 1$ ?",
            "options": [
              "$17$",
              "$-1$",
              "$1$",
              "$-23$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $\\Delta = (-3)^2 - 4 \\times 2 \\times 1 = 9 - 8 = 1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le carré d'un nombre négatif",
          "stepTheme": "Le carré d'un nombre négatif",
          "stepBadge": "Le carré d'un nombre négatif",
          "paragraphText": "• Piège : le carré de $b$ est toujours positif ou nul, même quand $b$ est négatif.\nPour $x^2 - 4x + 4$, $b = -4$ et $(-4)^2 = 16$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02_q4",
            "type": "mcq",
            "prompt": "Que vaut le discriminant du polynôme $x^2 - 4x + 4$ ?",
            "options": [
              "$0$",
              "$32$",
              "$16$",
              "$-32$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $\\Delta = (-4)^2 - 4 \\times 1 \\times 4 = 16 - 16 = 0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un discriminant négatif",
          "stepTheme": "Un discriminant négatif",
          "stepBadge": "Un discriminant négatif",
          "paragraphText": "• Exemple de l'exercice de fixation : pour le polynôme $x^2 + x + 1$, on a $a = 1$, $b = 1$ et $c = 1$.\nLe discriminant obtenu est négatif.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02_q5",
            "type": "mcq",
            "prompt": "Que vaut le discriminant du polynôme $x^2 + x + 1$ ?",
            "options": [
              "$5$",
              "$3$",
              "$-5$",
              "$-3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $\\Delta = 1^2 - 4 \\times 1 \\times 1 = 1 - 4 = -3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Trois signes possibles",
          "stepTheme": "Trois signes possibles",
          "stepBadge": "Trois signes possibles",
          "paragraphText": "• Le discriminant d'un polynôme du second degré peut être strictement positif, nul ou strictement négatif.\nLa leçon a donné un exemple de chaque cas : $4$ pour $x^2 + 4x + 3$, $0$ pour $x^2 - 4x + 4$ et $-3$ pour $x^2 + x + 1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02_q6",
            "type": "mcq",
            "prompt": "Lequel de ces polynômes a un discriminant nul ?",
            "options": [
              "$x^2 + 4x + 3$",
              "$x^2 - 4x + 4$",
              "$x^2 + x + 1$",
              "$2x^2 - 3x + 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour $x^2 - 4x + 4$, $\\Delta = 16 - 16 = 0$ ; les autres valent $4$, $-3$ et $1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02_q1",
          "type": "mcq",
          "prompt": "Quelle est la formule du discriminant d'un polynôme du second degré $ax^2 + bx + c$ ?",
          "options": [
            "$\\Delta = b^2 + 4ac$",
            "$\\Delta = b^2 - 4ac$",
            "$\\Delta = 4ac - b^2$",
            "$\\Delta = b - 4ac$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le discriminant est $\\Delta = b^2 - 4ac$, par définition de la leçon."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02_q2",
          "type": "mcq",
          "prompt": "Que vaut le discriminant du polynôme $x^2 + 4x + 3$ ?",
          "options": [
            "$16$",
            "$28$",
            "$-4$",
            "$4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $\\Delta = 4^2 - 4 \\times 1 \\times 3 = 16 - 12 = 4$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02_q3",
          "type": "mcq",
          "prompt": "Que vaut le discriminant du polynôme $2x^2 - 3x + 1$ ?",
          "options": [
            "$17$",
            "$-1$",
            "$1$",
            "$-23$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $\\Delta = (-3)^2 - 4 \\times 2 \\times 1 = 9 - 8 = 1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02_q4",
          "type": "mcq",
          "prompt": "Que vaut le discriminant du polynôme $x^2 - 4x + 4$ ?",
          "options": [
            "$0$",
            "$32$",
            "$16$",
            "$-32$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $\\Delta = (-4)^2 - 4 \\times 1 \\times 4 = 16 - 16 = 0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02_q5",
          "type": "mcq",
          "prompt": "Que vaut le discriminant du polynôme $x^2 + x + 1$ ?",
          "options": [
            "$5$",
            "$3$",
            "$-5$",
            "$-3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $\\Delta = 1^2 - 4 \\times 1 \\times 1 = 1 - 4 = -3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p02_q6",
          "type": "mcq",
          "prompt": "Lequel de ces polynômes a un discriminant nul ?",
          "options": [
            "$x^2 + 4x + 3$",
            "$x^2 - 4x + 4$",
            "$x^2 + x + 1$",
            "$2x^2 - 3x + 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour $x^2 - 4x + 4$, $\\Delta = 16 - 16 = 0$ ; les autres valent $4$, $-3$ et $1$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03",
      "order": 3,
      "title": "Résolution d'une équation du second degré",
      "summary": "Résoudre une équation du second degré dans $\\mathbb{R}$ à l'aide du signe du discriminant.",
      "conceptExplanation": "Pour résoudre dans $\\mathbb{R}$ une équation du second degré $ax^2 + bx + c = 0$ avec $a \\neq 0$, on calcule le discriminant $\\Delta = b^2 - 4ac$, puis on utilise le tableau suivant : si $\\Delta < 0$, l'équation n'a pas de solution dans $\\mathbb{R}$ ; si $\\Delta = 0$, elle a une solution unique $x_0 = \\frac{-b}{2a}$ ; si $\\Delta > 0$, elle a deux solutions distinctes $x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}$ et $x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$.\nLorsqu'elles existent, ces solutions sont appelées les zéros ou les racines du polynôme.",
      "keyRule": "Le signe du discriminant décide du nombre de solutions : négatif, aucune ; nul, une seule ; positif, deux distinctes.",
      "formulas": [
        {
          "name": "Solution unique si le discriminant est nul",
          "formula": "x_0 = \\frac{-b}{2a}",
          "note": "Cas $\\Delta = 0$."
        },
        {
          "name": "Deux solutions si le discriminant est positif",
          "formula": "x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} \\quad ; \\quad x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}",
          "note": "Cas $\\Delta > 0$."
        }
      ],
      "workedExample": {
        "title": "Trois équations, trois cas (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ les équations $2x^2 - 5x + 3 = 0$, $2x^2 - 4x + 2 = 0$ et $x^2 - x + 7 = 0$.",
        "methodSteps": [
          "Pour $2x^2 - 5x + 3 = 0$ : $\\Delta = 1$, positif, deux solutions $1$ et $\\frac{3}{2}$.",
          "Pour $2x^2 - 4x + 2 = 0$ : $\\Delta = 0$, solution unique $x_0 = 1$.",
          "Pour $x^2 - x + 7 = 0$ : $\\Delta = -27$, négatif, aucune solution."
        ],
        "conclusion": "Chaque signe du discriminant donne un cas différent : deux solutions, une solution, aucune solution."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les zéros ou racines",
          "stepTheme": "Les zéros ou racines",
          "stepBadge": "Les zéros ou racines",
          "paragraphText": "• Remarque de la leçon : lorsqu'elles existent, les solutions de l'équation $ax^2 + bx + c = 0$ sont appelées les zéros ou les racines du polynôme $ax^2 + bx + c$.\nRésoudre l'équation et chercher les zéros du polynôme sont donc la même tâche.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03_q1",
            "type": "mcq",
            "prompt": "Comment appelle-t-on les solutions d'une équation du second degré par rapport à son polynôme ?",
            "options": [
              "Ses zéros ou ses racines",
              "Ses coefficients",
              "Son discriminant",
              "Ses facteurs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon appelle ces solutions les zéros ou les racines du polynôme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cas où le discriminant est négatif",
          "stepTheme": "Le cas où le discriminant est négatif",
          "stepBadge": "Le cas où le discriminant est négatif",
          "paragraphText": "• Si $\\Delta < 0$, l'équation n'a pas de solution dans $\\mathbb{R}$.\nC'est le cas de l'équation $x^2 - x + 7 = 0$, dont le discriminant vaut $-27$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03_q2",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $x^2 - x + 7 = 0$ ?",
            "options": [
              "$\\{7\\}$",
              "$\\{-1 ; 7\\}$",
              "L'ensemble vide",
              "$\\{1\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Son discriminant vaut $1 - 28 = -27$, qui est négatif : l'équation n'a pas de solution dans $\\mathbb{R}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cas où le discriminant est nul",
          "stepTheme": "Le cas où le discriminant est nul",
          "stepBadge": "Le cas où le discriminant est nul",
          "paragraphText": "• Si $\\Delta = 0$, l'équation a une solution unique $x_0 = \\frac{-b}{2a}$.\nPour $2x^2 - 4x + 2 = 0$, le discriminant est nul et la solution est $x_0 = 1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $2x^2 - 4x + 2 = 0$ ?",
            "options": [
              "$\\{2\\}$",
              "$\\{1\\}$",
              "$\\{-1 ; 1\\}$",
              "L'ensemble vide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le discriminant est nul, donc la solution unique est $x_0 = \\frac{4}{4} = 1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le cas où le discriminant est positif",
          "stepTheme": "Le cas où le discriminant est positif",
          "stepBadge": "Le cas où le discriminant est positif",
          "paragraphText": "• Si $\\Delta > 0$, l'équation a deux solutions distinctes $x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}$ et $x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$.\nMéthode : calculer $\\Delta$, lire son signe, puis appliquer le tableau de la leçon.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $2x^2 - 5x + 3 = 0$ ?",
            "options": [
              "$\\{-1 ; -\\frac{3}{2}\\}$",
              "$\\{\\frac{3}{2}\\}$",
              "L'ensemble vide",
              "$\\{1 ; \\frac{3}{2}\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le discriminant vaut $25 - 24 = 1$, positif : les deux solutions sont $1$ et $\\frac{3}{2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Conclure avant de vérifier le signe",
          "stepTheme": "Conclure avant de vérifier le signe",
          "stepBadge": "Conclure avant de vérifier le signe",
          "paragraphText": "• Piège : annoncer deux solutions sans avoir calculé le discriminant.\nPour $x^2 - x + 7 = 0$, le discriminant est négatif : il n'y a aucune solution, malgré l'allure simple de l'équation.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03_q5",
            "type": "mcq",
            "prompt": "Un élève affirme que $x^2 - x + 7 = 0$ a deux solutions distinctes. Cette affirmation est :",
            "options": [
              "Vraie, car $a = 1$",
              "Vraie, car $c = 7$",
              "Fausse, car le discriminant est négatif",
              "Fausse, car le discriminant est nul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le discriminant vaut $-27$ : quand il est négatif, l'équation n'a pas de solution dans $\\mathbb{R}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'équation de la situation d'apprentissage",
          "stepTheme": "L'équation de la situation d'apprentissage",
          "stepBadge": "L'équation de la situation d'apprentissage",
          "paragraphText": "• Situation complexe de la leçon : l'aire de $88$ conduit à l'équation $x^2 + 13x - 48 = 0$.\nSon discriminant vaut $361$, positif, et ses solutions sont $-16$ et $3$ ; seule la solution positive convient pour une longueur.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $x^2 + 13x - 48 = 0$ ?",
            "options": [
              "$\\{-16 ; 3\\}$",
              "$\\{16 ; -3\\}$",
              "$\\{3\\}$",
              "L'ensemble vide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le discriminant vaut $169 + 192 = 361$ et $\\sqrt{361} = 19$ : les solutions sont $\\frac{-13 - 19}{2} = -16$ et $\\frac{-13 + 19}{2} = 3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03_q1",
          "type": "mcq",
          "prompt": "Comment appelle-t-on les solutions d'une équation du second degré par rapport à son polynôme ?",
          "options": [
            "Ses zéros ou ses racines",
            "Ses coefficients",
            "Son discriminant",
            "Ses facteurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon appelle ces solutions les zéros ou les racines du polynôme."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03_q2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $x^2 - x + 7 = 0$ ?",
          "options": [
            "$\\{7\\}$",
            "$\\{-1 ; 7\\}$",
            "L'ensemble vide",
            "$\\{1\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Son discriminant vaut $1 - 28 = -27$, qui est négatif : l'équation n'a pas de solution dans $\\mathbb{R}$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $2x^2 - 4x + 2 = 0$ ?",
          "options": [
            "$\\{2\\}$",
            "$\\{1\\}$",
            "$\\{-1 ; 1\\}$",
            "L'ensemble vide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le discriminant est nul, donc la solution unique est $x_0 = \\frac{4}{4} = 1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $2x^2 - 5x + 3 = 0$ ?",
          "options": [
            "$\\{-1 ; -\\frac{3}{2}\\}$",
            "$\\{\\frac{3}{2}\\}$",
            "L'ensemble vide",
            "$\\{1 ; \\frac{3}{2}\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le discriminant vaut $25 - 24 = 1$, positif : les deux solutions sont $1$ et $\\frac{3}{2}$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03_q5",
          "type": "mcq",
          "prompt": "Un élève affirme que $x^2 - x + 7 = 0$ a deux solutions distinctes. Cette affirmation est :",
          "options": [
            "Vraie, car $a = 1$",
            "Vraie, car $c = 7$",
            "Fausse, car le discriminant est négatif",
            "Fausse, car le discriminant est nul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le discriminant vaut $-27$ : quand il est négatif, l'équation n'a pas de solution dans $\\mathbb{R}$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p03_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $x^2 + 13x - 48 = 0$ ?",
          "options": [
            "$\\{-16 ; 3\\}$",
            "$\\{16 ; -3\\}$",
            "$\\{3\\}$",
            "L'ensemble vide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le discriminant vaut $169 + 192 = 361$ et $\\sqrt{361} = 19$ : les solutions sont $\\frac{-13 - 19}{2} = -16$ et $\\frac{-13 + 19}{2} = 3$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04",
      "order": 4,
      "title": "Factorisation d'un polynôme du second degré",
      "summary": "Factoriser un polynôme du second degré selon le signe de son discriminant.",
      "conceptExplanation": "Pour factoriser un polynôme du second degré $P(x) = ax^2 + bx + c$ avec $a \\neq 0$, on calcule le discriminant $\\Delta = b^2 - 4ac$.\nSi $\\Delta < 0$, $P(x)$ n'a pas de racine : $P(x)$ n'est pas factorisable. Si $\\Delta = 0$, $P(x)$ admet un zéro $x_0 = \\frac{-b}{2a}$ et sa forme factorisée est $P(x) = a(x - x_0)^2$. Si $\\Delta > 0$, $P(x)$ admet deux zéros distincts $x_1$ et $x_2$ et sa forme factorisée est $P(x) = a(x - x_1)(x - x_2)$.",
      "keyRule": "Même point de départ que la résolution : le discriminant décide de la forme factorisée, et le coefficient $a$ reste devant.",
      "formulas": [
        {
          "name": "Forme factorisée, discriminant nul",
          "formula": "P(x) = a(x - x_0)^2",
          "note": "Avec $x_0 = \\frac{-b}{2a}$."
        },
        {
          "name": "Forme factorisée, discriminant positif",
          "formula": "P(x) = a(x - x_1)(x - x_2)",
          "note": "$x_1$ et $x_2$ sont les deux zéros du polynôme."
        }
      ],
      "workedExample": {
        "title": "Trois polynômes à factoriser (exercice de fixation)",
        "statement": "Factorise $P(x) = 3x^2 + 2x + 1$, $R(x) = 2x^2 - 4x + 2$ et $T(x) = -x^2 - 3x + 4$.",
        "methodSteps": [
          "Pour $P$ : $\\Delta = -8$, négatif, donc $P$ n'est pas factorisable.",
          "Pour $R$ : $\\Delta = 0$ et $x_0 = 1$, donc $R(x) = 2(x - 1)^2$.",
          "Pour $T$ : $\\Delta = 25$, positif, zéros $-4$ et $1$, donc $T(x) = -(x + 4)(x - 1)$."
        ],
        "conclusion": "Les trois cas du discriminant donnent les trois réponses possibles de factorisation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Pas de racine, pas de factorisation",
          "stepTheme": "Pas de racine, pas de factorisation",
          "stepBadge": "Pas de racine, pas de factorisation",
          "paragraphText": "• Si $\\Delta < 0$, le polynôme n'a pas de racine dans $\\mathbb{R}$ : il n'est pas factorisable.\nC'est le cas de $P(x) = 3x^2 + 2x + 1$, dont le discriminant vaut $-8$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04_q1",
            "type": "mcq",
            "prompt": "Le polynôme $P(x) = 3x^2 + 2x + 1$ est-il factorisable dans $\\mathbb{R}$ ?",
            "options": [
              "Oui, en $3(x - 1)^2$",
              "Oui, en $(3x + 1)(x + 1)$",
              "Non, car $a = 3$",
              "Non, car son discriminant est négatif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Son discriminant vaut $4 - 12 = -8$ : sans racine, le polynôme n'est pas factorisable."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La forme factorisée si le discriminant est nul",
          "stepTheme": "La forme factorisée si le discriminant est nul",
          "stepBadge": "La forme factorisée si le discriminant est nul",
          "paragraphText": "• Si $\\Delta = 0$, le polynôme admet un zéro $x_0 = \\frac{-b}{2a}$ et sa forme factorisée est $P(x) = a(x - x_0)^2$.\nPour $R(x) = 2x^2 - 4x + 2$, $x_0 = 1$ et $R(x) = 2(x - 1)^2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est la forme factorisée de $R(x) = 2x^2 - 4x + 2$ ?",
            "options": [
              "$2(x + 1)^2$",
              "$2(x - 1)^2$",
              "$(x - 1)^2$",
              "$2(x - 2)(x - 1)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le discriminant est nul et $x_0 = 1$ : la forme factorisée est $a(x - x_0)^2$, soit $2(x - 1)^2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La forme factorisée si le discriminant est positif",
          "stepTheme": "La forme factorisée si le discriminant est positif",
          "stepBadge": "La forme factorisée si le discriminant est positif",
          "paragraphText": "• Si $\\Delta > 0$, le polynôme admet deux zéros distincts $x_1$ et $x_2$ et sa forme factorisée est $P(x) = a(x - x_1)(x - x_2)$.\nMéthode : calculer $\\Delta$, trouver les zéros, puis écrire la forme avec le coefficient $a$ devant.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04_q3",
            "type": "mcq",
            "prompt": "Les zéros de $T(x) = -x^2 - 3x + 4$ sont $-4$ et $1$. Quelle est sa forme factorisée ?",
            "options": [
              "$-(x + 4)(x - 1)$",
              "$(x + 4)(x - 1)$",
              "$-(x - 4)(x + 1)$",
              "$(x - 4)(x + 1)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La forme est $a(x - x_1)(x - x_2)$ avec $a = -1$ : on obtient $-(x + 4)(x - 1)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier le coefficient a",
          "stepTheme": "Ne pas oublier le coefficient a",
          "stepBadge": "Ne pas oublier le coefficient a",
          "paragraphText": "• Piège : la forme factorisée commence toujours par le coefficient $a$ du polynôme.\nPour $T(x) = -x^2 - 3x + 4$, oublier le signe moins devant le produit donne un autre polynôme.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04_q4",
            "type": "mcq",
            "prompt": "Dans la forme factorisée de $T(x) = -x^2 - 3x + 4$, quel coefficient multiplie le produit $(x + 4)(x - 1)$ ?",
            "options": [
              "$1$",
              "$4$",
              "$-1$",
              "$-4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce coefficient est le $a$ du polynôme, ici $a = -1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une différence de deux carrés",
          "stepTheme": "Une différence de deux carrés",
          "stepBadge": "Une différence de deux carrés",
          "paragraphText": "• Exemple des exercices : $V(x) = x^2 - 25$ a pour discriminant $100$, positif.\nSes zéros sont $-5$ et $5$, et sa forme factorisée est $V(x) = (x + 5)(x - 5)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04_q5",
            "type": "mcq",
            "prompt": "Quelle est la forme factorisée de $V(x) = x^2 - 25$ ?",
            "options": [
              "$(x - 5)^2$",
              "$(x + 5)(x - 5)$",
              "$(x + 25)(x - 25)$",
              "$x(x - 25)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les zéros sont $-5$ et $5$ et $a = 1$ : la forme factorisée est $(x + 5)(x - 5)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Relire les zéros sur la forme factorisée",
          "stepTheme": "Relire les zéros sur la forme factorisée",
          "stepBadge": "Relire les zéros sur la forme factorisée",
          "paragraphText": "• Propriété : dans la forme $P(x) = a(x - x_1)(x - x_2)$, les nombres $x_1$ et $x_2$ sont exactement les zéros du polynôme.\nLe produit s'annule en effet pour $x = x_1$ et pour $x = x_2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04_q6",
            "type": "mcq",
            "prompt": "Quels sont les zéros du polynôme $T(x) = -2(x - \\frac{5}{2})(x + 2)$ ?",
            "options": [
              "$-\\frac{5}{2}$ et $2$",
              "$5$ et $2$",
              "$-2$ et $2$",
              "$\\frac{5}{2}$ et $-2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le produit s'annule quand $x - \\frac{5}{2} = 0$ et quand $x + 2 = 0$ : les zéros sont $\\frac{5}{2}$ et $-2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04_q1",
          "type": "mcq",
          "prompt": "Le polynôme $P(x) = 3x^2 + 2x + 1$ est-il factorisable dans $\\mathbb{R}$ ?",
          "options": [
            "Oui, en $3(x - 1)^2$",
            "Oui, en $(3x + 1)(x + 1)$",
            "Non, car $a = 3$",
            "Non, car son discriminant est négatif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Son discriminant vaut $4 - 12 = -8$ : sans racine, le polynôme n'est pas factorisable."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est la forme factorisée de $R(x) = 2x^2 - 4x + 2$ ?",
          "options": [
            "$2(x + 1)^2$",
            "$2(x - 1)^2$",
            "$(x - 1)^2$",
            "$2(x - 2)(x - 1)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le discriminant est nul et $x_0 = 1$ : la forme factorisée est $a(x - x_0)^2$, soit $2(x - 1)^2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04_q3",
          "type": "mcq",
          "prompt": "Les zéros de $T(x) = -x^2 - 3x + 4$ sont $-4$ et $1$. Quelle est sa forme factorisée ?",
          "options": [
            "$-(x + 4)(x - 1)$",
            "$(x + 4)(x - 1)$",
            "$-(x - 4)(x + 1)$",
            "$(x - 4)(x + 1)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La forme est $a(x - x_1)(x - x_2)$ avec $a = -1$ : on obtient $-(x + 4)(x - 1)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04_q4",
          "type": "mcq",
          "prompt": "Dans la forme factorisée de $T(x) = -x^2 - 3x + 4$, quel coefficient multiplie le produit $(x + 4)(x - 1)$ ?",
          "options": [
            "$1$",
            "$4$",
            "$-1$",
            "$-4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce coefficient est le $a$ du polynôme, ici $a = -1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04_q5",
          "type": "mcq",
          "prompt": "Quelle est la forme factorisée de $V(x) = x^2 - 25$ ?",
          "options": [
            "$(x - 5)^2$",
            "$(x + 5)(x - 5)$",
            "$(x + 25)(x - 25)$",
            "$x(x - 25)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les zéros sont $-5$ et $5$ et $a = 1$ : la forme factorisée est $(x + 5)(x - 5)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p04_q6",
          "type": "mcq",
          "prompt": "Quels sont les zéros du polynôme $T(x) = -2(x - \\frac{5}{2})(x + 2)$ ?",
          "options": [
            "$-\\frac{5}{2}$ et $2$",
            "$5$ et $2$",
            "$-2$ et $2$",
            "$\\frac{5}{2}$ et $-2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le produit s'annule quand $x - \\frac{5}{2} = 0$ et quand $x + 2 = 0$ : les zéros sont $\\frac{5}{2}$ et $-2$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05",
      "order": 5,
      "title": "Signe d'un polynôme du second degré",
      "summary": "Déterminer le signe d'un polynôme du second degré à partir de son discriminant et du signe de $a$.",
      "conceptExplanation": "Pour déterminer le signe d'un polynôme du second degré $P(x) = ax^2 + bx + c$ avec $a \\neq 0$, on calcule le discriminant $\\Delta$.\nSi $\\Delta < 0$, $P(x)$ n'a pas de zéro et il est toujours du signe de $a$. Si $\\Delta = 0$, $P(x)$ admet un zéro $x_0 = \\frac{-b}{2a}$ et il est du signe de $a$ pour tout $x \\neq x_0$. Si $\\Delta > 0$, $P(x)$ admet deux zéros distincts $x_1 < x_2$ : il est du signe de $a$ à l'extérieur des zéros et du signe contraire de $a$ à l'intérieur des zéros.",
      "keyRule": "Retiens la phrase de la leçon : du signe de $a$ à l'extérieur des zéros, du signe contraire à l'intérieur.",
      "formulas": [],
      "workedExample": {
        "title": "Le signe de $Q(x) = -x^2 + x + 2$ (exercice de fixation)",
        "statement": "Détermine le signe du polynôme $Q(x) = -x^2 + x + 2$.",
        "methodSteps": [
          "On calcule le discriminant : $\\Delta = 1 + 8 = 9$, positif.",
          "Les deux zéros sont $-1$ et $2$.",
          "Comme $a = -1$, $Q(x)$ est négatif à l'extérieur des zéros et positif entre $-1$ et $2$."
        ],
        "conclusion": "$Q(x)$ est négatif sur $]-\\infty ; -1[$ et sur $]2 ; +\\infty[$, positif sur $]-1 ; 2[$, et nul en $-1$ et en $2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Discriminant négatif : toujours le signe de a",
          "stepTheme": "Discriminant négatif : toujours le signe de a",
          "stepBadge": "Discriminant négatif : toujours le signe de a",
          "paragraphText": "• Si $\\Delta < 0$, le polynôme n'a pas de zéro et il est toujours du signe de $a$.\nPour $P(x) = x^2 - x + 3$, le discriminant vaut $-8$ et $a = 1$ : $P(x)$ est toujours positif.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05_q1",
            "type": "mcq",
            "prompt": "Quel est le signe de $P(x) = x^2 - x + 3$ pour tout réel $x$ ?",
            "options": [
              "Toujours négatif",
              "Positif puis négatif",
              "Toujours positif",
              "Nul en un point"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le discriminant est négatif, donc $P(x)$ garde le signe de $a = 1$ : il est toujours positif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Discriminant nul : le signe de a sauf au zéro",
          "stepTheme": "Discriminant nul : le signe de a sauf au zéro",
          "stepBadge": "Discriminant nul : le signe de a sauf au zéro",
          "paragraphText": "• Si $\\Delta = 0$, le polynôme est du signe de $a$ pour tout $x \\neq x_0$, et il s'annule en $x_0$.\nPour $-x^2 + 10x - 25$, le zéro est $x_0 = 5$ et $a = -1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05_q2",
            "type": "mcq",
            "prompt": "Pour $P(x) = -x^2 + 10x - 25$, que vaut $P(x)$ quand $x \\neq 5$ ?",
            "options": [
              "Il est négatif",
              "Il est positif",
              "Il est nul",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le discriminant est nul et $a = -1$ : hors du zéro $5$, $P(x)$ est du signe de $a$, donc négatif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Discriminant positif : l'intérieur et l'extérieur",
          "stepTheme": "Discriminant positif : l'intérieur et l'extérieur",
          "stepBadge": "Discriminant positif : l'intérieur et l'extérieur",
          "paragraphText": "• Si $\\Delta > 0$, avec deux zéros $x_1 < x_2$, le polynôme est du signe de $a$ à l'extérieur des zéros et du signe contraire de $a$ à l'intérieur.\nPour $Q(x) = -x^2 + x + 2$, les zéros sont $-1$ et $2$, et $a = -1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05_q3",
            "type": "mcq",
            "prompt": "Quel est le signe de $Q(x) = -x^2 + x + 2$ pour $x$ dans l'intervalle $]-1 ; 2[$ ?",
            "options": [
              "Négatif",
              "Nul",
              "Le signe de $a$",
              "Positif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "À l'intérieur des zéros, le signe est contraire à celui de $a = -1$ : $Q(x)$ est positif sur $]-1 ; 2[$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Confondre l'intérieur et l'extérieur",
          "stepTheme": "Confondre l'intérieur et l'extérieur",
          "stepBadge": "Confondre l'intérieur et l'extérieur",
          "paragraphText": "• Piège : à l'extérieur des zéros, le polynôme reprend le signe de $a$.\nPour $Q(x) = -x^2 + x + 2$, sur $]2 ; +\\infty[$, le signe est donc celui de $a = -1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05_q4",
            "type": "mcq",
            "prompt": "Quel est le signe de $Q(x) = -x^2 + x + 2$ pour $x$ dans l'intervalle $]2 ; +\\infty[$ ?",
            "options": [
              "Positif",
              "Négatif",
              "Nul",
              "Indéterminé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "À l'extérieur des zéros $-1$ et $2$, $Q(x)$ est du signe de $a = -1$ : il est négatif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le polynôme s'annule en ses zéros",
          "stepTheme": "Le polynôme s'annule en ses zéros",
          "stepBadge": "Le polynôme s'annule en ses zéros",
          "paragraphText": "• Exemple de l'exercice de fixation : pour $Q(x) = -x^2 + x + 2$, on a $Q(x) = 0$ pour $x = -1$ et pour $x = 2$.\nCe sont les deux points où le tableau de signe place un zéro.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05_q5",
            "type": "mcq",
            "prompt": "Pour quels réels $x$ a-t-on $Q(x) = -x^2 + x + 2 = 0$ ?",
            "options": [
              "$x = -1$ et $x = 2$",
              "$x = -2$ et $x = 1$",
              "$x = 0$",
              "Aucun réel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les zéros de $Q$ sont $-1$ et $2$ : c'est en ces deux points que le polynôme s'annule."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La démarche du tableau de signe",
          "stepTheme": "La démarche du tableau de signe",
          "stepBadge": "La démarche du tableau de signe",
          "paragraphText": "• Méthode de la leçon : calculer le discriminant, placer les zéros éventuels sur la ligne des $x$, puis remplir le signe selon le cas.\nLa première étape est donc toujours le calcul de $\\Delta$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05_q6",
            "type": "mcq",
            "prompt": "Quelle est la première étape pour déterminer le signe d'un polynôme du second degré ?",
            "options": [
              "Tracer sa courbe",
              "Résoudre $P(x) > 0$",
              "Calculer son discriminant",
              "Remplacer $x$ par $0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La méthode de la leçon commence par le calcul du discriminant $\\Delta = b^2 - 4ac$, qui indique le cas de signe."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05_q1",
          "type": "mcq",
          "prompt": "Quel est le signe de $P(x) = x^2 - x + 3$ pour tout réel $x$ ?",
          "options": [
            "Toujours négatif",
            "Positif puis négatif",
            "Toujours positif",
            "Nul en un point"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le discriminant est négatif, donc $P(x)$ garde le signe de $a = 1$ : il est toujours positif."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05_q2",
          "type": "mcq",
          "prompt": "Pour $P(x) = -x^2 + 10x - 25$, que vaut $P(x)$ quand $x \\neq 5$ ?",
          "options": [
            "Il est négatif",
            "Il est positif",
            "Il est nul",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le discriminant est nul et $a = -1$ : hors du zéro $5$, $P(x)$ est du signe de $a$, donc négatif."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05_q3",
          "type": "mcq",
          "prompt": "Quel est le signe de $Q(x) = -x^2 + x + 2$ pour $x$ dans l'intervalle $]-1 ; 2[$ ?",
          "options": [
            "Négatif",
            "Nul",
            "Le signe de $a$",
            "Positif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "À l'intérieur des zéros, le signe est contraire à celui de $a = -1$ : $Q(x)$ est positif sur $]-1 ; 2[$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05_q4",
          "type": "mcq",
          "prompt": "Quel est le signe de $Q(x) = -x^2 + x + 2$ pour $x$ dans l'intervalle $]2 ; +\\infty[$ ?",
          "options": [
            "Positif",
            "Négatif",
            "Nul",
            "Indéterminé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "À l'extérieur des zéros $-1$ et $2$, $Q(x)$ est du signe de $a = -1$ : il est négatif."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05_q5",
          "type": "mcq",
          "prompt": "Pour quels réels $x$ a-t-on $Q(x) = -x^2 + x + 2 = 0$ ?",
          "options": [
            "$x = -1$ et $x = 2$",
            "$x = -2$ et $x = 1$",
            "$x = 0$",
            "Aucun réel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les zéros de $Q$ sont $-1$ et $2$ : c'est en ces deux points que le polynôme s'annule."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p05_q6",
          "type": "mcq",
          "prompt": "Quelle est la première étape pour déterminer le signe d'un polynôme du second degré ?",
          "options": [
            "Tracer sa courbe",
            "Résoudre $P(x) > 0$",
            "Calculer son discriminant",
            "Remplacer $x$ par $0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La méthode de la leçon commence par le calcul du discriminant $\\Delta = b^2 - 4ac$, qui indique le cas de signe."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06",
      "order": 6,
      "title": "Inéquations du second degré",
      "summary": "Résoudre une inéquation du second degré en utilisant le tableau de signe du polynôme.",
      "conceptExplanation": "Soit $P(x)$ un polynôme du second degré tel que $P(x) = ax^2 + bx + c$ où $a \\neq 0$. Toute inéquation de l'un des types $P(x) > 0$, $P(x) \\geq 0$, $P(x) < 0$ ou $P(x) \\leq 0$ est appelée inéquation du second degré dans $\\mathbb{R}$.\nMéthode : étudier le signe du polynôme $P(x)$, déterminer l'intervalle sur lequel $P(x)$ vérifie l'inégalité donnée, puis conclure.\nExemple : $-x^2 + 10x - 25 \\geq 0$ n'a pour solution que $5$, car le polynôme est négatif partout ailleurs.",
      "keyRule": "Une inéquation du second degré se résout toujours par le signe du polynôme : signe d'abord, intervalle ensuite.",
      "formulas": [],
      "workedExample": {
        "title": "Deux inéquations résolues (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ les inéquations $-x^2 + 10x - 25 \\geq 0$ et $-x^2 + x + 2 < 0$.",
        "methodSteps": [
          "Pour la première : $\\Delta = 0$, zéro $x_0 = 5$, polynôme négatif sauf en $5$ : les solutions forment l'ensemble $\\{5\\}$.",
          "Pour la seconde : $\\Delta = 9$, zéros $-1$ et $2$, polynôme négatif à l'extérieur des zéros.",
          "On lit les solutions de la seconde sur le tableau de signe."
        ],
        "conclusion": "Les ensembles de solutions sont $\\{5\\}$ pour la première et $]-\\infty ; -1[ \\cup ]2 ; +\\infty[$ pour la seconde."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Reconnaître une inéquation du second degré",
          "stepTheme": "Reconnaître une inéquation du second degré",
          "stepBadge": "Reconnaître une inéquation du second degré",
          "paragraphText": "• Définition : pour un polynôme du second degré $P(x)$, toute inéquation du type $P(x) > 0$, $P(x) \\geq 0$, $P(x) < 0$ ou $P(x) \\leq 0$ est une inéquation du second degré dans $\\mathbb{R}$.\nExemple de la leçon : $-x^2 + 10x - 25 \\geq 0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces propositions est une inéquation du second degré dans $\\mathbb{R}$ ?",
            "options": [
              "$3x + 1 > 0$",
              "$-x^2 + 10x - 25 \\geq 0$",
              "$x^2 + x = 0$",
              "$\\frac{1}{x} < 2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une inégalité portant sur le polynôme du second degré $-x^2 + 10x - 25$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La méthode en trois temps",
          "stepTheme": "La méthode en trois temps",
          "stepBadge": "La méthode en trois temps",
          "paragraphText": "• Méthode de la leçon : étudier le signe du polynôme, déterminer l'intervalle sur lequel il vérifie l'inégalité donnée, puis conclure.\nOn ne résout donc jamais l'inéquation avant d'avoir son tableau de signe.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06_q2",
            "type": "mcq",
            "prompt": "Quelle est la première étape pour résoudre une inéquation du second degré ?",
            "options": [
              "Conclure directement",
              "Remplacer $x$ par un nombre au hasard",
              "Factoriser sans calculer le discriminant",
              "Étudier le signe du polynôme"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La méthode de la leçon commence par l'étude du signe du polynôme $P(x) = ax^2 + bx + c$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une inéquation qui n'a qu'un point solution",
          "stepTheme": "Une inéquation qui n'a qu'un point solution",
          "stepBadge": "Une inéquation qui n'a qu'un point solution",
          "paragraphText": "• Exemple de la leçon : pour $-x^2 + 10x - 25 \\geq 0$, le discriminant est nul et le polynôme est négatif sauf en son zéro $5$, où il vaut $0$.\nL'inégalité large n'est donc vérifiée qu'en un seul point.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $-x^2 + 10x - 25 \\geq 0$ ?",
            "options": [
              "$\\mathbb{R}$",
              "L'ensemble vide",
              "$\\{5\\}$",
              "$[5 ; +\\infty[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le polynôme est négatif partout sauf en $5$ où il est nul : seule la valeur $5$ vérifie l'inégalité large."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Résoudre une inéquation stricte",
          "stepTheme": "Résoudre une inéquation stricte",
          "stepBadge": "Résoudre une inéquation stricte",
          "paragraphText": "• Exemple de la leçon : $R(x) = -x^2 + x + 2$ est négatif à l'extérieur de ses zéros $-1$ et $2$.\nL'inéquation $R(x) < 0$ se résout donc par le tableau de signe de $R$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $-x^2 + x + 2 < 0$ ?",
            "options": [
              "$]-\\infty ; -1[ \\cup ]2 ; +\\infty[$",
              "$]-1 ; 2[$",
              "$[-1 ; 2]$",
              "$\\{-1 ; 2\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le polynôme est négatif à l'extérieur des zéros : les solutions sont $]-\\infty ; -1[ \\cup ]2 ; +\\infty[$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les bornes d'une inégalité stricte",
          "stepTheme": "Les bornes d'une inégalité stricte",
          "stepBadge": "Les bornes d'une inégalité stricte",
          "paragraphText": "• Piège : avec une inégalité stricte comme $R(x) < 0$, les zéros du polynôme ne sont pas solutions, car $R(x)$ y vaut $0$ et non un nombre strictement négatif.\nLes intervalles de solutions sont donc ouverts en $-1$ et en $2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06_q5",
            "type": "mcq",
            "prompt": "Les nombres $-1$ et $2$ sont-ils solutions de l'inéquation $-x^2 + x + 2 < 0$ ?",
            "options": [
              "Oui, tous les deux",
              "Oui, seulement $-1$",
              "Oui, seulement $2$",
              "Non, aucun des deux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En $-1$ et en $2$, le polynôme vaut $0$, qui ne vérifie pas l'inégalité stricte $R(x) < 0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Un exemple de renforcement",
          "stepTheme": "Un exemple de renforcement",
          "stepBadge": "Un exemple de renforcement",
          "paragraphText": "• Exercice de renforcement de la leçon : pour $P(x) = -x^2 + 3x + 4$, le discriminant vaut $25$ et les zéros sont $-1$ et $4$.\nComme $a = -1$, $P(x)$ est positif entre les zéros et négatif ou nul à l'extérieur au sens large.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $-x^2 + 3x + 4 > 0$ ?",
            "options": [
              "$]-\\infty ; -1[ \\cup ]4 ; +\\infty[$",
              "$]-1 ; 4[$",
              "$[-1 ; 4]$",
              "$\\{-1 ; 4\\}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le polynôme est positif à l'intérieur de ses zéros $-1$ et $4$, car son signe y est contraire à celui de $a = -1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces propositions est une inéquation du second degré dans $\\mathbb{R}$ ?",
          "options": [
            "$3x + 1 > 0$",
            "$-x^2 + 10x - 25 \\geq 0$",
            "$x^2 + x = 0$",
            "$\\frac{1}{x} < 2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une inégalité portant sur le polynôme du second degré $-x^2 + 10x - 25$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06_q2",
          "type": "mcq",
          "prompt": "Quelle est la première étape pour résoudre une inéquation du second degré ?",
          "options": [
            "Conclure directement",
            "Remplacer $x$ par un nombre au hasard",
            "Factoriser sans calculer le discriminant",
            "Étudier le signe du polynôme"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La méthode de la leçon commence par l'étude du signe du polynôme $P(x) = ax^2 + bx + c$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $-x^2 + 10x - 25 \\geq 0$ ?",
          "options": [
            "$\\mathbb{R}$",
            "L'ensemble vide",
            "$\\{5\\}$",
            "$[5 ; +\\infty[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le polynôme est négatif partout sauf en $5$ où il est nul : seule la valeur $5$ vérifie l'inégalité large."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $-x^2 + x + 2 < 0$ ?",
          "options": [
            "$]-\\infty ; -1[ \\cup ]2 ; +\\infty[$",
            "$]-1 ; 2[$",
            "$[-1 ; 2]$",
            "$\\{-1 ; 2\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le polynôme est négatif à l'extérieur des zéros : les solutions sont $]-\\infty ; -1[ \\cup ]2 ; +\\infty[$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06_q5",
          "type": "mcq",
          "prompt": "Les nombres $-1$ et $2$ sont-ils solutions de l'inéquation $-x^2 + x + 2 < 0$ ?",
          "options": [
            "Oui, tous les deux",
            "Oui, seulement $-1$",
            "Oui, seulement $2$",
            "Non, aucun des deux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "En $-1$ et en $2$, le polynôme vaut $0$, qui ne vérifie pas l'inégalité stricte $R(x) < 0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p06_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $-x^2 + 3x + 4 > 0$ ?",
          "options": [
            "$]-\\infty ; -1[ \\cup ]4 ; +\\infty[$",
            "$]-1 ; 4[$",
            "$[-1 ; 4]$",
            "$\\{-1 ; 4\\}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le polynôme est positif à l'intérieur de ses zéros $-1$ et $4$, car son signe y est contraire à celui de $a = -1$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07",
      "order": 7,
      "title": "Équations du type quotient égal à zéro",
      "summary": "Résoudre une équation du type $\\frac{ax + b}{cx + d} = 0$ en tenant compte de la contrainte sur l'inconnue.",
      "conceptExplanation": "Pour résoudre une équation du type $\\frac{ax + b}{cx + d} = 0$, on procède comme suit : chercher la contrainte sur l'inconnue (le dénominateur doit être non nul), résoudre l'équation $ax + b = 0$, puis vérifier si la solution obtenue vérifie la contrainte.\nSi c'est le cas, l'ensemble des solutions est la solution obtenue ; dans le cas contraire, l'ensemble des solutions est l'ensemble vide.\nExemple : $\\frac{3x - 9}{3 - x} = 0$ n'a pas de solution, car le numérateur s'annule en $3$, qui est la valeur interdite.",
      "keyRule": "Contrainte d'abord, numérateur ensuite, vérification toujours : une valeur interdite n'est jamais solution.",
      "formulas": [
        {
          "name": "Fraction nulle",
          "formula": "\\frac{ax + b}{cx + d} = 0 \\iff ax + b = 0 \\text{ et } cx + d \\neq 0",
          "note": "Le numérateur doit être nul et le dénominateur non nul."
        }
      ],
      "workedExample": {
        "title": "Une équation sans solution (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ l'équation $\\frac{3x - 9}{3 - x} = 0$.",
        "methodSteps": [
          "Contrainte : $3 - x \\neq 0$, donc $x \\neq 3$.",
          "Le numérateur s'annule : $3x - 9 = 0$ donne $x = 3$.",
          "La valeur $3$ est la valeur interdite : elle est rejetée."
        ],
        "conclusion": "L'ensemble des solutions est l'ensemble vide."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Chercher d'abord la contrainte",
          "stepTheme": "Chercher d'abord la contrainte",
          "stepBadge": "Chercher d'abord la contrainte",
          "paragraphText": "• Méthode de la leçon : pour résoudre une équation du type $\\frac{ax + b}{cx + d} = 0$, on cherche d'abord la contrainte sur l'inconnue.\nLe dénominateur ne doit pas s'annuler : pour $\\frac{x - 1}{2x - 1}$, il faut $x \\neq \\frac{1}{2}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07_q1",
            "type": "mcq",
            "prompt": "Quelle est la contrainte sur l'inconnue pour l'équation $\\frac{x - 1}{2x - 1} = 0$ ?",
            "options": [
              "$x \\neq \\frac{1}{2}$",
              "$x \\neq 1$",
              "$x \\neq 0$",
              "Aucune contrainte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le dénominateur $2x - 1$ s'annule pour $x = \\frac{1}{2}$ : cette valeur est interdite."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une fraction nulle par son numérateur",
          "stepTheme": "Une fraction nulle par son numérateur",
          "stepBadge": "Une fraction nulle par son numérateur",
          "paragraphText": "• Sous la contrainte, une fraction est nulle si et seulement si son numérateur est nul.\nOn résout donc ensuite l'équation $ax + b = 0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07_q2",
            "type": "mcq",
            "prompt": "Sous la contrainte, résoudre $\\frac{ax + b}{cx + d} = 0$ revient à résoudre quelle équation ?",
            "options": [
              "$cx + d = 0$",
              "$ax + b = cx + d$",
              "$ax + b = 0$",
              "$a + b = 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une fraction de dénominateur non nul est nulle exactement quand son numérateur est nul."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une solution qui convient",
          "stepTheme": "Une solution qui convient",
          "stepBadge": "Une solution qui convient",
          "paragraphText": "• Exemple de la leçon : pour $\\frac{x - 1}{2x - 1} = 0$, la contrainte est $x \\neq \\frac{1}{2}$ et le numérateur s'annule en $x = 1$.\nComme $1 \\neq \\frac{1}{2}$, la valeur obtenue est bien solution.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $\\frac{x - 1}{2x - 1} = 0$ ?",
            "options": [
              "$\\{\\frac{1}{2}\\}$",
              "$\\{1\\}$",
              "L'ensemble vide",
              "$\\{1 ; \\frac{1}{2}\\}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le numérateur s'annule en $1$, valeur différente de la valeur interdite $\\frac{1}{2}$ : la solution est $1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Quand la candidate est la valeur interdite",
          "stepTheme": "Quand la candidate est la valeur interdite",
          "stepBadge": "Quand la candidate est la valeur interdite",
          "paragraphText": "• Piège de la leçon : pour $\\frac{3x - 9}{3 - x} = 0$, la contrainte est $x \\neq 3$ et le numérateur s'annule en $x = 3$.\nLa seule candidate est la valeur interdite : l'équation n'a aucune solution.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $\\frac{3x - 9}{3 - x} = 0$ ?",
            "options": [
              "$\\{3\\}$",
              "$\\{0\\}$",
              "$\\{-3\\}$",
              "L'ensemble vide"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le numérateur donne $x = 3$, mais $3$ est la valeur interdite par le dénominateur : aucune solution."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Vérifier avant de conclure",
          "stepTheme": "Vérifier avant de conclure",
          "stepBadge": "Vérifier avant de conclure",
          "paragraphText": "• Méthode de la leçon, dernière étape : vérifier si la solution obtenue vérifie la contrainte.\nSi c'est le cas, elle forme l'ensemble des solutions ; dans le cas contraire, l'ensemble des solutions est l'ensemble vide.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07_q5",
            "type": "mcq",
            "prompt": "Après avoir résolu $ax + b = 0$, que faut-il faire avant de conclure ?",
            "options": [
              "Tracer la courbe",
              "Calculer un discriminant",
              "Vérifier que la valeur obtenue respecte la contrainte",
              "Changer le signe de la solution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La méthode impose de vérifier la contrainte : une valeur interdite doit être rejetée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Se ramener à une fraction nulle",
          "stepTheme": "Se ramener à une fraction nulle",
          "stepBadge": "Se ramener à une fraction nulle",
          "paragraphText": "• Exercice de renforcement de la leçon : l'équation $\\frac{-x + 3}{2x - 3} = 2$ se ramène à $\\frac{-5x + 9}{2x - 3} = 0$.\nLa contrainte est $x \\neq \\frac{3}{2}$ et le numérateur s'annule en $x = \\frac{9}{5}$, qui convient.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $\\frac{-x + 3}{2x - 3} = 2$ ?",
            "options": [
              "$\\{\\frac{9}{5}\\}$",
              "$\\{\\frac{3}{2}\\}$",
              "L'ensemble vide",
              "$\\{2\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On se ramène à $\\frac{-5x + 9}{2x - 3} = 0$ : le numérateur donne $x = \\frac{9}{5}$, différent de la valeur interdite $\\frac{3}{2}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07_q1",
          "type": "mcq",
          "prompt": "Quelle est la contrainte sur l'inconnue pour l'équation $\\frac{x - 1}{2x - 1} = 0$ ?",
          "options": [
            "$x \\neq \\frac{1}{2}$",
            "$x \\neq 1$",
            "$x \\neq 0$",
            "Aucune contrainte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le dénominateur $2x - 1$ s'annule pour $x = \\frac{1}{2}$ : cette valeur est interdite."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07_q2",
          "type": "mcq",
          "prompt": "Sous la contrainte, résoudre $\\frac{ax + b}{cx + d} = 0$ revient à résoudre quelle équation ?",
          "options": [
            "$cx + d = 0$",
            "$ax + b = cx + d$",
            "$ax + b = 0$",
            "$a + b = 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une fraction de dénominateur non nul est nulle exactement quand son numérateur est nul."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $\\frac{x - 1}{2x - 1} = 0$ ?",
          "options": [
            "$\\{\\frac{1}{2}\\}$",
            "$\\{1\\}$",
            "L'ensemble vide",
            "$\\{1 ; \\frac{1}{2}\\}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le numérateur s'annule en $1$, valeur différente de la valeur interdite $\\frac{1}{2}$ : la solution est $1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $\\frac{3x - 9}{3 - x} = 0$ ?",
          "options": [
            "$\\{3\\}$",
            "$\\{0\\}$",
            "$\\{-3\\}$",
            "L'ensemble vide"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le numérateur donne $x = 3$, mais $3$ est la valeur interdite par le dénominateur : aucune solution."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07_q5",
          "type": "mcq",
          "prompt": "Après avoir résolu $ax + b = 0$, que faut-il faire avant de conclure ?",
          "options": [
            "Tracer la courbe",
            "Calculer un discriminant",
            "Vérifier que la valeur obtenue respecte la contrainte",
            "Changer le signe de la solution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La méthode impose de vérifier la contrainte : une valeur interdite doit être rejetée."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p07_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'équation $\\frac{-x + 3}{2x - 3} = 2$ ?",
          "options": [
            "$\\{\\frac{9}{5}\\}$",
            "$\\{\\frac{3}{2}\\}$",
            "L'ensemble vide",
            "$\\{2\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On se ramène à $\\frac{-5x + 9}{2x - 3} = 0$ : le numérateur donne $x = \\frac{9}{5}$, différent de la valeur interdite $\\frac{3}{2}$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08",
      "order": 8,
      "title": "Inéquations du type quotient",
      "summary": "Résoudre une inéquation du type $\\frac{ax + b}{cx + d} \\leq 0$ ou $\\geq 0$ par un tableau de signe.",
      "conceptExplanation": "Pour résoudre une inéquation du type $\\frac{ax + b}{cx + d} \\leq 0$ ou $\\frac{ax + b}{cx + d} \\geq 0$, on procède comme suit : chercher la contrainte sur l'inconnue, étudier le signe de la fraction rationnelle $R(x) = \\frac{ax + b}{cx + d}$ dans un tableau de signe, déterminer l'intervalle sur lequel $R(x)$ vérifie l'inégalité donnée, puis conclure.\nExemple de la leçon : l'inéquation $\\frac{x - 1}{2x - 1} \\leq 0$ a pour ensemble de solutions $]\\frac{1}{2} ; 1]$.",
      "keyRule": "Dans un tableau de signe de fraction, la valeur interdite se marque toujours par une double barre et n'est jamais incluse.",
      "formulas": [],
      "workedExample": {
        "title": "L'inéquation $\\frac{x - 1}{2x - 1} \\leq 0$ (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ l'inéquation $\\frac{x - 1}{2x - 1} \\leq 0$.",
        "methodSteps": [
          "Contrainte : $2x - 1 \\neq 0$, donc $x \\neq \\frac{1}{2}$.",
          "On dresse le tableau de signe de $R(x) = \\frac{x - 1}{2x - 1}$ avec les valeurs $\\frac{1}{2}$ et $1$.",
          "$R(x)$ est négatif entre $\\frac{1}{2}$ et $1$, et nul en $1$."
        ],
        "conclusion": "L'ensemble des solutions est $]\\frac{1}{2} ; 1]$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La contrainte reste la première étape",
          "stepTheme": "La contrainte reste la première étape",
          "stepBadge": "La contrainte reste la première étape",
          "paragraphText": "• Méthode de la leçon : pour une inéquation du type $\\frac{ax + b}{cx + d} \\leq 0$ ou $\\geq 0$, on cherche d'abord la contrainte sur l'inconnue.\nPour $R(x) = \\frac{x - 1}{2x - 1}$, la contrainte est $x \\neq \\frac{1}{2}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08_q1",
            "type": "mcq",
            "prompt": "Quelle valeur est interdite pour la fraction $R(x) = \\frac{x - 1}{2x - 1}$ ?",
            "options": [
              "$1$",
              "$0$",
              "$-1$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le dénominateur $2x - 1$ s'annule en $x = \\frac{1}{2}$ : cette valeur est interdite."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Lire le signe dans le tableau",
          "stepTheme": "Lire le signe dans le tableau",
          "stepBadge": "Lire le signe dans le tableau",
          "paragraphText": "• On étudie ensuite le signe de la fraction à l'aide d'un tableau de signe portant les lignes du numérateur, du dénominateur et de la fraction.\nPour $x > 1$, le numérateur $x - 1$ et le dénominateur $2x - 1$ sont tous deux positifs.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08_q2",
            "type": "mcq",
            "prompt": "Quel est le signe de $R(x) = \\frac{x - 1}{2x - 1}$ pour $x$ dans l'intervalle $]1 ; +\\infty[$ ?",
            "options": [
              "Négatif",
              "Positif",
              "Nul",
              "Indéterminé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Numérateur et dénominateur sont positifs sur cet intervalle : leur quotient est positif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Résoudre l'inéquation de la leçon",
          "stepTheme": "Résoudre l'inéquation de la leçon",
          "stepBadge": "Résoudre l'inéquation de la leçon",
          "paragraphText": "• Exemple de la leçon : le tableau de signe de $R(x) = \\frac{x - 1}{2x - 1}$ montre que $R(x)$ est négatif entre $\\frac{1}{2}$ et $1$, et nul en $1$.\nL'inégalité large permet d'inclure la borne $1$, mais jamais la valeur interdite.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $\\frac{x - 1}{2x - 1} \\leq 0$ ?",
            "options": [
              "$]\\frac{1}{2} ; 1]$",
              "$[\\frac{1}{2} ; 1]$",
              "$]1 ; +\\infty[$",
              "$]-\\infty ; \\frac{1}{2}[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fraction est négative sur $]\\frac{1}{2} ; 1[$ et nulle en $1$ : les solutions sont $]\\frac{1}{2} ; 1]$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "La valeur interdite n'est jamais incluse",
          "stepTheme": "La valeur interdite n'est jamais incluse",
          "stepBadge": "La valeur interdite n'est jamais incluse",
          "paragraphText": "• Piège : même avec une inégalité large, la valeur qui annule le dénominateur n'est jamais solution, car la fraction n'y est pas définie.\nIci, $\\frac{1}{2}$ reste exclue de l'ensemble des solutions.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08_q4",
            "type": "mcq",
            "prompt": "La valeur $\\frac{1}{2}$ est-elle solution de l'inéquation $\\frac{x - 1}{2x - 1} \\leq 0$ ?",
            "options": [
              "Oui, car l'inégalité est large",
              "Oui, car le numérateur y est négatif",
              "Non, car la fraction n'y est pas définie",
              "Non, car le numérateur y est positif"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En $\\frac{1}{2}$, le dénominateur s'annule : la fraction n'existe pas, donc cette valeur ne peut pas être solution."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La borne où le numérateur s'annule",
          "stepTheme": "La borne où le numérateur s'annule",
          "stepBadge": "La borne où le numérateur s'annule",
          "paragraphText": "• La valeur qui annule le numérateur, ici $1$, rend la fraction nulle : elle vérifie les inégalités larges comme $R(x) \\leq 0$.\nElle est donc incluse dans l'ensemble des solutions, contrairement à la valeur interdite.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08_q5",
            "type": "mcq",
            "prompt": "La valeur $1$ est-elle solution de l'inéquation $\\frac{x - 1}{2x - 1} \\leq 0$ ?",
            "options": [
              "Non, car la fraction y est positive",
              "Oui, car la fraction y est nulle",
              "Non, car elle est interdite",
              "Oui, car le dénominateur y est nul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En $1$, le numérateur s'annule, donc $R(1) = 0$, qui vérifie bien l'inégalité large."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Un renforcement avec un second membre",
          "stepTheme": "Un renforcement avec un second membre",
          "stepBadge": "Un renforcement avec un second membre",
          "paragraphText": "• Exercice de renforcement de la leçon : l'inéquation $\\frac{-x + 3}{2x - 3} \\geq 2$ se ramène à $\\frac{-5x + 9}{2x - 3} \\geq 0$, de contrainte $x \\neq \\frac{3}{2}$.\nSon tableau de signe donne des solutions entre $\\frac{3}{2}$ et $\\frac{9}{5}$, borne $\\frac{9}{5}$ incluse.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $\\frac{-x + 3}{2x - 3} \\geq 2$ ?",
            "options": [
              "$[\\frac{3}{2} ; \\frac{9}{5}]$",
              "$]-\\infty ; \\frac{3}{2}[$",
              "$\\{\\frac{9}{5}\\}$",
              "$]\\frac{3}{2} ; \\frac{9}{5}]$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Après réduction à $\\frac{-5x + 9}{2x - 3} \\geq 0$, le tableau de signe donne $]\\frac{3}{2} ; \\frac{9}{5}]$ : la valeur interdite est exclue, le zéro du numérateur est inclus."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08_q1",
          "type": "mcq",
          "prompt": "Quelle valeur est interdite pour la fraction $R(x) = \\frac{x - 1}{2x - 1}$ ?",
          "options": [
            "$1$",
            "$0$",
            "$-1$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le dénominateur $2x - 1$ s'annule en $x = \\frac{1}{2}$ : cette valeur est interdite."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08_q2",
          "type": "mcq",
          "prompt": "Quel est le signe de $R(x) = \\frac{x - 1}{2x - 1}$ pour $x$ dans l'intervalle $]1 ; +\\infty[$ ?",
          "options": [
            "Négatif",
            "Positif",
            "Nul",
            "Indéterminé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Numérateur et dénominateur sont positifs sur cet intervalle : leur quotient est positif."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $\\frac{x - 1}{2x - 1} \\leq 0$ ?",
          "options": [
            "$]\\frac{1}{2} ; 1]$",
            "$[\\frac{1}{2} ; 1]$",
            "$]1 ; +\\infty[$",
            "$]-\\infty ; \\frac{1}{2}[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fraction est négative sur $]\\frac{1}{2} ; 1[$ et nulle en $1$ : les solutions sont $]\\frac{1}{2} ; 1]$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08_q4",
          "type": "mcq",
          "prompt": "La valeur $\\frac{1}{2}$ est-elle solution de l'inéquation $\\frac{x - 1}{2x - 1} \\leq 0$ ?",
          "options": [
            "Oui, car l'inégalité est large",
            "Oui, car le numérateur y est négatif",
            "Non, car la fraction n'y est pas définie",
            "Non, car le numérateur y est positif"
          ],
          "correctAnswerIndex": 2,
          "explanation": "En $\\frac{1}{2}$, le dénominateur s'annule : la fraction n'existe pas, donc cette valeur ne peut pas être solution."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08_q5",
          "type": "mcq",
          "prompt": "La valeur $1$ est-elle solution de l'inéquation $\\frac{x - 1}{2x - 1} \\leq 0$ ?",
          "options": [
            "Non, car la fraction y est positive",
            "Oui, car la fraction y est nulle",
            "Non, car elle est interdite",
            "Oui, car le dénominateur y est nul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En $1$, le numérateur s'annule, donc $R(1) = 0$, qui vérifie bien l'inégalité large."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_dans_r_p08_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $\\frac{-x + 3}{2x - 3} \\geq 2$ ?",
          "options": [
            "$[\\frac{3}{2} ; \\frac{9}{5}]$",
            "$]-\\infty ; \\frac{3}{2}[$",
            "$\\{\\frac{9}{5}\\}$",
            "$]\\frac{3}{2} ; \\frac{9}{5}]$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Après réduction à $\\frac{-5x + 9}{2x - 3} \\geq 0$, le tableau de signe donne $]\\frac{3}{2} ; \\frac{9}{5}]$ : la valeur interdite est exclue, le zéro du numérateur est inclus."
        }
      ]
    }
  ]
};
