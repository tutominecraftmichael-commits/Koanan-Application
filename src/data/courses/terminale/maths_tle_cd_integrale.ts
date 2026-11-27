import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 10 : Calcul intégral » (format v2 : mini-leçons de 5 à 8 étapes). Pas de livre 2025-2026 pour cette leçon.
// Source : https://lyc.ecole-ci.org/course/view.php?id=2853
export const MATHS_TLE_CD_L10_INTEGRALE: CurriculumChapter = {
  "id": "terminale_c_maths_numerique_l10_integrale",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 10,
  "title": "Leçon 10 : Calcul intégral",
  "summary": "Notion d'intégrale d'une fonction continue, propriétés algébriques et de comparaison, valeur moyenne, techniques de calcul (primitives, intégration par parties, changement de variable), fonctions paires, impaires et périodiques, calcul d'aires et fonction F(x) = ∫_a^x f(t)dt.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2853",
  "points": [
    {
      "id": "terminale_c_maths_numerique_l10_integrale_p01",
      "order": 1,
      "title": "Notion d'intégrale d'une fonction continue",
      "summary": "Définition de l'intégrale à l'aide d'une primitive, bornes et variable muette, conséquences immédiates.",
      "conceptExplanation": "Soit $f$ une fonction continue sur un intervalle $K$, $a$ et $b$ deux éléments de $K$ et $F$ une primitive de $f$ sur $K$.\nLe nombre réel $F(b) - F(a)$ ne dépend pas de $F$ : il est appelé intégrale de $a$ à $b$ de $f$ et noté $\\int_a^b f(x)dx = [F(x)]_a^b = F(b) - F(a)$.\n$a$ et $b$ sont les bornes de l'intégrale. La lettre $x$ n'intervient pas dans le résultat : on peut la remplacer par toute autre lettre, on l'appelle variable muette.\nConséquences : $\\int_a^a f(x)dx = 0$ et $\\int_b^a f(x)dx = -\\int_a^b f(x)dx$.",
      "keyRule": "∫(a→b) f(x)dx = F(b) − F(a). Variable muette : la lettre d'intégration n'influe pas sur le résultat.",
      "formulas": [
        {
          "name": "Définition de l'intégrale",
          "formula": "\\int_a^b f(x)dx = [F(x)]_a^b = F(b) - F(a)",
          "note": "F est une primitive de f sur K."
        },
        {
          "name": "Bornes égales",
          "formula": "\\int_a^a f(x)dx = 0",
          "note": "L'intégrale de a à a est nulle."
        },
        {
          "name": "Échange des bornes",
          "formula": "\\int_b^a f(x)dx = -\\int_a^b f(x)dx",
          "note": "Échanger les bornes change le signe."
        }
      ],
      "workedExample": {
        "title": "Les intégrales $I$, $P$, $J$ et $H$",
        "statement": "Calcule $I = \\int_0^1 x^2 dx$, $P = \\int_0^1 z^2 dz$, $J = \\int_3^1 \\left(1 - \\frac{1}{t}\\right)dt$ et $H = \\int_{-12}^{-12} x\\sqrt{3 - x}dx$.",
        "methodSteps": [
          "Une primitive de $x \\mapsto x^2$ est $x \\mapsto \\frac{1}{3}x^3$, donc $I = \\left[\\frac{1}{3}x^3\\right]_0^1 = \\frac{1}{3}$.",
          "La variable $z$ est muette : $P = I = \\frac{1}{3}$.",
          "Une primitive de $t \\mapsto 1 - \\frac{1}{t}$ est $t \\mapsto t - \\ln t$, donc $J = [t - \\ln t]_3^1 = (1 - \\ln 1) - (3 - \\ln 3) = -2 + \\ln 3$.",
          "Les bornes de $H$ sont identiques, donc $H = 0$."
        ],
        "conclusion": "$I = \\frac{1}{3}$, $P = \\frac{1}{3}$, $J = -2 + \\ln 3$ et $H = 0$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de l'intégrale",
          "stepTheme": "La définition de l'intégrale",
          "stepBadge": "La définition de l'intégrale",
          "paragraphText": "• Soit $f$ continue sur un intervalle $K$ et $F$ une primitive de $f$ sur $K$.\nLe nombre $F(b) - F(a)$ ne dépend pas de la primitive choisie : c'est l'intégrale de $a$ à $b$ de $f$.\nOn note $\\int_a^b f(x)dx = [F(x)]_a^b = F(b) - F(a)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p01_q1",
            "type": "mcq",
            "prompt": "Soit $F$ une primitive de $f$ sur un intervalle $K$, et $a$, $b$ dans $K$. Que vaut $\\int_a^b f(x)dx$ ?",
            "options": [
              "$F(b) - F(a)$",
              "$F(a) - F(b)$",
              "$F(b) + F(a)$",
              "$f(a) + f(b)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, ∫_a^b f(x)dx = [F(x)]_a^b = F(b) − F(a)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'intégrale $I = \\int_0^1 x^2 dx$",
          "stepTheme": "L'intégrale $I = \\int_0^1 x^2 dx$",
          "stepBadge": "L'intégrale $I = \\int_0^1 x^2 dx$",
          "paragraphText": "• Une primitive de $f(x) = x^2$ sur $[0 ; 1]$ est $F(x) = \\frac{1}{3}x^3$.\nDonc $I = \\int_0^1 x^2 dx = \\left[\\frac{1}{3}x^3\\right]_0^1 = \\frac{1}{3} \\times 1^3 - 0 = \\frac{1}{3}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p01_q2",
            "type": "mcq",
            "prompt": "Que vaut $I = \\int_0^1 x^2 dx$ ?",
            "options": [
              "$\\frac{1}{3}$",
              "$1$",
              "$3$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une primitive de x² est (1/3)x³ : I = [(1/3)x³]₀¹ = 1/3."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La variable muette : $P = \\int_0^1 z^2 dz$",
          "stepTheme": "La variable muette : $P = \\int_0^1 z^2 dz$",
          "stepBadge": "La variable muette : $P = \\int_0^1 z^2 dz$",
          "paragraphText": "• La lettre d'intégration n'intervient pas dans le résultat : on peut la remplacer par toute autre lettre, on l'appelle variable muette.\nAinsi $\\int_0^1 z^2 dz = \\int_0^1 x^2 dx$ : la valeur est la même.\nDonc $P = I = \\frac{1}{3}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p01_q3",
            "type": "mcq",
            "prompt": "Que vaut $P = \\int_0^1 z^2 dz$, sachant que $I = \\int_0^1 x^2 dx = \\frac{1}{3}$ ?",
            "options": [
              "$\\frac{1}{3}$, comme $I$ : la variable est muette",
              "$0$",
              "$1$",
              "$\\frac{z}{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La variable d'intégration est muette : ∫₀¹ z² dz = ∫₀¹ x² dx = 1/3."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'intégrale $J = \\int_3^1 \\left(1 - \\frac{1}{t}\\right)dt$",
          "stepTheme": "L'intégrale $J = \\int_3^1 \\left(1 - \\frac{1}{t}\\right)dt$",
          "stepBadge": "L'intégrale $J = \\int_3^1 \\left(1 - \\frac{1}{t}\\right)dt$",
          "paragraphText": "• Une primitive de $t \\mapsto 1 - \\frac{1}{t}$ est $t \\mapsto t - \\ln t$.\nDonc $J = [t - \\ln t]_3^1 = (1 - \\ln 1) - (3 - \\ln 3) = 1 - 3 + \\ln 3$.\nSoit $J = -2 + \\ln 3$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut $J = \\int_3^1 \\left(1 - \\frac{1}{t}\\right)dt$ ?",
            "options": [
              "$-2 + \\ln 3$",
              "$2 - \\ln 3$",
              "$-2 - \\ln 3$",
              "$2 + \\ln 3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une primitive de 1 − 1/t est t − ln t : J = [t − ln t]₃¹ = (1 − 0) − (3 − ln 3) = −2 + ln 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'intégrale $H$ aux bornes identiques",
          "stepTheme": "L'intégrale $H$ aux bornes identiques",
          "stepBadge": "L'intégrale $H$ aux bornes identiques",
          "paragraphText": "• $H = \\int_{-12}^{-12} x\\sqrt{3 - x}dx$ : les bornes de l'intégrale sont identiques.\nOr $\\int_a^a f(x)dx = 0$ pour toute fonction continue $f$.\nDonc $H = 0$, sans aucun calcul de primitive.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p01_q5",
            "type": "mcq",
            "prompt": "Que vaut $H = \\int_{-12}^{-12} x\\sqrt{3 - x}dx$ ?",
            "options": [
              "$0$",
              "$1$",
              "$-12$",
              "$12$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les bornes sont identiques : ∫_a^a f(x)dx = 0, donc H = 0."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Quelle expression n'est pas égale à $\\int_a^b f(x)dx$ ?",
          "stepTheme": "Quelle expression n'est pas égale à $\\int_a^b f(x)dx$ ?",
          "stepBadge": "Quelle expression n'est pas égale à $\\int_a^b f(x)dx$ ?",
          "paragraphText": "• Si $F$ et $G$ sont deux primitives de $f$ sur $I$, alors $\\int_a^b f(x)dx = [F(t)]_a^b = F(b) - F(a) = G(b) - G(a)$.\nEn revanche, $[G(t)]_b^a = G(a) - G(b)$ : c'est l'opposé de l'intégrale.\nIl faut donc faire attention au sens des bornes dans le crochet.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p01_q6",
            "type": "mcq",
            "prompt": "Soient $F$ et $G$ deux primitives de $f$ sur $I$, et $a$, $b$ dans $I$. Laquelle de ces expressions n'est PAS égale à $\\int_a^b f(x)dx$ ?",
            "options": [
              "$[G(t)]_b^a$",
              "$[F(t)]_a^b$",
              "$F(b) - F(a)$",
              "$G(b) - G(a)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "[G(t)]_b^a = G(a) − G(b) = −∫_a^b f(x)dx : c'est l'opposé de l'intégrale, et non l'intégrale elle-même."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p01_q1",
          "type": "mcq",
          "prompt": "Soit $F$ une primitive de $f$ sur un intervalle $K$, et $a$, $b$ dans $K$. Que vaut $\\int_a^b f(x)dx$ ?",
          "options": [
            "$F(b) - F(a)$",
            "$F(a) - F(b)$",
            "$F(b) + F(a)$",
            "$f(a) + f(b)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, ∫_a^b f(x)dx = [F(x)]_a^b = F(b) − F(a)."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p01_q2",
          "type": "mcq",
          "prompt": "Que vaut $I = \\int_0^1 x^2 dx$ ?",
          "options": [
            "$\\frac{1}{3}$",
            "$1$",
            "$3$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une primitive de x² est (1/3)x³ : I = [(1/3)x³]₀¹ = 1/3."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p01_q3",
          "type": "mcq",
          "prompt": "Que vaut $P = \\int_0^1 z^2 dz$, sachant que $I = \\int_0^1 x^2 dx = \\frac{1}{3}$ ?",
          "options": [
            "$\\frac{1}{3}$, comme $I$ : la variable est muette",
            "$0$",
            "$1$",
            "$\\frac{z}{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La variable d'intégration est muette : ∫₀¹ z² dz = ∫₀¹ x² dx = 1/3."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut $J = \\int_3^1 \\left(1 - \\frac{1}{t}\\right)dt$ ?",
          "options": [
            "$-2 + \\ln 3$",
            "$2 - \\ln 3$",
            "$-2 - \\ln 3$",
            "$2 + \\ln 3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une primitive de 1 − 1/t est t − ln t : J = [t − ln t]₃¹ = (1 − 0) − (3 − ln 3) = −2 + ln 3."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p01_q5",
          "type": "mcq",
          "prompt": "Que vaut $H = \\int_{-12}^{-12} x\\sqrt{3 - x}dx$ ?",
          "options": [
            "$0$",
            "$1$",
            "$-12$",
            "$12$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les bornes sont identiques : ∫_a^a f(x)dx = 0, donc H = 0."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p01_q6",
          "type": "mcq",
          "prompt": "Soient $F$ et $G$ deux primitives de $f$ sur $I$, et $a$, $b$ dans $I$. Laquelle de ces expressions n'est PAS égale à $\\int_a^b f(x)dx$ ?",
          "options": [
            "$[G(t)]_b^a$",
            "$[F(t)]_a^b$",
            "$F(b) - F(a)$",
            "$G(b) - G(a)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "[G(t)]_b^a = G(a) − G(b) = −∫_a^b f(x)dx : c'est l'opposé de l'intégrale, et non l'intégrale elle-même."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l10_integrale_p02",
      "order": 2,
      "title": "Propriétés algébriques : Chasles et linéarité",
      "summary": "L'égalité de Chasles, la linéarité de l'intégrale et les conséquences sur les bornes.",
      "conceptExplanation": "Égalité de Chasles : si $f$ est continue sur un intervalle $K$ et $a$, $b$, $c$ dans $K$, alors $\\int_a^b f(x)dx = \\int_a^c f(x)dx + \\int_c^b f(x)dx$.\nLinéarité : $\\int_a^b [f(x) + g(x)]dx = \\int_a^b f(x)dx + \\int_a^b g(x)dx$ et $\\int_a^b \\alpha f(x)dx = \\alpha \\int_a^b f(x)dx$ pour tout réel $\\alpha$.\nCes propriétés permettent de découper une intégrale ou de sortir une constante.",
      "keyRule": "Chasles : on découpe l'intervalle. Linéarité : l'intégrale d'une somme est la somme des intégrales.",
      "formulas": [
        {
          "name": "Égalité de Chasles",
          "formula": "\\int_a^b f(x)dx = \\int_a^c f(x)dx + \\int_c^b f(x)dx",
          "note": "Pour a, b, c dans K."
        },
        {
          "name": "Linéarité : somme",
          "formula": "\\int_a^b [f(x) + g(x)]dx = \\int_a^b f(x)dx + \\int_a^b g(x)dx",
          "note": "f et g continues sur K."
        },
        {
          "name": "Linéarité : constante",
          "formula": "\\int_a^b \\alpha f(x)dx = \\alpha \\int_a^b f(x)dx",
          "note": "Pour tout réel α."
        }
      ],
      "workedExample": {
        "title": "L'intégrale $A = \\int_0^e f(x)dx$ d'une fonction définie par morceaux",
        "statement": "Soit $f$ continue sur $\\mathbb{R}$ définie par $f(x) = 2x - 1$ si $x \\leq 1$ et $f(x) = \\frac{1}{x}$ si $x > 1$. Calcule $A = \\int_0^e f(x)dx$.",
        "methodSteps": [
          "Par l'égalité de Chasles, $A = \\int_0^1 (2x - 1)dx + \\int_1^e \\frac{1}{x}dx$.",
          "On a $\\int_0^1 (2x - 1)dx = [x^2 - x]_0^1 = 0$ et $\\int_1^e \\frac{1}{x}dx = [\\ln x]_1^e = 1$.",
          "Donc $A = 0 + 1 = 1$."
        ],
        "conclusion": "L'intégrale $A$ vaut $1$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'égalité de Chasles",
          "stepTheme": "L'égalité de Chasles",
          "stepBadge": "L'égalité de Chasles",
          "paragraphText": "• Si $f$ est continue sur un intervalle $K$ et si $a$, $b$ et $c$ sont trois éléments de $K$, alors $\\int_a^b f(x)dx = \\int_a^c f(x)dx + \\int_c^b f(x)dx$.\nOn peut découper l'intervalle $[a ; b]$ en deux morceaux au point $c$.\nC'est utile quand la fonction change d'expression en $c$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p02_q1",
            "type": "mcq",
            "prompt": "Que dit l'égalité de Chasles pour $f$ continue sur $K$ et $a$, $b$, $c$ dans $K$ ?",
            "options": [
              "$\\int_a^b f = \\int_a^c f + \\int_c^b f$",
              "$\\int_a^b f = \\int_a^c f - \\int_c^b f$",
              "$\\int_a^b f = \\int_c^a f + \\int_b^c f$",
              "$\\int_a^b f = \\int_a^b f + \\int_c^b f$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'égalité de Chasles : ∫_a^b f(x)dx = ∫_a^c f(x)dx + ∫_c^b f(x)dx."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Découper une intégrale : $A = \\int_0^e f(x)dx$",
          "stepTheme": "Découper une intégrale : $A = \\int_0^e f(x)dx$",
          "stepBadge": "Découper une intégrale : $A = \\int_0^e f(x)dx$",
          "paragraphText": "• Soit $f(x) = 2x - 1$ si $x \\leq 1$ et $f(x) = \\frac{1}{x}$ si $x > 1$.\nPar Chasles : $A = \\int_0^1 (2x - 1)dx + \\int_1^e \\frac{1}{x}dx$.\n$\\int_0^1 (2x - 1)dx = [x^2 - x]_0^1 = 0$ et $\\int_1^e \\frac{1}{x}dx = [\\ln x]_1^e = 1$ : donc $A = 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p02_q2",
            "type": "mcq",
            "prompt": "Soit $f(x) = 2x - 1$ si $x \\leq 1$ et $f(x) = \\frac{1}{x}$ si $x > 1$. Que vaut $A = \\int_0^e f(x)dx$ ?",
            "options": [
              "$1$",
              "$0$",
              "$e$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par Chasles, A = ∫₀¹ (2x−1)dx + ∫₁^e (1/x)dx = [x²−x]₀¹ + [ln x]₁^e = 0 + 1 = 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La linéarité : l'intégrale de $f - 2g$",
          "stepTheme": "La linéarité : l'intégrale de $f - 2g$",
          "stepBadge": "La linéarité : l'intégrale de $f - 2g$",
          "paragraphText": "• Par linéarité, $\\int_a^b [f(t) - 2g(t)]dt = \\int_a^b f(t)dt - 2\\int_a^b g(t)dt$.\nOn distribue l'intégrale sur la somme et on sort la constante $2$.\nPlus généralement, $\\int_a^b [\\alpha f(t) - \\beta g(t)]dt = \\alpha\\int_a^b f(t)dt - \\beta\\int_a^b g(t)dt$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p02_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\int_a^b [f(t) - 2g(t)]dt$ pour $f$ et $g$ continues sur $[a ; b]$ ?",
            "options": [
              "$\\int_a^b f(t)dt - 2\\int_a^b g(t)dt$",
              "$\\int_a^b f(t)dt + 2\\int_a^b g(t)dt$",
              "$2\\int_a^b f(t)dt - \\int_a^b g(t)dt$",
              "$\\int_a^b f(t)dt - \\int_a^b g(t)dt$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par linéarité, ∫_a^b (f − 2g) = ∫_a^b f − 2∫_a^b g."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La linéarité : l'intégrale de $\\alpha f - \\beta g$",
          "stepTheme": "La linéarité : l'intégrale de $\\alpha f - \\beta g$",
          "stepBadge": "La linéarité : l'intégrale de $\\alpha f - \\beta g$",
          "paragraphText": "• Pour tous réels $\\alpha$ et $\\beta$, $\\int_a^b [\\alpha f(t) - \\beta g(t)]dt = \\alpha\\int_a^b f(t)dt - \\beta\\int_a^b g(t)dt$.\nC'est la combinaison des deux règles : l'intégrale d'une somme est la somme des intégrales, et on peut sortir une constante.\nLes signes et les constantes se conservent tels quels.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p02_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\int_a^b [\\alpha f(t) - \\beta g(t)]dt$ pour $f$ et $g$ continues et $\\alpha$, $\\beta$ réels ?",
            "options": [
              "$\\alpha\\int_a^b f(t)dt - \\beta\\int_a^b g(t)dt$",
              "$\\alpha\\int_a^b f(t)dt + \\beta\\int_a^b g(t)dt$",
              "$\\beta\\int_a^b f(t)dt - \\alpha\\int_a^b g(t)dt$",
              "$\\alpha\\int_a^b f(t)dt - \\int_a^b g(t)dt$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par linéarité, ∫_a^b (αf − βg) = α∫_a^b f − β∫_a^b g."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'intégrale $\\int_0^{2\\pi} (-3\\cos x + 2\\sin x)dx$",
          "stepTheme": "L'intégrale $\\int_0^{2\\pi} (-3\\cos x + 2\\sin x)dx$",
          "stepBadge": "L'intégrale $\\int_0^{2\\pi} (-3\\cos x + 2\\sin x)dx$",
          "paragraphText": "• Par linéarité : $\\int_0^{2\\pi} (-3\\cos x + 2\\sin x)dx = -3\\int_0^{2\\pi} \\cos x dx + 2\\int_0^{2\\pi} \\sin x dx$.\nOr $\\int_0^{2\\pi} \\cos x dx = [\\sin x]_0^{2\\pi} = 0$ et $\\int_0^{2\\pi} \\sin x dx = [-\\cos x]_0^{2\\pi} = -1 + 1 = 0$.\nDonc l'intégrale vaut $-3 \\times 0 + 2 \\times 0 = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p02_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\int_0^{2\\pi} (-3\\cos x + 2\\sin x)dx$ ?",
            "options": [
              "$0$",
              "$1$",
              "$-3$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par linéarité, l'intégrale vaut −3[sin x]₀^{2π} + 2[−cos x]₀^{2π} = −3×0 + 2×0 = 0."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "L'intégrale de $a$ à $a$ est nulle",
          "stepTheme": "L'intégrale de $a$ à $a$ est nulle",
          "stepBadge": "L'intégrale de $a$ à $a$ est nulle",
          "paragraphText": "• Pour toute fonction continue $f$, $\\int_a^a f(x)dx = F(a) - F(a) = 0$.\nL'intégrale sur un intervalle réduit à un point est nulle : il n'y a aucune « largeur » à intégrer.\nC'est aussi pour cela que $\\int_{-12}^{-12} x\\sqrt{3 - x}dx = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p02_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\int_a^a f(x)dx$ pour une fonction $f$ continue ?",
            "options": [
              "$0$",
              "$F(a)$",
              "$1$",
              "$a$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "∫_a^a f(x)dx = F(a) − F(a) = 0 : l'intégrale sur un intervalle réduit à un point est nulle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p02_q1",
          "type": "mcq",
          "prompt": "Que dit l'égalité de Chasles pour $f$ continue sur $K$ et $a$, $b$, $c$ dans $K$ ?",
          "options": [
            "$\\int_a^b f = \\int_a^c f + \\int_c^b f$",
            "$\\int_a^b f = \\int_a^c f - \\int_c^b f$",
            "$\\int_a^b f = \\int_c^a f + \\int_b^c f$",
            "$\\int_a^b f = \\int_a^b f + \\int_c^b f$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'égalité de Chasles : ∫_a^b f(x)dx = ∫_a^c f(x)dx + ∫_c^b f(x)dx."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p02_q2",
          "type": "mcq",
          "prompt": "Soit $f(x) = 2x - 1$ si $x \\leq 1$ et $f(x) = \\frac{1}{x}$ si $x > 1$. Que vaut $A = \\int_0^e f(x)dx$ ?",
          "options": [
            "$1$",
            "$0$",
            "$e$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par Chasles, A = ∫₀¹ (2x−1)dx + ∫₁^e (1/x)dx = [x²−x]₀¹ + [ln x]₁^e = 0 + 1 = 1."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p02_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\int_a^b [f(t) - 2g(t)]dt$ pour $f$ et $g$ continues sur $[a ; b]$ ?",
          "options": [
            "$\\int_a^b f(t)dt - 2\\int_a^b g(t)dt$",
            "$\\int_a^b f(t)dt + 2\\int_a^b g(t)dt$",
            "$2\\int_a^b f(t)dt - \\int_a^b g(t)dt$",
            "$\\int_a^b f(t)dt - \\int_a^b g(t)dt$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par linéarité, ∫_a^b (f − 2g) = ∫_a^b f − 2∫_a^b g."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p02_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\int_a^b [\\alpha f(t) - \\beta g(t)]dt$ pour $f$ et $g$ continues et $\\alpha$, $\\beta$ réels ?",
          "options": [
            "$\\alpha\\int_a^b f(t)dt - \\beta\\int_a^b g(t)dt$",
            "$\\alpha\\int_a^b f(t)dt + \\beta\\int_a^b g(t)dt$",
            "$\\beta\\int_a^b f(t)dt - \\alpha\\int_a^b g(t)dt$",
            "$\\alpha\\int_a^b f(t)dt - \\int_a^b g(t)dt$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par linéarité, ∫_a^b (αf − βg) = α∫_a^b f − β∫_a^b g."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p02_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\int_0^{2\\pi} (-3\\cos x + 2\\sin x)dx$ ?",
          "options": [
            "$0$",
            "$1$",
            "$-3$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par linéarité, l'intégrale vaut −3[sin x]₀^{2π} + 2[−cos x]₀^{2π} = −3×0 + 2×0 = 0."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p02_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\int_a^a f(x)dx$ pour une fonction $f$ continue ?",
          "options": [
            "$0$",
            "$F(a)$",
            "$1$",
            "$a$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "∫_a^a f(x)dx = F(a) − F(a) = 0 : l'intégrale sur un intervalle réduit à un point est nulle."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l10_integrale_p03",
      "order": 3,
      "title": "Propriétés de comparaison et valeur moyenne",
      "summary": "Positivité, comparaison et inégalité de la moyenne, puis définition et interprétation de la valeur moyenne d'une fonction sur un intervalle.",
      "conceptExplanation": "Positivité : si $f \\geq 0$ sur $[a ; b]$, alors $\\int_a^b f(x)dx \\geq 0$.\nComparaison : si $f \\leq g$ sur $[a ; b]$, alors $\\int_a^b f(x)dx \\leq \\int_a^b g(x)dx$.\nInégalité de la moyenne : si $m \\leq f \\leq M$ sur $[a ; b]$, alors $m(b - a) \\leq \\int_a^b f(x)dx \\leq M(b - a)$ ; si $|f| \\leq M$ sur $[a ; b]$, alors $\\left|\\int_a^b f(x)dx\\right| \\leq M(b - a)$.\nValeur moyenne : pour $f$ continue sur $[a ; b]$, la valeur moyenne de $f$ sur $[a ; b]$ est $\\mu = \\frac{1}{b - a}\\int_a^b f(x)dx$. Graphiquement, c'est la hauteur du rectangle de base $(b - a)$ ayant la même aire que la partie du plan sous la courbe.",
      "keyRule": "f ≥ 0 → ∫ ≥ 0. f ≤ g → ∫f ≤ ∫g. Valeur moyenne μ = 1/(b−a) · ∫(a→b) f.",
      "formulas": [
        {
          "name": "Positivité de l'intégrale",
          "formula": "f \\geq 0 \\text{ sur } [a ; b] \\Rightarrow \\int_a^b f(x)dx \\geq 0",
          "note": "f continue sur [a ; b]."
        },
        {
          "name": "Comparaison des intégrales",
          "formula": "f \\leq g \\text{ sur } [a ; b] \\Rightarrow \\int_a^b f(x)dx \\leq \\int_a^b g(x)dx",
          "note": "f et g continues sur [a ; b]."
        },
        {
          "name": "Inégalité de la moyenne",
          "formula": "m \\leq f \\leq M \\Rightarrow m(b - a) \\leq \\int_a^b f(x)dx \\leq M(b - a)",
          "note": "Sur [a ; b]."
        },
        {
          "name": "Valeur moyenne",
          "formula": "\\mu = \\frac{1}{b - a}\\int_a^b f(x)dx",
          "note": "Valeur moyenne de f sur [a ; b]."
        }
      ],
      "workedExample": {
        "title": "La valeur moyenne de $x \\mapsto x - \\sin x$ sur $[0 ; \\pi]$",
        "statement": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x - \\sin x$. Calcule la valeur moyenne de $f$ sur $[0 ; \\pi]$.",
        "methodSteps": [
          "La valeur moyenne est $\\mu = \\frac{1}{\\pi - 0}\\int_0^\\pi (x - \\sin x)dx$.",
          "On a $\\int_0^\\pi (x - \\sin x)dx = \\left[\\frac{1}{2}x^2 + \\cos x\\right]_0^\\pi = \\frac{\\pi^2}{2} - 1 - 1 = \\frac{\\pi^2}{2} - 2$.",
          "Donc $\\mu = \\frac{1}{\\pi}\\left(\\frac{\\pi^2}{2} - 2\\right) = \\frac{\\pi^2 - 4}{2\\pi}$."
        ],
        "conclusion": "La valeur moyenne de $f$ sur $[0 ; \\pi]$ est $\\frac{\\pi^2 - 4}{2\\pi}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "La positivité : $\\int_{-2}^7 x^2 dx \\geq 0$",
          "stepTheme": "La positivité : $\\int_{-2}^7 x^2 dx \\geq 0$",
          "stepBadge": "La positivité : $\\int_{-2}^7 x^2 dx \\geq 0$",
          "paragraphText": "• Si $f \\geq 0$ sur $[a ; b]$, alors $\\int_a^b f(x)dx \\geq 0$.\nPour $f(x) = x^2$, on a $x^2 \\geq 0$ pour tout $x$ de $[-2 ; 7]$.\nDonc $\\int_{-2}^7 x^2 dx \\geq 0$, sans aucun calcul.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p03_q1",
            "type": "mcq",
            "prompt": "On considère $f(x) = x^2$. Que peut-on dire de $\\int_{-2}^7 f(x)dx$ sans le calculer ?",
            "options": [
              "Il est positif ou nul, car $x^2 \\geq 0$ sur $[-2 ; 7]$",
              "Il est négatif ou nul",
              "Il est nul",
              "Il est strictement positif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour tout x de [−2 ; 7], x² ≥ 0 : par positivité de l'intégrale, ∫_{−2}^7 x² dx ≥ 0."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La comparaison : $\\int_0^1 (x^2 + 1)dx \\geq \\int_0^1 2x dx$",
          "stepTheme": "La comparaison : $\\int_0^1 (x^2 + 1)dx \\geq \\int_0^1 2x dx$",
          "stepBadge": "La comparaison : $\\int_0^1 (x^2 + 1)dx \\geq \\int_0^1 2x dx$",
          "paragraphText": "• Si $f \\leq g$ sur $[a ; b]$, alors $\\int_a^b f(x)dx \\leq \\int_a^b g(x)dx$.\nPour tout $x$ de $[0 ; 1]$, $(x - 1)^2 \\geq 0$, donc $x^2 + 1 \\geq 2x$.\nPar comparaison, $\\int_0^1 (x^2 + 1)dx \\geq \\int_0^1 2x dx$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p03_q2",
            "type": "mcq",
            "prompt": "Démontre que $\\int_0^1 (x^2 + 1)dx \\geq \\int_0^1 2x dx$. Quelle inégalité utilise-t-on ?",
            "options": [
              "$x^2 + 1 \\geq 2x$ sur $[0 ; 1]$, car $(x - 1)^2 \\geq 0$",
              "$x^2 + 1 \\leq 2x$ sur $[0 ; 1]$",
              "$x^2 + 1 = 2x$ sur $[0 ; 1]$",
              "On ne peut pas comparer ces deux intégrales"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour tout x, (x − 1)² ≥ 0 donc x² + 1 ≥ 2x : par comparaison des intégrales, ∫₀¹ (x²+1)dx ≥ ∫₀¹ 2x dx."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Si $f + g \\geq 0$, a-t-on $\\int g \\leq \\int f$ ?",
          "stepTheme": "Si $f + g \\geq 0$, a-t-on $\\int g \\leq \\int f$ ?",
          "stepBadge": "Si $f + g \\geq 0$, a-t-on $\\int g \\leq \\int f$ ?",
          "paragraphText": "• L'affirmation « si $f + g \\geq 0$ sur $[a ; b]$, alors $\\int_a^b g(x)dx \\leq \\int_a^b f(x)dx$ » est fausse en général.\nContre-exemple : sur $[0 ; 1]$, $f = 0$ et $g = 1$ donnent $f + g = 1 \\geq 0$, mais $\\int_0^1 g = 1 > 0 = \\int_0^1 f$.\nLa comparaison exige $f \\geq g$ (ou $g \\leq f$), et non $f + g \\geq 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p03_q3",
            "type": "mcq",
            "prompt": "L'affirmation « si $f + g \\geq 0$ sur $[a ; b]$, alors $\\int_a^b g(x)dx \\leq \\int_a^b f(x)dx$ » est-elle vraie ?",
            "options": [
              "Non, elle est fausse en général",
              "Oui, c'est une conséquence de la positivité",
              "Oui, si $f$ et $g$ sont positives",
              "Non, l'inégalité est renversée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est faux : avec f = 0 et g = 1 sur [0 ; 1], f + g = 1 ≥ 0 mais ∫g = 1 > 0 = ∫f. La comparaison exige f ≥ g."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'inégalité de la moyenne avec $\\frac{1}{\\sin x}$",
          "stepTheme": "L'inégalité de la moyenne avec $\\frac{1}{\\sin x}$",
          "stepBadge": "L'inégalité de la moyenne avec $\\frac{1}{\\sin x}$",
          "paragraphText": "• Sur $\\left[\\frac{\\pi}{4} ; \\frac{\\pi}{2}\\right]$, on a $1 \\leq \\frac{1}{\\sin x} \\leq \\sqrt{2}$.\nPar l'inégalité de la moyenne, avec $b - a = \\frac{\\pi}{4}$ : $1 \\times \\frac{\\pi}{4} \\leq \\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}dx \\leq \\sqrt{2} \\times \\frac{\\pi}{4}$.\nDonc $\\frac{\\pi}{4} \\leq \\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}dx \\leq \\frac{\\pi\\sqrt{2}}{4}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p03_q4",
            "type": "mcq",
            "prompt": "On suppose que $1 \\leq \\frac{1}{\\sin x} \\leq \\sqrt{2}$ sur $\\left[\\frac{\\pi}{4} ; \\frac{\\pi}{2}\\right]$. Quel encadrement obtient-on pour $\\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}dx$ ?",
            "options": [
              "$\\frac{\\pi}{4} \\leq \\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}dx \\leq \\frac{\\pi\\sqrt{2}}{4}$",
              "$0 \\leq \\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}dx \\leq \\frac{\\pi}{4}$",
              "$\\frac{\\pi\\sqrt{2}}{4} \\leq \\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}dx \\leq \\frac{\\pi}{4}$",
              "$\\frac{\\pi}{2} \\leq \\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}dx \\leq \\pi$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par l'inégalité de la moyenne avec b − a = π/4 : 1×(π/4) ≤ ∫ ≤ √2×(π/4), soit π/4 ≤ ∫ ≤ π√2/4."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La formule de la valeur moyenne",
          "stepTheme": "La formule de la valeur moyenne",
          "stepBadge": "La formule de la valeur moyenne",
          "paragraphText": "• Pour $f$ continue sur $[a ; b]$, la valeur moyenne de $f$ sur $[a ; b]$ est $\\mu = \\frac{1}{b - a}\\int_a^b f(x)dx$.\nAttention au sens des bornes : le dénominateur est $b - a$ (positif si $a < b$) et l'intégrale va de $a$ à $b$.\nLes formules $\\frac{1}{c - d}\\int_c^d f$, $\\frac{1}{d - c}\\int_d^c f$ et $-\\frac{1}{c - d}\\int_d^c f$ donnent toutes $-\\mu$, et non $\\mu$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p03_q5",
            "type": "mcq",
            "prompt": "Soit $f$ continue sur $[c ; d]$ avec $c < d$. Quelle est la valeur moyenne $m$ de $f$ sur $[c ; d]$ ?",
            "options": [
              "$m = \\frac{1}{d - c}\\int_c^d f(x)dx$",
              "$m = \\frac{1}{c - d}\\int_c^d f(x)dx$",
              "$m = \\frac{1}{d - c}\\int_d^c f(x)dx$",
              "$m = -\\frac{1}{c - d}\\int_d^c f(x)dx$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La valeur moyenne est m = 1/(d − c) ∫_c^d f(x)dx : dénominateur d − c et intégrale de c à d."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La valeur moyenne de $x - \\sin x$ sur $[0 ; \\pi]$",
          "stepTheme": "La valeur moyenne de $x - \\sin x$ sur $[0 ; \\pi]$",
          "stepBadge": "La valeur moyenne de $x - \\sin x$ sur $[0 ; \\pi]$",
          "paragraphText": "• Soit $f(x) = x - \\sin x$ sur $[0 ; \\pi]$ : $\\mu = \\frac{1}{\\pi}\\int_0^\\pi (x - \\sin x)dx$.\nUne primitive de $x - \\sin x$ est $\\frac{1}{2}x^2 + \\cos x$ : $\\int_0^\\pi (x - \\sin x)dx = \\left[\\frac{1}{2}x^2 + \\cos x\\right]_0^\\pi = \\frac{\\pi^2}{2} - 2$.\nDonc $\\mu = \\frac{1}{\\pi}\\left(\\frac{\\pi^2}{2} - 2\\right) = \\frac{\\pi^2 - 4}{2\\pi}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p03_q6",
            "type": "mcq",
            "prompt": "Soit $f(x) = x - \\sin x$. Quelle est la valeur moyenne de $f$ sur $[0 ; \\pi]$ ?",
            "options": [
              "$\\frac{\\pi^2 - 4}{2\\pi}$",
              "$\\frac{\\pi^2 + 4}{2\\pi}$",
              "$\\frac{\\pi}{2}$",
              "$\\frac{\\pi^2 - 4}{\\pi}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "μ = (1/π)∫₀^π (x − sin x)dx = (1/π)[(1/2)x² + cos x]₀^π = (1/π)(π²/2 − 2) = (π² − 4)/(2π)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p03_q1",
          "type": "mcq",
          "prompt": "On considère $f(x) = x^2$. Que peut-on dire de $\\int_{-2}^7 f(x)dx$ sans le calculer ?",
          "options": [
            "Il est positif ou nul, car $x^2 \\geq 0$ sur $[-2 ; 7]$",
            "Il est négatif ou nul",
            "Il est nul",
            "Il est strictement positif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout x de [−2 ; 7], x² ≥ 0 : par positivité de l'intégrale, ∫_{−2}^7 x² dx ≥ 0."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p03_q2",
          "type": "mcq",
          "prompt": "Démontre que $\\int_0^1 (x^2 + 1)dx \\geq \\int_0^1 2x dx$. Quelle inégalité utilise-t-on ?",
          "options": [
            "$x^2 + 1 \\geq 2x$ sur $[0 ; 1]$, car $(x - 1)^2 \\geq 0$",
            "$x^2 + 1 \\leq 2x$ sur $[0 ; 1]$",
            "$x^2 + 1 = 2x$ sur $[0 ; 1]$",
            "On ne peut pas comparer ces deux intégrales"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout x, (x − 1)² ≥ 0 donc x² + 1 ≥ 2x : par comparaison des intégrales, ∫₀¹ (x²+1)dx ≥ ∫₀¹ 2x dx."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p03_q3",
          "type": "mcq",
          "prompt": "L'affirmation « si $f + g \\geq 0$ sur $[a ; b]$, alors $\\int_a^b g(x)dx \\leq \\int_a^b f(x)dx$ » est-elle vraie ?",
          "options": [
            "Non, elle est fausse en général",
            "Oui, c'est une conséquence de la positivité",
            "Oui, si $f$ et $g$ sont positives",
            "Non, l'inégalité est renversée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est faux : avec f = 0 et g = 1 sur [0 ; 1], f + g = 1 ≥ 0 mais ∫g = 1 > 0 = ∫f. La comparaison exige f ≥ g."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p03_q4",
          "type": "mcq",
          "prompt": "On suppose que $1 \\leq \\frac{1}{\\sin x} \\leq \\sqrt{2}$ sur $\\left[\\frac{\\pi}{4} ; \\frac{\\pi}{2}\\right]$. Quel encadrement obtient-on pour $\\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}dx$ ?",
          "options": [
            "$\\frac{\\pi}{4} \\leq \\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}dx \\leq \\frac{\\pi\\sqrt{2}}{4}$",
            "$0 \\leq \\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}dx \\leq \\frac{\\pi}{4}$",
            "$\\frac{\\pi\\sqrt{2}}{4} \\leq \\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}dx \\leq \\frac{\\pi}{4}$",
            "$\\frac{\\pi}{2} \\leq \\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}dx \\leq \\pi$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par l'inégalité de la moyenne avec b − a = π/4 : 1×(π/4) ≤ ∫ ≤ √2×(π/4), soit π/4 ≤ ∫ ≤ π√2/4."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p03_q5",
          "type": "mcq",
          "prompt": "Soit $f$ continue sur $[c ; d]$ avec $c < d$. Quelle est la valeur moyenne $m$ de $f$ sur $[c ; d]$ ?",
          "options": [
            "$m = \\frac{1}{d - c}\\int_c^d f(x)dx$",
            "$m = \\frac{1}{c - d}\\int_c^d f(x)dx$",
            "$m = \\frac{1}{d - c}\\int_d^c f(x)dx$",
            "$m = -\\frac{1}{c - d}\\int_d^c f(x)dx$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La valeur moyenne est m = 1/(d − c) ∫_c^d f(x)dx : dénominateur d − c et intégrale de c à d."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p03_q6",
          "type": "mcq",
          "prompt": "Soit $f(x) = x - \\sin x$. Quelle est la valeur moyenne de $f$ sur $[0 ; \\pi]$ ?",
          "options": [
            "$\\frac{\\pi^2 - 4}{2\\pi}$",
            "$\\frac{\\pi^2 + 4}{2\\pi}$",
            "$\\frac{\\pi}{2}$",
            "$\\frac{\\pi^2 - 4}{\\pi}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "μ = (1/π)∫₀^π (x − sin x)dx = (1/π)[(1/2)x² + cos x]₀^π = (1/π)(π²/2 − 2) = (π² − 4)/(2π)."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l10_integrale_p04",
      "order": 4,
      "title": "Techniques de calcul : primitives, parties, changement de variable",
      "summary": "Calcul d'intégrales à l'aide de primitives usuelles, intégration par parties et changement de variable affine.",
      "conceptExplanation": "Utilisation de primitives : on cherche une primitive de l'intégrande, souvent de la forme $\\frac{u'}{u}$ (primitive $\\ln|u|$) ou $u'e^u$ (primitive $e^u$).\nIntégration par parties : si $u$ et $v$ sont dérivables et $u'$, $v'$ continues sur $[a ; b]$, alors $\\int_a^b u(x)v'(x)dx = [u(x)v(x)]_a^b - \\int_a^b u'(x)v(x)dx$.\nChangement de variable affine : pour calculer $\\int_a^b f(\\alpha x + \\beta)dx$ avec $\\alpha \\neq 0$, on pose $t = \\alpha x + \\beta$, $dx = \\frac{1}{\\alpha}dt$, et $\\int_a^b f(\\alpha x + \\beta)dx = \\int_{\\alpha a + \\beta}^{\\alpha b + \\beta} \\frac{f(t)}{\\alpha}dt$.",
      "keyRule": "IPP : ∫ u·v' = [u·v] − ∫ u'·v. Changement affine t = αx+β : dx = dt/α, bornes transformées.",
      "formulas": [
        {
          "name": "Intégration par parties",
          "formula": "\\int_a^b u(x)v'(x)dx = [u(x)v(x)]_a^b - \\int_a^b u'(x)v(x)dx",
          "note": "u et v dérivables, u' et v' continues."
        },
        {
          "name": "Changement de variable affine",
          "formula": "\\int_a^b f(\\alpha x + \\beta)dx = \\int_{\\alpha a + \\beta}^{\\alpha b + \\beta} \\frac{f(t)}{\\alpha}dt",
          "note": "Avec t = αx + β et α ≠ 0."
        },
        {
          "name": "Primitive de u'/u",
          "formula": "\\int \\frac{u'(x)}{u(x)}dx = \\ln|u(x)| + C",
          "note": "Sur un intervalle où u ne s'annule pas."
        }
      ],
      "workedExample": {
        "title": "L'intégrale $\\int_1^e x^2 \\ln x dx$ par parties",
        "statement": "Calcule $I = \\int_1^e x^2 \\ln x dx$ par intégration par parties.",
        "methodSteps": [
          "On pose $u(x) = \\ln x$, donc $u'(x) = \\frac{1}{x}$, et $v'(x) = x^2$, donc $v(x) = \\frac{1}{3}x^3$.",
          "Par parties : $I = \\left[\\frac{1}{3}x^3 \\ln x\\right]_1^e - \\int_1^e \\frac{1}{x} \\times \\frac{1}{3}x^3 dx = \\frac{e^3}{3} - \\frac{1}{3}\\int_1^e x^2 dx$.",
          "Or $\\int_1^e x^2 dx = \\left[\\frac{1}{3}x^3\\right]_1^e = \\frac{e^3 - 1}{3}$, donc $I = \\frac{e^3}{3} - \\frac{e^3 - 1}{9} = \\frac{2e^3 + 1}{9}$."
        ],
        "conclusion": "$\\int_1^e x^2 \\ln x dx = \\frac{2e^3 + 1}{9}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "L'intégrale $\\int_0^1 \\frac{e^x}{1 + e^x}dx$",
          "stepTheme": "L'intégrale $\\int_0^1 \\frac{e^x}{1 + e^x}dx$",
          "stepBadge": "L'intégrale $\\int_0^1 \\frac{e^x}{1 + e^x}dx$",
          "paragraphText": "• La fonction $f(x) = \\frac{e^x}{1 + e^x}$ est de la forme $\\frac{u'}{u}$ avec $u(x) = 1 + e^x$.\nUne primitive de $f$ est donc $F(x) = \\ln(1 + e^x)$.\n$I = [\\ln(1 + e^x)]_0^1 = \\ln(1 + e) - \\ln 2 = \\ln\\left(\\frac{1 + e}{2}\\right)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p04_q1",
            "type": "mcq",
            "prompt": "Que vaut $I = \\int_0^1 \\frac{e^x}{1 + e^x}dx$ ?",
            "options": [
              "$\\ln\\left(\\frac{1 + e}{2}\\right)$",
              "$\\ln(1 + e)$",
              "$\\ln 2$",
              "$1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "f est de la forme u'/u avec u(x) = 1 + e^x : une primitive est ln(1 + e^x), donc I = ln(1+e) − ln 2 = ln((1+e)/2)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'intégrale $J = \\int_0^1 x e^{x^2}dx$",
          "stepTheme": "L'intégrale $J = \\int_0^1 x e^{x^2}dx$",
          "stepBadge": "L'intégrale $J = \\int_0^1 x e^{x^2}dx$",
          "paragraphText": "• On pose $u(x) = x^2$ : $x e^{x^2} = \\frac{1}{2}u'(x)e^{u(x)}$.\nUne primitive de $x \\mapsto x e^{x^2}$ est donc $x \\mapsto \\frac{1}{2}e^{x^2}$.\n$J = \\left[\\frac{1}{2}e^{x^2}\\right]_0^1 = \\frac{1}{2}(e - 1) = \\frac{e - 1}{2}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p04_q2",
            "type": "mcq",
            "prompt": "Que vaut $J = \\int_0^1 x e^{x^2}dx$ ?",
            "options": [
              "$\\frac{e - 1}{2}$",
              "$\\frac{e + 1}{2}$",
              "$e - 1$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec u(x) = x², x·e^{x²} = (1/2)u'e^u : une primitive est (1/2)e^{x²}, donc J = (1/2)(e − 1)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'intégrale $K = \\int_0^{\\pi/3} \\cos^3 t dt$",
          "stepTheme": "L'intégrale $K = \\int_0^{\\pi/3} \\cos^3 t dt$",
          "stepBadge": "L'intégrale $K = \\int_0^{\\pi/3} \\cos^3 t dt$",
          "paragraphText": "• On écrit $\\cos^3 t = (\\cos t)(1 - \\sin^2 t) = \\cos t - \\cos t \\sin^2 t$.\nUne primitive est $\\sin t - \\frac{1}{3}\\sin^3 t$.\n$K = \\left[\\sin t - \\frac{1}{3}\\sin^3 t\\right]_0^{\\pi/3} = \\frac{\\sqrt{3}}{2} - \\frac{1}{3}\\left(\\frac{\\sqrt{3}}{2}\\right)^3 = \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{3}}{8} = \\frac{3\\sqrt{3}}{8}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p04_q3",
            "type": "mcq",
            "prompt": "Que vaut $K = \\int_0^{\\pi/3} \\cos^3 t dt$ ?",
            "options": [
              "$\\frac{3\\sqrt{3}}{8}$",
              "$\\frac{\\sqrt{3}}{2}$",
              "$\\frac{\\sqrt{3}}{8}$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "cos³t = cos t − cos t·sin²t : une primitive est sin t − (1/3)sin³t, donc K = √3/2 − √3/8 = 3√3/8."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La formule d'intégration par parties",
          "stepTheme": "La formule d'intégration par parties",
          "stepBadge": "La formule d'intégration par parties",
          "paragraphText": "• Si $u$ et $v$ sont dérivables sur $[a ; b]$ et si $u'$ et $v'$ sont continues, alors $\\int_a^b u(x)v'(x)dx = [u(x)v(x)]_a^b - \\int_a^b u'(x)v(x)dx$.\nOn dérive $u$ et on « primitive » $v'$ : le terme tout intégré $[u(x)v(x)]_a^b$ apparaît, moins l'intégrale de $u'v$.\nAttention : dans le second membre, c'est $u'$ qui multiplie $v$, et non $u$ ou $v'$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p04_q4",
            "type": "mcq",
            "prompt": "Soient $u$ et $v$ dérivables sur $[a ; b]$, $u'$ et $v'$ continues. Que vaut $\\int_a^b u(x)v'(x)dx$ ?",
            "options": [
              "$[u(x)v(x)]_a^b - \\int_a^b u'(x)v(x)dx$",
              "$[u(x)v(x)]_a^b - \\int_a^b u(x)v'(x)dx$",
              "$[u'(x)v(x)]_a^b - \\int_a^b u'(x)v(x)dx$",
              "$[u(x)v(x)]_a^b - \\int_a^b u'(x)v'(x)dx$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La formule d'intégration par parties : ∫_a^b u·v' = [u·v]_a^b − ∫_a^b u'·v."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'intégrale $\\int_1^e x^2 \\ln x dx$ par parties",
          "stepTheme": "L'intégrale $\\int_1^e x^2 \\ln x dx$ par parties",
          "stepBadge": "L'intégrale $\\int_1^e x^2 \\ln x dx$ par parties",
          "paragraphText": "• On pose $u(x) = \\ln x$ (donc $u'(x) = \\frac{1}{x}$) et $v'(x) = x^2$ (donc $v(x) = \\frac{1}{3}x^3$).\nPar parties : $I = \\left[\\frac{1}{3}x^3 \\ln x\\right]_1^e - \\int_1^e \\frac{1}{3}x^2 dx = \\frac{e^3}{3} - \\frac{1}{9}(e^3 - 1)$.\nDonc $I = \\frac{2e^3 + 1}{9}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p04_q5",
            "type": "mcq",
            "prompt": "Que vaut $I = \\int_1^e x^2 \\ln x dx$ ?",
            "options": [
              "$\\frac{2e^3 + 1}{9}$",
              "$\\frac{2e^3 - 1}{9}$",
              "$\\frac{e^3 + 1}{9}$",
              "$\\frac{2e^3}{9}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par parties avec u = ln x et v' = x² : I = e³/3 − (1/9)(e³ − 1) = (2e³ + 1)/9."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le changement de variable affine : $P = \\int_{-1}^0 \\frac{1}{\\sqrt{2x + 3}}dx$",
          "stepTheme": "Le changement de variable affine : $P = \\int_{-1}^0 \\frac{1}{\\sqrt{2x + 3}}dx$",
          "stepBadge": "Le changement de variable affine : $P = \\int_{-1}^0 \\frac{1}{\\sqrt{2x + 3}}dx$",
          "paragraphText": "• On pose $t = 2x + 3$ : $dt = 2dx$, donc $dx = \\frac{1}{2}dt$ ; $x = -1$ donne $t = 1$ et $x = 0$ donne $t = 3$.\nDonc $P = \\int_1^3 \\frac{1}{\\sqrt{t}} \\times \\frac{1}{2}dt = \\int_1^3 \\frac{1}{2\\sqrt{t}}dt$.\n$P = [\\sqrt{t}]_1^3 = \\sqrt{3} - 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p04_q6",
            "type": "mcq",
            "prompt": "Que vaut $P = \\int_{-1}^0 \\frac{1}{\\sqrt{2x + 3}}dx$ ?",
            "options": [
              "$\\sqrt{3} - 1$",
              "$\\sqrt{3} + 1$",
              "$1 - \\sqrt{3}$",
              "$2\\sqrt{3} - 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec t = 2x + 3, dx = dt/2, les bornes deviennent 1 et 3 : P = ∫₁³ dt/(2√t) = [√t]₁³ = √3 − 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p04_q1",
          "type": "mcq",
          "prompt": "Que vaut $I = \\int_0^1 \\frac{e^x}{1 + e^x}dx$ ?",
          "options": [
            "$\\ln\\left(\\frac{1 + e}{2}\\right)$",
            "$\\ln(1 + e)$",
            "$\\ln 2$",
            "$1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "f est de la forme u'/u avec u(x) = 1 + e^x : une primitive est ln(1 + e^x), donc I = ln(1+e) − ln 2 = ln((1+e)/2)."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p04_q2",
          "type": "mcq",
          "prompt": "Que vaut $J = \\int_0^1 x e^{x^2}dx$ ?",
          "options": [
            "$\\frac{e - 1}{2}$",
            "$\\frac{e + 1}{2}$",
            "$e - 1$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec u(x) = x², x·e^{x²} = (1/2)u'e^u : une primitive est (1/2)e^{x²}, donc J = (1/2)(e − 1)."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p04_q3",
          "type": "mcq",
          "prompt": "Que vaut $K = \\int_0^{\\pi/3} \\cos^3 t dt$ ?",
          "options": [
            "$\\frac{3\\sqrt{3}}{8}$",
            "$\\frac{\\sqrt{3}}{2}$",
            "$\\frac{\\sqrt{3}}{8}$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "cos³t = cos t − cos t·sin²t : une primitive est sin t − (1/3)sin³t, donc K = √3/2 − √3/8 = 3√3/8."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p04_q4",
          "type": "mcq",
          "prompt": "Soient $u$ et $v$ dérivables sur $[a ; b]$, $u'$ et $v'$ continues. Que vaut $\\int_a^b u(x)v'(x)dx$ ?",
          "options": [
            "$[u(x)v(x)]_a^b - \\int_a^b u'(x)v(x)dx$",
            "$[u(x)v(x)]_a^b - \\int_a^b u(x)v'(x)dx$",
            "$[u'(x)v(x)]_a^b - \\int_a^b u'(x)v(x)dx$",
            "$[u(x)v(x)]_a^b - \\int_a^b u'(x)v'(x)dx$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La formule d'intégration par parties : ∫_a^b u·v' = [u·v]_a^b − ∫_a^b u'·v."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p04_q5",
          "type": "mcq",
          "prompt": "Que vaut $I = \\int_1^e x^2 \\ln x dx$ ?",
          "options": [
            "$\\frac{2e^3 + 1}{9}$",
            "$\\frac{2e^3 - 1}{9}$",
            "$\\frac{e^3 + 1}{9}$",
            "$\\frac{2e^3}{9}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par parties avec u = ln x et v' = x² : I = e³/3 − (1/9)(e³ − 1) = (2e³ + 1)/9."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p04_q6",
          "type": "mcq",
          "prompt": "Que vaut $P = \\int_{-1}^0 \\frac{1}{\\sqrt{2x + 3}}dx$ ?",
          "options": [
            "$\\sqrt{3} - 1$",
            "$\\sqrt{3} + 1$",
            "$1 - \\sqrt{3}$",
            "$2\\sqrt{3} - 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec t = 2x + 3, dx = dt/2, les bornes deviennent 1 et 3 : P = ∫₁³ dt/(2√t) = [√t]₁³ = √3 − 1."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l10_integrale_p05",
      "order": 5,
      "title": "Fonctions paires, impaires, périodiques et calcul d'aires",
      "summary": "Intégrales sur un intervalle symétrique pour les fonctions paires et impaires, intégrales des fonctions périodiques et calcul d'aires sous une courbe ou entre deux courbes.",
      "conceptExplanation": "Si $f$ est continue sur un intervalle $K$ symétrique par rapport à $0$ et $a$ dans $K$ : si $f$ est paire, $\\int_{-a}^a f(x)dx = 2\\int_0^a f(x)dx$ ; si $f$ est impaire, $\\int_{-a}^a f(x)dx = 0$.\nSi $f$ est continue et périodique de période $T$ : $\\int_{a+T}^{b+T} f(x)dx = \\int_a^b f(x)dx$ et $\\int_a^{a+T} f(x)dx = \\int_0^T f(x)dx$.\nAires : si $f$ est positive sur $[a ; b]$, l'aire sous $(C_f)$ vaut $\\int_a^b f(x)dx$ ; si $f$ est négative, elle vaut $-\\int_a^b f(x)dx$ ; si $f$ change de signe, on subdivise l'intervalle. Si $f \\leq g$ sur $[a ; b]$, l'aire entre les deux courbes vaut $\\int_a^b [g(x) - f(x)]dx$.",
      "keyRule": "Paire : ∫(−a→a) = 2∫(0→a). Impaire : ∫(−a→a) = 0. Périodique : l'intégrale sur une période est la même partout. Aire = ∫ (g−f) si f ≤ g.",
      "formulas": [
        {
          "name": "Intégrale d'une fonction paire",
          "formula": "\\int_{-a}^a f(x)dx = 2\\int_0^a f(x)dx",
          "note": "Si f est paire et continue."
        },
        {
          "name": "Intégrale d'une fonction impaire",
          "formula": "\\int_{-a}^a f(x)dx = 0",
          "note": "Si f est impaire et continue."
        },
        {
          "name": "Intégrale d'une fonction périodique",
          "formula": "\\int_a^{a+T} f(x)dx = \\int_0^T f(x)dx",
          "note": "Si f est périodique de période T."
        },
        {
          "name": "Aire entre deux courbes",
          "formula": "\\mathcal{A} = \\int_a^b [g(x) - f(x)]dx",
          "note": "Si f ≤ g sur [a ; b]."
        }
      ],
      "workedExample": {
        "title": "L'aire sous $f(x) = x^2$ entre $1$ et $3$",
        "statement": "Le plan est muni d'un repère orthogonal, unités : $2$ cm sur l'axe des abscisses et $4$ cm sur l'axe des ordonnées. On considère $f(x) = -x^2$. Calcule en cm² l'aire de la partie du plan limitée par la courbe de $f$, l'axe des abscisses et les droites $x = 1$ et $x = 3$.",
        "methodSteps": [
          "La fonction $f$ est continue et négative sur $\\mathbb{R}$ : l'aire vaut $\\mathcal{A} = -\\int_1^3 (-x^2)dx = \\int_1^3 x^2 dx$ en unités d'aire.",
          "On a $\\int_1^3 x^2 dx = \\left[\\frac{1}{3}x^3\\right]_1^3 = 9 - \\frac{1}{3} = \\frac{26}{3}$ u.a.",
          "L'unité d'aire vaut $2 \\times 4 = 8$ cm², donc $\\mathcal{A} = \\frac{26}{3} \\times 8 = \\frac{208}{3}$ cm²."
        ],
        "conclusion": "L'aire vaut $\\frac{208}{3}$ cm²."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "L'intégrale de $\\cos 2x$ sur $\\left[-\\frac{\\pi}{4} ; \\frac{\\pi}{4}\\right]$",
          "stepTheme": "L'intégrale de $\\cos 2x$ sur $\\left[-\\frac{\\pi}{4} ; \\frac{\\pi}{4}\\right]$",
          "stepBadge": "L'intégrale de $\\cos 2x$ sur $\\left[-\\frac{\\pi}{4} ; \\frac{\\pi}{4}\\right]$",
          "paragraphText": "• La fonction $x \\mapsto \\cos 2x$ est paire et continue sur $\\left[-\\frac{\\pi}{4} ; \\frac{\\pi}{4}\\right]$.\nDonc $\\int_{-\\pi/4}^{\\pi/4} \\cos 2x dx = 2\\int_0^{\\pi/4} \\cos 2x dx = \\int_0^{\\pi/4} 2\\cos 2x dx$.\nOn obtient $[\\sin 2x]_0^{\\pi/4} = 1 - 0 = 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p05_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\int_{-\\pi/4}^{\\pi/4} \\cos 2x dx$ ?",
            "options": [
              "$1$",
              "$0$",
              "$2$",
              "$\\frac{\\pi}{4}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "cos 2x est paire : l'intégrale vaut 2∫₀^{π/4} cos 2x dx = [sin 2x]₀^{π/4} = 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'intégrale de $\\sin 2x$ sur $\\left[-\\frac{\\pi}{4} ; \\frac{\\pi}{4}\\right]$",
          "stepTheme": "L'intégrale de $\\sin 2x$ sur $\\left[-\\frac{\\pi}{4} ; \\frac{\\pi}{4}\\right]$",
          "stepBadge": "L'intégrale de $\\sin 2x$ sur $\\left[-\\frac{\\pi}{4} ; \\frac{\\pi}{4}\\right]$",
          "paragraphText": "• La fonction $x \\mapsto \\sin 2x$ est impaire et continue sur $\\left[-\\frac{\\pi}{4} ; \\frac{\\pi}{4}\\right]$.\nPour une fonction impaire, l'intégrale sur un intervalle symétrique par rapport à $0$ est nulle.\nDonc $\\int_{-\\pi/4}^{\\pi/4} \\sin 2x dx = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p05_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\int_{-\\pi/4}^{\\pi/4} \\sin 2x dx$ ?",
            "options": [
              "$0$",
              "$1$",
              "$2$",
              "$-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "sin 2x est impaire : son intégrale sur l'intervalle symétrique [−π/4 ; π/4] est nulle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'intégrale de $\\cos 2x$ sur $\\left[\\frac{\\pi}{2} ; \\frac{3\\pi}{2}\\right]$",
          "stepTheme": "L'intégrale de $\\cos 2x$ sur $\\left[\\frac{\\pi}{2} ; \\frac{3\\pi}{2}\\right]$",
          "stepBadge": "L'intégrale de $\\cos 2x$ sur $\\left[\\frac{\\pi}{2} ; \\frac{3\\pi}{2}\\right]$",
          "paragraphText": "• La fonction $x \\mapsto \\cos 2x$ est continue sur $\\mathbb{R}$ et périodique de période $\\pi$.\nDonc $\\int_{\\pi/2}^{3\\pi/2} \\cos 2x dx = \\int_{\\pi/2}^{\\pi/2 + \\pi} \\cos 2x dx = \\int_0^\\pi \\cos 2x dx$.\nOr $\\int_0^\\pi \\cos 2x dx = \\left[\\frac{1}{2}\\sin 2x\\right]_0^\\pi = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p05_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\int_{\\pi/2}^{3\\pi/2} \\cos 2x dx$ ?",
            "options": [
              "$0$",
              "$1$",
              "$\\pi$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "cos 2x est périodique de période π : l'intégrale sur [π/2 ; 3π/2] vaut celle sur [0 ; π], soit [sin 2x / 2]₀^π = 0."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'aire sous $f(x) = -x^2$ entre $1$ et $3$",
          "stepTheme": "L'aire sous $f(x) = -x^2$ entre $1$ et $3$",
          "stepBadge": "L'aire sous $f(x) = -x^2$ entre $1$ et $3$",
          "paragraphText": "• $f(x) = -x^2$ est continue et négative sur $\\mathbb{R}$ : l'aire vaut $\\mathcal{A} = -\\int_1^3 (-x^2)dx = \\int_1^3 x^2 dx$ en unités d'aire.\n$\\int_1^3 x^2 dx = \\left[\\frac{1}{3}x^3\\right]_1^3 = 9 - \\frac{1}{3} = \\frac{26}{3}$ u.a.\nAvec $2$ cm sur l'axe des abscisses et $4$ cm sur l'axe des ordonnées, l'unité d'aire vaut $8$ cm² : $\\mathcal{A} = \\frac{26}{3} \\times 8 = \\frac{208}{3}$ cm².",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p05_q4",
            "type": "mcq",
            "prompt": "Unités : $2$ cm sur l'axe des abscisses et $4$ cm sur l'axe des ordonnées. Quelle est, en cm², l'aire limitée par la courbe de $f(x) = -x^2$, l'axe des abscisses et les droites $x = 1$ et $x = 3$ ?",
            "options": [
              "$\\frac{208}{3}$ cm²",
              "$\\frac{26}{3}$ cm²",
              "$208$ cm²",
              "$26$ cm²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'aire vaut ∫₁³ x² dx = 26/3 u.a. ; l'unité d'aire est 2×4 = 8 cm², donc A = (26/3)×8 = 208/3 cm²."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'aire sous $f(x) = x^3$ entre $-1$ et $1$",
          "stepTheme": "L'aire sous $f(x) = x^3$ entre $-1$ et $1$",
          "stepBadge": "L'aire sous $f(x) = x^3$ entre $-1$ et $1$",
          "paragraphText": "• $f(x) = x^3$ est continue, négative sur $[-1 ; 0]$ et positive sur $[0 ; 1]$ : on subdivise l'intervalle.\n$\\mathcal{A} = -\\int_{-1}^0 x^3 dx + \\int_0^1 x^3 dx = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$ u.a.\nAvec une unité graphique de $2$ cm, l'unité d'aire vaut $4$ cm² : $\\mathcal{A} = \\frac{1}{2} \\times 4 = 2$ cm².",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p05_q5",
            "type": "mcq",
            "prompt": "Soit $f(x) = x^3$ dans un repère orthonormé d'unité graphique $2$ cm. Quelle est, en cm², l'aire limitée par $(C_f)$, l'axe des abscisses et les droites $x = -1$ et $x = 1$ ?",
            "options": [
              "$2$ cm²",
              "$\\frac{1}{2}$ cm²",
              "$0$ cm²",
              "$1$ cm²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "f est négative sur [−1 ; 0] et positive sur [0 ; 1] : A = −∫_{−1}⁰ x³ dx + ∫₀¹ x³ dx = 1/4 + 1/4 = 1/2 u.a. ; l'unité d'aire est 4 cm², donc A = 2 cm²."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La terrasse : l'aire de la partie parabolique",
          "stepTheme": "La terrasse : l'aire de la partie parabolique",
          "stepBadge": "La terrasse : l'aire de la partie parabolique",
          "paragraphText": "• La terrasse a une partie rectangulaire ($2$ m $\\times$ $4$ m, soit $8$ m²) et une partie délimitée par la parabole d'équation $y = -x^2 + 4$ et le segment $[AB]$ avec $A(-2 ; 0)$ et $B(2 ; 0)$.\nL'aire $A_1$ de la partie parabolique est l'aire sous la parabole entre $x = -2$ et $x = 2$ : $A_1 = \\int_{-2}^2 (-x^2 + 4)dx$.\nLa partie rectangulaire a pour aire $A_2 = 2 \\times 4 = 8$ m² ; l'aire totale est $A_1 + A_2$.",
          "konanTip": "Le PDF donne A1 = 16 m², mais le calcul exact de ∫ de -2 à 2 de (-x²+4)dx donne 32/3 m² (environ 10,67 m²) : le calcul de G(-2) est erroné dans le PDF, et l'aire totale exacte est donc 56/3 m² et non 24 m². Le QCM porte sur la mise en équation, pas sur la valeur annoncée.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p05_q6",
            "type": "mcq",
            "prompt": "La partie parabolique de la terrasse est délimitée par la parabole $y = -x^2 + 4$ et le segment $[AB]$ avec $A(-2 ; 0)$ et $B(2 ; 0)$. Comment s'écrit son aire $A_1$ ?",
            "options": [
              "$A_1 = \\int_{-2}^2 (-x^2 + 4)dx$",
              "$A_1 = \\int_0^2 (-x^2 + 4)dx$",
              "$A_1 = \\int_{-2}^2 (x^2 - 4)dx$",
              "$A_1 = 2\\int_{-2}^2 (-x^2 + 4)dx$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'aire sous la parabole entre x = −2 et x = 2 est A₁ = ∫_{−2}² (−x²+4)dx."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p05_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\int_{-\\pi/4}^{\\pi/4} \\cos 2x dx$ ?",
          "options": [
            "$1$",
            "$0$",
            "$2$",
            "$\\frac{\\pi}{4}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "cos 2x est paire : l'intégrale vaut 2∫₀^{π/4} cos 2x dx = [sin 2x]₀^{π/4} = 1."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p05_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\int_{-\\pi/4}^{\\pi/4} \\sin 2x dx$ ?",
          "options": [
            "$0$",
            "$1$",
            "$2$",
            "$-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "sin 2x est impaire : son intégrale sur l'intervalle symétrique [−π/4 ; π/4] est nulle."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p05_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\int_{\\pi/2}^{3\\pi/2} \\cos 2x dx$ ?",
          "options": [
            "$0$",
            "$1$",
            "$\\pi$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "cos 2x est périodique de période π : l'intégrale sur [π/2 ; 3π/2] vaut celle sur [0 ; π], soit [sin 2x / 2]₀^π = 0."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p05_q4",
          "type": "mcq",
          "prompt": "Unités : $2$ cm sur l'axe des abscisses et $4$ cm sur l'axe des ordonnées. Quelle est, en cm², l'aire limitée par la courbe de $f(x) = -x^2$, l'axe des abscisses et les droites $x = 1$ et $x = 3$ ?",
          "options": [
            "$\\frac{208}{3}$ cm²",
            "$\\frac{26}{3}$ cm²",
            "$208$ cm²",
            "$26$ cm²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'aire vaut ∫₁³ x² dx = 26/3 u.a. ; l'unité d'aire est 2×4 = 8 cm², donc A = (26/3)×8 = 208/3 cm²."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p05_q5",
          "type": "mcq",
          "prompt": "Soit $f(x) = x^3$ dans un repère orthonormé d'unité graphique $2$ cm. Quelle est, en cm², l'aire limitée par $(C_f)$, l'axe des abscisses et les droites $x = -1$ et $x = 1$ ?",
          "options": [
            "$2$ cm²",
            "$\\frac{1}{2}$ cm²",
            "$0$ cm²",
            "$1$ cm²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "f est négative sur [−1 ; 0] et positive sur [0 ; 1] : A = −∫_{−1}⁰ x³ dx + ∫₀¹ x³ dx = 1/4 + 1/4 = 1/2 u.a. ; l'unité d'aire est 4 cm², donc A = 2 cm²."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p05_q6",
          "type": "mcq",
          "prompt": "La partie parabolique de la terrasse est délimitée par la parabole $y = -x^2 + 4$ et le segment $[AB]$ avec $A(-2 ; 0)$ et $B(2 ; 0)$. Comment s'écrit son aire $A_1$ ?",
          "options": [
            "$A_1 = \\int_{-2}^2 (-x^2 + 4)dx$",
            "$A_1 = \\int_0^2 (-x^2 + 4)dx$",
            "$A_1 = \\int_{-2}^2 (x^2 - 4)dx$",
            "$A_1 = 2\\int_{-2}^2 (-x^2 + 4)dx$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'aire sous la parabole entre x = −2 et x = 2 est A₁ = ∫_{−2}² (−x²+4)dx."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l10_integrale_p06",
      "order": 6,
      "title": "La fonction $F(x) = \\int_a^x f(t)dt$ et ses applications",
      "summary": "La fonction définie par une intégrale à borne variable est la primitive de f qui s'annule en a ; interprétation graphique de l'intégrale et application à la chute libre.",
      "conceptExplanation": "Soit $f$ une fonction continue sur un intervalle $K$ et $a$ un élément de $K$.\nLa fonction $F : x \\mapsto \\int_a^x f(t)dt$ est la primitive de $f$ qui s'annule en $a$ : pour tout $x$ de $K$, $F'(x) = f(x)$ et $F(a) = 0$.\nConséquence : le logarithme népérien est la fonction $F$ définie sur $]0 ; +\\infty[$ par $F(x) = \\int_1^x \\frac{1}{t}dt$, car $\\ln$ est l'unique primitive de $x \\mapsto \\frac{1}{x}$ qui s'annule en $1$.\nInterprétation graphique : si $f$ est continue et positive sur $[a ; b]$, $\\int_a^b f(x)dx$ est l'aire (en unités d'aire) de la partie du plan limitée par la courbe $(C_f)$, l'axe des abscisses et les droites $x = a$ et $x = b$.",
      "keyRule": "F(x) = ∫(a→x) f(t)dt est la primitive de f qui s'annule en a ; F'(x) = f(x). ln x = ∫(1→x) dt/t.",
      "formulas": [
        {
          "name": "Primitive définie par une intégrale",
          "formula": "F(x) = \\int_a^x f(t)dt \\Rightarrow F'(x) = f(x) \\text{ et } F(a) = 0",
          "note": "f continue sur K, a dans K."
        },
        {
          "name": "Le logarithme comme intégrale",
          "formula": "\\ln(x) = \\int_1^x \\frac{1}{t}dt",
          "note": "Pour x > 0."
        },
        {
          "name": "Interprétation graphique",
          "formula": "\\int_a^b f(x)dx = \\mathcal{A}",
          "note": "Aire sous (C_f) entre a et b, si f ≥ 0 sur [a ; b]."
        }
      ],
      "workedExample": {
        "title": "La chute libre : la distance parcourue",
        "statement": "Un corps est lâché, avec une vitesse initiale nulle, d'une hauteur de $2000$ m ; il est soumis à l'accélération de la pesanteur $g = 9{,}8$ m.s$^{-2}$. Justifie que $D(x) = \\int_0^x gt dt$ est la distance parcourue après $x$ secondes, puis calcule l'instant $T$ mis pour atteindre le sol.",
        "methodSteps": [
          "La fonction $D$ définie par $D(x) = \\int_0^x gt dt$ est la primitive de $t \\mapsto gt$ qui s'annule en $0$ : c'est la distance parcourue, car la vitesse est $v(t) = gt$.",
          "On a $D(x) = \\left[\\frac{1}{2}gt^2\\right]_0^x = \\frac{1}{2}gx^2 = 4{,}9x^2$.",
          "Le corps atteint le sol quand $D(T) = 2000$, soit $4{,}9T^2 = 2000$ : $T^2 = \\frac{2000}{4{,}9} \\approx 408{,}16$, donc $T \\approx 20{,}2$ s."
        ],
        "conclusion": "Le corps met environ $20{,}2$ secondes pour atteindre le sol."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fonction $F(x) = \\int_a^x f(t)dt$",
          "stepTheme": "La fonction $F(x) = \\int_a^x f(t)dt$",
          "stepBadge": "La fonction $F(x) = \\int_a^x f(t)dt$",
          "paragraphText": "• Soit $f$ continue sur un intervalle $K$ et $a$ un élément de $K$.\nLa fonction $F : x \\mapsto \\int_a^x f(t)dt$ est la primitive de $f$ qui s'annule en $a$.\nAutrement dit, $F(a) = 0$ et, pour tout $x$ de $K$, $F'(x) = f(x)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p06_q1",
            "type": "mcq",
            "prompt": "Soit $f$ continue sur $K$ et $a$ dans $K$. Qu'est-ce que la fonction $F(x) = \\int_a^x f(t)dt$ ?",
            "options": [
              "La primitive de $f$ qui s'annule en $a$",
              "La primitive de $f$ qui s'annule en $0$",
              "Une primitive quelconque de $f$",
              "La dérivée de $f$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "F(x) = ∫_a^x f(t)dt est la primitive de f qui s'annule en a : F(a) = 0 et F'(x) = f(x)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La dérivée de $F(x) = \\int_a^x f(t)dt$",
          "stepTheme": "La dérivée de $F(x) = \\int_a^x f(t)dt$",
          "stepBadge": "La dérivée de $F(x) = \\int_a^x f(t)dt$",
          "paragraphText": "• Si $F(x) = \\int_a^x f(t)dt$ avec $f$ continue, alors $F$ est dérivable et $F'(x) = f(x)$ pour tout $x$.\nC'est la conséquence directe du fait que $F$ est une primitive de $f$.\nPar exemple, si $F(x) = \\int_1^x \\frac{1}{t}dt$, alors $F'(x) = \\frac{1}{x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p06_q2",
            "type": "mcq",
            "prompt": "Soit $F(x) = \\int_a^x f(t)dt$ avec $f$ continue. Que vaut $F'(x)$ ?",
            "options": [
              "$f(x)$",
              "$\\int_a^x f(t)dt$",
              "$f'(x)$",
              "$0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "F est une primitive de f, donc F'(x) = f(x) pour tout x."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le logarithme népérien comme intégrale",
          "stepTheme": "Le logarithme népérien comme intégrale",
          "stepBadge": "Le logarithme népérien comme intégrale",
          "paragraphText": "• La fonction $\\ln$ est l'unique primitive sur $]0 ; +\\infty[$ de la fonction $x \\mapsto \\frac{1}{x}$ qui s'annule en $1$.\nOr la fonction $F(x) = \\int_1^x \\frac{1}{t}dt$ est, elle aussi, la primitive de $x \\mapsto \\frac{1}{x}$ qui s'annule en $1$.\nOn en déduit que $\\ln(x) = \\int_1^x \\frac{1}{t}dt$ pour tout $x > 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p06_q3",
            "type": "mcq",
            "prompt": "Quelle intégrale définit le logarithme népérien $\\ln(x)$ pour $x > 0$ ?",
            "options": [
              "$\\ln(x) = \\int_1^x \\frac{1}{t}dt$",
              "$\\ln(x) = \\int_0^x \\frac{1}{t}dt$",
              "$\\ln(x) = \\int_1^x t dt$",
              "$\\ln(x) = \\int_1^x \\ln t dt$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ln est l'unique primitive de x ↦ 1/x qui s'annule en 1 : ln(x) = ∫₁^x (1/t)dt."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'interprétation graphique : $\\int_0^5 (2x + 1)dx$",
          "stepTheme": "L'interprétation graphique : $\\int_0^5 (2x + 1)dx$",
          "stepBadge": "L'interprétation graphique : $\\int_0^5 (2x + 1)dx$",
          "paragraphText": "• Soit $f(x) = 2x + 1$, continue et positive sur $[0 ; +\\infty[$.\n$\\int_0^5 f(x)dx$ représente l'aire de la partie du plan délimitée par la courbe de $f$, l'axe des abscisses et les droites $x = 0$ et $x = 5$.\nOn a $\\int_0^5 (2x + 1)dx = [x^2 + x]_0^5 = 30$ u.a. ; avec $2$ cm sur l'axe des abscisses et $3$ cm sur l'axe des ordonnées, l'unité d'aire vaut $6$ cm², soit $180$ cm².",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p06_q4",
            "type": "mcq",
            "prompt": "Unités : $2$ cm sur l'axe des abscisses et $3$ cm sur l'axe des ordonnées. Que vaut, en cm², l'aire représentée par $\\int_0^5 (2x + 1)dx$ ?",
            "options": [
              "$180$ cm²",
              "$30$ cm²",
              "$60$ cm²",
              "$90$ cm²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "∫₀⁵ (2x+1)dx = [x²+x]₀⁵ = 30 u.a. ; l'unité d'aire vaut 2×3 = 6 cm², donc l'aire est 30×6 = 180 cm²."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'aire entre deux courbes",
          "stepTheme": "L'aire entre deux courbes",
          "stepBadge": "L'aire entre deux courbes",
          "paragraphText": "• Soient $f$ et $g$ continues sur $[a ; b]$. L'aire de la partie du plan limitée par $(C_f)$, $(C_g)$ et les droites $x = a$ et $x = b$ se calcule avec la différence des fonctions.\nSi $f \\leq g$ sur $[a ; b]$, alors $\\mathcal{A} = \\int_a^b [g(x) - f(x)]dx$ u.a.\nSi $f - g$ ne garde pas un signe constant, on subdivise $[a ; b]$ comme pour une seule fonction.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p06_q5",
            "type": "mcq",
            "prompt": "Soient $f$ et $g$ continues sur $[a ; b]$ avec $f \\leq g$ sur $[a ; b]$. Quelle est l'aire entre leurs courbes ?",
            "options": [
              "$\\mathcal{A} = \\int_a^b [g(x) - f(x)]dx$",
              "$\\mathcal{A} = \\int_a^b [f(x) - g(x)]dx$",
              "$\\mathcal{A} = \\int_a^b [f(x) + g(x)]dx$",
              "$\\mathcal{A} = \\int_a^b f(x)g(x)dx$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Si f ≤ g sur [a ; b], l'aire entre les courbes est ∫_a^b (g(x) − f(x))dx."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La chute libre : le temps mis pour atteindre le sol",
          "stepTheme": "La chute libre : le temps mis pour atteindre le sol",
          "stepBadge": "La chute libre : le temps mis pour atteindre le sol",
          "paragraphText": "• Un corps est lâché d'une hauteur de $2000$ m avec une vitesse initiale nulle ; $g = 9{,}8$ m.s$^{-2}$.\nLa distance parcourue après $x$ secondes est $D(x) = \\int_0^x gt dt = \\frac{1}{2}gx^2 = 4{,}9x^2$.\nLe corps atteint le sol quand $4{,}9T^2 = 2000$, soit $T^2 = \\frac{2000}{4{,}9} \\approx 408{,}16$ : $T \\approx 20{,}2$ s.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l10_integrale_p06_q6",
            "type": "mcq",
            "prompt": "Un corps est lâché d'une hauteur de $2000$ m avec une vitesse initiale nulle ($g = 9{,}8$ m.s$^{-2}$). Combien de temps met-il pour atteindre le sol ?",
            "options": [
              "Environ $20{,}2$ s",
              "Environ $14{,}3$ s",
              "Environ $28{,}6$ s",
              "Environ $10{,}1$ s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "D(x) = ∫₀^x 9,8t dt = 4,9x² ; D(T) = 2000 donne T² = 2000/4,9 ≈ 408,16, soit T ≈ 20,2 s."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p06_q1",
          "type": "mcq",
          "prompt": "Soit $f$ continue sur $K$ et $a$ dans $K$. Qu'est-ce que la fonction $F(x) = \\int_a^x f(t)dt$ ?",
          "options": [
            "La primitive de $f$ qui s'annule en $a$",
            "La primitive de $f$ qui s'annule en $0$",
            "Une primitive quelconque de $f$",
            "La dérivée de $f$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "F(x) = ∫_a^x f(t)dt est la primitive de f qui s'annule en a : F(a) = 0 et F'(x) = f(x)."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p06_q2",
          "type": "mcq",
          "prompt": "Soit $F(x) = \\int_a^x f(t)dt$ avec $f$ continue. Que vaut $F'(x)$ ?",
          "options": [
            "$f(x)$",
            "$\\int_a^x f(t)dt$",
            "$f'(x)$",
            "$0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "F est une primitive de f, donc F'(x) = f(x) pour tout x."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p06_q3",
          "type": "mcq",
          "prompt": "Quelle intégrale définit le logarithme népérien $\\ln(x)$ pour $x > 0$ ?",
          "options": [
            "$\\ln(x) = \\int_1^x \\frac{1}{t}dt$",
            "$\\ln(x) = \\int_0^x \\frac{1}{t}dt$",
            "$\\ln(x) = \\int_1^x t dt$",
            "$\\ln(x) = \\int_1^x \\ln t dt$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ln est l'unique primitive de x ↦ 1/x qui s'annule en 1 : ln(x) = ∫₁^x (1/t)dt."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p06_q4",
          "type": "mcq",
          "prompt": "Unités : $2$ cm sur l'axe des abscisses et $3$ cm sur l'axe des ordonnées. Que vaut, en cm², l'aire représentée par $\\int_0^5 (2x + 1)dx$ ?",
          "options": [
            "$180$ cm²",
            "$30$ cm²",
            "$60$ cm²",
            "$90$ cm²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "∫₀⁵ (2x+1)dx = [x²+x]₀⁵ = 30 u.a. ; l'unité d'aire vaut 2×3 = 6 cm², donc l'aire est 30×6 = 180 cm²."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p06_q5",
          "type": "mcq",
          "prompt": "Soient $f$ et $g$ continues sur $[a ; b]$ avec $f \\leq g$ sur $[a ; b]$. Quelle est l'aire entre leurs courbes ?",
          "options": [
            "$\\mathcal{A} = \\int_a^b [g(x) - f(x)]dx$",
            "$\\mathcal{A} = \\int_a^b [f(x) - g(x)]dx$",
            "$\\mathcal{A} = \\int_a^b [f(x) + g(x)]dx$",
            "$\\mathcal{A} = \\int_a^b f(x)g(x)dx$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si f ≤ g sur [a ; b], l'aire entre les courbes est ∫_a^b (g(x) − f(x))dx."
        },
        {
          "id": "terminale_c_maths_numerique_l10_integrale_p06_q6",
          "type": "mcq",
          "prompt": "Un corps est lâché d'une hauteur de $2000$ m avec une vitesse initiale nulle ($g = 9{,}8$ m.s$^{-2}$). Combien de temps met-il pour atteindre le sol ?",
          "options": [
            "Environ $20{,}2$ s",
            "Environ $14{,}3$ s",
            "Environ $28{,}6$ s",
            "Environ $10{,}1$ s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "D(x) = ∫₀^x 9,8t dt = 4,9x² ; D(T) = 2000 donne T² = 2000/4,9 ≈ 408,16, soit T ≈ 20,2 s."
        }
      ]
    }
  ]
};
