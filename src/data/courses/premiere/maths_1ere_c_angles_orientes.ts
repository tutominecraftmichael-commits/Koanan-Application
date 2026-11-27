import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Angles orientés et trigonométrie » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Angles orientés et trigonométrie » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L06_ANGLES_ORIENTES: CurriculumChapter = {
  "id": "premiere_c_maths_geometrie_l06_angles_orientes",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 6,
  "title": "Leçon 6 : Angles orientés et trigonométrie",
  "summary": "La leçon définit les mesures d’un angle orienté et la mesure principale, les propriétés des angles orientés (relation de Chasles, double, angles inscrits), puis les lignes trigonométriques, les formules d’addition et de duplication, et la résolution d’équations et d’inéquations trigonométriques.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Angles orientés et trigonométrie » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01",
      "order": 1,
      "title": "Mesures d’un angle orienté et mesure principale",
      "summary": "Définir les mesures d’un angle orienté et déterminer sa mesure principale dans $]-\\pi ; \\pi]$.",
      "conceptExplanation": "Définition : soit un angle orienté et $\\alpha$ sa mesure principale. On appelle mesure de cet angle orienté tout nombre réel de la forme $\\alpha + 2k\\pi$ où $k \\in \\mathbb{Z}$.\nExemple : pour un angle de mesure principale $\\frac{\\pi}{3}$, les nombres $\\frac{7\\pi}{3}$ et $-\\frac{11\\pi}{3}$ sont des mesures de cet angle.\nRemarques : à tout nombre réel $x$ correspond un unique point $M$ du cercle trigonométrique ; si $x$ est une mesure d’un angle orienté, ses mesures sont les nombres de la forme $x + 2k\\pi$ ; toutes les mesures d’un même angle ont le même point image $M$.\nMesure principale : il existe un unique réel $x$ dans $]-\\pi ; \\pi]$ qui est une mesure de l’angle. Autre exemple des exercices : la mesure principale de $\\frac{149\\pi}{3}$ est $-\\frac{\\pi}{3}$, obtenue avec $k = -25$.",
      "keyRule": "Les mesures d’un angle s’obtiennent en ajoutant $2k\\pi$ à la mesure principale ; la mesure principale est celle qui tombe dans $]-\\pi ; \\pi]$.",
      "formulas": [
        {
          "name": "Mesures d’un angle orienté",
          "formula": "\\alpha + 2k\\pi,\\ k \\in \\mathbb{Z}"
        },
        {
          "name": "Mesure principale",
          "formula": "-\\pi < \\alpha \\leq \\pi"
        }
      ],
      "workedExample": {
        "title": "La mesure principale de $-\\frac{119\\pi}{4}$ (exercice de fixation)",
        "statement": "Détermine la mesure principale $\\alpha$ de l’angle orienté dont une mesure est $-\\frac{119\\pi}{4}$.",
        "methodSteps": [
          "On cherche $k \\in \\mathbb{Z}$ tel que $-\\pi < -\\frac{119\\pi}{4} + 2k\\pi \\leq \\pi$.",
          "L’encadrement donne $k = 15$.",
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
          "paragraphText": "• Définition : soit un angle orienté de mesure principale $\\alpha$.\nOn appelle mesure de cet angle orienté tout nombre réel de la forme $\\alpha + 2k\\pi$ où $k \\in \\mathbb{Z}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01_q1",
            "type": "mcq",
            "prompt": "Un angle orienté a pour mesure principale $\\frac{\\pi}{3}$. Lequel de ces nombres est une mesure de cet angle ?",
            "options": [
              "$\\frac{7\\pi}{3}$",
              "$\\frac{\\pi}{3} + \\pi$",
              "$\\frac{\\pi}{6}$",
              "$-\\frac{\\pi}{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On ajoute un multiple de $2\\pi$ à la mesure principale : $\\frac{\\pi}{3} + 2\\pi = \\frac{7\\pi}{3}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Deux mesures de l’exemple de la leçon",
          "stepTheme": "Deux mesures de l’exemple de la leçon",
          "stepBadge": "Deux mesures de l’exemple de la leçon",
          "paragraphText": "• Exemple de la leçon : pour un angle de mesure principale $\\frac{\\pi}{3}$, on a $\\frac{\\pi}{3} + 2\\pi = \\frac{7\\pi}{3}$ et $\\frac{\\pi}{3} - 4\\pi = -\\frac{11\\pi}{3}$.\nLes nombres $\\frac{7\\pi}{3}$ et $-\\frac{11\\pi}{3}$ sont donc des mesures de cet angle.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01_q2",
            "type": "mcq",
            "prompt": "Le nombre $-\\frac{11\\pi}{3}$ est-il une mesure de l’angle de mesure principale $\\frac{\\pi}{3}$ ?",
            "options": [
              "Oui, car elle s’écrit $\\frac{\\pi}{3} - 4\\pi$, avec $-4\\pi$ multiple de $2\\pi$",
              "Non, car elle est négative",
              "Non, car elle dépasse $\\pi$ en valeur absolue",
              "Oui, car tout nombre réel est une mesure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les mesures sont les nombres de la forme $\\frac{\\pi}{3} + 2k\\pi$ ; ici $k = -2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La mesure principale",
          "stepTheme": "La mesure principale",
          "stepBadge": "La mesure principale",
          "paragraphText": "• Propriété : soit un angle orienté de mesure $\\alpha$.\nIl existe un unique nombre réel $x$ dans $]-\\pi ; \\pi]$ tel que $x$ soit une mesure de cet angle : c’est sa mesure principale.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01_q3",
            "type": "mcq",
            "prompt": "La mesure principale d’un angle orienté est l’unique mesure appartenant à :",
            "options": [
              "$[0 ; 2\\pi[$",
              "$]-2\\pi ; 2\\pi]$",
              "$]-\\pi ; \\pi]$",
              "$[0 ; \\pi]$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la propriété de la leçon : l’intervalle de la mesure principale est $]-\\pi ; \\pi]$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Rechercher la mesure principale",
          "stepTheme": "Rechercher la mesure principale",
          "stepBadge": "Rechercher la mesure principale",
          "paragraphText": "• Méthode : déterminer la mesure principale $\\alpha$ d’un angle dont une mesure $x$ est connue consiste à écrire $\\alpha = x + 2k\\pi$ avec $-\\pi < \\alpha \\leq \\pi$ et $k \\in \\mathbb{Z}$.\nOn détermine d’abord $k$ à l’aide des inégalités $-\\pi < x + 2k\\pi \\leq \\pi$, puis on calcule $\\alpha$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01_q4",
            "type": "mcq",
            "prompt": "Pour la mesure $x = -\\frac{119\\pi}{4}$, quelle valeur de $k$ donne la mesure principale ?",
            "options": [
              "$14$",
              "$15$",
              "$16$",
              "$-15$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’encadrement donne $k = 15$ dans la solution de l’exercice de fixation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La mesure principale de $-\\frac{119\\pi}{4}$",
          "stepTheme": "La mesure principale de $-\\frac{119\\pi}{4}$",
          "stepBadge": "La mesure principale de $-\\frac{119\\pi}{4}$",
          "paragraphText": "• Exercice de fixation : avec $k = 15$, on obtient $\\alpha = -\\frac{119\\pi}{4} + 15 \\times 2\\pi$.\nLe calcul donne la mesure principale cherchée.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01_q5",
            "type": "mcq",
            "prompt": "Que vaut la mesure principale de l’angle de mesure $-\\frac{119\\pi}{4}$ ?",
            "options": [
              "$-\\frac{\\pi}{4}$",
              "$\\frac{3\\pi}{4}$",
              "$\\frac{\\pi}{2}$",
              "$\\frac{\\pi}{4}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $-\\frac{119\\pi}{4} + 30\\pi = \\frac{\\pi}{4}$, qui appartient bien à $]-\\pi ; \\pi]$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Toutes les mesures ont le même point image",
          "stepTheme": "Toutes les mesures ont le même point image",
          "stepBadge": "Toutes les mesures ont le même point image",
          "paragraphText": "• Remarques de la leçon : à tout nombre réel $x$ correspond un unique point $M$ du cercle trigonométrique.\nToutes les mesures d’un même angle orienté ont le même point image $M$ sur le cercle.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01_q6",
            "type": "mcq",
            "prompt": "Deux mesures différentes d’un même angle orienté ont-elles le même point image sur le cercle trigonométrique ?",
            "options": [
              "Seulement si elles sont positives",
              "Non, un point par mesure",
              "Oui, toujours le même point $M$",
              "Seulement pour la mesure principale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la remarque de la leçon : le point image ne dépend pas de la mesure choisie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01_q1",
          "type": "mcq",
          "prompt": "Un angle orienté a pour mesure principale $\\frac{\\pi}{3}$. Lequel de ces nombres est une mesure de cet angle ?",
          "options": [
            "$\\frac{7\\pi}{3}$",
            "$\\frac{\\pi}{3} + \\pi$",
            "$\\frac{\\pi}{6}$",
            "$-\\frac{\\pi}{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On ajoute un multiple de $2\\pi$ à la mesure principale : $\\frac{\\pi}{3} + 2\\pi = \\frac{7\\pi}{3}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01_q2",
          "type": "mcq",
          "prompt": "Le nombre $-\\frac{11\\pi}{3}$ est-il une mesure de l’angle de mesure principale $\\frac{\\pi}{3}$ ?",
          "options": [
            "Oui, car elle s’écrit $\\frac{\\pi}{3} - 4\\pi$, avec $-4\\pi$ multiple de $2\\pi$",
            "Non, car elle est négative",
            "Non, car elle dépasse $\\pi$ en valeur absolue",
            "Oui, car tout nombre réel est une mesure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les mesures sont les nombres de la forme $\\frac{\\pi}{3} + 2k\\pi$ ; ici $k = -2$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01_q3",
          "type": "mcq",
          "prompt": "La mesure principale d’un angle orienté est l’unique mesure appartenant à :",
          "options": [
            "$[0 ; 2\\pi[$",
            "$]-2\\pi ; 2\\pi]$",
            "$]-\\pi ; \\pi]$",
            "$[0 ; \\pi]$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la propriété de la leçon : l’intervalle de la mesure principale est $]-\\pi ; \\pi]$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01_q4",
          "type": "mcq",
          "prompt": "Pour la mesure $x = -\\frac{119\\pi}{4}$, quelle valeur de $k$ donne la mesure principale ?",
          "options": [
            "$14$",
            "$15$",
            "$16$",
            "$-15$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’encadrement donne $k = 15$ dans la solution de l’exercice de fixation."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01_q5",
          "type": "mcq",
          "prompt": "Que vaut la mesure principale de l’angle de mesure $-\\frac{119\\pi}{4}$ ?",
          "options": [
            "$-\\frac{\\pi}{4}$",
            "$\\frac{3\\pi}{4}$",
            "$\\frac{\\pi}{2}$",
            "$\\frac{\\pi}{4}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $-\\frac{119\\pi}{4} + 30\\pi = \\frac{\\pi}{4}$, qui appartient bien à $]-\\pi ; \\pi]$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p01_q6",
          "type": "mcq",
          "prompt": "Deux mesures différentes d’un même angle orienté ont-elles le même point image sur le cercle trigonométrique ?",
          "options": [
            "Seulement si elles sont positives",
            "Non, un point par mesure",
            "Oui, toujours le même point $M$",
            "Seulement pour la mesure principale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la remarque de la leçon : le point image ne dépend pas de la mesure choisie."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02",
      "order": 2,
      "title": "Somme, différence et double d’un angle orienté",
      "summary": "Additionner et soustraire deux angles orientés, et utiliser les propriétés de leur double.",
      "conceptExplanation": "Somme : la somme de deux angles orientés de mesures respectives $\\alpha$ et $\\beta$ est l’angle orienté dont une mesure est $\\alpha + \\beta$. Deux angles sont opposés lorsque leur somme est l’angle nul ; l’opposé d’un angle de mesure $\\alpha$ a pour mesure $-\\alpha$. La différence est la somme avec l’opposé : une mesure en est $\\alpha - \\beta$. La somme est commutative.\nExemple de la leçon : pour les mesures $\\frac{\\pi}{6}$ et $-\\frac{2\\pi}{5}$, la somme a pour mesure $-\\frac{7\\pi}{30}$ et la différence $\\frac{17\\pi}{30}$.\nDouble : le double d’un angle de mesure $\\alpha$ a pour mesure $2\\alpha$, et $2\\hat{\\alpha} + 2\\hat{\\beta} = 2(\\hat{\\alpha} + \\hat{\\beta})$. Propriétés : $2\\hat{\\alpha}$ est l’angle nul si et seulement si $\\hat{\\alpha}$ est l’angle nul ou l’angle plat ; $2\\hat{\\alpha} = 2\\hat{\\beta}$ si et seulement si $\\hat{\\alpha} = \\hat{\\beta}$ ou $\\hat{\\alpha} = \\hat{\\beta} + \\hat{\\pi}$ ; $2\\hat{\\alpha}$ est l’angle plat si et seulement si $\\hat{\\alpha}$ a pour mesure $\\frac{\\pi}{2}$ ou $-\\frac{\\pi}{2}$.",
      "keyRule": "Somme et différence se calculent sur les mesures ; le double double la mesure, avec les équivalences sur l’angle nul et l’angle plat à connaître.",
      "formulas": [
        {
          "name": "Mesure d’une somme",
          "formula": "\\alpha + \\beta"
        },
        {
          "name": "Mesure d’un double",
          "formula": "2\\alpha"
        }
      ],
      "workedExample": {
        "title": "Somme et différence de l’exemple de la leçon",
        "statement": "Deux angles orientés ont pour mesures respectives $\\frac{\\pi}{6}$ et $-\\frac{2\\pi}{5}$. Donne une mesure de leur somme et une mesure de leur différence.",
        "methodSteps": [
          "Somme : on additionne les mesures, $\\frac{\\pi}{6} + (-\\frac{2\\pi}{5}) = -\\frac{7\\pi}{30}$.",
          "Différence : on soustrait les mesures, $\\frac{\\pi}{6} - (-\\frac{2\\pi}{5}) = \\frac{17\\pi}{30}$."
        ],
        "conclusion": "La somme a pour mesure $-\\frac{7\\pi}{30}$ et la différence $\\frac{17\\pi}{30}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La somme de deux angles orientés",
          "stepTheme": "La somme de deux angles orientés",
          "stepBadge": "La somme de deux angles orientés",
          "paragraphText": "• Définition : la somme de deux angles orientés de mesures respectives $\\alpha$ et $\\beta$ est l’angle orienté dont une mesure est $\\alpha + \\beta$.\nExemple de la leçon : les mesures $\\frac{\\pi}{6}$ et $-\\frac{2\\pi}{5}$ donnent une somme de mesure $\\frac{\\pi}{6} - \\frac{2\\pi}{5}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02_q1",
            "type": "mcq",
            "prompt": "Deux angles ont pour mesures $\\frac{\\pi}{6}$ et $-\\frac{2\\pi}{5}$. Une mesure de leur somme est :",
            "options": [
              "$-\\frac{7\\pi}{30}$",
              "$\\frac{7\\pi}{30}$",
              "$-\\frac{\\pi}{30}$",
              "$\\frac{17\\pi}{30}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On additionne les mesures : $\\frac{\\pi}{6} - \\frac{2\\pi}{5} = -\\frac{7\\pi}{30}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’opposé et la différence",
          "stepTheme": "L’opposé et la différence",
          "stepBadge": "L’opposé et la différence",
          "paragraphText": "• Définitions : deux angles orientés sont opposés lorsque leur somme est l’angle orienté nul ; l’opposé d’un angle de mesure $\\alpha$ a pour mesure $-\\alpha$.\nLa différence de deux angles de mesures $\\alpha$ et $\\beta$ est l’angle dont une mesure est $\\alpha - \\beta$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02_q2",
            "type": "mcq",
            "prompt": "Avec les mêmes mesures $\\frac{\\pi}{6}$ et $-\\frac{2\\pi}{5}$, une mesure de la différence du premier angle par le second est :",
            "options": [
              "$-\\frac{7\\pi}{30}$",
              "$-\\frac{17\\pi}{30}$",
              "$\\frac{\\pi}{30}$",
              "$\\frac{17\\pi}{30}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $\\frac{\\pi}{6} - (-\\frac{2\\pi}{5}) = \\frac{\\pi}{6} + \\frac{2\\pi}{5} = \\frac{17\\pi}{30}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La somme est commutative",
          "stepTheme": "La somme est commutative",
          "stepBadge": "La somme est commutative",
          "paragraphText": "• Remarque de la leçon : la somme de deux angles orientés est commutative.\nChanger l’ordre des deux angles ne change pas l’angle somme.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02_q3",
            "type": "mcq",
            "prompt": "Pour deux angles orientés $\\hat{\\alpha}$ et $\\hat{\\beta}$, la somme $\\hat{\\alpha} + \\hat{\\beta}$ est :",
            "options": [
              "Toujours l’angle nul",
              "Égale à $\\hat{\\beta} + \\hat{\\alpha}$",
              "Égale à l’opposé de $\\hat{\\beta}$",
              "Définie seulement si les mesures sont égales"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la remarque de la leçon sur la commutativité de la somme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le double d’un angle orienté",
          "stepTheme": "Le double d’un angle orienté",
          "stepBadge": "Le double d’un angle orienté",
          "paragraphText": "• Définition : le double d’un angle orienté est la somme de cet angle par lui-même.\nLe double d’un angle orienté de mesure $\\alpha$ a pour mesure $2\\alpha$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02_q4",
            "type": "mcq",
            "prompt": "Le double d’un angle orienté de mesure $\\frac{\\pi}{6}$ a pour mesure :",
            "options": [
              "$\\frac{\\pi}{6}$",
              "$\\frac{\\pi}{3}$",
              "$\\frac{\\pi}{12}$",
              "$\\pi$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La mesure du double est le double de la mesure : $2 \\times \\frac{\\pi}{6} = \\frac{\\pi}{3}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Quand le double est l’angle nul",
          "stepTheme": "Quand le double est l’angle nul",
          "stepBadge": "Quand le double est l’angle nul",
          "paragraphText": "• Propriété : le double d’un angle est l’angle nul si et seulement si cet angle est l’angle nul ou l’angle plat.\nExercice de fixation : si le double de l’angle formé par les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ est l’angle nul, alors ces vecteurs sont colinéaires.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02_q5",
            "type": "mcq",
            "prompt": "Si le double de l’angle des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ est l’angle nul, alors les points $A$, $B$ et $C$ sont :",
            "options": [
              "Les sommets d’un triangle rectangle",
              "Jamais alignés",
              "Les sommets d’un triangle équilatéral",
              "Alignés"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corrigé conclut que les vecteurs sont colinéaires, donc que les points sont alignés."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Quand le double est l’angle plat",
          "stepTheme": "Quand le double est l’angle plat",
          "stepBadge": "Quand le double est l’angle plat",
          "paragraphText": "• Propriété : le double d’un angle est l’angle plat si et seulement si cet angle a pour mesure principale $\\frac{\\pi}{2}$ ou $-\\frac{\\pi}{2}$.\nAutre propriété : $2\\hat{\\alpha} = 2\\hat{\\beta}$ si et seulement si $\\hat{\\alpha} = \\hat{\\beta}$ ou $\\hat{\\alpha} = \\hat{\\beta} + \\hat{\\pi}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02_q6",
            "type": "mcq",
            "prompt": "Si le double d’un angle orienté est l’angle plat, sa mesure principale peut être :",
            "options": [
              "$\\frac{\\pi}{2}$ ou $-\\frac{\\pi}{2}$",
              "$\\frac{\\pi}{4}$ ou $-\\frac{\\pi}{4}$",
              "$0$ ou $\\pi$",
              "$\\pi$ seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On résout le double égal à l’angle plat : les mesures principales sont $\\frac{\\pi}{2}$ et $-\\frac{\\pi}{2}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02_q1",
          "type": "mcq",
          "prompt": "Deux angles ont pour mesures $\\frac{\\pi}{6}$ et $-\\frac{2\\pi}{5}$. Une mesure de leur somme est :",
          "options": [
            "$-\\frac{7\\pi}{30}$",
            "$\\frac{7\\pi}{30}$",
            "$-\\frac{\\pi}{30}$",
            "$\\frac{17\\pi}{30}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On additionne les mesures : $\\frac{\\pi}{6} - \\frac{2\\pi}{5} = -\\frac{7\\pi}{30}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02_q2",
          "type": "mcq",
          "prompt": "Avec les mêmes mesures $\\frac{\\pi}{6}$ et $-\\frac{2\\pi}{5}$, une mesure de la différence du premier angle par le second est :",
          "options": [
            "$-\\frac{7\\pi}{30}$",
            "$-\\frac{17\\pi}{30}$",
            "$\\frac{\\pi}{30}$",
            "$\\frac{17\\pi}{30}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $\\frac{\\pi}{6} - (-\\frac{2\\pi}{5}) = \\frac{\\pi}{6} + \\frac{2\\pi}{5} = \\frac{17\\pi}{30}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02_q3",
          "type": "mcq",
          "prompt": "Pour deux angles orientés $\\hat{\\alpha}$ et $\\hat{\\beta}$, la somme $\\hat{\\alpha} + \\hat{\\beta}$ est :",
          "options": [
            "Toujours l’angle nul",
            "Égale à $\\hat{\\beta} + \\hat{\\alpha}$",
            "Égale à l’opposé de $\\hat{\\beta}$",
            "Définie seulement si les mesures sont égales"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la remarque de la leçon sur la commutativité de la somme."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02_q4",
          "type": "mcq",
          "prompt": "Le double d’un angle orienté de mesure $\\frac{\\pi}{6}$ a pour mesure :",
          "options": [
            "$\\frac{\\pi}{6}$",
            "$\\frac{\\pi}{3}$",
            "$\\frac{\\pi}{12}$",
            "$\\pi$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La mesure du double est le double de la mesure : $2 \\times \\frac{\\pi}{6} = \\frac{\\pi}{3}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02_q5",
          "type": "mcq",
          "prompt": "Si le double de l’angle des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ est l’angle nul, alors les points $A$, $B$ et $C$ sont :",
          "options": [
            "Les sommets d’un triangle rectangle",
            "Jamais alignés",
            "Les sommets d’un triangle équilatéral",
            "Alignés"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corrigé conclut que les vecteurs sont colinéaires, donc que les points sont alignés."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p02_q6",
          "type": "mcq",
          "prompt": "Si le double d’un angle orienté est l’angle plat, sa mesure principale peut être :",
          "options": [
            "$\\frac{\\pi}{2}$ ou $-\\frac{\\pi}{2}$",
            "$\\frac{\\pi}{4}$ ou $-\\frac{\\pi}{4}$",
            "$0$ ou $\\pi$",
            "$\\pi$ seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On résout le double égal à l’angle plat : les mesures principales sont $\\frac{\\pi}{2}$ et $-\\frac{\\pi}{2}$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03",
      "order": 3,
      "title": "Relation de Chasles et conséquences",
      "summary": "Utiliser la relation de Chasles et l’effet d’une multiplication des vecteurs par un réel sur un angle orienté.",
      "conceptExplanation": "Relation de Chasles : pour tous vecteurs non nuls $\\vec{u}$, $\\vec{v}$ et $\\vec{w}$, on a $(\\vec{u}, \\vec{v}) + (\\vec{v}, \\vec{w}) = (\\vec{u}, \\vec{w})$.\nConséquences : l’angle de $\\vec{v}$ vers $\\vec{u}$ est l’opposé de l’angle de $\\vec{u}$ vers $\\vec{v}$ ; si $k > 0$, multiplier un vecteur par $k$ ne change pas l’angle ; si $k < 0$, multiplier un vecteur par $k$ ajoute l’angle plat à l’angle ; multiplier les deux vecteurs par le même réel $k$ non nul laisse l’angle inchangé.\nExercice de fixation : parmi les égalités testées, $(-2\\vec{u}, \\vec{v}) = (\\vec{u}, \\vec{v})$ est fausse, tandis que $(-\\vec{u}, \\vec{v}) = (\\vec{u}, \\vec{v}) + \\hat{\\pi}$, $(7\\vec{u}, \\vec{v}) = (\\vec{u}, 7\\vec{v})$ et $(-5\\vec{u}, -5\\vec{v}) = (\\vec{u}, \\vec{v})$ sont vraies.",
      "keyRule": "Chasles fait disparaître le vecteur du milieu ; un facteur positif ne change rien, un facteur négatif sur un seul vecteur ajoute l’angle plat.",
      "formulas": [
        {
          "name": "Relation de Chasles",
          "formula": "(\\vec{u}, \\vec{v}) + (\\vec{v}, \\vec{w}) = (\\vec{u}, \\vec{w})"
        }
      ],
      "workedExample": {
        "title": "Décomposer un angle par Chasles (exercice de fixation)",
        "statement": "$A$, $B$, $C$ et $D$ sont quatre points distincts. Parmi trois égalités proposées, choisis celle qui décompose correctement l’angle de $\\overrightarrow{AB}$ vers $\\overrightarrow{AC}$ en passant par $\\overrightarrow{DC}$.",
        "methodSteps": [
          "On applique la relation de Chasles avec le vecteur intermédiaire $\\overrightarrow{DC}$.",
          "Le premier angle va de $\\overrightarrow{AB}$ vers $\\overrightarrow{DC}$, le second de $\\overrightarrow{DC}$ vers $\\overrightarrow{AC}$."
        ],
        "conclusion": "L’égalité correcte est celle qui enchaîne les deux angles par le vecteur $\\overrightarrow{DC}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La relation de Chasles",
          "stepTheme": "La relation de Chasles",
          "stepBadge": "La relation de Chasles",
          "paragraphText": "• Propriété : pour tous vecteurs non nuls, l’angle de $\\vec{u}$ vers $\\vec{v}$ plus l’angle de $\\vec{v}$ vers $\\vec{w}$ égale l’angle de $\\vec{u}$ vers $\\vec{w}$.\nLe vecteur intermédiaire $\\vec{v}$ disparaît dans la somme.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03_q1",
            "type": "mcq",
            "prompt": "D’après la relation de Chasles, $(\\vec{u}, \\vec{v}) + (\\vec{v}, \\vec{w})$ est égal à :",
            "options": [
              "$(\\vec{v}, \\vec{u})$",
              "$(\\vec{w}, \\vec{u})$",
              "$(\\vec{u}, \\vec{w})$",
              "$(\\vec{u}, \\vec{v})$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le vecteur du milieu se simplifie : il reste l’angle de $\\vec{u}$ vers $\\vec{w}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L’égalité correcte de l’exercice de fixation",
          "stepTheme": "L’égalité correcte de l’exercice de fixation",
          "stepBadge": "L’égalité correcte de l’exercice de fixation",
          "paragraphText": "• Exercice de fixation : $A$, $B$, $C$ et $D$ sont quatre points distincts.\nPar la relation de Chasles avec le vecteur intermédiaire $\\overrightarrow{DC}$, l’angle de $\\overrightarrow{AB}$ vers $\\overrightarrow{AC}$ se décompose en passant par $\\overrightarrow{DC}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces égalités est la décomposition correcte par Chasles ?",
            "options": [
              "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AB}, \\overrightarrow{DC}) + (\\overrightarrow{AC}, \\overrightarrow{DC})$",
              "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AB}, \\overrightarrow{AC}) + (\\overrightarrow{DC}, \\overrightarrow{AC})$",
              "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AC}, \\overrightarrow{DC}) + (\\overrightarrow{DC}, \\overrightarrow{AB})$",
              "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AB}, \\overrightarrow{DC}) + (\\overrightarrow{DC}, \\overrightarrow{AC})$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la réponse b) du corrigé : le second angle commence par le vecteur qui termine le premier."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Inverser un angle orienté",
          "stepTheme": "Inverser un angle orienté",
          "stepBadge": "Inverser un angle orienté",
          "paragraphText": "• Conséquence : pour deux vecteurs non nuls, l’angle de $\\vec{v}$ vers $\\vec{u}$ est l’opposé de l’angle de $\\vec{u}$ vers $\\vec{v}$.\nInverser l’ordre des vecteurs change le signe de l’angle.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03_q3",
            "type": "mcq",
            "prompt": "L’angle $(\\vec{v}, \\vec{u})$ est égal à :",
            "options": [
              "$(\\vec{u}, \\vec{v})$",
              "$-(\\vec{u}, \\vec{v})$",
              "$(\\vec{u}, \\vec{v}) + \\hat{\\pi}$",
              "$2(\\vec{u}, \\vec{v})$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la première conséquence listée dans la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Multiplier par un réel strictement positif",
          "stepTheme": "Multiplier par un réel strictement positif",
          "stepBadge": "Multiplier par un réel strictement positif",
          "paragraphText": "• Conséquence : si $k > 0$, multiplier l’un des vecteurs par $k$ ne change pas l’angle orienté.\nPar exemple, l’angle de $7\\vec{u}$ vers $\\vec{v}$ égale l’angle de $\\vec{u}$ vers $7\\vec{v}$, qui égale l’angle de $\\vec{u}$ vers $\\vec{v}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03_q4",
            "type": "mcq",
            "prompt": "L’angle $(7\\vec{u}, \\vec{v})$ est égal à :",
            "options": [
              "$(\\vec{u}, \\vec{v}) + \\hat{\\pi}$",
              "$7(\\vec{u}, \\vec{v})$",
              "$(\\vec{u}, \\vec{v})$",
              "$-(\\vec{u}, \\vec{v})$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le facteur $7$ est strictement positif : l’angle est inchangé, comme dans le corrigé (égalité 3 vraie)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Multiplier par un réel strictement négatif",
          "stepTheme": "Multiplier par un réel strictement négatif",
          "stepBadge": "Multiplier par un réel strictement négatif",
          "paragraphText": "• Conséquence : si $k < 0$, multiplier un vecteur par $k$ ajoute l’angle plat à l’angle orienté.\nEn particulier, l’angle de $-\\vec{u}$ vers $\\vec{v}$ égale l’angle de $\\vec{u}$ vers $\\vec{v}$ plus l’angle plat.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03_q5",
            "type": "mcq",
            "prompt": "L’angle $(-\\vec{u}, \\vec{v})$ est égal à :",
            "options": [
              "$(\\vec{u}, \\vec{v}) + \\hat{\\pi}$",
              "$-(\\vec{u}, \\vec{v})$",
              "$(\\vec{u}, \\vec{v})$",
              "$2(\\vec{u}, \\vec{v})$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le facteur $-1$ est strictement négatif : on ajoute l’angle plat (égalité 2 vraie du corrigé)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Repérer une égalité fausse",
          "stepTheme": "Repérer une égalité fausse",
          "stepBadge": "Repérer une égalité fausse",
          "paragraphText": "• Piège de l’exercice de fixation : multiplier par $4$, qui est positif, ne change pas l’angle.\nL’égalité qui ajoute l’angle plat pour le facteur $4$ est donc fausse, alors que les égalités avec les facteurs $7$ et $-5$ des deux côtés sont vraies.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces égalités est fausse ?",
            "options": [
              "$(\\vec{u}, 4\\vec{v}) = (\\vec{u}, \\vec{v}) + \\hat{\\pi}$",
              "$(-5\\vec{u}, -5\\vec{v}) = (\\vec{u}, \\vec{v})$",
              "$(7\\vec{u}, \\vec{v}) = (\\vec{u}, 7\\vec{v})$",
              "$(-\\vec{u}, \\vec{v}) = (\\vec{u}, \\vec{v}) + \\hat{\\pi}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le facteur $4$ est positif : l’angle est inchangé, sans ajout de l’angle plat (égalité 5 fausse du corrigé)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03_q1",
          "type": "mcq",
          "prompt": "D’après la relation de Chasles, $(\\vec{u}, \\vec{v}) + (\\vec{v}, \\vec{w})$ est égal à :",
          "options": [
            "$(\\vec{v}, \\vec{u})$",
            "$(\\vec{w}, \\vec{u})$",
            "$(\\vec{u}, \\vec{w})$",
            "$(\\vec{u}, \\vec{v})$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le vecteur du milieu se simplifie : il reste l’angle de $\\vec{u}$ vers $\\vec{w}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces égalités est la décomposition correcte par Chasles ?",
          "options": [
            "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AB}, \\overrightarrow{DC}) + (\\overrightarrow{AC}, \\overrightarrow{DC})$",
            "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AB}, \\overrightarrow{AC}) + (\\overrightarrow{DC}, \\overrightarrow{AC})$",
            "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AC}, \\overrightarrow{DC}) + (\\overrightarrow{DC}, \\overrightarrow{AB})$",
            "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = (\\overrightarrow{AB}, \\overrightarrow{DC}) + (\\overrightarrow{DC}, \\overrightarrow{AC})$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la réponse b) du corrigé : le second angle commence par le vecteur qui termine le premier."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03_q3",
          "type": "mcq",
          "prompt": "L’angle $(\\vec{v}, \\vec{u})$ est égal à :",
          "options": [
            "$(\\vec{u}, \\vec{v})$",
            "$-(\\vec{u}, \\vec{v})$",
            "$(\\vec{u}, \\vec{v}) + \\hat{\\pi}$",
            "$2(\\vec{u}, \\vec{v})$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la première conséquence listée dans la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03_q4",
          "type": "mcq",
          "prompt": "L’angle $(7\\vec{u}, \\vec{v})$ est égal à :",
          "options": [
            "$(\\vec{u}, \\vec{v}) + \\hat{\\pi}$",
            "$7(\\vec{u}, \\vec{v})$",
            "$(\\vec{u}, \\vec{v})$",
            "$-(\\vec{u}, \\vec{v})$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le facteur $7$ est strictement positif : l’angle est inchangé, comme dans le corrigé (égalité 3 vraie)."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03_q5",
          "type": "mcq",
          "prompt": "L’angle $(-\\vec{u}, \\vec{v})$ est égal à :",
          "options": [
            "$(\\vec{u}, \\vec{v}) + \\hat{\\pi}$",
            "$-(\\vec{u}, \\vec{v})$",
            "$(\\vec{u}, \\vec{v})$",
            "$2(\\vec{u}, \\vec{v})$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le facteur $-1$ est strictement négatif : on ajoute l’angle plat (égalité 2 vraie du corrigé)."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p03_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces égalités est fausse ?",
          "options": [
            "$(\\vec{u}, 4\\vec{v}) = (\\vec{u}, \\vec{v}) + \\hat{\\pi}$",
            "$(-5\\vec{u}, -5\\vec{v}) = (\\vec{u}, \\vec{v})$",
            "$(7\\vec{u}, \\vec{v}) = (\\vec{u}, 7\\vec{v})$",
            "$(-\\vec{u}, \\vec{v}) = (\\vec{u}, \\vec{v}) + \\hat{\\pi}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le facteur $4$ est positif : l’angle est inchangé, sans ajout de l’angle plat (égalité 5 fausse du corrigé)."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04",
      "order": 4,
      "title": "Angles orientés et cercle",
      "summary": "Relier angle inscrit et angle au centre, caractériser un cercle et reconnaître quatre points cocycliques.",
      "conceptExplanation": "Angle inscrit : soit un cercle de centre $O$, $A$ et $B$ deux points distincts de ce cercle et $M$ un point du cercle distinct de $A$ et $B$. L’angle de $\\overrightarrow{MA}$ vers $\\overrightarrow{MB}$ vaut la moitié de l’angle de $\\overrightarrow{OA}$ vers $\\overrightarrow{OB}$, ou cette moitié plus l’angle plat, selon la position de $M$ sur le cercle.\nCaractérisation d’un cercle : pour tout point $M$ du plan distinct de $A$ et $B$, $M$ appartient au cercle si et seulement si $2(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})$ ; dans l’exercice de fixation sur les figures, c’est la figure b) qui vérifie cette égalité.\nPoints cocycliques : $A$, $B$, $C$ et $D$ distincts, trois quelconques non alignés, sont cocycliques si et seulement si $2(\\overrightarrow{CA}, \\overrightarrow{CB}) = 2(\\overrightarrow{DA}, \\overrightarrow{DB})$.",
      "keyRule": "Angle inscrit égale moitié de l’angle au centre ; le double de l’angle inscrit sert à tester l’appartenance au cercle et la cocyclicité.",
      "formulas": [
        {
          "name": "Angle inscrit",
          "formula": "(\\overrightarrow{MA}, \\overrightarrow{MB}) = \\frac{1}{2}(\\overrightarrow{OA}, \\overrightarrow{OB}) + \\hat{\\pi}"
        },
        {
          "name": "Caractérisation du cercle",
          "formula": "2(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})"
        }
      ],
      "workedExample": {
        "title": "De l’angle au centre à l’angle inscrit (exercice de fixation)",
        "statement": "On donne une mesure de l’angle au centre $(\\overrightarrow{OA}, \\overrightarrow{OB})$ égale à $\\frac{2\\pi}{3}$. Calcule une mesure puis la mesure principale de l’angle inscrit $(\\overrightarrow{MA}, \\overrightarrow{MB})$.",
        "methodSteps": [
          "On applique la forme avec l’angle plat : la mesure est la moitié de $\\frac{2\\pi}{3}$ plus $\\pi$, soit $\\frac{4\\pi}{3}$.",
          "On passe à la mesure principale en retranchant $2\\pi$ : $\\frac{4\\pi}{3} - 2\\pi = -\\frac{2\\pi}{3}$."
        ],
        "conclusion": "La mesure principale de l’angle inscrit est $-\\frac{2\\pi}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L’angle inscrit et l’angle au centre",
          "stepTheme": "L’angle inscrit et l’angle au centre",
          "stepBadge": "L’angle inscrit et l’angle au centre",
          "paragraphText": "• Propriété : soit un cercle de centre $O$, $A$ et $B$ deux points distincts de ce cercle et $M$ un point du cercle distinct de $A$ et $B$.\nL’angle inscrit de $\\overrightarrow{MA}$ vers $\\overrightarrow{MB}$ vaut la moitié de l’angle au centre de $\\overrightarrow{OA}$ vers $\\overrightarrow{OB}$, à l’angle plat près selon la position de $M$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04_q1",
            "type": "mcq",
            "prompt": "L’angle inscrit $(\\overrightarrow{MA}, \\overrightarrow{MB})$ s’exprime à partir de l’angle au centre $(\\overrightarrow{OA}, \\overrightarrow{OB})$ comme :",
            "options": [
              "Son double",
              "Son égal dans tous les cas",
              "Sa moitié, à l’angle plat près selon la position de $M$",
              "Toujours l’angle plat"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la propriété des angles inscrits : le facteur est un demi."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Calculer un angle inscrit",
          "stepTheme": "Calculer un angle inscrit",
          "stepBadge": "Calculer un angle inscrit",
          "paragraphText": "• Exercice de fixation : on donne une mesure de l’angle au centre égale à $\\frac{2\\pi}{3}$.\nOn applique la forme avec l’angle plat ajouté : la mesure obtenue pour l’angle inscrit est la moitié de $\\frac{2\\pi}{3}$ plus $\\pi$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04_q2",
            "type": "mcq",
            "prompt": "Avec cette formule, quelle mesure obtient-on pour l’angle inscrit ?",
            "options": [
              "$\\frac{\\pi}{3}$",
              "$\\frac{4\\pi}{3}$",
              "$\\frac{2\\pi}{3}$",
              "$-\\frac{2\\pi}{3}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $\\frac{1}{2} \\times \\frac{2\\pi}{3} + \\pi = \\frac{4\\pi}{3}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Passer à la mesure principale",
          "stepTheme": "Passer à la mesure principale",
          "stepBadge": "Passer à la mesure principale",
          "paragraphText": "• Méthode : la mesure $\\frac{4\\pi}{3}$ dépasse $\\pi$, donc ce n’est pas la mesure principale.\nOn retranche $2\\pi$ pour revenir dans l’intervalle $]-\\pi ; \\pi]$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04_q3",
            "type": "mcq",
            "prompt": "Quelle est la mesure principale de cet angle inscrit ?",
            "options": [
              "$\\frac{4\\pi}{3}$",
              "$-\\frac{\\pi}{3}$",
              "$\\frac{2\\pi}{3}$",
              "$-\\frac{2\\pi}{3}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $\\frac{4\\pi}{3} - 2\\pi = -\\frac{2\\pi}{3}$, qui est la réponse du corrigé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Retrouver l’angle au centre",
          "stepTheme": "Retrouver l’angle au centre",
          "stepBadge": "Retrouver l’angle au centre",
          "paragraphText": "• Exercice de fixation : on donne cette fois une mesure de l’angle inscrit égale à $\\frac{\\pi}{4}$, avec la forme sans angle plat ajouté.\nL’angle inscrit étant la moitié de l’angle au centre, on double la mesure pour retrouver l’angle au centre.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04_q4",
            "type": "mcq",
            "prompt": "Quelle est alors la mesure de l’angle au centre $(\\overrightarrow{OA}, \\overrightarrow{OB})$ ?",
            "options": [
              "$\\frac{\\pi}{8}$",
              "$\\frac{\\pi}{4}$",
              "$\\frac{\\pi}{2}$",
              "$\\pi$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $2 \\times \\frac{\\pi}{4} = \\frac{\\pi}{2}$ : c’est la réponse du corrigé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Caractérisation d’un cercle",
          "stepTheme": "Caractérisation d’un cercle",
          "stepBadge": "Caractérisation d’un cercle",
          "paragraphText": "• Propriété : soit un cercle de centre $O$ et $A$, $B$ deux points distincts de ce cercle.\nPour tout point $M$ du plan distinct de $A$ et $B$, $M$ appartient au cercle si et seulement si le double de l’angle inscrit de $M$ égale l’angle au centre.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04_q5",
            "type": "mcq",
            "prompt": "$M$ appartient au cercle si et seulement si :",
            "options": [
              "$2(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})$",
              "$(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})$",
              "$(\\overrightarrow{MA}, \\overrightarrow{MB})$ est l’angle nul",
              "$M$ est le centre $O$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la caractérisation donnée dans la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Points cocycliques",
          "stepTheme": "Points cocycliques",
          "stepBadge": "Points cocycliques",
          "paragraphText": "• Propriété : quatre points distincts $A$, $B$, $C$ et $D$, dont trois quelconques ne sont pas alignés, sont cocycliques si et seulement si les doubles des angles de $C$ et de $D$ vers $A$ et $B$ sont égaux.\nExercice de fixation : pour un triangle $ABC$ rectangle en $C$ et $D$ symétrique de $C$ par rapport à $(AB)$, ces deux doubles valent l’angle plat, donc les points sont cocycliques.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04_q6",
            "type": "mcq",
            "prompt": "La condition de cocyclicité de $A$, $B$, $C$ et $D$ est :",
            "options": [
              "Les quatre points sont alignés",
              "$(\\overrightarrow{CA}, \\overrightarrow{CB})$ est l’angle nul",
              "$C$ et $D$ sont confondus",
              "$2(\\overrightarrow{CA}, \\overrightarrow{CB}) = 2(\\overrightarrow{DA}, \\overrightarrow{DB})$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la propriété des points cocycliques énoncée dans la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04_q1",
          "type": "mcq",
          "prompt": "L’angle inscrit $(\\overrightarrow{MA}, \\overrightarrow{MB})$ s’exprime à partir de l’angle au centre $(\\overrightarrow{OA}, \\overrightarrow{OB})$ comme :",
          "options": [
            "Son double",
            "Son égal dans tous les cas",
            "Sa moitié, à l’angle plat près selon la position de $M$",
            "Toujours l’angle plat"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la propriété des angles inscrits : le facteur est un demi."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04_q2",
          "type": "mcq",
          "prompt": "Avec cette formule, quelle mesure obtient-on pour l’angle inscrit ?",
          "options": [
            "$\\frac{\\pi}{3}$",
            "$\\frac{4\\pi}{3}$",
            "$\\frac{2\\pi}{3}$",
            "$-\\frac{2\\pi}{3}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $\\frac{1}{2} \\times \\frac{2\\pi}{3} + \\pi = \\frac{4\\pi}{3}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04_q3",
          "type": "mcq",
          "prompt": "Quelle est la mesure principale de cet angle inscrit ?",
          "options": [
            "$\\frac{4\\pi}{3}$",
            "$-\\frac{\\pi}{3}$",
            "$\\frac{2\\pi}{3}$",
            "$-\\frac{2\\pi}{3}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $\\frac{4\\pi}{3} - 2\\pi = -\\frac{2\\pi}{3}$, qui est la réponse du corrigé."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04_q4",
          "type": "mcq",
          "prompt": "Quelle est alors la mesure de l’angle au centre $(\\overrightarrow{OA}, \\overrightarrow{OB})$ ?",
          "options": [
            "$\\frac{\\pi}{8}$",
            "$\\frac{\\pi}{4}$",
            "$\\frac{\\pi}{2}$",
            "$\\pi$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $2 \\times \\frac{\\pi}{4} = \\frac{\\pi}{2}$ : c’est la réponse du corrigé."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04_q5",
          "type": "mcq",
          "prompt": "$M$ appartient au cercle si et seulement si :",
          "options": [
            "$2(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})$",
            "$(\\overrightarrow{MA}, \\overrightarrow{MB}) = (\\overrightarrow{OA}, \\overrightarrow{OB})$",
            "$(\\overrightarrow{MA}, \\overrightarrow{MB})$ est l’angle nul",
            "$M$ est le centre $O$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la caractérisation donnée dans la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p04_q6",
          "type": "mcq",
          "prompt": "La condition de cocyclicité de $A$, $B$, $C$ et $D$ est :",
          "options": [
            "Les quatre points sont alignés",
            "$(\\overrightarrow{CA}, \\overrightarrow{CB})$ est l’angle nul",
            "$C$ et $D$ sont confondus",
            "$2(\\overrightarrow{CA}, \\overrightarrow{CB}) = 2(\\overrightarrow{DA}, \\overrightarrow{DB})$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la propriété des points cocycliques énoncée dans la leçon."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05",
      "order": 5,
      "title": "Lignes trigonométriques et fonctions circulaires",
      "summary": "Définir cosinus, sinus et tangente par le point image, connaître le tableau des angles remarquables et les fonctions circulaires.",
      "conceptExplanation": "Cosinus et sinus : soit un angle orienté de mesure $\\alpha$ et $M$ l’image de $\\alpha$ sur le cercle trigonométrique. Le cosinus de $\\alpha$ est l’abscisse de $M$ et le sinus de $\\alpha$ est l’ordonnée de $M$. Exemples : $\\cos\\frac{\\pi}{2} = 0$ et $\\sin\\frac{\\pi}{2} = 1$.\nTangente : pour $\\alpha$ différent de $\\frac{\\pi}{2} + k\\pi$, la tangente de $\\alpha$ est le quotient $\\frac{\\sin\\alpha}{\\cos\\alpha}$ ; par exemple $\\tan\\pi = 0$. Le cosinus, le sinus et la tangente sont les lignes trigonométriques de l’angle.\nTableau des angles remarquables : en $0$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$, $\\frac{\\pi}{2}$ et $\\pi$, le cosinus vaut successivement $1$, $\\frac{\\sqrt{3}}{2}$, $\\frac{\\sqrt{2}}{2}$, $\\frac{1}{2}$, $0$ et $-1$ ; le sinus vaut $0$, $\\frac{1}{2}$, $\\frac{\\sqrt{2}}{2}$, $\\frac{\\sqrt{3}}{2}$, $1$ et $0$ ; la tangente vaut $0$, $\\frac{\\sqrt{3}}{3}$, $1$, $\\sqrt{3}$, n’est pas définie en $\\frac{\\pi}{2}$, et vaut $0$ en $\\pi$.\nFonctions circulaires : les fonctions sinus et cosinus sont définies sur $\\mathbb{R}$ ; la fonction tangente est définie sur $\\mathbb{R}$ privé des réels $\\frac{\\pi}{2} + k\\pi$ et elle est continue en tout élément de son ensemble de définition.",
      "keyRule": "Cosinus égale abscisse, sinus égale ordonnée, tangente égale sinus sur cosinus ; le tableau des angles remarquables se retient par les trois valeurs $\\frac{1}{2}$, $\\frac{\\sqrt{2}}{2}$ et $\\frac{\\sqrt{3}}{2}$.",
      "formulas": [
        {
          "name": "Tangente",
          "formula": "\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}"
        },
        {
          "name": "Valeur remarquable",
          "formula": "\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}"
        }
      ],
      "workedExample": {
        "title": "La tangente de $\\frac{\\pi}{6}$ (exercice des exercices de fixation)",
        "statement": "Calcule la tangente de l’angle de mesure $\\frac{\\pi}{6}$, sachant que son sinus vaut $\\frac{1}{2}$ et son cosinus $\\frac{\\sqrt{3}}{2}$.",
        "methodSteps": [
          "On applique la définition : la tangente est le quotient du sinus par le cosinus.",
          "On obtient le quotient de $\\frac{1}{2}$ par $\\frac{\\sqrt{3}}{2}$, soit $\\frac{1}{\\sqrt{3}}$."
        ],
        "conclusion": "La tangente de $\\frac{\\pi}{6}$ vaut $\\frac{\\sqrt{3}}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Cosinus et sinus : abscisse et ordonnée",
          "stepTheme": "Cosinus et sinus : abscisse et ordonnée",
          "stepBadge": "Cosinus et sinus : abscisse et ordonnée",
          "paragraphText": "• Définitions : soit un angle orienté de mesure $\\alpha$ et $M$ l’image de $\\alpha$ sur le cercle trigonométrique.\nLe cosinus de $\\alpha$ est l’abscisse de $M$ et le sinus de $\\alpha$ est l’ordonnée de $M$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q1",
            "type": "mcq",
            "prompt": "Le cosinus d’un angle de mesure $\\alpha$ est :",
            "options": [
              "L’ordonnée de son point image $M$",
              "L’abscisse de son point image $M$",
              "Le rayon du cercle",
              "Sa tangente"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, le cosinus est l’abscisse du point image sur le cercle trigonométrique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les valeurs en $\\frac{\\pi}{2}$",
          "stepTheme": "Les valeurs en $\\frac{\\pi}{2}$",
          "stepBadge": "Les valeurs en $\\frac{\\pi}{2}$",
          "paragraphText": "• Exemple de la leçon : le point image de $\\frac{\\pi}{2}$ est le point $J$ du cercle.\nSon abscisse est $0$ et son ordonnée est $1$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\sin\\frac{\\pi}{2}$ ?",
            "options": [
              "$0$",
              "$1$",
              "$-1$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sinus est l’ordonnée du point image de $\\frac{\\pi}{2}$, qui vaut $1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La tangente d’un angle orienté",
          "stepTheme": "La tangente d’un angle orienté",
          "stepBadge": "La tangente d’un angle orienté",
          "paragraphText": "• Définition : pour un angle non droit de mesure $\\alpha$, la tangente est le quotient du sinus par le cosinus.\nExemple de la leçon : la tangente de $\\pi$ vaut le quotient de $0$ par $-1$, soit $0$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\tan\\pi$ ?",
            "options": [
              "$1$",
              "$-1$",
              "Elle n’est pas définie",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule le quotient de $\\sin\\pi = 0$ par $\\cos\\pi = -1$, ce qui donne $0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le tableau des angles remarquables : $\\frac{\\pi}{6}$ et $\\frac{\\pi}{3}$",
          "stepTheme": "Le tableau des angles remarquables : $\\frac{\\pi}{6}$ et $\\frac{\\pi}{3}$",
          "stepBadge": "Le tableau des angles remarquables : $\\frac{\\pi}{6}$ et $\\frac{\\pi}{3}$",
          "paragraphText": "• Tableau de la leçon : en $\\frac{\\pi}{6}$, le cosinus vaut $\\frac{\\sqrt{3}}{2}$ et le sinus vaut $\\frac{1}{2}$.\nEn $\\frac{\\pi}{3}$, c’est l’inverse : le cosinus vaut $\\frac{1}{2}$ et le sinus vaut $\\frac{\\sqrt{3}}{2}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\cos\\frac{\\pi}{3}$ ?",
            "options": [
              "$\\frac{1}{2}$",
              "$\\frac{\\sqrt{3}}{2}$",
              "$\\frac{\\sqrt{2}}{2}$",
              "$0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est une valeur du tableau des angles remarquables."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le tableau des angles remarquables : $\\frac{\\pi}{4}$",
          "stepTheme": "Le tableau des angles remarquables : $\\frac{\\pi}{4}$",
          "stepBadge": "Le tableau des angles remarquables : $\\frac{\\pi}{4}$",
          "paragraphText": "• Tableau de la leçon : en $\\frac{\\pi}{4}$, le cosinus et le sinus valent tous les deux $\\frac{\\sqrt{2}}{2}$.\nLa tangente en $\\frac{\\pi}{4}$ vaut donc $1$, et la tangente en $\\frac{\\pi}{3}$ vaut $\\sqrt{3}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\tan\\frac{\\pi}{4}$ ?",
            "options": [
              "$\\sqrt{3}$",
              "$\\frac{\\sqrt{3}}{3}$",
              "$1$",
              "$0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sinus et le cosinus sont égaux en $\\frac{\\pi}{4}$ : leur quotient vaut $1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La tangente n’est pas toujours définie",
          "stepTheme": "La tangente n’est pas toujours définie",
          "stepBadge": "La tangente n’est pas toujours définie",
          "paragraphText": "• Remarque de la leçon : la tangente n’est pas définie pour les réels de la forme $\\frac{\\pi}{2} + k\\pi$ avec $k \\in \\mathbb{Z}$.\nEn ces points, le cosinus s’annule et le quotient n’existe pas.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q6",
            "type": "mcq",
            "prompt": "La tangente n’est pas définie pour :",
            "options": [
              "$\\alpha = 0$",
              "$\\alpha = \\pi$",
              "$\\alpha = \\frac{\\pi}{4}$",
              "$\\alpha = \\frac{\\pi}{2} + k\\pi$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En $\\frac{\\pi}{2} + k\\pi$, le cosinus est nul : le quotient du sinus par le cosinus n’existe pas."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "Les fonctions circulaires",
          "stepTheme": "Les fonctions circulaires",
          "stepBadge": "Les fonctions circulaires",
          "paragraphText": "• Définitions : la fonction sinus et la fonction cosinus vont de $\\mathbb{R}$ dans $\\mathbb{R}$ ; la fonction tangente est définie sur $\\mathbb{R}$ privé des réels $\\frac{\\pi}{2} + k\\pi$.\nOn construit les courbes du sinus et du cosinus sur $]-\\pi ; \\pi]$ puis on complète par des translations de vecteur $2\\pi$ fois le vecteur unitaire horizontal ; pour la tangente, on construit sur un intervalle de longueur $\\pi$ puis on complète par des translations de vecteur $\\pi$ fois ce même vecteur.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q7",
            "type": "mcq",
            "prompt": "L’ensemble de définition de la fonction tangente est :",
            "options": [
              "$\\mathbb{R}$ tout entier",
              "$\\mathbb{R}$ privé des réels $\\frac{\\pi}{2} + k\\pi$",
              "$[0 ; 2\\pi]$",
              "$\\mathbb{R}$ privé de $0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée dans la leçon pour la fonction tangente."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q1",
          "type": "mcq",
          "prompt": "Le cosinus d’un angle de mesure $\\alpha$ est :",
          "options": [
            "L’ordonnée de son point image $M$",
            "L’abscisse de son point image $M$",
            "Le rayon du cercle",
            "Sa tangente"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, le cosinus est l’abscisse du point image sur le cercle trigonométrique."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\sin\\frac{\\pi}{2}$ ?",
          "options": [
            "$0$",
            "$1$",
            "$-1$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sinus est l’ordonnée du point image de $\\frac{\\pi}{2}$, qui vaut $1$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\tan\\pi$ ?",
          "options": [
            "$1$",
            "$-1$",
            "Elle n’est pas définie",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule le quotient de $\\sin\\pi = 0$ par $\\cos\\pi = -1$, ce qui donne $0$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\cos\\frac{\\pi}{3}$ ?",
          "options": [
            "$\\frac{1}{2}$",
            "$\\frac{\\sqrt{3}}{2}$",
            "$\\frac{\\sqrt{2}}{2}$",
            "$0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est une valeur du tableau des angles remarquables."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\tan\\frac{\\pi}{4}$ ?",
          "options": [
            "$\\sqrt{3}$",
            "$\\frac{\\sqrt{3}}{3}$",
            "$1$",
            "$0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sinus et le cosinus sont égaux en $\\frac{\\pi}{4}$ : leur quotient vaut $1$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q6",
          "type": "mcq",
          "prompt": "La tangente n’est pas définie pour :",
          "options": [
            "$\\alpha = 0$",
            "$\\alpha = \\pi$",
            "$\\alpha = \\frac{\\pi}{4}$",
            "$\\alpha = \\frac{\\pi}{2} + k\\pi$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "En $\\frac{\\pi}{2} + k\\pi$, le cosinus est nul : le quotient du sinus par le cosinus n’existe pas."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p05_q7",
          "type": "mcq",
          "prompt": "L’ensemble de définition de la fonction tangente est :",
          "options": [
            "$\\mathbb{R}$ tout entier",
            "$\\mathbb{R}$ privé des réels $\\frac{\\pi}{2} + k\\pi$",
            "$[0 ; 2\\pi]$",
            "$\\mathbb{R}$ privé de $0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée dans la leçon pour la fonction tangente."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06",
      "order": 6,
      "title": "Lignes trigonométriques d’angles associés",
      "summary": "Calculer les cosinus et sinus des angles associés $-\\alpha$, $\\pi - \\alpha$, $\\pi + \\alpha$, $\\frac{\\pi}{2} - \\alpha$ et $\\frac{\\pi}{2} + \\alpha$.",
      "conceptExplanation": "Les angles de mesures $-\\alpha$, $\\pi - \\alpha$, $\\pi + \\alpha$, $\\frac{\\pi}{2} - \\alpha$ et $\\frac{\\pi}{2} + \\alpha$ sont dits associés à l’angle de mesure $\\alpha$.\nPropriétés : $\\cos(-\\alpha) = \\cos\\alpha$ et $\\sin(-\\alpha) = -\\sin\\alpha$ ; $\\cos(\\pi - \\alpha) = -\\cos\\alpha$ et $\\sin(\\pi - \\alpha) = \\sin\\alpha$ ; $\\cos(\\pi + \\alpha) = -\\cos\\alpha$ et $\\sin(\\pi + \\alpha) = -\\sin\\alpha$ ; $\\cos(\\frac{\\pi}{2} - \\alpha) = \\sin\\alpha$ et $\\sin(\\frac{\\pi}{2} - \\alpha) = \\cos\\alpha$ ; $\\cos(\\frac{\\pi}{2} + \\alpha) = -\\sin\\alpha$ et $\\sin(\\frac{\\pi}{2} + \\alpha) = \\cos\\alpha$.\nExemples de l’exercice de fixation : $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$ et $\\sin\\frac{5\\pi}{6} = \\frac{1}{2}$ ; $\\cos(-\\frac{\\pi}{3}) = \\frac{1}{2}$ et $\\sin(-\\frac{\\pi}{3}) = -\\frac{\\sqrt{3}}{2}$ ; $\\cos\\frac{4\\pi}{3} = -\\frac{1}{2}$ et $\\sin\\frac{4\\pi}{3} = -\\frac{\\sqrt{3}}{2}$ ; $\\cos\\frac{3\\pi}{4} = -\\frac{\\sqrt{2}}{2}$ et $\\sin\\frac{3\\pi}{4} = \\frac{\\sqrt{2}}{2}$.",
      "keyRule": "Ramène toujours l’angle à un angle remarquable associé, puis applique le signe donné par la formule.",
      "formulas": [
        {
          "name": "Angle opposé",
          "formula": "\\cos(-\\alpha) = \\cos\\alpha"
        },
        {
          "name": "Angle supplémentaire",
          "formula": "\\cos(\\pi - \\alpha) = -\\cos\\alpha"
        },
        {
          "name": "Quart de tour complémentaire",
          "formula": "\\cos(\\frac{\\pi}{2} - \\alpha) = \\sin\\alpha"
        }
      ],
      "workedExample": {
        "title": "Les lignes de $\\frac{5\\pi}{6}$ (exercice de fixation)",
        "statement": "Détermine le cosinus et le sinus de $\\frac{5\\pi}{6}$.",
        "methodSteps": [
          "On écrit $\\frac{5\\pi}{6} = \\pi - \\frac{\\pi}{6}$.",
          "Le cosinus change de signe : $\\cos\\frac{5\\pi}{6} = -\\cos\\frac{\\pi}{6} = -\\frac{\\sqrt{3}}{2}$.",
          "Le sinus est inchangé : $\\sin\\frac{5\\pi}{6} = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$."
        ],
        "conclusion": "Le cosinus de $\\frac{5\\pi}{6}$ vaut $-\\frac{\\sqrt{3}}{2}$ et son sinus vaut $\\frac{1}{2}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les lignes de l’angle opposé",
          "stepTheme": "Les lignes de l’angle opposé",
          "stepBadge": "Les lignes de l’angle opposé",
          "paragraphText": "• Propriété : pour tout réel $\\alpha$, le cosinus de $-\\alpha$ égale le cosinus de $\\alpha$ et le sinus de $-\\alpha$ égale l’opposé du sinus de $\\alpha$.\nL’angle opposé garde la même abscisse et change le signe de l’ordonnée.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\cos(-\\frac{\\pi}{3})$ ?",
            "options": [
              "$-\\frac{1}{2}$",
              "$\\frac{\\sqrt{3}}{2}$",
              "$\\frac{1}{2}$",
              "$-\\frac{\\sqrt{3}}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le cosinus de l’opposé égale le cosinus : on retrouve $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$, comme dans la solution de l’exercice."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le sinus de l’angle opposé",
          "stepTheme": "Le sinus de l’angle opposé",
          "stepBadge": "Le sinus de l’angle opposé",
          "paragraphText": "• Exercice de fixation : pour $\\alpha = -\\frac{\\pi}{3}$, on écrit $-\\frac{\\pi}{3}$ comme l’opposé de $\\frac{\\pi}{3}$.\nLe sinus change donc de signe par rapport à celui de $\\frac{\\pi}{3}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\sin(-\\frac{\\pi}{3})$ ?",
            "options": [
              "$-\\frac{\\sqrt{3}}{2}$",
              "$\\frac{1}{2}$",
              "$\\frac{\\sqrt{3}}{2}$",
              "$-\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le sinus de l’opposé est l’opposé du sinus : $-\\sin\\frac{\\pi}{3} = -\\frac{\\sqrt{3}}{2}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les lignes de l’angle supplémentaire",
          "stepTheme": "Les lignes de l’angle supplémentaire",
          "stepBadge": "Les lignes de l’angle supplémentaire",
          "paragraphText": "• Propriété : le cosinus de $\\pi - \\alpha$ est l’opposé du cosinus de $\\alpha$, et le sinus de $\\pi - \\alpha$ égale le sinus de $\\alpha$.\nApplication de l’exercice : $\\frac{5\\pi}{6}$ s’écrit $\\pi - \\frac{\\pi}{6}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\sin\\frac{5\\pi}{6}$ ?",
            "options": [
              "$\\frac{1}{2}$",
              "$\\frac{\\sqrt{3}}{2}$",
              "$-\\frac{\\sqrt{3}}{2}$",
              "$-\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On utilise le supplémentaire : $\\sin(\\pi - \\frac{\\pi}{6}) = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les lignes de $\\pi + \\alpha$",
          "stepTheme": "Les lignes de $\\pi + \\alpha$",
          "stepBadge": "Les lignes de $\\pi + \\alpha$",
          "paragraphText": "• Propriété : le cosinus de $\\pi + \\alpha$ et le sinus de $\\pi + \\alpha$ sont les opposés du cosinus et du sinus de $\\alpha$.\nApplication de l’exercice : $\\frac{4\\pi}{3}$ s’écrit $\\pi + \\frac{\\pi}{3}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\cos\\frac{4\\pi}{3}$ ?",
            "options": [
              "$\\frac{1}{2}$",
              "$-\\frac{\\sqrt{3}}{2}$",
              "$-\\frac{1}{2}$",
              "$\\frac{\\sqrt{3}}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On utilise $\\cos(\\pi + \\frac{\\pi}{3}) = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}$, comme dans la solution."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les lignes de $\\frac{\\pi}{2} + \\alpha$",
          "stepTheme": "Les lignes de $\\frac{\\pi}{2} + \\alpha$",
          "stepBadge": "Les lignes de $\\frac{\\pi}{2} + \\alpha$",
          "paragraphText": "• Propriété : le cosinus de $\\frac{\\pi}{2} + \\alpha$ égale l’opposé du sinus de $\\alpha$, et le sinus de $\\frac{\\pi}{2} + \\alpha$ égale le cosinus de $\\alpha$.\nApplication de l’exercice : $\\frac{3\\pi}{4}$ s’écrit $\\frac{\\pi}{2} + \\frac{\\pi}{4}$ ; de même, le cosinus de $\\frac{\\pi}{2} - \\alpha$ égale le sinus de $\\alpha$ et le sinus de $\\frac{\\pi}{2} - \\alpha$ égale le cosinus de $\\alpha$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\sin\\frac{3\\pi}{4}$ ?",
            "options": [
              "$-\\frac{\\sqrt{2}}{2}$",
              "$\\frac{\\sqrt{2}}{2}$",
              "$\\frac{1}{2}$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On utilise $\\sin(\\frac{\\pi}{2} + \\frac{\\pi}{4}) = \\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$, comme dans la solution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les tangentes des angles associés",
          "stepTheme": "Les tangentes des angles associés",
          "stepBadge": "Les tangentes des angles associés",
          "paragraphText": "• Remarque de la leçon : les tangentes des angles associés se déduisent des formules du cosinus et du sinus.\nAinsi la tangente de $\\pi - \\alpha$ et celle de $-\\alpha$ sont les opposées de la tangente de $\\alpha$, tandis que la tangente de $\\pi + \\alpha$ égale la tangente de $\\alpha$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06_q6",
            "type": "mcq",
            "prompt": "La tangente de $\\pi + \\alpha$ est égale à :",
            "options": [
              "L’opposée de la tangente de $\\alpha$",
              "$0$ dans tous les cas",
              "L’inverse de la tangente de $\\alpha$",
              "La tangente de $\\alpha$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le numérateur et le dénominateur changent tous les deux de signe : le quotient est inchangé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\cos(-\\frac{\\pi}{3})$ ?",
          "options": [
            "$-\\frac{1}{2}$",
            "$\\frac{\\sqrt{3}}{2}$",
            "$\\frac{1}{2}$",
            "$-\\frac{\\sqrt{3}}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le cosinus de l’opposé égale le cosinus : on retrouve $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$, comme dans la solution de l’exercice."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\sin(-\\frac{\\pi}{3})$ ?",
          "options": [
            "$-\\frac{\\sqrt{3}}{2}$",
            "$\\frac{1}{2}$",
            "$\\frac{\\sqrt{3}}{2}$",
            "$-\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le sinus de l’opposé est l’opposé du sinus : $-\\sin\\frac{\\pi}{3} = -\\frac{\\sqrt{3}}{2}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\sin\\frac{5\\pi}{6}$ ?",
          "options": [
            "$\\frac{1}{2}$",
            "$\\frac{\\sqrt{3}}{2}$",
            "$-\\frac{\\sqrt{3}}{2}$",
            "$-\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On utilise le supplémentaire : $\\sin(\\pi - \\frac{\\pi}{6}) = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\cos\\frac{4\\pi}{3}$ ?",
          "options": [
            "$\\frac{1}{2}$",
            "$-\\frac{\\sqrt{3}}{2}$",
            "$-\\frac{1}{2}$",
            "$\\frac{\\sqrt{3}}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On utilise $\\cos(\\pi + \\frac{\\pi}{3}) = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}$, comme dans la solution."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\sin\\frac{3\\pi}{4}$ ?",
          "options": [
            "$-\\frac{\\sqrt{2}}{2}$",
            "$\\frac{\\sqrt{2}}{2}$",
            "$\\frac{1}{2}$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On utilise $\\sin(\\frac{\\pi}{2} + \\frac{\\pi}{4}) = \\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$, comme dans la solution."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p06_q6",
          "type": "mcq",
          "prompt": "La tangente de $\\pi + \\alpha$ est égale à :",
          "options": [
            "L’opposée de la tangente de $\\alpha$",
            "$0$ dans tous les cas",
            "L’inverse de la tangente de $\\alpha$",
            "La tangente de $\\alpha$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le numérateur et le dénominateur changent tous les deux de signe : le quotient est inchangé."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07",
      "order": 7,
      "title": "Formules d’addition, de duplication et de linéarisation",
      "summary": "Utiliser les formules d’addition pour calculer des lignes exactes, et les formules de duplication et de linéarisation.",
      "conceptExplanation": "Formules d’addition : pour tous réels $a$ et $b$, $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$ ; $\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$ ; $\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$ ; $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$.\nFormules de duplication : $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$ et $\\sin 2a = 2\\sin a \\cos a$.\nFormules de linéarisation : $\\cos^2 a = \\frac{1 + \\cos 2a}{2}$ et $\\sin^2 a = \\frac{1 - \\cos 2a}{2}$.",
      "keyRule": "Addition : le cosinus mélange avec un moins, le sinus mélange avec un plus ; duplication et linéarisation font le lien entre $a$ et $2a$.",
      "formulas": [
        {
          "name": "Addition du cosinus",
          "formula": "\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b"
        },
        {
          "name": "Duplication du sinus",
          "formula": "\\sin 2a = 2 \\sin a \\cos a"
        },
        {
          "name": "Linéarisation du cosinus",
          "formula": "\\cos^2 a = \\frac{1 + \\cos 2a}{2}"
        }
      ],
      "workedExample": {
        "title": "Les lignes de $\\frac{7\\pi}{12}$ (exercice de fixation)",
        "statement": "En remarquant que $\\frac{7\\pi}{12} = \\frac{\\pi}{4} + \\frac{\\pi}{3}$, détermine le cosinus et le sinus de $\\frac{7\\pi}{12}$.",
        "methodSteps": [
          "Cosinus : on applique la formule d’addition avec les valeurs en $\\frac{\\pi}{4}$ et en $\\frac{\\pi}{3}$, ce qui donne $\\frac{\\sqrt{2} - \\sqrt{6}}{4}$.",
          "Sinus : on applique la formule d’addition du sinus, ce qui donne $\\frac{\\sqrt{2} + \\sqrt{6}}{4}$."
        ],
        "conclusion": "Le cosinus de $\\frac{7\\pi}{12}$ vaut $\\frac{\\sqrt{2} - \\sqrt{6}}{4}$ et son sinus vaut $\\frac{\\sqrt{2} + \\sqrt{6}}{4}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La formule d’addition du cosinus",
          "stepTheme": "La formule d’addition du cosinus",
          "stepBadge": "La formule d’addition du cosinus",
          "paragraphText": "• Propriété : pour tous réels $a$ et $b$, le cosinus de la somme $a + b$ se développe avec les cosinus et les sinus de $a$ et de $b$.\nLe signe entre les deux produits est un signe moins.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07_q1",
            "type": "mcq",
            "prompt": "$\\cos(a + b)$ est égal à :",
            "options": [
              "$\\cos a \\cos b + \\sin a \\sin b$",
              "$\\sin a \\cos b + \\cos a \\sin b$",
              "$\\cos a \\cos b - \\sin a \\sin b$",
              "$\\cos a + \\cos b$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la première formule d’addition de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les formules du sinus et des différences",
          "stepTheme": "Les formules du sinus et des différences",
          "stepBadge": "Les formules du sinus et des différences",
          "paragraphText": "• Propriétés : le sinus d’une somme mélange sinus et cosinus avec un signe plus.\nPour les différences, on remplace $b$ par son opposé : le cosinus d’une différence a un signe plus entre les produits, le sinus d’une différence a un signe moins.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07_q2",
            "type": "mcq",
            "prompt": "$\\sin(a - b)$ est égal à :",
            "options": [
              "$\\sin a \\cos b - \\cos a \\sin b$",
              "$\\cos a \\cos b + \\sin a \\sin b$",
              "$\\sin a \\cos b + \\cos a \\sin b$",
              "$\\sin a - \\sin b$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la quatrième formule listée dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le cosinus de $\\frac{7\\pi}{12}$",
          "stepTheme": "Le cosinus de $\\frac{7\\pi}{12}$",
          "stepBadge": "Le cosinus de $\\frac{7\\pi}{12}$",
          "paragraphText": "• Exercice de fixation : on remarque que $\\frac{7\\pi}{12} = \\frac{\\pi}{4} + \\frac{\\pi}{3}$.\nOn applique la formule d’addition du cosinus avec les valeurs remarquables en $\\frac{\\pi}{4}$ et en $\\frac{\\pi}{3}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\cos\\frac{7\\pi}{12}$ ?",
            "options": [
              "$\\frac{\\sqrt{2} + \\sqrt{6}}{4}$",
              "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$",
              "$-\\frac{\\sqrt{2} + \\sqrt{6}}{4}$",
              "$\\frac{\\sqrt{2} - \\sqrt{6}}{4}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le produit donne la différence de $\\sqrt{2}$ et de $\\sqrt{6}$ sur $4$ : c’est la solution de l’exercice."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le sinus de $\\frac{7\\pi}{12}$",
          "stepTheme": "Le sinus de $\\frac{7\\pi}{12}$",
          "stepBadge": "Le sinus de $\\frac{7\\pi}{12}$",
          "paragraphText": "• Exercice de fixation : avec la même décomposition, on applique la formule d’addition du sinus.\nLes deux produits s’ajoutent cette fois.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\sin\\frac{7\\pi}{12}$ ?",
            "options": [
              "$\\frac{\\sqrt{2} - \\sqrt{6}}{4}$",
              "$\\frac{\\sqrt{2} + \\sqrt{6}}{4}$",
              "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$",
              "$\\frac{1}{4}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le produit donne la somme de $\\sqrt{2}$ et de $\\sqrt{6}$ sur $4$ : c’est la solution de l’exercice."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les formules de duplication",
          "stepTheme": "Les formules de duplication",
          "stepBadge": "Les formules de duplication",
          "paragraphText": "• Propriétés : le cosinus du double s’écrit de trois façons à partir du cosinus et du sinus, et le sinus du double est le double du produit du sinus par le cosinus.\nExercice de fixation : la différence des carrés du cosinus et du sinus est le cosinus du double.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07_q5",
            "type": "mcq",
            "prompt": "$\\cos^2 a - \\sin^2 a$ est égal à :",
            "options": [
              "$1$",
              "$\\cos 2a$",
              "$\\sin 2a$",
              "$2\\cos^2 a$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la réponse B de la première affirmation du corrigé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les formules de linéarisation",
          "stepTheme": "Les formules de linéarisation",
          "stepBadge": "Les formules de linéarisation",
          "paragraphText": "• Propriétés : le carré du cosinus et le carré du sinus s’expriment avec le cosinus du double.\nExercice de fixation : le double du carré du sinus vaut la différence de $1$ et du cosinus du double, et la somme de $1$ et du cosinus du double vaut le double du carré du cosinus.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07_q6",
            "type": "mcq",
            "prompt": "$2\\sin^2 a$ est égal à :",
            "options": [
              "$1 + \\cos 2a$",
              "$\\cos 2a$",
              "$4\\sin a$",
              "$1 - \\cos 2a$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la réponse A de la troisième affirmation du corrigé, tirée de la formule de linéarisation du sinus."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07_q1",
          "type": "mcq",
          "prompt": "$\\cos(a + b)$ est égal à :",
          "options": [
            "$\\cos a \\cos b + \\sin a \\sin b$",
            "$\\sin a \\cos b + \\cos a \\sin b$",
            "$\\cos a \\cos b - \\sin a \\sin b$",
            "$\\cos a + \\cos b$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la première formule d’addition de la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07_q2",
          "type": "mcq",
          "prompt": "$\\sin(a - b)$ est égal à :",
          "options": [
            "$\\sin a \\cos b - \\cos a \\sin b$",
            "$\\cos a \\cos b + \\sin a \\sin b$",
            "$\\sin a \\cos b + \\cos a \\sin b$",
            "$\\sin a - \\sin b$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la quatrième formule listée dans la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\cos\\frac{7\\pi}{12}$ ?",
          "options": [
            "$\\frac{\\sqrt{2} + \\sqrt{6}}{4}$",
            "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$",
            "$-\\frac{\\sqrt{2} + \\sqrt{6}}{4}$",
            "$\\frac{\\sqrt{2} - \\sqrt{6}}{4}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le produit donne la différence de $\\sqrt{2}$ et de $\\sqrt{6}$ sur $4$ : c’est la solution de l’exercice."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\sin\\frac{7\\pi}{12}$ ?",
          "options": [
            "$\\frac{\\sqrt{2} - \\sqrt{6}}{4}$",
            "$\\frac{\\sqrt{2} + \\sqrt{6}}{4}$",
            "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$",
            "$\\frac{1}{4}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le produit donne la somme de $\\sqrt{2}$ et de $\\sqrt{6}$ sur $4$ : c’est la solution de l’exercice."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07_q5",
          "type": "mcq",
          "prompt": "$\\cos^2 a - \\sin^2 a$ est égal à :",
          "options": [
            "$1$",
            "$\\cos 2a$",
            "$\\sin 2a$",
            "$2\\cos^2 a$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la réponse B de la première affirmation du corrigé."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p07_q6",
          "type": "mcq",
          "prompt": "$2\\sin^2 a$ est égal à :",
          "options": [
            "$1 + \\cos 2a$",
            "$\\cos 2a$",
            "$4\\sin a$",
            "$1 - \\cos 2a$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la réponse A de la troisième affirmation du corrigé, tirée de la formule de linéarisation du sinus."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08",
      "order": 8,
      "title": "Équations et inéquations trigonométriques",
      "summary": "Résoudre les équations en $\\cos x = \\cos a$, $\\sin x = \\sin a$, $\\tan x = \\tan a$, les équations en $a\\cos x + b\\sin x$, et des inéquations sur le cercle.",
      "conceptExplanation": "Équations de référence : $\\cos x = \\cos a$ si et seulement si $x = a + 2k\\pi$ ou $x = -a + 2k\\pi$ ; $\\sin x = \\sin a$ si et seulement si $x = a + 2k\\pi$ ou $x = \\pi - a + 2k\\pi$ ; $\\tan x = \\tan a$ si et seulement si $x = a + k\\pi$, pour $x$ et $a$ différents de $\\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$).\nCas particuliers : $\\cos x = -1$ si et seulement si $x = (2k + 1)\\pi$ ; $\\sin x = -1$ si et seulement si $x = -\\frac{\\pi}{2} + 2k\\pi$ ; $\\sin x = 0$ si et seulement si $x = k\\pi$ ; $\\sin x = 1$ si et seulement si $x = \\frac{\\pi}{2} + 2k\\pi$.\nÉquations en $a\\cos x + b\\sin x + c = 0$ : on réduit $a\\cos x + b\\sin x$ en factorisant par la racine carrée de $a^2 + b^2$ et en introduisant un angle auxiliaire $\\alpha$, ce qui donne un cosinus de $x - \\alpha$ ; par exemple, l’équation $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$ a pour solutions $\\frac{5\\pi}{12} + 2k\\pi$ et $-\\frac{\\pi}{12} + 2k\\pi$.\nInéquations : elles se résolvent sur le cercle trigonométrique ; par exemple, dans $]-\\pi ; \\pi]$, le sinus strictement supérieur à $-\\frac{1}{2}$ donne l’ensemble formé des intervalles $]-\\pi ; -\\frac{5\\pi}{6}[$ et $]-\\frac{\\pi}{6} ; \\pi]$, et dans $[0 ; 2\\pi]$, le cosinus inférieur ou égal à $-\\frac{\\sqrt{3}}{2}$ donne l’intervalle de bornes $\\frac{5\\pi}{6}$ et $\\frac{7\\pi}{6}$.",
      "keyRule": "Égalité de cosinus : deux familles avec l’opposé ; égalité de sinus : deux familles avec le supplémentaire ; égalité de tangente : une famille en $k\\pi$.",
      "formulas": [
        {
          "name": "Équation en cosinus",
          "formula": "\\cos x = \\cos a",
          "note": "Solutions : $x = a + 2k\\pi$ ou $x = -a + 2k\\pi$."
        },
        {
          "name": "Équation en tangente",
          "formula": "\\tan x = \\tan a",
          "note": "Solutions : $x = a + k\\pi$."
        }
      ],
      "workedExample": {
        "title": "Résoudre $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$ (exercice de fixation)",
        "statement": "Résous dans $\\mathbb{R}$ l’équation $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$.",
        "methodSteps": [
          "On factorise le membre de gauche par $2$ : il devient le produit de $2$ par la somme de $\\frac{\\sqrt{3}}{2}\\cos x$ et de $\\frac{1}{2}\\sin x$.",
          "On reconnaît le cosinus de $\\frac{\\pi}{6}$ et le sinus de $\\frac{\\pi}{6}$ : l’équation devient un cosinus de $x - \\frac{\\pi}{6}$ égal à $\\frac{\\sqrt{2}}{2}$.",
          "Ce cosinus est celui de $\\frac{\\pi}{4}$ : on obtient $x - \\frac{\\pi}{6} = \\frac{\\pi}{4} + 2k\\pi$ ou $x - \\frac{\\pi}{6} = -\\frac{\\pi}{4} + 2k\\pi$."
        ],
        "conclusion": "Les solutions sont $x = \\frac{5\\pi}{12} + 2k\\pi$ et $x = -\\frac{\\pi}{12} + 2k\\pi$, avec $k \\in \\mathbb{Z}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Résoudre $\\cos x = \\cos a$",
          "stepTheme": "Résoudre $\\cos x = \\cos a$",
          "stepBadge": "Résoudre $\\cos x = \\cos a$",
          "paragraphText": "• Propriété : pour tous réels $x$ et $a$, l’équation du cosinus a deux familles de solutions, espacées de $2k\\pi$.\nLes deux familles correspondent à $a$ et à son opposé.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q1",
            "type": "mcq",
            "prompt": "Les solutions de $\\cos x = \\cos a$ sont :",
            "options": [
              "$x = a + 2k\\pi$ ou $x = -a + 2k\\pi$, avec $k \\in \\mathbb{Z}$",
              "$x = a + k\\pi$ seulement",
              "$x = \\pi - a + 2k\\pi$ seulement",
              "$x = a$ seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la première propriété de la partie sur les équations trigonométriques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Résoudre $\\cos x = \\frac{1}{2}$",
          "stepTheme": "Résoudre $\\cos x = \\frac{1}{2}$",
          "stepBadge": "Résoudre $\\cos x = \\frac{1}{2}$",
          "paragraphText": "• Exercice de fixation : on reconnaît la valeur remarquable du cosinus en $\\frac{\\pi}{3}$.\nL’équation devient donc une égalité de cosinus avec $a = \\frac{\\pi}{3}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q2",
            "type": "mcq",
            "prompt": "Les solutions de $\\cos x = \\frac{1}{2}$ sont :",
            "options": [
              "$x = \\frac{2\\pi}{3} + 2k\\pi$ ou $x = -\\frac{2\\pi}{3} + 2k\\pi$",
              "$x = \\frac{\\pi}{6} + 2k\\pi$ seulement",
              "$x = \\frac{\\pi}{3} + 2k\\pi$ ou $x = -\\frac{\\pi}{3} + 2k\\pi$",
              "$x = \\frac{\\pi}{3} + k\\pi$ seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la solution a) du corrigé, obtenue avec $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Résoudre $\\sin x = \\sin a$",
          "stepTheme": "Résoudre $\\sin x = \\sin a$",
          "stepBadge": "Résoudre $\\sin x = \\sin a$",
          "paragraphText": "• Propriété : l’équation du sinus a deux familles de solutions : $a$ et son supplémentaire $\\pi - a$, espacées de $2k\\pi$.\nExercice de fixation : pour le sinus égal à $-\\frac{\\sqrt{3}}{2}$, on utilise l’angle $-\\frac{2\\pi}{3}$ dont le sinus vaut cette valeur ; les solutions sont alors $-\\frac{2\\pi}{3} + 2k\\pi$ et $\\frac{5\\pi}{3} + 2k\\pi$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\sin(-\\frac{2\\pi}{3})$ ?",
            "options": [
              "$\\frac{\\sqrt{3}}{2}$",
              "$\\frac{1}{2}$",
              "$-\\frac{1}{2}$",
              "$-\\frac{\\sqrt{3}}{2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le sinus de $-\\frac{2\\pi}{3}$ est l’opposé de celui de $\\frac{2\\pi}{3}$, soit $-\\frac{\\sqrt{3}}{2}$ : c’est l’angle utilisé dans la solution b)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Résoudre $\\tan x = \\tan a$",
          "stepTheme": "Résoudre $\\tan x = \\tan a$",
          "stepBadge": "Résoudre $\\tan x = \\tan a$",
          "paragraphText": "• Propriété : pour $x$ et $a$ différents de $\\frac{\\pi}{2} + k\\pi$, l’équation de la tangente a une seule famille de solutions, espacées de $k\\pi$.\nExercice de fixation : la tangente vaut $1$ en $\\frac{\\pi}{4}$, donc l’équation de tangente égale à $1$ se résout avec $a = \\frac{\\pi}{4}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q4",
            "type": "mcq",
            "prompt": "Les solutions de $\\tan x = 1$ sont :",
            "options": [
              "$x = \\frac{\\pi}{4} + 2k\\pi$",
              "$x = \\frac{\\pi}{4} + k\\pi$",
              "$x = -\\frac{\\pi}{4} + 2k\\pi$",
              "$x = \\frac{3\\pi}{4} + k\\pi$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la solution c) du corrigé : la période de la tangente donne des solutions espacées de $k\\pi$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Cas particuliers d’équations",
          "stepTheme": "Cas particuliers d’équations",
          "stepBadge": "Cas particuliers d’équations",
          "paragraphText": "• Remarques de la leçon : le cosinus vaut $-1$ pour les angles de la forme $(2k + 1)\\pi$ ; le sinus vaut $-1$ en $-\\frac{\\pi}{2} + 2k\\pi$ ; le sinus vaut $0$ pour les multiples de $\\pi$ ; le sinus vaut $1$ en $\\frac{\\pi}{2} + 2k\\pi$.\nCes cas particuliers se lisent directement sur le cercle trigonométrique.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q5",
            "type": "mcq",
            "prompt": "Les solutions de $\\sin x = 0$ sont :",
            "options": [
              "$x = \\frac{\\pi}{2} + 2k\\pi$",
              "$x = (2k + 1)\\pi$",
              "$x = k\\pi$",
              "$x = -\\frac{\\pi}{2} + 2k\\pi$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sinus s’annule aux points $I$ et $I'$ du cercle : les solutions sont les multiples de $\\pi$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Réduire $a\\cos x + b\\sin x$",
          "stepTheme": "Réduire $a\\cos x + b\\sin x$",
          "stepBadge": "Réduire $a\\cos x + b\\sin x$",
          "paragraphText": "• Méthode : on factorise par la racine carrée de $a^2 + b^2$, puis on détermine un angle $\\alpha$ dont le cosinus et le sinus sont les deux quotients obtenus.\nL’expression devient alors un produit par un cosinus de $x - \\alpha$, et l’équation se ramène à une égalité de cosinus.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q6",
            "type": "mcq",
            "prompt": "L’expression $\\sqrt{3}\\cos x + \\sin x$ s’écrit sous la forme réduite :",
            "options": [
              "$2\\cos(x - \\frac{\\pi}{6})$",
              "$2\\cos(x + \\frac{\\pi}{6})$",
              "$\\cos(x - \\frac{\\pi}{6})$",
              "$2\\sin(x - \\frac{\\pi}{6})$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le facteur est $2$ et l’angle auxiliaire est $\\frac{\\pi}{6}$, dont le cosinus vaut $\\frac{\\sqrt{3}}{2}$ et le sinus $\\frac{1}{2}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Une inéquation avec le sinus",
          "stepTheme": "Une inéquation avec le sinus",
          "stepBadge": "Une inéquation avec le sinus",
          "paragraphText": "• Exercice de fixation : on résout dans $]-\\pi ; \\pi]$ l’inéquation du sinus strictement supérieur à $-\\frac{1}{2}$ en regardant les points du cercle dont l’ordonnée dépasse cette valeur.\nLes points frontières correspondent aux angles $-\\frac{5\\pi}{6}$ et $-\\frac{\\pi}{6}$, qui sont exclus car l’inégalité est stricte.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q7",
            "type": "mcq",
            "prompt": "L’ensemble des solutions de cette inéquation dans $]-\\pi ; \\pi]$ est :",
            "options": [
              "$]-\\pi ; -\\frac{5\\pi}{6}[ \\cup ]-\\frac{\\pi}{6} ; \\pi]$",
              "$]-\\frac{5\\pi}{6} ; -\\frac{\\pi}{6}[$",
              "$[-\\frac{5\\pi}{6} ; -\\frac{\\pi}{6}]$",
              "$]-\\frac{\\pi}{6} ; \\frac{\\pi}{6}[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la solution donnée pour la première inéquation : le grand arc au-dessus de l’ordonnée $-\\frac{1}{2}$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Une inéquation avec le cosinus",
          "stepTheme": "Une inéquation avec le cosinus",
          "stepBadge": "Une inéquation avec le cosinus",
          "paragraphText": "• Exercice de fixation : on résout dans $[0 ; 2\\pi]$ l’inéquation du cosinus inférieur ou égal à $-\\frac{\\sqrt{3}}{2}$ en regardant les points du cercle dont l’abscisse ne dépasse pas cette valeur.\nLes points frontières correspondent aux angles $\\frac{5\\pi}{6}$ et $\\frac{7\\pi}{6}$, qui sont inclus car l’inégalité est large. Pour la tangente, la leçon donne aussi, dans $]-\\pi ; \\pi]$, l’ensemble des solutions de l’inéquation de tangente inférieure à $1$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q8",
            "type": "mcq",
            "prompt": "L’ensemble des solutions de cette inéquation dans $[0 ; 2\\pi]$ est :",
            "options": [
              "$[0 ; \\frac{5\\pi}{6}]$",
              "$[\\frac{7\\pi}{6} ; 2\\pi]$",
              "$[\\frac{5\\pi}{6} ; \\frac{7\\pi}{6}]$",
              "$]-\\pi ; \\pi]$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la solution donnée pour la deuxième inéquation : le petit arc à gauche de l’abscisse $-\\frac{\\sqrt{3}}{2}$, bornes incluses."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q1",
          "type": "mcq",
          "prompt": "Les solutions de $\\cos x = \\cos a$ sont :",
          "options": [
            "$x = a + 2k\\pi$ ou $x = -a + 2k\\pi$, avec $k \\in \\mathbb{Z}$",
            "$x = a + k\\pi$ seulement",
            "$x = \\pi - a + 2k\\pi$ seulement",
            "$x = a$ seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la première propriété de la partie sur les équations trigonométriques."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q2",
          "type": "mcq",
          "prompt": "Les solutions de $\\cos x = \\frac{1}{2}$ sont :",
          "options": [
            "$x = \\frac{2\\pi}{3} + 2k\\pi$ ou $x = -\\frac{2\\pi}{3} + 2k\\pi$",
            "$x = \\frac{\\pi}{6} + 2k\\pi$ seulement",
            "$x = \\frac{\\pi}{3} + 2k\\pi$ ou $x = -\\frac{\\pi}{3} + 2k\\pi$",
            "$x = \\frac{\\pi}{3} + k\\pi$ seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la solution a) du corrigé, obtenue avec $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\sin(-\\frac{2\\pi}{3})$ ?",
          "options": [
            "$\\frac{\\sqrt{3}}{2}$",
            "$\\frac{1}{2}$",
            "$-\\frac{1}{2}$",
            "$-\\frac{\\sqrt{3}}{2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le sinus de $-\\frac{2\\pi}{3}$ est l’opposé de celui de $\\frac{2\\pi}{3}$, soit $-\\frac{\\sqrt{3}}{2}$ : c’est l’angle utilisé dans la solution b)."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q4",
          "type": "mcq",
          "prompt": "Les solutions de $\\tan x = 1$ sont :",
          "options": [
            "$x = \\frac{\\pi}{4} + 2k\\pi$",
            "$x = \\frac{\\pi}{4} + k\\pi$",
            "$x = -\\frac{\\pi}{4} + 2k\\pi$",
            "$x = \\frac{3\\pi}{4} + k\\pi$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la solution c) du corrigé : la période de la tangente donne des solutions espacées de $k\\pi$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q5",
          "type": "mcq",
          "prompt": "Les solutions de $\\sin x = 0$ sont :",
          "options": [
            "$x = \\frac{\\pi}{2} + 2k\\pi$",
            "$x = (2k + 1)\\pi$",
            "$x = k\\pi$",
            "$x = -\\frac{\\pi}{2} + 2k\\pi$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sinus s’annule aux points $I$ et $I'$ du cercle : les solutions sont les multiples de $\\pi$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q6",
          "type": "mcq",
          "prompt": "L’expression $\\sqrt{3}\\cos x + \\sin x$ s’écrit sous la forme réduite :",
          "options": [
            "$2\\cos(x - \\frac{\\pi}{6})$",
            "$2\\cos(x + \\frac{\\pi}{6})$",
            "$\\cos(x - \\frac{\\pi}{6})$",
            "$2\\sin(x - \\frac{\\pi}{6})$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le facteur est $2$ et l’angle auxiliaire est $\\frac{\\pi}{6}$, dont le cosinus vaut $\\frac{\\sqrt{3}}{2}$ et le sinus $\\frac{1}{2}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q7",
          "type": "mcq",
          "prompt": "L’ensemble des solutions de cette inéquation dans $]-\\pi ; \\pi]$ est :",
          "options": [
            "$]-\\pi ; -\\frac{5\\pi}{6}[ \\cup ]-\\frac{\\pi}{6} ; \\pi]$",
            "$]-\\frac{5\\pi}{6} ; -\\frac{\\pi}{6}[$",
            "$[-\\frac{5\\pi}{6} ; -\\frac{\\pi}{6}]$",
            "$]-\\frac{\\pi}{6} ; \\frac{\\pi}{6}[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la solution donnée pour la première inéquation : le grand arc au-dessus de l’ordonnée $-\\frac{1}{2}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l06_angles_orientes_p08_q8",
          "type": "mcq",
          "prompt": "L’ensemble des solutions de cette inéquation dans $[0 ; 2\\pi]$ est :",
          "options": [
            "$[0 ; \\frac{5\\pi}{6}]$",
            "$[\\frac{7\\pi}{6} ; 2\\pi]$",
            "$[\\frac{5\\pi}{6} ; \\frac{7\\pi}{6}]$",
            "$]-\\pi ; \\pi]$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la solution donnée pour la deuxième inéquation : le petit arc à gauche de l’abscisse $-\\frac{\\sqrt{3}}{2}$, bornes incluses."
        }
      ]
    }
  ]
};
