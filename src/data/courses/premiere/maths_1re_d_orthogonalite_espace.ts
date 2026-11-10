import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1D Maths leçon 13 Orthogonalité dans lespace.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_1RE_D_L13_ORTHOGONALITE_ESPACE: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l13_orthogonalite_espace",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 13,
  "title": "Leçon 13 : Orthogonalité dans l'espace",
  "summary": "Droites orthogonales, droite perpendiculaire à un plan et propriété fondamentale, propriétés de parallélisme et d'unicité, plans perpendiculaires, projection orthogonale et distances, situations dans le cube et le tétraèdre.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "1D Maths leçon 13 Orthogonalité dans lespace.pdf",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01",
      "order": 1,
      "title": "Droites orthogonales",
      "summary": "Deux droites de l'espace sont orthogonales si leurs parallèles menées par un même point sont perpendiculaires.",
      "conceptExplanation": "Convention utilisée dans toute la leçon : dans le cube ABCDEFGH, la face ABCD est en bas et E, F, G, H sont au-dessus de A, B, C, D (donc [AE], [BF], [CG], [DH] sont les arêtes verticales).\n\nDéfinition : deux droites $(D_1)$ et $(D_2)$ de l'espace sont orthogonales s'il existe deux droites perpendiculaires $(L_1)$ et $(L_2)$ telles que $(D_1)\\parallel(L_1)$ et $(D_2)\\parallel(L_2)$. On note $(D_1)\\perp(D_2)$.\n\nPerpendiculaire ou orthogonale ?\n- « perpendiculaires » : orthogonales ET sécantes ;\n- deux droites orthogonales ne sont pas forcément sécantes.\nExemple : dans le cube, $(AE)$ et $(DC)$ sont orthogonales sans se couper, car $(GH)\\perp(CG)$, $(GH)\\parallel(DC)$ et $(CG)\\parallel(AE)$.\n\nPropriétés :\n- si deux droites sont orthogonales, toute parallèle à l'une est orthogonale à l'autre ;\n- si deux droites sont parallèles, toute droite orthogonale à l'une est orthogonale à l'autre.\n\nExemple : $I$ milieu de $[DG]$, $J$ milieu de $[BG]$. Dans le triangle $BDG$, $(IJ)\\parallel(DB)$ (droite des milieux). Les diagonales du carré $ABCD$ sont perpendiculaires : $(AC)\\perp(BD)$. Donc $(AC)\\perp(IJ)$.\n\nAttention : dans l'espace, deux droites orthogonales à une même troisième ne sont pas forcément parallèles (dans le cube, $(AB)$ et $(AD)$ sont toutes deux orthogonales à $(AE)$).",
      "keyRule": "Orthogonales = « perpendiculaires à distance » : on se ramène à deux droites perpendiculaires par des parallèles.",
      "formulas": [],
      "workedExample": {
        "title": "Une droite des milieux",
        "statement": "Dans le cube ABCDEFGH, $I$ et $J$ sont les milieux de $[DG]$ et $[BG]$. Montre que $(IJ)\\perp(AC)$.",
        "methodSteps": [
          "Dans le triangle $BDG$, la droite des milieux donne $(IJ)\\parallel(DB)$.",
          "$ABCD$ est un carré : $(AC)\\perp(BD)$.",
          "Une droite orthogonale à $(BD)$ est orthogonale à toute parallèle à $(BD)$."
        ],
        "conclusion": "$(AC)\\perp(IJ)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "$(D_1)\\perp(D_2)$ s'il existe $(L_1)\\perp(L_2)$ avec $(D_1)\\parallel(L_1)$ et $(D_2)\\parallel(L_2)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q1",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), on sait que $(GH)\\perp(CG)$, $(GH)\\parallel(DC)$ et $(CG)\\parallel(AE)$. Que peut-on dire de $(AE)$ et $(DC)$ ?",
            "options": [
              "Elles sont parallèles",
              "Elles sont orthogonales",
              "Elles sont sécantes",
              "On ne peut rien dire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Leurs parallèles $(CG)$ et $(GH)$ sont perpendiculaires : c'est la définition."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Orthogonales sans se couper",
          "stepTheme": "Orthogonales sans se couper",
          "stepBadge": "Orthogonales sans se couper",
          "paragraphText": "« Perpendiculaires » veut dire orthogonales ET sécantes. Deux droites orthogonales peuvent ne pas se couper.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q2",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), les droites $(AE)$ et $(DC)$ sont orthogonales. Sont-elles perpendiculaires ?",
            "options": [
              "Oui, car elles sont orthogonales",
              "Oui, car elles sont dans le même plan",
              "Non, car elles ne se coupent pas",
              "Non, car elles sont parallèles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(AE)$ est une arête verticale passant par $A$, $(DC)$ une arête du bas qui ne passe pas par $A$ : elles ne se rencontrent pas."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Avec une parallèle",
          "stepTheme": "Avec une parallèle",
          "stepBadge": "Avec une parallèle",
          "paragraphText": "Si deux droites sont parallèles, toute droite orthogonale à l'une est orthogonale à l'autre.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q3",
            "type": "mcq",
            "prompt": "On sait que $(IJ)\\parallel(DB)$ et $(AC)\\perp(DB)$. Que peut-on en déduire ?",
            "options": [
              "$(AC)\\perp(IJ)$",
              "$(AC)\\parallel(IJ)$",
              "$(IJ)\\perp(DB)$",
              "Rien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(AC)$ est orthogonale à $(DB)$, donc à toute parallèle à $(DB)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La droite des milieux",
          "stepTheme": "La droite des milieux",
          "stepBadge": "La droite des milieux",
          "paragraphText": "Pour obtenir une parallèle, on utilise souvent la droite des milieux d'un triangle.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q4",
            "type": "mcq",
            "prompt": "Dans le triangle $BDG$, $I$ est le milieu de $[DG]$ et $J$ le milieu de $[BG]$. À quelle droite $(IJ)$ est-elle parallèle ?",
            "options": [
              "$(BG)$",
              "$(DG)$",
              "$(AC)$",
              "$(DB)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La droite qui joint les milieux de deux côtés est parallèle au troisième côté, $[DB]$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La situation d'Hermann",
          "stepTheme": "La situation d'Hermann",
          "stepBadge": "La situation d'Hermann",
          "paragraphText": "Cube ABCDEFGH, $I$ et $J$ milieux de $[FB]$ et $[FG]$ : $(IJ)\\parallel(BG)$, et $(HG)$ est orthogonale à la face $BCGF$, donc à $(BG)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q5",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), $I$ et $J$ sont les milieux de $[FB]$ et $[FG]$, et $(HG)\\perp(BG)$. Pourquoi $(HG)\\perp(IJ)$ ?",
            "options": [
              "Car $(IJ)\\parallel(HG)$",
              "Car $(IJ)\\parallel(BG)$ (droite des milieux dans le triangle $FBG$)",
              "Car $I$ et $J$ sont sur la même face que $H$",
              "Car $(IJ)$ coupe $(HG)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(HG)$ est orthogonale à $(BG)$, donc à sa parallèle $(IJ)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Pas comme dans le plan",
          "stepTheme": "Pas comme dans le plan",
          "stepBadge": "Pas comme dans le plan",
          "paragraphText": "Dans le plan, deux droites perpendiculaires à une même droite sont parallèles. Dans l'espace, ce n'est plus vrai.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q6",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), $(AB)$ et $(AD)$ sont toutes deux orthogonales à $(AE)$. Sont-elles parallèles ?",
            "options": [
              "Oui, toujours",
              "Non : elles se coupent en $A$",
              "Oui, car elles sont dans le même plan",
              "Non : elles sont orthogonales à $(AE)$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux droites orthogonales à une même troisième ne sont pas forcément parallèles dans l'espace."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Repérer dans un cube",
          "stepTheme": "Repérer dans un cube",
          "stepBadge": "Repérer dans un cube",
          "paragraphText": "Une arête verticale est orthogonale à toutes les arêtes horizontales du cube, même celles qu'elle ne touche pas.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q7",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), à quelle droite $(AB)$ est-elle orthogonale ?",
            "options": [
              "$(CD)$",
              "$(GH)$",
              "$(CG)$",
              "$(EF)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(CG)\\parallel(BF)$ et $(BF)\\perp(AB)$. Les trois autres droites sont parallèles à $(AB)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q1",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), on sait que $(GH)\\perp(CG)$, $(GH)\\parallel(DC)$ et $(CG)\\parallel(AE)$. Que peut-on dire de $(AE)$ et $(DC)$ ?",
          "options": [
            "Elles sont parallèles",
            "Elles sont orthogonales",
            "Elles sont sécantes",
            "On ne peut rien dire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Leurs parallèles $(CG)$ et $(GH)$ sont perpendiculaires : c'est la définition."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q2",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), les droites $(AE)$ et $(DC)$ sont orthogonales. Sont-elles perpendiculaires ?",
          "options": [
            "Oui, car elles sont orthogonales",
            "Oui, car elles sont dans le même plan",
            "Non, car elles ne se coupent pas",
            "Non, car elles sont parallèles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(AE)$ est une arête verticale passant par $A$, $(DC)$ une arête du bas qui ne passe pas par $A$ : elles ne se rencontrent pas."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q3",
          "type": "mcq",
          "prompt": "On sait que $(IJ)\\parallel(DB)$ et $(AC)\\perp(DB)$. Que peut-on en déduire ?",
          "options": [
            "$(AC)\\perp(IJ)$",
            "$(AC)\\parallel(IJ)$",
            "$(IJ)\\perp(DB)$",
            "Rien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(AC)$ est orthogonale à $(DB)$, donc à toute parallèle à $(DB)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q4",
          "type": "mcq",
          "prompt": "Dans le triangle $BDG$, $I$ est le milieu de $[DG]$ et $J$ le milieu de $[BG]$. À quelle droite $(IJ)$ est-elle parallèle ?",
          "options": [
            "$(BG)$",
            "$(DG)$",
            "$(AC)$",
            "$(DB)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La droite qui joint les milieux de deux côtés est parallèle au troisième côté, $[DB]$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q5",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), $I$ et $J$ sont les milieux de $[FB]$ et $[FG]$, et $(HG)\\perp(BG)$. Pourquoi $(HG)\\perp(IJ)$ ?",
          "options": [
            "Car $(IJ)\\parallel(HG)$",
            "Car $(IJ)\\parallel(BG)$ (droite des milieux dans le triangle $FBG$)",
            "Car $I$ et $J$ sont sur la même face que $H$",
            "Car $(IJ)$ coupe $(HG)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(HG)$ est orthogonale à $(BG)$, donc à sa parallèle $(IJ)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q6",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), $(AB)$ et $(AD)$ sont toutes deux orthogonales à $(AE)$. Sont-elles parallèles ?",
          "options": [
            "Oui, toujours",
            "Non : elles se coupent en $A$",
            "Oui, car elles sont dans le même plan",
            "Non : elles sont orthogonales à $(AE)$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux droites orthogonales à une même troisième ne sont pas forcément parallèles dans l'espace."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p01_q7",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), à quelle droite $(AB)$ est-elle orthogonale ?",
          "options": [
            "$(CD)$",
            "$(GH)$",
            "$(CG)$",
            "$(EF)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(CG)\\parallel(BF)$ et $(BF)\\perp(AB)$. Les trois autres droites sont parallèles à $(AB)$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02",
      "order": 2,
      "title": "Droite perpendiculaire à un plan",
      "summary": "Une droite orthogonale à deux droites sécantes d'un plan est perpendiculaire à ce plan.",
      "conceptExplanation": "Définition : une droite $(D)$ est perpendiculaire à un plan $(P)$ si elle est orthogonale à DEUX droites SÉCANTES contenues dans $(P)$. On note $(D)\\perp(P)$.\n\nExemple (cube ABCDEFGH, face ABCD en bas, E, F, G, H au-dessus de A, B, C, D) : $(DH)\\perp(HE)$ et $(DH)\\perp(HG)$, deux droites sécantes en $H$ du plan $(EGH)$. Donc $(DH)\\perp(EGH)$.\n\nPropriété fondamentale : si une droite est perpendiculaire à un plan, elle est orthogonale à TOUTE droite de ce plan.\nExemple : $(DH)\\perp(EGH)$ et $(EG)\\subset(EGH)$, donc $(DH)\\perp(EG)$.\n\nMéthode pour montrer que deux droites sont orthogonales : on montre que l'une est perpendiculaire à un plan qui contient l'autre.\nExemple : tétraèdre $SABC$ avec $(SB)\\perp(ABC)$ : comme $(AC)\\subset(ABC)$, on a $(AC)\\perp(SB)$.\n\nAttention : une seule droite du plan ne suffit pas, ni deux droites parallèles du plan. Il faut deux droites sécantes.",
      "keyRule": "$(D)\\perp$ deux droites sécantes de $(P)$ $\\Rightarrow$ $(D)\\perp(P)$ $\\Rightarrow$ $(D)$ orthogonale à toute droite de $(P)$.",
      "formulas": [],
      "workedExample": {
        "title": "L'arête verticale",
        "statement": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), montre que $(DH)\\perp(EG)$.",
        "methodSteps": [
          "$(DH)\\perp(HE)$ et $(DH)\\perp(HG)$, sécantes en $H$ dans le plan $(EGH)$ : $(DH)\\perp(EGH)$.",
          "$(EG)$ est contenue dans le plan $(EGH)$."
        ],
        "conclusion": "Par la propriété fondamentale, $(DH)\\perp(EG)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux droites sécantes",
          "stepTheme": "Deux droites sécantes",
          "stepBadge": "Deux droites sécantes",
          "paragraphText": "Pour montrer $(D)\\perp(P)$, il faut deux droites SÉCANTES de $(P)$ orthogonales à $(D)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q1",
            "type": "mcq",
            "prompt": "Une droite $(D)$ est orthogonale à deux droites sécantes $(d_1)$ et $(d_2)$ d'un plan $(P)$. Que peut-on conclure ?",
            "options": [
              "$(D)\\parallel(P)$",
              "$(D)$ est contenue dans $(P)$",
              "$(D)\\perp(P)$",
              "Rien"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition d'une droite perpendiculaire à un plan."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Dans le cube",
          "stepTheme": "Dans le cube",
          "stepBadge": "Dans le cube",
          "paragraphText": "$(DH)\\perp(HE)$ et $(DH)\\perp(HG)$, et ces deux droites se coupent en $H$ dans le plan du haut $(EGH)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q2",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), la droite $(EF)$ est orthogonale à $(BF)$ et à $(GF)$. À quel plan est-elle perpendiculaire ?",
            "options": [
              "Au plan $(BFG)$",
              "Au plan $(ABC)$",
              "Au plan $(EFG)$",
              "Au plan $(AEF)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(BF)$ et $(GF)$ sont sécantes en $F$ et contenues dans le plan $(BFG)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La propriété fondamentale",
          "stepTheme": "La propriété fondamentale",
          "stepBadge": "La propriété fondamentale",
          "paragraphText": "Une droite perpendiculaire à un plan est orthogonale à toutes les droites de ce plan, même celles qui ne passent pas par son pied.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q3",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), $(DH)\\perp(EGH)$ et $(EG)\\subset(EGH)$. Que peut-on affirmer ?",
            "options": [
              "$(DH)\\parallel(EG)$",
              "$(DH)\\perp(EG)$",
              "$(DH)$ coupe $(EG)$",
              "$(EG)\\perp(EGH)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(DH)$ est orthogonale à toute droite du plan $(EGH)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Montrer deux droites orthogonales",
          "stepTheme": "Montrer deux droites orthogonales",
          "stepBadge": "Montrer deux droites orthogonales",
          "paragraphText": "On montre que l'une des droites est perpendiculaire à un plan qui contient l'autre.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q4",
            "type": "mcq",
            "prompt": "Dans le tétraèdre $SABC$, $(SB)\\perp(ABC)$. Pourquoi $(AC)\\perp(SB)$ ?",
            "options": [
              "Car $(AC)$ est contenue dans le plan $(ABC)$",
              "Car $(AC)$ coupe $(SB)$",
              "Car $(AC)\\parallel(SB)$",
              "Car le triangle $SAC$ est rectangle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Propriété fondamentale : $(SB)$ est orthogonale à toute droite du plan $(ABC)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Deux plans perpendiculaires en vue",
          "stepTheme": "Deux plans perpendiculaires en vue",
          "stepBadge": "Deux plans perpendiculaires en vue",
          "paragraphText": "Tétraèdre $SABC$, $(SB)\\perp(ABC)$, $ABC$ rectangle en $A$ : $(AC)\\perp(SB)$ et $(AC)\\perp(AB)$, avec $(SB)$ et $(AB)$ sécantes en $B$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q5",
            "type": "mcq",
            "prompt": "Dans le tétraèdre $SABC$, $(AC)\\perp(SB)$ et $(AC)\\perp(AB)$, et $(SB)$, $(AB)$ sont sécantes en $B$. À quel plan $(AC)$ est-elle perpendiculaire ?",
            "options": [
              "$(ABC)$",
              "$(SBC)$",
              "$(SAC)$",
              "$(SAB)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$(SB)$ et $(AB)$ sont deux droites sécantes du plan $(SAB)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Deux parallèles ne suffisent pas",
          "stepTheme": "Deux parallèles ne suffisent pas",
          "stepBadge": "Deux parallèles ne suffisent pas",
          "paragraphText": "Une droite orthogonale à deux droites PARALLÈLES d'un plan n'est pas forcément perpendiculaire au plan.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q6",
            "type": "mcq",
            "prompt": "« Toute droite orthogonale à deux droites parallèles d'un plan $(P)$ est perpendiculaire à $(P)$. » Cette affirmation est :",
            "options": [
              "Vraie",
              "Fausse : il faut deux droites sécantes",
              "Vraie seulement dans un cube",
              "Fausse : il faut trois droites"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec deux droites parallèles, on ne contrôle qu'une seule direction du plan."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un tétraèdre régulier",
          "stepTheme": "Un tétraèdre régulier",
          "stepBadge": "Un tétraèdre régulier",
          "paragraphText": "Tétraèdre régulier $SABC$, $K$ milieu de $[AB]$ : $(SK)\\perp(AB)$ et $(CK)\\perp(AB)$ (médianes de triangles équilatéraux). Donc $(AB)\\perp(SKC)$, d'où $(AB)\\perp(SC)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q7",
            "type": "mcq",
            "prompt": "$SABC$ est un tétraèdre régulier (4 faces équilatérales) et $K$ le milieu de $[AB]$. On a $(SK)\\perp(AB)$ et $(CK)\\perp(AB)$. Quelle conclusion est juste ?",
            "options": [
              "$(AB)\\parallel(SC)$",
              "$(SC)\\perp(SKC)$",
              "$(AB)\\perp(SC)$",
              "$(SK)\\parallel(CK)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(AB)$ est perpendiculaire au plan $(SKC)$, qui contient $(SC)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q1",
          "type": "mcq",
          "prompt": "Une droite $(D)$ est orthogonale à deux droites sécantes $(d_1)$ et $(d_2)$ d'un plan $(P)$. Que peut-on conclure ?",
          "options": [
            "$(D)\\parallel(P)$",
            "$(D)$ est contenue dans $(P)$",
            "$(D)\\perp(P)$",
            "Rien"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition d'une droite perpendiculaire à un plan."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q2",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), la droite $(EF)$ est orthogonale à $(BF)$ et à $(GF)$. À quel plan est-elle perpendiculaire ?",
          "options": [
            "Au plan $(BFG)$",
            "Au plan $(ABC)$",
            "Au plan $(EFG)$",
            "Au plan $(AEF)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(BF)$ et $(GF)$ sont sécantes en $F$ et contenues dans le plan $(BFG)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q3",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), $(DH)\\perp(EGH)$ et $(EG)\\subset(EGH)$. Que peut-on affirmer ?",
          "options": [
            "$(DH)\\parallel(EG)$",
            "$(DH)\\perp(EG)$",
            "$(DH)$ coupe $(EG)$",
            "$(EG)\\perp(EGH)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(DH)$ est orthogonale à toute droite du plan $(EGH)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q4",
          "type": "mcq",
          "prompt": "Dans le tétraèdre $SABC$, $(SB)\\perp(ABC)$. Pourquoi $(AC)\\perp(SB)$ ?",
          "options": [
            "Car $(AC)$ est contenue dans le plan $(ABC)$",
            "Car $(AC)$ coupe $(SB)$",
            "Car $(AC)\\parallel(SB)$",
            "Car le triangle $SAC$ est rectangle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Propriété fondamentale : $(SB)$ est orthogonale à toute droite du plan $(ABC)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q5",
          "type": "mcq",
          "prompt": "Dans le tétraèdre $SABC$, $(AC)\\perp(SB)$ et $(AC)\\perp(AB)$, et $(SB)$, $(AB)$ sont sécantes en $B$. À quel plan $(AC)$ est-elle perpendiculaire ?",
          "options": [
            "$(ABC)$",
            "$(SBC)$",
            "$(SAC)$",
            "$(SAB)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$(SB)$ et $(AB)$ sont deux droites sécantes du plan $(SAB)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q6",
          "type": "mcq",
          "prompt": "« Toute droite orthogonale à deux droites parallèles d'un plan $(P)$ est perpendiculaire à $(P)$. » Cette affirmation est :",
          "options": [
            "Vraie",
            "Fausse : il faut deux droites sécantes",
            "Vraie seulement dans un cube",
            "Fausse : il faut trois droites"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec deux droites parallèles, on ne contrôle qu'une seule direction du plan."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p02_q7",
          "type": "mcq",
          "prompt": "$SABC$ est un tétraèdre régulier (4 faces équilatérales) et $K$ le milieu de $[AB]$. On a $(SK)\\perp(AB)$ et $(CK)\\perp(AB)$. Quelle conclusion est juste ?",
          "options": [
            "$(AB)\\parallel(SC)$",
            "$(SC)\\perp(SKC)$",
            "$(AB)\\perp(SC)$",
            "$(SK)\\parallel(CK)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(AB)$ est perpendiculaire au plan $(SKC)$, qui contient $(SC)$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03",
      "order": 3,
      "title": "Unicité, parallélisme et perpendicularité",
      "summary": "Les propriétés qui relient droites parallèles, plans parallèles et perpendicularité.",
      "conceptExplanation": "Propriétés (cube ABCDEFGH : face ABCD en bas, E, F, G, H au-dessus de A, B, C, D) :\n1. Par un point donné, il passe UNE SEULE droite perpendiculaire à un plan donné.\n   Exemple : la seule droite passant par $B$ et perpendiculaire au plan $(GCD)$ est $(BC)$.\n2. Par un point donné, il passe UN SEUL plan perpendiculaire à une droite donnée.\n   Exemple : le seul plan passant par $A$ et perpendiculaire à $(AD)$ est le plan $(ABE)$.\n3. Si deux droites sont parallèles, tout plan perpendiculaire à l'une est perpendiculaire à l'autre.\n   Exemple : $(AE)\\parallel(DH)$ et $(DH)\\perp(FGH)$, donc $(AE)\\perp(FGH)$.\n4. Deux droites perpendiculaires à un même plan sont parallèles.\n   Exemple : $(DH)$ et $(BF)$ sont perpendiculaires au plan $(FGH)$, donc $(DH)\\parallel(BF)$.\n5. Si deux plans sont parallèles, toute droite perpendiculaire à l'un est perpendiculaire à l'autre.\n   Exemple : une droite perpendiculaire au plan du haut $(FGH)$ est perpendiculaire au plan du bas $(ABD)$.\n6. Deux plans perpendiculaires à une même droite sont parallèles.\n\nAttention : par un point, il passe une infinité de droites ORTHOGONALES à une droite donnée (elles remplissent tout un plan).",
      "keyRule": "Une seule perpendiculaire à un plan par un point ; un seul plan perpendiculaire à une droite par un point. « Perpendiculaire à un même plan » donne des droites parallèles.",
      "formulas": [],
      "workedExample": {
        "title": "Deux arêtes verticales",
        "statement": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), justifie que $(DH)\\parallel(BF)$.",
        "methodSteps": [
          "$(DH)$ est orthogonale à $(HE)$ et $(HG)$, sécantes : $(DH)\\perp(FGH)$.",
          "De même $(BF)\\perp(FE)$ et $(BF)\\perp(FG)$ : $(BF)\\perp(FGH)$."
        ],
        "conclusion": "Deux droites perpendiculaires à un même plan sont parallèles : $(DH)\\parallel(BF)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Une seule perpendiculaire",
          "stepTheme": "Une seule perpendiculaire",
          "stepBadge": "Une seule perpendiculaire",
          "paragraphText": "Par un point donné passe une unique droite perpendiculaire à un plan donné.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q1",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), quelle est la droite passant par $B$ et perpendiculaire au plan $(GCD)$ ?",
            "options": [
              "$(BF)$",
              "$(BD)$",
              "$(BG)$",
              "$(BC)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$(BC)\\perp(CD)$ et $(BC)\\perp(CG)$, deux droites sécantes du plan $(GCD)$. Elle est unique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un seul plan perpendiculaire",
          "stepTheme": "Un seul plan perpendiculaire",
          "stepBadge": "Un seul plan perpendiculaire",
          "paragraphText": "Par un point donné passe un unique plan perpendiculaire à une droite donnée.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q2",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), combien y a-t-il de plans passant par $A$ et perpendiculaires à la droite $(AD)$ ?",
            "options": [
              "Un seul : le plan $(ABE)$",
              "Deux",
              "Une infinité",
              "Aucun"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(AD)\\perp(AB)$ et $(AD)\\perp(AE)$ : le plan $(ABE)$ convient, et il est unique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Orthogonale n'est pas perpendiculaire",
          "stepTheme": "Orthogonale n'est pas perpendiculaire",
          "stepBadge": "Orthogonale n'est pas perpendiculaire",
          "paragraphText": "Par un point donné, il passe une infinité de droites orthogonales à une droite donnée : elles forment un plan.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q3",
            "type": "mcq",
            "prompt": "« Par un point donné de l'espace, il passe une unique droite orthogonale à une droite donnée. » Cette affirmation est :",
            "options": [
              "Vraie",
              "Vraie seulement si le point est sur la droite",
              "Fausse : il y en a une infinité",
              "Fausse : il n'y en a aucune"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Toutes les droites passant par ce point dans le plan perpendiculaire à la droite donnée conviennent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Avec deux droites parallèles",
          "stepTheme": "Avec deux droites parallèles",
          "stepBadge": "Avec deux droites parallèles",
          "paragraphText": "Si deux droites sont parallèles, tout plan perpendiculaire à l'une est perpendiculaire à l'autre.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q4",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), $(AE)\\parallel(DH)$ et $(DH)\\perp(FGH)$. Que peut-on conclure ?",
            "options": [
              "$(AE)\\parallel(FGH)$",
              "$(AE)\\perp(FGH)$",
              "$(AE)$ est contenue dans $(FGH)$",
              "Rien"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un plan perpendiculaire à $(DH)$ est perpendiculaire à sa parallèle $(AE)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Perpendiculaires à un même plan",
          "stepTheme": "Perpendiculaires à un même plan",
          "stepBadge": "Perpendiculaires à un même plan",
          "paragraphText": "Deux droites perpendiculaires à un même plan sont parallèles.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q5",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), $(DH)$ et $(BF)$ sont toutes deux perpendiculaires au plan $(FGH)$. Que peut-on dire de $(DH)$ et $(BF)$ ?",
            "options": [
              "Elles sont parallèles",
              "Elles sont orthogonales",
              "Elles sont sécantes",
              "Elles sont confondues"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux droites perpendiculaires à un même plan sont parallèles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Avec deux plans parallèles",
          "stepTheme": "Avec deux plans parallèles",
          "stepBadge": "Avec deux plans parallèles",
          "paragraphText": "Si deux plans sont parallèles, toute droite perpendiculaire à l'un est perpendiculaire à l'autre.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q6",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), une droite $(D)$ est perpendiculaire aux diagonales $(FH)$ et $(EG)$ du carré du haut, en leur point commun $I$. Pourquoi $(D)$ est-elle perpendiculaire au plan du bas $(ABD)$ ?",
            "options": [
              "Car $(D)$ passe par $A$",
              "Car $(D)\\parallel(FH)$",
              "Car $(D)\\perp(FGH)$ et les plans $(FGH)$ et $(ABD)$ sont parallèles",
              "Car $(ABD)$ contient $(EG)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(FH)$ et $(EG)$ sont sécantes dans $(FGH)$, et les faces du haut et du bas sont parallèles."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Deux plans perpendiculaires à un même plan",
          "stepTheme": "Deux plans perpendiculaires à un même plan",
          "stepBadge": "Deux plans perpendiculaires à un même plan",
          "paragraphText": "Deux plans perpendiculaires à une même DROITE sont parallèles. Mais deux plans perpendiculaires à un même PLAN peuvent se couper : deux murs voisins sont perpendiculaires au sol et se coupent.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q7",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), les faces $(ABFE)$ et $(ADHE)$ sont perpendiculaires au plan du bas $(ABC)$. Sont-elles parallèles ?",
            "options": [
              "Oui, toujours",
              "Oui, car elles sont perpendiculaires au même plan",
              "Non : elles se coupent suivant la droite $(AE)$",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Deux plans perpendiculaires à un même plan ne sont pas forcément parallèles."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q1",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), quelle est la droite passant par $B$ et perpendiculaire au plan $(GCD)$ ?",
          "options": [
            "$(BF)$",
            "$(BD)$",
            "$(BG)$",
            "$(BC)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$(BC)\\perp(CD)$ et $(BC)\\perp(CG)$, deux droites sécantes du plan $(GCD)$. Elle est unique."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q2",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), combien y a-t-il de plans passant par $A$ et perpendiculaires à la droite $(AD)$ ?",
          "options": [
            "Un seul : le plan $(ABE)$",
            "Deux",
            "Une infinité",
            "Aucun"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(AD)\\perp(AB)$ et $(AD)\\perp(AE)$ : le plan $(ABE)$ convient, et il est unique."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q3",
          "type": "mcq",
          "prompt": "« Par un point donné de l'espace, il passe une unique droite orthogonale à une droite donnée. » Cette affirmation est :",
          "options": [
            "Vraie",
            "Vraie seulement si le point est sur la droite",
            "Fausse : il y en a une infinité",
            "Fausse : il n'y en a aucune"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Toutes les droites passant par ce point dans le plan perpendiculaire à la droite donnée conviennent."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q4",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), $(AE)\\parallel(DH)$ et $(DH)\\perp(FGH)$. Que peut-on conclure ?",
          "options": [
            "$(AE)\\parallel(FGH)$",
            "$(AE)\\perp(FGH)$",
            "$(AE)$ est contenue dans $(FGH)$",
            "Rien"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un plan perpendiculaire à $(DH)$ est perpendiculaire à sa parallèle $(AE)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q5",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), $(DH)$ et $(BF)$ sont toutes deux perpendiculaires au plan $(FGH)$. Que peut-on dire de $(DH)$ et $(BF)$ ?",
          "options": [
            "Elles sont parallèles",
            "Elles sont orthogonales",
            "Elles sont sécantes",
            "Elles sont confondues"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux droites perpendiculaires à un même plan sont parallèles."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q6",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), une droite $(D)$ est perpendiculaire aux diagonales $(FH)$ et $(EG)$ du carré du haut, en leur point commun $I$. Pourquoi $(D)$ est-elle perpendiculaire au plan du bas $(ABD)$ ?",
          "options": [
            "Car $(D)$ passe par $A$",
            "Car $(D)\\parallel(FH)$",
            "Car $(D)\\perp(FGH)$ et les plans $(FGH)$ et $(ABD)$ sont parallèles",
            "Car $(ABD)$ contient $(EG)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(FH)$ et $(EG)$ sont sécantes dans $(FGH)$, et les faces du haut et du bas sont parallèles."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p03_q7",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), les faces $(ABFE)$ et $(ADHE)$ sont perpendiculaires au plan du bas $(ABC)$. Sont-elles parallèles ?",
          "options": [
            "Oui, toujours",
            "Oui, car elles sont perpendiculaires au même plan",
            "Non : elles se coupent suivant la droite $(AE)$",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Deux plans perpendiculaires à un même plan ne sont pas forcément parallèles."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04",
      "order": 4,
      "title": "Plans perpendiculaires",
      "summary": "Deux plans sont perpendiculaires si l'un contient une droite perpendiculaire à l'autre.",
      "conceptExplanation": "Définition : deux plans $(P)$ et $(Q)$ sont perpendiculaires si l'un d'eux contient une droite perpendiculaire à l'autre. On note $(P)\\perp(Q)$.\n$$(d)\\subset(P)\\ \\text{et}\\ (d)\\perp(Q)\\ \\Rightarrow\\ (P)\\perp(Q).$$\n\nExemple : $SABCD$ est une pyramide régulière de hauteur $[SO]$ ($O$ centre du carré $ABCD$). $(AO)$ est contenue dans le plan $(ABD)$ et $(AO)\\perp(SDB)$ (car $(AO)\\perp(BD)$ et $(AO)\\perp(SO)$). Donc $(SDB)\\perp(ABD)$.\n\nConséquences et propriétés :\n- si une droite $(D)$ est perpendiculaire à un plan $(P)$, tout plan contenant $(D)$ est perpendiculaire à $(P)$ ;\n- si deux plans sont perpendiculaires, tout plan parallèle à l'un est perpendiculaire à l'autre ;\n- un plan est perpendiculaire à deux plans sécants si et seulement s'il est perpendiculaire à leur droite d'intersection.\n\nExemple (cube ABCDEFGH, face ABCD en bas, E, F, G, H au-dessus de A, B, C, D) : les plans $(ACE)$ et $(DEH)$ se coupent suivant $(AE)$, et $(AE)\\perp(ABC)$. Donc $(ACE)$ et $(DEH)$ sont perpendiculaires au plan $(ABC)$.\n\nAutres exemples dans le cube : $(ABC)\\perp(AEC)$ ; $(AEC)\\perp(HDB)$ (car $(AC)\\perp(BD)$ et $(AC)\\perp(HD)$) ; $(FCH)\\perp(AEG)$ (car $(FH)\\perp(EG)$ et $(FH)\\perp(AE)$).",
      "keyRule": "Pour montrer $(P)\\perp(Q)$ : trouver une droite de $(P)$ perpendiculaire à $(Q)$.",
      "formulas": [],
      "workedExample": {
        "title": "Un plan diagonal du cube",
        "statement": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), montre que $(AEC)\\perp(HDB)$.",
        "methodSteps": [
          "$(AC)\\perp(BD)$ : diagonales du carré $ABCD$.",
          "$(AC)\\perp(CG)$ et $(CG)\\parallel(HD)$, donc $(AC)\\perp(HD)$.",
          "$(BD)$ et $(HD)$ sont sécantes en $D$ : $(AC)\\perp(HDB)$. Or $(AC)\\subset(AEC)$."
        ],
        "conclusion": "Les plans $(AEC)$ et $(HDB)$ sont perpendiculaires."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "$(P)\\perp(Q)$ si $(P)$ contient une droite perpendiculaire à $(Q)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q1",
            "type": "mcq",
            "prompt": "Une droite $(d)$ est contenue dans un plan $(P)$ et perpendiculaire à un plan $(Q)$. Que peut-on dire de $(P)$ et $(Q)$ ?",
            "options": [
              "Ils sont parallèles",
              "Ils sont perpendiculaires",
              "Ils sont confondus",
              "Rien"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de deux plans perpendiculaires."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La pyramide régulière",
          "stepTheme": "La pyramide régulière",
          "stepBadge": "La pyramide régulière",
          "paragraphText": "Pyramide régulière $SABCD$ de hauteur $[SO]$ : $(AO)\\subset(ABD)$ et $(AO)\\perp(SDB)$, donc $(SDB)\\perp(ABD)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q2",
            "type": "mcq",
            "prompt": "$SABCD$ est une pyramide régulière de base carrée $ABCD$, de centre $O$ et de hauteur $[SO]$. Quelle droite du plan $(ABD)$ est perpendiculaire au plan $(SDB)$ ?",
            "options": [
              "$(AB)$",
              "$(BD)$",
              "$(AO)$",
              "$(SO)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(AO)\\perp(BD)$ (diagonales du carré) et $(AO)\\perp(SO)$ (la hauteur est perpendiculaire à la base)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Une arête verticale",
          "stepTheme": "Une arête verticale",
          "stepBadge": "Une arête verticale",
          "paragraphText": "Dans le cube, $(AE)\\perp(ABC)$. Tout plan qui contient $(AE)$ est donc perpendiculaire au plan du bas.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q3",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), $(AE)\\perp(ABC)$. Lequel de ces plans est perpendiculaire au plan $(ABC)$ ?",
            "options": [
              "$(EFG)$",
              "$(ACE)$",
              "$(BDG)$",
              "$(FGH)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le plan $(ACE)$ contient la droite $(AE)$, perpendiculaire à $(ABC)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Deux plans sécants",
          "stepTheme": "Deux plans sécants",
          "stepBadge": "Deux plans sécants",
          "paragraphText": "Un plan est perpendiculaire à deux plans sécants si et seulement s'il est perpendiculaire à leur droite d'intersection.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q4",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), suivant quelle droite les plans $(ACE)$ et $(DEH)$ se coupent-ils ?",
            "options": [
              "$(AC)$",
              "$(DE)$",
              "$(EH)$",
              "$(AE)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$A$ et $E$ sont dans les deux plans. Comme $(AE)\\perp(ABC)$, les deux plans sont perpendiculaires à $(ABC)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Deux plans diagonaux",
          "stepTheme": "Deux plans diagonaux",
          "stepBadge": "Deux plans diagonaux",
          "paragraphText": "$(FH)\\perp(EG)$ (diagonales du carré du haut) et $(FH)\\perp(AE)$ : $(FH)\\perp(AEG)$, et $(FH)\\subset(FCH)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q5",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), $(FH)\\perp(EG)$ et $(FH)\\perp(AE)$, et $(FH)$ est contenue dans le plan $(FCH)$. Que peut-on conclure ?",
            "options": [
              "$(FCH)\\perp(AEG)$",
              "$(FCH)\\parallel(AEG)$",
              "$(FH)\\parallel(AEG)$",
              "$(EG)\\perp(FCH)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(EG)$ et $(AE)$ sont sécantes en $E$ : $(FH)\\perp(AEG)$, et $(FCH)$ contient $(FH)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Avec un plan parallèle",
          "stepTheme": "Avec un plan parallèle",
          "stepBadge": "Avec un plan parallèle",
          "paragraphText": "Si deux plans sont perpendiculaires, tout plan parallèle à l'un est perpendiculaire à l'autre.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q6",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), la face $(ABFE)$ est perpendiculaire au plan du bas $(ABC)$, et le plan du haut $(EFG)$ est parallèle à $(ABC)$. Que peut-on dire de $(ABFE)$ et $(EFG)$ ?",
            "options": [
              "Ils sont parallèles",
              "Ils sont confondus",
              "Ils sont perpendiculaires",
              "Rien"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un plan parallèle à $(ABC)$ est perpendiculaire à tout plan perpendiculaire à $(ABC)$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Toutes les droites ? Non",
          "stepTheme": "Toutes les droites ? Non",
          "stepBadge": "Toutes les droites ? Non",
          "paragraphText": "Deux plans perpendiculaires : une droite de l'un n'est PAS forcément orthogonale à toutes les droites de l'autre.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q7",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), la face $(ABFE)$ est perpendiculaire à la face du bas $(ABCD)$. La droite $(EF)$ de la première est-elle orthogonale à la droite $(AB)$ de la seconde ?",
            "options": [
              "Oui, car les deux faces sont perpendiculaires",
              "Non : $(EF)$ et $(AB)$ sont parallèles",
              "Oui, car elles ne se coupent pas",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux plans perpendiculaires peuvent contenir des droites parallèles : leurs droites ne sont pas toutes orthogonales."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q1",
          "type": "mcq",
          "prompt": "Une droite $(d)$ est contenue dans un plan $(P)$ et perpendiculaire à un plan $(Q)$. Que peut-on dire de $(P)$ et $(Q)$ ?",
          "options": [
            "Ils sont parallèles",
            "Ils sont perpendiculaires",
            "Ils sont confondus",
            "Rien"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de deux plans perpendiculaires."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q2",
          "type": "mcq",
          "prompt": "$SABCD$ est une pyramide régulière de base carrée $ABCD$, de centre $O$ et de hauteur $[SO]$. Quelle droite du plan $(ABD)$ est perpendiculaire au plan $(SDB)$ ?",
          "options": [
            "$(AB)$",
            "$(BD)$",
            "$(AO)$",
            "$(SO)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(AO)\\perp(BD)$ (diagonales du carré) et $(AO)\\perp(SO)$ (la hauteur est perpendiculaire à la base)."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q3",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), $(AE)\\perp(ABC)$. Lequel de ces plans est perpendiculaire au plan $(ABC)$ ?",
          "options": [
            "$(EFG)$",
            "$(ACE)$",
            "$(BDG)$",
            "$(FGH)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le plan $(ACE)$ contient la droite $(AE)$, perpendiculaire à $(ABC)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q4",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), suivant quelle droite les plans $(ACE)$ et $(DEH)$ se coupent-ils ?",
          "options": [
            "$(AC)$",
            "$(DE)$",
            "$(EH)$",
            "$(AE)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$A$ et $E$ sont dans les deux plans. Comme $(AE)\\perp(ABC)$, les deux plans sont perpendiculaires à $(ABC)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q5",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), $(FH)\\perp(EG)$ et $(FH)\\perp(AE)$, et $(FH)$ est contenue dans le plan $(FCH)$. Que peut-on conclure ?",
          "options": [
            "$(FCH)\\perp(AEG)$",
            "$(FCH)\\parallel(AEG)$",
            "$(FH)\\parallel(AEG)$",
            "$(EG)\\perp(FCH)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(EG)$ et $(AE)$ sont sécantes en $E$ : $(FH)\\perp(AEG)$, et $(FCH)$ contient $(FH)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q6",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), la face $(ABFE)$ est perpendiculaire au plan du bas $(ABC)$, et le plan du haut $(EFG)$ est parallèle à $(ABC)$. Que peut-on dire de $(ABFE)$ et $(EFG)$ ?",
          "options": [
            "Ils sont parallèles",
            "Ils sont confondus",
            "Ils sont perpendiculaires",
            "Rien"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un plan parallèle à $(ABC)$ est perpendiculaire à tout plan perpendiculaire à $(ABC)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p04_q7",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), la face $(ABFE)$ est perpendiculaire à la face du bas $(ABCD)$. La droite $(EF)$ de la première est-elle orthogonale à la droite $(AB)$ de la seconde ?",
          "options": [
            "Oui, car les deux faces sont perpendiculaires",
            "Non : $(EF)$ et $(AB)$ sont parallèles",
            "Oui, car elles ne se coupent pas",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux plans perpendiculaires peuvent contenir des droites parallèles : leurs droites ne sont pas toutes orthogonales."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05",
      "order": 5,
      "title": "Projection orthogonale et distances",
      "summary": "Le projeté orthogonal donne le point le plus proche ; la distance se mesure jusqu'à lui.",
      "conceptExplanation": "Sur un plan : $A$ est un point et $(P)$ un plan. La droite passant par $A$ et perpendiculaire à $(P)$ coupe $(P)$ en $H$.\n- $H$ est le projeté orthogonal de $A$ sur $(P)$ ;\n- $AH$ est la distance de $A$ au plan $(P)$ ; pour tout point $M$ de $(P)$, $AH\\leq AM$.\n\nSur une droite : $B$ est un point et $(\\Delta)$ une droite. Le plan passant par $B$ et perpendiculaire à $(\\Delta)$ coupe $(\\Delta)$ en $K$.\n- $K$ est le projeté orthogonal de $B$ sur $(\\Delta)$ ;\n- $BK$ est la distance de $B$ à $(\\Delta)$.\n\nPropriétés de la projection orthogonale sur un plan $(\\mathcal P)$ :\n- l'image d'une droite est un point si la droite est perpendiculaire à $(\\mathcal P)$, une droite sinon ;\n- l'image d'un segment $[AB]$ est un point si $(AB)\\perp(\\mathcal P)$, un segment sinon ;\n- l'image du milieu de $[AB]$ est le milieu de l'image de $[AB]$.\n\nExemples (cube ABCDEFGH, face ABCD en bas, E, F, G, H au-dessus de A, B, C, D) :\n- projection sur la face $(EHD)$ : $A\\mapsto A$, $B\\mapsto A$, $C\\mapsto D$, $D\\mapsto D$, $E\\mapsto E$, $F\\mapsto E$, $G\\mapsto H$, $H\\mapsto H$ ;\n- $I$ centre du carré $EFGH$ (milieu de $[HF]$) : le projeté de $[HF]$ sur $(ABC)$ est $[DB]$, donc le projeté de $I$ est le milieu de $[DB]$, le centre $J$ de $ABCD$ ;\n- la distance de $H$ au plan $(AED)$ vaut $0$, car $H$ est dans ce plan ;\n- la distance de $F$ à la droite $(HD)$ est $FH$.",
      "keyRule": "Projeté sur un plan : on descend perpendiculairement au plan. Distance d'un point à un plan = distance au projeté.",
      "formulas": [],
      "workedExample": {
        "title": "Le centre de la face du haut",
        "statement": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), $I$ est le centre du carré $EFGH$ et $J$ celui de $ABCD$. Quel est le projeté orthogonal de $I$ sur le plan $(ABC)$ ?",
        "methodSteps": [
          "$I$ est le milieu de $[HF]$.",
          "Le projeté de $H$ est $D$, celui de $F$ est $B$ : le projeté de $[HF]$ est $[DB]$.",
          "Le projeté du milieu est le milieu du projeté."
        ],
        "conclusion": "Le projeté de $I$ est le milieu de $[DB]$, c'est-à-dire $J$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le projeté sur un plan",
          "stepTheme": "Le projeté sur un plan",
          "stepBadge": "Le projeté sur un plan",
          "paragraphText": "Le projeté orthogonal de $A$ sur $(P)$ est le pied $H$ de la perpendiculaire à $(P)$ passant par $A$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q1",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), quel est le projeté orthogonal du point $G$ sur la face $(AED)$ ?",
            "options": [
              "$A$",
              "$E$",
              "$D$",
              "$H$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$(GH)$ est perpendiculaire à la face $(AEHD)$ et $H$ appartient à cette face."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Projeter tout le cube",
          "stepTheme": "Projeter tout le cube",
          "stepBadge": "Projeter tout le cube",
          "paragraphText": "Sur la face $(EHD)$ : chaque sommet de la face d'en face « glisse » sur le sommet qui lui fait face ($B\\mapsto A$, $C\\mapsto D$, $F\\mapsto E$, $G\\mapsto H$).",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q2",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), quel est le projeté orthogonal de $C$ sur le plan $(EHD)$ ?",
            "options": [
              "$D$",
              "$A$",
              "$H$",
              "$C$ lui-même"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(CD)$ est perpendiculaire à la face $(ADHE)$ en $D$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le projeté sur une droite",
          "stepTheme": "Le projeté sur une droite",
          "stepBadge": "Le projeté sur une droite",
          "paragraphText": "Le projeté de $B$ sur $(\\Delta)$ est le point $K$ où le plan passant par $B$ et perpendiculaire à $(\\Delta)$ coupe $(\\Delta)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q3",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), quel est le projeté orthogonal de $B$ sur la droite $(EH)$ ?",
            "options": [
              "$A$",
              "$H$",
              "$E$",
              "$F$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le plan passant par $B$ et perpendiculaire à $(EH)$ est la face $(ABFE)$, qui coupe $(EH)$ en $E$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La distance la plus courte",
          "stepTheme": "La distance la plus courte",
          "stepBadge": "La distance la plus courte",
          "paragraphText": "La distance d'un point à un plan est $AH$, avec $H$ son projeté : c'est la plus courte de toutes les distances $AM$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q4",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH d'arête $a$ (E, F, G, H au-dessus de A, B, C, D), quelle est la distance du point $C$ au plan $(EHA)$ ?",
            "options": [
              "$a\\sqrt2$",
              "$a$",
              "$0$",
              "$a\\sqrt3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le projeté de $C$ sur la face $(ADHE)$ est $D$, et $CD=a$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un point du plan",
          "stepTheme": "Un point du plan",
          "stepBadge": "Un point du plan",
          "paragraphText": "Si le point est dans le plan, il est son propre projeté et sa distance au plan vaut $0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q5",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), quelle est la distance du point $H$ au plan $(AED)$ ?",
            "options": [
              "$HE$",
              "$HD$",
              "$HA$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$H$ appartient à la face $(AEHD)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le projeté d'un milieu",
          "stepTheme": "Le projeté d'un milieu",
          "stepBadge": "Le projeté d'un milieu",
          "paragraphText": "Le projeté du milieu d'un segment est le milieu du projeté de ce segment (si le segment n'est pas perpendiculaire au plan).",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q6",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), $I$ est le centre du carré du haut $EFGH$ et $J$ le centre du carré du bas $ABCD$. Quel est le projeté orthogonal de $I$ sur le plan $(ABC)$ ?",
            "options": [
              "$A$",
              "$J$",
              "$C$",
              "$I$ lui-même"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$I$ est le milieu de $[HF]$, dont le projeté est $[DB]$ : le projeté de $I$ est le milieu de $[DB]$, soit $J$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un segment qui devient un point",
          "stepTheme": "Un segment qui devient un point",
          "stepBadge": "Un segment qui devient un point",
          "paragraphText": "L'image d'un segment $[AB]$ est un point si $(AB)$ est perpendiculaire au plan de projection.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q7",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), quelle est l'image du segment $[AE]$ par la projection orthogonale sur le plan du bas $(ABC)$ ?",
            "options": [
              "Le segment $[AB]$",
              "Le point $A$",
              "Le segment $[AC]$",
              "Le point $E$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(AE)$ est perpendiculaire au plan $(ABC)$ : tout le segment se projette en $A$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q1",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), quel est le projeté orthogonal du point $G$ sur la face $(AED)$ ?",
          "options": [
            "$A$",
            "$E$",
            "$D$",
            "$H$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$(GH)$ est perpendiculaire à la face $(AEHD)$ et $H$ appartient à cette face."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q2",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), quel est le projeté orthogonal de $C$ sur le plan $(EHD)$ ?",
          "options": [
            "$D$",
            "$A$",
            "$H$",
            "$C$ lui-même"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(CD)$ est perpendiculaire à la face $(ADHE)$ en $D$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q3",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), quel est le projeté orthogonal de $B$ sur la droite $(EH)$ ?",
          "options": [
            "$A$",
            "$H$",
            "$E$",
            "$F$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le plan passant par $B$ et perpendiculaire à $(EH)$ est la face $(ABFE)$, qui coupe $(EH)$ en $E$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q4",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH d'arête $a$ (E, F, G, H au-dessus de A, B, C, D), quelle est la distance du point $C$ au plan $(EHA)$ ?",
          "options": [
            "$a\\sqrt2$",
            "$a$",
            "$0$",
            "$a\\sqrt3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le projeté de $C$ sur la face $(ADHE)$ est $D$, et $CD=a$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q5",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), quelle est la distance du point $H$ au plan $(AED)$ ?",
          "options": [
            "$HE$",
            "$HD$",
            "$HA$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$H$ appartient à la face $(AEHD)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q6",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (E, F, G, H au-dessus de A, B, C, D), $I$ est le centre du carré du haut $EFGH$ et $J$ le centre du carré du bas $ABCD$. Quel est le projeté orthogonal de $I$ sur le plan $(ABC)$ ?",
          "options": [
            "$A$",
            "$J$",
            "$C$",
            "$I$ lui-même"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$I$ est le milieu de $[HF]$, dont le projeté est $[DB]$ : le projeté de $I$ est le milieu de $[DB]$, soit $J$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p05_q7",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), quelle est l'image du segment $[AE]$ par la projection orthogonale sur le plan du bas $(ABC)$ ?",
          "options": [
            "Le segment $[AB]$",
            "Le point $A$",
            "Le segment $[AC]$",
            "Le point $E$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(AE)$ est perpendiculaire au plan $(ABC)$ : tout le segment se projette en $A$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06",
      "order": 6,
      "title": "Situations : arêtes opposées et défi du professeur",
      "summary": "Démontrer des orthogonalités dans un tétraèdre et dans un cube.",
      "conceptExplanation": "Situation 1 (arêtes opposées) : dans un tétraèdre, deux arêtes opposées n'ont aucun sommet commun. $SABC$ est un tétraèdre avec $(SA)\\perp(ABC)$ et $ABC$ rectangle en $A$.\n- $(SB)\\perp(AC)$ : $(AC)\\perp(AB)$ et $(AC)\\perp(SA)$ (car $(SA)\\perp(ABC)$), donc $(AC)\\perp(SAB)$, qui contient $(SB)$ ;\n- $(SA)\\perp(BC)$ : propriété fondamentale, car $(BC)\\subset(ABC)$ ;\n- $(SC)\\perp(AB)$ : $(AB)\\perp(AC)$ et $(AB)\\perp(SA)$, donc $(AB)\\perp(SAC)$, qui contient $(SC)$.\nLes arêtes opposées de ce tétraèdre sont deux à deux orthogonales.\n\nSituation 2 (le défi) : cube ABCDEFGH (face ABCD en bas, E, F, G, H au-dessus de A, B, C, D). $I$ et $J$ sont les milieux de $[BC]$ et $[CD]$ ; $P$ et $Q$ sont les centres des faces $AEHD$ et $CDHG$. Le professeur affirme que $(PQ)$ et $(IJ)$ sont orthogonales et non sécantes.\n- Non sécantes : $(IJ)$ est dans le plan du bas $(ABC)$, $(PQ)$ dans le plan parallèle situé à mi-hauteur. Ces plans sont disjoints.\n- Orthogonales : on projette $P$ et $Q$ sur $(ABC)$ : on obtient $S$, milieu de $[AD]$, et $J$, milieu de $[CD]$, avec $(SJ)\\parallel(PQ)$. Droite des milieux : $(SJ)\\parallel(AC)$ et $(IJ)\\parallel(BD)$. Or $(AC)\\perp(BD)$. Donc $(PQ)\\perp(IJ)$.\n\nDistance d'un sommet à un plan : dans un cube d'arête $a$, la diagonale $(EC)$ est perpendiculaire au plan $(AHF)$ et la distance de $E$ à ce plan vaut $\\dfrac{\\sqrt3}{3}a$ (le tiers de la grande diagonale $EC=a\\sqrt3$).",
      "keyRule": "Pour une orthogonalité difficile : passer par un plan (propriété fondamentale) ou par des parallèles (projection, droite des milieux).",
      "formulas": [
        {
          "name": "Grande diagonale du cube",
          "formula": "EC=a\\sqrt3"
        }
      ],
      "workedExample": {
        "title": "Une arête opposée",
        "statement": "$SABC$ est un tétraèdre avec $(SA)\\perp(ABC)$ et $ABC$ rectangle en $A$. Montre que $(SC)\\perp(AB)$.",
        "methodSteps": [
          "$(AB)\\perp(AC)$ car $ABC$ est rectangle en $A$.",
          "$(AB)\\perp(SA)$ car $(SA)\\perp(ABC)$ et $(AB)\\subset(ABC)$.",
          "$(AC)$ et $(SA)$ sont sécantes en $A$ : $(AB)\\perp(SAC)$."
        ],
        "conclusion": "$(SC)$ est contenue dans $(SAC)$, donc $(SC)\\perp(AB)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Arêtes opposées",
          "stepTheme": "Arêtes opposées",
          "stepBadge": "Arêtes opposées",
          "paragraphText": "Dans un tétraèdre, deux arêtes opposées n'ont aucun sommet commun.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q1",
            "type": "mcq",
            "prompt": "Dans le tétraèdre $SABC$, quelle arête est opposée à l'arête $[SA]$ ?",
            "options": [
              "$[SB]$",
              "$[AB]$",
              "$[BC]$",
              "$[AC]$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$[BC]$ n'a ni $S$ ni $A$ comme extrémité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La plus facile",
          "stepTheme": "La plus facile",
          "stepBadge": "La plus facile",
          "paragraphText": "$(SA)\\perp(ABC)$ et $(BC)\\subset(ABC)$ : la propriété fondamentale donne directement $(SA)\\perp(BC)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q2",
            "type": "mcq",
            "prompt": "$SABC$ est un tétraèdre avec $(SA)\\perp(ABC)$. Quelle propriété prouve que $(SA)\\perp(BC)$ ?",
            "options": [
              "La propriété fondamentale, car $(BC)\\subset(ABC)$",
              "Le théorème de Pythagore",
              "La droite des milieux",
              "Deux plans perpendiculaires à un même plan"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une droite perpendiculaire à un plan est orthogonale à toute droite de ce plan."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Passer par un plan",
          "stepTheme": "Passer par un plan",
          "stepBadge": "Passer par un plan",
          "paragraphText": "Pour $(SB)\\perp(AC)$ : $(AC)\\perp(AB)$ et $(AC)\\perp(SA)$, donc $(AC)\\perp(SAB)$, qui contient $(SB)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q3",
            "type": "mcq",
            "prompt": "$SABC$ est un tétraèdre avec $(SA)\\perp(ABC)$ et $ABC$ rectangle en $A$. À quel plan la droite $(AC)$ est-elle perpendiculaire ?",
            "options": [
              "$(ABC)$",
              "$(SBC)$",
              "$(SAB)$",
              "$(SAC)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(AC)\\perp(AB)$ et $(AC)\\perp(SA)$, deux droites sécantes en $A$ du plan $(SAB)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Non sécantes",
          "stepTheme": "Non sécantes",
          "stepBadge": "Non sécantes",
          "paragraphText": "Deux droites contenues dans deux plans parallèles distincts ne peuvent pas se couper.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q4",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), $(IJ)$ est dans le plan du bas et $(PQ)$ dans le plan horizontal situé à mi-hauteur. Pourquoi $(PQ)$ et $(IJ)$ ne sont-elles pas sécantes ?",
            "options": [
              "Car elles sont orthogonales",
              "Car elles sont dans deux plans parallèles distincts",
              "Car elles sont parallèles",
              "Car $P$ et $Q$ sont des centres de faces"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux plans parallèles distincts n'ont aucun point commun."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le défi du professeur",
          "stepTheme": "Le défi du professeur",
          "stepBadge": "Le défi du professeur",
          "paragraphText": "$(PQ)\\parallel(SJ)\\parallel(AC)$ et $(IJ)\\parallel(BD)$, avec $(AC)\\perp(BD)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q5",
            "type": "mcq",
            "prompt": "Dans le cube ABCDEFGH (face ABCD en bas), $I$ et $J$ sont les milieux de $[BC]$ et $[CD]$, $P$ et $Q$ les centres des faces $AEHD$ et $CDHG$. On a $(PQ)\\parallel(AC)$ et $(IJ)\\parallel(BD)$. Que peut-on conclure ?",
            "options": [
              "$(PQ)\\parallel(IJ)$",
              "$(PQ)\\perp(IJ)$",
              "$(PQ)$ et $(IJ)$ sont sécantes",
              "Rien"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les diagonales $(AC)$ et $(BD)$ du carré sont perpendiculaires."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Distance à un plan diagonal",
          "stepTheme": "Distance à un plan diagonal",
          "stepBadge": "Distance à un plan diagonal",
          "paragraphText": "Dans un cube d'arête $a$, la diagonale $(EC)$ est perpendiculaire au plan $(AHF)$ ; elle le coupe au tiers de $[EC]$ en partant de $E$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q6",
            "type": "mcq",
            "prompt": "Dans un cube d'arête $a$, la grande diagonale vaut $EC=a\\sqrt3$, et la distance de $E$ au plan $(AHF)$ est le tiers de $EC$. Que vaut cette distance ?",
            "options": [
              "$a\\sqrt3$",
              "$\\dfrac{a}{3}$",
              "$\\dfrac{\\sqrt3}{3}a$",
              "$\\dfrac{\\sqrt2}{2}a$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{a\\sqrt3}{3}=\\dfrac{\\sqrt3}{3}a$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Vrai ou faux",
          "stepTheme": "Vrai ou faux",
          "stepBadge": "Vrai ou faux",
          "paragraphText": "Perpendiculaires $\\Rightarrow$ orthogonales, mais orthogonales $\\not\\Rightarrow$ perpendiculaires.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations sur l'espace est VRAIE ?",
            "options": [
              "Deux droites orthogonales sont perpendiculaires",
              "Deux droites perpendiculaires sont orthogonales",
              "Deux droites orthogonales à une même troisième sont parallèles",
              "Deux plans perpendiculaires à un même plan sont parallèles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Perpendiculaires = orthogonales et sécantes. Les trois autres affirmations sont fausses dans l'espace."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q1",
          "type": "mcq",
          "prompt": "Dans le tétraèdre $SABC$, quelle arête est opposée à l'arête $[SA]$ ?",
          "options": [
            "$[SB]$",
            "$[AB]$",
            "$[BC]$",
            "$[AC]$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$[BC]$ n'a ni $S$ ni $A$ comme extrémité."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q2",
          "type": "mcq",
          "prompt": "$SABC$ est un tétraèdre avec $(SA)\\perp(ABC)$. Quelle propriété prouve que $(SA)\\perp(BC)$ ?",
          "options": [
            "La propriété fondamentale, car $(BC)\\subset(ABC)$",
            "Le théorème de Pythagore",
            "La droite des milieux",
            "Deux plans perpendiculaires à un même plan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une droite perpendiculaire à un plan est orthogonale à toute droite de ce plan."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q3",
          "type": "mcq",
          "prompt": "$SABC$ est un tétraèdre avec $(SA)\\perp(ABC)$ et $ABC$ rectangle en $A$. À quel plan la droite $(AC)$ est-elle perpendiculaire ?",
          "options": [
            "$(ABC)$",
            "$(SBC)$",
            "$(SAB)$",
            "$(SAC)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(AC)\\perp(AB)$ et $(AC)\\perp(SA)$, deux droites sécantes en $A$ du plan $(SAB)$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q4",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas ; E, F, G, H au-dessus de A, B, C, D), $(IJ)$ est dans le plan du bas et $(PQ)$ dans le plan horizontal situé à mi-hauteur. Pourquoi $(PQ)$ et $(IJ)$ ne sont-elles pas sécantes ?",
          "options": [
            "Car elles sont orthogonales",
            "Car elles sont dans deux plans parallèles distincts",
            "Car elles sont parallèles",
            "Car $P$ et $Q$ sont des centres de faces"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux plans parallèles distincts n'ont aucun point commun."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q5",
          "type": "mcq",
          "prompt": "Dans le cube ABCDEFGH (face ABCD en bas), $I$ et $J$ sont les milieux de $[BC]$ et $[CD]$, $P$ et $Q$ les centres des faces $AEHD$ et $CDHG$. On a $(PQ)\\parallel(AC)$ et $(IJ)\\parallel(BD)$. Que peut-on conclure ?",
          "options": [
            "$(PQ)\\parallel(IJ)$",
            "$(PQ)\\perp(IJ)$",
            "$(PQ)$ et $(IJ)$ sont sécantes",
            "Rien"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les diagonales $(AC)$ et $(BD)$ du carré sont perpendiculaires."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q6",
          "type": "mcq",
          "prompt": "Dans un cube d'arête $a$, la grande diagonale vaut $EC=a\\sqrt3$, et la distance de $E$ au plan $(AHF)$ est le tiers de $EC$. Que vaut cette distance ?",
          "options": [
            "$a\\sqrt3$",
            "$\\dfrac{a}{3}$",
            "$\\dfrac{\\sqrt3}{3}a$",
            "$\\dfrac{\\sqrt2}{2}a$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{a\\sqrt3}{3}=\\dfrac{\\sqrt3}{3}a$."
        },
        {
          "id": "premiere_d_maths_numerique_l13_orthogonalite_espace_p06_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations sur l'espace est VRAIE ?",
          "options": [
            "Deux droites orthogonales sont perpendiculaires",
            "Deux droites perpendiculaires sont orthogonales",
            "Deux droites orthogonales à une même troisième sont parallèles",
            "Deux plans perpendiculaires à un même plan sont parallèles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Perpendiculaires = orthogonales et sécantes. Les trois autres affirmations sont fausses dans l'espace."
        }
      ]
    }
  ]
};
