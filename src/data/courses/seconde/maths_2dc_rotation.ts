import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Maths_2C_L14_Rotations.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_2DC_GEO_L14_ROTATION: CurriculumChapter = {
  "id": "seconde_c_maths_geometrie_l14_rotation",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "alsoForGrades": [],
  "order": 14,
  "title": "Leçon 14 : Rotation",
  "summary": "Définition, centre et points invariants, propriété fondamentale, images de figures, propriétés de conservation et caractérisation d'une rotation.",
  "officialVolumeHours": 10,
  "contentVersion": 2,
  "source": "Maths_2C_L14_Rotations.pdf",
  "points": [
    {
      "id": "seconde_c_maths_geometrie_l14_rotation_p01",
      "order": 1,
      "title": "Définition d'une rotation",
      "summary": "Un centre, un angle orienté, et la même distance au centre.",
      "conceptExplanation": "Soit $O$ un point du plan orienté et $\\alpha$ un réel de $]-\\pi;\\pi]$.\nLa rotation de centre $O$ et d'angle $\\alpha$, notée $r(O;\\alpha)$, associe à chaque point $M$ le point $M'$ tel que :\n- si $M\\neq O$ : $OM'=OM$ et $\\mathrm{Mes}(\\overrightarrow{OM};\\overrightarrow{OM'})=\\alpha$ ;\n- si $M=O$ : $M'=O$.\n$O$ et $\\alpha$ sont les éléments caractéristiques de la rotation.\n\nExemple : $ABC$ est un triangle équilatéral de sens direct. On a $CA=CB$ et $\\mathrm{Mes}(\\overrightarrow{CA};\\overrightarrow{CB})=\\frac{\\pi}{3}$, donc $B=r\\left(C;\\frac{\\pi}{3}\\right)(A)$.\n\nCas particuliers :\n- angle $\\pi$ (demi-tour) : c'est la symétrie centrale de centre $O$ ;\n- angle $\\frac{\\pi}{2}$ : quart de tour direct (sens inverse des aiguilles d'une montre) ;\n- angle $-\\frac{\\pi}{2}$ : quart de tour indirect.",
      "keyRule": "$r(O;\\alpha)(M)=M'$ ⇔ $OM'=OM$ et $\\mathrm{Mes}(\\overrightarrow{OM};\\overrightarrow{OM'})=\\alpha$. Angle $\\pi$ : symétrie centrale.",
      "formulas": [],
      "workedExample": {
        "title": "Le triangle équilatéral",
        "statement": "$ABC$ est équilatéral de sens direct. Par quelle rotation de centre $C$ le point $A$ a-t-il pour image $B$ ?",
        "methodSteps": [
          "Distances : $CA=CB$ (côtés du triangle).",
          "Angle : $\\mathrm{Mes}(\\overrightarrow{CA};\\overrightarrow{CB})=\\frac{\\pi}{3}$ (triangle direct)."
        ],
        "conclusion": "$B=r\\left(C;\\dfrac{\\pi}{3}\\right)(A)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les deux conditions",
          "stepTheme": "Les deux conditions",
          "stepBadge": "Les deux conditions",
          "paragraphText": "Pour $M\\neq O$ : $OM'=OM$ et $\\mathrm{Mes}(\\overrightarrow{OM};\\overrightarrow{OM'})=\\alpha$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p01_q1",
            "type": "mcq",
            "prompt": "$M'=r(O;\\alpha)(M)$ avec $M\\neq O$ signifie :",
            "options": [
              "$OM'=\\alpha\\,OM$ seulement",
              "$\\overrightarrow{OM'}=\\alpha\\,\\overrightarrow{OM}$",
              "$OM'=OM$ et $\\mathrm{Mes}(\\overrightarrow{OM};\\overrightarrow{OM'})=\\alpha$",
              "$MM'=\\alpha$ et $OM=OM'$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Même distance au centre, et l'angle orienté vaut $\\alpha$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'image du centre",
          "stepTheme": "L'image du centre",
          "stepBadge": "L'image du centre",
          "paragraphText": "Le centre ne bouge pas : $r(O)=O$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p01_q2",
            "type": "mcq",
            "prompt": "Quelle est l'image du centre $O$ par $r(O;\\alpha)$ ?",
            "options": [
              "$O$ lui-même",
              "Le symétrique de $O$",
              "Aucun point",
              "Un point à la distance $\\alpha$ de $O$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, si $M=O$ alors $M'=O$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le triangle équilatéral",
          "stepTheme": "Le triangle équilatéral",
          "stepBadge": "Le triangle équilatéral",
          "paragraphText": "$ABC$ est équilatéral direct : $CA=CB$ et $\\mathrm{Mes}(\\overrightarrow{CA};\\overrightarrow{CB})=\\frac{\\pi}{3}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p01_q3",
            "type": "mcq",
            "prompt": "Quelle rotation transforme $A$ en $B$ ?",
            "options": [
              "$r\\left(C;-\\frac{\\pi}{3}\\right)$",
              "$r\\left(A;\\frac{\\pi}{3}\\right)$",
              "$r\\left(C;\\frac{2\\pi}{3}\\right)$",
              "$r\\left(C;\\frac{\\pi}{3}\\right)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Centre $C$, angle $(\\overrightarrow{CA};\\overrightarrow{CB})=\\frac{\\pi}{3}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le demi-tour",
          "stepTheme": "Le demi-tour",
          "stepBadge": "Le demi-tour",
          "paragraphText": "Une rotation d'angle $\\pi$ envoie $M$ de l'autre côté de $O$, à la même distance.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p01_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce que la rotation $r(O;\\pi)$ ?",
            "options": [
              "Le quart de tour direct",
              "La symétrie de centre $O$",
              "L'identité du plan",
              "Une homothétie de rapport $2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$O$ est le milieu de $[MM']$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les quarts de tour",
          "stepTheme": "Les quarts de tour",
          "stepBadge": "Les quarts de tour",
          "paragraphText": "• $\\frac{\\pi}{2}$ : quart de tour direct.\n• $-\\frac{\\pi}{2}$ : quart de tour indirect.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p01_q5",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la rotation d'angle $-\\dfrac{\\pi}{2}$ ?",
            "options": [
              "Le quart de tour direct",
              "Le quart de tour indirect",
              "Le demi-tour",
              "La symétrie axiale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le signe moins indique le sens des aiguilles d'une montre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "L'angle principal",
          "stepTheme": "L'angle principal",
          "stepBadge": "L'angle principal",
          "paragraphText": "On donne l'angle par sa mesure principale, dans $]-\\pi;\\pi]$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p01_q6",
            "type": "mcq",
            "prompt": "Dans quel intervalle choisit-on la mesure $\\alpha$ de l'angle d'une rotation ?",
            "options": [
              "$[0;2\\pi]$",
              "$[0;\\pi]$",
              "$]-\\frac{\\pi}{2};\\frac{\\pi}{2}]$",
              "$]-\\pi;\\pi]$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la mesure principale d'un angle orienté."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "L'ordre des vecteurs",
          "stepTheme": "L'ordre des vecteurs",
          "stepBadge": "L'ordre des vecteurs",
          "paragraphText": "L'angle se lit de $\\overrightarrow{OM}$ (le point) vers $\\overrightarrow{OM'}$ (l'image).",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p01_q7",
            "type": "mcq",
            "prompt": "$\\mathrm{Mes}(\\overrightarrow{OA};\\overrightarrow{OB})=\\frac{\\pi}{3}$ et $OA=OB$. Quelle est l'image de $B$ par $r\\left(O;-\\frac{\\pi}{3}\\right)$ ?",
            "options": [
              "$A$",
              "$B$",
              "$O$",
              "Le symétrique de $A$ par rapport à $O$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\mathrm{Mes}(\\overrightarrow{OB};\\overrightarrow{OA})=-\\frac{\\pi}{3}$ : on revient de $B$ vers $A$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p01_q1",
          "type": "mcq",
          "prompt": "$M'=r(O;\\alpha)(M)$ avec $M\\neq O$ signifie :",
          "options": [
            "$OM'=\\alpha\\,OM$ seulement",
            "$\\overrightarrow{OM'}=\\alpha\\,\\overrightarrow{OM}$",
            "$OM'=OM$ et $\\mathrm{Mes}(\\overrightarrow{OM};\\overrightarrow{OM'})=\\alpha$",
            "$MM'=\\alpha$ et $OM=OM'$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Même distance au centre, et l'angle orienté vaut $\\alpha$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p01_q2",
          "type": "mcq",
          "prompt": "Quelle est l'image du centre $O$ par $r(O;\\alpha)$ ?",
          "options": [
            "$O$ lui-même",
            "Le symétrique de $O$",
            "Aucun point",
            "Un point à la distance $\\alpha$ de $O$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, si $M=O$ alors $M'=O$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p01_q3",
          "type": "mcq",
          "prompt": "Quelle rotation transforme $A$ en $B$ ?",
          "options": [
            "$r\\left(C;-\\frac{\\pi}{3}\\right)$",
            "$r\\left(A;\\frac{\\pi}{3}\\right)$",
            "$r\\left(C;\\frac{2\\pi}{3}\\right)$",
            "$r\\left(C;\\frac{\\pi}{3}\\right)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Centre $C$, angle $(\\overrightarrow{CA};\\overrightarrow{CB})=\\frac{\\pi}{3}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p01_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce que la rotation $r(O;\\pi)$ ?",
          "options": [
            "Le quart de tour direct",
            "La symétrie de centre $O$",
            "L'identité du plan",
            "Une homothétie de rapport $2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$O$ est le milieu de $[MM']$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p01_q5",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la rotation d'angle $-\\dfrac{\\pi}{2}$ ?",
          "options": [
            "Le quart de tour direct",
            "Le quart de tour indirect",
            "Le demi-tour",
            "La symétrie axiale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le signe moins indique le sens des aiguilles d'une montre."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p01_q6",
          "type": "mcq",
          "prompt": "Dans quel intervalle choisit-on la mesure $\\alpha$ de l'angle d'une rotation ?",
          "options": [
            "$[0;2\\pi]$",
            "$[0;\\pi]$",
            "$]-\\frac{\\pi}{2};\\frac{\\pi}{2}]$",
            "$]-\\pi;\\pi]$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la mesure principale d'un angle orienté."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p01_q7",
          "type": "mcq",
          "prompt": "$\\mathrm{Mes}(\\overrightarrow{OA};\\overrightarrow{OB})=\\frac{\\pi}{3}$ et $OA=OB$. Quelle est l'image de $B$ par $r\\left(O;-\\frac{\\pi}{3}\\right)$ ?",
          "options": [
            "$A$",
            "$B$",
            "$O$",
            "Le symétrique de $A$ par rapport à $O$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\mathrm{Mes}(\\overrightarrow{OB};\\overrightarrow{OA})=-\\frac{\\pi}{3}$ : on revient de $B$ vers $A$."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l14_rotation_p02",
      "order": 2,
      "title": "Le centre et les points invariants",
      "summary": "Le centre est sur la médiatrice ; c'est le seul point fixe.",
      "conceptExplanation": "Si $r$ est une rotation de centre $O$ et $r(A)=B$ avec $A\\neq B$, alors $OA=OB$ : le centre $O$ est sur la médiatrice de $[AB]$.\n\nConstruire l'image d'un point : pour $C=r\\left(B;\\frac{2\\pi}{3}\\right)(A)$, on trace l'angle $\\frac{2\\pi}{3}$ à partir de $[BA)$ dans le sens direct, puis on reporte $BC=BA$ au compas.\n\nPoints invariants :\n- toute rotation d'angle non nul a un seul point invariant : son centre ;\n- si l'angle est nul, tous les points du plan sont invariants.\nExemple : $K$ est le centre de $r\\left(K;\\frac{\\pi}{4}\\right)$, donc $r(K)=K$.",
      "keyRule": "$r(A)=B$ ⇒ le centre est sur la médiatrice de $[AB]$. Angle non nul : seul le centre est invariant. Angle nul : tout est invariant.",
      "formulas": [],
      "workedExample": {
        "title": "Construire une image",
        "statement": "Construis $C=r\\left(B;\\frac{2\\pi}{3}\\right)(A)$.",
        "methodSteps": [
          "Au rapporteur, on trace la demi-droite issue de $B$ qui fait l'angle $\\frac{2\\pi}{3}$ ($120°$) avec $[BA)$, dans le sens direct.",
          "Au compas, on reporte la longueur $BA$ sur cette demi-droite."
        ],
        "conclusion": "On obtient $C$ avec $BC=BA$ et $\\mathrm{Mes}(\\overrightarrow{BA};\\overrightarrow{BC})=\\frac{2\\pi}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Sur la médiatrice",
          "stepTheme": "Sur la médiatrice",
          "stepBadge": "Sur la médiatrice",
          "paragraphText": "Si $r(A)=B$, alors $OA=OB$ : $O$ est à égale distance de $A$ et de $B$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p02_q1",
            "type": "mcq",
            "prompt": "Si $r$, de centre $O$, transforme $A$ en $B\\neq A$, où se trouve $O$ ?",
            "options": [
              "Au milieu de $[AB]$, toujours",
              "Sur la droite $(AB)$",
              "Sur la médiatrice de $[AB]$",
              "Sur le cercle de diamètre $[AB]$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un point équidistant de $A$ et $B$ est sur la médiatrice de $[AB]$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Construire une image",
          "stepTheme": "Construire une image",
          "stepBadge": "Construire une image",
          "paragraphText": "Pour $C=r\\left(B;\\frac{2\\pi}{3}\\right)(A)$ : on trace l'angle de $120°$ depuis $[BA)$, puis on reporte $BA$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p02_q2",
            "type": "mcq",
            "prompt": "Quelle longueur reporte-t-on au compas pour placer $C$ ?",
            "options": [
              "$BC=2\\,BA$",
              "$AC=AB$",
              "$BC=\\frac{2\\pi}{3}$",
              "$BC=BA$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une rotation conserve la distance au centre $B$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Convertir l'angle",
          "stepTheme": "Convertir l'angle",
          "stepBadge": "Convertir l'angle",
          "paragraphText": "$\\pi$ radians correspondent à $180°$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p02_q3",
            "type": "mcq",
            "prompt": "Combien de degrés mesure un angle de $\\dfrac{2\\pi}{3}$ ?",
            "options": [
              "$60°$",
              "$90°$",
              "$120°$",
              "$150°$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\frac23\\times180°=120°$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Un seul point fixe",
          "stepTheme": "Un seul point fixe",
          "stepBadge": "Un seul point fixe",
          "paragraphText": "Toute rotation d'angle non nul a un unique point invariant : son centre.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p02_q4",
            "type": "mcq",
            "prompt": "Combien de points invariants a une rotation d'angle non nul ?",
            "options": [
              "Aucun",
              "Un seul : son centre",
              "Deux",
              "Une infinité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tout autre point tourne autour du centre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'image du centre",
          "stepTheme": "L'image du centre",
          "stepBadge": "L'image du centre",
          "paragraphText": "$r$ est la rotation de centre $K$ et d'angle $\\frac{\\pi}{4}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p02_q5",
            "type": "mcq",
            "prompt": "$r$ est la rotation de centre $K$ et d'angle $\\dfrac{\\pi}{4}$. Quelle est l'image de $K$ par $r$ ?",
            "options": [
              "$K$",
              "Le point à $\\frac{\\pi}{4}$ de $K$",
              "Le symétrique de $K$",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$K$ est le centre : $r(K)=K$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'angle nul",
          "stepTheme": "L'angle nul",
          "stepBadge": "L'angle nul",
          "paragraphText": "Si $\\alpha=0$, $\\mathrm{Mes}(\\overrightarrow{OM};\\overrightarrow{OM'})=0$ et $OM'=OM$ : $M'=M$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p02_q6",
            "type": "mcq",
            "prompt": "Pour une rotation d'angle $0$, quels points sont invariants ?",
            "options": [
              "Tous les points du plan",
              "Seulement le centre",
              "Aucun point",
              "Les points d'un cercle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'identité du plan."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Retrouver le centre",
          "stepTheme": "Retrouver le centre",
          "stepBadge": "Retrouver le centre",
          "paragraphText": "Si $r(A)=B$ et $r(C)=D$, le centre est sur la médiatrice de $[AB]$ et sur celle de $[CD]$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p02_q7",
            "type": "mcq",
            "prompt": "Comment trouver le centre de $r$ si $r(A)=B$ et $r(C)=D$ ?",
            "options": [
              "Prendre le milieu de $[AD]$",
              "Couper les médiatrices de $[AB]$ et de $[CD]$",
              "Couper les droites $(AB)$ et $(CD)$",
              "Couper les droites $(AC)$ et $(BD)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le centre est équidistant de chaque point et de son image."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p02_q1",
          "type": "mcq",
          "prompt": "Si $r$, de centre $O$, transforme $A$ en $B\\neq A$, où se trouve $O$ ?",
          "options": [
            "Au milieu de $[AB]$, toujours",
            "Sur la droite $(AB)$",
            "Sur la médiatrice de $[AB]$",
            "Sur le cercle de diamètre $[AB]$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un point équidistant de $A$ et $B$ est sur la médiatrice de $[AB]$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p02_q2",
          "type": "mcq",
          "prompt": "Quelle longueur reporte-t-on au compas pour placer $C$ ?",
          "options": [
            "$BC=2\\,BA$",
            "$AC=AB$",
            "$BC=\\frac{2\\pi}{3}$",
            "$BC=BA$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une rotation conserve la distance au centre $B$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p02_q3",
          "type": "mcq",
          "prompt": "Combien de degrés mesure un angle de $\\dfrac{2\\pi}{3}$ ?",
          "options": [
            "$60°$",
            "$90°$",
            "$120°$",
            "$150°$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\frac23\\times180°=120°$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p02_q4",
          "type": "mcq",
          "prompt": "Combien de points invariants a une rotation d'angle non nul ?",
          "options": [
            "Aucun",
            "Un seul : son centre",
            "Deux",
            "Une infinité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tout autre point tourne autour du centre."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p02_q5",
          "type": "mcq",
          "prompt": "$r$ est la rotation de centre $K$ et d'angle $\\dfrac{\\pi}{4}$. Quelle est l'image de $K$ par $r$ ?",
          "options": [
            "$K$",
            "Le point à $\\frac{\\pi}{4}$ de $K$",
            "Le symétrique de $K$",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$K$ est le centre : $r(K)=K$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p02_q6",
          "type": "mcq",
          "prompt": "Pour une rotation d'angle $0$, quels points sont invariants ?",
          "options": [
            "Tous les points du plan",
            "Seulement le centre",
            "Aucun point",
            "Les points d'un cercle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'identité du plan."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p02_q7",
          "type": "mcq",
          "prompt": "Comment trouver le centre de $r$ si $r(A)=B$ et $r(C)=D$ ?",
          "options": [
            "Prendre le milieu de $[AD]$",
            "Couper les médiatrices de $[AB]$ et de $[CD]$",
            "Couper les droites $(AB)$ et $(CD)$",
            "Couper les droites $(AC)$ et $(BD)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le centre est équidistant de chaque point et de son image."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l14_rotation_p03",
      "order": 3,
      "title": "La propriété fondamentale",
      "summary": "Les distances sont conservées, les vecteurs tournent de $\\alpha$.",
      "conceptExplanation": "Soit $r$ une rotation d'angle $\\alpha$. Si $M'$ et $N'$ sont les images de deux points distincts $M$ et $N$, alors :\n- $M'N'=MN$ : la rotation conserve les distances ;\n- $\\mathrm{Mes}(\\overrightarrow{MN};\\overrightarrow{M'N'})=\\alpha$ : chaque vecteur tourne de l'angle $\\alpha$.\n\nExemple : $ABC$ est un triangle direct ; $AMB$ et $ACN$ sont équilatéraux et directs. Avec $r=r\\left(A;\\frac{\\pi}{3}\\right)$ :\n- $AM=AB$ et $\\mathrm{Mes}(\\overrightarrow{AM};\\overrightarrow{AB})=\\frac{\\pi}{3}$, donc $r(M)=B$ ;\n- $AC=AN$ et $\\mathrm{Mes}(\\overrightarrow{AC};\\overrightarrow{AN})=\\frac{\\pi}{3}$, donc $r(C)=N$ ;\n- donc $MC=BN$ et $\\mathrm{Mes}(\\overrightarrow{MC};\\overrightarrow{BN})=\\frac{\\pi}{3}$.\nAttention : $\\overrightarrow{NB}=-\\overrightarrow{BN}$, donc $\\mathrm{Mes}(\\overrightarrow{MC};\\overrightarrow{NB})=\\frac{\\pi}{3}-\\pi=-\\frac{2\\pi}{3}$.",
      "keyRule": "$M'N'=MN$ et $\\mathrm{Mes}(\\overrightarrow{MN};\\overrightarrow{M'N'})=\\alpha$.",
      "formulas": [],
      "workedExample": {
        "title": "Deux triangles équilatéraux",
        "statement": "$AMB$ et $ACN$ sont équilatéraux directs. Montre que $MC=BN$.",
        "methodSteps": [
          "Par $r\\left(A;\\frac{\\pi}{3}\\right)$ : $r(M)=B$ et $r(C)=N$.",
          "L'image du segment $[MC]$ est $[BN]$, et la rotation conserve les distances."
        ],
        "conclusion": "$MC=BN$, et de plus $\\mathrm{Mes}(\\overrightarrow{MC};\\overrightarrow{BN})=\\frac{\\pi}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les distances",
          "stepTheme": "Les distances",
          "stepBadge": "Les distances",
          "paragraphText": "Une rotation conserve les distances : $M'N'=MN$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p03_q1",
            "type": "mcq",
            "prompt": "Si $r(M)=M'$ et $r(N)=N'$, alors :",
            "options": [
              "$M'N'=\\alpha\\,MN$",
              "$M'N'=2\\,MN$",
              "$M'N'=MN$",
              "$M'N'=MN+\\alpha$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une rotation ne déforme pas les figures."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'angle des vecteurs",
          "stepTheme": "L'angle des vecteurs",
          "stepBadge": "L'angle des vecteurs",
          "paragraphText": "Le vecteur $\\overrightarrow{MN}$ tourne de $\\alpha$ pour devenir $\\overrightarrow{M'N'}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p03_q2",
            "type": "mcq",
            "prompt": "Pour une rotation d'angle $\\alpha$, que vaut $\\mathrm{Mes}(\\overrightarrow{MN};\\overrightarrow{M'N'})$ ?",
            "options": [
              "$-\\alpha$",
              "$0$",
              "$2\\alpha$",
              "$\\alpha$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Tous les vecteurs tournent du même angle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'image de M",
          "stepTheme": "L'image de M",
          "stepBadge": "L'image de M",
          "paragraphText": "$AMB$ est équilatéral direct : $AM=AB$ et $\\mathrm{Mes}(\\overrightarrow{AM};\\overrightarrow{AB})=\\frac{\\pi}{3}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p03_q3",
            "type": "mcq",
            "prompt": "Quelle est l'image de $M$ par $r\\left(A;\\frac{\\pi}{3}\\right)$ ?",
            "options": [
              "$C$",
              "$N$",
              "$B$",
              "$M$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux conditions de la définition sont remplies."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'image de C",
          "stepTheme": "L'image de C",
          "stepBadge": "L'image de C",
          "paragraphText": "$ACN$ est équilatéral direct : $AC=AN$ et $\\mathrm{Mes}(\\overrightarrow{AC};\\overrightarrow{AN})=\\frac{\\pi}{3}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p03_q4",
            "type": "mcq",
            "prompt": "Quelle est l'image de $C$ par $r\\left(A;\\frac{\\pi}{3}\\right)$ ?",
            "options": [
              "$B$",
              "$M$",
              "$A$",
              "$N$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Même raisonnement avec le triangle $ACN$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Une égalité de longueurs",
          "stepTheme": "Une égalité de longueurs",
          "stepBadge": "Une égalité de longueurs",
          "paragraphText": "$r(M)=B$ et $r(C)=N$ : l'image de $[MC]$ est $[BN]$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p03_q5",
            "type": "mcq",
            "prompt": "Quelle égalité en déduit-on ?",
            "options": [
              "$MC=BN$",
              "$MB=CN$",
              "$AM=AN$",
              "$MN=BC$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La rotation conserve la longueur du segment $[MC]$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un angle de vecteurs",
          "stepTheme": "Un angle de vecteurs",
          "stepBadge": "Un angle de vecteurs",
          "paragraphText": "$r(M)=B$ et $r(C)=N$, d'angle $\\frac{\\pi}{3}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p03_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\mathrm{Mes}(\\overrightarrow{MC};\\overrightarrow{BN})$ ?",
            "options": [
              "$-\\dfrac{\\pi}{3}$",
              "$\\dfrac{\\pi}{3}$",
              "$\\dfrac{2\\pi}{3}$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\overrightarrow{BN}$ est l'image de $\\overrightarrow{MC}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le sens du vecteur",
          "stepTheme": "Le sens du vecteur",
          "stepBadge": "Le sens du vecteur",
          "paragraphText": "$\\overrightarrow{NB}=-\\overrightarrow{BN}$ : changer le sens d'un vecteur ajoute $\\pi$ à l'angle.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p03_q7",
            "type": "mcq",
            "prompt": "Que vaut alors $\\mathrm{Mes}(\\overrightarrow{MC};\\overrightarrow{NB})$ ?",
            "options": [
              "$\\dfrac{\\pi}{3}$",
              "$-\\dfrac{2\\pi}{3}$",
              "$-\\dfrac{\\pi}{3}$",
              "$\\dfrac{4\\pi}{3}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\frac{\\pi}{3}-\\pi=-\\frac{2\\pi}{3}$ (mesure principale)."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p03_q1",
          "type": "mcq",
          "prompt": "Si $r(M)=M'$ et $r(N)=N'$, alors :",
          "options": [
            "$M'N'=\\alpha\\,MN$",
            "$M'N'=2\\,MN$",
            "$M'N'=MN$",
            "$M'N'=MN+\\alpha$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une rotation ne déforme pas les figures."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p03_q2",
          "type": "mcq",
          "prompt": "Pour une rotation d'angle $\\alpha$, que vaut $\\mathrm{Mes}(\\overrightarrow{MN};\\overrightarrow{M'N'})$ ?",
          "options": [
            "$-\\alpha$",
            "$0$",
            "$2\\alpha$",
            "$\\alpha$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Tous les vecteurs tournent du même angle."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p03_q3",
          "type": "mcq",
          "prompt": "Quelle est l'image de $M$ par $r\\left(A;\\frac{\\pi}{3}\\right)$ ?",
          "options": [
            "$C$",
            "$N$",
            "$B$",
            "$M$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux conditions de la définition sont remplies."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p03_q4",
          "type": "mcq",
          "prompt": "Quelle est l'image de $C$ par $r\\left(A;\\frac{\\pi}{3}\\right)$ ?",
          "options": [
            "$B$",
            "$M$",
            "$A$",
            "$N$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Même raisonnement avec le triangle $ACN$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p03_q5",
          "type": "mcq",
          "prompt": "Quelle égalité en déduit-on ?",
          "options": [
            "$MC=BN$",
            "$MB=CN$",
            "$AM=AN$",
            "$MN=BC$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La rotation conserve la longueur du segment $[MC]$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p03_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\mathrm{Mes}(\\overrightarrow{MC};\\overrightarrow{BN})$ ?",
          "options": [
            "$-\\dfrac{\\pi}{3}$",
            "$\\dfrac{\\pi}{3}$",
            "$\\dfrac{2\\pi}{3}$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\overrightarrow{BN}$ est l'image de $\\overrightarrow{MC}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p03_q7",
          "type": "mcq",
          "prompt": "Que vaut alors $\\mathrm{Mes}(\\overrightarrow{MC};\\overrightarrow{NB})$ ?",
          "options": [
            "$\\dfrac{\\pi}{3}$",
            "$-\\dfrac{2\\pi}{3}$",
            "$-\\dfrac{\\pi}{3}$",
            "$\\dfrac{4\\pi}{3}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\frac{\\pi}{3}-\\pi=-\\frac{2\\pi}{3}$ (mesure principale)."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l14_rotation_p04",
      "order": 4,
      "title": "Images de droites, segments et cercles",
      "summary": "Deux points suffisent ; un cercle garde son rayon.",
      "conceptExplanation": "Si $A$ et $B$ sont distincts, d'images $A'$ et $B'$ par une rotation :\n- l'image de la droite $(AB)$ est la droite $(A'B')$ ;\n- l'image de la demi-droite $[AB)$ est la demi-droite $[A'B')$ ;\n- l'image du segment $[AB]$ est le segment $[A'B']$.\n\nPour construire l'image :\n- d'une droite : on construit les images de deux de ses points ;\n- d'une demi-droite : les images de son origine et d'un autre point ;\n- d'un segment : les images de ses extrémités.\n\nImage d'un cercle : l'image du cercle de centre $O$ et de rayon $R$ est le cercle de centre $O'=r(O)$ et de même rayon $R$.\n\nExemple de lieu : $A$ est un point extérieur à un cercle $(\\mathscr C)$ de centre $O$. Pour $M\\in(\\mathscr C)$, $N$ est tel que $AMN$ est rectangle isocèle en $A$ et direct. Alors $AN=AM$ et $\\mathrm{Mes}(\\overrightarrow{AM};\\overrightarrow{AN})=\\frac{\\pi}{2}$, donc $N=r\\left(A;\\frac{\\pi}{2}\\right)(M)$. Quand $M$ parcourt $(\\mathscr C)$, $N$ parcourt le cercle image, de centre $O'=r(O)$ et de même rayon.",
      "keyRule": "Droite → droite, segment → segment de même longueur, cercle $(O;R)$ → cercle $(r(O);R)$.",
      "formulas": [],
      "workedExample": {
        "title": "L'image d'un cercle",
        "statement": "Construis l'image du cercle $(\\mathscr C)$ de centre $O$ par la rotation de centre $I$ et d'angle $\\frac{\\pi}{4}$.",
        "methodSteps": [
          "On construit $O'$ : $IO'=IO$ et $\\mathrm{Mes}(\\overrightarrow{IO};\\overrightarrow{IO'})=\\frac{\\pi}{4}$.",
          "On trace le cercle de centre $O'$ et de même rayon que $(\\mathscr C)$."
        ],
        "conclusion": "C'est le cercle $(\\mathscr C')$, image de $(\\mathscr C)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'image d'une droite",
          "stepTheme": "L'image d'une droite",
          "stepBadge": "L'image d'une droite",
          "paragraphText": "Si $r(A)=A'$ et $r(B)=B'$, l'image de $(AB)$ est $(A'B')$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est l'image de la droite $(AB)$ ?",
            "options": [
              "La droite $(A'B')$",
              "Une droite parallèle à $(AB)$, toujours",
              "Le cercle de diamètre $[A'B']$",
              "La droite $(AB)$ elle-même"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Contrairement à l'homothétie, l'image n'est pas forcément parallèle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Combien de points",
          "stepTheme": "Combien de points",
          "stepBadge": "Combien de points",
          "paragraphText": "Une droite est déterminée par deux de ses points.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p04_q2",
            "type": "mcq",
            "prompt": "Combien d'images de points faut-il construire pour obtenir l'image d'une droite ?",
            "options": [
              "Un seul",
              "Trois",
              "Une infinité",
              "Deux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On construit $A'$ et $B'$, puis on trace $(A'B')$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un segment",
          "stepTheme": "Un segment",
          "stepBadge": "Un segment",
          "paragraphText": "L'image de $[AB]$ est $[A'B']$, de même longueur.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p04_q3",
            "type": "mcq",
            "prompt": "$AB=5$ cm. Quelle est la longueur de l'image de $[AB]$ par une rotation ?",
            "options": [
              "$10$ cm",
              "$2{,}5$ cm",
              "$5$ cm",
              "Elle dépend de l'angle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une rotation conserve les distances."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'image d'un cercle",
          "stepTheme": "L'image d'un cercle",
          "stepBadge": "L'image d'un cercle",
          "paragraphText": "L'image du cercle de centre $O$ et de rayon $R$ est le cercle de centre $r(O)$ et de rayon $R$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p04_q4",
            "type": "mcq",
            "prompt": "Quel est le rayon de l'image d'un cercle de rayon $3$ cm ?",
            "options": [
              "$6$ cm",
              "$1{,}5$ cm",
              "$3$ cm",
              "$9$ cm"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le rayon ne change pas."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le centre du cercle image",
          "stepTheme": "Le centre du cercle image",
          "stepBadge": "Le centre du cercle image",
          "paragraphText": "On fait tourner le centre du cercle.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p04_q5",
            "type": "mcq",
            "prompt": "Pour construire l'image du cercle de centre $O$ par $r\\left(I;\\frac{\\pi}{4}\\right)$, on commence par :",
            "options": [
              "construire $O'=r(O)$",
              "construire le milieu de $[IO]$",
              "tracer la médiatrice de $[IO]$",
              "tracer la tangente au cercle en $I$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le cercle image a pour centre $O'$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître une rotation",
          "stepTheme": "Reconnaître une rotation",
          "stepBadge": "Reconnaître une rotation",
          "paragraphText": "$AMN$ est rectangle isocèle en $A$ et direct : $AN=AM$ et $\\mathrm{Mes}(\\overrightarrow{AM};\\overrightarrow{AN})=\\frac{\\pi}{2}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p04_q6",
            "type": "mcq",
            "prompt": "Par quelle rotation $N$ est-il l'image de $M$ ?",
            "options": [
              "$r\\left(A;-\\frac{\\pi}{2}\\right)$",
              "$r\\left(M;\\frac{\\pi}{2}\\right)$",
              "$r(A;\\pi)$",
              "$r\\left(A;\\frac{\\pi}{2}\\right)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Centre $A$, angle $(\\overrightarrow{AM};\\overrightarrow{AN})=\\frac{\\pi}{2}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un lieu de points",
          "stepTheme": "Un lieu de points",
          "stepBadge": "Un lieu de points",
          "paragraphText": "$N=r\\left(A;\\frac{\\pi}{2}\\right)(M)$ et $M$ parcourt le cercle $(\\mathscr C)$ de centre $O$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p04_q7",
            "type": "mcq",
            "prompt": "Quel ensemble décrit $N$ ?",
            "options": [
              "Le cercle $(\\mathscr C)$ lui-même",
              "Le cercle de centre $r(O)$, de même rayon",
              "La droite $(AO)$",
              "Le cercle de centre $A$ passant par $O$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$N$ décrit l'image de $(\\mathscr C)$ par la rotation."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est l'image de la droite $(AB)$ ?",
          "options": [
            "La droite $(A'B')$",
            "Une droite parallèle à $(AB)$, toujours",
            "Le cercle de diamètre $[A'B']$",
            "La droite $(AB)$ elle-même"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Contrairement à l'homothétie, l'image n'est pas forcément parallèle."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p04_q2",
          "type": "mcq",
          "prompt": "Combien d'images de points faut-il construire pour obtenir l'image d'une droite ?",
          "options": [
            "Un seul",
            "Trois",
            "Une infinité",
            "Deux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On construit $A'$ et $B'$, puis on trace $(A'B')$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p04_q3",
          "type": "mcq",
          "prompt": "$AB=5$ cm. Quelle est la longueur de l'image de $[AB]$ par une rotation ?",
          "options": [
            "$10$ cm",
            "$2{,}5$ cm",
            "$5$ cm",
            "Elle dépend de l'angle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une rotation conserve les distances."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p04_q4",
          "type": "mcq",
          "prompt": "Quel est le rayon de l'image d'un cercle de rayon $3$ cm ?",
          "options": [
            "$6$ cm",
            "$1{,}5$ cm",
            "$3$ cm",
            "$9$ cm"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le rayon ne change pas."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p04_q5",
          "type": "mcq",
          "prompt": "Pour construire l'image du cercle de centre $O$ par $r\\left(I;\\frac{\\pi}{4}\\right)$, on commence par :",
          "options": [
            "construire $O'=r(O)$",
            "construire le milieu de $[IO]$",
            "tracer la médiatrice de $[IO]$",
            "tracer la tangente au cercle en $I$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le cercle image a pour centre $O'$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p04_q6",
          "type": "mcq",
          "prompt": "Par quelle rotation $N$ est-il l'image de $M$ ?",
          "options": [
            "$r\\left(A;-\\frac{\\pi}{2}\\right)$",
            "$r\\left(M;\\frac{\\pi}{2}\\right)$",
            "$r(A;\\pi)$",
            "$r\\left(A;\\frac{\\pi}{2}\\right)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Centre $A$, angle $(\\overrightarrow{AM};\\overrightarrow{AN})=\\frac{\\pi}{2}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p04_q7",
          "type": "mcq",
          "prompt": "Quel ensemble décrit $N$ ?",
          "options": [
            "Le cercle $(\\mathscr C)$ lui-même",
            "Le cercle de centre $r(O)$, de même rayon",
            "La droite $(AO)$",
            "Le cercle de centre $A$ passant par $O$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$N$ décrit l'image de $(\\mathscr C)$ par la rotation."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l14_rotation_p05",
      "order": 5,
      "title": "Ce que la rotation conserve",
      "summary": "Distances, angles orientés, milieux, alignement, parallélisme, contact.",
      "conceptExplanation": "Toute rotation transforme :\n- deux droites parallèles en deux droites parallèles (parallélisme) ;\n- deux droites perpendiculaires en deux droites perpendiculaires (orthogonalité) ;\n- un angle orienté en un angle orienté de même mesure ;\n- le milieu d'un segment en le milieu du segment image ;\n- trois points alignés en trois points alignés ;\n- deux figures sécantes (ou tangentes) en deux figures sécantes (ou tangentes) : c'est la conservation du contact.\nElle conserve aussi les distances, donc les aires.\n\nExemple : $ABC$ et $AEF$ sont rectangles isocèles en $A$ et directs. Par $r=r\\left(A;\\frac{\\pi}{2}\\right)$ : $r(B)=C$, $r(E)=F$ et $r(A)=A$.\nComme les angles orientés sont conservés : $\\mathrm{Mes}(\\overrightarrow{EB};\\overrightarrow{EA})=\\mathrm{Mes}(\\overrightarrow{FC};\\overrightarrow{FA})$.",
      "keyRule": "Une rotation conserve distances, angles orientés, milieux, alignement, parallélisme, orthogonalité et contact.",
      "formulas": [],
      "workedExample": {
        "title": "Deux angles égaux",
        "statement": "$ABC$ et $AEF$ sont rectangles isocèles en $A$ et directs. Montre que $\\mathrm{Mes}(\\overrightarrow{EB};\\overrightarrow{EA})=\\mathrm{Mes}(\\overrightarrow{FC};\\overrightarrow{FA})$.",
        "methodSteps": [
          "Par $r\\left(A;\\frac{\\pi}{2}\\right)$ : $E\\mapsto F$, $A\\mapsto A$, $B\\mapsto C$.",
          "L'angle $(\\overrightarrow{EB};\\overrightarrow{EA})$ a pour image $(\\overrightarrow{FC};\\overrightarrow{FA})$."
        ],
        "conclusion": "La rotation conserve les angles orientés : les deux mesures sont égales."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Ce qui est conservé",
          "stepTheme": "Ce qui est conservé",
          "stepBadge": "Ce qui est conservé",
          "paragraphText": "Une rotation conserve les distances, les angles orientés, le milieu, l'alignement, le parallélisme, l'orthogonalité et le contact.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p05_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces propriétés une rotation conserve-t-elle ?",
            "options": [
              "La direction des droites",
              "Le milieu d'un segment",
              "La position de chaque point",
              "Le sens des vecteurs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les directions tournent, mais le milieu va sur le milieu."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les aires",
          "stepTheme": "Les aires",
          "stepBadge": "Les aires",
          "paragraphText": "Comme les distances sont conservées, les figures gardent leur taille.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p05_q2",
            "type": "mcq",
            "prompt": "Un triangle d'aire $12$ cm² tourne autour d'un point. Quelle est l'aire de son image ?",
            "options": [
              "$24$ cm²",
              "$6$ cm²",
              "Elle dépend de l'angle",
              "$12$ cm²"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Contrairement à l'homothétie, rien n'est agrandi."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le contact",
          "stepTheme": "Le contact",
          "stepBadge": "Le contact",
          "paragraphText": "Deux figures tangentes ont pour images deux figures tangentes.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p05_q3",
            "type": "mcq",
            "prompt": "Une droite est tangente à un cercle. Que dire de leurs images par une rotation ?",
            "options": [
              "Elles sont tangentes",
              "Elles sont sécantes en deux points",
              "Elles sont disjointes",
              "Elles sont confondues"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La rotation conserve le contact."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les images de B et E",
          "stepTheme": "Les images de B et E",
          "stepBadge": "Les images de B et E",
          "paragraphText": "$ABC$ et $AEF$ sont rectangles isocèles en $A$ et directs : $AC=AB$, $\\mathrm{Mes}(\\overrightarrow{AB};\\overrightarrow{AC})=\\frac{\\pi}{2}$, et de même pour $E$ et $F$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p05_q4",
            "type": "mcq",
            "prompt": "Quelle est l'image de $E$ par $r\\left(A;\\frac{\\pi}{2}\\right)$ ?",
            "options": [
              "$C$",
              "$B$",
              "$F$",
              "$A$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$AF=AE$ et $\\mathrm{Mes}(\\overrightarrow{AE};\\overrightarrow{AF})=\\frac{\\pi}{2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "L'image d'un angle",
          "stepTheme": "L'image d'un angle",
          "stepBadge": "L'image d'un angle",
          "paragraphText": "$E\\mapsto F$, $B\\mapsto C$, $A\\mapsto A$ : l'angle $(\\overrightarrow{EB};\\overrightarrow{EA})$ devient $(\\overrightarrow{FC};\\overrightarrow{FA})$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p05_q5",
            "type": "mcq",
            "prompt": "Que peut-on dire de $\\mathrm{Mes}(\\overrightarrow{EB};\\overrightarrow{EA})$ et $\\mathrm{Mes}(\\overrightarrow{FC};\\overrightarrow{FA})$ ?",
            "options": [
              "Elles sont opposées",
              "Elles diffèrent de $\\frac{\\pi}{2}$",
              "Leur somme vaut $\\pi$",
              "Elles sont égales"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une rotation conserve les angles orientés."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des longueurs égales",
          "stepTheme": "Des longueurs égales",
          "stepBadge": "Des longueurs égales",
          "paragraphText": "La rotation envoie le segment $[EB]$ sur le segment $[FC]$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p05_q6",
            "type": "mcq",
            "prompt": "Quelle égalité de longueurs obtient-on aussi ?",
            "options": [
              "$EB=FA$",
              "$AB=AF$",
              "$EB=FC$",
              "$EC=FB$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La rotation conserve les distances."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Parallèle ou pas",
          "stepTheme": "Parallèle ou pas",
          "stepBadge": "Parallèle ou pas",
          "paragraphText": "Pour une homothétie, l'image d'une droite lui est parallèle. Pour une rotation d'angle $\\alpha$, l'image fait un angle $\\alpha$ avec la droite.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p05_q7",
            "type": "mcq",
            "prompt": "Par $r\\left(O;\\frac{\\pi}{2}\\right)$, l'image d'une droite $(D)$ est :",
            "options": [
              "parallèle à $(D)$",
              "perpendiculaire à $(D)$",
              "confondue avec $(D)$",
              "un cercle de centre $O$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les vecteurs directeurs tournent d'un quart de tour."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p05_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces propriétés une rotation conserve-t-elle ?",
          "options": [
            "La direction des droites",
            "Le milieu d'un segment",
            "La position de chaque point",
            "Le sens des vecteurs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les directions tournent, mais le milieu va sur le milieu."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p05_q2",
          "type": "mcq",
          "prompt": "Un triangle d'aire $12$ cm² tourne autour d'un point. Quelle est l'aire de son image ?",
          "options": [
            "$24$ cm²",
            "$6$ cm²",
            "Elle dépend de l'angle",
            "$12$ cm²"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Contrairement à l'homothétie, rien n'est agrandi."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p05_q3",
          "type": "mcq",
          "prompt": "Une droite est tangente à un cercle. Que dire de leurs images par une rotation ?",
          "options": [
            "Elles sont tangentes",
            "Elles sont sécantes en deux points",
            "Elles sont disjointes",
            "Elles sont confondues"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La rotation conserve le contact."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p05_q4",
          "type": "mcq",
          "prompt": "Quelle est l'image de $E$ par $r\\left(A;\\frac{\\pi}{2}\\right)$ ?",
          "options": [
            "$C$",
            "$B$",
            "$F$",
            "$A$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$AF=AE$ et $\\mathrm{Mes}(\\overrightarrow{AE};\\overrightarrow{AF})=\\frac{\\pi}{2}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p05_q5",
          "type": "mcq",
          "prompt": "Que peut-on dire de $\\mathrm{Mes}(\\overrightarrow{EB};\\overrightarrow{EA})$ et $\\mathrm{Mes}(\\overrightarrow{FC};\\overrightarrow{FA})$ ?",
          "options": [
            "Elles sont opposées",
            "Elles diffèrent de $\\frac{\\pi}{2}$",
            "Leur somme vaut $\\pi$",
            "Elles sont égales"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une rotation conserve les angles orientés."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p05_q6",
          "type": "mcq",
          "prompt": "Quelle égalité de longueurs obtient-on aussi ?",
          "options": [
            "$EB=FA$",
            "$AB=AF$",
            "$EB=FC$",
            "$EC=FB$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La rotation conserve les distances."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p05_q7",
          "type": "mcq",
          "prompt": "Par $r\\left(O;\\frac{\\pi}{2}\\right)$, l'image d'une droite $(D)$ est :",
          "options": [
            "parallèle à $(D)$",
            "perpendiculaire à $(D)$",
            "confondue avec $(D)$",
            "un cercle de centre $O$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les vecteurs directeurs tournent d'un quart de tour."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l14_rotation_p06",
      "order": 6,
      "title": "Caractériser une rotation et construire",
      "summary": "Trouver le centre et l'angle, puis résoudre un problème.",
      "conceptExplanation": "1. Centre, point et image : si $AB=AC$ ($A$, $B$, $C$ distincts), il existe une seule rotation de centre $A$ qui applique $B$ sur $C$ ; son angle est $(\\overrightarrow{AB};\\overrightarrow{AC})$.\nExemple : $ABC$ et $ACD$ équilatéraux directs ; la rotation de centre $A$ qui envoie $B$ sur $D$ a pour angle $\\frac{\\pi}{3}+\\frac{\\pi}{3}=\\frac{2\\pi}{3}$.\n\n2. Deux points et leurs images : si $MN=M'N'$, $M\\neq N$ et $\\overrightarrow{MN}\\neq\\overrightarrow{M'N'}$, il existe une seule rotation $r$ telle que $r(M)=M'$ et $r(N)=N'$.\n- Son angle est $(\\overrightarrow{MN};\\overrightarrow{M'N'})$.\n- Son centre est l'intersection des médiatrices de $[MM']$ et $[NN']$ (si elles sont confondues, on prend l'intersection de cette médiatrice avec $(MN)$).\nExemple : $ABC$ équilatéral direct, $I$ et $J$ milieux de $[AB]$ et $[AC]$. La rotation qui envoie $B$ sur $A$ et $I$ sur $J$ a pour centre le centre de gravité $O$ de $ABC$ et pour angle $\\mathrm{Mes}(\\overrightarrow{OB};\\overrightarrow{OA})=-\\frac{2\\pi}{3}$.\n\n3. Angle, point et image : il existe une seule rotation d'angle $\\alpha$ qui transforme $M$ en $N$ ; son centre est sur la médiatrice de $[MN]$.\n\nSituation : deux cercles concentriques de centre $O$, de rayons $R$ et $2R$, et $A$ sur le petit cercle. Par $r\\left(A;\\frac{\\pi}{3}\\right)$, le petit cercle a pour image un cercle $(\\Gamma)$ de centre $O'$, avec $OAO'$ équilatéral, donc $OO'=R=2R-R$ : $(\\Gamma)$ est tangent au grand cercle en un point $C$. On en déduit un triangle équilatéral $ABC$ avec $B$ sur le petit cercle et $C$ sur le grand.",
      "keyRule": "Angle de $r$ : $(\\overrightarrow{MN};\\overrightarrow{M'N'})$. Centre : intersection des médiatrices de $[MM']$ et $[NN']$.",
      "formulas": [],
      "workedExample": {
        "title": "Les milieux d'un triangle équilatéral",
        "statement": "$ABC$ est équilatéral direct, $I$ et $J$ sont les milieux de $[AB]$ et $[AC]$. Détermine la rotation qui envoie $B$ sur $A$ et $I$ sur $J$.",
        "methodSteps": [
          "Centre : intersection des médiatrices de $[AB]$ et $[IJ]$, qui sont des médianes du triangle : c'est son centre de gravité $O$.",
          "Angle : $\\mathrm{Mes}(\\overrightarrow{OB};\\overrightarrow{OA})=-\\frac{2\\pi}{3}$."
        ],
        "conclusion": "C'est la rotation de centre $O$ et d'angle $-\\dfrac{2\\pi}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Deux triangles équilatéraux",
          "stepTheme": "Deux triangles équilatéraux",
          "stepBadge": "Deux triangles équilatéraux",
          "paragraphText": "$ABC$ et $ACD$ sont équilatéraux directs : $\\mathrm{Mes}(\\overrightarrow{AB};\\overrightarrow{AC})=\\frac{\\pi}{3}$ et $\\mathrm{Mes}(\\overrightarrow{AC};\\overrightarrow{AD})=\\frac{\\pi}{3}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p06_q1",
            "type": "mcq",
            "prompt": "Quel est l'angle de la rotation de centre $A$ qui envoie $B$ sur $D$ ?",
            "options": [
              "$\\dfrac{2\\pi}{3}$",
              "$\\dfrac{\\pi}{3}$",
              "$\\pi$",
              "$-\\dfrac{2\\pi}{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Relation de Chasles : $\\frac{\\pi}{3}+\\frac{\\pi}{3}=\\frac{2\\pi}{3}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La condition d'existence",
          "stepTheme": "La condition d'existence",
          "stepBadge": "La condition d'existence",
          "paragraphText": "Pour qu'une rotation de centre $A$ envoie $B$ sur $C$, il faut $AB=AC$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p06_q2",
            "type": "mcq",
            "prompt": "Quelle condition faut-il pour qu'une rotation de centre $A$ envoie $B$ sur $C$ ?",
            "options": [
              "$AB=AC$",
              "$AB=BC$",
              "$(AB)\\perp(AC)$",
              "$A$ milieu de $[BC]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une rotation conserve la distance au centre."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "L'angle avec deux points",
          "stepTheme": "L'angle avec deux points",
          "stepBadge": "L'angle avec deux points",
          "paragraphText": "Si $r(M)=M'$ et $r(N)=N'$, l'angle de $r$ est $(\\overrightarrow{MN};\\overrightarrow{M'N'})$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p06_q3",
            "type": "mcq",
            "prompt": "Si $r(D)=B$ et $r(C)=E$, l'angle de $r$ est :",
            "options": [
              "$(\\overrightarrow{DB};\\overrightarrow{CE})$",
              "$(\\overrightarrow{DC};\\overrightarrow{BE})$",
              "$(\\overrightarrow{DC};\\overrightarrow{EB})$",
              "$(\\overrightarrow{BD};\\overrightarrow{CE})$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On compare le vecteur $\\overrightarrow{DC}$ et son image $\\overrightarrow{BE}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le centre de gravité",
          "stepTheme": "Le centre de gravité",
          "stepBadge": "Le centre de gravité",
          "paragraphText": "$r(B)=A$ et $r(I)=J$ : le centre est sur les médiatrices de $[AB]$ et de $[IJ]$, qui sont des médianes de $ABC$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p06_q4",
            "type": "mcq",
            "prompt": "$ABC$ est un triangle équilatéral direct ; $I$ et $J$ sont les milieux de $[AB]$ et $[AC]$. Une rotation $r$ vérifie $r(B)=A$ et $r(I)=J$. Quel est le centre de cette rotation ?",
            "options": [
              "Le milieu de $[BC]$",
              "Le sommet $A$",
              "Le centre de gravité de $ABC$",
              "Le milieu de $[IJ]$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Dans un triangle équilatéral, médiatrices et médianes sont confondues."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'angle de la rotation",
          "stepTheme": "L'angle de la rotation",
          "stepBadge": "L'angle de la rotation",
          "paragraphText": "Dans le triangle équilatéral direct $ABC$, de centre $O$ : $\\mathrm{Mes}(\\overrightarrow{OA};\\overrightarrow{OB})=\\frac{2\\pi}{3}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p06_q5",
            "type": "mcq",
            "prompt": "Quel est l'angle de la rotation de centre $O$ qui envoie $B$ sur $A$ ?",
            "options": [
              "$\\dfrac{2\\pi}{3}$",
              "$\\dfrac{\\pi}{3}$",
              "$-\\dfrac{\\pi}{3}$",
              "$-\\dfrac{2\\pi}{3}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\mathrm{Mes}(\\overrightarrow{OB};\\overrightarrow{OA})=-\\mathrm{Mes}(\\overrightarrow{OA};\\overrightarrow{OB})=-\\frac{2\\pi}{3}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Translation ou rotation",
          "stepTheme": "Translation ou rotation",
          "stepBadge": "Translation ou rotation",
          "paragraphText": "Condition : $MN=M'N'$ et $\\overrightarrow{MN}\\neq\\overrightarrow{M'N'}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p06_q6",
            "type": "mcq",
            "prompt": "On a $MN=M'N'$, mais aussi $\\overrightarrow{M'N'}=\\overrightarrow{MN}$ avec $M'\\neq M$. Peut-on trouver une rotation qui envoie $M$ sur $M'$ et $N$ sur $N'$ ?",
            "options": [
              "Oui, une rotation d'angle $\\pi$",
              "Oui, une rotation d'angle $\\frac{\\pi}{2}$",
              "Non, c'est une translation",
              "Oui, une rotation d'angle $0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Tous les points glissent du même vecteur $\\overrightarrow{MM'}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Les deux cercles",
          "stepTheme": "Les deux cercles",
          "stepBadge": "Les deux cercles",
          "paragraphText": "Petit cercle de rayon $R$, grand cercle de rayon $2R$, même centre $O$. Par $r\\left(A;\\frac{\\pi}{3}\\right)$, le petit cercle devient $(\\Gamma)$, de centre $O'$ et de rayon $R$, avec $OO'=R$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l14_rotation_p06_q7",
            "type": "mcq",
            "prompt": "Quelle est la position de $(\\Gamma)$ par rapport au grand cercle ?",
            "options": [
              "Sécant en deux points",
              "Extérieur, sans contact",
              "Confondu avec lui",
              "Tangent intérieurement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$OO'=R=2R-R$ : la distance des centres égale la différence des rayons."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p06_q1",
          "type": "mcq",
          "prompt": "Quel est l'angle de la rotation de centre $A$ qui envoie $B$ sur $D$ ?",
          "options": [
            "$\\dfrac{2\\pi}{3}$",
            "$\\dfrac{\\pi}{3}$",
            "$\\pi$",
            "$-\\dfrac{2\\pi}{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Relation de Chasles : $\\frac{\\pi}{3}+\\frac{\\pi}{3}=\\frac{2\\pi}{3}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p06_q2",
          "type": "mcq",
          "prompt": "Quelle condition faut-il pour qu'une rotation de centre $A$ envoie $B$ sur $C$ ?",
          "options": [
            "$AB=AC$",
            "$AB=BC$",
            "$(AB)\\perp(AC)$",
            "$A$ milieu de $[BC]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une rotation conserve la distance au centre."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p06_q3",
          "type": "mcq",
          "prompt": "Si $r(D)=B$ et $r(C)=E$, l'angle de $r$ est :",
          "options": [
            "$(\\overrightarrow{DB};\\overrightarrow{CE})$",
            "$(\\overrightarrow{DC};\\overrightarrow{BE})$",
            "$(\\overrightarrow{DC};\\overrightarrow{EB})$",
            "$(\\overrightarrow{BD};\\overrightarrow{CE})$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On compare le vecteur $\\overrightarrow{DC}$ et son image $\\overrightarrow{BE}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p06_q4",
          "type": "mcq",
          "prompt": "$ABC$ est un triangle équilatéral direct ; $I$ et $J$ sont les milieux de $[AB]$ et $[AC]$. Une rotation $r$ vérifie $r(B)=A$ et $r(I)=J$. Quel est le centre de cette rotation ?",
          "options": [
            "Le milieu de $[BC]$",
            "Le sommet $A$",
            "Le centre de gravité de $ABC$",
            "Le milieu de $[IJ]$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Dans un triangle équilatéral, médiatrices et médianes sont confondues."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p06_q5",
          "type": "mcq",
          "prompt": "Quel est l'angle de la rotation de centre $O$ qui envoie $B$ sur $A$ ?",
          "options": [
            "$\\dfrac{2\\pi}{3}$",
            "$\\dfrac{\\pi}{3}$",
            "$-\\dfrac{\\pi}{3}$",
            "$-\\dfrac{2\\pi}{3}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\mathrm{Mes}(\\overrightarrow{OB};\\overrightarrow{OA})=-\\mathrm{Mes}(\\overrightarrow{OA};\\overrightarrow{OB})=-\\frac{2\\pi}{3}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p06_q6",
          "type": "mcq",
          "prompt": "On a $MN=M'N'$, mais aussi $\\overrightarrow{M'N'}=\\overrightarrow{MN}$ avec $M'\\neq M$. Peut-on trouver une rotation qui envoie $M$ sur $M'$ et $N$ sur $N'$ ?",
          "options": [
            "Oui, une rotation d'angle $\\pi$",
            "Oui, une rotation d'angle $\\frac{\\pi}{2}$",
            "Non, c'est une translation",
            "Oui, une rotation d'angle $0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Tous les points glissent du même vecteur $\\overrightarrow{MM'}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l14_rotation_p06_q7",
          "type": "mcq",
          "prompt": "Quelle est la position de $(\\Gamma)$ par rapport au grand cercle ?",
          "options": [
            "Sécant en deux points",
            "Extérieur, sans contact",
            "Confondu avec lui",
            "Tangent intérieurement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$OO'=R=2R-R$ : la distance des centres égale la différence des rayons."
        }
      ]
    }
  ]
};
