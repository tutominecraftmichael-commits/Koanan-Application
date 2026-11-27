import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 11 : PPCM et PGCD de deux entiers relatifs » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2094
// Remarque : la leçon n'a pas de livre « Je fais mes exercices 2025-2026 » sur sa page (lien absent).
export const MATHS_TLE_C_L11_PPCM_PGCD: CurriculumChapter = {
  "id": "terminale_c_maths_numerique_l11_ppcm_pgcd",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 11,
  "title": "Leçon 11 : PPCM et PGCD de deux entiers relatifs",
  "summary": "Plus petit commun multiple et plus grand commun diviseur de deux entiers relatifs, nombres premiers entre eux, théorèmes de Bézout et de Gauss, et résolution des équations diophantiennes ax + by = c.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2094",
  "points": [
    {
      "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01",
      "order": 1,
      "title": "Le PPCM de deux entiers",
      "summary": "Le PPCM de a et b est le plus petit élément strictement positif de aZ ∩ bZ ; il vérifie PPCM(ka ; kb) = |k|·PPCM(a ; b).",
      "conceptExplanation": "Soient $a$ et $b$ deux entiers relatifs non nuls. L'ensemble des multiples communs à $a$ et $b$ est $a\\mathbb{Z} \\cap b\\mathbb{Z}$. Le PPCM de $a$ et $b$, noté $\\text{PPCM}(a ; b)$, est le plus petit élément strictement positif de cet ensemble : c'est le plus petit multiple commun strictement positif de $a$ et $b$.\\nPar exemple $\\text{PPCM}(4 ; 6) = 12$.\\nPropriétés : $\\text{PPCM}(a ; b) = a$ si et seulement si $a$ est un multiple de $b$ ; $a\\mathbb{Z} \\cap b\\mathbb{Z} = \\mu\\mathbb{Z}$ où $\\mu = \\text{PPCM}(a ; b)$ ; $\\text{PPCM}(ka ; kb) = |k| \\times \\text{PPCM}(a ; b)$ pour tout entier $k \\neq 0$. Par exemple $\\text{PPCM}(40 ; 60) = 120$ et $\\text{PPCM}(-3 ; 8) = 24$.",
      "keyRule": "PPCM(a ; b) est le plus petit multiple commun strictement positif de a et b. PPCM(ka ; kb) = |k|·PPCM(a ; b).",
      "formulas": [
        {
          "name": "Définition du PPCM",
          "formula": "\\text{PPCM}(a ; b) = \\min\\{m > 0, m \\in a\\mathbb{Z} \\cap b\\mathbb{Z}\\}",
          "note": "Le plus petit multiple commun strictement positif de a et b."
        },
        {
          "name": "Multiples communs",
          "formula": "a\\mathbb{Z} \\cap b\\mathbb{Z} = \\mu\\mathbb{Z}, \\quad \\mu = \\text{PPCM}(a ; b)",
          "note": "Les multiples communs à a et b sont les multiples de leur PPCM."
        }
      ],
      "workedExample": {
        "title": "PPCM(40 ; 60)",
        "statement": "Calculer $\\text{PPCM}(40 ; 60)$.",
        "methodSteps": [
          "On utilise $\\text{PPCM}(ka ; kb) = |k| \\times \\text{PPCM}(a ; b)$ avec $k = 20$ : $40 = 20 \\times 2$ et $60 = 20 \\times 3$.",
          "Donc $\\text{PPCM}(40 ; 60) = 20 \\times \\text{PPCM}(2 ; 3)$.",
          "Or $\\text{PPCM}(2 ; 3) = 6$, donc $\\text{PPCM}(40 ; 60) = 20 \\times 6 = 120$."
        ],
        "conclusion": "PPCM(40 ; 60) = 120."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du PPCM",
          "stepTheme": "Définition du PPCM",
          "stepBadge": "Définition du PPCM",
          "paragraphText": "• Le PPCM de $a$ et $b$ est le plus petit élément strictement positif de $a\\mathbb{Z} \\cap b\\mathbb{Z}$, l'ensemble des multiples communs à $a$ et $b$.\n• C'est le plus petit multiple commun strictement positif de $a$ et $b$. Par exemple $\\text{PPCM}(4 ; 6) = 12$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que le PPCM de $a$ et $b$ ?",
            "options": ["Le plus grand diviseur commun de $a$ et $b$", "Le plus petit multiple commun strictement positif de $a$ et $b$", "Le produit $a \\times b$", "Le plus petit diviseur commun de $a$ et $b$"],
            "correctAnswerIndex": 1,
            "explanation": "Le PPCM est le plus petit élément strictement positif de $a\\mathbb{Z} \\cap b\\mathbb{Z}$ : le plus petit multiple commun strictement positif de $a$ et $b$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "PPCM(4 ; 6) = 12",
          "stepTheme": "PPCM(4 ; 6) = 12",
          "stepBadge": "PPCM(4 ; 6) = 12",
          "paragraphText": "• Les multiples de $4$ sont $4, 8, 12, 16, \\ldots$ ; ceux de $6$ sont $6, 12, 18, \\ldots$\n• Le plus petit multiple commun strictement positif est $12$ : $\\text{PPCM}(4 ; 6) = 12$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01_q2",
            "type": "mcq",
            "prompt": "Quel est le PPCM de $4$ et $6$ ?",
            "options": ["$2$", "$6$", "$12$", "$24$"],
            "correctAnswerIndex": 2,
            "explanation": "Les multiples communs à 4 et 6 sont 12, 24, 36, … : le plus petit strictement positif est 12."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "PPCM et multiples",
          "stepTheme": "PPCM et multiples",
          "stepBadge": "PPCM et multiples",
          "paragraphText": "• $a\\mathbb{Z} \\cap b\\mathbb{Z} = \\mu\\mathbb{Z}$ où $\\mu = \\text{PPCM}(a ; b)$ : les multiples communs à $a$ et $b$ sont exactement les multiples de leur PPCM.\n• Exemple : $5\\mathbb{Z} \\cap 7\\mathbb{Z} = 35\\mathbb{Z}$, $4\\mathbb{Z} \\cap 6\\mathbb{Z} = 12\\mathbb{Z}$, $6\\mathbb{Z} \\cap 15\\mathbb{Z} = 30\\mathbb{Z}$, $12\\mathbb{Z} \\cap 15\\mathbb{Z} = 60\\mathbb{Z}$, $12\\mathbb{Z} \\cap 16\\mathbb{Z} = 48\\mathbb{Z}$, $18\\mathbb{Z} \\cap 20\\mathbb{Z} = 180\\mathbb{Z}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble $6\\mathbb{Z} \\cap 15\\mathbb{Z}$ ?",
            "options": ["$90\\mathbb{Z}$", "$30\\mathbb{Z}$", "$15\\mathbb{Z}$", "$6\\mathbb{Z}$"],
            "correctAnswerIndex": 1,
            "explanation": "$\\text{PPCM}(6 ; 15) = 30$ : les multiples communs à 6 et 15 sont les multiples de 30, donc $6\\mathbb{Z} \\cap 15\\mathbb{Z} = 30\\mathbb{Z}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "PPCM(ka ; kb) = |k|·PPCM(a ; b)",
          "stepTheme": "PPCM(ka ; kb) = |k|·PPCM(a ; b)",
          "stepBadge": "PPCM(ka ; kb) = |k|·PPCM(a ; b)",
          "paragraphText": "• Pour tout entier $k \\neq 0$ : $\\text{PPCM}(ka ; kb) = |k| \\times \\text{PPCM}(a ; b)$.\n• Exemple : $\\text{PPCM}(40 ; 60) = 20 \\times \\text{PPCM}(2 ; 3) = 20 \\times 6 = 120$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01_q4",
            "type": "mcq",
            "prompt": "Quel est le PPCM de $160$ et $200$ ?",
            "options": ["$400$", "$800$", "$1600$", "$32000$"],
            "correctAnswerIndex": 1,
            "explanation": "$160 = 2^5 \\times 5$ et $200 = 2^3 \\times 5^2$ : le PPCM prend les plus grands exposants, $2^5 \\times 5^2 = 800$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le PPCM est toujours positif",
          "stepTheme": "Le PPCM est toujours positif",
          "stepBadge": "Le PPCM est toujours positif",
          "paragraphText": "• Piège : le PPCM est défini comme le plus petit élément STRICTEMENT POSITIF de $a\\mathbb{Z} \\cap b\\mathbb{Z}$ : il est toujours positif, même si $a$ ou $b$ est négatif.\n• Exemple : $\\text{PPCM}(-3 ; 8) = 24$ (et non $-24$) et $\\text{PPCM}(-18 ; 20) = 180$ (et non $-180$).",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01_q5",
            "type": "mcq",
            "prompt": "Quel est le PPCM de $-18$ et $20$ ?",
            "options": ["$-180$", "$180$", "$320$", "$360$"],
            "correctAnswerIndex": 1,
            "explanation": "Le PPCM est toujours strictement positif : $\\text{PPCM}(-18 ; 20) = \\text{PPCM}(18 ; 20) = 180$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "PPCM(a ; b) = a",
          "stepTheme": "PPCM(a ; b) = a",
          "stepBadge": "PPCM(a ; b) = a",
          "paragraphText": "• $\\text{PPCM}(a ; b) = a$ si et seulement si $a$ est un multiple de $b$.\n• Exemple : $\\text{PPCM}(48 ; 12) = 48$ car $48$ est un multiple de $12$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01_q6",
            "type": "mcq",
            "prompt": "Quel est le PPCM de $48$ et $12$ ?",
            "options": ["$12$", "$48$", "$60$", "$576$"],
            "correctAnswerIndex": 1,
            "explanation": "48 est un multiple de 12 : $\\text{PPCM}(48 ; 12) = 48$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que le PPCM de $a$ et $b$ ?",
          "options": ["Le plus grand diviseur commun de $a$ et $b$", "Le plus petit multiple commun strictement positif de $a$ et $b$", "Le produit $a \\times b$", "Le plus petit diviseur commun de $a$ et $b$"],
          "correctAnswerIndex": 1,
          "explanation": "Le PPCM est le plus petit élément strictement positif de $a\\mathbb{Z} \\cap b\\mathbb{Z}$ : le plus petit multiple commun strictement positif de $a$ et $b$."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01_q2",
          "type": "mcq",
          "prompt": "Quel est le PPCM de $4$ et $6$ ?",
          "options": ["$2$", "$6$", "$12$", "$24$"],
          "correctAnswerIndex": 2,
          "explanation": "Les multiples communs à 4 et 6 sont 12, 24, 36, … : le plus petit strictement positif est 12."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble $6\\mathbb{Z} \\cap 15\\mathbb{Z}$ ?",
          "options": ["$90\\mathbb{Z}$", "$30\\mathbb{Z}$", "$15\\mathbb{Z}$", "$6\\mathbb{Z}$"],
          "correctAnswerIndex": 1,
          "explanation": "$\\text{PPCM}(6 ; 15) = 30$ : les multiples communs à 6 et 15 sont les multiples de 30, donc $6\\mathbb{Z} \\cap 15\\mathbb{Z} = 30\\mathbb{Z}$."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01_q4",
          "type": "mcq",
          "prompt": "Quel est le PPCM de $160$ et $200$ ?",
          "options": ["$400$", "$800$", "$1600$", "$32000$"],
          "correctAnswerIndex": 1,
          "explanation": "$160 = 2^5 \\times 5$ et $200 = 2^3 \\times 5^2$ : le PPCM prend les plus grands exposants, $2^5 \\times 5^2 = 800$."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01_q5",
          "type": "mcq",
          "prompt": "Quel est le PPCM de $-18$ et $20$ ?",
          "options": ["$-180$", "$180$", "$320$", "$360$"],
          "correctAnswerIndex": 1,
          "explanation": "Le PPCM est toujours strictement positif : $\\text{PPCM}(-18 ; 20) = \\text{PPCM}(18 ; 20) = 180$."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p01_q6",
          "type": "mcq",
          "prompt": "Quel est le PPCM de $48$ et $12$ ?",
          "options": ["$12$", "$48$", "$60$", "$576$"],
          "correctAnswerIndex": 1,
          "explanation": "48 est un multiple de 12 : $\\text{PPCM}(48 ; 12) = 48$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02",
      "order": 2,
      "title": "Le PGCD de deux entiers",
      "summary": "Le PGCD de a et b est le plus grand diviseur commun ; on le calcule par l'algorithme d'Euclide et il vérifie PGCD(ka ; kb) = |k|·PGCD(a ; b).",
      "conceptExplanation": "Soient $a$ et $b$ deux entiers relatifs non nuls. L'ensemble des diviseurs communs à $a$ et $b$ est $D(a) \\cap D(b)$. Le PGCD de $a$ et $b$, noté $\\text{PGCD}(a ; b)$ ou $\\delta$, est le plus grand élément de cet ensemble. Par exemple $\\text{PGCD}(18 ; 15) = 3$.\\nPropriétés : $1 \\leq \\text{PGCD}(a ; b) \\leq \\min\\{|a| ; |b|\\}$ ; $D(a ; b) = D(\\delta)$ : les diviseurs communs à $a$ et $b$ sont les diviseurs de leur PGCD ; $\\text{PGCD}(ka ; kb) = |k| \\times \\text{PGCD}(a ; b)$ pour tout entier $k \\neq 0$. Par exemple $\\text{PGCD}(36 ; 30) = 6$, $\\text{PGCD}(-75 ; -25) = 25$ et $\\text{PGCD}(132 ; -96) = 12$.\\nL'algorithme d'Euclide calcule le PGCD par divisions euclidiennes successives : le PGCD est le dernier reste non nul. Exemple : $\\text{PGCD}(2016 ; 1188) = 36$.",
      "keyRule": "PGCD(a ; b) est le plus grand diviseur commun. Algorithme d'Euclide : divisions successives, le dernier reste non nul est le PGCD.",
      "formulas": [
        {
          "name": "Définition du PGCD",
          "formula": "\\text{PGCD}(a ; b) = \\max\\{d > 0, d \\mid a \\text{ et } d \\mid b\\}",
          "note": "Le plus grand diviseur commun de a et b."
        },
        {
          "name": "Diviseurs communs",
          "formula": "D(a ; b) = D(\\delta), \\quad \\delta = \\text{PGCD}(a ; b)",
          "note": "Les diviseurs communs à a et b sont les diviseurs de leur PGCD."
        }
      ],
      "workedExample": {
        "title": "PGCD(2016 ; 1188) par l'algorithme d'Euclide",
        "statement": "Calculer $\\text{PGCD}(2016 ; 1188)$ par l'algorithme d'Euclide.",
        "methodSteps": [
          "On divise $2016$ par $1188$ : $2016 = 1 \\times 1188 + 828$.",
          "On divise $1188$ par $828$ : $1188 = 1 \\times 828 + 360$.",
          "On divise $828$ par $360$ : $828 = 2 \\times 360 + 108$.",
          "On divise $360$ par $108$ : $360 = 3 \\times 108 + 36$.",
          "On divise $108$ par $36$ : $108 = 3 \\times 36 + 0$. Le dernier reste non nul est $36$."
        ],
        "conclusion": "PGCD(2016 ; 1188) = 36. On peut aussi écrire 36 comme combinaison : 2016×(−10) + 1188×17 = 36."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition du PGCD",
          "stepTheme": "Définition du PGCD",
          "stepBadge": "Définition du PGCD",
          "paragraphText": "• Le PGCD de $a$ et $b$ est le plus grand diviseur commun à $a$ et $b$.\n• Par exemple $\\text{PGCD}(18 ; 15) = 3$ : les diviseurs de $18$ sont $1, 2, 3, 6, 9, 18$ et ceux de $15$ sont $1, 3, 5, 15$ ; le plus grand commun est $3$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02_q1",
            "type": "mcq",
            "prompt": "Quel est le PGCD de $18$ et $15$ ?",
            "options": ["$1$", "$3$", "$5$", "$6$"],
            "correctAnswerIndex": 1,
            "explanation": "Les diviseurs communs à 18 et 15 sont 1 et 3 : le plus grand est 3."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Encadrement du PGCD",
          "stepTheme": "Encadrement du PGCD",
          "stepBadge": "Encadrement du PGCD",
          "paragraphText": "• On a toujours $1 \\leq \\text{PGCD}(a ; b) \\leq \\min\\{|a| ; |b|\\}$ : le PGCD est au moins $1$ et au plus le plus petit des deux nombres en valeur absolue.\n• Les diviseurs communs à $a$ et $b$ sont exactement les diviseurs de leur PGCD : $D(a ; b) = D(\\delta)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02_q2",
            "type": "mcq",
            "prompt": "Quel est le PGCD de $-75$ et $-25$ ?",
            "options": ["$-25$", "$25$", "$75$", "$-75$"],
            "correctAnswerIndex": 1,
            "explanation": "Le PGCD est toujours strictement positif : $\\text{PGCD}(-75 ; -25) = \\text{PGCD}(75 ; 25) = 25$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "L'algorithme d'Euclide",
          "stepTheme": "L'algorithme d'Euclide",
          "stepBadge": "L'algorithme d'Euclide",
          "paragraphText": "• Méthode : on divise $a$ par $b$, puis $b$ par le reste, puis le reste par le nouveau reste, et ainsi de suite jusqu'à un reste nul.\n• Le PGCD est le dernier reste non nul. Exemple : $\\text{PGCD}(2016 ; 1188) = 36$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02_q3",
            "type": "mcq",
            "prompt": "Dans l'algorithme d'Euclide, qu'est-ce que le PGCD ?",
            "options": ["Le premier reste obtenu", "Le dernier reste non nul", "Le quotient de la première division", "Le produit des restes"],
            "correctAnswerIndex": 1,
            "explanation": "On divise jusqu'à obtenir un reste nul : le PGCD est le dernier reste non nul."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le 368 du livre n'est pas 360",
          "stepTheme": "Le 368 du livre n'est pas 360",
          "stepBadge": "Le 368 du livre n'est pas 360",
          "paragraphText": "• Attention : dans le livre, les étapes de l'algorithme d'Euclide pour $\\text{PGCD}(2070 ; 360)$ utilisent $368$ au lieu de $360$ et concluent $\\text{PGCD}(2070 ; 360) = 46$.\n• C'est une erreur du livre : le vrai calcul donne $2070 = 5 \\times 360 + 270$, $360 = 1 \\times 270 + 90$, $270 = 3 \\times 90 + 0$, donc $\\text{PGCD}(2070 ; 360) = 90$.",
          "konanTip": "Quand un exercice mélange deux nombres (368 au lieu de 360), refais le calcul toi-même : le PGCD de 2070 et 360 est 90, pas 46.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02_q4",
            "type": "mcq",
            "prompt": "L'affirmation « PGCD(2070 ; 360) = 46 » est-elle vraie ?",
            "options": ["Vrai", "Faux : PGCD(2070 ; 360) = 90", "Faux : PGCD(2070 ; 360) = 46 est le PPCM", "Faux : PGCD(2070 ; 360) = 180"],
            "correctAnswerIndex": 1,
            "explanation": "L'algorithme d'Euclide donne : 2070 = 5×360 + 270, 360 = 1×270 + 90, 270 = 3×90 + 0. Le PGCD est 90. Le livre a écrit 368 au lieu de 360."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "PGCD(ka ; kb) = |k|·PGCD(a ; b)",
          "stepTheme": "PGCD(ka ; kb) = |k|·PGCD(a ; b)",
          "stepBadge": "PGCD(ka ; kb) = |k|·PGCD(a ; b)",
          "paragraphText": "• Pour tout entier $k \\neq 0$ : $\\text{PGCD}(ka ; kb) = |k| \\times \\text{PGCD}(a ; b)$.\n• Exemple : $\\text{PGCD}(36 ; 30) = 6 \\times \\text{PGCD}(6 ; 5) = 6 \\times 1 = 6$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02_q5",
            "type": "mcq",
            "prompt": "Quel est le PGCD de $132$ et $-96$ ?",
            "options": ["$6$", "$12$", "$24$", "$48$"],
            "correctAnswerIndex": 1,
            "explanation": "$132 = 2^2 \\times 3 \\times 11$ et $96 = 2^5 \\times 3$ : le PGCD est $2^2 \\times 3 = 12$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "PGCD(n ; n+1) = 1",
          "stepTheme": "PGCD(n ; n+1) = 1",
          "stepBadge": "PGCD(n ; n+1) = 1",
          "paragraphText": "• Deux entiers consécutifs sont toujours premiers entre eux : $\\text{PGCD}(n ; n + 1) = 1$.\n• En effet, un diviseur commun à $n$ et $n + 1$ divise leur différence $(n + 1) - n = 1$, donc il vaut $1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02_q6",
            "type": "mcq",
            "prompt": "Quel est le PGCD de $n$ et $n + 1$ ?",
            "options": ["$n$", "$n + 1$", "$1$", "$2$"],
            "correctAnswerIndex": 2,
            "explanation": "Un diviseur commun à n et n+1 divise leur différence, qui vaut 1 : le PGCD est donc 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02_q1",
          "type": "mcq",
          "prompt": "Quel est le PGCD de $18$ et $15$ ?",
          "options": ["$1$", "$3$", "$5$", "$6$"],
          "correctAnswerIndex": 1,
          "explanation": "Les diviseurs communs à 18 et 15 sont 1 et 3 : le plus grand est 3."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02_q2",
          "type": "mcq",
          "prompt": "Quel est le PGCD de $-75$ et $-25$ ?",
          "options": ["$-25$", "$25$", "$75$", "$-75$"],
          "correctAnswerIndex": 1,
          "explanation": "Le PGCD est toujours strictement positif : $\\text{PGCD}(-75 ; -25) = \\text{PGCD}(75 ; 25) = 25$."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02_q3",
          "type": "mcq",
          "prompt": "Dans l'algorithme d'Euclide, qu'est-ce que le PGCD ?",
          "options": ["Le premier reste obtenu", "Le dernier reste non nul", "Le quotient de la première division", "Le produit des restes"],
          "correctAnswerIndex": 1,
          "explanation": "On divise jusqu'à obtenir un reste nul : le PGCD est le dernier reste non nul."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02_q4",
          "type": "mcq",
          "prompt": "L'affirmation « PGCD(2070 ; 360) = 46 » est-elle vraie ?",
          "options": ["Vrai", "Faux : PGCD(2070 ; 360) = 90", "Faux : PGCD(2070 ; 360) = 46 est le PPCM", "Faux : PGCD(2070 ; 360) = 180"],
          "correctAnswerIndex": 1,
          "explanation": "L'algorithme d'Euclide donne : 2070 = 5×360 + 270, 360 = 1×270 + 90, 270 = 3×90 + 0. Le PGCD est 90. Le livre a écrit 368 au lieu de 360."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02_q5",
          "type": "mcq",
          "prompt": "Quel est le PGCD de $132$ et $-96$ ?",
          "options": ["$6$", "$12$", "$24$", "$48$"],
          "correctAnswerIndex": 1,
          "explanation": "$132 = 2^2 \\times 3 \\times 11$ et $96 = 2^5 \\times 3$ : le PGCD est $2^2 \\times 3 = 12$."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p02_q6",
          "type": "mcq",
          "prompt": "Quel est le PGCD de $n$ et $n + 1$ ?",
          "options": ["$n$", "$n + 1$", "$1$", "$2$"],
          "correctAnswerIndex": 2,
          "explanation": "Un diviseur commun à n et n+1 divise leur différence, qui vaut 1 : le PGCD est donc 1."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03",
      "order": 3,
      "title": "Nombres premiers entre eux",
      "summary": "Deux entiers sont premiers entre eux si leur PGCD vaut 1 ; le théorème de Bézout et le théorème de Gauss en sont les conséquences essentielles.",
      "conceptExplanation": "Deux entiers $a$ et $b$ sont premiers entre eux si $\\text{PGCD}(a ; b) = 1$. Par exemple $25$ et $7$ sont premiers entre eux. Si $p$ est premier et $a \\notin p\\mathbb{Z}$, alors $\\text{PGCD}(a ; p) = 1$. Si $a = da'$ et $b = db'$ avec $d = \\text{PGCD}(a ; b)$, alors $a'$ et $b'$ sont premiers entre eux.\\nThéorème de Bézout : $a$ et $b$ sont premiers entre eux si et seulement s'il existe des entiers $u$ et $v$ tels que $au + bv = 1$. Exemple : $2 \\times 13 - 25 \\times 1 = 1$, donc $2$ et $25$ sont premiers entre eux.\\nThéorème de Gauss : si $a$ divise $bc$ et si $a$ et $b$ sont premiers entre eux, alors $a$ divise $c$. Exemple : $2x - 5y = 0$ donne $2x = 5y$, donc $2$ divise $y$ (car $2$ et $5$ sont premiers entre eux) : $y = 2k$ et $x = 5k$.\\nConséquences : si $a$ est premier avec $b$ et avec $c$, alors $a$ est premier avec $bc$ ; si $a$ et $b$ divisent $c$ et sont premiers entre eux, alors $ab$ divise $c$ ; si $a$ et $b$ sont premiers entre eux et strictement positifs, alors $\\text{PPCM}(a ; b) = ab$ (par exemple $\\text{PPCM}(4 ; 3) = 12$). Enfin, si $a$ et $n$ sont premiers entre eux et $ab \\equiv ac \\pmod n$, alors $b \\equiv c \\pmod n$ : par exemple $25a \\equiv 100 \\pmod 7$ donne $a \\equiv 4 \\pmod 7$.",
      "keyRule": "PGCD(a ; b) = 1 : premiers entre eux. Bézout : au + bv = 1. Gauss : a | bc et PGCD(a ; b) = 1 ⇒ a | c.",
      "formulas": [
        {
          "name": "Théorème de Bézout",
          "formula": "\\text{PGCD}(a ; b) = 1 \\iff \\exists u, v \\in \\mathbb{Z}, \\quad au + bv = 1",
          "note": "Caractérise les entiers premiers entre eux."
        },
        {
          "name": "Théorème de Gauss",
          "formula": "a \\mid bc \\text{ et } \\text{PGCD}(a ; b) = 1 \\implies a \\mid c",
          "note": "Permet de simplifier les divisibilités."
        }
      ],
      "workedExample": {
        "title": "Résoudre 2x − 5y = 0 dans Z×Z",
        "statement": "Résoudre dans $\\mathbb{Z} \\times \\mathbb{Z}$ l'équation $2x - 5y = 0$.",
        "methodSteps": [
          "L'équation s'écrit $2x = 5y$ : $2$ divise $5y$.",
          "Or $2$ et $5$ sont premiers entre eux : par le théorème de Gauss, $2$ divise $y$.",
          "On pose $y = 2k$ avec $k \\in \\mathbb{Z}$ : alors $2x = 10k$, donc $x = 5k$."
        ],
        "conclusion": "Les solutions sont les couples (5k ; 2k) avec k ∈ Z."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Premiers entre eux",
          "stepTheme": "Premiers entre eux",
          "stepBadge": "Premiers entre eux",
          "paragraphText": "• Deux entiers $a$ et $b$ sont premiers entre eux si $\\text{PGCD}(a ; b) = 1$.\n• Exemple : $25$ et $7$ sont premiers entre eux. En revanche, $15$ et $-25$ ne le sont pas : leur PGCD est $5$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03_q1",
            "type": "mcq",
            "prompt": "Quand deux entiers $a$ et $b$ sont-ils premiers entre eux ?",
            "options": ["Quand $\\text{PPCM}(a ; b) = 1$", "Quand $\\text{PGCD}(a ; b) = 1$", "Quand $a$ et $b$ sont premiers", "Quand $a$ divise $b$"],
            "correctAnswerIndex": 1,
            "explanation": "Deux entiers sont premiers entre eux si leur PGCD vaut 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le théorème de Bézout",
          "stepTheme": "Le théorème de Bézout",
          "stepBadge": "Le théorème de Bézout",
          "paragraphText": "• Théorème de Bézout : $a$ et $b$ sont premiers entre eux si et seulement s'il existe des entiers $u$ et $v$ tels que $au + bv = 1$.\n• Exemple : $2 \\times 13 - 25 \\times 1 = 1$, donc $2$ et $25$ sont premiers entre eux.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03_q2",
            "type": "mcq",
            "prompt": "Que dit le théorème de Bézout ?",
            "options": ["$a$ et $b$ sont premiers entre eux si et seulement si $au + bv = 1$ pour certains entiers $u$ et $v$", "$a$ et $b$ sont premiers entre eux si et seulement si $ab = 1$", "$a$ et $b$ sont premiers entre eux si et seulement si $a + b = 1$", "$a$ et $b$ sont premiers entre eux si et seulement si $a - b = 1$"],
            "correctAnswerIndex": 0,
            "explanation": "Le théorème de Bézout caractérise les entiers premiers entre eux par l'existence d'une relation au + bv = 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le théorème de Gauss",
          "stepTheme": "Le théorème de Gauss",
          "stepBadge": "Le théorème de Gauss",
          "paragraphText": "• Théorème de Gauss : si $a$ divise $bc$ et si $a$ et $b$ sont premiers entre eux, alors $a$ divise $c$.\n• Exemple : $2x - 5y = 0$ donne $y = 2k$ et $x = 5k$ : les solutions sont les couples $(5k ; 2k)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03_q3",
            "type": "mcq",
            "prompt": "Quelles sont les solutions dans $\\mathbb{Z} \\times \\mathbb{Z}$ de $2x - 5y = 0$ ?",
            "options": ["$\\{(2k ; 5k), k \\in \\mathbb{Z}\\}$", "$\\{(5k ; 2k), k \\in \\mathbb{Z}\\}$", "$\\{(3k ; 2k), k \\in \\mathbb{Z}\\}$", "$\\{(k ; k), k \\in \\mathbb{Z}\\}$"],
            "correctAnswerIndex": 1,
            "explanation": "2x = 5y : par Gauss, 2 divise y, donc y = 2k et x = 5k. Les solutions sont (5k ; 2k)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "PPCM de deux nombres premiers entre eux",
          "stepTheme": "PPCM de deux nombres premiers entre eux",
          "stepBadge": "PPCM de deux nombres premiers entre eux",
          "paragraphText": "• Si $a$ et $b$ sont premiers entre eux et strictement positifs, alors $\\text{PPCM}(a ; b) = ab$.\n• Exemple : $\\text{PPCM}(4 ; 3) = 12 = 4 \\times 3$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03_q4",
            "type": "mcq",
            "prompt": "Si $a$ et $b$ sont premiers entre eux et strictement positifs, que vaut $\\text{PPCM}(a ; b)$ ?",
            "options": ["$1$", "$a + b$", "$ab$", "$\\text{PGCD}(a ; b)$"],
            "correctAnswerIndex": 2,
            "explanation": "Pour a et b premiers entre eux et strictement positifs, PPCM(a ; b) = ab."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Premiers entre eux ne veut pas dire premiers",
          "stepTheme": "Premiers entre eux ne veut pas dire premiers",
          "stepBadge": "Premiers entre eux ne veut pas dire premiers",
          "paragraphText": "• Piège : deux nombres premiers entre eux ne sont pas forcément premiers : $25$ et $7$ sont premiers entre eux, mais $25$ n'est pas premier.\n• À l'inverse, deux nombres premiers distincts sont toujours premiers entre eux, mais la réciproque est fausse.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03_q5",
            "type": "mcq",
            "prompt": "Parmi ces couples, lequel est formé de deux nombres premiers entre eux ?",
            "options": ["$(15 ; -25)$", "$(-12 ; -25)$", "$(-12 ; 18)$", "$(27 ; 32)$ et $(-12 ; -25)$"],
            "correctAnswerIndex": 3,
            "explanation": "PGCD(-12 ; -25) = 1 et PGCD(27 ; 32) = 1 : ces deux couples sont premiers entre eux. En revanche PGCD(15 ; -25) = 5 et PGCD(-12 ; 18) = 6."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Simplifier une congruence",
          "stepTheme": "Simplifier une congruence",
          "stepBadge": "Simplifier une congruence",
          "paragraphText": "• Si $a$ et $n$ sont premiers entre eux et $ab \\equiv ac \\pmod n$, alors $b \\equiv c \\pmod n$ : on peut simplifier par $a$.\n• Exemple : $25a \\equiv 100 \\pmod 7$ donne $a \\equiv 4 \\pmod 7$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03_q6",
            "type": "mcq",
            "prompt": "Que donne la congruence $25a \\equiv 100 \\pmod 7$ ?",
            "options": ["$a \\equiv 4 \\pmod 7$", "$a \\equiv 25 \\pmod 7$", "$a \\equiv 100 \\pmod 7$", "$a \\equiv 0 \\pmod 7$"],
            "correctAnswerIndex": 0,
            "explanation": "25 et 7 sont premiers entre eux : on peut simplifier par 25. Comme 25 ≡ 4 (mod 7) et 100 ≡ 2 (mod 7), on obtient 4a ≡ 2 (mod 7), soit 2a ≡ 1 (mod 7), donc a ≡ 4 (mod 7)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03_q1",
          "type": "mcq",
          "prompt": "Quand deux entiers $a$ et $b$ sont-ils premiers entre eux ?",
          "options": ["Quand $\\text{PPCM}(a ; b) = 1$", "Quand $\\text{PGCD}(a ; b) = 1$", "Quand $a$ et $b$ sont premiers", "Quand $a$ divise $b$"],
          "correctAnswerIndex": 1,
          "explanation": "Deux entiers sont premiers entre eux si leur PGCD vaut 1."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03_q2",
          "type": "mcq",
          "prompt": "Que dit le théorème de Bézout ?",
          "options": ["$a$ et $b$ sont premiers entre eux si et seulement si $au + bv = 1$ pour certains entiers $u$ et $v$", "$a$ et $b$ sont premiers entre eux si et seulement si $ab = 1$", "$a$ et $b$ sont premiers entre eux si et seulement si $a + b = 1$", "$a$ et $b$ sont premiers entre eux si et seulement si $a - b = 1$"],
          "correctAnswerIndex": 0,
          "explanation": "Le théorème de Bézout caractérise les entiers premiers entre eux par l'existence d'une relation au + bv = 1."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03_q3",
          "type": "mcq",
          "prompt": "Quelles sont les solutions dans $\\mathbb{Z} \\times \\mathbb{Z}$ de $2x - 5y = 0$ ?",
          "options": ["$\\{(2k ; 5k), k \\in \\mathbb{Z}\\}$", "$\\{(5k ; 2k), k \\in \\mathbb{Z}\\}$", "$\\{(3k ; 2k), k \\in \\mathbb{Z}\\}$", "$\\{(k ; k), k \\in \\mathbb{Z}\\}$"],
          "correctAnswerIndex": 1,
          "explanation": "2x = 5y : par Gauss, 2 divise y, donc y = 2k et x = 5k. Les solutions sont (5k ; 2k)."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03_q4",
          "type": "mcq",
          "prompt": "Si $a$ et $b$ sont premiers entre eux et strictement positifs, que vaut $\\text{PPCM}(a ; b)$ ?",
          "options": ["$1$", "$a + b$", "$ab$", "$\\text{PGCD}(a ; b)$"],
          "correctAnswerIndex": 2,
          "explanation": "Pour a et b premiers entre eux et strictement positifs, PPCM(a ; b) = ab."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03_q5",
          "type": "mcq",
          "prompt": "Parmi ces couples, lequel est formé de deux nombres premiers entre eux ?",
          "options": ["$(15 ; -25)$", "$(-12 ; -25)$", "$(-12 ; 18)$", "$(27 ; 32)$ et $(-12 ; -25)$"],
          "correctAnswerIndex": 3,
          "explanation": "PGCD(-12 ; -25) = 1 et PGCD(27 ; 32) = 1 : ces deux couples sont premiers entre eux. En revanche PGCD(15 ; -25) = 5 et PGCD(-12 ; 18) = 6."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p03_q6",
          "type": "mcq",
          "prompt": "Que donne la congruence $25a \\equiv 100 \\pmod 7$ ?",
          "options": ["$a \\equiv 4 \\pmod 7$", "$a \\equiv 25 \\pmod 7$", "$a \\equiv 100 \\pmod 7$", "$a \\equiv 0 \\pmod 7$"],
          "correctAnswerIndex": 0,
          "explanation": "25 et 7 sont premiers entre eux : on peut simplifier par 25. Comme 25 ≡ 4 (mod 7) et 100 ≡ 2 (mod 7), on obtient 4a ≡ 2 (mod 7), soit 2a ≡ 1 (mod 7), donc a ≡ 4 (mod 7)."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04",
      "order": 4,
      "title": "Relation PPCM × PGCD et équations ax + by = c",
      "summary": "PPCM(a ; b) × PGCD(a ; b) = |ab| ; l'équation ax + by = c admet des solutions entières si et seulement si PGCD(a ; b) divise c.",
      "conceptExplanation": "Pour deux entiers non nuls $a$ et $b$, on a la relation $\\text{PPCM}(a ; b) \\times \\text{PGCD}(a ; b) = |ab|$. Par exemple $\\text{PGCD}(18 ; 15) = 3$ donne $\\text{PPCM}(18 ; 15) = \\frac{18 \\times 15}{3} = 90$.\\nL'équation $ax + by = c$ admet des solutions dans $\\mathbb{Z} \\times \\mathbb{Z}$ si et seulement si $d = \\text{PGCD}(a ; b)$ divise $c$. Si $d$ ne divise pas $c$, il n'y a aucune solution.\\nPour résoudre : on trouve une solution particulière $(x_0 ; y_0)$ (souvent avec l'algorithme d'Euclide étendu ou le théorème de Bézout), puis les solutions générales sont $x = x_0 + \\frac{b}{d}k$ et $y = y_0 - \\frac{a}{d}k$ avec $k \\in \\mathbb{Z}$.\\nExemples de la leçon : l'équation $(E) : 4x - 6y = 1$ n'a pas de solution car $\\text{PGCD}(4 ; 6) = 2$ ne divise pas $1$ ; l'équation $(F) : 3x - 5y = -2$ a pour solutions $S = \\{(1 + 5k ; 1 + 3k), k \\in \\mathbb{Z}\\}$.",
      "keyRule": "PPCM × PGCD = |ab|. ax + by = c a des solutions ssi PGCD(a ; b) divise c.",
      "formulas": [
        {
          "name": "Relation PPCM × PGCD",
          "formula": "\\text{PPCM}(a ; b) \\times \\text{PGCD}(a ; b) = |ab|",
          "note": "Permet de calculer le PPCM à partir du PGCD."
        },
        {
          "name": "Condition d'existence",
          "formula": "ax + by = c \\text{ a des solutions} \\iff \\text{PGCD}(a ; b) \\mid c",
          "note": "d = PGCD(a ; b) doit diviser c."
        }
      ],
      "workedExample": {
        "title": "Résoudre 3x − 5y = −2",
        "statement": "Résoudre dans $\\mathbb{Z} \\times \\mathbb{Z}$ l'équation $(F) : 3x - 5y = -2$.",
        "methodSteps": [
          "$\\text{PGCD}(3 ; 5) = 1$ divise $-2$ : l'équation a des solutions.",
          "On cherche une solution particulière : $(1 ; 1)$ convient car $3 \\times 1 - 5 \\times 1 = -2$.",
          "Les solutions générales sont $x = 1 + 5k$ et $y = 1 + 3k$ avec $k \\in \\mathbb{Z}$."
        ],
        "conclusion": "S = {(1 + 5k ; 1 + 3k), k ∈ Z}."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La relation PPCM × PGCD = |ab|",
          "stepTheme": "La relation PPCM × PGCD = |ab|",
          "stepBadge": "La relation PPCM × PGCD = |ab|",
          "paragraphText": "• Pour deux entiers non nuls $a$ et $b$ : $\\text{PPCM}(a ; b) \\times \\text{PGCD}(a ; b) = |ab|$.\n• Exemple : $\\text{PGCD}(18 ; 15) = 3$ donc $\\text{PPCM}(18 ; 15) = \\frac{270}{3} = 90$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04_q1",
            "type": "mcq",
            "prompt": "L'affirmation « PPCM(a ; b) × PGCD(a ; b) ≠ |ab| » est-elle vraie ?",
            "options": ["Vrai", "Faux : on a PPCM(a ; b) × PGCD(a ; b) = |ab|", "Faux : on a PPCM(a ; b) + PGCD(a ; b) = |ab|", "Faux : on a PPCM(a ; b) × PGCD(a ; b) = a + b"],
            "correctAnswerIndex": 1,
            "explanation": "La relation exacte est PPCM(a ; b) × PGCD(a ; b) = |ab| : l'affirmation du livre (avec ≠) est fausse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "PPCM(18 ; 15) = 90",
          "stepTheme": "PPCM(18 ; 15) = 90",
          "stepBadge": "PPCM(18 ; 15) = 90",
          "paragraphText": "• On connaît $\\text{PGCD}(18 ; 15) = 3$ : la relation donne $\\text{PPCM}(18 ; 15) = \\frac{18 \\times 15}{3} = \\frac{270}{3} = 90$.\n• On peut aussi le vérifier : $90$ est bien le plus petit multiple commun de $18$ et $15$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04_q2",
            "type": "mcq",
            "prompt": "Quel est le PPCM de $18$ et $15$ ?",
            "options": ["$45$", "$90$", "$270$", "$30$"],
            "correctAnswerIndex": 1,
            "explanation": "PPCM(18 ; 15) × PGCD(18 ; 15) = 270 et PGCD(18 ; 15) = 3, donc PPCM(18 ; 15) = 270/3 = 90."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Condition d'existence des solutions",
          "stepTheme": "Condition d'existence des solutions",
          "stepBadge": "Condition d'existence des solutions",
          "paragraphText": "• L'équation $ax + by = c$ admet des solutions entières si et seulement si $d = \\text{PGCD}(a ; b)$ divise $c$.\n• Si $d$ ne divise pas $c$, il n'y a aucune solution.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04_q3",
            "type": "mcq",
            "prompt": "L'équation $4x - 6y = 1$ a-t-elle des solutions dans $\\mathbb{Z} \\times \\mathbb{Z}$ ?",
            "options": ["Oui, une infinité", "Non, car PGCD(4 ; 6) = 2 ne divise pas 1", "Oui, une seule", "Non, car PGCD(4 ; 6) = 1"],
            "correctAnswerIndex": 1,
            "explanation": "PGCD(4 ; 6) = 2 ne divise pas 1 : l'équation 4x − 6y = 1 n'a aucune solution entière."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Résoudre ax + by = c",
          "stepTheme": "Résoudre ax + by = c",
          "stepBadge": "Résoudre ax + by = c",
          "paragraphText": "• Méthode : on trouve une solution particulière $(x_0 ; y_0)$, puis les solutions générales sont $x = x_0 + \\frac{b}{d}k$ et $y = y_0 - \\frac{a}{d}k$ avec $k \\in \\mathbb{Z}$.\n• Exemple : $3x - 5y = -2$ a pour solution particulière $(1 ; 1)$ et pour solutions $S = \\{(1 + 5k ; 1 + 3k), k \\in \\mathbb{Z}\\}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04_q4",
            "type": "mcq",
            "prompt": "Quelles sont les solutions de $3x - 5y = -2$ dans $\\mathbb{Z} \\times \\mathbb{Z}$ ?",
            "options": ["$\\{(1 + 5k ; 1 + 3k), k \\in \\mathbb{Z}\\}$", "$\\{(1 + 3k ; 1 + 5k), k \\in \\mathbb{Z}\\}$", "$\\{(5k ; 3k), k \\in \\mathbb{Z}\\}$", "Aucune solution"],
            "correctAnswerIndex": 0,
            "explanation": "La solution particulière (1 ; 1) donne les solutions générales x = 1 + 5k et y = 1 + 3k."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un système avec PGCD et somme",
          "stepTheme": "Un système avec PGCD et somme",
          "stepBadge": "Un système avec PGCD et somme",
          "paragraphText": "• Exemple de la leçon : le système $\\text{PGCD}(x ; y) = 354$ et $x + y = 5664$ dans $\\mathbb{N}^2$.\n• On pose $x = 354x'$ et $y = 354y'$ : alors $x' + y' = 16$ avec $x'$ et $y'$ premiers entre eux, ce qui donne les couples $(1 ; 15)$, $(3 ; 13)$, $(5 ; 11)$ et leurs symétriques, soit $6$ couples.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04_q5",
            "type": "mcq",
            "prompt": "Combien de couples $(x ; y)$ vérifient $\\text{PGCD}(x ; y) = 354$ et $x + y = 5664$ ?",
            "options": ["$4$", "$6$", "$8$", "$12$"],
            "correctAnswerIndex": 1,
            "explanation": "Avec x = 354x' et y = 354y', on a x' + y' = 16 avec x' et y' premiers entre eux : (1 ; 15), (3 ; 13), (5 ; 11) et leurs symétriques, soit 6 couples."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le cas homogène ax + by = 0",
          "stepTheme": "Le cas homogène ax + by = 0",
          "stepBadge": "Le cas homogène ax + by = 0",
          "paragraphText": "• L'équation homogène $ax + by = 0$ admet toujours des solutions : ce sont les couples $(\\frac{b}{d}k ; -\\frac{a}{d}k)$ avec $k \\in \\mathbb{Z}$, où $d = \\text{PGCD}(a ; b)$.\n• Exemple : $3x - 5y = 0$ a pour solutions $\\{(5k ; 3k), k \\in \\mathbb{Z}\\}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04_q6",
            "type": "mcq",
            "prompt": "Quelles sont les solutions de $3x - 5y = 0$ dans $\\mathbb{Z} \\times \\mathbb{Z}$ ?",
            "options": ["$\\{(3k ; 5k), k \\in \\mathbb{Z}\\}$", "$\\{(5k ; 3k), k \\in \\mathbb{Z}\\}$", "$\\{(8k ; 3k), k \\in \\mathbb{Z}\\}$", "$\\{(-15k ; 2k), k \\in \\mathbb{Z}\\}$"],
            "correctAnswerIndex": 1,
            "explanation": "3x = 5y : par Gauss, 3 divise y et 5 divise x, donc x = 5k et y = 3k. Les solutions sont (5k ; 3k)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04_q1",
          "type": "mcq",
          "prompt": "L'affirmation « PPCM(a ; b) × PGCD(a ; b) ≠ |ab| » est-elle vraie ?",
          "options": ["Vrai", "Faux : on a PPCM(a ; b) × PGCD(a ; b) = |ab|", "Faux : on a PPCM(a ; b) + PGCD(a ; b) = |ab|", "Faux : on a PPCM(a ; b) × PGCD(a ; b) = a + b"],
          "correctAnswerIndex": 1,
          "explanation": "La relation exacte est PPCM(a ; b) × PGCD(a ; b) = |ab| : l'affirmation du livre (avec ≠) est fausse."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04_q2",
          "type": "mcq",
          "prompt": "Quel est le PPCM de $18$ et $15$ ?",
          "options": ["$45$", "$90$", "$270$", "$30$"],
          "correctAnswerIndex": 1,
          "explanation": "PPCM(18 ; 15) × PGCD(18 ; 15) = 270 et PGCD(18 ; 15) = 3, donc PPCM(18 ; 15) = 270/3 = 90."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04_q3",
          "type": "mcq",
          "prompt": "L'équation $4x - 6y = 1$ a-t-elle des solutions dans $\\mathbb{Z} \\times \\mathbb{Z}$ ?",
          "options": ["Oui, une infinité", "Non, car PGCD(4 ; 6) = 2 ne divise pas 1", "Oui, une seule", "Non, car PGCD(4 ; 6) = 1"],
          "correctAnswerIndex": 1,
          "explanation": "PGCD(4 ; 6) = 2 ne divise pas 1 : l'équation 4x − 6y = 1 n'a aucune solution entière."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04_q4",
          "type": "mcq",
          "prompt": "Quelles sont les solutions de $3x - 5y = -2$ dans $\\mathbb{Z} \\times \\mathbb{Z}$ ?",
          "options": ["$\\{(1 + 5k ; 1 + 3k), k \\in \\mathbb{Z}\\}$", "$\\{(1 + 3k ; 1 + 5k), k \\in \\mathbb{Z}\\}$", "$\\{(5k ; 3k), k \\in \\mathbb{Z}\\}$", "Aucune solution"],
          "correctAnswerIndex": 0,
          "explanation": "La solution particulière (1 ; 1) donne les solutions générales x = 1 + 5k et y = 1 + 3k."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04_q5",
          "type": "mcq",
          "prompt": "Combien de couples $(x ; y)$ vérifient $\\text{PGCD}(x ; y) = 354$ et $x + y = 5664$ ?",
          "options": ["$4$", "$6$", "$8$", "$12$"],
          "correctAnswerIndex": 1,
          "explanation": "Avec x = 354x' et y = 354y', on a x' + y' = 16 avec x' et y' premiers entre eux : (1 ; 15), (3 ; 13), (5 ; 11) et leurs symétriques, soit 6 couples."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p04_q6",
          "type": "mcq",
          "prompt": "Quelles sont les solutions de $3x - 5y = 0$ dans $\\mathbb{Z} \\times \\mathbb{Z}$ ?",
          "options": ["$\\{(3k ; 5k), k \\in \\mathbb{Z}\\}$", "$\\{(5k ; 3k), k \\in \\mathbb{Z}\\}$", "$\\{(8k ; 3k), k \\in \\mathbb{Z}\\}$", "$\\{(-15k ; 2k), k \\in \\mathbb{Z}\\}$"],
          "correctAnswerIndex": 1,
          "explanation": "3x = 5y : par Gauss, 3 divise y et 5 divise x, donc x = 5k et y = 3k. Les solutions sont (5k ; 3k)."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05",
      "order": 5,
      "title": "Équations ax ≡ b [n]",
      "summary": "L'équation ax ≡ b [n] admet des solutions si et seulement si PGCD(a ; n) divise b ; on la résout en divisant par ce PGCD puis en inversant a modulo n.",
      "conceptExplanation": "Soit l'équation $ax \\equiv b \\pmod n$ d'inconnue $x$. On note $d = \\text{PGCD}(a ; n)$. L'équation admet des solutions si et seulement si $d$ divise $b$ ; sinon, l'ensemble des solutions est vide.\\nPour résoudre : on divise l'équation par $d$ pour obtenir $a'x \\equiv b' \\pmod{n'}$ avec $a' = \\frac{a}{d}$, $b' = \\frac{b}{d}$ et $n' = \\frac{n}{d}$, où $a'$ et $n'$ sont premiers entre eux. On cherche alors un entier $u$ tel que $a'u \\equiv 1 \\pmod{n'}$ (l'inverse de $a'$ modulo $n'$, obtenu par le théorème de Bézout) : les solutions sont $x \\equiv ub' \\pmod{n'}$.\\nExemples de la leçon : $2x \\equiv 3 \\pmod 5$ donne $x \\equiv 4 \\pmod 5$ ; $8x \\equiv 1 \\pmod 4$ n'a pas de solution car $\\text{PGCD}(8 ; 4) = 4$ ne divise pas $1$.",
      "keyRule": "ax ≡ b [n] a des solutions ssi PGCD(a ; n) divise b. On divise par d, puis on inverse a modulo n/d.",
      "formulas": [
        {
          "name": "Condition d'existence",
          "formula": "ax \\equiv b \\pmod n \\text{ a des solutions} \\iff \\text{PGCD}(a ; n) \\mid b",
          "note": "d = PGCD(a ; n) doit diviser b."
        }
      ],
      "workedExample": {
        "title": "Résoudre 2x ≡ 3 [5]",
        "statement": "Résoudre dans $\\mathbb{Z}$ l'équation $2x \\equiv 3 \\pmod 5$.",
        "methodSteps": [
          "$d = \\text{PGCD}(2 ; 5) = 1$ divise $3$ : l'équation a des solutions.",
          "On cherche l'inverse de $2$ modulo $5$ : $2 \\times 3 = 6 \\equiv 1 \\pmod 5$, donc l'inverse est $3$.",
          "On multiplie par $3$ : $x \\equiv 3 \\times 3 = 9 \\equiv 4 \\pmod 5$."
        ],
        "conclusion": "Les solutions sont les entiers x ≡ 4 [5]."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La condition d'existence",
          "stepTheme": "La condition d'existence",
          "stepBadge": "La condition d'existence",
          "paragraphText": "• L'équation $ax \\equiv b \\pmod n$ admet des solutions si et seulement si $d = \\text{PGCD}(a ; n)$ divise $b$.\n• Si $d$ ne divise pas $b$, l'ensemble des solutions est vide.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05_q1",
            "type": "mcq",
            "prompt": "Quand l'équation $ax \\equiv b \\pmod n$ admet-elle des solutions ?",
            "options": ["Toujours", "Si et seulement si $\\text{PGCD}(a ; n)$ divise $b$", "Si et seulement si $a$ et $n$ sont premiers entre eux", "Si et seulement si $b$ divise $n$"],
            "correctAnswerIndex": 1,
            "explanation": "L'équation ax ≡ b [n] admet des solutions si et seulement si d = PGCD(a ; n) divise b."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "2x ≡ 3 [5]",
          "stepTheme": "2x ≡ 3 [5]",
          "stepBadge": "2x ≡ 3 [5]",
          "paragraphText": "• Exemple de la leçon : $2x \\equiv 3 \\pmod 5$ donne $x \\equiv 4 \\pmod 5$.\n• Vérification : $2 \\times 4 = 8 \\equiv 3 \\pmod 5$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05_q2",
            "type": "mcq",
            "prompt": "Quelles sont les solutions de $2x \\equiv 3 \\pmod 5$ ?",
            "options": ["$x \\equiv 3 \\pmod 5$", "$x \\equiv 4 \\pmod 5$", "$x \\equiv 1 \\pmod 5$", "$x \\equiv 2 \\pmod 5$"],
            "correctAnswerIndex": 1,
            "explanation": "L'inverse de 2 modulo 5 est 3 : x ≡ 3×3 = 9 ≡ 4 (mod 5). Vérification : 2×4 = 8 ≡ 3 (mod 5)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "8x ≡ 1 [4] n'a pas de solution",
          "stepTheme": "8x ≡ 1 [4] n'a pas de solution",
          "stepBadge": "8x ≡ 1 [4] n'a pas de solution",
          "paragraphText": "• Piège : $8x \\equiv 1 \\pmod 4$ n'a pas de solution car $\\text{PGCD}(8 ; 4) = 4$ ne divise pas $1$.\n• En effet, $8x$ est toujours un multiple de $4$, donc $8x \\equiv 0 \\pmod 4$ : il ne peut pas être congru à $1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05_q3",
            "type": "mcq",
            "prompt": "L'équation $8x \\equiv 1 \\pmod 4$ a-t-elle des solutions ?",
            "options": ["Oui : $x \\equiv 1 \\pmod 4$", "Non : PGCD(8 ; 4) = 4 ne divise pas 1", "Oui : $x \\equiv 0 \\pmod 4$", "Non : PGCD(8 ; 4) = 1"],
            "correctAnswerIndex": 1,
            "explanation": "PGCD(8 ; 4) = 4 ne divise pas 1 : l'équation n'a aucune solution. De plus, 8x est toujours multiple de 4."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Inverser a modulo n",
          "stepTheme": "Inverser a modulo n",
          "stepBadge": "Inverser a modulo n",
          "paragraphText": "• Méthode : quand $a$ et $n$ sont premiers entre eux, on trouve l'inverse de $a$ modulo $n$ avec le théorème de Bézout : on cherche $u$ tel que $au + nv = 1$, alors $au \\equiv 1 \\pmod n$.\n• On multiplie ensuite l'équation par $u$ pour isoler $x$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05_q4",
            "type": "mcq",
            "prompt": "Quel est l'inverse de $2$ modulo $5$ ?",
            "options": ["$2$", "$3$", "$4$", "$1$"],
            "correctAnswerIndex": 1,
            "explanation": "$2 \\times 3 = 6 \\equiv 1 \\pmod 5$ : l'inverse de 2 modulo 5 est 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une solution particulière de 17x − 33y = 5",
          "stepTheme": "Une solution particulière de 17x − 33y = 5",
          "stepBadge": "Une solution particulière de 17x − 33y = 5",
          "paragraphText": "• Exemple du livre : une solution particulière de $17x - 33y = 1$ est $(2 ; 1)$ car $17 \\times 2 - 33 \\times 1 = 34 - 33 = 1$.\n• Une solution particulière de $17x - 33y = 5$ est $(10 ; 5)$ car $17 \\times 10 - 33 \\times 5 = 170 - 165 = 5$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05_q5",
            "type": "mcq",
            "prompt": "Une solution particulière de $17x - 33y = 5$ est :",
            "options": ["$(2 ; 1)$", "$(10 ; 5)$", "$(32 ; 16)$", "$(85 ; 165)$"],
            "correctAnswerIndex": 1,
            "explanation": "17×10 − 33×5 = 170 − 165 = 5 : le couple (10 ; 5) est une solution particulière de 17x − 33y = 5."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les solutions forment une classe modulo n'",
          "stepTheme": "Les solutions forment une classe modulo n'",
          "stepBadge": "Les solutions forment une classe modulo n'",
          "paragraphText": "• Quand l'équation $ax \\equiv b \\pmod n$ a des solutions, elles forment une seule classe modulo $n' = \\frac{n}{d}$ : $x \\equiv x_0 \\pmod{n'}$.\n• Exemple : les solutions de $2x \\equiv 3 \\pmod 5$ sont tous les entiers congrus à $4$ modulo $5$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05_q6",
            "type": "mcq",
            "prompt": "Les solutions de $2x \\equiv 3 \\pmod 5$ sont :",
            "options": ["Tous les entiers congrus à $4$ modulo $5$", "Tous les entiers congrus à $3$ modulo $5$", "Le seul entier $4$", "Tous les entiers pairs"],
            "correctAnswerIndex": 0,
            "explanation": "Les solutions forment la classe de 4 modulo 5 : x ≡ 4 [5], soit x = 4, 9, 14, … et aussi −1, −6, …"
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05_q1",
          "type": "mcq",
          "prompt": "Quand l'équation $ax \\equiv b \\pmod n$ admet-elle des solutions ?",
          "options": ["Toujours", "Si et seulement si $\\text{PGCD}(a ; n)$ divise $b$", "Si et seulement si $a$ et $n$ sont premiers entre eux", "Si et seulement si $b$ divise $n$"],
          "correctAnswerIndex": 1,
          "explanation": "L'équation ax ≡ b [n] admet des solutions si et seulement si d = PGCD(a ; n) divise b."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05_q2",
          "type": "mcq",
          "prompt": "Quelles sont les solutions de $2x \\equiv 3 \\pmod 5$ ?",
          "options": ["$x \\equiv 3 \\pmod 5$", "$x \\equiv 4 \\pmod 5$", "$x \\equiv 1 \\pmod 5$", "$x \\equiv 2 \\pmod 5$"],
          "correctAnswerIndex": 1,
          "explanation": "L'inverse de 2 modulo 5 est 3 : x ≡ 3×3 = 9 ≡ 4 (mod 5). Vérification : 2×4 = 8 ≡ 3 (mod 5)."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05_q3",
          "type": "mcq",
          "prompt": "L'équation $8x \\equiv 1 \\pmod 4$ a-t-elle des solutions ?",
          "options": ["Oui : $x \\equiv 1 \\pmod 4$", "Non : PGCD(8 ; 4) = 4 ne divise pas 1", "Oui : $x \\equiv 0 \\pmod 4$", "Non : PGCD(8 ; 4) = 1"],
          "correctAnswerIndex": 1,
          "explanation": "PGCD(8 ; 4) = 4 ne divise pas 1 : l'équation n'a aucune solution. De plus, 8x est toujours multiple de 4."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05_q4",
          "type": "mcq",
          "prompt": "Quel est l'inverse de $2$ modulo $5$ ?",
          "options": ["$2$", "$3$", "$4$", "$1$"],
          "correctAnswerIndex": 1,
          "explanation": "$2 \\times 3 = 6 \\equiv 1 \\pmod 5$ : l'inverse de 2 modulo 5 est 3."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05_q5",
          "type": "mcq",
          "prompt": "Une solution particulière de $17x - 33y = 5$ est :",
          "options": ["$(2 ; 1)$", "$(10 ; 5)$", "$(32 ; 16)$", "$(85 ; 165)$"],
          "correctAnswerIndex": 1,
          "explanation": "17×10 − 33×5 = 170 − 165 = 5 : le couple (10 ; 5) est une solution particulière de 17x − 33y = 5."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p05_q6",
          "type": "mcq",
          "prompt": "Les solutions de $2x \\equiv 3 \\pmod 5$ sont :",
          "options": ["Tous les entiers congrus à $4$ modulo $5$", "Tous les entiers congrus à $3$ modulo $5$", "Le seul entier $4$", "Tous les entiers pairs"],
          "correctAnswerIndex": 0,
          "explanation": "Les solutions forment la classe de 4 modulo 5 : x ≡ 4 [5], soit x = 4, 9, 14, … et aussi −1, −6, …"
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06",
      "order": 6,
      "title": "Situation complexe : le message codé",
      "summary": "Un père code ses messages par une fonction affine modulo 26 ; on décode en inversant 29 modulo 26 grâce à l'algorithme d'Euclide.",
      "conceptExplanation": "Un père communique avec son fils par des messages codés. On numérote les lettres de l'alphabet $A = 0$, $B = 1$, $\\ldots$, $Z = 25$. Le codage est la fonction affine $f(x) \\equiv 29x + 13 \\pmod{26}$ : chaque lettre $x$ est remplacée par la lettre $f(x)$.\\nPour décoder, on cherche la fonction réciproque $g$ : il faut trouver $u$ tel que $29u \\equiv 1 \\pmod{26}$ (l'inverse de $29$ modulo $26$). L'algorithme d'Euclide donne $\\text{PGCD}(29 ; 26) = 1$ et $1 = 29 \\times 9 - 26 \\times 10$, donc $u = 9$.\\nOn en déduit $g(y) \\equiv 9y + 13 \\pmod{26}$ : en effet, de $y \\equiv 29x + 13 \\pmod{26}$ on tire $29x \\equiv y - 13 \\pmod{26}$, puis $x \\equiv 9(y - 13) \\equiv 9y - 117 \\equiv 9y + 13 \\pmod{26}$ car $-117 \\equiv 13 \\pmod{26}$.\\nEn appliquant $g$ au mot codé NWXLP ($N = 13$, $W = 22$, $X = 23$, $L = 11$, $P = 15$), on obtient $0, 3, 12, 8, 18$, soit le mot ADMIS.",
      "keyRule": "Pour décoder une fonction affine modulo 26, on inverse le coefficient avec Bézout (Euclide).",
      "formulas": [
        {
          "name": "Codage affine",
          "formula": "f(x) \\equiv 29x + 13 \\pmod{26}",
          "note": "A = 0, B = 1, …, Z = 25."
        },
        {
          "name": "Décodage",
          "formula": "g(y) \\equiv 9y + 13 \\pmod{26}",
          "note": "9 est l'inverse de 29 modulo 26 : 29×9 ≡ 1 [26]."
        }
      ],
      "workedExample": {
        "title": "Décoder le mot NWXLP",
        "statement": "Le mot codé est NWXLP. Décoder-le avec $g(y) \\equiv 9y + 13 \\pmod{26}$.",
        "methodSteps": [
          "On numérote les lettres : $N = 13$, $W = 22$, $X = 23$, $L = 11$, $P = 15$.",
          "On applique $g$ : $9 \\times 13 + 13 = 130 \\equiv 0 \\pmod{26}$ → A ; $9 \\times 22 + 13 = 211 \\equiv 3 \\pmod{26}$ → D ; $9 \\times 23 + 13 = 220 \\equiv 12 \\pmod{26}$ → M.",
          "$9 \\times 11 + 13 = 112 \\equiv 8 \\pmod{26}$ → I ; $9 \\times 15 + 13 = 148 \\equiv 18 \\pmod{26}$ → S."
        ],
        "conclusion": "Le mot décodé est ADMIS."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le codage affine modulo 26",
          "stepTheme": "Le codage affine modulo 26",
          "stepBadge": "Le codage affine modulo 26",
          "paragraphText": "• On numérote les lettres : $A = 0$, $B = 1$, $\\ldots$, $Z = 25$.\n• Le codage est la fonction affine $f(x) \\equiv 29x + 13 \\pmod{26}$ : chaque lettre $x$ est remplacée par la lettre numéro $f(x)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06_q1",
            "type": "mcq",
            "prompt": "Dans le codage de la leçon, quel numéro correspond à la lettre N ?",
            "options": ["$11$", "$13$", "$15$", "$22$"],
            "correctAnswerIndex": 1,
            "explanation": "On numérote A = 0, B = 1, … : N est la 14e lettre, donc son numéro est 13."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Trouver l'inverse de 29 modulo 26",
          "stepTheme": "Trouver l'inverse de 29 modulo 26",
          "stepBadge": "Trouver l'inverse de 29 modulo 26",
          "paragraphText": "• Méthode : pour décoder, il faut l'inverse $u$ de $29$ modulo $26$, c'est-à-dire $u$ tel que $29u \\equiv 1 \\pmod{26}$.\n• L'algorithme d'Euclide donne $\\text{PGCD}(29 ; 26) = 1$ et $1 = 29 \\times 9 - 26 \\times 10$, donc $u = 9$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06_q2",
            "type": "mcq",
            "prompt": "Quel est l'inverse de $29$ modulo $26$ ?",
            "options": ["$9$", "$13$", "$26$", "$29$"],
            "correctAnswerIndex": 0,
            "explanation": "29×9 = 261 = 10×26 + 1, donc 29×9 ≡ 1 [26] : l'inverse de 29 modulo 26 est 9."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La fonction de décodage",
          "stepTheme": "La fonction de décodage",
          "stepBadge": "La fonction de décodage",
          "paragraphText": "• De $y \\equiv 29x + 13 \\pmod{26}$, on tire $x \\equiv 9y + 13 \\pmod{26}$ : la fonction de décodage est $g(y) \\equiv 9y + 13 \\pmod{26}$.\n• Vérification : $g(f(x)) \\equiv 9(29x + 13) + 13 \\equiv x + 117 + 13 \\equiv x \\pmod{26}$ car $130 \\equiv 0 \\pmod{26}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06_q3",
            "type": "mcq",
            "prompt": "Quelle est la fonction de décodage du code $f(x) \\equiv 29x + 13 \\pmod{26}$ ?",
            "options": ["$g(y) \\equiv 9y + 13 \\pmod{26}$", "$g(y) \\equiv 29y + 13 \\pmod{26}$", "$g(y) \\equiv 9y - 13 \\pmod{26}$", "$g(y) \\equiv 26y + 9 \\pmod{26}$"],
            "correctAnswerIndex": 0,
            "explanation": "L'inverse de 29 modulo 26 est 9 et −117 ≡ 13 (mod 26) : la fonction de décodage est g(y) ≡ 9y + 13 [26]."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "L'erreur de signe de la source",
          "stepTheme": "L'erreur de signe de la source",
          "stepBadge": "L'erreur de signe de la source",
          "paragraphText": "• Attention : dans le PDF, une étape du calcul écrit « $29x \\equiv -13 + y \\pmod{26} \\iff 29x \\equiv 13 + y \\pmod{26}$ ».\n• C'est une erreur de signe de la source, signalée telle quelle : $-13$ et $13$ ne sont pas congrus modulo $26$ (leur différence est $26$… en fait $-13 \\equiv 13 \\pmod{26}$ car $13 - (-13) = 26$ : l'équivalence est juste, mais l'écriture intermédiaire est trompeuse).",
          "konanTip": "Modulo 26, −13 et 13 sont congrus (leur différence vaut 26) : l'étape du PDF est donc juste, mais elle mérite d'être vérifiée.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06_q4",
            "type": "mcq",
            "prompt": "Modulo $26$, les nombres $-13$ et $13$ sont-ils congrus ?",
            "options": ["Non, car ils sont opposés", "Oui, car leur différence $13 - (-13) = 26$ est un multiple de 26", "Non, car $13$ n'est pas multiple de $26$", "Oui, car ils sont égaux"],
            "correctAnswerIndex": 1,
            "explanation": "Deux nombres sont congrus modulo 26 si leur différence est un multiple de 26 : 13 − (−13) = 26, donc −13 ≡ 13 [26]."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Décoder NWXLP",
          "stepTheme": "Décoder NWXLP",
          "stepBadge": "Décoder NWXLP",
          "paragraphText": "• Le mot codé est NWXLP : $N = 13$, $W = 22$, $X = 23$, $L = 11$, $P = 15$.\n• En appliquant $g(y) \\equiv 9y + 13 \\pmod{26}$ : $0, 3, 12, 8, 18$, soit les lettres A, D, M, I, S.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06_q5",
            "type": "mcq",
            "prompt": "Quel mot obtient-on en décodant NWXLP ?",
            "options": ["ADMIS", "BRAVO", "MERCI", "CODE"],
            "correctAnswerIndex": 0,
            "explanation": "N=13→0=A, W=22→3=D, X=23→12=M, L=11→8=I, P=15→18=S : le mot décodé est ADMIS."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Pourquoi le code fonctionne",
          "stepTheme": "Pourquoi le code fonctionne",
          "stepBadge": "Pourquoi le code fonctionne",
          "paragraphText": "• Le code fonctionne parce que $29$ et $26$ sont premiers entre eux : $29$ admet un inverse modulo $26$, donc le codage est bijectif.\n• Si le coefficient n'était pas premier avec $26$, deux lettres différentes pourraient avoir le même code et le décodage serait impossible.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06_q6",
            "type": "mcq",
            "prompt": "Pourquoi le codage $f(x) \\equiv 29x + 13 \\pmod{26}$ est-il décodable ?",
            "options": ["Parce que $29 > 26$", "Parce que $29$ et $26$ sont premiers entre eux, donc $29$ admet un inverse modulo $26$", "Parce que $13$ est premier", "Parce que $29$ est premier"],
            "correctAnswerIndex": 1,
            "explanation": "PGCD(29 ; 26) = 1 : 29 admet un inverse modulo 26 (c'est 9), donc le codage est bijectif et décodable."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06_q1",
          "type": "mcq",
          "prompt": "Dans le codage de la leçon, quel numéro correspond à la lettre N ?",
          "options": ["$11$", "$13$", "$15$", "$22$"],
          "correctAnswerIndex": 1,
          "explanation": "On numérote A = 0, B = 1, … : N est la 14e lettre, donc son numéro est 13."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06_q2",
          "type": "mcq",
          "prompt": "Quel est l'inverse de $29$ modulo $26$ ?",
          "options": ["$9$", "$13$", "$26$", "$29$"],
          "correctAnswerIndex": 0,
          "explanation": "29×9 = 261 = 10×26 + 1, donc 29×9 ≡ 1 [26] : l'inverse de 29 modulo 26 est 9."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06_q3",
          "type": "mcq",
          "prompt": "Quelle est la fonction de décodage du code $f(x) \\equiv 29x + 13 \\pmod{26}$ ?",
          "options": ["$g(y) \\equiv 9y + 13 \\pmod{26}$", "$g(y) \\equiv 29y + 13 \\pmod{26}$", "$g(y) \\equiv 9y - 13 \\pmod{26}$", "$g(y) \\equiv 26y + 9 \\pmod{26}$"],
          "correctAnswerIndex": 0,
          "explanation": "L'inverse de 29 modulo 26 est 9 et −117 ≡ 13 (mod 26) : la fonction de décodage est g(y) ≡ 9y + 13 [26]."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06_q4",
          "type": "mcq",
          "prompt": "Modulo $26$, les nombres $-13$ et $13$ sont-ils congrus ?",
          "options": ["Non, car ils sont opposés", "Oui, car leur différence $13 - (-13) = 26$ est un multiple de 26", "Non, car $13$ n'est pas multiple de $26$", "Oui, car ils sont égaux"],
          "correctAnswerIndex": 1,
          "explanation": "Deux nombres sont congrus modulo 26 si leur différence est un multiple de 26 : 13 − (−13) = 26, donc −13 ≡ 13 [26]."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06_q5",
          "type": "mcq",
          "prompt": "Quel mot obtient-on en décodant NWXLP ?",
          "options": ["ADMIS", "BRAVO", "MERCI", "CODE"],
          "correctAnswerIndex": 0,
          "explanation": "N=13→0=A, W=22→3=D, X=23→12=M, L=11→8=I, P=15→18=S : le mot décodé est ADMIS."
        },
        {
          "id": "terminale_c_maths_numerique_l11_ppcm_pgcd_p06_q6",
          "type": "mcq",
          "prompt": "Pourquoi le codage $f(x) \\equiv 29x + 13 \\pmod{26}$ est-il décodable ?",
          "options": ["Parce que $29 > 26$", "Parce que $29$ et $26$ sont premiers entre eux, donc $29$ admet un inverse modulo $26$", "Parce que $13$ est premier", "Parce que $29$ est premier"],
          "correctAnswerIndex": 1,
          "explanation": "PGCD(29 ; 26) = 1 : 29 admet un inverse modulo 26 (c'est 9), donc le codage est bijectif et décodable."
        }
      ]
    }
  ]
};
