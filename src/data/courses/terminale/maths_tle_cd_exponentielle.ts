import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 07 : Fonction exponentielle et fonction puissance » (format v2 : mini-leçons de 5 à 8 étapes). Contenu vérifié : dans le livre 2025-2026, cette leçon est numérotée « Leçon 6 ».
// Source : https://lyc.ecole-ci.org/course/view.php?id=2850
export const MATHS_TLE_CD_L07_EXPONENTIELLE: CurriculumChapter = {
  "id": "terminale_c_maths_numerique_l07_exponentielle",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 7,
  "title": "Leçon 7 : Fonction exponentielle et fonction puissance",
  "summary": "Fonction exponentielle népérienne (réciproque de ln), équations et inéquations, limites et étude, dérivées et primitives de e^u, exponentielle de base a, fonctions puissances et croissances comparées.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2850",
  "points": [
    {
      "id": "terminale_c_maths_numerique_l07_exponentielle_p01",
      "order": 1,
      "title": "Définition et propriétés algébriques de exp",
      "summary": "exp est la réciproque de ln : e^x = y ⟺ x = ln y ; elle transforme les sommes en produits.",
      "conceptExplanation": "On appelle fonction exponentielle népérienne, notée $\\exp$, la bijection réciproque de la fonction logarithme népérien.\nPour tout nombre réel $x$, le nombre $\\exp(x)$ se note également $e^x$ : $\\exp(x) = e^x$.\nConséquences :\n- La fonction exponentielle est définie sur $\\mathbb{R}$.\n- Pour tout réel $x$ et tout réel strictement positif $y$ : $e^x = y \\iff x = \\ln y$.\n- Pour tout réel $x$, $e^x > 0$.\n- $e^0 = 1$ ; $e^1 = e$.\n- Pour tout $x \\in ]0 ; +\\infty[$, $e^{\\ln x} = x$.\n- Pour tout réel $y$, $\\ln(e^y) = y$.\n- La fonction exponentielle est strictement croissante sur $\\mathbb{R}$.\nPropriétés algébriques : pour tous réels $a$ et $b$ et tout rationnel $r$ : $e^a \\times e^b = e^{a+b}$ ; $e^{-b} = \\frac{1}{e^b}$ ; $\\frac{e^a}{e^b} = e^{a-b}$ ; $(e^a)^r = e^{a \\times r}$.",
      "keyRule": "e^x = y ⟺ x = ln y. e^{a+b} = e^a·e^b ; e^{a−b} = e^a/e^b ; (e^a)^r = e^{ar}. e^x > 0 toujours.",
      "formulas": [
        {
          "name": "Exponentielle et logarithme réciproques",
          "formula": "e^x = y \\iff x = \\ln y,\\quad e^{\\ln x} = x,\\quad \\ln(e^y) = y",
          "note": "exp est la bijection réciproque de ln."
        },
        {
          "name": "Propriétés algébriques",
          "formula": "e^a \\times e^b = e^{a+b},\\quad \\frac{e^a}{e^b} = e^{a-b},\\quad (e^a)^r = e^{ar}",
          "note": "Pour a, b réels et r rationnel."
        }
      ],
      "workedExample": {
        "title": "Simplifier $e^{x + \\ln 3}$",
        "statement": "Écris plus simplement $e^{x + \\ln 3}$ et $\\frac{e^{2x}}{e^x}$.",
        "methodSteps": [
          "$e^{x + \\ln 3} = e^x \\times e^{\\ln 3} = e^x \\times 3 = 3e^x$.",
          "$\\frac{e^{2x}}{e^x} = e^{2x - x} = e^x$."
        ],
        "conclusion": "$e^{x + \\ln 3} = 3e^x$ et $\\frac{e^{2x}}{e^x} = e^x$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de exp",
          "stepTheme": "La définition de exp",
          "stepBadge": "La définition de exp",
          "paragraphText": "• On appelle fonction exponentielle népérienne, notée $\\exp$, la bijection réciproque de la fonction logarithme népérien.\nPour tout réel $x$, $\\exp(x)$ se note $e^x$.\nLa fonction exponentielle est définie sur $\\mathbb{R}$ et prend ses valeurs dans $]0 ; +\\infty[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p01_q1",
            "type": "mcq",
            "prompt": "Comment est définie la fonction exponentielle népérienne ?",
            "options": [
              "C'est la bijection réciproque de la fonction logarithme népérien",
              "C'est la dérivée de la fonction logarithme népérien",
              "C'est la primitive de $x \\mapsto \\frac{1}{x}$ qui s'annule en $1$",
              "C'est la fonction $x \\mapsto \\ln x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, $\\exp$ est la bijection réciproque de $\\ln$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les premières conséquences",
          "stepTheme": "Les premières conséquences",
          "stepBadge": "Les premières conséquences",
          "paragraphText": "• Pour tout réel $x$, $e^x > 0$ : l'exponentielle ne s'annule jamais et ne prend jamais de valeur négative.\n• $e^0 = 1$ et $e^1 = e$.\n• Pour $x > 0$, $e^{\\ln x} = x$ ; pour tout réel $y$, $\\ln(e^y) = y$.\n• $e^x = y \\iff x = \\ln y$ (pour $y > 0$).",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p01_q2",
            "type": "mcq",
            "prompt": "Que valent $e^0$ et $e^1$ ?",
            "options": [
              "$e^0 = 0$ et $e^1 = 1$",
              "$e^0 = 1$ et $e^1 = e$",
              "$e^0 = 1$ et $e^1 = 1$",
              "$e^0 = e$ et $e^1 = 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$e^0 = 1$ et $e^1 = e$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les propriétés algébriques",
          "stepTheme": "Les propriétés algébriques",
          "stepBadge": "Les propriétés algébriques",
          "paragraphText": "• Pour tous réels $a$ et $b$ et tout rationnel $r$ : $e^a \\times e^b = e^{a+b}$ ; $e^{-b} = \\frac{1}{e^b}$ ; $\\frac{e^a}{e^b} = e^{a-b}$ ; $(e^a)^r = e^{a \\times r}$.\nL'exponentielle transforme les sommes en produits : c'est le miroir des propriétés du logarithme.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p01_q3",
            "type": "mcq",
            "prompt": "Que vaut $e^a \\times e^b$ ?",
            "options": [
              "$e^{a+b}$",
              "$e^{a-b}$",
              "$e^{ab}$",
              "$e^a + e^b$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$e^a \\times e^b = e^{a+b}$ : l'exponentielle transforme les sommes en produits."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Simplifier avec les propriétés",
          "stepTheme": "Simplifier avec les propriétés",
          "stepBadge": "Simplifier avec les propriétés",
          "paragraphText": "• $e^{x + \\ln 3} = e^x \\times e^{\\ln 3} = 3e^x$.\n• $\\frac{e^{2x}}{e^x} = e^{2x - x} = e^x$.\n• $\\ln(\\sqrt{e}) = \\ln(e^{\\frac{1}{2}}) = \\frac{1}{2}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut $e^{x + \\ln 3}$ ?",
            "options": [
              "$3e^x$",
              "$e^{3x}$",
              "$e^x + 3$",
              "$3 + e^x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$e^{x + \\ln 3} = e^x \\times e^{\\ln 3} = e^x \\times 3 = 3e^x$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "exp est strictement croissante",
          "stepTheme": "exp est strictement croissante",
          "stepBadge": "exp est strictement croissante",
          "paragraphText": "• La fonction exponentielle est strictement croissante sur $\\mathbb{R}$.\nPour tous réels $a$ et $b$ : $e^a < e^b \\iff a < b$ et $e^a = e^b \\iff a = b$.\nC'est la réciproque d'une fonction strictement croissante : elle conserve l'ordre.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p01_q5",
            "type": "mcq",
            "prompt": "Pour tous réels $a$ et $b$, à quoi équivaut $e^a < e^b$ ?",
            "options": [
              "$a < b$",
              "$a > b$",
              "$a = b$",
              "$ab < 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme $\\exp$ est strictement croissante, $e^a < e^b \\iff a < b$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "$e^x$ ne s'annule jamais",
          "stepTheme": "$e^x$ ne s'annule jamais",
          "stepBadge": "$e^x$ ne s'annule jamais",
          "paragraphText": "• Pour tout réel $x$, $e^x > 0$ : l'équation $e^x = 0$ n'a pas de solution.\nPiège : dans un produit comme $(e^x - 2)(e^{-x} + 1) = 0$, le facteur $e^{-x} + 1$ ne s'annule jamais (il est strictement positif) : seule $e^x = 2$ donne une solution, $x = \\ln 2$.\nDe même, $2 - e^x = 0$ donne $x = \\ln 2$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p01_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $(e^x - 2)(e^{-x} + 1) = 0$ ?",
            "options": [
              "$\\{\\ln 2\\}$",
              "$\\{\\ln 2 ; -\\ln 2\\}$",
              "$\\{2\\}$",
              "L'ensemble vide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$e^{-x} + 1 > 0$ pour tout $x$ : seul $e^x - 2 = 0$ donne une solution, $x = \\ln 2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p01_q1",
          "type": "mcq",
          "prompt": "Comment est définie la fonction exponentielle népérienne ?",
          "options": [
            "C'est la bijection réciproque de la fonction logarithme népérien",
            "C'est la dérivée de la fonction logarithme népérien",
            "C'est la primitive de $x \\mapsto \\frac{1}{x}$ qui s'annule en $1$",
            "C'est la fonction $x \\mapsto \\ln x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, $\\exp$ est la bijection réciproque de $\\ln$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p01_q2",
          "type": "mcq",
          "prompt": "Que valent $e^0$ et $e^1$ ?",
          "options": [
            "$e^0 = 0$ et $e^1 = 1$",
            "$e^0 = 1$ et $e^1 = e$",
            "$e^0 = 1$ et $e^1 = 1$",
            "$e^0 = e$ et $e^1 = 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$e^0 = 1$ et $e^1 = e$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p01_q3",
          "type": "mcq",
          "prompt": "Que vaut $e^a \\times e^b$ ?",
          "options": [
            "$e^{a+b}$",
            "$e^{a-b}$",
            "$e^{ab}$",
            "$e^a + e^b$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$e^a \\times e^b = e^{a+b}$ : l'exponentielle transforme les sommes en produits."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut $e^{x + \\ln 3}$ ?",
          "options": [
            "$3e^x$",
            "$e^{3x}$",
            "$e^x + 3$",
            "$3 + e^x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$e^{x + \\ln 3} = e^x \\times e^{\\ln 3} = e^x \\times 3 = 3e^x$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p01_q5",
          "type": "mcq",
          "prompt": "Pour tous réels $a$ et $b$, à quoi équivaut $e^a < e^b$ ?",
          "options": [
            "$a < b$",
            "$a > b$",
            "$a = b$",
            "$ab < 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme $\\exp$ est strictement croissante, $e^a < e^b \\iff a < b$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p01_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $(e^x - 2)(e^{-x} + 1) = 0$ ?",
          "options": [
            "$\\{\\ln 2\\}$",
            "$\\{\\ln 2 ; -\\ln 2\\}$",
            "$\\{2\\}$",
            "L'ensemble vide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$e^{-x} + 1 > 0$ pour tout $x$ : seul $e^x - 2 = 0$ donne une solution, $x = \\ln 2$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l07_exponentielle_p02",
      "order": 2,
      "title": "Équations et inéquations avec exp",
      "summary": "On enlève les exp en comparant les exposants ; pour les équations en e^x, on pose X = e^x.",
      "conceptExplanation": "Propriété : pour tous réels $a$ et $b$, $e^a < e^b \\iff a < b$ et $e^a = e^b \\iff a = b$.\nMéthode pour les équations du type $e^{2x} + ae^x + b = 0$ : on pose $X = e^x$ (donc $X > 0$), on résout l'équation du second degré en $X$, puis on ne garde que les solutions strictement positives et on revient à $x = \\ln X$.",
      "keyRule": "e^a = e^b ⟺ a = b. Pour e^{2x} + a·e^x + b = 0 : poser X = e^x > 0.",
      "formulas": [
        {
          "name": "Équivalence fondamentale",
          "formula": "e^a = e^b \\iff a = b,\\quad e^a < e^b \\iff a < b",
          "note": "Pour tous réels a et b."
        }
      ],
      "workedExample": {
        "title": "Résoudre $e^{2x} + e^x - 6 = 0$",
        "statement": "Résous dans $\\mathbb{R}$ l'équation $e^{2x} + e^x - 6 = 0$.",
        "methodSteps": [
          "On pose $X = e^x$ : on a $X > 0$ et l'équation devient $X^2 + X - 6 = 0$.",
          "Le discriminant est $25$ : $X = \\frac{-1 - 5}{2} = -3$ ou $X = \\frac{-1 + 5}{2} = 2$.",
          "$X = -3$ est impossible car $X > 0$.",
          "$X = 2 \\iff e^x = 2 \\iff x = \\ln 2$."
        ],
        "conclusion": "$S_{\\mathbb{R}} = \\{\\ln 2\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La méthode : comparer les exposants",
          "stepTheme": "La méthode : comparer les exposants",
          "stepBadge": "La méthode : comparer les exposants",
          "paragraphText": "• Pour résoudre $e^{2x-1} = e^{x+5}$, on compare les exposants : $2x - 1 = x + 5$, donc $x = 6$.\nL'ensemble de validité est $\\mathbb{R}$ (l'exponentielle est définie partout) : $S_{\\mathbb{R}} = \\{6\\}$.\nDe même, $e^{3-x} = 1$ donne $3 - x = \\ln 1 = 0$, donc $x = 3$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p02_q1",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x-1} = e^{x+5}$ ?",
            "options": [
              "$\\{6\\}$",
              "$\\{4\\}$",
              "$\\{-6\\}$",
              "$\\{5\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$e^{2x-1} = e^{x+5} \\iff 2x - 1 = x + 5 \\iff x = 6$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $e^{x-2} = 5$",
          "stepTheme": "Résoudre $e^{x-2} = 5$",
          "stepBadge": "Résoudre $e^{x-2} = 5$",
          "paragraphText": "• $e^{x-2} = 5$ équivaut à $e^{x-2} = e^{\\ln 5}$, donc à $x - 2 = \\ln 5$.\nDonc $x = 2 + \\ln 5$ et $S_{\\mathbb{R}} = \\{2 + \\ln 5\\}$.\nMéthode : on écrit le second membre sous la forme $e^{\\ln(\\ldots)}$ puis on compare les exposants.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p02_q2",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{x-2} = 5$ ?",
            "options": [
              "$\\{2 + \\ln 5\\}$",
              "$\\{\\ln 5\\}$",
              "$\\{2\\ln 5\\}$",
              "$\\{5\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$e^{x-2} = 5 = e^{\\ln 5} \\iff x - 2 = \\ln 5 \\iff x = 2 + \\ln 5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Poser $X = e^x$",
          "stepTheme": "Poser $X = e^x$",
          "stepBadge": "Poser $X = e^x$",
          "paragraphText": "• Pour $e^{2x} + e^x - 6 = 0$, on pose $X = e^x$ (donc $X > 0$) : l'équation devient $X^2 + X - 6 = 0$.\nLes solutions sont $X = -3$ (impossible car $X > 0$) et $X = 2$.\n$X = 2 \\iff e^x = 2 \\iff x = \\ln 2$ : $S_{\\mathbb{R}} = \\{\\ln 2\\}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p02_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x} + e^x - 6 = 0$ ?",
            "options": [
              "$\\{\\ln 2\\}$",
              "$\\{\\ln 2 ; \\ln 3\\}$",
              "$\\{2\\}$",
              "$\\{\\ln 6\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En posant $X = e^x$, on obtient $X^2 + X - 6 = 0$ : $X = 2$ (la solution $X = -3$ est rejetée car $X > 0$), donc $x = \\ln 2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $e^{2x} - 3e^x + 2 = 0$",
          "stepTheme": "Résoudre $e^{2x} - 3e^x + 2 = 0$",
          "stepBadge": "Résoudre $e^{2x} - 3e^x + 2 = 0$",
          "paragraphText": "• On pose $X = e^x$ : l'équation devient $X^2 - 3X + 2 = 0$, soit $X = 1$ ou $X = 2$.\n$e^x = 1$ donne $x = 0$ et $e^x = 2$ donne $x = \\ln 2$.\nDonc $S_{\\mathbb{R}} = \\{0 ; \\ln 2\\}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p02_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x} - 3e^x + 2 = 0$ ?",
            "options": [
              "$\\{0 ; \\ln 2\\}$",
              "$\\{\\ln 2\\}$",
              "$\\{0\\}$",
              "$\\{1 ; 2\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En posant $X = e^x$, on obtient $X^2 - 3X + 2 = 0$ : $X = 1$ ou $X = 2$, donc $x = 0$ ou $x = \\ln 2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $e^{2x-1} < 8$",
          "stepTheme": "Résoudre $e^{2x-1} < 8$",
          "stepBadge": "Résoudre $e^{2x-1} < 8$",
          "paragraphText": "• $e^{2x-1} < 8$ équivaut à $\\ln(e^{2x-1}) < \\ln 8$, soit $2x - 1 < \\ln 8$.\nDonc $x < \\frac{1 + \\ln 8}{2}$ et $S_{\\mathbb{R}} = \\left]-\\infty ; \\frac{1 + \\ln 8}{2}\\right[$.\nOn prend le logarithme des deux membres : comme $\\ln$ est strictement croissante, le sens est conservé.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p02_q5",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x-1} < 8$ ?",
            "options": [
              "$\\left]-\\infty ; \\frac{1 + \\ln 8}{2}\\right[$",
              "$\\left]\\frac{1 + \\ln 8}{2} ; +\\infty\\right[$",
              "$\\left]-\\infty ; \\ln 8\\right[$",
              "$\\left]0 ; \\frac{1 + \\ln 8}{2}\\right[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$e^{2x-1} < 8 \\iff 2x - 1 < \\ln 8 \\iff x < \\frac{1 + \\ln 8}{2}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $e^{2x} - 5e^x + 6 \\geq 0$",
          "stepTheme": "Résoudre $e^{2x} - 5e^x + 6 \\geq 0$",
          "stepBadge": "Résoudre $e^{2x} - 5e^x + 6 \\geq 0$",
          "paragraphText": "• On pose $X = e^x$ : $X^2 - 5X + 6 \\geq 0$ avec $X > 0$. Le trinôme a pour racines $2$ et $3$ : il est positif sur $]-\\infty ; 2] \\cup [3 ; +\\infty[$.\nDonc $e^x \\leq 2$ ou $e^x \\geq 3$, soit $x \\leq \\ln 2$ ou $x \\geq \\ln 3$.\nDonc $S_{\\mathbb{R}} = ]-\\infty ; \\ln 2] \\cup [\\ln 3 ; +\\infty[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p02_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x} - 5e^x + 6 \\geq 0$ ?",
            "options": [
              "$]-\\infty ; \\ln 2] \\cup [\\ln 3 ; +\\infty[$",
              "$[\\ln 2 ; \\ln 3]$",
              "$]-\\infty ; \\ln 3]$",
              "$[\\ln 3 ; +\\infty[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En posant $X = e^x$, $X^2 - 5X + 6 \\geq 0$ donne $X \\leq 2$ ou $X \\geq 3$, soit $x \\leq \\ln 2$ ou $x \\geq \\ln 3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p02_q1",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x-1} = e^{x+5}$ ?",
          "options": [
            "$\\{6\\}$",
            "$\\{4\\}$",
            "$\\{-6\\}$",
            "$\\{5\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$e^{2x-1} = e^{x+5} \\iff 2x - 1 = x + 5 \\iff x = 6$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p02_q2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{x-2} = 5$ ?",
          "options": [
            "$\\{2 + \\ln 5\\}$",
            "$\\{\\ln 5\\}$",
            "$\\{2\\ln 5\\}$",
            "$\\{5\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$e^{x-2} = 5 = e^{\\ln 5} \\iff x - 2 = \\ln 5 \\iff x = 2 + \\ln 5$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p02_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x} + e^x - 6 = 0$ ?",
          "options": [
            "$\\{\\ln 2\\}$",
            "$\\{\\ln 2 ; \\ln 3\\}$",
            "$\\{2\\}$",
            "$\\{\\ln 6\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En posant $X = e^x$, on obtient $X^2 + X - 6 = 0$ : $X = 2$ (la solution $X = -3$ est rejetée car $X > 0$), donc $x = \\ln 2$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p02_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x} - 3e^x + 2 = 0$ ?",
          "options": [
            "$\\{0 ; \\ln 2\\}$",
            "$\\{\\ln 2\\}$",
            "$\\{0\\}$",
            "$\\{1 ; 2\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En posant $X = e^x$, on obtient $X^2 - 3X + 2 = 0$ : $X = 1$ ou $X = 2$, donc $x = 0$ ou $x = \\ln 2$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p02_q5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x-1} < 8$ ?",
          "options": [
            "$\\left]-\\infty ; \\frac{1 + \\ln 8}{2}\\right[$",
            "$\\left]\\frac{1 + \\ln 8}{2} ; +\\infty\\right[$",
            "$\\left]-\\infty ; \\ln 8\\right[$",
            "$\\left]0 ; \\frac{1 + \\ln 8}{2}\\right[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$e^{2x-1} < 8 \\iff 2x - 1 < \\ln 8 \\iff x < \\frac{1 + \\ln 8}{2}$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p02_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $e^{2x} - 5e^x + 6 \\geq 0$ ?",
          "options": [
            "$]-\\infty ; \\ln 2] \\cup [\\ln 3 ; +\\infty[$",
            "$[\\ln 2 ; \\ln 3]$",
            "$]-\\infty ; \\ln 3]$",
            "$[\\ln 3 ; +\\infty[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En posant $X = e^x$, $X^2 - 5X + 6 \\geq 0$ donne $X \\leq 2$ ou $X \\geq 3$, soit $x \\leq \\ln 2$ ou $x \\geq \\ln 3$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l07_exponentielle_p03",
      "order": 3,
      "title": "Limites et étude de la fonction exp",
      "summary": "exp tend vers 0 en −∞ et vers +∞ en +∞ ; sa dérivée est elle-même ; elle croît plus vite que toute puissance.",
      "conceptExplanation": "Limites de référence : $\\lim_{x \\to -\\infty} e^x = 0$ ; $\\lim_{x \\to +\\infty} e^x = +\\infty$ ; $\\lim_{x \\to -\\infty} xe^x = 0$ ; $\\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty$ ; $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$.\nDérivée : la fonction exponentielle népérienne est dérivable sur $\\mathbb{R}$ et sa fonction dérivée est $x \\mapsto e^x$.\nTableau de variation : la fonction exponentielle est strictement croissante sur $\\mathbb{R}$, de $0$ (en $-\\infty$) à $+\\infty$.",
      "keyRule": "e^x → 0 en −∞ et → +∞ en +∞. (e^x)' = e^x. e^x/x → +∞ ; x·e^x → 0 en −∞.",
      "formulas": [
        {
          "name": "Limites de référence de exp",
          "formula": "\\lim_{x \\to -\\infty} e^x = 0,\\quad \\lim_{x \\to +\\infty} e^x = +\\infty,\\quad \\lim_{x \\to -\\infty} xe^x = 0,\\quad \\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty",
          "note": "exp croît plus vite que toute puissance de x."
        },
        {
          "name": "Dérivée de exp",
          "formula": "(e^x)' = e^x",
          "note": "exp est sa propre dérivée."
        }
      ],
      "workedExample": {
        "title": "La limite de $(x + 1)e^x$ en $-\\infty$",
        "statement": "Calcule $\\lim_{x \\to -\\infty} (x + 1)e^x$.",
        "methodSteps": [
          "On développe : $(x + 1)e^x = xe^x + e^x$.",
          "Or $\\lim_{x \\to -\\infty} xe^x = 0$ et $\\lim_{x \\to -\\infty} e^x = 0$.",
          "Donc $\\lim_{x \\to -\\infty} (x + 1)e^x = 0$."
        ],
        "conclusion": "La limite est $0$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les limites aux bornes",
          "stepTheme": "Les limites aux bornes",
          "stepBadge": "Les limites aux bornes",
          "paragraphText": "• $\\lim_{x \\to -\\infty} e^x = 0$ et $\\lim_{x \\to +\\infty} e^x = +\\infty$.\nLa courbe de $\\exp$ a l'axe des abscisses pour asymptote horizontale en $-\\infty$.\nLa fonction exponentielle est strictement croissante sur $\\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p03_q1",
            "type": "mcq",
            "prompt": "Que valent $\\lim_{x \\to -\\infty} e^x$ et $\\lim_{x \\to +\\infty} e^x$ ?",
            "options": [
              "$0$ et $+\\infty$",
              "$+\\infty$ et $0$",
              "$1$ et $+\\infty$",
              "$0$ et $1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$e^x \\to 0$ quand $x \\to -\\infty$ et $e^x \\to +\\infty$ quand $x \\to +\\infty$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La dérivée de exp",
          "stepTheme": "La dérivée de exp",
          "stepBadge": "La dérivée de exp",
          "paragraphText": "• La fonction exponentielle népérienne est dérivable sur $\\mathbb{R}$ et sa fonction dérivée est $x \\mapsto e^x$.\n$\\exp$ est sa propre dérivée : c'est la seule fonction (à une constante multiplicative près) qui vérifie $f' = f$ avec $f(0) = 1$.\nComme $e^x > 0$ pour tout $x$, la dérivée est strictement positive : $\\exp$ est strictement croissante.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p03_q2",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de la fonction $x \\mapsto e^x$ ?",
            "options": [
              "$e^x$",
              "$xe^x$",
              "$\\frac{1}{x}e^x$",
              "$\\ln x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée de $e^x$ est $e^x$ elle-même."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La limite de $(x + 1)e^x$ en $-\\infty$",
          "stepTheme": "La limite de $(x + 1)e^x$ en $-\\infty$",
          "stepBadge": "La limite de $(x + 1)e^x$ en $-\\infty$",
          "paragraphText": "• $\\lim_{x \\to -\\infty} (x + 1)e^x = \\lim_{x \\to -\\infty} (xe^x + e^x) = 0$ car $\\lim_{x \\to -\\infty} xe^x = 0$ et $\\lim_{x \\to -\\infty} e^x = 0$.\nC'est une forme indéterminée $\\infty \\times 0$ levée par la limite de référence $\\lim_{x \\to -\\infty} xe^x = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p03_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} (x + 1)e^x$ ?",
            "options": [
              "$0$",
              "$-\\infty$",
              "$+\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(x + 1)e^x = xe^x + e^x$ : les deux termes tendent vers $0$ en $-\\infty$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La limite de $x(e^{-x} + 1)$ en $+\\infty$",
          "stepTheme": "La limite de $x(e^{-x} + 1)$ en $+\\infty$",
          "stepBadge": "La limite de $x(e^{-x} + 1)$ en $+\\infty$",
          "paragraphText": "• $\\lim_{x \\to +\\infty} x(e^{-x} + 1) = \\lim_{x \\to +\\infty} x\\left(\\frac{1}{e^x} + 1\\right) = +\\infty$ car $\\lim_{x \\to +\\infty} x = +\\infty$ et $\\lim_{x \\to +\\infty} \\left(\\frac{1}{e^x} + 1\\right) = 1$.\nLe facteur $e^{-x}$ tend vers $0$ : il ne reste que $x \\times 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p03_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} x(e^{-x} + 1)$ ?",
            "options": [
              "$0$",
              "$1$",
              "$+\\infty$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x(e^{-x} + 1) = x\\left(\\frac{1}{e^x} + 1\\right) \\to +\\infty \\times 1 = +\\infty$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'étude de $f(x) = (x - 2)e^x$",
          "stepTheme": "L'étude de $f(x) = (x - 2)e^x$",
          "stepBadge": "L'étude de $f(x) = (x - 2)e^x$",
          "paragraphText": "• Soit $f(x) = (x - 2)e^x$ sur $\\mathbb{R}$. $\\lim_{x \\to +\\infty} f(x) = +\\infty$ et $\\lim_{x \\to -\\infty} f(x) = 0$ (car $xe^x \\to 0$ et $e^x \\to 0$).\n$f'(x) = e^x + (x - 2)e^x = (x - 1)e^x$ : $f'(x) < 0$ sur $]-\\infty ; 1[$ et $f'(x) > 0$ sur $]1 ; +\\infty[$.\nDonc $f$ est strictement décroissante sur $]-\\infty ; 1]$ et strictement croissante sur $[1 ; +\\infty[$, avec un minimum $f(1) = -e$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p03_q5",
            "type": "mcq",
            "prompt": "Pour $f(x) = (x - 2)e^x$, que vaut $f'(x)$ ?",
            "options": [
              "$(x - 1)e^x$",
              "$(x - 2)e^x$",
              "$(x - 3)e^x$",
              "$xe^x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$f'(x) = e^x + (x - 2)e^x = (x - 1)e^x$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les variations de $f(x) = (x - 2)e^x$",
          "stepTheme": "Les variations de $f(x) = (x - 2)e^x$",
          "stepBadge": "Les variations de $f(x) = (x - 2)e^x$",
          "paragraphText": "• $f'(x) = (x - 1)e^x$ s'annule en $x = 1$ : $f'(x) < 0$ sur $]-\\infty ; 1[$ et $f'(x) > 0$ sur $]1 ; +\\infty[$.\nDonc $f$ est strictement décroissante sur $]-\\infty ; 1]$ puis strictement croissante sur $[1 ; +\\infty[$.\nLe minimum de $f$ est $f(1) = (1 - 2)e^1 = -e$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p03_q6",
            "type": "mcq",
            "prompt": "Quel est le minimum de $f(x) = (x - 2)e^x$ sur $\\mathbb{R}$ ?",
            "options": [
              "$-e$, atteint en $x = 1$",
              "$-1$, atteint en $x = 0$",
              "$0$, atteint en $x = 2$",
              "$e$, atteint en $x = 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$f'(x) = (x - 1)e^x$ s'annule en $1$ en changeant de signe de $-$ vers $+$ : le minimum est $f(1) = -e$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p03_q1",
          "type": "mcq",
          "prompt": "Que valent $\\lim_{x \\to -\\infty} e^x$ et $\\lim_{x \\to +\\infty} e^x$ ?",
          "options": [
            "$0$ et $+\\infty$",
            "$+\\infty$ et $0$",
            "$1$ et $+\\infty$",
            "$0$ et $1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$e^x \\to 0$ quand $x \\to -\\infty$ et $e^x \\to +\\infty$ quand $x \\to +\\infty$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p03_q2",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de la fonction $x \\mapsto e^x$ ?",
          "options": [
            "$e^x$",
            "$xe^x$",
            "$\\frac{1}{x}e^x$",
            "$\\ln x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée de $e^x$ est $e^x$ elle-même."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p03_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} (x + 1)e^x$ ?",
          "options": [
            "$0$",
            "$-\\infty$",
            "$+\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(x + 1)e^x = xe^x + e^x$ : les deux termes tendent vers $0$ en $-\\infty$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p03_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} x(e^{-x} + 1)$ ?",
          "options": [
            "$0$",
            "$1$",
            "$+\\infty$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x(e^{-x} + 1) = x\\left(\\frac{1}{e^x} + 1\\right) \\to +\\infty \\times 1 = +\\infty$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p03_q5",
          "type": "mcq",
          "prompt": "Pour $f(x) = (x - 2)e^x$, que vaut $f'(x)$ ?",
          "options": [
            "$(x - 1)e^x$",
            "$(x - 2)e^x$",
            "$(x - 3)e^x$",
            "$xe^x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$f'(x) = e^x + (x - 2)e^x = (x - 1)e^x$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p03_q6",
          "type": "mcq",
          "prompt": "Quel est le minimum de $f(x) = (x - 2)e^x$ sur $\\mathbb{R}$ ?",
          "options": [
            "$-e$, atteint en $x = 1$",
            "$-1$, atteint en $x = 0$",
            "$0$, atteint en $x = 2$",
            "$e$, atteint en $x = 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$f'(x) = (x - 1)e^x$ s'annule en $1$ en changeant de signe de $-$ vers $+$ : le minimum est $f(1) = -e$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l07_exponentielle_p04",
      "order": 4,
      "title": "Dérivées et primitives de e^u",
      "summary": "(e^u)' = u'·e^u ; une primitive de u'·e^u est e^u.",
      "conceptExplanation": "Dérivée de $e^u$ : si $u$ est dérivable sur un intervalle $K$, alors la fonction $x \\mapsto e^{u(x)}$ est dérivable sur $K$ et $(e^u)'(x) = u'(x) \\times e^{u(x)}$.\nPrimitive de $u'e^u$ : si $u$ est dérivable sur un intervalle $K$, alors la fonction $x \\mapsto u'(x) \\times e^{u(x)}$ a pour primitives sur $K$ les fonctions $x \\mapsto e^{u(x)} + c$ avec $c \\in \\mathbb{R}$.",
      "keyRule": "(e^u)' = u'·e^u. Primitive de u'·e^u : e^u + c. On reconnaît u' devant e^u.",
      "formulas": [
        {
          "name": "Dérivée de e^u",
          "formula": "(e^u)' = u' \\times e^u",
          "note": "u dérivable sur K."
        },
        {
          "name": "Primitive de u'e^u",
          "formula": "\\int u'e^u\\,dx = e^u + c",
          "note": "u dérivable sur K."
        }
      ],
      "workedExample": {
        "title": "La dérivée de $e^{2\\cos x}$",
        "statement": "Calcule la dérivée sur $\\mathbb{R}$ de $f(x) = e^{2\\cos x}$.",
        "methodSteps": [
          "On pose $u(x) = 2\\cos x$ : $u'(x) = -2\\sin x$.",
          "Par la formule $(e^u)' = u'e^u$, on a $f'(x) = (-2\\sin x)e^{2\\cos x}$."
        ],
        "conclusion": "$f'(x) = (-2\\sin x)e^{2\\cos x}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dérivée de $e^u$",
          "stepTheme": "La dérivée de $e^u$",
          "stepBadge": "La dérivée de $e^u$",
          "paragraphText": "• Si $u$ est dérivable sur un intervalle $K$, alors $x \\mapsto e^{u(x)}$ est dérivable sur $K$ et $(e^u)'(x) = u'(x) \\times e^{u(x)}$.\nC'est la dérivée composée : on dérive l'exposant, puis on multiplie par $e^u$.\nExemple : pour $f(x) = e^{2\\cos x}$, $u'(x) = -2\\sin x$ donc $f'(x) = (-2\\sin x)e^{2\\cos x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p04_q1",
            "type": "mcq",
            "prompt": "Si $u$ est dérivable sur $K$, que vaut $(e^u)'$ ?",
            "options": [
              "$u'e^u$",
              "$e^{u'}$",
              "$\\frac{e^u}{u'}$",
              "$u e^u$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(e^u)' = u' \\times e^u$ : on dérive l'exposant puis on multiplie par $e^u$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La dérivée de $e^{2\\cos x}$",
          "stepTheme": "La dérivée de $e^{2\\cos x}$",
          "stepBadge": "La dérivée de $e^{2\\cos x}$",
          "paragraphText": "• Pour $f(x) = e^{2\\cos x}$ : on pose $u(x) = 2\\cos x$, donc $u'(x) = -2\\sin x$.\nPar la formule, $f'(x) = (-2\\sin x)e^{2\\cos x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p04_q2",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de $f(x) = e^{2\\cos x}$ sur $\\mathbb{R}$ ?",
            "options": [
              "$(-2\\sin x)e^{2\\cos x}$",
              "$(2\\sin x)e^{2\\cos x}$",
              "$(-2\\cos x)e^{2\\cos x}$",
              "$e^{2\\cos x}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $u(x) = 2\\cos x$, $u'(x) = -2\\sin x$ : $f'(x) = u'e^u = (-2\\sin x)e^{2\\cos x}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La dérivée de $e^{x^3 - 4x - 1}$",
          "stepTheme": "La dérivée de $e^{x^3 - 4x - 1}$",
          "stepBadge": "La dérivée de $e^{x^3 - 4x - 1}$",
          "paragraphText": "• Pour $g(x) = e^{x^3 - 4x - 1}$ : on pose $u(x) = x^3 - 4x - 1$, donc $u'(x) = 3x^2 - 4$.\nPar la formule, $g'(x) = (3x^2 - 4)e^{x^3 - 4x - 1}$.\nAttention : la dérivée de $x^3$ est $3x^2$ (et non $-3x^2$) : le signe est positif.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p04_q3",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de $g(x) = e^{x^3 - 4x - 1}$ sur $\\mathbb{R}$ ?",
            "options": [
              "$(3x^2 - 4)e^{x^3 - 4x - 1}$",
              "$(-3x^2 - 4)e^{x^3 - 4x - 1}$",
              "$(3x^2 + 4)e^{x^3 - 4x - 1}$",
              "$e^{x^3 - 4x - 1}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $u(x) = x^3 - 4x - 1$, $u'(x) = 3x^2 - 4$ : $g'(x) = (3x^2 - 4)e^{x^3 - 4x - 1}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Une primitive de $u'e^u$",
          "stepTheme": "Une primitive de $u'e^u$",
          "stepBadge": "Une primitive de $u'e^u$",
          "paragraphText": "• Si $u$ est dérivable sur $K$, alors $x \\mapsto u'(x) \\times e^{u(x)}$ a pour primitives sur $K$ les fonctions $x \\mapsto e^{u(x)} + c$.\nExemple : pour $f(x) = (\\sin 2x)e^{\\cos 2x}$, on pose $u(x) = \\cos 2x$ : $u'(x) = -2\\sin 2x$ donc $f(x) = -\\frac{1}{2}u'(x)e^{u(x)}$.\nLes primitives de $f$ sont $F(x) = -\\frac{1}{2}e^{\\cos 2x} + \\alpha$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p04_q4",
            "type": "mcq",
            "prompt": "Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = (\\sin 2x)e^{\\cos 2x}$ ?",
            "options": [
              "$F(x) = -\\frac{1}{2}e^{\\cos 2x} + \\alpha$, où $\\alpha \\in \\mathbb{R}$",
              "$F(x) = e^{\\cos 2x} + \\alpha$, où $\\alpha \\in \\mathbb{R}$",
              "$F(x) = \\frac{1}{2}e^{\\cos 2x} + \\alpha$, où $\\alpha \\in \\mathbb{R}$",
              "$F(x) = -2e^{\\cos 2x} + \\alpha$, où $\\alpha \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $u(x) = \\cos 2x$, $u'(x) = -2\\sin 2x$ : $f = -\\frac{1}{2}u'e^u$, une primitive est $-\\frac{1}{2}e^{\\cos 2x}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $xe^{x^2}$",
          "stepTheme": "Une primitive de $xe^{x^2}$",
          "stepBadge": "Une primitive de $xe^{x^2}$",
          "paragraphText": "• Pour $f(x) = xe^{x^2}$ sur $\\mathbb{R}$ : on pose $u(x) = x^2$, donc $u'(x) = 2x$ et $f(x) = \\frac{1}{2}u'(x)e^{u(x)}$.\nLes primitives de $f$ sont $F(x) = \\frac{1}{2}e^{x^2} + \\alpha$, où $\\alpha \\in \\mathbb{R}$.\nDe même, les primitives de $f(x) = e^x$ sont $F(x) = e^x + \\alpha$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p04_q5",
            "type": "mcq",
            "prompt": "Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = xe^{x^2}$ ?",
            "options": [
              "$F(x) = \\frac{1}{2}e^{x^2} + \\alpha$, où $\\alpha \\in \\mathbb{R}$",
              "$F(x) = e^{x^2} + \\alpha$, où $\\alpha \\in \\mathbb{R}$",
              "$F(x) = 2e^{x^2} + \\alpha$, où $\\alpha \\in \\mathbb{R}$",
              "$F(x) = xe^{x^2} + \\alpha$, où $\\alpha \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $u(x) = x^2$, $u'(x) = 2x$ : $f = \\frac{1}{2}u'e^u$, une primitive est $\\frac{1}{2}e^{x^2}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $(x^2 - 4)e^{2x}$",
          "stepTheme": "Une primitive de $(x^2 - 4)e^{2x}$",
          "stepBadge": "Une primitive de $(x^2 - 4)e^{2x}$",
          "paragraphText": "• Soit $f(x) = (x^2 - 4)e^{2x}$ sur $\\mathbb{R}$. On cherche $F(x) = (\\alpha x^2 + \\beta x + \\gamma)e^{2x}$.\n$F'(x) = [2\\alpha x^2 + (2\\alpha + 2\\beta)x + (\\beta + 2\\gamma)]e^{2x}$ : par identification, $2\\alpha = 1$, $2\\alpha + 2\\beta = 0$ et $\\beta + 2\\gamma = -4$.\nDonc $\\alpha = \\frac{1}{2}$, $\\beta = -\\frac{1}{2}$ et $\\gamma = -\\frac{7}{4}$.\nLa primitive de $f$ qui s'annule en $0$ est $F(x) = \\left(\\frac{1}{2}x^2 - \\frac{1}{2}x - \\frac{7}{4}\\right)e^{2x} + \\frac{7}{4}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la primitive sur $\\mathbb{R}$ de $f(x) = (x^2 - 4)e^{2x}$ qui s'annule en $0$ ?",
            "options": [
              "$F(x) = \\left(\\frac{1}{2}x^2 - \\frac{1}{2}x - \\frac{7}{4}\\right)e^{2x} + \\frac{7}{4}$",
              "$F(x) = \\left(\\frac{1}{2}x^2 - \\frac{1}{2}x - \\frac{7}{4}\\right)e^{2x}$",
              "$F(x) = \\left(x^2 - x - \\frac{7}{2}\\right)e^{2x} + \\frac{7}{4}$",
              "$F(x) = \\left(\\frac{1}{2}x^2 + \\frac{1}{2}x - \\frac{7}{4}\\right)e^{2x} + \\frac{7}{4}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $\\alpha = \\frac{1}{2}$, $\\beta = -\\frac{1}{2}$, $\\gamma = -\\frac{7}{4}$, on a $F(0) = -\\frac{7}{4} + C = 0$ donc $C = \\frac{7}{4}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p04_q1",
          "type": "mcq",
          "prompt": "Si $u$ est dérivable sur $K$, que vaut $(e^u)'$ ?",
          "options": [
            "$u'e^u$",
            "$e^{u'}$",
            "$\\frac{e^u}{u'}$",
            "$u e^u$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(e^u)' = u' \\times e^u$ : on dérive l'exposant puis on multiplie par $e^u$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p04_q2",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de $f(x) = e^{2\\cos x}$ sur $\\mathbb{R}$ ?",
          "options": [
            "$(-2\\sin x)e^{2\\cos x}$",
            "$(2\\sin x)e^{2\\cos x}$",
            "$(-2\\cos x)e^{2\\cos x}$",
            "$e^{2\\cos x}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $u(x) = 2\\cos x$, $u'(x) = -2\\sin x$ : $f'(x) = u'e^u = (-2\\sin x)e^{2\\cos x}$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p04_q3",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de $g(x) = e^{x^3 - 4x - 1}$ sur $\\mathbb{R}$ ?",
          "options": [
            "$(3x^2 - 4)e^{x^3 - 4x - 1}$",
            "$(-3x^2 - 4)e^{x^3 - 4x - 1}$",
            "$(3x^2 + 4)e^{x^3 - 4x - 1}$",
            "$e^{x^3 - 4x - 1}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $u(x) = x^3 - 4x - 1$, $u'(x) = 3x^2 - 4$ : $g'(x) = (3x^2 - 4)e^{x^3 - 4x - 1}$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p04_q4",
          "type": "mcq",
          "prompt": "Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = (\\sin 2x)e^{\\cos 2x}$ ?",
          "options": [
            "$F(x) = -\\frac{1}{2}e^{\\cos 2x} + \\alpha$, où $\\alpha \\in \\mathbb{R}$",
            "$F(x) = e^{\\cos 2x} + \\alpha$, où $\\alpha \\in \\mathbb{R}$",
            "$F(x) = \\frac{1}{2}e^{\\cos 2x} + \\alpha$, où $\\alpha \\in \\mathbb{R}$",
            "$F(x) = -2e^{\\cos 2x} + \\alpha$, où $\\alpha \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $u(x) = \\cos 2x$, $u'(x) = -2\\sin 2x$ : $f = -\\frac{1}{2}u'e^u$, une primitive est $-\\frac{1}{2}e^{\\cos 2x}$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p04_q5",
          "type": "mcq",
          "prompt": "Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = xe^{x^2}$ ?",
          "options": [
            "$F(x) = \\frac{1}{2}e^{x^2} + \\alpha$, où $\\alpha \\in \\mathbb{R}$",
            "$F(x) = e^{x^2} + \\alpha$, où $\\alpha \\in \\mathbb{R}$",
            "$F(x) = 2e^{x^2} + \\alpha$, où $\\alpha \\in \\mathbb{R}$",
            "$F(x) = xe^{x^2} + \\alpha$, où $\\alpha \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $u(x) = x^2$, $u'(x) = 2x$ : $f = \\frac{1}{2}u'e^u$, une primitive est $\\frac{1}{2}e^{x^2}$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la primitive sur $\\mathbb{R}$ de $f(x) = (x^2 - 4)e^{2x}$ qui s'annule en $0$ ?",
          "options": [
            "$F(x) = \\left(\\frac{1}{2}x^2 - \\frac{1}{2}x - \\frac{7}{4}\\right)e^{2x} + \\frac{7}{4}$",
            "$F(x) = \\left(\\frac{1}{2}x^2 - \\frac{1}{2}x - \\frac{7}{4}\\right)e^{2x}$",
            "$F(x) = \\left(x^2 - x - \\frac{7}{2}\\right)e^{2x} + \\frac{7}{4}$",
            "$F(x) = \\left(\\frac{1}{2}x^2 + \\frac{1}{2}x - \\frac{7}{4}\\right)e^{2x} + \\frac{7}{4}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $\\alpha = \\frac{1}{2}$, $\\beta = -\\frac{1}{2}$, $\\gamma = -\\frac{7}{4}$, on a $F(0) = -\\frac{7}{4} + C = 0$ donc $C = \\frac{7}{4}$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l07_exponentielle_p05",
      "order": 5,
      "title": "Exponentielle de base a et fonctions puissances",
      "summary": "a^x = e^{x·ln a} ; x^α = e^{α·ln x} ; l'exponentielle croît plus vite que toute puissance, le logarithme moins vite.",
      "conceptExplanation": "Exponentielle de base $a$ : soit $a$ un nombre réel strictement positif. On appelle fonction exponentielle de base $a$, notée $\\exp_a$, la fonction $x \\mapsto a^x$ définie sur $\\mathbb{R}$ par $a^x = e^{x\\ln a}$.\nRemarques : pour tout réel $x$, $a^x > 0$ ; la fonction exponentielle de base $1$ est la fonction constante $x \\mapsto 1$ ; la fonction exponentielle de base $e$ est la fonction exponentielle népérienne.\nDérivée et sens de variation : pour $a > 0$ et $a \\neq 1$, $\\exp_a$ est dérivable sur $\\mathbb{R}$ et $\\exp_a'(x) = \\ln(a) \\times a^x$. Si $0 < a < 1$, $\\ln(a) < 0$ donc $\\exp_a$ est strictement décroissante ; si $a > 1$, $\\ln(a) > 0$ donc $\\exp_a$ est strictement croissante.\nConséquence : $a^x = a^y \\iff x = y$ ; si $0 < a < 1$, $a^x < a^y \\iff x > y$ ; si $a > 1$, $a^x < a^y \\iff x < y$.\nLimites : si $0 < a < 1$, $\\lim_{x \\to +\\infty} a^x = 0$ et $\\lim_{x \\to -\\infty} a^x = +\\infty$ ; si $a > 1$, $\\lim_{x \\to +\\infty} a^x = +\\infty$ et $\\lim_{x \\to -\\infty} a^x = 0$.\nFonctions puissances : soit $\\alpha$ un nombre réel non nul. On appelle fonction puissance d'exposant $\\alpha$ la fonction $x \\mapsto x^\\alpha$, définie sur $]0 ; +\\infty[$ par $x^\\alpha = e^{\\alpha\\ln x}$.\nCroissances comparées : soit $\\alpha > 0$. On a $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x^\\alpha} = 0$ ; $\\lim_{x \\to 0^+} x^\\alpha\\ln x = 0$ ; $\\lim_{x \\to +\\infty} \\frac{e^x}{x^\\alpha} = +\\infty$ ; $\\lim_{x \\to +\\infty} x^\\alpha e^{-x} = 0$.",
      "keyRule": "a^x = e^{x·ln a} ; (a^x)' = ln a · a^x. x^α = e^{α·ln x}. e^x l'emporte sur x^α ; ln x est dominé par x^α.",
      "formulas": [
        {
          "name": "Exponentielle de base a",
          "formula": "a^x = e^{x\\ln a},\\quad (a^x)' = \\ln(a) \\times a^x",
          "note": "Pour a > 0, a ≠ 1."
        },
        {
          "name": "Croissances comparées",
          "formula": "\\lim_{x \\to +\\infty} \\frac{\\ln x}{x^\\alpha} = 0,\\quad \\lim_{x \\to +\\infty} \\frac{e^x}{x^\\alpha} = +\\infty,\\quad \\lim_{x \\to +\\infty} x^\\alpha e^{-x} = 0",
          "note": "Pour α > 0."
        }
      ],
      "workedExample": {
        "title": "Résoudre $2^{x-9} = 8^{3x+1}$",
        "statement": "Résous dans $\\mathbb{R}$ l'équation $2^{x-9} = 8^{3x+1}$.",
        "methodSteps": [
          "On écrit $8$ comme une puissance de $2$ : $8^{3x+1} = 2^{3(3x+1)}$.",
          "L'équation devient $2^{x-9} = 2^{3(3x+1)}$, donc $x - 9 = 3(3x + 1)$.",
          "On résout : $x - 9 = 9x + 3$, donc $-8x = 12$ et $x = -\\frac{3}{2}$."
        ],
        "conclusion": "$S_{\\mathbb{R}} = \\{-\\frac{3}{2}\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'exponentielle de base a",
          "stepTheme": "L'exponentielle de base a",
          "stepBadge": "L'exponentielle de base a",
          "paragraphText": "• Soit $a > 0$. On appelle fonction exponentielle de base $a$ la fonction $x \\mapsto a^x$ définie sur $\\mathbb{R}$ par $a^x = e^{x\\ln a}$.\nExemples : $5^x = e^{x\\ln 5}$ et $12^x = e^{x\\ln 12}$.\nPour tout réel $x$, $a^x > 0$ ; la fonction de base $1$ est constante égale à $1$ ; celle de base $e$ est l'exponentielle népérienne.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p05_q1",
            "type": "mcq",
            "prompt": "Comment s'écrit $5^x$ à l'aide de l'exponentielle népérienne ?",
            "options": [
              "$5^x = e^{x\\ln 5}$",
              "$5^x = e^{5\\ln x}$",
              "$5^x = \\ln(5x)$",
              "$5^x = e^{\\ln 5}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, $a^x = e^{x\\ln a}$ : $5^x = e^{x\\ln 5}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Dérivée et sens de variation de $a^x$",
          "stepTheme": "Dérivée et sens de variation de $a^x$",
          "stepBadge": "Dérivée et sens de variation de $a^x$",
          "paragraphText": "• Pour $a > 0$ et $a \\neq 1$, $\\exp_a$ est dérivable sur $\\mathbb{R}$ et $\\exp_a'(x) = \\ln(a) \\times a^x$.\nSi $0 < a < 1$, $\\ln(a) < 0$ donc $\\exp_a$ est strictement décroissante ; si $a > 1$, $\\ln(a) > 0$ donc $\\exp_a$ est strictement croissante.\nConséquence : si $0 < a < 1$, $a^x < a^y \\iff x > y$ (le sens s'inverse) ; si $a > 1$, $a^x < a^y \\iff x < y$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p05_q2",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de la fonction $x \\mapsto a^x$ (avec $a > 0$, $a \\neq 1$) ?",
            "options": [
              "$\\ln(a) \\times a^x$",
              "$a \\times a^x$",
              "$\\frac{a^x}{\\ln a}$",
              "$x a^{x-1}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme $a^x = e^{x\\ln a}$, on a $(a^x)' = \\ln(a) \\times a^x$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $2^{x-9} = 8^{3x+1}$",
          "stepTheme": "Résoudre $2^{x-9} = 8^{3x+1}$",
          "stepBadge": "Résoudre $2^{x-9} = 8^{3x+1}$",
          "paragraphText": "• $2^{x-9} = 8^{3x+1} \\iff 2^{x-9} = 2^{3(3x+1)} \\iff x - 9 = 3(3x + 1)$.\nOn résout : $x - 9 = 9x + 3$, donc $-8x = 12$ et $x = -\\frac{3}{2}$.\nDonc $S_{\\mathbb{R}} = \\{-\\frac{3}{2}\\}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p05_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $2^{x-9} = 8^{3x+1}$ ?",
            "options": [
              "$\\{-\\frac{3}{2}\\}$",
              "$\\{\\frac{3}{2}\\}$",
              "$\\{-3\\}$",
              "$\\{3\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$8^{3x+1} = 2^{3(3x+1)}$ : $x - 9 = 9x + 3$ donne $x = -\\frac{3}{2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $(0{,}7)^{-x} < (0{,}7)^{-5x+1}$",
          "stepTheme": "Résoudre $(0{,}7)^{-x} < (0{,}7)^{-5x+1}$",
          "stepBadge": "Résoudre $(0{,}7)^{-x} < (0{,}7)^{-5x+1}$",
          "paragraphText": "• La base $0{,}7$ est entre $0$ et $1$ : la fonction $x \\mapsto (0{,}7)^x$ est strictement décroissante, donc l'inégalité s'inverse sur les exposants.\n$(0{,}7)^{-x} < (0{,}7)^{-5x+1} \\iff -x > -5x + 1 \\iff 4x > 1 \\iff x > \\frac{1}{4}$.\nDonc $S_{\\mathbb{R}} = \\left]\\frac{1}{4} ; +\\infty\\right[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p05_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $(0{,}7)^{-x} < (0{,}7)^{-5x+1}$ ?",
            "options": [
              "$\\left]\\frac{1}{4} ; +\\infty\\right[$",
              "$\\left]-\\infty ; \\frac{1}{4}\\right[$",
              "$\\left]\\frac{1}{4} ; +\\infty\\right]$",
              "$\\left[-\\frac{1}{4} ; +\\infty\\right[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme $0 < 0{,}7 < 1$, l'inégalité s'inverse : $-x > -5x + 1$, soit $x > \\frac{1}{4}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les fonctions puissances $x^\\alpha$",
          "stepTheme": "Les fonctions puissances $x^\\alpha$",
          "stepBadge": "Les fonctions puissances $x^\\alpha$",
          "paragraphText": "• Soit $\\alpha$ un réel non nul. La fonction puissance d'exposant $\\alpha$ est $x \\mapsto x^\\alpha$, définie sur $]0 ; +\\infty[$ par $x^\\alpha = e^{\\alpha\\ln x}$.\nLes règles de calcul sur les puissances d'exposants rationnels s'appliquent à ces fonctions puissances d'exposants réels.\nExemples : $x^{\\frac{1}{2}} = \\sqrt{x}$ ; $x^{-1} = \\frac{1}{x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p05_q5",
            "type": "mcq",
            "prompt": "Comment est définie la fonction puissance $x \\mapsto x^\\alpha$ (avec $\\alpha$ réel non nul) ?",
            "options": [
              "$x^\\alpha = e^{\\alpha\\ln x}$ sur $]0 ; +\\infty[$",
              "$x^\\alpha = e^{x\\ln\\alpha}$ sur $\\mathbb{R}$",
              "$x^\\alpha = \\alpha\\ln x$ sur $]0 ; +\\infty[$",
              "$x^\\alpha = \\ln(\\alpha x)$ sur $\\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, $x^\\alpha = e^{\\alpha\\ln x}$ pour $x > 0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les croissances comparées",
          "stepTheme": "Les croissances comparées",
          "stepBadge": "Les croissances comparées",
          "paragraphText": "• Pour $\\alpha > 0$ : $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x^\\alpha} = 0$ ; $\\lim_{x \\to 0^+} x^\\alpha\\ln x = 0$ ; $\\lim_{x \\to +\\infty} \\frac{e^x}{x^\\alpha} = +\\infty$ ; $\\lim_{x \\to +\\infty} x^\\alpha e^{-x} = 0$.\nExemples : $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x^5} = 0$ ; $\\lim_{x \\to 0^+} x^2\\ln x = 0$ ; $\\lim_{x \\to +\\infty} \\frac{e^x}{x^3} = +\\infty$ ; $\\lim_{x \\to +\\infty} x^8 e^{-x} = 0$.\nL'exponentielle l'emporte sur toute puissance, qui l'emporte sur le logarithme.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p05_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\frac{e^x}{x^3}$ ?",
            "options": [
              "$0$",
              "$1$",
              "$+\\infty$",
              "$e$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'exponentielle croît plus vite que toute puissance : $\\lim_{x \\to +\\infty} \\frac{e^x}{x^3} = +\\infty$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p05_q1",
          "type": "mcq",
          "prompt": "Comment s'écrit $5^x$ à l'aide de l'exponentielle népérienne ?",
          "options": [
            "$5^x = e^{x\\ln 5}$",
            "$5^x = e^{5\\ln x}$",
            "$5^x = \\ln(5x)$",
            "$5^x = e^{\\ln 5}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, $a^x = e^{x\\ln a}$ : $5^x = e^{x\\ln 5}$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p05_q2",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de la fonction $x \\mapsto a^x$ (avec $a > 0$, $a \\neq 1$) ?",
          "options": [
            "$\\ln(a) \\times a^x$",
            "$a \\times a^x$",
            "$\\frac{a^x}{\\ln a}$",
            "$x a^{x-1}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme $a^x = e^{x\\ln a}$, on a $(a^x)' = \\ln(a) \\times a^x$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p05_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $2^{x-9} = 8^{3x+1}$ ?",
          "options": [
            "$\\{-\\frac{3}{2}\\}$",
            "$\\{\\frac{3}{2}\\}$",
            "$\\{-3\\}$",
            "$\\{3\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$8^{3x+1} = 2^{3(3x+1)}$ : $x - 9 = 9x + 3$ donne $x = -\\frac{3}{2}$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p05_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{R}$ de $(0{,}7)^{-x} < (0{,}7)^{-5x+1}$ ?",
          "options": [
            "$\\left]\\frac{1}{4} ; +\\infty\\right[$",
            "$\\left]-\\infty ; \\frac{1}{4}\\right[$",
            "$\\left]\\frac{1}{4} ; +\\infty\\right]$",
            "$\\left[-\\frac{1}{4} ; +\\infty\\right[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme $0 < 0{,}7 < 1$, l'inégalité s'inverse : $-x > -5x + 1$, soit $x > \\frac{1}{4}$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p05_q5",
          "type": "mcq",
          "prompt": "Comment est définie la fonction puissance $x \\mapsto x^\\alpha$ (avec $\\alpha$ réel non nul) ?",
          "options": [
            "$x^\\alpha = e^{\\alpha\\ln x}$ sur $]0 ; +\\infty[$",
            "$x^\\alpha = e^{x\\ln\\alpha}$ sur $\\mathbb{R}$",
            "$x^\\alpha = \\alpha\\ln x$ sur $]0 ; +\\infty[$",
            "$x^\\alpha = \\ln(\\alpha x)$ sur $\\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, $x^\\alpha = e^{\\alpha\\ln x}$ pour $x > 0$."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p05_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\frac{e^x}{x^3}$ ?",
          "options": [
            "$0$",
            "$1$",
            "$+\\infty$",
            "$e$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'exponentielle croît plus vite que toute puissance : $\\lim_{x \\to +\\infty} \\frac{e^x}{x^3} = +\\infty$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l07_exponentielle_p06",
      "order": 6,
      "title": "Applications : médicament, publicité, population",
      "summary": "L'exponentielle modélise la décroissance d'un médicament, la diffusion d'une publicité et la croissance d'une population.",
      "conceptExplanation": "Application 1 (médicament) : la masse $M$ (en mg) d'un médicament encore présent dans le sang, $t$ heures après sa prise, est $M(t) = 50e^{-0{,}75t}$. La prochaine prise se fera lorsque le taux de présence est en dessous de $20\\%$ de la dose initiale, soit $M(t) < 10$ : $50e^{-0{,}75t} < 10$ donne $e^{-0{,}75t} < 0{,}2$, soit $-0{,}75t < \\ln(0{,}2)$ et $t > \\frac{\\ln(0{,}2)}{-0{,}75} \\approx 2{,}15$ heures.\nApplication 2 (publicité) : la proportion $P$ de la population au courant des offres après $t$ jours est $P(t) = 1 - e^{-0{,}21t}$. On veut $P(t) \\geq 0{,}9$ : $1 - e^{-0{,}21t} \\geq 0{,}9$ donne $e^{-0{,}21t} \\leq 0{,}1$, soit $-0{,}21t \\leq \\ln(0{,}1)$ et $t \\geq \\frac{\\ln(0{,}1)}{-0{,}21} \\approx 10{,}96$. Il faut donc $11$ jours de publicité : l'affirmation « cela n'excédera pas une semaine » est fausse.\nApplication 3 (population) : une zone compte $10200$ habitants et sa population évolue suivant $10200e^{0{,}5n}$ où $n$ est le nombre d'années. Elle dépassera $20000$ habitants quand $10200e^{0{,}5n} > 20000$, soit $e^{0{,}5n} > \\frac{200}{102}$, donc $n > 2\\ln\\left(\\frac{200}{102}\\right) \\approx 1{,}35$ : dès la $2$ème année.\nApplication 4 (pouvoir d'achat) : le pouvoir d'achat d'un dollar actuel dans $t$ années est $A(t) = 0{,}95^t$. Il sera la moitié de ce qu'il est aujourd'hui quand $0{,}95^t = 0{,}5$, soit $t = \\frac{\\ln(0{,}5)}{\\ln(0{,}95)} \\approx 13{,}5$ années.",
      "keyRule": "Modéliser avec e^{kt}, puis résoudre l'inéquation en prenant le logarithme (attention au signe quand on divise).",
      "formulas": [],
      "workedExample": {
        "title": "La durée de la publicité",
        "statement": "La proportion de la population au courant des offres après $t$ jours est $P(t) = 1 - e^{-0{,}21t}$. Combien de jours de publicité faut-il pour que $90\\%$ de la population soit au courant ?",
        "methodSteps": [
          "On résout $P(t) \\geq 0{,}9$ : $1 - e^{-0{,}21t} \\geq 0{,}9$ donne $e^{-0{,}21t} \\leq 0{,}1$.",
          "En prenant le logarithme : $-0{,}21t \\leq \\ln(0{,}1)$.",
          "On divise par $-0{,}21 < 0$ (le sens change) : $t \\geq \\frac{\\ln(0{,}1)}{-0{,}21} \\approx 10{,}96$.",
          "Il faut donc $11$ jours de publicité."
        ],
        "conclusion": "Il faut 11 jours : l'affirmation « pas plus d'une semaine » est fausse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le médicament dans le sang",
          "stepTheme": "Le médicament dans le sang",
          "stepBadge": "Le médicament dans le sang",
          "paragraphText": "• La masse de médicament encore présente dans le sang $t$ heures après la prise est $M(t) = 50e^{-0{,}75t}$ (en mg).\nLa prochaine prise se fera quand le taux est en dessous de $20\\%$ de la dose initiale, soit $M(t) < 10$.\n$50e^{-0{,}75t} < 10$ donne $e^{-0{,}75t} < 0{,}2$, soit $-0{,}75t < \\ln(0{,}2)$ et $t > \\frac{\\ln(0{,}2)}{-0{,}75} \\approx 2{,}15$ heures.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p06_q1",
            "type": "mcq",
            "prompt": "Avec $M(t) = 50e^{-0{,}75t}$, au bout de combien d'heures la masse de médicament passe-t-elle en dessous de $10$ mg ?",
            "options": [
              "Environ $2{,}15$ heures",
              "Environ $0{,}75$ heure",
              "Environ $20$ heures",
              "Environ $1$ heure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$50e^{-0{,}75t} < 10$ donne $t > \\frac{\\ln(0{,}2)}{-0{,}75} \\approx 2{,}15$ heures."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La durée de la publicité",
          "stepTheme": "La durée de la publicité",
          "stepBadge": "La durée de la publicité",
          "paragraphText": "• La proportion de la population au courant des offres après $t$ jours est $P(t) = 1 - e^{-0{,}21t}$.\nOn veut $P(t) \\geq 0{,}9$ : $e^{-0{,}21t} \\leq 0{,}1$, soit $t \\geq \\frac{\\ln(0{,}1)}{-0{,}21} \\approx 10{,}96$.\nIl faut donc $11$ jours de publicité.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p06_q2",
            "type": "mcq",
            "prompt": "Combien de jours de publicité faut-il pour que $90\\%$ de la population soit au courant, avec $P(t) = 1 - e^{-0{,}21t}$ ?",
            "options": [
              "$7$ jours",
              "$11$ jours",
              "$21$ jours",
              "$90$ jours"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$P(t) \\geq 0{,}9$ donne $t \\geq \\frac{\\ln(0{,}1)}{-0{,}21} \\approx 10{,}96$ : il faut $11$ jours."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "L'affirmation « pas plus d'une semaine » est fausse",
          "stepTheme": "L'affirmation « pas plus d'une semaine » est fausse",
          "stepBadge": "L'affirmation « pas plus d'une semaine » est fausse",
          "paragraphText": "• Un camarade affirme que la publicité n'excédera pas une semaine ($7$ jours).\nOr il faut $11$ jours pour atteindre $90\\%$ de la population : $11 > 7$, donc l'affirmation est fausse.\nC'est l'intérêt de la modélisation : trancher une affirmation par le calcul.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p06_q3",
            "type": "mcq",
            "prompt": "L'affirmation « la publicité n'excédera pas une semaine » est-elle vraie ?",
            "options": [
              "Oui, car $7$ jours suffisent",
              "Non, car il faut $11$ jours",
              "Oui, car $P(7) \\geq 0{,}9$",
              "Non, car il faut $21$ jours"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il faut $11$ jours pour atteindre $90\\%$ de la population : $11 > 7$, l'affirmation est fausse."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La croissance de la population",
          "stepTheme": "La croissance de la population",
          "stepBadge": "La croissance de la population",
          "paragraphText": "• Une zone compte $10200$ habitants et sa population évolue suivant $10200e^{0{,}5n}$ où $n$ est le nombre d'années.\nElle dépassera $20000$ habitants quand $10200e^{0{,}5n} > 20000$, soit $e^{0{,}5n} > \\frac{200}{102}$.\nDonc $0{,}5n > \\ln\\left(\\frac{200}{102}\\right)$ et $n > 2\\ln\\left(\\frac{200}{102}\\right) \\approx 1{,}35$ : la population dépassera $20000$ habitants dès la $2$ème année.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p06_q4",
            "type": "mcq",
            "prompt": "Au bout de combien d'années la population (modélisée par $10200e^{0{,}5n}$) dépassera-t-elle $20000$ habitants ?",
            "options": [
              "Dès la $1$ère année",
              "Dès la $2$ème année",
              "Dès la $5$ème année",
              "Dès la $10$ème année"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$10200e^{0{,}5n} > 20000$ donne $n > 2\\ln\\left(\\frac{200}{102}\\right) \\approx 1{,}35$ : c'est dès la $2$ème année."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le pouvoir d'achat d'un dollar",
          "stepTheme": "Le pouvoir d'achat d'un dollar",
          "stepBadge": "Le pouvoir d'achat d'un dollar",
          "paragraphText": "• Le pouvoir d'achat d'un dollar actuel dans $t$ années est $A(t) = 0{,}95^t$.\nIl sera la moitié de ce qu'il est aujourd'hui quand $0{,}95^t = 0{,}5$.\nEn prenant le logarithme : $t\\ln(0{,}95) = \\ln(0{,}5)$, donc $t = \\frac{\\ln(0{,}5)}{\\ln(0{,}95)} \\approx 13{,}5$ années.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p06_q5",
            "type": "mcq",
            "prompt": "Dans combien d'années le pouvoir d'achat d'un dollar (modélisé par $A(t) = 0{,}95^t$) sera-t-il la moitié de ce qu'il est aujourd'hui ?",
            "options": [
              "Environ $5$ ans",
              "Environ $10$ ans",
              "Environ $13{,}5$ ans",
              "Environ $20$ ans"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$0{,}95^t = 0{,}5$ donne $t = \\frac{\\ln(0{,}5)}{\\ln(0{,}95)} \\approx 13{,}5$ années."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Diviser par un nombre négatif inverse le sens",
          "stepTheme": "Diviser par un nombre négatif inverse le sens",
          "stepBadge": "Diviser par un nombre négatif inverse le sens",
          "paragraphText": "• Dans la publicité, on passe de $-0{,}21t \\leq \\ln(0{,}1)$ à $t \\geq \\frac{\\ln(0{,}1)}{-0{,}21}$ : le sens change car on divise par $-0{,}21 < 0$.\nPiège : oublier d'inverser le sens donne $t \\leq 10{,}96$, ce qui est faux (à $t = 0$, $P(0) = 0 < 0{,}9$).\nVérification : $P(11) = 1 - e^{-2{,}31} \\approx 1 - 0{,}099 = 0{,}901 \\geq 0{,}9$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l07_exponentielle_p06_q6",
            "type": "mcq",
            "prompt": "Pourquoi passe-t-on de $-0{,}21t \\leq \\ln(0{,}1)$ à $t \\geq \\frac{\\ln(0{,}1)}{-0{,}21}$ ?",
            "options": [
              "Parce qu'on divise par $-0{,}21 < 0$ : le sens de l'inégalité s'inverse",
              "Parce que $\\ln$ est croissante",
              "Parce que $t$ est un nombre de jours",
              "Parce que $0{,}1 < 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On divise par $-0{,}21$, un nombre négatif : le sens de l'inégalité s'inverse."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p06_q1",
          "type": "mcq",
          "prompt": "Avec $M(t) = 50e^{-0{,}75t}$, au bout de combien d'heures la masse de médicament passe-t-elle en dessous de $10$ mg ?",
          "options": [
            "Environ $2{,}15$ heures",
            "Environ $0{,}75$ heure",
            "Environ $20$ heures",
            "Environ $1$ heure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$50e^{-0{,}75t} < 10$ donne $t > \\frac{\\ln(0{,}2)}{-0{,}75} \\approx 2{,}15$ heures."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p06_q2",
          "type": "mcq",
          "prompt": "Combien de jours de publicité faut-il pour que $90\\%$ de la population soit au courant, avec $P(t) = 1 - e^{-0{,}21t}$ ?",
          "options": [
            "$7$ jours",
            "$11$ jours",
            "$21$ jours",
            "$90$ jours"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$P(t) \\geq 0{,}9$ donne $t \\geq \\frac{\\ln(0{,}1)}{-0{,}21} \\approx 10{,}96$ : il faut $11$ jours."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p06_q3",
          "type": "mcq",
          "prompt": "L'affirmation « la publicité n'excédera pas une semaine » est-elle vraie ?",
          "options": [
            "Oui, car $7$ jours suffisent",
            "Non, car il faut $11$ jours",
            "Oui, car $P(7) \\geq 0{,}9$",
            "Non, car il faut $21$ jours"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il faut $11$ jours pour atteindre $90\\%$ de la population : $11 > 7$, l'affirmation est fausse."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p06_q4",
          "type": "mcq",
          "prompt": "Au bout de combien d'années la population (modélisée par $10200e^{0{,}5n}$) dépassera-t-elle $20000$ habitants ?",
          "options": [
            "Dès la $1$ère année",
            "Dès la $2$ème année",
            "Dès la $5$ème année",
            "Dès la $10$ème année"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$10200e^{0{,}5n} > 20000$ donne $n > 2\\ln\\left(\\frac{200}{102}\\right) \\approx 1{,}35$ : c'est dès la $2$ème année."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p06_q5",
          "type": "mcq",
          "prompt": "Dans combien d'années le pouvoir d'achat d'un dollar (modélisé par $A(t) = 0{,}95^t$) sera-t-il la moitié de ce qu'il est aujourd'hui ?",
          "options": [
            "Environ $5$ ans",
            "Environ $10$ ans",
            "Environ $13{,}5$ ans",
            "Environ $20$ ans"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$0{,}95^t = 0{,}5$ donne $t = \\frac{\\ln(0{,}5)}{\\ln(0{,}95)} \\approx 13{,}5$ années."
        },
        {
          "id": "terminale_c_maths_numerique_l07_exponentielle_p06_q6",
          "type": "mcq",
          "prompt": "Pourquoi passe-t-on de $-0{,}21t \\leq \\ln(0{,}1)$ à $t \\geq \\frac{\\ln(0{,}1)}{-0{,}21}$ ?",
          "options": [
            "Parce qu'on divise par $-0{,}21 < 0$ : le sens de l'inégalité s'inverse",
            "Parce que $\\ln$ est croissante",
            "Parce que $t$ est un nombre de jours",
            "Parce que $0{,}1 < 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On divise par $-0{,}21$, un nombre négatif : le sens de l'inégalité s'inverse."
        }
      ]
    }
  ]
};
