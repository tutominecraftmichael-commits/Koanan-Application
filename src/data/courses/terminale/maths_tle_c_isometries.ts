import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 14 : isometrie du plan » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2097
// Décalage de numérotation signalé : le PDF intitule la leçon « LEÇON 15 : ISOMETRIES DU PLAN » alors que le cours est la Leçon 14.
export const MATHS_TLE_C_L14_ISOMETRIES: CurriculumChapter = {
  "id": "terminale_c_maths_geometrie_l14_isometries",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 14,
  "title": "Leçon 14 : Isométrie du plan",
  "summary": "Isométries du plan : définition, décomposition en symétries orthogonales, symétrie glissée, classification en déplacements et antidéplacements, et détermination d'une isométrie.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2097",
  "points": [
    {
      "id": "terminale_c_maths_geometrie_l14_isometries_p01",
      "order": 1,
      "title": "Définition et propriétés d'une isométrie",
      "summary": "Une isométrie conserve les distances ; c'est une bijection qui conserve le produit scalaire, le barycentre, le parallélisme, l'orthogonalité, les angles et le contact.",
      "conceptExplanation": "Une isométrie du plan est une application $f$ du plan dans lui-même qui conserve les distances : pour tous points $M$ et $N$, on a $M'N' = MN$, où $M' = f(M)$ et $N' = f(N)$.\\nLes translations, les symétries orthogonales et les rotations sont des isométries. En revanche, une homothétie de rapport $\\lambda \\neq 1$ et $\\lambda \\neq -1$ n'est pas une isométrie : elle multiplie les distances par $|\\lambda|$.\\nUne isométrie est une bijection du plan. Elle conserve le produit scalaire, le barycentre, le parallélisme, l'orthogonalité, les angles géométriques et le contact (deux courbes tangentes restent tangentes). Par exemple, l'image d'un carré par une isométrie est un carré, et l'image d'un triangle équilatéral est un triangle équilatéral.",
      "keyRule": "Isométrie : M'N' = MN pour tous M et N. Elle conserve le produit scalaire, le barycentre, le parallélisme, l'orthogonalité et les angles.",
      "formulas": [
        {
          "name": "Définition d'une isométrie",
          "formula": "M'N' = MN \\quad \\text{pour tous } M, N",
          "note": "M' = f(M), N' = f(N) : la distance est conservée."
        }
      ],
      "workedExample": {
        "title": "Une application qui n'est pas une isométrie",
        "statement": "Soit $ABC$ un triangle équilatéral de côté $a$, $I$ le milieu de $[AB]$, et $f$ une application telle que $f(A) = I$ et $f(B) = C$. L'application $f$ est-elle une isométrie ?",
        "methodSteps": [
          "On a $AI = \\frac{a}{2}$.",
          "L'image du segment $[AB]$ par $f$ est le segment $[IC]$ : $IC = \\frac{a\\sqrt{3}}{2}$.",
          "Or $\\frac{a}{2} \\neq \\frac{a\\sqrt{3}}{2}$ : la distance n'est pas conservée."
        ],
        "conclusion": "L'application f n'est pas une isométrie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Conserver les distances",
          "stepTheme": "Conserver les distances",
          "stepBadge": "Conserver les distances",
          "paragraphText": "• Une isométrie du plan est une application qui conserve les distances : $M'N' = MN$ pour tous points $M$ et $N$.\n• Les translations, les symétries orthogonales et les rotations sont des isométries.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une isométrie du plan ?",
            "options": ["Une application qui conserve les distances", "Une application qui multiplie les distances par 2", "Une application qui conserve les aires mais pas les distances", "Une application qui envoie tout point sur lui-même"],
            "correctAnswerIndex": 0,
            "explanation": "Une isométrie conserve les distances : M'N' = MN pour tous points M et N."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une isométrie est une bijection",
          "stepTheme": "Une isométrie est une bijection",
          "stepBadge": "Une isométrie est une bijection",
          "paragraphText": "• Une isométrie est une bijection du plan : chaque point a exactement un antécédent.\n• Elle conserve le produit scalaire, le barycentre, le parallélisme, l'orthogonalité, les angles géométriques et le contact.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p01_q2",
            "type": "mcq",
            "prompt": "Parmi ces propriétés, laquelle une isométrie ne conserve-t-elle PAS ?",
            "options": ["Le barycentre", "Le parallélisme", "Les angles orientés", "Les distances"],
            "correctAnswerIndex": 2,
            "explanation": "Une isométrie conserve les distances, le barycentre, le parallélisme, l'orthogonalité et les angles géométriques, mais pas les angles orientés : un antidéplacement change le sens des angles orientés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'image d'un carré est un carré",
          "stepTheme": "L'image d'un carré est un carré",
          "stepBadge": "L'image d'un carré est un carré",
          "paragraphText": "• Une isométrie conserve les longueurs et les angles droits : l'image d'un carré est un carré.\n• De même, l'image d'un triangle équilatéral est un triangle équilatéral, et l'image d'un angle droit est un angle droit (jamais un angle plat).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est l'image d'un triangle équilatéral par une isométrie ?",
            "options": ["Un triangle rectangle", "Un triangle équilatéral", "Un triangle quelconque", "Un segment"],
            "correctAnswerIndex": 1,
            "explanation": "Une isométrie conserve les longueurs et les angles : l'image d'un triangle équilatéral est un triangle équilatéral."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Une homothétie n'est pas une isométrie",
          "stepTheme": "Une homothétie n'est pas une isométrie",
          "stepBadge": "Une homothétie n'est pas une isométrie",
          "paragraphText": "• Piège : une homothétie de rapport $\\lambda$ multiplie les distances par $|\\lambda|$ : elle n'est une isométrie que si $|\\lambda| = 1$, c'est-à-dire $\\lambda = 1$ ou $\\lambda = -1$.\n• Une homothétie de rapport $-\\frac{1}{2}$ ne conserve pas les distances : ce n'est pas une isométrie.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p01_q4",
            "type": "mcq",
            "prompt": "Une homothétie de rapport $-\\frac{1}{2}$ est-elle une isométrie ?",
            "options": ["Oui, car le rapport est négatif", "Non, car elle multiplie les distances par $\\frac{1}{2}$", "Oui, car elle conserve les angles", "Non, car elle n'a pas de point fixe"],
            "correctAnswerIndex": 1,
            "explanation": "Une homothétie de rapport λ multiplie les distances par |λ| : ici par 1/2, donc les distances ne sont pas conservées."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Vérifier qu'une application est une isométrie",
          "stepTheme": "Vérifier qu'une application est une isométrie",
          "stepBadge": "Vérifier qu'une application est une isométrie",
          "paragraphText": "• Méthode : pour montrer qu'une application n'est pas une isométrie, il suffit de trouver deux points $M$ et $N$ tels que $M'N' \\neq MN$.\n• Exemple : avec $f(A) = I$ et $f(B) = C$ dans un triangle équilatéral, $AI = \\frac{a}{2}$ mais $IC = \\frac{a\\sqrt{3}}{2}$ : $f$ n'est pas une isométrie.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p01_q5",
            "type": "mcq",
            "prompt": "Soit $ABC$ un triangle équilatéral de côté $a$, $I$ le milieu de $[AB]$. Une application $f$ vérifie $f(A) = B$ et $f(C) = I$. Est-elle une isométrie ?",
            "options": ["Oui", "Non : $AC = a$ mais $BI = \\frac{a}{2}$", "Non : $AC = a$ mais $BI = a$", "On ne peut pas le savoir"],
            "correctAnswerIndex": 1,
            "explanation": "AC = a et f(A)f(C) = BI = a/2 : la distance n'est pas conservée, donc f n'est pas une isométrie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Les isométries usuelles",
          "stepTheme": "Les isométries usuelles",
          "stepBadge": "Les isométries usuelles",
          "paragraphText": "• Les isométries usuelles sont les translations, les symétries orthogonales, les rotations, les symétries centrales et les symétries glissées.\n• Toute isométrie du plan est l'une de ces transformations (c'est le théorème de classification).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p01_q6",
            "type": "mcq",
            "prompt": "Parmi ces applications, laquelle est toujours une isométrie ?",
            "options": ["Une homothétie de rapport $3$", "Une rotation", "Une homothétie de rapport $\\frac{1}{2}$", "Une application qui double les distances"],
            "correctAnswerIndex": 1,
            "explanation": "Une rotation conserve les distances : c'est toujours une isométrie. Une homothétie de rapport 3 ou 1/2 ne conserve pas les distances."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une isométrie du plan ?",
          "options": ["Une application qui conserve les distances", "Une application qui multiplie les distances par 2", "Une application qui conserve les aires mais pas les distances", "Une application qui envoie tout point sur lui-même"],
          "correctAnswerIndex": 0,
          "explanation": "Une isométrie conserve les distances : M'N' = MN pour tous points M et N."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p01_q2",
          "type": "mcq",
          "prompt": "Parmi ces propriétés, laquelle une isométrie ne conserve-t-elle PAS ?",
          "options": ["Le barycentre", "Le parallélisme", "Les angles orientés", "Les distances"],
          "correctAnswerIndex": 2,
          "explanation": "Une isométrie conserve les distances, le barycentre, le parallélisme, l'orthogonalité et les angles géométriques, mais pas les angles orientés : un antidéplacement change le sens des angles orientés."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est l'image d'un triangle équilatéral par une isométrie ?",
          "options": ["Un triangle rectangle", "Un triangle équilatéral", "Un triangle quelconque", "Un segment"],
          "correctAnswerIndex": 1,
          "explanation": "Une isométrie conserve les longueurs et les angles : l'image d'un triangle équilatéral est un triangle équilatéral."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p01_q4",
          "type": "mcq",
          "prompt": "Une homothétie de rapport $-\\frac{1}{2}$ est-elle une isométrie ?",
          "options": ["Oui, car le rapport est négatif", "Non, car elle multiplie les distances par $\\frac{1}{2}$", "Oui, car elle conserve les angles", "Non, car elle n'a pas de point fixe"],
          "correctAnswerIndex": 1,
          "explanation": "Une homothétie de rapport λ multiplie les distances par |λ| : ici par 1/2, donc les distances ne sont pas conservées."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p01_q5",
          "type": "mcq",
          "prompt": "Soit $ABC$ un triangle équilatéral de côté $a$, $I$ le milieu de $[AB]$. Une application $f$ vérifie $f(A) = B$ et $f(C) = I$. Est-elle une isométrie ?",
          "options": ["Oui", "Non : $AC = a$ mais $BI = \\frac{a}{2}$", "Non : $AC = a$ mais $BI = a$", "On ne peut pas le savoir"],
          "correctAnswerIndex": 1,
          "explanation": "AC = a et f(A)f(C) = BI = a/2 : la distance n'est pas conservée, donc f n'est pas une isométrie."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p01_q6",
          "type": "mcq",
          "prompt": "Parmi ces applications, laquelle est toujours une isométrie ?",
          "options": ["Une homothétie de rapport $3$", "Une rotation", "Une homothétie de rapport $\\frac{1}{2}$", "Une application qui double les distances"],
          "correctAnswerIndex": 1,
          "explanation": "Une rotation conserve les distances : c'est toujours une isométrie. Une homothétie de rapport 3 ou 1/2 ne conserve pas les distances."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l14_isometries_p02",
      "order": 2,
      "title": "Translation : composée de deux symétries d'axes parallèles",
      "summary": "La composée de deux symétries orthogonales d'axes parallèles est une translation de vecteur double du vecteur qui joint les deux axes.",
      "conceptExplanation": "Soient $(D)$ et $(\\Delta)$ deux droites parallèles, $H$ un point de $(D)$ et $K$ le projeté orthogonal de $H$ sur $(\\Delta)$. La composée $s_{(\\Delta)} \\circ s_{(D)}$ est la translation de vecteur $2\\overrightarrow{HK}$, et la composée $s_{(D)} \\circ s_{(\\Delta)}$ est la translation de vecteur $2\\overrightarrow{KH}$. L'ordre des symétries change le sens de la translation.\\nRéciproquement, toute translation $t_{\\vec{u}}$ se décompose en deux symétries orthogonales d'axes parallèles : $t_{\\vec{u}} = s_{(D)} \\circ s_{(\\Delta)}$ avec $(D) = t_{\\frac{\\vec{u}}{2}}(\\Delta)$, et aussi $t_{\\vec{u}} = s_{(\\Delta)} \\circ s_{(D')}$ avec $(D') = t_{-\\frac{\\vec{u}}{2}}(\\Delta)$.\\nExemple de la leçon : dans un rectangle $ABCD$, avec $I, J, L, K$ les milieux des côtés, $s_{(IJ)} \\circ s_{(AD)} = t_{\\overrightarrow{AB}}$. Et toute symétrie composée avec elle-même donne l'identité : $s_{(IK)} \\circ s_{(IK)} = \\text{Id}_{\\mathcal{P}}$.",
      "keyRule": "Deux symétries d'axes parallèles : translation de vecteur 2HK→. Toute translation se décompose ainsi.",
      "formulas": [
        {
          "name": "Composée de deux symétries d'axes parallèles",
          "formula": "s_{(\\Delta)} \\circ s_{(D)} = t_{2\\overrightarrow{HK}}",
          "note": "H ∈ (D), K est le projeté orthogonal de H sur (Δ)."
        },
        {
          "name": "Décomposition d'une translation",
          "formula": "t_{\\vec{u}} = s_{(D)} \\circ s_{(\\Delta)}, \\quad (D) = t_{\\frac{\\vec{u}}{2}}(\\Delta)",
          "note": "Toute translation est la composée de deux symétries d'axes parallèles."
        }
      ],
      "workedExample": {
        "title": "Deux symétries parallèles dans un rectangle",
        "statement": "Soit $ABCD$ un rectangle, $I, J, L, K$ les milieux des côtés. Que vaut $s_{(IJ)} \\circ s_{(AD)}$ ?",
        "methodSteps": [
          "Les droites $(AD)$ et $(IJ)$ sont parallèles : leur composée est une translation.",
          "Le vecteur de la translation est le double du vecteur qui joint les deux axes : il vaut $\\overrightarrow{AB}$.",
          "Donc $s_{(IJ)} \\circ s_{(AD)} = t_{\\overrightarrow{AB}}$."
        ],
        "conclusion": "La composée de deux symétries d'axes parallèles est une translation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux axes parallèles donnent une translation",
          "stepTheme": "Deux axes parallèles donnent une translation",
          "stepBadge": "Deux axes parallèles donnent une translation",
          "paragraphText": "• La composée de deux symétries orthogonales d'axes parallèles est une translation.\n• Si $H \\in (D)$ et $K$ est le projeté orthogonal de $H$ sur $(\\Delta)$, alors $s_{(\\Delta)} \\circ s_{(D)} = t_{2\\overrightarrow{HK}}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p02_q1",
            "type": "mcq",
            "prompt": "Que vaut la composée de deux symétries orthogonales d'axes parallèles ?",
            "options": ["Une rotation", "Une translation", "Une symétrie orthogonale", "Une homothétie"],
            "correctAnswerIndex": 1,
            "explanation": "La composée de deux symétries d'axes parallèles est une translation de vecteur double du vecteur qui joint les deux axes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le vecteur de la translation",
          "stepTheme": "Le vecteur de la translation",
          "stepBadge": "Le vecteur de la translation",
          "paragraphText": "• Le vecteur de la translation est le DOUBLE du vecteur qui joint les deux axes : $2\\overrightarrow{HK}$.\n• L'ordre compte : $s_{(\\Delta)} \\circ s_{(D)} = t_{2\\overrightarrow{HK}}$ mais $s_{(D)} \\circ s_{(\\Delta)} = t_{2\\overrightarrow{KH}}$, le vecteur opposé.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p02_q2",
            "type": "mcq",
            "prompt": "Soient $(D)$ et $(D')$ deux droites strictement parallèles, $A \\in (D)$ et $B$ le projeté orthogonal de $A$ sur $(D')$. Que vaut $s_{(D')} \\circ s_{(D)}$ ?",
            "options": ["$t_{\\overrightarrow{AB}}$", "$t_{2\\overrightarrow{AB}}$", "$t_{\\overrightarrow{BA}}$", "$t_{2\\overrightarrow{BA}}$"],
            "correctAnswerIndex": 1,
            "explanation": "La composée s(D')∘s(D) est la translation de vecteur 2AB→ : le double du vecteur qui joint les deux axes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Décomposer une translation",
          "stepTheme": "Décomposer une translation",
          "stepBadge": "Décomposer une translation",
          "paragraphText": "• Toute translation $t_{\\vec{u}}$ se décompose en deux symétries d'axes parallèles : $t_{\\vec{u}} = s_{(D)} \\circ s_{(\\Delta)}$ avec $(D) = t_{\\frac{\\vec{u}}{2}}(\\Delta)$.\n• On peut choisir n'importe quelle droite $(\\Delta)$ perpendiculaire à $\\vec{u}$ comme premier axe.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p02_q3",
            "type": "mcq",
            "prompt": "Toute translation peut-elle se décomposer en deux symétries orthogonales ?",
            "options": ["Non, jamais", "Oui, en deux symétries d'axes parallèles", "Oui, en deux symétries d'axes sécants", "Oui, en deux symétries d'axes confondus"],
            "correctAnswerIndex": 1,
            "explanation": "Toute translation est la composée de deux symétries orthogonales d'axes parallèles."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'exemple du rectangle",
          "stepTheme": "L'exemple du rectangle",
          "stepBadge": "L'exemple du rectangle",
          "paragraphText": "• Exemple de la leçon : dans un rectangle $ABCD$, $s_{(IJ)} \\circ s_{(AD)} = t_{\\overrightarrow{AB}}$.\n• Et $s_{(IK)} \\circ s_{(IK)} = \\text{Id}_{\\mathcal{P}}$ : une symétrie composée avec elle-même donne l'identité.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p02_q4",
            "type": "mcq",
            "prompt": "Que vaut $s_{(D)} \\circ s_{(D)}$ pour une droite $(D)$ ?",
            "options": ["$s_{(D)}$", "L'identité $\\text{Id}_{\\mathcal{P}}$", "Une translation", "Une rotation"],
            "correctAnswerIndex": 1,
            "explanation": "Une symétrie est involutive : appliquée deux fois, elle redonne le point de départ, donc s(D)∘s(D) = Id."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'ordre des symétries compte",
          "stepTheme": "L'ordre des symétries compte",
          "stepBadge": "L'ordre des symétries compte",
          "paragraphText": "• Piège : $s_{(\\Delta)} \\circ s_{(D)}$ et $s_{(D)} \\circ s_{(\\Delta)}$ sont deux translations de vecteurs OPPOSÉS.\n• Il faut appliquer la symétrie de droite en premier : $s_{(\\Delta)} \\circ s_{(D)}$ applique d'abord $s_{(D)}$, puis $s_{(\\Delta)}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p02_q5",
            "type": "mcq",
            "prompt": "Soient $(D)$ et $(\\Delta)$ deux droites parallèles. Que vaut $s_{(D)} \\circ s_{(\\Delta)}$ si $s_{(\\Delta)} \\circ s_{(D)} = t_{2\\overrightarrow{HK}}$ ?",
            "options": ["$t_{2\\overrightarrow{HK}}$", "$t_{2\\overrightarrow{KH}}$", "$t_{\\overrightarrow{HK}}$", "L'identité"],
            "correctAnswerIndex": 1,
            "explanation": "Inverser l'ordre des deux symétries donne la translation de vecteur opposé : t_{2KH→}."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La translation n'a pas de point fixe",
          "stepTheme": "La translation n'a pas de point fixe",
          "stepBadge": "La translation n'a pas de point fixe",
          "paragraphText": "• Une translation de vecteur non nul n'a aucun point fixe : chaque point est déplacé.\n• La seule translation qui a des points fixes est la translation de vecteur nul, c'est-à-dire l'identité.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p02_q6",
            "type": "mcq",
            "prompt": "Une translation de vecteur non nul a-t-elle des points fixes ?",
            "options": ["Oui, un seul", "Oui, une infinité", "Non, aucun", "Oui, deux"],
            "correctAnswerIndex": 2,
            "explanation": "Une translation de vecteur non nul déplace tous les points : elle n'a aucun point fixe."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p02_q1",
          "type": "mcq",
          "prompt": "Que vaut la composée de deux symétries orthogonales d'axes parallèles ?",
          "options": ["Une rotation", "Une translation", "Une symétrie orthogonale", "Une homothétie"],
          "correctAnswerIndex": 1,
          "explanation": "La composée de deux symétries d'axes parallèles est une translation de vecteur double du vecteur qui joint les deux axes."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p02_q2",
          "type": "mcq",
          "prompt": "Soient $(D)$ et $(D')$ deux droites strictement parallèles, $A \\in (D)$ et $B$ le projeté orthogonal de $A$ sur $(D')$. Que vaut $s_{(D')} \\circ s_{(D)}$ ?",
          "options": ["$t_{\\overrightarrow{AB}}$", "$t_{2\\overrightarrow{AB}}$", "$t_{\\overrightarrow{BA}}$", "$t_{2\\overrightarrow{BA}}$"],
          "correctAnswerIndex": 1,
          "explanation": "La composée s(D')∘s(D) est la translation de vecteur 2AB→ : le double du vecteur qui joint les deux axes."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p02_q3",
          "type": "mcq",
          "prompt": "Toute translation peut-elle se décomposer en deux symétries orthogonales ?",
          "options": ["Non, jamais", "Oui, en deux symétries d'axes parallèles", "Oui, en deux symétries d'axes sécants", "Oui, en deux symétries d'axes confondus"],
          "correctAnswerIndex": 1,
          "explanation": "Toute translation est la composée de deux symétries orthogonales d'axes parallèles."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p02_q4",
          "type": "mcq",
          "prompt": "Que vaut $s_{(D)} \\circ s_{(D)}$ pour une droite $(D)$ ?",
          "options": ["$s_{(D)}$", "L'identité $\\text{Id}_{\\mathcal{P}}$", "Une translation", "Une rotation"],
          "correctAnswerIndex": 1,
          "explanation": "Une symétrie est involutive : appliquée deux fois, elle redonne le point de départ, donc s(D)∘s(D) = Id."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p02_q5",
          "type": "mcq",
          "prompt": "Soient $(D)$ et $(\\Delta)$ deux droites parallèles. Que vaut $s_{(D)} \\circ s_{(\\Delta)}$ si $s_{(\\Delta)} \\circ s_{(D)} = t_{2\\overrightarrow{HK}}$ ?",
          "options": ["$t_{2\\overrightarrow{HK}}$", "$t_{2\\overrightarrow{KH}}$", "$t_{\\overrightarrow{HK}}$", "L'identité"],
          "correctAnswerIndex": 1,
          "explanation": "Inverser l'ordre des deux symétries donne la translation de vecteur opposé : t_{2KH→}."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p02_q6",
          "type": "mcq",
          "prompt": "Une translation de vecteur non nul a-t-elle des points fixes ?",
          "options": ["Oui, un seul", "Oui, une infinité", "Non, aucun", "Oui, deux"],
          "correctAnswerIndex": 2,
          "explanation": "Une translation de vecteur non nul déplace tous les points : elle n'a aucun point fixe."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l14_isometries_p03",
      "order": 3,
      "title": "Rotation : composée de deux symétries d'axes sécants",
      "summary": "La composée de deux symétries orthogonales d'axes sécants est une rotation de centre l'intersection des axes et d'angle double de l'angle des axes.",
      "conceptExplanation": "Soient $(D)$ et $(\\Delta)$ deux droites sécantes en $O$, et $\\alpha$ la mesure de l'angle orienté de $(D)$ vers $(\\Delta)$. La composée $s_{(D)} \\circ s_{(\\Delta)}$ est la rotation de centre $O$ et d'angle $2\\alpha$.\\nCas particulier : si les deux axes sont perpendiculaires, alors $2\\alpha = \\pi$ et la composée est la symétrie centrale de centre $O$.\\nRéciproquement, toute rotation $r$ de centre $O$ et d'angle $\\theta$ se décompose en deux symétries orthogonales d'axes sécants en $O$ : $r = s_{(D)} \\circ s_{(\\Delta)}$ avec $(D) = r(O, \\frac{\\theta}{2})(\\Delta)$, et aussi $r = s_{(\\Delta)} \\circ s_{(D')}$ avec $(D') = r(O, -\\frac{\\theta}{2})(\\Delta)$.\\nExemples de la leçon (triangle équilatéral $ABC$ de centre $G$, $I, J, K$ milieux des côtés) : $s_{(AI)} \\circ s_{(AB)} = r(A, \\frac{\\pi}{3})$, $s_{(AI)} \\circ s_{(CK)} = r(G, -\\frac{2\\pi}{3})$, $s_{(CB)} \\circ s_{(AI)} = s_I$.",
      "keyRule": "Deux symétries d'axes sécants en O : rotation de centre O et d'angle 2α (α = angle de (D) vers (Δ)).",
      "formulas": [
        {
          "name": "Composée de deux symétries d'axes sécants",
          "formula": "s_{(D)} \\circ s_{(\\Delta)} = r(O, 2\\alpha)",
          "note": "O est l'intersection des axes, α la mesure de l'angle de (D) vers (Δ)."
        },
        {
          "name": "Axes perpendiculaires",
          "formula": "(D) \\perp (\\Delta) \\implies s_{(D)} \\circ s_{(\\Delta)} = s_O",
          "note": "La composée est la symétrie centrale de centre O."
        }
      ],
      "workedExample": {
        "title": "s(AI)∘s(AB) dans un triangle équilatéral",
        "statement": "Soit $ABC$ un triangle équilatéral, $I$ le milieu de $[BC]$. Que vaut $s_{(AI)} \\circ s_{(AB)}$ ?",
        "methodSteps": [
          "Les droites $(AB)$ et $(AI)$ se coupent en $A$ : leur composée est une rotation de centre $A$.",
          "L'angle orienté de $(AB)$ vers $(AI)$ vaut $\\frac{\\pi}{6}$ (la médiane $AI$ partage l'angle $\\widehat{BAC} = \\frac{\\pi}{3}$ en deux).",
          "L'angle de la rotation est le double : $2 \\times \\frac{\\pi}{6} = \\frac{\\pi}{3}$."
        ],
        "conclusion": "s(AI)∘s(AB) = r(A, π/3)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux axes sécants donnent une rotation",
          "stepTheme": "Deux axes sécants donnent une rotation",
          "stepBadge": "Deux axes sécants donnent une rotation",
          "paragraphText": "• La composée de deux symétries orthogonales d'axes sécants en $O$ est une rotation de centre $O$.\n• Son angle est le double de l'angle orienté du premier axe vers le second : $s_{(D)} \\circ s_{(\\Delta)} = r(O, 2\\alpha)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p03_q1",
            "type": "mcq",
            "prompt": "Que vaut la composée de deux symétries orthogonales d'axes sécants en $O$ ?",
            "options": ["Une translation", "Une rotation de centre $O$", "Une symétrie orthogonale", "Une homothétie"],
            "correctAnswerIndex": 1,
            "explanation": "La composée de deux symétries d'axes sécants en O est une rotation de centre O, d'angle double de l'angle des axes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'angle est le double de l'angle des axes",
          "stepTheme": "L'angle est le double de l'angle des axes",
          "stepBadge": "L'angle est le double de l'angle des axes",
          "paragraphText": "• Si $\\alpha$ est la mesure de l'angle orienté de $(D)$ vers $(\\Delta)$, alors $s_{(D)} \\circ s_{(\\Delta)} = r(O, 2\\alpha)$.\n• L'ordre compte : inverser les deux symétries change le signe de l'angle.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p03_q2",
            "type": "mcq",
            "prompt": "Soient $(D)$ et $(D')$ deux droites sécantes en $K$, avec $\\text{Mes}(\\overrightarrow{KA}, \\overrightarrow{KB}) = \\theta$. Que vaut $s_{(D')} \\circ s_{(D)}$ ?",
            "options": ["$r(K, -\\theta)$", "$r(K, \\theta)$", "$r(K, -2\\theta)$", "$r(K, 2\\theta)$"],
            "correctAnswerIndex": 3,
            "explanation": "L'angle de la rotation est le double de l'angle des axes : r(K, 2θ)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Décomposer une rotation",
          "stepTheme": "Décomposer une rotation",
          "stepBadge": "Décomposer une rotation",
          "paragraphText": "• Toute rotation $r$ de centre $O$ et d'angle $\\theta$ se décompose en deux symétries d'axes sécants en $O$ : $r = s_{(D)} \\circ s_{(\\Delta)}$ avec $(D) = r(O, \\frac{\\theta}{2})(\\Delta)$.\n• On peut choisir n'importe quelle droite $(\\Delta)$ passant par $O$ comme premier axe.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p03_q3",
            "type": "mcq",
            "prompt": "Toute rotation peut-elle se décomposer en deux symétries orthogonales ?",
            "options": ["Non, jamais", "Oui, en deux symétries d'axes sécants en son centre", "Oui, en deux symétries d'axes parallèles", "Oui, en deux symétries d'axes confondus"],
            "correctAnswerIndex": 1,
            "explanation": "Toute rotation est la composée de deux symétries orthogonales d'axes sécants en son centre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "s(AI)∘s(AB) = r(A, π/3)",
          "stepTheme": "s(AI)∘s(AB) = r(A, π/3)",
          "stepBadge": "s(AI)∘s(AB) = r(A, π/3)",
          "paragraphText": "• Exemple de la leçon : dans un triangle équilatéral $ABC$, $s_{(AI)} \\circ s_{(AB)} = r(A, \\frac{\\pi}{3})$.\n• L'angle entre $(AB)$ et $(AI)$ est $\\frac{\\pi}{6}$ (la médiane partage l'angle de $\\frac{\\pi}{3}$ en deux) : l'angle de la rotation est le double, $\\frac{\\pi}{3}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p03_q4",
            "type": "mcq",
            "prompt": "Dans un triangle équilatéral $ABC$, que vaut $s_{(AI)} \\circ s_{(AB)}$ où $I$ est le milieu de $[BC]$ ?",
            "options": ["$r(A, \\frac{\\pi}{6})$", "$r(A, \\frac{\\pi}{3})$", "$r(A, \\frac{2\\pi}{3})$", "$s_A$"],
            "correctAnswerIndex": 1,
            "explanation": "L'angle entre (AB) et (AI) est π/6 : la rotation a pour angle 2×π/6 = π/3, de centre A."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Axes perpendiculaires : symétrie centrale",
          "stepTheme": "Axes perpendiculaires : symétrie centrale",
          "stepBadge": "Axes perpendiculaires : symétrie centrale",
          "paragraphText": "• Piège : si les deux axes sont perpendiculaires, l'angle de la rotation est $2 \\times \\frac{\\pi}{2} = \\pi$ : la composée est une symétrie centrale, pas une rotation d'angle $\\frac{\\pi}{2}$.\n• Une rotation d'angle $\\pi$ est une symétrie centrale.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p03_q5",
            "type": "mcq",
            "prompt": "Que vaut la composée de deux symétries orthogonales d'axes perpendiculaires en $O$ ?",
            "options": ["Une rotation d'angle $\\frac{\\pi}{2}$", "La symétrie centrale de centre $O$", "Une translation", "L'identité"],
            "correctAnswerIndex": 1,
            "explanation": "L'angle de la rotation est le double de π/2, soit π : la composée est la symétrie centrale de centre O."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le centre de la rotation",
          "stepTheme": "Le centre de la rotation",
          "stepBadge": "Le centre de la rotation",
          "paragraphText": "• Le centre de la rotation est le point d'intersection des deux axes de symétrie : c'est le seul point fixe de la rotation (si l'angle n'est pas nul).\n• Une rotation d'angle nul est l'identité.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p03_q6",
            "type": "mcq",
            "prompt": "Quel est le centre de la rotation $s_{(D)} \\circ s_{(\\Delta)}$ ?",
            "options": ["Le milieu de $[HK]$", "Le point d'intersection des axes $(D)$ et $(\\Delta)$", "Un point quelconque de $(D)$", "Le projeté orthogonal de $O$ sur $(D)$"],
            "correctAnswerIndex": 1,
            "explanation": "Le centre de la rotation est le point d'intersection des deux axes de symétrie."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p03_q1",
          "type": "mcq",
          "prompt": "Que vaut la composée de deux symétries orthogonales d'axes sécants en $O$ ?",
          "options": ["Une translation", "Une rotation de centre $O$", "Une symétrie orthogonale", "Une homothétie"],
          "correctAnswerIndex": 1,
          "explanation": "La composée de deux symétries d'axes sécants en O est une rotation de centre O, d'angle double de l'angle des axes."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p03_q2",
          "type": "mcq",
          "prompt": "Soient $(D)$ et $(D')$ deux droites sécantes en $K$, avec $\\text{Mes}(\\overrightarrow{KA}, \\overrightarrow{KB}) = \\theta$. Que vaut $s_{(D')} \\circ s_{(D)}$ ?",
          "options": ["$r(K, -\\theta)$", "$r(K, \\theta)$", "$r(K, -2\\theta)$", "$r(K, 2\\theta)$"],
          "correctAnswerIndex": 3,
          "explanation": "L'angle de la rotation est le double de l'angle des axes : r(K, 2θ)."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p03_q3",
          "type": "mcq",
          "prompt": "Toute rotation peut-elle se décomposer en deux symétries orthogonales ?",
          "options": ["Non, jamais", "Oui, en deux symétries d'axes sécants en son centre", "Oui, en deux symétries d'axes parallèles", "Oui, en deux symétries d'axes confondus"],
          "correctAnswerIndex": 1,
          "explanation": "Toute rotation est la composée de deux symétries orthogonales d'axes sécants en son centre."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p03_q4",
          "type": "mcq",
          "prompt": "Dans un triangle équilatéral $ABC$, que vaut $s_{(AI)} \\circ s_{(AB)}$ où $I$ est le milieu de $[BC]$ ?",
          "options": ["$r(A, \\frac{\\pi}{6})$", "$r(A, \\frac{\\pi}{3})$", "$r(A, \\frac{2\\pi}{3})$", "$s_A$"],
          "correctAnswerIndex": 1,
          "explanation": "L'angle entre (AB) et (AI) est π/6 : la rotation a pour angle 2×π/6 = π/3, de centre A."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p03_q5",
          "type": "mcq",
          "prompt": "Que vaut la composée de deux symétries orthogonales d'axes perpendiculaires en $O$ ?",
          "options": ["Une rotation d'angle $\\frac{\\pi}{2}$", "La symétrie centrale de centre $O$", "Une translation", "L'identité"],
          "correctAnswerIndex": 1,
          "explanation": "L'angle de la rotation est le double de π/2, soit π : la composée est la symétrie centrale de centre O."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p03_q6",
          "type": "mcq",
          "prompt": "Quel est le centre de la rotation $s_{(D)} \\circ s_{(\\Delta)}$ ?",
          "options": ["Le milieu de $[HK]$", "Le point d'intersection des axes $(D)$ et $(\\Delta)$", "Un point quelconque de $(D)$", "Le projeté orthogonal de $O$ sur $(D)$"],
          "correctAnswerIndex": 1,
          "explanation": "Le centre de la rotation est le point d'intersection des deux axes de symétrie."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l14_isometries_p04",
      "order": 4,
      "title": "La symétrie glissée",
      "summary": "Une symétrie glissée est la composée d'une symétrie orthogonale et d'une translation de vecteur directeur de l'axe ; elle n'a aucun point fixe.",
      "conceptExplanation": "Une symétrie glissée d'axe $(D)$ et de vecteur $\\vec{u}$ est la composée $t_{\\vec{u}} \\circ s_{(D)} = s_{(D)} \\circ t_{\\vec{u}}$, où $\\vec{u}$ est un vecteur directeur de $(D)$ : la translation et la symétrie commutent parce que le vecteur est parallèle à l'axe.\\nUne symétrie glissée n'a aucun point fixe. Pour tout point $M$, le milieu du segment $[MM']$ (où $M' = f(M)$) appartient à l'axe $(D)$.\\nLa composée d'une translation $t_{\\vec{u}}$ et d'une symétrie orthogonale $s_{(\\Delta)}$ est une symétrie orthogonale si $\\vec{u}$ est normal à $(\\Delta)$, et une symétrie glissée sinon : on décompose $\\vec{u} = \\vec{n} + \\vec{\\tau}$ avec $\\vec{n}$ normal à $(\\Delta)$ et $\\vec{\\tau}$ directeur de $(\\Delta)$.\\nExemples de la leçon : dans un triangle équilatéral $ABC$ de centre $G$, avec $D$ le symétrique de $B$ par rapport à $(AC)$, la symétrie glissée $f$ d'axe $(IJ)$ et de vecteur $\\overrightarrow{BK}$ vérifie $f(A) = D$, $f(B) = C$ et $f(I) = J$ ; dans un carré $ABCD$ de centre $O$, $g = t_{\\overrightarrow{BC}} \\circ s_{(JL)} = s_{(CD)}$ et $f = t_{\\overrightarrow{AC}} \\circ s_{(KI)}$ est une symétrie glissée.",
      "keyRule": "Symétrie glissée : t_u→∘s(D) avec u→ directeur de (D). Aucun point fixe. Le milieu de [MM'] est sur (D).",
      "formulas": [
        {
          "name": "Symétrie glissée",
          "formula": "f = t_{\\vec{u}} \\circ s_{(D)} = s_{(D)} \\circ t_{\\vec{u}}, \\quad \\vec{u} \\parallel (D)",
          "note": "u est un vecteur directeur de l'axe (D)."
        },
        {
          "name": "Translation + symétrie",
          "formula": "t_{\\vec{u}} \\circ s_{(\\Delta)} = \\text{symétrie si } \\vec{u} \\perp (\\Delta), \\text{ glissée sinon}",
          "note": "On décompose u = n→ + τ→, n→ normal à (Δ), τ→ directeur de (Δ)."
        }
      ],
      "workedExample": {
        "title": "t(BC→)∘s(JL) dans un carré",
        "statement": "Soit $ABCD$ un carré de centre $O$, $I, J, K, L$ les milieux des côtés. Que vaut $g = t_{\\overrightarrow{BC}} \\circ s_{(JL)}$ ?",
        "methodSteps": [
          "Le vecteur $\\overrightarrow{BC}$ est normal à la droite $(JL)$ (qui est parallèle à $(AB)$).",
          "La composée d'une translation de vecteur normal à l'axe et d'une symétrie orthogonale est une symétrie orthogonale.",
          "L'axe de cette symétrie est la droite $(CD)$ : donc $g = s_{(CD)}$."
        ],
        "conclusion": "g = s(CD) : une symétrie orthogonale, pas une glissée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition de la symétrie glissée",
          "stepTheme": "Définition de la symétrie glissée",
          "stepBadge": "Définition de la symétrie glissée",
          "paragraphText": "• Une symétrie glissée d'axe $(D)$ et de vecteur $\\vec{u}$ est $f = t_{\\vec{u}} \\circ s_{(D)} = s_{(D)} \\circ t_{\\vec{u}}$, où $\\vec{u}$ est un vecteur directeur de $(D)$.\n• La translation et la symétrie commutent parce que le vecteur est parallèle à l'axe.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p04_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une symétrie glissée d'axe $(D)$ et de vecteur $\\vec{u}$ ?",
            "options": ["$t_{\\vec{u}} \\circ s_{(D)}$ avec $\\vec{u}$ directeur de $(D)$", "$t_{\\vec{u}} \\circ s_{(D)}$ avec $\\vec{u}$ normal à $(D)$", "Une rotation de centre un point de $(D)$", "Une homothétie de centre un point de $(D)$"],
            "correctAnswerIndex": 0,
            "explanation": "Une symétrie glissée est la composée d'une symétrie orthogonale et d'une translation de vecteur directeur de l'axe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Aucun point fixe",
          "stepTheme": "Aucun point fixe",
          "stepBadge": "Aucun point fixe",
          "paragraphText": "• Une symétrie glissée n'a aucun point fixe : chaque point est déplacé.\n• Pour tout point $M$, le milieu du segment $[MM']$ appartient à l'axe $(D)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p04_q2",
            "type": "mcq",
            "prompt": "Une symétrie glissée a-t-elle des points fixes ?",
            "options": ["Oui, tous les points de l'axe", "Oui, un seul", "Non, aucun", "Oui, deux"],
            "correctAnswerIndex": 2,
            "explanation": "Une symétrie glissée n'a aucun point fixe : la translation de vecteur non nul déplace tous les points."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Décomposer le vecteur u",
          "stepTheme": "Décomposer le vecteur u",
          "stepBadge": "Décomposer le vecteur u",
          "paragraphText": "• Méthode : pour $f = t_{\\vec{u}} \\circ s_{(\\Delta)}$, on décompose $\\vec{u} = \\vec{n} + \\vec{\\tau}$ avec $\\vec{n}$ normal à $(\\Delta)$ et $\\vec{\\tau}$ directeur de $(\\Delta)$.\n• Si $\\vec{\\tau} = \\vec{0}$ (c'est-à-dire $\\vec{u}$ normal à $(\\Delta)$), $f$ est une symétrie orthogonale ; sinon, $f$ est une symétrie glissée.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p04_q3",
            "type": "mcq",
            "prompt": "La composée $t_{\\vec{u}} \\circ s_{(\\Delta)}$ est une symétrie orthogonale quand :",
            "options": ["$\\vec{u}$ est directeur de $(\\Delta)$", "$\\vec{u}$ est normal à $(\\Delta)$", "$\\vec{u}$ est nul", "$\\vec{u}$ est quelconque"],
            "correctAnswerIndex": 1,
            "explanation": "Si u est normal à (Δ), la translation ne fait que déplacer l'axe : la composée est une symétrie orthogonale. Sinon, c'est une symétrie glissée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La glissée du triangle équilatéral",
          "stepTheme": "La glissée du triangle équilatéral",
          "stepBadge": "La glissée du triangle équilatéral",
          "paragraphText": "• Exemple de la leçon : dans un triangle équilatéral $ABC$ de centre $G$, avec $D$ le symétrique de $B$ par rapport à $(AC)$, la symétrie glissée $f$ d'axe $(IJ)$ et de vecteur $\\overrightarrow{BK}$ vérifie $f(A) = D$, $f(B) = C$ et $f(I) = J$.\n• On peut aussi vérifier que $g$ avec $g(C) = B$ et $g(L) = K$ est la glissée d'axe $(IJ)$ et de vecteur $\\overrightarrow{KB}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p04_q4",
            "type": "mcq",
            "prompt": "Dans l'exemple de la leçon, la symétrie glissée $f$ d'axe $(IJ)$ et de vecteur $\\overrightarrow{BK}$ vérifie :",
            "options": ["$f(A) = B$ et $f(B) = A$", "$f(A) = D$ et $f(B) = C$", "$f(A) = A$ et $f(B) = B$", "$f(A) = C$ et $f(B) = D$"],
            "correctAnswerIndex": 1,
            "explanation": "La symétrie glissée f d'axe (IJ) et de vecteur BK→ envoie A sur D et B sur C."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Glissée n'est pas symétrie orthogonale",
          "stepTheme": "Glissée n'est pas symétrie orthogonale",
          "stepBadge": "Glissée n'est pas symétrie orthogonale",
          "paragraphText": "• Piège : une symétrie glissée ressemble à une symétrie orthogonale, mais elle n'a aucun point fixe, alors qu'une symétrie orthogonale fixe tous les points de son axe.\n• C'est la translation le long de l'axe qui fait la différence : elle déplace les points de l'axe.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p04_q5",
            "type": "mcq",
            "prompt": "Quelle différence y a-t-il entre une symétrie orthogonale et une symétrie glissée ?",
            "options": ["La glissée conserve les distances, la symétrie non", "La symétrie fixe les points de son axe, la glissée n'a aucun point fixe", "La glissée est un déplacement, la symétrie non", "Il n'y a aucune différence"],
            "correctAnswerIndex": 1,
            "explanation": "Une symétrie orthogonale fixe tous les points de son axe ; une symétrie glissée n'a aucun point fixe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "t(AC→)∘s(KI) est une glissée",
          "stepTheme": "t(AC→)∘s(KI) est une glissée",
          "stepBadge": "t(AC→)∘s(KI) est une glissée",
          "paragraphText": "• Exemple de la leçon : dans un carré $ABCD$ de centre $O$, $f = t_{\\overrightarrow{AC}} \\circ s_{(KI)}$ est une symétrie glissée.\n• En effet, le vecteur $\\overrightarrow{AC}$ n'est pas normal à $(KI)$ : il a une composante le long de l'axe.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p04_q6",
            "type": "mcq",
            "prompt": "Dans un carré $ABCD$ de centre $O$, la composée $f = t_{\\overrightarrow{AC}} \\circ s_{(KI)}$ est :",
            "options": ["Une symétrie orthogonale", "Une symétrie glissée", "Une rotation", "Une translation"],
            "correctAnswerIndex": 1,
            "explanation": "Le vecteur AC→ n'est pas normal à (KI) : la composée est une symétrie glissée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p04_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une symétrie glissée d'axe $(D)$ et de vecteur $\\vec{u}$ ?",
          "options": ["$t_{\\vec{u}} \\circ s_{(D)}$ avec $\\vec{u}$ directeur de $(D)$", "$t_{\\vec{u}} \\circ s_{(D)}$ avec $\\vec{u}$ normal à $(D)$", "Une rotation de centre un point de $(D)$", "Une homothétie de centre un point de $(D)$"],
          "correctAnswerIndex": 0,
          "explanation": "Une symétrie glissée est la composée d'une symétrie orthogonale et d'une translation de vecteur directeur de l'axe."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p04_q2",
          "type": "mcq",
          "prompt": "Une symétrie glissée a-t-elle des points fixes ?",
          "options": ["Oui, tous les points de l'axe", "Oui, un seul", "Non, aucun", "Oui, deux"],
          "correctAnswerIndex": 2,
          "explanation": "Une symétrie glissée n'a aucun point fixe : la translation de vecteur non nul déplace tous les points."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p04_q3",
          "type": "mcq",
          "prompt": "La composée $t_{\\vec{u}} \\circ s_{(\\Delta)}$ est une symétrie orthogonale quand :",
          "options": ["$\\vec{u}$ est directeur de $(\\Delta)$", "$\\vec{u}$ est normal à $(\\Delta)$", "$\\vec{u}$ est nul", "$\\vec{u}$ est quelconque"],
          "correctAnswerIndex": 1,
          "explanation": "Si u est normal à (Δ), la translation ne fait que déplacer l'axe : la composée est une symétrie orthogonale. Sinon, c'est une symétrie glissée."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p04_q4",
          "type": "mcq",
          "prompt": "Dans l'exemple de la leçon, la symétrie glissée $f$ d'axe $(IJ)$ et de vecteur $\\overrightarrow{BK}$ vérifie :",
          "options": ["$f(A) = B$ et $f(B) = A$", "$f(A) = D$ et $f(B) = C$", "$f(A) = A$ et $f(B) = B$", "$f(A) = C$ et $f(B) = D$"],
          "correctAnswerIndex": 1,
          "explanation": "La symétrie glissée f d'axe (IJ) et de vecteur BK→ envoie A sur D et B sur C."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p04_q5",
          "type": "mcq",
          "prompt": "Quelle différence y a-t-il entre une symétrie orthogonale et une symétrie glissée ?",
          "options": ["La glissée conserve les distances, la symétrie non", "La symétrie fixe les points de son axe, la glissée n'a aucun point fixe", "La glissée est un déplacement, la symétrie non", "Il n'y a aucune différence"],
          "correctAnswerIndex": 1,
          "explanation": "Une symétrie orthogonale fixe tous les points de son axe ; une symétrie glissée n'a aucun point fixe."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p04_q6",
          "type": "mcq",
          "prompt": "Dans un carré $ABCD$ de centre $O$, la composée $f = t_{\\overrightarrow{AC}} \\circ s_{(KI)}$ est :",
          "options": ["Une symétrie orthogonale", "Une symétrie glissée", "Une rotation", "Une translation"],
          "correctAnswerIndex": 1,
          "explanation": "Le vecteur AC→ n'est pas normal à (KI) : la composée est une symétrie glissée."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l14_isometries_p05",
      "order": 5,
      "title": "Classification : déplacements et antidéplacements",
      "summary": "On classe une isométrie par ses points invariants ; toute isométrie est un déplacement (translation ou rotation) ou un antidéplacement (symétrie orthogonale ou glissée).",
      "conceptExplanation": "On peut identifier une isométrie par ses points invariants : si elle a trois points fixes non alignés, c'est l'identité ; si elle a deux points fixes distincts et n'est pas l'identité, c'est la symétrie orthogonale d'axe la droite qui joint ces deux points ; si elle a un seul point fixe $A$, c'est une rotation de centre $A$ ; si elle n'a aucun point fixe, c'est une translation ou une symétrie glissée.\\nToute isométrie est un déplacement ou un antidéplacement. Un déplacement conserve les angles orientés : c'est une translation ou une rotation. Un antidéplacement change le sens des angles orientés : c'est une symétrie orthogonale ou une symétrie glissée. La réciproque d'une isométrie est du même type qu'elle, et l'identité est un déplacement.\\nPour les composées : la composée de deux déplacements est un déplacement ; la composée de deux antidéplacements est un déplacement ; la composée d'un déplacement et d'un antidéplacement est un antidéplacement. Plus généralement, la composée d'un nombre pair d'antidéplacements est un déplacement, et celle d'un nombre impair est un antidéplacement.",
      "keyRule": "3 points fixes non alignés : identité. 2 points fixes : symétrie. 1 point fixe : rotation. 0 point fixe : translation ou glissée.",
      "formulas": [
        {
          "name": "Classification par les points invariants",
          "formula": "3 \\text{ fixes non alignés} : \\text{Id} ; \\quad 2 \\text{ fixes} : s_{(AB)} ; \\quad 1 \\text{ fixe } A : r(A, \\theta) ; \\quad 0 \\text{ fixe} : t \\text{ ou glissée}",
          "note": "Le nombre de points invariants identifie l'isométrie."
        },
        {
          "name": "Déplacements et antidéplacements",
          "formula": "\\text{Déplacement} : t, r ; \\quad \\text{Antidéplacement} : s_{(D)}, \\text{glissée}",
          "note": "Un déplacement conserve les angles orientés, un antidéplacement les change."
        }
      ],
      "workedExample": {
        "title": "Le tableau des composées",
        "statement": "Soit $ABC$ un triangle équilatéral de centre $G$ et $r$ la rotation de centre $G$ et d'angle $\\frac{2\\pi}{3}$. Classer les composées suivantes : $r^2$, $s_{(AI)} \\circ r$, $s_{(BJ)} \\circ s_I$, $s_{(BJ)} \\circ \\text{Id}_{\\mathcal{P}}$, $s_{(BJ)} \\circ t_{\\overrightarrow{AC}}$, $s_{(AI)} \\circ s_{(CK)}$.",
        "methodSteps": [
          "$r^2$ est la composée de deux déplacements : c'est un déplacement.",
          "$s_{(AI)} \\circ r$ est la composée d'un antidéplacement et d'un déplacement : c'est un antidéplacement.",
          "$s_{(BJ)} \\circ s_I$ est la composée de deux antidéplacements : c'est un déplacement.",
          "$s_{(BJ)} \\circ \\text{Id}_{\\mathcal{P}}$ est un antidéplacement, $s_{(BJ)} \\circ t_{\\overrightarrow{AC}}$ est un antidéplacement.",
          "$s_{(AI)} \\circ s_{(CK)}$ est la composée de deux antidéplacements : c'est un déplacement."
        ],
        "conclusion": "On classe une composée en comptant les antidéplacements : pair → déplacement, impair → antidéplacement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Classer par les points invariants",
          "stepTheme": "Classer par les points invariants",
          "stepBadge": "Classer par les points invariants",
          "paragraphText": "• Trois points fixes non alignés : l'isométrie est l'identité.\n• Deux points fixes distincts (et non l'identité) : c'est la symétrie orthogonale d'axe la droite qui joint ces deux points.\n• Un seul point fixe $A$ : c'est une rotation de centre $A$.\n• Aucun point fixe : c'est une translation ou une symétrie glissée.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p05_q1",
            "type": "mcq",
            "prompt": "Une isométrie a deux points fixes distincts et n'est pas l'identité. Que peut-on dire d'elle ?",
            "options": ["C'est une rotation", "C'est la symétrie orthogonale d'axe la droite qui joint ces deux points", "C'est une translation", "C'est une symétrie glissée"],
            "correctAnswerIndex": 1,
            "explanation": "Deux points fixes distincts (et non l'identité) caractérisent la symétrie orthogonale d'axe la droite qui joint ces deux points."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Déplacement et antidéplacement",
          "stepTheme": "Déplacement et antidéplacement",
          "stepBadge": "Déplacement et antidéplacement",
          "paragraphText": "• Un déplacement conserve les angles orientés : c'est une translation ou une rotation.\n• Un antidéplacement change le sens des angles orientés : c'est une symétrie orthogonale ou une symétrie glissée.\n• L'identité est un déplacement.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p05_q2",
            "type": "mcq",
            "prompt": "Parmi ces isométries, laquelle est un antidéplacement ?",
            "options": ["Une translation", "Une rotation", "L'identité", "Une symétrie glissée"],
            "correctAnswerIndex": 3,
            "explanation": "Les antidéplacements sont les symétries orthogonales et les symétries glissées. Les translations, les rotations et l'identité sont des déplacements."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La composée de deux antidéplacements",
          "stepTheme": "La composée de deux antidéplacements",
          "stepBadge": "La composée de deux antidéplacements",
          "paragraphText": "• La composée de deux antidéplacements est un déplacement.\n• La composée de deux déplacements est un déplacement.\n• La composée d'un déplacement et d'un antidéplacement est un antidéplacement.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p05_q3",
            "type": "mcq",
            "prompt": "Que vaut la composée de deux antidéplacements ?",
            "options": ["Un antidéplacement", "Un déplacement", "L'identité", "Une homothétie"],
            "correctAnswerIndex": 1,
            "explanation": "La composée de deux antidéplacements est un déplacement (deux changements de sens se compensent)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "« Rotation de vecteur non nul » : erreur du livre",
          "stepTheme": "« Rotation de vecteur non nul » : erreur du livre",
          "stepBadge": "« Rotation de vecteur non nul » : erreur du livre",
          "paragraphText": "• Attention : le livre propose, pour une isométrie avec deux points invariants, l'option « une rotation de vecteur non nul ».\n• C'est une erreur de la source, signalée telle quelle : une rotation est définie par un centre et un ANGLE, pas par un vecteur. Une isométrie avec deux points invariants est l'identité ou une symétrie orthogonale.",
          "konanTip": "Une rotation a un angle, pas un vecteur : si une option parle d'une « rotation de vecteur », c'est une erreur de l'énoncé.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p05_q4",
            "type": "mcq",
            "prompt": "L'expression « rotation de vecteur non nul » est-elle correcte ?",
            "options": ["Oui, c'est la définition d'une rotation", "Non : une rotation est définie par un centre et un angle, pas par un vecteur", "Oui, si le vecteur est non nul", "Non : une rotation n'a ni centre ni angle"],
            "correctAnswerIndex": 1,
            "explanation": "Une rotation est définie par son centre et son angle. L'expression « rotation de vecteur non nul » est une erreur du livre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le tableau des composées",
          "stepTheme": "Le tableau des composées",
          "stepBadge": "Le tableau des composées",
          "paragraphText": "• Exemple de la leçon : avec $r$ la rotation de centre $G$ et d'angle $\\frac{2\\pi}{3}$ dans un triangle équilatéral, $r^2$ est un déplacement, $s_{(AI)} \\circ r$ est un antidéplacement, $s_{(BJ)} \\circ s_I$ est un déplacement.\n• Règle : on compte les antidéplacements — pair, c'est un déplacement ; impair, c'est un antidéplacement.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p05_q5",
            "type": "mcq",
            "prompt": "La composée de trois antidéplacements est :",
            "options": ["Un déplacement", "Un antidéplacement", "L'identité", "Une homothétie"],
            "correctAnswerIndex": 1,
            "explanation": "La composée d'un nombre impair d'antidéplacements est un antidéplacement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La réciproque conserve le type",
          "stepTheme": "La réciproque conserve le type",
          "stepBadge": "La réciproque conserve le type",
          "paragraphText": "• La réciproque d'une isométrie est du même type qu'elle : la réciproque d'un déplacement est un déplacement, celle d'un antidéplacement est un antidéplacement.\n• Par exemple, la réciproque d'une translation est une translation, et celle d'une symétrie orthogonale est elle-même.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p05_q6",
            "type": "mcq",
            "prompt": "La réciproque d'une symétrie glissée est :",
            "options": ["Un déplacement", "Une symétrie glissée", "Une rotation", "L'identité"],
            "correctAnswerIndex": 1,
            "explanation": "La réciproque d'une isométrie est du même type qu'elle : la réciproque d'une symétrie glissée est une symétrie glissée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p05_q1",
          "type": "mcq",
          "prompt": "Une isométrie a deux points fixes distincts et n'est pas l'identité. Que peut-on dire d'elle ?",
          "options": ["C'est une rotation", "C'est la symétrie orthogonale d'axe la droite qui joint ces deux points", "C'est une translation", "C'est une symétrie glissée"],
          "correctAnswerIndex": 1,
          "explanation": "Deux points fixes distincts (et non l'identité) caractérisent la symétrie orthogonale d'axe la droite qui joint ces deux points."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p05_q2",
          "type": "mcq",
          "prompt": "Parmi ces isométries, laquelle est un antidéplacement ?",
          "options": ["Une translation", "Une rotation", "L'identité", "Une symétrie glissée"],
          "correctAnswerIndex": 3,
          "explanation": "Les antidéplacements sont les symétries orthogonales et les symétries glissées. Les translations, les rotations et l'identité sont des déplacements."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p05_q3",
          "type": "mcq",
          "prompt": "Que vaut la composée de deux antidéplacements ?",
          "options": ["Un antidéplacement", "Un déplacement", "L'identité", "Une homothétie"],
          "correctAnswerIndex": 1,
          "explanation": "La composée de deux antidéplacements est un déplacement (deux changements de sens se compensent)."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p05_q4",
          "type": "mcq",
          "prompt": "L'expression « rotation de vecteur non nul » est-elle correcte ?",
          "options": ["Oui, c'est la définition d'une rotation", "Non : une rotation est définie par un centre et un angle, pas par un vecteur", "Oui, si le vecteur est non nul", "Non : une rotation n'a ni centre ni angle"],
          "correctAnswerIndex": 1,
          "explanation": "Une rotation est définie par son centre et son angle. L'expression « rotation de vecteur non nul » est une erreur du livre."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p05_q5",
          "type": "mcq",
          "prompt": "La composée de trois antidéplacements est :",
          "options": ["Un déplacement", "Un antidéplacement", "L'identité", "Une homothétie"],
          "correctAnswerIndex": 1,
          "explanation": "La composée d'un nombre impair d'antidéplacements est un antidéplacement."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p05_q6",
          "type": "mcq",
          "prompt": "La réciproque d'une symétrie glissée est :",
          "options": ["Un déplacement", "Une symétrie glissée", "Une rotation", "L'identité"],
          "correctAnswerIndex": 1,
          "explanation": "La réciproque d'une isométrie est du même type qu'elle : la réciproque d'une symétrie glissée est une symétrie glissée."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l14_isometries_p06",
      "order": 6,
      "title": "Détermination d'une isométrie et motif de pagne",
      "summary": "Un déplacement est déterminé par l'image de deux points ; un antidéplacement aussi. On les utilise pour analyser le motif d'un pagne.",
      "conceptExplanation": "Il existe un unique déplacement qui envoie $A$ sur $A'$ et $B$ sur $B'$ dès que $AB = A'B'$ : c'est une translation si $\\overrightarrow{AB} = \\overrightarrow{A'B'}$, et une rotation d'angle $\\text{Mes}(\\overrightarrow{AB}, \\overrightarrow{A'B'})$ sinon.\\nIl existe un unique antidéplacement qui envoie $A$ sur $A'$ et $B$ sur $B'$ : si les segments $[AA']$ et $[BB']$ ont la même médiatrice $(\\Delta)$, c'est la symétrie orthogonale d'axe $(\\Delta)$ ; sinon, c'est une symétrie glissée.\\nExemple de la leçon : dans un triangle $ABC$ rectangle en $B$ avec $\\text{Mes}(\\overrightarrow{AB}, \\overrightarrow{AC}) = \\frac{\\pi}{3}$, $O$ milieu de $[AC]$, $I$ milieu de $[OA]$, $K$ milieu de $[AB]$, l'application $f$ qui envoie $B$ sur $O$ et $K$ sur $I$ est la symétrie orthogonale d'axe la médiatrice de $[BO]$ ; l'antidéplacement $g$ qui envoie $B$ sur $A$ et $A$ sur $O$ est la symétrie glissée d'axe $(KI)$ et de vecteur $\\frac{1}{2}\\overrightarrow{BO} = \\overrightarrow{KI}$.\\nSituation complexe (motif d'un pagne) : à partir du triangle $CIA$, on obtient le triangle $BAJ$ par la translation de vecteur $\\overrightarrow{IA}$, le triangle $BOC$ par la translation de vecteur $\\overrightarrow{IC}$, et le triangle $BAC$ par la composée de la translation de vecteur $\\overrightarrow{IC}$ et de la symétrie orthogonale d'axe $(BC)$, c'est-à-dire une symétrie glissée. L'homothétie de centre $I$ et de rapport $2$ envoie $CIA$ sur le triangle $OIJ$.",
      "keyRule": "Un déplacement (ou un antidéplacement) est déterminé par l'image de deux points distincts.",
      "formulas": [
        {
          "name": "Détermination d'un déplacement",
          "formula": "AB = A'B' \\implies \\exists ! \\text{ déplacement } f, \\quad f(A) = A', f(B) = B'",
          "note": "Translation si AB→ = A'B'→, rotation sinon."
        }
      ],
      "workedExample": {
        "title": "Le motif du pagne : de CIA à BAC",
        "statement": "Dans le motif du pagne, comment obtient-on le triangle $BAC$ à partir du triangle $CIA$ ?",
        "methodSteps": [
          "La translation de vecteur $\\overrightarrow{IC}$ envoie $CIA$ sur $BOC$.",
          "La symétrie orthogonale d'axe $(BC)$ envoie ensuite $BOC$ sur $BAC$.",
          "La composée d'une translation et d'une symétrie orthogonale est une symétrie glissée : c'est elle qui envoie $CIA$ sur $BAC$."
        ],
        "conclusion": "Le triangle BAC s'obtient de CIA par une symétrie glissée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un déplacement est déterminé par deux images",
          "stepTheme": "Un déplacement est déterminé par deux images",
          "stepBadge": "Un déplacement est déterminé par deux images",
          "paragraphText": "• Il existe un unique déplacement qui envoie $A$ sur $A'$ et $B$ sur $B'$ dès que $AB = A'B'$.\n• C'est une translation si $\\overrightarrow{AB} = \\overrightarrow{A'B'}$, et une rotation d'angle $\\text{Mes}(\\overrightarrow{AB}, \\overrightarrow{A'B'})$ sinon.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p06_q1",
            "type": "mcq",
            "prompt": "Combien de déplacements envoient $A$ sur $A'$ et $B$ sur $B'$ quand $AB = A'B'$ ?",
            "options": ["Aucun", "Un seul", "Deux", "Une infinité"],
            "correctAnswerIndex": 1,
            "explanation": "Il existe un unique déplacement qui envoie A sur A' et B sur B' dès que AB = A'B'."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Translation ou rotation ?",
          "stepTheme": "Translation ou rotation ?",
          "stepBadge": "Translation ou rotation ?",
          "paragraphText": "• Méthode : si $\\overrightarrow{AB} = \\overrightarrow{A'B'}$, le déplacement est une translation de vecteur $\\overrightarrow{AA'}$.\n• Sinon, c'est une rotation d'angle $\\text{Mes}(\\overrightarrow{AB}, \\overrightarrow{A'B'})$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p06_q2",
            "type": "mcq",
            "prompt": "Le déplacement qui envoie $A$ sur $A'$ et $B$ sur $B'$ est une translation quand :",
            "options": ["$AB = A'B'$", "$\\overrightarrow{AB} = \\overrightarrow{A'B'}$", "$A = A'$", "$B = B'$"],
            "correctAnswerIndex": 1,
            "explanation": "Si les vecteurs AB→ et A'B'→ sont égaux, le déplacement est une translation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Un antidéplacement est déterminé par deux images",
          "stepTheme": "Un antidéplacement est déterminé par deux images",
          "stepBadge": "Un antidéplacement est déterminé par deux images",
          "paragraphText": "• Il existe un unique antidéplacement qui envoie $A$ sur $A'$ et $B$ sur $B'$ dès que $AB = A'B'$.\n• Si les segments $[AA']$ et $[BB']$ ont la même médiatrice $(\\Delta)$, c'est la symétrie orthogonale d'axe $(\\Delta)$ ; sinon, c'est une symétrie glissée.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p06_q3",
            "type": "mcq",
            "prompt": "Quand l'antidéplacement qui envoie $A$ sur $A'$ et $B$ sur $B'$ est-il une symétrie orthogonale ?",
            "options": ["Quand $AB = A'B'$", "Quand $[AA']$ et $[BB']$ ont la même médiatrice", "Quand $A = A'$", "Quand $B = B'$"],
            "correctAnswerIndex": 1,
            "explanation": "Si [AA'] et [BB'] ont la même médiatrice (Δ), l'antidéplacement est la symétrie orthogonale d'axe (Δ) ; sinon, c'est une symétrie glissée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La symétrie B → O, K → I",
          "stepTheme": "La symétrie B → O, K → I",
          "stepBadge": "La symétrie B → O, K → I",
          "paragraphText": "• Exemple de la leçon : dans un triangle $ABC$ rectangle en $B$, l'application $f$ qui envoie $B$ sur $O$ (milieu de $[AC]$) et $K$ (milieu de $[AB]$) sur $I$ (milieu de $[OA]$) est une symétrie orthogonale.\n• Son axe est la médiatrice commune de $[BO]$ et $[KI]$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p06_q4",
            "type": "mcq",
            "prompt": "Dans l'exemple de la leçon, l'application $f$ qui envoie $B$ sur $O$ et $K$ sur $I$ est :",
            "options": ["Une translation", "Une rotation", "Une symétrie orthogonale", "Une symétrie glissée"],
            "correctAnswerIndex": 2,
            "explanation": "Les segments [BO] et [KI] ont la même médiatrice : f est la symétrie orthogonale d'axe cette médiatrice."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "IOJ ou OIJ ? L'incohérence de la source",
          "stepTheme": "IOJ ou OIJ ? L'incohérence de la source",
          "stepBadge": "IOJ ou OIJ ? L'incohérence de la source",
          "paragraphText": "• Attention : dans la situation complexe du pagne, la source utilise à la fois « IOJ » et « OIJ » pour désigner le même triangle.\n• C'est une incohérence de notation de la source, signalée telle quelle : on retient « OIJ », le triangle image de $CIA$ par l'homothétie de centre $I$ et de rapport $2$.",
          "konanTip": "Quand une source écrit deux noms différents pour le même objet, signale-le et choisis un seul nom : ici OIJ.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p06_q5",
            "type": "mcq",
            "prompt": "Dans la situation du pagne, la source désigne le triangle image de $CIA$ par l'homothétie de centre $I$ et de rapport $2$ par :",
            "options": ["« IOJ » uniquement", "« OIJ » uniquement", "À la fois « IOJ » et « OIJ » (incohérence de la source)", "« BAC »"],
            "correctAnswerIndex": 2,
            "explanation": "La source utilise à la fois « IOJ » et « OIJ » pour le même triangle : c'est une incohérence de notation, signalée telle quelle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le motif du pagne",
          "stepTheme": "Le motif du pagne",
          "stepBadge": "Le motif du pagne",
          "paragraphText": "• Dans le motif du pagne, le triangle $CIA$ donne le triangle $BAJ$ par la translation de vecteur $\\overrightarrow{IA}$, et le triangle $BOC$ par la translation de vecteur $\\overrightarrow{IC}$.\n• Il donne le triangle $BAC$ par une symétrie glissée (translation de vecteur $\\overrightarrow{IC}$ suivie de la symétrie orthogonale d'axe $(BC)$).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l14_isometries_p06_q6",
            "type": "mcq",
            "prompt": "Dans le motif du pagne, comment obtient-on le triangle $BAJ$ à partir du triangle $CIA$ ?",
            "options": ["Par une rotation", "Par la translation de vecteur $\\overrightarrow{IA}$", "Par une symétrie orthogonale", "Par une homothétie"],
            "correctAnswerIndex": 1,
            "explanation": "Le triangle BAJ s'obtient de CIA par la translation de vecteur IA→."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p06_q1",
          "type": "mcq",
          "prompt": "Combien de déplacements envoient $A$ sur $A'$ et $B$ sur $B'$ quand $AB = A'B'$ ?",
          "options": ["Aucun", "Un seul", "Deux", "Une infinité"],
          "correctAnswerIndex": 1,
          "explanation": "Il existe un unique déplacement qui envoie A sur A' et B sur B' dès que AB = A'B'."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p06_q2",
          "type": "mcq",
          "prompt": "Le déplacement qui envoie $A$ sur $A'$ et $B$ sur $B'$ est une translation quand :",
          "options": ["$AB = A'B'$", "$\\overrightarrow{AB} = \\overrightarrow{A'B'}$", "$A = A'$", "$B = B'$"],
          "correctAnswerIndex": 1,
          "explanation": "Si les vecteurs AB→ et A'B'→ sont égaux, le déplacement est une translation."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p06_q3",
          "type": "mcq",
          "prompt": "Quand l'antidéplacement qui envoie $A$ sur $A'$ et $B$ sur $B'$ est-il une symétrie orthogonale ?",
          "options": ["Quand $AB = A'B'$", "Quand $[AA']$ et $[BB']$ ont la même médiatrice", "Quand $A = A'$", "Quand $B = B'$"],
          "correctAnswerIndex": 1,
          "explanation": "Si [AA'] et [BB'] ont la même médiatrice (Δ), l'antidéplacement est la symétrie orthogonale d'axe (Δ) ; sinon, c'est une symétrie glissée."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p06_q4",
          "type": "mcq",
          "prompt": "Dans l'exemple de la leçon, l'application $f$ qui envoie $B$ sur $O$ et $K$ sur $I$ est :",
          "options": ["Une translation", "Une rotation", "Une symétrie orthogonale", "Une symétrie glissée"],
          "correctAnswerIndex": 2,
          "explanation": "Les segments [BO] et [KI] ont la même médiatrice : f est la symétrie orthogonale d'axe cette médiatrice."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p06_q5",
          "type": "mcq",
          "prompt": "Dans la situation du pagne, la source désigne le triangle image de $CIA$ par l'homothétie de centre $I$ et de rapport $2$ par :",
          "options": ["« IOJ » uniquement", "« OIJ » uniquement", "À la fois « IOJ » et « OIJ » (incohérence de la source)", "« BAC »"],
          "correctAnswerIndex": 2,
          "explanation": "La source utilise à la fois « IOJ » et « OIJ » pour le même triangle : c'est une incohérence de notation, signalée telle quelle."
        },
        {
          "id": "terminale_c_maths_geometrie_l14_isometries_p06_q6",
          "type": "mcq",
          "prompt": "Dans le motif du pagne, comment obtient-on le triangle $BAJ$ à partir du triangle $CIA$ ?",
          "options": ["Par une rotation", "Par la translation de vecteur $\\overrightarrow{IA}$", "Par une symétrie orthogonale", "Par une homothétie"],
          "correctAnswerIndex": 1,
          "explanation": "Le triangle BAJ s'obtient de CIA par la translation de vecteur IA→."
        }
      ]
    }
  ]
};
