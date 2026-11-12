import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Programme de Terminale A fourni par l'équipe KONAN (pas de PDF officiel), vérifié et corrigé » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_A_L01_LIMITES_DERIVATION: CurriculumChapter = {
  "id": "terminale_a_maths_numerique_l01_limites_derivation",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 1,
  "title": "Leçon 1 : Limites et dérivation des fonctions",
  "summary": "Limites à l'infini des fonctions de référence, des polynômes et des fonctions rationnelles, asymptotes, dérivées usuelles et sens de variation.",
  "officialVolumeHours": 12,
  "contentVersion": 2,
  "source": "Programme de Terminale A fourni par l'équipe KONAN (pas de PDF officiel), vérifié et corrigé",
  "points": [
    {
      "id": "terminale_a_maths_numerique_l01_limites_derivation_p01",
      "order": 1,
      "title": "Limites à l'infini : fonctions de référence et polynômes",
      "summary": "Les limites de $x^n$ et de $\\dfrac{1}{x^n}$, puis la règle du terme de plus haut degré.",
      "conceptExplanation": "Pour $n$ entier naturel non nul :\n- en $+\\infty$ : $\\lim\\limits_{x\\to+\\infty}x^n=+\\infty$ ;\n- en $-\\infty$ : si $n$ est pair ($x^2$, $x^4$…), $\\lim\\limits_{x\\to-\\infty}x^n=+\\infty$ ; si $n$ est impair ($x$, $x^3$…), $\\lim\\limits_{x\\to-\\infty}x^n=-\\infty$ ;\n- inverse : $\\lim\\limits_{x\\to+\\infty}\\dfrac{1}{x^n}=0$ et $\\lim\\limits_{x\\to-\\infty}\\dfrac{1}{x^n}=0$.\n\nMultiplier par un nombre $k$ : si $k>0$ le signe de l'infini est conservé, si $k<0$ il change. Par exemple $\\lim\\limits_{x\\to+\\infty}(-2x^3)=-\\infty$.\n\nRègle d'or pour un polynôme : en $+\\infty$ ou en $-\\infty$, la limite d'un polynôme est celle de son terme de plus haut degré.\nExemple : $\\lim\\limits_{x\\to-\\infty}(3x^3-5x^2+2)=\\lim\\limits_{x\\to-\\infty}3x^3=-\\infty$.",
      "keyRule": "En $\\pm\\infty$, un polynôme a la même limite que son terme de plus haut degré.",
      "formulas": [
        {
          "name": "Polynôme",
          "formula": "\\lim_{x\\to\\pm\\infty}(a_nx^n+\\dots+a_0)=\\lim_{x\\to\\pm\\infty}a_nx^n"
        }
      ],
      "workedExample": {
        "title": "Limite d'un polynôme",
        "statement": "Calcule $\\lim\\limits_{x\\to-\\infty}(-4x^2+x+7)$.",
        "methodSteps": [
          "Le terme de plus haut degré est $-4x^2$.",
          "$\\lim\\limits_{x\\to-\\infty}x^2=+\\infty$ (exposant pair).",
          "On multiplie par $-4<0$ : le signe change."
        ],
        "conclusion": "$\\lim\\limits_{x\\to-\\infty}(-4x^2+x+7)=-\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Puissances en +∞",
          "stepTheme": "Puissances en +∞",
          "stepBadge": "Puissances en +∞",
          "paragraphText": "Pour $n\\geq1$, $\\lim\\limits_{x\\to+\\infty}x^n=+\\infty$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}x^4$ ?",
            "options": [
              "$0$",
              "$+\\infty$",
              "$4$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une puissance de $x$ grandit sans limite quand $x$ tend vers $+\\infty$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Exposant impair en −∞",
          "stepTheme": "Exposant impair en −∞",
          "stepBadge": "Exposant impair en −∞",
          "paragraphText": "En $-\\infty$, $x^n$ tend vers $-\\infty$ si $n$ est impair.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to-\\infty}x^3$ ?",
            "options": [
              "$+\\infty$",
              "$0$",
              "$-\\infty$",
              "$3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$3$ est impair : un nombre négatif au cube reste négatif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Exposant pair en −∞",
          "stepTheme": "Exposant pair en −∞",
          "stepBadge": "Exposant pair en −∞",
          "paragraphText": "En $-\\infty$, $x^n$ tend vers $+\\infty$ si $n$ est pair.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to-\\infty}x^2$ ?",
            "options": [
              "$+\\infty$",
              "$-\\infty$",
              "$0$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2$ est pair : $x^2$ est toujours positif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'inverse",
          "stepTheme": "L'inverse",
          "stepBadge": "L'inverse",
          "paragraphText": "$\\lim\\limits_{x\\to\\pm\\infty}\\dfrac{1}{x^n}=0$ : l'inverse d'un très grand nombre est très petit.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\dfrac{1}{x^2}$ ?",
            "options": [
              "$+\\infty$",
              "$1$",
              "$-\\infty$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le dénominateur devient immense, donc le quotient tend vers $0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le terme de plus haut degré",
          "stepTheme": "Le terme de plus haut degré",
          "stepBadge": "Le terme de plus haut degré",
          "paragraphText": "Pour un polynôme en $\\pm\\infty$, on ne garde que le terme de plus haut degré.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q5",
            "type": "mcq",
            "prompt": "Pour calculer $\\lim\\limits_{x\\to+\\infty}(5x^2-3x+1)$, quel terme suffit-il de garder ?",
            "options": [
              "$5x^2$",
              "$-3x$",
              "$1$",
              "$-3x+1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le terme de plus haut degré impose sa limite au polynôme."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un polynôme en +∞",
          "stepTheme": "Un polynôme en +∞",
          "stepBadge": "Un polynôme en +∞",
          "paragraphText": "$\\lim\\limits_{x\\to+\\infty}(-2x^3+5x^2-1)=\\lim\\limits_{x\\to+\\infty}(-2x^3)=-\\infty$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q6",
            "type": "mcq",
            "prompt": "Quelle est la limite en $+\\infty$ du polynôme $f(x)=-2x^3+5x^2-1$ ?",
            "options": [
              "$+\\infty$",
              "$-\\infty$",
              "$-2$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On garde $-2x^3$ : $x^3\\to+\\infty$ et on multiplie par $-2<0$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un polynôme en −∞",
          "stepTheme": "Un polynôme en −∞",
          "stepBadge": "Un polynôme en −∞",
          "paragraphText": "$\\lim\\limits_{x\\to-\\infty}(3x^3-5x^2+2)=\\lim\\limits_{x\\to-\\infty}3x^3=-\\infty$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q7",
            "type": "mcq",
            "prompt": "Quelle est la limite en $-\\infty$ du polynôme $g(x)=3x^3-5x^2+2$ ?",
            "options": [
              "$+\\infty$",
              "$3$",
              "$-\\infty$",
              "$2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x^3\\to-\\infty$ en $-\\infty$, et $3>0$ garde le signe."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Attention au signe",
          "stepTheme": "Attention au signe",
          "stepBadge": "Attention au signe",
          "paragraphText": "Avec un coefficient négatif, le signe de l'infini change : $-4x^2\\to-\\infty$ en $-\\infty$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q8",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to-\\infty}(-4x^2+x+7)$ ?",
            "options": [
              "$+\\infty$",
              "$-4$",
              "$7$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x^2\\to+\\infty$ (exposant pair), puis $-4<0$ change le signe : $-\\infty$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}x^4$ ?",
          "options": [
            "$0$",
            "$+\\infty$",
            "$4$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une puissance de $x$ grandit sans limite quand $x$ tend vers $+\\infty$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to-\\infty}x^3$ ?",
          "options": [
            "$+\\infty$",
            "$0$",
            "$-\\infty$",
            "$3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$3$ est impair : un nombre négatif au cube reste négatif."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to-\\infty}x^2$ ?",
          "options": [
            "$+\\infty$",
            "$-\\infty$",
            "$0$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2$ est pair : $x^2$ est toujours positif."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\dfrac{1}{x^2}$ ?",
          "options": [
            "$+\\infty$",
            "$1$",
            "$-\\infty$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le dénominateur devient immense, donc le quotient tend vers $0$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q5",
          "type": "mcq",
          "prompt": "Pour calculer $\\lim\\limits_{x\\to+\\infty}(5x^2-3x+1)$, quel terme suffit-il de garder ?",
          "options": [
            "$5x^2$",
            "$-3x$",
            "$1$",
            "$-3x+1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le terme de plus haut degré impose sa limite au polynôme."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q6",
          "type": "mcq",
          "prompt": "Quelle est la limite en $+\\infty$ du polynôme $f(x)=-2x^3+5x^2-1$ ?",
          "options": [
            "$+\\infty$",
            "$-\\infty$",
            "$-2$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On garde $-2x^3$ : $x^3\\to+\\infty$ et on multiplie par $-2<0$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q7",
          "type": "mcq",
          "prompt": "Quelle est la limite en $-\\infty$ du polynôme $g(x)=3x^3-5x^2+2$ ?",
          "options": [
            "$+\\infty$",
            "$3$",
            "$-\\infty$",
            "$2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x^3\\to-\\infty$ en $-\\infty$, et $3>0$ garde le signe."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p01_q8",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to-\\infty}(-4x^2+x+7)$ ?",
          "options": [
            "$+\\infty$",
            "$-4$",
            "$7$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x^2\\to+\\infty$ (exposant pair), puis $-4<0$ change le signe : $-\\infty$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l01_limites_derivation_p02",
      "order": 2,
      "title": "Fonctions rationnelles et asymptotes",
      "summary": "La règle des termes de plus haut degré pour un quotient, et les asymptotes verticales et horizontales.",
      "conceptExplanation": "Fonction rationnelle (quotient de deux polynômes) : en $\\pm\\infty$, sa limite est celle du quotient des termes de plus haut degré du numérateur et du dénominateur.\nExemple : $\\lim\\limits_{x\\to+\\infty}\\dfrac{4x^2+1}{2x^2-3x}=\\lim\\limits_{x\\to+\\infty}\\dfrac{4x^2}{2x^2}=2$.\n\nTrois cas :\n- degré du numérateur plus petit : la limite est $0$ ;\n- degrés égaux : la limite est le quotient des coefficients dominants ;\n- degré du numérateur plus grand : la limite est infinie.\n\nAsymptotes à la courbe $(C_f)$ :\n- si $\\lim\\limits_{x\\to a}f(x)=+\\infty$ (ou $-\\infty$), la droite d'équation $x=a$ est asymptote verticale ;\n- si $\\lim\\limits_{x\\to\\pm\\infty}f(x)=b$ (un nombre réel), la droite d'équation $y=b$ est asymptote horizontale.\n\nLimite en une valeur interdite : pour $f(x)=\\dfrac{2x+1}{x-3}$, quand $x\\to3$ avec $x>3$, le numérateur tend vers $7$ et le dénominateur vers $0$ par valeurs positives, donc $f(x)\\to+\\infty$.",
      "keyRule": "Limite infinie en $a$ : asymptote verticale $x=a$. Limite $b$ en $\\pm\\infty$ : asymptote horizontale $y=b$.",
      "formulas": [
        {
          "name": "Quotient",
          "formula": "\\lim_{x\\to\\pm\\infty}\\dfrac{a_nx^n+\\dots}{b_px^p+\\dots}=\\lim_{x\\to\\pm\\infty}\\dfrac{a_nx^n}{b_px^p}"
        }
      ],
      "workedExample": {
        "title": "Les asymptotes d'une fonction rationnelle",
        "statement": "Soit $f(x)=\\dfrac{2x+1}{x-3}$ définie sur $\\mathbb{R}\\setminus\\{3\\}$.",
        "methodSteps": [
          "En $\\pm\\infty$ : $\\dfrac{2x}{x}=2$, donc $y=2$ est asymptote horizontale.",
          "En $3^+$ : numérateur $\\to7$, dénominateur $\\to0^+$, donc $f(x)\\to+\\infty$.",
          "Donc $x=3$ est asymptote verticale."
        ],
        "conclusion": "$(C_f)$ a deux asymptotes : $y=2$ et $x=3$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Quotient des termes dominants",
          "stepTheme": "Quotient des termes dominants",
          "stepBadge": "Quotient des termes dominants",
          "paragraphText": "En $\\pm\\infty$, une fraction rationnelle se comporte comme le quotient de ses termes de plus haut degré.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q1",
            "type": "mcq",
            "prompt": "Quelle est la limite en $+\\infty$ de la fonction rationnelle $g(x)=\\dfrac{6x^2-4}{3x^2+x}$ ?",
            "options": [
              "$+\\infty$",
              "$0$",
              "$2$",
              "$-4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{6x^2}{3x^2}=2$ : les degrés sont égaux."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Numérateur de plus petit degré",
          "stepTheme": "Numérateur de plus petit degré",
          "stepBadge": "Numérateur de plus petit degré",
          "paragraphText": "Si le numérateur a un degré plus petit, la limite en $\\pm\\infty$ est $0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\dfrac{3x+1}{x^2+2}$ ?",
            "options": [
              "$3$",
              "$0$",
              "$+\\infty$",
              "$\\dfrac{1}{2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{3x}{x^2}=\\dfrac{3}{x}\\to0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Numérateur de plus grand degré",
          "stepTheme": "Numérateur de plus grand degré",
          "stepBadge": "Numérateur de plus grand degré",
          "paragraphText": "Si le numérateur a un degré plus grand, la limite est infinie.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to-\\infty}\\dfrac{2x^3+1}{x^2-5}$ ?",
            "options": [
              "$2$",
              "$0$",
              "$+\\infty$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac{2x^3}{x^2}=2x$, qui tend vers $-\\infty$ en $-\\infty$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Asymptote horizontale",
          "stepTheme": "Asymptote horizontale",
          "stepBadge": "Asymptote horizontale",
          "paragraphText": "Si $\\lim\\limits_{x\\to\\pm\\infty}f(x)=b$, la droite $y=b$ est asymptote horizontale à $(C_f)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q4",
            "type": "mcq",
            "prompt": "On sait que $\\lim\\limits_{x\\to+\\infty}f(x)=5$. Quelle est l'interprétation graphique pour la courbe $(C_f)$ ?",
            "options": [
              "La droite d'équation $x=5$ est asymptote verticale",
              "La droite d'équation $y=5$ est asymptote horizontale",
              "La courbe passe par le point $(0;5)$",
              "La fonction est croissante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une limite finie en l'infini donne une asymptote horizontale $y=5$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Asymptote verticale",
          "stepTheme": "Asymptote verticale",
          "stepBadge": "Asymptote verticale",
          "paragraphText": "Si $\\lim\\limits_{x\\to a}f(x)=+\\infty$ ou $-\\infty$, la droite $x=a$ est asymptote verticale à $(C_f)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q5",
            "type": "mcq",
            "prompt": "On sait que $\\lim\\limits_{x\\to2}f(x)=+\\infty$. Que peut-on dire de la courbe $(C_f)$ ?",
            "options": [
              "Elle admet une asymptote verticale d'équation $x=2$",
              "Elle admet une asymptote horizontale d'équation $y=2$",
              "Elle a une tangente horizontale en $x=2$",
              "Sa limite en $2$ est nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une limite infinie en un nombre $a$ donne une asymptote verticale $x=a$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Trouver l'asymptote horizontale",
          "stepTheme": "Trouver l'asymptote horizontale",
          "stepBadge": "Trouver l'asymptote horizontale",
          "paragraphText": "Pour $f(x)=\\dfrac{2x+1}{x-3}$ : $\\lim\\limits_{x\\to\\pm\\infty}f(x)=\\lim\\dfrac{2x}{x}=2$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q6",
            "type": "mcq",
            "prompt": "Soit $f(x)=\\dfrac{2x+1}{x-3}$. Quelle droite est asymptote horizontale à $(C_f)$ en $+\\infty$ et en $-\\infty$ ?",
            "options": [
              "$y=2$",
              "$y=3$",
              "$x=3$",
              "$y=0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{2x}{x}=2$, donc $\\lim\\limits_{x\\to\\pm\\infty}f(x)=2$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Limite en une valeur interdite",
          "stepTheme": "Limite en une valeur interdite",
          "stepBadge": "Limite en une valeur interdite",
          "paragraphText": "En $3^+$, $2x+1\\to7$ et $x-3\\to0$ avec $x-3>0$ : le quotient tend vers $+\\infty$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q7",
            "type": "mcq",
            "prompt": "Soit $f(x)=\\dfrac{2x+1}{x-3}$. Que vaut $\\lim\\limits_{x\\to3^+}f(x)$, sachant que le numérateur tend vers $7$ et que $x-3$ tend vers $0$ en restant positif ?",
            "options": [
              "$7$",
              "$0$",
              "$+\\infty$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$7$ divisé par un nombre positif de plus en plus petit donne $+\\infty$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "x = a ou y = b ?",
          "stepTheme": "x = a ou y = b ?",
          "stepBadge": "x = a ou y = b ?",
          "paragraphText": "Asymptote verticale : équation $x=\\dots$ ; asymptote horizontale : équation $y=\\dots$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q8",
            "type": "mcq",
            "prompt": "Pour $f(x)=\\dfrac{2x+1}{x-3}$, on a trouvé $\\lim\\limits_{x\\to3^+}f(x)=+\\infty$. Quelle est l'équation de l'asymptote correspondante ?",
            "options": [
              "$y=3$",
              "$y=2$",
              "$x=2$",
              "$x=3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La limite infinie se produit quand $x$ tend vers $3$ : c'est la droite verticale $x=3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q1",
          "type": "mcq",
          "prompt": "Quelle est la limite en $+\\infty$ de la fonction rationnelle $g(x)=\\dfrac{6x^2-4}{3x^2+x}$ ?",
          "options": [
            "$+\\infty$",
            "$0$",
            "$2$",
            "$-4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{6x^2}{3x^2}=2$ : les degrés sont égaux."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\dfrac{3x+1}{x^2+2}$ ?",
          "options": [
            "$3$",
            "$0$",
            "$+\\infty$",
            "$\\dfrac{1}{2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{3x}{x^2}=\\dfrac{3}{x}\\to0$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to-\\infty}\\dfrac{2x^3+1}{x^2-5}$ ?",
          "options": [
            "$2$",
            "$0$",
            "$+\\infty$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac{2x^3}{x^2}=2x$, qui tend vers $-\\infty$ en $-\\infty$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q4",
          "type": "mcq",
          "prompt": "On sait que $\\lim\\limits_{x\\to+\\infty}f(x)=5$. Quelle est l'interprétation graphique pour la courbe $(C_f)$ ?",
          "options": [
            "La droite d'équation $x=5$ est asymptote verticale",
            "La droite d'équation $y=5$ est asymptote horizontale",
            "La courbe passe par le point $(0;5)$",
            "La fonction est croissante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une limite finie en l'infini donne une asymptote horizontale $y=5$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q5",
          "type": "mcq",
          "prompt": "On sait que $\\lim\\limits_{x\\to2}f(x)=+\\infty$. Que peut-on dire de la courbe $(C_f)$ ?",
          "options": [
            "Elle admet une asymptote verticale d'équation $x=2$",
            "Elle admet une asymptote horizontale d'équation $y=2$",
            "Elle a une tangente horizontale en $x=2$",
            "Sa limite en $2$ est nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une limite infinie en un nombre $a$ donne une asymptote verticale $x=a$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q6",
          "type": "mcq",
          "prompt": "Soit $f(x)=\\dfrac{2x+1}{x-3}$. Quelle droite est asymptote horizontale à $(C_f)$ en $+\\infty$ et en $-\\infty$ ?",
          "options": [
            "$y=2$",
            "$y=3$",
            "$x=3$",
            "$y=0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{2x}{x}=2$, donc $\\lim\\limits_{x\\to\\pm\\infty}f(x)=2$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q7",
          "type": "mcq",
          "prompt": "Soit $f(x)=\\dfrac{2x+1}{x-3}$. Que vaut $\\lim\\limits_{x\\to3^+}f(x)$, sachant que le numérateur tend vers $7$ et que $x-3$ tend vers $0$ en restant positif ?",
          "options": [
            "$7$",
            "$0$",
            "$+\\infty$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$7$ divisé par un nombre positif de plus en plus petit donne $+\\infty$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p02_q8",
          "type": "mcq",
          "prompt": "Pour $f(x)=\\dfrac{2x+1}{x-3}$, on a trouvé $\\lim\\limits_{x\\to3^+}f(x)=+\\infty$. Quelle est l'équation de l'asymptote correspondante ?",
          "options": [
            "$y=3$",
            "$y=2$",
            "$x=2$",
            "$x=3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La limite infinie se produit quand $x$ tend vers $3$ : c'est la droite verticale $x=3$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l01_limites_derivation_p03",
      "order": 3,
      "title": "Dérivées et sens de variation",
      "summary": "Les dérivées usuelles, les formules de calcul et le lien entre le signe de $f'$ et les variations de $f$.",
      "conceptExplanation": "Dérivées usuelles :\n- constante $k$ : $0$ ;\n- $ax$ : $a$ ;\n- $x^n$ : $nx^{n-1}$ ;\n- $\\dfrac{1}{x}$ : $-\\dfrac{1}{x^2}$.\n\nOpérations sur deux fonctions $u$ et $v$ :\n- $(u+v)'=u'+v'$ ;\n- $(k\\times u)'=k\\times u'$ ;\n- $(u\\times v)'=u'v+uv'$ ;\n- $\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}$.\n\nDérivée et variations sur un intervalle $I$ :\n- si $f'(x)>0$ sur $I$, $f$ est strictement croissante sur $I$ ;\n- si $f'(x)<0$ sur $I$, $f$ est strictement décroissante sur $I$ ;\n- si $f'$ s'annule en $x_0$ en changeant de signe, $f$ admet un extremum en $x_0$ (un minimum si $f'$ passe de $-$ à $+$, un maximum si $f'$ passe de $+$ à $-$).",
      "keyRule": "$(x^n)'=nx^{n-1}$ ; $(uv)'=u'v+uv'$ ; $\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}$. Signe de $f'$ = sens de variation de $f$.",
      "formulas": [
        {
          "name": "Produit",
          "formula": "(uv)'=u'v+uv'"
        },
        {
          "name": "Quotient",
          "formula": "\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}"
        }
      ],
      "workedExample": {
        "title": "Dériver un quotient",
        "statement": "Dérive $f(x)=\\dfrac{2x+1}{x-3}$ sur $\\mathbb{R}\\setminus\\{3\\}$.",
        "methodSteps": [
          "$u=2x+1$, $u'=2$ ; $v=x-3$, $v'=1$.",
          "$f'(x)=\\dfrac{2(x-3)-(2x+1)\\times1}{(x-3)^2}$.",
          "Numérateur : $2x-6-2x-1=-7$."
        ],
        "conclusion": "$f'(x)=\\dfrac{-7}{(x-3)^2}<0$ : $f$ est décroissante sur chaque intervalle de son ensemble de définition."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Dériver une puissance",
          "stepTheme": "Dériver une puissance",
          "stepBadge": "Dériver une puissance",
          "paragraphText": "$(x^n)'=nx^{n-1}$ : on descend l'exposant et on enlève 1.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q1",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de la fonction $h(x)=x^3$ ?",
            "options": [
              "$3x$",
              "$3x^2$",
              "$x^2$",
              "$3x^4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(x^3)'=3x^{3-1}=3x^2$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Dériver un polynôme",
          "stepTheme": "Dériver un polynôme",
          "stepBadge": "Dériver un polynôme",
          "paragraphText": "On dérive terme par terme : $(3x^2)'=6x$, $(-7x)'=-7$, $(4)'=0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q2",
            "type": "mcq",
            "prompt": "Quelle est la fonction dérivée de $f(x)=3x^2-7x+4$ ?",
            "options": [
              "$f'(x)=3x-7$",
              "$f'(x)=6x-7$",
              "$f'(x)=6x+4$",
              "$f'(x)=x^3-7$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$3\\times2x-7+0=6x-7$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La dérivée de l'inverse",
          "stepTheme": "La dérivée de l'inverse",
          "stepBadge": "La dérivée de l'inverse",
          "paragraphText": "$\\left(\\dfrac{1}{x}\\right)'=-\\dfrac{1}{x^2}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q3",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $f(x)=\\dfrac{1}{x}$ sur $]0;+\\infty[$ ?",
            "options": [
              "$\\dfrac{1}{x^2}$",
              "$-\\dfrac{1}{x}$",
              "$-\\dfrac{1}{x^2}$",
              "$\\ln x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est une dérivée usuelle à connaître par cœur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La formule du quotient",
          "stepTheme": "La formule du quotient",
          "stepBadge": "La formule du quotient",
          "paragraphText": "$\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}$ : attention au signe moins.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q4",
            "type": "mcq",
            "prompt": "Quelle est la formule correcte pour dériver un quotient $\\dfrac{u}{v}$ ?",
            "options": [
              "$\\dfrac{u'}{v'}$",
              "$\\dfrac{u'v+uv'}{v^2}$",
              "$u'v-uv'$",
              "$\\dfrac{u'v-uv'}{v^2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Numérateur $u'v-uv'$, dénominateur $v^2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Dériver un produit",
          "stepTheme": "Dériver un produit",
          "stepBadge": "Dériver un produit",
          "paragraphText": "$(uv)'=u'v+uv'$. Pour $(2x+1)(x-3)$ : $2(x-3)+(2x+1)\\times1=4x-5$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q5",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $f(x)=(2x+1)(x-3)$, avec la formule $(uv)'=u'v+uv'$ ?",
            "options": [
              "$4x-5$",
              "$2$",
              "$4x+5$",
              "$2x-5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$u'v+uv'=2(x-3)+(2x+1)=2x-6+2x+1=4x-5$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Dériver un quotient",
          "stepTheme": "Dériver un quotient",
          "stepBadge": "Dériver un quotient",
          "paragraphText": "Pour $f(x)=\\dfrac{2x+1}{x-3}$ : $f'(x)=\\dfrac{2(x-3)-(2x+1)}{(x-3)^2}=\\dfrac{-7}{(x-3)^2}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q6",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $f(x)=\\dfrac{2x+1}{x-3}$ sur $\\mathbb{R}\\setminus\\{3\\}$ ?",
            "options": [
              "$\\dfrac{-7}{(x-3)^2}$",
              "$\\dfrac{4x-5}{(x-3)^2}$",
              "$2$",
              "$\\dfrac{7}{(x-3)^2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$u'v-uv'=2(x-3)-(2x+1)\\times1=-7$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Signe de f' et variations",
          "stepTheme": "Signe de f' et variations",
          "stepBadge": "Signe de f' et variations",
          "paragraphText": "Si $f'(x)<0$ sur $I$, $f$ est strictement décroissante sur $I$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q7",
            "type": "mcq",
            "prompt": "Si pour tout $x$ d'un intervalle $I$ on a $f'(x)<0$, alors la fonction $f$ est :",
            "options": [
              "Négative sur $I$",
              "Strictement croissante sur $I$",
              "Strictement décroissante sur $I$",
              "Constante sur $I$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le signe de la dérivée donne le sens de variation, pas le signe de $f$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Un extremum",
          "stepTheme": "Un extremum",
          "stepBadge": "Un extremum",
          "paragraphText": "$f(x)=x^2-4x+1$ : $f'(x)=2x-4$ s'annule en $2$ en passant de $-$ à $+$ ; minimum $f(2)=-3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q8",
            "type": "mcq",
            "prompt": "La fonction $f(x)=x^2-4x+1$ a pour dérivée $f'(x)=2x-4$, négative avant $2$ et positive après $2$. Que peut-on dire en $x=2$ ?",
            "options": [
              "$f$ admet un maximum égal à $-3$",
              "$f$ admet un minimum égal à $-3$",
              "$f$ admet un minimum égal à $2$",
              "$f$ n'a pas d'extremum"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f'$ passe de $-$ à $+$ : minimum, et $f(2)=4-8+1=-3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q1",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de la fonction $h(x)=x^3$ ?",
          "options": [
            "$3x$",
            "$3x^2$",
            "$x^2$",
            "$3x^4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(x^3)'=3x^{3-1}=3x^2$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q2",
          "type": "mcq",
          "prompt": "Quelle est la fonction dérivée de $f(x)=3x^2-7x+4$ ?",
          "options": [
            "$f'(x)=3x-7$",
            "$f'(x)=6x-7$",
            "$f'(x)=6x+4$",
            "$f'(x)=x^3-7$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$3\\times2x-7+0=6x-7$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q3",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $f(x)=\\dfrac{1}{x}$ sur $]0;+\\infty[$ ?",
          "options": [
            "$\\dfrac{1}{x^2}$",
            "$-\\dfrac{1}{x}$",
            "$-\\dfrac{1}{x^2}$",
            "$\\ln x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est une dérivée usuelle à connaître par cœur."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q4",
          "type": "mcq",
          "prompt": "Quelle est la formule correcte pour dériver un quotient $\\dfrac{u}{v}$ ?",
          "options": [
            "$\\dfrac{u'}{v'}$",
            "$\\dfrac{u'v+uv'}{v^2}$",
            "$u'v-uv'$",
            "$\\dfrac{u'v-uv'}{v^2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Numérateur $u'v-uv'$, dénominateur $v^2$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q5",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $f(x)=(2x+1)(x-3)$, avec la formule $(uv)'=u'v+uv'$ ?",
          "options": [
            "$4x-5$",
            "$2$",
            "$4x+5$",
            "$2x-5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$u'v+uv'=2(x-3)+(2x+1)=2x-6+2x+1=4x-5$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q6",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $f(x)=\\dfrac{2x+1}{x-3}$ sur $\\mathbb{R}\\setminus\\{3\\}$ ?",
          "options": [
            "$\\dfrac{-7}{(x-3)^2}$",
            "$\\dfrac{4x-5}{(x-3)^2}$",
            "$2$",
            "$\\dfrac{7}{(x-3)^2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$u'v-uv'=2(x-3)-(2x+1)\\times1=-7$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q7",
          "type": "mcq",
          "prompt": "Si pour tout $x$ d'un intervalle $I$ on a $f'(x)<0$, alors la fonction $f$ est :",
          "options": [
            "Négative sur $I$",
            "Strictement croissante sur $I$",
            "Strictement décroissante sur $I$",
            "Constante sur $I$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le signe de la dérivée donne le sens de variation, pas le signe de $f$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p03_q8",
          "type": "mcq",
          "prompt": "La fonction $f(x)=x^2-4x+1$ a pour dérivée $f'(x)=2x-4$, négative avant $2$ et positive après $2$. Que peut-on dire en $x=2$ ?",
          "options": [
            "$f$ admet un maximum égal à $-3$",
            "$f$ admet un minimum égal à $-3$",
            "$f$ admet un minimum égal à $2$",
            "$f$ n'a pas d'extremum"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f'$ passe de $-$ à $+$ : minimum, et $f(2)=4-8+1=-3$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l01_limites_derivation_p04",
      "order": 4,
      "title": "Exercice type BAC : étude de f(x) = x³ − 3x + 1",
      "summary": "Limites, dérivée, signe et extremums d'une fonction polynôme, comme au BAC.",
      "conceptExplanation": "Sujet : on considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x)=x^3-3x+1$.\n\n1. Limites : en $\\pm\\infty$, $f$ a la limite de $x^3$ : $\\lim\\limits_{x\\to+\\infty}f(x)=+\\infty$ et $\\lim\\limits_{x\\to-\\infty}f(x)=-\\infty$.\n2. Dérivée : $f'(x)=3x^2-3=3(x-1)(x+1)$.\n3. Signe de $f'$ : $f'(x)=0$ pour $x=-1$ ou $x=1$ ; $f'(x)>0$ sur $]-\\infty;-1[$ et sur $]1;+\\infty[$ ; $f'(x)<0$ sur $]-1;1[$.\n4. Variations : $f$ est croissante sur $]-\\infty;-1]$, décroissante sur $[-1;1]$, croissante sur $[1;+\\infty[$.\n5. Extremums : maximum local $f(-1)=-1+3+1=3$ ; minimum local $f(1)=1-3+1=-1$.",
      "keyRule": "Plan : limites, dérivée, signe de $f'$ (racines), variations, valeurs des extremums.",
      "formulas": [],
      "workedExample": {
        "title": "Tableau de variation",
        "statement": "Résume l'étude de $f(x)=x^3-3x+1$.",
        "methodSteps": [
          "$f'$ : $+$ sur $]-\\infty;-1[$, $-$ sur $]-1;1[$, $+$ sur $]1;+\\infty[$.",
          "$f$ monte de $-\\infty$ à $3$, descend de $3$ à $-1$, remonte de $-1$ à $+\\infty$."
        ],
        "conclusion": "Maximum local $3$ en $x=-1$, minimum local $-1$ en $x=1$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Limite en +∞",
          "stepTheme": "Limite en +∞",
          "stepBadge": "Limite en +∞",
          "paragraphText": "$f(x)=x^3-3x+1$ se comporte comme $x^3$ en $+\\infty$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q1",
            "type": "mcq",
            "prompt": "Soit $f(x)=x^3-3x+1$ sur $\\mathbb{R}$. Que vaut $\\lim\\limits_{x\\to+\\infty}f(x)$ ?",
            "options": [
              "$1$",
              "$+\\infty$",
              "$-\\infty$",
              "$-3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Terme de plus haut degré : $x^3\\to+\\infty$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Limite en −∞",
          "stepTheme": "Limite en −∞",
          "stepBadge": "Limite en −∞",
          "paragraphText": "En $-\\infty$, $x^3\\to-\\infty$ (exposant impair).",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q2",
            "type": "mcq",
            "prompt": "Soit $f(x)=x^3-3x+1$ sur $\\mathbb{R}$. Que vaut $\\lim\\limits_{x\\to-\\infty}f(x)$ ?",
            "options": [
              "$-\\infty$",
              "$+\\infty$",
              "$1$",
              "$0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$x^3$ est négatif et immense quand $x\\to-\\infty$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La dérivée",
          "stepTheme": "La dérivée",
          "stepBadge": "La dérivée",
          "paragraphText": "$f'(x)=3x^2-3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q3",
            "type": "mcq",
            "prompt": "Soit $f(x)=x^3-3x+1$. Quelle est sa dérivée $f'(x)$ ?",
            "options": [
              "$3x^2-3x$",
              "$x^2-3$",
              "$3x^2-3$",
              "$3x^2+1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(x^3)'=3x^2$, $(-3x)'=-3$, $(1)'=0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les racines de f'",
          "stepTheme": "Les racines de f'",
          "stepBadge": "Les racines de f'",
          "paragraphText": "$3x^2-3=3(x-1)(x+1)$ s'annule en $-1$ et en $1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q4",
            "type": "mcq",
            "prompt": "On a $f'(x)=3x^2-3=3(x-1)(x+1)$. Pour quelles valeurs de $x$ a-t-on $f'(x)=0$ ?",
            "options": [
              "$x=3$",
              "$x=0$",
              "$x=1$ seulement",
              "$x=-1$ ou $x=1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un produit est nul si l'un de ses facteurs est nul."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le signe de f'",
          "stepTheme": "Le signe de f'",
          "stepBadge": "Le signe de f'",
          "paragraphText": "Entre les racines $-1$ et $1$, $3x^2-3$ est négatif (signe contraire de $a=3$).",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q5",
            "type": "mcq",
            "prompt": "On a $f'(x)=3x^2-3$, nulle en $-1$ et en $1$. Quel est le signe de $f'(x)$ sur $]-1;1[$ ?",
            "options": [
              "Négatif",
              "Positif",
              "Nul",
              "Il change plusieurs fois"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par exemple $f'(0)=-3<0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le maximum local",
          "stepTheme": "Le maximum local",
          "stepBadge": "Le maximum local",
          "paragraphText": "$f(-1)=(-1)^3-3(-1)+1=-1+3+1=3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q6",
            "type": "mcq",
            "prompt": "$f(x)=x^3-3x+1$ admet un maximum local en $x=-1$. Combien vaut-il ?",
            "options": [
              "$-1$",
              "$3$",
              "$5$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f(-1)=-1+3+1=3$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le minimum local",
          "stepTheme": "Le minimum local",
          "stepBadge": "Le minimum local",
          "paragraphText": "$f(1)=1-3+1=-1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q7",
            "type": "mcq",
            "prompt": "$f(x)=x^3-3x+1$ admet un minimum local en $x=1$. Combien vaut-il ?",
            "options": [
              "$1$",
              "$-3$",
              "$-1$",
              "$0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$f(1)=1^3-3\\times1+1=-1$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Les intervalles de croissance",
          "stepTheme": "Les intervalles de croissance",
          "stepBadge": "Les intervalles de croissance",
          "paragraphText": "$f'>0$ sur $]-\\infty;-1[$ et sur $]1;+\\infty[$ : $f$ croît sur ces deux intervalles, pas sur leur réunion d'un seul bloc.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q8",
            "type": "mcq",
            "prompt": "La dérivée de $f(x)=x^3-3x+1$ est positive sur $]-\\infty;-1[$ et sur $]1;+\\infty[$, négative sur $]-1;1[$. Sur quels intervalles $f$ est-elle croissante ?",
            "options": [
              "Sur $[-1;1]$",
              "Sur $\\mathbb{R}$",
              "Sur $]-\\infty;1]$",
              "Sur $]-\\infty;-1]$ et sur $[1;+\\infty[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$f$ croît là où $f'>0$ : deux intervalles séparés par la zone de décroissance."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q1",
          "type": "mcq",
          "prompt": "Soit $f(x)=x^3-3x+1$ sur $\\mathbb{R}$. Que vaut $\\lim\\limits_{x\\to+\\infty}f(x)$ ?",
          "options": [
            "$1$",
            "$+\\infty$",
            "$-\\infty$",
            "$-3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Terme de plus haut degré : $x^3\\to+\\infty$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q2",
          "type": "mcq",
          "prompt": "Soit $f(x)=x^3-3x+1$ sur $\\mathbb{R}$. Que vaut $\\lim\\limits_{x\\to-\\infty}f(x)$ ?",
          "options": [
            "$-\\infty$",
            "$+\\infty$",
            "$1$",
            "$0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$x^3$ est négatif et immense quand $x\\to-\\infty$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q3",
          "type": "mcq",
          "prompt": "Soit $f(x)=x^3-3x+1$. Quelle est sa dérivée $f'(x)$ ?",
          "options": [
            "$3x^2-3x$",
            "$x^2-3$",
            "$3x^2-3$",
            "$3x^2+1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(x^3)'=3x^2$, $(-3x)'=-3$, $(1)'=0$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q4",
          "type": "mcq",
          "prompt": "On a $f'(x)=3x^2-3=3(x-1)(x+1)$. Pour quelles valeurs de $x$ a-t-on $f'(x)=0$ ?",
          "options": [
            "$x=3$",
            "$x=0$",
            "$x=1$ seulement",
            "$x=-1$ ou $x=1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un produit est nul si l'un de ses facteurs est nul."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q5",
          "type": "mcq",
          "prompt": "On a $f'(x)=3x^2-3$, nulle en $-1$ et en $1$. Quel est le signe de $f'(x)$ sur $]-1;1[$ ?",
          "options": [
            "Négatif",
            "Positif",
            "Nul",
            "Il change plusieurs fois"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par exemple $f'(0)=-3<0$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q6",
          "type": "mcq",
          "prompt": "$f(x)=x^3-3x+1$ admet un maximum local en $x=-1$. Combien vaut-il ?",
          "options": [
            "$-1$",
            "$3$",
            "$5$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f(-1)=-1+3+1=3$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q7",
          "type": "mcq",
          "prompt": "$f(x)=x^3-3x+1$ admet un minimum local en $x=1$. Combien vaut-il ?",
          "options": [
            "$1$",
            "$-3$",
            "$-1$",
            "$0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$f(1)=1^3-3\\times1+1=-1$."
        },
        {
          "id": "terminale_a_maths_numerique_l01_limites_derivation_p04_q8",
          "type": "mcq",
          "prompt": "La dérivée de $f(x)=x^3-3x+1$ est positive sur $]-\\infty;-1[$ et sur $]1;+\\infty[$, négative sur $]-1;1[$. Sur quels intervalles $f$ est-elle croissante ?",
          "options": [
            "Sur $[-1;1]$",
            "Sur $\\mathbb{R}$",
            "Sur $]-\\infty;1]$",
            "Sur $]-\\infty;-1]$ et sur $[1;+\\infty[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$f$ croît là où $f'>0$ : deux intervalles séparés par la zone de décroissance."
        }
      ]
    }
  ]
};
