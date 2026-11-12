import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Maths_2C_L12_Homothétie.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_2DC_GEO_L12_HOMOTHETIE: CurriculumChapter = {
  "id": "seconde_c_maths_geometrie_l12_homothetie",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "alsoForGrades": [],
  "order": 12,
  "title": "Leçon 12 : Homothétie",
  "summary": "Définition, alignement et point invariant, propriété fondamentale, images de droites et de cercles, propriétés de conservation et caractérisation d'une homothétie.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "Maths_2C_L12_Homothétie.pdf",
  "points": [
    {
      "id": "seconde_c_maths_geometrie_l12_homothetie_p01",
      "order": 1,
      "title": "Définition d'une homothétie",
      "summary": "Un centre, un rapport, et une égalité de vecteurs.",
      "conceptExplanation": "Soit $\\Omega$ un point du plan et $k$ un réel non nul.\nL'homothétie de centre $\\Omega$ et de rapport $k$, notée $h(\\Omega;k)$, associe à tout point $M$ le point $M'$ tel que :\n$\\overrightarrow{\\Omega M'}=k\\,\\overrightarrow{\\Omega M}$.\n\nExemple sur une droite graduée : si $\\overrightarrow{FB}=4\\overrightarrow{FA}$, alors $h(F;4)(A)=B$ ; si $\\overrightarrow{BF}=-2\\overrightarrow{BC}$, alors $h(B;-2)(C)=F$.\n\nCas particuliers :\n- l'homothétie de rapport $1$ est l'identité : chaque point reste à sa place ;\n- l'homothétie de centre $O$ et de rapport $-1$ est la symétrie centrale de centre $O$.\n\nTrouver le rapport : si $h$ de centre $A$ transforme $B$ en $C$, on cherche $k$ tel que $\\overrightarrow{AC}=k\\overrightarrow{AB}$.\nExemple : $4\\overrightarrow{CA}+3\\overrightarrow{AB}=\\vec0$ ⇔ $\\overrightarrow{AC}=\\frac34\\overrightarrow{AB}$, donc $k=\\frac34$.",
      "keyRule": "$h(\\Omega;k)(M)=M'$ ⇔ $\\overrightarrow{\\Omega M'}=k\\,\\overrightarrow{\\Omega M}$ (avec $k\\neq0$). Rapport $1$ : identité. Rapport $-1$ : symétrie centrale.",
      "formulas": [],
      "workedExample": {
        "title": "Lire un rapport",
        "statement": "$h$ est l'homothétie de centre $A$ qui transforme $B$ en $C$, avec $4\\overrightarrow{CA}+3\\overrightarrow{AB}=\\vec0$. Quel est son rapport ?",
        "methodSteps": [
          "$4\\overrightarrow{CA}=-3\\overrightarrow{AB}$, donc $-4\\overrightarrow{AC}=-3\\overrightarrow{AB}$.",
          "On divise par $-4$ : $\\overrightarrow{AC}=\\frac34\\overrightarrow{AB}$."
        ],
        "conclusion": "Le rapport de $h$ est $\\dfrac34$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'égalité qui définit",
          "stepTheme": "L'égalité qui définit",
          "stepBadge": "L'égalité qui définit",
          "paragraphText": "$h(\\Omega;k)(M)=M'$ signifie $\\overrightarrow{\\Omega M'}=k\\,\\overrightarrow{\\Omega M}$ : on part toujours du centre $\\Omega$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q1",
            "type": "mcq",
            "prompt": "$h(\\Omega;k)(M)=M'$ signifie :",
            "options": [
              "$\\overrightarrow{\\Omega M}=k\\,\\overrightarrow{\\Omega M'}$",
              "$\\overrightarrow{MM'}=k\\,\\overrightarrow{\\Omega M}$",
              "$\\overrightarrow{\\Omega M'}=k\\,\\overrightarrow{\\Omega M}$",
              "$\\overrightarrow{\\Omega M'}=\\overrightarrow{\\Omega M}+k$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le vecteur qui va du centre à l'image vaut $k$ fois celui qui va du centre au point."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître l'homothétie",
          "stepTheme": "Reconnaître l'homothétie",
          "stepBadge": "Reconnaître l'homothétie",
          "paragraphText": "Sur une droite, $\\overrightarrow{FB}=4\\overrightarrow{FA}$.\nLe point de départ des deux vecteurs est le centre.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q2",
            "type": "mcq",
            "prompt": "Quelle homothétie transforme $A$ en $B$ ?",
            "options": [
              "$h(F;4)$",
              "$h\\left(F;\\frac14\\right)$",
              "$h(A;4)$",
              "$h(B;4)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Centre $F$ (origine commune) et rapport $4$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un rapport négatif",
          "stepTheme": "Un rapport négatif",
          "stepBadge": "Un rapport négatif",
          "paragraphText": "On a aussi $\\overrightarrow{BF}=-2\\overrightarrow{BC}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est l'image de $C$ par $h(B;-2)$ ?",
            "options": [
              "$C$",
              "$B$",
              "$A$",
              "$F$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\overrightarrow{BF}=-2\\overrightarrow{BC}$ signifie exactement $h(B;-2)(C)=F$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rapport 1",
          "stepTheme": "Le rapport 1",
          "stepBadge": "Le rapport 1",
          "paragraphText": "Si $k=1$ : $\\overrightarrow{\\Omega M'}=\\overrightarrow{\\Omega M}$, donc $M'=M$ pour tout point $M$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'homothétie de rapport $1$ ?",
            "options": [
              "Une symétrie centrale",
              "L'identité : rien ne bouge",
              "Une translation",
              "Une rotation d'un demi-tour"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque point est sa propre image."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le rapport −1",
          "stepTheme": "Le rapport −1",
          "stepBadge": "Le rapport −1",
          "paragraphText": "Si $k=-1$ : $\\overrightarrow{OM'}=-\\overrightarrow{OM}$, donc $O$ est le milieu de $[MM']$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q5",
            "type": "mcq",
            "prompt": "L'homothétie $h(O;-1)$ est :",
            "options": [
              "l'identité du plan",
              "la symétrie de centre $O$",
              "une homothétie qui agrandit",
              "une projection sur $O$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$O$ est le milieu de chaque segment $[MM']$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Trouver le rapport",
          "stepTheme": "Trouver le rapport",
          "stepBadge": "Trouver le rapport",
          "paragraphText": "$h$ de centre $A$ transforme $B$ en $C$ : on cherche $k$ tel que $\\overrightarrow{AC}=k\\overrightarrow{AB}$.\nIci $4\\overrightarrow{CA}+3\\overrightarrow{AB}=\\vec0$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q6",
            "type": "mcq",
            "prompt": "L'homothétie $h$ de centre $A$ transforme $B$ en $C$, et $4\\overrightarrow{CA}+3\\overrightarrow{AB}=\\vec0$. Quel est le rapport de $h$ ?",
            "options": [
              "$\\dfrac43$",
              "$-\\dfrac34$",
              "$-\\dfrac43$",
              "$\\dfrac34$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$4\\overrightarrow{CA}=-3\\overrightarrow{AB}$ ⇔ $\\overrightarrow{AC}=\\frac34\\overrightarrow{AB}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Jamais de rapport nul",
          "stepTheme": "Jamais de rapport nul",
          "stepBadge": "Jamais de rapport nul",
          "paragraphText": "Le rapport $k$ d'une homothétie est toujours non nul.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q7",
            "type": "mcq",
            "prompt": "Que se passerait-il avec $k=0$ ?",
            "options": [
              "Tous les points iraient sur le centre",
              "Rien ne bougerait",
              "Les longueurs doubleraient",
              "Les droites deviendraient des cercles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\overrightarrow{\\Omega M'}=\\vec0$ pour tout $M$ : toutes les images seraient $\\Omega$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q1",
          "type": "mcq",
          "prompt": "$h(\\Omega;k)(M)=M'$ signifie :",
          "options": [
            "$\\overrightarrow{\\Omega M}=k\\,\\overrightarrow{\\Omega M'}$",
            "$\\overrightarrow{MM'}=k\\,\\overrightarrow{\\Omega M}$",
            "$\\overrightarrow{\\Omega M'}=k\\,\\overrightarrow{\\Omega M}$",
            "$\\overrightarrow{\\Omega M'}=\\overrightarrow{\\Omega M}+k$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le vecteur qui va du centre à l'image vaut $k$ fois celui qui va du centre au point."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q2",
          "type": "mcq",
          "prompt": "Quelle homothétie transforme $A$ en $B$ ?",
          "options": [
            "$h(F;4)$",
            "$h\\left(F;\\frac14\\right)$",
            "$h(A;4)$",
            "$h(B;4)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Centre $F$ (origine commune) et rapport $4$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est l'image de $C$ par $h(B;-2)$ ?",
          "options": [
            "$C$",
            "$B$",
            "$A$",
            "$F$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\overrightarrow{BF}=-2\\overrightarrow{BC}$ signifie exactement $h(B;-2)(C)=F$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'homothétie de rapport $1$ ?",
          "options": [
            "Une symétrie centrale",
            "L'identité : rien ne bouge",
            "Une translation",
            "Une rotation d'un demi-tour"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque point est sa propre image."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q5",
          "type": "mcq",
          "prompt": "L'homothétie $h(O;-1)$ est :",
          "options": [
            "l'identité du plan",
            "la symétrie de centre $O$",
            "une homothétie qui agrandit",
            "une projection sur $O$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$O$ est le milieu de chaque segment $[MM']$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q6",
          "type": "mcq",
          "prompt": "L'homothétie $h$ de centre $A$ transforme $B$ en $C$, et $4\\overrightarrow{CA}+3\\overrightarrow{AB}=\\vec0$. Quel est le rapport de $h$ ?",
          "options": [
            "$\\dfrac43$",
            "$-\\dfrac34$",
            "$-\\dfrac43$",
            "$\\dfrac34$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$4\\overrightarrow{CA}=-3\\overrightarrow{AB}$ ⇔ $\\overrightarrow{AC}=\\frac34\\overrightarrow{AB}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p01_q7",
          "type": "mcq",
          "prompt": "Que se passerait-il avec $k=0$ ?",
          "options": [
            "Tous les points iraient sur le centre",
            "Rien ne bougerait",
            "Les longueurs doubleraient",
            "Les droites deviendraient des cercles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\overrightarrow{\\Omega M'}=\\vec0$ pour tout $M$ : toutes les images seraient $\\Omega$."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l12_homothetie_p02",
      "order": 2,
      "title": "Alignement et point invariant",
      "summary": "Le centre, le point et son image sont alignés ; seul le centre ne bouge pas.",
      "conceptExplanation": "Propriété : si $M'$ est l'image de $M$ par une homothétie de centre $O$, alors $O$, $M$ et $M'$ sont alignés.\n\nConséquence pour trouver le centre : si $h(A)=A'$ et $h(B)=B'$, le centre est sur $(AA')$ et sur $(BB')$. C'est donc le point d'intersection de ces deux droites.\nExemple : dans le trapèze $ABB'A'$ de petite base $[AB]$, le centre est le point où se coupent $(AA')$ et $(BB')$.\n\nPoint invariant : toute homothétie de rapport différent de $1$ a un seul point invariant, son centre.\n\nPosition de l'image :\n- si $k>0$, $M'$ est sur la demi-droite $[OM)$ ;\n- si $k<0$, $M'$ est de l'autre côté de $O$.",
      "keyRule": "$O$, $M$, $M'$ alignés. Centre $=(AA')\\cap(BB')$. Si $k\\neq1$, le centre est le seul point invariant.",
      "formulas": [],
      "workedExample": {
        "title": "Construire le centre",
        "statement": "$ABB'A'$ est un trapèze de petite base $[AB]$, et une homothétie $h$ transforme $A$ en $A'$ et $B$ en $B'$. Où est son centre $O$ ?",
        "methodSteps": [
          "$O$, $A$, $A'$ sont alignés : $O\\in(AA')$.",
          "$O$, $B$, $B'$ sont alignés : $O\\in(BB')$."
        ],
        "conclusion": "$O$ est le point d'intersection des droites $(AA')$ et $(BB')$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Toujours alignés",
          "stepTheme": "Toujours alignés",
          "stepBadge": "Toujours alignés",
          "paragraphText": "Si $h$, de centre $O$, transforme $M$ en $M'$, alors $\\overrightarrow{OM'}=k\\overrightarrow{OM}$ : les vecteurs sont colinéaires.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q1",
            "type": "mcq",
            "prompt": "Si $h$ de centre $O$ transforme $M$ en $M'$, alors :",
            "options": [
              "$OM=OM'$ dans tous les cas",
              "$(OM)$ et $(OM')$ sont perpendiculaires",
              "$O$, $M$ et $M'$ sont alignés",
              "$M'$ est le milieu de $[OM]$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Deux vecteurs colinéaires de même origine $O$ donnent trois points alignés."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Trouver le centre",
          "stepTheme": "Trouver le centre",
          "stepBadge": "Trouver le centre",
          "paragraphText": "Le centre est sur $(AA')$ et sur $(BB')$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q2",
            "type": "mcq",
            "prompt": "Dans le trapèze $ABB'A'$ avec $h(A)=A'$ et $h(B)=B'$, où se trouve le centre de $h$ ?",
            "options": [
              "Au milieu du segment $[AB]$",
              "Au milieu du segment $[A'B']$",
              "Au centre du trapèze",
              "À l'intersection de $(AA')$ et $(BB')$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il appartient aux deux droites, donc à leur intersection."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un seul point fixe",
          "stepTheme": "Un seul point fixe",
          "stepBadge": "Un seul point fixe",
          "paragraphText": "Si $k\\neq1$, le seul point $M$ tel que $h(M)=M$ est le centre.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q3",
            "type": "mcq",
            "prompt": "Combien de points invariants a une homothétie de rapport $k\\neq1$ ?",
            "options": [
              "Aucun",
              "Exactement deux",
              "Un seul : son centre",
              "Une infinité"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\overrightarrow{\\Omega M}=k\\overrightarrow{\\Omega M}$ avec $k\\neq1$ impose $M=\\Omega$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Vrai ou faux",
          "stepTheme": "Vrai ou faux",
          "stepBadge": "Vrai ou faux",
          "paragraphText": "$I$, $J$, $K$ sont alignés et $h$ est l'homothétie de centre $I$ qui transforme $J$ en $K$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q4",
            "type": "mcq",
            "prompt": "Laquelle de ces égalités est vraie ?",
            "options": [
              "$h(J)=J$",
              "$h(I)=I$",
              "$h(K)=K$",
              "$h(K)=J$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le centre est le seul point invariant ; $h(J)=K$, donc $h(J)\\neq J$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le cas du rapport 1",
          "stepTheme": "Le cas du rapport 1",
          "stepBadge": "Le cas du rapport 1",
          "paragraphText": "Avec $k=1$, la propriété « un seul point invariant » ne s'applique pas.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q5",
            "type": "mcq",
            "prompt": "Pour l'homothétie de rapport $1$, quels points sont invariants ?",
            "options": [
              "Tous les points du plan",
              "Seulement le centre",
              "Aucun point",
              "Les points d'une seule droite"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'identité : tous les points restent en place."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Placer une image",
          "stepTheme": "Placer une image",
          "stepBadge": "Placer une image",
          "paragraphText": "Pour $k=2$ : $M'$ est sur la demi-droite $[OM)$, deux fois plus loin de $O$ que $M$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q6",
            "type": "mcq",
            "prompt": "Où placer $M'=h(O;2)(M)$ ?",
            "options": [
              "Sur $[OM)$, avec $OM'=2\\,OM$",
              "Au milieu de $[OM]$",
              "Sur la perpendiculaire à $(OM)$ en $O$",
              "De l'autre côté de $O$, avec $OM'=OM$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\overrightarrow{OM'}=2\\overrightarrow{OM}$ : même sens, longueur double."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Rapport négatif",
          "stepTheme": "Rapport négatif",
          "stepBadge": "Rapport négatif",
          "paragraphText": "Si $k<0$, $\\overrightarrow{OM'}$ et $\\overrightarrow{OM}$ sont de sens contraires.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q7",
            "type": "mcq",
            "prompt": "Si $k<0$, où se trouve $M'$ ?",
            "options": [
              "Du même côté de $O$ que $M$",
              "De l'autre côté de $O$ par rapport à $M$",
              "Toujours au point $O$",
              "Sur la perpendiculaire à $(OM)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un rapport négatif fait passer l'image de l'autre côté du centre."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q1",
          "type": "mcq",
          "prompt": "Si $h$ de centre $O$ transforme $M$ en $M'$, alors :",
          "options": [
            "$OM=OM'$ dans tous les cas",
            "$(OM)$ et $(OM')$ sont perpendiculaires",
            "$O$, $M$ et $M'$ sont alignés",
            "$M'$ est le milieu de $[OM]$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Deux vecteurs colinéaires de même origine $O$ donnent trois points alignés."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q2",
          "type": "mcq",
          "prompt": "Dans le trapèze $ABB'A'$ avec $h(A)=A'$ et $h(B)=B'$, où se trouve le centre de $h$ ?",
          "options": [
            "Au milieu du segment $[AB]$",
            "Au milieu du segment $[A'B']$",
            "Au centre du trapèze",
            "À l'intersection de $(AA')$ et $(BB')$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il appartient aux deux droites, donc à leur intersection."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q3",
          "type": "mcq",
          "prompt": "Combien de points invariants a une homothétie de rapport $k\\neq1$ ?",
          "options": [
            "Aucun",
            "Exactement deux",
            "Un seul : son centre",
            "Une infinité"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\overrightarrow{\\Omega M}=k\\overrightarrow{\\Omega M}$ avec $k\\neq1$ impose $M=\\Omega$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q4",
          "type": "mcq",
          "prompt": "Laquelle de ces égalités est vraie ?",
          "options": [
            "$h(J)=J$",
            "$h(I)=I$",
            "$h(K)=K$",
            "$h(K)=J$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le centre est le seul point invariant ; $h(J)=K$, donc $h(J)\\neq J$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q5",
          "type": "mcq",
          "prompt": "Pour l'homothétie de rapport $1$, quels points sont invariants ?",
          "options": [
            "Tous les points du plan",
            "Seulement le centre",
            "Aucun point",
            "Les points d'une seule droite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'identité : tous les points restent en place."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q6",
          "type": "mcq",
          "prompt": "Où placer $M'=h(O;2)(M)$ ?",
          "options": [
            "Sur $[OM)$, avec $OM'=2\\,OM$",
            "Au milieu de $[OM]$",
            "Sur la perpendiculaire à $(OM)$ en $O$",
            "De l'autre côté de $O$, avec $OM'=OM$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\overrightarrow{OM'}=2\\overrightarrow{OM}$ : même sens, longueur double."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p02_q7",
          "type": "mcq",
          "prompt": "Si $k<0$, où se trouve $M'$ ?",
          "options": [
            "Du même côté de $O$ que $M$",
            "De l'autre côté de $O$ par rapport à $M$",
            "Toujours au point $O$",
            "Sur la perpendiculaire à $(OM)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un rapport négatif fait passer l'image de l'autre côté du centre."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l12_homothetie_p03",
      "order": 3,
      "title": "Propriété fondamentale, longueurs et aires",
      "summary": "Les vecteurs sont multipliés par $k$, les longueurs par $|k|$, les aires par $k^2$.",
      "conceptExplanation": "Propriété fondamentale : si $M$ et $N$ ont pour images $M'$ et $N'$ par une homothétie de rapport $k$, alors :\n$\\overrightarrow{M'N'}=k\\,\\overrightarrow{MN}$.\n\nConséquences :\n- longueurs : $M'N'=|k|\\,MN$ (une longueur est toujours positive) ;\n- aires : l'homothétie multiplie les aires par $k^2$.\n\nExemple : $h$ de centre $\\Omega$ et de rapport $-2$, avec $h(E)=F$ et $h(S)=T$.\nAlors $\\overrightarrow{FT}=-2\\overrightarrow{ES}$, et aussi $\\overrightarrow{TF}=-2\\overrightarrow{SE}$.\nMais $\\overrightarrow{\\Omega E}=-2\\overrightarrow{\\Omega S}$ est faux : $E$ et $S$ ne sont pas un point et son image.\n\nExemple : $h$ de rapport $2$, $AB=6$, $AC=5$, $BC=7$. Alors $A'C'=2\\times5=10$ et $B'C'=2\\times7=14$.",
      "keyRule": "$\\overrightarrow{M'N'}=k\\,\\overrightarrow{MN}$ ; $M'N'=|k|\\,MN$ ; aire $\\times k^2$.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer des longueurs",
        "statement": "$h$ a pour rapport $2$, et $AC=5$, $BC=7$. Calcule $A'C'$ et $B'C'$.",
        "methodSteps": [
          "$A'C'=|2|\\times AC=2\\times5$.",
          "$B'C'=|2|\\times BC=2\\times7$."
        ],
        "conclusion": "$A'C'=10$ et $B'C'=14$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La propriété fondamentale",
          "stepTheme": "La propriété fondamentale",
          "stepBadge": "La propriété fondamentale",
          "paragraphText": "Si $h(M)=M'$ et $h(N)=N'$, avec $h$ de rapport $k$ : $\\overrightarrow{M'N'}=k\\,\\overrightarrow{MN}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q1",
            "type": "mcq",
            "prompt": "Si $h$, de rapport $k$, transforme $M$ en $M'$ et $N$ en $N'$, alors :",
            "options": [
              "$\\overrightarrow{MN}=k\\,\\overrightarrow{M'N'}$",
              "$\\overrightarrow{M'N'}=\\overrightarrow{MN}$",
              "$\\overrightarrow{M'N'}=k\\,\\overrightarrow{MN}$",
              "$\\overrightarrow{MM'}=k\\,\\overrightarrow{NN'}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le vecteur image est $k$ fois le vecteur de départ."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Appliquer à E, F, S, T",
          "stepTheme": "Appliquer à E, F, S, T",
          "stepBadge": "Appliquer à E, F, S, T",
          "paragraphText": "$h$ a pour rapport $-2$, $h(E)=F$ et $h(S)=T$.\nOn applique la propriété à $E\\mapsto F$ et $S\\mapsto T$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q2",
            "type": "mcq",
            "prompt": "Une homothétie $h$ de rapport $-2$ vérifie $h(E)=F$ et $h(S)=T$. Quelle égalité de vecteurs est vraie ?",
            "options": [
              "$\\overrightarrow{ES}=-2\\overrightarrow{FT}$",
              "$\\overrightarrow{\\Omega E}=-2\\overrightarrow{\\Omega S}$",
              "$\\overrightarrow{FT}=2\\overrightarrow{ES}$",
              "$\\overrightarrow{FT}=-2\\overrightarrow{ES}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'image de $\\overrightarrow{ES}$ est $\\overrightarrow{FT}$, multiplié par $-2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Dans l'autre sens",
          "stepTheme": "Dans l'autre sens",
          "stepBadge": "Dans l'autre sens",
          "paragraphText": "En changeant le sens des deux vecteurs : $\\overrightarrow{TF}=-\\overrightarrow{FT}$ et $\\overrightarrow{SE}=-\\overrightarrow{ES}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q3",
            "type": "mcq",
            "prompt": "Une homothétie de rapport $-2$ vérifie $h(E)=F$ et $h(S)=T$, donc $\\overrightarrow{FT}=-2\\overrightarrow{ES}$. À quoi est égal $\\overrightarrow{TF}$ ?",
            "options": [
              "$2\\overrightarrow{SE}$",
              "$-2\\overrightarrow{ES}$",
              "$-2\\overrightarrow{SE}$",
              "$-\\frac12\\overrightarrow{SE}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\overrightarrow{TF}=-\\overrightarrow{FT}=2\\overrightarrow{ES}=-2\\overrightarrow{SE}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les longueurs",
          "stepTheme": "Les longueurs",
          "stepBadge": "Les longueurs",
          "paragraphText": "Une longueur est positive : $A'B'=|k|\\,AB$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q4",
            "type": "mcq",
            "prompt": "$h$ a pour rapport $-3$ et $AB=4$. Combien vaut $A'B'$ ?",
            "options": [
              "$-12$",
              "$\\dfrac43$",
              "$7$",
              "$12$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$A'B'=|-3|\\times4=12$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un triangle agrandi",
          "stepTheme": "Un triangle agrandi",
          "stepBadge": "Un triangle agrandi",
          "paragraphText": "$h$ de rapport $2$ transforme $ABC$ en $A'B'C'$, avec $AB=6$, $AC=5$ et $BC=7$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q5",
            "type": "mcq",
            "prompt": "Une homothétie $h$ de rapport $2$ transforme le triangle $ABC$ en $A'B'C'$, avec $AB=6$, $AC=5$ et $BC=7$. Combien vaut $B'C'$ ?",
            "options": [
              "$14$",
              "$7$",
              "$9$",
              "$28$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$B'C'=2\\times BC=14$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les aires",
          "stepTheme": "Les aires",
          "stepBadge": "Les aires",
          "paragraphText": "Une homothétie de rapport $k$ multiplie les aires par $k^2$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q6",
            "type": "mcq",
            "prompt": "Un triangle a une aire de $6$ cm². Quelle est l'aire de son image par une homothétie de rapport $3$ ?",
            "options": [
              "$18$ cm²",
              "$54$ cm²",
              "$9$ cm²",
              "$6$ cm²"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$6\\times3^2=54$ cm²."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le signe du rapport",
          "stepTheme": "Le signe du rapport",
          "stepBadge": "Le signe du rapport",
          "paragraphText": "Le signe de $k$ change le sens des vecteurs, jamais le signe d'une longueur.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q7",
            "type": "mcq",
            "prompt": "$AB=10$ et $h$ a pour rapport $-\\dfrac12$. Combien vaut $A'B'$ ?",
            "options": [
              "$-5$",
              "$5$",
              "$20$",
              "$10$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$A'B'=\\left|-\\frac12\\right|\\times10=5$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q1",
          "type": "mcq",
          "prompt": "Si $h$, de rapport $k$, transforme $M$ en $M'$ et $N$ en $N'$, alors :",
          "options": [
            "$\\overrightarrow{MN}=k\\,\\overrightarrow{M'N'}$",
            "$\\overrightarrow{M'N'}=\\overrightarrow{MN}$",
            "$\\overrightarrow{M'N'}=k\\,\\overrightarrow{MN}$",
            "$\\overrightarrow{MM'}=k\\,\\overrightarrow{NN'}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le vecteur image est $k$ fois le vecteur de départ."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q2",
          "type": "mcq",
          "prompt": "Une homothétie $h$ de rapport $-2$ vérifie $h(E)=F$ et $h(S)=T$. Quelle égalité de vecteurs est vraie ?",
          "options": [
            "$\\overrightarrow{ES}=-2\\overrightarrow{FT}$",
            "$\\overrightarrow{\\Omega E}=-2\\overrightarrow{\\Omega S}$",
            "$\\overrightarrow{FT}=2\\overrightarrow{ES}$",
            "$\\overrightarrow{FT}=-2\\overrightarrow{ES}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'image de $\\overrightarrow{ES}$ est $\\overrightarrow{FT}$, multiplié par $-2$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q3",
          "type": "mcq",
          "prompt": "Une homothétie de rapport $-2$ vérifie $h(E)=F$ et $h(S)=T$, donc $\\overrightarrow{FT}=-2\\overrightarrow{ES}$. À quoi est égal $\\overrightarrow{TF}$ ?",
          "options": [
            "$2\\overrightarrow{SE}$",
            "$-2\\overrightarrow{ES}$",
            "$-2\\overrightarrow{SE}$",
            "$-\\frac12\\overrightarrow{SE}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\overrightarrow{TF}=-\\overrightarrow{FT}=2\\overrightarrow{ES}=-2\\overrightarrow{SE}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q4",
          "type": "mcq",
          "prompt": "$h$ a pour rapport $-3$ et $AB=4$. Combien vaut $A'B'$ ?",
          "options": [
            "$-12$",
            "$\\dfrac43$",
            "$7$",
            "$12$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$A'B'=|-3|\\times4=12$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q5",
          "type": "mcq",
          "prompt": "Une homothétie $h$ de rapport $2$ transforme le triangle $ABC$ en $A'B'C'$, avec $AB=6$, $AC=5$ et $BC=7$. Combien vaut $B'C'$ ?",
          "options": [
            "$14$",
            "$7$",
            "$9$",
            "$28$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$B'C'=2\\times BC=14$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q6",
          "type": "mcq",
          "prompt": "Un triangle a une aire de $6$ cm². Quelle est l'aire de son image par une homothétie de rapport $3$ ?",
          "options": [
            "$18$ cm²",
            "$54$ cm²",
            "$9$ cm²",
            "$6$ cm²"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$6\\times3^2=54$ cm²."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p03_q7",
          "type": "mcq",
          "prompt": "$AB=10$ et $h$ a pour rapport $-\\dfrac12$. Combien vaut $A'B'$ ?",
          "options": [
            "$-5$",
            "$5$",
            "$20$",
            "$10$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$A'B'=\\left|-\\frac12\\right|\\times10=5$."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l12_homothetie_p04",
      "order": 4,
      "title": "Images de droites, segments et cercles",
      "summary": "Une droite devient une droite parallèle, un cercle devient un cercle.",
      "conceptExplanation": "Par une homothétie $h$ de centre $O$ et de rapport $k$ :\n- l'image d'une droite $(D)$ est une droite parallèle à $(D)$ ;\n- si $O\\in(D)$, l'image de $(D)$ est $(D)$ elle-même : $(D)$ est globalement invariante ;\n- l'image d'une demi-droite est une demi-droite ;\n- l'image du segment $[AB]$ est le segment $[A'B']$, avec $A'B'=|k|\\,AB$ ;\n- l'image du cercle de centre $I$ et de rayon $r$ est le cercle de centre $h(I)$ et de rayon $|k|\\,r$.\n\nConstruire l'image d'une droite $(D)$ ($O\\notin(D)$) : on prend un point $A$ de $(D)$, on construit $A'=h(A)$, puis on trace la parallèle à $(D)$ passant par $A'$.\n\nExemple : cercle de centre $O$ et de rayon $4$ cm, homothétie de centre $I$ et de rapport $-\\frac54$. Le cercle image a pour centre $O'=h(O)$ et pour rayon $\\frac54\\times4=5$ cm.",
      "keyRule": "Droite → droite parallèle (la même si elle passe par le centre). Cercle $(I;r)$ → cercle $(h(I);|k|r)$.",
      "formulas": [],
      "workedExample": {
        "title": "L'image d'un cercle",
        "statement": "$(C)$ a pour centre $O$ et pour rayon $4$ cm. Quelle est son image par $h$ de centre $I$ et de rapport $-\\frac54$ ?",
        "methodSteps": [
          "On construit $O'=h(O)$ : $\\overrightarrow{IO'}=-\\frac54\\overrightarrow{IO}$.",
          "Rayon : $\\left|-\\frac54\\right|\\times4=5$ cm."
        ],
        "conclusion": "C'est le cercle de centre $O'$ et de rayon $5$ cm."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'image d'une droite",
          "stepTheme": "L'image d'une droite",
          "stepBadge": "L'image d'une droite",
          "paragraphText": "L'image d'une droite par une homothétie est une droite parallèle.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est l'image d'une droite $(D)$ par une homothétie ?",
            "options": [
              "Une droite parallèle à $(D)$",
              "Une droite perpendiculaire à $(D)$",
              "Un cercle passant par le centre",
              "Un segment de même longueur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le parallélisme est la marque des homothéties."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Construire l'image",
          "stepTheme": "Construire l'image",
          "stepBadge": "Construire l'image",
          "paragraphText": "On place $A\\in(D)$, on construit $A'=h(A)$, puis la parallèle à $(D)$ passant par $A'$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q2",
            "type": "mcq",
            "prompt": "$O\\notin(D)$, $A\\in(D)$ et $A'=h(A)$. L'image de $(D)$ est :",
            "options": [
              "la perpendiculaire à $(D)$ passant par $A'$",
              "la droite $(OA)$",
              "la droite $(D)$ elle-même",
              "la parallèle à $(D)$ passant par $A'$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'image passe par $A'$ et elle est parallèle à $(D)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Une droite qui passe par le centre",
          "stepTheme": "Une droite qui passe par le centre",
          "stepBadge": "Une droite qui passe par le centre",
          "paragraphText": "Si $O\\in(D)$, chaque point de $(D)$ a son image sur $(D)$ : la droite est globalement invariante.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q3",
            "type": "mcq",
            "prompt": "Si le centre $O$ est sur $(D)$, l'image de $(D)$ est :",
            "options": [
              "une parallèle distincte de $(D)$",
              "la perpendiculaire à $(D)$ en $O$",
              "$(D)$ elle-même",
              "le point $O$ seul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le point, son image et le centre sont alignés sur $(D)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'image d'un segment",
          "stepTheme": "L'image d'un segment",
          "stepBadge": "L'image d'un segment",
          "paragraphText": "Si $h(A)=A'$ et $h(B)=B'$, l'image de $[AB]$ est $[A'B']$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q4",
            "type": "mcq",
            "prompt": "Quelle est l'image du segment $[AB]$ ?",
            "options": [
              "La droite $(A'B')$",
              "Le segment $[AB']$",
              "Le segment $[A'B']$",
              "La demi-droite $[A'B')$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les extrémités vont sur les extrémités."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le rayon du cercle image",
          "stepTheme": "Le rayon du cercle image",
          "stepBadge": "Le rayon du cercle image",
          "paragraphText": "Rayon de l'image : $|k|\\times r$.\nIci $r=4$ cm et $k=-\\frac54$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q5",
            "type": "mcq",
            "prompt": "Un cercle de rayon $r=4$ cm a pour image, par une homothétie de rapport $k=-\\dfrac54$, un cercle de rayon $|k|\\times r$. Quel est le rayon du cercle image ?",
            "options": [
              "$5$ cm",
              "$-5$ cm",
              "$\\dfrac{16}{5}$ cm",
              "$4$ cm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac54\\times4=5$ cm."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Le centre du cercle image",
          "stepTheme": "Le centre du cercle image",
          "stepBadge": "Le centre du cercle image",
          "paragraphText": "Le cercle image a pour centre l'image du centre du cercle.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q6",
            "type": "mcq",
            "prompt": "Quel est le centre du cercle image de $(C)$, de centre $O$, par $h$ de centre $I$ ?",
            "options": [
              "Le centre $I$ de l'homothétie",
              "Le point $O$ lui-même",
              "Le milieu de $[IO]$",
              "$h(O)$, l'image de $O$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On construit $O'=h(O)$, puis on trace le cercle de rayon $|k|r$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "L'image d'une demi-droite",
          "stepTheme": "L'image d'une demi-droite",
          "stepBadge": "L'image d'une demi-droite",
          "paragraphText": "L'image d'une demi-droite $[AB)$ est la demi-droite $[A'B')$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q7",
            "type": "mcq",
            "prompt": "Quelle est l'image d'une demi-droite par une homothétie ?",
            "options": [
              "Une droite entière",
              "Une demi-droite",
              "Un segment",
              "Un cercle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'origine $A$ a pour image l'origine $A'$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est l'image d'une droite $(D)$ par une homothétie ?",
          "options": [
            "Une droite parallèle à $(D)$",
            "Une droite perpendiculaire à $(D)$",
            "Un cercle passant par le centre",
            "Un segment de même longueur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le parallélisme est la marque des homothéties."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q2",
          "type": "mcq",
          "prompt": "$O\\notin(D)$, $A\\in(D)$ et $A'=h(A)$. L'image de $(D)$ est :",
          "options": [
            "la perpendiculaire à $(D)$ passant par $A'$",
            "la droite $(OA)$",
            "la droite $(D)$ elle-même",
            "la parallèle à $(D)$ passant par $A'$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'image passe par $A'$ et elle est parallèle à $(D)$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q3",
          "type": "mcq",
          "prompt": "Si le centre $O$ est sur $(D)$, l'image de $(D)$ est :",
          "options": [
            "une parallèle distincte de $(D)$",
            "la perpendiculaire à $(D)$ en $O$",
            "$(D)$ elle-même",
            "le point $O$ seul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le point, son image et le centre sont alignés sur $(D)$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q4",
          "type": "mcq",
          "prompt": "Quelle est l'image du segment $[AB]$ ?",
          "options": [
            "La droite $(A'B')$",
            "Le segment $[AB']$",
            "Le segment $[A'B']$",
            "La demi-droite $[A'B')$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les extrémités vont sur les extrémités."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q5",
          "type": "mcq",
          "prompt": "Un cercle de rayon $r=4$ cm a pour image, par une homothétie de rapport $k=-\\dfrac54$, un cercle de rayon $|k|\\times r$. Quel est le rayon du cercle image ?",
          "options": [
            "$5$ cm",
            "$-5$ cm",
            "$\\dfrac{16}{5}$ cm",
            "$4$ cm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac54\\times4=5$ cm."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q6",
          "type": "mcq",
          "prompt": "Quel est le centre du cercle image de $(C)$, de centre $O$, par $h$ de centre $I$ ?",
          "options": [
            "Le centre $I$ de l'homothétie",
            "Le point $O$ lui-même",
            "Le milieu de $[IO]$",
            "$h(O)$, l'image de $O$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On construit $O'=h(O)$, puis on trace le cercle de rayon $|k|r$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p04_q7",
          "type": "mcq",
          "prompt": "Quelle est l'image d'une demi-droite par une homothétie ?",
          "options": [
            "Une droite entière",
            "Une demi-droite",
            "Un segment",
            "Un cercle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'origine $A$ a pour image l'origine $A'$."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l12_homothetie_p05",
      "order": 5,
      "title": "Ce que l'homothétie conserve",
      "summary": "Alignement, milieux, parallélisme, orthogonalité et angles orientés.",
      "conceptExplanation": "Par une homothétie :\n- des points alignés ont pour images des points alignés ;\n- le milieu d'un segment a pour image le milieu du segment image ;\n- deux droites parallèles ont pour images deux droites parallèles ;\n- deux droites perpendiculaires ont pour images deux droites perpendiculaires ;\n- un angle orienté a pour image un angle orienté de même mesure.\nLes longueurs ne sont conservées que si $|k|=1$.\n\nExemple 1 : $ABCD$ est un parallélogramme de centre $O$, $E$ est le symétrique de $A$ par rapport à $D$ et $F$ celui de $A$ par rapport à $B$. Par $h(A;2)$ : $D\\mapsto E$, $B\\mapsto F$, $O\\mapsto C$. Comme $D$, $O$, $B$ sont alignés, $E$, $C$, $F$ le sont aussi, et $C$ est le milieu de $[EF]$.\n\nExemple 2 : $\\overrightarrow{AM}=\\frac13\\overrightarrow{AB}$, $\\overrightarrow{AN}=\\frac13\\overrightarrow{AC}$, $I$ milieu de $[BC]$, $J$ milieu de $[MN]$. Par $h(A;\\frac13)$, $h(I)=J$, donc $A$, $I$, $J$ sont alignés.\n\nExemple 3 : $A$ est sur un cercle $(C)$ et $M'$ est le milieu de $[AM]$. Comme $\\overrightarrow{AM'}=\\frac12\\overrightarrow{AM}$, quand $M$ décrit $(C)$, $M'$ décrit l'image de $(C)$ par $h(A;\\frac12)$.",
      "keyRule": "Conservés : alignement, milieu, parallélisme, orthogonalité, angles orientés. Pas les longueurs (sauf si $|k|=1$).",
      "formulas": [],
      "workedExample": {
        "title": "Démontrer un alignement",
        "statement": "$\\overrightarrow{AM}=\\frac13\\overrightarrow{AB}$, $\\overrightarrow{AN}=\\frac13\\overrightarrow{AC}$ ; $I$ et $J$ sont les milieux de $[BC]$ et $[MN]$. Montre que $A$, $I$, $J$ sont alignés.",
        "methodSteps": [
          "Par $h(A;\\frac13)$ : $h(B)=M$ et $h(C)=N$, donc $h([BC])=[MN]$.",
          "L'homothétie conserve le milieu : $h(I)=J$."
        ],
        "conclusion": "Le centre $A$, le point $I$ et son image $J$ sont alignés."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Ce qui est conservé",
          "stepTheme": "Ce qui est conservé",
          "stepBadge": "Ce qui est conservé",
          "paragraphText": "Une homothétie conserve l'alignement, le milieu, le parallélisme, l'orthogonalité et les angles orientés.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une homothétie conserve toujours ?",
            "options": [
              "Les longueurs des segments",
              "L'alignement et les milieux",
              "Les aires des figures",
              "La position de tous les points"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les longueurs sont multipliées par $|k|$ et les aires par $k^2$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les angles",
          "stepTheme": "Les angles",
          "stepBadge": "Les angles",
          "paragraphText": "Un angle orienté a pour image un angle orienté de même mesure.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q2",
            "type": "mcq",
            "prompt": "Un angle orienté mesure $\\dfrac{\\pi}{3}$. Quelle est la mesure de son image ?",
            "options": [
              "$\\dfrac{2\\pi}{3}$",
              "$-\\dfrac{\\pi}{3}$",
              "$\\dfrac{\\pi}{6}$",
              "$\\dfrac{\\pi}{3}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les angles orientés sont conservés, quel que soit $k$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'orthogonalité",
          "stepTheme": "L'orthogonalité",
          "stepBadge": "L'orthogonalité",
          "paragraphText": "Deux droites perpendiculaires ont pour images deux droites perpendiculaires.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q3",
            "type": "mcq",
            "prompt": "Deux droites perpendiculaires ont pour images :",
            "options": [
              "deux droites perpendiculaires",
              "deux droites parallèles",
              "deux droites confondues",
              "deux cercles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque image est parallèle à sa droite de départ, donc l'angle droit reste."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'image d'un milieu",
          "stepTheme": "L'image d'un milieu",
          "stepBadge": "L'image d'un milieu",
          "paragraphText": "$\\overrightarrow{AM}=\\frac13\\overrightarrow{AB}$, $\\overrightarrow{AN}=\\frac13\\overrightarrow{AC}$. $I$ est le milieu de $[BC]$, $J$ celui de $[MN]$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q4",
            "type": "mcq",
            "prompt": "Quelle est l'image de $I$ par $h\\left(A;\\frac13\\right)$ ?",
            "options": [
              "$M$",
              "$N$",
              "$J$",
              "$I$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$h([BC])=[MN]$ et le milieu va sur le milieu."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le parallélogramme",
          "stepTheme": "Le parallélogramme",
          "stepBadge": "Le parallélogramme",
          "paragraphText": "$ABCD$ est un parallélogramme de centre $O$ : $\\overrightarrow{AC}=2\\overrightarrow{AO}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q5",
            "type": "mcq",
            "prompt": "Quelle est l'image de $O$ par $h(A;2)$ ?",
            "options": [
              "$B$",
              "$D$",
              "$O$",
              "$C$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\overrightarrow{AC}=2\\overrightarrow{AO}$ signifie $h(A;2)(O)=C$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Prouver un milieu",
          "stepTheme": "Prouver un milieu",
          "stepBadge": "Prouver un milieu",
          "paragraphText": "$ABCD$ est un parallélogramme de centre $I$, $h=h(A;\\frac32)$, $B'=h(B)$, $D'=h(D)$, et $(AC)$ coupe $(B'D')$ en $K$. On montre que $\\overrightarrow{AK}=\\frac32\\overrightarrow{AI}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q6",
            "type": "mcq",
            "prompt": "Pourquoi $K$ est-il le milieu de $[B'D']$ ?",
            "options": [
              "Parce que $AK=AI$",
              "Parce que $(AC)\\perp(B'D')$",
              "$K=h(I)$ et $I$ est le milieu de $[BD]$",
              "Parce que $ABCD$ est un carré"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'homothétie envoie le milieu de $[BD]$ sur le milieu de $[B'D']$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un lieu de points",
          "stepTheme": "Un lieu de points",
          "stepBadge": "Un lieu de points",
          "paragraphText": "$A\\in(C)$ et $M'$ est le milieu de $[AM]$ : $\\overrightarrow{AM'}=\\frac12\\overrightarrow{AM}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q7",
            "type": "mcq",
            "prompt": "Quand $M$ décrit le cercle $(C)$, que décrit $M'$ ?",
            "options": [
              "Le cercle $(C)$ lui-même",
              "L'image de $(C)$ par $h\\left(A;\\frac12\\right)$",
              "Le cercle de centre $A$ et de rayon $1$",
              "La droite tangente à $(C)$ en $A$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$M'=h(A;\\frac12)(M)$ : c'est un cercle de rayon moitié, passant par $A$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une homothétie conserve toujours ?",
          "options": [
            "Les longueurs des segments",
            "L'alignement et les milieux",
            "Les aires des figures",
            "La position de tous les points"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les longueurs sont multipliées par $|k|$ et les aires par $k^2$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q2",
          "type": "mcq",
          "prompt": "Un angle orienté mesure $\\dfrac{\\pi}{3}$. Quelle est la mesure de son image ?",
          "options": [
            "$\\dfrac{2\\pi}{3}$",
            "$-\\dfrac{\\pi}{3}$",
            "$\\dfrac{\\pi}{6}$",
            "$\\dfrac{\\pi}{3}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les angles orientés sont conservés, quel que soit $k$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q3",
          "type": "mcq",
          "prompt": "Deux droites perpendiculaires ont pour images :",
          "options": [
            "deux droites perpendiculaires",
            "deux droites parallèles",
            "deux droites confondues",
            "deux cercles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque image est parallèle à sa droite de départ, donc l'angle droit reste."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q4",
          "type": "mcq",
          "prompt": "Quelle est l'image de $I$ par $h\\left(A;\\frac13\\right)$ ?",
          "options": [
            "$M$",
            "$N$",
            "$J$",
            "$I$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$h([BC])=[MN]$ et le milieu va sur le milieu."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q5",
          "type": "mcq",
          "prompt": "Quelle est l'image de $O$ par $h(A;2)$ ?",
          "options": [
            "$B$",
            "$D$",
            "$O$",
            "$C$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\overrightarrow{AC}=2\\overrightarrow{AO}$ signifie $h(A;2)(O)=C$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q6",
          "type": "mcq",
          "prompt": "Pourquoi $K$ est-il le milieu de $[B'D']$ ?",
          "options": [
            "Parce que $AK=AI$",
            "Parce que $(AC)\\perp(B'D')$",
            "$K=h(I)$ et $I$ est le milieu de $[BD]$",
            "Parce que $ABCD$ est un carré"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'homothétie envoie le milieu de $[BD]$ sur le milieu de $[B'D']$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p05_q7",
          "type": "mcq",
          "prompt": "Quand $M$ décrit le cercle $(C)$, que décrit $M'$ ?",
          "options": [
            "Le cercle $(C)$ lui-même",
            "L'image de $(C)$ par $h\\left(A;\\frac12\\right)$",
            "Le cercle de centre $A$ et de rayon $1$",
            "La droite tangente à $(C)$ en $A$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$M'=h(A;\\frac12)(M)$ : c'est un cercle de rayon moitié, passant par $A$."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l12_homothetie_p06",
      "order": 6,
      "title": "Caractériser une homothétie et agrandir une figure",
      "summary": "Les données qui suffisent, et l'étoile de Sékou.",
      "conceptExplanation": "Une homothétie est déterminée de façon unique par :\n1. son centre $A$, un point $B$ et son image $C$, quand $A$, $B$, $C$ sont alignés et distincts ;\n2. son rapport $k$ ($k\\neq0$, $k\\neq1$), un point $A$ et son image $B\\neq A$ ;\n3. deux points distincts $M$, $N$ et leurs images $M'$, $N'$, quand $(M'N')\\parallel(MN)$ et $\\overrightarrow{M'N'}\\neq\\overrightarrow{MN}$. Le centre est alors à l'intersection de $(MM')$ et $(NN')$.\nSi $\\overrightarrow{M'N'}=\\overrightarrow{MN}$, c'est une translation, pas une homothétie.\n\nExemple : $G$ est le centre de gravité de $ABC$ et $H$ le milieu de $[BC]$. Comme $\\overrightarrow{AG}=\\frac23\\overrightarrow{AH}$, l'homothétie de centre $A$ et de rapport $\\frac23$ transforme $H$ en $G$.\n\nSituation : Sékou veut reproduire, sur un carré de $4$ cm, une étoile formée de deux triangles équilatéraux de côté $6$ cm.\n- Le plus grand segment est $[FC]$. Le triangle $FGC$ est rectangle en $G$ et $\\widehat{CFG}=30°$, donc $FC=\\dfrac{FG}{\\cos30°}=\\dfrac{6}{\\sqrt3/2}=4\\sqrt3$ cm.\n- Pour que $FC$ mesure $4$ cm : rapport $\\dfrac{4}{4\\sqrt3}=\\dfrac{\\sqrt3}{3}$.\n- Côté des triangles reproduits : $\\dfrac{\\sqrt3}{3}\\times6=2\\sqrt3\\approx3{,}46$ cm.",
      "keyRule": "Centre + point + image, ou rapport + point + image, ou deux points + leurs images (avec $\\overrightarrow{M'N'}\\neq\\overrightarrow{MN}$) : une seule homothétie.",
      "formulas": [],
      "workedExample": {
        "title": "La plus grande reproduction",
        "statement": "L'étoile mesure $4\\sqrt3$ cm de haut ($FC$) et la feuille est un carré de $4$ cm. Quel rapport utiliser, et quel est le nouveau côté des triangles ?",
        "methodSteps": [
          "Rapport : $\\dfrac{4}{4\\sqrt3}=\\dfrac{1}{\\sqrt3}=\\dfrac{\\sqrt3}{3}$.",
          "Côté : $\\dfrac{\\sqrt3}{3}\\times6=2\\sqrt3$ cm."
        ],
        "conclusion": "On utilise le rapport $\\dfrac{\\sqrt3}{3}$ : les triangles ont pour côté $2\\sqrt3\\approx3{,}46$ cm."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Centre, point et image",
          "stepTheme": "Centre, point et image",
          "stepBadge": "Centre, point et image",
          "paragraphText": "$A$, $I$, $J$ sont alignés et $I$ est le milieu de $[AJ]$ : $\\overrightarrow{IJ}=-\\overrightarrow{IA}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q1",
            "type": "mcq",
            "prompt": "Quelle est l'homothétie de centre $I$ qui transforme $A$ en $J$ ?",
            "options": [
              "$h(I;-1)$",
              "$h(I;1)$",
              "$h(I;2)$",
              "$h(I;-2)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\overrightarrow{IJ}=-1\\times\\overrightarrow{IA}$ : c'est la symétrie de centre $I$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le centre de gravité",
          "stepTheme": "Le centre de gravité",
          "stepBadge": "Le centre de gravité",
          "paragraphText": "$G$ est le centre de gravité de $ABC$ et $H$ le milieu de $[BC]$ : $\\overrightarrow{AG}=\\frac23\\overrightarrow{AH}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q2",
            "type": "mcq",
            "prompt": "Quelle homothétie de centre $A$ transforme $H$ en $G$ ?",
            "options": [
              "$h\\left(A;\\frac23\\right)$",
              "$h\\left(A;\\frac32\\right)$",
              "$h\\left(A;\\frac13\\right)$",
              "$h\\left(A;-\\frac23\\right)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$G$ est aux deux tiers de la médiane en partant de $A$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Pourquoi k ≠ 1",
          "stepTheme": "Pourquoi k ≠ 1",
          "stepBadge": "Pourquoi k ≠ 1",
          "paragraphText": "Pour « rapport + point + image », on exige $k\\neq1$ et $B\\neq A$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q3",
            "type": "mcq",
            "prompt": "$A\\neq B$. Existe-t-il une homothétie de rapport $1$ qui transforme $A$ en $B$ ?",
            "options": [
              "Oui, et une seule",
              "Non : le rapport $1$ ne déplace aucun point",
              "Oui, une infinité",
              "Oui, si $A$ est le centre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'homothétie de rapport $1$ est l'identité : l'image de $A$ est $A$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Deux points et leurs images",
          "stepTheme": "Deux points et leurs images",
          "stepBadge": "Deux points et leurs images",
          "paragraphText": "Le centre est aligné avec chaque point et son image.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q4",
            "type": "mcq",
            "prompt": "Pour trouver le centre de l'homothétie qui envoie $A$ sur $A'$ et $B$ sur $B'$, on trace :",
            "options": [
              "les droites $(AB)$ et $(A'B')$",
              "les médiatrices de $[AA']$ et $[BB']$",
              "les droites $(AA')$ et $(BB')$",
              "le cercle de diamètre $[AA']$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le centre est le point commun de $(AA')$ et $(BB')$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Translation ou homothétie",
          "stepTheme": "Translation ou homothétie",
          "stepBadge": "Translation ou homothétie",
          "paragraphText": "Condition : $(M'N')\\parallel(MN)$ et $\\overrightarrow{M'N'}\\neq\\overrightarrow{MN}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q5",
            "type": "mcq",
            "prompt": "Si $\\overrightarrow{M'N'}=\\overrightarrow{MN}$ avec $M'\\neq M$, la transformation qui envoie $M$ sur $M'$ et $N$ sur $N'$ est :",
            "options": [
              "une homothétie de rapport $1$",
              "une homothétie de rapport $-1$",
              "une homothétie de rapport $2$",
              "une translation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\overrightarrow{MM'}=\\overrightarrow{NN'}$ : tous les points glissent du même vecteur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le rapport de Sékou",
          "stepTheme": "Le rapport de Sékou",
          "stepBadge": "Le rapport de Sékou",
          "paragraphText": "La hauteur de l'étoile est $FC=4\\sqrt3$ cm ; la feuille mesure $4$ cm.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q6",
            "type": "mcq",
            "prompt": "Quel rapport donne la plus grande reproduction possible ?",
            "options": [
              "$\\sqrt3$",
              "$\\dfrac23$",
              "$\\dfrac{\\sqrt3}{3}$",
              "$\\dfrac{\\sqrt3}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\frac{4}{4\\sqrt3}=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Les nouveaux côtés",
          "stepTheme": "Les nouveaux côtés",
          "stepBadge": "Les nouveaux côtés",
          "paragraphText": "Les longueurs sont multipliées par le rapport : $\\dfrac{\\sqrt3}{3}\\times6$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q7",
            "type": "mcq",
            "prompt": "Sékou reproduit, avec une homothétie de rapport $\\dfrac{\\sqrt3}{3}$, une étoile formée de deux triangles équilatéraux de côté $6$ cm. Quelle est la longueur des côtés des triangles reproduits ?",
            "options": [
              "$6\\sqrt3$ cm",
              "$2$ cm",
              "$3\\sqrt3$ cm",
              "$2\\sqrt3$ cm"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\frac{6\\sqrt3}{3}=2\\sqrt3\\approx3{,}46$ cm, ce qui tient dans $4$ cm."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q1",
          "type": "mcq",
          "prompt": "Quelle est l'homothétie de centre $I$ qui transforme $A$ en $J$ ?",
          "options": [
            "$h(I;-1)$",
            "$h(I;1)$",
            "$h(I;2)$",
            "$h(I;-2)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\overrightarrow{IJ}=-1\\times\\overrightarrow{IA}$ : c'est la symétrie de centre $I$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q2",
          "type": "mcq",
          "prompt": "Quelle homothétie de centre $A$ transforme $H$ en $G$ ?",
          "options": [
            "$h\\left(A;\\frac23\\right)$",
            "$h\\left(A;\\frac32\\right)$",
            "$h\\left(A;\\frac13\\right)$",
            "$h\\left(A;-\\frac23\\right)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$G$ est aux deux tiers de la médiane en partant de $A$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q3",
          "type": "mcq",
          "prompt": "$A\\neq B$. Existe-t-il une homothétie de rapport $1$ qui transforme $A$ en $B$ ?",
          "options": [
            "Oui, et une seule",
            "Non : le rapport $1$ ne déplace aucun point",
            "Oui, une infinité",
            "Oui, si $A$ est le centre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'homothétie de rapport $1$ est l'identité : l'image de $A$ est $A$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q4",
          "type": "mcq",
          "prompt": "Pour trouver le centre de l'homothétie qui envoie $A$ sur $A'$ et $B$ sur $B'$, on trace :",
          "options": [
            "les droites $(AB)$ et $(A'B')$",
            "les médiatrices de $[AA']$ et $[BB']$",
            "les droites $(AA')$ et $(BB')$",
            "le cercle de diamètre $[AA']$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le centre est le point commun de $(AA')$ et $(BB')$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q5",
          "type": "mcq",
          "prompt": "Si $\\overrightarrow{M'N'}=\\overrightarrow{MN}$ avec $M'\\neq M$, la transformation qui envoie $M$ sur $M'$ et $N$ sur $N'$ est :",
          "options": [
            "une homothétie de rapport $1$",
            "une homothétie de rapport $-1$",
            "une homothétie de rapport $2$",
            "une translation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\overrightarrow{MM'}=\\overrightarrow{NN'}$ : tous les points glissent du même vecteur."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q6",
          "type": "mcq",
          "prompt": "Quel rapport donne la plus grande reproduction possible ?",
          "options": [
            "$\\sqrt3$",
            "$\\dfrac23$",
            "$\\dfrac{\\sqrt3}{3}$",
            "$\\dfrac{\\sqrt3}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\frac{4}{4\\sqrt3}=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l12_homothetie_p06_q7",
          "type": "mcq",
          "prompt": "Sékou reproduit, avec une homothétie de rapport $\\dfrac{\\sqrt3}{3}$, une étoile formée de deux triangles équilatéraux de côté $6$ cm. Quelle est la longueur des côtés des triangles reproduits ?",
          "options": [
            "$6\\sqrt3$ cm",
            "$2$ cm",
            "$3\\sqrt3$ cm",
            "$2\\sqrt3$ cm"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\frac{6\\sqrt3}{3}=2\\sqrt3\\approx3{,}46$ cm, ce qui tient dans $4$ cm."
        }
      ]
    }
  ]
};
