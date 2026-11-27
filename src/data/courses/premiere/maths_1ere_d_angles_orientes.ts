import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Angles orientés et trigonométrie » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Angles orientés et trigonométrie » (document PDF officiel, Mathématiques 1ère D, lot P07)
export const MATHS_1ERE_D_L10_ANGLES_ORIENTES: CurriculumChapter = {
  "id": "premiere_d_maths_geometrie_l10_angles_orientes",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 10,
  "title": "Leçon 10 : Angles orientés et trigonométrie",
  "summary": "La leçon définit les angles orientés et leurs mesures (mesure principale, somme, différence, relation de Chasles, double) et leurs liens avec le cercle, puis les lignes trigonométriques, les angles associés, les formules d’addition et de duplication, les fonctions circulaires et la résolution d’équations et d’inéquations trigonométriques.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Angles orientés et trigonométrie » (document PDF officiel, Mathématiques 1ère D, lot P07)",
  "points": [
    {
      "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01",
      "order": 1,
      "title": "Mesures d’un angle orienté et mesure principale",
      "summary": "Définir les mesures d’un angle orienté et déterminer sa mesure principale dans l’intervalle $]-\\pi ; \\pi]$.",
      "conceptExplanation": "Soit $(\\vec{u}, \\vec{v})$ un angle orienté et $\\alpha$ sa mesure principale. On appelle mesure de cet angle orienté tout nombre réel de la forme $\\alpha + 2k\\pi$ où $k \\in \\mathbb{Z}$ : un angle orienté possède donc une infinité de mesures, qui ont toutes le même point image sur le cercle trigonométrique.\nLa mesure principale est l’unique mesure appartenant à l’intervalle $]-\\pi ; \\pi]$. Pour la déterminer à partir d’une mesure $x$ connue, on écrit $\\alpha = x + 2k\\pi$ avec $-\\pi < \\alpha \\leq \\pi$ ; si besoin, on trouve d’abord l’entier $k$ grâce aux inégalités $-\\pi < x + 2k\\pi \\leq \\pi$.\nL’angle orienté nul est noté $\\hat{0}$ et l’angle plat est noté $\\hat{\\pi}$.",
      "keyRule": "Toutes les mesures d’un angle orienté s’obtiennent en ajoutant $2k\\pi$ à sa mesure principale, et la mesure principale est la seule située dans $]-\\pi ; \\pi]$.",
      "formulas": [
        {
          "name": "Mesures d’un angle orienté",
          "formula": "\\alpha + 2k\\pi, \\quad k \\in \\mathbb{Z}",
          "note": "Où $\\alpha$ est la mesure principale."
        },
        {
          "name": "Mesure principale",
          "formula": "-\\pi < \\alpha \\leq \\pi"
        }
      ],
      "workedExample": {
        "title": "Mesure principale de $-\\frac{119\\pi}{4}$ (exercice de fixation)",
        "statement": "Détermine la mesure principale $\\alpha$ de l’angle orienté dont une mesure est $-\\frac{119\\pi}{4}$.",
        "methodSteps": [
          "$\\alpha$ vérifie $-\\pi < \\alpha \\leq \\pi$ et il existe $k \\in \\mathbb{Z}$ tel que $\\alpha = -\\frac{119\\pi}{4} + 2k\\pi$.",
          "En divisant l’encadrement par $2\\pi$, on obtient $\\frac{115}{8} < k \\leq \\frac{123}{8}$, d’où $k = 15$.",
          "On calcule $\\alpha = -\\frac{119\\pi}{4} + 15 \\times 2\\pi = \\frac{\\pi}{4}$."
        ],
        "conclusion": "La mesure principale est $\\frac{\\pi}{4}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les mesures d’un angle orienté",
          "stepTheme": "Les mesures d’un angle orienté",
          "stepBadge": "Les mesures d’un angle orienté",
          "paragraphText": "• Définition : soit $(\\vec{u}, \\vec{v})$ un angle orienté et $\\alpha$ sa mesure principale.\nOn appelle mesure de l’angle orienté $(\\vec{u}, \\vec{v})$ tout nombre réel de la forme $\\alpha + 2k\\pi$ où $k \\in \\mathbb{Z}$.\nExemple de la leçon : si la mesure principale est $\\frac{\\pi}{3}$, alors $\\frac{7\\pi}{3}$ et $-\\frac{11\\pi}{3}$ sont des mesures de cet angle.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01_q1",
            "type": "mcq",
            "prompt": "Un angle orienté a pour mesure principale $\\frac{\\pi}{3}$. Lequel de ces nombres est aussi une mesure de cet angle ?",
            "options": [
              "$\\frac{4\\pi}{3}$",
              "$\\frac{11\\pi}{3}$",
              "$-\\frac{\\pi}{3}$",
              "$\\frac{7\\pi}{3}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les mesures sont de la forme $\\frac{\\pi}{3} + 2k\\pi$ : avec $k = 1$, on obtient $\\frac{7\\pi}{3}$. Les autres nombres ne s’écrivent pas sous cette forme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La mesure principale",
          "stepTheme": "La mesure principale",
          "stepBadge": "La mesure principale",
          "paragraphText": "• Propriété : soit $\\hat{\\alpha}$ un angle orienté de mesure $\\alpha$, avec $\\alpha \\in \\mathbb{R}$. Il existe un unique nombre réel $x \\in ]-\\pi ; \\pi]$ tel que la mesure principale de $\\hat{\\alpha}$ soit $x$.\nLa mesure principale est donc la seule mesure de l’angle située dans l’intervalle $]-\\pi ; \\pi]$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01_q2",
            "type": "mcq",
            "prompt": "La mesure principale d’un angle orienté est l’unique mesure appartenant à l’intervalle :",
            "options": [
              "$[0 ; 2\\pi[$",
              "$]-2\\pi ; 2\\pi]$",
              "$]-\\pi ; \\pi]$",
              "$[0 ; \\pi]$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par définition, la mesure principale est l’unique mesure située dans $]-\\pi ; \\pi]$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Rechercher la mesure principale",
          "stepTheme": "Rechercher la mesure principale",
          "stepBadge": "Rechercher la mesure principale",
          "paragraphText": "• Méthode : déterminer la mesure principale $\\alpha$ d’un angle orienté dont une mesure $x$ est connue consiste à écrire $\\alpha = x + 2k\\pi$ avec $-\\pi < \\alpha \\leq \\pi$ et $k \\in \\mathbb{Z}$.\nSi l’écriture n’est pas immédiate, on détermine d’abord $k$ à l’aide des inégalités $-\\pi < x + 2k\\pi \\leq \\pi$, puis on calcule $\\alpha$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est la mesure principale de l’angle orienté dont une mesure est $-\\frac{119\\pi}{4}$ ?",
            "options": [
              "$-\\frac{\\pi}{4}$",
              "$\\frac{3\\pi}{4}$",
              "$\\frac{\\pi}{4}$",
              "$-\\frac{3\\pi}{4}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On cherche $k$ tel que $-\\pi < -\\frac{119\\pi}{4} + 2k\\pi \\leq \\pi$ : on obtient $k = 15$, d’où $\\alpha = -\\frac{119\\pi}{4} + 30\\pi = \\frac{\\pi}{4}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le point image sur le cercle trigonométrique",
          "stepTheme": "Le point image sur le cercle trigonométrique",
          "stepBadge": "Le point image sur le cercle trigonométrique",
          "paragraphText": "• Remarques de la leçon : à tout nombre réel $x$ correspond un unique point $M$ du cercle trigonométrique $(\\mathcal{C})$, donc un unique angle orienté dont une mesure est $x$.\nToutes les mesures d’un même angle orienté ont le même point image $M$ sur $(\\mathcal{C})$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01_q4",
            "type": "mcq",
            "prompt": "Quelle est la mesure principale de l’angle orienté dont une mesure est $\\frac{149\\pi}{3}$ ?",
            "options": [
              "$-\\frac{\\pi}{3}$",
              "$\\frac{\\pi}{3}$",
              "$\\frac{2\\pi}{3}$",
              "$-\\frac{2\\pi}{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $k = -25$, on obtient $\\frac{149\\pi}{3} - 50\\pi = -\\frac{\\pi}{3}$, qui appartient à $]-\\pi ; \\pi]$ : c’est la mesure principale (exercice de fixation de la leçon)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une mesure n’est pas toujours la mesure principale",
          "stepTheme": "Une mesure n’est pas toujours la mesure principale",
          "stepBadge": "Une mesure n’est pas toujours la mesure principale",
          "paragraphText": "• Piège : un angle orienté a une infinité de mesures, mais une seule mesure principale.\nPar exemple, $\\frac{7\\pi}{3}$ est une mesure de l’angle de mesure principale $\\frac{\\pi}{3}$, mais $\\frac{7\\pi}{3}$ n’est pas une mesure principale car elle dépasse $\\pi$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01_q5",
            "type": "mcq",
            "prompt": "Un angle orienté a pour mesure $\\frac{7\\pi}{3}$. Sa mesure principale est :",
            "options": [
              "$\\frac{7\\pi}{3}$",
              "$\\frac{5\\pi}{3}$",
              "$-\\frac{\\pi}{3}$",
              "$\\frac{\\pi}{3}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On retranche $2\\pi$ : $\\frac{7\\pi}{3} - 2\\pi = \\frac{\\pi}{3}$, qui appartient à $]-\\pi ; \\pi]$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un calcul direct de mesure principale",
          "stepTheme": "Un calcul direct de mesure principale",
          "stepBadge": "Un calcul direct de mesure principale",
          "paragraphText": "• Exemple de la leçon : pour la mesure $-\\frac{37\\pi}{3}$, on écrit $-\\frac{37\\pi}{3} = -\\frac{\\pi}{3} - 6 \\times 2\\pi$.\nLa mesure principale se lit alors directement : c’est $-\\frac{\\pi}{3}$.\nLa leçon note aussi $\\hat{0}$ l’angle orienté nul et $\\hat{\\pi}$ l’angle plat.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01_q6",
            "type": "mcq",
            "prompt": "Quelle est la mesure principale de l’angle orienté dont une mesure est $-\\frac{37\\pi}{3}$ ?",
            "options": [
              "$-\\frac{\\pi}{3}$",
              "$\\frac{\\pi}{3}$",
              "$-\\frac{2\\pi}{3}$",
              "$\\frac{5\\pi}{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On écrit $-\\frac{37\\pi}{3} = -\\frac{\\pi}{3} - 12\\pi$ : la mesure principale est $-\\frac{\\pi}{3}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01_q1",
          "type": "mcq",
          "prompt": "Un angle orienté a pour mesure principale $\\frac{\\pi}{3}$. Lequel de ces nombres est aussi une mesure de cet angle ?",
          "options": [
            "$\\frac{4\\pi}{3}$",
            "$\\frac{11\\pi}{3}$",
            "$-\\frac{\\pi}{3}$",
            "$\\frac{7\\pi}{3}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les mesures sont de la forme $\\frac{\\pi}{3} + 2k\\pi$ : avec $k = 1$, on obtient $\\frac{7\\pi}{3}$. Les autres nombres ne s’écrivent pas sous cette forme."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01_q2",
          "type": "mcq",
          "prompt": "La mesure principale d’un angle orienté est l’unique mesure appartenant à l’intervalle :",
          "options": [
            "$[0 ; 2\\pi[$",
            "$]-2\\pi ; 2\\pi]$",
            "$]-\\pi ; \\pi]$",
            "$[0 ; \\pi]$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par définition, la mesure principale est l’unique mesure située dans $]-\\pi ; \\pi]$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est la mesure principale de l’angle orienté dont une mesure est $-\\frac{119\\pi}{4}$ ?",
          "options": [
            "$-\\frac{\\pi}{4}$",
            "$\\frac{3\\pi}{4}$",
            "$\\frac{\\pi}{4}$",
            "$-\\frac{3\\pi}{4}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On cherche $k$ tel que $-\\pi < -\\frac{119\\pi}{4} + 2k\\pi \\leq \\pi$ : on obtient $k = 15$, d’où $\\alpha = -\\frac{119\\pi}{4} + 30\\pi = \\frac{\\pi}{4}$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01_q4",
          "type": "mcq",
          "prompt": "Quelle est la mesure principale de l’angle orienté dont une mesure est $\\frac{149\\pi}{3}$ ?",
          "options": [
            "$-\\frac{\\pi}{3}$",
            "$\\frac{\\pi}{3}$",
            "$\\frac{2\\pi}{3}$",
            "$-\\frac{2\\pi}{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $k = -25$, on obtient $\\frac{149\\pi}{3} - 50\\pi = -\\frac{\\pi}{3}$, qui appartient à $]-\\pi ; \\pi]$ : c’est la mesure principale (exercice de fixation de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01_q5",
          "type": "mcq",
          "prompt": "Un angle orienté a pour mesure $\\frac{7\\pi}{3}$. Sa mesure principale est :",
          "options": [
            "$\\frac{7\\pi}{3}$",
            "$\\frac{5\\pi}{3}$",
            "$-\\frac{\\pi}{3}$",
            "$\\frac{\\pi}{3}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On retranche $2\\pi$ : $\\frac{7\\pi}{3} - 2\\pi = \\frac{\\pi}{3}$, qui appartient à $]-\\pi ; \\pi]$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p01_q6",
          "type": "mcq",
          "prompt": "Quelle est la mesure principale de l’angle orienté dont une mesure est $-\\frac{37\\pi}{3}$ ?",
          "options": [
            "$-\\frac{\\pi}{3}$",
            "$\\frac{\\pi}{3}$",
            "$-\\frac{2\\pi}{3}$",
            "$\\frac{5\\pi}{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On écrit $-\\frac{37\\pi}{3} = -\\frac{\\pi}{3} - 12\\pi$ : la mesure principale est $-\\frac{\\pi}{3}$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02",
      "order": 2,
      "title": "Somme, différence et relation de Chasles",
      "summary": "Additionner et retrancher des angles orientés, et décomposer un angle grâce à la relation de Chasles et à ses conséquences.",
      "conceptExplanation": "La somme de deux angles orientés de mesures $\\alpha$ et $\\beta$ est l’angle orienté dont une mesure est $\\alpha + \\beta$ ; l’opposé de $\\hat{\\alpha}$ a pour mesure $-\\alpha$, et la différence $\\hat{\\alpha} - \\hat{\\beta}$ a pour mesure $\\alpha - \\beta$.\nExemple de la leçon : pour des mesures $\\frac{\\pi}{6}$ et $-\\frac{2\\pi}{5}$, la somme a pour mesure $-\\frac{7\\pi}{30}$ et la différence a pour mesure $\\frac{17\\pi}{30}$.\nRelation de Chasles : $(\\vec{u}, \\vec{v}) + (\\vec{v}, \\vec{w}) = (\\vec{u}, \\vec{w})$. Conséquences : $(\\vec{v}, \\vec{u}) = -(\\vec{u}, \\vec{v})$ ; si $k > 0$, multiplier un vecteur par $k$ ne change pas l’angle ; si $k < 0$, cela ajoute l’angle plat $\\hat{\\pi}$.",
      "keyRule": "Pour additionner deux angles orientés, on additionne leurs mesures ; un coefficient négatif sur un vecteur ajoute $\\pi$, un coefficient positif ne change rien.",
      "formulas": [
        {
          "name": "Relation de Chasles",
          "formula": "(\\vec{u}, \\vec{v}) + (\\vec{v}, \\vec{w}) = (\\vec{u}, \\vec{w})"
        },
        {
          "name": "Effet d’un coefficient négatif",
          "formula": "(k\\vec{u}, \\vec{v}) = \\hat{\\pi} + (\\vec{u}, \\vec{v})",
          "note": "Pour $k < 0$."
        }
      ],
      "workedExample": {
        "title": "Somme et différence de deux angles (exemple de la leçon)",
        "statement": "Soient $\\hat{\\alpha}$ et $\\hat{\\beta}$ deux angles orientés de mesures respectives $\\frac{\\pi}{6}$ et $-\\frac{2\\pi}{5}$. Donne une mesure de $\\hat{\\alpha} + \\hat{\\beta}$ et une mesure de $\\hat{\\alpha} - \\hat{\\beta}$.",
        "methodSteps": [
          "Une mesure de la somme est $\\frac{\\pi}{6} + \\left(-\\frac{2\\pi}{5}\\right) = -\\frac{7\\pi}{30}$.",
          "Une mesure de la différence est $\\frac{\\pi}{6} - \\left(-\\frac{2\\pi}{5}\\right) = \\frac{17\\pi}{30}$."
        ],
        "conclusion": "On additionne ou on retranche simplement les mesures des deux angles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La somme de deux angles orientés",
          "stepTheme": "La somme de deux angles orientés",
          "stepBadge": "La somme de deux angles orientés",
          "paragraphText": "• Définition : soient $\\hat{\\alpha}$ et $\\hat{\\beta}$ deux angles orientés de mesures respectives $\\alpha$ et $\\beta$.\nOn appelle somme des angles orientés $\\hat{\\alpha}$ et $\\hat{\\beta}$, notée $\\hat{\\alpha} + \\hat{\\beta}$, l’angle orienté dont une mesure est $\\alpha + \\beta$.\nRemarque de la leçon : $\\hat{\\alpha} + \\hat{\\beta} = \\hat{\\beta} + \\hat{\\alpha}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q1",
            "type": "mcq",
            "prompt": "Deux angles orientés ont pour mesures respectives $\\frac{\\pi}{3}$ et $\\frac{\\pi}{4}$. Une mesure de leur somme est :",
            "options": [
              "$\\frac{\\pi}{12}$",
              "$\\frac{\\pi}{7}$",
              "$-\\frac{\\pi}{12}$",
              "$\\frac{7\\pi}{12}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La somme a pour mesure $\\frac{\\pi}{3} + \\frac{\\pi}{4} = \\frac{7\\pi}{12}$ (tableau de la leçon)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’opposé et la différence de deux angles orientés",
          "stepTheme": "L’opposé et la différence de deux angles orientés",
          "stepBadge": "L’opposé et la différence de deux angles orientés",
          "paragraphText": "• Définitions : deux angles orientés sont opposés lorsque leur somme est l’angle orienté nul ; l’opposé de $\\hat{\\alpha}$ est noté $-\\hat{\\alpha}$ et a pour mesure $-\\alpha$.\nLa différence $\\hat{\\alpha} - \\hat{\\beta}$ est l’angle orienté $\\hat{\\alpha} + (-\\hat{\\beta})$, dont une mesure est $\\alpha - \\beta$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q2",
            "type": "mcq",
            "prompt": "Deux angles orientés ont pour mesures respectives $\\frac{\\pi}{3}$ et $\\frac{\\pi}{4}$. Une mesure de leur différence, le premier moins le second, est :",
            "options": [
              "$\\frac{7\\pi}{12}$",
              "$-\\frac{\\pi}{12}$",
              "$\\frac{\\pi}{12}$",
              "$\\frac{\\pi}{3}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La différence a pour mesure $\\frac{\\pi}{3} - \\frac{\\pi}{4} = \\frac{\\pi}{12}$ (tableau de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La relation de Chasles",
          "stepTheme": "La relation de Chasles",
          "stepBadge": "La relation de Chasles",
          "paragraphText": "• Propriété (relation de Chasles) : pour tous vecteurs non nuls $\\vec{u}$, $\\vec{v}$ et $\\vec{w}$, on a $(\\vec{u}, \\vec{v}) + (\\vec{v}, \\vec{w}) = (\\vec{u}, \\vec{w})$.\nC’est l’outil de base pour décomposer un angle orienté en passant par un vecteur intermédiaire.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q3",
            "type": "mcq",
            "prompt": "Quelle égalité traduit la relation de Chasles pour les points $A$, $B$, $C$ et $D$ distincts ?",
            "options": [
              "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AB}, \\overrightarrow{DC}) + (\\overrightarrow{AC}, \\overrightarrow{DC})$",
              "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AB}, \\overrightarrow{DC}) + (\\overrightarrow{DC}, \\overrightarrow{AC})$",
              "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AC}, \\overrightarrow{DC}) + (\\overrightarrow{DC}, \\overrightarrow{AB})$",
              "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{DC}, \\overrightarrow{AB}) + (\\overrightarrow{DC}, \\overrightarrow{AC})$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La relation de Chasles fait passer par le vecteur intermédiaire $\\overrightarrow{DC}$ : c’est l’égalité b) de l’exercice de fixation de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Inverser l’ordre des vecteurs",
          "stepTheme": "Inverser l’ordre des vecteurs",
          "stepBadge": "Inverser l’ordre des vecteurs",
          "paragraphText": "• Conséquence : pour tous vecteurs non nuls $\\vec{u}$ et $\\vec{v}$, on a $(\\vec{v}, \\vec{u}) = -(\\vec{u}, \\vec{v})$.\nInverser l’ordre des deux vecteurs change le signe de l’angle orienté.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q4",
            "type": "mcq",
            "prompt": "Sachant que $\\frac{\\pi}{4}$ est une mesure de $(\\vec{u}, \\vec{w})$, une mesure de $(\\vec{w}, \\vec{u})$ est :",
            "options": [
              "$\\frac{\\pi}{4}$",
              "$\\pi + \\frac{\\pi}{4}$",
              "$\\frac{3\\pi}{4}$",
              "$-\\frac{\\pi}{4}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En inversant l’ordre des vecteurs, on change le signe : une mesure de $(\\vec{w}, \\vec{u})$ est $-\\frac{\\pi}{4}$ (exercice de fixation de la leçon)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Multiplier un vecteur par un réel positif",
          "stepTheme": "Multiplier un vecteur par un réel positif",
          "stepBadge": "Multiplier un vecteur par un réel positif",
          "paragraphText": "• Conséquence : pour $k > 0$, on a $(k\\vec{u}, \\vec{v}) = (\\vec{u}, k\\vec{v}) = (\\vec{u}, \\vec{v})$.\nMultiplier l’un des vecteurs par un nombre strictement positif ne change pas l’angle orienté.\nExemple de la leçon : l’égalité $(7\\vec{u}, \\vec{v}) = (\\vec{u}, 7\\vec{v})$ est vraie.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q5",
            "type": "mcq",
            "prompt": "Sachant que $-\\frac{\\pi}{7}$ est une mesure de $(\\vec{u}, \\vec{v})$, une mesure de $(2\\vec{u}, \\vec{v})$ est :",
            "options": [
              "$-\\frac{2\\pi}{7}$",
              "$\\frac{\\pi}{7}$",
              "$-\\frac{\\pi}{7}$",
              "$\\pi - \\frac{\\pi}{7}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le coefficient $2$ est strictement positif : l’angle ne change pas, une mesure reste $-\\frac{\\pi}{7}$ (exercice de fixation de la leçon)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Multiplier un vecteur par un réel négatif",
          "stepTheme": "Multiplier un vecteur par un réel négatif",
          "stepBadge": "Multiplier un vecteur par un réel négatif",
          "paragraphText": "• Piège : pour $k < 0$, on a $(k\\vec{u}, \\vec{v}) = (\\vec{u}, k\\vec{v}) = \\hat{\\pi} + (\\vec{u}, \\vec{v})$.\nUn coefficient négatif ajoute l’angle plat : par exemple, l’égalité $(-2\\vec{u}, \\vec{v}) = (\\vec{u}, \\vec{v})$ est fausse, alors que $(-\\vec{u}, \\vec{v}) = (\\vec{u}, \\vec{v}) + \\hat{\\pi}$ est vraie.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q6",
            "type": "mcq",
            "prompt": "Sachant que $-\\frac{\\pi}{7}$ est une mesure de $(\\vec{u}, \\vec{v})$, une mesure de $(\\vec{u}, -3\\vec{v})$ est :",
            "options": [
              "$-\\frac{3\\pi}{7}$",
              "$\\frac{6\\pi}{7}$",
              "$-\\frac{\\pi}{7}$",
              "$\\frac{\\pi}{7}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le coefficient $-3$ est négatif : on ajoute $\\pi$, soit $-\\frac{\\pi}{7} + \\pi = \\frac{6\\pi}{7}$ (exercice de fixation de la leçon)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Combiner deux angles de même origine",
          "stepTheme": "Combiner deux angles de même origine",
          "stepBadge": "Combiner deux angles de même origine",
          "paragraphText": "• Exemple de la leçon : $\\vec{u}$, $\\vec{v}$ et $\\vec{w}$ sont trois vecteurs non nuls, $-\\frac{\\pi}{7}$ et $\\frac{\\pi}{4}$ sont des mesures respectives de $(\\vec{u}, \\vec{v})$ et de $(\\vec{u}, \\vec{w})$.\nPar la relation de Chasles, $(\\vec{v}, \\vec{w}) = (\\vec{v}, \\vec{u}) + (\\vec{u}, \\vec{w})$, et une mesure de $(\\vec{v}, \\vec{u})$ est $\\frac{\\pi}{7}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q7",
            "type": "mcq",
            "prompt": "Avec les données de l’exemple, une mesure de $(\\vec{v}, \\vec{w})$ est :",
            "options": [
              "$\\frac{3\\pi}{28}$",
              "$\\frac{11\\pi}{28}$",
              "$-\\frac{11\\pi}{28}$",
              "$\\frac{\\pi}{28}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On ajoute les deux mesures : $\\frac{\\pi}{7} + \\frac{\\pi}{4} = \\frac{11\\pi}{28}$ (exercice de fixation de la leçon)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q1",
          "type": "mcq",
          "prompt": "Deux angles orientés ont pour mesures respectives $\\frac{\\pi}{3}$ et $\\frac{\\pi}{4}$. Une mesure de leur somme est :",
          "options": [
            "$\\frac{\\pi}{12}$",
            "$\\frac{\\pi}{7}$",
            "$-\\frac{\\pi}{12}$",
            "$\\frac{7\\pi}{12}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La somme a pour mesure $\\frac{\\pi}{3} + \\frac{\\pi}{4} = \\frac{7\\pi}{12}$ (tableau de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q2",
          "type": "mcq",
          "prompt": "Deux angles orientés ont pour mesures respectives $\\frac{\\pi}{3}$ et $\\frac{\\pi}{4}$. Une mesure de leur différence, le premier moins le second, est :",
          "options": [
            "$\\frac{7\\pi}{12}$",
            "$-\\frac{\\pi}{12}$",
            "$\\frac{\\pi}{12}$",
            "$\\frac{\\pi}{3}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La différence a pour mesure $\\frac{\\pi}{3} - \\frac{\\pi}{4} = \\frac{\\pi}{12}$ (tableau de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q3",
          "type": "mcq",
          "prompt": "Quelle égalité traduit la relation de Chasles pour les points $A$, $B$, $C$ et $D$ distincts ?",
          "options": [
            "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AB}, \\overrightarrow{DC}) + (\\overrightarrow{AC}, \\overrightarrow{DC})$",
            "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AB}, \\overrightarrow{DC}) + (\\overrightarrow{DC}, \\overrightarrow{AC})$",
            "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AC}, \\overrightarrow{DC}) + (\\overrightarrow{DC}, \\overrightarrow{AB})$",
            "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{DC}, \\overrightarrow{AB}) + (\\overrightarrow{DC}, \\overrightarrow{AC})$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La relation de Chasles fait passer par le vecteur intermédiaire $\\overrightarrow{DC}$ : c’est l’égalité b) de l’exercice de fixation de la leçon."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q4",
          "type": "mcq",
          "prompt": "Sachant que $\\frac{\\pi}{4}$ est une mesure de $(\\vec{u}, \\vec{w})$, une mesure de $(\\vec{w}, \\vec{u})$ est :",
          "options": [
            "$\\frac{\\pi}{4}$",
            "$\\pi + \\frac{\\pi}{4}$",
            "$\\frac{3\\pi}{4}$",
            "$-\\frac{\\pi}{4}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "En inversant l’ordre des vecteurs, on change le signe : une mesure de $(\\vec{w}, \\vec{u})$ est $-\\frac{\\pi}{4}$ (exercice de fixation de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q5",
          "type": "mcq",
          "prompt": "Sachant que $-\\frac{\\pi}{7}$ est une mesure de $(\\vec{u}, \\vec{v})$, une mesure de $(2\\vec{u}, \\vec{v})$ est :",
          "options": [
            "$-\\frac{2\\pi}{7}$",
            "$\\frac{\\pi}{7}$",
            "$-\\frac{\\pi}{7}$",
            "$\\pi - \\frac{\\pi}{7}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le coefficient $2$ est strictement positif : l’angle ne change pas, une mesure reste $-\\frac{\\pi}{7}$ (exercice de fixation de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q6",
          "type": "mcq",
          "prompt": "Sachant que $-\\frac{\\pi}{7}$ est une mesure de $(\\vec{u}, \\vec{v})$, une mesure de $(\\vec{u}, -3\\vec{v})$ est :",
          "options": [
            "$-\\frac{3\\pi}{7}$",
            "$\\frac{6\\pi}{7}$",
            "$-\\frac{\\pi}{7}$",
            "$\\frac{\\pi}{7}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le coefficient $-3$ est négatif : on ajoute $\\pi$, soit $-\\frac{\\pi}{7} + \\pi = \\frac{6\\pi}{7}$ (exercice de fixation de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p02_q7",
          "type": "mcq",
          "prompt": "Avec les données de l’exemple, une mesure de $(\\vec{v}, \\vec{w})$ est :",
          "options": [
            "$\\frac{3\\pi}{28}$",
            "$\\frac{11\\pi}{28}$",
            "$-\\frac{11\\pi}{28}$",
            "$\\frac{\\pi}{28}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On ajoute les deux mesures : $\\frac{\\pi}{7} + \\frac{\\pi}{4} = \\frac{11\\pi}{28}$ (exercice de fixation de la leçon)."
        }
      ]
    },
    {
      "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03",
      "order": 3,
      "title": "Double d’un angle orienté et angles dans un cercle",
      "summary": "Calculer le double d’un angle orienté et utiliser les angles inscrits, la caractérisation d’un cercle et la cocyclicité.",
      "conceptExplanation": "Le double d’un angle orienté est sa somme avec lui-même : un angle de mesure $\\alpha$ a un double de mesure $2\\alpha$. On retient : $2\\hat{\\alpha} = \\hat{0}$ équivaut à $\\hat{\\alpha} = \\hat{0}$ ou $\\hat{\\alpha} = \\hat{\\pi}$ ; $2\\hat{\\alpha} = \\hat{\\pi}$ équivaut à $\\hat{\\alpha}$ angle droit direct ou indirect.\nSur un cercle de centre $O$ passant par $A$ et $B$, pour $M$ sur le cercle, l’angle inscrit $(\\overrightarrow{MA}, \\overrightarrow{MB})$ vaut la moitié de l’angle au centre $(\\overrightarrow{OA}, \\overrightarrow{OB})$, éventuellement plus $\\hat{\\pi}$.\nCaractérisation : $M$ appartient au cercle si et seulement si $2(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})$ ; et quatre points sont cocycliques si et seulement si $2(\\overrightarrow{CA}, \\overrightarrow{CB}) = 2(\\overrightarrow{DA}, \\overrightarrow{DB})$.",
      "keyRule": "Le double double les mesures ; sur un cercle, l’angle au centre vaut le double de l’angle inscrit qui intercepte le même arc.",
      "formulas": [
        {
          "name": "Double d’un angle",
          "formula": "2(\\vec{u}, \\vec{v}) = (\\vec{u}, \\vec{v}) + (\\vec{u}, \\vec{v})"
        },
        {
          "name": "Caractérisation d’un cercle",
          "formula": "M \\in (\\mathcal{C}) \\iff 2(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})"
        }
      ],
      "workedExample": {
        "title": "Angle inscrit et angle au centre (exercice de fixation)",
        "statement": "On donne une mesure de $(\\overrightarrow{OA}, \\overrightarrow{OB})$ égale à $\\frac{2\\pi}{3}$, où $M$ est un point du cercle de centre $O$ passant par $A$ et $B$. Calcule la mesure principale de $(\\overrightarrow{MA}, \\overrightarrow{MB})$.",
        "methodSteps": [
          "On utilise la forme $(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\frac{1}{2}(\\overrightarrow{OA}, \\overrightarrow{OB}) + \\hat{\\pi}$.",
          "Une mesure est donc $\\frac{1}{2} \\times \\frac{2\\pi}{3} + \\pi = \\frac{4\\pi}{3}$.",
          "On ramène dans $]-\\pi ; \\pi]$ : $\\frac{4\\pi}{3} - 2\\pi = -\\frac{2\\pi}{3}$."
        ],
        "conclusion": "La mesure principale de l’angle inscrit est $-\\frac{2\\pi}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le double d’un angle orienté",
          "stepTheme": "Le double d’un angle orienté",
          "stepBadge": "Le double d’un angle orienté",
          "paragraphText": "• Définition : soit $(\\vec{u}, \\vec{v})$ un angle orienté.\nOn appelle double de $(\\vec{u}, \\vec{v})$, noté $2(\\vec{u}, \\vec{v})$, l’angle orienté défini par $2(\\vec{u}, \\vec{v}) = (\\vec{u}, \\vec{v}) + (\\vec{u}, \\vec{v})$.\nRemarques de la leçon : le double d’un angle orienté de mesure $\\alpha$ a pour mesure $2\\alpha$, et $2\\hat{\\alpha} + 2\\hat{\\beta} = 2(\\hat{\\alpha} + \\hat{\\beta})$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q1",
            "type": "mcq",
            "prompt": "Le double d’un angle orienté de mesure $\\alpha$ a pour mesure :",
            "options": [
              "$\\alpha$",
              "$\\alpha + \\pi$",
              "$2\\alpha$",
              "$\\alpha + 2\\pi$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le double est la somme de l’angle avec lui-même : sa mesure est $2\\alpha$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Quand le double est l’angle nul",
          "stepTheme": "Quand le double est l’angle nul",
          "stepBadge": "Quand le double est l’angle nul",
          "paragraphText": "• Propriété : $2\\hat{\\alpha} = \\hat{0}$ équivaut à $\\hat{\\alpha} = \\hat{0}$ ou $\\hat{\\alpha} = \\hat{\\pi}$.\nApplication de la leçon : si $2(\\overrightarrow{AB}, \\overrightarrow{AC}) = \\hat{0}$, alors $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires, donc les points $A$, $B$ et $C$ sont alignés.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q2",
            "type": "mcq",
            "prompt": "On sait que $2(\\overrightarrow{AB}, \\overrightarrow{AC}) = \\hat{0}$, avec $A$, $B$ et $C$ distincts. Que peut-on conclure ?",
            "options": [
              "Le triangle $ABC$ est rectangle en $A$",
              "Les points $A$, $B$ et $C$ sont alignés",
              "Les points $A$, $B$ et $C$ sont cocycliques",
              "Le triangle $ABC$ est équilatéral"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’angle $(\\overrightarrow{AB}, \\overrightarrow{AC})$ vaut $\\hat{0}$ ou $\\hat{\\pi}$ : les vecteurs sont colinéaires et les points sont alignés (exercice corrigé de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Quand le double est l’angle plat",
          "stepTheme": "Quand le double est l’angle plat",
          "stepBadge": "Quand le double est l’angle plat",
          "paragraphText": "• Propriétés : $2\\hat{\\alpha} = 2\\hat{\\beta}$ équivaut à $\\hat{\\alpha} = \\hat{\\beta}$ ou $\\hat{\\alpha} = \\hat{\\beta} + \\hat{\\pi}$.\nEt $2\\hat{\\alpha} = \\hat{\\pi}$ équivaut à $\\hat{\\alpha} = \\frac{\\hat{\\pi}}{2}$ ou $\\hat{\\alpha} = -\\frac{\\hat{\\pi}}{2}$, c’est-à-dire un angle droit direct ou un angle droit indirect.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q3",
            "type": "mcq",
            "prompt": "Si $2\\hat{\\alpha} = \\hat{\\pi}$, alors $\\hat{\\alpha}$ peut être :",
            "options": [
              "L’angle nul",
              "L’angle plat",
              "Un angle droit, direct ou indirect",
              "Un angle de mesure $2\\pi$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "D’après la propriété, $2\\hat{\\alpha} = \\hat{\\pi}$ équivaut à $\\hat{\\alpha}$ angle droit direct ou angle droit indirect."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les angles orientés inscrits dans un cercle",
          "stepTheme": "Les angles orientés inscrits dans un cercle",
          "stepBadge": "Les angles orientés inscrits dans un cercle",
          "paragraphText": "• Propriété : soit $(\\mathcal{C})$ un cercle de centre $O$, $A$ et $B$ deux points distincts de ce cercle et $M$ un point de $(\\mathcal{C})$ distinct de $A$ et $B$.\nAlors $(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\frac{1}{2}(\\overrightarrow{OA}, \\overrightarrow{OB})$ ou $(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\frac{1}{2}(\\overrightarrow{OA}, \\overrightarrow{OB}) + \\hat{\\pi}$.\nExemple de la leçon : si une mesure de $(\\overrightarrow{MA}, \\overrightarrow{MB})$ est $\\frac{\\pi}{4}$, alors une mesure de $(\\overrightarrow{OA}, \\overrightarrow{OB})$ est $\\frac{\\pi}{2}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q4",
            "type": "mcq",
            "prompt": "On donne une mesure de $(\\overrightarrow{MA}, \\overrightarrow{MB})$ égale à $\\frac{\\pi}{4}$, avec $M$ sur le cercle de centre $O$ passant par $A$ et $B$. Une mesure de $(\\overrightarrow{OA}, \\overrightarrow{OB})$ est :",
            "options": [
              "$\\frac{\\pi}{2}$",
              "$\\frac{\\pi}{8}$",
              "$\\frac{\\pi}{4}$",
              "$\\pi$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’angle au centre vaut le double de l’angle inscrit : $2 \\times \\frac{\\pi}{4} = \\frac{\\pi}{2}$ (exercice de fixation de la leçon)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Caractérisation d’un cercle par les angles",
          "stepTheme": "Caractérisation d’un cercle par les angles",
          "stepBadge": "Caractérisation d’un cercle par les angles",
          "paragraphText": "• Propriété : soit $(\\mathcal{C})$ un cercle de centre $O$ et $A$, $B$ deux points distincts de ce cercle.\nPour tout point $M$ du plan distinct de $A$ et $B$, on a : $M \\in (\\mathcal{C})$ équivaut à $2(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q5",
            "type": "mcq",
            "prompt": "Pour un point $M$ distinct de $A$ et $B$, l’appartenance de $M$ au cercle de centre $O$ passant par $A$ et $B$ équivaut à :",
            "options": [
              "$(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})$",
              "$2(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})$",
              "$(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\hat{0}$",
              "$2(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\hat{\\pi}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la caractérisation d’un cercle de la leçon : le double de l’angle inscrit égale l’angle au centre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les points cocycliques",
          "stepTheme": "Les points cocycliques",
          "stepBadge": "Les points cocycliques",
          "paragraphText": "• Propriété : soient $A$, $B$, $C$ et $D$ quatre points distincts du plan tels que trois quelconques d’entre eux ne sont pas alignés.\nLes points $A$, $B$, $C$ et $D$ sont cocycliques si et seulement si $2(\\overrightarrow{CA}, \\overrightarrow{CB}) = 2(\\overrightarrow{DA}, \\overrightarrow{DB})$.\nApplication de la leçon : si $ABC$ est rectangle en $C$ et $D$ le symétrique de $C$ par rapport à $(AB)$, les deux doubles valent $\\hat{\\pi}$, donc $A$, $B$, $C$ et $D$ sont cocycliques.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q6",
            "type": "mcq",
            "prompt": "Quatre points distincts $A$, $B$, $C$ et $D$, trois à trois non alignés, sont cocycliques si et seulement si :",
            "options": [
              "$2(\\overrightarrow{CA}, \\overrightarrow{CB}) = 2(\\overrightarrow{DA}, \\overrightarrow{DB})$",
              "$(\\overrightarrow{CA}, \\overrightarrow{CB}) = \\hat{0}$",
              "$2(\\overrightarrow{CA}, \\overrightarrow{CB}) = \\hat{0}$",
              "$(\\overrightarrow{DA}, \\overrightarrow{DB}) = \\hat{\\pi}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la propriété de cocyclicité de la leçon : les deux doubles d’angles inscrits interceptant le même arc sont égaux."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le double de l’angle plat est l’angle nul",
          "stepTheme": "Le double de l’angle plat est l’angle nul",
          "stepBadge": "Le double de l’angle plat est l’angle nul",
          "paragraphText": "• Piège (exercice de la leçon) : comme $(\\vec{u}, -\\vec{u}) = \\hat{\\pi}$, son double vaut $2\\hat{\\pi}$, c’est-à-dire l’angle nul $\\hat{0}$, et non l’angle plat.\nDe même, $2(\\vec{u}, -\\vec{v}) = 2(\\vec{u}, \\vec{v})$ est une égalité juste, car $(\\vec{u}, -\\vec{v}) = (\\vec{u}, \\vec{v}) + \\hat{\\pi}$ et le double de $\\hat{\\pi}$ est $\\hat{0}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q7",
            "type": "mcq",
            "prompt": "Quelle égalité est juste ?",
            "options": [
              "$2(\\vec{u}, -\\vec{u}) = \\hat{\\pi}$",
              "$2(\\vec{u}, -\\vec{v}) = 2(\\vec{u}, \\vec{v})$",
              "$2(\\vec{u}, -\\vec{u}) = 2\\hat{\\pi}$ au sens d’un angle différent de $\\hat{0}$",
              "$(\\vec{u}, -\\vec{u}) = \\hat{0}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ajouter $\\hat{\\pi}$ à un angle ne change pas son double, puisque le double de $\\hat{\\pi}$ est $\\hat{0}$ : l’égalité $2(\\vec{u}, -\\vec{v}) = 2(\\vec{u}, \\vec{v})$ est juste (exercice de la leçon)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q1",
          "type": "mcq",
          "prompt": "Le double d’un angle orienté de mesure $\\alpha$ a pour mesure :",
          "options": [
            "$\\alpha$",
            "$\\alpha + \\pi$",
            "$2\\alpha$",
            "$\\alpha + 2\\pi$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le double est la somme de l’angle avec lui-même : sa mesure est $2\\alpha$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q2",
          "type": "mcq",
          "prompt": "On sait que $2(\\overrightarrow{AB}, \\overrightarrow{AC}) = \\hat{0}$, avec $A$, $B$ et $C$ distincts. Que peut-on conclure ?",
          "options": [
            "Le triangle $ABC$ est rectangle en $A$",
            "Les points $A$, $B$ et $C$ sont alignés",
            "Les points $A$, $B$ et $C$ sont cocycliques",
            "Le triangle $ABC$ est équilatéral"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’angle $(\\overrightarrow{AB}, \\overrightarrow{AC})$ vaut $\\hat{0}$ ou $\\hat{\\pi}$ : les vecteurs sont colinéaires et les points sont alignés (exercice corrigé de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q3",
          "type": "mcq",
          "prompt": "Si $2\\hat{\\alpha} = \\hat{\\pi}$, alors $\\hat{\\alpha}$ peut être :",
          "options": [
            "L’angle nul",
            "L’angle plat",
            "Un angle droit, direct ou indirect",
            "Un angle de mesure $2\\pi$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "D’après la propriété, $2\\hat{\\alpha} = \\hat{\\pi}$ équivaut à $\\hat{\\alpha}$ angle droit direct ou angle droit indirect."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q4",
          "type": "mcq",
          "prompt": "On donne une mesure de $(\\overrightarrow{MA}, \\overrightarrow{MB})$ égale à $\\frac{\\pi}{4}$, avec $M$ sur le cercle de centre $O$ passant par $A$ et $B$. Une mesure de $(\\overrightarrow{OA}, \\overrightarrow{OB})$ est :",
          "options": [
            "$\\frac{\\pi}{2}$",
            "$\\frac{\\pi}{8}$",
            "$\\frac{\\pi}{4}$",
            "$\\pi$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’angle au centre vaut le double de l’angle inscrit : $2 \\times \\frac{\\pi}{4} = \\frac{\\pi}{2}$ (exercice de fixation de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q5",
          "type": "mcq",
          "prompt": "Pour un point $M$ distinct de $A$ et $B$, l’appartenance de $M$ au cercle de centre $O$ passant par $A$ et $B$ équivaut à :",
          "options": [
            "$(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})$",
            "$2(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})$",
            "$(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\hat{0}$",
            "$2(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\hat{\\pi}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la caractérisation d’un cercle de la leçon : le double de l’angle inscrit égale l’angle au centre."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q6",
          "type": "mcq",
          "prompt": "Quatre points distincts $A$, $B$, $C$ et $D$, trois à trois non alignés, sont cocycliques si et seulement si :",
          "options": [
            "$2(\\overrightarrow{CA}, \\overrightarrow{CB}) = 2(\\overrightarrow{DA}, \\overrightarrow{DB})$",
            "$(\\overrightarrow{CA}, \\overrightarrow{CB}) = \\hat{0}$",
            "$2(\\overrightarrow{CA}, \\overrightarrow{CB}) = \\hat{0}$",
            "$(\\overrightarrow{DA}, \\overrightarrow{DB}) = \\hat{\\pi}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la propriété de cocyclicité de la leçon : les deux doubles d’angles inscrits interceptant le même arc sont égaux."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p03_q7",
          "type": "mcq",
          "prompt": "Quelle égalité est juste ?",
          "options": [
            "$2(\\vec{u}, -\\vec{u}) = \\hat{\\pi}$",
            "$2(\\vec{u}, -\\vec{v}) = 2(\\vec{u}, \\vec{v})$",
            "$2(\\vec{u}, -\\vec{u}) = 2\\hat{\\pi}$ au sens d’un angle différent de $\\hat{0}$",
            "$(\\vec{u}, -\\vec{u}) = \\hat{0}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ajouter $\\hat{\\pi}$ à un angle ne change pas son double, puisque le double de $\\hat{\\pi}$ est $\\hat{0}$ : l’égalité $2(\\vec{u}, -\\vec{v}) = 2(\\vec{u}, \\vec{v})$ est juste (exercice de la leçon)."
        }
      ]
    },
    {
      "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04",
      "order": 4,
      "title": "Lignes trigonométriques d’un angle orienté",
      "summary": "Lire le cosinus, le sinus et la tangente d’un angle orienté sur le cercle trigonométrique et connaître les valeurs des angles remarquables.",
      "conceptExplanation": "Soit un angle orienté de mesure $\\alpha$ et $M$ l’image de $\\alpha$ sur le cercle trigonométrique. Le cosinus de $\\alpha$ est l’abscisse de $M$ et le sinus de $\\alpha$ est l’ordonnée de $M$.\nPour un angle non droit, la tangente est $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$ ; elle n’est pas définie pour $\\alpha = \\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$.\nLe cosinus, le sinus et la tangente sont appelés les lignes trigonométriques de l’angle. Le tableau des angles remarquables donne, pour $0$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$, $\\frac{\\pi}{2}$ et $\\pi$, les valeurs exactes à connaître.",
      "keyRule": "Cosinus égale abscisse du point image, sinus égale ordonnée, et tangente égale sinus divisé par cosinus.",
      "formulas": [
        {
          "name": "Tangente",
          "formula": "\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}",
          "note": "Pour $\\alpha \\neq \\frac{\\pi}{2} + k\\pi$."
        },
        {
          "name": "Valeurs remarquables",
          "formula": "\\cos\\frac{\\pi}{3} = \\frac{1}{2} \\text{ et } \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}"
        }
      ],
      "workedExample": {
        "title": "La tangente de $\\frac{\\pi}{6}$ (exercice de fixation)",
        "statement": "Calcule la tangente de l’angle orienté de mesure $\\frac{\\pi}{6}$, sachant que $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$ et $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$.",
        "methodSteps": [
          "On applique la définition : $\\tan\\frac{\\pi}{6} = \\frac{\\sin\\frac{\\pi}{6}}{\\cos\\frac{\\pi}{6}}$.",
          "On remplace par les valeurs connues, ce qui donne le quotient de $\\frac{1}{2}$ par $\\frac{\\sqrt{3}}{2}$."
        ],
        "conclusion": "$\\tan\\frac{\\pi}{6} = \\frac{1}{\\sqrt{3}}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Cosinus et sinus d’un angle orienté",
          "stepTheme": "Cosinus et sinus d’un angle orienté",
          "stepBadge": "Cosinus et sinus d’un angle orienté",
          "paragraphText": "• Définitions : soit $(\\vec{u}, \\vec{v})$ un angle orienté de mesure $\\alpha$ et $M$ l’image de $\\alpha$ sur le cercle trigonométrique $(\\mathcal{C})$.\nLe cosinus de l’angle, noté $\\cos\\alpha$, est l’abscisse de $M$ ; le sinus, noté $\\sin\\alpha$, est l’ordonnée de $M$.\nExemples de la leçon : $\\cos\\frac{\\pi}{2} = 0$ et $\\sin\\frac{\\pi}{2} = 1$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04_q1",
            "type": "mcq",
            "prompt": "Le cosinus d’un angle orienté de mesure $\\alpha$ est :",
            "options": [
              "L’ordonnée du point image de $\\alpha$ sur le cercle trigonométrique",
              "Le rapport de l’ordonnée à l’abscisse du point image",
              "La mesure principale de l’angle",
              "L’abscisse du point image de $\\alpha$ sur le cercle trigonométrique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, le cosinus est l’abscisse du point image $M$ et le sinus est son ordonnée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les valeurs en $0$ et en $\\pi$",
          "stepTheme": "Les valeurs en $0$ et en $\\pi$",
          "stepBadge": "Les valeurs en $0$ et en $\\pi$",
          "paragraphText": "• Exemples de la leçon : le point image de $0$ est $I$, donc $\\cos 0 = 1$ et $\\sin 0 = 0$.\nLe point image de $\\pi$ est le point diamétralement opposé à $I$, donc $\\cos\\pi = -1$ et $\\sin\\pi = 0$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\cos\\pi$ ?",
            "options": [
              "$1$",
              "$0$",
              "$-1$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le point image de $\\pi$ a pour abscisse $-1$ : $\\cos\\pi = -1$ (exercice de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La tangente d’un angle orienté",
          "stepTheme": "La tangente d’un angle orienté",
          "stepBadge": "La tangente d’un angle orienté",
          "paragraphText": "• Définition : soit un angle orienté non droit de mesure $\\alpha$, avec $\\alpha \\neq \\frac{\\pi}{2} + 2k\\pi$.\nSa tangente est le nombre réel $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$.\nSur la figure de la leçon, si $(T)$ est la tangente au cercle en $I$, alors $\\tan\\alpha$ se lit comme la longueur $IT$ sur cette droite.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04_q3",
            "type": "mcq",
            "prompt": "Pour un angle non droit de mesure $\\alpha$, la tangente est définie par :",
            "options": [
              "$\\tan\\alpha = \\frac{\\cos\\alpha}{\\sin\\alpha}$",
              "$\\tan\\alpha = \\sin\\alpha \\times \\cos\\alpha$",
              "$\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$",
              "$\\tan\\alpha = \\sin\\alpha - \\cos\\alpha$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par définition, $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les lignes des angles remarquables",
          "stepTheme": "Les lignes des angles remarquables",
          "stepBadge": "Les lignes des angles remarquables",
          "paragraphText": "• Tableau de la leçon : pour $\\alpha = \\frac{\\pi}{6}$, on a $\\cos\\alpha = \\frac{\\sqrt{3}}{2}$, $\\sin\\alpha = \\frac{1}{2}$ et $\\tan\\alpha = \\frac{1}{\\sqrt{3}}$.\nPour $\\alpha = \\frac{\\pi}{4}$ : $\\cos\\alpha = \\sin\\alpha = \\frac{\\sqrt{2}}{2}$ et $\\tan\\alpha = 1$.\nPour $\\alpha = \\frac{\\pi}{3}$ : $\\cos\\alpha = \\frac{1}{2}$, $\\sin\\alpha = \\frac{\\sqrt{3}}{2}$ et $\\tan\\alpha = \\sqrt{3}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\cos\\frac{\\pi}{6}$ ?",
            "options": [
              "$\\frac{1}{2}$",
              "$\\frac{\\sqrt{2}}{2}$",
              "$\\frac{\\sqrt{3}}{2}$",
              "$1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est une valeur du tableau des angles remarquables : $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La tangente n’est pas toujours définie",
          "stepTheme": "La tangente n’est pas toujours définie",
          "stepBadge": "La tangente n’est pas toujours définie",
          "paragraphText": "• Piège : $\\tan$ n’est pas définie pour les réels $\\alpha$ de la forme $\\alpha = \\frac{\\pi}{2} + k\\pi$, avec $k \\in \\mathbb{Z}$.\nEn ces points, le cosinus est nul et le quotient $\\frac{\\sin\\alpha}{\\cos\\alpha}$ n’existe pas.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04_q5",
            "type": "mcq",
            "prompt": "Pour quelle valeur de $\\alpha$ la tangente n’est-elle pas définie ?",
            "options": [
              "$\\alpha = \\frac{\\pi}{6}$",
              "$\\alpha = \\frac{\\pi}{2}$",
              "$\\alpha = \\pi$",
              "$\\alpha = \\frac{\\pi}{3}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En $\\frac{\\pi}{2}$, le cosinus vaut $0$ : la tangente, quotient du sinus par le cosinus, n’est pas définie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calculer une tangente à partir du sinus et du cosinus",
          "stepTheme": "Calculer une tangente à partir du sinus et du cosinus",
          "stepBadge": "Calculer une tangente à partir du sinus et du cosinus",
          "paragraphText": "• Exemple de la leçon : $\\tan\\pi = \\frac{\\sin\\pi}{\\cos\\pi} = \\frac{0}{-1} = 0$.\nAutre exercice de fixation : connaissant $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$ et $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$, on obtient la tangente de $\\frac{\\pi}{6}$ par le même quotient.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\tan\\frac{\\pi}{6}$, sachant que $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$ et $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$ ?",
            "options": [
              "$\\sqrt{3}$",
              "$1$",
              "$\\frac{\\sqrt{3}}{2}$",
              "$\\frac{1}{\\sqrt{3}}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On divise : $\\frac{1}{2}$ divisé par $\\frac{\\sqrt{3}}{2}$ donne $\\frac{1}{\\sqrt{3}}$, soit $\\frac{\\sqrt{3}}{3}$ (exercice de fixation de la leçon)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04_q1",
          "type": "mcq",
          "prompt": "Le cosinus d’un angle orienté de mesure $\\alpha$ est :",
          "options": [
            "L’ordonnée du point image de $\\alpha$ sur le cercle trigonométrique",
            "Le rapport de l’ordonnée à l’abscisse du point image",
            "La mesure principale de l’angle",
            "L’abscisse du point image de $\\alpha$ sur le cercle trigonométrique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, le cosinus est l’abscisse du point image $M$ et le sinus est son ordonnée."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\cos\\pi$ ?",
          "options": [
            "$1$",
            "$0$",
            "$-1$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le point image de $\\pi$ a pour abscisse $-1$ : $\\cos\\pi = -1$ (exercice de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04_q3",
          "type": "mcq",
          "prompt": "Pour un angle non droit de mesure $\\alpha$, la tangente est définie par :",
          "options": [
            "$\\tan\\alpha = \\frac{\\cos\\alpha}{\\sin\\alpha}$",
            "$\\tan\\alpha = \\sin\\alpha \\times \\cos\\alpha$",
            "$\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$",
            "$\\tan\\alpha = \\sin\\alpha - \\cos\\alpha$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par définition, $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\cos\\frac{\\pi}{6}$ ?",
          "options": [
            "$\\frac{1}{2}$",
            "$\\frac{\\sqrt{2}}{2}$",
            "$\\frac{\\sqrt{3}}{2}$",
            "$1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est une valeur du tableau des angles remarquables : $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04_q5",
          "type": "mcq",
          "prompt": "Pour quelle valeur de $\\alpha$ la tangente n’est-elle pas définie ?",
          "options": [
            "$\\alpha = \\frac{\\pi}{6}$",
            "$\\alpha = \\frac{\\pi}{2}$",
            "$\\alpha = \\pi$",
            "$\\alpha = \\frac{\\pi}{3}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En $\\frac{\\pi}{2}$, le cosinus vaut $0$ : la tangente, quotient du sinus par le cosinus, n’est pas définie."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p04_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\tan\\frac{\\pi}{6}$, sachant que $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$ et $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$ ?",
          "options": [
            "$\\sqrt{3}$",
            "$1$",
            "$\\frac{\\sqrt{3}}{2}$",
            "$\\frac{1}{\\sqrt{3}}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On divise : $\\frac{1}{2}$ divisé par $\\frac{\\sqrt{3}}{2}$ donne $\\frac{1}{\\sqrt{3}}$, soit $\\frac{\\sqrt{3}}{3}$ (exercice de fixation de la leçon)."
        }
      ]
    },
    {
      "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05",
      "order": 5,
      "title": "Angles associés et formules trigonométriques",
      "summary": "Utiliser les lignes des angles associés, puis les formules d’addition, de duplication et de linéarisation.",
      "conceptExplanation": "Les angles de mesures $-\\alpha$, $\\pi - \\alpha$, $\\pi + \\alpha$, $\\frac{\\pi}{2} - \\alpha$ et $\\frac{\\pi}{2} + \\alpha$ sont associés à l’angle de mesure $\\alpha$. Leurs lignes se déduisent de celles de $\\alpha$ : $\\cos(-\\alpha) = \\cos\\alpha$, $\\sin(-\\alpha) = -\\sin\\alpha$, $\\cos(\\pi - \\alpha) = -\\cos\\alpha$, $\\sin(\\pi - \\alpha) = \\sin\\alpha$, $\\cos(\\pi + \\alpha) = -\\cos\\alpha$, $\\sin(\\pi + \\alpha) = -\\sin\\alpha$, et autour de $\\frac{\\pi}{2}$ le cosinus et le sinus s’échangent, avec un signe moins pour $\\cos\\left(\\frac{\\pi}{2} + \\alpha\\right) = -\\sin\\alpha$.\nFormules d’addition : $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$ et $\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$, avec les formes analogues pour les différences.\nDuplication : $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$ et $\\sin 2a = 2\\sin a \\cos a$. Linéarisation : $\\cos^2 a = \\frac{1 + \\cos 2a}{2}$ et $\\sin^2 a = \\frac{1 - \\cos 2a}{2}$.",
      "keyRule": "Ramener tout angle associé à un angle remarquable grâce aux formules, en surveillant les signes.",
      "formulas": [
        {
          "name": "Formules d’addition",
          "formula": "\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b"
        },
        {
          "name": "Formules de duplication",
          "formula": "\\cos 2a = \\cos^2 a - \\sin^2 a \\text{ et } \\sin 2a = 2\\sin a \\cos a"
        }
      ],
      "workedExample": {
        "title": "Cosinus et sinus de $\\frac{7\\pi}{12}$ (exercice de fixation)",
        "statement": "En remarquant que $\\frac{7\\pi}{12} = \\frac{\\pi}{4} + \\frac{\\pi}{3}$, détermine $\\cos\\frac{7\\pi}{12}$ et $\\sin\\frac{7\\pi}{12}$.",
        "methodSteps": [
          "On applique la formule d’addition du cosinus avec les valeurs remarquables de $\\frac{\\pi}{4}$ et de $\\frac{\\pi}{3}$.",
          "On obtient $\\cos\\frac{7\\pi}{12} = \\frac{\\sqrt{2} - \\sqrt{6}}{4}$.",
          "On applique la formule d’addition du sinus et on obtient $\\sin\\frac{7\\pi}{12} = \\frac{\\sqrt{2} + \\sqrt{6}}{4}$."
        ],
        "conclusion": "Les formules d’addition ramènent un angle inconnu à deux angles remarquables."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les angles associés",
          "stepTheme": "Les angles associés",
          "stepBadge": "Les angles associés",
          "paragraphText": "• Définition : soit $\\hat{\\alpha}$ un angle orienté de mesure $\\alpha$.\nLes angles orientés de mesures $-\\alpha$, $\\pi - \\alpha$, $\\pi + \\alpha$, $\\frac{\\pi}{2} - \\alpha$ et $\\frac{\\pi}{2} + \\alpha$ sont dits associés à $\\hat{\\alpha}$.\nPour l’opposé : $\\cos(-\\alpha) = \\cos\\alpha$ et $\\sin(-\\alpha) = -\\sin\\alpha$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\cos\\left(-\\frac{\\pi}{3}\\right)$ ?",
            "options": [
              "$-\\frac{1}{2}$",
              "$\\frac{\\sqrt{3}}{2}$",
              "$-\\frac{\\sqrt{3}}{2}$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le cosinus de l’opposé est inchangé : $\\cos\\left(-\\frac{\\pi}{3}\\right) = \\cos\\frac{\\pi}{3} = \\frac{1}{2}$ (exercice de fixation de la leçon)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les angles supplémentaires et leurs lignes",
          "stepTheme": "Les angles supplémentaires et leurs lignes",
          "stepBadge": "Les angles supplémentaires et leurs lignes",
          "paragraphText": "• Propriété : $\\cos(\\pi - \\alpha) = -\\cos\\alpha$ et $\\sin(\\pi - \\alpha) = \\sin\\alpha$.\nExemple de la leçon : $\\frac{5\\pi}{6} = \\pi - \\frac{\\pi}{6}$, donc $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$ et $\\sin\\frac{5\\pi}{6} = \\frac{1}{2}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\sin\\frac{5\\pi}{6}$ ?",
            "options": [
              "$-\\frac{1}{2}$",
              "$\\frac{\\sqrt{3}}{2}$",
              "$\\frac{1}{2}$",
              "$-\\frac{\\sqrt{3}}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sinus de $\\pi - \\alpha$ est égal au sinus de $\\alpha$ : $\\sin\\frac{5\\pi}{6} = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les lignes de $\\pi + \\alpha$",
          "stepTheme": "Les lignes de $\\pi + \\alpha$",
          "stepBadge": "Les lignes de $\\pi + \\alpha$",
          "paragraphText": "• Propriété : $\\cos(\\pi + \\alpha) = -\\cos\\alpha$ et $\\sin(\\pi + \\alpha) = -\\sin\\alpha$.\nExemple de la leçon : $\\frac{4\\pi}{3} = \\pi + \\frac{\\pi}{3}$, donc $\\cos\\frac{4\\pi}{3} = -\\frac{1}{2}$ et $\\sin\\frac{4\\pi}{3} = -\\frac{\\sqrt{3}}{2}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\cos\\frac{4\\pi}{3}$ ?",
            "options": [
              "$\\frac{1}{2}$",
              "$-\\frac{1}{2}$",
              "$\\frac{\\sqrt{3}}{2}$",
              "$-\\frac{\\sqrt{3}}{2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On écrit $\\frac{4\\pi}{3} = \\pi + \\frac{\\pi}{3}$ : le cosinus change de signe, $\\cos\\frac{4\\pi}{3} = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les lignes de $\\frac{\\pi}{2} + \\alpha$",
          "stepTheme": "Les lignes de $\\frac{\\pi}{2} + \\alpha$",
          "stepBadge": "Les lignes de $\\frac{\\pi}{2} + \\alpha$",
          "paragraphText": "• Propriétés : $\\cos\\left(\\frac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha$, $\\sin\\left(\\frac{\\pi}{2} - \\alpha\\right) = \\cos\\alpha$, $\\cos\\left(\\frac{\\pi}{2} + \\alpha\\right) = -\\sin\\alpha$ et $\\sin\\left(\\frac{\\pi}{2} + \\alpha\\right) = \\cos\\alpha$.\nExemple de la leçon : $\\frac{3\\pi}{4} = \\frac{\\pi}{2} + \\frac{\\pi}{4}$, donc $\\cos\\frac{3\\pi}{4} = -\\sin\\frac{\\pi}{4} = -\\frac{\\sqrt{2}}{2}$ et $\\sin\\frac{3\\pi}{4} = \\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\cos\\frac{3\\pi}{4}$ ?",
            "options": [
              "$\\frac{\\sqrt{2}}{2}$",
              "$-\\frac{\\sqrt{2}}{2}$",
              "$\\frac{1}{2}$",
              "$-\\frac{\\sqrt{3}}{2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On écrit $\\frac{3\\pi}{4} = \\frac{\\pi}{2} + \\frac{\\pi}{4}$ : $\\cos\\frac{3\\pi}{4} = -\\sin\\frac{\\pi}{4} = -\\frac{\\sqrt{2}}{2}$ (exercice de fixation de la leçon)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les formules d’addition",
          "stepTheme": "Les formules d’addition",
          "stepBadge": "Les formules d’addition",
          "paragraphText": "• Propriétés : pour tous réels $a$ et $b$, $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$ et $\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$.\nDe même, $\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$ et $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q5",
            "type": "mcq",
            "prompt": "Pour tous réels $a$ et $b$, $\\sin(a + b)$ est égal à :",
            "options": [
              "$\\sin a \\cos b + \\cos a \\sin b$",
              "$\\sin a \\cos b - \\cos a \\sin b$",
              "$\\sin a + \\sin b$",
              "$\\cos a \\cos b - \\sin a \\sin b$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la formule d’addition du sinus : $\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$ (tableau de correspondance de la leçon)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les formules de duplication",
          "stepTheme": "Les formules de duplication",
          "stepBadge": "Les formules de duplication",
          "paragraphText": "• Propriétés : pour tout réel $a$, $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$ et $\\sin 2a = 2\\sin a \\cos a$.\nVérification de la leçon : $\\cos^2 a - \\sin^2 a$ est égale à $\\cos 2a$, et $\\sin 2a$ est égale à $2\\cos a \\sin a$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q6",
            "type": "mcq",
            "prompt": "Pour tout réel $a$, $\\cos^2 a - \\sin^2 a$ est égal à :",
            "options": [
              "$1$",
              "$\\sin 2a$",
              "$\\cos 2a$",
              "$2\\cos^2 a$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la première forme de la formule de duplication : $\\cos 2a = \\cos^2 a - \\sin^2 a$ (questionnaire corrigé de la leçon)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre les formules de linéarisation",
          "stepTheme": "Ne pas confondre les formules de linéarisation",
          "stepBadge": "Ne pas confondre les formules de linéarisation",
          "paragraphText": "• Piège : les formules de linéarisation sont $\\cos^2 a = \\frac{1 + \\cos 2a}{2}$ et $\\sin^2 a = \\frac{1 - \\cos 2a}{2}$.\nLe signe devant $\\cos 2a$ n’est pas le même pour le carré du cosinus et pour le carré du sinus : $2\\sin^2 a = 1 - \\cos 2a$, alors que $1 + \\cos 2a = 2\\cos^2 a$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q7",
            "type": "mcq",
            "prompt": "Pour tout réel $a$, $2\\sin^2 a$ est égal à :",
            "options": [
              "$1 + \\cos 2a$",
              "$1 - \\cos 2a$",
              "$4\\sin a$",
              "$2\\cos^2 a$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "De $\\sin^2 a = \\frac{1 - \\cos 2a}{2}$, on tire $2\\sin^2 a = 1 - \\cos 2a$ (questionnaire corrigé de la leçon)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\cos\\left(-\\frac{\\pi}{3}\\right)$ ?",
          "options": [
            "$-\\frac{1}{2}$",
            "$\\frac{\\sqrt{3}}{2}$",
            "$-\\frac{\\sqrt{3}}{2}$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le cosinus de l’opposé est inchangé : $\\cos\\left(-\\frac{\\pi}{3}\\right) = \\cos\\frac{\\pi}{3} = \\frac{1}{2}$ (exercice de fixation de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\sin\\frac{5\\pi}{6}$ ?",
          "options": [
            "$-\\frac{1}{2}$",
            "$\\frac{\\sqrt{3}}{2}$",
            "$\\frac{1}{2}$",
            "$-\\frac{\\sqrt{3}}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sinus de $\\pi - \\alpha$ est égal au sinus de $\\alpha$ : $\\sin\\frac{5\\pi}{6} = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\cos\\frac{4\\pi}{3}$ ?",
          "options": [
            "$\\frac{1}{2}$",
            "$-\\frac{1}{2}$",
            "$\\frac{\\sqrt{3}}{2}$",
            "$-\\frac{\\sqrt{3}}{2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On écrit $\\frac{4\\pi}{3} = \\pi + \\frac{\\pi}{3}$ : le cosinus change de signe, $\\cos\\frac{4\\pi}{3} = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\cos\\frac{3\\pi}{4}$ ?",
          "options": [
            "$\\frac{\\sqrt{2}}{2}$",
            "$-\\frac{\\sqrt{2}}{2}$",
            "$\\frac{1}{2}$",
            "$-\\frac{\\sqrt{3}}{2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On écrit $\\frac{3\\pi}{4} = \\frac{\\pi}{2} + \\frac{\\pi}{4}$ : $\\cos\\frac{3\\pi}{4} = -\\sin\\frac{\\pi}{4} = -\\frac{\\sqrt{2}}{2}$ (exercice de fixation de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q5",
          "type": "mcq",
          "prompt": "Pour tous réels $a$ et $b$, $\\sin(a + b)$ est égal à :",
          "options": [
            "$\\sin a \\cos b + \\cos a \\sin b$",
            "$\\sin a \\cos b - \\cos a \\sin b$",
            "$\\sin a + \\sin b$",
            "$\\cos a \\cos b - \\sin a \\sin b$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la formule d’addition du sinus : $\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$ (tableau de correspondance de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q6",
          "type": "mcq",
          "prompt": "Pour tout réel $a$, $\\cos^2 a - \\sin^2 a$ est égal à :",
          "options": [
            "$1$",
            "$\\sin 2a$",
            "$\\cos 2a$",
            "$2\\cos^2 a$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la première forme de la formule de duplication : $\\cos 2a = \\cos^2 a - \\sin^2 a$ (questionnaire corrigé de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p05_q7",
          "type": "mcq",
          "prompt": "Pour tout réel $a$, $2\\sin^2 a$ est égal à :",
          "options": [
            "$1 + \\cos 2a$",
            "$1 - \\cos 2a$",
            "$4\\sin a$",
            "$2\\cos^2 a$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "De $\\sin^2 a = \\frac{1 - \\cos 2a}{2}$, on tire $2\\sin^2 a = 1 - \\cos 2a$ (questionnaire corrigé de la leçon)."
        }
      ]
    },
    {
      "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06",
      "order": 6,
      "title": "Fonctions circulaires",
      "summary": "Définir les fonctions sinus, cosinus et tangente et décrire la construction de leurs courbes représentatives.",
      "conceptExplanation": "La fonction sinus et la fonction cosinus vont de $\\mathbb{R}$ vers $\\mathbb{R}$ : à $x$, elles associent $\\sin x$ et $\\cos x$. Leurs courbes se construisent sur $]-\\pi ; \\pi]$, puis se complètent par les translations de vecteurs $2\\pi \\overrightarrow{OI}$ et $-2\\pi \\overrightarrow{OI}$.\nLa fonction tangente associe à $x$ le nombre $\\tan x$ ; son ensemble de définition est $\\mathbb{R}$ privé des nombres $\\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$, et elle est continue en tout élément de cet ensemble. Sa courbe se construit sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$, puis se complète par les translations de vecteurs $\\pi \\overrightarrow{OI}$ et $-\\pi \\overrightarrow{OI}$.",
      "keyRule": "On construit chaque courbe sur un intervalle de base, puis on la complète par des translations : $2\\pi$ pour le sinus et le cosinus, $\\pi$ pour la tangente.",
      "formulas": [
        {
          "name": "Ensemble de définition de la tangente",
          "formula": "\\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, \\ k \\in \\mathbb{Z}\\right\\}"
        }
      ],
      "workedExample": {
        "title": "Construire la courbe de la fonction sinus (méthode de la leçon)",
        "statement": "Comment obtient-on la courbe complète de la fonction sinus à partir de son tracé sur un intervalle ?",
        "methodSteps": [
          "On construit la courbe sur $]-\\pi ; \\pi]$.",
          "On complète par la translation de vecteur $2\\pi \\overrightarrow{OI}$.",
          "On complète aussi par la translation de vecteur $-2\\pi \\overrightarrow{OI}$, et ainsi de suite."
        ],
        "conclusion": "La courbe entière s’obtient par translations successives du morceau construit sur $]-\\pi ; \\pi]$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les fonctions sinus et cosinus",
          "stepTheme": "Les fonctions sinus et cosinus",
          "stepBadge": "Les fonctions sinus et cosinus",
          "paragraphText": "• Définitions : on appelle fonction sinus la fonction notée $\\sin$, de $\\mathbb{R}$ vers $\\mathbb{R}$, qui à $x$ associe $\\sin x$.\nOn appelle fonction cosinus la fonction notée $\\cos$, de $\\mathbb{R}$ vers $\\mathbb{R}$, qui à $x$ associe $\\cos x$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06_q1",
            "type": "mcq",
            "prompt": "La fonction sinus est la fonction :",
            "options": [
              "De $\\mathbb{N}$ vers $\\mathbb{R}$",
              "Qui à $x$ associe $\\frac{\\sin x}{\\cos x}$",
              "De $\\mathbb{R}$ vers $\\mathbb{N}$",
              "De $\\mathbb{R}$ vers $\\mathbb{R}$, qui à $x$ associe $\\sin x$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, la fonction sinus va de $\\mathbb{R}$ vers $\\mathbb{R}$ et associe $\\sin x$ à $x$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La fonction tangente et son ensemble de définition",
          "stepTheme": "La fonction tangente et son ensemble de définition",
          "stepBadge": "La fonction tangente et son ensemble de définition",
          "paragraphText": "• Définition : la fonction tangente, notée $\\tan$, associe à $x$ le nombre $\\tan x$.\nSon ensemble de définition est $\\mathbb{R}$ privé des nombres de la forme $\\frac{\\pi}{2} + k\\pi$, avec $k \\in \\mathbb{Z}$.\nLa fonction tangente est continue en tout élément de son ensemble de définition.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06_q2",
            "type": "mcq",
            "prompt": "L’ensemble de définition de la fonction tangente est :",
            "options": [
              "$\\mathbb{R}$ tout entier",
              "$\\mathbb{R}$ privé des nombres $k\\pi$, $k \\in \\mathbb{Z}$",
              "$]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$",
              "$\\mathbb{R}$ privé des nombres $\\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La tangente n’existe pas quand le cosinus est nul, c’est-à-dire en $\\frac{\\pi}{2} + k\\pi$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Construire les courbes du sinus et du cosinus",
          "stepTheme": "Construire les courbes du sinus et du cosinus",
          "stepBadge": "Construire les courbes du sinus et du cosinus",
          "paragraphText": "• Méthode de la leçon : pour construire les courbes représentatives des fonctions sinus et cosinus, on construit les courbes sur $]-\\pi ; \\pi]$.\nOn complète ensuite en utilisant les translations de vecteurs $2\\pi \\overrightarrow{OI}$ et $-2\\pi \\overrightarrow{OI}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06_q3",
            "type": "mcq",
            "prompt": "Pour obtenir la courbe complète de la fonction cosinus, on complète le tracé sur $]-\\pi ; \\pi]$ par des translations de vecteur :",
            "options": [
              "$\\pi \\overrightarrow{OI}$",
              "$2\\pi \\overrightarrow{OI}$ et $-2\\pi \\overrightarrow{OI}$",
              "$\\frac{\\pi}{2} \\overrightarrow{OI}$",
              "$\\overrightarrow{OJ}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les fonctions sinus et cosinus se répètent tous les $2\\pi$ : on translate de $2\\pi \\overrightarrow{OI}$ et de $-2\\pi \\overrightarrow{OI}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La continuité de la fonction tangente",
          "stepTheme": "La continuité de la fonction tangente",
          "stepBadge": "La continuité de la fonction tangente",
          "paragraphText": "• Propriété de la leçon : la fonction tangente est continue en tout élément de son ensemble de définition.\nSa courbe se construit sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$, puis on complète par les translations de vecteurs $\\pi \\overrightarrow{OI}$ et $-\\pi \\overrightarrow{OI}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06_q4",
            "type": "mcq",
            "prompt": "Sur quel intervalle construit-on d’abord la courbe de la fonction tangente ?",
            "options": [
              "$]-\\pi ; \\pi]$",
              "$[0 ; 2\\pi]$",
              "$]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$",
              "$\\mathbb{R}$ tout entier d’emblée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La courbe de la tangente est construite sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$, puis complétée par translations de $\\pi \\overrightarrow{OI}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La tangente n’existe pas en $\\frac{\\pi}{2}$",
          "stepTheme": "La tangente n’existe pas en $\\frac{\\pi}{2}$",
          "stepBadge": "La tangente n’existe pas en $\\frac{\\pi}{2}$",
          "paragraphText": "• Piège : la courbe de la fonction tangente n’a aucun point d’abscisse $\\frac{\\pi}{2} + k\\pi$.\nVouloir calculer $\\tan\\frac{\\pi}{2}$ est impossible : ce nombre n’existe pas, car le cosinus y est nul.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06_q5",
            "type": "mcq",
            "prompt": "Que peut-on dire de $\\tan\\frac{\\pi}{2}$ ?",
            "options": [
              "Il vaut $0$",
              "Il vaut $1$",
              "Il n’existe pas",
              "Il vaut $-1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\frac{\\pi}{2}$ n’appartient pas à l’ensemble de définition de la fonction tangente : $\\tan\\frac{\\pi}{2}$ n’existe pas."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Représenter une fonction composée",
          "stepTheme": "Représenter une fonction composée",
          "stepBadge": "Représenter une fonction composée",
          "paragraphText": "• Exercice de fixation de la leçon : dans un repère orthonormé, représenter graphiquement la fonction $f$ définie par $f(x) = \\cos(2x + 5)$.\nOn s’appuie sur la courbe de la fonction cosinus, construite intervalle par intervalle puis complétée par translations.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06_q6",
            "type": "mcq",
            "prompt": "La fonction de l’exercice, $f(x) = \\cos(2x + 5)$, est construite à partir de la courbe de :",
            "options": [
              "La fonction sinus",
              "La fonction tangente",
              "La fonction cosinus",
              "La fonction carré"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’expression $\\cos(2x + 5)$ est celle d’un cosinus : on part de la courbe de la fonction cosinus."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06_q1",
          "type": "mcq",
          "prompt": "La fonction sinus est la fonction :",
          "options": [
            "De $\\mathbb{N}$ vers $\\mathbb{R}$",
            "Qui à $x$ associe $\\frac{\\sin x}{\\cos x}$",
            "De $\\mathbb{R}$ vers $\\mathbb{N}$",
            "De $\\mathbb{R}$ vers $\\mathbb{R}$, qui à $x$ associe $\\sin x$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, la fonction sinus va de $\\mathbb{R}$ vers $\\mathbb{R}$ et associe $\\sin x$ à $x$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06_q2",
          "type": "mcq",
          "prompt": "L’ensemble de définition de la fonction tangente est :",
          "options": [
            "$\\mathbb{R}$ tout entier",
            "$\\mathbb{R}$ privé des nombres $k\\pi$, $k \\in \\mathbb{Z}$",
            "$]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$",
            "$\\mathbb{R}$ privé des nombres $\\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La tangente n’existe pas quand le cosinus est nul, c’est-à-dire en $\\frac{\\pi}{2} + k\\pi$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06_q3",
          "type": "mcq",
          "prompt": "Pour obtenir la courbe complète de la fonction cosinus, on complète le tracé sur $]-\\pi ; \\pi]$ par des translations de vecteur :",
          "options": [
            "$\\pi \\overrightarrow{OI}$",
            "$2\\pi \\overrightarrow{OI}$ et $-2\\pi \\overrightarrow{OI}$",
            "$\\frac{\\pi}{2} \\overrightarrow{OI}$",
            "$\\overrightarrow{OJ}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les fonctions sinus et cosinus se répètent tous les $2\\pi$ : on translate de $2\\pi \\overrightarrow{OI}$ et de $-2\\pi \\overrightarrow{OI}$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06_q4",
          "type": "mcq",
          "prompt": "Sur quel intervalle construit-on d’abord la courbe de la fonction tangente ?",
          "options": [
            "$]-\\pi ; \\pi]$",
            "$[0 ; 2\\pi]$",
            "$]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$",
            "$\\mathbb{R}$ tout entier d’emblée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La courbe de la tangente est construite sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$, puis complétée par translations de $\\pi \\overrightarrow{OI}$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06_q5",
          "type": "mcq",
          "prompt": "Que peut-on dire de $\\tan\\frac{\\pi}{2}$ ?",
          "options": [
            "Il vaut $0$",
            "Il vaut $1$",
            "Il n’existe pas",
            "Il vaut $-1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\frac{\\pi}{2}$ n’appartient pas à l’ensemble de définition de la fonction tangente : $\\tan\\frac{\\pi}{2}$ n’existe pas."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p06_q6",
          "type": "mcq",
          "prompt": "La fonction de l’exercice, $f(x) = \\cos(2x + 5)$, est construite à partir de la courbe de :",
          "options": [
            "La fonction sinus",
            "La fonction tangente",
            "La fonction cosinus",
            "La fonction carré"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’expression $\\cos(2x + 5)$ est celle d’un cosinus : on part de la courbe de la fonction cosinus."
        }
      ]
    },
    {
      "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07",
      "order": 7,
      "title": "Équations trigonométriques",
      "summary": "Résoudre les équations du type cosinus, sinus et tangente égaux, ainsi que les équations de la forme $a\\cos x + b\\sin x + c = 0$.",
      "conceptExplanation": "Pour tous réels $x$ et $a$ : $\\cos x = \\cos a$ équivaut à $x = a + 2k\\pi$ ou $x = -a + 2k\\pi$ ; $\\sin x = \\sin a$ équivaut à $x = a + 2k\\pi$ ou $x = \\pi - a + 2k\\pi$ ; $\\tan x = \\tan a$ équivaut à $x = a + k\\pi$, avec $k \\in \\mathbb{Z}$.\nCas particuliers : $\\cos x = -1$ donne $x = (2k + 1)\\pi$, $\\sin x = 0$ donne $x = k\\pi$, $\\sin x = 1$ donne $x = \\frac{\\pi}{2} + 2k\\pi$.\nPour une équation $a\\cos x + b\\sin x + c = 0$, on réduit $a\\cos x + b\\sin x$ sous la forme $\\sqrt{a^2 + b^2}\\cos(x - \\alpha)$, où $\\alpha$ vérifie $\\cos\\alpha = \\frac{a}{\\sqrt{a^2 + b^2}}$ et $\\sin\\alpha = \\frac{b}{\\sqrt{a^2 + b^2}}$, puis on résout $\\cos(x - \\alpha) = \\frac{-c}{\\sqrt{a^2 + b^2}}$.",
      "keyRule": "Toute équation trigonométrique de base se ramène à une égalité de lignes avec un angle connu, puis aux familles de solutions en $2k\\pi$ ou en $k\\pi$ pour la tangente.",
      "formulas": [
        {
          "name": "Équation en cosinus",
          "formula": "\\cos x = \\cos a \\iff x = a + 2k\\pi \\text{ ou } x = -a + 2k\\pi"
        },
        {
          "name": "Équation en sinus",
          "formula": "\\sin x = \\sin a \\iff x = a + 2k\\pi \\text{ ou } x = \\pi - a + 2k\\pi"
        },
        {
          "name": "Équation en tangente",
          "formula": "\\tan x = \\tan a \\iff x = a + k\\pi"
        }
      ],
      "workedExample": {
        "title": "Résoudre $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$ (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ l’équation $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$.",
        "methodSteps": [
          "On factorise le membre de gauche par $2$ : $2\\left(\\frac{\\sqrt{3}}{2}\\cos x + \\frac{1}{2}\\sin x\\right) = \\sqrt{2}$.",
          "On reconnaît $\\cos\\frac{\\pi}{6}$ et $\\sin\\frac{\\pi}{6}$, d’où $\\cos\\left(x - \\frac{\\pi}{6}\\right) = \\frac{\\sqrt{2}}{2} = \\cos\\frac{\\pi}{4}$.",
          "On obtient $x - \\frac{\\pi}{6} = \\frac{\\pi}{4} + 2k\\pi$ ou $x - \\frac{\\pi}{6} = -\\frac{\\pi}{4} + 2k\\pi$, avec $k \\in \\mathbb{Z}$."
        ],
        "conclusion": "Les solutions sont $x = \\frac{5\\pi}{12} + 2k\\pi$ ou $x = -\\frac{\\pi}{12} + 2k\\pi$, $k \\in \\mathbb{Z}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les équations du type $\\cos x = \\cos a$",
          "stepTheme": "Les équations du type $\\cos x = \\cos a$",
          "stepBadge": "Les équations du type $\\cos x = \\cos a$",
          "paragraphText": "• Propriété : pour tous réels $x$ et $a$, $\\cos x = \\cos a$ équivaut à $x = a + 2k\\pi$ ou $x = -a + 2k\\pi$, avec $k \\in \\mathbb{Z}$.\nDe même, $\\sin x = \\sin a$ équivaut à $x = a + 2k\\pi$ ou $x = \\pi - a + 2k\\pi$.\nEt $\\tan x = \\tan a$ équivaut à $x = a + k\\pi$, pour $x$ et $a$ différents de $\\frac{\\pi}{2} + k\\pi$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q1",
            "type": "mcq",
            "prompt": "L’équation $\\cos x = \\cos a$ a pour solutions :",
            "options": [
              "$x = a + k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = a + 2k\\pi$ ou $x = -a + 2k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = a + 2k\\pi$ ou $x = \\pi - a + 2k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = -a + 2k\\pi$ seulement, $k \\in \\mathbb{Z}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour le cosinus, les deux familles sont $a + 2k\\pi$ et $-a + 2k\\pi$ ; la famille $\\pi - a$ concerne le sinus."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Résoudre $\\cos x = \\frac{1}{2}$",
          "stepTheme": "Résoudre $\\cos x = \\frac{1}{2}$",
          "stepBadge": "Résoudre $\\cos x = \\frac{1}{2}$",
          "paragraphText": "• Exercice de fixation : on connaît $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$.\nL’équation $\\cos x = \\frac{1}{2}$ devient donc $\\cos x = \\cos\\frac{\\pi}{3}$, et on applique l’équivalence du cosinus.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q2",
            "type": "mcq",
            "prompt": "Les solutions dans $\\mathbb{R}$ de l’équation $\\cos x = \\frac{1}{2}$ sont :",
            "options": [
              "$x = \\frac{\\pi}{3} + 2k\\pi$ ou $x = -\\frac{\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = \\frac{\\pi}{6} + 2k\\pi$ ou $x = -\\frac{\\pi}{6} + 2k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = \\frac{\\pi}{3} + k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = \\frac{2\\pi}{3} + 2k\\pi$ ou $x = -\\frac{2\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$, les solutions sont $\\frac{\\pi}{3} + 2k\\pi$ et $-\\frac{\\pi}{3} + 2k\\pi$ (solution de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Résoudre une équation en sinus",
          "stepTheme": "Résoudre une équation en sinus",
          "stepBadge": "Résoudre une équation en sinus",
          "paragraphText": "• Exercice de fixation : on connaît $\\sin\\left(-\\frac{2\\pi}{3}\\right) = -\\frac{\\sqrt{3}}{2}$.\nL’équation $\\sin x = -\\frac{\\sqrt{3}}{2}$ devient $\\sin x = \\sin\\left(-\\frac{2\\pi}{3}\\right)$, et la deuxième famille est $\\pi - \\left(-\\frac{2\\pi}{3}\\right) = \\frac{5\\pi}{3}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q3",
            "type": "mcq",
            "prompt": "Les solutions dans $\\mathbb{R}$ de l’équation $\\sin x = -\\frac{\\sqrt{3}}{2}$ sont :",
            "options": [
              "$x = -\\frac{\\pi}{3} + 2k\\pi$ ou $x = \\frac{4\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = -\\frac{2\\pi}{3} + 2k\\pi$ ou $x = \\frac{2\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = -\\frac{2\\pi}{3} + 2k\\pi$ ou $x = \\frac{5\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = \\frac{\\pi}{3} + 2k\\pi$ ou $x = \\frac{2\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux familles sont $-\\frac{2\\pi}{3} + 2k\\pi$ et $\\pi - \\left(-\\frac{2\\pi}{3}\\right) + 2k\\pi = \\frac{5\\pi}{3} + 2k\\pi$ (solution de la leçon)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Résoudre une équation en tangente",
          "stepTheme": "Résoudre une équation en tangente",
          "stepBadge": "Résoudre une équation en tangente",
          "paragraphText": "• Exercice de fixation : on connaît $\\tan\\frac{\\pi}{4} = 1$.\nL’équation $\\tan x = 1$ devient $\\tan x = \\tan\\frac{\\pi}{4}$, d’où une seule famille de solutions, avec un pas de $\\pi$ et non de $2\\pi$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q4",
            "type": "mcq",
            "prompt": "Les solutions dans $\\mathbb{R}$ de l’équation $\\tan x = 1$ sont :",
            "options": [
              "$x = \\frac{\\pi}{4} + 2k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = \\frac{3\\pi}{4} + k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = \\frac{\\pi}{4} + 2k\\pi$ ou $x = -\\frac{\\pi}{4} + 2k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = \\frac{\\pi}{4} + k\\pi$, $k \\in \\mathbb{Z}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pour la tangente, $\\tan x = \\tan a$ équivaut à $x = a + k\\pi$ : ici $x = \\frac{\\pi}{4} + k\\pi$ (solution de la leçon)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les cas particuliers à ne pas confondre",
          "stepTheme": "Les cas particuliers à ne pas confondre",
          "stepBadge": "Les cas particuliers à ne pas confondre",
          "paragraphText": "• Cas particuliers de la leçon : $\\cos x = -1$ équivaut à $x = (2k + 1)\\pi$ ; $\\cos x = 0$ équivaut à $x = \\frac{\\pi}{2} + k\\pi$ ; $\\cos x = 1$ équivaut à $x = 2k\\pi$.\nPour le sinus : $\\sin x = -1$ équivaut à $x = -\\frac{\\pi}{2} + 2k\\pi$ ; $\\sin x = 0$ équivaut à $x = k\\pi$ ; $\\sin x = 1$ équivaut à $x = \\frac{\\pi}{2} + 2k\\pi$, avec $k \\in \\mathbb{Z}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q5",
            "type": "mcq",
            "prompt": "L’équation $\\sin x = 0$ a pour solutions :",
            "options": [
              "$x = \\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = 2k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = \\frac{\\pi}{2} + 2k\\pi$, $k \\in \\mathbb{Z}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sinus s’annule en $0$ et en $\\pi$, donc tous les $k\\pi$ : la famille $\\frac{\\pi}{2} + k\\pi$ correspond à $\\cos x = 0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Réduire $a\\cos x + b\\sin x$",
          "stepTheme": "Réduire $a\\cos x + b\\sin x$",
          "stepBadge": "Réduire $a\\cos x + b\\sin x$",
          "paragraphText": "• Méthode de la leçon : on écrit $a\\cos x + b\\sin x = \\sqrt{a^2 + b^2}\\left(\\frac{a}{\\sqrt{a^2 + b^2}}\\cos x + \\frac{b}{\\sqrt{a^2 + b^2}}\\sin x\\right)$.\nOn détermine ensuite un réel $\\alpha$ tel que $\\cos\\alpha = \\frac{a}{\\sqrt{a^2 + b^2}}$ et $\\sin\\alpha = \\frac{b}{\\sqrt{a^2 + b^2}}$.\nAlors $a\\cos x + b\\sin x = \\sqrt{a^2 + b^2}\\cos(x - \\alpha)$, et l’équation devient $\\cos(x - \\alpha) = \\frac{-c}{\\sqrt{a^2 + b^2}}$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q6",
            "type": "mcq",
            "prompt": "Pour réduire l’expression $\\sqrt{3}\\cos x + \\sin x$, par quel nombre factorise-t-on ?",
            "options": [
              "$\\sqrt{3}$",
              "$2$",
              "$4$",
              "$\\sqrt{2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le facteur est $\\sqrt{a^2 + b^2}$ avec $a = \\sqrt{3}$ et $b = 1$ : $\\sqrt{3 + 1} = 2$ (exercice de fixation de la leçon)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Résolution complète d’une équation mixte",
          "stepTheme": "Résolution complète d’une équation mixte",
          "stepBadge": "Résolution complète d’une équation mixte",
          "paragraphText": "• Exercice de fixation : pour résoudre $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$, on divise par $2$ et on reconnaît $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$ et $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$.\nL’équation devient $\\cos\\left(x - \\frac{\\pi}{6}\\right) = \\frac{\\sqrt{2}}{2} = \\cos\\frac{\\pi}{4}$, d’où les deux familles de solutions.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q7",
            "type": "mcq",
            "prompt": "Les solutions dans $\\mathbb{R}$ de l’équation $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$ sont :",
            "options": [
              "$x = \\frac{5\\pi}{12} + 2k\\pi$ ou $x = -\\frac{\\pi}{12} + 2k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = \\frac{\\pi}{4} + 2k\\pi$ ou $x = -\\frac{\\pi}{4} + 2k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = \\frac{5\\pi}{12} + k\\pi$, $k \\in \\mathbb{Z}$",
              "$x = \\frac{\\pi}{6} + 2k\\pi$ ou $x = -\\frac{\\pi}{6} + 2k\\pi$, $k \\in \\mathbb{Z}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On résout $x - \\frac{\\pi}{6} = \\frac{\\pi}{4} + 2k\\pi$ ou $x - \\frac{\\pi}{6} = -\\frac{\\pi}{4} + 2k\\pi$, ce qui donne $\\frac{5\\pi}{12}$ et $-\\frac{\\pi}{12}$ (solution de la leçon)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q1",
          "type": "mcq",
          "prompt": "L’équation $\\cos x = \\cos a$ a pour solutions :",
          "options": [
            "$x = a + k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = a + 2k\\pi$ ou $x = -a + 2k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = a + 2k\\pi$ ou $x = \\pi - a + 2k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = -a + 2k\\pi$ seulement, $k \\in \\mathbb{Z}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour le cosinus, les deux familles sont $a + 2k\\pi$ et $-a + 2k\\pi$ ; la famille $\\pi - a$ concerne le sinus."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q2",
          "type": "mcq",
          "prompt": "Les solutions dans $\\mathbb{R}$ de l’équation $\\cos x = \\frac{1}{2}$ sont :",
          "options": [
            "$x = \\frac{\\pi}{3} + 2k\\pi$ ou $x = -\\frac{\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = \\frac{\\pi}{6} + 2k\\pi$ ou $x = -\\frac{\\pi}{6} + 2k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = \\frac{\\pi}{3} + k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = \\frac{2\\pi}{3} + 2k\\pi$ ou $x = -\\frac{2\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$, les solutions sont $\\frac{\\pi}{3} + 2k\\pi$ et $-\\frac{\\pi}{3} + 2k\\pi$ (solution de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q3",
          "type": "mcq",
          "prompt": "Les solutions dans $\\mathbb{R}$ de l’équation $\\sin x = -\\frac{\\sqrt{3}}{2}$ sont :",
          "options": [
            "$x = -\\frac{\\pi}{3} + 2k\\pi$ ou $x = \\frac{4\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = -\\frac{2\\pi}{3} + 2k\\pi$ ou $x = \\frac{2\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = -\\frac{2\\pi}{3} + 2k\\pi$ ou $x = \\frac{5\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = \\frac{\\pi}{3} + 2k\\pi$ ou $x = \\frac{2\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux familles sont $-\\frac{2\\pi}{3} + 2k\\pi$ et $\\pi - \\left(-\\frac{2\\pi}{3}\\right) + 2k\\pi = \\frac{5\\pi}{3} + 2k\\pi$ (solution de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q4",
          "type": "mcq",
          "prompt": "Les solutions dans $\\mathbb{R}$ de l’équation $\\tan x = 1$ sont :",
          "options": [
            "$x = \\frac{\\pi}{4} + 2k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = \\frac{3\\pi}{4} + k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = \\frac{\\pi}{4} + 2k\\pi$ ou $x = -\\frac{\\pi}{4} + 2k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = \\frac{\\pi}{4} + k\\pi$, $k \\in \\mathbb{Z}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pour la tangente, $\\tan x = \\tan a$ équivaut à $x = a + k\\pi$ : ici $x = \\frac{\\pi}{4} + k\\pi$ (solution de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q5",
          "type": "mcq",
          "prompt": "L’équation $\\sin x = 0$ a pour solutions :",
          "options": [
            "$x = \\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = 2k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = \\frac{\\pi}{2} + 2k\\pi$, $k \\in \\mathbb{Z}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sinus s’annule en $0$ et en $\\pi$, donc tous les $k\\pi$ : la famille $\\frac{\\pi}{2} + k\\pi$ correspond à $\\cos x = 0$."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q6",
          "type": "mcq",
          "prompt": "Pour réduire l’expression $\\sqrt{3}\\cos x + \\sin x$, par quel nombre factorise-t-on ?",
          "options": [
            "$\\sqrt{3}$",
            "$2$",
            "$4$",
            "$\\sqrt{2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le facteur est $\\sqrt{a^2 + b^2}$ avec $a = \\sqrt{3}$ et $b = 1$ : $\\sqrt{3 + 1} = 2$ (exercice de fixation de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p07_q7",
          "type": "mcq",
          "prompt": "Les solutions dans $\\mathbb{R}$ de l’équation $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$ sont :",
          "options": [
            "$x = \\frac{5\\pi}{12} + 2k\\pi$ ou $x = -\\frac{\\pi}{12} + 2k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = \\frac{\\pi}{4} + 2k\\pi$ ou $x = -\\frac{\\pi}{4} + 2k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = \\frac{5\\pi}{12} + k\\pi$, $k \\in \\mathbb{Z}$",
            "$x = \\frac{\\pi}{6} + 2k\\pi$ ou $x = -\\frac{\\pi}{6} + 2k\\pi$, $k \\in \\mathbb{Z}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On résout $x - \\frac{\\pi}{6} = \\frac{\\pi}{4} + 2k\\pi$ ou $x - \\frac{\\pi}{6} = -\\frac{\\pi}{4} + 2k\\pi$, ce qui donne $\\frac{5\\pi}{12}$ et $-\\frac{\\pi}{12}$ (solution de la leçon)."
        }
      ]
    },
    {
      "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08",
      "order": 8,
      "title": "Inéquations trigonométriques",
      "summary": "Résoudre graphiquement, sur le cercle trigonométrique, des inéquations en sinus, cosinus et tangente sur un intervalle donné.",
      "conceptExplanation": "Les résolutions d’inéquations trigonométriques se traitent sur le cercle trigonométrique : pour une inéquation en sinus, on compare l’ordonnée des points du cercle à la valeur donnée ; pour une inéquation en cosinus, on compare leur abscisse ; pour la tangente, on pose d’abord les contraintes $x \\neq \\frac{\\pi}{2} + k\\pi$.\nExemples de la leçon : dans $]-\\pi ; \\pi]$, $\\sin x > -\\frac{1}{2}$ a pour solutions $]-\\pi ; -\\frac{5\\pi}{6}[ \\cup ]-\\frac{\\pi}{6} ; \\pi]$ ; dans $[0 ; 2\\pi]$, $\\cos x \\leq -\\frac{\\sqrt{3}}{2}$ a pour solutions $[\\frac{5\\pi}{6} ; \\frac{7\\pi}{6}]$ ; dans $]-\\pi ; \\pi]$, $\\tan x < 1$ a pour solutions $]-\\pi ; -\\frac{3\\pi}{4}[ \\cup ]-\\frac{\\pi}{2} ; \\frac{\\pi}{4}[ \\cup ]\\frac{\\pi}{2} ; \\pi]$.\nUne inégalité stricte exclut les bornes, une inégalité large les inclut.",
      "keyRule": "Sur le cercle : ordonnée pour le sinus, abscisse pour le cosinus, contraintes d’abord pour la tangente, et bornes incluses seulement si l’inégalité est large.",
      "formulas": [],
      "workedExample": {
        "title": "Résoudre $\\cos x \\leq -\\frac{\\sqrt{3}}{2}$ dans $[0 ; 2\\pi]$ (exercice de fixation)",
        "statement": "Résous dans $[0 ; 2\\pi]$ l’inéquation $\\cos x \\leq -\\frac{\\sqrt{3}}{2}$.",
        "methodSteps": [
          "On repère les points du cercle trigonométrique d’abscisse $-\\frac{\\sqrt{3}}{2}$ : dans $[0 ; 2\\pi]$, ce sont les images de $\\frac{5\\pi}{6}$ et de $\\frac{7\\pi}{6}$.",
          "Les points d’abscisse inférieure ou égale à $-\\frac{\\sqrt{3}}{2}$ forment le petit arc entre ces deux points, extrémités comprises."
        ],
        "conclusion": "L’ensemble solution est $[\\frac{5\\pi}{6} ; \\frac{7\\pi}{6}]$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le principe de résolution sur le cercle",
          "stepTheme": "Le principe de résolution sur le cercle",
          "stepBadge": "Le principe de résolution sur le cercle",
          "paragraphText": "• Principe de la leçon : les résolutions d’inéquations trigonométriques se traitent sur le cercle trigonométrique.\nRésoudre une inéquation en $\\sin x$, c’est déterminer les points du cercle dont l’ordonnée vérifie la condition ; pour une inéquation en $\\cos x$, on compare l’abscisse des points du cercle à la valeur donnée.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q1",
            "type": "mcq",
            "prompt": "Pour résoudre l’inéquation $\\sin x > -\\frac{1}{2}$ sur le cercle trigonométrique, on compare :",
            "options": [
              "L’ordonnée des points du cercle à $-\\frac{1}{2}$",
              "L’abscisse des points du cercle à $-\\frac{1}{2}$",
              "La tangente des points du cercle à $-\\frac{1}{2}$",
              "La mesure principale à $-\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sinus est l’ordonnée du point image : on repère les points du cercle d’ordonnée strictement supérieure à $-\\frac{1}{2}$ (résolution de la leçon)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Lire un arc solution sur le cercle",
          "stepTheme": "Lire un arc solution sur le cercle",
          "stepBadge": "Lire un arc solution sur le cercle",
          "paragraphText": "• Méthode : on place sur le cercle les points d’ordonnée ou d’abscisse égale à la valeur limite, puis on repère l’arc des points qui vérifient l’inégalité.\nOn lit ensuite les mesures des extrémités de cet arc dans l’intervalle imposé, en incluant ou en excluant les bornes selon que l’inégalité est large ou stricte.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q2",
            "type": "mcq",
            "prompt": "Dans $]-\\pi ; \\pi]$, les points du cercle d’ordonnée $-\\frac{1}{2}$ sont les images de :",
            "options": [
              "$-\\frac{5\\pi}{6}$ et $-\\frac{\\pi}{6}$",
              "$\\frac{\\pi}{6}$ et $\\frac{5\\pi}{6}$",
              "$-\\frac{\\pi}{3}$ et $-\\frac{2\\pi}{3}$",
              "$\\frac{5\\pi}{6}$ et $\\frac{7\\pi}{6}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les images de $-\\frac{5\\pi}{6}$ et de $-\\frac{\\pi}{6}$, dont le sinus vaut $-\\frac{1}{2}$ (résolution de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Résoudre une inéquation en sinus",
          "stepTheme": "Résoudre une inéquation en sinus",
          "stepBadge": "Résoudre une inéquation en sinus",
          "paragraphText": "• Exercice de fixation : dans $]-\\pi ; \\pi]$, les points d’ordonnée strictement supérieure à $-\\frac{1}{2}$ forment le grand arc délimité par les images de $-\\frac{5\\pi}{6}$ et de $-\\frac{\\pi}{6}$, ces points étant exclus.\nL’ensemble solution se lit alors directement sur l’intervalle.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q3",
            "type": "mcq",
            "prompt": "Dans $]-\\pi ; \\pi]$, l’ensemble des solutions de l’inéquation $\\sin x > -\\frac{1}{2}$ est :",
            "options": [
              "$]-\\frac{5\\pi}{6} ; -\\frac{\\pi}{6}[$",
              "$]-\\pi ; -\\frac{5\\pi}{6}[ \\cup ]-\\frac{\\pi}{6} ; \\pi]$",
              "$[-\\frac{5\\pi}{6} ; -\\frac{\\pi}{6}]$",
              "$]-\\frac{\\pi}{6} ; \\frac{5\\pi}{6}[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sinus est strictement supérieur à $-\\frac{1}{2}$ en dehors de l’arc compris entre $-\\frac{5\\pi}{6}$ et $-\\frac{\\pi}{6}$ : c’est la solution de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une inégalité large inclut les bornes",
          "stepTheme": "Une inégalité large inclut les bornes",
          "stepBadge": "Une inégalité large inclut les bornes",
          "paragraphText": "• Exercice de fixation : pour $\\cos x \\leq -\\frac{\\sqrt{3}}{2}$ dans $[0 ; 2\\pi]$, on repère les points du cercle d’abscisse $-\\frac{\\sqrt{3}}{2}$, images de $\\frac{5\\pi}{6}$ et de $\\frac{7\\pi}{6}$.\nLes points d’abscisse inférieure ou égale forment le petit arc entre ces deux points, extrémités comprises puisque l’inégalité est large.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q4",
            "type": "mcq",
            "prompt": "Dans $[0 ; 2\\pi]$, l’ensemble des solutions de l’inéquation $\\cos x \\leq -\\frac{\\sqrt{3}}{2}$ est :",
            "options": [
              "$]\\frac{5\\pi}{6} ; \\frac{7\\pi}{6}[$",
              "$[\\frac{5\\pi}{6} ; \\frac{7\\pi}{6}]$",
              "$[0 ; \\frac{5\\pi}{6}]$",
              "$[\\frac{7\\pi}{6} ; 2\\pi]$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’inégalité est large, donc les bornes $\\frac{5\\pi}{6}$ et $\\frac{7\\pi}{6}$ sont incluses (solution de la leçon)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une inégalité stricte exclut les bornes",
          "stepTheme": "Une inégalité stricte exclut les bornes",
          "stepBadge": "Une inégalité stricte exclut les bornes",
          "paragraphText": "• Piège : pour l’inéquation stricte $\\sin x > -\\frac{1}{2}$, les bornes $-\\frac{5\\pi}{6}$ et $-\\frac{\\pi}{6}$ ne sont pas solutions, car le sinus y vaut exactement $-\\frac{1}{2}$.\nConfondre inégalité stricte et inégalité large change l’ensemble solution aux bornes.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q5",
            "type": "mcq",
            "prompt": "Le nombre $-\\frac{\\pi}{6}$ est-il solution de l’inéquation $\\sin x > -\\frac{1}{2}$ ?",
            "options": [
              "Oui, car $\\sin\\left(-\\frac{\\pi}{6}\\right) = -\\frac{1}{2}$",
              "Non, car l’inégalité est stricte et le sinus y vaut exactement $-\\frac{1}{2}$",
              "Oui, car $-\\frac{\\pi}{6}$ appartient à $]-\\pi ; \\pi]$",
              "Non, car son sinus est positif"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En $-\\frac{\\pi}{6}$, le sinus vaut $-\\frac{1}{2}$ : l’inégalité stricte n’est pas vérifiée, la borne est exclue."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Les contraintes pour une inéquation en tangente",
          "stepTheme": "Les contraintes pour une inéquation en tangente",
          "stepBadge": "Les contraintes pour une inéquation en tangente",
          "paragraphText": "• Méthode : pour résoudre $\\tan x < 1$ dans $]-\\pi ; \\pi]$, on commence par les contraintes sur l’inconnue : $x \\neq -\\frac{\\pi}{2}$ et $x \\neq \\frac{\\pi}{2}$.\nOn résout ensuite l’équation $\\tan x = 1$, qui donne $x = -\\frac{3\\pi}{4}$ ou $x = \\frac{\\pi}{4}$ dans cet intervalle, puis on lit les arcs solutions sur le cercle à l’aide de la tangente au cercle en $I$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q6",
            "type": "mcq",
            "prompt": "Dans $]-\\pi ; \\pi]$, quelles valeurs sont interdites pour l’inconnue de l’inéquation $\\tan x < 1$ ?",
            "options": [
              "$0$ et $\\pi$",
              "$-\\frac{\\pi}{2}$ et $\\frac{\\pi}{2}$",
              "$-\\frac{3\\pi}{4}$ et $\\frac{\\pi}{4}$",
              "Aucune valeur n’est interdite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La tangente n’est pas définie en $-\\frac{\\pi}{2}$ ni en $\\frac{\\pi}{2}$ : ce sont les contraintes posées dans la résolution de la leçon."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "L’ensemble solution pour la tangente",
          "stepTheme": "L’ensemble solution pour la tangente",
          "stepBadge": "L’ensemble solution pour la tangente",
          "paragraphText": "• Exercice de fixation : les points du cercle tels que la droite $(OM)$ coupe la tangente au cercle en $I$ en un point d’abscisse strictement inférieure à $1$ forment deux petits arcs, extrémités exclues.\nOn en déduit l’ensemble solution dans $]-\\pi ; \\pi]$.",
          "exercise": {
            "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q7",
            "type": "mcq",
            "prompt": "Dans $]-\\pi ; \\pi]$, l’ensemble des solutions de l’inéquation $\\tan x < 1$ est :",
            "options": [
              "$]-\\frac{3\\pi}{4} ; \\frac{\\pi}{4}[$",
              "$[-\\frac{3\\pi}{4} ; \\frac{\\pi}{4}]$",
              "$]-\\frac{\\pi}{2} ; \\frac{\\pi}{4}[$ seulement",
              "$]-\\pi ; -\\frac{3\\pi}{4}[ \\cup ]-\\frac{\\pi}{2} ; \\frac{\\pi}{4}[ \\cup ]\\frac{\\pi}{2} ; \\pi]$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En tenant compte des valeurs interdites $-\\frac{\\pi}{2}$ et $\\frac{\\pi}{2}$ et des bornes $-\\frac{3\\pi}{4}$ et $\\frac{\\pi}{4}$ exclues, on obtient les trois intervalles de la solution de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q1",
          "type": "mcq",
          "prompt": "Pour résoudre l’inéquation $\\sin x > -\\frac{1}{2}$ sur le cercle trigonométrique, on compare :",
          "options": [
            "L’ordonnée des points du cercle à $-\\frac{1}{2}$",
            "L’abscisse des points du cercle à $-\\frac{1}{2}$",
            "La tangente des points du cercle à $-\\frac{1}{2}$",
            "La mesure principale à $-\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sinus est l’ordonnée du point image : on repère les points du cercle d’ordonnée strictement supérieure à $-\\frac{1}{2}$ (résolution de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q2",
          "type": "mcq",
          "prompt": "Dans $]-\\pi ; \\pi]$, les points du cercle d’ordonnée $-\\frac{1}{2}$ sont les images de :",
          "options": [
            "$-\\frac{5\\pi}{6}$ et $-\\frac{\\pi}{6}$",
            "$\\frac{\\pi}{6}$ et $\\frac{5\\pi}{6}$",
            "$-\\frac{\\pi}{3}$ et $-\\frac{2\\pi}{3}$",
            "$\\frac{5\\pi}{6}$ et $\\frac{7\\pi}{6}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les images de $-\\frac{5\\pi}{6}$ et de $-\\frac{\\pi}{6}$, dont le sinus vaut $-\\frac{1}{2}$ (résolution de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q3",
          "type": "mcq",
          "prompt": "Dans $]-\\pi ; \\pi]$, l’ensemble des solutions de l’inéquation $\\sin x > -\\frac{1}{2}$ est :",
          "options": [
            "$]-\\frac{5\\pi}{6} ; -\\frac{\\pi}{6}[$",
            "$]-\\pi ; -\\frac{5\\pi}{6}[ \\cup ]-\\frac{\\pi}{6} ; \\pi]$",
            "$[-\\frac{5\\pi}{6} ; -\\frac{\\pi}{6}]$",
            "$]-\\frac{\\pi}{6} ; \\frac{5\\pi}{6}[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sinus est strictement supérieur à $-\\frac{1}{2}$ en dehors de l’arc compris entre $-\\frac{5\\pi}{6}$ et $-\\frac{\\pi}{6}$ : c’est la solution de la leçon."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q4",
          "type": "mcq",
          "prompt": "Dans $[0 ; 2\\pi]$, l’ensemble des solutions de l’inéquation $\\cos x \\leq -\\frac{\\sqrt{3}}{2}$ est :",
          "options": [
            "$]\\frac{5\\pi}{6} ; \\frac{7\\pi}{6}[$",
            "$[\\frac{5\\pi}{6} ; \\frac{7\\pi}{6}]$",
            "$[0 ; \\frac{5\\pi}{6}]$",
            "$[\\frac{7\\pi}{6} ; 2\\pi]$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’inégalité est large, donc les bornes $\\frac{5\\pi}{6}$ et $\\frac{7\\pi}{6}$ sont incluses (solution de la leçon)."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q5",
          "type": "mcq",
          "prompt": "Le nombre $-\\frac{\\pi}{6}$ est-il solution de l’inéquation $\\sin x > -\\frac{1}{2}$ ?",
          "options": [
            "Oui, car $\\sin\\left(-\\frac{\\pi}{6}\\right) = -\\frac{1}{2}$",
            "Non, car l’inégalité est stricte et le sinus y vaut exactement $-\\frac{1}{2}$",
            "Oui, car $-\\frac{\\pi}{6}$ appartient à $]-\\pi ; \\pi]$",
            "Non, car son sinus est positif"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En $-\\frac{\\pi}{6}$, le sinus vaut $-\\frac{1}{2}$ : l’inégalité stricte n’est pas vérifiée, la borne est exclue."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q6",
          "type": "mcq",
          "prompt": "Dans $]-\\pi ; \\pi]$, quelles valeurs sont interdites pour l’inconnue de l’inéquation $\\tan x < 1$ ?",
          "options": [
            "$0$ et $\\pi$",
            "$-\\frac{\\pi}{2}$ et $\\frac{\\pi}{2}$",
            "$-\\frac{3\\pi}{4}$ et $\\frac{\\pi}{4}$",
            "Aucune valeur n’est interdite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La tangente n’est pas définie en $-\\frac{\\pi}{2}$ ni en $\\frac{\\pi}{2}$ : ce sont les contraintes posées dans la résolution de la leçon."
        },
        {
          "id": "premiere_d_maths_geometrie_l10_angles_orientes_p08_q7",
          "type": "mcq",
          "prompt": "Dans $]-\\pi ; \\pi]$, l’ensemble des solutions de l’inéquation $\\tan x < 1$ est :",
          "options": [
            "$]-\\frac{3\\pi}{4} ; \\frac{\\pi}{4}[$",
            "$[-\\frac{3\\pi}{4} ; \\frac{\\pi}{4}]$",
            "$]-\\frac{\\pi}{2} ; \\frac{\\pi}{4}[$ seulement",
            "$]-\\pi ; -\\frac{3\\pi}{4}[ \\cup ]-\\frac{\\pi}{2} ; \\frac{\\pi}{4}[ \\cup ]\\frac{\\pi}{2} ; \\pi]$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "En tenant compte des valeurs interdites $-\\frac{\\pi}{2}$ et $\\frac{\\pi}{2}$ et des bornes $-\\frac{3\\pi}{4}$ et $\\frac{\\pi}{4}$ exclues, on obtient les trois intervalles de la solution de la leçon."
        }
      ]
    }
  ]
};
