import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Vecteurs de l’espace » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Vecteurs de l’espace » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L16_VECTEURS_ESPACE: CurriculumChapter = {
  "id": "premiere_c_maths_geometrie_l16_vecteurs_espace",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 16,
  "title": "Leçon 16 : Vecteurs de l’espace",
  "summary": "La leçon étend aux vecteurs de l’espace les notions du plan : vecteurs colinéaires, orthogonaux et coplanaires, droites et plans de repère, bases et repères de l’espace, coordonnées, puis le produit scalaire, les distances et la recherche de vecteurs orthogonaux.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Vecteurs de l’espace » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01",
      "order": 1,
      "title": "Vecteurs colinéaires, droites et plans : les droites",
      "summary": "Caractériser des vecteurs colinéaires et décrire une droite de l’espace par un point et un vecteur directeur.",
      "conceptExplanation": "L’ensemble des vecteurs de l’espace est noté $W$.\nPropriété 1 : deux vecteurs sont colinéaires si l’un des deux est nul ou s’ils ont la même direction ; deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires si et seulement s’il existe un nombre réel $k$ tel que l’un soit le produit de l’autre par $k$.\nPropriété 2 : $A$ étant un point de l’espace et $\\vec{u}$ un vecteur non nul, l’ensemble des points $M$ tels que $\\overrightarrow{AM} = k\\vec{u}$ avec $k$ réel est la droite passant par $A$ et de vecteur directeur $\\vec{u}$, notée $D(A, \\vec{u})$.\nDans l’exercice de fixation de la leçon, un parallélogramme permet de justifier que deux vecteurs sont colinéaires et de relier l’un à l’autre par le coefficient $\\frac{1}{2}$.",
      "keyRule": "Colinéaire veut dire « même direction » ; une droite de l’espace se code par un point et un vecteur directeur.",
      "formulas": [
        {
          "name": "Colinéarité",
          "formula": "\\vec{u} = k\\vec{v}"
        },
        {
          "name": "Droite de repère",
          "formula": "\\overrightarrow{AM} = k\\vec{u}"
        }
      ],
      "workedExample": {
        "title": "Les vecteurs du parallélogramme de la fixation",
        "statement": "Dans un parallélogramme $ABCD$, $I$ est le milieu du segment d’extrémités $A$ et $B$. Justifie que les vecteurs $\\overrightarrow{AI}$ et $\\overrightarrow{DC}$ sont colinéaires et exprime l’un en fonction de l’autre.",
        "methodSteps": [
          "Les côtés opposés du parallélogramme sont parallèles et $I$ appartient à la droite passant par $A$ et $B$ : les directions sont les mêmes.",
          "Comme $I$ est le milieu, $\\overrightarrow{AI} = \\frac{1}{2}\\overrightarrow{AB}$.",
          "Dans le parallélogramme, $\\overrightarrow{AB} = \\overrightarrow{DC}$."
        ],
        "conclusion": "Les vecteurs sont colinéaires et $\\overrightarrow{AI} = \\frac{1}{2}\\overrightarrow{DC}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Vecteurs colinéaires : la propriété 1",
          "stepTheme": "Vecteurs colinéaires : la propriété 1",
          "stepBadge": "Vecteurs colinéaires : la propriété 1",
          "paragraphText": "• Propriété 1 : deux vecteurs sont colinéaires si l’un des deux est nul ou s’ils ont la même direction.\nL’ensemble des vecteurs du plan est noté $V$ et celui des vecteurs de l’espace est noté $W$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q1",
            "type": "mcq",
            "prompt": "Deux vecteurs de l’espace sont colinéaires si :",
            "options": [
              "Ils sont orthogonaux",
              "Ils ont le même point d’application",
              "Ils ont la même norme",
              "L’un est nul ou ils ont la même direction"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la propriété 1 de la leçon : colinéarité signifie vecteur nul ou directions identiques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La caractérisation par un coefficient réel",
          "stepTheme": "La caractérisation par un coefficient réel",
          "stepBadge": "La caractérisation par un coefficient réel",
          "paragraphText": "• Propriété 1 : deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires si et seulement s’il existe un nombre réel $k$ tel que l’un est le produit de l’autre par $k$.\nC’est la forme utilisée dans les calculs.",
          "formula": {
            "name": "Colinéarité",
            "formula": "\\vec{u} = k\\vec{v}"
          },
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q2",
            "type": "mcq",
            "prompt": "La condition de colinéarité de $\\vec{u}$ et $\\vec{v}$ s’écrit :",
            "options": [
              "Il existe un réel $k$ tel que $\\vec{u} = k\\vec{v}$ ou $\\vec{v} = k\\vec{u}$",
              "$\\vec{u} + \\vec{v} = \\vec{0}$",
              "$\\vec{u} \\cdot \\vec{v} = 0$",
              "$\\|\\vec{u}\\| = \\|\\vec{v}\\|$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La colinéarité équivaut à l’existence d’un coefficient réel $k$ reliant les deux vecteurs."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L’exercice de fixation du parallélogramme",
          "stepTheme": "L’exercice de fixation du parallélogramme",
          "stepBadge": "L’exercice de fixation du parallélogramme",
          "paragraphText": "• Exercice de fixation : $ABCD$ est un parallélogramme et $I$ est le milieu du segment formé par $A$ et $B$.\nLes droites portant les vecteurs $\\overrightarrow{AI}$ et $\\overrightarrow{DC}$ sont parallèles, donc ces vecteurs sont colinéaires.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q3",
            "type": "mcq",
            "prompt": "Dans cet exercice, pourquoi les vecteurs $\\overrightarrow{AI}$ et $\\overrightarrow{DC}$ sont-ils colinéaires ?",
            "options": [
              "Parce qu’ils sont orthogonaux",
              "Parce que $I$ est un sommet du parallélogramme",
              "Parce qu’ils ont la même norme",
              "Parce que leurs directions sont celles de droites parallèles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le parallélogramme donne des droites parallèles, et $I$ est sur la droite passant par $A$ et $B$ : les directions sont les mêmes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Exprimer AI en fonction de DC",
          "stepTheme": "Exprimer AI en fonction de DC",
          "stepBadge": "Exprimer AI en fonction de DC",
          "paragraphText": "• Exercice de fixation : $I$ étant le milieu du segment, le vecteur $\\overrightarrow{AI}$ vaut la moitié du vecteur $\\overrightarrow{AB}$.\nDans un parallélogramme, $\\overrightarrow{AB} = \\overrightarrow{DC}$, donc le coefficient reliant les deux vecteurs est $\\frac{1}{2}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q4",
            "type": "mcq",
            "prompt": "Dans cet exercice, le vecteur $\\overrightarrow{AI}$ s’exprime en fonction de $\\overrightarrow{DC}$ par :",
            "options": [
              "$\\overrightarrow{AI} = \\overrightarrow{DC}$",
              "$\\overrightarrow{AI} = \\frac{1}{2}\\overrightarrow{DC}$",
              "$\\overrightarrow{AI} = -\\frac{1}{2}\\overrightarrow{DC}$",
              "$\\overrightarrow{AI} = 2\\overrightarrow{DC}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On enchaîne : $\\overrightarrow{AI} = \\frac{1}{2}\\overrightarrow{AB}$ et $\\overrightarrow{AB} = \\overrightarrow{DC}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La droite de repère (A, u) : la propriété 2",
          "stepTheme": "La droite de repère (A, u) : la propriété 2",
          "stepBadge": "La droite de repère (A, u) : la propriété 2",
          "paragraphText": "• Propriété 2 : $A$ étant un point de l’espace et $\\vec{u}$ un vecteur non nul, l’ensemble des points $M$ tels que $\\overrightarrow{AM} = k\\vec{u}$ pour un réel $k$ est la droite passant par $A$ et de vecteur directeur $\\vec{u}$.\nOn la note $D(A, \\vec{u})$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q5",
            "type": "mcq",
            "prompt": "L’ensemble des points $M$ tels que $\\overrightarrow{AM} = k\\vec{u}$, avec $k$ réel et $\\vec{u}$ non nul, est :",
            "options": [
              "Un plan passant par $A$",
              "Le segment de milieu $A$",
              "Un cercle de centre $A$",
              "La droite passant par $A$ et de vecteur directeur $\\vec{u}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la propriété 2 : tous ces points forment la droite de repère $(A, \\vec{u})$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Droite, demi-droite et segment selon l’intervalle de k",
          "stepTheme": "Droite, demi-droite et segment selon l’intervalle de k",
          "stepBadge": "Droite, demi-droite et segment selon l’intervalle de k",
          "paragraphText": "• Remarques de la leçon : avec deux points distincts $A$ et $B$, l’ensemble des points $M$ tels que $\\overrightarrow{AM} = k\\overrightarrow{AB}$ est la droite passant par $A$ et $B$ si $k$ parcourt tous les réels.\nSi $k$ est positif ou nul, on obtient la demi-droite d’origine $A$ passant par $B$ ; si $k$ est entre $0$ et $1$, on obtient le segment d’extrémités $A$ et $B$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q6",
            "type": "mcq",
            "prompt": "L’ensemble des points $M$ tels que $\\overrightarrow{AM} = k\\overrightarrow{AB}$ avec $k$ entre $0$ et $1$ est :",
            "options": [
              "La demi-droite d’origine $A$ passant par $B$",
              "Le segment d’extrémités $A$ et $B$",
              "Le plan passant par $A$ et $B$",
              "La droite passant par $A$ et $B$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Limiter $k$ à l’intervalle fermé de $0$ à $1$ ne garde que les points situés entre $A$ et $B$ : c’est le segment."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q1",
          "type": "mcq",
          "prompt": "Deux vecteurs de l’espace sont colinéaires si :",
          "options": [
            "Ils sont orthogonaux",
            "Ils ont le même point d’application",
            "Ils ont la même norme",
            "L’un est nul ou ils ont la même direction"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la propriété 1 de la leçon : colinéarité signifie vecteur nul ou directions identiques."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q2",
          "type": "mcq",
          "prompt": "La condition de colinéarité de $\\vec{u}$ et $\\vec{v}$ s’écrit :",
          "options": [
            "Il existe un réel $k$ tel que $\\vec{u} = k\\vec{v}$ ou $\\vec{v} = k\\vec{u}$",
            "$\\vec{u} + \\vec{v} = \\vec{0}$",
            "$\\vec{u} \\cdot \\vec{v} = 0$",
            "$\\|\\vec{u}\\| = \\|\\vec{v}\\|$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La colinéarité équivaut à l’existence d’un coefficient réel $k$ reliant les deux vecteurs."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q3",
          "type": "mcq",
          "prompt": "Dans cet exercice, pourquoi les vecteurs $\\overrightarrow{AI}$ et $\\overrightarrow{DC}$ sont-ils colinéaires ?",
          "options": [
            "Parce qu’ils sont orthogonaux",
            "Parce que $I$ est un sommet du parallélogramme",
            "Parce qu’ils ont la même norme",
            "Parce que leurs directions sont celles de droites parallèles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le parallélogramme donne des droites parallèles, et $I$ est sur la droite passant par $A$ et $B$ : les directions sont les mêmes."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q4",
          "type": "mcq",
          "prompt": "Dans cet exercice, le vecteur $\\overrightarrow{AI}$ s’exprime en fonction de $\\overrightarrow{DC}$ par :",
          "options": [
            "$\\overrightarrow{AI} = \\overrightarrow{DC}$",
            "$\\overrightarrow{AI} = \\frac{1}{2}\\overrightarrow{DC}$",
            "$\\overrightarrow{AI} = -\\frac{1}{2}\\overrightarrow{DC}$",
            "$\\overrightarrow{AI} = 2\\overrightarrow{DC}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On enchaîne : $\\overrightarrow{AI} = \\frac{1}{2}\\overrightarrow{AB}$ et $\\overrightarrow{AB} = \\overrightarrow{DC}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q5",
          "type": "mcq",
          "prompt": "L’ensemble des points $M$ tels que $\\overrightarrow{AM} = k\\vec{u}$, avec $k$ réel et $\\vec{u}$ non nul, est :",
          "options": [
            "Un plan passant par $A$",
            "Le segment de milieu $A$",
            "Un cercle de centre $A$",
            "La droite passant par $A$ et de vecteur directeur $\\vec{u}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la propriété 2 : tous ces points forment la droite de repère $(A, \\vec{u})$."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p01_q6",
          "type": "mcq",
          "prompt": "L’ensemble des points $M$ tels que $\\overrightarrow{AM} = k\\overrightarrow{AB}$ avec $k$ entre $0$ et $1$ est :",
          "options": [
            "La demi-droite d’origine $A$ passant par $B$",
            "Le segment d’extrémités $A$ et $B$",
            "Le plan passant par $A$ et $B$",
            "La droite passant par $A$ et $B$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Limiter $k$ à l’intervalle fermé de $0$ à $1$ ne garde que les points situés entre $A$ et $B$ : c’est le segment."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02",
      "order": 2,
      "title": "Vecteurs orthogonaux",
      "summary": "Définir des vecteurs orthogonaux et justifier une orthogonalité dans un pavé droit.",
      "conceptExplanation": "Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont orthogonaux si l’un des deux est nul ou si leurs directions sont orthogonales ; on écrit $\\vec{u} \\perp \\vec{v}$.\nDeux vecteurs non nuls sont orthogonaux lorsqu’ils sont vecteurs directeurs respectifs de deux droites orthogonales.\nDans l’exercice de fixation de la leçon, un pavé droit fournit une droite orthogonale au plan de base, donc orthogonale à une droite de cette base, ce qui donne l’orthogonalité des deux vecteurs directeurs.",
      "keyRule": "Pour prouver une orthogonalité, cherche deux droites orthogonales dont les vecteurs sont directeurs.",
      "formulas": [
        {
          "name": "Orthogonalité",
          "formula": "\\vec{u} \\perp \\vec{v}"
        }
      ],
      "workedExample": {
        "title": "L’orthogonalité dans le pavé droit de la fixation",
        "statement": "Dans un pavé droit, un vecteur est directeur d’une droite verticale et un autre d’une droite de la base. Justifie qu’ils sont orthogonaux.",
        "methodSteps": [
          "Le pavé droit donne une droite verticale orthogonale au plan de la base.",
          "Cette droite est donc orthogonale à la droite de la base considérée.",
          "Les deux vecteurs sont directeurs respectifs de ces deux droites."
        ],
        "conclusion": "Les deux vecteurs sont orthogonaux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition des vecteurs orthogonaux",
          "stepTheme": "La définition des vecteurs orthogonaux",
          "stepBadge": "La définition des vecteurs orthogonaux",
          "paragraphText": "• Définition : deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont orthogonaux si l’un des deux est nul ou si leurs directions sont orthogonales.\nOn écrit alors $\\vec{u} \\perp \\vec{v}$.",
          "formula": {
            "name": "Orthogonalité",
            "formula": "\\vec{u} \\perp \\vec{v}"
          },
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q1",
            "type": "mcq",
            "prompt": "Deux vecteurs sont orthogonaux lorsque :",
            "options": [
              "L’un est nul ou leurs directions sont orthogonales",
              "Ils ont la même norme",
              "Ils sont coplanaires",
              "Ils ont la même direction"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition de la leçon, qui prévoit aussi le cas d’un vecteur nul."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’orthogonalité par les droites directrices",
          "stepTheme": "L’orthogonalité par les droites directrices",
          "stepBadge": "L’orthogonalité par les droites directrices",
          "paragraphText": "• Propriété : deux vecteurs non nuls sont orthogonaux lorsqu’ils sont vecteurs directeurs respectifs de deux droites orthogonales.\nC’est cette forme qui sert dans les figures de l’espace, comme les pavés droits.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q2",
            "type": "mcq",
            "prompt": "Pour justifier que deux vecteurs non nuls sont orthogonaux, il suffit de montrer que :",
            "options": [
              "Ils sont directeurs de deux droites parallèles",
              "Ils ont des normes égales",
              "Ils sont directeurs respectifs de deux droites orthogonales",
              "Ils partent du même point"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La propriété ramène l’orthogonalité des vecteurs à celle des droites qui les portent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L’exercice de fixation du pavé droit",
          "stepTheme": "L’exercice de fixation du pavé droit",
          "stepBadge": "L’exercice de fixation du pavé droit",
          "paragraphText": "• Exercice de fixation : dans un pavé droit $ABCDEFGH$, $\\vec{u}$ est un vecteur directeur de la droite passant par $D$ et $H$, et $\\vec{v}$ un vecteur directeur de la droite passant par $B$ et $C$.\nLe pavé droit donne une droite orthogonale au plan de base, donc orthogonale à la droite de la base.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q3",
            "type": "mcq",
            "prompt": "Dans cet exercice, que peut-on conclure pour les vecteurs $\\vec{u}$ et $\\vec{v}$ ?",
            "options": [
              "Ils sont orthogonaux",
              "Ils sont égaux",
              "Ils sont coplanaires avec tout vecteur",
              "Ils sont colinéaires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La droite portant $\\vec{u}$ est orthogonale au plan de base, donc à la droite portant $\\vec{v}$ : les vecteurs sont orthogonaux."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La chaîne de justification dans un pavé droit",
          "stepTheme": "La chaîne de justification dans un pavé droit",
          "stepBadge": "La chaîne de justification dans un pavé droit",
          "paragraphText": "• Méthode de la solution : dans le pavé droit, la droite verticale est orthogonale au plan de la base.\nElle est donc orthogonale à toute droite de ce plan, en particulier à la droite de la base considérée, et l’orthogonalité passe ensuite aux vecteurs directeurs.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q4",
            "type": "mcq",
            "prompt": "Dans un pavé droit, une droite orthogonale au plan de base est :",
            "options": [
              "Parallèle à toutes les droites de la base",
              "Égale à une droite de la base",
              "Orthogonale à toute droite du plan de base",
              "Sans rapport avec les droites de la base"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une droite orthogonale à un plan est orthogonale à toutes les droites de ce plan : c’est le cœur de la justification de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Orthogonalité et perpendicularité dans l’espace",
          "stepTheme": "Orthogonalité et perpendicularité dans l’espace",
          "stepBadge": "Orthogonalité et perpendicularité dans l’espace",
          "paragraphText": "• Piège : dans l’espace, deux droites orthogonales ne sont pas nécessairement sécantes ; on ne parle de droites perpendiculaires que lorsqu’elles sont orthogonales et sécantes.\nL’orthogonalité de deux vecteurs ne demande donc aucun point de rencontre.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q5",
            "type": "mcq",
            "prompt": "Deux vecteurs orthogonaux sont-ils nécessairement portés par des droites sécantes ?",
            "options": [
              "Oui, toujours",
              "Oui, si les vecteurs sont non nuls",
              "Non, l’orthogonalité porte sur les directions, sans rencontre exigée",
              "Non, car les vecteurs orthogonaux n’existent pas dans l’espace"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Dans l’espace, l’orthogonalité concerne les directions : les droites peuvent être orthogonales sans se rencontrer."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le lien avec la base orthonormée du cube",
          "stepTheme": "Le lien avec la base orthonormée du cube",
          "stepBadge": "Le lien avec la base orthonormée du cube",
          "paragraphText": "• Exemple de la leçon : dans un cube de côté $1$, les vecteurs portés par trois arêtes issues d’un même sommet sont deux à deux orthogonaux.\nC’est ce qui permettra de parler de base orthogonale puis de base orthonormée.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q6",
            "type": "mcq",
            "prompt": "Dans un cube, deux vecteurs portés par deux arêtes issues d’un même sommet et perpendiculaires dans leur face commune sont :",
            "options": [
              "Colinéaires",
              "Égaux",
              "De normes toujours différentes",
              "Orthogonaux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les arêtes issues d’un sommet du cube ont des directions deux à deux orthogonales."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q1",
          "type": "mcq",
          "prompt": "Deux vecteurs sont orthogonaux lorsque :",
          "options": [
            "L’un est nul ou leurs directions sont orthogonales",
            "Ils ont la même norme",
            "Ils sont coplanaires",
            "Ils ont la même direction"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition de la leçon, qui prévoit aussi le cas d’un vecteur nul."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q2",
          "type": "mcq",
          "prompt": "Pour justifier que deux vecteurs non nuls sont orthogonaux, il suffit de montrer que :",
          "options": [
            "Ils sont directeurs de deux droites parallèles",
            "Ils ont des normes égales",
            "Ils sont directeurs respectifs de deux droites orthogonales",
            "Ils partent du même point"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La propriété ramène l’orthogonalité des vecteurs à celle des droites qui les portent."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q3",
          "type": "mcq",
          "prompt": "Dans cet exercice, que peut-on conclure pour les vecteurs $\\vec{u}$ et $\\vec{v}$ ?",
          "options": [
            "Ils sont orthogonaux",
            "Ils sont égaux",
            "Ils sont coplanaires avec tout vecteur",
            "Ils sont colinéaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La droite portant $\\vec{u}$ est orthogonale au plan de base, donc à la droite portant $\\vec{v}$ : les vecteurs sont orthogonaux."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q4",
          "type": "mcq",
          "prompt": "Dans un pavé droit, une droite orthogonale au plan de base est :",
          "options": [
            "Parallèle à toutes les droites de la base",
            "Égale à une droite de la base",
            "Orthogonale à toute droite du plan de base",
            "Sans rapport avec les droites de la base"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une droite orthogonale à un plan est orthogonale à toutes les droites de ce plan : c’est le cœur de la justification de la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q5",
          "type": "mcq",
          "prompt": "Deux vecteurs orthogonaux sont-ils nécessairement portés par des droites sécantes ?",
          "options": [
            "Oui, toujours",
            "Oui, si les vecteurs sont non nuls",
            "Non, l’orthogonalité porte sur les directions, sans rencontre exigée",
            "Non, car les vecteurs orthogonaux n’existent pas dans l’espace"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Dans l’espace, l’orthogonalité concerne les directions : les droites peuvent être orthogonales sans se rencontrer."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p02_q6",
          "type": "mcq",
          "prompt": "Dans un cube, deux vecteurs portés par deux arêtes issues d’un même sommet et perpendiculaires dans leur face commune sont :",
          "options": [
            "Colinéaires",
            "Égaux",
            "De normes toujours différentes",
            "Orthogonaux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les arêtes issues d’un sommet du cube ont des directions deux à deux orthogonales."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03",
      "order": 3,
      "title": "Vecteurs coplanaires et plans de l’espace",
      "summary": "Définir un plan par un point et deux vecteurs directeurs, et caractériser trois vecteurs coplanaires.",
      "conceptExplanation": "Définition 1 : $A$ étant un point de l’espace et $\\vec{u}$ et $\\vec{v}$ deux vecteurs non colinéaires, l’ensemble des points $M$ tels que $\\overrightarrow{AM} = \\lambda\\vec{u} + \\mu\\vec{v}$, avec des réels $\\lambda$ et $\\mu$, est un plan de l’espace, appelé plan de repère $(A, \\vec{u}, \\vec{v})$. Un tel vecteur $\\overrightarrow{AM}$ est une combinaison linéaire de $\\vec{u}$ et $\\vec{v}$.\nDéfinition 2 : des vecteurs sont dits coplanaires s’il est possible de construire un représentant de chacun d’eux dans un même plan.\nPropriété : si $\\vec{u}$ et $\\vec{v}$ sont non colinéaires, les vecteurs $\\vec{u}$, $\\vec{v}$ et $\\vec{w}$ sont coplanaires si et seulement si $\\vec{w}$ est une combinaison linéaire de $\\vec{u}$ et de $\\vec{v}$.",
      "keyRule": "Un plan demande deux directions non colinéaires ; vérifier une coplanarité, c’est écrire le troisième vecteur avec les deux autres.",
      "formulas": [
        {
          "name": "Plan de repère",
          "formula": "\\overrightarrow{AM} = \\lambda\\vec{u} + \\mu\\vec{v}"
        },
        {
          "name": "Non-coplanarité",
          "formula": "\\lambda\\vec{u} + \\mu\\vec{v} + \\nu\\vec{w} = \\vec{0}"
        }
      ],
      "workedExample": {
        "title": "Trois vecteurs non coplanaires du cube de la fixation",
        "statement": "Dans un cube, on pose trois vecteurs d’arêtes issues d’un même sommet. Montre que les vecteurs formés par le premier, la somme des deux premiers et la somme des trois sont non coplanaires.",
        "methodSteps": [
          "On écrit une combinaison linéaire nulle de ces trois vecteurs avec des coefficients inconnus.",
          "En regroupant suivant les trois vecteurs d’arêtes, qui sont non coplanaires, chaque coefficient regroupé est nul.",
          "Le système obtenu donne les trois coefficients égaux à $0$."
        ],
        "conclusion": "Le seul triplet possible est le triplet nul : les trois vecteurs sont non coplanaires."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le plan de repère (A, u, v)",
          "stepTheme": "Le plan de repère (A, u, v)",
          "stepBadge": "Le plan de repère (A, u, v)",
          "paragraphText": "• Définition 1 : $A$ étant un point de l’espace et $\\vec{u}$ et $\\vec{v}$ deux vecteurs non colinéaires, l’ensemble des points $M$ tels que $\\overrightarrow{AM}$ est une combinaison linéaire de $\\vec{u}$ et $\\vec{v}$ est un plan.\nC’est le plan passant par $A$ et de vecteurs directeurs $\\vec{u}$ et $\\vec{v}$, noté $P(A, \\vec{u}, \\vec{v})$.",
          "formula": {
            "name": "Plan de repère",
            "formula": "\\overrightarrow{AM} = \\lambda\\vec{u} + \\mu\\vec{v}"
          },
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q1",
            "type": "mcq",
            "prompt": "Un plan de repère $(A, \\vec{u}, \\vec{v})$ exige que les vecteurs $\\vec{u}$ et $\\vec{v}$ soient :",
            "options": [
              "Non colinéaires",
              "Orthogonaux",
              "Unitaires",
              "Colinéaires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux vecteurs colinéaires ne dirigent qu’une droite ; un plan demande deux vecteurs directeurs non colinéaires."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La combinaison linéaire",
          "stepTheme": "La combinaison linéaire",
          "stepBadge": "La combinaison linéaire",
          "paragraphText": "• Remarque de la leçon : un vecteur écrit comme somme d’un multiple de $\\vec{u}$ et d’un multiple de $\\vec{v}$ est une combinaison linéaire des vecteurs $\\vec{u}$ et $\\vec{v}$.\nLes coefficients de la combinaison sont deux nombres réels quelconques.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q2",
            "type": "mcq",
            "prompt": "Un vecteur $\\vec{w}$ est une combinaison linéaire de $\\vec{u}$ et $\\vec{v}$ lorsqu’il existe des réels $\\lambda$ et $\\mu$ tels que :",
            "options": [
              "$\\vec{w} = \\lambda\\vec{u} \\times \\mu\\vec{v}$",
              "$\\vec{w} = \\vec{u} + \\vec{v}$ seulement",
              "$\\vec{w} = \\lambda\\vec{u} + \\mu\\vec{v}$",
              "$\\vec{w} = \\lambda + \\mu$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La combinaison linéaire est la somme des deux vecteurs multipliés par des coefficients réels."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le point I du cube appartient au plan",
          "stepTheme": "Le point I du cube appartient au plan",
          "stepBadge": "Le point I du cube appartient au plan",
          "paragraphText": "• Exemple de la leçon : dans un cube, $I$ est le milieu du segment formé par $B$ et $C$ ; le vecteur $\\overrightarrow{AI}$ se décompose avec les vecteurs des arêtes.\nOn obtient que le point $I$ appartient au plan de repère construit sur $A$ avec deux vecteurs d’arêtes bien choisis.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q3",
            "type": "mcq",
            "prompt": "Dans cet exemple, la décomposition du vecteur $\\overrightarrow{AI}$ montre que :",
            "options": [
              "Le cube est un pavé quelconque",
              "Le point $I$ est l’origine du repère",
              "Le point $I$ appartient au plan de repère indiqué",
              "Les vecteurs du cube sont colinéaires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le vecteur $\\overrightarrow{AI}$ est une combinaison linéaire des deux vecteurs directeurs : le point $I$ est donc dans le plan."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La définition 2 des vecteurs coplanaires",
          "stepTheme": "La définition 2 des vecteurs coplanaires",
          "stepBadge": "La définition 2 des vecteurs coplanaires",
          "paragraphText": "• Définition 2 : les vecteurs $\\vec{u}$, $\\vec{v}$ et $\\vec{w}$ sont dits coplanaires si, en choisissant un point $O$ et les points définis par ces vecteurs, les quatre points obtenus sont coplanaires.\nAutrement dit, on peut construire un représentant de chacun de ces vecteurs dans un même plan.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q4",
            "type": "mcq",
            "prompt": "Trois vecteurs sont coplanaires si :",
            "options": [
              "Ils sont deux à deux orthogonaux",
              "Ils ont le même point de départ imposé",
              "Ils ont la même norme",
              "On peut construire un représentant de chacun d’eux dans un même plan"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la reformulation de la définition 2 donnée par la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les propriétés de la coplanarité",
          "stepTheme": "Les propriétés de la coplanarité",
          "stepBadge": "Les propriétés de la coplanarité",
          "paragraphText": "• Propriétés : si $\\vec{u}$ et $\\vec{v}$ sont non colinéaires, alors $\\vec{u}$, $\\vec{v}$ et $\\vec{w}$ sont coplanaires si et seulement si $\\vec{w}$ est une combinaison linéaire de $\\vec{u}$ et $\\vec{v}$.\nDe façon équivalente, trois vecteurs sont coplanaires si et seulement s’il existe une combinaison linéaire nulle de ces vecteurs dont les coefficients ne sont pas tous nuls.",
          "formula": {
            "name": "Coplanarité",
            "formula": "\\vec{w} = \\lambda\\vec{u} + \\mu\\vec{v}"
          },
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q5",
            "type": "mcq",
            "prompt": "Si $\\vec{u}$ et $\\vec{v}$ sont non colinéaires, les vecteurs $\\vec{u}$, $\\vec{v}$ et $\\vec{w}$ sont coplanaires si et seulement si :",
            "options": [
              "$\\vec{w}$ est orthogonal à $\\vec{u}$",
              "$\\vec{w}$ est colinéaire à $\\vec{u}$",
              "$\\vec{w} = \\vec{0}$",
              "$\\vec{w}$ est une combinaison linéaire de $\\vec{u}$ et de $\\vec{v}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la première propriété de la leçon sur la coplanarité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les remarques à ne pas manquer",
          "stepTheme": "Les remarques à ne pas manquer",
          "stepBadge": "Les remarques à ne pas manquer",
          "paragraphText": "• Remarques de la leçon : deux vecteurs de l’espace sont toujours coplanaires.\nSi deux des trois vecteurs sont colinéaires, alors les trois vecteurs sont nécessairement coplanaires ; et la définition ne dépend pas du choix du point $O$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces affirmations est une remarque de la leçon ?",
            "options": [
              "La coplanarité dépend du point $O$ choisi",
              "Des vecteurs colinéaires empêchent la coplanarité",
              "Trois vecteurs ne sont jamais coplanaires",
              "Deux vecteurs de l’espace sont toujours coplanaires"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Deux vecteurs définissent toujours un plan contenant des représentants de chacun : ils sont toujours coplanaires."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q1",
          "type": "mcq",
          "prompt": "Un plan de repère $(A, \\vec{u}, \\vec{v})$ exige que les vecteurs $\\vec{u}$ et $\\vec{v}$ soient :",
          "options": [
            "Non colinéaires",
            "Orthogonaux",
            "Unitaires",
            "Colinéaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux vecteurs colinéaires ne dirigent qu’une droite ; un plan demande deux vecteurs directeurs non colinéaires."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q2",
          "type": "mcq",
          "prompt": "Un vecteur $\\vec{w}$ est une combinaison linéaire de $\\vec{u}$ et $\\vec{v}$ lorsqu’il existe des réels $\\lambda$ et $\\mu$ tels que :",
          "options": [
            "$\\vec{w} = \\lambda\\vec{u} \\times \\mu\\vec{v}$",
            "$\\vec{w} = \\vec{u} + \\vec{v}$ seulement",
            "$\\vec{w} = \\lambda\\vec{u} + \\mu\\vec{v}$",
            "$\\vec{w} = \\lambda + \\mu$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La combinaison linéaire est la somme des deux vecteurs multipliés par des coefficients réels."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q3",
          "type": "mcq",
          "prompt": "Dans cet exemple, la décomposition du vecteur $\\overrightarrow{AI}$ montre que :",
          "options": [
            "Le cube est un pavé quelconque",
            "Le point $I$ est l’origine du repère",
            "Le point $I$ appartient au plan de repère indiqué",
            "Les vecteurs du cube sont colinéaires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le vecteur $\\overrightarrow{AI}$ est une combinaison linéaire des deux vecteurs directeurs : le point $I$ est donc dans le plan."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q4",
          "type": "mcq",
          "prompt": "Trois vecteurs sont coplanaires si :",
          "options": [
            "Ils sont deux à deux orthogonaux",
            "Ils ont le même point de départ imposé",
            "Ils ont la même norme",
            "On peut construire un représentant de chacun d’eux dans un même plan"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la reformulation de la définition 2 donnée par la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q5",
          "type": "mcq",
          "prompt": "Si $\\vec{u}$ et $\\vec{v}$ sont non colinéaires, les vecteurs $\\vec{u}$, $\\vec{v}$ et $\\vec{w}$ sont coplanaires si et seulement si :",
          "options": [
            "$\\vec{w}$ est orthogonal à $\\vec{u}$",
            "$\\vec{w}$ est colinéaire à $\\vec{u}$",
            "$\\vec{w} = \\vec{0}$",
            "$\\vec{w}$ est une combinaison linéaire de $\\vec{u}$ et de $\\vec{v}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la première propriété de la leçon sur la coplanarité."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p03_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces affirmations est une remarque de la leçon ?",
          "options": [
            "La coplanarité dépend du point $O$ choisi",
            "Des vecteurs colinéaires empêchent la coplanarité",
            "Trois vecteurs ne sont jamais coplanaires",
            "Deux vecteurs de l’espace sont toujours coplanaires"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Deux vecteurs définissent toujours un plan contenant des représentants de chacun : ils sont toujours coplanaires."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04",
      "order": 4,
      "title": "Bases et coordonnées d’un vecteur",
      "summary": "Définir une base de l’espace et calculer avec les coordonnées des vecteurs.",
      "conceptExplanation": "Propriété fondamentale : soient trois vecteurs non coplanaires ; pour tout vecteur $\\vec{u}$ de $W$, il existe un et un seul triplet de réels $(x ; y ; z)$ tels que $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$.\nTout triplet de vecteurs non coplanaires est appelé une base de $W$, et l’unique triplet associé à un vecteur est le triplet de ses coordonnées dans cette base.\nDans une base, la somme de deux vecteurs et le produit d’un vecteur par un réel se calculent coordonnée par coordonnée, comme le montre l’exercice de fixation de la leçon.",
      "keyRule": "Trois vecteurs non coplanaires forment une base : chaque vecteur a alors une seule écriture, dont les coefficients sont ses coordonnées.",
      "formulas": [
        {
          "name": "Coordonnées d’un vecteur",
          "formula": "\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}"
        },
        {
          "name": "Produit par un réel",
          "formula": "(\\lambda x ; \\lambda y ; \\lambda z)"
        }
      ],
      "workedExample": {
        "title": "Les calculs de coordonnées de la fixation",
        "statement": "Dans une base, les coordonnées de $\\vec{u}$ sont $(2 ; -1 ; 3)$ et celles de $\\vec{v}$ sont $(1 ; 2 ; -1)$. Calcule les coordonnées de la somme des deux vecteurs.",
        "methodSteps": [
          "On ajoute les premières coordonnées : $2 + 1 = 3$.",
          "On ajoute les deuxièmes coordonnées : $-1 + 2 = 1$.",
          "On ajoute les troisièmes coordonnées : $3 + (-1) = 2$."
        ],
        "conclusion": "La somme a pour coordonnées le triplet $(3 ; 1 ; 2)$, ce qui correspond à la réponse validée par la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La propriété fondamentale des coordonnées",
          "stepTheme": "La propriété fondamentale des coordonnées",
          "stepBadge": "La propriété fondamentale des coordonnées",
          "paragraphText": "• Propriété fondamentale : soient trois vecteurs non coplanaires. Pour tout vecteur $\\vec{u}$ de $W$, il existe un et un seul triplet de réels tel que $\\vec{u}$ soit la combinaison linéaire de ces trois vecteurs avec ces coefficients.\nC’est cette unicité qui fonde la notion de coordonnées.",
          "formula": {
            "name": "Décomposition",
            "formula": "\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}"
          },
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q1",
            "type": "mcq",
            "prompt": "La propriété fondamentale exige que les trois vecteurs de départ soient :",
            "options": [
              "Colinéaires",
              "Non coplanaires",
              "Orthogonaux",
              "Coplanaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Trois vecteurs non coplanaires suffisent à décomposer tout vecteur de l’espace, d’une unique façon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Base et coordonnées d’un vecteur",
          "stepTheme": "Base et coordonnées d’un vecteur",
          "stepBadge": "Base et coordonnées d’un vecteur",
          "paragraphText": "• Définitions : tout triplet de vecteurs non coplanaires est appelé une base de $W$.\nDans une base, l’unique triplet de réels qui décompose un vecteur est le triplet de ses coordonnées dans cette base.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q2",
            "type": "mcq",
            "prompt": "Une base de l’espace $W$ est :",
            "options": [
              "Un triplet de vecteurs coplanaires",
              "Un triplet de vecteurs non colinéaires deux à deux seulement",
              "Un couple de vecteurs non colinéaires",
              "Un triplet de vecteurs non coplanaires"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, une base de $W$ est formée de trois vecteurs non coplanaires."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Lire des coordonnées dans une base du cube",
          "stepTheme": "Lire des coordonnées dans une base du cube",
          "stepBadge": "Lire des coordonnées dans une base du cube",
          "paragraphText": "• Exemple de la leçon : dans un cube, trois vecteurs d’arêtes bien choisis forment une base.\nUn vecteur écrit comme combinaison de ces trois vecteurs avec les coefficients $3$, $-2$ et $4$ a pour coordonnées le triplet formé de ces trois nombres, dans l’ordre de la base.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q3",
            "type": "mcq",
            "prompt": "Si un vecteur s’écrit comme la combinaison de coefficients $3$, $-2$ et $4$ des vecteurs d’une base, ses coordonnées dans cette base sont :",
            "options": [
              "Le triplet $(3 ; -2 ; 4)$ dans l’ordre de la base",
              "La somme $3 - 2 + 4 = 5$",
              "Le triplet $(4 ; -2 ; 3)$",
              "Le produit des trois coefficients"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les coordonnées sont les coefficients de la décomposition, lus dans l’ordre des vecteurs de la base."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les opérations sur les coordonnées",
          "stepTheme": "Les opérations sur les coordonnées",
          "stepBadge": "Les opérations sur les coordonnées",
          "paragraphText": "• Propriété : dans une base, les coordonnées d’une somme de deux vecteurs s’obtiennent en ajoutant les coordonnées de même rang.\nDe même, les coordonnées du produit d’un vecteur par un réel $\\lambda$ s’obtiennent en multipliant chaque coordonnée par $\\lambda$.",
          "formula": {
            "name": "Somme de vecteurs",
            "formula": "(x + x' ; y + y' ; z + z')"
          },
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q4",
            "type": "mcq",
            "prompt": "Dans une base, les coordonnées de la somme de deux vecteurs s’obtiennent :",
            "options": [
              "En ajoutant les coordonnées de même rang",
              "En ajoutant toutes les coordonnées entre elles",
              "En changeant les signes",
              "En multipliant les coordonnées de même rang"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les calculs sur les vecteurs se font coordonnée par coordonnée dans une base."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’exercice de fixation sur les coordonnées",
          "stepTheme": "L’exercice de fixation sur les coordonnées",
          "stepBadge": "L’exercice de fixation sur les coordonnées",
          "paragraphText": "• Exercice de fixation : dans une base, un vecteur $\\vec{u}$ a pour coordonnées $(2 ; -1 ; 3)$ et un vecteur $\\vec{v}$ a pour coordonnées $(1 ; 2 ; -1)$.\nLe tableau de la leçon donne trois réponses possibles pour chaque calcul ; une seule est juste à chaque fois.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q5",
            "type": "mcq",
            "prompt": "Les coordonnées du vecteur somme de $\\vec{u}$ et de $\\vec{v}$ sont :",
            "options": [
              "Le triplet $(3 ; 1 ; 2)$",
              "Le triplet $(1 ; 1 ; 2)$",
              "Le triplet $(3 ; 1 ; 4)$",
              "Le triplet $(3 ; -1 ; 2)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On ajoute rang par rang : $2 + 1 = 3$, $-1 + 2 = 1$ et $3 + (-1) = 2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Deux autres calculs de la fixation",
          "stepTheme": "Deux autres calculs de la fixation",
          "stepBadge": "Deux autres calculs de la fixation",
          "paragraphText": "• Exercice de fixation : avec les mêmes vecteurs, on calcule aussi une différence avec un double et une somme avec un triple.\nLes résultats validés par la leçon sont le triplet $(0 ; -5 ; 5)$ pour le premier calcul et le triplet $(7 ; -1 ; 8)$ pour le second.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q6",
            "type": "mcq",
            "prompt": "Les coordonnées du vecteur $\\vec{v} + 3\\vec{u}$ sont :",
            "options": [
              "Le triplet $(1 ; -1 ; 8)$",
              "Le triplet $(7 ; 0 ; 8)$",
              "Le triplet $(7 ; -1 ; 8)$",
              "Le triplet $(7 ; 2 ; 4)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $1 + 3 \\times 2 = 7$, $2 + 3 \\times (-1) = -1$ et $-1 + 3 \\times 3 = 8$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q1",
          "type": "mcq",
          "prompt": "La propriété fondamentale exige que les trois vecteurs de départ soient :",
          "options": [
            "Colinéaires",
            "Non coplanaires",
            "Orthogonaux",
            "Coplanaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Trois vecteurs non coplanaires suffisent à décomposer tout vecteur de l’espace, d’une unique façon."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q2",
          "type": "mcq",
          "prompt": "Une base de l’espace $W$ est :",
          "options": [
            "Un triplet de vecteurs coplanaires",
            "Un triplet de vecteurs non colinéaires deux à deux seulement",
            "Un couple de vecteurs non colinéaires",
            "Un triplet de vecteurs non coplanaires"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, une base de $W$ est formée de trois vecteurs non coplanaires."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q3",
          "type": "mcq",
          "prompt": "Si un vecteur s’écrit comme la combinaison de coefficients $3$, $-2$ et $4$ des vecteurs d’une base, ses coordonnées dans cette base sont :",
          "options": [
            "Le triplet $(3 ; -2 ; 4)$ dans l’ordre de la base",
            "La somme $3 - 2 + 4 = 5$",
            "Le triplet $(4 ; -2 ; 3)$",
            "Le produit des trois coefficients"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les coordonnées sont les coefficients de la décomposition, lus dans l’ordre des vecteurs de la base."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q4",
          "type": "mcq",
          "prompt": "Dans une base, les coordonnées de la somme de deux vecteurs s’obtiennent :",
          "options": [
            "En ajoutant les coordonnées de même rang",
            "En ajoutant toutes les coordonnées entre elles",
            "En changeant les signes",
            "En multipliant les coordonnées de même rang"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les calculs sur les vecteurs se font coordonnée par coordonnée dans une base."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q5",
          "type": "mcq",
          "prompt": "Les coordonnées du vecteur somme de $\\vec{u}$ et de $\\vec{v}$ sont :",
          "options": [
            "Le triplet $(3 ; 1 ; 2)$",
            "Le triplet $(1 ; 1 ; 2)$",
            "Le triplet $(3 ; 1 ; 4)$",
            "Le triplet $(3 ; -1 ; 2)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On ajoute rang par rang : $2 + 1 = 3$, $-1 + 2 = 1$ et $3 + (-1) = 2$."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p04_q6",
          "type": "mcq",
          "prompt": "Les coordonnées du vecteur $\\vec{v} + 3\\vec{u}$ sont :",
          "options": [
            "Le triplet $(1 ; -1 ; 8)$",
            "Le triplet $(7 ; 0 ; 8)$",
            "Le triplet $(7 ; -1 ; 8)$",
            "Le triplet $(7 ; 2 ; 4)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $1 + 3 \\times 2 = 7$, $2 + 3 \\times (-1) = -1$ et $-1 + 3 \\times 3 = 8$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05",
      "order": 5,
      "title": "Repères de l’espace",
      "summary": "Définir un repère de l’espace, les coordonnées d’un point, et les bases orthogonales ou orthonormées.",
      "conceptExplanation": "Une base est orthogonale lorsqu’elle est constituée de trois vecteurs deux à deux orthogonaux ; elle est orthonormée lorsqu’elle est orthogonale et constituée de trois vecteurs unitaires.\nOn appelle repère de l’espace un quadruplet formé d’un point $O$, origine du repère, et d’une base de $W$. Les coordonnées d’un point $M$ sont celles du vecteur $\\overrightarrow{OM}$ : abscisse, ordonnée et cote.\nLe repère est dit orthogonal ou orthonormé lorsque sa base l’est, et les coordonnées d’un vecteur $\\overrightarrow{AB}$ sont les différences des coordonnées de $B$ et de $A$.",
      "keyRule": "Un repère, c’est une origine plus une base ; les coordonnées d’un point sont celles de son vecteur position.",
      "formulas": [
        {
          "name": "Coordonnées d’un point",
          "formula": "\\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}"
        },
        {
          "name": "Coordonnées de AB",
          "formula": "(x_B - x_A ; y_B - y_A ; z_B - z_A)"
        }
      ],
      "workedExample": {
        "title": "Les bases du cube de côté 1",
        "statement": "Dans un cube de côté $1$, justifie que le triplet des trois vecteurs d’arêtes issues d’un même sommet est une base orthonormée.",
        "methodSteps": [
          "Les trois arêtes issues d’un sommet ont des directions deux à deux orthogonales.",
          "Chaque vecteur d’arête a pour norme le côté du cube, c’est-à-dire $1$.",
          "La base est donc orthogonale et formée de vecteurs unitaires."
        ],
        "conclusion": "Ce triplet est une base orthonormée de l’espace."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Base orthogonale et base orthonormée",
          "stepTheme": "Base orthogonale et base orthonormée",
          "stepBadge": "Base orthogonale et base orthonormée",
          "paragraphText": "• Définitions : une base est orthogonale lorsqu’elle est constituée de trois vecteurs deux à deux orthogonaux.\nUne base est orthonormée lorsqu’elle est orthogonale et constituée de trois vecteurs unitaires, c’est-à-dire de norme $1$.",
          "formula": {
            "name": "Base orthonormée",
            "formula": "\\|\\vec{i}\\| = \\|\\vec{j}\\| = \\|\\vec{k}\\| = 1"
          },
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q1",
            "type": "mcq",
            "prompt": "Une base orthonormée est une base :",
            "options": [
              "Quelconque de l’espace",
              "Orthogonale et formée de trois vecteurs unitaires",
              "Formée de trois vecteurs colinéaires",
              "Orthogonale avec des vecteurs de normes différentes de $1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’orthonormalité ajoute à l’orthogonalité la condition que chaque vecteur soit de norme $1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Les bases du cube de côté 1",
          "stepTheme": "Les bases du cube de côté 1",
          "stepBadge": "Les bases du cube de côté 1",
          "paragraphText": "• Exemple de la leçon : dans un cube de côté $1$, le triplet formé par un demi-vecteur d’arête et deux vecteurs d’arêtes perpendiculaires est une base orthogonale, mais pas orthonormée.\nEn revanche, le triplet des trois vecteurs d’arêtes issues d’un même sommet est une base orthonormée, car chaque vecteur est de norme $1$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q2",
            "type": "mcq",
            "prompt": "Pourquoi la base formée avec un demi-vecteur d’arête n’est-elle pas orthonormée ?",
            "options": [
              "Parce que le cube n’a pas de base",
              "Parce que ses vecteurs sont coplanaires",
              "Parce qu’elle n’est pas orthogonale",
              "Parce que le demi-vecteur n’est pas unitaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le demi-vecteur est de norme $\\frac{1}{2}$, différente de $1$ : l’orthogonalité est là, pas l’unitarité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le repère de l’espace",
          "stepTheme": "Le repère de l’espace",
          "stepBadge": "Le repère de l’espace",
          "paragraphText": "• Définition : on appelle repère de l’espace un quadruplet formé d’un point $O$ et d’une base de $W$.\nLe point $O$ est l’origine du repère ; les coordonnées d’un point $M$ sont celles du vecteur $\\overrightarrow{OM}$ dans la base.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q3",
            "type": "mcq",
            "prompt": "Un repère de l’espace est formé :",
            "options": [
              "De trois points seulement",
              "D’un point origine et d’une base de vecteurs",
              "D’un plan et d’une droite",
              "De quatre points quelconques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le repère associe un point origine à une base : c’est un quadruplet formé du point et des trois vecteurs."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Abscisse, ordonnée et cote",
          "stepTheme": "Abscisse, ordonnée et cote",
          "stepBadge": "Abscisse, ordonnée et cote",
          "paragraphText": "• Vocabulaire : dans un repère, les coordonnées d’un point $M$ sont l’abscisse, l’ordonnée et la cote de $M$.\nLes droites de repère passant par l’origine dans les directions de la base sont les axes de coordonnées ; le repère est orthogonal ou orthonormé selon que sa base l’est.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q4",
            "type": "mcq",
            "prompt": "Dans l’espace, la troisième coordonnée d’un point s’appelle :",
            "options": [
              "L’abscisse",
              "L’ordonnée",
              "La cote",
              "La norme"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Après l’abscisse et l’ordonnée, la troisième coordonnée d’un point de l’espace est sa cote."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les coordonnées du point K de la leçon",
          "stepTheme": "Les coordonnées du point K de la leçon",
          "stepBadge": "Les coordonnées du point K de la leçon",
          "paragraphText": "• Exemple de la leçon : dans un cube de côté $1$, le point $K$, symétrique d’un sommet par rapport à un autre, se décompose dans un repère du cube.\nDans le repère indiqué par la leçon, construit sur les vecteurs des arêtes dans un ordre précisé, le point $K$ a pour coordonnées le triplet $(1 ; 1 ; -1)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q5",
            "type": "mcq",
            "prompt": "Dans ce repère de la leçon, les coordonnées de $K$ sont :",
            "options": [
              "Le triplet $(1 ; 1 ; -1)$",
              "Le triplet $(1 ; -1 ; 1)$",
              "Le triplet $(-1 ; 1 ; 1)$",
              "Le triplet $(0 ; 1 ; 1)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La décomposition du vecteur position de $K$ donne les coefficients $1$, $1$ et $-1$ dans l’ordre du repère choisi."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Les coordonnées d’un vecteur AB dans un repère",
          "stepTheme": "Les coordonnées d’un vecteur AB dans un repère",
          "stepBadge": "Les coordonnées d’un vecteur AB dans un repère",
          "paragraphText": "• Calculs dans un repère : les règles de calcul sur les vecteurs de l’espace sont analogues à celles du plan.\nLes coordonnées du vecteur $\\overrightarrow{AB}$ s’obtiennent en retranchant, rang par rang, les coordonnées de $A$ de celles de $B$.",
          "formula": {
            "name": "Coordonnées de AB",
            "formula": "(x_B - x_A ; y_B - y_A ; z_B - z_A)"
          },
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q6",
            "type": "mcq",
            "prompt": "Les coordonnées du vecteur $\\overrightarrow{AB}$ sont :",
            "options": [
              "Les différences des coordonnées de $B$ et de celles de $A$, rang par rang",
              "Les produits des coordonnées",
              "Les coordonnées du milieu du segment",
              "Les sommes des coordonnées de $A$ et de $B$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme dans le plan, on fait la différence des coordonnées de l’extrémité et de l’origine du vecteur."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q1",
          "type": "mcq",
          "prompt": "Une base orthonormée est une base :",
          "options": [
            "Quelconque de l’espace",
            "Orthogonale et formée de trois vecteurs unitaires",
            "Formée de trois vecteurs colinéaires",
            "Orthogonale avec des vecteurs de normes différentes de $1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’orthonormalité ajoute à l’orthogonalité la condition que chaque vecteur soit de norme $1$."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q2",
          "type": "mcq",
          "prompt": "Pourquoi la base formée avec un demi-vecteur d’arête n’est-elle pas orthonormée ?",
          "options": [
            "Parce que le cube n’a pas de base",
            "Parce que ses vecteurs sont coplanaires",
            "Parce qu’elle n’est pas orthogonale",
            "Parce que le demi-vecteur n’est pas unitaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le demi-vecteur est de norme $\\frac{1}{2}$, différente de $1$ : l’orthogonalité est là, pas l’unitarité."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q3",
          "type": "mcq",
          "prompt": "Un repère de l’espace est formé :",
          "options": [
            "De trois points seulement",
            "D’un point origine et d’une base de vecteurs",
            "D’un plan et d’une droite",
            "De quatre points quelconques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le repère associe un point origine à une base : c’est un quadruplet formé du point et des trois vecteurs."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q4",
          "type": "mcq",
          "prompt": "Dans l’espace, la troisième coordonnée d’un point s’appelle :",
          "options": [
            "L’abscisse",
            "L’ordonnée",
            "La cote",
            "La norme"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Après l’abscisse et l’ordonnée, la troisième coordonnée d’un point de l’espace est sa cote."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q5",
          "type": "mcq",
          "prompt": "Dans ce repère de la leçon, les coordonnées de $K$ sont :",
          "options": [
            "Le triplet $(1 ; 1 ; -1)$",
            "Le triplet $(1 ; -1 ; 1)$",
            "Le triplet $(-1 ; 1 ; 1)$",
            "Le triplet $(0 ; 1 ; 1)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La décomposition du vecteur position de $K$ donne les coefficients $1$, $1$ et $-1$ dans l’ordre du repère choisi."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p05_q6",
          "type": "mcq",
          "prompt": "Les coordonnées du vecteur $\\overrightarrow{AB}$ sont :",
          "options": [
            "Les différences des coordonnées de $B$ et de celles de $A$, rang par rang",
            "Les produits des coordonnées",
            "Les coordonnées du milieu du segment",
            "Les sommes des coordonnées de $A$ et de $B$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme dans le plan, on fait la différence des coordonnées de l’extrémité et de l’origine du vecteur."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06",
      "order": 6,
      "title": "Produit scalaire dans l’espace : définition et coordonnées",
      "summary": "Définir le produit scalaire, calculer dans un tétraèdre régulier et dans une base orthonormée.",
      "conceptExplanation": "On appelle produit scalaire des vecteurs $\\vec{u}$ et $\\vec{v}$ le nombre réel noté $\\vec{u} \\cdot \\vec{v}$, défini par $0$ si l’un des vecteurs est nul, et sinon par le produit des normes et du cosinus de l’angle formé par les deux vecteurs. On a aussi une expression à l’aide des normes de $\\vec{u}$, de $\\vec{v}$ et de leur somme.\nDans une base orthonormée, le produit scalaire est la somme des produits des coordonnées de même rang, et la norme est la racine carrée de la somme des carrés des coordonnées.\nDans l’exercice de fixation de la leçon, un tétraèdre régulier de côté $a$ donne des produits scalaires égaux à $\\frac{a^2}{2}$, $-\\frac{a^2}{2}$ ou $0$ selon les arêtes choisies.",
      "keyRule": "Le produit scalaire est un nombre : positif, négatif ou nul selon l’angle, et nul exactement quand les directions sont orthogonales.",
      "formulas": [
        {
          "name": "Produit scalaire",
          "formula": "\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'"
        },
        {
          "name": "Norme",
          "formula": "\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}"
        }
      ],
      "workedExample": {
        "title": "Le produit scalaire de la fixation en coordonnées",
        "statement": "Dans une base orthonormée, calcule le produit scalaire des vecteurs de coordonnées $(1 ; 2 ; -3)$ et $(2 ; -1 ; 2)$.",
        "methodSteps": [
          "On multiplie les coordonnées de même rang : $2$, $-2$ et $-6$.",
          "On additionne ces trois produits."
        ],
        "conclusion": "Le produit scalaire vaut $-6$, et la norme du second vecteur vaut $3$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition du produit scalaire",
          "stepTheme": "La définition du produit scalaire",
          "stepBadge": "La définition du produit scalaire",
          "paragraphText": "• Définition : le produit scalaire de deux vecteurs $\\vec{u}$ et $\\vec{v}$ est le nombre réel noté $\\vec{u} \\cdot \\vec{v}$.\nIl vaut $0$ si l’un des vecteurs est nul ; sinon, il vaut le produit des normes par le cosinus de l’angle formé par les deux vecteurs.",
          "formula": {
            "name": "Produit scalaire",
            "formula": "\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\widehat{BAC})"
          },
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q1",
            "type": "mcq",
            "prompt": "Le produit scalaire de deux vecteurs est :",
            "options": [
              "Un nombre réel",
              "Un point de l’espace",
              "Une base de l’espace",
              "Un vecteur de l’espace"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, le produit scalaire est un nombre réel, calculé à partir des normes et de l’angle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’autre expression du produit scalaire",
          "stepTheme": "L’autre expression du produit scalaire",
          "stepBadge": "L’autre expression du produit scalaire",
          "paragraphText": "• Propriété : le produit scalaire s’exprime aussi à l’aide des normes du premier vecteur, du second et de leur somme.\nCette expression est utile quand on connaît les longueurs des côtés d’un triangle formé par les vecteurs.",
          "formula": {
            "name": "Produit scalaire et normes",
            "formula": "\\vec{u} \\cdot \\vec{v} = \\frac{1}{2}\\left(\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2\\right)"
          },
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q2",
            "type": "mcq",
            "prompt": "L’expression du produit scalaire à l’aide des normes fait intervenir :",
            "options": [
              "Uniquement la norme de la somme",
              "La norme de la somme et les normes des deux vecteurs",
              "Le produit des trois normes",
              "La différence des deux vecteurs seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La formule combine la norme de la somme et les normes des deux vecteurs de départ."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les produits scalaires du tétraèdre régulier",
          "stepTheme": "Les produits scalaires du tétraèdre régulier",
          "stepBadge": "Les produits scalaires du tétraèdre régulier",
          "paragraphText": "• Exercice de fixation : dans un tétraèdre régulier de côté $a$, toutes les faces sont des triangles équilatéraux.\nLe produit scalaire de deux vecteurs portés par deux arêtes issues du même sommet vaut donc la moitié du carré du côté.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q3",
            "type": "mcq",
            "prompt": "Dans ce tétraèdre, le produit scalaire des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ vaut :",
            "options": [
              "$a^2$",
              "$0$",
              "$\\frac{a^2}{2}$",
              "$-\\frac{a^2}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’angle vaut $60$ degrés, de cosinus $\\frac{1}{2}$ : le produit vaut $a \\times a \\times \\frac{1}{2} = \\frac{a^2}{2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Un produit scalaire négatif et un produit nul",
          "stepTheme": "Un produit scalaire négatif et un produit nul",
          "stepBadge": "Un produit scalaire négatif et un produit nul",
          "paragraphText": "• Exercice de fixation : dans le même tétraèdre, le produit scalaire des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{BC}$ est négatif, car l’angle correspondant est obtus.\nEt le produit scalaire des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{CD}$ est nul : ces directions sont orthogonales.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q4",
            "type": "mcq",
            "prompt": "Dans ce tétraèdre, le produit scalaire des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{CD}$ vaut :",
            "options": [
              "$\\frac{a^2}{2}$",
              "$-\\frac{a^2}{2}$",
              "$a^2$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le calcul de la leçon donne un produit nul, ce qui traduit l’orthogonalité des deux directions."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le produit scalaire en coordonnées orthonormées",
          "stepTheme": "Le produit scalaire en coordonnées orthonormées",
          "stepBadge": "Le produit scalaire en coordonnées orthonormées",
          "paragraphText": "• Propriétés : dans une base orthonormée, le produit scalaire de deux vecteurs est la somme des produits de leurs coordonnées de même rang.\nLa norme d’un vecteur est la racine carrée de la somme des carrés de ses coordonnées.",
          "formula": {
            "name": "Produit scalaire en coordonnées",
            "formula": "\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'"
          },
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q5",
            "type": "mcq",
            "prompt": "Dans une base orthonormée, le produit scalaire de deux vecteurs se calcule :",
            "options": [
              "En ajoutant toutes leurs coordonnées",
              "En sommant les produits des coordonnées de même rang",
              "En multipliant leurs normes seulement",
              "En sommant les carrés des coordonnées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la propriété de la leçon : un produit par rang, puis une somme."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le calcul de la fixation en coordonnées",
          "stepTheme": "Le calcul de la fixation en coordonnées",
          "stepBadge": "Le calcul de la fixation en coordonnées",
          "paragraphText": "• Exercice de fixation : dans une base orthonormée, un vecteur a pour coordonnées $(1 ; 2 ; -3)$ et un autre $(2 ; -1 ; 2)$.\nLeur produit scalaire se calcule rang par rang, et la norme du second vaut $3$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q6",
            "type": "mcq",
            "prompt": "Le produit scalaire de ces deux vecteurs vaut :",
            "options": [
              "$6$",
              "$-6$",
              "$0$",
              "$-2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $1 \\times 2 + 2 \\times (-1) + (-3) \\times 2 = 2 - 2 - 6 = -6$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q1",
          "type": "mcq",
          "prompt": "Le produit scalaire de deux vecteurs est :",
          "options": [
            "Un nombre réel",
            "Un point de l’espace",
            "Une base de l’espace",
            "Un vecteur de l’espace"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, le produit scalaire est un nombre réel, calculé à partir des normes et de l’angle."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q2",
          "type": "mcq",
          "prompt": "L’expression du produit scalaire à l’aide des normes fait intervenir :",
          "options": [
            "Uniquement la norme de la somme",
            "La norme de la somme et les normes des deux vecteurs",
            "Le produit des trois normes",
            "La différence des deux vecteurs seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La formule combine la norme de la somme et les normes des deux vecteurs de départ."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q3",
          "type": "mcq",
          "prompt": "Dans ce tétraèdre, le produit scalaire des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ vaut :",
          "options": [
            "$a^2$",
            "$0$",
            "$\\frac{a^2}{2}$",
            "$-\\frac{a^2}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’angle vaut $60$ degrés, de cosinus $\\frac{1}{2}$ : le produit vaut $a \\times a \\times \\frac{1}{2} = \\frac{a^2}{2}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q4",
          "type": "mcq",
          "prompt": "Dans ce tétraèdre, le produit scalaire des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{CD}$ vaut :",
          "options": [
            "$\\frac{a^2}{2}$",
            "$-\\frac{a^2}{2}$",
            "$a^2$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le calcul de la leçon donne un produit nul, ce qui traduit l’orthogonalité des deux directions."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q5",
          "type": "mcq",
          "prompt": "Dans une base orthonormée, le produit scalaire de deux vecteurs se calcule :",
          "options": [
            "En ajoutant toutes leurs coordonnées",
            "En sommant les produits des coordonnées de même rang",
            "En multipliant leurs normes seulement",
            "En sommant les carrés des coordonnées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la propriété de la leçon : un produit par rang, puis une somme."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p06_q6",
          "type": "mcq",
          "prompt": "Le produit scalaire de ces deux vecteurs vaut :",
          "options": [
            "$6$",
            "$-6$",
            "$0$",
            "$-2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $1 \\times 2 + 2 \\times (-1) + (-3) \\times 2 = 2 - 2 - 6 = -6$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07",
      "order": 7,
      "title": "Distances, orthogonalité et applications",
      "summary": "Calculer une distance dans un repère orthonormé, tester une orthogonalité et déterminer un vecteur orthogonal à deux vecteurs.",
      "conceptExplanation": "Conséquence du produit scalaire : dans un repère orthonormé, la distance entre deux points $A$ et $B$ est la racine carrée de la somme des carrés des différences de leurs coordonnées. Dans l’exercice de fixation de la leçon, cette distance vaut la racine carrée de $10$.\nUn produit scalaire nul caractérise des vecteurs orthogonaux : dans l’exercice 8, deux vecteurs donnés sont orthogonaux, et la recherche d’un vecteur orthogonal à deux vecteurs se ramène à un système de deux équations.\nLa situation complexe de la leçon applique cette méthode dans un cube : les vecteurs orthogonaux à deux vecteurs diagonaux sont exactement ceux dont les coordonnées sont proportionnelles au triplet formé d’un réel, de son opposé et de son double.",
      "keyRule": "Distance égale norme du vecteur AB ; orthogonalité égale produit scalaire nul : deux réflexes pour tous les exercices de ce chapitre.",
      "formulas": [
        {
          "name": "Distance AB",
          "formula": "AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}"
        },
        {
          "name": "Orthogonalité",
          "formula": "\\vec{u} \\cdot \\vec{v} = 0"
        }
      ],
      "workedExample": {
        "title": "Un vecteur orthogonal à deux vecteurs (exercice 8)",
        "statement": "Détermine un vecteur non nul orthogonal aux vecteurs de coordonnées $(2 ; 1 ; 0)$ et $(-1 ; 2 ; 4)$.",
        "methodSteps": [
          "On note $(x ; y ; z)$ les coordonnées du vecteur cherché et on impose les deux produits scalaires nuls.",
          "La première équation donne $y$ opposé du double de $x$ ; la seconde donne alors $z$ en fonction de $x$.",
          "Un choix simple de $x$ fournit un triplet de coordonnées."
        ],
        "conclusion": "Le vecteur de coordonnées $(1 ; -2 ; \\frac{5}{4})$ convient : il est orthogonal aux deux vecteurs."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La distance entre deux points",
          "stepTheme": "La distance entre deux points",
          "stepBadge": "La distance entre deux points",
          "paragraphText": "• Conséquence : dans un repère orthonormé, la distance entre deux points $A$ et $B$ est la racine carrée de la somme des carrés des différences de leurs coordonnées.\nC’est la norme du vecteur $\\overrightarrow{AB}$.",
          "formula": {
            "name": "Distance AB",
            "formula": "AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}"
          },
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07_q1",
            "type": "mcq",
            "prompt": "Dans un repère orthonormé, la distance $AB$ est :",
            "options": [
              "La somme des différences des coordonnées",
              "La racine carrée de la somme des carrés des différences des coordonnées",
              "Le produit des différences des coordonnées",
              "La norme du vecteur $\\overrightarrow{OA}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La distance est la norme du vecteur $\\overrightarrow{AB}$, calculée avec ses coordonnées."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La distance de la fixation",
          "stepTheme": "La distance de la fixation",
          "stepBadge": "La distance de la fixation",
          "paragraphText": "• Exercice de fixation : les points de coordonnées $(2 ; 3 ; 1)$ et $(-1 ; 2 ; 1)$ donnent un vecteur de coordonnées $(-3 ; -1 ; 0)$.\nLa somme des carrés vaut $10$, donc la distance est la racine carrée de $10$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07_q2",
            "type": "mcq",
            "prompt": "La distance entre ces deux points vaut :",
            "options": [
              "$10$",
              "$\\sqrt{10}$",
              "$4$",
              "$\\sqrt{12}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule la racine carrée de $9 + 1 + 0$, c’est-à-dire la racine carrée de $10$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Les produits scalaires de l’exercice 7",
          "stepTheme": "Les produits scalaires de l’exercice 7",
          "stepBadge": "Les produits scalaires de l’exercice 7",
          "paragraphText": "• Exercice 7 de la leçon : avec trois points de l’espace, on calcule les coordonnées de trois vecteurs puis leurs produits scalaires deux à deux.\nLes résultats de la leçon sont $-9$ pour le premier produit, $36$ pour le deuxième et $-26$ pour le troisième.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07_q3",
            "type": "mcq",
            "prompt": "Dans l’exercice 7, le produit scalaire des deux premiers vecteurs calculés vaut :",
            "options": [
              "$36$",
              "$-26$",
              "$-9$",
              "$9$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé de la leçon donne $-9$ pour ce premier produit scalaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Tester une orthogonalité par le produit scalaire",
          "stepTheme": "Tester une orthogonalité par le produit scalaire",
          "stepBadge": "Tester une orthogonalité par le produit scalaire",
          "paragraphText": "• Exercice 8 de la leçon : deux vecteurs de coordonnées $(2 ; 1 ; 0)$ et $(-1 ; 2 ; 4)$ ont des normes respectives la racine carrée de $5$ et la racine carrée de $21$.\nLeur produit scalaire vaut $0$ : c’est le test qui prouve leur orthogonalité.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07_q4",
            "type": "mcq",
            "prompt": "Le produit scalaire de ces deux vecteurs vaut :",
            "options": [
              "$5$, donc ils sont colinéaires",
              "$-4$, donc ils sont opposés",
              "$21$, donc ils sont égaux",
              "$0$, donc ils sont orthogonaux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $2 \\times (-1) + 1 \\times 2 + 0 \\times 4 = 0$ : un produit nul signifie des vecteurs orthogonaux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Chercher un vecteur orthogonal à deux vecteurs",
          "stepTheme": "Chercher un vecteur orthogonal à deux vecteurs",
          "stepBadge": "Chercher un vecteur orthogonal à deux vecteurs",
          "paragraphText": "• Exercice 8 de la leçon : pour trouver un vecteur non nul orthogonal à deux vecteurs donnés, on écrit ses coordonnées inconnues et on impose les deux produits scalaires nuls.\nOn obtient un système de deux équations ; un choix de la première coordonnée donne par exemple le vecteur de coordonnées $(1 ; -2 ; \\frac{5}{4})$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07_q5",
            "type": "mcq",
            "prompt": "Le vecteur de coordonnées $(1 ; -2 ; \\frac{5}{4})$ de l’exercice 8 est :",
            "options": [
              "Colinéaire aux deux vecteurs donnés",
              "Égal à leur somme",
              "Orthogonal à chacun des deux vecteurs donnés",
              "De norme nulle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il a été construit pour annuler les deux produits scalaires : il est orthogonal aux deux vecteurs."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La situation complexe : départager les deux élèves",
          "stepTheme": "La situation complexe : départager les deux élèves",
          "stepBadge": "La situation complexe : départager les deux élèves",
          "paragraphText": "• Situation complexe : dans un cube, on cherche les vecteurs orthogonaux à deux vecteurs diagonaux donnés, dont les coordonnées dans une base orthonormée du cube sont connues.\nLes deux conditions d’orthogonalité donnent deux équations ; un vecteur cherché a ses coordonnées proportionnelles au triplet formé de $\\alpha$, de $-\\alpha$ et de $2\\alpha$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07_q6",
            "type": "mcq",
            "prompt": "Dans la situation complexe, la forme des vecteurs orthogonaux aux deux vecteurs donnés est :",
            "options": [
              "Proportionnelle au triplet $(\\alpha ; \\alpha ; \\alpha)$",
              "Toujours le vecteur nul",
              "Proportionnelle au triplet $(\\alpha ; 2\\alpha ; -\\alpha)$",
              "Proportionnelle au triplet $(\\alpha ; -\\alpha ; 2\\alpha)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les équations donnent la deuxième coordonnée opposée de la première et la troisième double de la première : c’est la forme annoncée par le premier élève, qui a raison."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07_q1",
          "type": "mcq",
          "prompt": "Dans un repère orthonormé, la distance $AB$ est :",
          "options": [
            "La somme des différences des coordonnées",
            "La racine carrée de la somme des carrés des différences des coordonnées",
            "Le produit des différences des coordonnées",
            "La norme du vecteur $\\overrightarrow{OA}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La distance est la norme du vecteur $\\overrightarrow{AB}$, calculée avec ses coordonnées."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07_q2",
          "type": "mcq",
          "prompt": "La distance entre ces deux points vaut :",
          "options": [
            "$10$",
            "$\\sqrt{10}$",
            "$4$",
            "$\\sqrt{12}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule la racine carrée de $9 + 1 + 0$, c’est-à-dire la racine carrée de $10$."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07_q3",
          "type": "mcq",
          "prompt": "Dans l’exercice 7, le produit scalaire des deux premiers vecteurs calculés vaut :",
          "options": [
            "$36$",
            "$-26$",
            "$-9$",
            "$9$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé de la leçon donne $-9$ pour ce premier produit scalaire."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07_q4",
          "type": "mcq",
          "prompt": "Le produit scalaire de ces deux vecteurs vaut :",
          "options": [
            "$5$, donc ils sont colinéaires",
            "$-4$, donc ils sont opposés",
            "$21$, donc ils sont égaux",
            "$0$, donc ils sont orthogonaux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $2 \\times (-1) + 1 \\times 2 + 0 \\times 4 = 0$ : un produit nul signifie des vecteurs orthogonaux."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07_q5",
          "type": "mcq",
          "prompt": "Le vecteur de coordonnées $(1 ; -2 ; \\frac{5}{4})$ de l’exercice 8 est :",
          "options": [
            "Colinéaire aux deux vecteurs donnés",
            "Égal à leur somme",
            "Orthogonal à chacun des deux vecteurs donnés",
            "De norme nulle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il a été construit pour annuler les deux produits scalaires : il est orthogonal aux deux vecteurs."
        },
        {
          "id": "premiere_c_maths_geometrie_l16_vecteurs_espace_p07_q6",
          "type": "mcq",
          "prompt": "Dans la situation complexe, la forme des vecteurs orthogonaux aux deux vecteurs donnés est :",
          "options": [
            "Proportionnelle au triplet $(\\alpha ; \\alpha ; \\alpha)$",
            "Toujours le vecteur nul",
            "Proportionnelle au triplet $(\\alpha ; 2\\alpha ; -\\alpha)$",
            "Proportionnelle au triplet $(\\alpha ; -\\alpha ; 2\\alpha)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les équations donnent la deuxième coordonnée opposée de la première et la troisième double de la première : c’est la forme annoncée par le premier élève, qui a raison."
        }
      ]
    }
  ]
};
