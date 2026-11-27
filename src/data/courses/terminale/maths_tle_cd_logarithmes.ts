import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 05 : Fonction logarithme népérien » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2848
export const MATHS_TLE_CD_L05_LOGARITHMES: CurriculumChapter = {
  "id": "terminale_c_maths_numerique_l05_logarithmes",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 5,
  "title": "Leçon 5 : Fonction logarithme népérien",
  "summary": "Définition du logarithme népérien, propriétés algébriques, résolution d'équations et d'inéquations, limites et étude de ln, fonctions ln u et primitives en u'/u, logarithme de base a et applications.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2848",
  "points": [
    {
      "id": "terminale_c_maths_numerique_l05_logarithmes_p01",
      "order": 1,
      "title": "Définition de la fonction logarithme népérien",
      "summary": "ln est la primitive de 1/x qui s'annule en 1 ; elle est définie et strictement croissante sur ]0 ; +∞[.",
      "conceptExplanation": "La fonction logarithme népérien, notée $\\ln$, est la primitive de la fonction $x \\mapsto \\frac{1}{x}$ définie sur $]0 ; +\\infty[$ et qui s'annule en $1$.\nConséquences :\n- $\\ln 1 = 0$.\n- L'ensemble de définition de la fonction $\\ln$ est $]0 ; +\\infty[$.\n- La fonction logarithme népérien est dérivable sur $]0 ; +\\infty[$ et pour tout $x > 0$, $\\ln'(x) = \\frac{1}{x}$.\n- Pour tout $x > 0$, $\\frac{1}{x} > 0$, donc la fonction $\\ln$ est strictement croissante sur $]0 ; +\\infty[$.",
      "keyRule": "ln est la primitive de 1/x qui s'annule en 1. ln 1 = 0, ln'(x) = 1/x, ln est strictement croissante.",
      "formulas": [
        {
          "name": "Définition de ln",
          "formula": "\\ln \\text{ est la primitive de } x \\mapsto \\frac{1}{x} \\text{ sur } ]0 ; +\\infty[ \\text{ telle que } \\ln 1 = 0",
          "note": "ln est définie sur ]0 ; +∞[."
        },
        {
          "name": "Dérivée de ln",
          "formula": "\\ln'(x) = \\frac{1}{x} \\quad \\text{pour tout } x > 0",
          "note": "Comme 1/x > 0, ln est strictement croissante."
        }
      ],
      "workedExample": {
        "title": "Pourquoi ln est-elle strictement croissante ?",
        "statement": "Justifie que la fonction $\\ln$ est strictement croissante sur $]0 ; +\\infty[$.",
        "methodSteps": [
          "La fonction $\\ln$ est dérivable sur $]0 ; +\\infty[$ et $\\ln'(x) = \\frac{1}{x}$.",
          "Pour tout $x > 0$, $\\frac{1}{x} > 0$ : la dérivée est strictement positive.",
          "Donc $\\ln$ est strictement croissante sur $]0 ; +\\infty[$."
        ],
        "conclusion": "ln est strictement croissante sur ]0 ; +∞[ car sa dérivée 1/x est strictement positive."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de ln",
          "stepTheme": "La définition de ln",
          "stepBadge": "La définition de ln",
          "paragraphText": "• La fonction logarithme népérien, notée $\\ln$, est la primitive de la fonction $x \\mapsto \\frac{1}{x}$ définie sur $]0 ; +\\infty[$ et qui s'annule en $1$.\nC'est la seule primitive de $\\frac{1}{x}$ sur $]0 ; +\\infty[$ qui prend la valeur $0$ en $1$.\nOn retient : $\\ln$ « remonte » la fonction $\\frac{1}{x}$ en partant de $0$ en $x = 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p01_q1",
            "type": "mcq",
            "prompt": "Comment est définie la fonction logarithme népérien $\\ln$ ?",
            "options": [
              "C'est la primitive de $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ qui s'annule en $1$",
              "C'est la dérivée de $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$",
              "C'est la primitive de $x \\mapsto \\frac{1}{x}$ sur $\\mathbb{R}$ qui s'annule en $0$",
              "C'est la fonction réciproque de $x \\mapsto \\frac{1}{x}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, $\\ln$ est la primitive de $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ qui s'annule en $1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les premières conséquences",
          "stepTheme": "Les premières conséquences",
          "stepBadge": "Les premières conséquences",
          "paragraphText": "• $\\ln 1 = 0$ (par définition).\n• L'ensemble de définition de $\\ln$ est $]0 ; +\\infty[$ : on ne peut pas prendre le logarithme d'un nombre négatif ou nul.\n• $\\ln$ est dérivable sur $]0 ; +\\infty[$ et $\\ln'(x) = \\frac{1}{x}$ pour tout $x > 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p01_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\ln 1$ ?",
            "options": [
              "$1$",
              "$0$",
              "$e$",
              "La valeur n'existe pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $\\ln$ est la primitive de $\\frac{1}{x}$ qui s'annule en $1$ : $\\ln 1 = 0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "ln est strictement croissante",
          "stepTheme": "ln est strictement croissante",
          "stepBadge": "ln est strictement croissante",
          "paragraphText": "• Pour tout $x > 0$, $\\ln'(x) = \\frac{1}{x} > 0$ : la dérivée de $\\ln$ est strictement positive sur $]0 ; +\\infty[$.\nDonc la fonction $\\ln$ est strictement croissante sur $]0 ; +\\infty[$.\nConséquence : $\\ln$ conserve l'ordre : $a > b$ équivaut à $\\ln a > \\ln b$ (pour $a, b > 0$).",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p01_q3",
            "type": "mcq",
            "prompt": "Pourquoi la fonction $\\ln$ est-elle strictement croissante sur $]0 ; +\\infty[$ ?",
            "options": [
              "Parce que $\\ln'(x) = \\frac{1}{x} > 0$ pour tout $x > 0$",
              "Parce que $\\ln 1 = 0$",
              "Parce que $\\ln$ est définie sur $]0 ; +\\infty[$",
              "Parce que $\\ln x \\to +\\infty$ quand $x \\to +\\infty$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\ln'(x) = \\frac{1}{x} > 0$ pour tout $x > 0$ : la dérivée strictement positive donne la croissance stricte."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le nombre e",
          "stepTheme": "Le nombre e",
          "stepBadge": "Le nombre e",
          "paragraphText": "• La fonction $\\ln$ est continue et strictement croissante sur $]2 ; 3[$, avec $\\ln 2 \\approx 0{,}69$ et $\\ln 3 \\approx 1{,}09$.\nComme $1 \\in ]\\ln 2 ; \\ln 3[$, il existe un unique réel noté $e \\in ]2 ; 3[$ tel que $\\ln(e) = 1$.\nOn a $e \\approx 2{,}718$. Pour tout nombre rationnel $r$, $\\ln(e^r) = r$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p01_q4",
            "type": "mcq",
            "prompt": "Comment est défini le nombre $e$ ?",
            "options": [
              "C'est l'unique réel tel que $\\ln(e) = 1$",
              "C'est l'unique réel tel que $\\ln(e) = 0$",
              "C'est $\\ln 2$",
              "C'est l'unique réel tel que $e = \\ln 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$e$ est l'unique réel de $]2 ; 3[$ tel que $\\ln(e) = 1$ ; on a $e \\approx 2{,}718$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le signe de ln",
          "stepTheme": "Le signe de ln",
          "stepBadge": "Le signe de ln",
          "paragraphText": "• Pour tout $x > 0$ : $\\ln x = 0$ équivaut à $x = 1$ ; $\\ln x < 0$ équivaut à $0 < x < 1$ ; $\\ln x \\geq 0$ équivaut à $x \\geq 1$.\nCela vient de la croissance stricte de $\\ln$ et de $\\ln 1 = 0$ : avant $1$, le logarithme est négatif ; après $1$, il est positif.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p01_q5",
            "type": "mcq",
            "prompt": "Pour $x > 0$, à quoi équivaut $\\ln x < 0$ ?",
            "options": [
              "$0 < x < 1$",
              "$x > 1$",
              "$x < 0$",
              "$x = 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme $\\ln$ est strictement croissante et $\\ln 1 = 0$, on a $\\ln x < 0$ exactement quand $0 < x < 1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "ln n'existe pas pour $x \\leq 0$",
          "stepTheme": "ln n'existe pas pour $x \\leq 0$",
          "stepBadge": "ln n'existe pas pour $x \\leq 0$",
          "paragraphText": "• L'ensemble de définition de $\\ln$ est $]0 ; +\\infty[$ : $\\ln 0$ et $\\ln(-2)$ n'existent pas.\nPiège : avant de résoudre une équation ou une inéquation avec $\\ln$, on détermine toujours l'ensemble de validité (les $x$ tels que chaque argument de $\\ln$ est strictement positif).\nExemple : $\\ln(x - 10) < 0$ ne se résout que sur $]10 ; +\\infty[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p01_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces écritures est correcte ?",
            "options": [
              "$\\ln(-2) = -\\ln 2$",
              "$\\ln 0 = -\\infty$",
              "$\\ln 1 = 0$",
              "$\\ln(-1) = 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\ln$ n'est définie que sur $]0 ; +\\infty[$ : $\\ln(-2)$ et $\\ln(-1)$ n'existent pas, et $\\ln 0$ n'existe pas non plus. Seul $\\ln 1 = 0$ est correct."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p01_q1",
          "type": "mcq",
          "prompt": "Comment est définie la fonction logarithme népérien $\\ln$ ?",
          "options": [
            "C'est la primitive de $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ qui s'annule en $1$",
            "C'est la dérivée de $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$",
            "C'est la primitive de $x \\mapsto \\frac{1}{x}$ sur $\\mathbb{R}$ qui s'annule en $0$",
            "C'est la fonction réciproque de $x \\mapsto \\frac{1}{x}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, $\\ln$ est la primitive de $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ qui s'annule en $1$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p01_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\ln 1$ ?",
          "options": [
            "$1$",
            "$0$",
            "$e$",
            "La valeur n'existe pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $\\ln$ est la primitive de $\\frac{1}{x}$ qui s'annule en $1$ : $\\ln 1 = 0$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p01_q3",
          "type": "mcq",
          "prompt": "Pourquoi la fonction $\\ln$ est-elle strictement croissante sur $]0 ; +\\infty[$ ?",
          "options": [
            "Parce que $\\ln'(x) = \\frac{1}{x} > 0$ pour tout $x > 0$",
            "Parce que $\\ln 1 = 0$",
            "Parce que $\\ln$ est définie sur $]0 ; +\\infty[$",
            "Parce que $\\ln x \\to +\\infty$ quand $x \\to +\\infty$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\ln'(x) = \\frac{1}{x} > 0$ pour tout $x > 0$ : la dérivée strictement positive donne la croissance stricte."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p01_q4",
          "type": "mcq",
          "prompt": "Comment est défini le nombre $e$ ?",
          "options": [
            "C'est l'unique réel tel que $\\ln(e) = 1$",
            "C'est l'unique réel tel que $\\ln(e) = 0$",
            "C'est $\\ln 2$",
            "C'est l'unique réel tel que $e = \\ln 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$e$ est l'unique réel de $]2 ; 3[$ tel que $\\ln(e) = 1$ ; on a $e \\approx 2{,}718$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p01_q5",
          "type": "mcq",
          "prompt": "Pour $x > 0$, à quoi équivaut $\\ln x < 0$ ?",
          "options": [
            "$0 < x < 1$",
            "$x > 1$",
            "$x < 0$",
            "$x = 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme $\\ln$ est strictement croissante et $\\ln 1 = 0$, on a $\\ln x < 0$ exactement quand $0 < x < 1$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p01_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces écritures est correcte ?",
          "options": [
            "$\\ln(-2) = -\\ln 2$",
            "$\\ln 0 = -\\infty$",
            "$\\ln 1 = 0$",
            "$\\ln(-1) = 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\ln$ n'est définie que sur $]0 ; +\\infty[$ : $\\ln(-2)$ et $\\ln(-1)$ n'existent pas, et $\\ln 0$ n'existe pas non plus. Seul $\\ln 1 = 0$ est correct."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l05_logarithmes_p02",
      "order": 2,
      "title": "Propriétés algébriques de ln",
      "summary": "ln transforme les produits en sommes, les quotients en différences et les puissances en produits.",
      "conceptExplanation": "Propriété fondamentale : pour tous réels $a$ et $b$ strictement positifs, $\\ln(a \\times b) = \\ln a + \\ln b$.\nConséquences (pour tous réels $a$ et $b$ strictement positifs) :\n- $\\ln\\left(\\frac{1}{b}\\right) = -\\ln(b)$.\n- $\\ln\\left(\\frac{a}{b}\\right) = \\ln(a) - \\ln(b)$.\n- Pour tout $r \\in \\mathbb{Q}$, $\\ln(a^r) = r\\ln(a)$ ; en particulier, $\\ln(\\sqrt{a}) = \\frac{1}{2}\\ln(a)$.",
      "keyRule": "ln(ab) = ln a + ln b ; ln(a/b) = ln a − ln b ; ln(a^r) = r·ln a. Le logarithme transforme les produits en sommes.",
      "formulas": [
        {
          "name": "Propriété fondamentale",
          "formula": "\\ln(a \\times b) = \\ln a + \\ln b \\quad (a > 0,\\ b > 0)",
          "note": "C'est la propriété qui définit le logarithme."
        },
        {
          "name": "Quotient et puissance",
          "formula": "\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b,\\quad \\ln(a^r) = r\\ln a",
          "note": "Pour a, b > 0 et r rationnel."
        }
      ],
      "workedExample": {
        "title": "Écrire sous la forme $\\ln a$",
        "statement": "Écris sous la forme $\\ln a$, où $a > 0$, chacune des expressions suivantes : $A = \\ln 8 + \\ln 10 + \\ln 40$ ; $B = \\ln 3x - \\ln 3$ avec $x > 0$ ; $C = \\ln\\frac{3}{4} + \\ln\\frac{8}{3} - \\ln(2^3)$.",
        "methodSteps": [
          "$A = \\ln(8 \\times 10 \\times 40) = \\ln 3200$.",
          "$B = \\ln\\left(\\frac{3x}{3}\\right) = \\ln x$.",
          "$C = \\ln 2 - \\ln(2^3) = \\ln\\left(\\frac{2}{8}\\right) = \\ln\\frac{1}{4}$."
        ],
        "conclusion": "$A = \\ln 3200$, $B = \\ln x$, $C = \\ln\\frac{1}{4}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La propriété fondamentale",
          "stepTheme": "La propriété fondamentale",
          "stepBadge": "La propriété fondamentale",
          "paragraphText": "• Pour tous réels $a$ et $b$ strictement positifs : $\\ln(a \\times b) = \\ln a + \\ln b$.\nLe logarithme transforme un produit en somme : c'est la propriété fondamentale du logarithme.\nExemple : $\\ln 8 + \\ln 10 + \\ln 40 = \\ln(8 \\times 10 \\times 40) = \\ln 3200$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p02_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\ln 8 + \\ln 10 + \\ln 40$ ?",
            "options": [
              "$\\ln 3200$",
              "$\\ln 320$",
              "$\\ln 58$",
              "$\\ln 2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\ln 8 + \\ln 10 + \\ln 40 = \\ln(8 \\times 10 \\times 40) = \\ln 3200$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le logarithme d'un quotient",
          "stepTheme": "Le logarithme d'un quotient",
          "stepBadge": "Le logarithme d'un quotient",
          "paragraphText": "• Pour $a, b > 0$ : $\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$ et $\\ln\\left(\\frac{1}{b}\\right) = -\\ln b$.\nExemple : pour $x > 0$, $B = \\ln 3x - \\ln 3 = \\ln\\left(\\frac{3x}{3}\\right) = \\ln x$.\nAutre exemple : $C = \\ln\\frac{3}{4} + \\ln\\frac{8}{3} - \\ln(2^3) = \\ln 2 - \\ln 8 = \\ln\\frac{1}{4}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p02_q2",
            "type": "mcq",
            "prompt": "Pour $x > 0$, que vaut $\\ln 3x - \\ln 3$ ?",
            "options": [
              "$\\ln x$",
              "$\\ln 3x$",
              "$\\ln(3x - 3)$",
              "$0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\ln 3x - \\ln 3 = \\ln\\left(\\frac{3x}{3}\\right) = \\ln x$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le logarithme d'une puissance",
          "stepTheme": "Le logarithme d'une puissance",
          "stepBadge": "Le logarithme d'une puissance",
          "paragraphText": "• Pour $a > 0$ et $r \\in \\mathbb{Q}$ : $\\ln(a^r) = r\\ln(a)$.\nExemples : $D = \\ln(7^{-3}) + 2\\ln 49 = \\ln(7^{-3}) + \\ln(49^2) = \\ln(7^{-3} \\times 7^4) = \\ln 7$.\n$E = 4\\ln 25 - 2\\ln 5 = 8\\ln 5 - \\ln 5 = 7\\ln 5 = \\ln(5^7)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p02_q3",
            "type": "mcq",
            "prompt": "Que vaut $4\\ln 25 - 2\\ln 5$ ?",
            "options": [
              "$\\ln(5^7)$",
              "$\\ln(5^6)$",
              "$\\ln 20$",
              "$2\\ln 5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$4\\ln 25 = 4 \\times 2\\ln 5 = 8\\ln 5$ donc $4\\ln 25 - 2\\ln 5 = 7\\ln 5 = \\ln(5^7)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le logarithme d'une racine carrée",
          "stepTheme": "Le logarithme d'une racine carrée",
          "stepBadge": "Le logarithme d'une racine carrée",
          "paragraphText": "• Pour $a > 0$ : $\\ln(\\sqrt{a}) = \\frac{1}{2}\\ln(a)$ (cas particulier de $\\ln(a^r) = r\\ln a$ avec $r = \\frac{1}{2}$).\nExemple : $\\ln(\\sqrt{7}) = \\frac{1}{2}\\ln 7$.\nOn utilise cette propriété pour simplifier les expressions avec des racines.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p02_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\ln(\\sqrt{a})$ pour $a > 0$ ?",
            "options": [
              "$2\\ln a$",
              "$\\frac{1}{2}\\ln a$",
              "$\\ln a$",
              "$\\sqrt{\\ln a}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\sqrt{a} = a^{\\frac{1}{2}}$ donc $\\ln(\\sqrt{a}) = \\frac{1}{2}\\ln a$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Simplifier avec les propriétés",
          "stepTheme": "Simplifier avec les propriétés",
          "stepBadge": "Simplifier avec les propriétés",
          "paragraphText": "• Pour simplifier une expression avec des $\\ln$ : on regroupe les produits en sommes, les quotients en différences, et on fait « descendre » les exposants devant le $\\ln$.\nExemple : $\\ln(7^{-3}) + 2\\ln 49 = \\ln(7^{-3}) + \\ln(7^4) = \\ln 7$.\nLa méthode : repérer les mêmes bases, utiliser $\\ln(a^r) = r\\ln a$ puis $\\ln(ab) = \\ln a + \\ln b$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p02_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\ln(7^{-3}) + 2\\ln 49$ ?",
            "options": [
              "$\\ln 7$",
              "$\\ln 49$",
              "$0$",
              "$\\ln(7^{-1})$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2\\ln 49 = \\ln(49^2) = \\ln(7^4)$ donc $\\ln(7^{-3}) + \\ln(7^4) = \\ln(7^{-3} \\times 7^4) = \\ln 7$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Pas de formule pour ln(a + b)",
          "stepTheme": "Pas de formule pour ln(a + b)",
          "stepBadge": "Pas de formule pour ln(a + b)",
          "paragraphText": "• Il n'existe pas de formule simple pour $\\ln(a + b)$ : on ne peut pas écrire $\\ln(a + b) = \\ln a + \\ln b$.\nLes propriétés ne concernent que les produits, les quotients et les puissances.\nPiège : $\\ln(3 + 5) = \\ln 8$, et non $\\ln 3 + \\ln 5 = \\ln 15$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p02_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\ln(3 + 5)$ ?",
            "options": [
              "$\\ln 8$",
              "$\\ln 3 + \\ln 5$",
              "$\\ln 15$",
              "$\\ln 3 - \\ln 5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\ln(3 + 5) = \\ln 8$ : il n'y a pas de formule pour le logarithme d'une somme, on calcule d'abord la somme."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p02_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\ln 8 + \\ln 10 + \\ln 40$ ?",
          "options": [
            "$\\ln 3200$",
            "$\\ln 320$",
            "$\\ln 58$",
            "$\\ln 2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\ln 8 + \\ln 10 + \\ln 40 = \\ln(8 \\times 10 \\times 40) = \\ln 3200$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p02_q2",
          "type": "mcq",
          "prompt": "Pour $x > 0$, que vaut $\\ln 3x - \\ln 3$ ?",
          "options": [
            "$\\ln x$",
            "$\\ln 3x$",
            "$\\ln(3x - 3)$",
            "$0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\ln 3x - \\ln 3 = \\ln\\left(\\frac{3x}{3}\\right) = \\ln x$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p02_q3",
          "type": "mcq",
          "prompt": "Que vaut $4\\ln 25 - 2\\ln 5$ ?",
          "options": [
            "$\\ln(5^7)$",
            "$\\ln(5^6)$",
            "$\\ln 20$",
            "$2\\ln 5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$4\\ln 25 = 4 \\times 2\\ln 5 = 8\\ln 5$ donc $4\\ln 25 - 2\\ln 5 = 7\\ln 5 = \\ln(5^7)$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p02_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\ln(\\sqrt{a})$ pour $a > 0$ ?",
          "options": [
            "$2\\ln a$",
            "$\\frac{1}{2}\\ln a$",
            "$\\ln a$",
            "$\\sqrt{\\ln a}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\sqrt{a} = a^{\\frac{1}{2}}$ donc $\\ln(\\sqrt{a}) = \\frac{1}{2}\\ln a$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p02_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\ln(7^{-3}) + 2\\ln 49$ ?",
          "options": [
            "$\\ln 7$",
            "$\\ln 49$",
            "$0$",
            "$\\ln(7^{-1})$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2\\ln 49 = \\ln(49^2) = \\ln(7^4)$ donc $\\ln(7^{-3}) + \\ln(7^4) = \\ln(7^{-3} \\times 7^4) = \\ln 7$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p02_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\ln(3 + 5)$ ?",
          "options": [
            "$\\ln 8$",
            "$\\ln 3 + \\ln 5$",
            "$\\ln 15$",
            "$\\ln 3 - \\ln 5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\ln(3 + 5) = \\ln 8$ : il n'y a pas de formule pour le logarithme d'une somme, on calcule d'abord la somme."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l05_logarithmes_p03",
      "order": 3,
      "title": "Équations et inéquations avec ln",
      "summary": "ln conserve l'ordre : on résout ln u = ln v en résolvant u = v sur l'ensemble de validité.",
      "conceptExplanation": "Propriété : pour tous réels $a$ et $b$ strictement positifs, $\\ln a > \\ln b$ équivaut à $a > b$ et $\\ln a = \\ln b$ équivaut à $a = b$.\nMéthode pour résoudre une équation du type $\\ln u(x) = \\ln v(x)$ (ou une inéquation du type $\\ln u(x) \\geq \\ln v(x)$) : on détermine l'ensemble de validité, c'est-à-dire l'ensemble des réels $x$ tels que $u(x) > 0$ et $v(x) > 0$ ; on résout dans cet ensemble l'équation $u(x) = v(x)$ (ou l'inéquation $u(x) \\geq v(x)$).\nPour une équation du type $\\ln u(x) = m$, on écrit $m = \\ln(e^m)$ puis on résout $u(x) = e^m$ sur l'ensemble de validité.\nPour une équation du type $a(\\ln x)^2 + b\\ln x + c = 0$, on pose $X = \\ln x$ et on résout l'équation du second degré en $X$, puis on revient à $x = e^X$.",
      "keyRule": "D'abord l'ensemble de validité (arguments > 0), puis on enlève les ln : ln u = ln v devient u = v.",
      "formulas": [
        {
          "name": "Équivalence fondamentale",
          "formula": "\\ln a = \\ln b \\iff a = b,\\quad \\ln a > \\ln b \\iff a > b \\quad (a > 0,\\ b > 0)",
          "note": "ln conserve l'ordre car elle est strictement croissante."
        }
      ],
      "workedExample": {
        "title": "Résoudre $\\ln(x^2 - 4) = \\ln(3x)$",
        "statement": "Résous dans $\\mathbb{R}$ l'équation $\\ln(x^2 - 4) = \\ln(3x)$.",
        "methodSteps": [
          "Ensemble de validité : $x^2 - 4 > 0$ et $3x > 0$, soit $x \\in ]2 ; +\\infty[$.",
          "Dans cet ensemble, l'équation équivaut à $x^2 - 4 = 3x$, soit $x^2 - 3x - 4 = 0$.",
          "Le discriminant est $25$ : les solutions sont $x_1 = -1$ et $x_2 = 4$.",
          "Or $4 \\in ]2 ; +\\infty[$ et $-1 \\notin ]2 ; +\\infty[$ : la seule solution est $4$."
        ],
        "conclusion": "$S_{\\mathbb{R}} = \\{4\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La méthode en deux temps",
          "stepTheme": "La méthode en deux temps",
          "stepBadge": "La méthode en deux temps",
          "paragraphText": "• Pour résoudre $\\ln u(x) = \\ln v(x)$ : on détermine d'abord l'ensemble de validité (les $x$ tels que $u(x) > 0$ et $v(x) > 0$) ; on résout ensuite $u(x) = v(x)$ dans cet ensemble.\nExemple : $\\ln(x^2 - 4) = \\ln(3x)$ se résout dans $]2 ; +\\infty[$, puis $x^2 - 3x - 4 = 0$ donne $x = -1$ ou $x = 4$ ; seule $x = 4$ est dans l'ensemble de validité.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p03_q1",
            "type": "mcq",
            "prompt": "Quelle est la première étape pour résoudre $\\ln u(x) = \\ln v(x)$ ?",
            "options": [
              "Résoudre $u(x) = v(x)$ directement",
              "Déterminer l'ensemble de validité : $u(x) > 0$ et $v(x) > 0$",
              "Calculer $\\ln u(x) - \\ln v(x)$",
              "Élever au carré les deux membres"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On détermine d'abord l'ensemble de validité (les $x$ tels que $u(x) > 0$ et $v(x) > 0$), puis on résout $u(x) = v(x)$ dans cet ensemble."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $\\ln x = 3$",
          "stepTheme": "Résoudre $\\ln x = 3$",
          "stepBadge": "Résoudre $\\ln x = 3$",
          "paragraphText": "• $\\ln(x) = 3$ équivaut à $x \\in ]0 ; +\\infty[$ et $x = e^3$.\nDonc $S_{\\mathbb{R}} = \\{e^3\\}$.\nDe même, $\\ln(2x - 1) = -5$ équivaut à $x \\in ]\\frac{1}{2} ; +\\infty[$ et $2x - 1 = e^{-5}$, donc $x = \\frac{e^{-5} + 1}{2}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p03_q2",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln x = 3$ ?",
            "options": [
              "$\\{3\\}$",
              "$\\{e^3\\}$",
              "$\\{\\ln 3\\}$",
              "$\\{3e\\}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln x = 3$ équivaut à $x = e^3$ (avec $x > 0$) : $S_{\\mathbb{R}} = \\{e^3\\}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $\\ln(x + 1) \\leq 2$",
          "stepTheme": "Résoudre $\\ln(x + 1) \\leq 2$",
          "stepBadge": "Résoudre $\\ln(x + 1) \\leq 2$",
          "paragraphText": "• $\\ln(x + 1) \\leq 2$ équivaut à $x \\in ]-1 ; +\\infty[$ et $\\ln(x + 1) \\leq \\ln(e^2)$.\nComme $\\ln$ est strictement croissante, cela équivaut à $0 < x + 1 \\leq e^2$, soit $-1 < x \\leq e^2 - 1$.\nDonc $S_{\\mathbb{R}} = ]-1 ; e^2 - 1]$.\nDe même, $\\ln(x - 10) < 0$ se résout sur $]10 ; +\\infty[$ et donne $x - 10 < 1$, soit $S_{\\mathbb{R}} = ]10 ; 11[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p03_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln(x + 1) \\leq 2$ ?",
            "options": [
              "$]-1 ; e^2 - 1]$",
              "$]-1 ; e^2]$",
              "$[0 ; e^2 - 1]$",
              "$]0 ; e^2 - 1]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\ln(x + 1) \\leq 2$ équivaut à $x > -1$ et $x + 1 \\leq e^2$, soit $-1 < x \\leq e^2 - 1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une équation en $(\\ln x)^2$",
          "stepTheme": "Une équation en $(\\ln x)^2$",
          "stepBadge": "Une équation en $(\\ln x)^2$",
          "paragraphText": "• Résous $(\\ln x)^2 - 3\\ln x - 4 = 0$ dans $\\mathbb{R}$.\nL'ensemble de validité est $]0 ; +\\infty[$. On pose $X = \\ln x$ : on obtient $X^2 - 3X - 4 = 0$.\nLe discriminant est $25$ : les solutions sont $X_1 = -1$ et $X_2 = 4$.\nOn résout $\\ln x = -1$ (donc $x = e^{-1}$) et $\\ln x = 4$ (donc $x = e^4$). Donc $S_{\\mathbb{R}} = \\{e^{-1} ; e^4\\}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p03_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $(\\ln x)^2 - 3\\ln x - 4 = 0$ ?",
            "options": [
              "$\\{e^{-1} ; e^4\\}$",
              "$\\{-1 ; 4\\}$",
              "$\\{e ; e^4\\}$",
              "$\\{e^{-1} ; e^{-4}\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En posant $X = \\ln x$, on obtient $X^2 - 3X - 4 = 0$ : $X = -1$ ou $X = 4$, donc $x = e^{-1}$ ou $x = e^4$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $\\ln(x^2 - 4) = \\ln(3x)$",
          "stepTheme": "Résoudre $\\ln(x^2 - 4) = \\ln(3x)$",
          "stepBadge": "Résoudre $\\ln(x^2 - 4) = \\ln(3x)$",
          "paragraphText": "• L'équation $\\ln(x^2 - 4) = \\ln(3x)$ se résout dans $E = ]2 ; +\\infty[$ (il faut $x^2 - 4 > 0$ et $3x > 0$).\nElle équivaut à $x^2 - 4 = 3x$, soit $x^2 - 3x - 4 = 0$ : les solutions sont $x_1 = -1$ et $x_2 = 4$.\nOr $4 \\in E$ et $-1 \\notin E$ : la seule solution est $4$. Donc $S_{\\mathbb{R}} = \\{4\\}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p03_q5",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln(x^2 - 4) = \\ln(3x)$ ?",
            "options": [
              "$\\{4\\}$",
              "$\\{-1 ; 4\\}$",
              "$\\{-1\\}$",
              "$\\{2 ; 4\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'équation se résout dans $]2 ; +\\infty[$ : $x^2 - 3x - 4 = 0$ donne $x = -1$ (rejetée) ou $x = 4$ (acceptée)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $\\ln(2x + 4) \\geq \\ln(6 - 2x)$",
          "stepTheme": "Résoudre $\\ln(2x + 4) \\geq \\ln(6 - 2x)$",
          "stepBadge": "Résoudre $\\ln(2x + 4) \\geq \\ln(6 - 2x)$",
          "paragraphText": "• On cherche les $x$ tels que $2x + 4 > 0$ et $6 - 2x > 0$, soit $x > -2$ et $x < 3$ : l'inéquation se résout dans $E = ]-2 ; 3[$.\nDe plus, $2x + 4 \\geq 6 - 2x$ équivaut à $x \\geq \\frac{1}{2}$.\nL'ensemble des solutions est $E \\cap [\\frac{1}{2} ; +\\infty[$, c'est-à-dire $[\\frac{1}{2} ; 3[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p03_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln(2x + 4) \\geq \\ln(6 - 2x)$ ?",
            "options": [
              "$[\\frac{1}{2} ; 3[$",
              "$[\\frac{1}{2} ; +\\infty[$",
              "$]-2 ; 3[$",
              "$[\\frac{1}{2} ; 3]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ensemble de validité est $]-2 ; 3[$ et $2x + 4 \\geq 6 - 2x$ donne $x \\geq \\frac{1}{2}$ : $S_{\\mathbb{R}} = [\\frac{1}{2} ; 3[$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p03_q1",
          "type": "mcq",
          "prompt": "Quelle est la première étape pour résoudre $\\ln u(x) = \\ln v(x)$ ?",
          "options": [
            "Résoudre $u(x) = v(x)$ directement",
            "Déterminer l'ensemble de validité : $u(x) > 0$ et $v(x) > 0$",
            "Calculer $\\ln u(x) - \\ln v(x)$",
            "Élever au carré les deux membres"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On détermine d'abord l'ensemble de validité (les $x$ tels que $u(x) > 0$ et $v(x) > 0$), puis on résout $u(x) = v(x)$ dans cet ensemble."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p03_q2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln x = 3$ ?",
          "options": [
            "$\\{3\\}$",
            "$\\{e^3\\}$",
            "$\\{\\ln 3\\}$",
            "$\\{3e\\}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln x = 3$ équivaut à $x = e^3$ (avec $x > 0$) : $S_{\\mathbb{R}} = \\{e^3\\}$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p03_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln(x + 1) \\leq 2$ ?",
          "options": [
            "$]-1 ; e^2 - 1]$",
            "$]-1 ; e^2]$",
            "$[0 ; e^2 - 1]$",
            "$]0 ; e^2 - 1]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\ln(x + 1) \\leq 2$ équivaut à $x > -1$ et $x + 1 \\leq e^2$, soit $-1 < x \\leq e^2 - 1$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p03_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $(\\ln x)^2 - 3\\ln x - 4 = 0$ ?",
          "options": [
            "$\\{e^{-1} ; e^4\\}$",
            "$\\{-1 ; 4\\}$",
            "$\\{e ; e^4\\}$",
            "$\\{e^{-1} ; e^{-4}\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En posant $X = \\ln x$, on obtient $X^2 - 3X - 4 = 0$ : $X = -1$ ou $X = 4$, donc $x = e^{-1}$ ou $x = e^4$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p03_q5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln(x^2 - 4) = \\ln(3x)$ ?",
          "options": [
            "$\\{4\\}$",
            "$\\{-1 ; 4\\}$",
            "$\\{-1\\}$",
            "$\\{2 ; 4\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équation se résout dans $]2 ; +\\infty[$ : $x^2 - 3x - 4 = 0$ donne $x = -1$ (rejetée) ou $x = 4$ (acceptée)."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p03_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $\\ln(2x + 4) \\geq \\ln(6 - 2x)$ ?",
          "options": [
            "$[\\frac{1}{2} ; 3[$",
            "$[\\frac{1}{2} ; +\\infty[$",
            "$]-2 ; 3[$",
            "$[\\frac{1}{2} ; 3]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ensemble de validité est $]-2 ; 3[$ et $2x + 4 \\geq 6 - 2x$ donne $x \\geq \\frac{1}{2}$ : $S_{\\mathbb{R}} = [\\frac{1}{2} ; 3[$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l05_logarithmes_p04",
      "order": 4,
      "title": "Limites et étude de la fonction ln",
      "summary": "ln tend vers +∞ en +∞ et vers −∞ en 0 ; sa courbe a l'axe des ordonnées pour asymptote et la droite y = x − 1 pour tangente en 1.",
      "conceptExplanation": "Limites : $\\lim_{x \\to +\\infty} \\ln x = +\\infty$ et $\\lim_{x \\to 0^+} \\ln x = -\\infty$.\nConséquence : l'axe des ordonnées est une asymptote verticale à la courbe représentative de la fonction $\\ln$.\nVariations : la fonction $\\ln$ est dérivable et strictement croissante sur $]0 ; +\\infty[$.\nLa tangente à la courbe au point $A$ d'abscisse $1$ a pour équation $y = x - 1$. La courbe est au-dessous de cette tangente sur $]0 ; +\\infty[$, donc pour tout $x > 0$, $\\ln x \\leq x - 1$.\nAutres limites : $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$ ; $\\lim_{x \\to 0^+} x\\ln x = 0$ ; $\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$ ; $\\lim_{x \\to 1} \\frac{\\ln x}{x-1} = 1$.",
      "keyRule": "ln x → +∞ en +∞ et → −∞ en 0. (ln x)/x → 0 en +∞ ; x·ln x → 0 en 0. ln x ≤ x − 1.",
      "formulas": [
        {
          "name": "Limites de référence de ln",
          "formula": "\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0,\\quad \\lim_{x \\to 0^+} x\\ln x = 0,\\quad \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1",
          "note": "ln croît moins vite que toute puissance de x."
        }
      ],
      "workedExample": {
        "title": "La limite de $2x - 3 - \\ln x$ en $+\\infty$",
        "statement": "Calcule la limite en $+\\infty$ de la fonction $x \\mapsto 2x - 3 - \\ln x$.",
        "methodSteps": [
          "On factorise par $x$ : $2x - 3 - \\ln x = x\\left(2 - \\frac{3}{x} - \\frac{\\ln x}{x}\\right)$.",
          "Or $\\lim_{x \\to +\\infty} x = +\\infty$ et $\\lim_{x \\to +\\infty} \\left(2 - \\frac{3}{x} - \\frac{\\ln x}{x}\\right) = 2$.",
          "Donc $\\lim_{x \\to +\\infty} (2x - 3 - \\ln x) = +\\infty$."
        ],
        "conclusion": "La limite est $+\\infty$ : le terme $2x$ l'emporte sur $\\ln x$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les limites aux bornes",
          "stepTheme": "Les limites aux bornes",
          "stepBadge": "Les limites aux bornes",
          "paragraphText": "• $\\lim_{x \\to +\\infty} \\ln x = +\\infty$ et $\\lim_{x \\to 0^+} \\ln x = -\\infty$.\nConséquence : l'axe des ordonnées (la droite d'équation $x = 0$) est une asymptote verticale à la courbe représentative de la fonction $\\ln$.\nLe tableau de variation : $\\ln$ croît de $-\\infty$ à $+\\infty$ sur $]0 ; +\\infty[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p04_q1",
            "type": "mcq",
            "prompt": "Que valent $\\lim_{x \\to +\\infty} \\ln x$ et $\\lim_{x \\to 0^+} \\ln x$ ?",
            "options": [
              "$+\\infty$ et $-\\infty$",
              "$-\\infty$ et $+\\infty$",
              "$+\\infty$ et $0$",
              "$0$ et $-\\infty$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\ln x \\to +\\infty$ quand $x \\to +\\infty$ et $\\ln x \\to -\\infty$ quand $x \\to 0^+$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La tangente au point d'abscisse 1",
          "stepTheme": "La tangente au point d'abscisse 1",
          "stepBadge": "La tangente au point d'abscisse 1",
          "paragraphText": "• La tangente $(T)$ à la courbe représentative de $\\ln$ au point $A$ d'abscisse $1$ a pour équation $y = x - 1$.\nLa courbe est au-dessous de $(T)$ sur $]0 ; +\\infty[$, donc pour tout $x > 0$, $\\ln x \\leq x - 1$.\nCette inégalité est très utile : elle majore le logarithme par une fonction affine.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est l'équation de la tangente à la courbe de $\\ln$ au point d'abscisse $1$ ?",
            "options": [
              "$y = x - 1$",
              "$y = x + 1$",
              "$y = \\frac{1}{x}$",
              "$y = x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En $x = 1$, $\\ln 1 = 0$ et $\\ln'(1) = 1$ : la tangente a pour équation $y = x - 1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La limite de $\\frac{\\ln x}{x}$ en $+\\infty$",
          "stepTheme": "La limite de $\\frac{\\ln x}{x}$ en $+\\infty$",
          "stepBadge": "La limite de $\\frac{\\ln x}{x}$ en $+\\infty$",
          "paragraphText": "• Propriété : $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$.\nLe logarithme croît moins vite que $x$ : le quotient tend vers $0$.\nOn démontre ce résultat en étudiant $f(x) = \\ln x - 2\\sqrt{x}$ : on montre que $\\ln x < 2\\sqrt{x}$ pour tout $x > 0$, puis on conclut par encadrement.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p04_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x}$ ?",
            "options": [
              "$1$",
              "$0$",
              "$+\\infty$",
              "$e$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln x$ croît moins vite que $x$ : $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les limites en 0 : $x\\ln x$ et $x^3\\ln x$",
          "stepTheme": "Les limites en 0 : $x\\ln x$ et $x^3\\ln x$",
          "stepBadge": "Les limites en 0 : $x\\ln x$ et $x^3\\ln x$",
          "paragraphText": "• $\\lim_{x \\to 0^+} x\\ln x = 0$.\nExemple : $\\lim_{x \\to 0^+} x^3\\ln x = \\lim_{x \\to 0^+} x^2 \\times x\\ln x = 0 \\times 0 = 0$, car $\\lim_{x \\to 0^+} x^2 = 0$ et $\\lim_{x \\to 0^+} x\\ln x = 0$.\nOn factorise pour faire apparaître la forme de référence $x\\ln x$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p04_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 0^+} x^3\\ln x$ ?",
            "options": [
              "$0$",
              "$-\\infty$",
              "$+\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$x^3\\ln x = x^2 \\times x\\ln x$ : $x^2 \\to 0$ et $x\\ln x \\to 0$, donc la limite est $0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La limite de $x\\ln\\left(1 + \\frac{2}{x}\\right)$",
          "stepTheme": "La limite de $x\\ln\\left(1 + \\frac{2}{x}\\right)$",
          "stepBadge": "La limite de $x\\ln\\left(1 + \\frac{2}{x}\\right)$",
          "paragraphText": "• On a $x\\ln\\left(1 + \\frac{2}{x}\\right) = 2 \\times \\frac{\\ln\\left(1 + \\frac{2}{x}\\right)}{\\frac{2}{x}}$.\nQuand $x \\to +\\infty$, $\\frac{2}{x} \\to 0$ et $\\lim_{t \\to 0} \\frac{\\ln(1+t)}{t} = 1$, donc $\\frac{\\ln\\left(1 + \\frac{2}{x}\\right)}{\\frac{2}{x}} \\to 1$.\nDonc $\\lim_{x \\to +\\infty} x\\ln\\left(1 + \\frac{2}{x}\\right) = 2 \\times 1 = 2$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p04_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} x\\ln\\left(1 + \\frac{2}{x}\\right)$ ?",
            "options": [
              "$0$",
              "$1$",
              "$2$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x\\ln\\left(1 + \\frac{2}{x}\\right) = 2 \\times \\frac{\\ln\\left(1 + \\frac{2}{x}\\right)}{\\frac{2}{x}} \\to 2 \\times 1 = 2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La limite de $2x - 3 - \\ln x$ en $+\\infty$",
          "stepTheme": "La limite de $2x - 3 - \\ln x$ en $+\\infty$",
          "stepBadge": "La limite de $2x - 3 - \\ln x$ en $+\\infty$",
          "paragraphText": "• On factorise par $x$ : $2x - 3 - \\ln x = x\\left(2 - \\frac{3}{x} - \\frac{\\ln x}{x}\\right)$.\nOr $\\lim_{x \\to +\\infty} x = +\\infty$ et $\\lim_{x \\to +\\infty} \\left(2 - \\frac{3}{x} - \\frac{\\ln x}{x}\\right) = 2$.\nDonc $\\lim_{x \\to +\\infty} (2x - 3 - \\ln x) = +\\infty$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p04_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} (2x - 3 - \\ln x)$ ?",
            "options": [
              "$-\\infty$",
              "$0$",
              "$+\\infty$",
              "$2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En factorisant par $x$ : $x\\left(2 - \\frac{3}{x} - \\frac{\\ln x}{x}\\right) \\to +\\infty \\times 2 = +\\infty$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p04_q1",
          "type": "mcq",
          "prompt": "Que valent $\\lim_{x \\to +\\infty} \\ln x$ et $\\lim_{x \\to 0^+} \\ln x$ ?",
          "options": [
            "$+\\infty$ et $-\\infty$",
            "$-\\infty$ et $+\\infty$",
            "$+\\infty$ et $0$",
            "$0$ et $-\\infty$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\ln x \\to +\\infty$ quand $x \\to +\\infty$ et $\\ln x \\to -\\infty$ quand $x \\to 0^+$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est l'équation de la tangente à la courbe de $\\ln$ au point d'abscisse $1$ ?",
          "options": [
            "$y = x - 1$",
            "$y = x + 1$",
            "$y = \\frac{1}{x}$",
            "$y = x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En $x = 1$, $\\ln 1 = 0$ et $\\ln'(1) = 1$ : la tangente a pour équation $y = x - 1$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p04_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x}$ ?",
          "options": [
            "$1$",
            "$0$",
            "$+\\infty$",
            "$e$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln x$ croît moins vite que $x$ : $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p04_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 0^+} x^3\\ln x$ ?",
          "options": [
            "$0$",
            "$-\\infty$",
            "$+\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$x^3\\ln x = x^2 \\times x\\ln x$ : $x^2 \\to 0$ et $x\\ln x \\to 0$, donc la limite est $0$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p04_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} x\\ln\\left(1 + \\frac{2}{x}\\right)$ ?",
          "options": [
            "$0$",
            "$1$",
            "$2$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x\\ln\\left(1 + \\frac{2}{x}\\right) = 2 \\times \\frac{\\ln\\left(1 + \\frac{2}{x}\\right)}{\\frac{2}{x}} \\to 2 \\times 1 = 2$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p04_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} (2x - 3 - \\ln x)$ ?",
          "options": [
            "$-\\infty$",
            "$0$",
            "$+\\infty$",
            "$2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "En factorisant par $x$ : $x\\left(2 - \\frac{3}{x} - \\frac{\\ln x}{x}\\right) \\to +\\infty \\times 2 = +\\infty$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l05_logarithmes_p05",
      "order": 5,
      "title": "Dérivées de ln u et primitive de u'/u",
      "summary": "(ln u)' = u'/u ; une primitive de u'/u est ln|u|.",
      "conceptExplanation": "Dérivées de $\\ln u$ et $\\ln|u|$ :\n- Si $u$ est une fonction dérivable et strictement positive sur un intervalle $I$, alors la fonction $\\ln u$ est dérivable sur $I$ et $(\\ln u)' = \\frac{u'}{u}$.\n- Si $u$ est une fonction dérivable et ne s'annulant pas sur un intervalle $I$, alors la fonction $\\ln|u|$ est dérivable sur $I$ et $(\\ln|u|)' = \\frac{u'}{u}$.\nPrimitive de $\\frac{u'}{u}$ : si $u$ est une fonction dérivable sur un intervalle $I$, ne s'annulant pas sur $I$, alors une primitive sur $I$ de la fonction $\\frac{u'}{u}$ est la fonction $\\ln|u|$.\nRemarque : $\\ln|u| = \\ln u$ si $u > 0$ sur $I$ ; $\\ln|u| = \\ln(-u)$ si $u < 0$ sur $I$.",
      "keyRule": "(ln u)' = u'/u. Primitive de u'/u : ln|u|. On reconnaît la forme u'/u pour primitiver.",
      "formulas": [
        {
          "name": "Dérivée de ln u",
          "formula": "(\\ln u)' = \\frac{u'}{u},\\quad (\\ln|u|)' = \\frac{u'}{u}",
          "note": "u dérivable, strictement positive pour ln u, ne s'annulant pas pour ln|u|."
        },
        {
          "name": "Primitive de u'/u",
          "formula": "\\int \\frac{u'}{u}\\,dx = \\ln|u| + c",
          "note": "u dérivable et ne s'annulant pas sur I."
        }
      ],
      "workedExample": {
        "title": "La dérivée de $\\ln(x^2 + 1)$",
        "statement": "Précise l'ensemble de dérivabilité, puis détermine la dérivée de $f(x) = \\ln(x^2 + 1)$.",
        "methodSteps": [
          "Le polynôme $u(x) = x^2 + 1$ est strictement positif et dérivable sur $\\mathbb{R}$.",
          "Donc $f$ est dérivable sur $\\mathbb{R}$ et $f'(x) = \\frac{u'(x)}{u(x)} = \\frac{2x}{x^2+1}$."
        ],
        "conclusion": "$f$ est dérivable sur $\\mathbb{R}$ et $f'(x) = \\frac{2x}{x^2+1}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dérivée de ln u",
          "stepTheme": "La dérivée de ln u",
          "stepBadge": "La dérivée de ln u",
          "paragraphText": "• Si $u$ est dérivable et strictement positive sur $I$, alors $\\ln u$ est dérivable sur $I$ et $(\\ln u)' = \\frac{u'}{u}$.\nSi $u$ est dérivable et ne s'annule pas sur $I$, alors $\\ln|u|$ est dérivable sur $I$ et $(\\ln|u|)' = \\frac{u'}{u}$.\nC'est la dérivée composée : on dérive $u$, puis on divise par $u$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p05_q1",
            "type": "mcq",
            "prompt": "Si $u$ est dérivable et strictement positive sur $I$, que vaut $(\\ln u)'$ ?",
            "options": [
              "$\\frac{u'}{u}$",
              "$\\frac{u}{u'}$",
              "$u'\\ln u$",
              "$\\frac{1}{u}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(\\ln u)' = \\frac{u'}{u}$ : on dérive $u$ puis on divise par $u$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La dérivée de $\\ln(x^2 + 1)$",
          "stepTheme": "La dérivée de $\\ln(x^2 + 1)$",
          "stepBadge": "La dérivée de $\\ln(x^2 + 1)$",
          "paragraphText": "• Soit $f(x) = \\ln(x^2 + 1)$. Le polynôme $u(x) = x^2 + 1$ est strictement positif et dérivable sur $\\mathbb{R}$.\nDonc $f$ est dérivable sur $\\mathbb{R}$ et $f'(x) = \\frac{2x}{x^2+1}$.\nDe même, pour $f(x) = \\ln|2x - 1|$ : $f$ est dérivable sur $]-\\infty ; \\frac{1}{2}[$ et sur $]\\frac{1}{2} ; +\\infty[$ et $f'(x) = \\frac{2}{2x-1}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p05_q2",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de $f(x) = \\ln(x^2 + 1)$ sur $\\mathbb{R}$ ?",
            "options": [
              "$\\frac{2x}{x^2+1}$",
              "$\\frac{1}{x^2+1}$",
              "$\\frac{2}{x^2+1}$",
              "$\\frac{2x}{x^2-1}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $u(x) = x^2 + 1$, $u'(x) = 2x$ : $f'(x) = \\frac{u'}{u} = \\frac{2x}{x^2+1}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La dérivée de $\\ln|2x - 1|$",
          "stepTheme": "La dérivée de $\\ln|2x - 1|$",
          "stepBadge": "La dérivée de $\\ln|2x - 1|$",
          "paragraphText": "• Soit $f(x) = \\ln|2x - 1|$. On a $2x - 1 \\neq 0$ pour $x \\neq \\frac{1}{2}$.\nLa fonction $f$ est dérivable sur $]-\\infty ; \\frac{1}{2}[$ et sur $]\\frac{1}{2} ; +\\infty[$ et, pour tout $x \\in \\mathbb{R} \\setminus \\{\\frac{1}{2}\\}$, $f'(x) = \\frac{2}{2x-1}$.\nLa valeur absolue ne change pas la formule : $(\\ln|u|)' = \\frac{u'}{u}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p05_q3",
            "type": "mcq",
            "prompt": "Sur quel ensemble $f(x) = \\ln|2x - 1|$ est-elle dérivable, et que vaut $f'(x)$ ?",
            "options": [
              "Sur $\\mathbb{R} \\setminus \\{\\frac{1}{2}\\}$ et $f'(x) = \\frac{2}{2x-1}$",
              "Sur $\\mathbb{R}$ et $f'(x) = \\frac{2}{2x-1}$",
              "Sur $\\mathbb{R} \\setminus \\{\\frac{1}{2}\\}$ et $f'(x) = \\frac{1}{2x-1}$",
              "Sur $]0 ; +\\infty[$ et $f'(x) = \\frac{2}{2x-1}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2x - 1$ s'annule en $\\frac{1}{2}$ : $f$ est dérivable sur $\\mathbb{R} \\setminus \\{\\frac{1}{2}\\}$ et $f'(x) = \\frac{2}{2x-1}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Une primitive de $\\frac{u'}{u}$",
          "stepTheme": "Une primitive de $\\frac{u'}{u}$",
          "stepBadge": "Une primitive de $\\frac{u'}{u}$",
          "paragraphText": "• Si $u$ est dérivable sur $I$ et ne s'annule pas sur $I$, alors une primitive sur $I$ de $\\frac{u'}{u}$ est $\\ln|u|$.\nExemples : une primitive sur $]-\\infty ; 0[$ de $x \\mapsto \\frac{1}{x}$ est $x \\mapsto \\ln|x| = \\ln(-x)$ (car $x < 0$).\nUne primitive sur $\\mathbb{R}$ de $f(x) = \\frac{4x^3}{x^4+2}$ est $F(x) = \\ln(x^4+2)$ (car $x^4 + 2 > 0$).",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p05_q4",
            "type": "mcq",
            "prompt": "Quelle est une primitive sur $\\mathbb{R}$ de $f(x) = \\frac{4x^3}{x^4+2}$ ?",
            "options": [
              "$\\ln(x^4+2)$",
              "$\\frac{1}{x^4+2}$",
              "$4\\ln(x^4+2)$",
              "$\\ln(4x^3)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $u(x) = x^4 + 2$, $u'(x) = 4x^3$ : $f = \\frac{u'}{u}$, une primitive est $\\ln|u| = \\ln(x^4+2)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $2x - 7 + \\frac{4}{x-9}$",
          "stepTheme": "Une primitive de $2x - 7 + \\frac{4}{x-9}$",
          "stepBadge": "Une primitive de $2x - 7 + \\frac{4}{x-9}$",
          "paragraphText": "• Soit $f(x) = 2x - 7 + \\frac{4}{x-9}$ sur $K = ]9 ; +\\infty[$.\nOn primitive terme à terme : $2x \\mapsto x^2$ ; $-7 \\mapsto -7x$ ; $\\frac{4}{x-9} \\mapsto 4\\ln|x - 9|$ (forme $\\frac{u'}{u}$ avec $u(x) = x - 9$).\nDonc $f$ admet pour primitive $F(x) = x^2 - 7x + 4\\ln|x - 9|$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p05_q5",
            "type": "mcq",
            "prompt": "Quelle est une primitive sur $]9 ; +\\infty[$ de $f(x) = 2x - 7 + \\frac{4}{x-9}$ ?",
            "options": [
              "$x^2 - 7x + 4\\ln|x - 9|$",
              "$x^2 - 7x + \\ln|x - 9|$",
              "$x^2 + 7x + 4\\ln|x - 9|$",
              "$2x^2 - 7x + 4\\ln|x - 9|$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Terme à terme : $2x \\mapsto x^2$, $-7 \\mapsto -7x$, $\\frac{4}{x-9} \\mapsto 4\\ln|x-9|$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'étude de $f(x) = \\frac{1 + \\ln x}{1 - \\ln x}$",
          "stepTheme": "L'étude de $f(x) = \\frac{1 + \\ln x}{1 - \\ln x}$",
          "stepBadge": "L'étude de $f(x) = \\frac{1 + \\ln x}{1 - \\ln x}$",
          "paragraphText": "• Soit $f(x) = \\frac{1 + \\ln x}{1 - \\ln x}$ sur $]0 ; +\\infty[$. $f$ est dérivable sur $]0 ; +\\infty[$ et $f'(x) = \\frac{2}{x(1 - \\ln x)^2}$.\nComme $f'(x) > 0$ pour tout $x \\in ]0 ; +\\infty[$, $f$ est strictement croissante sur $]0 ; e[$ et sur $]e ; +\\infty[$.\nLe tableau de variation : $f$ croît de $-1$ à $+\\infty$ sur $]0 ; e[$, puis de $-\\infty$ à $-1$ sur $]e ; +\\infty[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p05_q6",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de $f(x) = \\frac{1 + \\ln x}{1 - \\ln x}$ sur $]0 ; +\\infty[$ ?",
            "options": [
              "$\\frac{2}{x(1 - \\ln x)^2}$",
              "$\\frac{1}{x(1 - \\ln x)^2}$",
              "$\\frac{2}{x(1 + \\ln x)^2}$",
              "$\\frac{2}{(1 - \\ln x)^2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par la dérivée d'un quotient : $f'(x) = \\frac{\\frac{1}{x}(1 - \\ln x) + \\frac{1}{x}(1 + \\ln x)}{(1 - \\ln x)^2} = \\frac{2}{x(1 - \\ln x)^2}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p05_q1",
          "type": "mcq",
          "prompt": "Si $u$ est dérivable et strictement positive sur $I$, que vaut $(\\ln u)'$ ?",
          "options": [
            "$\\frac{u'}{u}$",
            "$\\frac{u}{u'}$",
            "$u'\\ln u$",
            "$\\frac{1}{u}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(\\ln u)' = \\frac{u'}{u}$ : on dérive $u$ puis on divise par $u$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p05_q2",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de $f(x) = \\ln(x^2 + 1)$ sur $\\mathbb{R}$ ?",
          "options": [
            "$\\frac{2x}{x^2+1}$",
            "$\\frac{1}{x^2+1}$",
            "$\\frac{2}{x^2+1}$",
            "$\\frac{2x}{x^2-1}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $u(x) = x^2 + 1$, $u'(x) = 2x$ : $f'(x) = \\frac{u'}{u} = \\frac{2x}{x^2+1}$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p05_q3",
          "type": "mcq",
          "prompt": "Sur quel ensemble $f(x) = \\ln|2x - 1|$ est-elle dérivable, et que vaut $f'(x)$ ?",
          "options": [
            "Sur $\\mathbb{R} \\setminus \\{\\frac{1}{2}\\}$ et $f'(x) = \\frac{2}{2x-1}$",
            "Sur $\\mathbb{R}$ et $f'(x) = \\frac{2}{2x-1}$",
            "Sur $\\mathbb{R} \\setminus \\{\\frac{1}{2}\\}$ et $f'(x) = \\frac{1}{2x-1}$",
            "Sur $]0 ; +\\infty[$ et $f'(x) = \\frac{2}{2x-1}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2x - 1$ s'annule en $\\frac{1}{2}$ : $f$ est dérivable sur $\\mathbb{R} \\setminus \\{\\frac{1}{2}\\}$ et $f'(x) = \\frac{2}{2x-1}$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p05_q4",
          "type": "mcq",
          "prompt": "Quelle est une primitive sur $\\mathbb{R}$ de $f(x) = \\frac{4x^3}{x^4+2}$ ?",
          "options": [
            "$\\ln(x^4+2)$",
            "$\\frac{1}{x^4+2}$",
            "$4\\ln(x^4+2)$",
            "$\\ln(4x^3)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $u(x) = x^4 + 2$, $u'(x) = 4x^3$ : $f = \\frac{u'}{u}$, une primitive est $\\ln|u| = \\ln(x^4+2)$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p05_q5",
          "type": "mcq",
          "prompt": "Quelle est une primitive sur $]9 ; +\\infty[$ de $f(x) = 2x - 7 + \\frac{4}{x-9}$ ?",
          "options": [
            "$x^2 - 7x + 4\\ln|x - 9|$",
            "$x^2 - 7x + \\ln|x - 9|$",
            "$x^2 + 7x + 4\\ln|x - 9|$",
            "$2x^2 - 7x + 4\\ln|x - 9|$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Terme à terme : $2x \\mapsto x^2$, $-7 \\mapsto -7x$, $\\frac{4}{x-9} \\mapsto 4\\ln|x-9|$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p05_q6",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de $f(x) = \\frac{1 + \\ln x}{1 - \\ln x}$ sur $]0 ; +\\infty[$ ?",
          "options": [
            "$\\frac{2}{x(1 - \\ln x)^2}$",
            "$\\frac{1}{x(1 - \\ln x)^2}$",
            "$\\frac{2}{x(1 + \\ln x)^2}$",
            "$\\frac{2}{(1 - \\ln x)^2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par la dérivée d'un quotient : $f'(x) = \\frac{\\frac{1}{x}(1 - \\ln x) + \\frac{1}{x}(1 + \\ln x)}{(1 - \\ln x)^2} = \\frac{2}{x(1 - \\ln x)^2}$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l05_logarithmes_p06",
      "order": 6,
      "title": "Logarithme de base a et applications",
      "summary": "log_a(x) = ln x / ln a ; le logarithme résout les inéquations exponentielles et modélise l'évolution des recettes.",
      "conceptExplanation": "Définition : on appelle fonction logarithme de base $a$ (avec $a > 0$ et $a \\neq 1$), notée $\\log_a$, la fonction définie sur $]0 ; +\\infty[$ par $\\log_a(x) = \\frac{\\ln(x)}{\\ln(a)}$.\nRemarques :\n- La fonction logarithme décimal, notée $\\log$, est définie sur $]0 ; +\\infty[$ par $\\log x = \\frac{\\ln x}{\\ln 10}$.\n- Pour tout entier relatif $n$, $\\log(10^n) = n$.\n- $\\log_a(a) = 1$ ; $\\log(1) = 0$, $\\log(10) = 1$.\nApplication 1 (dépistage de la fièvre typhoïde) : après avoir examiné $n$ élèves, la probabilité d'avoir au moins un élève non atteint est $1 - (0{,}325)^n$. On cherche le nombre minimum $n$ tel que cette probabilité soit supérieure à $98\\%$ : $1 - (0{,}325)^n > 0{,}98$ donne $(0{,}325)^n < 0{,}02$, soit $n\\ln(0{,}325) < \\ln(0{,}02)$ ; comme $\\ln(0{,}325) < 0$, on obtient $n > \\frac{\\ln(0{,}02)}{\\ln(0{,}325)} \\approx 3{,}48$ : le nombre minimum est $n = 4$.\nApplication 2 (recettes de l'entreprise) : pour $x \\geq 1$, $r(x) = 3x - x\\ln\\left(\\frac{x}{2}\\right)$ (en millions de FCFA), où $x$ est le nombre de mois d'existence. On a $r'(x) = 2 - \\ln\\left(\\frac{x}{2}\\right)$ ; $r'(x) > 0 \\iff x < 2e^2$. Donc $r$ est strictement croissante sur $[1 ; 2e^2[$ et strictement décroissante sur $]2e^2 ; +\\infty[$. Comme $14 < 2e^2 < 15$, l'entreprise enregistrera une baisse de ses recettes à partir de son $15$ème mois d'existence.",
      "keyRule": "log_a(x) = ln x / ln a. Le logarithme permet de résoudre les inéquations du type a^n < b.",
      "formulas": [
        {
          "name": "Logarithme de base a",
          "formula": "\\log_a(x) = \\frac{\\ln x}{\\ln a} \\quad (a > 0,\\ a \\neq 1,\\ x > 0)",
          "note": "Le logarithme décimal est log x = ln x / ln 10."
        }
      ],
      "workedExample": {
        "title": "Le mois de la baisse des recettes",
        "statement": "Les recettes mensuelles d'une entreprise (en millions de FCFA) sont modélisées par $r(x) = 3x - x\\ln\\left(\\frac{x}{2}\\right)$ pour $x \\geq 1$ (nombre de mois d'existence). À partir de quel mois les recettes baissent-elles ?",
        "methodSteps": [
          "On étudie le sens de variation de $r$ : $r'(x) = 2 - \\ln\\left(\\frac{x}{2}\\right)$.",
          "$r'(x) > 0 \\iff \\ln\\left(\\frac{x}{2}\\right) < 2 \\iff x < 2e^2$.",
          "Donc $r$ est croissante sur $[1 ; 2e^2[$ et décroissante sur $]2e^2 ; +\\infty[$.",
          "Comme $14 < 2e^2 < 15$, la baisse commence à partir du $15$ème mois."
        ],
        "conclusion": "L'entreprise enregistrera une baisse de ses recettes à partir de son 15ème mois d'existence."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le logarithme de base a",
          "stepTheme": "Le logarithme de base a",
          "stepBadge": "Le logarithme de base a",
          "paragraphText": "• On appelle fonction logarithme de base $a$ (avec $a > 0$ et $a \\neq 1$), notée $\\log_a$, la fonction définie sur $]0 ; +\\infty[$ par $\\log_a(x) = \\frac{\\ln(x)}{\\ln(a)}$.\nLa fonction logarithme décimal, notée $\\log$, est définie par $\\log x = \\frac{\\ln x}{\\ln 10}$.\nOn a $\\log_a(a) = 1$, $\\log(1) = 0$ et $\\log(10) = 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p06_q1",
            "type": "mcq",
            "prompt": "Comment est définie la fonction logarithme de base $a$ (avec $a > 0$ et $a \\neq 1$) ?",
            "options": [
              "$\\log_a(x) = \\frac{\\ln x}{\\ln a}$",
              "$\\log_a(x) = \\ln a \\times \\ln x$",
              "$\\log_a(x) = \\frac{\\ln a}{\\ln x}$",
              "$\\log_a(x) = \\ln x - \\ln a$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, $\\log_a(x) = \\frac{\\ln x}{\\ln a}$ pour $x > 0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le logarithme décimal",
          "stepTheme": "Le logarithme décimal",
          "stepBadge": "Le logarithme décimal",
          "paragraphText": "• Le logarithme décimal est $\\log x = \\frac{\\ln x}{\\ln 10}$.\nPour tout entier relatif $n$, $\\log(10^n) = n$ : par exemple $\\log(1000) = 3$ et $\\log(0{,}01) = -2$.\nOn a aussi $\\log(1) = 0$ et $\\log(10) = 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p06_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\log(1000)$ ?",
            "options": [
              "$3$",
              "$10$",
              "$1000$",
              "$\\ln 1000$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$1000 = 10^3$ donc $\\log(1000) = 3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Résoudre une inéquation exponentielle avec ln",
          "stepTheme": "Résoudre une inéquation exponentielle avec ln",
          "stepBadge": "Résoudre une inéquation exponentielle avec ln",
          "paragraphText": "• Situation : la probabilité d'avoir au moins un élève non atteint de la fièvre typhoïde après avoir examiné $n$ élèves est $1 - (0{,}325)^n$.\nOn cherche le nombre minimum $n$ tel que cette probabilité soit supérieure à $98\\%$ : $1 - (0{,}325)^n > 0{,}98$ donne $(0{,}325)^n < 0{,}02$.\nEn prenant le logarithme : $n\\ln(0{,}325) < \\ln(0{,}02)$ ; comme $\\ln(0{,}325) < 0$, on divise en changeant le sens : $n > \\frac{\\ln(0{,}02)}{\\ln(0{,}325)} \\approx 3{,}48$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p06_q3",
            "type": "mcq",
            "prompt": "On veut $1 - (0{,}325)^n > 0{,}98$. Quel est le nombre minimum d'élèves $n$ à examiner ?",
            "options": [
              "$3$",
              "$4$",
              "$5$",
              "$10$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(0{,}325)^n < 0{,}02$ donne $n > \\frac{\\ln(0{,}02)}{\\ln(0{,}325)} \\approx 3{,}48$ : le plus petit entier est $n = 4$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La dérivée des recettes $r$",
          "stepTheme": "La dérivée des recettes $r$",
          "stepBadge": "La dérivée des recettes $r$",
          "paragraphText": "• Les recettes de l'entreprise sont modélisées par $r(x) = 3x - x\\ln\\left(\\frac{x}{2}\\right)$ pour $x \\geq 1$.\nOn calcule $r'(x) = 3 - \\left[\\ln\\left(\\frac{x}{2}\\right) + 1\\right] = 2 - \\ln\\left(\\frac{x}{2}\\right)$.\nOn a $r(1) = 3 - \\ln\\left(\\frac{1}{2}\\right) = 3 + \\ln 2$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p06_q4",
            "type": "mcq",
            "prompt": "Pour $r(x) = 3x - x\\ln\\left(\\frac{x}{2}\\right)$, que vaut $r'(x)$ ?",
            "options": [
              "$2 - \\ln\\left(\\frac{x}{2}\\right)$",
              "$3 - \\ln\\left(\\frac{x}{2}\\right)$",
              "$2 - \\frac{1}{2}\\ln x$",
              "$-\\ln\\left(\\frac{x}{2}\\right)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée de $x\\ln\\left(\\frac{x}{2}\\right)$ est $\\ln\\left(\\frac{x}{2}\\right) + 1$ : $r'(x) = 3 - \\ln\\left(\\frac{x}{2}\\right) - 1 = 2 - \\ln\\left(\\frac{x}{2}\\right)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le sens de variation des recettes",
          "stepTheme": "Le sens de variation des recettes",
          "stepBadge": "Le sens de variation des recettes",
          "paragraphText": "• $r'(x) > 0 \\iff \\ln\\left(\\frac{x}{2}\\right) < 2 \\iff \\frac{x}{2} < e^2 \\iff x < 2e^2$.\nDonc $r$ est strictement croissante sur $[1 ; 2e^2[$ et strictement décroissante sur $]2e^2 ; +\\infty[$.\nComme $14 < 2e^2 < 15$ (car $2e^2 \\approx 14{,}78$), la baisse des recettes commence à partir du $15$ème mois.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p06_q5",
            "type": "mcq",
            "prompt": "À partir de quel mois l'entreprise enregistre-t-elle une baisse de ses recettes ?",
            "options": [
              "À partir du $14$ème mois",
              "À partir du $15$ème mois",
              "À partir du $16$ème mois",
              "À partir du $2$ème mois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$r$ croît jusqu'à $x = 2e^2 \\approx 14{,}78$ puis décroît : la baisse commence à partir du $15$ème mois."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Diviser par un logarithme négatif change le sens",
          "stepTheme": "Diviser par un logarithme négatif change le sens",
          "stepBadge": "Diviser par un logarithme négatif change le sens",
          "paragraphText": "• Dans la situation du dépistage, on passe de $n\\ln(0{,}325) < \\ln(0{,}02)$ à $n > \\frac{\\ln(0{,}02)}{\\ln(0{,}325)}$ : le sens de l'inégalité change car $\\ln(0{,}325) < 0$.\nPiège : quand on divise une inégalité par un nombre négatif, on inverse le sens — et $\\ln$ d'un nombre entre $0$ et $1$ est négatif.\nVérification : $(0{,}325)^3 \\approx 0{,}034 > 0{,}02$ mais $(0{,}325)^4 \\approx 0{,}011 < 0{,}02$ : il faut bien $4$ élèves.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l05_logarithmes_p06_q6",
            "type": "mcq",
            "prompt": "Pourquoi l'inégalité $n\\ln(0{,}325) < \\ln(0{,}02)$ devient-elle $n > \\frac{\\ln(0{,}02)}{\\ln(0{,}325)}$ ?",
            "options": [
              "Parce que $\\ln(0{,}325) < 0$ : diviser par un nombre négatif inverse le sens",
              "Parce que $\\ln$ est croissante",
              "Parce que $n$ est un entier",
              "Parce que $0{,}02 < 0{,}325$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On divise par $\\ln(0{,}325)$, qui est négatif (car $0 < 0{,}325 < 1$) : le sens de l'inégalité s'inverse."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p06_q1",
          "type": "mcq",
          "prompt": "Comment est définie la fonction logarithme de base $a$ (avec $a > 0$ et $a \\neq 1$) ?",
          "options": [
            "$\\log_a(x) = \\frac{\\ln x}{\\ln a}$",
            "$\\log_a(x) = \\ln a \\times \\ln x$",
            "$\\log_a(x) = \\frac{\\ln a}{\\ln x}$",
            "$\\log_a(x) = \\ln x - \\ln a$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, $\\log_a(x) = \\frac{\\ln x}{\\ln a}$ pour $x > 0$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p06_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\log(1000)$ ?",
          "options": [
            "$3$",
            "$10$",
            "$1000$",
            "$\\ln 1000$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$1000 = 10^3$ donc $\\log(1000) = 3$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p06_q3",
          "type": "mcq",
          "prompt": "On veut $1 - (0{,}325)^n > 0{,}98$. Quel est le nombre minimum d'élèves $n$ à examiner ?",
          "options": [
            "$3$",
            "$4$",
            "$5$",
            "$10$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(0{,}325)^n < 0{,}02$ donne $n > \\frac{\\ln(0{,}02)}{\\ln(0{,}325)} \\approx 3{,}48$ : le plus petit entier est $n = 4$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p06_q4",
          "type": "mcq",
          "prompt": "Pour $r(x) = 3x - x\\ln\\left(\\frac{x}{2}\\right)$, que vaut $r'(x)$ ?",
          "options": [
            "$2 - \\ln\\left(\\frac{x}{2}\\right)$",
            "$3 - \\ln\\left(\\frac{x}{2}\\right)$",
            "$2 - \\frac{1}{2}\\ln x$",
            "$-\\ln\\left(\\frac{x}{2}\\right)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée de $x\\ln\\left(\\frac{x}{2}\\right)$ est $\\ln\\left(\\frac{x}{2}\\right) + 1$ : $r'(x) = 3 - \\ln\\left(\\frac{x}{2}\\right) - 1 = 2 - \\ln\\left(\\frac{x}{2}\\right)$."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p06_q5",
          "type": "mcq",
          "prompt": "À partir de quel mois l'entreprise enregistre-t-elle une baisse de ses recettes ?",
          "options": [
            "À partir du $14$ème mois",
            "À partir du $15$ème mois",
            "À partir du $16$ème mois",
            "À partir du $2$ème mois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$r$ croît jusqu'à $x = 2e^2 \\approx 14{,}78$ puis décroît : la baisse commence à partir du $15$ème mois."
        },
        {
          "id": "terminale_c_maths_numerique_l05_logarithmes_p06_q6",
          "type": "mcq",
          "prompt": "Pourquoi l'inégalité $n\\ln(0{,}325) < \\ln(0{,}02)$ devient-elle $n > \\frac{\\ln(0{,}02)}{\\ln(0{,}325)}$ ?",
          "options": [
            "Parce que $\\ln(0{,}325) < 0$ : diviser par un nombre négatif inverse le sens",
            "Parce que $\\ln$ est croissante",
            "Parce que $n$ est un entier",
            "Parce que $0{,}02 < 0{,}325$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On divise par $\\ln(0{,}325)$, qui est négatif (car $0 < 0{,}325 < 1$) : le sens de l'inégalité s'inverse."
        }
      ]
    }
  ]
};
