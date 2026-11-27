import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 03 : Dérivabilité et étude de fonctions » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2846
export const MATHS_TLE_CD_L03_DERIVABILITE: CurriculumChapter = {
  "id": "terminale_c_maths_numerique_l03_derivabilite",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 3,
  "title": "Leçon 3 : Dérivabilité et étude de fonctions",
  "summary": "Dérivabilité à gauche et à droite, dérivée d'une fonction composée, dérivabilité de la bijection réciproque, dérivées successives, inégalités des accroissements finis et étude de fonctions.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2846",
  "points": [
    {
      "id": "terminale_c_maths_numerique_l03_derivabilite_p01",
      "order": 1,
      "title": "Dérivabilité à gauche et à droite",
      "summary": "Une fonction est dérivable en un point si les nombres dérivés à gauche et à droite existent et sont égaux.",
      "conceptExplanation": "Soit $f$ une fonction numérique définie sur un intervalle ouvert $K$ et $x_0$ un nombre réel de $K$.\n• $f$ est dérivable à gauche en $x_0$ si et seulement si $\\lim_{x \\to x_0^-} \\frac{f(x) - f(x_0)}{x - x_0}$ existe et est finie. Cette limite est le nombre dérivé de $f$ à gauche en $x_0$, noté $f_g'(x_0)$. La demi-droite passant par $M(x_0 ; f(x_0))$ et de coefficient directeur $f_g'(x_0)$ est appelée demi-tangente à gauche au point $M$.\n• $f$ est dérivable à droite en $x_0$ si et seulement si $\\lim_{x \\to x_0^+} \\frac{f(x) - f(x_0)}{x - x_0}$ existe et est finie. Cette limite est le nombre dérivé de $f$ à droite en $x_0$, noté $f_d'(x_0)$. La demi-droite de coefficient directeur $f_d'(x_0)$ est la demi-tangente à droite au point $M$.\nPropriété : $f$ est dérivable en $x_0$ si et seulement si $f$ est dérivable à gauche et à droite en $x_0$ et $f_d'(x_0) = f_g'(x_0)$.\nDemi-tangente verticale : si $\\frac{f(x) - f(x_0)}{x - x_0}$ admet une limite infinie à gauche ou à droite en $x_0$, alors la courbe admet une demi-tangente verticale au point $(x_0 ; f(x_0))$.\nDérivabilité sur un intervalle : $f$ est dérivable sur un intervalle ouvert $K$ si elle est dérivable en tout point de $K$ ; elle est dérivable sur $[a ; b]$ si elle est dérivable sur $]a ; b[$, dérivable à droite en $a$ et dérivable à gauche en $b$. Exemples : $x \\mapsto \\sqrt{x}$ est dérivable sur $]0 ; +\\infty[$ ; toute fonction polynôme est dérivable sur $\\mathbb{R}$.",
      "keyRule": "Dérivable en un point = dérivable à gauche ET à droite avec les mêmes nombres dérivés. Limite infinie = demi-tangente verticale.",
      "formulas": [
        {
          "name": "Nombre dérivé à gauche",
          "formula": "f_g'(x_0) = \\lim_{x \\to x_0^-} \\frac{f(x) - f(x_0)}{x - x_0}",
          "note": "La limite doit être finie."
        },
        {
          "name": "Dérivabilité en un point",
          "formula": "f \\text{ dérivable en } x_0 \\iff f_g'(x_0) = f_d'(x_0)",
          "note": "Les deux nombres dérivés latéraux doivent exister et être égaux."
        }
      ],
      "workedExample": {
        "title": "Une fonction non dérivable en 1",
        "statement": "Soit $f$ définie par $f(x) = \\frac{1}{x-2}$ pour $x \\in ]-\\infty ; 0[ \\cup ]0 ; 1]$ et $f(x) = \\frac{-1}{x}$ pour $x \\in [1 ; 2[ \\cup ]2 ; +\\infty[$. Étudie la dérivabilité de $f$ à gauche et à droite en $1$ et interprète graphiquement.",
        "methodSteps": [
          "On a $f(1) = -1$. À gauche : $\\lim_{x \\to 1^-} \\frac{f(x) - f(1)}{x - 1} = \\lim_{x \\to 1^-} \\frac{1}{x-2} = -1$ : $f$ est dérivable à gauche en $1$ et $f_g'(1) = -1$.",
          "À droite : $\\lim_{x \\to 1^+} \\frac{f(x) - f(1)}{x - 1} = \\lim_{x \\to 1^+} \\frac{1}{x} = 1$ : $f$ est dérivable à droite en $1$ et $f_d'(1) = 1$.",
          "Comme $f_g'(1) \\neq f_d'(1)$, $f$ n'est pas dérivable en $1$."
        ],
        "conclusion": "La courbe admet au point d'abscisse $1$ une demi-tangente à gauche de coefficient directeur $-1$ et une demi-tangente à droite de coefficient directeur $1$ : c'est un point anguleux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le nombre dérivé à gauche",
          "stepTheme": "Le nombre dérivé à gauche",
          "stepBadge": "Le nombre dérivé à gauche",
          "paragraphText": "• $f$ est dérivable à gauche en $x_0$ si $\\lim_{x \\to x_0^-} \\frac{f(x) - f(x_0)}{x - x_0}$ existe et est finie : c'est $f_g'(x_0)$.\nLa demi-droite passant par $M(x_0 ; f(x_0))$ et de coefficient directeur $f_g'(x_0)$ est la demi-tangente à gauche.\nOn ne regarde que ce qui se passe à gauche de $x_0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p01_q1",
            "type": "mcq",
            "prompt": "Que signifie « $f$ est dérivable à gauche en $x_0$ » ?",
            "options": [
              "$\\lim_{x \\to x_0^+} \\frac{f(x) - f(x_0)}{x - x_0}$ est finie",
              "$\\lim_{x \\to x_0^-} \\frac{f(x) - f(x_0)}{x - x_0}$ existe et est finie",
              "$f$ est continue en $x_0$",
              "$f'(x_0) = 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La dérivabilité à gauche en $x_0$ est l'existence (finie) de la limite du taux d'accroissement quand $x$ tend vers $x_0$ par valeurs inférieures."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le nombre dérivé à droite",
          "stepTheme": "Le nombre dérivé à droite",
          "stepBadge": "Le nombre dérivé à droite",
          "paragraphText": "• $f$ est dérivable à droite en $x_0$ si $\\lim_{x \\to x_0^+} \\frac{f(x) - f(x_0)}{x - x_0}$ existe et est finie : c'est $f_d'(x_0)$.\nLa demi-droite de coefficient directeur $f_d'(x_0)$ est la demi-tangente à droite.\nOn ne regarde que ce qui se passe à droite de $x_0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p01_q2",
            "type": "mcq",
            "prompt": "Dans l'exemple du cours, $f$ vérifie $f_g'(1) = -1$ et $f_d'(1) = 1$. Que peut-on dire de la dérivabilité de $f$ en $1$ ?",
            "options": [
              "$f$ est dérivable en $1$ et $f'(1) = 0$",
              "$f$ est dérivable en $1$ et $f'(1) = -1$",
              "$f$ n'est pas dérivable en $1$ car $f_g'(1) \\neq f_d'(1)$",
              "$f$ n'est pas continue en $1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour être dérivable en $1$, il faut $f_g'(1) = f_d'(1)$. Ici $-1 \\neq 1$ : $f$ n'est pas dérivable en $1$ (point anguleux)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une fonction dérivable en 0",
          "stepTheme": "Une fonction dérivable en 0",
          "stepBadge": "Une fonction dérivable en 0",
          "paragraphText": "• Soit $f(x) = x^2$ pour $x < 0$ et $f(x) = x^3$ pour $x \\geq 0$.\nÀ gauche : $\\lim_{x \\to 0^-} \\frac{x^2 - 0}{x - 0} = \\lim_{x \\to 0^-} x = 0$, donc $f_g'(0) = 0$.\nÀ droite : $\\lim_{x \\to 0^+} \\frac{x^3 - 0}{x - 0} = \\lim_{x \\to 0^+} x^2 = 0$, donc $f_d'(0) = 0$.\nComme $f_g'(0) = f_d'(0)$, $f$ est dérivable en $0$ et $f'(0) = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p01_q3",
            "type": "mcq",
            "prompt": "Soit $f(x) = x^2$ pour $x < 0$ et $f(x) = x^3$ pour $x \\geq 0$. Que vaut $f'(0)$ ?",
            "options": [
              "$0$",
              "$1$",
              "$2$",
              "$f$ n'est pas dérivable en $0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$f_g'(0) = 0$ et $f_d'(0) = 0$ : les deux nombres dérivés sont égaux, donc $f$ est dérivable en $0$ et $f'(0) = 0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "La demi-tangente verticale",
          "stepTheme": "La demi-tangente verticale",
          "stepBadge": "La demi-tangente verticale",
          "paragraphText": "• Si le taux d'accroissement admet une limite infinie à gauche ou à droite en $x_0$, la courbe admet une demi-tangente verticale au point $(x_0 ; f(x_0))$.\nExemple : $f(x) = \\sqrt{x} - x$ sur $\\mathbb{R}^+$ : $\\lim_{x \\to 0^+} \\frac{f(x) - f(0)}{x - 0} = \\lim_{x \\to 0^+} (\\frac{1}{\\sqrt{x}} - 1) = +\\infty$.\nDonc $f$ n'est pas dérivable à droite en $0$ et sa courbe admet une demi-tangente verticale au point d'abscisse $0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p01_q4",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\sqrt{x} - x$, que vaut $\\lim_{x \\to 0^+} \\frac{f(x) - f(0)}{x - 0}$ et qu'en déduit-on graphiquement ?",
            "options": [
              "$0$ : tangente horizontale",
              "$1$ : tangente de coefficient directeur $1$",
              "$+\\infty$ : demi-tangente verticale",
              "$-\\infty$ : demi-tangente verticale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le taux tend vers $+\\infty$ : $f$ n'est pas dérivable à droite en $0$ et la courbe admet une demi-tangente verticale au point d'abscisse $0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Dérivabilité sur un intervalle",
          "stepTheme": "Dérivabilité sur un intervalle",
          "stepBadge": "Dérivabilité sur un intervalle",
          "paragraphText": "• $f$ est dérivable sur un intervalle ouvert $K$ si elle est dérivable en tout point de $K$.\n$f$ est dérivable sur $[a ; b]$ si elle est dérivable sur $]a ; b[$, dérivable à droite en $a$ et dérivable à gauche en $b$.\nExemples à connaître : $x \\mapsto \\sqrt{x}$ est dérivable sur $]0 ; +\\infty[$ (mais pas en $0$) ; toute fonction polynôme est dérivable sur $\\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p01_q5",
            "type": "mcq",
            "prompt": "Sur quel intervalle la fonction $x \\mapsto \\sqrt{x}$ est-elle dérivable ?",
            "options": [
              "Sur $\\mathbb{R}$",
              "Sur $[0 ; +\\infty[$",
              "Sur $]0 ; +\\infty[$",
              "Sur $\\mathbb{R}^*$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La fonction racine carrée est dérivable sur $]0 ; +\\infty[$ ; en $0$, le taux d'accroissement tend vers $+\\infty$ (demi-tangente verticale)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une fonction dérivable en -1",
          "stepTheme": "Une fonction dérivable en -1",
          "stepBadge": "Une fonction dérivable en -1",
          "paragraphText": "• Soit $f$ continue sur $\\mathbb{R}$, définie par $f(x) = 1 - x^2$ pour $x < -1$ et $f(x) = \\frac{2x+2}{x+2}$ pour $x \\geq -1$.\nÀ gauche : $\\lim_{x \\to -1^-} \\frac{f(x) - f(-1)}{x + 1} = \\lim_{x \\to -1^-} (1 - x) = 2$, donc $f_g'(-1) = 2$.\nÀ droite : $\\lim_{x \\to -1^+} \\frac{f(x) - f(-1)}{x + 1} = \\lim_{x \\to -1^+} \\frac{2}{x+2} = 2$, donc $f_d'(-1) = 2$.\nComme $f_g'(-1) = f_d'(-1)$, $f$ est dérivable en $-1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p01_q6",
            "type": "mcq",
            "prompt": "Pour la fonction de l'exercice corrigé, on a $f_g'(-1) = 2$ et $f_d'(-1) = 2$. Que conclut-on ?",
            "options": [
              "$f$ n'est pas dérivable en $-1$",
              "$f$ est dérivable en $-1$ et $f'(-1) = 2$",
              "$f$ est dérivable en $-1$ et $f'(-1) = 0$",
              "$f$ n'est pas continue en $-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les nombres dérivés à gauche et à droite sont égaux (2) : $f$ est dérivable en $-1$ et $f'(-1) = 2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p01_q1",
          "type": "mcq",
          "prompt": "Que signifie « $f$ est dérivable à gauche en $x_0$ » ?",
          "options": [
            "$\\lim_{x \\to x_0^+} \\frac{f(x) - f(x_0)}{x - x_0}$ est finie",
            "$\\lim_{x \\to x_0^-} \\frac{f(x) - f(x_0)}{x - x_0}$ existe et est finie",
            "$f$ est continue en $x_0$",
            "$f'(x_0) = 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La dérivabilité à gauche en $x_0$ est l'existence (finie) de la limite du taux d'accroissement quand $x$ tend vers $x_0$ par valeurs inférieures."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p01_q2",
          "type": "mcq",
          "prompt": "Dans l'exemple du cours, $f$ vérifie $f_g'(1) = -1$ et $f_d'(1) = 1$. Que peut-on dire de la dérivabilité de $f$ en $1$ ?",
          "options": [
            "$f$ est dérivable en $1$ et $f'(1) = 0$",
            "$f$ est dérivable en $1$ et $f'(1) = -1$",
            "$f$ n'est pas dérivable en $1$ car $f_g'(1) \\neq f_d'(1)$",
            "$f$ n'est pas continue en $1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour être dérivable en $1$, il faut $f_g'(1) = f_d'(1)$. Ici $-1 \\neq 1$ : $f$ n'est pas dérivable en $1$ (point anguleux)."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p01_q3",
          "type": "mcq",
          "prompt": "Soit $f(x) = x^2$ pour $x < 0$ et $f(x) = x^3$ pour $x \\geq 0$. Que vaut $f'(0)$ ?",
          "options": [
            "$0$",
            "$1$",
            "$2$",
            "$f$ n'est pas dérivable en $0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$f_g'(0) = 0$ et $f_d'(0) = 0$ : les deux nombres dérivés sont égaux, donc $f$ est dérivable en $0$ et $f'(0) = 0$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p01_q4",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\sqrt{x} - x$, que vaut $\\lim_{x \\to 0^+} \\frac{f(x) - f(0)}{x - 0}$ et qu'en déduit-on graphiquement ?",
          "options": [
            "$0$ : tangente horizontale",
            "$1$ : tangente de coefficient directeur $1$",
            "$+\\infty$ : demi-tangente verticale",
            "$-\\infty$ : demi-tangente verticale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le taux tend vers $+\\infty$ : $f$ n'est pas dérivable à droite en $0$ et la courbe admet une demi-tangente verticale au point d'abscisse $0$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p01_q5",
          "type": "mcq",
          "prompt": "Sur quel intervalle la fonction $x \\mapsto \\sqrt{x}$ est-elle dérivable ?",
          "options": [
            "Sur $\\mathbb{R}$",
            "Sur $[0 ; +\\infty[$",
            "Sur $]0 ; +\\infty[$",
            "Sur $\\mathbb{R}^*$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La fonction racine carrée est dérivable sur $]0 ; +\\infty[$ ; en $0$, le taux d'accroissement tend vers $+\\infty$ (demi-tangente verticale)."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p01_q6",
          "type": "mcq",
          "prompt": "Pour la fonction de l'exercice corrigé, on a $f_g'(-1) = 2$ et $f_d'(-1) = 2$. Que conclut-on ?",
          "options": [
            "$f$ n'est pas dérivable en $-1$",
            "$f$ est dérivable en $-1$ et $f'(-1) = 2$",
            "$f$ est dérivable en $-1$ et $f'(-1) = 0$",
            "$f$ n'est pas continue en $-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les nombres dérivés à gauche et à droite sont égaux (2) : $f$ est dérivable en $-1$ et $f'(-1) = 2$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l03_derivabilite_p02",
      "order": 2,
      "title": "Dérivée d'une fonction composée",
      "summary": "La dérivée d'une composée est le produit des dérivées : on dérive l'extérieure en l'intérieure, puis on multiplie par la dérivée de l'intérieure.",
      "conceptExplanation": "Soit $K$ un intervalle ouvert, $f$ et $g$ deux fonctions telles que $f \\circ g$ est définie sur $K$, et $x_0 \\in K$.\nSi $g$ est dérivable en $x_0$ et $f$ dérivable en $g(x_0)$, alors $f \\circ g$ est dérivable en $x_0$ et $(f \\circ g)'(x_0) = g'(x_0) \\times f'(g(x_0))$.\nConséquences (pour $u$ dérivable sur un intervalle $K$) :\n• $(u^n)' = n u' u^{n-1}$ (avec $n \\in \\mathbb{Q}^*$) ;\n• $(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$ (avec $u > 0$ sur $K$) ;\n• $(\\cos u)' = -u' \\sin u$ ;\n• $(\\sin u)' = u' \\cos u$ ;\n• $(\\tan u)' = u' \\times (1 + \\tan^2 u)$ ou $\\frac{u'}{\\cos^2 u}$ (avec $\\cos u \\neq 0$ sur $K$).",
      "keyRule": "Dérivée d'une composée : on multiplie la dérivée de l'extérieure (évaluée en l'intérieure) par la dérivée de l'intérieure.",
      "formulas": [
        {
          "name": "Dérivée d'une composée",
          "formula": "(f \\circ g)'(x_0) = g'(x_0) \\times f'(g(x_0))",
          "note": "g dérivable en x0 et f dérivable en g(x0)."
        },
        {
          "name": "Dérivées usuelles composées",
          "formula": "(u^n)' = n u' u^{n-1},\\ (\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}},\\ (\\cos u)' = -u' \\sin u,\\ (\\sin u)' = u' \\cos u",
          "note": "u est une fonction dérivable ; pour racine u, il faut u > 0."
        }
      ],
      "workedExample": {
        "title": "Calculer $(f \\circ g)'(3)$",
        "statement": "Soient $f(x) = \\frac{3-x}{x-2}$ et $g(x) = x - \\frac{1}{x} + 2$. Démontre que $f \\circ g$ est dérivable en $3$ et calcule $(f \\circ g)'(3)$.",
        "methodSteps": [
          "$g$ est dérivable en $3$ et $g(3) = 3 - \\frac{1}{3} + 2 = \\frac{14}{3} \\neq 2$, donc $f$ est dérivable en $g(3)$ : $f \\circ g$ est dérivable en $3$.",
          "Pour $x \\neq 0$, $g'(x) = 1 + \\frac{1}{x^2}$ donc $g'(3) = \\frac{10}{9}$.",
          "Pour $x \\neq 2$, $f'(x) = \\frac{-1}{(x-2)^2}$ donc $f'(\\frac{14}{3}) = \\frac{-9}{64}$.",
          "Donc $(f \\circ g)'(3) = g'(3) \\times f'(g(3)) = \\frac{10}{9} \\times \\frac{-9}{64} = \\frac{-5}{32}$."
        ],
        "conclusion": "$(f \\circ g)'(3) = -\\frac{5}{32}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule de dérivation",
          "stepTheme": "La formule de dérivation",
          "stepBadge": "La formule de dérivation",
          "paragraphText": "• Si $g$ est dérivable en $x_0$ et $f$ dérivable en $g(x_0)$, alors $(f \\circ g)'(x_0) = g'(x_0) \\times f'(g(x_0))$.\nOn dérive l'extérieure $f$ en la valeur $g(x_0)$, puis on multiplie par la dérivée de l'intérieure $g$ en $x_0$.\nL'ordre compte : on n'oublie jamais le facteur $g'(x_0)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p02_q1",
            "type": "mcq",
            "prompt": "Que vaut $(f \\circ g)'(x_0)$ quand $g$ est dérivable en $x_0$ et $f$ dérivable en $g(x_0)$ ?",
            "options": [
              "$f'(x_0) \\times g'(x_0)$",
              "$g'(x_0) \\times f'(g(x_0))$",
              "$f'(g(x_0))$ seulement",
              "$g'(x_0)$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La dérivée d'une composée est $(f \\circ g)'(x_0) = g'(x_0) \\times f'(g(x_0))$ : on évalue $f'$ en $g(x_0)$ puis on multiplie par $g'(x_0)$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les puissances et la racine",
          "stepTheme": "Les puissances et la racine",
          "stepBadge": "Les puissances et la racine",
          "paragraphText": "• $(u^n)' = n u' u^{n-1}$ et $(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$ (avec $u > 0$).\nExemple : pour $f(x) = (x^2 - 3x + 1)^5$, on a $f'(x) = 5(2x - 3)(x^2 - 3x + 1)^4$.\nExemple : pour $f(x) = \\sqrt{x^2 + 3x + 5}$, on a $f'(x) = \\frac{2x+3}{2\\sqrt{x^2+3x+5}}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p02_q2",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de $f(x) = (x^2 - 3x + 1)^5$ ?",
            "options": [
              "$5(x^2 - 3x + 1)^4$",
              "$5(2x - 3)(x^2 - 3x + 1)^4$",
              "$(2x - 3)(x^2 - 3x + 1)^4$",
              "$5(2x - 3)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $(u^5)' = 5u'u^4$ et $u = x^2 - 3x + 1$, $u' = 2x - 3$ : $f'(x) = 5(2x - 3)(x^2 - 3x + 1)^4$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les fonctions trigonométriques composées",
          "stepTheme": "Les fonctions trigonométriques composées",
          "stepBadge": "Les fonctions trigonométriques composées",
          "paragraphText": "• $(\\cos u)' = -u' \\sin u$ et $(\\sin u)' = u' \\cos u$ ; $(\\tan u)' = u'(1 + \\tan^2 u)$.\nExemple : pour $f(x) = \\cos(x^2)$, on a $f'(x) = -2x \\sin(x^2)$.\nExemple : pour $f(x) = \\sin(\\sin x)$, on a $f'(x) = \\cos x \\times \\cos(\\sin x)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p02_q3",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de $f(x) = \\cos(x^2)$ ?",
            "options": [
              "$-\\sin(x^2)$",
              "$-2x \\sin(x^2)$",
              "$2x \\sin(x^2)$",
              "$-\\sin(2x)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $(\\cos u)' = -u' \\sin u$ et $u = x^2$, $u' = 2x$ : $f'(x) = -2x \\sin(x^2)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La fonction $(4x-1)\\sqrt{4x-1}$",
          "stepTheme": "La fonction $(4x-1)\\sqrt{4x-1}$",
          "stepBadge": "La fonction $(4x-1)\\sqrt{4x-1}$",
          "paragraphText": "• Soit $f(x) = (4x-1)\\sqrt{4x-1}$ sur $[\\frac{1}{4} ; +\\infty[$.\n$f$ est dérivable en $\\frac{1}{4}$ et $f'(\\frac{1}{4}) = 0$.\nPour $x > \\frac{1}{4}$, $f'(x) = 6\\sqrt{4x-1}$ : on peut le voir en écrivant $f(x) = (4x-1)^{\\frac{3}{2}}$, donc $f'(x) = \\frac{3}{2} \\times 4 \\times (4x-1)^{\\frac{1}{2}} = 6\\sqrt{4x-1}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p02_q4",
            "type": "mcq",
            "prompt": "Pour $f(x) = (4x-1)\\sqrt{4x-1}$ et $x > \\frac{1}{4}$, que vaut $f'(x)$ ?",
            "options": [
              "$4\\sqrt{4x-1}$",
              "$6\\sqrt{4x-1}$",
              "$\\frac{3}{2}\\sqrt{4x-1}$",
              "$12\\sqrt{4x-1}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f(x) = (4x-1)^{\\frac{3}{2}}$ donc $f'(x) = \\frac{3}{2} \\times 4 \\times (4x-1)^{\\frac{1}{2}} = 6\\sqrt{4x-1}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La fonction $\\frac{x}{\\sqrt{x^2+1}}$",
          "stepTheme": "La fonction $\\frac{x}{\\sqrt{x^2+1}}$",
          "stepBadge": "La fonction $\\frac{x}{\\sqrt{x^2+1}}$",
          "paragraphText": "• Pour $f(x) = \\frac{x}{\\sqrt{x^2+1}}$, on dérive un quotient dont le dénominateur est une composée.\nOn obtient $f'(x) = \\frac{1}{(x^2+1)\\sqrt{x^2+1}}$.\nLe numérateur se simplifie : $(x^2+1) - x^2 = 1$, d'où ce résultat simple.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p02_q5",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de $f(x) = \\frac{x}{\\sqrt{x^2+1}}$ ?",
            "options": [
              "$\\frac{1}{\\sqrt{x^2+1}}$",
              "$\\frac{1}{(x^2+1)\\sqrt{x^2+1}}$",
              "$\\frac{x}{(x^2+1)\\sqrt{x^2+1}}$",
              "$\\frac{1}{x^2+1}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En dérivant le quotient, le numérateur devient $(x^2+1) - x^2 = 1$ : $f'(x) = \\frac{1}{(x^2+1)\\sqrt{x^2+1}}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier le facteur intérieur",
          "stepTheme": "Ne pas oublier le facteur intérieur",
          "stepBadge": "Ne pas oublier le facteur intérieur",
          "paragraphText": "• Piège classique : dériver l'extérieure sans multiplier par la dérivée de l'intérieure.\nPour $f(x) = \\sin(\\sin x)$, la bonne dérivée est $f'(x) = \\cos x \\times \\cos(\\sin x)$ : le facteur $\\cos x$ est la dérivée de l'intérieure $\\sin x$.\nPour $f(x) = \\sqrt{x^2+3x+5}$, le facteur $2x+3$ au numérateur est la dérivée de l'intérieure.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p02_q6",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de $f(x) = \\sin(\\sin x)$ ?",
            "options": [
              "$\\cos(\\sin x)$",
              "$\\cos x \\times \\cos(\\sin x)$",
              "$-\\sin x \\times \\cos(\\sin x)$",
              "$\\cos x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On dérive l'extérieure ($\\cos(\\sin x)$) puis on multiplie par la dérivée de l'intérieure ($\\cos x$) : $f'(x) = \\cos x \\times \\cos(\\sin x)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p02_q1",
          "type": "mcq",
          "prompt": "Que vaut $(f \\circ g)'(x_0)$ quand $g$ est dérivable en $x_0$ et $f$ dérivable en $g(x_0)$ ?",
          "options": [
            "$f'(x_0) \\times g'(x_0)$",
            "$g'(x_0) \\times f'(g(x_0))$",
            "$f'(g(x_0))$ seulement",
            "$g'(x_0)$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La dérivée d'une composée est $(f \\circ g)'(x_0) = g'(x_0) \\times f'(g(x_0))$ : on évalue $f'$ en $g(x_0)$ puis on multiplie par $g'(x_0)$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p02_q2",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de $f(x) = (x^2 - 3x + 1)^5$ ?",
          "options": [
            "$5(x^2 - 3x + 1)^4$",
            "$5(2x - 3)(x^2 - 3x + 1)^4$",
            "$(2x - 3)(x^2 - 3x + 1)^4$",
            "$5(2x - 3)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $(u^5)' = 5u'u^4$ et $u = x^2 - 3x + 1$, $u' = 2x - 3$ : $f'(x) = 5(2x - 3)(x^2 - 3x + 1)^4$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p02_q3",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de $f(x) = \\cos(x^2)$ ?",
          "options": [
            "$-\\sin(x^2)$",
            "$-2x \\sin(x^2)$",
            "$2x \\sin(x^2)$",
            "$-\\sin(2x)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $(\\cos u)' = -u' \\sin u$ et $u = x^2$, $u' = 2x$ : $f'(x) = -2x \\sin(x^2)$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p02_q4",
          "type": "mcq",
          "prompt": "Pour $f(x) = (4x-1)\\sqrt{4x-1}$ et $x > \\frac{1}{4}$, que vaut $f'(x)$ ?",
          "options": [
            "$4\\sqrt{4x-1}$",
            "$6\\sqrt{4x-1}$",
            "$\\frac{3}{2}\\sqrt{4x-1}$",
            "$12\\sqrt{4x-1}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f(x) = (4x-1)^{\\frac{3}{2}}$ donc $f'(x) = \\frac{3}{2} \\times 4 \\times (4x-1)^{\\frac{1}{2}} = 6\\sqrt{4x-1}$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p02_q5",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de $f(x) = \\frac{x}{\\sqrt{x^2+1}}$ ?",
          "options": [
            "$\\frac{1}{\\sqrt{x^2+1}}$",
            "$\\frac{1}{(x^2+1)\\sqrt{x^2+1}}$",
            "$\\frac{x}{(x^2+1)\\sqrt{x^2+1}}$",
            "$\\frac{1}{x^2+1}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En dérivant le quotient, le numérateur devient $(x^2+1) - x^2 = 1$ : $f'(x) = \\frac{1}{(x^2+1)\\sqrt{x^2+1}}$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p02_q6",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de $f(x) = \\sin(\\sin x)$ ?",
          "options": [
            "$\\cos(\\sin x)$",
            "$\\cos x \\times \\cos(\\sin x)$",
            "$-\\sin x \\times \\cos(\\sin x)$",
            "$\\cos x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On dérive l'extérieure ($\\cos(\\sin x)$) puis on multiplie par la dérivée de l'intérieure ($\\cos x$) : $f'(x) = \\cos x \\times \\cos(\\sin x)$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l03_derivabilite_p03",
      "order": 3,
      "title": "Dérivabilité de la bijection réciproque et dérivées successives",
      "summary": "La dérivée de la réciproque est l'inverse de la dérivée ; on peut dériver plusieurs fois de suite.",
      "conceptExplanation": "Soit $K$ un intervalle, $f$ une fonction dérivable et strictement monotone sur $K$, $x_0 \\in K$ et $y_0 = f(x_0)$.\nSi $f'(x_0) \\neq 0$, alors la bijection réciproque $f^{-1}$ de $f$ est dérivable en $y_0$ et $(f^{-1})'(y_0) = \\frac{1}{f'(f^{-1}(y_0))} = \\frac{1}{f'(x_0)}$.\nPoint méthode : pour calculer le nombre dérivé de $f^{-1}$ en $y_0$, on détermine $x_0$ tel que $f(x_0) = y_0$ ; on calcule $f'(x_0)$ et on vérifie que $f'(x_0) \\neq 0$ ; on conclut que $f^{-1}$ est dérivable en $y_0$ ; on calcule enfin $(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$.\nDérivées successives : si $f$ est dérivable sur $K$, sa dérivée $f'$ est la dérivée première de $f$ ; si $f'$ est dérivable sur $K$, sa dérivée $f''$ est la dérivée seconde ; de proche en proche, la dérivée d'ordre $n$ se note $f^{(n)}$.",
      "keyRule": "Dérivée de la réciproque : on inverse la dérivée. Pour la calculer, on cherche d'abord l'antécédent.",
      "formulas": [
        {
          "name": "Dérivée de la bijection réciproque",
          "formula": "(f^{-1})'(y_0) = \\frac{1}{f'(x_0)} \\quad \\text{avec } y_0 = f(x_0),\\ f'(x_0) \\neq 0",
          "note": "f doit être dérivable et strictement monotone."
        }
      ],
      "workedExample": {
        "title": "La dérivée de la réciproque de $x^2 - x$",
        "statement": "Soit $f(x) = x^2 - x$. On admet que $f$ réalise une bijection de $]-\\infty ; \\frac{1}{2}]$ sur $[-\\frac{1}{4} ; +\\infty[$. Soit $g$ la restriction de $f$ à $]-\\infty ; \\frac{1}{2}]$. Démontre que $g^{-1}$ est dérivable en $2$ et calcule $(g^{-1})'(2)$.",
        "methodSteps": [
          "On résout $g(x) = 2$ pour $x \\in ]-\\infty ; \\frac{1}{2}]$ : on trouve $x = -1$, donc $g(-1) = 2$.",
          "$g'(x) = 2x - 1$, donc $g'(-1) = -3 \\neq 0$ : $g^{-1}$ est dérivable en $2$.",
          "On conclut : $(g^{-1})'(2) = \\frac{1}{g'(-1)} = \\frac{1}{-3} = -\\frac{1}{3}$."
        ],
        "conclusion": "$(g^{-1})'(2) = -\\frac{1}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule de la réciproque",
          "stepTheme": "La formule de la réciproque",
          "stepBadge": "La formule de la réciproque",
          "paragraphText": "• Si $f$ est dérivable et strictement monotone sur $K$, $x_0 \\in K$, $y_0 = f(x_0)$ et $f'(x_0) \\neq 0$, alors $f^{-1}$ est dérivable en $y_0$ et $(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$.\nLa dérivée de la réciproque est l'inverse de la dérivée de la fonction : c'est la symétrie par rapport à $y = x$ qui inverse les pentes.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p03_q1",
            "type": "mcq",
            "prompt": "On a $f(x_0) = y_0$ et $f'(x_0) = 4$. Que vaut $(f^{-1})'(y_0)$ ?",
            "options": [
              "$4$",
              "$\\frac{1}{4}$",
              "$-4$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(f^{-1})'(y_0) = \\frac{1}{f'(x_0)} = \\frac{1}{4}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La méthode en quatre étapes",
          "stepTheme": "La méthode en quatre étapes",
          "stepBadge": "La méthode en quatre étapes",
          "paragraphText": "• Pour calculer $(f^{-1})'(y_0)$ : on détermine $x_0$ tel que $f(x_0) = y_0$ ; on calcule $f'(x_0)$ et on vérifie qu'il est non nul ; on conclut que $f^{-1}$ est dérivable en $y_0$ ; on calcule $(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$.\nExemple : pour $g(x) = x^2 - x$, $g(-1) = 2$ et $g'(-1) = -3$, donc $(g^{-1})'(2) = \\frac{1}{-3} = -\\frac{1}{3}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p03_q2",
            "type": "mcq",
            "prompt": "Pour $g(x) = x^2 - x$, on a $g(-1) = 2$ et $g'(-1) = -3$. Que vaut $(g^{-1})'(2)$ ?",
            "options": [
              "$-3$",
              "$-\\frac{1}{3}$",
              "$\\frac{1}{3}$",
              "$3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(g^{-1})'(2) = \\frac{1}{g'(-1)} = \\frac{1}{-3} = -\\frac{1}{3}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La dérivée de Arctan",
          "stepTheme": "La dérivée de Arctan",
          "stepBadge": "La dérivée de Arctan",
          "paragraphText": "• Soit $f(x) = \\tan x$ sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$ et $\\varphi$ sa bijection réciproque (la fonction Arctan).\nComme $f'(x) = 1 + \\tan^2 x = 1 + f(x)^2$, on a $\\varphi'(x) = \\frac{1}{1 + x^2}$ pour tout $x \\in \\mathbb{R}$.\nDe plus, pour $x > 0$, $\\varphi(x) + \\varphi(\\frac{1}{x}) = \\frac{\\pi}{2}$ et pour $x < 0$, $\\varphi(x) + \\varphi(\\frac{1}{x}) = -\\frac{\\pi}{2}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p03_q3",
            "type": "mcq",
            "prompt": "Soit $\\varphi$ la réciproque de $\\tan$ sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$. Que vaut $\\varphi'(x)$ pour tout $x \\in \\mathbb{R}$ ?",
            "options": [
              "$1 + x^2$",
              "$\\frac{1}{1+x^2}$",
              "$1 - x^2$",
              "$\\frac{1}{1-x^2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\varphi'(x) = \\frac{1}{f'(\\varphi(x))} = \\frac{1}{1 + \\tan^2(\\varphi(x))} = \\frac{1}{1+x^2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les dérivées successives",
          "stepTheme": "Les dérivées successives",
          "stepBadge": "Les dérivées successives",
          "paragraphText": "• Si $f$ est dérivable, sa dérivée $f'$ est la dérivée première. Si $f'$ est dérivable, sa dérivée $f''$ est la dérivée seconde. De proche en proche, la dérivée d'ordre $n$ se note $f^{(n)}$.\nExemple : pour $f(x) = x^3 - 2x^2 + 3$ : $f'(x) = 3x^2 - 4x$, $f''(x) = 6x - 4$, $f^{(3)}(x) = 6$, $f^{(4)}(x) = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p03_q4",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^3 - 2x^2 + 3$, que vaut $f''(x)$ ?",
            "options": [
              "$3x^2 - 4x$",
              "$6x - 4$",
              "$6$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f'(x) = 3x^2 - 4x$ puis $f''(x) = 6x - 4$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les dérivées successives du cosinus",
          "stepTheme": "Les dérivées successives du cosinus",
          "stepBadge": "Les dérivées successives du cosinus",
          "paragraphText": "• Pour tout entier naturel $n$ et tout $x \\in \\mathbb{R}$ : $\\cos^{(n)}(x) = \\cos(x + n\\frac{\\pi}{2})$.\nOn le démontre par récurrence : $\\cos^{(0)}(x) = \\cos x$ ; si $\\cos^{(k)}(x) = \\cos(x + k\\frac{\\pi}{2})$, alors $\\cos^{(k+1)}(x) = -\\sin(x + k\\frac{\\pi}{2}) = \\cos(x + k\\frac{\\pi}{2} + \\frac{\\pi}{2}) = \\cos(x + (k+1)\\frac{\\pi}{2})$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p03_q5",
            "type": "mcq",
            "prompt": "Que vaut la dérivée seconde de $\\cos x$ ?",
            "options": [
              "$\\cos x$",
              "$-\\cos x$",
              "$\\sin x$",
              "$-\\sin x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\cos^{(2)}(x) = \\cos(x + 2 \\times \\frac{\\pi}{2}) = \\cos(x + \\pi) = -\\cos x$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La condition $f'(x_0) \\neq 0$",
          "stepTheme": "La condition $f'(x_0) \\neq 0$",
          "stepBadge": "La condition $f'(x_0) \\neq 0$",
          "paragraphText": "• La formule $(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$ exige $f'(x_0) \\neq 0$ : on ne divise pas par zéro.\nSi $f'(x_0) = 0$, la réciproque n'est pas dérivable en $y_0$ (sa courbe a une tangente verticale).\nExemple : pour $f(x) = \\sqrt{\\frac{1-x}{1+x}}$, on a $f(0) = 1$ et $f'(0) = -1 \\neq 0$, donc $f^{-1}$ est dérivable en $1$ et $(f^{-1})'(1) = \\frac{1}{-1} = -1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p03_q6",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\sqrt{\\frac{1-x}{1+x}}$, on a $f(0) = 1$ et $f'(0) = -1$. Que vaut $(f^{-1})'(1)$ ?",
            "options": [
              "$1$",
              "$-1$",
              "$0$",
              "$f^{-1}$ n'est pas dérivable en $1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(f^{-1})'(1) = \\frac{1}{f'(0)} = \\frac{1}{-1} = -1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p03_q1",
          "type": "mcq",
          "prompt": "On a $f(x_0) = y_0$ et $f'(x_0) = 4$. Que vaut $(f^{-1})'(y_0)$ ?",
          "options": [
            "$4$",
            "$\\frac{1}{4}$",
            "$-4$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(f^{-1})'(y_0) = \\frac{1}{f'(x_0)} = \\frac{1}{4}$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p03_q2",
          "type": "mcq",
          "prompt": "Pour $g(x) = x^2 - x$, on a $g(-1) = 2$ et $g'(-1) = -3$. Que vaut $(g^{-1})'(2)$ ?",
          "options": [
            "$-3$",
            "$-\\frac{1}{3}$",
            "$\\frac{1}{3}$",
            "$3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(g^{-1})'(2) = \\frac{1}{g'(-1)} = \\frac{1}{-3} = -\\frac{1}{3}$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p03_q3",
          "type": "mcq",
          "prompt": "Soit $\\varphi$ la réciproque de $\\tan$ sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$. Que vaut $\\varphi'(x)$ pour tout $x \\in \\mathbb{R}$ ?",
          "options": [
            "$1 + x^2$",
            "$\\frac{1}{1+x^2}$",
            "$1 - x^2$",
            "$\\frac{1}{1-x^2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\varphi'(x) = \\frac{1}{f'(\\varphi(x))} = \\frac{1}{1 + \\tan^2(\\varphi(x))} = \\frac{1}{1+x^2}$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p03_q4",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^3 - 2x^2 + 3$, que vaut $f''(x)$ ?",
          "options": [
            "$3x^2 - 4x$",
            "$6x - 4$",
            "$6$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f'(x) = 3x^2 - 4x$ puis $f''(x) = 6x - 4$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p03_q5",
          "type": "mcq",
          "prompt": "Que vaut la dérivée seconde de $\\cos x$ ?",
          "options": [
            "$\\cos x$",
            "$-\\cos x$",
            "$\\sin x$",
            "$-\\sin x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\cos^{(2)}(x) = \\cos(x + 2 \\times \\frac{\\pi}{2}) = \\cos(x + \\pi) = -\\cos x$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p03_q6",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\sqrt{\\frac{1-x}{1+x}}$, on a $f(0) = 1$ et $f'(0) = -1$. Que vaut $(f^{-1})'(1)$ ?",
          "options": [
            "$1$",
            "$-1$",
            "$0$",
            "$f^{-1}$ n'est pas dérivable en $1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(f^{-1})'(1) = \\frac{1}{f'(0)} = \\frac{1}{-1} = -1$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l03_derivabilite_p04",
      "order": 4,
      "title": "Inégalités des accroissements finis",
      "summary": "Quand la dérivée est encadrée, l'accroissement de la fonction est encadré de la même façon.",
      "conceptExplanation": "Propriété 1 : soit $a$ et $b$ deux nombres réels tels que $a < b$ et $f$ une fonction dérivable sur $[a ; b]$.\nS'il existe deux nombres réels $m$ et $M$ tels que, pour tout $x \\in [a ; b]$, $m \\leq f'(x) \\leq M$, alors $m(b-a) \\leq f(b) - f(a) \\leq M(b-a)$.\nPropriété 2 : soit $f$ une fonction dérivable sur un intervalle $I$. S'il existe un nombre réel $M$ tel que, pour tout $x \\in I$, $|f'(x)| \\leq M$, alors pour tous nombres réels $a$ et $b$ de $I$, on a $|f(b) - f(a)| \\leq M|b-a|$.\nL'idée : la dérivée est la vitesse ; si la vitesse est bornée, le déplacement est borné par la vitesse maximale multipliée par le temps.",
      "keyRule": "Dérivée encadrée entre m et M : l'accroissement est encadré entre m(b−a) et M(b−a).",
      "formulas": [
        {
          "name": "Inégalité des accroissements finis",
          "formula": "m \\leq f'(x) \\leq M \\text{ sur } [a ; b] \\Rightarrow m(b-a) \\leq f(b) - f(a) \\leq M(b-a)",
          "note": "f doit être dérivable sur [a ; b]."
        },
        {
          "name": "Inégalité des accroissements finis (valeur absolue)",
          "formula": "|f'(x)| \\leq M \\text{ sur } I \\Rightarrow |f(b) - f(a)| \\leq M|b-a|",
          "note": "Pour tous a et b de I."
        }
      ],
      "workedExample": {
        "title": "Encadrer $\\sqrt{19} - \\sqrt{17}$",
        "statement": "Justifie que $\\frac{1}{\\sqrt{19}} \\leq \\sqrt{19} - \\sqrt{17} \\leq \\frac{1}{\\sqrt{17}}$.",
        "methodSteps": [
          "On pose $f(x) = \\sqrt{x}$, dérivable sur $[17 ; 19]$, avec $f'(x) = \\frac{1}{2\\sqrt{x}}$.",
          "Pour $x \\in [17 ; 19]$, $\\sqrt{17} \\leq \\sqrt{x} \\leq \\sqrt{19}$, donc $\\frac{1}{2\\sqrt{19}} \\leq f'(x) \\leq \\frac{1}{2\\sqrt{17}}$.",
          "Par l'inégalité des accroissements finis : $\\frac{1}{2\\sqrt{19}} \\times 2 \\leq f(19) - f(17) \\leq \\frac{1}{2\\sqrt{17}} \\times 2$.",
          "Donc $\\frac{1}{\\sqrt{19}} \\leq \\sqrt{19} - \\sqrt{17} \\leq \\frac{1}{\\sqrt{17}}$."
        ],
        "conclusion": "L'encadrement est démontré grâce à l'inégalité des accroissements finis."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La première inégalité",
          "stepTheme": "La première inégalité",
          "stepBadge": "La première inégalité",
          "paragraphText": "• Si $m \\leq f'(x) \\leq M$ sur $[a ; b]$, alors $m(b-a) \\leq f(b) - f(a) \\leq M(b-a)$.\nOn multiplie l'encadrement de la dérivée par la longueur de l'intervalle $b - a$ (positive).\nC'est l'inégalité des accroissements finis : elle encadre l'accroissement de $f$ par les bornes de sa dérivée.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p04_q1",
            "type": "mcq",
            "prompt": "Sur $[a ; b]$, on a $2 \\leq f'(x) \\leq 5$ et $b - a = 3$. Quel encadrement de $f(b) - f(a)$ obtient-on ?",
            "options": [
              "$2 \\leq f(b) - f(a) \\leq 5$",
              "$6 \\leq f(b) - f(a) \\leq 15$",
              "$3 \\leq f(b) - f(a) \\leq 8$",
              "$0 \\leq f(b) - f(a) \\leq 3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par l'inégalité des accroissements finis : $2 \\times 3 \\leq f(b) - f(a) \\leq 5 \\times 3$, soit $6 \\leq f(b) - f(a) \\leq 15$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Encadrer $\\sqrt{19} - \\sqrt{17}$",
          "stepTheme": "Encadrer $\\sqrt{19} - \\sqrt{17}$",
          "stepBadge": "Encadrer $\\sqrt{19} - \\sqrt{17}$",
          "paragraphText": "• Pour $f(x) = \\sqrt{x}$ sur $[17 ; 19]$, on a $f'(x) = \\frac{1}{2\\sqrt{x}}$ et $\\frac{1}{2\\sqrt{19}} \\leq f'(x) \\leq \\frac{1}{2\\sqrt{17}}$.\nL'inégalité des accroissements finis donne $\\frac{1}{2\\sqrt{19}} \\times 2 \\leq \\sqrt{19} - \\sqrt{17} \\leq \\frac{1}{2\\sqrt{17}} \\times 2$.\nDonc $\\frac{1}{\\sqrt{19}} \\leq \\sqrt{19} - \\sqrt{17} \\leq \\frac{1}{\\sqrt{17}}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p04_q2",
            "type": "mcq",
            "prompt": "Que vaut l'encadrement de $\\sqrt{19} - \\sqrt{17}$ obtenu par l'inégalité des accroissements finis ?",
            "options": [
              "$\\frac{1}{\\sqrt{19}} \\leq \\sqrt{19} - \\sqrt{17} \\leq \\frac{1}{\\sqrt{17}}$",
              "$\\frac{1}{\\sqrt{17}} \\leq \\sqrt{19} - \\sqrt{17} \\leq \\frac{1}{\\sqrt{19}}$",
              "$0 \\leq \\sqrt{19} - \\sqrt{17} \\leq 2$",
              "$1 \\leq \\sqrt{19} - \\sqrt{17} \\leq 2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $f(x) = \\sqrt{x}$ et $\\frac{1}{2\\sqrt{19}} \\leq f'(x) \\leq \\frac{1}{2\\sqrt{17}}$, on obtient $\\frac{1}{\\sqrt{19}} \\leq \\sqrt{19} - \\sqrt{17} \\leq \\frac{1}{\\sqrt{17}}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La seconde inégalité",
          "stepTheme": "La seconde inégalité",
          "stepBadge": "La seconde inégalité",
          "paragraphText": "• Si $|f'(x)| \\leq M$ sur un intervalle $I$, alors $|f(b) - f(a)| \\leq M|b-a|$ pour tous $a$ et $b$ de $I$.\nC'est la version « valeur absolue » : elle borne l'écart entre deux images par $M$ fois l'écart entre les antécédents.\nOn l'utilise pour montrer qu'une fonction est lipschitzienne ou pour majorer une différence.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p04_q3",
            "type": "mcq",
            "prompt": "On sait que $|f'(x)| \\leq 2$ sur $\\mathbb{R}$. Que peut-on dire de $|f(5) - f(2)|$ ?",
            "options": [
              "$|f(5) - f(2)| \\leq 2$",
              "$|f(5) - f(2)| \\leq 6$",
              "$|f(5) - f(2)| \\leq 10$",
              "$|f(5) - f(2)| = 6$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par l'inégalité des accroissements finis : $|f(5) - f(2)| \\leq 2 \\times |5 - 2| = 6$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le cosinus est 1-lipschitzien",
          "stepTheme": "Le cosinus est 1-lipschitzien",
          "stepBadge": "Le cosinus est 1-lipschitzien",
          "paragraphText": "• Pour $f(t) = \\cos t$, on a $f'(t) = -\\sin t$ et $|f'(t)| \\leq 1$ pour tout $t$.\nPar l'inégalité des accroissements finis, pour tous $x$ et $y$ : $|\\cos x - \\cos y| \\leq 1 \\times |x - y|$.\nDonc $|\\cos x - \\cos y| \\leq |x - y|$ : le cosinus ne varie jamais plus vite que la variable.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p04_q4",
            "type": "mcq",
            "prompt": "Que vaut la majoration de $|\\cos x - \\cos y|$ par l'inégalité des accroissements finis ?",
            "options": [
              "$|\\cos x - \\cos y| \\leq 2|x - y|$",
              "$|\\cos x - \\cos y| \\leq |x - y|$",
              "$|\\cos x - \\cos y| \\leq |x + y|$",
              "$|\\cos x - \\cos y| \\leq 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Comme $|(\\cos)'(t)| = |{-\\sin t}| \\leq 1$, on a $|\\cos x - \\cos y| \\leq 1 \\times |x - y| = |x - y|$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Encadrer une valeur avec l'IAF",
          "stepTheme": "Encadrer une valeur avec l'IAF",
          "stepBadge": "Encadrer une valeur avec l'IAF",
          "paragraphText": "• Exercice du cours : $k$ est dérivable sur $[a ; b]$ et $|k'(x)| < 0{,}2$ pour tout $x \\in [a ; b]$.\nPar l'inégalité des accroissements finis, $|k(b) - k(a)| < 0{,}2(b-a)$.\nDonc $k(b) \\in ]k(a) - 0{,}2(b-a) ; k(a) + 0{,}2(b-a)[$ : la valeur $k(b)$ est encadrée autour de $k(a)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p04_q5",
            "type": "mcq",
            "prompt": "Si $|k'(x)| < 0{,}2$ sur $[a ; b]$, dans quel intervalle se trouve $k(b)$ ?",
            "options": [
              "$]k(a) - 0{,}2 ; k(a) + 0{,}2[$",
              "$]k(a) - 0{,}2(b-a) ; k(a) + 0{,}2(b-a)[$",
              "$[k(a) ; k(a) + 0{,}2(b-a)]$",
              "$]k(a) ; k(a) + 0{,}2[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$|k(b) - k(a)| < 0{,}2(b-a)$, donc $k(b) \\in ]k(a) - 0{,}2(b-a) ; k(a) + 0{,}2(b-a)[$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'IAF ne donne pas la valeur exacte",
          "stepTheme": "L'IAF ne donne pas la valeur exacte",
          "stepBadge": "L'IAF ne donne pas la valeur exacte",
          "paragraphText": "• L'inégalité des accroissements finis donne un encadrement, pas une valeur exacte : elle borne l'accroissement, elle ne le calcule pas.\nPour $\\sqrt{19} - \\sqrt{17}$, on obtient un encadrement $\\frac{1}{\\sqrt{19}} \\leq \\sqrt{19} - \\sqrt{17} \\leq \\frac{1}{\\sqrt{17}}$, soit environ $0{,}23 \\leq \\sqrt{19} - \\sqrt{17} \\leq 0{,}24$.\nPiège : ne pas confondre l'encadrement de l'accroissement avec l'accroissement lui-même.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p04_q6",
            "type": "mcq",
            "prompt": "Que donne l'inégalité des accroissements finis pour $f(b) - f(a)$ ?",
            "options": [
              "La valeur exacte de $f(b) - f(a)$",
              "Un encadrement de $f(b) - f(a)$",
              "La valeur de $f'(a)$",
              "Le signe de $f(b) - f(a)$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'IAF donne un encadrement de l'accroissement $f(b) - f(a)$ à partir de l'encadrement de la dérivée, pas sa valeur exacte."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p04_q1",
          "type": "mcq",
          "prompt": "Sur $[a ; b]$, on a $2 \\leq f'(x) \\leq 5$ et $b - a = 3$. Quel encadrement de $f(b) - f(a)$ obtient-on ?",
          "options": [
            "$2 \\leq f(b) - f(a) \\leq 5$",
            "$6 \\leq f(b) - f(a) \\leq 15$",
            "$3 \\leq f(b) - f(a) \\leq 8$",
            "$0 \\leq f(b) - f(a) \\leq 3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par l'inégalité des accroissements finis : $2 \\times 3 \\leq f(b) - f(a) \\leq 5 \\times 3$, soit $6 \\leq f(b) - f(a) \\leq 15$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p04_q2",
          "type": "mcq",
          "prompt": "Que vaut l'encadrement de $\\sqrt{19} - \\sqrt{17}$ obtenu par l'inégalité des accroissements finis ?",
          "options": [
            "$\\frac{1}{\\sqrt{19}} \\leq \\sqrt{19} - \\sqrt{17} \\leq \\frac{1}{\\sqrt{17}}$",
            "$\\frac{1}{\\sqrt{17}} \\leq \\sqrt{19} - \\sqrt{17} \\leq \\frac{1}{\\sqrt{19}}$",
            "$0 \\leq \\sqrt{19} - \\sqrt{17} \\leq 2$",
            "$1 \\leq \\sqrt{19} - \\sqrt{17} \\leq 2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $f(x) = \\sqrt{x}$ et $\\frac{1}{2\\sqrt{19}} \\leq f'(x) \\leq \\frac{1}{2\\sqrt{17}}$, on obtient $\\frac{1}{\\sqrt{19}} \\leq \\sqrt{19} - \\sqrt{17} \\leq \\frac{1}{\\sqrt{17}}$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p04_q3",
          "type": "mcq",
          "prompt": "On sait que $|f'(x)| \\leq 2$ sur $\\mathbb{R}$. Que peut-on dire de $|f(5) - f(2)|$ ?",
          "options": [
            "$|f(5) - f(2)| \\leq 2$",
            "$|f(5) - f(2)| \\leq 6$",
            "$|f(5) - f(2)| \\leq 10$",
            "$|f(5) - f(2)| = 6$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par l'inégalité des accroissements finis : $|f(5) - f(2)| \\leq 2 \\times |5 - 2| = 6$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p04_q4",
          "type": "mcq",
          "prompt": "Que vaut la majoration de $|\\cos x - \\cos y|$ par l'inégalité des accroissements finis ?",
          "options": [
            "$|\\cos x - \\cos y| \\leq 2|x - y|$",
            "$|\\cos x - \\cos y| \\leq |x - y|$",
            "$|\\cos x - \\cos y| \\leq |x + y|$",
            "$|\\cos x - \\cos y| \\leq 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Comme $|(\\cos)'(t)| = |{-\\sin t}| \\leq 1$, on a $|\\cos x - \\cos y| \\leq 1 \\times |x - y| = |x - y|$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p04_q5",
          "type": "mcq",
          "prompt": "Si $|k'(x)| < 0{,}2$ sur $[a ; b]$, dans quel intervalle se trouve $k(b)$ ?",
          "options": [
            "$]k(a) - 0{,}2 ; k(a) + 0{,}2[$",
            "$]k(a) - 0{,}2(b-a) ; k(a) + 0{,}2(b-a)[$",
            "$[k(a) ; k(a) + 0{,}2(b-a)]$",
            "$]k(a) ; k(a) + 0{,}2[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$|k(b) - k(a)| < 0{,}2(b-a)$, donc $k(b) \\in ]k(a) - 0{,}2(b-a) ; k(a) + 0{,}2(b-a)[$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p04_q6",
          "type": "mcq",
          "prompt": "Que donne l'inégalité des accroissements finis pour $f(b) - f(a)$ ?",
          "options": [
            "La valeur exacte de $f(b) - f(a)$",
            "Un encadrement de $f(b) - f(a)$",
            "La valeur de $f'(a)$",
            "Le signe de $f(b) - f(a)$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'IAF donne un encadrement de l'accroissement $f(b) - f(a)$ à partir de l'encadrement de la dérivée, pas sa valeur exacte."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l03_derivabilite_p05",
      "order": 5,
      "title": "Étude de fonctions : variations et asymptotes",
      "summary": "Étudier une fonction, c'est déterminer son domaine, ses limites, sa dérivée, ses variations et ses asymptotes.",
      "conceptExplanation": "Une étude de fonction suit en général ces étapes : déterminer l'ensemble de définition ; étudier la continuité et la dérivabilité (notamment aux points de raccord) ; calculer les limites aux bornes du domaine et en déduire les asymptotes ; calculer la dérivée, étudier son signe et dresser le tableau de variation ; étudier les branches paraboliques et la position par rapport aux asymptotes ; tracer la courbe.\nExemple 1 : $f(x) = x^2 + x$ pour $x < 0$ et $f(x) = \\sqrt{x} - x$ pour $x \\geq 0$. $f$ est continue en $0$ ; $f_g'(0) = 1$ mais $f$ n'est pas dérivable à droite en $0$ (demi-tangente verticale). $\\lim_{x \\to -\\infty} f(x) = +\\infty$ et $\\lim_{x \\to -\\infty} \\frac{f(x)}{x} = -\\infty$ : branche parabolique de direction $(OJ)$ en $-\\infty$. $f$ est strictement croissante sur $[-\\frac{1}{2} ; 0]$ et sur $[0 ; \\frac{1}{4}]$, strictement décroissante sur $]-\\infty ; -\\frac{1}{2}]$ et sur $[\\frac{1}{4} ; +\\infty[$.\nExemple 2 : $h(x) = x + \\sqrt{|x^2 - 1|}$. $h$ admet des demi-tangentes verticales aux points d'abscisses $-1$ et $1$ ; $\\lim_{x \\to -\\infty} h(x) = 0$ (la droite $(OI)$ est asymptote en $-\\infty$) ; $\\lim_{x \\to +\\infty} h(x) = +\\infty$ et $\\lim_{x \\to +\\infty} (h(x) - 2x) = 0$ (la droite $y = 2x$ est asymptote en $+\\infty$) ; $(C)$ est au-dessous de $(D)$ sur $]\\frac{\\sqrt{2}}{2} ; +\\infty[$ ; $h$ est strictement décroissante sur $]-\\infty ; -1[$, strictement croissante sur $]1 ; +\\infty[$, croissante sur $[-1 ; \\frac{\\sqrt{2}}{2}]$ et décroissante sur $[\\frac{\\sqrt{2}}{2} ; 1]$.\nExemple 3 : $f(x) = \\tan(\\frac{\\pi}{2}x)$. $D_f = \\mathbb{R} \\setminus \\{1 + 2k, k \\in \\mathbb{Z}\\}$ ; $f$ est périodique de période $2$ et impaire ; la droite $x = 1$ est asymptote ; $f'(x) = \\frac{\\pi}{2}(1 + \\tan^2(\\frac{\\pi}{2}x)) > 0$ donc $f$ est strictement croissante sur $[0 ; 1[$.",
      "keyRule": "Étude de fonction : domaine, limites, dérivée, signe, tableau de variation, asymptotes, tracé.",
      "formulas": [],
      "workedExample": {
        "title": "Les variations de $f(x) = x^2 + x$ puis $\\sqrt{x} - x$",
        "statement": "Soit $f$ définie par $f(x) = x^2 + x$ si $x < 0$ et $f(x) = \\sqrt{x} - x$ si $x \\geq 0$. Étudie les variations de $f$ sur $]-\\infty ; 0[$ et sur $]0 ; +\\infty[$.",
        "methodSteps": [
          "Pour $x < 0$, $f'(x) = 2x + 1$ : $f'(x) = 0$ pour $x = -\\frac{1}{2}$, $f'(x) > 0$ sur $]-\\frac{1}{2} ; 0[$ et $f'(x) < 0$ sur $]-\\infty ; -\\frac{1}{2}[$.",
          "Donc $f$ est strictement croissante sur $[-\\frac{1}{2} ; 0]$ et strictement décroissante sur $]-\\infty ; -\\frac{1}{2}]$.",
          "Pour $x > 0$, $f'(x) = \\frac{1}{2\\sqrt{x}} - 1 = \\frac{1 - 2\\sqrt{x}}{2\\sqrt{x}}$ : $f'(x) = 0$ pour $x = \\frac{1}{4}$, $f'(x) > 0$ sur $]0 ; \\frac{1}{4}[$ et $f'(x) < 0$ sur $]\\frac{1}{4} ; +\\infty[$.",
          "Donc $f$ est strictement croissante sur $[0 ; \\frac{1}{4}]$ et strictement décroissante sur $[\\frac{1}{4} ; +\\infty[$."
        ],
        "conclusion": "Le tableau de variation de $f$ a deux maximums locaux : $f(-\\frac{1}{2}) = -\\frac{1}{4}$ et $f(\\frac{1}{4}) = \\frac{1}{4}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Les étapes d'une étude de fonction",
          "stepTheme": "Les étapes d'une étude de fonction",
          "stepBadge": "Les étapes d'une étude de fonction",
          "paragraphText": "• Une étude de fonction suit ces étapes : ensemble de définition ; continuité et dérivabilité ; limites aux bornes et asymptotes ; dérivée et son signe ; tableau de variation ; branches paraboliques et position par rapport aux asymptotes ; tracé.\nOn ne saute pas d'étape : chaque étape sert la suivante (la dérivée sert les variations, les limites servent les asymptotes).",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p05_q1",
            "type": "mcq",
            "prompt": "Dans une étude de fonction, à quoi sert l'étude du signe de la dérivée ?",
            "options": [
              "À trouver les asymptotes",
              "À déterminer les variations de la fonction",
              "À trouver l'ensemble de définition",
              "À calculer les limites"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le signe de la dérivée donne les variations : $f' > 0$ sur un intervalle signifie $f$ croissante, $f' < 0$ signifie $f$ décroissante."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La fonction $h(x) = x + \\sqrt{|x^2-1|}$ : les asymptotes",
          "stepTheme": "La fonction $h(x) = x + \\sqrt{|x^2-1|}$ : les asymptotes",
          "stepBadge": "La fonction $h(x) = x + \\sqrt{|x^2-1|}$ : les asymptotes",
          "paragraphText": "• Pour $h(x) = x + \\sqrt{|x^2-1|}$ : $\\lim_{x \\to -\\infty} h(x) = 0$, donc la droite $(OI)$ (l'axe des abscisses) est asymptote à $(C)$ en $-\\infty$.\n$\\lim_{x \\to +\\infty} h(x) = +\\infty$ et $\\lim_{x \\to +\\infty} (h(x) - 2x) = 0$, donc la droite $(D)$ d'équation $y = 2x$ est asymptote à $(C)$ en $+\\infty$.\nDe plus, $(C)$ est au-dessous de $(D)$ sur $]\\frac{\\sqrt{2}}{2} ; +\\infty[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p05_q2",
            "type": "mcq",
            "prompt": "Pour $h(x) = x + \\sqrt{|x^2-1|}$, quelle droite est asymptote à $(C)$ en $+\\infty$ ?",
            "options": [
              "$y = x$",
              "$y = 2x$",
              "$y = 0$",
              "$x = 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\lim_{x \\to +\\infty} (h(x) - 2x) = 0$ : la droite $y = 2x$ est asymptote à $(C)$ en $+\\infty$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les demi-tangentes verticales de $h$",
          "stepTheme": "Les demi-tangentes verticales de $h$",
          "stepBadge": "Les demi-tangentes verticales de $h$",
          "paragraphText": "• Pour $h(x) = x + \\sqrt{|x^2-1|}$, les taux d'accroissement en $-1$ (à gauche) et en $1$ (à droite) tendent vers l'infini.\nDonc $(C)$ admet des demi-tangentes verticales aux points d'abscisses $-1$ et $1$.\nC'est le signe de la racine carrée qui s'annule en ces points : la pente devient infinie.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p05_q3",
            "type": "mcq",
            "prompt": "Pour $h(x) = x + \\sqrt{|x^2-1|}$, qu'admet la courbe $(C)$ aux points d'abscisses $-1$ et $1$ ?",
            "options": [
              "Des tangentes horizontales",
              "Des demi-tangentes verticales",
              "Des asymptotes verticales",
              "Des points d'inflexion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les taux d'accroissement tendent vers l'infini en $-1$ et en $1$ : la courbe admet des demi-tangentes verticales en ces points."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La fonction $\\tan(\\frac{\\pi}{2}x)$",
          "stepTheme": "La fonction $\\tan(\\frac{\\pi}{2}x)$",
          "stepBadge": "La fonction $\\tan(\\frac{\\pi}{2}x)$",
          "paragraphText": "• Soit $f(x) = \\tan(\\frac{\\pi}{2}x)$. Son ensemble de définition est $D_f = \\mathbb{R} \\setminus \\{1 + 2k, k \\in \\mathbb{Z}\\}$.\n$f$ est périodique de période $2$ et impaire ; la droite d'équation $x = 1$ est asymptote à $(C)$.\n$f'(x) = \\frac{\\pi}{2}(1 + \\tan^2(\\frac{\\pi}{2}x)) > 0$ : $f$ est strictement croissante sur $[0 ; 1[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p05_q4",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\tan(\\frac{\\pi}{2}x)$, que vaut $f'(x)$ ?",
            "options": [
              "$\\frac{\\pi}{2}(1 + \\tan^2(\\frac{\\pi}{2}x))$",
              "$1 + \\tan^2(\\frac{\\pi}{2}x)$",
              "$\\frac{\\pi}{2}\\tan(\\frac{\\pi}{2}x)$",
              "$\\frac{\\pi}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $(\\tan u)' = u'(1 + \\tan^2 u)$ et $u = \\frac{\\pi}{2}x$, on a $f'(x) = \\frac{\\pi}{2}(1 + \\tan^2(\\frac{\\pi}{2}x))$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La bijection $k$ et sa réciproque",
          "stepTheme": "La bijection $k$ et sa réciproque",
          "stepBadge": "La bijection $k$ et sa réciproque",
          "paragraphText": "• Soit $k$ la restriction de $h$ à $]-\\infty ; -1]$. $h$ est continue et strictement décroissante sur $]-\\infty ; -1]$, donc $k$ réalise une bijection de $]-\\infty ; -1]$ sur $[-1 ; 0[$.\nOn a $k(-\\sqrt{2}) = 1 - \\sqrt{2}$ et $k'(-\\sqrt{2}) = 1 - \\sqrt{2} \\neq 0$.\nDonc $k^{-1}$ est dérivable en $1 - \\sqrt{2}$ et $(k^{-1})'(1 - \\sqrt{2}) = \\frac{1}{1 - \\sqrt{2}} = -1 - \\sqrt{2}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p05_q5",
            "type": "mcq",
            "prompt": "Pour $k$ la restriction de $h$ à $]-\\infty ; -1]$, on a $k(-\\sqrt{2}) = 1 - \\sqrt{2}$ et $k'(-\\sqrt{2}) = 1 - \\sqrt{2}$. Que vaut $(k^{-1})'(1 - \\sqrt{2})$ ?",
            "options": [
              "$1 - \\sqrt{2}$",
              "$-1 - \\sqrt{2}$",
              "$1 + \\sqrt{2}$",
              "$\\frac{1}{\\sqrt{2}}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(k^{-1})'(1 - \\sqrt{2}) = \\frac{1}{k'(-\\sqrt{2})} = \\frac{1}{1 - \\sqrt{2}} = -1 - \\sqrt{2}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Continuité n'est pas dérivabilité",
          "stepTheme": "Continuité n'est pas dérivabilité",
          "stepBadge": "Continuité n'est pas dérivabilité",
          "paragraphText": "• Une fonction peut être continue en un point sans y être dérivable : c'est le cas de $f(x) = x^2 + x$ ($x < 0$) et $\\sqrt{x} - x$ ($x \\geq 0$) en $0$.\n$f$ est continue en $0$ (les deux limites valent $0 = f(0)$), mais $f_g'(0) = 1$ et $f$ n'est pas dérivable à droite en $0$ (demi-tangente verticale).\nPiège : ne jamais conclure « dérivable » à partir de la seule continuité.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p05_q6",
            "type": "mcq",
            "prompt": "La fonction $f(x) = x^2 + x$ ($x < 0$) et $\\sqrt{x} - x$ ($x \\geq 0$) est continue en $0$. Est-elle dérivable en $0$ ?",
            "options": [
              "Oui, car elle est continue",
              "Non : $f_g'(0) = 1$ et elle n'est pas dérivable à droite en $0$",
              "Oui, avec $f'(0) = 1$",
              "Non, car elle n'est pas continue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La continuité n'implique pas la dérivabilité : ici $f_g'(0) = 1$ mais le taux à droite tend vers $+\\infty$ (demi-tangente verticale), donc $f$ n'est pas dérivable en $0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p05_q1",
          "type": "mcq",
          "prompt": "Dans une étude de fonction, à quoi sert l'étude du signe de la dérivée ?",
          "options": [
            "À trouver les asymptotes",
            "À déterminer les variations de la fonction",
            "À trouver l'ensemble de définition",
            "À calculer les limites"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le signe de la dérivée donne les variations : $f' > 0$ sur un intervalle signifie $f$ croissante, $f' < 0$ signifie $f$ décroissante."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p05_q2",
          "type": "mcq",
          "prompt": "Pour $h(x) = x + \\sqrt{|x^2-1|}$, quelle droite est asymptote à $(C)$ en $+\\infty$ ?",
          "options": [
            "$y = x$",
            "$y = 2x$",
            "$y = 0$",
            "$x = 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\lim_{x \\to +\\infty} (h(x) - 2x) = 0$ : la droite $y = 2x$ est asymptote à $(C)$ en $+\\infty$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p05_q3",
          "type": "mcq",
          "prompt": "Pour $h(x) = x + \\sqrt{|x^2-1|}$, qu'admet la courbe $(C)$ aux points d'abscisses $-1$ et $1$ ?",
          "options": [
            "Des tangentes horizontales",
            "Des demi-tangentes verticales",
            "Des asymptotes verticales",
            "Des points d'inflexion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les taux d'accroissement tendent vers l'infini en $-1$ et en $1$ : la courbe admet des demi-tangentes verticales en ces points."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p05_q4",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\tan(\\frac{\\pi}{2}x)$, que vaut $f'(x)$ ?",
          "options": [
            "$\\frac{\\pi}{2}(1 + \\tan^2(\\frac{\\pi}{2}x))$",
            "$1 + \\tan^2(\\frac{\\pi}{2}x)$",
            "$\\frac{\\pi}{2}\\tan(\\frac{\\pi}{2}x)$",
            "$\\frac{\\pi}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $(\\tan u)' = u'(1 + \\tan^2 u)$ et $u = \\frac{\\pi}{2}x$, on a $f'(x) = \\frac{\\pi}{2}(1 + \\tan^2(\\frac{\\pi}{2}x))$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p05_q5",
          "type": "mcq",
          "prompt": "Pour $k$ la restriction de $h$ à $]-\\infty ; -1]$, on a $k(-\\sqrt{2}) = 1 - \\sqrt{2}$ et $k'(-\\sqrt{2}) = 1 - \\sqrt{2}$. Que vaut $(k^{-1})'(1 - \\sqrt{2})$ ?",
          "options": [
            "$1 - \\sqrt{2}$",
            "$-1 - \\sqrt{2}$",
            "$1 + \\sqrt{2}$",
            "$\\frac{1}{\\sqrt{2}}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(k^{-1})'(1 - \\sqrt{2}) = \\frac{1}{k'(-\\sqrt{2})} = \\frac{1}{1 - \\sqrt{2}} = -1 - \\sqrt{2}$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p05_q6",
          "type": "mcq",
          "prompt": "La fonction $f(x) = x^2 + x$ ($x < 0$) et $\\sqrt{x} - x$ ($x \\geq 0$) est continue en $0$. Est-elle dérivable en $0$ ?",
          "options": [
            "Oui, car elle est continue",
            "Non : $f_g'(0) = 1$ et elle n'est pas dérivable à droite en $0$",
            "Oui, avec $f'(0) = 1$",
            "Non, car elle n'est pas continue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La continuité n'implique pas la dérivabilité : ici $f_g'(0) = 1$ mais le taux à droite tend vers $+\\infty$ (demi-tangente verticale), donc $f$ n'est pas dérivable en $0$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l03_derivabilite_p06",
      "order": 6,
      "title": "Optimisation : le bénéfice maximal de l'usine",
      "summary": "Pour trouver un maximum, on étudie le signe de la dérivée ; le maximum est atteint là où la dérivée s'annule en changeant de signe.",
      "conceptExplanation": "Situation : une usine produit entre $1000$ et $5000$ sachets de poudre de cacao par jour. Le bénéfice journalier (en millions de francs CFA) pour $x$ milliers de sachets est modélisé sur $[1 ; 5]$ par $B(x) = -\\frac{1}{3}x^3 + 9x + 2$.\nMéthode : on étudie les variations de $B$ en étudiant le signe de sa dérivée $B'(x) = -x^2 + 9 = -(x-3)(x+3)$.\nPour $x \\in [1 ; 5]$, $x + 3 > 0$ donc $B'(x)$ a le signe de $-(x-3)$ : $B'(x) \\geq 0$ pour $x \\in [1 ; 3]$ et $B'(x) \\leq 0$ pour $x \\in [3 ; 5]$.\nDonc $B$ est croissante sur $[1 ; 3]$ et décroissante sur $[3 ; 5]$ : $B$ atteint son maximum en $3$, et ce maximum est $B(3) = -9 + 27 + 2 = 20$.\nConclusion : le nombre de sachets à produire pour obtenir le bénéfice maximal est $3000$, et le bénéfice est alors d'environ $20$ millions de francs CFA.\nAutre exemple d'optimisation par l'étude de fonction : $f(x) = \\sqrt{\\frac{1-x}{1+x}}$ est définie sur $]-1 ; 1]$, strictement décroissante, non dérivable en $1$ (demi-tangente verticale), avec $\\lim_{x \\to -1^+} f(x) = +\\infty$ (asymptote $x = -1$) ; elle réalise une bijection de $]-1 ; 1]$ sur $[0 ; +\\infty[$.",
      "keyRule": "Pour maximiser : dériver, étudier le signe, repérer où la dérivée s'annule en changeant de signe de + vers −.",
      "formulas": [],
      "workedExample": {
        "title": "Le bénéfice maximal de l'usine de cacao",
        "statement": "Le bénéfice journalier (en millions de FCFA) pour $x$ milliers de sachets est $B(x) = -\\frac{1}{3}x^3 + 9x + 2$ sur $[1 ; 5]$. Combien de sachets produire pour un bénéfice maximal, et quel est ce bénéfice ?",
        "methodSteps": [
          "On calcule $B'(x) = -x^2 + 9 = -(x-3)(x+3)$.",
          "Sur $[1 ; 5]$, $B'(x) \\geq 0$ pour $x \\in [1 ; 3]$ et $B'(x) \\leq 0$ pour $x \\in [3 ; 5]$.",
          "Donc $B$ est croissante sur $[1 ; 3]$ puis décroissante sur $[3 ; 5]$ : le maximum est atteint en $x = 3$.",
          "Ce maximum vaut $B(3) = -\\frac{27}{3} + 27 + 2 = 20$."
        ],
        "conclusion": "Il faut produire $3000$ sachets par jour : le bénéfice maximal est de $20$ millions de francs CFA."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dérivée de $B$",
          "stepTheme": "La dérivée de $B$",
          "stepBadge": "La dérivée de $B$",
          "paragraphText": "• Pour $B(x) = -\\frac{1}{3}x^3 + 9x + 2$, on a $B'(x) = -x^2 + 9$.\nOn factorise : $B'(x) = -(x-3)(x+3)$.\nLa dérivée s'annule en $x = 3$ (et en $x = -3$, hors de l'intervalle $[1 ; 5]$).",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p06_q1",
            "type": "mcq",
            "prompt": "Pour $B(x) = -\\frac{1}{3}x^3 + 9x + 2$, que vaut $B'(x)$ ?",
            "options": [
              "$-x^2 + 9$",
              "$-x^2 - 9$",
              "$-x^3 + 9$",
              "$-\\frac{1}{3}x^2 + 9$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée de $-\\frac{1}{3}x^3$ est $-x^2$ et celle de $9x$ est $9$ : $B'(x) = -x^2 + 9$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le signe de la dérivée",
          "stepTheme": "Le signe de la dérivée",
          "stepBadge": "Le signe de la dérivée",
          "paragraphText": "• Sur $[1 ; 5]$, $x + 3 > 0$ donc $B'(x) = -(x-3)(x+3)$ a le signe de $-(x-3)$.\n$B'(x) \\geq 0$ quand $x \\leq 3$ et $B'(x) \\leq 0$ quand $x \\geq 3$.\nDonc $B$ est croissante sur $[1 ; 3]$ et décroissante sur $[3 ; 5]$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p06_q2",
            "type": "mcq",
            "prompt": "Sur $[1 ; 5]$, quel est le signe de $B'(x) = -(x-3)(x+3)$ pour $x \\in [1 ; 3]$ ?",
            "options": [
              "Négatif",
              "Positif ou nul",
              "Nul",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour $x \\in [1 ; 3]$, $-(x-3) \\geq 0$ et $x+3 > 0$ : $B'(x) \\geq 0$, donc $B$ est croissante sur $[1 ; 3]$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le maximum et sa valeur",
          "stepTheme": "Le maximum et sa valeur",
          "stepBadge": "Le maximum et sa valeur",
          "paragraphText": "• $B$ est croissante sur $[1 ; 3]$ puis décroissante sur $[3 ; 5]$ : elle atteint son maximum en $x = 3$.\nCe maximum vaut $B(3) = -\\frac{27}{3} + 27 + 2 = -9 + 27 + 2 = 20$.\nLe bénéfice maximal est donc de $20$ millions de francs CFA, pour $3000$ sachets produits.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p06_q3",
            "type": "mcq",
            "prompt": "Combien de sachets faut-il produire par jour pour un bénéfice maximal, et quel est ce bénéfice ?",
            "options": [
              "$1000$ sachets et $11$ millions",
              "$3000$ sachets et $20$ millions",
              "$5000$ sachets et $2$ millions",
              "$2000$ sachets et $18$ millions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le maximum de $B$ est atteint en $x = 3$ (3000 sachets) et vaut $B(3) = 20$ millions de francs CFA."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La fonction $\\sqrt{\\frac{1-x}{1+x}}$",
          "stepTheme": "La fonction $\\sqrt{\\frac{1-x}{1+x}}$",
          "stepBadge": "La fonction $\\sqrt{\\frac{1-x}{1+x}}$",
          "paragraphText": "• Soit $f(x) = \\sqrt{\\frac{1-x}{1+x}}$. Son ensemble de définition est $D_f = ]-1 ; 1]$.\n$f$ n'est pas dérivable en $1$ : le taux d'accroissement y tend vers $-\\infty$, donc $(C)$ admet une demi-tangente verticale au point d'abscisse $1$.\n$\\lim_{x \\to -1^+} f(x) = +\\infty$ : la droite d'équation $x = -1$ est asymptote à $(C)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p06_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de $f(x) = \\sqrt{\\frac{1-x}{1+x}}$ ?",
            "options": [
              "$]-1 ; 1]$",
              "$[-1 ; 1]$",
              "$]-1 ; 1[$",
              "$\\mathbb{R} \\setminus \\{-1\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il faut $1 + x \\neq 0$ et $\\frac{1-x}{1+x} \\geq 0$ : cela donne $D_f = ]-1 ; 1]$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Variations et bijection de $f$",
          "stepTheme": "Variations et bijection de $f$",
          "stepBadge": "Variations et bijection de $f$",
          "paragraphText": "• Pour $x \\in ]-1 ; 1[$, $f'(x) = \\frac{-1}{(1+x)^2 \\sqrt{\\frac{1-x}{1+x}}} < 0$ : $f$ est strictement décroissante sur $]-1 ; 1[$.\n$f$ est continue et strictement décroissante sur $]-1 ; 1]$, donc elle réalise une bijection de $]-1 ; 1]$ sur $[0 ; +\\infty[$.\nComme $f(0) = 1$ et $f'(0) = -1 \\neq 0$, $f^{-1}$ est dérivable en $1$ et $(f^{-1})'(1) = -1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p06_q5",
            "type": "mcq",
            "prompt": "La fonction $f(x) = \\sqrt{\\frac{1-x}{1+x}}$ est continue et strictement décroissante sur $]-1 ; 1]$. Sur quel intervalle réalise-t-elle une bijection ?",
            "options": [
              "Sur $[0 ; 1]$",
              "Sur $[0 ; +\\infty[$",
              "Sur $]-1 ; 1]$",
              "Sur $\\mathbb{R}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f(]-1 ; 1]) = [0 ; +\\infty[$ car $\\lim_{x \\to -1^+} f(x) = +\\infty$ et $f(1) = 0$ : $f$ réalise une bijection de $]-1 ; 1]$ sur $[0 ; +\\infty[$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Maximum local ou maximum global ?",
          "stepTheme": "Maximum local ou maximum global ?",
          "stepBadge": "Maximum local ou maximum global ?",
          "paragraphText": "• Pour l'usine, le maximum est atteint en $x = 3$, à l'intérieur de l'intervalle $[1 ; 5]$ : c'est le maximum global de $B$ sur $[1 ; 5]$.\nMais un maximum local (dérivée qui s'annule en changeant de signe) n'est pas toujours le maximum global : il faut aussi comparer les valeurs aux bornes de l'intervalle.\nIci $B(1) = -\\frac{1}{3} + 9 + 2 = \\frac{32}{3} \\approx 10{,}67$ et $B(5) = -\\frac{125}{3} + 45 + 2 = \\frac{16}{3} \\approx 5{,}33$ : les deux sont inférieures à $B(3) = 20$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l03_derivabilite_p06_q6",
            "type": "mcq",
            "prompt": "Pour $B$ sur $[1 ; 5]$, on a $B(1) \\approx 10{,}67$, $B(3) = 20$ et $B(5) \\approx 5{,}33$. Quel est le maximum global de $B$ sur $[1 ; 5]$ ?",
            "options": [
              "$B(1)$",
              "$B(3) = 20$",
              "$B(5)$",
              "Il n'y a pas de maximum"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$B(3) = 20$ est supérieur aux valeurs aux bornes : c'est le maximum global de $B$ sur $[1 ; 5]$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p06_q1",
          "type": "mcq",
          "prompt": "Pour $B(x) = -\\frac{1}{3}x^3 + 9x + 2$, que vaut $B'(x)$ ?",
          "options": [
            "$-x^2 + 9$",
            "$-x^2 - 9$",
            "$-x^3 + 9$",
            "$-\\frac{1}{3}x^2 + 9$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée de $-\\frac{1}{3}x^3$ est $-x^2$ et celle de $9x$ est $9$ : $B'(x) = -x^2 + 9$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p06_q2",
          "type": "mcq",
          "prompt": "Sur $[1 ; 5]$, quel est le signe de $B'(x) = -(x-3)(x+3)$ pour $x \\in [1 ; 3]$ ?",
          "options": [
            "Négatif",
            "Positif ou nul",
            "Nul",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour $x \\in [1 ; 3]$, $-(x-3) \\geq 0$ et $x+3 > 0$ : $B'(x) \\geq 0$, donc $B$ est croissante sur $[1 ; 3]$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p06_q3",
          "type": "mcq",
          "prompt": "Combien de sachets faut-il produire par jour pour un bénéfice maximal, et quel est ce bénéfice ?",
          "options": [
            "$1000$ sachets et $11$ millions",
            "$3000$ sachets et $20$ millions",
            "$5000$ sachets et $2$ millions",
            "$2000$ sachets et $18$ millions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le maximum de $B$ est atteint en $x = 3$ (3000 sachets) et vaut $B(3) = 20$ millions de francs CFA."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p06_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de $f(x) = \\sqrt{\\frac{1-x}{1+x}}$ ?",
          "options": [
            "$]-1 ; 1]$",
            "$[-1 ; 1]$",
            "$]-1 ; 1[$",
            "$\\mathbb{R} \\setminus \\{-1\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il faut $1 + x \\neq 0$ et $\\frac{1-x}{1+x} \\geq 0$ : cela donne $D_f = ]-1 ; 1]$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p06_q5",
          "type": "mcq",
          "prompt": "La fonction $f(x) = \\sqrt{\\frac{1-x}{1+x}}$ est continue et strictement décroissante sur $]-1 ; 1]$. Sur quel intervalle réalise-t-elle une bijection ?",
          "options": [
            "Sur $[0 ; 1]$",
            "Sur $[0 ; +\\infty[$",
            "Sur $]-1 ; 1]$",
            "Sur $\\mathbb{R}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f(]-1 ; 1]) = [0 ; +\\infty[$ car $\\lim_{x \\to -1^+} f(x) = +\\infty$ et $f(1) = 0$ : $f$ réalise une bijection de $]-1 ; 1]$ sur $[0 ; +\\infty[$."
        },
        {
          "id": "terminale_c_maths_numerique_l03_derivabilite_p06_q6",
          "type": "mcq",
          "prompt": "Pour $B$ sur $[1 ; 5]$, on a $B(1) \\approx 10{,}67$, $B(3) = 20$ et $B(5) \\approx 5{,}33$. Quel est le maximum global de $B$ sur $[1 ; 5]$ ?",
          "options": [
            "$B(1)$",
            "$B(3) = 20$",
            "$B(5)$",
            "Il n'y a pas de maximum"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$B(3) = 20$ est supérieur aux valeurs aux bornes : c'est le maximum global de $B$ sur $[1 ; 5]$."
        }
      ]
    }
  ]
};
