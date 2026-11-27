import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 06 : Nombres complexes » (format v2 : mini-leçons de 5 à 8 étapes). Contenu vérifié : dans le livre 2025-2026, cette leçon est numérotée « Leçon 7 ».
// Source : https://lyc.ecole-ci.org/course/view.php?id=2849
export const MATHS_TLE_CD_L06_COMPLEXES: CurriculumChapter = {
  "id": "terminale_c_maths_numerique_l06_complexes",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 6,
  "title": "Leçon 6 : Nombres complexes",
  "summary": "Forme algébrique et opérations, conjugué et module, représentation géométrique, argument et formes trigonométrique et exponentielle, formules de Moivre et d'Euler, équations dans C et applications géométriques.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2849",
  "points": [
    {
      "id": "terminale_c_maths_numerique_l06_complexes_p01",
      "order": 1,
      "title": "Forme algébrique et opérations",
      "summary": "Un nombre complexe s'écrit z = a + ib avec i² = −1 ; on calcule dans C comme dans R.",
      "conceptExplanation": "On appelle nombre complexe tout nombre de la forme $a + ib$ où $a \\in \\mathbb{R}$, $b \\in \\mathbb{R}$ et $i^2 = -1$. L'ensemble des nombres complexes est noté $\\mathbb{C}$.\nTout nombre complexe $z$ s'écrit de façon unique sous la forme $z = a + ib$ : c'est sa forme algébrique. Le nombre réel $a$ est appelé la partie réelle du complexe, on note $a = \\mathcal{Re}(z)$ ; le nombre réel $b$ est appelé la partie imaginaire, on note $b = \\mathcal{Im}(z)$.\nUn nombre complexe dont la partie réelle est nulle est un imaginaire pur (ensemble $i\\mathbb{R}$) ; un nombre complexe dont la partie imaginaire est nulle est un nombre réel. On a $\\mathbb{R} \\subset \\mathbb{C}$ et $i\\mathbb{R} \\subset \\mathbb{C}$ ; le seul nombre complexe à la fois réel et imaginaire pur est $0$.\nLes calculs se font dans $\\mathbb{C}$ comme dans $\\mathbb{R}$ en tenant compte de $i^2 = -1$.\nOpérations : soient $z = a + ib$ et $z' = a' + ib'$.\n- $z + z' = (a + a') + i(b + b')$.\n- $z \\times z' = (aa' - bb') + i(ab' + a'b)$.\n- Pour $z \\neq 0$, $\\frac{1}{z} = \\frac{a}{a^2+b^2} - i\\frac{b}{a^2+b^2}$.\nÉgalité : $z = z' \\iff \\mathcal{Re}(z) = \\mathcal{Re}(z')$ et $\\mathcal{Im}(z) = \\mathcal{Im}(z')$ ; $z = 0 \\iff \\mathcal{Re}(z) = 0$ et $\\mathcal{Im}(z) = 0$.\nPuissances de $i$ : pour tout entier naturel $n$, $i^{4n} = 1$, $i^{4n+1} = i$, $i^{4n+2} = -1$, $i^{4n+3} = -i$.",
      "keyRule": "z = a + ib, i² = −1. Re(z) = a, Im(z) = b. Deux complexes sont égaux si leurs parties réelle et imaginaire sont égales.",
      "formulas": [
        {
          "name": "Produit de deux complexes",
          "formula": "(a + ib)(a' + ib') = (aa' - bb') + i(ab' + a'b)",
          "note": "On développe comme dans R en remplaçant i² par -1."
        },
        {
          "name": "Inverse d'un complexe non nul",
          "formula": "\\frac{1}{a + ib} = \\frac{a}{a^2+b^2} - i\\frac{b}{a^2+b^2}",
          "note": "On multiplie numérateur et dénominateur par le conjugué."
        }
      ],
      "workedExample": {
        "title": "La forme algébrique de $(2 - i)(3 + 2i)$",
        "statement": "Donne la forme algébrique de $z = (2 - i)(3 + 2i)$.",
        "methodSteps": [
          "On développe : $(2 - i)(3 + 2i) = 6 + 4i - 3i - 2i^2$.",
          "Comme $i^2 = -1$, on a $-2i^2 = 2$.",
          "Donc $z = 8 + i$."
        ],
        "conclusion": "$z = 8 + i$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La forme algébrique",
          "stepTheme": "La forme algébrique",
          "stepBadge": "La forme algébrique",
          "paragraphText": "• On appelle nombre complexe tout nombre de la forme $a + ib$ où $a \\in \\mathbb{R}$, $b \\in \\mathbb{R}$ et $i^2 = -1$.\nTout nombre complexe $z$ s'écrit de façon unique sous la forme $z = a + ib$ : c'est sa forme algébrique.\nLe nombre réel $a$ est la partie réelle, $a = \\mathcal{Re}(z)$ ; le nombre réel $b$ est la partie imaginaire, $b = \\mathcal{Im}(z)$.\nExemple : $z = 3 - 2i$ a pour partie réelle $3$ et pour partie imaginaire $-2$ ; $z = 5i$ est un imaginaire pur.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p01_q1",
            "type": "mcq",
            "prompt": "Soit $z = 3 - 2i$. Que valent $\\mathcal{Re}(z)$ et $\\mathcal{Im}(z)$ ?",
            "options": [
              "$\\mathcal{Re}(z) = 3$ et $\\mathcal{Im}(z) = -2$",
              "$\\mathcal{Re}(z) = 3$ et $\\mathcal{Im}(z) = 2$",
              "$\\mathcal{Re}(z) = -2$ et $\\mathcal{Im}(z) = 3$",
              "$\\mathcal{Re}(z) = 3 - 2i$ et $\\mathcal{Im}(z) = 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour $z = 3 - 2i$, la partie réelle est $3$ et la partie imaginaire est $-2$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Addition et multiplication",
          "stepTheme": "Addition et multiplication",
          "stepBadge": "Addition et multiplication",
          "paragraphText": "• $(2 + 4i) + (-5 + i) = (2 - 5) + (4 + 1)i = -3 + 5i$.\n• $(2 - i)(3 + 2i) = (2 \\times 3 - (-1 \\times 2)) + (2 \\times 2 + 3 \\times (-1))i = 8 + i$.\nOn calcule dans $\\mathbb{C}$ comme dans $\\mathbb{R}$ en tenant compte de $i^2 = -1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p01_q2",
            "type": "mcq",
            "prompt": "Que vaut $(2 - i)(3 + 2i)$ sous forme algébrique ?",
            "options": [
              "$8 + i$",
              "$6 + i$",
              "$8 - i$",
              "$4 + 7i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(2 - i)(3 + 2i) = 6 + 4i - 3i - 2i^2 = 6 + i + 2 = 8 + i$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'inverse d'un complexe",
          "stepTheme": "L'inverse d'un complexe",
          "stepBadge": "L'inverse d'un complexe",
          "paragraphText": "• Pour $z = 1 - 3i$ non nul, $\\frac{2}{1 - 3i} = 2 \\times \\frac{1}{1 - 3i} = 2\\left(\\frac{1}{10} + i\\frac{3}{10}\\right) = \\frac{1}{5} + \\frac{3}{5}i$.\nMéthode : on multiplie le numérateur et le dénominateur par le conjugué du dénominateur, puis on utilise $i^2 = -1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p01_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\frac{2}{1 - 3i}$ sous forme algébrique ?",
            "options": [
              "$\\frac{1}{5} + \\frac{3}{5}i$",
              "$\\frac{1}{5} - \\frac{3}{5}i$",
              "$\\frac{2}{5} + \\frac{6}{5}i$",
              "$2 + 6i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{2}{1 - 3i} = \\frac{2(1 + 3i)}{10} = \\frac{1}{5} + \\frac{3}{5}i$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Égalité de deux complexes",
          "stepTheme": "Égalité de deux complexes",
          "stepBadge": "Égalité de deux complexes",
          "paragraphText": "• $z = z' \\iff \\mathcal{Re}(z) = \\mathcal{Re}(z')$ et $\\mathcal{Im}(z) = \\mathcal{Im}(z')$.\nExemple : soient $z = a + 2 + i(b + 5)$ et $z' = -1 + 3i$. On a $z = z'$ si et seulement si $a + 2 = -1$ et $b + 5 = 3$, soit $a = -3$ et $b = -2$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p01_q4",
            "type": "mcq",
            "prompt": "Soient $z = a + 2 + i(b + 5)$ et $z' = -1 + 3i$. Pour quelles valeurs de $a$ et $b$ a-t-on $z = z'$ ?",
            "options": [
              "$a = -3$ et $b = -2$",
              "$a = 3$ et $b = 2$",
              "$a = -1$ et $b = 3$",
              "$a = 1$ et $b = -3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$a + 2 = -1$ donne $a = -3$ et $b + 5 = 3$ donne $b = -2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les puissances de i",
          "stepTheme": "Les puissances de i",
          "stepBadge": "Les puissances de i",
          "paragraphText": "• Pour tout entier naturel $n$ : $i^{4n} = 1$, $i^{4n+1} = i$, $i^{4n+2} = -1$, $i^{4n+3} = -i$.\nExemples : $i^{2019} = i^{4 \\times 504 + 3} = -i$ ; $i^{1000000000} = i^{4 \\times 250000000} = 1$.\nMéthode : on divise l'exposant par $4$ et on regarde le reste.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p01_q5",
            "type": "mcq",
            "prompt": "Que vaut $i^{2019}$ ?",
            "options": [
              "$1$",
              "$i$",
              "$-1$",
              "$-i$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2019 = 4 \\times 504 + 3$ donc $i^{2019} = i^{4 \\times 504 + 3} = -i$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le développement de $(1 - 2i)^5$",
          "stepTheme": "Le développement de $(1 - 2i)^5$",
          "stepBadge": "Le développement de $(1 - 2i)^5$",
          "paragraphText": "• On développe $(1 - 2i)^5$ avec la formule du binôme de Newton.\n$(1 - 2i)^5 = 1 - 10i - 40 + 80i + 80 - 32i = 41 + 38i$.\nOn regroupe les parties réelle et imaginaire après avoir remplacé les puissances de $i$ par leurs valeurs.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p01_q6",
            "type": "mcq",
            "prompt": "Que vaut $(1 - 2i)^5$ sous forme algébrique ?",
            "options": [
              "$41 + 38i$",
              "$41 - 38i$",
              "$1 + 32i$",
              "$-39 + 38i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par la formule du binôme : $(1 - 2i)^5 = 1 - 10i - 40 + 80i + 80 - 32i = 41 + 38i$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p01_q1",
          "type": "mcq",
          "prompt": "Soit $z = 3 - 2i$. Que valent $\\mathcal{Re}(z)$ et $\\mathcal{Im}(z)$ ?",
          "options": [
            "$\\mathcal{Re}(z) = 3$ et $\\mathcal{Im}(z) = -2$",
            "$\\mathcal{Re}(z) = 3$ et $\\mathcal{Im}(z) = 2$",
            "$\\mathcal{Re}(z) = -2$ et $\\mathcal{Im}(z) = 3$",
            "$\\mathcal{Re}(z) = 3 - 2i$ et $\\mathcal{Im}(z) = 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour $z = 3 - 2i$, la partie réelle est $3$ et la partie imaginaire est $-2$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p01_q2",
          "type": "mcq",
          "prompt": "Que vaut $(2 - i)(3 + 2i)$ sous forme algébrique ?",
          "options": [
            "$8 + i$",
            "$6 + i$",
            "$8 - i$",
            "$4 + 7i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(2 - i)(3 + 2i) = 6 + 4i - 3i - 2i^2 = 6 + i + 2 = 8 + i$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p01_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\frac{2}{1 - 3i}$ sous forme algébrique ?",
          "options": [
            "$\\frac{1}{5} + \\frac{3}{5}i$",
            "$\\frac{1}{5} - \\frac{3}{5}i$",
            "$\\frac{2}{5} + \\frac{6}{5}i$",
            "$2 + 6i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{2}{1 - 3i} = \\frac{2(1 + 3i)}{10} = \\frac{1}{5} + \\frac{3}{5}i$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p01_q4",
          "type": "mcq",
          "prompt": "Soient $z = a + 2 + i(b + 5)$ et $z' = -1 + 3i$. Pour quelles valeurs de $a$ et $b$ a-t-on $z = z'$ ?",
          "options": [
            "$a = -3$ et $b = -2$",
            "$a = 3$ et $b = 2$",
            "$a = -1$ et $b = 3$",
            "$a = 1$ et $b = -3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$a + 2 = -1$ donne $a = -3$ et $b + 5 = 3$ donne $b = -2$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p01_q5",
          "type": "mcq",
          "prompt": "Que vaut $i^{2019}$ ?",
          "options": [
            "$1$",
            "$i$",
            "$-1$",
            "$-i$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2019 = 4 \\times 504 + 3$ donc $i^{2019} = i^{4 \\times 504 + 3} = -i$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p01_q6",
          "type": "mcq",
          "prompt": "Que vaut $(1 - 2i)^5$ sous forme algébrique ?",
          "options": [
            "$41 + 38i$",
            "$41 - 38i$",
            "$1 + 32i$",
            "$-39 + 38i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par la formule du binôme : $(1 - 2i)^5 = 1 - 10i - 40 + 80i + 80 - 32i = 41 + 38i$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l06_complexes_p02",
      "order": 2,
      "title": "Conjugué et module",
      "summary": "Le conjugué change le signe de la partie imaginaire ; le module est la racine carrée de z·z̄.",
      "conceptExplanation": "Soit $z = a + ib$ avec $a, b \\in \\mathbb{R}$. Le nombre complexe conjugué de $z$ est le nombre complexe noté $\\bar{z}$ tel que $\\bar{z} = a - ib$.\nExemples : $\\bar{1} = 1$ ; $\\bar{i} = -i$ ; $\\overline{1 + 3i} = 1 - 3i$ ; $\\overline{2i - 3} = -3 - 2i$.\nPropriétés : $\\bar{\\bar{z}} = z$ ; $\\overline{z + z'} = \\bar{z} + \\bar{z'}$ ; $z + \\bar{z} = 2\\mathcal{Re}(z)$ ; $z - \\bar{z} = 2i\\mathcal{Im}(z)$ ; $\\overline{z \\times z'} = \\bar{z} \\times \\bar{z'}$ ; $\\overline{z^n} = \\bar{z}^n$ ; $z \\times \\bar{z} = a^2 + b^2$.\nCaractérisations : $z \\in \\mathbb{R} \\iff \\mathcal{Im}(z) = 0 \\iff z = \\bar{z}$ ; $z \\in i\\mathbb{R} \\iff \\mathcal{Re}(z) = 0 \\iff z = -\\bar{z}$.\nModule : le module du nombre complexe $z = a + ib$ est le nombre réel positif noté $|z|$ tel que $|z| = \\sqrt{a^2 + b^2}$. On a $|z| = \\sqrt{z \\times \\bar{z}}$.\nPropriétés : $|z| = |-z| = |\\bar{z}|$ ; $|z \\times z'| = |z| \\times |z'|$ ; $|z^n| = |z|^n$ ; $|z + z'| \\leq |z| + |z'|$ (inégalité triangulaire) ; $|z|^2 = z \\times \\bar{z} = (\\mathcal{Re}(z))^2 + (\\mathcal{Im}(z))^2$.",
      "keyRule": "z̄ = a − ib. z·z̄ = a² + b² = |z|². |z×z'| = |z|·|z'|. z réel ⟺ z = z̄ ; z imaginaire pur ⟺ z = −z̄.",
      "formulas": [
        {
          "name": "Module d'un complexe",
          "formula": "|a + ib| = \\sqrt{a^2 + b^2} = \\sqrt{z \\times \\bar{z}}",
          "note": "Le module est un nombre réel positif."
        },
        {
          "name": "Conjugué et module",
          "formula": "z \\times \\bar{z} = |z|^2,\\quad z + \\bar{z} = 2\\mathcal{Re}(z),\\quad z - \\bar{z} = 2i\\mathcal{Im}(z)",
          "note": "Ces formules servent à calculer 1/z et à tester si z est réel."
        }
      ],
      "workedExample": {
        "title": "Le conjugué et le module de $1 - 3i$",
        "statement": "Soit $z = 1 - 3i$. Calcule $z \\times \\bar{z}$, $z + \\bar{z}$ et $z - \\bar{z}$.",
        "methodSteps": [
          "$z \\times \\bar{z} = (\\mathcal{Re}(z))^2 + (\\mathcal{Im}(z))^2 = 1^2 + (-3)^2 = 10$.",
          "$z + \\bar{z} = 2\\mathcal{Re}(z) = 2 \\times 1 = 2$.",
          "$z - \\bar{z} = 2i\\mathcal{Im}(z) = 2i \\times (-3) = -6i$."
        ],
        "conclusion": "$z \\times \\bar{z} = 10$, $z + \\bar{z} = 2$, $z - \\bar{z} = -6i$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le conjugué d'un complexe",
          "stepTheme": "Le conjugué d'un complexe",
          "stepBadge": "Le conjugué d'un complexe",
          "paragraphText": "• Soit $z = a + ib$ avec $a, b \\in \\mathbb{R}$. Le conjugué de $z$ est $\\bar{z} = a - ib$ : on change le signe de la partie imaginaire.\nExemples : $\\overline{1 + 3i} = 1 - 3i$ ; $\\overline{2i - 3} = -3 - 2i$ ; $\\bar{i} = -i$ ; $\\bar{1} = 1$.\nPropriétés : $\\bar{\\bar{z}} = z$ ; $\\overline{z + z'} = \\bar{z} + \\bar{z'}$ ; $\\overline{z \\times z'} = \\bar{z} \\times \\bar{z'}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p02_q1",
            "type": "mcq",
            "prompt": "Que vaut le conjugué de $z = 1 + 3i$ ?",
            "options": [
              "$1 + 3i$",
              "$1 - 3i$",
              "$-1 + 3i$",
              "$-1 - 3i$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le conjugué change le signe de la partie imaginaire : $\\overline{1 + 3i} = 1 - 3i$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les formules avec le conjugué",
          "stepTheme": "Les formules avec le conjugué",
          "stepBadge": "Les formules avec le conjugué",
          "paragraphText": "• Pour $z = 1 - 3i$ : $z \\times \\bar{z} = 1^2 + (-3)^2 = 10$ ; $z + \\bar{z} = 2\\mathcal{Re}(z) = 2$ ; $z - \\bar{z} = 2i\\mathcal{Im}(z) = -6i$.\nCes formules permettent de retrouver la partie réelle et la partie imaginaire à partir de $z$ et de $\\bar{z}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p02_q2",
            "type": "mcq",
            "prompt": "Soit $z = 1 - 3i$. Que vaut $z \\times \\bar{z}$ ?",
            "options": [
              "$10$",
              "$-8$",
              "$2$",
              "$-6i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$z \\times \\bar{z} = (\\mathcal{Re}(z))^2 + (\\mathcal{Im}(z))^2 = 1 + 9 = 10$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le module d'un complexe",
          "stepTheme": "Le module d'un complexe",
          "stepBadge": "Le module d'un complexe",
          "paragraphText": "• Le module de $z = a + ib$ est $|z| = \\sqrt{a^2 + b^2}$ ; on a $|z| = \\sqrt{z \\times \\bar{z}}$.\nExemples : $|3 - 4i| = \\sqrt{9 + 16} = \\sqrt{25} = 5$ ; $|i| = 1$.\nPropriétés : $|z \\times z'| = |z| \\times |z'|$ ; $|z^n| = |z|^n$ ; $|z + z'| \\leq |z| + |z'|$ (inégalité triangulaire).",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p02_q3",
            "type": "mcq",
            "prompt": "Que vaut $|3 - 4i|$ ?",
            "options": [
              "$5$",
              "$7$",
              "$1$",
              "$25$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|3 - 4i| = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le module d'un produit et d'une puissance",
          "stepTheme": "Le module d'un produit et d'une puissance",
          "stepBadge": "Le module d'un produit et d'une puissance",
          "paragraphText": "• $|(3 - i)(3i - 2)| = |3 - i| \\times |3i - 2| = \\sqrt{10} \\times \\sqrt{13} = \\sqrt{130}$.\n• $|(3 + i)^3| = |3 + i|^3 = (\\sqrt{10})^3 = 10\\sqrt{10}$.\n• $\\left|\\frac{3 - i}{4 - i\\sqrt{2}}\\right| = \\frac{\\sqrt{10}}{\\sqrt{18}} = \\frac{\\sqrt{5}}{3}$.\nLe module d'un produit est le produit des modules : on évite de développer.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p02_q4",
            "type": "mcq",
            "prompt": "Que vaut $|(3 + i)^3|$ ?",
            "options": [
              "$10\\sqrt{10}$",
              "$3\\sqrt{10}$",
              "$30$",
              "$\\sqrt{10}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|(3 + i)^3| = |3 + i|^3 = (\\sqrt{10})^3 = 10\\sqrt{10}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Tester si un complexe est réel ou imaginaire pur",
          "stepTheme": "Tester si un complexe est réel ou imaginaire pur",
          "stepBadge": "Tester si un complexe est réel ou imaginaire pur",
          "paragraphText": "• $z \\in \\mathbb{R} \\iff \\mathcal{Im}(z) = 0 \\iff z = \\bar{z}$ ; $z \\in i\\mathbb{R} \\iff \\mathcal{Re}(z) = 0 \\iff z = -\\bar{z}$.\nExemple : soit $z = \\frac{2 - 3i}{x + i}$ avec $x \\in \\mathbb{R}$. On a $z = \\frac{2x - 3}{x^2+1} - i\\frac{3x + 2}{x^2+1}$.\n$z$ est réel quand $3x + 2 = 0$, soit $x = -\\frac{2}{3}$ ; $z$ est imaginaire pur quand $2x - 3 = 0$, soit $x = \\frac{3}{2}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p02_q5",
            "type": "mcq",
            "prompt": "Soit $z = \\frac{2 - 3i}{x + i}$ avec $x \\in \\mathbb{R}$. Pour quelle valeur de $x$ le nombre $z$ est-il réel ?",
            "options": [
              "$x = -\\frac{2}{3}$",
              "$x = \\frac{3}{2}$",
              "$x = 0$",
              "$x = 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$z = \\frac{2x - 3}{x^2+1} - i\\frac{3x + 2}{x^2+1}$ : $z$ est réel quand $\\mathcal{Im}(z) = 0$, soit $3x + 2 = 0$, donc $x = -\\frac{2}{3}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le module n'est pas la partie réelle",
          "stepTheme": "Le module n'est pas la partie réelle",
          "stepBadge": "Le module n'est pas la partie réelle",
          "paragraphText": "• Le module $|z| = \\sqrt{a^2 + b^2}$ est un nombre réel positif ; ce n'est ni la partie réelle ni la valeur absolue de $z$.\nExemple : pour $z = 3 - 4i$, $\\mathcal{Re}(z) = 3$ mais $|z| = 5$.\nPiège : ne pas confondre $|z|$, $\\mathcal{Re}(z)$ et $\\mathcal{Im}(z)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p02_q6",
            "type": "mcq",
            "prompt": "Pour $z = 3 - 4i$, que valent $|z|$, $\\mathcal{Re}(z)$ et $\\mathcal{Im}(z)$ ?",
            "options": [
              "$|z| = 5$, $\\mathcal{Re}(z) = 3$, $\\mathcal{Im}(z) = -4$",
              "$|z| = 3$, $\\mathcal{Re}(z) = 5$, $\\mathcal{Im}(z) = -4$",
              "$|z| = 7$, $\\mathcal{Re}(z) = 3$, $\\mathcal{Im}(z) = 4$",
              "$|z| = 5$, $\\mathcal{Re}(z) = -4$, $\\mathcal{Im}(z) = 3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|z| = \\sqrt{9 + 16} = 5$, $\\mathcal{Re}(z) = 3$ et $\\mathcal{Im}(z) = -4$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p02_q1",
          "type": "mcq",
          "prompt": "Que vaut le conjugué de $z = 1 + 3i$ ?",
          "options": [
            "$1 + 3i$",
            "$1 - 3i$",
            "$-1 + 3i$",
            "$-1 - 3i$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le conjugué change le signe de la partie imaginaire : $\\overline{1 + 3i} = 1 - 3i$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p02_q2",
          "type": "mcq",
          "prompt": "Soit $z = 1 - 3i$. Que vaut $z \\times \\bar{z}$ ?",
          "options": [
            "$10$",
            "$-8$",
            "$2$",
            "$-6i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$z \\times \\bar{z} = (\\mathcal{Re}(z))^2 + (\\mathcal{Im}(z))^2 = 1 + 9 = 10$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p02_q3",
          "type": "mcq",
          "prompt": "Que vaut $|3 - 4i|$ ?",
          "options": [
            "$5$",
            "$7$",
            "$1$",
            "$25$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|3 - 4i| = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p02_q4",
          "type": "mcq",
          "prompt": "Que vaut $|(3 + i)^3|$ ?",
          "options": [
            "$10\\sqrt{10}$",
            "$3\\sqrt{10}$",
            "$30$",
            "$\\sqrt{10}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|(3 + i)^3| = |3 + i|^3 = (\\sqrt{10})^3 = 10\\sqrt{10}$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p02_q5",
          "type": "mcq",
          "prompt": "Soit $z = \\frac{2 - 3i}{x + i}$ avec $x \\in \\mathbb{R}$. Pour quelle valeur de $x$ le nombre $z$ est-il réel ?",
          "options": [
            "$x = -\\frac{2}{3}$",
            "$x = \\frac{3}{2}$",
            "$x = 0$",
            "$x = 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$z = \\frac{2x - 3}{x^2+1} - i\\frac{3x + 2}{x^2+1}$ : $z$ est réel quand $\\mathcal{Im}(z) = 0$, soit $3x + 2 = 0$, donc $x = -\\frac{2}{3}$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p02_q6",
          "type": "mcq",
          "prompt": "Pour $z = 3 - 4i$, que valent $|z|$, $\\mathcal{Re}(z)$ et $\\mathcal{Im}(z)$ ?",
          "options": [
            "$|z| = 5$, $\\mathcal{Re}(z) = 3$, $\\mathcal{Im}(z) = -4$",
            "$|z| = 3$, $\\mathcal{Re}(z) = 5$, $\\mathcal{Im}(z) = -4$",
            "$|z| = 7$, $\\mathcal{Re}(z) = 3$, $\\mathcal{Im}(z) = 4$",
            "$|z| = 5$, $\\mathcal{Re}(z) = -4$, $\\mathcal{Im}(z) = 3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|z| = \\sqrt{9 + 16} = 5$, $\\mathcal{Re}(z) = 3$ et $\\mathcal{Im}(z) = -4$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l06_complexes_p03",
      "order": 3,
      "title": "Représentation géométrique",
      "summary": "À chaque complexe correspond un point du plan ; le module est la distance à l'origine.",
      "conceptExplanation": "Le plan est muni d'un repère orthonormé direct $(O ; \\vec{u}, \\vec{v})$ ; on l'appelle plan complexe.\nÀ tout nombre complexe $z = x + iy$ on associe le point $M(x ; y)$ du plan ; réciproquement, à tout point $A(a ; b)$ on associe le nombre complexe $z_0 = a + ib$. On établit ainsi une bijection entre $\\mathbb{C}$ et le plan.\nLe nombre complexe $z = x + iy$ est appelé affixe du point $M$ (on note $z_M$) ; le point $M(x ; y)$ est le point image du nombre complexe $z$ (on note $M(z)$).\nOn associe également à chaque vecteur $\\vec{w}(a ; b)$ le nombre complexe $z = a + ib$ appelé affixe du vecteur $\\vec{w}$.\n$(O, \\vec{u})$ est appelé l'axe réel ; $(O, \\vec{v})$ est l'axe imaginaire.\nSoient $\\vec{w}$ et $\\vec{w'}$ deux vecteurs, $M$ et $M'$ deux points et $k \\in \\mathbb{R}$ : $z_{\\vec{w} + \\vec{w'}} = z_{\\vec{w}} + z_{\\vec{w'}}$ ; $z_{\\overrightarrow{MM'}} = z_{M'} - z_M$ ; $z_{k\\vec{w}} = k \\times z_{\\vec{w}}$.\nInterprétation géométrique du module : si $z$ est un nombre complexe d'image $M$, alors $|z| = OM$ ; de plus, $|z_{M'} - z_M| = MM'$.",
      "keyRule": "Affixe du point M(x;y) : z = x + iy. z_MM' = z_M' − z_M. |z| = OM ; |z_M' − z_M| = MM'.",
      "formulas": [
        {
          "name": "Affixe d'un vecteur",
          "formula": "z_{\\overrightarrow{MM'}} = z_{M'} - z_M",
          "note": "L'affixe d'un vecteur est la différence des affixes de ses extrémités."
        },
        {
          "name": "Module et distance",
          "formula": "|z| = OM,\\quad |z_{M'} - z_M| = MM'",
          "note": "Le module mesure une distance dans le plan complexe."
        }
      ],
      "workedExample": {
        "title": "L'affixe du vecteur $\\overrightarrow{AB}$",
        "statement": "Soient $A(2 + i)$ et $B(-4 + 7i)$ deux points du plan complexe. Calcule $z_{\\overrightarrow{AB}}$ et $z_{3\\overrightarrow{AB}}$.",
        "methodSteps": [
          "$z_{\\overrightarrow{AB}} = z_B - z_A = -4 + 7i - 2 - i = -6 + 6i$.",
          "$z_{3\\overrightarrow{AB}} = 3 \\times z_{\\overrightarrow{AB}} = 3(-6 + 6i) = -18 + 18i$."
        ],
        "conclusion": "$z_{\\overrightarrow{AB}} = -6 + 6i$ et $z_{3\\overrightarrow{AB}} = -18 + 18i$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'affixe d'un point",
          "stepTheme": "L'affixe d'un point",
          "stepBadge": "L'affixe d'un point",
          "paragraphText": "• Dans le plan complexe muni du repère orthonormé direct $(O ; \\vec{u}, \\vec{v})$, à tout nombre complexe $z = x + iy$ on associe le point $M(x ; y)$.\nLe nombre complexe $z$ est appelé affixe du point $M$ (on note $z_M$) ; le point $M$ est le point image de $z$.\nC'est une bijection entre $\\mathbb{C}$ et le plan : chaque complexe a un point image, chaque point a une affixe.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p03_q1",
            "type": "mcq",
            "prompt": "Quelle est l'affixe du point $M(3 ; -2)$ du plan complexe ?",
            "options": [
              "$3 - 2i$",
              "$3 + 2i$",
              "$-2 + 3i$",
              "$2 - 3i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'affixe du point $M(x ; y)$ est $z_M = x + iy$ : ici $z_M = 3 - 2i$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'affixe d'un vecteur",
          "stepTheme": "L'affixe d'un vecteur",
          "stepBadge": "L'affixe d'un vecteur",
          "paragraphText": "• L'affixe du vecteur $\\overrightarrow{MM'}$ est $z_{\\overrightarrow{MM'}} = z_{M'} - z_M$.\nExemple : pour $A(2 + i)$ et $B(-4 + 7i)$, $z_{\\overrightarrow{AB}} = z_B - z_A = -4 + 7i - 2 - i = -6 + 6i$.\nEt $z_{3\\overrightarrow{AB}} = 3 \\times z_{\\overrightarrow{AB}} = -18 + 18i$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p03_q2",
            "type": "mcq",
            "prompt": "Soient $A(2 + i)$ et $B(-4 + 7i)$. Que vaut $z_{\\overrightarrow{AB}}$ ?",
            "options": [
              "$-6 + 6i$",
              "$6 - 6i$",
              "$-2 + 8i$",
              "$-6 - 6i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$z_{\\overrightarrow{AB}} = z_B - z_A = (-4 + 7i) - (2 + i) = -6 + 6i$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le module est une distance",
          "stepTheme": "Le module est une distance",
          "stepBadge": "Le module est une distance",
          "paragraphText": "• Si $z$ est un nombre complexe d'image $M$, alors $|z| = OM$ : le module est la distance entre l'origine et le point image.\nDe plus, $|z_{M'} - z_M| = MM'$ : le module de la différence des affixes est la distance entre les deux points.\nExemple : $|(2 + i) + (8 - i)| = |10| = 10$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p03_q3",
            "type": "mcq",
            "prompt": "Soit $M$ le point image du complexe $z$. Que vaut $|z|$ géométriquement ?",
            "options": [
              "La distance $OM$",
              "L'abscisse de $M$",
              "L'ordonnée de $M$",
              "La distance entre $M$ et l'axe réel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|z| = OM$ : le module est la distance entre l'origine et le point image de $z$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La distance entre deux points",
          "stepTheme": "La distance entre deux points",
          "stepBadge": "La distance entre deux points",
          "paragraphText": "• Pour deux points $M$ et $M'$ d'affixes $z_M$ et $z_{M'}$, on a $MM' = |z_{M'} - z_M|$.\nExemple : pour $A$ d'affixe $2 + i$ et $B$ d'affixe $-4 + 7i$, $AB = |(-4 + 7i) - (2 + i)| = |-6 + 6i| = \\sqrt{72} = 6\\sqrt{2}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p03_q4",
            "type": "mcq",
            "prompt": "Soient $A$ d'affixe $2 + i$ et $B$ d'affixe $-4 + 7i$. Que vaut la distance $AB$ ?",
            "options": [
              "$6\\sqrt{2}$",
              "$6$",
              "$12$",
              "$\\sqrt{72}$ sans simplification"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$AB = |z_B - z_A| = |-6 + 6i| = \\sqrt{36 + 36} = \\sqrt{72} = 6\\sqrt{2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les axes réel et imaginaire",
          "stepTheme": "Les axes réel et imaginaire",
          "stepBadge": "Les axes réel et imaginaire",
          "paragraphText": "• $(O, \\vec{u})$ est appelé l'axe réel : les points de cet axe ont une affixe réelle.\n• $(O, \\vec{v})$ est appelé l'axe imaginaire : les points de cet axe ont une affixe imaginaire pure.\nLe conjugué $\\bar{z}$ est le symétrique de $z$ par rapport à l'axe réel.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p03_q5",
            "type": "mcq",
            "prompt": "Où se trouve le point image d'un nombre imaginaire pur ?",
            "options": [
              "Sur l'axe réel",
              "Sur l'axe imaginaire",
              "À l'origine",
              "Sur la droite $y = x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un imaginaire pur a une partie réelle nulle : son point image est sur l'axe imaginaire $(O, \\vec{v})$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'affixe d'un vecteur n'est pas un point",
          "stepTheme": "L'affixe d'un vecteur n'est pas un point",
          "stepBadge": "L'affixe d'un vecteur n'est pas un point",
          "paragraphText": "• L'affixe du vecteur $\\overrightarrow{MM'}$ est $z_{M'} - z_M$ : c'est une différence, pas l'affixe d'un point.\nPiège : ne pas confondre $z_{\\overrightarrow{AB}} = z_B - z_A$ avec $z_B$ (l'affixe du point $B$).\nExemple : pour $A(2 + i)$ et $B(-4 + 7i)$, $z_{\\overrightarrow{AB}} = -6 + 6i$ alors que $z_B = -4 + 7i$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p03_q6",
            "type": "mcq",
            "prompt": "Soient $A$ d'affixe $2 + i$ et $B$ d'affixe $-4 + 7i$. Que vaut $z_{3\\overrightarrow{AB}}$ ?",
            "options": [
              "$-18 + 18i$",
              "$-12 + 21i$",
              "$-6 + 6i$",
              "$6 - 6i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$z_{\\overrightarrow{AB}} = -6 + 6i$ donc $z_{3\\overrightarrow{AB}} = 3 \\times (-6 + 6i) = -18 + 18i$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p03_q1",
          "type": "mcq",
          "prompt": "Quelle est l'affixe du point $M(3 ; -2)$ du plan complexe ?",
          "options": [
            "$3 - 2i$",
            "$3 + 2i$",
            "$-2 + 3i$",
            "$2 - 3i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'affixe du point $M(x ; y)$ est $z_M = x + iy$ : ici $z_M = 3 - 2i$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p03_q2",
          "type": "mcq",
          "prompt": "Soient $A(2 + i)$ et $B(-4 + 7i)$. Que vaut $z_{\\overrightarrow{AB}}$ ?",
          "options": [
            "$-6 + 6i$",
            "$6 - 6i$",
            "$-2 + 8i$",
            "$-6 - 6i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$z_{\\overrightarrow{AB}} = z_B - z_A = (-4 + 7i) - (2 + i) = -6 + 6i$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p03_q3",
          "type": "mcq",
          "prompt": "Soit $M$ le point image du complexe $z$. Que vaut $|z|$ géométriquement ?",
          "options": [
            "La distance $OM$",
            "L'abscisse de $M$",
            "L'ordonnée de $M$",
            "La distance entre $M$ et l'axe réel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|z| = OM$ : le module est la distance entre l'origine et le point image de $z$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p03_q4",
          "type": "mcq",
          "prompt": "Soient $A$ d'affixe $2 + i$ et $B$ d'affixe $-4 + 7i$. Que vaut la distance $AB$ ?",
          "options": [
            "$6\\sqrt{2}$",
            "$6$",
            "$12$",
            "$\\sqrt{72}$ sans simplification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$AB = |z_B - z_A| = |-6 + 6i| = \\sqrt{36 + 36} = \\sqrt{72} = 6\\sqrt{2}$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p03_q5",
          "type": "mcq",
          "prompt": "Où se trouve le point image d'un nombre imaginaire pur ?",
          "options": [
            "Sur l'axe réel",
            "Sur l'axe imaginaire",
            "À l'origine",
            "Sur la droite $y = x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un imaginaire pur a une partie réelle nulle : son point image est sur l'axe imaginaire $(O, \\vec{v})$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p03_q6",
          "type": "mcq",
          "prompt": "Soient $A$ d'affixe $2 + i$ et $B$ d'affixe $-4 + 7i$. Que vaut $z_{3\\overrightarrow{AB}}$ ?",
          "options": [
            "$-18 + 18i$",
            "$-12 + 21i$",
            "$-6 + 6i$",
            "$6 - 6i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$z_{\\overrightarrow{AB}} = -6 + 6i$ donc $z_{3\\overrightarrow{AB}} = 3 \\times (-6 + 6i) = -18 + 18i$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l06_complexes_p04",
      "order": 4,
      "title": "Argument et formes trigonométrique et exponentielle",
      "summary": "z = r(cos θ + i sin θ) = r·e^{iθ} ; l'argument du produit est la somme des arguments.",
      "conceptExplanation": "Soit $z \\in \\mathbb{C}^*$ d'image $M$ dans le plan complexe. Un argument de $z$ est une mesure en radian de l'angle orienté $(\\vec{u} ; \\overrightarrow{OM})$. Si $\\varphi$ est une mesure de cet angle, alors $\\arg(z) = \\varphi + 2k\\pi$, $k \\in \\mathbb{Z}$.\nSi $z = a + ib$ et $\\varphi = \\arg(z)$, alors $\\cos(\\varphi) = \\frac{a}{|z|}$ et $\\sin(\\varphi) = \\frac{b}{|z|}$ ; si $a \\neq 0$, $\\tan(\\varphi) = \\frac{b}{a}$.\nTout nombre complexe non nul admet un unique argument appartenant à $]-\\pi ; \\pi]$ appelé argument principal, noté $\\mathrm{Arg}(z)$.\nForme trigonométrique : soit $z = a + ib$ non nul, $r = |z|$ et $\\theta$ un argument de $z$. Alors $z = r(\\cos(\\theta) + i\\sin(\\theta))$.\nForme exponentielle : on pose $e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$. La forme exponentielle de $z$ est $z = re^{i\\theta}$.\nPropriétés : $\\arg(\\bar{z}) = -\\arg(z)$ ; $\\arg(z \\times z') = \\arg(z) + \\arg(z')$ ; $\\arg(z^n) = n\\arg(z)$ ; $\\arg\\left(\\frac{z'}{z}\\right) = \\arg(z') - \\arg(z)$ (à $2k\\pi$ près).\nFormule de Moivre : pour $\\theta \\in \\mathbb{R}$ et $n \\in \\mathbb{Z}$, $(\\cos(\\theta) + i\\sin(\\theta))^n = \\cos(n\\theta) + i\\sin(n\\theta)$.\nFormules d'Euler : $\\cos(\\theta) = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$ et $\\sin(\\theta) = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$. Elles permettent de linéariser $\\cos^n(x)$ ou $\\sin^n(x)$ : par exemple $\\cos^4(\\alpha) = \\frac{1}{8}\\cos(4\\alpha) + \\frac{1}{2}\\cos(2\\alpha) + \\frac{3}{8}$.",
      "keyRule": "z = r(cos θ + i sin θ) = r·e^{iθ}. arg(z×z') = arg z + arg z'. (cos θ + i sin θ)^n = cos nθ + i sin nθ.",
      "formulas": [
        {
          "name": "Forme trigonométrique",
          "formula": "z = r(\\cos\\theta + i\\sin\\theta),\\quad \\cos\\theta = \\frac{a}{r},\\ \\sin\\theta = \\frac{b}{r}",
          "note": "r = |z|, θ = arg(z)."
        },
        {
          "name": "Formule de Moivre",
          "formula": "(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)",
          "note": "Pour tout θ réel et tout n entier relatif."
        },
        {
          "name": "Formules d'Euler",
          "formula": "\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2},\\quad \\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}",
          "note": "Elles servent à linéariser cos^n et sin^n."
        }
      ],
      "workedExample": {
        "title": "La forme trigonométrique de $-\\sqrt{3} + i$",
        "statement": "Détermine la forme trigonométrique du nombre complexe $z = -\\sqrt{3} + i$.",
        "methodSteps": [
          "On calcule le module : $|z| = \\sqrt{(-\\sqrt{3})^2 + 1^2} = \\sqrt{4} = 2$.",
          "On cherche un argument $\\varphi$ : $\\cos(\\varphi) = \\frac{-\\sqrt{3}}{2}$ et $\\sin(\\varphi) = \\frac{1}{2}$.",
          "On en déduit qu'un argument de $z$ est $\\frac{5\\pi}{6}$ et la forme trigonométrique est $z = 2\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$."
        ],
        "conclusion": "$z = 2\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'argument d'un complexe",
          "stepTheme": "L'argument d'un complexe",
          "stepBadge": "L'argument d'un complexe",
          "paragraphText": "• Un argument de $z \\in \\mathbb{C}^*$ est une mesure en radian de l'angle orienté $(\\vec{u} ; \\overrightarrow{OM})$, où $M$ est l'image de $z$.\nSi $\\varphi$ est un argument de $z$, tous les arguments sont de la forme $\\varphi + 2k\\pi$, $k \\in \\mathbb{Z}$.\nSi $z = a + ib$, alors $\\cos(\\varphi) = \\frac{a}{|z|}$ et $\\sin(\\varphi) = \\frac{b}{|z|}$ ; si $a \\neq 0$, $\\tan(\\varphi) = \\frac{b}{a}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p04_q1",
            "type": "mcq",
            "prompt": "Soit $z = \\sqrt{3} + i$. Que vaut un argument de $z$ ?",
            "options": [
              "$\\frac{\\pi}{6}$",
              "$\\frac{\\pi}{3}$",
              "$\\frac{\\pi}{4}$",
              "$-\\frac{\\pi}{6}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|z| = 2$, $\\cos\\varphi = \\frac{\\sqrt{3}}{2}$ et $\\sin\\varphi = \\frac{1}{2}$ : un argument est $\\frac{\\pi}{6}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un argument de $1 - i\\sqrt{3}$",
          "stepTheme": "Un argument de $1 - i\\sqrt{3}$",
          "stepBadge": "Un argument de $1 - i\\sqrt{3}$",
          "paragraphText": "• Pour $z = 1 - i\\sqrt{3}$ : $|z| = \\sqrt{1 + 3} = 2$.\n$\\cos(\\varphi) = \\frac{1}{2}$ et $\\sin(\\varphi) = \\frac{-\\sqrt{3}}{2}$ : un argument de $z$ est $-\\frac{\\pi}{3}$.\nTous les arguments de $z$ sont de la forme $-\\frac{\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p04_q2",
            "type": "mcq",
            "prompt": "Que vaut un argument de $z = 1 - i\\sqrt{3}$ ?",
            "options": [
              "$\\frac{\\pi}{3}$",
              "$-\\frac{\\pi}{3}$",
              "$\\frac{2\\pi}{3}$",
              "$-\\frac{2\\pi}{3}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$|z| = 2$, $\\cos\\varphi = \\frac{1}{2}$ et $\\sin\\varphi = -\\frac{\\sqrt{3}}{2}$ : un argument est $-\\frac{\\pi}{3}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La forme trigonométrique",
          "stepTheme": "La forme trigonométrique",
          "stepBadge": "La forme trigonométrique",
          "paragraphText": "• Soit $z = a + ib$ non nul, $r = |z|$ et $\\theta$ un argument de $z$ : $z = r(\\cos(\\theta) + i\\sin(\\theta))$.\nExemples : $2 + 2i = 2\\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$ ; $4i = 4\\left(\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}\\right)$ ; $5 = 5(\\cos 0 + i\\sin 0)$.\nPour passer de la forme algébrique à la forme trigonométrique : on calcule d'abord le module, puis un argument.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p04_q3",
            "type": "mcq",
            "prompt": "Quelle est la forme trigonométrique de $z = -\\sqrt{3} + i$ ?",
            "options": [
              "$2\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$",
              "$2\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)$",
              "$\\sqrt{2}\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$",
              "$2\\left(\\cos\\frac{7\\pi}{6} + i\\sin\\frac{7\\pi}{6}\\right)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|z| = 2$, $\\cos\\varphi = -\\frac{\\sqrt{3}}{2}$ et $\\sin\\varphi = \\frac{1}{2}$ : un argument est $\\frac{5\\pi}{6}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La forme exponentielle",
          "stepTheme": "La forme exponentielle",
          "stepBadge": "La forme exponentielle",
          "paragraphText": "• On pose $e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$. La forme exponentielle de $z$ (de module $r$ et d'argument $\\theta$) est $z = re^{i\\theta}$.\nExemples : $2 + 2i = 2\\sqrt{2}e^{i\\frac{\\pi}{4}}$ ; $4i = 4e^{i\\frac{\\pi}{2}}$ ; $1 + i\\sqrt{3} = 2e^{i\\frac{\\pi}{3}}$.\nLa forme exponentielle est bien indiquée pour déterminer les produits, les quotients ou les puissances.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p04_q4",
            "type": "mcq",
            "prompt": "Quelle est la forme exponentielle de $z = 1 + i\\sqrt{3}$ ?",
            "options": [
              "$2e^{i\\frac{\\pi}{3}}$",
              "$2e^{i\\frac{\\pi}{6}}$",
              "$\\sqrt{2}e^{i\\frac{\\pi}{3}}$",
              "$2e^{-i\\frac{\\pi}{3}}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|z| = 2$ et un argument est $\\frac{\\pi}{3}$ : $z = 2e^{i\\frac{\\pi}{3}}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'argument d'un produit et d'un quotient",
          "stepTheme": "L'argument d'un produit et d'un quotient",
          "stepBadge": "L'argument d'un produit et d'un quotient",
          "paragraphText": "• $\\arg(z \\times z') = \\arg(z) + \\arg(z')$ ; $\\arg\\left(\\frac{z'}{z}\\right) = \\arg(z') - \\arg(z)$ ; $\\arg(z^n) = n\\arg(z)$ (à $2k\\pi$ près).\nExemple : $z = (-\\sqrt{3} + i)(1 - i)$ a pour argument $\\frac{5\\pi}{6} + \\left(-\\frac{\\pi}{4}\\right) = \\frac{7\\pi}{12}$.\nExemple : $\\frac{1 + i}{1 + i\\sqrt{3}} = \\frac{\\sqrt{2}}{2}e^{i\\left(\\frac{\\pi}{4} - \\frac{\\pi}{3}\\right)} = \\frac{\\sqrt{2}}{2}e^{-i\\frac{\\pi}{12}}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p04_q5",
            "type": "mcq",
            "prompt": "Que vaut un argument de $z = (-\\sqrt{3} + i)(1 - i)$ ?",
            "options": [
              "$\\frac{7\\pi}{12}$",
              "$\\frac{5\\pi}{12}$",
              "$\\frac{11\\pi}{12}$",
              "$\\frac{\\pi}{12}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\arg(-\\sqrt{3} + i) = \\frac{5\\pi}{6}$ et $\\arg(1 - i) = -\\frac{\\pi}{4}$ : la somme est $\\frac{7\\pi}{12}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La formule de Moivre",
          "stepTheme": "La formule de Moivre",
          "stepBadge": "La formule de Moivre",
          "paragraphText": "• Formule de Moivre : pour $\\theta \\in \\mathbb{R}$ et $n \\in \\mathbb{Z}$, $(\\cos(\\theta) + i\\sin(\\theta))^n = \\cos(n\\theta) + i\\sin(n\\theta)$.\nExemple : soit $z = \\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)^{300} = \\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)^{300} = \\cos(100\\pi) + i\\sin(100\\pi) = 1$.\nLes formules d'Euler permettent aussi de linéariser : $\\cos^4(\\alpha) = \\frac{1}{8}\\cos(4\\alpha) + \\frac{1}{2}\\cos(2\\alpha) + \\frac{3}{8}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p04_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)^{300}$ ?",
            "options": [
              "$1$",
              "$-1$",
              "$i$",
              "$\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par la formule de Moivre : $\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)^{300} = \\cos(100\\pi) + i\\sin(100\\pi) = 1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p04_q1",
          "type": "mcq",
          "prompt": "Soit $z = \\sqrt{3} + i$. Que vaut un argument de $z$ ?",
          "options": [
            "$\\frac{\\pi}{6}$",
            "$\\frac{\\pi}{3}$",
            "$\\frac{\\pi}{4}$",
            "$-\\frac{\\pi}{6}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|z| = 2$, $\\cos\\varphi = \\frac{\\sqrt{3}}{2}$ et $\\sin\\varphi = \\frac{1}{2}$ : un argument est $\\frac{\\pi}{6}$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p04_q2",
          "type": "mcq",
          "prompt": "Que vaut un argument de $z = 1 - i\\sqrt{3}$ ?",
          "options": [
            "$\\frac{\\pi}{3}$",
            "$-\\frac{\\pi}{3}$",
            "$\\frac{2\\pi}{3}$",
            "$-\\frac{2\\pi}{3}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$|z| = 2$, $\\cos\\varphi = \\frac{1}{2}$ et $\\sin\\varphi = -\\frac{\\sqrt{3}}{2}$ : un argument est $-\\frac{\\pi}{3}$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p04_q3",
          "type": "mcq",
          "prompt": "Quelle est la forme trigonométrique de $z = -\\sqrt{3} + i$ ?",
          "options": [
            "$2\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$",
            "$2\\left(\\cos\\frac{\\pi}{6} + i\\sin\\frac{\\pi}{6}\\right)$",
            "$\\sqrt{2}\\left(\\cos\\frac{5\\pi}{6} + i\\sin\\frac{5\\pi}{6}\\right)$",
            "$2\\left(\\cos\\frac{7\\pi}{6} + i\\sin\\frac{7\\pi}{6}\\right)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|z| = 2$, $\\cos\\varphi = -\\frac{\\sqrt{3}}{2}$ et $\\sin\\varphi = \\frac{1}{2}$ : un argument est $\\frac{5\\pi}{6}$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p04_q4",
          "type": "mcq",
          "prompt": "Quelle est la forme exponentielle de $z = 1 + i\\sqrt{3}$ ?",
          "options": [
            "$2e^{i\\frac{\\pi}{3}}$",
            "$2e^{i\\frac{\\pi}{6}}$",
            "$\\sqrt{2}e^{i\\frac{\\pi}{3}}$",
            "$2e^{-i\\frac{\\pi}{3}}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|z| = 2$ et un argument est $\\frac{\\pi}{3}$ : $z = 2e^{i\\frac{\\pi}{3}}$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p04_q5",
          "type": "mcq",
          "prompt": "Que vaut un argument de $z = (-\\sqrt{3} + i)(1 - i)$ ?",
          "options": [
            "$\\frac{7\\pi}{12}$",
            "$\\frac{5\\pi}{12}$",
            "$\\frac{11\\pi}{12}$",
            "$\\frac{\\pi}{12}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\arg(-\\sqrt{3} + i) = \\frac{5\\pi}{6}$ et $\\arg(1 - i) = -\\frac{\\pi}{4}$ : la somme est $\\frac{7\\pi}{12}$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p04_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)^{300}$ ?",
          "options": [
            "$1$",
            "$-1$",
            "$i$",
            "$\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par la formule de Moivre : $\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)^{300} = \\cos(100\\pi) + i\\sin(100\\pi) = 1$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l06_complexes_p05",
      "order": 5,
      "title": "Équations dans C : racines carrées et second degré",
      "summary": "Tout complexe non nul a deux racines carrées opposées ; le second degré se résout avec le discriminant, même négatif.",
      "conceptExplanation": "Racines carrées : soit $z_0$ un nombre complexe ; on appelle racine carrée de $z_0$ tout nombre complexe $z$ tel que $z^2 = z_0$. Méthode : soit $z = x + iy$ ; $z^2 = z_0$ équivaut au système $x^2 + y^2 = |z_0|$, $x^2 - y^2 = \\mathcal{Re}(z_0)$, $2xy = \\mathcal{Im}(z_0)$.\nTout nombre complexe non nul admet deux racines carrées opposées. Si $z_0 \\in \\mathbb{R}$ avec $z_0 > 0$, ses racines carrées sont $-\\sqrt{z_0}$ et $\\sqrt{z_0}$ ; si $z_0 < 0$, elles sont $-i\\sqrt{-z_0}$ et $i\\sqrt{-z_0}$.\nÉquations du second degré : soient $a, b, c$ des nombres complexes avec $a \\neq 0$ et $\\Delta = b^2 - 4ac$. Si $\\delta$ est une racine carrée de $\\Delta$, alors les solutions de $az^2 + bz + c = 0$ sont $z_1 = \\frac{-b - \\delta}{2a}$ et $z_2 = \\frac{-b + \\delta}{2a}$.\nRemarque : si $a, b, c$ sont réels avec $a \\neq 0$ et $\\Delta < 0$, alors l'équation a deux solutions complexes conjuguées. Pour résoudre une équation du second degré dans $\\mathbb{C}$, on n'a pas besoin de déterminer les deux racines carrées de $\\Delta$.",
      "keyRule": "Racines carrées : système x²+y²=|z0|, x²−y²=Re(z0), 2xy=Im(z0). Second degré : z = (−b ± δ)/2a avec δ² = Δ.",
      "formulas": [
        {
          "name": "Solutions du second degré dans C",
          "formula": "z_1 = \\frac{-b - \\delta}{2a},\\quad z_2 = \\frac{-b + \\delta}{2a} \\quad \\text{avec } \\delta^2 = \\Delta = b^2 - 4ac",
          "note": "Valable pour a, b, c complexes, a ≠ 0."
        }
      ],
      "workedExample": {
        "title": "Les racines carrées de $8 - 6i$",
        "statement": "Détermine les racines carrées du nombre complexe $Z_0 = 8 - 6i$.",
        "methodSteps": [
          "$|Z_0| = \\sqrt{64 + 36} = 10$. Soit $z = x + iy$ une racine carrée : $x^2 + y^2 = 10$, $x^2 - y^2 = 8$, $2xy = -6$.",
          "En additionnant les deux premières équations : $2x^2 = 18$, donc $x^2 = 9$ et $x = 3$ ou $x = -3$.",
          "Pour $x = 3$, la troisième équation donne $y = -1$ ; pour $x = -3$, elle donne $y = 1$.",
          "Les racines carrées de $8 - 6i$ sont donc $3 - i$ et $-3 + i$."
        ],
        "conclusion": "Les racines carrées de $8 - 6i$ sont $3 - i$ et $-3 + i$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La méthode des racines carrées",
          "stepTheme": "La méthode des racines carrées",
          "stepBadge": "La méthode des racines carrées",
          "paragraphText": "• Pour trouver les racines carrées de $z_0$, on pose $z = x + iy$ et on résout le système : $x^2 + y^2 = |z_0|$, $x^2 - y^2 = \\mathcal{Re}(z_0)$, $2xy = \\mathcal{Im}(z_0)$.\nEn additionnant les deux premières équations, on trouve $x^2$ ; la troisième donne alors $y$.\nTout nombre complexe non nul admet deux racines carrées opposées.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p05_q1",
            "type": "mcq",
            "prompt": "Quelles sont les racines carrées de $8 - 6i$ ?",
            "options": [
              "$3 - i$ et $-3 + i$",
              "$3 + i$ et $-3 - i$",
              "$2 - 3i$ et $-2 + 3i$",
              "$4 - 3i$ et $-4 + 3i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $x^2 + y^2 = 10$, $x^2 - y^2 = 8$ et $2xy = -6$, on trouve $x = \\pm 3$ et $y = \\mp 1$ : les racines sont $3 - i$ et $-3 + i$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les racines carrées d'un réel négatif",
          "stepTheme": "Les racines carrées d'un réel négatif",
          "stepBadge": "Les racines carrées d'un réel négatif",
          "paragraphText": "• Si $z_0 \\in \\mathbb{R}$ avec $z_0 < 0$, ses racines carrées sont $-i\\sqrt{-z_0}$ et $i\\sqrt{-z_0}$.\nExemple : les racines carrées de $-5$ sont $-i\\sqrt{5}$ et $i\\sqrt{5}$ car $(i\\sqrt{5})^2 = -5$.\nC'est pour cela que l'équation $x^2 + 1 = 0$ admet des solutions dans $\\mathbb{C}$ : $i$ et $-i$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p05_q2",
            "type": "mcq",
            "prompt": "Quelles sont les racines carrées de $-5$ dans $\\mathbb{C}$ ?",
            "options": [
              "$i\\sqrt{5}$ et $-i\\sqrt{5}$",
              "$\\sqrt{5}$ et $-\\sqrt{5}$",
              "$5i$ et $-5i$",
              "Il n'y en a pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour $z_0 = -5 < 0$, les racines carrées sont $\\pm i\\sqrt{5}$ car $(i\\sqrt{5})^2 = -5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $z^2 + 5z - 14 = 0$",
          "stepTheme": "Résoudre $z^2 + 5z - 14 = 0$",
          "stepBadge": "Résoudre $z^2 + 5z - 14 = 0$",
          "paragraphText": "• Pour $(E_1) : z^2 + 5z - 14 = 0$, on a $\\Delta = 25 + 56 = 81$.\nLes solutions sont $z_1 = \\frac{-5 - 9}{2} = -7$ et $z_2 = \\frac{-5 + 9}{2} = 2$.\nDonc $S = \\{-7 ; 2\\}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p05_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{C}$ de $z^2 + 5z - 14 = 0$ ?",
            "options": [
              "$\\{-7 ; 2\\}$",
              "$\\{7 ; -2\\}$",
              "$\\{-7 ; -2\\}$",
              "$\\{7 ; 2\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\Delta = 81$ : les solutions sont $\\frac{-5 - 9}{2} = -7$ et $\\frac{-5 + 9}{2} = 2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $z^2 + 2iz + 3 = 0$",
          "stepTheme": "Résoudre $z^2 + 2iz + 3 = 0$",
          "stepBadge": "Résoudre $z^2 + 2iz + 3 = 0$",
          "paragraphText": "• Pour $(E_3) : z^2 + 2iz + 3 = 0$, on a $\\Delta = (2i)^2 - 12 = -16 = (4i)^2$ : une racine carrée de $\\Delta$ est $4i$.\nLes solutions sont $z_1 = \\frac{-2i - 4i}{2} = -3i$ et $z_2 = \\frac{-2i + 4i}{2} = i$.\nDonc $S = \\{-3i ; i\\}$. De même, $z^2 - 2iz - 1 = 0$ a pour discriminant $0$ et pour unique solution $i$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p05_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{C}$ de $z^2 + 2iz + 3 = 0$ ?",
            "options": [
              "$\\{-3i ; i\\}$",
              "$\\{3i ; -i\\}$",
              "$\\{-3 ; 1\\}$",
              "$\\{i\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\Delta = -16 = (4i)^2$ : les solutions sont $\\frac{-2i - 4i}{2} = -3i$ et $\\frac{-2i + 4i}{2} = i$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $z^2 - (1 + i)z + 2 - i = 0$",
          "stepTheme": "Résoudre $z^2 - (1 + i)z + 2 - i = 0$",
          "stepBadge": "Résoudre $z^2 - (1 + i)z + 2 - i = 0$",
          "paragraphText": "• Pour $(E_4) : z^2 - (1 + i)z + 2 - i = 0$, on a $\\Delta = (1 + i)^2 - 4(2 - i) = -8 + 6i$.\nUne racine carrée de $\\Delta$ est $\\delta = 1 + 3i$ (on vérifie : $(1 + 3i)^2 = 1 + 6i - 9 = -8 + 6i$).\nLes solutions sont $z_1 = \\frac{1 + i - (1 + 3i)}{2} = -i$ et $z_2 = \\frac{1 + i + (1 + 3i)}{2} = 1 + 2i$.\nDonc $S = \\{-i ; 1 + 2i\\}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p05_q5",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{C}$ de $z^2 - (1 + i)z + 2 - i = 0$ ?",
            "options": [
              "$\\{-i ; 1 + 2i\\}$",
              "$\\{i ; 1 - 2i\\}$",
              "$\\{-1 ; 2i\\}$",
              "$\\{1 + i ; 2 - i\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\Delta = -8 + 6i$ a pour racine carrée $1 + 3i$ : les solutions sont $\\frac{1 + i \\pm (1 + 3i)}{2}$, soit $-i$ et $1 + 2i$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Discriminant négatif : solutions conjuguées",
          "stepTheme": "Discriminant négatif : solutions conjuguées",
          "stepBadge": "Discriminant négatif : solutions conjuguées",
          "paragraphText": "• Si $a, b, c$ sont réels avec $a \\neq 0$ et $\\Delta = b^2 - 4ac < 0$, alors l'équation $az^2 + bz + c = 0$ a deux solutions complexes conjuguées.\nC'est le cas de $z^2 + 2iz + 3 = 0$ ? Non : ses coefficients ne sont pas réels. Mais pour une équation à coefficients réels comme $z^2 + z + 1 = 0$ ($\\Delta = -3$), les solutions sont $\\frac{-1 - i\\sqrt{3}}{2}$ et $\\frac{-1 + i\\sqrt{3}}{2}$, bien conjuguées.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p05_q6",
            "type": "mcq",
            "prompt": "Soit $az^2 + bz + c = 0$ avec $a, b, c$ réels, $a \\neq 0$ et $\\Delta < 0$. Que peut-on dire de ses solutions dans $\\mathbb{C}$ ?",
            "options": [
              "Elles sont réelles",
              "Elles sont complexes conjuguées",
              "Il n'y a pas de solution",
              "Elles sont imaginaires pures"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour des coefficients réels et un discriminant strictement négatif, les deux solutions complexes sont conjuguées."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p05_q1",
          "type": "mcq",
          "prompt": "Quelles sont les racines carrées de $8 - 6i$ ?",
          "options": [
            "$3 - i$ et $-3 + i$",
            "$3 + i$ et $-3 - i$",
            "$2 - 3i$ et $-2 + 3i$",
            "$4 - 3i$ et $-4 + 3i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $x^2 + y^2 = 10$, $x^2 - y^2 = 8$ et $2xy = -6$, on trouve $x = \\pm 3$ et $y = \\mp 1$ : les racines sont $3 - i$ et $-3 + i$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p05_q2",
          "type": "mcq",
          "prompt": "Quelles sont les racines carrées de $-5$ dans $\\mathbb{C}$ ?",
          "options": [
            "$i\\sqrt{5}$ et $-i\\sqrt{5}$",
            "$\\sqrt{5}$ et $-\\sqrt{5}$",
            "$5i$ et $-5i$",
            "Il n'y en a pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour $z_0 = -5 < 0$, les racines carrées sont $\\pm i\\sqrt{5}$ car $(i\\sqrt{5})^2 = -5$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p05_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{C}$ de $z^2 + 5z - 14 = 0$ ?",
          "options": [
            "$\\{-7 ; 2\\}$",
            "$\\{7 ; -2\\}$",
            "$\\{-7 ; -2\\}$",
            "$\\{7 ; 2\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\Delta = 81$ : les solutions sont $\\frac{-5 - 9}{2} = -7$ et $\\frac{-5 + 9}{2} = 2$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p05_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{C}$ de $z^2 + 2iz + 3 = 0$ ?",
          "options": [
            "$\\{-3i ; i\\}$",
            "$\\{3i ; -i\\}$",
            "$\\{-3 ; 1\\}$",
            "$\\{i\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\Delta = -16 = (4i)^2$ : les solutions sont $\\frac{-2i - 4i}{2} = -3i$ et $\\frac{-2i + 4i}{2} = i$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p05_q5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb{C}$ de $z^2 - (1 + i)z + 2 - i = 0$ ?",
          "options": [
            "$\\{-i ; 1 + 2i\\}$",
            "$\\{i ; 1 - 2i\\}$",
            "$\\{-1 ; 2i\\}$",
            "$\\{1 + i ; 2 - i\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\Delta = -8 + 6i$ a pour racine carrée $1 + 3i$ : les solutions sont $\\frac{1 + i \\pm (1 + 3i)}{2}$, soit $-i$ et $1 + 2i$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p05_q6",
          "type": "mcq",
          "prompt": "Soit $az^2 + bz + c = 0$ avec $a, b, c$ réels, $a \\neq 0$ et $\\Delta < 0$. Que peut-on dire de ses solutions dans $\\mathbb{C}$ ?",
          "options": [
            "Elles sont réelles",
            "Elles sont complexes conjuguées",
            "Il n'y a pas de solution",
            "Elles sont imaginaires pures"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour des coefficients réels et un discriminant strictement négatif, les deux solutions complexes sont conjuguées."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l06_complexes_p06",
      "order": 6,
      "title": "Racines n-ièmes et applications géométriques",
      "summary": "Les racines n-ièmes sont les sommets d'un polygone régulier ; les complexes démontrent des propriétés géométriques.",
      "conceptExplanation": "Racine n-ième : soit $Z_0 \\neq 0$ et $n \\in \\mathbb{N}$ avec $n \\geq 2$. On appelle racine n-ième de $Z_0$ tout nombre complexe $z$ tel que $z^n = Z_0$.\nSi $Z_0 = Re^{i\\theta}$, les racines n-ièmes de $Z_0$ sont $z_k = \\sqrt[n]{R} \\times e^{i\\frac{\\theta + 2k\\pi}{n}}$ avec $k \\in \\{0 ; 1 ; \\ldots ; n-1\\}$.\nLes racines n-ièmes d'un nombre complexe sont les affixes des sommets d'un polygone régulier de $n$ côtés inscrit dans un cercle de rayon $\\sqrt[n]{R}$.\nRacines n-ièmes de l'unité : ce sont les solutions de $z^n = 1$ : $z_k = e^{i\\frac{2k\\pi}{n}} = \\cos\\left(\\frac{2k\\pi}{n}\\right) + i\\sin\\left(\\frac{2k\\pi}{n}\\right)$ avec $k \\in \\{0 ; 1 ; \\ldots ; n-1\\}$.\nPour $n = 3$ : $z_0 = 1$, $z_1 = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ et $z_2 = -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$. On pose $j = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ : on a $j^2 = \\bar{j}$ et $j^2 + j + 1 = 0$.\nApplication géométrique : soient $A$, $B$, $C$ d'affixes respectives $-1 - i$, $2 - 2i$ et $2i$. On a $\\frac{z_B - z_A}{z_C - z_A} = \\frac{3 - i}{1 + 3i} = -i$ : le triangle $ABC$ est rectangle et isocèle en $A$. Le point $D$ tel que $ABCD$ soit un parallélogramme a pour affixe $z_D = -3 + 3i$. Les points $A$, $B$, $C$ et $E$ (d'affixe $2 + 2i$) sont sur le cercle de diamètre $[BC]$, de centre le point $I$ d'affixe $1$ et de rayon $\\sqrt{5}$.\nSituation complexe : si $A = x^2 + y^2$ avec $x, y$ entiers, on pose $z = x + iy$ : $A = |z|^2$. Par récurrence, $z^n = x_n + iy_n$ avec $x_n, y_n$ entiers, donc $A^n = |z^n|^2 = x_n^2 + y_n^2$ : si $A$ est la somme de deux carrés, alors $A^n$ l'est aussi pour tout $n \\geq 1$.",
      "keyRule": "Racines n-ièmes de Re^{iθ} : module ⁿ√R, arguments (θ+2kπ)/n. Le quotient (z_B−z_A)/(z_C−z_A) donne la nature du triangle.",
      "formulas": [
        {
          "name": "Racines n-ièmes",
          "formula": "z_k = \\sqrt[n]{R} \\times e^{i\\frac{\\theta + 2k\\pi}{n}},\\quad k \\in \\{0 {;} 1 {;} \\ldots {;} n-1\\}",
          "note": "Pour Z0 = Re^{iθ} non nul."
        },
        {
          "name": "Racines n-ièmes de l'unité",
          "formula": "z_k = e^{i\\frac{2k\\pi}{n}},\\quad k \\in \\{0 {;} 1 {;} \\ldots {;} n-1\\}",
          "note": "Ce sont les solutions de z^n = 1."
        }
      ],
      "workedExample": {
        "title": "Les racines quatrièmes de $8(1 + i\\sqrt{3})$",
        "statement": "Détermine les racines quatrièmes de $Z = 8(1 + i\\sqrt{3})$.",
        "methodSteps": [
          "On écrit $Z$ sous forme trigonométrique : $Z = 16\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)$.",
          "Soit $z = \\rho(\\cos x + i\\sin x)$ : $z^4 = Z$ donne $\\rho^4 = 16$ (donc $\\rho = 2$) et $4x = \\frac{\\pi}{3} + 2k\\pi$.",
          "Donc $x = \\frac{\\pi}{12} + \\frac{k\\pi}{2}$ avec $k \\in \\{0 ; 1 ; 2 ; 3\\}$.",
          "Les racines sont $z_k = 2\\left(\\cos\\left(\\frac{\\pi}{12} + \\frac{k\\pi}{2}\\right) + i\\sin\\left(\\frac{\\pi}{12} + \\frac{k\\pi}{2}\\right)\\right)$."
        ],
        "conclusion": "Les quatre racines quatrièmes ont pour module $2$ et pour arguments $\\frac{\\pi}{12}$, $\\frac{7\\pi}{12}$, $\\frac{13\\pi}{12}$ et $\\frac{19\\pi}{12}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les racines n-ièmes",
          "stepTheme": "Les racines n-ièmes",
          "stepBadge": "Les racines n-ièmes",
          "paragraphText": "• Soit $Z_0 \\neq 0$ et $n \\geq 2$. On appelle racine n-ième de $Z_0$ tout nombre complexe $z$ tel que $z^n = Z_0$.\nSi $Z_0 = Re^{i\\theta}$, les racines n-ièmes sont $z_k = \\sqrt[n]{R} \\times e^{i\\frac{\\theta + 2k\\pi}{n}}$ avec $k \\in \\{0 ; 1 ; \\ldots ; n-1\\}$.\nLes racines n-ièmes sont les affixes des sommets d'un polygone régulier de $n$ côtés inscrit dans un cercle de rayon $\\sqrt[n]{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p06_q1",
            "type": "mcq",
            "prompt": "Quelles sont les racines quatrièmes de $Z = 8(1 + i\\sqrt{3})$ ?",
            "options": [
              "Module $2$ et arguments $\\frac{\\pi}{12} + \\frac{k\\pi}{2}$ ($k = 0, 1, 2, 3$)",
              "Module $4$ et arguments $\\frac{\\pi}{3} + \\frac{k\\pi}{2}$ ($k = 0, 1, 2, 3$)",
              "Module $2$ et arguments $\\frac{\\pi}{3} + k\\pi$ ($k = 0, 1$)",
              "Module $16$ et arguments $\\frac{\\pi}{12}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$Z = 16e^{i\\frac{\\pi}{3}}$ : les racines quatrièmes ont pour module $\\sqrt[4]{16} = 2$ et pour arguments $\\frac{\\pi}{12} + \\frac{k\\pi}{2}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les racines cubiques de l'unité",
          "stepTheme": "Les racines cubiques de l'unité",
          "stepBadge": "Les racines cubiques de l'unité",
          "paragraphText": "• Les racines cubiques de l'unité sont les solutions de $z^3 = 1$ : $z_0 = 1$, $z_1 = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ et $z_2 = -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$.\nOn pose $j = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ : on a $j^2 = \\bar{j}$ et $j^2 + j + 1 = 0$.\nPour $n = 2$ : $\\{1 ; -1\\}$ ; pour $n = 4$ : $\\{1 ; i ; -1 ; -i\\}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p06_q2",
            "type": "mcq",
            "prompt": "On pose $j = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$. Que vaut $j^2 + j + 1$ ?",
            "options": [
              "$0$",
              "$1$",
              "$j$",
              "$-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$j$ est une racine cubique de l'unité différente de $1$ : $j^3 = 1$ et $j^2 + j + 1 = 0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les valeurs exactes de $\\cos\\frac{5\\pi}{12}$ et $\\sin\\frac{5\\pi}{12}$",
          "stepTheme": "Les valeurs exactes de $\\cos\\frac{5\\pi}{12}$ et $\\sin\\frac{5\\pi}{12}$",
          "stepBadge": "Les valeurs exactes de $\\cos\\frac{5\\pi}{12}$ et $\\sin\\frac{5\\pi}{12}$",
          "paragraphText": "• Soit $Z = (1 + i)(\\sqrt{3} + i)$. Sous forme algébrique : $Z = \\sqrt{3} - 1 + i(1 + \\sqrt{3})$.\nSous forme trigonométrique : $|Z| = \\sqrt{2} \\times 2 = 2\\sqrt{2}$ et $\\arg(Z) = \\frac{\\pi}{4} + \\frac{\\pi}{6} = \\frac{5\\pi}{12}$, donc $Z = 2\\sqrt{2}\\left(\\cos\\frac{5\\pi}{12} + i\\sin\\frac{5\\pi}{12}\\right)$.\nEn identifiant : $\\cos\\frac{5\\pi}{12} = \\frac{\\sqrt{3} - 1}{2\\sqrt{2}}$ et $\\sin\\frac{5\\pi}{12} = \\frac{1 + \\sqrt{3}}{2\\sqrt{2}}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p06_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\cos\\frac{5\\pi}{12}$ ?",
            "options": [
              "$\\frac{\\sqrt{3} - 1}{2\\sqrt{2}}$",
              "$\\frac{\\sqrt{3} + 1}{2\\sqrt{2}}$",
              "$\\frac{\\sqrt{3} - 1}{\\sqrt{2}}$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En identifiant les deux formes de $(1 + i)(\\sqrt{3} + i)$ : $\\cos\\frac{5\\pi}{12} = \\frac{\\sqrt{3} - 1}{2\\sqrt{2}}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La nature du triangle ABC",
          "stepTheme": "La nature du triangle ABC",
          "stepBadge": "La nature du triangle ABC",
          "paragraphText": "• Soient $A$, $B$ et $C$ d'affixes respectives $-1 - i$, $2 - 2i$ et $2i$.\nOn calcule $\\frac{z_B - z_A}{z_C - z_A} = \\frac{3 - i}{1 + 3i} = -i$.\nLe quotient est imaginaire pur de module $1$ : le triangle $ABC$ est rectangle et isocèle en $A$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p06_q4",
            "type": "mcq",
            "prompt": "Soient $A$, $B$, $C$ d'affixes $-1 - i$, $2 - 2i$ et $2i$. Que vaut $\\frac{z_B - z_A}{z_C - z_A}$ et quelle est la nature du triangle $ABC$ ?",
            "options": [
              "$-i$ : triangle rectangle et isocèle en $A$",
              "$i$ : triangle rectangle et isocèle en $A$",
              "$1$ : triangle équilatéral",
              "$-1$ : triangle isocèle en $A$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{3 - i}{1 + 3i} = -i$ : le quotient est imaginaire pur de module $1$, donc le triangle $ABC$ est rectangle et isocèle en $A$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le parallélogramme et le cercle",
          "stepTheme": "Le parallélogramme et le cercle",
          "stepBadge": "Le parallélogramme et le cercle",
          "paragraphText": "• Le point $D$ tel que $ABCD$ soit un parallélogramme vérifie $z_D - z_C = z_A - z_B$, donc $z_D = -3 + 3i$.\n• Le triangle $ABC$ étant rectangle en $A$, il est inscrit dans le cercle de diamètre $[BC]$.\nLe point $E$ d'affixe $2 + 2i$ vérifie $\\frac{z_C - z_E}{z_B - z_E} = -\\frac{1}{2}i \\in i\\mathbb{R}^*$ : le triangle $BCE$ est rectangle en $E$, donc $E$ est aussi sur ce cercle.\nSon centre est le milieu $I$ de $[BC]$, d'affixe $1$, et son rayon est $IC = |2i - 1| = \\sqrt{5}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p06_q5",
            "type": "mcq",
            "prompt": "Quel est le centre et le rayon du cercle passant par $A$, $B$, $C$ et $E$ (d'affixes $-1 - i$, $2 - 2i$, $2i$ et $2 + 2i$) ?",
            "options": [
              "Centre d'affixe $1$ et rayon $\\sqrt{5}$",
              "Centre d'affixe $0$ et rayon $\\sqrt{5}$",
              "Centre d'affixe $1$ et rayon $5$",
              "Centre d'affixe $2$ et rayon $\\sqrt{5}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cercle a pour diamètre $[BC]$ : son centre est le milieu $I$ de $[BC]$, d'affixe $\\frac{(2 - 2i) + 2i}{2} = 1$, et son rayon est $IC = |-1 + 2i| = \\sqrt{5}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La somme de deux carrés",
          "stepTheme": "La somme de deux carrés",
          "stepBadge": "La somme de deux carrés",
          "paragraphText": "• Situation : si $A = x^2 + y^2$ avec $x, y$ entiers, alors $A^n$ est aussi la somme de deux carrés pour tout $n \\geq 1$.\nDémonstration : on pose $z = x + iy$, donc $A = |z|^2$. Par récurrence, $z^n = x_n + iy_n$ avec $x_n, y_n$ entiers.\nDonc $A^n = (|z|^2)^n = |z^n|^2 = x_n^2 + y_n^2$ : $A^n$ est bien la somme de deux carrés.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l06_complexes_p06_q6",
            "type": "mcq",
            "prompt": "Si $A = x^2 + y^2$ avec $x, y$ entiers, pourquoi $A^n$ est-il aussi la somme de deux carrés ?",
            "options": [
              "Parce que $A^n = |z^n|^2 = x_n^2 + y_n^2$ avec $z = x + iy$ et $x_n, y_n$ entiers",
              "Parce que $A^n = (x^2 + y^2)^n$ se développe",
              "Parce que $A$ est un carré parfait",
              "Parce que $n$ est un entier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $z = x + iy$, $A = |z|^2$ et $z^n = x_n + iy_n$ (entiers par récurrence) : $A^n = |z^n|^2 = x_n^2 + y_n^2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p06_q1",
          "type": "mcq",
          "prompt": "Quelles sont les racines quatrièmes de $Z = 8(1 + i\\sqrt{3})$ ?",
          "options": [
            "Module $2$ et arguments $\\frac{\\pi}{12} + \\frac{k\\pi}{2}$ ($k = 0, 1, 2, 3$)",
            "Module $4$ et arguments $\\frac{\\pi}{3} + \\frac{k\\pi}{2}$ ($k = 0, 1, 2, 3$)",
            "Module $2$ et arguments $\\frac{\\pi}{3} + k\\pi$ ($k = 0, 1$)",
            "Module $16$ et arguments $\\frac{\\pi}{12}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$Z = 16e^{i\\frac{\\pi}{3}}$ : les racines quatrièmes ont pour module $\\sqrt[4]{16} = 2$ et pour arguments $\\frac{\\pi}{12} + \\frac{k\\pi}{2}$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p06_q2",
          "type": "mcq",
          "prompt": "On pose $j = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$. Que vaut $j^2 + j + 1$ ?",
          "options": [
            "$0$",
            "$1$",
            "$j$",
            "$-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$j$ est une racine cubique de l'unité différente de $1$ : $j^3 = 1$ et $j^2 + j + 1 = 0$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p06_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\cos\\frac{5\\pi}{12}$ ?",
          "options": [
            "$\\frac{\\sqrt{3} - 1}{2\\sqrt{2}}$",
            "$\\frac{\\sqrt{3} + 1}{2\\sqrt{2}}$",
            "$\\frac{\\sqrt{3} - 1}{\\sqrt{2}}$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En identifiant les deux formes de $(1 + i)(\\sqrt{3} + i)$ : $\\cos\\frac{5\\pi}{12} = \\frac{\\sqrt{3} - 1}{2\\sqrt{2}}$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p06_q4",
          "type": "mcq",
          "prompt": "Soient $A$, $B$, $C$ d'affixes $-1 - i$, $2 - 2i$ et $2i$. Que vaut $\\frac{z_B - z_A}{z_C - z_A}$ et quelle est la nature du triangle $ABC$ ?",
          "options": [
            "$-i$ : triangle rectangle et isocèle en $A$",
            "$i$ : triangle rectangle et isocèle en $A$",
            "$1$ : triangle équilatéral",
            "$-1$ : triangle isocèle en $A$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{3 - i}{1 + 3i} = -i$ : le quotient est imaginaire pur de module $1$, donc le triangle $ABC$ est rectangle et isocèle en $A$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p06_q5",
          "type": "mcq",
          "prompt": "Quel est le centre et le rayon du cercle passant par $A$, $B$, $C$ et $E$ (d'affixes $-1 - i$, $2 - 2i$, $2i$ et $2 + 2i$) ?",
          "options": [
            "Centre d'affixe $1$ et rayon $\\sqrt{5}$",
            "Centre d'affixe $0$ et rayon $\\sqrt{5}$",
            "Centre d'affixe $1$ et rayon $5$",
            "Centre d'affixe $2$ et rayon $\\sqrt{5}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cercle a pour diamètre $[BC]$ : son centre est le milieu $I$ de $[BC]$, d'affixe $\\frac{(2 - 2i) + 2i}{2} = 1$, et son rayon est $IC = |-1 + 2i| = \\sqrt{5}$."
        },
        {
          "id": "terminale_c_maths_numerique_l06_complexes_p06_q6",
          "type": "mcq",
          "prompt": "Si $A = x^2 + y^2$ avec $x, y$ entiers, pourquoi $A^n$ est-il aussi la somme de deux carrés ?",
          "options": [
            "Parce que $A^n = |z^n|^2 = x_n^2 + y_n^2$ avec $z = x + iy$ et $x_n, y_n$ entiers",
            "Parce que $A^n = (x^2 + y^2)^n$ se développe",
            "Parce que $A$ est un carré parfait",
            "Parce que $n$ est un entier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $z = x + iy$, $A = |z|^2$ et $z^n = x_n + iy_n$ (entiers par récurrence) : $A^n = |z^n|^2 = x_n^2 + y_n^2$."
        }
      ]
    }
  ]
};
