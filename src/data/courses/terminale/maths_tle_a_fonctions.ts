import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 1 : Étude de fonctions polynômes et de fonctions rationnelles » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1623
export const MATHS_TLE_A_L01_FONCTIONS: CurriculumChapter = {
  "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 1,
  "title": "Leçon 1 : Étude de fonctions polynômes et de fonctions rationnelles",
  "summary": "Dans la situation du COGES qui crée une imprimerie, on étudie les fonctions polynômes et les fonctions rationnelles, leurs limites, leurs dérivées et leurs variations, pour déterminer notamment le nombre d'articles qui donne un bénéfice maximal.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1623",
  "points": [
    {
      "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01",
      "order": 1,
      "title": "Limite d'une fonction polynôme en un point",
      "summary": "Remplacer la variable par le point pour obtenir la limite d'un polynôme en ce point.",
      "conceptExplanation": "Dans l'activité, on considère la fonction définie sur $\\mathbb{R} \\setminus \\{1\\}$ par $f(x) = \\frac{x^2 - x}{2x - 2}$. Quand $x$ prend des valeurs de plus en plus proches de $1$, les valeurs de $f(x)$ se rapprochent de $0{,}5$ : on dit que $0{,}5$ est la limite de $f$ en $1$ et on note $\\lim_{x \\to 1} f(x) = 0{,}5$.\nPropriété 1 : lorsqu'une fonction admet une limite en un point ou à l'infini, cette limite est unique.\nPropriété 2 : la limite d'une fonction polynôme $P$ en un point $a$ est égale à l'image de $a$ par $P$, soit $\\lim_{x \\to a} P(x) = P(a)$. En particulier, la limite d'une constante $k$ en un réel $a$ est la constante $k$.",
      "keyRule": "Limite d'un polynôme en $a$ : on remplace simplement $x$ par $a$, et la limite, quand elle existe, est unique.",
      "formulas": [
        {
          "name": "Limite d'un polynôme en un point",
          "formula": "\\lim_{x \\to a} P(x) = P(a)",
          "note": "On remplace $x$ par $a$ dans l'expression du polynôme."
        },
        {
          "name": "Limite d'une constante",
          "formula": "\\lim_{x \\to a} k = k",
          "note": "La limite d'une constante est la constante elle-même."
        }
      ],
      "workedExample": {
        "title": "Trois limites en un point (exercice de fixation 2)",
        "statement": "Détermine $\\lim_{x \\to 4} (2x + 1)$, $\\lim_{x \\to 3} (x - 3)(3x + 8)$ et $\\lim_{x \\to -1} (-13)$.",
        "methodSteps": [
          "Pour un polynôme, on remplace $x$ par le point : en $4$, on obtient $2 \\times 4 + 1 = 9$.",
          "En $3$, le facteur $x - 3$ vaut $0$, donc le produit vaut $0$.",
          "La fonction constante égale à $-13$ a pour limite $-13$."
        ],
        "conclusion": "Les trois limites valent respectivement $9$, $0$ et $-13$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La notion de limite en un point",
          "stepTheme": "La notion de limite en un point",
          "stepBadge": "La notion de limite en un point",
          "paragraphText": "• On dit que $0{,}5$ est la limite de $f$ en $1$ lorsque $f(x)$ se rapproche de $0{,}5$ quand $x$ prend des valeurs suffisamment proches de $1$ dans l'ensemble de définition.\nDans l'activité, $f(0{,}999) = 0{,}4995$ et $f(1{,}001) = 0{,}5005$ : les images encadrent $0{,}5$ de très près.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01_q1",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\frac{x^2 - x}{2x - 2}$, que vaut $\\lim_{x \\to 1} f(x)$ ?",
            "options": [
              "$0{,}5$",
              "$0$",
              "$1$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le tableau de valeurs de l'activité montre que $f(x)$ se rapproche de $0{,}5$ quand $x$ se rapproche de $1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'unicité de la limite",
          "stepTheme": "L'unicité de la limite",
          "stepBadge": "L'unicité de la limite",
          "paragraphText": "• Propriété 1 : lorsqu'une fonction admet une limite en un point ou à l'infini, cette limite est unique.\nAffirmer qu'une fonction peut avoir deux limites différentes au même point est donc faux.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01_q2",
            "type": "mcq",
            "prompt": "Une fonction qui admet une limite en un point $a$ peut-elle avoir deux valeurs différentes pour cette limite ?",
            "options": [
              "Non, la limite est unique",
              "Oui, toujours",
              "Oui, si le point est positif",
              "Oui, une à gauche et une à droite seulement pour les polynômes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la propriété 1 de la leçon : la limite, quand elle existe, est unique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La limite d'un polynôme est son image",
          "stepTheme": "La limite d'un polynôme est son image",
          "stepBadge": "La limite d'un polynôme est son image",
          "paragraphText": "• Propriété 2 : $\\lim_{x \\to a} P(x) = P(a)$ pour toute fonction polynôme $P$.\nIl suffit donc de calculer l'image du point par le polynôme.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 4} (2x + 1)$ ?",
            "options": [
              "$7$",
              "$9$",
              "$8$",
              "$11$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On remplace $x$ par $4$ : $2 \\times 4 + 1 = 9$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Remplacer et calculer",
          "stepTheme": "Remplacer et calculer",
          "stepBadge": "Remplacer et calculer",
          "paragraphText": "• Méthode : pour la limite d'un polynôme en un point, on remplace la variable par ce point, puis on calcule.\nExemple : en $3$, le produit $(x - 3)(3x + 8)$ contient le facteur $x - 3$ qui s'annule.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 3} (x - 3)(3x + 8)$ ?",
            "options": [
              "$17$",
              "$51$",
              "$0$",
              "$3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En remplaçant $x$ par $3$, le premier facteur vaut $0$, donc le produit vaut $0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La limite d'une constante",
          "stepTheme": "La limite d'une constante",
          "stepBadge": "La limite d'une constante",
          "paragraphText": "• Piège : la limite d'une constante ne dépend pas du point choisi.\nPour tout réel $a$, $\\lim_{x \\to a} k = k$ : la constante $-13$ garde la valeur $-13$ en $-1$ comme ailleurs.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -1} (-13)$ ?",
            "options": [
              "$13$",
              "$-1$",
              "$-13$",
              "$0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La limite d'une constante $k$ est la constante $k$ elle-même, ici $-13$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un polynôme de degré 3 en 4",
          "stepTheme": "Un polynôme de degré 3 en 4",
          "stepBadge": "Un polynôme de degré 3 en 4",
          "paragraphText": "• Exemple de l'exercice de maison : on cherche la limite en $4$ du polynôme $-2x + 10x^3$.\nOn remplace $x$ par $4$ dans l'expression, comme pour tout polynôme en un point.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 4} (-2x + 10x^3)$ ?",
            "options": [
              "$72$",
              "$640$",
              "$256$",
              "$632$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En remplaçant : $-2 \\times 4 + 10 \\times 4^3 = -8 + 640 = 632$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01_q1",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\frac{x^2 - x}{2x - 2}$, que vaut $\\lim_{x \\to 1} f(x)$ ?",
          "options": [
            "$0{,}5$",
            "$0$",
            "$1$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le tableau de valeurs de l'activité montre que $f(x)$ se rapproche de $0{,}5$ quand $x$ se rapproche de $1$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01_q2",
          "type": "mcq",
          "prompt": "Une fonction qui admet une limite en un point $a$ peut-elle avoir deux valeurs différentes pour cette limite ?",
          "options": [
            "Non, la limite est unique",
            "Oui, toujours",
            "Oui, si le point est positif",
            "Oui, une à gauche et une à droite seulement pour les polynômes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la propriété 1 de la leçon : la limite, quand elle existe, est unique."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 4} (2x + 1)$ ?",
          "options": [
            "$7$",
            "$9$",
            "$8$",
            "$11$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On remplace $x$ par $4$ : $2 \\times 4 + 1 = 9$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 3} (x - 3)(3x + 8)$ ?",
          "options": [
            "$17$",
            "$51$",
            "$0$",
            "$3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "En remplaçant $x$ par $3$, le premier facteur vaut $0$, donc le produit vaut $0$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -1} (-13)$ ?",
          "options": [
            "$13$",
            "$-1$",
            "$-13$",
            "$0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La limite d'une constante $k$ est la constante $k$ elle-même, ici $-13$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p01_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 4} (-2x + 10x^3)$ ?",
          "options": [
            "$72$",
            "$640$",
            "$256$",
            "$632$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "En remplaçant : $-2 \\times 4 + 10 \\times 4^3 = -8 + 640 = 632$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02",
      "order": 2,
      "title": "Limite d'une fonction polynôme à l'infini",
      "summary": "La limite d'un polynôme à l'infini est celle de son monôme de plus haut degré.",
      "conceptExplanation": "Dans l'activité, pour $f(x) = x^2 + 2$, les images deviennent aussi grandes que l'on veut quand $x$ prend des valeurs de plus en plus grandes : $f(x)$ tend vers $+\\infty$ lorsque $x$ tend vers $+\\infty$.\nPour un monôme $ax^n$ avec $a \\neq 0$ : si $n$ est pair, $\\lim_{x \\to +\\infty} ax^n$ et $\\lim_{x \\to -\\infty} ax^n$ ont le même signe, celui de $a$ fois $+\\infty$ ; si $n$ est impair, le signe change entre $+\\infty$ et $-\\infty$.\nPropriété 2 : la limite d'une fonction polynôme à l'infini est la limite de son monôme de plus haut degré.",
      "keyRule": "À l'infini, seul le monôme de plus haut degré compte : on étudie son signe selon la parité de l'exposant.",
      "formulas": [
        {
          "name": "Limite d'un polynôme à l'infini",
          "formula": "\\lim_{x \\to \\pm\\infty} P(x) = \\lim_{x \\to \\pm\\infty} (\\text{monôme de plus haut degré})",
          "note": "On ne garde que le terme de plus haut degré."
        },
        {
          "name": "Monôme de degré pair",
          "formula": "\\lim_{x \\to -\\infty} ax^n = \\lim_{x \\to +\\infty} ax^n \\text{ si } n \\text{ est pair}",
          "note": "Le signe est celui de $a$ multiplié par $+\\infty$."
        }
      ],
      "workedExample": {
        "title": "Limite en moins l'infini (exercice de fixation 2)",
        "statement": "Détermine $\\lim_{x \\to -\\infty} (-3x^3 + 2x)$ et $\\lim_{x \\to +\\infty} (-3x^2 + 10)$.",
        "methodSteps": [
          "On ne garde que le monôme de plus haut degré : $-3x^3$ pour la première, $-3x^2$ pour la seconde.",
          "Quand $x$ tend vers $-\\infty$, $x^3$ tend vers $-\\infty$, donc $-3x^3$ tend vers $+\\infty$.",
          "Quand $x$ tend vers $+\\infty$, $-3x^2$ tend vers $-\\infty$."
        ],
        "conclusion": "La première limite vaut $+\\infty$ et la seconde vaut $-\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Tendre vers plus l'infini",
          "stepTheme": "Tendre vers plus l'infini",
          "stepBadge": "Tendre vers plus l'infini",
          "paragraphText": "• On dit que $f(x)$ tend vers $+\\infty$ lorsque $x$ tend vers $+\\infty$ si les images deviennent aussi grandes que l'on veut pour des valeurs de $x$ suffisamment grandes.\nC'est le cas de $f(x) = x^2 + 2$ dans l'activité de la leçon.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} (x^2 + 2)$ ?",
            "options": [
              "$+\\infty$",
              "$2$",
              "$-\\infty$",
              "$0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les valeurs de $x^2 + 2$ deviennent aussi grandes que l'on veut : la limite est $+\\infty$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cas du degré pair",
          "stepTheme": "Le cas du degré pair",
          "stepBadge": "Le cas du degré pair",
          "paragraphText": "• Quand $n$ est pair, $ax^n$ a la même limite en $+\\infty$ et en $-\\infty$.\nAinsi $-4x^2$ tend vers $-\\infty$ en $+\\infty$ : affirmer qu'il tend vers $+\\infty$ est faux, comme dans l'exercice de fixation 1.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} (-4x^2)$ ?",
            "options": [
              "$+\\infty$",
              "$-\\infty$",
              "$-4$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le coefficient $-4$ est négatif et $x^2$ tend vers $+\\infty$, donc $-4x^2$ tend vers $-\\infty$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cas du degré impair",
          "stepTheme": "Le cas du degré impair",
          "stepBadge": "Le cas du degré impair",
          "paragraphText": "• Quand $n$ est impair, le signe de $x^n$ change entre $-\\infty$ et $+\\infty$.\nPour $-x^3$ en $-\\infty$ : $x^3$ tend vers $-\\infty$, donc $-x^3$ tend vers $+\\infty$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} (-x^3)$ ?",
            "options": [
              "$-\\infty$",
              "$+\\infty$",
              "$0$",
              "$-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En $-\\infty$, $x^3$ tend vers $-\\infty$ et son opposé tend vers $+\\infty$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Ne garder que le plus haut degré",
          "stepTheme": "Ne garder que le plus haut degré",
          "stepBadge": "Ne garder que le plus haut degré",
          "paragraphText": "• Méthode : la limite d'un polynôme à l'infini est la limite de son monôme de plus haut degré.\nDans $-3x^3 + 2x + x^5$, le monôme de plus haut degré est $x^5$, de degré impair.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} (-3x^3 + 2x + x^5)$ ?",
            "options": [
              "$+\\infty$",
              "$0$",
              "$-\\infty$",
              "$-3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On ne garde que $x^5$ : en $-\\infty$, $x^5$ tend vers $-\\infty$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le piège du monôme de degré 1",
          "stepTheme": "Le piège du monôme de degré 1",
          "stepBadge": "Le piège du monôme de degré 1",
          "paragraphText": "• Piège de l'exercice de fixation 1 : affirmer que $\\lim_{x \\to -\\infty} (-x) = -\\infty$ est faux.\nQuand $x$ tend vers $-\\infty$, son opposé $-x$ tend vers $+\\infty$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} (-x)$ ?",
            "options": [
              "$-\\infty$",
              "$0$",
              "$1$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Si $x$ devient très négatif, alors $-x$ devient très positif : la limite est $+\\infty$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un polynôme de degré 2 en plus l'infini",
          "stepTheme": "Un polynôme de degré 2 en plus l'infini",
          "stepBadge": "Un polynôme de degré 2 en plus l'infini",
          "paragraphText": "• Exemple de l'exercice de fixation 2 : $-3x^2 + 10$ en $+\\infty$.\nSon monôme de plus haut degré est $-3x^2$, qui décide seul de la limite.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} (-3x^2 + 10)$ ?",
            "options": [
              "$10$",
              "$+\\infty$",
              "$-3$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On ne garde que $-3x^2$, qui tend vers $-\\infty$ en $+\\infty$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} (x^2 + 2)$ ?",
          "options": [
            "$+\\infty$",
            "$2$",
            "$-\\infty$",
            "$0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les valeurs de $x^2 + 2$ deviennent aussi grandes que l'on veut : la limite est $+\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} (-4x^2)$ ?",
          "options": [
            "$+\\infty$",
            "$-\\infty$",
            "$-4$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le coefficient $-4$ est négatif et $x^2$ tend vers $+\\infty$, donc $-4x^2$ tend vers $-\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} (-x^3)$ ?",
          "options": [
            "$-\\infty$",
            "$+\\infty$",
            "$0$",
            "$-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En $-\\infty$, $x^3$ tend vers $-\\infty$ et son opposé tend vers $+\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} (-3x^3 + 2x + x^5)$ ?",
          "options": [
            "$+\\infty$",
            "$0$",
            "$-\\infty$",
            "$-3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On ne garde que $x^5$ : en $-\\infty$, $x^5$ tend vers $-\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} (-x)$ ?",
          "options": [
            "$-\\infty$",
            "$0$",
            "$1$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Si $x$ devient très négatif, alors $-x$ devient très positif : la limite est $+\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p02_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} (-3x^2 + 10)$ ?",
          "options": [
            "$10$",
            "$+\\infty$",
            "$-3$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On ne garde que $-3x^2$, qui tend vers $-\\infty$ en $+\\infty$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03",
      "order": 3,
      "title": "Limite d'une fonction rationnelle",
      "summary": "En un point de définition on remplace ; ailleurs on distingue gauche et droite ; à l'infini on compare les plus hauts degrés.",
      "conceptExplanation": "Soit $f$ une fraction rationnelle et $a$ un élément de son ensemble de définition : on a $\\lim_{x \\to a} f(x) = f(a)$.\nEn un point où elle n'est pas définie, on étudie les limites à gauche et à droite. Pour la fonction qui à $x$ associe $\\frac{1}{x - a}$, on a $\\lim_{x \\to a, x < a} \\frac{1}{x - a} = -\\infty$ et $\\lim_{x \\to a, x > a} \\frac{1}{x - a} = +\\infty$.\nÀ l'infini, la limite d'une fonction rationnelle est égale à la limite du quotient des monômes de plus hauts degrés du numérateur et du dénominateur.",
      "keyRule": "Trois réflexes : point de définition, on remplace ; point interdit, on sépare gauche et droite ; à l'infini, on garde les plus hauts degrés.",
      "formulas": [
        {
          "name": "Limite en un point de définition",
          "formula": "\\lim_{x \\to a} f(x) = f(a)",
          "note": "Valable si $a$ appartient à l'ensemble de définition de la fraction rationnelle."
        },
        {
          "name": "Limites latérales de référence",
          "formula": "\\lim_{x \\to a, x < a} \\frac{1}{x-a} = -\\infty \\quad ; \\quad \\lim_{x \\to a, x > a} \\frac{1}{x-a} = +\\infty",
          "note": "À gauche le dénominateur est négatif, à droite il est positif."
        },
        {
          "name": "Limite à l'infini d'une rationnelle",
          "formula": "\\lim_{x \\to \\pm\\infty} \\frac{P(x)}{Q(x)} = \\lim_{x \\to \\pm\\infty} \\frac{\\text{plus haut degré de } P}{\\text{plus haut degré de } Q}",
          "note": "On simplifie le quotient obtenu avant de conclure."
        }
      ],
      "workedExample": {
        "title": "Une rationnelle en moins l'infini (exercice de fixation)",
        "statement": "Détermine $\\lim_{x \\to -\\infty} \\frac{7x^3 - x^2 + 5}{4x^2 - 2x + 3}$.",
        "methodSteps": [
          "On garde le quotient des monômes de plus hauts degrés : $\\frac{7x^3}{4x^2}$.",
          "On simplifie ce quotient : $\\frac{7x^3}{4x^2} = \\frac{7x}{4}$.",
          "Quand $x$ tend vers $-\\infty$, $\\frac{7x}{4}$ tend vers $-\\infty$."
        ],
        "conclusion": "La limite de la fonction rationnelle en $-\\infty$ vaut $-\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'ensemble de définition",
          "stepTheme": "L'ensemble de définition",
          "stepBadge": "L'ensemble de définition",
          "paragraphText": "• Une fonction rationnelle n'est pas définie aux points qui annulent son dénominateur.\nPour $f(x) = \\frac{1}{x - 1}$, le dénominateur s'annule en $1$, donc $D_f = ]-\\infty ; 1[ \\cup ]1 ; +\\infty[$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03_q1",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de $f(x) = \\frac{1}{x - 1}$ ?",
            "options": [
              "$]-\\infty ; 1[ \\cup ]1 ; +\\infty[$",
              "$\\mathbb{R}$",
              "$\\{1\\}$",
              "$]0 ; +\\infty[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le dénominateur $x - 1$ s'annule en $1$ : il faut exclure $1$ de $\\mathbb{R}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "En un point où elle est définie",
          "stepTheme": "En un point où elle est définie",
          "stepBadge": "En un point où elle est définie",
          "paragraphText": "• Propriété admise : si $a$ appartient à l'ensemble de définition d'une fraction rationnelle $f$, alors $\\lim_{x \\to a} f(x) = f(a)$.\nOn remplace donc $x$ par $a$, comme pour un polynôme.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 1} \\frac{x}{x + 2}$ ?",
            "options": [
              "$3$",
              "$\\frac{1}{2}$",
              "$\\frac{1}{3}$",
              "$0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La fonction est définie en $1$ : on remplace et on obtient $\\frac{1}{1 + 2} = \\frac{1}{3}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La limite à gauche",
          "stepTheme": "La limite à gauche",
          "stepBadge": "La limite à gauche",
          "paragraphText": "• À gauche de $a$, le dénominateur $x - a$ est négatif et proche de zéro, donc $\\frac{1}{x - a}$ tend vers $-\\infty$.\nC'est la propriété admise pour la fonction de référence de la leçon.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 3, x < 3} \\frac{1}{x - 3}$ ?",
            "options": [
              "$+\\infty$",
              "$-\\infty$",
              "$0$",
              "$3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "À gauche de $3$, $x - 3$ est négatif et tend vers $0$, donc son inverse tend vers $-\\infty$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La limite à droite",
          "stepTheme": "La limite à droite",
          "stepBadge": "La limite à droite",
          "paragraphText": "• Méthode : à droite du point interdit, on regarde le signe du dénominateur, positif et proche de zéro.\nL'inverse d'un nombre positif très proche de zéro est un nombre positif très grand.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 7, x > 7} \\frac{1}{x - 7}$ ?",
            "options": [
              "$-\\infty$",
              "$7$",
              "$+\\infty$",
              "$0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "À droite de $7$, $x - 7$ est positif et tend vers $0$, donc son inverse tend vers $+\\infty$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre gauche et droite",
          "stepTheme": "Ne pas confondre gauche et droite",
          "stepBadge": "Ne pas confondre gauche et droite",
          "paragraphText": "• Piège de l'exercice de fixation 1 : affirmer que $\\lim_{x \\to 5, x > 5} \\frac{1}{x - 5} = -\\infty$ est faux.\nÀ droite, le dénominateur est positif : la limite est $+\\infty$, pas $-\\infty$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03_q5",
            "type": "mcq",
            "prompt": "L'affirmation $\\lim_{x \\to 5, x > 5} \\frac{1}{x - 5} = -\\infty$ est :",
            "options": [
              "Fausse, la limite vaut $+\\infty$",
              "Vraie",
              "Vraie seulement en $5$",
              "Fausse, la limite vaut $0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "À droite de $5$, $x - 5$ est positif : son inverse tend vers $+\\infty$. L'affirmation est fausse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une rationnelle définie en moins 1",
          "stepTheme": "Une rationnelle définie en moins 1",
          "stepBadge": "Une rationnelle définie en moins 1",
          "paragraphText": "• Exemple de l'exercice de fixation : $\\frac{x^2}{x - 2}$ en $-1$.\nLa fonction est définie en $-1$ car le dénominateur vaut $-3$, qui n'est pas nul : on remplace.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -1} \\frac{x^2}{x - 2}$ ?",
            "options": [
              "$\\frac{1}{3}$",
              "$-3$",
              "$1$",
              "$-\\frac{1}{3}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On remplace $x$ par $-1$ : $\\frac{(-1)^2}{-1 - 2} = \\frac{1}{-3} = -\\frac{1}{3}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03_q1",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de $f(x) = \\frac{1}{x - 1}$ ?",
          "options": [
            "$]-\\infty ; 1[ \\cup ]1 ; +\\infty[$",
            "$\\mathbb{R}$",
            "$\\{1\\}$",
            "$]0 ; +\\infty[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le dénominateur $x - 1$ s'annule en $1$ : il faut exclure $1$ de $\\mathbb{R}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 1} \\frac{x}{x + 2}$ ?",
          "options": [
            "$3$",
            "$\\frac{1}{2}$",
            "$\\frac{1}{3}$",
            "$0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La fonction est définie en $1$ : on remplace et on obtient $\\frac{1}{1 + 2} = \\frac{1}{3}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 3, x < 3} \\frac{1}{x - 3}$ ?",
          "options": [
            "$+\\infty$",
            "$-\\infty$",
            "$0$",
            "$3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "À gauche de $3$, $x - 3$ est négatif et tend vers $0$, donc son inverse tend vers $-\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 7, x > 7} \\frac{1}{x - 7}$ ?",
          "options": [
            "$-\\infty$",
            "$7$",
            "$+\\infty$",
            "$0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "À droite de $7$, $x - 7$ est positif et tend vers $0$, donc son inverse tend vers $+\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03_q5",
          "type": "mcq",
          "prompt": "L'affirmation $\\lim_{x \\to 5, x > 5} \\frac{1}{x - 5} = -\\infty$ est :",
          "options": [
            "Fausse, la limite vaut $+\\infty$",
            "Vraie",
            "Vraie seulement en $5$",
            "Fausse, la limite vaut $0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "À droite de $5$, $x - 5$ est positif : son inverse tend vers $+\\infty$. L'affirmation est fausse."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p03_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -1} \\frac{x^2}{x - 2}$ ?",
          "options": [
            "$\\frac{1}{3}$",
            "$-3$",
            "$1$",
            "$-\\frac{1}{3}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On remplace $x$ par $-1$ : $\\frac{(-1)^2}{-1 - 2} = \\frac{1}{-3} = -\\frac{1}{3}$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04",
      "order": 4,
      "title": "Opérations sur les limites",
      "summary": "Somme, produit, inverse et quotient de fonctions : appliquer les tableaux, et reconnaître les cas où on ne peut pas conclure.",
      "conceptExplanation": "Pour une somme : la limite de $f + g$ est la somme des limites quand elles sont finies ; un réel plus $+\\infty$ donne $+\\infty$ ; en revanche, pour $+\\infty$ et $-\\infty$, on ne peut pas conclure directement.\nPour un produit : la limite est le produit des limites finies ; le signe se traite avec la règle des signes pour les infinis ; pour $0$ et un infini, on ne peut pas conclure directement.\nPour un inverse : si $g$ tend vers un réel non nul $l$, son inverse tend vers $\\frac{1}{l}$ ; si $g$ tend vers $0$ en restant positive, son inverse tend vers $+\\infty$, et vers $-\\infty$ si $g$ reste négative.\nPour un quotient avec $g(a) = 0$ et $f(a) \\neq 0$, on écrit le quotient comme un produit par l'inverse, on calcule chaque limite, puis on conclut.",
      "keyRule": "Devant $+\\infty$ moins $+\\infty$ ou zéro fois l'infini, on ne conclut pas directement : il faut transformer l'expression.",
      "formulas": [
        {
          "name": "Limite d'une somme",
          "formula": "\\lim (f + g) = l + l' \\text{ si } \\lim f = l \\text{ et } \\lim g = l'",
          "note": "Le cas $+\\infty$ et $-\\infty$ est indéterminé."
        },
        {
          "name": "Limite d'un produit",
          "formula": "\\lim (f \\times g) = l \\times l' \\text{ si } \\lim f = l \\text{ et } \\lim g = l'",
          "note": "Le cas $0$ et infini est indéterminé."
        },
        {
          "name": "Limite d'un inverse",
          "formula": "\\lim \\frac{1}{g} = \\frac{1}{l} \\text{ si } \\lim g = l \\neq 0",
          "note": "Si $g$ tend vers $0$ par valeurs positives, l'inverse tend vers $+\\infty$."
        }
      ],
      "workedExample": {
        "title": "Un quotient en 6 à droite (exercice de fixation 2)",
        "statement": "Détermine $\\lim_{x \\to 6, x > 6} \\frac{x - 8}{x - 6}$.",
        "methodSteps": [
          "On écrit le quotient comme un produit : $(x - 8) \\times \\frac{1}{x - 6}$.",
          "Le facteur $x - 8$ tend vers $-2$ quand $x$ tend vers $6$.",
          "À droite de $6$, $\\frac{1}{x - 6}$ tend vers $+\\infty$.",
          "Le produit d'un nombre négatif par $+\\infty$ donne $-\\infty$."
        ],
        "conclusion": "La limite du quotient en $6$ à droite vaut $-\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La forme indéterminée d'une somme",
          "stepTheme": "La forme indéterminée d'une somme",
          "stepBadge": "La forme indéterminée d'une somme",
          "paragraphText": "• Pour une somme, le cas où une fonction tend vers $+\\infty$ et l'autre vers $-\\infty$ est un cas où on ne peut pas conclure directement.\nL'exercice de fixation 1 le rappelle : affirmer que cette somme vaut $0$ est faux.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04_q1",
            "type": "mcq",
            "prompt": "Si $g$ tend vers $+\\infty$ et $h$ tend vers $-\\infty$, que peut-on dire de la limite de $g + h$ ?",
            "options": [
              "On ne peut pas conclure directement",
              "Elle vaut $0$",
              "Elle vaut $+\\infty$",
              "Elle vaut $-\\infty$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La somme de $+\\infty$ et de $-\\infty$ est une forme indéterminée : on ne peut pas conclure sans transformer l'expression."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un réel plus moins l'infini",
          "stepTheme": "Un réel plus moins l'infini",
          "stepBadge": "Un réel plus moins l'infini",
          "paragraphText": "• Propriété du tableau des sommes : un réel $l$ ajouté à $-\\infty$ donne $-\\infty$.\nC'est l'affirmation vraie de l'exercice de fixation 1 sur les sommes.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04_q2",
            "type": "mcq",
            "prompt": "Si $f$ tend vers un réel $l$ et $h$ tend vers $-\\infty$, que vaut la limite de $f + h$ ?",
            "options": [
              "$l$",
              "$0$",
              "$+\\infty$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D'après le tableau des limites d'une somme, réel plus $-\\infty$ donne $-\\infty$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le produit zéro fois l'infini",
          "stepTheme": "Le produit zéro fois l'infini",
          "stepBadge": "Le produit zéro fois l'infini",
          "paragraphText": "• Pour un produit, le cas $0$ et infini est indéterminé : on ne peut pas conclure directement.\nEn revanche, le produit d'une fonction qui tend vers $0$ par une fonction qui tend vers un réel $l$ tend vers $0$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04_q3",
            "type": "mcq",
            "prompt": "Si $f$ tend vers $0$ et $g$ tend vers $+\\infty$, que peut-on dire de la limite de $f \\times g$ ?",
            "options": [
              "Elle vaut $0$",
              "On ne peut pas conclure directement",
              "Elle vaut $+\\infty$",
              "Elle vaut $1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le produit de $0$ par l'infini est une forme indéterminée, d'après le tableau des produits."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Transformer un quotient en produit",
          "stepTheme": "Transformer un quotient en produit",
          "stepBadge": "Transformer un quotient en produit",
          "paragraphText": "• Méthode de la leçon pour un quotient dont le dénominateur s'annule : on écrit $\\frac{f(x)}{g(x)}$ comme $f(x) \\times \\frac{1}{g(x)}$.\nOn calcule ensuite la limite de $f$ et celle de l'inverse, puis on applique la règle du produit.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04_q4",
            "type": "mcq",
            "prompt": "Pour calculer la limite d'un quotient avec $g(a) = 0$ et $f(a) \\neq 0$, la leçon propose de :",
            "options": [
              "Remplacer le quotient par $0$",
              "Supprimer le dénominateur",
              "Écrire le quotient comme un produit par l'inverse",
              "Dériver numérateur et dénominateur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La méthode de la leçon : écrire d'abord le quotient sous la forme $f(x) \\times \\frac{1}{g(x)}$, puis calculer chaque limite."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un produit avec l'infini n'est pas toujours plus l'infini",
          "stepTheme": "Un produit avec l'infini n'est pas toujours plus l'infini",
          "stepBadge": "Un produit avec l'infini n'est pas toujours plus l'infini",
          "paragraphText": "• Piège de l'exercice de fixation 1 sur les produits : affirmer que $g \\times h$ vaut toujours $+\\infty$ quand $g$ tend vers $+\\infty$ et $h$ vers un réel $l$ est faux.\nLe résultat dépend du signe de $l$ : si $l$ est négatif, le produit tend vers $-\\infty$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04_q5",
            "type": "mcq",
            "prompt": "Si $g$ tend vers $+\\infty$ et $h$ tend vers un réel $l$ strictement négatif, que vaut la limite de $g \\times h$ ?",
            "options": [
              "Toujours $+\\infty$",
              "$-\\infty$",
              "$0$",
              "$l$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La règle des signes s'applique : $+\\infty$ multiplié par un réel négatif donne $-\\infty$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un produit qui tend vers moins l'infini",
          "stepTheme": "Un produit qui tend vers moins l'infini",
          "stepBadge": "Un produit qui tend vers moins l'infini",
          "paragraphText": "• Exemple de l'exercice de fixation 2 : le produit de $\\frac{x + 6}{x - 4}$ par $6 - x$ en $+\\infty$.\nLe premier facteur tend vers $1$ et le second vers $-\\infty$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\left( \\frac{x + 6}{x - 4} \\times (6 - x) \\right)$ ?",
            "options": [
              "$1$",
              "$+\\infty$",
              "$0$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le quotient tend vers $1$ et $6 - x$ tend vers $-\\infty$ : le produit tend vers $-\\infty$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04_q1",
          "type": "mcq",
          "prompt": "Si $g$ tend vers $+\\infty$ et $h$ tend vers $-\\infty$, que peut-on dire de la limite de $g + h$ ?",
          "options": [
            "On ne peut pas conclure directement",
            "Elle vaut $0$",
            "Elle vaut $+\\infty$",
            "Elle vaut $-\\infty$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La somme de $+\\infty$ et de $-\\infty$ est une forme indéterminée : on ne peut pas conclure sans transformer l'expression."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04_q2",
          "type": "mcq",
          "prompt": "Si $f$ tend vers un réel $l$ et $h$ tend vers $-\\infty$, que vaut la limite de $f + h$ ?",
          "options": [
            "$l$",
            "$0$",
            "$+\\infty$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D'après le tableau des limites d'une somme, réel plus $-\\infty$ donne $-\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04_q3",
          "type": "mcq",
          "prompt": "Si $f$ tend vers $0$ et $g$ tend vers $+\\infty$, que peut-on dire de la limite de $f \\times g$ ?",
          "options": [
            "Elle vaut $0$",
            "On ne peut pas conclure directement",
            "Elle vaut $+\\infty$",
            "Elle vaut $1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le produit de $0$ par l'infini est une forme indéterminée, d'après le tableau des produits."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04_q4",
          "type": "mcq",
          "prompt": "Pour calculer la limite d'un quotient avec $g(a) = 0$ et $f(a) \\neq 0$, la leçon propose de :",
          "options": [
            "Remplacer le quotient par $0$",
            "Supprimer le dénominateur",
            "Écrire le quotient comme un produit par l'inverse",
            "Dériver numérateur et dénominateur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La méthode de la leçon : écrire d'abord le quotient sous la forme $f(x) \\times \\frac{1}{g(x)}$, puis calculer chaque limite."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04_q5",
          "type": "mcq",
          "prompt": "Si $g$ tend vers $+\\infty$ et $h$ tend vers un réel $l$ strictement négatif, que vaut la limite de $g \\times h$ ?",
          "options": [
            "Toujours $+\\infty$",
            "$-\\infty$",
            "$0$",
            "$l$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La règle des signes s'applique : $+\\infty$ multiplié par un réel négatif donne $-\\infty$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p04_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\left( \\frac{x + 6}{x - 4} \\times (6 - x) \\right)$ ?",
          "options": [
            "$1$",
            "$+\\infty$",
            "$0$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le quotient tend vers $1$ et $6 - x$ tend vers $-\\infty$ : le produit tend vers $-\\infty$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05",
      "order": 5,
      "title": "Asymptotes horizontale, verticale et oblique",
      "summary": "Lire les asymptotes d'une courbe à partir de ses limites : finie à l'infini, infinie en un point, écart qui tend vers zéro.",
      "conceptExplanation": "Lorsque $f$ admet une limite finie $b$ en $+\\infty$ (respectivement en $-\\infty$), la courbe de $f$ admet une asymptote horizontale en $+\\infty$ (respectivement en $-\\infty$) : la droite d'équation $y = b$.\nLorsque $f$ admet une limite infinie en $a$, la courbe admet une asymptote verticale en $a$ : la droite d'équation $x = a$.\nLa droite d'équation $y = ax + b$, avec $a \\neq 0$, est asymptote oblique à la courbe de $f$ en $+\\infty$ (respectivement en $-\\infty$) si et seulement si $\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0$ (respectivement en $-\\infty$).",
      "keyRule": "Limite finie à l'infini : asymptote horizontale ; limite infinie en un point : asymptote verticale ; écart qui tend vers zéro : asymptote oblique.",
      "formulas": [
        {
          "name": "Asymptote horizontale",
          "formula": "\\lim_{x \\to \\pm\\infty} f(x) = b \\implies y = b \\text{ asymptote horizontale}",
          "note": "La limite doit être finie."
        },
        {
          "name": "Asymptote verticale",
          "formula": "\\lim_{x \\to a} f(x) = \\pm\\infty \\implies x = a \\text{ asymptote verticale}",
          "note": "La limite en $a$ doit être infinie."
        },
        {
          "name": "Asymptote oblique",
          "formula": "\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0 \\quad (a \\neq 0)",
          "note": "L'écart entre la courbe et la droite tend vers zéro."
        }
      ],
      "workedExample": {
        "title": "L'asymptote oblique de la leçon (exercice de fixation)",
        "statement": "Pour $f(x) = \\frac{2x^2 + 3x - 1}{x + 2}$, justifie que la droite d'équation $y = 2x - 1$ est asymptote oblique à la courbe de $f$ en $+\\infty$ et en $-\\infty$.",
        "methodSteps": [
          "On écrit $f$ sous la forme $f(x) = 2x - 1 + \\frac{1}{x + 2}$ pour $x \\neq -2$.",
          "L'écart à la droite est $f(x) - (2x - 1) = \\frac{1}{x + 2}$.",
          "Cet écart tend vers $0$ en $+\\infty$ et en $-\\infty$."
        ],
        "conclusion": "La droite d'équation $y = 2x - 1$ est asymptote oblique à la courbe en $+\\infty$ et en $-\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'asymptote horizontale",
          "stepTheme": "L'asymptote horizontale",
          "stepBadge": "L'asymptote horizontale",
          "paragraphText": "• Définition : si $f$ admet une limite finie $b$ en $+\\infty$, sa courbe admet une asymptote horizontale en $+\\infty$, la droite d'équation $y = b$.\nC'est une droite parallèle à l'axe des abscisses.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05_q1",
            "type": "mcq",
            "prompt": "Si $\\lim_{x \\to +\\infty} f(x) = 3$, quelle est l'asymptote horizontale de la courbe en $+\\infty$ ?",
            "options": [
              "La droite d'équation $y = 3$",
              "La droite d'équation $x = 3$",
              "Aucune asymptote",
              "La droite d'équation $y = 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une limite finie $b$ en $+\\infty$ donne l'asymptote horizontale d'équation $y = b$, ici $y = 3$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'asymptote verticale",
          "stepTheme": "L'asymptote verticale",
          "stepBadge": "L'asymptote verticale",
          "paragraphText": "• Définition : si $f$ admet une limite infinie en $a$, sa courbe admet une asymptote verticale en $a$, la droite d'équation $x = a$.\nC'est une droite parallèle à l'axe des ordonnées.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05_q2",
            "type": "mcq",
            "prompt": "Si $f$ admet une limite infinie en $5$, quelle asymptote sa courbe admet-elle ?",
            "options": [
              "La droite d'équation $x = 5$, asymptote verticale",
              "La droite d'équation $y = 5$",
              "Aucune",
              "La droite d'équation $y = 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une limite infinie en $a$ donne l'asymptote verticale d'équation $x = a$, ici $x = 5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La condition d'une asymptote oblique",
          "stepTheme": "La condition d'une asymptote oblique",
          "stepBadge": "La condition d'une asymptote oblique",
          "paragraphText": "• Propriété admise : la droite d'équation $y = ax + b$, avec $a \\neq 0$, est asymptote oblique si et seulement si l'écart $f(x) - (ax + b)$ tend vers $0$ à l'infini.\nIl faut donc calculer la limite de cet écart, et non celle de $f$ seule.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05_q3",
            "type": "mcq",
            "prompt": "La droite d'équation $y = ax + b$ est asymptote oblique à la courbe de $f$ en $+\\infty$ si et seulement si :",
            "options": [
              "$\\lim_{x \\to +\\infty} f(x) = 0$",
              "$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0$",
              "$\\lim_{x \\to +\\infty} f(x) = b$",
              "$a = 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La condition porte sur l'écart entre la fonction et la droite : cet écart doit tendre vers $0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Reconnaître une asymptote à partir de ses limites",
          "stepTheme": "Reconnaître une asymptote à partir de ses limites",
          "stepBadge": "Reconnaître une asymptote à partir de ses limites",
          "paragraphText": "• Méthode de l'exercice 1 de la leçon : on associe chaque limite à son interprétation graphique.\nUne limite égale à $+\\infty$ en $-3$ donne une asymptote verticale ; une limite finie donne une asymptote horizontale ; un écart qui tend vers $0$ donne une asymptote oblique.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05_q4",
            "type": "mcq",
            "prompt": "Si $\\lim_{x \\to -3} f(x) = +\\infty$, quelle est l'interprétation graphique ?",
            "options": [
              "La droite d'équation $y = -3$ est asymptote horizontale",
              "La droite d'équation $y = 0$ est asymptote oblique",
              "La droite d'équation $x = -3$ est asymptote verticale",
              "Il n'y a pas d'asymptote"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une limite infinie en un point donne une asymptote verticale d'équation $x = -3$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre les équations des asymptotes",
          "stepTheme": "Confondre les équations des asymptotes",
          "stepBadge": "Confondre les équations des asymptotes",
          "paragraphText": "• Piège de l'exercice de fixation sur les horizontales : pour $f(x) = \\frac{3x - 2}{x - 1}$ de limite $3$ en $+\\infty$, dire que l'asymptote horizontale est $x = 1$ est faux.\nL'asymptote horizontale s'écrit $y = 3$ ; l'équation $x = 1$ correspondrait à une asymptote verticale.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05_q5",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\frac{3x - 2}{x - 1}$ avec $\\lim_{x \\to +\\infty} f(x) = 3$, l'asymptote horizontale en $+\\infty$ est :",
            "options": [
              "La droite d'équation $x = 1$",
              "La droite d'équation $x = 3$",
              "La droite d'équation $y = 3$",
              "La droite d'équation $y = 1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La limite finie $3$ donne l'asymptote horizontale d'équation $y = 3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une asymptote verticale en 5",
          "stepTheme": "Une asymptote verticale en 5",
          "stepBadge": "Une asymptote verticale en 5",
          "paragraphText": "• Exemple de l'exercice de fixation : $f$ est définie sur $\\mathbb{R} \\setminus \\{1\\}$ par une expression de dénominateur $x - 5$, et ses limites à gauche et à droite en $5$ valent $-\\infty$.\nLa courbe admet donc une asymptote verticale en $5$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05_q6",
            "type": "mcq",
            "prompt": "Si les limites de $f$ à gauche et à droite en $5$ sont infinies, on conclut que :",
            "options": [
              "La courbe admet une asymptote horizontale d'équation $y = 5$",
              "La courbe n'admet aucune asymptote",
              "La courbe admet une asymptote oblique",
              "La courbe admet une asymptote verticale d'équation $x = 5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Des limites infinies en $5$ donnent l'asymptote verticale d'équation $x = 5$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05_q1",
          "type": "mcq",
          "prompt": "Si $\\lim_{x \\to +\\infty} f(x) = 3$, quelle est l'asymptote horizontale de la courbe en $+\\infty$ ?",
          "options": [
            "La droite d'équation $y = 3$",
            "La droite d'équation $x = 3$",
            "Aucune asymptote",
            "La droite d'équation $y = 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une limite finie $b$ en $+\\infty$ donne l'asymptote horizontale d'équation $y = b$, ici $y = 3$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05_q2",
          "type": "mcq",
          "prompt": "Si $f$ admet une limite infinie en $5$, quelle asymptote sa courbe admet-elle ?",
          "options": [
            "La droite d'équation $x = 5$, asymptote verticale",
            "La droite d'équation $y = 5$",
            "Aucune",
            "La droite d'équation $y = 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une limite infinie en $a$ donne l'asymptote verticale d'équation $x = a$, ici $x = 5$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05_q3",
          "type": "mcq",
          "prompt": "La droite d'équation $y = ax + b$ est asymptote oblique à la courbe de $f$ en $+\\infty$ si et seulement si :",
          "options": [
            "$\\lim_{x \\to +\\infty} f(x) = 0$",
            "$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0$",
            "$\\lim_{x \\to +\\infty} f(x) = b$",
            "$a = 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La condition porte sur l'écart entre la fonction et la droite : cet écart doit tendre vers $0$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05_q4",
          "type": "mcq",
          "prompt": "Si $\\lim_{x \\to -3} f(x) = +\\infty$, quelle est l'interprétation graphique ?",
          "options": [
            "La droite d'équation $y = -3$ est asymptote horizontale",
            "La droite d'équation $y = 0$ est asymptote oblique",
            "La droite d'équation $x = -3$ est asymptote verticale",
            "Il n'y a pas d'asymptote"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une limite infinie en un point donne une asymptote verticale d'équation $x = -3$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05_q5",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\frac{3x - 2}{x - 1}$ avec $\\lim_{x \\to +\\infty} f(x) = 3$, l'asymptote horizontale en $+\\infty$ est :",
          "options": [
            "La droite d'équation $x = 1$",
            "La droite d'équation $x = 3$",
            "La droite d'équation $y = 3$",
            "La droite d'équation $y = 1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La limite finie $3$ donne l'asymptote horizontale d'équation $y = 3$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p05_q6",
          "type": "mcq",
          "prompt": "Si les limites de $f$ à gauche et à droite en $5$ sont infinies, on conclut que :",
          "options": [
            "La courbe admet une asymptote horizontale d'équation $y = 5$",
            "La courbe n'admet aucune asymptote",
            "La courbe admet une asymptote oblique",
            "La courbe admet une asymptote verticale d'équation $x = 5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Des limites infinies en $5$ donnent l'asymptote verticale d'équation $x = 5$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06",
      "order": 6,
      "title": "Dérivation : fonctions élémentaires et opérations",
      "summary": "Dériver les fonctions usuelles, puis appliquer les formules de la somme, du produit, de l'inverse et du quotient.",
      "conceptExplanation": "Dérivées élémentaires : une constante $a$ a pour dérivée $0$ ; $ax$ a pour dérivée $a$ ; $x^2$ a pour dérivée $2x$ ; $x^n$ a pour dérivée $nx^{n-1}$ pour $n \\geq 1$ ; $\\frac{1}{x}$ a pour dérivée $-\\frac{1}{x^2}$ ; $\\frac{1}{x^n}$ a pour dérivée $-\\frac{n}{x^{n+1}}$.\nOpérations, pour $u$ et $v$ dérivables sur un intervalle ouvert $I$ : $(u + v)' = u' + v'$ ; $(ku)' = ku'$ pour $k$ constante ; $(u \\times v)' = u' \\times v + v' \\times u$ ; $(u^n)' = n u' \\times u^{n-1}$ ; l'inverse de $u$, quand $u$ ne s'annule pas, a pour dérivée $-\\frac{u'}{u^2}$ ; le quotient $\\frac{u}{v}$, quand $v$ ne s'annule pas, a pour dérivée $\\frac{u' v - v' u}{v^2}$.",
      "keyRule": "Retiens les dérivées usuelles, puis dérive terme à terme : le produit et le quotient ont chacun leur formule propre, à ne pas confondre.",
      "formulas": [
        {
          "name": "Dérivée d'une puissance",
          "formula": "(x^n)' = n x^{n-1}",
          "note": "Pour $n$ entier, $n \\geq 1$."
        },
        {
          "name": "Dérivée de l'inverse",
          "formula": "\\left( \\frac{1}{x} \\right)' = -\\frac{1}{x^2}",
          "note": "Et plus généralement, l'inverse de $u$ a pour dérivée $-\\frac{u'}{u^2}$."
        },
        {
          "name": "Dérivée d'un produit",
          "formula": "(u \\times v)' = u' \\times v + v' \\times u",
          "note": "Ce n'est pas le produit des dérivées."
        },
        {
          "name": "Dérivée d'un quotient",
          "formula": "\\left( \\frac{u}{v} \\right)' = \\frac{u' \\times v - v' \\times u}{v^2}",
          "note": "Valable quand $v$ ne s'annule pas sur l'intervalle."
        }
      ],
      "workedExample": {
        "title": "Dériver un polynôme (exercice de fixation)",
        "statement": "Calcule la dérivée sur $[1 ; +\\infty[$ de $f(x) = -5x^3 + 7x^2 - 8$.",
        "methodSteps": [
          "On dérive terme à terme : la dérivée d'une somme est la somme des dérivées.",
          "La dérivée de $-5x^3$ est $-15x^2$ et celle de $7x^2$ est $14x$.",
          "La dérivée de la constante $-8$ est $0$."
        ],
        "conclusion": "Pour tout $x$ de l'intervalle, $f'(x) = -15x^2 + 14x$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dérivée d'une constante",
          "stepTheme": "La dérivée d'une constante",
          "stepBadge": "La dérivée d'une constante",
          "paragraphText": "• Dans le tableau des dérivées élémentaires, la fonction constante $f(x) = a$ a pour dérivée $f'(x) = 0$ sur $\\mathbb{R}$.\nAinsi la dérivée de la fonction constante égale à $-6$ est nulle.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06_q1",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de la fonction constante $f(x) = -6$ ?",
            "options": [
              "$0$",
              "$-6$",
              "$1$",
              "$x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée d'une constante est toujours $0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La dérivée de la fonction carré et des puissances",
          "stepTheme": "La dérivée de la fonction carré et des puissances",
          "stepBadge": "La dérivée de la fonction carré et des puissances",
          "paragraphText": "• La dérivée de $x^2$ est $2x$, et plus généralement celle de $x^n$ est $nx^{n-1}$.\nPour $x^3$, on obtient donc $3x^2$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06_q2",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $x^3$ ?",
            "options": [
              "$x^2$",
              "$3x^2$",
              "$3x$",
              "$x^3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D'après la formule des puissances avec $n = 3$ : $3x^{3-1} = 3x^2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La dérivée de l'inverse",
          "stepTheme": "La dérivée de l'inverse",
          "stepBadge": "La dérivée de l'inverse",
          "paragraphText": "• La dérivée de $\\frac{1}{x}$ est $-\\frac{1}{x^2}$, et celle de $\\frac{1}{x^n}$ est $-\\frac{n}{x^{n+1}}$.\nPour $\\frac{1}{x^3}$, on obtient $-\\frac{3}{x^4}$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06_q3",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $\\frac{1}{x^3}$ ?",
            "options": [
              "$\\frac{3}{x^4}$",
              "$-\\frac{3}{x^4}$",
              "$-\\frac{1}{x^2}$",
              "$\\frac{1}{x^2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On applique la formule de $\\frac{1}{x^n}$ avec $n = 3$ : $-\\frac{3}{x^{3+1}} = -\\frac{3}{x^4}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Dériver un quotient",
          "stepTheme": "Dériver un quotient",
          "stepBadge": "Dériver un quotient",
          "paragraphText": "• Méthode : pour $\\frac{u}{v}$, on applique $\\frac{u' v - v' u}{v^2}$.\nPour $g(x) = \\frac{x - 4}{5x + 3}$, on a $u = x - 4$ et $v = 5x + 3$, donc le numérateur de la dérivée vaut $(5x + 3) - 5(x - 4)$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06_q4",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de $g(x) = \\frac{x - 4}{5x + 3}$ ?",
            "options": [
              "$\\frac{20}{(5x + 3)^2}$",
              "$\\frac{5}{(5x + 3)^2}$",
              "$\\frac{23}{(5x + 3)^2}$",
              "$\\frac{-17}{(5x + 3)^2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le numérateur vaut $(5x + 3) - 5(x - 4) = 5x + 3 - 5x + 20 = 23$, donc $g'(x) = \\frac{23}{(5x + 3)^2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La dérivée d'un produit n'est pas le produit des dérivées",
          "stepTheme": "La dérivée d'un produit n'est pas le produit des dérivées",
          "stepBadge": "La dérivée d'un produit n'est pas le produit des dérivées",
          "paragraphText": "• Piège : $(u \\times v)'$ n'est pas égal à $u' \\times v'$.\nLa formule correcte mélange chaque fonction avec la dérivée de l'autre : $u' \\times v + v' \\times u$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06_q5",
            "type": "mcq",
            "prompt": "Quelle est la formule correcte de la dérivée d'un produit ?",
            "options": [
              "$(u \\times v)' = u' \\times v'$",
              "$(u \\times v)' = u' \\times v - v' \\times u$",
              "$(u \\times v)' = u \\times v$",
              "$(u \\times v)' = u' \\times v + v' \\times u$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La dérivée d'un produit est $u' \\times v + v' \\times u$ : chaque facteur est dérivé à tour de rôle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Dériver plusieurs fonctions usuelles",
          "stepTheme": "Dériver plusieurs fonctions usuelles",
          "stepBadge": "Dériver plusieurs fonctions usuelles",
          "paragraphText": "• Exemple de l'exercice de fixation : $g(x) = 8x$ a pour dérivée $8$, et $h(x) = x^2$ a pour dérivée $2x$.\nCe sont les lignes du tableau des dérivées élémentaires pour $ax$ et pour $x^2$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06_q6",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $g(x) = 8x$ ?",
            "options": [
              "$8x$",
              "$0$",
              "$16x$",
              "$8$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La dérivée de $ax$ est $a$, ici $8$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06_q1",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de la fonction constante $f(x) = -6$ ?",
          "options": [
            "$0$",
            "$-6$",
            "$1$",
            "$x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée d'une constante est toujours $0$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06_q2",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $x^3$ ?",
          "options": [
            "$x^2$",
            "$3x^2$",
            "$3x$",
            "$x^3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D'après la formule des puissances avec $n = 3$ : $3x^{3-1} = 3x^2$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06_q3",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $\\frac{1}{x^3}$ ?",
          "options": [
            "$\\frac{3}{x^4}$",
            "$-\\frac{3}{x^4}$",
            "$-\\frac{1}{x^2}$",
            "$\\frac{1}{x^2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On applique la formule de $\\frac{1}{x^n}$ avec $n = 3$ : $-\\frac{3}{x^{3+1}} = -\\frac{3}{x^4}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06_q4",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de $g(x) = \\frac{x - 4}{5x + 3}$ ?",
          "options": [
            "$\\frac{20}{(5x + 3)^2}$",
            "$\\frac{5}{(5x + 3)^2}$",
            "$\\frac{23}{(5x + 3)^2}$",
            "$\\frac{-17}{(5x + 3)^2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le numérateur vaut $(5x + 3) - 5(x - 4) = 5x + 3 - 5x + 20 = 23$, donc $g'(x) = \\frac{23}{(5x + 3)^2}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06_q5",
          "type": "mcq",
          "prompt": "Quelle est la formule correcte de la dérivée d'un produit ?",
          "options": [
            "$(u \\times v)' = u' \\times v'$",
            "$(u \\times v)' = u' \\times v - v' \\times u$",
            "$(u \\times v)' = u \\times v$",
            "$(u \\times v)' = u' \\times v + v' \\times u$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La dérivée d'un produit est $u' \\times v + v' \\times u$ : chaque facteur est dérivé à tour de rôle."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p06_q6",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $g(x) = 8x$ ?",
          "options": [
            "$8x$",
            "$0$",
            "$16x$",
            "$8$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La dérivée de $ax$ est $a$, ici $8$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07",
      "order": 7,
      "title": "Dérivée et sens de variation, extremum relatif",
      "summary": "Le signe de la dérivée donne le sens de variation, et un extremum correspond à un changement de signe de la dérivée.",
      "conceptExplanation": "Propriété admise : $f$ est dérivable sur un intervalle ouvert $K$. La dérivée $f'$ est positive sur $K$ si et seulement si $f$ est croissante sur $K$ ; $f'$ est négative sur $K$ si et seulement si $f$ est décroissante sur $K$ ; $f'$ est nulle sur $K$ si et seulement si $f$ est constante sur $K$.\nPropriété admise : $f(x_0)$ est un extremum relatif de $f$ si et seulement si $f'$ s'annule en $x_0$ en changeant de signe.\nDans l'exercice de fixation, pour $f(x) = x - 2 + \\frac{1}{x}$, on a $f'(x) = \\frac{(x - 1)(x + 1)}{x^2}$, positive sur $]-\\infty ; -1[$ et sur $]1 ; +\\infty[$, négative sur $]-1 ; 0[$ et sur $]0 ; 1[$.",
      "keyRule": "Signe de la dérivée d'abord, variations ensuite : positif, ça monte ; négatif, ça descend ; zéro avec changement de signe, extremum.",
      "formulas": [
        {
          "name": "Dérivée positive et croissance",
          "formula": "f' > 0 \\text{ sur } K \\iff f \\text{ croissante sur } K",
          "note": "Même principe en négatif pour la décroissance."
        },
        {
          "name": "Extremum relatif",
          "formula": "f'(x_0) = 0 \\text{ avec changement de signe} \\iff f(x_0) \\text{ extremum relatif}",
          "note": "Sans changement de signe, pas d'extremum."
        }
      ],
      "workedExample": {
        "title": "Les variations de la fonction de l'exercice de fixation",
        "statement": "Pour $f(x) = x - 2 + \\frac{1}{x}$, détermine ses extremums relatifs à partir de $f'(x) = \\frac{(x - 1)(x + 1)}{x^2}$.",
        "methodSteps": [
          "La dérivée s'annule en $-1$ et en $1$, et elle change de signe en chacun de ces points.",
          "En $-1$, $f'$ passe du positif au négatif : $f(-1) = -4$ est un maximum relatif.",
          "En $1$, $f'$ passe du négatif au positif : $f(1) = 0$ est un minimum relatif."
        ],
        "conclusion": "$-4$ est un maximum relatif de $f$ et $0$ est un minimum relatif de $f$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Dérivée positive et fonction croissante",
          "stepTheme": "Dérivée positive et fonction croissante",
          "stepBadge": "Dérivée positive et fonction croissante",
          "paragraphText": "• Définition issue de la propriété admise : $f'$ positive sur un intervalle ouvert $K$ équivaut à $f$ croissante sur $K$.\nLe signe de la dérivée renseigne donc directement sur le sens de variation.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07_q1",
            "type": "mcq",
            "prompt": "Si $f'$ est strictement positive sur un intervalle $K$, alors $f$ est :",
            "options": [
              "Croissante sur $K$",
              "Constante sur $K$",
              "Décroissante sur $K$",
              "Nulle sur $K$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une dérivée positive sur $K$ signifie que $f$ est croissante sur $K$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Dérivée négative et fonction décroissante",
          "stepTheme": "Dérivée négative et fonction décroissante",
          "stepBadge": "Dérivée négative et fonction décroissante",
          "paragraphText": "• Propriété admise : $f'$ est négative sur $K$ si et seulement si $f$ est décroissante sur $K$.\nEt $f'$ nulle sur $K$ équivaut à $f$ constante sur $K$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07_q2",
            "type": "mcq",
            "prompt": "Si $f'$ est strictement négative sur un intervalle $K$, alors $f$ est :",
            "options": [
              "Croissante sur $K$",
              "Constante sur $K$",
              "Décroissante sur $K$",
              "Positive sur $K$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une dérivée négative sur $K$ signifie que $f$ est décroissante sur $K$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La condition d'un extremum relatif",
          "stepTheme": "La condition d'un extremum relatif",
          "stepBadge": "La condition d'un extremum relatif",
          "paragraphText": "• Propriété admise : $f(x_0)$ est un extremum relatif si et seulement si $f'$ s'annule en $x_0$ en changeant de signe.\nLes deux conditions comptent : s'annuler, et changer de signe.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07_q3",
            "type": "mcq",
            "prompt": "Selon la leçon, $f(x_0)$ est un extremum relatif si et seulement si :",
            "options": [
              "$f'$ est positive en $x_0$",
              "$f'$ s'annule en $x_0$ en changeant de signe",
              "$f(x_0) = 0$",
              "$f'$ s'annule en $x_0$ sans condition de signe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la propriété admise de la leçon : annulation de la dérivée avec changement de signe."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Étudier le signe de la dérivée factorisée",
          "stepTheme": "Étudier le signe de la dérivée factorisée",
          "stepBadge": "Étudier le signe de la dérivée factorisée",
          "paragraphText": "• Méthode : pour $f'(x) = \\frac{(x - 1)(x + 1)}{x^2}$, le dénominateur $x^2$ est positif hors de $0$, donc le signe est celui du produit $(x - 1)(x + 1)$.\nOn trouve $f'$ positive sur $]-\\infty ; -1[$ et sur $]1 ; +\\infty[$, négative entre les racines.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07_q4",
            "type": "mcq",
            "prompt": "Sur quel intervalle la dérivée $f'(x) = \\frac{(x - 1)(x + 1)}{x^2}$ est-elle positive ?",
            "options": [
              "Sur $]0 ; 1[$",
              "Sur $]-1 ; 0[$",
              "Sur $]1 ; +\\infty[$",
              "Sur aucun intervalle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour $x > 1$, les deux facteurs $x - 1$ et $x + 1$ sont positifs, donc $f'$ est positive sur $]1 ; +\\infty[$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "S'annuler ne suffit pas",
          "stepTheme": "S'annuler ne suffit pas",
          "stepBadge": "S'annuler ne suffit pas",
          "paragraphText": "• Piège : une dérivée qui s'annule en un point sans changer de signe ne donne pas d'extremum relatif en ce point.\nIl faut vérifier le changement de signe dans le tableau de variation avant de conclure.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07_q5",
            "type": "mcq",
            "prompt": "Une dérivée s'annule en $x_0$ mais ne change pas de signe. Peut-on conclure à un extremum relatif en $x_0$ ?",
            "options": [
              "Non, il faut un changement de signe",
              "Oui, toujours",
              "Oui, un maximum seulement",
              "Oui, un minimum seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La propriété exige l'annulation avec changement de signe : sans changement de signe, pas d'extremum relatif."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le maximum relatif de l'exemple",
          "stepTheme": "Le maximum relatif de l'exemple",
          "stepBadge": "Le maximum relatif de l'exemple",
          "paragraphText": "• Exemple de l'exercice de fixation : $f$ est croissante sur $]-\\infty ; -1[$ puis décroissante sur $]-1 ; 0[$.\nDonc $f(-1) = -4$ est un maximum relatif de $f$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07_q6",
            "type": "mcq",
            "prompt": "Pour $f(x) = x - 2 + \\frac{1}{x}$, que vaut le maximum relatif atteint en $-1$ ?",
            "options": [
              "$0$",
              "$-1$",
              "$4$",
              "$-4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En $-1$ : $-1 - 2 - 1 = -4$. C'est le maximum relatif donné par la correction de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07_q1",
          "type": "mcq",
          "prompt": "Si $f'$ est strictement positive sur un intervalle $K$, alors $f$ est :",
          "options": [
            "Croissante sur $K$",
            "Constante sur $K$",
            "Décroissante sur $K$",
            "Nulle sur $K$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une dérivée positive sur $K$ signifie que $f$ est croissante sur $K$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07_q2",
          "type": "mcq",
          "prompt": "Si $f'$ est strictement négative sur un intervalle $K$, alors $f$ est :",
          "options": [
            "Croissante sur $K$",
            "Constante sur $K$",
            "Décroissante sur $K$",
            "Positive sur $K$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une dérivée négative sur $K$ signifie que $f$ est décroissante sur $K$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07_q3",
          "type": "mcq",
          "prompt": "Selon la leçon, $f(x_0)$ est un extremum relatif si et seulement si :",
          "options": [
            "$f'$ est positive en $x_0$",
            "$f'$ s'annule en $x_0$ en changeant de signe",
            "$f(x_0) = 0$",
            "$f'$ s'annule en $x_0$ sans condition de signe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la propriété admise de la leçon : annulation de la dérivée avec changement de signe."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07_q4",
          "type": "mcq",
          "prompt": "Sur quel intervalle la dérivée $f'(x) = \\frac{(x - 1)(x + 1)}{x^2}$ est-elle positive ?",
          "options": [
            "Sur $]0 ; 1[$",
            "Sur $]-1 ; 0[$",
            "Sur $]1 ; +\\infty[$",
            "Sur aucun intervalle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour $x > 1$, les deux facteurs $x - 1$ et $x + 1$ sont positifs, donc $f'$ est positive sur $]1 ; +\\infty[$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07_q5",
          "type": "mcq",
          "prompt": "Une dérivée s'annule en $x_0$ mais ne change pas de signe. Peut-on conclure à un extremum relatif en $x_0$ ?",
          "options": [
            "Non, il faut un changement de signe",
            "Oui, toujours",
            "Oui, un maximum seulement",
            "Oui, un minimum seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La propriété exige l'annulation avec changement de signe : sans changement de signe, pas d'extremum relatif."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p07_q6",
          "type": "mcq",
          "prompt": "Pour $f(x) = x - 2 + \\frac{1}{x}$, que vaut le maximum relatif atteint en $-1$ ?",
          "options": [
            "$0$",
            "$-1$",
            "$4$",
            "$-4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "En $-1$ : $-1 - 2 - 1 = -4$. C'est le maximum relatif donné par la correction de la leçon."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08",
      "order": 8,
      "title": "Tangente à une courbe et théorème des valeurs intermédiaires",
      "summary": "Écrire l'équation d'une tangente, puis prouver l'existence d'une solution et l'encadrer par dichotomie ou par balayage.",
      "conceptExplanation": "La tangente à la courbe de $f$ au point d'abscisse $a$ est la droite passant par ce point et de coefficient directeur le nombre dérivé $f'(a)$. Une équation de cette tangente est $y = f'(a)(x - a) + f(a)$.\nThéorème des valeurs intermédiaires, propriété admise : si $f$ est continue sur un intervalle $I$ et si $f(a)$ et $f(b)$ sont de signes contraires, alors l'équation $f(x) = 0$ admet une solution $\\alpha$ comprise entre $a$ et $b$.\nPour encadrer $\\alpha$, la méthode de dichotomie divise l'intervalle en deux moitiés et garde celle où le signe change ; la méthode par balayage calcule les images de dixième en dixième jusqu'au changement de signe.",
      "keyRule": "Tangente : coefficient directeur égal au nombre dérivé. Solution de $f(x) = 0$ : continuité plus changement de signe, puis dichotomie ou balayage.",
      "formulas": [
        {
          "name": "Équation de la tangente",
          "formula": "y = f'(a)(x - a) + f(a)",
          "note": "Le coefficient directeur est le nombre dérivé $f'(a)$."
        },
        {
          "name": "Théorème des valeurs intermédiaires",
          "formula": "f \\text{ continue},\\ f(a) \\text{ et } f(b) \\text{ de signes contraires} \\implies \\exists \\alpha,\\ f(\\alpha) = 0",
          "note": "La solution $\\alpha$ est comprise entre $a$ et $b$."
        }
      ],
      "workedExample": {
        "title": "Encadrer la solution par le théorème (exercice de fixation)",
        "statement": "Pour $f(x) = x^3 - 12x + 10$, strictement décroissante sur $[0 ; 1]$, montre que $f(x) = 0$ admet une solution unique $\\alpha$ sur $[0 ; 1]$ et que $0{,}8 < \\alpha < 0{,}9$.",
        "methodSteps": [
          "La fonction est continue et strictement décroissante sur $[0 ; 1]$, avec $f(0) = 10$ et $f(1) = -1$ de signes contraires : il existe une solution unique $\\alpha$.",
          "On calcule $f(0{,}8) = 0{,}912$, qui est positif.",
          "On calcule $f(0{,}9) = -0{,}071$, qui est négatif : le signe change entre $0{,}8$ et $0{,}9$."
        ],
        "conclusion": "La solution $\\alpha$ est unique sur $[0 ; 1]$ et vérifie $0{,}8 < \\alpha < 0{,}9$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La tangente à une courbe",
          "stepTheme": "La tangente à une courbe",
          "stepBadge": "La tangente à une courbe",
          "paragraphText": "• Définition : la tangente à la courbe de $f$ au point d'abscisse $a$ est la droite passant par ce point et de coefficient directeur le nombre dérivé $f'(a)$.\nSon équation est $y = f'(a)(x - a) + f(a)$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08_q1",
            "type": "mcq",
            "prompt": "Quel est le coefficient directeur de la tangente à la courbe de $f$ au point d'abscisse $a$ ?",
            "options": [
              "$f'(a)$",
              "$f(a)$",
              "$a$",
              "$f(a) - a$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, le coefficient directeur de la tangente est le nombre dérivé $f'(a)$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le théorème des valeurs intermédiaires",
          "stepTheme": "Le théorème des valeurs intermédiaires",
          "stepBadge": "Le théorème des valeurs intermédiaires",
          "paragraphText": "• Propriété admise : si $f$ est continue sur un intervalle et si $f(a)$ et $f(b)$ sont de signes contraires, alors l'équation $f(x) = 0$ admet une solution comprise entre $a$ et $b$.\nLa continuité et le changement de signe sont les deux hypothèses à vérifier.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08_q2",
            "type": "mcq",
            "prompt": "Quelle condition sur $f(a)$ et $f(b)$ permet d'appliquer le théorème des valeurs intermédiaires ?",
            "options": [
              "Ils sont égaux",
              "Ils sont tous les deux positifs",
              "Ils sont nuls",
              "Ils sont de signes contraires"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le théorème demande des images de signes contraires, avec une fonction continue sur l'intervalle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La méthode de dichotomie",
          "stepTheme": "La méthode de dichotomie",
          "stepBadge": "La méthode de dichotomie",
          "paragraphText": "• Méthode de dichotomie : on divise l'intervalle $[a ; b]$ en deux moitiés et on calcule l'image du milieu.\nOn garde la moitié où le produit des images aux bornes est négatif, puis on répète jusqu'à la précision cherchée.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08_q3",
            "type": "mcq",
            "prompt": "Dans la dichotomie sur $[0 ; 1]$ pour $f(x) = x^3 - 12x + 10$, on a $f(0) = 10$ et l'image du milieu $0{,}5$ vaut $4{,}125$. Où se trouve $\\alpha$ ?",
            "options": [
              "Entre $0$ et $0{,}5$",
              "Entre $0{,}5$ et $1$",
              "En $0{,}5$ exactement",
              "Hors de $[0 ; 1]$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les images en $0$ et en $0{,}5$ sont toutes les deux positives : le changement de signe est dans la seconde moitié, entre $0{,}5$ et $1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La méthode par balayage",
          "stepTheme": "La méthode par balayage",
          "stepBadge": "La méthode par balayage",
          "paragraphText": "• Méthode par balayage : on calcule les images de dixième en dixième, en partant de $a$.\nOn s'arrête dès qu'une image change de signe par rapport à la précédente : $\\alpha$ est entre les deux dernières valeurs testées.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08_q4",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^3 - 3x$ sur $[1 ; 2]$, le balayage donne un changement de signe entre $1{,}7$ et $1{,}8$. Quel encadrement de $\\alpha$ en déduit-on ?",
            "options": [
              "$1{,}6 < \\alpha < 1{,}7$",
              "$1{,}8 < \\alpha < 1{,}9$",
              "$1{,}7 < \\alpha < 1{,}8$",
              "$0 < \\alpha < 1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le changement de signe a lieu entre $1{,}7$ et $1{,}8$, donc $1{,}7 < \\alpha < 1{,}8$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le coefficient directeur n'est pas l'image",
          "stepTheme": "Le coefficient directeur n'est pas l'image",
          "stepBadge": "Le coefficient directeur n'est pas l'image",
          "paragraphText": "• Piège : dans l'équation de la tangente, le coefficient directeur est $f'(a)$, pas $f(a)$.\nPour $f(x) = -x^2 - 2$ en $1$, on a $f(1) = -3$ mais le nombre dérivé vaut $-2$ : la tangente a pour équation $y = -2(x - 1) - 3$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08_q5",
            "type": "mcq",
            "prompt": "Pour $f(x) = -x^2 - 2$, quelle est l'équation de la tangente au point d'abscisse $1$ ?",
            "options": [
              "$y = 2x - 1$",
              "$y = -2x - 1$",
              "$y = -3x$",
              "$y = -2x + 3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $f'(1) = -2$ et $f(1) = -3$ : $y = -2(x - 1) - 3 = -2x - 1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un encadrement au dixième",
          "stepTheme": "Un encadrement au dixième",
          "stepBadge": "Un encadrement au dixième",
          "paragraphText": "• Exemple de l'exercice de fixation : pour $f(x) = x^3 - 12x + 10$ sur $[0 ; 1]$, les images en $0{,}8$ et $0{,}9$ valent $0{,}912$ et $-0{,}071$.\nLeur produit est négatif, ce qui précise l'encadrement de la solution.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08_q6",
            "type": "mcq",
            "prompt": "Quel encadrement de $\\alpha$ donnent les valeurs en $0{,}8$ et en $0{,}9$ ?",
            "options": [
              "$0{,}7 < \\alpha < 0{,}8$",
              "$0{,}9 < \\alpha < 1$",
              "Aucun encadrement",
              "$0{,}8 < \\alpha < 0{,}9$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les images en $0{,}8$ et $0{,}9$ sont de signes contraires, donc $0{,}8 < \\alpha < 0{,}9$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08_q1",
          "type": "mcq",
          "prompt": "Quel est le coefficient directeur de la tangente à la courbe de $f$ au point d'abscisse $a$ ?",
          "options": [
            "$f'(a)$",
            "$f(a)$",
            "$a$",
            "$f(a) - a$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, le coefficient directeur de la tangente est le nombre dérivé $f'(a)$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08_q2",
          "type": "mcq",
          "prompt": "Quelle condition sur $f(a)$ et $f(b)$ permet d'appliquer le théorème des valeurs intermédiaires ?",
          "options": [
            "Ils sont égaux",
            "Ils sont tous les deux positifs",
            "Ils sont nuls",
            "Ils sont de signes contraires"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le théorème demande des images de signes contraires, avec une fonction continue sur l'intervalle."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08_q3",
          "type": "mcq",
          "prompt": "Dans la dichotomie sur $[0 ; 1]$ pour $f(x) = x^3 - 12x + 10$, on a $f(0) = 10$ et l'image du milieu $0{,}5$ vaut $4{,}125$. Où se trouve $\\alpha$ ?",
          "options": [
            "Entre $0$ et $0{,}5$",
            "Entre $0{,}5$ et $1$",
            "En $0{,}5$ exactement",
            "Hors de $[0 ; 1]$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les images en $0$ et en $0{,}5$ sont toutes les deux positives : le changement de signe est dans la seconde moitié, entre $0{,}5$ et $1$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08_q4",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^3 - 3x$ sur $[1 ; 2]$, le balayage donne un changement de signe entre $1{,}7$ et $1{,}8$. Quel encadrement de $\\alpha$ en déduit-on ?",
          "options": [
            "$1{,}6 < \\alpha < 1{,}7$",
            "$1{,}8 < \\alpha < 1{,}9$",
            "$1{,}7 < \\alpha < 1{,}8$",
            "$0 < \\alpha < 1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le changement de signe a lieu entre $1{,}7$ et $1{,}8$, donc $1{,}7 < \\alpha < 1{,}8$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08_q5",
          "type": "mcq",
          "prompt": "Pour $f(x) = -x^2 - 2$, quelle est l'équation de la tangente au point d'abscisse $1$ ?",
          "options": [
            "$y = 2x - 1$",
            "$y = -2x - 1$",
            "$y = -3x$",
            "$y = -2x + 3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $f'(1) = -2$ et $f(1) = -3$ : $y = -2(x - 1) - 3 = -2x - 1$."
        },
        {
          "id": "terminale_a1_maths_numerique_l01_fonctions_polynomes_rationnelles_p08_q6",
          "type": "mcq",
          "prompt": "Quel encadrement de $\\alpha$ donnent les valeurs en $0{,}8$ et en $0{,}9$ ?",
          "options": [
            "$0{,}7 < \\alpha < 0{,}8$",
            "$0{,}9 < \\alpha < 1$",
            "Aucun encadrement",
            "$0{,}8 < \\alpha < 0{,}9$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les images en $0{,}8$ et $0{,}9$ sont de signes contraires, donc $0{,}8 < \\alpha < 0{,}9$."
        }
      ]
    }
  ]
};
