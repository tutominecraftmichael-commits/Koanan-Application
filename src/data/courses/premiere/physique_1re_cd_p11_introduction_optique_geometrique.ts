import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « PC 1ère CD P11,10 : Introduction à l’optique géométrique » (leçon 11 en 1re C, 10 en 1re D).
// Fichier généré (scratchpad build_1re_pc_p11.mjs) : modifier le générateur plutôt que ce fichier.
export const PHYSIQUE_1RE_CD_P11_INTRODUCTION_OPTIQUE_GEOMETRIQUE: CurriculumChapter = {
  "id": "premiere_c_physique_p11_introduction_optique_geometrique",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 11,
  "title": "Leçon 11 : Introduction à l’optique géométrique",
  "summary": "Sources et récepteurs de lumière, célérité et indice de réfraction (n = c ÷ v), rayons et faisceaux, longueur d’onde et fréquence (λ = c ÷ N), lumière monochromatique et changement de milieu. Leçon 11 en 1re C, leçon 10 en 1re D.",
  "officialVolumeHours": 3,
  "contentVersion": 2,
  "source": "PC1ère CD_P11,10 Introduction à loptique géométrique.pdf",
  "points": [
    {
      "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01",
      "order": 1,
      "title": "Sources et récepteurs de lumière",
      "summary": "Distinguer source primaire, source secondaire et récepteur de lumière.",
      "conceptExplanation": "Situation : un élève de 1re D du lycée Tiapani Dominique de Dabou lit dans une revue que la lumière est une onde, qu’elle se propage dans le vide et que sa couleur dépend de sa longueur d’onde. Avec sa classe, il veut définir les sources, les récepteurs de lumière et les caractéristiques d’une onde.\n- Source de lumière : corps ou dispositif qui émet de la lumière.\n- Source primaire : elle produit la lumière qu’elle émet (le Soleil, une lampe allumée, l’éclair d’un orage).\n- Source secondaire : elle diffuse la lumière qu’elle reçoit d’une source primaire (la Lune, une chaise, un miroir, un diamant).\n- Récepteur de lumière : corps ou dispositif sensible à la lumière ; éclairé, il subit une transformation physique ou chimique (l’œil, la chlorophylle, le capteur d’une caméra, une photorésistance).",
      "keyRule": "Une source primaire produit sa lumière ; une source secondaire renvoie la lumière reçue ; un récepteur est transformé par la lumière.",
      "formulas": [],
      "workedExample": {
        "title": "Activité d’application : classer des objets",
        "statement": "Classer le diamant, le miroir, la chlorophylle, le Soleil, la Lune et la photorésistance en sources primaires, sources secondaires ou récepteurs de lumière.",
        "methodSteps": [
          "Source primaire (produit sa lumière) : le Soleil.",
          "Sources secondaires (renvoient la lumière reçue) : le diamant, le miroir, la Lune.",
          "Récepteurs (transformés par la lumière) : la chlorophylle, la photorésistance."
        ],
        "conclusion": "Un objet brillant n’est pas forcément une source primaire : le diamant et la Lune ne font que renvoyer la lumière."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Source primaire",
          "stepTheme": "Elle produit sa lumière",
          "stepTitle": "Qu’est-ce qu’une source primaire de lumière ?",
          "paragraphText": "Une **source de lumière** est un corps ou un dispositif qui émet de la lumière. Une **source primaire** **produit** elle-même la lumière qu’elle émet : le Soleil, une lampe allumée.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01_q1",
            "type": "mcq",
            "prompt": "Le Soleil et une lampe électrique allumée produisent eux-mêmes la lumière qu’ils émettent. Ce sont :",
            "options": [
              "des sources primaires de lumière",
              "des sources secondaires de lumière",
              "des récepteurs de lumière",
              "des milieux de propagation de la lumière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ils produisent la lumière qu’ils émettent : ce sont des sources primaires."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Source secondaire",
          "stepTheme": "Elle renvoie la lumière",
          "stepTitle": "La Lune ne produit pas sa lumière",
          "paragraphText": "Une **source secondaire** **diffuse** la lumière qu’elle reçoit d’une source primaire. La Lune nous éclaire la nuit, mais avec la lumière du Soleil qu’elle renvoie.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01_q2",
            "type": "mcq",
            "prompt": "La Lune éclaire la Terre pendant la nuit en renvoyant la lumière qu’elle reçoit du Soleil. Quel type de source de lumière est-elle ?",
            "options": [
              "Une source secondaire",
              "Une source primaire",
              "Un récepteur de lumière",
              "Elle n’est pas une source de lumière"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La Lune ne produit pas de lumière : elle diffuse celle du Soleil. C’est une source secondaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "Ça brille, mais…",
          "stepTheme": "Diamant et miroir",
          "stepTitle": "Briller ne veut pas dire produire de la lumière",
          "paragraphText": "Un diamant qui scintille ou un miroir qui éblouit ne font que **renvoyer** la lumière qu’ils reçoivent : ce sont des sources **secondaires**, pas des sources primaires.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01_q3",
            "type": "mcq",
            "prompt": "Un diamant qui scintille au soleil et un miroir qui renvoie la lumière d’une lampe sont :",
            "options": [
              "des sources secondaires de lumière",
              "des sources primaires de lumière",
              "des récepteurs de lumière",
              "ni des sources ni des récepteurs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ils renvoient la lumière reçue sans la produire : ce sont des sources secondaires."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepBadge": "Récepteur",
          "stepTheme": "Sensible à la lumière",
          "stepTitle": "Qu’est-ce qu’un récepteur de lumière ?",
          "paragraphText": "Un **récepteur de lumière** est un corps ou un dispositif **sensible** à la lumière : éclairé, il subit une transformation physique ou chimique. Exemples : l’œil, la chlorophylle des feuilles, le capteur d’une caméra.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01_q4",
            "type": "mcq",
            "prompt": "Parmi les objets suivants, lequel est un récepteur de lumière ?",
            "options": [
              "La chlorophylle d’une feuille",
              "La Lune",
              "Une lampe allumée",
              "Un miroir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Éclairée, la chlorophylle réalise la photosynthèse (transformation chimique) : c’est un récepteur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepBadge": "Photorésistance",
          "stepTheme": "Composant électronique",
          "stepTitle": "Un récepteur dans un circuit électrique",
          "paragraphText": "Une **photorésistance** est un composant dont la résistance diminue quand on l’éclaire : la lumière y provoque une transformation physique. C’est un récepteur de lumière, utilisé par exemple dans les lampadaires qui s’allument seuls la nuit.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01_q5",
            "type": "mcq",
            "prompt": "La résistance d’une photorésistance diminue quand elle est éclairée. Comment classe-t-on ce composant ?",
            "options": [
              "C’est un récepteur de lumière",
              "C’est une source primaire de lumière",
              "C’est une source secondaire de lumière",
              "C’est un milieu de propagation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La lumière modifie une de ses propriétés physiques (sa résistance) : c’est un récepteur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Feu d’artifice",
          "stepTheme": "Source dans une situation",
          "stepTitle": "Reconnaître la source dans une situation",
          "paragraphText": "Lors d’un feu d’artifice, la fusée éclate et produit une **gerbe de lumière** : c’est elle qui émet la lumière, donc c’est la source. L’œil du spectateur est le récepteur.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01_q6",
            "type": "mcq",
            "prompt": "Au cours d’un feu d’artifice, une fusée éclate en altitude et un spectateur voit la gerbe lumineuse. Quelle est la source de lumière dans cette situation ?",
            "options": [
              "La gerbe de lumière produite par l’explosion",
              "L’œil du spectateur",
              "Le bruit de l’explosion",
              "Le sol d’où la fusée est partie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La gerbe lumineuse émet la lumière (source) ; l’œil du spectateur la reçoit (récepteur)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01_q1",
          "type": "mcq",
          "prompt": "Le Soleil et une lampe électrique allumée produisent eux-mêmes la lumière qu’ils émettent. Ce sont :",
          "options": [
            "des sources primaires de lumière",
            "des sources secondaires de lumière",
            "des récepteurs de lumière",
            "des milieux de propagation de la lumière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ils produisent la lumière qu’ils émettent : ce sont des sources primaires."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01_q2",
          "type": "mcq",
          "prompt": "La Lune éclaire la Terre pendant la nuit en renvoyant la lumière qu’elle reçoit du Soleil. Quel type de source de lumière est-elle ?",
          "options": [
            "Une source secondaire",
            "Une source primaire",
            "Un récepteur de lumière",
            "Elle n’est pas une source de lumière"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La Lune ne produit pas de lumière : elle diffuse celle du Soleil. C’est une source secondaire."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01_q3",
          "type": "mcq",
          "prompt": "Un diamant qui scintille au soleil et un miroir qui renvoie la lumière d’une lampe sont :",
          "options": [
            "des sources secondaires de lumière",
            "des sources primaires de lumière",
            "des récepteurs de lumière",
            "ni des sources ni des récepteurs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ils renvoient la lumière reçue sans la produire : ce sont des sources secondaires."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01_q4",
          "type": "mcq",
          "prompt": "Parmi les objets suivants, lequel est un récepteur de lumière ?",
          "options": [
            "La chlorophylle d’une feuille",
            "La Lune",
            "Une lampe allumée",
            "Un miroir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Éclairée, la chlorophylle réalise la photosynthèse (transformation chimique) : c’est un récepteur."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01_q5",
          "type": "mcq",
          "prompt": "La résistance d’une photorésistance diminue quand elle est éclairée. Comment classe-t-on ce composant ?",
          "options": [
            "C’est un récepteur de lumière",
            "C’est une source primaire de lumière",
            "C’est une source secondaire de lumière",
            "C’est un milieu de propagation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La lumière modifie une de ses propriétés physiques (sa résistance) : c’est un récepteur."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p01_q6",
          "type": "mcq",
          "prompt": "Au cours d’un feu d’artifice, une fusée éclate en altitude et un spectateur voit la gerbe lumineuse. Quelle est la source de lumière dans cette situation ?",
          "options": [
            "La gerbe de lumière produite par l’explosion",
            "L’œil du spectateur",
            "Le bruit de l’explosion",
            "Le sol d’où la fusée est partie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La gerbe lumineuse émet la lumière (source) ; l’œil du spectateur la reçoit (récepteur)."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02",
      "order": 2,
      "title": "Milieux de propagation, célérité et indice de réfraction",
      "summary": "Reconnaître un milieu de propagation, connaître la célérité c et utiliser n = c ÷ v.",
      "conceptExplanation": "- Milieu de propagation : milieu transparent ou translucide qui laisse passer la lumière (verre, eau, alcool, air, vide). Il peut être homogène ou non.\n- Célérité : vitesse de propagation de la lumière. Dans le vide, $c = 3 \\times 10^{8}$ m·s⁻¹ ; dans l’eau, $v \\approx 2{,}25 \\times 10^{8}$ m·s⁻¹.\n- Indice de réfraction : chaque milieu est caractérisé par son indice $n = \\frac{c}{v}$, sans unité et toujours supérieur ou égal à 1 : air 1,00 ; eau 1,33 ; alcool 1,36 ; verre 1,50 à 1,70.\n- Correction du document : dans le verre d’indice 1,6, $v = \\frac{3 \\times 10^{8}}{1{,}6} = 1{,}875 \\times 10^{8}$ m·s⁻¹, soit environ $1{,}9 \\times 10^{8}$ m·s⁻¹ (le corrigé donne 1,8 × 10⁸ par un arrondi incorrect).",
      "keyRule": "n = c ÷ v (sans unité, toujours ≥ 1) : plus l’indice est grand, plus la lumière est lente dans le milieu.",
      "formulas": [
        {
          "name": "Indice de réfraction",
          "formula": "n = \\frac{c}{v} \\quad\\Leftrightarrow\\quad v = \\frac{c}{n}",
          "note": "c = 3 × 10⁸ m·s⁻¹ ; v vitesse de la lumière dans le milieu"
        }
      ],
      "workedExample": {
        "title": "Activité d’application : vitesse de la lumière dans le verre",
        "statement": "Calculer la vitesse de la lumière dans un verre d’indice $n = 1{,}6$, sachant que $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$.",
        "methodSteps": [
          "De n = c ÷ v on tire v = c ÷ n.",
          "v = 3 × 10⁸ ÷ 1,6 = 1,875 × 10⁸ m/s.",
          "Arrondi correct : environ 1,9 × 10⁸ m/s (et non 1,8 × 10⁸ comme dans le corrigé)."
        ],
        "conclusion": "Dans ce verre, la lumière va environ 1,6 fois moins vite que dans le vide."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Milieu de propagation",
          "stepTheme": "Transparent ou translucide",
          "stepTitle": "Où la lumière peut-elle se propager ?",
          "paragraphText": "Un **milieu de propagation** de la lumière est un milieu **transparent** ou **translucide** qui la laisse passer : le verre, l’eau, l’alcool, l’air… et même le **vide**.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02_q1",
            "type": "mcq",
            "prompt": "Parmi les éléments suivants, lequel n’est pas un milieu de propagation de la lumière ?",
            "options": [
              "Une planche de bois",
              "Le verre d’une fenêtre",
              "L’eau d’une piscine",
              "Le vide de l’espace"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bois est opaque : il ne laisse pas passer la lumière."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Célérité",
          "stepTheme": "c dans le vide",
          "stepTitle": "La vitesse de la lumière dans le vide",
          "paragraphText": "La **célérité** de la lumière est sa vitesse de propagation. Dans le vide, elle vaut $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ : environ 300 000 km chaque seconde.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02_q2",
            "type": "mcq",
            "prompt": "Quelle est la célérité de la lumière dans le vide ?",
            "options": [
              "$3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
              "$340\\,\\mathrm{m\\cdot s^{-1}}$",
              "$3 \\times 10^{5}\\,\\mathrm{m\\cdot s^{-1}}$",
              "$2{,}25 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ (340 m/s est la vitesse du son dans l’air ; 2,25 × 10⁸ m/s celle de la lumière dans l’eau)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Indice n = c ÷ v",
          "stepTheme": "Relation clé",
          "stepTitle": "L’indice de réfraction d’un milieu",
          "paragraphText": "Chaque milieu transparent est caractérisé par son **indice de réfraction** $n = \\frac{c}{v}$, où $v$ est la vitesse de la lumière dans ce milieu. C’est un nombre sans unité.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02_q3",
            "type": "mcq",
            "prompt": "Dans l’eau, la lumière se propage à $v = 2{,}25 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ (avec $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ dans le vide). Quel est l’indice de réfraction de l’eau ?",
            "options": [
              "≈ 1,33",
              "0,75",
              "1,5",
              "6,75"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$n = \\frac{3 \\times 10^{8}}{2{,}25 \\times 10^{8}} \\approx 1{,}33$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "v = c ÷ n",
          "stepTheme": "Vitesse dans le verre",
          "stepTitle": "Calculer la vitesse de la lumière dans un milieu",
          "paragraphText": "On isole $v$ : $v = \\frac{c}{n}$. Pour un verre d’indice 1,6 : $v = 1{,}875 \\times 10^{8}$ m·s⁻¹, soit environ $1{,}9 \\times 10^{8}$ m·s⁻¹. Le corrigé officiel arrondit à $1{,}8 \\times 10^{8}$ : c’est inexact.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02_q4",
            "type": "mcq",
            "prompt": "Calcule la vitesse de la lumière dans un verre d’indice $n = 1{,}6$, sachant que $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ dans le vide.",
            "options": [
              "$\\approx 1{,}9 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
              "$4{,}8 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
              "$1{,}6 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
              "$5{,}3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$v = \\frac{3 \\times 10^{8}}{1{,}6} = 1{,}875 \\times 10^{8} \\approx 1{,}9 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ (4,8 × 10⁸ : multiplication au lieu de division)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "n ≥ 1",
          "stepTheme": "Pas d’indice inférieur à 1",
          "stepTitle": "Un indice de réfraction n’est jamais inférieur à 1",
          "paragraphText": "La lumière ne va jamais plus vite que dans le vide ($v \\le c$), donc $n = \\frac{c}{v} \\ge 1$. Trouver un indice inférieur à 1 signale presque toujours une division à l’envers.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02_q5",
            "type": "mcq",
            "prompt": "Un élève calcule l’indice de l’eau avec $v = 2{,}25 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ et $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$, et trouve $n = 0{,}75$. Quelle erreur a-t-il faite ?",
            "options": [
              "Il a calculé v ÷ c au lieu de c ÷ v",
              "Aucune : l’indice de l’eau vaut bien 0,75",
              "Il a oublié de convertir en km/s",
              "Il a utilisé la vitesse du son"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{v}{c} = 0{,}75$ ; l’indice est l’inverse : $n = \\frac{c}{v} \\approx 1{,}33$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Comparer les milieux",
          "stepTheme": "Le plus lent",
          "stepTitle": "Dans quel milieu la lumière est-elle la plus lente ?",
          "paragraphText": "Puisque $v = \\frac{c}{n}$, la lumière est d’autant plus **lente** que l’indice du milieu est **grand**.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02_q6",
            "type": "mcq",
            "prompt": "Voici des indices de réfraction : air 1,00 ; eau 1,33 ; alcool 1,36 ; verre 1,50. Dans lequel de ces milieux la lumière se propage-t-elle le plus lentement ?",
            "options": [
              "Dans le verre",
              "Dans l’air",
              "Dans l’eau",
              "Dans l’alcool"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le verre a le plus grand indice (1,50) : la lumière y est la plus lente (v = c ÷ 1,50 = 2 × 10⁸ m/s)."
          },
          "visualSchema": {
            "type": "custom_svg",
            "title": "Indices de réfraction et vitesse de la lumière",
            "caption": "v = c ÷ n avec c = 3 × 10⁸ m/s : plus l’indice est grand, plus la lumière est lente.",
            "tableData": {
              "headers": [
                "Milieu",
                "Air",
                "Eau",
                "Alcool",
                "Verre"
              ],
              "rows": [
                [
                  "Indice n",
                  "1,00",
                  "1,33",
                  "1,36",
                  "1,50 à 1,70"
                ],
                [
                  "Vitesse v (× 10⁸ m/s)",
                  "3,00",
                  "≈ 2,25",
                  "≈ 2,21",
                  "2,00 à 1,76"
                ]
              ]
            }
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02_q1",
          "type": "mcq",
          "prompt": "Parmi les éléments suivants, lequel n’est pas un milieu de propagation de la lumière ?",
          "options": [
            "Une planche de bois",
            "Le verre d’une fenêtre",
            "L’eau d’une piscine",
            "Le vide de l’espace"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bois est opaque : il ne laisse pas passer la lumière."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02_q2",
          "type": "mcq",
          "prompt": "Quelle est la célérité de la lumière dans le vide ?",
          "options": [
            "$3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
            "$340\\,\\mathrm{m\\cdot s^{-1}}$",
            "$3 \\times 10^{5}\\,\\mathrm{m\\cdot s^{-1}}$",
            "$2{,}25 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ (340 m/s est la vitesse du son dans l’air ; 2,25 × 10⁸ m/s celle de la lumière dans l’eau)."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02_q3",
          "type": "mcq",
          "prompt": "Dans l’eau, la lumière se propage à $v = 2{,}25 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ (avec $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ dans le vide). Quel est l’indice de réfraction de l’eau ?",
          "options": [
            "≈ 1,33",
            "0,75",
            "1,5",
            "6,75"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$n = \\frac{3 \\times 10^{8}}{2{,}25 \\times 10^{8}} \\approx 1{,}33$."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02_q4",
          "type": "mcq",
          "prompt": "Calcule la vitesse de la lumière dans un verre d’indice $n = 1{,}6$, sachant que $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ dans le vide.",
          "options": [
            "$\\approx 1{,}9 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
            "$4{,}8 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
            "$1{,}6 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
            "$5{,}3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$v = \\frac{3 \\times 10^{8}}{1{,}6} = 1{,}875 \\times 10^{8} \\approx 1{,}9 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ (4,8 × 10⁸ : multiplication au lieu de division)."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02_q5",
          "type": "mcq",
          "prompt": "Un élève calcule l’indice de l’eau avec $v = 2{,}25 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ et $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$, et trouve $n = 0{,}75$. Quelle erreur a-t-il faite ?",
          "options": [
            "Il a calculé v ÷ c au lieu de c ÷ v",
            "Aucune : l’indice de l’eau vaut bien 0,75",
            "Il a oublié de convertir en km/s",
            "Il a utilisé la vitesse du son"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{v}{c} = 0{,}75$ ; l’indice est l’inverse : $n = \\frac{c}{v} \\approx 1{,}33$."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p02_q6",
          "type": "mcq",
          "prompt": "Voici des indices de réfraction : air 1,00 ; eau 1,33 ; alcool 1,36 ; verre 1,50. Dans lequel de ces milieux la lumière se propage-t-elle le plus lentement ?",
          "options": [
            "Dans le verre",
            "Dans l’air",
            "Dans l’eau",
            "Dans l’alcool"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le verre a le plus grand indice (1,50) : la lumière y est la plus lente (v = c ÷ 1,50 = 2 × 10⁸ m/s)."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03",
      "order": 3,
      "title": "Rayons et faisceaux lumineux",
      "summary": "Représenter le trajet de la lumière par un rayon et reconnaître les faisceaux parallèles, convergents et divergents.",
      "conceptExplanation": "- Propagation rectiligne : dans un milieu transparent et homogène, la lumière se propage en ligne droite.\n- Rayon lumineux : demi-droite qui représente le trajet suivi par la lumière ; une flèche indique le sens de propagation.\n- Faisceau lumineux : ensemble de rayons lumineux provenant d’une même source. On distingue les faisceaux parallèles, convergents (les rayons se rapprochent) et divergents (les rayons s’écartent).\n- Retour inverse de la lumière : dans tout système optique, le chemin suivi par la lumière est indépendant du sens de propagation.\n- Un faisceau peut provenir d’une source secondaire (la lumière de la Lune, celle renvoyée par un miroir).",
      "keyRule": "Milieu homogène : propagation rectiligne. Rayon = demi-droite fléchée ; faisceau parallèle, convergent ou divergent.",
      "formulas": [],
      "workedExample": {
        "title": "Exercice 1 corrigé : vrai ou faux",
        "statement": "Dire si chaque affirmation est vraie ou fausse : (1) la Lune est une source primaire ; (2) la lumière blanche est polychromatique ; (3) λ = c × T et s’exprime en mètre ; (4) un faisceau lumineux provient toujours d’une source primaire.",
        "methodSteps": [
          "(1) Faux : la Lune renvoie la lumière du Soleil.",
          "(2) Vrai : la lumière blanche est un mélange de radiations (le corrigé officiel la marque « faux » : c’est une erreur).",
          "(3) Vrai.",
          "(4) Faux : un faisceau peut venir d’une source secondaire."
        ],
        "conclusion": "Réponses : 1 faux, 2 vrai, 3 vrai, 4 faux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepBadge": "Ligne droite",
          "stepTheme": "Milieu homogène",
          "stepTitle": "La lumière se propage en ligne droite",
          "paragraphText": "Dans un milieu **transparent et homogène** (l’air d’une salle, l’eau d’un verre), la lumière se propage **en ligne droite** : c’est la propagation rectiligne.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03_q1",
            "type": "mcq",
            "prompt": "Comment la lumière se propage-t-elle dans un milieu transparent et homogène, comme l’air d’une salle de classe ?",
            "options": [
              "En ligne droite",
              "En formant des cercles",
              "En zigzag",
              "Elle ne se propage pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Dans un milieu transparent et homogène, la propagation de la lumière est rectiligne."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Rayon lumineux",
          "stepTheme": "Demi-droite fléchée",
          "stepTitle": "Comment représenter le trajet de la lumière ?",
          "paragraphText": "On représente le trajet de la lumière par un **rayon lumineux** : une **demi-droite** qui part de la source, avec une **flèche** indiquant le sens de propagation.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03_q2",
            "type": "mcq",
            "prompt": "Comment représente-t-on, en optique géométrique, le trajet suivi par la lumière ?",
            "options": [
              "Par une demi-droite munie d’une flèche",
              "Par un segment sans flèche",
              "Par une courbe sinusoïdale",
              "Par un cercle autour de la source"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le rayon lumineux est une demi-droite fléchée dans le sens de propagation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Faisceaux",
          "stepTheme": "Parallèle, convergent, divergent",
          "stepTitle": "Les trois types de faisceaux",
          "paragraphText": "Un **faisceau lumineux** est un ensemble de rayons issus d’une même source. Il est **parallèle** si les rayons restent parallèles, **convergent** s’ils se rapprochent, **divergent** s’ils s’écartent.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03_q3",
            "type": "mcq",
            "prompt": "Les rayons qui sortent d’une lampe de poche s’écartent les uns des autres en s’éloignant de la lampe. Comment s’appelle ce faisceau ?",
            "options": [
              "Un faisceau divergent",
              "Un faisceau convergent",
              "Un faisceau parallèle",
              "Un faisceau monochromatique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Des rayons qui s’écartent forment un faisceau divergent."
          },
          "visualSchema": {
            "type": "geometry_svg",
            "title": "Les trois types de faisceaux lumineux",
            "caption": "Parallèle : rayons parallèles ; convergent : rayons qui se rapprochent ; divergent : rayons qui s’écartent.",
            "svgContent": "<svg viewBox=\"0 0 390 150\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\" font-family=\"sans-serif\">\n  <defs><marker id=\"p11-fx\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#b45309\"/></marker></defs>\n  <g fill=\"#fef3c7\" stroke=\"#1e293b\" stroke-width=\"1.3\"><rect x=\"6\" y=\"52\" width=\"40\" height=\"44\"/><rect x=\"136\" y=\"52\" width=\"40\" height=\"44\"/><rect x=\"266\" y=\"52\" width=\"40\" height=\"44\"/></g>\n  <g font-size=\"9\" fill=\"#1e293b\"><text x=\"9\" y=\"78\">Source</text><text x=\"139\" y=\"78\">Source</text><text x=\"269\" y=\"78\">Source</text></g>\n  <g stroke=\"#b45309\" stroke-width=\"1.6\" marker-end=\"url(#p11-fx)\">\n    <line x1=\"46\" y1=\"60\" x2=\"122\" y2=\"60\"/><line x1=\"46\" y1=\"70\" x2=\"122\" y2=\"70\"/><line x1=\"46\" y1=\"80\" x2=\"122\" y2=\"80\"/><line x1=\"46\" y1=\"90\" x2=\"122\" y2=\"90\"/>\n    <line x1=\"176\" y1=\"58\" x2=\"248\" y2=\"72\"/><line x1=\"176\" y1=\"68\" x2=\"248\" y2=\"74\"/><line x1=\"176\" y1=\"82\" x2=\"248\" y2=\"76\"/><line x1=\"176\" y1=\"92\" x2=\"248\" y2=\"78\"/>\n    <line x1=\"306\" y1=\"68\" x2=\"382\" y2=\"36\"/><line x1=\"306\" y1=\"72\" x2=\"382\" y2=\"62\"/><line x1=\"306\" y1=\"78\" x2=\"382\" y2=\"88\"/><line x1=\"306\" y1=\"82\" x2=\"382\" y2=\"114\"/>\n  </g>\n  <g font-size=\"11\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\"><text x=\"66\" y=\"134\">Parallèle</text><text x=\"196\" y=\"134\">Convergent</text><text x=\"326\" y=\"134\">Divergent</text></g>\n</svg>"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepBadge": "Loupe au soleil",
          "stepTheme": "Faisceau convergent",
          "stepTitle": "Des rayons qui se rejoignent en un point",
          "paragraphText": "Après avoir traversé une loupe, les rayons du Soleil se **rapprochent** et se rejoignent en un point très chaud : le faisceau est **convergent**.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03_q4",
            "type": "mcq",
            "prompt": "Après avoir traversé une loupe, les rayons du Soleil se rapprochent et se rejoignent en un point. Ce faisceau est :",
            "options": [
              "convergent",
              "divergent",
              "parallèle",
              "polychromatique et divergent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Des rayons qui se rapprochent jusqu’à se croiser forment un faisceau convergent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Origine d’un faisceau",
          "stepTheme": "Pas toujours primaire",
          "stepTitle": "Un faisceau ne vient pas forcément d’une source primaire",
          "paragraphText": "La lumière de la Lune ou celle renvoyée par un miroir forme aussi des faisceaux : un faisceau peut provenir d’une **source secondaire**.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03_q5",
            "type": "mcq",
            "prompt": "Vrai ou faux : « Un faisceau lumineux provient toujours d’une source primaire de lumière. »",
            "options": [
              "Faux : il peut provenir d’une source secondaire",
              "Vrai : seule une source primaire émet des rayons",
              "Vrai : un miroir absorbe toute la lumière reçue",
              "Faux : un faisceau ne vient jamais d’une source"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un miroir éclairé renvoie un faisceau de lumière : c’est une source secondaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepBadge": "Retour inverse",
          "stepTheme": "Chemin réversible",
          "stepTitle": "Le chemin de la lumière ne dépend pas du sens",
          "paragraphText": "**Principe du retour inverse** : dans tout système optique, le chemin suivi par la lumière est le même, que la lumière aille de A vers B ou de B vers A.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03_q6",
            "type": "mcq",
            "prompt": "Dans un système optique, un rayon va d’un point A à un point B en suivant un certain chemin. Si l’on place la source en B, quel chemin suit la lumière pour aller vers A ?",
            "options": [
              "Exactement le même chemin, en sens inverse",
              "Un chemin forcément plus court",
              "Un chemin forcément plus long",
              "Aucun : la lumière ne peut pas revenir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le chemin suivi par la lumière est indépendant du sens de propagation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03_q1",
          "type": "mcq",
          "prompt": "Comment la lumière se propage-t-elle dans un milieu transparent et homogène, comme l’air d’une salle de classe ?",
          "options": [
            "En ligne droite",
            "En formant des cercles",
            "En zigzag",
            "Elle ne se propage pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Dans un milieu transparent et homogène, la propagation de la lumière est rectiligne."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03_q2",
          "type": "mcq",
          "prompt": "Comment représente-t-on, en optique géométrique, le trajet suivi par la lumière ?",
          "options": [
            "Par une demi-droite munie d’une flèche",
            "Par un segment sans flèche",
            "Par une courbe sinusoïdale",
            "Par un cercle autour de la source"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le rayon lumineux est une demi-droite fléchée dans le sens de propagation."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03_q3",
          "type": "mcq",
          "prompt": "Les rayons qui sortent d’une lampe de poche s’écartent les uns des autres en s’éloignant de la lampe. Comment s’appelle ce faisceau ?",
          "options": [
            "Un faisceau divergent",
            "Un faisceau convergent",
            "Un faisceau parallèle",
            "Un faisceau monochromatique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Des rayons qui s’écartent forment un faisceau divergent."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03_q4",
          "type": "mcq",
          "prompt": "Après avoir traversé une loupe, les rayons du Soleil se rapprochent et se rejoignent en un point. Ce faisceau est :",
          "options": [
            "convergent",
            "divergent",
            "parallèle",
            "polychromatique et divergent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Des rayons qui se rapprochent jusqu’à se croiser forment un faisceau convergent."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03_q5",
          "type": "mcq",
          "prompt": "Vrai ou faux : « Un faisceau lumineux provient toujours d’une source primaire de lumière. »",
          "options": [
            "Faux : il peut provenir d’une source secondaire",
            "Vrai : seule une source primaire émet des rayons",
            "Vrai : un miroir absorbe toute la lumière reçue",
            "Faux : un faisceau ne vient jamais d’une source"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un miroir éclairé renvoie un faisceau de lumière : c’est une source secondaire."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p03_q6",
          "type": "mcq",
          "prompt": "Dans un système optique, un rayon va d’un point A à un point B en suivant un certain chemin. Si l’on place la source en B, quel chemin suit la lumière pour aller vers A ?",
          "options": [
            "Exactement le même chemin, en sens inverse",
            "Un chemin forcément plus court",
            "Un chemin forcément plus long",
            "Aucun : la lumière ne peut pas revenir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le chemin suivi par la lumière est indépendant du sens de propagation."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04",
      "order": 4,
      "title": "La lumière, une onde : période, fréquence et longueur d’onde",
      "summary": "Définir période, fréquence et longueur d’onde, et utiliser N = 1 ÷ T et λ = c ÷ N.",
      "conceptExplanation": "- Nature : la lumière est une onde (électromagnétique) qui se propage à partir d’une source, même dans le vide. Elle peut être représentée par une fonction sinusoïdale du temps.\n- Période et fréquence : la période $T$ s’exprime en secondes ; la fréquence $N$ est le nombre de périodes par seconde, en hertz (Hz) : $N = \\frac{1}{T}$.\n- Longueur d’onde : $\\lambda$ est la distance parcourue par l’onde pendant une période, en mètres. Dans le vide : $\\lambda = c\\,T = \\frac{c}{N}$.\n- Célérité : $c = \\frac{d}{\\Delta t}$, distance parcourue divisée par la durée du parcours.\n- Unité pratique : le nanomètre, $1\\,\\mathrm{nm} = 10^{-9}\\,\\mathrm{m}$.",
      "keyRule": "λ = c × T = c ÷ N (λ en m, N en Hz, T en s) ; penser à convertir les nm : 1 nm = 10⁻⁹ m.",
      "formulas": [
        {
          "name": "Fréquence et période",
          "formula": "N = \\frac{1}{T}",
          "note": "N en Hz, T en s"
        },
        {
          "name": "Longueur d’onde dans le vide",
          "formula": "\\lambda = c\\,T = \\frac{c}{N}",
          "note": "c = 3 × 10⁸ m·s⁻¹ ; λ en m"
        }
      ],
      "workedExample": {
        "title": "Activité d’application : fréquence d’une radiation de 600 nm",
        "statement": "Une radiation a pour longueur d’onde $\\lambda = 600\\,\\mathrm{nm}$ dans le vide. Calculer sa fréquence.",
        "methodSteps": [
          "Convertir : λ = 600 nm = 600 × 10⁻⁹ m.",
          "N = c ÷ λ = 3 × 10⁸ ÷ (600 × 10⁻⁹) = 5 × 10¹⁴ Hz."
        ],
        "conclusion": "N = 5 × 10¹⁴ Hz : la lumière visible a des fréquences de quelques centaines de térahertz."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Nature",
          "stepTheme": "Une onde",
          "stepTitle": "La lumière est une onde",
          "paragraphText": "La lumière est une **onde** qui se propage à partir d’une source. Contrairement au son, elle n’a pas besoin de matière : elle se propage aussi **dans le vide** (la lumière du Soleil traverse l’espace).",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q1",
            "type": "mcq",
            "prompt": "Contrairement au son, la lumière peut se propager :",
            "options": [
              "dans le vide",
              "uniquement dans l’air",
              "uniquement dans les solides",
              "uniquement dans l’eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La lumière du Soleil nous parvient à travers le vide de l’espace ; le son, lui, a besoin d’un milieu matériel."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepBadge": "Fréquence",
          "stepTheme": "N = 1 ÷ T",
          "stepTitle": "Fréquence et période d’une onde",
          "paragraphText": "La **fréquence** $N$ est le nombre de périodes par seconde ; elle s’exprime en **hertz** (Hz). Elle est l’inverse de la période : $N = \\frac{1}{T}$, avec $T$ en secondes.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q2",
            "type": "mcq",
            "prompt": "Une onde lumineuse a une période $T = 2 \\times 10^{-15}\\,\\mathrm{s}$. Quelle est sa fréquence ?",
            "options": [
              "$5 \\times 10^{14}\\,\\mathrm{Hz}$",
              "$2 \\times 10^{-15}\\,\\mathrm{Hz}$",
              "$5 \\times 10^{15}\\,\\mathrm{Hz}$",
              "$2 \\times 10^{15}\\,\\mathrm{Hz}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$N = \\frac{1}{2 \\times 10^{-15}} = 0{,}5 \\times 10^{15} = 5 \\times 10^{14}\\,\\mathrm{Hz}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepBadge": "Longueur d’onde",
          "stepTheme": "Distance en une période",
          "stepTitle": "Qu’est-ce que la longueur d’onde ?",
          "paragraphText": "La **longueur d’onde** $\\lambda$ est la **distance parcourue par l’onde pendant une période**. Elle s’exprime en mètres (souvent en nanomètres pour la lumière).",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q3",
            "type": "mcq",
            "prompt": "Qu’appelle-t-on longueur d’onde λ d’une onde lumineuse ?",
            "options": [
              "La distance parcourue par l’onde pendant une période",
              "La durée d’une période de l’onde",
              "Le nombre de périodes par seconde",
              "La distance entre la source et le récepteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "λ est une distance : celle que parcourt l’onde pendant une période T."
          },
          "visualSchema": {
            "type": "geometry_svg",
            "title": "Longueur d’onde λ",
            "caption": "λ est la distance parcourue par l’onde pendant une période T : λ = c × T = c ÷ N.",
            "svgContent": "<svg viewBox=\"0 0 390 150\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\" font-family=\"sans-serif\">\n  <defs><marker id=\"p11-l1\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#1d4ed8\"/></marker><marker id=\"p11-l2\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#1d4ed8\"/></marker></defs>\n  <line x1=\"15\" y1=\"85\" x2=\"380\" y2=\"85\" stroke=\"#94a3b8\"/>\n  <polyline points=\"20,85.0 23,79.9 26,74.9 29,70.1 32,65.5 35,61.3 38,57.5 41,54.3 44,51.5 47,49.4 50,48.0 53,47.2 56,47.0 59,47.6 62,48.9 65,50.8 68,53.3 71,56.4 74,60.0 77,64.1 80,68.5 83,73.3 86,78.2 89,83.3 92,88.4 95,93.5 98,98.4 101,103.0 104,107.3 107,111.3 110,114.7 113,117.6 116,119.9 119,121.6 122,122.7 125,123.0 128,122.7 131,121.6 134,119.9 137,117.6 140,114.7 143,111.3 146,107.3 149,103.0 152,98.4 155,93.5 158,88.4 161,83.3 164,78.2 167,73.3 170,68.5 173,64.1 176,60.0 179,56.4 182,53.3 185,50.8 188,48.9 191,47.6 194,47.0 197,47.2 200,48.0 203,49.4 206,51.5 209,54.3 212,57.5 215,61.3 218,65.5 221,70.1 224,74.9 227,79.9 230,85.0 233,90.1 236,95.1 239,99.9 242,104.5 245,108.7 248,112.5 251,115.7 254,118.5 257,120.6 260,122.0 263,122.8 266,123.0 269,122.4 272,121.1 275,119.2 278,116.7 281,113.6 284,110.0 287,105.9 290,101.5 293,96.7 296,91.8 299,86.7 302,81.6 305,76.5 308,71.6 311,67.0 314,62.7 317,58.7 320,55.3 323,52.4 326,50.1 329,48.4 332,47.3 335,47.0 338,47.3 341,48.4 344,50.1 347,52.4 350,55.3 353,58.7 356,62.7 359,67.0 362,71.6 365,76.5 368,81.6\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.2\"/>\n  <line x1=\"55\" y1=\"38\" x2=\"55\" y2=\"50\" stroke=\"#1e293b\" stroke-dasharray=\"2 2\"/><line x1=\"195\" y1=\"38\" x2=\"195\" y2=\"50\" stroke=\"#1e293b\" stroke-dasharray=\"2 2\"/>\n  <line x1=\"125\" y1=\"30\" x2=\"58\" y2=\"30\" stroke=\"#1d4ed8\" stroke-width=\"2\" marker-end=\"url(#p11-l1)\"/>\n  <line x1=\"125\" y1=\"30\" x2=\"192\" y2=\"30\" stroke=\"#1d4ed8\" stroke-width=\"2\" marker-end=\"url(#p11-l2)\"/>\n  <text x=\"119\" y=\"22\" font-size=\"15\" font-weight=\"bold\" fill=\"#1d4ed8\">λ</text>\n  <text x=\"200\" y=\"145\" font-size=\"10\" fill=\"#334155\" text-anchor=\"middle\">distance parcourue →</text>\n</svg>"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "λ = c ÷ N",
          "stepTheme": "Calcul de λ",
          "stepTitle": "Calculer une longueur d’onde dans le vide",
          "paragraphText": "Dans le vide, $\\lambda = c\\,T = \\frac{c}{N}$. On obtient $\\lambda$ en mètres, puis on convertit en nanomètres ($1\\,\\mathrm{nm} = 10^{-9}$ m).",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q4",
            "type": "mcq",
            "prompt": "Une radiation lumineuse a une fréquence $N = 5 \\times 10^{14}\\,\\mathrm{Hz}$ (avec $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ dans le vide). Quelle est sa longueur d’onde dans le vide ?",
            "options": [
              "600 nm",
              "1,67 nm",
              "600 m",
              "6 nm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\lambda = \\frac{3 \\times 10^{8}}{5 \\times 10^{14}} = 6 \\times 10^{-7}\\,\\mathrm{m} = 600\\,\\mathrm{nm}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "N = c ÷ λ",
          "stepTheme": "Calcul de N",
          "stepTitle": "Calculer une fréquence à partir de λ",
          "paragraphText": "À l’inverse, $N = \\frac{c}{\\lambda}$, avec $\\lambda$ obligatoirement en **mètres** : 600 nm = $600 \\times 10^{-9}$ m.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q5",
            "type": "mcq",
            "prompt": "Une radiation a pour longueur d’onde $\\lambda = 600\\,\\mathrm{nm}$ dans le vide (avec $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$). Quelle est sa fréquence ?",
            "options": [
              "$5 \\times 10^{14}\\,\\mathrm{Hz}$",
              "$5 \\times 10^{5}\\,\\mathrm{Hz}$",
              "$1{,}8 \\times 10^{11}\\,\\mathrm{Hz}$",
              "$2 \\times 10^{-15}\\,\\mathrm{Hz}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$N = \\frac{3 \\times 10^{8}}{600 \\times 10^{-9}} = 5 \\times 10^{14}\\,\\mathrm{Hz}$ (5 × 10⁵ Hz : nanomètres non convertis)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepBadge": "Conversion des nm",
          "stepTheme": "Laser de 630 nm",
          "stepTitle": "Ne pas oublier de convertir les nanomètres",
          "paragraphText": "Oublier la conversion $1\\,\\mathrm{nm} = 10^{-9}$ m donne une fréquence un milliard de fois trop petite. Pour un laser de 630 nm : $N = \\frac{3 \\times 10^{8}}{630 \\times 10^{-9}} \\approx 4{,}8 \\times 10^{14}$ Hz (le corrigé officiel tronque à 4,7 × 10¹⁴ Hz).",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q6",
            "type": "mcq",
            "prompt": "Un laser émet une lumière de longueur d’onde $\\lambda_0 = 630\\,\\mathrm{nm}$ dans le vide ($c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$). Quelle est la fréquence de cette lumière ?",
            "options": [
              "$\\approx 4{,}8 \\times 10^{14}\\,\\mathrm{Hz}$",
              "$\\approx 4{,}8 \\times 10^{5}\\,\\mathrm{Hz}$",
              "$\\approx 1{,}9 \\times 10^{2}\\,\\mathrm{Hz}$",
              "$\\approx 2{,}1 \\times 10^{-15}\\,\\mathrm{Hz}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$N = \\frac{3 \\times 10^{8}}{630 \\times 10^{-9}} \\approx 4{,}76 \\times 10^{14} \\approx 4{,}8 \\times 10^{14}\\,\\mathrm{Hz}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepBadge": "λ = c × T",
          "stepTheme": "Vrai ou faux",
          "stepTitle": "Longueur d’onde, célérité et période",
          "paragraphText": "Pendant une période $T$, l’onde avance de $c \\times T$ : c’est exactement sa longueur d’onde. Donc $\\lambda = c \\times T$, et $\\lambda$ s’exprime en mètres.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q7",
            "type": "mcq",
            "prompt": "Vrai ou faux : « L’expression de la longueur d’onde est $\\lambda = c \\times T$ et elle s’exprime en mètre. »",
            "options": [
              "Vrai",
              "Faux : λ = c ÷ T",
              "Faux : λ s’exprime en hertz",
              "Faux : λ s’exprime en secondes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\lambda = c\\,T = \\frac{c}{N}$, en mètres : l’affirmation est vraie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q1",
          "type": "mcq",
          "prompt": "Contrairement au son, la lumière peut se propager :",
          "options": [
            "dans le vide",
            "uniquement dans l’air",
            "uniquement dans les solides",
            "uniquement dans l’eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La lumière du Soleil nous parvient à travers le vide de l’espace ; le son, lui, a besoin d’un milieu matériel."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q2",
          "type": "mcq",
          "prompt": "Une onde lumineuse a une période $T = 2 \\times 10^{-15}\\,\\mathrm{s}$. Quelle est sa fréquence ?",
          "options": [
            "$5 \\times 10^{14}\\,\\mathrm{Hz}$",
            "$2 \\times 10^{-15}\\,\\mathrm{Hz}$",
            "$5 \\times 10^{15}\\,\\mathrm{Hz}$",
            "$2 \\times 10^{15}\\,\\mathrm{Hz}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$N = \\frac{1}{2 \\times 10^{-15}} = 0{,}5 \\times 10^{15} = 5 \\times 10^{14}\\,\\mathrm{Hz}$."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q3",
          "type": "mcq",
          "prompt": "Qu’appelle-t-on longueur d’onde λ d’une onde lumineuse ?",
          "options": [
            "La distance parcourue par l’onde pendant une période",
            "La durée d’une période de l’onde",
            "Le nombre de périodes par seconde",
            "La distance entre la source et le récepteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "λ est une distance : celle que parcourt l’onde pendant une période T."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q4",
          "type": "mcq",
          "prompt": "Une radiation lumineuse a une fréquence $N = 5 \\times 10^{14}\\,\\mathrm{Hz}$ (avec $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ dans le vide). Quelle est sa longueur d’onde dans le vide ?",
          "options": [
            "600 nm",
            "1,67 nm",
            "600 m",
            "6 nm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\lambda = \\frac{3 \\times 10^{8}}{5 \\times 10^{14}} = 6 \\times 10^{-7}\\,\\mathrm{m} = 600\\,\\mathrm{nm}$."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q5",
          "type": "mcq",
          "prompt": "Une radiation a pour longueur d’onde $\\lambda = 600\\,\\mathrm{nm}$ dans le vide (avec $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$). Quelle est sa fréquence ?",
          "options": [
            "$5 \\times 10^{14}\\,\\mathrm{Hz}$",
            "$5 \\times 10^{5}\\,\\mathrm{Hz}$",
            "$1{,}8 \\times 10^{11}\\,\\mathrm{Hz}$",
            "$2 \\times 10^{-15}\\,\\mathrm{Hz}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$N = \\frac{3 \\times 10^{8}}{600 \\times 10^{-9}} = 5 \\times 10^{14}\\,\\mathrm{Hz}$ (5 × 10⁵ Hz : nanomètres non convertis)."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q6",
          "type": "mcq",
          "prompt": "Un laser émet une lumière de longueur d’onde $\\lambda_0 = 630\\,\\mathrm{nm}$ dans le vide ($c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$). Quelle est la fréquence de cette lumière ?",
          "options": [
            "$\\approx 4{,}8 \\times 10^{14}\\,\\mathrm{Hz}$",
            "$\\approx 4{,}8 \\times 10^{5}\\,\\mathrm{Hz}$",
            "$\\approx 1{,}9 \\times 10^{2}\\,\\mathrm{Hz}$",
            "$\\approx 2{,}1 \\times 10^{-15}\\,\\mathrm{Hz}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$N = \\frac{3 \\times 10^{8}}{630 \\times 10^{-9}} \\approx 4{,}76 \\times 10^{14} \\approx 4{,}8 \\times 10^{14}\\,\\mathrm{Hz}$."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p04_q7",
          "type": "mcq",
          "prompt": "Vrai ou faux : « L’expression de la longueur d’onde est $\\lambda = c \\times T$ et elle s’exprime en mètre. »",
          "options": [
            "Vrai",
            "Faux : λ = c ÷ T",
            "Faux : λ s’exprime en hertz",
            "Faux : λ s’exprime en secondes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\lambda = c\\,T = \\frac{c}{N}$, en mètres : l’affirmation est vraie."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05",
      "order": 5,
      "title": "Lumière monochromatique, couleurs et changement de milieu",
      "summary": "Relier couleur et longueur d’onde, distinguer lumière monochromatique et polychromatique, calculer λ et v dans un milieu d’indice n.",
      "conceptExplanation": "- Lumière monochromatique : lumière d’une seule couleur, caractérisée par une seule longueur d’onde $\\lambda$ (exemple : un laser).\n- Lumière polychromatique : mélange de plusieurs radiations ; la lumière blanche est polychromatique.\n- Domaine visible (dans le vide) : de 400 nm environ (violet) jusqu’au rouge : violet 400 à 450 nm, bleu 450 à 500 nm, vert 500 à 570 nm, jaune 570 à 590 nm, orange 590 à 610 nm, rouge 610 à 750 nm. En dessous : ultraviolet (UV) ; au-delà du rouge : infrarouge (IR).\n- Changement de milieu : la fréquence ne change pas, mais la vitesse et la longueur d’onde diminuent : $v = \\frac{c}{n}$ et $\\lambda = \\frac{\\lambda_0}{n}$.\n- Plus la longueur d’onde est courte, plus l’énergie transportée est grande (les rayons X transportent plus d’énergie que les micro-ondes).\n- Corrections du document : une lumière de 600 nm n’est pas bleue mais orange (590 à 610 nm) ; dans la situation d’évaluation, l’alcool a pour indice 1,36 (1,33 est l’indice de l’eau) et $\\lambda = \\frac{630}{1{,}36} \\approx 463$ nm (le corrigé écrit « 1,6 » par erreur) ; enfin, la lumière blanche est bien polychromatique.",
      "keyRule": "Une seule longueur d’onde = monochromatique. Dans un milieu d’indice n : N ne change pas, v = c ÷ n et λ = λ₀ ÷ n.",
      "formulas": [
        {
          "name": "Dans un milieu d’indice n",
          "formula": "v = \\frac{c}{n} \\qquad \\lambda = \\frac{\\lambda_0}{n}",
          "note": "λ₀ : longueur d’onde dans le vide ; la fréquence ne change pas"
        }
      ],
      "workedExample": {
        "title": "Situation d’évaluation corrigée : laser dans l’alcool",
        "statement": "Un laser émet une lumière monochromatique de longueur d’onde $\\lambda_0 = 630\\,\\mathrm{nm}$ dans le vide et éclaire de l’alcool d’indice $n = 1{,}36$ ($c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$). Calculer la fréquence, la vitesse et la longueur d’onde dans l’alcool.",
        "methodSteps": [
          "N = c ÷ λ₀ = 3 × 10⁸ ÷ (630 × 10⁻⁹) ≈ 4,8 × 10¹⁴ Hz.",
          "v = c ÷ n = 3 × 10⁸ ÷ 1,36 ≈ 2,2 × 10⁸ m/s.",
          "λ = λ₀ ÷ n = 630 ÷ 1,36 ≈ 463 nm.",
          "L’énoncé officiel écrit n = 1,33 et le corrigé divise par « 1,6 » : seule la valeur 1,36 donne les résultats annoncés."
        ],
        "conclusion": "Dans l’alcool, la lumière du laser garde sa fréquence mais va moins vite et a une longueur d’onde plus courte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepBadge": "Monochromatique",
          "stepTheme": "Une seule λ",
          "stepTitle": "Qu’est-ce qu’une lumière monochromatique ?",
          "paragraphText": "Une **lumière monochromatique** est constituée d’**une seule couleur**, caractérisée par **une seule longueur d’onde** $\\lambda$. La lumière d’un laser en est un exemple.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q1",
            "type": "mcq",
            "prompt": "Un laser émet une lumière d’une seule couleur, caractérisée par une seule longueur d’onde. Comment qualifie-t-on cette lumière ?",
            "options": [
              "Monochromatique",
              "Polychromatique",
              "Blanche",
              "Infrarouge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une seule couleur, une seule longueur d’onde : la lumière est monochromatique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepBadge": "Couleurs",
          "stepTheme": "Spectre visible",
          "stepTitle": "À chaque longueur d’onde sa couleur",
          "paragraphText": "Dans le vide, chaque couleur correspond à un intervalle de longueurs d’onde : violet 400 à 450 nm, bleu 450 à 500 nm, vert 500 à 570 nm, jaune 570 à 590 nm, orange 590 à 610 nm, rouge 610 à 750 nm.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q2",
            "type": "mcq",
            "prompt": "Dans le vide, une radiation de longueur d’onde 520 nm a quelle couleur (violet 400–450 nm, bleu 450–500 nm, vert 500–570 nm, jaune 570–590 nm, orange 590–610 nm, rouge 610–750 nm) ?",
            "options": [
              "Vert",
              "Bleu",
              "Rouge",
              "Violet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "520 nm est entre 500 et 570 nm : c’est du vert."
          },
          "visualSchema": {
            "type": "geometry_svg",
            "title": "Le domaine visible (longueurs d’onde dans le vide)",
            "caption": "Chaque couleur correspond à un intervalle de longueurs d’onde ; en dessous de 400 nm : ultraviolet, au-delà du rouge : infrarouge.",
            "svgContent": "<svg viewBox=\"0 0 390 115\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full max-w-md mx-auto\" font-family=\"sans-serif\">\n  <rect x=\"30.0\" y=\"40\" width=\"42.5\" height=\"22\" fill=\"#7c3aed\"/><rect x=\"72.5\" y=\"40\" width=\"42.5\" height=\"22\" fill=\"#2563eb\"/><rect x=\"115.0\" y=\"40\" width=\"59.5\" height=\"22\" fill=\"#16a34a\"/><rect x=\"174.5\" y=\"40\" width=\"17.0\" height=\"22\" fill=\"#facc15\"/><rect x=\"191.5\" y=\"40\" width=\"17.0\" height=\"22\" fill=\"#f97316\"/><rect x=\"208.5\" y=\"40\" width=\"119.0\" height=\"22\" fill=\"#dc2626\"/>\n  <rect x=\"327.5\" y=\"40\" width=\"42.5\" height=\"22\" fill=\"#e2e8f0\" stroke=\"#94a3b8\"/>\n  <line x1=\"10\" y1=\"62\" x2=\"382\" y2=\"62\" stroke=\"#1e293b\"/>\n  <g font-size=\"9\" fill=\"#1e293b\" text-anchor=\"middle\">\n    <text x=\"30.0\" y=\"34\">400</text><text x=\"72.5\" y=\"34\">450</text><text x=\"115.0\" y=\"34\">500</text>\n    <text x=\"174.5\" y=\"24\">570</text><text x=\"191.5\" y=\"34\">590</text><text x=\"208.5\" y=\"24\">610</text>\n    <text x=\"327.5\" y=\"34\">750</text><text x=\"370.0\" y=\"34\">800 nm</text>\n  </g>\n  <g font-size=\"10\" font-weight=\"bold\" fill=\"#1e293b\" text-anchor=\"middle\">\n    <text x=\"51.3\" y=\"78\">violet</text><text x=\"93.8\" y=\"78\">bleu</text><text x=\"144.8\" y=\"78\">vert</text>\n    <text x=\"183.0\" y=\"92\">jaune</text><text x=\"200.0\" y=\"106\">orange</text><text x=\"268.0\" y=\"78\">rouge</text>\n    <text x=\"14\" y=\"56\" fill=\"#475569\">UV</text><text x=\"348.8\" y=\"56\" fill=\"#475569\">IR</text>\n  </g>\n</svg>"
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepBadge": "600 nm",
          "stepTheme": "Correction du document",
          "stepTitle": "Une lumière de 600 nm n’est pas bleue",
          "paragraphText": "Le document appelle « lumière bleue » une radiation de 600 nm. D’après le spectre du même document (orange de 590 à 610 nm), 600 nm est une lumière **orange** ; le bleu se situe entre 450 et 500 nm.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q3",
            "type": "mcq",
            "prompt": "Un document affirme : « la lumière bleue a pour longueur d’onde 600 nm dans le vide ». D’après le spectre visible (bleu 450–500 nm, jaune 570–590 nm, orange 590–610 nm, rouge 610–750 nm), quelle est en réalité la couleur d’une radiation de 600 nm ?",
            "options": [
              "Orange",
              "Bleu",
              "Violet",
              "Infrarouge"
            ],
            "correctAnswerIndex": 0,
            "explanation": "600 nm est compris entre 590 et 610 nm : la radiation est orange."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepBadge": "Lumière blanche",
          "stepTheme": "Correction du corrigé",
          "stepTitle": "La lumière blanche est polychromatique",
          "paragraphText": "La lumière blanche est un **mélange** de radiations de longueurs d’onde différentes (le prisme la décompose en arc-en-ciel) : elle est **polychromatique**. Le corrigé de l’exercice 1 la marque « faux » : c’est une erreur.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q4",
            "type": "mcq",
            "prompt": "Vrai ou faux : « La lumière blanche est une lumière polychromatique. »",
            "options": [
              "Vrai : c’est un mélange de radiations de différentes couleurs",
              "Faux : elle ne contient qu’une seule radiation",
              "Faux : elle est monochromatique comme un laser",
              "Vrai : mais seulement dans le vide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un prisme décompose la lumière blanche en plusieurs couleurs : elle est polychromatique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepBadge": "λ = λ₀ ÷ n",
          "stepTheme": "Changement de milieu",
          "stepTitle": "Longueur d’onde dans un milieu transparent",
          "paragraphText": "En entrant dans un milieu d’indice $n$, la lumière garde sa **fréquence**, mais sa vitesse et sa longueur d’onde sont divisées par $n$ : $\\lambda = \\frac{\\lambda_0}{n}$.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q5",
            "type": "mcq",
            "prompt": "Une radiation de longueur d’onde $\\lambda_0 = 600\\,\\mathrm{nm}$ dans le vide pénètre dans de l’alcool d’indice $n = 1{,}36$. Quelle est sa longueur d’onde dans l’alcool ?",
            "options": [
              "≈ 441 nm",
              "≈ 816 nm",
              "600 nm",
              "≈ 4,41 nm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\lambda = \\frac{600}{1{,}36} \\approx 441\\,\\mathrm{nm}$ (816 nm : multiplication au lieu de division)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepBadge": "Laser dans l’alcool",
          "stepTheme": "Vitesse",
          "stepTitle": "Vitesse de la lumière du laser dans l’alcool",
          "paragraphText": "Dans l’alcool d’indice 1,36, la lumière du laser va à $v = \\frac{c}{n}$. Attention : l’énoncé officiel donne « n = 1,33 », qui est l’indice de l’eau ; le corrigé utilise 1,36, la bonne valeur pour l’alcool.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q6",
            "type": "mcq",
            "prompt": "Un laser éclaire de l’alcool d’indice $n = 1{,}36$ ($c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ dans le vide). À quelle vitesse sa lumière se propage-t-elle dans l’alcool ?",
            "options": [
              "$\\approx 2{,}2 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
              "$\\approx 4{,}1 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
              "$3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
              "$\\approx 1{,}36 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$v = \\frac{3 \\times 10^{8}}{1{,}36} \\approx 2{,}2 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepBadge": "Laser dans l’alcool",
          "stepTheme": "Longueur d’onde",
          "stepTitle": "Longueur d’onde du laser dans l’alcool",
          "paragraphText": "Pour le laser de 630 nm dans l’alcool d’indice 1,36 : $\\lambda = \\frac{630}{1{,}36} \\approx 463$ nm. Le corrigé officiel écrit « 630 ÷ 1,6 » mais trouve bien 463 nm : le « 1,6 » est une faute de frappe pour 1,36.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q7",
            "type": "mcq",
            "prompt": "Un laser émet une lumière de longueur d’onde $\\lambda_0 = 630\\,\\mathrm{nm}$ dans le vide et éclaire de l’alcool d’indice $n = 1{,}36$. Quelle est la longueur d’onde de cette lumière dans l’alcool ?",
            "options": [
              "≈ 463 nm",
              "≈ 394 nm",
              "≈ 857 nm",
              "630 nm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\lambda = \\frac{630}{1{,}36} \\approx 463\\,\\mathrm{nm}$ (394 nm correspond à la division erronée par 1,6)."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepBadge": "Diamant",
          "stepTheme": "Indice 2,42",
          "stepTitle": "La radiation jaune du sodium dans le diamant",
          "paragraphText": "La radiation jaune du sodium a pour longueur d’onde $\\lambda_0 = 589$ nm dans le vide. Le diamant a un indice très élevé ($n = 2{,}42$) : la longueur d’onde y est fortement réduite.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q8",
            "type": "mcq",
            "prompt": "La radiation jaune du sodium a pour longueur d’onde $\\lambda_0 = 589\\,\\mathrm{nm}$ dans le vide. Quelle est sa longueur d’onde dans le diamant d’indice $n = 2{,}42$ ?",
            "options": [
              "≈ 243 nm",
              "≈ 1 425 nm",
              "589 nm",
              "≈ 24,3 nm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\lambda = \\frac{589}{2{,}42} \\approx 243\\,\\mathrm{nm}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q1",
          "type": "mcq",
          "prompt": "Un laser émet une lumière d’une seule couleur, caractérisée par une seule longueur d’onde. Comment qualifie-t-on cette lumière ?",
          "options": [
            "Monochromatique",
            "Polychromatique",
            "Blanche",
            "Infrarouge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une seule couleur, une seule longueur d’onde : la lumière est monochromatique."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q2",
          "type": "mcq",
          "prompt": "Dans le vide, une radiation de longueur d’onde 520 nm a quelle couleur (violet 400–450 nm, bleu 450–500 nm, vert 500–570 nm, jaune 570–590 nm, orange 590–610 nm, rouge 610–750 nm) ?",
          "options": [
            "Vert",
            "Bleu",
            "Rouge",
            "Violet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "520 nm est entre 500 et 570 nm : c’est du vert."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q3",
          "type": "mcq",
          "prompt": "Un document affirme : « la lumière bleue a pour longueur d’onde 600 nm dans le vide ». D’après le spectre visible (bleu 450–500 nm, jaune 570–590 nm, orange 590–610 nm, rouge 610–750 nm), quelle est en réalité la couleur d’une radiation de 600 nm ?",
          "options": [
            "Orange",
            "Bleu",
            "Violet",
            "Infrarouge"
          ],
          "correctAnswerIndex": 0,
          "explanation": "600 nm est compris entre 590 et 610 nm : la radiation est orange."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q4",
          "type": "mcq",
          "prompt": "Vrai ou faux : « La lumière blanche est une lumière polychromatique. »",
          "options": [
            "Vrai : c’est un mélange de radiations de différentes couleurs",
            "Faux : elle ne contient qu’une seule radiation",
            "Faux : elle est monochromatique comme un laser",
            "Vrai : mais seulement dans le vide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un prisme décompose la lumière blanche en plusieurs couleurs : elle est polychromatique."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q5",
          "type": "mcq",
          "prompt": "Une radiation de longueur d’onde $\\lambda_0 = 600\\,\\mathrm{nm}$ dans le vide pénètre dans de l’alcool d’indice $n = 1{,}36$. Quelle est sa longueur d’onde dans l’alcool ?",
          "options": [
            "≈ 441 nm",
            "≈ 816 nm",
            "600 nm",
            "≈ 4,41 nm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\lambda = \\frac{600}{1{,}36} \\approx 441\\,\\mathrm{nm}$ (816 nm : multiplication au lieu de division)."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q6",
          "type": "mcq",
          "prompt": "Un laser éclaire de l’alcool d’indice $n = 1{,}36$ ($c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$ dans le vide). À quelle vitesse sa lumière se propage-t-elle dans l’alcool ?",
          "options": [
            "$\\approx 2{,}2 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
            "$\\approx 4{,}1 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
            "$3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$",
            "$\\approx 1{,}36 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$v = \\frac{3 \\times 10^{8}}{1{,}36} \\approx 2{,}2 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q7",
          "type": "mcq",
          "prompt": "Un laser émet une lumière de longueur d’onde $\\lambda_0 = 630\\,\\mathrm{nm}$ dans le vide et éclaire de l’alcool d’indice $n = 1{,}36$. Quelle est la longueur d’onde de cette lumière dans l’alcool ?",
          "options": [
            "≈ 463 nm",
            "≈ 394 nm",
            "≈ 857 nm",
            "630 nm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\lambda = \\frac{630}{1{,}36} \\approx 463\\,\\mathrm{nm}$ (394 nm correspond à la division erronée par 1,6)."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p05_q8",
          "type": "mcq",
          "prompt": "La radiation jaune du sodium a pour longueur d’onde $\\lambda_0 = 589\\,\\mathrm{nm}$ dans le vide. Quelle est sa longueur d’onde dans le diamant d’indice $n = 2{,}42$ ?",
          "options": [
            "≈ 243 nm",
            "≈ 1 425 nm",
            "589 nm",
            "≈ 24,3 nm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\lambda = \\frac{589}{2{,}42} \\approx 243\\,\\mathrm{nm}$."
        }
      ]
    },
    {
      "id": "premiere_c_physique_p11_introduction_optique_geometrique_p06",
      "order": 6,
      "title": "Lumière et son : l’éclair, le tonnerre et le feu d’artifice",
      "summary": "Comparer la vitesse de la lumière et celle du son pour calculer des durées et des distances.",
      "conceptExplanation": "- La lumière ($c = 3 \\times 10^{8}$ m·s⁻¹) va près d’un million de fois plus vite que le son dans l’air (340 m·s⁻¹).\n- Durée de parcours d’une distance $D$ à la vitesse $v$ : $t = \\frac{D}{v}$. Pour un orage à 10 km, l’éclair arrive en $3{,}3 \\times 10^{-5}$ s et le tonnerre en 29,4 s, alors qu’ils sont produits en même temps.\n- Feu d’artifice : si le son de l’explosion arrive avec un retard $\\Delta t$ sur la lumière, $\\Delta t = \\frac{H}{c'} - \\frac{H}{c}$, d’où $H = \\frac{c\\,c'\\,\\Delta t}{c - c'} \\approx c'\\,\\Delta t$.\n- Dans ces situations, la source de lumière est l’éclair (ou la gerbe), et le récepteur de lumière est l’œil de l’observateur.",
      "keyRule": "t = D ÷ v : la lumière arrive presque instantanément ; le retard du son donne la distance (D ≈ 340 × Δt).",
      "formulas": [
        {
          "name": "Durée de propagation",
          "formula": "t = \\frac{D}{v}",
          "note": "D en m, v en m·s⁻¹, t en s"
        },
        {
          "name": "Altitude d’éclatement d’une fusée",
          "formula": "H = \\frac{c\\,c'\\,\\Delta t}{c - c'} \\approx c'\\,\\Delta t",
          "note": "c′ = 340 m·s⁻¹ (son) ; c = 3 × 10⁸ m·s⁻¹ (lumière)"
        }
      ],
      "workedExample": {
        "title": "Exercice 4 corrigé : altitude d’éclatement d’une fusée",
        "statement": "Le son de l’explosion d’une fusée parvient à un observateur avec un retard $\\Delta t = 0{,}2\\,\\mathrm{s}$ sur la lumière ($c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$, $c' = 340\\,\\mathrm{m\\cdot s^{-1}}$). Déterminer l’altitude $H$ d’éclatement.",
        "methodSteps": [
          "Lumière : t₁ = H ÷ c ; son : t₂ = H ÷ c′.",
          "Δt = t₂ − t₁ = H ÷ c′ − H ÷ c, donc H = c c′ Δt ÷ (c − c′).",
          "H = 3 × 10⁸ × 340 × 0,2 ÷ (3 × 10⁸ − 340) ≈ 68 m."
        ],
        "conclusion": "La fusée a éclaté à environ 68 m ; la durée de trajet de la lumière est négligeable."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepBadge": "Le tonnerre",
          "stepTheme": "t = D ÷ v",
          "stepTitle": "Combien de temps met le son du tonnerre ?",
          "paragraphText": "Le son se propage dans l’air à environ 340 m·s⁻¹. Pour parcourir une distance $D$, il met $t = \\frac{D}{v}$.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p06_q1",
            "type": "mcq",
            "prompt": "Un observateur se trouve à $D = 10\\,\\mathrm{km}$ d’un orage. Le son se propage dans l’air à $340\\,\\mathrm{m\\cdot s^{-1}}$. Au bout de combien de temps entend-il le tonnerre ?",
            "options": [
              "≈ 29,4 s",
              "≈ 2,94 s",
              "≈ 0,034 s",
              "3 400 s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$t = \\frac{10\\,000}{340} \\approx 29{,}4\\,\\mathrm{s}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepBadge": "L’éclair",
          "stepTheme": "Presque instantané",
          "stepTitle": "Combien de temps met la lumière de l’éclair ?",
          "paragraphText": "La lumière parcourt la même distance à $c = 3 \\times 10^{8}$ m·s⁻¹ : pour 10 km, la durée est de quelques centièmes de milliseconde.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p06_q2",
            "type": "mcq",
            "prompt": "Un observateur se trouve à $D = 10\\,\\mathrm{km}$ d’un orage ($c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$). Au bout de combien de temps voit-il l’éclair ?",
            "options": [
              "$\\approx 3{,}3 \\times 10^{-5}\\,\\mathrm{s}$",
              "$\\approx 3{,}3 \\times 10^{-2}\\,\\mathrm{s}$",
              "$3 \\times 10^{4}\\,\\mathrm{s}$",
              "$\\approx 29{,}4\\,\\mathrm{s}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$t = \\frac{10\\,000}{3 \\times 10^{8}} \\approx 3{,}3 \\times 10^{-5}\\,\\mathrm{s}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepBadge": "Éclair puis tonnerre",
          "stepTheme": "Vitesses très différentes",
          "stepTitle": "Pourquoi voit-on l’éclair avant d’entendre le tonnerre ?",
          "paragraphText": "L’éclair et le tonnerre sont produits **en même temps**. La lumière va près d’un million de fois plus vite que le son : elle arrive presque instantanément, le son arrive ensuite.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p06_q3",
            "type": "mcq",
            "prompt": "Pendant un orage, l’éclair et le tonnerre sont produits au même instant. Pourquoi l’observateur voit-il l’éclair avant d’entendre le tonnerre ?",
            "options": [
              "Parce que la lumière se propage beaucoup plus vite que le son",
              "Parce que l’éclair est produit avant le tonnerre",
              "Parce que le son est absorbé puis réémis par les nuages",
              "Parce que l’œil réagit plus vite que l’oreille"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Lumière : 3 × 10⁸ m/s ; son : 340 m/s. La lumière arrive bien avant le son."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepBadge": "Feu d’artifice",
          "stepTheme": "H ≈ c′ × Δt",
          "stepTitle": "Trouver l’altitude d’éclatement d’une fusée",
          "paragraphText": "Le retard du son sur la lumière vaut $\\Delta t = \\frac{H}{c'} - \\frac{H}{c}$, d’où $H = \\frac{c\\,c'\\,\\Delta t}{c - c'}$. Comme $c$ est immense devant $c'$, $H \\approx c'\\,\\Delta t$.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p06_q4",
            "type": "mcq",
            "prompt": "Une fusée de feu d’artifice éclate à la verticale d’un observateur. Le son de l’explosion lui parvient avec un retard $\\Delta t = 0{,}2\\,\\mathrm{s}$ sur la lumière (son : $340\\,\\mathrm{m\\cdot s^{-1}}$ ; lumière : $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$). À quelle altitude la fusée a-t-elle éclaté ?",
            "options": [
              "≈ 68 m",
              "≈ 1 700 m",
              "≈ 6 × 10⁷ m",
              "≈ 0,68 m"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$H = \\frac{3 \\times 10^{8} \\times 340 \\times 0{,}2}{3 \\times 10^{8} - 340} \\approx 340 \\times 0{,}2 = 68\\,\\mathrm{m}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepBadge": "Récepteur",
          "stepTheme": "L’œil, pas l’oreille",
          "stepTitle": "Quel est le récepteur de lumière ?",
          "paragraphText": "Dans la situation de l’orage, l’**œil** de l’observateur reçoit la lumière de l’éclair : c’est le récepteur de lumière. L’oreille reçoit le son, ce n’est pas un récepteur de lumière.",
          "exercise": {
            "id": "premiere_c_physique_p11_introduction_optique_geometrique_p06_q5",
            "type": "mcq",
            "prompt": "Un observateur voit l’éclair d’un orage puis entend le tonnerre. Quel est le récepteur de lumière dans cette situation ?",
            "options": [
              "L’œil de l’observateur",
              "L’oreille de l’observateur",
              "Le nuage d’orage",
              "Le tonnerre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’œil est sensible à la lumière : c’est le récepteur. L’éclair est la source."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p06_q1",
          "type": "mcq",
          "prompt": "Un observateur se trouve à $D = 10\\,\\mathrm{km}$ d’un orage. Le son se propage dans l’air à $340\\,\\mathrm{m\\cdot s^{-1}}$. Au bout de combien de temps entend-il le tonnerre ?",
          "options": [
            "≈ 29,4 s",
            "≈ 2,94 s",
            "≈ 0,034 s",
            "3 400 s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$t = \\frac{10\\,000}{340} \\approx 29{,}4\\,\\mathrm{s}$."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p06_q2",
          "type": "mcq",
          "prompt": "Un observateur se trouve à $D = 10\\,\\mathrm{km}$ d’un orage ($c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$). Au bout de combien de temps voit-il l’éclair ?",
          "options": [
            "$\\approx 3{,}3 \\times 10^{-5}\\,\\mathrm{s}$",
            "$\\approx 3{,}3 \\times 10^{-2}\\,\\mathrm{s}$",
            "$3 \\times 10^{4}\\,\\mathrm{s}$",
            "$\\approx 29{,}4\\,\\mathrm{s}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$t = \\frac{10\\,000}{3 \\times 10^{8}} \\approx 3{,}3 \\times 10^{-5}\\,\\mathrm{s}$."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p06_q3",
          "type": "mcq",
          "prompt": "Pendant un orage, l’éclair et le tonnerre sont produits au même instant. Pourquoi l’observateur voit-il l’éclair avant d’entendre le tonnerre ?",
          "options": [
            "Parce que la lumière se propage beaucoup plus vite que le son",
            "Parce que l’éclair est produit avant le tonnerre",
            "Parce que le son est absorbé puis réémis par les nuages",
            "Parce que l’œil réagit plus vite que l’oreille"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lumière : 3 × 10⁸ m/s ; son : 340 m/s. La lumière arrive bien avant le son."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p06_q4",
          "type": "mcq",
          "prompt": "Une fusée de feu d’artifice éclate à la verticale d’un observateur. Le son de l’explosion lui parvient avec un retard $\\Delta t = 0{,}2\\,\\mathrm{s}$ sur la lumière (son : $340\\,\\mathrm{m\\cdot s^{-1}}$ ; lumière : $c = 3 \\times 10^{8}\\,\\mathrm{m\\cdot s^{-1}}$). À quelle altitude la fusée a-t-elle éclaté ?",
          "options": [
            "≈ 68 m",
            "≈ 1 700 m",
            "≈ 6 × 10⁷ m",
            "≈ 0,68 m"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$H = \\frac{3 \\times 10^{8} \\times 340 \\times 0{,}2}{3 \\times 10^{8} - 340} \\approx 340 \\times 0{,}2 = 68\\,\\mathrm{m}$."
        },
        {
          "id": "premiere_c_physique_p11_introduction_optique_geometrique_p06_q5",
          "type": "mcq",
          "prompt": "Un observateur voit l’éclair d’un orage puis entend le tonnerre. Quel est le récepteur de lumière dans cette situation ?",
          "options": [
            "L’œil de l’observateur",
            "L’oreille de l’observateur",
            "Le nuage d’orage",
            "Le tonnerre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’œil est sensible à la lumière : c’est le récepteur. L’éclair est la source."
        }
      ]
    }
  ]
};
