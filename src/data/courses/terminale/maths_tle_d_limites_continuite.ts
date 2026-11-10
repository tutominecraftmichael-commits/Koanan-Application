import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « TD Maths leçon 01 LIMITES ET CONTINUITE.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_D_L01_LIMITES_CONTINUITE: CurriculumChapter = {
  "id": "terminale_d_maths_numerique_l01_limites_continuite",
  "subjectId": "maths",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 1,
  "title": "Leçon 1 : Limites et continuité d'une fonction",
  "summary": "Limite d'une composée, fonctions monotones, branches paraboliques, prolongement par continuité, bijection, théorème des valeurs intermédiaires, racine n-ième et puissances rationnelles.",
  "officialVolumeHours": 12,
  "contentVersion": 2,
  "source": "TD Maths leçon 01 LIMITES ET CONTINUITE.pdf",
  "points": [
    {
      "id": "terminale_d_maths_numerique_l01_limites_continuite_p01",
      "order": 1,
      "title": "Limite d'une fonction composée",
      "summary": "Si $f$ tend vers $b$ et $g$ tend vers $\\ell$ en $b$, alors $g\\circ f$ tend vers $\\ell$.",
      "conceptExplanation": "Propriété : soit $a$, $b$ et $\\ell$ des éléments de $\\mathbb{R}\\cup\\{-\\infty;+\\infty\\}$.\nSi $\\lim\\limits_{x\\to a}f(x)=b$ et $\\lim\\limits_{x\\to b}g(x)=\\ell$, alors $\\lim\\limits_{x\\to a}g\\circ f(x)=\\ell$.\n\nMéthode : on repère la fonction « intérieure » $f$ et la fonction « extérieure » $g$, on calcule la limite de l'intérieure, puis celle de l'extérieure en ce point.\n\nExemple 1 : $h(x)=\\sqrt{4+\\dfrac{2}{x^2+1}}$ en $+\\infty$. On a $\\lim\\limits_{x\\to+\\infty}\\left(4+\\dfrac{2}{x^2+1}\\right)=4$ et $\\lim\\limits_{X\\to4}\\sqrt{X}=2$, donc $\\lim\\limits_{x\\to+\\infty}h(x)=2$.\n\nExemple 2 : $f(x)=\\dfrac{\\sin 2x}{x}=2\\times\\dfrac{\\sin 2x}{2x}$. Quand $x\\to0$, $X=2x\\to0$ et $\\dfrac{\\sin X}{X}\\to1$, donc $\\lim\\limits_{x\\to0}f(x)=2$.\n\nCette propriété sert aussi à lire des limites sur un tableau de variation : si $\\lim\\limits_{x\\to-\\infty}x^2=+\\infty$ et $\\lim\\limits_{X\\to+\\infty}f(X)=1$, alors $\\lim\\limits_{x\\to-\\infty}f(x^2)=1$.",
      "keyRule": "$\\lim\\limits_{x\\to a}f(x)=b$ et $\\lim\\limits_{X\\to b}g(X)=\\ell$ donnent $\\lim\\limits_{x\\to a}g(f(x))=\\ell$.",
      "formulas": [
        {
          "name": "Limite de référence",
          "formula": "\\lim_{X\\to0}\\dfrac{\\sin X}{X}=1"
        }
      ],
      "workedExample": {
        "title": "Une racine composée",
        "statement": "Calcule $\\lim\\limits_{x\\to+\\infty}\\sqrt{4+\\dfrac{2}{x^2+1}}$.",
        "methodSteps": [
          "Fonction intérieure : $4+\\dfrac{2}{x^2+1}\\to4$ car $\\dfrac{2}{x^2+1}\\to0$.",
          "Fonction extérieure : $\\sqrt{X}\\to\\sqrt4=2$ quand $X\\to4$."
        ],
        "conclusion": "La limite vaut $2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La propriété",
          "stepTheme": "La propriété",
          "stepBadge": "La propriété",
          "paragraphText": "Si $f(x)\\to b$ quand $x\\to a$, et $g(X)\\to\\ell$ quand $X\\to b$, alors $g(f(x))\\to\\ell$ quand $x\\to a$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q1",
            "type": "mcq",
            "prompt": "On sait que $\\lim\\limits_{x\\to a}f(x)=b$. Pour trouver $\\lim\\limits_{x\\to a}g(f(x))$, quelle limite calcule-t-on ensuite ?",
            "options": [
              "$\\lim\\limits_{X\\to a}g(X)$",
              "$\\lim\\limits_{X\\to b}g(X)$",
              "$\\lim\\limits_{X\\to+\\infty}g(X)$",
              "$g(a)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On étudie $g$ là où arrive $f$, c'est-à-dire en $b$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Intérieur et extérieur",
          "stepTheme": "Intérieur et extérieur",
          "stepBadge": "Intérieur et extérieur",
          "paragraphText": "Dans $h(x)=\\sqrt{4+\\dfrac{2}{x^2+1}}$, la fonction intérieure est $4+\\dfrac{2}{x^2+1}$ et la fonction extérieure est la racine carrée.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q2",
            "type": "mcq",
            "prompt": "Quelle est la limite de $4+\\dfrac{2}{x^2+1}$ en $+\\infty$ ?",
            "options": [
              "$+\\infty$",
              "$6$",
              "$4$",
              "$2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{2}{x^2+1}\\to0$, il reste $4$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Conclure",
          "stepTheme": "Conclure",
          "stepBadge": "Conclure",
          "paragraphText": "Comme $\\sqrt{X}\\to2$ quand $X\\to4$, on obtient $\\lim\\limits_{x\\to+\\infty}h(x)=2$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\sqrt{9+\\dfrac{1}{x}}$ ?",
            "options": [
              "$9$",
              "$0$",
              "$+\\infty$",
              "$3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$9+\\dfrac1x\\to9$ et $\\sqrt9=3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La limite de référence",
          "stepTheme": "La limite de référence",
          "stepBadge": "La limite de référence",
          "paragraphText": "On retient : $\\lim\\limits_{X\\to0}\\dfrac{\\sin X}{X}=1$. On s'y ramène en posant $X$ égal à ce qui est dans le sinus.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{X\\to0}\\dfrac{\\sin X}{X}$ ?",
            "options": [
              "$1$",
              "$0$",
              "$+\\infty$",
              "Elle n'existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la limite de référence du sinus en $0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Avec $\\sin 2x$",
          "stepTheme": "Avec $\\sin 2x$",
          "stepBadge": "Avec $\\sin 2x$",
          "paragraphText": "$\\dfrac{\\sin 2x}{x}=2\\times\\dfrac{\\sin 2x}{2x}$. Avec $X=2x\\to0$, le quotient tend vers $1$ : la limite en $0$ est $2$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to0}\\dfrac{\\sin 3x}{x}$ ?",
            "options": [
              "$1$",
              "$\\dfrac13$",
              "$3$",
              "$0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{\\sin 3x}{x}=3\\times\\dfrac{\\sin 3x}{3x}\\to3\\times1=3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Lire sur un tableau",
          "stepTheme": "Lire sur un tableau",
          "stepBadge": "Lire sur un tableau",
          "paragraphText": "Un tableau de variation donne $\\lim\\limits_{X\\to+\\infty}f(X)=1$. Comme $x^2\\to+\\infty$ quand $x\\to-\\infty$, on a $\\lim\\limits_{x\\to-\\infty}f(x^2)=1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q6",
            "type": "mcq",
            "prompt": "Un tableau donne $\\lim\\limits_{X\\to-\\infty}f(X)=-2$. Que vaut $\\lim\\limits_{x\\to0^+}f\\left(-\\dfrac1x\\right)$ ?",
            "options": [
              "$+\\infty$",
              "$0$",
              "$2$",
              "$-2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Quand $x\\to0^+$, $-\\dfrac1x\\to-\\infty$, et $f$ tend vers $-2$ en $-\\infty$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier le facteur",
          "stepTheme": "Ne pas oublier le facteur",
          "stepBadge": "Ne pas oublier le facteur",
          "paragraphText": "Pour $\\dfrac{\\sin 2x}{x}$, répondre $1$ est une erreur fréquente : il faut faire apparaître $2x$ au dénominateur, ce qui fait sortir le facteur $2$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q7",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to0}\\dfrac{\\sin 2x}{x}$ ?",
            "options": [
              "$1$",
              "$2$",
              "$\\dfrac12$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{\\sin 2x}{x}=2\\times\\dfrac{\\sin 2x}{2x}\\to2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q1",
          "type": "mcq",
          "prompt": "On sait que $\\lim\\limits_{x\\to a}f(x)=b$. Pour trouver $\\lim\\limits_{x\\to a}g(f(x))$, quelle limite calcule-t-on ensuite ?",
          "options": [
            "$\\lim\\limits_{X\\to a}g(X)$",
            "$\\lim\\limits_{X\\to b}g(X)$",
            "$\\lim\\limits_{X\\to+\\infty}g(X)$",
            "$g(a)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On étudie $g$ là où arrive $f$, c'est-à-dire en $b$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q2",
          "type": "mcq",
          "prompt": "Quelle est la limite de $4+\\dfrac{2}{x^2+1}$ en $+\\infty$ ?",
          "options": [
            "$+\\infty$",
            "$6$",
            "$4$",
            "$2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{2}{x^2+1}\\to0$, il reste $4$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\sqrt{9+\\dfrac{1}{x}}$ ?",
          "options": [
            "$9$",
            "$0$",
            "$+\\infty$",
            "$3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$9+\\dfrac1x\\to9$ et $\\sqrt9=3$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{X\\to0}\\dfrac{\\sin X}{X}$ ?",
          "options": [
            "$1$",
            "$0$",
            "$+\\infty$",
            "Elle n'existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la limite de référence du sinus en $0$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to0}\\dfrac{\\sin 3x}{x}$ ?",
          "options": [
            "$1$",
            "$\\dfrac13$",
            "$3$",
            "$0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{\\sin 3x}{x}=3\\times\\dfrac{\\sin 3x}{3x}\\to3\\times1=3$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q6",
          "type": "mcq",
          "prompt": "Un tableau donne $\\lim\\limits_{X\\to-\\infty}f(X)=-2$. Que vaut $\\lim\\limits_{x\\to0^+}f\\left(-\\dfrac1x\\right)$ ?",
          "options": [
            "$+\\infty$",
            "$0$",
            "$2$",
            "$-2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Quand $x\\to0^+$, $-\\dfrac1x\\to-\\infty$, et $f$ tend vers $-2$ en $-\\infty$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p01_q7",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to0}\\dfrac{\\sin 2x}{x}$ ?",
          "options": [
            "$1$",
            "$2$",
            "$\\dfrac12$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{\\sin 2x}{x}=2\\times\\dfrac{\\sin 2x}{2x}\\to2$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l01_limites_continuite_p02",
      "order": 2,
      "title": "Fonction monotone et branches paraboliques",
      "summary": "Croissante et majorée : limite finie. Lire la direction d'une branche parabolique.",
      "conceptExplanation": "Limite d'une fonction monotone sur $]a;b[$ :\n- si $f$ est croissante et majorée par $M$, alors $f$ admet une limite finie $\\ell$ en $b$, avec $\\ell\\leq M$ ;\n- si $f$ est décroissante et minorée par $m$, alors $f$ admet une limite finie $\\ell$ en $b$, avec $\\ell\\geq m$.\n\nBranches paraboliques de la courbe $(C)$ en $+\\infty$ (même chose en $-\\infty$) :\n- si $\\lim f(x)=\\pm\\infty$ et $\\lim\\dfrac{f(x)}{x}=0$ : branche parabolique de direction $(OI)$ (l'axe des abscisses) ;\n- si $\\lim f(x)=\\pm\\infty$ et $\\lim\\dfrac{f(x)}{x}=\\pm\\infty$ : branche parabolique de direction $(OJ)$ (l'axe des ordonnées).\n\nExemples :\n- $f(x)=\\dfrac{2}{x-1}-\\sqrt{x+1}$ : $f(x)\\to-\\infty$ et $\\dfrac{f(x)}{x}\\to0$ en $+\\infty$ : direction $(OI)$ ;\n- $f(x)=x^2+x$ : $\\dfrac{f(x)}{x}=x+1\\to-\\infty$ en $-\\infty$ : direction $(OJ)$.\n\nSituation : la température d'un objet est $f(t)=\\dfrac{200}{t}+10$. Après très longtemps, $\\lim\\limits_{t\\to+\\infty}f(t)=10$ : elle se stabilise à $10\\,°C$.",
      "keyRule": "$f\\to\\pm\\infty$ et $\\dfrac{f(x)}{x}\\to0$ : direction $(OI)$. $f\\to\\pm\\infty$ et $\\dfrac{f(x)}{x}\\to\\pm\\infty$ : direction $(OJ)$.",
      "formulas": [],
      "workedExample": {
        "title": "La branche de $x^2+x$ en $-\\infty$",
        "statement": "Étudie la branche infinie de $f(x)=x^2+x$ en $-\\infty$.",
        "methodSteps": [
          "$\\lim\\limits_{x\\to-\\infty}(x^2+x)=+\\infty$.",
          "$\\dfrac{f(x)}{x}=x+1\\to-\\infty$."
        ],
        "conclusion": "Branche parabolique de direction $(OJ)$ en $-\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Croissante et majorée",
          "stepTheme": "Croissante et majorée",
          "stepBadge": "Croissante et majorée",
          "paragraphText": "Une fonction croissante et majorée par $M$ sur $]a;b[$ admet en $b$ une limite finie $\\ell\\leq M$ : elle monte, mais ne peut pas dépasser $M$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q1",
            "type": "mcq",
            "prompt": "$f$ est croissante sur $[1;+\\infty[$ et $f(x)\\leq 1+f(1)$. Que peut-on dire en $+\\infty$ ?",
            "options": [
              "$f$ tend vers $+\\infty$",
              "$f$ admet une limite finie $\\ell\\leq1+f(1)$",
              "$f$ n'a pas de limite",
              "$f$ tend vers $0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Croissante et majorée : limite finie, inférieure ou égale au majorant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Décroissante et minorée",
          "stepTheme": "Décroissante et minorée",
          "stepBadge": "Décroissante et minorée",
          "paragraphText": "De même, une fonction décroissante et minorée par $m$ admet une limite finie $\\ell\\geq m$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q2",
            "type": "mcq",
            "prompt": "$f$ est décroissante sur $]0;+\\infty[$ et $f(x)\\geq5$. La limite $\\ell$ de $f$ en $+\\infty$ vérifie :",
            "options": [
              "$\\ell\\leq5$",
              "$\\ell=+\\infty$",
              "$\\ell<0$",
              "$\\ell\\geq5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La fonction descend sans passer sous $5$ : sa limite est au moins $5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Direction $(OI)$",
          "stepTheme": "Direction $(OI)$",
          "stepBadge": "Direction $(OI)$",
          "paragraphText": "Si $f(x)\\to\\pm\\infty$ et $\\dfrac{f(x)}{x}\\to0$, la courbe s'en va à l'infini « en s'aplatissant » : branche parabolique de direction $(OI)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q3",
            "type": "mcq",
            "prompt": "En $+\\infty$ : $f(x)\\to-\\infty$ et $\\dfrac{f(x)}{x}\\to0$. Quelle est la branche infinie ?",
            "options": [
              "Branche parabolique de direction $(OI)$",
              "Branche parabolique de direction $(OJ)$",
              "Asymptote horizontale",
              "Asymptote verticale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la direction $(OI)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Direction $(OJ)$",
          "stepTheme": "Direction $(OJ)$",
          "stepBadge": "Direction $(OJ)$",
          "paragraphText": "Si $f(x)\\to\\pm\\infty$ et $\\dfrac{f(x)}{x}\\to\\pm\\infty$, la courbe monte (ou descend) de plus en plus vite : direction $(OJ)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q4",
            "type": "mcq",
            "prompt": "Pour $f(x)=x^2+x$ en $-\\infty$, que vaut $\\lim\\dfrac{f(x)}{x}$ ?",
            "options": [
              "$0$",
              "$1$",
              "$-\\infty$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{x^2+x}{x}=x+1\\to-\\infty$ : direction $(OJ)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Deux limites à calculer",
          "stepTheme": "Deux limites à calculer",
          "stepBadge": "Deux limites à calculer",
          "paragraphText": "Une seule limite ne suffit pas : $f(x)\\to+\\infty$ ne dit pas laquelle des deux directions on a. Il faut aussi calculer $\\lim\\dfrac{f(x)}{x}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q5",
            "type": "mcq",
            "prompt": "On sait seulement que $\\lim\\limits_{x\\to+\\infty}f(x)=+\\infty$. Que manque-t-il pour conclure sur la branche ?",
            "options": [
              "Rien",
              "La valeur $f(0)$",
              "La dérivée en $0$",
              "La limite de $\\dfrac{f(x)}{x}$ en $+\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est elle qui distingue $(OI)$, $(OJ)$ ou une éventuelle asymptote oblique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Avec une racine",
          "stepTheme": "Avec une racine",
          "stepBadge": "Avec une racine",
          "paragraphText": "Pour $f(x)=\\dfrac{2}{x-1}-\\sqrt{x+1}$ : $f(x)\\to-\\infty$ en $+\\infty$, et $\\dfrac{f(x)}{x}\\to0$ car $\\sqrt{x+1}$ grandit moins vite que $x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q6",
            "type": "mcq",
            "prompt": "Quelle est la branche de $f(x)=\\dfrac{2}{x-1}-\\sqrt{x+1}$ en $+\\infty$ ?",
            "options": [
              "Direction $(OJ)$",
              "Direction $(OI)$",
              "Asymptote $y=0$",
              "Asymptote $x=1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f\\to-\\infty$ et $\\dfrac{f(x)}{x}\\to0$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le refroidissement",
          "stepTheme": "Le refroidissement",
          "stepBadge": "Le refroidissement",
          "paragraphText": "Un objet a pour température $f(t)=\\dfrac{200}{t}+10$ (en $°C$, $t$ en minutes). Après très longtemps : $\\lim\\limits_{t\\to+\\infty}f(t)=10$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q7",
            "type": "mcq",
            "prompt": "Vers quelle température l'objet se stabilise-t-il ?",
            "options": [
              "$210\\,°C$",
              "$0\\,°C$",
              "$10\\,°C$",
              "$200\\,°C$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{200}{t}\\to0$, il reste $10$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q1",
          "type": "mcq",
          "prompt": "$f$ est croissante sur $[1;+\\infty[$ et $f(x)\\leq 1+f(1)$. Que peut-on dire en $+\\infty$ ?",
          "options": [
            "$f$ tend vers $+\\infty$",
            "$f$ admet une limite finie $\\ell\\leq1+f(1)$",
            "$f$ n'a pas de limite",
            "$f$ tend vers $0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Croissante et majorée : limite finie, inférieure ou égale au majorant."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q2",
          "type": "mcq",
          "prompt": "$f$ est décroissante sur $]0;+\\infty[$ et $f(x)\\geq5$. La limite $\\ell$ de $f$ en $+\\infty$ vérifie :",
          "options": [
            "$\\ell\\leq5$",
            "$\\ell=+\\infty$",
            "$\\ell<0$",
            "$\\ell\\geq5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La fonction descend sans passer sous $5$ : sa limite est au moins $5$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q3",
          "type": "mcq",
          "prompt": "En $+\\infty$ : $f(x)\\to-\\infty$ et $\\dfrac{f(x)}{x}\\to0$. Quelle est la branche infinie ?",
          "options": [
            "Branche parabolique de direction $(OI)$",
            "Branche parabolique de direction $(OJ)$",
            "Asymptote horizontale",
            "Asymptote verticale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la direction $(OI)$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q4",
          "type": "mcq",
          "prompt": "Pour $f(x)=x^2+x$ en $-\\infty$, que vaut $\\lim\\dfrac{f(x)}{x}$ ?",
          "options": [
            "$0$",
            "$1$",
            "$-\\infty$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{x^2+x}{x}=x+1\\to-\\infty$ : direction $(OJ)$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q5",
          "type": "mcq",
          "prompt": "On sait seulement que $\\lim\\limits_{x\\to+\\infty}f(x)=+\\infty$. Que manque-t-il pour conclure sur la branche ?",
          "options": [
            "Rien",
            "La valeur $f(0)$",
            "La dérivée en $0$",
            "La limite de $\\dfrac{f(x)}{x}$ en $+\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est elle qui distingue $(OI)$, $(OJ)$ ou une éventuelle asymptote oblique."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q6",
          "type": "mcq",
          "prompt": "Quelle est la branche de $f(x)=\\dfrac{2}{x-1}-\\sqrt{x+1}$ en $+\\infty$ ?",
          "options": [
            "Direction $(OJ)$",
            "Direction $(OI)$",
            "Asymptote $y=0$",
            "Asymptote $x=1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f\\to-\\infty$ et $\\dfrac{f(x)}{x}\\to0$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p02_q7",
          "type": "mcq",
          "prompt": "Vers quelle température l'objet se stabilise-t-il ?",
          "options": [
            "$210\\,°C$",
            "$0\\,°C$",
            "$10\\,°C$",
            "$200\\,°C$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{200}{t}\\to0$, il reste $10$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l01_limites_continuite_p03",
      "order": 3,
      "title": "Continuité et prolongement par continuité",
      "summary": "Fonctions continues usuelles, opérations, et prolongement en un point où $f$ n'est pas définie.",
      "conceptExplanation": "Une fonction est continue sur un intervalle $I$ si elle est continue en tout point de $I$.\nLes fonctions polynômes, rationnelles, sinus, cosinus, racine carrée, valeur absolue et tangente sont continues sur tout intervalle inclus dans leur ensemble de définition.\n\nOpérations : si $f$ et $g$ sont continues sur $I$, alors $f+g$, $fg$, $f^n$ et $|f|$ le sont ; $\\dfrac{f}{g}$ l'est si $g$ ne s'annule pas sur $I$ ; $\\sqrt f$ l'est si $f\\geq0$ sur $I$. Si $f$ est continue sur $I$ et $g$ continue sur $f(I)$, alors $g\\circ f$ est continue sur $I$.\n\nProlongement par continuité : si $a\\notin D_f$ et si $f$ admet une limite finie $\\ell$ en $a$, la fonction $g$ définie par $g(x)=f(x)$ sur $D_f$ et $g(a)=\\ell$ est continue en $a$ : c'est le prolongement par continuité de $f$ en $a$.\n\nExemples :\n- $f(x)=\\dfrac{\\sin x}{x}$ : $\\lim\\limits_{x\\to0}f(x)=1$, on prolonge en posant $g(0)=1$ ;\n- $f(x)=\\dfrac{x-9}{\\sqrt{x-5}-2}=\\sqrt{x-5}+2$ (on multiplie par la quantité conjuguée), donc $\\lim\\limits_{x\\to9}f(x)=4$ : on prolonge par $\\varphi(9)=4$ ;\n- $g(x)=\\dfrac{x^2+x}{x^2-|x|}$ : limite $1$ à gauche de $0$ et $-1$ à droite. Pas de limite en $0$ : pas de prolongement.",
      "keyRule": "Prolongeable par continuité en $a\\notin D_f$ si et seulement si $f$ a une limite FINIE en $a$ (même limite à gauche et à droite).",
      "formulas": [],
      "workedExample": {
        "title": "Prolonger $\\dfrac{x-9}{\\sqrt{x-5}-2}$ en $9$",
        "statement": "Démontre que $f$ est prolongeable par continuité en $9$.",
        "methodSteps": [
          "On multiplie par la quantité conjuguée $\\sqrt{x-5}+2$ : le dénominateur devient $x-5-4=x-9$.",
          "Donc $f(x)=\\sqrt{x-5}+2$ pour $x\\neq9$.",
          "$\\lim\\limits_{x\\to9}f(x)=\\sqrt4+2=4$, limite finie."
        ],
        "conclusion": "Le prolongement est $\\varphi$ avec $\\varphi(9)=4$, c'est-à-dire $\\varphi(x)=\\sqrt{x-5}+2$ sur $[5;+\\infty[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Continue sur un intervalle",
          "stepTheme": "Continue sur un intervalle",
          "stepBadge": "Continue sur un intervalle",
          "paragraphText": "$f$ est continue sur $I$ si elle est continue en chaque point de $I$ : sa courbe se trace « sans lever le crayon » sur $I$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces fonctions est continue sur $\\mathbb{R}$ ?",
            "options": [
              "$x\\mapsto\\dfrac1x$",
              "$x\\mapsto x^3+\\sin x$",
              "$x\\mapsto\\sqrt x$",
              "$x\\mapsto\\tan x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Somme d'un polynôme et du sinus, tous deux continus sur $\\mathbb{R}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La racine d'une fonction",
          "stepTheme": "La racine d'une fonction",
          "stepBadge": "La racine d'une fonction",
          "paragraphText": "Si $f$ est continue et positive sur $I$, alors $\\sqrt f$ est continue sur $I$. Ainsi $\\sqrt{x^2-1}$ est continue sur $]-\\infty;-1]$, où $x^2-1\\geq0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q2",
            "type": "mcq",
            "prompt": "Sur lequel de ces intervalles $x\\mapsto\\sqrt{x^2-1}$ est-elle continue ?",
            "options": [
              "$[-1;1]$",
              "$[0;1]$",
              "$[1;+\\infty[$",
              "$\\mathbb{R}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il faut $x^2-1\\geq0$, vrai sur $[1;+\\infty[$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le prolongement",
          "stepTheme": "Le prolongement",
          "stepBadge": "Le prolongement",
          "paragraphText": "Si $a\\notin D_f$ et $\\lim\\limits_{x\\to a}f(x)=\\ell$ (finie), on « bouche le trou » en posant $g(a)=\\ell$ : $g$ est le prolongement par continuité de $f$ en $a$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q3",
            "type": "mcq",
            "prompt": "$f(x)=\\dfrac{\\sin x}{x}$ n'est pas définie en $0$. Quelle valeur donne-t-on en $0$ à son prolongement ?",
            "options": [
              "$1$",
              "$0$",
              "$+\\infty$",
              "Aucune, c'est impossible"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\lim\\limits_{x\\to0}\\dfrac{\\sin x}{x}=1$, donc $g(0)=1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La quantité conjuguée",
          "stepTheme": "La quantité conjuguée",
          "stepBadge": "La quantité conjuguée",
          "paragraphText": "Pour $\\dfrac{x-9}{\\sqrt{x-5}-2}$, on multiplie en haut et en bas par $\\sqrt{x-5}+2$ : on trouve $f(x)=\\sqrt{x-5}+2$ pour $x\\neq9$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to9}\\dfrac{x-9}{\\sqrt{x-5}-2}$ ?",
            "options": [
              "$0$",
              "$2$",
              "$+\\infty$",
              "$4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\sqrt{9-5}+2=2+2=4$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Gauche et droite différentes",
          "stepTheme": "Gauche et droite différentes",
          "stepBadge": "Gauche et droite différentes",
          "paragraphText": "$g(x)=\\dfrac{x^2+x}{x^2-|x|}$ vaut $1$ pour $x<0$ et $\\dfrac{x+1}{x-1}$ pour $x>0$ : limite $1$ à gauche de $0$, $-1$ à droite. Pas de limite, donc pas de prolongement.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q5",
            "type": "mcq",
            "prompt": "Les limites à gauche et à droite de $g$ en $0$ sont $1$ et $-1$. $g$ est-elle prolongeable par continuité en $0$ ?",
            "options": [
              "Oui, par $g(0)=0$",
              "Oui, par $g(0)=1$",
              "Non, car $g$ n'a pas de limite en $0$",
              "Oui, par $g(0)=-1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il faudrait une limite unique et finie en $0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La composée",
          "stepTheme": "La composée",
          "stepBadge": "La composée",
          "paragraphText": "Si $f$ est continue sur $I$ et $g$ continue sur $f(I)$, alors $g\\circ f$ est continue sur $I$. Ex. : $\\cos$ envoie $\\mathbb{R}$ sur $[-1;1]$, où $\\dfrac{1+x}{2+x}$ est continue.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q6",
            "type": "mcq",
            "prompt": "Pourquoi $x\\mapsto\\dfrac{1+\\cos x}{2+\\cos x}$ est-elle continue sur $\\mathbb{R}$ ?",
            "options": [
              "Parce que $\\cos x$ est toujours positif",
              "Parce que $2+\\cos x\\geq1$ ne s'annule jamais",
              "Parce que $\\cos 0=1$",
              "Parce que c'est un polynôme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Quotient de fonctions continues dont le dénominateur ne s'annule pas."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "La photographie",
          "stepTheme": "La photographie",
          "stepBadge": "La photographie",
          "paragraphText": "Pour une netteté de $5$ m à l'infini, la mise au point est $P=\\dfrac{10x}{5+x}$ avec $x\\to+\\infty$ : $\\lim P=10$ m.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q7",
            "type": "mcq",
            "prompt": "À quelle distance faut-il faire la mise au point ?",
            "options": [
              "$5$ m",
              "$2$ m",
              "À l'infini",
              "$10$ m"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac{10x}{5+x}=\\dfrac{10}{\\frac5x+1}\\to10$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces fonctions est continue sur $\\mathbb{R}$ ?",
          "options": [
            "$x\\mapsto\\dfrac1x$",
            "$x\\mapsto x^3+\\sin x$",
            "$x\\mapsto\\sqrt x$",
            "$x\\mapsto\\tan x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Somme d'un polynôme et du sinus, tous deux continus sur $\\mathbb{R}$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q2",
          "type": "mcq",
          "prompt": "Sur lequel de ces intervalles $x\\mapsto\\sqrt{x^2-1}$ est-elle continue ?",
          "options": [
            "$[-1;1]$",
            "$[0;1]$",
            "$[1;+\\infty[$",
            "$\\mathbb{R}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il faut $x^2-1\\geq0$, vrai sur $[1;+\\infty[$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q3",
          "type": "mcq",
          "prompt": "$f(x)=\\dfrac{\\sin x}{x}$ n'est pas définie en $0$. Quelle valeur donne-t-on en $0$ à son prolongement ?",
          "options": [
            "$1$",
            "$0$",
            "$+\\infty$",
            "Aucune, c'est impossible"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\lim\\limits_{x\\to0}\\dfrac{\\sin x}{x}=1$, donc $g(0)=1$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to9}\\dfrac{x-9}{\\sqrt{x-5}-2}$ ?",
          "options": [
            "$0$",
            "$2$",
            "$+\\infty$",
            "$4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\sqrt{9-5}+2=2+2=4$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q5",
          "type": "mcq",
          "prompt": "Les limites à gauche et à droite de $g$ en $0$ sont $1$ et $-1$. $g$ est-elle prolongeable par continuité en $0$ ?",
          "options": [
            "Oui, par $g(0)=0$",
            "Oui, par $g(0)=1$",
            "Non, car $g$ n'a pas de limite en $0$",
            "Oui, par $g(0)=-1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il faudrait une limite unique et finie en $0$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q6",
          "type": "mcq",
          "prompt": "Pourquoi $x\\mapsto\\dfrac{1+\\cos x}{2+\\cos x}$ est-elle continue sur $\\mathbb{R}$ ?",
          "options": [
            "Parce que $\\cos x$ est toujours positif",
            "Parce que $2+\\cos x\\geq1$ ne s'annule jamais",
            "Parce que $\\cos 0=1$",
            "Parce que c'est un polynôme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Quotient de fonctions continues dont le dénominateur ne s'annule pas."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p03_q7",
          "type": "mcq",
          "prompt": "À quelle distance faut-il faire la mise au point ?",
          "options": [
            "$5$ m",
            "$2$ m",
            "À l'infini",
            "$10$ m"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac{10x}{5+x}=\\dfrac{10}{\\frac5x+1}\\to10$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l01_limites_continuite_p04",
      "order": 4,
      "title": "Image d'un intervalle et bijection",
      "summary": "Une fonction continue et strictement monotone réalise une bijection de $I$ sur $f(I)$.",
      "conceptExplanation": "L'image d'un intervalle par une fonction continue est un intervalle (ou un singleton).\nExemple : $\\cos(]-\\pi;\\pi])=[-1;1]$.\n\nSi $f$ est continue et strictement monotone sur $I$, on lit $f(I)$ avec les valeurs et les limites aux bornes :\n- croissante : $f([a;b])=[f(a);f(b)]$ ; $f([a;+\\infty[)=[f(a);\\lim\\limits_{+\\infty}f[$ ;\n- décroissante : les bornes s'inversent, $f([a;b])=[f(b);f(a)]$.\nUne borne ouverte (ou infinie) de $I$ donne une borne ouverte de $f(I)$.\n\nPropriété : si $f$ est continue et strictement monotone sur $I$, alors :\n- $f$ est une bijection de $I$ sur $f(I)$ ;\n- sa bijection réciproque $f^{-1}$ est continue sur $f(I)$ et a le même sens de variation que $f$ ;\n- dans un repère orthonormé, les courbes de $f$ et $f^{-1}$ sont symétriques par rapport à la droite $y=x$.\n\nExemple : $g(x)=-x^2+2x+3$ est continue et strictement décroissante sur $[1;3]$, avec $g(1)=4$ et $g(3)=0$ : bijection de $[1;3]$ sur $[0;4]$, et $g^{-1}(x)=1+\\sqrt{4-x}$.",
      "keyRule": "Continue + strictement monotone sur $I$ : bijection de $I$ sur $f(I)$ ; $f^{-1}$ a le même sens de variation ; courbes symétriques par rapport à $y=x$.",
      "formulas": [],
      "workedExample": {
        "title": "La bijection $\\dfrac{x^2}{1+x^2}$",
        "statement": "Démontre que $f(x)=\\dfrac{x^2}{1+x^2}$ réalise une bijection de $[0;+\\infty[$ sur un intervalle $K$.",
        "methodSteps": [
          "$f'(x)=\\dfrac{2x}{(1+x^2)^2}>0$ sur $]0;+\\infty[$ : $f$ est strictement croissante.",
          "$f(0)=0$ et $\\lim\\limits_{x\\to+\\infty}f(x)=1$."
        ],
        "conclusion": "$f$ est une bijection de $[0;+\\infty[$ sur $K=[0;1[$, et $f^{-1}$ est strictement croissante sur $[0;1[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Image d'un intervalle",
          "stepTheme": "Image d'un intervalle",
          "stepBadge": "Image d'un intervalle",
          "paragraphText": "Une fonction continue transforme un intervalle en un intervalle. Ex. : $\\cos(]-\\pi;\\pi])=[-1;1]$, car $\\cos\\pi=-1$ et $\\cos0=1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est l'image de $\\left[0;\\dfrac{\\pi}{2}\\right]$ par la fonction sinus ?",
            "options": [
              "$[-1;1]$",
              "$\\left[0;\\dfrac{\\pi}{2}\\right]$",
              "$[0;1]$",
              "$]0;1[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\sin$ est croissante sur cet intervalle, de $\\sin0=0$ à $\\sin\\frac{\\pi}{2}=1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Fonction croissante",
          "stepTheme": "Fonction croissante",
          "stepBadge": "Fonction croissante",
          "paragraphText": "Si $f$ est continue et strictement croissante sur $]-\\infty;-1]$, alors $f(]-\\infty;-1])=]\\lim\\limits_{-\\infty}f\\,;f(-1)]$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q2",
            "type": "mcq",
            "prompt": "$f$ croît de $-2$ (limite en $-\\infty$) à $f(-1)=5$. Quelle est l'image de $]-\\infty;-1]$ ?",
            "options": [
              "$]-2;5]$",
              "$[-2;5]$",
              "$]-2;5[$",
              "$[5;+\\infty[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La limite $-2$ n'est pas atteinte (borne ouverte), $f(-1)=5$ l'est."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Fonction décroissante",
          "stepTheme": "Fonction décroissante",
          "stepBadge": "Fonction décroissante",
          "paragraphText": "Pour une fonction décroissante, les bornes s'inversent : $f([a;b])=[f(b);f(a)]$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q3",
            "type": "mcq",
            "prompt": "$f$ est continue et strictement décroissante sur $]0;+\\infty[$, de $+\\infty$ (en $0$) à $1$ (en $+\\infty$). Quelle est l'image de $]0;+\\infty[$ ?",
            "options": [
              "$[1;+\\infty[$",
              "$]1;+\\infty[$",
              "$]-\\infty;1[$",
              "$]0;1[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux bornes sont des limites, non atteintes : $]1;+\\infty[$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La bijection",
          "stepTheme": "La bijection",
          "stepBadge": "La bijection",
          "paragraphText": "Une fonction continue et strictement monotone sur $I$ est une bijection de $I$ sur $f(I)$ : chaque valeur de $f(I)$ a exactement un antécédent dans $I$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q4",
            "type": "mcq",
            "prompt": "Quelles conditions suffisent pour que $f$ soit une bijection de $I$ sur $f(I)$ ?",
            "options": [
              "$f$ dérivable en un point",
              "$f$ positive sur $I$",
              "$f$ continue et strictement monotone sur $I$",
              "$f$ définie sur $\\mathbb{R}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la propriété des fonctions continues strictement monotones."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La réciproque",
          "stepTheme": "La réciproque",
          "stepBadge": "La réciproque",
          "paragraphText": "$f^{-1}$ est continue sur $f(I)$ et a le même sens de variation que $f$. Ses courbes et celles de $f$ sont symétriques par rapport à $y=x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q5",
            "type": "mcq",
            "prompt": "$f$ est strictement décroissante sur $I$. Quel est le sens de variation de $f^{-1}$ ?",
            "options": [
              "Croissante",
              "Constante",
              "On ne peut pas savoir",
              "Strictement décroissante"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$f^{-1}$ a le même sens de variation que $f$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Trouver la réciproque",
          "stepTheme": "Trouver la réciproque",
          "stepBadge": "Trouver la réciproque",
          "paragraphText": "Pour $g(x)=-x^2+2x+3$ sur $[1;3]$ : $g(x)=y\\iff(x-1)^2=4-y\\iff x=1+\\sqrt{4-y}$ (car $x\\geq1$). Donc $g^{-1}(x)=1+\\sqrt{4-x}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q6",
            "type": "mcq",
            "prompt": "Avec $g^{-1}(x)=1+\\sqrt{4-x}$, que vaut $g^{-1}(0)$ ?",
            "options": [
              "$1$",
              "$3$",
              "$4$",
              "$2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$1+\\sqrt4=3$ ; on vérifie $g(3)=-9+6+3=0$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une borne non atteinte",
          "stepTheme": "Une borne non atteinte",
          "stepBadge": "Une borne non atteinte",
          "paragraphText": "$\\dfrac{x^2}{1+x^2}$ croît de $0$ vers $1$ sur $[0;+\\infty[$ sans jamais atteindre $1$ : l'image est $[0;1[$, pas $[0;1]$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q7",
            "type": "mcq",
            "prompt": "Sur quel intervalle la réciproque de $f(x)=\\dfrac{x^2}{1+x^2}$ (définie sur $[0;+\\infty[$) est-elle définie ?",
            "options": [
              "$[0;1]$",
              "$[0;+\\infty[$",
              "$]0;1[$",
              "$[0;1[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$f^{-1}$ est définie sur $f([0;+\\infty[)=[0;1[$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est l'image de $\\left[0;\\dfrac{\\pi}{2}\\right]$ par la fonction sinus ?",
          "options": [
            "$[-1;1]$",
            "$\\left[0;\\dfrac{\\pi}{2}\\right]$",
            "$[0;1]$",
            "$]0;1[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\sin$ est croissante sur cet intervalle, de $\\sin0=0$ à $\\sin\\frac{\\pi}{2}=1$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q2",
          "type": "mcq",
          "prompt": "$f$ croît de $-2$ (limite en $-\\infty$) à $f(-1)=5$. Quelle est l'image de $]-\\infty;-1]$ ?",
          "options": [
            "$]-2;5]$",
            "$[-2;5]$",
            "$]-2;5[$",
            "$[5;+\\infty[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La limite $-2$ n'est pas atteinte (borne ouverte), $f(-1)=5$ l'est."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q3",
          "type": "mcq",
          "prompt": "$f$ est continue et strictement décroissante sur $]0;+\\infty[$, de $+\\infty$ (en $0$) à $1$ (en $+\\infty$). Quelle est l'image de $]0;+\\infty[$ ?",
          "options": [
            "$[1;+\\infty[$",
            "$]1;+\\infty[$",
            "$]-\\infty;1[$",
            "$]0;1[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux bornes sont des limites, non atteintes : $]1;+\\infty[$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q4",
          "type": "mcq",
          "prompt": "Quelles conditions suffisent pour que $f$ soit une bijection de $I$ sur $f(I)$ ?",
          "options": [
            "$f$ dérivable en un point",
            "$f$ positive sur $I$",
            "$f$ continue et strictement monotone sur $I$",
            "$f$ définie sur $\\mathbb{R}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la propriété des fonctions continues strictement monotones."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q5",
          "type": "mcq",
          "prompt": "$f$ est strictement décroissante sur $I$. Quel est le sens de variation de $f^{-1}$ ?",
          "options": [
            "Croissante",
            "Constante",
            "On ne peut pas savoir",
            "Strictement décroissante"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$f^{-1}$ a le même sens de variation que $f$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q6",
          "type": "mcq",
          "prompt": "Avec $g^{-1}(x)=1+\\sqrt{4-x}$, que vaut $g^{-1}(0)$ ?",
          "options": [
            "$1$",
            "$3$",
            "$4$",
            "$2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$1+\\sqrt4=3$ ; on vérifie $g(3)=-9+6+3=0$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p04_q7",
          "type": "mcq",
          "prompt": "Sur quel intervalle la réciproque de $f(x)=\\dfrac{x^2}{1+x^2}$ (définie sur $[0;+\\infty[$) est-elle définie ?",
          "options": [
            "$[0;1]$",
            "$[0;+\\infty[$",
            "$]0;1[$",
            "$[0;1[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$f^{-1}$ est définie sur $f([0;+\\infty[)=[0;1[$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l01_limites_continuite_p05",
      "order": 5,
      "title": "Théorème des valeurs intermédiaires",
      "summary": "Existence et unicité d'une solution de $f(x)=m$, puis sa valeur approchée.",
      "conceptExplanation": "Théorème des valeurs intermédiaires : si $f$ est continue sur $I$, $a$ et $b$ dans $I$, alors pour tout $m$ compris entre $f(a)$ et $f(b)$, l'équation $f(x)=m$ admet AU MOINS une solution entre $a$ et $b$.\n\nCorollaire 1 : si de plus $f$ est strictement monotone, la solution est UNIQUE.\n\nCorollaire 2 : si $f$ est continue et strictement monotone sur $[a;b]$ et $f(a)\\times f(b)<0$, l'équation $f(x)=0$ a une unique solution dans $]a;b[$.\n\nExemple : $f(x)=2x^3+3x-1$ sur $[0;1]$. $f'(x)=6x^2+3>0$, $f(0)=-1$ et $f(1)=4$ : l'équation $f(x)=0$ a une unique solution $\\alpha\\in]0;1[$.\n\nValeur approchée de $\\alpha$ :\n- balayage : on calcule $f(0,1)$, $f(0,2)$… jusqu'au changement de signe : $f(0,3)\\approx-0,05$ et $f(0,4)\\approx0,33$, donc $0,3<\\alpha<0,4$ ;\n- dichotomie : on coupe l'intervalle en deux à chaque étape et on garde la moitié où $f$ change de signe.\n\nAutre usage : si $f$ décroît de $5$ à $-\\infty$ sur $[-1;+\\infty[$, l'équation $f(x)=-10$ a une unique solution (car $-10\\in]-\\infty;5]$), mais $f(x)=13$ n'en a pas.",
      "keyRule": "Continue : au moins une solution. Continue ET strictement monotone : une seule. $f(a)f(b)<0$ : la solution de $f(x)=0$ est dans $]a;b[$.",
      "formulas": [],
      "workedExample": {
        "title": "Encadrer $\\alpha$ par balayage",
        "statement": "$2x^3+3x-1=0$ a une solution unique $\\alpha\\in]0;1[$. Donne une valeur approchée à $10^{-1}$ près.",
        "methodSteps": [
          "$f(0,3)=0,054+0,9-1\\approx-0,05<0$.",
          "$f(0,4)=0,128+1,2-1\\approx0,33>0$.",
          "Changement de signe entre $0,3$ et $0,4$."
        ],
        "conclusion": "$0,3<\\alpha<0,4$ : $\\alpha\\approx0,3$ à $10^{-1}$ près."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le théorème",
          "stepTheme": "Le théorème",
          "stepBadge": "Le théorème",
          "paragraphText": "Si $f$ est continue sur $I$ et $m$ est entre $f(a)$ et $f(b)$, alors $f(x)=m$ a au moins une solution entre $a$ et $b$ : la courbe ne peut pas « sauter » la droite $y=m$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q1",
            "type": "mcq",
            "prompt": "$f$ est continue sur $[0;2]$, $f(0)=-3$ et $f(2)=5$. Que peut-on dire de l'équation $f(x)=1$ ?",
            "options": [
              "Elle n'a pas de solution",
              "Elle a au moins une solution dans $[0;2]$",
              "Elle a exactement deux solutions",
              "Sa solution est $x=1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$1$ est entre $-3$ et $5$, et $f$ est continue."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'unicité",
          "stepTheme": "L'unicité",
          "stepBadge": "L'unicité",
          "paragraphText": "Si en plus $f$ est strictement monotone, la solution est unique : la courbe ne croise la droite $y=m$ qu'une seule fois.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q2",
            "type": "mcq",
            "prompt": "Que faut-il ajouter à la continuité pour garantir une solution UNIQUE ?",
            "options": [
              "La parité",
              "La stricte monotonie",
              "Une limite finie en $+\\infty$",
              "$f(0)=0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Strictement monotone : au plus un antécédent pour chaque valeur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le changement de signe",
          "stepTheme": "Le changement de signe",
          "stepBadge": "Le changement de signe",
          "paragraphText": "Pour $f(x)=0$ : si $f$ est continue, strictement monotone sur $[a;b]$ et $f(a)\\times f(b)<0$, la solution est unique dans $]a;b[$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q3",
            "type": "mcq",
            "prompt": "Pour $f(x)=2x^3+3x-1$, que valent $f(0)$ et $f(1)$ ?",
            "options": [
              "$-1$ et $4$",
              "$1$ et $4$",
              "$-1$ et $2$",
              "$0$ et $4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$f(0)=-1$ et $f(1)=2+3-1=4$ : signes contraires."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Avec un tableau",
          "stepTheme": "Avec un tableau",
          "stepBadge": "Avec un tableau",
          "paragraphText": "$f$ est continue et strictement décroissante sur $[-1;+\\infty[$, de $5$ à $-\\infty$ : $f([-1;+\\infty[)=]-\\infty;5]$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q4",
            "type": "mcq",
            "prompt": "Avec ce tableau, combien de solutions a l'équation $f(x)=13$ sur $[-1;+\\infty[$ ?",
            "options": [
              "Une seule",
              "Deux",
              "Une infinité",
              "Aucune"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$13\\notin]-\\infty;5]$ : aucune valeur de $f$ n'atteint $13$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le balayage",
          "stepTheme": "Le balayage",
          "stepBadge": "Le balayage",
          "paragraphText": "On calcule $f$ de $0,1$ en $0,1$ jusqu'au changement de signe : $f(0,3)\\approx-0,05$ et $f(0,4)\\approx0,33$, donc $0,3<\\alpha<0,4$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q5",
            "type": "mcq",
            "prompt": "Avec $f(0,3)<0$ et $f(0,4)>0$, quel encadrement obtient-on ?",
            "options": [
              "$0<\\alpha<0,3$",
              "$0,4<\\alpha<1$",
              "$0,3<\\alpha<0,4$",
              "$\\alpha=0,35$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution est là où $f$ change de signe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La dichotomie",
          "stepTheme": "La dichotomie",
          "stepBadge": "La dichotomie",
          "paragraphText": "On calcule $f$ au milieu $\\dfrac{a+b}{2}$ et on garde la moitié où $f$ change de signe. Avec $f(0)=-1$ et $f(0,5)=0,75$ : $\\alpha\\in[0;0,5]$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q6",
            "type": "mcq",
            "prompt": "On sait $\\alpha\\in[0;0,5]$ et $f(0,25)\\approx-0,22$ (même signe que $f(0)$). Quel intervalle garde-t-on ?",
            "options": [
              "$[0;0,25]$",
              "$[0,25;0,5]$",
              "$[0,5;1]$",
              "$[0;0,5]$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le changement de signe se fait entre $0,25$ et $0,5$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Au moins ou exactement ?",
          "stepTheme": "Au moins ou exactement ?",
          "stepBadge": "Au moins ou exactement ?",
          "paragraphText": "Sans la stricte monotonie, le théorème garantit seulement « au moins une » solution : une courbe qui ondule peut couper plusieurs fois la droite $y=m$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q7",
            "type": "mcq",
            "prompt": "$P$ décroît de $-5$ à $-8$, croît jusqu'à $3$, puis décroît jusqu'à $-4$. Combien de solutions a $P(x)=0$ ?",
            "options": [
              "Aucune",
              "Une",
              "Deux",
              "Trois"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$0$ est atteint une fois en montant de $-8$ à $3$, et une fois en descendant de $3$ à $-4$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q1",
          "type": "mcq",
          "prompt": "$f$ est continue sur $[0;2]$, $f(0)=-3$ et $f(2)=5$. Que peut-on dire de l'équation $f(x)=1$ ?",
          "options": [
            "Elle n'a pas de solution",
            "Elle a au moins une solution dans $[0;2]$",
            "Elle a exactement deux solutions",
            "Sa solution est $x=1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$1$ est entre $-3$ et $5$, et $f$ est continue."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q2",
          "type": "mcq",
          "prompt": "Que faut-il ajouter à la continuité pour garantir une solution UNIQUE ?",
          "options": [
            "La parité",
            "La stricte monotonie",
            "Une limite finie en $+\\infty$",
            "$f(0)=0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Strictement monotone : au plus un antécédent pour chaque valeur."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q3",
          "type": "mcq",
          "prompt": "Pour $f(x)=2x^3+3x-1$, que valent $f(0)$ et $f(1)$ ?",
          "options": [
            "$-1$ et $4$",
            "$1$ et $4$",
            "$-1$ et $2$",
            "$0$ et $4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$f(0)=-1$ et $f(1)=2+3-1=4$ : signes contraires."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q4",
          "type": "mcq",
          "prompt": "Avec ce tableau, combien de solutions a l'équation $f(x)=13$ sur $[-1;+\\infty[$ ?",
          "options": [
            "Une seule",
            "Deux",
            "Une infinité",
            "Aucune"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$13\\notin]-\\infty;5]$ : aucune valeur de $f$ n'atteint $13$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q5",
          "type": "mcq",
          "prompt": "Avec $f(0,3)<0$ et $f(0,4)>0$, quel encadrement obtient-on ?",
          "options": [
            "$0<\\alpha<0,3$",
            "$0,4<\\alpha<1$",
            "$0,3<\\alpha<0,4$",
            "$\\alpha=0,35$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution est là où $f$ change de signe."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q6",
          "type": "mcq",
          "prompt": "On sait $\\alpha\\in[0;0,5]$ et $f(0,25)\\approx-0,22$ (même signe que $f(0)$). Quel intervalle garde-t-on ?",
          "options": [
            "$[0;0,25]$",
            "$[0,25;0,5]$",
            "$[0,5;1]$",
            "$[0;0,5]$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le changement de signe se fait entre $0,25$ et $0,5$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p05_q7",
          "type": "mcq",
          "prompt": "$P$ décroît de $-5$ à $-8$, croît jusqu'à $3$, puis décroît jusqu'à $-4$. Combien de solutions a $P(x)=0$ ?",
          "options": [
            "Aucune",
            "Une",
            "Deux",
            "Trois"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$0$ est atteint une fois en montant de $-8$ à $3$, et une fois en descendant de $3$ à $-4$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l01_limites_continuite_p06",
      "order": 6,
      "title": "Racine $n$-ième et puissances rationnelles",
      "summary": "$\\sqrt[n]{x}$, $a^{\\frac pq}$ et les règles de calcul.",
      "conceptExplanation": "Racine $n$-ième ($n\\geq2$) : c'est la bijection réciproque de $x\\mapsto x^n$ sur $[0;+\\infty[$. On note $\\sqrt[n]{x}$ ou $x^{\\frac1n}$.\nPour $x\\geq0$ et $y\\geq0$ : $y=\\sqrt[n]{x}\\iff x=y^n$. Ainsi $(\\sqrt[n]{x})^n=x$ et $\\sqrt[n]{x^n}=x$.\nExemples : $\\sqrt[4]{16}=2$ car $2^4=16$ ; $\\sqrt[5]{120^5}=120$ ; $x\\geq0$ et $x^3=5\\iff x=\\sqrt[3]{5}$.\n\nPuissance d'exposant rationnel : pour $a>0$, $p\\in\\mathbb{Z}^*$ et $q\\geq2$ :\n$$a^{\\frac pq}=\\left(\\sqrt[q]{a}\\right)^p=\\sqrt[q]{a^p}.$$\n\nRègles (pour $a>0$, $b>0$, $r$ et $r'$ rationnels) :\n$a^r\\times a^{r'}=a^{r+r'}$ ; $\\dfrac{1}{a^r}=a^{-r}$ ; $\\dfrac{a^{r'}}{a^r}=a^{r'-r}$ ; $(a^r)^{r'}=a^{rr'}$ ; $a^r b^r=(ab)^r$ ; $\\dfrac{a^r}{b^r}=\\left(\\dfrac ab\\right)^r$.\n\nExemples : $\\sqrt{\\sqrt{\\sqrt a}}=a^{\\frac18}$ ; $\\sqrt[3]{a}\\times\\sqrt[4]{a}=a^{\\frac13+\\frac14}=a^{\\frac{7}{12}}$ ; $\\dfrac{a^3}{\\sqrt{a^{0,4}}}=a^{3-0,2}=a^{\\frac{14}{5}}$.",
      "keyRule": "$\\sqrt[n]{x}=x^{\\frac1n}$ ; $a^{\\frac pq}=\\sqrt[q]{a^p}$ ; on additionne les exposants pour un produit, on les multiplie pour une puissance de puissance.",
      "formulas": [
        {
          "name": "Exposant rationnel",
          "formula": "a^{\\frac pq}=\\sqrt[q]{a^p}"
        },
        {
          "name": "Produit",
          "formula": "a^r\\times a^{r'}=a^{r+r'}"
        },
        {
          "name": "Puissance de puissance",
          "formula": "(a^r)^{r'}=a^{rr'}"
        }
      ],
      "workedExample": {
        "title": "Simplifier un produit de racines",
        "statement": "Écris $\\sqrt[3]{a}\\times\\sqrt[4]{a}$ sous la forme $a^\\alpha$ ($a>0$).",
        "methodSteps": [
          "$\\sqrt[3]{a}=a^{\\frac13}$ et $\\sqrt[4]{a}=a^{\\frac14}$.",
          "On additionne les exposants : $\\dfrac13+\\dfrac14=\\dfrac{4+3}{12}=\\dfrac{7}{12}$."
        ],
        "conclusion": "$\\sqrt[3]{a}\\times\\sqrt[4]{a}=a^{\\frac{7}{12}}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La racine $n$-ième",
          "stepTheme": "La racine $n$-ième",
          "stepBadge": "La racine $n$-ième",
          "paragraphText": "Pour $x\\geq0$, $\\sqrt[n]{x}$ est le nombre positif $y$ tel que $y^n=x$. Ainsi $\\sqrt[4]{16}=2$ car $2^4=16$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\sqrt[3]{27}$ ?",
            "options": [
              "$9$",
              "$3$",
              "$\\dfrac{27}{3}$",
              "$81$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$3^3=27$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Résoudre $x^n=a$",
          "stepTheme": "Résoudre $x^n=a$",
          "stepBadge": "Résoudre $x^n=a$",
          "paragraphText": "Pour $x\\geq0$ : $x^n=a\\iff x=\\sqrt[n]{a}$. Par exemple $x^3=5\\iff x=\\sqrt[3]{5}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q2",
            "type": "mcq",
            "prompt": "Pour $x\\geq0$, quelle est la solution de $x^5=7$ ?",
            "options": [
              "$\\dfrac75$",
              "$7^5$",
              "$\\sqrt[5]{7}$",
              "$\\sqrt{35}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La racine cinquième « défait » la puissance cinquième."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'exposant rationnel",
          "stepTheme": "L'exposant rationnel",
          "stepBadge": "L'exposant rationnel",
          "paragraphText": "Pour $a>0$ : $a^{\\frac pq}=\\sqrt[q]{a^p}$. Par exemple $8^{\\frac23}=\\sqrt[3]{8^2}=\\sqrt[3]{64}=4$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q3",
            "type": "mcq",
            "prompt": "Que vaut $16^{\\frac34}$ ?",
            "options": [
              "$12$",
              "$4$",
              "$6$",
              "$8$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\sqrt[4]{16}=2$, puis $2^3=8$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Un produit",
          "stepTheme": "Un produit",
          "stepBadge": "Un produit",
          "paragraphText": "Pour un produit de puissances de même base, on additionne les exposants : $a^{\\frac13}\\times a^{\\frac14}=a^{\\frac{7}{12}}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q4",
            "type": "mcq",
            "prompt": "Écris $\\sqrt{a}\\times\\sqrt[3]{a}$ sous la forme $a^\\alpha$.",
            "options": [
              "$a^{\\frac56}$",
              "$a^{\\frac16}$",
              "$a^{\\frac25}$",
              "$a^{\\frac23}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac12+\\dfrac13=\\dfrac56$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Racines emboîtées",
          "stepTheme": "Racines emboîtées",
          "stepBadge": "Racines emboîtées",
          "paragraphText": "Pour des racines emboîtées, on multiplie les exposants : $\\sqrt{\\sqrt{\\sqrt a}}=\\left(\\left(a^{\\frac12}\\right)^{\\frac12}\\right)^{\\frac12}=a^{\\frac18}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q5",
            "type": "mcq",
            "prompt": "Écris $\\sqrt{\\sqrt[3]{a}}$ sous la forme $a^\\alpha$.",
            "options": [
              "$a^{\\frac56}$",
              "$a^{\\frac32}$",
              "$a^{\\frac16}$",
              "$a^{\\frac23}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac13\\times\\dfrac12=\\dfrac16$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un quotient",
          "stepTheme": "Un quotient",
          "stepBadge": "Un quotient",
          "paragraphText": "$\\dfrac{a^3}{\\sqrt{a^{0,4}}}=\\dfrac{a^3}{a^{0,2}}=a^{3-0,2}=a^{2,8}=a^{\\frac{14}{5}}$ : pour un quotient, on soustrait les exposants.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q6",
            "type": "mcq",
            "prompt": "Écris $\\dfrac{a^2}{\\sqrt[3]{a}}$ sous la forme $a^\\alpha$.",
            "options": [
              "$a^{\\frac23}$",
              "$a^{\\frac73}$",
              "$a^{6}$",
              "$a^{\\frac53}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2-\\dfrac13=\\dfrac53$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Additionner ou multiplier ?",
          "stepTheme": "Additionner ou multiplier ?",
          "stepBadge": "Additionner ou multiplier ?",
          "paragraphText": "Produit $a^r\\times a^{r'}$ : on ADDITIONNE les exposants. Puissance de puissance $(a^r)^{r'}$ : on MULTIPLIE. Les confondre est l'erreur la plus fréquente.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q7",
            "type": "mcq",
            "prompt": "Que vaut $\\left(a^{\\frac23}\\right)^{\\frac32}$ pour $a>0$ ?",
            "options": [
              "$a^{\\frac{13}{6}}$",
              "$a$",
              "$a^{\\frac49}$",
              "$a^2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac23\\times\\dfrac32=1$, donc $a^1=a$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\sqrt[3]{27}$ ?",
          "options": [
            "$9$",
            "$3$",
            "$\\dfrac{27}{3}$",
            "$81$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$3^3=27$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q2",
          "type": "mcq",
          "prompt": "Pour $x\\geq0$, quelle est la solution de $x^5=7$ ?",
          "options": [
            "$\\dfrac75$",
            "$7^5$",
            "$\\sqrt[5]{7}$",
            "$\\sqrt{35}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La racine cinquième « défait » la puissance cinquième."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q3",
          "type": "mcq",
          "prompt": "Que vaut $16^{\\frac34}$ ?",
          "options": [
            "$12$",
            "$4$",
            "$6$",
            "$8$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\sqrt[4]{16}=2$, puis $2^3=8$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q4",
          "type": "mcq",
          "prompt": "Écris $\\sqrt{a}\\times\\sqrt[3]{a}$ sous la forme $a^\\alpha$.",
          "options": [
            "$a^{\\frac56}$",
            "$a^{\\frac16}$",
            "$a^{\\frac25}$",
            "$a^{\\frac23}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac12+\\dfrac13=\\dfrac56$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q5",
          "type": "mcq",
          "prompt": "Écris $\\sqrt{\\sqrt[3]{a}}$ sous la forme $a^\\alpha$.",
          "options": [
            "$a^{\\frac56}$",
            "$a^{\\frac32}$",
            "$a^{\\frac16}$",
            "$a^{\\frac23}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac13\\times\\dfrac12=\\dfrac16$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q6",
          "type": "mcq",
          "prompt": "Écris $\\dfrac{a^2}{\\sqrt[3]{a}}$ sous la forme $a^\\alpha$.",
          "options": [
            "$a^{\\frac23}$",
            "$a^{\\frac73}$",
            "$a^{6}$",
            "$a^{\\frac53}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2-\\dfrac13=\\dfrac53$."
        },
        {
          "id": "terminale_d_maths_numerique_l01_limites_continuite_p06_q7",
          "type": "mcq",
          "prompt": "Que vaut $\\left(a^{\\frac23}\\right)^{\\frac32}$ pour $a>0$ ?",
          "options": [
            "$a^{\\frac{13}{6}}$",
            "$a$",
            "$a^{\\frac49}$",
            "$a^2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac23\\times\\dfrac32=1$, donc $a^1=a$."
        }
      ]
    }
  ]
};
