import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « TC-Maths-13 Nbres complexes et géométrie du plan D200424.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_C_L13_COMPLEXES_GEOMETRIE: CurriculumChapter = {
  "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 13,
  "title": "Leçon 13 : Nombres complexes et géométrie du plan",
  "summary": "Lignes de niveau (cercles, médiatrices, cercle d'Apollonius, argument), nature d'un triangle par un quotient, droites parallèles et perpendiculaires, points cocycliques, écritures complexes des transformations et reconnaissance de z' = az + b.",
  "officialVolumeHours": 12,
  "contentVersion": 2,
  "source": "TC-Maths-13 Nbres complexes et géométrie du plan D200424.pdf",
  "points": [
    {
      "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01",
      "order": 1,
      "title": "Lignes de niveau : cercles et médiatrices",
      "summary": "Traduire |z − a| = r et |z − a| = |z − b| en figures.",
      "conceptExplanation": "Le plan complexe est muni d'un repère orthonormé direct. A et B sont deux points distincts d'affixes $z_A$ et $z_B$ ; M est un point d'affixe $z$.\n\nRappel clé : $|z - z_A| = AM$ (le module d'une différence est une distance).\n\n- $|z - z_A| = r$ (avec $r > 0$) équivaut à $AM = r$ : M décrit le cercle de centre A et de rayon $r$.\n- $|z - z_A| = |z - z_B|$ équivaut à $AM = BM$ : M décrit la médiatrice du segment [AB].\n- $|z - z_A| = \\lambda\\,|z - z_B|$ avec $\\lambda > 0$ et $\\lambda \\neq 1$ équivaut à $\\dfrac{AM}{BM} = \\lambda$ : M décrit le cercle de diamètre $[G_1G_2]$, où $G_1 = \\text{bar}\\{(A ; 1), (B ; \\lambda)\\}$ et $G_2 = \\text{bar}\\{(A ; 1), (B ; -\\lambda)\\}$.\n\nMéthode : il faut toujours écrire l'égalité sous la forme $|z - (\\text{affixe d'un point})|$. Par exemple $|z - 1 + i| = |z - (1 - i)|$ et $|z + 1 + 3i| = |z - (-1 - 3i)|$.",
      "keyRule": "$|z - z_A| = r$ : cercle de centre A, rayon r. $|z - z_A| = |z - z_B|$ : médiatrice de [AB]. $\\dfrac{AM}{BM} = \\lambda \\neq 1$ : cercle de diamètre $[G_1G_2]$.",
      "formulas": [
        {
          "name": "Distance",
          "formula": "AM = |z - z_A|"
        },
        {
          "name": "Barycentres du cercle",
          "formula": "z_{G_1} = \\dfrac{z_A + \\lambda z_B}{1 + \\lambda} \\quad ; \\quad z_{G_2} = \\dfrac{z_A - \\lambda z_B}{1 - \\lambda}"
        }
      ],
      "workedExample": {
        "title": "Une médiatrice",
        "statement": "Détermine l'ensemble des points M d'affixe $z$ tels que $|z - 1 + i| = |z + 1 + 3i|$.",
        "methodSteps": [
          "On écrit $|z - (1 - i)| = |z - (-1 - 3i)|$.",
          "Avec P d'affixe $1 - i$ et Q d'affixe $-1 - 3i$, cela s'écrit $PM = QM$."
        ],
        "conclusion": "L'ensemble est la médiatrice du segment [PQ]."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Module et distance",
          "stepTheme": "Module et distance",
          "stepBadge": "Module et distance",
          "paragraphText": "Si A a pour affixe $z_A$ et M pour affixe $z$, alors $AM = |z - z_A|$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q1",
            "type": "mcq",
            "prompt": "A a pour affixe $2i$ et M pour affixe $z$. Que représente le nombre $|z - 2i|$ ?",
            "options": [
              "La distance AM",
              "L'angle $(\\vec{u}, \\overrightarrow{AM})$",
              "L'affixe du milieu de [AM]",
              "L'aire du triangle OAM"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le module de $z - z_A$ est la longueur AM."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un cercle",
          "stepTheme": "Un cercle",
          "stepBadge": "Un cercle",
          "paragraphText": "$|z - 2i| = 3$ équivaut à $AM = 3$ avec A d'affixe $2i$ : c'est le cercle de centre A et de rayon 3.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q2",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des points M d'affixe $z$ tels que $|z - 2i| = 3$ ?",
            "options": [
              "Le cercle de centre le point d'affixe $2i$ et de rayon 3",
              "Le cercle de centre O et de rayon 3",
              "La médiatrice de [OA] avec A d'affixe $2i$",
              "La droite d'équation $y = 3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|z - 2i| = 3$ signifie que M est à la distance 3 du point d'affixe $2i$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Faire apparaître z − a",
          "stepTheme": "Faire apparaître z − a",
          "stepBadge": "Faire apparaître z − a",
          "paragraphText": "$|z + 1 + 3i| = |z - (-1 - 3i)|$ : c'est la distance de M au point d'affixe $-1 - 3i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q3",
            "type": "mcq",
            "prompt": "On écrit $|z + 1 + 3i|$ sous la forme $|z - z_Q|$. Quelle est l'affixe $z_Q$ ?",
            "options": [
              "$1 + 3i$",
              "$-1 - 3i$",
              "$-1 + 3i$",
              "$1 - 3i$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$z + 1 + 3i = z - (-1 - 3i)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une médiatrice",
          "stepTheme": "Une médiatrice",
          "stepBadge": "Une médiatrice",
          "paragraphText": "$|z - 1 + i| = |z + 1 + 3i|$ équivaut à $PM = QM$ avec P$(1 - i)$ et Q$(-1 - 3i)$ : médiatrice de [PQ].",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des points M d'affixe $z$ tels que $|z - 1 + i| = |z + 1 + 3i|$ ?",
            "options": [
              "Le cercle de diamètre [PQ] avec P$(1 - i)$, Q$(-1 - 3i)$",
              "La médiatrice du segment [PQ] avec P$(1 - i)$, Q$(-1 - 3i)$",
              "La droite (PQ)",
              "Le point P seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "M est à égale distance de P et de Q."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Rapport de distances",
          "stepTheme": "Rapport de distances",
          "stepBadge": "Rapport de distances",
          "paragraphText": "$\\dfrac{AM}{BM} = \\lambda$ avec $\\lambda \\neq 1$ : cercle de diamètre $[G_1G_2]$ ; avec $\\lambda = 1$ : médiatrice de [AB].",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q5",
            "type": "mcq",
            "prompt": "A et B sont deux points distincts. Quel est l'ensemble des points M tels que $\\dfrac{AM}{BM} = 2$ ?",
            "options": [
              "La médiatrice de [AB]",
              "Un cercle de diamètre $[G_1G_2]$, où $G_1$ et $G_2$ sont des barycentres de A et B",
              "La droite (AB)",
              "Le cercle de diamètre [AB]"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Quand $\\lambda \\neq 1$, on obtient un cercle (cercle d'Apollonius)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Factoriser le coefficient",
          "stepTheme": "Factoriser le coefficient",
          "stepBadge": "Factoriser le coefficient",
          "paragraphText": "$|2iz - 3 + 2i| = |2i|\\,\\left|z + 1 + \\tfrac{3}{2}i\\right| = 2\\left|z - \\left(-1 - \\tfrac{3}{2}i\\right)\\right|$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q6",
            "type": "mcq",
            "prompt": "On a $2iz - 3 + 2i = 2i\\left(z + 1 + \\tfrac{3}{2}i\\right)$. Sachant que $|2i| = 2$, à quoi est égal $|2iz - 3 + 2i|$ ?",
            "options": [
              "$2\\left|z + 1 + \\tfrac{3}{2}i\\right|$",
              "$\\left|z + 1 + \\tfrac{3}{2}i\\right|$",
              "$2i\\left|z + 1\\right|$",
              "$4\\left|z - 2\\right|$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le module d'un produit est le produit des modules."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le bon centre",
          "stepTheme": "Le bon centre",
          "stepBadge": "Le bon centre",
          "paragraphText": "Dans $|z + 2 - i| = 4$, le centre n'a pas pour affixe $2 - i$ mais $-2 + i$, car $z + 2 - i = z - (-2 + i)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q7",
            "type": "mcq",
            "prompt": "L'ensemble des points M d'affixe $z$ tels que $|z + 2 - i| = 4$ est un cercle de rayon 4. Quelle est l'affixe de son centre ?",
            "options": [
              "$2 - i$",
              "$-2 + i$",
              "$2 + i$",
              "$4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$z + 2 - i = z - (-2 + i)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q1",
          "type": "mcq",
          "prompt": "A a pour affixe $2i$ et M pour affixe $z$. Que représente le nombre $|z - 2i|$ ?",
          "options": [
            "La distance AM",
            "L'angle $(\\vec{u}, \\overrightarrow{AM})$",
            "L'affixe du milieu de [AM]",
            "L'aire du triangle OAM"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le module de $z - z_A$ est la longueur AM."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des points M d'affixe $z$ tels que $|z - 2i| = 3$ ?",
          "options": [
            "Le cercle de centre le point d'affixe $2i$ et de rayon 3",
            "Le cercle de centre O et de rayon 3",
            "La médiatrice de [OA] avec A d'affixe $2i$",
            "La droite d'équation $y = 3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|z - 2i| = 3$ signifie que M est à la distance 3 du point d'affixe $2i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q3",
          "type": "mcq",
          "prompt": "On écrit $|z + 1 + 3i|$ sous la forme $|z - z_Q|$. Quelle est l'affixe $z_Q$ ?",
          "options": [
            "$1 + 3i$",
            "$-1 - 3i$",
            "$-1 + 3i$",
            "$1 - 3i$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$z + 1 + 3i = z - (-1 - 3i)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des points M d'affixe $z$ tels que $|z - 1 + i| = |z + 1 + 3i|$ ?",
          "options": [
            "Le cercle de diamètre [PQ] avec P$(1 - i)$, Q$(-1 - 3i)$",
            "La médiatrice du segment [PQ] avec P$(1 - i)$, Q$(-1 - 3i)$",
            "La droite (PQ)",
            "Le point P seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "M est à égale distance de P et de Q."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q5",
          "type": "mcq",
          "prompt": "A et B sont deux points distincts. Quel est l'ensemble des points M tels que $\\dfrac{AM}{BM} = 2$ ?",
          "options": [
            "La médiatrice de [AB]",
            "Un cercle de diamètre $[G_1G_2]$, où $G_1$ et $G_2$ sont des barycentres de A et B",
            "La droite (AB)",
            "Le cercle de diamètre [AB]"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Quand $\\lambda \\neq 1$, on obtient un cercle (cercle d'Apollonius)."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q6",
          "type": "mcq",
          "prompt": "On a $2iz - 3 + 2i = 2i\\left(z + 1 + \\tfrac{3}{2}i\\right)$. Sachant que $|2i| = 2$, à quoi est égal $|2iz - 3 + 2i|$ ?",
          "options": [
            "$2\\left|z + 1 + \\tfrac{3}{2}i\\right|$",
            "$\\left|z + 1 + \\tfrac{3}{2}i\\right|$",
            "$2i\\left|z + 1\\right|$",
            "$4\\left|z - 2\\right|$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le module d'un produit est le produit des modules."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p01_q7",
          "type": "mcq",
          "prompt": "L'ensemble des points M d'affixe $z$ tels que $|z + 2 - i| = 4$ est un cercle de rayon 4. Quelle est l'affixe de son centre ?",
          "options": [
            "$2 - i$",
            "$-2 + i$",
            "$2 + i$",
            "$4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$z + 2 - i = z - (-2 + i)$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02",
      "order": 2,
      "title": "Cercle d'Apollonius et lignes de niveau angulaires",
      "summary": "Un cercle de diamètre [HK], puis droites, demi-droites et cercles avec l'argument.",
      "conceptExplanation": "Exemple : $|2iz - 3 + 2i| = |z - 2|$.\n- On factorise : $|2iz - 3 + 2i| = 2\\left|z - \\left(-1 - \\tfrac{3}{2}i\\right)\\right|$.\n- Avec A d'affixe 2 et B d'affixe $-1 - \\tfrac{3}{2}i$ : $2BM = AM$, donc $\\dfrac{MA}{MB} = 2$.\n- H = bar{(A ; 1), (B ; 2)} : $z_H = \\dfrac{2 + 2\\left(-1 - \\tfrac{3}{2}i\\right)}{3} = \\dfrac{-3i}{3} = -i$.\n  (Correction : le document écrit $z_H = -1$ ; le bon résultat est $z_H = -i$, ce que confirme la figure, où H est sur l'axe des ordonnées.)\n- K = bar{(A ; 1), (B ; -2)} : $z_K = \\dfrac{2 - 2\\left(-1 - \\tfrac{3}{2}i\\right)}{1 - 2} = \\dfrac{4 + 3i}{-1} = -4 - 3i$.\n- L'ensemble est le cercle de diamètre [HK] : centre d'affixe $\\dfrac{z_H + z_K}{2} = -2 - 2i$, rayon $\\dfrac{HK}{2} = \\dfrac{|4 + 2i|}{2} = \\sqrt{5}$.\n\nLignes de niveau avec l'argument :\n- $\\arg(z - z_A) \\equiv \\alpha\\ [2\\pi]$ : demi-droite d'origine A (privée de A), faisant l'angle $\\alpha$ avec $\\vec{u}$ ;\n- $\\arg(z - z_A) \\equiv \\alpha\\ [\\pi]$ : droite passant par A (privée de A) ;\n- $\\arg\\left(\\dfrac{z_B - z}{z_A - z}\\right) \\equiv 0\\ [\\pi]$ : droite (AB) privée de A et B ;\n- $\\arg\\left(\\dfrac{z_B - z}{z_A - z}\\right) \\equiv \\dfrac{\\pi}{2}\\ [\\pi]$ : cercle de diamètre [AB] privé de A et B.\n\nExemple : $\\arg(z - 1 - i) \\equiv \\dfrac{\\pi}{6}\\ [2\\pi]$ : demi-droite d'origine A$(1 + i)$, privée de A, faisant l'angle $\\dfrac{\\pi}{6}$ avec $\\vec{u}$.",
      "keyRule": "$\\arg(z - z_A) \\equiv \\alpha\\ [2\\pi]$ : demi-droite ; $[\\pi]$ : droite. $\\arg\\dfrac{z_B - z}{z_A - z} \\equiv \\dfrac{\\pi}{2}\\ [\\pi]$ : cercle de diamètre [AB] privé de A et B.",
      "formulas": [
        {
          "name": "Barycentre de (A ; 1), (B ; 2)",
          "formula": "z_H = \\dfrac{z_A + 2z_B}{3}"
        }
      ],
      "workedExample": {
        "title": "Calculer H",
        "statement": "A a pour affixe 2 et B pour affixe $-1 - \\tfrac{3}{2}i$. Calcule l'affixe de H = bar{(A ; 1), (B ; 2)}.",
        "methodSteps": [
          "$z_H = \\dfrac{z_A + 2z_B}{3} = \\dfrac{2 + 2\\left(-1 - \\tfrac{3}{2}i\\right)}{3}$.",
          "$2 + (-2 - 3i) = -3i$, donc $z_H = \\dfrac{-3i}{3}$."
        ],
        "conclusion": "$z_H = -i$ (et non $-1$ comme l'écrit le document)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Le rapport MA/MB",
          "stepTheme": "Le rapport MA/MB",
          "stepBadge": "Le rapport MA/MB",
          "paragraphText": "$|2iz - 3 + 2i| = |z - 2|$ devient $2BM = AM$ avec A$(2)$ et B$\\left(-1 - \\tfrac{3}{2}i\\right)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q1",
            "type": "mcq",
            "prompt": "L'égalité $|2iz - 3 + 2i| = |z - 2|$ s'écrit $2\\left|z - \\left(-1 - \\tfrac{3}{2}i\\right)\\right| = |z - 2|$. Avec A d'affixe 2 et B d'affixe $-1 - \\tfrac{3}{2}i$, que vaut le rapport $\\dfrac{MA}{MB}$ ?",
            "options": [
              "$\\dfrac{1}{2}$",
              "$1$",
              "$2$",
              "$4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$2MB = MA$ donc $\\dfrac{MA}{MB} = 2$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "L'affixe de H",
          "stepTheme": "L'affixe de H",
          "stepBadge": "L'affixe de H",
          "paragraphText": "$z_H = \\dfrac{2 + 2\\left(-1 - \\tfrac{3}{2}i\\right)}{3} = -i$. Le document écrit $-1$ : c'est une erreur de calcul.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q2",
            "type": "mcq",
            "prompt": "A a pour affixe 2 et B pour affixe $-1 - \\tfrac{3}{2}i$. Quelle est l'affixe de H = bar{(A ; 1), (B ; 2)}, c'est-à-dire $z_H = \\dfrac{z_A + 2z_B}{3}$ ?",
            "options": [
              "$-1$",
              "$-i$",
              "$-4 - 3i$",
              "$1 - i$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2 + 2(-1 - 1{,}5i) = -3i$, puis $-3i \\div 3 = -i$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "L'affixe de K",
          "stepTheme": "L'affixe de K",
          "stepBadge": "L'affixe de K",
          "paragraphText": "$z_K = \\dfrac{z_A - 2z_B}{1 - 2} = \\dfrac{2 + 2 + 3i}{-1} = -4 - 3i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q3",
            "type": "mcq",
            "prompt": "A a pour affixe 2 et B pour affixe $-1 - \\tfrac{3}{2}i$. Quelle est l'affixe de K = bar{(A ; 1), (B ; -2)}, c'est-à-dire $z_K = \\dfrac{z_A - 2z_B}{1 - 2}$ ?",
            "options": [
              "$4 + 3i$",
              "$-4 - 3i$",
              "$-i$",
              "$-2 - 2i$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2 - 2(-1 - 1{,}5i) = 4 + 3i$, divisé par $-1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Centre et rayon",
          "stepTheme": "Centre et rayon",
          "stepBadge": "Centre et rayon",
          "paragraphText": "Cercle de diamètre [HK] avec $z_H = -i$, $z_K = -4 - 3i$ : centre $-2 - 2i$, rayon $\\dfrac{|4 + 2i|}{2} = \\sqrt{5}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q4",
            "type": "mcq",
            "prompt": "L'ensemble cherché est le cercle de diamètre [HK], avec $z_H = -i$ et $z_K = -4 - 3i$. Quelle est l'affixe de son centre ?",
            "options": [
              "$-2 - 2i$",
              "$-4 - 4i$",
              "$2 + i$",
              "$-i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le centre est le milieu : $\\dfrac{-i + (-4 - 3i)}{2} = -2 - 2i$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Demi-droite",
          "stepTheme": "Demi-droite",
          "stepBadge": "Demi-droite",
          "paragraphText": "$\\arg(z - 1 - i) \\equiv \\dfrac{\\pi}{6}\\ [2\\pi]$ : demi-droite d'origine A$(1 + i)$, privée de A, d'angle $\\dfrac{\\pi}{6}$ avec $\\vec{u}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q5",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des points M d'affixe $z$ tels que $\\arg(z - 1 - i) \\equiv \\dfrac{\\pi}{6}\\ [2\\pi]$ ?",
            "options": [
              "Le cercle de centre $1 + i$ et de rayon $\\dfrac{\\pi}{6}$",
              "La demi-droite d'origine A$(1 + i)$, privée de A, faisant l'angle $\\dfrac{\\pi}{6}$ avec $\\vec{u}$",
              "La droite entière passant par A$(1 + i)$",
              "La médiatrice de [OA]"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Modulo $2\\pi$, la direction ET le sens sont fixés : une demi-droite."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Modulo π : une droite",
          "stepTheme": "Modulo π : une droite",
          "stepBadge": "Modulo π : une droite",
          "paragraphText": "$\\arg(z - z_A) \\equiv \\alpha\\ [\\pi]$ autorise les deux sens : on obtient la droite entière passant par A, privée de A.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des points M d'affixe $z$ tels que $\\arg(z - 3 + i) \\equiv \\dfrac{\\pi}{4}\\ [\\pi]$ ?",
            "options": [
              "Une demi-droite d'origine le point $3 - i$",
              "La droite passant par le point $3 - i$ et dirigée selon l'angle $\\dfrac{\\pi}{4}$, privée de ce point",
              "Le cercle de centre $3 - i$",
              "Le point $3 - i$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Modulo $\\pi$, les angles $\\dfrac{\\pi}{4}$ et $\\dfrac{5\\pi}{4}$ sont permis : les deux demi-droites forment une droite."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Angle droit : un cercle",
          "stepTheme": "Angle droit : un cercle",
          "stepBadge": "Angle droit : un cercle",
          "paragraphText": "$\\arg\\left(\\dfrac{z_B - z}{z_A - z}\\right) \\equiv \\dfrac{\\pi}{2}\\ [\\pi]$ signifie que l'angle $\\widehat{AMB}$ est droit : M est sur le cercle de diamètre [AB], privé de A et B.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q7",
            "type": "mcq",
            "prompt": "A a pour affixe $1$ et B pour affixe $-1$. Quel est l'ensemble des points M d'affixe $z$ tels que $\\arg\\left(\\dfrac{z + 1}{z - 1}\\right) \\equiv \\dfrac{\\pi}{2}\\ [\\pi]$ ?",
            "options": [
              "La droite (AB) privée de A et B",
              "Le cercle de diamètre [AB], privé de A et B",
              "La médiatrice de [AB]",
              "Le demi-plan supérieur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les vecteurs $\\overrightarrow{MA}$ et $\\overrightarrow{MB}$ sont orthogonaux : M voit [AB] sous un angle droit."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q1",
          "type": "mcq",
          "prompt": "L'égalité $|2iz - 3 + 2i| = |z - 2|$ s'écrit $2\\left|z - \\left(-1 - \\tfrac{3}{2}i\\right)\\right| = |z - 2|$. Avec A d'affixe 2 et B d'affixe $-1 - \\tfrac{3}{2}i$, que vaut le rapport $\\dfrac{MA}{MB}$ ?",
          "options": [
            "$\\dfrac{1}{2}$",
            "$1$",
            "$2$",
            "$4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$2MB = MA$ donc $\\dfrac{MA}{MB} = 2$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q2",
          "type": "mcq",
          "prompt": "A a pour affixe 2 et B pour affixe $-1 - \\tfrac{3}{2}i$. Quelle est l'affixe de H = bar{(A ; 1), (B ; 2)}, c'est-à-dire $z_H = \\dfrac{z_A + 2z_B}{3}$ ?",
          "options": [
            "$-1$",
            "$-i$",
            "$-4 - 3i$",
            "$1 - i$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2 + 2(-1 - 1{,}5i) = -3i$, puis $-3i \\div 3 = -i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q3",
          "type": "mcq",
          "prompt": "A a pour affixe 2 et B pour affixe $-1 - \\tfrac{3}{2}i$. Quelle est l'affixe de K = bar{(A ; 1), (B ; -2)}, c'est-à-dire $z_K = \\dfrac{z_A - 2z_B}{1 - 2}$ ?",
          "options": [
            "$4 + 3i$",
            "$-4 - 3i$",
            "$-i$",
            "$-2 - 2i$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2 - 2(-1 - 1{,}5i) = 4 + 3i$, divisé par $-1$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q4",
          "type": "mcq",
          "prompt": "L'ensemble cherché est le cercle de diamètre [HK], avec $z_H = -i$ et $z_K = -4 - 3i$. Quelle est l'affixe de son centre ?",
          "options": [
            "$-2 - 2i$",
            "$-4 - 4i$",
            "$2 + i$",
            "$-i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centre est le milieu : $\\dfrac{-i + (-4 - 3i)}{2} = -2 - 2i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des points M d'affixe $z$ tels que $\\arg(z - 1 - i) \\equiv \\dfrac{\\pi}{6}\\ [2\\pi]$ ?",
          "options": [
            "Le cercle de centre $1 + i$ et de rayon $\\dfrac{\\pi}{6}$",
            "La demi-droite d'origine A$(1 + i)$, privée de A, faisant l'angle $\\dfrac{\\pi}{6}$ avec $\\vec{u}$",
            "La droite entière passant par A$(1 + i)$",
            "La médiatrice de [OA]"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Modulo $2\\pi$, la direction ET le sens sont fixés : une demi-droite."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des points M d'affixe $z$ tels que $\\arg(z - 3 + i) \\equiv \\dfrac{\\pi}{4}\\ [\\pi]$ ?",
          "options": [
            "Une demi-droite d'origine le point $3 - i$",
            "La droite passant par le point $3 - i$ et dirigée selon l'angle $\\dfrac{\\pi}{4}$, privée de ce point",
            "Le cercle de centre $3 - i$",
            "Le point $3 - i$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Modulo $\\pi$, les angles $\\dfrac{\\pi}{4}$ et $\\dfrac{5\\pi}{4}$ sont permis : les deux demi-droites forment une droite."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p02_q7",
          "type": "mcq",
          "prompt": "A a pour affixe $1$ et B pour affixe $-1$. Quel est l'ensemble des points M d'affixe $z$ tels que $\\arg\\left(\\dfrac{z + 1}{z - 1}\\right) \\equiv \\dfrac{\\pi}{2}\\ [\\pi]$ ?",
          "options": [
            "La droite (AB) privée de A et B",
            "Le cercle de diamètre [AB], privé de A et B",
            "La médiatrice de [AB]",
            "Le demi-plan supérieur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les vecteurs $\\overrightarrow{MA}$ et $\\overrightarrow{MB}$ sont orthogonaux : M voit [AB] sous un angle droit."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03",
      "order": 3,
      "title": "Reconnaître un triangle avec un quotient",
      "summary": "Le quotient $\\dfrac{z_C - z_A}{z_B - z_A}$ donne la nature du triangle ABC.",
      "conceptExplanation": "On calcule $Z = \\dfrac{z_C - z_A}{z_B - z_A}$ :\n- son module est $\\dfrac{AC}{AB}$ ;\n- son argument est une mesure de l'angle $\\left(\\overrightarrow{AB}, \\overrightarrow{AC}\\right)$.\n\nTableau :\n- triangle ABC isocèle en A, d'angle $\\alpha$ en A : $Z = e^{i\\alpha}$ ou $Z = e^{-i\\alpha}$ ;\n- triangle ABC équilatéral : $Z = e^{i\\frac{\\pi}{3}}$ ou $Z = e^{-i\\frac{\\pi}{3}}$ ;\n- triangle ABC rectangle et isocèle en A : $Z = i$ ou $Z = -i$ ;\n- triangle ABC rectangle en A : $Z = bi$ avec $b$ réel non nul (Z imaginaire pur) ;\n- points A, B, C alignés : Z réel non nul.\n\nExemples :\n- A$(3)$, B$\\left(\\tfrac{5 + 7i}{2}\\right)$, C$\\left(\\tfrac{-1 - i}{2}\\right)$ : $Z = \\dfrac{-7 - i}{-1 + 7i} = i$ : ABC rectangle isocèle en A.\n- U$(i)$, V$(-2 + 3i)$, T$(-4 + i)$ : $\\dfrac{u - v}{t - v} = \\dfrac{2 - 2i}{-2 - 2i} = i$ : VUT rectangle isocèle en V.\n- A$(2i)$, B$(\\sqrt{3} + i)$, C$(\\sqrt{3} - i)$ : $\\dfrac{z_A - z_B}{z_C - z_B} = \\dfrac{-\\sqrt{3} + i}{-2i} = -\\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}i = e^{-i\\frac{2\\pi}{3}}$ : ABC isocèle en B, d'angle $\\dfrac{2\\pi}{3}$ en B.",
      "keyRule": "$\\left|\\dfrac{z_C - z_A}{z_B - z_A}\\right| = \\dfrac{AC}{AB}$ et $\\arg\\dfrac{z_C - z_A}{z_B - z_A} = \\left(\\overrightarrow{AB}, \\overrightarrow{AC}\\right)$. $\\pm i$ : rectangle isocèle ; $e^{\\pm i\\pi/3}$ : équilatéral ; réel : alignés.",
      "formulas": [
        {
          "name": "Quotient",
          "formula": "Z = \\dfrac{z_C - z_A}{z_B - z_A}"
        }
      ],
      "workedExample": {
        "title": "Un triangle rectangle isocèle",
        "statement": "A, B, C ont pour affixes $3$, $\\dfrac{5 + 7i}{2}$ et $\\dfrac{-1 - i}{2}$. Quelle est la nature de ABC ?",
        "methodSteps": [
          "$z_C - z_A = \\dfrac{-7 - i}{2}$ et $z_B - z_A = \\dfrac{-1 + 7i}{2}$.",
          "$\\dfrac{-7 - i}{-1 + 7i} = \\dfrac{(-7 - i)(-1 - 7i)}{1 + 49} = \\dfrac{50i}{50} = i$."
        ],
        "conclusion": "Z = i : ABC est rectangle isocèle en A."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Module et argument",
          "stepTheme": "Module et argument",
          "stepBadge": "Module et argument",
          "paragraphText": "Le module de $\\dfrac{z_C - z_A}{z_B - z_A}$ vaut $\\dfrac{AC}{AB}$ ; son argument mesure l'angle $\\left(\\overrightarrow{AB}, \\overrightarrow{AC}\\right)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q1",
            "type": "mcq",
            "prompt": "Pour trois points A, B, C distincts, que vaut le module $\\left|\\dfrac{z_C - z_A}{z_B - z_A}\\right|$ ?",
            "options": [
              "$\\dfrac{AC}{AB}$",
              "$\\dfrac{AB}{AC}$",
              "$AB \\times AC$",
              "La mesure de l'angle $\\widehat{BAC}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|z_C - z_A| = AC$ et $|z_B - z_A| = AB$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Rectangle isocèle",
          "stepTheme": "Rectangle isocèle",
          "stepBadge": "Rectangle isocèle",
          "paragraphText": "Si $\\dfrac{z_C - z_A}{z_B - z_A} = i$ ou $-i$, alors AC = AB et l'angle en A est droit : ABC est rectangle isocèle en A.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q2",
            "type": "mcq",
            "prompt": "Pour un triangle ABC, on trouve $\\dfrac{z_C - z_A}{z_B - z_A} = -i$. Quelle est la nature du triangle ABC ?",
            "options": [
              "Équilatéral",
              "Rectangle isocèle en A",
              "Isocèle en B",
              "A, B, C sont alignés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$|-i| = 1$ (AC = AB) et $\\arg(-i) = -\\dfrac{\\pi}{2}$ (angle droit)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Équilatéral",
          "stepTheme": "Équilatéral",
          "stepBadge": "Équilatéral",
          "paragraphText": "Si $\\dfrac{z_C - z_A}{z_B - z_A} = e^{\\pm i\\frac{\\pi}{3}}$, alors AC = AB et l'angle en A mesure $\\dfrac{\\pi}{3}$ : ABC est équilatéral.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q3",
            "type": "mcq",
            "prompt": "Pour un triangle ABC, on trouve $\\dfrac{z_C - z_A}{z_B - z_A} = e^{i\\frac{\\pi}{3}}$. Quelle est la nature du triangle ABC ?",
            "options": [
              "Rectangle en A",
              "Équilatéral",
              "Rectangle isocèle en A",
              "Aplati"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Isocèle en A avec un angle de $60°$ : les trois angles valent $60°$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Alignés ou rectangle",
          "stepTheme": "Alignés ou rectangle",
          "stepBadge": "Alignés ou rectangle",
          "paragraphText": "Quotient réel non nul : A, B, C alignés. Quotient imaginaire pur non nul : triangle rectangle en A.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q4",
            "type": "mcq",
            "prompt": "A, B, C ont pour affixes $-2 - 2i$, $1 - i$ et $10 + 2i$. On calcule $\\dfrac{z_C - z_A}{z_B - z_A} = \\dfrac{12 + 4i}{3 + i}$. Que vaut ce quotient et que peut-on conclure ?",
            "options": [
              "$4$ : A, B, C sont alignés",
              "$4i$ : ABC est rectangle en A",
              "$i$ : ABC est rectangle isocèle",
              "$1$ : ABC est isocèle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$12 + 4i = 4(3 + i)$ : le quotient vaut 4, un réel non nul."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un calcul complet",
          "stepTheme": "Un calcul complet",
          "stepBadge": "Un calcul complet",
          "paragraphText": "A$(3)$, B$\\left(\\tfrac{5 + 7i}{2}\\right)$, C$\\left(\\tfrac{-1 - i}{2}\\right)$ : $\\dfrac{z_C - z_A}{z_B - z_A} = \\dfrac{-7 - i}{-1 + 7i} = i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q5",
            "type": "mcq",
            "prompt": "A, B, C ont pour affixes $3$, $\\dfrac{5 + 7i}{2}$ et $\\dfrac{-1 - i}{2}$. On a $\\dfrac{z_C - z_A}{z_B - z_A} = \\dfrac{-7 - i}{-1 + 7i}$. Que vaut ce quotient ?",
            "options": [
              "$i$",
              "$-1$",
              "$7$",
              "$-i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$i(-1 + 7i) = -i - 7 = -7 - i$ : le quotient vaut bien $i$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le sommet compte",
          "stepTheme": "Le sommet compte",
          "stepBadge": "Le sommet compte",
          "paragraphText": "U$(i)$, V$(-2 + 3i)$, T$(-4 + i)$ : $\\dfrac{u - v}{t - v} = \\dfrac{2 - 2i}{-2 - 2i} = i$ : le triangle est rectangle isocèle en V.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q6",
            "type": "mcq",
            "prompt": "U, V, T ont pour affixes $u = i$, $v = -2 + 3i$ et $t = -4 + i$. On trouve $\\dfrac{u - v}{t - v} = i$. En quel sommet le triangle UVT est-il rectangle isocèle ?",
            "options": [
              "En U",
              "En V",
              "En T",
              "Il n'est pas rectangle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le point soustrait au numérateur et au dénominateur (ici V) est le sommet de l'angle."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Un triangle isocèle",
          "stepTheme": "Un triangle isocèle",
          "stepBadge": "Un triangle isocèle",
          "paragraphText": "A$(2i)$, B$(\\sqrt{3} + i)$, C$(\\sqrt{3} - i)$ : $\\dfrac{z_A - z_B}{z_C - z_B} = e^{-i\\frac{2\\pi}{3}}$ : ABC est isocèle en B, d'angle $\\dfrac{2\\pi}{3}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q7",
            "type": "mcq",
            "prompt": "A, B, C ont pour affixes $2i$, $\\sqrt{3} + i$ et $\\sqrt{3} - i$. On trouve $\\dfrac{z_A - z_B}{z_C - z_B} = e^{-i\\frac{2\\pi}{3}}$. Quelle est la nature du triangle ABC ?",
            "options": [
              "Équilatéral",
              "Isocèle en B, avec un angle de $\\dfrac{2\\pi}{3}$ en B",
              "Rectangle en B",
              "Les points sont alignés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Module 1 : BA = BC. Argument $-\\dfrac{2\\pi}{3}$ : angle de $120°$ en B, pas $60°$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q1",
          "type": "mcq",
          "prompt": "Pour trois points A, B, C distincts, que vaut le module $\\left|\\dfrac{z_C - z_A}{z_B - z_A}\\right|$ ?",
          "options": [
            "$\\dfrac{AC}{AB}$",
            "$\\dfrac{AB}{AC}$",
            "$AB \\times AC$",
            "La mesure de l'angle $\\widehat{BAC}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|z_C - z_A| = AC$ et $|z_B - z_A| = AB$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q2",
          "type": "mcq",
          "prompt": "Pour un triangle ABC, on trouve $\\dfrac{z_C - z_A}{z_B - z_A} = -i$. Quelle est la nature du triangle ABC ?",
          "options": [
            "Équilatéral",
            "Rectangle isocèle en A",
            "Isocèle en B",
            "A, B, C sont alignés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$|-i| = 1$ (AC = AB) et $\\arg(-i) = -\\dfrac{\\pi}{2}$ (angle droit)."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q3",
          "type": "mcq",
          "prompt": "Pour un triangle ABC, on trouve $\\dfrac{z_C - z_A}{z_B - z_A} = e^{i\\frac{\\pi}{3}}$. Quelle est la nature du triangle ABC ?",
          "options": [
            "Rectangle en A",
            "Équilatéral",
            "Rectangle isocèle en A",
            "Aplati"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Isocèle en A avec un angle de $60°$ : les trois angles valent $60°$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q4",
          "type": "mcq",
          "prompt": "A, B, C ont pour affixes $-2 - 2i$, $1 - i$ et $10 + 2i$. On calcule $\\dfrac{z_C - z_A}{z_B - z_A} = \\dfrac{12 + 4i}{3 + i}$. Que vaut ce quotient et que peut-on conclure ?",
          "options": [
            "$4$ : A, B, C sont alignés",
            "$4i$ : ABC est rectangle en A",
            "$i$ : ABC est rectangle isocèle",
            "$1$ : ABC est isocèle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$12 + 4i = 4(3 + i)$ : le quotient vaut 4, un réel non nul."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q5",
          "type": "mcq",
          "prompt": "A, B, C ont pour affixes $3$, $\\dfrac{5 + 7i}{2}$ et $\\dfrac{-1 - i}{2}$. On a $\\dfrac{z_C - z_A}{z_B - z_A} = \\dfrac{-7 - i}{-1 + 7i}$. Que vaut ce quotient ?",
          "options": [
            "$i$",
            "$-1$",
            "$7$",
            "$-i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$i(-1 + 7i) = -i - 7 = -7 - i$ : le quotient vaut bien $i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q6",
          "type": "mcq",
          "prompt": "U, V, T ont pour affixes $u = i$, $v = -2 + 3i$ et $t = -4 + i$. On trouve $\\dfrac{u - v}{t - v} = i$. En quel sommet le triangle UVT est-il rectangle isocèle ?",
          "options": [
            "En U",
            "En V",
            "En T",
            "Il n'est pas rectangle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le point soustrait au numérateur et au dénominateur (ici V) est le sommet de l'angle."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p03_q7",
          "type": "mcq",
          "prompt": "A, B, C ont pour affixes $2i$, $\\sqrt{3} + i$ et $\\sqrt{3} - i$. On trouve $\\dfrac{z_A - z_B}{z_C - z_B} = e^{-i\\frac{2\\pi}{3}}$. Quelle est la nature du triangle ABC ?",
          "options": [
            "Équilatéral",
            "Isocèle en B, avec un angle de $\\dfrac{2\\pi}{3}$ en B",
            "Rectangle en B",
            "Les points sont alignés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Module 1 : BA = BC. Argument $-\\dfrac{2\\pi}{3}$ : angle de $120°$ en B, pas $60°$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04",
      "order": 4,
      "title": "Parallèles, perpendiculaires, cocycliques",
      "summary": "Des quotients réels ou imaginaires purs pour les droites et les cercles.",
      "conceptExplanation": "Pour des points A, B, C, D :\n- droites (AB) et (CD) parallèles : $\\dfrac{z_D - z_C}{z_B - z_A}$ est un réel non nul ;\n- droites (AB) et (CD) perpendiculaires : $\\dfrac{z_D - z_C}{z_B - z_A}$ est un imaginaire pur non nul ;\n- A, B, C, D cocycliques (sur un même cercle), quand ils ne sont pas alignés : $\\dfrac{z_B - z_C}{z_A - z_C} : \\dfrac{z_B - z_D}{z_A - z_D}$ est un réel non nul.\n\nExercice : A$(2 + i)$, B$(2 - i)$, C$(5 - 2i)$, D$(5 + 2i)$, K$(4)$, I$(1)$, J$(i)$.\n1) $\\dfrac{z_D - z_C}{z_B - z_A} = \\dfrac{4i}{-2i} = -2$ : (AB) et (CD) sont parallèles.\n2) $\\dfrac{z_B - z_I}{z_J - z_I} = \\dfrac{1 - i}{-1 + i} = -1$ : J, I, B sont alignés.\n3) $\\dfrac{z_D - z_C}{z_K - z_O} = \\dfrac{4i}{4} = i$ : (OK) et (DC) sont perpendiculaires. (Correction : le document écrit « $4 - 1$ » au dénominateur et trouve $\\dfrac{4}{3}i$ ; en réalité $z_K - z_O = 4$, donc le quotient vaut $i$. La conclusion reste la même.)\n4) $\\dfrac{z_B - z_D}{z_B - z_J} = \\dfrac{-3 - 3i}{2 - 2i} = -\\dfrac{3}{2}i$ : le triangle JBD est rectangle en B.\n5) $\\dfrac{z_D - z_C}{z_D - z_A} : \\dfrac{z_B - z_C}{z_B - z_A} = \\dfrac{4i}{3 + i} : \\dfrac{-3 + i}{-2i} = \\dfrac{8}{-10} = -\\dfrac{4}{5}$ : réel, donc A, B, C, D sont cocycliques. (Correction : le document trouve $-\\dfrac{2}{5}$ ; le bon résultat est $-\\dfrac{4}{5}$, la conclusion reste vraie.)\n\nAutre méthode pour des points cocycliques : montrer qu'ils sont tous à la même distance d'un point Ω. Exemple : avec Ω$(-1 + 2i)$, les points $2 - 2i$, $-1 + 7i$, $4 + 2i$, $-4 - 2i$ sont tous à la distance 5 de Ω.",
      "keyRule": "$\\dfrac{z_D - z_C}{z_B - z_A}$ réel : (AB) ∥ (CD) ; imaginaire pur : (AB) ⊥ (CD). Cocycliques : le quotient des deux rapports est réel (ou même distance à un centre).",
      "formulas": [
        {
          "name": "Parallèles / perpendiculaires",
          "formula": "\\dfrac{z_D - z_C}{z_B - z_A} \\in \\mathbb{R}^* \\text{ ou } \\in i\\mathbb{R}^*"
        }
      ],
      "workedExample": {
        "title": "Même distance au centre",
        "statement": "Montre que les points d'affixes $2 - 2i$ et $-1 + 7i$ sont sur le cercle de centre Ω$(-1 + 2i)$ et de rayon 5.",
        "methodSteps": [
          "$|2 - 2i - (-1 + 2i)| = |3 - 4i| = \\sqrt{9 + 16} = 5$.",
          "$|-1 + 7i - (-1 + 2i)| = |5i| = 5$."
        ],
        "conclusion": "Les deux points sont à la distance 5 de Ω : ils sont sur le cercle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Droites parallèles",
          "stepTheme": "Droites parallèles",
          "stepBadge": "Droites parallèles",
          "paragraphText": "(AB) et (CD) sont parallèles si et seulement si $\\dfrac{z_D - z_C}{z_B - z_A}$ est un réel non nul.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q1",
            "type": "mcq",
            "prompt": "A$(2 + i)$, B$(2 - i)$, C$(5 - 2i)$, D$(5 + 2i)$. On calcule $\\dfrac{z_D - z_C}{z_B - z_A} = \\dfrac{4i}{-2i}$. Que vaut ce quotient et que peut-on conclure ?",
            "options": [
              "$-2$ : (AB) et (CD) sont parallèles",
              "$2i$ : (AB) et (CD) sont perpendiculaires",
              "$-2$ : (AB) et (CD) sont perpendiculaires",
              "$i$ : A, B, C, D sont alignés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un quotient réel non nul traduit des directions parallèles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Droites perpendiculaires",
          "stepTheme": "Droites perpendiculaires",
          "stepBadge": "Droites perpendiculaires",
          "paragraphText": "(AB) et (CD) sont perpendiculaires si et seulement si $\\dfrac{z_D - z_C}{z_B - z_A}$ est un imaginaire pur non nul.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q2",
            "type": "mcq",
            "prompt": "On calcule le quotient $\\dfrac{z_D - z_C}{z_B - z_A}$ pour quatre points et on trouve $-\\dfrac{3}{2}i$. Que peut-on dire des droites (AB) et (CD) ?",
            "options": [
              "Elles sont parallèles",
              "Elles sont perpendiculaires",
              "Elles sont confondues",
              "On ne peut rien dire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Imaginaire pur : l'angle entre les directions vaut $\\pm\\dfrac{\\pi}{2}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Le bon dénominateur",
          "stepTheme": "Le bon dénominateur",
          "stepBadge": "Le bon dénominateur",
          "paragraphText": "Avec O l'origine et K$(4)$ : $z_K - z_O = 4 - 0 = 4$ (le document écrit $4 - 1$ par erreur). Le quotient $\\dfrac{4i}{4} = i$ est imaginaire pur.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q3",
            "type": "mcq",
            "prompt": "O est l'origine, K a pour affixe 4, C$(5 - 2i)$ et D$(5 + 2i)$. Que vaut $\\dfrac{z_D - z_C}{z_K - z_O}$ ?",
            "options": [
              "$\\dfrac{4}{3}i$",
              "$i$",
              "$4i$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$z_D - z_C = 4i$ et $z_K - z_O = 4$ : le quotient vaut $i$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Points alignés",
          "stepTheme": "Points alignés",
          "stepBadge": "Points alignés",
          "paragraphText": "I$(1)$, J$(i)$, B$(2 - i)$ : $\\dfrac{z_B - z_I}{z_J - z_I} = \\dfrac{1 - i}{-1 + i} = -1$ : J, I, B sont alignés.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q4",
            "type": "mcq",
            "prompt": "I, J, B ont pour affixes $1$, $i$ et $2 - i$. Que vaut $\\dfrac{z_B - z_I}{z_J - z_I}$ ?",
            "options": [
              "$-1$",
              "$i$",
              "$1 - i$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$z_B - z_I = 1 - i$ et $z_J - z_I = -1 + i = -(1 - i)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Points cocycliques",
          "stepTheme": "Points cocycliques",
          "stepBadge": "Points cocycliques",
          "paragraphText": "A, B, C, D non alignés sont cocycliques si $\\dfrac{z_B - z_C}{z_A - z_C} : \\dfrac{z_B - z_D}{z_A - z_D}$ est un réel non nul.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q5",
            "type": "mcq",
            "prompt": "Pour quatre points A, B, C, D non alignés, on calcule le quotient $\\dfrac{z_B - z_C}{z_A - z_C} : \\dfrac{z_B - z_D}{z_A - z_D}$ et on trouve un réel non nul. Que peut-on conclure ?",
            "options": [
              "Les quatre points sont alignés",
              "Les quatre points sont sur un même cercle",
              "ABCD est un carré",
              "(AB) est perpendiculaire à (CD)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la caractérisation complexe de points cocycliques."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Vérifier le calcul",
          "stepTheme": "Vérifier le calcul",
          "stepBadge": "Vérifier le calcul",
          "paragraphText": "$\\dfrac{4i}{3 + i} : \\dfrac{-3 + i}{-2i} = \\dfrac{4i \\times (-2i)}{(3 + i)(-3 + i)} = \\dfrac{8}{-10} = -\\dfrac{4}{5}$ (le document écrit $-\\dfrac{2}{5}$).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q6",
            "type": "mcq",
            "prompt": "On sait que $4i \\times (-2i) = 8$ et que $(3 + i)(-3 + i) = -10$. Que vaut $\\dfrac{4i}{3 + i} : \\dfrac{-3 + i}{-2i}$ ?",
            "options": [
              "$-\\dfrac{2}{5}$",
              "$-\\dfrac{4}{5}$",
              "$\\dfrac{4}{5}i$",
              "$-8$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{8}{-10} = -\\dfrac{4}{5}$ : réel, donc les points sont bien cocycliques."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Même distance à un centre",
          "stepTheme": "Même distance à un centre",
          "stepBadge": "Même distance à un centre",
          "paragraphText": "Avec Ω$(-1 + 2i)$ : $|2 - 2i - z_\\Omega| = |3 - 4i| = 5$. Si tous les points sont à la distance 5 de Ω, ils sont sur le cercle de centre Ω et de rayon 5.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q7",
            "type": "mcq",
            "prompt": "Ω a pour affixe $-1 + 2i$ et D pour affixe $-4 - 2i$. Que vaut la distance ΩD $= |z_D - z_\\Omega|$ ?",
            "options": [
              "$3$",
              "$4$",
              "$5$",
              "$7$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$z_D - z_\\Omega = -3 - 4i$ et $\\sqrt{9 + 16} = 5$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q1",
          "type": "mcq",
          "prompt": "A$(2 + i)$, B$(2 - i)$, C$(5 - 2i)$, D$(5 + 2i)$. On calcule $\\dfrac{z_D - z_C}{z_B - z_A} = \\dfrac{4i}{-2i}$. Que vaut ce quotient et que peut-on conclure ?",
          "options": [
            "$-2$ : (AB) et (CD) sont parallèles",
            "$2i$ : (AB) et (CD) sont perpendiculaires",
            "$-2$ : (AB) et (CD) sont perpendiculaires",
            "$i$ : A, B, C, D sont alignés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un quotient réel non nul traduit des directions parallèles."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q2",
          "type": "mcq",
          "prompt": "On calcule le quotient $\\dfrac{z_D - z_C}{z_B - z_A}$ pour quatre points et on trouve $-\\dfrac{3}{2}i$. Que peut-on dire des droites (AB) et (CD) ?",
          "options": [
            "Elles sont parallèles",
            "Elles sont perpendiculaires",
            "Elles sont confondues",
            "On ne peut rien dire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Imaginaire pur : l'angle entre les directions vaut $\\pm\\dfrac{\\pi}{2}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q3",
          "type": "mcq",
          "prompt": "O est l'origine, K a pour affixe 4, C$(5 - 2i)$ et D$(5 + 2i)$. Que vaut $\\dfrac{z_D - z_C}{z_K - z_O}$ ?",
          "options": [
            "$\\dfrac{4}{3}i$",
            "$i$",
            "$4i$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$z_D - z_C = 4i$ et $z_K - z_O = 4$ : le quotient vaut $i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q4",
          "type": "mcq",
          "prompt": "I, J, B ont pour affixes $1$, $i$ et $2 - i$. Que vaut $\\dfrac{z_B - z_I}{z_J - z_I}$ ?",
          "options": [
            "$-1$",
            "$i$",
            "$1 - i$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$z_B - z_I = 1 - i$ et $z_J - z_I = -1 + i = -(1 - i)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q5",
          "type": "mcq",
          "prompt": "Pour quatre points A, B, C, D non alignés, on calcule le quotient $\\dfrac{z_B - z_C}{z_A - z_C} : \\dfrac{z_B - z_D}{z_A - z_D}$ et on trouve un réel non nul. Que peut-on conclure ?",
          "options": [
            "Les quatre points sont alignés",
            "Les quatre points sont sur un même cercle",
            "ABCD est un carré",
            "(AB) est perpendiculaire à (CD)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la caractérisation complexe de points cocycliques."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q6",
          "type": "mcq",
          "prompt": "On sait que $4i \\times (-2i) = 8$ et que $(3 + i)(-3 + i) = -10$. Que vaut $\\dfrac{4i}{3 + i} : \\dfrac{-3 + i}{-2i}$ ?",
          "options": [
            "$-\\dfrac{2}{5}$",
            "$-\\dfrac{4}{5}$",
            "$\\dfrac{4}{5}i$",
            "$-8$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{8}{-10} = -\\dfrac{4}{5}$ : réel, donc les points sont bien cocycliques."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p04_q7",
          "type": "mcq",
          "prompt": "Ω a pour affixe $-1 + 2i$ et D pour affixe $-4 - 2i$. Que vaut la distance ΩD $= |z_D - z_\\Omega|$ ?",
          "options": [
            "$3$",
            "$4$",
            "$5$",
            "$7$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$z_D - z_\\Omega = -3 - 4i$ et $\\sqrt{9 + 16} = 5$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05",
      "order": 5,
      "title": "Écritures complexes des transformations",
      "summary": "Symétries, translation, homothétie et rotation en une formule.",
      "conceptExplanation": "Une transformation du plan est une application bijective du plan dans lui-même. Si elle envoie M$(z)$ sur M'$(z')$, l'expression de $z'$ en fonction de $z$ est son écriture complexe.\n\n- Symétrie orthogonale d'axe (OI) (axe des réels) : $z' = \\bar{z}$.\n- Symétrie orthogonale d'axe (OJ) (axe des imaginaires) : $z' = -\\bar{z}$.\n- Symétrie centrale de centre Ω$(\\omega)$ : $z' - \\omega = -(z - \\omega)$, soit $z' = 2\\omega - z$.\n- Translation de vecteur d'affixe $b$ : $z' = z + b$.\n- Homothétie de centre Ω$(\\omega)$ et de rapport $k$ (réel non nul) : $z' - \\omega = k(z - \\omega)$.\n- Rotation de centre Ω$(\\omega)$ et d'angle $\\theta$ : $z' - \\omega = e^{i\\theta}(z - \\omega)$.\n\nExemples :\n- homothétie de centre $-1 - i$ et de rapport 3 : $z' + 1 + i = 3(z + 1 + i)$, donc $z' = 3z + 2 + 2i$ ;\n- translation de vecteur d'affixe $1 + 4i$ : $z' = z + 1 + 4i$ ;\n- rotation de centre $1 + i$ et d'angle $\\dfrac{2\\pi}{3}$ : $z' = \\left(-\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i\\right)z + \\dfrac{3 + \\sqrt{3}}{2} + \\dfrac{3 - \\sqrt{3}}{2}i$ ;\n- rotation de centre O et d'angle $\\dfrac{\\pi}{2}$ : $z' = iz$.\n\nImages du point F$(1 - i)$ : par la symétrie d'axe (OI) : $1 + i$ ; d'axe (OJ) : $-1 - i$ ; de centre O : $-1 + i$ ; de centre B$(1 + i)$ : $2(1 + i) - (1 - i) = 1 + 3i$.",
      "keyRule": "Translation : $z' = z + b$. Homothétie : $z' - \\omega = k(z - \\omega)$. Rotation : $z' - \\omega = e^{i\\theta}(z - \\omega)$. Symétries : $\\bar{z}$, $-\\bar{z}$, $2\\omega - z$.",
      "formulas": [
        {
          "name": "Homothétie",
          "formula": "z' - \\omega = k(z - \\omega)"
        },
        {
          "name": "Rotation",
          "formula": "z' - \\omega = e^{i\\theta}(z - \\omega)"
        }
      ],
      "workedExample": {
        "title": "Une homothétie",
        "statement": "Détermine l'écriture complexe de l'homothétie de centre Ω$(-1 - i)$ et de rapport 3.",
        "methodSteps": [
          "$z' - (-1 - i) = 3(z - (-1 - i))$, soit $z' + 1 + i = 3z + 3 + 3i$.",
          "$z' = 3z + 3 + 3i - 1 - i$."
        ],
        "conclusion": "$z' = 3z + 2 + 2i$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les symétries axiales",
          "stepTheme": "Les symétries axiales",
          "stepBadge": "Les symétries axiales",
          "paragraphText": "Symétrie d'axe (OI) : $z' = \\bar{z}$. Symétrie d'axe (OJ) : $z' = -\\bar{z}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q1",
            "type": "mcq",
            "prompt": "F a pour affixe $1 - i$. Quelle est l'affixe de son image par la symétrie orthogonale d'axe (OI), d'écriture $z' = \\bar{z}$ ?",
            "options": [
              "$1 + i$",
              "$-1 + i$",
              "$-1 - i$",
              "$1 - i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le conjugué de $1 - i$ est $1 + i$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Symétrie centrale",
          "stepTheme": "Symétrie centrale",
          "stepBadge": "Symétrie centrale",
          "paragraphText": "Symétrie de centre Ω$(\\omega)$ : $z' = 2\\omega - z$. Image de F$(1 - i)$ par la symétrie de centre B$(1 + i)$ : $2 + 2i - 1 + i = 1 + 3i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q2",
            "type": "mcq",
            "prompt": "F a pour affixe $1 - i$ et B pour affixe $1 + i$. Avec l'écriture $z' = 2z_B - z$, quelle est l'affixe de l'image de F par la symétrie de centre B ?",
            "options": [
              "$1 + 3i$",
              "$-1 + i$",
              "$3 + i$",
              "$2i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2(1 + i) - (1 - i) = 2 + 2i - 1 + i = 1 + 3i$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La translation",
          "stepTheme": "La translation",
          "stepBadge": "La translation",
          "paragraphText": "La translation de vecteur d'affixe $b$ a pour écriture complexe $z' = z + b$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q3",
            "type": "mcq",
            "prompt": "Quelle est l'écriture complexe de la translation de vecteur $\\vec{u}$ d'affixe $1 - i$ ?",
            "options": [
              "$z' = (1 - i)z$",
              "$z' = z + 1 - i$",
              "$z' = z - 1 + i$",
              "$z' = \\bar{z} + 1 - i$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On ajoute l'affixe du vecteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L'homothétie",
          "stepTheme": "L'homothétie",
          "stepBadge": "L'homothétie",
          "paragraphText": "Homothétie de centre Ω$(-1 - i)$, rapport 3 : $z' + 1 + i = 3(z + 1 + i)$, donc $z' = 3z + 2 + 2i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q4",
            "type": "mcq",
            "prompt": "Quelle est l'écriture complexe de l'homothétie de centre Ω d'affixe $-1 - i$ et de rapport 3, sachant que $z' - \\omega = k(z - \\omega)$ ?",
            "options": [
              "$z' = 3z + 2 + 2i$",
              "$z' = 3z - 1 - i$",
              "$z' = 3z + 3 + 3i$",
              "$z' = z + 3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$z' = 3z + 3(1 + i) - (1 + i) = 3z + 2 + 2i$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La rotation",
          "stepTheme": "La rotation",
          "stepBadge": "La rotation",
          "paragraphText": "Rotation de centre O et d'angle $\\dfrac{\\pi}{2}$ : $z' = e^{i\\frac{\\pi}{2}}z = iz$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q5",
            "type": "mcq",
            "prompt": "Quelle est l'écriture complexe de la rotation de centre O et d'angle $\\dfrac{\\pi}{2}$, sachant que $e^{i\\frac{\\pi}{2}} = i$ ?",
            "options": [
              "$z' = z + i$",
              "$z' = iz$",
              "$z' = -iz$",
              "$z' = \\bar{z}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Rotation de centre O : $z' = e^{i\\theta}z$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Une rotation de centre quelconque",
          "stepTheme": "Une rotation de centre quelconque",
          "stepBadge": "Une rotation de centre quelconque",
          "paragraphText": "Rotation de centre $i$ et d'angle $\\dfrac{\\pi}{2}$ : $z' - i = i(z - i)$, soit $z' = iz + 1 + i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q6",
            "type": "mcq",
            "prompt": "La rotation r a pour centre J d'affixe $i$ et pour angle $\\dfrac{\\pi}{2}$. En développant $z' - i = i(z - i)$, quelle est son écriture complexe ?",
            "options": [
              "$z' = iz + 1 + i$",
              "$z' = iz - 1$",
              "$z' = iz + i$",
              "$z' = z + 1 + i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$i(z - i) = iz - i^2 = iz + 1$, puis on ajoute $i$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Vérifier une image",
          "stepTheme": "Vérifier une image",
          "stepBadge": "Vérifier une image",
          "paragraphText": "Avec $z' = iz + 1 + i$ et A$(-1 + 3i)$ : $z' = i(-1 + 3i) + 1 + i = -i - 3 + 1 + i = -2$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q7",
            "type": "mcq",
            "prompt": "La rotation r a pour écriture $z' = iz + 1 + i$. Quelle est l'affixe de l'image du point A d'affixe $-1 + 3i$ ?",
            "options": [
              "$-2$",
              "$2i$",
              "$-3 + i$",
              "$1 + 3i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$i(-1 + 3i) = -i - 3$ ; $-i - 3 + 1 + i = -2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q1",
          "type": "mcq",
          "prompt": "F a pour affixe $1 - i$. Quelle est l'affixe de son image par la symétrie orthogonale d'axe (OI), d'écriture $z' = \\bar{z}$ ?",
          "options": [
            "$1 + i$",
            "$-1 + i$",
            "$-1 - i$",
            "$1 - i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le conjugué de $1 - i$ est $1 + i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q2",
          "type": "mcq",
          "prompt": "F a pour affixe $1 - i$ et B pour affixe $1 + i$. Avec l'écriture $z' = 2z_B - z$, quelle est l'affixe de l'image de F par la symétrie de centre B ?",
          "options": [
            "$1 + 3i$",
            "$-1 + i$",
            "$3 + i$",
            "$2i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2(1 + i) - (1 - i) = 2 + 2i - 1 + i = 1 + 3i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q3",
          "type": "mcq",
          "prompt": "Quelle est l'écriture complexe de la translation de vecteur $\\vec{u}$ d'affixe $1 - i$ ?",
          "options": [
            "$z' = (1 - i)z$",
            "$z' = z + 1 - i$",
            "$z' = z - 1 + i$",
            "$z' = \\bar{z} + 1 - i$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On ajoute l'affixe du vecteur."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q4",
          "type": "mcq",
          "prompt": "Quelle est l'écriture complexe de l'homothétie de centre Ω d'affixe $-1 - i$ et de rapport 3, sachant que $z' - \\omega = k(z - \\omega)$ ?",
          "options": [
            "$z' = 3z + 2 + 2i$",
            "$z' = 3z - 1 - i$",
            "$z' = 3z + 3 + 3i$",
            "$z' = z + 3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$z' = 3z + 3(1 + i) - (1 + i) = 3z + 2 + 2i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q5",
          "type": "mcq",
          "prompt": "Quelle est l'écriture complexe de la rotation de centre O et d'angle $\\dfrac{\\pi}{2}$, sachant que $e^{i\\frac{\\pi}{2}} = i$ ?",
          "options": [
            "$z' = z + i$",
            "$z' = iz$",
            "$z' = -iz$",
            "$z' = \\bar{z}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Rotation de centre O : $z' = e^{i\\theta}z$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q6",
          "type": "mcq",
          "prompt": "La rotation r a pour centre J d'affixe $i$ et pour angle $\\dfrac{\\pi}{2}$. En développant $z' - i = i(z - i)$, quelle est son écriture complexe ?",
          "options": [
            "$z' = iz + 1 + i$",
            "$z' = iz - 1$",
            "$z' = iz + i$",
            "$z' = z + 1 + i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$i(z - i) = iz - i^2 = iz + 1$, puis on ajoute $i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p05_q7",
          "type": "mcq",
          "prompt": "La rotation r a pour écriture $z' = iz + 1 + i$. Quelle est l'affixe de l'image du point A d'affixe $-1 + 3i$ ?",
          "options": [
            "$-2$",
            "$2i$",
            "$-3 + i$",
            "$1 + 3i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$i(-1 + 3i) = -i - 3$ ; $-i - 3 + 1 + i = -2$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06",
      "order": 6,
      "title": "Reconnaître une transformation z' = az + b",
      "summary": "Translation, homothétie ou rotation selon le nombre a.",
      "conceptExplanation": "On considère la transformation $f$ d'écriture complexe $z' = az + b$, avec $a \\neq 0$.\n- Si $a = 1$ : $f$ est la translation de vecteur d'affixe $b$.\n- Si $a$ est un réel différent de 0 et de 1 : $f$ est l'homothétie de rapport $a$ et de centre Ω d'affixe $\\dfrac{b}{1 - a}$.\n- Si $a$ n'est pas réel et $|a| = 1$ : $f$ est la rotation de centre Ω d'affixe $\\dfrac{b}{1 - a}$ et d'angle $\\arg(a)$.\n\nLe centre est le point invariant : il vérifie $\\omega = a\\omega + b$, donc $\\omega = \\dfrac{b}{1 - a}$.\n\nExemples :\n- $z' = 5z + 2i$ : homothétie de rapport 5, centre $\\dfrac{2i}{1 - 5} = -\\dfrac{1}{2}i$ ;\n- $z' = z + 1 + 3i$ : translation de vecteur d'affixe $1 + 3i$ ;\n- $z' = \\left(\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i\\right)z + \\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}i$ : $|a| = 1$ et $\\arg(a) = \\dfrac{\\pi}{3}$ ; centre $\\dfrac{\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i}{\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i} = 1$ : rotation de centre 1 et d'angle $\\dfrac{\\pi}{3}$ ;\n- $z' = -3z + 2 - i$ : homothétie de rapport $-3$, centre $\\dfrac{2 - i}{4}$ ;\n- $z' = -\\dfrac{1}{2}z + 3 - 6i$ : homothétie de rapport $-\\dfrac{1}{2}$, centre $\\dfrac{3 - 6i}{\\frac{3}{2}} = 2 - 4i$.",
      "keyRule": "$z' = az + b$ : $a = 1$ translation ; $a$ réel ≠ 1 homothétie de rapport $a$ ; $|a| = 1$ non réel rotation d'angle $\\arg a$. Centre : $\\dfrac{b}{1 - a}$.",
      "formulas": [
        {
          "name": "Centre",
          "formula": "\\omega = \\dfrac{b}{1 - a}"
        }
      ],
      "workedExample": {
        "title": "Une homothétie",
        "statement": "Détermine la nature et les éléments de $f$ : $z' = 5z + 2i$.",
        "methodSteps": [
          "$a = 5$ est réel et différent de 1 : homothétie de rapport 5.",
          "Centre : $\\dfrac{b}{1 - a} = \\dfrac{2i}{1 - 5} = -\\dfrac{1}{2}i$."
        ],
        "conclusion": "Homothétie de centre $-\\dfrac{1}{2}i$ et de rapport 5."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "a = 1",
          "stepTheme": "a = 1",
          "stepBadge": "a = 1",
          "paragraphText": "Si $a = 1$, $z' = z + b$ : c'est la translation de vecteur d'affixe $b$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q1",
            "type": "mcq",
            "prompt": "Quelle est la nature de la transformation d'écriture complexe $z' = z + 2 - 3i$ ?",
            "options": [
              "Une translation de vecteur d'affixe $2 - 3i$",
              "Une homothétie de rapport $2$",
              "Une rotation d'angle $-3$",
              "Une symétrie centrale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le coefficient de $z$ vaut 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "a réel",
          "stepTheme": "a réel",
          "stepBadge": "a réel",
          "paragraphText": "Si $a$ est un réel différent de 0 et de 1, $f$ est l'homothétie de rapport $a$ et de centre $\\dfrac{b}{1 - a}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q2",
            "type": "mcq",
            "prompt": "Quelle est la nature de la transformation d'écriture complexe $z' = -3z + 2 - i$ ?",
            "options": [
              "Une homothétie de rapport $-3$",
              "Une rotation d'angle $\\pi$",
              "Une translation",
              "Une homothétie de rapport $3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$a = -3$ est réel, différent de 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le centre",
          "stepTheme": "Le centre",
          "stepBadge": "Le centre",
          "paragraphText": "Le centre ω vérifie $\\omega = a\\omega + b$, donc $\\omega = \\dfrac{b}{1 - a}$. Pour $z' = 5z + 2i$ : $\\omega = \\dfrac{2i}{-4} = -\\dfrac{1}{2}i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q3",
            "type": "mcq",
            "prompt": "La transformation $z' = 5z + 2i$ est une homothétie de rapport 5. Avec $\\omega = \\dfrac{b}{1 - a}$, quelle est l'affixe de son centre ?",
            "options": [
              "$-\\dfrac{1}{2}i$",
              "$\\dfrac{1}{2}i$",
              "$2i$",
              "$-\\dfrac{2}{5}i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{2i}{1 - 5} = \\dfrac{2i}{-4} = -\\dfrac{1}{2}i$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "|a| = 1",
          "stepTheme": "|a| = 1",
          "stepBadge": "|a| = 1",
          "paragraphText": "Si $a$ n'est pas réel et $|a| = 1$, $f$ est la rotation d'angle $\\arg(a)$ et de centre $\\dfrac{b}{1 - a}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q4",
            "type": "mcq",
            "prompt": "Pour $z' = \\left(\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i\\right)z + \\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}i$, on a $\\left|\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i\\right| = 1$ et $\\arg\\left(\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i\\right) = \\dfrac{\\pi}{3}$. Quelle est la nature de $f$ ?",
            "options": [
              "Une rotation d'angle $\\dfrac{\\pi}{3}$",
              "Une homothétie de rapport $\\dfrac{1}{2}$",
              "Une translation",
              "Une rotation d'angle $\\dfrac{\\pi}{6}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$a$ non réel de module 1 : rotation d'angle $\\arg(a)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le centre de la rotation",
          "stepTheme": "Le centre de la rotation",
          "stepBadge": "Le centre de la rotation",
          "paragraphText": "Pour $a = \\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i$ et $b = \\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}i$ : $1 - a = \\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}i = b$, donc le centre vaut $\\dfrac{b}{1 - a} = 1$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q5",
            "type": "mcq",
            "prompt": "Pour la rotation $z' = \\left(\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i\\right)z + \\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}i$, on remarque que $1 - a = \\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}i = b$. Quelle est l'affixe du centre $\\dfrac{b}{1 - a}$ ?",
            "options": [
              "$1$",
              "$0$",
              "$i$",
              "$\\dfrac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{b}{b} = 1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Rapport négatif",
          "stepTheme": "Rapport négatif",
          "stepBadge": "Rapport négatif",
          "paragraphText": "$z' = -\\dfrac{1}{2}z + 3 - 6i$ : homothétie de rapport $-\\dfrac{1}{2}$, centre $\\dfrac{3 - 6i}{1 + \\frac{1}{2}} = 2 - 4i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q6",
            "type": "mcq",
            "prompt": "La transformation $z' = -\\dfrac{1}{2}z + 3 - 6i$ est une homothétie de rapport $-\\dfrac{1}{2}$. Sachant que $1 - \\left(-\\dfrac{1}{2}\\right) = \\dfrac{3}{2}$, quelle est l'affixe de son centre $\\dfrac{b}{1 - a}$ ?",
            "options": [
              "$2 - 4i$",
              "$6 - 12i$",
              "$3 - 6i$",
              "$-2 + 4i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(3 - 6i) \\div \\dfrac{3}{2} = (3 - 6i) \\times \\dfrac{2}{3} = 2 - 4i$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Module différent de 1",
          "stepTheme": "Module différent de 1",
          "stepBadge": "Module différent de 1",
          "paragraphText": "Si $a$ n'est pas réel et $|a| \\neq 1$, ce n'est ni une rotation ni une homothétie simple : c'est une similitude (composée d'une rotation et d'une homothétie).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q7",
            "type": "mcq",
            "prompt": "Pour la transformation $z' = (1 + i)z + 2$, on a $|1 + i| = \\sqrt{2}$. Est-ce une rotation ?",
            "options": [
              "Oui, d'angle $\\dfrac{\\pi}{4}$",
              "Non : $|a| = \\sqrt{2} \\neq 1$, ce n'est pas une rotation",
              "Oui, d'angle $\\sqrt{2}$",
              "Non, c'est une translation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une rotation conserve les distances : il faut $|a| = 1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q1",
          "type": "mcq",
          "prompt": "Quelle est la nature de la transformation d'écriture complexe $z' = z + 2 - 3i$ ?",
          "options": [
            "Une translation de vecteur d'affixe $2 - 3i$",
            "Une homothétie de rapport $2$",
            "Une rotation d'angle $-3$",
            "Une symétrie centrale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le coefficient de $z$ vaut 1."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q2",
          "type": "mcq",
          "prompt": "Quelle est la nature de la transformation d'écriture complexe $z' = -3z + 2 - i$ ?",
          "options": [
            "Une homothétie de rapport $-3$",
            "Une rotation d'angle $\\pi$",
            "Une translation",
            "Une homothétie de rapport $3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$a = -3$ est réel, différent de 1."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q3",
          "type": "mcq",
          "prompt": "La transformation $z' = 5z + 2i$ est une homothétie de rapport 5. Avec $\\omega = \\dfrac{b}{1 - a}$, quelle est l'affixe de son centre ?",
          "options": [
            "$-\\dfrac{1}{2}i$",
            "$\\dfrac{1}{2}i$",
            "$2i$",
            "$-\\dfrac{2}{5}i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{2i}{1 - 5} = \\dfrac{2i}{-4} = -\\dfrac{1}{2}i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q4",
          "type": "mcq",
          "prompt": "Pour $z' = \\left(\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i\\right)z + \\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}i$, on a $\\left|\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i\\right| = 1$ et $\\arg\\left(\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i\\right) = \\dfrac{\\pi}{3}$. Quelle est la nature de $f$ ?",
          "options": [
            "Une rotation d'angle $\\dfrac{\\pi}{3}$",
            "Une homothétie de rapport $\\dfrac{1}{2}$",
            "Une translation",
            "Une rotation d'angle $\\dfrac{\\pi}{6}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$a$ non réel de module 1 : rotation d'angle $\\arg(a)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q5",
          "type": "mcq",
          "prompt": "Pour la rotation $z' = \\left(\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i\\right)z + \\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}i$, on remarque que $1 - a = \\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}i = b$. Quelle est l'affixe du centre $\\dfrac{b}{1 - a}$ ?",
          "options": [
            "$1$",
            "$0$",
            "$i$",
            "$\\dfrac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{b}{b} = 1$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q6",
          "type": "mcq",
          "prompt": "La transformation $z' = -\\dfrac{1}{2}z + 3 - 6i$ est une homothétie de rapport $-\\dfrac{1}{2}$. Sachant que $1 - \\left(-\\dfrac{1}{2}\\right) = \\dfrac{3}{2}$, quelle est l'affixe de son centre $\\dfrac{b}{1 - a}$ ?",
          "options": [
            "$2 - 4i$",
            "$6 - 12i$",
            "$3 - 6i$",
            "$-2 + 4i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(3 - 6i) \\div \\dfrac{3}{2} = (3 - 6i) \\times \\dfrac{2}{3} = 2 - 4i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p06_q7",
          "type": "mcq",
          "prompt": "Pour la transformation $z' = (1 + i)z + 2$, on a $|1 + i| = \\sqrt{2}$. Est-ce une rotation ?",
          "options": [
            "Oui, d'angle $\\dfrac{\\pi}{4}$",
            "Non : $|a| = \\sqrt{2} \\neq 1$, ce n'est pas une rotation",
            "Oui, d'angle $\\sqrt{2}$",
            "Non, c'est une translation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une rotation conserve les distances : il faut $|a| = 1$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07",
      "order": 7,
      "title": "Situations d'évaluation",
      "summary": "Les carrés de la salle du club et le triangle a, a², a³.",
      "conceptExplanation": "Situation 1 (salle du club) : ABCD est un quadrilatère de sens direct ; sur chaque côté, on construit à l'extérieur un triangle rectangle isocèle de sommet $M_1$, $M_2$, $M_3$, $M_4$. L'élève affirme que $[M_1M_3]$ et $[M_2M_4]$ sont perpendiculaires et de même longueur.\nMéthode : on exprime chaque $m_k$ à l'aide des sommets (rotation d'angle $\\pm\\dfrac{\\pi}{2}$ autour du milieu du côté), puis on calcule et on montre que $m_4 - m_2 = i(m_3 - m_1)$ (ou $-i(m_3 - m_1)$).\nOr si $\\dfrac{m_4 - m_2}{m_3 - m_1} = \\pm i$ :\n- module 1 : $M_2M_4 = M_1M_3$ (même longueur) ;\n- argument $\\pm\\dfrac{\\pi}{2}$ : $(M_1M_3) \\perp (M_2M_4)$.\nL'affirmation de l'élève est donc correcte (théorème de Van Aubel).\n\nSituation 2 : (E) $2z^2 + 2z + 1 = 0$.\n- $\\Delta = 4 - 8 = -4 = (2i)^2$, donc $z = \\dfrac{-2 \\pm 2i}{4} = -\\dfrac{1}{2} \\pm \\dfrac{1}{2}i$.\n- $a = -\\dfrac{1}{2} + \\dfrac{1}{2}i$ (partie imaginaire positive).\n- $a^2 = \\dfrac{1}{4} - \\dfrac{1}{2}i - \\dfrac{1}{4} = -\\dfrac{1}{2}i$ ; $a^3 = a^2 \\times a = \\dfrac{1}{4} + \\dfrac{1}{4}i$.\n- Distances : entre $a$ et $a^2$ : $\\left|\\dfrac{1}{2} - i\\right| = \\dfrac{\\sqrt{5}}{2}$ ; entre $a^2$ et $a^3$ : $\\left|\\dfrac{1}{4} + \\dfrac{3}{4}i\\right| = \\dfrac{\\sqrt{10}}{4}$.\n- Ces longueurs sont différentes : le triangle n'est PAS équilatéral. C'est la voisine qui a raison.",
      "keyRule": "Pour prouver « perpendiculaires et de même longueur », on montre que le quotient des deux différences vaut $i$ ou $-i$.",
      "formulas": [
        {
          "name": "Même longueur et perpendiculaires",
          "formula": "\\dfrac{m_4 - m_2}{m_3 - m_1} = \\pm i"
        }
      ],
      "workedExample": {
        "title": "Les puissances de a",
        "statement": "Avec $a = -\\dfrac{1}{2} + \\dfrac{1}{2}i$, calcule $a^2$.",
        "methodSteps": [
          "$a^2 = \\left(-\\dfrac{1}{2}\\right)^2 + 2 \\times \\left(-\\dfrac{1}{2}\\right) \\times \\dfrac{1}{2}i + \\left(\\dfrac{1}{2}i\\right)^2$.",
          "$= \\dfrac{1}{4} - \\dfrac{1}{2}i - \\dfrac{1}{4}$."
        ],
        "conclusion": "$a^2 = -\\dfrac{1}{2}i$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le critère ± i",
          "stepTheme": "Le critère ± i",
          "stepBadge": "Le critère ± i",
          "paragraphText": "Si $\\dfrac{z_D - z_C}{z_B - z_A} = \\pm i$, alors CD = AB et (CD) ⊥ (AB).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q1",
            "type": "mcq",
            "prompt": "Dans la situation du club, on démontre que $m_4 - m_2 = i(m_3 - m_1)$. Que peut-on en déduire pour les segments $[M_1M_3]$ et $[M_2M_4]$ ?",
            "options": [
              "Ils sont parallèles",
              "Ils ont la même longueur et des supports perpendiculaires",
              "Ils ont le même milieu",
              "Rien"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Module de $i$ = 1 (même longueur), argument $\\dfrac{\\pi}{2}$ (perpendiculaires)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le discriminant",
          "stepTheme": "Le discriminant",
          "stepBadge": "Le discriminant",
          "paragraphText": "Pour $2z^2 + 2z + 1 = 0$ : $\\Delta = 2^2 - 4 \\times 2 \\times 1 = -4 = (2i)^2$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q2",
            "type": "mcq",
            "prompt": "Quel est le discriminant de l'équation $2z^2 + 2z + 1 = 0$ ?",
            "options": [
              "$4$",
              "$-4$",
              "$12$",
              "$-8$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\Delta = b^2 - 4ac = 4 - 8 = -4$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Les solutions",
          "stepTheme": "Les solutions",
          "stepBadge": "Les solutions",
          "paragraphText": "$z = \\dfrac{-2 \\pm 2i}{4} = -\\dfrac{1}{2} \\pm \\dfrac{1}{2}i$ ; on note $a = -\\dfrac{1}{2} + \\dfrac{1}{2}i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q3",
            "type": "mcq",
            "prompt": "L'équation $2z^2 + 2z + 1 = 0$ a pour discriminant $\\Delta = -4 = (2i)^2$. Quelle est sa solution $a$ dont la partie imaginaire est positive ?",
            "options": [
              "$-\\dfrac{1}{2} + \\dfrac{1}{2}i$",
              "$\\dfrac{1}{2} + \\dfrac{1}{2}i$",
              "$-1 + i$",
              "$-\\dfrac{1}{2} - \\dfrac{1}{2}i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{-2 + 2i}{2 \\times 2} = -\\dfrac{1}{2} + \\dfrac{1}{2}i$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Calculer a²",
          "stepTheme": "Calculer a²",
          "stepBadge": "Calculer a²",
          "paragraphText": "$a^2 = \\left(-\\dfrac{1}{2} + \\dfrac{1}{2}i\\right)^2 = \\dfrac{1}{4} - \\dfrac{1}{2}i - \\dfrac{1}{4} = -\\dfrac{1}{2}i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q4",
            "type": "mcq",
            "prompt": "Avec $a = -\\dfrac{1}{2} + \\dfrac{1}{2}i$, que vaut $a^2$ ?",
            "options": [
              "$-\\dfrac{1}{2}i$",
              "$\\dfrac{1}{2}$",
              "$\\dfrac{1}{4} + \\dfrac{1}{4}i$",
              "$-\\dfrac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{1}{4} + \\left(\\dfrac{1}{2}i\\right)^2 = \\dfrac{1}{4} - \\dfrac{1}{4} = 0$ ; il reste $-\\dfrac{1}{2}i$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Calculer a³",
          "stepTheme": "Calculer a³",
          "stepBadge": "Calculer a³",
          "paragraphText": "$a^3 = a^2 \\times a = -\\dfrac{1}{2}i\\left(-\\dfrac{1}{2} + \\dfrac{1}{2}i\\right) = \\dfrac{1}{4}i + \\dfrac{1}{4} = \\dfrac{1}{4} + \\dfrac{1}{4}i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q5",
            "type": "mcq",
            "prompt": "On sait que $a = -\\dfrac{1}{2} + \\dfrac{1}{2}i$ et $a^2 = -\\dfrac{1}{2}i$. Que vaut $a^3 = a^2 \\times a$ ?",
            "options": [
              "$\\dfrac{1}{4} + \\dfrac{1}{4}i$",
              "$-\\dfrac{1}{4} - \\dfrac{1}{4}i$",
              "$\\dfrac{1}{4}i$",
              "$1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$-\\dfrac{1}{2}i \\times \\dfrac{1}{2}i = -\\dfrac{1}{4}i^2 = \\dfrac{1}{4}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Comparer les côtés",
          "stepTheme": "Comparer les côtés",
          "stepBadge": "Comparer les côtés",
          "paragraphText": "Côté entre $a$ et $a^2$ : $\\left|\\dfrac{1}{2} - i\\right| = \\dfrac{\\sqrt{5}}{2}$. Côté entre $a^2$ et $a^3$ : $\\left|\\dfrac{1}{4} + \\dfrac{3}{4}i\\right| = \\dfrac{\\sqrt{10}}{4}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q6",
            "type": "mcq",
            "prompt": "On a $a = -\\dfrac{1}{2} + \\dfrac{1}{2}i$ et $a^2 = -\\dfrac{1}{2}i$. Que vaut la longueur $|a^2 - a| = \\left|\\dfrac{1}{2} - i\\right|$ ?",
            "options": [
              "$\\dfrac{\\sqrt{5}}{2}$",
              "$\\dfrac{1}{2}$",
              "$\\dfrac{3}{2}$",
              "$\\sqrt{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\sqrt{\\dfrac{1}{4} + 1} = \\sqrt{\\dfrac{5}{4}} = \\dfrac{\\sqrt{5}}{2}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Qui a raison ?",
          "stepTheme": "Qui a raison ?",
          "stepBadge": "Qui a raison ?",
          "paragraphText": "Les côtés $\\dfrac{\\sqrt{5}}{2} \\approx 1{,}12$ et $\\dfrac{\\sqrt{10}}{4} \\approx 0{,}79$ sont différents : le triangle de sommets $a$, $a^2$, $a^3$ n'est pas équilatéral.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q7",
            "type": "mcq",
            "prompt": "Les points d'affixes $a = -\\dfrac{1}{2} + \\dfrac{1}{2}i$, $a^2 = -\\dfrac{1}{2}i$ et $a^3 = \\dfrac{1}{4} + \\dfrac{1}{4}i$ forment un triangle dont deux côtés mesurent $\\dfrac{\\sqrt{5}}{2}$ et $\\dfrac{\\sqrt{10}}{4}$. Un élève affirme que ce triangle est équilatéral. A-t-il raison ?",
            "options": [
              "Oui",
              "Non : deux côtés ont des longueurs différentes, le triangle n'est pas équilatéral",
              "Oui, car $a$ est une racine de l'équation",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans un triangle équilatéral, les trois côtés sont égaux. C'est la voisine qui a raison."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q1",
          "type": "mcq",
          "prompt": "Dans la situation du club, on démontre que $m_4 - m_2 = i(m_3 - m_1)$. Que peut-on en déduire pour les segments $[M_1M_3]$ et $[M_2M_4]$ ?",
          "options": [
            "Ils sont parallèles",
            "Ils ont la même longueur et des supports perpendiculaires",
            "Ils ont le même milieu",
            "Rien"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Module de $i$ = 1 (même longueur), argument $\\dfrac{\\pi}{2}$ (perpendiculaires)."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q2",
          "type": "mcq",
          "prompt": "Quel est le discriminant de l'équation $2z^2 + 2z + 1 = 0$ ?",
          "options": [
            "$4$",
            "$-4$",
            "$12$",
            "$-8$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\Delta = b^2 - 4ac = 4 - 8 = -4$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q3",
          "type": "mcq",
          "prompt": "L'équation $2z^2 + 2z + 1 = 0$ a pour discriminant $\\Delta = -4 = (2i)^2$. Quelle est sa solution $a$ dont la partie imaginaire est positive ?",
          "options": [
            "$-\\dfrac{1}{2} + \\dfrac{1}{2}i$",
            "$\\dfrac{1}{2} + \\dfrac{1}{2}i$",
            "$-1 + i$",
            "$-\\dfrac{1}{2} - \\dfrac{1}{2}i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{-2 + 2i}{2 \\times 2} = -\\dfrac{1}{2} + \\dfrac{1}{2}i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q4",
          "type": "mcq",
          "prompt": "Avec $a = -\\dfrac{1}{2} + \\dfrac{1}{2}i$, que vaut $a^2$ ?",
          "options": [
            "$-\\dfrac{1}{2}i$",
            "$\\dfrac{1}{2}$",
            "$\\dfrac{1}{4} + \\dfrac{1}{4}i$",
            "$-\\dfrac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{1}{4} + \\left(\\dfrac{1}{2}i\\right)^2 = \\dfrac{1}{4} - \\dfrac{1}{4} = 0$ ; il reste $-\\dfrac{1}{2}i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q5",
          "type": "mcq",
          "prompt": "On sait que $a = -\\dfrac{1}{2} + \\dfrac{1}{2}i$ et $a^2 = -\\dfrac{1}{2}i$. Que vaut $a^3 = a^2 \\times a$ ?",
          "options": [
            "$\\dfrac{1}{4} + \\dfrac{1}{4}i$",
            "$-\\dfrac{1}{4} - \\dfrac{1}{4}i$",
            "$\\dfrac{1}{4}i$",
            "$1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$-\\dfrac{1}{2}i \\times \\dfrac{1}{2}i = -\\dfrac{1}{4}i^2 = \\dfrac{1}{4}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q6",
          "type": "mcq",
          "prompt": "On a $a = -\\dfrac{1}{2} + \\dfrac{1}{2}i$ et $a^2 = -\\dfrac{1}{2}i$. Que vaut la longueur $|a^2 - a| = \\left|\\dfrac{1}{2} - i\\right|$ ?",
          "options": [
            "$\\dfrac{\\sqrt{5}}{2}$",
            "$\\dfrac{1}{2}$",
            "$\\dfrac{3}{2}$",
            "$\\sqrt{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\sqrt{\\dfrac{1}{4} + 1} = \\sqrt{\\dfrac{5}{4}} = \\dfrac{\\sqrt{5}}{2}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l13_complexes_geometrie_plan_p07_q7",
          "type": "mcq",
          "prompt": "Les points d'affixes $a = -\\dfrac{1}{2} + \\dfrac{1}{2}i$, $a^2 = -\\dfrac{1}{2}i$ et $a^3 = \\dfrac{1}{4} + \\dfrac{1}{4}i$ forment un triangle dont deux côtés mesurent $\\dfrac{\\sqrt{5}}{2}$ et $\\dfrac{\\sqrt{10}}{4}$. Un élève affirme que ce triangle est équilatéral. A-t-il raison ?",
          "options": [
            "Oui",
            "Non : deux côtés ont des longueurs différentes, le triangle n'est pas équilatéral",
            "Oui, car $a$ est une racine de l'équation",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans un triangle équilatéral, les trois côtés sont égaux. C'est la voisine qui a raison."
        }
      ]
    }
  ]
};
