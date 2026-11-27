import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 01 : Limites et continuité » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2844
export const MATHS_TLE_CD_L01_LIMITES_CONTINUITE: CurriculumChapter = {
  "id": "terminale_c_maths_numerique_l01_limites_continuite",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 1,
  "title": "Leçon 1 : Limites et continuité",
  "summary": "Limite d'une fonction composée, limite d'une fonction monotone, branches paraboliques, continuité, prolongement par continuité, image d'un intervalle, bijection et théorème des valeurs intermédiaires, racine nième et puissance d'exposant rationnel.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2844",
  "points": [
    {
      "id": "terminale_c_maths_numerique_l01_limites_continuite_p01",
      "order": 1,
      "title": "Limite d'une fonction composée",
      "summary": "Calculer la limite d'une composée en composant les limites, étape par étape.",
      "conceptExplanation": "Soit $f$ et $g$ deux fonctions numériques, et $a$, $b$ et $\\ell$ des éléments de $\\mathbb{R} \\cup \\{-\\infty ; +\\infty\\}$.\nSi $\\lim_{x \\to a} f(x) = b$ et $\\lim_{x \\to b} g(x) = \\ell$, alors $\\lim_{x \\to a} g \\circ f(x) = \\ell$.\nAutrement dit, pour calculer la limite d'une composée, on calcule d'abord la limite de la fonction intérieure, puis la limite de la fonction extérieure en cette valeur.\nLa situation d'apprentissage de la leçon utilise ce principe : la distance de mise au point $P = \\frac{10x}{5+x}$ tend vers $10$ quand $x$ tend vers $+\\infty$, car $\\frac{10x}{5+x}$ tend vers $10$.",
      "keyRule": "Pour une composée, on compose les limites : d'abord la limite intérieure, puis la limite extérieure en cette valeur.",
      "formulas": [
        {
          "name": "Limite d'une fonction composée",
          "formula": "\\lim_{x \\to a} f(x) = b \\text{ et } \\lim_{x \\to b} g(x) = \\ell \\Rightarrow \\lim_{x \\to a} g \\circ f(x) = \\ell",
          "note": "Les limites peuvent être finies ou infinies."
        }
      ],
      "workedExample": {
        "title": "Limite de $h(x) = \\sqrt{4 + \\frac{2}{x^2+1}}$ en $+\\infty$",
        "statement": "Calcule la limite en $+\\infty$ de la fonction $h$ définie sur $\\mathbb{R}$ par $h(x) = \\sqrt{4 + \\frac{2}{x^2+1}}$.",
        "methodSteps": [
          "On écrit $h = g \\circ f$ avec $f(x) = 4 + \\frac{2}{x^2+1}$ et $g(x) = \\sqrt{x}$.",
          "On a $\\lim_{x \\to +\\infty} f(x) = 4$ car $\\lim_{x \\to +\\infty} \\frac{2}{x^2+1} = 0$.",
          "On a $\\lim_{x \\to 4} g(x) = \\lim_{x \\to 4} \\sqrt{x} = 2$.",
          "Donc $\\lim_{x \\to +\\infty} h(x) = 2$."
        ],
        "conclusion": "La limite d'une composée se calcule en composant les limites : ici, $2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La propriété de composition",
          "stepTheme": "La propriété de composition",
          "stepBadge": "La propriété de composition",
          "paragraphText": "• Limite composée : si $\\lim_{x \\to a} f(x) = b$ et $\\lim_{x \\to b} g(x) = \\ell$, alors $\\lim_{x \\to a} g \\circ f(x) = \\ell$.\n$a$, $b$ et $\\ell$ peuvent être des nombres réels, $+\\infty$ ou $-\\infty$.\nOn procède toujours dans le même ordre : d'abord la limite de la fonction intérieure $f$, puis celle de la fonction extérieure $g$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p01_q1",
            "type": "mcq",
            "prompt": "On sait que $\\lim_{x \\to 0} f(x) = 3$ et $\\lim_{x \\to 3} g(x) = 7$. Que vaut $\\lim_{x \\to 0} g \\circ f(x)$ ?",
            "options": [
              "$0$",
              "$3$",
              "$7$",
              "$10$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On compose les limites : $f$ tend vers $3$ en $0$, puis $g$ tend vers $7$ en $3$. Donc $g \\circ f$ tend vers $7$ en $0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Décomposer la fonction",
          "stepTheme": "Décomposer la fonction",
          "stepBadge": "Décomposer la fonction",
          "paragraphText": "• Première étape : reconnaître la composée et écrire $h = g \\circ f$ en identifiant la fonction intérieure $f$ et la fonction extérieure $g$.\nPar exemple, pour $h(x) = \\sqrt{4 + \\frac{2}{x^2+1}}$, on pose $f(x) = 4 + \\frac{2}{x^2+1}$ et $g(x) = \\sqrt{x}$.\nPour $f(x) = \\frac{\\sin(2x)}{x}$, on écrit $f(x) = 2 \\times \\frac{\\sin(2x)}{2x}$, composée de $v(x) = 2x$ et $u(x) = 2 \\times \\frac{\\sin x}{x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p01_q2",
            "type": "mcq",
            "prompt": "Pour $h(x) = \\sqrt{4 + \\frac{2}{x^2+1}}$, quelle est la fonction intérieure $f$ dans la décomposition $h = g \\circ f$ ?",
            "options": [
              "$f(x) = \\sqrt{x}$",
              "$f(x) = 4 + \\frac{2}{x^2+1}$",
              "$f(x) = \\frac{2}{x^2+1}$",
              "$f(x) = 4 + x^2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La fonction intérieure est celle qui est appliquée en premier : $f(x) = 4 + \\frac{2}{x^2+1}$, puis on applique la racine carrée $g(x) = \\sqrt{x}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La limite intérieure",
          "stepTheme": "La limite intérieure",
          "stepBadge": "La limite intérieure",
          "paragraphText": "• Deuxième étape : calculer $\\lim_{x \\to a} f(x)$.\nPour $f(x) = 4 + \\frac{2}{x^2+1}$, on a $\\lim_{x \\to +\\infty} f(x) = 4$ car $\\frac{2}{x^2+1}$ tend vers $0$.\nPour $v(x) = 2x$, on a $\\lim_{x \\to 0} v(x) = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p01_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\left(4 + \\frac{2}{x^2+1}\\right)$ ?",
            "options": [
              "$0$",
              "$2$",
              "$4$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Quand $x$ tend vers $+\\infty$, $\\frac{2}{x^2+1}$ tend vers $0$, donc $4 + \\frac{2}{x^2+1}$ tend vers $4$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La limite extérieure",
          "stepTheme": "La limite extérieure",
          "stepBadge": "La limite extérieure",
          "paragraphText": "• Troisième étape : calculer la limite de $g$ en la valeur trouvée.\nPour $g(x) = \\sqrt{x}$, on a $\\lim_{x \\to 4} g(x) = 2$.\nPour $u(x) = 2 \\times \\frac{\\sin x}{x}$, on a $\\lim_{x \\to 0} u(x) = 2 \\times 1 = 2$, car $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\sqrt{4 + \\frac{2}{x^2+1}}$ ?",
            "options": [
              "$0$",
              "$2$",
              "$4$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La fonction intérieure tend vers $4$ et $\\sqrt{4} = 2$ : par composition, la limite est $2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La limite de $\\frac{\\sin(2x)}{x}$ en $0$",
          "stepTheme": "La limite de $\\frac{\\sin(2x)}{x}$ en $0$",
          "stepBadge": "La limite de $\\frac{\\sin(2x)}{x}$ en $0$",
          "paragraphText": "• On écrit $\\frac{\\sin(2x)}{x} = 2 \\times \\frac{\\sin(2x)}{2x}$ : c'est la composée de $v(x) = 2x$ et de $u(x) = 2 \\times \\frac{\\sin x}{x}$.\n$\\lim_{x \\to 0} v(x) = 0$ et $\\lim_{x \\to 0} u(x) = 2 \\times 1 = 2$.\nDonc $\\lim_{x \\to 0} \\frac{\\sin(2x)}{x} = 2$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p01_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 0} \\frac{\\sin(2x)}{x}$ ?",
            "options": [
              "$0$",
              "$1$",
              "$2$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On écrit $\\frac{\\sin(2x)}{x} = 2 \\times \\frac{\\sin(2x)}{2x}$ ; quand $x$ tend vers $0$, $2x$ tend vers $0$ et $\\frac{\\sin(2x)}{2x}$ tend vers $1$, donc la limite vaut $2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lire un tableau de variation",
          "stepTheme": "Lire un tableau de variation",
          "stepBadge": "Lire un tableau de variation",
          "paragraphText": "• La composition sert aussi à lire des limites sur un tableau de variation.\nExemple du cours : $f$ est continue sur $]-\\infty ; 0[$ et sur $]0 ; +\\infty[$, avec $f(-2) = 5$, $\\lim_{x \\to -\\infty} f(x) = -2$, $\\lim_{x \\to +\\infty} f(x) = 1$ et $\\lim_{x \\to 0^+} f(x) = +\\infty$.\nAlors $\\lim_{x \\to -\\infty} f(-2 + \\frac{1}{x}) = 5$ car $-2 + \\frac{1}{x}$ tend vers $-2$ ; $\\lim_{x \\to -\\infty} f(x^2) = 1$ car $x^2$ tend vers $+\\infty$ ; $\\lim_{x \\to 0^+} f(-\\frac{1}{x}) = -2$ car $-\\frac{1}{x}$ tend vers $-\\infty$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p01_q6",
            "type": "mcq",
            "prompt": "Avec le tableau du cours ($\\lim_{x \\to +\\infty} f(x) = 1$), que vaut $\\lim_{x \\to -\\infty} f(x^2)$ ?",
            "options": [
              "$-2$",
              "$0$",
              "$1$",
              "$5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Quand $x$ tend vers $-\\infty$, $x^2$ tend vers $+\\infty$ et $f$ tend vers $1$ en $+\\infty$ : par composition, la limite vaut $1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p01_q1",
          "type": "mcq",
          "prompt": "On sait que $\\lim_{x \\to 0} f(x) = 3$ et $\\lim_{x \\to 3} g(x) = 7$. Que vaut $\\lim_{x \\to 0} g \\circ f(x)$ ?",
          "options": [
            "$0$",
            "$3$",
            "$7$",
            "$10$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On compose les limites : $f$ tend vers $3$ en $0$, puis $g$ tend vers $7$ en $3$. Donc $g \\circ f$ tend vers $7$ en $0$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p01_q2",
          "type": "mcq",
          "prompt": "Pour $h(x) = \\sqrt{4 + \\frac{2}{x^2+1}}$, quelle est la fonction intérieure $f$ dans la décomposition $h = g \\circ f$ ?",
          "options": [
            "$f(x) = \\sqrt{x}$",
            "$f(x) = 4 + \\frac{2}{x^2+1}$",
            "$f(x) = \\frac{2}{x^2+1}$",
            "$f(x) = 4 + x^2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La fonction intérieure est celle qui est appliquée en premier : $f(x) = 4 + \\frac{2}{x^2+1}$, puis on applique la racine carrée $g(x) = \\sqrt{x}$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p01_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\left(4 + \\frac{2}{x^2+1}\\right)$ ?",
          "options": [
            "$0$",
            "$2$",
            "$4$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Quand $x$ tend vers $+\\infty$, $\\frac{2}{x^2+1}$ tend vers $0$, donc $4 + \\frac{2}{x^2+1}$ tend vers $4$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\sqrt{4 + \\frac{2}{x^2+1}}$ ?",
          "options": [
            "$0$",
            "$2$",
            "$4$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La fonction intérieure tend vers $4$ et $\\sqrt{4} = 2$ : par composition, la limite est $2$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p01_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 0} \\frac{\\sin(2x)}{x}$ ?",
          "options": [
            "$0$",
            "$1$",
            "$2$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On écrit $\\frac{\\sin(2x)}{x} = 2 \\times \\frac{\\sin(2x)}{2x}$ ; quand $x$ tend vers $0$, $2x$ tend vers $0$ et $\\frac{\\sin(2x)}{2x}$ tend vers $1$, donc la limite vaut $2$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p01_q6",
          "type": "mcq",
          "prompt": "Avec le tableau du cours ($\\lim_{x \\to +\\infty} f(x) = 1$), que vaut $\\lim_{x \\to -\\infty} f(x^2)$ ?",
          "options": [
            "$-2$",
            "$0$",
            "$1$",
            "$5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Quand $x$ tend vers $-\\infty$, $x^2$ tend vers $+\\infty$ et $f$ tend vers $1$ en $+\\infty$ : par composition, la limite vaut $1$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l01_limites_continuite_p02",
      "order": 2,
      "title": "Limite d'une fonction monotone et branches paraboliques",
      "summary": "Une fonction monotone bornée admet une limite finie ; la limite de f(x)/x décrit les branches paraboliques.",
      "conceptExplanation": "Soit $a$ et $b$ deux éléments de $\\mathbb{R} \\cup \\{-\\infty ; +\\infty\\}$ et $f$ une fonction numérique.\n• Si $f$ est croissante et majorée par un nombre réel $M$ sur l'intervalle $]a ; b[$, alors $f$ admet une limite finie $\\ell$ en $b$, et $\\ell \\leq M$.\n• Si $f$ est décroissante et minorée par un nombre réel $m$ sur $]a ; b[$, alors $f$ admet une limite finie $\\ell$ en $b$, et $\\ell \\geq m$.\nBranches paraboliques : soit $f$ une fonction et $(C)$ sa courbe représentative.\n• $(C)$ admet en $+\\infty$ une branche parabolique de direction celle de $(OI)$ lorsque $\\lim_{x \\to +\\infty} f(x) = +\\infty$ (ou $-\\infty$) et $\\lim_{x \\to +\\infty} \\frac{f(x)}{x} = 0$.\n• $(C)$ admet en $+\\infty$ une branche parabolique de direction celle de $(OJ)$ lorsque $\\lim_{x \\to +\\infty} f(x) = +\\infty$ (ou $-\\infty$) et $\\lim_{x \\to +\\infty} \\frac{f(x)}{x} = +\\infty$ (ou $-\\infty$).\nOn définit de manière analogue les branches paraboliques en $-\\infty$.",
      "keyRule": "Monotone et bornée : la limite existe et est finie. Pour les branches : f(x)/x tend vers 0 (direction OI) ou vers l'infini (direction OJ).",
      "formulas": [
        {
          "name": "Limite d'une fonction monotone majorée",
          "formula": "f \\text{ croissante et majorée sur } ]a ; b[ \\Rightarrow \\lim_{x \\to b} f(x) = \\ell \\text{ finie, } \\ell \\leq M",
          "note": "M est un majorant de f sur l'intervalle."
        },
        {
          "name": "Branche parabolique de direction (OI)",
          "formula": "\\lim_{x \\to +\\infty} f(x) = \\pm\\infty \\text{ et } \\lim_{x \\to +\\infty} \\frac{f(x)}{x} = 0",
          "note": "La courbe s'aplatit vers l'horizontale."
        },
        {
          "name": "Branche parabolique de direction (OJ)",
          "formula": "\\lim_{x \\to +\\infty} f(x) = \\pm\\infty \\text{ et } \\lim_{x \\to +\\infty} \\frac{f(x)}{x} = \\pm\\infty",
          "note": "La courbe se redresse vers la verticale."
        }
      ],
      "workedExample": {
        "title": "Une fonction croissante majorée admet une limite finie",
        "statement": "Soit $f$ la fonction définie sur $\\mathbb{R}$ telle que $f(0) = 0$ et $f'(x) = \\frac{1}{1+x^2}$ pour tout $x$. Sachant que pour tout $x \\in [1 ; +\\infty[$, on a $f(1) \\leq f(x) \\leq -\\frac{1}{x} + 1 + f(1)$, justifie que $f$ admet une limite finie $\\ell$ en $+\\infty$ et donne un encadrement de $\\ell$.",
        "methodSteps": [
          "Pour tout $x$, $f'(x) > 0$ donc $f$ est strictement croissante sur $[1 ; +\\infty[$.",
          "Pour tout $x \\geq 1$, $-\\frac{1}{x} \\leq 0$ donc $f(x) \\leq -\\frac{1}{x} + 1 + f(1) \\leq 1 + f(1)$ : $f$ est majorée par $1 + f(1)$.",
          "Une fonction croissante et majorée admet une limite finie $\\ell$ en $+\\infty$, avec $\\ell \\leq 1 + f(1)$.",
          "Comme $f(1) \\leq f(x)$ pour $x \\geq 1$, on a aussi $f(1) \\leq \\ell$."
        ],
        "conclusion": "$f$ admet une limite finie $\\ell$ en $+\\infty$ avec $f(1) \\leq \\ell \\leq 1 + f(1)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Fonction croissante majorée",
          "stepTheme": "Fonction croissante majorée",
          "stepBadge": "Fonction croissante majorée",
          "paragraphText": "• Si $f$ est croissante et majorée par un nombre réel $M$ sur $]a ; b[$, alors $f$ admet une limite finie $\\ell$ en $b$, et $\\ell \\leq M$.\n« Croissante » donne le sens, « majorée » empêche la fonction de partir vers $+\\infty$ : la limite existe et est finie.\nSans majorant, une fonction croissante peut tendre vers $+\\infty$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p02_q1",
            "type": "mcq",
            "prompt": "Une fonction croissante et majorée par $5$ sur $]0 ; +\\infty[$ admet en $+\\infty$ une limite $\\ell$. Que peut-on affirmer ?",
            "options": [
              "$\\ell = 5$",
              "$\\ell$ est finie et $\\ell \\leq 5$",
              "$\\ell = +\\infty$",
              "$\\ell \\geq 5$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une fonction croissante et majorée admet une limite finie $\\ell$ en $+\\infty$, et $\\ell \\leq M = 5$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Fonction décroissante minorée",
          "stepTheme": "Fonction décroissante minorée",
          "stepBadge": "Fonction décroissante minorée",
          "paragraphText": "• Si $f$ est décroissante et minorée par un nombre réel $m$ sur $]a ; b[$, alors $f$ admet une limite finie $\\ell$ en $b$, et $\\ell \\geq m$.\nC'est le cas symétrique : « décroissante » donne le sens, « minorée » empêche la fonction de partir vers $-\\infty$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p02_q2",
            "type": "mcq",
            "prompt": "Une fonction décroissante et minorée par $-3$ sur $]0 ; +\\infty[$ admet en $+\\infty$ une limite $\\ell$. Que peut-on affirmer ?",
            "options": [
              "$\\ell = -3$",
              "$\\ell$ est finie et $\\ell \\geq -3$",
              "$\\ell = -\\infty$",
              "$\\ell \\leq -3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une fonction décroissante et minorée admet une limite finie $\\ell$ en $+\\infty$, et $\\ell \\geq m = -3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Justifier l'existence d'une limite",
          "stepTheme": "Justifier l'existence d'une limite",
          "stepBadge": "Justifier l'existence d'une limite",
          "paragraphText": "• Pour justifier qu'une fonction admet une limite finie, on montre qu'elle est monotone et bornée du bon côté.\nDans l'exemple du cours, $f'(x) = \\frac{1}{1+x^2} > 0$ donc $f$ est strictement croissante ; l'encadrement $f(1) \\leq f(x) \\leq 1 + f(1)$ montre qu'elle est majorée par $1 + f(1)$.\nOn conclut : $f$ admet une limite finie $\\ell$ en $+\\infty$ avec $f(1) \\leq \\ell \\leq 1 + f(1)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p02_q3",
            "type": "mcq",
            "prompt": "Dans l'exemple du cours, quel encadrement de la limite $\\ell$ de $f$ en $+\\infty$ obtient-on ?",
            "options": [
              "$0 \\leq \\ell \\leq 1$",
              "$f(1) \\leq \\ell \\leq 1 + f(1)$",
              "$\\ell \\leq f(1)$",
              "$\\ell \\geq 1 + f(1)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On a $f(1) \\leq f(x) \\leq 1 + f(1)$ pour $x \\geq 1$, donc à la limite $f(1) \\leq \\ell \\leq 1 + f(1)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Branche parabolique : la définition",
          "stepTheme": "Branche parabolique : la définition",
          "stepBadge": "Branche parabolique : la définition",
          "paragraphText": "• Quand $\\lim_{x \\to +\\infty} f(x) = \\pm\\infty$, on étudie $\\lim_{x \\to +\\infty} \\frac{f(x)}{x}$ pour connaître la direction de la branche.\nSi $\\frac{f(x)}{x}$ tend vers $0$, la branche est de direction $(OI)$ (l'axe des abscisses).\nSi $\\frac{f(x)}{x}$ tend vers $+\\infty$ ou $-\\infty$, la branche est de direction $(OJ)$ (l'axe des ordonnées).",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p02_q4",
            "type": "mcq",
            "prompt": "On a $\\lim_{x \\to +\\infty} f(x) = +\\infty$ et $\\lim_{x \\to +\\infty} \\frac{f(x)}{x} = 0$. Quelle est la branche parabolique de $(C)$ en $+\\infty$ ?",
            "options": [
              "Direction $(OI)$",
              "Direction $(OJ)$",
              "Asymptote horizontale",
              "Asymptote oblique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Quand $f(x)$ tend vers l'infini et $\\frac{f(x)}{x}$ tend vers $0$, la courbe s'aplatit vers l'horizontale : branche parabolique de direction $(OI)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La fonction $g(x) = 2x^2 - 2x$",
          "stepTheme": "La fonction $g(x) = 2x^2 - 2x$",
          "stepBadge": "La fonction $g(x) = 2x^2 - 2x$",
          "paragraphText": "• Pour $g(x) = 2x^2 - 2x$, on a $\\lim_{x \\to +\\infty} g(x) = +\\infty$ et $\\lim_{x \\to +\\infty} \\frac{g(x)}{x} = \\lim_{x \\to +\\infty} (2x - 2) = +\\infty$.\nDonc $(C_g)$ admet en $+\\infty$ une branche parabolique de direction $(OJ)$.\nLa courbe se redresse vers la verticale.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p02_q5",
            "type": "mcq",
            "prompt": "Pour $g(x) = 2x^2 - 2x$, que vaut $\\lim_{x \\to +\\infty} \\frac{g(x)}{x}$ et quelle est la direction de la branche ?",
            "options": [
              "$0$ et direction $(OI)$",
              "$+\\infty$ et direction $(OJ)$",
              "$2$ et asymptote oblique",
              "$-\\infty$ et direction $(OJ)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\frac{g(x)}{x} = 2x - 2$ tend vers $+\\infty$ : la courbe admet en $+\\infty$ une branche parabolique de direction $(OJ)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La fonction $h(x) = \\frac{2x-1}{\\sqrt{x}}$",
          "stepTheme": "La fonction $h(x) = \\frac{2x-1}{\\sqrt{x}}$",
          "stepBadge": "La fonction $h(x) = \\frac{2x-1}{\\sqrt{x}}$",
          "paragraphText": "• Pour $h(x) = \\frac{2x-1}{\\sqrt{x}}$ sur $]0 ; +\\infty[$, on a $\\lim_{x \\to +\\infty} h(x) = +\\infty$.\nOr $\\frac{h(x)}{x} = \\frac{2x-1}{x\\sqrt{x}} = \\frac{2}{\\sqrt{x}} - \\frac{1}{x\\sqrt{x}}$, qui tend vers $0$ en $+\\infty$.\nDonc $(C_h)$ admet en $+\\infty$ une branche parabolique de direction $(OI)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p02_q6",
            "type": "mcq",
            "prompt": "Pour $h(x) = \\frac{2x-1}{\\sqrt{x}}$, que vaut $\\lim_{x \\to +\\infty} \\frac{h(x)}{x}$ et quelle est la direction de la branche ?",
            "options": [
              "$+\\infty$ et direction $(OJ)$",
              "$0$ et direction $(OI)$",
              "$2$ et asymptote oblique",
              "$1$ et direction $(OI)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\frac{h(x)}{x} = \\frac{2}{\\sqrt{x}} - \\frac{1}{x\\sqrt{x}}$ tend vers $0$ : la courbe admet en $+\\infty$ une branche parabolique de direction $(OI)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p02_q1",
          "type": "mcq",
          "prompt": "Une fonction croissante et majorée par $5$ sur $]0 ; +\\infty[$ admet en $+\\infty$ une limite $\\ell$. Que peut-on affirmer ?",
          "options": [
            "$\\ell = 5$",
            "$\\ell$ est finie et $\\ell \\leq 5$",
            "$\\ell = +\\infty$",
            "$\\ell \\geq 5$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une fonction croissante et majorée admet une limite finie $\\ell$ en $+\\infty$, et $\\ell \\leq M = 5$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p02_q2",
          "type": "mcq",
          "prompt": "Une fonction décroissante et minorée par $-3$ sur $]0 ; +\\infty[$ admet en $+\\infty$ une limite $\\ell$. Que peut-on affirmer ?",
          "options": [
            "$\\ell = -3$",
            "$\\ell$ est finie et $\\ell \\geq -3$",
            "$\\ell = -\\infty$",
            "$\\ell \\leq -3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une fonction décroissante et minorée admet une limite finie $\\ell$ en $+\\infty$, et $\\ell \\geq m = -3$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p02_q3",
          "type": "mcq",
          "prompt": "Dans l'exemple du cours, quel encadrement de la limite $\\ell$ de $f$ en $+\\infty$ obtient-on ?",
          "options": [
            "$0 \\leq \\ell \\leq 1$",
            "$f(1) \\leq \\ell \\leq 1 + f(1)$",
            "$\\ell \\leq f(1)$",
            "$\\ell \\geq 1 + f(1)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On a $f(1) \\leq f(x) \\leq 1 + f(1)$ pour $x \\geq 1$, donc à la limite $f(1) \\leq \\ell \\leq 1 + f(1)$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p02_q4",
          "type": "mcq",
          "prompt": "On a $\\lim_{x \\to +\\infty} f(x) = +\\infty$ et $\\lim_{x \\to +\\infty} \\frac{f(x)}{x} = 0$. Quelle est la branche parabolique de $(C)$ en $+\\infty$ ?",
          "options": [
            "Direction $(OI)$",
            "Direction $(OJ)$",
            "Asymptote horizontale",
            "Asymptote oblique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Quand $f(x)$ tend vers l'infini et $\\frac{f(x)}{x}$ tend vers $0$, la courbe s'aplatit vers l'horizontale : branche parabolique de direction $(OI)$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p02_q5",
          "type": "mcq",
          "prompt": "Pour $g(x) = 2x^2 - 2x$, que vaut $\\lim_{x \\to +\\infty} \\frac{g(x)}{x}$ et quelle est la direction de la branche ?",
          "options": [
            "$0$ et direction $(OI)$",
            "$+\\infty$ et direction $(OJ)$",
            "$2$ et asymptote oblique",
            "$-\\infty$ et direction $(OJ)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\frac{g(x)}{x} = 2x - 2$ tend vers $+\\infty$ : la courbe admet en $+\\infty$ une branche parabolique de direction $(OJ)$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p02_q6",
          "type": "mcq",
          "prompt": "Pour $h(x) = \\frac{2x-1}{\\sqrt{x}}$, que vaut $\\lim_{x \\to +\\infty} \\frac{h(x)}{x}$ et quelle est la direction de la branche ?",
          "options": [
            "$+\\infty$ et direction $(OJ)$",
            "$0$ et direction $(OI)$",
            "$2$ et asymptote oblique",
            "$1$ et direction $(OI)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\frac{h(x)}{x} = \\frac{2}{\\sqrt{x}} - \\frac{1}{x\\sqrt{x}}$ tend vers $0$ : la courbe admet en $+\\infty$ une branche parabolique de direction $(OI)$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l01_limites_continuite_p03",
      "order": 3,
      "title": "Continuité et prolongement par continuité",
      "summary": "Une fonction est continue sur un intervalle si elle l'est en chaque point ; une limite finie en un point hors domaine permet de la prolonger.",
      "conceptExplanation": "On dit qu'une fonction $f$ est continue sur un intervalle $I$ si elle est continue en tout élément de $I$.\nLes fonctions polynôme, rationnelle, sinus, cosinus, racine carrée, puissance, valeur absolue et tangente sont continues sur tout intervalle inclus dans leurs ensembles de définition respectifs.\nProlongement par continuité : soit $f$ une fonction d'ensemble de définition $D_f$ et $a$ un nombre réel n'appartenant pas à $D_f$. Si $f$ admet une limite finie $\\ell$ en $a$, alors $f$ est prolongeable par continuité en $a$ et la fonction $g$ définie sur $D_f \\cup \\{a\\}$ par $g(x) = f(x)$ pour $x \\in D_f$ et $g(a) = \\ell$ est continue en $a$ : c'est le prolongement par continuité de $f$ en $a$.\nExemple : $f(x) = \\frac{\\sin x}{x}$ a pour ensemble de définition $\\mathbb{R} - \\{0\\}$ et $\\lim_{x \\to 0} f(x) = 1$ ; la fonction $g$ définie par $g(x) = f(x)$ pour $x \\neq 0$ et $g(0) = 1$ est le prolongement par continuité de $f$ en $0$.\nOpérations : si $f$ et $g$ sont continues sur un intervalle $I$, alors $f+g$, $fg$, $f^n$ ($n \\in \\mathbb{N}$) et $|f|$ sont continues sur $I$ ; si $g$ ne s'annule pas sur $I$, alors $\\frac{f}{g}$ est continue sur $I$ ; si $f$ est positive sur $I$, alors $\\sqrt{f}$ est continue sur $I$. Si $f$ est continue sur $I$ et $g$ continue sur $f(I)$, alors $g \\circ f$ est continue sur $I$.",
      "keyRule": "Limite finie en un point hors domaine = prolongement par continuité possible ; sinon, pas de prolongement.",
      "formulas": [
        {
          "name": "Prolongement par continuité",
          "formula": "a \\notin D_f \\text{ et } \\lim_{x \\to a} f(x) = \\ell \\text{ finie } \\Rightarrow g(a) = \\ell,\\ g = f \\text{ sur } D_f",
          "note": "La fonction g ainsi définie est continue en a."
        }
      ],
      "workedExample": {
        "title": "Prolonger $f(x) = \\frac{x-9}{\\sqrt{x-5}-2}$ en $9$",
        "statement": "Soit $f$ la fonction définie par $f(x) = \\frac{x-9}{\\sqrt{x-5}-2}$. Démontre que $f$ admet en $9$ un prolongement par continuité $\\varphi$, et définis-le.",
        "methodSteps": [
          "On a $D_f = [5 ; 9[ \\cup ]9 ; +\\infty[$ car il faut $x - 5 \\geq 0$ et $\\sqrt{x-5} - 2 \\neq 0$, soit $x \\neq 9$.",
          "Pour $x \\in D_f$, $f(x) = \\frac{(x-9)(\\sqrt{x-5}+2)}{x-9} = \\sqrt{x-5} + 2$ en multipliant par la quantité conjuguée.",
          "Donc $\\lim_{x \\to 9} f(x) = \\lim_{x \\to 9} (\\sqrt{x-5} + 2) = 4$.",
          "La fonction $\\varphi$ définie sur $[5 ; +\\infty[$ par $\\varphi(9) = 4$ et $\\varphi(x) = f(x)$ pour $x \\in D_f$ est le prolongement par continuité de $f$ en $9$."
        ],
        "conclusion": "$f$ est prolongeable par continuité en $9$ avec $\\varphi(9) = 4$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Continue sur un intervalle",
          "stepTheme": "Continue sur un intervalle",
          "stepBadge": "Continue sur un intervalle",
          "paragraphText": "• Une fonction $f$ est continue sur un intervalle $I$ si elle est continue en tout élément de $I$.\nLes fonctions polynôme, rationnelle, sinus, cosinus, racine carrée, puissance, valeur absolue et tangente sont continues sur tout intervalle inclus dans leurs ensembles de définition respectifs.\nUne fonction continue n'a pas de « saut » : on peut tracer sa courbe sans lever le crayon.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p03_q1",
            "type": "mcq",
            "prompt": "Que signifie « $f$ est continue sur l'intervalle $I$ » ?",
            "options": [
              "$f$ est dérivable sur $I$",
              "$f$ est continue en tout élément de $I$",
              "$f$ est monotone sur $I$",
              "$f$ est bornée sur $I$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $f$ est continue sur $I$ si elle est continue en chaque point de $I$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le prolongement par continuité",
          "stepTheme": "Le prolongement par continuité",
          "stepBadge": "Le prolongement par continuité",
          "paragraphText": "• Soit $a$ un réel qui n'appartient pas à $D_f$. Si $f$ admet une limite finie $\\ell$ en $a$, alors $f$ est prolongeable par continuité en $a$.\nLe prolongement $g$ est défini par $g(x) = f(x)$ pour $x \\in D_f$ et $g(a) = \\ell$ : il « bouche le trou » en $a$.\nExemple : $f(x) = \\frac{\\sin x}{x}$ a pour limite $1$ en $0$ ; son prolongement $g$ vérifie $g(0) = 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p03_q2",
            "type": "mcq",
            "prompt": "La fonction $f(x) = \\frac{\\sin x}{x}$ ($x \\neq 0$) a pour limite $1$ en $0$. Que vaut son prolongement par continuité $g$ en $0$ ?",
            "options": [
              "$g(0) = 0$",
              "$g(0) = 1$",
              "$g(0) = -1$",
              "Elle n'est pas prolongeable"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La limite en $0$ est finie et vaut $1$ : le prolongement par continuité $g$ est défini par $g(0) = 1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La quantité conjuguée",
          "stepTheme": "La quantité conjuguée",
          "stepBadge": "La quantité conjuguée",
          "paragraphText": "• Pour lever une forme indéterminée avec une racine, on multiplie par la quantité conjuguée.\nPour $f(x) = \\frac{x-9}{\\sqrt{x-5}-2}$, on obtient $f(x) = \\sqrt{x-5} + 2$ sur $D_f$.\nDonc $\\lim_{x \\to 9} f(x) = 4$ et le prolongement $\\varphi$ vérifie $\\varphi(9) = 4$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p03_q3",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\frac{x-9}{\\sqrt{x-5}-2}$, que vaut $\\lim_{x \\to 9} f(x)$ ?",
            "options": [
              "$0$",
              "$2$",
              "$4$",
              "$9$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En multipliant par la quantité conjuguée, $f(x) = \\sqrt{x-5} + 2$ sur $D_f$, donc la limite en $9$ vaut $\\sqrt{4} + 2 = 4$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Quand le prolongement est impossible",
          "stepTheme": "Quand le prolongement est impossible",
          "stepBadge": "Quand le prolongement est impossible",
          "paragraphText": "• Si les limites à gauche et à droite sont différentes, la fonction n'admet pas de limite en $a$ : elle n'est pas prolongeable par continuité.\nExemple du cours : $g(x) = \\frac{x^2+x}{x^2-|x|}$ vérifie $\\lim_{x \\to 0^-} g(x) = 1$ et $\\lim_{x \\to 0^+} g(x) = -1$.\nComme les deux limites sont différentes, $g$ n'admet pas de limite en $0$ : elle n'est pas prolongeable par continuité en $0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p03_q4",
            "type": "mcq",
            "prompt": "Une fonction vérifie $\\lim_{x \\to 0^-} g(x) = 1$ et $\\lim_{x \\to 0^+} g(x) = -1$. Est-elle prolongeable par continuité en $0$ ?",
            "options": [
              "Oui, avec $g(0) = 1$",
              "Oui, avec $g(0) = -1$",
              "Non, car elle n'admet pas de limite en $0$",
              "Oui, avec $g(0) = 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les limites à gauche et à droite sont différentes : $g$ n'admet pas de limite en $0$, donc elle n'est pas prolongeable par continuité en $0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Opérations sur les fonctions continues",
          "stepTheme": "Opérations sur les fonctions continues",
          "stepBadge": "Opérations sur les fonctions continues",
          "paragraphText": "• Si $f$ et $g$ sont continues sur un intervalle $I$, alors $f+g$, $fg$, $f^n$ et $|f|$ sont continues sur $I$.\nSi $g$ ne s'annule pas sur $I$, alors $\\frac{f}{g}$ est continue sur $I$ ; si $f$ est positive sur $I$, alors $\\sqrt{f}$ est continue sur $I$.\nExemple : $g(x) = x^3 + \\sin x$ est continue sur $\\mathbb{R}$ comme somme de deux fonctions continues sur $\\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p03_q5",
            "type": "mcq",
            "prompt": "Pourquoi la fonction $g(x) = x^3 + \\sin x$ est-elle continue sur $\\mathbb{R}$ ?",
            "options": [
              "Parce qu'elle est dérivable",
              "Parce que c'est la somme de deux fonctions continues sur $\\mathbb{R}$",
              "Parce qu'elle est paire",
              "Parce qu'elle est bornée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La somme de deux fonctions continues sur un intervalle est continue sur cet intervalle : $x \\mapsto x^3$ et $x \\mapsto \\sin x$ sont continues sur $\\mathbb{R}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Continuité d'une composée",
          "stepTheme": "Continuité d'une composée",
          "stepBadge": "Continuité d'une composée",
          "paragraphText": "• Si $f$ est continue sur un intervalle $I$ et $g$ continue sur l'ensemble $f(I)$, alors $g \\circ f$ est continue sur $I$.\nExemple : $h(x) = \\sqrt{x^2-1}$ est continue sur $]-\\infty ; -1]$ car $x \\mapsto x^2-1$ y est continue et positive, et la racine carrée est continue sur $[0 ; +\\infty[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p03_q6",
            "type": "mcq",
            "prompt": "Sur quel intervalle la fonction $h(x) = \\sqrt{x^2-1}$ est-elle continue d'après le cours ?",
            "options": [
              "Sur $\\mathbb{R}$ tout entier",
              "Sur $]-\\infty ; -1]$",
              "Sur $]-1 ; 1[$",
              "Sur $]0 ; +\\infty[$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La fonction $x \\mapsto x^2-1$ est continue et positive sur $]-\\infty ; -1]$, donc $\\sqrt{x^2-1}$ y est continue."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p03_q1",
          "type": "mcq",
          "prompt": "Que signifie « $f$ est continue sur l'intervalle $I$ » ?",
          "options": [
            "$f$ est dérivable sur $I$",
            "$f$ est continue en tout élément de $I$",
            "$f$ est monotone sur $I$",
            "$f$ est bornée sur $I$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $f$ est continue sur $I$ si elle est continue en chaque point de $I$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p03_q2",
          "type": "mcq",
          "prompt": "La fonction $f(x) = \\frac{\\sin x}{x}$ ($x \\neq 0$) a pour limite $1$ en $0$. Que vaut son prolongement par continuité $g$ en $0$ ?",
          "options": [
            "$g(0) = 0$",
            "$g(0) = 1$",
            "$g(0) = -1$",
            "Elle n'est pas prolongeable"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La limite en $0$ est finie et vaut $1$ : le prolongement par continuité $g$ est défini par $g(0) = 1$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p03_q3",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\frac{x-9}{\\sqrt{x-5}-2}$, que vaut $\\lim_{x \\to 9} f(x)$ ?",
          "options": [
            "$0$",
            "$2$",
            "$4$",
            "$9$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "En multipliant par la quantité conjuguée, $f(x) = \\sqrt{x-5} + 2$ sur $D_f$, donc la limite en $9$ vaut $\\sqrt{4} + 2 = 4$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p03_q4",
          "type": "mcq",
          "prompt": "Une fonction vérifie $\\lim_{x \\to 0^-} g(x) = 1$ et $\\lim_{x \\to 0^+} g(x) = -1$. Est-elle prolongeable par continuité en $0$ ?",
          "options": [
            "Oui, avec $g(0) = 1$",
            "Oui, avec $g(0) = -1$",
            "Non, car elle n'admet pas de limite en $0$",
            "Oui, avec $g(0) = 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les limites à gauche et à droite sont différentes : $g$ n'admet pas de limite en $0$, donc elle n'est pas prolongeable par continuité en $0$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p03_q5",
          "type": "mcq",
          "prompt": "Pourquoi la fonction $g(x) = x^3 + \\sin x$ est-elle continue sur $\\mathbb{R}$ ?",
          "options": [
            "Parce qu'elle est dérivable",
            "Parce que c'est la somme de deux fonctions continues sur $\\mathbb{R}$",
            "Parce qu'elle est paire",
            "Parce qu'elle est bornée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La somme de deux fonctions continues sur un intervalle est continue sur cet intervalle : $x \\mapsto x^3$ et $x \\mapsto \\sin x$ sont continues sur $\\mathbb{R}$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p03_q6",
          "type": "mcq",
          "prompt": "Sur quel intervalle la fonction $h(x) = \\sqrt{x^2-1}$ est-elle continue d'après le cours ?",
          "options": [
            "Sur $\\mathbb{R}$ tout entier",
            "Sur $]-\\infty ; -1]$",
            "Sur $]-1 ; 1[$",
            "Sur $]0 ; +\\infty[$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La fonction $x \\mapsto x^2-1$ est continue et positive sur $]-\\infty ; -1]$, donc $\\sqrt{x^2-1}$ y est continue."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l01_limites_continuite_p04",
      "order": 4,
      "title": "Image d'un intervalle par une fonction continue",
      "summary": "L'image d'un intervalle par une fonction continue est un intervalle ; le tableau donne ses bornes selon la monotonie.",
      "conceptExplanation": "L'image d'un intervalle $I$ par une fonction continue sur $I$ est un intervalle ou un singleton.\nSoit $f$ une fonction continue et strictement monotone sur un intervalle $I$, et $a$ et $b$ deux nombres réels tels que $a < b$.\n• Si $f$ est strictement croissante : $f([a ; b]) = [f(a) ; f(b)]$ ; $f([a ; b[) = [f(a) ; \\lim_{x \\to b^-} f(x)[$ ; $f(]a ; b]) = ]\\lim_{x \\to a^+} f(x) ; f(b)]$ ; $f(]a ; b[) = ]\\lim_{x \\to a^+} f(x) ; \\lim_{x \\to b^-} f(x)[$ ; $f([a ; +\\infty[) = [f(a) ; \\lim_{x \\to +\\infty} f(x)[$ ; $f(]-\\infty ; +\\infty[) = ]\\lim_{x \\to -\\infty} f(x) ; \\lim_{x \\to +\\infty} f(x)[$.\n• Si $f$ est strictement décroissante, les bornes sont échangées : $f([a ; b]) = [f(b) ; f(a)]$ ; $f([a ; b[) = ]\\lim_{x \\to b^-} f(x) ; f(a)]$ ; $f(]a ; b]) = [f(b) ; \\lim_{x \\to a^+} f(x)[$ ; $f(]a ; b[) = ]\\lim_{x \\to b^-} f(x) ; \\lim_{x \\to a^+} f(x)[$ ; $f([a ; +\\infty[) = ]\\lim_{x \\to +\\infty} f(x) ; f(a)]$ ; $f(]-\\infty ; +\\infty[) = ]\\lim_{x \\to +\\infty} f(x) ; \\lim_{x \\to -\\infty} f(x)[$.\nRègle pratique : une borne fermée du domaine donne une borne fermée (la valeur en ce point) si la limite y est finie ; une borne ouverte donne une borne ouverte (la limite en ce point).",
      "keyRule": "Image d'un intervalle par une fonction continue et monotone : on lit les bornes sur le tableau de variation.",
      "formulas": [
        {
          "name": "Image d'un segment par une fonction croissante",
          "formula": "f \\text{ continue et strictement croissante sur } [a ; b] \\Rightarrow f([a ; b]) = [f(a) ; f(b)]",
          "note": "Pour une fonction décroissante, les bornes sont échangées."
        }
      ],
      "workedExample": {
        "title": "Image de $]-\\pi ; \\pi]$ par le cosinus",
        "statement": "Détermine l'image de l'intervalle $]-\\pi ; \\pi]$ par la fonction cosinus.",
        "methodSteps": [
          "La fonction cosinus est continue sur $]-\\pi ; \\pi]$.",
          "Pour tout $x \\in ]-\\pi ; \\pi]$, on a $-1 \\leq \\cos(x) \\leq 1$.",
          "De plus $\\cos(\\pi) = -1$ et $\\cos(0) = 1$.",
          "Donc l'image de $]-\\pi ; \\pi]$ par le cosinus est $[-1 ; 1]$."
        ],
        "conclusion": "L'image de $]-\\pi ; \\pi]$ par $\\cos$ est l'intervalle $[-1 ; 1]$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'image d'un intervalle est un intervalle",
          "stepTheme": "L'image d'un intervalle est un intervalle",
          "stepBadge": "L'image d'un intervalle est un intervalle",
          "paragraphText": "• L'image d'un intervalle $I$ par une fonction continue sur $I$ est un intervalle ou un singleton.\nC'est la continuité qui garantit qu'il n'y a pas de « trou » dans l'image : la fonction prend toutes les valeurs intermédiaires.\nSans continuité, l'image d'un intervalle peut être un ensemble éclaté.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p04_q1",
            "type": "mcq",
            "prompt": "Que peut-on dire de l'image d'un intervalle $I$ par une fonction continue sur $I$ ?",
            "options": [
              "C'est toujours un segment",
              "C'est un intervalle ou un singleton",
              "C'est toujours $\\mathbb{R}$",
              "C'est un ensemble fini"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'image d'un intervalle par une fonction continue est un intervalle ou un singleton : la continuité empêche les « trous »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Fonction croissante sur un segment",
          "stepTheme": "Fonction croissante sur un segment",
          "stepBadge": "Fonction croissante sur un segment",
          "paragraphText": "• Si $f$ est continue et strictement croissante sur $[a ; b]$, alors $f([a ; b]) = [f(a) ; f(b)]$.\nLes bornes fermées donnent des bornes fermées : les valeurs $f(a)$ et $f(b)$ sont atteintes.\nSi $f$ est strictement décroissante, $f([a ; b]) = [f(b) ; f(a)]$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p04_q2",
            "type": "mcq",
            "prompt": "Soit $f$ continue et strictement croissante sur $[1 ; 3]$, avec $f(1) = 2$ et $f(3) = 7$. Que vaut $f([1 ; 3])$ ?",
            "options": [
              "$[2 ; 7]$",
              "$[7 ; 2]$",
              "$]2 ; 7[$",
              "$[1 ; 3]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour une fonction croissante, $f([a ; b]) = [f(a) ; f(b)]$ : ici $[f(1) ; f(3)] = [2 ; 7]$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Bornes ouvertes et limites",
          "stepTheme": "Bornes ouvertes et limites",
          "stepBadge": "Bornes ouvertes et limites",
          "paragraphText": "• Une borne ouverte du domaine donne une borne ouverte dans l'image, égale à la limite en ce point.\nExemple : si $f$ est strictement croissante sur $[a ; b[$, alors $f([a ; b[) = [f(a) ; \\lim_{x \\to b^-} f(x)[$.\nExemple du cours : $f$ continue et strictement croissante sur $]-\\infty ; -1]$ donne $f(]-\\infty ; -1]) = ]\\lim_{x \\to -\\infty} f(x) ; f(-1)] = ]-2 ; 5]$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p04_q3",
            "type": "mcq",
            "prompt": "Dans l'exemple du cours, $f$ est continue et strictement croissante sur $]-\\infty ; -1]$, avec $\\lim_{x \\to -\\infty} f(x) = -2$ et $f(-1) = 5$. Que vaut $f(]-\\infty ; -1])$ ?",
            "options": [
              "$[-2 ; 5]$",
              "$]-2 ; 5]$",
              "$]-2 ; 5[$",
              "$[-2 ; 5[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La borne $-\\infty$ est ouverte : l'image est ouverte en $-2$. La borne $-1$ est fermée : l'image est fermée en $5$. Donc $]-2 ; 5]$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Image de $]0 ; +\\infty[$ par une fonction décroissante",
          "stepTheme": "Image de $]0 ; +\\infty[$ par une fonction décroissante",
          "stepBadge": "Image de $]0 ; +\\infty[$ par une fonction décroissante",
          "paragraphText": "• Exemple du cours : $f$ est continue et strictement décroissante sur $]0 ; +\\infty[$, avec $\\lim_{x \\to 0^+} f(x) = +\\infty$ et $\\lim_{x \\to +\\infty} f(x) = 1$.\nDonc $f(]0 ; +\\infty[) = ]\\lim_{x \\to +\\infty} f(x) ; \\lim_{x \\to 0^+} f(x)[ = ]1 ; +\\infty[$.\nPour une fonction décroissante, les bornes sont échangées : la limite en $+\\infty$ devient la borne inférieure.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p04_q4",
            "type": "mcq",
            "prompt": "Dans l'exemple du cours, $f$ est continue et strictement décroissante sur $]0 ; +\\infty[$, avec $\\lim_{x \\to 0^+} f(x) = +\\infty$ et $\\lim_{x \\to +\\infty} f(x) = 1$. Que vaut $f(]0 ; +\\infty[)$ ?",
            "options": [
              "$]1 ; +\\infty[$",
              "$]-\\infty ; 1[$",
              "$[1 ; +\\infty[$",
              "$]0 ; 1[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour une fonction décroissante, $f(]0 ; +\\infty[) = ]\\lim_{x \\to +\\infty} f(x) ; \\lim_{x \\to 0^+} f(x)[ = ]1 ; +\\infty[$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Image de $[-1 ; 0[$ par une fonction décroissante",
          "stepTheme": "Image de $[-1 ; 0[$ par une fonction décroissante",
          "stepBadge": "Image de $[-1 ; 0[$ par une fonction décroissante",
          "paragraphText": "• Exemple du cours : $f$ est continue et strictement décroissante sur $[-1 ; 0[$, avec $f(-1) = 5$ et $\\lim_{x \\to 0^-} f(x) = 1$.\nDonc $f([-1 ; 0[) = ]\\lim_{x \\to 0^-} f(x) ; f(-1)] = ]1 ; 5]$.\nLa borne fermée $-1$ donne la borne fermée $5$ ; la borne ouverte $0$ donne la borne ouverte $1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p04_q5",
            "type": "mcq",
            "prompt": "Dans l'exemple du cours, $f$ est continue et strictement décroissante sur $[-1 ; 0[$, avec $f(-1) = 5$ et $\\lim_{x \\to 0^-} f(x) = 1$. Que vaut $f([-1 ; 0[)$ ?",
            "options": [
              "$[1 ; 5]$",
              "$]1 ; 5]$",
              "$[1 ; 5[$",
              "$]1 ; 5[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour une fonction décroissante, $f([-1 ; 0[) = ]\\lim_{x \\to 0^-} f(x) ; f(-1)] = ]1 ; 5]$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'image de $]-\\pi ; \\pi]$ par le cosinus",
          "stepTheme": "L'image de $]-\\pi ; \\pi]$ par le cosinus",
          "stepBadge": "L'image de $]-\\pi ; \\pi]$ par le cosinus",
          "paragraphText": "• La fonction cosinus est continue sur $]-\\pi ; \\pi]$ et $-1 \\leq \\cos(x) \\leq 1$ pour tout $x$ de cet intervalle.\nDe plus $\\cos(\\pi) = -1$ et $\\cos(0) = 1$ : les deux bornes sont atteintes.\nDonc l'image de $]-\\pi ; \\pi]$ par le cosinus est $[-1 ; 1]$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p04_q6",
            "type": "mcq",
            "prompt": "Que vaut l'image de l'intervalle $]-\\pi ; \\pi]$ par la fonction cosinus ?",
            "options": [
              "$[-1 ; 1]$",
              "$]-1 ; 1[$",
              "$[-1 ; 1[$",
              "$]0 ; 1]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cosinus est continu sur $]-\\pi ; \\pi]$, il prend toutes les valeurs entre $-1$ et $1$, et les deux bornes sont atteintes ($\\cos(\\pi) = -1$, $\\cos(0) = 1$) : l'image est $[-1 ; 1]$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p04_q1",
          "type": "mcq",
          "prompt": "Que peut-on dire de l'image d'un intervalle $I$ par une fonction continue sur $I$ ?",
          "options": [
            "C'est toujours un segment",
            "C'est un intervalle ou un singleton",
            "C'est toujours $\\mathbb{R}$",
            "C'est un ensemble fini"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'image d'un intervalle par une fonction continue est un intervalle ou un singleton : la continuité empêche les « trous »."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p04_q2",
          "type": "mcq",
          "prompt": "Soit $f$ continue et strictement croissante sur $[1 ; 3]$, avec $f(1) = 2$ et $f(3) = 7$. Que vaut $f([1 ; 3])$ ?",
          "options": [
            "$[2 ; 7]$",
            "$[7 ; 2]$",
            "$]2 ; 7[$",
            "$[1 ; 3]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour une fonction croissante, $f([a ; b]) = [f(a) ; f(b)]$ : ici $[f(1) ; f(3)] = [2 ; 7]$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p04_q3",
          "type": "mcq",
          "prompt": "Dans l'exemple du cours, $f$ est continue et strictement croissante sur $]-\\infty ; -1]$, avec $\\lim_{x \\to -\\infty} f(x) = -2$ et $f(-1) = 5$. Que vaut $f(]-\\infty ; -1])$ ?",
          "options": [
            "$[-2 ; 5]$",
            "$]-2 ; 5]$",
            "$]-2 ; 5[$",
            "$[-2 ; 5[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La borne $-\\infty$ est ouverte : l'image est ouverte en $-2$. La borne $-1$ est fermée : l'image est fermée en $5$. Donc $]-2 ; 5]$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p04_q4",
          "type": "mcq",
          "prompt": "Dans l'exemple du cours, $f$ est continue et strictement décroissante sur $]0 ; +\\infty[$, avec $\\lim_{x \\to 0^+} f(x) = +\\infty$ et $\\lim_{x \\to +\\infty} f(x) = 1$. Que vaut $f(]0 ; +\\infty[)$ ?",
          "options": [
            "$]1 ; +\\infty[$",
            "$]-\\infty ; 1[$",
            "$[1 ; +\\infty[$",
            "$]0 ; 1[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour une fonction décroissante, $f(]0 ; +\\infty[) = ]\\lim_{x \\to +\\infty} f(x) ; \\lim_{x \\to 0^+} f(x)[ = ]1 ; +\\infty[$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p04_q5",
          "type": "mcq",
          "prompt": "Dans l'exemple du cours, $f$ est continue et strictement décroissante sur $[-1 ; 0[$, avec $f(-1) = 5$ et $\\lim_{x \\to 0^-} f(x) = 1$. Que vaut $f([-1 ; 0[)$ ?",
          "options": [
            "$[1 ; 5]$",
            "$]1 ; 5]$",
            "$[1 ; 5[$",
            "$]1 ; 5[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour une fonction décroissante, $f([-1 ; 0[) = ]\\lim_{x \\to 0^-} f(x) ; f(-1)] = ]1 ; 5]$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p04_q6",
          "type": "mcq",
          "prompt": "Que vaut l'image de l'intervalle $]-\\pi ; \\pi]$ par la fonction cosinus ?",
          "options": [
            "$[-1 ; 1]$",
            "$]-1 ; 1[$",
            "$[-1 ; 1[$",
            "$]0 ; 1]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cosinus est continu sur $]-\\pi ; \\pi]$, il prend toutes les valeurs entre $-1$ et $1$, et les deux bornes sont atteintes ($\\cos(\\pi) = -1$, $\\cos(0) = 1$) : l'image est $[-1 ; 1]$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l01_limites_continuite_p05",
      "order": 5,
      "title": "Bijection, réciproque et théorème des valeurs intermédiaires",
      "summary": "Une fonction continue et strictement monotone est une bijection ; le TVI garantit l'existence (et l'unicité) des solutions.",
      "conceptExplanation": "Si $f$ est une fonction continue et strictement monotone sur un intervalle $I$, alors :\n• $f$ est une bijection de $I$ sur l'intervalle $f(I)$.\n• La bijection réciproque $f^{-1}$ de $f$ est continue et strictement monotone sur $f(I)$.\n• $f^{-1}$ a le même sens de variation que $f$.\nRemarque : les courbes représentatives de $f$ et de $f^{-1}$ dans un repère orthonormé sont symétriques par rapport à la droite d'équation $y = x$.\nThéorème des valeurs intermédiaires : soit $f$ une fonction continue sur un intervalle $I$, $a$ et $b$ deux éléments de $I$. Pour tout $m$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = m$ admet au moins une solution comprise entre $a$ et $b$.\nCorollaire 1 : si $f$ est continue et strictement monotone sur $I$, l'équation $f(x) = m$ admet une unique solution comprise entre $a$ et $b$.\nCorollaire 2 : si $f$ est continue et strictement monotone sur $[a ; b]$ et si $f(a) \\times f(b) < 0$, alors l'équation $f(x) = 0$ admet une solution unique dans $]a ; b[$.\nValeur approchée de la solution : par balayage (on teste les valeurs avec un pas fixe jusqu'à trouver un changement de signe) ou par dichotomie (on divise l'intervalle en deux à chaque étape en gardant le sous-intervalle où les images sont de signes contraires).",
      "keyRule": "Continue + strictement monotone = bijection. TVI : entre deux valeurs prises, toutes les valeurs intermédiaires sont prises.",
      "formulas": [
        {
          "name": "Théorème des valeurs intermédiaires",
          "formula": "f \\text{ continue sur } I,\\ m \\text{ entre } f(a) \\text{ et } f(b) \\Rightarrow f(x) = m \\text{ admet au moins une solution entre } a \\text{ et } b",
          "note": "Avec la stricte monotonie, la solution est unique."
        },
        {
          "name": "Corollaire : solution unique de f(x) = 0",
          "formula": "f \\text{ continue et strictement monotone sur } [a ; b],\\ f(a) \\times f(b) < 0 \\Rightarrow f(x) = 0 \\text{ admet une unique solution dans } ]a ; b[",
          "note": "Le changement de signe repère la solution."
        }
      ],
      "workedExample": {
        "title": "L'équation $2x^3 + 3x - 1 = 0$ admet une unique solution",
        "statement": "Démontre que l'équation $2x^3 + 3x - 1 = 0$ admet une unique solution $\\alpha$ dans $]0 ; 1[$, puis donne une valeur approchée de $\\alpha$ à $10^{-1}$ près.",
        "methodSteps": [
          "Soit $f(x) = 2x^3 + 3x - 1$ sur $[0 ; 1]$. $f$ est dérivable et $f'(x) = 6x^2 + 3 > 0$ : $f$ est strictement croissante sur $[0 ; 1]$.",
          "$f(0) = -1$ et $f(1) = 4$ : $f(0) \\times f(1) < 0$.",
          "Par le corollaire du TVI, l'équation $f(x) = 0$ admet une unique solution $\\alpha$ dans $]0 ; 1[$.",
          "Par balayage avec un pas de $0{,}1$ : $f(0{,}3) \\approx -0{,}05$ et $f(0{,}4) \\approx 0{,}3$ sont de signes contraires, donc $0{,}3 < \\alpha < 0{,}4$."
        ],
        "conclusion": "L'équation admet une unique solution $\\alpha$ dans $]0 ; 1[$, avec $\\alpha \\approx 0{,}3$ à $10^{-1}$ près."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Continue et monotone = bijection",
          "stepTheme": "Continue et monotone = bijection",
          "stepBadge": "Continue et monotone = bijection",
          "paragraphText": "• Si $f$ est continue et strictement monotone sur un intervalle $I$, alors $f$ est une bijection de $I$ sur l'intervalle $f(I)$.\nChaque valeur de $f(I)$ est prise une fois et une seule : l'équation $f(x) = m$ a exactement une solution pour tout $m$ de $f(I)$.\nExemple du cours : $f(x) = \\frac{x^2}{1+x^2}$ est continue et strictement croissante sur $[0 ; +\\infty[$, donc c'est une bijection de $[0 ; +\\infty[$ sur $[0 ; 1[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p05_q1",
            "type": "mcq",
            "prompt": "Une fonction continue et strictement croissante sur $[0 ; +\\infty[$ vérifie $f([0 ; +\\infty[) = [0 ; 1[$. Que peut-on dire de $f$ ?",
            "options": [
              "C'est une bijection de $[0 ; +\\infty[$ sur $[0 ; 1[$",
              "Elle n'est pas bijective",
              "Elle est périodique",
              "Elle est constante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une fonction continue et strictement monotone sur un intervalle est une bijection de cet intervalle sur son image : ici $[0 ; 1[$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La bijection réciproque",
          "stepTheme": "La bijection réciproque",
          "stepBadge": "La bijection réciproque",
          "paragraphText": "• La bijection réciproque $f^{-1}$ est continue et strictement monotone sur $f(I)$, et elle a le même sens de variation que $f$.\nLes courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à la droite d'équation $y = x$.\nExemple du cours : $g(x) = -x^2 + 2x + 3$ est une bijection de $[1 ; 3]$ sur $[0 ; 4]$, et sa réciproque est $g^{-1}(x) = 1 + \\sqrt{4-x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p05_q2",
            "type": "mcq",
            "prompt": "La fonction $g(x) = -x^2 + 2x + 3$ est une bijection de $[1 ; 3]$ sur $[0 ; 4]$. Que vaut sa réciproque $g^{-1}(x)$ ?",
            "options": [
              "$1 + \\sqrt{4-x}$",
              "$1 - \\sqrt{4-x}$",
              "$-1 + \\sqrt{4-x}$",
              "$\\sqrt{4-x}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On résout $y = -x^2 + 2x + 3$ pour $x \\in [1 ; 3]$ : $x = 1 + \\sqrt{4-y}$, donc $g^{-1}(x) = 1 + \\sqrt{4-x}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le théorème des valeurs intermédiaires",
          "stepTheme": "Le théorème des valeurs intermédiaires",
          "stepBadge": "Le théorème des valeurs intermédiaires",
          "paragraphText": "• Soit $f$ continue sur un intervalle $I$, $a$ et $b$ deux éléments de $I$. Pour tout $m$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = m$ admet au moins une solution comprise entre $a$ et $b$.\nC'est la traduction de « la courbe ne saute pas de valeur » : toutes les valeurs intermédiaires sont prises.\nLa continuité est indispensable : sans elle, le théorème est faux.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p05_q3",
            "type": "mcq",
            "prompt": "Que dit le théorème des valeurs intermédiaires pour une fonction $f$ continue sur $[a ; b]$ ?",
            "options": [
              "$f$ est dérivable sur $[a ; b]$",
              "Tout $m$ entre $f(a)$ et $f(b)$ est atteint par $f$",
              "$f$ est monotone sur $[a ; b]$",
              "$f$ s'annule sur $[a ; b]$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le TVI affirme que tout nombre $m$ compris entre $f(a)$ et $f(b)$ est l'image d'au moins un $x$ entre $a$ et $b$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'unicité avec la monotonie",
          "stepTheme": "L'unicité avec la monotonie",
          "stepBadge": "L'unicité avec la monotonie",
          "paragraphText": "• Si $f$ est continue et strictement monotone sur $I$, l'équation $f(x) = m$ admet une unique solution entre $a$ et $b$.\nCorollaire : si $f$ est continue et strictement monotone sur $[a ; b]$ et $f(a) \\times f(b) < 0$, alors $f(x) = 0$ admet une solution unique dans $]a ; b[$.\nExemple du cours : $f$ continue et strictement décroissante sur $[-1 ; +\\infty[$, $f([-1 ; +\\infty[) = ]-\\infty ; 5]$ : l'équation $f(x) = -10$ admet une unique solution, mais $f(x) = 13$ n'en admet aucune car $13 \\notin ]-\\infty ; 5]$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p05_q4",
            "type": "mcq",
            "prompt": "Dans l'exemple du cours, $f$ est continue et strictement décroissante sur $[-1 ; +\\infty[$ et $f([-1 ; +\\infty[) = ]-\\infty ; 5]$. L'équation $f(x) = 13$ admet-elle une solution ?",
            "options": [
              "Oui, une unique solution",
              "Oui, deux solutions",
              "Non, car $13 \\notin ]-\\infty ; 5]$",
              "Non, car $f$ est décroissante"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le TVI ne s'applique que pour les valeurs de l'image : $13$ n'appartient pas à $]-\\infty ; 5]$, donc l'équation $f(x) = 13$ n'a pas de solution."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Montrer qu'une équation a une unique solution",
          "stepTheme": "Montrer qu'une équation a une unique solution",
          "stepBadge": "Montrer qu'une équation a une unique solution",
          "paragraphText": "• Méthode : on pose $f(x)$ le membre de gauche, on montre que $f$ est continue et strictement monotone, puis que $f(a) \\times f(b) < 0$.\nExemple : $f(x) = 2x^3 + 3x - 1$ sur $[0 ; 1]$ : $f'(x) = 6x^2 + 3 > 0$ donc $f$ est strictement croissante ; $f(0) = -1$ et $f(1) = 4$ donc $f(0) \\times f(1) < 0$.\nConclusion : l'équation $2x^3 + 3x - 1 = 0$ admet une unique solution $\\alpha$ dans $]0 ; 1[$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p05_q5",
            "type": "mcq",
            "prompt": "Pour $f(x) = 2x^3 + 3x - 1$ sur $[0 ; 1]$, on a $f(0) = -1$ et $f(1) = 4$, et $f$ est strictement croissante. Que conclut-on ?",
            "options": [
              "L'équation $f(x) = 0$ n'a pas de solution",
              "L'équation $f(x) = 0$ admet une unique solution dans $]0 ; 1[$",
              "L'équation $f(x) = 0$ admet deux solutions",
              "On ne peut rien conclure"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f$ est continue et strictement monotone sur $[0 ; 1]$ et $f(0) \\times f(1) = -4 < 0$ : par le corollaire du TVI, l'équation admet une unique solution dans $]0 ; 1[$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Approcher la solution : balayage et dichotomie",
          "stepTheme": "Approcher la solution : balayage et dichotomie",
          "stepBadge": "Approcher la solution : balayage et dichotomie",
          "paragraphText": "• Méthode de balayage : on teste les valeurs avec un pas fixe (ici $0{,}1$) jusqu'à trouver deux valeurs consécutives dont les images sont de signes contraires.\nPour $f(x) = 2x^3 + 3x - 1$ : $f(0{,}3) \\approx -0{,}05$ et $f(0{,}4) \\approx 0{,}3$ sont de signes contraires, donc $0{,}3 < \\alpha < 0{,}4$.\nMéthode de dichotomie : on partage l'intervalle en deux à chaque étape en gardant le sous-intervalle où les images sont de signes contraires ; on obtient le même encadrement $0{,}3 < \\alpha < 0{,}4$.\nUne valeur approchée de $\\alpha$ à $10^{-1}$ près est donc $0{,}3$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p05_q6",
            "type": "mcq",
            "prompt": "Pour $f(x) = 2x^3 + 3x - 1$, on a $f(0{,}3) \\approx -0{,}05$ et $f(0{,}4) \\approx 0{,}3$. Quelle valeur approchée de $\\alpha$ à $10^{-1}$ près obtient-on ?",
            "options": [
              "$0{,}2$",
              "$0{,}3$",
              "$0{,}4$",
              "$0{,}5$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f(0{,}3)$ et $f(0{,}4)$ sont de signes contraires, donc $0{,}3 < \\alpha < 0{,}4$ : une valeur approchée de $\\alpha$ à $10^{-1}$ près est $0{,}3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p05_q1",
          "type": "mcq",
          "prompt": "Une fonction continue et strictement croissante sur $[0 ; +\\infty[$ vérifie $f([0 ; +\\infty[) = [0 ; 1[$. Que peut-on dire de $f$ ?",
          "options": [
            "C'est une bijection de $[0 ; +\\infty[$ sur $[0 ; 1[$",
            "Elle n'est pas bijective",
            "Elle est périodique",
            "Elle est constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une fonction continue et strictement monotone sur un intervalle est une bijection de cet intervalle sur son image : ici $[0 ; 1[$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p05_q2",
          "type": "mcq",
          "prompt": "La fonction $g(x) = -x^2 + 2x + 3$ est une bijection de $[1 ; 3]$ sur $[0 ; 4]$. Que vaut sa réciproque $g^{-1}(x)$ ?",
          "options": [
            "$1 + \\sqrt{4-x}$",
            "$1 - \\sqrt{4-x}$",
            "$-1 + \\sqrt{4-x}$",
            "$\\sqrt{4-x}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On résout $y = -x^2 + 2x + 3$ pour $x \\in [1 ; 3]$ : $x = 1 + \\sqrt{4-y}$, donc $g^{-1}(x) = 1 + \\sqrt{4-x}$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p05_q3",
          "type": "mcq",
          "prompt": "Que dit le théorème des valeurs intermédiaires pour une fonction $f$ continue sur $[a ; b]$ ?",
          "options": [
            "$f$ est dérivable sur $[a ; b]$",
            "Tout $m$ entre $f(a)$ et $f(b)$ est atteint par $f$",
            "$f$ est monotone sur $[a ; b]$",
            "$f$ s'annule sur $[a ; b]$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le TVI affirme que tout nombre $m$ compris entre $f(a)$ et $f(b)$ est l'image d'au moins un $x$ entre $a$ et $b$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p05_q4",
          "type": "mcq",
          "prompt": "Dans l'exemple du cours, $f$ est continue et strictement décroissante sur $[-1 ; +\\infty[$ et $f([-1 ; +\\infty[) = ]-\\infty ; 5]$. L'équation $f(x) = 13$ admet-elle une solution ?",
          "options": [
            "Oui, une unique solution",
            "Oui, deux solutions",
            "Non, car $13 \\notin ]-\\infty ; 5]$",
            "Non, car $f$ est décroissante"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le TVI ne s'applique que pour les valeurs de l'image : $13$ n'appartient pas à $]-\\infty ; 5]$, donc l'équation $f(x) = 13$ n'a pas de solution."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p05_q5",
          "type": "mcq",
          "prompt": "Pour $f(x) = 2x^3 + 3x - 1$ sur $[0 ; 1]$, on a $f(0) = -1$ et $f(1) = 4$, et $f$ est strictement croissante. Que conclut-on ?",
          "options": [
            "L'équation $f(x) = 0$ n'a pas de solution",
            "L'équation $f(x) = 0$ admet une unique solution dans $]0 ; 1[$",
            "L'équation $f(x) = 0$ admet deux solutions",
            "On ne peut rien conclure"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f$ est continue et strictement monotone sur $[0 ; 1]$ et $f(0) \\times f(1) = -4 < 0$ : par le corollaire du TVI, l'équation admet une unique solution dans $]0 ; 1[$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p05_q6",
          "type": "mcq",
          "prompt": "Pour $f(x) = 2x^3 + 3x - 1$, on a $f(0{,}3) \\approx -0{,}05$ et $f(0{,}4) \\approx 0{,}3$. Quelle valeur approchée de $\\alpha$ à $10^{-1}$ près obtient-on ?",
          "options": [
            "$0{,}2$",
            "$0{,}3$",
            "$0{,}4$",
            "$0{,}5$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f(0{,}3)$ et $f(0{,}4)$ sont de signes contraires, donc $0{,}3 < \\alpha < 0{,}4$ : une valeur approchée de $\\alpha$ à $10^{-1}$ près est $0{,}3$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l01_limites_continuite_p06",
      "order": 6,
      "title": "Racine nième et puissance d'exposant rationnel",
      "summary": "La racine nième est la réciproque de la puissance nième ; les puissances d'exposant rationnel suivent les mêmes règles que les puissances entières.",
      "conceptExplanation": "Soit $n$ un nombre entier naturel tel que $n \\geq 2$. La fonction racine nième est la bijection réciproque de la fonction $f : [0 ; +\\infty[ \\to [0 ; +\\infty[$, $x \\mapsto x^n$.\nLa racine nième d'un nombre réel positif ou nul $x$ est notée $\\sqrt[n]{x}$ ou $x^{\\frac{1}{n}}$.\nConséquences : pour $x \\geq 0$ et $y \\geq 0$, $y = \\sqrt[n]{x}$ si et seulement si $x = y^n$ ; $(\\sqrt[n]{x})^n = x$ et $\\sqrt[n]{x^n} = x$.\nExemples : $x^3 = 5$ équivaut à $x = \\sqrt[3]{5}$ ; $x^2 = 7$ équivaut à $x = \\sqrt{7}$ ; $\\sqrt[4]{16} = 2$ ; $\\sqrt[5]{120} = 120^{\\frac{1}{5}}$.\nPuissance d'exposant rationnel : soit $p$ un entier relatif non nul et $q$ un entier naturel tel que $q \\geq 2$. Pour tout réel $a$ strictement positif, on pose $a^{\\frac{p}{q}} = (a^{\\frac{1}{q}})^p = (\\sqrt[q]{a})^p = \\sqrt[q]{a^p}$.\nPropriétés : pour tous rationnels $r$ et $r'$ non nuls et tous réels strictement positifs $a$ et $b$ : $a^r \\times a^{r'} = a^{r+r'}$ ; $\\frac{1}{a^r} = a^{-r}$ ; $\\frac{a^r}{a^{r'}} = a^{r-r'}$ ; $(a^r)^{r'} = a^{rr'}$ ; $a^r \\times b^r = (ab)^r$ ; $\\frac{a^r}{b^r} = (\\frac{a}{b})^r$.",
      "keyRule": "Les puissances d'exposant rationnel obéissent aux mêmes règles que les puissances entières : on additionne les exposants quand on multiplie.",
      "formulas": [
        {
          "name": "Racine nième",
          "formula": "\\sqrt[n]{x} = x^{\\frac{1}{n}},\\ (\\sqrt[n]{x})^n = x,\\ \\sqrt[n]{x^n} = x \\quad (x \\geq 0,\\ n \\geq 2)",
          "note": "La racine nième est la réciproque de la puissance nième."
        },
        {
          "name": "Puissance d'exposant rationnel",
          "formula": "a^{\\frac{p}{q}} = (\\sqrt[q]{a})^p = \\sqrt[q]{a^p} \\quad (a > 0)",
          "note": "p entier relatif non nul, q entier naturel supérieur ou égal à 2."
        },
        {
          "name": "Règles de calcul",
          "formula": "a^r \\times a^{r'} = a^{r+r'},\\ (a^r)^{r'} = a^{rr'},\\ a^r \\times b^r = (ab)^r",
          "note": "Mêmes règles que pour les exposants entiers."
        }
      ],
      "workedExample": {
        "title": "Simplifier $\\sqrt[3]{\\sqrt{a^5 b}} \\times \\sqrt{\\sqrt[3]{ab^5}}$",
        "statement": "Justifie que pour tous nombres réels $a$ et $b$ strictement positifs : $\\sqrt[3]{\\sqrt{a^5 b}} \\times \\sqrt{\\sqrt[3]{ab^5}} = ab$.",
        "methodSteps": [
          "On écrit tout en puissances : $\\sqrt[3]{\\sqrt{a^5 b}} = (a^5 b)^{\\frac{1}{6}} = a^{\\frac{5}{6}} b^{\\frac{1}{6}}$.",
          "De même, $\\sqrt{\\sqrt[3]{ab^5}} = (ab^5)^{\\frac{1}{6}} = a^{\\frac{1}{6}} b^{\\frac{5}{6}}$.",
          "Le produit vaut $a^{\\frac{5}{6} + \\frac{1}{6}} b^{\\frac{1}{6} + \\frac{5}{6}} = a^1 b^1$.",
          "Donc $\\sqrt[3]{\\sqrt{a^5 b}} \\times \\sqrt{\\sqrt[3]{ab^5}} = ab$."
        ],
        "conclusion": "En écrivant les racines comme des puissances d'exposant rationnel, le produit se simplifie en $ab$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La racine nième",
          "stepTheme": "La racine nième",
          "stepBadge": "La racine nième",
          "paragraphText": "• Soit $n \\geq 2$ un entier naturel. La fonction racine nième est la bijection réciproque de la fonction $x \\mapsto x^n$ de $[0 ; +\\infty[$ dans $[0 ; +\\infty[$.\nLa racine nième de $x \\geq 0$ se note $\\sqrt[n]{x}$ ou $x^{\\frac{1}{n}}$.\nPour $x \\geq 0$ et $y \\geq 0$ : $y = \\sqrt[n]{x}$ si et seulement si $x = y^n$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p06_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\sqrt[4]{16}$ ?",
            "options": [
              "$2$",
              "$4$",
              "$8$",
              "$16$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\sqrt[4]{16} = 2$ car $2^4 = 16$ : la racine quatrième est la réciproque de la puissance quatrième."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les conséquences de la définition",
          "stepTheme": "Les conséquences de la définition",
          "stepBadge": "Les conséquences de la définition",
          "paragraphText": "• Pour $x \\geq 0$ : $(\\sqrt[n]{x})^n = x$ et $\\sqrt[n]{x^n} = x$.\nExemples : $x^3 = 5$ équivaut à $x = \\sqrt[3]{5}$ ; $x^2 = 7$ équivaut à $x = \\sqrt{7}$.\nLa racine nième « défait » la puissance nième, et réciproquement.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p06_q2",
            "type": "mcq",
            "prompt": "Pour $x \\geq 0$, que vaut $\\sqrt[3]{x^3}$ ?",
            "options": [
              "$x^3$",
              "$x$",
              "$\\sqrt{x}$",
              "$3x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La racine cubique est la réciproque de la puissance cubique : $\\sqrt[3]{x^3} = x$ pour $x \\geq 0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La puissance d'exposant rationnel",
          "stepTheme": "La puissance d'exposant rationnel",
          "stepBadge": "La puissance d'exposant rationnel",
          "paragraphText": "• Soit $p$ un entier relatif non nul et $q \\geq 2$ un entier naturel. Pour $a > 0$, on pose $a^{\\frac{p}{q}} = (\\sqrt[q]{a})^p = \\sqrt[q]{a^p}$.\nAutrement dit, une puissance d'exposant rationnel est une racine suivie d'une puissance entière (ou l'inverse).\nExemple : $\\sqrt{\\sqrt{\\sqrt{a}}} = a^{\\frac{1}{8}}$ car on applique trois fois la racine carrée, soit l'exposant $\\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p06_q3",
            "type": "mcq",
            "prompt": "Pour $a > 0$, que vaut $\\sqrt{\\sqrt{\\sqrt{a}}}$ sous la forme $a^{\\alpha}$ ?",
            "options": [
              "$a^{\\frac{1}{2}}$",
              "$a^{\\frac{1}{4}}$",
              "$a^{\\frac{1}{8}}$",
              "$a^{\\frac{1}{6}}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Trois racines carrées successives : l'exposant est $\\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}$, donc $\\sqrt{\\sqrt{\\sqrt{a}}} = a^{\\frac{1}{8}}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les règles de calcul",
          "stepTheme": "Les règles de calcul",
          "stepBadge": "Les règles de calcul",
          "paragraphText": "• Pour $r$ et $r'$ rationnels non nuls et $a, b > 0$ : $a^r \\times a^{r'} = a^{r+r'}$ ; $\\frac{1}{a^r} = a^{-r}$ ; $\\frac{a^r}{a^{r'}} = a^{r-r'}$ ; $(a^r)^{r'} = a^{rr'}$ ; $a^r \\times b^r = (ab)^r$ ; $\\frac{a^r}{b^r} = (\\frac{a}{b})^r$.\nCe sont exactement les mêmes règles que pour les exposants entiers.\nExemple : $\\sqrt[3]{a} \\times \\sqrt[4]{a} = a^{\\frac{1}{3}} \\times a^{\\frac{1}{4}} = a^{\\frac{7}{12}}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p06_q4",
            "type": "mcq",
            "prompt": "Pour $a > 0$, que vaut $\\sqrt[3]{a} \\times \\sqrt[4]{a}$ sous la forme $a^{\\alpha}$ ?",
            "options": [
              "$a^{\\frac{1}{12}}$",
              "$a^{\\frac{7}{12}}$",
              "$a^{\\frac{1}{7}}$",
              "$a^{\\frac{5}{12}}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\sqrt[3]{a} \\times \\sqrt[4]{a} = a^{\\frac{1}{3}} \\times a^{\\frac{1}{4}} = a^{\\frac{1}{3} + \\frac{1}{4}} = a^{\\frac{7}{12}}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Simplifier un produit de racines",
          "stepTheme": "Simplifier un produit de racines",
          "stepBadge": "Simplifier un produit de racines",
          "paragraphText": "• Pour $a, b > 0$ : $\\sqrt[3]{\\sqrt{a^5 b}} \\times \\sqrt{\\sqrt[3]{ab^5}} = ab$.\nOn écrit tout en puissances : $\\sqrt[3]{\\sqrt{a^5 b}} = a^{\\frac{5}{6}} b^{\\frac{1}{6}}$ et $\\sqrt{\\sqrt[3]{ab^5}} = a^{\\frac{1}{6}} b^{\\frac{5}{6}}$.\nLe produit donne $a^{\\frac{5}{6} + \\frac{1}{6}} b^{\\frac{1}{6} + \\frac{5}{6}} = ab$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p06_q5",
            "type": "mcq",
            "prompt": "Pour $a, b > 0$, que vaut $\\sqrt[3]{\\sqrt{a^5 b}} \\times \\sqrt{\\sqrt[3]{ab^5}}$ ?",
            "options": [
              "$a^2 b^2$",
              "$ab$",
              "$\\sqrt{ab}$",
              "$a + b$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En puissances : $a^{\\frac{5}{6}} b^{\\frac{1}{6}} \\times a^{\\frac{1}{6}} b^{\\frac{5}{6}} = a^{\\frac{6}{6}} b^{\\frac{6}{6}} = ab$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La température après un long refroidissement",
          "stepTheme": "La température après un long refroidissement",
          "stepBadge": "La température après un long refroidissement",
          "paragraphText": "• Situation complexe du cours : la température d'un objet est $f(t) = \\frac{200}{t} + 10$ (en °C, $t$ en minutes).\nAprès une très longue période, on calcule $\\lim_{t \\to +\\infty} f(t) = \\lim_{t \\to +\\infty} (\\frac{200}{t} + 10) = 10$.\nLa température de l'objet après une longue période de refroidissement est donc de $10$ °C : c'est la limite de la fonction qui donne la valeur finale.\nPiège : ne pas confondre la valeur en un instant donné et la limite quand le temps tend vers l'infini.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l01_limites_continuite_p06_q6",
            "type": "mcq",
            "prompt": "La température d'un objet est $f(t) = \\frac{200}{t} + 10$ (en °C). Quelle est sa température après une très longue période de refroidissement ?",
            "options": [
              "$0$ °C",
              "$10$ °C",
              "$200$ °C",
              "$210$ °C"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Quand $t$ tend vers $+\\infty$, $\\frac{200}{t}$ tend vers $0$ : la température tend vers $10$ °C."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p06_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\sqrt[4]{16}$ ?",
          "options": [
            "$2$",
            "$4$",
            "$8$",
            "$16$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\sqrt[4]{16} = 2$ car $2^4 = 16$ : la racine quatrième est la réciproque de la puissance quatrième."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p06_q2",
          "type": "mcq",
          "prompt": "Pour $x \\geq 0$, que vaut $\\sqrt[3]{x^3}$ ?",
          "options": [
            "$x^3$",
            "$x$",
            "$\\sqrt{x}$",
            "$3x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La racine cubique est la réciproque de la puissance cubique : $\\sqrt[3]{x^3} = x$ pour $x \\geq 0$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p06_q3",
          "type": "mcq",
          "prompt": "Pour $a > 0$, que vaut $\\sqrt{\\sqrt{\\sqrt{a}}}$ sous la forme $a^{\\alpha}$ ?",
          "options": [
            "$a^{\\frac{1}{2}}$",
            "$a^{\\frac{1}{4}}$",
            "$a^{\\frac{1}{8}}$",
            "$a^{\\frac{1}{6}}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Trois racines carrées successives : l'exposant est $\\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}$, donc $\\sqrt{\\sqrt{\\sqrt{a}}} = a^{\\frac{1}{8}}$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p06_q4",
          "type": "mcq",
          "prompt": "Pour $a > 0$, que vaut $\\sqrt[3]{a} \\times \\sqrt[4]{a}$ sous la forme $a^{\\alpha}$ ?",
          "options": [
            "$a^{\\frac{1}{12}}$",
            "$a^{\\frac{7}{12}}$",
            "$a^{\\frac{1}{7}}$",
            "$a^{\\frac{5}{12}}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\sqrt[3]{a} \\times \\sqrt[4]{a} = a^{\\frac{1}{3}} \\times a^{\\frac{1}{4}} = a^{\\frac{1}{3} + \\frac{1}{4}} = a^{\\frac{7}{12}}$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p06_q5",
          "type": "mcq",
          "prompt": "Pour $a, b > 0$, que vaut $\\sqrt[3]{\\sqrt{a^5 b}} \\times \\sqrt{\\sqrt[3]{ab^5}}$ ?",
          "options": [
            "$a^2 b^2$",
            "$ab$",
            "$\\sqrt{ab}$",
            "$a + b$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En puissances : $a^{\\frac{5}{6}} b^{\\frac{1}{6}} \\times a^{\\frac{1}{6}} b^{\\frac{5}{6}} = a^{\\frac{6}{6}} b^{\\frac{6}{6}} = ab$."
        },
        {
          "id": "terminale_c_maths_numerique_l01_limites_continuite_p06_q6",
          "type": "mcq",
          "prompt": "La température d'un objet est $f(t) = \\frac{200}{t} + 10$ (en °C). Quelle est sa température après une très longue période de refroidissement ?",
          "options": [
            "$0$ °C",
            "$10$ °C",
            "$200$ °C",
            "$210$ °C"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Quand $t$ tend vers $+\\infty$, $\\frac{200}{t}$ tend vers $0$ : la température tend vers $10$ °C."
        }
      ]
    }
  ]
};
