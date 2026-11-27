import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Barycentre » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Barycentre » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L02_BARYCENTRE: CurriculumChapter = {
  "id": "premiere_c_maths_geometrie_l02_barycentre",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 2,
  "title": "Leçon 2 : Barycentre",
  "summary": "La leçon définit le barycentre de deux, trois puis quatre points pondérés, ses propriétés (homogénéité, isobarycentre, réduction, coordonnées, barycentre partiel) et les lignes de niveau, à partir de la recherche du point d'équilibre d'une plaque triangulaire chargée.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Barycentre » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_geometrie_l02_barycentre_p01",
      "order": 1,
      "title": "Barycentre de deux points pondérés",
      "summary": "Définir un point pondéré et le barycentre de deux points pondérés, et placer ce barycentre sur la droite (AB).",
      "conceptExplanation": "Un point pondéré est un couple $(A, a)$ formé d'un point $A$ du plan et d'un nombre réel non nul $a$.\nSoient $A$ et $B$ deux points du plan et $a$ et $b$ deux nombres réels tels que $a + b \\neq 0$. Il existe un point $G$ et un seul tel que $a\\overrightarrow{GA} + b\\overrightarrow{GB} = \\vec{0}$. Ce point $G$ est appelé barycentre des points pondérés $(A, a)$ et $(B, b)$ ; on note $G = \\mathrm{bar}\\{(A, a) ; (B, b)\\}$.\nConséquence : $G = \\mathrm{bar}\\{(A, a) ; (B, b)\\}$ équivaut à $\\overrightarrow{AG} = \\frac{b}{a + b}\\overrightarrow{AB}$, ce qui place $G$ sur la droite $(AB)$.",
      "keyRule": "Le barycentre de deux points pondérés existe si et seulement si la somme des coefficients est non nulle, et il appartient toujours à la droite (AB).",
      "formulas": [
        {
          "name": "Barycentre de deux points",
          "formula": "a\\overrightarrow{GA} + b\\overrightarrow{GB} = \\vec{0}",
          "note": "Avec $a + b \\neq 0$."
        },
        {
          "name": "Position sur (AB)",
          "formula": "\\overrightarrow{AG} = \\frac{b}{a + b}\\overrightarrow{AB}"
        }
      ],
      "workedExample": {
        "title": "Lire un barycentre dans une égalité vectorielle (exercice de fixation)",
        "statement": "Soient $A$, $B$ et $G$ trois points du plan tels que $2\\overrightarrow{GA} - 3\\overrightarrow{BG} = \\vec{0}$. Détermine les points pondérés pour lesquels $G$ est le barycentre.",
        "methodSteps": [
          "On remplace $\\overrightarrow{BG}$ par $-\\overrightarrow{GB}$ dans l'égalité.",
          "On obtient $2\\overrightarrow{GA} + 3\\overrightarrow{GB} = \\vec{0}$.",
          "On lit les coefficients : $2$ pour le point $A$ et $3$ pour le point $B$, de somme $5 \\neq 0$."
        ],
        "conclusion": "$G$ est le barycentre des points pondérés $(A, 2)$ et $(B, 3)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le point pondéré",
          "stepTheme": "Le point pondéré",
          "stepBadge": "Le point pondéré",
          "paragraphText": "• Point pondéré : couple $(A, a)$ où $A$ est un point du plan et $a$ un nombre réel non nul.\nExemples de la leçon : les couples $(A, 2)$ et $(B, -5)$ sont des points pondérés.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p01_q1",
            "type": "mcq",
            "prompt": "Un point pondéré est :",
            "options": [
              "Un couple formé d'un point et d'un nombre réel non nul",
              "Un couple de deux points du plan",
              "Un vecteur de norme non nulle",
              "Un nombre réel quelconque"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, un point pondéré est le couple $(A, a)$ avec $a \\neq 0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Existence et unicité du barycentre",
          "stepTheme": "Existence et unicité du barycentre",
          "stepBadge": "Existence et unicité du barycentre",
          "paragraphText": "• Propriété : $A$ et $B$ étant deux points du plan, et $a$ et $b$ deux réels tels que $a + b \\neq 0$, il existe un point $G$ et un seul tel que $a\\overrightarrow{GA} + b\\overrightarrow{GB} = \\vec{0}$.\nCe point $G$ est le barycentre des points pondérés $(A, a)$ et $(B, b)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p01_q2",
            "type": "mcq",
            "prompt": "Quelle condition sur $a$ et $b$ garantit l'existence du barycentre de $(A, a)$ et $(B, b)$ ?",
            "options": [
              "$a = b$",
              "$a \\times b \\neq 0$",
              "$a + b \\neq 0$",
              "$a - b \\neq 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La condition d'existence et d'unicité est $a + b \\neq 0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Lire les coefficients dans une égalité",
          "stepTheme": "Lire les coefficients dans une égalité",
          "stepBadge": "Lire les coefficients dans une égalité",
          "paragraphText": "• Méthode : pour reconnaître un barycentre, on écrit l'égalité sous la forme $a\\overrightarrow{GA} + b\\overrightarrow{GB} = \\vec{0}$.\nDans l'exercice de fixation, $2\\overrightarrow{GA} - 3\\overrightarrow{BG} = \\vec{0}$ devient $2\\overrightarrow{GA} + 3\\overrightarrow{GB} = \\vec{0}$ car $\\overrightarrow{BG} = -\\overrightarrow{GB}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p01_q3",
            "type": "mcq",
            "prompt": "Si $2\\overrightarrow{GA} + 3\\overrightarrow{GB} = \\vec{0}$, alors $G$ est le barycentre de :",
            "options": [
              "$(A, 3)$ et $(B, 2)$",
              "$(A, 2)$ et $(B, -3)$",
              "$(A, -2)$ et $(B, 3)$",
              "$(A, 2)$ et $(B, 3)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les coefficients sont ceux des vecteurs $\\overrightarrow{GA}$ et $\\overrightarrow{GB}$ : $2$ pour $A$ et $3$ pour $B$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La position du barycentre sur (AB)",
          "stepTheme": "La position du barycentre sur (AB)",
          "stepBadge": "La position du barycentre sur (AB)",
          "paragraphText": "• Conséquence : $\\overrightarrow{AG} = \\frac{b}{a + b}\\overrightarrow{AB}$.\nExemple de la leçon : pour $G = \\mathrm{bar}\\{(A, 2) ; (B, -3)\\}$, on a $\\overrightarrow{AG} = \\frac{-3}{2 + (-3)}\\overrightarrow{AB} = 3\\overrightarrow{AB}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p01_q4",
            "type": "mcq",
            "prompt": "Pour $G = \\mathrm{bar}\\{(A, 3) ; (B, 2)\\}$, que vaut $\\overrightarrow{AG}$ ?",
            "options": [
              "$\\frac{3}{5}\\overrightarrow{AB}$",
              "$\\frac{2}{5}\\overrightarrow{AB}$",
              "$\\frac{5}{2}\\overrightarrow{AB}$",
              "$\\frac{2}{3}\\overrightarrow{AB}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On applique la conséquence : $\\overrightarrow{AG} = \\frac{b}{a + b}\\overrightarrow{AB} = \\frac{2}{5}\\overrightarrow{AB}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le cas où la somme des coefficients est nulle",
          "stepTheme": "Le cas où la somme des coefficients est nulle",
          "stepBadge": "Le cas où la somme des coefficients est nulle",
          "paragraphText": "• Piège : si $a + b = 0$, il n'existe pas de barycentre des points pondérés $(A, a)$ et $(B, b)$.\nPar exemple, le système $(A, 2)$ et $(B, -2)$ n'a pas de barycentre, car $2 + (-2) = 0$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p01_q5",
            "type": "mcq",
            "prompt": "Le système de points pondérés $(A, 2)$ et $(B, -2)$ admet-il un barycentre ?",
            "options": [
              "Oui, le milieu de $[AB]$",
              "Oui, le point $A$",
              "Non, car la somme des coefficients est nulle",
              "Oui, le point $B$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La somme des coefficients vaut $0$ : la condition $a + b \\neq 0$ n'est pas remplie, donc pas de barycentre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Position selon les signes des coefficients",
          "stepTheme": "Position selon les signes des coefficients",
          "stepBadge": "Position selon les signes des coefficients",
          "paragraphText": "• Remarques de la leçon : si les coefficients sont de même signe, le barycentre appartient au segment $[AB]$.\nSi les coefficients sont de signes contraires, le barycentre appartient à la droite $(AB)$ privée du segment $[AB]$ ; si les coefficients sont égaux, le barycentre est le milieu de $[AB]$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p01_q6",
            "type": "mcq",
            "prompt": "Si $G = \\mathrm{bar}\\{(A, 4) ; (B, 4)\\}$, où se trouve $G$ ?",
            "options": [
              "À l'extérieur du segment $[AB]$",
              "Au milieu du segment $[AB]$",
              "Sur la perpendiculaire à $(AB)$",
              "En $A$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les coefficients sont égaux : le barycentre est le milieu de $[AB]$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p01_q1",
          "type": "mcq",
          "prompt": "Un point pondéré est :",
          "options": [
            "Un couple formé d'un point et d'un nombre réel non nul",
            "Un couple de deux points du plan",
            "Un vecteur de norme non nulle",
            "Un nombre réel quelconque"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, un point pondéré est le couple $(A, a)$ avec $a \\neq 0$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p01_q2",
          "type": "mcq",
          "prompt": "Quelle condition sur $a$ et $b$ garantit l'existence du barycentre de $(A, a)$ et $(B, b)$ ?",
          "options": [
            "$a = b$",
            "$a \\times b \\neq 0$",
            "$a + b \\neq 0$",
            "$a - b \\neq 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La condition d'existence et d'unicité est $a + b \\neq 0$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p01_q3",
          "type": "mcq",
          "prompt": "Si $2\\overrightarrow{GA} + 3\\overrightarrow{GB} = \\vec{0}$, alors $G$ est le barycentre de :",
          "options": [
            "$(A, 3)$ et $(B, 2)$",
            "$(A, 2)$ et $(B, -3)$",
            "$(A, -2)$ et $(B, 3)$",
            "$(A, 2)$ et $(B, 3)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les coefficients sont ceux des vecteurs $\\overrightarrow{GA}$ et $\\overrightarrow{GB}$ : $2$ pour $A$ et $3$ pour $B$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p01_q4",
          "type": "mcq",
          "prompt": "Pour $G = \\mathrm{bar}\\{(A, 3) ; (B, 2)\\}$, que vaut $\\overrightarrow{AG}$ ?",
          "options": [
            "$\\frac{3}{5}\\overrightarrow{AB}$",
            "$\\frac{2}{5}\\overrightarrow{AB}$",
            "$\\frac{5}{2}\\overrightarrow{AB}$",
            "$\\frac{2}{3}\\overrightarrow{AB}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On applique la conséquence : $\\overrightarrow{AG} = \\frac{b}{a + b}\\overrightarrow{AB} = \\frac{2}{5}\\overrightarrow{AB}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p01_q5",
          "type": "mcq",
          "prompt": "Le système de points pondérés $(A, 2)$ et $(B, -2)$ admet-il un barycentre ?",
          "options": [
            "Oui, le milieu de $[AB]$",
            "Oui, le point $A$",
            "Non, car la somme des coefficients est nulle",
            "Oui, le point $B$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La somme des coefficients vaut $0$ : la condition $a + b \\neq 0$ n'est pas remplie, donc pas de barycentre."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p01_q6",
          "type": "mcq",
          "prompt": "Si $G = \\mathrm{bar}\\{(A, 4) ; (B, 4)\\}$, où se trouve $G$ ?",
          "options": [
            "À l'extérieur du segment $[AB]$",
            "Au milieu du segment $[AB]$",
            "Sur la perpendiculaire à $(AB)$",
            "En $A$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les coefficients sont égaux : le barycentre est le milieu de $[AB]$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l02_barycentre_p02",
      "order": 2,
      "title": "Propriétés du barycentre de deux points",
      "summary": "Utiliser l'homogénéité, reconnaître un isobarycentre et appliquer la conservation par projection.",
      "conceptExplanation": "Homogénéité : pour tout réel non nul $k$, $G$ est barycentre de $(A, a)$ et $(B, b)$ si et seulement si $G$ est barycentre de $(A, ka)$ et $(B, kb)$ : on peut multiplier les deux coefficients par un même nombre non nul.\nIsobarycentre : le barycentre des points pondérés $(A, \\alpha)$ et $(B, \\alpha)$, avec $\\alpha \\neq 0$, est appelé isobarycentre des points $A$ et $B$ ; c'est le milieu du segment $[AB]$.\nConservation par projection : le projeté du barycentre de deux points pondérés est le barycentre des projetés de ces points affectés des mêmes coefficients.",
      "keyRule": "Multiplier les coefficients par un même réel non nul ne change pas le barycentre ; des coefficients égaux donnent le milieu du segment.",
      "formulas": [
        {
          "name": "Homogénéité",
          "formula": "G = \\mathrm{bar}\\{(A, a) {;} (B, b)\\} \\iff G = \\mathrm{bar}\\{(A, ka) {;} (B, kb)\\}",
          "note": "Pour tout réel $k \\neq 0$."
        }
      ],
      "workedExample": {
        "title": "Appliquer l'homogénéité (exercice de fixation)",
        "statement": "On donne $G = \\mathrm{bar}\\{(A, 2) ; (B, 7)\\}$. Détermine le nombre réel $a$ tel que $G = \\mathrm{bar}\\{(A, a) ; (B, 21)\\}$.",
        "methodSteps": [
          "On compare les coefficients de $B$ : $21 = 3 \\times 7$, donc le facteur commun est $k = 3$.",
          "On multiplie le coefficient de $A$ par le même facteur : $a = 2 \\times 3 = 6$."
        ],
        "conclusion": "$G = \\mathrm{bar}\\{(A, 6) ; (B, 21)\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'homogénéité du barycentre",
          "stepTheme": "L'homogénéité du barycentre",
          "stepBadge": "L'homogénéité du barycentre",
          "paragraphText": "• Propriété d'homogénéité : soit $k$ un nombre réel non nul ; $G$ est barycentre de $(A, a)$ et $(B, b)$ si et seulement si $G$ est barycentre de $(A, ka)$ et $(B, kb)$.\nOn peut donc simplifier ou amplifier les coefficients par un même facteur non nul.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p02_q1",
            "type": "mcq",
            "prompt": "D'après l'homogénéité, $G = \\mathrm{bar}\\{(A, 2) ; (B, 6)\\}$ est aussi le barycentre de :",
            "options": [
              "$(A, 1)$ et $(B, 3)$",
              "$(A, 2)$ et $(B, 3)$",
              "$(A, 4)$ et $(B, 6)$",
              "$(A, 1)$ et $(B, 6)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En divisant les deux coefficients par $2$, on obtient $(A, 1)$ et $(B, 3)$ : le barycentre ne change pas."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'isobarycentre de deux points",
          "stepTheme": "L'isobarycentre de deux points",
          "stepBadge": "L'isobarycentre de deux points",
          "paragraphText": "• Définition : le barycentre des points pondérés $(A, \\alpha)$ et $(B, \\alpha)$, où $\\alpha \\neq 0$, est appelé l'isobarycentre des points $A$ et $B$.\nC'est le milieu du segment $[AB]$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p02_q2",
            "type": "mcq",
            "prompt": "L'isobarycentre des points $A$ et $B$ est :",
            "options": [
              "Le point $A$",
              "Le milieu du segment $[AB]$",
              "Un point extérieur à $(AB)$",
              "Le point $B$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux coefficients égaux donnent le milieu du segment $[AB]$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La conservation par projection",
          "stepTheme": "La conservation par projection",
          "stepBadge": "La conservation par projection",
          "paragraphText": "• Propriété : le projeté du barycentre de deux points pondérés est le barycentre des projetés de ces points affectés des mêmes coefficients.\nSi une projection envoie $A$, $B$ et $G$ sur $A'$, $B'$ et $G'$, alors $G' = \\mathrm{bar}\\{(A', a) ; (B', b)\\}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p02_q3",
            "type": "mcq",
            "prompt": "Si $G = \\mathrm{bar}\\{(A, a) ; (B, b)\\}$ et si une projection envoie $A$, $B$, $G$ sur $A'$, $B'$, $G'$, alors $G'$ est :",
            "options": [
              "Le milieu de $[A'B']$",
              "Le projeté de $A$ seulement",
              "Le barycentre de $(A', b)$ et $(B', a)$",
              "Le barycentre de $(A', a)$ et $(B', b)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La projection conserve le barycentre avec les mêmes coefficients, dans le même ordre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Retrouver un coefficient par homogénéité",
          "stepTheme": "Retrouver un coefficient par homogénéité",
          "stepBadge": "Retrouver un coefficient par homogénéité",
          "paragraphText": "• Méthode : on repère le facteur $k$ qui fait passer d'un ancien coefficient au nouveau, puis on l'applique à l'autre coefficient.\nDans l'exercice de fixation, $21 = 3 \\times 7$ donne $k = 3$, appliqué ensuite au coefficient de $A$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p02_q4",
            "type": "mcq",
            "prompt": "On donne $G = \\mathrm{bar}\\{(A, 2) ; (B, 7)\\}$. Quel coefficient faut-il affecter à $A$ pour écrire $G$ avec le coefficient $21$ pour $B$ ?",
            "options": [
              "$14$",
              "$6$",
              "$21$",
              "$42$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le coefficient de $B$ est multiplié par $3$ (de $7$ à $21$), donc celui de $A$ passe de $2$ à $2 \\times 3 = 6$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le facteur doit être non nul et commun",
          "stepTheme": "Le facteur doit être non nul et commun",
          "stepBadge": "Le facteur doit être non nul et commun",
          "paragraphText": "• Piège : l'homogénéité exige un facteur $k$ non nul, appliqué aux deux coefficients à la fois.\nMultiplier un seul des deux coefficients, ou multiplier par $0$, change le point ou détruit le système.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p02_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces transformations conserve le barycentre de $(A, 2)$ et $(B, 7)$ ?",
            "options": [
              "Multiplier le coefficient de $A$ par $3$ seulement",
              "Multiplier les deux coefficients par $0$",
              "Multiplier les deux coefficients par $3$",
              "Ajouter $3$ aux deux coefficients"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Seule la multiplication des deux coefficients par un même nombre non nul conserve le barycentre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître un isobarycentre",
          "stepTheme": "Reconnaître un isobarycentre",
          "stepBadge": "Reconnaître un isobarycentre",
          "paragraphText": "• Exemple de la leçon : $G = \\mathrm{bar}\\{(A, 3) ; (B, 3)\\}$ équivaut à dire que $G$ est l'isobarycentre des points $A$ et $B$.\n$G$ est alors le milieu du segment $[AB]$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p02_q6",
            "type": "mcq",
            "prompt": "Que signifie $G = \\mathrm{bar}\\{(A, 3) ; (B, 3)\\}$ ?",
            "options": [
              "$G$ est en $A$",
              "$G$ est le milieu de $[AB]$",
              "$G$ est extérieur au segment $[AB]$",
              "$G$ n'existe pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les coefficients sont égaux à $3$ : $G$ est l'isobarycentre, donc le milieu de $[AB]$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p02_q1",
          "type": "mcq",
          "prompt": "D'après l'homogénéité, $G = \\mathrm{bar}\\{(A, 2) ; (B, 6)\\}$ est aussi le barycentre de :",
          "options": [
            "$(A, 1)$ et $(B, 3)$",
            "$(A, 2)$ et $(B, 3)$",
            "$(A, 4)$ et $(B, 6)$",
            "$(A, 1)$ et $(B, 6)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En divisant les deux coefficients par $2$, on obtient $(A, 1)$ et $(B, 3)$ : le barycentre ne change pas."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p02_q2",
          "type": "mcq",
          "prompt": "L'isobarycentre des points $A$ et $B$ est :",
          "options": [
            "Le point $A$",
            "Le milieu du segment $[AB]$",
            "Un point extérieur à $(AB)$",
            "Le point $B$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux coefficients égaux donnent le milieu du segment $[AB]$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p02_q3",
          "type": "mcq",
          "prompt": "Si $G = \\mathrm{bar}\\{(A, a) ; (B, b)\\}$ et si une projection envoie $A$, $B$, $G$ sur $A'$, $B'$, $G'$, alors $G'$ est :",
          "options": [
            "Le milieu de $[A'B']$",
            "Le projeté de $A$ seulement",
            "Le barycentre de $(A', b)$ et $(B', a)$",
            "Le barycentre de $(A', a)$ et $(B', b)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La projection conserve le barycentre avec les mêmes coefficients, dans le même ordre."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p02_q4",
          "type": "mcq",
          "prompt": "On donne $G = \\mathrm{bar}\\{(A, 2) ; (B, 7)\\}$. Quel coefficient faut-il affecter à $A$ pour écrire $G$ avec le coefficient $21$ pour $B$ ?",
          "options": [
            "$14$",
            "$6$",
            "$21$",
            "$42$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le coefficient de $B$ est multiplié par $3$ (de $7$ à $21$), donc celui de $A$ passe de $2$ à $2 \\times 3 = 6$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p02_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces transformations conserve le barycentre de $(A, 2)$ et $(B, 7)$ ?",
          "options": [
            "Multiplier le coefficient de $A$ par $3$ seulement",
            "Multiplier les deux coefficients par $0$",
            "Multiplier les deux coefficients par $3$",
            "Ajouter $3$ aux deux coefficients"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Seule la multiplication des deux coefficients par un même nombre non nul conserve le barycentre."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p02_q6",
          "type": "mcq",
          "prompt": "Que signifie $G = \\mathrm{bar}\\{(A, 3) ; (B, 3)\\}$ ?",
          "options": [
            "$G$ est en $A$",
            "$G$ est le milieu de $[AB]$",
            "$G$ est extérieur au segment $[AB]$",
            "$G$ n'existe pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les coefficients sont égaux à $3$ : $G$ est l'isobarycentre, donc le milieu de $[AB]$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l02_barycentre_p03",
      "order": 3,
      "title": "Réduction et coordonnées pour deux points pondérés",
      "summary": "Réduire une somme vectorielle pondérée et calculer les coordonnées du barycentre de deux points.",
      "conceptExplanation": "Réduction : soit $(A, a)$ et $(B, b)$ deux points pondérés tels que $a + b \\neq 0$ et $G$ leur barycentre. Pour tout point $M$ du plan, $a\\overrightarrow{MA} + b\\overrightarrow{MB} = (a + b)\\overrightarrow{MG}$.\nRemarque : lorsque $a + b = 0$, on a $a\\overrightarrow{MA} + b\\overrightarrow{MB} = a\\overrightarrow{BA}$, un vecteur indépendant du point $M$.\nCoordonnées : dans un repère $(O, \\vec{i}, \\vec{j})$, si $A(x_A ; y_A)$ et $B(x_B ; y_B)$, alors le barycentre $G$ de $(A, a)$ et $(B, b)$ a pour coordonnées $x_G = \\frac{a x_A + b x_B}{a + b}$ et $y_G = \\frac{a y_A + b y_B}{a + b}$.",
      "keyRule": "La somme pondérée se réduit en un seul vecteur porté par $\\overrightarrow{MG}$, de coefficient la somme des coefficients.",
      "formulas": [
        {
          "name": "Réduction de la somme",
          "formula": "a\\overrightarrow{MA} + b\\overrightarrow{MB} = (a + b)\\overrightarrow{MG}"
        },
        {
          "name": "Coordonnées du barycentre",
          "formula": "G\\left(\\frac{a x_A + b x_B}{a + b} ; \\frac{a y_A + b y_B}{a + b}\\right)"
        }
      ],
      "workedExample": {
        "title": "Coordonnées d'un barycentre de deux points (exercice de fixation)",
        "statement": "Soient $A(1 ; 2)$ et $B(-1 ; 3)$ dans un repère $(O, \\vec{i}, \\vec{j})$. Détermine les coordonnées du barycentre $G$ du système $\\{(A, -1) ; (B, 2)\\}$.",
        "methodSteps": [
          "La somme des coefficients est $-1 + 2 = 1$.",
          "Abscisse : $x_G = \\frac{-1 \\times 1 + 2 \\times (-1)}{1} = -3$.",
          "Ordonnée : $y_G = \\frac{-1 \\times 2 + 2 \\times 3}{1} = 4$."
        ],
        "conclusion": "Le barycentre est le point $G(-3 ; 4)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La réduction de la somme",
          "stepTheme": "La réduction de la somme",
          "stepBadge": "La réduction de la somme",
          "paragraphText": "• Propriété : si $G$ est le barycentre de $(A, a)$ et $(B, b)$ avec $a + b \\neq 0$, alors pour tout point $M$ du plan, $a\\overrightarrow{MA} + b\\overrightarrow{MB} = (a + b)\\overrightarrow{MG}$.\nToute la somme se ramène au seul vecteur $\\overrightarrow{MG}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p03_q1",
            "type": "mcq",
            "prompt": "Si $G$ est le barycentre de $(A, a)$ et $(B, b)$, alors $a\\overrightarrow{MA} + b\\overrightarrow{MB}$ est égal à :",
            "options": [
              "$(a - b)\\overrightarrow{MG}$",
              "$(a + b)\\overrightarrow{MG}$",
              "$\\overrightarrow{AB}$",
              "$\\vec{0}$ pour tout $M$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le coefficient de la réduction est la somme $a + b$ des coefficients."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Réduire avec les coefficients 3 et 1",
          "stepTheme": "Réduire avec les coefficients 3 et 1",
          "stepBadge": "Réduire avec les coefficients 3 et 1",
          "paragraphText": "• Exercice de fixation : soit $K$ le barycentre des points pondérés $(C, 3)$ et $(D, 1)$.\nPour tout point $M$ du plan, la réduction donne $3\\overrightarrow{MC} + \\overrightarrow{MD} = 4\\overrightarrow{MK}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p03_q2",
            "type": "mcq",
            "prompt": "Si $K$ est le barycentre de $(C, 3)$ et $(D, 1)$, alors $3\\overrightarrow{MC} + \\overrightarrow{MD}$ est égal à :",
            "options": [
              "$2\\overrightarrow{MK}$",
              "$3\\overrightarrow{MK}$",
              "$4\\overrightarrow{MK}$",
              "$\\overrightarrow{MK}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La somme des coefficients est $3 + 1 = 4$, d'où le coefficient $4$ devant $\\overrightarrow{MK}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cas particulier de somme nulle",
          "stepTheme": "Le cas particulier de somme nulle",
          "stepBadge": "Le cas particulier de somme nulle",
          "paragraphText": "• Remarque de la leçon : lorsque $a + b = 0$, la somme $a\\overrightarrow{MA} + b\\overrightarrow{MB}$ devient $a\\overrightarrow{BA}$.\nCe vecteur ne dépend plus du point $M$ choisi.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p03_q3",
            "type": "mcq",
            "prompt": "Si $b = -a$ avec $a \\neq 0$, alors $a\\overrightarrow{MA} + b\\overrightarrow{MB}$ est égal à :",
            "options": [
              "$a\\overrightarrow{BA}$",
              "$a\\overrightarrow{AB}$",
              "$2a\\overrightarrow{MG}$",
              "$\\vec{0}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $b = -a$, la somme vaut $a(\\overrightarrow{MA} - \\overrightarrow{MB}) = a\\overrightarrow{BA}$, indépendant de $M$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer l'abscisse du barycentre",
          "stepTheme": "Calculer l'abscisse du barycentre",
          "stepBadge": "Calculer l'abscisse du barycentre",
          "paragraphText": "• Méthode : l'abscisse de $G$ est la moyenne pondérée des abscisses, $x_G = \\frac{a x_A + b x_B}{a + b}$.\nDans l'exercice de fixation, $A(1 ; 2)$, $B(-1 ; 3)$ et les coefficients $-1$ et $2$ donnent $x_G = -3$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p03_q4",
            "type": "mcq",
            "prompt": "Pour $A(1 ; 2)$, $B(-1 ; 3)$ et le système $\\{(A, -1) ; (B, 2)\\}$, l'abscisse du barycentre est :",
            "options": [
              "$3$",
              "$-1$",
              "$1$",
              "$-3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $\\frac{-1 \\times 1 + 2 \\times (-1)}{-1 + 2} = \\frac{-3}{1} = -3$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calculer l'ordonnée du barycentre",
          "stepTheme": "Calculer l'ordonnée du barycentre",
          "stepBadge": "Calculer l'ordonnée du barycentre",
          "paragraphText": "• Méthode : l'ordonnée de $G$ se calcule comme l'abscisse, avec les ordonnées des points.\nDans l'exercice de fixation, $y_G = \\frac{-1 \\times 2 + 2 \\times 3}{1} = 4$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p03_q5",
            "type": "mcq",
            "prompt": "Pour le même système $\\{(A, -1) ; (B, 2)\\}$ avec $A(1 ; 2)$ et $B(-1 ; 3)$, l'ordonnée du barycentre est :",
            "options": [
              "$4$",
              "$5$",
              "$1$",
              "$-4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $\\frac{-2 + 6}{1} = 4$ : le barycentre est $G(-3 ; 4)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier de diviser par la somme",
          "stepTheme": "Ne pas oublier de diviser par la somme",
          "stepBadge": "Ne pas oublier de diviser par la somme",
          "paragraphText": "• Piège : les coordonnées du barycentre sont des moyennes pondérées ; il faut diviser par la somme des coefficients.\nOublier cette division donne un point différent dès que la somme n'est pas égale à $1$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p03_q6",
            "type": "mcq",
            "prompt": "Pour calculer $x_G$, par quoi divise-t-on $a x_A + b x_B$ ?",
            "options": [
              "Par $a \\times b$",
              "Par $a + b$",
              "Par $a - b$",
              "Par $2$ dans tous les cas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La formule divise par la somme des coefficients $a + b$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p03_q1",
          "type": "mcq",
          "prompt": "Si $G$ est le barycentre de $(A, a)$ et $(B, b)$, alors $a\\overrightarrow{MA} + b\\overrightarrow{MB}$ est égal à :",
          "options": [
            "$(a - b)\\overrightarrow{MG}$",
            "$(a + b)\\overrightarrow{MG}$",
            "$\\overrightarrow{AB}$",
            "$\\vec{0}$ pour tout $M$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le coefficient de la réduction est la somme $a + b$ des coefficients."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p03_q2",
          "type": "mcq",
          "prompt": "Si $K$ est le barycentre de $(C, 3)$ et $(D, 1)$, alors $3\\overrightarrow{MC} + \\overrightarrow{MD}$ est égal à :",
          "options": [
            "$2\\overrightarrow{MK}$",
            "$3\\overrightarrow{MK}$",
            "$4\\overrightarrow{MK}$",
            "$\\overrightarrow{MK}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La somme des coefficients est $3 + 1 = 4$, d'où le coefficient $4$ devant $\\overrightarrow{MK}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p03_q3",
          "type": "mcq",
          "prompt": "Si $b = -a$ avec $a \\neq 0$, alors $a\\overrightarrow{MA} + b\\overrightarrow{MB}$ est égal à :",
          "options": [
            "$a\\overrightarrow{BA}$",
            "$a\\overrightarrow{AB}$",
            "$2a\\overrightarrow{MG}$",
            "$\\vec{0}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $b = -a$, la somme vaut $a(\\overrightarrow{MA} - \\overrightarrow{MB}) = a\\overrightarrow{BA}$, indépendant de $M$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p03_q4",
          "type": "mcq",
          "prompt": "Pour $A(1 ; 2)$, $B(-1 ; 3)$ et le système $\\{(A, -1) ; (B, 2)\\}$, l'abscisse du barycentre est :",
          "options": [
            "$3$",
            "$-1$",
            "$1$",
            "$-3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $\\frac{-1 \\times 1 + 2 \\times (-1)}{-1 + 2} = \\frac{-3}{1} = -3$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p03_q5",
          "type": "mcq",
          "prompt": "Pour le même système $\\{(A, -1) ; (B, 2)\\}$ avec $A(1 ; 2)$ et $B(-1 ; 3)$, l'ordonnée du barycentre est :",
          "options": [
            "$4$",
            "$5$",
            "$1$",
            "$-4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $\\frac{-2 + 6}{1} = 4$ : le barycentre est $G(-3 ; 4)$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p03_q6",
          "type": "mcq",
          "prompt": "Pour calculer $x_G$, par quoi divise-t-on $a x_A + b x_B$ ?",
          "options": [
            "Par $a \\times b$",
            "Par $a + b$",
            "Par $a - b$",
            "Par $2$ dans tous les cas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La formule divise par la somme des coefficients $a + b$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l02_barycentre_p04",
      "order": 4,
      "title": "Barycentre de trois points pondérés",
      "summary": "Définir le barycentre de trois points pondérés et utiliser ses propriétés : homogénéité, isobarycentre et conséquence pour placer G.",
      "conceptExplanation": "Soient $(A, a)$, $(B, b)$ et $(C, c)$ trois points pondérés tels que $a + b + c \\neq 0$. Il existe un unique point $G$ vérifiant $a\\overrightarrow{GA} + b\\overrightarrow{GB} + c\\overrightarrow{GC} = \\vec{0}$ ; ce point est le barycentre des trois points pondérés, noté $G = \\mathrm{bar}\\{(A, a) ; (B, b) ; (C, c)\\}$.\nConséquence : $\\overrightarrow{AG} = \\frac{b}{a + b + c}\\overrightarrow{AB} + \\frac{c}{a + b + c}\\overrightarrow{AC}$.\nL'homogénéité reste vraie avec trois points, et l'isobarycentre de trois points non alignés est le centre de gravité du triangle.",
      "keyRule": "Trois points pondérés ont un barycentre dès que la somme des trois coefficients est non nulle ; les propriétés du cas de deux points se prolongent.",
      "formulas": [
        {
          "name": "Barycentre de trois points",
          "formula": "a\\overrightarrow{GA} + b\\overrightarrow{GB} + c\\overrightarrow{GC} = \\vec{0}",
          "note": "Avec $a + b + c \\neq 0$."
        }
      ],
      "workedExample": {
        "title": "Position de G par la conséquence (exemple de la leçon)",
        "statement": "On suppose que $-2\\overrightarrow{GA} + 6\\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$. Exprime $\\overrightarrow{AG}$ en fonction de $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.",
        "methodSteps": [
          "Les coefficients sont $-2$, $6$ et $1$, de somme $5$.",
          "On applique la conséquence : $\\overrightarrow{AG} = \\frac{6}{5}\\overrightarrow{AB} + \\frac{1}{5}\\overrightarrow{AC}$."
        ],
        "conclusion": "Le point $G$ se place dans le repère d'origine $A$ grâce aux deux coefficients $\\frac{6}{5}$ et $\\frac{1}{5}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le barycentre de trois points pondérés",
          "stepTheme": "Le barycentre de trois points pondérés",
          "stepBadge": "Le barycentre de trois points pondérés",
          "paragraphText": "• Définition : si $a + b + c \\neq 0$, il existe un unique point $G$ tel que $a\\overrightarrow{GA} + b\\overrightarrow{GB} + c\\overrightarrow{GC} = \\vec{0}$.\nCe point est le barycentre des points pondérés $(A, a)$, $(B, b)$ et $(C, c)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p04_q1",
            "type": "mcq",
            "prompt": "Quelle condition assure l'existence du barycentre de trois points pondérés $(A, a)$, $(B, b)$, $(C, c)$ ?",
            "options": [
              "$a + b + c \\neq 0$",
              "$a = b = c$",
              "$a \\times b \\times c \\neq 0$",
              "$a + b \\neq 0$ seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La condition porte sur la somme des trois coefficients : $a + b + c \\neq 0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Lire un barycentre de trois points",
          "stepTheme": "Lire un barycentre de trois points",
          "stepBadge": "Lire un barycentre de trois points",
          "paragraphText": "• Méthode de l'exercice de fixation : l'égalité $\\overrightarrow{AG} + 2\\overrightarrow{BG} + \\overrightarrow{GC} = \\vec{0}$ se réécrit avec les vecteurs d'origine $G$.\nComme $\\overrightarrow{AG} = -\\overrightarrow{GA}$ et $\\overrightarrow{BG} = -\\overrightarrow{GB}$ alors que $\\overrightarrow{GC}$ garde son origine $G$, on obtient $-\\overrightarrow{GA} - 2\\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p04_q2",
            "type": "mcq",
            "prompt": "L'égalité $\\overrightarrow{AG} + 2\\overrightarrow{BG} + \\overrightarrow{GC} = \\vec{0}$ montre que $G$ est le barycentre de :",
            "options": [
              "$(A, 1)$, $(B, 2)$, $(C, -1)$",
              "$(A, -1)$, $(B, -2)$, $(C, 1)$",
              "$(A, 1)$, $(B, 2)$, $(C, 1)$",
              "$(A, 2)$, $(B, 1)$, $(C, 1)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Après réécriture, les coefficients devant $\\overrightarrow{GA}$, $\\overrightarrow{GB}$ et $\\overrightarrow{GC}$ sont $-1$, $-2$ et $1$, de somme $-2 \\neq 0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La conséquence pour placer G",
          "stepTheme": "La conséquence pour placer G",
          "stepBadge": "La conséquence pour placer G",
          "paragraphText": "• Conséquence : $a\\overrightarrow{GA} + b\\overrightarrow{GB} + c\\overrightarrow{GC} = \\vec{0}$ équivaut à $\\overrightarrow{AG} = \\frac{b}{a + b + c}\\overrightarrow{AB} + \\frac{c}{a + b + c}\\overrightarrow{AC}$.\nC'est l'outil de construction du barycentre de trois points.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p04_q3",
            "type": "mcq",
            "prompt": "Si $-2\\overrightarrow{GA} + 6\\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$, alors $\\overrightarrow{AG}$ est égal à :",
            "options": [
              "$\\frac{6}{5}\\overrightarrow{AB} + \\frac{1}{5}\\overrightarrow{AC}$",
              "$6\\overrightarrow{AB} + \\overrightarrow{AC}$",
              "$\\frac{1}{5}\\overrightarrow{AB} + \\frac{6}{5}\\overrightarrow{AC}$",
              "$\\frac{3}{5}\\overrightarrow{AB} + \\frac{1}{5}\\overrightarrow{AC}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La somme des coefficients est $5$ ; les coefficients de $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont $\\frac{6}{5}$ et $\\frac{1}{5}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'homogénéité avec trois points",
          "stepTheme": "L'homogénéité avec trois points",
          "stepBadge": "L'homogénéité avec trois points",
          "paragraphText": "• Exercice de fixation : on donne $G = \\mathrm{bar}\\{(A, 1) ; (B, -7) ; (C, -4)\\}$ et on cherche les coefficients quand celui de $B$ devient $\\frac{14}{3}$.\nLe facteur est $-\\frac{2}{3}$, car $\\frac{14}{3} = -\\frac{2}{3} \\times (-7)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p04_q4",
            "type": "mcq",
            "prompt": "Pour $G = \\mathrm{bar}\\{(A, 1) ; (B, -7) ; (C, -4)\\}$, si le coefficient de $B$ devient $\\frac{14}{3}$, celui de $C$ devient :",
            "options": [
              "$-\\frac{8}{3}$",
              "$\\frac{8}{3}$",
              "$-4$",
              "$\\frac{14}{3}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le facteur commun est $-\\frac{2}{3}$ ; appliqué à $-4$, il donne $\\frac{8}{3}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'isobarycentre de trois points",
          "stepTheme": "L'isobarycentre de trois points",
          "stepBadge": "L'isobarycentre de trois points",
          "paragraphText": "• Définition : le barycentre des points pondérés $(A, \\alpha)$, $(B, \\alpha)$ et $(C, \\alpha)$, où $\\alpha \\neq 0$, est l'isobarycentre des trois points $A$, $B$ et $C$.\nRemarque de la leçon : pour trois points non alignés, c'est le centre de gravité du triangle $ABC$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p04_q5",
            "type": "mcq",
            "prompt": "L'isobarycentre de trois points non alignés $A$, $B$ et $C$ est :",
            "options": [
              "Le milieu de $[BC]$",
              "Le centre de gravité du triangle $ABC$",
              "Le point $A$",
              "Un point de la droite $(BC)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la remarque de la leçon : l'isobarycentre est le centre de gravité du triangle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Changer le signe en changeant l'origine",
          "stepTheme": "Changer le signe en changeant l'origine",
          "stepBadge": "Changer le signe en changeant l'origine",
          "paragraphText": "• Piège : $\\overrightarrow{AG}$ et $\\overrightarrow{GA}$ sont opposés, de même que $\\overrightarrow{BG}$ et $\\overrightarrow{GB}$.\nOublier ce changement de signe fausse tous les coefficients lus dans une égalité vectorielle.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p04_q6",
            "type": "mcq",
            "prompt": "Le vecteur $\\overrightarrow{AG}$ est égal à :",
            "options": [
              "$\\overrightarrow{GA}$",
              "$-\\overrightarrow{GA}$",
              "$2\\overrightarrow{GA}$",
              "$\\vec{0}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux vecteurs de même support, de même longueur et de sens contraires sont opposés : $\\overrightarrow{AG} = -\\overrightarrow{GA}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p04_q1",
          "type": "mcq",
          "prompt": "Quelle condition assure l'existence du barycentre de trois points pondérés $(A, a)$, $(B, b)$, $(C, c)$ ?",
          "options": [
            "$a + b + c \\neq 0$",
            "$a = b = c$",
            "$a \\times b \\times c \\neq 0$",
            "$a + b \\neq 0$ seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La condition porte sur la somme des trois coefficients : $a + b + c \\neq 0$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p04_q2",
          "type": "mcq",
          "prompt": "L'égalité $\\overrightarrow{AG} + 2\\overrightarrow{BG} + \\overrightarrow{GC} = \\vec{0}$ montre que $G$ est le barycentre de :",
          "options": [
            "$(A, 1)$, $(B, 2)$, $(C, -1)$",
            "$(A, -1)$, $(B, -2)$, $(C, 1)$",
            "$(A, 1)$, $(B, 2)$, $(C, 1)$",
            "$(A, 2)$, $(B, 1)$, $(C, 1)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Après réécriture, les coefficients devant $\\overrightarrow{GA}$, $\\overrightarrow{GB}$ et $\\overrightarrow{GC}$ sont $-1$, $-2$ et $1$, de somme $-2 \\neq 0$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p04_q3",
          "type": "mcq",
          "prompt": "Si $-2\\overrightarrow{GA} + 6\\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$, alors $\\overrightarrow{AG}$ est égal à :",
          "options": [
            "$\\frac{6}{5}\\overrightarrow{AB} + \\frac{1}{5}\\overrightarrow{AC}$",
            "$6\\overrightarrow{AB} + \\overrightarrow{AC}$",
            "$\\frac{1}{5}\\overrightarrow{AB} + \\frac{6}{5}\\overrightarrow{AC}$",
            "$\\frac{3}{5}\\overrightarrow{AB} + \\frac{1}{5}\\overrightarrow{AC}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La somme des coefficients est $5$ ; les coefficients de $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont $\\frac{6}{5}$ et $\\frac{1}{5}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p04_q4",
          "type": "mcq",
          "prompt": "Pour $G = \\mathrm{bar}\\{(A, 1) ; (B, -7) ; (C, -4)\\}$, si le coefficient de $B$ devient $\\frac{14}{3}$, celui de $C$ devient :",
          "options": [
            "$-\\frac{8}{3}$",
            "$\\frac{8}{3}$",
            "$-4$",
            "$\\frac{14}{3}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le facteur commun est $-\\frac{2}{3}$ ; appliqué à $-4$, il donne $\\frac{8}{3}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p04_q5",
          "type": "mcq",
          "prompt": "L'isobarycentre de trois points non alignés $A$, $B$ et $C$ est :",
          "options": [
            "Le milieu de $[BC]$",
            "Le centre de gravité du triangle $ABC$",
            "Le point $A$",
            "Un point de la droite $(BC)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la remarque de la leçon : l'isobarycentre est le centre de gravité du triangle."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p04_q6",
          "type": "mcq",
          "prompt": "Le vecteur $\\overrightarrow{AG}$ est égal à :",
          "options": [
            "$\\overrightarrow{GA}$",
            "$-\\overrightarrow{GA}$",
            "$2\\overrightarrow{GA}$",
            "$\\vec{0}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux vecteurs de même support, de même longueur et de sens contraires sont opposés : $\\overrightarrow{AG} = -\\overrightarrow{GA}$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l02_barycentre_p05",
      "order": 5,
      "title": "Réduction, coordonnées et barycentre partiel pour trois points",
      "summary": "Réduire une somme de trois vecteurs pondérés, calculer les coordonnées du barycentre et utiliser un barycentre partiel pour construire G.",
      "conceptExplanation": "Réduction : si $G$ est le barycentre de $(A, a)$, $(B, b)$ et $(C, c)$, alors pour tout point $M$, $a\\overrightarrow{MA} + b\\overrightarrow{MB} + c\\overrightarrow{MC} = (a + b + c)\\overrightarrow{MG}$. Lorsque $a + b + c = 0$, cette somme est indépendante du point $M$.\nCoordonnées : les coordonnées de $G$ sont les moyennes pondérées des coordonnées des trois points, avec division par $a + b + c$.\nBarycentre partiel : si $H$ est le barycentre de $(A, a)$ et $(B, b)$ avec $a + b \\neq 0$, alors le barycentre de $(A, a)$, $(B, b)$ et $(C, c)$ est aussi le barycentre de $(H, a + b)$ et $(C, c)$. On ne change pas le barycentre en remplaçant deux points par leur barycentre partiel affecté de la somme des coefficients.",
      "keyRule": "Le barycentre partiel ramène la construction d'un barycentre de trois points à deux barycentres de deux points successifs.",
      "formulas": [
        {
          "name": "Réduction pour trois points",
          "formula": "a\\overrightarrow{MA} + b\\overrightarrow{MB} + c\\overrightarrow{MC} = (a + b + c)\\overrightarrow{MG}"
        },
        {
          "name": "Barycentre partiel",
          "formula": "G = \\mathrm{bar}\\{(H, a + b) {;} (C, c)\\} \\text{ si } H = \\mathrm{bar}\\{(A, a) {;} (B, b)\\}"
        }
      ],
      "workedExample": {
        "title": "La plaque triangulaire en équilibre (situation complexe)",
        "statement": "Une plaque triangulaire $ABC$ porte des masses $2$ en $A$, $5$ en $B$ et $3$ en $C$. Détermine la position du point d'équilibre $G$, barycentre du système $\\{(A, 2) ; (B, 5) ; (C, 3)\\}$.",
        "methodSteps": [
          "On détermine $H$, barycentre partiel de $(A, 2)$ et $(C, 3)$ : $\\overrightarrow{AH} = \\frac{3}{5}\\overrightarrow{AC}$, donc $H$ est sur le segment $[AC]$.",
          "Par le barycentre partiel, $G = \\mathrm{bar}\\{(H, 5) ; (B, 5)\\}$.",
          "$G$ est donc l'isobarycentre de $H$ et $B$."
        ],
        "conclusion": "La position exacte de $G$ est le milieu du segment $[BH]$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La réduction pour trois points",
          "stepTheme": "La réduction pour trois points",
          "stepBadge": "La réduction pour trois points",
          "paragraphText": "• Propriété : pour tout point $M$, $a\\overrightarrow{MA} + b\\overrightarrow{MB} + c\\overrightarrow{MC} = (a + b + c)\\overrightarrow{MG}$.\nLe coefficient est encore la somme de tous les coefficients.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p05_q1",
            "type": "mcq",
            "prompt": "Si $E$ est le barycentre de $(A, -1)$, $(B, 4)$ et $(C, -7)$, alors $-\\overrightarrow{MA} + 4\\overrightarrow{MB} - 7\\overrightarrow{MC}$ est égal à :",
            "options": [
              "$-4\\overrightarrow{ME}$",
              "$4\\overrightarrow{ME}$",
              "$-10\\overrightarrow{ME}$",
              "$\\vec{0}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La somme des coefficients est $-1 + 4 - 7 = -4$, d'où $-4\\overrightarrow{ME}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les coordonnées pour trois points",
          "stepTheme": "Les coordonnées pour trois points",
          "stepBadge": "Les coordonnées pour trois points",
          "paragraphText": "• Méthode : chaque coordonnée de $G$ est la moyenne pondérée des coordonnées correspondantes des trois points.\nDans l'exercice de fixation, avec $A(1 ; 2)$, $B(-1 ; 3)$, $C(0 ; -2)$ et le système $\\{(A, -1) ; (B, 2) ; (C, 3)\\}$, la somme des coefficients est $4$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p05_q2",
            "type": "mcq",
            "prompt": "L'abscisse du barycentre de ce système est :",
            "options": [
              "$-3$",
              "$\\frac{3}{4}$",
              "$-\\frac{3}{4}$",
              "$\\frac{1}{4}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $\\frac{-1 \\times 1 + 2 \\times (-1) + 3 \\times 0}{-1 + 2 + 3} = \\frac{-3}{4}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le barycentre partiel",
          "stepTheme": "Le barycentre partiel",
          "stepBadge": "Le barycentre partiel",
          "paragraphText": "• Définition : $H$, barycentre de deux des trois points pondérés, est appelé barycentre partiel de ces deux points.\nLe barycentre total s'obtient ensuite avec $H$ affecté de la somme des deux coefficients et le troisième point.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p05_q3",
            "type": "mcq",
            "prompt": "Dans le système $\\{(A, 1) ; (B, 2) ; (C, 3)\\}$, si $H = \\mathrm{bar}\\{(A, 1) ; (B, 2)\\}$, alors $G$ est le barycentre de :",
            "options": [
              "$(H, 2)$ et $(C, 3)$",
              "$(H, 3)$ et $(C, 3)$",
              "$(H, 1)$ et $(C, 3)$",
              "$(H, 6)$ et $(C, 3)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le coefficient de $H$ est la somme $1 + 2 = 3$ : $G = \\mathrm{bar}\\{(H, 3) ; (C, 3)\\}$, isobarycentre de $H$ et $C$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le point d'équilibre de la plaque",
          "stepTheme": "Le point d'équilibre de la plaque",
          "stepBadge": "Le point d'équilibre de la plaque",
          "paragraphText": "• Situation complexe de la leçon : les masses sont $2$ en $A$, $5$ en $B$ et $3$ en $C$.\nAvec $H$ barycentre partiel de $(A, 2)$ et $(C, 3)$, $G$ devient l'isobarycentre de $H$ et $B$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p05_q4",
            "type": "mcq",
            "prompt": "La position exacte du point d'équilibre $G$ de la plaque est :",
            "options": [
              "Le milieu de $[AC]$",
              "Le point $B$",
              "Le milieu de $[BH]$",
              "Le centre de gravité du triangle sans masses"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$G = \\mathrm{bar}\\{(H, 5) ; (B, 5)\\}$ : coefficients égaux, donc $G$ est le milieu de $[BH]$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le cas de somme totale nulle",
          "stepTheme": "Le cas de somme totale nulle",
          "stepBadge": "Le cas de somme totale nulle",
          "paragraphText": "• Remarque de la leçon : lorsque $a + b + c = 0$, la somme $a\\overrightarrow{MA} + b\\overrightarrow{MB} + c\\overrightarrow{MC}$ est indépendante du point $M$.\nElle ne se réduit donc pas en un multiple de $\\overrightarrow{MG}$, qui n'existe pas dans ce cas.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p05_q5",
            "type": "mcq",
            "prompt": "Si $a + b + c = 0$, la somme pondérée des vecteurs d'origine $M$ est :",
            "options": [
              "Toujours nulle",
              "Indépendante du point $M$",
              "Égale à $\\overrightarrow{MG}$",
              "Égale à $\\overrightarrow{AB}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remarque de la leçon dit que cette somme ne dépend plus du point $M$ choisi."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le barycentre partiel doit exister",
          "stepTheme": "Le barycentre partiel doit exister",
          "stepBadge": "Le barycentre partiel doit exister",
          "paragraphText": "• Piège : on ne peut remplacer deux points par leur barycentre partiel que si la somme de leurs deux coefficients est non nulle.\nSi cette somme est nulle, ce barycentre partiel n'existe pas et la méthode ne s'applique pas.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p05_q6",
            "type": "mcq",
            "prompt": "Le remplacement par un barycentre partiel de $(A, a)$ et $(B, b)$ exige :",
            "options": [
              "$a = b$",
              "$a \\times b \\neq 0$",
              "$a - b \\neq 0$",
              "$a + b \\neq 0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le barycentre partiel n'existe que si $a + b \\neq 0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p05_q1",
          "type": "mcq",
          "prompt": "Si $E$ est le barycentre de $(A, -1)$, $(B, 4)$ et $(C, -7)$, alors $-\\overrightarrow{MA} + 4\\overrightarrow{MB} - 7\\overrightarrow{MC}$ est égal à :",
          "options": [
            "$-4\\overrightarrow{ME}$",
            "$4\\overrightarrow{ME}$",
            "$-10\\overrightarrow{ME}$",
            "$\\vec{0}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La somme des coefficients est $-1 + 4 - 7 = -4$, d'où $-4\\overrightarrow{ME}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p05_q2",
          "type": "mcq",
          "prompt": "L'abscisse du barycentre de ce système est :",
          "options": [
            "$-3$",
            "$\\frac{3}{4}$",
            "$-\\frac{3}{4}$",
            "$\\frac{1}{4}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $\\frac{-1 \\times 1 + 2 \\times (-1) + 3 \\times 0}{-1 + 2 + 3} = \\frac{-3}{4}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p05_q3",
          "type": "mcq",
          "prompt": "Dans le système $\\{(A, 1) ; (B, 2) ; (C, 3)\\}$, si $H = \\mathrm{bar}\\{(A, 1) ; (B, 2)\\}$, alors $G$ est le barycentre de :",
          "options": [
            "$(H, 2)$ et $(C, 3)$",
            "$(H, 3)$ et $(C, 3)$",
            "$(H, 1)$ et $(C, 3)$",
            "$(H, 6)$ et $(C, 3)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le coefficient de $H$ est la somme $1 + 2 = 3$ : $G = \\mathrm{bar}\\{(H, 3) ; (C, 3)\\}$, isobarycentre de $H$ et $C$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p05_q4",
          "type": "mcq",
          "prompt": "La position exacte du point d'équilibre $G$ de la plaque est :",
          "options": [
            "Le milieu de $[AC]$",
            "Le point $B$",
            "Le milieu de $[BH]$",
            "Le centre de gravité du triangle sans masses"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$G = \\mathrm{bar}\\{(H, 5) ; (B, 5)\\}$ : coefficients égaux, donc $G$ est le milieu de $[BH]$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p05_q5",
          "type": "mcq",
          "prompt": "Si $a + b + c = 0$, la somme pondérée des vecteurs d'origine $M$ est :",
          "options": [
            "Toujours nulle",
            "Indépendante du point $M$",
            "Égale à $\\overrightarrow{MG}$",
            "Égale à $\\overrightarrow{AB}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remarque de la leçon dit que cette somme ne dépend plus du point $M$ choisi."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p05_q6",
          "type": "mcq",
          "prompt": "Le remplacement par un barycentre partiel de $(A, a)$ et $(B, b)$ exige :",
          "options": [
            "$a = b$",
            "$a \\times b \\neq 0$",
            "$a - b \\neq 0$",
            "$a + b \\neq 0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le barycentre partiel n'existe que si $a + b \\neq 0$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l02_barycentre_p06",
      "order": 6,
      "title": "Barycentre de quatre points pondérés",
      "summary": "Définir le barycentre de quatre points pondérés et appliquer la réduction de la somme correspondante.",
      "conceptExplanation": "Soient $(A, a)$, $(B, b)$, $(C, c)$ et $(D, d)$ quatre points pondérés tels que $a + b + c + d \\neq 0$. Il existe un unique point $G$ vérifiant $a\\overrightarrow{GA} + b\\overrightarrow{GB} + c\\overrightarrow{GC} + d\\overrightarrow{GD} = \\vec{0}$. Ce point est le barycentre des quatre points pondérés, noté $G = \\mathrm{bar}\\{(A, a) ; (B, b) ; (C, c) ; (D, d)\\}$.\nConséquence : pour tout point $M$, $a\\overrightarrow{MA} + b\\overrightarrow{MB} + c\\overrightarrow{MC} + d\\overrightarrow{MD} = (a + b + c + d)\\overrightarrow{MG}$.\nRemarque : l'isobarycentre des sommets d'un parallélogramme est le centre de ce parallélogramme.",
      "keyRule": "Quatre points pondérés ont un barycentre dès que la somme des quatre coefficients est non nulle, et la réduction suit la même règle.",
      "formulas": [
        {
          "name": "Barycentre de quatre points",
          "formula": "a\\overrightarrow{GA} + b\\overrightarrow{GB} + c\\overrightarrow{GC} + d\\overrightarrow{GD} = \\vec{0}",
          "note": "Avec $a + b + c + d \\neq 0$."
        }
      ],
      "workedExample": {
        "title": "Réduire une somme de quatre vecteurs (exemple de la leçon)",
        "statement": "Soit $H = \\mathrm{bar}\\{(A, 4) ; (B, -2) ; (C, 4) ; (D, -5)\\}$. Exprime $4\\overrightarrow{MA} - 2\\overrightarrow{MB} + 4\\overrightarrow{MC} - 5\\overrightarrow{MD}$ en fonction de $\\overrightarrow{MH}$.",
        "methodSteps": [
          "La somme des coefficients est $4 - 2 + 4 - 5 = 1$.",
          "La réduction donne donc directement le vecteur $\\overrightarrow{MH}$ avec le coefficient $1$."
        ],
        "conclusion": "La somme est égale à $\\overrightarrow{MH}$ pour tout point $M$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le barycentre de quatre points pondérés",
          "stepTheme": "Le barycentre de quatre points pondérés",
          "stepBadge": "Le barycentre de quatre points pondérés",
          "paragraphText": "• Définition : si $a + b + c + d \\neq 0$, il existe un unique point $G$ tel que la somme pondérée des quatre vecteurs d'origine $G$ est le vecteur nul.\nCe point est le barycentre des quatre points pondérés.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p06_q1",
            "type": "mcq",
            "prompt": "La condition d'existence du barycentre de quatre points pondérés est :",
            "options": [
              "$a + b + c + d \\neq 0$",
              "$a = b = c = d$",
              "$a + b \\neq 0$ seulement",
              "$d \\neq 0$ seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La condition porte sur la somme des quatre coefficients."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Lire un barycentre de quatre points",
          "stepTheme": "Lire un barycentre de quatre points",
          "stepBadge": "Lire un barycentre de quatre points",
          "paragraphText": "• Exercice de fixation : l'égalité avec les vecteurs d'origine $G$ et les coefficients $1$, $-1$, $4$ et $-2$ a une somme égale à $2$, donc non nulle.\n$G$ est bien le barycentre du système correspondant.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p06_q2",
            "type": "mcq",
            "prompt": "L'égalité $\\overrightarrow{GA} - \\overrightarrow{GB} + 4\\overrightarrow{GC} - 2\\overrightarrow{GD} = \\vec{0}$ montre que $G$ est le barycentre de :",
            "options": [
              "$(A, 1)$, $(B, 1)$, $(C, 4)$, $(D, 2)$",
              "$(A, -1)$, $(B, 1)$, $(C, -4)$, $(D, 2)$",
              "$(A, 1)$, $(B, -1)$, $(C, 4)$, $(D, -2)$",
              "$(A, 4)$, $(B, -1)$, $(C, 1)$, $(D, -2)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les coefficients se lisent dans l'ordre devant chaque vecteur : $1$, $-1$, $4$ et $-2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La réduction pour quatre points",
          "stepTheme": "La réduction pour quatre points",
          "stepBadge": "La réduction pour quatre points",
          "paragraphText": "• Conséquence de la leçon : pour tout point $M$, la somme pondérée vaut $(a + b + c + d)\\overrightarrow{MG}$.\nLa règle de réduction est la même que pour deux ou trois points.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p06_q3",
            "type": "mcq",
            "prompt": "Pour $H = \\mathrm{bar}\\{(A, 4) ; (B, -2) ; (C, 4) ; (D, -5)\\}$, la somme $4\\overrightarrow{MA} - 2\\overrightarrow{MB} + 4\\overrightarrow{MC} - 5\\overrightarrow{MD}$ vaut :",
            "options": [
              "$5\\overrightarrow{MH}$",
              "$\\overrightarrow{MH}$",
              "$-\\overrightarrow{MH}$",
              "$11\\overrightarrow{MH}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La somme des coefficients est $4 - 2 + 4 - 5 = 1$, d'où $1 \\times \\overrightarrow{MH}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'isobarycentre d'un parallélogramme",
          "stepTheme": "L'isobarycentre d'un parallélogramme",
          "stepBadge": "L'isobarycentre d'un parallélogramme",
          "paragraphText": "• Remarque de la leçon : l'isobarycentre des sommets d'un parallélogramme est le centre de ce parallélogramme.\nLes quatre sommets y ont des coefficients égaux.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p06_q4",
            "type": "mcq",
            "prompt": "L'isobarycentre des quatre sommets d'un parallélogramme est :",
            "options": [
              "Un des sommets",
              "Le milieu d'un côté",
              "Le centre du parallélogramme",
              "Un point extérieur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la remarque de la leçon sur les quatre points pondérés."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Vérifier la somme avant de conclure",
          "stepTheme": "Vérifier la somme avant de conclure",
          "stepBadge": "Vérifier la somme avant de conclure",
          "paragraphText": "• Méthode : avant d'affirmer qu'un point est le barycentre lu dans une égalité, on additionne les quatre coefficients.\nSi la somme est non nulle, le point existe et l'égalité le caractérise.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p06_q5",
            "type": "mcq",
            "prompt": "Pour le système de coefficients $1$, $-1$, $4$ et $-2$, la somme des coefficients vaut :",
            "options": [
              "$0$",
              "$2$",
              "$-2$",
              "$8$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $1 - 1 + 4 - 2 = 2$, qui est non nul : le barycentre existe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une somme nulle interdit le barycentre",
          "stepTheme": "Une somme nulle interdit le barycentre",
          "stepBadge": "Une somme nulle interdit le barycentre",
          "paragraphText": "• Piège : quatre coefficients peuvent être tous non nuls sans que le barycentre existe.\nSeule compte leur somme : si elle est nulle, il n'y a pas de barycentre.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p06_q6",
            "type": "mcq",
            "prompt": "Le système $(A, 1)$, $(B, 2)$, $(C, -1)$, $(D, -2)$ admet-il un barycentre ?",
            "options": [
              "Oui, car tous les coefficients sont non nuls",
              "Oui, le centre du quadrilatère",
              "Non, car la somme des coefficients est nulle",
              "Oui, car il y a quatre points"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La somme $1 + 2 - 1 - 2$ vaut $0$ : pas de barycentre."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p06_q1",
          "type": "mcq",
          "prompt": "La condition d'existence du barycentre de quatre points pondérés est :",
          "options": [
            "$a + b + c + d \\neq 0$",
            "$a = b = c = d$",
            "$a + b \\neq 0$ seulement",
            "$d \\neq 0$ seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La condition porte sur la somme des quatre coefficients."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p06_q2",
          "type": "mcq",
          "prompt": "L'égalité $\\overrightarrow{GA} - \\overrightarrow{GB} + 4\\overrightarrow{GC} - 2\\overrightarrow{GD} = \\vec{0}$ montre que $G$ est le barycentre de :",
          "options": [
            "$(A, 1)$, $(B, 1)$, $(C, 4)$, $(D, 2)$",
            "$(A, -1)$, $(B, 1)$, $(C, -4)$, $(D, 2)$",
            "$(A, 1)$, $(B, -1)$, $(C, 4)$, $(D, -2)$",
            "$(A, 4)$, $(B, -1)$, $(C, 1)$, $(D, -2)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les coefficients se lisent dans l'ordre devant chaque vecteur : $1$, $-1$, $4$ et $-2$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p06_q3",
          "type": "mcq",
          "prompt": "Pour $H = \\mathrm{bar}\\{(A, 4) ; (B, -2) ; (C, 4) ; (D, -5)\\}$, la somme $4\\overrightarrow{MA} - 2\\overrightarrow{MB} + 4\\overrightarrow{MC} - 5\\overrightarrow{MD}$ vaut :",
          "options": [
            "$5\\overrightarrow{MH}$",
            "$\\overrightarrow{MH}$",
            "$-\\overrightarrow{MH}$",
            "$11\\overrightarrow{MH}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La somme des coefficients est $4 - 2 + 4 - 5 = 1$, d'où $1 \\times \\overrightarrow{MH}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p06_q4",
          "type": "mcq",
          "prompt": "L'isobarycentre des quatre sommets d'un parallélogramme est :",
          "options": [
            "Un des sommets",
            "Le milieu d'un côté",
            "Le centre du parallélogramme",
            "Un point extérieur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la remarque de la leçon sur les quatre points pondérés."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p06_q5",
          "type": "mcq",
          "prompt": "Pour le système de coefficients $1$, $-1$, $4$ et $-2$, la somme des coefficients vaut :",
          "options": [
            "$0$",
            "$2$",
            "$-2$",
            "$8$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $1 - 1 + 4 - 2 = 2$, qui est non nul : le barycentre existe."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p06_q6",
          "type": "mcq",
          "prompt": "Le système $(A, 1)$, $(B, 2)$, $(C, -1)$, $(D, -2)$ admet-il un barycentre ?",
          "options": [
            "Oui, car tous les coefficients sont non nuls",
            "Oui, le centre du quadrilatère",
            "Non, car la somme des coefficients est nulle",
            "Oui, car il y a quatre points"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La somme $1 + 2 - 1 - 2$ vaut $0$ : pas de barycentre."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l02_barycentre_p07",
      "order": 7,
      "title": "Lignes de niveau",
      "summary": "Définir une ligne de niveau et déterminer celles des applications qui associent une somme pondérée de carrés de distances ou un rapport de distances.",
      "conceptExplanation": "Soit $f$ une application du plan dans $\\mathbb{R}$ et $k$ un réel. La ligne de niveau $k$ de $f$ est l'ensemble des points $M$ du plan tels que $f(M) = k$.\nExemple : si $f(M) = OM$, la ligne de niveau $3$ est l'ensemble des points $M$ tels que $OM = 3$ : le cercle de centre $O$ et de rayon $3$.\nPour l'application $M \\mapsto aMA^2 + bMB^2$ avec $a + b \\neq 0$ et $G$ barycentre de $(A, a)$ et $(B, b)$, la ligne de niveau $k$ est soit l'ensemble vide, soit le point $G$, soit un cercle de centre $G$.\nPour l'application $M \\mapsto \\frac{MA}{MB}$, définie hors du point $B$, la ligne de niveau $k$ est la médiatrice de $[AB]$ si $k = 1$, et un cercle de centre $G$ si $k \\neq 1$, où $G$ est un barycentre associé.",
      "keyRule": "Une ligne de niveau regroupe tous les points qui donnent la même valeur à l'application ; pour les applications de la leçon, ce sont des cercles centrés au barycentre, ou une médiatrice.",
      "formulas": [
        {
          "name": "Ligne de niveau",
          "formula": "\\{M \\mid f(M) = k\\}"
        }
      ],
      "workedExample": {
        "title": "Ligne de niveau 122 d'une somme de carrés (exercice de fixation)",
        "statement": "On donne deux points $A$ et $B$ tels que $AB = 12$, et l'application $f : M \\mapsto MA^2 + MB^2$. Détermine la ligne de niveau $122$ de $f$.",
        "methodSteps": [
          "Soit $G$ l'isobarycentre de $A$ et $B$ : $G$ est le milieu de $[AB]$, donc $GA = GB = 6$.",
          "L'équation $MA^2 + MB^2 = 122$ se ramène à $2MG^2 + GA^2 + GB^2 = 122$, c'est-à-dire $2MG^2 + 36 + 36 = 122$.",
          "On obtient $MG^2 = 25$, donc $MG = 5$."
        ],
        "conclusion": "La ligne de niveau $122$ est le cercle de centre $G$ et de rayon $5$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La ligne de niveau d'une application",
          "stepTheme": "La ligne de niveau d'une application",
          "stepBadge": "La ligne de niveau d'une application",
          "paragraphText": "• Définition : la ligne de niveau $k$ d'une application $f$ du plan dans $\\mathbb{R}$ est l'ensemble des points $M$ tels que $f(M) = k$.\n$k$ est un nombre réel fixé à l'avance.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p07_q1",
            "type": "mcq",
            "prompt": "La ligne de niveau $k$ de $f$ est l'ensemble des points $M$ tels que :",
            "options": [
              "$f(M) = 0$",
              "$M = k$",
              "$f(M) = k$",
              "$f(k) = M$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par définition, on cherche tous les points dont l'image par $f$ vaut exactement $k$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La ligne de niveau d'une distance",
          "stepTheme": "La ligne de niveau d'une distance",
          "stepBadge": "La ligne de niveau d'une distance",
          "paragraphText": "• Exemple de la leçon : si $f$ associe à $M$ la distance $OM$, la ligne de niveau $3$ regroupe les points à distance $3$ de $O$.\nC'est le cercle de centre $O$ et de rayon $3$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p07_q2",
            "type": "mcq",
            "prompt": "La ligne de niveau $3$ de l'application $M \\mapsto OM$ est :",
            "options": [
              "La droite passant par $O$",
              "Le cercle de centre $O$ et de rayon $3$",
              "Le point $O$",
              "Le disque de rayon $3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les points à distance fixe $3$ d'un point $O$ forment le cercle de centre $O$ et de rayon $3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La ligne de niveau d'une somme de carrés",
          "stepTheme": "La ligne de niveau d'une somme de carrés",
          "stepBadge": "La ligne de niveau d'une somme de carrés",
          "paragraphText": "• Propriété : pour $f(M) = aMA^2 + bMB^2$ avec $a + b \\neq 0$, la ligne de niveau $k$ est soit vide, soit réduite au barycentre $G$, soit un cercle de centre $G$.\nLe centre est toujours le barycentre des points pondérés.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p07_q3",
            "type": "mcq",
            "prompt": "Pour $f(M) = aMA^2 + bMB^2$, le centre du cercle obtenu comme ligne de niveau est :",
            "options": [
              "Le point $A$",
              "Le point $B$",
              "Le barycentre $G$ de $(A, a)$ et $(B, b)$",
              "Le milieu de $[AB]$ dans tous les cas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La propriété de la leçon centre le cercle au barycentre des points pondérés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La ligne de niveau 122",
          "stepTheme": "La ligne de niveau 122",
          "stepBadge": "La ligne de niveau 122",
          "paragraphText": "• Exercice de fixation : avec $AB = 12$ et $f(M) = MA^2 + MB^2$, l'équation de niveau $122$ donne $MG = 5$, où $G$ est le milieu de $[AB]$.\nLa ligne cherchée est donc un cercle précis.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p07_q4",
            "type": "mcq",
            "prompt": "La ligne de niveau $122$ de cet exercice est :",
            "options": [
              "Le cercle de centre $G$ et de rayon $5$",
              "Le cercle de centre $G$ et de rayon $12$",
              "Le point $G$",
              "L'ensemble vide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le calcul donne $MG^2 = 25$, donc $MG = 5$ : cercle de centre $G$ et de rayon $5$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La ligne de niveau d'un rapport de distances",
          "stepTheme": "La ligne de niveau d'un rapport de distances",
          "stepBadge": "La ligne de niveau d'un rapport de distances",
          "paragraphText": "• Propriété : pour $f(M) = \\frac{MA}{MB}$, la ligne de niveau $k$ est la médiatrice de $[AB]$ si $k = 1$.\nSi $k \\neq 1$, c'est un cercle de centre un barycentre $G$ associé.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p07_q5",
            "type": "mcq",
            "prompt": "Pour l'application $M \\mapsto \\frac{MA}{MB}$, la ligne de niveau $1$ est :",
            "options": [
              "Un cercle de centre $A$",
              "La médiatrice du segment $[AB]$",
              "La droite $(AB)$",
              "Le point $B$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cas $k = 1$ correspond à $MA = MB$ : c'est la médiatrice de $[AB]$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le point B est exclu pour le rapport",
          "stepTheme": "Le point B est exclu pour le rapport",
          "stepBadge": "Le point B est exclu pour le rapport",
          "paragraphText": "• Piège : l'application $M \\mapsto \\frac{MA}{MB}$ n'est pas définie en $B$, car le dénominateur s'y annule.\nElle est définie sur le plan privé du point $B$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l02_barycentre_p07_q6",
            "type": "mcq",
            "prompt": "L'application $M \\mapsto \\frac{MA}{MB}$ est définie sur :",
            "options": [
              "Le plan entier",
              "La droite $(AB)$",
              "Le plan privé du point $A$",
              "Le plan privé du point $B$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le dénominateur $MB$ s'annule en $B$ : ce point est exclu du domaine."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p07_q1",
          "type": "mcq",
          "prompt": "La ligne de niveau $k$ de $f$ est l'ensemble des points $M$ tels que :",
          "options": [
            "$f(M) = 0$",
            "$M = k$",
            "$f(M) = k$",
            "$f(k) = M$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par définition, on cherche tous les points dont l'image par $f$ vaut exactement $k$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p07_q2",
          "type": "mcq",
          "prompt": "La ligne de niveau $3$ de l'application $M \\mapsto OM$ est :",
          "options": [
            "La droite passant par $O$",
            "Le cercle de centre $O$ et de rayon $3$",
            "Le point $O$",
            "Le disque de rayon $3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les points à distance fixe $3$ d'un point $O$ forment le cercle de centre $O$ et de rayon $3$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p07_q3",
          "type": "mcq",
          "prompt": "Pour $f(M) = aMA^2 + bMB^2$, le centre du cercle obtenu comme ligne de niveau est :",
          "options": [
            "Le point $A$",
            "Le point $B$",
            "Le barycentre $G$ de $(A, a)$ et $(B, b)$",
            "Le milieu de $[AB]$ dans tous les cas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La propriété de la leçon centre le cercle au barycentre des points pondérés."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p07_q4",
          "type": "mcq",
          "prompt": "La ligne de niveau $122$ de cet exercice est :",
          "options": [
            "Le cercle de centre $G$ et de rayon $5$",
            "Le cercle de centre $G$ et de rayon $12$",
            "Le point $G$",
            "L'ensemble vide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcul donne $MG^2 = 25$, donc $MG = 5$ : cercle de centre $G$ et de rayon $5$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p07_q5",
          "type": "mcq",
          "prompt": "Pour l'application $M \\mapsto \\frac{MA}{MB}$, la ligne de niveau $1$ est :",
          "options": [
            "Un cercle de centre $A$",
            "La médiatrice du segment $[AB]$",
            "La droite $(AB)$",
            "Le point $B$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cas $k = 1$ correspond à $MA = MB$ : c'est la médiatrice de $[AB]$."
        },
        {
          "id": "premiere_c_maths_geometrie_l02_barycentre_p07_q6",
          "type": "mcq",
          "prompt": "L'application $M \\mapsto \\frac{MA}{MB}$ est définie sur :",
          "options": [
            "Le plan entier",
            "La droite $(AB)$",
            "Le plan privé du point $A$",
            "Le plan privé du point $B$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le dénominateur $MB$ s'annule en $B$ : ce point est exclu du domaine."
        }
      ]
    }
  ]
};
