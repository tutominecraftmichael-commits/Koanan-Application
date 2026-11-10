import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « TD Maths leçon 04 PRIMITIVES.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_D_L04_PRIMITIVES: CurriculumChapter = {
  "id": "terminale_d_maths_numerique_l04_primitives",
  "subjectId": "maths",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 4,
  "title": "Leçon 4 : Primitives",
  "summary": "Notion de primitive, primitives des fonctions usuelles et des fonctions composées, techniques (linéariser, décomposer, identifier), application au coût d'un voyage.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "TD Maths leçon 04 PRIMITIVES.pdf",
  "points": [
    {
      "id": "terminale_d_maths_numerique_l04_primitives_p01",
      "order": 1,
      "title": "Notion de primitive",
      "summary": "$F$ est une primitive de $f$ sur $I$ si $F'=f$ ; toutes les primitives s'écrivent $F+c$.",
      "conceptExplanation": "Définition : $f$ est définie sur un intervalle $I$. Une primitive de $f$ sur $I$ est une fonction $F$ dérivable sur $I$ telle que $F'(x)=f(x)$ pour tout $x$ de $I$.\n\nExemple : $f(x)=3x^2+1$ ; $F(x)=x^3+x-9$ est une primitive de $f$ sur $\\mathbb{R}$, car $F'(x)=3x^2+1$.\n\nPropriétés :\n- toute fonction CONTINUE sur un intervalle $I$ admet une primitive sur $I$ ;\n- si $F$ est une primitive de $f$ sur $I$, toutes les primitives de $f$ sur $I$ sont les fonctions $x\\mapsto F(x)+c$, $c\\in\\mathbb{R}$ : il y en a une infinité ;\n- pour $x_0\\in I$ et $y_0\\in\\mathbb{R}$ donnés, il existe UNE SEULE primitive de $f$ qui prend la valeur $y_0$ en $x_0$.\n\nExemple : $g(x)=2x-1$ a pour primitives $x^2-x+c$. Celle qui vaut $5$ en $-1$ vérifie $(-1)^2-(-1)+c=5$, donc $c=3$ : $H(x)=x^2-x+3$.",
      "keyRule": "$F$ primitive de $f$ $\\iff$ $F'=f$. Les primitives diffèrent d'une constante ; une condition $F(x_0)=y_0$ fixe cette constante.",
      "formulas": [],
      "workedExample": {
        "title": "Une condition initiale",
        "statement": "$G(x)=x^2-x$ est une primitive de $g(x)=2x-1$. Trouve la primitive $H$ telle que $H(-1)=5$.",
        "methodSteps": [
          "$H(x)=x^2-x+c$.",
          "$H(-1)=1+1+c=2+c=5$, donc $c=3$."
        ],
        "conclusion": "$H(x)=x^2-x+3$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "$F$ est une primitive de $f$ sur $I$ si $F$ est dérivable sur $I$ et $F'(x)=f(x)$ pour tout $x$ de $I$. On « remonte » de la dérivée à la fonction.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p01_q1",
            "type": "mcq",
            "prompt": "$F$ est une primitive de $f$ sur $I$. Que vaut $F'(x)$ ?",
            "options": [
              "$f'(x)$",
              "$f(x)$",
              "$F(x)+c$",
              "$\\dfrac{1}{f(x)}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition : la dérivée de $F$ est $f$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Vérifier par la dérivée",
          "stepTheme": "Vérifier par la dérivée",
          "stepBadge": "Vérifier par la dérivée",
          "paragraphText": "Pour savoir si $F$ est une primitive de $f$, on dérive $F$ et on compare à $f$. Ex. : $(x^3+x-9)'=3x^2+1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p01_q2",
            "type": "mcq",
            "prompt": "Laquelle est une primitive de $f(x)=2x+5$ sur $\\mathbb{R}$ ?",
            "options": [
              "$x\\mapsto x^2$",
              "$x\\mapsto 2$",
              "$x\\mapsto x^2+5x-7$",
              "$x\\mapsto x^2+5x+\\dfrac1x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(x^2+5x-7)'=2x+5$ ; la constante $-7$ disparaît en dérivant."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'existence",
          "stepTheme": "L'existence",
          "stepBadge": "L'existence",
          "paragraphText": "Toute fonction continue sur un intervalle $I$ admet une primitive sur $I$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p01_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces fonctions admet sûrement une primitive sur $\\mathbb{R}$ ?",
            "options": [
              "$x\\mapsto\\dfrac1x$",
              "$x\\mapsto\\sqrt x$",
              "$x\\mapsto\\dfrac{1}{x-2}$",
              "$x\\mapsto\\dfrac{x}{x^2+1}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Elle est continue sur $\\mathbb{R}$ ($x^2+1$ ne s'annule jamais) ; les autres ne sont pas définies sur tout $\\mathbb{R}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une infinité de primitives",
          "stepTheme": "Une infinité de primitives",
          "stepBadge": "Une infinité de primitives",
          "paragraphText": "Si $F$ est une primitive de $f$, alors $F+c$ en est une aussi pour tout réel $c$ : la dérivée d'une constante est nulle.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p01_q4",
            "type": "mcq",
            "prompt": "$F(x)=\\dfrac{x^3}{3}-\\dfrac{x^2}{2}$ est une primitive de $x^2-x$. Laquelle en est aussi une ?",
            "options": [
              "$\\dfrac{x^3}{3}-\\dfrac{x^2}{2}-29$",
              "$x^3-x^2$",
              "$2x-1$",
              "$\\dfrac{x^3}{3}-x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On ajoute une constante ($-29$) : la dérivée ne change pas."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Toutes les primitives",
          "stepTheme": "Toutes les primitives",
          "stepBadge": "Toutes les primitives",
          "paragraphText": "Sur $]0;+\\infty[$, les primitives de $-\\dfrac{1}{x^2}$ sont les fonctions $x\\mapsto\\dfrac1x+c$, car $\\left(\\dfrac1x\\right)'=-\\dfrac{1}{x^2}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p01_q5",
            "type": "mcq",
            "prompt": "Quelles sont les primitives de $x\\mapsto\\dfrac{1}{x^2}$ sur $]0;+\\infty[$ ?",
            "options": [
              "$x\\mapsto\\dfrac1x+c$",
              "$x\\mapsto-\\dfrac1x+c$",
              "$x\\mapsto\\dfrac{1}{x^3}+c$",
              "$x\\mapsto\\ln x+c$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\left(-\\dfrac1x\\right)'=\\dfrac{1}{x^2}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La condition initiale",
          "stepTheme": "La condition initiale",
          "stepBadge": "La condition initiale",
          "paragraphText": "Une seule primitive prend la valeur $y_0$ en $x_0$. On écrit $H=F+c$ et on résout $H(x_0)=y_0$ : pour $H(x)=x^2-x+c$ et $H(-1)=5$, on trouve $c=3$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p01_q6",
            "type": "mcq",
            "prompt": "Les primitives de $2x$ sont $x^2+c$. Laquelle vaut $10$ en $3$ ?",
            "options": [
              "$x^2+10$",
              "$x^2+7$",
              "$x^2+1$",
              "$x^2-1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$9+c=10$ donne $c=1$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Dériver ou primitiver ?",
          "stepTheme": "Dériver ou primitiver ?",
          "stepBadge": "Dériver ou primitiver ?",
          "paragraphText": "Attention au sens : la dérivée de $x^2$ est $2x$, mais une primitive de $x^2$ est $\\dfrac{x^3}{3}$. Primitiver fait MONTER l'exposant.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p01_q7",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $x\\mapsto x^2$ sur $\\mathbb{R}$ ?",
            "options": [
              "$2x$",
              "$x^3$",
              "$\\dfrac{x^3}{3}$",
              "$\\dfrac{x^2}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\left(\\dfrac{x^3}{3}\\right)'=x^2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p01_q1",
          "type": "mcq",
          "prompt": "$F$ est une primitive de $f$ sur $I$. Que vaut $F'(x)$ ?",
          "options": [
            "$f'(x)$",
            "$f(x)$",
            "$F(x)+c$",
            "$\\dfrac{1}{f(x)}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition : la dérivée de $F$ est $f$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p01_q2",
          "type": "mcq",
          "prompt": "Laquelle est une primitive de $f(x)=2x+5$ sur $\\mathbb{R}$ ?",
          "options": [
            "$x\\mapsto x^2$",
            "$x\\mapsto 2$",
            "$x\\mapsto x^2+5x-7$",
            "$x\\mapsto x^2+5x+\\dfrac1x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(x^2+5x-7)'=2x+5$ ; la constante $-7$ disparaît en dérivant."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p01_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces fonctions admet sûrement une primitive sur $\\mathbb{R}$ ?",
          "options": [
            "$x\\mapsto\\dfrac1x$",
            "$x\\mapsto\\sqrt x$",
            "$x\\mapsto\\dfrac{1}{x-2}$",
            "$x\\mapsto\\dfrac{x}{x^2+1}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Elle est continue sur $\\mathbb{R}$ ($x^2+1$ ne s'annule jamais) ; les autres ne sont pas définies sur tout $\\mathbb{R}$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p01_q4",
          "type": "mcq",
          "prompt": "$F(x)=\\dfrac{x^3}{3}-\\dfrac{x^2}{2}$ est une primitive de $x^2-x$. Laquelle en est aussi une ?",
          "options": [
            "$\\dfrac{x^3}{3}-\\dfrac{x^2}{2}-29$",
            "$x^3-x^2$",
            "$2x-1$",
            "$\\dfrac{x^3}{3}-x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On ajoute une constante ($-29$) : la dérivée ne change pas."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p01_q5",
          "type": "mcq",
          "prompt": "Quelles sont les primitives de $x\\mapsto\\dfrac{1}{x^2}$ sur $]0;+\\infty[$ ?",
          "options": [
            "$x\\mapsto\\dfrac1x+c$",
            "$x\\mapsto-\\dfrac1x+c$",
            "$x\\mapsto\\dfrac{1}{x^3}+c$",
            "$x\\mapsto\\ln x+c$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\left(-\\dfrac1x\\right)'=\\dfrac{1}{x^2}$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p01_q6",
          "type": "mcq",
          "prompt": "Les primitives de $2x$ sont $x^2+c$. Laquelle vaut $10$ en $3$ ?",
          "options": [
            "$x^2+10$",
            "$x^2+7$",
            "$x^2+1$",
            "$x^2-1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$9+c=10$ donne $c=1$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p01_q7",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $x\\mapsto x^2$ sur $\\mathbb{R}$ ?",
          "options": [
            "$2x$",
            "$x^3$",
            "$\\dfrac{x^3}{3}$",
            "$\\dfrac{x^2}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\left(\\dfrac{x^3}{3}\\right)'=x^2$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l04_primitives_p02",
      "order": 2,
      "title": "Primitives des fonctions usuelles",
      "summary": "Le tableau à connaître : puissances, inverse de puissances, racine, sinus, cosinus, tangente.",
      "conceptExplanation": "Tableau des primitives usuelles ($c\\in\\mathbb{R}$) :\n- $a$ (constante) : $ax+c$ sur $\\mathbb{R}$ ;\n- $x^r$ ($r$ rationnel, $r\\neq-1$) : $\\dfrac{1}{r+1}x^{r+1}+c$ ;\n- $\\dfrac{1}{x^r}$ ($r\\neq1$) : $-\\dfrac{1}{(r-1)x^{r-1}}+c$ sur $]0;+\\infty[$ ou $]-\\infty;0[$ ;\n- $\\dfrac{1}{\\sqrt x}$ : $2\\sqrt x+c$ sur $]0;+\\infty[$ ;\n- $\\cos x$ : $\\sin x+c$ ;\n- $\\sin x$ : $-\\cos x+c$ ;\n- $\\dfrac{1}{\\cos^2x}=1+\\tan^2x$ : $\\tan x+c$ sur $\\left]-\\dfrac{\\pi}{2}+k\\pi;\\dfrac{\\pi}{2}+k\\pi\\right[$.\n\nExemples sur $]0;+\\infty[$ :\n- $x^3$ : $\\dfrac14x^4+c$ ;\n- $\\dfrac{1}{x^5}$ : $-\\dfrac{1}{4x^4}+c$ ;\n- $x^{\\frac23}$ : $\\dfrac{1}{\\frac23+1}x^{\\frac23+1}=\\dfrac35x^{\\frac53}+c$.\n\nOpérations : si $U$ et $V$ sont des primitives de $u$ et $v$, alors $U+V$ est une primitive de $u+v$, et $kU$ une primitive de $ku$.\nExemple : $8x^2+5x-9$ a pour primitives $\\dfrac83x^3+\\dfrac52x^2-9x+c$.",
      "keyRule": "$x^r\\to\\dfrac{x^{r+1}}{r+1}$ ; $\\dfrac{1}{\\sqrt x}\\to2\\sqrt x$ ; $\\cos\\to\\sin$ ; $\\sin\\to-\\cos$ ; $1+\\tan^2\\to\\tan$.",
      "formulas": [
        {
          "name": "Puissance",
          "formula": "x^r\\ \\longrightarrow\\ \\dfrac{x^{r+1}}{r+1}\\quad(r\\neq-1)"
        },
        {
          "name": "Sinus et cosinus",
          "formula": "\\cos x\\ \\longrightarrow\\ \\sin x\\qquad\\sin x\\ \\longrightarrow\\ -\\cos x"
        }
      ],
      "workedExample": {
        "title": "Un polynôme",
        "statement": "Donne les primitives de $f(x)=8x^2+5x-9$ sur $\\mathbb{R}$.",
        "methodSteps": [
          "On primitive terme à terme : $8\\times\\dfrac{x^3}{3}$, $5\\times\\dfrac{x^2}{2}$ et $-9x$."
        ],
        "conclusion": "$F(x)=\\dfrac83x^3+\\dfrac52x^2-9x+c$, $c\\in\\mathbb{R}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les puissances",
          "stepTheme": "Les puissances",
          "stepBadge": "Les puissances",
          "paragraphText": "Une primitive de $x^r$ ($r\\neq-1$) est $\\dfrac{x^{r+1}}{r+1}$ : on ajoute $1$ à l'exposant et on divise par le nouvel exposant.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p02_q1",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $x^3$ ?",
            "options": [
              "$3x^2$",
              "$\\dfrac14x^4$",
              "$x^4$",
              "$\\dfrac13x^4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Exposant $3+1=4$, et on divise par $4$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un exposant fractionnaire",
          "stepTheme": "Un exposant fractionnaire",
          "stepBadge": "Un exposant fractionnaire",
          "paragraphText": "Pour $x^{\\frac23}$ : $\\dfrac23+1=\\dfrac53$, donc une primitive est $\\dfrac{1}{\\frac53}x^{\\frac53}=\\dfrac35x^{\\frac53}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p02_q2",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $x^{\\frac12}=\\sqrt x$ sur $]0;+\\infty[$ ?",
            "options": [
              "$\\dfrac{1}{2\\sqrt x}$",
              "$\\dfrac32x^{\\frac32}$",
              "$\\dfrac23x^{\\frac32}$",
              "$2\\sqrt x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac12+1=\\dfrac32$, et $\\dfrac{1}{3/2}=\\dfrac23$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'inverse d'une puissance",
          "stepTheme": "L'inverse d'une puissance",
          "stepBadge": "L'inverse d'une puissance",
          "paragraphText": "$\\dfrac{1}{x^5}=x^{-5}$ a pour primitive $\\dfrac{x^{-4}}{-4}=-\\dfrac{1}{4x^4}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p02_q3",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\dfrac{1}{x^3}$ sur $]0;+\\infty[$ ?",
            "options": [
              "$-\\dfrac{1}{2x^2}$",
              "$\\dfrac{1}{4x^4}$",
              "$-\\dfrac{3}{x^4}$",
              "$\\ln x^3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$x^{-3}\\to\\dfrac{x^{-2}}{-2}=-\\dfrac{1}{2x^2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Sinus et cosinus",
          "stepTheme": "Sinus et cosinus",
          "stepBadge": "Sinus et cosinus",
          "paragraphText": "Une primitive de $\\cos x$ est $\\sin x$ ; une primitive de $\\sin x$ est $-\\cos x$ (attention au signe moins).",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p02_q4",
            "type": "mcq",
            "prompt": "Quelles sont les primitives de $\\sin x+\\cos x$ ?",
            "options": [
              "$\\cos x-\\sin x+c$",
              "$\\cos x+\\sin x+c$",
              "$-\\cos x-\\sin x+c$",
              "$-\\cos x+\\sin x+c$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\sin\\to-\\cos$ et $\\cos\\to\\sin$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La racine et la tangente",
          "stepTheme": "La racine et la tangente",
          "stepBadge": "La racine et la tangente",
          "paragraphText": "Une primitive de $\\dfrac{1}{\\sqrt x}$ est $2\\sqrt x$ ; une primitive de $1+\\tan^2x=\\dfrac{1}{\\cos^2x}$ est $\\tan x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p02_q5",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\dfrac{1}{\\sqrt x}$ sur $]0;+\\infty[$ ?",
            "options": [
              "$\\sqrt x$",
              "$2\\sqrt x$",
              "$\\dfrac{1}{2\\sqrt x}$",
              "$-\\dfrac{1}{x}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(2\\sqrt x)'=2\\times\\dfrac{1}{2\\sqrt x}=\\dfrac{1}{\\sqrt x}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Somme et facteur",
          "stepTheme": "Somme et facteur",
          "stepBadge": "Somme et facteur",
          "paragraphText": "On primitive terme à terme et on garde les coefficients : $8x^2+5x-9\\to\\dfrac83x^3+\\dfrac52x^2-9x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p02_q6",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $x+\\sin x$ ?",
            "options": [
              "$1+\\cos x$",
              "$\\dfrac12x^2+\\cos x$",
              "$x^2-\\cos x$",
              "$\\dfrac12x^2-\\cos x$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x\\to\\dfrac{x^2}{2}$ et $\\sin x\\to-\\cos x$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Vrai ou faux ?",
          "stepTheme": "Vrai ou faux ?",
          "stepBadge": "Vrai ou faux ?",
          "paragraphText": "On vérifie toujours en dérivant. $F(x)=x^3-2x^2+x-\\pi$ : $F'(x)=3x^2-4x+1$. C'est bien une primitive de $3x^2-4x+1$ ($\\pi$ est une constante).",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p02_q7",
            "type": "mcq",
            "prompt": "« $u\\times v$ est une primitive de $u'v+uv'$. » Cette affirmation est :",
            "options": [
              "Vraie, car $(uv)'=u'v+uv'$",
              "Fausse, il faut $u'\\times v'$",
              "Fausse, il faut $u+v$",
              "Vraie seulement si $u=v$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la formule de dérivation d'un produit, lue à l'envers."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p02_q1",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $x^3$ ?",
          "options": [
            "$3x^2$",
            "$\\dfrac14x^4$",
            "$x^4$",
            "$\\dfrac13x^4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Exposant $3+1=4$, et on divise par $4$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p02_q2",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $x^{\\frac12}=\\sqrt x$ sur $]0;+\\infty[$ ?",
          "options": [
            "$\\dfrac{1}{2\\sqrt x}$",
            "$\\dfrac32x^{\\frac32}$",
            "$\\dfrac23x^{\\frac32}$",
            "$2\\sqrt x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac12+1=\\dfrac32$, et $\\dfrac{1}{3/2}=\\dfrac23$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p02_q3",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\dfrac{1}{x^3}$ sur $]0;+\\infty[$ ?",
          "options": [
            "$-\\dfrac{1}{2x^2}$",
            "$\\dfrac{1}{4x^4}$",
            "$-\\dfrac{3}{x^4}$",
            "$\\ln x^3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$x^{-3}\\to\\dfrac{x^{-2}}{-2}=-\\dfrac{1}{2x^2}$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p02_q4",
          "type": "mcq",
          "prompt": "Quelles sont les primitives de $\\sin x+\\cos x$ ?",
          "options": [
            "$\\cos x-\\sin x+c$",
            "$\\cos x+\\sin x+c$",
            "$-\\cos x-\\sin x+c$",
            "$-\\cos x+\\sin x+c$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\sin\\to-\\cos$ et $\\cos\\to\\sin$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p02_q5",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\dfrac{1}{\\sqrt x}$ sur $]0;+\\infty[$ ?",
          "options": [
            "$\\sqrt x$",
            "$2\\sqrt x$",
            "$\\dfrac{1}{2\\sqrt x}$",
            "$-\\dfrac{1}{x}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(2\\sqrt x)'=2\\times\\dfrac{1}{2\\sqrt x}=\\dfrac{1}{\\sqrt x}$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p02_q6",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $x+\\sin x$ ?",
          "options": [
            "$1+\\cos x$",
            "$\\dfrac12x^2+\\cos x$",
            "$x^2-\\cos x$",
            "$\\dfrac12x^2-\\cos x$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x\\to\\dfrac{x^2}{2}$ et $\\sin x\\to-\\cos x$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p02_q7",
          "type": "mcq",
          "prompt": "« $u\\times v$ est une primitive de $u'v+uv'$. » Cette affirmation est :",
          "options": [
            "Vraie, car $(uv)'=u'v+uv'$",
            "Fausse, il faut $u'\\times v'$",
            "Fausse, il faut $u+v$",
            "Vraie seulement si $u=v$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la formule de dérivation d'un produit, lue à l'envers."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l04_primitives_p03",
      "order": 3,
      "title": "Primitives de fonctions composées",
      "summary": "Reconnaître $u'u^r$, $\\dfrac{u'}{u^r}$, $\\dfrac{u'}{\\sqrt u}$, $u'\\cos u$, $u'\\sin u$.",
      "conceptExplanation": "Propriété : une primitive de $u'\\times(v'\\circ u)$ est $v\\circ u$.\n\nTableau ($u$ dérivable sur $I$) :\n- $u'u^r$ ($r\\neq-1$) : $\\dfrac{1}{r+1}u^{r+1}$ ;\n- $\\dfrac{u'}{u^r}$ ($r\\neq1$, $u>0$) : $-\\dfrac{1}{(r-1)u^{r-1}}$ ;\n- $\\dfrac{u'}{\\sqrt u}$ ($u>0$) : $2\\sqrt u$ ;\n- $u'\\cos u$ : $\\sin u$ ; $u'\\sin u$ : $-\\cos u$ ;\n- $\\cos(ax+b)$ : $\\dfrac1a\\sin(ax+b)$ ; $\\sin(ax+b)$ : $-\\dfrac1a\\cos(ax+b)$ ($a\\neq0$).\n\nMéthode : on repère $u$, on calcule $u'$, et on ajuste le coefficient pour faire apparaître exactement $u'$.\n\nExemples :\n- $(2x+1)(x^2+x+6)^3=u'u^3$ avec $u=x^2+x+6$ : primitive $\\dfrac14(x^2+x+6)^4$ ;\n- $\\dfrac{2x+3}{(x^2+3x+3)^4}=\\dfrac{u'}{u^4}$ : primitive $-\\dfrac{1}{3(x^2+3x+3)^3}$ ;\n- $\\sin x\\cos^5x=-u'u^5$ avec $u=\\cos x$ : primitive $-\\dfrac16\\cos^6x$ ;\n- $\\dfrac{2x+1}{\\sqrt{x^2+x+1}}=\\dfrac{u'}{\\sqrt u}$ : primitive $2\\sqrt{x^2+x+1}$ ;\n- $3\\sin2x$ : primitive $-\\dfrac32\\cos2x$ ;\n- $(3x+2)(3x^2+4x+7)^3=\\dfrac12(6x+4)(3x^2+4x+7)^3$ : primitive $\\dfrac18(3x^2+4x+7)^4$.",
      "keyRule": "Faire apparaître $u'$ exactement (quitte à multiplier et diviser par un nombre), puis appliquer le tableau.",
      "formulas": [
        {
          "name": "Puissance d'une fonction",
          "formula": "u'u^r\\ \\longrightarrow\\ \\dfrac{u^{r+1}}{r+1}"
        },
        {
          "name": "Racine",
          "formula": "\\dfrac{u'}{\\sqrt u}\\ \\longrightarrow\\ 2\\sqrt u"
        },
        {
          "name": "Cosinus composé",
          "formula": "\\cos(ax+b)\\ \\longrightarrow\\ \\dfrac1a\\sin(ax+b)"
        }
      ],
      "workedExample": {
        "title": "Ajuster le coefficient",
        "statement": "Trouve une primitive de $f(x)=\\dfrac{1}{(2x+5)^2}$ sur $\\left]-\\dfrac52;+\\infty\\right[$.",
        "methodSteps": [
          "$u=2x+5$, $u'=2$ : on écrit $f(x)=\\dfrac12\\times\\dfrac{2}{(2x+5)^2}=\\dfrac12\\times\\dfrac{u'}{u^2}$.",
          "Une primitive de $\\dfrac{u'}{u^2}$ est $-\\dfrac1u$."
        ],
        "conclusion": "$F(x)=-\\dfrac{1}{2(2x+5)}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La forme $u'u^r$",
          "stepTheme": "La forme $u'u^r$",
          "stepBadge": "La forme $u'u^r$",
          "paragraphText": "Une primitive de $u'u^r$ est $\\dfrac{u^{r+1}}{r+1}$. Pour $(2x+1)(x^2+x+6)^3$, $u=x^2+x+6$ et $u'=2x+1$ : primitive $\\dfrac14(x^2+x+6)^4$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p03_q1",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $2x(x^2+1)^4$ ?",
            "options": [
              "$(x^2+1)^5$",
              "$\\dfrac15(x^2+1)^5$",
              "$\\dfrac{x^2}{5}(x^2+1)^5$",
              "$8x(x^2+1)^3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$u=x^2+1$, $u'=2x$ : $\\dfrac{u^5}{5}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Ajuster le coefficient",
          "stepTheme": "Ajuster le coefficient",
          "stepBadge": "Ajuster le coefficient",
          "paragraphText": "Pour $(3x+2)(3x^2+4x+7)^3$, on a $u'=6x+4$ : on écrit $\\dfrac12(6x+4)u^3$, d'où la primitive $\\dfrac12\\times\\dfrac{u^4}{4}=\\dfrac18u^4$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p03_q2",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $(x-1)(x^2-2x+5)^3$ ?",
            "options": [
              "$\\dfrac14(x^2-2x+5)^4$",
              "$\\dfrac12(x^2-2x+5)^4$",
              "$\\dfrac18(x^2-2x+5)^4$",
              "$(x^2-2x+5)^4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$u'=2x-2=2(x-1)$, donc $f=\\dfrac12u'u^3$ : primitive $\\dfrac12\\times\\dfrac{u^4}{4}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La forme $\\dfrac{u'}{u^r}$",
          "stepTheme": "La forme $\\dfrac{u'}{u^r}$",
          "stepBadge": "La forme $\\dfrac{u'}{u^r}$",
          "paragraphText": "Une primitive de $\\dfrac{u'}{u^r}$ ($r\\neq1$) est $-\\dfrac{1}{(r-1)u^{r-1}}$. Pour $\\dfrac{3}{(3x+5)^2}$ : $-\\dfrac{1}{3x+5}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p03_q3",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\dfrac{2x+3}{(x^2+3x+3)^4}$ ?",
            "options": [
              "$-\\dfrac{1}{3(x^2+3x+3)^3}$",
              "$\\dfrac{1}{5(x^2+3x+3)^5}$",
              "$-\\dfrac{1}{(x^2+3x+3)^3}$",
              "$\\dfrac{1}{3(x^2+3x+3)^3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$r=4$ : $-\\dfrac{1}{3u^3}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La forme $\\dfrac{u'}{\\sqrt u}$",
          "stepTheme": "La forme $\\dfrac{u'}{\\sqrt u}$",
          "stepBadge": "La forme $\\dfrac{u'}{\\sqrt u}$",
          "paragraphText": "Une primitive de $\\dfrac{u'}{\\sqrt u}$ est $2\\sqrt u$. Pour $\\dfrac{2x+1}{\\sqrt{x^2+x+1}}$ : $2\\sqrt{x^2+x+1}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p03_q4",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\dfrac{2x}{\\sqrt{x^2-9}}$ sur $]3;+\\infty[$ ?",
            "options": [
              "$\\sqrt{x^2-9}$",
              "$\\dfrac{1}{\\sqrt{x^2-9}}$",
              "$4\\sqrt{x^2-9}$",
              "$2\\sqrt{x^2-9}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$u=x^2-9$, $u'=2x$ : primitive $2\\sqrt u$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Avec $ax+b$",
          "stepTheme": "Avec $ax+b$",
          "stepBadge": "Avec $ax+b$",
          "paragraphText": "Une primitive de $\\sin(ax+b)$ est $-\\dfrac1a\\cos(ax+b)$. Ainsi $3\\sin2x\\to3\\times\\left(-\\dfrac12\\cos2x\\right)=-\\dfrac32\\cos2x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p03_q5",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\cos\\left(3x-\\dfrac{\\pi}{5}\\right)$ ?",
            "options": [
              "$3\\sin\\left(3x-\\dfrac{\\pi}{5}\\right)$",
              "$\\dfrac13\\sin\\left(3x-\\dfrac{\\pi}{5}\\right)$",
              "$-\\dfrac13\\sin\\left(3x-\\dfrac{\\pi}{5}\\right)$",
              "$\\sin\\left(3x-\\dfrac{\\pi}{5}\\right)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$a=3$ : on divise par $3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Un sinus fois une puissance de cosinus",
          "stepTheme": "Un sinus fois une puissance de cosinus",
          "stepBadge": "Un sinus fois une puissance de cosinus",
          "paragraphText": "Avec $u=\\cos x$, $u'=-\\sin x$ : $\\sin x\\cos^5x=-u'u^5$, dont une primitive est $-\\dfrac{u^6}{6}=-\\dfrac16\\cos^6x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p03_q6",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\cos x\\sin^2x$ ?",
            "options": [
              "$\\dfrac13\\sin^3x$",
              "$-\\dfrac13\\sin^3x$",
              "$\\dfrac13\\cos^3x$",
              "$2\\sin x\\cos x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$u=\\sin x$, $u'=\\cos x$ : $u'u^2\\to\\dfrac{u^3}{3}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Oublier le facteur",
          "stepTheme": "Oublier le facteur",
          "stepBadge": "Oublier le facteur",
          "paragraphText": "Pour $\\dfrac{1}{(2x+5)^2}$, la primitive n'est pas $-\\dfrac{1}{2x+5}$ : il manque le facteur $\\dfrac12$, car $u'=2$. On vérifie toujours en dérivant.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p03_q7",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\dfrac{1}{(2x+5)^2}$ sur $\\left]-\\dfrac52;+\\infty\\right[$ ?",
            "options": [
              "$-\\dfrac{1}{2x+5}$",
              "$-\\dfrac{2}{2x+5}$",
              "$-\\dfrac{1}{2(2x+5)}$",
              "$\\dfrac{1}{3(2x+5)^3}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\left(-\\dfrac{1}{2(2x+5)}\\right)'=\\dfrac{2}{2(2x+5)^2}=\\dfrac{1}{(2x+5)^2}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p03_q1",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $2x(x^2+1)^4$ ?",
          "options": [
            "$(x^2+1)^5$",
            "$\\dfrac15(x^2+1)^5$",
            "$\\dfrac{x^2}{5}(x^2+1)^5$",
            "$8x(x^2+1)^3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$u=x^2+1$, $u'=2x$ : $\\dfrac{u^5}{5}$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p03_q2",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $(x-1)(x^2-2x+5)^3$ ?",
          "options": [
            "$\\dfrac14(x^2-2x+5)^4$",
            "$\\dfrac12(x^2-2x+5)^4$",
            "$\\dfrac18(x^2-2x+5)^4$",
            "$(x^2-2x+5)^4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$u'=2x-2=2(x-1)$, donc $f=\\dfrac12u'u^3$ : primitive $\\dfrac12\\times\\dfrac{u^4}{4}$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p03_q3",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\dfrac{2x+3}{(x^2+3x+3)^4}$ ?",
          "options": [
            "$-\\dfrac{1}{3(x^2+3x+3)^3}$",
            "$\\dfrac{1}{5(x^2+3x+3)^5}$",
            "$-\\dfrac{1}{(x^2+3x+3)^3}$",
            "$\\dfrac{1}{3(x^2+3x+3)^3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$r=4$ : $-\\dfrac{1}{3u^3}$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p03_q4",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\dfrac{2x}{\\sqrt{x^2-9}}$ sur $]3;+\\infty[$ ?",
          "options": [
            "$\\sqrt{x^2-9}$",
            "$\\dfrac{1}{\\sqrt{x^2-9}}$",
            "$4\\sqrt{x^2-9}$",
            "$2\\sqrt{x^2-9}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$u=x^2-9$, $u'=2x$ : primitive $2\\sqrt u$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p03_q5",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\cos\\left(3x-\\dfrac{\\pi}{5}\\right)$ ?",
          "options": [
            "$3\\sin\\left(3x-\\dfrac{\\pi}{5}\\right)$",
            "$\\dfrac13\\sin\\left(3x-\\dfrac{\\pi}{5}\\right)$",
            "$-\\dfrac13\\sin\\left(3x-\\dfrac{\\pi}{5}\\right)$",
            "$\\sin\\left(3x-\\dfrac{\\pi}{5}\\right)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$a=3$ : on divise par $3$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p03_q6",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\cos x\\sin^2x$ ?",
          "options": [
            "$\\dfrac13\\sin^3x$",
            "$-\\dfrac13\\sin^3x$",
            "$\\dfrac13\\cos^3x$",
            "$2\\sin x\\cos x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$u=\\sin x$, $u'=\\cos x$ : $u'u^2\\to\\dfrac{u^3}{3}$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p03_q7",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\dfrac{1}{(2x+5)^2}$ sur $\\left]-\\dfrac52;+\\infty\\right[$ ?",
          "options": [
            "$-\\dfrac{1}{2x+5}$",
            "$-\\dfrac{2}{2x+5}$",
            "$-\\dfrac{1}{2(2x+5)}$",
            "$\\dfrac{1}{3(2x+5)^3}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\left(-\\dfrac{1}{2(2x+5)}\\right)'=\\dfrac{2}{2(2x+5)^2}=\\dfrac{1}{(2x+5)^2}$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l04_primitives_p04",
      "order": 4,
      "title": "Techniques : linéariser, décomposer, identifier",
      "summary": "Transformer l'expression avant de chercher la primitive.",
      "conceptExplanation": "Quand la fonction n'est pas dans le tableau, on la transforme.\n\n1. Linéariser (puissances de sinus ou cosinus) :\n$\\cos^4x=\\left(\\dfrac{1+\\cos2x}{2}\\right)^2=\\dfrac38+\\dfrac12\\cos2x+\\dfrac18\\cos4x$,\ndonc ses primitives sont $\\dfrac38x+\\dfrac14\\sin2x+\\dfrac{1}{32}\\sin4x+c$.\n\n2. Décomposer une fraction (division euclidienne) :\n$\\dfrac{x^3-x^2-8x+8}{(x-2)^2}=x+3-\\dfrac{4}{(x-2)^2}$ sur $]2;+\\infty[$,\ndonc ses primitives sont $\\dfrac{x^2}{2}+3x+\\dfrac{4}{x-2}+c$.\n\n3. Reconnaître une dérivée de produit : $(x\\sin x)'=\\sin x+x\\cos x$, donc $x\\cos x=(x\\sin x)'-\\sin x$ et une primitive de $x\\cos x$ est $x\\sin x+\\cos x$.\n\n4. Identifier les coefficients : pour que $F(x)=(ax^2+bx+c)\\sqrt{3-2x}$ soit une primitive de $x\\sqrt{3-2x}$, on calcule $F'$ et on identifie : $-5a=-2$, $6a-3b=3$, $3b-c=0$, donc $a=\\dfrac25$, $b=-\\dfrac15$, $c=-\\dfrac35$.",
      "keyRule": "Avant de primitiver : linéariser les puissances trigonométriques, décomposer les fractions, ou reconnaître une dérivée connue.",
      "formulas": [
        {
          "name": "Linéarisation",
          "formula": "\\cos^2x=\\dfrac{1+\\cos2x}{2}\\qquad\\sin^2x=\\dfrac{1-\\cos2x}{2}"
        }
      ],
      "workedExample": {
        "title": "Une primitive de $x\\cos x$",
        "statement": "Calcule $(x\\sin x)'$ et déduis-en une primitive de $x\\cos x$.",
        "methodSteps": [
          "$(x\\sin x)'=\\sin x+x\\cos x$, donc $x\\cos x=(x\\sin x)'-\\sin x$.",
          "Une primitive de $-\\sin x$ est $\\cos x$."
        ],
        "conclusion": "Une primitive de $x\\cos x$ est $x\\sin x+\\cos x$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Linéariser $\\cos^2$",
          "stepTheme": "Linéariser $\\cos^2$",
          "stepBadge": "Linéariser $\\cos^2$",
          "paragraphText": "$\\cos^2x=\\dfrac{1+\\cos2x}{2}$ : une puissance devient une somme de cosinus, facile à primitiver.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\cos^2x=\\dfrac12+\\dfrac12\\cos2x$ ?",
            "options": [
              "$\\dfrac{\\cos^3x}{3}$",
              "$\\dfrac12x+\\dfrac14\\sin2x$",
              "$\\dfrac12x+\\dfrac12\\sin2x$",
              "$2\\cos x\\sin x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac12\\cos2x\\to\\dfrac12\\times\\dfrac12\\sin2x$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Linéariser $\\cos^4$",
          "stepTheme": "Linéariser $\\cos^4$",
          "stepBadge": "Linéariser $\\cos^4$",
          "paragraphText": "$\\cos^4x=\\dfrac38+\\dfrac12\\cos2x+\\dfrac18\\cos4x$. Ses primitives : $\\dfrac38x+\\dfrac14\\sin2x+\\dfrac{1}{32}\\sin4x+c$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\dfrac18\\cos4x$ ?",
            "options": [
              "$\\dfrac12\\sin4x$",
              "$\\dfrac18\\sin4x$",
              "$\\dfrac{1}{32}\\sin4x$",
              "$-\\dfrac{1}{32}\\sin4x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac18\\times\\dfrac14\\sin4x=\\dfrac{1}{32}\\sin4x$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Décomposer une fraction",
          "stepTheme": "Décomposer une fraction",
          "stepBadge": "Décomposer une fraction",
          "paragraphText": "Par division euclidienne : $\\dfrac{x^3-x^2-8x+8}{(x-2)^2}=x+3-\\dfrac{4}{(x-2)^2}$. Chaque terme se primitive avec le tableau.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p04_q3",
            "type": "mcq",
            "prompt": "Quelles sont les primitives de $x+3-\\dfrac{4}{(x-2)^2}$ sur $]2;+\\infty[$ ?",
            "options": [
              "$\\dfrac13x^2+3x+\\dfrac{4}{x-2}+c$",
              "$\\dfrac12x^2+3x-\\dfrac{4}{x-2}+c$",
              "$x^2+3x+\\dfrac{4}{x-2}+c$",
              "$\\dfrac12x^2+3x+\\dfrac{4}{x-2}+c$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x\\to\\dfrac{x^2}{2}$ et $-\\dfrac{4}{(x-2)^2}\\to\\dfrac{4}{x-2}$ (car $\\left(\\dfrac{1}{x-2}\\right)'=-\\dfrac{1}{(x-2)^2}$)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Reconnaître un produit",
          "stepTheme": "Reconnaître un produit",
          "stepBadge": "Reconnaître un produit",
          "paragraphText": "$(x\\sin x)'=\\sin x+x\\cos x$, donc $x\\cos x=(x\\sin x)'-\\sin x$ : une primitive de $x\\cos x$ est $x\\sin x+\\cos x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p04_q4",
            "type": "mcq",
            "prompt": "Que vaut la dérivée de $x\\sin x$ ?",
            "options": [
              "$\\sin x+x\\cos x$",
              "$x\\cos x$",
              "$\\cos x$",
              "$\\sin x-x\\cos x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dérivée d'un produit : $1\\times\\sin x+x\\times\\cos x$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Identifier les coefficients",
          "stepTheme": "Identifier les coefficients",
          "stepBadge": "Identifier les coefficients",
          "paragraphText": "On pose $F(x)=(ax^2+bx+c)\\sqrt{3-2x}$, on calcule $F'(x)$, puis on égale les coefficients de $F'$ et de $f$ : on trouve $a=\\dfrac25$, $b=-\\dfrac15$, $c=-\\dfrac35$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p04_q5",
            "type": "mcq",
            "prompt": "Le système d'identification donne $-5a=-2$. Que vaut $a$ ?",
            "options": [
              "$\\dfrac25$",
              "$-\\dfrac25$",
              "$\\dfrac52$",
              "$10$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$a=\\dfrac{-2}{-5}=\\dfrac25$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Avec $\\sin^2+\\cos^2$",
          "stepTheme": "Avec $\\sin^2+\\cos^2$",
          "stepBadge": "Avec $\\sin^2+\\cos^2$",
          "paragraphText": "$\\cos^2x+\\sin^2x=1$ et $\\cos^2x-\\sin^2x=\\cos2x$ : en additionnant et soustrayant des primitives simples, on retrouve celles de $\\cos^2$ et $\\sin^2$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la primitive de $\\cos^2x+\\sin^2x$ qui s'annule en $0$ ?",
            "options": [
              "$0$",
              "$\\sin x\\cos x$",
              "$x$",
              "$1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\cos^2x+\\sin^2x=1$, dont la primitive nulle en $0$ est $x$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas de règle du produit",
          "stepTheme": "Pas de règle du produit",
          "stepBadge": "Pas de règle du produit",
          "paragraphText": "Une primitive d'un produit n'est PAS le produit des primitives : $x\\cos x$ n'a pas pour primitive $\\dfrac{x^2}{2}\\sin x$. On vérifie en dérivant.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p04_q7",
            "type": "mcq",
            "prompt": "Pourquoi $\\dfrac{x^2}{2}\\sin x$ n'est-elle pas une primitive de $x\\cos x$ ?",
            "options": [
              "Parce que sa dérivée $x\\sin x+\\dfrac{x^2}{2}\\cos x$ n'est pas $x\\cos x$",
              "Parce qu'il manque une constante",
              "Parce que $\\sin x$ n'a pas de primitive",
              "Elle en est une"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La vérification par la dérivée suffit à l'écarter."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\cos^2x=\\dfrac12+\\dfrac12\\cos2x$ ?",
          "options": [
            "$\\dfrac{\\cos^3x}{3}$",
            "$\\dfrac12x+\\dfrac14\\sin2x$",
            "$\\dfrac12x+\\dfrac12\\sin2x$",
            "$2\\cos x\\sin x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac12\\cos2x\\to\\dfrac12\\times\\dfrac12\\sin2x$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\dfrac18\\cos4x$ ?",
          "options": [
            "$\\dfrac12\\sin4x$",
            "$\\dfrac18\\sin4x$",
            "$\\dfrac{1}{32}\\sin4x$",
            "$-\\dfrac{1}{32}\\sin4x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac18\\times\\dfrac14\\sin4x=\\dfrac{1}{32}\\sin4x$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p04_q3",
          "type": "mcq",
          "prompt": "Quelles sont les primitives de $x+3-\\dfrac{4}{(x-2)^2}$ sur $]2;+\\infty[$ ?",
          "options": [
            "$\\dfrac13x^2+3x+\\dfrac{4}{x-2}+c$",
            "$\\dfrac12x^2+3x-\\dfrac{4}{x-2}+c$",
            "$x^2+3x+\\dfrac{4}{x-2}+c$",
            "$\\dfrac12x^2+3x+\\dfrac{4}{x-2}+c$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x\\to\\dfrac{x^2}{2}$ et $-\\dfrac{4}{(x-2)^2}\\to\\dfrac{4}{x-2}$ (car $\\left(\\dfrac{1}{x-2}\\right)'=-\\dfrac{1}{(x-2)^2}$)."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p04_q4",
          "type": "mcq",
          "prompt": "Que vaut la dérivée de $x\\sin x$ ?",
          "options": [
            "$\\sin x+x\\cos x$",
            "$x\\cos x$",
            "$\\cos x$",
            "$\\sin x-x\\cos x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dérivée d'un produit : $1\\times\\sin x+x\\times\\cos x$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p04_q5",
          "type": "mcq",
          "prompt": "Le système d'identification donne $-5a=-2$. Que vaut $a$ ?",
          "options": [
            "$\\dfrac25$",
            "$-\\dfrac25$",
            "$\\dfrac52$",
            "$10$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$a=\\dfrac{-2}{-5}=\\dfrac25$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la primitive de $\\cos^2x+\\sin^2x$ qui s'annule en $0$ ?",
          "options": [
            "$0$",
            "$\\sin x\\cos x$",
            "$x$",
            "$1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\cos^2x+\\sin^2x=1$, dont la primitive nulle en $0$ est $x$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p04_q7",
          "type": "mcq",
          "prompt": "Pourquoi $\\dfrac{x^2}{2}\\sin x$ n'est-elle pas une primitive de $x\\cos x$ ?",
          "options": [
            "Parce que sa dérivée $x\\sin x+\\dfrac{x^2}{2}\\cos x$ n'est pas $x\\cos x$",
            "Parce qu'il manque une constante",
            "Parce que $\\sin x$ n'a pas de primitive",
            "Elle en est une"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La vérification par la dérivée suffit à l'écarter."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l04_primitives_p05",
      "order": 5,
      "title": "Le coût du voyage de la colonie",
      "summary": "Retrouver une fonction à partir de sa dérivée, puis l'optimiser.",
      "conceptExplanation": "Situation : le car de la colonie de vacances fait un trajet de 1 500 km. À la vitesse moyenne $v$ (km/h), la dérivée de sa consommation $C(v)$ (litres pour 100 km) est\n$$C'(v)=-\\dfrac{300}{v^2}+\\dfrac13.$$\nLe car consomme 25 litres aux 100 km à 60 km/h. Le chauffeur est payé 900 F de l'heure et le gasoil coûte 600 F le litre. Quelle vitesse rend le voyage le moins cher ?\n\n1. Retrouver $C$ : les primitives de $C'$ sont $C(v)=\\dfrac{300}{v}+\\dfrac v3+k$. Avec $C(60)=5+20+k=25$, on trouve $k=0$.\n2. Coût du chauffeur : durée $\\dfrac{1500}{v}$ h, donc $900\\times\\dfrac{1500}{v}=\\dfrac{1\\,350\\,000}{v}$.\n3. Coût du carburant : $15\\,C(v)$ litres, soit $600\\times15\\,C(v)=\\dfrac{2\\,700\\,000}{v}+3000v$.\n4. Coût total : $P(v)=\\dfrac{4\\,050\\,000}{v}+3000v$.\n5. $P'(v)=-\\dfrac{4\\,050\\,000}{v^2}+3000=0\\iff v^2=1350\\iff v=\\sqrt{1350}\\approx37$ km/h. $P$ décroît puis croît : c'est un minimum.\n6. $P(\\sqrt{1350})\\approx220\\,500$ F.\n\nConclusion : rouler à environ 37 km/h, pour un coût d'environ 220 500 FCFA.",
      "keyRule": "Une dérivée et une valeur connue donnent la fonction : primitive + condition initiale.",
      "formulas": [],
      "workedExample": {
        "title": "Retrouver la consommation",
        "statement": "$C'(v)=-\\dfrac{300}{v^2}+\\dfrac13$ et $C(60)=25$. Trouve $C(v)$.",
        "methodSteps": [
          "Une primitive de $-\\dfrac{300}{v^2}$ est $\\dfrac{300}{v}$ ; une primitive de $\\dfrac13$ est $\\dfrac v3$.",
          "$C(v)=\\dfrac{300}{v}+\\dfrac v3+k$ et $C(60)=5+20+k=25$."
        ],
        "conclusion": "$k=0$, donc $C(v)=\\dfrac{300}{v}+\\dfrac v3$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Primitiver la dérivée",
          "stepTheme": "Primitiver la dérivée",
          "stepBadge": "Primitiver la dérivée",
          "paragraphText": "De $C'(v)=-\\dfrac{300}{v^2}+\\dfrac13$, on tire $C(v)=\\dfrac{300}{v}+\\dfrac v3+k$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p05_q1",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $-\\dfrac{300}{v^2}$ sur $]0;+\\infty[$ ?",
            "options": [
              "$-\\dfrac{300}{v}$",
              "$\\dfrac{600}{v^3}$",
              "$\\dfrac{300}{v}$",
              "$300\\ln v$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\left(\\dfrac{300}{v}\\right)'=-\\dfrac{300}{v^2}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Trouver la constante",
          "stepTheme": "Trouver la constante",
          "stepBadge": "Trouver la constante",
          "paragraphText": "$C(60)=\\dfrac{300}{60}+\\dfrac{60}{3}+k=5+20+k=25$, donc $k=0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p05_q2",
            "type": "mcq",
            "prompt": "Si le car consommait 30 litres à 60 km/h, que vaudrait $k$ ?",
            "options": [
              "$0$",
              "$25$",
              "$-5$",
              "$5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$25+k=30$ donne $k=5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le coût du chauffeur",
          "stepTheme": "Le coût du chauffeur",
          "stepBadge": "Le coût du chauffeur",
          "paragraphText": "Le trajet dure $\\dfrac{1500}{v}$ heures ; à 900 F de l'heure, le chauffeur coûte $\\dfrac{1\\,350\\,000}{v}$ F.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p05_q3",
            "type": "mcq",
            "prompt": "À 50 km/h, combien d'heures dure le trajet de 1 500 km ?",
            "options": [
              "$30$ h",
              "$75$ h",
              "$3$ h",
              "$15$ h"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{1500}{50}=30$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le coût total",
          "stepTheme": "Le coût total",
          "stepBadge": "Le coût total",
          "paragraphText": "Carburant : $600\\times15\\left(\\dfrac{300}{v}+\\dfrac v3\\right)=\\dfrac{2\\,700\\,000}{v}+3000v$. Avec le chauffeur : $P(v)=\\dfrac{4\\,050\\,000}{v}+3000v$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p05_q4",
            "type": "mcq",
            "prompt": "Pourquoi multiplie-t-on $C(v)$ par $15$ ?",
            "options": [
              "Parce que le chauffeur travaille 15 h",
              "Parce que $C(v)$ est en litres pour 100 km et que le trajet fait 1 500 km",
              "Parce qu'il y a 15 élèves",
              "Parce que $15=\\sqrt{225}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$1500=15\\times100$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La vitesse optimale",
          "stepTheme": "La vitesse optimale",
          "stepBadge": "La vitesse optimale",
          "paragraphText": "$P'(v)=-\\dfrac{4\\,050\\,000}{v^2}+3000=0$ donne $v^2=1350$, soit $v=\\sqrt{1350}\\approx37$ km/h.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi garde-t-on $v=\\sqrt{1350}$ et non $-\\sqrt{1350}$ ?",
            "options": [
              "Parce qu'une vitesse moyenne est positive",
              "Parce que $\\sqrt{1350}$ est entier",
              "Parce que $P$ est croissante",
              "Au hasard"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$v$ est une vitesse, donc $v>0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le coût minimal",
          "stepTheme": "Le coût minimal",
          "stepBadge": "Le coût minimal",
          "paragraphText": "$P'$ est négative avant $\\sqrt{1350}$ et positive après : minimum. $P(\\sqrt{1350})\\approx110\\,227+110\\,227\\approx220\\,500$ F.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p05_q6",
            "type": "mcq",
            "prompt": "Quel est le coût minimal du voyage, environ ?",
            "options": [
              "$110\\,000$ F",
              "$37$ F",
              "$4\\,050\\,000$ F",
              "$220\\,500$ F"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les deux termes valent chacun environ $110\\,227$ F au minimum."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Rouler vite ne coûte pas moins",
          "stepTheme": "Rouler vite ne coûte pas moins",
          "stepBadge": "Rouler vite ne coûte pas moins",
          "paragraphText": "Rouler vite réduit le salaire du chauffeur mais augmente la consommation : le terme $3000v$ grandit. Le meilleur compromis est au minimum de $P$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l04_primitives_p05_q7",
            "type": "mcq",
            "prompt": "À 100 km/h, $P(100)=40\\,500+300\\,000$. Que constate-t-on ?",
            "options": [
              "Le voyage coûte moins cher qu'à 37 km/h",
              "Le voyage coûte $340\\,500$ F, plus cher qu'à 37 km/h",
              "Le coût est le même",
              "Le carburant est gratuit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$340\\,500>220\\,500$ : trop de carburant consommé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p05_q1",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $-\\dfrac{300}{v^2}$ sur $]0;+\\infty[$ ?",
          "options": [
            "$-\\dfrac{300}{v}$",
            "$\\dfrac{600}{v^3}$",
            "$\\dfrac{300}{v}$",
            "$300\\ln v$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\left(\\dfrac{300}{v}\\right)'=-\\dfrac{300}{v^2}$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p05_q2",
          "type": "mcq",
          "prompt": "Si le car consommait 30 litres à 60 km/h, que vaudrait $k$ ?",
          "options": [
            "$0$",
            "$25$",
            "$-5$",
            "$5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$25+k=30$ donne $k=5$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p05_q3",
          "type": "mcq",
          "prompt": "À 50 km/h, combien d'heures dure le trajet de 1 500 km ?",
          "options": [
            "$30$ h",
            "$75$ h",
            "$3$ h",
            "$15$ h"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{1500}{50}=30$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p05_q4",
          "type": "mcq",
          "prompt": "Pourquoi multiplie-t-on $C(v)$ par $15$ ?",
          "options": [
            "Parce que le chauffeur travaille 15 h",
            "Parce que $C(v)$ est en litres pour 100 km et que le trajet fait 1 500 km",
            "Parce qu'il y a 15 élèves",
            "Parce que $15=\\sqrt{225}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$1500=15\\times100$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi garde-t-on $v=\\sqrt{1350}$ et non $-\\sqrt{1350}$ ?",
          "options": [
            "Parce qu'une vitesse moyenne est positive",
            "Parce que $\\sqrt{1350}$ est entier",
            "Parce que $P$ est croissante",
            "Au hasard"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$v$ est une vitesse, donc $v>0$."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p05_q6",
          "type": "mcq",
          "prompt": "Quel est le coût minimal du voyage, environ ?",
          "options": [
            "$110\\,000$ F",
            "$37$ F",
            "$4\\,050\\,000$ F",
            "$220\\,500$ F"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les deux termes valent chacun environ $110\\,227$ F au minimum."
        },
        {
          "id": "terminale_d_maths_numerique_l04_primitives_p05_q7",
          "type": "mcq",
          "prompt": "À 100 km/h, $P(100)=40\\,500+300\\,000$. Que constate-t-on ?",
          "options": [
            "Le voyage coûte moins cher qu'à 37 km/h",
            "Le voyage coûte $340\\,500$ F, plus cher qu'à 37 km/h",
            "Le coût est le même",
            "Le carburant est gratuit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$340\\,500>220\\,500$ : trop de carburant consommé."
        }
      ]
    }
  ]
};
