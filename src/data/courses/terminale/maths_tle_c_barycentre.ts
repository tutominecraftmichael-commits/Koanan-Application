import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 02 : Barycentre et lignes de niveaux » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3697
// Décalage de numérotation signalé : le livre H5P intitule la leçon « LEÇON N°1 » alors que le cours est la Leçon 02.
export const MATHS_TLE_C_L02_BARYCENTRE: CurriculumChapter = {
  "id": "terminale_c_maths_geometrie_l02_barycentre",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 2,
  "title": "Leçon 2 : Barycentre et lignes de niveaux",
  "summary": "Barycentre de points pondérés, isobarycentre, homogénéité, coordonnées et barycentre partiel, puis lignes de niveau : somme des carrés des distances, rapport de distances et mesure d'angle.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3697",
  "points": [
    {
      "id": "terminale_c_maths_geometrie_l02_barycentre_p01",
      "order": 1,
      "title": "Barycentre de points pondérés : définition",
      "summary": "Le barycentre est le point qui annule la somme pondérée des vecteurs, quand la somme des coefficients n'est pas nulle.",
      "conceptExplanation": "Soit $A_1$, $A_2$, ..., $A_n$ des points du plan ou de l'espace, et $\\alpha_1$, $\\alpha_2$, ..., $\\alpha_n$ des nombres réels tels que $\\alpha_1 + \\alpha_2 + ... + \\alpha_n \\neq 0$.\\nOn appelle barycentre des points pondérés $(A_1 ; \\alpha_1)$, $(A_2 ; \\alpha_2)$, ..., $(A_n ; \\alpha_n)$ l'unique point $G$ tel que $\\alpha_1 \\overrightarrow{GA_1} + \\alpha_2 \\overrightarrow{GA_2} + ... + \\alpha_n \\overrightarrow{GA_n} = \\overrightarrow{0}$.\\nPour tout point $M$ du plan ou de l'espace, on a la relation fondamentale : $\\sum_{i=1}^{n} \\alpha_i \\overrightarrow{MA_i} = (\\sum_{i=1}^{n} \\alpha_i) \\overrightarrow{MG}$.\\nLe barycentre ne dépend pas du point $M$ choisi : c'est un point bien défini dès que la somme des coefficients est non nulle.",
      "keyRule": "Le barycentre existe si la somme des coefficients est non nulle ; il annule la somme pondérée des vecteurs $\\overrightarrow{GA_i}$.",
      "formulas": [
        {
          "name": "Définition du barycentre",
          "formula": "\\sum_{i=1}^{n} \\alpha_i \\overrightarrow{GA_i} = \\overrightarrow{0} \\quad (\\sum \\alpha_i \\neq 0)",
          "note": "G est l'unique point qui vérifie cette égalité."
        },
        {
          "name": "Relation fondamentale",
          "formula": "\\sum_{i=1}^{n} \\alpha_i \\overrightarrow{MA_i} = (\\sum_{i=1}^{n} \\alpha_i) \\overrightarrow{MG}",
          "note": "Vraie pour tout point M du plan ou de l'espace."
        }
      ],
      "workedExample": {
        "title": "Le barycentre de quatre points pondérés existe-t-il ?",
        "statement": "Dans un parallélogramme $ABCD$, on considère les points pondérés $(A ; -1)$, $(B ; 1)$, $(C ; 1)$ et $(D ; 4)$. Leur barycentre existe-t-il ?",
        "methodSteps": [
          "On calcule la somme des coefficients : $-1 + 1 + 1 + 4 = 5$.",
          "La somme vaut $5$, donc elle est différente de $0$.",
          "Le barycentre de ces quatre points pondérés existe et il est unique."
        ],
        "conclusion": "Dès que la somme des coefficients est non nulle, le barycentre existe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Barycentre de points pondérés",
          "stepTheme": "Barycentre de points pondérés",
          "stepBadge": "Barycentre de points pondérés",
          "paragraphText": "• Barycentre : soient $A_1$, ..., $A_n$ des points et $\\alpha_1$, ..., $\\alpha_n$ des réels avec $\\sum \\alpha_i \\neq 0$. Le barycentre $G$ des points pondérés $(A_i ; \\alpha_i)$ est l'unique point tel que $\\sum \\alpha_i \\overrightarrow{GA_i} = \\overrightarrow{0}$.\n• Les nombres $\\alpha_i$ sont les coefficients (ou poids) des points $A_i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p01_q1",
            "type": "mcq",
            "prompt": "Soit $G$ le barycentre des points pondérés $(A_1 ; \\alpha_1)$, ..., $(A_n ; \\alpha_n)$. Que vaut $\\sum \\alpha_i \\overrightarrow{GA_i}$ ?",
            "options": ["$\\overrightarrow{0}$", "$\\overrightarrow{MG}$ pour tout point $M$", "$(\\sum \\alpha_i) \\overrightarrow{MA_1}$", "$\\alpha_1 \\overrightarrow{GA_1}$"],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, le barycentre $G$ est l'unique point qui annule la somme pondérée : $\\sum \\alpha_i \\overrightarrow{GA_i} = \\overrightarrow{0}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Existence du barycentre",
          "stepTheme": "Existence du barycentre",
          "stepBadge": "Existence du barycentre",
          "paragraphText": "• Le barycentre existe si et seulement si la somme des coefficients est différente de $0$.\n• Si $\\sum \\alpha_i = 0$, il n'y a pas de barycentre : la somme pondérée $\\sum \\alpha_i \\overrightarrow{MA_i}$ ne dépend alors pas de $M$ et ne peut pas s'annuler en un point unique.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p01_q2",
            "type": "mcq",
            "prompt": "Les points pondérés $(A ; -1)$, $(B ; 1)$, $(C ; 1)$ et $(D ; 4)$ ont-ils un barycentre ?",
            "options": ["Non, car la somme des coefficients est nulle", "Oui, car la somme des coefficients vaut $5 \\neq 0$", "Non, car il y a quatre points", "Oui, car tous les coefficients sont non nuls"],
            "correctAnswerIndex": 1,
            "explanation": "La somme des coefficients vaut $-1 + 1 + 1 + 4 = 5 \\neq 0$ : le barycentre existe et il est unique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Relation fondamentale",
          "stepTheme": "Relation fondamentale",
          "stepBadge": "Relation fondamentale",
          "paragraphText": "• Pour tout point $M$ : $\\sum \\alpha_i \\overrightarrow{MA_i} = (\\sum \\alpha_i) \\overrightarrow{MG}$.\n• Cette relation sert à tout : elle permet de calculer $\\overrightarrow{MG}$ en fonction des $\\overrightarrow{MA_i}$, ou de placer $G$ en choisissant $M$ parmi les points $A_i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p01_q3",
            "type": "mcq",
            "prompt": "Soit $G$ le barycentre de $(A ; 2)$ et $(B ; 3)$. Que vaut $2\\overrightarrow{MA} + 3\\overrightarrow{MB}$ pour un point $M$ quelconque ?",
            "options": ["$\\overrightarrow{0}$", "$5\\overrightarrow{MG}$", "$\\overrightarrow{MG}$", "$2\\overrightarrow{MG} + 3\\overrightarrow{MG}$"],
            "correctAnswerIndex": 1,
            "explanation": "D'après la relation fondamentale, $2\\overrightarrow{MA} + 3\\overrightarrow{MB} = (2 + 3)\\overrightarrow{MG} = 5\\overrightarrow{MG}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Placer le barycentre avec Chasles",
          "stepTheme": "Placer le barycentre avec Chasles",
          "stepBadge": "Placer le barycentre avec Chasles",
          "paragraphText": "• Pour placer $G$, on choisit $M = A$ (ou un autre point $A_i$) dans la relation fondamentale, puis on décompose chaque $\\overrightarrow{AA_i}$ avec la relation de Chasles.\n• Exemple : $G = \\text{bar}\\{(A ; -2), (B ; 1), (C ; 3)\\}$ donne $\\overrightarrow{AG} = \\frac{1}{2}\\overrightarrow{AB} + \\frac{3}{2}\\overrightarrow{AC}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p01_q4",
            "type": "mcq",
            "prompt": "Soit $G = \\text{bar}\\{(A ; -2), (B ; 1), (C ; 3)\\}$. Que vaut $\\overrightarrow{AG}$ ?",
            "options": ["$\\frac{1}{2}\\overrightarrow{AB} + \\frac{3}{2}\\overrightarrow{AC}$", "$-\\frac{1}{2}\\overrightarrow{AB} - \\frac{3}{2}\\overrightarrow{AC}$", "$2\\overrightarrow{AB} + 3\\overrightarrow{AC}$", "$\\overrightarrow{AB} + \\overrightarrow{AC}$"],
            "correctAnswerIndex": 0,
            "explanation": "On a $-2\\overrightarrow{GA} + \\overrightarrow{GB} + 3\\overrightarrow{GC} = \\overrightarrow{0}$. Avec Chasles, $\\overrightarrow{GB} = \\overrightarrow{GA} + \\overrightarrow{AB}$ et $\\overrightarrow{GC} = \\overrightarrow{GA} + \\overrightarrow{AC}$, ce qui donne $2\\overrightarrow{GA} + \\overrightarrow{AB} + 3\\overrightarrow{AC} = \\overrightarrow{0}$, donc $\\overrightarrow{AG} = \\frac{1}{2}\\overrightarrow{AB} + \\frac{3}{2}\\overrightarrow{AC}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Somme des coefficients nulle",
          "stepTheme": "Somme des coefficients nulle",
          "stepBadge": "Somme des coefficients nulle",
          "paragraphText": "• Piège : si $\\sum \\alpha_i = 0$, les points pondérés n'ont PAS de barycentre, même si chaque coefficient est non nul.\n• Exemple : $(A ; 2)$ et $(B ; -2)$ n'ont pas de barycentre, car $2 + (-2) = 0$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p01_q5",
            "type": "mcq",
            "prompt": "Les points pondérés $(A ; -2)$, $(B ; 3)$ et $(C ; -1)$ ont-ils un barycentre ?",
            "options": ["Oui, car $-2 + 3 - 1 = 0$ donc le barycentre est l'origine", "Non, car la somme des coefficients vaut $0$", "Oui, car la somme des coefficients vaut $-2 + 3 - 1 = 0 \\neq 0$", "Non, car il y a trois points"],
            "correctAnswerIndex": 1,
            "explanation": "La somme des coefficients vaut $-2 + 3 - 1 = 0$ : les points pondérés n'ont pas de barycentre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Barycentre de deux points",
          "stepTheme": "Barycentre de deux points",
          "stepBadge": "Barycentre de deux points",
          "paragraphText": "• Pour deux points $(A ; \\alpha)$ et $(B ; \\beta)$ avec $\\alpha + \\beta \\neq 0$, le barycentre $G$ est sur la droite $(AB)$ et $\\overrightarrow{AG} = \\frac{\\beta}{\\alpha + \\beta}\\overrightarrow{AB}$.\n• Exemple : pour $(A ; 1)$ et $(B ; 3)$, $\\overrightarrow{AG} = \\frac{3}{4}\\overrightarrow{AB}$ : $G$ est aux trois quarts de $[AB]$ en partant de $A$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p01_q6",
            "type": "mcq",
            "prompt": "Soit $G$ le barycentre de $(A ; 1)$ et $(B ; 3)$. Que vaut $\\overrightarrow{AG}$ ?",
            "options": ["$\\frac{1}{4}\\overrightarrow{AB}$", "$\\frac{1}{3}\\overrightarrow{AB}$", "$\\overrightarrow{AB}$", "$\\frac{3}{4}\\overrightarrow{AB}$"],
            "correctAnswerIndex": 3,
            "explanation": "Pour deux points, $\\overrightarrow{AG} = \\frac{\\beta}{\\alpha + \\beta}\\overrightarrow{AB} = \\frac{3}{1 + 3}\\overrightarrow{AB} = \\frac{3}{4}\\overrightarrow{AB}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p01_q1",
          "type": "mcq",
          "prompt": "Soit $G$ le barycentre des points pondérés $(A_1 ; \\alpha_1)$, ..., $(A_n ; \\alpha_n)$. Que vaut $\\sum \\alpha_i \\overrightarrow{GA_i}$ ?",
          "options": ["$\\overrightarrow{0}$", "$\\overrightarrow{MG}$ pour tout point $M$", "$(\\sum \\alpha_i) \\overrightarrow{MA_1}$", "$\\alpha_1 \\overrightarrow{GA_1}$"],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, le barycentre $G$ est l'unique point qui annule la somme pondérée : $\\sum \\alpha_i \\overrightarrow{GA_i} = \\overrightarrow{0}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p01_q2",
          "type": "mcq",
          "prompt": "Les points pondérés $(A ; -1)$, $(B ; 1)$, $(C ; 1)$ et $(D ; 4)$ ont-ils un barycentre ?",
          "options": ["Non, car la somme des coefficients est nulle", "Oui, car la somme des coefficients vaut $5 \\neq 0$", "Non, car il y a quatre points", "Oui, car tous les coefficients sont non nuls"],
          "correctAnswerIndex": 1,
          "explanation": "La somme des coefficients vaut $-1 + 1 + 1 + 4 = 5 \\neq 0$ : le barycentre existe et il est unique."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p01_q3",
          "type": "mcq",
          "prompt": "Soit $G$ le barycentre de $(A ; 2)$ et $(B ; 3)$. Que vaut $2\\overrightarrow{MA} + 3\\overrightarrow{MB}$ pour un point $M$ quelconque ?",
          "options": ["$\\overrightarrow{0}$", "$5\\overrightarrow{MG}$", "$\\overrightarrow{MG}$", "$2\\overrightarrow{MG} + 3\\overrightarrow{MG}$"],
          "correctAnswerIndex": 1,
          "explanation": "D'après la relation fondamentale, $2\\overrightarrow{MA} + 3\\overrightarrow{MB} = (2 + 3)\\overrightarrow{MG} = 5\\overrightarrow{MG}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p01_q4",
          "type": "mcq",
          "prompt": "Soit $G = \\text{bar}\\{(A ; -2), (B ; 1), (C ; 3)\\}$. Que vaut $\\overrightarrow{AG}$ ?",
          "options": ["$\\frac{1}{2}\\overrightarrow{AB} + \\frac{3}{2}\\overrightarrow{AC}$", "$-\\frac{1}{2}\\overrightarrow{AB} - \\frac{3}{2}\\overrightarrow{AC}$", "$2\\overrightarrow{AB} + 3\\overrightarrow{AC}$", "$\\overrightarrow{AB} + \\overrightarrow{AC}$"],
          "correctAnswerIndex": 0,
          "explanation": "On a $-2\\overrightarrow{GA} + \\overrightarrow{GB} + 3\\overrightarrow{GC} = \\overrightarrow{0}$. Avec Chasles, $\\overrightarrow{GB} = \\overrightarrow{GA} + \\overrightarrow{AB}$ et $\\overrightarrow{GC} = \\overrightarrow{GA} + \\overrightarrow{AC}$, ce qui donne $2\\overrightarrow{GA} + \\overrightarrow{AB} + 3\\overrightarrow{AC} = \\overrightarrow{0}$, donc $\\overrightarrow{AG} = \\frac{1}{2}\\overrightarrow{AB} + \\frac{3}{2}\\overrightarrow{AC}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p01_q5",
          "type": "mcq",
          "prompt": "Les points pondérés $(A ; -2)$, $(B ; 3)$ et $(C ; -1)$ ont-ils un barycentre ?",
          "options": ["Oui, car $-2 + 3 - 1 = 0$ donc le barycentre est l'origine", "Non, car la somme des coefficients vaut $0$", "Oui, car la somme des coefficients vaut $-2 + 3 - 1 = 0 \\neq 0$", "Non, car il y a trois points"],
          "correctAnswerIndex": 1,
          "explanation": "La somme des coefficients vaut $-2 + 3 - 1 = 0$ : les points pondérés n'ont pas de barycentre."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p01_q6",
          "type": "mcq",
          "prompt": "Soit $G$ le barycentre de $(A ; 1)$ et $(B ; 3)$. Que vaut $\\overrightarrow{AG}$ ?",
          "options": ["$\\frac{1}{4}\\overrightarrow{AB}$", "$\\frac{1}{3}\\overrightarrow{AB}$", "$\\overrightarrow{AB}$", "$\\frac{3}{4}\\overrightarrow{AB}$"],
          "correctAnswerIndex": 3,
          "explanation": "Pour deux points, $\\overrightarrow{AG} = \\frac{\\beta}{\\alpha + \\beta}\\overrightarrow{AB} = \\frac{3}{1 + 3}\\overrightarrow{AB} = \\frac{3}{4}\\overrightarrow{AB}$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l02_barycentre_p02",
      "order": 2,
      "title": "Isobarycentre et homogénéité",
      "summary": "Quand tous les coefficients sont égaux, on parle d'isobarycentre ; multiplier tous les coefficients par un même réel non nul ne change pas le barycentre.",
      "conceptExplanation": "Quand tous les coefficients sont égaux, le barycentre s'appelle l'isobarycentre des points. Pour deux points $A$ et $B$, l'isobarycentre est le milieu du segment $[AB]$. Pour trois points $A$, $B$, $C$, l'isobarycentre est le centre de gravité du triangle $ABC$.\\nPropriété d'homogénéité : si on multiplie tous les coefficients par un même réel $k \\neq 0$, le barycentre ne change pas. Autrement dit, $\\text{bar}\\{(A_1 ; \\alpha_1), ..., (A_n ; \\alpha_n)\\} = \\text{bar}\\{(A_1 ; k\\alpha_1), ..., (A_n ; k\\alpha_n)\\}$.\\nCette propriété permet de simplifier les coefficients : par exemple, $\\text{bar}\\{(A ; 2), (B ; 4)\\}$ est le même point que $\\text{bar}\\{(A ; 1), (B ; 2)\\}$.",
      "keyRule": "Multiplier tous les coefficients par un même réel non nul ne change pas le barycentre ; à coefficients égaux, c'est l'isobarycentre.",
      "formulas": [
        {
          "name": "Homogénéité",
          "formula": "\\text{bar}\\{(A_i {;} \\alpha_i)\\} = \\text{bar}\\{(A_i {;} k\\alpha_i)\\} \\quad (k \\neq 0)",
          "note": "On peut simplifier les coefficients par un facteur commun."
        },
        {
          "name": "Isobarycentre de deux points",
          "formula": "G = \\text{bar}\\{(A {;} 1), (B {;} 1)\\} \\iff G \\text{ milieu de } [AB]",
          "note": "L'isobarycentre de deux points est leur milieu."
        }
      ],
      "workedExample": {
        "title": "Reconnaître un isobarycentre",
        "statement": "Soit $ABC$ un triangle et $G$ son centre de gravité. Montrer que $G$ est l'isobarycentre de $A$, $B$ et $C$.",
        "methodSteps": [
          "Le centre de gravité d'un triangle est le point de concours des médianes.",
          "Il vérifie $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\overrightarrow{0}$.",
          "C'est donc le barycentre de $(A ; 1)$, $(B ; 1)$ et $(C ; 1)$ : les trois coefficients sont égaux.",
          "C'est l'isobarycentre des trois sommets."
        ],
        "conclusion": "Le centre de gravité d'un triangle est l'isobarycentre de ses trois sommets."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Isobarycentre",
          "stepTheme": "Isobarycentre",
          "stepBadge": "Isobarycentre",
          "paragraphText": "• Isobarycentre : quand tous les coefficients sont égaux, le barycentre s'appelle l'isobarycentre des points.\n• Pour deux points, l'isobarycentre est le milieu du segment ; pour trois points, c'est le centre de gravité du triangle.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p02_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'isobarycentre de trois points $A$, $B$ et $C$ ?",
            "options": ["Le milieu de $[AB]$", "Le centre de gravité du triangle $ABC$", "Le point $A$", "Le barycentre de $(A ; 2)$, $(B ; 1)$, $(C ; 1)$"],
            "correctAnswerIndex": 1,
            "explanation": "L'isobarycentre de trois points est le barycentre à coefficients égaux : c'est le centre de gravité du triangle $ABC$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Homogénéité du barycentre",
          "stepTheme": "Homogénéité du barycentre",
          "stepBadge": "Homogénéité du barycentre",
          "paragraphText": "• Homogénéité : multiplier tous les coefficients par un même réel $k \\neq 0$ ne change pas le barycentre.\n• On peut donc simplifier les coefficients : $\\text{bar}\\{(A ; 2), (B ; 4)\\} = \\text{bar}\\{(A ; 1), (B ; 2)\\}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p02_q2",
            "type": "mcq",
            "prompt": "Soit $G = \\text{bar}\\{(A ; 2), (B ; 3), (C ; 1)\\}$. Quel autre système définit le même point $G$ ?",
            "options": ["$\\text{bar}\\{(A ; 4), (B ; 3), (C ; 2)\\}$", "$\\text{bar}\\{(A ; 1), (B ; 3), (C ; 1)\\}$", "$\\text{bar}\\{(A ; 2), (B ; 3), (C ; 2)\\}$", "$\\text{bar}\\{(A ; -2), (B ; -3), (C ; -1)\\}$ et $\\text{bar}\\{(A ; 4), (B ; 6), (C ; 2)\\}$"],
            "correctAnswerIndex": 3,
            "explanation": "Multiplier tous les coefficients par un même réel non nul ($2$ ou $-1$) ne change pas le barycentre : les deux systèmes de la dernière option définissent le même point $G$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Simplifier les coefficients",
          "stepTheme": "Simplifier les coefficients",
          "stepBadge": "Simplifier les coefficients",
          "paragraphText": "• Méthode : avant de calculer, on divise tous les coefficients par leur diviseur commun (ou on les multiplie pour chasser les fractions).\n• Exemple : $\\text{bar}\\{(A ; -2), (B ; 10), (C ; 5)\\}$ se simplifie en divisant par $-1$ puis en comparant avec $\\text{bar}\\{(A ; 2), (B ; -10), (C ; -5)\\}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p02_q3",
            "type": "mcq",
            "prompt": "On considère $G = \\text{bar}\\{(A ; 2), (B ; 3), (C ; 1)\\}$. Que vaut $\\overrightarrow{AG}$ ?",
            "options": ["$\\frac{1}{2}\\overrightarrow{AB} + \\frac{1}{6}\\overrightarrow{AC}$", "$\\frac{1}{3}\\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AC}$", "$3\\overrightarrow{AB} + \\overrightarrow{AC}$", "$\\frac{1}{6}\\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AC}$"],
            "correctAnswerIndex": 0,
            "explanation": "Avec $M = A$ dans la relation fondamentale : $6\\overrightarrow{AG} = 3\\overrightarrow{AB} + \\overrightarrow{AC}$, donc $\\overrightarrow{AG} = \\frac{3}{6}\\overrightarrow{AB} + \\frac{1}{6}\\overrightarrow{AC} = \\frac{1}{2}\\overrightarrow{AB} + \\frac{1}{6}\\overrightarrow{AC}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Centre de gravité d'un triangle",
          "stepTheme": "Centre de gravité d'un triangle",
          "stepBadge": "Centre de gravité d'un triangle",
          "paragraphText": "• Le centre de gravité $K$ d'un triangle $ABC$ est l'isobarycentre des trois sommets : $\\overrightarrow{KA} + \\overrightarrow{KB} + \\overrightarrow{KC} = \\overrightarrow{0}$.\n• Si $P$ est le milieu de $[AB]$, alors $K$ est sur la médiane $[CP]$ et $CK = \\frac{2}{3} CP$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p02_q4",
            "type": "mcq",
            "prompt": "Soit $K$ le centre de gravité du triangle $ABC$ et $P$ le milieu de $[AB]$. Que vaut $\\overrightarrow{CK}$ ?",
            "options": ["$\\frac{1}{3}\\overrightarrow{CP}$", "$\\frac{2}{3}\\overrightarrow{CP}$", "$\\overrightarrow{CP}$", "$\\frac{3}{2}\\overrightarrow{CP}$"],
            "correctAnswerIndex": 1,
            "explanation": "Le centre de gravité est aux deux tiers de chaque médiane en partant du sommet : $\\overrightarrow{CK} = \\frac{2}{3}\\overrightarrow{CP}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre milieu et barycentre",
          "stepTheme": "Ne pas confondre milieu et barycentre",
          "stepBadge": "Ne pas confondre milieu et barycentre",
          "paragraphText": "• Piège : le milieu de $[AB]$ est l'isobarycentre de $A$ et $B$ (coefficients égaux), mais le barycentre de $(A ; 1)$ et $(B ; 3)$ n'est pas le milieu : il est plus proche de $B$.\n• Avec des coefficients différents, le barycentre se rapproche du point au plus gros coefficient.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p02_q5",
            "type": "mcq",
            "prompt": "Soit $G$ le barycentre de $(A ; 1)$ et $(B ; 3)$. Où se trouve $G$ sur la droite $(AB)$ ?",
            "options": ["Au milieu de $[AB]$", "Plus proche de $A$ que de $B$", "Plus proche de $B$ que de $A$", "En dehors du segment $[AB]$"],
            "correctAnswerIndex": 2,
            "explanation": "Le coefficient de $B$ ($3$) est plus grand que celui de $A$ ($1$) : $\\overrightarrow{AG} = \\frac{3}{4}\\overrightarrow{AB}$, donc $G$ est aux trois quarts de $[AB]$, plus proche de $B$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Isobarycentre d'un tétraèdre",
          "stepTheme": "Isobarycentre d'un tétraèdre",
          "stepBadge": "Isobarycentre d'un tétraèdre",
          "paragraphText": "• Dans l'espace, l'isobarycentre de quatre points $A$, $B$, $C$, $D$ est le point $G$ tel que $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = \\overrightarrow{0}$.\n• Dans le repère $(A ; \\overrightarrow{AB}, \\overrightarrow{AC}, \\overrightarrow{AD})$, ses coordonnées sont $(\\frac{1}{4} ; \\frac{1}{4} ; \\frac{1}{4})$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p02_q6",
            "type": "mcq",
            "prompt": "Soit $G$ l'isobarycentre du tétraèdre $ABCD$. Que vaut $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD}$ ?",
            "options": ["$\\overrightarrow{AG}$", "$4\\overrightarrow{AG}$", "$\\overrightarrow{0}$", "$\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD}$"],
            "correctAnswerIndex": 2,
            "explanation": "Par définition de l'isobarycentre (coefficients tous égaux à $1$), la somme des vecteurs $\\overrightarrow{GA}$, $\\overrightarrow{GB}$, $\\overrightarrow{GC}$ et $\\overrightarrow{GD}$ est nulle."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p02_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'isobarycentre de trois points $A$, $B$ et $C$ ?",
          "options": ["Le milieu de $[AB]$", "Le centre de gravité du triangle $ABC$", "Le point $A$", "Le barycentre de $(A ; 2)$, $(B ; 1)$, $(C ; 1)$"],
          "correctAnswerIndex": 1,
          "explanation": "L'isobarycentre de trois points est le barycentre à coefficients égaux : c'est le centre de gravité du triangle $ABC$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p02_q2",
          "type": "mcq",
          "prompt": "Soit $G = \\text{bar}\\{(A ; 2), (B ; 3), (C ; 1)\\}$. Quel autre système définit le même point $G$ ?",
          "options": ["$\\text{bar}\\{(A ; 4), (B ; 3), (C ; 2)\\}$", "$\\text{bar}\\{(A ; 1), (B ; 3), (C ; 1)\\}$", "$\\text{bar}\\{(A ; 2), (B ; 3), (C ; 2)\\}$", "$\\text{bar}\\{(A ; -2), (B ; -3), (C ; -1)\\}$ et $\\text{bar}\\{(A ; 4), (B ; 6), (C ; 2)\\}$"],
          "correctAnswerIndex": 3,
          "explanation": "Multiplier tous les coefficients par un même réel non nul ($2$ ou $-1$) ne change pas le barycentre : les deux systèmes de la dernière option définissent le même point $G$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p02_q3",
          "type": "mcq",
          "prompt": "On considère $G = \\text{bar}\\{(A ; 2), (B ; 3), (C ; 1)\\}$. Que vaut $\\overrightarrow{AG}$ ?",
          "options": ["$\\frac{1}{2}\\overrightarrow{AB} + \\frac{1}{6}\\overrightarrow{AC}$", "$\\frac{1}{3}\\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AC}$", "$3\\overrightarrow{AB} + \\overrightarrow{AC}$", "$\\frac{1}{6}\\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AC}$"],
          "correctAnswerIndex": 0,
          "explanation": "Avec $M = A$ dans la relation fondamentale : $6\\overrightarrow{AG} = 3\\overrightarrow{AB} + \\overrightarrow{AC}$, donc $\\overrightarrow{AG} = \\frac{3}{6}\\overrightarrow{AB} + \\frac{1}{6}\\overrightarrow{AC} = \\frac{1}{2}\\overrightarrow{AB} + \\frac{1}{6}\\overrightarrow{AC}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p02_q4",
          "type": "mcq",
          "prompt": "Soit $K$ le centre de gravité du triangle $ABC$ et $P$ le milieu de $[AB]$. Que vaut $\\overrightarrow{CK}$ ?",
          "options": ["$\\frac{1}{3}\\overrightarrow{CP}$", "$\\frac{2}{3}\\overrightarrow{CP}$", "$\\overrightarrow{CP}$", "$\\frac{3}{2}\\overrightarrow{CP}$"],
          "correctAnswerIndex": 1,
          "explanation": "Le centre de gravité est aux deux tiers de chaque médiane en partant du sommet : $\\overrightarrow{CK} = \\frac{2}{3}\\overrightarrow{CP}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p02_q5",
          "type": "mcq",
          "prompt": "Soit $G$ le barycentre de $(A ; 1)$ et $(B ; 3)$. Où se trouve $G$ sur la droite $(AB)$ ?",
          "options": ["Au milieu de $[AB]$", "Plus proche de $A$ que de $B$", "Plus proche de $B$ que de $A$", "En dehors du segment $[AB]$"],
          "correctAnswerIndex": 2,
          "explanation": "Le coefficient de $B$ ($3$) est plus grand que celui de $A$ ($1$) : $\\overrightarrow{AG} = \\frac{3}{4}\\overrightarrow{AB}$, donc $G$ est aux trois quarts de $[AB]$, plus proche de $B$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p02_q6",
          "type": "mcq",
          "prompt": "Soit $G$ l'isobarycentre du tétraèdre $ABCD$. Que vaut $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD}$ ?",
          "options": ["$\\overrightarrow{AG}$", "$4\\overrightarrow{AG}$", "$\\overrightarrow{0}$", "$\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD}$"],
          "correctAnswerIndex": 2,
          "explanation": "Par définition de l'isobarycentre (coefficients tous égaux à $1$), la somme des vecteurs $\\overrightarrow{GA}$, $\\overrightarrow{GB}$, $\\overrightarrow{GC}$ et $\\overrightarrow{GD}$ est nulle."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l02_barycentre_p03",
      "order": 3,
      "title": "Coordonnées du barycentre et barycentre partiel",
      "summary": "Les coordonnées du barycentre sont la moyenne pondérée des coordonnées des points ; on peut regrouper des points par leur barycentre partiel.",
      "conceptExplanation": "Dans un repère $(O ; \\vec{i}, \\vec{j})$ du plan, si $A(x_A ; y_A)$ et $B(x_B ; y_B)$, le barycentre $G$ de $(A ; \\alpha)$ et $(B ; \\beta)$ a pour coordonnées $x_G = \\frac{\\alpha x_A + \\beta x_B}{\\alpha + \\beta}$ et $y_G = \\frac{\\alpha y_A + \\beta y_B}{\\alpha + \\beta}$.\\nDans l'espace, dans un repère $(O ; \\vec{i}, \\vec{j}, \\vec{k})$, on ajoute $z_G = \\frac{\\alpha z_A + \\beta z_B}{\\alpha + \\beta}$. La formule se généralise à $n$ points : chaque coordonnée de $G$ est la moyenne pondérée des coordonnées correspondantes.\\nBarycentre partiel : pour calculer le barycentre d'un système, on peut remplacer un groupe de points par leur barycentre partiel affecté de la somme de leurs coefficients, sans changer le résultat.",
      "keyRule": "Chaque coordonnée du barycentre est la moyenne pondérée des coordonnées des points ; on peut regrouper des points par leur barycentre partiel.",
      "formulas": [
        {
          "name": "Coordonnées du barycentre (plan)",
          "formula": "x_G = \\frac{\\alpha x_A + \\beta x_B}{\\alpha + \\beta} \\quad ; \\quad y_G = \\frac{\\alpha y_A + \\beta y_B}{\\alpha + \\beta}",
          "note": "On divise toujours par la somme des coefficients."
        },
        {
          "name": "Barycentre partiel",
          "formula": "\\text{bar}\\{(A {;} \\alpha), (B {;} \\beta), (C {;} \\gamma)\\} = \\text{bar}\\{(G_{AB} {;} \\alpha + \\beta), (C {;} \\gamma)\\}",
          "note": "G_AB est le barycentre partiel de A et B."
        }
      ],
      "workedExample": {
        "title": "Coordonnées du barycentre de deux points",
        "statement": "Dans un repère du plan, $A(1 ; 2)$ et $B(4 ; 6)$. Calculer les coordonnées de $G = \\text{bar}\\{(A ; 2), (B ; 3)\\}$.",
        "methodSteps": [
          "La somme des coefficients vaut $2 + 3 = 5$.",
          "$x_G = \\frac{2 \\times 1 + 3 \\times 4}{5} = \\frac{14}{5}$.",
          "$y_G = \\frac{2 \\times 2 + 3 \\times 6}{5} = \\frac{22}{5}$.",
          "Donc $G(\\frac{14}{5} ; \\frac{22}{5})$."
        ],
        "conclusion": "On divise la somme pondérée des coordonnées par la somme des coefficients."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Coordonnées du barycentre dans le plan",
          "stepTheme": "Coordonnées du barycentre dans le plan",
          "stepBadge": "Coordonnées du barycentre dans le plan",
          "paragraphText": "• Dans un repère $(O ; \\vec{i}, \\vec{j})$, si $G = \\text{bar}\\{(A ; \\alpha), (B ; \\beta)\\}$ alors $x_G = \\frac{\\alpha x_A + \\beta x_B}{\\alpha + \\beta}$ et $y_G = \\frac{\\alpha y_A + \\beta y_B}{\\alpha + \\beta}$.\n• Chaque coordonnée de $G$ est la moyenne pondérée des coordonnées des points.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p03_q1",
            "type": "mcq",
            "prompt": "Dans un repère, $A(1 ; 2)$ et $B(4 ; 6)$. Que vaut l'abscisse de $G = \\text{bar}\\{(A ; 2), (B ; 3)\\}$ ?",
            "options": ["$\\frac{14}{5}$", "$\\frac{5}{2}$", "$3$", "$\\frac{11}{5}$"],
            "correctAnswerIndex": 0,
            "explanation": "$x_G = \\frac{2 \\times 1 + 3 \\times 4}{2 + 3} = \\frac{14}{5}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Coordonnées du barycentre dans l'espace",
          "stepTheme": "Coordonnées du barycentre dans l'espace",
          "stepBadge": "Coordonnées du barycentre dans l'espace",
          "paragraphText": "• Dans un repère $(O ; \\vec{i}, \\vec{j}, \\vec{k})$ de l'espace, la formule est la même pour les trois coordonnées : on ajoute $z_G = \\frac{\\alpha z_A + \\beta z_B}{\\alpha + \\beta}$.\n• La formule se généralise à $n$ points : $x_G = \\frac{\\sum \\alpha_i x_i}{\\sum \\alpha_i}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p03_q2",
            "type": "mcq",
            "prompt": "Dans l'espace, $A(0 ; 0 ; 0)$, $B(2 ; 0 ; 0)$, $C(0 ; 2 ; 0)$ et $D(0 ; 0 ; 2)$. Quelles sont les coordonnées de l'isobarycentre $G$ de $A$, $B$, $C$, $D$ ?",
            "options": ["$(\\frac{1}{2} ; \\frac{1}{2} ; \\frac{1}{2})$", "$(1 ; 1 ; 1)$", "$(\\frac{1}{4} ; \\frac{1}{4} ; \\frac{1}{4})$", "$(0 ; 0 ; 0)$"],
            "correctAnswerIndex": 0,
            "explanation": "L'isobarycentre a pour coordonnées la moyenne des coordonnées : $x_G = \\frac{0 + 2 + 0 + 0}{4} = \\frac{1}{2}$, et de même $y_G = \\frac{1}{2}$, $z_G = \\frac{1}{2}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Barycentre partiel",
          "stepTheme": "Barycentre partiel",
          "stepBadge": "Barycentre partiel",
          "paragraphText": "• Méthode : pour calculer le barycentre d'un système, on peut remplacer un groupe de points par leur barycentre partiel, affecté de la somme de leurs coefficients.\n• Exemple : $\\text{bar}\\{(A ; 2), (B ; 3), (C ; 1)\\} = \\text{bar}\\{(G_{AB} ; 5), (C ; 1)\\}$ où $G_{AB} = \\text{bar}\\{(A ; 2), (B ; 3)\\}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p03_q3",
            "type": "mcq",
            "prompt": "Soit $G_{AB} = \\text{bar}\\{(A ; 2), (B ; 3)\\}$. Quel système définit le même barycentre que $\\text{bar}\\{(A ; 2), (B ; 3), (C ; 1)\\}$ ?",
            "options": ["$\\text{bar}\\{(G_{AB} ; 2), (C ; 1)\\}$", "$\\text{bar}\\{(G_{AB} ; 5), (C ; 1)\\}$", "$\\text{bar}\\{(G_{AB} ; 1), (C ; 5)\\}$", "$\\text{bar}\\{(G_{AB} ; 3), (C ; 2)\\}$"],
            "correctAnswerIndex": 1,
            "explanation": "Le barycentre partiel $G_{AB}$ porte la somme des coefficients de $A$ et $B$, soit $2 + 3 = 5$ : le système est $\\text{bar}\\{(G_{AB} ; 5), (C ; 1)\\}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Calculer des coordonnées",
          "stepTheme": "Calculer des coordonnées",
          "stepBadge": "Calculer des coordonnées",
          "paragraphText": "• Exemple : $A(1 ; 2)$, $B(4 ; 6)$, $G = \\text{bar}\\{(A ; 2), (B ; 3)\\}$ donne $G(\\frac{14}{5} ; \\frac{22}{5})$.\n• On vérifie toujours que le dénominateur est la somme des coefficients.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p03_q4",
            "type": "mcq",
            "prompt": "Dans un repère, $A(1 ; 2)$ et $B(4 ; 6)$. Que vaut l'ordonnée de $G = \\text{bar}\\{(A ; 2), (B ; 3)\\}$ ?",
            "options": ["$\\frac{14}{5}$", "$4$", "$\\frac{22}{5}$", "$\\frac{11}{2}$"],
            "correctAnswerIndex": 2,
            "explanation": "$y_G = \\frac{2 \\times 2 + 3 \\times 6}{2 + 3} = \\frac{22}{5}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier de diviser par la somme",
          "stepTheme": "Ne pas oublier de diviser par la somme",
          "stepBadge": "Ne pas oublier de diviser par la somme",
          "paragraphText": "• Piège : les coordonnées du barycentre sont des moyennes pondérées, pas des sommes pondérées : il faut diviser par la somme des coefficients.\n• Oublier cette division donne un point faux : $2x_A + 3x_B$ n'est pas l'abscisse de $G$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p03_q5",
            "type": "mcq",
            "prompt": "Soit $G = \\text{bar}\\{(A ; 1), (B ; 1)\\}$ avec $A(2 ; 0)$ et $B(6 ; 4)$. Quelles sont les coordonnées de $G$ ?",
            "options": ["$(8 ; 4)$", "$(4 ; 2)$", "$(3 ; 2)$", "$(2 ; 1)$"],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'isobarycentre, donc le milieu de $[AB]$ : $G(\\frac{2 + 6}{2} ; \\frac{0 + 4}{2}) = (4 ; 2)$. Sans diviser par $2$, on obtiendrait le point faux $(8 ; 4)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Barycentre partiel et alignement",
          "stepTheme": "Barycentre partiel et alignement",
          "stepBadge": "Barycentre partiel et alignement",
          "paragraphText": "• Le barycentre partiel sert aussi à prouver des alignements : si $K$ est le barycentre partiel de deux points d'un système, alors $K$, le barycentre total $G$ et le barycentre partiel des autres points sont alignés.\n• C'est la méthode utilisée dans les exercices d'alignement de la leçon (milieux et barycentres partiels).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p03_q6",
            "type": "mcq",
            "prompt": "Soit $G = \\text{bar}\\{(A ; 2), (B ; 3), (C ; 1)\\}$ et $G_{AB} = \\text{bar}\\{(A ; 2), (B ; 3)\\}$. Que peut-on dire des points $C$, $G$ et $G_{AB}$ ?",
            "options": ["Ils forment un triangle", "Ils sont alignés", "Ils sont confondus", "Ils forment un angle droit en $G$"],
            "correctAnswerIndex": 1,
            "explanation": "Par le barycentre partiel, $G = \\text{bar}\\{(G_{AB} ; 5), (C ; 1)\\}$ : $G$ est sur la droite $(CG_{AB})$, donc $C$, $G$ et $G_{AB}$ sont alignés."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p03_q1",
          "type": "mcq",
          "prompt": "Dans un repère, $A(1 ; 2)$ et $B(4 ; 6)$. Que vaut l'abscisse de $G = \\text{bar}\\{(A ; 2), (B ; 3)\\}$ ?",
          "options": ["$\\frac{14}{5}$", "$\\frac{5}{2}$", "$3$", "$\\frac{11}{5}$"],
          "correctAnswerIndex": 0,
          "explanation": "$x_G = \\frac{2 \\times 1 + 3 \\times 4}{2 + 3} = \\frac{14}{5}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p03_q2",
          "type": "mcq",
          "prompt": "Dans l'espace, $A(0 ; 0 ; 0)$, $B(2 ; 0 ; 0)$, $C(0 ; 2 ; 0)$ et $D(0 ; 0 ; 2)$. Quelles sont les coordonnées de l'isobarycentre $G$ de $A$, $B$, $C$, $D$ ?",
          "options": ["$(\\frac{1}{2} ; \\frac{1}{2} ; \\frac{1}{2})$", "$(1 ; 1 ; 1)$", "$(\\frac{1}{4} ; \\frac{1}{4} ; \\frac{1}{4})$", "$(0 ; 0 ; 0)$"],
          "correctAnswerIndex": 0,
          "explanation": "L'isobarycentre a pour coordonnées la moyenne des coordonnées : $x_G = \\frac{0 + 2 + 0 + 0}{4} = \\frac{1}{2}$, et de même $y_G = \\frac{1}{2}$, $z_G = \\frac{1}{2}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p03_q3",
          "type": "mcq",
          "prompt": "Soit $G_{AB} = \\text{bar}\\{(A ; 2), (B ; 3)\\}$. Quel système définit le même barycentre que $\\text{bar}\\{(A ; 2), (B ; 3), (C ; 1)\\}$ ?",
          "options": ["$\\text{bar}\\{(G_{AB} ; 2), (C ; 1)\\}$", "$\\text{bar}\\{(G_{AB} ; 5), (C ; 1)\\}$", "$\\text{bar}\\{(G_{AB} ; 1), (C ; 5)\\}$", "$\\text{bar}\\{(G_{AB} ; 3), (C ; 2)\\}$"],
          "correctAnswerIndex": 1,
          "explanation": "Le barycentre partiel $G_{AB}$ porte la somme des coefficients de $A$ et $B$, soit $2 + 3 = 5$ : le système est $\\text{bar}\\{(G_{AB} ; 5), (C ; 1)\\}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p03_q4",
          "type": "mcq",
          "prompt": "Dans un repère, $A(1 ; 2)$ et $B(4 ; 6)$. Que vaut l'ordonnée de $G = \\text{bar}\\{(A ; 2), (B ; 3)\\}$ ?",
          "options": ["$\\frac{14}{5}$", "$4$", "$\\frac{22}{5}$", "$\\frac{11}{2}$"],
          "correctAnswerIndex": 2,
          "explanation": "$y_G = \\frac{2 \\times 2 + 3 \\times 6}{2 + 3} = \\frac{22}{5}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p03_q5",
          "type": "mcq",
          "prompt": "Soit $G = \\text{bar}\\{(A ; 1), (B ; 1)\\}$ avec $A(2 ; 0)$ et $B(6 ; 4)$. Quelles sont les coordonnées de $G$ ?",
          "options": ["$(8 ; 4)$", "$(4 ; 2)$", "$(3 ; 2)$", "$(2 ; 1)$"],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'isobarycentre, donc le milieu de $[AB]$ : $G(\\frac{2 + 6}{2} ; \\frac{0 + 4}{2}) = (4 ; 2)$. Sans diviser par $2$, on obtiendrait le point faux $(8 ; 4)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p03_q6",
          "type": "mcq",
          "prompt": "Soit $G = \\text{bar}\\{(A ; 2), (B ; 3), (C ; 1)\\}$ et $G_{AB} = \\text{bar}\\{(A ; 2), (B ; 3)\\}$. Que peut-on dire des points $C$, $G$ et $G_{AB}$ ?",
          "options": ["Ils forment un triangle", "Ils sont alignés", "Ils sont confondus", "Ils forment un angle droit en $G$"],
          "correctAnswerIndex": 1,
          "explanation": "Par le barycentre partiel, $G = \\text{bar}\\{(G_{AB} ; 5), (C ; 1)\\}$ : $G$ est sur la droite $(CG_{AB})$, donc $C$, $G$ et $G_{AB}$ sont alignés."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l02_barycentre_p04",
      "order": 4,
      "title": "Lignes de niveau de la somme des carrés des distances",
      "summary": "L'ensemble des points M tels que la somme pondérée des carrés des distances est constante est un cercle, un point ou l'ensemble vide.",
      "conceptExplanation": "On appelle ligne de niveau de l'application $M \\mapsto \\sum \\alpha_i MA_i^2$ l'ensemble des points $M$ tels que $\\sum \\alpha_i MA_i^2 = k$, où $k$ est un réel donné.\\nSi $\\sum \\alpha_i \\neq 0$ et $G$ est le barycentre des points pondérés, la réduction donne $\\sum \\alpha_i MA_i^2 = (\\sum \\alpha_i) MG^2 + \\sum \\alpha_i GA_i^2$.\\nL'ensemble cherché est donc un cercle de centre $G$ (si $k - \\sum \\alpha_i GA_i^2$ est du signe de $\\sum \\alpha_i$ et non nul), le point $G$ seul (si la différence est nulle), ou l'ensemble vide (sinon).\\nSi $\\sum \\alpha_i = 0$, la réduction donne une expression affine en $M$ : l'ensemble est alors une droite (dans le plan) ou un plan (dans l'espace), ou l'ensemble vide.",
      "keyRule": "Somme des carrés des distances constante : on réduit au barycentre, et on obtient un cercle, un point ou l'ensemble vide.",
      "formulas": [
        {
          "name": "Réduction de la somme des carrés",
          "formula": "\\sum \\alpha_i MA_i^2 = (\\sum \\alpha_i) MG^2 + \\sum \\alpha_i GA_i^2",
          "note": "G est le barycentre des points pondérés."
        }
      ],
      "workedExample": {
        "title": "Un cercle comme ligne de niveau",
        "statement": "Soit $ABC$ un triangle rectangle en $A$ avec $AB = 2a$ et $AC = a$ ($a > 0$). Soit $H$ le barycentre de $(A ; 3)$, $(B ; 1)$ et $(C ; -2)$. Déterminer l'ensemble $(\\Gamma)$ des points $M$ tels que $3MA^2 + MB^2 - 2MC^2 = 8a^2$.",
        "methodSteps": [
          "La somme des coefficients vaut $3 + 1 - 2 = 2 \\neq 0$ : on réduit au barycentre $H$.",
          "On a $\\overrightarrow{AH} = \\frac{1}{2}\\overrightarrow{AB} - \\overrightarrow{AC}$, donc $HA^2 = 2a^2$.",
          "De même $HB^2 = 2a^2$ et $HC^2 = 5a^2$.",
          "La constante vaut $3HA^2 + HB^2 - 2HC^2 = 6a^2 + 2a^2 - 10a^2 = -2a^2$.",
          "Donc $2MH^2 - 2a^2 = 8a^2$, soit $MH^2 = 5a^2$ et $MH = a\\sqrt{5}$.",
          "L'ensemble $(\\Gamma)$ est le cercle de centre $H$ et de rayon $a\\sqrt{5}$."
        ],
        "conclusion": "Après réduction, une somme de carrés constante donne un cercle de centre le barycentre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ligne de niveau",
          "stepTheme": "Ligne de niveau",
          "stepBadge": "Ligne de niveau",
          "paragraphText": "• Ligne de niveau : pour une application $f$ et un réel $k$, la ligne de niveau $k$ est l'ensemble des points $M$ tels que $f(M) = k$.\n• Ici, $f(M) = \\sum \\alpha_i MA_i^2$ : la somme pondérée des carrés des distances de $M$ aux points $A_i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p04_q1",
            "type": "mcq",
            "prompt": "Qu'appelle-t-on ligne de niveau $k$ de l'application $M \\mapsto \\sum \\alpha_i MA_i^2$ ?",
            "options": ["L'ensemble des points $M$ tels que $\\sum \\alpha_i MA_i^2 = k$", "Le cercle de centre $G$ et de rayon $k$", "L'ensemble des points $M$ tels que $MG = k$", "La droite passant par $G$ et de direction $\\overrightarrow{MA_1}$"],
            "correctAnswerIndex": 0,
            "explanation": "La ligne de niveau $k$ est l'ensemble des points $M$ tels que $f(M) = k$, c'est-à-dire $\\sum \\alpha_i MA_i^2 = k$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Réduction au barycentre",
          "stepTheme": "Réduction au barycentre",
          "stepBadge": "Réduction au barycentre",
          "paragraphText": "• Si $\\sum \\alpha_i \\neq 0$ et $G$ est le barycentre, alors $\\sum \\alpha_i MA_i^2 = (\\sum \\alpha_i) MG^2 + \\sum \\alpha_i GA_i^2$.\n• Le terme $\\sum \\alpha_i GA_i^2$ est une constante : tout dépend donc de $MG^2$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p04_q2",
            "type": "mcq",
            "prompt": "Soit $G$ le barycentre de $(A ; 3)$, $(B ; 1)$, $(C ; -2)$. Que vaut $3MA^2 + MB^2 - 2MC^2$ en fonction de $MG$ ?",
            "options": ["$2MG^2 + 3GA^2 + GB^2 - 2GC^2$", "$MG^2 + 3GA^2 + GB^2 - 2GC^2$", "$2MG^2$", "$3GA^2 + GB^2 - 2GC^2$"],
            "correctAnswerIndex": 0,
            "explanation": "La somme des coefficients vaut $2$, donc $3MA^2 + MB^2 - 2MC^2 = 2MG^2 + 3GA^2 + GB^2 - 2GC^2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Cercle, point ou ensemble vide",
          "stepTheme": "Cercle, point ou ensemble vide",
          "stepBadge": "Cercle, point ou ensemble vide",
          "paragraphText": "• Méthode : après réduction, on obtient $(\\sum \\alpha_i) MG^2 = k - \\sum \\alpha_i GA_i^2$.\n• Si le second membre est du signe de $\\sum \\alpha_i$ et non nul : cercle de centre $G$. S'il est nul : le point $G$ seul. Sinon : ensemble vide.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p04_q3",
            "type": "mcq",
            "prompt": "Après réduction, on obtient $2MG^2 = -6$. Quel est l'ensemble des points $M$ ?",
            "options": ["Le cercle de centre $G$ et de rayon $\\sqrt{3}$", "Le point $G$ seul", "L'ensemble vide", "La droite passant par $G$"],
            "correctAnswerIndex": 2,
            "explanation": "$MG^2 = -3$ est impossible : un carré est toujours positif ou nul. L'ensemble est vide."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Cas où la somme des coefficients est nulle",
          "stepTheme": "Cas où la somme des coefficients est nulle",
          "stepBadge": "Cas où la somme des coefficients est nulle",
          "paragraphText": "• Si $\\sum \\alpha_i = 0$, la réduction ne donne plus de terme en $MG^2$ : l'expression devient affine en $M$.\n• L'ensemble est alors une droite dans le plan (ou un plan dans l'espace), ou l'ensemble vide.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p04_q4",
            "type": "mcq",
            "prompt": "On étudie $MA^2 - MB^2 = k$ dans le plan. Quelle est la nature de l'ensemble des points $M$ ?",
            "options": ["Un cercle", "Une droite (ou l'ensemble vide)", "Un point", "Un arc de cercle"],
            "correctAnswerIndex": 1,
            "explanation": "Ici $\\sum \\alpha_i = 1 - 1 = 0$ : la réduction donne une équation affine en $M$, donc une droite (ou l'ensemble vide si l'équation est impossible)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le cercle de l'exercice 5",
          "stepTheme": "Le cercle de l'exercice 5",
          "stepBadge": "Le cercle de l'exercice 5",
          "paragraphText": "• Exemple de la leçon : $ABC$ rectangle en $A$, $AB = 2a$, $AC = a$, $H = \\text{bar}\\{(A ; 3), (B ; 1), (C ; -2)\\}$, ensemble $3MA^2 + MB^2 - 2MC^2 = 8a^2$.\n• Après réduction, $MH^2 = 5a^2$ : c'est le cercle de centre $H$ et de rayon $a\\sqrt{5}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p04_q5",
            "type": "mcq",
            "prompt": "Dans l'exercice 5 de la leçon, $H = \\text{bar}\\{(A ; 3), (B ; 1), (C ; -2)\\}$ et $3MA^2 + MB^2 - 2MC^2 = 8a^2$. Quel est le rayon du cercle obtenu ?",
            "options": ["$a\\sqrt{5}$", "$5a$", "$a\\sqrt{3}$", "$2a$"],
            "correctAnswerIndex": 0,
            "explanation": "La réduction donne $2MH^2 - 2a^2 = 8a^2$, soit $MH^2 = 5a^2$ et $MH = a\\sqrt{5}$ : le rayon est $a\\sqrt{5}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre cercle et droite",
          "stepTheme": "Ne pas confondre cercle et droite",
          "stepBadge": "Ne pas confondre cercle et droite",
          "paragraphText": "• Piège : la nature de la ligne de niveau dépend du signe de $\\sum \\alpha_i$ : si la somme est non nulle, on obtient un cercle (ou un point, ou le vide) ; si elle est nulle, on obtient une droite.\n• Il faut donc toujours commencer par calculer $\\sum \\alpha_i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p04_q6",
            "type": "mcq",
            "prompt": "On étudie l'ensemble des points $M$ tels que $MA^2 + 2MB^2 + MC^2 = 10$. Que faut-il calculer en premier ?",
            "options": ["La distance $AB$", "La somme des coefficients $1 + 2 + 1 = 4 \\neq 0$, pour réduire au barycentre", "Le milieu de $[AC]$", "La mesure de l'angle $\\widehat{AMB}$"],
            "correctAnswerIndex": 1,
            "explanation": "La somme des coefficients vaut $4 \\neq 0$ : on peut réduire au barycentre $G$ de $(A ; 1)$, $(B ; 2)$, $(C ; 1)$ et obtenir un cercle de centre $G$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p04_q1",
          "type": "mcq",
          "prompt": "Qu'appelle-t-on ligne de niveau $k$ de l'application $M \\mapsto \\sum \\alpha_i MA_i^2$ ?",
          "options": ["L'ensemble des points $M$ tels que $\\sum \\alpha_i MA_i^2 = k$", "Le cercle de centre $G$ et de rayon $k$", "L'ensemble des points $M$ tels que $MG = k$", "La droite passant par $G$ et de direction $\\overrightarrow{MA_1}$"],
          "correctAnswerIndex": 0,
          "explanation": "La ligne de niveau $k$ est l'ensemble des points $M$ tels que $f(M) = k$, c'est-à-dire $\\sum \\alpha_i MA_i^2 = k$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p04_q2",
          "type": "mcq",
          "prompt": "Soit $G$ le barycentre de $(A ; 3)$, $(B ; 1)$, $(C ; -2)$. Que vaut $3MA^2 + MB^2 - 2MC^2$ en fonction de $MG$ ?",
          "options": ["$2MG^2 + 3GA^2 + GB^2 - 2GC^2$", "$MG^2 + 3GA^2 + GB^2 - 2GC^2$", "$2MG^2$", "$3GA^2 + GB^2 - 2GC^2$"],
          "correctAnswerIndex": 0,
          "explanation": "La somme des coefficients vaut $2$, donc $3MA^2 + MB^2 - 2MC^2 = 2MG^2 + 3GA^2 + GB^2 - 2GC^2$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p04_q3",
          "type": "mcq",
          "prompt": "Après réduction, on obtient $2MG^2 = -6$. Quel est l'ensemble des points $M$ ?",
          "options": ["Le cercle de centre $G$ et de rayon $\\sqrt{3}$", "Le point $G$ seul", "L'ensemble vide", "La droite passant par $G$"],
          "correctAnswerIndex": 2,
          "explanation": "$MG^2 = -3$ est impossible : un carré est toujours positif ou nul. L'ensemble est vide."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p04_q4",
          "type": "mcq",
          "prompt": "On étudie $MA^2 - MB^2 = k$ dans le plan. Quelle est la nature de l'ensemble des points $M$ ?",
          "options": ["Un cercle", "Une droite (ou l'ensemble vide)", "Un point", "Un arc de cercle"],
          "correctAnswerIndex": 1,
          "explanation": "Ici $\\sum \\alpha_i = 1 - 1 = 0$ : la réduction donne une équation affine en $M$, donc une droite (ou l'ensemble vide si l'équation est impossible)."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p04_q5",
          "type": "mcq",
          "prompt": "Dans l'exercice 5 de la leçon, $H = \\text{bar}\\{(A ; 3), (B ; 1), (C ; -2)\\}$ et $3MA^2 + MB^2 - 2MC^2 = 8a^2$. Quel est le rayon du cercle obtenu ?",
          "options": ["$a\\sqrt{5}$", "$5a$", "$a\\sqrt{3}$", "$2a$"],
          "correctAnswerIndex": 0,
          "explanation": "La réduction donne $2MH^2 - 2a^2 = 8a^2$, soit $MH^2 = 5a^2$ et $MH = a\\sqrt{5}$ : le rayon est $a\\sqrt{5}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p04_q6",
          "type": "mcq",
          "prompt": "On étudie l'ensemble des points $M$ tels que $MA^2 + 2MB^2 + MC^2 = 10$. Que faut-il calculer en premier ?",
          "options": ["La distance $AB$", "La somme des coefficients $1 + 2 + 1 = 4 \\neq 0$, pour réduire au barycentre", "Le milieu de $[AC]$", "La mesure de l'angle $\\widehat{AMB}$"],
          "correctAnswerIndex": 1,
          "explanation": "La somme des coefficients vaut $4 \\neq 0$ : on peut réduire au barycentre $G$ de $(A ; 1)$, $(B ; 2)$, $(C ; 1)$ et obtenir un cercle de centre $G$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l02_barycentre_p05",
      "order": 5,
      "title": "Lignes de niveau du rapport de distances et des mesures d'angles",
      "summary": "L'ensemble des points M tels que MA/MB est constant est une médiatrice ou un cercle ; la mesure de l'angle AMB constante donne une droite, un segment ou un arc de cercle.",
      "conceptExplanation": "On étudie l'application $M \\mapsto \\frac{MA}{MB}$ avec $k > 0$. Si $k = 1$, l'ensemble des points $M$ tels que $MA = MB$ est la médiatrice du segment $[AB]$. Si $k \\neq 1$, c'est le cercle de diamètre $[G_1G_2]$ où $G_1 = \\text{bar}\\{(A ; 1), (B ; k)\\}$ et $G_2 = \\text{bar}\\{(A ; 1), (B ; -k)\\}$.\\nOn étudie aussi $M \\mapsto \\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB})$. Si la mesure vaut $0$, l'ensemble est la droite $(AB)$ privée du segment $[AB]$. Si elle vaut $\\pi$, c'est le segment $[AB]$ privé de $A$ et $B$. Si elle vaut $\\alpha$ avec $\\alpha \\in ]-\\pi ; 0[ \\cup ]0 ; \\pi[$, c'est un arc de cercle (l'arc capable) d'extrémités $A$ et $B$, privé de $A$ et $B$.",
      "keyRule": "Rapport de distances constant : médiatrice si k = 1, cercle de diamètre [G1G2] sinon ; mesure d'angle constante : droite, segment ou arc de cercle.",
      "formulas": [
        {
          "name": "Rapport de distances",
          "formula": "\\frac{MA}{MB} = k \\ (k > 0) : \\text{médiatrice si } k = 1, \\text{ cercle sinon}",
          "note": "Le cercle a pour diamètre [G1G2] avec G1 = bar{(A;1),(B;k)} et G2 = bar{(A;1),(B;-k)}."
        },
        {
          "name": "Mesure d'angle constante",
          "formula": "\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\alpha : \\text{arc de cercle si } \\alpha \\neq 0, \\pi",
          "note": "L'arc est privé de ses extrémités A et B."
        }
      ],
      "workedExample": {
        "title": "L'ensemble des points M tels que MA/MB = 2",
        "statement": "Soient $A$ et $B$ deux points distincts. Déterminer l'ensemble des points $M$ tels que $\\frac{MA}{MB} = 2$.",
        "methodSteps": [
          "Ici $k = 2 \\neq 1$ : l'ensemble est un cercle.",
          "On pose $G_1 = \\text{bar}\\{(A ; 1), (B ; 2)\\}$ et $G_2 = \\text{bar}\\{(A ; 1), (B ; -2)\\}$.",
          "L'ensemble est le cercle de diamètre $[G_1G_2]$.",
          "On peut placer $G_1$ et $G_2$ sur la droite $(AB)$ avec $\\overrightarrow{AG_1} = \\frac{2}{3}\\overrightarrow{AB}$ et $\\overrightarrow{AG_2} = -2\\overrightarrow{AB}$."
        ],
        "conclusion": "Un rapport de distances constant différent de 1 donne un cercle de diamètre [G1G2]."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Rapport de distances constant",
          "stepTheme": "Rapport de distances constant",
          "stepBadge": "Rapport de distances constant",
          "paragraphText": "• On cherche l'ensemble des points $M$ tels que $\\frac{MA}{MB} = k$ avec $k > 0$.\n• La nature de l'ensemble dépend de $k$ : médiatrice si $k = 1$, cercle si $k \\neq 1$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p05_q1",
            "type": "mcq",
            "prompt": "Soient $A$ et $B$ deux points distincts. Quel est l'ensemble des points $M$ tels que $MA = MB$ ?",
            "options": ["Le cercle de diamètre $[AB]$", "La médiatrice du segment $[AB]$", "Le segment $[AB]$", "La droite $(AB)$"],
            "correctAnswerIndex": 1,
            "explanation": "$MA = MB$ correspond à $k = 1$ : l'ensemble est la médiatrice du segment $[AB]$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cercle de diamètre [G1G2]",
          "stepTheme": "Le cercle de diamètre [G1G2]",
          "stepBadge": "Le cercle de diamètre [G1G2]",
          "paragraphText": "• Si $k \\neq 1$, l'ensemble $\\frac{MA}{MB} = k$ est le cercle de diamètre $[G_1G_2]$.\n• $G_1 = \\text{bar}\\{(A ; 1), (B ; k)\\}$ et $G_2 = \\text{bar}\\{(A ; 1), (B ; -k)\\}$ sont les deux points de $(AB)$ qui vérifient le rapport.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p05_q2",
            "type": "mcq",
            "prompt": "Soient $A$ et $B$ deux points distincts. Quel est l'ensemble des points $M$ tels que $\\frac{MA}{MB} = 2$ ?",
            "options": ["La médiatrice de $[AB]$", "Le cercle de diamètre $[G_1G_2]$ avec $G_1 = \\text{bar}\\{(A ; 1), (B ; 2)\\}$ et $G_2 = \\text{bar}\\{(A ; 1), (B ; -2)\\}$", "Le segment $[AB]$", "La droite $(AB)$ privée de $[AB]$"],
            "correctAnswerIndex": 1,
            "explanation": "Ici $k = 2 \\neq 1$ : l'ensemble est le cercle de diamètre $[G_1G_2]$ avec $G_1 = \\text{bar}\\{(A ; 1), (B ; 2)\\}$ et $G_2 = \\text{bar}\\{(A ; 1), (B ; -2)\\}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Mesure d'angle nulle ou égale à π",
          "stepTheme": "Mesure d'angle nulle ou égale à π",
          "stepBadge": "Mesure d'angle nulle ou égale à π",
          "paragraphText": "• Si $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = 0$, l'ensemble est la droite $(AB)$ privée du segment $[AB]$.\n• Si la mesure vaut $\\pi$, l'ensemble est le segment $[AB]$ privé de $A$ et $B$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p05_q3",
            "type": "mcq",
            "prompt": "Soient $A$ et $B$ deux points distincts. Quel est l'ensemble des points $M$ tels que $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\pi$ ?",
            "options": ["La droite $(AB)$ privée de $[AB]$", "Le segment $[AB]$ privé de $A$ et $B$", "Le cercle de diamètre $[AB]$", "La médiatrice de $[AB]$"],
            "correctAnswerIndex": 1,
            "explanation": "Une mesure de $\\pi$ signifie que $M$ est entre $A$ et $B$ sur la droite $(AB)$ : c'est le segment $[AB]$ privé de $A$ et $B$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'arc de cercle (arc capable)",
          "stepTheme": "L'arc de cercle (arc capable)",
          "stepBadge": "L'arc de cercle (arc capable)",
          "paragraphText": "• Si $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\alpha$ avec $\\alpha \\in ]-\\pi ; 0[ \\cup ]0 ; \\pi[$, l'ensemble est un arc de cercle d'extrémités $A$ et $B$, privé de $A$ et $B$.\n• Exemple de la leçon : dans un losange, $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MC}) = \\frac{\\pi}{6}$ donne un arc de cercle.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p05_q4",
            "type": "mcq",
            "prompt": "Soient $A$ et $B$ deux points distincts. Quel est l'ensemble des points $M$ tels que $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\frac{\\pi}{6}$ ?",
            "options": ["Un cercle entier", "Un arc de cercle d'extrémités $A$ et $B$, privé de $A$ et $B$", "Le segment $[AB]$", "La médiatrice de $[AB]$"],
            "correctAnswerIndex": 1,
            "explanation": "Une mesure constante $\\alpha = \\frac{\\pi}{6}$ (différente de $0$ et de $\\pi$) donne un arc de cercle d'extrémités $A$ et $B$, privé de $A$ et $B$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'arc exclut ses extrémités",
          "stepTheme": "L'arc exclut ses extrémités",
          "stepBadge": "L'arc exclut ses extrémités",
          "paragraphText": "• Piège : en $M = A$ ou $M = B$, le vecteur $\\overrightarrow{MA}$ ou $\\overrightarrow{MB}$ est nul et la mesure de l'angle n'est pas définie.\n• L'arc capable est donc toujours privé de ses extrémités $A$ et $B$ ; de même, le segment $[AB]$ de la mesure $\\pi$ est privé de $A$ et $B$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi l'arc de cercle de la mesure $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\alpha$ est-il privé de $A$ et $B$ ?",
            "options": ["Parce que l'arc est trop court", "Parce qu'en $M = A$ ou $M = B$, l'un des vecteurs est nul et la mesure n'est pas définie", "Parce que $\\alpha$ est un angle orienté", "Parce que le cercle n'est pas complet"],
            "correctAnswerIndex": 1,
            "explanation": "En $M = A$, $\\overrightarrow{MA} = \\overrightarrow{0}$ : la mesure de l'angle n'a pas de sens. L'arc exclut donc ses extrémités."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Mesure nulle : la droite privée du segment",
          "stepTheme": "Mesure nulle : la droite privée du segment",
          "stepBadge": "Mesure nulle : la droite privée du segment",
          "paragraphText": "• Si $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = 0$, les vecteurs $\\overrightarrow{MA}$ et $\\overrightarrow{MB}$ sont colinéaires de même sens : $M$ est sur la droite $(AB)$ mais en dehors du segment $[AB]$.\n• Entre $A$ et $B$, les deux vecteurs sont de sens contraires : la mesure vaut $\\pi$, pas $0$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p05_q6",
            "type": "mcq",
            "prompt": "Soient $A$ et $B$ deux points distincts. Quel est l'ensemble des points $M$ tels que $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = 0$ ?",
            "options": ["Le segment $[AB]$ privé de $A$ et $B$", "La droite $(AB)$ privée du segment $[AB]$", "Le cercle de diamètre $[AB]$", "La médiatrice de $[AB]$"],
            "correctAnswerIndex": 1,
            "explanation": "Une mesure nulle signifie que $\\overrightarrow{MA}$ et $\\overrightarrow{MB}$ sont colinéaires de même sens : $M$ est sur $(AB)$ mais en dehors de $[AB]$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p05_q1",
          "type": "mcq",
          "prompt": "Soient $A$ et $B$ deux points distincts. Quel est l'ensemble des points $M$ tels que $MA = MB$ ?",
          "options": ["Le cercle de diamètre $[AB]$", "La médiatrice du segment $[AB]$", "Le segment $[AB]$", "La droite $(AB)$"],
          "correctAnswerIndex": 1,
          "explanation": "$MA = MB$ correspond à $k = 1$ : l'ensemble est la médiatrice du segment $[AB]$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p05_q2",
          "type": "mcq",
          "prompt": "Soient $A$ et $B$ deux points distincts. Quel est l'ensemble des points $M$ tels que $\\frac{MA}{MB} = 2$ ?",
          "options": ["La médiatrice de $[AB]$", "Le cercle de diamètre $[G_1G_2]$ avec $G_1 = \\text{bar}\\{(A ; 1), (B ; 2)\\}$ et $G_2 = \\text{bar}\\{(A ; 1), (B ; -2)\\}$", "Le segment $[AB]$", "La droite $(AB)$ privée de $[AB]$"],
          "correctAnswerIndex": 1,
          "explanation": "Ici $k = 2 \\neq 1$ : l'ensemble est le cercle de diamètre $[G_1G_2]$ avec $G_1 = \\text{bar}\\{(A ; 1), (B ; 2)\\}$ et $G_2 = \\text{bar}\\{(A ; 1), (B ; -2)\\}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p05_q3",
          "type": "mcq",
          "prompt": "Soient $A$ et $B$ deux points distincts. Quel est l'ensemble des points $M$ tels que $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\pi$ ?",
          "options": ["La droite $(AB)$ privée de $[AB]$", "Le segment $[AB]$ privé de $A$ et $B$", "Le cercle de diamètre $[AB]$", "La médiatrice de $[AB]$"],
          "correctAnswerIndex": 1,
          "explanation": "Une mesure de $\\pi$ signifie que $M$ est entre $A$ et $B$ sur la droite $(AB)$ : c'est le segment $[AB]$ privé de $A$ et $B$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p05_q4",
          "type": "mcq",
          "prompt": "Soient $A$ et $B$ deux points distincts. Quel est l'ensemble des points $M$ tels que $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\frac{\\pi}{6}$ ?",
          "options": ["Un cercle entier", "Un arc de cercle d'extrémités $A$ et $B$, privé de $A$ et $B$", "Le segment $[AB]$", "La médiatrice de $[AB]$"],
          "correctAnswerIndex": 1,
          "explanation": "Une mesure constante $\\alpha = \\frac{\\pi}{6}$ (différente de $0$ et de $\\pi$) donne un arc de cercle d'extrémités $A$ et $B$, privé de $A$ et $B$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi l'arc de cercle de la mesure $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\alpha$ est-il privé de $A$ et $B$ ?",
          "options": ["Parce que l'arc est trop court", "Parce qu'en $M = A$ ou $M = B$, l'un des vecteurs est nul et la mesure n'est pas définie", "Parce que $\\alpha$ est un angle orienté", "Parce que le cercle n'est pas complet"],
          "correctAnswerIndex": 1,
          "explanation": "En $M = A$, $\\overrightarrow{MA} = \\overrightarrow{0}$ : la mesure de l'angle n'a pas de sens. L'arc exclut donc ses extrémités."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p05_q6",
          "type": "mcq",
          "prompt": "Soient $A$ et $B$ deux points distincts. Quel est l'ensemble des points $M$ tels que $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = 0$ ?",
          "options": ["Le segment $[AB]$ privé de $A$ et $B$", "La droite $(AB)$ privée du segment $[AB]$", "Le cercle de diamètre $[AB]$", "La médiatrice de $[AB]$"],
          "correctAnswerIndex": 1,
          "explanation": "Une mesure nulle signifie que $\\overrightarrow{MA}$ et $\\overrightarrow{MB}$ sont colinéaires de même sens : $M$ est sur $(AB)$ mais en dehors de $[AB]$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l02_barycentre_p06",
      "order": 6,
      "title": "Centre de gravité d'un solide et bilan des lignes de niveau",
      "summary": "Le centre de gravité d'un solide homogène se trouve par barycentre partiel ; bilan des trois types de lignes de niveau de la leçon.",
      "conceptExplanation": "Le centre de gravité d'un solide homogène est le point $G$ tel que, pour tout découpage du solide en parties, $G$ est le barycentre des centres de gravité des parties, affectés de leurs volumes (ou de leurs masses).\\nDans la situation complexe de la leçon, on cherche le centre de gravité d'un cube : on le découpe, on détermine le centre de gravité de chaque partie, puis on applique le barycentre partiel pour placer le point $G$ sur la diagonale $[OD]$ du cube.\\nBilan des lignes de niveau de la leçon : la somme pondérée des carrés des distances donne un cercle (ou un point, ou le vide) quand la somme des coefficients est non nulle, une droite sinon ; le rapport de distances donne une médiatrice ou un cercle ; la mesure d'un angle donne une droite, un segment ou un arc de cercle.",
      "keyRule": "Pour le centre de gravité d'un solide, on découpe, on prend les centres partiels, puis on applique le barycentre partiel.",
      "formulas": [
        {
          "name": "Centre de gravité par barycentre partiel",
          "formula": "G = \\text{bar}\\{(G_1 {;} V_1), (G_2 {;} V_2), ...\\}",
          "note": "G_i est le centre de gravité de la partie i, V_i son volume."
        }
      ],
      "workedExample": {
        "title": "Le centre de gravité d'un cube",
        "statement": "On cherche le centre de gravité $G$ d'un cube homogène. La solution du manuel place $G$ sur la diagonale $[OD]$ du cube.",
        "methodSteps": [
          "Découper le cube en parties dont on connaît le centre de gravité.",
          "Affecter chaque centre partiel du volume de sa partie.",
          "Appliquer le barycentre partiel : $G$ est le barycentre des centres partiels pondérés par les volumes.",
          "Par symétrie du cube, $G$ se trouve sur la diagonale $[OD]$."
        ],
        "conclusion": "Le barycentre partiel ramène le centre de gravité d'un solide à celui de ses parties."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Centre de gravité d'un solide",
          "stepTheme": "Centre de gravité d'un solide",
          "stepBadge": "Centre de gravité d'un solide",
          "paragraphText": "• Centre de gravité : pour un solide homogène, c'est le point $G$ tel que le solide est en équilibre quand on le suspend en $G$.\n• Mathématiquement, $G$ est l'isobarycentre de tous les points du solide.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p06_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que le centre de gravité d'un solide homogène ?",
            "options": ["Le centre de sa plus grande face", "L'isobarycentre de tous les points du solide", "Le milieu de sa plus longue diagonale, toujours", "Le point le plus lourd du solide"],
            "correctAnswerIndex": 1,
            "explanation": "Le centre de gravité d'un solide homogène est l'isobarycentre de tous ses points."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Découper puis appliquer le barycentre partiel",
          "stepTheme": "Découper puis appliquer le barycentre partiel",
          "stepBadge": "Découper puis appliquer le barycentre partiel",
          "paragraphText": "• Méthode : on découpe le solide en parties dont on connaît le centre de gravité, on affecte chaque centre partiel du volume (ou de la masse) de sa partie, puis on prend le barycentre de ces centres partiels.\n• C'est la méthode de la situation complexe de la leçon (le cube).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p06_q2",
            "type": "mcq",
            "prompt": "Pour trouver le centre de gravité d'un solide, quelle méthode utilise-t-on ?",
            "options": ["On prend le milieu de la plus longue arête", "On découpe le solide en parties, puis on prend le barycentre de leurs centres de gravité pondérés par les volumes", "On prend le barycentre des sommets seulement", "On mesure la masse totale du solide"],
            "correctAnswerIndex": 1,
            "explanation": "On découpe le solide en parties de centre de gravité connu, puis on applique le barycentre partiel avec les volumes comme coefficients."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "La coquille de signe du manuel",
          "stepTheme": "La coquille de signe du manuel",
          "stepBadge": "La coquille de signe du manuel",
          "paragraphText": "• Attention : dans la solution de la situation complexe, le manuel écrit successivement $\\overrightarrow{OG} = \\frac{1}{12}\\overrightarrow{OD}$ puis $\\overrightarrow{OG} = -\\frac{1}{12}\\overrightarrow{OD}$.\n• Les deux égalités ne peuvent pas être vraies en même temps : c'est une coquille de signe dans le manuel, reproduite ici telle quelle et signalée.",
          "konanTip": "Quand un manuel se contredit sur un signe, ne recopie pas aveuglément : signale la coquille à ton professeur et retiens la méthode, pas le signe douteux.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p06_q3",
            "type": "mcq",
            "prompt": "Dans la solution de la situation complexe (le cube), le manuel donne $\\overrightarrow{OG} = \\frac{1}{12}\\overrightarrow{OD}$ puis $\\overrightarrow{OG} = -\\frac{1}{12}\\overrightarrow{OD}$. Que faut-il en penser ?",
            "options": ["Les deux sont vraies : $G$ est à deux endroits à la fois", "C'est une coquille de signe dans le manuel : les deux ne peuvent pas être vraies en même temps", "C'est normal : le signe dépend du repère choisi", "Le point $G$ est confondu avec $O$"],
            "correctAnswerIndex": 1,
            "explanation": "Un même vecteur ne peut pas valoir à la fois $\\frac{1}{12}\\overrightarrow{OD}$ et $-\\frac{1}{12}\\overrightarrow{OD}$ : c'est une coquille de signe dans le manuel, signalée telle quelle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le point G est sur la diagonale [OD]",
          "stepTheme": "Le point G est sur la diagonale [OD]",
          "stepBadge": "Le point G est sur la diagonale [OD]",
          "paragraphText": "• Dans la situation complexe, le point $G$ cherché se trouve sur la diagonale $[OD]$ du cube.\n• C'est la symétrie du cube qui l'impose : le centre de gravité est sur toutes les diagonales, donc à leur intersection.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p06_q4",
            "type": "mcq",
            "prompt": "Dans la situation complexe, où se trouve le centre de gravité $G$ du cube ?",
            "options": ["Sur une arête du cube", "Sur la diagonale $[OD]$ du cube", "En dehors du cube", "Au milieu d'une face du cube"],
            "correctAnswerIndex": 1,
            "explanation": "La solution du manuel place $G$ sur la diagonale $[OD]$ du cube, ce que la symétrie du cube impose."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Bilan : les trois types de lignes de niveau",
          "stepTheme": "Bilan : les trois types de lignes de niveau",
          "stepBadge": "Bilan : les trois types de lignes de niveau",
          "paragraphText": "• Somme des carrés des distances : cercle (ou point, ou vide) si $\\sum \\alpha_i \\neq 0$, droite sinon.\n• Rapport de distances : médiatrice si $k = 1$, cercle de diamètre $[G_1G_2]$ sinon.\n• Mesure d'angle : droite privée du segment si $0$, segment privé de $A$ et $B$ si $\\pi$, arc de cercle sinon.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p06_q5",
            "type": "mcq",
            "prompt": "Quel ensemble obtient-on pour $\\frac{MA}{MB} = 1$ ?",
            "options": ["Un cercle", "La médiatrice de $[AB]$", "Un arc de cercle", "Le segment $[AB]$"],
            "correctAnswerIndex": 1,
            "explanation": "Pour $k = 1$, l'ensemble $\\frac{MA}{MB} = 1$ est la médiatrice du segment $[AB]$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Réduction : l'outil central de la leçon",
          "stepTheme": "Réduction : l'outil central de la leçon",
          "stepBadge": "Réduction : l'outil central de la leçon",
          "paragraphText": "• Toute la leçon repose sur la réduction : $\\sum \\alpha_i \\overrightarrow{MA_i} = (\\sum \\alpha_i) \\overrightarrow{MG}$ et $\\sum \\alpha_i MA_i^2 = (\\sum \\alpha_i) MG^2 + \\sum \\alpha_i GA_i^2$.\n• C'est elle qui transforme les sommes pondérées en expressions simples en $M$, et qui fait apparaître les cercles, les droites et les médiatrices.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l02_barycentre_p06_q6",
            "type": "mcq",
            "prompt": "Quelle formule permet de réduire $\\sum \\alpha_i MA_i^2$ quand $G$ est le barycentre des points pondérés ?",
            "options": ["$\\sum \\alpha_i MA_i^2 = (\\sum \\alpha_i) MG^2 + \\sum \\alpha_i GA_i^2$", "$\\sum \\alpha_i MA_i^2 = MG^2$", "$\\sum \\alpha_i MA_i^2 = \\sum \\alpha_i GA_i^2$", "$\\sum \\alpha_i MA_i^2 = (\\sum \\alpha_i) MA_1^2$"],
            "correctAnswerIndex": 0,
            "explanation": "La réduction donne $\\sum \\alpha_i MA_i^2 = (\\sum \\alpha_i) MG^2 + \\sum \\alpha_i GA_i^2$ : c'est la formule centrale de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p06_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que le centre de gravité d'un solide homogène ?",
          "options": ["Le centre de sa plus grande face", "L'isobarycentre de tous les points du solide", "Le milieu de sa plus longue diagonale, toujours", "Le point le plus lourd du solide"],
          "correctAnswerIndex": 1,
          "explanation": "Le centre de gravité d'un solide homogène est l'isobarycentre de tous ses points."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p06_q2",
          "type": "mcq",
          "prompt": "Pour trouver le centre de gravité d'un solide, quelle méthode utilise-t-on ?",
          "options": ["On prend le milieu de la plus longue arête", "On découpe le solide en parties, puis on prend le barycentre de leurs centres de gravité pondérés par les volumes", "On prend le barycentre des sommets seulement", "On mesure la masse totale du solide"],
          "correctAnswerIndex": 1,
          "explanation": "On découpe le solide en parties de centre de gravité connu, puis on applique le barycentre partiel avec les volumes comme coefficients."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p06_q3",
          "type": "mcq",
          "prompt": "Dans la solution de la situation complexe (le cube), le manuel donne $\\overrightarrow{OG} = \\frac{1}{12}\\overrightarrow{OD}$ puis $\\overrightarrow{OG} = -\\frac{1}{12}\\overrightarrow{OD}$. Que faut-il en penser ?",
          "options": ["Les deux sont vraies : $G$ est à deux endroits à la fois", "C'est une coquille de signe dans le manuel : les deux ne peuvent pas être vraies en même temps", "C'est normal : le signe dépend du repère choisi", "Le point $G$ est confondu avec $O$"],
          "correctAnswerIndex": 1,
          "explanation": "Un même vecteur ne peut pas valoir à la fois $\\frac{1}{12}\\overrightarrow{OD}$ et $-\\frac{1}{12}\\overrightarrow{OD}$ : c'est une coquille de signe dans le manuel, signalée telle quelle."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p06_q4",
          "type": "mcq",
          "prompt": "Dans la situation complexe, où se trouve le centre de gravité $G$ du cube ?",
          "options": ["Sur une arête du cube", "Sur la diagonale $[OD]$ du cube", "En dehors du cube", "Au milieu d'une face du cube"],
          "correctAnswerIndex": 1,
          "explanation": "La solution du manuel place $G$ sur la diagonale $[OD]$ du cube, ce que la symétrie du cube impose."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p06_q5",
          "type": "mcq",
          "prompt": "Quel ensemble obtient-on pour $\\frac{MA}{MB} = 1$ ?",
          "options": ["Un cercle", "La médiatrice de $[AB]$", "Un arc de cercle", "Le segment $[AB]$"],
          "correctAnswerIndex": 1,
          "explanation": "Pour $k = 1$, l'ensemble $\\frac{MA}{MB} = 1$ est la médiatrice du segment $[AB]$."
        },
        {
          "id": "terminale_c_maths_geometrie_l02_barycentre_p06_q6",
          "type": "mcq",
          "prompt": "Quelle formule permet de réduire $\\sum \\alpha_i MA_i^2$ quand $G$ est le barycentre des points pondérés ?",
          "options": ["$\\sum \\alpha_i MA_i^2 = (\\sum \\alpha_i) MG^2 + \\sum \\alpha_i GA_i^2$", "$\\sum \\alpha_i MA_i^2 = MG^2$", "$\\sum \\alpha_i MA_i^2 = \\sum \\alpha_i GA_i^2$", "$\\sum \\alpha_i MA_i^2 = (\\sum \\alpha_i) MA_1^2$"],
          "correctAnswerIndex": 0,
          "explanation": "La réduction donne $\\sum \\alpha_i MA_i^2 = (\\sum \\alpha_i) MG^2 + \\sum \\alpha_i GA_i^2$ : c'est la formule centrale de la leçon."
        }
      ]
    }
  ]
};
