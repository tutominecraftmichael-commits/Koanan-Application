import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Orthogonalité dans l’espace » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Orthogonalité dans l’espace » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L12_ORTHOGONALITE_ESPACE: CurriculumChapter = {
  "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 12,
  "title": "Leçon 12 : Orthogonalité dans l’espace",
  "summary": "La leçon définit les droites orthogonales, les droites et plans orthogonaux avec la propriété fondamentale, les plans perpendiculaires, puis les projections orthogonales sur un plan et sur une droite et leurs propriétés, à travers les configurations du cube.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Orthogonalité dans l’espace » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01",
      "order": 1,
      "title": "Droites orthogonales de l’espace",
      "summary": "Définir deux droites orthogonales, les distinguer des droites perpendiculaires et utiliser les propriétés de parallélisme.",
      "conceptExplanation": "Dans l’espace, deux droites $(D_1)$ et $(D_2)$ sont dites orthogonales lorsqu’il existe deux droites perpendiculaires $(L_1)$ et $(L_2)$ telles que $(D_1)$ est parallèle à $(L_1)$ et $(D_2)$ est parallèle à $(L_2)$. On note $(D_1) \\perp (D_2)$. Le terme perpendiculaire ne s’utilise que lorsque les droites sont orthogonales et sécantes : deux droites orthogonales ne sont pas nécessairement sécantes.\nPropriétés : si deux droites sont orthogonales, toute droite parallèle à l’une est orthogonale à l’autre ; si deux droites sont parallèles, toute droite orthogonale à l’une est orthogonale à l’autre. Exemple du cube : $(AE)$ et $(DC)$ sont orthogonales car $(GH)$ est perpendiculaire à $(CG)$, avec $(GH)$ parallèle à $(DC)$ et $(CG)$ parallèle à $(AE)$. Dans l’espace, deux droites orthogonales à une même troisième ne sont pas nécessairement parallèles.",
      "keyRule": "Pour prouver que deux droites sont orthogonales, on les remplace par des parallèles perpendiculaires, sans exiger qu’elles se rencontrent.",
      "formulas": [],
      "workedExample": {
        "title": "Les droites $(IJ)$ et $(AC)$ dans le cube",
        "statement": "Dans le cube $ABCDEFGH$, $I$ est le milieu de $[DG]$ et $J$ le milieu de $[BG]$. Démontre que les droites $(IJ)$ et $(AC)$ sont orthogonales (exercice de fixation).",
        "methodSteps": [
          "Dans le triangle $BDG$, le théorème des milieux donne $(IJ)$ parallèle à $(DB)$.",
          "$ABCD$ est un carré, donc ses diagonales $(AC)$ et $(BD)$ sont perpendiculaires.",
          "$(AC)$ est orthogonale à $(BD)$ et $(IJ)$ est parallèle à $(BD)$."
        ],
        "conclusion": "Par la propriété de transmission, $(AC)$ est orthogonale à $(IJ)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition des droites orthogonales",
          "stepTheme": "La définition des droites orthogonales",
          "stepBadge": "La définition des droites orthogonales",
          "paragraphText": "• Définition : deux droites $(D_1)$ et $(D_2)$ de l’espace sont orthogonales lorsqu’il existe deux droites perpendiculaires $(L_1)$ et $(L_2)$ telles que $(D_1)$ est parallèle à $(L_1)$ et $(D_2)$ est parallèle à $(L_2)$.\nOn note alors $(D_1) \\perp (D_2)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q1",
            "type": "mcq",
            "prompt": "Deux droites de l’espace sont orthogonales lorsque :",
            "options": [
              "Elles sont sécantes en angle droit",
              "Elles ont un point commun",
              "Elles sont parallèles",
              "Il existe deux droites perpendiculaires qui leur sont respectivement parallèles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La définition passe par deux droites perpendiculaires respectivement parallèles aux deux droites."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Orthogonales ne veut pas dire perpendiculaires",
          "stepTheme": "Orthogonales ne veut pas dire perpendiculaires",
          "stepBadge": "Orthogonales ne veut pas dire perpendiculaires",
          "paragraphText": "• Remarque de la leçon : le terme perpendiculaire ne s’utilise que lorsque les droites sont orthogonales et sécantes.\nDeux droites orthogonales ne sont donc pas nécessairement sécantes.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q2",
            "type": "mcq",
            "prompt": "Deux droites perpendiculaires sont deux droites :",
            "options": [
              "Orthogonales et sécantes",
              "Orthogonales et parallèles",
              "Orthogonales sans point commun",
              "Confondues"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La perpendicularité ajoute la rencontre à l’orthogonalité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un exemple dans le cube",
          "stepTheme": "Un exemple dans le cube",
          "stepBadge": "Un exemple dans le cube",
          "paragraphText": "• Exemple de la leçon : dans le cube $ABCDEFGH$, les droites $(AE)$ et $(DC)$ sont orthogonales.\nEn effet $(GH)$ est perpendiculaire à $(CG)$, avec $(GH)$ parallèle à $(DC)$ et $(CG)$ parallèle à $(AE)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q3",
            "type": "mcq",
            "prompt": "Dans le cube de la leçon, les droites $(AE)$ et $(DC)$ sont :",
            "options": [
              "Parallèles",
              "Perpendiculaires",
              "Orthogonales",
              "Confondues"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elles sont orthogonales par parallèles interposées, mais elles ne se rencontrent pas."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La parallèle à l’une reste orthogonale à l’autre",
          "stepTheme": "La parallèle à l’une reste orthogonale à l’autre",
          "stepBadge": "La parallèle à l’une reste orthogonale à l’autre",
          "paragraphText": "• Propriété 1 : si deux droites sont orthogonales, alors toute droite parallèle à l’une est orthogonale à l’autre.\nC’est le principe qui permet de remplacer une droite par une de ses parallèles dans une preuve.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q4",
            "type": "mcq",
            "prompt": "Si $(D_1) \\perp (D_2)$ et $(D_3)$ est parallèle à $(D_1)$, alors $(D_3)$ et $(D_2)$ sont :",
            "options": [
              "Parallèles",
              "Sans relation",
              "Confondues",
              "Orthogonales"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La propriété 1 transmet l’orthogonalité par parallélisme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Une orthogonale à l’une des parallèles",
          "stepTheme": "Une orthogonale à l’une des parallèles",
          "stepBadge": "Une orthogonale à l’une des parallèles",
          "paragraphText": "• Propriété 2 : si deux droites sont parallèles, alors toute droite orthogonale à l’une est orthogonale à l’autre.\nLes deux propriétés se combinent dans les démonstrations sur le cube.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q5",
            "type": "mcq",
            "prompt": "Si $(D_1)$ et $(D_2)$ sont parallèles et $(D_3) \\perp (D_1)$, alors :",
            "options": [
              "$(D_3) \\perp (D_2)$",
              "$(D_3)$ est parallèle à $(D_2)$",
              "$(D_3) = (D_2)$",
              "On ne peut rien dire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La propriété 2 donne l’orthogonalité à la seconde parallèle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Orthogonales à une même troisième",
          "stepTheme": "Orthogonales à une même troisième",
          "stepBadge": "Orthogonales à une même troisième",
          "paragraphText": "• Remarque de la leçon : dans l’espace, deux droites orthogonales à une même troisième ne sont pas nécessairement parallèles.\nC’est une différence essentielle avec la géométrie plane.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q6",
            "type": "mcq",
            "prompt": "Dans l’espace, deux droites orthogonales à une même troisième sont :",
            "options": [
              "Toujours parallèles",
              "Toujours perpendiculaires",
              "Forcément confondues",
              "Pas nécessairement parallèles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La remarque de la leçon interdit de conclure au parallélisme dans l’espace."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q1",
          "type": "mcq",
          "prompt": "Deux droites de l’espace sont orthogonales lorsque :",
          "options": [
            "Elles sont sécantes en angle droit",
            "Elles ont un point commun",
            "Elles sont parallèles",
            "Il existe deux droites perpendiculaires qui leur sont respectivement parallèles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La définition passe par deux droites perpendiculaires respectivement parallèles aux deux droites."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q2",
          "type": "mcq",
          "prompt": "Deux droites perpendiculaires sont deux droites :",
          "options": [
            "Orthogonales et sécantes",
            "Orthogonales et parallèles",
            "Orthogonales sans point commun",
            "Confondues"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La perpendicularité ajoute la rencontre à l’orthogonalité."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q3",
          "type": "mcq",
          "prompt": "Dans le cube de la leçon, les droites $(AE)$ et $(DC)$ sont :",
          "options": [
            "Parallèles",
            "Perpendiculaires",
            "Orthogonales",
            "Confondues"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elles sont orthogonales par parallèles interposées, mais elles ne se rencontrent pas."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q4",
          "type": "mcq",
          "prompt": "Si $(D_1) \\perp (D_2)$ et $(D_3)$ est parallèle à $(D_1)$, alors $(D_3)$ et $(D_2)$ sont :",
          "options": [
            "Parallèles",
            "Sans relation",
            "Confondues",
            "Orthogonales"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La propriété 1 transmet l’orthogonalité par parallélisme."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q5",
          "type": "mcq",
          "prompt": "Si $(D_1)$ et $(D_2)$ sont parallèles et $(D_3) \\perp (D_1)$, alors :",
          "options": [
            "$(D_3) \\perp (D_2)$",
            "$(D_3)$ est parallèle à $(D_2)$",
            "$(D_3) = (D_2)$",
            "On ne peut rien dire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La propriété 2 donne l’orthogonalité à la seconde parallèle."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p01_q6",
          "type": "mcq",
          "prompt": "Dans l’espace, deux droites orthogonales à une même troisième sont :",
          "options": [
            "Toujours parallèles",
            "Toujours perpendiculaires",
            "Forcément confondues",
            "Pas nécessairement parallèles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La remarque de la leçon interdit de conclure au parallélisme dans l’espace."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02",
      "order": 2,
      "title": "Droites et plans orthogonaux : définition et propriété fondamentale",
      "summary": "Définir une droite perpendiculaire à un plan, appliquer la propriété fondamentale et les unicités.",
      "conceptExplanation": "Dans l’espace, on dit qu’une droite $(D)$ est perpendiculaire à un plan $(P)$ lorsque $(D)$ est orthogonale à deux droites sécantes contenues dans $(P)$ ; on note $(D) \\perp (P)$. Exemple du cube : $(DH)$ est perpendiculaire au plan $(EGH)$ car $(DH) \\perp (HE)$ et $(DH) \\perp (HG)$.\nPropriété fondamentale : si une droite est perpendiculaire à un plan, alors elle est orthogonale à toute droite incluse dans ce plan ; ainsi $(DH) \\perp (EG)$. Il existe une unique droite passant par un point donné et perpendiculaire à un plan donné, et un unique plan passant par un point donné et perpendiculaire à une droite donnée.",
      "keyRule": "Deux droites sécantes du plan pour entrer, puis la propriété fondamentale pour en ressortir une orthogonalité avec n’importe quelle droite du plan.",
      "formulas": [],
      "workedExample": {
        "title": "Justifier que $(DH)$ et $(EG)$ sont orthogonales",
        "statement": "Dans le cube $ABCDEFGH$, on sait que $(DH)$ est perpendiculaire au plan $(EGH)$. Justifie que les droites $(DH)$ et $(EG)$ sont orthogonales.",
        "methodSteps": [
          "On rappelle la donnée : $(DH)$ est perpendiculaire au plan $(EGH)$, car orthogonale à $(HE)$ et à $(HG)$, sécantes en $H$.",
          "On note que la droite $(EG)$ est incluse dans le plan $(EGH)$.",
          "On applique la propriété fondamentale."
        ],
        "conclusion": "$(DH) \\perp (EG)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Droite perpendiculaire à un plan",
          "stepTheme": "Droite perpendiculaire à un plan",
          "stepBadge": "Droite perpendiculaire à un plan",
          "paragraphText": "• Définition : une droite $(D)$ est perpendiculaire à un plan $(P)$ lorsqu’elle est orthogonale à deux droites sécantes contenues dans $(P)$.\nOn note alors $(D) \\perp (P)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q1",
            "type": "mcq",
            "prompt": "Une droite est perpendiculaire à un plan lorsqu’elle est orthogonale à :",
            "options": [
              "Une seule droite du plan",
              "Deux droites parallèles du plan",
              "Deux droites sécantes contenues dans le plan",
              "Toutes les droites de l’espace"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il faut deux droites sécantes du plan, pas une seule et pas deux parallèles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L’exemple $(DH)$ et le plan $(EGH)$",
          "stepTheme": "L’exemple $(DH)$ et le plan $(EGH)$",
          "stepBadge": "L’exemple $(DH)$ et le plan $(EGH)$",
          "paragraphText": "• Exemple de la leçon : dans le cube, $(DH)$ est perpendiculaire au plan $(EGH)$.\nEn effet $(DH) \\perp (HE)$ et $(DH) \\perp (HG)$, deux droites sécantes en $H$ incluses dans le plan.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q2",
            "type": "mcq",
            "prompt": "Pourquoi $(DH)$ est-elle perpendiculaire au plan $(EGH)$ ?",
            "options": [
              "Parce qu’elle est orthogonale à $(HE)$ et à $(HG)$, sécantes du plan",
              "Parce qu’elle est parallèle au plan",
              "Parce qu’elle contient $H$ seulement",
              "Parce que $(EG)$ est un côté du cube"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux droites sécantes en $H$ du plan suffisent, par définition."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La propriété fondamentale",
          "stepTheme": "La propriété fondamentale",
          "stepBadge": "La propriété fondamentale",
          "paragraphText": "• Propriété 1 : si une droite est perpendiculaire à un plan, alors elle est orthogonale à toute droite incluse dans ce plan.\nC’est l’outil principal pour prouver ensuite une orthogonalité entre deux droites.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q3",
            "type": "mcq",
            "prompt": "Si $(D) \\perp (P)$ et $(d)$ est incluse dans $(P)$, alors :",
            "options": [
              "$(D)$ est parallèle à $(d)$",
              "$(D)$ est incluse dans $(P)$",
              "$(D) \\perp (d)$",
              "On ne peut rien dire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La propriété fondamentale s’applique à toute droite du plan."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Appliquer la propriété fondamentale",
          "stepTheme": "Appliquer la propriété fondamentale",
          "stepBadge": "Appliquer la propriété fondamentale",
          "paragraphText": "• Exercice de fixation : $(DH)$ est perpendiculaire au plan $(EGH)$ et $(EG)$ est incluse dans ce plan.\nOn en déduit directement que $(DH) \\perp (EG)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q4",
            "type": "mcq",
            "prompt": "Avec $(DH) \\perp (EGH)$ et $(EG)$ incluse dans $(EGH)$, on conclut :",
            "options": [
              "$(DH)$ parallèle à $(EG)$",
              "$(DH)$ incluse dans $(EGH)$",
              "$(EG) \\perp (EGH)$",
              "$(DH) \\perp (EG)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La propriété fondamentale donne l’orthogonalité à la droite incluse $(EG)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L’unicité de la perpendiculaire par un point",
          "stepTheme": "L’unicité de la perpendiculaire par un point",
          "stepBadge": "L’unicité de la perpendiculaire par un point",
          "paragraphText": "• Propriété 2 : il existe une unique droite passant par un point donné et perpendiculaire à un plan donné.\nDans le cube, par le point $B$, la seule droite perpendiculaire au plan $(GCD)$ est la droite $(BC)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q5",
            "type": "mcq",
            "prompt": "Combien de droites passent par un point donné en étant perpendiculaires à un plan donné ?",
            "options": [
              "Une infinité",
              "Deux",
              "Aucune",
              "Une seule"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La propriété 2 affirme l’existence et l’unicité de cette droite."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L’unicité du plan perpendiculaire à une droite",
          "stepTheme": "L’unicité du plan perpendiculaire à une droite",
          "stepBadge": "L’unicité du plan perpendiculaire à une droite",
          "paragraphText": "• Piège : il n’existe pas plusieurs plans répondant à la question, mais un seul.\nPropriété 3 : il existe un unique plan passant par un point donné et perpendiculaire à une droite donnée ; dans le cube, le seul plan passant par $A$ et perpendiculaire à la droite $(AD)$ est le plan $(ABE)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q6",
            "type": "mcq",
            "prompt": "Par le point $A$, le plan perpendiculaire à la droite $(AD)$ dans le cube est :",
            "options": [
              "Le plan $(ABE)$",
              "Le plan $(ABC)$",
              "Le plan $(ADH)$",
              "Le plan $(ACD)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la réponse de l’exercice de fixation associé à la propriété 3."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q1",
          "type": "mcq",
          "prompt": "Une droite est perpendiculaire à un plan lorsqu’elle est orthogonale à :",
          "options": [
            "Une seule droite du plan",
            "Deux droites parallèles du plan",
            "Deux droites sécantes contenues dans le plan",
            "Toutes les droites de l’espace"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il faut deux droites sécantes du plan, pas une seule et pas deux parallèles."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q2",
          "type": "mcq",
          "prompt": "Pourquoi $(DH)$ est-elle perpendiculaire au plan $(EGH)$ ?",
          "options": [
            "Parce qu’elle est orthogonale à $(HE)$ et à $(HG)$, sécantes du plan",
            "Parce qu’elle est parallèle au plan",
            "Parce qu’elle contient $H$ seulement",
            "Parce que $(EG)$ est un côté du cube"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux droites sécantes en $H$ du plan suffisent, par définition."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q3",
          "type": "mcq",
          "prompt": "Si $(D) \\perp (P)$ et $(d)$ est incluse dans $(P)$, alors :",
          "options": [
            "$(D)$ est parallèle à $(d)$",
            "$(D)$ est incluse dans $(P)$",
            "$(D) \\perp (d)$",
            "On ne peut rien dire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La propriété fondamentale s’applique à toute droite du plan."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q4",
          "type": "mcq",
          "prompt": "Avec $(DH) \\perp (EGH)$ et $(EG)$ incluse dans $(EGH)$, on conclut :",
          "options": [
            "$(DH)$ parallèle à $(EG)$",
            "$(DH)$ incluse dans $(EGH)$",
            "$(EG) \\perp (EGH)$",
            "$(DH) \\perp (EG)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La propriété fondamentale donne l’orthogonalité à la droite incluse $(EG)$."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q5",
          "type": "mcq",
          "prompt": "Combien de droites passent par un point donné en étant perpendiculaires à un plan donné ?",
          "options": [
            "Une infinité",
            "Deux",
            "Aucune",
            "Une seule"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La propriété 2 affirme l’existence et l’unicité de cette droite."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p02_q6",
          "type": "mcq",
          "prompt": "Par le point $A$, le plan perpendiculaire à la droite $(AD)$ dans le cube est :",
          "options": [
            "Le plan $(ABE)$",
            "Le plan $(ABC)$",
            "Le plan $(ADH)$",
            "Le plan $(ACD)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la réponse de l’exercice de fixation associé à la propriété 3."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03",
      "order": 3,
      "title": "Propriétés des droites et plans orthogonaux",
      "summary": "Utiliser les propriétés de transmission entre droites parallèles, plans parallèles et perpendiculaires communs.",
      "conceptExplanation": "Propriété 4 : si deux droites sont parallèles, tout plan perpendiculaire à l’une est perpendiculaire à l’autre ; dans le cube, $(AE)$, parallèle à $(DH)$, est ainsi perpendiculaire au plan $(FGH)$. Propriété 5 : si deux droites sont perpendiculaires à un même plan, elles sont parallèles ; ainsi $(DH)$ et $(BF)$, perpendiculaires au plan $(FGH)$, sont parallèles.\nPropriété 6 : si deux plans sont parallèles, toute droite perpendiculaire à l’un est perpendiculaire à l’autre ; la leçon l’applique aux plans parallèles $(ABD)$ et $(FGH)$. Propriété 7 : si deux plans sont perpendiculaires à une même droite, ils sont parallèles.",
      "keyRule": "Perpendiculaire commun signifie parallélisme : pour deux droites face à un plan, comme pour deux plans face à une droite.",
      "formulas": [],
      "workedExample": {
        "title": "Transmettre une perpendicularité entre plans parallèles",
        "statement": "Dans le cube, une droite $(D)$ est perpendiculaire au plan $(FGH)$ et les plans $(ABD)$ et $(FGH)$ sont parallèles. Justifie que $(D)$ est perpendiculaire au plan $(ABD)$ (exercice de fixation).",
        "methodSteps": [
          "On part de la donnée : $(D)$ est perpendiculaire au plan $(FGH)$, car orthogonale à $(FH)$ et à $(EG)$ en leur point commun.",
          "On note que les plans $(ABD)$ et $(FGH)$ sont parallèles dans le cube.",
          "On applique la propriété 6 de transmission entre plans parallèles."
        ],
        "conclusion": "La droite $(D)$ est perpendiculaire au plan $(ABD)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un plan perpendiculaire à une parallèle",
          "stepTheme": "Un plan perpendiculaire à une parallèle",
          "stepBadge": "Un plan perpendiculaire à une parallèle",
          "paragraphText": "• Propriété 4 de la leçon : si deux droites sont parallèles, tout plan perpendiculaire à l’une est perpendiculaire à l’autre.\nSon exercice d’application montre aussi, par parallélisme avec $(DH)$, que $(AE)$ est perpendiculaire au plan $(FGH)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q1",
            "type": "mcq",
            "prompt": "D’après l’exercice de la leçon, la droite $(AE)$ est perpendiculaire au plan $(FGH)$ car :",
            "options": [
              "Elle est incluse dans ce plan",
              "Elle est orthogonale à $(FG)$ seulement",
              "Elle passe par $F$",
              "Elle est parallèle à $(DH)$, elle-même perpendiculaire à ce plan"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le parallélisme entre $(AE)$ et $(DH)$ transmet la perpendicularité au plan."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deux droites perpendiculaires à un même plan",
          "stepTheme": "Deux droites perpendiculaires à un même plan",
          "stepBadge": "Deux droites perpendiculaires à un même plan",
          "paragraphText": "• Propriété 5 : si deux droites sont perpendiculaires à un même plan, alors elles sont parallèles.\nDans le cube, $(DH)$ et $(BF)$ sont perpendiculaires au plan $(FGH)$, donc parallèles.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q2",
            "type": "mcq",
            "prompt": "Si deux droites sont perpendiculaires à un même plan, alors elles sont :",
            "options": [
              "Parallèles",
              "Perpendiculaires",
              "Sécantes",
              "Confondues"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la propriété 5 de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les droites $(DH)$ et $(BF)$",
          "stepTheme": "Les droites $(DH)$ et $(BF)$",
          "stepBadge": "Les droites $(DH)$ et $(BF)$",
          "paragraphText": "• Exercice de fixation : $(DH)$ est perpendiculaire au plan $(FGH)$, et on montre de même que $(BF)$ lui est perpendiculaire.\nLes deux droites sont donc parallèles.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q3",
            "type": "mcq",
            "prompt": "Dans le cube, les droites $(DH)$ et $(BF)$ sont :",
            "options": [
              "Perpendiculaires",
              "Orthogonales non parallèles",
              "Sécantes",
              "Parallèles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Perpendiculaires au même plan $(FGH)$, elles sont parallèles par la propriété 5."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une droite perpendiculaire à l’un de deux plans parallèles",
          "stepTheme": "Une droite perpendiculaire à l’un de deux plans parallèles",
          "stepBadge": "Une droite perpendiculaire à l’un de deux plans parallèles",
          "paragraphText": "• Propriété 6 : si deux plans sont parallèles, alors toute droite perpendiculaire à l’un est perpendiculaire à l’autre.\nL’exercice l’applique aux plans parallèles $(ABD)$ et $(FGH)$ du cube.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q4",
            "type": "mcq",
            "prompt": "Si deux plans sont parallèles et une droite est perpendiculaire au premier, alors elle est :",
            "options": [
              "Perpendiculaire au second",
              "Incluse dans le second",
              "Parallèle au second",
              "Sans relation avec le second"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La perpendicularité se transmet entre plans parallèles."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Deux plans perpendiculaires à une même droite",
          "stepTheme": "Deux plans perpendiculaires à une même droite",
          "stepBadge": "Deux plans perpendiculaires à une même droite",
          "paragraphText": "• Propriété 7 : si deux plans sont perpendiculaires à une même droite, alors ils sont parallèles.\nC’est le pendant, pour les plans, de la propriété sur les droites perpendiculaires à un même plan.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q5",
            "type": "mcq",
            "prompt": "Si deux plans sont perpendiculaires à une même droite, alors ils sont :",
            "options": [
              "Perpendiculaires",
              "Sécants",
              "Parallèles",
              "Confondus"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la propriété 7 de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre les deux transmissions",
          "stepTheme": "Ne pas confondre les deux transmissions",
          "stepBadge": "Ne pas confondre les deux transmissions",
          "paragraphText": "• Piège : deux droites perpendiculaires à un même plan donnent des droites parallèles, propriété 5.\nDeux plans perpendiculaires à une même droite donnent des plans parallèles, propriété 7 : les objets conclus ne sont pas les mêmes.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q6",
            "type": "mcq",
            "prompt": "La conclusion « les plans sont parallèles » correspond à la situation :",
            "options": [
              "Deux droites perpendiculaires à un même plan",
              "Deux droites orthogonales",
              "Une droite perpendiculaire à un plan",
              "Deux plans perpendiculaires à une même droite"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La propriété 7 porte sur deux plans et une même droite."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q1",
          "type": "mcq",
          "prompt": "D’après l’exercice de la leçon, la droite $(AE)$ est perpendiculaire au plan $(FGH)$ car :",
          "options": [
            "Elle est incluse dans ce plan",
            "Elle est orthogonale à $(FG)$ seulement",
            "Elle passe par $F$",
            "Elle est parallèle à $(DH)$, elle-même perpendiculaire à ce plan"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le parallélisme entre $(AE)$ et $(DH)$ transmet la perpendicularité au plan."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q2",
          "type": "mcq",
          "prompt": "Si deux droites sont perpendiculaires à un même plan, alors elles sont :",
          "options": [
            "Parallèles",
            "Perpendiculaires",
            "Sécantes",
            "Confondues"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la propriété 5 de la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q3",
          "type": "mcq",
          "prompt": "Dans le cube, les droites $(DH)$ et $(BF)$ sont :",
          "options": [
            "Perpendiculaires",
            "Orthogonales non parallèles",
            "Sécantes",
            "Parallèles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Perpendiculaires au même plan $(FGH)$, elles sont parallèles par la propriété 5."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q4",
          "type": "mcq",
          "prompt": "Si deux plans sont parallèles et une droite est perpendiculaire au premier, alors elle est :",
          "options": [
            "Perpendiculaire au second",
            "Incluse dans le second",
            "Parallèle au second",
            "Sans relation avec le second"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La perpendicularité se transmet entre plans parallèles."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q5",
          "type": "mcq",
          "prompt": "Si deux plans sont perpendiculaires à une même droite, alors ils sont :",
          "options": [
            "Perpendiculaires",
            "Sécants",
            "Parallèles",
            "Confondus"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la propriété 7 de la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p03_q6",
          "type": "mcq",
          "prompt": "La conclusion « les plans sont parallèles » correspond à la situation :",
          "options": [
            "Deux droites perpendiculaires à un même plan",
            "Deux droites orthogonales",
            "Une droite perpendiculaire à un plan",
            "Deux plans perpendiculaires à une même droite"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La propriété 7 porte sur deux plans et une même droite."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04",
      "order": 4,
      "title": "Plans perpendiculaires de l’espace",
      "summary": "Définir deux plans perpendiculaires et utiliser leurs conséquences et propriétés.",
      "conceptExplanation": "Dans l’espace, deux plans sont perpendiculaires lorsque l’un d’eux contient une droite orthogonale à l’autre plan ; on note $(P) \\perp (Q)$. Exemple de la leçon : dans la pyramide régulière $SABCD$ de hauteur $[SO]$, la droite $(AO)$, incluse dans le plan $(ABD)$, est perpendiculaire au plan $(SDB)$, donc les plans $(SDB)$ et $(ABD)$ sont perpendiculaires.\nConséquences et propriétés : si une droite est perpendiculaire à un plan, tout plan parallèle à cette droite est perpendiculaire à ce plan ; si deux plans sont perpendiculaires, tout plan parallèle à l’un est perpendiculaire à l’autre ; un plan est perpendiculaire à deux plans sécants si et seulement s’il est perpendiculaire à leur droite d’intersection.",
      "keyRule": "Pour deux plans perpendiculaires, on cherche la droite témoin : incluse dans l’un, perpendiculaire à l’autre.",
      "formulas": [],
      "workedExample": {
        "title": "Plans perpendiculaires au plan $(ABC)$ dans le cube",
        "statement": "Dans le cube $ABCDEFGH$, démontre que les plans $(ACE)$ et $(DEH)$ sont perpendiculaires au plan $(ABC)$ (exercice de fixation).",
        "methodSteps": [
          "Les plans $(ACE)$ et $(DEH)$ sont sécants et leur droite d’intersection est la droite $(AE)$.",
          "$(AE) \\perp (AD)$ et $(AE) \\perp (AB)$, deux droites sécantes incluses dans le plan $(ABC)$, donc $(AE) \\perp (ABC)$.",
          "On applique la propriété sur les deux plans sécants et leur intersection."
        ],
        "conclusion": "Les plans $(ACE)$ et $(DEH)$ sont perpendiculaires au plan $(ABC)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition des plans perpendiculaires",
          "stepTheme": "La définition des plans perpendiculaires",
          "stepBadge": "La définition des plans perpendiculaires",
          "paragraphText": "• Définition : deux plans sont perpendiculaires lorsque l’un d’eux contient une droite orthogonale à l’autre plan.\nOn note alors $(P) \\perp (Q)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q1",
            "type": "mcq",
            "prompt": "Deux plans sont perpendiculaires lorsque :",
            "options": [
              "L’un contient une droite orthogonale à l’autre plan",
              "Ils sont parallèles",
              "Ils ont un point commun",
              "Ils contiennent deux droites parallèles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition de la leçon, avec la droite témoin incluse dans l’un des plans."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La pyramide régulière de la leçon",
          "stepTheme": "La pyramide régulière de la leçon",
          "stepBadge": "La pyramide régulière de la leçon",
          "paragraphText": "• Exemple : dans la pyramide régulière $SABCD$ de hauteur $[SO]$, les plans $(SDB)$ et $(ABD)$ sont perpendiculaires.\nLa droite $(AO)$, incluse dans le plan $(ABD)$, est perpendiculaire au plan $(SDB)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q2",
            "type": "mcq",
            "prompt": "Dans cet exemple, la droite témoin incluse dans le plan $(ABD)$ est :",
            "options": [
              "$(SO)$",
              "$(AO)$",
              "$(SD)$",
              "$(AB)$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon désigne $(AO)$, perpendiculaire au plan $(SDB)$, comme droite témoin."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Les conséquences de la définition",
          "stepTheme": "Les conséquences de la définition",
          "stepBadge": "Les conséquences de la définition",
          "paragraphText": "• Piège et conséquences : une droite perpendiculaire à un plan ne laisse pas les plans parallèles à cette droite indifférents.\nConséquences de la leçon : si une droite $(D)$ est perpendiculaire à un plan $(P)$, alors tout plan parallèle à $(D)$ est perpendiculaire à $(P)$ ; si deux plans sont perpendiculaires, toute droite perpendiculaire à l’un est parallèle à l’autre.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q3",
            "type": "mcq",
            "prompt": "Si $(D) \\perp (P)$, alors tout plan parallèle à $(D)$ est par rapport à $(P)$ :",
            "options": [
              "Parallèle",
              "Perpendiculaire",
              "Confondu",
              "Sécant quelconque"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la première conséquence énoncée après la définition."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Un plan parallèle à l’un reste perpendiculaire à l’autre",
          "stepTheme": "Un plan parallèle à l’un reste perpendiculaire à l’autre",
          "stepBadge": "Un plan parallèle à l’un reste perpendiculaire à l’autre",
          "paragraphText": "• Propriété 1 : si deux plans sont perpendiculaires, alors tout plan parallèle à l’un est perpendiculaire à l’autre.\nLa perpendicularité entre plans se transmet donc par parallélisme de plans.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q4",
            "type": "mcq",
            "prompt": "Si $(P) \\perp (Q)$ et $(R)$ est parallèle à $(P)$, alors $(R)$ et $(Q)$ sont :",
            "options": [
              "Parallèles",
              "Perpendiculaires",
              "Confondus",
              "Sans relation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la propriété 1 de cette partie de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Deux plans sécants et leur intersection",
          "stepTheme": "Deux plans sécants et leur intersection",
          "stepBadge": "Deux plans sécants et leur intersection",
          "paragraphText": "• Propriété 2 : un plan est perpendiculaire à deux plans sécants si et seulement s’il est perpendiculaire à leur droite d’intersection.\nTout se ramène donc à la droite commune des deux plans sécants.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q5",
            "type": "mcq",
            "prompt": "Un plan est perpendiculaire à deux plans sécants exactement lorsque :",
            "options": [
              "Il contient leur intersection",
              "Il est parallèle aux deux plans",
              "Il passe par un sommet du cube",
              "Il est perpendiculaire à leur droite d’intersection"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La propriété 2 ramène la double perpendicularité à celle qui vise l’intersection."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les plans $(ACE)$ et $(DEH)$ face au plan $(ABC)$",
          "stepTheme": "Les plans $(ACE)$ et $(DEH)$ face au plan $(ABC)$",
          "stepBadge": "Les plans $(ACE)$ et $(DEH)$ face au plan $(ABC)$",
          "paragraphText": "• Exercice de fixation : les plans $(ACE)$ et $(DEH)$ sont sécants suivant la droite $(AE)$, et $(AE) \\perp (ABC)$ car $(AE)$ est orthogonale à $(AD)$ et à $(AB)$ incluses dans $(ABC)$.\nLes deux plans sont donc perpendiculaires au plan $(ABC)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q6",
            "type": "mcq",
            "prompt": "La droite d’intersection des plans $(ACE)$ et $(DEH)$ dans cet exercice est :",
            "options": [
              "$(AC)$",
              "$(EH)$",
              "$(AE)$",
              "$(DE)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux plans se coupent suivant $(AE)$, droite perpendiculaire au plan $(ABC)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q1",
          "type": "mcq",
          "prompt": "Deux plans sont perpendiculaires lorsque :",
          "options": [
            "L’un contient une droite orthogonale à l’autre plan",
            "Ils sont parallèles",
            "Ils ont un point commun",
            "Ils contiennent deux droites parallèles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition de la leçon, avec la droite témoin incluse dans l’un des plans."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q2",
          "type": "mcq",
          "prompt": "Dans cet exemple, la droite témoin incluse dans le plan $(ABD)$ est :",
          "options": [
            "$(SO)$",
            "$(AO)$",
            "$(SD)$",
            "$(AB)$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon désigne $(AO)$, perpendiculaire au plan $(SDB)$, comme droite témoin."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q3",
          "type": "mcq",
          "prompt": "Si $(D) \\perp (P)$, alors tout plan parallèle à $(D)$ est par rapport à $(P)$ :",
          "options": [
            "Parallèle",
            "Perpendiculaire",
            "Confondu",
            "Sécant quelconque"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la première conséquence énoncée après la définition."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q4",
          "type": "mcq",
          "prompt": "Si $(P) \\perp (Q)$ et $(R)$ est parallèle à $(P)$, alors $(R)$ et $(Q)$ sont :",
          "options": [
            "Parallèles",
            "Perpendiculaires",
            "Confondus",
            "Sans relation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la propriété 1 de cette partie de la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q5",
          "type": "mcq",
          "prompt": "Un plan est perpendiculaire à deux plans sécants exactement lorsque :",
          "options": [
            "Il contient leur intersection",
            "Il est parallèle aux deux plans",
            "Il passe par un sommet du cube",
            "Il est perpendiculaire à leur droite d’intersection"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La propriété 2 ramène la double perpendicularité à celle qui vise l’intersection."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p04_q6",
          "type": "mcq",
          "prompt": "La droite d’intersection des plans $(ACE)$ et $(DEH)$ dans cet exercice est :",
          "options": [
            "$(AC)$",
            "$(EH)$",
            "$(AE)$",
            "$(DE)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux plans se coupent suivant $(AE)$, droite perpendiculaire au plan $(ABC)$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05",
      "order": 5,
      "title": "Projections orthogonales sur un plan et sur une droite",
      "summary": "Définir le projeté orthogonal d’un point sur un plan ou sur une droite, et la distance associée.",
      "conceptExplanation": "Soit $A$ un point et $(P)$ un plan de l’espace. L’unique droite passant par $A$ et perpendiculaire à $(P)$ coupe $(P)$ en $H$ : le point $H$ est le projeté orthogonal de $A$ sur le plan $(P)$, et la distance $AH$ est la distance du point $A$ au plan $(P)$. De même, soit $B$ un point et une droite de l’espace : l’unique plan passant par $B$ et perpendiculaire à cette droite la coupe en $K$, projeté orthogonal de $B$ sur la droite, et $BK$ est la distance de $B$ à la droite.\nLe projeté donne la plus courte distance au plan ou à la droite. Exemple du cube : la projection sur le plan $(EHD)$ envoie $B$ sur $A$, $C$ sur $D$, $F$ sur $E$ et $G$ sur $H$, et laisse fixes les points du plan.",
      "keyRule": "Le projeté orthogonal est le pied de la perpendiculaire, et la distance au projeté est la plus courte distance.",
      "formulas": [],
      "workedExample": {
        "title": "Projeté orthogonal du centre $I$ sur le plan $(ABC)$",
        "statement": "Dans le cube, $J$ est le centre du carré $ABCD$ et $I$ le centre du carré $EFGH$. Détermine le projeté orthogonal de $I$ sur le plan $(ABC)$ (exercice de fixation).",
        "methodSteps": [
          "$I$ est le milieu du segment $[HF]$.",
          "Le projeté orthogonal du segment $[HF]$ sur le plan $(ABC)$ est le segment $[DB]$.",
          "Le projeté du milieu est donc le milieu de $[DB]$."
        ],
        "conclusion": "Le projeté orthogonal de $I$ sur le plan $(ABC)$ est le point $J$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le projeté orthogonal sur un plan",
          "stepTheme": "Le projeté orthogonal sur un plan",
          "stepBadge": "Le projeté orthogonal sur un plan",
          "paragraphText": "• Définition : soit $A$ un point et $(P)$ un plan ; la droite passant par $A$ et perpendiculaire à $(P)$ coupe $(P)$ en $H$.\nLe point $H$ est le projeté orthogonal de $A$ sur le plan $(P)$, et la distance $AH$ est la distance du point $A$ au plan $(P)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q1",
            "type": "mcq",
            "prompt": "Le projeté orthogonal de $A$ sur le plan $(P)$ est le point $H$ tel que :",
            "options": [
              "$(AH)$ est parallèle à $(P)$",
              "$H$ est dans $(P)$ et $(AH) \\perp (P)$",
              "$H = A$ dans tous les cas",
              "$H$ est le milieu de $A$ et d’un autre point"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le projeté est le pied de l’unique perpendiculaire menée de $A$ au plan."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le projeté orthogonal sur une droite",
          "stepTheme": "Le projeté orthogonal sur une droite",
          "stepBadge": "Le projeté orthogonal sur une droite",
          "paragraphText": "• Définition : soit $B$ un point et une droite de l’espace ; le plan passant par $B$ et perpendiculaire à cette droite la coupe en $K$.\nLe point $K$ est le projeté orthogonal de $B$ sur la droite, et $BK$ est la distance du point $B$ à la droite.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q2",
            "type": "mcq",
            "prompt": "Le projeté orthogonal de $B$ sur une droite est obtenu comme :",
            "options": [
              "Le pied, sur la droite, du plan passant par $B$ et perpendiculaire à la droite",
              "Un point quelconque de la droite",
              "Le milieu du segment formé avec $B$",
              "Le point $B$ lui-même"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La définition utilise l’unique plan par $B$ perpendiculaire à la droite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La distance est la plus courte distance",
          "stepTheme": "La distance est la plus courte distance",
          "stepBadge": "La distance est la plus courte distance",
          "paragraphText": "• Figure de la leçon : pour $M$ dans le plan $(P)$, on a $AH < AM$ lorsque $M$ diffère de $H$.\nDe même, pour $N$ sur la droite, $BK < BN$ lorsque $N$ diffère de $K$ : le projeté donne la plus courte distance.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q3",
            "type": "mcq",
            "prompt": "La distance d’un point $A$ à un plan $(P)$ est réalisée par :",
            "options": [
              "N’importe quel point du plan",
              "Son projeté orthogonal $H$ sur le plan",
              "Le point du plan le plus éloigné",
              "Un point hors du plan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le segment vers le projeté est plus court que tout autre segment vers le plan."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La projection sur le plan $(EHD)$ du cube",
          "stepTheme": "La projection sur le plan $(EHD)$ du cube",
          "stepBadge": "La projection sur le plan $(EHD)$ du cube",
          "paragraphText": "• Exemple de la leçon : pour la projection orthogonale $p$ sur le plan $(EHD)$ du cube, $p(B) = A$ et $p(G) = H$.\nLes points du plan lui-même, comme $A$, $D$, $E$ et $H$, sont leurs propres projetés.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q4",
            "type": "mcq",
            "prompt": "Dans cette projection sur le plan $(EHD)$, le projeté du point $G$ est :",
            "options": [
              "$E$",
              "$F$",
              "$H$",
              "$B$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau de l’exemple donne $p(G) = H$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le projeté du centre $I$ sur le plan $(ABC)$",
          "stepTheme": "Le projeté du centre $I$ sur le plan $(ABC)$",
          "stepBadge": "Le projeté du centre $I$ sur le plan $(ABC)$",
          "paragraphText": "• Exercice de fixation : $I$ est le centre du carré $EFGH$ et $J$ le centre du carré $ABCD$.\nLe projeté orthogonal de $I$ sur le plan $(ABC)$ est le point $J$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q5",
            "type": "mcq",
            "prompt": "Le projeté orthogonal du centre $I$ de la face supérieure sur le plan $(ABC)$ est :",
            "options": [
              "Le centre $J$ du carré $ABCD$",
              "Le point $A$",
              "Le point $B$",
              "Le point $I$ lui-même"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé montre que $I$, milieu de $[HF]$, se projette sur le milieu $J$ de $[DB]$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un point du plan est son propre projeté",
          "stepTheme": "Un point du plan est son propre projeté",
          "stepBadge": "Un point du plan est son propre projeté",
          "paragraphText": "• Piège : si un point appartient déjà au plan de projection, son projeté est lui-même et sa distance au plan est nulle.\nC’est le cas de $A$, $D$, $E$ et $H$ pour la projection sur le plan $(EHD)$ de l’exemple.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q6",
            "type": "mcq",
            "prompt": "La distance d’un point appartenant au plan $(P)$ à ce plan vaut :",
            "options": [
              "La longueur d’une arête",
              "$1$",
              "$0$",
              "Elle est infinie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le point et son projeté sont confondus : la distance est nulle."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q1",
          "type": "mcq",
          "prompt": "Le projeté orthogonal de $A$ sur le plan $(P)$ est le point $H$ tel que :",
          "options": [
            "$(AH)$ est parallèle à $(P)$",
            "$H$ est dans $(P)$ et $(AH) \\perp (P)$",
            "$H = A$ dans tous les cas",
            "$H$ est le milieu de $A$ et d’un autre point"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le projeté est le pied de l’unique perpendiculaire menée de $A$ au plan."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q2",
          "type": "mcq",
          "prompt": "Le projeté orthogonal de $B$ sur une droite est obtenu comme :",
          "options": [
            "Le pied, sur la droite, du plan passant par $B$ et perpendiculaire à la droite",
            "Un point quelconque de la droite",
            "Le milieu du segment formé avec $B$",
            "Le point $B$ lui-même"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La définition utilise l’unique plan par $B$ perpendiculaire à la droite."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q3",
          "type": "mcq",
          "prompt": "La distance d’un point $A$ à un plan $(P)$ est réalisée par :",
          "options": [
            "N’importe quel point du plan",
            "Son projeté orthogonal $H$ sur le plan",
            "Le point du plan le plus éloigné",
            "Un point hors du plan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le segment vers le projeté est plus court que tout autre segment vers le plan."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q4",
          "type": "mcq",
          "prompt": "Dans cette projection sur le plan $(EHD)$, le projeté du point $G$ est :",
          "options": [
            "$E$",
            "$F$",
            "$H$",
            "$B$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau de l’exemple donne $p(G) = H$."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q5",
          "type": "mcq",
          "prompt": "Le projeté orthogonal du centre $I$ de la face supérieure sur le plan $(ABC)$ est :",
          "options": [
            "Le centre $J$ du carré $ABCD$",
            "Le point $A$",
            "Le point $B$",
            "Le point $I$ lui-même"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé montre que $I$, milieu de $[HF]$, se projette sur le milieu $J$ de $[DB]$."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p05_q6",
          "type": "mcq",
          "prompt": "La distance d’un point appartenant au plan $(P)$ à ce plan vaut :",
          "options": [
            "La longueur d’une arête",
            "$1$",
            "$0$",
            "Elle est infinie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le point et son projeté sont confondus : la distance est nulle."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06",
      "order": 6,
      "title": "Images par une projection orthogonale",
      "summary": "Déterminer l’image d’une droite, d’un segment et de son milieu par une projection orthogonale sur un plan.",
      "conceptExplanation": "Par une projection orthogonale sur un plan, l’image d’une droite est un singleton si la droite est perpendiculaire au plan, et une droite sinon. De même, l’image d’un segment $[AB]$ est un singleton si la droite $(AB)$ est perpendiculaire au plan, et un segment sinon.\nPropriété du milieu : l’image du milieu d’un segment $[AB]$ est le milieu de l’image du segment $[AB]$, si $(AB)$ n’est pas perpendiculaire au plan. C’est ce qui permet, dans le cube, de conclure que le centre $I$ de la face $EFGH$ se projette sur le centre $J$ de la face $ABCD$.",
      "keyRule": "Avant toute image par projection, on teste la perpendicularité de la droite support au plan : elle décide entre singleton et droite ou segment.",
      "formulas": [],
      "workedExample": {
        "title": "Image du segment $[HF]$ sur le plan $(ABC)$",
        "statement": "Dans le cube, détermine l’image du segment $[HF]$ par la projection orthogonale sur le plan $(ABC)$, et celle de son milieu $I$.",
        "methodSteps": [
          "$H$ se projette sur $D$ et $F$ se projette sur $B$, d’après les positions dans le cube.",
          "La droite $(HF)$ n’est pas perpendiculaire au plan $(ABC)$ : l’image du segment est donc un segment, $[DB]$.",
          "Par la propriété du milieu, le milieu $I$ de $[HF]$ se projette sur le milieu de $[DB]$, qui est le centre $J$ de $ABCD$."
        ],
        "conclusion": "L’image de $[HF]$ est $[DB]$ et celle de son milieu $I$ est le point $J$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’image d’une droite par une projection sur un plan",
          "stepTheme": "L’image d’une droite par une projection sur un plan",
          "stepBadge": "L’image d’une droite par une projection sur un plan",
          "paragraphText": "• Propriété 1 : par une projection orthogonale sur un plan, l’image d’une droite est un singleton si la droite est perpendiculaire au plan.\nSi la droite n’est pas perpendiculaire au plan, son image est une droite.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q1",
            "type": "mcq",
            "prompt": "Si une droite est perpendiculaire au plan de projection, son image est :",
            "options": [
              "Une droite",
              "Un segment",
              "Un singleton",
              "Un plan"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Toute la droite s’écrase sur son point de rencontre avec le plan."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’image d’un segment",
          "stepTheme": "L’image d’un segment",
          "stepBadge": "L’image d’un segment",
          "paragraphText": "• Propriété 2 : par une projection orthogonale sur un plan, l’image d’un segment $[AB]$ est un singleton si la droite $(AB)$ est perpendiculaire au plan.\nSinon, l’image du segment est un segment.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q2",
            "type": "mcq",
            "prompt": "Si la droite $(AB)$ n’est pas perpendiculaire au plan de projection, l’image du segment $[AB]$ est :",
            "options": [
              "Un singleton",
              "Un segment",
              "Une droite entière",
              "Un point extérieur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La propriété 2 donne un segment dans le cas non perpendiculaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le projeté du milieu d’un segment",
          "stepTheme": "Le projeté du milieu d’un segment",
          "stepBadge": "Le projeté du milieu d’un segment",
          "paragraphText": "• Propriété 3 : par une projection orthogonale sur un plan, l’image du milieu d’un segment $[AB]$ est le milieu de l’image du segment, si $(AB)$ n’est pas perpendiculaire au plan.\nC’est exactement l’argument utilisé pour le centre $I$ du cube.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q3",
            "type": "mcq",
            "prompt": "La projection orthogonale sur un plan conserve, sous la condition de la propriété 3 :",
            "options": [
              "Les longueurs dans tous les cas",
              "Le milieu d’un segment",
              "Les angles dans tous les cas",
              "Les volumes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’image du milieu est le milieu de l’image, lorsque la droite support n’est pas perpendiculaire au plan."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un segment qui s’écrase en un point",
          "stepTheme": "Un segment qui s’écrase en un point",
          "stepBadge": "Un segment qui s’écrase en un point",
          "paragraphText": "• Exemple de la leçon : dans la projection sur le plan $(EHD)$, la droite $(EF)$ est perpendiculaire au plan.\nTout point de l’arête $[EF]$, comme le point $I$ de l’exemple, a donc pour projeté le point $E$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q4",
            "type": "mcq",
            "prompt": "Dans la projection sur le plan $(EHD)$, le projeté d’un point de l’arête $[EF]$ est :",
            "options": [
              "$F$",
              "$E$",
              "$H$",
              "$G$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau de l’exemple donne le projeté $E$ pour le point $I$ de $[EF]$, et $F$ se projette aussi sur $E$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Choisir le bon cas avant de répondre",
          "stepTheme": "Choisir le bon cas avant de répondre",
          "stepBadge": "Choisir le bon cas avant de répondre",
          "paragraphText": "• Méthode : avant de donner l’image d’une droite ou d’un segment, on teste si la droite support est perpendiculaire au plan de projection.\nCe test décide entre singleton d’un côté, et droite ou segment de l’autre.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q5",
            "type": "mcq",
            "prompt": "La première question à se poser pour l’image d’un segment par une projection sur un plan est :",
            "options": [
              "Le segment est-il long ?",
              "La droite support est-elle perpendiculaire au plan ?",
              "Le segment contient-il un centre de face ?",
              "Le plan est-il horizontal ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la perpendicularité de la droite support qui distingue les deux cas des propriétés 1 et 2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le milieu dans le cas perpendiculaire",
          "stepTheme": "Le milieu dans le cas perpendiculaire",
          "stepBadge": "Le milieu dans le cas perpendiculaire",
          "paragraphText": "• Piège : la propriété du milieu suppose que la droite $(AB)$ n’est pas perpendiculaire au plan.\nDans le cas perpendiculaire, le segment entier se projette en un seul point : il n’y a plus de segment image dont prendre le milieu.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q6",
            "type": "mcq",
            "prompt": "Dans le cas où $(AB)$ est perpendiculaire au plan de projection, l’image de $[AB]$ est :",
            "options": [
              "Le milieu de $[AB]$",
              "Un segment de même longueur",
              "Un singleton",
              "Une droite"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le segment s’écrase sur le pied commun de ses points : un singleton."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q1",
          "type": "mcq",
          "prompt": "Si une droite est perpendiculaire au plan de projection, son image est :",
          "options": [
            "Une droite",
            "Un segment",
            "Un singleton",
            "Un plan"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Toute la droite s’écrase sur son point de rencontre avec le plan."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q2",
          "type": "mcq",
          "prompt": "Si la droite $(AB)$ n’est pas perpendiculaire au plan de projection, l’image du segment $[AB]$ est :",
          "options": [
            "Un singleton",
            "Un segment",
            "Une droite entière",
            "Un point extérieur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La propriété 2 donne un segment dans le cas non perpendiculaire."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q3",
          "type": "mcq",
          "prompt": "La projection orthogonale sur un plan conserve, sous la condition de la propriété 3 :",
          "options": [
            "Les longueurs dans tous les cas",
            "Le milieu d’un segment",
            "Les angles dans tous les cas",
            "Les volumes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’image du milieu est le milieu de l’image, lorsque la droite support n’est pas perpendiculaire au plan."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q4",
          "type": "mcq",
          "prompt": "Dans la projection sur le plan $(EHD)$, le projeté d’un point de l’arête $[EF]$ est :",
          "options": [
            "$F$",
            "$E$",
            "$H$",
            "$G$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau de l’exemple donne le projeté $E$ pour le point $I$ de $[EF]$, et $F$ se projette aussi sur $E$."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q5",
          "type": "mcq",
          "prompt": "La première question à se poser pour l’image d’un segment par une projection sur un plan est :",
          "options": [
            "Le segment est-il long ?",
            "La droite support est-elle perpendiculaire au plan ?",
            "Le segment contient-il un centre de face ?",
            "Le plan est-il horizontal ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la perpendicularité de la droite support qui distingue les deux cas des propriétés 1 et 2."
        },
        {
          "id": "premiere_c_maths_geometrie_l12_orthogonalite_espace_p06_q6",
          "type": "mcq",
          "prompt": "Dans le cas où $(AB)$ est perpendiculaire au plan de projection, l’image de $[AB]$ est :",
          "options": [
            "Le milieu de $[AB]$",
            "Un segment de même longueur",
            "Un singleton",
            "Une droite"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le segment s’écrase sur le pied commun de ses points : un singleton."
        }
      ]
    }
  ]
};
