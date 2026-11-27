import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Introduction à l'optique géométrique » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Introduction à l'optique géométrique » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const PHYSIQUE_1ERE_CD_L11_INTRODUCTION_OPTIQUE_GEOMETRIQUE: CurriculumChapter = {
  "id": "premiere_c_physique_l11_introduction_optique_geometrique",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 11,
  "title": "Leçon 11 : Introduction à l'optique géométrique",
  "summary": "La leçon définit les sources primaires et secondaires de lumière, les récepteurs et les milieux de propagation caractérisés par leur indice de réfraction, puis présente la lumière comme une onde caractérisée par sa fréquence et sa longueur d'onde.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Introduction à l'optique géométrique » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01",
      "order": 1,
      "title": "Sources et récepteurs de lumière",
      "summary": "Une source émet de la lumière (primaire si elle la produit, secondaire si elle la diffuse) ; un récepteur est sensible à la lumière reçue.",
      "conceptExplanation": "Une source de lumière est un corps ou un dispositif qui émet de la lumière.\nOn distingue les sources primaires, qui produisent la lumière qu'elles émettent (le Soleil, une lampe électrique allumée), et les sources secondaires, qui diffusent la lumière qu'elles reçoivent d'une source primaire (la Lune, une chaise, un miroir, un diamant).\nUn récepteur de lumière est un corps ou un dispositif sensible à la lumière qu'il reçoit : sous l'action de la lumière (éclairement), il subit une transformation physique ou chimique.\nExemples de récepteurs donnés par le document : l'œil, la chlorophylle, le capteur d'une caméra, la photorésistance.",
      "keyRule": "Produire sa lumière = source primaire ; la diffuser = source secondaire ; être transformé par elle = récepteur.",
      "formulas": [],
      "workedExample": {
        "title": "Le classement de l'activité d'application",
        "statement": "Classe les objets suivants : diamant, miroir, chlorophylle, Soleil, Lune, photorésistance (source primaire, source secondaire ou récepteur de lumière).",
        "methodSteps": [
          "Le Soleil produit sa propre lumière : c'est la seule source primaire de la liste.",
          "Le diamant, le miroir et la Lune ne font que diffuser la lumière reçue : ce sont des sources secondaires.",
          "La chlorophylle et la photorésistance sont transformées par la lumière reçue : ce sont des récepteurs."
        ],
        "conclusion": "C'est le tableau corrigé de l'activité d'application du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La source primaire produit sa lumière",
          "stepTheme": "La source primaire produit sa lumière",
          "stepBadge": "La source primaire produit sa lumière",
          "paragraphText": "• Source primaire de lumière : source qui produit la lumière qu'elle émet.\nLe document cite le Soleil et la lampe électrique allumée : dans les deux cas, la lumière est fabriquée par la source elle-même.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01_q1",
            "type": "mcq",
            "prompt": "Une source primaire de lumière est une source qui :",
            "options": [
              "Produit la lumière qu'elle émet",
              "Diffuse la lumière reçue",
              "Est sensible à la lumière",
              "Réfléchit toute la lumière reçue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1.1 : le Soleil et la lampe allumée produisent leur lumière."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La source secondaire diffuse la lumière reçue",
          "stepTheme": "La source secondaire diffuse la lumière reçue",
          "stepBadge": "La source secondaire diffuse la lumière reçue",
          "paragraphText": "• Source secondaire de lumière : source qui diffuse la lumière qu'elle reçoit d'une source primaire.\nLe document cite la Lune et une chaise : éclairées par le Soleil, elles renvoient une partie de cette lumière vers nos yeux.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01_q2",
            "type": "mcq",
            "prompt": "La Lune est une source secondaire de lumière parce qu'elle :",
            "options": [
              "Produit sa propre lumière",
              "Diffuse la lumière qu'elle reçoit du Soleil",
              "Est un récepteur photosensible",
              "Émet des rayons ultraviolets"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La Lune ne produit pas de lumière : elle diffuse celle du Soleil (§1.1). L'affirmation « la Lune est une source primaire » de l'exercice 1 est donc fausse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le récepteur est sensible à la lumière",
          "stepTheme": "Le récepteur est sensible à la lumière",
          "stepBadge": "Le récepteur est sensible à la lumière",
          "paragraphText": "• Récepteur de lumière : corps ou dispositif sensible à la lumière qu'il reçoit.\nSous l'action de l'éclairement, il subit une transformation physique ou chimique : c'est ce qui le distingue d'une simple surface qui diffuse.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01_q3",
            "type": "mcq",
            "prompt": "Un récepteur de lumière est un corps ou un dispositif qui :",
            "options": [
              "Produit de la lumière",
              "Diffuse la lumière reçue",
              "Est sensible à la lumière et subit une transformation sous son action",
              "Empêche la lumière de passer"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du §1.2 : la transformation (physique ou chimique) est le critère du récepteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Des récepteurs : œil, chlorophylle, photorésistance",
          "stepTheme": "Des récepteurs : œil, chlorophylle, photorésistance",
          "stepBadge": "Des récepteurs : œil, chlorophylle, photorésistance",
          "paragraphText": "Le document cite comme récepteurs l'œil, la chlorophylle et le capteur d'une caméra ; l'activité ajoute la photorésistance.\nDans l'exercice 5, le récepteur mis en jeu par l'éclair d'un orage est l'œil de l'observateur.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01_q4",
            "type": "mcq",
            "prompt": "D'après le document, lequel de ces objets est un récepteur de lumière ?",
            "options": [
              "La Lune",
              "Un miroir",
              "Une chaise éclairée",
              "La photorésistance"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La photorésistance voit sa résistance changer sous l'éclairement : c'est un récepteur. Les trois autres sont des sources secondaires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La Lune n'est pas une source primaire",
          "stepTheme": "La Lune n'est pas une source primaire",
          "stepBadge": "La Lune n'est pas une source primaire",
          "paragraphText": "Piège : la Lune brille dans le ciel, mais elle ne produit aucune lumière.\nElle diffuse la lumière du Soleil : c'est une source secondaire, comme le diamant et le miroir du tableau de l'activité.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01_q5",
            "type": "mcq",
            "prompt": "L'affirmation « La lune est une source primaire de lumière » est :",
            "options": [
              "Fausse : la Lune est une source secondaire",
              "Vraie, car elle éclaire la nuit",
              "Vraie, car elle est visible",
              "Fausse : la Lune est un récepteur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la proposition 1 de l'exercice 1 : elle est fausse, la Lune diffuse la lumière solaire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le Soleil, source primaire de l'activité",
          "stepTheme": "Le Soleil, source primaire de l'activité",
          "stepBadge": "Le Soleil, source primaire de l'activité",
          "paragraphText": "Dans le tableau de l'activité d'application, un seul objet est coché « source primaire » : le Soleil.\nTous les autres objets lumineux de la liste (diamant, miroir, Lune) ne font que diffuser sa lumière.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01_q6",
            "type": "mcq",
            "prompt": "Dans l'activité d'application, l'objet classé source primaire de lumière est :",
            "options": [
              "Le diamant",
              "Le Soleil",
              "Le miroir",
              "La Lune"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le corrigé de l'activité : le Soleil est la seule source primaire parmi les six objets."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01_q1",
          "type": "mcq",
          "prompt": "Une source primaire de lumière est une source qui :",
          "options": [
            "Produit la lumière qu'elle émet",
            "Diffuse la lumière reçue",
            "Est sensible à la lumière",
            "Réfléchit toute la lumière reçue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1.1 : le Soleil et la lampe allumée produisent leur lumière."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01_q2",
          "type": "mcq",
          "prompt": "La Lune est une source secondaire de lumière parce qu'elle :",
          "options": [
            "Produit sa propre lumière",
            "Diffuse la lumière qu'elle reçoit du Soleil",
            "Est un récepteur photosensible",
            "Émet des rayons ultraviolets"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La Lune ne produit pas de lumière : elle diffuse celle du Soleil (§1.1). L'affirmation « la Lune est une source primaire » de l'exercice 1 est donc fausse."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01_q3",
          "type": "mcq",
          "prompt": "Un récepteur de lumière est un corps ou un dispositif qui :",
          "options": [
            "Produit de la lumière",
            "Diffuse la lumière reçue",
            "Est sensible à la lumière et subit une transformation sous son action",
            "Empêche la lumière de passer"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du §1.2 : la transformation (physique ou chimique) est le critère du récepteur."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01_q4",
          "type": "mcq",
          "prompt": "D'après le document, lequel de ces objets est un récepteur de lumière ?",
          "options": [
            "La Lune",
            "Un miroir",
            "Une chaise éclairée",
            "La photorésistance"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La photorésistance voit sa résistance changer sous l'éclairement : c'est un récepteur. Les trois autres sont des sources secondaires."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01_q5",
          "type": "mcq",
          "prompt": "L'affirmation « La lune est une source primaire de lumière » est :",
          "options": [
            "Fausse : la Lune est une source secondaire",
            "Vraie, car elle éclaire la nuit",
            "Vraie, car elle est visible",
            "Fausse : la Lune est un récepteur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la proposition 1 de l'exercice 1 : elle est fausse, la Lune diffuse la lumière solaire."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p01_q6",
          "type": "mcq",
          "prompt": "Dans l'activité d'application, l'objet classé source primaire de lumière est :",
          "options": [
            "Le diamant",
            "Le Soleil",
            "Le miroir",
            "La Lune"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le corrigé de l'activité : le Soleil est la seule source primaire parmi les six objets."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02",
      "order": 2,
      "title": "Milieu de propagation, indice de réfraction et célérité",
      "summary": "Un milieu transparent ou translucide laisse passer la lumière ; il est caractérisé par son indice n, lié aux célérités par n = c/v.",
      "conceptExplanation": "Un milieu de propagation de la lumière est un milieu transparent ou translucide qui laisse passer la lumière : le verre, l'eau, l'alcool, l'air, le vide.\nLe milieu peut être homogène ou non, et tout milieu de propagation est caractérisé par une grandeur appelée indice de réfraction, noté $n$.\nLa célérité de la lumière est sa vitesse de propagation : dans le vide, $c = 3 \\times 10^8$ m/s ; dans l'eau, $v = 2{,}25 \\times 10^8$ m/s.\nL'indice est lié à la vitesse $v$ dans le milieu par la relation $n = \\frac{c}{v}$. Le document donne les indices usuels : air $1{,}00$, eau $1{,}33$, verre de $1{,}50$ à $1{,}70$, alcool $1{,}36$.",
      "keyRule": "Indice et célérités sont liés par $n = \\frac{c}{v}$ : plus l'indice est grand, plus la lumière va lentement dans le milieu.",
      "formulas": [
        {
          "name": "Indice de réfraction",
          "formula": "n = \\frac{c}{v}",
          "note": "c : célérité dans le vide ; v : célérité dans le milieu."
        }
      ],
      "workedExample": {
        "title": "La vitesse de la lumière dans le verre",
        "statement": "Calcule la vitesse de la lumière dans le verre d'indice $n = 1{,}6$, sachant que la célérité dans le vide vaut $c = 3 \\times 10^8$ m/s.",
        "methodSteps": [
          "On part de la relation $n = \\frac{c}{v}$, donc $v = \\frac{c}{n}$.",
          "Application numérique : $v = \\frac{3 \\times 10^8}{1{,}6}$.",
          "On obtient $v = 1{,}875 \\times 10^8$ m/s."
        ],
        "conclusion": "C'est l'activité d'application du §1.4 ; le corrigé du document arrondit le résultat à $1{,}8 \\times 10^8$ m/s."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le milieu de propagation laisse passer la lumière",
          "stepTheme": "Le milieu de propagation laisse passer la lumière",
          "stepBadge": "Le milieu de propagation laisse passer la lumière",
          "paragraphText": "• Milieu de propagation : milieu transparent ou translucide qui laisse passer la lumière.\nLe document cite le verre, l'eau, l'alcool, l'air et le vide ; un tel milieu peut être homogène ou non.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02_q1",
            "type": "mcq",
            "prompt": "Un milieu de propagation de la lumière est un milieu qui :",
            "options": [
              "Est transparent ou translucide et laisse passer la lumière",
              "Est toujours opaque",
              "Produit de la lumière",
              "Est nécessairement un gaz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1.3, avec les exemples du verre, de l'eau, de l'alcool, de l'air et du vide."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Chaque milieu a son indice de réfraction n",
          "stepTheme": "Chaque milieu a son indice de réfraction n",
          "stepBadge": "Chaque milieu a son indice de réfraction n",
          "paragraphText": "Tout milieu de propagation est caractérisé par son indice de réfraction, noté $n$.\nLe tableau du document donne : air $1{,}00$ ; eau $1{,}33$ ; alcool $1{,}36$ ; verre entre $1{,}50$ et $1{,}70$.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02_q2",
            "type": "mcq",
            "prompt": "D'après le tableau du document, l'indice de réfraction de l'eau vaut :",
            "options": [
              "$1{,}00$",
              "$1{,}50$",
              "$1{,}33$",
              "$1{,}36$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau du §1.4 donne $n = 1{,}33$ pour l'eau ; $1{,}36$ est l'indice de l'alcool et $1{,}00$ celui de l'air."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La célérité : la vitesse de propagation",
          "stepTheme": "La célérité : la vitesse de propagation",
          "stepBadge": "La célérité : la vitesse de propagation",
          "paragraphText": "• Célérité de la lumière : vitesse de propagation de la lumière.\nDans le vide, elle vaut $c = 3 \\times 10^8$ m/s ; dans l'eau, le document donne $v = 2{,}25 \\times 10^8$ m/s : la lumière y va moins vite que dans le vide.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02_q3",
            "type": "mcq",
            "prompt": "La célérité de la lumière dans le vide vaut :",
            "options": [
              "$3 \\times 10^8$ m/s",
              "$2{,}25 \\times 10^8$ m/s",
              "$340$ m/s",
              "$1{,}5 \\times 10^8$ m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la valeur du §1.4 ; $2{,}25 \\times 10^8$ m/s est la célérité dans l'eau et $340$ m/s la célérité du son dans l'air."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Relier l'indice aux célérités : n = c/v",
          "stepTheme": "Relier l'indice aux célérités : n = c/v",
          "stepBadge": "Relier l'indice aux célérités : n = c/v",
          "paragraphText": "La relation du document est $n = \\frac{c}{v}$ : l'indice est le rapport de la célérité dans le vide à la célérité dans le milieu.\nOn en tire, selon la grandeur cherchée, $v = \\frac{c}{n}$ ou $c = n \\times v$.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02_q4",
            "type": "mcq",
            "prompt": "L'indice de réfraction d'un milieu est lié aux célérités par la relation :",
            "options": [
              "$n = \\frac{v}{c}$",
              "$n = c \\times v$",
              "$n = \\frac{c}{v}$",
              "$n = c - v$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la remarque du §1.4 : $n = \\frac{c}{v}$, d'où $v = \\frac{c}{n}$ pour l'activité sur le verre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Dans le verre d'indice 1,6 : v = 1,875×10⁸ m/s",
          "stepTheme": "Dans le verre d'indice 1,6 : v = 1,875×10⁸ m/s",
          "stepBadge": "Dans le verre d'indice 1,6 : v = 1,875×10⁸ m/s",
          "paragraphText": "Pour le verre de l'activité ($n = 1{,}6$) : $v = \\frac{c}{n} = \\frac{3 \\times 10^8}{1{,}6}$.\nLe calcul donne $v = 1{,}875 \\times 10^8$ m/s, valeur exacte que le corrigé du document arrondit à $1{,}8 \\times 10^8$ m/s.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02_q5",
            "type": "mcq",
            "prompt": "La vitesse exacte de la lumière dans le verre d'indice $1{,}6$ vaut :",
            "options": [
              "$1{,}875 \\times 10^8$ m/s",
              "$3 \\times 10^8$ m/s",
              "$4{,}8 \\times 10^8$ m/s",
              "$1{,}33 \\times 10^8$ m/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On divise la célérité dans le vide par l'indice : $3 \\times 10^8$ divisé par $1{,}6$ donne $1{,}875 \\times 10^8$ m/s."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un grand indice signifie une lumière plus lente",
          "stepTheme": "Un grand indice signifie une lumière plus lente",
          "stepBadge": "Un grand indice signifie une lumière plus lente",
          "paragraphText": "Piège : l'indice n'est pas une vitesse. Comme $v = \\frac{c}{n}$, un indice élevé correspond à une célérité faible dans le milieu.\nAinsi, avec $n = 1{,}33$, la lumière va moins vite dans l'eau ($2{,}25 \\times 10^8$ m/s) que dans le vide.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02_q6",
            "type": "mcq",
            "prompt": "Quand l'indice de réfraction d'un milieu augmente, la vitesse de la lumière dans ce milieu :",
            "options": [
              "Augmente",
              "Reste égale à $c$",
              "Dépasse $c$",
              "Diminue, car $v = \\frac{c}{n}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "D'après $n = \\frac{c}{v}$, $v$ et $n$ varient en sens inverse : le verre ($n$ jusqu'à $1{,}70$) ralentit plus la lumière que l'eau ($1{,}33$)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02_q1",
          "type": "mcq",
          "prompt": "Un milieu de propagation de la lumière est un milieu qui :",
          "options": [
            "Est transparent ou translucide et laisse passer la lumière",
            "Est toujours opaque",
            "Produit de la lumière",
            "Est nécessairement un gaz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1.3, avec les exemples du verre, de l'eau, de l'alcool, de l'air et du vide."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02_q2",
          "type": "mcq",
          "prompt": "D'après le tableau du document, l'indice de réfraction de l'eau vaut :",
          "options": [
            "$1{,}00$",
            "$1{,}50$",
            "$1{,}33$",
            "$1{,}36$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau du §1.4 donne $n = 1{,}33$ pour l'eau ; $1{,}36$ est l'indice de l'alcool et $1{,}00$ celui de l'air."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02_q3",
          "type": "mcq",
          "prompt": "La célérité de la lumière dans le vide vaut :",
          "options": [
            "$3 \\times 10^8$ m/s",
            "$2{,}25 \\times 10^8$ m/s",
            "$340$ m/s",
            "$1{,}5 \\times 10^8$ m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la valeur du §1.4 ; $2{,}25 \\times 10^8$ m/s est la célérité dans l'eau et $340$ m/s la célérité du son dans l'air."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02_q4",
          "type": "mcq",
          "prompt": "L'indice de réfraction d'un milieu est lié aux célérités par la relation :",
          "options": [
            "$n = \\frac{v}{c}$",
            "$n = c \\times v$",
            "$n = \\frac{c}{v}$",
            "$n = c - v$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la remarque du §1.4 : $n = \\frac{c}{v}$, d'où $v = \\frac{c}{n}$ pour l'activité sur le verre."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02_q5",
          "type": "mcq",
          "prompt": "La vitesse exacte de la lumière dans le verre d'indice $1{,}6$ vaut :",
          "options": [
            "$1{,}875 \\times 10^8$ m/s",
            "$3 \\times 10^8$ m/s",
            "$4{,}8 \\times 10^8$ m/s",
            "$1{,}33 \\times 10^8$ m/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On divise la célérité dans le vide par l'indice : $3 \\times 10^8$ divisé par $1{,}6$ donne $1{,}875 \\times 10^8$ m/s."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p02_q6",
          "type": "mcq",
          "prompt": "Quand l'indice de réfraction d'un milieu augmente, la vitesse de la lumière dans ce milieu :",
          "options": [
            "Augmente",
            "Reste égale à $c$",
            "Dépasse $c$",
            "Diminue, car $v = \\frac{c}{n}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "D'après $n = \\frac{c}{v}$, $v$ et $n$ varient en sens inverse : le verre ($n$ jusqu'à $1{,}70$) ralentit plus la lumière que l'eau ($1{,}33$)."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03",
      "order": 3,
      "title": "Rayon lumineux et faisceaux lumineux",
      "summary": "Dans un milieu homogène, la lumière se propage en ligne droite : son trajet est le rayon lumineux, et un ensemble de rayons forme un faisceau.",
      "conceptExplanation": "Dans un milieu homogène, la lumière se propage en ligne droite.\nLe trajet suivi est représenté par une demi-droite appelée rayon lumineux, et le sens de propagation est représenté par une flèche sur ce rayon.\nUn faisceau lumineux est un ensemble de rayons lumineux provenant d'une même source.\nLe document distingue trois sortes de faisceaux : les faisceaux parallèles, les faisceaux convergents et les faisceaux divergents. L'exercice 2 ajoute que, dans tout système optique, le chemin suivi par la lumière est indépendant du sens de propagation.",
      "keyRule": "Milieu homogène = propagation rectiligne ; le rayon est une demi-droite fléchée, le faisceau un ensemble de rayons d'une même source.",
      "formulas": [],
      "workedExample": {
        "title": "L'altitude de l'explosion de la fusée (exercice 4)",
        "statement": "Une fusée éclate à l'altitude H. Un observateur perçoit le son de l'explosion avec un retard de $0{,}2$ s sur la gerbe de lumière. On donne $c = 3 \\times 10^8$ m/s et la célérité du son $c' = 340$ m/s. Détermine H.",
        "methodSteps": [
          "Durée pour la lumière : $t_1 = \\frac{H}{c}$ ; durée pour le son : $t_2 = \\frac{H}{c'}$.",
          "Le retard est $\\Delta t = t_2 - t_1$, d'où $H = \\frac{c \\times c' \\times \\Delta t}{c - c'}$.",
          "L'application numérique donne $H = 68$ m."
        ],
        "conclusion": "Ce sont les résultats du corrigé de l'exercice 4 : la source de lumière y est la gerbe lumineuse de l'explosion."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La propagation rectiligne dans un milieu homogène",
          "stepTheme": "La propagation rectiligne dans un milieu homogène",
          "stepBadge": "La propagation rectiligne dans un milieu homogène",
          "paragraphText": "Dans un milieu homogène, la lumière se propage en ligne droite : c'est le principe rappelé au §1.5 et dans l'exercice 2.\nLe document précise, pour un milieu transparent homogène et isotrope, que le chemin suivi est indépendant du sens de propagation.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03_q1",
            "type": "mcq",
            "prompt": "Dans un milieu homogène, la lumière se propage :",
            "options": [
              "En ligne droite",
              "En décrivant des courbes",
              "Uniquement dans le vide",
              "En revenant toujours vers la source"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le principe du §1.5, repris mot pour mot dans le corrigé de l'exercice 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le rayon lumineux : une demi-droite fléchée",
          "stepTheme": "Le rayon lumineux : une demi-droite fléchée",
          "stepBadge": "Le rayon lumineux : une demi-droite fléchée",
          "paragraphText": "• Rayon lumineux : demi-droite qui représente le trajet suivi par la lumière.\nLe sens de propagation est représenté par une flèche portée par le rayon, à partir de la source.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03_q2",
            "type": "mcq",
            "prompt": "Le trajet de la lumière dans un milieu homogène est représenté par :",
            "options": [
              "Un segment sans orientation",
              "Une demi-droite appelée rayon lumineux, avec une flèche de sens",
              "Un cercle",
              "Une courbe sinusoïdale fermée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §1.5 : demi-droite et flèche pour le sens de propagation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le faisceau : un ensemble de rayons d'une même source",
          "stepTheme": "Le faisceau : un ensemble de rayons d'une même source",
          "stepBadge": "Le faisceau : un ensemble de rayons d'une même source",
          "paragraphText": "• Faisceau lumineux : ensemble de rayons lumineux provenant d'une même source.\nLa proposition de l'exercice 1 « un faisceau provient toujours d'une source primaire » est fausse : les rayons peuvent aussi partir d'une source secondaire qui diffuse.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03_q3",
            "type": "mcq",
            "prompt": "Un faisceau lumineux est :",
            "options": [
              "Un rayon unique très intense",
              "L'ensemble des rayons provenant de sources différentes",
              "Un ensemble de rayons lumineux provenant d'une même source",
              "Une zone d'ombre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du §1.6 : même source, plusieurs rayons."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Parallèle, convergent ou divergent",
          "stepTheme": "Parallèle, convergent ou divergent",
          "stepBadge": "Parallèle, convergent ou divergent",
          "paragraphText": "Le document distingue trois faisceaux selon la disposition des rayons.\n• Parallèle : les rayons restent parallèles entre eux.\n• Convergent : les rayons se dirigent vers un même point.\n• Divergent : les rayons s'écartent à partir de la source.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03_q4",
            "type": "mcq",
            "prompt": "Un faisceau dont les rayons s'écartent les uns des autres à partir de la source est un faisceau :",
            "options": [
              "Parallèle",
              "Convergent",
              "Rectiligne",
              "Divergent"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'un des trois types du §1.6 : divergent quand les rayons s'écartent, convergent quand ils se rejoignent, parallèle quand ils gardent la même direction."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'éclair vu avant le tonnerre (exercice 5)",
          "stepTheme": "L'éclair vu avant le tonnerre (exercice 5)",
          "stepBadge": "L'éclair vu avant le tonnerre (exercice 5)",
          "paragraphText": "À $10$ km d'un orage, l'éclair et le tonnerre sont produits simultanément, mais leurs célérités diffèrent énormément.\nLa lumière parcourt les $10$ km en $3{,}3 \\times 10^{-5}$ s, le son en $29{,}4$ s : on voit donc l'éclair bien avant d'entendre le tonnerre.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03_q5",
            "type": "mcq",
            "prompt": "Dans l'exercice 5, l'observateur à $10$ km voit l'éclair avant le tonnerre parce que :",
            "options": [
              "La lumière se propage beaucoup plus vite que le son",
              "Le son ne se propage pas dans l'air",
              "L'éclair est produit avant le tonnerre",
              "La lumière suit un chemin plus court"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$3 \\times 10^8$ m/s contre $340$ m/s : les durées du corrigé sont $3{,}3 \\times 10^{-5}$ s pour l'éclair et $29{,}4$ s pour le tonnerre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le chemin ne dépend pas du sens de propagation",
          "stepTheme": "Le chemin ne dépend pas du sens de propagation",
          "stepBadge": "Le chemin ne dépend pas du sens de propagation",
          "paragraphText": "Piège : renverser le sens de parcours ne change pas le trajet. L'exercice 2 l'énonce : dans tout système optique, le chemin suivi par la lumière est indépendant du sens de propagation.\nC'est le principe du retour inverse de la lumière.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03_q6",
            "type": "mcq",
            "prompt": "D'après l'exercice 2, le chemin suivi par la lumière dans un système optique :",
            "options": [
              "Change quand on inverse le sens de propagation",
              "Est indépendant du sens de propagation",
              "N'existe que dans le vide",
              "Dépend de la couleur de la source"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première phrase du texte complété de l'exercice 2 (principe du retour inverse)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03_q1",
          "type": "mcq",
          "prompt": "Dans un milieu homogène, la lumière se propage :",
          "options": [
            "En ligne droite",
            "En décrivant des courbes",
            "Uniquement dans le vide",
            "En revenant toujours vers la source"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le principe du §1.5, repris mot pour mot dans le corrigé de l'exercice 2."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03_q2",
          "type": "mcq",
          "prompt": "Le trajet de la lumière dans un milieu homogène est représenté par :",
          "options": [
            "Un segment sans orientation",
            "Une demi-droite appelée rayon lumineux, avec une flèche de sens",
            "Un cercle",
            "Une courbe sinusoïdale fermée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §1.5 : demi-droite et flèche pour le sens de propagation."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03_q3",
          "type": "mcq",
          "prompt": "Un faisceau lumineux est :",
          "options": [
            "Un rayon unique très intense",
            "L'ensemble des rayons provenant de sources différentes",
            "Un ensemble de rayons lumineux provenant d'une même source",
            "Une zone d'ombre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du §1.6 : même source, plusieurs rayons."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03_q4",
          "type": "mcq",
          "prompt": "Un faisceau dont les rayons s'écartent les uns des autres à partir de la source est un faisceau :",
          "options": [
            "Parallèle",
            "Convergent",
            "Rectiligne",
            "Divergent"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'un des trois types du §1.6 : divergent quand les rayons s'écartent, convergent quand ils se rejoignent, parallèle quand ils gardent la même direction."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03_q5",
          "type": "mcq",
          "prompt": "Dans l'exercice 5, l'observateur à $10$ km voit l'éclair avant le tonnerre parce que :",
          "options": [
            "La lumière se propage beaucoup plus vite que le son",
            "Le son ne se propage pas dans l'air",
            "L'éclair est produit avant le tonnerre",
            "La lumière suit un chemin plus court"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$3 \\times 10^8$ m/s contre $340$ m/s : les durées du corrigé sont $3{,}3 \\times 10^{-5}$ s pour l'éclair et $29{,}4$ s pour le tonnerre."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p03_q6",
          "type": "mcq",
          "prompt": "D'après l'exercice 2, le chemin suivi par la lumière dans un système optique :",
          "options": [
            "Change quand on inverse le sens de propagation",
            "Est indépendant du sens de propagation",
            "N'existe que dans le vide",
            "Dépend de la couleur de la source"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première phrase du texte complété de l'exercice 2 (principe du retour inverse)."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04",
      "order": 4,
      "title": "L'onde lumineuse : fréquence et longueur d'onde",
      "summary": "La lumière est une onde sinusoïdale caractérisée par sa période T, sa fréquence N = 1/T et sa longueur d'onde λ = c/N.",
      "conceptExplanation": "La lumière est une onde lumineuse qui se propage à partir d'une source ; elle peut être représentée par une fonction sinusoïdale du temps.\nElle est caractérisée par une fréquence, une période et une longueur d'onde.\nLa fréquence $N$ est le nombre de périodes par seconde ; son unité est le hertz (Hz) et son expression est $N = \\frac{1}{T}$, la période $T$ s'exprimant en secondes.\nLa longueur d'onde $\\lambda$ est la distance parcourue par l'onde pendant une période ; son unité est le mètre. Dans le vide, $\\lambda = \\frac{c}{N}$, et la célérité est aussi le rapport de la distance parcourue à la durée du parcours, $c = \\frac{d}{\\Delta t}$. La documentation précise que lorsqu'une onde change de milieu, sa longueur d'onde varie mais sa fréquence reste la même.",
      "keyRule": "Pendant une période, l'onde avance d'une longueur d'onde : $\\lambda = c \\times T = \\frac{c}{N}$, et la fréquence ne change pas d'un milieu à l'autre.",
      "formulas": [
        {
          "name": "Fréquence d'une onde",
          "formula": "N = \\frac{1}{T}",
          "note": "N en hertz (Hz), T en secondes (s)."
        },
        {
          "name": "Longueur d'onde dans le vide",
          "formula": "\\lambda = \\frac{c}{N} = c \\times T",
          "note": "λ en mètres (m) ; dans un milieu d'indice n, la longueur d'onde devient λ divisé par n."
        }
      ],
      "workedExample": {
        "title": "Fréquence et longueur d'onde dans l'alcool",
        "statement": "Une radiation a pour longueur d'onde $\\lambda = 600$ nm dans le vide. Elle se propage dans l'alcool d'indice $n = 1{,}36$. Calcule sa fréquence, puis sa longueur d'onde dans l'alcool.",
        "methodSteps": [
          "Fréquence : $N = \\frac{c}{\\lambda} = \\frac{3 \\times 10^8}{600 \\times 10^{-9}} = 5 \\times 10^{14}$ Hz.",
          "Dans un milieu d'indice $n$, la longueur d'onde est divisée par $n$ : $\\lambda' = \\frac{\\lambda}{n}$.",
          "Application numérique : $\\lambda' = \\frac{600}{1{,}36} = 441{,}2$ nm."
        ],
        "conclusion": "Ce sont les résultats de l'activité d'application du §2 : la fréquence reste $5 \\times 10^{14}$ Hz, seule la longueur d'onde diminue."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La lumière est une onde sinusoïdale",
          "stepTheme": "La lumière est une onde sinusoïdale",
          "stepBadge": "La lumière est une onde sinusoïdale",
          "paragraphText": "La lumière est une onde lumineuse qui se propage à partir d'une source.\nLe document précise qu'elle peut être représentée par une fonction sinusoïdale du temps, caractérisée par une fréquence, une période et une longueur d'onde.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04_q1",
            "type": "mcq",
            "prompt": "D'après le document, la lumière peut être représentée par :",
            "options": [
              "Une fonction sinusoïdale du temps",
              "Une droite horizontale",
              "Une suite de particules immobiles",
              "Un champ constant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le §2.1 : nature ondulatoire et représentation sinusoïdale de la lumière."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La fréquence N : des périodes par seconde",
          "stepTheme": "La fréquence N : des périodes par seconde",
          "stepBadge": "La fréquence N : des périodes par seconde",
          "paragraphText": "• Fréquence $N$ : nombre de périodes par seconde, d'expression $N = \\frac{1}{T}$.\nSon unité est le hertz (Hz) ; la période $T$ s'exprime en secondes.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04_q2",
            "type": "mcq",
            "prompt": "La fréquence d'une onde est le nombre de périodes par seconde ; elle s'exprime par :",
            "options": [
              "$N = T$",
              "$N = \\frac{1}{T}$, en hertz",
              "$N = c \\times T$",
              "$N = \\frac{T}{c}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le §2.2 : $N = \\frac{1}{T}$, unité le hertz."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La longueur d'onde : une distance par période",
          "stepTheme": "La longueur d'onde : une distance par période",
          "stepBadge": "La longueur d'onde : une distance par période",
          "paragraphText": "• Longueur d'onde $\\lambda$ : distance parcourue par l'onde pendant une période.\nSon unité est le mètre ; dans le vide, le document donne $\\lambda = \\frac{c}{N}$.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04_q3",
            "type": "mcq",
            "prompt": "La longueur d'onde λ d'une onde est :",
            "options": [
              "La distance parcourue pendant une seconde",
              "Le nombre de périodes par seconde",
              "La distance parcourue par l'onde pendant une période",
              "La durée d'une période"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition du §2.3 ; le nombre de périodes par seconde est la fréquence, et la durée d'une période est T."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer une fréquence depuis λ",
          "stepTheme": "Calculer une fréquence depuis λ",
          "stepBadge": "Calculer une fréquence depuis λ",
          "paragraphText": "Méthode : on convertit la longueur d'onde en mètres, puis on applique $N = \\frac{c}{\\lambda}$.\nPour $\\lambda = 600$ nm $= 600 \\times 10^{-9}$ m : $N = \\frac{3 \\times 10^8}{600 \\times 10^{-9}} = 5 \\times 10^{14}$ Hz.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04_q4",
            "type": "mcq",
            "prompt": "La fréquence de la radiation de longueur d'onde $600$ nm dans le vide vaut :",
            "options": [
              "$5 \\times 10^{11}$ Hz",
              "$2 \\times 10^{14}$ Hz",
              "$1{,}8 \\times 10^{17}$ Hz",
              "$5 \\times 10^{14}$ Hz"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le calcul de l'activité du §2 : $N = \\frac{c}{\\lambda}$ avec $\\lambda = 600 \\times 10^{-9}$ m."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Dans l'alcool : λ passe de 600 nm à 441,2 nm",
          "stepTheme": "Dans l'alcool : λ passe de 600 nm à 441,2 nm",
          "stepBadge": "Dans l'alcool : λ passe de 600 nm à 441,2 nm",
          "paragraphText": "Dans l'alcool d'indice $n = 1{,}36$, la longueur d'onde devient $\\lambda' = \\frac{\\lambda}{n} = \\frac{600}{1{,}36}$.\nLe résultat de l'activité est $\\lambda' = 441{,}2$ nm : la longueur d'onde diminue dans le milieu, car la célérité y est plus faible.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04_q5",
            "type": "mcq",
            "prompt": "La longueur d'onde de cette radiation dans l'alcool ($n = 1{,}36$) vaut :",
            "options": [
              "$441{,}2$ nm",
              "$600$ nm",
              "$816$ nm",
              "$136$ nm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la solution de l'activité : on divise la longueur d'onde dans le vide par l'indice du milieu."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La fréquence ne change pas de milieu",
          "stepTheme": "La fréquence ne change pas de milieu",
          "stepBadge": "La fréquence ne change pas de milieu",
          "paragraphText": "Piège : en changeant de milieu, ce n'est pas la fréquence qui varie. La documentation l'affirme : lorsqu'une onde passe d'un milieu à un autre en changeant de vitesse, sa longueur d'onde varie, même si sa fréquence reste la même.\nC'est pour cela que $\\lambda' = \\frac{\\lambda}{n}$ alors que $N$ est inchangée.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04_q6",
            "type": "mcq",
            "prompt": "Quand une onde lumineuse passe du vide dans l'alcool, la grandeur qui reste inchangée est :",
            "options": [
              "Sa longueur d'onde",
              "Sa fréquence",
              "Sa célérité",
              "Son indice"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le rappel de la documentation (partie IV) : la fréquence reste la même, la longueur d'onde et la célérité varient."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04_q1",
          "type": "mcq",
          "prompt": "D'après le document, la lumière peut être représentée par :",
          "options": [
            "Une fonction sinusoïdale du temps",
            "Une droite horizontale",
            "Une suite de particules immobiles",
            "Un champ constant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le §2.1 : nature ondulatoire et représentation sinusoïdale de la lumière."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04_q2",
          "type": "mcq",
          "prompt": "La fréquence d'une onde est le nombre de périodes par seconde ; elle s'exprime par :",
          "options": [
            "$N = T$",
            "$N = \\frac{1}{T}$, en hertz",
            "$N = c \\times T$",
            "$N = \\frac{T}{c}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le §2.2 : $N = \\frac{1}{T}$, unité le hertz."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04_q3",
          "type": "mcq",
          "prompt": "La longueur d'onde λ d'une onde est :",
          "options": [
            "La distance parcourue pendant une seconde",
            "Le nombre de périodes par seconde",
            "La distance parcourue par l'onde pendant une période",
            "La durée d'une période"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition du §2.3 ; le nombre de périodes par seconde est la fréquence, et la durée d'une période est T."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04_q4",
          "type": "mcq",
          "prompt": "La fréquence de la radiation de longueur d'onde $600$ nm dans le vide vaut :",
          "options": [
            "$5 \\times 10^{11}$ Hz",
            "$2 \\times 10^{14}$ Hz",
            "$1{,}8 \\times 10^{17}$ Hz",
            "$5 \\times 10^{14}$ Hz"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le calcul de l'activité du §2 : $N = \\frac{c}{\\lambda}$ avec $\\lambda = 600 \\times 10^{-9}$ m."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04_q5",
          "type": "mcq",
          "prompt": "La longueur d'onde de cette radiation dans l'alcool ($n = 1{,}36$) vaut :",
          "options": [
            "$441{,}2$ nm",
            "$600$ nm",
            "$816$ nm",
            "$136$ nm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la solution de l'activité : on divise la longueur d'onde dans le vide par l'indice du milieu."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p04_q6",
          "type": "mcq",
          "prompt": "Quand une onde lumineuse passe du vide dans l'alcool, la grandeur qui reste inchangée est :",
          "options": [
            "Sa longueur d'onde",
            "Sa fréquence",
            "Sa célérité",
            "Son indice"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le rappel de la documentation (partie IV) : la fréquence reste la même, la longueur d'onde et la célérité varient."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05",
      "order": 5,
      "title": "Lumière monochromatique et domaine visible",
      "summary": "Une lumière monochromatique n'a qu'une seule couleur, donc une seule longueur d'onde ; le domaine visible s'étend de 400 à 800 nm.",
      "conceptExplanation": "Une lumière monochromatique est une lumière constituée d'une seule couleur, caractérisée par une longueur d'onde $\\lambda$.\nLes longueurs d'onde des lumières du domaine visible sont comprises entre $400$ et $800$ nm : l'échelle du document place le violet vers $400$ nm, puis le bleu, le vert, le jaune, l'orange et le rouge vers $750$ nm, entre les ultraviolets (en dessous) et les infrarouges (au-dessus).\nÀ une longueur d'onde donnée correspond une couleur précise ; la lumière blanche, au contraire, est un ensemble d'ondes lumineuses de longueurs d'onde différentes : c'est une lumière polychromatique.\nDans un milieu d'indice $n$, la longueur d'onde devient $\\lambda = \\frac{\\lambda_0}{n}$, où $\\lambda_0$ est la longueur d'onde dans le vide.",
      "keyRule": "Monochromatique = une seule couleur = une seule longueur d'onde ; dans un milieu, λ est divisée par l'indice n.",
      "formulas": [
        {
          "name": "Longueur d'onde dans un milieu",
          "formula": "\\lambda = \\frac{\\lambda_0}{n}",
          "note": "λ₀ : longueur d'onde dans le vide ; n : indice du milieu."
        }
      ],
      "workedExample": {
        "title": "La radiation jaune du sodium (exercice 3)",
        "statement": "Dans un milieu transparent, la longueur d'onde de la radiation jaune du sodium vaut $\\lambda = 587{,}5$ nm ; dans le vide, $\\lambda_0 = 589$ nm. Détermine l'indice du milieu, puis la longueur d'onde de cette radiation dans le diamant d'indice $n = 2{,}42$.",
        "methodSteps": [
          "De $\\lambda = \\frac{\\lambda_0}{n}$, on tire $n = \\frac{\\lambda_0}{\\lambda} = \\frac{589}{587{,}5}$.",
          "On obtient $n \\approx 1{,}00$ : le milieu a pratiquement l'indice de l'air.",
          "Dans le diamant : $\\lambda = \\frac{589}{2{,}42} = 243{,}4$ nm."
        ],
        "conclusion": "Ce sont les résultats du corrigé de l'exercice 3 (243,3 nm avec l'arrondi du document)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La lumière monochromatique : une seule couleur",
          "stepTheme": "La lumière monochromatique : une seule couleur",
          "stepBadge": "La lumière monochromatique : une seule couleur",
          "paragraphText": "• Lumière monochromatique : lumière constituée d'une seule couleur, caractérisée par une longueur d'onde $\\lambda$.\nC'est la définition demandée à la question 1 de la situation d'évaluation, à propos de la source laser.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05_q1",
            "type": "mcq",
            "prompt": "Une lumière monochromatique est une lumière :",
            "options": [
              "Constituée d'une seule couleur, caractérisée par une longueur d'onde",
              "Composée de toutes les couleurs",
              "Toujours blanche",
              "Sans longueur d'onde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §2.4 (numéroté 3.4 dans le document) et de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le domaine visible : de 400 à 800 nm",
          "stepTheme": "Le domaine visible : de 400 à 800 nm",
          "stepBadge": "Le domaine visible : de 400 à 800 nm",
          "paragraphText": "Les longueurs d'onde des lumières visibles sont comprises entre $400$ et $800$ nm.\nEn dessous de $400$ nm se trouvent les ultraviolets (UV) ; au-dessus, les infrarouges (IR), invisibles pour l'œil.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05_q2",
            "type": "mcq",
            "prompt": "D'après le document, les longueurs d'onde du domaine visible sont comprises entre :",
            "options": [
              "$200$ et $400$ nm",
              "$400$ et $800$ nm",
              "$800$ et $1200$ nm",
              "$1$ et $100$ nm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la phrase du §2.4, avec UV en dessous de 400 nm et IR au-dessus sur l'échelle du document."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La lumière blanche est polychromatique",
          "stepTheme": "La lumière blanche est polychromatique",
          "stepBadge": "La lumière blanche est polychromatique",
          "paragraphText": "La lumière blanche est un ensemble d'ondes lumineuses de longueurs d'onde différentes (exercice 2).\nL'exercice 1 la dit donc polychromatique : c'est l'affirmation vraie de la liste, à l'opposé d'une lumière monochromatique.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05_q3",
            "type": "mcq",
            "prompt": "La lumière blanche est une lumière polychromatique parce qu'elle est :",
            "options": [
              "Formée d'une seule longueur d'onde",
              "Toujours produite par un laser",
              "Un ensemble d'ondes lumineuses de longueurs d'onde différentes",
              "Invisible"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le corrigé de l'exercice 2 : plusieurs longueurs d'onde, donc plusieurs couleurs, donc polychromatique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le laser de la situation : N ≈ 4,76×10¹⁴ Hz",
          "stepTheme": "Le laser de la situation : N ≈ 4,76×10¹⁴ Hz",
          "stepBadge": "Le laser de la situation : N ≈ 4,76×10¹⁴ Hz",
          "paragraphText": "La situation d'évaluation étudie un laser émettant une lumière monochromatique de longueur d'onde $\\lambda_0 = 630$ nm dans le vide.\nSa fréquence vaut $N = \\frac{c}{\\lambda_0} = \\frac{3 \\times 10^8}{630 \\times 10^{-9}}$, soit environ $4{,}76 \\times 10^{14}$ Hz (le document arrondit à $4{,}7 \\times 10^{14}$ Hz).",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05_q4",
            "type": "mcq",
            "prompt": "La fréquence du laser de longueur d'onde $630$ nm dans le vide vaut environ :",
            "options": [
              "$4{,}76 \\times 10^{11}$ Hz",
              "$1{,}89 \\times 10^{14}$ Hz",
              "$6{,}30 \\times 10^{14}$ Hz",
              "$4{,}76 \\times 10^{14}$ Hz"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On applique $N = \\frac{c}{\\lambda_0}$ : c'est le calcul de la question 2 de la situation d'évaluation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le laser dans l'alcool d'indice 1,33",
          "stepTheme": "Le laser dans l'alcool d'indice 1,33",
          "stepBadge": "Le laser dans l'alcool d'indice 1,33",
          "paragraphText": "L'énoncé de la situation donne l'alcool d'indice $n = 1{,}33$ ; on applique $v = \\frac{c}{n}$ et $\\lambda = \\frac{\\lambda_0}{n}$ avec cette valeur.\nOn obtient $v \\approx 2{,}26 \\times 10^8$ m/s et $\\lambda \\approx 474$ nm ; le corrigé du document y mélange par endroits les indices $1{,}36$ et $1{,}6$.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05_q5",
            "type": "mcq",
            "prompt": "Pour le laser ($\\lambda_0 = 630$ nm) dans l'alcool d'indice $1{,}33$ donné par l'énoncé, la longueur d'onde vaut environ :",
            "options": [
              "$474$ nm",
              "$630$ nm",
              "$838$ nm",
              "$243$ nm"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec l'indice de l'énoncé : $\\lambda = \\frac{630}{1{,}33} \\approx 474$ nm. Les $463$ nm du corrigé correspondent à l'indice $1{,}36$, pas à celui de l'énoncé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "400 nm = violet, 750 nm = rouge",
          "stepTheme": "400 nm = violet, 750 nm = rouge",
          "stepBadge": "400 nm = violet, 750 nm = rouge",
          "paragraphText": "Piège : sur l'échelle des couleurs, les petites longueurs d'onde sont du côté du violet et les grandes du côté du rouge.\nLe corrigé de l'exercice 2 le fixe : dans le vide, $400$ nm correspond à la couleur violette et $750$ nm à la couleur rouge.",
          "exercise": {
            "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05_q6",
            "type": "mcq",
            "prompt": "D'après l'exercice 2, dans le vide, $400$ nm et $750$ nm correspondent respectivement à :",
            "options": [
              "La couleur rouge et la couleur violette",
              "La couleur violette et la couleur rouge",
              "La couleur verte et la couleur jaune",
              "Deux radiations invisibles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le corrigé de l'exercice 2 : le violet est à 400 nm (petites λ), le rouge à 750 nm (grandes λ)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05_q1",
          "type": "mcq",
          "prompt": "Une lumière monochromatique est une lumière :",
          "options": [
            "Constituée d'une seule couleur, caractérisée par une longueur d'onde",
            "Composée de toutes les couleurs",
            "Toujours blanche",
            "Sans longueur d'onde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §2.4 (numéroté 3.4 dans le document) et de la situation d'évaluation."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05_q2",
          "type": "mcq",
          "prompt": "D'après le document, les longueurs d'onde du domaine visible sont comprises entre :",
          "options": [
            "$200$ et $400$ nm",
            "$400$ et $800$ nm",
            "$800$ et $1200$ nm",
            "$1$ et $100$ nm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la phrase du §2.4, avec UV en dessous de 400 nm et IR au-dessus sur l'échelle du document."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05_q3",
          "type": "mcq",
          "prompt": "La lumière blanche est une lumière polychromatique parce qu'elle est :",
          "options": [
            "Formée d'une seule longueur d'onde",
            "Toujours produite par un laser",
            "Un ensemble d'ondes lumineuses de longueurs d'onde différentes",
            "Invisible"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le corrigé de l'exercice 2 : plusieurs longueurs d'onde, donc plusieurs couleurs, donc polychromatique."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05_q4",
          "type": "mcq",
          "prompt": "La fréquence du laser de longueur d'onde $630$ nm dans le vide vaut environ :",
          "options": [
            "$4{,}76 \\times 10^{11}$ Hz",
            "$1{,}89 \\times 10^{14}$ Hz",
            "$6{,}30 \\times 10^{14}$ Hz",
            "$4{,}76 \\times 10^{14}$ Hz"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On applique $N = \\frac{c}{\\lambda_0}$ : c'est le calcul de la question 2 de la situation d'évaluation."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05_q5",
          "type": "mcq",
          "prompt": "Pour le laser ($\\lambda_0 = 630$ nm) dans l'alcool d'indice $1{,}33$ donné par l'énoncé, la longueur d'onde vaut environ :",
          "options": [
            "$474$ nm",
            "$630$ nm",
            "$838$ nm",
            "$243$ nm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec l'indice de l'énoncé : $\\lambda = \\frac{630}{1{,}33} \\approx 474$ nm. Les $463$ nm du corrigé correspondent à l'indice $1{,}36$, pas à celui de l'énoncé."
        },
        {
          "id": "premiere_c_physique_l11_introduction_optique_geometrique_p05_q6",
          "type": "mcq",
          "prompt": "D'après l'exercice 2, dans le vide, $400$ nm et $750$ nm correspondent respectivement à :",
          "options": [
            "La couleur rouge et la couleur violette",
            "La couleur violette et la couleur rouge",
            "La couleur verte et la couleur jaune",
            "Deux radiations invisibles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le corrigé de l'exercice 2 : le violet est à 400 nm (petites λ), le rouge à 750 nm (grandes λ)."
        }
      ]
    }
  ]
};
