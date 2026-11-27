import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 08 : Nombres complexes et géométrie du plan » (format v2 : mini-leçons de 5 à 8 étapes). Contenu vérifié : dans le livre 2025-2026, cette leçon est numérotée « Leçon 9 ».
// Source : https://lyc.ecole-ci.org/course/view.php?id=2851
export const MATHS_TLE_CD_L08_COMPLEXES_GEOMETRIE: CurriculumChapter = {
  "id": "terminale_c_maths_geometrie_l08_complexes_geometrie",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 8,
  "title": "Leçon 8 : Nombres complexes et géométrie du plan",
  "summary": "Angles et distances avec les complexes, ensembles de points, configurations (parallélisme, alignement, perpendicularité, cocyclicité), triangles particuliers, transformations du plan et similitudes directes.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2851",
  "points": [
    {
      "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01",
      "order": 1,
      "title": "Angles et distances avec les complexes",
      "summary": "L'argument d'un quotient de différences mesure un angle orienté ; son module donne un rapport de distances.",
      "conceptExplanation": "Propriété (angle) : si $A$, $B$, $C$ et $D$ sont des points d'affixes respectives $z_A$, $z_B$, $z_C$ et $z_D$ tels que $A \\neq B$ et $C \\neq D$, alors $\\arg\\left(\\frac{z_A - z_B}{z_C - z_D}\\right)$ est une mesure de l'angle orienté $(\\overrightarrow{DC} ; \\overrightarrow{BA})$.\nAutrement dit : $\\mathrm{mes}(\\overrightarrow{DC} ; \\overrightarrow{BA}) = \\arg\\left(\\frac{z_A - z_B}{z_C - z_D}\\right) + 2k\\pi$, $k \\in \\mathbb{Z}$.\nPropriété (distance) : si $A$, $B$, $C$ et $D$ sont des points d'affixes respectives $z_A$, $z_B$, $z_C$ et $z_D$ tels que $C \\neq D$, alors $\\left|\\frac{z_A - z_B}{z_C - z_D}\\right| = \\frac{AB}{CD}$.\nEn particulier, $\\arg(z_B - z_A)$ est une mesure de l'angle orienté $(\\vec{u} ; \\overrightarrow{AB})$ et $|z_B - z_A| = AB$.",
      "keyRule": "arg((z_A−z_B)/(z_C−z_D)) = angle (DC;BA). |(z_A−z_B)/(z_C−z_D)| = AB/CD.",
      "formulas": [
        {
          "name": "Angle orienté par un quotient",
          "formula": "\\mathrm{mes}(\\overrightarrow{DC} ; \\overrightarrow{BA}) = \\arg\\left(\\frac{z_A - z_B}{z_C - z_D}\\right) + 2k\\pi",
          "note": "Pour A ≠ B et C ≠ D."
        },
        {
          "name": "Rapport de distances par un quotient",
          "formula": "\\left|\\frac{z_A - z_B}{z_C - z_D}\\right| = \\frac{AB}{CD}",
          "note": "Pour C ≠ D."
        }
      ],
      "workedExample": {
        "title": "La mesure de l'angle $(\\overrightarrow{BC} ; \\overrightarrow{BA})$",
        "statement": "On considère les points $A$, $B$ et $C$ d'affixes respectives $-1 + i\\sqrt{3}$, $2$ et $-1 - i\\sqrt{3}$. Détermine la mesure principale de l'angle orienté $(\\overrightarrow{BC} ; \\overrightarrow{BA})$.",
        "methodSteps": [
          "On calcule $\\frac{z_A - z_B}{z_C - z_B} = \\frac{-3 + i\\sqrt{3}}{-3 - i\\sqrt{3}} = \\frac{1 - i\\sqrt{3}}{2}$.",
          "Or $\\frac{1 - i\\sqrt{3}}{2} = \\cos\\left(-\\frac{\\pi}{3}\\right) + i\\sin\\left(-\\frac{\\pi}{3}\\right)$ : son argument principal est $-\\frac{\\pi}{3}$.",
          "Donc la mesure principale de l'angle orienté $(\\overrightarrow{BC} ; \\overrightarrow{BA})$ est $-\\frac{\\pi}{3}$."
        ],
        "conclusion": "La mesure principale de l'angle est $-\\frac{\\pi}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'argument d'un quotient mesure un angle",
          "stepTheme": "L'argument d'un quotient mesure un angle",
          "stepBadge": "L'argument d'un quotient mesure un angle",
          "paragraphText": "• $\\arg\\left(\\frac{z_A - z_B}{z_C - z_D}\\right)$ est une mesure de l'angle orienté $(\\overrightarrow{DC} ; \\overrightarrow{BA})$.\nC'est la propriété clé de cette leçon : un angle orienté se lit sur l'argument d'un quotient de différences d'affixes.\nEn particulier, $\\arg(z_B - z_A)$ est une mesure de l'angle orienté $(\\vec{u} ; \\overrightarrow{AB})$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01_q1",
            "type": "mcq",
            "prompt": "Que mesure $\\arg\\left(\\frac{z_A - z_B}{z_C - z_D}\\right)$ ?",
            "options": [
              "L'angle orienté $(\\overrightarrow{DC} ; \\overrightarrow{BA})$",
              "L'angle orienté $(\\overrightarrow{AB} ; \\overrightarrow{CD})$",
              "Le rapport des distances $\\frac{AB}{CD}$",
              "La distance $AB$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\arg\\left(\\frac{z_A - z_B}{z_C - z_D}\\right)$ est une mesure de l'angle orienté $(\\overrightarrow{DC} ; \\overrightarrow{BA})$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La mesure principale de $(\\overrightarrow{BC} ; \\overrightarrow{BA})$",
          "stepTheme": "La mesure principale de $(\\overrightarrow{BC} ; \\overrightarrow{BA})$",
          "stepBadge": "La mesure principale de $(\\overrightarrow{BC} ; \\overrightarrow{BA})$",
          "paragraphText": "• Pour $A = -1 + i\\sqrt{3}$, $B = 2$ et $C = -1 - i\\sqrt{3}$ : $\\frac{z_A - z_B}{z_C - z_B} = \\frac{-3 + i\\sqrt{3}}{-3 - i\\sqrt{3}} = \\frac{1 - i\\sqrt{3}}{2}$.\nOr $\\frac{1 - i\\sqrt{3}}{2} = \\cos\\left(-\\frac{\\pi}{3}\\right) + i\\sin\\left(-\\frac{\\pi}{3}\\right)$.\nDonc la mesure principale de l'angle orienté $(\\overrightarrow{BC} ; \\overrightarrow{BA})$ est $-\\frac{\\pi}{3}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01_q2",
            "type": "mcq",
            "prompt": "Pour $A = -1 + i\\sqrt{3}$, $B = 2$ et $C = -1 - i\\sqrt{3}$, quelle est la mesure principale de l'angle orienté $(\\overrightarrow{BC} ; \\overrightarrow{BA})$ ?",
            "options": [
              "$-\\frac{\\pi}{3}$",
              "$\\frac{\\pi}{3}$",
              "$\\frac{2\\pi}{3}$",
              "$-\\frac{2\\pi}{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{z_A - z_B}{z_C - z_B} = \\frac{1 - i\\sqrt{3}}{2} = e^{-i\\frac{\\pi}{3}}$ : la mesure principale est $-\\frac{\\pi}{3}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le module d'un quotient donne un rapport de distances",
          "stepTheme": "Le module d'un quotient donne un rapport de distances",
          "stepBadge": "Le module d'un quotient donne un rapport de distances",
          "paragraphText": "• $\\left|\\frac{z_A - z_B}{z_C - z_D}\\right| = \\frac{AB}{CD}$.\nLe module d'un quotient de différences d'affixes est le rapport des distances correspondantes.\nExemple : pour les points $A$, $B$, $C$ ci-dessus, $\\left|\\frac{z_A - z_B}{z_C - z_B}\\right| = \\left|\\frac{1 - i\\sqrt{3}}{2}\\right| = 1$, donc $\\frac{AB}{BC} = 1$ et $AB = BC$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01_q3",
            "type": "mcq",
            "prompt": "Pour $A = -1 + i\\sqrt{3}$, $B = 2$ et $C = -1 - i\\sqrt{3}$, que vaut $\\left|\\frac{z_A - z_B}{z_C - z_B}\\right|$ et qu'en déduit-on ?",
            "options": [
              "$1$ : on en déduit $AB = BC$",
              "$\\sqrt{3}$ : on en déduit $AB = \\sqrt{3}BC$",
              "$\\frac{1}{2}$ : on en déduit $AB = \\frac{1}{2}BC$",
              "$2$ : on en déduit $AB = 2BC$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\left|\\frac{1 - i\\sqrt{3}}{2}\\right| = \\sqrt{\\frac{1}{4} + \\frac{3}{4}} = 1$ : $\\frac{AB}{BC} = 1$ donc $AB = BC$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le triangle ABC est équilatéral",
          "stepTheme": "Le triangle ABC est équilatéral",
          "stepBadge": "Le triangle ABC est équilatéral",
          "paragraphText": "• Pour $A = -1 + i\\sqrt{3}$, $B = 2$ et $C = -1 - i\\sqrt{3}$, on a $\\frac{z_A - z_B}{z_C - z_B} = e^{-i\\frac{\\pi}{3}}$.\nDonc $AB = BC$ (module $1$) et l'angle en $B$ vaut $\\frac{\\pi}{3}$ : le triangle $ABC$ est équilatéral.\nC'est le même calcul que dans la leçon sur les nombres complexes : l'angle et la distance se lisent sur le même quotient.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01_q4",
            "type": "mcq",
            "prompt": "Pour $A = -1 + i\\sqrt{3}$, $B = 2$ et $C = -1 - i\\sqrt{3}$, pourquoi le triangle $ABC$ est-il équilatéral ?",
            "options": [
              "Parce que $\\frac{z_A - z_B}{z_C - z_B} = e^{-i\\frac{\\pi}{3}}$ : $AB = BC$ et l'angle en $B$ vaut $\\frac{\\pi}{3}$",
              "Parce que $AB = AC = 2$",
              "Parce que les trois affixes ont le même module",
              "Parce que $A$, $B$ et $C$ sont alignés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le quotient vaut $e^{-i\\frac{\\pi}{3}}$ : son module $1$ donne $AB = BC$ et son argument $-\\frac{\\pi}{3}$ donne l'angle en $B$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La méthode : un seul quotient pour l'angle et la distance",
          "stepTheme": "La méthode : un seul quotient pour l'angle et la distance",
          "stepBadge": "La méthode : un seul quotient pour l'angle et la distance",
          "paragraphText": "• Pour étudier un triangle $ABC$ avec les complexes : on calcule le quotient $\\frac{z_A - z_B}{z_C - z_B}$ (ou un quotient analogue).\nSon module donne le rapport des longueurs $\\frac{AB}{BC}$ ; son argument donne l'angle orienté en $B$.\nUn seul calcul donne donc à la fois la nature du triangle et ses mesures.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01_q5",
            "type": "mcq",
            "prompt": "Que donnent le module et l'argument du quotient $\\frac{z_A - z_B}{z_C - z_B}$ ?",
            "options": [
              "Le module donne $\\frac{AB}{BC}$ et l'argument donne l'angle en $B$",
              "Le module donne l'angle en $B$ et l'argument donne $\\frac{AB}{BC}$",
              "Le module donne $AB$ et l'argument donne $BC$",
              "Le module donne l'aire et l'argument donne le périmètre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le module du quotient est le rapport des distances $\\frac{AB}{BC}$ et son argument est l'angle orienté en $B$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'ordre des points dans le quotient",
          "stepTheme": "L'ordre des points dans le quotient",
          "stepBadge": "L'ordre des points dans le quotient",
          "paragraphText": "• $\\arg\\left(\\frac{z_A - z_B}{z_C - z_D}\\right)$ mesure l'angle $(\\overrightarrow{DC} ; \\overrightarrow{BA})$ : le numérateur donne le second vecteur, le dénominateur le premier.\nPiège : inverser le numérateur et le dénominateur change le signe de l'angle (on obtient l'angle opposé).\nExemple : $\\arg\\left(\\frac{z_C - z_B}{z_A - z_B}\\right)$ mesure l'angle $(\\overrightarrow{BA} ; \\overrightarrow{BC})$, l'opposé de l'angle $(\\overrightarrow{BC} ; \\overrightarrow{BA})$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01_q6",
            "type": "mcq",
            "prompt": "Que mesure $\\arg\\left(\\frac{z_C - z_B}{z_A - z_B}\\right)$ ?",
            "options": [
              "L'angle orienté $(\\overrightarrow{BA} ; \\overrightarrow{BC})$",
              "L'angle orienté $(\\overrightarrow{BC} ; \\overrightarrow{BA})$",
              "Le rapport $\\frac{BC}{BA}$",
              "La distance $BC$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le numérateur donne le second vecteur et le dénominateur le premier : $\\arg\\left(\\frac{z_C - z_B}{z_A - z_B}\\right)$ mesure $(\\overrightarrow{BA} ; \\overrightarrow{BC})$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01_q1",
          "type": "mcq",
          "prompt": "Que mesure $\\arg\\left(\\frac{z_A - z_B}{z_C - z_D}\\right)$ ?",
          "options": [
            "L'angle orienté $(\\overrightarrow{DC} ; \\overrightarrow{BA})$",
            "L'angle orienté $(\\overrightarrow{AB} ; \\overrightarrow{CD})$",
            "Le rapport des distances $\\frac{AB}{CD}$",
            "La distance $AB$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\arg\\left(\\frac{z_A - z_B}{z_C - z_D}\\right)$ est une mesure de l'angle orienté $(\\overrightarrow{DC} ; \\overrightarrow{BA})$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01_q2",
          "type": "mcq",
          "prompt": "Pour $A = -1 + i\\sqrt{3}$, $B = 2$ et $C = -1 - i\\sqrt{3}$, quelle est la mesure principale de l'angle orienté $(\\overrightarrow{BC} ; \\overrightarrow{BA})$ ?",
          "options": [
            "$-\\frac{\\pi}{3}$",
            "$\\frac{\\pi}{3}$",
            "$\\frac{2\\pi}{3}$",
            "$-\\frac{2\\pi}{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{z_A - z_B}{z_C - z_B} = \\frac{1 - i\\sqrt{3}}{2} = e^{-i\\frac{\\pi}{3}}$ : la mesure principale est $-\\frac{\\pi}{3}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01_q3",
          "type": "mcq",
          "prompt": "Pour $A = -1 + i\\sqrt{3}$, $B = 2$ et $C = -1 - i\\sqrt{3}$, que vaut $\\left|\\frac{z_A - z_B}{z_C - z_B}\\right|$ et qu'en déduit-on ?",
          "options": [
            "$1$ : on en déduit $AB = BC$",
            "$\\sqrt{3}$ : on en déduit $AB = \\sqrt{3}BC$",
            "$\\frac{1}{2}$ : on en déduit $AB = \\frac{1}{2}BC$",
            "$2$ : on en déduit $AB = 2BC$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\left|\\frac{1 - i\\sqrt{3}}{2}\\right| = \\sqrt{\\frac{1}{4} + \\frac{3}{4}} = 1$ : $\\frac{AB}{BC} = 1$ donc $AB = BC$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01_q4",
          "type": "mcq",
          "prompt": "Pour $A = -1 + i\\sqrt{3}$, $B = 2$ et $C = -1 - i\\sqrt{3}$, pourquoi le triangle $ABC$ est-il équilatéral ?",
          "options": [
            "Parce que $\\frac{z_A - z_B}{z_C - z_B} = e^{-i\\frac{\\pi}{3}}$ : $AB = BC$ et l'angle en $B$ vaut $\\frac{\\pi}{3}$",
            "Parce que $AB = AC = 2$",
            "Parce que les trois affixes ont le même module",
            "Parce que $A$, $B$ et $C$ sont alignés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le quotient vaut $e^{-i\\frac{\\pi}{3}}$ : son module $1$ donne $AB = BC$ et son argument $-\\frac{\\pi}{3}$ donne l'angle en $B$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01_q5",
          "type": "mcq",
          "prompt": "Que donnent le module et l'argument du quotient $\\frac{z_A - z_B}{z_C - z_B}$ ?",
          "options": [
            "Le module donne $\\frac{AB}{BC}$ et l'argument donne l'angle en $B$",
            "Le module donne l'angle en $B$ et l'argument donne $\\frac{AB}{BC}$",
            "Le module donne $AB$ et l'argument donne $BC$",
            "Le module donne l'aire et l'argument donne le périmètre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le module du quotient est le rapport des distances $\\frac{AB}{BC}$ et son argument est l'angle orienté en $B$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p01_q6",
          "type": "mcq",
          "prompt": "Que mesure $\\arg\\left(\\frac{z_C - z_B}{z_A - z_B}\\right)$ ?",
          "options": [
            "L'angle orienté $(\\overrightarrow{BA} ; \\overrightarrow{BC})$",
            "L'angle orienté $(\\overrightarrow{BC} ; \\overrightarrow{BA})$",
            "Le rapport $\\frac{BC}{BA}$",
            "La distance $BC$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le numérateur donne le second vecteur et le dénominateur le premier : $\\arg\\left(\\frac{z_C - z_B}{z_A - z_B}\\right)$ mesure $(\\overrightarrow{BA} ; \\overrightarrow{BC})$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02",
      "order": 2,
      "title": "Ensembles de points et nombres complexes",
      "summary": "Une équation en z décrit un cercle, une médiatrice, une droite ou une demi-droite.",
      "conceptExplanation": "Tableau récapitulatif (le plan est muni d'un repère orthonormé direct, $A$ et $B$ deux points distincts d'affixes $z_A$ et $z_B$, $M$ un point d'affixe $z$) :\n- $|z - z_A| = r$ ($r > 0$) : $AM = r$ — le cercle de centre $A$ et de rayon $r$.\n- $|z - z_A| = \\lambda|z - z_B|$ ($\\lambda > 0$) : $AM = \\lambda BM$ — la médiatrice du segment $[AB]$ lorsque $\\lambda = 1$ ; le cercle de diamètre $[G_1G_2]$ lorsque $\\lambda \\neq 1$, où $G_1 = \\mathrm{bar}\\{(A ; 1), (B ; \\lambda)\\}$ et $G_2 = \\mathrm{bar}\\{(A ; 1), (B ; -\\lambda)\\}$.\n- $\\arg\\left(\\frac{z_B - z}{z_A - z}\\right) = k\\pi$ : $\\mathrm{mes}(\\overrightarrow{MA} ; \\overrightarrow{MB}) = k\\pi$ — la droite $(AB)$ privée des points $A$ et $B$.\n- $\\arg\\left(\\frac{z_B - z}{z_A - z}\\right) = \\frac{\\pi}{2} + k\\pi$ : $\\mathrm{mes}(\\overrightarrow{MA} ; \\overrightarrow{MB}) = \\frac{\\pi}{2} + k\\pi$ — le cercle de diamètre $[AB]$ privé des points $A$ et $B$.\n- $\\arg(z - z_A) = \\alpha + k\\pi$ : $\\mathrm{mes}(\\vec{e_1} ; \\overrightarrow{AM}) = \\alpha + k\\pi$ — la droite de repère $(A, \\vec{u})$ privée de $A$, où $\\mathrm{mes}(\\vec{e_1} ; \\vec{u}) = \\alpha$.\n- $\\arg(z - z_A) = \\alpha + 2k\\pi$ : $\\mathrm{mes}(\\vec{e_1} ; \\overrightarrow{AM}) = \\alpha + 2k\\pi$ — la demi-droite de repère $(A, \\vec{u})$ privée de $A$, où $\\mathrm{mes}(\\vec{e_1} ; \\vec{u}) = \\alpha$.",
      "keyRule": "|z−z_A| = r : cercle. |z−z_A| = |z−z_B| : médiatrice. arg = π/2 : cercle de diamètre. arg = α [2π] : demi-droite.",
      "formulas": [
        {
          "name": "Cercle de centre A",
          "formula": "|z - z_A| = r \\iff AM = r",
          "note": "r > 0 : cercle de centre A et de rayon r."
        },
        {
          "name": "Cercle de diamètre [AB]",
          "formula": "\\arg\\left(\\frac{z_B - z}{z_A - z}\\right) = \\frac{\\pi}{2} + k\\pi \\iff M \\text{ sur le cercle de diamètre } [AB]",
          "note": "Privé des points A et B."
        }
      ],
      "workedExample": {
        "title": "L'ensemble défini par $|2iz - 3 + 2i| = |z - 2|$",
        "statement": "Détermine l'ensemble des points $M$ d'affixe $z$ vérifiant $|2iz - 3 + 2i| = |z - 2|$.",
        "methodSteps": [
          "On factorise : $2iz - 3 + 2i = 2i\\left(z + 1 + \\frac{3}{2}i\\right)$, donc $|2iz - 3 + 2i| = 2\\left|z - \\left(-1 - \\frac{3}{2}i\\right)\\right|$.",
          "L'équation devient $2|z - z_B| = |z - z_A|$ avec $z_A = 2$ et $z_B = -1 - \\frac{3}{2}i$, soit $\\frac{MA}{MB} = 2$.",
          "C'est le cercle de diamètre $[HK]$ où $H = \\mathrm{bar}\\{(A ; 1), (B ; 2)\\}$ et $K = \\mathrm{bar}\\{(A ; 1), (B ; -2)\\}$.",
          "On calcule $z_H = \\frac{2 + 2(-1 - \\frac{3}{2}i)}{3} = -i$ et $z_K = \\frac{2 - 2(-1 - \\frac{3}{2}i)}{-1} = -4 - 3i$."
        ],
        "conclusion": "L'ensemble est le cercle de diamètre $[HK]$ avec $z_H = -i$ et $z_K = -4 - 3i$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le cercle $|z - z_A| = r$",
          "stepTheme": "Le cercle $|z - z_A| = r$",
          "stepBadge": "Le cercle $|z - z_A| = r$",
          "paragraphText": "• $|z - z_A| = r$ (avec $r > 0$) signifie $AM = r$ : l'ensemble des points $M$ est le cercle de centre $A$ et de rayon $r$.\nExemple : $|z - 2i| = 3$ est le cercle de centre le point $A$ d'affixe $2i$ et de rayon $3$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02_q1",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des points $M$ d'affixe $z$ vérifiant $|z - 2i| = 3$ ?",
            "options": [
              "Le cercle de centre le point d'affixe $2i$ et de rayon $3$",
              "La droite passant par le point d'affixe $2i$",
              "Le point d'affixe $2i$",
              "La médiatrice du segment joignant $O$ au point d'affixe $2i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|z - 2i| = 3$ signifie $AM = 3$ où $A$ est le point d'affixe $2i$ : c'est le cercle de centre $A$ et de rayon $3$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La médiatrice $|z - z_A| = |z - z_B|$",
          "stepTheme": "La médiatrice $|z - z_A| = |z - z_B|$",
          "stepBadge": "La médiatrice $|z - z_A| = |z - z_B|$",
          "paragraphText": "• $|z - z_A| = |z - z_B|$ signifie $AM = BM$ : l'ensemble des points $M$ est la médiatrice du segment $[AB]$.\nExemple : $|z - 1 + i| = |z + 1 + 3i|$ donne $|z - (1 - i)| = |z - (-1 - 3i)|$ : c'est la médiatrice du segment $[PQ]$ où $P$ et $Q$ ont pour affixes $1 - i$ et $-1 - 3i$.\nSi $\\lambda \\neq 1$, $|z - z_A| = \\lambda|z - z_B|$ donne le cercle de diamètre $[G_1G_2]$ (cercle d'Apollonius).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02_q2",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des points $M$ d'affixe $z$ vérifiant $|z - z_A| = |z - z_B|$ (avec $A \\neq B$) ?",
            "options": [
              "La médiatrice du segment $[AB]$",
              "Le cercle de centre $A$ et de rayon $AB$",
              "La droite $(AB)$",
              "Le cercle de diamètre $[AB]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|z - z_A| = |z - z_B|$ signifie $AM = BM$ : c'est la médiatrice du segment $[AB]$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le cercle de diamètre $[AB]$",
          "stepTheme": "Le cercle de diamètre $[AB]$",
          "stepBadge": "Le cercle de diamètre $[AB]$",
          "paragraphText": "• $\\arg\\left(\\frac{z_B - z}{z_A - z}\\right) = \\frac{\\pi}{2} + k\\pi$ signifie que l'angle $(\\overrightarrow{MA} ; \\overrightarrow{MB})$ est droit : l'ensemble est le cercle de diamètre $[AB]$ privé des points $A$ et $B$.\n• $\\arg\\left(\\frac{z_B - z}{z_A - z}\\right) = k\\pi$ signifie que les points sont alignés : l'ensemble est la droite $(AB)$ privée des points $A$ et $B$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des points $M$ vérifiant $\\arg\\left(\\frac{z_B - z}{z_A - z}\\right) = \\frac{\\pi}{2} + k\\pi$ ?",
            "options": [
              "Le cercle de diamètre $[AB]$ privé des points $A$ et $B$",
              "La droite $(AB)$ privée des points $A$ et $B$",
              "La médiatrice du segment $[AB]$",
              "Le cercle de centre $A$ et de rayon $AB$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'angle $(\\overrightarrow{MA} ; \\overrightarrow{MB})$ est droit : $M$ est sur le cercle de diamètre $[AB]$, privé de $A$ et $B$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Droite et demi-droite par l'argument",
          "stepTheme": "Droite et demi-droite par l'argument",
          "stepBadge": "Droite et demi-droite par l'argument",
          "paragraphText": "• $\\arg(z - z_A) = \\alpha + k\\pi$ : l'ensemble est la droite de repère $(A, \\vec{u})$ privée de $A$, où $\\mathrm{mes}(\\vec{e_1} ; \\vec{u}) = \\alpha$.\n• $\\arg(z - z_A) = \\alpha + 2k\\pi$ : l'ensemble est la demi-droite de repère $(A, \\vec{u})$ privée de $A$.\nExemple : $\\arg(z - 1 - i) \\equiv \\frac{\\pi}{6} \\ [2\\pi]$ donne la demi-droite d'origine $A(1 + i)$ privée de $A$, de direction faisant un angle de $\\frac{\\pi}{6}$ avec $\\vec{u}$.\nLa différence : modulo $\\pi$ on obtient une droite entière, modulo $2\\pi$ une demi-droite.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des points $M$ vérifiant $\\arg(z - 1 - i) \\equiv \\frac{\\pi}{6} \\ [2\\pi]$ ?",
            "options": [
              "La demi-droite d'origine $A(1 + i)$ privée de $A$, de direction d'angle $\\frac{\\pi}{6}$",
              "La droite passant par $A(1 + i)$ de direction d'angle $\\frac{\\pi}{6}$",
              "Le cercle de centre $A(1 + i)$ et de rayon $\\frac{\\pi}{6}$",
              "Le point $A(1 + i)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'argument est fixé modulo $2\\pi$ : c'est la demi-droite d'origine $A$ privée de $A$, de direction faisant un angle de $\\frac{\\pi}{6}$ avec l'axe réel."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le cercle de $|2iz - 3 + 2i| = |z - 2|$",
          "stepTheme": "Le cercle de $|2iz - 3 + 2i| = |z - 2|$",
          "stepBadge": "Le cercle de $|2iz - 3 + 2i| = |z - 2|$",
          "paragraphText": "• $|2iz - 3 + 2i| = |z - 2|$ : on factorise $2iz - 3 + 2i = 2i\\left(z + 1 + \\frac{3}{2}i\\right)$, donc l'équation devient $2|z - z_B| = |z - z_A|$ avec $z_A = 2$ et $z_B = -1 - \\frac{3}{2}i$.\nC'est le cercle de diamètre $[HK]$ où $H = \\mathrm{bar}\\{(A ; 1), (B ; 2)\\}$ et $K = \\mathrm{bar}\\{(A ; 1), (B ; -2)\\}$.\nOn calcule $z_H = -i$ et $z_K = -4 - 3i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02_q5",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des points $M$ vérifiant $|2iz - 3 + 2i| = |z - 2|$ ?",
            "options": [
              "Le cercle de diamètre $[HK]$ avec $z_H = -i$ et $z_K = -4 - 3i$",
              "La médiatrice du segment joignant les points d'affixes $2$ et $-1 - \\frac{3}{2}i$",
              "Le cercle de centre le point d'affixe $2$ et de rayon $2$",
              "La droite passant par les points d'affixes $2$ et $-1 - \\frac{3}{2}i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'équation équivaut à $\\frac{MA}{MB} = 2$ : c'est le cercle de diamètre $[HK]$ avec $z_H = -i$ et $z_K = -4 - 3i$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier de retirer les points interdits",
          "stepTheme": "Ne pas oublier de retirer les points interdits",
          "stepBadge": "Ne pas oublier de retirer les points interdits",
          "paragraphText": "• Dans les caractérisations par l'argument, les points $A$ et $B$ sont exclus : le quotient $\\frac{z_B - z}{z_A - z}$ n'existe pas en $z = z_A$.\nLe cercle de diamètre $[AB]$ est donc privé des points $A$ et $B$ ; la droite $(AB)$ aussi.\nPiège : donner le cercle ou la droite entière sans retirer $A$ et $B$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02_q6",
            "type": "mcq",
            "prompt": "Pourquoi le cercle de diamètre $[AB]$ défini par $\\arg\\left(\\frac{z_B - z}{z_A - z}\\right) = \\frac{\\pi}{2} + k\\pi$ est-il privé des points $A$ et $B$ ?",
            "options": [
              "Parce que le quotient $\\frac{z_B - z}{z_A - z}$ n'existe pas en $z = z_A$ et l'angle n'est pas défini en $B$",
              "Parce que $A$ et $B$ ne sont pas sur le cercle",
              "Parce que l'angle droit n'existe pas en $A$ et $B$",
              "Parce que le cercle est ouvert"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En $z = z_A$, le dénominateur s'annule ; en $z = z_B$, le vecteur $\\overrightarrow{MB}$ est nul : l'angle n'est pas défini."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02_q1",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des points $M$ d'affixe $z$ vérifiant $|z - 2i| = 3$ ?",
          "options": [
            "Le cercle de centre le point d'affixe $2i$ et de rayon $3$",
            "La droite passant par le point d'affixe $2i$",
            "Le point d'affixe $2i$",
            "La médiatrice du segment joignant $O$ au point d'affixe $2i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|z - 2i| = 3$ signifie $AM = 3$ où $A$ est le point d'affixe $2i$ : c'est le cercle de centre $A$ et de rayon $3$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02_q2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des points $M$ d'affixe $z$ vérifiant $|z - z_A| = |z - z_B|$ (avec $A \\neq B$) ?",
          "options": [
            "La médiatrice du segment $[AB]$",
            "Le cercle de centre $A$ et de rayon $AB$",
            "La droite $(AB)$",
            "Le cercle de diamètre $[AB]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|z - z_A| = |z - z_B|$ signifie $AM = BM$ : c'est la médiatrice du segment $[AB]$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des points $M$ vérifiant $\\arg\\left(\\frac{z_B - z}{z_A - z}\\right) = \\frac{\\pi}{2} + k\\pi$ ?",
          "options": [
            "Le cercle de diamètre $[AB]$ privé des points $A$ et $B$",
            "La droite $(AB)$ privée des points $A$ et $B$",
            "La médiatrice du segment $[AB]$",
            "Le cercle de centre $A$ et de rayon $AB$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'angle $(\\overrightarrow{MA} ; \\overrightarrow{MB})$ est droit : $M$ est sur le cercle de diamètre $[AB]$, privé de $A$ et $B$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des points $M$ vérifiant $\\arg(z - 1 - i) \\equiv \\frac{\\pi}{6} \\ [2\\pi]$ ?",
          "options": [
            "La demi-droite d'origine $A(1 + i)$ privée de $A$, de direction d'angle $\\frac{\\pi}{6}$",
            "La droite passant par $A(1 + i)$ de direction d'angle $\\frac{\\pi}{6}$",
            "Le cercle de centre $A(1 + i)$ et de rayon $\\frac{\\pi}{6}$",
            "Le point $A(1 + i)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'argument est fixé modulo $2\\pi$ : c'est la demi-droite d'origine $A$ privée de $A$, de direction faisant un angle de $\\frac{\\pi}{6}$ avec l'axe réel."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02_q5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des points $M$ vérifiant $|2iz - 3 + 2i| = |z - 2|$ ?",
          "options": [
            "Le cercle de diamètre $[HK]$ avec $z_H = -i$ et $z_K = -4 - 3i$",
            "La médiatrice du segment joignant les points d'affixes $2$ et $-1 - \\frac{3}{2}i$",
            "Le cercle de centre le point d'affixe $2$ et de rayon $2$",
            "La droite passant par les points d'affixes $2$ et $-1 - \\frac{3}{2}i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'équation équivaut à $\\frac{MA}{MB} = 2$ : c'est le cercle de diamètre $[HK]$ avec $z_H = -i$ et $z_K = -4 - 3i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p02_q6",
          "type": "mcq",
          "prompt": "Pourquoi le cercle de diamètre $[AB]$ défini par $\\arg\\left(\\frac{z_B - z}{z_A - z}\\right) = \\frac{\\pi}{2} + k\\pi$ est-il privé des points $A$ et $B$ ?",
          "options": [
            "Parce que le quotient $\\frac{z_B - z}{z_A - z}$ n'existe pas en $z = z_A$ et l'angle n'est pas défini en $B$",
            "Parce que $A$ et $B$ ne sont pas sur le cercle",
            "Parce que l'angle droit n'existe pas en $A$ et $B$",
            "Parce que le cercle est ouvert"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En $z = z_A$, le dénominateur s'annule ; en $z = z_B$, le vecteur $\\overrightarrow{MB}$ est nul : l'angle n'est pas défini."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03",
      "order": 3,
      "title": "Configurations : parallélisme, alignement, perpendicularité, cocyclicité",
      "summary": "Un quotient réel donne le parallélisme ou l'alignement ; un quotient imaginaire pur donne la perpendicularité ; un birapport réel donne la cocyclicité.",
      "conceptExplanation": "Droites parallèles : $A$, $B$, $C$, $D$ avec $A \\neq B$ et $C \\neq D$. Les droites $(AB)$ et $(CD)$ sont parallèles si et seulement si $\\frac{z_D - z_C}{z_B - z_A} \\in \\mathbb{R}^*$.\nAlignement : $A$, $B$, $C$ avec $A \\neq B$ et $B \\neq C$. Les points $A$, $B$ et $C$ sont alignés si et seulement si $\\frac{z_A - z_B}{z_C - z_B} \\in \\mathbb{R}^*$.\nDroites perpendiculaires : $A$, $B$, $C$, $D$ avec $A \\neq B$ et $C \\neq D$. Les droites $(AB)$ et $(CD)$ sont perpendiculaires si et seulement si $\\frac{z_D - z_C}{z_B - z_A} \\in i\\mathbb{R}^*$.\nPoints cocycliques : $A$, $B$, $C$, $D$ deux à deux distincts et non alignés. Ils sont cocycliques si et seulement si $\\frac{z_D - z_C}{z_D - z_A} : \\frac{z_B - z_C}{z_B - z_A} \\in \\mathbb{R}^*$.",
      "keyRule": "Quotient réel : parallèles ou alignés. Quotient imaginaire pur : perpendiculaires. Birapport réel : cocycliques.",
      "formulas": [
        {
          "name": "Parallélisme et alignement",
          "formula": "(AB) \\parallel (CD) \\iff \\frac{z_D - z_C}{z_B - z_A} \\in \\mathbb{R}^*,\\quad A, B, C \\text{ alignés } \\iff \\frac{z_A - z_B}{z_C - z_B} \\in \\mathbb{R}^*",
          "note": "Le quotient doit être réel non nul."
        },
        {
          "name": "Perpendicularité et cocyclicité",
          "formula": "(AB) \\perp (CD) \\iff \\frac{z_D - z_C}{z_B - z_A} \\in i\\mathbb{R}^*,\\quad A, B, C, D \\text{ cocycliques } \\iff \\frac{z_D - z_C}{z_D - z_A} : \\frac{z_B - z_C}{z_B - z_A} \\in \\mathbb{R}^*",
          "note": "Le quotient doit être imaginaire pur non nul, le birapport réel non nul."
        }
      ],
      "workedExample": {
        "title": "Les droites (AD) et (BC) sont parallèles",
        "statement": "On considère les points $A$, $B$, $C$ et $D$ d'affixes respectives $5 + i$, $-2$, $1 + i$ et $-4 - 2i$. Démontre que les droites $(AD)$ et $(BC)$ sont parallèles.",
        "methodSteps": [
          "On calcule $\\frac{z_D - z_A}{z_C - z_B} = \\frac{-9 - 3i}{3 + i}$.",
          "Or $\\frac{-9 - 3i}{3 + i} = \\frac{-3(3 + i)}{3 + i} = -3$.",
          "Donc $\\frac{z_D - z_A}{z_C - z_B} = -3 \\in \\mathbb{R}^*$ : les droites $(AD)$ et $(BC)$ sont parallèles."
        ],
        "conclusion": "Les droites (AD) et (BC) sont parallèles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les droites parallèles",
          "stepTheme": "Les droites parallèles",
          "stepBadge": "Les droites parallèles",
          "paragraphText": "• Les droites $(AB)$ et $(CD)$ sont parallèles si et seulement si $\\frac{z_D - z_C}{z_B - z_A} \\in \\mathbb{R}^*$.\nExemple : pour $A = 5 + i$, $B = -2$, $C = 1 + i$, $D = -4 - 2i$, on a $\\frac{z_D - z_A}{z_C - z_B} = \\frac{-9 - 3i}{3 + i} = -3 \\in \\mathbb{R}^*$ : les droites $(AD)$ et $(BC)$ sont parallèles.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03_q1",
            "type": "mcq",
            "prompt": "Pour $A = 5 + i$, $B = -2$, $C = 1 + i$, $D = -4 - 2i$, que vaut $\\frac{z_D - z_A}{z_C - z_B}$ et qu'en déduit-on ?",
            "options": [
              "$-3$ : les droites $(AD)$ et $(BC)$ sont parallèles",
              "$3i$ : les droites $(AD)$ et $(BC)$ sont perpendiculaires",
              "$-3i$ : les droites $(AD)$ et $(BC)$ sont perpendiculaires",
              "$3$ : les points sont alignés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{-9 - 3i}{3 + i} = -3 \\in \\mathbb{R}^*$ : les droites $(AD)$ et $(BC)$ sont parallèles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'alignement de trois points",
          "stepTheme": "L'alignement de trois points",
          "stepBadge": "L'alignement de trois points",
          "paragraphText": "• Les points $A$, $B$ et $C$ sont alignés si et seulement si $\\frac{z_A - z_B}{z_C - z_B} \\in \\mathbb{R}^*$.\nExemple : pour $A = 2 + i\\sqrt{3}$, $B = -1$, $C = 11 + 4i\\sqrt{3}$, on a $\\frac{z_A - z_B}{z_C - z_B} = \\frac{3 + i\\sqrt{3}}{12 + 4i\\sqrt{3}} = \\frac{1}{4} \\in \\mathbb{R}^*$ : les points $A$, $B$ et $C$ sont alignés.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03_q2",
            "type": "mcq",
            "prompt": "Pour $A = 2 + i\\sqrt{3}$, $B = -1$, $C = 11 + 4i\\sqrt{3}$, que vaut $\\frac{z_A - z_B}{z_C - z_B}$ et qu'en déduit-on ?",
            "options": [
              "$\\frac{1}{4}$ : les points $A$, $B$ et $C$ sont alignés",
              "$4$ : les points $A$, $B$ et $C$ sont alignés",
              "$\\frac{i}{4}$ : les droites sont perpendiculaires",
              "$-\\frac{1}{4}$ : les points ne sont pas alignés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{3 + i\\sqrt{3}}{12 + 4i\\sqrt{3}} = \\frac{1}{4} \\in \\mathbb{R}^*$ : les points $A$, $B$ et $C$ sont alignés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les droites perpendiculaires",
          "stepTheme": "Les droites perpendiculaires",
          "stepBadge": "Les droites perpendiculaires",
          "paragraphText": "• Les droites $(AB)$ et $(CD)$ sont perpendiculaires si et seulement si $\\frac{z_D - z_C}{z_B - z_A} \\in i\\mathbb{R}^*$.\nExemple : pour $A = -3 - i$, $B = -2 + 4i$, $C = 3 - i$, $H = -2$, on a $\\frac{z_B - z_C}{z_H - z_A} = \\frac{-5 + 5i}{1 + i} = 5i \\in i\\mathbb{R}^*$ : les droites $(AH)$ et $(BC)$ sont perpendiculaires.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03_q3",
            "type": "mcq",
            "prompt": "Pour $A = -3 - i$, $B = -2 + 4i$, $C = 3 - i$, $H = -2$, que vaut $\\frac{z_B - z_C}{z_H - z_A}$ et qu'en déduit-on ?",
            "options": [
              "$5i$ : les droites $(AH)$ et $(BC)$ sont perpendiculaires",
              "$5$ : les droites $(AH)$ et $(BC)$ sont parallèles",
              "$-5i$ : les droites $(AH)$ et $(BC)$ sont parallèles",
              "$1 + i$ : les points sont alignés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{-5 + 5i}{1 + i} = 5i \\in i\\mathbb{R}^*$ : les droites $(AH)$ et $(BC)$ sont perpendiculaires."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les droites (AB) et (CD) parallèles, (OK) et (DC) perpendiculaires",
          "stepTheme": "Les droites (AB) et (CD) parallèles, (OK) et (DC) perpendiculaires",
          "stepBadge": "Les droites (AB) et (CD) parallèles, (OK) et (DC) perpendiculaires",
          "paragraphText": "• Soient $A = 2 + i$, $B = 2 - i$, $C = 5 - 2i$, $D = 5 + 2i$ et $K = 4$.\n$\\frac{z_D - z_C}{z_B - z_A} = \\frac{4i}{-2i} = -2 \\in \\mathbb{R}^*$ : les droites $(AB)$ et $(CD)$ sont parallèles.\n$\\frac{z_D - z_C}{z_K - z_O} = \\frac{4i}{4} = i \\in i\\mathbb{R}^*$ : les droites $(OK)$ et $(DC)$ sont perpendiculaires.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03_q4",
            "type": "mcq",
            "prompt": "Pour $A = 2 + i$, $B = 2 - i$, $C = 5 - 2i$, $D = 5 + 2i$ et $K = 4$, que vaut $\\frac{z_D - z_C}{z_K - z_O}$ et qu'en déduit-on ?",
            "options": [
              "$i$ : les droites $(OK)$ et $(DC)$ sont perpendiculaires",
              "$-2$ : les droites $(OK)$ et $(DC)$ sont parallèles",
              "$1$ : les points sont alignés",
              "$4i$ : les droites $(OK)$ et $(DC)$ sont parallèles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{4i}{4} = i \\in i\\mathbb{R}^*$ : les droites $(OK)$ et $(DC)$ sont perpendiculaires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les points cocycliques",
          "stepTheme": "Les points cocycliques",
          "stepBadge": "Les points cocycliques",
          "paragraphText": "• Quatre points $A$, $B$, $C$, $D$ deux à deux distincts et non alignés sont cocycliques si et seulement si $\\frac{z_D - z_C}{z_D - z_A} : \\frac{z_B - z_C}{z_B - z_A} \\in \\mathbb{R}^*$.\nExemple : pour $A = -2i$, $B = 7 - i$, $C = 8 + 2i$, $D = -1 + 5i$, on a $\\frac{z_D - z_A}{z_B - z_A} = i$ et $\\frac{z_D - z_C}{z_B - z_C} = -3i$, donc le birapport vaut $\\frac{i}{-3i} = -\\frac{1}{3} \\in \\mathbb{R}^*$ : les points sont cocycliques.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03_q5",
            "type": "mcq",
            "prompt": "Pour $A = -2i$, $B = 7 - i$, $C = 8 + 2i$, $D = -1 + 5i$, que vaut le birapport $\\frac{z_D - z_A}{z_B - z_A} : \\frac{z_D - z_C}{z_B - z_C}$ et qu'en déduit-on ?",
            "options": [
              "$-\\frac{1}{3}$ : les points $A$, $B$, $C$ et $D$ sont cocycliques",
              "$i$ : les points ne sont pas cocycliques",
              "$-3$ : les points sont alignés",
              "$\\frac{1}{3}$ : les droites sont parallèles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{i}{-3i} = -\\frac{1}{3} \\in \\mathbb{R}^*$ : les points $A$, $B$, $C$ et $D$ sont cocycliques."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Quatre points cocycliques : deuxième exemple",
          "stepTheme": "Quatre points cocycliques : deuxième exemple",
          "stepBadge": "Quatre points cocycliques : deuxième exemple",
          "paragraphText": "• Soient $A = 2 + i$, $B = 2 - i$, $C = 5 - 2i$ et $D = 5 + 2i$.\nOn calcule $\\frac{z_D - z_C}{z_D - z_A} : \\frac{z_B - z_C}{z_B - z_A} = \\frac{4i}{3 + i} : \\frac{-3 + i}{-2i} = -\\frac{4}{5}$.\nComme $-\\frac{4}{5} \\in \\mathbb{R}^*$, les points $A$, $B$, $C$ et $D$ sont cocycliques.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03_q6",
            "type": "mcq",
            "prompt": "Pour $A = 2 + i$, $B = 2 - i$, $C = 5 - 2i$, $D = 5 + 2i$, que vaut le birapport $\\frac{z_D - z_C}{z_D - z_A} : \\frac{z_B - z_C}{z_B - z_A}$ ?",
            "options": [
              "$-\\frac{4}{5}$",
              "$-\\frac{2}{5}$",
              "$\\frac{4}{5}i$",
              "$-\\frac{4}{5}i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{4i}{3 + i} : \\frac{-3 + i}{-2i} = \\frac{8}{-10} = -\\frac{4}{5} \\in \\mathbb{R}^*$ : les points sont cocycliques."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03_q1",
          "type": "mcq",
          "prompt": "Pour $A = 5 + i$, $B = -2$, $C = 1 + i$, $D = -4 - 2i$, que vaut $\\frac{z_D - z_A}{z_C - z_B}$ et qu'en déduit-on ?",
          "options": [
            "$-3$ : les droites $(AD)$ et $(BC)$ sont parallèles",
            "$3i$ : les droites $(AD)$ et $(BC)$ sont perpendiculaires",
            "$-3i$ : les droites $(AD)$ et $(BC)$ sont perpendiculaires",
            "$3$ : les points sont alignés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{-9 - 3i}{3 + i} = -3 \\in \\mathbb{R}^*$ : les droites $(AD)$ et $(BC)$ sont parallèles."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03_q2",
          "type": "mcq",
          "prompt": "Pour $A = 2 + i\\sqrt{3}$, $B = -1$, $C = 11 + 4i\\sqrt{3}$, que vaut $\\frac{z_A - z_B}{z_C - z_B}$ et qu'en déduit-on ?",
          "options": [
            "$\\frac{1}{4}$ : les points $A$, $B$ et $C$ sont alignés",
            "$4$ : les points $A$, $B$ et $C$ sont alignés",
            "$\\frac{i}{4}$ : les droites sont perpendiculaires",
            "$-\\frac{1}{4}$ : les points ne sont pas alignés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{3 + i\\sqrt{3}}{12 + 4i\\sqrt{3}} = \\frac{1}{4} \\in \\mathbb{R}^*$ : les points $A$, $B$ et $C$ sont alignés."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03_q3",
          "type": "mcq",
          "prompt": "Pour $A = -3 - i$, $B = -2 + 4i$, $C = 3 - i$, $H = -2$, que vaut $\\frac{z_B - z_C}{z_H - z_A}$ et qu'en déduit-on ?",
          "options": [
            "$5i$ : les droites $(AH)$ et $(BC)$ sont perpendiculaires",
            "$5$ : les droites $(AH)$ et $(BC)$ sont parallèles",
            "$-5i$ : les droites $(AH)$ et $(BC)$ sont parallèles",
            "$1 + i$ : les points sont alignés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{-5 + 5i}{1 + i} = 5i \\in i\\mathbb{R}^*$ : les droites $(AH)$ et $(BC)$ sont perpendiculaires."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03_q4",
          "type": "mcq",
          "prompt": "Pour $A = 2 + i$, $B = 2 - i$, $C = 5 - 2i$, $D = 5 + 2i$ et $K = 4$, que vaut $\\frac{z_D - z_C}{z_K - z_O}$ et qu'en déduit-on ?",
          "options": [
            "$i$ : les droites $(OK)$ et $(DC)$ sont perpendiculaires",
            "$-2$ : les droites $(OK)$ et $(DC)$ sont parallèles",
            "$1$ : les points sont alignés",
            "$4i$ : les droites $(OK)$ et $(DC)$ sont parallèles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{4i}{4} = i \\in i\\mathbb{R}^*$ : les droites $(OK)$ et $(DC)$ sont perpendiculaires."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03_q5",
          "type": "mcq",
          "prompt": "Pour $A = -2i$, $B = 7 - i$, $C = 8 + 2i$, $D = -1 + 5i$, que vaut le birapport $\\frac{z_D - z_A}{z_B - z_A} : \\frac{z_D - z_C}{z_B - z_C}$ et qu'en déduit-on ?",
          "options": [
            "$-\\frac{1}{3}$ : les points $A$, $B$, $C$ et $D$ sont cocycliques",
            "$i$ : les points ne sont pas cocycliques",
            "$-3$ : les points sont alignés",
            "$\\frac{1}{3}$ : les droites sont parallèles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{i}{-3i} = -\\frac{1}{3} \\in \\mathbb{R}^*$ : les points $A$, $B$, $C$ et $D$ sont cocycliques."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p03_q6",
          "type": "mcq",
          "prompt": "Pour $A = 2 + i$, $B = 2 - i$, $C = 5 - 2i$, $D = 5 + 2i$, que vaut le birapport $\\frac{z_D - z_C}{z_D - z_A} : \\frac{z_B - z_C}{z_B - z_A}$ ?",
          "options": [
            "$-\\frac{4}{5}$",
            "$-\\frac{2}{5}$",
            "$\\frac{4}{5}i$",
            "$-\\frac{4}{5}i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{4i}{3 + i} : \\frac{-3 + i}{-2i} = \\frac{8}{-10} = -\\frac{4}{5} \\in \\mathbb{R}^*$ : les points sont cocycliques."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04",
      "order": 4,
      "title": "Triangles particuliers",
      "summary": "Un quotient imaginaire pur donne un triangle rectangle ; un quotient e^{±iπ/3} donne un triangle équilatéral.",
      "conceptExplanation": "Soient $A$, $B$ et $C$ trois points non alignés d'affixes $z_A$, $z_B$ et $z_C$.\n- Le triangle $ABC$ est rectangle en $A$ si et seulement si $\\frac{z_B - z_A}{z_C - z_A} \\in i\\mathbb{R}^*$.\n- Le triangle $ABC$ est isocèle en $A$ si et seulement si $\\frac{z_C - z_A}{z_B - z_A} = e^{i\\alpha}$ ou $\\frac{z_C - z_A}{z_B - z_A} = e^{-i\\alpha}$, avec $0 < \\alpha < \\pi$.\n- Le triangle $ABC$ est rectangle et isocèle en $A$ si et seulement si $\\frac{z_B - z_A}{z_C - z_A} = i$ ou $\\frac{z_B - z_A}{z_C - z_A} = -i$.\n- Le triangle $ABC$ est équilatéral si et seulement si $\\frac{z_C - z_A}{z_B - z_A} = e^{i\\frac{\\pi}{3}}$ ou $\\frac{z_C - z_A}{z_B - z_A} = e^{-i\\frac{\\pi}{3}}$.",
      "keyRule": "Rectangle en A : quotient ∈ iℝ*. Rectangle isocèle en A : quotient = ±i. Équilatéral : quotient = e^{±iπ/3}.",
      "formulas": [
        {
          "name": "Triangle rectangle en A",
          "formula": "ABC \\text{ rectangle en } A \\iff \\frac{z_B - z_A}{z_C - z_A} \\in i\\mathbb{R}^*",
          "note": "Le quotient doit être imaginaire pur non nul."
        },
        {
          "name": "Triangle équilatéral",
          "formula": "ABC \\text{ équilatéral } \\iff \\frac{z_C - z_A}{z_B - z_A} = e^{\\pm i\\frac{\\pi}{3}}",
          "note": "Le quotient a pour module 1 et pour argument ±π/3."
        }
      ],
      "workedExample": {
        "title": "Le triangle ABC est rectangle en A",
        "statement": "On considère les points $A$, $B$ et $C$ d'affixes respectives $1 + i$, $3$ et $3 + 5i$. Démontre que le triangle $ABC$ est rectangle en $A$.",
        "methodSteps": [
          "On calcule $\\frac{z_B - z_A}{z_C - z_A} = \\frac{2 - i}{2 + 4i}$.",
          "En multipliant par le conjugué : $\\frac{(2 - i)(2 - 4i)}{20} = \\frac{-10i}{20} = -\\frac{1}{2}i$.",
          "Donc $\\frac{z_B - z_A}{z_C - z_A} = -\\frac{1}{2}i \\in i\\mathbb{R}^*$ : le triangle $ABC$ est rectangle en $A$."
        ],
        "conclusion": "Le triangle ABC est rectangle en A."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le triangle rectangle",
          "stepTheme": "Le triangle rectangle",
          "stepBadge": "Le triangle rectangle",
          "paragraphText": "• Le triangle $ABC$ est rectangle en $A$ si et seulement si $\\frac{z_B - z_A}{z_C - z_A} \\in i\\mathbb{R}^*$.\nExemple : pour $A = 1 + i$, $B = 3$, $C = 3 + 5i$, on a $\\frac{z_B - z_A}{z_C - z_A} = \\frac{2 - i}{2 + 4i} = -\\frac{1}{2}i \\in i\\mathbb{R}^*$ : le triangle $ABC$ est rectangle en $A$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04_q1",
            "type": "mcq",
            "prompt": "Pour $A = 1 + i$, $B = 3$, $C = 3 + 5i$, que vaut $\\frac{z_B - z_A}{z_C - z_A}$ et qu'en déduit-on ?",
            "options": [
              "$-\\frac{1}{2}i$ : le triangle $ABC$ est rectangle en $A$",
              "$\\frac{1}{2}$ : le triangle $ABC$ est isocèle en $A$",
              "$i$ : le triangle $ABC$ est rectangle isocèle en $A$",
              "$-\\frac{1}{2}$ : les points sont alignés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{2 - i}{2 + 4i} = -\\frac{1}{2}i \\in i\\mathbb{R}^*$ : le triangle $ABC$ est rectangle en $A$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le triangle rectangle isocèle",
          "stepTheme": "Le triangle rectangle isocèle",
          "stepBadge": "Le triangle rectangle isocèle",
          "paragraphText": "• Le triangle $ABC$ est rectangle et isocèle en $A$ si et seulement si $\\frac{z_B - z_A}{z_C - z_A} = i$ ou $\\frac{z_B - z_A}{z_C - z_A} = -i$.\nExemple : pour $A = -3 + 2i$, $B = -2 - 3i$, $C = 3 - 2i$, on a $\\frac{z_A - z_B}{z_C - z_B} = \\frac{-1 + 5i}{5 + i} = i$ : le triangle $ABC$ est rectangle isocèle en $B$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04_q2",
            "type": "mcq",
            "prompt": "Pour $A = -3 + 2i$, $B = -2 - 3i$, $C = 3 - 2i$, que vaut $\\frac{z_A - z_B}{z_C - z_B}$ et qu'en déduit-on ?",
            "options": [
              "$i$ : le triangle $ABC$ est rectangle isocèle en $B$",
              "$-i$ : le triangle $ABC$ est rectangle isocèle en $A$",
              "$\\frac{1}{2}i$ : le triangle $ABC$ est rectangle en $B$",
              "$1$ : le triangle $ABC$ est équilatéral"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{-1 + 5i}{5 + i} = i$ : le quotient vaut $i$, donc le triangle $ABC$ est rectangle isocèle en $B$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le triangle équilatéral",
          "stepTheme": "Le triangle équilatéral",
          "stepBadge": "Le triangle équilatéral",
          "paragraphText": "• Le triangle $ABC$ est équilatéral si et seulement si $\\frac{z_C - z_A}{z_B - z_A} = e^{i\\frac{\\pi}{3}}$ ou $\\frac{z_C - z_A}{z_B - z_A} = e^{-i\\frac{\\pi}{3}}$.\nExemple : pour $A = -1 + i\\sqrt{3}$, $B = 2$, $C = -1 - i\\sqrt{3}$, on a $\\frac{z_A - z_B}{z_C - z_B} = \\frac{1 - i\\sqrt{3}}{2} = e^{-i\\frac{\\pi}{3}}$ : le triangle $ABC$ est équilatéral.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04_q3",
            "type": "mcq",
            "prompt": "Pour $A = -1 + i\\sqrt{3}$, $B = 2$, $C = -1 - i\\sqrt{3}$, que vaut $\\frac{z_A - z_B}{z_C - z_B}$ et qu'en déduit-on ?",
            "options": [
              "$e^{-i\\frac{\\pi}{3}}$ : le triangle $ABC$ est équilatéral",
              "$e^{i\\frac{\\pi}{2}}$ : le triangle $ABC$ est rectangle isocèle",
              "$i$ : le triangle $ABC$ est rectangle en $B$",
              "$1$ : les points sont alignés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{1 - i\\sqrt{3}}{2} = \\cos\\left(-\\frac{\\pi}{3}\\right) + i\\sin\\left(-\\frac{\\pi}{3}\\right) = e^{-i\\frac{\\pi}{3}}$ : le triangle est équilatéral."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le triangle IAC est rectangle isocèle en I",
          "stepTheme": "Le triangle IAC est rectangle isocèle en I",
          "stepBadge": "Le triangle IAC est rectangle isocèle en I",
          "paragraphText": "• Soient $A = 1 + i$, $C = 2 - 2i$ et $I$ le point d'affixe $3$.\nOn calcule $\\frac{z_C - 3}{z_A - 3} = \\frac{-1 - 2i}{-2 + i} = i$.\nDonc le triangle $IAC$ est rectangle et isocèle en $I$.\nDe plus, $IA = IB = IC = \\sqrt{5}$ pour $B = 1 - i$ : les points $A$, $B$ et $C$ sont sur le cercle de centre $I$ et de rayon $\\sqrt{5}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04_q4",
            "type": "mcq",
            "prompt": "Pour $A = 1 + i$, $C = 2 - 2i$ et $I$ d'affixe $3$, que vaut $\\frac{z_C - 3}{z_A - 3}$ et qu'en déduit-on ?",
            "options": [
              "$i$ : le triangle $IAC$ est rectangle isocèle en $I$",
              "$-i$ : le triangle $IAC$ est rectangle isocèle en $A$",
              "$1$ : le triangle $IAC$ est équilatéral",
              "$\\frac{1}{2}i$ : le triangle $IAC$ est rectangle en $I$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{-1 - 2i}{-2 + i} = i$ : le triangle $IAC$ est rectangle et isocèle en $I$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le carré ABCD",
          "stepTheme": "Le carré ABCD",
          "stepBadge": "Le carré ABCD",
          "paragraphText": "• Soient $A = -1 + 3i$, $B = -2$, $C = 1 - i$ et $D = 2 + 2i$.\nOn a $AB = BC = CD = DA = \\sqrt{10}$ : $ABCD$ est un losange.\nDe plus, $\\frac{z_A - z_B}{z_C - z_B} = \\frac{1 + 3i}{3 - i} = i$ : l'angle en $B$ est droit.\nUn losange ayant un angle droit est un carré : $ABCD$ est un carré.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04_q5",
            "type": "mcq",
            "prompt": "Pour $A = -1 + 3i$, $B = -2$, $C = 1 - i$, $D = 2 + 2i$, pourquoi $ABCD$ est-il un carré ?",
            "options": [
              "Parce que $AB = BC = CD = DA = \\sqrt{10}$ et $\\frac{z_A - z_B}{z_C - z_B} = i$ (angle droit en $B$)",
              "Parce que $AB = BC = \\sqrt{10}$ seulement",
              "Parce que les quatre points sont cocycliques",
              "Parce que $(AB)$ et $(CD)$ sont parallèles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les quatre côtés sont égaux à $\\sqrt{10}$ (losange) et l'angle en $B$ est droit car le quotient vaut $i$ : c'est un carré."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le sommet de l'angle droit est au dénominateur",
          "stepTheme": "Le sommet de l'angle droit est au dénominateur",
          "stepBadge": "Le sommet de l'angle droit est au dénominateur",
          "paragraphText": "• Pour tester si le triangle $ABC$ est rectangle en $A$, on calcule $\\frac{z_B - z_A}{z_C - z_A}$ : l'affixe du sommet $A$ est dans les deux différences.\nPiège : utiliser $\\frac{z_B - z_A}{z_C - z_B}$ teste l'angle en $B$, pas en $A$.\nExemple : pour $A = -3 + 2i$, $B = -2 - 3i$, $C = 3 - 2i$, c'est $\\frac{z_A - z_B}{z_C - z_B} = i$ qui montre que le triangle est rectangle isocèle en $B$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04_q6",
            "type": "mcq",
            "prompt": "Quel quotient calcule-t-on pour tester si le triangle $ABC$ est rectangle en $A$ ?",
            "options": [
              "$\\frac{z_B - z_A}{z_C - z_A}$",
              "$\\frac{z_A - z_B}{z_C - z_B}$",
              "$\\frac{z_C - z_A}{z_B - z_C}$",
              "$\\frac{z_B - z_C}{z_A - z_C}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour tester l'angle en $A$, on calcule $\\frac{z_B - z_A}{z_C - z_A}$ : l'affixe de $A$ est dans les deux différences."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04_q1",
          "type": "mcq",
          "prompt": "Pour $A = 1 + i$, $B = 3$, $C = 3 + 5i$, que vaut $\\frac{z_B - z_A}{z_C - z_A}$ et qu'en déduit-on ?",
          "options": [
            "$-\\frac{1}{2}i$ : le triangle $ABC$ est rectangle en $A$",
            "$\\frac{1}{2}$ : le triangle $ABC$ est isocèle en $A$",
            "$i$ : le triangle $ABC$ est rectangle isocèle en $A$",
            "$-\\frac{1}{2}$ : les points sont alignés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{2 - i}{2 + 4i} = -\\frac{1}{2}i \\in i\\mathbb{R}^*$ : le triangle $ABC$ est rectangle en $A$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04_q2",
          "type": "mcq",
          "prompt": "Pour $A = -3 + 2i$, $B = -2 - 3i$, $C = 3 - 2i$, que vaut $\\frac{z_A - z_B}{z_C - z_B}$ et qu'en déduit-on ?",
          "options": [
            "$i$ : le triangle $ABC$ est rectangle isocèle en $B$",
            "$-i$ : le triangle $ABC$ est rectangle isocèle en $A$",
            "$\\frac{1}{2}i$ : le triangle $ABC$ est rectangle en $B$",
            "$1$ : le triangle $ABC$ est équilatéral"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{-1 + 5i}{5 + i} = i$ : le quotient vaut $i$, donc le triangle $ABC$ est rectangle isocèle en $B$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04_q3",
          "type": "mcq",
          "prompt": "Pour $A = -1 + i\\sqrt{3}$, $B = 2$, $C = -1 - i\\sqrt{3}$, que vaut $\\frac{z_A - z_B}{z_C - z_B}$ et qu'en déduit-on ?",
          "options": [
            "$e^{-i\\frac{\\pi}{3}}$ : le triangle $ABC$ est équilatéral",
            "$e^{i\\frac{\\pi}{2}}$ : le triangle $ABC$ est rectangle isocèle",
            "$i$ : le triangle $ABC$ est rectangle en $B$",
            "$1$ : les points sont alignés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{1 - i\\sqrt{3}}{2} = \\cos\\left(-\\frac{\\pi}{3}\\right) + i\\sin\\left(-\\frac{\\pi}{3}\\right) = e^{-i\\frac{\\pi}{3}}$ : le triangle est équilatéral."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04_q4",
          "type": "mcq",
          "prompt": "Pour $A = 1 + i$, $C = 2 - 2i$ et $I$ d'affixe $3$, que vaut $\\frac{z_C - 3}{z_A - 3}$ et qu'en déduit-on ?",
          "options": [
            "$i$ : le triangle $IAC$ est rectangle isocèle en $I$",
            "$-i$ : le triangle $IAC$ est rectangle isocèle en $A$",
            "$1$ : le triangle $IAC$ est équilatéral",
            "$\\frac{1}{2}i$ : le triangle $IAC$ est rectangle en $I$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{-1 - 2i}{-2 + i} = i$ : le triangle $IAC$ est rectangle et isocèle en $I$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04_q5",
          "type": "mcq",
          "prompt": "Pour $A = -1 + 3i$, $B = -2$, $C = 1 - i$, $D = 2 + 2i$, pourquoi $ABCD$ est-il un carré ?",
          "options": [
            "Parce que $AB = BC = CD = DA = \\sqrt{10}$ et $\\frac{z_A - z_B}{z_C - z_B} = i$ (angle droit en $B$)",
            "Parce que $AB = BC = \\sqrt{10}$ seulement",
            "Parce que les quatre points sont cocycliques",
            "Parce que $(AB)$ et $(CD)$ sont parallèles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les quatre côtés sont égaux à $\\sqrt{10}$ (losange) et l'angle en $B$ est droit car le quotient vaut $i$ : c'est un carré."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p04_q6",
          "type": "mcq",
          "prompt": "Quel quotient calcule-t-on pour tester si le triangle $ABC$ est rectangle en $A$ ?",
          "options": [
            "$\\frac{z_B - z_A}{z_C - z_A}$",
            "$\\frac{z_A - z_B}{z_C - z_B}$",
            "$\\frac{z_C - z_A}{z_B - z_C}$",
            "$\\frac{z_B - z_C}{z_A - z_C}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tester l'angle en $A$, on calcule $\\frac{z_B - z_A}{z_C - z_A}$ : l'affixe de $A$ est dans les deux différences."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05",
      "order": 5,
      "title": "Transformations du plan : écritures complexes",
      "summary": "Translation : z' = z + b ; homothétie : z' = k(z − ω) + ω ; rotation : z' = e^{iθ}(z − ω) + ω.",
      "conceptExplanation": "Une transformation du plan est une application bijective du plan dans le plan. L'application $F$ de $\\mathbb{C}$ dans $\\mathbb{C}$ qui, à l'affixe $z$ de $M$, associe l'affixe $z'$ de $M'$ s'appelle la transformation complexe associée ; l'expression de $z'$ en fonction de $z$ s'appelle l'écriture complexe.\n- Symétrie orthogonale d'axe $(OI)$ : $z' = \\bar{z}$.\n- Symétrie centrale de centre $O$ : $z' = -z$.\n- Symétrie orthogonale d'axe $(OJ)$ : $z' = -\\bar{z}$.\n- Translation de vecteur $\\vec{u}$ d'affixe $b$ : $z' = z + b$.\n- Homothétie de centre $\\Omega$ d'affixe $\\omega$ et de rapport $k$ : $z' = k(z - \\omega) + \\omega$.\n- Rotation de centre $\\Omega$ d'affixe $\\omega$ et d'angle $\\theta$ : $z' = e^{i\\theta}(z - \\omega) + \\omega$.\n- Symétrie centrale de centre $\\Omega(\\omega)$ : $z' - \\omega = -(z - \\omega)$.",
      "keyRule": "Translation : z+b. Homothétie : k(z−ω)+ω. Rotation : e^{iθ}(z−ω)+ω. Symétrie (OI) : z̄ ; centre O : −z ; (OJ) : −z̄.",
      "formulas": [
        {
          "name": "Translation",
          "formula": "z' = z + b",
          "note": "b est l'affixe du vecteur de la translation."
        },
        {
          "name": "Homothétie",
          "formula": "z' = k(z - \\omega) + \\omega",
          "note": "ω est l'affixe du centre, k le rapport (k ≠ 0)."
        },
        {
          "name": "Rotation",
          "formula": "z' = e^{i\\theta}(z - \\omega) + \\omega",
          "note": "ω est l'affixe du centre, θ l'angle orienté."
        }
      ],
      "workedExample": {
        "title": "L'écriture complexe d'une rotation",
        "statement": "Trouve l'écriture complexe de la rotation $r$ de centre $\\Omega$ d'affixe $i\\sqrt{3}$ et d'angle $\\frac{\\pi}{3}$.",
        "methodSteps": [
          "La formule est $z' = e^{i\\theta}(z - \\omega) + \\omega$ avec $\\omega = i\\sqrt{3}$ et $\\theta = \\frac{\\pi}{3}$.",
          "Donc $z' = e^{i\\frac{\\pi}{3}}(z - i\\sqrt{3}) + i\\sqrt{3}$.",
          "Comme $e^{i\\frac{\\pi}{3}} = \\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$, on obtient $z' = \\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)z + \\frac{3}{2} + i\\frac{\\sqrt{3}}{2}$."
        ],
        "conclusion": "$z' = \\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)z + \\frac{3}{2} + i\\frac{\\sqrt{3}}{2}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les symétries : $\\bar{z}$, $-z$, $-\\bar{z}$",
          "stepTheme": "Les symétries : $\\bar{z}$, $-z$, $-\\bar{z}$",
          "stepBadge": "Les symétries : $\\bar{z}$, $-z$, $-\\bar{z}$",
          "paragraphText": "• La symétrie orthogonale d'axe $(OI)$ a pour écriture complexe $z' = \\bar{z}$.\n• La symétrie centrale de centre $O$ a pour écriture complexe $z' = -z$.\n• La symétrie orthogonale d'axe $(OJ)$ a pour écriture complexe $z' = -\\bar{z}$.\nLa symétrie centrale de centre $\\Omega(\\omega)$ s'écrit $z' - \\omega = -(z - \\omega)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05_q1",
            "type": "mcq",
            "prompt": "Quelle est l'écriture complexe de la symétrie orthogonale d'axe $(OI)$ ?",
            "options": [
              "$z' = \\bar{z}$",
              "$z' = -z$",
              "$z' = -\\bar{z}$",
              "$z' = z$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La symétrie d'axe $(OI)$ (l'axe réel) change le signe de la partie imaginaire : $z' = \\bar{z}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La translation : $z' = z + b$",
          "stepTheme": "La translation : $z' = z + b$",
          "stepBadge": "La translation : $z' = z + b$",
          "paragraphText": "• La translation de vecteur $\\vec{u}$ d'affixe $b$ a pour écriture complexe $z' = z + b$.\nExemple : pour $\\vec{u}$ d'affixe $1 - 2i$, l'écriture est $z' = z + 1 - 2i$.\nLes images de $A = 3 - i$ et $B = 5$ sont $A' = 4 - 3i$ et $B' = 6 - 2i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05_q2",
            "type": "mcq",
            "prompt": "Soit $t$ la translation de vecteur d'affixe $1 - 2i$. Quelle est l'image du point $A$ d'affixe $3 - i$ ?",
            "options": [
              "$4 - 3i$",
              "$2 + i$",
              "$4 + i$",
              "$3 - 3i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$z_{A'} = z_A + 1 - 2i = 3 - i + 1 - 2i = 4 - 3i$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'homothétie : $z' = k(z - \\omega) + \\omega$",
          "stepTheme": "L'homothétie : $z' = k(z - \\omega) + \\omega$",
          "stepBadge": "L'homothétie : $z' = k(z - \\omega) + \\omega$",
          "paragraphText": "• L'homothétie de centre $\\Omega$ d'affixe $\\omega$ et de rapport $k$ a pour écriture complexe $z' = k(z - \\omega) + \\omega$.\nExemple : l'homothétie de rapport $-2$ et de centre $\\Omega$ d'affixe $3 - i$ s'écrit $z' = -2(z - (3 - i)) + (3 - i) = -2z + 9 - 3i$.\nAutre exemple : l'homothétie de centre $\\Omega$ d'affixe $-1 - i$ et de rapport $3$ s'écrit $z' = 3z + 2 + 2i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05_q3",
            "type": "mcq",
            "prompt": "Quelle est l'écriture complexe de l'homothétie de centre $\\Omega$ d'affixe $3 - i$ et de rapport $-2$ ?",
            "options": [
              "$z' = -2z + 9 - 3i$",
              "$z' = -2z + 3 - i$",
              "$z' = 2z + 9 - 3i$",
              "$z' = -2z - 9 + 3i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$z' = -2(z - (3 - i)) + (3 - i) = -2z + 6 - 2i + 3 - i = -2z + 9 - 3i$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La rotation : $z' = e^{i\\theta}(z - \\omega) + \\omega$",
          "stepTheme": "La rotation : $z' = e^{i\\theta}(z - \\omega) + \\omega$",
          "stepBadge": "La rotation : $z' = e^{i\\theta}(z - \\omega) + \\omega$",
          "paragraphText": "• La rotation de centre $\\Omega$ d'affixe $\\omega$ et d'angle $\\theta$ a pour écriture complexe $z' = e^{i\\theta}(z - \\omega) + \\omega$.\nExemple : la rotation de centre $J$ d'affixe $i$ et d'angle $\\frac{\\pi}{2}$ s'écrit $z' = iz + 1 + i$.\nVérification : l'image de $A = -1 + 3i$ est $i(-1 + 3i) + 1 + i = -2$, le point $B$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05_q4",
            "type": "mcq",
            "prompt": "Quelle est l'écriture complexe de la rotation de centre $J$ d'affixe $i$ et d'angle $\\frac{\\pi}{2}$ ?",
            "options": [
              "$z' = iz + 1 + i$",
              "$z' = iz - 1 - i$",
              "$z' = -iz + 1 + i$",
              "$z' = iz + 1 - i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$z' = e^{i\\frac{\\pi}{2}}(z - i) + i = i(z - i) + i = iz + 1 + i$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La rotation de centre $1 + i$ et d'angle $\\frac{2\\pi}{3}$",
          "stepTheme": "La rotation de centre $1 + i$ et d'angle $\\frac{2\\pi}{3}$",
          "stepBadge": "La rotation de centre $1 + i$ et d'angle $\\frac{2\\pi}{3}$",
          "paragraphText": "• La rotation de centre $A$ d'affixe $1 + i$ et d'angle $\\frac{2\\pi}{3}$ s'écrit $z' = e^{i\\frac{2\\pi}{3}}(z - (1 + i)) + 1 + i$.\nComme $e^{i\\frac{2\\pi}{3}} = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$, on obtient $z' = \\left(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)z + \\frac{3 + \\sqrt{3}}{2} + i\\frac{3 - \\sqrt{3}}{2}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05_q5",
            "type": "mcq",
            "prompt": "Que vaut $e^{i\\frac{2\\pi}{3}}$ ?",
            "options": [
              "$-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$",
              "$\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$",
              "$-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$",
              "$\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$e^{i\\frac{2\\pi}{3}} = \\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3} = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La symétrie centrale de centre J",
          "stepTheme": "La symétrie centrale de centre J",
          "stepBadge": "La symétrie centrale de centre J",
          "paragraphText": "• Soit $C$ l'image du point $A = -1 + 3i$ par la symétrie centrale de centre $J$ d'affixe $i$.\nOn a $z_J = \\frac{z_A + z_C}{2}$, donc $z_C = 2z_J - z_A = 2i - (-1 + 3i) = 1 - i$.\nAvec $B = -2$ et $D = 2 + 2i$, le quadrilatère $ABCD$ est un carré (voir le point précédent).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05_q6",
            "type": "mcq",
            "prompt": "Quelle est l'affixe du point $C$, image de $A = -1 + 3i$ par la symétrie centrale de centre $J$ d'affixe $i$ ?",
            "options": [
              "$1 - i$",
              "$-1 + i$",
              "$1 + i$",
              "$-1 - i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$z_C = 2z_J - z_A = 2i - (-1 + 3i) = 1 - i$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05_q1",
          "type": "mcq",
          "prompt": "Quelle est l'écriture complexe de la symétrie orthogonale d'axe $(OI)$ ?",
          "options": [
            "$z' = \\bar{z}$",
            "$z' = -z$",
            "$z' = -\\bar{z}$",
            "$z' = z$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La symétrie d'axe $(OI)$ (l'axe réel) change le signe de la partie imaginaire : $z' = \\bar{z}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05_q2",
          "type": "mcq",
          "prompt": "Soit $t$ la translation de vecteur d'affixe $1 - 2i$. Quelle est l'image du point $A$ d'affixe $3 - i$ ?",
          "options": [
            "$4 - 3i$",
            "$2 + i$",
            "$4 + i$",
            "$3 - 3i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$z_{A'} = z_A + 1 - 2i = 3 - i + 1 - 2i = 4 - 3i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05_q3",
          "type": "mcq",
          "prompt": "Quelle est l'écriture complexe de l'homothétie de centre $\\Omega$ d'affixe $3 - i$ et de rapport $-2$ ?",
          "options": [
            "$z' = -2z + 9 - 3i$",
            "$z' = -2z + 3 - i$",
            "$z' = 2z + 9 - 3i$",
            "$z' = -2z - 9 + 3i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$z' = -2(z - (3 - i)) + (3 - i) = -2z + 6 - 2i + 3 - i = -2z + 9 - 3i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05_q4",
          "type": "mcq",
          "prompt": "Quelle est l'écriture complexe de la rotation de centre $J$ d'affixe $i$ et d'angle $\\frac{\\pi}{2}$ ?",
          "options": [
            "$z' = iz + 1 + i$",
            "$z' = iz - 1 - i$",
            "$z' = -iz + 1 + i$",
            "$z' = iz + 1 - i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$z' = e^{i\\frac{\\pi}{2}}(z - i) + i = i(z - i) + i = iz + 1 + i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05_q5",
          "type": "mcq",
          "prompt": "Que vaut $e^{i\\frac{2\\pi}{3}}$ ?",
          "options": [
            "$-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$",
            "$\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$",
            "$-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$",
            "$\\frac{\\sqrt{3}}{2} + \\frac{1}{2}i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$e^{i\\frac{2\\pi}{3}} = \\cos\\frac{2\\pi}{3} + i\\sin\\frac{2\\pi}{3} = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p05_q6",
          "type": "mcq",
          "prompt": "Quelle est l'affixe du point $C$, image de $A = -1 + 3i$ par la symétrie centrale de centre $J$ d'affixe $i$ ?",
          "options": [
            "$1 - i$",
            "$-1 + i$",
            "$1 + i$",
            "$-1 - i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$z_C = 2z_J - z_A = 2i - (-1 + 3i) = 1 - i$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06",
      "order": 6,
      "title": "Similitudes planes directes",
      "summary": "z' = az + b : translation si a = 1, homothétie si a réel, rotation si |a| = 1, similitude sinon.",
      "conceptExplanation": "Définition : une similitude directe est une transformation du plan dont l'écriture complexe est de la forme $z' = az + b$ où $a \\in \\mathbb{C}^*$ et $b \\in \\mathbb{C}$. Toute translation, toute homothétie et toute rotation est une similitude directe.\nPropriété : soit $s$ une similitude directe d'écriture $z' = az + b$.\n- Si $a = 1$, alors $s$ est la translation de vecteur d'affixe $b$.\n- Si $a \\neq 1$, alors $s$ est la similitude directe de centre d'affixe $\\frac{b}{1-a}$, de rapport $|a|$ et d'angle $\\mathrm{Arg}(a)$.\nPour déterminer l'affixe du centre, on résout $z = az + b$.\nCas particuliers : une rotation de centre $A$ et d'angle $\\alpha$ est une similitude directe de centre $A$, de rapport $1$ et d'angle $\\alpha$ ; une homothétie de centre $A$ et de rapport $k > 0$ est une similitude directe de centre $A$, de rapport $k$ et d'angle nul ; une homothétie de rapport $k < 0$ est une similitude directe de centre $A$, de rapport $-k$ et d'angle $\\pi$.\nDétermination par le centre, le rapport et l'angle : si $M'$ est l'image de $M$ par une similitude directe $S$ de centre $\\Omega$ d'affixe $z_\\Omega$, de rapport $k$ et d'angle $\\theta$, alors $z' = ke^{i\\theta}(z - z_\\Omega) + z_\\Omega$.\nDécomposition canonique : $s(A ; k ; \\theta) = r(A ; \\theta) \\circ h(A ; k) = h(A ; k) \\circ r(A ; \\theta)$.\nImages de figures : une similitude directe de rapport $k$ transforme une droite en une droite, un segment de longueur $\\ell$ en un segment de longueur $k\\ell$, un cercle de centre $A$ et de rayon $r$ en un cercle de centre $A'$ (image de $A$) et de rayon $kr$ ; elle multiplie les distances par $k$ et les aires par $k^2$.",
      "keyRule": "z' = az + b. Centre : b/(1−a). Rapport : |a|. Angle : Arg(a). a=1 : translation.",
      "formulas": [
        {
          "name": "Écriture complexe d'une similitude directe",
          "formula": "z' = az + b,\\quad a \\in \\mathbb{C}^*,\\ b \\in \\mathbb{C}",
          "note": "Centre b/(1-a), rapport |a|, angle Arg(a) si a ≠ 1."
        },
        {
          "name": "Similitude par centre, rapport et angle",
          "formula": "z' = ke^{i\\theta}(z - z_\\Omega) + z_\\Omega",
          "note": "k > 0 le rapport, θ l'angle, z_Ω l'affixe du centre."
        }
      ],
      "workedExample": {
        "title": "Les éléments caractéristiques de $z' = (1 - i)z + i$",
        "statement": "Détermine les éléments caractéristiques de la similitude directe $S$ d'écriture complexe $z' = (1 - i)z + i$.",
        "methodSteps": [
          "On a $a = 1 - i \\neq 1$ et $b = i$.",
          "L'affixe du centre est $\\frac{b}{1-a} = \\frac{i}{1 - (1 - i)} = \\frac{i}{i} = 1$.",
          "Le rapport est $k = |a| = \\sqrt{2}$.",
          "L'angle est $\\theta = \\mathrm{Arg}(a) = -\\frac{\\pi}{4}$ car $\\cos\\theta = \\frac{\\sqrt{2}}{2}$ et $\\sin\\theta = -\\frac{\\sqrt{2}}{2}$."
        ],
        "conclusion": "$S$ est la similitude directe de centre le point d'affixe $1$, de rapport $\\sqrt{2}$ et d'angle $-\\frac{\\pi}{4}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d'une similitude directe",
          "stepTheme": "La définition d'une similitude directe",
          "stepBadge": "La définition d'une similitude directe",
          "paragraphText": "• Une similitude directe est une transformation du plan dont l'écriture complexe est de la forme $z' = az + b$ où $a \\in \\mathbb{C}^*$ et $b \\in \\mathbb{C}$.\nToute translation, toute homothétie et toute rotation est une similitude directe.\nSi $a = 1$, $s$ est la translation de vecteur d'affixe $b$ ; si $a \\neq 1$, $s$ a pour centre le point d'affixe $\\frac{b}{1-a}$, pour rapport $|a|$ et pour angle $\\mathrm{Arg}(a)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06_q1",
            "type": "mcq",
            "prompt": "Soit $s$ la similitude directe d'écriture $z' = z + 1 + 3i$. Quelle est sa nature ?",
            "options": [
              "La translation de vecteur d'affixe $1 + 3i$",
              "L'homothétie de rapport $1$ et de centre $1 + 3i$",
              "La rotation d'angle $1 + 3i$",
              "La similitude de rapport $\\sqrt{10}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ici $a = 1$ : $s$ est la translation de vecteur d'affixe $b = 1 + 3i$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les éléments caractéristiques de $z' = (1 - i)z + i$",
          "stepTheme": "Les éléments caractéristiques de $z' = (1 - i)z + i$",
          "stepBadge": "Les éléments caractéristiques de $z' = (1 - i)z + i$",
          "paragraphText": "• Pour $z' = (1 - i)z + i$ : $a = 1 - i \\neq 1$ et $b = i$.\nLe centre a pour affixe $\\frac{b}{1-a} = \\frac{i}{i} = 1$ ; le rapport est $k = |1 - i| = \\sqrt{2}$ ; l'angle est $\\theta = \\mathrm{Arg}(1 - i) = -\\frac{\\pi}{4}$.\n$S$ est la similitude directe de centre le point d'affixe $1$, de rapport $\\sqrt{2}$ et d'angle $-\\frac{\\pi}{4}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06_q2",
            "type": "mcq",
            "prompt": "Quels sont les éléments caractéristiques de la similitude directe $z' = (1 - i)z + i$ ?",
            "options": [
              "Centre d'affixe $1$, rapport $\\sqrt{2}$, angle $-\\frac{\\pi}{4}$",
              "Centre d'affixe $i$, rapport $\\sqrt{2}$, angle $\\frac{\\pi}{4}$",
              "Centre d'affixe $1$, rapport $2$, angle $-\\frac{\\pi}{4}$",
              "Translation de vecteur d'affixe $i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Centre : $\\frac{i}{1-(1-i)} = 1$ ; rapport : $|1-i| = \\sqrt{2}$ ; angle : $\\mathrm{Arg}(1-i) = -\\frac{\\pi}{4}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître une similitude : homothétie et rotation",
          "stepTheme": "Reconnaître une similitude : homothétie et rotation",
          "stepBadge": "Reconnaître une similitude : homothétie et rotation",
          "paragraphText": "• $z' = 5z + 2i$ : $a = 5 \\in \\mathbb{R}^* \\setminus \\{1\\}$, donc $S$ est l'homothétie de rapport $5$ et de centre le point d'affixe $\\frac{2i}{1-5} = -\\frac{1}{2}i$.\n• $z' = \\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)z + \\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$ : $|a| = 1$, donc $S$ est la rotation d'angle $\\frac{\\pi}{3}$ et de centre le point d'affixe $1$.\n• $z' = (-1 + i)z + 2$ : $|a| = \\sqrt{2} \\neq 1$, donc $S$ est une similitude directe de centre $\\frac{4}{5} + \\frac{2}{5}i$, de rapport $\\sqrt{2}$ et d'angle $\\frac{3\\pi}{4}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06_q3",
            "type": "mcq",
            "prompt": "Quelle est la nature de la similitude directe $z' = 5z + 2i$ ?",
            "options": [
              "L'homothétie de rapport $5$ et de centre le point d'affixe $-\\frac{1}{2}i$",
              "La translation de vecteur d'affixe $2i$",
              "La rotation d'angle $5$",
              "La similitude de rapport $2$ et d'angle $\\frac{\\pi}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$a = 5 \\in \\mathbb{R}^* \\setminus \\{1\\}$ : c'est une homothétie de rapport $5$, de centre $\\frac{2i}{1-5} = -\\frac{1}{2}i$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Déterminer une similitude par deux points et leurs images",
          "stepTheme": "Déterminer une similitude par deux points et leurs images",
          "stepBadge": "Déterminer une similitude par deux points et leurs images",
          "paragraphText": "• Il existe une unique similitude directe qui transforme $A$ en $C$ et $B$ en $D$ (avec $A \\neq B$ et $C \\neq D$).\nExemple : $A = 2$, $B = 2 + 2i$, $C = 1 - 3i$, $D = -4i$. On résout $2a + b = 1 - 3i$ et $(2 + 2i)a + b = -4i$ : on trouve $a = -\\frac{1}{2} + \\frac{1}{2}i$ et $b = 2 - 4i$.\nL'écriture est $z' = \\left(-\\frac{1}{2} + \\frac{1}{2}i\\right)z + 2 - 4i$ ; le centre est $2 - 2i$, le rapport $\\frac{\\sqrt{2}}{2}$ et l'angle $\\frac{3\\pi}{4}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06_q4",
            "type": "mcq",
            "prompt": "Quelle est l'écriture complexe de la similitude directe $s$ telle que $s(A) = C$ et $s(B) = D$ avec $A = 2$, $B = 2 + 2i$, $C = 1 - 3i$, $D = -4i$ ?",
            "options": [
              "$z' = \\left(-\\frac{1}{2} + \\frac{1}{2}i\\right)z + 2 - 4i$",
              "$z' = \\left(\\frac{1}{2} + \\frac{1}{2}i\\right)z + 2 - 4i$",
              "$z' = \\left(-\\frac{1}{2} + \\frac{1}{2}i\\right)z - 2 + 4i$",
              "$z' = (1 + i)z + 2 - 4i$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En résolvant $2a + b = 1 - 3i$ et $(2 + 2i)a + b = -4i$, on trouve $a = -\\frac{1}{2} + \\frac{1}{2}i$ et $b = 2 - 4i$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les images de figures par une similitude",
          "stepTheme": "Les images de figures par une similitude",
          "stepBadge": "Les images de figures par une similitude",
          "paragraphText": "• Une similitude directe de rapport $k$ transforme une droite en une droite, un segment de longueur $\\ell$ en un segment de longueur $k\\ell$, un cercle de centre $A$ et de rayon $r$ en un cercle de centre $A'$ et de rayon $kr$ ; elle multiplie les distances par $k$ et les aires par $k^2$.\nExemple : pour $S : z' = (1 + i)z - 1 - 2i$ (rapport $\\sqrt{2}$), l'aire du triangle $OIJ$ (égale à $\\frac{1}{2}$) devient $(\\sqrt{2})^2 \\times \\frac{1}{2} = 1$ ; le cercle de centre $O$ et de rayon $2$ devient le cercle de centre $O'$ d'affixe $-1 - 2i$ et de rayon $2\\sqrt{2}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06_q5",
            "type": "mcq",
            "prompt": "Par une similitude directe de rapport $\\sqrt{2}$, que devient l'aire du triangle $OIJ$ (égale à $\\frac{1}{2}$) ?",
            "options": [
              "$1$",
              "$\\frac{1}{2}$",
              "$\\sqrt{2}$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les aires sont multipliées par $k^2 = 2$ : l'aire devient $2 \\times \\frac{1}{2} = 1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le triangle $a$, $a^2$, $a^3$ n'est pas équilatéral",
          "stepTheme": "Le triangle $a$, $a^2$, $a^3$ n'est pas équilatéral",
          "stepBadge": "Le triangle $a$, $a^2$, $a^3$ n'est pas équilatéral",
          "paragraphText": "• Situation : les solutions de $2z^2 + 2z + 1 = 0$ sont $-\\frac{1}{2} - \\frac{1}{2}i$ et $-\\frac{1}{2} + \\frac{1}{2}i$. Soit $a = -\\frac{1}{2} + \\frac{1}{2}i$ (partie imaginaire positive).\nLes nombres $a$, $a^2$ et $a^3$ sont les affixes des sommets d'un triangle équilatéral si et seulement si $\\frac{a^3 - a}{a^2 - a} = \\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ ou $\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$.\nOr $\\frac{a^3 - a}{a^2 - a} = a + 1 = \\frac{1}{2} + \\frac{1}{2}i$ : ce n'est ni l'un ni l'autre, donc le triangle n'est pas équilatéral. L'élève qui affirmait le contraire a tort.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06_q6",
            "type": "mcq",
            "prompt": "Soit $a = -\\frac{1}{2} + \\frac{1}{2}i$ une solution de $2z^2 + 2z + 1 = 0$. Que vaut $\\frac{a^3 - a}{a^2 - a}$ et que conclut-on ?",
            "options": [
              "$\\frac{1}{2} + \\frac{1}{2}i$ : le triangle de sommets $a$, $a^2$, $a^3$ n'est pas équilatéral",
              "$\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ : le triangle est équilatéral",
              "$i$ : le triangle est rectangle isocèle",
              "$1$ : les points sont alignés"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{a^3 - a}{a^2 - a} = a + 1 = \\frac{1}{2} + \\frac{1}{2}i$, différent de $e^{\\pm i\\frac{\\pi}{3}}$ : le triangle n'est pas équilatéral."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06_q1",
          "type": "mcq",
          "prompt": "Soit $s$ la similitude directe d'écriture $z' = z + 1 + 3i$. Quelle est sa nature ?",
          "options": [
            "La translation de vecteur d'affixe $1 + 3i$",
            "L'homothétie de rapport $1$ et de centre $1 + 3i$",
            "La rotation d'angle $1 + 3i$",
            "La similitude de rapport $\\sqrt{10}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ici $a = 1$ : $s$ est la translation de vecteur d'affixe $b = 1 + 3i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06_q2",
          "type": "mcq",
          "prompt": "Quels sont les éléments caractéristiques de la similitude directe $z' = (1 - i)z + i$ ?",
          "options": [
            "Centre d'affixe $1$, rapport $\\sqrt{2}$, angle $-\\frac{\\pi}{4}$",
            "Centre d'affixe $i$, rapport $\\sqrt{2}$, angle $\\frac{\\pi}{4}$",
            "Centre d'affixe $1$, rapport $2$, angle $-\\frac{\\pi}{4}$",
            "Translation de vecteur d'affixe $i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Centre : $\\frac{i}{1-(1-i)} = 1$ ; rapport : $|1-i| = \\sqrt{2}$ ; angle : $\\mathrm{Arg}(1-i) = -\\frac{\\pi}{4}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06_q3",
          "type": "mcq",
          "prompt": "Quelle est la nature de la similitude directe $z' = 5z + 2i$ ?",
          "options": [
            "L'homothétie de rapport $5$ et de centre le point d'affixe $-\\frac{1}{2}i$",
            "La translation de vecteur d'affixe $2i$",
            "La rotation d'angle $5$",
            "La similitude de rapport $2$ et d'angle $\\frac{\\pi}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$a = 5 \\in \\mathbb{R}^* \\setminus \\{1\\}$ : c'est une homothétie de rapport $5$, de centre $\\frac{2i}{1-5} = -\\frac{1}{2}i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06_q4",
          "type": "mcq",
          "prompt": "Quelle est l'écriture complexe de la similitude directe $s$ telle que $s(A) = C$ et $s(B) = D$ avec $A = 2$, $B = 2 + 2i$, $C = 1 - 3i$, $D = -4i$ ?",
          "options": [
            "$z' = \\left(-\\frac{1}{2} + \\frac{1}{2}i\\right)z + 2 - 4i$",
            "$z' = \\left(\\frac{1}{2} + \\frac{1}{2}i\\right)z + 2 - 4i$",
            "$z' = \\left(-\\frac{1}{2} + \\frac{1}{2}i\\right)z - 2 + 4i$",
            "$z' = (1 + i)z + 2 - 4i$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En résolvant $2a + b = 1 - 3i$ et $(2 + 2i)a + b = -4i$, on trouve $a = -\\frac{1}{2} + \\frac{1}{2}i$ et $b = 2 - 4i$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06_q5",
          "type": "mcq",
          "prompt": "Par une similitude directe de rapport $\\sqrt{2}$, que devient l'aire du triangle $OIJ$ (égale à $\\frac{1}{2}$) ?",
          "options": [
            "$1$",
            "$\\frac{1}{2}$",
            "$\\sqrt{2}$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les aires sont multipliées par $k^2 = 2$ : l'aire devient $2 \\times \\frac{1}{2} = 1$."
        },
        {
          "id": "terminale_c_maths_geometrie_l08_complexes_geometrie_p06_q6",
          "type": "mcq",
          "prompt": "Soit $a = -\\frac{1}{2} + \\frac{1}{2}i$ une solution de $2z^2 + 2z + 1 = 0$. Que vaut $\\frac{a^3 - a}{a^2 - a}$ et que conclut-on ?",
          "options": [
            "$\\frac{1}{2} + \\frac{1}{2}i$ : le triangle de sommets $a$, $a^2$, $a^3$ n'est pas équilatéral",
            "$\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ : le triangle est équilatéral",
            "$i$ : le triangle est rectangle isocèle",
            "$1$ : les points sont alignés"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{a^3 - a}{a^2 - a} = a + 1 = \\frac{1}{2} + \\frac{1}{2}i$, différent de $e^{\\pm i\\frac{\\pi}{3}}$ : le triangle n'est pas équilatéral."
        }
      ]
    }
  ]
};
