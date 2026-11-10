import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « TD Maths leçon 03 DERIVABILITE ET ETUDE DE FONCTIONS.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_D_L03_DERIVABILITE_ETUDE_FONCTIONS: CurriculumChapter = {
  "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions",
  "subjectId": "maths",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 3,
  "title": "Leçon 3 : Dérivabilité et étude de fonctions",
  "summary": "Dérivabilité à gauche et à droite, demi-tangentes, dérivée d'une composée et d'une réciproque, dérivées successives, inégalité des accroissements finis, étude de fonction et optimisation.",
  "officialVolumeHours": 14,
  "contentVersion": 2,
  "source": "TD Maths leçon 03 DERIVABILITE ET ETUDE DE FONCTIONS.pdf",
  "points": [
    {
      "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01",
      "order": 1,
      "title": "Dérivabilité à gauche, à droite et demi-tangentes",
      "summary": "Nombres dérivés à gauche et à droite ; dérivable si et seulement s'ils sont égaux.",
      "conceptExplanation": "$f$ est dérivable à gauche en $x_0$ si $\\lim\\limits_{x\\to x_0^-}\\dfrac{f(x)-f(x_0)}{x-x_0}$ existe et est finie ; cette limite est le nombre dérivé à gauche $f_g'(x_0)$. La demi-droite issue de $M(x_0;f(x_0))$ de coefficient directeur $f_g'(x_0)$ est la demi-tangente à gauche.\nDe même à droite : $f_d'(x_0)$ et demi-tangente à droite.\n\nPropriété : $f$ est dérivable en $x_0$ si et seulement si $f$ est dérivable à gauche et à droite en $x_0$ ET $f_g'(x_0)=f_d'(x_0)$.\n\nExemple 1 : $f(x)=\\dfrac{1}{x-2}$ pour $x\\leq1$ et $f(x)=-\\dfrac1x$ pour $x\\geq1$ ; $f(1)=-1$.\n- à gauche : $\\dfrac{f(x)+1}{x-1}=\\dfrac{1}{x-2}\\to-1$, donc $f_g'(1)=-1$ ;\n- à droite : $\\dfrac{f(x)+1}{x-1}=\\dfrac1x\\to1$, donc $f_d'(1)=1$.\nLes deux nombres sont différents : $f$ n'est pas dérivable en $1$. La courbe a deux demi-tangentes de coefficients $-1$ et $1$ (point anguleux).\n\nExemple 2 : $f(x)=x^2$ pour $x<0$ et $f(x)=x^3$ pour $x\\geq0$ : $f_g'(0)=\\lim x=0$ et $f_d'(0)=\\lim x^2=0$, donc $f$ est dérivable en $0$ et $f'(0)=0$.\n\nPour tracer : un vecteur directeur de la demi-tangente à gauche est $\\vec u(-1;-f_g'(x_0))$, à droite $\\vec v(1;f_d'(x_0))$.",
      "keyRule": "Dérivable en $x_0$ $\\iff$ $f_g'(x_0)$ et $f_d'(x_0)$ existent, sont finis et égaux. Différents : point anguleux.",
      "formulas": [
        {
          "name": "Nombre dérivé à gauche",
          "formula": "f_g'(x_0)=\\lim_{x\\to x_0^-}\\dfrac{f(x)-f(x_0)}{x-x_0}"
        }
      ],
      "workedExample": {
        "title": "Une fonction dérivable en $-1$",
        "statement": "$f(x)=1-x^2$ si $x<-1$, $f(x)=\\dfrac{2x+2}{x+2}$ si $x\\geq-1$. Étudie la dérivabilité en $-1$.",
        "methodSteps": [
          "$f(-1)=0$.",
          "À gauche : $\\dfrac{1-x^2}{x+1}=1-x\\to2$.",
          "À droite : $\\dfrac{2x+2}{(x+2)(x+1)}=\\dfrac{2}{x+2}\\to2$."
        ],
        "conclusion": "$f_g'(-1)=f_d'(-1)=2$ : $f$ est dérivable en $-1$ et $f'(-1)=2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le nombre dérivé à gauche",
          "stepTheme": "Le nombre dérivé à gauche",
          "stepBadge": "Le nombre dérivé à gauche",
          "paragraphText": "$f_g'(x_0)$ est la limite, quand $x$ tend vers $x_0$ par la gauche, du taux $\\dfrac{f(x)-f(x_0)}{x-x_0}$, si elle est finie.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q1",
            "type": "mcq",
            "prompt": "Pour $f(x)=\\dfrac{1}{x-2}$ à gauche de $1$ (avec $f(1)=-1$), le taux se simplifie en $\\dfrac{1}{x-2}$. Que vaut $f_g'(1)$ ?",
            "options": [
              "$1$",
              "$-1$",
              "$0$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{1}{1-2}=-1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "À droite",
          "stepTheme": "À droite",
          "stepBadge": "À droite",
          "paragraphText": "À droite de $1$, $f(x)=-\\dfrac1x$ : $\\dfrac{-\\frac1x+1}{x-1}=\\dfrac{\\frac{x-1}{x}}{x-1}=\\dfrac1x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q2",
            "type": "mcq",
            "prompt": "Que vaut alors $f_d'(1)$ ?",
            "options": [
              "$-1$",
              "$0$",
              "$+\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac1x\\to1$ quand $x\\to1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La condition de dérivabilité",
          "stepTheme": "La condition de dérivabilité",
          "stepBadge": "La condition de dérivabilité",
          "paragraphText": "$f$ est dérivable en $x_0$ si et seulement si $f_g'(x_0)$ et $f_d'(x_0)$ existent et sont égaux.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q3",
            "type": "mcq",
            "prompt": "Avec $f_g'(1)=-1$ et $f_d'(1)=1$, $f$ est-elle dérivable en $1$ ?",
            "options": [
              "Oui, et $f'(1)=0$",
              "Oui, et $f'(1)=1$",
              "Non, car les deux nombres dérivés sont différents",
              "Non, car $f(1)<0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il faut $f_g'(1)=f_d'(1)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le point anguleux",
          "stepTheme": "Le point anguleux",
          "stepBadge": "Le point anguleux",
          "paragraphText": "Quand $f_g'(x_0)\\neq f_d'(x_0)$, la courbe a deux demi-tangentes de directions différentes : elle forme un « coin », un point anguleux.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q4",
            "type": "mcq",
            "prompt": "Comment interpréter graphiquement $f_g'(1)=-1$ et $f_d'(1)=1$ ?",
            "options": [
              "Deux demi-tangentes de coefficients directeurs $-1$ et $1$",
              "Une tangente horizontale",
              "Une asymptote verticale en $x=1$",
              "Une tangente unique de coefficient $0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque nombre dérivé donne la pente d'une demi-tangente."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un raccord réussi",
          "stepTheme": "Un raccord réussi",
          "stepBadge": "Un raccord réussi",
          "paragraphText": "$f(x)=x^2$ pour $x<0$ et $x^3$ pour $x\\geq0$ : à gauche le taux vaut $x\\to0$, à droite $x^2\\to0$. Les deux sont égaux : $f'(0)=0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q5",
            "type": "mcq",
            "prompt": "$f(x)=1-x^2$ si $x<-1$ et $\\dfrac{2x+2}{x+2}$ si $x\\geq-1$. On trouve $f_g'(-1)=f_d'(-1)=2$. Que conclut-on ?",
            "options": [
              "$f$ n'est pas dérivable en $-1$",
              "$f$ est dérivable en $-1$ et $f'(-1)=2$",
              "$f'(-1)=4$",
              "$f$ n'est pas continue en $-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Nombres dérivés à gauche et à droite égaux et finis."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Tracer une demi-tangente",
          "stepTheme": "Tracer une demi-tangente",
          "stepBadge": "Tracer une demi-tangente",
          "paragraphText": "À droite, on part du point $M$ avec le vecteur $\\vec v(1;f_d'(x_0))$ ; à gauche avec $\\vec u(-1;-f_g'(x_0))$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q6",
            "type": "mcq",
            "prompt": "Avec $f_g'(1)=-1$, quel est un vecteur directeur de la demi-tangente à gauche ?",
            "options": [
              "$(1;-1)$",
              "$(1;1)$",
              "$(-1;-1)$",
              "$(-1;1)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\vec u(-1;-f_g'(1))=(-1;1)$ : on part vers la gauche en montant."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Continue n'est pas dérivable",
          "stepTheme": "Continue n'est pas dérivable",
          "stepBadge": "Continue n'est pas dérivable",
          "paragraphText": "Une fonction peut être continue en $x_0$ sans y être dérivable : c'est le cas d'un point anguleux, comme $|x|$ en $0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q7",
            "type": "mcq",
            "prompt": "$x\\mapsto|x|$ en $0$ : que valent les nombres dérivés à gauche et à droite ?",
            "options": [
              "$0$ et $0$",
              "$1$ et $1$",
              "$-1$ et $1$",
              "Ils n'existent pas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{|x|}{x}$ vaut $-1$ à gauche et $1$ à droite : continue mais pas dérivable en $0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q1",
          "type": "mcq",
          "prompt": "Pour $f(x)=\\dfrac{1}{x-2}$ à gauche de $1$ (avec $f(1)=-1$), le taux se simplifie en $\\dfrac{1}{x-2}$. Que vaut $f_g'(1)$ ?",
          "options": [
            "$1$",
            "$-1$",
            "$0$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{1}{1-2}=-1$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q2",
          "type": "mcq",
          "prompt": "Que vaut alors $f_d'(1)$ ?",
          "options": [
            "$-1$",
            "$0$",
            "$+\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac1x\\to1$ quand $x\\to1$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q3",
          "type": "mcq",
          "prompt": "Avec $f_g'(1)=-1$ et $f_d'(1)=1$, $f$ est-elle dérivable en $1$ ?",
          "options": [
            "Oui, et $f'(1)=0$",
            "Oui, et $f'(1)=1$",
            "Non, car les deux nombres dérivés sont différents",
            "Non, car $f(1)<0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il faut $f_g'(1)=f_d'(1)$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q4",
          "type": "mcq",
          "prompt": "Comment interpréter graphiquement $f_g'(1)=-1$ et $f_d'(1)=1$ ?",
          "options": [
            "Deux demi-tangentes de coefficients directeurs $-1$ et $1$",
            "Une tangente horizontale",
            "Une asymptote verticale en $x=1$",
            "Une tangente unique de coefficient $0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque nombre dérivé donne la pente d'une demi-tangente."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q5",
          "type": "mcq",
          "prompt": "$f(x)=1-x^2$ si $x<-1$ et $\\dfrac{2x+2}{x+2}$ si $x\\geq-1$. On trouve $f_g'(-1)=f_d'(-1)=2$. Que conclut-on ?",
          "options": [
            "$f$ n'est pas dérivable en $-1$",
            "$f$ est dérivable en $-1$ et $f'(-1)=2$",
            "$f'(-1)=4$",
            "$f$ n'est pas continue en $-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Nombres dérivés à gauche et à droite égaux et finis."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q6",
          "type": "mcq",
          "prompt": "Avec $f_g'(1)=-1$, quel est un vecteur directeur de la demi-tangente à gauche ?",
          "options": [
            "$(1;-1)$",
            "$(1;1)$",
            "$(-1;-1)$",
            "$(-1;1)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\vec u(-1;-f_g'(1))=(-1;1)$ : on part vers la gauche en montant."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p01_q7",
          "type": "mcq",
          "prompt": "$x\\mapsto|x|$ en $0$ : que valent les nombres dérivés à gauche et à droite ?",
          "options": [
            "$0$ et $0$",
            "$1$ et $1$",
            "$-1$ et $1$",
            "Ils n'existent pas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{|x|}{x}$ vaut $-1$ à gauche et $1$ à droite : continue mais pas dérivable en $0$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02",
      "order": 2,
      "title": "Demi-tangente verticale et dérivabilité sur un intervalle",
      "summary": "Un taux qui tend vers l'infini donne une demi-tangente verticale.",
      "conceptExplanation": "Demi-tangente verticale : si $\\dfrac{f(x)-f(x_0)}{x-x_0}$ a une limite INFINIE à gauche ou à droite en $x_0$, alors $f$ n'est pas dérivable de ce côté, et la courbe admet au point $(x_0;f(x_0))$ une demi-tangente verticale.\n\nExemple : $f(x)=\\sqrt x-x$ en $0$. $\\dfrac{f(x)-f(0)}{x}=\\dfrac{\\sqrt x}{x}-1=\\dfrac{1}{\\sqrt x}-1\\to+\\infty$. $f$ n'est pas dérivable à droite en $0$ : demi-tangente verticale.\n\nDérivabilité sur un intervalle :\n- $f$ est dérivable sur un intervalle ouvert $K$ si elle est dérivable en tout point de $K$ ;\n- $f$ est dérivable sur $[a;b]$ si elle est dérivable sur $]a;b[$, à droite en $a$ et à gauche en $b$.\nExemples : $x\\mapsto\\sqrt x$ est dérivable sur $]0;+\\infty[$ (mais pas en $0$) ; toute fonction polynôme est dérivable sur $\\mathbb{R}$.\n\nAutre exemple : $f(x)=(4x-1)\\sqrt{4x-1}$ en $\\dfrac14$. Le taux vaut $\\dfrac{(4x-1)\\sqrt{4x-1}}{x-\\frac14}=4\\sqrt{4x-1}\\to0$ : $f$ est dérivable en $\\dfrac14$ et $f'\\left(\\dfrac14\\right)=0$ (tangente horizontale).",
      "keyRule": "Taux de variation qui tend vers $\\pm\\infty$ : pas dérivable, demi-tangente VERTICALE.",
      "formulas": [],
      "workedExample": {
        "title": "La racine en 0",
        "statement": "Étudie la dérivabilité de $f(x)=\\sqrt x-x$ en $0$.",
        "methodSteps": [
          "$\\dfrac{f(x)-f(0)}{x-0}=\\dfrac{\\sqrt x-x}{x}=\\dfrac{1}{\\sqrt x}-1$.",
          "Quand $x\\to0^+$, $\\dfrac{1}{\\sqrt x}\\to+\\infty$."
        ],
        "conclusion": "$f$ n'est pas dérivable à droite en $0$ ; la courbe a une demi-tangente verticale en $O$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Un taux infini",
          "stepTheme": "Un taux infini",
          "stepBadge": "Un taux infini",
          "paragraphText": "Si le taux $\\dfrac{f(x)-f(x_0)}{x-x_0}$ tend vers $\\pm\\infty$ d'un côté de $x_0$, la courbe a de ce côté une demi-tangente verticale.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q1",
            "type": "mcq",
            "prompt": "En $x_0$, le taux tend vers $+\\infty$ à droite. Que peut-on dire ?",
            "options": [
              "$f$ est dérivable à droite et $f_d'(x_0)=+\\infty$",
              "La courbe a une tangente horizontale",
              "$f$ n'est pas dérivable à droite ; demi-tangente verticale",
              "$f$ n'est pas continue en $x_0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un nombre dérivé doit être fini ; un taux infini donne une demi-tangente verticale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La fonction $\\sqrt x-x$",
          "stepTheme": "La fonction $\\sqrt x-x$",
          "stepBadge": "La fonction $\\sqrt x-x$",
          "paragraphText": "$\\dfrac{\\sqrt x-x}{x}=\\dfrac{1}{\\sqrt x}-1$. Quand $x\\to0^+$, ce taux tend vers $+\\infty$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q2",
            "type": "mcq",
            "prompt": "Pourquoi $\\dfrac{\\sqrt x}{x}=\\dfrac{1}{\\sqrt x}$ pour $x>0$ ?",
            "options": [
              "Car $x=\\sqrt x\\times\\sqrt x$",
              "Car $\\sqrt x=x^2$",
              "Car $\\sqrt x=\\dfrac x2$",
              "Ce n'est pas vrai"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{\\sqrt x}{\\sqrt x\\sqrt x}=\\dfrac{1}{\\sqrt x}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Dérivable sur un intervalle fermé",
          "stepTheme": "Dérivable sur un intervalle fermé",
          "stepBadge": "Dérivable sur un intervalle fermé",
          "paragraphText": "$f$ est dérivable sur $[a;b]$ si elle est dérivable sur $]a;b[$, à droite en $a$ et à gauche en $b$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q3",
            "type": "mcq",
            "prompt": "Sur quel intervalle $x\\mapsto\\sqrt x$ est-elle dérivable ?",
            "options": [
              "$[0;+\\infty[$",
              "$\\mathbb{R}$",
              "$]-\\infty;0]$",
              "$]0;+\\infty[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En $0$, la courbe de $\\sqrt x$ a une demi-tangente verticale."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les polynômes",
          "stepTheme": "Les polynômes",
          "stepBadge": "Les polynômes",
          "paragraphText": "Toute fonction polynôme est dérivable sur $\\mathbb{R}$ : pas de coin, pas de demi-tangente verticale.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q4",
            "type": "mcq",
            "prompt": "Laquelle de ces fonctions est dérivable sur $\\mathbb{R}$ tout entier ?",
            "options": [
              "$x\\mapsto|x|$",
              "$x\\mapsto x^3-2x^2+3$",
              "$x\\mapsto\\sqrt x$",
              "$x\\mapsto\\dfrac1x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est un polynôme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une tangente horizontale",
          "stepTheme": "Une tangente horizontale",
          "stepBadge": "Une tangente horizontale",
          "paragraphText": "$f(x)=(4x-1)\\sqrt{4x-1}$ en $\\dfrac14$ : le taux vaut $4\\sqrt{4x-1}\\to0$. $f$ est dérivable en $\\dfrac14$, avec $f'\\left(\\dfrac14\\right)=0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q5",
            "type": "mcq",
            "prompt": "Que signifie $f'\\left(\\dfrac14\\right)=0$ pour la courbe ?",
            "options": [
              "Elle a une tangente horizontale en ce point",
              "Elle a une demi-tangente verticale",
              "Elle coupe l'axe des ordonnées",
              "Elle a une asymptote"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un nombre dérivé nul donne une tangente de pente $0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Deux demi-tangentes différentes",
          "stepTheme": "Deux demi-tangentes différentes",
          "stepBadge": "Deux demi-tangentes différentes",
          "paragraphText": "$f(x)=x^2+x$ pour $x<0$ et $\\sqrt x-x$ pour $x\\geq0$ : à gauche le taux $x+1\\to1$ ; à droite il tend vers $+\\infty$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q6",
            "type": "mcq",
            "prompt": "Comment interpréter graphiquement ces résultats en $0$ ?",
            "options": [
              "Une tangente unique de pente $1$",
              "Pas de demi-tangente du tout",
              "Une demi-tangente à gauche de pente $1$ et une demi-tangente verticale à droite",
              "Une asymptote verticale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque côté se lit séparément."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Verticale ou asymptote ?",
          "stepTheme": "Verticale ou asymptote ?",
          "stepBadge": "Verticale ou asymptote ?",
          "paragraphText": "Une demi-tangente verticale passe par un POINT de la courbe (où $f$ est définie). Une asymptote verticale apparaît quand $f(x)$ tend vers l'infini.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q7",
            "type": "mcq",
            "prompt": "Pour $f(x)=\\sqrt{\\dfrac{1-x}{1+x}}$, $\\lim\\limits_{x\\to-1^+}f(x)=+\\infty$. Qu'a la courbe en $x=-1$ ?",
            "options": [
              "Une demi-tangente verticale",
              "Une asymptote verticale d'équation $x=-1$",
              "Une tangente horizontale",
              "Un point anguleux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est $f(x)$ lui-même qui tend vers l'infini : asymptote. (En $x=1$, en revanche, $f$ a une demi-tangente verticale.)"
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q1",
          "type": "mcq",
          "prompt": "En $x_0$, le taux tend vers $+\\infty$ à droite. Que peut-on dire ?",
          "options": [
            "$f$ est dérivable à droite et $f_d'(x_0)=+\\infty$",
            "La courbe a une tangente horizontale",
            "$f$ n'est pas dérivable à droite ; demi-tangente verticale",
            "$f$ n'est pas continue en $x_0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un nombre dérivé doit être fini ; un taux infini donne une demi-tangente verticale."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q2",
          "type": "mcq",
          "prompt": "Pourquoi $\\dfrac{\\sqrt x}{x}=\\dfrac{1}{\\sqrt x}$ pour $x>0$ ?",
          "options": [
            "Car $x=\\sqrt x\\times\\sqrt x$",
            "Car $\\sqrt x=x^2$",
            "Car $\\sqrt x=\\dfrac x2$",
            "Ce n'est pas vrai"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{\\sqrt x}{\\sqrt x\\sqrt x}=\\dfrac{1}{\\sqrt x}$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q3",
          "type": "mcq",
          "prompt": "Sur quel intervalle $x\\mapsto\\sqrt x$ est-elle dérivable ?",
          "options": [
            "$[0;+\\infty[$",
            "$\\mathbb{R}$",
            "$]-\\infty;0]$",
            "$]0;+\\infty[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "En $0$, la courbe de $\\sqrt x$ a une demi-tangente verticale."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q4",
          "type": "mcq",
          "prompt": "Laquelle de ces fonctions est dérivable sur $\\mathbb{R}$ tout entier ?",
          "options": [
            "$x\\mapsto|x|$",
            "$x\\mapsto x^3-2x^2+3$",
            "$x\\mapsto\\sqrt x$",
            "$x\\mapsto\\dfrac1x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est un polynôme."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q5",
          "type": "mcq",
          "prompt": "Que signifie $f'\\left(\\dfrac14\\right)=0$ pour la courbe ?",
          "options": [
            "Elle a une tangente horizontale en ce point",
            "Elle a une demi-tangente verticale",
            "Elle coupe l'axe des ordonnées",
            "Elle a une asymptote"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un nombre dérivé nul donne une tangente de pente $0$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q6",
          "type": "mcq",
          "prompt": "Comment interpréter graphiquement ces résultats en $0$ ?",
          "options": [
            "Une tangente unique de pente $1$",
            "Pas de demi-tangente du tout",
            "Une demi-tangente à gauche de pente $1$ et une demi-tangente verticale à droite",
            "Une asymptote verticale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque côté se lit séparément."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p02_q7",
          "type": "mcq",
          "prompt": "Pour $f(x)=\\sqrt{\\dfrac{1-x}{1+x}}$, $\\lim\\limits_{x\\to-1^+}f(x)=+\\infty$. Qu'a la courbe en $x=-1$ ?",
          "options": [
            "Une demi-tangente verticale",
            "Une asymptote verticale d'équation $x=-1$",
            "Une tangente horizontale",
            "Un point anguleux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est $f(x)$ lui-même qui tend vers l'infini : asymptote. (En $x=1$, en revanche, $f$ a une demi-tangente verticale.)"
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03",
      "order": 3,
      "title": "Dérivée d'une fonction composée",
      "summary": "$(f\\circ g)'(x)=g'(x)\\times f'(g(x))$ et les formules $u^n$, $\\sqrt u$, $\\cos u$, $\\sin u$, $\\tan u$.",
      "conceptExplanation": "Propriété : si $g$ est dérivable en $x_0$ et $f$ dérivable en $g(x_0)$, alors $f\\circ g$ est dérivable en $x_0$ et\n$$(f\\circ g)'(x_0)=g'(x_0)\\times f'(g(x_0)).$$\n\nConséquences ($u$ dérivable sur $K$) :\n- $(u^n)'=n\\,u'\\,u^{n-1}$ ($n$ rationnel non nul) ;\n- $(\\sqrt u)'=\\dfrac{u'}{2\\sqrt u}$ (avec $u>0$) ;\n- $(\\cos u)'=-u'\\sin u$ ;\n- $(\\sin u)'=u'\\cos u$ ;\n- $(\\tan u)'=u'(1+\\tan^2u)=\\dfrac{u'}{\\cos^2u}$.\n\nExemples :\n- $(x^2-3x+1)^5$ : dérivée $5(2x-3)(x^2-3x+1)^4$ ;\n- $\\sqrt{x^2+3x+5}$ : dérivée $\\dfrac{2x+3}{2\\sqrt{x^2+3x+5}}$ ;\n- $\\cos(x^2)$ : dérivée $-2x\\sin(x^2)$ ;\n- $\\sin(\\sin x)$ : dérivée $\\cos x\\cos(\\sin x)$ ;\n- $\\tan\\left(\\dfrac{\\pi}{2}x\\right)$ : dérivée $\\dfrac{\\pi}{2}\\left(1+\\tan^2\\left(\\dfrac{\\pi}{2}x\\right)\\right)$.\n\nCalcul en un point : $f(x)=\\dfrac{3-x}{x-2}$ et $g(x)=x-\\dfrac1x+2$. $g(3)=\\dfrac{14}{3}$, $g'(3)=1+\\dfrac19=\\dfrac{10}{9}$, $f'(x)=\\dfrac{-1}{(x-2)^2}$ donc $f'\\left(\\dfrac{14}{3}\\right)=-\\dfrac{9}{64}$. D'où $(f\\circ g)'(3)=\\dfrac{10}{9}\\times\\left(-\\dfrac{9}{64}\\right)=-\\dfrac{5}{32}$.",
      "keyRule": "On dérive l'extérieur, on garde l'intérieur, et on multiplie par la dérivée de l'intérieur : $(f\\circ g)'=g'\\times f'\\circ g$.",
      "formulas": [
        {
          "name": "Fonction composée",
          "formula": "(f\\circ g)'(x)=g'(x)\\times f'(g(x))"
        },
        {
          "name": "Puissance",
          "formula": "(u^n)'=n\\,u'\\,u^{n-1}"
        },
        {
          "name": "Racine",
          "formula": "(\\sqrt u)'=\\dfrac{u'}{2\\sqrt u}"
        },
        {
          "name": "Cosinus et sinus",
          "formula": "(\\cos u)'=-u'\\sin u\\qquad(\\sin u)'=u'\\cos u"
        }
      ],
      "workedExample": {
        "title": "Une puissance d'un polynôme",
        "statement": "Dérive $f(x)=(x^2-3x+1)^5$.",
        "methodSteps": [
          "$u(x)=x^2-3x+1$, $u'(x)=2x-3$, $n=5$.",
          "$(u^5)'=5u'u^4$."
        ],
        "conclusion": "$f'(x)=5(2x-3)(x^2-3x+1)^4$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La formule",
          "stepTheme": "La formule",
          "stepBadge": "La formule",
          "paragraphText": "$(f\\circ g)'(x)=g'(x)\\times f'(g(x))$ : on dérive la fonction extérieure en gardant l'intérieur, puis on multiplie par la dérivée de l'intérieur.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q1",
            "type": "mcq",
            "prompt": "Que vaut $(f\\circ g)'(x)$ ?",
            "options": [
              "$f'(x)\\times g'(x)$",
              "$g'(x)\\times f'(g(x))$",
              "$f'(g'(x))$",
              "$f(x)\\times g'(x)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On évalue $f'$ en $g(x)$, pas en $x$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une puissance",
          "stepTheme": "Une puissance",
          "stepBadge": "Une puissance",
          "paragraphText": "$(u^n)'=n\\,u'\\,u^{n-1}$. Pour $(x^2-3x+1)^5$ : $5(2x-3)(x^2-3x+1)^4$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q2",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $(3x+1)^4$ ?",
            "options": [
              "$4(3x+1)^3$",
              "$12(3x+1)^4$",
              "$12(3x+1)^3$",
              "$3(3x+1)^3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$4\\times3\\times(3x+1)^3=12(3x+1)^3$ ; ne pas oublier $u'=3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une racine",
          "stepTheme": "Une racine",
          "stepBadge": "Une racine",
          "paragraphText": "$(\\sqrt u)'=\\dfrac{u'}{2\\sqrt u}$. Pour $\\sqrt{x^2+3x+5}$ : $\\dfrac{2x+3}{2\\sqrt{x^2+3x+5}}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q3",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $\\sqrt{4x-1}$ sur $\\left]\\dfrac14;+\\infty\\right[$ ?",
            "options": [
              "$\\dfrac{1}{2\\sqrt{4x-1}}$",
              "$\\dfrac{4}{\\sqrt{4x-1}}$",
              "$2\\sqrt{4x-1}$",
              "$\\dfrac{2}{\\sqrt{4x-1}}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac{4}{2\\sqrt{4x-1}}=\\dfrac{2}{\\sqrt{4x-1}}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Cosinus et sinus",
          "stepTheme": "Cosinus et sinus",
          "stepBadge": "Cosinus et sinus",
          "paragraphText": "$(\\cos u)'=-u'\\sin u$ et $(\\sin u)'=u'\\cos u$. Pour $\\cos(x^2)$ : $-2x\\sin(x^2)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q4",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $\\sin(\\sin x)$ ?",
            "options": [
              "$\\cos x\\cos(\\sin x)$",
              "$\\cos(\\cos x)$",
              "$-\\sin x\\cos(\\sin x)$",
              "$\\cos(\\sin x)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$u=\\sin x$, $u'=\\cos x$, et $(\\sin u)'=u'\\cos u$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La tangente",
          "stepTheme": "La tangente",
          "stepBadge": "La tangente",
          "paragraphText": "$(\\tan u)'=u'(1+\\tan^2u)$. Pour $\\tan\\left(\\dfrac{\\pi}{2}x\\right)$ : $\\dfrac{\\pi}{2}\\left(1+\\tan^2\\left(\\dfrac{\\pi}{2}x\\right)\\right)>0$, donc la fonction est croissante sur chaque intervalle de définition.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q5",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $\\tan(2x)$ ?",
            "options": [
              "$1+\\tan^2(2x)$",
              "$\\dfrac{1}{\\cos^2(2x)}$",
              "$2\\tan(2x)$",
              "$2(1+\\tan^2(2x))$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$u'=2$ multiplie $1+\\tan^2u$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "En un point",
          "stepTheme": "En un point",
          "stepBadge": "En un point",
          "paragraphText": "$g(3)=\\dfrac{14}{3}$, $g'(3)=\\dfrac{10}{9}$, $f'\\left(\\dfrac{14}{3}\\right)=-\\dfrac{9}{64}$, donc $(f\\circ g)'(3)=\\dfrac{10}{9}\\times\\left(-\\dfrac{9}{64}\\right)=-\\dfrac{5}{32}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q6",
            "type": "mcq",
            "prompt": "En quel point calcule-t-on $f'$ pour obtenir $(f\\circ g)'(3)$ ?",
            "options": [
              "En $3$",
              "En $g(3)=\\dfrac{14}{3}$",
              "En $g'(3)$",
              "En $0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(f\\circ g)'(3)=g'(3)\\times f'(g(3))$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "La dérivée de l'intérieur",
          "stepTheme": "La dérivée de l'intérieur",
          "stepBadge": "La dérivée de l'intérieur",
          "paragraphText": "L'erreur la plus fréquente est d'oublier $u'$ : $(\\cos(x^2))'$ n'est pas $-\\sin(x^2)$ mais $-2x\\sin(x^2)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q7",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $\\cos(3x)$ ?",
            "options": [
              "$-\\sin(3x)$",
              "$3\\sin(3x)$",
              "$-3\\sin(3x)$",
              "$-3\\cos(3x)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$u=3x$, $u'=3$ : $(\\cos u)'=-3\\sin(3x)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q1",
          "type": "mcq",
          "prompt": "Que vaut $(f\\circ g)'(x)$ ?",
          "options": [
            "$f'(x)\\times g'(x)$",
            "$g'(x)\\times f'(g(x))$",
            "$f'(g'(x))$",
            "$f(x)\\times g'(x)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On évalue $f'$ en $g(x)$, pas en $x$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q2",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $(3x+1)^4$ ?",
          "options": [
            "$4(3x+1)^3$",
            "$12(3x+1)^4$",
            "$12(3x+1)^3$",
            "$3(3x+1)^3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$4\\times3\\times(3x+1)^3=12(3x+1)^3$ ; ne pas oublier $u'=3$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q3",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $\\sqrt{4x-1}$ sur $\\left]\\dfrac14;+\\infty\\right[$ ?",
          "options": [
            "$\\dfrac{1}{2\\sqrt{4x-1}}$",
            "$\\dfrac{4}{\\sqrt{4x-1}}$",
            "$2\\sqrt{4x-1}$",
            "$\\dfrac{2}{\\sqrt{4x-1}}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac{4}{2\\sqrt{4x-1}}=\\dfrac{2}{\\sqrt{4x-1}}$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q4",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $\\sin(\\sin x)$ ?",
          "options": [
            "$\\cos x\\cos(\\sin x)$",
            "$\\cos(\\cos x)$",
            "$-\\sin x\\cos(\\sin x)$",
            "$\\cos(\\sin x)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$u=\\sin x$, $u'=\\cos x$, et $(\\sin u)'=u'\\cos u$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q5",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $\\tan(2x)$ ?",
          "options": [
            "$1+\\tan^2(2x)$",
            "$\\dfrac{1}{\\cos^2(2x)}$",
            "$2\\tan(2x)$",
            "$2(1+\\tan^2(2x))$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$u'=2$ multiplie $1+\\tan^2u$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q6",
          "type": "mcq",
          "prompt": "En quel point calcule-t-on $f'$ pour obtenir $(f\\circ g)'(3)$ ?",
          "options": [
            "En $3$",
            "En $g(3)=\\dfrac{14}{3}$",
            "En $g'(3)$",
            "En $0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(f\\circ g)'(3)=g'(3)\\times f'(g(3))$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p03_q7",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $\\cos(3x)$ ?",
          "options": [
            "$-\\sin(3x)$",
            "$3\\sin(3x)$",
            "$-3\\sin(3x)$",
            "$-3\\cos(3x)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$u=3x$, $u'=3$ : $(\\cos u)'=-3\\sin(3x)$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04",
      "order": 4,
      "title": "Dérivée d'une bijection réciproque",
      "summary": "$(f^{-1})'(y_0)=\\dfrac{1}{f'(x_0)}$ avec $f(x_0)=y_0$ et $f'(x_0)\\neq0$.",
      "conceptExplanation": "Propriété : soit $f$ dérivable et strictement monotone sur un intervalle $K$, $x_0\\in K$ et $y_0=f(x_0)$. Si $f'(x_0)\\neq0$, alors $f^{-1}$ est dérivable en $y_0$ et\n$$(f^{-1})'(y_0)=\\dfrac{1}{f'(f^{-1}(y_0))}=\\dfrac{1}{f'(x_0)}.$$\n\nMéthode :\n1. trouver $x_0\\in K$ tel que $f(x_0)=y_0$ ;\n2. calculer $f'(x_0)$ et vérifier qu'il n'est pas nul ;\n3. conclure que $f^{-1}$ est dérivable en $y_0$ ;\n4. calculer $(f^{-1})'(y_0)=\\dfrac{1}{f'(x_0)}$.\n\nExemple : $f(x)=x^2-x$ réalise une bijection de $\\left]-\\infty;\\dfrac12\\right]$ sur $\\left[-\\dfrac14;+\\infty\\right[$ ; $g$ est cette restriction. $g(x)=2$ donne $x=-1$ (l'autre solution, $2$, n'est pas dans l'intervalle). $g'(-1)=2\\times(-1)-1=-3\\neq0$, donc $(g^{-1})'(2)=-\\dfrac13$.\n\nAutre exemple : la réciproque $\\varphi$ de $\\tan$ sur $\\left]-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right[$ vérifie $\\varphi'(x)=\\dfrac{1}{1+x^2}$, car $\\tan'=1+\\tan^2$.\n\nAttention : si $f'(x_0)=0$, la courbe de $f^{-1}$ a une tangente verticale en $y_0$.",
      "keyRule": "$(f^{-1})'(y_0)=\\dfrac{1}{f'(x_0)}$ où $f(x_0)=y_0$ ; il faut d'abord trouver $x_0$.",
      "formulas": [
        {
          "name": "Dérivée de la réciproque",
          "formula": "(f^{-1})'(y_0)=\\dfrac{1}{f'(x_0)}\\quad\\text{avec}\\ f(x_0)=y_0"
        }
      ],
      "workedExample": {
        "title": "La réciproque de $x^2-x$",
        "statement": "$g$ est la restriction de $x^2-x$ à $\\left]-\\infty;\\dfrac12\\right]$. Calcule $(g^{-1})'(2)$.",
        "methodSteps": [
          "$x^2-x=2\\iff x^2-x-2=0\\iff x=-1$ ou $x=2$ ; seul $-1$ est dans l'intervalle.",
          "$g'(x)=2x-1$, donc $g'(-1)=-3\\neq0$.",
          "$(g^{-1})'(2)=\\dfrac{1}{g'(-1)}$."
        ],
        "conclusion": "$(g^{-1})'(2)=-\\dfrac13$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La formule",
          "stepTheme": "La formule",
          "stepBadge": "La formule",
          "paragraphText": "Si $f$ est dérivable, strictement monotone, et $f'(x_0)\\neq0$, alors $(f^{-1})'(y_0)=\\dfrac{1}{f'(x_0)}$, avec $y_0=f(x_0)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q1",
            "type": "mcq",
            "prompt": "$f(1)=4$ et $f'(1)=2$. Que vaut $(f^{-1})'(4)$ ?",
            "options": [
              "$2$",
              "$\\dfrac14$",
              "$\\dfrac12$",
              "$4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(f^{-1})'(4)=\\dfrac{1}{f'(1)}=\\dfrac12$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Trouver $x_0$",
          "stepTheme": "Trouver $x_0$",
          "stepBadge": "Trouver $x_0$",
          "paragraphText": "On cherche d'abord l'antécédent $x_0$ de $y_0$ dans l'intervalle de la bijection. Pour $g(x)=x^2-x$ sur $\\left]-\\infty;\\dfrac12\\right]$ : $g(x)=2\\iff x=-1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q2",
            "type": "mcq",
            "prompt": "$x^2-x=2$ a pour solutions $-1$ et $2$. Pourquoi garde-t-on seulement $-1$ ?",
            "options": [
              "Parce que $-1<0$",
              "Parce que $2$ n'est pas dans $\\left]-\\infty;\\dfrac12\\right]$",
              "Parce que $g'(2)=0$",
              "Au hasard"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La bijection est définie sur $\\left]-\\infty;\\dfrac12\\right]$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le calcul",
          "stepTheme": "Le calcul",
          "stepBadge": "Le calcul",
          "paragraphText": "$g'(x)=2x-1$, $g'(-1)=-3\\neq0$, donc $(g^{-1})'(2)=\\dfrac{1}{-3}=-\\dfrac13$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q3",
            "type": "mcq",
            "prompt": "$f(x)=\\sqrt{\\dfrac{1-x}{1+x}}$ : $f(0)=1$ et $f'(0)=-1$. Que vaut $(f^{-1})'(1)$ ?",
            "options": [
              "$1$",
              "$0$",
              "$-1$",
              "$\\dfrac12$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{1}{f'(0)}=\\dfrac{1}{-1}=-1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ne pas évaluer en $y_0$",
          "stepTheme": "Ne pas évaluer en $y_0$",
          "stepBadge": "Ne pas évaluer en $y_0$",
          "paragraphText": "On calcule $f'$ en $x_0$ (l'antécédent), pas en $y_0$ : $(g^{-1})'(2)=\\dfrac{1}{g'(-1)}$, et non $\\dfrac{1}{g'(2)}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q4",
            "type": "mcq",
            "prompt": "Un élève écrit $(g^{-1})'(2)=\\dfrac{1}{g'(2)}=\\dfrac13$. Quelle est son erreur ?",
            "options": [
              "Il a évalué $g'$ en $2$ au lieu de l'antécédent $-1$",
              "Aucune erreur",
              "Il fallait multiplier au lieu de diviser",
              "Il fallait prendre $g(2)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La formule utilise $f'(x_0)$ avec $f(x_0)=y_0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La condition $f'(x_0)\\neq0$",
          "stepTheme": "La condition $f'(x_0)\\neq0$",
          "stepBadge": "La condition $f'(x_0)\\neq0$",
          "paragraphText": "Si $f'(x_0)=0$, la formule n'a pas de sens : $f^{-1}$ n'est pas dérivable en $y_0$, et sa courbe y a une tangente verticale.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q5",
            "type": "mcq",
            "prompt": "Si $f'(x_0)=0$, que se passe-t-il pour $f^{-1}$ en $y_0=f(x_0)$ ?",
            "options": [
              "$(f^{-1})'(y_0)=0$",
              "$(f^{-1})'(y_0)=1$",
              "$f^{-1}$ n'est pas définie",
              "$f^{-1}$ n'est pas dérivable en $y_0$ (tangente verticale)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La tangente horizontale de $f$ devient verticale par symétrie par rapport à $y=x$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La réciproque de tangente",
          "stepTheme": "La réciproque de tangente",
          "stepBadge": "La réciproque de tangente",
          "paragraphText": "Pour $\\varphi$ réciproque de $\\tan$ : $\\varphi'(x)=\\dfrac{1}{1+\\tan^2(\\varphi(x))}=\\dfrac{1}{1+x^2}$, car $\\tan(\\varphi(x))=x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q6",
            "type": "mcq",
            "prompt": "Avec $\\varphi'(x)=\\dfrac{1}{1+x^2}$, que vaut $\\varphi'(1)$ ?",
            "options": [
              "$1$",
              "$\\dfrac12$",
              "$2$",
              "$\\dfrac{\\pi}{4}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{1}{1+1}=\\dfrac12$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Lire sur deux courbes",
          "stepTheme": "Lire sur deux courbes",
          "stepBadge": "Lire sur deux courbes",
          "paragraphText": "Les courbes de $f$ et $f^{-1}$ sont symétriques par rapport à $y=x$ : une tangente de pente $m$ en $(x_0;y_0)$ devient une tangente de pente $\\dfrac1m$ en $(y_0;x_0)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q7",
            "type": "mcq",
            "prompt": "La courbe de $f$ a en $(2;5)$ une tangente de pente $4$. Quelle est la pente de la tangente à la courbe de $f^{-1}$ en $(5;2)$ ?",
            "options": [
              "$4$",
              "$-4$",
              "$\\dfrac14$",
              "$5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(f^{-1})'(5)=\\dfrac{1}{f'(2)}=\\dfrac14$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q1",
          "type": "mcq",
          "prompt": "$f(1)=4$ et $f'(1)=2$. Que vaut $(f^{-1})'(4)$ ?",
          "options": [
            "$2$",
            "$\\dfrac14$",
            "$\\dfrac12$",
            "$4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(f^{-1})'(4)=\\dfrac{1}{f'(1)}=\\dfrac12$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q2",
          "type": "mcq",
          "prompt": "$x^2-x=2$ a pour solutions $-1$ et $2$. Pourquoi garde-t-on seulement $-1$ ?",
          "options": [
            "Parce que $-1<0$",
            "Parce que $2$ n'est pas dans $\\left]-\\infty;\\dfrac12\\right]$",
            "Parce que $g'(2)=0$",
            "Au hasard"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La bijection est définie sur $\\left]-\\infty;\\dfrac12\\right]$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q3",
          "type": "mcq",
          "prompt": "$f(x)=\\sqrt{\\dfrac{1-x}{1+x}}$ : $f(0)=1$ et $f'(0)=-1$. Que vaut $(f^{-1})'(1)$ ?",
          "options": [
            "$1$",
            "$0$",
            "$-1$",
            "$\\dfrac12$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{1}{f'(0)}=\\dfrac{1}{-1}=-1$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q4",
          "type": "mcq",
          "prompt": "Un élève écrit $(g^{-1})'(2)=\\dfrac{1}{g'(2)}=\\dfrac13$. Quelle est son erreur ?",
          "options": [
            "Il a évalué $g'$ en $2$ au lieu de l'antécédent $-1$",
            "Aucune erreur",
            "Il fallait multiplier au lieu de diviser",
            "Il fallait prendre $g(2)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La formule utilise $f'(x_0)$ avec $f(x_0)=y_0$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q5",
          "type": "mcq",
          "prompt": "Si $f'(x_0)=0$, que se passe-t-il pour $f^{-1}$ en $y_0=f(x_0)$ ?",
          "options": [
            "$(f^{-1})'(y_0)=0$",
            "$(f^{-1})'(y_0)=1$",
            "$f^{-1}$ n'est pas définie",
            "$f^{-1}$ n'est pas dérivable en $y_0$ (tangente verticale)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La tangente horizontale de $f$ devient verticale par symétrie par rapport à $y=x$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q6",
          "type": "mcq",
          "prompt": "Avec $\\varphi'(x)=\\dfrac{1}{1+x^2}$, que vaut $\\varphi'(1)$ ?",
          "options": [
            "$1$",
            "$\\dfrac12$",
            "$2$",
            "$\\dfrac{\\pi}{4}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{1}{1+1}=\\dfrac12$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p04_q7",
          "type": "mcq",
          "prompt": "La courbe de $f$ a en $(2;5)$ une tangente de pente $4$. Quelle est la pente de la tangente à la courbe de $f^{-1}$ en $(5;2)$ ?",
          "options": [
            "$4$",
            "$-4$",
            "$\\dfrac14$",
            "$5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(f^{-1})'(5)=\\dfrac{1}{f'(2)}=\\dfrac14$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05",
      "order": 5,
      "title": "Dérivées successives et inégalité des accroissements finis",
      "summary": "$f''$, $f^{(n)}$, et encadrer $f(b)-f(a)$ grâce à un encadrement de $f'$.",
      "conceptExplanation": "Dérivées successives : si $f'$ est dérivable, sa dérivée est la dérivée seconde $f''$ (ou $f^{(2)}$, $\\dfrac{d^2f}{dx^2}$). De proche en proche, on définit la dérivée d'ordre $n$, $f^{(n)}$.\nExemple : $f(x)=x^3-2x^2+3$ : $f'(x)=3x^2-4x$, $f''(x)=6x-4$, $f^{(3)}(x)=6$, $f^{(4)}(x)=0$.\n\nInégalité des accroissements finis :\n- Propriété 1 : si $f$ est dérivable sur $[a;b]$ ($a<b$) et $m\\leq f'(x)\\leq M$ pour tout $x$ de $[a;b]$, alors\n$$m(b-a)\\leq f(b)-f(a)\\leq M(b-a).$$\n- Propriété 2 : si $|f'(x)|\\leq M$ sur un intervalle $I$, alors pour tous $a$, $b$ de $I$ : $|f(b)-f(a)|\\leq M|b-a|$.\n\nExemple 1 : $f(x)=\\sqrt x$ sur $[17;19]$. $f'(x)=\\dfrac{1}{2\\sqrt x}$, et $\\sqrt{17}\\leq\\sqrt x\\leq\\sqrt{19}$ donne $\\dfrac{1}{2\\sqrt{19}}\\leq f'(x)\\leq\\dfrac{1}{2\\sqrt{17}}$. Avec $b-a=2$ : $\\dfrac{1}{\\sqrt{19}}\\leq\\sqrt{19}-\\sqrt{17}\\leq\\dfrac{1}{\\sqrt{17}}$.\n\nExemple 2 : $|\\cos'(t)|=|\\sin t|\\leq1$, donc $|\\cos x-\\cos y|\\leq|x-y|$ pour tous réels $x$, $y$.",
      "keyRule": "$m\\leq f'\\leq M$ sur $[a;b]$ $\\Rightarrow$ $m(b-a)\\leq f(b)-f(a)\\leq M(b-a)$.",
      "formulas": [
        {
          "name": "Inégalité des accroissements finis",
          "formula": "m(b-a)\\leq f(b)-f(a)\\leq M(b-a)"
        }
      ],
      "workedExample": {
        "title": "Encadrer $\\sqrt{19}-\\sqrt{17}$",
        "statement": "Démontre que $\\dfrac{1}{\\sqrt{19}}\\leq\\sqrt{19}-\\sqrt{17}\\leq\\dfrac{1}{\\sqrt{17}}$.",
        "methodSteps": [
          "$f(x)=\\sqrt x$ est dérivable sur $[17;19]$, $f'(x)=\\dfrac{1}{2\\sqrt x}$.",
          "Sur $[17;19]$ : $\\dfrac{1}{2\\sqrt{19}}\\leq f'(x)\\leq\\dfrac{1}{2\\sqrt{17}}$.",
          "On multiplie par $19-17=2$."
        ],
        "conclusion": "$\\dfrac{1}{\\sqrt{19}}\\leq\\sqrt{19}-\\sqrt{17}\\leq\\dfrac{1}{\\sqrt{17}}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dérivée seconde",
          "stepTheme": "La dérivée seconde",
          "stepBadge": "La dérivée seconde",
          "paragraphText": "La dérivée de $f'$ s'appelle la dérivée seconde, notée $f''$. Pour $f(x)=x^3-2x^2+3$ : $f'(x)=3x^2-4x$ et $f''(x)=6x-4$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q1",
            "type": "mcq",
            "prompt": "Pour $f(x)=x^3-2x^2+3$, que vaut $f^{(3)}(x)$ ?",
            "options": [
              "$6x$",
              "$6$",
              "$0$",
              "$6x-4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On dérive $6x-4$ : on obtient $6$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Jusqu'à zéro",
          "stepTheme": "Jusqu'à zéro",
          "stepBadge": "Jusqu'à zéro",
          "paragraphText": "Pour un polynôme de degré $3$, la dérivée d'ordre $4$ est nulle : $f^{(4)}(x)=0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q2",
            "type": "mcq",
            "prompt": "Pour $f(x)=\\cos x$, que vaut $f''(x)$ ?",
            "options": [
              "$\\sin x$",
              "$-\\sin x$",
              "$\\cos x$",
              "$-\\cos x$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$f'=-\\sin$, puis $f''=-\\cos$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'inégalité",
          "stepTheme": "L'inégalité",
          "stepBadge": "L'inégalité",
          "paragraphText": "Si $m\\leq f'(x)\\leq M$ sur $[a;b]$, alors $m(b-a)\\leq f(b)-f(a)\\leq M(b-a)$ : un encadrement de la vitesse donne un encadrement de la variation.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q3",
            "type": "mcq",
            "prompt": "$1\\leq f'(x)\\leq3$ sur $[0;2]$. Quel encadrement a-t-on pour $f(2)-f(0)$ ?",
            "options": [
              "$2\\leq f(2)-f(0)\\leq6$",
              "$1\\leq f(2)-f(0)\\leq3$",
              "$0\\leq f(2)-f(0)\\leq2$",
              "$3\\leq f(2)-f(0)\\leq6$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On multiplie les bornes par $b-a=2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Encadrer la dérivée",
          "stepTheme": "Encadrer la dérivée",
          "stepBadge": "Encadrer la dérivée",
          "paragraphText": "Pour $\\sqrt x$ sur $[17;19]$ : $\\sqrt{17}\\leq\\sqrt x\\leq\\sqrt{19}$, donc $\\dfrac{1}{2\\sqrt{19}}\\leq\\dfrac{1}{2\\sqrt x}\\leq\\dfrac{1}{2\\sqrt{17}}$ (l'inverse renverse l'ordre).",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q4",
            "type": "mcq",
            "prompt": "Pourquoi le plus grand majorant de $\\dfrac{1}{2\\sqrt x}$ sur $[17;19]$ est-il $\\dfrac{1}{2\\sqrt{17}}$ ?",
            "options": [
              "Parce que $17$ est premier",
              "Parce que $17<19$ et que $x\\mapsto\\dfrac{1}{2\\sqrt x}$ est décroissante",
              "Parce que $\\sqrt{17}>\\sqrt{19}$",
              "Ce n'est pas le cas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Plus $x$ est petit, plus $\\dfrac{1}{2\\sqrt x}$ est grand."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le résultat",
          "stepTheme": "Le résultat",
          "stepBadge": "Le résultat",
          "paragraphText": "Avec $b-a=19-17=2$ : $\\dfrac{2}{2\\sqrt{19}}\\leq\\sqrt{19}-\\sqrt{17}\\leq\\dfrac{2}{2\\sqrt{17}}$, soit $\\dfrac{1}{\\sqrt{19}}\\leq\\sqrt{19}-\\sqrt{17}\\leq\\dfrac{1}{\\sqrt{17}}$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q5",
            "type": "mcq",
            "prompt": "Sur quel intervalle applique-t-on l'inégalité pour encadrer $\\sqrt{19}-\\sqrt{17}$ ?",
            "options": [
              "$[\\sqrt{17};\\sqrt{19}]$",
              "$[0;19]$",
              "$[17;19]$",
              "$[1;2]$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On compare $f(19)$ et $f(17)$ avec $f=\\sqrt{\\ }$ : l'intervalle est $[17;19]$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Avec une valeur absolue",
          "stepTheme": "Avec une valeur absolue",
          "stepBadge": "Avec une valeur absolue",
          "paragraphText": "Si $|f'(x)|\\leq M$ sur $I$, alors $|f(b)-f(a)|\\leq M|b-a|$. Comme $|\\cos'(t)|=|\\sin t|\\leq1$ : $|\\cos x-\\cos y|\\leq|x-y|$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q6",
            "type": "mcq",
            "prompt": "$|k'(x)|<0,2$ sur $[a;b]$. Que peut-on dire de $|k(b)-k(a)|$ ?",
            "options": [
              "$|k(b)-k(a)|<0,2(b-a)$",
              "$|k(b)-k(a)|=0,2$",
              "$|k(b)-k(a)|>0,2(b-a)$",
              "$k(b)=k(a)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'inégalité des accroissements finis avec $M=0,2$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Multiplier par $b-a$",
          "stepTheme": "Multiplier par $b-a$",
          "stepBadge": "Multiplier par $b-a$",
          "paragraphText": "On n'oublie pas de multiplier les bornes de $f'$ par la longueur $b-a$ de l'intervalle : encadrer $f'$ ne suffit pas.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q7",
            "type": "mcq",
            "prompt": "$0\\leq f'(x)\\leq\\dfrac12$ sur $[1;5]$ et $f(1)=3$. Quel encadrement de $f(5)$ obtient-on ?",
            "options": [
              "$3\\leq f(5)\\leq3,5$",
              "$0\\leq f(5)\\leq2$",
              "$3\\leq f(5)\\leq5$",
              "$3\\leq f(5)\\leq6$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$0\\times4\\leq f(5)-3\\leq\\dfrac12\\times4$, donc $3\\leq f(5)\\leq5$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q1",
          "type": "mcq",
          "prompt": "Pour $f(x)=x^3-2x^2+3$, que vaut $f^{(3)}(x)$ ?",
          "options": [
            "$6x$",
            "$6$",
            "$0$",
            "$6x-4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On dérive $6x-4$ : on obtient $6$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q2",
          "type": "mcq",
          "prompt": "Pour $f(x)=\\cos x$, que vaut $f''(x)$ ?",
          "options": [
            "$\\sin x$",
            "$-\\sin x$",
            "$\\cos x$",
            "$-\\cos x$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$f'=-\\sin$, puis $f''=-\\cos$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q3",
          "type": "mcq",
          "prompt": "$1\\leq f'(x)\\leq3$ sur $[0;2]$. Quel encadrement a-t-on pour $f(2)-f(0)$ ?",
          "options": [
            "$2\\leq f(2)-f(0)\\leq6$",
            "$1\\leq f(2)-f(0)\\leq3$",
            "$0\\leq f(2)-f(0)\\leq2$",
            "$3\\leq f(2)-f(0)\\leq6$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On multiplie les bornes par $b-a=2$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q4",
          "type": "mcq",
          "prompt": "Pourquoi le plus grand majorant de $\\dfrac{1}{2\\sqrt x}$ sur $[17;19]$ est-il $\\dfrac{1}{2\\sqrt{17}}$ ?",
          "options": [
            "Parce que $17$ est premier",
            "Parce que $17<19$ et que $x\\mapsto\\dfrac{1}{2\\sqrt x}$ est décroissante",
            "Parce que $\\sqrt{17}>\\sqrt{19}$",
            "Ce n'est pas le cas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Plus $x$ est petit, plus $\\dfrac{1}{2\\sqrt x}$ est grand."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q5",
          "type": "mcq",
          "prompt": "Sur quel intervalle applique-t-on l'inégalité pour encadrer $\\sqrt{19}-\\sqrt{17}$ ?",
          "options": [
            "$[\\sqrt{17};\\sqrt{19}]$",
            "$[0;19]$",
            "$[17;19]$",
            "$[1;2]$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On compare $f(19)$ et $f(17)$ avec $f=\\sqrt{\\ }$ : l'intervalle est $[17;19]$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q6",
          "type": "mcq",
          "prompt": "$|k'(x)|<0,2$ sur $[a;b]$. Que peut-on dire de $|k(b)-k(a)|$ ?",
          "options": [
            "$|k(b)-k(a)|<0,2(b-a)$",
            "$|k(b)-k(a)|=0,2$",
            "$|k(b)-k(a)|>0,2(b-a)$",
            "$k(b)=k(a)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'inégalité des accroissements finis avec $M=0,2$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p05_q7",
          "type": "mcq",
          "prompt": "$0\\leq f'(x)\\leq\\dfrac12$ sur $[1;5]$ et $f(1)=3$. Quel encadrement de $f(5)$ obtient-on ?",
          "options": [
            "$3\\leq f(5)\\leq3,5$",
            "$0\\leq f(5)\\leq2$",
            "$3\\leq f(5)\\leq5$",
            "$3\\leq f(5)\\leq6$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$0\\times4\\leq f(5)-3\\leq\\dfrac12\\times4$, donc $3\\leq f(5)\\leq5$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06",
      "order": 6,
      "title": "Étude complète d'une fonction",
      "summary": "Continuité, dérivabilité, limites, branches infinies, variations : un plan d'étude.",
      "conceptExplanation": "Plan d'étude d'une fonction :\n1. ensemble de définition ;\n2. continuité et dérivabilité aux points sensibles (raccord, racine en $0$…) ;\n3. limites aux bornes et branches infinies (asymptotes, branches paraboliques) ;\n4. dérivée et son signe ;\n5. tableau de variation ;\n6. tracé, avec les tangentes et demi-tangentes trouvées.\n\nExemple : $f(x)=x^2+x$ si $x<0$, et $f(x)=\\sqrt x-x$ si $x\\geq0$.\n- Continuité en $0$ : les deux limites valent $0=f(0)$.\n- Dérivabilité en $0$ : $f_g'(0)=\\lim(x+1)=1$ ; à droite, le taux $\\dfrac{1}{\\sqrt x}-1\\to+\\infty$. $f$ n'est pas dérivable en $0$ : demi-tangente de pente $1$ à gauche, demi-tangente verticale à droite.\n- Limites : $\\lim\\limits_{-\\infty}f=+\\infty$ avec $\\dfrac{f(x)}{x}=x+1\\to-\\infty$ (branche parabolique de direction $(OJ)$) ; $\\lim\\limits_{+\\infty}f=\\lim\\sqrt x(1-\\sqrt x)=-\\infty$.\n- Dérivée : $f'(x)=2x+1$ sur $]-\\infty;0[$ ; $f'(x)=\\dfrac{1-2\\sqrt x}{2\\sqrt x}$ sur $]0;+\\infty[$.\n- Variations : $f$ décroît sur $\\left]-\\infty;-\\dfrac12\\right]$, croît sur $\\left[-\\dfrac12;\\dfrac14\\right]$, décroît sur $\\left[\\dfrac14;+\\infty\\right[$.\n- Valeurs : $f\\left(-\\dfrac12\\right)=\\dfrac14-\\dfrac12=-\\dfrac14$ (minimum) et $f\\left(\\dfrac14\\right)=\\dfrac12-\\dfrac14=\\dfrac14$ (maximum relatif).",
      "keyRule": "Ordre d'étude : définition → continuité/dérivabilité → limites et branches → $f'$ et son signe → tableau → tracé.",
      "formulas": [],
      "workedExample": {
        "title": "Le maximum sur $]0;+\\infty[$",
        "statement": "Pour $f(x)=\\sqrt x-x$ sur $]0;+\\infty[$, trouve le maximum.",
        "methodSteps": [
          "$f'(x)=\\dfrac{1}{2\\sqrt x}-1=\\dfrac{1-2\\sqrt x}{2\\sqrt x}$, du signe de $1-2\\sqrt x$.",
          "$1-2\\sqrt x=0\\iff\\sqrt x=\\dfrac12\\iff x=\\dfrac14$ ; positif avant, négatif après.",
          "$f\\left(\\dfrac14\\right)=\\dfrac12-\\dfrac14=\\dfrac14$."
        ],
        "conclusion": "Le maximum de $f$ sur $]0;+\\infty[$ est $\\dfrac14$, atteint en $\\dfrac14$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La continuité au raccord",
          "stepTheme": "La continuité au raccord",
          "stepBadge": "La continuité au raccord",
          "paragraphText": "On compare $f(0)$ aux limites à gauche et à droite : $\\lim\\limits_{0^-}(x^2+x)=0$ et $\\lim\\limits_{0^+}(\\sqrt x-x)=0=f(0)$. $f$ est continue en $0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q1",
            "type": "mcq",
            "prompt": "Que faut-il vérifier pour que $f$ soit continue en $0$ ?",
            "options": [
              "$f'(0)=0$",
              "Que la limite à gauche, la limite à droite et $f(0)$ soient égales",
              "Que $f(0)>0$",
              "Que $f$ soit croissante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la continuité en un point de raccord."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La branche en $-\\infty$",
          "stepTheme": "La branche en $-\\infty$",
          "stepBadge": "La branche en $-\\infty$",
          "paragraphText": "$\\lim\\limits_{-\\infty}(x^2+x)=+\\infty$ et $\\dfrac{f(x)}{x}=x+1\\to-\\infty$ : la courbe a en $-\\infty$ une branche parabolique de direction $(OJ)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}(\\sqrt x-x)$ ?",
            "options": [
              "$0$",
              "$+\\infty$",
              "$-\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\sqrt x(1-\\sqrt x)$ : $\\sqrt x\\to+\\infty$ et $1-\\sqrt x\\to-\\infty$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Variations à gauche de $0$",
          "stepTheme": "Variations à gauche de $0$",
          "stepBadge": "Variations à gauche de $0$",
          "paragraphText": "Sur $]-\\infty;0[$, $f'(x)=2x+1$ s'annule en $-\\dfrac12$ : $f$ décroît puis croît, avec un minimum $f\\left(-\\dfrac12\\right)=-\\dfrac14$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q3",
            "type": "mcq",
            "prompt": "Que vaut $f\\left(-\\dfrac12\\right)=\\left(-\\dfrac12\\right)^2-\\dfrac12$ ?",
            "options": [
              "$-\\dfrac14$",
              "$0$",
              "$\\dfrac14$",
              "$-\\dfrac34$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac14-\\dfrac12=-\\dfrac14$ : le minimum n'est pas $0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le signe d'un quotient",
          "stepTheme": "Le signe d'un quotient",
          "stepBadge": "Le signe d'un quotient",
          "paragraphText": "Sur $]0;+\\infty[$, $f'(x)=\\dfrac{1-2\\sqrt x}{2\\sqrt x}$ : le dénominateur est positif, donc $f'$ a le signe de $1-2\\sqrt x$, nul en $\\dfrac14$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q4",
            "type": "mcq",
            "prompt": "Sur quel intervalle $f$ est-elle croissante à droite de $0$ ?",
            "options": [
              "$\\left[\\dfrac14;+\\infty\\right[$",
              "$]0;1]$",
              "$]0;+\\infty[$",
              "$\\left[0;\\dfrac14\\right]$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$1-2\\sqrt x>0\\iff x<\\dfrac14$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le tableau complet",
          "stepTheme": "Le tableau complet",
          "stepBadge": "Le tableau complet",
          "paragraphText": "$f$ : de $+\\infty$, décroît jusqu'à $-\\dfrac14$ en $-\\dfrac12$ ; croît jusqu'à $\\dfrac14$ en $\\dfrac14$ (en passant par $0$ en $0$) ; puis décroît vers $-\\infty$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q5",
            "type": "mcq",
            "prompt": "Quel est le maximum relatif de $f$ ?",
            "options": [
              "$0$, atteint en $0$",
              "$\\dfrac14$, atteint en $\\dfrac14$",
              "$-\\dfrac14$, atteint en $-\\dfrac12$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$f\\left(\\dfrac14\\right)=\\dfrac12-\\dfrac14=\\dfrac14$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une asymptote oblique",
          "stepTheme": "Une asymptote oblique",
          "stepBadge": "Une asymptote oblique",
          "paragraphText": "Si $\\lim\\limits_{+\\infty}[f(x)-(ax+b)]=0$, la droite $y=ax+b$ est asymptote à la courbe. Pour $h(x)=x+\\sqrt{x^2-1}$ : $h(x)-2x=\\dfrac{-1}{x+\\sqrt{x^2-1}}\\to0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q6",
            "type": "mcq",
            "prompt": "Avec $\\lim\\limits_{x\\to+\\infty}[h(x)-2x]=0$, que conclut-on ?",
            "options": [
              "La droite $y=2x$ est asymptote à la courbe en $+\\infty$",
              "$h$ est linéaire",
              "La courbe coupe la droite $y=2x$",
              "$h(x)=2x$ pour tout $x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'écart entre la courbe et la droite tend vers $0$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Lire le minimum",
          "stepTheme": "Lire le minimum",
          "stepBadge": "Lire le minimum",
          "paragraphText": "Les valeurs du tableau se CALCULENT avec $f$. Ici le minimum sur $]-\\infty;0]$ est $f\\left(-\\dfrac12\\right)=-\\dfrac14$, pas $f(0)=0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q7",
            "type": "mcq",
            "prompt": "Combien de fois la courbe de $f$ coupe-t-elle l'axe des abscisses (là où $f(x)=0$) ?",
            "options": [
              "Une fois",
              "Aucune fois",
              "Deux fois",
              "Trois fois"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x^2+x=0$ donne $x=-1$ (et $0$) ; $\\sqrt x-x=0$ donne $x=0$ et $x=1$. Points d'abscisses $-1$, $0$ et $1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q1",
          "type": "mcq",
          "prompt": "Que faut-il vérifier pour que $f$ soit continue en $0$ ?",
          "options": [
            "$f'(0)=0$",
            "Que la limite à gauche, la limite à droite et $f(0)$ soient égales",
            "Que $f(0)>0$",
            "Que $f$ soit croissante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la continuité en un point de raccord."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}(\\sqrt x-x)$ ?",
          "options": [
            "$0$",
            "$+\\infty$",
            "$-\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\sqrt x(1-\\sqrt x)$ : $\\sqrt x\\to+\\infty$ et $1-\\sqrt x\\to-\\infty$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q3",
          "type": "mcq",
          "prompt": "Que vaut $f\\left(-\\dfrac12\\right)=\\left(-\\dfrac12\\right)^2-\\dfrac12$ ?",
          "options": [
            "$-\\dfrac14$",
            "$0$",
            "$\\dfrac14$",
            "$-\\dfrac34$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac14-\\dfrac12=-\\dfrac14$ : le minimum n'est pas $0$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q4",
          "type": "mcq",
          "prompt": "Sur quel intervalle $f$ est-elle croissante à droite de $0$ ?",
          "options": [
            "$\\left[\\dfrac14;+\\infty\\right[$",
            "$]0;1]$",
            "$]0;+\\infty[$",
            "$\\left[0;\\dfrac14\\right]$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$1-2\\sqrt x>0\\iff x<\\dfrac14$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q5",
          "type": "mcq",
          "prompt": "Quel est le maximum relatif de $f$ ?",
          "options": [
            "$0$, atteint en $0$",
            "$\\dfrac14$, atteint en $\\dfrac14$",
            "$-\\dfrac14$, atteint en $-\\dfrac12$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$f\\left(\\dfrac14\\right)=\\dfrac12-\\dfrac14=\\dfrac14$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q6",
          "type": "mcq",
          "prompt": "Avec $\\lim\\limits_{x\\to+\\infty}[h(x)-2x]=0$, que conclut-on ?",
          "options": [
            "La droite $y=2x$ est asymptote à la courbe en $+\\infty$",
            "$h$ est linéaire",
            "La courbe coupe la droite $y=2x$",
            "$h(x)=2x$ pour tout $x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'écart entre la courbe et la droite tend vers $0$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p06_q7",
          "type": "mcq",
          "prompt": "Combien de fois la courbe de $f$ coupe-t-elle l'axe des abscisses (là où $f(x)=0$) ?",
          "options": [
            "Une fois",
            "Aucune fois",
            "Deux fois",
            "Trois fois"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x^2+x=0$ donne $x=-1$ (et $0$) ; $\\sqrt x-x=0$ donne $x=0$ et $x=1$. Points d'abscisses $-1$, $0$ et $1$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07",
      "order": 7,
      "title": "Le bénéfice maximal de l'usine de cacao",
      "summary": "Utiliser l'étude d'une fonction pour répondre à un problème concret.",
      "conceptExplanation": "Situation : une usine produit entre 1 000 et 5 000 sachets de poudre de cacao par jour, tous vendus. Le bénéfice journalier, en millions de FCFA, pour $x$ milliers de sachets, est\n$$B(x)=-\\dfrac13x^3+9x+2,\\quad x\\in[1;5].$$\nLe directeur veut savoir combien de sachets produire pour un bénéfice maximal.\n\nDémarche :\n1. dériver : $B'(x)=-x^2+9=-(x-3)(x+3)$ ;\n2. étudier le signe : sur $[1;5]$, $x+3>0$, donc $B'(x)$ a le signe de $-(x-3)$ : positif sur $[1;3]$, négatif sur $[3;5]$ ;\n3. variations : $B$ est croissante sur $[1;3]$ et décroissante sur $[3;5]$ ;\n4. maximum : $B(3)=-9+27+2=20$.\n\nConclusion : il faut produire $3$ milliers, soit 3 000 sachets par jour, pour un bénéfice maximal de 20 millions de FCFA.\n\nAttention : $x$ est en MILLIERS de sachets, et $B$ en MILLIONS de FCFA. Il faut traduire le résultat dans les unités de la question.",
      "keyRule": "Problème d'optimisation : dériver, étudier le signe de la dérivée, repérer le changement de signe, calculer la valeur, puis traduire avec les unités.",
      "formulas": [],
      "workedExample": {
        "title": "La production optimale",
        "statement": "$B(x)=-\\dfrac13x^3+9x+2$ sur $[1;5]$. Trouve le maximum.",
        "methodSteps": [
          "$B'(x)=9-x^2=(3-x)(3+x)$.",
          "Sur $[1;5]$, $B'>0$ avant $3$ et $B'<0$ après.",
          "$B(3)=-\\dfrac{27}{3}+27+2=20$."
        ],
        "conclusion": "3 000 sachets par jour, pour 20 millions de FCFA de bénéfice."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Dériver le bénéfice",
          "stepTheme": "Dériver le bénéfice",
          "stepBadge": "Dériver le bénéfice",
          "paragraphText": "$B(x)=-\\dfrac13x^3+9x+2$ donne $B'(x)=-\\dfrac13\\times3x^2+9=-x^2+9$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q1",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $B(x)=-\\dfrac13x^3+9x+2$ ?",
            "options": [
              "$-x^2+9$",
              "$-x^3+9$",
              "$-\\dfrac13x^2+9$",
              "$-x^2+9x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\left(-\\dfrac13x^3\\right)'=-x^2$ et $(9x)'=9$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Factoriser",
          "stepTheme": "Factoriser",
          "stepBadge": "Factoriser",
          "paragraphText": "$-x^2+9=9-x^2=(3-x)(3+x)$. Sur $[1;5]$, $3+x>0$ : le signe de $B'$ est celui de $3-x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q2",
            "type": "mcq",
            "prompt": "Quel est le signe de $B'(x)$ sur $[1;3[$ ?",
            "options": [
              "Négatif",
              "Nul",
              "Positif",
              "Il change de signe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour $x<3$, $3-x>0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les variations",
          "stepTheme": "Les variations",
          "stepBadge": "Les variations",
          "paragraphText": "$B'\\geq0$ sur $[1;3]$ et $B'\\leq0$ sur $[3;5]$ : $B$ est croissante puis décroissante. Elle atteint son maximum en $x=3$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q3",
            "type": "mcq",
            "prompt": "Sur quel intervalle $B$ est-elle décroissante ?",
            "options": [
              "$[1;3]$",
              "$[1;5]$",
              "$[0;3]$",
              "$[3;5]$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$B'\\leq0$ pour $x\\geq3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La valeur du maximum",
          "stepTheme": "La valeur du maximum",
          "stepBadge": "La valeur du maximum",
          "paragraphText": "$B(3)=-\\dfrac13\\times27+9\\times3+2=-9+27+2=20$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q4",
            "type": "mcq",
            "prompt": "Que vaut $B(3)$ ?",
            "options": [
              "$29$",
              "$20$",
              "$27$",
              "$11$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$-9+27+2=20$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les unités",
          "stepTheme": "Les unités",
          "stepBadge": "Les unités",
          "paragraphText": "$x$ est en milliers de sachets : $x=3$ correspond à 3 000 sachets. $B$ est en millions de FCFA : $B(3)=20$ correspond à 20 millions.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q5",
            "type": "mcq",
            "prompt": "Combien de sachets l'usine doit-elle produire par jour ?",
            "options": [
              "3 sachets",
              "20 000 sachets",
              "3 000 sachets",
              "300 sachets"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x=3$ milliers de sachets."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Vérifier aux bornes",
          "stepTheme": "Vérifier aux bornes",
          "stepBadge": "Vérifier aux bornes",
          "paragraphText": "Aux bornes : $B(1)=-\\dfrac13+11\\approx10,67$ et $B(5)=-\\dfrac{125}{3}+47\\approx5,33$. Les deux sont inférieurs à $20$ : le maximum est bien en $3$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q6",
            "type": "mcq",
            "prompt": "Pourquoi le tableau de variation suffit-il à affirmer que $B(3)$ est le maximum sur $[1;5]$ ?",
            "options": [
              "Parce que $B$ croît jusqu'à $3$ puis décroît",
              "Parce que $3$ est au milieu de $[1;5]$",
              "Parce que $B(3)$ est un entier",
              "Parce que $B'(1)>0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toutes les autres valeurs sont plus basses que celle du sommet."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le signe de $B'$",
          "stepTheme": "Le signe de $B'$",
          "stepBadge": "Le signe de $B'$",
          "paragraphText": "Erreur à éviter : écrire « $B'$ négative puis positive ». Avec $B'(x)=9-x^2$, on a $B'(1)=8>0$ : $B'$ est d'abord POSITIVE, ce qui donne un maximum.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q7",
            "type": "mcq",
            "prompt": "Que vaut $B'(4)$, et qu'est-ce que cela confirme ?",
            "options": [
              "$7$ : $B$ croît après $3$",
              "$-7$ : $B$ décroît après $3$",
              "$0$ : $B$ est constante",
              "$25$ : $B$ croît très vite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$9-16=-7<0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q1",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $B(x)=-\\dfrac13x^3+9x+2$ ?",
          "options": [
            "$-x^2+9$",
            "$-x^3+9$",
            "$-\\dfrac13x^2+9$",
            "$-x^2+9x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\left(-\\dfrac13x^3\\right)'=-x^2$ et $(9x)'=9$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q2",
          "type": "mcq",
          "prompt": "Quel est le signe de $B'(x)$ sur $[1;3[$ ?",
          "options": [
            "Négatif",
            "Nul",
            "Positif",
            "Il change de signe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour $x<3$, $3-x>0$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q3",
          "type": "mcq",
          "prompt": "Sur quel intervalle $B$ est-elle décroissante ?",
          "options": [
            "$[1;3]$",
            "$[1;5]$",
            "$[0;3]$",
            "$[3;5]$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$B'\\leq0$ pour $x\\geq3$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q4",
          "type": "mcq",
          "prompt": "Que vaut $B(3)$ ?",
          "options": [
            "$29$",
            "$20$",
            "$27$",
            "$11$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$-9+27+2=20$."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q5",
          "type": "mcq",
          "prompt": "Combien de sachets l'usine doit-elle produire par jour ?",
          "options": [
            "3 sachets",
            "20 000 sachets",
            "3 000 sachets",
            "300 sachets"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x=3$ milliers de sachets."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q6",
          "type": "mcq",
          "prompt": "Pourquoi le tableau de variation suffit-il à affirmer que $B(3)$ est le maximum sur $[1;5]$ ?",
          "options": [
            "Parce que $B$ croît jusqu'à $3$ puis décroît",
            "Parce que $3$ est au milieu de $[1;5]$",
            "Parce que $B(3)$ est un entier",
            "Parce que $B'(1)>0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toutes les autres valeurs sont plus basses que celle du sommet."
        },
        {
          "id": "terminale_d_maths_numerique_l03_derivabilite_etude_fonctions_p07_q7",
          "type": "mcq",
          "prompt": "Que vaut $B'(4)$, et qu'est-ce que cela confirme ?",
          "options": [
            "$7$ : $B$ croît après $3$",
            "$-7$ : $B$ décroît après $3$",
            "$0$ : $B$ est constante",
            "$25$ : $B$ croît très vite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$9-16=-7<0$."
        }
      ]
    }
  ]
};
