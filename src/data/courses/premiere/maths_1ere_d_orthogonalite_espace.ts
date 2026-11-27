import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Orthogonalité dans l'espace » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Orthogonalité dans l'espace » (document PDF officiel, Mathématiques 1ère D, lot P07)
export const MATHS_1ERE_D_L13_ORTHOGONALITE_ESPACE: CurriculumChapter = {
  "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 13,
  "title": "Leçon 13 : Orthogonalité dans l'espace",
  "summary": "La leçon définit les droites orthogonales, les droites perpendiculaires à un plan et les plans perpendiculaires dans l’espace, puis les projections orthogonales sur un plan et sur une droite avec leurs propriétés, en s’appuyant sur les configurations du cube.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Orthogonalité dans l'espace » (document PDF officiel, Mathématiques 1ère D, lot P07)",
  "points": [
    {
      "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01",
      "order": 1,
      "title": "Droites orthogonales de l’espace",
      "summary": "Définir deux droites orthogonales à l’aide de droites auxiliaires perpendiculaires et utiliser les propriétés avec les parallèles.",
      "conceptExplanation": "Dans l’espace, deux droites $(D_1)$ et $(D_2)$ sont dites orthogonales lorsqu’il existe deux droites perpendiculaires $(L_1)$ et $(L_2)$ telles que $(D_1)$ est parallèle à $(L_1)$ et $(D_2)$ est parallèle à $(L_2)$ ; on note $(D_1) \\perp (D_2)$.\nLe terme perpendiculaire ne s’utilise que lorsque les droites sont orthogonales et sécantes : deux droites orthogonales ne sont pas nécessairement sécantes.\nExemple du cube $ABCDEFGH$ : $(AE)$ et $(DC)$ sont orthogonales car $(GH)$ est perpendiculaire à $(CG)$, avec $(GH)$ parallèle à $(DC)$ et $(CG)$ parallèle à $(AE)$.\nPropriétés : si deux droites sont orthogonales, toute parallèle à l’une est orthogonale à l’autre ; si deux droites sont parallèles, toute droite orthogonale à l’une est orthogonale à l’autre. En revanche, deux droites orthogonales à une même troisième ne sont pas nécessairement parallèles.",
      "keyRule": "Pour montrer que deux droites sont orthogonales, remplace chacune par une parallèle de façon à te ramener à deux droites perpendiculaires.",
      "formulas": [
        {
          "name": "Notation de l’orthogonalité",
          "formula": "(D_1) \\perp (D_2)",
          "note": "$(D_1)$ est orthogonale à $(D_2)$."
        }
      ],
      "workedExample": {
        "title": "Démontrer que (IJ) et (AC) sont orthogonales (exercice de fixation)",
        "statement": "Dans le cube $ABCDEFGH$, $I$ est le milieu de $[DG]$ et $J$ le milieu de $[BG]$. Démontre que les droites $(IJ)$ et $(AC)$ sont orthogonales.",
        "methodSteps": [
          "Dans le triangle $BDG$, $I$ et $J$ sont les milieux de $[DG]$ et $[BG]$ : d’après le théorème des milieux, $(IJ)$ et $(DB)$ sont parallèles.",
          "Comme $ABCD$ est un carré, ses diagonales $(AC)$ et $(BD)$ sont perpendiculaires.",
          "Puisque $(IJ)$ est parallèle à $(BD)$ et que $(AC)$ est orthogonale à $(BD)$, alors $(AC)$ est orthogonale à $(IJ)$."
        ],
        "conclusion": "Les droites $(IJ)$ et $(AC)$ sont orthogonales, sans être sécantes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de deux droites orthogonales",
          "stepTheme": "Définition de deux droites orthogonales",
          "stepBadge": "Définition de deux droites orthogonales",
          "paragraphText": "• Deux droites orthogonales : dans l’espace, deux droites $(D_1)$ et $(D_2)$ sont dites orthogonales lorsqu’il existe deux droites perpendiculaires $(L_1)$ et $(L_2)$ telles que $(D_1)$ est parallèle à $(L_1)$ et $(D_2)$ est parallèle à $(L_2)$.\nOn note $(D_1) \\perp (D_2)$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01_q1",
            "type": "mcq",
            "prompt": "Deux droites $(D_1)$ et $(D_2)$ de l’espace sont orthogonales lorsque :",
            "options": [
              "Il existe deux droites perpendiculaires qui leur sont respectivement parallèles",
              "Elles se coupent nécessairement en un point",
              "Elles sont contenues dans un même plan",
              "Elles sont parallèles entre elles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La définition passe par deux droites auxiliaires perpendiculaires, chacune parallèle à l’une des deux droites."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L’exemple du cube : (AE) et (DC)",
          "stepTheme": "L’exemple du cube : (AE) et (DC)",
          "stepBadge": "L’exemple du cube : (AE) et (DC)",
          "paragraphText": "Dans le cube $ABCDEFGH$, les droites $(AE)$ et $(DC)$ sont orthogonales.\nEn effet, $(GH)$ est perpendiculaire à $(CG)$, et de plus $(GH)$ est parallèle à $(DC)$ et $(CG)$ est parallèle à $(AE)$ : la définition s’applique avec ces deux droites auxiliaires.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01_q2",
            "type": "mcq",
            "prompt": "Dans le cube $ABCDEFGH$, pourquoi les droites $(AE)$ et $(DC)$ sont-elles orthogonales ?",
            "options": [
              "Parce qu’elles se coupent au centre du cube",
              "Parce que $(GH)$ est perpendiculaire à $(CG)$, avec $(GH)$ parallèle à $(DC)$ et $(CG)$ parallèle à $(AE)$",
              "Parce qu’elles appartiennent à la même face",
              "Parce qu’elles sont parallèles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On remplace chaque droite par une parallèle : $(DC)$ par $(GH)$ et $(AE)$ par $(CG)$, qui sont perpendiculaires."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Orthogonales ou perpendiculaires",
          "stepTheme": "Orthogonales ou perpendiculaires",
          "stepBadge": "Orthogonales ou perpendiculaires",
          "paragraphText": "• Remarque de la leçon : le terme perpendiculaire ne s’utilise que lorsque les droites sont orthogonales et sécantes.\nAutrement dit, deux droites orthogonales ne sont pas nécessairement sécantes : dans l’espace, elles peuvent ne jamais se rencontrer.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01_q3",
            "type": "mcq",
            "prompt": "On dit que deux droites sont perpendiculaires lorsque :",
            "options": [
              "Elles sont orthogonales mais jamais sécantes",
              "Elles sont parallèles et distinctes",
              "Elles sont orthogonales et sécantes",
              "Elles appartiennent à deux plans parallèles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Perpendiculaire ajoute à orthogonale une condition : les deux droites doivent aussi se couper."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une parallèle à l’une reste orthogonale à l’autre",
          "stepTheme": "Une parallèle à l’une reste orthogonale à l’autre",
          "stepBadge": "Une parallèle à l’une reste orthogonale à l’autre",
          "paragraphText": "• Propriété 1 : si deux droites sont orthogonales, alors toute droite parallèle à l’une est orthogonale à l’autre.\n• Propriété 2 : si deux droites sont parallèles, alors toute droite orthogonale à l’une est orthogonale à l’autre.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01_q4",
            "type": "mcq",
            "prompt": "Si $(D_1)$ est orthogonale à $(D_2)$ et si $(D_3)$ est parallèle à $(D_1)$, alors :",
            "options": [
              "$(D_3)$ est parallèle à $(D_2)$",
              "$(D_3)$ coupe $(D_2)$ en son milieu",
              "$(D_3)$ est contenue dans le même plan que $(D_2)$",
              "$(D_3)$ est orthogonale à $(D_2)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D’après la propriété 1, une droite parallèle à l’une des deux droites orthogonales est orthogonale à l’autre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Deux droites orthogonales à une même troisième",
          "stepTheme": "Deux droites orthogonales à une même troisième",
          "stepBadge": "Deux droites orthogonales à une même troisième",
          "paragraphText": "• Piège : dans l’espace, deux droites orthogonales à une même troisième ne sont pas nécessairement parallèles.\nC’est une différence avec le plan : l’orthogonalité à une même droite ne suffit pas à conclure au parallélisme dans l’espace.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01_q5",
            "type": "mcq",
            "prompt": "Dans l’espace, deux droites orthogonales à une même troisième droite sont-elles nécessairement parallèles ?",
            "options": [
              "Oui, toujours",
              "Non, pas nécessairement",
              "Oui, si elles sont sécantes",
              "Oui, si elles appartiennent à un cube"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remarque de la leçon précise qu’elles ne sont pas nécessairement parallèles dans l’espace."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La droite des milieux dans le cube",
          "stepTheme": "La droite des milieux dans le cube",
          "stepBadge": "La droite des milieux dans le cube",
          "paragraphText": "Dans le cube $ABCDEFGH$, $I$ milieu de $[DG]$ et $J$ milieu de $[BG]$ : dans le triangle $BDG$, le théorème des milieux donne $(IJ)$ parallèle à $(DB)$.\nComme $ABCD$ est un carré, ses diagonales $(AC)$ et $(BD)$ sont perpendiculaires, donc $(AC)$ est orthogonale à $(IJ)$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01_q6",
            "type": "mcq",
            "prompt": "Dans le triangle $BDG$, avec $I$ milieu de $[DG]$ et $J$ milieu de $[BG]$, la droite $(IJ)$ est parallèle à :",
            "options": [
              "$(AC)$",
              "$(DG)$",
              "$(DB)$",
              "$(BG)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le théorème des milieux relie les milieux de deux côtés : $(IJ)$ est parallèle au troisième côté $(DB)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01_q1",
          "type": "mcq",
          "prompt": "Deux droites $(D_1)$ et $(D_2)$ de l’espace sont orthogonales lorsque :",
          "options": [
            "Il existe deux droites perpendiculaires qui leur sont respectivement parallèles",
            "Elles se coupent nécessairement en un point",
            "Elles sont contenues dans un même plan",
            "Elles sont parallèles entre elles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La définition passe par deux droites auxiliaires perpendiculaires, chacune parallèle à l’une des deux droites."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01_q2",
          "type": "mcq",
          "prompt": "Dans le cube $ABCDEFGH$, pourquoi les droites $(AE)$ et $(DC)$ sont-elles orthogonales ?",
          "options": [
            "Parce qu’elles se coupent au centre du cube",
            "Parce que $(GH)$ est perpendiculaire à $(CG)$, avec $(GH)$ parallèle à $(DC)$ et $(CG)$ parallèle à $(AE)$",
            "Parce qu’elles appartiennent à la même face",
            "Parce qu’elles sont parallèles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On remplace chaque droite par une parallèle : $(DC)$ par $(GH)$ et $(AE)$ par $(CG)$, qui sont perpendiculaires."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01_q3",
          "type": "mcq",
          "prompt": "On dit que deux droites sont perpendiculaires lorsque :",
          "options": [
            "Elles sont orthogonales mais jamais sécantes",
            "Elles sont parallèles et distinctes",
            "Elles sont orthogonales et sécantes",
            "Elles appartiennent à deux plans parallèles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Perpendiculaire ajoute à orthogonale une condition : les deux droites doivent aussi se couper."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01_q4",
          "type": "mcq",
          "prompt": "Si $(D_1)$ est orthogonale à $(D_2)$ et si $(D_3)$ est parallèle à $(D_1)$, alors :",
          "options": [
            "$(D_3)$ est parallèle à $(D_2)$",
            "$(D_3)$ coupe $(D_2)$ en son milieu",
            "$(D_3)$ est contenue dans le même plan que $(D_2)$",
            "$(D_3)$ est orthogonale à $(D_2)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D’après la propriété 1, une droite parallèle à l’une des deux droites orthogonales est orthogonale à l’autre."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01_q5",
          "type": "mcq",
          "prompt": "Dans l’espace, deux droites orthogonales à une même troisième droite sont-elles nécessairement parallèles ?",
          "options": [
            "Oui, toujours",
            "Non, pas nécessairement",
            "Oui, si elles sont sécantes",
            "Oui, si elles appartiennent à un cube"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remarque de la leçon précise qu’elles ne sont pas nécessairement parallèles dans l’espace."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p01_q6",
          "type": "mcq",
          "prompt": "Dans le triangle $BDG$, avec $I$ milieu de $[DG]$ et $J$ milieu de $[BG]$, la droite $(IJ)$ est parallèle à :",
          "options": [
            "$(AC)$",
            "$(DG)$",
            "$(DB)$",
            "$(BG)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le théorème des milieux relie les milieux de deux côtés : $(IJ)$ est parallèle au troisième côté $(DB)$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02",
      "order": 2,
      "title": "Droites et plans orthogonaux : définition et propriété fondamentale",
      "summary": "Définir une droite perpendiculaire à un plan, appliquer la propriété fondamentale et les deux propriétés d’unicité.",
      "conceptExplanation": "Une droite $(D)$ est perpendiculaire à un plan $(P)$ lorsqu’elle est orthogonale à deux droites sécantes contenues dans $(P)$ ; on note $(D) \\perp (P)$.\nExemple : dans le cube, $(DH) \\perp (HE)$ et $(DH) \\perp (HG)$, deux droites sécantes en $H$ du plan $(EGH)$, donc $(DH)$ est perpendiculaire au plan $(EGH)$.\nPropriété fondamentale : si une droite est perpendiculaire à un plan, alors elle est orthogonale à toute droite incluse dans ce plan ; ainsi $(DH) \\perp (EG)$.\nUnicités : il existe une unique droite passant par un point donné et perpendiculaire à un plan donné (par $B$, perpendiculaire au plan $(GCD)$ : la droite $(BC)$), et un unique plan passant par un point donné et perpendiculaire à une droite donnée (par $A$, perpendiculaire à $(AD)$ : le plan $(ABE)$).",
      "keyRule": "Deux droites sécantes du plan pour établir la perpendicularité, puis la propriété fondamentale pour atteindre toutes les droites du plan.",
      "formulas": [
        {
          "name": "Notation droite perpendiculaire à un plan",
          "formula": "(D) \\perp (P)",
          "note": "$(D)$ est perpendiculaire au plan $(P)$."
        }
      ],
      "workedExample": {
        "title": "Justifier que (DH) est perpendiculaire au plan (EGH) (exemple de la leçon)",
        "statement": "Dans le cube $ABCDEFGH$, justifie que la droite $(DH)$ est perpendiculaire au plan $(EGH)$, puis que $(DH)$ et $(EG)$ sont orthogonales.",
        "methodSteps": [
          "On vérifie que $(DH) \\perp (HE)$ et $(DH) \\perp (HG)$.",
          "$(HE)$ et $(HG)$ sont deux droites sécantes en $H$, incluses dans le plan $(EGH)$ : donc $(DH)$ est perpendiculaire au plan $(EGH)$.",
          "Par la propriété fondamentale, $(DH)$ est orthogonale à toute droite du plan, en particulier à $(EG)$."
        ],
        "conclusion": "La définition donne la perpendicularité au plan, et la propriété fondamentale donne l’orthogonalité avec $(EG)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d’une droite perpendiculaire à un plan",
          "stepTheme": "Définition d’une droite perpendiculaire à un plan",
          "stepBadge": "Définition d’une droite perpendiculaire à un plan",
          "paragraphText": "• Droite perpendiculaire à un plan : une droite $(D)$ est perpendiculaire à un plan $(P)$ lorsqu’elle est orthogonale à deux droites sécantes contenues dans $(P)$.\nOn note $(D) \\perp (P)$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02_q1",
            "type": "mcq",
            "prompt": "Une droite $(D)$ est perpendiculaire à un plan $(P)$ lorsqu’elle est orthogonale à :",
            "options": [
              "Une seule droite du plan",
              "Deux droites sécantes contenues dans le plan",
              "Deux droites parallèles du plan",
              "Toutes les droites de l’espace"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition exige deux droites du plan, et elles doivent être sécantes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L’exemple du cube : (DH) et le plan (EGH)",
          "stepTheme": "L’exemple du cube : (DH) et le plan (EGH)",
          "stepBadge": "L’exemple du cube : (DH) et le plan (EGH)",
          "paragraphText": "Dans le cube $ABCDEFGH$, $(DH)$ est perpendiculaire au plan $(EGH)$.\nEn effet $(DH) \\perp (HE)$ et $(DH) \\perp (HG)$ : la droite $(DH)$ est orthogonale à deux droites sécantes en $H$ et incluses dans le plan $(EGH)$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02_q2",
            "type": "mcq",
            "prompt": "Dans le cube, à quelles deux droites du plan $(EGH)$ la droite $(DH)$ est-elle orthogonale ?",
            "options": [
              "$(EG)$ et $(GH)$",
              "$(HE)$ et $(HG)$",
              "$(EF)$ et $(FG)$",
              "$(EA)$ et $(EH)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé de la leçon utilise $(HE)$ et $(HG)$, deux droites du plan $(EGH)$ sécantes en $H$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La propriété fondamentale",
          "stepTheme": "La propriété fondamentale",
          "stepBadge": "La propriété fondamentale",
          "paragraphText": "• Propriété fondamentale : si une droite est perpendiculaire à un plan, alors elle est orthogonale à toute droite incluse dans ce plan.\nApplication : $(DH)$ perpendiculaire au plan $(EGH)$ et $(EG)$ incluse dans ce plan donnent $(DH) \\perp (EG)$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02_q3",
            "type": "mcq",
            "prompt": "Si $(DH)$ est perpendiculaire au plan $(EGH)$, que peut-on dire de $(DH)$ et de la droite $(EG)$ incluse dans ce plan ?",
            "options": [
              "Elles sont parallèles",
              "Elles sont perpendiculaires et sécantes en $H$",
              "Elles sont orthogonales",
              "Elles sont confondues"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par la propriété fondamentale, une droite perpendiculaire à un plan est orthogonale à toute droite incluse dans le plan ; ici $(DH)$ et $(EG)$ ne se coupent pas, elles sont orthogonales sans être perpendiculaires."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Unicité de la droite perpendiculaire en un point",
          "stepTheme": "Unicité de la droite perpendiculaire en un point",
          "stepBadge": "Unicité de la droite perpendiculaire en un point",
          "paragraphText": "• Propriété : il existe une unique droite passant par un point donné et perpendiculaire à un plan donné.\nExemple de la leçon : il existe une seule droite passant par le point $B$ et perpendiculaire au plan $(GCD)$, c’est la droite $(BC)$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02_q4",
            "type": "mcq",
            "prompt": "Combien existe-t-il de droites passant par le point $B$ et perpendiculaires au plan $(GCD)$ du cube ?",
            "options": [
              "Aucune",
              "Deux",
              "Une infinité",
              "Une seule, la droite $(BC)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La propriété d’unicité donne une seule droite, et dans le cube il s’agit de $(BC)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Unicité du plan perpendiculaire en un point",
          "stepTheme": "Unicité du plan perpendiculaire en un point",
          "stepBadge": "Unicité du plan perpendiculaire en un point",
          "paragraphText": "• Propriété : il existe un unique plan passant par un point donné et perpendiculaire à une droite donnée.\nExemple de la leçon : il existe un seul plan passant par le point $A$ et perpendiculaire à la droite $(AD)$, c’est le plan $(ABE)$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02_q5",
            "type": "mcq",
            "prompt": "Le seul plan passant par le point $A$ et perpendiculaire à la droite $(AD)$ est :",
            "options": [
              "Le plan $(ABE)$",
              "Le plan $(ABC)$",
              "Le plan $(AEH)$",
              "Le plan $(ACD)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la réponse de l’exercice de fixation : le plan $(ABE)$, unique d’après la propriété."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les deux droites du plan doivent être sécantes",
          "stepTheme": "Les deux droites du plan doivent être sécantes",
          "stepBadge": "Les deux droites du plan doivent être sécantes",
          "paragraphText": "• Piège : être orthogonale à deux droites parallèles d’un plan ne suffit pas pour être perpendiculaire à ce plan.\nLa définition demande deux droites sécantes contenues dans le plan : c’est cette condition qui verrouille toutes les directions du plan.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02_q6",
            "type": "mcq",
            "prompt": "Dans la définition d’une droite perpendiculaire à un plan, les deux droites du plan utilisées doivent être :",
            "options": [
              "Parallèles entre elles",
              "Confondues",
              "Sécantes",
              "Perpendiculaires à la droite seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sans droites sécantes, une direction du plan échapperait au contrôle : la définition exige deux droites sécantes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02_q1",
          "type": "mcq",
          "prompt": "Une droite $(D)$ est perpendiculaire à un plan $(P)$ lorsqu’elle est orthogonale à :",
          "options": [
            "Une seule droite du plan",
            "Deux droites sécantes contenues dans le plan",
            "Deux droites parallèles du plan",
            "Toutes les droites de l’espace"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition exige deux droites du plan, et elles doivent être sécantes."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02_q2",
          "type": "mcq",
          "prompt": "Dans le cube, à quelles deux droites du plan $(EGH)$ la droite $(DH)$ est-elle orthogonale ?",
          "options": [
            "$(EG)$ et $(GH)$",
            "$(HE)$ et $(HG)$",
            "$(EF)$ et $(FG)$",
            "$(EA)$ et $(EH)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé de la leçon utilise $(HE)$ et $(HG)$, deux droites du plan $(EGH)$ sécantes en $H$."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02_q3",
          "type": "mcq",
          "prompt": "Si $(DH)$ est perpendiculaire au plan $(EGH)$, que peut-on dire de $(DH)$ et de la droite $(EG)$ incluse dans ce plan ?",
          "options": [
            "Elles sont parallèles",
            "Elles sont perpendiculaires et sécantes en $H$",
            "Elles sont orthogonales",
            "Elles sont confondues"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par la propriété fondamentale, une droite perpendiculaire à un plan est orthogonale à toute droite incluse dans le plan ; ici $(DH)$ et $(EG)$ ne se coupent pas, elles sont orthogonales sans être perpendiculaires."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02_q4",
          "type": "mcq",
          "prompt": "Combien existe-t-il de droites passant par le point $B$ et perpendiculaires au plan $(GCD)$ du cube ?",
          "options": [
            "Aucune",
            "Deux",
            "Une infinité",
            "Une seule, la droite $(BC)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La propriété d’unicité donne une seule droite, et dans le cube il s’agit de $(BC)$."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02_q5",
          "type": "mcq",
          "prompt": "Le seul plan passant par le point $A$ et perpendiculaire à la droite $(AD)$ est :",
          "options": [
            "Le plan $(ABE)$",
            "Le plan $(ABC)$",
            "Le plan $(AEH)$",
            "Le plan $(ACD)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la réponse de l’exercice de fixation : le plan $(ABE)$, unique d’après la propriété."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p02_q6",
          "type": "mcq",
          "prompt": "Dans la définition d’une droite perpendiculaire à un plan, les deux droites du plan utilisées doivent être :",
          "options": [
            "Parallèles entre elles",
            "Confondues",
            "Sécantes",
            "Perpendiculaires à la droite seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sans droites sécantes, une direction du plan échapperait au contrôle : la définition exige deux droites sécantes."
        }
      ]
    },
    {
      "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03",
      "order": 3,
      "title": "Propriétés : parallélisme et perpendicularité au plan",
      "summary": "Utiliser les propriétés 4 à 7 : transmission par parallélisme et conclusions de parallélisme.",
      "conceptExplanation": "Propriété 4 de la leçon : si deux droites sont parallèles, alors tout plan perpendiculaire à l’une est perpendiculaire à l’autre ; l’exercice de fixation l’applique sous la forme : $(AE)$ parallèle à $(DH)$ et $(DH)$ perpendiculaire au plan $(FGH)$ donnent $(AE)$ perpendiculaire au plan $(FGH)$.\nPropriété 5 : si deux droites sont perpendiculaires à un même plan, alors elles sont parallèles ; ainsi $(DH)$ et $(BF)$, perpendiculaires au plan $(FGH)$, sont parallèles.\nPropriété 6 : si deux plans sont parallèles, alors toute droite perpendiculaire à l’un est perpendiculaire à l’autre ; une droite perpendiculaire au plan $(FGH)$ est donc perpendiculaire au plan $(ABD)$.\nPropriété 7 : si deux plans sont perpendiculaires à une même droite, alors ils sont parallèles.",
      "keyRule": "Quand deux objets partagent la même relation de perpendicularité avec un troisième, attends-toi à une conclusion de parallélisme.",
      "formulas": [],
      "workedExample": {
        "title": "Justifier que (D) est perpendiculaire au plan (ABD) (exercice de fixation)",
        "statement": "Dans le cube $ABCDEFGH$, la droite $(D)$ est perpendiculaire aux droites $(FH)$ et $(EG)$ en $I$. Justifie que $(D)$ est perpendiculaire au plan $(ABD)$.",
        "methodSteps": [
          "La droite $(D)$, perpendiculaire aux droites $(FH)$ et $(EG)$, est perpendiculaire au plan $(FGH)$.",
          "Les plans $(ABD)$ et $(FGH)$ sont parallèles.",
          "Par la propriété 6, la droite $(D)$ est perpendiculaire au plan $(ABD)$."
        ],
        "conclusion": "La perpendicularité se transmet d’un plan à l’autre quand les deux plans sont parallèles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Rappeler le vocabulaire des propriétés",
          "stepTheme": "Rappeler le vocabulaire des propriétés",
          "stepBadge": "Rappeler le vocabulaire des propriétés",
          "paragraphText": "• Rappels : $(D) \\perp (P)$ signifie que la droite $(D)$ est perpendiculaire au plan $(P)$, et deux objets parallèles sont notés avec le symbole du parallélisme.\nLes propriétés de ce point combinent ces deux relations : perpendicularité à un plan ou à une droite, et parallélisme entre droites ou entre plans.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q1",
            "type": "mcq",
            "prompt": "Que signifie la notation $(D) \\perp (P)$ ?",
            "options": [
              "La droite $(D)$ est perpendiculaire au plan $(P)$",
              "La droite $(D)$ est parallèle au plan $(P)$",
              "La droite $(D)$ est incluse dans le plan $(P)$",
              "La droite $(D)$ coupe le plan $(P)$ en deux points"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Cette notation, introduite dans le point précédent, dit que la droite est perpendiculaire au plan : c’est le vocabulaire que les propriétés 4 à 7 utilisent."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une droite parallèle à une droite perpendiculaire au plan",
          "stepTheme": "Une droite parallèle à une droite perpendiculaire au plan",
          "stepBadge": "Une droite parallèle à une droite perpendiculaire au plan",
          "paragraphText": "• Application de la leçon : la droite $(AE)$ est parallèle à la droite $(DH)$ et $(DH)$ est perpendiculaire au plan $(FGH)$.\nAlors $(AE)$ est perpendiculaire au plan $(FGH)$ : le parallélisme transmet la perpendicularité au plan.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q2",
            "type": "mcq",
            "prompt": "Si $(AE)$ est parallèle à $(DH)$ et si $(DH)$ est perpendiculaire au plan $(FGH)$, alors $(AE)$ est :",
            "options": [
              "Parallèle au plan $(FGH)$",
              "Perpendiculaire au plan $(FGH)$",
              "Incluse dans le plan $(FGH)$",
              "Orthogonale à $(DH)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une droite parallèle à une droite perpendiculaire à un plan est elle-même perpendiculaire à ce plan."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Deux droites perpendiculaires à un même plan",
          "stepTheme": "Deux droites perpendiculaires à un même plan",
          "stepBadge": "Deux droites perpendiculaires à un même plan",
          "paragraphText": "• Propriété 5 : si deux droites sont perpendiculaires à un même plan, alors elles sont parallèles.\nExemple de la leçon : $(DH)$ et $(BF)$ sont perpendiculaires au plan $(FGH)$, donc les droites $(DH)$ et $(BF)$ sont parallèles.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q3",
            "type": "mcq",
            "prompt": "Les droites $(DH)$ et $(BF)$ sont toutes les deux perpendiculaires au plan $(FGH)$. Elles sont donc :",
            "options": [
              "Perpendiculaires entre elles",
              "Sécantes en $F$",
              "Parallèles",
              "Confondues"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Deux droites perpendiculaires à un même plan sont parallèles : c’est la propriété 5."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Deux plans parallèles et une droite perpendiculaire",
          "stepTheme": "Deux plans parallèles et une droite perpendiculaire",
          "stepBadge": "Deux plans parallèles et une droite perpendiculaire",
          "paragraphText": "• Propriété 6 : si deux plans sont parallèles, alors toute droite perpendiculaire à l’un est perpendiculaire à l’autre.\nExemple : une droite $(D)$ perpendiculaire au plan $(FGH)$ est aussi perpendiculaire au plan $(ABD)$, car ces deux plans du cube sont parallèles.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q4",
            "type": "mcq",
            "prompt": "Les plans $(ABD)$ et $(FGH)$ sont parallèles et $(D)$ est perpendiculaire au plan $(FGH)$. Alors $(D)$ est :",
            "options": [
              "Parallèle au plan $(ABD)$",
              "Incluse dans le plan $(ABD)$",
              "Sans relation avec le plan $(ABD)$",
              "Perpendiculaire au plan $(ABD)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La propriété 6 transmet la perpendicularité d’un plan à tout plan qui lui est parallèle."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Deux plans perpendiculaires à une même droite",
          "stepTheme": "Deux plans perpendiculaires à une même droite",
          "stepBadge": "Deux plans perpendiculaires à une même droite",
          "paragraphText": "• Propriété 7 : si deux plans sont perpendiculaires à une même droite, alors ils sont parallèles.\nC’est le pendant, pour les plans, de la propriété 5 énoncée pour les droites.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q5",
            "type": "mcq",
            "prompt": "Si deux plans sont perpendiculaires à une même droite, alors ces deux plans sont :",
            "options": [
              "Parallèles",
              "Perpendiculaires entre eux",
              "Sécants suivant cette droite",
              "Confondus"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la propriété 7 de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser droites et plans",
          "stepTheme": "Ne pas inverser droites et plans",
          "stepBadge": "Ne pas inverser droites et plans",
          "paragraphText": "• Piège : les conclusions changent selon les objets. Deux droites perpendiculaires à un même plan sont parallèles, et deux plans perpendiculaires à une même droite sont parallèles.\nDans les deux cas, la conclusion est un parallélisme, jamais une perpendicularité entre les deux objets.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q6",
            "type": "mcq",
            "prompt": "Deux droites perpendiculaires à un même plan sont :",
            "options": [
              "Perpendiculaires entre elles",
              "Parallèles",
              "Sécantes",
              "Orthogonales et sécantes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Attention à ne pas conclure à une perpendicularité : la propriété 5 donne deux droites parallèles."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Enchaîner les propriétés dans le cube",
          "stepTheme": "Enchaîner les propriétés dans le cube",
          "stepBadge": "Enchaîner les propriétés dans le cube",
          "paragraphText": "• Méthode de l’exercice de fixation : une droite $(D)$ perpendiculaire aux droites $(FH)$ et $(EG)$ en $I$ est d’abord perpendiculaire au plan $(FGH)$.\nEnsuite, les plans $(ABD)$ et $(FGH)$ étant parallèles, on conclut que $(D)$ est perpendiculaire au plan $(ABD)$ grâce à la propriété 6.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q7",
            "type": "mcq",
            "prompt": "Pour justifier que $(D)$ est perpendiculaire au plan $(ABD)$, quelle est la première étape de la solution de la leçon ?",
            "options": [
              "Montrer que $(D)$ est parallèle au plan $(FGH)$",
              "Montrer que $(D)$ coupe le plan $(ABD)$",
              "Montrer que $(D)$ est perpendiculaire au plan $(FGH)$",
              "Montrer que les plans $(ABD)$ et $(FGH)$ sont perpendiculaires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On établit d’abord la perpendicularité au plan $(FGH)$ avec les deux droites $(FH)$ et $(EG)$, puis on utilise le parallélisme des plans."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q1",
          "type": "mcq",
          "prompt": "Que signifie la notation $(D) \\perp (P)$ ?",
          "options": [
            "La droite $(D)$ est perpendiculaire au plan $(P)$",
            "La droite $(D)$ est parallèle au plan $(P)$",
            "La droite $(D)$ est incluse dans le plan $(P)$",
            "La droite $(D)$ coupe le plan $(P)$ en deux points"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cette notation, introduite dans le point précédent, dit que la droite est perpendiculaire au plan : c’est le vocabulaire que les propriétés 4 à 7 utilisent."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q2",
          "type": "mcq",
          "prompt": "Si $(AE)$ est parallèle à $(DH)$ et si $(DH)$ est perpendiculaire au plan $(FGH)$, alors $(AE)$ est :",
          "options": [
            "Parallèle au plan $(FGH)$",
            "Perpendiculaire au plan $(FGH)$",
            "Incluse dans le plan $(FGH)$",
            "Orthogonale à $(DH)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une droite parallèle à une droite perpendiculaire à un plan est elle-même perpendiculaire à ce plan."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q3",
          "type": "mcq",
          "prompt": "Les droites $(DH)$ et $(BF)$ sont toutes les deux perpendiculaires au plan $(FGH)$. Elles sont donc :",
          "options": [
            "Perpendiculaires entre elles",
            "Sécantes en $F$",
            "Parallèles",
            "Confondues"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Deux droites perpendiculaires à un même plan sont parallèles : c’est la propriété 5."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q4",
          "type": "mcq",
          "prompt": "Les plans $(ABD)$ et $(FGH)$ sont parallèles et $(D)$ est perpendiculaire au plan $(FGH)$. Alors $(D)$ est :",
          "options": [
            "Parallèle au plan $(ABD)$",
            "Incluse dans le plan $(ABD)$",
            "Sans relation avec le plan $(ABD)$",
            "Perpendiculaire au plan $(ABD)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La propriété 6 transmet la perpendicularité d’un plan à tout plan qui lui est parallèle."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q5",
          "type": "mcq",
          "prompt": "Si deux plans sont perpendiculaires à une même droite, alors ces deux plans sont :",
          "options": [
            "Parallèles",
            "Perpendiculaires entre eux",
            "Sécants suivant cette droite",
            "Confondus"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la propriété 7 de la leçon."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q6",
          "type": "mcq",
          "prompt": "Deux droites perpendiculaires à un même plan sont :",
          "options": [
            "Perpendiculaires entre elles",
            "Parallèles",
            "Sécantes",
            "Orthogonales et sécantes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Attention à ne pas conclure à une perpendicularité : la propriété 5 donne deux droites parallèles."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p03_q7",
          "type": "mcq",
          "prompt": "Pour justifier que $(D)$ est perpendiculaire au plan $(ABD)$, quelle est la première étape de la solution de la leçon ?",
          "options": [
            "Montrer que $(D)$ est parallèle au plan $(FGH)$",
            "Montrer que $(D)$ coupe le plan $(ABD)$",
            "Montrer que $(D)$ est perpendiculaire au plan $(FGH)$",
            "Montrer que les plans $(ABD)$ et $(FGH)$ sont perpendiculaires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On établit d’abord la perpendicularité au plan $(FGH)$ avec les deux droites $(FH)$ et $(EG)$, puis on utilise le parallélisme des plans."
        }
      ]
    },
    {
      "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04",
      "order": 4,
      "title": "Plans perpendiculaires de l’espace",
      "summary": "Définir deux plans perpendiculaires, utiliser leurs conséquences et la caractérisation par la droite d’intersection.",
      "conceptExplanation": "Deux plans sont perpendiculaires lorsque l’un d’eux contient une droite orthogonale à l’autre plan ; on note $(P) \\perp (Q)$.\nExemple : dans la pyramide régulière $SABCD$ de hauteur $[SO]$, la droite $(AO)$, incluse dans le plan $(ADB)$, est perpendiculaire au plan $(SDB)$, donc les plans $(SDB)$ et $(ABD)$ sont perpendiculaires.\nConséquences : si une droite $(D)$ est perpendiculaire à un plan $(P)$, alors tout plan parallèle à $(D)$ est perpendiculaire à $(P)$ ; si deux plans sont perpendiculaires, alors toute droite perpendiculaire à l’un est parallèle à l’autre.\nPropriétés : si deux plans sont perpendiculaires, tout plan parallèle à l’un est perpendiculaire à l’autre ; un plan est perpendiculaire à deux plans sécants si et seulement s’il est perpendiculaire à leur droite d’intersection.",
      "keyRule": "Pour montrer que deux plans sont perpendiculaires, cherche une droite de l’un qui soit perpendiculaire à l’autre.",
      "formulas": [
        {
          "name": "Notation plans perpendiculaires",
          "formula": "(P) \\perp (Q)",
          "note": "Le plan $(P)$ est perpendiculaire au plan $(Q)$."
        }
      ],
      "workedExample": {
        "title": "Démontrer que (ACE) et (DEH) sont perpendiculaires au plan (ABC) (exercice de fixation)",
        "statement": "Dans le cube $ABCDEFGH$, démontre que les plans $(ACE)$ et $(DEH)$ sont perpendiculaires au plan $(ABC)$.",
        "methodSteps": [
          "Les plans $(ACE)$ et $(DEH)$ sont sécants et leur droite d’intersection est la droite $(AE)$.",
          "$(AE) \\perp (AD)$ et $(AE) \\perp (AB)$ ; comme $(AD)$ et $(AB)$ sont incluses dans $(ABC)$, on obtient $(AE) \\perp (ABC)$.",
          "Par la propriété 2, les plans $(ACE)$ et $(DEH)$ sont perpendiculaires au plan $(ABC)$."
        ],
        "conclusion": "La perpendicularité à la droite d’intersection suffit à conclure pour les deux plans sécants."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de deux plans perpendiculaires",
          "stepTheme": "Définition de deux plans perpendiculaires",
          "stepBadge": "Définition de deux plans perpendiculaires",
          "paragraphText": "• Deux plans perpendiculaires : deux plans sont perpendiculaires lorsque l’un d’eux contient une droite orthogonale à l’autre plan.\nOn note $(P) \\perp (Q)$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04_q1",
            "type": "mcq",
            "prompt": "Deux plans $(P)$ et $(Q)$ sont perpendiculaires lorsque :",
            "options": [
              "Ils ne se coupent jamais",
              "L’un d’eux contient une droite perpendiculaire à l’autre plan",
              "Toutes leurs droites sont orthogonales deux à deux",
              "Ils contiennent la même droite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il suffit d’exhiber une droite de l’un des plans qui soit perpendiculaire à l’autre plan."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L’exemple de la pyramide régulière",
          "stepTheme": "L’exemple de la pyramide régulière",
          "stepBadge": "L’exemple de la pyramide régulière",
          "paragraphText": "Dans la pyramide régulière $SABCD$ de hauteur $[SO]$, on démontre que les plans $(SDB)$ et $(ABD)$ sont perpendiculaires.\nLa droite $(AO)$ est incluse dans le plan $(ADB)$ et elle est perpendiculaire au plan $(SDB)$ : la définition s’applique.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04_q2",
            "type": "mcq",
            "prompt": "Dans la pyramide régulière $SABCD$, quelle droite permet de montrer que les plans $(SDB)$ et $(ABD)$ sont perpendiculaires ?",
            "options": [
              "La droite $(SO)$",
              "La droite $(AB)$",
              "La droite $(AO)$, incluse dans $(ABD)$ et perpendiculaire au plan $(SDB)$",
              "La droite $(SD)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La définition demande une droite du premier plan perpendiculaire au second : c’est $(AO)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Conséquence : un plan parallèle à la droite",
          "stepTheme": "Conséquence : un plan parallèle à la droite",
          "stepBadge": "Conséquence : un plan parallèle à la droite",
          "paragraphText": "• Conséquence de la leçon : si une droite $(D)$ est perpendiculaire à un plan $(P)$, alors tout plan parallèle à $(D)$ est perpendiculaire à $(P)$.\nLe plan parallèle contient en effet une direction perpendiculaire au plan $(P)$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04_q3",
            "type": "mcq",
            "prompt": "Si $(D)$ est perpendiculaire au plan $(P)$, alors tout plan parallèle à $(D)$ est :",
            "options": [
              "Parallèle au plan $(P)$",
              "Inclus dans le plan $(P)$",
              "Sans relation avec le plan $(P)$",
              "Perpendiculaire au plan $(P)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la première conséquence énoncée après la définition des plans perpendiculaires."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Conséquence : une droite perpendiculaire à l’un des plans",
          "stepTheme": "Conséquence : une droite perpendiculaire à l’un des plans",
          "stepBadge": "Conséquence : une droite perpendiculaire à l’un des plans",
          "paragraphText": "• Piège — conséquence à ne pas inverser : si deux plans sont perpendiculaires, alors toute droite perpendiculaire à l’un est parallèle à l’autre.\nIl faut bien repérer quel objet est parallèle et lequel est perpendiculaire dans l’énoncé.\nConfondre l’objet parallèle et l’objet perpendiculaire inverse complètement la conclusion.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04_q4",
            "type": "mcq",
            "prompt": "Si deux plans sont perpendiculaires, alors toute droite perpendiculaire à l’un de ces plans est :",
            "options": [
              "Parallèle à l’autre plan",
              "Perpendiculaire à l’autre plan",
              "Incluse dans l’autre plan",
              "Sécante avec toutes les droites de l’autre plan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la seconde conséquence de la leçon sur les plans perpendiculaires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Un plan perpendiculaire à deux plans sécants",
          "stepTheme": "Un plan perpendiculaire à deux plans sécants",
          "stepBadge": "Un plan perpendiculaire à deux plans sécants",
          "paragraphText": "• Propriété 2 : un plan est perpendiculaire à deux plans sécants si et seulement s’il est perpendiculaire à leur droite d’intersection.\n• Propriété 1 : si deux plans sont perpendiculaires, alors tout plan parallèle à l’un est perpendiculaire à l’autre.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04_q5",
            "type": "mcq",
            "prompt": "Un plan est perpendiculaire à deux plans sécants si et seulement s’il est perpendiculaire à :",
            "options": [
              "Leur droite d’intersection",
              "Une droite quelconque",
              "Leur point commun unique",
              "Le plan parallèle commun"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La propriété 2 ramène la double perpendicularité à celle qui concerne la droite d’intersection des deux plans."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Démontrer avec la droite d’intersection",
          "stepTheme": "Démontrer avec la droite d’intersection",
          "stepBadge": "Démontrer avec la droite d’intersection",
          "paragraphText": "• Exercice de fixation : les plans $(ACE)$ et $(DEH)$ sont sécants et leur droite d’intersection est la droite $(AE)$.\nComme $(AE) \\perp (AD)$ et $(AE) \\perp (AB)$, avec $(AD)$ et $(AB)$ incluses dans $(ABC)$, on obtient $(AE) \\perp (ABC)$, donc les plans $(ACE)$ et $(DEH)$ sont perpendiculaires au plan $(ABC)$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la droite d’intersection des plans $(ACE)$ et $(DEH)$ dans le cube ?",
            "options": [
              "La droite $(AC)$",
              "La droite $(DE)$",
              "La droite $(AE)$",
              "La droite $(EH)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux plans contiennent le point $A$ et le point $E$ : leur intersection est la droite $(AE)$, qui est perpendiculaire au plan $(ABC)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04_q1",
          "type": "mcq",
          "prompt": "Deux plans $(P)$ et $(Q)$ sont perpendiculaires lorsque :",
          "options": [
            "Ils ne se coupent jamais",
            "L’un d’eux contient une droite perpendiculaire à l’autre plan",
            "Toutes leurs droites sont orthogonales deux à deux",
            "Ils contiennent la même droite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il suffit d’exhiber une droite de l’un des plans qui soit perpendiculaire à l’autre plan."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04_q2",
          "type": "mcq",
          "prompt": "Dans la pyramide régulière $SABCD$, quelle droite permet de montrer que les plans $(SDB)$ et $(ABD)$ sont perpendiculaires ?",
          "options": [
            "La droite $(SO)$",
            "La droite $(AB)$",
            "La droite $(AO)$, incluse dans $(ABD)$ et perpendiculaire au plan $(SDB)$",
            "La droite $(SD)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La définition demande une droite du premier plan perpendiculaire au second : c’est $(AO)$."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04_q3",
          "type": "mcq",
          "prompt": "Si $(D)$ est perpendiculaire au plan $(P)$, alors tout plan parallèle à $(D)$ est :",
          "options": [
            "Parallèle au plan $(P)$",
            "Inclus dans le plan $(P)$",
            "Sans relation avec le plan $(P)$",
            "Perpendiculaire au plan $(P)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la première conséquence énoncée après la définition des plans perpendiculaires."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04_q4",
          "type": "mcq",
          "prompt": "Si deux plans sont perpendiculaires, alors toute droite perpendiculaire à l’un de ces plans est :",
          "options": [
            "Parallèle à l’autre plan",
            "Perpendiculaire à l’autre plan",
            "Incluse dans l’autre plan",
            "Sécante avec toutes les droites de l’autre plan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la seconde conséquence de la leçon sur les plans perpendiculaires."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04_q5",
          "type": "mcq",
          "prompt": "Un plan est perpendiculaire à deux plans sécants si et seulement s’il est perpendiculaire à :",
          "options": [
            "Leur droite d’intersection",
            "Une droite quelconque",
            "Leur point commun unique",
            "Le plan parallèle commun"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La propriété 2 ramène la double perpendicularité à celle qui concerne la droite d’intersection des deux plans."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la droite d’intersection des plans $(ACE)$ et $(DEH)$ dans le cube ?",
          "options": [
            "La droite $(AC)$",
            "La droite $(DE)$",
            "La droite $(AE)$",
            "La droite $(EH)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux plans contiennent le point $A$ et le point $E$ : leur intersection est la droite $(AE)$, qui est perpendiculaire au plan $(ABC)$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05",
      "order": 5,
      "title": "Projections orthogonales sur un plan et sur une droite",
      "summary": "Définir le projeté orthogonal d’un point sur un plan ou sur une droite, et la distance associée.",
      "conceptExplanation": "Soit $A$ un point et $(P)$ un plan : l’unique droite passant par $A$ et perpendiculaire à $(P)$ coupe ce plan en $H$. Le point $H$ est le projeté orthogonal de $A$ sur $(P)$ et la distance $AH$ est la distance du point $A$ au plan $(P)$.\nSoit $B$ un point et $(\\Delta)$ une droite : l’unique plan passant par $B$ et perpendiculaire à $(\\Delta)$ coupe cette droite en $K$. Le point $K$ est le projeté orthogonal de $B$ sur $(\\Delta)$ et la distance $BK$ est la distance du point $B$ à la droite $(\\Delta)$.\nSur les figures de la leçon, $AH < AM$ pour tout autre point $M$ du plan et $BK < BN$ pour tout autre point $N$ de la droite : le projeté réalise la plus courte distance.\nExemple du cube : pour la projection $p$ sur le plan $(EHD)$, la table donne $p(B) = A$, $p(C) = D$, $p(F) = E$, $p(G) = H$, et les points du plan sont leurs propres images.",
      "keyRule": "Projeter un point, c’est faire tomber la perpendiculaire : sur un plan par une droite, sur une droite par un plan.",
      "formulas": [],
      "workedExample": {
        "title": "Lire la table de la projection sur le plan (EHD) (exemple de la leçon)",
        "statement": "Dans le cube $ABCDEFGH$, $p$ est la projection orthogonale sur le plan $(EHD)$. Détermine $p(B)$, $p(C)$ et $p(G)$.",
        "methodSteps": [
          "La perpendiculaire au plan $(EHD)$ menée depuis $B$ tombe en $A$ : $p(B) = A$.",
          "Celle menée depuis $C$ tombe en $D$ : $p(C) = D$.",
          "Celle menée depuis $G$ tombe en $H$ : $p(G) = H$."
        ],
        "conclusion": "Chaque image est le pied de la perpendiculaire au plan $(EHD)$ passant par le point."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Projeté orthogonal d’un point sur un plan",
          "stepTheme": "Projeté orthogonal d’un point sur un plan",
          "stepBadge": "Projeté orthogonal d’un point sur un plan",
          "paragraphText": "• Projeté orthogonal sur un plan : soit $A$ un point et $(P)$ un plan. L’unique droite passant par $A$ et perpendiculaire à $(P)$ coupe ce plan en $H$.\nLe point $H$ est le projeté orthogonal de $A$ sur $(P)$, et la distance $AH$ est la distance du point $A$ au plan $(P)$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05_q1",
            "type": "mcq",
            "prompt": "Le projeté orthogonal d’un point $A$ sur un plan $(P)$ est le point $H$ tel que :",
            "options": [
              "$(AH)$ est parallèle au plan $(P)$",
              "La droite $(AH)$ est perpendiculaire au plan $(P)$ et $H$ appartient au plan",
              "$H$ est le milieu du segment formé avec $A$",
              "$H$ est le centre du plan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition utilise l’unique droite passant par $A$ et perpendiculaire au plan : son pied est le projeté."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Projeté orthogonal d’un point sur une droite",
          "stepTheme": "Projeté orthogonal d’un point sur une droite",
          "stepBadge": "Projeté orthogonal d’un point sur une droite",
          "paragraphText": "• Projeté orthogonal sur une droite : soit $B$ un point et $(\\Delta)$ une droite. L’unique plan passant par $B$ et perpendiculaire à $(\\Delta)$ coupe cette droite en $K$.\nLe point $K$ est le projeté orthogonal de $B$ sur $(\\Delta)$, et la distance $BK$ est la distance du point $B$ à la droite $(\\Delta)$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05_q2",
            "type": "mcq",
            "prompt": "Le projeté orthogonal d’un point $B$ sur une droite $(\\Delta)$ s’obtient grâce à :",
            "options": [
              "L’unique plan passant par $B$ et perpendiculaire à la droite",
              "Une droite parallèle à la droite passant par $B$",
              "Le milieu de la droite",
              "Un plan parallèle à la droite"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour projeter sur une droite, on fait passer par le point l’unique plan perpendiculaire à cette droite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La distance est le plus court chemin",
          "stepTheme": "La distance est le plus court chemin",
          "stepBadge": "La distance est le plus court chemin",
          "paragraphText": "Sur la figure de la leçon, $H$ est le projeté orthogonal de $A$ sur $(P)$ et $M$ un point du plan : on a $AH < AM$.\nDe même, $K$ projeté de $B$ sur $(\\Delta)$ et $N$ point de la droite donnent $BK < BN$ : la distance est atteinte au projeté orthogonal.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05_q3",
            "type": "mcq",
            "prompt": "Si $H$ est le projeté orthogonal de $A$ sur le plan $(P)$ et $M$ un autre point du plan, alors :",
            "options": [
              "$AM < AH$",
              "$AH = AM$ dans tous les cas",
              "$AH < AM$",
              "$AH$ ne peut pas se comparer à $AM$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le segment perpendiculaire est le plus court : la distance du point au plan est $AH$, plus petite que toute autre distance $AM$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La table de projection sur le plan (EHD)",
          "stepTheme": "La table de projection sur le plan (EHD)",
          "stepBadge": "La table de projection sur le plan (EHD)",
          "paragraphText": "Dans le cube, $p$ est la projection orthogonale sur le plan $(EHD)$. La table de la leçon donne notamment $p(B) = A$ et $p(C) = D$.\nLes points $I$, $J$ et $K$ sont des points respectifs des arêtes $[EF]$, $[FG]$ et $[GH]$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05_q4",
            "type": "mcq",
            "prompt": "Dans la projection orthogonale $p$ sur le plan $(EHD)$ du cube, l’image du point $C$ est :",
            "options": [
              "Le point $A$",
              "Le point $D$",
              "Le point $H$",
              "Le point $E$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La table complétée dans la leçon donne $p(C) = D$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Images des sommets du cube",
          "stepTheme": "Images des sommets du cube",
          "stepBadge": "Images des sommets du cube",
          "paragraphText": "La même table donne $p(F) = E$, $p(G) = H$ et $p(K) = H$ pour le point $K$ de l’arête $[GH]$.\nChaque point est envoyé au pied de la perpendiculaire au plan $(EHD)$ menée depuis ce point.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05_q5",
            "type": "mcq",
            "prompt": "Dans cette même projection sur le plan $(EHD)$, l’image du point $G$ est :",
            "options": [
              "Le point $E$",
              "Le point $D$",
              "Le point $A$",
              "Le point $H$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D’après la table de la leçon, $p(G) = H$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un point du plan est son propre projeté",
          "stepTheme": "Un point du plan est son propre projeté",
          "stepBadge": "Un point du plan est son propre projeté",
          "paragraphText": "• Piège : un point qui appartient déjà au plan est son propre projeté orthogonal.\nDans la table, $p(A) = A$, $p(E) = E$ et $p(H) = H$ : la perpendiculaire menée depuis un point du plan le retrouve lui-même.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05_q6",
            "type": "mcq",
            "prompt": "Si un point $M$ appartient au plan $(P)$, son projeté orthogonal sur $(P)$ est :",
            "options": [
              "Le centre du plan",
              "Un point différent selon la direction",
              "Le point $M$ lui-même",
              "Le projeté de l’origine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La droite perpendiculaire au plan passant par $M$ coupe le plan en $M$ lui-même."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05_q1",
          "type": "mcq",
          "prompt": "Le projeté orthogonal d’un point $A$ sur un plan $(P)$ est le point $H$ tel que :",
          "options": [
            "$(AH)$ est parallèle au plan $(P)$",
            "La droite $(AH)$ est perpendiculaire au plan $(P)$ et $H$ appartient au plan",
            "$H$ est le milieu du segment formé avec $A$",
            "$H$ est le centre du plan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition utilise l’unique droite passant par $A$ et perpendiculaire au plan : son pied est le projeté."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05_q2",
          "type": "mcq",
          "prompt": "Le projeté orthogonal d’un point $B$ sur une droite $(\\Delta)$ s’obtient grâce à :",
          "options": [
            "L’unique plan passant par $B$ et perpendiculaire à la droite",
            "Une droite parallèle à la droite passant par $B$",
            "Le milieu de la droite",
            "Un plan parallèle à la droite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour projeter sur une droite, on fait passer par le point l’unique plan perpendiculaire à cette droite."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05_q3",
          "type": "mcq",
          "prompt": "Si $H$ est le projeté orthogonal de $A$ sur le plan $(P)$ et $M$ un autre point du plan, alors :",
          "options": [
            "$AM < AH$",
            "$AH = AM$ dans tous les cas",
            "$AH < AM$",
            "$AH$ ne peut pas se comparer à $AM$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le segment perpendiculaire est le plus court : la distance du point au plan est $AH$, plus petite que toute autre distance $AM$."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05_q4",
          "type": "mcq",
          "prompt": "Dans la projection orthogonale $p$ sur le plan $(EHD)$ du cube, l’image du point $C$ est :",
          "options": [
            "Le point $A$",
            "Le point $D$",
            "Le point $H$",
            "Le point $E$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La table complétée dans la leçon donne $p(C) = D$."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05_q5",
          "type": "mcq",
          "prompt": "Dans cette même projection sur le plan $(EHD)$, l’image du point $G$ est :",
          "options": [
            "Le point $E$",
            "Le point $D$",
            "Le point $A$",
            "Le point $H$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D’après la table de la leçon, $p(G) = H$."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p05_q6",
          "type": "mcq",
          "prompt": "Si un point $M$ appartient au plan $(P)$, son projeté orthogonal sur $(P)$ est :",
          "options": [
            "Le centre du plan",
            "Un point différent selon la direction",
            "Le point $M$ lui-même",
            "Le projeté de l’origine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La droite perpendiculaire au plan passant par $M$ coupe le plan en $M$ lui-même."
        }
      ]
    },
    {
      "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06",
      "order": 6,
      "title": "Propriétés des projections orthogonales",
      "summary": "Décrire l’image d’une droite et d’un segment par une projection orthogonale, et utiliser la conservation du milieu.",
      "conceptExplanation": "Par une projection orthogonale sur un plan $(P)$, l’image d’une droite $(D)$ est un singleton si $(D)$ est perpendiculaire à $(P)$, et une droite si $(D)$ n’est pas perpendiculaire à $(P)$.\nL’image d’un segment $[AB]$ est un singleton si la droite $(AB)$ est perpendiculaire à $(P)$, et un segment sinon.\nPropriété du milieu : l’image du milieu d’un segment $[AB]$ est le milieu de l’image du segment $[AB]$, si $(AB)$ n’est pas perpendiculaire à $(P)$.\nExemple du cube : $I$, centre du carré $EFGH$, est le milieu de $[HF]$ ; le projeté de $[HF]$ sur le plan $(ABC)$ est $[DB]$, donc le projeté de $I$ est le milieu de $[DB]$, c’est-à-dire $J$, centre du carré $ABCD$.",
      "keyRule": "Avant d’appliquer la conservation du milieu, vérifie que la droite du segment n’est pas perpendiculaire au plan de projection.",
      "formulas": [],
      "workedExample": {
        "title": "Déterminer le projeté orthogonal du point I (exercice de fixation)",
        "statement": "Dans le cube $ABCDEFGH$, $J$ est le centre du carré $ABCD$ et $I$ le centre du carré $EFGH$. Détermine le projeté orthogonal du point $I$ sur le plan $(ABC)$.",
        "methodSteps": [
          "$I$ est le milieu du segment $[HF]$.",
          "Le projeté orthogonal de $[HF]$ sur le plan $(ABC)$ est le segment $[DB]$.",
          "Par la propriété du milieu, le projeté de $I$ est le milieu de $[DB]$."
        ],
        "conclusion": "Le projeté orthogonal de $I$ sur le plan $(ABC)$ est le point $J$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Image d’une droite par une projection sur un plan",
          "stepTheme": "Image d’une droite par une projection sur un plan",
          "stepBadge": "Image d’une droite par une projection sur un plan",
          "paragraphText": "• Propriété 1 : par une projection orthogonale sur un plan $(P)$, l’image d’une droite $(D)$ est un singleton si $(D)$ est perpendiculaire à $(P)$.\nDans le cas contraire, l’image de la droite est une droite.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06_q1",
            "type": "mcq",
            "prompt": "Par une projection orthogonale sur un plan, l’image d’une droite perpendiculaire à ce plan est :",
            "options": [
              "Une droite parallèle au plan",
              "Un singleton",
              "Un segment",
              "Le plan entier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tous les points de la droite se projettent au même pied de la perpendiculaire : l’image est un seul point."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Image d’un segment",
          "stepTheme": "Image d’un segment",
          "stepBadge": "Image d’un segment",
          "paragraphText": "• Propriété 2 : par une projection orthogonale sur un plan $(P)$, l’image d’un segment $[AB]$ est un singleton si la droite $(AB)$ est perpendiculaire à $(P)$.\nSi la droite $(AB)$ n’est pas perpendiculaire à $(P)$, l’image du segment est un segment.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06_q2",
            "type": "mcq",
            "prompt": "Si la droite $(AB)$ n’est pas perpendiculaire au plan de projection, l’image du segment $[AB]$ est :",
            "options": [
              "Un singleton",
              "Une droite entière",
              "Un segment",
              "Un plan"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le segment se projette en un segment reliant les projetés de ses extrémités."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le projeté du milieu d’un segment",
          "stepTheme": "Le projeté du milieu d’un segment",
          "stepBadge": "Le projeté du milieu d’un segment",
          "paragraphText": "• Propriété 3 : par une projection orthogonale sur un plan $(P)$, l’image du milieu d’un segment $[AB]$ est le milieu de l’image du segment $[AB]$, si $(AB)$ n’est pas perpendiculaire à $(P)$.\nLa projection conserve donc le milieu dans ce cas.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06_q3",
            "type": "mcq",
            "prompt": "Si $(AB)$ n’est pas perpendiculaire au plan de projection, l’image du milieu de $[AB]$ est :",
            "options": [
              "L’une des extrémités de l’image",
              "Le milieu de l’image du segment $[AB]$",
              "Un point extérieur au segment image",
              "Le projeté de $A$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la propriété 3 : la projection orthogonale conserve le milieu, sous la condition énoncée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "La condition sur la droite (AB)",
          "stepTheme": "La condition sur la droite (AB)",
          "stepBadge": "La condition sur la droite (AB)",
          "paragraphText": "• Piège : les propriétés du segment et du milieu supposent que la droite $(AB)$ n’est pas perpendiculaire au plan.\nSi elle l’est, tout le segment s’écrase en un singleton et il n’y a plus de segment image dont on prendrait le milieu.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06_q4",
            "type": "mcq",
            "prompt": "Si la droite $(AB)$ est perpendiculaire au plan de projection, l’image du segment $[AB]$ est :",
            "options": [
              "Un segment de même longueur",
              "Une droite",
              "Le plan",
              "Un singleton"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Tous les points du segment ont le même projeté : l’image est réduite à un point."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le projeté du centre I dans le cube",
          "stepTheme": "Le projeté du centre I dans le cube",
          "stepBadge": "Le projeté du centre I dans le cube",
          "paragraphText": "Dans le cube, $J$ est le centre du carré $ABCD$ et $I$ le centre du carré $EFGH$.\n$I$ est le milieu du segment $[HF]$, dont le projeté orthogonal sur le plan $(ABC)$ est le segment $[DB]$ : le projeté de $I$ est donc le milieu de $[DB]$, c’est-à-dire le point $J$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06_q5",
            "type": "mcq",
            "prompt": "Le projeté orthogonal du centre $I$ du carré $EFGH$ sur le plan $(ABC)$ est :",
            "options": [
              "Le point $J$, centre du carré $ABCD$",
              "Le point $D$",
              "Le point $B$",
              "Le point $H$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le projeté du milieu est le milieu du projeté : milieu de $[HF]$ projeté donne le milieu de $[DB]$, qui est $J$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Utiliser le milieu pour projeter un point",
          "stepTheme": "Utiliser le milieu pour projeter un point",
          "stepBadge": "Utiliser le milieu pour projeter un point",
          "paragraphText": "• Méthode de l’exercice de fixation : pour projeter un point qui est le milieu d’un segment, on projette d’abord le segment entier.\nIci, le projeté de $[HF]$ sur $(ABC)$ est $[DB]$, puis on prend le milieu de ce segment image pour obtenir le projeté cherché.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06_q6",
            "type": "mcq",
            "prompt": "Dans l’exercice, quel est le projeté orthogonal du segment $[HF]$ sur le plan $(ABC)$ ?",
            "options": [
              "Le segment $[AC]$",
              "Le segment $[DB]$",
              "Le point $J$",
              "Le segment $[HF]$ lui-même"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$H$ se projette en $D$ et $F$ en $B$ : l’image du segment $[HF]$ est le segment $[DB]$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06_q1",
          "type": "mcq",
          "prompt": "Par une projection orthogonale sur un plan, l’image d’une droite perpendiculaire à ce plan est :",
          "options": [
            "Une droite parallèle au plan",
            "Un singleton",
            "Un segment",
            "Le plan entier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tous les points de la droite se projettent au même pied de la perpendiculaire : l’image est un seul point."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06_q2",
          "type": "mcq",
          "prompt": "Si la droite $(AB)$ n’est pas perpendiculaire au plan de projection, l’image du segment $[AB]$ est :",
          "options": [
            "Un singleton",
            "Une droite entière",
            "Un segment",
            "Un plan"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le segment se projette en un segment reliant les projetés de ses extrémités."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06_q3",
          "type": "mcq",
          "prompt": "Si $(AB)$ n’est pas perpendiculaire au plan de projection, l’image du milieu de $[AB]$ est :",
          "options": [
            "L’une des extrémités de l’image",
            "Le milieu de l’image du segment $[AB]$",
            "Un point extérieur au segment image",
            "Le projeté de $A$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la propriété 3 : la projection orthogonale conserve le milieu, sous la condition énoncée."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06_q4",
          "type": "mcq",
          "prompt": "Si la droite $(AB)$ est perpendiculaire au plan de projection, l’image du segment $[AB]$ est :",
          "options": [
            "Un segment de même longueur",
            "Une droite",
            "Le plan",
            "Un singleton"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Tous les points du segment ont le même projeté : l’image est réduite à un point."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06_q5",
          "type": "mcq",
          "prompt": "Le projeté orthogonal du centre $I$ du carré $EFGH$ sur le plan $(ABC)$ est :",
          "options": [
            "Le point $J$, centre du carré $ABCD$",
            "Le point $D$",
            "Le point $B$",
            "Le point $H$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le projeté du milieu est le milieu du projeté : milieu de $[HF]$ projeté donne le milieu de $[DB]$, qui est $J$."
        },
        {
          "id": "premiere_d_maths_geometrie_l13_orthogonalite_espace_p06_q6",
          "type": "mcq",
          "prompt": "Dans l’exercice, quel est le projeté orthogonal du segment $[HF]$ sur le plan $(ABC)$ ?",
          "options": [
            "Le segment $[AC]$",
            "Le segment $[DB]$",
            "Le point $J$",
            "Le segment $[HF]$ lui-même"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$H$ se projette en $D$ et $F$ en $B$ : l’image du segment $[HF]$ est le segment $[DB]$."
        }
      ]
    }
  ]
};
