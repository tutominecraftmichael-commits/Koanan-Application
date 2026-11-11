import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Programme de Terminale A fourni par l'équipe KONAN (pas de PDF officiel), vérifié et corrigé » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_A_L04_EXPONENTIELLE: CurriculumChapter = {
  "id": "terminale_a_maths_numerique_l04_exponentielle",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 4,
  "title": "Leçon 4 : La fonction exponentielle",
  "summary": "Définition et règles de calcul, limites, dérivée de e puissance u, équations et inéquations.",
  "officialVolumeHours": 10,
  "contentVersion": 2,
  "source": "Programme de Terminale A fourni par l'équipe KONAN (pas de PDF officiel), vérifié et corrigé",
  "points": [
    {
      "id": "terminale_a_maths_numerique_l04_exponentielle_p01",
      "order": 1,
      "title": "La fonction exponentielle : définition et règles de calcul",
      "summary": "$e^x>0$, $e^0=1$, le lien avec $\\ln$ et les règles de calcul des puissances.",
      "conceptExplanation": "La fonction exponentielle, notée $\\exp(x)$ ou $e^x$, est la fonction réciproque de $\\ln$. Elle est définie sur tout $\\mathbb{R}$.\n\nValeurs remarquables : $e^0=1$ et $e^1=e$.\n\nPropriété cruciale : pour tout réel $x$, $e^x>0$. Une exponentielle n'est jamais nulle ni négative.\n\nLien avec $\\ln$ : pour tout réel $x$, $\\ln(e^x)=x$ ; pour tout $y>0$, $e^{\\ln y}=y$.\n\nRègles de calcul (pour tous réels $a$ et $b$, et tout entier $n$) :\n- $e^{a+b}=e^a\\times e^b$ ;\n- $e^{-a}=\\dfrac{1}{e^a}$ ;\n- $e^{a-b}=\\dfrac{e^a}{e^b}$ ;\n- $(e^a)^n=e^{na}$.\n\nAttention : $e^a+e^b\\neq e^{a+b}$. C'est le produit $e^a\\times e^b$ qui vaut $e^{a+b}$.",
      "keyRule": "$e^x>0$ toujours ; $e^0=1$ ; $e^{a+b}=e^ae^b$ ; $e^{-a}=\\dfrac{1}{e^a}$ ; $(e^a)^n=e^{na}$.",
      "formulas": [
        {
          "name": "Produit",
          "formula": "e^{a+b}=e^a\\times e^b"
        },
        {
          "name": "Quotient",
          "formula": "e^{a-b}=\\dfrac{e^a}{e^b}"
        }
      ],
      "workedExample": {
        "title": "Simplifier une expression",
        "statement": "Simplifie $A=\\dfrac{e^5\\times e^{-2}}{e}$.",
        "methodSteps": [
          "Numérateur : $e^{5+(-2)}=e^3$.",
          "$A=\\dfrac{e^3}{e^1}=e^{3-1}$."
        ],
        "conclusion": "$A=e^2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Toujours positive",
          "stepTheme": "Toujours positive",
          "stepBadge": "Toujours positive",
          "paragraphText": "Pour tout réel $x$, $e^x>0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q1",
            "type": "mcq",
            "prompt": "Quel est le signe de $e^x$ pour n'importe quel nombre réel $x$ ?",
            "options": [
              "Positif si $x>0$ et négatif si $x<0$",
              "Toujours strictement positif : $e^x>0$",
              "Toujours supérieur à $1$",
              "Nul quand $x=0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Même pour $x$ négatif, $e^x$ est positif (par exemple $e^{-2}\\approx0{,}14$)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "e puissance 0",
          "stepTheme": "e puissance 0",
          "stepBadge": "e puissance 0",
          "paragraphText": "$e^0=1$, comme tout nombre non nul à la puissance $0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q2",
            "type": "mcq",
            "prompt": "Que vaut $e^0$ ?",
            "options": [
              "$0$",
              "$e$",
              "$1$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$e^0=1$, et donc $\\ln1=0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "exp et ln se compensent",
          "stepTheme": "exp et ln se compensent",
          "stepBadge": "exp et ln se compensent",
          "paragraphText": "$e^{\\ln y}=y$ pour $y>0$, et $\\ln(e^x)=x$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q3",
            "type": "mcq",
            "prompt": "Simplifie $e^{\\ln7}$.",
            "options": [
              "$7$",
              "$\\ln7$",
              "$e^7$",
              "$7e$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'exponentielle et le logarithme sont réciproques."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le produit",
          "stepTheme": "Le produit",
          "stepBadge": "Le produit",
          "paragraphText": "$e^{a+b}=e^a\\times e^b$ : on additionne les exposants.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q4",
            "type": "mcq",
            "prompt": "Pour tous réels $a$ et $b$, l'expression $e^{a+b}$ est égale à :",
            "options": [
              "$e^a+e^b$",
              "$e^{a\\times b}$",
              "$\\dfrac{e^a}{e^b}$",
              "$e^a\\times e^b$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la règle fondamentale de l'exponentielle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'exposant négatif",
          "stepTheme": "L'exposant négatif",
          "stepBadge": "L'exposant négatif",
          "paragraphText": "$e^{-a}=\\dfrac{1}{e^a}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q5",
            "type": "mcq",
            "prompt": "À quoi est égal $e^{-2}$ ?",
            "options": [
              "$-e^2$",
              "$\\dfrac{1}{e^2}$",
              "$-2e$",
              "$\\sqrt{e}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un exposant négatif donne l'inverse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Puissance d'une puissance",
          "stepTheme": "Puissance d'une puissance",
          "stepBadge": "Puissance d'une puissance",
          "paragraphText": "$(e^a)^n=e^{na}$ : on multiplie les exposants.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q6",
            "type": "mcq",
            "prompt": "À quoi est égal $(e^3)^2$ ?",
            "options": [
              "$e^5$",
              "$e^9$",
              "$e^6$",
              "$2e^3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(e^3)^2=e^{3\\times2}=e^6$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Simplifier",
          "stepTheme": "Simplifier",
          "stepBadge": "Simplifier",
          "paragraphText": "$\\dfrac{e^5\\times e^{-2}}{e}=e^{5-2-1}=e^2$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q7",
            "type": "mcq",
            "prompt": "Simplifie $A=\\dfrac{e^5\\times e^{-2}}{e}$.",
            "options": [
              "$A=e^2$",
              "$A=e^4$",
              "$A=e^3$",
              "$A=e^{-10}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$5+(-2)-1=2$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Somme et produit",
          "stepTheme": "Somme et produit",
          "stepBadge": "Somme et produit",
          "paragraphText": "$e^2+e^3$ ne se simplifie pas ; c'est $e^2\\times e^3$ qui vaut $e^5$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q8",
            "type": "mcq",
            "prompt": "Un élève écrit : $e^2+e^3=e^5$. Que faut-il lui répondre ?",
            "options": [
              "C'est juste",
              "Il fallait écrire $e^6$",
              "C'est faux : c'est $e^2\\times e^3$ qui vaut $e^5$",
              "Il fallait écrire $2e^5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La règle $e^{a+b}=e^ae^b$ concerne le produit, pas la somme."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q1",
          "type": "mcq",
          "prompt": "Quel est le signe de $e^x$ pour n'importe quel nombre réel $x$ ?",
          "options": [
            "Positif si $x>0$ et négatif si $x<0$",
            "Toujours strictement positif : $e^x>0$",
            "Toujours supérieur à $1$",
            "Nul quand $x=0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Même pour $x$ négatif, $e^x$ est positif (par exemple $e^{-2}\\approx0{,}14$)."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q2",
          "type": "mcq",
          "prompt": "Que vaut $e^0$ ?",
          "options": [
            "$0$",
            "$e$",
            "$1$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$e^0=1$, et donc $\\ln1=0$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q3",
          "type": "mcq",
          "prompt": "Simplifie $e^{\\ln7}$.",
          "options": [
            "$7$",
            "$\\ln7$",
            "$e^7$",
            "$7e$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'exponentielle et le logarithme sont réciproques."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q4",
          "type": "mcq",
          "prompt": "Pour tous réels $a$ et $b$, l'expression $e^{a+b}$ est égale à :",
          "options": [
            "$e^a+e^b$",
            "$e^{a\\times b}$",
            "$\\dfrac{e^a}{e^b}$",
            "$e^a\\times e^b$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la règle fondamentale de l'exponentielle."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q5",
          "type": "mcq",
          "prompt": "À quoi est égal $e^{-2}$ ?",
          "options": [
            "$-e^2$",
            "$\\dfrac{1}{e^2}$",
            "$-2e$",
            "$\\sqrt{e}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un exposant négatif donne l'inverse."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q6",
          "type": "mcq",
          "prompt": "À quoi est égal $(e^3)^2$ ?",
          "options": [
            "$e^5$",
            "$e^9$",
            "$e^6$",
            "$2e^3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(e^3)^2=e^{3\\times2}=e^6$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q7",
          "type": "mcq",
          "prompt": "Simplifie $A=\\dfrac{e^5\\times e^{-2}}{e}$.",
          "options": [
            "$A=e^2$",
            "$A=e^4$",
            "$A=e^3$",
            "$A=e^{-10}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$5+(-2)-1=2$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p01_q8",
          "type": "mcq",
          "prompt": "Un élève écrit : $e^2+e^3=e^5$. Que faut-il lui répondre ?",
          "options": [
            "C'est juste",
            "Il fallait écrire $e^6$",
            "C'est faux : c'est $e^2\\times e^3$ qui vaut $e^5$",
            "Il fallait écrire $2e^5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La règle $e^{a+b}=e^ae^b$ concerne le produit, pas la somme."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l04_exponentielle_p02",
      "order": 2,
      "title": "Limites, dérivée et variations de exp",
      "summary": "Limites en $\\pm\\infty$, asymptote, dérivée de $e^x$ et de $e^u$, croissances comparées.",
      "conceptExplanation": "Limites de référence :\n- $\\lim\\limits_{x\\to-\\infty}e^x=0$ : l'axe des abscisses (la droite $y=0$) est asymptote horizontale en $-\\infty$ ;\n- $\\lim\\limits_{x\\to+\\infty}e^x=+\\infty$ ;\n- croissances comparées : $\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x}=+\\infty$ et $\\lim\\limits_{x\\to-\\infty}xe^x=0$.\n\nDérivée : $(e^x)'=e^x$. Comme $e^x>0$, l'exponentielle est strictement croissante sur $\\mathbb{R}$.\n\nDérivée de $e^{u}$ : $(e^{u})'=u'e^{u}$. En particulier $(e^{ax+b})'=ae^{ax+b}$.\nExemples : $(e^{3x+2})'=3e^{3x+2}$ ; $(e^{-2x})'=-2e^{-2x}$.\n\nProduit : $(xe^x)'=1\\times e^x+x\\times e^x=(1+x)e^x$.",
      "keyRule": "$(e^x)'=e^x$ ; $(e^u)'=u'e^u$ ; $e^x\\to0$ en $-\\infty$ et $+\\infty$ en $+\\infty$.",
      "formulas": [
        {
          "name": "Dérivée",
          "formula": "(e^{u})'=u'e^{u}"
        }
      ],
      "workedExample": {
        "title": "Dériver un produit avec exp",
        "statement": "Dérive $f(x)=xe^x$.",
        "methodSteps": [
          "$u=x$, $u'=1$ ; $v=e^x$, $v'=e^x$.",
          "$f'(x)=1\\times e^x+x\\times e^x$."
        ],
        "conclusion": "$f'(x)=(1+x)e^x$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Limite en −∞",
          "stepTheme": "Limite en −∞",
          "stepBadge": "Limite en −∞",
          "paragraphText": "$\\lim\\limits_{x\\to-\\infty}e^x=0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q1",
            "type": "mcq",
            "prompt": "Quelle est la limite de $e^x$ lorsque $x$ tend vers $-\\infty$ ?",
            "options": [
              "$-\\infty$",
              "$1$",
              "$+\\infty$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$e^x$ reste positif et se rapproche de $0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Limite en +∞",
          "stepTheme": "Limite en +∞",
          "stepBadge": "Limite en +∞",
          "paragraphText": "$\\lim\\limits_{x\\to+\\infty}e^x=+\\infty$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}e^x$ ?",
            "options": [
              "$+\\infty$",
              "$e$",
              "$0$",
              "$1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'exponentielle grandit très vite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'asymptote",
          "stepTheme": "L'asymptote",
          "stepBadge": "L'asymptote",
          "paragraphText": "Comme $e^x\\to0$ en $-\\infty$, la droite $y=0$ est asymptote horizontale en $-\\infty$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q3",
            "type": "mcq",
            "prompt": "On sait que $\\lim\\limits_{x\\to-\\infty}e^x=0$. Quelle est l'interprétation graphique pour la courbe de l'exponentielle ?",
            "options": [
              "La droite $x=0$ est asymptote verticale",
              "L'axe des abscisses (droite $y=0$) est asymptote horizontale en $-\\infty$",
              "La courbe coupe l'axe des abscisses",
              "La courbe passe par l'origine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Limite finie $0$ en $-\\infty$ : asymptote horizontale $y=0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "exp est sa propre dérivée",
          "stepTheme": "exp est sa propre dérivée",
          "stepBadge": "exp est sa propre dérivée",
          "paragraphText": "$(e^x)'=e^x$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q4",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de la fonction $f(x)=e^x$ ?",
            "options": [
              "$xe^{x-1}$",
              "$\\dfrac{1}{x}$",
              "$e^x$",
              "$e$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'exponentielle est égale à sa dérivée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Dériver e puissance u",
          "stepTheme": "Dériver e puissance u",
          "stepBadge": "Dériver e puissance u",
          "paragraphText": "$(e^{ax+b})'=ae^{ax+b}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q5",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de la fonction $g(x)=e^{3x+2}$ ?",
            "options": [
              "$e^{3x+2}$",
              "$3e^{3x+2}$",
              "$(3x+2)e^{3x+2}$",
              "$3e^x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$u=3x+2$, $u'=3$ : $(e^u)'=u'e^u=3e^{3x+2}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un exposant négatif",
          "stepTheme": "Un exposant négatif",
          "stepBadge": "Un exposant négatif",
          "paragraphText": "$(e^{-2x})'=-2e^{-2x}$ : la fonction est décroissante.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q6",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $f(x)=e^{-2x}$ ?",
            "options": [
              "$e^{-2x}$",
              "$-2xe^{-2x}$",
              "$2e^{-2x}$",
              "$-2e^{-2x}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$u=-2x$, $u'=-2$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un produit",
          "stepTheme": "Un produit",
          "stepBadge": "Un produit",
          "paragraphText": "$(xe^x)'=e^x+xe^x=(1+x)e^x$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q7",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $f(x)=xe^x$, avec $(uv)'=u'v+uv'$ ?",
            "options": [
              "$(1+x)e^x$",
              "$e^x$",
              "$xe^x$",
              "$1+e^x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$1\\times e^x+x\\times e^x=(1+x)e^x$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Croissance comparée",
          "stepTheme": "Croissance comparée",
          "stepBadge": "Croissance comparée",
          "paragraphText": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x}=+\\infty$ : l'exponentielle l'emporte sur $x$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q8",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x}$ ?",
            "options": [
              "$0$",
              "$1$",
              "$+\\infty$",
              "$e$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$e^x$ grandit beaucoup plus vite que $x$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q1",
          "type": "mcq",
          "prompt": "Quelle est la limite de $e^x$ lorsque $x$ tend vers $-\\infty$ ?",
          "options": [
            "$-\\infty$",
            "$1$",
            "$+\\infty$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$e^x$ reste positif et se rapproche de $0$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}e^x$ ?",
          "options": [
            "$+\\infty$",
            "$e$",
            "$0$",
            "$1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'exponentielle grandit très vite."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q3",
          "type": "mcq",
          "prompt": "On sait que $\\lim\\limits_{x\\to-\\infty}e^x=0$. Quelle est l'interprétation graphique pour la courbe de l'exponentielle ?",
          "options": [
            "La droite $x=0$ est asymptote verticale",
            "L'axe des abscisses (droite $y=0$) est asymptote horizontale en $-\\infty$",
            "La courbe coupe l'axe des abscisses",
            "La courbe passe par l'origine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Limite finie $0$ en $-\\infty$ : asymptote horizontale $y=0$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q4",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de la fonction $f(x)=e^x$ ?",
          "options": [
            "$xe^{x-1}$",
            "$\\dfrac{1}{x}$",
            "$e^x$",
            "$e$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'exponentielle est égale à sa dérivée."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q5",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de la fonction $g(x)=e^{3x+2}$ ?",
          "options": [
            "$e^{3x+2}$",
            "$3e^{3x+2}$",
            "$(3x+2)e^{3x+2}$",
            "$3e^x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$u=3x+2$, $u'=3$ : $(e^u)'=u'e^u=3e^{3x+2}$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q6",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $f(x)=e^{-2x}$ ?",
          "options": [
            "$e^{-2x}$",
            "$-2xe^{-2x}$",
            "$2e^{-2x}$",
            "$-2e^{-2x}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$u=-2x$, $u'=-2$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q7",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $f(x)=xe^x$, avec $(uv)'=u'v+uv'$ ?",
          "options": [
            "$(1+x)e^x$",
            "$e^x$",
            "$xe^x$",
            "$1+e^x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$1\\times e^x+x\\times e^x=(1+x)e^x$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p02_q8",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x}$ ?",
          "options": [
            "$0$",
            "$1$",
            "$+\\infty$",
            "$e$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$e^x$ grandit beaucoup plus vite que $x$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l04_exponentielle_p03",
      "order": 3,
      "title": "Équations et inéquations avec exp",
      "summary": "$e^A=e^B\\iff A=B$, $e^x=k\\iff x=\\ln k$ si $k>0$, et les cas sans solution.",
      "conceptExplanation": "Règles :\n- $e^A=e^B\\iff A=B$ ;\n- $e^A<e^B\\iff A<B$ (le sens est conservé, car exp est croissante) ;\n- $e^x=k$ avec $k>0$ $\\iff x=\\ln k$ ;\n- si $k\\leq0$, l'équation $e^x=k$ n'a aucune solution, car $e^x>0$.\n\nExemples :\n- $e^{2x-1}=e^{x+3}\\iff2x-1=x+3\\iff x=4$ ;\n- $e^x=5\\iff x=\\ln5$ ;\n- $e^{2x}=9\\iff2x=\\ln9\\iff x=\\dfrac{\\ln9}{2}=\\ln3$ ;\n- $e^x<3\\iff x<\\ln3$ ;\n- $e^x>-1$ est vraie pour tout réel $x$ : $S=\\mathbb{R}$.",
      "keyRule": "$e^x=k\\iff x=\\ln k$ si $k>0$ ; aucune solution si $k\\leq0$.",
      "formulas": [
        {
          "name": "Équation",
          "formula": "e^x=k\\iff x=\\ln k\\ (k>0)"
        }
      ],
      "workedExample": {
        "title": "Résoudre une équation",
        "statement": "Résous $e^{2x}=9$.",
        "methodSteps": [
          "$9>0$ : on peut prendre le logarithme.",
          "$2x=\\ln9$, donc $x=\\dfrac{\\ln9}{2}$.",
          "$\\ln9=\\ln(3^2)=2\\ln3$."
        ],
        "conclusion": "$x=\\ln3$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "e^x = 5",
          "stepTheme": "e^x = 5",
          "stepBadge": "e^x = 5",
          "paragraphText": "$e^x=k$ avec $k>0$ donne $x=\\ln k$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q1",
            "type": "mcq",
            "prompt": "Quelle est la solution dans $\\mathbb{R}$ de l'équation $e^x=5$ ?",
            "options": [
              "$x=e^5$",
              "$x=\\ln5$",
              "$x=\\dfrac{5}{e}$",
              "Aucune solution"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On applique $\\ln$ : $x=\\ln5\\approx1{,}61$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Un second membre négatif",
          "stepTheme": "Un second membre négatif",
          "stepBadge": "Un second membre négatif",
          "paragraphText": "$e^x>0$ toujours : $e^x=-2$ est impossible.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q2",
            "type": "mcq",
            "prompt": "Combien de solutions possède l'équation $e^x=-2$ dans $\\mathbb{R}$ ?",
            "options": [
              "Une solution : $x=\\ln(-2)$",
              "Une solution : $x=-\\ln2$",
              "Deux solutions",
              "Aucune solution, car $e^x$ est toujours strictement positif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\ln(-2)$ n'existe pas, et aucune exponentielle n'est négative."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Deux exponentielles",
          "stepTheme": "Deux exponentielles",
          "stepBadge": "Deux exponentielles",
          "paragraphText": "$e^{2x-1}=e^{x+3}\\iff2x-1=x+3\\iff x=4$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q3",
            "type": "mcq",
            "prompt": "Quelle est la solution de l'équation $e^{2x-1}=e^{x+3}$ ?",
            "options": [
              "$x=2$",
              "$x=4$",
              "$x=-4$",
              "$x=\\dfrac{2}{3}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On égale les exposants : $2x-x=3+1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "e^x = 1",
          "stepTheme": "e^x = 1",
          "stepBadge": "e^x = 1",
          "paragraphText": "$e^x=1=e^0\\iff x=0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q4",
            "type": "mcq",
            "prompt": "Quelle est la solution de l'équation $e^x=1$ ?",
            "options": [
              "$x=1$",
              "$x=e$",
              "$x=0$",
              "Aucune solution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$1=e^0$, donc $x=0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Une inéquation",
          "stepTheme": "Une inéquation",
          "stepBadge": "Une inéquation",
          "paragraphText": "$e^x>e^2\\iff x>2$ : le sens est conservé.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q5",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de l'inéquation $e^x>e^2$ ?",
            "options": [
              "$]2;+\\infty[$",
              "$]-\\infty;2[$",
              "$]e^2;+\\infty[$",
              "$\\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'exponentielle est croissante."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "e^x < 3",
          "stepTheme": "e^x < 3",
          "stepBadge": "e^x < 3",
          "paragraphText": "$e^x<3\\iff x<\\ln3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de l'inéquation $e^x<3$ ?",
            "options": [
              "$]-\\infty;3[$",
              "$]\\ln3;+\\infty[$",
              "$]0;3[$",
              "$]-\\infty;\\ln3[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On écrit $3=e^{\\ln3}$ et on compare les exposants."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "e^(2x) = 9",
          "stepTheme": "e^(2x) = 9",
          "stepBadge": "e^(2x) = 9",
          "paragraphText": "$2x=\\ln9=2\\ln3$, donc $x=\\ln3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q7",
            "type": "mcq",
            "prompt": "Quelle est la solution de l'équation $e^{2x}=9$ ?",
            "options": [
              "$x=\\dfrac{9}{2}$",
              "$x=\\ln3$",
              "$x=\\ln(4{,}5)$",
              "$x=\\dfrac{e^9}{2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$x=\\dfrac{\\ln9}{2}=\\dfrac{2\\ln3}{2}=\\ln3$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Toujours vrai",
          "stepTheme": "Toujours vrai",
          "stepBadge": "Toujours vrai",
          "paragraphText": "$e^x>0>-1$ pour tout $x$ : l'inéquation $e^x>-1$ est toujours vraie.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q8",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de l'inéquation $e^x>-1$ ?",
            "options": [
              "$\\varnothing$",
              "$]0;+\\infty[$",
              "$\\mathbb{R}$",
              "$]-1;+\\infty[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une exponentielle est toujours plus grande que $-1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q1",
          "type": "mcq",
          "prompt": "Quelle est la solution dans $\\mathbb{R}$ de l'équation $e^x=5$ ?",
          "options": [
            "$x=e^5$",
            "$x=\\ln5$",
            "$x=\\dfrac{5}{e}$",
            "Aucune solution"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On applique $\\ln$ : $x=\\ln5\\approx1{,}61$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q2",
          "type": "mcq",
          "prompt": "Combien de solutions possède l'équation $e^x=-2$ dans $\\mathbb{R}$ ?",
          "options": [
            "Une solution : $x=\\ln(-2)$",
            "Une solution : $x=-\\ln2$",
            "Deux solutions",
            "Aucune solution, car $e^x$ est toujours strictement positif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\ln(-2)$ n'existe pas, et aucune exponentielle n'est négative."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q3",
          "type": "mcq",
          "prompt": "Quelle est la solution de l'équation $e^{2x-1}=e^{x+3}$ ?",
          "options": [
            "$x=2$",
            "$x=4$",
            "$x=-4$",
            "$x=\\dfrac{2}{3}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On égale les exposants : $2x-x=3+1$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q4",
          "type": "mcq",
          "prompt": "Quelle est la solution de l'équation $e^x=1$ ?",
          "options": [
            "$x=1$",
            "$x=e$",
            "$x=0$",
            "Aucune solution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$1=e^0$, donc $x=0$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'inéquation $e^x>e^2$ ?",
          "options": [
            "$]2;+\\infty[$",
            "$]-\\infty;2[$",
            "$]e^2;+\\infty[$",
            "$\\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'exponentielle est croissante."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'inéquation $e^x<3$ ?",
          "options": [
            "$]-\\infty;3[$",
            "$]\\ln3;+\\infty[$",
            "$]0;3[$",
            "$]-\\infty;\\ln3[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On écrit $3=e^{\\ln3}$ et on compare les exposants."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q7",
          "type": "mcq",
          "prompt": "Quelle est la solution de l'équation $e^{2x}=9$ ?",
          "options": [
            "$x=\\dfrac{9}{2}$",
            "$x=\\ln3$",
            "$x=\\ln(4{,}5)$",
            "$x=\\dfrac{e^9}{2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$x=\\dfrac{\\ln9}{2}=\\dfrac{2\\ln3}{2}=\\ln3$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p03_q8",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'inéquation $e^x>-1$ ?",
          "options": [
            "$\\varnothing$",
            "$]0;+\\infty[$",
            "$\\mathbb{R}$",
            "$]-1;+\\infty[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une exponentielle est toujours plus grande que $-1$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l04_exponentielle_p04",
      "order": 4,
      "title": "Exercice type BAC : étude de f(x) = (x − 1)eˣ",
      "summary": "Limites, asymptote, dérivée, minimum, point sur l'axe et tangente.",
      "conceptExplanation": "Sujet : soit $f$ définie sur $\\mathbb{R}$ par $f(x)=(x-1)e^x$.\n\n1. En $+\\infty$ : $x-1\\to+\\infty$ et $e^x\\to+\\infty$, donc $\\lim\\limits_{x\\to+\\infty}f(x)=+\\infty$.\n2. En $-\\infty$ : $f(x)=xe^x-e^x$ ; $xe^x\\to0$ et $e^x\\to0$, donc $\\lim\\limits_{x\\to-\\infty}f(x)=0$ : la droite $y=0$ est asymptote horizontale en $-\\infty$.\n3. $f'(x)=1\\times e^x+(x-1)e^x=xe^x$.\n4. $e^x>0$, donc $f'(x)$ a le signe de $x$ : $f$ est décroissante sur $]-\\infty;0]$ et croissante sur $[0;+\\infty[$.\n5. Minimum : $f(0)=(0-1)e^0=-1$.\n6. Axe des abscisses : $f(x)=0\\iff x-1=0$ (car $e^x\\neq0$), soit $x=1$ : point $(1;0)$.\n7. Tangente en $1$ : $f(1)=0$, $f'(1)=e$, donc $y=e(x-1)=ex-e$.",
      "keyRule": "Comme $e^x>0$, le signe de $xe^x$ est celui de $x$ : on « oublie » $e^x$ pour étudier un signe.",
      "formulas": [],
      "workedExample": {
        "title": "Étudier un signe",
        "statement": "Étudie le signe de $f'(x)=xe^x$.",
        "methodSteps": [
          "$e^x>0$ pour tout réel $x$.",
          "Le signe de $f'(x)$ est donc celui de $x$."
        ],
        "conclusion": "$f'(x)<0$ sur $]-\\infty;0[$ et $f'(x)>0$ sur $]0;+\\infty[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Limite en +∞",
          "stepTheme": "Limite en +∞",
          "stepBadge": "Limite en +∞",
          "paragraphText": "$(x-1)\\to+\\infty$ et $e^x\\to+\\infty$ : le produit tend vers $+\\infty$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q1",
            "type": "mcq",
            "prompt": "Soit $f(x)=(x-1)e^x$ sur $\\mathbb{R}$. Que vaut $\\lim\\limits_{x\\to+\\infty}f(x)$ ?",
            "options": [
              "$0$",
              "$-\\infty$",
              "$+\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Produit de deux quantités qui tendent vers $+\\infty$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Limite en −∞",
          "stepTheme": "Limite en −∞",
          "stepBadge": "Limite en −∞",
          "paragraphText": "$f(x)=xe^x-e^x$ avec $xe^x\\to0$ et $e^x\\to0$ en $-\\infty$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q2",
            "type": "mcq",
            "prompt": "Soit $f(x)=(x-1)e^x=xe^x-e^x$. Sachant que $\\lim\\limits_{x\\to-\\infty}xe^x=0$, que vaut $\\lim\\limits_{x\\to-\\infty}f(x)$ ?",
            "options": [
              "$0$",
              "$-\\infty$",
              "$+\\infty$",
              "$-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$0-0=0$ : la droite $y=0$ est asymptote horizontale en $-\\infty$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La dérivée",
          "stepTheme": "La dérivée",
          "stepBadge": "La dérivée",
          "paragraphText": "$f'(x)=1\\times e^x+(x-1)e^x=xe^x$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q3",
            "type": "mcq",
            "prompt": "Soit $f(x)=(x-1)e^x$. Avec $(uv)'=u'v+uv'$, que vaut $f'(x)$ ?",
            "options": [
              "$e^x$",
              "$(x-1)e^x$",
              "$(x-2)e^x$",
              "$xe^x$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$e^x+(x-1)e^x=(1+x-1)e^x=xe^x$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le signe de f'",
          "stepTheme": "Le signe de f'",
          "stepBadge": "Le signe de f'",
          "paragraphText": "$e^x>0$ : $f'(x)=xe^x$ a le signe de $x$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q4",
            "type": "mcq",
            "prompt": "Pour $f(x)=(x-1)e^x$, on a $f'(x)=xe^x$. Sur quel intervalle $f$ est-elle décroissante ?",
            "options": [
              "$[0;+\\infty[$",
              "$]-\\infty;0]$",
              "$]-\\infty;1]$",
              "$\\mathbb{R}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f'(x)<0\\iff x<0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le minimum",
          "stepTheme": "Le minimum",
          "stepBadge": "Le minimum",
          "paragraphText": "$f(0)=(0-1)e^0=-1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q5",
            "type": "mcq",
            "prompt": "La fonction $f(x)=(x-1)e^x$ admet un minimum en $x=0$. Combien vaut-il ?",
            "options": [
              "$0$",
              "$1$",
              "$-1$",
              "$-e$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$f(0)=-1\\times1=-1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Couper l'axe des abscisses",
          "stepTheme": "Couper l'axe des abscisses",
          "stepBadge": "Couper l'axe des abscisses",
          "paragraphText": "$(x-1)e^x=0\\iff x-1=0$, car $e^x\\neq0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q6",
            "type": "mcq",
            "prompt": "En quel point la courbe de $f(x)=(x-1)e^x$ coupe-t-elle l'axe des abscisses ?",
            "options": [
              "$(1;0)$",
              "$(0;-1)$",
              "$(-1;0)$",
              "Elle ne le coupe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un produit est nul si un facteur est nul, et $e^x$ ne l'est jamais."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Tangente en 1",
          "stepTheme": "Tangente en 1",
          "stepBadge": "Tangente en 1",
          "paragraphText": "$f(1)=0$ et $f'(1)=1\\times e^1=e$ : $y=e(x-1)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q7",
            "type": "mcq",
            "prompt": "Pour $f(x)=(x-1)e^x$, on a $f(1)=0$ et $f'(1)=e$. Quelle est l'équation de la tangente au point d'abscisse $1$ ?",
            "options": [
              "$y=x-1$",
              "$y=ex$",
              "$y=e$",
              "$y=ex-e$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$y=e(x-1)+0=ex-e$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Interpréter la limite en −∞",
          "stepTheme": "Interpréter la limite en −∞",
          "stepBadge": "Interpréter la limite en −∞",
          "paragraphText": "Limite $0$ en $-\\infty$ : asymptote horizontale $y=0$, et non verticale.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q8",
            "type": "mcq",
            "prompt": "Pour $f(x)=(x-1)e^x$, on a $\\lim\\limits_{x\\to-\\infty}f(x)=0$. Quelle est l'interprétation graphique ?",
            "options": [
              "La droite $x=0$ est asymptote verticale",
              "La droite $y=0$ est asymptote horizontale en $-\\infty$",
              "La courbe passe par l'origine",
              "La droite $y=-1$ est asymptote"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Limite finie à l'infini : asymptote horizontale."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q1",
          "type": "mcq",
          "prompt": "Soit $f(x)=(x-1)e^x$ sur $\\mathbb{R}$. Que vaut $\\lim\\limits_{x\\to+\\infty}f(x)$ ?",
          "options": [
            "$0$",
            "$-\\infty$",
            "$+\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Produit de deux quantités qui tendent vers $+\\infty$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q2",
          "type": "mcq",
          "prompt": "Soit $f(x)=(x-1)e^x=xe^x-e^x$. Sachant que $\\lim\\limits_{x\\to-\\infty}xe^x=0$, que vaut $\\lim\\limits_{x\\to-\\infty}f(x)$ ?",
          "options": [
            "$0$",
            "$-\\infty$",
            "$+\\infty$",
            "$-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$0-0=0$ : la droite $y=0$ est asymptote horizontale en $-\\infty$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q3",
          "type": "mcq",
          "prompt": "Soit $f(x)=(x-1)e^x$. Avec $(uv)'=u'v+uv'$, que vaut $f'(x)$ ?",
          "options": [
            "$e^x$",
            "$(x-1)e^x$",
            "$(x-2)e^x$",
            "$xe^x$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$e^x+(x-1)e^x=(1+x-1)e^x=xe^x$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q4",
          "type": "mcq",
          "prompt": "Pour $f(x)=(x-1)e^x$, on a $f'(x)=xe^x$. Sur quel intervalle $f$ est-elle décroissante ?",
          "options": [
            "$[0;+\\infty[$",
            "$]-\\infty;0]$",
            "$]-\\infty;1]$",
            "$\\mathbb{R}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f'(x)<0\\iff x<0$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q5",
          "type": "mcq",
          "prompt": "La fonction $f(x)=(x-1)e^x$ admet un minimum en $x=0$. Combien vaut-il ?",
          "options": [
            "$0$",
            "$1$",
            "$-1$",
            "$-e$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$f(0)=-1\\times1=-1$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q6",
          "type": "mcq",
          "prompt": "En quel point la courbe de $f(x)=(x-1)e^x$ coupe-t-elle l'axe des abscisses ?",
          "options": [
            "$(1;0)$",
            "$(0;-1)$",
            "$(-1;0)$",
            "Elle ne le coupe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un produit est nul si un facteur est nul, et $e^x$ ne l'est jamais."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q7",
          "type": "mcq",
          "prompt": "Pour $f(x)=(x-1)e^x$, on a $f(1)=0$ et $f'(1)=e$. Quelle est l'équation de la tangente au point d'abscisse $1$ ?",
          "options": [
            "$y=x-1$",
            "$y=ex$",
            "$y=e$",
            "$y=ex-e$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$y=e(x-1)+0=ex-e$."
        },
        {
          "id": "terminale_a_maths_numerique_l04_exponentielle_p04_q8",
          "type": "mcq",
          "prompt": "Pour $f(x)=(x-1)e^x$, on a $\\lim\\limits_{x\\to-\\infty}f(x)=0$. Quelle est l'interprétation graphique ?",
          "options": [
            "La droite $x=0$ est asymptote verticale",
            "La droite $y=0$ est asymptote horizontale en $-\\infty$",
            "La courbe passe par l'origine",
            "La droite $y=-1$ est asymptote"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Limite finie à l'infini : asymptote horizontale."
        }
      ]
    }
  ]
};
