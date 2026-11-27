import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 05 : Géométrie analytique de l'espace » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2088
// Décalage de numérotation signalé : le PDF intitule la leçon « LEÇON 6 » alors que le cours est la Leçon 05.
export const MATHS_TLE_C_L05_GEOMETRIE_ESPACE: CurriculumChapter = {
  "id": "terminale_c_maths_geometrie_l05_geometrie_espace",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 5,
  "title": "Leçon 5 : Géométrie analytique de l'espace",
  "summary": "Vecteur normal à un plan, équations cartésiennes d'un plan, distance d'un point à un plan, représentation paramétrique d'une droite et positions relatives des droites et des plans.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2088",
  "points": [
    {
      "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01",
      "order": 1,
      "title": "Vecteur normal à un plan",
      "summary": "Un vecteur normal est orthogonal à tous les vecteurs du plan ; il existe un unique plan passant par un point donné et de vecteur normal donné.",
      "conceptExplanation": "Soit $(P)$ un plan et $\\vec{u}$, $\\vec{v}$ deux vecteurs directeurs non colinéaires de $(P)$. On appelle vecteur normal à $(P)$ tout vecteur non nul $\\vec{n}$ orthogonal à $\\vec{u}$ et à $\\vec{v}$ : $\\vec{n}$ est alors orthogonal à tout vecteur du plan $(P)$.\\nIl existe une infinité de vecteurs normaux à un plan donné : ils sont tous colinéaires entre eux.\\nPropriété : pour tout point $A$ et tout vecteur non nul $\\vec{n}$, il existe un unique plan passant par $A$ et de vecteur normal $\\vec{n}$. Un point $M$ appartient à ce plan si et seulement si $\\overrightarrow{AM} \\perp \\vec{n}$, c'est-à-dire $\\overrightarrow{AM} \\cdot \\vec{n} = 0$.",
      "keyRule": "Un vecteur normal est orthogonal à tous les vecteurs du plan ; M appartient au plan si et seulement si AM est orthogonal au vecteur normal.",
      "formulas": [
        {
          "name": "Vecteur normal",
          "formula": "\\vec{n} \\perp \\vec{u} \\text{ et } \\vec{n} \\perp \\vec{v} \\Rightarrow \\vec{n} \\text{ normal à } (P)",
          "note": "u et v sont deux directeurs non colinéaires du plan."
        },
        {
          "name": "Appartenance au plan",
          "formula": "M \\in (P) \\iff \\overrightarrow{AM} \\cdot \\vec{n} = 0",
          "note": "A est un point de (P) et n un vecteur normal à (P)."
        }
      ],
      "workedExample": {
        "title": "Le plan passant par A de vecteur normal n",
        "statement": "Déterminer une équation du plan $(P)$ passant par $A(1 ; 2 ; 3)$ et de vecteur normal $\\vec{n}(2 ; -1 ; 4)$.",
        "methodSteps": [
          "Un point $M(x ; y ; z)$ appartient à $(P)$ si et seulement si $\\overrightarrow{AM} \\cdot \\vec{n} = 0$.",
          "$\\overrightarrow{AM} = (x - 1 ; y - 2 ; z - 3)$.",
          "Le produit scalaire donne $2(x - 1) - (y - 2) + 4(z - 3) = 0$.",
          "En développant : $2x - y + 4z - 12 = 0$."
        ],
        "conclusion": "Le plan passant par A de vecteur normal n a pour équation 2x - y + 4z - 12 = 0."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Vecteur normal à un plan",
          "stepTheme": "Vecteur normal à un plan",
          "stepBadge": "Vecteur normal à un plan",
          "paragraphText": "• Vecteur normal : soit $(P)$ un plan et $\\vec{u}$, $\\vec{v}$ deux vecteurs directeurs non colinéaires de $(P)$. Tout vecteur non nul $\\vec{n}$ orthogonal à $\\vec{u}$ et à $\\vec{v}$ est un vecteur normal à $(P)$.\n• Un vecteur normal est donc orthogonal à tout vecteur du plan.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01_q1",
            "type": "mcq",
            "prompt": "Soit $(P)$ un plan et $\\vec{u}$, $\\vec{v}$ deux vecteurs directeurs non colinéaires de $(P)$. Quand un vecteur non nul $\\vec{n}$ est-il normal à $(P)$ ?",
            "options": ["Quand $\\vec{n}$ est colinéaire à $\\vec{u}$ et à $\\vec{v}$", "Quand $\\vec{n}$ est orthogonal à $\\vec{u}$ et à $\\vec{v}$", "Quand $\\vec{n}$ est orthogonal à $\\vec{u}$ seulement", "Quand $\\vec{n}$ appartient au plan $(P)$"],
            "correctAnswerIndex": 1,
            "explanation": "Un vecteur normal est orthogonal aux deux directeurs non colinéaires du plan : $\\vec{n} \\perp \\vec{u}$ et $\\vec{n} \\perp \\vec{v}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une infinité de vecteurs normaux",
          "stepTheme": "Une infinité de vecteurs normaux",
          "stepBadge": "Une infinité de vecteurs normaux",
          "paragraphText": "• Il existe une infinité de vecteurs normaux à un plan donné : tous les vecteurs non nuls colinéaires à un vecteur normal donné.\n• Deux plans parallèles ont des vecteurs normaux colinéaires.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01_q2",
            "type": "mcq",
            "prompt": "Soit $\\vec{n}$ un vecteur normal à un plan $(P)$. Lequel de ces vecteurs est aussi normal à $(P)$ ?",
            "options": ["$2\\vec{n}$", "Un vecteur orthogonal à $\\vec{n}$", "Un vecteur directeur de $(P)$", "Le vecteur nul"],
            "correctAnswerIndex": 0,
            "explanation": "Tous les vecteurs non nuls colinéaires à $\\vec{n}$ sont normaux à $(P)$ : $2\\vec{n}$ l'est. Un vecteur directeur de $(P)$ est orthogonal à $\\vec{n}$, pas normal au plan."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Unicité du plan passant par A",
          "stepTheme": "Unicité du plan passant par A",
          "stepBadge": "Unicité du plan passant par A",
          "paragraphText": "• Pour tout point $A$ et tout vecteur non nul $\\vec{n}$, il existe un unique plan passant par $A$ et de vecteur normal $\\vec{n}$.\n• Un point $M$ appartient à ce plan si et seulement si $\\overrightarrow{AM} \\cdot \\vec{n} = 0$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01_q3",
            "type": "mcq",
            "prompt": "Soit $(P)$ le plan passant par $A$ et de vecteur normal $\\vec{n}$. Quand un point $M$ appartient-il à $(P)$ ?",
            "options": ["Quand $\\overrightarrow{AM}$ est colinéaire à $\\vec{n}$", "Quand $\\overrightarrow{AM} \\cdot \\vec{n} = 0$", "Quand $\\overrightarrow{AM} \\cdot \\vec{n} = 1$", "Quand $M = A$ seulement"],
            "correctAnswerIndex": 1,
            "explanation": "$M \\in (P)$ si et seulement si $\\overrightarrow{AM}$ est orthogonal à $\\vec{n}$, c'est-à-dire $\\overrightarrow{AM} \\cdot \\vec{n} = 0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Trouver un vecteur normal avec un cube",
          "stepTheme": "Trouver un vecteur normal avec un cube",
          "stepBadge": "Trouver un vecteur normal avec un cube",
          "paragraphText": "• Méthode : dans un cube $ABCDEFGH$, les arêtes donnent des vecteurs orthogonaux entre eux.\n• Exemple : le vecteur $\\overrightarrow{AE}$ est normal au plan $(ABC)$, car il est orthogonal à $\\overrightarrow{AB}$ et à $\\overrightarrow{AD}$, deux directeurs non colinéaires de $(ABC)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01_q4",
            "type": "mcq",
            "prompt": "Dans un cube $ABCDEFGH$, quel vecteur est normal au plan $(ABC)$ ?",
            "options": ["$\\overrightarrow{AB}$", "$\\overrightarrow{AE}$", "$\\overrightarrow{AC}$", "$\\overrightarrow{BD}$"],
            "correctAnswerIndex": 1,
            "explanation": "$\\overrightarrow{AE}$ est orthogonal à $\\overrightarrow{AB}$ et à $\\overrightarrow{AD}$ (deux directeurs de $(ABC)$) : c'est un vecteur normal au plan $(ABC)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un vecteur du plan n'est pas normal",
          "stepTheme": "Un vecteur du plan n'est pas normal",
          "stepBadge": "Un vecteur du plan n'est pas normal",
          "paragraphText": "• Piège : un vecteur directeur du plan appartient au plan ; il est orthogonal au vecteur normal, mais il n'est pas lui-même normal au plan.\n• Un vecteur normal ne peut jamais appartenir au plan (sauf le vecteur nul, qui n'est pas un vecteur normal).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01_q5",
            "type": "mcq",
            "prompt": "Soit $\\vec{n}$ un vecteur normal à un plan $(P)$ et $\\vec{u}$ un vecteur directeur de $(P)$. Que vaut $\\vec{n} \\cdot \\vec{u}$ ?",
            "options": ["$1$", "$0$", "$||\\vec{n}|| \\times ||\\vec{u}||$", "Il n'est pas défini"],
            "correctAnswerIndex": 1,
            "explanation": "Un vecteur normal est orthogonal à tout vecteur du plan : $\\vec{n} \\cdot \\vec{u} = 0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Équation d'un plan passant par A",
          "stepTheme": "Équation d'un plan passant par A",
          "stepBadge": "Équation d'un plan passant par A",
          "paragraphText": "• Exemple : le plan passant par $A(1 ; 2 ; 3)$ et de vecteur normal $\\vec{n}(2 ; -1 ; 4)$ a pour équation $2x - y + 4z - 12 = 0$.\n• On l'obtient en écrivant $\\overrightarrow{AM} \\cdot \\vec{n} = 0$ pour $M(x ; y ; z)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01_q6",
            "type": "mcq",
            "prompt": "Quelle est l'équation du plan passant par $A(1 ; 2 ; 3)$ et de vecteur normal $\\vec{n}(2 ; -1 ; 4)$ ?",
            "options": ["$2x - y + 4z - 12 = 0$", "$2x - y + 4z + 12 = 0$", "$x + 2y + 3z = 0$", "$2x + y - 4z = 0$"],
            "correctAnswerIndex": 0,
            "explanation": "$M(x ; y ; z)$ appartient au plan si et seulement si $2(x - 1) - (y - 2) + 4(z - 3) = 0$, soit $2x - y + 4z - 12 = 0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01_q1",
          "type": "mcq",
          "prompt": "Soit $(P)$ un plan et $\\vec{u}$, $\\vec{v}$ deux vecteurs directeurs non colinéaires de $(P)$. Quand un vecteur non nul $\\vec{n}$ est-il normal à $(P)$ ?",
          "options": ["Quand $\\vec{n}$ est colinéaire à $\\vec{u}$ et à $\\vec{v}$", "Quand $\\vec{n}$ est orthogonal à $\\vec{u}$ et à $\\vec{v}$", "Quand $\\vec{n}$ est orthogonal à $\\vec{u}$ seulement", "Quand $\\vec{n}$ appartient au plan $(P)$"],
          "correctAnswerIndex": 1,
          "explanation": "Un vecteur normal est orthogonal aux deux directeurs non colinéaires du plan : $\\vec{n} \\perp \\vec{u}$ et $\\vec{n} \\perp \\vec{v}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01_q2",
          "type": "mcq",
          "prompt": "Soit $\\vec{n}$ un vecteur normal à un plan $(P)$. Lequel de ces vecteurs est aussi normal à $(P)$ ?",
          "options": ["$2\\vec{n}$", "Un vecteur orthogonal à $\\vec{n}$", "Un vecteur directeur de $(P)$", "Le vecteur nul"],
          "correctAnswerIndex": 0,
          "explanation": "Tous les vecteurs non nuls colinéaires à $\\vec{n}$ sont normaux à $(P)$ : $2\\vec{n}$ l'est. Un vecteur directeur de $(P)$ est orthogonal à $\\vec{n}$, pas normal au plan."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01_q3",
          "type": "mcq",
          "prompt": "Soit $(P)$ le plan passant par $A$ et de vecteur normal $\\vec{n}$. Quand un point $M$ appartient-il à $(P)$ ?",
          "options": ["Quand $\\overrightarrow{AM}$ est colinéaire à $\\vec{n}$", "Quand $\\overrightarrow{AM} \\cdot \\vec{n} = 0$", "Quand $\\overrightarrow{AM} \\cdot \\vec{n} = 1$", "Quand $M = A$ seulement"],
          "correctAnswerIndex": 1,
          "explanation": "$M \\in (P)$ si et seulement si $\\overrightarrow{AM}$ est orthogonal à $\\vec{n}$, c'est-à-dire $\\overrightarrow{AM} \\cdot \\vec{n} = 0$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01_q4",
          "type": "mcq",
          "prompt": "Dans un cube $ABCDEFGH$, quel vecteur est normal au plan $(ABC)$ ?",
          "options": ["$\\overrightarrow{AB}$", "$\\overrightarrow{AE}$", "$\\overrightarrow{AC}$", "$\\overrightarrow{BD}$"],
          "correctAnswerIndex": 1,
          "explanation": "$\\overrightarrow{AE}$ est orthogonal à $\\overrightarrow{AB}$ et à $\\overrightarrow{AD}$ (deux directeurs de $(ABC)$) : c'est un vecteur normal au plan $(ABC)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01_q5",
          "type": "mcq",
          "prompt": "Soit $\\vec{n}$ un vecteur normal à un plan $(P)$ et $\\vec{u}$ un vecteur directeur de $(P)$. Que vaut $\\vec{n} \\cdot \\vec{u}$ ?",
          "options": ["$1$", "$0$", "$||\\vec{n}|| \\times ||\\vec{u}||$", "Il n'est pas défini"],
          "correctAnswerIndex": 1,
          "explanation": "Un vecteur normal est orthogonal à tout vecteur du plan : $\\vec{n} \\cdot \\vec{u} = 0$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p01_q6",
          "type": "mcq",
          "prompt": "Quelle est l'équation du plan passant par $A(1 ; 2 ; 3)$ et de vecteur normal $\\vec{n}(2 ; -1 ; 4)$ ?",
          "options": ["$2x - y + 4z - 12 = 0$", "$2x - y + 4z + 12 = 0$", "$x + 2y + 3z = 0$", "$2x + y - 4z = 0$"],
          "correctAnswerIndex": 0,
          "explanation": "$M(x ; y ; z)$ appartient au plan si et seulement si $2(x - 1) - (y - 2) + 4(z - 3) = 0$, soit $2x - y + 4z - 12 = 0$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02",
      "order": 2,
      "title": "Équations cartésiennes d'un plan",
      "summary": "Tout plan a une équation de la forme ax + by + cz + d = 0, dont les coefficients donnent un vecteur normal.",
      "conceptExplanation": "Tout plan $(P)$ de l'espace a une équation cartésienne de la forme $ax + by + cz + d = 0$, où $(a ; b ; c) \\neq (0 ; 0 ; 0)$. Réciproquement, toute équation de cette forme est celle d'un plan.\\nLe vecteur $\\vec{n}(a ; b ; c)$ est un vecteur normal au plan $(P)$. Deux équations proportionnelles définissent le même plan.\\nPour trouver l'équation d'un plan passant par un point $A$ et de vecteur normal $\\vec{n}(a ; b ; c)$, on écrit $a(x - x_A) + b(y - y_A) + c(z - z_A) = 0$, puis on développe pour obtenir $ax + by + cz + d = 0$.",
      "keyRule": "ax + by + cz + d = 0 est l'équation d'un plan de vecteur normal (a ; b ; c).",
      "formulas": [
        {
          "name": "Équation cartésienne d'un plan",
          "formula": "(P) : ax + by + cz + d = 0 \\quad ((a ; b ; c) \\neq (0 ; 0 ; 0))",
          "note": "Le vecteur n(a ; b ; c) est normal au plan."
        }
      ],
      "workedExample": {
        "title": "Plan passant par l'origine",
        "statement": "Déterminer une équation cartésienne du plan passant par l'origine $O$ et de vecteur normal $\\vec{n}(1 ; -2 ; -3)$.",
        "methodSteps": [
          "Le plan passe par $O(0 ; 0 ; 0)$ et a pour vecteur normal $(1 ; -2 ; -3)$.",
          "Son équation est de la forme $x - 2y - 3z + d = 0$.",
          "En remplaçant par les coordonnées de $O$ : $d = 0$.",
          "L'équation est donc $x - 2y - 3z = 0$."
        ],
        "conclusion": "Un plan passant par l'origine a une équation sans terme constant."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Équation cartésienne d'un plan",
          "stepTheme": "Équation cartésienne d'un plan",
          "stepBadge": "Équation cartésienne d'un plan",
          "paragraphText": "• Tout plan $(P)$ a une équation de la forme $ax + by + cz + d = 0$ avec $(a ; b ; c) \\neq (0 ; 0 ; 0)$.\n• Réciproquement, toute équation de cette forme est l'équation d'un plan.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces équations est celle d'un plan ?",
            "options": ["$x^2 + y^2 = 4$", "$2x - y + 3z - 5 = 0$", "$xy + z = 0$", "$x + y = 5$ dans l'espace"],
            "correctAnswerIndex": 1,
            "explanation": "L'équation d'un plan est de la forme $ax + by + cz + d = 0$ : c'est $2x - y + 3z - 5 = 0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le vecteur normal se lit sur l'équation",
          "stepTheme": "Le vecteur normal se lit sur l'équation",
          "stepBadge": "Le vecteur normal se lit sur l'équation",
          "paragraphText": "• Si $(P)$ a pour équation $ax + by + cz + d = 0$, alors $\\vec{n}(a ; b ; c)$ est un vecteur normal à $(P)$.\n• Exemple : le plan $2x + y + 2z - 6 = 0$ a pour vecteur normal $\\vec{n}(2 ; 1 ; 2)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02_q2",
            "type": "mcq",
            "prompt": "Quel est un vecteur normal au plan $(P) : 2x + y + 2z - 6 = 0$ ?",
            "options": ["$\\vec{n}(2 ; 1 ; 2)$", "$\\vec{n}(2 ; 1 ; -6)$", "$\\vec{n}(1 ; 2 ; 2)$", "$\\vec{n}(6 ; 2 ; 1)$"],
            "correctAnswerIndex": 0,
            "explanation": "Les coefficients de $x$, $y$ et $z$ donnent le vecteur normal : $\\vec{n}(2 ; 1 ; 2)$. Le terme constant $-6$ n'en fait pas partie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Trouver l'équation d'un plan",
          "stepTheme": "Trouver l'équation d'un plan",
          "stepBadge": "Trouver l'équation d'un plan",
          "paragraphText": "• Méthode : pour un plan passant par $A(x_A ; y_A ; z_A)$ et de vecteur normal $\\vec{n}(a ; b ; c)$, on écrit $a(x - x_A) + b(y - y_A) + c(z - z_A) = 0$ puis on développe.\n• Exemple : le plan passant par l'origine et de normal $(1 ; -2 ; -3)$ a pour équation $x - 2y - 3z = 0$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02_q3",
            "type": "mcq",
            "prompt": "Quelle est l'équation du plan passant par l'origine $O$ et de vecteur normal $\\vec{n}(1 ; -2 ; -3)$ ?",
            "options": ["$x - 2y - 3z = 0$", "$x - 2y - 3z + 1 = 0$", "$x + 2y + 3z = 0$", "$-x + 2y + 3z = 0$"],
            "correctAnswerIndex": 0,
            "explanation": "L'équation est $1 \\times (x - 0) - 2 \\times (y - 0) - 3 \\times (z - 0) = 0$, soit $x - 2y - 3z = 0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Vérifier qu'un point appartient à un plan",
          "stepTheme": "Vérifier qu'un point appartient à un plan",
          "stepBadge": "Vérifier qu'un point appartient à un plan",
          "paragraphText": "• Exemple : le point $C(2 ; 4 ; -5)$ appartient-il au plan $(P) : x - 4y - 2z + 4 = 0$ ?\n• On remplace $x$, $y$ et $z$ par les coordonnées de $C$ : $2 - 4 \\times 4 - 2 \\times (-5) + 4 = 2 - 16 + 10 + 4 = 0$. Le point $C$ appartient bien au plan.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02_q4",
            "type": "mcq",
            "prompt": "Le point $C(2 ; 4 ; -5)$ appartient-il au plan $(P) : x - 4y - 2z + 4 = 0$ ?",
            "options": ["Oui, car $2 - 16 + 10 + 4 = 0$", "Non, car $2 - 16 + 10 + 4 = 4$", "Non, car le plan ne contient aucun point", "On ne peut pas le vérifier sans le vecteur normal"],
            "correctAnswerIndex": 0,
            "explanation": "En remplaçant $x$, $y$ et $z$ par les coordonnées de $C$ : $2 - 4 \\times 4 - 2 \\times (-5) + 4 = 2 - 16 + 10 + 4 = 0$. Le point $C$ appartient au plan."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le terme constant n'est pas une coordonnée du normal",
          "stepTheme": "Le terme constant n'est pas une coordonnée du normal",
          "stepBadge": "Le terme constant n'est pas une coordonnée du normal",
          "paragraphText": "• Piège : dans $ax + by + cz + d = 0$, le vecteur normal est $(a ; b ; c)$ : le terme constant $d$ n'est pas une coordonnée du vecteur normal.\n• Deux équations proportionnelles définissent le même plan : $2x - y + 4z - 12 = 0$ et $x - \\frac{1}{2}y + 2z - 6 = 0$ sont le même plan.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02_q5",
            "type": "mcq",
            "prompt": "Le plan $(P)$ a pour équation $2x + y + 2z - 6 = 0$. Lequel de ces vecteurs n'est PAS normal à $(P)$ ?",
            "options": ["$(2 ; 1 ; 2)$", "$(4 ; 2 ; 4)$", "$(-2 ; -1 ; -2)$", "$(2 ; 1 ; -6)$"],
            "correctAnswerIndex": 3,
            "explanation": "Le vecteur normal est $(2 ; 1 ; 2)$ (ou tout vecteur colinéaire) : $(2 ; 1 ; -6)$ utilise le terme constant $-6$ comme troisième coordonnée, ce qui est faux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Équations proportionnelles, même plan",
          "stepTheme": "Équations proportionnelles, même plan",
          "stepBadge": "Équations proportionnelles, même plan",
          "paragraphText": "• Deux équations cartésiennes proportionnelles (l'une est un multiple non nul de l'autre) définissent le même plan.\n• Exemple : $x - 2y - 3z = 0$ et $2x - 4y - 6z = 0$ sont le même plan.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces équations définit le même plan que $x - 2y - 3z = 0$ ?",
            "options": ["$x - 2y - 3z + 1 = 0$", "$2x - 4y - 6z = 0$", "$x + 2y + 3z = 0$", "$-x - 2y - 3z = 0$"],
            "correctAnswerIndex": 1,
            "explanation": "$2x - 4y - 6z = 0$ est le double de $x - 2y - 3z = 0$ : c'est le même plan."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces équations est celle d'un plan ?",
          "options": ["$x^2 + y^2 = 4$", "$2x - y + 3z - 5 = 0$", "$xy + z = 0$", "$x + y = 5$ dans l'espace"],
          "correctAnswerIndex": 1,
          "explanation": "L'équation d'un plan est de la forme $ax + by + cz + d = 0$ : c'est $2x - y + 3z - 5 = 0$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02_q2",
          "type": "mcq",
          "prompt": "Quel est un vecteur normal au plan $(P) : 2x + y + 2z - 6 = 0$ ?",
          "options": ["$\\vec{n}(2 ; 1 ; 2)$", "$\\vec{n}(2 ; 1 ; -6)$", "$\\vec{n}(1 ; 2 ; 2)$", "$\\vec{n}(6 ; 2 ; 1)$"],
          "correctAnswerIndex": 0,
          "explanation": "Les coefficients de $x$, $y$ et $z$ donnent le vecteur normal : $\\vec{n}(2 ; 1 ; 2)$. Le terme constant $-6$ n'en fait pas partie."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02_q3",
          "type": "mcq",
          "prompt": "Quelle est l'équation du plan passant par l'origine $O$ et de vecteur normal $\\vec{n}(1 ; -2 ; -3)$ ?",
          "options": ["$x - 2y - 3z = 0$", "$x - 2y - 3z + 1 = 0$", "$x + 2y + 3z = 0$", "$-x + 2y + 3z = 0$"],
          "correctAnswerIndex": 0,
          "explanation": "L'équation est $1 \\times (x - 0) - 2 \\times (y - 0) - 3 \\times (z - 0) = 0$, soit $x - 2y - 3z = 0$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02_q4",
          "type": "mcq",
          "prompt": "Le point $C(2 ; 4 ; -5)$ appartient-il au plan $(P) : x - 4y - 2z + 4 = 0$ ?",
          "options": ["Oui, car $2 - 16 + 10 + 4 = 0$", "Non, car $2 - 16 + 10 + 4 = 4$", "Non, car le plan ne contient aucun point", "On ne peut pas le vérifier sans le vecteur normal"],
          "correctAnswerIndex": 0,
          "explanation": "En remplaçant $x$, $y$ et $z$ par les coordonnées de $C$ : $2 - 4 \\times 4 - 2 \\times (-5) + 4 = 2 - 16 + 10 + 4 = 0$. Le point $C$ appartient au plan."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02_q5",
          "type": "mcq",
          "prompt": "Le plan $(P)$ a pour équation $2x + y + 2z - 6 = 0$. Lequel de ces vecteurs n'est PAS normal à $(P)$ ?",
          "options": ["$(2 ; 1 ; 2)$", "$(4 ; 2 ; 4)$", "$(-2 ; -1 ; -2)$", "$(2 ; 1 ; -6)$"],
          "correctAnswerIndex": 3,
          "explanation": "Le vecteur normal est $(2 ; 1 ; 2)$ (ou tout vecteur colinéaire) : $(2 ; 1 ; -6)$ utilise le terme constant $-6$ comme troisième coordonnée, ce qui est faux."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p02_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces équations définit le même plan que $x - 2y - 3z = 0$ ?",
          "options": ["$x - 2y - 3z + 1 = 0$", "$2x - 4y - 6z = 0$", "$x + 2y + 3z = 0$", "$-x - 2y - 3z = 0$"],
          "correctAnswerIndex": 1,
          "explanation": "$2x - 4y - 6z = 0$ est le double de $x - 2y - 3z = 0$ : c'est le même plan."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03",
      "order": 3,
      "title": "Distance d'un point à un plan",
      "summary": "La distance d'un point à un plan se calcule avec une formule qui fait intervenir les coordonnées du point et l'équation du plan.",
      "conceptExplanation": "Soit $(P)$ le plan d'équation $ax + by + cz + d = 0$ et $A(x_0 ; y_0 ; z_0)$ un point de l'espace. La distance de $A$ au plan $(P)$ est la longueur du segment perpendiculaire mené de $A$ à $(P)$.\\nElle est donnée par la formule $d(A ; (P)) = \\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$.\\nLa distance est nulle si et seulement si le point appartient au plan. Elle est toujours positive ou nulle.",
      "keyRule": "Distance d'un point à un plan : on remplace les coordonnées du point dans l'équation, on prend la valeur absolue et on divise par la norme du vecteur normal.",
      "formulas": [
        {
          "name": "Distance d'un point à un plan",
          "formula": "d(A ; (P)) = \\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}",
          "note": "Ne pas oublier le terme +d au numérateur."
        }
      ],
      "workedExample": {
        "title": "Distance d'un point à un plan",
        "statement": "Calculer la distance du point $M(2 ; 1 ; 3)$ au plan $(P) : 2x + y - z + 10 = 0$.",
        "methodSteps": [
          "On remplace $x$, $y$ et $z$ par les coordonnées de $M$ : $2 \\times 2 + 1 - 3 + 10 = 12$.",
          "On prend la valeur absolue : $|12| = 12$.",
          "On divise par $\\sqrt{2^2 + 1^2 + (-1)^2} = \\sqrt{6}$.",
          "La distance est $\\frac{12}{\\sqrt{6}} = 2\\sqrt{6}$."
        ],
        "conclusion": "La distance de M au plan (P) est 2√6."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Distance d'un point à un plan",
          "stepTheme": "Distance d'un point à un plan",
          "stepBadge": "Distance d'un point à un plan",
          "paragraphText": "• Distance : la distance d'un point $A$ à un plan $(P)$ est la longueur du segment perpendiculaire mené de $A$ au plan.\n• C'est la plus courte distance entre $A$ et un point du plan.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce que la distance d'un point $A$ à un plan $(P)$ ?",
            "options": ["La longueur du segment perpendiculaire mené de $A$ à $(P)$", "La distance de $A$ à n'importe quel point de $(P)$", "La longueur du plus long segment joignant $A$ à $(P)$", "La distance de $A$ à l'origine"],
            "correctAnswerIndex": 0,
            "explanation": "La distance de $A$ à $(P)$ est la longueur du segment perpendiculaire mené de $A$ au plan : c'est la plus courte distance."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule de la distance",
          "stepTheme": "La formule de la distance",
          "stepBadge": "La formule de la distance",
          "paragraphText": "• Pour $(P) : ax + by + cz + d = 0$ et $A(x_0 ; y_0 ; z_0)$, on a $d(A ; (P)) = \\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$.\n• Le dénominateur est la norme du vecteur normal $\\vec{n}(a ; b ; c)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03_q2",
            "type": "mcq",
            "prompt": "Quelle est la formule de la distance du point $A(x_0 ; y_0 ; z_0)$ au plan $(P) : ax + by + cz + d = 0$ ?",
            "options": ["$\\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$", "$\\frac{|ax_0 + by_0 + cz_0|}{\\sqrt{a^2 + b^2 + c^2}}$", "$\\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2}}$", "$|ax_0 + by_0 + cz_0 + d|$"],
            "correctAnswerIndex": 0,
            "explanation": "La formule complète est $\\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$ : le numérateur contient le terme $+d$ et le dénominateur est $\\sqrt{a^2 + b^2 + c^2}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Appliquer la formule",
          "stepTheme": "Appliquer la formule",
          "stepBadge": "Appliquer la formule",
          "paragraphText": "• Méthode : on remplace $x$, $y$ et $z$ par les coordonnées du point, on prend la valeur absolue du résultat, puis on divise par la norme du vecteur normal.\n• Exemple : $M(2 ; 1 ; 3)$ et $(P) : 2x + y - z + 10 = 0$ donnent $d = 2\\sqrt{6}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03_q3",
            "type": "mcq",
            "prompt": "Quelle est la distance du point $M(2 ; 1 ; 3)$ au plan $(P) : 2x + y - z + 10 = 0$ ?",
            "options": ["$\\frac{12}{\\sqrt{6}} = 2\\sqrt{6}$", "$\\frac{2}{\\sqrt{6}}$", "$12$", "$\\sqrt{6}$"],
            "correctAnswerIndex": 0,
            "explanation": "Le numérateur vaut $|2 \\times 2 + 1 - 3 + 10| = 12$ et le dénominateur $\\sqrt{2^2 + 1^2 + (-1)^2} = \\sqrt{6}$ : $d = \\frac{12}{\\sqrt{6}} = 2\\sqrt{6}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier le +d",
          "stepTheme": "Ne pas oublier le +d",
          "stepBadge": "Ne pas oublier le +d",
          "paragraphText": "• Piège : le numérateur de la formule contient le terme constant $+d$ : $d(A ; (P)) = \\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$.\n• Plusieurs exercices du livre H5P de la leçon affichent la formule sans le $+d$ : c'est une erreur du livre, signalée ici.",
          "konanTip": "Dans la formule de la distance, le +d est obligatoire : sans lui, on calcule la distance au plan parallèle passant par l'origine, pas au plan (P).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03_q4",
            "type": "mcq",
            "prompt": "Dans la formule $d(A ; (P)) = \\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$, que se passe-t-il si on oublie le $+d$ au numérateur ?",
            "options": ["On obtient la même distance", "On obtient la distance au plan parallèle à $(P)$ passant par l'origine", "On obtient une distance négative", "La formule devient fausse seulement si $d = 0$"],
            "correctAnswerIndex": 1,
            "explanation": "Sans le $+d$, on calcule $|ax_0 + by_0 + cz_0| / \\sqrt{a^2 + b^2 + c^2}$, c'est-à-dire la distance au plan $ax + by + cz = 0$, parallèle à $(P)$ et passant par l'origine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Distance nulle : le point est dans le plan",
          "stepTheme": "Distance nulle : le point est dans le plan",
          "stepBadge": "Distance nulle : le point est dans le plan",
          "paragraphText": "• La distance est nulle si et seulement si le point appartient au plan : $d(A ; (P)) = 0 \\iff A \\in (P)$.\n• En effet, le numérateur $|ax_0 + by_0 + cz_0 + d|$ est nul exactement quand les coordonnées de $A$ vérifient l'équation du plan.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03_q5",
            "type": "mcq",
            "prompt": "Quand la distance d'un point $A$ à un plan $(P)$ est-elle nulle ?",
            "options": ["Quand $A$ est l'origine", "Quand $A$ appartient au plan $(P)$", "Quand le plan passe par l'origine", "Jamais, une distance est toujours strictement positive"],
            "correctAnswerIndex": 1,
            "explanation": "$d(A ; (P)) = 0$ si et seulement si le numérateur est nul, c'est-à-dire si les coordonnées de $A$ vérifient l'équation du plan : $A \\in (P)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Autre distance : le point M(1 ; 2 ; 3)",
          "stepTheme": "Autre distance : le point M(1 ; 2 ; 3)",
          "stepBadge": "Autre distance : le point M(1 ; 2 ; 3)",
          "paragraphText": "• Exemple du livre 2025-2026 : la distance du point $M(1 ; 2 ; 3)$ au plan $(P) : 2x + y - z + 10 = 0$.\n• Numérateur : $|2 \\times 1 + 2 - 3 + 10| = 11$ ; dénominateur : $\\sqrt{6}$. La distance est $\\frac{11\\sqrt{6}}{6}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03_q6",
            "type": "mcq",
            "prompt": "Quelle est la distance du point $M(1 ; 2 ; 3)$ au plan $(P) : 2x + y - z + 10 = 0$ ?",
            "options": ["$\\frac{11\\sqrt{6}}{6}$", "$\\frac{13\\sqrt{6}}{6}$", "$2\\sqrt{6}$", "$\\frac{5\\sqrt{6}}{2}$"],
            "correctAnswerIndex": 0,
            "explanation": "Le numérateur vaut $|2 + 2 - 3 + 10| = 11$ et le dénominateur $\\sqrt{6}$ : $d = \\frac{11}{\\sqrt{6}} = \\frac{11\\sqrt{6}}{6}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce que la distance d'un point $A$ à un plan $(P)$ ?",
          "options": ["La longueur du segment perpendiculaire mené de $A$ à $(P)$", "La distance de $A$ à n'importe quel point de $(P)$", "La longueur du plus long segment joignant $A$ à $(P)$", "La distance de $A$ à l'origine"],
          "correctAnswerIndex": 0,
          "explanation": "La distance de $A$ à $(P)$ est la longueur du segment perpendiculaire mené de $A$ au plan : c'est la plus courte distance."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03_q2",
          "type": "mcq",
          "prompt": "Quelle est la formule de la distance du point $A(x_0 ; y_0 ; z_0)$ au plan $(P) : ax + by + cz + d = 0$ ?",
          "options": ["$\\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$", "$\\frac{|ax_0 + by_0 + cz_0|}{\\sqrt{a^2 + b^2 + c^2}}$", "$\\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2}}$", "$|ax_0 + by_0 + cz_0 + d|$"],
          "correctAnswerIndex": 0,
          "explanation": "La formule complète est $\\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$ : le numérateur contient le terme $+d$ et le dénominateur est $\\sqrt{a^2 + b^2 + c^2}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03_q3",
          "type": "mcq",
          "prompt": "Quelle est la distance du point $M(2 ; 1 ; 3)$ au plan $(P) : 2x + y - z + 10 = 0$ ?",
          "options": ["$\\frac{12}{\\sqrt{6}} = 2\\sqrt{6}$", "$\\frac{2}{\\sqrt{6}}$", "$12$", "$\\sqrt{6}$"],
          "correctAnswerIndex": 0,
          "explanation": "Le numérateur vaut $|2 \\times 2 + 1 - 3 + 10| = 12$ et le dénominateur $\\sqrt{2^2 + 1^2 + (-1)^2} = \\sqrt{6}$ : $d = \\frac{12}{\\sqrt{6}} = 2\\sqrt{6}$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03_q4",
          "type": "mcq",
          "prompt": "Dans la formule $d(A ; (P)) = \\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$, que se passe-t-il si on oublie le $+d$ au numérateur ?",
          "options": ["On obtient la même distance", "On obtient la distance au plan parallèle à $(P)$ passant par l'origine", "On obtient une distance négative", "La formule devient fausse seulement si $d = 0$"],
          "correctAnswerIndex": 1,
          "explanation": "Sans le $+d$, on calcule $|ax_0 + by_0 + cz_0| / \\sqrt{a^2 + b^2 + c^2}$, c'est-à-dire la distance au plan $ax + by + cz = 0$, parallèle à $(P)$ et passant par l'origine."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03_q5",
          "type": "mcq",
          "prompt": "Quand la distance d'un point $A$ à un plan $(P)$ est-elle nulle ?",
          "options": ["Quand $A$ est l'origine", "Quand $A$ appartient au plan $(P)$", "Quand le plan passe par l'origine", "Jamais, une distance est toujours strictement positive"],
          "correctAnswerIndex": 1,
          "explanation": "$d(A ; (P)) = 0$ si et seulement si le numérateur est nul, c'est-à-dire si les coordonnées de $A$ vérifient l'équation du plan : $A \\in (P)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p03_q6",
          "type": "mcq",
          "prompt": "Quelle est la distance du point $M(1 ; 2 ; 3)$ au plan $(P) : 2x + y - z + 10 = 0$ ?",
          "options": ["$\\frac{11\\sqrt{6}}{6}$", "$\\frac{13\\sqrt{6}}{6}$", "$2\\sqrt{6}$", "$\\frac{5\\sqrt{6}}{2}$"],
          "correctAnswerIndex": 0,
          "explanation": "Le numérateur vaut $|2 + 2 - 3 + 10| = 11$ et le dénominateur $\\sqrt{6}$ : $d = \\frac{11}{\\sqrt{6}} = \\frac{11\\sqrt{6}}{6}$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04",
      "order": 4,
      "title": "Représentation paramétrique d'une droite",
      "summary": "Une droite de l'espace se décrit par un système paramétrique : un point de départ et un vecteur directeur.",
      "conceptExplanation": "Soit $(D)$ une droite passant par le point $A(x_0 ; y_0 ; z_0)$ et de vecteur directeur $\\vec{u}(a ; b ; c)$. Un point $M(x ; y ; z)$ appartient à $(D)$ si et seulement si il existe un réel $t$ tel que $\\begin{cases} x = x_0 + ta \\\\ y = y_0 + tb \\\\ z = z_0 + tc \\end{cases}$\\nLe réel $t$ est le paramètre : chaque valeur de $t$ donne un point de la droite, et chaque point de la droite correspond à une unique valeur de $t$.\\nDeux systèmes paramétriques peuvent définir la même droite : il suffit de changer de point de départ (prendre un autre point de la droite) ou de vecteur directeur (prendre un vecteur colinéaire non nul).",
      "keyRule": "Une droite : un point de départ, un vecteur directeur, et le même paramètre t dans les trois équations.",
      "formulas": [
        {
          "name": "Représentation paramétrique d'une droite",
          "formula": "(D) : \\begin{cases} x = x_0 + ta \\\\ y = y_0 + tb \\\\ z = z_0 + tc \\end{cases} \\quad (t \\in \\mathbb{R})",
          "note": "A(x0 ; y0 ; z0) est un point de (D) et u(a ; b ; c) un vecteur directeur."
        }
      ],
      "workedExample": {
        "title": "Représentation paramétrique et appartenance",
        "statement": "Soit $(D)$ la droite passant par $A(2 ; 3 ; 0)$ et de vecteur directeur $\\vec{u}(-1 ; -1 ; 1)$. Donner une représentation paramétrique de $(D)$ et dire si le point $B(1 ; 2 ; 1)$ appartient à $(D)$.",
        "methodSteps": [
          "La représentation paramétrique est $x = 2 - t$, $y = 3 - t$, $z = t$, avec $t \\in \\mathbb{R}$.",
          "Pour $B(1 ; 2 ; 1)$, on cherche $t$ tel que $2 - t = 1$, $3 - t = 2$ et $t = 1$.",
          "Les trois équations donnent $t = 1$ : c'est le même paramètre.",
          "Donc $B$ appartient à $(D)$ (pour $t = 1$)."
        ],
        "conclusion": "Un point appartient à la droite si ses coordonnées vérifient le système pour un même paramètre t."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Représentation paramétrique",
          "stepTheme": "Représentation paramétrique",
          "stepBadge": "Représentation paramétrique",
          "paragraphText": "• Une droite $(D)$ passant par $A(x_0 ; y_0 ; z_0)$ et de vecteur directeur $\\vec{u}(a ; b ; c)$ a pour représentation paramétrique $x = x_0 + ta$, $y = y_0 + tb$, $z = z_0 + tc$ avec $t \\in \\mathbb{R}$.\n• Le réel $t$ est le paramètre : chaque valeur de $t$ donne un point de la droite.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est une représentation paramétrique de la droite passant par $A(2 ; 3 ; 0)$ et de vecteur directeur $\\vec{u}(-1 ; -1 ; 1)$ ?",
            "options": ["$x = 2 - t$, $y = 3 - t$, $z = t$", "$x = 2 + t$, $y = 3 + t$, $z = -t$", "$x = -1 + 2t$, $y = -1 + 3t$, $z = 1$", "$x = 2 - t$, $y = 3 + t$, $z = t$"],
            "correctAnswerIndex": 0,
            "explanation": "On a $x = 2 + t \\times (-1) = 2 - t$, $y = 3 + t \\times (-1) = 3 - t$ et $z = 0 + t \\times 1 = t$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Tester l'appartenance d'un point",
          "stepTheme": "Tester l'appartenance d'un point",
          "stepBadge": "Tester l'appartenance d'un point",
          "paragraphText": "• Méthode : pour tester si un point $B$ appartient à la droite, on remplace $x$, $y$, $z$ par ses coordonnées et on résout chaque équation en $t$.\n• Le point appartient à la droite si et seulement si les trois équations donnent la même valeur de $t$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04_q2",
            "type": "mcq",
            "prompt": "La droite $(D)$ a pour représentation $x = 2 - t$, $y = 3 - t$, $z = t$. Le point $B(1 ; 2 ; 1)$ appartient-il à $(D)$ ?",
            "options": ["Non, car $t$ vaut $1$, $1$ et $2$", "Oui, car les trois équations donnent $t = 1$", "Non, car $t$ n'existe pas", "Oui, car $B$ est sur la droite $(AB)$"],
            "correctAnswerIndex": 1,
            "explanation": "On a $2 - t = 1$ donc $t = 1$, $3 - t = 2$ donc $t = 1$, et $t = 1$ : les trois équations donnent le même $t = 1$, donc $B$ appartient à $(D)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Le même paramètre dans les trois équations",
          "stepTheme": "Le même paramètre dans les trois équations",
          "stepBadge": "Le même paramètre dans les trois équations",
          "paragraphText": "• Piège : le paramètre $t$ doit être le même dans les trois équations. Si les trois équations donnent des valeurs différentes de $t$, le point n'appartient pas à la droite.\n• Exemple : pour $x = 2 - t$, $y = 3 - t$, $z = t$, le point $(0 ; 1 ; 2)$ donne $t = 2$, $t = 2$ et $t = 2$ : il appartient à la droite. Le point $(0 ; 1 ; 1)$ donne $t = 2$, $t = 2$ et $t = 1$ : il n'y appartient pas.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04_q3",
            "type": "mcq",
            "prompt": "La droite $(D)$ a pour représentation $x = 2 - t$, $y = 3 - t$, $z = t$. Le point $C(0 ; 1 ; 1)$ appartient-il à $(D)$ ?",
            "options": ["Oui, car $t = 2$ dans les deux premières équations", "Non, car les trois équations ne donnent pas le même $t$ ($2$, $2$ et $1$)", "Oui, car $C$ est sur la droite $(AC)$", "Non, car $t$ doit être positif"],
            "correctAnswerIndex": 1,
            "explanation": "On a $2 - t = 0$ donc $t = 2$, $3 - t = 1$ donc $t = 2$, mais $t = 1$ pour la troisième équation : les valeurs diffèrent, donc $C$ n'appartient pas à $(D)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Plusieurs représentations pour une même droite",
          "stepTheme": "Plusieurs représentations pour une même droite",
          "stepBadge": "Plusieurs représentations pour une même droite",
          "paragraphText": "• Une même droite a plusieurs représentations paramétriques : on peut changer de point de départ (prendre un autre point de la droite) ou de vecteur directeur (prendre un vecteur colinéaire non nul).\n• Exemple : $x = 2 - t$, $y = 3 - t$, $z = t$ et $x = 1 + s$, $y = 2 + s$, $z = 1 - s$ définissent la même droite.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04_q4",
            "type": "mcq",
            "prompt": "La droite $(D)$ a pour représentation $x = 2 - t$, $y = 3 - t$, $z = t$. Laquelle de ces représentations définit la même droite ?",
            "options": ["$x = 1 + s$, $y = 2 + s$, $z = 1 - s$", "$x = 2 + s$, $y = 3 + s$, $z = s$", "$x = 2 - s$, $y = 3 - s$, $z = -s$", "$x = 1 - s$, $y = 2 + s$, $z = 1 + s$"],
            "correctAnswerIndex": 0,
            "explanation": "Le point $(1 ; 2 ; 1)$ appartient à $(D)$ (pour $t = 1$) et le vecteur $(1 ; 1 ; -1)$ est colinéaire à $(-1 ; -1 ; 1)$ : la représentation $x = 1 + s$, $y = 2 + s$, $z = 1 - s$ définit la même droite."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Vecteur directeur d'une droite",
          "stepTheme": "Vecteur directeur d'une droite",
          "stepBadge": "Vecteur directeur d'une droite",
          "paragraphText": "• Un vecteur directeur d'une droite est un vecteur non nul colinéaire à la droite : il donne sa direction.\n• Tout vecteur non nul colinéaire à un vecteur directeur est aussi un vecteur directeur de la même droite.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04_q5",
            "type": "mcq",
            "prompt": "Soit $(D)$ une droite de vecteur directeur $\\vec{u}(-1 ; -1 ; 1)$. Lequel de ces vecteurs est aussi un vecteur directeur de $(D)$ ?",
            "options": ["$(1 ; 1 ; 1)$", "$(2 ; 2 ; -2)$", "$(-1 ; 1 ; 1)$", "$(0 ; 0 ; 0)$"],
            "correctAnswerIndex": 1,
            "explanation": "$(2 ; 2 ; -2) = -2 \\times (-1 ; -1 ; 1)$ est colinéaire à $\\vec{u}$ : c'est aussi un vecteur directeur de $(D)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un point de la droite pour t = 2",
          "stepTheme": "Un point de la droite pour t = 2",
          "stepBadge": "Un point de la droite pour t = 2",
          "paragraphText": "• Exemple : pour la droite $x = 2 - t$, $y = 3 - t$, $z = t$, le point obtenu pour $t = 2$ est $(0 ; 1 ; 2)$.\n• Chaque valeur du paramètre donne un point de la droite, et chaque point de la droite correspond à une unique valeur de $t$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04_q6",
            "type": "mcq",
            "prompt": "La droite $(D)$ a pour représentation $x = 2 - t$, $y = 3 - t$, $z = t$. Quel point obtient-on pour $t = 2$ ?",
            "options": ["$(0 ; 1 ; 2)$", "$(4 ; 5 ; 2)$", "$(2 ; 3 ; 0)$", "$(1 ; 2 ; 1)$"],
            "correctAnswerIndex": 0,
            "explanation": "Pour $t = 2$ : $x = 2 - 2 = 0$, $y = 3 - 2 = 1$, $z = 2$. Le point est $(0 ; 1 ; 2)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est une représentation paramétrique de la droite passant par $A(2 ; 3 ; 0)$ et de vecteur directeur $\\vec{u}(-1 ; -1 ; 1)$ ?",
          "options": ["$x = 2 - t$, $y = 3 - t$, $z = t$", "$x = 2 + t$, $y = 3 + t$, $z = -t$", "$x = -1 + 2t$, $y = -1 + 3t$, $z = 1$", "$x = 2 - t$, $y = 3 + t$, $z = t$"],
          "correctAnswerIndex": 0,
          "explanation": "On a $x = 2 + t \\times (-1) = 2 - t$, $y = 3 + t \\times (-1) = 3 - t$ et $z = 0 + t \\times 1 = t$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04_q2",
          "type": "mcq",
          "prompt": "La droite $(D)$ a pour représentation $x = 2 - t$, $y = 3 - t$, $z = t$. Le point $B(1 ; 2 ; 1)$ appartient-il à $(D)$ ?",
          "options": ["Non, car $t$ vaut $1$, $1$ et $2$", "Oui, car les trois équations donnent $t = 1$", "Non, car $t$ n'existe pas", "Oui, car $B$ est sur la droite $(AB)$"],
          "correctAnswerIndex": 1,
          "explanation": "On a $2 - t = 1$ donc $t = 1$, $3 - t = 2$ donc $t = 1$, et $t = 1$ : les trois équations donnent le même $t = 1$, donc $B$ appartient à $(D)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04_q3",
          "type": "mcq",
          "prompt": "La droite $(D)$ a pour représentation $x = 2 - t$, $y = 3 - t$, $z = t$. Le point $C(0 ; 1 ; 1)$ appartient-il à $(D)$ ?",
          "options": ["Oui, car $t = 2$ dans les deux premières équations", "Non, car les trois équations ne donnent pas le même $t$ ($2$, $2$ et $1$)", "Oui, car $C$ est sur la droite $(AC)$", "Non, car $t$ doit être positif"],
          "correctAnswerIndex": 1,
          "explanation": "On a $2 - t = 0$ donc $t = 2$, $3 - t = 1$ donc $t = 2$, mais $t = 1$ pour la troisième équation : les valeurs diffèrent, donc $C$ n'appartient pas à $(D)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04_q4",
          "type": "mcq",
          "prompt": "La droite $(D)$ a pour représentation $x = 2 - t$, $y = 3 - t$, $z = t$. Laquelle de ces représentations définit la même droite ?",
          "options": ["$x = 1 + s$, $y = 2 + s$, $z = 1 - s$", "$x = 2 + s$, $y = 3 + s$, $z = s$", "$x = 2 - s$, $y = 3 - s$, $z = -s$", "$x = 1 - s$, $y = 2 + s$, $z = 1 + s$"],
          "correctAnswerIndex": 0,
          "explanation": "Le point $(1 ; 2 ; 1)$ appartient à $(D)$ (pour $t = 1$) et le vecteur $(1 ; 1 ; -1)$ est colinéaire à $(-1 ; -1 ; 1)$ : la représentation $x = 1 + s$, $y = 2 + s$, $z = 1 - s$ définit la même droite."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04_q5",
          "type": "mcq",
          "prompt": "Soit $(D)$ une droite de vecteur directeur $\\vec{u}(-1 ; -1 ; 1)$. Lequel de ces vecteurs est aussi un vecteur directeur de $(D)$ ?",
          "options": ["$(1 ; 1 ; 1)$", "$(2 ; 2 ; -2)$", "$(-1 ; 1 ; 1)$", "$(0 ; 0 ; 0)$"],
          "correctAnswerIndex": 1,
          "explanation": "$(2 ; 2 ; -2) = -2 \\times (-1 ; -1 ; 1)$ est colinéaire à $\\vec{u}$ : c'est aussi un vecteur directeur de $(D)$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p04_q6",
          "type": "mcq",
          "prompt": "La droite $(D)$ a pour représentation $x = 2 - t$, $y = 3 - t$, $z = t$. Quel point obtient-on pour $t = 2$ ?",
          "options": ["$(0 ; 1 ; 2)$", "$(4 ; 5 ; 2)$", "$(2 ; 3 ; 0)$", "$(1 ; 2 ; 1)$"],
          "correctAnswerIndex": 0,
          "explanation": "Pour $t = 2$ : $x = 2 - 2 = 0$, $y = 3 - 2 = 1$, $z = 2$. Le point est $(0 ; 1 ; 2)$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05",
      "order": 5,
      "title": "Positions relatives de deux droites",
      "summary": "Deux droites sont parallèles, sécantes ou non coplanaires ; on les distingue par leurs vecteurs directeurs et par l'existence d'un point commun.",
      "conceptExplanation": "Deux droites de l'espace sont soit parallèles, soit sécantes, soit non coplanaires.\\nElles sont parallèles si leurs vecteurs directeurs sont colinéaires : confondues si elles ont un point commun, strictement parallèles sinon.\\nElles sont sécantes si elles ont exactement un point commun : leurs vecteurs directeurs ne sont alors pas colinéaires.\\nElles sont non coplanaires si elles ne sont ni parallèles ni sécantes : elles ne sont pas dans un même plan.\\nDeux droites sont orthogonales si leurs vecteurs directeurs sont orthogonaux : elles peuvent être sécantes ou non coplanaires. Des droites perpendiculaires sont des droites sécantes et orthogonales.",
      "keyRule": "Directeurs colinéaires : parallèles. Un point commun sans colinéarité : sécantes. Ni l'un ni l'autre : non coplanaires.",
      "formulas": [
        {
          "name": "Positions relatives de deux droites",
          "formula": "\\vec{u} \\parallel \\vec{u'} : \\text{parallèles} ; \\text{point commun} : \\text{sécantes} ; \\text{sinon} : \\text{non coplanaires}",
          "note": "u et u' sont les vecteurs directeurs des deux droites."
        }
      ],
      "workedExample": {
        "title": "Trois droites : parallèles, sécantes, non coplanaires",
        "statement": "Soient trois droites $(D)$, $(D')$ et $(D'')$ de l'espace. On sait que $(D)$ est strictement parallèle à $(D'')$, que $(D')$ coupe $(D'')$ en $A(1 ; 0 ; 1)$, et que $(D)$ et $(D')$ sont non coplanaires et orthogonales. Que peut-on dire de chaque couple ?",
        "methodSteps": [
          "$(D)$ et $(D'')$ ont des directeurs colinéaires et aucun point commun : elles sont strictement parallèles.",
          "$(D')$ et $(D'')$ ont le point commun $A(1 ; 0 ; 1)$ et des directeurs non colinéaires : elles sont sécantes en $A$.",
          "$(D)$ et $(D')$ n'ont ni directeurs colinéaires ni point commun : elles sont non coplanaires.",
          "Le produit scalaire de leurs directeurs est nul : elles sont orthogonales (mais pas perpendiculaires, car elles ne se coupent pas)."
        ],
        "conclusion": "On distingue les trois cas par les directeurs et par l'existence d'un point commun."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les trois positions relatives",
          "stepTheme": "Les trois positions relatives",
          "stepBadge": "Les trois positions relatives",
          "paragraphText": "• Deux droites de l'espace sont soit parallèles, soit sécantes, soit non coplanaires.\n• Parallèles : même direction. Sécantes : un point commun. Non coplanaires : ni l'un ni l'autre, elles ne sont pas dans un même plan.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05_q1",
            "type": "mcq",
            "prompt": "Quelles sont les trois positions relatives possibles de deux droites de l'espace ?",
            "options": ["Parallèles, sécantes ou non coplanaires", "Parallèles ou perpendiculaires seulement", "Sécantes ou confondues seulement", "Parallèles, sécantes ou orthogonales"],
            "correctAnswerIndex": 0,
            "explanation": "Deux droites de l'espace sont parallèles, sécantes ou non coplanaires. L'orthogonalité n'est pas une position relative : deux droites orthogonales peuvent être sécantes ou non coplanaires."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Droites parallèles : directeurs colinéaires",
          "stepTheme": "Droites parallèles : directeurs colinéaires",
          "stepBadge": "Droites parallèles : directeurs colinéaires",
          "paragraphText": "• Deux droites sont parallèles si et seulement si leurs vecteurs directeurs sont colinéaires.\n• Elles sont confondues si elles ont un point commun, strictement parallèles sinon.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05_q2",
            "type": "mcq",
            "prompt": "Soient $(D)$ de vecteur directeur $\\vec{u}(1 ; 2 ; 3)$ et $(D')$ de vecteur directeur $\\vec{u'}(2 ; 4 ; 6)$. Que peut-on dire de $(D)$ et $(D')$ ?",
            "options": ["Elles sont sécantes", "Elles sont non coplanaires", "Elles sont parallèles", "Elles sont orthogonales"],
            "correctAnswerIndex": 2,
            "explanation": "$\\vec{u'} = 2\\vec{u}$ : les directeurs sont colinéaires, donc les droites sont parallèles (confondues ou strictement parallèles selon qu'elles ont un point commun)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Chercher un point commun",
          "stepTheme": "Chercher un point commun",
          "stepBadge": "Chercher un point commun",
          "paragraphText": "• Méthode : pour savoir si deux droites sont sécantes, on cherche un point commun en égalant leurs représentations paramétriques.\n• Si les directeurs ne sont pas colinéaires et qu'il existe un point commun, les droites sont sécantes en ce point.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05_q3",
            "type": "mcq",
            "prompt": "Deux droites ont des vecteurs directeurs non colinéaires et un point commun $A$. Que peut-on dire d'elles ?",
            "options": ["Elles sont parallèles", "Elles sont sécantes en $A$", "Elles sont non coplanaires", "Elles sont confondues"],
            "correctAnswerIndex": 1,
            "explanation": "Des directeurs non colinéaires et un point commun : les droites sont sécantes en ce point $A$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Orthogonales n'est pas perpendiculaires",
          "stepTheme": "Orthogonales n'est pas perpendiculaires",
          "stepBadge": "Orthogonales n'est pas perpendiculaires",
          "paragraphText": "• Piège : deux droites orthogonales ont des directeurs orthogonaux, mais elles ne se coupent pas forcément.\n• Des droites perpendiculaires sont sécantes ET orthogonales. Des droites non coplanaires peuvent être orthogonales sans être perpendiculaires.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05_q4",
            "type": "mcq",
            "prompt": "Deux droites non coplanaires ont des vecteurs directeurs orthogonaux. Sont-elles perpendiculaires ?",
            "options": ["Oui, car leurs directeurs sont orthogonaux", "Non : perpendiculaires exige qu'elles soient sécantes, ce qui n'est pas le cas", "Oui, car elles ne sont pas parallèles", "Non : deux droites non coplanaires ne peuvent pas être orthogonales"],
            "correctAnswerIndex": 1,
            "explanation": "Perpendiculaires signifie sécantes et orthogonales. Deux droites non coplanaires ne se coupent pas : elles sont orthogonales mais pas perpendiculaires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Droites non coplanaires",
          "stepTheme": "Droites non coplanaires",
          "stepBadge": "Droites non coplanaires",
          "paragraphText": "• Deux droites sont non coplanaires si elles ne sont ni parallèles ni sécantes : il n'existe aucun plan qui les contient toutes les deux.\n• Exemple de la leçon : $(D)$ et $(D')$ sont non coplanaires et orthogonales.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05_q5",
            "type": "mcq",
            "prompt": "Quand deux droites sont-elles non coplanaires ?",
            "options": ["Quand elles sont parallèles", "Quand elles se coupent en un point", "Quand elles ne sont ni parallèles ni sécantes", "Quand leurs directeurs sont colinéaires"],
            "correctAnswerIndex": 2,
            "explanation": "Non coplanaires signifie ni parallèles ni sécantes : aucun plan ne contient les deux droites."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'exercice des trois droites",
          "stepTheme": "L'exercice des trois droites",
          "stepBadge": "L'exercice des trois droites",
          "paragraphText": "• Exemple de la leçon : $(D)$ est strictement parallèle à $(D'')$, $(D')$ coupe $(D'')$ en $A(1 ; 0 ; 1)$, et $(D)$ et $(D')$ sont non coplanaires et orthogonales.\n• On a donc les trois cas en un seul exercice : parallèle, sécant, non coplanaire.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05_q6",
            "type": "mcq",
            "prompt": "Dans l'exercice de la leçon, $(D')$ coupe $(D'')$ en $A(1 ; 0 ; 1)$. Que peut-on dire de $(D')$ et $(D'')$ ?",
            "options": ["Elles sont parallèles", "Elles sont sécantes en $A(1 ; 0 ; 1)$", "Elles sont non coplanaires", "Elles sont confondues"],
            "correctAnswerIndex": 1,
            "explanation": "Elles ont le point commun $A(1 ; 0 ; 1)$ : elles sont sécantes en $A$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05_q1",
          "type": "mcq",
          "prompt": "Quelles sont les trois positions relatives possibles de deux droites de l'espace ?",
          "options": ["Parallèles, sécantes ou non coplanaires", "Parallèles ou perpendiculaires seulement", "Sécantes ou confondues seulement", "Parallèles, sécantes ou orthogonales"],
          "correctAnswerIndex": 0,
          "explanation": "Deux droites de l'espace sont parallèles, sécantes ou non coplanaires. L'orthogonalité n'est pas une position relative : deux droites orthogonales peuvent être sécantes ou non coplanaires."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05_q2",
          "type": "mcq",
          "prompt": "Soient $(D)$ de vecteur directeur $\\vec{u}(1 ; 2 ; 3)$ et $(D')$ de vecteur directeur $\\vec{u'}(2 ; 4 ; 6)$. Que peut-on dire de $(D)$ et $(D')$ ?",
          "options": ["Elles sont sécantes", "Elles sont non coplanaires", "Elles sont parallèles", "Elles sont orthogonales"],
          "correctAnswerIndex": 2,
          "explanation": "$\\vec{u'} = 2\\vec{u}$ : les directeurs sont colinéaires, donc les droites sont parallèles (confondues ou strictement parallèles selon qu'elles ont un point commun)."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05_q3",
          "type": "mcq",
          "prompt": "Deux droites ont des vecteurs directeurs non colinéaires et un point commun $A$. Que peut-on dire d'elles ?",
          "options": ["Elles sont parallèles", "Elles sont sécantes en $A$", "Elles sont non coplanaires", "Elles sont confondues"],
          "correctAnswerIndex": 1,
          "explanation": "Des directeurs non colinéaires et un point commun : les droites sont sécantes en ce point $A$."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05_q4",
          "type": "mcq",
          "prompt": "Deux droites non coplanaires ont des vecteurs directeurs orthogonaux. Sont-elles perpendiculaires ?",
          "options": ["Oui, car leurs directeurs sont orthogonaux", "Non : perpendiculaires exige qu'elles soient sécantes, ce qui n'est pas le cas", "Oui, car elles ne sont pas parallèles", "Non : deux droites non coplanaires ne peuvent pas être orthogonales"],
          "correctAnswerIndex": 1,
          "explanation": "Perpendiculaires signifie sécantes et orthogonales. Deux droites non coplanaires ne se coupent pas : elles sont orthogonales mais pas perpendiculaires."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05_q5",
          "type": "mcq",
          "prompt": "Quand deux droites sont-elles non coplanaires ?",
          "options": ["Quand elles sont parallèles", "Quand elles se coupent en un point", "Quand elles ne sont ni parallèles ni sécantes", "Quand leurs directeurs sont colinéaires"],
          "correctAnswerIndex": 2,
          "explanation": "Non coplanaires signifie ni parallèles ni sécantes : aucun plan ne contient les deux droites."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p05_q6",
          "type": "mcq",
          "prompt": "Dans l'exercice de la leçon, $(D')$ coupe $(D'')$ en $A(1 ; 0 ; 1)$. Que peut-on dire de $(D')$ et $(D'')$ ?",
          "options": ["Elles sont parallèles", "Elles sont sécantes en $A(1 ; 0 ; 1)$", "Elles sont non coplanaires", "Elles sont confondues"],
          "correctAnswerIndex": 1,
          "explanation": "Elles ont le point commun $A(1 ; 0 ; 1)$ : elles sont sécantes en $A$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06",
      "order": 6,
      "title": "Positions relatives d'une droite et d'un plan, et de deux plans",
      "summary": "Une droite est parallèle ou sécante à un plan selon le produit scalaire de son directeur avec le vecteur normal ; deux plans sont parallèles ou sécants selon leurs vecteurs normaux.",
      "conceptExplanation": "Soit $(D)$ une droite de vecteur directeur $\\vec{u}$ et $(P)$ un plan de vecteur normal $\\vec{n}$. Si $\\vec{u} \\cdot \\vec{n} = 0$, la droite est parallèle au plan : elle est incluse dans le plan si un de ses points appartient au plan, strictement parallèle sinon. Si $\\vec{u} \\cdot \\vec{n} \\neq 0$, la droite est sécante au plan en un unique point.\\nSoient $(P)$ et $(P')$ deux plans de vecteurs normaux $\\vec{n}$ et $\\vec{n'}$. Si $\\vec{n}$ et $\\vec{n'}$ sont colinéaires, les plans sont parallèles : confondus s'ils ont un point commun, strictement parallèles sinon. Sinon, ils sont sécants suivant une droite. Si de plus $\\vec{n} \\cdot \\vec{n'} = 0$, les plans sont perpendiculaires.",
      "keyRule": "Droite et plan : u·n = 0, parallèle ; sinon, sécante. Deux plans : normaux colinéaires, parallèles ; sinon, sécants.",
      "formulas": [
        {
          "name": "Droite et plan",
          "formula": "\\vec{u} \\cdot \\vec{n} = 0 : (D) \\parallel (P) ; \\vec{u} \\cdot \\vec{n} \\neq 0 : (D) \\text{ sécante à } (P)",
          "note": "u est le directeur de (D), n le normal de (P)."
        },
        {
          "name": "Deux plans",
          "formula": "\\vec{n} \\parallel \\vec{n'} : (P) \\parallel (P') ; \\text{sinon} : (P) \\text{ et } (P') \\text{ sécants}",
          "note": "Si de plus n·n' = 0, les plans sont perpendiculaires."
        }
      ],
      "workedExample": {
        "title": "Deux plans perpendiculaires et leur intersection",
        "statement": "Soient $(P) : 2x + y + 2z - 6 = 0$ et $(P') : 2x - 2y - z + 3 = 0$. Montrer que ces plans sont perpendiculaires et donner une représentation paramétrique de leur droite d'intersection $\\Delta$.",
        "methodSteps": [
          "Les vecteurs normaux sont $\\vec{n}(2 ; 1 ; 2)$ et $\\vec{n'}(2 ; -2 ; -1)$.",
          "Leur produit scalaire vaut $4 - 2 - 2 = 0$ : les plans sont perpendiculaires, donc sécants.",
          "On cherche un point de $\\Delta$ : pour $z = 0$, on résout $2x + y = 6$ et $2x - 2y = -3$, ce qui donne $x = \\frac{3}{2}$ et $y = 3$.",
          "Le point $(\\frac{3}{2} ; 3 ; 0)$ appartient à $\\Delta$ et la direction est $(-\\frac{1}{2} ; -1 ; 1)$.",
          "Donc $\\Delta : x = \\frac{3}{2} - \\frac{1}{2}\\lambda$, $y = 3 - \\lambda$, $z = \\lambda$."
        ],
        "conclusion": "Deux plans de normaux orthogonaux sont perpendiculaires et se coupent suivant une droite."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Droite parallèle ou sécante à un plan",
          "stepTheme": "Droite parallèle ou sécante à un plan",
          "stepBadge": "Droite parallèle ou sécante à un plan",
          "paragraphText": "• Soit $(D)$ de vecteur directeur $\\vec{u}$ et $(P)$ de vecteur normal $\\vec{n}$.\n• Si $\\vec{u} \\cdot \\vec{n} = 0$, la droite est parallèle au plan (incluse ou strictement parallèle). Si $\\vec{u} \\cdot \\vec{n} \\neq 0$, la droite est sécante au plan en un unique point.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06_q1",
            "type": "mcq",
            "prompt": "Soit $(D)$ de vecteur directeur $\\vec{u}$ et $(P)$ de vecteur normal $\\vec{n}$. Quand $(D)$ est-elle parallèle à $(P)$ ?",
            "options": ["Quand $\\vec{u} \\cdot \\vec{n} \\neq 0$", "Quand $\\vec{u} \\cdot \\vec{n} = 0$", "Quand $\\vec{u}$ et $\\vec{n}$ sont colinéaires", "Quand $(D)$ coupe $(P)$ en un point"],
            "correctAnswerIndex": 1,
            "explanation": "$(D)$ est parallèle à $(P)$ si et seulement si $\\vec{u} \\cdot \\vec{n} = 0$ : le directeur est alors orthogonal au normal, donc parallèle au plan."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Droite incluse ou strictement parallèle",
          "stepTheme": "Droite incluse ou strictement parallèle",
          "stepBadge": "Droite incluse ou strictement parallèle",
          "paragraphText": "• Si $\\vec{u} \\cdot \\vec{n} = 0$, la droite est parallèle au plan : elle est incluse dans le plan si l'un de ses points appartient au plan, strictement parallèle sinon.\n• Pour décider, on teste si un point de la droite vérifie l'équation du plan.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06_q2",
            "type": "mcq",
            "prompt": "La droite $(D)$ a un directeur $\\vec{u}$ avec $\\vec{u} \\cdot \\vec{n} = 0$, où $\\vec{n}$ est le normal du plan $(P)$. Un point $A$ de $(D)$ appartient à $(P)$. Que peut-on dire de $(D)$ ?",
            "options": ["Elle est strictement parallèle à $(P)$", "Elle est incluse dans $(P)$", "Elle est sécante à $(P)$", "Elle est perpendiculaire à $(P)$"],
            "correctAnswerIndex": 1,
            "explanation": "Le directeur est orthogonal au normal (droite parallèle au plan) et un point de la droite est dans le plan : la droite est incluse dans le plan."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une droite sécante à un plan",
          "stepTheme": "Une droite sécante à un plan",
          "stepBadge": "Une droite sécante à un plan",
          "paragraphText": "• Exemple de la leçon : la droite $(D)$ est sécante au plan $(P) : 2x + y + 2z - 4 = 0$ au point $A(1 ; 1 ; \\frac{1}{2})$.\n• On vérifie : $2 \\times 1 + 1 + 2 \\times \\frac{1}{2} - 4 = 0$, donc $A$ appartient bien à $(P)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06_q3",
            "type": "mcq",
            "prompt": "Le point $A(1 ; 1 ; \\frac{1}{2})$ appartient-il au plan $(P) : 2x + y + 2z - 4 = 0$ ?",
            "options": ["Non, car $2 + 1 + 1 - 4 = 0$ est faux", "Oui, car $2 \\times 1 + 1 + 2 \\times \\frac{1}{2} - 4 = 0$", "Non, car $A$ est sur la droite $(D)$", "On ne peut pas le vérifier"],
            "correctAnswerIndex": 1,
            "explanation": "En remplaçant : $2 \\times 1 + 1 + 2 \\times \\frac{1}{2} - 4 = 2 + 1 + 1 - 4 = 0$. Le point $A$ appartient au plan."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Deux plans parallèles ou sécants",
          "stepTheme": "Deux plans parallèles ou sécants",
          "stepBadge": "Deux plans parallèles ou sécants",
          "paragraphText": "• Deux plans sont parallèles si leurs vecteurs normaux sont colinéaires : confondus s'ils ont un point commun, strictement parallèles sinon.\n• Sinon, ils sont sécants suivant une droite.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06_q4",
            "type": "mcq",
            "prompt": "Soient $(P)$ et $(P')$ deux plans de vecteurs normaux $\\vec{n}$ et $\\vec{n'}$ non colinéaires. Que peut-on dire d'eux ?",
            "options": ["Ils sont parallèles", "Ils sont sécants suivant une droite", "Ils sont confondus", "Ils n'ont aucun point commun"],
            "correctAnswerIndex": 1,
            "explanation": "Des normaux non colinéaires signifient que les plans ne sont pas parallèles : ils sont sécants suivant une droite."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La figure du manuel sur les deux cas",
          "stepTheme": "La figure du manuel sur les deux cas",
          "stepBadge": "La figure du manuel sur les deux cas",
          "paragraphText": "• Attention : dans la leçon, la figure qui illustre les deux cas (droite parallèle au plan et droite sécante au plan) étiquette les deux cas $\\vec{u} \\cdot \\vec{n} = 0$.\n• C'est une erreur du manuel : le cas sécant devrait être étiqueté $\\vec{u} \\cdot \\vec{n} \\neq 0$, signalée ici telle quelle.",
          "konanTip": "Quand une figure contredit le cours, c'est le cours qui fait foi : droite sécante veut dire u·n ≠ 0.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06_q5",
            "type": "mcq",
            "prompt": "La figure du manuel étiquette les deux cas (droite parallèle et droite sécante à un plan) avec $\\vec{u} \\cdot \\vec{n} = 0$. Que faut-il en penser ?",
            "options": ["C'est correct : les deux cas vérifient $\\vec{u} \\cdot \\vec{n} = 0$", "C'est une erreur : le cas sécant devrait être $\\vec{u} \\cdot \\vec{n} \\neq 0$", "C'est correct : le produit scalaire est toujours nul", "C'est une erreur : le cas parallèle devrait être $\\vec{u} \\cdot \\vec{n} \\neq 0$"],
            "correctAnswerIndex": 1,
            "explanation": "Une droite sécante au plan vérifie $\\vec{u} \\cdot \\vec{n} \\neq 0$ : la figure du manuel comporte une erreur d'étiquetage, signalée telle quelle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Deux plans perpendiculaires",
          "stepTheme": "Deux plans perpendiculaires",
          "stepBadge": "Deux plans perpendiculaires",
          "paragraphText": "• Exemple de la leçon : $(P) : 2x + y + 2z - 6 = 0$ et $(P') : 2x - 2y - z + 3 = 0$.\n• Leurs normaux $\\vec{n}(2 ; 1 ; 2)$ et $\\vec{n'}(2 ; -2 ; -1)$ vérifient $\\vec{n} \\cdot \\vec{n'} = 4 - 2 - 2 = 0$ : les plans sont perpendiculaires, donc sécants suivant la droite $\\Delta : x = \\frac{3}{2} - \\frac{1}{2}\\lambda$, $y = 3 - \\lambda$, $z = \\lambda$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06_q6",
            "type": "mcq",
            "prompt": "Les plans $(P) : 2x + y + 2z - 6 = 0$ et $(P') : 2x - 2y - z + 3 = 0$ sont-ils perpendiculaires ?",
            "options": ["Non, car $\\vec{n} \\cdot \\vec{n'} = 4$", "Oui, car $\\vec{n} \\cdot \\vec{n'} = 4 - 2 - 2 = 0$", "Non, car leurs normaux sont colinéaires", "Oui, car ils ont le même terme constant"],
            "correctAnswerIndex": 1,
            "explanation": "$\\vec{n} \\cdot \\vec{n'} = 2 \\times 2 + 1 \\times (-2) + 2 \\times (-1) = 4 - 2 - 2 = 0$ : les normaux sont orthogonaux, donc les plans sont perpendiculaires."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06_q1",
          "type": "mcq",
          "prompt": "Soit $(D)$ de vecteur directeur $\\vec{u}$ et $(P)$ de vecteur normal $\\vec{n}$. Quand $(D)$ est-elle parallèle à $(P)$ ?",
          "options": ["Quand $\\vec{u} \\cdot \\vec{n} \\neq 0$", "Quand $\\vec{u} \\cdot \\vec{n} = 0$", "Quand $\\vec{u}$ et $\\vec{n}$ sont colinéaires", "Quand $(D)$ coupe $(P)$ en un point"],
          "correctAnswerIndex": 1,
          "explanation": "$(D)$ est parallèle à $(P)$ si et seulement si $\\vec{u} \\cdot \\vec{n} = 0$ : le directeur est alors orthogonal au normal, donc parallèle au plan."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06_q2",
          "type": "mcq",
          "prompt": "La droite $(D)$ a un directeur $\\vec{u}$ avec $\\vec{u} \\cdot \\vec{n} = 0$, où $\\vec{n}$ est le normal du plan $(P)$. Un point $A$ de $(D)$ appartient à $(P)$. Que peut-on dire de $(D)$ ?",
          "options": ["Elle est strictement parallèle à $(P)$", "Elle est incluse dans $(P)$", "Elle est sécante à $(P)$", "Elle est perpendiculaire à $(P)$"],
          "correctAnswerIndex": 1,
          "explanation": "Le directeur est orthogonal au normal (droite parallèle au plan) et un point de la droite est dans le plan : la droite est incluse dans le plan."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06_q3",
          "type": "mcq",
          "prompt": "Le point $A(1 ; 1 ; \\frac{1}{2})$ appartient-il au plan $(P) : 2x + y + 2z - 4 = 0$ ?",
          "options": ["Non, car $2 + 1 + 1 - 4 = 0$ est faux", "Oui, car $2 \\times 1 + 1 + 2 \\times \\frac{1}{2} - 4 = 0$", "Non, car $A$ est sur la droite $(D)$", "On ne peut pas le vérifier"],
          "correctAnswerIndex": 1,
          "explanation": "En remplaçant : $2 \\times 1 + 1 + 2 \\times \\frac{1}{2} - 4 = 2 + 1 + 1 - 4 = 0$. Le point $A$ appartient au plan."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06_q4",
          "type": "mcq",
          "prompt": "Soient $(P)$ et $(P')$ deux plans de vecteurs normaux $\\vec{n}$ et $\\vec{n'}$ non colinéaires. Que peut-on dire d'eux ?",
          "options": ["Ils sont parallèles", "Ils sont sécants suivant une droite", "Ils sont confondus", "Ils n'ont aucun point commun"],
          "correctAnswerIndex": 1,
          "explanation": "Des normaux non colinéaires signifient que les plans ne sont pas parallèles : ils sont sécants suivant une droite."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06_q5",
          "type": "mcq",
          "prompt": "La figure du manuel étiquette les deux cas (droite parallèle et droite sécante à un plan) avec $\\vec{u} \\cdot \\vec{n} = 0$. Que faut-il en penser ?",
          "options": ["C'est correct : les deux cas vérifient $\\vec{u} \\cdot \\vec{n} = 0$", "C'est une erreur : le cas sécant devrait être $\\vec{u} \\cdot \\vec{n} \\neq 0$", "C'est correct : le produit scalaire est toujours nul", "C'est une erreur : le cas parallèle devrait être $\\vec{u} \\cdot \\vec{n} \\neq 0$"],
          "correctAnswerIndex": 1,
          "explanation": "Une droite sécante au plan vérifie $\\vec{u} \\cdot \\vec{n} \\neq 0$ : la figure du manuel comporte une erreur d'étiquetage, signalée telle quelle."
        },
        {
          "id": "terminale_c_maths_geometrie_l05_geometrie_espace_p06_q6",
          "type": "mcq",
          "prompt": "Les plans $(P) : 2x + y + 2z - 6 = 0$ et $(P') : 2x - 2y - z + 3 = 0$ sont-ils perpendiculaires ?",
          "options": ["Non, car $\\vec{n} \\cdot \\vec{n'} = 4$", "Oui, car $\\vec{n} \\cdot \\vec{n'} = 4 - 2 - 2 = 0$", "Non, car leurs normaux sont colinéaires", "Oui, car ils ont le même terme constant"],
          "correctAnswerIndex": 1,
          "explanation": "$\\vec{n} \\cdot \\vec{n'} = 2 \\times 2 + 1 \\times (-2) + 2 \\times (-1) = 4 - 2 - 2 = 0$ : les normaux sont orthogonaux, donc les plans sont perpendiculaires."
        }
      ]
    }
  ]
};
