import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « TD Maths leçon 10 Calcul intégral.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_D_L10_CALCUL_INTEGRAL: CurriculumChapter = {
  "id": "terminale_d_maths_numerique_l10_calcul_integral",
  "subjectId": "maths",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 10,
  "title": "Leçon 10 : Calcul intégral",
  "summary": "Définition de l'intégrale, interprétation en aire, propriétés (Chasles, linéarité, comparaison, inégalité de la moyenne), valeur moyenne, intégration par parties, changement de variable affine, parité et périodicité, calcul d'aires, situations concrètes.",
  "officialVolumeHours": 12,
  "contentVersion": 2,
  "source": "TD Maths leçon 10 Calcul intégral.pdf",
  "points": [
    {
      "id": "terminale_d_maths_numerique_l10_calcul_integral_p01",
      "order": 1,
      "title": "Définition de l'intégrale",
      "summary": "$\\displaystyle\\int_a^bf(x)\\,dx=F(b)-F(a)$, avec $F$ une primitive de $f$.",
      "conceptExplanation": "Propriété et définition : $f$ est continue sur un intervalle $K$, $a$ et $b$ sont dans $K$, et $F$ est une primitive de $f$ sur $K$. Le nombre $F(b)-F(a)$ ne dépend pas de la primitive choisie : c'est l'intégrale de $a$ à $b$ de $f$.\n$$\\int_a^bf(x)\\,dx=\\Big[F(x)\\Big]_a^b=F(b)-F(a).$$\n- $a$ et $b$ sont les bornes de l'intégrale ;\n- la variable est muette : $\\displaystyle\\int_a^bf(x)\\,dx=\\int_a^bf(t)\\,dt$.\n\nConséquences :\n- $\\displaystyle\\int_a^af(x)\\,dx=0$ ;\n- $\\displaystyle\\int_b^af(x)\\,dx=-\\int_a^bf(x)\\,dx$.\n\nExemples :\n- $\\displaystyle\\int_0^1x^2\\,dx=\\left[\\dfrac{x^3}{3}\\right]_0^1=\\dfrac13$ ;\n- $\\displaystyle\\int_3^1\\left(1-\\dfrac1t\\right)dt=\\Big[t-\\ln t\\Big]_3^1=(1-0)-(3-\\ln3)=-2+\\ln3$ ;\n- $\\displaystyle\\int_{-12}^{-12}x\\sqrt{3-x}\\,dx=0$ (bornes égales).",
      "keyRule": "On cherche une primitive $F$, puis on calcule $F(\\text{borne du haut})-F(\\text{borne du bas})$.",
      "formulas": [
        {
          "name": "Intégrale",
          "formula": "\\int_a^bf(x)\\,dx=F(b)-F(a)"
        },
        {
          "name": "Inverser les bornes",
          "formula": "\\int_b^af(x)\\,dx=-\\int_a^bf(x)\\,dx"
        }
      ],
      "workedExample": {
        "title": "Des bornes « à l'envers »",
        "statement": "Calcule $J=\\displaystyle\\int_3^1\\left(1-\\dfrac1t\\right)dt$.",
        "methodSteps": [
          "Une primitive de $1-\\dfrac1t$ sur $[1;3]$ est $F(t)=t-\\ln t$.",
          "$J=F(1)-F(3)=(1-\\ln1)-(3-\\ln3)$."
        ],
        "conclusion": "$J=-2+\\ln3$ (négatif, car les bornes sont dans le sens décroissant)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le calcul de base",
          "stepTheme": "Le calcul de base",
          "stepBadge": "Le calcul de base",
          "paragraphText": "$\\displaystyle\\int_a^bf(x)\\,dx=F(b)-F(a)$ : primitive en haut moins primitive en bas.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_0^1x^2\\,dx$ ?",
            "options": [
              "$1$",
              "$\\dfrac13$",
              "$2$",
              "$\\dfrac12$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\left[\\dfrac{x^3}{3}\\right]_0^1=\\dfrac13-0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Avec un polynôme",
          "stepTheme": "Avec un polynôme",
          "stepBadge": "Avec un polynôme",
          "paragraphText": "$\\displaystyle\\int_1^3x^2\\,dx=\\left[\\dfrac{x^3}{3}\\right]_1^3=9-\\dfrac13=\\dfrac{26}{3}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_0^2(2x+1)\\,dx$ ?",
            "options": [
              "$5$",
              "$4$",
              "$6$",
              "$8$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\Big[x^2+x\\Big]_0^2=4+2-0=6$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La variable muette",
          "stepTheme": "La variable muette",
          "stepBadge": "La variable muette",
          "paragraphText": "Le résultat ne dépend pas de la lettre : $\\displaystyle\\int_0^1z^2\\,dz=\\int_0^1x^2\\,dx=\\dfrac13$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q3",
            "type": "mcq",
            "prompt": "De quoi dépend $\\displaystyle\\int_0^1t^2\\,dt$ ?",
            "options": [
              "De $t$",
              "De rien : c'est le nombre $\\dfrac13$",
              "De $x$",
              "De la primitive choisie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une intégrale entre deux nombres est un nombre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Des bornes égales",
          "stepTheme": "Des bornes égales",
          "stepBadge": "Des bornes égales",
          "paragraphText": "$\\displaystyle\\int_a^af(x)\\,dx=F(a)-F(a)=0$, quelle que soit la fonction.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_{-12}^{-12}x\\sqrt{3-x}\\,dx$ ?",
            "options": [
              "$-12$",
              "$144$",
              "On ne peut pas le calculer",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les deux bornes sont identiques."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Inverser les bornes",
          "stepTheme": "Inverser les bornes",
          "stepBadge": "Inverser les bornes",
          "paragraphText": "$\\displaystyle\\int_b^af(x)\\,dx=-\\int_a^bf(x)\\,dx$ : échanger les bornes change le signe.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q5",
            "type": "mcq",
            "prompt": "Sachant $\\displaystyle\\int_0^1x^2\\,dx=\\dfrac13$, que vaut $\\displaystyle\\int_1^0x^2\\,dx$ ?",
            "options": [
              "$-\\dfrac13$",
              "$\\dfrac13$",
              "$0$",
              "$3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On change le signe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Avec un logarithme",
          "stepTheme": "Avec un logarithme",
          "stepBadge": "Avec un logarithme",
          "paragraphText": "$\\displaystyle\\int_3^1\\left(1-\\dfrac1t\\right)dt=\\Big[t-\\ln t\\Big]_3^1=(1-0)-(3-\\ln3)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_3^1\\left(1-\\dfrac1t\\right)dt$ ? (Une primitive de $1-\\dfrac1t$ est $t-\\ln t$.)",
            "options": [
              "$2-\\ln3$",
              "$-2+\\ln3$",
              "$-2-\\ln3$",
              "$\\ln3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$1-3+\\ln3=-2+\\ln3$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le bon ordre",
          "stepTheme": "Le bon ordre",
          "stepBadge": "Le bon ordre",
          "paragraphText": "C'est $F(b)-F(a)$, la borne du HAUT en premier. Faire $F(a)-F(b)$ donne l'opposé.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q7",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_1^e\\dfrac1x\\,dx$ ?",
            "options": [
              "$-1$",
              "$e$",
              "$0$",
              "$1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\Big[\\ln x\\Big]_1^e=\\ln e-\\ln1=1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_0^1x^2\\,dx$ ?",
          "options": [
            "$1$",
            "$\\dfrac13$",
            "$2$",
            "$\\dfrac12$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\left[\\dfrac{x^3}{3}\\right]_0^1=\\dfrac13-0$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_0^2(2x+1)\\,dx$ ?",
          "options": [
            "$5$",
            "$4$",
            "$6$",
            "$8$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\Big[x^2+x\\Big]_0^2=4+2-0=6$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q3",
          "type": "mcq",
          "prompt": "De quoi dépend $\\displaystyle\\int_0^1t^2\\,dt$ ?",
          "options": [
            "De $t$",
            "De rien : c'est le nombre $\\dfrac13$",
            "De $x$",
            "De la primitive choisie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une intégrale entre deux nombres est un nombre."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_{-12}^{-12}x\\sqrt{3-x}\\,dx$ ?",
          "options": [
            "$-12$",
            "$144$",
            "On ne peut pas le calculer",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les deux bornes sont identiques."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q5",
          "type": "mcq",
          "prompt": "Sachant $\\displaystyle\\int_0^1x^2\\,dx=\\dfrac13$, que vaut $\\displaystyle\\int_1^0x^2\\,dx$ ?",
          "options": [
            "$-\\dfrac13$",
            "$\\dfrac13$",
            "$0$",
            "$3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On change le signe."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_3^1\\left(1-\\dfrac1t\\right)dt$ ? (Une primitive de $1-\\dfrac1t$ est $t-\\ln t$.)",
          "options": [
            "$2-\\ln3$",
            "$-2+\\ln3$",
            "$-2-\\ln3$",
            "$\\ln3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$1-3+\\ln3=-2+\\ln3$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p01_q7",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_1^e\\dfrac1x\\,dx$ ?",
          "options": [
            "$-1$",
            "$e$",
            "$0$",
            "$1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\Big[\\ln x\\Big]_1^e=\\ln e-\\ln1=1$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l10_calcul_integral_p02",
      "order": 2,
      "title": "L'intégrale comme une aire",
      "summary": "Pour $f$ positive, l'intégrale est l'aire sous la courbe, en unités d'aire.",
      "conceptExplanation": "Propriété : si $f$ est continue et POSITIVE sur $[a;b]$, alors $\\displaystyle\\int_a^bf(x)\\,dx$ est l'aire, en unités d'aire (u.a.), de la partie du plan limitée par :\n- la courbe $(C_f)$ ;\n- l'axe des abscisses $(OI)$ ;\n- les droites d'équations $x=a$ et $x=b$.\nC'est l'ensemble des points $M(x;y)$ tels que $a\\leq x\\leq b$ et $0\\leq y\\leq f(x)$.\n\nUnité d'aire : c'est l'aire du rectangle construit sur $OI$ et $OJ$ :\n$$1\\ \\text{u.a.}=OI\\times OJ.$$\nExemple : avec 2 cm sur l'axe des abscisses et 3 cm sur l'axe des ordonnées, $1\\ \\text{u.a.}=6\\ \\text{cm}^2$.\n\nExemple : $f(x)=2x+1$ est continue et positive sur $[0;5]$ (car $2x+1\\geq0$ pour $x\\geq-\\dfrac12$). Donc $\\displaystyle\\int_0^5(2x+1)\\,dx=\\Big[x^2+x\\Big]_0^5=30$ est l'aire du trapèze sous la droite, soit $30\\times6=180\\ \\text{cm}^2$.",
      "keyRule": "$f\\geq0$ sur $[a;b]$ : $\\mathcal{A}=\\displaystyle\\int_a^bf(x)\\,dx$ u.a., et $1$ u.a. $=OI\\times OJ$ en cm².",
      "formulas": [
        {
          "name": "Aire sous la courbe",
          "formula": "\\mathcal{A}=\\int_a^bf(x)\\,dx\\ \\text{u.a.}\\quad(f\\geq0)"
        },
        {
          "name": "Unité d'aire",
          "formula": "1\\ \\text{u.a.}=OI\\times OJ"
        }
      ],
      "workedExample": {
        "title": "Une aire en cm²",
        "statement": "Unités : 2 cm en abscisse, 3 cm en ordonnée. Calcule l'aire sous $f(x)=2x+1$ entre $x=0$ et $x=5$.",
        "methodSteps": [
          "$f$ est positive sur $[0;5]$.",
          "$\\displaystyle\\int_0^5(2x+1)\\,dx=\\Big[x^2+x\\Big]_0^5=25+5=30$ u.a.",
          "$1$ u.a. $=2\\times3=6$ cm²."
        ],
        "conclusion": "$\\mathcal{A}=30\\times6=180$ cm²."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Aire sous la courbe",
          "stepTheme": "Aire sous la courbe",
          "stepBadge": "Aire sous la courbe",
          "paragraphText": "Si $f\\geq0$ sur $[a;b]$, $\\displaystyle\\int_a^bf(x)\\,dx$ est l'aire entre la courbe, l'axe des abscisses et les droites $x=a$ et $x=b$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q1",
            "type": "mcq",
            "prompt": "Quelle aire représente $\\displaystyle\\int_0^5(2x+1)\\,dx$ ?",
            "options": [
              "L'aire entre la droite $y=2x+1$, l'axe des abscisses et les droites $x=0$ et $x=5$",
              "La longueur de la droite",
              "L'aire du carré de côté 5",
              "L'aire entre la droite et l'axe des ordonnées"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'aire du trapèze sous la droite, de $x=0$ à $x=5$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Vérifier le signe",
          "stepTheme": "Vérifier le signe",
          "stepBadge": "Vérifier le signe",
          "paragraphText": "Avant d'interpréter une intégrale comme une aire, on vérifie que $f$ est positive sur l'intervalle.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q2",
            "type": "mcq",
            "prompt": "Sur quel intervalle $f(x)=2x+1$ est-elle positive ?",
            "options": [
              "$[0;+\\infty[$ seulement",
              "$]-\\infty;-\\dfrac12]$",
              "$\\left[-\\dfrac12;+\\infty\\right[$",
              "$\\mathbb{R}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$2x+1\\geq0\\iff x\\geq-\\dfrac12$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'unité d'aire",
          "stepTheme": "L'unité d'aire",
          "stepBadge": "L'unité d'aire",
          "paragraphText": "$1$ u.a. est l'aire du rectangle de côtés $OI$ et $OJ$ : on multiplie les deux unités graphiques.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q3",
            "type": "mcq",
            "prompt": "Unités graphiques : 2 cm en abscisse et 4 cm en ordonnée. Que vaut $1$ u.a. ?",
            "options": [
              "$6$ cm²",
              "$2$ cm²",
              "$16$ cm²",
              "$8$ cm²"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2\\times4=8$ cm²."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Convertir en cm²",
          "stepTheme": "Convertir en cm²",
          "stepBadge": "Convertir en cm²",
          "paragraphText": "$\\displaystyle\\int_0^5(2x+1)\\,dx=30$ u.a. ; avec $1$ u.a. $=6$ cm², l'aire vaut $180$ cm².",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q4",
            "type": "mcq",
            "prompt": "Une aire vaut $\\dfrac12$ u.a. dans un repère orthonormé d'unité 2 cm. Combien en cm² ?",
            "options": [
              "$2$ cm²",
              "$1$ cm²",
              "$4$ cm²",
              "$\\dfrac12$ cm²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$1$ u.a. $=2\\times2=4$ cm², donc $\\dfrac12\\times4=2$ cm²."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Une description par inégalités",
          "stepTheme": "Une description par inégalités",
          "stepBadge": "Une description par inégalités",
          "paragraphText": "La partie sous la courbe est l'ensemble des points $M(x;y)$ tels que $a\\leq x\\leq b$ et $0\\leq y\\leq f(x)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q5",
            "type": "mcq",
            "prompt": "Le point $M(1;2)$ est-il sous la courbe de $f(x)=2x+1$, entre $x=0$ et $x=5$ ?",
            "options": [
              "Non, car $2>1$",
              "Oui, car $0\\leq1\\leq5$ et $0\\leq2\\leq f(1)=3$",
              "Non, car $y$ doit valoir $0$",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux conditions sont vérifiées."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une aire connue",
          "stepTheme": "Une aire connue",
          "stepBadge": "Une aire connue",
          "paragraphText": "Pour une fonction constante $f(x)=3$ sur $[1;4]$, l'aire est celle d'un rectangle : $3\\times3=9$, et $\\displaystyle\\int_1^43\\,dx=\\Big[3x\\Big]_1^4=9$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_0^2x\\,dx$ (aire d'un triangle) ?",
            "options": [
              "$4$",
              "$1$",
              "$2$",
              "$\\dfrac12$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Triangle de base $2$ et de hauteur $2$ : $\\dfrac{2\\times2}{2}=2$. Et $\\left[\\dfrac{x^2}{2}\\right]_0^2=2$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une aire est positive",
          "stepTheme": "Une aire est positive",
          "stepBadge": "Une aire est positive",
          "paragraphText": "Si $f$ est négative, l'intégrale est négative : ce n'est pas directement une aire. Exemple : $\\displaystyle\\int_1^3(-x^2)\\,dx=-\\dfrac{26}{3}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q7",
            "type": "mcq",
            "prompt": "On trouve $\\displaystyle\\int_1^3(-x^2)\\,dx=-\\dfrac{26}{3}$. Quelle est l'aire entre la courbe, l'axe et $x=1$, $x=3$ ?",
            "options": [
              "$-\\dfrac{26}{3}$ u.a.",
              "$0$ u.a.",
              "$\\dfrac{26}{3}$ u.a.",
              "$26$ u.a."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une aire est positive : on prend l'opposé de l'intégrale."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q1",
          "type": "mcq",
          "prompt": "Quelle aire représente $\\displaystyle\\int_0^5(2x+1)\\,dx$ ?",
          "options": [
            "L'aire entre la droite $y=2x+1$, l'axe des abscisses et les droites $x=0$ et $x=5$",
            "La longueur de la droite",
            "L'aire du carré de côté 5",
            "L'aire entre la droite et l'axe des ordonnées"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'aire du trapèze sous la droite, de $x=0$ à $x=5$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q2",
          "type": "mcq",
          "prompt": "Sur quel intervalle $f(x)=2x+1$ est-elle positive ?",
          "options": [
            "$[0;+\\infty[$ seulement",
            "$]-\\infty;-\\dfrac12]$",
            "$\\left[-\\dfrac12;+\\infty\\right[$",
            "$\\mathbb{R}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$2x+1\\geq0\\iff x\\geq-\\dfrac12$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q3",
          "type": "mcq",
          "prompt": "Unités graphiques : 2 cm en abscisse et 4 cm en ordonnée. Que vaut $1$ u.a. ?",
          "options": [
            "$6$ cm²",
            "$2$ cm²",
            "$16$ cm²",
            "$8$ cm²"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2\\times4=8$ cm²."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q4",
          "type": "mcq",
          "prompt": "Une aire vaut $\\dfrac12$ u.a. dans un repère orthonormé d'unité 2 cm. Combien en cm² ?",
          "options": [
            "$2$ cm²",
            "$1$ cm²",
            "$4$ cm²",
            "$\\dfrac12$ cm²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$1$ u.a. $=2\\times2=4$ cm², donc $\\dfrac12\\times4=2$ cm²."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q5",
          "type": "mcq",
          "prompt": "Le point $M(1;2)$ est-il sous la courbe de $f(x)=2x+1$, entre $x=0$ et $x=5$ ?",
          "options": [
            "Non, car $2>1$",
            "Oui, car $0\\leq1\\leq5$ et $0\\leq2\\leq f(1)=3$",
            "Non, car $y$ doit valoir $0$",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux conditions sont vérifiées."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_0^2x\\,dx$ (aire d'un triangle) ?",
          "options": [
            "$4$",
            "$1$",
            "$2$",
            "$\\dfrac12$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Triangle de base $2$ et de hauteur $2$ : $\\dfrac{2\\times2}{2}=2$. Et $\\left[\\dfrac{x^2}{2}\\right]_0^2=2$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p02_q7",
          "type": "mcq",
          "prompt": "On trouve $\\displaystyle\\int_1^3(-x^2)\\,dx=-\\dfrac{26}{3}$. Quelle est l'aire entre la courbe, l'axe et $x=1$, $x=3$ ?",
          "options": [
            "$-\\dfrac{26}{3}$ u.a.",
            "$0$ u.a.",
            "$\\dfrac{26}{3}$ u.a.",
            "$26$ u.a."
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une aire est positive : on prend l'opposé de l'intégrale."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l10_calcul_integral_p03",
      "order": 3,
      "title": "Propriétés de l'intégrale",
      "summary": "Chasles, linéarité, positivité, comparaison et inégalité de la moyenne.",
      "conceptExplanation": "Propriétés algébriques ($f$ et $g$ continues sur $K$) :\n- Chasles : $\\displaystyle\\int_a^bf=\\int_a^cf+\\int_c^bf$ ;\n- linéarité : $\\displaystyle\\int_a^b(f+g)=\\int_a^bf+\\int_a^bg$ et $\\displaystyle\\int_a^b\\alpha f=\\alpha\\int_a^bf$.\n\nExemple (Chasles) : $f(x)=2x-1$ si $x\\leq1$ et $f(x)=\\dfrac1x$ si $x>1$.\n$\\displaystyle\\int_0^ef=\\int_0^1(2x-1)\\,dx+\\int_1^e\\dfrac1x\\,dx=\\Big[x^2-x\\Big]_0^1+\\Big[\\ln x\\Big]_1^e=0+1=1$.\n\nExemple (linéarité) : $\\displaystyle\\int_0^{2\\pi}(-3\\cos x+2\\sin x)\\,dx=-3\\Big[\\sin x\\Big]_0^{2\\pi}+2\\Big[-\\cos x\\Big]_0^{2\\pi}=0$.\n\nPropriétés de comparaison (avec $a\\leq b$) :\n- si $f\\geq0$ sur $[a;b]$, alors $\\displaystyle\\int_a^bf\\geq0$ ;\n- si $f\\leq g$ sur $[a;b]$, alors $\\displaystyle\\int_a^bf\\leq\\int_a^bg$.\nExemple : $(x-1)^2\\geq0$ donne $x^2+1\\geq2x$, donc $\\displaystyle\\int_0^1(x^2+1)\\,dx\\geq\\int_0^12x\\,dx$.\n\nInégalité de la moyenne :\n- si $m\\leq f\\leq M$ sur $[a;b]$, alors $m(b-a)\\leq\\displaystyle\\int_a^bf\\leq M(b-a)$ ;\n- si $|f|\\leq M$, alors $\\left|\\displaystyle\\int_a^bf\\right|\\leq M(b-a)$.\nExemple : sur $\\left[\\dfrac{\\pi}{4};\\dfrac{\\pi}{2}\\right]$, $1\\leq\\dfrac{1}{\\sin x}\\leq\\sqrt2$, donc $\\dfrac{\\pi}{4}\\leq\\displaystyle\\int_{\\pi/4}^{\\pi/2}\\dfrac{dx}{\\sin x}\\leq\\dfrac{\\pi\\sqrt2}{4}$.",
      "keyRule": "Chasles découpe l'intervalle ; la linéarité sépare les termes ; on intègre une inégalité si $a\\leq b$.",
      "formulas": [
        {
          "name": "Chasles",
          "formula": "\\int_a^bf=\\int_a^cf+\\int_c^bf"
        },
        {
          "name": "Inégalité de la moyenne",
          "formula": "m(b-a)\\leq\\int_a^bf(x)\\,dx\\leq M(b-a)"
        }
      ],
      "workedExample": {
        "title": "Une fonction définie en deux morceaux",
        "statement": "$f(x)=2x-1$ si $x\\leq1$, $f(x)=\\dfrac1x$ si $x>1$. Calcule $\\displaystyle\\int_0^ef(x)\\,dx$.",
        "methodSteps": [
          "Chasles en $1$ : $\\displaystyle\\int_0^1(2x-1)\\,dx+\\int_1^e\\dfrac1x\\,dx$.",
          "$\\Big[x^2-x\\Big]_0^1=0$ et $\\Big[\\ln x\\Big]_1^e=1$."
        ],
        "conclusion": "$\\displaystyle\\int_0^ef(x)\\,dx=1$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La relation de Chasles",
          "stepTheme": "La relation de Chasles",
          "stepBadge": "La relation de Chasles",
          "paragraphText": "$\\displaystyle\\int_a^bf=\\int_a^cf+\\int_c^bf$ : on découpe l'intervalle là où la formule de $f$ change.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q1",
            "type": "mcq",
            "prompt": "$\\displaystyle\\int_0^2f=5$ et $\\displaystyle\\int_2^7f=3$. Que vaut $\\displaystyle\\int_0^7f$ ?",
            "options": [
              "$2$",
              "$15$",
              "$8$",
              "$-2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$5+3=8$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une fonction en deux morceaux",
          "stepTheme": "Une fonction en deux morceaux",
          "stepBadge": "Une fonction en deux morceaux",
          "paragraphText": "$\\displaystyle\\int_0^1(2x-1)\\,dx=0$ et $\\displaystyle\\int_1^e\\dfrac1x\\,dx=1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q2",
            "type": "mcq",
            "prompt": "$f(x)=2x-1$ si $x\\leq1$ et $f(x)=\\dfrac1x$ si $x>1$. On a $\\displaystyle\\int_0^1(2x-1)\\,dx=0$ et $\\displaystyle\\int_1^e\\dfrac1x\\,dx=1$. Que vaut $\\displaystyle\\int_0^ef(x)\\,dx$ ?",
            "options": [
              "$1$",
              "$0$",
              "$e$",
              "$e-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$0+1=1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La linéarité",
          "stepTheme": "La linéarité",
          "stepBadge": "La linéarité",
          "paragraphText": "On sépare une somme et on sort les constantes : $\\displaystyle\\int(-3\\cos x+2\\sin x)=-3\\int\\cos x+2\\int\\sin x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_0^{2\\pi}(-3\\cos x+2\\sin x)\\,dx$ ?",
            "options": [
              "$-3$",
              "$2\\pi$",
              "$4$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\Big[\\sin x\\Big]_0^{2\\pi}=0$ et $\\Big[-\\cos x\\Big]_0^{2\\pi}=-1+1=0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La positivité",
          "stepTheme": "La positivité",
          "stepBadge": "La positivité",
          "paragraphText": "Si $f\\geq0$ sur $[a;b]$ avec $a\\leq b$, alors $\\displaystyle\\int_a^bf\\geq0$, sans aucun calcul.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q4",
            "type": "mcq",
            "prompt": "Pourquoi $\\displaystyle\\int_{-2}^7x^2\\,dx\\geq0$ ?",
            "options": [
              "Parce que $7>0$",
              "Parce que $x^2\\geq0$ et $-2\\leq7$",
              "Parce que $-2<0$",
              "Ce n'est pas vrai"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La fonction est positive et les bornes sont dans l'ordre croissant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Comparer deux intégrales",
          "stepTheme": "Comparer deux intégrales",
          "stepBadge": "Comparer deux intégrales",
          "paragraphText": "On compare les fonctions : $(x-1)^2\\geq0$ donne $x^2+1\\geq2x$, donc $\\displaystyle\\int_0^1(x^2+1)\\,dx\\geq\\int_0^12x\\,dx$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q5",
            "type": "mcq",
            "prompt": "Pour $x\\in[0;\\pi]$, $x^2\\cos x\\leq x^2$. Que peut-on en déduire ?",
            "options": [
              "$\\displaystyle\\int_0^{\\pi}x^2\\cos x\\,dx\\geq\\int_0^{\\pi}x^2\\,dx$",
              "$\\displaystyle\\int_0^{\\pi}x^2\\cos x\\,dx=0$",
              "Rien",
              "$\\displaystyle\\int_0^{\\pi}x^2\\cos x\\,dx\\leq\\int_0^{\\pi}x^2\\,dx$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On intègre l'inégalité entre $0$ et $\\pi$ ($0\\leq\\pi$)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'inégalité de la moyenne",
          "stepTheme": "L'inégalité de la moyenne",
          "stepBadge": "L'inégalité de la moyenne",
          "paragraphText": "Si $m\\leq f\\leq M$ sur $[a;b]$, alors $m(b-a)\\leq\\displaystyle\\int_a^bf\\leq M(b-a)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q6",
            "type": "mcq",
            "prompt": "Sur $\\left[\\dfrac{\\pi}{4};\\dfrac{\\pi}{2}\\right]$, $1\\leq\\dfrac{1}{\\sin x}\\leq\\sqrt2$. Quel encadrement obtient-on ?",
            "options": [
              "$\\dfrac{\\pi}{4}\\leq I\\leq\\dfrac{\\pi\\sqrt2}{4}$",
              "$1\\leq I\\leq\\sqrt2$",
              "$\\dfrac{\\pi}{2}\\leq I\\leq\\pi$",
              "$0\\leq I\\leq1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$b-a=\\dfrac{\\pi}{2}-\\dfrac{\\pi}{4}=\\dfrac{\\pi}{4}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas de produit",
          "stepTheme": "Pas de produit",
          "stepBadge": "Pas de produit",
          "paragraphText": "La linéarité marche pour les sommes, PAS pour les produits : $\\displaystyle\\int_0^1x\\cdot x\\,dx=\\dfrac13$, alors que $\\left(\\displaystyle\\int_0^1x\\,dx\\right)^2=\\dfrac14$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces égalités est toujours vraie ?",
            "options": [
              "$\\displaystyle\\int fg=\\int f\\times\\int g$",
              "$\\displaystyle\\int(f-g)=\\int f-\\int g$",
              "$\\displaystyle\\int\\dfrac fg=\\dfrac{\\int f}{\\int g}$",
              "$\\displaystyle\\int f^2=\\left(\\int f\\right)^2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la linéarité ; les autres sont fausses en général."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q1",
          "type": "mcq",
          "prompt": "$\\displaystyle\\int_0^2f=5$ et $\\displaystyle\\int_2^7f=3$. Que vaut $\\displaystyle\\int_0^7f$ ?",
          "options": [
            "$2$",
            "$15$",
            "$8$",
            "$-2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$5+3=8$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q2",
          "type": "mcq",
          "prompt": "$f(x)=2x-1$ si $x\\leq1$ et $f(x)=\\dfrac1x$ si $x>1$. On a $\\displaystyle\\int_0^1(2x-1)\\,dx=0$ et $\\displaystyle\\int_1^e\\dfrac1x\\,dx=1$. Que vaut $\\displaystyle\\int_0^ef(x)\\,dx$ ?",
          "options": [
            "$1$",
            "$0$",
            "$e$",
            "$e-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$0+1=1$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_0^{2\\pi}(-3\\cos x+2\\sin x)\\,dx$ ?",
          "options": [
            "$-3$",
            "$2\\pi$",
            "$4$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\Big[\\sin x\\Big]_0^{2\\pi}=0$ et $\\Big[-\\cos x\\Big]_0^{2\\pi}=-1+1=0$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q4",
          "type": "mcq",
          "prompt": "Pourquoi $\\displaystyle\\int_{-2}^7x^2\\,dx\\geq0$ ?",
          "options": [
            "Parce que $7>0$",
            "Parce que $x^2\\geq0$ et $-2\\leq7$",
            "Parce que $-2<0$",
            "Ce n'est pas vrai"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La fonction est positive et les bornes sont dans l'ordre croissant."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q5",
          "type": "mcq",
          "prompt": "Pour $x\\in[0;\\pi]$, $x^2\\cos x\\leq x^2$. Que peut-on en déduire ?",
          "options": [
            "$\\displaystyle\\int_0^{\\pi}x^2\\cos x\\,dx\\geq\\int_0^{\\pi}x^2\\,dx$",
            "$\\displaystyle\\int_0^{\\pi}x^2\\cos x\\,dx=0$",
            "Rien",
            "$\\displaystyle\\int_0^{\\pi}x^2\\cos x\\,dx\\leq\\int_0^{\\pi}x^2\\,dx$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On intègre l'inégalité entre $0$ et $\\pi$ ($0\\leq\\pi$)."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q6",
          "type": "mcq",
          "prompt": "Sur $\\left[\\dfrac{\\pi}{4};\\dfrac{\\pi}{2}\\right]$, $1\\leq\\dfrac{1}{\\sin x}\\leq\\sqrt2$. Quel encadrement obtient-on ?",
          "options": [
            "$\\dfrac{\\pi}{4}\\leq I\\leq\\dfrac{\\pi\\sqrt2}{4}$",
            "$1\\leq I\\leq\\sqrt2$",
            "$\\dfrac{\\pi}{2}\\leq I\\leq\\pi$",
            "$0\\leq I\\leq1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$b-a=\\dfrac{\\pi}{2}-\\dfrac{\\pi}{4}=\\dfrac{\\pi}{4}$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p03_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces égalités est toujours vraie ?",
          "options": [
            "$\\displaystyle\\int fg=\\int f\\times\\int g$",
            "$\\displaystyle\\int(f-g)=\\int f-\\int g$",
            "$\\displaystyle\\int\\dfrac fg=\\dfrac{\\int f}{\\int g}$",
            "$\\displaystyle\\int f^2=\\left(\\int f\\right)^2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la linéarité ; les autres sont fausses en général."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l10_calcul_integral_p04",
      "order": 4,
      "title": "La valeur moyenne",
      "summary": "$\\mu=\\dfrac{1}{b-a}\\displaystyle\\int_a^bf(x)\\,dx$ : la hauteur du rectangle de même aire.",
      "conceptExplanation": "Définition : la valeur moyenne de $f$, continue sur $[a;b]$ ($a<b$), est le réel\n$$\\mu=\\dfrac{1}{b-a}\\int_a^bf(x)\\,dx.$$\n\nInterprétation (pour $f$ positive) : $\\mu$ est la hauteur du rectangle de base $b-a$ qui a la même aire que la partie sous la courbe : $\\displaystyle\\int_a^bf(x)\\,dx=\\mu\\times(b-a)$.\n\nExemples :\n- $f(x)=x-\\sin x$ sur $[0;\\pi]$ : $\\displaystyle\\int_0^{\\pi}(x-\\sin x)\\,dx=\\left[\\dfrac{x^2}{2}+\\cos x\\right]_0^{\\pi}=\\dfrac{\\pi^2}{2}-1-1=\\dfrac{\\pi^2}{2}-2$, donc $\\mu=\\dfrac{\\pi^2-4}{2\\pi}$ ;\n- $f(x)=3x+\\cos x$ sur $\\left[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right]$ : l'intégrale vaut $0+\\Big[\\sin x\\Big]_{-\\pi/2}^{\\pi/2}=2$, et $\\mu=\\dfrac{2}{\\pi}$ ;\n- $f(x)=x^2$ sur $[0;3]$ : $\\mu=\\dfrac13\\times9=3$.\n\nLien avec la vie courante : une vitesse moyenne est la valeur moyenne de la vitesse sur la durée du trajet.",
      "keyRule": "$\\mu=\\dfrac{1}{b-a}\\displaystyle\\int_a^bf$ : on divise l'intégrale par la longueur de l'intervalle.",
      "formulas": [
        {
          "name": "Valeur moyenne",
          "formula": "\\mu=\\dfrac{1}{b-a}\\int_a^bf(x)\\,dx"
        }
      ],
      "workedExample": {
        "title": "La valeur moyenne de $x-\\sin x$",
        "statement": "Calcule la valeur moyenne de $f(x)=x-\\sin x$ sur $[0;\\pi]$.",
        "methodSteps": [
          "Une primitive est $\\dfrac{x^2}{2}+\\cos x$.",
          "$\\displaystyle\\int_0^{\\pi}f=\\left(\\dfrac{\\pi^2}{2}-1\\right)-(0+1)=\\dfrac{\\pi^2}{2}-2$.",
          "$\\mu=\\dfrac1\\pi\\left(\\dfrac{\\pi^2}{2}-2\\right)$."
        ],
        "conclusion": "$\\mu=\\dfrac{\\pi^2-4}{2\\pi}\\approx0{,}93$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule",
          "stepTheme": "La formule",
          "stepBadge": "La formule",
          "paragraphText": "$\\mu=\\dfrac{1}{b-a}\\displaystyle\\int_a^bf(x)\\,dx$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est la valeur moyenne de $f(x)=x^2$ sur $[0;3]$ ?",
            "options": [
              "$9$",
              "$3$",
              "$\\dfrac32$",
              "$27$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\displaystyle\\int_0^3x^2\\,dx=9$ et $\\dfrac{9}{3}=3$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un rectangle de même aire",
          "stepTheme": "Un rectangle de même aire",
          "stepBadge": "Un rectangle de même aire",
          "paragraphText": "$\\displaystyle\\int_a^bf=\\mu\\times(b-a)$ : $\\mu$ est la hauteur du rectangle de base $[a;b]$ qui a la même aire.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q2",
            "type": "mcq",
            "prompt": "Une fonction positive a une valeur moyenne de $4$ sur $[1;6]$. Que vaut $\\displaystyle\\int_1^6f$ ?",
            "options": [
              "$4$",
              "$24$",
              "$\\dfrac45$",
              "$20$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$4\\times(6-1)=20$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Primitive de $x-\\sin x$",
          "stepTheme": "Primitive de $x-\\sin x$",
          "stepBadge": "Primitive de $x-\\sin x$",
          "paragraphText": "Une primitive de $x$ est $\\dfrac{x^2}{2}$ ; une primitive de $-\\sin x$ est $\\cos x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_0^{\\pi}(x-\\sin x)\\,dx$ ?",
            "options": [
              "$\\dfrac{\\pi^2}{2}$",
              "$\\dfrac{\\pi^2}{2}-2$",
              "$\\dfrac{\\pi^2}{2}+2$",
              "$\\pi^2-2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\left(\\dfrac{\\pi^2}{2}+\\cos\\pi\\right)-(0+\\cos0)=\\dfrac{\\pi^2}{2}-1-1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Diviser par la longueur",
          "stepTheme": "Diviser par la longueur",
          "stepBadge": "Diviser par la longueur",
          "paragraphText": "Sur $[0;\\pi]$, la longueur est $\\pi$ : $\\mu=\\dfrac1\\pi\\left(\\dfrac{\\pi^2}{2}-2\\right)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q4",
            "type": "mcq",
            "prompt": "$\\displaystyle\\int_0^{\\pi}(x-\\sin x)\\,dx=\\dfrac{\\pi^2}{2}-2$. Quelle est la valeur moyenne de $x-\\sin x$ sur $[0;\\pi]$ ?",
            "options": [
              "$\\dfrac{\\pi^2-4}{2\\pi}$",
              "$\\dfrac{\\pi^2-4}{2}$",
              "$\\dfrac{\\pi}{2}$",
              "$\\pi^2-4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{\\pi^2/2-2}{\\pi}=\\dfrac{\\pi^2-4}{2\\pi}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Sur un intervalle symétrique",
          "stepTheme": "Sur un intervalle symétrique",
          "stepBadge": "Sur un intervalle symétrique",
          "paragraphText": "$f(x)=3x+\\cos x$ sur $\\left[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right]$ : $\\displaystyle\\int3x\\,dx=0$ et $\\displaystyle\\int\\cos x\\,dx=2$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q5",
            "type": "mcq",
            "prompt": "Quelle est la valeur moyenne de $f(x)=3x+\\cos x$ sur $\\left[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right]$ ?",
            "options": [
              "$2$",
              "$\\dfrac{\\pi}{2}$",
              "$\\dfrac{2}{\\pi}$",
              "$0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{1}{\\pi}\\times2$ : la longueur de l'intervalle est $\\pi$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une vitesse moyenne",
          "stepTheme": "Une vitesse moyenne",
          "stepBadge": "Une vitesse moyenne",
          "paragraphText": "La distance parcourue est l'intégrale de la vitesse ; la vitesse moyenne est la distance divisée par la durée.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q6",
            "type": "mcq",
            "prompt": "Un objet a la vitesse $v(t)=2t$ (m/s) de $t=0$ à $t=10$ s. Quelle est sa vitesse moyenne ?",
            "options": [
              "$20$ m/s",
              "$5$ m/s",
              "$100$ m/s",
              "$10$ m/s"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\displaystyle\\int_0^{10}2t\\,dt=100$ m, et $\\dfrac{100}{10}=10$ m/s."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas la moyenne des bornes",
          "stepTheme": "Pas la moyenne des bornes",
          "stepBadge": "Pas la moyenne des bornes",
          "paragraphText": "La valeur moyenne n'est pas $\\dfrac{f(a)+f(b)}{2}$ en général. Pour $x^2$ sur $[0;3]$ : $\\mu=3$, mais $\\dfrac{0+9}{2}=4{,}5$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q7",
            "type": "mcq",
            "prompt": "Pour quel type de fonction $\\mu=\\dfrac{f(a)+f(b)}{2}$ est-il toujours vrai ?",
            "options": [
              "Les fonctions carré",
              "Les fonctions affines",
              "Les fonctions sinus",
              "Toutes les fonctions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour une fonction affine, l'aire sous la droite est celle d'un trapèze."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est la valeur moyenne de $f(x)=x^2$ sur $[0;3]$ ?",
          "options": [
            "$9$",
            "$3$",
            "$\\dfrac32$",
            "$27$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\displaystyle\\int_0^3x^2\\,dx=9$ et $\\dfrac{9}{3}=3$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q2",
          "type": "mcq",
          "prompt": "Une fonction positive a une valeur moyenne de $4$ sur $[1;6]$. Que vaut $\\displaystyle\\int_1^6f$ ?",
          "options": [
            "$4$",
            "$24$",
            "$\\dfrac45$",
            "$20$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$4\\times(6-1)=20$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_0^{\\pi}(x-\\sin x)\\,dx$ ?",
          "options": [
            "$\\dfrac{\\pi^2}{2}$",
            "$\\dfrac{\\pi^2}{2}-2$",
            "$\\dfrac{\\pi^2}{2}+2$",
            "$\\pi^2-2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\left(\\dfrac{\\pi^2}{2}+\\cos\\pi\\right)-(0+\\cos0)=\\dfrac{\\pi^2}{2}-1-1$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q4",
          "type": "mcq",
          "prompt": "$\\displaystyle\\int_0^{\\pi}(x-\\sin x)\\,dx=\\dfrac{\\pi^2}{2}-2$. Quelle est la valeur moyenne de $x-\\sin x$ sur $[0;\\pi]$ ?",
          "options": [
            "$\\dfrac{\\pi^2-4}{2\\pi}$",
            "$\\dfrac{\\pi^2-4}{2}$",
            "$\\dfrac{\\pi}{2}$",
            "$\\pi^2-4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{\\pi^2/2-2}{\\pi}=\\dfrac{\\pi^2-4}{2\\pi}$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q5",
          "type": "mcq",
          "prompt": "Quelle est la valeur moyenne de $f(x)=3x+\\cos x$ sur $\\left[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right]$ ?",
          "options": [
            "$2$",
            "$\\dfrac{\\pi}{2}$",
            "$\\dfrac{2}{\\pi}$",
            "$0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{1}{\\pi}\\times2$ : la longueur de l'intervalle est $\\pi$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q6",
          "type": "mcq",
          "prompt": "Un objet a la vitesse $v(t)=2t$ (m/s) de $t=0$ à $t=10$ s. Quelle est sa vitesse moyenne ?",
          "options": [
            "$20$ m/s",
            "$5$ m/s",
            "$100$ m/s",
            "$10$ m/s"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\displaystyle\\int_0^{10}2t\\,dt=100$ m, et $\\dfrac{100}{10}=10$ m/s."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p04_q7",
          "type": "mcq",
          "prompt": "Pour quel type de fonction $\\mu=\\dfrac{f(a)+f(b)}{2}$ est-il toujours vrai ?",
          "options": [
            "Les fonctions carré",
            "Les fonctions affines",
            "Les fonctions sinus",
            "Toutes les fonctions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour une fonction affine, l'aire sous la droite est celle d'un trapèze."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l10_calcul_integral_p05",
      "order": 5,
      "title": "Calculer avec des primitives et par parties",
      "summary": "Reconnaître une forme connue ; sinon, intégrer par parties.",
      "conceptExplanation": "1. Utiliser une primitive connue : on reconnaît $\\dfrac{u'}{u}$, $u'e^u$, $u'u^n$…\n- $I=\\displaystyle\\int_0^1\\dfrac{e^x}{1+e^x}\\,dx=\\Big[\\ln(1+e^x)\\Big]_0^1=\\ln(1+e)-\\ln2=\\ln\\dfrac{1+e}{2}$ ;\n- $J=\\displaystyle\\int_0^1xe^{x^2}\\,dx=\\dfrac12\\int_0^12xe^{x^2}\\,dx=\\dfrac12\\Big[e^{x^2}\\Big]_0^1=\\dfrac{e-1}{2}$ ;\n- $K=\\displaystyle\\int_0^{\\pi/3}\\cos^3t\\,dt$ : $\\cos^3t=\\cos t-\\cos t\\sin^2t$, donc $K=\\left[\\sin t-\\dfrac{\\sin^3t}{3}\\right]_0^{\\pi/3}=\\dfrac{\\sqrt3}{2}-\\dfrac{\\sqrt3}{8}=\\dfrac{3\\sqrt3}{8}$.\n\n2. Intégration par parties : si $u$ et $v$ sont dérivables et $u'$, $v'$ continues sur $[a;b]$,\n$$\\int_a^bu(x)v'(x)\\,dx=\\Big[u(x)v(x)\\Big]_a^b-\\int_a^bu'(x)v(x)\\,dx.$$\nOn choisit $u$ facile à dériver (souvent $\\ln x$ ou un polynôme) et $v'$ facile à primitiver.\n\nExemple : $I=\\displaystyle\\int_1^ex^2\\ln x\\,dx$.\n- $u=\\ln x$, $u'=\\dfrac1x$ ; $v'=x^2$, $v=\\dfrac{x^3}{3}$ ;\n- $I=\\left[\\dfrac{x^3}{3}\\ln x\\right]_1^e-\\displaystyle\\int_1^e\\dfrac{x^2}{3}\\,dx=\\dfrac{e^3}{3}-\\left[\\dfrac{x^3}{9}\\right]_1^e=\\dfrac{e^3}{3}-\\dfrac{e^3-1}{9}=\\dfrac{2e^3+1}{9}$.\n\nExemple : $\\displaystyle\\int_0^1(x+1)e^x\\,dx$ avec $u=x+1$, $v'=e^x$ : $\\Big[(x+1)e^x\\Big]_0^1-\\displaystyle\\int_0^1e^x\\,dx=(2e-1)-(e-1)=e$.",
      "keyRule": "$\\displaystyle\\int uv'=\\Big[uv\\Big]-\\int u'v$ : dériver la partie qui se simplifie ($\\ln x$, polynôme), primitiver l'autre.",
      "formulas": [
        {
          "name": "Intégration par parties",
          "formula": "\\int_a^buv'=\\Big[uv\\Big]_a^b-\\int_a^bu'v"
        }
      ],
      "workedExample": {
        "title": "Une intégration par parties",
        "statement": "Calcule $I=\\displaystyle\\int_1^ex^2\\ln x\\,dx$.",
        "methodSteps": [
          "$u=\\ln x$, $u'=\\dfrac1x$ ; $v'=x^2$, $v=\\dfrac{x^3}{3}$.",
          "$I=\\left[\\dfrac{x^3}{3}\\ln x\\right]_1^e-\\displaystyle\\int_1^e\\dfrac{x^2}{3}\\,dx=\\dfrac{e^3}{3}-\\dfrac{e^3-1}{9}$."
        ],
        "conclusion": "$I=\\dfrac{2e^3+1}{9}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Reconnaître $\\dfrac{u'}{u}$",
          "stepTheme": "Reconnaître $\\dfrac{u'}{u}$",
          "stepBadge": "Reconnaître $\\dfrac{u'}{u}$",
          "paragraphText": "$\\dfrac{e^x}{1+e^x}$ est de la forme $\\dfrac{u'}{u}$ avec $u=1+e^x$ : une primitive est $\\ln(1+e^x)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_0^1\\dfrac{e^x}{1+e^x}\\,dx$ ?",
            "options": [
              "$\\ln(1+e)$",
              "$\\ln\\dfrac{1+e}{2}$",
              "$e-1$",
              "$\\ln2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln(1+e)-\\ln(1+1)=\\ln\\dfrac{1+e}{2}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître $u'e^u$",
          "stepTheme": "Reconnaître $u'e^u$",
          "stepBadge": "Reconnaître $u'e^u$",
          "paragraphText": "$xe^{x^2}=\\dfrac12\\times2xe^{x^2}$ : avec $u=x^2$, une primitive est $\\dfrac12e^{x^2}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_0^1xe^{x^2}\\,dx$ ?",
            "options": [
              "$e-1$",
              "$\\dfrac{e}{2}$",
              "$\\dfrac{e-1}{2}$",
              "$2(e-1)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac12\\Big[e^{x^2}\\Big]_0^1=\\dfrac12(e-1)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Transformer avant d'intégrer",
          "stepTheme": "Transformer avant d'intégrer",
          "stepBadge": "Transformer avant d'intégrer",
          "paragraphText": "$\\cos^3t=\\cos t(1-\\sin^2t)=\\cos t-\\cos t\\sin^2t$, dont une primitive est $\\sin t-\\dfrac{\\sin^3t}{3}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_0^{\\pi/3}\\cos^3t\\,dt$ ?",
            "options": [
              "$\\dfrac{\\sqrt3}{2}$",
              "$\\dfrac{3\\sqrt3}{8}$",
              "$\\dfrac{\\sqrt3}{8}$",
              "$\\dfrac18$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{\\sqrt3}{2}-\\dfrac13\\times\\dfrac{3\\sqrt3}{8}=\\dfrac{4\\sqrt3}{8}-\\dfrac{\\sqrt3}{8}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La formule par parties",
          "stepTheme": "La formule par parties",
          "stepBadge": "La formule par parties",
          "paragraphText": "$\\displaystyle\\int_a^buv'=\\Big[uv\\Big]_a^b-\\int_a^bu'v$ : on échange une intégrale difficile contre une plus simple.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q4",
            "type": "mcq",
            "prompt": "Pour $\\displaystyle\\int_1^ex^2\\ln x\\,dx$, quel choix est le bon ?",
            "options": [
              "$u=x^2$ et $v'=\\ln x$",
              "$u=x^2\\ln x$ et $v'=1$",
              "$u=\\ln x$ et $v'=x^2$",
              "$u=1$ et $v'=x^2\\ln x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On dérive $\\ln x$ (qui devient $\\dfrac1x$) et on primitive $x^2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Terminer le calcul",
          "stepTheme": "Terminer le calcul",
          "stepBadge": "Terminer le calcul",
          "paragraphText": "$\\left[\\dfrac{x^3}{3}\\ln x\\right]_1^e=\\dfrac{e^3}{3}$ et $\\displaystyle\\int_1^e\\dfrac{x^2}{3}\\,dx=\\dfrac{e^3-1}{9}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_1^ex^2\\ln x\\,dx$ ?",
            "options": [
              "$\\dfrac{e^3}{3}$",
              "$\\dfrac{2e^3-1}{9}$",
              "$\\dfrac{e^3+1}{9}$",
              "$\\dfrac{2e^3+1}{9}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac{3e^3}{9}-\\dfrac{e^3-1}{9}=\\dfrac{2e^3+1}{9}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un polynôme fois $e^x$",
          "stepTheme": "Un polynôme fois $e^x$",
          "stepBadge": "Un polynôme fois $e^x$",
          "paragraphText": "$\\displaystyle\\int_0^1(x+1)e^x\\,dx$ : $u=x+1$, $v'=e^x$. On obtient $\\Big[(x+1)e^x\\Big]_0^1-\\int_0^1e^x\\,dx$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_0^1(x+1)e^x\\,dx$ ? (Par parties : $u=x+1$, $v'=e^x$.)",
            "options": [
              "$e$",
              "$2e$",
              "$e-1$",
              "$2e-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(2e-1)-(e-1)=e$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le mauvais choix",
          "stepTheme": "Le mauvais choix",
          "stepBadge": "Le mauvais choix",
          "paragraphText": "Si l'on prend $v'=\\ln x$, il faut une primitive de $\\ln x$ : on complique au lieu de simplifier. On dérive ce qui se simplifie.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q7",
            "type": "mcq",
            "prompt": "Pour $\\displaystyle\\int_2^3\\ln x\\,dx$, on écrit $\\ln x=1\\times\\ln x$. Quel choix faire ?",
            "options": [
              "$u=1$, $v'=\\ln x$",
              "$u=\\ln x$, $v'=1$",
              "$u=x$, $v'=\\ln x$",
              "On ne peut pas intégrer par parties"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$u'=\\dfrac1x$ et $v=x$ : $\\Big[x\\ln x\\Big]_2^3-\\displaystyle\\int_2^31\\,dx$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_0^1\\dfrac{e^x}{1+e^x}\\,dx$ ?",
          "options": [
            "$\\ln(1+e)$",
            "$\\ln\\dfrac{1+e}{2}$",
            "$e-1$",
            "$\\ln2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln(1+e)-\\ln(1+1)=\\ln\\dfrac{1+e}{2}$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_0^1xe^{x^2}\\,dx$ ?",
          "options": [
            "$e-1$",
            "$\\dfrac{e}{2}$",
            "$\\dfrac{e-1}{2}$",
            "$2(e-1)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac12\\Big[e^{x^2}\\Big]_0^1=\\dfrac12(e-1)$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_0^{\\pi/3}\\cos^3t\\,dt$ ?",
          "options": [
            "$\\dfrac{\\sqrt3}{2}$",
            "$\\dfrac{3\\sqrt3}{8}$",
            "$\\dfrac{\\sqrt3}{8}$",
            "$\\dfrac18$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{\\sqrt3}{2}-\\dfrac13\\times\\dfrac{3\\sqrt3}{8}=\\dfrac{4\\sqrt3}{8}-\\dfrac{\\sqrt3}{8}$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q4",
          "type": "mcq",
          "prompt": "Pour $\\displaystyle\\int_1^ex^2\\ln x\\,dx$, quel choix est le bon ?",
          "options": [
            "$u=x^2$ et $v'=\\ln x$",
            "$u=x^2\\ln x$ et $v'=1$",
            "$u=\\ln x$ et $v'=x^2$",
            "$u=1$ et $v'=x^2\\ln x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On dérive $\\ln x$ (qui devient $\\dfrac1x$) et on primitive $x^2$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_1^ex^2\\ln x\\,dx$ ?",
          "options": [
            "$\\dfrac{e^3}{3}$",
            "$\\dfrac{2e^3-1}{9}$",
            "$\\dfrac{e^3+1}{9}$",
            "$\\dfrac{2e^3+1}{9}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac{3e^3}{9}-\\dfrac{e^3-1}{9}=\\dfrac{2e^3+1}{9}$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_0^1(x+1)e^x\\,dx$ ? (Par parties : $u=x+1$, $v'=e^x$.)",
          "options": [
            "$e$",
            "$2e$",
            "$e-1$",
            "$2e-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(2e-1)-(e-1)=e$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p05_q7",
          "type": "mcq",
          "prompt": "Pour $\\displaystyle\\int_2^3\\ln x\\,dx$, on écrit $\\ln x=1\\times\\ln x$. Quel choix faire ?",
          "options": [
            "$u=1$, $v'=\\ln x$",
            "$u=\\ln x$, $v'=1$",
            "$u=x$, $v'=\\ln x$",
            "On ne peut pas intégrer par parties"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$u'=\\dfrac1x$ et $v=x$ : $\\Big[x\\ln x\\Big]_2^3-\\displaystyle\\int_2^31\\,dx$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l10_calcul_integral_p06",
      "order": 6,
      "title": "Changement de variable affine, parité, périodicité",
      "summary": "Simplifier une intégrale grâce à $t=\\alpha x+\\beta$ ou à la forme de la courbe.",
      "conceptExplanation": "1. Changement de variable affine : pour $\\displaystyle\\int_a^bf(\\alpha x+\\beta)\\,dx$ ($\\alpha\\neq0$), on pose $t=\\alpha x+\\beta$.\n- $dt=\\alpha\\,dx$, donc $dx=\\dfrac{1}{\\alpha}dt$ ;\n- les bornes changent : $x=a$ donne $t=\\alpha a+\\beta$, $x=b$ donne $t=\\alpha b+\\beta$ ;\n- $\\displaystyle\\int_a^bf(\\alpha x+\\beta)\\,dx=\\int_{\\alpha a+\\beta}^{\\alpha b+\\beta}\\dfrac{f(t)}{\\alpha}\\,dt$.\nExemple : $P=\\displaystyle\\int_{-1}^0\\dfrac{dx}{\\sqrt{2x+3}}$. Avec $t=2x+3$ : $t$ va de $1$ à $3$, et $P=\\displaystyle\\int_1^3\\dfrac{1}{2\\sqrt t}\\,dt=\\Big[\\sqrt t\\Big]_1^3=\\sqrt3-1$.\n\n2. Fonctions paires et impaires, sur $[-a;a]$ :\n- $f$ paire : $\\displaystyle\\int_{-a}^af=2\\int_0^af$ ;\n- $f$ impaire : $\\displaystyle\\int_{-a}^af=0$.\nExemples : $\\displaystyle\\int_{-\\pi/4}^{\\pi/4}\\cos2x\\,dx=2\\int_0^{\\pi/4}\\cos2x\\,dx=\\Big[\\sin2x\\Big]_0^{\\pi/4}=1$ ; $\\displaystyle\\int_{-\\pi/4}^{\\pi/4}\\sin2x\\,dx=0$ ; $\\displaystyle\\int_{-\\pi/6}^{\\pi/6}x^6\\sin x\\,dx=0$.\n\n3. Fonctions périodiques de période $T$ :\n- $\\displaystyle\\int_{a+T}^{b+T}f=\\int_a^bf$ ;\n- $\\displaystyle\\int_a^{a+T}f=\\int_0^Tf$ (l'intégrale sur une période ne dépend pas du point de départ).\nExemple : $\\cos2x$ a pour période $\\pi$, donc $\\displaystyle\\int_{\\pi/2}^{3\\pi/2}\\cos2x\\,dx=\\int_0^{\\pi}\\cos2x\\,dx=0$.",
      "keyRule": "Changement affine : $t=\\alpha x+\\beta$, $dx=\\dfrac{dt}{\\alpha}$, nouvelles bornes. Impaire sur $[-a;a]$ : $0$ ; paire : $2\\displaystyle\\int_0^a$.",
      "formulas": [
        {
          "name": "Changement affine",
          "formula": "\\int_a^bf(\\alpha x+\\beta)\\,dx=\\dfrac1\\alpha\\int_{\\alpha a+\\beta}^{\\alpha b+\\beta}f(t)\\,dt"
        },
        {
          "name": "Fonction impaire",
          "formula": "\\int_{-a}^af(x)\\,dx=0"
        }
      ],
      "workedExample": {
        "title": "Un changement de variable",
        "statement": "Calcule $P=\\displaystyle\\int_{-1}^0\\dfrac{1}{\\sqrt{2x+3}}\\,dx$.",
        "methodSteps": [
          "On pose $t=2x+3$ : $dx=\\dfrac12dt$ ; $x=-1$ donne $t=1$ et $x=0$ donne $t=3$.",
          "$P=\\displaystyle\\int_1^3\\dfrac{1}{2\\sqrt t}\\,dt=\\Big[\\sqrt t\\Big]_1^3$."
        ],
        "conclusion": "$P=\\sqrt3-1$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Poser $t=\\alpha x+\\beta$",
          "stepTheme": "Poser $t=\\alpha x+\\beta$",
          "stepBadge": "Poser $t=\\alpha x+\\beta$",
          "paragraphText": "Avec $t=2x+3$ : $dt=2\\,dx$, donc $dx=\\dfrac12dt$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q1",
            "type": "mcq",
            "prompt": "Avec $t=2x+3$, que deviennent les bornes $x=-1$ et $x=0$ ?",
            "options": [
              "$t=-1$ et $t=0$",
              "$t=1$ et $t=3$",
              "$t=-2$ et $t=0$",
              "$t=5$ et $t=3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2\\times(-1)+3=1$ et $2\\times0+3=3$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Terminer le calcul",
          "stepTheme": "Terminer le calcul",
          "stepBadge": "Terminer le calcul",
          "paragraphText": "$P=\\displaystyle\\int_1^3\\dfrac{1}{2\\sqrt t}\\,dt$, et une primitive de $\\dfrac{1}{2\\sqrt t}$ est $\\sqrt t$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q2",
            "type": "mcq",
            "prompt": "Avec $t=2x+3$, $P=\\displaystyle\\int_{-1}^0\\dfrac{1}{\\sqrt{2x+3}}\\,dx$ devient $\\displaystyle\\int_1^3\\dfrac{1}{2\\sqrt t}\\,dt$. Que vaut $P$ ?",
            "options": [
              "$\\sqrt3$",
              "$2(\\sqrt3-1)$",
              "$\\dfrac{\\sqrt3-1}{2}$",
              "$\\sqrt3-1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\sqrt3-\\sqrt1=\\sqrt3-1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Fonction impaire",
          "stepTheme": "Fonction impaire",
          "stepBadge": "Fonction impaire",
          "paragraphText": "Si $f$ est impaire, les aires de part et d'autre de $0$ se compensent : $\\displaystyle\\int_{-a}^af=0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_{-\\pi/6}^{\\pi/6}x^6\\sin x\\,dx$ ?",
            "options": [
              "$0$",
              "$\\dfrac{\\pi}{3}$",
              "$1$",
              "On ne peut pas la calculer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$x^6\\sin x$ est impaire (paire × impaire) et l'intervalle est symétrique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Fonction paire",
          "stepTheme": "Fonction paire",
          "stepBadge": "Fonction paire",
          "paragraphText": "Si $f$ est paire, $\\displaystyle\\int_{-a}^af=2\\int_0^af$ : la courbe est symétrique par rapport à l'axe des ordonnées.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_{-\\pi/4}^{\\pi/4}\\cos2x\\,dx$ ?",
            "options": [
              "$0$",
              "$\\dfrac12$",
              "$1$",
              "$2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$2\\displaystyle\\int_0^{\\pi/4}\\cos2x\\,dx=2\\times\\dfrac12\\Big[\\sin2x\\Big]_0^{\\pi/4}=1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Fonction périodique",
          "stepTheme": "Fonction périodique",
          "stepBadge": "Fonction périodique",
          "paragraphText": "Sur une période complète, l'intégrale ne dépend pas du point de départ : $\\displaystyle\\int_a^{a+T}f=\\int_0^Tf$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q5",
            "type": "mcq",
            "prompt": "$\\cos2x$ a pour période $\\pi$. Que vaut $\\displaystyle\\int_{\\pi/2}^{3\\pi/2}\\cos2x\\,dx$ ?",
            "options": [
              "$1$",
              "$\\pi$",
              "$-1$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est une période complète : $\\displaystyle\\int_0^{\\pi}\\cos2x\\,dx=\\dfrac12\\Big[\\sin2x\\Big]_0^{\\pi}=0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Plusieurs périodes",
          "stepTheme": "Plusieurs périodes",
          "stepBadge": "Plusieurs périodes",
          "paragraphText": "$\\cos x$ a pour période $2\\pi$. De $\\dfrac{\\pi}{2}$ à $\\dfrac{5\\pi}{2}$, on couvre exactement une période.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_{\\pi/2}^{5\\pi/2}\\cos x\\,dx$ ?",
            "options": [
              "$2$",
              "$0$",
              "$-2$",
              "$2\\pi$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\Big[\\sin x\\Big]_{\\pi/2}^{5\\pi/2}=1-1=0$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Oublier de changer les bornes",
          "stepTheme": "Oublier de changer les bornes",
          "stepBadge": "Oublier de changer les bornes",
          "paragraphText": "Après $t=\\alpha x+\\beta$, les bornes doivent être exprimées en $t$. Garder $-1$ et $0$ donnerait un résultat faux.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q7",
            "type": "mcq",
            "prompt": "Pour $\\displaystyle\\int_{-5/2}^{-2}(2x+5)^7\\,dx$, avec $t=2x+5$, quelles bornes en $t$ ?",
            "options": [
              "De $-\\dfrac52$ à $-2$",
              "De $0$ à $1$",
              "De $5$ à $7$",
              "De $-5$ à $-4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2\\times(-\\dfrac52)+5=0$ et $2\\times(-2)+5=1$. L'intégrale vaut $\\dfrac12\\left[\\dfrac{t^8}{8}\\right]_0^1=\\dfrac{1}{16}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q1",
          "type": "mcq",
          "prompt": "Avec $t=2x+3$, que deviennent les bornes $x=-1$ et $x=0$ ?",
          "options": [
            "$t=-1$ et $t=0$",
            "$t=1$ et $t=3$",
            "$t=-2$ et $t=0$",
            "$t=5$ et $t=3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2\\times(-1)+3=1$ et $2\\times0+3=3$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q2",
          "type": "mcq",
          "prompt": "Avec $t=2x+3$, $P=\\displaystyle\\int_{-1}^0\\dfrac{1}{\\sqrt{2x+3}}\\,dx$ devient $\\displaystyle\\int_1^3\\dfrac{1}{2\\sqrt t}\\,dt$. Que vaut $P$ ?",
          "options": [
            "$\\sqrt3$",
            "$2(\\sqrt3-1)$",
            "$\\dfrac{\\sqrt3-1}{2}$",
            "$\\sqrt3-1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\sqrt3-\\sqrt1=\\sqrt3-1$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_{-\\pi/6}^{\\pi/6}x^6\\sin x\\,dx$ ?",
          "options": [
            "$0$",
            "$\\dfrac{\\pi}{3}$",
            "$1$",
            "On ne peut pas la calculer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$x^6\\sin x$ est impaire (paire × impaire) et l'intervalle est symétrique."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_{-\\pi/4}^{\\pi/4}\\cos2x\\,dx$ ?",
          "options": [
            "$0$",
            "$\\dfrac12$",
            "$1$",
            "$2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$2\\displaystyle\\int_0^{\\pi/4}\\cos2x\\,dx=2\\times\\dfrac12\\Big[\\sin2x\\Big]_0^{\\pi/4}=1$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q5",
          "type": "mcq",
          "prompt": "$\\cos2x$ a pour période $\\pi$. Que vaut $\\displaystyle\\int_{\\pi/2}^{3\\pi/2}\\cos2x\\,dx$ ?",
          "options": [
            "$1$",
            "$\\pi$",
            "$-1$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est une période complète : $\\displaystyle\\int_0^{\\pi}\\cos2x\\,dx=\\dfrac12\\Big[\\sin2x\\Big]_0^{\\pi}=0$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_{\\pi/2}^{5\\pi/2}\\cos x\\,dx$ ?",
          "options": [
            "$2$",
            "$0$",
            "$-2$",
            "$2\\pi$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\Big[\\sin x\\Big]_{\\pi/2}^{5\\pi/2}=1-1=0$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p06_q7",
          "type": "mcq",
          "prompt": "Pour $\\displaystyle\\int_{-5/2}^{-2}(2x+5)^7\\,dx$, avec $t=2x+5$, quelles bornes en $t$ ?",
          "options": [
            "De $-\\dfrac52$ à $-2$",
            "De $0$ à $1$",
            "De $5$ à $7$",
            "De $-5$ à $-4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2\\times(-\\dfrac52)+5=0$ et $2\\times(-2)+5=1$. L'intégrale vaut $\\dfrac12\\left[\\dfrac{t^8}{8}\\right]_0^1=\\dfrac{1}{16}$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l10_calcul_integral_p07",
      "order": 7,
      "title": "Calcul d'aires",
      "summary": "Tenir compte du signe ; entre deux courbes, intégrer « celle du haut moins celle du bas ».",
      "conceptExplanation": "Le plan est muni d'un repère orthogonal $(O,I,J)$.\n\n1. Aire entre $(C_f)$, l'axe $(OI)$ et les droites $x=a$, $x=b$ :\n- $f\\geq0$ sur $[a;b]$ : $\\mathcal{A}=\\displaystyle\\int_a^bf(x)\\,dx$ u.a. ;\n- $f\\leq0$ sur $[a;b]$ : $\\mathcal{A}=-\\displaystyle\\int_a^bf(x)\\,dx$ u.a. ;\n- $f$ change de signe : on découpe aux points où $f$ s'annule.\n\nExemples :\n- $f(x)=-x^2$ sur $[1;3]$, unités 2 cm et 4 cm : $\\mathcal{A}=\\displaystyle\\int_1^3x^2\\,dx=\\dfrac{26}{3}$ u.a., soit $\\dfrac{26}{3}\\times8=\\dfrac{208}{3}$ cm² ;\n- $f(x)=x^3$ sur $[-1;1]$, unité 2 cm : $\\mathcal{A}=-\\displaystyle\\int_{-1}^0x^3\\,dx+\\int_0^1x^3\\,dx=\\dfrac14+\\dfrac14=\\dfrac12$ u.a., soit $2$ cm².\n\n2. Aire entre deux courbes, de $x=a$ à $x=b$ :\n- si $f\\leq g$ sur $[a;b]$ : $\\mathcal{A}=\\displaystyle\\int_a^b\\big(g(x)-f(x)\\big)\\,dx$ u.a. ;\n- si $f-g$ change de signe, on découpe.\nExemple : $f(x)=x+2$ et $g(x)=x^2$ sur $[-1;2]$, unité 2 cm. $x+2-x^2=-(x+1)(x-2)\\geq0$ sur $[-1;2]$, donc\n$$\\mathcal{A}=\\int_{-1}^2(x+2-x^2)\\,dx=\\left[\\dfrac{x^2}{2}+2x-\\dfrac{x^3}{3}\\right]_{-1}^2=\\dfrac{10}{3}+\\dfrac76=\\dfrac92\\ \\text{u.a.}=18\\ \\text{cm}^2.$$\n\n3. La fonction $F:x\\mapsto\\displaystyle\\int_a^xf(t)\\,dt$ est la primitive de $f$ qui s'annule en $a$ : $F'(x)=f(x)$. Ainsi $\\ln x=\\displaystyle\\int_1^x\\dfrac1t\\,dt$.",
      "keyRule": "$\\mathcal{A}=\\displaystyle\\int_a^b|f|$ : changer le signe là où $f<0$. Entre deux courbes : $\\displaystyle\\int_a^b(\\text{haut}-\\text{bas})$.",
      "formulas": [
        {
          "name": "Entre deux courbes",
          "formula": "\\mathcal{A}=\\int_a^b\\big(g(x)-f(x)\\big)\\,dx\\quad(f\\leq g)"
        },
        {
          "name": "Fonction intégrale",
          "formula": "F(x)=\\int_a^xf(t)\\,dt\\ \\Rightarrow\\ F'=f,\\ F(a)=0"
        }
      ],
      "workedExample": {
        "title": "Une aire de part et d'autre de l'axe",
        "statement": "Unité 2 cm. Calcule l'aire entre la courbe de $f(x)=x^3$, l'axe des abscisses et les droites $x=-1$ et $x=1$.",
        "methodSteps": [
          "$f\\leq0$ sur $[-1;0]$ et $f\\geq0$ sur $[0;1]$.",
          "$\\mathcal{A}=-\\left[\\dfrac{x^4}{4}\\right]_{-1}^0+\\left[\\dfrac{x^4}{4}\\right]_0^1=\\dfrac14+\\dfrac14=\\dfrac12$ u.a.",
          "$1$ u.a. $=2\\times2=4$ cm²."
        ],
        "conclusion": "$\\mathcal{A}=2$ cm² (alors que $\\displaystyle\\int_{-1}^1x^3\\,dx=0$)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Fonction négative",
          "stepTheme": "Fonction négative",
          "stepBadge": "Fonction négative",
          "paragraphText": "Si $f\\leq0$ sur $[a;b]$, l'aire vaut $-\\displaystyle\\int_a^bf(x)\\,dx$ : on prend l'opposé pour obtenir un nombre positif.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q1",
            "type": "mcq",
            "prompt": "Quelle est l'aire (en u.a.) entre la courbe de $-x^2$, l'axe et les droites $x=1$, $x=3$ ?",
            "options": [
              "$-\\dfrac{26}{3}$",
              "$\\dfrac{26}{3}$",
              "$9$",
              "$\\dfrac{28}{3}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$-\\displaystyle\\int_1^3(-x^2)\\,dx=\\left[\\dfrac{x^3}{3}\\right]_1^3=9-\\dfrac13$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "En centimètres carrés",
          "stepTheme": "En centimètres carrés",
          "stepBadge": "En centimètres carrés",
          "paragraphText": "Unités 2 cm et 4 cm : $1$ u.a. $=8$ cm², donc $\\mathcal{A}=\\dfrac{26}{3}\\times8$ cm².",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q2",
            "type": "mcq",
            "prompt": "Une aire vaut $\\dfrac{26}{3}$ u.a. dans un repère d'unités 2 cm (abscisses) et 4 cm (ordonnées). Que vaut-elle en cm² ?",
            "options": [
              "$\\dfrac{104}{3}$ cm²",
              "$\\dfrac{26}{3}$ cm²",
              "$\\dfrac{208}{3}$ cm²",
              "$208$ cm²"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{26\\times8}{3}=\\dfrac{208}{3}\\approx69{,}3$ cm²."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Découper selon le signe",
          "stepTheme": "Découper selon le signe",
          "stepBadge": "Découper selon le signe",
          "paragraphText": "$x^3$ est négative sur $[-1;0]$ et positive sur $[0;1]$ : $\\mathcal{A}=-\\displaystyle\\int_{-1}^0x^3\\,dx+\\int_0^1x^3\\,dx$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q3",
            "type": "mcq",
            "prompt": "Quelle est l'aire (en u.a.) entre la courbe de $x^3$, l'axe des abscisses et les droites $x=-1$ et $x=1$ ?",
            "options": [
              "$0$",
              "$\\dfrac14$",
              "$1$",
              "$\\dfrac12$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac14+\\dfrac14=\\dfrac12$ u.a."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Entre deux courbes",
          "stepTheme": "Entre deux courbes",
          "stepBadge": "Entre deux courbes",
          "paragraphText": "On intègre « courbe du haut moins courbe du bas ». Pour $x+2$ et $x^2$ sur $[-1;2]$ : $x+2-x^2=-(x+1)(x-2)\\geq0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q4",
            "type": "mcq",
            "prompt": "Quelle intégrale donne l'aire entre $y=x+2$ et $y=x^2$ sur $[-1;2]$ ?",
            "options": [
              "$\\displaystyle\\int_{-1}^2(x+2-x^2)\\,dx$",
              "$\\displaystyle\\int_{-1}^2(x^2-x-2)\\,dx$",
              "$\\displaystyle\\int_{-1}^2(x+2+x^2)\\,dx$",
              "$\\displaystyle\\int_{-1}^2x^2\\,dx$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La droite est au-dessus de la parabole sur $[-1;2]$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le calcul",
          "stepTheme": "Le calcul",
          "stepBadge": "Le calcul",
          "paragraphText": "$\\left[\\dfrac{x^2}{2}+2x-\\dfrac{x^3}{3}\\right]_{-1}^2=\\left(2+4-\\dfrac83\\right)-\\left(\\dfrac12-2+\\dfrac13\\right)=\\dfrac{10}{3}+\\dfrac76$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q5",
            "type": "mcq",
            "prompt": "L'aire entre $y=x+2$ et $y=x^2$ sur $[-1;2]$ vaut $\\dfrac{10}{3}+\\dfrac76$ u.a. Avec une unité graphique de 2 cm, que vaut cette aire en cm² ?",
            "options": [
              "$\\dfrac92$ cm²",
              "$9$ cm²",
              "$27$ cm²",
              "$18$ cm²"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac{27}{6}=\\dfrac92$ u.a., et $\\dfrac92\\times4=18$ cm²."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La fonction $x\\mapsto\\displaystyle\\int_a^xf(t)\\,dt$",
          "stepTheme": "La fonction $x\\mapsto\\displaystyle\\int_a^xf(t)\\,dt$",
          "stepBadge": "La fonction $x\\mapsto\\displaystyle\\int_a^xf(t)\\,dt$",
          "paragraphText": "$F(x)=\\displaystyle\\int_a^xf(t)\\,dt$ est la primitive de $f$ qui s'annule en $a$. Par exemple $\\ln x=\\displaystyle\\int_1^x\\dfrac1t\\,dt$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q6",
            "type": "mcq",
            "prompt": "$F(x)=\\displaystyle\\int_1^x\\dfrac{e^t}{t}\\,dt$ sur $]0;+\\infty[$. Que vaut $F'(x)$ ?",
            "options": [
              "$\\dfrac{e^x}{x}$",
              "$e^x\\ln x$",
              "$\\dfrac{e^x}{x}-e$",
              "$0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$F'=f$ : on remplace $t$ par $x$. Donc $F$ est croissante."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Intégrale nulle, aire non nulle",
          "stepTheme": "Intégrale nulle, aire non nulle",
          "stepBadge": "Intégrale nulle, aire non nulle",
          "paragraphText": "$\\displaystyle\\int_{-1}^1x^3\\,dx=0$ car les parties positive et négative se compensent ; pourtant l'aire vaut $\\dfrac12$ u.a.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q7",
            "type": "mcq",
            "prompt": "Pourquoi ne peut-on pas écrire $\\mathcal{A}=\\displaystyle\\int_{-1}^1x^3\\,dx$ ?",
            "options": [
              "Parce que $x^3$ n'est pas continue",
              "Parce que l'intervalle est trop petit",
              "Parce que $x^3$ change de signe sur $[-1;1]$",
              "On peut l'écrire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La partie sous l'axe compte négativement dans l'intégrale, mais positivement dans l'aire."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q1",
          "type": "mcq",
          "prompt": "Quelle est l'aire (en u.a.) entre la courbe de $-x^2$, l'axe et les droites $x=1$, $x=3$ ?",
          "options": [
            "$-\\dfrac{26}{3}$",
            "$\\dfrac{26}{3}$",
            "$9$",
            "$\\dfrac{28}{3}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$-\\displaystyle\\int_1^3(-x^2)\\,dx=\\left[\\dfrac{x^3}{3}\\right]_1^3=9-\\dfrac13$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q2",
          "type": "mcq",
          "prompt": "Une aire vaut $\\dfrac{26}{3}$ u.a. dans un repère d'unités 2 cm (abscisses) et 4 cm (ordonnées). Que vaut-elle en cm² ?",
          "options": [
            "$\\dfrac{104}{3}$ cm²",
            "$\\dfrac{26}{3}$ cm²",
            "$\\dfrac{208}{3}$ cm²",
            "$208$ cm²"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{26\\times8}{3}=\\dfrac{208}{3}\\approx69{,}3$ cm²."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q3",
          "type": "mcq",
          "prompt": "Quelle est l'aire (en u.a.) entre la courbe de $x^3$, l'axe des abscisses et les droites $x=-1$ et $x=1$ ?",
          "options": [
            "$0$",
            "$\\dfrac14$",
            "$1$",
            "$\\dfrac12$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac14+\\dfrac14=\\dfrac12$ u.a."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q4",
          "type": "mcq",
          "prompt": "Quelle intégrale donne l'aire entre $y=x+2$ et $y=x^2$ sur $[-1;2]$ ?",
          "options": [
            "$\\displaystyle\\int_{-1}^2(x+2-x^2)\\,dx$",
            "$\\displaystyle\\int_{-1}^2(x^2-x-2)\\,dx$",
            "$\\displaystyle\\int_{-1}^2(x+2+x^2)\\,dx$",
            "$\\displaystyle\\int_{-1}^2x^2\\,dx$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La droite est au-dessus de la parabole sur $[-1;2]$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q5",
          "type": "mcq",
          "prompt": "L'aire entre $y=x+2$ et $y=x^2$ sur $[-1;2]$ vaut $\\dfrac{10}{3}+\\dfrac76$ u.a. Avec une unité graphique de 2 cm, que vaut cette aire en cm² ?",
          "options": [
            "$\\dfrac92$ cm²",
            "$9$ cm²",
            "$27$ cm²",
            "$18$ cm²"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac{27}{6}=\\dfrac92$ u.a., et $\\dfrac92\\times4=18$ cm²."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q6",
          "type": "mcq",
          "prompt": "$F(x)=\\displaystyle\\int_1^x\\dfrac{e^t}{t}\\,dt$ sur $]0;+\\infty[$. Que vaut $F'(x)$ ?",
          "options": [
            "$\\dfrac{e^x}{x}$",
            "$e^x\\ln x$",
            "$\\dfrac{e^x}{x}-e$",
            "$0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$F'=f$ : on remplace $t$ par $x$. Donc $F$ est croissante."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p07_q7",
          "type": "mcq",
          "prompt": "Pourquoi ne peut-on pas écrire $\\mathcal{A}=\\displaystyle\\int_{-1}^1x^3\\,dx$ ?",
          "options": [
            "Parce que $x^3$ n'est pas continue",
            "Parce que l'intervalle est trop petit",
            "Parce que $x^3$ change de signe sur $[-1;1]$",
            "On peut l'écrire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La partie sous l'axe compte négativement dans l'intégrale, mais positivement dans l'aire."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l10_calcul_integral_p08",
      "order": 8,
      "title": "Situations : la terrasse et la chute libre",
      "summary": "L'intégrale sert à calculer des surfaces et des distances.",
      "conceptExplanation": "Situation 1 (la terrasse) : un ancien professeur de mathématiques veut revêtir sa terrasse. Elle est formée :\n- d'une partie verte, un rectangle de 4 m sur 2 m ;\n- d'une partie rose, limitée par le segment $[AB]$ et la parabole $y=-x^2+4$, avec $A(-2;0)$ et $B(2;0)$ (unité : 1 m).\n\n1. Partie rose : $-x^2+4\\geq0$ sur $[-2;2]$, donc\n$$A_1=\\int_{-2}^2(-x^2+4)\\,dx=\\left[-\\dfrac{x^3}{3}+4x\\right]_{-2}^2=\\left(-\\dfrac83+8\\right)-\\left(\\dfrac83-8\\right)=\\dfrac{32}{3}\\ \\text{m}^2\\approx10{,}67\\ \\text{m}^2.$$\n2. Partie verte : $A_2=4\\times2=8$ m².\n3. Aire totale : $A_1+A_2=\\dfrac{32}{3}+8=\\dfrac{56}{3}\\approx18{,}67$ m².\n\nSituation 2 (la chute libre) : un corps est lâché sans vitesse initiale d'une hauteur de 2 000 m ; sa vitesse au temps $t$ est $v(t)=gt$ avec $g=9{,}8$ m/s².\n- La distance parcourue après $x$ secondes est $D(x)=\\displaystyle\\int_0^xgt\\,dt=\\left[\\dfrac{gt^2}{2}\\right]_0^x=4{,}9x^2$ ;\n- il touche le sol quand $4{,}9T^2=2\\,000$, soit $T^2\\approx408{,}2$ et $T\\approx20{,}2$ s.",
      "keyRule": "Une surface limitée par une courbe se calcule par une intégrale ; une distance est l'intégrale de la vitesse.",
      "formulas": [
        {
          "name": "Distance parcourue",
          "formula": "D(x)=\\int_0^xv(t)\\,dt"
        }
      ],
      "workedExample": {
        "title": "La partie rose de la terrasse",
        "statement": "Calcule $A_1=\\displaystyle\\int_{-2}^2(-x^2+4)\\,dx$.",
        "methodSteps": [
          "Une primitive est $G(x)=-\\dfrac{x^3}{3}+4x$.",
          "$G(2)=-\\dfrac83+8=\\dfrac{16}{3}$ et $G(-2)=\\dfrac83-8=-\\dfrac{16}{3}$.",
          "$A_1=\\dfrac{16}{3}-\\left(-\\dfrac{16}{3}\\right)$."
        ],
        "conclusion": "$A_1=\\dfrac{32}{3}\\approx10{,}67$ m², et l'aire totale vaut $\\dfrac{56}{3}\\approx18{,}67$ m²."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Vérifier le signe",
          "stepTheme": "Vérifier le signe",
          "stepBadge": "Vérifier le signe",
          "paragraphText": "$-x^2+4\\geq0\\iff x^2\\leq4\\iff-2\\leq x\\leq2$ : la parabole est au-dessus de $[AB]$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q1",
            "type": "mcq",
            "prompt": "Où la parabole $y=-x^2+4$ coupe-t-elle l'axe des abscisses ?",
            "options": [
              "En $-4$ et $4$",
              "En $0$",
              "En $-2$ et $2$",
              "Nulle part"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-x^2+4=0\\iff x=\\pm2$ : ce sont les points $A$ et $B$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La primitive",
          "stepTheme": "La primitive",
          "stepBadge": "La primitive",
          "paragraphText": "$G(x)=-\\dfrac{x^3}{3}+4x$ : $G(2)=\\dfrac{16}{3}$ et $G(-2)=-\\dfrac{16}{3}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q2",
            "type": "mcq",
            "prompt": "La partie rose d'une terrasse est limitée par $[AB]$, avec $A(-2;0)$ et $B(2;0)$, et par la parabole $y=-x^2+4$ (unité : 1 m). Que vaut son aire ?",
            "options": [
              "$16$ m²",
              "$\\dfrac{32}{3}$ m²",
              "$\\dfrac{16}{3}$ m²",
              "$8$ m²"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{16}{3}+\\dfrac{16}{3}=\\dfrac{32}{3}\\approx10{,}67$ m²."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'aire totale",
          "stepTheme": "L'aire totale",
          "stepBadge": "L'aire totale",
          "paragraphText": "On ajoute le rectangle vert de $4\\times2=8$ m².",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q3",
            "type": "mcq",
            "prompt": "Une terrasse est formée d'un rectangle de 4 m sur 2 m et d'une partie de $\\dfrac{32}{3}$ m² sous une parabole. Quelle est son aire totale ?",
            "options": [
              "$24$ m²",
              "$18$ m²",
              "$\\dfrac{40}{3}$ m²",
              "$\\dfrac{56}{3}\\approx18{,}67$ m²"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac{32}{3}+8=\\dfrac{56}{3}$ m²."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Une erreur de signe",
          "stepTheme": "Une erreur de signe",
          "stepBadge": "Une erreur de signe",
          "paragraphText": "$G(-2)=-\\dfrac{(-2)^3}{3}+4\\times(-2)=\\dfrac83-8$. Oublier le signe de $(-2)^3$ ou de $4\\times(-2)$ fausse le résultat (on trouverait $16$).",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q4",
            "type": "mcq",
            "prompt": "Que vaut $G(-2)=-\\dfrac{(-2)^3}{3}+4\\times(-2)$ ?",
            "options": [
              "$-\\dfrac{16}{3}$",
              "$\\dfrac{16}{3}$",
              "$-\\dfrac{32}{3}$",
              "$\\dfrac83+8$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac83-8=\\dfrac{8-24}{3}=-\\dfrac{16}{3}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Distance et vitesse",
          "stepTheme": "Distance et vitesse",
          "stepBadge": "Distance et vitesse",
          "paragraphText": "La distance parcourue entre $0$ et $x$ est l'intégrale de la vitesse : $D(x)=\\displaystyle\\int_0^xgt\\,dt$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q5",
            "type": "mcq",
            "prompt": "Que vaut $D(x)=\\displaystyle\\int_0^x9{,}8t\\,dt$ ?",
            "options": [
              "$9{,}8x$",
              "$4{,}9x^2$",
              "$9{,}8x^2$",
              "$19{,}6x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\left[\\dfrac{9{,}8t^2}{2}\\right]_0^x=4{,}9x^2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le temps de chute",
          "stepTheme": "Le temps de chute",
          "stepBadge": "Le temps de chute",
          "paragraphText": "Le corps touche le sol quand $D(T)=2\\,000$ : $4{,}9T^2=2\\,000$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q6",
            "type": "mcq",
            "prompt": "Un corps lâché de 2 000 m de hauteur a parcouru $4{,}9x^2$ mètres après $x$ secondes. Au bout de combien de temps environ touche-t-il le sol ?",
            "options": [
              "$408$ s",
              "$204$ s",
              "$20{,}2$ s",
              "$9{,}8$ s"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$T=\\sqrt{\\dfrac{2000}{4{,}9}}\\approx\\sqrt{408{,}2}\\approx20{,}2$ s."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Une valeur absolue",
          "stepTheme": "Une valeur absolue",
          "stepBadge": "Une valeur absolue",
          "paragraphText": "$\\displaystyle\\int_{-4}^6|x+3|\\,dx$ : on découpe en $-3$. De $-4$ à $-3$, un triangle d'aire $\\dfrac12$ ; de $-3$ à $6$, un triangle d'aire $\\dfrac{9\\times9}{2}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q7",
            "type": "mcq",
            "prompt": "Que vaut $\\displaystyle\\int_{-4}^6|x+3|\\,dx$ ?",
            "options": [
              "$40$",
              "$41$",
              "$30$",
              "$\\dfrac{81}{2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac12+\\dfrac{81}{2}=41$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q1",
          "type": "mcq",
          "prompt": "Où la parabole $y=-x^2+4$ coupe-t-elle l'axe des abscisses ?",
          "options": [
            "En $-4$ et $4$",
            "En $0$",
            "En $-2$ et $2$",
            "Nulle part"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-x^2+4=0\\iff x=\\pm2$ : ce sont les points $A$ et $B$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q2",
          "type": "mcq",
          "prompt": "La partie rose d'une terrasse est limitée par $[AB]$, avec $A(-2;0)$ et $B(2;0)$, et par la parabole $y=-x^2+4$ (unité : 1 m). Que vaut son aire ?",
          "options": [
            "$16$ m²",
            "$\\dfrac{32}{3}$ m²",
            "$\\dfrac{16}{3}$ m²",
            "$8$ m²"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{16}{3}+\\dfrac{16}{3}=\\dfrac{32}{3}\\approx10{,}67$ m²."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q3",
          "type": "mcq",
          "prompt": "Une terrasse est formée d'un rectangle de 4 m sur 2 m et d'une partie de $\\dfrac{32}{3}$ m² sous une parabole. Quelle est son aire totale ?",
          "options": [
            "$24$ m²",
            "$18$ m²",
            "$\\dfrac{40}{3}$ m²",
            "$\\dfrac{56}{3}\\approx18{,}67$ m²"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac{32}{3}+8=\\dfrac{56}{3}$ m²."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q4",
          "type": "mcq",
          "prompt": "Que vaut $G(-2)=-\\dfrac{(-2)^3}{3}+4\\times(-2)$ ?",
          "options": [
            "$-\\dfrac{16}{3}$",
            "$\\dfrac{16}{3}$",
            "$-\\dfrac{32}{3}$",
            "$\\dfrac83+8$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac83-8=\\dfrac{8-24}{3}=-\\dfrac{16}{3}$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q5",
          "type": "mcq",
          "prompt": "Que vaut $D(x)=\\displaystyle\\int_0^x9{,}8t\\,dt$ ?",
          "options": [
            "$9{,}8x$",
            "$4{,}9x^2$",
            "$9{,}8x^2$",
            "$19{,}6x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\left[\\dfrac{9{,}8t^2}{2}\\right]_0^x=4{,}9x^2$."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q6",
          "type": "mcq",
          "prompt": "Un corps lâché de 2 000 m de hauteur a parcouru $4{,}9x^2$ mètres après $x$ secondes. Au bout de combien de temps environ touche-t-il le sol ?",
          "options": [
            "$408$ s",
            "$204$ s",
            "$20{,}2$ s",
            "$9{,}8$ s"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$T=\\sqrt{\\dfrac{2000}{4{,}9}}\\approx\\sqrt{408{,}2}\\approx20{,}2$ s."
        },
        {
          "id": "terminale_d_maths_numerique_l10_calcul_integral_p08_q7",
          "type": "mcq",
          "prompt": "Que vaut $\\displaystyle\\int_{-4}^6|x+3|\\,dx$ ?",
          "options": [
            "$40$",
            "$41$",
            "$30$",
            "$\\dfrac{81}{2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac12+\\dfrac{81}{2}=41$."
        }
      ]
    }
  ]
};
