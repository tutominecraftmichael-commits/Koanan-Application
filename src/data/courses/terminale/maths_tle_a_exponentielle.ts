import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Fonction exponentielle » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1615
export const MATHS_TLE_A_L04_EXPONENTIELLE: CurriculumChapter = {
  "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 4,
  "title": "Leçon 4 : Fonction exponentielle népérienne",
  "summary": "Des élèves travaillant dans le service marketing d'un grand magasin cherchent, à partir de la proportion $P(t) = 1 - e^{-0{,}21t}$ de la population informée après $t$ jours d'annonces, combien de jours de publicité il faudra pour atteindre $90\\%$ de la population : ils découvrent la fonction exponentielle népérienne, ses propriétés, ses limites et ses équations.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1615",
  "points": [
    {
      "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01",
      "order": 1,
      "title": "Définition et premières conséquences",
      "summary": "Définir exp comme réciproque de ln et connaître ses premières valeurs.",
      "conceptExplanation": "La fonction exponentielle népérienne, notée $\\exp$, est la fonction réciproque de la fonction logarithme népérien.\nAutre notation : pour tout nombre réel $x$, $\\exp(x)$ se note également $e^x$.\nConséquences de la définition :\n• L'ensemble de définition de la fonction $\\exp$ est $\\mathbb{R}$.\n• Pour tout nombre réel $a$ strictement positif et pour tout nombre réel $b$, $\\ln(a) = b$ équivaut à $a = e^b$.\n• $e^0 = 1$ et $e^1 = e$.\n• Pour tout nombre réel $a$, $e^a > 0$.\n• Pour tout nombre réel $a$, $\\ln(e^a) = a$.\n• Pour tout nombre réel $a$ strictement positif, $e^{\\ln a} = a$.",
      "keyRule": "exp est la réciproque de ln : $\\ln(e^a) = a$ pour tout réel a, et $e^{\\ln a} = a$ pour tout réel a strictement positif.",
      "formulas": [
        {
          "name": "Définition de exp",
          "formula": "\\exp \\text{ est la fonction réciproque de } \\ln \\text{ et } \\exp(x) = e^x \\text{ pour tout réel } x"
        },
        {
          "name": "Conséquences",
          "formula": "e^0 = 1 \\text{ , } e^1 = e \\text{ , } \\ln(e^a) = a \\text{ et } e^{\\ln a} = a \\text{ pour } a > 0"
        }
      ],
      "workedExample": {
        "title": "Simplifier avec ln et exp (exercice 2 corrigé)",
        "statement": "Écris chacun des nombres $A = \\ln(e^8)$, $B = \\ln(e^{-5})$, $C = e^{\\ln 3}$ et $D = e^{-\\ln 2}$ sous forme de nombre rationnel.",
        "methodSteps": [
          "$A = \\ln(e^8) = 8$.",
          "$B = \\ln(e^{-5}) = -5$.",
          "$C = e^{\\ln 3} = 3$.",
          "$D = e^{-\\ln 2} = e^{\\ln\\left(\\frac{1}{2}\\right)} = \\frac{1}{2}$."
        ],
        "conclusion": "$A = 8$, $B = -5$, $C = 3$ et $D = \\frac{1}{2}$ : ln et exp se simplifient mutuellement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de exp",
          "stepTheme": "La définition de exp",
          "stepBadge": "La définition de exp",
          "paragraphText": "• La fonction exponentielle népérienne, notée $\\exp$, est la fonction réciproque de la fonction logarithme népérien.\nSon ensemble de définition est $\\mathbb{R}$ : tout nombre réel a une image par $\\exp$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01_q1",
            "type": "mcq",
            "prompt": "La fonction exponentielle népérienne est définie comme :",
            "options": [
              "La dérivée de la fonction $\\ln$",
              "La fonction réciproque de la fonction logarithme népérien",
              "La primitive de la fonction $\\ln$",
              "La fonction inverse de $x \\mapsto \\frac{1}{x}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $\\exp$ est la fonction réciproque de la fonction logarithme népérien."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La notation e puissance x",
          "stepTheme": "La notation e puissance x",
          "stepBadge": "La notation e puissance x",
          "paragraphText": "• Pour tout nombre réel $x$, $\\exp(x)$ se note également $e^x$.\nOn retient les valeurs de référence : $e^0 = 1$ et $e^1 = e$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01_q2",
            "type": "mcq",
            "prompt": "Que vaut $e^0$ ?",
            "options": [
              "$0$",
              "$e$",
              "$1$",
              "$-1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conséquence de la définition donnée dans la leçon : $e^0 = 1$ (et $e^1 = e$)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "ln et exp se simplifient",
          "stepTheme": "ln et exp se simplifient",
          "stepBadge": "ln et exp se simplifient",
          "paragraphText": "• Pour tout nombre réel $a$, $\\ln(e^a) = a$.\n• Pour tout nombre réel $a$ strictement positif, $e^{\\ln a} = a$.\nCe sont les deux simplifications qui traduisent que $\\exp$ et $\\ln$ sont réciproques l'une de l'autre.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\ln(e^{51})$ ?",
            "options": [
              "$e^{51}$",
              "$\\ln 51$",
              "$1$",
              "$51$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pour tout réel $a$, $\\ln(e^a) = a$ : avec $a = 51$, on obtient $51$. C'est aussi la correction de l'exercice de fixation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une exponentielle est toujours positive",
          "stepTheme": "Une exponentielle est toujours positive",
          "stepBadge": "Une exponentielle est toujours positive",
          "paragraphText": "• Pour tout nombre réel $a$, $e^a > 0$.\nAinsi, même pour un exposant très négatif, une exponentielle reste strictement positive.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01_q4",
            "type": "mcq",
            "prompt": "Quelle affirmation est vraie ?",
            "options": [
              "$e^{-10} > 0$",
              "$e^{-10} < 0$",
              "$e^0 = 0$",
              "$e^{\\ln 12} = \\ln 12$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour tout réel $a$, $e^a > 0$ : $e^{-10}$ est strictement positif. Les autres affirmations sont celles que l'exercice de fixation corrige en faux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre e puissance ln a et ln a",
          "stepTheme": "Confondre e puissance ln a et ln a",
          "stepBadge": "Confondre e puissance ln a et ln a",
          "paragraphText": "Piège relevé dans l'exercice de fixation corrigé : affirmer que $e^{\\ln(12)}$ est égal à $\\ln 12$ est faux.\nComme $12$ est strictement positif, la simplification des fonctions réciproques donne le nombre lui-même.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01_q5",
            "type": "mcq",
            "prompt": "Que vaut $e^{\\ln(12)}$ ?",
            "options": [
              "$\\ln 12$",
              "$12$",
              "$e^{12}$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour tout réel strictement positif $a$, $e^{\\ln a} = a$ : avec $a = 12$, on obtient $12$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un exposant négatif de logarithme",
          "stepTheme": "Un exposant négatif de logarithme",
          "stepBadge": "Un exposant négatif de logarithme",
          "paragraphText": "Exemple de la leçon (exercice 2) : $D = e^{-\\ln 2}$.\nOn écrit d'abord $-\\ln 2 = \\ln\\left(\\frac{1}{2}\\right)$ grâce aux propriétés de $\\ln$, puis on simplifie $\\exp$ et $\\ln$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01_q6",
            "type": "mcq",
            "prompt": "Que vaut $D = e^{-\\ln 2}$ ?",
            "options": [
              "$2$",
              "$1$",
              "$\\frac{1}{2}$",
              "$-2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$e^{-\\ln 2} = e^{\\ln\\left(\\frac{1}{2}\\right)} = \\frac{1}{2}$, d'après la solution de l'exercice 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01_q1",
          "type": "mcq",
          "prompt": "La fonction exponentielle népérienne est définie comme :",
          "options": [
            "La dérivée de la fonction $\\ln$",
            "La fonction réciproque de la fonction logarithme népérien",
            "La primitive de la fonction $\\ln$",
            "La fonction inverse de $x \\mapsto \\frac{1}{x}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $\\exp$ est la fonction réciproque de la fonction logarithme népérien."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01_q2",
          "type": "mcq",
          "prompt": "Que vaut $e^0$ ?",
          "options": [
            "$0$",
            "$e$",
            "$1$",
            "$-1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conséquence de la définition donnée dans la leçon : $e^0 = 1$ (et $e^1 = e$)."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\ln(e^{51})$ ?",
          "options": [
            "$e^{51}$",
            "$\\ln 51$",
            "$1$",
            "$51$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pour tout réel $a$, $\\ln(e^a) = a$ : avec $a = 51$, on obtient $51$. C'est aussi la correction de l'exercice de fixation."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01_q4",
          "type": "mcq",
          "prompt": "Quelle affirmation est vraie ?",
          "options": [
            "$e^{-10} > 0$",
            "$e^{-10} < 0$",
            "$e^0 = 0$",
            "$e^{\\ln 12} = \\ln 12$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout réel $a$, $e^a > 0$ : $e^{-10}$ est strictement positif. Les autres affirmations sont celles que l'exercice de fixation corrige en faux."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01_q5",
          "type": "mcq",
          "prompt": "Que vaut $e^{\\ln(12)}$ ?",
          "options": [
            "$\\ln 12$",
            "$12$",
            "$e^{12}$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour tout réel strictement positif $a$, $e^{\\ln a} = a$ : avec $a = 12$, on obtient $12$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p01_q6",
          "type": "mcq",
          "prompt": "Que vaut $D = e^{-\\ln 2}$ ?",
          "options": [
            "$2$",
            "$1$",
            "$\\frac{1}{2}$",
            "$-2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$e^{-\\ln 2} = e^{\\ln\\left(\\frac{1}{2}\\right)} = \\frac{1}{2}$, d'après la solution de l'exercice 2."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02",
      "order": 2,
      "title": "Propriétés algébriques de l'exponentielle",
      "summary": "Transformer produits, quotients, inverses et puissances d'exponentielles.",
      "conceptExplanation": "Propriété : pour tous nombres réels $a$ et $b$, et $r$ un nombre rationnel :\n• $e^a \\times e^b = e^{a + b}$.\n• $\\frac{e^a}{e^b} = e^{a - b}$.\n• $(e^a)^r = e^{a \\times r}$.\n• $\\frac{1}{e^a} = e^{-a}$.\nCes propriétés permettent d'écrire un produit, un quotient ou une puissance d'exponentielles sous la forme d'une seule exponentielle $e^k$, avec $k \\in \\mathbb{R}$.",
      "keyRule": "Avec les exponentielles, un produit devient une somme d'exposants et un quotient une différence d'exposants.",
      "formulas": [
        {
          "name": "Produit et quotient",
          "formula": "e^a \\times e^b = e^{a + b} \\text{ et } \\frac{e^a}{e^b} = e^{a - b} \\text{ pour tous réels } a \\text{ et } b"
        },
        {
          "name": "Puissance et inverse",
          "formula": "(e^a)^r = e^{a \\times r} \\text{ pour } r \\text{ rationnel, et } \\frac{1}{e^a} = e^{-a}"
        }
      ],
      "workedExample": {
        "title": "Écrire sous la forme e puissance k (exercice corrigé)",
        "statement": "Écris chacun des nombres $E = e^6 \\times e^{-4}$, $F = (e^{-2})^4$ et $G = \\frac{e^4}{e^{-5}}$ sous la forme $e^k$, avec $k \\in \\mathbb{R}$.",
        "methodSteps": [
          "$E = e^6 \\times e^{-4} = e^{6 + (-4)} = e^2$.",
          "$F = (e^{-2})^4 = e^{-2 \\times 4} = e^{-8}$.",
          "$G = \\frac{e^4}{e^{-5}} = e^{4 - (-5)} = e^{4 + 5} = e^9$."
        ],
        "conclusion": "$E = e^2$, $F = e^{-8}$ et $G = e^9$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le produit de deux exponentielles",
          "stepTheme": "Le produit de deux exponentielles",
          "stepBadge": "Le produit de deux exponentielles",
          "paragraphText": "• Pour tous réels $a$ et $b$ : $e^a \\times e^b = e^{a + b}$.\nOn additionne les exposants quand on multiplie deux exponentielles.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02_q1",
            "type": "mcq",
            "prompt": "Pour tous réels $a$ et $b$, $e^a \\times e^b$ vaut :",
            "options": [
              "$e^{a + b}$",
              "$e^{a \\times b}$",
              "$e^{a - b}$",
              "$(e \\times e)^{a + b}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Propriété algébrique de la leçon : $e^a \\times e^b = e^{a + b}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le quotient de deux exponentielles",
          "stepTheme": "Le quotient de deux exponentielles",
          "stepBadge": "Le quotient de deux exponentielles",
          "paragraphText": "• Pour tous réels $a$ et $b$ : $\\frac{e^a}{e^b} = e^{a - b}$.\nOn soustrait les exposants quand on divise deux exponentielles, et $\\frac{1}{e^a} = e^{-a}$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02_q2",
            "type": "mcq",
            "prompt": "Pour tous réels $a$ et $b$, $\\frac{e^a}{e^b}$ vaut :",
            "options": [
              "$e^{a + b}$",
              "$e^{\\frac{a}{b}}$",
              "$e^{a - b}$",
              "$e^{b - a}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Propriété algébrique de la leçon : $\\frac{e^a}{e^b} = e^{a - b}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La puissance d'une exponentielle",
          "stepTheme": "La puissance d'une exponentielle",
          "stepBadge": "La puissance d'une exponentielle",
          "paragraphText": "• Pour tout réel $a$ et tout rationnel $r$ : $(e^a)^r = e^{a \\times r}$.\nOn multiplie les exposants quand on élève une exponentielle à une puissance.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02_q3",
            "type": "mcq",
            "prompt": "Que vaut $(e^{-2})^4$ ?",
            "options": [
              "$e^{8}$",
              "$e^{-8}$",
              "$e^{-6}$",
              "$e^{2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(e^{-2})^4 = e^{-2 \\times 4} = e^{-8}$, d'après la solution de l'exercice de fixation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un produit avec un exposant négatif",
          "stepTheme": "Un produit avec un exposant négatif",
          "stepBadge": "Un produit avec un exposant négatif",
          "paragraphText": "Exemple de la leçon : $E = e^6 \\times e^{-4}$.\nOn additionne les exposants, en faisant attention au signe de $-4$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02_q4",
            "type": "mcq",
            "prompt": "Que vaut $E = e^6 \\times e^{-4}$ ?",
            "options": [
              "$e^{10}$",
              "$e^{-24}$",
              "$e^{-2}$",
              "$e^{2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$E = e^{6 + (-4)} = e^2$, d'après la solution de l'exercice de fixation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un quotient avec un exposant négatif",
          "stepTheme": "Un quotient avec un exposant négatif",
          "stepBadge": "Un quotient avec un exposant négatif",
          "paragraphText": "Exemple de la leçon : $G = \\frac{e^4}{e^{-5}}$.\nOn soustrait les exposants : soustraire $-5$ revient à ajouter $5$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02_q5",
            "type": "mcq",
            "prompt": "Que vaut $G = \\frac{e^4}{e^{-5}}$ ?",
            "options": [
              "$e^{-1}$",
              "$e^{9}$",
              "$e^{-9}$",
              "$e^{20}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$G = e^{4 - (-5)} = e^{4 + 5} = e^9$, d'après la solution de l'exercice de fixation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Produit ou puissance : ne pas confondre",
          "stepTheme": "Produit ou puissance : ne pas confondre",
          "stepBadge": "Produit ou puissance : ne pas confondre",
          "paragraphText": "Piège : dans un produit, on additionne les exposants ; dans une puissance d'exponentielle, on les multiplie.\nAinsi, pour $(e^2)^3$, l'exposant final n'est ni la somme des exposants, ni leur écriture côte à côte.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02_q6",
            "type": "mcq",
            "prompt": "Que vaut $(e^2)^3$ ?",
            "options": [
              "$e^5$",
              "$e^{32}$",
              "$e^6$",
              "$e^{-1}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(e^2)^3 = e^{2 \\times 3} = e^6$ : on multiplie les exposants, on ne les additionne pas."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02_q1",
          "type": "mcq",
          "prompt": "Pour tous réels $a$ et $b$, $e^a \\times e^b$ vaut :",
          "options": [
            "$e^{a + b}$",
            "$e^{a \\times b}$",
            "$e^{a - b}$",
            "$(e \\times e)^{a + b}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Propriété algébrique de la leçon : $e^a \\times e^b = e^{a + b}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02_q2",
          "type": "mcq",
          "prompt": "Pour tous réels $a$ et $b$, $\\frac{e^a}{e^b}$ vaut :",
          "options": [
            "$e^{a + b}$",
            "$e^{\\frac{a}{b}}$",
            "$e^{a - b}$",
            "$e^{b - a}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Propriété algébrique de la leçon : $\\frac{e^a}{e^b} = e^{a - b}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02_q3",
          "type": "mcq",
          "prompt": "Que vaut $(e^{-2})^4$ ?",
          "options": [
            "$e^{8}$",
            "$e^{-8}$",
            "$e^{-6}$",
            "$e^{2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(e^{-2})^4 = e^{-2 \\times 4} = e^{-8}$, d'après la solution de l'exercice de fixation."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02_q4",
          "type": "mcq",
          "prompt": "Que vaut $E = e^6 \\times e^{-4}$ ?",
          "options": [
            "$e^{10}$",
            "$e^{-24}$",
            "$e^{-2}$",
            "$e^{2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$E = e^{6 + (-4)} = e^2$, d'après la solution de l'exercice de fixation."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02_q5",
          "type": "mcq",
          "prompt": "Que vaut $G = \\frac{e^4}{e^{-5}}$ ?",
          "options": [
            "$e^{-1}$",
            "$e^{9}$",
            "$e^{-9}$",
            "$e^{20}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$G = e^{4 - (-5)} = e^{4 + 5} = e^9$, d'après la solution de l'exercice de fixation."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p02_q6",
          "type": "mcq",
          "prompt": "Que vaut $(e^2)^3$ ?",
          "options": [
            "$e^5$",
            "$e^{32}$",
            "$e^6$",
            "$e^{-1}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(e^2)^3 = e^{2 \\times 3} = e^6$ : on multiplie les exposants, on ne les additionne pas."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03",
      "order": 3,
      "title": "Limites, dérivée et représentation graphique",
      "summary": "Connaître les limites de référence de exp, sa dérivée et son asymptote.",
      "conceptExplanation": "Limites de référence :\n• $\\lim_{x \\to +\\infty} e^x = +\\infty$.\n• $\\lim_{x \\to -\\infty} e^x = 0$.\n• $\\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty$.\n• $\\lim_{x \\to -\\infty} x e^x = 0$.\nDérivée et variation : la fonction exponentielle népérienne est dérivable sur $\\mathbb{R}$ et pour tout nombre réel $x$, $(e^x)' = e^x$. Comme $e^x > 0$, la fonction exponentielle népérienne est strictement croissante sur $\\mathbb{R}$, de $0$ à $+\\infty$.\nReprésentation graphique : comme $\\lim_{x \\to -\\infty} e^x = 0$, la droite d'équation $y = 0$, c'est-à-dire l'axe des abscisses, est asymptote horizontale à la courbe représentative de $\\exp$ en $-\\infty$.",
      "keyRule": "exp est sa propre dérivée, elle est strictement croissante sur $\\mathbb{R}$, et sa courbe admet l'axe des abscisses pour asymptote en moins l'infini.",
      "formulas": [
        {
          "name": "Limites aux bornes",
          "formula": "\\lim_{x \\to +\\infty} e^x = +\\infty \\text{ et } \\lim_{x \\to -\\infty} e^x = 0"
        },
        {
          "name": "Limites de comparaison",
          "formula": "\\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty \\text{ et } \\lim_{x \\to -\\infty} x e^x = 0"
        },
        {
          "name": "Dérivée de exp",
          "formula": "(e^x)' = e^x \\text{ pour tout réel } x"
        }
      ],
      "workedExample": {
        "title": "La limite de 2x − 1 − e^x en plus l'infini (exercice corrigé)",
        "statement": "Calcule $\\lim_{x \\to +\\infty} (2x - 1 - e^x)$.",
        "methodSteps": [
          "On factorise par $x$ : $2x - 1 - e^x = x \\left(2 - \\frac{1}{x} - \\frac{e^x}{x}\\right)$.",
          "Quand $x$ tend vers $+\\infty$, $x$ tend vers $+\\infty$.",
          "Le facteur entre parenthèses tend vers $-\\infty$, car $\\frac{e^x}{x}$ tend vers $+\\infty$."
        ],
        "conclusion": "$\\lim_{x \\to +\\infty} (2x - 1 - e^x) = -\\infty$ : en $+\\infty$, $e^x$ l'emporte sur $2x - 1$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les limites aux bornes",
          "stepTheme": "Les limites aux bornes",
          "stepBadge": "Les limites aux bornes",
          "paragraphText": "• $\\lim_{x \\to +\\infty} e^x = +\\infty$ et $\\lim_{x \\to -\\infty} e^x = 0$.\nCe sont les deux premières limites de référence de la leçon, qui donnent les extrémités du tableau de variation de $\\exp$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} e^x$ ?",
            "options": [
              "$+\\infty$",
              "$0$",
              "$-\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Limite de référence (2) de la leçon : $e^x$ tend vers $0$ quand $x$ tend vers $-\\infty$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La limite de e puissance x sur x",
          "stepTheme": "La limite de e puissance x sur x",
          "stepBadge": "La limite de e puissance x sur x",
          "paragraphText": "• $\\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty$.\nC'est la troisième limite de référence de la leçon : en $+\\infty$, $e^x$ croît beaucoup plus vite que $x$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\frac{e^x}{x}$ ?",
            "options": [
              "$0$",
              "$1$",
              "$+\\infty$",
              "$e$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Limite de référence (3) de la leçon : $\\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La limite de x e puissance x en moins l'infini",
          "stepTheme": "La limite de x e puissance x en moins l'infini",
          "stepBadge": "La limite de x e puissance x en moins l'infini",
          "paragraphText": "• $\\lim_{x \\to -\\infty} x e^x = 0$.\nC'est la quatrième limite de référence de la leçon, utilisée dans les calculs de limites en $-\\infty$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} x e^x$ ?",
            "options": [
              "$0$",
              "$-\\infty$",
              "$+\\infty$",
              "$-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Limite de référence (4) de la leçon : $\\lim_{x \\to -\\infty} x e^x = 0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "exp est sa propre dérivée",
          "stepTheme": "exp est sa propre dérivée",
          "stepBadge": "exp est sa propre dérivée",
          "paragraphText": "• La fonction exponentielle népérienne est dérivable sur $\\mathbb{R}$ et $(e^x)' = e^x$ pour tout réel $x$.\nComme $e^x > 0$, la fonction exponentielle népérienne est strictement croissante sur $\\mathbb{R}$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q4",
            "type": "mcq",
            "prompt": "Pour tout réel $x$, $(e^x)'$ vaut :",
            "options": [
              "$\\frac{1}{x}$",
              "$x e^{x - 1}$",
              "$0$",
              "$e^x$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La dérivée de la fonction $x \\mapsto e^x$ est la fonction $x \\mapsto e^x$ elle-même, strictement positive : $\\exp$ est strictement croissante."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "En moins l'infini, la limite est 0",
          "stepTheme": "En moins l'infini, la limite est 0",
          "stepBadge": "En moins l'infini, la limite est 0",
          "paragraphText": "Piège : croire que $e^x$ tend vers $-\\infty$ quand $x$ tend vers $-\\infty$, par symétrie avec $+\\infty$.\nEn réalité la limite est $0$, et c'est ce qui donne l'asymptote horizontale d'équation $y = 0$ à la courbe de $\\exp$ en $-\\infty$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q5",
            "type": "mcq",
            "prompt": "Quelle affirmation est fausse ?",
            "options": [
              "$\\lim_{x \\to -\\infty} e^x = 0$",
              "$\\lim_{x \\to +\\infty} e^x = +\\infty$",
              "$\\lim_{x \\to -\\infty} e^x = -\\infty$",
              "La fonction $\\exp$ est strictement croissante sur $\\mathbb{R}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En $-\\infty$, $e^x$ tend vers $0$, pas vers $-\\infty$ : la troisième affirmation est fausse, les autres sont celles de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une limite simple en moins l'infini",
          "stepTheme": "Une limite simple en moins l'infini",
          "stepBadge": "Une limite simple en moins l'infini",
          "paragraphText": "Exemple de la leçon : la limite de $e^x + 3$ quand $x$ tend vers $-\\infty$.\nOn utilise $\\lim_{x \\to -\\infty} e^x = 0$ et la limite de la constante $3$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} (e^x + 3)$ ?",
            "options": [
              "$0$",
              "$3$",
              "$+\\infty$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après la solution de la leçon : $e^x$ tend vers $0$ et $3$ reste $3$, donc la somme tend vers $3$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "La dérivée de 2x + e puissance x",
          "stepTheme": "La dérivée de 2x + e puissance x",
          "stepBadge": "La dérivée de 2x + e puissance x",
          "paragraphText": "Exemple de la leçon : pour $f(x) = 2x + e^x$, on calcule $f'(x)$ puis le sens de variation de $f$.\nOn dérive terme à terme, et la dérivée de $e^x$ est $e^x$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q7",
            "type": "mcq",
            "prompt": "Pour $f(x) = 2x + e^x$, quelle affirmation est juste ?",
            "options": [
              "$f'(x) = 2 + e^x$, donc $f$ est strictement croissante sur $\\mathbb{R}$",
              "$f'(x) = 2 + \\frac{1}{x}$, donc $f$ est strictement croissante sur $\\mathbb{R}$",
              "$f'(x) = e^x$, donc $f$ est constante",
              "$f'(x) = 2 - e^x$, donc $f$ est strictement décroissante sur $\\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D'après la solution de la leçon : $f'(x) = 2 + e^x$, qui est strictement positif pour tout réel $x$, donc $f$ est strictement croissante sur $\\mathbb{R}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} e^x$ ?",
          "options": [
            "$+\\infty$",
            "$0$",
            "$-\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Limite de référence (2) de la leçon : $e^x$ tend vers $0$ quand $x$ tend vers $-\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\frac{e^x}{x}$ ?",
          "options": [
            "$0$",
            "$1$",
            "$+\\infty$",
            "$e$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Limite de référence (3) de la leçon : $\\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} x e^x$ ?",
          "options": [
            "$0$",
            "$-\\infty$",
            "$+\\infty$",
            "$-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Limite de référence (4) de la leçon : $\\lim_{x \\to -\\infty} x e^x = 0$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q4",
          "type": "mcq",
          "prompt": "Pour tout réel $x$, $(e^x)'$ vaut :",
          "options": [
            "$\\frac{1}{x}$",
            "$x e^{x - 1}$",
            "$0$",
            "$e^x$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La dérivée de la fonction $x \\mapsto e^x$ est la fonction $x \\mapsto e^x$ elle-même, strictement positive : $\\exp$ est strictement croissante."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q5",
          "type": "mcq",
          "prompt": "Quelle affirmation est fausse ?",
          "options": [
            "$\\lim_{x \\to -\\infty} e^x = 0$",
            "$\\lim_{x \\to +\\infty} e^x = +\\infty$",
            "$\\lim_{x \\to -\\infty} e^x = -\\infty$",
            "La fonction $\\exp$ est strictement croissante sur $\\mathbb{R}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "En $-\\infty$, $e^x$ tend vers $0$, pas vers $-\\infty$ : la troisième affirmation est fausse, les autres sont celles de la leçon."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} (e^x + 3)$ ?",
          "options": [
            "$0$",
            "$3$",
            "$+\\infty$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après la solution de la leçon : $e^x$ tend vers $0$ et $3$ reste $3$, donc la somme tend vers $3$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p03_q7",
          "type": "mcq",
          "prompt": "Pour $f(x) = 2x + e^x$, quelle affirmation est juste ?",
          "options": [
            "$f'(x) = 2 + e^x$, donc $f$ est strictement croissante sur $\\mathbb{R}$",
            "$f'(x) = 2 + \\frac{1}{x}$, donc $f$ est strictement croissante sur $\\mathbb{R}$",
            "$f'(x) = e^x$, donc $f$ est constante",
            "$f'(x) = 2 - e^x$, donc $f$ est strictement décroissante sur $\\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D'après la solution de la leçon : $f'(x) = 2 + e^x$, qui est strictement positif pour tout réel $x$, donc $f$ est strictement croissante sur $\\mathbb{R}$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04",
      "order": 4,
      "title": "Équations et inéquations avec l'exponentielle",
      "summary": "Résoudre des équations et inéquations avec exp grâce à sa croissance stricte.",
      "conceptExplanation": "Propriété : pour tous nombres réels $a$ et $b$ : $e^a = e^b$ équivaut à $a = b$ ; $e^a < e^b$ équivaut à $a < b$ ; $e^a \\leq e^b$ équivaut à $a \\leq b$ ; $e^a > e^b$ équivaut à $a > b$ ; $e^a \\geq e^b$ équivaut à $a \\geq b$.\nMéthode : ces équations et inéquations se résolvent dans $\\mathbb{R}$ tout entier, sans ensemble de validité à restreindre. Pour une équation du type $e^x = c$ avec $c$ strictement positif, on passe au logarithme. Pour une équation en $(e^x)^2$, on pose $X = e^x$, en retenant que $X > 0$, et on résout l'équation du second degré en $X$.",
      "keyRule": "exp conserve l'ordre et l'égalité : on peut enlever les exponentielles des deux côtés, et un $X$ négatif obtenu après le changement d'inconnue est toujours rejeté.",
      "formulas": [
        {
          "name": "Équivalences avec exp",
          "formula": "e^a = e^b \\iff a = b \\text{ et } e^a < e^b \\iff a < b \\text{ pour tous réels } a \\text{ et } b"
        }
      ],
      "workedExample": {
        "title": "Résoudre une équation en (e^x) au carré (exemple corrigé)",
        "statement": "Résous dans $\\mathbb{R}$ l'équation $e^{2x} + e^x - 6 = 0$.",
        "methodSteps": [
          "L'ensemble de validité est $V = \\mathbb{R}$ et l'équation équivaut à $(e^x)^2 + e^x - 6 = 0$.",
          "On pose $X = e^x$, donc $X > 0$ : l'équation devient $X^2 + X - 6 = 0$.",
          "Le discriminant vaut $25$ : les solutions sont $X = -3$ et $X = 2$.",
          "$e^x = -3$ est impossible car $e^x > 0$ pour tout réel $x$ ; $e^x = 2$ équivaut à $x = \\ln 2$."
        ],
        "conclusion": "$S_{\\mathbb{R}} = \\{\\ln 2\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les équivalences avec exp",
          "stepTheme": "Les équivalences avec exp",
          "stepBadge": "Les équivalences avec exp",
          "paragraphText": "• Pour tous réels $a$ et $b$ : $e^a = e^b$ équivaut à $a = b$, et $e^a < e^b$ équivaut à $a < b$.\nLes mêmes équivalences valent avec les inégalités larges. C'est la propriété qui permet de résoudre les équations et inéquations avec la fonction exponentielle.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q1",
            "type": "mcq",
            "prompt": "Pour tous réels $a$ et $b$, $e^a = e^b$ équivaut à :",
            "options": [
              "$a = -b$",
              "$a = b$",
              "$a + b = 0$",
              "$a \\times b = 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Propriété de la leçon : pour tous réels $a$ et $b$, $e^a = e^b$ équivaut à $a = b$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une première équation",
          "stepTheme": "Une première équation",
          "stepBadge": "Une première équation",
          "paragraphText": "Exemple de la leçon : $e^{2x - 1} = e^{x + 5}$, dans $\\mathbb{R}$.\nD'après la propriété, l'équation équivaut à l'égalité des exposants.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q2",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x - 1} = e^{x + 5}$ ?",
            "options": [
              "$\\{5\\}$",
              "$\\{-6\\}$",
              "$\\{1\\}$",
              "$\\{6\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$e^{2x - 1} = e^{x + 5}$ équivaut à $2x - 1 = x + 5$, donc $x = 6$ : $S_{\\mathbb{R}} = \\{6\\}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une équation résolue par ln",
          "stepTheme": "Une équation résolue par ln",
          "stepBadge": "Une équation résolue par ln",
          "paragraphText": "Exemple de la leçon : $e^{x - 2} = 5$, dans $\\mathbb{R}$.\nOn écrit $5 = e^{\\ln 5}$, donc l'équation équivaut à $e^{x - 2} = e^{\\ln 5}$, puis à $x - 2 = \\ln 5$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{x - 2} = 5$ ?",
            "options": [
              "$\\{\\ln 5 - 2\\}$",
              "$\\{5\\}$",
              "$\\{2 + \\ln 5\\}$",
              "$\\{e^5\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$e^{x - 2} = 5$ équivaut à $x - 2 = \\ln 5$, donc $x = 2 + \\ln 5$ : $S_{\\mathbb{R}} = \\{2 + \\ln 5\\}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Poser X égal à e puissance x",
          "stepTheme": "Poser X égal à e puissance x",
          "stepBadge": "Poser X égal à e puissance x",
          "paragraphText": "Exemple de la leçon : $e^{2x} + e^x - 6 = 0$.\nOn pose $X = e^x$, avec $X > 0$ : l'équation devient $X^2 + X - 6 = 0$, de discriminant $25$, dont les solutions sont $X = -3$ et $X = 2$. On revient ensuite à $e^x$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x} + e^x - 6 = 0$ ?",
            "options": [
              "$\\{\\ln 2\\}$",
              "$\\{-3 ; 2\\}$",
              "$\\{\\ln 3 ; \\ln 2\\}$",
              "$\\{2\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seul $X = 2$ convient car $X = e^x > 0$ : $e^x = 2$ équivaut à $x = \\ln 2$, donc $S_{\\mathbb{R}} = \\{\\ln 2\\}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un X négatif est impossible",
          "stepTheme": "Un X négatif est impossible",
          "stepBadge": "Un X négatif est impossible",
          "paragraphText": "Piège : garder la solution $X = -3$ obtenue après avoir posé $X = e^x$.\nLa leçon rejette cette valeur : $e^x = -3$ est impossible, car $e^x > 0$ pour tout réel $x$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q5",
            "type": "mcq",
            "prompt": "Dans la résolution de $e^{2x} + e^x - 6 = 0$, pourquoi la valeur $X = -3$ est-elle rejetée ?",
            "options": [
              "Parce que $e^x > 0$ pour tout réel $x$",
              "Parce que $X$ doit être un entier",
              "Parce que $-3$ est un nombre impair",
              "Parce que l'ensemble de validité est vide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Après le changement d'inconnue $X = e^x$, seules les valeurs strictement positives de $X$ peuvent convenir, car $e^x > 0$ pour tout réel $x$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une inéquation avec exp",
          "stepTheme": "Une inéquation avec exp",
          "stepBadge": "Une inéquation avec exp",
          "paragraphText": "Exemple de la leçon : $e^{2x - 1} < 8$, dans $\\mathbb{R}$.\nOn prend le logarithme des deux membres : l'inéquation équivaut à $2x - 1 < \\ln 8$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x - 1} < 8$ ?",
            "options": [
              "$]\\frac{1 + \\ln 8}{2} ; +\\infty[$",
              "$]-\\infty ; \\frac{1 + \\ln 8}{2}[$",
              "$]-\\infty ; \\ln 8[$",
              "$[\\frac{1 + \\ln 8}{2} ; +\\infty[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$e^{2x - 1} < 8$ équivaut à $2x - 1 < \\ln 8$, donc $x < \\frac{1 + \\ln 8}{2}$ : $S_{\\mathbb{R}} = ]-\\infty ; \\frac{1 + \\ln 8}{2}[$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Une inéquation du second degré en e puissance x",
          "stepTheme": "Une inéquation du second degré en e puissance x",
          "stepBadge": "Une inéquation du second degré en e puissance x",
          "paragraphText": "Exemple de la leçon : $e^{2x} - 5 e^x + 6 \\geq 0$, dans $\\mathbb{R}$.\nOn pose $X = e^x$, avec $X > 0$ : $X^2 - 5X + 6 \\geq 0$ donne $X$ dans $]-\\infty ; 2] \\cup [3 ; +\\infty[$, donc $e^x \\leq 2$ ou $e^x \\geq 3$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q7",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x} - 5 e^x + 6 \\geq 0$ ?",
            "options": [
              "$[\\ln 2 ; \\ln 3]$",
              "$]-\\infty ; 2] \\cup [3 ; +\\infty[$",
              "$]-\\infty ; \\ln 2] \\cup [\\ln 3 ; +\\infty[$",
              "$[2 ; 3]$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$e^x \\leq 2$ équivaut à $x \\leq \\ln 2$ et $e^x \\geq 3$ équivaut à $x \\geq \\ln 3$ : $S_{\\mathbb{R}} = ]-\\infty ; \\ln 2] \\cup [\\ln 3 ; +\\infty[$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q1",
          "type": "mcq",
          "prompt": "Pour tous réels $a$ et $b$, $e^a = e^b$ équivaut à :",
          "options": [
            "$a = -b$",
            "$a = b$",
            "$a + b = 0$",
            "$a \\times b = 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Propriété de la leçon : pour tous réels $a$ et $b$, $e^a = e^b$ équivaut à $a = b$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x - 1} = e^{x + 5}$ ?",
          "options": [
            "$\\{5\\}$",
            "$\\{-6\\}$",
            "$\\{1\\}$",
            "$\\{6\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$e^{2x - 1} = e^{x + 5}$ équivaut à $2x - 1 = x + 5$, donc $x = 6$ : $S_{\\mathbb{R}} = \\{6\\}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{x - 2} = 5$ ?",
          "options": [
            "$\\{\\ln 5 - 2\\}$",
            "$\\{5\\}$",
            "$\\{2 + \\ln 5\\}$",
            "$\\{e^5\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$e^{x - 2} = 5$ équivaut à $x - 2 = \\ln 5$, donc $x = 2 + \\ln 5$ : $S_{\\mathbb{R}} = \\{2 + \\ln 5\\}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x} + e^x - 6 = 0$ ?",
          "options": [
            "$\\{\\ln 2\\}$",
            "$\\{-3 ; 2\\}$",
            "$\\{\\ln 3 ; \\ln 2\\}$",
            "$\\{2\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seul $X = 2$ convient car $X = e^x > 0$ : $e^x = 2$ équivaut à $x = \\ln 2$, donc $S_{\\mathbb{R}} = \\{\\ln 2\\}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q5",
          "type": "mcq",
          "prompt": "Dans la résolution de $e^{2x} + e^x - 6 = 0$, pourquoi la valeur $X = -3$ est-elle rejetée ?",
          "options": [
            "Parce que $e^x > 0$ pour tout réel $x$",
            "Parce que $X$ doit être un entier",
            "Parce que $-3$ est un nombre impair",
            "Parce que l'ensemble de validité est vide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Après le changement d'inconnue $X = e^x$, seules les valeurs strictement positives de $X$ peuvent convenir, car $e^x > 0$ pour tout réel $x$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x - 1} < 8$ ?",
          "options": [
            "$]\\frac{1 + \\ln 8}{2} ; +\\infty[$",
            "$]-\\infty ; \\frac{1 + \\ln 8}{2}[$",
            "$]-\\infty ; \\ln 8[$",
            "$[\\frac{1 + \\ln 8}{2} ; +\\infty[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$e^{2x - 1} < 8$ équivaut à $2x - 1 < \\ln 8$, donc $x < \\frac{1 + \\ln 8}{2}$ : $S_{\\mathbb{R}} = ]-\\infty ; \\frac{1 + \\ln 8}{2}[$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p04_q7",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x} - 5 e^x + 6 \\geq 0$ ?",
          "options": [
            "$[\\ln 2 ; \\ln 3]$",
            "$]-\\infty ; 2] \\cup [3 ; +\\infty[$",
            "$]-\\infty ; \\ln 2] \\cup [\\ln 3 ; +\\infty[$",
            "$[2 ; 3]$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$e^x \\leq 2$ équivaut à $x \\leq \\ln 2$ et $e^x \\geq 3$ équivaut à $x \\geq \\ln 3$ : $S_{\\mathbb{R}} = ]-\\infty ; \\ln 2] \\cup [\\ln 3 ; +\\infty[$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05",
      "order": 5,
      "title": "Dérivée de e puissance u et primitives",
      "summary": "Dériver e puissance u et reconnaître les primitives liées à exp, partie primitives réservée à la Terminale A1.",
      "conceptExplanation": "Dérivée : si $u$ est une fonction dérivable sur un intervalle $K$, alors $e^u$ est dérivable sur $K$ et $(e^u)' = u' e^u$.\nPrimitives (Terminale A1 uniquement) : si $u$ est une fonction dérivable sur un intervalle $K$, alors la fonction $u' e^u$ a pour primitive sur $K$ la fonction $e^u + \\alpha$, avec $\\alpha \\in \\mathbb{R}$.\nPoint méthode de la leçon : la fonction $x \\mapsto e^x$ a pour primitives les fonctions $x \\mapsto e^x + k$ ; la fonction $x \\mapsto e^{ax + b}$, avec $a \\neq 0$, a pour primitives les fonctions $x \\mapsto \\frac{1}{a} e^{ax + b} + k$ ; la fonction $x \\mapsto u'(x) e^{u(x)}$ a pour primitives les fonctions $x \\mapsto e^{u(x)} + k$.",
      "keyRule": "Dériver $e^u$ multiplie par $u'$ ; primitiver $e^{ax + b}$ divise par $a$.",
      "formulas": [
        {
          "name": "Dérivée de e puissance u",
          "formula": "(e^u)' = u' e^u \\text{ si } u \\text{ est dérivable }"
        },
        {
          "name": "Primitives liées à exp (A1 uniquement)",
          "formula": "\\text{ La fonction } u' e^u \\text{ a pour primitives } e^u + \\alpha \\text{ , avec } \\alpha \\in \\mathbb{R}"
        }
      ],
      "workedExample": {
        "title": "Les primitives de x fois e puissance x au carré (exercice corrigé)",
        "statement": "Détermine sur $\\mathbb{R}$ les primitives de la fonction $f$ définie par $f(x) = x e^{x^2}$.",
        "methodSteps": [
          "On pose $u(x) = x^2$ ; alors $u'(x) = 2x$.",
          "On a $u'(x) e^{u(x)} = 2x e^{x^2}$, donc $f(x) = \\frac{1}{2} u'(x) e^{u(x)}$.",
          "Les primitives sont donc les fonctions $F$ telles que $F(x) = \\frac{1}{2} e^{x^2} + \\alpha$, avec $\\alpha \\in \\mathbb{R}$."
        ],
        "conclusion": "Les primitives de $f$ sur $\\mathbb{R}$ sont les fonctions $x \\mapsto \\frac{1}{2} e^{x^2} + \\alpha$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dérivée de e puissance u",
          "stepTheme": "La dérivée de e puissance u",
          "stepBadge": "La dérivée de e puissance u",
          "paragraphText": "• Si $u$ est une fonction dérivable sur un intervalle $K$, alors $e^u$ est dérivable sur $K$ et $(e^u)' = u' e^u$.\nPar rapport à la dérivée de $e^x$, il apparaît le facteur $u'$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05_q1",
            "type": "mcq",
            "prompt": "Si $u$ est dérivable sur $K$, $(e^u)'$ vaut :",
            "options": [
              "$e^u$",
              "$e^{u'}$",
              "$u' e^u$",
              "$\\frac{e^u}{u'}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Propriété de la leçon : $(e^u)' = u' e^u$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Dériver une exponentielle affine",
          "stepTheme": "Dériver une exponentielle affine",
          "stepBadge": "Dériver une exponentielle affine",
          "paragraphText": "Exemple de la leçon : $f(x) = e^{-4x + 3}$, dérivable sur $\\mathbb{R}$.\nIci $u(x) = -4x + 3$, donc $u'(x) = -4$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05_q2",
            "type": "mcq",
            "prompt": "Pour $f(x) = e^{-4x + 3}$, que vaut $f'(x)$ ?",
            "options": [
              "$-4 e^{-4x + 3}$",
              "$e^{-4x + 3}$",
              "$4 e^{-4x + 3}$",
              "$-4x e^{-4x + 3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $u'(x) = -4$ : $f'(x) = u'(x) e^{u(x)} = -4 e^{-4x + 3}$, d'après la solution de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Dériver un produit avec exp",
          "stepTheme": "Dériver un produit avec exp",
          "stepBadge": "Dériver un produit avec exp",
          "paragraphText": "Exemple de la leçon : $f(x) = (2x + 1) e^x$, dérivable sur $\\mathbb{R}$.\nOn dérive le produit : la dérivée de $2x + 1$ est $2$, et celle de $e^x$ est $e^x$, puis on factorise par $e^x$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05_q3",
            "type": "mcq",
            "prompt": "Pour $f(x) = (2x + 1) e^x$, que vaut $f'(x)$ ?",
            "options": [
              "$2 e^x$",
              "$(2x + 3) e^x$",
              "$(2x + 1) e^x$",
              "$2x e^x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f'(x) = 2 e^x + (2x + 1) e^x = (2x + 3) e^x$, d'après la solution de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les primitives liées à exp",
          "stepTheme": "Les primitives liées à exp",
          "stepBadge": "Les primitives liées à exp",
          "paragraphText": "• Primitives (Terminale A1 uniquement) : si $u$ est dérivable sur $K$, la fonction $u' e^u$ a pour primitive sur $K$ la fonction $e^u + \\alpha$, avec $\\alpha \\in \\mathbb{R}$.\nEn particulier, la fonction $x \\mapsto e^x$ a pour primitives les fonctions $x \\mapsto e^x + k$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05_q4",
            "type": "mcq",
            "prompt": "Quelles sont les primitives de la fonction $x \\mapsto e^x$ sur $\\mathbb{R}$ ?",
            "options": [
              "Les fonctions $x \\mapsto x e^x + \\alpha$",
              "Les fonctions $x \\mapsto \\frac{e^x}{x} + \\alpha$",
              "Les fonctions $x \\mapsto \\ln x + \\alpha$",
              "Les fonctions $x \\mapsto e^x + \\alpha$, avec $\\alpha \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D'après le point méthode de la leçon, les primitives de $x \\mapsto e^x$ sont les fonctions $x \\mapsto e^x + k$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une primitive avec un exposant affine",
          "stepTheme": "Une primitive avec un exposant affine",
          "stepBadge": "Une primitive avec un exposant affine",
          "paragraphText": "Exemple de la leçon : les primitives de la fonction $f$ définie par $f(x) = e^{-3x + 7}$ sur $\\mathbb{R}$.\nOn reconnaît la forme $e^{ax + b}$ du point méthode, avec le coefficient $\\frac{1}{a}$ devant l'exponentielle dans la primitive.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05_q5",
            "type": "mcq",
            "prompt": "Quelles sont les primitives de $f(x) = e^{-3x + 7}$ sur $\\mathbb{R}$ ?",
            "options": [
              "Les fonctions $x \\mapsto -3 e^{-3x + 7} + \\alpha$",
              "Les fonctions $x \\mapsto -\\frac{1}{3} e^{-3x + 7} + \\alpha$",
              "Les fonctions $x \\mapsto e^{-3x + 7} + \\alpha$",
              "Les fonctions $x \\mapsto \\frac{1}{3} e^{-3x + 7} + \\alpha$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $a = -3$, le point méthode donne le coefficient $\\frac{1}{a} = -\\frac{1}{3}$ : les primitives sont $x \\mapsto -\\frac{1}{3} e^{-3x + 7} + \\alpha$, d'après la solution de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Oublier le coefficient devant l'exponentielle",
          "stepTheme": "Oublier le coefficient devant l'exponentielle",
          "stepBadge": "Oublier le coefficient devant l'exponentielle",
          "paragraphText": "Piège : primitiver $e^{ax + b}$ en recopiant simplement $e^{ax + b}$, sans le coefficient du point méthode.\nLa leçon donne, pour $a \\neq 0$, les primitives sous la forme $x \\mapsto \\frac{1}{a} e^{ax + b} + k$ : vérifier en dérivant permet de retrouver ce coefficient.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05_q6",
            "type": "mcq",
            "prompt": "Une primitive de la fonction $x \\mapsto e^{4x}$ sur $\\mathbb{R}$ est :",
            "options": [
              "$x \\mapsto e^{4x}$",
              "$x \\mapsto \\frac{1}{4} e^{4x}$",
              "$x \\mapsto 4 e^{4x}$",
              "$x \\mapsto \\frac{1}{4} e^x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $a = 4$, le point méthode donne le coefficient $\\frac{1}{a} = \\frac{1}{4}$ : une primitive est $x \\mapsto \\frac{1}{4} e^{4x}$, ce que confirme l'exercice d'application corrigé de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05_q1",
          "type": "mcq",
          "prompt": "Si $u$ est dérivable sur $K$, $(e^u)'$ vaut :",
          "options": [
            "$e^u$",
            "$e^{u'}$",
            "$u' e^u$",
            "$\\frac{e^u}{u'}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Propriété de la leçon : $(e^u)' = u' e^u$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05_q2",
          "type": "mcq",
          "prompt": "Pour $f(x) = e^{-4x + 3}$, que vaut $f'(x)$ ?",
          "options": [
            "$-4 e^{-4x + 3}$",
            "$e^{-4x + 3}$",
            "$4 e^{-4x + 3}$",
            "$-4x e^{-4x + 3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $u'(x) = -4$ : $f'(x) = u'(x) e^{u(x)} = -4 e^{-4x + 3}$, d'après la solution de la leçon."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05_q3",
          "type": "mcq",
          "prompt": "Pour $f(x) = (2x + 1) e^x$, que vaut $f'(x)$ ?",
          "options": [
            "$2 e^x$",
            "$(2x + 3) e^x$",
            "$(2x + 1) e^x$",
            "$2x e^x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f'(x) = 2 e^x + (2x + 1) e^x = (2x + 3) e^x$, d'après la solution de la leçon."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05_q4",
          "type": "mcq",
          "prompt": "Quelles sont les primitives de la fonction $x \\mapsto e^x$ sur $\\mathbb{R}$ ?",
          "options": [
            "Les fonctions $x \\mapsto x e^x + \\alpha$",
            "Les fonctions $x \\mapsto \\frac{e^x}{x} + \\alpha$",
            "Les fonctions $x \\mapsto \\ln x + \\alpha$",
            "Les fonctions $x \\mapsto e^x + \\alpha$, avec $\\alpha \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D'après le point méthode de la leçon, les primitives de $x \\mapsto e^x$ sont les fonctions $x \\mapsto e^x + k$."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05_q5",
          "type": "mcq",
          "prompt": "Quelles sont les primitives de $f(x) = e^{-3x + 7}$ sur $\\mathbb{R}$ ?",
          "options": [
            "Les fonctions $x \\mapsto -3 e^{-3x + 7} + \\alpha$",
            "Les fonctions $x \\mapsto -\\frac{1}{3} e^{-3x + 7} + \\alpha$",
            "Les fonctions $x \\mapsto e^{-3x + 7} + \\alpha$",
            "Les fonctions $x \\mapsto \\frac{1}{3} e^{-3x + 7} + \\alpha$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $a = -3$, le point méthode donne le coefficient $\\frac{1}{a} = -\\frac{1}{3}$ : les primitives sont $x \\mapsto -\\frac{1}{3} e^{-3x + 7} + \\alpha$, d'après la solution de la leçon."
        },
        {
          "id": "terminale_a1_maths_numerique_l04_fonction_exponentielle_p05_q6",
          "type": "mcq",
          "prompt": "Une primitive de la fonction $x \\mapsto e^{4x}$ sur $\\mathbb{R}$ est :",
          "options": [
            "$x \\mapsto e^{4x}$",
            "$x \\mapsto \\frac{1}{4} e^{4x}$",
            "$x \\mapsto 4 e^{4x}$",
            "$x \\mapsto \\frac{1}{4} e^x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $a = 4$, le point méthode donne le coefficient $\\frac{1}{a} = \\frac{1}{4}$ : une primitive est $x \\mapsto \\frac{1}{4} e^{4x}$, ce que confirme l'exercice d'application corrigé de la leçon."
        }
      ]
    }
  ]
};
