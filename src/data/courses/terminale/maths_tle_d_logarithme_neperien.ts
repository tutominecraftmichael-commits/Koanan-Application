import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « TD Maths leçon 05 FONCTIONS LOGARITHMES.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_D_L05_LOGARITHME_NEPERIEN: CurriculumChapter = {
  "id": "terminale_d_maths_numerique_l05_logarithme_neperien",
  "subjectId": "maths",
  "gradeLevel": "terminale_d",
  "alsoForGrades": [],
  "order": 5,
  "title": "Leçon 5 : Fonction logarithme népérien",
  "summary": "Définition de ln, propriétés algébriques, logarithme décimal, équations et inéquations, limites de référence, dérivée de ln u et primitives de u'/u, étude et courbe, situations concrètes.",
  "officialVolumeHours": 14,
  "contentVersion": 2,
  "source": "TD Maths leçon 05 FONCTIONS LOGARITHMES.pdf",
  "points": [
    {
      "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01",
      "order": 1,
      "title": "Définition de la fonction ln",
      "summary": "$\\ln$ est la primitive de $\\dfrac1x$ sur $]0;+\\infty[$ qui s'annule en $1$.",
      "conceptExplanation": "Définition : la fonction logarithme népérien, notée $\\ln$, est la primitive sur $]0;+\\infty[$ de la fonction $x\\mapsto\\dfrac1x$ qui s'annule en $1$.\n\nConséquences immédiates :\n- $\\ln$ est définie sur $]0;+\\infty[$ seulement : $\\ln(-2)$ ou $\\ln0$ n'existent pas ;\n- $\\ln1=0$ ;\n- $\\ln$ est dérivable sur $]0;+\\infty[$ et $\\ln'(x)=\\dfrac1x$ ;\n- comme $\\dfrac1x>0$, $\\ln$ est strictement croissante sur $]0;+\\infty[$.\n\nLe nombre $e$ : c'est l'unique réel tel que $\\ln e=1$ ; $e\\approx2{,}718$.\n\nSigne :\n- $\\ln x<0$ si $0<x<1$ ;\n- $\\ln x=0$ si $x=1$ ;\n- $\\ln x>0$ si $x>1$.\n\nComparaison : pour $a>0$ et $b>0$, $\\ln a=\\ln b\\iff a=b$ et $\\ln a<\\ln b\\iff a<b$.\n\nEnsemble de définition : $\\ln u(x)$ existe si et seulement si $u(x)>0$. Par exemple $\\ln(2x-6)$ est défini pour $x>3$.",
      "keyRule": "$\\ln$ existe seulement pour $x>0$ ; $\\ln1=0$, $\\ln e=1$, $\\ln'(x)=\\dfrac1x$ ; $\\ln$ est strictement croissante.",
      "formulas": [
        {
          "name": "Valeurs clés",
          "formula": "\\ln1=0\\qquad\\ln e=1"
        },
        {
          "name": "Dérivée",
          "formula": "(\\ln x)'=\\dfrac1x\\quad(x>0)"
        }
      ],
      "workedExample": {
        "title": "Un ensemble de définition",
        "statement": "Détermine l'ensemble de définition de $f(x)=\\ln(4-x)$.",
        "methodSteps": [
          "$f(x)$ existe si et seulement si $4-x>0$.",
          "$4-x>0\\iff x<4$."
        ],
        "conclusion": "$D_f=]-\\infty;4[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "$\\ln$ est la primitive de $\\dfrac1x$ sur $]0;+\\infty[$ qui vaut $0$ en $1$. Donc $\\ln'(x)=\\dfrac1x$ et $\\ln1=0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\ln1$ ?",
            "options": [
              "$1$",
              "$e$",
              "$0$",
              "Il n'existe pas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par définition, $\\ln$ s'annule en $1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Seulement pour $x>0$",
          "stepTheme": "Seulement pour $x>0$",
          "stepBadge": "Seulement pour $x>0$",
          "paragraphText": "$\\ln x$ n'existe que pour $x>0$. Pour $\\ln u(x)$, on résout $u(x)>0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q2",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de $x\\mapsto\\ln(2x-6)$ ?",
            "options": [
              "$]3;+\\infty[$",
              "$[3;+\\infty[$",
              "$]-\\infty;3[$",
              "$]0;+\\infty[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2x-6>0\\iff x>3$ (strictement)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La dérivée",
          "stepTheme": "La dérivée",
          "stepBadge": "La dérivée",
          "paragraphText": "$\\ln'(x)=\\dfrac1x>0$ sur $]0;+\\infty[$ : la fonction $\\ln$ est strictement croissante.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $f(x)=3\\ln x$ sur $]0;+\\infty[$ ?",
            "options": [
              "$3\\ln x$",
              "$\\dfrac{3}{x}$",
              "$\\dfrac{1}{3x}$",
              "$3x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(3\\ln x)'=3\\times\\dfrac1x$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le nombre $e$",
          "stepTheme": "Le nombre $e$",
          "stepBadge": "Le nombre $e$",
          "paragraphText": "$e$ est l'unique réel tel que $\\ln e=1$. On a $e\\approx2{,}718$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\ln e$ ?",
            "options": [
              "$0$",
              "$2{,}718$",
              "$e$",
              "$1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la définition du nombre $e$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le signe de $\\ln x$",
          "stepTheme": "Le signe de $\\ln x$",
          "stepBadge": "Le signe de $\\ln x$",
          "paragraphText": "$\\ln x<0$ sur $]0;1[$, $\\ln1=0$, et $\\ln x>0$ sur $]1;+\\infty[$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q5",
            "type": "mcq",
            "prompt": "Quel est le signe de $\\ln0{,}5$ ?",
            "options": [
              "Positif",
              "Négatif",
              "Nul",
              "$\\ln0{,}5$ n'existe pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$0<0{,}5<1$, donc $\\ln0{,}5<0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Comparer deux logarithmes",
          "stepTheme": "Comparer deux logarithmes",
          "stepBadge": "Comparer deux logarithmes",
          "paragraphText": "Pour $a>0$ et $b>0$ : $\\ln a<\\ln b\\iff a<b$. On compare les nombres eux-mêmes.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q6",
            "type": "mcq",
            "prompt": "Lequel est le plus grand ?",
            "options": [
              "$\\ln2$",
              "$\\ln\\dfrac32$",
              "$\\ln1$",
              "$\\ln3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\ln$ est croissante et $3$ est le plus grand des nombres."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le domaine d'abord",
          "stepTheme": "Le domaine d'abord",
          "stepBadge": "Le domaine d'abord",
          "paragraphText": "$\\ln(x^2)$ existe pour tout $x\\neq0$, mais $2\\ln x$ seulement pour $x>0$ : ces deux fonctions n'ont pas le même ensemble de définition.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q7",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de $x\\mapsto\\ln(x^2)$ ?",
            "options": [
              "$]0;+\\infty[$",
              "$\\mathbb{R}$",
              "$\\mathbb{R}\\setminus\\{0\\}$",
              "$[0;+\\infty[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x^2>0$ pour tout $x\\neq0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\ln1$ ?",
          "options": [
            "$1$",
            "$e$",
            "$0$",
            "Il n'existe pas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par définition, $\\ln$ s'annule en $1$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de $x\\mapsto\\ln(2x-6)$ ?",
          "options": [
            "$]3;+\\infty[$",
            "$[3;+\\infty[$",
            "$]-\\infty;3[$",
            "$]0;+\\infty[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2x-6>0\\iff x>3$ (strictement)."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $f(x)=3\\ln x$ sur $]0;+\\infty[$ ?",
          "options": [
            "$3\\ln x$",
            "$\\dfrac{3}{x}$",
            "$\\dfrac{1}{3x}$",
            "$3x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(3\\ln x)'=3\\times\\dfrac1x$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\ln e$ ?",
          "options": [
            "$0$",
            "$2{,}718$",
            "$e$",
            "$1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la définition du nombre $e$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q5",
          "type": "mcq",
          "prompt": "Quel est le signe de $\\ln0{,}5$ ?",
          "options": [
            "Positif",
            "Négatif",
            "Nul",
            "$\\ln0{,}5$ n'existe pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$0<0{,}5<1$, donc $\\ln0{,}5<0$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q6",
          "type": "mcq",
          "prompt": "Lequel est le plus grand ?",
          "options": [
            "$\\ln2$",
            "$\\ln\\dfrac32$",
            "$\\ln1$",
            "$\\ln3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\ln$ est croissante et $3$ est le plus grand des nombres."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p01_q7",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de $x\\mapsto\\ln(x^2)$ ?",
          "options": [
            "$]0;+\\infty[$",
            "$\\mathbb{R}$",
            "$\\mathbb{R}\\setminus\\{0\\}$",
            "$[0;+\\infty[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x^2>0$ pour tout $x\\neq0$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02",
      "order": 2,
      "title": "Propriétés algébriques",
      "summary": "Le logarithme transforme les produits en sommes.",
      "conceptExplanation": "Pour $a>0$, $b>0$ et $r$ rationnel :\n- $\\ln(ab)=\\ln a+\\ln b$ ;\n- $\\ln\\dfrac1a=-\\ln a$ ;\n- $\\ln\\dfrac ab=\\ln a-\\ln b$ ;\n- $\\ln(a^r)=r\\ln a$ ; en particulier $\\ln\\sqrt a=\\dfrac12\\ln a$.\n\nExemple : $E=4\\ln25-2\\ln\\sqrt5$.\n- $4\\ln25=4\\ln5^2=8\\ln5$ ;\n- $2\\ln\\sqrt5=2\\times\\dfrac12\\ln5=\\ln5$ ;\n- donc $E=8\\ln5-\\ln5=7\\ln5=\\ln5^7$.\n\nLogarithme décimal : $\\log x=\\dfrac{\\ln x}{\\ln10}$. Il vérifie $\\log10=1$ et $\\log10^n=n$ ; il a les mêmes propriétés algébriques que $\\ln$.\n\nAttention : $\\ln(a+b)$ n'est PAS égal à $\\ln a+\\ln b$.",
      "keyRule": "$\\ln(ab)=\\ln a+\\ln b$ ; $\\ln\\dfrac ab=\\ln a-\\ln b$ ; $\\ln a^r=r\\ln a$.",
      "formulas": [
        {
          "name": "Produit et quotient",
          "formula": "\\ln(ab)=\\ln a+\\ln b\\qquad\\ln\\dfrac ab=\\ln a-\\ln b"
        },
        {
          "name": "Puissance",
          "formula": "\\ln(a^r)=r\\ln a"
        },
        {
          "name": "Logarithme décimal",
          "formula": "\\log x=\\dfrac{\\ln x}{\\ln10}"
        }
      ],
      "workedExample": {
        "title": "Simplifier une expression",
        "statement": "Écris $E=4\\ln25-2\\ln\\sqrt5$ sous la forme $\\ln a$.",
        "methodSteps": [
          "$4\\ln25=4\\times2\\ln5=8\\ln5$.",
          "$2\\ln\\sqrt5=2\\times\\dfrac12\\ln5=\\ln5$.",
          "$E=8\\ln5-\\ln5=7\\ln5$."
        ],
        "conclusion": "$E=\\ln(5^7)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le produit",
          "stepTheme": "Le produit",
          "stepBadge": "Le produit",
          "paragraphText": "$\\ln(ab)=\\ln a+\\ln b$ : le logarithme d'un produit est la somme des logarithmes.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q1",
            "type": "mcq",
            "prompt": "On donne $\\ln2\\approx0{,}69$ et $\\ln3\\approx1{,}10$. Que vaut $\\ln6$ environ ?",
            "options": [
              "$0{,}76$",
              "$1{,}79$",
              "$2{,}07$",
              "$0{,}41$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln6=\\ln2+\\ln3\\approx0{,}69+1{,}10$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le quotient",
          "stepTheme": "Le quotient",
          "stepBadge": "Le quotient",
          "paragraphText": "$\\ln\\dfrac ab=\\ln a-\\ln b$ et $\\ln\\dfrac1a=-\\ln a$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q2",
            "type": "mcq",
            "prompt": "À quoi est égal $\\ln\\dfrac{1}{8}$ ?",
            "options": [
              "$-3\\ln2$",
              "$\\dfrac{1}{\\ln8}$",
              "$3\\ln2$",
              "$\\ln8-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\ln\\dfrac18=-\\ln8=-\\ln2^3=-3\\ln2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La puissance",
          "stepTheme": "La puissance",
          "stepBadge": "La puissance",
          "paragraphText": "$\\ln(a^r)=r\\ln a$, et donc $\\ln\\sqrt a=\\dfrac12\\ln a$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q3",
            "type": "mcq",
            "prompt": "À quoi est égal $\\ln\\sqrt{e}$ ?",
            "options": [
              "$\\sqrt e$",
              "$1$",
              "$2$",
              "$\\dfrac12$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\ln\\sqrt e=\\dfrac12\\ln e=\\dfrac12$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Simplifier",
          "stepTheme": "Simplifier",
          "stepBadge": "Simplifier",
          "paragraphText": "$E=4\\ln25-2\\ln\\sqrt5=8\\ln5-\\ln5=7\\ln5=\\ln5^7$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q4",
            "type": "mcq",
            "prompt": "Simplifie $A=\\ln12-\\ln3$.",
            "options": [
              "$\\ln9$",
              "$\\ln36$",
              "$2\\ln2$",
              "$\\dfrac{\\ln12}{\\ln3}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\ln\\dfrac{12}{3}=\\ln4=2\\ln2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le logarithme décimal",
          "stepTheme": "Le logarithme décimal",
          "stepBadge": "Le logarithme décimal",
          "paragraphText": "$\\log x=\\dfrac{\\ln x}{\\ln10}$. Il vérifie $\\log10^n=n$ : très utile pour les puissances de 10 (pH, décibels).",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\log1000$ ?",
            "options": [
              "$3$",
              "$1000$",
              "$\\ln3$",
              "$30$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$1000=10^3$, donc $\\log1000=3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Écrire sous la forme $\\ln a$",
          "stepTheme": "Écrire sous la forme $\\ln a$",
          "stepBadge": "Écrire sous la forme $\\ln a$",
          "paragraphText": "On regroupe : les coefficients deviennent des exposants, les sommes des produits, les différences des quotients.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q6",
            "type": "mcq",
            "prompt": "Écris $2\\ln3+\\ln5$ sous la forme $\\ln a$.",
            "options": [
              "$\\ln11$",
              "$\\ln30$",
              "$\\ln45$",
              "$\\ln15$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$2\\ln3+\\ln5=\\ln9+\\ln5=\\ln45$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas de règle pour la somme",
          "stepTheme": "Pas de règle pour la somme",
          "stepBadge": "Pas de règle pour la somme",
          "paragraphText": "$\\ln(a+b)\\neq\\ln a+\\ln b$. Par exemple $\\ln(1+1)=\\ln2$, alors que $\\ln1+\\ln1=0$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q7",
            "type": "mcq",
            "prompt": "Quelle égalité est VRAIE pour $a>0$, $b>0$ ?",
            "options": [
              "$\\ln(a+b)=\\ln a+\\ln b$",
              "$\\ln(a-b)=\\dfrac{\\ln a}{\\ln b}$",
              "$\\ln(a^2b)=2\\ln a+\\ln b$",
              "$(\\ln a)^2=2\\ln a$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\ln(a^2b)=\\ln a^2+\\ln b=2\\ln a+\\ln b$. Attention : $(\\ln a)^2\\neq\\ln(a^2)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q1",
          "type": "mcq",
          "prompt": "On donne $\\ln2\\approx0{,}69$ et $\\ln3\\approx1{,}10$. Que vaut $\\ln6$ environ ?",
          "options": [
            "$0{,}76$",
            "$1{,}79$",
            "$2{,}07$",
            "$0{,}41$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln6=\\ln2+\\ln3\\approx0{,}69+1{,}10$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q2",
          "type": "mcq",
          "prompt": "À quoi est égal $\\ln\\dfrac{1}{8}$ ?",
          "options": [
            "$-3\\ln2$",
            "$\\dfrac{1}{\\ln8}$",
            "$3\\ln2$",
            "$\\ln8-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\ln\\dfrac18=-\\ln8=-\\ln2^3=-3\\ln2$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q3",
          "type": "mcq",
          "prompt": "À quoi est égal $\\ln\\sqrt{e}$ ?",
          "options": [
            "$\\sqrt e$",
            "$1$",
            "$2$",
            "$\\dfrac12$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\ln\\sqrt e=\\dfrac12\\ln e=\\dfrac12$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q4",
          "type": "mcq",
          "prompt": "Simplifie $A=\\ln12-\\ln3$.",
          "options": [
            "$\\ln9$",
            "$\\ln36$",
            "$2\\ln2$",
            "$\\dfrac{\\ln12}{\\ln3}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\ln\\dfrac{12}{3}=\\ln4=2\\ln2$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\log1000$ ?",
          "options": [
            "$3$",
            "$1000$",
            "$\\ln3$",
            "$30$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$1000=10^3$, donc $\\log1000=3$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q6",
          "type": "mcq",
          "prompt": "Écris $2\\ln3+\\ln5$ sous la forme $\\ln a$.",
          "options": [
            "$\\ln11$",
            "$\\ln30$",
            "$\\ln45$",
            "$\\ln15$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$2\\ln3+\\ln5=\\ln9+\\ln5=\\ln45$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p02_q7",
          "type": "mcq",
          "prompt": "Quelle égalité est VRAIE pour $a>0$, $b>0$ ?",
          "options": [
            "$\\ln(a+b)=\\ln a+\\ln b$",
            "$\\ln(a-b)=\\dfrac{\\ln a}{\\ln b}$",
            "$\\ln(a^2b)=2\\ln a+\\ln b$",
            "$(\\ln a)^2=2\\ln a$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\ln(a^2b)=\\ln a^2+\\ln b=2\\ln a+\\ln b$. Attention : $(\\ln a)^2\\neq\\ln(a^2)$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03",
      "order": 3,
      "title": "Équations et inéquations avec ln",
      "summary": "Domaine d'abord, puis on enlève les ln grâce à la stricte croissance.",
      "conceptExplanation": "Méthode en 3 temps :\n1. chercher les conditions d'existence (tout ce qui est dans un $\\ln$ doit être strictement positif) ;\n2. se ramener à $\\ln A=\\ln B$ (soit $A=B$) ou $\\ln A<\\ln B$ (soit $A<B$) ;\n3. ne garder que les solutions qui respectent les conditions.\n\nExemple 1 : $\\ln(x^2-4)=\\ln(3x)$.\n- Conditions : $x^2-4>0$ et $3x>0$, soit $x>2$.\n- $x^2-4=3x\\iff x^2-3x-4=0\\iff x=4$ ou $x=-1$.\n- On garde $x=4$ : $S=\\{4\\}$.\n\nExemple 2 : $\\ln(2x+4)\\geq\\ln(6-2x)$.\n- Conditions : $x>-2$ et $x<3$.\n- $2x+4\\geq6-2x\\iff x\\geq\\dfrac12$.\n- $S=\\left[\\dfrac12;3\\right[$.\n\nExemple 3 : $\\ln(x+1)\\leq2$. Conditions : $x>-1$. On écrit $2=\\ln e^2$ : $x+1\\leq e^2$, donc $S=]-1;e^2-1]$.\n\nExemple 4 (changement d'inconnue) : $(\\ln x)^2-3\\ln x-4=0$. On pose $X=\\ln x$ : $X^2-3X-4=0$ donne $X=-1$ ou $X=4$, donc $x=e^{-1}$ ou $x=e^4$.",
      "keyRule": "1) conditions d'existence ; 2) $\\ln A=\\ln B\\iff A=B$ et $\\ln A<\\ln B\\iff A<B$ ; 3) vérifier les conditions.",
      "formulas": [
        {
          "name": "Égalité",
          "formula": "\\ln A=\\ln B\\iff A=B\\quad(A>0,\\ B>0)"
        },
        {
          "name": "Avec un nombre",
          "formula": "\\ln x=k\\iff x=e^k"
        }
      ],
      "workedExample": {
        "title": "Une équation",
        "statement": "Résous $\\ln(x^2-4)=\\ln(3x)$.",
        "methodSteps": [
          "Conditions : $x^2-4>0$ et $x>0$, donc $x>2$.",
          "$x^2-4=3x\\iff x^2-3x-4=0$ : $\\Delta=25$, $x=4$ ou $x=-1$.",
          "$-1$ ne vérifie pas $x>2$."
        ],
        "conclusion": "$S=\\{4\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Les conditions d'existence",
          "stepTheme": "Les conditions d'existence",
          "stepBadge": "Les conditions d'existence",
          "paragraphText": "Avant tout calcul, on écrit que chaque expression dans un $\\ln$ est strictement positive.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q1",
            "type": "mcq",
            "prompt": "Pour résoudre $\\ln(2x+4)\\geq\\ln(6-2x)$, quelles sont les conditions ?",
            "options": [
              "$x>-2$ seulement",
              "$-2<x<3$",
              "$x>3$",
              "$x\\geq\\dfrac12$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2x+4>0$ donne $x>-2$ ; $6-2x>0$ donne $x<3$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une équation",
          "stepTheme": "Une équation",
          "stepBadge": "Une équation",
          "paragraphText": "$\\ln(x^2-4)=\\ln(3x)$ : $x^2-3x-4=0$ donne $4$ et $-1$, mais seul $4$ vérifie $x>2$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q2",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $\\ln(x^2-4)=\\ln(3x)$ ?",
            "options": [
              "$\\{-1;4\\}$",
              "$\\{-1\\}$",
              "$\\emptyset$",
              "$\\{4\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$-1$ est exclu par les conditions d'existence."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une inéquation",
          "stepTheme": "Une inéquation",
          "stepBadge": "Une inéquation",
          "paragraphText": "$\\ln(2x+4)\\geq\\ln(6-2x)\\iff2x+4\\geq6-2x\\iff x\\geq\\dfrac12$, avec $-2<x<3$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $\\ln(2x+4)\\geq\\ln(6-2x)$ ?",
            "options": [
              "$\\left[\\dfrac12;3\\right[$",
              "$\\left[\\dfrac12;+\\infty\\right[$",
              "$]-2;3[$",
              "$\\left]-2;\\dfrac12\\right]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On croise $x\\geq\\dfrac12$ avec $-2<x<3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Comparer à un nombre",
          "stepTheme": "Comparer à un nombre",
          "stepBadge": "Comparer à un nombre",
          "paragraphText": "On écrit le nombre comme un logarithme : $2=\\ln e^2$. Ainsi $\\ln(x+1)\\leq2\\iff x+1\\leq e^2$, avec $x>-1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $\\ln(x+1)\\leq2$ ?",
            "options": [
              "$]-1;e^2-1[$",
              "$]-\\infty;e^2-1]$",
              "$]-1;e^2-1]$",
              "$]-1;1]$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-1<x\\leq e^2-1$ : la borne $e^2-1$ est comprise (inégalité large)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Changer d'inconnue",
          "stepTheme": "Changer d'inconnue",
          "stepBadge": "Changer d'inconnue",
          "paragraphText": "Pour $(\\ln x)^2-3\\ln x-4=0$, on pose $X=\\ln x$ : $X^2-3X-4=0$ donne $X=-1$ ou $X=4$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q5",
            "type": "mcq",
            "prompt": "Quelles sont alors les solutions en $x$ ?",
            "options": [
              "$-1$ et $4$",
              "$e^{-1}$ et $e^4$",
              "$\\ln(-1)$ et $\\ln4$",
              "$e$ et $e^4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln x=-1\\iff x=e^{-1}$ et $\\ln x=4\\iff x=e^4$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Avec un exposant inconnu",
          "stepTheme": "Avec un exposant inconnu",
          "stepBadge": "Avec un exposant inconnu",
          "paragraphText": "Pour $2^n\\geq1000$, on prend le $\\ln$ : $n\\ln2\\geq\\ln1000$, donc $n\\geq\\dfrac{\\ln1000}{\\ln2}\\approx9{,}97$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q6",
            "type": "mcq",
            "prompt": "Quel est le plus petit entier $n$ tel que $2^n\\geq1000$ ?",
            "options": [
              "$9$",
              "$500$",
              "$100$",
              "$10$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$n\\geq9{,}97$, donc $n=10$ ($2^{10}=1024$)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Diviser par un ln négatif",
          "stepTheme": "Diviser par un ln négatif",
          "stepBadge": "Diviser par un ln négatif",
          "paragraphText": "Si $0<q<1$, alors $\\ln q<0$ : en divisant par $\\ln q$, on CHANGE le sens de l'inégalité.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q7",
            "type": "mcq",
            "prompt": "$n\\ln0{,}5<\\ln0{,}1$. Que peut-on en déduire ?",
            "options": [
              "$n>\\dfrac{\\ln0{,}1}{\\ln0{,}5}$",
              "$n<\\dfrac{\\ln0{,}1}{\\ln0{,}5}$",
              "$n<0$",
              "$n=\\ln0{,}2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\ln0{,}5<0$ : le sens s'inverse. On trouve $n>3{,}32$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q1",
          "type": "mcq",
          "prompt": "Pour résoudre $\\ln(2x+4)\\geq\\ln(6-2x)$, quelles sont les conditions ?",
          "options": [
            "$x>-2$ seulement",
            "$-2<x<3$",
            "$x>3$",
            "$x\\geq\\dfrac12$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2x+4>0$ donne $x>-2$ ; $6-2x>0$ donne $x<3$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $\\ln(x^2-4)=\\ln(3x)$ ?",
          "options": [
            "$\\{-1;4\\}$",
            "$\\{-1\\}$",
            "$\\emptyset$",
            "$\\{4\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$-1$ est exclu par les conditions d'existence."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $\\ln(2x+4)\\geq\\ln(6-2x)$ ?",
          "options": [
            "$\\left[\\dfrac12;3\\right[$",
            "$\\left[\\dfrac12;+\\infty\\right[$",
            "$]-2;3[$",
            "$\\left]-2;\\dfrac12\\right]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On croise $x\\geq\\dfrac12$ avec $-2<x<3$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $\\ln(x+1)\\leq2$ ?",
          "options": [
            "$]-1;e^2-1[$",
            "$]-\\infty;e^2-1]$",
            "$]-1;e^2-1]$",
            "$]-1;1]$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-1<x\\leq e^2-1$ : la borne $e^2-1$ est comprise (inégalité large)."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q5",
          "type": "mcq",
          "prompt": "Quelles sont alors les solutions en $x$ ?",
          "options": [
            "$-1$ et $4$",
            "$e^{-1}$ et $e^4$",
            "$\\ln(-1)$ et $\\ln4$",
            "$e$ et $e^4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln x=-1\\iff x=e^{-1}$ et $\\ln x=4\\iff x=e^4$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q6",
          "type": "mcq",
          "prompt": "Quel est le plus petit entier $n$ tel que $2^n\\geq1000$ ?",
          "options": [
            "$9$",
            "$500$",
            "$100$",
            "$10$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$n\\geq9{,}97$, donc $n=10$ ($2^{10}=1024$)."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p03_q7",
          "type": "mcq",
          "prompt": "$n\\ln0{,}5<\\ln0{,}1$. Que peut-on en déduire ?",
          "options": [
            "$n>\\dfrac{\\ln0{,}1}{\\ln0{,}5}$",
            "$n<\\dfrac{\\ln0{,}1}{\\ln0{,}5}$",
            "$n<0$",
            "$n=\\ln0{,}2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\ln0{,}5<0$ : le sens s'inverse. On trouve $n>3{,}32$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04",
      "order": 4,
      "title": "Limites de référence",
      "summary": "Les limites aux bornes et les croissances comparées.",
      "conceptExplanation": "Limites aux bornes :\n- $\\lim\\limits_{x\\to+\\infty}\\ln x=+\\infty$ ;\n- $\\lim\\limits_{x\\to0^+}\\ln x=-\\infty$ (l'axe des ordonnées est asymptote verticale).\n\nCroissances comparées (« $x$ l'emporte sur $\\ln x$ ») :\n- $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}=0$ ;\n- $\\lim\\limits_{x\\to0^+}x\\ln x=0$ ;\n- plus généralement $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x^n}=0$ et $\\lim\\limits_{x\\to0^+}x^n\\ln x=0$ ($n\\geq1$).\n\nNombre dérivé en 1 :\n- $\\lim\\limits_{x\\to0}\\dfrac{\\ln(1+x)}{x}=1$ ;\n- $\\lim\\limits_{x\\to1}\\dfrac{\\ln x}{x-1}=1$.\n\nExemples :\n- $\\lim\\limits_{x\\to0^+}\\ln(x\\sqrt2)=-\\infty$, car $x\\sqrt2\\to0^+$ ;\n- $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln(0{,}8x)}{x}=\\lim\\left(\\dfrac{\\ln0{,}8}{x}+\\dfrac{\\ln x}{x}\\right)=0+0=0$ ;\n- $\\lim\\limits_{x\\to+\\infty}(x-\\ln x)=\\lim x\\left(1-\\dfrac{\\ln x}{x}\\right)=+\\infty$.",
      "keyRule": "$\\ln x\\to+\\infty$ en $+\\infty$, $\\to-\\infty$ en $0^+$ ; $\\dfrac{\\ln x}{x}\\to0$ et $x\\ln x\\to0$ ; $\\dfrac{\\ln(1+x)}{x}\\to1$ en $0$.",
      "formulas": [
        {
          "name": "Croissances comparées",
          "formula": "\\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x}=0\\qquad\\lim_{x\\to0^+}x\\ln x=0"
        },
        {
          "name": "En zéro",
          "formula": "\\lim_{x\\to0}\\dfrac{\\ln(1+x)}{x}=1"
        }
      ],
      "workedExample": {
        "title": "Lever une forme indéterminée",
        "statement": "Calcule $\\lim\\limits_{x\\to+\\infty}(x-\\ln x)$.",
        "methodSteps": [
          "C'est une forme « $\\infty-\\infty$ ». On factorise par $x$ : $x-\\ln x=x\\left(1-\\dfrac{\\ln x}{x}\\right)$.",
          "$\\dfrac{\\ln x}{x}\\to0$, donc la parenthèse tend vers $1$."
        ],
        "conclusion": "$\\lim\\limits_{x\\to+\\infty}(x-\\ln x)=+\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Aux bornes",
          "stepTheme": "Aux bornes",
          "stepBadge": "Aux bornes",
          "paragraphText": "$\\ln x\\to+\\infty$ quand $x\\to+\\infty$ (lentement) et $\\ln x\\to-\\infty$ quand $x\\to0^+$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to0^+}\\ln x$ ?",
            "options": [
              "$0$",
              "$-\\infty$",
              "$+\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La courbe de $\\ln$ plonge le long de l'axe des ordonnées."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une composée en $0$",
          "stepTheme": "Une composée en $0$",
          "stepBadge": "Une composée en $0$",
          "paragraphText": "Quand $x\\to0^+$, $x\\sqrt2\\to0^+$, donc $\\ln(x\\sqrt2)\\to-\\infty$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to0^+}\\ln(x\\sqrt2)$ ?",
            "options": [
              "$0$",
              "$\\ln\\sqrt2$",
              "$+\\infty$",
              "$-\\infty$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On compose : $x\\sqrt2\\to0^+$ et $\\ln X\\to-\\infty$ quand $X\\to0^+$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "$x$ l'emporte sur $\\ln x$",
          "stepTheme": "$x$ l'emporte sur $\\ln x$",
          "stepBadge": "$x$ l'emporte sur $\\ln x$",
          "paragraphText": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}=0$ et $\\lim\\limits_{x\\to0^+}x\\ln x=0$ : la puissance de $x$ impose sa limite.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to0^+}x^2\\ln x$ ?",
            "options": [
              "$0$",
              "$-\\infty$",
              "$+\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Croissances comparées : $x^n\\ln x\\to0$ en $0^+$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Séparer les logarithmes",
          "stepTheme": "Séparer les logarithmes",
          "stepBadge": "Séparer les logarithmes",
          "paragraphText": "$\\dfrac{\\ln(0{,}8x)}{x}=\\dfrac{\\ln0{,}8}{x}+\\dfrac{\\ln x}{x}$ : les deux termes tendent vers $0$ en $+\\infty$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln(0{,}8x)}{x}$ ?",
            "options": [
              "$0{,}8$",
              "$\\ln0{,}8$",
              "$0$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{\\ln0{,}8}{x}\\to0$ et $\\dfrac{\\ln x}{x}\\to0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Près de $1$",
          "stepTheme": "Près de $1$",
          "stepBadge": "Près de $1$",
          "paragraphText": "$\\lim\\limits_{x\\to0}\\dfrac{\\ln(1+x)}{x}=1$ : c'est le nombre dérivé de $\\ln$ en $1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to0}\\dfrac{\\ln(1+3x)}{x}$ ?",
            "options": [
              "$1$",
              "$0$",
              "$\\dfrac13$",
              "$3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac{\\ln(1+3x)}{x}=3\\times\\dfrac{\\ln(1+X)}{X}$ avec $X=3x\\to0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Factoriser",
          "stepTheme": "Factoriser",
          "stepBadge": "Factoriser",
          "paragraphText": "Devant « $\\infty-\\infty$ », on factorise par le terme le plus fort : $x-\\ln x=x\\left(1-\\dfrac{\\ln x}{x}\\right)\\to+\\infty$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}(\\ln x-x)$ ?",
            "options": [
              "$+\\infty$",
              "$-\\infty$",
              "$0$",
              "$-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln x-x=x\\left(\\dfrac{\\ln x}{x}-1\\right)$, et la parenthèse tend vers $-1$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre",
          "stepTheme": "Ne pas confondre",
          "stepBadge": "Ne pas confondre",
          "paragraphText": "$\\dfrac{\\ln x}{x}\\to0$ en $+\\infty$, mais en $0^+$, $\\dfrac{\\ln x}{x}\\to-\\infty$ : aucune forme indéterminée en $0^+$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q7",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to0^+}\\dfrac{\\ln x}{x}$ ?",
            "options": [
              "$0$",
              "$1$",
              "$-\\infty$",
              "$+\\infty$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\ln x\\to-\\infty$ et $\\dfrac1x\\to+\\infty$ : le produit tend vers $-\\infty$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to0^+}\\ln x$ ?",
          "options": [
            "$0$",
            "$-\\infty$",
            "$+\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La courbe de $\\ln$ plonge le long de l'axe des ordonnées."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to0^+}\\ln(x\\sqrt2)$ ?",
          "options": [
            "$0$",
            "$\\ln\\sqrt2$",
            "$+\\infty$",
            "$-\\infty$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On compose : $x\\sqrt2\\to0^+$ et $\\ln X\\to-\\infty$ quand $X\\to0^+$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to0^+}x^2\\ln x$ ?",
          "options": [
            "$0$",
            "$-\\infty$",
            "$+\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Croissances comparées : $x^n\\ln x\\to0$ en $0^+$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln(0{,}8x)}{x}$ ?",
          "options": [
            "$0{,}8$",
            "$\\ln0{,}8$",
            "$0$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{\\ln0{,}8}{x}\\to0$ et $\\dfrac{\\ln x}{x}\\to0$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to0}\\dfrac{\\ln(1+3x)}{x}$ ?",
          "options": [
            "$1$",
            "$0$",
            "$\\dfrac13$",
            "$3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac{\\ln(1+3x)}{x}=3\\times\\dfrac{\\ln(1+X)}{X}$ avec $X=3x\\to0$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}(\\ln x-x)$ ?",
          "options": [
            "$+\\infty$",
            "$-\\infty$",
            "$0$",
            "$-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln x-x=x\\left(\\dfrac{\\ln x}{x}-1\\right)$, et la parenthèse tend vers $-1$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p04_q7",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to0^+}\\dfrac{\\ln x}{x}$ ?",
          "options": [
            "$0$",
            "$1$",
            "$-\\infty$",
            "$+\\infty$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\ln x\\to-\\infty$ et $\\dfrac1x\\to+\\infty$ : le produit tend vers $-\\infty$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05",
      "order": 5,
      "title": "Dérivée de ln u et primitives de u'/u",
      "summary": "$(\\ln u)'=\\dfrac{u'}{u}$ ; une primitive de $\\dfrac{u'}{u}$ est $\\ln|u|$.",
      "conceptExplanation": "Dérivée : si $u$ est dérivable et strictement positive sur $I$, alors $\\ln u$ est dérivable sur $I$ et\n$$(\\ln u)'=\\dfrac{u'}{u}.$$\nSi $u$ ne s'annule pas sur $I$, $(\\ln|u|)'=\\dfrac{u'}{u}$ aussi.\n\nExemples :\n- $(\\ln(x^2+1))'=\\dfrac{2x}{x^2+1}$ ;\n- $(\\ln(3x-2))'=\\dfrac{3}{3x-2}$ sur $\\left]\\dfrac23;+\\infty\\right[$.\n\nPrimitives : si $u$ est dérivable et ne s'annule pas sur $I$, une primitive de $\\dfrac{u'}{u}$ sur $I$ est $\\ln|u|$.\n- $\\dfrac1x$ : $\\ln|x|$ ;\n- $\\dfrac{2x}{x^2+3}$ : $\\ln(x^2+3)$ ;\n- $\\dfrac{1}{1-3x}=-\\dfrac13\\times\\dfrac{-3}{1-3x}$ : $-\\dfrac13\\ln|1-3x|$ ;\n- $\\tan x=\\dfrac{\\sin x}{\\cos x}=-\\dfrac{-\\sin x}{\\cos x}$ : $-\\ln|\\cos x|$.",
      "keyRule": "$(\\ln u)'=\\dfrac{u'}{u}$ ; une primitive de $\\dfrac{u'}{u}$ est $\\ln|u|$ (faire apparaître $u'$ au numérateur).",
      "formulas": [
        {
          "name": "Dérivée",
          "formula": "(\\ln u)'=\\dfrac{u'}{u}"
        },
        {
          "name": "Primitive",
          "formula": "\\dfrac{u'}{u}\\ \\longrightarrow\\ \\ln|u|"
        }
      ],
      "workedExample": {
        "title": "Ajuster le numérateur",
        "statement": "Trouve une primitive de $f(x)=\\dfrac{1}{1-3x}$ sur $\\left]-\\infty;\\dfrac13\\right[$.",
        "methodSteps": [
          "$u=1-3x$, $u'=-3$ : $f(x)=-\\dfrac13\\times\\dfrac{-3}{1-3x}=-\\dfrac13\\times\\dfrac{u'}{u}$.",
          "Une primitive de $\\dfrac{u'}{u}$ est $\\ln|u|$."
        ],
        "conclusion": "$F(x)=-\\dfrac13\\ln|1-3x|$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Dériver $\\ln u$",
          "stepTheme": "Dériver $\\ln u$",
          "stepBadge": "Dériver $\\ln u$",
          "paragraphText": "$(\\ln u)'=\\dfrac{u'}{u}$ : on divise la dérivée de l'intérieur par l'intérieur.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q1",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $\\ln(x^2+1)$ ?",
            "options": [
              "$\\dfrac{1}{x^2+1}$",
              "$\\dfrac{2x}{x^2+1}$",
              "$2x\\ln(x^2+1)$",
              "$\\dfrac{x^2+1}{2x}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$u=x^2+1$, $u'=2x$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un intérieur affine",
          "stepTheme": "Un intérieur affine",
          "stepBadge": "Un intérieur affine",
          "paragraphText": "$(\\ln(3x-2))'=\\dfrac{3}{3x-2}$ : ne pas oublier le $3$ au numérateur.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q2",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $\\ln(5-2x)$ sur $\\left]-\\infty;\\dfrac52\\right[$ ?",
            "options": [
              "$\\dfrac{1}{5-2x}$",
              "$\\dfrac{2}{5-2x}$",
              "$\\dfrac{-2}{5-2x}$",
              "$-2\\ln(5-2x)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$u'=-2$, donc $\\dfrac{-2}{5-2x}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Primitive de $\\dfrac{u'}{u}$",
          "stepTheme": "Primitive de $\\dfrac{u'}{u}$",
          "stepBadge": "Primitive de $\\dfrac{u'}{u}$",
          "paragraphText": "Une primitive de $\\dfrac{u'}{u}$ est $\\ln|u|$. Cas simple : une primitive de $\\dfrac1x$ est $\\ln|x|$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q3",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\dfrac{2x}{x^2+3}$ sur $\\mathbb{R}$ ?",
            "options": [
              "$\\ln(x^2+3)$",
              "$\\dfrac{x^2}{x^2+3}$",
              "$2\\ln(x^2+3)$",
              "$\\dfrac{1}{x^2+3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le numérateur $2x$ est exactement la dérivée de $x^2+3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Ajuster le coefficient",
          "stepTheme": "Ajuster le coefficient",
          "stepBadge": "Ajuster le coefficient",
          "paragraphText": "$\\dfrac{1}{1-3x}=-\\dfrac13\\times\\dfrac{-3}{1-3x}$, donc une primitive est $-\\dfrac13\\ln|1-3x|$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q4",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\dfrac{1}{1-3x}$ sur $\\left]-\\infty;\\dfrac13\\right[$ ?",
            "options": [
              "$\\ln|1-3x|$",
              "$-3\\ln|1-3x|$",
              "$\\ln|1-2x|$",
              "$-\\dfrac13\\ln|1-3x|$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\left(-\\dfrac13\\ln|1-3x|\\right)'=-\\dfrac13\\times\\dfrac{-3}{1-3x}=\\dfrac{1}{1-3x}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La tangente",
          "stepTheme": "La tangente",
          "stepBadge": "La tangente",
          "paragraphText": "$\\tan x=\\dfrac{\\sin x}{\\cos x}=-\\dfrac{(\\cos x)'}{\\cos x}$ : une primitive de $\\tan$ est $-\\ln|\\cos x|$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q5",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\dfrac{\\cos x}{\\sin x}$ sur $]0;\\pi[$ ?",
            "options": [
              "$\\ln(\\sin x)$",
              "$-\\ln(\\sin x)$",
              "$\\ln(\\cos x)$",
              "$\\dfrac{1}{\\sin x}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(\\sin x)'=\\cos x$ : c'est la forme $\\dfrac{u'}{u}$ avec $\\sin x>0$ sur $]0;\\pi[$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Décomposer avant",
          "stepTheme": "Décomposer avant",
          "stepBadge": "Décomposer avant",
          "paragraphText": "$\\dfrac{x+1}{x}=1+\\dfrac1x$ : une primitive sur $]0;+\\infty[$ est $x+\\ln x$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q6",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\dfrac{2x+3}{x}$ sur $]0;+\\infty[$ ?",
            "options": [
              "$2x+\\ln x$",
              "$x^2+3x\\ln x$",
              "$2x+3\\ln x$",
              "$\\ln(2x+3)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{2x+3}{x}=2+\\dfrac3x$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "La valeur absolue",
          "stepTheme": "La valeur absolue",
          "stepBadge": "La valeur absolue",
          "paragraphText": "Sur $]-\\infty;0[$, $\\ln x$ n'existe pas : la primitive de $\\dfrac1x$ y est $\\ln|x|=\\ln(-x)$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q7",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $\\dfrac{1}{x}$ sur $]-\\infty;0[$ ?",
            "options": [
              "$\\ln x$",
              "$\\ln(-x)$",
              "$-\\ln x$",
              "$-\\dfrac{1}{x^2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(\\ln(-x))'=\\dfrac{-1}{-x}=\\dfrac1x$, et $-x>0$ sur cet intervalle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q1",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $\\ln(x^2+1)$ ?",
          "options": [
            "$\\dfrac{1}{x^2+1}$",
            "$\\dfrac{2x}{x^2+1}$",
            "$2x\\ln(x^2+1)$",
            "$\\dfrac{x^2+1}{2x}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$u=x^2+1$, $u'=2x$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q2",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $\\ln(5-2x)$ sur $\\left]-\\infty;\\dfrac52\\right[$ ?",
          "options": [
            "$\\dfrac{1}{5-2x}$",
            "$\\dfrac{2}{5-2x}$",
            "$\\dfrac{-2}{5-2x}$",
            "$-2\\ln(5-2x)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$u'=-2$, donc $\\dfrac{-2}{5-2x}$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q3",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\dfrac{2x}{x^2+3}$ sur $\\mathbb{R}$ ?",
          "options": [
            "$\\ln(x^2+3)$",
            "$\\dfrac{x^2}{x^2+3}$",
            "$2\\ln(x^2+3)$",
            "$\\dfrac{1}{x^2+3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le numérateur $2x$ est exactement la dérivée de $x^2+3$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q4",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\dfrac{1}{1-3x}$ sur $\\left]-\\infty;\\dfrac13\\right[$ ?",
          "options": [
            "$\\ln|1-3x|$",
            "$-3\\ln|1-3x|$",
            "$\\ln|1-2x|$",
            "$-\\dfrac13\\ln|1-3x|$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\left(-\\dfrac13\\ln|1-3x|\\right)'=-\\dfrac13\\times\\dfrac{-3}{1-3x}=\\dfrac{1}{1-3x}$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q5",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\dfrac{\\cos x}{\\sin x}$ sur $]0;\\pi[$ ?",
          "options": [
            "$\\ln(\\sin x)$",
            "$-\\ln(\\sin x)$",
            "$\\ln(\\cos x)$",
            "$\\dfrac{1}{\\sin x}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(\\sin x)'=\\cos x$ : c'est la forme $\\dfrac{u'}{u}$ avec $\\sin x>0$ sur $]0;\\pi[$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q6",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\dfrac{2x+3}{x}$ sur $]0;+\\infty[$ ?",
          "options": [
            "$2x+\\ln x$",
            "$x^2+3x\\ln x$",
            "$2x+3\\ln x$",
            "$\\ln(2x+3)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{2x+3}{x}=2+\\dfrac3x$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p05_q7",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $\\dfrac{1}{x}$ sur $]-\\infty;0[$ ?",
          "options": [
            "$\\ln x$",
            "$\\ln(-x)$",
            "$-\\ln x$",
            "$-\\dfrac{1}{x^2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(\\ln(-x))'=\\dfrac{-1}{-x}=\\dfrac1x$, et $-x>0$ sur cet intervalle."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06",
      "order": 6,
      "title": "Étude et courbe de la fonction ln",
      "summary": "Tableau de variation, tangente $y=x-1$ et position de la courbe.",
      "conceptExplanation": "Tableau de variation :\n- $\\ln$ est définie sur $]0;+\\infty[$, $\\ln'(x)=\\dfrac1x>0$ ;\n- $\\ln$ croît de $-\\infty$ (en $0^+$) à $+\\infty$ (en $+\\infty$) ;\n- $\\ln$ est une bijection de $]0;+\\infty[$ sur $\\mathbb{R}$.\n\nPoints remarquables de la courbe :\n- $(1;0)$ : la courbe coupe l'axe des abscisses en $1$ ;\n- $(e;1)$.\n\nTangente en $1$ : $y=\\ln'(1)(x-1)+\\ln1=x-1$.\nLa courbe est toujours EN DESSOUS de cette tangente : pour tout $x>0$, $\\ln x\\leq x-1$.\n\nBranches infinies :\n- l'axe des ordonnées est asymptote verticale ($\\ln x\\to-\\infty$ en $0^+$) ;\n- $\\dfrac{\\ln x}{x}\\to0$ en $+\\infty$ : branche parabolique de direction l'axe des abscisses (la courbe monte, mais de plus en plus lentement).\n\nÉtude d'une fonction avec $\\ln$ : on suit le plan habituel (domaine, limites, dérivée, signe, tableau), en utilisant $(\\ln u)'=\\dfrac{u'}{u}$ et les croissances comparées.",
      "keyRule": "Courbe de $\\ln$ : passe par $(1;0)$ et $(e;1)$, asymptote verticale $x=0$, tangente $y=x-1$ en $1$, et $\\ln x\\leq x-1$.",
      "formulas": [
        {
          "name": "Tangente en 1",
          "formula": "y=x-1"
        },
        {
          "name": "Inégalité",
          "formula": "\\ln x\\leq x-1\\quad(x>0)"
        }
      ],
      "workedExample": {
        "title": "Étudier $f(x)=x-\\ln x$",
        "statement": "Étudie les variations de $f(x)=x-\\ln x$ sur $]0;+\\infty[$.",
        "methodSteps": [
          "$f'(x)=1-\\dfrac1x=\\dfrac{x-1}{x}$, du signe de $x-1$.",
          "$f$ décroît sur $]0;1]$ et croît sur $[1;+\\infty[$ ; minimum $f(1)=1$."
        ],
        "conclusion": "$f(x)\\geq1>0$ pour tout $x>0$ : la courbe de $\\ln$ ne coupe jamais la droite $y=x$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le tableau de variation",
          "stepTheme": "Le tableau de variation",
          "stepBadge": "Le tableau de variation",
          "paragraphText": "$\\ln$ croît de $-\\infty$ à $+\\infty$ sur $]0;+\\infty[$ : tout réel $k$ a un unique antécédent, $e^k$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q1",
            "type": "mcq",
            "prompt": "Combien de solutions l'équation $\\ln x=-5$ a-t-elle ?",
            "options": [
              "Aucune",
              "Deux",
              "Une infinité",
              "Une seule"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\ln$ est une bijection de $]0;+\\infty[$ sur $\\mathbb{R}$ : $x=e^{-5}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deux points à placer",
          "stepTheme": "Deux points à placer",
          "stepBadge": "Deux points à placer",
          "paragraphText": "La courbe passe par $(1;0)$ et par $(e;1)$, avec $e\\approx2{,}72$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q2",
            "type": "mcq",
            "prompt": "En quel point la courbe de $\\ln$ coupe-t-elle l'axe des abscisses ?",
            "options": [
              "$(0;0)$",
              "$(1;0)$",
              "$(e;0)$",
              "$(0;1)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln x=0\\iff x=1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La tangente en $1$",
          "stepTheme": "La tangente en $1$",
          "stepBadge": "La tangente en $1$",
          "paragraphText": "$y=\\ln'(1)(x-1)+\\ln1=1\\times(x-1)+0=x-1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q3",
            "type": "mcq",
            "prompt": "Quelle est l'équation de la tangente à la courbe de $\\ln$ au point d'abscisse $e$ ?",
            "options": [
              "$y=\\dfrac{x}{e}$",
              "$y=x-e$",
              "$y=ex-1$",
              "$y=x-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$y=\\dfrac1e(x-e)+1=\\dfrac xe$ : elle passe par l'origine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Sous la tangente",
          "stepTheme": "Sous la tangente",
          "stepBadge": "Sous la tangente",
          "paragraphText": "Pour tout $x>0$, $\\ln x\\leq x-1$ : la courbe est sous sa tangente en $1$, avec égalité seulement en $x=1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q4",
            "type": "mcq",
            "prompt": "Grâce à $\\ln x\\leq x-1$, que peut-on dire de $\\ln3$ ?",
            "options": [
              "$\\ln3\\geq2$",
              "$\\ln3=2$",
              "$\\ln3\\leq2$",
              "$\\ln3<0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\ln3\\leq3-1=2$ (en fait $\\ln3\\approx1{,}10$)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les branches infinies",
          "stepTheme": "Les branches infinies",
          "stepBadge": "Les branches infinies",
          "paragraphText": "Asymptote verticale $x=0$ ; en $+\\infty$, $\\dfrac{\\ln x}{x}\\to0$ : branche parabolique de direction l'axe des abscisses.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q5",
            "type": "mcq",
            "prompt": "Quelle droite est asymptote à la courbe de $\\ln$ ?",
            "options": [
              "$y=0$",
              "$x=0$",
              "$y=x-1$",
              "$x=1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln x\\to-\\infty$ quand $x\\to0^+$ : asymptote verticale $x=0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Étudier $x-\\ln x$",
          "stepTheme": "Étudier $x-\\ln x$",
          "stepBadge": "Étudier $x-\\ln x$",
          "paragraphText": "$f(x)=x-\\ln x$ : $f'(x)=\\dfrac{x-1}{x}$, donc $f$ décroît sur $]0;1]$, croît sur $[1;+\\infty[$, avec un minimum $f(1)=1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q6",
            "type": "mcq",
            "prompt": "Quel est le minimum de $f(x)=x-\\ln x$ sur $]0;+\\infty[$ ?",
            "options": [
              "$1$, atteint en $1$",
              "$0$, atteint en $1$",
              "$e-1$, atteint en $e$",
              "Il n'y en a pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$f(1)=1-\\ln1=1$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Croissante mais lente",
          "stepTheme": "Croissante mais lente",
          "stepBadge": "Croissante mais lente",
          "paragraphText": "$\\ln x$ tend vers $+\\infty$, mais très lentement : $\\ln1000\\approx6{,}9$. Il n'y a PAS d'asymptote horizontale.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q7",
            "type": "mcq",
            "prompt": "« La courbe de $\\ln$ a une asymptote horizontale en $+\\infty$. » C'est :",
            "options": [
              "Vrai, $y=7$",
              "Vrai, $y=1$",
              "Faux, $\\ln x\\to+\\infty$",
              "Faux, $\\ln x\\to0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\ln x$ dépasse tout nombre : $\\ln x>100$ dès que $x>e^{100}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q1",
          "type": "mcq",
          "prompt": "Combien de solutions l'équation $\\ln x=-5$ a-t-elle ?",
          "options": [
            "Aucune",
            "Deux",
            "Une infinité",
            "Une seule"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\ln$ est une bijection de $]0;+\\infty[$ sur $\\mathbb{R}$ : $x=e^{-5}$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q2",
          "type": "mcq",
          "prompt": "En quel point la courbe de $\\ln$ coupe-t-elle l'axe des abscisses ?",
          "options": [
            "$(0;0)$",
            "$(1;0)$",
            "$(e;0)$",
            "$(0;1)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln x=0\\iff x=1$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q3",
          "type": "mcq",
          "prompt": "Quelle est l'équation de la tangente à la courbe de $\\ln$ au point d'abscisse $e$ ?",
          "options": [
            "$y=\\dfrac{x}{e}$",
            "$y=x-e$",
            "$y=ex-1$",
            "$y=x-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$y=\\dfrac1e(x-e)+1=\\dfrac xe$ : elle passe par l'origine."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q4",
          "type": "mcq",
          "prompt": "Grâce à $\\ln x\\leq x-1$, que peut-on dire de $\\ln3$ ?",
          "options": [
            "$\\ln3\\geq2$",
            "$\\ln3=2$",
            "$\\ln3\\leq2$",
            "$\\ln3<0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\ln3\\leq3-1=2$ (en fait $\\ln3\\approx1{,}10$)."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q5",
          "type": "mcq",
          "prompt": "Quelle droite est asymptote à la courbe de $\\ln$ ?",
          "options": [
            "$y=0$",
            "$x=0$",
            "$y=x-1$",
            "$x=1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln x\\to-\\infty$ quand $x\\to0^+$ : asymptote verticale $x=0$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q6",
          "type": "mcq",
          "prompt": "Quel est le minimum de $f(x)=x-\\ln x$ sur $]0;+\\infty[$ ?",
          "options": [
            "$1$, atteint en $1$",
            "$0$, atteint en $1$",
            "$e-1$, atteint en $e$",
            "Il n'y en a pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$f(1)=1-\\ln1=1$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p06_q7",
          "type": "mcq",
          "prompt": "« La courbe de $\\ln$ a une asymptote horizontale en $+\\infty$. » C'est :",
          "options": [
            "Vrai, $y=7$",
            "Vrai, $y=1$",
            "Faux, $\\ln x\\to+\\infty$",
            "Faux, $\\ln x\\to0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\ln x$ dépasse tout nombre : $\\ln x>100$ dès que $x>e^{100}$."
        }
      ]
    },
    {
      "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07",
      "order": 7,
      "title": "Situations : recettes et nombre d'essais",
      "summary": "Utiliser $\\ln$ pour optimiser et pour trouver un exposant.",
      "conceptExplanation": "Situation 1 (recettes) : une coopérative de jeunes lance un nouveau produit. Ses recettes mensuelles, en millions de F, au $x$-ième mois ($x\\geq1$), sont modélisées par\n$$r(x)=3x-x\\ln\\dfrac x2.$$\nÀ partir de quel mois les recettes vont-elles baisser ?\n- $r'(x)=3-\\left(\\ln\\dfrac x2+x\\times\\dfrac1x\\right)=2-\\ln\\dfrac x2$ ;\n- $r'(x)>0\\iff\\ln\\dfrac x2<2\\iff\\dfrac x2<e^2\\iff x<2e^2\\approx14{,}78$ ;\n- $r$ croît jusqu'à $x=2e^2$, puis décroît : les recettes baissent à partir du 15e mois.\n\nSituation 2 (nombre d'essais) : un élève réussit un exercice difficile avec une probabilité $0{,}675$ à chaque essai (essais indépendants). La probabilité d'échouer $n$ fois de suite est $0{,}325^n$, donc la probabilité de réussir au moins une fois est $1-0{,}325^n$. Combien d'essais pour dépasser $0{,}98$ ?\n- $1-0{,}325^n>0{,}98\\iff0{,}325^n<0{,}02$ ;\n- $n\\ln0{,}325<\\ln0{,}02$ ;\n- $\\ln0{,}325<0$, donc on change de sens : $n>\\dfrac{\\ln0{,}02}{\\ln0{,}325}\\approx3{,}48$ ;\n- il faut au moins $4$ essais.",
      "keyRule": "Pour une inconnue en exposant, on applique $\\ln$ aux deux membres ; si on divise par un $\\ln$ négatif, on change le sens.",
      "formulas": [
        {
          "name": "Exposant",
          "formula": "q^n<a\\iff n\\ln q<\\ln a"
        }
      ],
      "workedExample": {
        "title": "La baisse des recettes",
        "statement": "$r(x)=3x-x\\ln\\dfrac x2$. Résous $r'(x)<0$.",
        "methodSteps": [
          "$r'(x)=2-\\ln\\dfrac x2$.",
          "$r'(x)<0\\iff\\ln\\dfrac x2>2\\iff\\dfrac x2>e^2\\iff x>2e^2$.",
          "$2e^2\\approx14{,}78$."
        ],
        "conclusion": "Les recettes baissent à partir du 15e mois."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Dériver $x\\ln\\dfrac x2$",
          "stepTheme": "Dériver $x\\ln\\dfrac x2$",
          "stepBadge": "Dériver $x\\ln\\dfrac x2$",
          "paragraphText": "Produit : $\\left(x\\ln\\dfrac x2\\right)'=1\\times\\ln\\dfrac x2+x\\times\\dfrac{1/2}{x/2}=\\ln\\dfrac x2+1$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q1",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $r(x)=3x-x\\ln\\dfrac x2$ ?",
            "options": [
              "$3-\\dfrac1x$",
              "$2-\\ln\\dfrac x2$",
              "$3-\\ln\\dfrac x2$",
              "$4-\\ln\\dfrac x2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$r'(x)=3-\\left(\\ln\\dfrac x2+1\\right)=2-\\ln\\dfrac x2$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Quand $r'$ s'annule",
          "stepTheme": "Quand $r'$ s'annule",
          "stepBadge": "Quand $r'$ s'annule",
          "paragraphText": "$2-\\ln\\dfrac x2=0\\iff\\ln\\dfrac x2=2\\iff\\dfrac x2=e^2\\iff x=2e^2$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q2",
            "type": "mcq",
            "prompt": "Que vaut $2e^2$ environ ?",
            "options": [
              "$5{,}44$",
              "$7{,}39$",
              "$14{,}78$",
              "$29{,}56$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$e^2\\approx7{,}39$, donc $2e^2\\approx14{,}78$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La baisse",
          "stepTheme": "La baisse",
          "stepBadge": "La baisse",
          "paragraphText": "$r'>0$ avant $2e^2$, $r'<0$ après : $r$ est maximale vers $14{,}78$ mois, puis baisse.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q3",
            "type": "mcq",
            "prompt": "À partir de quel mois les recettes baissent-elles ?",
            "options": [
              "Le 15e mois",
              "Le 14e mois",
              "Le 7e mois",
              "Le 2e mois"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$14{,}78$ est dépassé à partir de $x=15$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Traduire l'énoncé",
          "stepTheme": "Traduire l'énoncé",
          "stepBadge": "Traduire l'énoncé",
          "paragraphText": "« Au moins un succès » est le contraire de « $n$ échecs » : $P=1-0{,}325^n$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q4",
            "type": "mcq",
            "prompt": "On veut $1-0{,}325^n>0{,}98$. À quoi cela revient-il ?",
            "options": [
              "$0{,}325^n>0{,}02$",
              "$0{,}325^n<0{,}98$",
              "$n>0{,}98$",
              "$0{,}325^n<0{,}02$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On isole $0{,}325^n$ : $0{,}325^n<1-0{,}98=0{,}02$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Appliquer $\\ln$",
          "stepTheme": "Appliquer $\\ln$",
          "stepBadge": "Appliquer $\\ln$",
          "paragraphText": "$\\ln$ est croissante : $0{,}325^n<0{,}02\\iff n\\ln0{,}325<\\ln0{,}02$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q5",
            "type": "mcq",
            "prompt": "Quel est le signe de $\\ln0{,}325$ ?",
            "options": [
              "Positif",
              "Négatif",
              "Nul",
              "Il n'existe pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$0<0{,}325<1$, donc $\\ln0{,}325<0$ (environ $-1{,}12$)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le nombre d'essais",
          "stepTheme": "Le nombre d'essais",
          "stepBadge": "Le nombre d'essais",
          "paragraphText": "En divisant par $\\ln0{,}325<0$ : $n>\\dfrac{\\ln0{,}02}{\\ln0{,}325}\\approx\\dfrac{-3{,}91}{-1{,}12}\\approx3{,}48$.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q6",
            "type": "mcq",
            "prompt": "Combien d'essais faut-il au minimum ?",
            "options": [
              "$3$",
              "$48$",
              "$4$",
              "$2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$n$ est un entier strictement supérieur à $3{,}48$ : $n=4$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Vérifier le résultat",
          "stepTheme": "Vérifier le résultat",
          "stepBadge": "Vérifier le résultat",
          "paragraphText": "On contrôle : $0{,}325^3\\approx0{,}034>0{,}02$ (pas assez), mais $0{,}325^4\\approx0{,}011<0{,}02$. Donc $4$ essais.",
          "exercise": {
            "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q7",
            "type": "mcq",
            "prompt": "Un élève oublie de changer le sens et écrit $n<3{,}48$. Quelle est son erreur ?",
            "options": [
              "Il a divisé par un nombre négatif sans changer le sens",
              "Il a mal calculé $\\ln0{,}02$",
              "Il fallait multiplier par $0{,}325$",
              "Il n'y a pas d'erreur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Diviser par $\\ln0{,}325<0$ inverse l'inégalité."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q1",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $r(x)=3x-x\\ln\\dfrac x2$ ?",
          "options": [
            "$3-\\dfrac1x$",
            "$2-\\ln\\dfrac x2$",
            "$3-\\ln\\dfrac x2$",
            "$4-\\ln\\dfrac x2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$r'(x)=3-\\left(\\ln\\dfrac x2+1\\right)=2-\\ln\\dfrac x2$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q2",
          "type": "mcq",
          "prompt": "Que vaut $2e^2$ environ ?",
          "options": [
            "$5{,}44$",
            "$7{,}39$",
            "$14{,}78$",
            "$29{,}56$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$e^2\\approx7{,}39$, donc $2e^2\\approx14{,}78$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q3",
          "type": "mcq",
          "prompt": "À partir de quel mois les recettes baissent-elles ?",
          "options": [
            "Le 15e mois",
            "Le 14e mois",
            "Le 7e mois",
            "Le 2e mois"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$14{,}78$ est dépassé à partir de $x=15$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q4",
          "type": "mcq",
          "prompt": "On veut $1-0{,}325^n>0{,}98$. À quoi cela revient-il ?",
          "options": [
            "$0{,}325^n>0{,}02$",
            "$0{,}325^n<0{,}98$",
            "$n>0{,}98$",
            "$0{,}325^n<0{,}02$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On isole $0{,}325^n$ : $0{,}325^n<1-0{,}98=0{,}02$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q5",
          "type": "mcq",
          "prompt": "Quel est le signe de $\\ln0{,}325$ ?",
          "options": [
            "Positif",
            "Négatif",
            "Nul",
            "Il n'existe pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$0<0{,}325<1$, donc $\\ln0{,}325<0$ (environ $-1{,}12$)."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q6",
          "type": "mcq",
          "prompt": "Combien d'essais faut-il au minimum ?",
          "options": [
            "$3$",
            "$48$",
            "$4$",
            "$2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$n$ est un entier strictement supérieur à $3{,}48$ : $n=4$."
        },
        {
          "id": "terminale_d_maths_numerique_l05_logarithme_neperien_p07_q7",
          "type": "mcq",
          "prompt": "Un élève oublie de changer le sens et écrit $n<3{,}48$. Quelle est son erreur ?",
          "options": [
            "Il a divisé par un nombre négatif sans changer le sens",
            "Il a mal calculé $\\ln0{,}02$",
            "Il fallait multiplier par $0{,}325$",
            "Il n'y a pas d'erreur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Diviser par $\\ln0{,}325<0$ inverse l'inégalité."
        }
      ]
    }
  ]
};
