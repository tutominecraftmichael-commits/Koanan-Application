import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Logarithme népérien » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1617
export const MATHS_TLE_A_L03_LOGARITHME: CurriculumChapter = {
  "id": "terminale_a1_maths_numerique_l03_logarithme_neperien",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 3,
  "title": "Leçon 3 : Logarithme népérien",
  "summary": "Lors d'une campagne de dépistage de la fièvre typhoïde, la probabilité d'avoir au moins un élève non atteint après $n$ élèves examinés est $1 - (0{,}325)^n$ : pour savoir à partir de combien d'élèves cette probabilité dépasse $98\\%$, la classe découvre la fonction logarithme népérien, ses propriétés et la résolution d'équations et d'inéquations.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1617",
  "points": [
    {
      "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01",
      "order": 1,
      "title": "Définition et premières conséquences",
      "summary": "Définir la fonction ln, son ensemble de définition et sa dérivée.",
      "conceptExplanation": "La fonction logarithme népérien, notée $\\ln$, est la fonction dont la dérivée sur $]0 ; +\\infty[$ est la fonction $x \\mapsto \\frac{1}{x}$ et qui s'annule en $1$.\nConséquences de la définition :\n• L'ensemble de définition de la fonction $x \\mapsto \\ln(x)$ est $]0 ; +\\infty[$.\n• $\\ln 1 = 0$ : l'image de $1$ par la fonction $\\ln$ est $0$.\n• La fonction logarithme népérien est dérivable sur $]0 ; +\\infty[$ et pour tout $x > 0$, $\\ln'(x) = \\frac{1}{x}$.",
      "keyRule": "ln est la fonction de dérivée $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ qui s'annule en $1$ : elle n'existe que pour les nombres strictement positifs.",
      "formulas": [
        {
          "name": "Définition de ln",
          "formula": "\\ln \\text{ est la fonction de dérivée } x \\mapsto \\frac{1}{x} \\text{ sur } ]0 ; +\\infty[ \\text{ telle que } \\ln 1 = 0",
          "note": "Ensemble de définition : $]0 ; +\\infty[$."
        },
        {
          "name": "Dérivée de ln",
          "formula": "\\ln'(x) = \\frac{1}{x} \\text{ pour tout } x > 0"
        }
      ],
      "workedExample": {
        "title": "Vrai ou faux (exercice de fixation corrigé)",
        "statement": "Réponds par vrai ou par faux : l'ensemble de définition de $x \\mapsto \\ln(x)$ est $\\mathbb{R}$ ; $\\ln(1) = 0$ ; pour tout $x > 0$, $\\ln'(x) = \\frac{1}{x}$ ; $\\ln$ est la dérivée sur $]0 ; +\\infty[$ de $x \\mapsto \\frac{1}{x}$ ; l'image d'un nombre négatif par $\\ln$ existe.",
        "methodSteps": [
          "L'ensemble de définition est $]0 ; +\\infty[$, pas $\\mathbb{R}$ : première affirmation fausse.",
          "$\\ln(1) = 0$ : vrai, par définition.",
          "Pour tout $x > 0$, $\\ln'(x) = \\frac{1}{x}$ : vrai.",
          "C'est $\\frac{1}{x}$ qui est la dérivée de $\\ln$, et non l'inverse : affirmation fausse.",
          "Un nombre négatif n'a pas d'image par $\\ln$ : affirmation fausse."
        ],
        "conclusion": "Vrai pour $\\ln(1) = 0$ et $\\ln'(x) = \\frac{1}{x}$ ; faux pour les trois autres affirmations."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de ln",
          "stepTheme": "La définition de ln",
          "stepBadge": "La définition de ln",
          "paragraphText": "• La fonction logarithme népérien, notée $\\ln$, est la fonction dont la dérivée sur $]0 ; +\\infty[$ est la fonction $x \\mapsto \\frac{1}{x}$ et qui s'annule en $1$.\nC'est cette condition en $1$ qui distingue $\\ln$ des autres fonctions de même dérivée.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01_q1",
            "type": "mcq",
            "prompt": "La fonction $\\ln$ est définie comme :",
            "options": [
              "La dérivée de la fonction $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$",
              "La fonction dont la dérivée sur $]0 ; +\\infty[$ est $x \\mapsto \\frac{1}{x}$ et qui s'annule en $1$",
              "La fonction réciproque de $x \\mapsto \\frac{1}{x}$",
              "La fonction de dérivée $x \\mapsto x$ qui s'annule en $1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, la dérivée de $\\ln$ sur $]0 ; +\\infty[$ est $x \\mapsto \\frac{1}{x}$ et $\\ln$ s'annule en $1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'ensemble de définition",
          "stepTheme": "L'ensemble de définition",
          "stepBadge": "L'ensemble de définition",
          "paragraphText": "• L'ensemble de définition de la fonction $x \\mapsto \\ln(x)$ est $]0 ; +\\infty[$.\nLe logarithme népérien n'est donc défini que pour les nombres strictement positifs.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01_q2",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de la fonction $\\ln$ ?",
            "options": [
              "$\\mathbb{R}$",
              "$[0 ; +\\infty[$",
              "$]0 ; +\\infty[$",
              "$]-\\infty ; 0[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D'après la définition, $\\ln$ est définie sur $]0 ; +\\infty[$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La dérivée de ln",
          "stepTheme": "La dérivée de ln",
          "stepBadge": "La dérivée de ln",
          "paragraphText": "• La fonction $\\ln$ est dérivable sur $]0 ; +\\infty[$ et pour tout $x > 0$, $\\ln'(x) = \\frac{1}{x}$.\nC'est le contenu même de la définition de $\\ln$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01_q3",
            "type": "mcq",
            "prompt": "Pour tout $x > 0$, $\\ln'(x)$ vaut :",
            "options": [
              "$\\frac{1}{x}$",
              "$x$",
              "$\\frac{1}{\\ln x}$",
              "$e^x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée de $\\ln$ est la fonction $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "ln s'annule en 1",
          "stepTheme": "ln s'annule en 1",
          "stepBadge": "ln s'annule en 1",
          "paragraphText": "• $\\ln 1 = 0$ : l'image de $1$ par la fonction $\\ln$ est $0$.\nC'est la deuxième partie de la définition de $\\ln$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\ln 1$ ?",
            "options": [
              "$1$",
              "$e$",
              "$-1$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, $\\ln$ s'annule en $1$ : $\\ln 1 = 0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Pas d'image pour un nombre négatif",
          "stepTheme": "Pas d'image pour un nombre négatif",
          "stepBadge": "Pas d'image pour un nombre négatif",
          "paragraphText": "Piège : croire que l'image d'un nombre réel négatif par la fonction $\\ln$ existe.\nL'exercice de fixation corrigé répond faux : $\\ln$ n'est définie que sur $]0 ; +\\infty[$, donc un nombre négatif, comme $0$, n'a pas d'image par $\\ln$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01_q5",
            "type": "mcq",
            "prompt": "L'affirmation « l'image d'un nombre réel négatif par la fonction $\\ln$ existe » est :",
            "options": [
              "Vraie, car $\\ln$ est définie sur $\\mathbb{R}$",
              "Fausse, car $\\ln$ n'est définie que sur $]0 ; +\\infty[$",
              "Vraie, car le logarithme d'un nombre négatif est son opposé",
              "Fausse, car $\\ln$ ne s'annule qu'en $1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ensemble de définition de $\\ln$ est $]0 ; +\\infty[$ : aucun nombre négatif n'a d'image par $\\ln$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Qui est la dérivée de qui ?",
          "stepTheme": "Qui est la dérivée de qui ?",
          "stepBadge": "Qui est la dérivée de qui ?",
          "paragraphText": "Dans l'exercice de fixation, l'affirmation « la fonction logarithme népérien est la dérivée sur $]0 ; +\\infty[$ de la fonction $x \\mapsto \\frac{1}{x}$ » est corrigée faux.\nC'est l'inverse : la fonction $x \\mapsto \\frac{1}{x}$ est la dérivée de $\\ln$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01_q6",
            "type": "mcq",
            "prompt": "D'après l'exercice de fixation corrigé, l'affirmation « $\\ln$ est la dérivée de $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ » est :",
            "options": [
              "Vraie",
              "Fausse : c'est $x \\mapsto \\frac{1}{x}$ qui est la dérivée de $\\ln$",
              "Vraie, car $\\ln 1 = 0$",
              "Fausse, car $\\ln$ n'est pas dérivable"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La correction de l'exercice répond faux : la dérivée de $\\ln$ est $x \\mapsto \\frac{1}{x}$, et non l'inverse."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01_q1",
          "type": "mcq",
          "prompt": "La fonction $\\ln$ est définie comme :",
          "options": [
            "La dérivée de la fonction $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$",
            "La fonction dont la dérivée sur $]0 ; +\\infty[$ est $x \\mapsto \\frac{1}{x}$ et qui s'annule en $1$",
            "La fonction réciproque de $x \\mapsto \\frac{1}{x}$",
            "La fonction de dérivée $x \\mapsto x$ qui s'annule en $1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, la dérivée de $\\ln$ sur $]0 ; +\\infty[$ est $x \\mapsto \\frac{1}{x}$ et $\\ln$ s'annule en $1$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01_q2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de la fonction $\\ln$ ?",
          "options": [
            "$\\mathbb{R}$",
            "$[0 ; +\\infty[$",
            "$]0 ; +\\infty[$",
            "$]-\\infty ; 0[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D'après la définition, $\\ln$ est définie sur $]0 ; +\\infty[$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01_q3",
          "type": "mcq",
          "prompt": "Pour tout $x > 0$, $\\ln'(x)$ vaut :",
          "options": [
            "$\\frac{1}{x}$",
            "$x$",
            "$\\frac{1}{\\ln x}$",
            "$e^x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée de $\\ln$ est la fonction $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\ln 1$ ?",
          "options": [
            "$1$",
            "$e$",
            "$-1$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, $\\ln$ s'annule en $1$ : $\\ln 1 = 0$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01_q5",
          "type": "mcq",
          "prompt": "L'affirmation « l'image d'un nombre réel négatif par la fonction $\\ln$ existe » est :",
          "options": [
            "Vraie, car $\\ln$ est définie sur $\\mathbb{R}$",
            "Fausse, car $\\ln$ n'est définie que sur $]0 ; +\\infty[$",
            "Vraie, car le logarithme d'un nombre négatif est son opposé",
            "Fausse, car $\\ln$ ne s'annule qu'en $1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ensemble de définition de $\\ln$ est $]0 ; +\\infty[$ : aucun nombre négatif n'a d'image par $\\ln$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p01_q6",
          "type": "mcq",
          "prompt": "D'après l'exercice de fixation corrigé, l'affirmation « $\\ln$ est la dérivée de $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ » est :",
          "options": [
            "Vraie",
            "Fausse : c'est $x \\mapsto \\frac{1}{x}$ qui est la dérivée de $\\ln$",
            "Vraie, car $\\ln 1 = 0$",
            "Fausse, car $\\ln$ n'est pas dérivable"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La correction de l'exercice répond faux : la dérivée de $\\ln$ est $x \\mapsto \\frac{1}{x}$, et non l'inverse."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02",
      "order": 2,
      "title": "Propriétés algébriques de ln",
      "summary": "Transformer produits, quotients, inverses, racines et puissances avec ln.",
      "conceptExplanation": "Pour tous nombres réels $a$ et $b$ strictement positifs :\n• $\\ln(a \\times b) = \\ln(a) + \\ln(b)$.\n• $\\ln\\left(\\frac{a}{b}\\right) = \\ln(a) - \\ln(b)$.\n• $\\ln\\left(\\frac{1}{b}\\right) = -\\ln(b)$.\n• $\\ln(\\sqrt{a}) = \\frac{1}{2} \\ln(a)$.\n• Pour tout $n \\in \\mathbb{Z}$, $\\ln(a^n) = n \\ln(a)$.\nCes propriétés permettent d'exprimer un logarithme en fonction d'autres logarithmes, ou au contraire de regrouper plusieurs logarithmes en un seul.",
      "keyRule": "ln transforme un produit en somme, un quotient en différence et une puissance en produit : $\\ln(a^n) = n \\ln(a)$.",
      "formulas": [
        {
          "name": "Produit et quotient",
          "formula": "\\ln(a \\times b) = \\ln a + \\ln b \\text{ et } \\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b \\text{ pour } a > 0 \\text{ et } b > 0"
        },
        {
          "name": "Inverse, racine et puissance",
          "formula": "\\ln\\left(\\frac{1}{b}\\right) = -\\ln b \\text{ , } \\ln(\\sqrt{a}) = \\frac{1}{2} \\ln a \\text{ et } \\ln(a^n) = n \\ln a \\text{ pour } n \\in \\mathbb{Z}"
        }
      ],
      "workedExample": {
        "title": "Exprimer en fonction de ln 2 et ln 3 (exercice 1 corrigé)",
        "statement": "Exprime en fonction de $\\ln 2$ et $\\ln 3$ chacun des nombres $A = \\ln(24)$, $B = \\ln\\left(\\frac{2}{3}\\right)$ et $C = \\ln(3^5) - \\ln(2^4)$.",
        "methodSteps": [
          "$A = \\ln(24) = \\ln(2^3 \\times 3) = \\ln(2^3) + \\ln 3 = 3 \\ln 2 + \\ln 3$.",
          "$B = \\ln\\left(\\frac{2}{3}\\right) = \\ln 2 - \\ln 3$.",
          "$C = \\ln(3^5) - \\ln(2^4) = 5 \\ln 3 - 4 \\ln 2$."
        ],
        "conclusion": "$A = 3 \\ln 2 + \\ln 3$, $B = \\ln 2 - \\ln 3$ et $C = 5 \\ln 3 - 4 \\ln 2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le logarithme d'un produit",
          "stepTheme": "Le logarithme d'un produit",
          "stepBadge": "Le logarithme d'un produit",
          "paragraphText": "• Pour $a$ et $b$ strictement positifs : $\\ln(a \\times b) = \\ln(a) + \\ln(b)$.\nExemple de la leçon : $\\ln(24) = \\ln(2^3 \\times 3) = 3 \\ln 2 + \\ln 3$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\ln(24)$ en fonction de $\\ln 2$ et $\\ln 3$ ?",
            "options": [
              "$3 \\ln 2 + \\ln 3$",
              "$\\ln 2 + \\ln 3$",
              "$3 \\ln 2 - \\ln 3$",
              "$\\ln 48$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$24 = 2^3 \\times 3$, donc $\\ln(24) = \\ln(2^3) + \\ln 3 = 3 \\ln 2 + \\ln 3$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le logarithme d'un quotient",
          "stepTheme": "Le logarithme d'un quotient",
          "stepBadge": "Le logarithme d'un quotient",
          "paragraphText": "• Pour $a$ et $b$ strictement positifs : $\\ln\\left(\\frac{a}{b}\\right) = \\ln(a) - \\ln(b)$, et en particulier $\\ln\\left(\\frac{1}{b}\\right) = -\\ln(b)$.\nExemple de la leçon : $\\ln\\left(\\frac{2}{3}\\right) = \\ln 2 - \\ln 3$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\ln\\left(\\frac{2}{3}\\right)$ ?",
            "options": [
              "$\\ln 6$",
              "$\\frac{\\ln 2}{\\ln 3}$",
              "$\\ln 2 - \\ln 3$",
              "$\\ln 3 - \\ln 2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le logarithme d'un quotient est la différence des logarithmes : $\\ln\\left(\\frac{2}{3}\\right) = \\ln 2 - \\ln 3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Regrouper en un seul logarithme",
          "stepTheme": "Regrouper en un seul logarithme",
          "stepBadge": "Regrouper en un seul logarithme",
          "paragraphText": "Exemple de la leçon (exercice 2) : $D = \\ln(5) + \\ln(3)$ se regroupe grâce à la propriété du produit.\nOn obtient un seul logarithme, sous la forme $\\ln(k)$ avec $k$ strictement positif.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02_q3",
            "type": "mcq",
            "prompt": "Que vaut $D = \\ln(5) + \\ln(3)$ ?",
            "options": [
              "$\\ln 8$",
              "$\\ln 15$",
              "$\\ln 53$",
              "$5 \\ln 3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln(5) + \\ln(3) = \\ln(5 \\times 3) = \\ln(15)$, d'après la solution de l'exercice 2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un quotient déguisé en différence",
          "stepTheme": "Un quotient déguisé en différence",
          "stepBadge": "Un quotient déguisé en différence",
          "paragraphText": "Exemple de la leçon (exercice 2) : $E = \\ln(2) - \\ln(0{,}1)$ se regroupe grâce à la propriété du quotient.\nAttention à la virgule décimale française dans $0{,}1$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02_q4",
            "type": "mcq",
            "prompt": "Que vaut $E = \\ln(2) - \\ln(0{,}1)$ ?",
            "options": [
              "$\\ln(1{,}9)$",
              "$\\ln(2{,}1)$",
              "$\\ln(0{,}2)$",
              "$\\ln(20)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\ln(2) - \\ln(0{,}1) = \\ln\\left(\\frac{2}{0{,}1}\\right) = \\ln(20)$, d'après la solution de l'exercice 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Pas de formule pour une somme",
          "stepTheme": "Pas de formule pour une somme",
          "stepBadge": "Pas de formule pour une somme",
          "paragraphText": "Piège : les propriétés de $\\ln$ concernent les produits, les quotients et les puissances, jamais les sommes à l'intérieur du logarithme.\nAinsi, le logarithme d'une somme se calcule en effectuant d'abord la somme, sans la transformer en somme de logarithmes.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\ln(3 + 5)$ ?",
            "options": [
              "$\\ln 3 + \\ln 5$",
              "$\\ln 8$",
              "$\\ln 15$",
              "$8$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln(3 + 5) = \\ln 8$ : on calcule d'abord la somme. Écrire $\\ln 3 + \\ln 5$ donnerait $\\ln 15$, ce qui est faux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une puissance devant le logarithme",
          "stepTheme": "Une puissance devant le logarithme",
          "stepBadge": "Une puissance devant le logarithme",
          "paragraphText": "Exemple de la leçon (exercice 2) : $F = 4 \\ln 5$ s'écrit sous la forme $\\ln(k)$ grâce à la propriété $\\ln(a^n) = n \\ln(a)$ utilisée dans l'autre sens.\nLe coefficient devant le logarithme devient un exposant.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02_q6",
            "type": "mcq",
            "prompt": "Que vaut $F = 4 \\ln 5$ ?",
            "options": [
              "$\\ln 20$",
              "$4^5$",
              "$\\ln 625$",
              "$\\ln 125$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$4 \\ln 5 = \\ln(5^4) = \\ln(625)$, d'après la solution de l'exercice 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\ln(24)$ en fonction de $\\ln 2$ et $\\ln 3$ ?",
          "options": [
            "$3 \\ln 2 + \\ln 3$",
            "$\\ln 2 + \\ln 3$",
            "$3 \\ln 2 - \\ln 3$",
            "$\\ln 48$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$24 = 2^3 \\times 3$, donc $\\ln(24) = \\ln(2^3) + \\ln 3 = 3 \\ln 2 + \\ln 3$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\ln\\left(\\frac{2}{3}\\right)$ ?",
          "options": [
            "$\\ln 6$",
            "$\\frac{\\ln 2}{\\ln 3}$",
            "$\\ln 2 - \\ln 3$",
            "$\\ln 3 - \\ln 2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le logarithme d'un quotient est la différence des logarithmes : $\\ln\\left(\\frac{2}{3}\\right) = \\ln 2 - \\ln 3$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02_q3",
          "type": "mcq",
          "prompt": "Que vaut $D = \\ln(5) + \\ln(3)$ ?",
          "options": [
            "$\\ln 8$",
            "$\\ln 15$",
            "$\\ln 53$",
            "$5 \\ln 3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln(5) + \\ln(3) = \\ln(5 \\times 3) = \\ln(15)$, d'après la solution de l'exercice 2."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02_q4",
          "type": "mcq",
          "prompt": "Que vaut $E = \\ln(2) - \\ln(0{,}1)$ ?",
          "options": [
            "$\\ln(1{,}9)$",
            "$\\ln(2{,}1)$",
            "$\\ln(0{,}2)$",
            "$\\ln(20)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\ln(2) - \\ln(0{,}1) = \\ln\\left(\\frac{2}{0{,}1}\\right) = \\ln(20)$, d'après la solution de l'exercice 2."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\ln(3 + 5)$ ?",
          "options": [
            "$\\ln 3 + \\ln 5$",
            "$\\ln 8$",
            "$\\ln 15$",
            "$8$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln(3 + 5) = \\ln 8$ : on calcule d'abord la somme. Écrire $\\ln 3 + \\ln 5$ donnerait $\\ln 15$, ce qui est faux."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p02_q6",
          "type": "mcq",
          "prompt": "Que vaut $F = 4 \\ln 5$ ?",
          "options": [
            "$\\ln 20$",
            "$4^5$",
            "$\\ln 625$",
            "$\\ln 125$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$4 \\ln 5 = \\ln(5^4) = \\ln(625)$, d'après la solution de l'exercice 2."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03",
      "order": 3,
      "title": "Limites, dérivée et sens de variation de ln",
      "summary": "Connaître les limites de référence de ln et en déduire son sens de variation.",
      "conceptExplanation": "Limites de référence :\n• $\\lim_{x \\to +\\infty} \\ln x = +\\infty$.\n• $\\lim_{x \\to 0^+} \\ln x = -\\infty$.\n• $\\lim_{x \\to 0^+} x \\ln x = 0$.\n• $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$.\nDérivée et variation : pour tout $x > 0$, $\\ln'(x) = \\frac{1}{x}$ et $\\frac{1}{x} > 0$, donc la fonction $\\ln$ est strictement croissante sur $]0 ; +\\infty[$, de $-\\infty$ à $+\\infty$.",
      "keyRule": "Quatre limites à retenir, et $\\ln$ strictement croissante sur $]0 ; +\\infty[$ car sa dérivée est strictement positive.",
      "formulas": [
        {
          "name": "Limites aux bornes",
          "formula": "\\lim_{x \\to +\\infty} \\ln x = +\\infty \\text{ et } \\lim_{x \\to 0^+} \\ln x = -\\infty"
        },
        {
          "name": "Limites de comparaison",
          "formula": "\\lim_{x \\to 0^+} x \\ln x = 0 \\text{ et } \\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0"
        }
      ],
      "workedExample": {
        "title": "Étudier la fonction f définie par f(x) = 2x + ln x (exercice corrigé)",
        "statement": "Soit la fonction $f$ de $\\mathbb{R}$ vers $\\mathbb{R}$ définie par $f(x) = 2x + \\ln x$. Détermine son ensemble de définition $D_f$, calcule $f'(x)$ et étudie son sens de variation.",
        "methodSteps": [
          "$x \\in D_f$ équivaut à $x > 0$, donc $D_f = ]0 ; +\\infty[$.",
          "Pour tout $x$ élément de $]0 ; +\\infty[$, $f'(x) = 2 + \\frac{1}{x}$.",
          "Pour tout $x$ de $]0 ; +\\infty[$, $2 + \\frac{1}{x} > 0$, donc $f'(x) > 0$."
        ],
        "conclusion": "$f$ est strictement croissante sur $]0 ; +\\infty[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les limites aux bornes",
          "stepTheme": "Les limites aux bornes",
          "stepBadge": "Les limites aux bornes",
          "paragraphText": "• $\\lim_{x \\to +\\infty} \\ln x = +\\infty$ et $\\lim_{x \\to 0^+} \\ln x = -\\infty$.\nCe sont les deux premières limites de référence de la leçon, qui donnent les extrémités du tableau de variation de $\\ln$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\ln x$ ?",
            "options": [
              "$-\\infty$",
              "$0$",
              "$+\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Première limite de référence de la leçon : $\\ln x$ tend vers $+\\infty$ quand $x$ tend vers $+\\infty$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La limite de x ln x en 0",
          "stepTheme": "La limite de x ln x en 0",
          "stepBadge": "La limite de x ln x en 0",
          "paragraphText": "• $\\lim_{x \\to 0^+} x \\ln x = 0$.\nC'est la troisième limite de référence de la leçon : malgré $\\ln x$ qui tend vers $-\\infty$, le produit avec $x$ tend vers $0$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 0^+} x \\ln x$ ?",
            "options": [
              "$-\\infty$",
              "$0$",
              "$+\\infty$",
              "$-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Limite de référence (3) de la leçon : $\\lim_{x \\to 0^+} x \\ln x = 0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La limite de ln x sur x",
          "stepTheme": "La limite de ln x sur x",
          "stepBadge": "La limite de ln x sur x",
          "paragraphText": "• $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$.\nC'est la quatrième limite de référence de la leçon : en $+\\infty$, $\\ln x$ devient négligeable devant $x$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x}$ ?",
            "options": [
              "$+\\infty$",
              "$1$",
              "$-\\infty$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Limite de référence (4) de la leçon : $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "ln est strictement croissante",
          "stepTheme": "ln est strictement croissante",
          "stepBadge": "ln est strictement croissante",
          "paragraphText": "• Pour tout $x > 0$, $\\ln'(x) = \\frac{1}{x}$ et $\\frac{1}{x} > 0$.\nDonc la fonction $\\ln$ est strictement croissante sur $]0 ; +\\infty[$, comme le montre son tableau de variation, de $-\\infty$ à $+\\infty$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q4",
            "type": "mcq",
            "prompt": "La fonction $\\ln$ est strictement croissante sur $]0 ; +\\infty[$ car :",
            "options": [
              "$\\ln'(x) = \\frac{1}{x} > 0$ pour tout $x > 0$",
              "$\\ln 1 = 0$",
              "$\\ln$ est définie sur $]0 ; +\\infty[$",
              "$\\ln x$ tend vers $+\\infty$ en $+\\infty$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée $\\ln'(x) = \\frac{1}{x}$ est strictement positive pour tout $x > 0$ : $\\ln$ est donc strictement croissante."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "En 0, ln tend vers moins l'infini",
          "stepTheme": "En 0, ln tend vers moins l'infini",
          "stepBadge": "En 0, ln tend vers moins l'infini",
          "paragraphText": "Piège : confondre les deux limites en $0$.\n$\\ln x$ tend vers $-\\infty$ quand $x$ tend vers $0$ par valeurs supérieures, alors que le produit $x \\ln x$, lui, tend vers $0$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q5",
            "type": "mcq",
            "prompt": "Quelle affirmation est fausse ?",
            "options": [
              "$\\lim_{x \\to 0^+} \\ln x = -\\infty$",
              "$\\lim_{x \\to +\\infty} \\ln x = +\\infty$",
              "$\\lim_{x \\to 0^+} \\ln x = 0$",
              "$\\lim_{x \\to 0^+} x \\ln x = 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est $x \\ln x$ qui tend vers $0$ en $0$, pas $\\ln x$ : $\\ln x$ tend vers $-\\infty$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une limite en plus l'infini",
          "stepTheme": "Une limite en plus l'infini",
          "stepBadge": "Une limite en plus l'infini",
          "paragraphText": "Exemple de la leçon : la limite de $x + \\ln x$ quand $x$ tend vers $+\\infty$.\nChacun des deux termes tend vers $+\\infty$, donc la somme aussi.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} (x + \\ln x)$ ?",
            "options": [
              "$-\\infty$",
              "$+\\infty$",
              "$0$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après la solution de la leçon : $x$ tend vers $+\\infty$ et $\\ln x$ tend vers $+\\infty$, donc la somme tend vers $+\\infty$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "La dérivée de 2x + ln x",
          "stepTheme": "La dérivée de 2x + ln x",
          "stepBadge": "La dérivée de 2x + ln x",
          "paragraphText": "Exemple de la leçon : pour $f(x) = 2x + \\ln x$, l'ensemble de définition est $]0 ; +\\infty[$.\nOn dérive terme à terme, et le signe de la dérivée donne le sens de variation de $f$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q7",
            "type": "mcq",
            "prompt": "Pour $f(x) = 2x + \\ln x$, que vaut $f'(x)$ sur $]0 ; +\\infty[$ ?",
            "options": [
              "$2 - \\frac{1}{x}$",
              "$2$",
              "$\\frac{1}{x}$",
              "$2 + \\frac{1}{x}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On dérive terme à terme : la dérivée de $2x$ est $2$ et celle de $\\ln x$ est $\\frac{1}{x}$, donc $f'(x) = 2 + \\frac{1}{x}$, strictement positive."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\ln x$ ?",
          "options": [
            "$-\\infty$",
            "$0$",
            "$+\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Première limite de référence de la leçon : $\\ln x$ tend vers $+\\infty$ quand $x$ tend vers $+\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 0^+} x \\ln x$ ?",
          "options": [
            "$-\\infty$",
            "$0$",
            "$+\\infty$",
            "$-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Limite de référence (3) de la leçon : $\\lim_{x \\to 0^+} x \\ln x = 0$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x}$ ?",
          "options": [
            "$+\\infty$",
            "$1$",
            "$-\\infty$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Limite de référence (4) de la leçon : $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q4",
          "type": "mcq",
          "prompt": "La fonction $\\ln$ est strictement croissante sur $]0 ; +\\infty[$ car :",
          "options": [
            "$\\ln'(x) = \\frac{1}{x} > 0$ pour tout $x > 0$",
            "$\\ln 1 = 0$",
            "$\\ln$ est définie sur $]0 ; +\\infty[$",
            "$\\ln x$ tend vers $+\\infty$ en $+\\infty$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée $\\ln'(x) = \\frac{1}{x}$ est strictement positive pour tout $x > 0$ : $\\ln$ est donc strictement croissante."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q5",
          "type": "mcq",
          "prompt": "Quelle affirmation est fausse ?",
          "options": [
            "$\\lim_{x \\to 0^+} \\ln x = -\\infty$",
            "$\\lim_{x \\to +\\infty} \\ln x = +\\infty$",
            "$\\lim_{x \\to 0^+} \\ln x = 0$",
            "$\\lim_{x \\to 0^+} x \\ln x = 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est $x \\ln x$ qui tend vers $0$ en $0$, pas $\\ln x$ : $\\ln x$ tend vers $-\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} (x + \\ln x)$ ?",
          "options": [
            "$-\\infty$",
            "$+\\infty$",
            "$0$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après la solution de la leçon : $x$ tend vers $+\\infty$ et $\\ln x$ tend vers $+\\infty$, donc la somme tend vers $+\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p03_q7",
          "type": "mcq",
          "prompt": "Pour $f(x) = 2x + \\ln x$, que vaut $f'(x)$ sur $]0 ; +\\infty[$ ?",
          "options": [
            "$2 - \\frac{1}{x}$",
            "$2$",
            "$\\frac{1}{x}$",
            "$2 + \\frac{1}{x}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On dérive terme à terme : la dérivée de $2x$ est $2$ et celle de $\\ln x$ est $\\frac{1}{x}$, donc $f'(x) = 2 + \\frac{1}{x}$, strictement positive."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04",
      "order": 4,
      "title": "Équations et inéquations avec ln",
      "summary": "Résoudre des équations et inéquations avec ln, en commençant par l'ensemble de validité.",
      "conceptExplanation": "Propriété : pour tous réels $a$ et $b$ strictement positifs, $\\ln a > \\ln b$ équivaut à $a > b$ et $\\ln a = \\ln b$ équivaut à $a = b$.\nConséquences, pour tout nombre réel $x$ strictement positif : $\\ln x = 0$ équivaut à $x = 1$ ; $\\ln x < 0$ équivaut à $0 < x < 1$ ; $\\ln x > 0$ équivaut à $x > 1$.\nRemarque : il existe un seul nombre réel noté $e$, appartenant à $]2 ; 3[$, tel que $\\ln(e) = 1$, avec $e \\simeq 2{,}718$.\nMéthode : on détermine d'abord l'ensemble de validité (chaque argument de $\\ln$ strictement positif), puis on utilise les équivalences. Pour une équation en $(\\ln x)^2$, on pose $X = \\ln x$ et on résout l'équation du second degré en $X$.",
      "keyRule": "Toujours commencer par l'ensemble de validité, puis enlever les ln grâce à la croissance stricte de ln.",
      "formulas": [
        {
          "name": "Équivalences avec ln",
          "formula": "\\ln a = \\ln b \\iff a = b \\text{ et } \\ln a > \\ln b \\iff a > b \\text{ pour } a > 0 \\text{ et } b > 0"
        },
        {
          "name": "Le nombre e",
          "formula": "\\ln(e) = 1 \\text{ avec } e \\in ]2 ; 3[ \\text{ et } e \\simeq 2{,}718"
        }
      ],
      "workedExample": {
        "title": "Résoudre ln(2x − 1) = ln(x + 5) (exemple corrigé)",
        "statement": "Résous dans $\\mathbb{R}$ l'équation $\\ln(2x - 1) = \\ln(x + 5)$.",
        "methodSteps": [
          "Ensemble de validité : $x$ est dans $V$ équivaut à $2x - 1 > 0$ et $x + 5 > 0$, c'est-à-dire $x > \\frac{1}{2}$ et $x > -5$, donc $V = ]\\frac{1}{2} ; +\\infty[$.",
          "$\\ln(2x - 1) = \\ln(x + 5)$ équivaut à $2x - 1 = x + 5$, c'est-à-dire $x = 6$.",
          "Comme $6$ appartient à $V$, la solution est retenue."
        ],
        "conclusion": "$S_{\\mathbb{R}} = \\{6\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'équivalence des logarithmes",
          "stepTheme": "L'équivalence des logarithmes",
          "stepBadge": "L'équivalence des logarithmes",
          "paragraphText": "• Pour tous réels $a$ et $b$ strictement positifs : $\\ln a = \\ln b$ équivaut à $a = b$, et $\\ln a > \\ln b$ équivaut à $a > b$.\nC'est la propriété qui permet de résoudre les équations et inéquations comportant la fonction $\\ln$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q1",
            "type": "mcq",
            "prompt": "Pour $a > 0$ et $b > 0$, $\\ln a = \\ln b$ équivaut à :",
            "options": [
              "$a = -b$",
              "$a = b$",
              "$a + b = 1$",
              "$a \\times b = 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Propriété de la leçon : pour $a$ et $b$ strictement positifs, $\\ln a = \\ln b$ équivaut à $a = b$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le signe de ln x et le nombre e",
          "stepTheme": "Le signe de ln x et le nombre e",
          "stepBadge": "Le signe de ln x et le nombre e",
          "paragraphText": "• Pour tout $x$ strictement positif : $\\ln x = 0$ équivaut à $x = 1$ ; $\\ln x < 0$ équivaut à $0 < x < 1$ ; $\\ln x > 0$ équivaut à $x > 1$.\n• Il existe un seul réel noté $e$, dans $]2 ; 3[$, tel que $\\ln(e) = 1$, avec $e \\simeq 2{,}718$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q2",
            "type": "mcq",
            "prompt": "Pour $x > 0$, $\\ln x = 0$ équivaut à :",
            "options": [
              "$x = 0$",
              "$x = e$",
              "$x = 1$",
              "$x = -1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Conséquence de la leçon : pour $x$ strictement positif, $\\ln x = 0$ équivaut à $x = 1$, car $\\ln 1 = 0$ et $\\ln$ est strictement croissante."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Ne jamais oublier l'ensemble de validité",
          "stepTheme": "Ne jamais oublier l'ensemble de validité",
          "stepBadge": "Ne jamais oublier l'ensemble de validité",
          "paragraphText": "Piège : résoudre $\\ln(2x - 1) = \\ln(x + 5)$ en écrivant directement $2x - 1 = x + 5$, sans vérifier que les deux arguments sont strictement positifs.\nLa leçon commence toujours par l'ensemble de validité $V$ : ici $V = ]\\frac{1}{2} ; +\\infty[$, et la solution trouvée n'est retenue que si elle appartient à $V$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q3",
            "type": "mcq",
            "prompt": "Si on résout une équation avec $\\ln$ sans déterminer l'ensemble de validité, on risque :",
            "options": [
              "D'accepter une solution pour laquelle un argument de $\\ln$ est négatif ou nul",
              "De changer le signe de $\\ln$",
              "De transformer $\\ln$ en sa dérivée",
              "D'obtenir toujours une équation du second degré"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans ensemble de validité, rien ne garantit que les arguments de $\\ln$ sont strictement positifs : une « solution » peut ne pas exister pour $\\ln$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une première équation",
          "stepTheme": "Une première équation",
          "stepBadge": "Une première équation",
          "paragraphText": "Exemple de la leçon : $\\ln(2x - 1) = \\ln(x + 5)$, d'ensemble de validité $V = ]\\frac{1}{2} ; +\\infty[$.\nL'équation équivaut à $2x - 1 = x + 5$, et la solution obtenue appartient à $V$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln(2x - 1) = \\ln(x + 5)$ ?",
            "options": [
              "$\\{5\\}$",
              "$\\{-6\\}$",
              "$\\{1\\}$",
              "$\\{6\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2x - 1 = x + 5$ donne $x = 6$, qui appartient à $V = ]\\frac{1}{2} ; +\\infty[$ : $S_{\\mathbb{R}} = \\{6\\}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une équation avec le nombre e",
          "stepTheme": "Une équation avec le nombre e",
          "stepBadge": "Une équation avec le nombre e",
          "paragraphText": "Exemple de la leçon : $\\ln(x - 2) = 1$, d'ensemble de validité $V = ]2 ; +\\infty[$.\nOn écrit $1 = \\ln e$, donc l'équation équivaut à $\\ln(x - 2) = \\ln e$, puis à $x - 2 = e$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q5",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln(x - 2) = 1$ ?",
            "options": [
              "$\\{e - 2\\}$",
              "$\\{e + 2\\}$",
              "$\\{2 - e\\}$",
              "$\\{\\ln 5\\}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln(x - 2) = 1$ équivaut à $x - 2 = e$, donc $x = e + 2$, qui appartient à $V$ : $S_{\\mathbb{R}} = \\{e + 2\\}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Poser X égal à ln x",
          "stepTheme": "Poser X égal à ln x",
          "stepBadge": "Poser X égal à ln x",
          "paragraphText": "Exemple de la leçon : $(\\ln x)^2 + \\ln x - 6 = 0$, sur $V = ]0 ; +\\infty[$.\nOn pose $X = \\ln x$ : l'équation devient $X^2 + X - 6 = 0$, de discriminant $25$, dont les solutions sont $X = -3$ et $X = 2$. On revient ensuite à $\\ln x = -3$ ou $\\ln x = 2$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $(\\ln x)^2 + \\ln x - 6 = 0$ ?",
            "options": [
              "$\\{-3 ; 2\\}$",
              "$\\{e^{-3}\\}$",
              "$\\{e^{-3} ; e^{2}\\}$",
              "$\\{e^{3} ; e^{-2}\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec $X = \\ln x$, on obtient $X = -3$ ou $X = 2$, donc $x = e^{-3}$ ou $x = e^{2}$, tous deux dans $V$ : $S_{\\mathbb{R}} = \\{e^{-3} ; e^{2}\\}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Une inéquation avec ln",
          "stepTheme": "Une inéquation avec ln",
          "stepBadge": "Une inéquation avec ln",
          "paragraphText": "Exemple de la leçon : $\\ln(2x - 3) < 1$, d'ensemble de validité $V = ]\\frac{3}{2} ; +\\infty[$.\nOn écrit $1 = \\ln e$ : l'inéquation équivaut à $2x - 3 < e$, puis on intersecte avec $V$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q7",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln(2x - 3) < 1$ ?",
            "options": [
              "$]\\frac{3}{2} ; \\frac{3 + e}{2}[$",
              "$]-\\infty ; \\frac{3 + e}{2}[$",
              "$]\\frac{3}{2} ; +\\infty[$",
              "$[\\frac{3}{2} ; \\frac{3 + e}{2}]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\ln(2x - 3) < 1$ équivaut à $2x - 3 < e$, donc $x < \\frac{3 + e}{2}$ ; avec $V$, $S_{\\mathbb{R}} = ]\\frac{3}{2} ; \\frac{3 + e}{2}[$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q1",
          "type": "mcq",
          "prompt": "Pour $a > 0$ et $b > 0$, $\\ln a = \\ln b$ équivaut à :",
          "options": [
            "$a = -b$",
            "$a = b$",
            "$a + b = 1$",
            "$a \\times b = 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Propriété de la leçon : pour $a$ et $b$ strictement positifs, $\\ln a = \\ln b$ équivaut à $a = b$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q2",
          "type": "mcq",
          "prompt": "Pour $x > 0$, $\\ln x = 0$ équivaut à :",
          "options": [
            "$x = 0$",
            "$x = e$",
            "$x = 1$",
            "$x = -1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Conséquence de la leçon : pour $x$ strictement positif, $\\ln x = 0$ équivaut à $x = 1$, car $\\ln 1 = 0$ et $\\ln$ est strictement croissante."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q3",
          "type": "mcq",
          "prompt": "Si on résout une équation avec $\\ln$ sans déterminer l'ensemble de validité, on risque :",
          "options": [
            "D'accepter une solution pour laquelle un argument de $\\ln$ est négatif ou nul",
            "De changer le signe de $\\ln$",
            "De transformer $\\ln$ en sa dérivée",
            "D'obtenir toujours une équation du second degré"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans ensemble de validité, rien ne garantit que les arguments de $\\ln$ sont strictement positifs : une « solution » peut ne pas exister pour $\\ln$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln(2x - 1) = \\ln(x + 5)$ ?",
          "options": [
            "$\\{5\\}$",
            "$\\{-6\\}$",
            "$\\{1\\}$",
            "$\\{6\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2x - 1 = x + 5$ donne $x = 6$, qui appartient à $V = ]\\frac{1}{2} ; +\\infty[$ : $S_{\\mathbb{R}} = \\{6\\}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln(x - 2) = 1$ ?",
          "options": [
            "$\\{e - 2\\}$",
            "$\\{e + 2\\}$",
            "$\\{2 - e\\}$",
            "$\\{\\ln 5\\}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln(x - 2) = 1$ équivaut à $x - 2 = e$, donc $x = e + 2$, qui appartient à $V$ : $S_{\\mathbb{R}} = \\{e + 2\\}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $(\\ln x)^2 + \\ln x - 6 = 0$ ?",
          "options": [
            "$\\{-3 ; 2\\}$",
            "$\\{e^{-3}\\}$",
            "$\\{e^{-3} ; e^{2}\\}$",
            "$\\{e^{3} ; e^{-2}\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec $X = \\ln x$, on obtient $X = -3$ ou $X = 2$, donc $x = e^{-3}$ ou $x = e^{2}$, tous deux dans $V$ : $S_{\\mathbb{R}} = \\{e^{-3} ; e^{2}\\}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p04_q7",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln(2x - 3) < 1$ ?",
          "options": [
            "$]\\frac{3}{2} ; \\frac{3 + e}{2}[$",
            "$]-\\infty ; \\frac{3 + e}{2}[$",
            "$]\\frac{3}{2} ; +\\infty[$",
            "$[\\frac{3}{2} ; \\frac{3 + e}{2}]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\ln(2x - 3) < 1$ équivaut à $2x - 3 < e$, donc $x < \\frac{3 + e}{2}$ ; avec $V$, $S_{\\mathbb{R}} = ]\\frac{3}{2} ; \\frac{3 + e}{2}[$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05",
      "order": 5,
      "title": "Dérivée de ln(u) et primitives",
      "summary": "Dériver ln(u) et reconnaître les primitives liées à ln.",
      "conceptExplanation": "Dérivée : si $u$ est une fonction dérivable et strictement positive sur un intervalle $K$, alors $\\ln(u)$ est dérivable sur $K$ et $(\\ln(u))' = \\frac{u'}{u}$.\nPrimitives : si $u$ est une fonction dérivable et strictement positive sur un intervalle $K$, alors la fonction $\\frac{u'}{u}$ a pour primitives sur $K$ les fonctions $\\ln(u) + \\alpha$, avec $\\alpha \\in \\mathbb{R}$.\nPoint méthode de la leçon : la fonction $x \\mapsto \\frac{1}{x}$, pour $x > 0$, a pour primitives les fonctions $x \\mapsto \\ln(x) + k$ ; la fonction $x \\mapsto \\frac{a}{cx + d}$, avec $cx + d > 0$, a pour primitives les fonctions $x \\mapsto \\frac{a}{c} \\ln(cx + d) + k$ ; la fonction $x \\mapsto \\frac{u'(x)}{u(x)}$, avec $u(x) > 0$, a pour primitives les fonctions $x \\mapsto \\ln(u(x)) + k$.",
      "keyRule": "Dériver $\\ln(u)$ donne $\\frac{u'}{u}$ ; primitiver $\\frac{u'}{u}$ redonne $\\ln(u)$, à une constante près.",
      "formulas": [
        {
          "name": "Dérivée de ln(u)",
          "formula": "(\\ln(u))' = \\frac{u'}{u} \\text{ si } u \\text{ est dérivable et strictement positive }"
        },
        {
          "name": "Primitives liées à ln",
          "formula": "\\text{ La fonction } \\frac{u'}{u} \\text{ a pour primitives } \\ln(u) + \\alpha \\text{ , avec } \\alpha \\in \\mathbb{R}"
        }
      ],
      "workedExample": {
        "title": "Une primitive de la forme u' sur u (exercice corrigé)",
        "statement": "Détermine sur $I = ]0 ; +\\infty[$ les primitives de la fonction $f$ définie par $f(x) = \\frac{2x + 1}{x^2 + x + 3}$.",
        "methodSteps": [
          "On pose $u(x) = x^2 + x + 3$ ; alors $u'(x) = 2x + 1$.",
          "On a $f(x) = \\frac{u'(x)}{u(x)}$ et, pour $x$ dans $]0 ; +\\infty[$, $u(x) > 0$.",
          "Les primitives sont donc les fonctions $F$ telles que $F(x) = \\ln(x^2 + x + 3) + \\alpha$, avec $\\alpha \\in \\mathbb{R}$."
        ],
        "conclusion": "Les primitives de $f$ sur $]0 ; +\\infty[$ sont les fonctions $x \\mapsto \\ln(x^2 + x + 3) + \\alpha$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dérivée de ln(u)",
          "stepTheme": "La dérivée de ln(u)",
          "stepBadge": "La dérivée de ln(u)",
          "paragraphText": "• Si $u$ est une fonction dérivable et strictement positive sur un intervalle $K$, alors $\\ln(u)$ est dérivable sur $K$ et $(\\ln(u))' = \\frac{u'}{u}$.\nOn dérive donc $u$, puis on divise par $u$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05_q1",
            "type": "mcq",
            "prompt": "Si $u$ est dérivable et strictement positive sur $K$, $(\\ln(u))'$ vaut :",
            "options": [
              "$\\frac{u}{u'}$",
              "$u' \\ln(u)$",
              "$\\frac{u'}{u}$",
              "$\\frac{1}{u}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Propriété de la leçon : $(\\ln(u))' = \\frac{u'}{u}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Dériver ln(5x + 2)",
          "stepTheme": "Dériver ln(5x + 2)",
          "stepBadge": "Dériver ln(5x + 2)",
          "paragraphText": "Exemple de la leçon : $f(x) = \\ln(5x + 2)$ sur $I = ]0 ; 13[$.\nIci $u(x) = 5x + 2$, donc $u'(x) = 5$, et on applique la formule de la dérivée de $\\ln(u)$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05_q2",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\ln(5x + 2)$, que vaut $f'(x)$ ?",
            "options": [
              "$\\frac{5}{5x + 2}$",
              "$\\frac{1}{5x + 2}$",
              "$\\frac{5x + 2}{5}$",
              "$5 \\ln(5x + 2)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $u(x) = 5x + 2$ et $u'(x) = 5$ : $f'(x) = \\frac{u'(x)}{u(x)} = \\frac{5}{5x + 2}$, d'après la solution de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Dériver un logarithme de trinôme",
          "stepTheme": "Dériver un logarithme de trinôme",
          "stepBadge": "Dériver un logarithme de trinôme",
          "paragraphText": "Exemple de la leçon : $f(x) = \\ln(2x^2 - x - 1)$ sur $I = ]-\\infty ; -\\frac{1}{2}[$.\nIci $u(x) = 2x^2 - x - 1$, donc $u'(x) = 4x - 1$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05_q3",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\ln(2x^2 - x - 1)$, que vaut $f'(x)$ ?",
            "options": [
              "$\\frac{1}{2x^2 - x - 1}$",
              "$\\frac{4x - 1}{2x^2 - x - 1}$",
              "$\\frac{4x - 1}{x}$",
              "$4x - 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $u'(x) = 4x - 1$ : $f'(x) = \\frac{4x - 1}{2x^2 - x - 1}$, d'après la solution de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les primitives liées à ln",
          "stepTheme": "Les primitives liées à ln",
          "stepBadge": "Les primitives liées à ln",
          "paragraphText": "• Si $u$ est dérivable et strictement positive sur $K$, la fonction $\\frac{u'}{u}$ a pour primitives sur $K$ les fonctions $\\ln(u) + \\alpha$, avec $\\alpha \\in \\mathbb{R}$.\nEn particulier, la fonction $x \\mapsto \\frac{1}{x}$ a pour primitives, sur $]0 ; +\\infty[$, les fonctions $x \\mapsto \\ln(x) + \\alpha$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05_q4",
            "type": "mcq",
            "prompt": "Quelles sont les primitives de la fonction $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ ?",
            "options": [
              "Les fonctions $x \\mapsto x \\ln x + \\alpha$",
              "Les fonctions $x \\mapsto \\frac{1}{x} + \\alpha$",
              "Les fonctions $x \\mapsto -\\frac{1}{x^2} + \\alpha$",
              "Les fonctions $x \\mapsto \\ln(x) + \\alpha$, avec $\\alpha \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D'après le point méthode de la leçon, les primitives de $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ sont les fonctions $x \\mapsto \\ln(x) + \\alpha$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une primitive avec un dénominateur affine",
          "stepTheme": "Une primitive avec un dénominateur affine",
          "stepBadge": "Une primitive avec un dénominateur affine",
          "paragraphText": "Exemple de la leçon : les primitives de la fonction $f$ définie par $f(x) = \\frac{2}{-3x + 7}$.\nOn reconnaît la forme $\\frac{a}{cx + d}$ du point méthode, avec un coefficient $\\frac{a}{c}$ devant le logarithme dans la primitive.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05_q5",
            "type": "mcq",
            "prompt": "Quelles sont les primitives de $f(x) = \\frac{2}{-3x + 7}$ sur un intervalle où $-3x + 7 > 0$ ?",
            "options": [
              "Les fonctions $x \\mapsto -\\frac{2}{3} \\ln(-3x + 7) + \\alpha$",
              "Les fonctions $x \\mapsto \\frac{2}{3} \\ln(-3x + 7) + \\alpha$",
              "Les fonctions $x \\mapsto -2 \\ln(-3x + 7) + \\alpha$",
              "Les fonctions $x \\mapsto \\ln(-3x + 7) + \\alpha$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $a = 2$ et $c = -3$, le point méthode donne le coefficient $\\frac{a}{c} = -\\frac{2}{3}$ : les primitives sont $x \\mapsto -\\frac{2}{3} \\ln(-3x + 7) + \\alpha$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La condition u strictement positive",
          "stepTheme": "La condition u strictement positive",
          "stepBadge": "La condition u strictement positive",
          "paragraphText": "Piège : appliquer les formules de $\\ln(u)$ sans vérifier que $u$ est strictement positive sur l'intervalle.\nLa leçon exige, pour la dérivée comme pour les primitives, une fonction $u$ dérivable et strictement positive sur l'intervalle $K$ considéré.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05_q6",
            "type": "mcq",
            "prompt": "Pour appliquer $(\\ln(u))' = \\frac{u'}{u}$ sur un intervalle $K$, il faut que $u$ soit :",
            "options": [
              "Dérivable et strictement positive sur $K$",
              "Constante sur $K$",
              "Strictement négative sur $K$",
              "Un polynôme du second degré"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'hypothèse énoncée dans la leçon, pour la dérivée de $\\ln(u)$ comme pour ses primitives."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05_q1",
          "type": "mcq",
          "prompt": "Si $u$ est dérivable et strictement positive sur $K$, $(\\ln(u))'$ vaut :",
          "options": [
            "$\\frac{u}{u'}$",
            "$u' \\ln(u)$",
            "$\\frac{u'}{u}$",
            "$\\frac{1}{u}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Propriété de la leçon : $(\\ln(u))' = \\frac{u'}{u}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05_q2",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\ln(5x + 2)$, que vaut $f'(x)$ ?",
          "options": [
            "$\\frac{5}{5x + 2}$",
            "$\\frac{1}{5x + 2}$",
            "$\\frac{5x + 2}{5}$",
            "$5 \\ln(5x + 2)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $u(x) = 5x + 2$ et $u'(x) = 5$ : $f'(x) = \\frac{u'(x)}{u(x)} = \\frac{5}{5x + 2}$, d'après la solution de la leçon."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05_q3",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\ln(2x^2 - x - 1)$, que vaut $f'(x)$ ?",
          "options": [
            "$\\frac{1}{2x^2 - x - 1}$",
            "$\\frac{4x - 1}{2x^2 - x - 1}$",
            "$\\frac{4x - 1}{x}$",
            "$4x - 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $u'(x) = 4x - 1$ : $f'(x) = \\frac{4x - 1}{2x^2 - x - 1}$, d'après la solution de la leçon."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05_q4",
          "type": "mcq",
          "prompt": "Quelles sont les primitives de la fonction $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ ?",
          "options": [
            "Les fonctions $x \\mapsto x \\ln x + \\alpha$",
            "Les fonctions $x \\mapsto \\frac{1}{x} + \\alpha$",
            "Les fonctions $x \\mapsto -\\frac{1}{x^2} + \\alpha$",
            "Les fonctions $x \\mapsto \\ln(x) + \\alpha$, avec $\\alpha \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D'après le point méthode de la leçon, les primitives de $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ sont les fonctions $x \\mapsto \\ln(x) + \\alpha$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05_q5",
          "type": "mcq",
          "prompt": "Quelles sont les primitives de $f(x) = \\frac{2}{-3x + 7}$ sur un intervalle où $-3x + 7 > 0$ ?",
          "options": [
            "Les fonctions $x \\mapsto -\\frac{2}{3} \\ln(-3x + 7) + \\alpha$",
            "Les fonctions $x \\mapsto \\frac{2}{3} \\ln(-3x + 7) + \\alpha$",
            "Les fonctions $x \\mapsto -2 \\ln(-3x + 7) + \\alpha$",
            "Les fonctions $x \\mapsto \\ln(-3x + 7) + \\alpha$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $a = 2$ et $c = -3$, le point méthode donne le coefficient $\\frac{a}{c} = -\\frac{2}{3}$ : les primitives sont $x \\mapsto -\\frac{2}{3} \\ln(-3x + 7) + \\alpha$."
        },
        {
          "id": "terminale_a1_maths_numerique_l03_logarithme_neperien_p05_q6",
          "type": "mcq",
          "prompt": "Pour appliquer $(\\ln(u))' = \\frac{u'}{u}$ sur un intervalle $K$, il faut que $u$ soit :",
          "options": [
            "Dérivable et strictement positive sur $K$",
            "Constante sur $K$",
            "Strictement négative sur $K$",
            "Un polynôme du second degré"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'hypothèse énoncée dans la leçon, pour la dérivée de $\\ln(u)$ comme pour ses primitives."
        }
      ]
    }
  ]
};
