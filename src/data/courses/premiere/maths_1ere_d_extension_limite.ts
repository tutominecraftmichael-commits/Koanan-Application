import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Extension de la notion de limite » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Extension de la notion de limite » (document PDF officiel, Mathématiques 1ère D, lot P07)
export const MATHS_1ERE_D_L08_EXTENSION_LIMITE: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l08_extension_limite",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 8,
  "title": "Leçon 8 : Extension de la notion de limite",
  "summary": "La leçon étend la notion de limite : limites infinies en un point et asymptotes verticales, limites à l’infini des fonctions élémentaires et asymptotes horizontales, opérations sur les limites, limites des polynômes et des fonctions rationnelles, et propriétés de comparaison.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Extension de la notion de limite » (document PDF officiel, Mathématiques 1ère D, lot P07)",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l08_extension_limite_p01",
      "order": 1,
      "title": "Limite infinie d’une fonction en un point",
      "summary": "Connaître les limites de la fonction inverse d’une puissance de $(x - a)$ selon la parité de l’exposant et le côté d’approche.",
      "conceptExplanation": "Soit $a$ un nombre réel et $n$ un nombre entier naturel non nul. La limite de $\\frac{1}{(x - a)^n}$ quand $x$ tend vers $a$ dépend de la parité de $n$.\nSi $n$ est pair, $(x - a)^n$ tend vers $0$ en restant positif des deux côtés, donc $\\lim_{x \\to a} \\frac{1}{(x - a)^n} = +\\infty$.\nSi $n$ est impair, $(x - a)^n$ change de signe en $a$ : la limite à droite est $+\\infty$ et la limite à gauche est $-\\infty$.\nCas particuliers : $\\lim_{x \\to a, x > a} \\frac{1}{x - a} = +\\infty$, $\\lim_{x \\to a, x < a} \\frac{1}{x - a} = -\\infty$, et de même en $0$ pour la fonction inverse.",
      "keyRule": "Pour une limite infinie en un point, regarde la parité de l’exposant et le côté d’approche : pair donne toujours $+\\infty$, impair change de signe.",
      "formulas": [
        {
          "name": "Exposant pair",
          "formula": "\\lim_{x \\to a} \\frac{1}{(x - a)^n} = +\\infty",
          "note": "Si $n$ est pair."
        },
        {
          "name": "Exposant impair, à droite",
          "formula": "\\lim_{x \\to a, x > a} \\frac{1}{(x - a)^n} = +\\infty",
          "note": "Si $n$ est impair."
        },
        {
          "name": "Exposant impair, à gauche",
          "formula": "\\lim_{x \\to a, x < a} \\frac{1}{(x - a)^n} = -\\infty",
          "note": "Si $n$ est impair."
        }
      ],
      "workedExample": {
        "title": "Trois limites de l’exercice d’application",
        "statement": "Complète les égalités suivantes : $\\lim_{x \\to 4, x > 4} \\frac{1}{x - 4}$, $\\lim_{x \\to 0} \\frac{1}{x^2}$ et $\\lim_{x \\to 0, x > 0} \\frac{1}{x}$.",
        "methodSteps": [
          "Pour $\\frac{1}{x - 4}$ à droite de $4$ : le dénominateur tend vers $0$ en restant positif, la limite est $+\\infty$.",
          "Pour $\\frac{1}{x^2}$ en $0$ : l’exposant $2$ est pair, la limite est $+\\infty$.",
          "Pour $\\frac{1}{x}$ à droite de $0$ : la limite est $+\\infty$."
        ],
        "conclusion": "Les trois limites valent $+\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le cas de l’exposant pair",
          "stepTheme": "Le cas de l’exposant pair",
          "stepBadge": "Le cas de l’exposant pair",
          "paragraphText": "• Propriété : pour tout entier naturel non nul $n$ pair, $\\lim_{x \\to a} \\frac{1}{(x - a)^n} = +\\infty$.\nLe dénominateur tend vers $0$ en restant positif, que $x$ approche $a$ par la droite ou par la gauche.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p01_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to a} \\frac{1}{(x - a)^2}$ ?",
            "options": [
              "$-\\infty$",
              "$0$",
              "$+\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’exposant $2$ est pair : le dénominateur tend vers $0$ par valeurs positives, la limite est $+\\infty$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cas de l’exposant impair",
          "stepTheme": "Le cas de l’exposant impair",
          "stepBadge": "Le cas de l’exposant impair",
          "paragraphText": "• Propriété : si $n$ est impair, $\\lim_{x \\to a, x > a} \\frac{1}{(x - a)^n} = +\\infty$ et $\\lim_{x \\to a, x < a} \\frac{1}{(x - a)^n} = -\\infty$.\nLe dénominateur change de signe en traversant $a$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p01_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to a, x < a} \\frac{1}{(x - a)^3}$ ?",
            "options": [
              "$+\\infty$",
              "$-\\infty$",
              "$0$",
              "$-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’exposant $3$ est impair et l’approche est à gauche : le dénominateur tend vers $0$ par valeurs négatives, la limite est $-\\infty$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cas particulier de la fonction inverse",
          "stepTheme": "Le cas particulier de la fonction inverse",
          "stepBadge": "Le cas particulier de la fonction inverse",
          "paragraphText": "• Cas particuliers de la leçon : $\\lim_{x \\to a, x > a} \\frac{1}{x - a} = +\\infty$ et $\\lim_{x \\to a, x < a} \\frac{1}{x - a} = -\\infty$.\nEn $0$, on retrouve les limites connues de la fonction inverse : $+\\infty$ à droite et $-\\infty$ à gauche.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p01_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 0, x < 0} \\frac{1}{x}$ ?",
            "options": [
              "$+\\infty$",
              "$0$",
              "$1$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "À gauche de $0$, le dénominateur tend vers $0$ par valeurs négatives : la limite de la fonction inverse est $-\\infty$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une limite à droite de 4",
          "stepTheme": "Une limite à droite de 4",
          "stepBadge": "Une limite à droite de 4",
          "paragraphText": "• Exercice d’application : $\\lim_{x \\to 4, x > 4} \\frac{1}{x - 4} = +\\infty$.\nJuste à droite de $4$, la quantité $x - 4$ est petite et positive, donc son inverse devient très grand.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 4, x > 4} \\frac{1}{x - 4}$ ?",
            "options": [
              "$+\\infty$",
              "$-\\infty$",
              "$4$",
              "$0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le premier résultat du corrigé de l’exercice d’application : $+\\infty$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre les deux côtés pour un exposant impair",
          "stepTheme": "Confondre les deux côtés pour un exposant impair",
          "stepBadge": "Confondre les deux côtés pour un exposant impair",
          "paragraphText": "• Piège : pour un exposant impair, la limite à gauche et la limite à droite sont opposées.\nAffirmer que $\\lim_{x \\to a} \\frac{1}{x - a}$ vaut $+\\infty$ sans préciser le côté est faux : à gauche, elle vaut $-\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p01_q5",
            "type": "mcq",
            "prompt": "Quelle affirmation est correcte ?",
            "options": [
              "$\\lim_{x \\to a, x < a} \\frac{1}{x - a} = +\\infty$",
              "$\\lim_{x \\to a, x > a} \\frac{1}{x - a} = -\\infty$",
              "$\\lim_{x \\to a, x < a} \\frac{1}{x - a} = -\\infty$",
              "$\\lim_{x \\to a} \\frac{1}{x - a} = 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Exposant $1$, impair : à gauche de $a$, la limite est $-\\infty$ ; à droite, elle est $+\\infty$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Lire le signe du dénominateur",
          "stepTheme": "Lire le signe du dénominateur",
          "stepBadge": "Lire le signe du dénominateur",
          "paragraphText": "• Méthode : pour $\\frac{1}{(x - a)^n}$, on étudie le signe du dénominateur près de $a$, puis on inverse.\nPar exemple, $\\lim_{x \\to 0} \\frac{1}{x^2} = +\\infty$ car $x^2$ tend vers $0$ en restant positif.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p01_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 0} \\frac{1}{x^2}$ ?",
            "options": [
              "$-\\infty$",
              "$+\\infty$",
              "$0$",
              "$2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le carré tend vers $0$ par valeurs positives des deux côtés : son inverse tend vers $+\\infty$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p01_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to a} \\frac{1}{(x - a)^2}$ ?",
          "options": [
            "$-\\infty$",
            "$0$",
            "$+\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’exposant $2$ est pair : le dénominateur tend vers $0$ par valeurs positives, la limite est $+\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p01_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to a, x < a} \\frac{1}{(x - a)^3}$ ?",
          "options": [
            "$+\\infty$",
            "$-\\infty$",
            "$0$",
            "$-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’exposant $3$ est impair et l’approche est à gauche : le dénominateur tend vers $0$ par valeurs négatives, la limite est $-\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p01_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 0, x < 0} \\frac{1}{x}$ ?",
          "options": [
            "$+\\infty$",
            "$0$",
            "$1$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "À gauche de $0$, le dénominateur tend vers $0$ par valeurs négatives : la limite de la fonction inverse est $-\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 4, x > 4} \\frac{1}{x - 4}$ ?",
          "options": [
            "$+\\infty$",
            "$-\\infty$",
            "$4$",
            "$0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le premier résultat du corrigé de l’exercice d’application : $+\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p01_q5",
          "type": "mcq",
          "prompt": "Quelle affirmation est correcte ?",
          "options": [
            "$\\lim_{x \\to a, x < a} \\frac{1}{x - a} = +\\infty$",
            "$\\lim_{x \\to a, x > a} \\frac{1}{x - a} = -\\infty$",
            "$\\lim_{x \\to a, x < a} \\frac{1}{x - a} = -\\infty$",
            "$\\lim_{x \\to a} \\frac{1}{x - a} = 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Exposant $1$, impair : à gauche de $a$, la limite est $-\\infty$ ; à droite, elle est $+\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p01_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 0} \\frac{1}{x^2}$ ?",
          "options": [
            "$-\\infty$",
            "$+\\infty$",
            "$0$",
            "$2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le carré tend vers $0$ par valeurs positives des deux côtés : son inverse tend vers $+\\infty$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l08_extension_limite_p02",
      "order": 2,
      "title": "Asymptote verticale",
      "summary": "Reconnaître une asymptote verticale à partir d’une limite infinie en un point.",
      "conceptExplanation": "Le plan est muni d’un repère orthogonal, $a$ est un nombre réel et $f$ est une fonction de courbe représentative $(C_f)$.\nLorsque $\\lim_{x \\to a} f(x)$, ou la limite à droite en $a$, ou la limite à gauche en $a$, est infinie, on dit que la droite d’équation $x = a$ est une asymptote verticale à la courbe $(C_f)$.\nGraphiquement, la courbe se rapproche indéfiniment de cette droite verticale sans la confondre avec une asymptote horizontale, qui concerne les limites à l’infini.",
      "keyRule": "Limite infinie en un point réel $a$ égale asymptote verticale d’équation $x = a$.",
      "formulas": [
        {
          "name": "Asymptote verticale",
          "formula": "x = a"
        }
      ],
      "workedExample": {
        "title": "L’asymptote de la fonction inverse translatée (exemple de la leçon)",
        "statement": "Soit $f$ la fonction définie par $f(x) = \\frac{1}{x + 1}$. Justifie que la droite d’équation $x = -1$ est une asymptote verticale à la courbe de $f$.",
        "methodSteps": [
          "On calcule la limite à droite en $-1$ : $\\lim_{x \\to -1, x > -1} f(x) = +\\infty$.",
          "Cette limite est infinie en le point $-1$."
        ],
        "conclusion": "La droite d’équation $x = -1$ est une asymptote verticale à la courbe de $f$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu’est une asymptote verticale",
          "stepTheme": "Ce qu’est une asymptote verticale",
          "stepBadge": "Ce qu’est une asymptote verticale",
          "paragraphText": "• Définition : lorsque l’une des limites de $f$ en $a$ (bilatérale, à droite ou à gauche) est infinie, la droite d’équation $x = a$ est une asymptote verticale à la courbe $(C_f)$.\nIl suffit qu’une seule de ces limites soit infinie.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p02_q1",
            "type": "mcq",
            "prompt": "La droite d’équation $x = a$ est une asymptote verticale à $(C_f)$ lorsque :",
            "options": [
              "$\\lim_{x \\to +\\infty} f(x) = a$",
              "Une limite de $f$ en $a$ est infinie",
              "$f(a) = 0$",
              "$\\lim_{x \\to a} f(x) = 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition : une limite infinie en le point $a$ donne l’asymptote verticale $x = a$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L’exemple de la fonction en $\\frac{1}{x + 1}$",
          "stepTheme": "L’exemple de la fonction en $\\frac{1}{x + 1}$",
          "stepBadge": "L’exemple de la fonction en $\\frac{1}{x + 1}$",
          "paragraphText": "• Exemple de la leçon : pour $f(x) = \\frac{1}{x + 1}$, on a $\\lim_{x \\to -1, x > -1} f(x) = +\\infty$.\nLa courbe admet donc la droite d’équation $x = -1$ comme asymptote verticale.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p02_q2",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\frac{1}{x + 1}$, quelle droite est asymptote verticale à la courbe ?",
            "options": [
              "$y = -1$",
              "$x = 1$",
              "$x = -1$",
              "$y = 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La limite infinie a lieu en $-1$ : l’asymptote verticale est la droite d’équation $x = -1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Interpréter une limite infinie à gauche",
          "stepTheme": "Interpréter une limite infinie à gauche",
          "stepBadge": "Interpréter une limite infinie à gauche",
          "paragraphText": "• Exercice de fixation : $f$ est une fonction de représentation graphique $(C)$ avec $\\lim_{x \\to 6, x < 6} f(x) = +\\infty$.\nInterprétation : la droite d’équation $x = 6$ est une asymptote verticale à la courbe $(C)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p02_q3",
            "type": "mcq",
            "prompt": "Si $\\lim_{x \\to 6, x < 6} f(x) = +\\infty$, alors graphiquement :",
            "options": [
              "La droite $y = 6$ est asymptote horizontale",
              "La droite $x = 6$ est asymptote verticale à la courbe",
              "La courbe passe par le point de coordonnées $(6 ; 0)$",
              "La courbe admet une asymptote oblique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une limite infinie à gauche en $6$ suffit : la droite $x = 6$ est une asymptote verticale."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une asymptote verticale en $-2$",
          "stepTheme": "Une asymptote verticale en $-2$",
          "stepBadge": "Une asymptote verticale en $-2$",
          "paragraphText": "• Exercice : pour $f(x) = \\frac{1}{(x + 2)^3}$ définie sur $\\mathbb{R}$ privé de $-2$, on a $\\lim_{x \\to -2, x > -2} f(x) = +\\infty$ car l’exposant $3$ est impair et l’approche est à droite.\nLa droite d’équation $x = -2$ est donc une asymptote verticale à la courbe.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p02_q4",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\frac{1}{(x + 2)^3}$, la limite à droite en $-2$ vaut :",
            "options": [
              "$-\\infty$",
              "$0$",
              "$-2$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Exposant impair, approche à droite : le dénominateur tend vers $0$ par valeurs positives, la limite est $+\\infty$, d’où l’asymptote verticale $x = -2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Verticale ou horizontale",
          "stepTheme": "Verticale ou horizontale",
          "stepBadge": "Verticale ou horizontale",
          "paragraphText": "• Piège de l’exercice de renforcement : l’affirmation « si $\\lim_{x \\to -7} f(x) = +\\infty$, alors la droite d’équation $x = -7$ est une asymptote horizontale » est fausse.\nUne limite infinie en un point concerne une asymptote verticale ; l’horizontale concerne une limite finie à l’infini.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p02_q5",
            "type": "mcq",
            "prompt": "Si $\\lim_{x \\to -7} f(x) = +\\infty$, la droite d’équation $x = -7$ est :",
            "options": [
              "Une asymptote horizontale",
              "Une asymptote verticale",
              "La courbe elle-même",
              "Une tangente horizontale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé de l’exercice juge l’affirmation « horizontale » fausse : c’est une asymptote verticale."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Une seule limite infinie suffit",
          "stepTheme": "Une seule limite infinie suffit",
          "stepBadge": "Une seule limite infinie suffit",
          "paragraphText": "• Méthode : pour justifier une asymptote verticale, il suffit d’une limite infinie, même d’un seul côté.\nPour l’exercice précédent en $-2$, la limite à gauche vaut $-\\infty$ et la limite à droite $+\\infty$ : les deux confirment la même asymptote.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p02_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -2, x < -2} \\frac{1}{(x + 2)^3}$ ?",
            "options": [
              "$+\\infty$",
              "$-\\infty$",
              "$0$",
              "$3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Exposant impair, approche à gauche : le dénominateur tend vers $0$ par valeurs négatives, la limite est $-\\infty$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p02_q1",
          "type": "mcq",
          "prompt": "La droite d’équation $x = a$ est une asymptote verticale à $(C_f)$ lorsque :",
          "options": [
            "$\\lim_{x \\to +\\infty} f(x) = a$",
            "Une limite de $f$ en $a$ est infinie",
            "$f(a) = 0$",
            "$\\lim_{x \\to a} f(x) = 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition : une limite infinie en le point $a$ donne l’asymptote verticale $x = a$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p02_q2",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\frac{1}{x + 1}$, quelle droite est asymptote verticale à la courbe ?",
          "options": [
            "$y = -1$",
            "$x = 1$",
            "$x = -1$",
            "$y = 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La limite infinie a lieu en $-1$ : l’asymptote verticale est la droite d’équation $x = -1$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p02_q3",
          "type": "mcq",
          "prompt": "Si $\\lim_{x \\to 6, x < 6} f(x) = +\\infty$, alors graphiquement :",
          "options": [
            "La droite $y = 6$ est asymptote horizontale",
            "La droite $x = 6$ est asymptote verticale à la courbe",
            "La courbe passe par le point de coordonnées $(6 ; 0)$",
            "La courbe admet une asymptote oblique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une limite infinie à gauche en $6$ suffit : la droite $x = 6$ est une asymptote verticale."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p02_q4",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\frac{1}{(x + 2)^3}$, la limite à droite en $-2$ vaut :",
          "options": [
            "$-\\infty$",
            "$0$",
            "$-2$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Exposant impair, approche à droite : le dénominateur tend vers $0$ par valeurs positives, la limite est $+\\infty$, d’où l’asymptote verticale $x = -2$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p02_q5",
          "type": "mcq",
          "prompt": "Si $\\lim_{x \\to -7} f(x) = +\\infty$, la droite d’équation $x = -7$ est :",
          "options": [
            "Une asymptote horizontale",
            "Une asymptote verticale",
            "La courbe elle-même",
            "Une tangente horizontale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé de l’exercice juge l’affirmation « horizontale » fausse : c’est une asymptote verticale."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p02_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -2, x < -2} \\frac{1}{(x + 2)^3}$ ?",
          "options": [
            "$+\\infty$",
            "$-\\infty$",
            "$0$",
            "$3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Exposant impair, approche à gauche : le dénominateur tend vers $0$ par valeurs négatives, la limite est $-\\infty$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l08_extension_limite_p03",
      "order": 3,
      "title": "Limites à l’infini des fonctions élémentaires et asymptote horizontale",
      "summary": "Connaître les limites à l’infini de $x^n$ et de $\\frac{1}{x^n}$, et reconnaître une asymptote horizontale.",
      "conceptExplanation": "Pour une constante $c$, $\\lim_{x \\to +\\infty} c = c$ et $\\lim_{x \\to -\\infty} c = c$ ; et $\\lim_{x \\to +\\infty} x = +\\infty$.\nPour tout entier naturel non nul $n$ : $\\lim_{x \\to +\\infty} x^n = +\\infty$ ; en $-\\infty$, $\\lim_{x \\to -\\infty} x^n = +\\infty$ si $n$ est pair et $-\\infty$ si $n$ est impair ; enfin $\\lim_{x \\to +\\infty} \\frac{1}{x^n} = 0$ et $\\lim_{x \\to -\\infty} \\frac{1}{x^n} = 0$.\nAsymptote horizontale : si $\\lim_{x \\to +\\infty} f(x) = b$ (avec $b$ réel), la droite d’équation $y = b$ est une asymptote horizontale à $(C_f)$ en $+\\infty$ ; de même en $-\\infty$.",
      "keyRule": "À l’infini, $x^n$ suit la parité en $-\\infty$ et $\\frac{1}{x^n}$ tend toujours vers $0$.",
      "formulas": [
        {
          "name": "Puissance en $+\\infty$",
          "formula": "\\lim_{x \\to +\\infty} x^n = +\\infty"
        },
        {
          "name": "Inverse de puissance",
          "formula": "\\lim_{x \\to +\\infty} \\frac{1}{x^n} = 0"
        },
        {
          "name": "Asymptote horizontale",
          "formula": "y = b"
        }
      ],
      "workedExample": {
        "title": "L’asymptote horizontale de la fonction $\\frac{1}{x^3}$ (exemple de la leçon)",
        "statement": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = \\frac{1}{x^3}$, de courbe représentative $(C)$. Justifie que la droite d’équation $y = 0$ est une asymptote horizontale à $(C)$ en $+\\infty$.",
        "methodSteps": [
          "On calcule la limite en $+\\infty$ : $\\lim_{x \\to +\\infty} \\frac{1}{x^3} = 0$.",
          "Cette limite est le nombre réel $0$."
        ],
        "conclusion": "La droite d’équation $y = 0$ est une asymptote horizontale à $(C)$ en $+\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les puissances en $+\\infty$",
          "stepTheme": "Les puissances en $+\\infty$",
          "stepBadge": "Les puissances en $+\\infty$",
          "paragraphText": "• Propriétés : $\\lim_{x \\to +\\infty} x = +\\infty$ et, pour tout entier naturel non nul $n$, $\\lim_{x \\to +\\infty} x^n = +\\infty$.\nUne constante a pour limite elle-même, en $+\\infty$ comme en $-\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p03_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} x^7$ ?",
            "options": [
              "$-\\infty$",
              "$0$",
              "$+\\infty$",
              "$7$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’un des résultats du corrigé de l’exercice de fixation : $+\\infty$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les puissances en $-\\infty$ selon la parité",
          "stepTheme": "Les puissances en $-\\infty$ selon la parité",
          "stepBadge": "Les puissances en $-\\infty$ selon la parité",
          "paragraphText": "• Propriétés : en $-\\infty$, $x^n$ tend vers $+\\infty$ si $n$ est pair et vers $-\\infty$ si $n$ est impair.\nAinsi $\\lim_{x \\to -\\infty} x^6 = +\\infty$ et $\\lim_{x \\to -\\infty} x^{15} = -\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p03_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} x^{15}$ ?",
            "options": [
              "$+\\infty$",
              "$0$",
              "$15$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’exposant $15$ est impair : en $-\\infty$, la limite est $-\\infty$, comme dans le corrigé de l’exercice."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’inverse d’une puissance à l’infini",
          "stepTheme": "L’inverse d’une puissance à l’infini",
          "stepBadge": "L’inverse d’une puissance à l’infini",
          "paragraphText": "• Propriété : pour tout entier naturel non nul $n$, $\\lim_{x \\to +\\infty} \\frac{1}{x^n} = 0$ et $\\lim_{x \\to -\\infty} \\frac{1}{x^n} = 0$.\nLe dénominateur devient immense en valeur absolue, donc le quotient s’écrase vers $0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p03_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} \\frac{1}{x^3}$ ?",
            "options": [
              "$0$",
              "$-\\infty$",
              "$+\\infty$",
              "$-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’inverse d’une puissance tend vers $0$ à l’infini, en $+\\infty$ comme en $-\\infty$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’asymptote horizontale",
          "stepTheme": "L’asymptote horizontale",
          "stepBadge": "L’asymptote horizontale",
          "paragraphText": "• Définition : si $\\lim_{x \\to +\\infty} f(x) = b$ avec $b$ réel, la droite d’équation $y = b$ est une asymptote horizontale à $(C_f)$ en $+\\infty$.\nLa même définition vaut en $-\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p03_q4",
            "type": "mcq",
            "prompt": "Si $\\lim_{x \\to +\\infty} f(x) = -5$, alors en $+\\infty$ la courbe admet :",
            "options": [
              "L’asymptote verticale $x = -5$",
              "L’asymptote horizontale $y = -5$",
              "L’asymptote horizontale $y = 5$",
              "Aucune asymptote"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une limite finie $b$ à l’infini donne l’asymptote horizontale d’équation $y = b$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’exemple de la leçon en $+\\infty$",
          "stepTheme": "L’exemple de la leçon en $+\\infty$",
          "stepBadge": "L’exemple de la leçon en $+\\infty$",
          "paragraphText": "• Exemple : pour $f(x) = \\frac{1}{x^3}$, on a $\\lim_{x \\to +\\infty} f(x) = 0$.\nLa droite d’équation $y = 0$, c’est-à-dire l’axe des abscisses, est une asymptote horizontale à la courbe en $+\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p03_q5",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\frac{1}{x^3}$, l’asymptote horizontale en $+\\infty$ est :",
            "options": [
              "$x = 0$",
              "$y = 3$",
              "$y = 0$",
              "$x = 3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La limite en $+\\infty$ vaut $0$ : l’asymptote horizontale est la droite d’équation $y = 0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La parité ne joue que pour les puissances directes",
          "stepTheme": "La parité ne joue que pour les puissances directes",
          "stepBadge": "La parité ne joue que pour les puissances directes",
          "paragraphText": "• Piège : la parité de $n$ décide de la limite de $x^n$ en $-\\infty$, mais pas de celle de $\\frac{1}{x^n}$, qui vaut $0$ dans tous les cas.\nPar exemple, $\\lim_{x \\to -\\infty} \\frac{1}{x^4} = 0$ et $\\lim_{x \\to +\\infty} \\frac{1}{x^5} = 0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p03_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\frac{1}{x^5}$ ?",
            "options": [
              "$-\\infty$",
              "$5$",
              "$0$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le premier résultat du corrigé de l’exercice de fixation : l’inverse d’une puissance tend vers $0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p03_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} x^7$ ?",
          "options": [
            "$-\\infty$",
            "$0$",
            "$+\\infty$",
            "$7$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’un des résultats du corrigé de l’exercice de fixation : $+\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p03_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} x^{15}$ ?",
          "options": [
            "$+\\infty$",
            "$0$",
            "$15$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’exposant $15$ est impair : en $-\\infty$, la limite est $-\\infty$, comme dans le corrigé de l’exercice."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p03_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} \\frac{1}{x^3}$ ?",
          "options": [
            "$0$",
            "$-\\infty$",
            "$+\\infty$",
            "$-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’inverse d’une puissance tend vers $0$ à l’infini, en $+\\infty$ comme en $-\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p03_q4",
          "type": "mcq",
          "prompt": "Si $\\lim_{x \\to +\\infty} f(x) = -5$, alors en $+\\infty$ la courbe admet :",
          "options": [
            "L’asymptote verticale $x = -5$",
            "L’asymptote horizontale $y = -5$",
            "L’asymptote horizontale $y = 5$",
            "Aucune asymptote"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une limite finie $b$ à l’infini donne l’asymptote horizontale d’équation $y = b$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p03_q5",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\frac{1}{x^3}$, l’asymptote horizontale en $+\\infty$ est :",
          "options": [
            "$x = 0$",
            "$y = 3$",
            "$y = 0$",
            "$x = 3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La limite en $+\\infty$ vaut $0$ : l’asymptote horizontale est la droite d’équation $y = 0$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p03_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\frac{1}{x^5}$ ?",
          "options": [
            "$-\\infty$",
            "$5$",
            "$0$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le premier résultat du corrigé de l’exercice de fixation : l’inverse d’une puissance tend vers $0$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l08_extension_limite_p04",
      "order": 4,
      "title": "Limites de la somme et du produit de deux fonctions",
      "summary": "Appliquer les tableaux d’opérations sur les limites pour une somme et pour un produit, et repérer les formes indéterminées.",
      "conceptExplanation": "Somme : si $f$ tend vers $l$ et $g$ vers $l’$, alors $f + g$ tend vers $l + l’$ ; une limite infinie l’emporte sur une limite finie ; la somme d’une limite $+\\infty$ et d’une limite $-\\infty$ donne un résultat pas immédiat, qu’on appelle forme indéterminée.\nProduit : si $f$ tend vers $l$ et $g$ vers $l’$, alors le produit tend vers $l \\times l’$ ; produit d’une limite infinie par une limite finie non nulle ou infinie : on applique la règle des signes ; le produit d’une limite infinie par une limite $0$ donne un résultat pas immédiat.\nDans les formes indéterminées, une transformation de l’écriture peut permettre de conclure.",
      "keyRule": "Somme et produit se lisent dans les tableaux, sauf les formes indéterminées : infini contre infini pour la somme, infini fois zéro pour le produit.",
      "formulas": [
        {
          "name": "Limite d’une somme",
          "formula": "\\lim_{x \\to a} (f + g)(x) = l + l’"
        },
        {
          "name": "Limite d’un produit",
          "formula": "\\lim_{x \\to a} (f \\times g)(x) = l \\times l’"
        }
      ],
      "workedExample": {
        "title": "Une somme de deux puissances en $-\\infty$ (exercice de fixation)",
        "statement": "Calcule $\\lim_{x \\to -\\infty} (x^7 + x^3)$.",
        "methodSteps": [
          "On calcule chaque limite : $\\lim_{x \\to -\\infty} x^7 = -\\infty$ car l’exposant $7$ est impair.",
          "De même, $\\lim_{x \\to -\\infty} x^3 = -\\infty$.",
          "La somme de deux limites $-\\infty$ est $-\\infty$."
        ],
        "conclusion": "$\\lim_{x \\to -\\infty} (x^7 + x^3) = -\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La limite d’une somme de limites finies",
          "stepTheme": "La limite d’une somme de limites finies",
          "stepBadge": "La limite d’une somme de limites finies",
          "paragraphText": "• Propriété : si $f$ tend vers $l$ et $g$ vers $l’$ (deux réels), alors $f + g$ tend vers $l + l’$.\nExemple de la leçon : $\\lim_{x \\to 0, x > 0} 5 = 5$ et $\\lim_{x \\to 0, x > 0} x = 0$ donnent une somme qui illustre aussi le rôle des limites infinies dans l’exercice suivant.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p04_q1",
            "type": "mcq",
            "prompt": "Si $f$ tend vers $3$ et $g$ vers $-2$ en $a$, alors $f + g$ tend vers :",
            "options": [
              "$1$",
              "$-6$",
              "$5$",
              "$-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On additionne les limites finies : $3 + (-2) = 1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une somme avec une limite infinie",
          "stepTheme": "Une somme avec une limite infinie",
          "stepBadge": "Une somme avec une limite infinie",
          "paragraphText": "• Exercice de fixation : $\\lim_{x \\to 0, x > 0} \\frac{1}{x} = +\\infty$ et $\\lim_{x \\to 0, x > 0} x = 0$.\nD’après le tableau de la somme, $\\lim_{x \\to 0, x > 0} \\left(\\frac{1}{x} + x\\right) = +\\infty$ : l’infini l’emporte sur la limite finie.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p04_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to 0, x > 0} \\left(\\frac{1}{x} + x\\right)$ ?",
            "options": [
              "$0$",
              "$1$",
              "$+\\infty$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une limite $+\\infty$ plus une limite finie donne $+\\infty$, d’après le tableau de la somme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "La forme indéterminée de la somme",
          "stepTheme": "La forme indéterminée de la somme",
          "stepBadge": "La forme indéterminée de la somme",
          "paragraphText": "• Piège : la somme d’une fonction qui tend vers $+\\infty$ et d’une fonction qui tend vers $-\\infty$ donne un résultat pas immédiat.\nOn ne peut pas conclure sans transformer l’écriture de la fonction.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p04_q3",
            "type": "mcq",
            "prompt": "Si $f$ tend vers $+\\infty$ et $g$ vers $-\\infty$ en $a$, la limite de $f + g$ est :",
            "options": [
              "Toujours $0$",
              "Toujours $+\\infty$",
              "Toujours $-\\infty$",
              "Un résultat pas immédiat, qui exige une transformation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le tableau de la somme indique « résultat pas immédiat » pour le couple $+\\infty$ et $-\\infty$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La limite d’un produit et la règle des signes",
          "stepTheme": "La limite d’un produit et la règle des signes",
          "stepBadge": "La limite d’un produit et la règle des signes",
          "paragraphText": "• Propriété : le produit de deux limites infinies ou d’une limite infinie et d’une limite finie non nulle suit la règle des signes.\nExemples de la leçon : $\\lim_{x \\to -\\infty} x^3 = -\\infty$ et la constante $-10$ donnent $\\lim_{x \\to -\\infty} (-10x^3) = +\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p04_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} (-10x^3)$ ?",
            "options": [
              "$+\\infty$",
              "$-\\infty$",
              "$0$",
              "$-10$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le produit de $-10$ par $-\\infty$ donne $+\\infty$ par la règle des signes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un produit de deux puissances",
          "stepTheme": "Un produit de deux puissances",
          "stepBadge": "Un produit de deux puissances",
          "paragraphText": "• Exemple de la leçon : $\\lim_{x \\to -\\infty} x^7 = -\\infty$ et $\\lim_{x \\to -\\infty} x^3 = -\\infty$.\nLeur produit vérifie donc $\\lim_{x \\to -\\infty} x^7 \\times x^3 = +\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p04_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} (x^7 \\times x^3)$ ?",
            "options": [
              "$-\\infty$",
              "$+\\infty$",
              "$0$",
              "$21$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le produit de deux limites $-\\infty$ donne $+\\infty$ par la règle des signes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Lever une indétermination par transformation",
          "stepTheme": "Lever une indétermination par transformation",
          "stepBadge": "Lever une indétermination par transformation",
          "paragraphText": "• Méthode : le produit d’une limite $0$ et d’une limite infinie donne un résultat pas immédiat ; on transforme alors l’écriture.\nExemple du corrigé : $\\frac{1}{x} \\times x^7$ se réécrit $x^6$, et $\\lim_{x \\to +\\infty} x^6 = +\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p04_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\left(\\frac{1}{x} \\times x^7\\right)$ après transformation en $x^6$ ?",
            "options": [
              "$0$",
              "$1$",
              "$-\\infty$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Après simplification, il reste $x^6$, dont la limite en $+\\infty$ est $+\\infty$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p04_q1",
          "type": "mcq",
          "prompt": "Si $f$ tend vers $3$ et $g$ vers $-2$ en $a$, alors $f + g$ tend vers :",
          "options": [
            "$1$",
            "$-6$",
            "$5$",
            "$-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On additionne les limites finies : $3 + (-2) = 1$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p04_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to 0, x > 0} \\left(\\frac{1}{x} + x\\right)$ ?",
          "options": [
            "$0$",
            "$1$",
            "$+\\infty$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une limite $+\\infty$ plus une limite finie donne $+\\infty$, d’après le tableau de la somme."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p04_q3",
          "type": "mcq",
          "prompt": "Si $f$ tend vers $+\\infty$ et $g$ vers $-\\infty$ en $a$, la limite de $f + g$ est :",
          "options": [
            "Toujours $0$",
            "Toujours $+\\infty$",
            "Toujours $-\\infty$",
            "Un résultat pas immédiat, qui exige une transformation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le tableau de la somme indique « résultat pas immédiat » pour le couple $+\\infty$ et $-\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p04_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} (-10x^3)$ ?",
          "options": [
            "$+\\infty$",
            "$-\\infty$",
            "$0$",
            "$-10$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le produit de $-10$ par $-\\infty$ donne $+\\infty$ par la règle des signes."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p04_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} (x^7 \\times x^3)$ ?",
          "options": [
            "$-\\infty$",
            "$+\\infty$",
            "$0$",
            "$21$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le produit de deux limites $-\\infty$ donne $+\\infty$ par la règle des signes."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p04_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\left(\\frac{1}{x} \\times x^7\\right)$ après transformation en $x^6$ ?",
          "options": [
            "$0$",
            "$1$",
            "$-\\infty$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Après simplification, il reste $x^6$, dont la limite en $+\\infty$ est $+\\infty$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l08_extension_limite_p05",
      "order": 5,
      "title": "Limites de l’inverse et du quotient de deux fonctions",
      "summary": "Appliquer les tableaux de l’inverse et du quotient, et repérer leurs formes indéterminées.",
      "conceptExplanation": "Inverse : si $f$ tend vers un réel non nul $l$, alors $\\frac{1}{f}$ tend vers $\\frac{1}{l}$ ; si $f$ tend vers $+\\infty$ ou $-\\infty$, alors $\\frac{1}{f}$ tend vers $0$ ; si $f$ tend vers $0$ en restant positive, $\\frac{1}{f}$ tend vers $+\\infty$, et vers $-\\infty$ si $f$ reste négative.\nQuotient : si $f$ tend vers $l$ et $g$ vers $l’$ non nul, alors $\\frac{f}{g}$ tend vers $\\frac{l}{l’}$ ; un numérateur fini divisé par un dénominateur infini donne $0$ ; les cas $\\frac{0}{0}$ et infini sur infini donnent un résultat pas immédiat.\nRemarque de la leçon : un quotient peut se calculer comme le produit de $f$ par l’inverse de $g$.",
      "keyRule": "Pour un quotient, pense produit par l’inverse : les seuls blocages sont zéro sur zéro et infini sur infini.",
      "formulas": [
        {
          "name": "Limite de l’inverse",
          "formula": "\\lim_{x \\to a} \\frac{1}{f(x)} = \\frac{1}{l}",
          "note": "Si $f$ tend vers $l \\neq 0$."
        },
        {
          "name": "Limite du quotient",
          "formula": "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{l}{l’}",
          "note": "Si $g$ tend vers $l’ \\neq 0$."
        }
      ],
      "workedExample": {
        "title": "Trois quotients de l’exercice de fixation",
        "statement": "Complète : 1) $f$ tend vers $+\\infty$ et $g$ vers $-6$ en $3$, limite de $\\frac{f}{g}$ en $3$ ; 2) $f$ tend vers $15$ et $g$ vers $-\\infty$ en $+\\infty$, limite de $\\frac{f}{g}$ ; 3) $f$ tend vers $15$ et $g$ vers $-3$ en $-\\infty$, limite de $\\frac{f}{g}$.",
        "methodSteps": [
          "Cas 1 : infini divisé par $-6$ donne $-\\infty$ par la règle des signes.",
          "Cas 2 : un numérateur fini divisé par un dénominateur infini donne $0$.",
          "Cas 3 : $\\frac{15}{-3} = -5$."
        ],
        "conclusion": "Les trois limites sont $-\\infty$, $0$ et $-5$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L’inverse d’une limite finie non nulle",
          "stepTheme": "L’inverse d’une limite finie non nulle",
          "stepBadge": "L’inverse d’une limite finie non nulle",
          "paragraphText": "• Propriété : si $f$ tend vers $l \\neq 0$, alors $\\frac{1}{f}$ tend vers $\\frac{1}{l}$.\nExercice de fixation : $x^2 + 3$ tend vers $4$ en $-1$, donc $\\frac{1}{x^2 + 3}$ tend vers une valeur finie en $-1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p05_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -1} \\frac{1}{x^2 + 3}$ ?",
            "options": [
              "$4$",
              "$\\frac{1}{4}$",
              "$0$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La fonction $x^2 + 3$ tend vers $4$ en $-1$ ; son inverse tend vers $\\frac{1}{4}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’inverse d’une limite infinie",
          "stepTheme": "L’inverse d’une limite infinie",
          "stepBadge": "L’inverse d’une limite infinie",
          "paragraphText": "• Propriété : si $f$ tend vers $+\\infty$ ou $-\\infty$, alors $\\frac{1}{f}$ tend vers $0$.\nExercice de fixation : $x^2 + 3$ tend vers $+\\infty$ en $-\\infty$, donc son inverse tend vers $0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p05_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} \\frac{1}{x^2 + 3}$ ?",
            "options": [
              "$+\\infty$",
              "$\\frac{1}{3}$",
              "$0$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le dénominateur tend vers $+\\infty$ : l’inverse tend vers $0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’inverse d’une limite nulle",
          "stepTheme": "L’inverse d’une limite nulle",
          "stepBadge": "L’inverse d’une limite nulle",
          "paragraphText": "• Propriété : si $f$ tend vers $0$ en restant positive, $\\frac{1}{f}$ tend vers $+\\infty$ ; si $f$ tend vers $0$ en restant négative, $\\frac{1}{f}$ tend vers $-\\infty$.\nExercice de fixation : $\\lim_{x \\to 0, x > 0} \\frac{1}{x} = +\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p05_q3",
            "type": "mcq",
            "prompt": "Si $f$ tend vers $0$ en restant strictement négative en $a$, alors $\\frac{1}{f}$ tend vers :",
            "options": [
              "$+\\infty$",
              "$0$",
              "$-\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le dénominateur tend vers $0$ par valeurs négatives : l’inverse tend vers $-\\infty$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un quotient infini sur fini",
          "stepTheme": "Un quotient infini sur fini",
          "stepBadge": "Un quotient infini sur fini",
          "paragraphText": "• Exercice de fixation : $f$ tend vers $+\\infty$ et $g$ vers $-6$ en $3$.\nLe quotient $\\frac{f}{g}$ suit la règle des signes appliquée au produit par l’inverse.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p05_q4",
            "type": "mcq",
            "prompt": "Si $f$ tend vers $+\\infty$ et $g$ vers $-6$ en $3$, alors $\\frac{f}{g}$ tend vers :",
            "options": [
              "$+\\infty$",
              "$0$",
              "$-6$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Infini positif divisé par un nombre négatif : la limite est $-\\infty$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un quotient fini sur infini",
          "stepTheme": "Un quotient fini sur infini",
          "stepBadge": "Un quotient fini sur infini",
          "paragraphText": "• Exercice de fixation : $f$ tend vers $15$ et $g$ vers $-\\infty$ en $+\\infty$.\nUn numérateur fini divisé par un dénominateur qui grandit sans borne donne une limite nulle.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p05_q5",
            "type": "mcq",
            "prompt": "Si $f$ tend vers $15$ et $g$ vers $-\\infty$ en $+\\infty$, alors $\\frac{f}{g}$ tend vers :",
            "options": [
              "$0$",
              "$15$",
              "$-\\infty$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Fini divisé par infini donne $0$, d’après le tableau du quotient."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les formes indéterminées du quotient",
          "stepTheme": "Les formes indéterminées du quotient",
          "stepBadge": "Les formes indéterminées du quotient",
          "paragraphText": "• Piège : les cas zéro sur zéro et infini sur infini donnent un résultat pas immédiat dans le tableau du quotient.\nIl faut alors transformer l’écriture, par exemple en factorisant ou en simplifiant, avant de conclure.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p05_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces situations est une forme indéterminée du quotient ?",
            "options": [
              "$f$ tend vers $15$ et $g$ vers $-3$",
              "$f$ tend vers $0$ et $g$ vers $0$",
              "$f$ tend vers $15$ et $g$ vers $-\\infty$",
              "$f$ tend vers $+\\infty$ et $g$ vers $-6$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Zéro sur zéro figure dans le tableau comme « résultat pas immédiat » ; les trois autres cas se concluent directement."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p05_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -1} \\frac{1}{x^2 + 3}$ ?",
          "options": [
            "$4$",
            "$\\frac{1}{4}$",
            "$0$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La fonction $x^2 + 3$ tend vers $4$ en $-1$ ; son inverse tend vers $\\frac{1}{4}$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p05_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} \\frac{1}{x^2 + 3}$ ?",
          "options": [
            "$+\\infty$",
            "$\\frac{1}{3}$",
            "$0$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le dénominateur tend vers $+\\infty$ : l’inverse tend vers $0$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p05_q3",
          "type": "mcq",
          "prompt": "Si $f$ tend vers $0$ en restant strictement négative en $a$, alors $\\frac{1}{f}$ tend vers :",
          "options": [
            "$+\\infty$",
            "$0$",
            "$-\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le dénominateur tend vers $0$ par valeurs négatives : l’inverse tend vers $-\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p05_q4",
          "type": "mcq",
          "prompt": "Si $f$ tend vers $+\\infty$ et $g$ vers $-6$ en $3$, alors $\\frac{f}{g}$ tend vers :",
          "options": [
            "$+\\infty$",
            "$0$",
            "$-6$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Infini positif divisé par un nombre négatif : la limite est $-\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p05_q5",
          "type": "mcq",
          "prompt": "Si $f$ tend vers $15$ et $g$ vers $-\\infty$ en $+\\infty$, alors $\\frac{f}{g}$ tend vers :",
          "options": [
            "$0$",
            "$15$",
            "$-\\infty$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Fini divisé par infini donne $0$, d’après le tableau du quotient."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p05_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces situations est une forme indéterminée du quotient ?",
          "options": [
            "$f$ tend vers $15$ et $g$ vers $-3$",
            "$f$ tend vers $0$ et $g$ vers $0$",
            "$f$ tend vers $15$ et $g$ vers $-\\infty$",
            "$f$ tend vers $+\\infty$ et $g$ vers $-6$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Zéro sur zéro figure dans le tableau comme « résultat pas immédiat » ; les trois autres cas se concluent directement."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l08_extension_limite_p06",
      "order": 6,
      "title": "Limites à l’infini des polynômes et des fonctions rationnelles",
      "summary": "À l’infini, ne garder que le terme de plus haut degré d’un polynôme et le quotient des monômes de plus hauts degrés d’une fonction rationnelle.",
      "conceptExplanation": "Fonctions polynômes : la limite en l’infini d’une fonction polynôme $f$ est la limite en l’infini du monôme de plus haut degré de $f(x)$. Ainsi $\\lim_{x \\to +\\infty} (a_n x^n + \\ldots + a_0) = \\lim_{x \\to +\\infty} a_n x^n$, avec $a_n \\neq 0$, et de même en $-\\infty$.\nFonctions rationnelles : la limite en l’infini d’une fonction rationnelle est la limite en l’infini du quotient des monômes de plus hauts degrés du numérateur et du dénominateur.\nAttention : ces propriétés ne valent qu’à l’infini, pas en un point fini.",
      "keyRule": "À l’infini, un polynôme se comporte comme son terme de plus haut degré, et une rationnelle comme le quotient des deux termes dominants.",
      "formulas": [
        {
          "name": "Polynôme à l’infini",
          "formula": "\\lim_{x \\to +\\infty} (a_n x^n + \\ldots + a_0) = \\lim_{x \\to +\\infty} a_n x^n"
        },
        {
          "name": "Rationnelle à l’infini",
          "formula": "\\lim_{x \\to +\\infty} \\frac{a_n x^n + \\ldots}{b_p x^p + \\ldots} = \\lim_{x \\to +\\infty} \\frac{a_n x^n}{b_p x^p}"
        }
      ],
      "workedExample": {
        "title": "Un polynôme en $+\\infty$ (exercice de fixation)",
        "statement": "Calcule $\\lim_{x \\to +\\infty} (-4x^3 + 2x^2 - 6x + 8)$.",
        "methodSteps": [
          "Le terme de plus haut degré du polynôme est $-4x^3$.",
          "On applique la propriété : la limite cherchée est celle de $-4x^3$ en $+\\infty$.",
          "Comme $x^3$ tend vers $+\\infty$, $-4x^3$ tend vers $-\\infty$."
        ],
        "conclusion": "$\\lim_{x \\to +\\infty} (-4x^3 + 2x^2 - 6x + 8) = -\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le terme de plus haut degré d’un polynôme",
          "stepTheme": "Le terme de plus haut degré d’un polynôme",
          "stepBadge": "Le terme de plus haut degré d’un polynôme",
          "paragraphText": "• Propriété : la limite en l’infini d’une fonction polynôme est la limite en l’infini de son monôme de plus haut degré.\nLes autres termes ne comptent pas pour la limite à l’infini.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p06_q1",
            "type": "mcq",
            "prompt": "Pour calculer la limite en $+\\infty$ d’un polynôme, on ne garde que :",
            "options": [
              "Le terme constant",
              "Le monôme de plus haut degré",
              "Le terme de degré $1$",
              "La somme de tous les coefficients"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la propriété de la leçon : seul le terme de plus haut degré décide de la limite à l’infini."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un polynôme dominé par un degré 7",
          "stepTheme": "Un polynôme dominé par un degré 7",
          "stepBadge": "Un polynôme dominé par un degré 7",
          "paragraphText": "• Exercice de fixation : $\\lim_{x \\to -\\infty} (-4x^3 + 2x^2 - 6x^7 + 8x - 9) = \\lim_{x \\to -\\infty} (-6x^7)$.\nComme $x^7$ tend vers $-\\infty$ en $-\\infty$, le produit par $-6$ donne la limite cherchée.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p06_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} (-4x^3 + 2x^2 - 6x^7 + 8x - 9)$ ?",
            "options": [
              "$-\\infty$",
              "$0$",
              "$+\\infty$",
              "$-6$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le terme dominant est $-6x^7$ ; en $-\\infty$, $x^7$ tend vers $-\\infty$ et le produit par $-6$ donne $+\\infty$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le quotient des monômes dominants",
          "stepTheme": "Le quotient des monômes dominants",
          "stepBadge": "Le quotient des monômes dominants",
          "paragraphText": "• Propriété : la limite en l’infini d’une fonction rationnelle est la limite du quotient des monômes de plus hauts degrés du numérateur et du dénominateur.\nOn simplifie ce quotient de puissances avant de conclure.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p06_q3",
            "type": "mcq",
            "prompt": "Pour une fonction rationnelle, la limite à l’infini est celle :",
            "options": [
              "Du numérateur seul",
              "Du quotient des monômes de plus hauts degrés",
              "Du dénominateur seul",
              "Des termes constants"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Numérateur et dénominateur ne comptent que par leur monôme de plus haut degré."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une rationnelle qui tend vers l’infini",
          "stepTheme": "Une rationnelle qui tend vers l’infini",
          "stepBadge": "Une rationnelle qui tend vers l’infini",
          "paragraphText": "• Exercice de fixation : $\\lim_{x \\to -\\infty} \\frac{3x^5 - 6x + 8}{5x^3 + 2x^2 - x + 7} = \\lim_{x \\to -\\infty} \\frac{3x^5}{5x^3} = \\lim_{x \\to -\\infty} \\frac{3}{5}x^2$.\nUn carré tend vers $+\\infty$ en $-\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p06_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} \\frac{3x^5 - 6x + 8}{5x^3 + 2x^2 - x + 7}$ ?",
            "options": [
              "$0$",
              "$\\frac{3}{5}$",
              "$-\\infty$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Après simplification, il reste $\\frac{3}{5}x^2$, qui tend vers $+\\infty$ en $-\\infty$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une rationnelle qui tend vers 0",
          "stepTheme": "Une rationnelle qui tend vers 0",
          "stepBadge": "Une rationnelle qui tend vers 0",
          "paragraphText": "• Exercice de fixation : $\\lim_{x \\to +\\infty} \\frac{3x + 8}{2x^2 - x + 7} = \\lim_{x \\to +\\infty} \\frac{3x}{2x^2} = \\lim_{x \\to +\\infty} \\frac{3}{2x}$.\nLe degré du dénominateur dépasse celui du numérateur : la limite est nulle.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p06_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\frac{3x + 8}{2x^2 - x + 7}$ ?",
            "options": [
              "$\\frac{3}{2}$",
              "$0$",
              "$+\\infty$",
              "$-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le quotient dominant $\\frac{3}{2x}$ tend vers $0$ en $+\\infty$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le terme dominant seulement à l’infini",
          "stepTheme": "Le terme dominant seulement à l’infini",
          "stepBadge": "Le terme dominant seulement à l’infini",
          "paragraphText": "• Piège de l’exercice de renforcement : l’égalité $\\lim_{x \\to -1} (3x^2 + 2x - 8) = \\lim_{x \\to -1} 3x^2$ est fausse.\nLa propriété du terme de plus haut degré ne s’applique qu’aux limites en $+\\infty$ ou en $-\\infty$, jamais en un point fini comme $-1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p06_q6",
            "type": "mcq",
            "prompt": "L’égalité $\\lim_{x \\to -1} (3x^2 + 2x - 8) = \\lim_{x \\to -1} (3x^2)$ est :",
            "options": [
              "Vraie, par la propriété des polynômes",
              "Fausse, car la propriété ne vaut qu’à l’infini",
              "Vraie, car $-1$ est un entier",
              "Fausse, car $3x^2$ n’est pas un polynôme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé juge cette affirmation fausse : en un point fini, on ne peut pas supprimer les autres termes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p06_q1",
          "type": "mcq",
          "prompt": "Pour calculer la limite en $+\\infty$ d’un polynôme, on ne garde que :",
          "options": [
            "Le terme constant",
            "Le monôme de plus haut degré",
            "Le terme de degré $1$",
            "La somme de tous les coefficients"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la propriété de la leçon : seul le terme de plus haut degré décide de la limite à l’infini."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p06_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} (-4x^3 + 2x^2 - 6x^7 + 8x - 9)$ ?",
          "options": [
            "$-\\infty$",
            "$0$",
            "$+\\infty$",
            "$-6$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le terme dominant est $-6x^7$ ; en $-\\infty$, $x^7$ tend vers $-\\infty$ et le produit par $-6$ donne $+\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p06_q3",
          "type": "mcq",
          "prompt": "Pour une fonction rationnelle, la limite à l’infini est celle :",
          "options": [
            "Du numérateur seul",
            "Du quotient des monômes de plus hauts degrés",
            "Du dénominateur seul",
            "Des termes constants"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Numérateur et dénominateur ne comptent que par leur monôme de plus haut degré."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p06_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} \\frac{3x^5 - 6x + 8}{5x^3 + 2x^2 - x + 7}$ ?",
          "options": [
            "$0$",
            "$\\frac{3}{5}$",
            "$-\\infty$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Après simplification, il reste $\\frac{3}{5}x^2$, qui tend vers $+\\infty$ en $-\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p06_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} \\frac{3x + 8}{2x^2 - x + 7}$ ?",
          "options": [
            "$\\frac{3}{2}$",
            "$0$",
            "$+\\infty$",
            "$-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le quotient dominant $\\frac{3}{2x}$ tend vers $0$ en $+\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p06_q6",
          "type": "mcq",
          "prompt": "L’égalité $\\lim_{x \\to -1} (3x^2 + 2x - 8) = \\lim_{x \\to -1} (3x^2)$ est :",
          "options": [
            "Vraie, par la propriété des polynômes",
            "Fausse, car la propriété ne vaut qu’à l’infini",
            "Vraie, car $-1$ est un entier",
            "Fausse, car $3x^2$ n’est pas un polynôme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé juge cette affirmation fausse : en un point fini, on ne peut pas supprimer les autres termes."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l08_extension_limite_p07",
      "order": 7,
      "title": "Propriétés de comparaison",
      "summary": "Conclure à une limite infinie en minorant ou en majorant la fonction par une fonction de limite infinie connue.",
      "conceptExplanation": "Propriété 1 : soit $f$ une fonction et $a$ un réel ou l’infini. S’il existe une fonction $g$ telle que $g \\leq f$ et $\\lim_{x \\to a} g(x) = +\\infty$, alors $\\lim_{x \\to a} f(x) = +\\infty$. De même, s’il existe une fonction $g$ telle que $f \\leq g$ et $\\lim_{x \\to a} g(x) = -\\infty$, alors $\\lim_{x \\to a} f(x) = -\\infty$.\nLa méthode consiste donc à encadrer $f$ par des fonctions simples dont on connaît les limites : minorer pour obtenir $+\\infty$, majorer pour obtenir $-\\infty$.",
      "keyRule": "Pour forcer une limite infinie, encadre la fonction du bon côté : en dessous pour $+\\infty$, au-dessus pour $-\\infty$.",
      "formulas": [
        {
          "name": "Minoration et limite $+\\infty$",
          "formula": "g \\leq f \\text{ et } \\lim_{x \\to a} g(x) = +\\infty \\Rightarrow \\lim_{x \\to a} f(x) = +\\infty"
        },
        {
          "name": "Majoration et limite $-\\infty$",
          "formula": "f \\leq g \\text{ et } \\lim_{x \\to a} g(x) = -\\infty \\Rightarrow \\lim_{x \\to a} f(x) = -\\infty"
        }
      ],
      "workedExample": {
        "title": "Encadrer la fonction $2x + \\cos(x^2)$ (exercice de fixation)",
        "statement": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = 2x + \\cos(x^2)$. Calcule $\\lim_{x \\to -\\infty} f(x)$ et $\\lim_{x \\to +\\infty} f(x)$.",
        "methodSteps": [
          "Pour tout réel $x$, $-1 \\leq \\cos(x^2) \\leq 1$, donc $2x - 1 \\leq f(x) \\leq 2x + 1$.",
          "En $-\\infty$ : $f(x) \\leq 2x + 1$ et $\\lim_{x \\to -\\infty} (2x + 1) = -\\infty$, donc $\\lim_{x \\to -\\infty} f(x) = -\\infty$.",
          "En $+\\infty$ : $2x - 1 \\leq f(x)$ et $\\lim_{x \\to +\\infty} (2x - 1) = +\\infty$, donc $\\lim_{x \\to +\\infty} f(x) = +\\infty$."
        ],
        "conclusion": "L’encadrement donne les deux limites : $-\\infty$ en $-\\infty$ et $+\\infty$ en $+\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Minorée par une fonction qui tend vers $+\\infty$",
          "stepTheme": "Minorée par une fonction qui tend vers $+\\infty$",
          "stepBadge": "Minorée par une fonction qui tend vers $+\\infty$",
          "paragraphText": "• Propriété : s’il existe une fonction $g$ telle que $g \\leq f$ et $\\lim_{x \\to a} g(x) = +\\infty$, alors $\\lim_{x \\to a} f(x) = +\\infty$.\nLa fonction $f$, au-dessus de $g$, est entraînée vers $+\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p07_q1",
            "type": "mcq",
            "prompt": "Si $g \\leq f$ et $\\lim_{x \\to a} g(x) = +\\infty$, alors la limite de $f$ en $a$ est :",
            "options": [
              "$0$",
              "$+\\infty$",
              "$-\\infty$",
              "Indéterminée dans tous les cas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la première propriété de comparaison : $f$ est forcée vers $+\\infty$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Majorée par une fonction qui tend vers $-\\infty$",
          "stepTheme": "Majorée par une fonction qui tend vers $-\\infty$",
          "stepBadge": "Majorée par une fonction qui tend vers $-\\infty$",
          "paragraphText": "• Propriété : s’il existe une fonction $g$ telle que $f \\leq g$ et $\\lim_{x \\to a} g(x) = -\\infty$, alors $\\lim_{x \\to a} f(x) = -\\infty$.\nLa fonction $f$, en dessous de $g$, est entraînée vers $-\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p07_q2",
            "type": "mcq",
            "prompt": "Si $f \\leq g$ et $\\lim_{x \\to a} g(x) = -\\infty$, alors la limite de $f$ en $a$ est :",
            "options": [
              "$+\\infty$",
              "$0$",
              "$-\\infty$",
              "Égale à celle de $f$ en $0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la seconde propriété de comparaison : $f$ est forcée vers $-\\infty$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Encadrer grâce au cosinus",
          "stepTheme": "Encadrer grâce au cosinus",
          "stepBadge": "Encadrer grâce au cosinus",
          "paragraphText": "• Méthode de l’exercice de fixation : pour $f(x) = 2x + \\cos(x^2)$, on utilise $-1 \\leq \\cos(x^2) \\leq 1$.\nOn obtient l’encadrement $2x - 1 \\leq f(x) \\leq 2x + 1$, valable pour tout réel $x$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p07_q3",
            "type": "mcq",
            "prompt": "Pour tout réel $x$, quel encadrement de $f(x) = 2x + \\cos(x^2)$ est correct ?",
            "options": [
              "$2x \\leq f(x) \\leq 2x$",
              "$f(x) \\leq 2x - 1$",
              "$2x - 1 \\leq f(x) \\leq 2x + 1$",
              "$f(x) \\geq 2x + 1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le cosinus est compris entre $-1$ et $1$ : en ajoutant $2x$, on obtient l’encadrement correct."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La limite en $-\\infty$ par majoration",
          "stepTheme": "La limite en $-\\infty$ par majoration",
          "stepBadge": "La limite en $-\\infty$ par majoration",
          "paragraphText": "• Exemple du corrigé : $f(x) \\leq 2x + 1$ pour tout réel $x$, et $\\lim_{x \\to -\\infty} (2x + 1) = -\\infty$.\nOn conclut par comparaison que $\\lim_{x \\to -\\infty} f(x) = -\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p07_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to -\\infty} (2x + \\cos(x^2))$ ?",
            "options": [
              "$+\\infty$",
              "$-\\infty$",
              "$0$",
              "$-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La majoration par $2x + 1$, qui tend vers $-\\infty$, force la limite de $f$ vers $-\\infty$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La limite en $+\\infty$ par minoration",
          "stepTheme": "La limite en $+\\infty$ par minoration",
          "stepBadge": "La limite en $+\\infty$ par minoration",
          "paragraphText": "• Exemple du corrigé : $2x - 1 \\leq f(x)$ pour tout réel $x$, et $\\lim_{x \\to +\\infty} (2x - 1) = +\\infty$.\nOn conclut par comparaison que $\\lim_{x \\to +\\infty} f(x) = +\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p07_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{x \\to +\\infty} (2x + \\cos(x^2))$ ?",
            "options": [
              "$0$",
              "$1$",
              "$-\\infty$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La minoration par $2x - 1$, qui tend vers $+\\infty$, force la limite de $f$ vers $+\\infty$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le bon sens de l’inégalité",
          "stepTheme": "Le bon sens de l’inégalité",
          "stepBadge": "Le bon sens de l’inégalité",
          "paragraphText": "• Piège : pour conclure vers $+\\infty$, il faut minorer $f$ ; pour conclure vers $-\\infty$, il faut majorer $f$.\nSavoir seulement que $f \\leq g$ avec $g$ qui tend vers $+\\infty$ ne donne aucune conclusion sur $f$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l08_extension_limite_p07_q6",
            "type": "mcq",
            "prompt": "Si $f \\leq g$ et $\\lim_{x \\to a} g(x) = +\\infty$, que peut-on conclure pour $f$ ?",
            "options": [
              "$f$ tend vers $+\\infty$",
              "Rien : le sens de l’inégalité ne permet pas de conclure",
              "$f$ tend vers $-\\infty$",
              "$f$ tend vers $0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La comparaison vers $+\\infty$ exige une minoration de $f$, pas une majoration."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p07_q1",
          "type": "mcq",
          "prompt": "Si $g \\leq f$ et $\\lim_{x \\to a} g(x) = +\\infty$, alors la limite de $f$ en $a$ est :",
          "options": [
            "$0$",
            "$+\\infty$",
            "$-\\infty$",
            "Indéterminée dans tous les cas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la première propriété de comparaison : $f$ est forcée vers $+\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p07_q2",
          "type": "mcq",
          "prompt": "Si $f \\leq g$ et $\\lim_{x \\to a} g(x) = -\\infty$, alors la limite de $f$ en $a$ est :",
          "options": [
            "$+\\infty$",
            "$0$",
            "$-\\infty$",
            "Égale à celle de $f$ en $0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la seconde propriété de comparaison : $f$ est forcée vers $-\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p07_q3",
          "type": "mcq",
          "prompt": "Pour tout réel $x$, quel encadrement de $f(x) = 2x + \\cos(x^2)$ est correct ?",
          "options": [
            "$2x \\leq f(x) \\leq 2x$",
            "$f(x) \\leq 2x - 1$",
            "$2x - 1 \\leq f(x) \\leq 2x + 1$",
            "$f(x) \\geq 2x + 1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le cosinus est compris entre $-1$ et $1$ : en ajoutant $2x$, on obtient l’encadrement correct."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p07_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to -\\infty} (2x + \\cos(x^2))$ ?",
          "options": [
            "$+\\infty$",
            "$-\\infty$",
            "$0$",
            "$-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La majoration par $2x + 1$, qui tend vers $-\\infty$, force la limite de $f$ vers $-\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p07_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{x \\to +\\infty} (2x + \\cos(x^2))$ ?",
          "options": [
            "$0$",
            "$1$",
            "$-\\infty$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La minoration par $2x - 1$, qui tend vers $+\\infty$, force la limite de $f$ vers $+\\infty$."
        },
        {
          "id": "premiere_d_maths_numerique_l08_extension_limite_p07_q6",
          "type": "mcq",
          "prompt": "Si $f \\leq g$ et $\\lim_{x \\to a} g(x) = +\\infty$, que peut-on conclure pour $f$ ?",
          "options": [
            "$f$ tend vers $+\\infty$",
            "Rien : le sens de l’inégalité ne permet pas de conclure",
            "$f$ tend vers $-\\infty$",
            "$f$ tend vers $0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La comparaison vers $+\\infty$ exige une minoration de $f$, pas une majoration."
        }
      ]
    }
  ]
};
