import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 07 : Coniques » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2090
// Décalage de numérotation signalé : le livre H5P intitule la leçon « LEÇON N°8 » alors que le cours est la Leçon 07.
export const MATHS_TLE_C_L07_CONIQUES: CurriculumChapter = {
  "id": "terminale_c_maths_geometrie_l07_coniques",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 7,
  "title": "Leçon 7 : Coniques",
  "summary": "Coniques définies par foyer et directrice, excentricité, régionnement, équations réduites de la parabole, de l'ellipse et de l'hyperbole, et éléments caractéristiques.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2090",
  "points": [
    {
      "id": "terminale_c_maths_geometrie_l07_coniques_p01",
      "order": 1,
      "title": "Conique définie par foyer et directrice",
      "summary": "Une conique est l'ensemble des points M tels que MF/MH = e, où e est l'excentricité : parabole, ellipse ou hyperbole selon e.",
      "conceptExplanation": "Soit $F$ un point (le foyer), $(D)$ une droite ne passant pas par $F$ (la directrice), et $e$ un réel strictement positif (l'excentricité). On appelle conique de foyer $F$, de directrice $(D)$ et d'excentricité $e$ l'ensemble des points $M$ du plan tels que $\\frac{MF}{MH} = e$, où $H$ est le projeté orthogonal de $M$ sur $(D)$.\\nSi $e = 1$, la conique est une parabole. Si $0 < e < 1$, c'est une ellipse. Si $e > 1$, c'est une hyperbole.\\nLa conique est symétrique par rapport à son axe focal : la droite passant par $F$ et perpendiculaire à $(D)$. Si $e = 1$, la conique a un seul sommet $S$ ; si $e \\neq 1$, elle a deux sommets $A$ et $A'$, barycentres de $(F ; 1)$ et $(K ; e)$ d'une part, de $(F ; 1)$ et $(K ; -e)$ d'autre part, où $K$ est le projeté orthogonal de $F$ sur $(D)$.",
      "keyRule": "MF/MH = e : e = 1 parabole, 0 < e < 1 ellipse, e > 1 hyperbole.",
      "formulas": [
        {
          "name": "Définition d'une conique",
          "formula": "\\frac{MF}{MH} = e \\quad (e > 0)",
          "note": "H est le projeté orthogonal de M sur la directrice (D)."
        },
        {
          "name": "Nature selon l'excentricité",
          "formula": "e = 1 : \\text{parabole} ; \\quad 0 < e < 1 : \\text{ellipse} ; \\quad e > 1 : \\text{hyperbole}",
          "note": "L'excentricité détermine la nature de la conique."
        }
      ],
      "workedExample": {
        "title": "Sommets d'une conique d'excentricité 1/3",
        "statement": "Soit la conique de foyer $F(2 ; 3)$, de directrice $(D) : x = -4$ et d'excentricité $e = \\frac{1}{3}$. Déterminer ses sommets.",
        "methodSteps": [
          "Le projeté orthogonal de $F$ sur $(D)$ est $K(-4 ; 3)$.",
          "L'axe focal est la droite $y = 3$.",
          "Le sommet $A$ est le barycentre de $(F ; 1)$ et $(K ; \\frac{1}{3})$ : $A = \\frac{F + \\frac{1}{3}K}{1 + \\frac{1}{3}} = (\\frac{1}{2} ; 3)$.",
          "Le sommet $A'$ est le barycentre de $(F ; 1)$ et $(K ; -\\frac{1}{3})$ : $A' = \\frac{F - \\frac{1}{3}K}{1 - \\frac{1}{3}} = (5 ; 3)$."
        ],
        "conclusion": "La conique est une ellipse de sommets A(1/2 ; 3) et A'(5 ; 3)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Foyer, directrice, excentricité",
          "stepTheme": "Foyer, directrice, excentricité",
          "stepBadge": "Foyer, directrice, excentricité",
          "paragraphText": "• Une conique est définie par un foyer $F$, une directrice $(D)$ ne passant pas par $F$, et une excentricité $e > 0$.\n• C'est l'ensemble des points $M$ tels que $\\frac{MF}{MH} = e$, où $H$ est le projeté orthogonal de $M$ sur $(D)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une conique de foyer $F$, de directrice $(D)$ et d'excentricité $e$ ?",
            "options": ["L'ensemble des points $M$ tels que $\\frac{MF}{MH} = e$", "L'ensemble des points $M$ tels que $MF = MH$", "Le cercle de centre $F$ et de rayon $e$", "La droite passant par $F$ et perpendiculaire à $(D)$"],
            "correctAnswerIndex": 0,
            "explanation": "Une conique est l'ensemble des points $M$ tels que $\\frac{MF}{MH} = e$, où $H$ est le projeté orthogonal de $M$ sur la directrice $(D)$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La nature selon e",
          "stepTheme": "La nature selon e",
          "stepBadge": "La nature selon e",
          "paragraphText": "• Si $e = 1$, la conique est une parabole.\n• Si $0 < e < 1$, c'est une ellipse.\n• Si $e > 1$, c'est une hyperbole.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p01_q2",
            "type": "mcq",
            "prompt": "Une conique a pour excentricité $e = 2$. Quelle est sa nature ?",
            "options": ["Une parabole", "Une ellipse", "Une hyperbole", "Un cercle"],
            "correctAnswerIndex": 2,
            "explanation": "Si $e > 1$, la conique est une hyperbole."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Symétrie par rapport à l'axe focal",
          "stepTheme": "Symétrie par rapport à l'axe focal",
          "stepBadge": "Symétrie par rapport à l'axe focal",
          "paragraphText": "• L'axe focal est la droite passant par le foyer $F$ et perpendiculaire à la directrice $(D)$.\n• La conique est symétrique par rapport à son axe focal.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p01_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'axe focal d'une conique ?",
            "options": ["La directrice $(D)$", "La droite passant par $F$ et perpendiculaire à $(D)$", "La droite passant par $F$ et parallèle à $(D)$", "La tangente à la conique en son sommet"],
            "correctAnswerIndex": 1,
            "explanation": "L'axe focal est la droite passant par le foyer $F$ et perpendiculaire à la directrice $(D)$ : la conique est symétrique par rapport à cet axe."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Trouver les sommets",
          "stepTheme": "Trouver les sommets",
          "stepBadge": "Trouver les sommets",
          "paragraphText": "• Si $e = 1$, la conique a un seul sommet $S$.\n• Si $e \\neq 1$, elle a deux sommets $A$ et $A'$ : $A$ est le barycentre de $(F ; 1)$ et $(K ; e)$, $A'$ celui de $(F ; 1)$ et $(K ; -e)$, où $K$ est le projeté orthogonal de $F$ sur $(D)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p01_q4",
            "type": "mcq",
            "prompt": "Soit une conique d'excentricité $e = \\frac{1}{3}$, de foyer $F(2 ; 3)$ et de directrice $(D) : x = -4$. Quel est l'un de ses sommets ?",
            "options": ["$(\\frac{1}{2} ; 3)$", "$(2 ; 3)$", "$(-4 ; 3)$", "$(3 ; 2)$"],
            "correctAnswerIndex": 0,
            "explanation": "Avec $K(-4 ; 3)$, le sommet $A = \\text{bar}\\{(F ; 1), (K ; \\frac{1}{3})\\} = \\frac{F + \\frac{1}{3}K}{1 + \\frac{1}{3}} = (\\frac{1}{2} ; 3)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'excentricité ne peut pas être nulle",
          "stepTheme": "L'excentricité ne peut pas être nulle",
          "stepBadge": "L'excentricité ne peut pas être nulle",
          "paragraphText": "• Piège : l'excentricité $e$ est strictement positive : $e = 0$ donnerait $MF = 0$, c'est-à-dire le point $F$ seul, pas une conique.\n• Le cas $e = 1$ est la frontière entre l'ellipse et l'hyperbole.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p01_q5",
            "type": "mcq",
            "prompt": "Une conique a pour excentricité $e = \\frac{1}{3}$. Quelle est sa nature ?",
            "options": ["Une parabole", "Une ellipse", "Une hyperbole", "Un cercle"],
            "correctAnswerIndex": 1,
            "explanation": "Comme $0 < \\frac{1}{3} < 1$, la conique est une ellipse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Trois exemples d'excentricité",
          "stepTheme": "Trois exemples d'excentricité",
          "stepBadge": "Trois exemples d'excentricité",
          "paragraphText": "• Exemples de la leçon : $e = 1$ (parabole), $e = \\frac{1}{3}$ (ellipse), $e = 2$ (hyperbole).\n• La même définition $\\frac{MF}{MH} = e$ donne les trois courbes selon la valeur de $e$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p01_q6",
            "type": "mcq",
            "prompt": "Parmi ces excentricités, laquelle correspond à une parabole ?",
            "options": ["$e = \\frac{1}{3}$", "$e = 2$", "$e = 1$", "$e = \\frac{1}{2}$"],
            "correctAnswerIndex": 2,
            "explanation": "La parabole correspond à $e = 1$ exactement."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une conique de foyer $F$, de directrice $(D)$ et d'excentricité $e$ ?",
          "options": ["L'ensemble des points $M$ tels que $\\frac{MF}{MH} = e$", "L'ensemble des points $M$ tels que $MF = MH$", "Le cercle de centre $F$ et de rayon $e$", "La droite passant par $F$ et perpendiculaire à $(D)$"],
          "correctAnswerIndex": 0,
          "explanation": "Une conique est l'ensemble des points $M$ tels que $\\frac{MF}{MH} = e$, où $H$ est le projeté orthogonal de $M$ sur la directrice $(D)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p01_q2",
          "type": "mcq",
          "prompt": "Une conique a pour excentricité $e = 2$. Quelle est sa nature ?",
          "options": ["Une parabole", "Une ellipse", "Une hyperbole", "Un cercle"],
          "correctAnswerIndex": 2,
          "explanation": "Si $e > 1$, la conique est une hyperbole."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p01_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'axe focal d'une conique ?",
          "options": ["La directrice $(D)$", "La droite passant par $F$ et perpendiculaire à $(D)$", "La droite passant par $F$ et parallèle à $(D)$", "La tangente à la conique en son sommet"],
          "correctAnswerIndex": 1,
          "explanation": "L'axe focal est la droite passant par le foyer $F$ et perpendiculaire à la directrice $(D)$ : la conique est symétrique par rapport à cet axe."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p01_q4",
          "type": "mcq",
          "prompt": "Soit une conique d'excentricité $e = \\frac{1}{3}$, de foyer $F(2 ; 3)$ et de directrice $(D) : x = -4$. Quel est l'un de ses sommets ?",
          "options": ["$(\\frac{1}{2} ; 3)$", "$(2 ; 3)$", "$(-4 ; 3)$", "$(3 ; 2)$"],
          "correctAnswerIndex": 0,
          "explanation": "Avec $K(-4 ; 3)$, le sommet $A = \\text{bar}\\{(F ; 1), (K ; \\frac{1}{3})\\} = \\frac{F + \\frac{1}{3}K}{1 + \\frac{1}{3}} = (\\frac{1}{2} ; 3)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p01_q5",
          "type": "mcq",
          "prompt": "Une conique a pour excentricité $e = \\frac{1}{3}$. Quelle est sa nature ?",
          "options": ["Une parabole", "Une ellipse", "Une hyperbole", "Un cercle"],
          "correctAnswerIndex": 1,
          "explanation": "Comme $0 < \\frac{1}{3} < 1$, la conique est une ellipse."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p01_q6",
          "type": "mcq",
          "prompt": "Parmi ces excentricités, laquelle correspond à une parabole ?",
          "options": ["$e = \\frac{1}{3}$", "$e = 2$", "$e = 1$", "$e = \\frac{1}{2}$"],
          "correctAnswerIndex": 2,
          "explanation": "La parabole correspond à $e = 1$ exactement."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l07_coniques_p02",
      "order": 2,
      "title": "Régionnement : intérieur et extérieur",
      "summary": "Un point est à l'intérieur de la conique si MF < e·MH, à l'extérieur si MF > e·MH, et sur la conique si MF = e·MH.",
      "conceptExplanation": "La conique $\\frac{MF}{MH} = e$ partage le plan en deux régions : l'intérieur et l'extérieur.\\nUn point $M$ est à l'intérieur de la conique si $MF < e \\times MH$. Il est à l'extérieur si $MF > e \\times MH$. Il est sur la conique si $MF = e \\times MH$.\\nPour savoir de quel côté d'une conique se trouve un point, on compare donc $MF$ et $e \\times MH$ : c'est le même principe que pour un cercle (intérieur si la distance au centre est inférieure au rayon).",
      "keyRule": "Intérieur : MF < e·MH. Extérieur : MF > e·MH. Sur la conique : MF = e·MH.",
      "formulas": [
        {
          "name": "Régionnement",
          "formula": "M \\text{ intérieur} \\iff MF < e \\times MH ; \\quad M \\text{ extérieur} \\iff MF > e \\times MH",
          "note": "M est sur la conique si MF = e × MH."
        }
      ],
      "workedExample": {
        "title": "Un point intérieur ou extérieur ?",
        "statement": "Soit une conique d'excentricité $e = 2$, de foyer $F$ et de directrice $(D)$. Un point $M$ vérifie $MF = 6$ et $MH = 2$. Est-il à l'intérieur, à l'extérieur ou sur la conique ?",
        "methodSteps": [
          "On calcule $e \\times MH = 2 \\times 2 = 4$.",
          "On compare avec $MF = 6$ : $6 > 4$.",
          "Donc $MF > e \\times MH$ : le point est à l'extérieur de la conique."
        ],
        "conclusion": "On compare MF et e×MH pour situer un point par rapport à la conique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Intérieur d'une conique",
          "stepTheme": "Intérieur d'une conique",
          "stepBadge": "Intérieur d'une conique",
          "paragraphText": "• Un point $M$ est à l'intérieur de la conique si $MF < e \\times MH$.\n• Pour une ellipse, l'intérieur est la région bornée délimitée par la courbe ; pour une parabole ou une hyperbole, c'est la région qui contient le foyer.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p02_q1",
            "type": "mcq",
            "prompt": "Quand un point $M$ est-il à l'intérieur d'une conique d'excentricité $e$ ?",
            "options": ["Quand $MF > e \\times MH$", "Quand $MF < e \\times MH$", "Quand $MF = e \\times MH$", "Quand $M$ est sur la directrice"],
            "correctAnswerIndex": 1,
            "explanation": "L'intérieur est défini par $MF < e \\times MH$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Extérieur d'une conique",
          "stepTheme": "Extérieur d'une conique",
          "stepBadge": "Extérieur d'une conique",
          "paragraphText": "• Un point $M$ est à l'extérieur de la conique si $MF > e \\times MH$.\n• Un point est sur la conique si $MF = e \\times MH$ : c'est la définition même de la conique.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p02_q2",
            "type": "mcq",
            "prompt": "Un point $M$ vérifie $MF = 6$ et $MH = 2$ pour une conique d'excentricité $e = 2$. Où est-il ?",
            "options": ["À l'intérieur", "Sur la conique", "À l'extérieur", "Sur la directrice"],
            "correctAnswerIndex": 2,
            "explanation": "$e \\times MH = 2 \\times 2 = 4$ et $MF = 6 > 4$ : le point est à l'extérieur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Comparer MF et e×MH",
          "stepTheme": "Comparer MF et e×MH",
          "stepBadge": "Comparer MF et e×MH",
          "paragraphText": "• Méthode : pour situer un point, on calcule $e \\times MH$ et on le compare à $MF$.\n• Si $MF < e \\times MH$ : intérieur. Si $MF > e \\times MH$ : extérieur. Si $MF = e \\times MH$ : sur la conique.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p02_q3",
            "type": "mcq",
            "prompt": "Pour une conique d'excentricité $e = \\frac{1}{3}$, un point $M$ vérifie $MF = 1$ et $MH = 3$. Où est-il ?",
            "options": ["À l'intérieur", "À l'extérieur", "Sur la conique", "Sur l'axe focal"],
            "correctAnswerIndex": 2,
            "explanation": "$e \\times MH = \\frac{1}{3} \\times 3 = 1 = MF$ : le point est sur la conique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le foyer est à l'intérieur",
          "stepTheme": "Le foyer est à l'intérieur",
          "stepBadge": "Le foyer est à l'intérieur",
          "paragraphText": "• Exemple : le foyer $F$ lui-même est à l'intérieur de la conique : pour $M = F$, on a $MF = 0$ et $e \\times MH = e \\times FH > 0$, donc $MF < e \\times MH$.\n• C'est cohérent : le foyer est au cœur de la conique.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p02_q4",
            "type": "mcq",
            "prompt": "Où se trouve le foyer $F$ par rapport à sa conique ?",
            "options": ["À l'extérieur", "Sur la conique", "À l'intérieur", "Sur la directrice"],
            "correctAnswerIndex": 2,
            "explanation": "Pour $M = F$, $MF = 0 < e \\times MH$ (car $FH > 0$) : le foyer est à l'intérieur de la conique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier de multiplier par e",
          "stepTheme": "Ne pas oublier de multiplier par e",
          "stepBadge": "Ne pas oublier de multiplier par e",
          "paragraphText": "• Piège : on compare $MF$ à $e \\times MH$, pas à $MH$ seul. Oublier le facteur $e$ fausse le test.\n• Exemple : avec $e = 2$, $MF = 3$ et $MH = 2$, on a $e \\times MH = 4 > 3$ : le point est à l'intérieur, alors que $MF = 3 > MH = 2$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p02_q5",
            "type": "mcq",
            "prompt": "Pour une conique d'excentricité $e = 2$, un point $M$ vérifie $MF = 3$ et $MH = 2$. Où est-il ?",
            "options": ["À l'extérieur, car $MF > MH$", "À l'intérieur, car $MF = 3 < e \\times MH = 4$", "Sur la conique, car $MF = 3$", "On ne peut pas le savoir"],
            "correctAnswerIndex": 1,
            "explanation": "Il faut comparer $MF = 3$ à $e \\times MH = 2 \\times 2 = 4$ : $3 < 4$, donc le point est à l'intérieur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La conique partage le plan en deux régions",
          "stepTheme": "La conique partage le plan en deux régions",
          "stepBadge": "La conique partage le plan en deux régions",
          "paragraphText": "• La conique partage le plan en deux régions : l'intérieur ($MF < e \\times MH$) et l'extérieur ($MF > e \\times MH$).\n• Pour une ellipse, l'intérieur est borné ; pour une parabole ou une hyperbole, les deux régions sont non bornées.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p02_q6",
            "type": "mcq",
            "prompt": "Pour une ellipse, comment est la région intérieure ?",
            "options": ["Non bornée", "Bornée : c'est la région délimitée par l'ellipse", "Vide", "Réduite au foyer"],
            "correctAnswerIndex": 1,
            "explanation": "L'ellipse est une courbe fermée : son intérieur est une région bornée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p02_q1",
          "type": "mcq",
          "prompt": "Quand un point $M$ est-il à l'intérieur d'une conique d'excentricité $e$ ?",
          "options": ["Quand $MF > e \\times MH$", "Quand $MF < e \\times MH$", "Quand $MF = e \\times MH$", "Quand $M$ est sur la directrice"],
          "correctAnswerIndex": 1,
          "explanation": "L'intérieur est défini par $MF < e \\times MH$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p02_q2",
          "type": "mcq",
          "prompt": "Un point $M$ vérifie $MF = 6$ et $MH = 2$ pour une conique d'excentricité $e = 2$. Où est-il ?",
          "options": ["À l'intérieur", "Sur la conique", "À l'extérieur", "Sur la directrice"],
          "correctAnswerIndex": 2,
          "explanation": "$e \\times MH = 2 \\times 2 = 4$ et $MF = 6 > 4$ : le point est à l'extérieur."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p02_q3",
          "type": "mcq",
          "prompt": "Pour une conique d'excentricité $e = \\frac{1}{3}$, un point $M$ vérifie $MF = 1$ et $MH = 3$. Où est-il ?",
          "options": ["À l'intérieur", "À l'extérieur", "Sur la conique", "Sur l'axe focal"],
          "correctAnswerIndex": 2,
          "explanation": "$e \\times MH = \\frac{1}{3} \\times 3 = 1 = MF$ : le point est sur la conique."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p02_q4",
          "type": "mcq",
          "prompt": "Où se trouve le foyer $F$ par rapport à sa conique ?",
          "options": ["À l'extérieur", "Sur la conique", "À l'intérieur", "Sur la directrice"],
          "correctAnswerIndex": 2,
          "explanation": "Pour $M = F$, $MF = 0 < e \\times MH$ (car $FH > 0$) : le foyer est à l'intérieur de la conique."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p02_q5",
          "type": "mcq",
          "prompt": "Pour une conique d'excentricité $e = 2$, un point $M$ vérifie $MF = 3$ et $MH = 2$. Où est-il ?",
          "options": ["À l'extérieur, car $MF > MH$", "À l'intérieur, car $MF = 3 < e \\times MH = 4$", "Sur la conique, car $MF = 3$", "On ne peut pas le savoir"],
          "correctAnswerIndex": 1,
          "explanation": "Il faut comparer $MF = 3$ à $e \\times MH = 2 \\times 2 = 4$ : $3 < 4$, donc le point est à l'intérieur."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p02_q6",
          "type": "mcq",
          "prompt": "Pour une ellipse, comment est la région intérieure ?",
          "options": ["Non bornée", "Bornée : c'est la région délimitée par l'ellipse", "Vide", "Réduite au foyer"],
          "correctAnswerIndex": 1,
          "explanation": "L'ellipse est une courbe fermée : son intérieur est une région bornée."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l07_coniques_p03",
      "order": 3,
      "title": "Équation réduite de la parabole",
      "summary": "Une parabole a pour équation réduite y² = 2px ou x² = 2py, où p est la distance du foyer à la directrice ; le foyer est à p/2 du sommet.",
      "conceptExplanation": "On se place dans un repère orthonormé $(O ; \\vec{i}, \\vec{j})$ où $O$ est le sommet de la parabole et l'axe focal est l'un des axes du repère. On note $p$ la distance du foyer $F$ à la directrice $(D)$ : $p = KF > 0$, où $K$ est le projeté orthogonal de $F$ sur $(D)$.\\nSi l'axe focal est $(O ; \\vec{i})$, l'équation réduite est $y^2 = 2px$, le foyer est $F(\\frac{p}{2} ; 0)$ et la directrice est $(D) : x = -\\frac{p}{2}$. Si l'axe focal est $(O ; \\vec{j})$, l'équation réduite est $x^2 = 2py$, le foyer est $F(0 ; \\frac{p}{2})$ et la directrice est $(D) : y = -\\frac{p}{2}$.\\nDans la pratique, le nombre qui joue le rôle de $2p$ peut être négatif : la parabole s'ouvre alors dans le sens opposé.",
      "keyRule": "y² = 2px : foyer (p/2 ; 0), directrice x = -p/2. x² = 2py : foyer (0 ; p/2), directrice y = -p/2.",
      "formulas": [
        {
          "name": "Parabole d'axe (O ; i)",
          "formula": "y^2 = 2px, \\quad F\\left(\\frac{p}{2} ; 0\\right), \\quad (D) : x = -\\frac{p}{2}",
          "note": "p est la distance du foyer à la directrice."
        },
        {
          "name": "Parabole d'axe (O ; j)",
          "formula": "x^2 = 2py, \\quad F\\left(0 ; \\frac{p}{2}\\right), \\quad (D) : y = -\\frac{p}{2}",
          "note": "p est la distance du foyer à la directrice."
        }
      ],
      "workedExample": {
        "title": "Identifier une parabole : y² + 4x = 0",
        "statement": "Déterminer le foyer et la directrice de la parabole d'équation $y^2 + 4x = 0$.",
        "methodSteps": [
          "On écrit $y^2 = -4x$, de la forme $y^2 = 2px$ avec $2p = -4$, donc $p = -2$.",
          "Le foyer est $F(\\frac{p}{2} ; 0) = F(-1 ; 0)$.",
          "La directrice est $(D) : x = -\\frac{p}{2} = 1$."
        ],
        "conclusion": "La parabole y² + 4x = 0 a pour foyer F(-1 ; 0) et pour directrice x = 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le paramètre p",
          "stepTheme": "Le paramètre p",
          "stepBadge": "Le paramètre p",
          "paragraphText": "• Le paramètre $p$ est la distance du foyer $F$ à la directrice $(D)$ : $p = KF > 0$.\n• Le sommet $O$ est le milieu de $[KF]$ : il est à $\\frac{p}{2}$ du foyer et à $\\frac{p}{2}$ de la directrice.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p03_q1",
            "type": "mcq",
            "prompt": "Que représente le paramètre $p$ d'une parabole ?",
            "options": ["La distance du foyer à la directrice", "La distance du sommet au foyer", "L'excentricité de la parabole", "La longueur de l'axe focal"],
            "correctAnswerIndex": 0,
            "explanation": "$p = KF$ est la distance du foyer à la directrice. Le sommet est à $\\frac{p}{2}$ du foyer."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La forme y² = 2px",
          "stepTheme": "La forme y² = 2px",
          "stepBadge": "La forme y² = 2px",
          "paragraphText": "• Si l'axe focal est l'axe des abscisses, l'équation réduite est $y^2 = 2px$.\n• Le foyer est $F(\\frac{p}{2} ; 0)$ et la directrice est $(D) : x = -\\frac{p}{2}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p03_q2",
            "type": "mcq",
            "prompt": "La parabole $y^2 = 8x$ a pour foyer et pour directrice :",
            "options": ["$F(2 ; 0)$ et $(D) : x = -2$", "$F(4 ; 0)$ et $(D) : x = -4$", "$F(0 ; 2)$ et $(D) : y = -2$", "$F(8 ; 0)$ et $(D) : x = -8$"],
            "correctAnswerIndex": 0,
            "explanation": "$2p = 8$ donc $p = 4$ : le foyer est $F(\\frac{p}{2} ; 0) = F(2 ; 0)$ et la directrice est $x = -\\frac{p}{2} = -2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La forme x² = 2py",
          "stepTheme": "La forme x² = 2py",
          "stepBadge": "La forme x² = 2py",
          "paragraphText": "• Si l'axe focal est l'axe des ordonnées, l'équation réduite est $x^2 = 2py$.\n• Le foyer est $F(0 ; \\frac{p}{2})$ et la directrice est $(D) : y = -\\frac{p}{2}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p03_q3",
            "type": "mcq",
            "prompt": "La parabole $x^2 = -5y$ a pour foyer :",
            "options": ["$F(0 ; \\frac{5}{4})$", "$F(0 ; -\\frac{5}{4})$", "$F(-\\frac{5}{4} ; 0)$", "$F(\\frac{5}{4} ; 0)$"],
            "correctAnswerIndex": 1,
            "explanation": "$2p = -5$ donc $p = -\\frac{5}{2}$ : le foyer est $F(0 ; \\frac{p}{2}) = F(0 ; -\\frac{5}{4})$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Identifier p dans une équation",
          "stepTheme": "Identifier p dans une équation",
          "stepBadge": "Identifier p dans une équation",
          "paragraphText": "• Méthode : on met l'équation sous la forme $y^2 = 2px$ ou $x^2 = 2py$, puis on lit $2p$.\n• Exemple de la leçon : $y^2 + 4x = 0$ donne $y^2 = -4x$, donc $2p = -4$ et $p = -2$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p03_q4",
            "type": "mcq",
            "prompt": "Pour la parabole $y^2 + 4x = 0$, quelle est la directrice ?",
            "options": ["$x = -1$", "$x = 1$", "$y = 1$", "$y = -1$"],
            "correctAnswerIndex": 1,
            "explanation": "$y^2 = -4x$ donne $p = -2$ : la directrice est $x = -\\frac{p}{2} = 1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le foyer de x = 1/2 y²",
          "stepTheme": "Le foyer de x = 1/2 y²",
          "stepBadge": "Le foyer de x = 1/2 y²",
          "paragraphText": "• Attention : le livre indique pour la parabole $x = \\frac{1}{2}y^2$ un foyer $K(\\frac{1}{4} ; 0)$ et une directrice $x = -\\frac{1}{4}$.\n• C'est une erreur du livre : $x = \\frac{1}{2}y^2$ donne $y^2 = 2x$, donc $p = 1$, le foyer est $(\\frac{1}{2} ; 0)$ et la directrice est $x = -\\frac{1}{2}$.",
          "konanTip": "Quand le livre donne un foyer, vérifie-le : pour y² = 2x, le foyer est à p/2 = 1/2 de l'origine, pas à 1/4.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p03_q5",
            "type": "mcq",
            "prompt": "L'affirmation « la parabole $x = \\frac{1}{2}y^2$ a pour foyer $(\\frac{1}{4} ; 0)$ et pour directrice $x = -\\frac{1}{4}$ » est-elle vraie ?",
            "options": ["Vrai", "Faux : le foyer est $(\\frac{1}{2} ; 0)$ et la directrice est $x = -\\frac{1}{2}$", "Faux : le foyer est $(0 ; \\frac{1}{2})$", "Faux : cette courbe n'est pas une parabole"],
            "correctAnswerIndex": 1,
            "explanation": "$x = \\frac{1}{2}y^2$ donne $y^2 = 2x$ donc $p = 1$ : le foyer est $(\\frac{1}{2} ; 0)$ et la directrice est $x = -\\frac{1}{2}$. L'affirmation du livre est fausse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La directrice d'une parabole",
          "stepTheme": "La directrice d'une parabole",
          "stepBadge": "La directrice d'une parabole",
          "paragraphText": "• La directrice est la droite perpendiculaire à l'axe focal, située à $\\frac{p}{2}$ du sommet, du côté opposé au foyer.\n• Pour $y^2 = 2px$ : $(D) : x = -\\frac{p}{2}$. Pour $x^2 = 2py$ : $(D) : y = -\\frac{p}{2}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p03_q6",
            "type": "mcq",
            "prompt": "La parabole $x^2 = -5y$ a pour directrice :",
            "options": ["$y = -\\frac{5}{4}$", "$y = \\frac{5}{4}$", "$x = -\\frac{5}{4}$", "$x = \\frac{5}{4}$"],
            "correctAnswerIndex": 1,
            "explanation": "$2p = -5$ donc $p = -\\frac{5}{2}$ : la directrice est $y = -\\frac{p}{2} = \\frac{5}{4}$. Attention : c'est une droite horizontale, d'équation $y = \\frac{5}{4}$ (le livre écrit par erreur $x = -\\frac{5}{4}$)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p03_q1",
          "type": "mcq",
          "prompt": "Que représente le paramètre $p$ d'une parabole ?",
          "options": ["La distance du foyer à la directrice", "La distance du sommet au foyer", "L'excentricité de la parabole", "La longueur de l'axe focal"],
          "correctAnswerIndex": 0,
          "explanation": "$p = KF$ est la distance du foyer à la directrice. Le sommet est à $\\frac{p}{2}$ du foyer."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p03_q2",
          "type": "mcq",
          "prompt": "La parabole $y^2 = 8x$ a pour foyer et pour directrice :",
          "options": ["$F(2 ; 0)$ et $(D) : x = -2$", "$F(4 ; 0)$ et $(D) : x = -4$", "$F(0 ; 2)$ et $(D) : y = -2$", "$F(8 ; 0)$ et $(D) : x = -8$"],
          "correctAnswerIndex": 0,
          "explanation": "$2p = 8$ donc $p = 4$ : le foyer est $F(\\frac{p}{2} ; 0) = F(2 ; 0)$ et la directrice est $x = -\\frac{p}{2} = -2$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p03_q3",
          "type": "mcq",
          "prompt": "La parabole $x^2 = -5y$ a pour foyer :",
          "options": ["$F(0 ; \\frac{5}{4})$", "$F(0 ; -\\frac{5}{4})$", "$F(-\\frac{5}{4} ; 0)$", "$F(\\frac{5}{4} ; 0)$"],
          "correctAnswerIndex": 1,
          "explanation": "$2p = -5$ donc $p = -\\frac{5}{2}$ : le foyer est $F(0 ; \\frac{p}{2}) = F(0 ; -\\frac{5}{4})$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p03_q4",
          "type": "mcq",
          "prompt": "Pour la parabole $y^2 + 4x = 0$, quelle est la directrice ?",
          "options": ["$x = -1$", "$x = 1$", "$y = 1$", "$y = -1$"],
          "correctAnswerIndex": 1,
          "explanation": "$y^2 = -4x$ donne $p = -2$ : la directrice est $x = -\\frac{p}{2} = 1$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p03_q5",
          "type": "mcq",
          "prompt": "L'affirmation « la parabole $x = \\frac{1}{2}y^2$ a pour foyer $(\\frac{1}{4} ; 0)$ et pour directrice $x = -\\frac{1}{4}$ » est-elle vraie ?",
          "options": ["Vrai", "Faux : le foyer est $(\\frac{1}{2} ; 0)$ et la directrice est $x = -\\frac{1}{2}$", "Faux : le foyer est $(0 ; \\frac{1}{2})$", "Faux : cette courbe n'est pas une parabole"],
          "correctAnswerIndex": 1,
          "explanation": "$x = \\frac{1}{2}y^2$ donne $y^2 = 2x$ donc $p = 1$ : le foyer est $(\\frac{1}{2} ; 0)$ et la directrice est $x = -\\frac{1}{2}$. L'affirmation du livre est fausse."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p03_q6",
          "type": "mcq",
          "prompt": "La parabole $x^2 = -5y$ a pour directrice :",
          "options": ["$y = -\\frac{5}{4}$", "$y = \\frac{5}{4}$", "$x = -\\frac{5}{4}$", "$x = \\frac{5}{4}$"],
          "correctAnswerIndex": 1,
          "explanation": "$2p = -5$ donc $p = -\\frac{5}{2}$ : la directrice est $y = -\\frac{p}{2} = \\frac{5}{4}$. Attention : c'est une droite horizontale, d'équation $y = \\frac{5}{4}$ (le livre écrit par erreur $x = -\\frac{5}{4}$)."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l07_coniques_p04",
      "order": 4,
      "title": "Équation réduite des coniques à centre",
      "summary": "Une ellipse a pour équation x²/a² + y²/b² = 1, une hyperbole x²/a² − y²/b² = 1, avec a = OA, c = OF, e = c/a et b² = a² − c² (ellipse) ou b² = c² − a² (hyperbole).",
      "conceptExplanation": "Une conique à centre (ellipse ou hyperbole) a pour centre $O$, pour axe focal la droite des foyers, et pour sommets les points $A$ et $A'$ sur l'axe focal. On note $a = OA$ le demi-grand axe, $c = OF$ la demi-distance focale et $e = \\frac{c}{a}$ l'excentricité.\\nL'ellipse a pour équation réduite $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, avec $b^2 = a^2 - c^2$ ; ses foyers sont $(\\pm c ; 0)$ et ses directrices $x = \\pm \\frac{a^2}{c}$.\\nL'hyperbole a pour équation réduite $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, avec $b^2 = c^2 - a^2$ ; ses foyers sont $(\\pm c ; 0)$ et ses directrices $x = \\pm \\frac{a^2}{c}$.\\nSi l'axe focal est vertical, on échange les rôles de $x$ et $y$ : l'ellipse $\\frac{x^2}{b^2} + \\frac{y^2}{a^2} = 1$ a ses foyers sur l'axe des ordonnées.",
      "keyRule": "Ellipse : x²/a² + y²/b² = 1, b² = a² − c². Hyperbole : x²/a² − y²/b² = 1, b² = c² − a². e = c/a.",
      "formulas": [
        {
          "name": "Ellipse",
          "formula": "\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1, \\quad b^2 = a^2 - c^2, \\quad e = \\frac{c}{a}",
          "note": "Foyers (±c ; 0), directrices x = ±a²/c."
        },
        {
          "name": "Hyperbole",
          "formula": "\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1, \\quad b^2 = c^2 - a^2, \\quad e = \\frac{c}{a}",
          "note": "Foyers (±c ; 0), directrices x = ±a²/c, asymptotes y = ±(b/a)x."
        }
      ],
      "workedExample": {
        "title": "Une hyperbole d'excentricité 3",
        "statement": "Déterminer l'équation réduite de l'hyperbole de foyer $F(4 ; -1)$, de directrice $(D) : y = 0$ et d'excentricité $e = 3$.",
        "methodSteps": [
          "L'axe focal est la droite $x = 4$ et le centre $S$ est sur cet axe, à la distance $\\frac{a^2}{c}$ de la directrice.",
          "On trouve $a = \\frac{3}{8}$, $c = \\frac{9}{8}$ et $b^2 = c^2 - a^2 = \\frac{9}{8}$.",
          "Le centre est $S(4 ; \\frac{1}{8})$ : la directrice $y = 0$ est bien à la distance $\\frac{a^2}{c} = \\frac{1}{8}$ du centre.",
          "L'équation réduite est $\\frac{(y - \\frac{1}{8})^2}{\\frac{9}{64}} - \\frac{(x - 4)^2}{\\frac{9}{8}} = 1$."
        ],
        "conclusion": "L'hyperbole a pour centre S(4 ; 1/8), pour demi-axe a = 3/8 et pour demi-distance focale c = 9/8."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ellipse et hyperbole : les deux formes",
          "stepTheme": "Ellipse et hyperbole : les deux formes",
          "stepBadge": "Ellipse et hyperbole : les deux formes",
          "paragraphText": "• L'ellipse : $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ (signe + entre les deux termes).\n• L'hyperbole : $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ (signe − entre les deux termes).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est l'équation réduite d'une ellipse de centre $O$ ?",
            "options": ["$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$", "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$", "$y^2 = 2px$", "$x^2 + y^2 = a^2$"],
            "correctAnswerIndex": 1,
            "explanation": "L'ellipse a pour équation $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$. Le signe − donnerait une hyperbole."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les relations entre a, b, c et e",
          "stepTheme": "Les relations entre a, b, c et e",
          "stepBadge": "Les relations entre a, b, c et e",
          "paragraphText": "• $a = OA$ est le demi-grand axe, $c = OF$ la demi-distance focale, $e = \\frac{c}{a}$ l'excentricité.\n• Ellipse : $b^2 = a^2 - c^2$ (donc $a > c$). Hyperbole : $b^2 = c^2 - a^2$ (donc $c > a$).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p04_q2",
            "type": "mcq",
            "prompt": "Pour une ellipse, quelle relation relie $a$, $b$ et $c$ ?",
            "options": ["$b^2 = c^2 - a^2$", "$b^2 = a^2 - c^2$", "$c^2 = a^2 + b^2$", "$a^2 = b^2 - c^2$"],
            "correctAnswerIndex": 1,
            "explanation": "Pour une ellipse, $b^2 = a^2 - c^2$ : le demi-grand axe $a$ est le plus grand des trois nombres."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'ellipse x²/25 + y²/9 = 1",
          "stepTheme": "L'ellipse x²/25 + y²/9 = 1",
          "stepBadge": "L'ellipse x²/25 + y²/9 = 1",
          "paragraphText": "• Exemple de la leçon : l'ellipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ a $a = 5$, $b = 3$ et $c = \\sqrt{25 - 9} = 4$.\n• Son excentricité est $e = \\frac{4}{5}$, ses foyers sont $(\\pm 4 ; 0)$, ses directrices sont $x = \\pm \\frac{25}{4}$ et ses sommets $(\\pm 5 ; 0)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p04_q3",
            "type": "mcq",
            "prompt": "Pour l'ellipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$, quelle est l'excentricité ?",
            "options": ["$e = \\frac{3}{5}$", "$e = \\frac{4}{5}$", "$e = \\frac{5}{4}$", "$e = \\frac{5}{3}$"],
            "correctAnswerIndex": 1,
            "explanation": "$a = 5$, $b = 3$ donc $c = \\sqrt{25 - 9} = 4$ et $e = \\frac{c}{a} = \\frac{4}{5}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'hyperbole x²/4 − y² = 1",
          "stepTheme": "L'hyperbole x²/4 − y² = 1",
          "stepBadge": "L'hyperbole x²/4 − y² = 1",
          "paragraphText": "• Exemple de la leçon : l'hyperbole $\\frac{x^2}{4} - y^2 = 1$ a $a = 2$, $b = 1$, $c = \\sqrt{5}$ et $e = \\frac{\\sqrt{5}}{2}$.\n• Ses foyers sont $(\\pm \\sqrt{5} ; 0)$ et ses directrices sont $x = \\pm \\frac{4}{\\sqrt{5}} = \\pm \\frac{4\\sqrt{5}}{5}$.",
          "konanTip": "Le manuel donne deux fois la même directrice x = -4√5/5 : l'une des deux devrait être x = +4√5/5, erreur signalée telle quelle.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p04_q4",
            "type": "mcq",
            "prompt": "Pour l'hyperbole $\\frac{x^2}{4} - y^2 = 1$, quelles sont les directrices ?",
            "options": ["$x = \\pm \\frac{4\\sqrt{5}}{5}$", "$x = \\pm 4$", "$y = \\pm \\frac{4\\sqrt{5}}{5}$", "$x = \\pm \\frac{\\sqrt{5}}{2}$"],
            "correctAnswerIndex": 0,
            "explanation": "$a = 2$, $c = \\sqrt{5}$ donc les directrices sont $x = \\pm \\frac{a^2}{c} = \\pm \\frac{4}{\\sqrt{5}} = \\pm \\frac{4\\sqrt{5}}{5}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Retrouver l'équation à partir de la directrice",
          "stepTheme": "Retrouver l'équation à partir de la directrice",
          "stepBadge": "Retrouver l'équation à partir de la directrice",
          "paragraphText": "• Méthode : pour une hyperbole de centre $O$ dont une directrice est $x = \\frac{a^2}{c}$, on cherche $a$ et $c$ tels que $\\frac{a^2}{c}$ égale la valeur donnée.\n• Exemple du livre : la directrice $(D) : x = \\frac{9}{5}$ donne l'hyperbole $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ (avec $a = 3$, $c = 5$, $\\frac{a^2}{c} = \\frac{9}{5}$).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p04_q5",
            "type": "mcq",
            "prompt": "Quelle hyperbole de centre $O$ a pour directrice $(D) : x = \\frac{9}{5}$ ?",
            "options": ["$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$", "$\\frac{x^2}{9} - \\frac{y^2}{4} = 1$", "$\\frac{y^2}{16} - \\frac{x^2}{9} = 1$", "$\\frac{x^2}{9} - \\frac{y^2}{16} = 1$"],
            "correctAnswerIndex": 3,
            "explanation": "Pour $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$, on a $a = 3$, $b = 4$, $c = 5$ et la directrice est $x = \\frac{a^2}{c} = \\frac{9}{5}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Foyers et sommets d'une conique à centre",
          "stepTheme": "Foyers et sommets d'une conique à centre",
          "stepBadge": "Foyers et sommets d'une conique à centre",
          "paragraphText": "• Les foyers sont à la distance $c$ du centre, sur l'axe focal : $(\\pm c ; 0)$ si l'axe focal est l'axe des abscisses.\n• Les sommets sont à la distance $a$ du centre : $(\\pm a ; 0)$ sur l'axe focal, $(0 ; \\pm b)$ sur l'autre axe pour l'ellipse.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p04_q6",
            "type": "mcq",
            "prompt": "Un foyer de l'ellipse $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ est :",
            "options": ["$F(3 ; 0)$", "$F(-\\sqrt{5} ; 0)$", "$F(0 ; 3)$", "$F(\\sqrt{13} ; 0)$"],
            "correctAnswerIndex": 1,
            "explanation": "$a = 3$, $b = 2$ donc $c = \\sqrt{9 - 4} = \\sqrt{5}$ : les foyers sont $(\\pm \\sqrt{5} ; 0)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est l'équation réduite d'une ellipse de centre $O$ ?",
          "options": ["$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$", "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$", "$y^2 = 2px$", "$x^2 + y^2 = a^2$"],
          "correctAnswerIndex": 1,
          "explanation": "L'ellipse a pour équation $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$. Le signe − donnerait une hyperbole."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p04_q2",
          "type": "mcq",
          "prompt": "Pour une ellipse, quelle relation relie $a$, $b$ et $c$ ?",
          "options": ["$b^2 = c^2 - a^2$", "$b^2 = a^2 - c^2$", "$c^2 = a^2 + b^2$", "$a^2 = b^2 - c^2$"],
          "correctAnswerIndex": 1,
          "explanation": "Pour une ellipse, $b^2 = a^2 - c^2$ : le demi-grand axe $a$ est le plus grand des trois nombres."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p04_q3",
          "type": "mcq",
          "prompt": "Pour l'ellipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$, quelle est l'excentricité ?",
          "options": ["$e = \\frac{3}{5}$", "$e = \\frac{4}{5}$", "$e = \\frac{5}{4}$", "$e = \\frac{5}{3}$"],
          "correctAnswerIndex": 1,
          "explanation": "$a = 5$, $b = 3$ donc $c = \\sqrt{25 - 9} = 4$ et $e = \\frac{c}{a} = \\frac{4}{5}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p04_q4",
          "type": "mcq",
          "prompt": "Pour l'hyperbole $\\frac{x^2}{4} - y^2 = 1$, quelles sont les directrices ?",
          "options": ["$x = \\pm \\frac{4\\sqrt{5}}{5}$", "$x = \\pm 4$", "$y = \\pm \\frac{4\\sqrt{5}}{5}$", "$x = \\pm \\frac{\\sqrt{5}}{2}$"],
          "correctAnswerIndex": 0,
          "explanation": "$a = 2$, $c = \\sqrt{5}$ donc les directrices sont $x = \\pm \\frac{a^2}{c} = \\pm \\frac{4}{\\sqrt{5}} = \\pm \\frac{4\\sqrt{5}}{5}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p04_q5",
          "type": "mcq",
          "prompt": "Quelle hyperbole de centre $O$ a pour directrice $(D) : x = \\frac{9}{5}$ ?",
          "options": ["$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$", "$\\frac{x^2}{9} - \\frac{y^2}{4} = 1$", "$\\frac{y^2}{16} - \\frac{x^2}{9} = 1$", "$\\frac{x^2}{9} - \\frac{y^2}{16} = 1$"],
          "correctAnswerIndex": 3,
          "explanation": "Pour $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$, on a $a = 3$, $b = 4$, $c = 5$ et la directrice est $x = \\frac{a^2}{c} = \\frac{9}{5}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p04_q6",
          "type": "mcq",
          "prompt": "Un foyer de l'ellipse $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ est :",
          "options": ["$F(3 ; 0)$", "$F(-\\sqrt{5} ; 0)$", "$F(0 ; 3)$", "$F(\\sqrt{13} ; 0)$"],
          "correctAnswerIndex": 1,
          "explanation": "$a = 3$, $b = 2$ donc $c = \\sqrt{9 - 4} = \\sqrt{5}$ : les foyers sont $(\\pm \\sqrt{5} ; 0)$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l07_coniques_p05",
      "order": 5,
      "title": "Éléments caractéristiques des coniques",
      "summary": "Chaque conique a ses éléments caractéristiques : sommet, foyer, directrice, axe focal, asymptotes pour l'hyperbole, selon l'orientation de son axe focal.",
      "conceptExplanation": "Les éléments caractéristiques d'une conique sont son centre (pour l'ellipse et l'hyperbole), ses sommets, ses foyers, ses directrices et son axe focal.\\nPour une parabole $y^2 = 2ax$ : le sommet est $O$, le foyer est $(\\frac{a}{2} ; 0)$ et la directrice est $x = -\\frac{a}{2}$ ; pour $x^2 = 2ay$, le foyer est $(0 ; \\frac{a}{2})$ et la directrice est $y = -\\frac{a}{2}$. Le signe de $a$ donne le sens d'ouverture.\\nPour une ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ avec $a > b$, l'axe focal est horizontal : foyers $(\\pm c ; 0)$, directrices $x = \\pm \\frac{a^2}{c}$. Si $a < b$, l'axe focal est vertical : foyers $(0 ; \\pm c)$, directrices $y = \\pm \\frac{a^2}{c}$ (où $a$ est le demi-grand axe, sur l'axe focal).\\nPour une hyperbole, les asymptotes sont les droites $y = \\pm \\frac{b}{a}x$ (axe focal horizontal) : la courbe s'en rapproche sans jamais les atteindre. Si $a = b$, l'hyperbole est équilatère.",
      "keyRule": "Parabole : foyer (a/2 ; 0), directrice x = −a/2. Ellipse : foyers (±c ; 0), directrices x = ±a²/c. Hyperbole : asymptotes y = ±(b/a)x.",
      "formulas": [
        {
          "name": "Parabole y² = 2ax",
          "formula": "F\\left(\\frac{a}{2} ; 0\\right), \\quad (D) : x = -\\frac{a}{2}",
          "note": "Pour x² = 2ay : F(0 ; a/2), (D) : y = -a/2."
        },
        {
          "name": "Asymptotes de l'hyperbole",
          "formula": "y = \\pm \\frac{b}{a}x",
          "note": "Pour une hyperbole d'axe focal horizontal. Si l'axe focal est vertical, y = ±(a/b)x."
        }
      ],
      "workedExample": {
        "title": "Équation cartésienne d'une ellipse translatée",
        "statement": "Donner l'équation cartésienne de l'ellipse $\\frac{(x + 1)^2}{9} + \\frac{(y - 2)^2}{4} = 1$.",
        "methodSteps": [
          "On multiplie par $36$ : $4(x + 1)^2 + 9(y - 2)^2 = 36$.",
          "On développe : $4x^2 + 8x + 4 + 9y^2 - 36y + 36 = 36$.",
          "On simplifie : $4x^2 + 9y^2 + 8x - 36y + 4 = 0$."
        ],
        "conclusion": "L'équation cartésienne est 4x² + 9y² + 8x − 36y + 4 = 0."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les éléments d'une parabole",
          "stepTheme": "Les éléments d'une parabole",
          "stepBadge": "Les éléments d'une parabole",
          "paragraphText": "• Une parabole $y^2 = 2ax$ a pour sommet $O$, pour foyer $F(\\frac{a}{2} ; 0)$ et pour directrice $(D) : x = -\\frac{a}{2}$.\n• Le signe de $a$ donne le sens d'ouverture : vers les $x$ croissants si $a > 0$, vers les $x$ décroissants si $a < 0$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p05_q1",
            "type": "mcq",
            "prompt": "Pour la parabole $y^2 = 2ax$ avec $a > 0$, quels sont le foyer et la directrice ?",
            "options": ["$F(\\frac{a}{2} ; 0)$ et $(D) : x = -\\frac{a}{2}$", "$F(0 ; \\frac{a}{2})$ et $(D) : y = -\\frac{a}{2}$", "$F(-\\frac{a}{2} ; 0)$ et $(D) : x = \\frac{a}{2}$", "$F(a ; 0)$ et $(D) : x = -a$"],
            "correctAnswerIndex": 0,
            "explanation": "Pour $y^2 = 2ax$, le foyer est $F(\\frac{a}{2} ; 0)$ et la directrice est $x = -\\frac{a}{2}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Ellipse : axe focal horizontal ou vertical",
          "stepTheme": "Ellipse : axe focal horizontal ou vertical",
          "stepBadge": "Ellipse : axe focal horizontal ou vertical",
          "paragraphText": "• Si $a > b$, l'axe focal est horizontal : les foyers sont $(\\pm c ; 0)$ et les directrices sont $x = \\pm \\frac{a^2}{c}$.\n• Si $a < b$, l'axe focal est vertical : les foyers sont $(0 ; \\pm c)$ et les directrices sont $y = \\pm \\frac{a^2}{c}$, où $a$ est le demi-grand axe (sur l'axe focal).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p05_q2",
            "type": "mcq",
            "prompt": "L'ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ vérifie $a < b$. Où est son axe focal ?",
            "options": ["Sur l'axe des abscisses", "Sur l'axe des ordonnées", "Sur la droite $y = x$", "Elle n'a pas d'axe focal"],
            "correctAnswerIndex": 1,
            "explanation": "Si $a < b$, le demi-grand axe est sur l'axe des ordonnées : l'axe focal est vertical."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les asymptotes de l'hyperbole",
          "stepTheme": "Les asymptotes de l'hyperbole",
          "stepBadge": "Les asymptotes de l'hyperbole",
          "paragraphText": "• Une hyperbole d'axe focal horizontal a deux asymptotes : $y = \\frac{b}{a}x$ et $y = -\\frac{b}{a}x$.\n• La courbe se rapproche de ses asymptotes sans jamais les atteindre.\n• Exemple du livre : l'hyperbole $-\\frac{x^2}{3^2} + \\frac{y^2}{2^2} = 1$ (axe focal vertical) a pour asymptotes $y = \\pm \\frac{2}{3}x$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p05_q3",
            "type": "mcq",
            "prompt": "Quelles sont les asymptotes de l'hyperbole $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ ?",
            "options": ["$y = \\pm \\frac{3}{4}x$", "$y = \\pm \\frac{4}{3}x$", "$y = \\pm \\frac{9}{16}x$", "$y = \\pm \\frac{16}{9}x$"],
            "correctAnswerIndex": 1,
            "explanation": "Ici $a = 3$ et $b = 4$ : les asymptotes sont $y = \\pm \\frac{b}{a}x = \\pm \\frac{4}{3}x$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "L'excentricité de l'ellipse verticale",
          "stepTheme": "L'excentricité de l'ellipse verticale",
          "stepBadge": "L'excentricité de l'ellipse verticale",
          "paragraphText": "• Attention : pour l'ellipse $\\frac{x^2}{\\frac{9}{4}} + \\frac{y^2}{9} = 1$, le demi-grand axe est $a = 3$ (sur l'axe des ordonnées), $b = \\frac{3}{2}$ et $c = \\sqrt{9 - \\frac{9}{4}} = \\frac{3\\sqrt{3}}{2}$.\n• Son excentricité est donc $e = \\frac{c}{a} = \\frac{\\sqrt{3}}{2}$ et non $\\frac{\\sqrt{3}}{4}$ comme l'écrit le livre.",
          "konanTip": "Pour une ellipse verticale, a est le demi-grand axe sur l'axe des ordonnées : ne prends pas le premier dénominateur venu pour a.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p05_q4",
            "type": "mcq",
            "prompt": "L'affirmation « l'ellipse $\\frac{x^2}{\\frac{9}{4}} + \\frac{y^2}{9} = 1$ a pour excentricité $e = \\frac{\\sqrt{3}}{4}$ » est-elle vraie ?",
            "options": ["Vrai", "Faux : $e = \\frac{\\sqrt{3}}{2}$", "Faux : $e = \\frac{1}{2}$", "Faux : $e = \\frac{\\sqrt{3}}{3}$"],
            "correctAnswerIndex": 1,
            "explanation": "Le demi-grand axe est $a = 3$, $c = \\sqrt{9 - \\frac{9}{4}} = \\frac{3\\sqrt{3}}{2}$ donc $e = \\frac{c}{a} = \\frac{\\sqrt{3}}{2}$. L'affirmation du livre est fausse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Équation cartésienne d'une ellipse",
          "stepTheme": "Équation cartésienne d'une ellipse",
          "stepBadge": "Équation cartésienne d'une ellipse",
          "paragraphText": "• Exemple du livre : l'ellipse $\\frac{(x + 1)^2}{9} + \\frac{(y - 2)^2}{4} = 1$ a pour équation cartésienne $4x^2 + 9y^2 + 8x - 36y + 4 = 0$.\n• Méthode : on multiplie par le dénominateur commun, on développe et on simplifie.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p05_q5",
            "type": "mcq",
            "prompt": "Quelle est l'équation cartésienne de l'ellipse $\\frac{(x + 1)^2}{9} + \\frac{(y - 2)^2}{4} = 1$ ?",
            "options": ["$4x^2 + 9y^2 + 8x - 36y + 4 = 0$", "$4x^2 + 9y^2 - 8x + 36y + 4 = 0$", "$9x^2 + 4y^2 + 8x - 36y + 4 = 0$", "$4x^2 + 9y^2 + 8x - 36y - 4 = 0$"],
            "correctAnswerIndex": 0,
            "explanation": "En multipliant par 36 : $4(x + 1)^2 + 9(y - 2)^2 = 36$, soit $4x^2 + 9y^2 + 8x - 36y + 4 = 0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Directrices d'une ellipse verticale",
          "stepTheme": "Directrices d'une ellipse verticale",
          "stepBadge": "Directrices d'une ellipse verticale",
          "paragraphText": "• Pour une ellipse d'axe focal vertical, les directrices sont horizontales : $y = \\pm \\frac{a^2}{c}$, où $a$ est le demi-grand axe.\n• Exemple : pour l'ellipse $\\frac{x^2}{\\frac{9}{4}} + \\frac{y^2}{9} = 1$, on a $a = 3$ et $c = \\frac{3\\sqrt{3}}{2}$, donc les directrices sont $y = \\pm \\frac{9}{\\frac{3\\sqrt{3}}{2}} = \\pm 2\\sqrt{3}$ (et non $y = \\pm \\sqrt{3}$ comme l'écrit le livre).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p05_q6",
            "type": "mcq",
            "prompt": "Quelles sont les directrices de l'ellipse $\\frac{x^2}{\\frac{9}{4}} + \\frac{y^2}{9} = 1$ ?",
            "options": ["$y = \\pm \\sqrt{3}$", "$y = \\pm 2\\sqrt{3}$", "$x = \\pm 2\\sqrt{3}$", "$y = \\pm \\frac{\\sqrt{3}}{2}$"],
            "correctAnswerIndex": 1,
            "explanation": "$a = 3$, $c = \\frac{3\\sqrt{3}}{2}$ donc les directrices sont $y = \\pm \\frac{a^2}{c} = \\pm \\frac{9}{\\frac{3\\sqrt{3}}{2}} = \\pm 2\\sqrt{3}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p05_q1",
          "type": "mcq",
          "prompt": "Pour la parabole $y^2 = 2ax$ avec $a > 0$, quels sont le foyer et la directrice ?",
          "options": ["$F(\\frac{a}{2} ; 0)$ et $(D) : x = -\\frac{a}{2}$", "$F(0 ; \\frac{a}{2})$ et $(D) : y = -\\frac{a}{2}$", "$F(-\\frac{a}{2} ; 0)$ et $(D) : x = \\frac{a}{2}$", "$F(a ; 0)$ et $(D) : x = -a$"],
          "correctAnswerIndex": 0,
          "explanation": "Pour $y^2 = 2ax$, le foyer est $F(\\frac{a}{2} ; 0)$ et la directrice est $x = -\\frac{a}{2}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p05_q2",
          "type": "mcq",
          "prompt": "L'ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ vérifie $a < b$. Où est son axe focal ?",
          "options": ["Sur l'axe des abscisses", "Sur l'axe des ordonnées", "Sur la droite $y = x$", "Elle n'a pas d'axe focal"],
          "correctAnswerIndex": 1,
          "explanation": "Si $a < b$, le demi-grand axe est sur l'axe des ordonnées : l'axe focal est vertical."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p05_q3",
          "type": "mcq",
          "prompt": "Quelles sont les asymptotes de l'hyperbole $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ ?",
          "options": ["$y = \\pm \\frac{3}{4}x$", "$y = \\pm \\frac{4}{3}x$", "$y = \\pm \\frac{9}{16}x$", "$y = \\pm \\frac{16}{9}x$"],
          "correctAnswerIndex": 1,
          "explanation": "Ici $a = 3$ et $b = 4$ : les asymptotes sont $y = \\pm \\frac{b}{a}x = \\pm \\frac{4}{3}x$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p05_q4",
          "type": "mcq",
          "prompt": "L'affirmation « l'ellipse $\\frac{x^2}{\\frac{9}{4}} + \\frac{y^2}{9} = 1$ a pour excentricité $e = \\frac{\\sqrt{3}}{4}$ » est-elle vraie ?",
          "options": ["Vrai", "Faux : $e = \\frac{\\sqrt{3}}{2}$", "Faux : $e = \\frac{1}{2}$", "Faux : $e = \\frac{\\sqrt{3}}{3}$"],
          "correctAnswerIndex": 1,
          "explanation": "Le demi-grand axe est $a = 3$, $c = \\sqrt{9 - \\frac{9}{4}} = \\frac{3\\sqrt{3}}{2}$ donc $e = \\frac{c}{a} = \\frac{\\sqrt{3}}{2}$. L'affirmation du livre est fausse."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p05_q5",
          "type": "mcq",
          "prompt": "Quelle est l'équation cartésienne de l'ellipse $\\frac{(x + 1)^2}{9} + \\frac{(y - 2)^2}{4} = 1$ ?",
          "options": ["$4x^2 + 9y^2 + 8x - 36y + 4 = 0$", "$4x^2 + 9y^2 - 8x + 36y + 4 = 0$", "$9x^2 + 4y^2 + 8x - 36y + 4 = 0$", "$4x^2 + 9y^2 + 8x - 36y - 4 = 0$"],
          "correctAnswerIndex": 0,
          "explanation": "En multipliant par 36 : $4(x + 1)^2 + 9(y - 2)^2 = 36$, soit $4x^2 + 9y^2 + 8x - 36y + 4 = 0$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p05_q6",
          "type": "mcq",
          "prompt": "Quelles sont les directrices de l'ellipse $\\frac{x^2}{\\frac{9}{4}} + \\frac{y^2}{9} = 1$ ?",
          "options": ["$y = \\pm \\sqrt{3}$", "$y = \\pm 2\\sqrt{3}$", "$x = \\pm 2\\sqrt{3}$", "$y = \\pm \\frac{\\sqrt{3}}{2}$"],
          "correctAnswerIndex": 1,
          "explanation": "$a = 3$, $c = \\frac{3\\sqrt{3}}{2}$ donc les directrices sont $y = \\pm \\frac{a^2}{c} = \\pm \\frac{9}{\\frac{3\\sqrt{3}}{2}} = \\pm 2\\sqrt{3}$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l07_coniques_p06",
      "order": 6,
      "title": "Situation complexe : la piscine elliptique",
      "summary": "On modélise le contour d'une piscine par une ellipse : on met son équation sous forme canonique et on en déduit le centre, les axes, les foyers et les directrices.",
      "conceptExplanation": "Pour reconnaître une conique à partir d'une équation cartésienne, on met l'équation sous forme canonique en complétant les carrés.\\nPour $3x^2 + 4y^2 + 6x - 9 = 0$ : on regroupe les termes en $x$ et en $y$, on complète le carré en $x$, puis on divise pour obtenir une équation de la forme $\\frac{(x - x_0)^2}{a^2} + \\frac{(y - y_0)^2}{b^2} = 1$ : c'est une ellipse de centre $\\Omega(x_0 ; y_0)$.\\nOn lit alors directement : le demi-grand axe $a$, le demi-petit axe $b$, la demi-distance focale $c = \\sqrt{a^2 - b^2}$, les foyers, les sommets et les directrices.",
      "keyRule": "Compléter les carrés pour passer de l'équation cartésienne à la forme canonique, puis lire a, b, c, le centre et les foyers.",
      "formulas": [
        {
          "name": "Forme canonique d'une ellipse",
          "formula": "\\frac{(x - x_0)^2}{a^2} + \\frac{(y - y_0)^2}{b^2} = 1",
          "note": "Centre Ω(x0 ; y0), demi-axes a et b."
        }
      ],
      "workedExample": {
        "title": "Le contour de la piscine",
        "statement": "Le contour d'une piscine est modélisé par l'équation $3x^2 + 4y^2 + 6x - 9 = 0$ (échelle $\\frac{1}{100}$). Déterminer la nature de la courbe et ses éléments caractéristiques.",
        "methodSteps": [
          "On complète le carré en $x$ : $3(x + 1)^2 - 3 + 4y^2 - 9 = 0$, soit $3(x + 1)^2 + 4y^2 = 12$.",
          "On divise par $12$ : $\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$. C'est une ellipse de centre $\\Omega(-1 ; 0)$.",
          "On lit $a = 2$, $b = \\sqrt{3}$ et $c = \\sqrt{4 - 3} = 1$.",
          "Les foyers sont $F(0 ; 0)$ et $F'(-2 ; 0)$, les sommets $A(1 ; 0)$, $A'(-3 ; 0)$, $B(-1 ; \\sqrt{3})$ et $B'(-1 ; -\\sqrt{3})$, les directrices $x = 3$ et $x = -5$."
        ],
        "conclusion": "Le contour de la piscine est une ellipse de centre Ω(−1 ; 0), de demi-grand axe 2 et de demi-petit axe √3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La forme canonique",
          "stepTheme": "La forme canonique",
          "stepBadge": "La forme canonique",
          "paragraphText": "• Pour reconnaître une conique, on met son équation sous forme canonique en complétant les carrés.\n• Pour une ellipse : $\\frac{(x - x_0)^2}{a^2} + \\frac{(y - y_0)^2}{b^2} = 1$, de centre $\\Omega(x_0 ; y_0)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p06_q1",
            "type": "mcq",
            "prompt": "Que permet la mise sous forme canonique d'une équation de conique ?",
            "options": ["De calculer l'excentricité sans connaître les foyers", "De reconnaître la nature de la conique et de lire ses éléments caractéristiques", "De tracer la conique sans repère", "De trouver la directrice sans le foyer"],
            "correctAnswerIndex": 1,
            "explanation": "La forme canonique donne la nature de la conique (ellipse, hyperbole ou parabole) et permet de lire directement le centre, les demi-axes et les foyers."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Compléter le carré",
          "stepTheme": "Compléter le carré",
          "stepBadge": "Compléter le carré",
          "paragraphText": "• Méthode : on regroupe les termes en $x$ et en $y$, puis on complète le carré en $x$ (et en $y$ si besoin).\n• Exemple : $3x^2 + 4y^2 + 6x - 9 = 0$ devient $3(x + 1)^2 + 4y^2 = 12$, puis $\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p06_q2",
            "type": "mcq",
            "prompt": "Quelle est la forme canonique de $3x^2 + 4y^2 + 6x - 9 = 0$ ?",
            "options": ["$\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$", "$\\frac{(x - 1)^2}{4} + \\frac{y^2}{3} = 1$", "$\\frac{(x + 1)^2}{3} + \\frac{y^2}{4} = 1$", "$\\frac{x^2}{4} + \\frac{y^2}{3} = 1$"],
            "correctAnswerIndex": 0,
            "explanation": "$3(x + 1)^2 + 4y^2 = 12$ : en divisant par 12, on obtient $\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les éléments de la piscine",
          "stepTheme": "Les éléments de la piscine",
          "stepBadge": "Les éléments de la piscine",
          "paragraphText": "• L'ellipse $\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$ a pour centre $\\Omega(-1 ; 0)$, $a = 2$, $b = \\sqrt{3}$ et $c = \\sqrt{4 - 3} = 1$.\n• Ses foyers sont $F(0 ; 0)$ et $F'(-2 ; 0)$, ses sommets $A(1 ; 0)$, $A'(-3 ; 0)$, $B(-1 ; \\sqrt{3})$ et $B'(-1 ; -\\sqrt{3})$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p06_q3",
            "type": "mcq",
            "prompt": "Pour l'ellipse $\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$, quels sont les foyers ?",
            "options": ["$F(1 ; 0)$ et $F'(-3 ; 0)$", "$F(0 ; 0)$ et $F'(-2 ; 0)$", "$F(-1 ; 1)$ et $F'(-1 ; -1)$", "$F(2 ; 0)$ et $F'(-2 ; 0)$"],
            "correctAnswerIndex": 1,
            "explanation": "Le centre est $\\Omega(-1 ; 0)$ et $c = 1$ : les foyers sont $(-1 \\pm 1 ; 0)$, soit $F(0 ; 0)$ et $F'(-2 ; 0)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre le centre et l'origine",
          "stepTheme": "Ne pas confondre le centre et l'origine",
          "stepBadge": "Ne pas confondre le centre et l'origine",
          "paragraphText": "• Piège : le centre de l'ellipse $\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$ est $\\Omega(-1 ; 0)$, pas l'origine $O$.\n• C'est le décalage en $x$ qui donne le centre : $(x + 1)^2$ signifie $x_0 = -1$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p06_q4",
            "type": "mcq",
            "prompt": "Quel est le centre de l'ellipse $\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$ ?",
            "options": ["$O(0 ; 0)$", "$\\Omega(1 ; 0)$", "$\\Omega(-1 ; 0)$", "$\\Omega(0 ; -1)$"],
            "correctAnswerIndex": 2,
            "explanation": "La forme canonique est $\\frac{(x - x_0)^2}{a^2} + \\frac{(y - y_0)^2}{b^2} = 1$ : ici $x_0 = -1$ et $y_0 = 0$, donc le centre est $\\Omega(-1 ; 0)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les directrices de la piscine",
          "stepTheme": "Les directrices de la piscine",
          "stepBadge": "Les directrices de la piscine",
          "paragraphText": "• Les directrices de l'ellipse sont $x = x_0 \\pm \\frac{a^2}{c}$ : ici $x = -1 \\pm \\frac{4}{1}$, soit $x = 3$ et $x = -5$.\n• L'excentricité est $e = \\frac{c}{a} = \\frac{1}{2}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p06_q5",
            "type": "mcq",
            "prompt": "Quelles sont les directrices de l'ellipse $\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$ ?",
            "options": ["$x = 3$ et $x = -5$", "$x = 1$ et $x = -3$", "$y = 3$ et $y = -5$", "$x = 2$ et $x = -2$"],
            "correctAnswerIndex": 0,
            "explanation": "Le centre est $\\Omega(-1 ; 0)$, $a = 2$, $c = 1$ : les directrices sont $x = -1 \\pm \\frac{4}{1}$, soit $x = 3$ et $x = -5$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "L'échelle de la piscine",
          "stepTheme": "L'échelle de la piscine",
          "stepBadge": "L'échelle de la piscine",
          "paragraphText": "• La situation complexe donne l'équation à l'échelle $\\frac{1}{100}$ : une unité du repère représente $100$ unités réelles.\n• Le demi-grand axe $a = 2$ correspond donc à une longueur réelle de $200$ unités (par exemple $200$ cm, soit $2$ m).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l07_coniques_p06_q6",
            "type": "mcq",
            "prompt": "L'ellipse de la piscine a un demi-grand axe $a = 2$ à l'échelle $\\frac{1}{100}$. Quelle est la longueur réelle correspondante ?",
            "options": ["$2$ unités", "$20$ unités", "$200$ unités", "$0,02$ unité"],
            "correctAnswerIndex": 2,
            "explanation": "À l'échelle $\\frac{1}{100}$, une unité du plan vaut $100$ unités réelles : $2 \\times 100 = 200$ unités."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p06_q1",
          "type": "mcq",
          "prompt": "Que permet la mise sous forme canonique d'une équation de conique ?",
          "options": ["De calculer l'excentricité sans connaître les foyers", "De reconnaître la nature de la conique et de lire ses éléments caractéristiques", "De tracer la conique sans repère", "De trouver la directrice sans le foyer"],
          "correctAnswerIndex": 1,
          "explanation": "La forme canonique donne la nature de la conique (ellipse, hyperbole ou parabole) et permet de lire directement le centre, les demi-axes et les foyers."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p06_q2",
          "type": "mcq",
          "prompt": "Quelle est la forme canonique de $3x^2 + 4y^2 + 6x - 9 = 0$ ?",
          "options": ["$\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$", "$\\frac{(x - 1)^2}{4} + \\frac{y^2}{3} = 1$", "$\\frac{(x + 1)^2}{3} + \\frac{y^2}{4} = 1$", "$\\frac{x^2}{4} + \\frac{y^2}{3} = 1$"],
          "correctAnswerIndex": 0,
          "explanation": "$3(x + 1)^2 + 4y^2 = 12$ : en divisant par 12, on obtient $\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p06_q3",
          "type": "mcq",
          "prompt": "Pour l'ellipse $\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$, quels sont les foyers ?",
          "options": ["$F(1 ; 0)$ et $F'(-3 ; 0)$", "$F(0 ; 0)$ et $F'(-2 ; 0)$", "$F(-1 ; 1)$ et $F'(-1 ; -1)$", "$F(2 ; 0)$ et $F'(-2 ; 0)$"],
          "correctAnswerIndex": 1,
          "explanation": "Le centre est $\\Omega(-1 ; 0)$ et $c = 1$ : les foyers sont $(-1 \\pm 1 ; 0)$, soit $F(0 ; 0)$ et $F'(-2 ; 0)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p06_q4",
          "type": "mcq",
          "prompt": "Quel est le centre de l'ellipse $\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$ ?",
          "options": ["$O(0 ; 0)$", "$\\Omega(1 ; 0)$", "$\\Omega(-1 ; 0)$", "$\\Omega(0 ; -1)$"],
          "correctAnswerIndex": 2,
          "explanation": "La forme canonique est $\\frac{(x - x_0)^2}{a^2} + \\frac{(y - y_0)^2}{b^2} = 1$ : ici $x_0 = -1$ et $y_0 = 0$, donc le centre est $\\Omega(-1 ; 0)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p06_q5",
          "type": "mcq",
          "prompt": "Quelles sont les directrices de l'ellipse $\\frac{(x + 1)^2}{4} + \\frac{y^2}{3} = 1$ ?",
          "options": ["$x = 3$ et $x = -5$", "$x = 1$ et $x = -3$", "$y = 3$ et $y = -5$", "$x = 2$ et $x = -2$"],
          "correctAnswerIndex": 0,
          "explanation": "Le centre est $\\Omega(-1 ; 0)$, $a = 2$, $c = 1$ : les directrices sont $x = -1 \\pm \\frac{4}{1}$, soit $x = 3$ et $x = -5$."
        },
        {
          "id": "terminale_c_maths_geometrie_l07_coniques_p06_q6",
          "type": "mcq",
          "prompt": "L'ellipse de la piscine a un demi-grand axe $a = 2$ à l'échelle $\\frac{1}{100}$. Quelle est la longueur réelle correspondante ?",
          "options": ["$2$ unités", "$20$ unités", "$200$ unités", "$0,02$ unité"],
          "correctAnswerIndex": 2,
          "explanation": "À l'échelle $\\frac{1}{100}$, une unité du plan vaut $100$ unités réelles : $2 \\times 100 = 200$ unités."
        }
      ]
    }
  ]
};
