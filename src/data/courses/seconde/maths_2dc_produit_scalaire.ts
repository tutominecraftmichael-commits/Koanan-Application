import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Maths_2C_L10_Produit_scalaire.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_2DC_GEO_L10_PRODUIT_SCALAIRE: CurriculumChapter = {
  "id": "seconde_c_maths_geometrie_l10_produit_scalaire",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "alsoForGrades": [],
  "order": 10,
  "title": "Leçon 10 : Produit scalaire",
  "summary": "Définition, projection orthogonale, orthogonalité, règles de calcul, Al-Kashi, médiane et calcul avec des coordonnées.",
  "officialVolumeHours": 10,
  "contentVersion": 2,
  "source": "Maths_2C_L10_Produit_scalaire.pdf",
  "points": [
    {
      "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01",
      "order": 1,
      "title": "Définition du produit scalaire",
      "summary": "Un nombre réel calculé à partir de deux vecteurs.",
      "conceptExplanation": "Le produit scalaire de deux vecteurs $\\vec u$ et $\\vec v$ est un nombre réel, noté $\\vec u\\cdot\\vec v$ (lu « $\\vec u$ scalaire $\\vec v$ ») :\n- si $\\vec u\\neq\\vec 0$ et $\\vec v\\neq\\vec 0$ : $\\vec u\\cdot\\vec v=\\|\\vec u\\|\\times\\|\\vec v\\|\\times\\cos(\\vec u,\\vec v)$ ;\n- si $\\vec u=\\vec 0$ ou $\\vec v=\\vec 0$ : $\\vec u\\cdot\\vec v=0$.\n\nAvec des points : $\\vec{AB}\\cdot\\vec{AC}=AB\\times AC\\times\\cos\\widehat{BAC}$.\n\nLe signe du produit scalaire est celui du cosinus : positif si l'angle est aigu, nul si l'angle est droit, négatif si l'angle est obtus.\n\nCas des vecteurs colinéaires :\n- de même sens ⇔ $\\vec u\\cdot\\vec v=\\|\\vec u\\|\\times\\|\\vec v\\|$ ;\n- de sens contraires ⇔ $\\vec u\\cdot\\vec v=-\\|\\vec u\\|\\times\\|\\vec v\\|$.\n\nPropriétés : $\\vec u\\cdot\\vec v=\\vec v\\cdot\\vec u$ et $|\\vec u\\cdot\\vec v|\\le\\|\\vec u\\|\\times\\|\\vec v\\|$.\n\nApplication en physique : le travail d'une force $\\vec F$ pour un déplacement $\\vec{AB}$ est $W=\\vec F\\cdot\\vec{AB}$.",
      "keyRule": "$\\vec u\\cdot\\vec v=\\|\\vec u\\|\\,\\|\\vec v\\|\\cos(\\vec u,\\vec v)$ ; c'est un nombre réel. Colinéaires de même sens : $\\|\\vec u\\|\\,\\|\\vec v\\|$ ; de sens contraires : $-\\|\\vec u\\|\\,\\|\\vec v\\|$.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer avec l'angle",
        "statement": "$\\|\\vec u\\|=2\\sqrt3$, $\\|\\vec v\\|=4$ et $\\cos(\\vec u,\\vec v)=\\dfrac{\\sqrt3}{2}$. Calcule $\\vec u\\cdot\\vec v$.",
        "methodSteps": [
          "$\\vec u\\cdot\\vec v=2\\sqrt3\\times 4\\times\\dfrac{\\sqrt3}{2}$.",
          "$=\\dfrac{2\\times4\\times3}{2}=12$."
        ],
        "conclusion": "$\\vec u\\cdot\\vec v=12$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un nombre réel",
          "stepTheme": "Un nombre réel",
          "stepBadge": "Un nombre réel",
          "paragraphText": "Le produit scalaire $\\vec u\\cdot\\vec v$ de deux vecteurs est un nombre réel, pas un vecteur.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q1",
            "type": "mcq",
            "prompt": "Quelle est la nature du produit scalaire $\\vec u\\cdot\\vec v$ ?",
            "options": [
              "Un vecteur",
              "Un point du plan",
              "Un nombre réel",
              "Une droite"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Scalaire = nombre : le résultat n'a pas de direction."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La formule",
          "stepTheme": "La formule",
          "stepBadge": "La formule",
          "paragraphText": "Si $\\vec u\\neq\\vec 0$ et $\\vec v\\neq\\vec 0$ :\n$\\vec u\\cdot\\vec v=\\|\\vec u\\|\\times\\|\\vec v\\|\\times\\cos(\\vec u,\\vec v)$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q2",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=2\\sqrt3$, $\\|\\vec v\\|=4$ et $\\cos(\\vec u,\\vec v)=\\dfrac{\\sqrt3}{2}$. Que vaut $\\vec u\\cdot\\vec v$ ?",
            "options": [
              "$12$",
              "$8\\sqrt3$",
              "$4\\sqrt3$",
              "$6$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2\\sqrt3\\times4\\times\\frac{\\sqrt3}{2}=\\frac{24}{2}=12$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Angle droit",
          "stepTheme": "Angle droit",
          "stepBadge": "Angle droit",
          "paragraphText": "Si l'angle $(\\vec u,\\vec v)$ mesure $\\dfrac{\\pi}{2}$, alors $\\cos\\dfrac{\\pi}{2}=0$ et $\\vec u\\cdot\\vec v=0$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q3",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=2\\sqrt3$, $\\|\\vec v\\|=4$ et l'angle $(\\vec u,\\vec v)$ mesure $\\dfrac{\\pi}{2}$. Que vaut $\\vec u\\cdot\\vec v$ ?",
            "options": [
              "$8\\sqrt3$",
              "$1$",
              "$-8\\sqrt3$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\cos\\frac{\\pi}{2}=0$, donc le produit est nul."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le signe",
          "stepTheme": "Le signe",
          "stepBadge": "Le signe",
          "paragraphText": "Le signe de $\\vec{AB}\\cdot\\vec{AC}$ est celui de $\\cos\\widehat{BAC}$ :\n• angle aigu : positif ;\n• angle droit : nul ;\n• angle obtus : négatif.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q4",
            "type": "mcq",
            "prompt": "L'angle $\\widehat{BAC}$ est obtus. Quel est le signe de $\\vec{AB}\\cdot\\vec{AC}$ ?",
            "options": [
              "Positif",
              "Négatif",
              "Nul",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cosinus d'un angle obtus est négatif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Colinéaires de même sens",
          "stepTheme": "Colinéaires de même sens",
          "stepBadge": "Colinéaires de même sens",
          "paragraphText": "$\\vec u$ et $\\vec v$ colinéaires de même sens ⇔ $\\vec u\\cdot\\vec v=\\|\\vec u\\|\\times\\|\\vec v\\|$ (l'angle est nul, $\\cos 0=1$).",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q5",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=2$, $\\|\\vec v\\|=6$, colinéaires de même sens. Que vaut $\\vec u\\cdot\\vec v$ ?",
            "options": [
              "$-12$",
              "$12$",
              "$0$",
              "$8$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2\\times6=12$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Colinéaires de sens contraires",
          "stepTheme": "Colinéaires de sens contraires",
          "stepBadge": "Colinéaires de sens contraires",
          "paragraphText": "$\\vec u$ et $\\vec v$ colinéaires de sens contraires ⇔ $\\vec u\\cdot\\vec v=-\\|\\vec u\\|\\times\\|\\vec v\\|$ ($\\cos\\pi=-1$).",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q6",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=15$, $\\|\\vec v\\|=7$, colinéaires de sens contraires. Que vaut $\\vec u\\cdot\\vec v$ ?",
            "options": [
              "$105$",
              "$0$",
              "$-22$",
              "$-105$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$-15\\times7=-105$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pas un vecteur !",
          "stepTheme": "Pas un vecteur !",
          "stepBadge": "Pas un vecteur !",
          "paragraphText": "Attention : on ne dessine pas $\\vec u\\cdot\\vec v$. C'est un nombre, qui peut être négatif.\nEt $|\\vec u\\cdot\\vec v|\\le\\|\\vec u\\|\\times\\|\\vec v\\|$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q7",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=3$ et $\\|\\vec v\\|=2$. Quelle valeur est impossible pour $\\vec u\\cdot\\vec v$ ?",
            "options": [
              "$7$",
              "$-6$",
              "$0$",
              "$5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|\\vec u\\cdot\\vec v|\\le 3\\times2=6$ : la valeur $7$ est impossible."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q1",
          "type": "mcq",
          "prompt": "Quelle est la nature du produit scalaire $\\vec u\\cdot\\vec v$ ?",
          "options": [
            "Un vecteur",
            "Un point du plan",
            "Un nombre réel",
            "Une droite"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Scalaire = nombre : le résultat n'a pas de direction."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q2",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=2\\sqrt3$, $\\|\\vec v\\|=4$ et $\\cos(\\vec u,\\vec v)=\\dfrac{\\sqrt3}{2}$. Que vaut $\\vec u\\cdot\\vec v$ ?",
          "options": [
            "$12$",
            "$8\\sqrt3$",
            "$4\\sqrt3$",
            "$6$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2\\sqrt3\\times4\\times\\frac{\\sqrt3}{2}=\\frac{24}{2}=12$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q3",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=2\\sqrt3$, $\\|\\vec v\\|=4$ et l'angle $(\\vec u,\\vec v)$ mesure $\\dfrac{\\pi}{2}$. Que vaut $\\vec u\\cdot\\vec v$ ?",
          "options": [
            "$8\\sqrt3$",
            "$1$",
            "$-8\\sqrt3$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\cos\\frac{\\pi}{2}=0$, donc le produit est nul."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q4",
          "type": "mcq",
          "prompt": "L'angle $\\widehat{BAC}$ est obtus. Quel est le signe de $\\vec{AB}\\cdot\\vec{AC}$ ?",
          "options": [
            "Positif",
            "Négatif",
            "Nul",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cosinus d'un angle obtus est négatif."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q5",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=2$, $\\|\\vec v\\|=6$, colinéaires de même sens. Que vaut $\\vec u\\cdot\\vec v$ ?",
          "options": [
            "$-12$",
            "$12$",
            "$0$",
            "$8$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2\\times6=12$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q6",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=15$, $\\|\\vec v\\|=7$, colinéaires de sens contraires. Que vaut $\\vec u\\cdot\\vec v$ ?",
          "options": [
            "$105$",
            "$0$",
            "$-22$",
            "$-105$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$-15\\times7=-105$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p01_q7",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=3$ et $\\|\\vec v\\|=2$. Quelle valeur est impossible pour $\\vec u\\cdot\\vec v$ ?",
          "options": [
            "$7$",
            "$-6$",
            "$0$",
            "$5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|\\vec u\\cdot\\vec v|\\le 3\\times2=6$ : la valeur $7$ est impossible."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02",
      "order": 2,
      "title": "Carré scalaire et projection orthogonale",
      "summary": "Calculer un produit scalaire grâce à un projeté.",
      "conceptExplanation": "1. Carré scalaire : $\\vec u\\cdot\\vec u$ se note $\\vec u^{\\,2}$ et $\\vec u^{\\,2}=\\|\\vec u\\|^2$. Pour deux points : $\\vec{AB}^{\\,2}=AB^2$.\n\n2. Projection orthogonale : pour $A\\neq B$, si $H$ est le projeté orthogonal de $C$ sur la droite $(AB)$ :\n$\\vec{AB}\\cdot\\vec{AC}=\\overline{AB}\\times\\overline{AH}$ (produit de mesures algébriques).\nLe résultat est positif si $H$ est du même côté que $B$ par rapport à $A$, négatif sinon.\n\n3. Plus généralement, si $H$ et $K$ sont les projetés orthogonaux de $C$ et $D$ sur $(AB)$ : $\\vec{AB}\\cdot\\vec{CD}=\\overline{AB}\\times\\overline{HK}$.\n\nExemple : $ABCD$ est un carré de côté $4$. Le projeté de $C$ sur $(AB)$ est $B$, donc $\\vec{AB}\\cdot\\vec{AC}=AB\\times AB=16$. Le projeté de $D$ sur $(AB)$ est $A$, donc $\\vec{AB}\\cdot\\vec{AD}=AB\\times 0=0$.",
      "keyRule": "$\\vec u^{\\,2}=\\|\\vec u\\|^2$. $\\vec{AB}\\cdot\\vec{AC}=\\overline{AB}\\times\\overline{AH}$ où $H$ est le projeté orthogonal de $C$ sur $(AB)$.",
      "formulas": [],
      "workedExample": {
        "title": "Dans un carré",
        "statement": "$ABCD$ est un carré de côté $4$. Calcule $\\vec{AB}\\cdot\\vec{AC}$.",
        "methodSteps": [
          "On projette $C$ sur $(AB)$ : comme $(BC)\\perp(AB)$, le projeté est $B$.",
          "$\\vec{AB}\\cdot\\vec{AC}=\\overline{AB}\\times\\overline{AB}=4\\times4$."
        ],
        "conclusion": "$\\vec{AB}\\cdot\\vec{AC}=16$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le carré scalaire",
          "stepTheme": "Le carré scalaire",
          "stepBadge": "Le carré scalaire",
          "paragraphText": "$\\vec u\\cdot\\vec u$ se note $\\vec u^{\\,2}$ et vaut $\\|\\vec u\\|^2$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q1",
            "type": "mcq",
            "prompt": "$\\|\\vec v\\|=\\sqrt5$. Que vaut $\\vec v^{\\,2}$ ?",
            "options": [
              "$\\sqrt5$",
              "$25$",
              "$5$",
              "$10$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(\\sqrt5)^2=5$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Avec deux points",
          "stepTheme": "Avec deux points",
          "stepBadge": "Avec deux points",
          "paragraphText": "Pour deux points $A$ et $B$ : $\\vec{AB}^{\\,2}=AB^2$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q2",
            "type": "mcq",
            "prompt": "$AB=7$. Que vaut $\\vec{AB}^{\\,2}$ ?",
            "options": [
              "$7$",
              "$14$",
              "$\\sqrt7$",
              "$49$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le carré scalaire est le carré de la longueur."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La projection",
          "stepTheme": "La projection",
          "stepBadge": "La projection",
          "paragraphText": "Si $H$ est le projeté orthogonal de $C$ sur $(AB)$ :\n$\\vec{AB}\\cdot\\vec{AC}=\\overline{AB}\\times\\overline{AH}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q3",
            "type": "mcq",
            "prompt": "$H$ est le projeté orthogonal de $C$ sur $(AB)$. À quoi est égal $\\vec{AB}\\cdot\\vec{AC}$ ?",
            "options": [
              "$AB\\times AC$",
              "$\\overline{AB}\\times\\overline{HC}$",
              "$\\overline{AB}\\times\\overline{AH}$",
              "$AC\\times CH$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On remplace $C$ par son projeté $H$ sur la droite $(AB)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le carré : $16$",
          "stepTheme": "Le carré : $16$",
          "stepBadge": "Le carré : $16$",
          "paragraphText": "$ABCD$ est un carré de côté $4$. Le projeté de $C$ sur $(AB)$ est $B$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q4",
            "type": "mcq",
            "prompt": "$ABCD$ est un carré de côté $4$. Que vaut $\\vec{AB}\\cdot\\vec{AC}$ ?",
            "options": [
              "$4\\sqrt2$",
              "$16$",
              "$16\\sqrt2$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\overline{AB}\\times\\overline{AB}=4\\times4=16$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le carré : $0$",
          "stepTheme": "Le carré : $0$",
          "stepBadge": "Le carré : $0$",
          "paragraphText": "Le projeté de $D$ sur $(AB)$ est $A$ lui-même : $\\overline{AA}=0$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q5",
            "type": "mcq",
            "prompt": "$ABCD$ est un carré de côté $4$. Que vaut $\\vec{AB}\\cdot\\vec{AD}$ ?",
            "options": [
              "$0$",
              "$16$",
              "$-16$",
              "$8$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les côtés $[AB]$ et $[AD]$ sont perpendiculaires."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Projeté du mauvais côté",
          "stepTheme": "Projeté du mauvais côté",
          "stepBadge": "Projeté du mauvais côté",
          "paragraphText": "Si le projeté $H$ est du côté opposé à $B$ par rapport à $A$, $\\overline{AH}$ est négatif : le produit scalaire est négatif.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q6",
            "type": "mcq",
            "prompt": "$AB=4$ et le projeté $H$ de $C$ sur $(AB)$ vérifie $\\overline{AH}=-2$. Que vaut $\\vec{AB}\\cdot\\vec{AC}$ ?",
            "options": [
              "$-8$",
              "$8$",
              "$2$",
              "$-2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$4\\times(-2)=-8$ : l'angle $\\widehat{BAC}$ est obtus."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Deux projetés",
          "stepTheme": "Deux projetés",
          "stepBadge": "Deux projetés",
          "paragraphText": "Pour $\\vec{AB}\\cdot\\vec{CD}$ on projette $C$ ET $D$ sur $(AB)$, en $H$ et $K$ : $\\vec{AB}\\cdot\\vec{CD}=\\overline{AB}\\times\\overline{HK}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q7",
            "type": "mcq",
            "prompt": "$\\overline{BC}=4$. Sur la droite $(BC)$, le projeté de $C$ est $C$ et celui de $I$ est $K$, avec $\\overline{CK}=-6$. Que vaut $\\vec{BC}\\cdot\\vec{CI}$ ?",
            "options": [
              "$24$",
              "$-24$",
              "$-10$",
              "$2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\overline{BC}\\times\\overline{CK}=4\\times(-6)=-24$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q1",
          "type": "mcq",
          "prompt": "$\\|\\vec v\\|=\\sqrt5$. Que vaut $\\vec v^{\\,2}$ ?",
          "options": [
            "$\\sqrt5$",
            "$25$",
            "$5$",
            "$10$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(\\sqrt5)^2=5$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q2",
          "type": "mcq",
          "prompt": "$AB=7$. Que vaut $\\vec{AB}^{\\,2}$ ?",
          "options": [
            "$7$",
            "$14$",
            "$\\sqrt7$",
            "$49$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le carré scalaire est le carré de la longueur."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q3",
          "type": "mcq",
          "prompt": "$H$ est le projeté orthogonal de $C$ sur $(AB)$. À quoi est égal $\\vec{AB}\\cdot\\vec{AC}$ ?",
          "options": [
            "$AB\\times AC$",
            "$\\overline{AB}\\times\\overline{HC}$",
            "$\\overline{AB}\\times\\overline{AH}$",
            "$AC\\times CH$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On remplace $C$ par son projeté $H$ sur la droite $(AB)$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q4",
          "type": "mcq",
          "prompt": "$ABCD$ est un carré de côté $4$. Que vaut $\\vec{AB}\\cdot\\vec{AC}$ ?",
          "options": [
            "$4\\sqrt2$",
            "$16$",
            "$16\\sqrt2$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\overline{AB}\\times\\overline{AB}=4\\times4=16$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q5",
          "type": "mcq",
          "prompt": "$ABCD$ est un carré de côté $4$. Que vaut $\\vec{AB}\\cdot\\vec{AD}$ ?",
          "options": [
            "$0$",
            "$16$",
            "$-16$",
            "$8$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les côtés $[AB]$ et $[AD]$ sont perpendiculaires."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q6",
          "type": "mcq",
          "prompt": "$AB=4$ et le projeté $H$ de $C$ sur $(AB)$ vérifie $\\overline{AH}=-2$. Que vaut $\\vec{AB}\\cdot\\vec{AC}$ ?",
          "options": [
            "$-8$",
            "$8$",
            "$2$",
            "$-2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$4\\times(-2)=-8$ : l'angle $\\widehat{BAC}$ est obtus."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p02_q7",
          "type": "mcq",
          "prompt": "$\\overline{BC}=4$. Sur la droite $(BC)$, le projeté de $C$ est $C$ et celui de $I$ est $K$, avec $\\overline{CK}=-6$. Que vaut $\\vec{BC}\\cdot\\vec{CI}$ ?",
          "options": [
            "$24$",
            "$-24$",
            "$-10$",
            "$2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\overline{BC}\\times\\overline{CK}=4\\times(-6)=-24$."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03",
      "order": 3,
      "title": "Vecteurs orthogonaux",
      "summary": "Produit scalaire nul et perpendicularité.",
      "conceptExplanation": "Propriété : $\\vec u$ et $\\vec v$ sont orthogonaux si et seulement si $\\vec u\\cdot\\vec v=0$. (Le vecteur nul est orthogonal à tout vecteur.)\n\nConséquences :\n- deux droites de vecteurs directeurs $\\vec u$ et $\\vec v$ sont perpendiculaires ⇔ $\\vec u\\cdot\\vec v=0$ ;\n- pour $A\\neq B$ et $C\\neq D$ : $(AB)\\perp(CD)$ ⇔ $\\vec{AB}\\cdot\\vec{CD}=0$ ;\n- pour $A\\neq B$ : un point $M$ appartient au cercle de diamètre $[AB]$ ⇔ $\\vec{MA}\\cdot\\vec{MB}=0$.\n\nExemple : dans un carré $ABCD$, les diagonales sont perpendiculaires, donc $\\vec{AC}\\cdot\\vec{DB}=0$.\n\nLe produit scalaire est l'outil le plus rapide pour démontrer une perpendicularité.",
      "keyRule": "$\\vec u\\perp\\vec v$ ⇔ $\\vec u\\cdot\\vec v=0$. $(AB)\\perp(CD)$ ⇔ $\\vec{AB}\\cdot\\vec{CD}=0$. $M$ sur le cercle de diamètre $[AB]$ ⇔ $\\vec{MA}\\cdot\\vec{MB}=0$.",
      "formulas": [],
      "workedExample": {
        "title": "Démontrer une perpendicularité",
        "statement": "On sait que $\\vec{AM}\\cdot\\vec{AC}=1$ et $\\vec{AB}\\cdot\\vec{AC}=1$. Démontre que $(MB)\\perp(AC)$.",
        "methodSteps": [
          "$\\vec{MB}=\\vec{MA}+\\vec{AB}$ (Chasles).",
          "$\\vec{MB}\\cdot\\vec{AC}=-\\vec{AM}\\cdot\\vec{AC}+\\vec{AB}\\cdot\\vec{AC}=-1+1=0$."
        ],
        "conclusion": "Le produit scalaire est nul : $(MB)\\perp(AC)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Orthogonalité",
          "stepTheme": "Orthogonalité",
          "stepBadge": "Orthogonalité",
          "paragraphText": "$\\vec u$ et $\\vec v$ sont orthogonaux si et seulement si $\\vec u\\cdot\\vec v=0$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q1",
            "type": "mcq",
            "prompt": "$\\vec u\\cdot\\vec v=0$ avec $\\vec u$ et $\\vec v$ non nuls. Que peut-on conclure ?",
            "options": [
              "$\\vec u$ et $\\vec v$ sont colinéaires",
              "$\\vec u=\\vec v$",
              "$\\vec u$ et $\\vec v$ sont orthogonaux",
              "$\\vec u$ et $\\vec v$ sont opposés"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un produit scalaire nul traduit un angle droit."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les diagonales du carré",
          "stepTheme": "Les diagonales du carré",
          "stepBadge": "Les diagonales du carré",
          "paragraphText": "Les diagonales d'un carré sont perpendiculaires.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q2",
            "type": "mcq",
            "prompt": "$ABCD$ est un carré. Que vaut $\\vec{AC}\\cdot\\vec{DB}$ ?",
            "options": [
              "$AC^2$",
              "$-AC^2$",
              "$2\\,AB^2$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$(AC)\\perp(DB)$, donc le produit scalaire est nul."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Droites perpendiculaires",
          "stepTheme": "Droites perpendiculaires",
          "stepBadge": "Droites perpendiculaires",
          "paragraphText": "Pour $A\\neq B$ et $C\\neq D$ : $(AB)\\perp(CD)$ ⇔ $\\vec{AB}\\cdot\\vec{CD}=0$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q3",
            "type": "mcq",
            "prompt": "$\\vec{AB}\\cdot\\vec{CD}=0$, avec $A\\neq B$ et $C\\neq D$. Que dire des droites $(AB)$ et $(CD)$ ?",
            "options": [
              "Elles sont parallèles",
              "Elles sont confondues",
              "Elles sont perpendiculaires",
              "Elles sont sécantes en $A$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Produit scalaire nul ⇔ perpendicularité."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le cercle de diamètre $[AB]$",
          "stepTheme": "Le cercle de diamètre $[AB]$",
          "stepBadge": "Le cercle de diamètre $[AB]$",
          "paragraphText": "$M$ appartient au cercle de diamètre $[AB]$ ⇔ $\\vec{MA}\\cdot\\vec{MB}=0$ : l'angle $\\widehat{AMB}$ est droit.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q4",
            "type": "mcq",
            "prompt": "$\\vec{MA}\\cdot\\vec{MB}=0$ avec $A\\neq B$. Où se trouve le point $M$ ?",
            "options": [
              "Sur la médiatrice de $[AB]$",
              "Au milieu de $[AB]$",
              "Sur la droite $(AB)$ seulement",
              "Sur le cercle de diamètre $[AB]$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un angle inscrit droit intercepte un diamètre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Démontrer avec Chasles",
          "stepTheme": "Démontrer avec Chasles",
          "stepBadge": "Démontrer avec Chasles",
          "paragraphText": "Pour montrer $(MB)\\perp(AC)$ : on décompose $\\vec{MB}=\\vec{MA}+\\vec{AB}$ puis on calcule $\\vec{MB}\\cdot\\vec{AC}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q5",
            "type": "mcq",
            "prompt": "$\\vec{AM}\\cdot\\vec{AC}=1$ et $\\vec{AB}\\cdot\\vec{AC}=1$. Que vaut $\\vec{MB}\\cdot\\vec{AC}$ ?",
            "options": [
              "$0$",
              "$2$",
              "$1$",
              "$-2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\vec{MA}\\cdot\\vec{AC}+\\vec{AB}\\cdot\\vec{AC}=-1+1=0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Vecteur nul",
          "stepTheme": "Vecteur nul",
          "stepBadge": "Vecteur nul",
          "paragraphText": "Le vecteur nul est orthogonal à tout vecteur : $\\vec 0\\cdot\\vec v=0$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\vec 0\\cdot\\vec v$ pour n'importe quel vecteur $\\vec v$ ?",
            "options": [
              "$\\|\\vec v\\|$",
              "$0$",
              "$\\|\\vec v\\|^2$",
              "On ne peut pas le calculer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, le produit scalaire avec le vecteur nul est nul."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Orthogonal ≠ colinéaire",
          "stepTheme": "Orthogonal ≠ colinéaire",
          "stepBadge": "Orthogonal ≠ colinéaire",
          "paragraphText": "Ne confonds pas :\n• orthogonaux : $\\vec u\\cdot\\vec v=0$ (angle droit) ;\n• colinéaires : $\\det(\\vec u,\\vec v)=0$ (même direction).",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q7",
            "type": "mcq",
            "prompt": "Quelle condition traduit que $\\vec u$ et $\\vec v$ sont colinéaires ?",
            "options": [
              "$\\vec u\\cdot\\vec v=0$",
              "$\\det(\\vec u,\\vec v)=0$",
              "$\\|\\vec u\\|=\\|\\vec v\\|$",
              "$\\vec u\\cdot\\vec v=1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le produit scalaire teste l'orthogonalité, le déterminant teste la colinéarité."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q1",
          "type": "mcq",
          "prompt": "$\\vec u\\cdot\\vec v=0$ avec $\\vec u$ et $\\vec v$ non nuls. Que peut-on conclure ?",
          "options": [
            "$\\vec u$ et $\\vec v$ sont colinéaires",
            "$\\vec u=\\vec v$",
            "$\\vec u$ et $\\vec v$ sont orthogonaux",
            "$\\vec u$ et $\\vec v$ sont opposés"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un produit scalaire nul traduit un angle droit."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q2",
          "type": "mcq",
          "prompt": "$ABCD$ est un carré. Que vaut $\\vec{AC}\\cdot\\vec{DB}$ ?",
          "options": [
            "$AC^2$",
            "$-AC^2$",
            "$2\\,AB^2$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$(AC)\\perp(DB)$, donc le produit scalaire est nul."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q3",
          "type": "mcq",
          "prompt": "$\\vec{AB}\\cdot\\vec{CD}=0$, avec $A\\neq B$ et $C\\neq D$. Que dire des droites $(AB)$ et $(CD)$ ?",
          "options": [
            "Elles sont parallèles",
            "Elles sont confondues",
            "Elles sont perpendiculaires",
            "Elles sont sécantes en $A$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Produit scalaire nul ⇔ perpendicularité."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q4",
          "type": "mcq",
          "prompt": "$\\vec{MA}\\cdot\\vec{MB}=0$ avec $A\\neq B$. Où se trouve le point $M$ ?",
          "options": [
            "Sur la médiatrice de $[AB]$",
            "Au milieu de $[AB]$",
            "Sur la droite $(AB)$ seulement",
            "Sur le cercle de diamètre $[AB]$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un angle inscrit droit intercepte un diamètre."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q5",
          "type": "mcq",
          "prompt": "$\\vec{AM}\\cdot\\vec{AC}=1$ et $\\vec{AB}\\cdot\\vec{AC}=1$. Que vaut $\\vec{MB}\\cdot\\vec{AC}$ ?",
          "options": [
            "$0$",
            "$2$",
            "$1$",
            "$-2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\vec{MA}\\cdot\\vec{AC}+\\vec{AB}\\cdot\\vec{AC}=-1+1=0$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\vec 0\\cdot\\vec v$ pour n'importe quel vecteur $\\vec v$ ?",
          "options": [
            "$\\|\\vec v\\|$",
            "$0$",
            "$\\|\\vec v\\|^2$",
            "On ne peut pas le calculer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, le produit scalaire avec le vecteur nul est nul."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p03_q7",
          "type": "mcq",
          "prompt": "Quelle condition traduit que $\\vec u$ et $\\vec v$ sont colinéaires ?",
          "options": [
            "$\\vec u\\cdot\\vec v=0$",
            "$\\det(\\vec u,\\vec v)=0$",
            "$\\|\\vec u\\|=\\|\\vec v\\|$",
            "$\\vec u\\cdot\\vec v=1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le produit scalaire teste l'orthogonalité, le déterminant teste la colinéarité."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04",
      "order": 4,
      "title": "Règles de calcul",
      "summary": "Développer, identités remarquables, lien avec les normes.",
      "conceptExplanation": "Pour tous vecteurs $\\vec u$, $\\vec v$, $\\vec w$, $\\vec t$ et tout réel $k$ :\n- $\\vec u\\cdot(\\vec v+\\vec w)=\\vec u\\cdot\\vec v+\\vec u\\cdot\\vec w$ ;\n- $(k\\vec u)\\cdot\\vec v=\\vec u\\cdot(k\\vec v)=k(\\vec u\\cdot\\vec v)$ ;\n- $(\\vec u+\\vec v)\\cdot(\\vec w+\\vec t)=\\vec u\\cdot\\vec w+\\vec u\\cdot\\vec t+\\vec v\\cdot\\vec w+\\vec v\\cdot\\vec t$.\n\nIdentités remarquables :\n- $(\\vec u+\\vec v)^2=\\vec u^{\\,2}+2\\,\\vec u\\cdot\\vec v+\\vec v^{\\,2}$ ;\n- $(\\vec u-\\vec v)^2=\\vec u^{\\,2}-2\\,\\vec u\\cdot\\vec v+\\vec v^{\\,2}$ ;\n- $(\\vec u-\\vec v)\\cdot(\\vec u+\\vec v)=\\vec u^{\\,2}-\\vec v^{\\,2}$.\n\nProduit scalaire et normes :\n$\\vec u\\cdot\\vec v=\\dfrac12\\left(\\|\\vec u+\\vec v\\|^2-\\|\\vec u\\|^2-\\|\\vec v\\|^2\\right)=\\dfrac12\\left(\\|\\vec u\\|^2+\\|\\vec v\\|^2-\\|\\vec u-\\vec v\\|^2\\right)$.\n\nExemple : si $\\|\\vec u\\|=2$, $\\|\\vec v\\|=3$ et $\\vec u\\cdot\\vec v=1$ :\n$(2\\vec u+\\vec v)\\cdot(\\vec u-\\vec v)=2\\vec u^{\\,2}-2\\vec u\\cdot\\vec v+\\vec u\\cdot\\vec v-\\vec v^{\\,2}=8-2+1-9=-2$.",
      "keyRule": "On développe comme en algèbre. $(\\vec u+\\vec v)^2=\\vec u^{\\,2}+2\\vec u\\cdot\\vec v+\\vec v^{\\,2}$. $\\vec u\\cdot\\vec v=\\frac12(\\|\\vec u+\\vec v\\|^2-\\|\\vec u\\|^2-\\|\\vec v\\|^2)$.",
      "formulas": [],
      "workedExample": {
        "title": "Développer",
        "statement": "$\\|\\vec u\\|=2$, $\\|\\vec v\\|=3$ et $\\vec u\\cdot\\vec v=1$. Calcule $(2\\vec u+\\vec v)\\cdot(\\vec u-\\vec v)$.",
        "methodSteps": [
          "On développe : $2\\vec u^{\\,2}-2\\vec u\\cdot\\vec v+\\vec v\\cdot\\vec u-\\vec v^{\\,2}$.",
          "On remplace : $2\\times4-2\\times1+1-9$."
        ],
        "conclusion": "$(2\\vec u+\\vec v)\\cdot(\\vec u-\\vec v)=-2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Distributivité",
          "stepTheme": "Distributivité",
          "stepBadge": "Distributivité",
          "paragraphText": "$\\vec u\\cdot(\\vec v+\\vec w)=\\vec u\\cdot\\vec v+\\vec u\\cdot\\vec w$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q1",
            "type": "mcq",
            "prompt": "$\\vec u\\cdot\\vec v=3$ et $\\vec u\\cdot\\vec w=-5$. Que vaut $\\vec u\\cdot(\\vec v+\\vec w)$ ?",
            "options": [
              "$-2$",
              "$8$",
              "$-15$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$3+(-5)=-2$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les réels sortent",
          "stepTheme": "Les réels sortent",
          "stepBadge": "Les réels sortent",
          "paragraphText": "$(k\\vec u)\\cdot\\vec v=k(\\vec u\\cdot\\vec v)$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q2",
            "type": "mcq",
            "prompt": "$\\vec u\\cdot\\vec v=4$. Que vaut $(-3\\vec u)\\cdot\\vec v$ ?",
            "options": [
              "$12$",
              "$1$",
              "$-7$",
              "$-12$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$-3\\times4=-12$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Développer",
          "stepTheme": "Développer",
          "stepBadge": "Développer",
          "paragraphText": "$\\|\\vec u\\|=2$, $\\|\\vec v\\|=3$, $\\vec u\\cdot\\vec v=1$.\n$(2\\vec u+\\vec v)\\cdot(\\vec u-\\vec v)=2\\vec u^{\\,2}-2\\vec u\\cdot\\vec v+\\vec v\\cdot\\vec u-\\vec v^{\\,2}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q3",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=2$, $\\|\\vec v\\|=3$ et $\\vec u\\cdot\\vec v=1$. Que vaut $(2\\vec u+\\vec v)\\cdot(\\vec u-\\vec v)$ ?",
            "options": [
              "$-4$",
              "$2$",
              "$-2$",
              "$-10$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$8-2+1-9=-2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Identité remarquable",
          "stepTheme": "Identité remarquable",
          "stepBadge": "Identité remarquable",
          "paragraphText": "$(\\vec u+\\vec v)^2=\\vec u^{\\,2}+2\\,\\vec u\\cdot\\vec v+\\vec v^{\\,2}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q4",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=2$, $\\|\\vec v\\|=3$ et $\\vec u\\cdot\\vec v=1$. Que vaut $\\|\\vec u+\\vec v\\|^2$ ?",
            "options": [
              "$13$",
              "$14$",
              "$15$",
              "$25$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$4+2\\times1+9=15$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Différence de carrés",
          "stepTheme": "Différence de carrés",
          "stepBadge": "Différence de carrés",
          "paragraphText": "$(\\vec u-\\vec v)\\cdot(\\vec u+\\vec v)=\\vec u^{\\,2}-\\vec v^{\\,2}=\\|\\vec u\\|^2-\\|\\vec v\\|^2$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q5",
            "type": "mcq",
            "prompt": "$\\|\\vec u\\|=5$ et $\\|\\vec v\\|=4$. Que vaut $(\\vec u-\\vec v)\\cdot(\\vec u+\\vec v)$ ?",
            "options": [
              "$9$",
              "$1$",
              "$41$",
              "$-9$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$25-16=9$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Retrouver $\\vec u\\cdot\\vec v$",
          "stepTheme": "Retrouver $\\vec u\\cdot\\vec v$",
          "stepBadge": "Retrouver $\\vec u\\cdot\\vec v$",
          "paragraphText": "$\\vec u\\cdot\\vec v=\\dfrac12\\left(\\|\\vec u+\\vec v\\|^2-\\|\\vec u\\|^2-\\|\\vec v\\|^2\\right)$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q6",
            "type": "mcq",
            "prompt": "$\\|\\vec u+\\vec v\\|=5$, $\\|\\vec u\\|=3$ et $\\|\\vec v\\|=4$. Que vaut $\\vec u\\cdot\\vec v$ ?",
            "options": [
              "$-2$",
              "$12$",
              "$1$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\frac12(25-9-16)=0$ : les vecteurs sont orthogonaux."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le double produit",
          "stepTheme": "Le double produit",
          "stepBadge": "Le double produit",
          "paragraphText": "Attention à ne pas oublier le double produit :\n$(\\vec u+\\vec v)^2\\neq\\vec u^{\\,2}+\\vec v^{\\,2}$, sauf si $\\vec u\\cdot\\vec v=0$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q7",
            "type": "mcq",
            "prompt": "Dans quel cas a-t-on $\\|\\vec u+\\vec v\\|^2=\\|\\vec u\\|^2+\\|\\vec v\\|^2$ ?",
            "options": [
              "Toujours",
              "Quand $\\vec u$ et $\\vec v$ sont orthogonaux",
              "Quand $\\vec u$ et $\\vec v$ sont colinéaires",
              "Quand $\\|\\vec u\\|=\\|\\vec v\\|$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le théorème de Pythagore sous forme vectorielle."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q1",
          "type": "mcq",
          "prompt": "$\\vec u\\cdot\\vec v=3$ et $\\vec u\\cdot\\vec w=-5$. Que vaut $\\vec u\\cdot(\\vec v+\\vec w)$ ?",
          "options": [
            "$-2$",
            "$8$",
            "$-15$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$3+(-5)=-2$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q2",
          "type": "mcq",
          "prompt": "$\\vec u\\cdot\\vec v=4$. Que vaut $(-3\\vec u)\\cdot\\vec v$ ?",
          "options": [
            "$12$",
            "$1$",
            "$-7$",
            "$-12$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$-3\\times4=-12$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q3",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=2$, $\\|\\vec v\\|=3$ et $\\vec u\\cdot\\vec v=1$. Que vaut $(2\\vec u+\\vec v)\\cdot(\\vec u-\\vec v)$ ?",
          "options": [
            "$-4$",
            "$2$",
            "$-2$",
            "$-10$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$8-2+1-9=-2$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q4",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=2$, $\\|\\vec v\\|=3$ et $\\vec u\\cdot\\vec v=1$. Que vaut $\\|\\vec u+\\vec v\\|^2$ ?",
          "options": [
            "$13$",
            "$14$",
            "$15$",
            "$25$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$4+2\\times1+9=15$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q5",
          "type": "mcq",
          "prompt": "$\\|\\vec u\\|=5$ et $\\|\\vec v\\|=4$. Que vaut $(\\vec u-\\vec v)\\cdot(\\vec u+\\vec v)$ ?",
          "options": [
            "$9$",
            "$1$",
            "$41$",
            "$-9$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$25-16=9$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q6",
          "type": "mcq",
          "prompt": "$\\|\\vec u+\\vec v\\|=5$, $\\|\\vec u\\|=3$ et $\\|\\vec v\\|=4$. Que vaut $\\vec u\\cdot\\vec v$ ?",
          "options": [
            "$-2$",
            "$12$",
            "$1$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\frac12(25-9-16)=0$ : les vecteurs sont orthogonaux."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p04_q7",
          "type": "mcq",
          "prompt": "Dans quel cas a-t-on $\\|\\vec u+\\vec v\\|^2=\\|\\vec u\\|^2+\\|\\vec v\\|^2$ ?",
          "options": [
            "Toujours",
            "Quand $\\vec u$ et $\\vec v$ sont orthogonaux",
            "Quand $\\vec u$ et $\\vec v$ sont colinéaires",
            "Quand $\\|\\vec u\\|=\\|\\vec v\\|$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le théorème de Pythagore sous forme vectorielle."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05",
      "order": 5,
      "title": "Relations métriques dans un triangle",
      "summary": "Calculer avec les longueurs : Al-Kashi, médiane, triangle rectangle.",
      "conceptExplanation": "Dans un triangle $ABC$, on note $a=BC$, $b=AC$, $c=AB$.\n\n1. Produit scalaire avec les côtés : $\\vec{AB}\\cdot\\vec{AC}=\\dfrac12\\left(AB^2+AC^2-BC^2\\right)$.\nExemple : $AB=5$, $AC=6$, $BC=3$ donne $\\vec{AB}\\cdot\\vec{AC}=\\frac12(25+36-9)=26$.\n\n2. Théorème d'Al-Kashi : $a^2=b^2+c^2-2bc\\cos\\widehat A$ (et de même pour $b^2$ et $c^2$).\nExemple : $AB=8$, $AC=3$, $\\widehat{BAC}=\\frac{\\pi}{3}$ : $BC^2=64+9-2\\times8\\times3\\times\\frac12=49$, donc $BC=7$.\nOn en déduit un angle : $\\cos\\widehat A=\\dfrac{b^2+c^2-a^2}{2bc}$.\n\n3. Théorème de la médiane : si $A'$ est le milieu de $[BC]$, $AB^2+AC^2=2AA'^2+\\dfrac{BC^2}{2}$ et $\\vec{AB}\\cdot\\vec{AC}=AA'^2-\\dfrac{BC^2}{4}$.\n\n4. Triangle rectangle : $H$ étant le pied de la hauteur issue de $A$, les affirmations suivantes sont équivalentes : $ABC$ est rectangle en $A$ ; $BC^2=AB^2+AC^2$ ; $BA^2=\\overline{BH}\\times\\overline{BC}$ ; $HA^2=-\\overline{HB}\\times\\overline{HC}$.",
      "keyRule": "$\\vec{AB}\\cdot\\vec{AC}=\\frac12(AB^2+AC^2-BC^2)$. Al-Kashi : $a^2=b^2+c^2-2bc\\cos\\widehat A$. Médiane : $AB^2+AC^2=2AA'^2+\\frac{BC^2}{2}$.",
      "formulas": [],
      "workedExample": {
        "title": "Trouver un cosinus",
        "statement": "$ABC$ est un triangle avec $AB=\\sqrt7$, $AC=2$ et $BC=3$. Calcule $\\cos\\widehat{BAC}$.",
        "methodSteps": [
          "Al-Kashi : $BC^2=AB^2+AC^2-2\\times AB\\times AC\\times\\cos\\widehat A$.",
          "$9=7+4-4\\sqrt7\\cos\\widehat A$, donc $4\\sqrt7\\cos\\widehat A=2$."
        ],
        "conclusion": "$\\cos\\widehat{BAC}=\\dfrac{1}{2\\sqrt7}=\\dfrac{\\sqrt7}{14}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Avec les trois côtés",
          "stepTheme": "Avec les trois côtés",
          "stepBadge": "Avec les trois côtés",
          "paragraphText": "$\\vec{AB}\\cdot\\vec{AC}=\\dfrac12\\left(AB^2+AC^2-BC^2\\right)$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q1",
            "type": "mcq",
            "prompt": "$AB=5$, $AC=6$ et $BC=3$. Que vaut $\\vec{AB}\\cdot\\vec{AC}$ ?",
            "options": [
              "$35$",
              "$26$",
              "$52$",
              "$13$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\frac12(25+36-9)=\\frac{52}{2}=26$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le théorème d'Al-Kashi",
          "stepTheme": "Le théorème d'Al-Kashi",
          "stepBadge": "Le théorème d'Al-Kashi",
          "paragraphText": "Dans un triangle : $BC^2=AB^2+AC^2-2\\times AB\\times AC\\times\\cos\\widehat{BAC}$.\nC'est Pythagore « corrigé » par le cosinus.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q2",
            "type": "mcq",
            "prompt": "$AB=8$, $AC=3$ et $\\widehat{BAC}=\\dfrac{\\pi}{3}$. Que vaut $BC$ ?",
            "options": [
              "$\\sqrt{73}$",
              "$11$",
              "$5$",
              "$7$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$BC^2=64+9-2\\times8\\times3\\times\\frac12=49$, donc $BC=7$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calculer un cosinus",
          "stepTheme": "Calculer un cosinus",
          "stepBadge": "Calculer un cosinus",
          "paragraphText": "On isole le cosinus : $\\cos\\widehat A=\\dfrac{b^2+c^2-a^2}{2bc}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q3",
            "type": "mcq",
            "prompt": "$AB=\\sqrt7$, $AC=2$ et $BC=3$. Que vaut $\\cos\\widehat{BAC}$ ?",
            "options": [
              "$\\dfrac{\\sqrt7}{14}$",
              "$\\dfrac{\\sqrt7}{7}$",
              "$\\dfrac{1}{4}$",
              "$\\dfrac{2}{7}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{7+4-9}{2\\times2\\times\\sqrt7}=\\frac{2}{4\\sqrt7}=\\frac{1}{2\\sqrt7}=\\frac{\\sqrt7}{14}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le théorème de la médiane",
          "stepTheme": "Le théorème de la médiane",
          "stepBadge": "Le théorème de la médiane",
          "paragraphText": "$A'$ milieu de $[BC]$ : $AB^2+AC^2=2AA'^2+\\dfrac{BC^2}{2}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q4",
            "type": "mcq",
            "prompt": "$AB=8$, $AC=9$, $BC=10$ et $A'$ milieu de $[BC]$. Que vaut $AA'^2$ ?",
            "options": [
              "$\\dfrac{145}{2}$",
              "$95$",
              "$\\dfrac{95}{2}$",
              "$\\dfrac{45}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$2AA'^2=64+81-50=95$, donc $AA'^2=\\frac{95}{2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Médiane et produit scalaire",
          "stepTheme": "Médiane et produit scalaire",
          "stepBadge": "Médiane et produit scalaire",
          "paragraphText": "$\\vec{AB}\\cdot\\vec{AC}=AA'^2-\\dfrac{BC^2}{4}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q5",
            "type": "mcq",
            "prompt": "$AA'^2=\\dfrac{95}{2}$ et $BC=10$. Que vaut $\\vec{AB}\\cdot\\vec{AC}$ ?",
            "options": [
              "$72{,}5$",
              "$47{,}5$",
              "$25$",
              "$22{,}5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$47{,}5-\\frac{100}{4}=47{,}5-25=22{,}5$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Reconnaître un triangle rectangle",
          "stepTheme": "Reconnaître un triangle rectangle",
          "stepBadge": "Reconnaître un triangle rectangle",
          "paragraphText": "$H$ pied de la hauteur issue de $A$. $ABC$ est rectangle en $A$ ⇔ $BA^2=\\overline{BH}\\times\\overline{BC}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q6",
            "type": "mcq",
            "prompt": "$AB=6$, $BC=9$ et $BH=4$ ($H$ entre $B$ et $C$). Le triangle $ABC$ est-il rectangle en $A$ ?",
            "options": [
              "Non, car $AB^2+BH^2$ ne vaut pas $BC^2$",
              "Oui, car $AB+BH=10$ dépasse $BC$",
              "Oui, car $AB^2=\\overline{BH}\\times\\overline{BC}=36$",
              "On ne peut pas savoir sans l'angle $\\widehat A$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$6^2=36$ et $4\\times9=36$ : l'égalité est vérifiée."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le facteur 2",
          "stepTheme": "Le facteur 2",
          "stepBadge": "Le facteur 2",
          "paragraphText": "Dans Al-Kashi, ne pas oublier le facteur $2$ : $-2\\,bc\\cos\\widehat A$.\nC'est l'erreur la plus fréquente.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q7",
            "type": "mcq",
            "prompt": "Quelle est l'écriture correcte du théorème d'Al-Kashi ?",
            "options": [
              "$a^2=b^2+c^2-bc\\cos\\widehat A$",
              "$a^2=b^2+c^2-2bc\\cos\\widehat A$",
              "$a^2=b^2+c^2+2bc\\cos\\widehat A$",
              "$a=b+c-2bc\\cos\\widehat A$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $\\widehat A=\\frac{\\pi}{2}$, on retrouve Pythagore."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q1",
          "type": "mcq",
          "prompt": "$AB=5$, $AC=6$ et $BC=3$. Que vaut $\\vec{AB}\\cdot\\vec{AC}$ ?",
          "options": [
            "$35$",
            "$26$",
            "$52$",
            "$13$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\frac12(25+36-9)=\\frac{52}{2}=26$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q2",
          "type": "mcq",
          "prompt": "$AB=8$, $AC=3$ et $\\widehat{BAC}=\\dfrac{\\pi}{3}$. Que vaut $BC$ ?",
          "options": [
            "$\\sqrt{73}$",
            "$11$",
            "$5$",
            "$7$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$BC^2=64+9-2\\times8\\times3\\times\\frac12=49$, donc $BC=7$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q3",
          "type": "mcq",
          "prompt": "$AB=\\sqrt7$, $AC=2$ et $BC=3$. Que vaut $\\cos\\widehat{BAC}$ ?",
          "options": [
            "$\\dfrac{\\sqrt7}{14}$",
            "$\\dfrac{\\sqrt7}{7}$",
            "$\\dfrac{1}{4}$",
            "$\\dfrac{2}{7}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{7+4-9}{2\\times2\\times\\sqrt7}=\\frac{2}{4\\sqrt7}=\\frac{1}{2\\sqrt7}=\\frac{\\sqrt7}{14}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q4",
          "type": "mcq",
          "prompt": "$AB=8$, $AC=9$, $BC=10$ et $A'$ milieu de $[BC]$. Que vaut $AA'^2$ ?",
          "options": [
            "$\\dfrac{145}{2}$",
            "$95$",
            "$\\dfrac{95}{2}$",
            "$\\dfrac{45}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$2AA'^2=64+81-50=95$, donc $AA'^2=\\frac{95}{2}$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q5",
          "type": "mcq",
          "prompt": "$AA'^2=\\dfrac{95}{2}$ et $BC=10$. Que vaut $\\vec{AB}\\cdot\\vec{AC}$ ?",
          "options": [
            "$72{,}5$",
            "$47{,}5$",
            "$25$",
            "$22{,}5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$47{,}5-\\frac{100}{4}=47{,}5-25=22{,}5$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q6",
          "type": "mcq",
          "prompt": "$AB=6$, $BC=9$ et $BH=4$ ($H$ entre $B$ et $C$). Le triangle $ABC$ est-il rectangle en $A$ ?",
          "options": [
            "Non, car $AB^2+BH^2$ ne vaut pas $BC^2$",
            "Oui, car $AB+BH=10$ dépasse $BC$",
            "Oui, car $AB^2=\\overline{BH}\\times\\overline{BC}=36$",
            "On ne peut pas savoir sans l'angle $\\widehat A$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$6^2=36$ et $4\\times9=36$ : l'égalité est vérifiée."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p05_q7",
          "type": "mcq",
          "prompt": "Quelle est l'écriture correcte du théorème d'Al-Kashi ?",
          "options": [
            "$a^2=b^2+c^2-bc\\cos\\widehat A$",
            "$a^2=b^2+c^2-2bc\\cos\\widehat A$",
            "$a^2=b^2+c^2+2bc\\cos\\widehat A$",
            "$a=b+c-2bc\\cos\\widehat A$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $\\widehat A=\\frac{\\pi}{2}$, on retrouve Pythagore."
        }
      ]
    },
    {
      "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06",
      "order": 6,
      "title": "Produit scalaire avec des coordonnées",
      "summary": "Calculer, vérifier un angle droit, trouver un angle.",
      "conceptExplanation": "Dans une base orthonormée $(\\vec i,\\vec j)$, si $\\vec u(x\\,;y)$ et $\\vec v(x'\\,;y')$, alors :\n$\\vec u\\cdot\\vec v=xx'+yy'$.\n(Attention : cette formule n'est valable que dans une base orthonormée.)\n\nExemples :\n- $\\vec u(2\\,;-3)$ et $\\vec v(-5\\,;2)$ : $\\vec u\\cdot\\vec v=2\\times(-5)+(-3)\\times 2=-16$ ;\n- $\\vec u(1-\\sqrt2\\,;2-\\sqrt3)$ et $\\vec v(1+\\sqrt2\\,;2+\\sqrt3)$ : $\\vec u\\cdot\\vec v=(1-2)+(4-3)=0$, les vecteurs sont orthogonaux.\n\nCalculer un angle : on calcule le produit scalaire de deux façons.\nAvec $A(1\\,;2)$, $B(4\\,;-3)$, $C(-1\\,;3)$ : $\\vec{AB}(3\\,;-5)$, $\\vec{AC}(-2\\,;1)$.\n- avec les coordonnées : $\\vec{AB}\\cdot\\vec{AC}=-6-5=-11$ ;\n- avec la définition : $\\vec{AB}\\cdot\\vec{AC}=AB\\times AC\\times\\cos\\widehat{BAC}=\\sqrt{34}\\times\\sqrt5\\times\\cos\\widehat{BAC}=\\sqrt{170}\\cos\\widehat{BAC}$.\nDonc $\\cos\\widehat{BAC}=\\dfrac{-11}{\\sqrt{170}}\\approx-0{,}84$ et $\\widehat{BAC}\\approx 147{,}5°$.",
      "keyRule": "Base orthonormée : $\\vec u\\cdot\\vec v=xx'+yy'$. Pour un angle : $\\cos\\widehat{BAC}=\\dfrac{\\vec{AB}\\cdot\\vec{AC}}{AB\\times AC}$.",
      "formulas": [],
      "workedExample": {
        "title": "L'angle du terrain",
        "statement": "$ABCD$ est un carré de côté $a$, $I$ milieu de $[BC]$ et $J$ milieu de $[CD]$. Calcule $\\cos\\widehat{IAJ}$.",
        "methodSteps": [
          "$\\vec{AI}=\\vec{AB}+\\frac12\\vec{AD}$ et $\\vec{AJ}=\\vec{AD}+\\frac12\\vec{AB}$, donc $\\vec{AI}\\cdot\\vec{AJ}=\\frac12a^2+\\frac12a^2=a^2$.",
          "Le triangle $ABI$ est rectangle en $B$ : $AI=AJ=\\frac{a\\sqrt5}{2}$, donc $\\vec{AI}\\cdot\\vec{AJ}=\\frac{5a^2}{4}\\cos\\widehat{IAJ}$."
        ],
        "conclusion": "$\\cos\\widehat{IAJ}=\\dfrac45=0{,}8$, soit $\\widehat{IAJ}\\approx 36{,}87°$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule $xx'+yy'$",
          "stepTheme": "La formule $xx'+yy'$",
          "stepBadge": "La formule $xx'+yy'$",
          "paragraphText": "Dans une base orthonormée : $\\vec u(x\\,;y)$, $\\vec v(x'\\,;y')$ ⇒ $\\vec u\\cdot\\vec v=xx'+yy'$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q1",
            "type": "mcq",
            "prompt": "Dans une base orthonormée, $\\vec u(2\\,;-3)$ et $\\vec v(-5\\,;2)$. Que vaut $\\vec u\\cdot\\vec v$ ?",
            "options": [
              "$-16$",
              "$-4$",
              "$4$",
              "$-11$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2\\times(-5)+(-3)\\times2=-10-6=-16$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Tester un angle droit",
          "stepTheme": "Tester un angle droit",
          "stepBadge": "Tester un angle droit",
          "paragraphText": "Si $xx'+yy'=0$, les vecteurs sont orthogonaux.\n$(1-\\sqrt2)(1+\\sqrt2)+(2-\\sqrt3)(2+\\sqrt3)=(1-2)+(4-3)$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q2",
            "type": "mcq",
            "prompt": "$\\vec u(1-\\sqrt2\\,;2-\\sqrt3)$ et $\\vec v(1+\\sqrt2\\,;2+\\sqrt3)$. Que vaut $\\vec u\\cdot\\vec v$ ?",
            "options": [
              "$0$",
              "$2$",
              "$-2$",
              "$8$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Identité $(a-b)(a+b)=a^2-b^2$ : $-1+1=0$, donc $\\vec u\\perp\\vec v$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Base orthonormée seulement",
          "stepTheme": "Base orthonormée seulement",
          "stepBadge": "Base orthonormée seulement",
          "paragraphText": "La formule $xx'+yy'$ n'est valable que dans une base orthonormée.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q3",
            "type": "mcq",
            "prompt": "Dans quelle base peut-on utiliser $\\vec u\\cdot\\vec v=xx'+yy'$ ?",
            "options": [
              "Dans n'importe quelle base",
              "Dans une base orthonormée",
              "Dans une base de vecteurs colinéaires",
              "Seulement si $\\vec u=\\vec v$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il faut $\\vec i\\perp\\vec j$ et $\\|\\vec i\\|=\\|\\vec j\\|=1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer un vecteur puis le produit",
          "stepTheme": "Calculer un vecteur puis le produit",
          "stepBadge": "Calculer un vecteur puis le produit",
          "paragraphText": "$A(1\\,;2)$, $B(4\\,;-3)$, $C(-1\\,;3)$ : $\\vec{AB}(3\\,;-5)$ et $\\vec{AC}(-2\\,;1)$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q4",
            "type": "mcq",
            "prompt": "$A(1\\,;2)$, $B(4\\,;-3)$ et $C(-1\\,;3)$. Que vaut $\\vec{AB}\\cdot\\vec{AC}$ ?",
            "options": [
              "$-1$",
              "$11$",
              "$-11$",
              "$-6$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$3\\times(-2)+(-5)\\times1=-6-5=-11$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Trouver un angle",
          "stepTheme": "Trouver un angle",
          "stepBadge": "Trouver un angle",
          "paragraphText": "On calcule le produit scalaire de deux façons :\n$\\cos\\widehat{BAC}=\\dfrac{\\vec{AB}\\cdot\\vec{AC}}{AB\\times AC}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q5",
            "type": "mcq",
            "prompt": "$\\vec{AB}\\cdot\\vec{AC}=-11$, $AB=\\sqrt{34}$ et $AC=\\sqrt5$. Quelle est la valeur approchée de $\\widehat{BAC}$ ?",
            "options": [
              "$32{,}5°$",
              "$122{,}5°$",
              "$90°$",
              "$147{,}5°$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\cos\\widehat{BAC}=\\frac{-11}{\\sqrt{170}}\\approx-0{,}84$ : l'angle est obtus, environ $147{,}5°$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'angle du terrain",
          "stepTheme": "L'angle du terrain",
          "stepBadge": "L'angle du terrain",
          "paragraphText": "Dans le carré de côté $a$ : $\\vec{AI}\\cdot\\vec{AJ}=a^2$ et $AI=AJ=\\dfrac{a\\sqrt5}{2}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q6",
            "type": "mcq",
            "prompt": "$\\vec{AI}\\cdot\\vec{AJ}=a^2$ et $AI\\times AJ=\\dfrac{5a^2}{4}$. Que vaut $\\cos\\widehat{IAJ}$ ?",
            "options": [
              "$\\dfrac54$",
              "$\\dfrac{\\sqrt5}{2}$",
              "$\\dfrac45$",
              "$\\dfrac12$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$a^2\\div\\frac{5a^2}{4}=\\frac45$, d'où $\\widehat{IAJ}\\approx36{,}87°$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "La norme",
          "stepTheme": "La norme",
          "stepBadge": "La norme",
          "paragraphText": "Avec $\\vec u\\cdot\\vec u=x^2+y^2$, on retrouve $\\|\\vec u\\|=\\sqrt{x^2+y^2}$.",
          "exercise": {
            "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q7",
            "type": "mcq",
            "prompt": "Dans une base orthonormée, $\\vec u(3\\,;-4)$. Que vaut $\\vec u^{\\,2}$ ?",
            "options": [
              "$-7$",
              "$5$",
              "$7$",
              "$25$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$3^2+(-4)^2=9+16=25$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q1",
          "type": "mcq",
          "prompt": "Dans une base orthonormée, $\\vec u(2\\,;-3)$ et $\\vec v(-5\\,;2)$. Que vaut $\\vec u\\cdot\\vec v$ ?",
          "options": [
            "$-16$",
            "$-4$",
            "$4$",
            "$-11$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2\\times(-5)+(-3)\\times2=-10-6=-16$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q2",
          "type": "mcq",
          "prompt": "$\\vec u(1-\\sqrt2\\,;2-\\sqrt3)$ et $\\vec v(1+\\sqrt2\\,;2+\\sqrt3)$. Que vaut $\\vec u\\cdot\\vec v$ ?",
          "options": [
            "$0$",
            "$2$",
            "$-2$",
            "$8$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Identité $(a-b)(a+b)=a^2-b^2$ : $-1+1=0$, donc $\\vec u\\perp\\vec v$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q3",
          "type": "mcq",
          "prompt": "Dans quelle base peut-on utiliser $\\vec u\\cdot\\vec v=xx'+yy'$ ?",
          "options": [
            "Dans n'importe quelle base",
            "Dans une base orthonormée",
            "Dans une base de vecteurs colinéaires",
            "Seulement si $\\vec u=\\vec v$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il faut $\\vec i\\perp\\vec j$ et $\\|\\vec i\\|=\\|\\vec j\\|=1$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q4",
          "type": "mcq",
          "prompt": "$A(1\\,;2)$, $B(4\\,;-3)$ et $C(-1\\,;3)$. Que vaut $\\vec{AB}\\cdot\\vec{AC}$ ?",
          "options": [
            "$-1$",
            "$11$",
            "$-11$",
            "$-6$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$3\\times(-2)+(-5)\\times1=-6-5=-11$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q5",
          "type": "mcq",
          "prompt": "$\\vec{AB}\\cdot\\vec{AC}=-11$, $AB=\\sqrt{34}$ et $AC=\\sqrt5$. Quelle est la valeur approchée de $\\widehat{BAC}$ ?",
          "options": [
            "$32{,}5°$",
            "$122{,}5°$",
            "$90°$",
            "$147{,}5°$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\cos\\widehat{BAC}=\\frac{-11}{\\sqrt{170}}\\approx-0{,}84$ : l'angle est obtus, environ $147{,}5°$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q6",
          "type": "mcq",
          "prompt": "$\\vec{AI}\\cdot\\vec{AJ}=a^2$ et $AI\\times AJ=\\dfrac{5a^2}{4}$. Que vaut $\\cos\\widehat{IAJ}$ ?",
          "options": [
            "$\\dfrac54$",
            "$\\dfrac{\\sqrt5}{2}$",
            "$\\dfrac45$",
            "$\\dfrac12$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$a^2\\div\\frac{5a^2}{4}=\\frac45$, d'où $\\widehat{IAJ}\\approx36{,}87°$."
        },
        {
          "id": "seconde_c_maths_geometrie_l10_produit_scalaire_p06_q7",
          "type": "mcq",
          "prompt": "Dans une base orthonormée, $\\vec u(3\\,;-4)$. Que vaut $\\vec u^{\\,2}$ ?",
          "options": [
            "$-7$",
            "$5$",
            "$7$",
            "$25$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$3^2+(-4)^2=9+16=25$."
        }
      ]
    }
  ]
};
