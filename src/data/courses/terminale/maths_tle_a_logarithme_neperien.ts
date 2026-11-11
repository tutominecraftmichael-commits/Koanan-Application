import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Programme de Terminale A fourni par l'équipe KONAN (pas de PDF officiel), vérifié et corrigé » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_A_L03_LOGARITHME_NEPERIEN: CurriculumChapter = {
  "id": "terminale_a_maths_numerique_l03_logarithme_neperien",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 3,
  "title": "Leçon 3 : La fonction logarithme népérien",
  "summary": "Définition et signe de ln, propriétés algébriques, limites, dérivée de ln u, équations et inéquations.",
  "officialVolumeHours": 12,
  "contentVersion": 2,
  "source": "Programme de Terminale A fourni par l'équipe KONAN (pas de PDF officiel), vérifié et corrigé",
  "points": [
    {
      "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01",
      "order": 1,
      "title": "La fonction ln : définition et signe",
      "summary": "Ensemble de définition, valeurs remarquables $\\ln1=0$ et $\\ln e=1$, signe de $\\ln x$.",
      "conceptExplanation": "La fonction logarithme népérien, notée $\\ln$, est définie uniquement sur $]0;+\\infty[$ : $\\ln x$ n'existe que pour $x>0$. Ainsi $\\ln0$ et $\\ln(-5)$ n'existent pas.\n\nValeurs remarquables : $\\ln1=0$ et $\\ln e=1$, avec $e\\approx2{,}718$.\n\nSigne :\n- sur $]0;1[$, $\\ln x<0$ ;\n- $\\ln1=0$ ;\n- sur $]1;+\\infty[$, $\\ln x>0$.\n\nEnsemble de définition de $\\ln u(x)$ : il faut $u(x)>0$. Par exemple $\\ln(x-2)$ existe pour $x>2$, et $\\ln(3-x)$ pour $x<3$.\n\nLien avec l'exponentielle : $\\ln(e^a)=a$ pour tout réel $a$ ; par exemple $\\ln(e^3)=3$.",
      "keyRule": "$\\ln$ est définie sur $]0;+\\infty[$ ; $\\ln1=0$, $\\ln e=1$ ; $\\ln x<0$ sur $]0;1[$ et $\\ln x>0$ sur $]1;+\\infty[$.",
      "formulas": [
        {
          "name": "Valeurs remarquables",
          "formula": "\\ln1=0\\quad\\ln e=1"
        }
      ],
      "workedExample": {
        "title": "Ensemble de définition",
        "statement": "Où la fonction $f(x)=\\ln(x-2)$ est-elle définie ?",
        "methodSteps": [
          "Il faut $x-2>0$.",
          "Donc $x>2$."
        ],
        "conclusion": "$D_f=]2;+\\infty[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Où ln existe",
          "stepTheme": "Où ln existe",
          "stepBadge": "Où ln existe",
          "paragraphText": "$\\ln x$ n'existe que si $x>0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q1",
            "type": "mcq",
            "prompt": "Sur quel intervalle la fonction $x\\mapsto\\ln x$ est-elle définie ?",
            "options": [
              "$\\mathbb{R}$",
              "$[0;+\\infty[$",
              "$]0;+\\infty[$",
              "$]1;+\\infty[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$0$ est exclu : $\\ln0$ n'existe pas."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deux valeurs à connaître",
          "stepTheme": "Deux valeurs à connaître",
          "stepBadge": "Deux valeurs à connaître",
          "paragraphText": "$\\ln1=0$ et $\\ln e=1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q2",
            "type": "mcq",
            "prompt": "Que valent respectivement $\\ln1$ et $\\ln e$, où $e\\approx2{,}718$ ?",
            "options": [
              "$\\ln1=1$ et $\\ln e=0$",
              "$\\ln1=0$ et $\\ln e=1$",
              "$\\ln1=0$ et $\\ln e=e$",
              "$\\ln1=e$ et $\\ln e=1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les deux valeurs remarquables de $\\ln$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le signe de ln",
          "stepTheme": "Le signe de ln",
          "stepBadge": "Le signe de ln",
          "paragraphText": "$\\ln x<0$ pour $0<x<1$ et $\\ln x>0$ pour $x>1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q3",
            "type": "mcq",
            "prompt": "Sur quel intervalle a-t-on $\\ln x<0$ ?",
            "options": [
              "$]-\\infty;0[$",
              "$]1;+\\infty[$",
              "Jamais : $\\ln x$ est toujours positif",
              "$]0;1[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Entre $0$ et $1$ (exclus), le logarithme est négatif."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Domaine de ln(x − 2)",
          "stepTheme": "Domaine de ln(x − 2)",
          "stepBadge": "Domaine de ln(x − 2)",
          "paragraphText": "$\\ln(x-2)$ existe si $x-2>0$, soit $x>2$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de $f(x)=\\ln(x-2)$ ?",
            "options": [
              "$]2;+\\infty[$",
              "$]0;+\\infty[$",
              "$]-2;+\\infty[$",
              "$[2;+\\infty[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On exige $x-2>0$ ; $x=2$ est exclu."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Domaine de ln(3 − x)",
          "stepTheme": "Domaine de ln(3 − x)",
          "stepBadge": "Domaine de ln(3 − x)",
          "paragraphText": "$\\ln(3-x)$ existe si $3-x>0$, soit $x<3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q5",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de définition de $g(x)=\\ln(3-x)$ ?",
            "options": [
              "$]3;+\\infty[$",
              "$]0;3[$",
              "$]-\\infty;3[$",
              "$\\mathbb{R}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$3-x>0\\iff x<3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ce qui n'existe pas",
          "stepTheme": "Ce qui n'existe pas",
          "stepBadge": "Ce qui n'existe pas",
          "paragraphText": "$\\ln$ d'un nombre négatif ou nul n'existe pas ; $\\ln(0{,}5)$ existe et il est négatif.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q6",
            "type": "mcq",
            "prompt": "Parmi ces nombres, lequel existe ?",
            "options": [
              "$\\ln(-5)$",
              "$\\ln0$",
              "$\\ln(-1)$",
              "$\\ln(0{,}5)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Seul $0{,}5$ est strictement positif ; $\\ln(0{,}5)<0$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "Le nombre e",
          "stepTheme": "Le nombre e",
          "stepBadge": "Le nombre e",
          "paragraphText": "$e$ est le nombre tel que $\\ln e=1$ ; $e\\approx2{,}718$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q7",
            "type": "mcq",
            "prompt": "Quelle est une valeur approchée du nombre $e$, défini par $\\ln e=1$ ?",
            "options": [
              "$3{,}14$",
              "$2{,}718$",
              "$1{,}414$",
              "$0{,}693$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$e\\approx2{,}718$ ; $3{,}14$ est $\\pi$ et $0{,}693$ est $\\ln2$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "ln de e puissance",
          "stepTheme": "ln de e puissance",
          "stepBadge": "ln de e puissance",
          "paragraphText": "$\\ln(e^a)=a$ : le logarithme « annule » l'exponentielle.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q8",
            "type": "mcq",
            "prompt": "Que vaut l'expression simplifiée $\\ln(e^3)$ ?",
            "options": [
              "$e^3$",
              "$1$",
              "$3$",
              "$3e$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\ln(e^3)=3\\ln e=3\\times1=3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q1",
          "type": "mcq",
          "prompt": "Sur quel intervalle la fonction $x\\mapsto\\ln x$ est-elle définie ?",
          "options": [
            "$\\mathbb{R}$",
            "$[0;+\\infty[$",
            "$]0;+\\infty[$",
            "$]1;+\\infty[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$0$ est exclu : $\\ln0$ n'existe pas."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q2",
          "type": "mcq",
          "prompt": "Que valent respectivement $\\ln1$ et $\\ln e$, où $e\\approx2{,}718$ ?",
          "options": [
            "$\\ln1=1$ et $\\ln e=0$",
            "$\\ln1=0$ et $\\ln e=1$",
            "$\\ln1=0$ et $\\ln e=e$",
            "$\\ln1=e$ et $\\ln e=1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les deux valeurs remarquables de $\\ln$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q3",
          "type": "mcq",
          "prompt": "Sur quel intervalle a-t-on $\\ln x<0$ ?",
          "options": [
            "$]-\\infty;0[$",
            "$]1;+\\infty[$",
            "Jamais : $\\ln x$ est toujours positif",
            "$]0;1[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Entre $0$ et $1$ (exclus), le logarithme est négatif."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de $f(x)=\\ln(x-2)$ ?",
          "options": [
            "$]2;+\\infty[$",
            "$]0;+\\infty[$",
            "$]-2;+\\infty[$",
            "$[2;+\\infty[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On exige $x-2>0$ ; $x=2$ est exclu."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de définition de $g(x)=\\ln(3-x)$ ?",
          "options": [
            "$]3;+\\infty[$",
            "$]0;3[$",
            "$]-\\infty;3[$",
            "$\\mathbb{R}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$3-x>0\\iff x<3$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q6",
          "type": "mcq",
          "prompt": "Parmi ces nombres, lequel existe ?",
          "options": [
            "$\\ln(-5)$",
            "$\\ln0$",
            "$\\ln(-1)$",
            "$\\ln(0{,}5)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Seul $0{,}5$ est strictement positif ; $\\ln(0{,}5)<0$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q7",
          "type": "mcq",
          "prompt": "Quelle est une valeur approchée du nombre $e$, défini par $\\ln e=1$ ?",
          "options": [
            "$3{,}14$",
            "$2{,}718$",
            "$1{,}414$",
            "$0{,}693$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$e\\approx2{,}718$ ; $3{,}14$ est $\\pi$ et $0{,}693$ est $\\ln2$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p01_q8",
          "type": "mcq",
          "prompt": "Que vaut l'expression simplifiée $\\ln(e^3)$ ?",
          "options": [
            "$e^3$",
            "$1$",
            "$3$",
            "$3e$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\ln(e^3)=3\\ln e=3\\times1=3$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02",
      "order": 2,
      "title": "Propriétés algébriques de ln",
      "summary": "Produit, quotient, inverse, puissance et racine carrée.",
      "conceptExplanation": "Pour tous réels $a>0$ et $b>0$, et tout entier $n$ :\n- produit : $\\ln(ab)=\\ln a+\\ln b$ ;\n- inverse : $\\ln\\left(\\dfrac{1}{b}\\right)=-\\ln b$ ;\n- quotient : $\\ln\\left(\\dfrac{a}{b}\\right)=\\ln a-\\ln b$ ;\n- puissance : $\\ln(a^n)=n\\ln a$ ;\n- racine carrée : $\\ln\\sqrt{a}=\\dfrac{1}{2}\\ln a$.\n\nExemples : $\\ln6=\\ln2+\\ln3$ ; $\\ln8-\\ln2=\\ln4=2\\ln2$ ; $\\ln\\left(\\dfrac{1}{7}\\right)=-\\ln7$.\n\nAttention : $\\ln(a+b)$ ne se transforme pas ! $\\ln(2+3)=\\ln5$, alors que $\\ln2+\\ln3=\\ln6$.",
      "keyRule": "$\\ln(ab)=\\ln a+\\ln b$ ; $\\ln\\dfrac{a}{b}=\\ln a-\\ln b$ ; $\\ln(a^n)=n\\ln a$. Jamais de formule pour $\\ln(a+b)$.",
      "formulas": [
        {
          "name": "Produit",
          "formula": "\\ln(ab)=\\ln a+\\ln b"
        },
        {
          "name": "Quotient",
          "formula": "\\ln\\dfrac{a}{b}=\\ln a-\\ln b"
        },
        {
          "name": "Puissance",
          "formula": "\\ln(a^n)=n\\ln a"
        }
      ],
      "workedExample": {
        "title": "Simplifier une expression",
        "statement": "Écris $A=\\ln8-\\ln2$ en fonction de $\\ln2$.",
        "methodSteps": [
          "$A=\\ln\\dfrac{8}{2}=\\ln4$.",
          "$4=2^2$, donc $\\ln4=2\\ln2$."
        ],
        "conclusion": "$A=2\\ln2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le logarithme d'un produit",
          "stepTheme": "Le logarithme d'un produit",
          "stepBadge": "Le logarithme d'un produit",
          "paragraphText": "$\\ln(ab)=\\ln a+\\ln b$ : le produit devient une somme.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q1",
            "type": "mcq",
            "prompt": "Pour tous réels $a>0$ et $b>0$, que vaut $\\ln(a\\times b)$ ?",
            "options": [
              "$\\ln a\\times\\ln b$",
              "$\\ln a+\\ln b$",
              "$\\ln(a+b)$",
              "$\\ln a-\\ln b$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la propriété fondamentale de $\\ln$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le logarithme d'un quotient",
          "stepTheme": "Le logarithme d'un quotient",
          "stepBadge": "Le logarithme d'un quotient",
          "paragraphText": "$\\ln\\dfrac{a}{b}=\\ln a-\\ln b$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q2",
            "type": "mcq",
            "prompt": "Pour tous réels $a>0$ et $b>0$, à quoi est égal $\\ln\\left(\\dfrac{a}{b}\\right)$ ?",
            "options": [
              "$\\dfrac{\\ln a}{\\ln b}$",
              "$\\ln a+\\ln b$",
              "$\\ln a-\\ln b$",
              "$\\ln(a-b)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le quotient devient une différence."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'inverse",
          "stepTheme": "L'inverse",
          "stepBadge": "L'inverse",
          "paragraphText": "$\\ln\\dfrac{1}{b}=-\\ln b$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q3",
            "type": "mcq",
            "prompt": "Comment s'écrit plus simplement $\\ln\\left(\\dfrac{1}{7}\\right)$ ?",
            "options": [
              "$\\dfrac{1}{\\ln7}$",
              "$-\\ln7$",
              "$\\ln(-7)$",
              "$7$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln\\dfrac{1}{7}=\\ln1-\\ln7=0-\\ln7$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La puissance",
          "stepTheme": "La puissance",
          "stepBadge": "La puissance",
          "paragraphText": "$\\ln(a^n)=n\\ln a$ : l'exposant passe devant.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q4",
            "type": "mcq",
            "prompt": "Comment s'écrit plus simplement $\\ln(2^5)$ ?",
            "options": [
              "$5\\ln2$",
              "$(\\ln2)^5$",
              "$\\ln10$",
              "$2\\ln5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'exposant $5$ descend devant le logarithme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Calculer avec des valeurs approchées",
          "stepTheme": "Calculer avec des valeurs approchées",
          "stepBadge": "Calculer avec des valeurs approchées",
          "paragraphText": "$\\ln6=\\ln(2\\times3)=\\ln2+\\ln3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q5",
            "type": "mcq",
            "prompt": "On donne $\\ln2\\approx0{,}69$ et $\\ln3\\approx1{,}10$. Quelle est une valeur approchée de $\\ln6$ ?",
            "options": [
              "$0{,}76$",
              "$2{,}07$",
              "$1{,}79$",
              "$0{,}41$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\ln6=\\ln2+\\ln3\\approx0{,}69+1{,}10=1{,}79$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La racine carrée",
          "stepTheme": "La racine carrée",
          "stepBadge": "La racine carrée",
          "paragraphText": "$\\ln\\sqrt{a}=\\dfrac{1}{2}\\ln a$, car $\\sqrt{a}=a^{\\frac{1}{2}}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q6",
            "type": "mcq",
            "prompt": "Comment s'écrit plus simplement $\\ln\\sqrt{5}$ ?",
            "options": [
              "$\\sqrt{\\ln5}$",
              "$2\\ln5$",
              "$\\ln\\dfrac{5}{2}$",
              "$\\dfrac{1}{2}\\ln5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\ln\\sqrt{5}=\\dfrac{1}{2}\\ln5$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Simplifier une expression",
          "stepTheme": "Simplifier une expression",
          "stepBadge": "Simplifier une expression",
          "paragraphText": "$\\ln8-\\ln2=\\ln\\dfrac{8}{2}=\\ln4=2\\ln2$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q7",
            "type": "mcq",
            "prompt": "Simplifie $A=\\ln8-\\ln2$ en fonction de $\\ln2$.",
            "options": [
              "$A=2\\ln2$",
              "$A=\\ln6$",
              "$A=4$",
              "$A=3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\ln8-\\ln2=\\ln4=\\ln(2^2)=2\\ln2$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Pas de formule pour une somme",
          "stepTheme": "Pas de formule pour une somme",
          "stepBadge": "Pas de formule pour une somme",
          "paragraphText": "$\\ln(a+b)\\neq\\ln a+\\ln b$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q8",
            "type": "mcq",
            "prompt": "Un élève écrit : $\\ln(2+3)=\\ln2+\\ln3$. A-t-il raison ?",
            "options": [
              "Oui, c'est la propriété du produit",
              "Oui, car $2+3=5$",
              "Non : $\\ln2+\\ln3=\\ln6$, alors que $\\ln(2+3)=\\ln5$",
              "Non : $\\ln(2+3)=\\ln2\\times\\ln3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La somme des logarithmes est le logarithme du produit, pas de la somme."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q1",
          "type": "mcq",
          "prompt": "Pour tous réels $a>0$ et $b>0$, que vaut $\\ln(a\\times b)$ ?",
          "options": [
            "$\\ln a\\times\\ln b$",
            "$\\ln a+\\ln b$",
            "$\\ln(a+b)$",
            "$\\ln a-\\ln b$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la propriété fondamentale de $\\ln$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q2",
          "type": "mcq",
          "prompt": "Pour tous réels $a>0$ et $b>0$, à quoi est égal $\\ln\\left(\\dfrac{a}{b}\\right)$ ?",
          "options": [
            "$\\dfrac{\\ln a}{\\ln b}$",
            "$\\ln a+\\ln b$",
            "$\\ln a-\\ln b$",
            "$\\ln(a-b)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le quotient devient une différence."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q3",
          "type": "mcq",
          "prompt": "Comment s'écrit plus simplement $\\ln\\left(\\dfrac{1}{7}\\right)$ ?",
          "options": [
            "$\\dfrac{1}{\\ln7}$",
            "$-\\ln7$",
            "$\\ln(-7)$",
            "$7$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln\\dfrac{1}{7}=\\ln1-\\ln7=0-\\ln7$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q4",
          "type": "mcq",
          "prompt": "Comment s'écrit plus simplement $\\ln(2^5)$ ?",
          "options": [
            "$5\\ln2$",
            "$(\\ln2)^5$",
            "$\\ln10$",
            "$2\\ln5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'exposant $5$ descend devant le logarithme."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q5",
          "type": "mcq",
          "prompt": "On donne $\\ln2\\approx0{,}69$ et $\\ln3\\approx1{,}10$. Quelle est une valeur approchée de $\\ln6$ ?",
          "options": [
            "$0{,}76$",
            "$2{,}07$",
            "$1{,}79$",
            "$0{,}41$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\ln6=\\ln2+\\ln3\\approx0{,}69+1{,}10=1{,}79$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q6",
          "type": "mcq",
          "prompt": "Comment s'écrit plus simplement $\\ln\\sqrt{5}$ ?",
          "options": [
            "$\\sqrt{\\ln5}$",
            "$2\\ln5$",
            "$\\ln\\dfrac{5}{2}$",
            "$\\dfrac{1}{2}\\ln5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\ln\\sqrt{5}=\\dfrac{1}{2}\\ln5$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q7",
          "type": "mcq",
          "prompt": "Simplifie $A=\\ln8-\\ln2$ en fonction de $\\ln2$.",
          "options": [
            "$A=2\\ln2$",
            "$A=\\ln6$",
            "$A=4$",
            "$A=3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\ln8-\\ln2=\\ln4=\\ln(2^2)=2\\ln2$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p02_q8",
          "type": "mcq",
          "prompt": "Un élève écrit : $\\ln(2+3)=\\ln2+\\ln3$. A-t-il raison ?",
          "options": [
            "Oui, c'est la propriété du produit",
            "Oui, car $2+3=5$",
            "Non : $\\ln2+\\ln3=\\ln6$, alors que $\\ln(2+3)=\\ln5$",
            "Non : $\\ln(2+3)=\\ln2\\times\\ln3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La somme des logarithmes est le logarithme du produit, pas de la somme."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03",
      "order": 3,
      "title": "Limites, dérivée et variations de ln",
      "summary": "Les limites de référence, la dérivée $\\dfrac{1}{x}$, la dérivée de $\\ln u$ et une étude de variations.",
      "conceptExplanation": "Limites de référence :\n- $\\lim\\limits_{x\\to0^+}\\ln x=-\\infty$ : l'axe des ordonnées est asymptote verticale à la courbe de $\\ln$ ;\n- $\\lim\\limits_{x\\to+\\infty}\\ln x=+\\infty$ ;\n- croissances comparées : $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}=0$ et $\\lim\\limits_{x\\to0^+}x\\ln x=0$.\n\nDérivée : pour $x>0$, $(\\ln x)'=\\dfrac{1}{x}$. Comme $\\dfrac{1}{x}>0$, $\\ln$ est strictement croissante sur $]0;+\\infty[$.\n\nSi $u(x)>0$ : $(\\ln u)'=\\dfrac{u'}{u}$. Par exemple $(\\ln(2x+1))'=\\dfrac{2}{2x+1}$.\n\nExemple d'étude : $f(x)=x-\\ln x$ sur $]0;+\\infty[$. $f'(x)=1-\\dfrac{1}{x}=\\dfrac{x-1}{x}$ : négative sur $]0;1[$, positive sur $]1;+\\infty[$. $f$ admet un minimum en $1$ : $f(1)=1-0=1$.",
      "keyRule": "$(\\ln x)'=\\dfrac{1}{x}$ ; $(\\ln u)'=\\dfrac{u'}{u}$ ; $\\ln x\\to-\\infty$ en $0^+$ et $+\\infty$ en $+\\infty$.",
      "formulas": [
        {
          "name": "Dérivée",
          "formula": "(\\ln u)'=\\dfrac{u'}{u}"
        }
      ],
      "workedExample": {
        "title": "Dériver ln u",
        "statement": "Dérive $f(x)=\\ln(x^2+1)$ sur $\\mathbb{R}$.",
        "methodSteps": [
          "$u(x)=x^2+1>0$ et $u'(x)=2x$.",
          "$f'(x)=\\dfrac{u'(x)}{u(x)}$."
        ],
        "conclusion": "$f'(x)=\\dfrac{2x}{x^2+1}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Limite en 0⁺",
          "stepTheme": "Limite en 0⁺",
          "stepBadge": "Limite en 0⁺",
          "paragraphText": "$\\lim\\limits_{x\\to0^+}\\ln x=-\\infty$ : l'axe des ordonnées est asymptote verticale.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q1",
            "type": "mcq",
            "prompt": "Quelle est la limite de $\\ln x$ lorsque $x$ tend vers $0$ par valeurs positives ($x\\to0^+$) ?",
            "options": [
              "$0$",
              "$-\\infty$",
              "$+\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Plus $x$ s'approche de $0$, plus $\\ln x$ est négatif et grand en valeur absolue."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Limite en +∞",
          "stepTheme": "Limite en +∞",
          "stepBadge": "Limite en +∞",
          "paragraphText": "$\\lim\\limits_{x\\to+\\infty}\\ln x=+\\infty$, mais la croissance est très lente.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\ln x$ ?",
            "options": [
              "$0$",
              "$1$",
              "$+\\infty$",
              "$e$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\ln x$ dépasse n'importe quel nombre, même si c'est lentement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Croissance comparée",
          "stepTheme": "Croissance comparée",
          "stepBadge": "Croissance comparée",
          "paragraphText": "$\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}=0$ : $x$ l'emporte sur $\\ln x$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}$ ?",
            "options": [
              "$+\\infty$",
              "$1$",
              "$-\\infty$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x$ grandit beaucoup plus vite que $\\ln x$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La dérivée de ln",
          "stepTheme": "La dérivée de ln",
          "stepBadge": "La dérivée de ln",
          "paragraphText": "$(\\ln x)'=\\dfrac{1}{x}$ sur $]0;+\\infty[$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q4",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de la fonction $f(x)=\\ln x$ sur $]0;+\\infty[$ ?",
            "options": [
              "$e^x$",
              "$\\dfrac{1}{x}$",
              "$-\\dfrac{1}{x^2}$",
              "$x\\ln x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la dérivée de référence du logarithme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La dérivée de ln u",
          "stepTheme": "La dérivée de ln u",
          "stepBadge": "La dérivée de ln u",
          "paragraphText": "$(\\ln u)'=\\dfrac{u'}{u}$ quand $u>0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q5",
            "type": "mcq",
            "prompt": "Quelle est la dérivée d'une fonction de la forme $g(x)=\\ln(u(x))$, avec $u(x)>0$ ?",
            "options": [
              "$\\dfrac{1}{u'(x)}$",
              "$u'(x)\\ln(u(x))$",
              "$\\dfrac{u'(x)}{u(x)}$",
              "$\\dfrac{u(x)}{u'(x)}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On divise la dérivée de $u$ par $u$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Dériver ln(2x + 1)",
          "stepTheme": "Dériver ln(2x + 1)",
          "stepBadge": "Dériver ln(2x + 1)",
          "paragraphText": "$u=2x+1$, $u'=2$ : $(\\ln(2x+1))'=\\dfrac{2}{2x+1}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q6",
            "type": "mcq",
            "prompt": "Quelle est la dérivée de $f(x)=\\ln(2x+1)$ sur $\\left]-\\dfrac{1}{2};+\\infty\\right[$ ?",
            "options": [
              "$\\dfrac{2}{2x+1}$",
              "$\\dfrac{1}{2x+1}$",
              "$2\\ln(2x+1)$",
              "$\\dfrac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{u'}{u}$ avec $u'=2$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Une étude de variations",
          "stepTheme": "Une étude de variations",
          "stepBadge": "Une étude de variations",
          "paragraphText": "$f(x)=x-\\ln x$ : $f'(x)=\\dfrac{x-1}{x}$, négative puis positive : minimum $f(1)=1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q7",
            "type": "mcq",
            "prompt": "Soit $f(x)=x-\\ln x$ sur $]0;+\\infty[$, avec $f'(x)=\\dfrac{x-1}{x}$. Que peut-on dire de $f$ en $x=1$ ?",
            "options": [
              "$f$ admet un maximum égal à $1$",
              "$f$ admet un minimum égal à $0$",
              "$f$ n'a pas d'extremum",
              "$f$ admet un minimum égal à $1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$f'$ passe de $-$ à $+$ en $1$, et $f(1)=1-\\ln1=1$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Une forme qui tend vers 0",
          "stepTheme": "Une forme qui tend vers 0",
          "stepBadge": "Une forme qui tend vers 0",
          "paragraphText": "$\\lim\\limits_{x\\to0^+}x\\ln x=0$ : $x$ « gagne » contre $\\ln x$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q8",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{x\\to0^+}x\\ln x$ ?",
            "options": [
              "$-\\infty$",
              "$0$",
              "$+\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une croissance comparée à connaître : la limite vaut $0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q1",
          "type": "mcq",
          "prompt": "Quelle est la limite de $\\ln x$ lorsque $x$ tend vers $0$ par valeurs positives ($x\\to0^+$) ?",
          "options": [
            "$0$",
            "$-\\infty$",
            "$+\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Plus $x$ s'approche de $0$, plus $\\ln x$ est négatif et grand en valeur absolue."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\ln x$ ?",
          "options": [
            "$0$",
            "$1$",
            "$+\\infty$",
            "$e$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\ln x$ dépasse n'importe quel nombre, même si c'est lentement."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}$ ?",
          "options": [
            "$+\\infty$",
            "$1$",
            "$-\\infty$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x$ grandit beaucoup plus vite que $\\ln x$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q4",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de la fonction $f(x)=\\ln x$ sur $]0;+\\infty[$ ?",
          "options": [
            "$e^x$",
            "$\\dfrac{1}{x}$",
            "$-\\dfrac{1}{x^2}$",
            "$x\\ln x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la dérivée de référence du logarithme."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q5",
          "type": "mcq",
          "prompt": "Quelle est la dérivée d'une fonction de la forme $g(x)=\\ln(u(x))$, avec $u(x)>0$ ?",
          "options": [
            "$\\dfrac{1}{u'(x)}$",
            "$u'(x)\\ln(u(x))$",
            "$\\dfrac{u'(x)}{u(x)}$",
            "$\\dfrac{u(x)}{u'(x)}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On divise la dérivée de $u$ par $u$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q6",
          "type": "mcq",
          "prompt": "Quelle est la dérivée de $f(x)=\\ln(2x+1)$ sur $\\left]-\\dfrac{1}{2};+\\infty\\right[$ ?",
          "options": [
            "$\\dfrac{2}{2x+1}$",
            "$\\dfrac{1}{2x+1}$",
            "$2\\ln(2x+1)$",
            "$\\dfrac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{u'}{u}$ avec $u'=2$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q7",
          "type": "mcq",
          "prompt": "Soit $f(x)=x-\\ln x$ sur $]0;+\\infty[$, avec $f'(x)=\\dfrac{x-1}{x}$. Que peut-on dire de $f$ en $x=1$ ?",
          "options": [
            "$f$ admet un maximum égal à $1$",
            "$f$ admet un minimum égal à $0$",
            "$f$ n'a pas d'extremum",
            "$f$ admet un minimum égal à $1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$f'$ passe de $-$ à $+$ en $1$, et $f(1)=1-\\ln1=1$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p03_q8",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{x\\to0^+}x\\ln x$ ?",
          "options": [
            "$-\\infty$",
            "$0$",
            "$+\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une croissance comparée à connaître : la limite vaut $0$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04",
      "order": 4,
      "title": "Équations et inéquations avec ln",
      "summary": "Condition d'existence d'abord, puis $\\ln A=\\ln B\\iff A=B$ et $\\ln A<\\ln B\\iff A<B$.",
      "conceptExplanation": "Méthode :\n1. Chercher la condition d'existence : chaque expression dans un $\\ln$ doit être strictement positive.\n2. Transformer : $\\ln A=\\ln B\\iff A=B$ ; $\\ln A<\\ln B\\iff A<B$ (le sens est conservé car $\\ln$ est croissante).\n3. Garder seulement les solutions qui respectent la condition d'existence.\n\nAutres résultats utiles : $\\ln x=k\\iff x=e^k$ ; $\\ln x>0\\iff x>1$ ; $\\ln x\\leq1\\iff0<x\\leq e$.\n\nExemples :\n- $\\ln(x-1)=\\ln3$ : condition $x>1$ ; $x-1=3$ donne $x=4$, qui convient : $S=\\{4\\}$ ;\n- $\\ln(2x+1)=\\ln(x-4)$ : condition $x>4$ ; $2x+1=x-4$ donne $x=-5$, qui ne vérifie pas $x>4$ : $S=\\varnothing$.",
      "keyRule": "D'abord la condition d'existence ; puis on enlève les $\\ln$ ; enfin on vérifie les solutions.",
      "formulas": [
        {
          "name": "Équation",
          "formula": "\\ln x=k\\iff x=e^k"
        }
      ],
      "workedExample": {
        "title": "Résoudre une équation",
        "statement": "Résous $\\ln(2x)=\\ln(x+3)$.",
        "methodSteps": [
          "Condition : $2x>0$ et $x+3>0$, soit $x>0$.",
          "$2x=x+3\\iff x=3$.",
          "$3>0$ : la solution convient."
        ],
        "conclusion": "$S=\\{3\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La première étape",
          "stepTheme": "La première étape",
          "stepBadge": "La première étape",
          "paragraphText": "On commence toujours par la condition d'existence.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q1",
            "type": "mcq",
            "prompt": "Pour résoudre l'équation $\\ln(x-1)=\\ln3$, quelle est la première étape ?",
            "options": [
              "Écrire $x-1=3$ directement",
              "Chercher les $x$ tels que $x-1>0$, soit $x>1$",
              "Calculer $\\ln3$ à la calculatrice",
              "Diviser par $\\ln$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans condition d'existence, on risque de garder une fausse solution."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une équation simple",
          "stepTheme": "Une équation simple",
          "stepBadge": "Une équation simple",
          "paragraphText": "$\\ln(x-1)=\\ln3$ : $x>1$ et $x-1=3$, donc $x=4$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est la solution de l'équation $\\ln(x-1)=\\ln3$, sachant qu'il faut $x>1$ ?",
            "options": [
              "$x=3$",
              "$x=2$",
              "$x=4$",
              "Aucune solution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x-1=3\\iff x=4$, et $4>1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "ln x = k",
          "stepTheme": "ln x = k",
          "stepBadge": "ln x = k",
          "paragraphText": "$\\ln x=k\\iff x=e^k$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q3",
            "type": "mcq",
            "prompt": "Quelle est la solution de l'équation $\\ln x=2$ sur $]0;+\\infty[$ ?",
            "options": [
              "$x=e^2$",
              "$x=2e$",
              "$x=\\ln2$",
              "$x=\\dfrac{2}{e}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On passe à l'exponentielle : $x=e^2\\approx7{,}39$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Une inéquation",
          "stepTheme": "Une inéquation",
          "stepBadge": "Une inéquation",
          "paragraphText": "$\\ln x<\\ln5\\iff0<x<5$ : on garde la condition $x>0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de l'inéquation $\\ln x<\\ln5$ ?",
            "options": [
              "$]-\\infty;5[$",
              "$]5;+\\infty[$",
              "$[0;5]$",
              "$]0;5[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\ln$ est croissante, donc $x<5$, avec $x>0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Deux logarithmes",
          "stepTheme": "Deux logarithmes",
          "stepBadge": "Deux logarithmes",
          "paragraphText": "$\\ln(2x)=\\ln(x+3)$ : condition $x>0$ ; $2x=x+3$ donne $x=3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q5",
            "type": "mcq",
            "prompt": "Quelle est la solution de l'équation $\\ln(2x)=\\ln(x+3)$, sachant que la condition d'existence est $x>0$ ?",
            "options": [
              "$x=3$",
              "$x=-3$",
              "$x=1$",
              "Aucune solution"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2x=x+3\\iff x=3$, et $3>0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une solution à rejeter",
          "stepTheme": "Une solution à rejeter",
          "stepBadge": "Une solution à rejeter",
          "paragraphText": "$\\ln(2x+1)=\\ln(x-4)$ : condition $x>4$ ; on trouve $x=-5$, qui ne convient pas.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q6",
            "type": "mcq",
            "prompt": "On résout $\\ln(2x+1)=\\ln(x-4)$. La condition d'existence est $x>4$, et l'équation $2x+1=x-4$ donne $x=-5$. Quel est l'ensemble des solutions ?",
            "options": [
              "$S=\\{-5\\}$",
              "$S=\\{4\\}$",
              "$S=\\varnothing$",
              "$S=]4;+\\infty[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-5$ ne vérifie pas $x>4$ : il n'y a aucune solution."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "ln x > 0",
          "stepTheme": "ln x > 0",
          "stepBadge": "ln x > 0",
          "paragraphText": "$\\ln x>0\\iff x>1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q7",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de l'inéquation $\\ln x>0$ ?",
            "options": [
              "$]0;+\\infty[$",
              "$]1;+\\infty[$",
              "$]0;1[$",
              "$]e;+\\infty[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\ln x>\\ln1\\iff x>1$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "ln x ≤ 1",
          "stepTheme": "ln x ≤ 1",
          "stepBadge": "ln x ≤ 1",
          "paragraphText": "$\\ln x\\leq1=\\ln e\\iff0<x\\leq e$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q8",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de l'inéquation $\\ln x\\leq1$ ?",
            "options": [
              "$]-\\infty;e]$",
              "$]0;1]$",
              "$[e;+\\infty[$",
              "$]0;e]$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$1=\\ln e$, donc $x\\leq e$, avec $x>0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q1",
          "type": "mcq",
          "prompt": "Pour résoudre l'équation $\\ln(x-1)=\\ln3$, quelle est la première étape ?",
          "options": [
            "Écrire $x-1=3$ directement",
            "Chercher les $x$ tels que $x-1>0$, soit $x>1$",
            "Calculer $\\ln3$ à la calculatrice",
            "Diviser par $\\ln$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans condition d'existence, on risque de garder une fausse solution."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est la solution de l'équation $\\ln(x-1)=\\ln3$, sachant qu'il faut $x>1$ ?",
          "options": [
            "$x=3$",
            "$x=2$",
            "$x=4$",
            "Aucune solution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x-1=3\\iff x=4$, et $4>1$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q3",
          "type": "mcq",
          "prompt": "Quelle est la solution de l'équation $\\ln x=2$ sur $]0;+\\infty[$ ?",
          "options": [
            "$x=e^2$",
            "$x=2e$",
            "$x=\\ln2$",
            "$x=\\dfrac{2}{e}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On passe à l'exponentielle : $x=e^2\\approx7{,}39$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'inéquation $\\ln x<\\ln5$ ?",
          "options": [
            "$]-\\infty;5[$",
            "$]5;+\\infty[$",
            "$[0;5]$",
            "$]0;5[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\ln$ est croissante, donc $x<5$, avec $x>0$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q5",
          "type": "mcq",
          "prompt": "Quelle est la solution de l'équation $\\ln(2x)=\\ln(x+3)$, sachant que la condition d'existence est $x>0$ ?",
          "options": [
            "$x=3$",
            "$x=-3$",
            "$x=1$",
            "Aucune solution"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2x=x+3\\iff x=3$, et $3>0$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q6",
          "type": "mcq",
          "prompt": "On résout $\\ln(2x+1)=\\ln(x-4)$. La condition d'existence est $x>4$, et l'équation $2x+1=x-4$ donne $x=-5$. Quel est l'ensemble des solutions ?",
          "options": [
            "$S=\\{-5\\}$",
            "$S=\\{4\\}$",
            "$S=\\varnothing$",
            "$S=]4;+\\infty[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-5$ ne vérifie pas $x>4$ : il n'y a aucune solution."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q7",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'inéquation $\\ln x>0$ ?",
          "options": [
            "$]0;+\\infty[$",
            "$]1;+\\infty[$",
            "$]0;1[$",
            "$]e;+\\infty[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\ln x>\\ln1\\iff x>1$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p04_q8",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de l'inéquation $\\ln x\\leq1$ ?",
          "options": [
            "$]-\\infty;e]$",
            "$]0;1]$",
            "$[e;+\\infty[$",
            "$]0;e]$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$1=\\ln e$, donc $x\\leq e$, avec $x>0$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05",
      "order": 5,
      "title": "Exercice type BAC : étude de f(x) = 2 ln x − x",
      "summary": "Limites, dérivée, maximum, tangente et signe d'une fonction avec ln.",
      "conceptExplanation": "Sujet : soit $f$ définie sur $]0;+\\infty[$ par $f(x)=2\\ln x-x$. On donne $\\ln2\\approx0{,}69$.\n\n1. En $0^+$ : $2\\ln x\\to-\\infty$ et $-x\\to0$, donc $\\lim\\limits_{x\\to0^+}f(x)=-\\infty$ (asymptote verticale : l'axe des ordonnées).\n2. En $+\\infty$ : $f(x)=x\\left(\\dfrac{2\\ln x}{x}-1\\right)$ ; comme $\\dfrac{\\ln x}{x}\\to0$, la parenthèse tend vers $-1$, donc $\\lim\\limits_{x\\to+\\infty}f(x)=-\\infty$.\n3. $f'(x)=\\dfrac{2}{x}-1=\\dfrac{2-x}{x}$.\n4. Sur $]0;+\\infty[$, $x>0$ : $f'(x)$ a le signe de $2-x$. $f$ est croissante sur $]0;2]$ et décroissante sur $[2;+\\infty[$.\n5. Maximum : $f(2)=2\\ln2-2\\approx-0{,}62$.\n6. Tangente en $1$ : $f(1)=-1$, $f'(1)=1$, donc $y=x-2$.\n7. Le maximum est négatif, donc $f(x)<0$ pour tout $x>0$.",
      "keyRule": "Forme indéterminée en $+\\infty$ : on factorise par $x$ et on utilise $\\dfrac{\\ln x}{x}\\to0$.",
      "formulas": [],
      "workedExample": {
        "title": "Lever une indétermination",
        "statement": "Calcule $\\lim\\limits_{x\\to+\\infty}(2\\ln x-x)$.",
        "methodSteps": [
          "$2\\ln x\\to+\\infty$ et $-x\\to-\\infty$ : forme indéterminée.",
          "$2\\ln x-x=x\\left(\\dfrac{2\\ln x}{x}-1\\right)$.",
          "$\\dfrac{2\\ln x}{x}\\to0$, donc la parenthèse tend vers $-1$."
        ],
        "conclusion": "La limite vaut $-\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Limite en 0⁺",
          "stepTheme": "Limite en 0⁺",
          "stepBadge": "Limite en 0⁺",
          "paragraphText": "$2\\ln x\\to-\\infty$ et $-x\\to0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q1",
            "type": "mcq",
            "prompt": "Soit $f(x)=2\\ln x-x$ sur $]0;+\\infty[$. Que vaut $\\lim\\limits_{x\\to0^+}f(x)$ ?",
            "options": [
              "$0$",
              "$-\\infty$",
              "$+\\infty$",
              "$-2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2\\ln x$ tend vers $-\\infty$ et $-x$ vers $0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Limite en +∞",
          "stepTheme": "Limite en +∞",
          "stepBadge": "Limite en +∞",
          "paragraphText": "$f(x)=x\\left(\\dfrac{2\\ln x}{x}-1\\right)$ et $\\dfrac{\\ln x}{x}\\to0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q2",
            "type": "mcq",
            "prompt": "Soit $f(x)=2\\ln x-x$. On écrit $f(x)=x\\left(\\dfrac{2\\ln x}{x}-1\\right)$ et on sait que $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}=0$. Que vaut $\\lim\\limits_{x\\to+\\infty}f(x)$ ?",
            "options": [
              "$+\\infty$",
              "$0$",
              "$-\\infty$",
              "$-1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x\\to+\\infty$ multiplié par une quantité qui tend vers $-1$ : $-\\infty$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La dérivée",
          "stepTheme": "La dérivée",
          "stepBadge": "La dérivée",
          "paragraphText": "$f'(x)=\\dfrac{2}{x}-1=\\dfrac{2-x}{x}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q3",
            "type": "mcq",
            "prompt": "Soit $f(x)=2\\ln x-x$ sur $]0;+\\infty[$. Que vaut $f'(x)$ ?",
            "options": [
              "$\\dfrac{2-x}{x}$",
              "$\\dfrac{2}{x}$",
              "$2\\ln x-1$",
              "$\\dfrac{x-2}{x}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(2\\ln x)'=\\dfrac{2}{x}$ et $(-x)'=-1$ ; on met au même dénominateur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le signe de f'",
          "stepTheme": "Le signe de f'",
          "stepBadge": "Le signe de f'",
          "paragraphText": "Pour $x>0$, $f'(x)=\\dfrac{2-x}{x}$ a le signe de $2-x$ : positif avant $2$, négatif après.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q4",
            "type": "mcq",
            "prompt": "Pour $f(x)=2\\ln x-x$, on a $f'(x)=\\dfrac{2-x}{x}$ sur $]0;+\\infty[$. Sur quel intervalle $f$ est-elle croissante ?",
            "options": [
              "$[2;+\\infty[$",
              "$]0;+\\infty[$",
              "$]-\\infty;2]$",
              "$]0;2]$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2-x>0\\iff x<2$, et $x>0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La valeur du maximum",
          "stepTheme": "La valeur du maximum",
          "stepBadge": "La valeur du maximum",
          "paragraphText": "$f(2)=2\\ln2-2\\approx2\\times0{,}69-2=-0{,}62$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q5",
            "type": "mcq",
            "prompt": "La fonction $f(x)=2\\ln x-x$ admet un maximum en $x=2$. Avec $\\ln2\\approx0{,}69$, combien vaut-il environ ?",
            "options": [
              "$0{,}62$",
              "$-1{,}38$",
              "$-0{,}62$",
              "$1{,}38$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$f(2)=2\\ln2-2\\approx1{,}38-2=-0{,}62$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Tangente en 1",
          "stepTheme": "Tangente en 1",
          "stepBadge": "Tangente en 1",
          "paragraphText": "$f(1)=2\\ln1-1=-1$ et $f'(1)=\\dfrac{2-1}{1}=1$ : $y=x-2$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q6",
            "type": "mcq",
            "prompt": "Pour $f(x)=2\\ln x-x$, on a $f(1)=-1$ et $f'(1)=1$. Quelle est l'équation de la tangente au point d'abscisse $1$ ?",
            "options": [
              "$y=x-1$",
              "$y=x-2$",
              "$y=-x$",
              "$y=2x-3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$y=1\\times(x-1)+(-1)=x-2$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Asymptote verticale",
          "stepTheme": "Asymptote verticale",
          "stepBadge": "Asymptote verticale",
          "paragraphText": "$\\lim\\limits_{x\\to0^+}f(x)=-\\infty$ : la droite $x=0$ (axe des ordonnées) est asymptote verticale.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q7",
            "type": "mcq",
            "prompt": "Pour $f(x)=2\\ln x-x$, on a $\\lim\\limits_{x\\to0^+}f(x)=-\\infty$. Quelle droite est asymptote à $(C_f)$ ?",
            "options": [
              "La droite d'équation $x=0$ (l'axe des ordonnées)",
              "La droite d'équation $y=0$",
              "La droite d'équation $y=-x$",
              "La droite d'équation $x=2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Limite infinie quand $x\\to0$ : asymptote verticale $x=0$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Le signe de f",
          "stepTheme": "Le signe de f",
          "stepBadge": "Le signe de f",
          "paragraphText": "Le maximum de $f$ vaut environ $-0{,}62$ : toutes les valeurs de $f$ sont plus petites, donc négatives.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q8",
            "type": "mcq",
            "prompt": "La fonction $f(x)=2\\ln x-x$ a pour maximum $f(2)\\approx-0{,}62$ sur $]0;+\\infty[$. Quel est le signe de $f(x)$ ?",
            "options": [
              "Positif pour $x>2$",
              "Positif pour $x$ proche de $0$",
              "Il change de signe en $x=1$",
              "Strictement négatif pour tout $x>0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Si la plus grande valeur est négative, toutes les valeurs le sont."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q1",
          "type": "mcq",
          "prompt": "Soit $f(x)=2\\ln x-x$ sur $]0;+\\infty[$. Que vaut $\\lim\\limits_{x\\to0^+}f(x)$ ?",
          "options": [
            "$0$",
            "$-\\infty$",
            "$+\\infty$",
            "$-2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2\\ln x$ tend vers $-\\infty$ et $-x$ vers $0$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q2",
          "type": "mcq",
          "prompt": "Soit $f(x)=2\\ln x-x$. On écrit $f(x)=x\\left(\\dfrac{2\\ln x}{x}-1\\right)$ et on sait que $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}=0$. Que vaut $\\lim\\limits_{x\\to+\\infty}f(x)$ ?",
          "options": [
            "$+\\infty$",
            "$0$",
            "$-\\infty$",
            "$-1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x\\to+\\infty$ multiplié par une quantité qui tend vers $-1$ : $-\\infty$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q3",
          "type": "mcq",
          "prompt": "Soit $f(x)=2\\ln x-x$ sur $]0;+\\infty[$. Que vaut $f'(x)$ ?",
          "options": [
            "$\\dfrac{2-x}{x}$",
            "$\\dfrac{2}{x}$",
            "$2\\ln x-1$",
            "$\\dfrac{x-2}{x}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(2\\ln x)'=\\dfrac{2}{x}$ et $(-x)'=-1$ ; on met au même dénominateur."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q4",
          "type": "mcq",
          "prompt": "Pour $f(x)=2\\ln x-x$, on a $f'(x)=\\dfrac{2-x}{x}$ sur $]0;+\\infty[$. Sur quel intervalle $f$ est-elle croissante ?",
          "options": [
            "$[2;+\\infty[$",
            "$]0;+\\infty[$",
            "$]-\\infty;2]$",
            "$]0;2]$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2-x>0\\iff x<2$, et $x>0$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q5",
          "type": "mcq",
          "prompt": "La fonction $f(x)=2\\ln x-x$ admet un maximum en $x=2$. Avec $\\ln2\\approx0{,}69$, combien vaut-il environ ?",
          "options": [
            "$0{,}62$",
            "$-1{,}38$",
            "$-0{,}62$",
            "$1{,}38$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$f(2)=2\\ln2-2\\approx1{,}38-2=-0{,}62$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q6",
          "type": "mcq",
          "prompt": "Pour $f(x)=2\\ln x-x$, on a $f(1)=-1$ et $f'(1)=1$. Quelle est l'équation de la tangente au point d'abscisse $1$ ?",
          "options": [
            "$y=x-1$",
            "$y=x-2$",
            "$y=-x$",
            "$y=2x-3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$y=1\\times(x-1)+(-1)=x-2$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q7",
          "type": "mcq",
          "prompt": "Pour $f(x)=2\\ln x-x$, on a $\\lim\\limits_{x\\to0^+}f(x)=-\\infty$. Quelle droite est asymptote à $(C_f)$ ?",
          "options": [
            "La droite d'équation $x=0$ (l'axe des ordonnées)",
            "La droite d'équation $y=0$",
            "La droite d'équation $y=-x$",
            "La droite d'équation $x=2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Limite infinie quand $x\\to0$ : asymptote verticale $x=0$."
        },
        {
          "id": "terminale_a_maths_numerique_l03_logarithme_neperien_p05_q8",
          "type": "mcq",
          "prompt": "La fonction $f(x)=2\\ln x-x$ a pour maximum $f(2)\\approx-0{,}62$ sur $]0;+\\infty[$. Quel est le signe de $f(x)$ ?",
          "options": [
            "Positif pour $x>2$",
            "Positif pour $x$ proche de $0$",
            "Il change de signe en $x=1$",
            "Strictement négatif pour tout $x>0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Si la plus grande valeur est négative, toutes les valeurs le sont."
        }
      ]
    }
  ]
};
