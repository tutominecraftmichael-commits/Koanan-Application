import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 16 : Similitudes directes du plan » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1223
// Décalage de numérotation signalé : le livre H5P intitule la leçon « LEÇON N°17 » alors que le cours est la Leçon 16.
export const MATHS_TLE_C_L16_SIMILITUDES: CurriculumChapter = {
  "id": "terminale_c_maths_geometrie_l16_similitudes",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 16,
  "title": "Leçon 16 : Similitudes directes du plan",
  "summary": "Similitudes directes du plan : définition, rapport et angle, composée et réciproque, propriétés géométriques, caractérisation par l'écriture complexe, détermination et utilisations.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1223",
  "points": [
    {
      "id": "terminale_c_maths_geometrie_l16_similitudes_p01",
      "order": 1,
      "title": "Définition, rapport et angle",
      "summary": "Une similitude directe est la composée d'une homothétie et d'un déplacement ; elle multiplie les distances par un rapport k > 0 et tourne les vecteurs d'un angle θ.",
      "conceptExplanation": "Une similitude directe est la composée d'une homothétie et d'un déplacement. Toute similitude directe est une transformation du plan. Tout déplacement et toute homothétie est une similitude directe. (Une similitude indirecte est la composée d'une homothétie et d'un antidéplacement : elle est hors programme.)\\nUne similitude directe $s$ a un rapport $k > 0$ et un angle $\\theta \\in ]-\\pi ; \\pi]$ : pour tous points $M$ et $N$, on a $M'N' = k \\times MN$ et $\\text{Mes}(\\overrightarrow{MN}, \\overrightarrow{M'N'}) = \\theta$.\\nExemples : une translation est une similitude directe de rapport $1$ et d'angle $0$ ; une rotation d'angle $\\theta$ est une similitude directe de rapport $1$ et d'angle $\\theta$ ; une homothétie de rapport $k > 0$ est une similitude directe de rapport $k$ et d'angle $0$ ; une homothétie de rapport $k < 0$ est une similitude directe de rapport $-k$ et d'angle $\\pi$.",
      "keyRule": "Similitude directe : M'N' = k·MN et Mes(MN→, M'N'→) = θ. k > 0, θ ∈ ]−π ; π].",
      "formulas": [
        {
          "name": "Rapport et angle d'une similitude directe",
          "formula": "M'N' = k \\times MN, \\quad \\text{Mes}(\\overrightarrow{MN}, \\overrightarrow{M'N'}) = \\theta",
          "note": "k > 0 est le rapport, θ l'angle de la similitude."
        }
      ],
      "workedExample": {
        "title": "Rapport et angle dans un triangle équilatéral",
        "statement": "Soit $ABC$ un triangle équilatéral direct, $I$ le milieu de $[BC]$, et $s$ la similitude directe telle que $s(I) = B$ et $s(B) = A$. Déterminer son rapport et son angle.",
        "methodSteps": [
          "Le rapport est $\\frac{BA}{IB} = \\frac{a}{\\frac{a}{2}} = 2$.",
          "L'angle est $\\text{Mes}(\\overrightarrow{IB}, \\overrightarrow{BA}) = -\\frac{2\\pi}{3}$.",
          "Donc $s$ est la similitude directe de rapport $2$ et d'angle $-\\frac{2\\pi}{3}$."
        ],
        "conclusion": "La similitude s a pour rapport 2 et pour angle −2π/3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Similitude directe : homothétie et déplacement",
          "stepTheme": "Similitude directe : homothétie et déplacement",
          "stepBadge": "Similitude directe : homothétie et déplacement",
          "paragraphText": "• Une similitude directe est la composée d'une homothétie et d'un déplacement.\n• Tout déplacement et toute homothétie est une similitude directe. Une similitude indirecte (homothétie + antidéplacement) est hors programme.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une similitude directe ?",
            "options": ["La composée d'une homothétie et d'un déplacement", "La composée d'une homothétie et d'un antidéplacement", "La composée de deux symétries orthogonales", "La composée de deux translations"],
            "correctAnswerIndex": 0,
            "explanation": "Une similitude directe est la composée d'une homothétie et d'un déplacement. (Homothétie + antidéplacement donnerait une similitude indirecte, hors programme.)"
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Rapport et angle",
          "stepTheme": "Rapport et angle",
          "stepBadge": "Rapport et angle",
          "paragraphText": "• Une similitude directe $s$ a un rapport $k > 0$ et un angle $\\theta \\in ]-\\pi ; \\pi]$.\n• Pour tous points $M$ et $N$ : $M'N' = k \\times MN$ et $\\text{Mes}(\\overrightarrow{MN}, \\overrightarrow{M'N'}) = \\theta$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p01_q2",
            "type": "mcq",
            "prompt": "Que vérifie une similitude directe de rapport $k$ et d'angle $\\theta$ ?",
            "options": ["$M'N' = k \\times MN$ et $\\text{Mes}(\\overrightarrow{MN}, \\overrightarrow{M'N'}) = \\theta$", "$M'N' = MN$ et $\\text{Mes}(\\overrightarrow{MN}, \\overrightarrow{M'N'}) = 0$", "$M'N' = k^2 \\times MN$", "$M'N' = \\frac{MN}{k}$"],
            "correctAnswerIndex": 0,
            "explanation": "Une similitude directe de rapport k et d'angle θ multiplie les distances par k et tourne les vecteurs de θ."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Translations, rotations, homothéties",
          "stepTheme": "Translations, rotations, homothéties",
          "stepBadge": "Translations, rotations, homothéties",
          "paragraphText": "• Une translation est une similitude directe de rapport $1$ et d'angle $0$.\n• Une rotation d'angle $\\theta$ est une similitude directe de rapport $1$ et d'angle $\\theta$.\n• Une homothétie de rapport $k > 0$ est une similitude directe de rapport $k$ et d'angle $0$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p01_q3",
            "type": "mcq",
            "prompt": "Une rotation d'angle $\\theta$ est une similitude directe de rapport et d'angle :",
            "options": ["Rapport $\\theta$ et angle $1$", "Rapport $1$ et angle $\\theta$", "Rapport $0$ et angle $\\theta$", "Rapport $1$ et angle $0$"],
            "correctAnswerIndex": 1,
            "explanation": "Une rotation conserve les distances (rapport 1) et tourne les vecteurs de son angle θ."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Homothétie de rapport négatif",
          "stepTheme": "Homothétie de rapport négatif",
          "stepBadge": "Homothétie de rapport négatif",
          "paragraphText": "• Piège : une homothétie de rapport $k < 0$ est une similitude directe de rapport $-k$ et d'angle $\\pi$.\n• Le rapport d'une similitude directe est toujours strictement positif : on prend la valeur absolue du rapport de l'homothétie, et le signe négatif devient un angle de $\\pi$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p01_q4",
            "type": "mcq",
            "prompt": "Une homothétie de rapport $-3$ est une similitude directe de rapport et d'angle :",
            "options": ["Rapport $-3$ et angle $0$", "Rapport $3$ et angle $\\pi$", "Rapport $3$ et angle $0$", "Rapport $-3$ et angle $\\pi$"],
            "correctAnswerIndex": 1,
            "explanation": "Le rapport d'une similitude directe est toujours positif : une homothétie de rapport −3 donne une similitude directe de rapport 3 et d'angle π."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Rapport 2 et angle −2π/3",
          "stepTheme": "Rapport 2 et angle −2π/3",
          "stepBadge": "Rapport 2 et angle −2π/3",
          "paragraphText": "• Exemple de la leçon : dans un triangle équilatéral direct $ABC$, $I$ milieu de $[BC]$, la similitude directe $s$ avec $s(I) = B$ et $s(B) = A$ a pour rapport $2$ et pour angle $-\\frac{2\\pi}{3}$.\n• Le rapport est $\\frac{BA}{IB} = 2$ et l'angle est $\\text{Mes}(\\overrightarrow{IB}, \\overrightarrow{BA}) = -\\frac{2\\pi}{3}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p01_q5",
            "type": "mcq",
            "prompt": "Dans un triangle équilatéral direct $ABC$, $I$ milieu de $[BC]$, la similitude directe $s$ avec $s(I) = B$ et $s(B) = A$ a pour rapport et pour angle :",
            "options": ["Rapport $2$ et angle $\\frac{2\\pi}{3}$", "Rapport $2$ et angle $-\\frac{2\\pi}{3}$", "Rapport $\\frac{1}{2}$ et angle $-\\frac{2\\pi}{3}$", "Rapport $2$ et angle $\\frac{\\pi}{3}$"],
            "correctAnswerIndex": 1,
            "explanation": "Le rapport est BA/IB = 2 et l'angle est Mes(IB→, BA→) = −2π/3."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le rapport est strictement positif",
          "stepTheme": "Le rapport est strictement positif",
          "stepBadge": "Le rapport est strictement positif",
          "paragraphText": "• Le rapport $k$ d'une similitude directe est toujours strictement positif : $k > 0$.\n• L'angle $\\theta$ est une mesure principale : $\\theta \\in ]-\\pi ; \\pi]$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p01_q6",
            "type": "mcq",
            "prompt": "Le rapport $k$ d'une similitude directe est :",
            "options": ["Toujours négatif", "Toujours strictement positif", "Toujours égal à $1$", "Toujours un entier"],
            "correctAnswerIndex": 1,
            "explanation": "Le rapport d'une similitude directe est toujours strictement positif : k > 0."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une similitude directe ?",
          "options": ["La composée d'une homothétie et d'un déplacement", "La composée d'une homothétie et d'un antidéplacement", "La composée de deux symétries orthogonales", "La composée de deux translations"],
          "correctAnswerIndex": 0,
          "explanation": "Une similitude directe est la composée d'une homothétie et d'un déplacement. (Homothétie + antidéplacement donnerait une similitude indirecte, hors programme.)"
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p01_q2",
          "type": "mcq",
          "prompt": "Que vérifie une similitude directe de rapport $k$ et d'angle $\\theta$ ?",
          "options": ["$M'N' = k \\times MN$ et $\\text{Mes}(\\overrightarrow{MN}, \\overrightarrow{M'N'}) = \\theta$", "$M'N' = MN$ et $\\text{Mes}(\\overrightarrow{MN}, \\overrightarrow{M'N'}) = 0$", "$M'N' = k^2 \\times MN$", "$M'N' = \\frac{MN}{k}$"],
          "correctAnswerIndex": 0,
          "explanation": "Une similitude directe de rapport k et d'angle θ multiplie les distances par k et tourne les vecteurs de θ."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p01_q3",
          "type": "mcq",
          "prompt": "Une rotation d'angle $\\theta$ est une similitude directe de rapport et d'angle :",
          "options": ["Rapport $\\theta$ et angle $1$", "Rapport $1$ et angle $\\theta$", "Rapport $0$ et angle $\\theta$", "Rapport $1$ et angle $0$"],
          "correctAnswerIndex": 1,
          "explanation": "Une rotation conserve les distances (rapport 1) et tourne les vecteurs de son angle θ."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p01_q4",
          "type": "mcq",
          "prompt": "Une homothétie de rapport $-3$ est une similitude directe de rapport et d'angle :",
          "options": ["Rapport $-3$ et angle $0$", "Rapport $3$ et angle $\\pi$", "Rapport $3$ et angle $0$", "Rapport $-3$ et angle $\\pi$"],
          "correctAnswerIndex": 1,
          "explanation": "Le rapport d'une similitude directe est toujours positif : une homothétie de rapport −3 donne une similitude directe de rapport 3 et d'angle π."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p01_q5",
          "type": "mcq",
          "prompt": "Dans un triangle équilatéral direct $ABC$, $I$ milieu de $[BC]$, la similitude directe $s$ avec $s(I) = B$ et $s(B) = A$ a pour rapport et pour angle :",
          "options": ["Rapport $2$ et angle $\\frac{2\\pi}{3}$", "Rapport $2$ et angle $-\\frac{2\\pi}{3}$", "Rapport $\\frac{1}{2}$ et angle $-\\frac{2\\pi}{3}$", "Rapport $2$ et angle $\\frac{\\pi}{3}$"],
          "correctAnswerIndex": 1,
          "explanation": "Le rapport est BA/IB = 2 et l'angle est Mes(IB→, BA→) = −2π/3."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p01_q6",
          "type": "mcq",
          "prompt": "Le rapport $k$ d'une similitude directe est :",
          "options": ["Toujours négatif", "Toujours strictement positif", "Toujours égal à $1$", "Toujours un entier"],
          "correctAnswerIndex": 1,
          "explanation": "Le rapport d'une similitude directe est toujours strictement positif : k > 0."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l16_similitudes_p02",
      "order": 2,
      "title": "Composée de deux similitudes directes et réciproque",
      "summary": "La composée de deux similitudes directes a pour rapport le produit des rapports et pour angle la somme des angles ; la réciproque a pour rapport 1/k et pour angle −θ.",
      "conceptExplanation": "La composée de deux similitudes directes de rapports $k_1$ et $k_2$ et d'angles $\\theta_1$ et $\\theta_2$ est une similitude directe de rapport $k_1 k_2$ et d'angle $\\theta_1 + \\theta_2$ (modulo $2\\pi$).\\nLa réciproque d'une similitude directe de rapport $k$ et d'angle $\\theta$ est une similitude directe de rapport $\\frac{1}{k}$ et d'angle $-\\theta$.\\nToute similitude directe de rapport $k$ est la composée d'une homothétie de rapport $k$ et d'un déplacement (dans n'importe quel ordre). Remarque : $g \\circ f$ et $f \\circ g$ ont le même rapport et le même angle, mais pas en général le même centre.\\nExemple de la leçon : $f$ de rapport $3$ et d'angle $\\frac{\\pi}{2}$, $g$ de rapport $\\frac{\\sqrt{2}}{2}$ et d'angle $-\\frac{2\\pi}{3}$ : $f \\circ g$ et $g \\circ f$ ont pour rapport $3 \\times \\frac{\\sqrt{2}}{2} = \\frac{3\\sqrt{2}}{2}$ et pour angle $\\frac{\\pi}{2} - \\frac{2\\pi}{3} = -\\frac{\\pi}{6}$ ; $g^{-1}$ a pour rapport $\\sqrt{2}$ et pour angle $\\frac{2\\pi}{3}$.",
      "keyRule": "Composée : rapports multipliés, angles additionnés. Réciproque : rapport 1/k, angle −θ.",
      "formulas": [
        {
          "name": "Composée de deux similitudes directes",
          "formula": "k = k_1 k_2, \\quad \\theta = \\theta_1 + \\theta_2",
          "note": "La composée est une similitude directe."
        },
        {
          "name": "Réciproque",
          "formula": "k' = \\frac{1}{k}, \\quad \\theta' = -\\theta",
          "note": "La réciproque d'une similitude directe est une similitude directe."
        }
      ],
      "workedExample": {
        "title": "Composer f et g",
        "statement": "Soient $f$ de rapport $3$ et d'angle $\\frac{\\pi}{2}$, et $g$ de rapport $\\frac{\\sqrt{2}}{2}$ et d'angle $-\\frac{2\\pi}{3}$. Déterminer le rapport et l'angle de $f \\circ g$ et de $g^{-1}$.",
        "methodSteps": [
          "Le rapport de $f \\circ g$ est $3 \\times \\frac{\\sqrt{2}}{2} = \\frac{3\\sqrt{2}}{2}$.",
          "L'angle de $f \\circ g$ est $\\frac{\\pi}{2} - \\frac{2\\pi}{3} = \\frac{3\\pi - 4\\pi}{6} = -\\frac{\\pi}{6}$.",
          "La réciproque $g^{-1}$ a pour rapport $\\frac{1}{\\frac{\\sqrt{2}}{2}} = \\sqrt{2}$ et pour angle $\\frac{2\\pi}{3}$."
        ],
        "conclusion": "f∘g a pour rapport 3√2/2 et pour angle −π/6 ; g⁻¹ a pour rapport √2 et pour angle 2π/3."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La composée de deux similitudes directes",
          "stepTheme": "La composée de deux similitudes directes",
          "stepBadge": "La composée de deux similitudes directes",
          "paragraphText": "• La composée de deux similitudes directes est une similitude directe.\n• Son rapport est le produit des rapports : $k = k_1 k_2$. Son angle est la somme des angles : $\\theta = \\theta_1 + \\theta_2$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p02_q1",
            "type": "mcq",
            "prompt": "La composée de deux similitudes directes de rapports $k_1$ et $k_2$ a pour rapport :",
            "options": ["$k_1 + k_2$", "$k_1 k_2$", "$\\frac{k_1}{k_2}$", "$|k_1 - k_2|$"],
            "correctAnswerIndex": 1,
            "explanation": "Le rapport de la composée est le produit des rapports : k = k1k2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La réciproque",
          "stepTheme": "La réciproque",
          "stepBadge": "La réciproque",
          "paragraphText": "• La réciproque d'une similitude directe de rapport $k$ et d'angle $\\theta$ est une similitude directe de rapport $\\frac{1}{k}$ et d'angle $-\\theta$.\n• Exemple : si $g$ a pour rapport $\\frac{\\sqrt{2}}{2}$ et pour angle $-\\frac{2\\pi}{3}$, alors $g^{-1}$ a pour rapport $\\sqrt{2}$ et pour angle $\\frac{2\\pi}{3}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p02_q2",
            "type": "mcq",
            "prompt": "La réciproque d'une similitude directe de rapport $2$ et d'angle $\\frac{\\pi}{3}$ a pour rapport et pour angle :",
            "options": ["Rapport $2$ et angle $\\frac{\\pi}{3}$", "Rapport $\\frac{1}{2}$ et angle $-\\frac{\\pi}{3}$", "Rapport $\\frac{1}{2}$ et angle $\\frac{\\pi}{3}$", "Rapport $2$ et angle $-\\frac{\\pi}{3}$"],
            "correctAnswerIndex": 1,
            "explanation": "La réciproque a pour rapport 1/k = 1/2 et pour angle −θ = −π/3."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Composer f et g",
          "stepTheme": "Composer f et g",
          "stepBadge": "Composer f et g",
          "paragraphText": "• Exemple de la leçon : $f$ de rapport $3$ et d'angle $\\frac{\\pi}{2}$, $g$ de rapport $\\frac{\\sqrt{2}}{2}$ et d'angle $-\\frac{2\\pi}{3}$.\n• $f \\circ g$ et $g \\circ f$ ont pour rapport $\\frac{3\\sqrt{2}}{2}$ et pour angle $-\\frac{\\pi}{6}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p02_q3",
            "type": "mcq",
            "prompt": "Soient $f$ de rapport $3$ et d'angle $\\frac{\\pi}{2}$, et $g$ de rapport $\\frac{\\sqrt{2}}{2}$ et d'angle $-\\frac{2\\pi}{3}$. Quel est l'angle de $f \\circ g$ ?",
            "options": ["$\\frac{\\pi}{6}$", "$-\\frac{\\pi}{6}$", "$\\frac{7\\pi}{6}$", "$-\\frac{7\\pi}{6}$"],
            "correctAnswerIndex": 1,
            "explanation": "L'angle de la composée est la somme des angles : π/2 − 2π/3 = −π/6."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "f∘g et g∘f n'ont pas le même centre",
          "stepTheme": "f∘g et g∘f n'ont pas le même centre",
          "stepBadge": "f∘g et g∘f n'ont pas le même centre",
          "paragraphText": "• Attention : $f \\circ g$ et $g \\circ f$ ont le même rapport et le même angle, mais pas en général le même centre.\n• La composition des similitudes directes n'est pas commutative : l'ordre change le centre (et parfois la transformation).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p02_q4",
            "type": "mcq",
            "prompt": "Les composées $f \\circ g$ et $g \\circ f$ de deux similitudes directes ont-elles toujours le même centre ?",
            "options": ["Oui, toujours", "Non, pas en général", "Oui, si les rapports sont égaux", "Non, jamais"],
            "correctAnswerIndex": 1,
            "explanation": "f∘g et g∘f ont le même rapport et le même angle, mais pas en général le même centre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Homothétie + déplacement",
          "stepTheme": "Homothétie + déplacement",
          "stepBadge": "Homothétie + déplacement",
          "paragraphText": "• Toute similitude directe de rapport $k$ est la composée d'une homothétie de rapport $k$ et d'un déplacement, dans n'importe quel ordre.\n• C'est la définition même de la similitude directe : on « zoome » puis on « déplace », ou l'inverse.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p02_q5",
            "type": "mcq",
            "prompt": "Toute similitude directe de rapport $k$ est la composée :",
            "options": ["D'une homothétie de rapport $k$ et d'un antidéplacement", "D'une homothétie de rapport $k$ et d'un déplacement", "De deux homothéties de rapport $k$", "De deux rotations"],
            "correctAnswerIndex": 1,
            "explanation": "Toute similitude directe de rapport k est la composée d'une homothétie de rapport k et d'un déplacement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "L'angle de la composée",
          "stepTheme": "L'angle de la composée",
          "stepBadge": "L'angle de la composée",
          "paragraphText": "• L'angle de la composée est la somme des angles, modulo $2\\pi$ : on ramène le résultat dans $]-\\pi ; \\pi]$.\n• Exemple : $\\frac{\\pi}{2} - \\frac{2\\pi}{3} = -\\frac{\\pi}{6}$, qui est déjà dans $]-\\pi ; \\pi]$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p02_q6",
            "type": "mcq",
            "prompt": "La composée de deux similitudes directes d'angles $\\frac{\\pi}{2}$ et $-\\frac{2\\pi}{3}$ a pour angle :",
            "options": ["$\\frac{7\\pi}{6}$", "$-\\frac{\\pi}{6}$", "$\\frac{\\pi}{6}$", "$-\\frac{7\\pi}{6}$"],
            "correctAnswerIndex": 1,
            "explanation": "L'angle de la composée est la somme des angles : π/2 − 2π/3 = −π/6."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p02_q1",
          "type": "mcq",
          "prompt": "La composée de deux similitudes directes de rapports $k_1$ et $k_2$ a pour rapport :",
          "options": ["$k_1 + k_2$", "$k_1 k_2$", "$\\frac{k_1}{k_2}$", "$|k_1 - k_2|$"],
          "correctAnswerIndex": 1,
          "explanation": "Le rapport de la composée est le produit des rapports : k = k1k2."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p02_q2",
          "type": "mcq",
          "prompt": "La réciproque d'une similitude directe de rapport $2$ et d'angle $\\frac{\\pi}{3}$ a pour rapport et pour angle :",
          "options": ["Rapport $2$ et angle $\\frac{\\pi}{3}$", "Rapport $\\frac{1}{2}$ et angle $-\\frac{\\pi}{3}$", "Rapport $\\frac{1}{2}$ et angle $\\frac{\\pi}{3}$", "Rapport $2$ et angle $-\\frac{\\pi}{3}$"],
          "correctAnswerIndex": 1,
          "explanation": "La réciproque a pour rapport 1/k = 1/2 et pour angle −θ = −π/3."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p02_q3",
          "type": "mcq",
          "prompt": "Soient $f$ de rapport $3$ et d'angle $\\frac{\\pi}{2}$, et $g$ de rapport $\\frac{\\sqrt{2}}{2}$ et d'angle $-\\frac{2\\pi}{3}$. Quel est l'angle de $f \\circ g$ ?",
          "options": ["$\\frac{\\pi}{6}$", "$-\\frac{\\pi}{6}$", "$\\frac{7\\pi}{6}$", "$-\\frac{7\\pi}{6}$"],
          "correctAnswerIndex": 1,
          "explanation": "L'angle de la composée est la somme des angles : π/2 − 2π/3 = −π/6."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p02_q4",
          "type": "mcq",
          "prompt": "Les composées $f \\circ g$ et $g \\circ f$ de deux similitudes directes ont-elles toujours le même centre ?",
          "options": ["Oui, toujours", "Non, pas en général", "Oui, si les rapports sont égaux", "Non, jamais"],
          "correctAnswerIndex": 1,
          "explanation": "f∘g et g∘f ont le même rapport et le même angle, mais pas en général le même centre."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p02_q5",
          "type": "mcq",
          "prompt": "Toute similitude directe de rapport $k$ est la composée :",
          "options": ["D'une homothétie de rapport $k$ et d'un antidéplacement", "D'une homothétie de rapport $k$ et d'un déplacement", "De deux homothéties de rapport $k$", "De deux rotations"],
          "correctAnswerIndex": 1,
          "explanation": "Toute similitude directe de rapport k est la composée d'une homothétie de rapport k et d'un déplacement."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p02_q6",
          "type": "mcq",
          "prompt": "La composée de deux similitudes directes d'angles $\\frac{\\pi}{2}$ et $-\\frac{2\\pi}{3}$ a pour angle :",
          "options": ["$\\frac{7\\pi}{6}$", "$-\\frac{\\pi}{6}$", "$\\frac{\\pi}{6}$", "$-\\frac{7\\pi}{6}$"],
          "correctAnswerIndex": 1,
          "explanation": "L'angle de la composée est la somme des angles : π/2 − 2π/3 = −π/6."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l16_similitudes_p03",
      "order": 3,
      "title": "Propriétés géométriques",
      "summary": "Une similitude directe conserve l'alignement, le parallélisme, l'orthogonalité, le contact, le barycentre et les angles orientés ; elle multiplie les distances par k et les aires par k².",
      "conceptExplanation": "Une similitude directe conserve l'alignement, le parallélisme, l'orthogonalité, le contact, le barycentre, les angles orientés et les rapports de distances : $\\frac{A'B'}{AB} = \\frac{C'D'}{CD}$.\\nLe rapport $k$ multiplie les distances par $k$ et les aires par $k^2$. Par exemple, une similitude directe de rapport $2$ multiplie les aires par $4$, et une similitude directe de rapport $\\frac{\\sqrt{2}}{2}$ multiplie les aires par $\\frac{1}{2}$.\\nUne similitude directe transforme une droite en une droite, une demi-droite en une demi-droite, un segment en un segment et un cercle en un cercle (de rayon multiplié par $k$).",
      "keyRule": "Distances × k, aires × k². Conservation : alignement, parallélisme, orthogonalité, contact, barycentre, angles orientés.",
      "formulas": [
        {
          "name": "Distances et aires",
          "formula": "M'N' = k \\times MN, \\quad \\text{aire}' = k^2 \\times \\text{aire}",
          "note": "Le rapport k multiplie les distances par k et les aires par k²."
        },
        {
          "name": "Rapports de distances",
          "formula": "\\frac{A'B'}{AB} = \\frac{C'D'}{CD}",
          "note": "Les rapports de distances sont conservés."
        }
      ],
      "workedExample": {
        "title": "Les aires sont multipliées par k²",
        "statement": "Soit $s$ une similitude directe de rapport $2$. De combien sont multipliées les aires des figures par $s$ ?",
        "methodSteps": [
          "Une similitude directe de rapport $k$ multiplie les aires par $k^2$.",
          "Ici $k = 2$, donc les aires sont multipliées par $2^2 = 4$.",
          "Par exemple, un triangle d'aire $3$ a pour image un triangle d'aire $12$."
        ],
        "conclusion": "Les aires sont multipliées par 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu'une similitude directe conserve",
          "stepTheme": "Ce qu'une similitude directe conserve",
          "stepBadge": "Ce qu'une similitude directe conserve",
          "paragraphText": "• Une similitude directe conserve l'alignement, le parallélisme, l'orthogonalité, le contact, le barycentre, les angles orientés et les rapports de distances.\n• Elle transforme une droite en une droite, un segment en un segment et un cercle en un cercle.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p03_q1",
            "type": "mcq",
            "prompt": "Parmi ces propriétés, laquelle une similitude directe ne conserve-t-elle PAS ?",
            "options": ["Le barycentre", "Les angles orientés", "Les distances", "Le parallélisme"],
            "correctAnswerIndex": 2,
            "explanation": "Une similitude directe conserve le barycentre, les angles orientés et le parallélisme, mais pas les distances : elle les multiplie par son rapport k."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Distances × k, aires × k²",
          "stepTheme": "Distances × k, aires × k²",
          "stepBadge": "Distances × k, aires × k²",
          "paragraphText": "• Le rapport $k$ multiplie les distances par $k$ et les aires par $k^2$.\n• Exemple : une similitude de rapport $2$ multiplie les aires par $4$ ; une similitude de rapport $\\frac{\\sqrt{2}}{2}$ multiplie les aires par $\\frac{1}{2}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p03_q2",
            "type": "mcq",
            "prompt": "Une similitude directe de rapport $3$ multiplie les aires par :",
            "options": ["$3$", "$6$", "$9$", "$\\sqrt{3}$"],
            "correctAnswerIndex": 2,
            "explanation": "Les aires sont multipliées par k² : ici 3² = 9."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Conserver le barycentre",
          "stepTheme": "Conserver le barycentre",
          "stepBadge": "Conserver le barycentre",
          "paragraphText": "• Méthode : toute similitude directe conserve le barycentre. Si $I = \\text{bar}\\{(A, 2) ; (B, 1)\\}$ et $F = \\text{bar}\\{(s(A), 2) ; (s(B), 1)\\}$, alors $s(I) = F$.\n• On peut donc calculer l'image d'un barycentre en prenant le barycentre des images.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p03_q3",
            "type": "mcq",
            "prompt": "Soit $s$ une similitude directe, $I = \\text{bar}\\{(A, 2) ; (B, 1)\\}$ et $F = \\text{bar}\\{(s(A), 2) ; (s(B), 1)\\}$. Que vaut $s(I)$ ?",
            "options": ["$A$", "$B$", "$F$", "On ne peut pas le savoir"],
            "correctAnswerIndex": 2,
            "explanation": "Toute similitude directe conserve le barycentre : s(I) = F."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "DE = √2/2 AB",
          "stepTheme": "DE = √2/2 AB",
          "stepBadge": "DE = √2/2 AB",
          "paragraphText": "• Exemple du livre : une similitude directe $s$ de rapport $\\frac{\\sqrt{2}}{2}$ envoie $A$ sur $D$ et $B$ sur $E$.\n• On a alors $DE = \\frac{\\sqrt{2}}{2} AB$ : les distances sont multipliées par le rapport.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p03_q4",
            "type": "mcq",
            "prompt": "Une similitude directe $s$ de rapport $\\frac{\\sqrt{2}}{2}$ envoie $A$ sur $D$ et $B$ sur $E$. Que vaut $DE$ ?",
            "options": ["$DE = AB$", "$DE = \\frac{\\sqrt{2}}{2} AB$", "$DE = 2 AB$", "$DE = \\sqrt{2} AB$"],
            "correctAnswerIndex": 1,
            "explanation": "Les distances sont multipliées par le rapport : DE = (√2/2) AB."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les aires ne sont pas multipliées par k",
          "stepTheme": "Les aires ne sont pas multipliées par k",
          "stepBadge": "Les aires ne sont pas multipliées par k",
          "paragraphText": "• Piège : une similitude directe de rapport $k$ multiplie les aires par $k^2$, pas par $k$.\n• Exemple : pour $k = \\frac{\\sqrt{2}}{2}$, les aires sont multipliées par $\\frac{1}{2}$ (et non par $\\frac{\\sqrt{2}}{2}$).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p03_q5",
            "type": "mcq",
            "prompt": "Une similitude directe de rapport $\\frac{\\sqrt{2}}{2}$ multiplie les aires par :",
            "options": ["$\\frac{\\sqrt{2}}{2}$", "$\\frac{1}{2}$", "$2$", "$\\sqrt{2}$"],
            "correctAnswerIndex": 1,
            "explanation": "Les aires sont multipliées par k² : (√2/2)² = 1/2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une suite d'aires géométrique",
          "stepTheme": "Une suite d'aires géométrique",
          "stepBadge": "Une suite d'aires géométrique",
          "paragraphText": "• Exemple du livre : on construit des triangles $IA_nA_{n+1}$ rectangles isocèles par une similitude directe de rapport $\\frac{\\sqrt{2}}{2}$.\n• Les aires $a_n$ forment une suite géométrique : $a_n = \\frac{16}{2^n}$ (avec $a_0 = 16$ et une raison $\\frac{1}{2}$).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p03_q6",
            "type": "mcq",
            "prompt": "Dans l'exemple du livre, les aires $a_n$ des triangles construits par une similitude de rapport $\\frac{\\sqrt{2}}{2}$ vérifient :",
            "options": ["$a_n = \\frac{16}{2^n}$", "$a_n = 16 \\times 2^n$", "$a_n = \\frac{16}{\\sqrt{2}^n}$", "$a_n = 16$ pour tout $n$"],
            "correctAnswerIndex": 0,
            "explanation": "Chaque étape multiplie l'aire par (√2/2)² = 1/2 : a_n = 16/2^n."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p03_q1",
          "type": "mcq",
          "prompt": "Parmi ces propriétés, laquelle une similitude directe ne conserve-t-elle PAS ?",
          "options": ["Le barycentre", "Les angles orientés", "Les distances", "Le parallélisme"],
          "correctAnswerIndex": 2,
          "explanation": "Une similitude directe conserve le barycentre, les angles orientés et le parallélisme, mais pas les distances : elle les multiplie par son rapport k."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p03_q2",
          "type": "mcq",
          "prompt": "Une similitude directe de rapport $3$ multiplie les aires par :",
          "options": ["$3$", "$6$", "$9$", "$\\sqrt{3}$"],
          "correctAnswerIndex": 2,
          "explanation": "Les aires sont multipliées par k² : ici 3² = 9."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p03_q3",
          "type": "mcq",
          "prompt": "Soit $s$ une similitude directe, $I = \\text{bar}\\{(A, 2) ; (B, 1)\\}$ et $F = \\text{bar}\\{(s(A), 2) ; (s(B), 1)\\}$. Que vaut $s(I)$ ?",
          "options": ["$A$", "$B$", "$F$", "On ne peut pas le savoir"],
          "correctAnswerIndex": 2,
          "explanation": "Toute similitude directe conserve le barycentre : s(I) = F."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p03_q4",
          "type": "mcq",
          "prompt": "Une similitude directe $s$ de rapport $\\frac{\\sqrt{2}}{2}$ envoie $A$ sur $D$ et $B$ sur $E$. Que vaut $DE$ ?",
          "options": ["$DE = AB$", "$DE = \\frac{\\sqrt{2}}{2} AB$", "$DE = 2 AB$", "$DE = \\sqrt{2} AB$"],
          "correctAnswerIndex": 1,
          "explanation": "Les distances sont multipliées par le rapport : DE = (√2/2) AB."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p03_q5",
          "type": "mcq",
          "prompt": "Une similitude directe de rapport $\\frac{\\sqrt{2}}{2}$ multiplie les aires par :",
          "options": ["$\\frac{\\sqrt{2}}{2}$", "$\\frac{1}{2}$", "$2$", "$\\sqrt{2}$"],
          "correctAnswerIndex": 1,
          "explanation": "Les aires sont multipliées par k² : (√2/2)² = 1/2."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p03_q6",
          "type": "mcq",
          "prompt": "Dans l'exemple du livre, les aires $a_n$ des triangles construits par une similitude de rapport $\\frac{\\sqrt{2}}{2}$ vérifient :",
          "options": ["$a_n = \\frac{16}{2^n}$", "$a_n = 16 \\times 2^n$", "$a_n = \\frac{16}{\\sqrt{2}^n}$", "$a_n = 16$ pour tout $n$"],
          "correctAnswerIndex": 0,
          "explanation": "Chaque étape multiplie l'aire par (√2/2)² = 1/2 : a_n = 16/2^n."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l16_similitudes_p04",
      "order": 4,
      "title": "Caractérisation : centre, forme réduite, écriture complexe",
      "summary": "Une similitude directe qui n'est pas une translation a un centre unique Ω ; son écriture complexe est z' = az + b, avec rapport |a| et angle Arg(a).",
      "conceptExplanation": "Une similitude directe qui n'est pas une translation admet un unique point invariant $\\Omega$, appelé son centre. Elle s'écrit $s = h \\circ r = r \\circ h$, où $h$ est l'homothétie de centre $\\Omega$ et de rapport $k$, et $r$ la rotation de centre $\\Omega$ et d'angle $\\theta$ : c'est sa forme canonique (ou forme réduite). Le centre, le rapport et l'angle sont les éléments caractéristiques de $s$.\\nDans le plan complexe, une similitude directe a pour écriture $z' = az + b$ avec $a \\in \\mathbb{C}^*$ et $b \\in \\mathbb{C}$. Son centre $\\Omega$ a pour affixe $\\frac{b}{1 - a}$ (si $a \\neq 1$), son rapport est $k = |a|$ et son angle est $\\theta = \\text{Arg}(a)$.\\nTableau récapitulatif : si $a = 1$, c'est une translation ; si $a \\in \\mathbb{R}^* \\setminus \\{1\\}$, c'est une homothétie ; si $|a| = 1$ (et $a \\neq 1$), c'est une rotation ; si $|a| \\neq 1$, c'est une similitude directe (qui n'est ni une translation, ni une rotation, ni une homothétie).\\nAutre écriture : $z' = ke^{i\\theta}(z - z_A) + z_A$ pour une similitude de centre $A$ d'affixe $z_A$, de rapport $k$ et d'angle $\\theta$.",
      "keyRule": "z' = az + b : centre Ω d'affixe b/(1−a), rapport |a|, angle Arg(a).",
      "formulas": [
        {
          "name": "Écriture complexe",
          "formula": "z' = az + b, \\quad k = |a|, \\quad \\theta = \\text{Arg}(a), \\quad z_\\Omega = \\frac{b}{1 - a}",
          "note": "a ∈ C*, b ∈ C. Si a = 1, c'est une translation."
        },
        {
          "name": "Forme centrée",
          "formula": "z' = ke^{i\\theta}(z - z_A) + z_A",
          "note": "Similitude de centre A d'affixe z_A, de rapport k et d'angle θ."
        }
      ],
      "workedExample": {
        "title": "Nature et éléments de z' = (1 − i)z − 3 + 2i",
        "statement": "Déterminer la nature et les éléments caractéristiques de la similitude directe $z' = (1 - i)z - 3 + 2i$.",
        "methodSteps": [
          "On a $a = 1 - i$ et $b = -3 + 2i$.",
          "Le rapport est $k = |1 - i| = \\sqrt{2}$ et l'angle est $\\theta = \\text{Arg}(1 - i) = -\\frac{\\pi}{4}$.",
          "Le centre a pour affixe $\\frac{b}{1 - a} = \\frac{-3 + 2i}{i} = 2 + 3i$."
        ],
        "conclusion": "C'est une similitude directe de centre Ω(2 + 3i), de rapport √2 et d'angle −π/4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le centre d'une similitude directe",
          "stepTheme": "Le centre d'une similitude directe",
          "stepBadge": "Le centre d'une similitude directe",
          "paragraphText": "• Une similitude directe qui n'est pas une translation admet un unique point invariant $\\Omega$, appelé son centre.\n• Elle s'écrit $s = h \\circ r = r \\circ h$ : c'est sa forme canonique (ou forme réduite), avec $h$ l'homothétie de centre $\\Omega$ et de rapport $k$, et $r$ la rotation de centre $\\Omega$ et d'angle $\\theta$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p04_q1",
            "type": "mcq",
            "prompt": "Combien de points invariants admet une similitude directe qui n'est pas une translation ?",
            "options": ["Aucun", "Un seul, appelé le centre", "Deux", "Une infinité"],
            "correctAnswerIndex": 1,
            "explanation": "Une similitude directe qui n'est pas une translation admet un unique point invariant : son centre Ω."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'écriture complexe z' = az + b",
          "stepTheme": "L'écriture complexe z' = az + b",
          "stepBadge": "L'écriture complexe z' = az + b",
          "paragraphText": "• Une similitude directe a pour écriture complexe $z' = az + b$ avec $a \\in \\mathbb{C}^*$ et $b \\in \\mathbb{C}$.\n• Son rapport est $k = |a|$, son angle est $\\theta = \\text{Arg}(a)$, et son centre a pour affixe $\\frac{b}{1 - a}$ (si $a \\neq 1$).",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p04_q2",
            "type": "mcq",
            "prompt": "Pour la similitude directe $z' = az + b$, que valent le rapport et l'angle ?",
            "options": ["$k = |b|$ et $\\theta = \\text{Arg}(b)$", "$k = |a|$ et $\\theta = \\text{Arg}(a)$", "$k = |a|$ et $\\theta = \\text{Arg}(b)$", "$k = a$ et $\\theta = b$"],
            "correctAnswerIndex": 1,
            "explanation": "Le rapport est k = |a| et l'angle est θ = Arg(a). (L'option k = |a| et θ = Arg(b) est une erreur du livre.)"
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Trouver le centre, le rapport et l'angle",
          "stepTheme": "Trouver le centre, le rapport et l'angle",
          "stepBadge": "Trouver le centre, le rapport et l'angle",
          "paragraphText": "• Méthode : on lit $a$ et $b$ dans $z' = az + b$, puis $k = |a|$, $\\theta = \\text{Arg}(a)$ et $z_\\Omega = \\frac{b}{1 - a}$.\n• Exemple de la leçon : pour $z' = (1 - i)z - 3 + 2i$, on trouve $k = \\sqrt{2}$, $\\theta = -\\frac{\\pi}{4}$ et $\\Omega$ d'affixe $2 + 3i$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p04_q3",
            "type": "mcq",
            "prompt": "Quel est le centre de la similitude directe $z' = (1 - i)z - 3 + 2i$ ?",
            "options": ["$\\Omega$ d'affixe $-3 + 2i$", "$\\Omega$ d'affixe $2 + 3i$", "$\\Omega$ d'affixe $1 - i$", "$\\Omega$ d'affixe $-2 - 3i$"],
            "correctAnswerIndex": 1,
            "explanation": "Le centre a pour affixe b/(1−a) = (−3+2i)/i = 2+3i."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "De l'écriture complexe aux éléments",
          "stepTheme": "De l'écriture complexe aux éléments",
          "stepBadge": "De l'écriture complexe aux éléments",
          "paragraphText": "• Exemple de la leçon : $z' = 5z + 2i$ est une homothétie de rapport $5$ et de centre $\\Omega$ d'affixe $-\\frac{i}{2}$.\n• $z' = z + 1 + 3i$ est une translation de vecteur $1 + 3i$.\n• $z' = (\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i)z + \\frac{1}{2} - \\frac{\\sqrt{3}}{2}i$ est une rotation d'angle $\\frac{\\pi}{3}$ et de centre $A(1)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p04_q4",
            "type": "mcq",
            "prompt": "Quelle est la nature de la transformation $z' = z + 1 + 3i$ ?",
            "options": ["Une rotation", "Une homothétie", "Une translation de vecteur $1 + 3i$", "Une similitude directe de rapport $2$"],
            "correctAnswerIndex": 2,
            "explanation": "Ici a = 1 : c'est une translation de vecteur b = 1 + 3i."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "θ = Arg(a), pas Arg(b)",
          "stepTheme": "θ = Arg(a), pas Arg(b)",
          "stepBadge": "θ = Arg(a), pas Arg(b)",
          "paragraphText": "• Attention : le livre propose l'option « $k = |a|$ et $\\theta = \\text{Arg}(b)$ ».\n• C'est une erreur : l'angle est $\\theta = \\text{Arg}(a)$, pas $\\text{Arg}(b)$. Le nombre $b$ ne sert qu'à trouver le centre.",
          "konanTip": "Dans z' = az + b, tout vient de a (rapport et angle) ; b ne sert qu'au centre.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p04_q5",
            "type": "mcq",
            "prompt": "L'affirmation « pour $z' = az + b$, on a $k = |a|$ et $\\theta = \\text{Arg}(b)$ » est-elle vraie ?",
            "options": ["Vrai", "Faux : $\\theta = \\text{Arg}(a)$", "Faux : $k = |b|$", "Faux : $\\theta = \\text{Arg}(a + b)$"],
            "correctAnswerIndex": 1,
            "explanation": "L'angle est θ = Arg(a). L'option du livre (θ = Arg(b)) est fausse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Le tableau récapitulatif",
          "stepTheme": "Le tableau récapitulatif",
          "stepBadge": "Le tableau récapitulatif",
          "paragraphText": "• Si $a = 1$ : translation. Si $a \\in \\mathbb{R}^* \\setminus \\{1\\}$ : homothétie.\n• Si $|a| = 1$ (et $a \\neq 1$) : rotation. Si $|a| \\neq 1$ : similitude directe (ni translation, ni rotation, ni homothétie).\n• Exemple : $z' = (-1 + i)z + 2$ est une similitude directe de rapport $\\sqrt{2}$ et d'angle $\\frac{3\\pi}{4}$, de centre $\\Omega$ d'affixe $\\frac{4 + 2i}{5}$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la nature de la transformation $z' = (-1 + i)z + 2$ ?",
            "options": ["Une translation", "Une rotation", "Une homothétie", "Une similitude directe de rapport $\\sqrt{2}$ et d'angle $\\frac{3\\pi}{4}$"],
            "correctAnswerIndex": 3,
            "explanation": "|a| = √2 ≠ 1 : c'est une similitude directe de rapport √2 et d'angle Arg(−1+i) = 3π/4."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p04_q1",
          "type": "mcq",
          "prompt": "Combien de points invariants admet une similitude directe qui n'est pas une translation ?",
          "options": ["Aucun", "Un seul, appelé le centre", "Deux", "Une infinité"],
          "correctAnswerIndex": 1,
          "explanation": "Une similitude directe qui n'est pas une translation admet un unique point invariant : son centre Ω."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p04_q2",
          "type": "mcq",
          "prompt": "Pour la similitude directe $z' = az + b$, que valent le rapport et l'angle ?",
          "options": ["$k = |b|$ et $\\theta = \\text{Arg}(b)$", "$k = |a|$ et $\\theta = \\text{Arg}(a)$", "$k = |a|$ et $\\theta = \\text{Arg}(b)$", "$k = a$ et $\\theta = b$"],
          "correctAnswerIndex": 1,
          "explanation": "Le rapport est k = |a| et l'angle est θ = Arg(a). (L'option k = |a| et θ = Arg(b) est une erreur du livre.)"
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p04_q3",
          "type": "mcq",
          "prompt": "Quel est le centre de la similitude directe $z' = (1 - i)z - 3 + 2i$ ?",
          "options": ["$\\Omega$ d'affixe $-3 + 2i$", "$\\Omega$ d'affixe $2 + 3i$", "$\\Omega$ d'affixe $1 - i$", "$\\Omega$ d'affixe $-2 - 3i$"],
          "correctAnswerIndex": 1,
          "explanation": "Le centre a pour affixe b/(1−a) = (−3+2i)/i = 2+3i."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p04_q4",
          "type": "mcq",
          "prompt": "Quelle est la nature de la transformation $z' = z + 1 + 3i$ ?",
          "options": ["Une rotation", "Une homothétie", "Une translation de vecteur $1 + 3i$", "Une similitude directe de rapport $2$"],
          "correctAnswerIndex": 2,
          "explanation": "Ici a = 1 : c'est une translation de vecteur b = 1 + 3i."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p04_q5",
          "type": "mcq",
          "prompt": "L'affirmation « pour $z' = az + b$, on a $k = |a|$ et $\\theta = \\text{Arg}(b)$ » est-elle vraie ?",
          "options": ["Vrai", "Faux : $\\theta = \\text{Arg}(a)$", "Faux : $k = |b|$", "Faux : $\\theta = \\text{Arg}(a + b)$"],
          "correctAnswerIndex": 1,
          "explanation": "L'angle est θ = Arg(a). L'option du livre (θ = Arg(b)) est fausse."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la nature de la transformation $z' = (-1 + i)z + 2$ ?",
          "options": ["Une translation", "Une homothétie", "Une rotation", "Une similitude directe de rapport $\\sqrt{2}$ et d'angle $\\frac{3\\pi}{4}$"],
          "correctAnswerIndex": 3,
          "explanation": "|a| = √2 ≠ 1 : c'est une similitude directe de rapport √2 et d'angle Arg(−1+i) = 3π/4."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l16_similitudes_p05",
      "order": 5,
      "title": "Détermination d'une similitude directe",
      "summary": "Une similitude directe est déterminée par son centre, son rapport et son angle, ou par l'image de deux points distincts, ou encore par son rapport, son angle et l'image d'un point.",
      "conceptExplanation": "Une similitude directe est déterminée par ses éléments caractéristiques : si $s$ a pour centre $A$, pour rapport $k$ et pour angle $\\theta$, alors pour tout point $M \\neq A$, on a $s(M) = M'$ si et seulement si $AM' = k \\times AM$ et $\\text{Mes}(\\overrightarrow{AM}, \\overrightarrow{AM'}) = \\theta$.\\nLes triangles $AMM'$ ont tous la même nature et le même sens, avec pour sommet commun le centre $A$ : si $\\theta = \\pm \\frac{\\pi}{4}$ et $k = \\frac{\\sqrt{2}}{2}$ ou $k = \\sqrt{2}$, le triangle $AMM'$ est rectangle isocèle en $M$ ou en $M'$ ; si $\\theta = \\pm \\frac{\\pi}{3}$ et $k = \\frac{1}{2}$ ou $k = 2$, le triangle $AMM'$ est demi-équilatéral, rectangle en $M$ ou en $M'$.\\nUne similitude directe est aussi déterminée par deux points distincts et leurs images : il existe une unique similitude directe qui envoie $A$ sur $C$ et $B$ sur $D$ dès que $A \\neq B$ et $C \\neq D$. En particulier, il existe une unique similitude directe qui envoie $A$ sur $B$ et $B$ sur $C$, et une unique similitude directe qui transforme un triangle $ABC$ en un triangle $A'B'C'$ de même sens avec $\\text{mes}(\\widehat{A}) = \\text{mes}(\\widehat{A'})$ et $\\frac{A'B'}{AB} = \\frac{A'C'}{AC}$ (triangles directement semblables).\\nEnfin, il existe une similitude directe de rapport $k$ et d'angle $\\theta$ donnés qui transforme un point $A$ en un point $B$ donnés : son centre $K$ appartient à l'ensemble $(E_1)$ des points $M$ tels que $\\text{Mes}(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\theta$ et à l'ensemble $(E_2)$ des points $M$ tels que $\\frac{MB}{MA} = k$.",
      "keyRule": "Similitude unique A→C et B→D si A≠B et C≠D. Par centre/rapport/angle : AM' = k·AM et Mes(AM→, AM'→) = θ.",
      "formulas": [
        {
          "name": "Par les éléments caractéristiques",
          "formula": "s(M) = M' \\iff AM' = k \\times AM \\text{ et } \\text{Mes}(\\overrightarrow{AM}, \\overrightarrow{AM'}) = \\theta",
          "note": "s de centre A, de rapport k et d'angle θ, M ≠ A."
        },
        {
          "name": "Par deux points et leurs images",
          "formula": "\\exists ! \\ s, \\quad s(A) = C, \\ s(B) = D \\quad (A \\neq B, \\ C \\neq D)",
          "note": "La similitude directe est unique."
        }
      ],
      "workedExample": {
        "title": "Les carrés ABCD, AEFG, AHIJ",
        "statement": "Soient $ABCD$, $AEFG$ et $AHIJ$ trois carrés directs de même sommet $A$. Soit $s$ la similitude directe de centre $A$, de rapport $\\sqrt{2}$ et d'angle $\\frac{\\pi}{4}$. Déterminer $s(H)$, $s(E)$ et $s(B)$.",
        "methodSteps": [
          "Dans un carré direct, la diagonale fait un angle de $\\frac{\\pi}{4}$ avec le côté et sa longueur vaut $\\sqrt{2}$ fois celle du côté.",
          "Le point $H$ est sur la diagonale du carré $AHIJ$ : $s(H) = I$.",
          "De même, $s(E) = F$ et $s(B) = C$."
        ],
        "conclusion": "s(H) = I, s(E) = F et s(B) = C."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Par le centre, le rapport et l'angle",
          "stepTheme": "Par le centre, le rapport et l'angle",
          "stepBadge": "Par le centre, le rapport et l'angle",
          "paragraphText": "• Une similitude directe de centre $A$, de rapport $k$ et d'angle $\\theta$ est déterminée : pour $M \\neq A$, $s(M) = M'$ si et seulement si $AM' = k \\times AM$ et $\\text{Mes}(\\overrightarrow{AM}, \\overrightarrow{AM'}) = \\theta$.\n• Les triangles $AMM'$ ont tous la même nature et le même sens.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p05_q1",
            "type": "mcq",
            "prompt": "Soit $s$ la similitude directe de centre $A$, de rapport $k$ et d'angle $\\theta$. Quand a-t-on $s(M) = M'$ ?",
            "options": ["Quand $AM' = k \\times AM$ et $\\text{Mes}(\\overrightarrow{AM}, \\overrightarrow{AM'}) = \\theta$", "Quand $AM' = AM$", "Quand $M = A$", "Quand $AM' = \\frac{AM}{k}$"],
            "correctAnswerIndex": 0,
            "explanation": "s(M) = M' si et seulement si AM' = k×AM et Mes(AM→, AM'→) = θ."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La nature des triangles AMM'",
          "stepTheme": "La nature des triangles AMM'",
          "stepBadge": "La nature des triangles AMM'",
          "paragraphText": "• Si $\\theta = \\pm \\frac{\\pi}{4}$ et $k = \\frac{\\sqrt{2}}{2}$ ou $k = \\sqrt{2}$, le triangle $AMM'$ est rectangle isocèle en $M$ ou en $M'$.\n• Si $\\theta = \\pm \\frac{\\pi}{3}$ et $k = \\frac{1}{2}$ ou $k = 2$, le triangle $AMM'$ est demi-équilatéral, rectangle en $M$ ou en $M'$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p05_q2",
            "type": "mcq",
            "prompt": "Pour une similitude directe de centre $A$, de rapport $\\sqrt{2}$ et d'angle $\\frac{\\pi}{4}$, comment est le triangle $AMM'$ ?",
            "options": ["Équilatéral", "Rectangle isocèle en $M$ ou en $M'$", "Demi-équilatéral", "Isocèle en $A$"],
            "correctAnswerIndex": 1,
            "explanation": "Avec θ = ±π/4 et k = √2 (ou √2/2), le triangle AMM' est rectangle isocèle en M ou en M'."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Par deux points et leurs images",
          "stepTheme": "Par deux points et leurs images",
          "stepBadge": "Par deux points et leurs images",
          "paragraphText": "• Méthode : il existe une unique similitude directe qui envoie $A$ sur $C$ et $B$ sur $D$ dès que $A \\neq B$ et $C \\neq D$.\n• Son rapport est $\\frac{CD}{AB}$ et son angle est $\\text{Mes}(\\overrightarrow{AB}, \\overrightarrow{CD})$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p05_q3",
            "type": "mcq",
            "prompt": "Combien de similitudes directes envoient $A$ sur $C$ et $B$ sur $D$ quand $A \\neq B$ et $C \\neq D$ ?",
            "options": ["Aucune", "Une seule", "Deux", "Une infinité"],
            "correctAnswerIndex": 1,
            "explanation": "Il existe une unique similitude directe qui envoie A sur C et B sur D dès que A ≠ B et C ≠ D."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les carrés ABCD et DCEF",
          "stepTheme": "Les carrés ABCD et DCEF",
          "stepBadge": "Les carrés ABCD et DCEF",
          "paragraphText": "• Exemple de la leçon : $ABCD$ et $DCEF$ sont deux carrés directs, $O$ est le centre de $ABCD$.\n• La similitude directe $s$ de centre $A$ qui envoie $B$ sur $C$ et $O$ sur $D$ vérifie $s(C) = F$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p05_q4",
            "type": "mcq",
            "prompt": "Dans l'exemple de la leçon, la similitude directe $s$ de centre $A$ qui envoie $B$ sur $C$ et $O$ sur $D$ vérifie :",
            "options": ["$s(C) = E$", "$s(C) = F$", "$s(C) = D$", "$s(C) = B$"],
            "correctAnswerIndex": 1,
            "explanation": "La similitude s de centre A envoie B sur C, O sur D et C sur F."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Il faut C ≠ D",
          "stepTheme": "Il faut C ≠ D",
          "stepBadge": "Il faut C ≠ D",
          "paragraphText": "• Piège : la similitude directe unique $A \\to C$ et $B \\to D$ exige $A \\neq B$ ET $C \\neq D$.\n• Si $C = D$, aucune similitude directe ne peut envoyer deux points distincts sur le même point : une similitude est une bijection.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p05_q5",
            "type": "mcq",
            "prompt": "Peut-on trouver une similitude directe qui envoie $A$ sur $C$ et $B$ sur $C$ avec $A \\neq B$ ?",
            "options": ["Oui, toujours", "Non : une similitude est une bijection, deux points distincts ne peuvent pas avoir la même image", "Oui, si $C$ est le centre", "Non : il faudrait $A = B$"],
            "correctAnswerIndex": 1,
            "explanation": "Une similitude directe est une bijection : deux points distincts A et B ne peuvent pas avoir la même image C."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Triangles directement semblables",
          "stepTheme": "Triangles directement semblables",
          "stepBadge": "Triangles directement semblables",
          "paragraphText": "• Deux triangles $ABC$ et $A'B'C'$ de même sens sont directement semblables s'il existe une similitude directe qui transforme l'un en l'autre.\n• Cela revient à : $\\text{mes}(\\widehat{A}) = \\text{mes}(\\widehat{A'})$ et $\\frac{A'B'}{AB} = \\frac{A'C'}{AC}$.\n• Exemple du livre : deux triangles directement semblables de rapport $2$ vérifient $\\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC} = 2$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p05_q6",
            "type": "mcq",
            "prompt": "Deux triangles $ABC$ et $DEF$ directement semblables de rapport $2$ vérifient :",
            "options": ["$\\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC} = 2$", "$\\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC} = \\frac{1}{2}$", "$DE = AB$ et $EF = BC$", "$\\frac{DE}{AB} = 4$"],
            "correctAnswerIndex": 0,
            "explanation": "Pour des triangles directement semblables de rapport 2, les côtés homologues sont dans le rapport 2 : DE/AB = EF/BC = DF/AC = 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p05_q1",
          "type": "mcq",
          "prompt": "Soit $s$ la similitude directe de centre $A$, de rapport $k$ et d'angle $\\theta$. Quand a-t-on $s(M) = M'$ ?",
          "options": ["Quand $AM' = k \\times AM$ et $\\text{Mes}(\\overrightarrow{AM}, \\overrightarrow{AM'}) = \\theta$", "Quand $AM' = AM$", "Quand $M = A$", "Quand $AM' = \\frac{AM}{k}$"],
          "correctAnswerIndex": 0,
          "explanation": "s(M) = M' si et seulement si AM' = k×AM et Mes(AM→, AM'→) = θ."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p05_q2",
          "type": "mcq",
          "prompt": "Pour une similitude directe de centre $A$, de rapport $\\sqrt{2}$ et d'angle $\\frac{\\pi}{4}$, comment est le triangle $AMM'$ ?",
          "options": ["Équilatéral", "Rectangle isocèle en $M$ ou en $M'$", "Demi-équilatéral", "Isocèle en $A$"],
          "correctAnswerIndex": 1,
          "explanation": "Avec θ = ±π/4 et k = √2 (ou √2/2), le triangle AMM' est rectangle isocèle en M ou en M'."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p05_q3",
          "type": "mcq",
          "prompt": "Combien de similitudes directes envoient $A$ sur $C$ et $B$ sur $D$ quand $A \\neq B$ et $C \\neq D$ ?",
          "options": ["Aucune", "Une seule", "Deux", "Une infinité"],
          "correctAnswerIndex": 1,
          "explanation": "Il existe une unique similitude directe qui envoie A sur C et B sur D dès que A ≠ B et C ≠ D."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p05_q4",
          "type": "mcq",
          "prompt": "Dans l'exemple de la leçon, la similitude directe $s$ de centre $A$ qui envoie $B$ sur $C$ et $O$ sur $D$ vérifie :",
          "options": ["$s(C) = E$", "$s(C) = F$", "$s(C) = D$", "$s(C) = B$"],
          "correctAnswerIndex": 1,
          "explanation": "La similitude s de centre A envoie B sur C, O sur D et C sur F."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p05_q5",
          "type": "mcq",
          "prompt": "Peut-on trouver une similitude directe qui envoie $A$ sur $C$ et $B$ sur $C$ avec $A \\neq B$ ?",
          "options": ["Oui, toujours", "Non : une similitude est une bijection, deux points distincts ne peuvent pas avoir la même image", "Oui, si $C$ est le centre", "Non : il faudrait $A = B$"],
          "correctAnswerIndex": 1,
          "explanation": "Une similitude directe est une bijection : deux points distincts A et B ne peuvent pas avoir la même image C."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p05_q6",
          "type": "mcq",
          "prompt": "Deux triangles $ABC$ et $DEF$ directement semblables de rapport $2$ vérifient :",
          "options": ["$\\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC} = 2$", "$\\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC} = \\frac{1}{2}$", "$DE = AB$ et $EF = BC$", "$\\frac{DE}{AB} = 4$"],
          "correctAnswerIndex": 0,
          "explanation": "Pour des triangles directement semblables de rapport 2, les côtés homologues sont dans le rapport 2 : DE/AB = EF/BC = DF/AC = 2."
        }
      ]
    },
    {
      "id": "terminale_c_maths_geometrie_l16_similitudes_p06",
      "order": 6,
      "title": "Utilisations : prouver, construire, trouver un lieu",
      "summary": "Les similitudes directes servent à prouver des propriétés géométriques, à résoudre des problèmes de construction et à trouver des lieux, comme dans la situation du pagne.",
      "conceptExplanation": "Les similitudes directes servent à prouver une propriété : par exemple, si $IBC$, $JAC$ et $KBA$ sont des triangles directs rectangles isocèles en $I$, $J$ et $K$, alors la similitude $s_1$ de centre $A$ qui transforme $C$ en $J$ (angle $\\frac{\\pi}{4}$, rapport $\\frac{\\sqrt{2}}{2}$) et la similitude $s_2$ de centre $B$ qui transforme $A$ en $K$ et $C$ en $I$ (angle $\\frac{\\pi}{4}$, rapport $\\frac{\\sqrt{2}}{2}$) donnent $s = s_1 \\circ s_2^{-1}$ qui est une translation : on en déduit que $IJAK$ est un parallélogramme.\\nElles servent à résoudre un problème de construction : pour construire un triangle $ABC$ rectangle en $B$ avec $\\text{Mes}(\\overrightarrow{AB}, \\overrightarrow{AC}) = \\frac{\\pi}{3}$, $B$ sur une droite $(D_2)$ et $C$ sur une droite $(D_1)$, on utilise la similitude $s$ de centre $A$, de rapport $2$ et d'angle $\\frac{\\pi}{3}$ : $C = s(B)$, donc $C$ est l'intersection de $(D_1)$ et de $(D_2')$, image de $(D_2)$ par $s$.\\nElles servent à trouver un lieu : si $(C)$ est un cercle de diamètre $[IJ]$, $A$ un point extérieur, $K$ un point de $(C)$ et $B$ tel que le triangle $AKB$ soit rectangle isocèle en $B$ de sens indirect, alors $B$ est l'image de $K$ par la similitude directe $s$ de centre $A$, de rapport $\\frac{\\sqrt{2}}{2}$ et d'angle $-\\frac{\\pi}{4}$ : le lieu de $B$ est le cercle $(C')$ de diamètre $[I'J']$, image de $(C)$ par $s$.\\nSituation complexe finale (motifs de pagne) : pour construire une droite passant par $A$ qui coupe deux droites $(D)$ et $(D')$ en $B$ et $C$ avec $B$ et $C$ équidistants de $A$, on utilise l'homothétie $h$ de centre $A$ et de rapport $\\frac{1}{2}$ : $B$ est sur $(D)$, $E$ est sur $(D')$, on prend les images de $(D)$ et $(D')$ par $h$, leur intersection $O$ donne la droite cherchée $(AO)$.",
      "keyRule": "Prouver : composer des similitudes pour obtenir une translation. Construire : l'image d'une droite par s donne le point cherché. Lieu : l'image d'un cercle par s est un cercle.",
      "formulas": [
        {
          "name": "Lieu par similitude",
          "formula": "s(\\text{cercle}) = \\text{cercle}, \\quad r' = k \\times r",
          "note": "L'image d'un cercle par une similitude directe de rapport k est un cercle de rayon k fois plus grand."
        }
      ],
      "workedExample": {
        "title": "Le lieu du point B",
        "statement": "Soit $(C)$ un cercle de diamètre $[IJ]$, $A$ un point extérieur à $(C)$, $K$ un point de $(C)$ et $B$ tel que le triangle $AKB$ soit rectangle isocèle en $B$ de sens indirect. Quel est le lieu de $B$ quand $K$ décrit $(C)$ ?",
        "methodSteps": [
          "Le triangle $AKB$ est rectangle isocèle en $B$ de sens indirect : $B$ est l'image de $K$ par la similitude directe $s$ de centre $A$, de rapport $\\frac{\\sqrt{2}}{2}$ et d'angle $-\\frac{\\pi}{4}$.",
          "Quand $K$ décrit le cercle $(C)$, $B = s(K)$ décrit l'image de $(C)$ par $s$.",
          "L'image d'un cercle par une similitude directe est un cercle : le lieu de $B$ est le cercle $(C')$ de diamètre $[I'J']$, image de $(C)$ par $s$."
        ],
        "conclusion": "Le lieu de B est le cercle (C') image de (C) par s."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Prouver une propriété : IJAK est un parallélogramme",
          "stepTheme": "Prouver une propriété : IJAK est un parallélogramme",
          "stepBadge": "Prouver une propriété : IJAK est un parallélogramme",
          "paragraphText": "• Exemple de la leçon : $IBC$, $JAC$ et $KBA$ sont des triangles directs rectangles isocèles en $I$, $J$ et $K$.\n• La similitude $s_1$ de centre $A$ transforme $C$ en $J$ (angle $\\frac{\\pi}{4}$, rapport $\\frac{\\sqrt{2}}{2}$) et la similitude $s_2$ de centre $B$ transforme $A$ en $K$ et $C$ en $I$ (angle $\\frac{\\pi}{4}$, rapport $\\frac{\\sqrt{2}}{2}$).\n• Alors $s = s_1 \\circ s_2^{-1}$ est une translation : on en déduit que $IJAK$ est un parallélogramme.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p06_q1",
            "type": "mcq",
            "prompt": "Dans l'exemple de la leçon, comment prouve-t-on que $IJAK$ est un parallélogramme ?",
            "options": ["En montrant que $s = s_1 \\circ s_2^{-1}$ est une translation", "En montrant que $s_1$ et $s_2$ ont le même centre", "En calculant les longueurs $IJ$ et $AK$", "En montrant que $IJAK$ est un rectangle"],
            "correctAnswerIndex": 0,
            "explanation": "s = s1∘s2⁻¹ est une translation : elle envoie I sur J et K sur A, donc IJAK est un parallélogramme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Construire un triangle ABC",
          "stepTheme": "Construire un triangle ABC",
          "stepBadge": "Construire un triangle ABC",
          "paragraphText": "• Méthode : pour construire un triangle $ABC$ rectangle en $B$ avec $\\text{Mes}(\\overrightarrow{AB}, \\overrightarrow{AC}) = \\frac{\\pi}{3}$, $B$ sur $(D_2)$ et $C$ sur $(D_1)$, on utilise la similitude $s$ de centre $A$, de rapport $2$ et d'angle $\\frac{\\pi}{3}$.\n• Comme $C = s(B)$, le point $C$ est l'intersection de $(D_1)$ et de $(D_2')$, image de $(D_2)$ par $s$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p06_q2",
            "type": "mcq",
            "prompt": "Dans la construction de la leçon, comment trouve-t-on le point $C$ ?",
            "options": ["Comme l'intersection de $(D_1)$ et de $(D_2')$, image de $(D_2)$ par $s$", "Comme le milieu de $[AB]$", "Comme l'intersection de $(D_1)$ et $(D_2)$", "Comme le symétrique de $B$ par rapport à $A$"],
            "correctAnswerIndex": 0,
            "explanation": "C = s(B) : C est sur (D1) et sur l'image (D2') de (D2) par s, donc à leur intersection."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le lieu du point B",
          "stepTheme": "Le lieu du point B",
          "stepBadge": "Le lieu du point B",
          "paragraphText": "• Exemple de la leçon : le triangle $AKB$ est rectangle isocèle en $B$ de sens indirect, donc $B$ est l'image de $K$ par la similitude directe $s$ de centre $A$, de rapport $\\frac{\\sqrt{2}}{2}$ et d'angle $-\\frac{\\pi}{4}$.\n• Quand $K$ décrit le cercle $(C)$, $B$ décrit le cercle $(C')$ image de $(C)$ par $s$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p06_q3",
            "type": "mcq",
            "prompt": "Quel est le lieu de $B$ quand $K$ décrit le cercle $(C)$ ?",
            "options": ["Une droite", "Le cercle $(C')$ image de $(C)$ par $s$", "Le cercle $(C)$ lui-même", "Un segment"],
            "correctAnswerIndex": 1,
            "explanation": "B = s(K) : quand K décrit (C), B décrit l'image de (C) par s, qui est un cercle (C')."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le sens indirect donne un angle négatif",
          "stepTheme": "Le sens indirect donne un angle négatif",
          "stepBadge": "Le sens indirect donne un angle négatif",
          "paragraphText": "• Attention : le triangle $AKB$ est rectangle isocèle en $B$ de sens INDIRECT : la similitude $s$ a pour angle $-\\frac{\\pi}{4}$, pas $\\frac{\\pi}{4}$.\n• Le sens du triangle (direct ou indirect) donne le signe de l'angle de la similitude.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p06_q4",
            "type": "mcq",
            "prompt": "Le triangle $AKB$ est rectangle isocèle en $B$ de sens indirect. Quel est l'angle de la similitude $s$ de centre $A$ qui envoie $K$ sur $B$ ?",
            "options": ["$\\frac{\\pi}{4}$", "$-\\frac{\\pi}{4}$", "$\\frac{\\pi}{2}$", "$-\\frac{\\pi}{2}$"],
            "correctAnswerIndex": 1,
            "explanation": "Le sens indirect donne un angle négatif : −π/4 (le rapport est √2/2)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La situation du pagne",
          "stepTheme": "La situation du pagne",
          "stepBadge": "La situation du pagne",
          "paragraphText": "• Situation complexe finale : construire une droite passant par $A$ qui coupe deux droites $(D)$ et $(D')$ en $B$ et $C$ avec $B$ et $C$ équidistants de $A$.\n• Solution : on utilise l'homothétie $h$ de centre $A$ et de rapport $\\frac{1}{2}$. On prend les images de $(D)$ et $(D')$ par $h$ : leur intersection $O$ donne la droite cherchée $(AO)$.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p06_q5",
            "type": "mcq",
            "prompt": "Dans la situation du pagne, quelle transformation utilise-t-on pour construire la droite cherchée ?",
            "options": ["Une rotation", "Une homothétie de centre $A$ et de rapport $\\frac{1}{2}$", "Une translation", "Une symétrie orthogonale"],
            "correctAnswerIndex": 1,
            "explanation": "On utilise l'homothétie h de centre A et de rapport 1/2 : l'intersection O des droites images donne la droite (AO)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Bilan de la leçon",
          "stepTheme": "Bilan de la leçon",
          "stepBadge": "Bilan de la leçon",
          "paragraphText": "• Une similitude directe est la composée d'une homothétie et d'un déplacement : elle a un rapport $k > 0$ et un angle $\\theta$.\n• Elle est déterminée par son centre, son rapport et son angle, ou par l'image de deux points distincts.\n• Elle sert à prouver des propriétés, à construire des figures et à trouver des lieux.",
          "exercise": {
            "id": "terminale_c_maths_geometrie_l16_similitudes_p06_q6",
            "type": "mcq",
            "prompt": "Parmi ces affirmations sur les similitudes directes, laquelle est fausse ?",
            "options": ["Elles conservent les angles orientés", "Elles multiplient les aires par $k^2$", "Elles sont déterminées par l'image de deux points distincts", "Elles conservent les distances"],
            "correctAnswerIndex": 3,
            "explanation": "Une similitude directe multiplie les distances par son rapport k : elle ne les conserve que si k = 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p06_q1",
          "type": "mcq",
          "prompt": "Dans l'exemple de la leçon, comment prouve-t-on que $IJAK$ est un parallélogramme ?",
          "options": ["En montrant que $s = s_1 \\circ s_2^{-1}$ est une translation", "En montrant que $s_1$ et $s_2$ ont le même centre", "En calculant les longueurs $IJ$ et $AK$", "En montrant que $IJAK$ est un rectangle"],
          "correctAnswerIndex": 0,
          "explanation": "s = s1∘s2⁻¹ est une translation : elle envoie I sur J et K sur A, donc IJAK est un parallélogramme."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p06_q2",
          "type": "mcq",
          "prompt": "Dans la construction de la leçon, comment trouve-t-on le point $C$ ?",
          "options": ["Comme l'intersection de $(D_1)$ et de $(D_2')$, image de $(D_2)$ par $s$", "Comme le milieu de $[AB]$", "Comme l'intersection de $(D_1)$ et $(D_2)$", "Comme le symétrique de $B$ par rapport à $A$"],
          "correctAnswerIndex": 0,
          "explanation": "C = s(B) : C est sur (D1) et sur l'image (D2') de (D2) par s, donc à leur intersection."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p06_q3",
          "type": "mcq",
          "prompt": "Quel est le lieu de $B$ quand $K$ décrit le cercle $(C)$ ?",
          "options": ["Une droite", "Le cercle $(C')$ image de $(C)$ par $s$", "Le cercle $(C)$ lui-même", "Un segment"],
          "correctAnswerIndex": 1,
          "explanation": "B = s(K) : quand K décrit (C), B décrit l'image de (C) par s, qui est un cercle (C')."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p06_q4",
          "type": "mcq",
          "prompt": "Le triangle $AKB$ est rectangle isocèle en $B$ de sens indirect. Quel est l'angle de la similitude $s$ de centre $A$ qui envoie $K$ sur $B$ ?",
          "options": ["$\\frac{\\pi}{4}$", "$-\\frac{\\pi}{4}$", "$\\frac{\\pi}{2}$", "$-\\frac{\\pi}{2}$"],
          "correctAnswerIndex": 1,
          "explanation": "Le sens indirect donne un angle négatif : −π/4 (le rapport est √2/2)."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p06_q5",
          "type": "mcq",
          "prompt": "Dans la situation du pagne, quelle transformation utilise-t-on pour construire la droite cherchée ?",
          "options": ["Une rotation", "Une homothétie de centre $A$ et de rapport $\\frac{1}{2}$", "Une translation", "Une symétrie orthogonale"],
          "correctAnswerIndex": 1,
          "explanation": "On utilise l'homothétie h de centre A et de rapport 1/2 : l'intersection O des droites images donne la droite (AO)."
        },
        {
          "id": "terminale_c_maths_geometrie_l16_similitudes_p06_q6",
          "type": "mcq",
          "prompt": "Parmi ces affirmations sur les similitudes directes, laquelle est fausse ?",
          "options": ["Elles conservent les angles orientés", "Elles multiplient les aires par $k^2$", "Elles sont déterminées par l'image de deux points distincts", "Elles conservent les distances"],
          "correctAnswerIndex": 3,
          "explanation": "Une similitude directe multiplie les distances par son rapport k : elle ne les conserve que si k = 1."
        }
      ]
    }
  ]
};
