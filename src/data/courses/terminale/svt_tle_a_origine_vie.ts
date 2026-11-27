import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 3 : L'origine de la vie » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1761
export const SVT_TLE_A_L03_ORIGINE_VIE: CurriculumChapter = {
  "id": "terminale_a1_svt_l03_origine_vie",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 3,
  "title": "Leçon 3 : L'origine de la vie",
  "summary": "L'origine de la vie s'explique par des faits paléontologiques, liés à l'évolution du dioxygène dans l'atmosphère, et par des faits expérimentaux, de la soupe primitive de Oparin et Haldane à l'expérience de Miller et Urey.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1761",
  "points": [
    {
      "id": "terminale_a1_svt_l03_origine_vie_p01",
      "order": 1,
      "title": "Une atmosphère d'abord pauvre en dioxygène",
      "summary": "Lire dans la pechblende et les fers rubanés la faible teneur primitive de l'atmosphère en dioxygène.",
      "conceptExplanation": "Des sables fluviatiles datant de 2,3 milliards d'années, découverts en Amérique et en Afrique, contiennent de grandes quantités de pechblende. L'abondance de ce minerai d'uranium hautement oxydable n'est compatible qu'avec une faible teneur de l'atmosphère en dioxygène au moment de son dépôt.\nOn trouve également des formations sédimentaires appelées fer rubané, à cause de l'alternance de strates blanches et de strates rouges. Pendant les périodes où l'atmosphère était réductrice, sédimentait du fer ferreux (couches claires) ; pendant les périodes où elle était légèrement oxydante, saisons favorables à la prolifération des algues et à une importante activité photosynthétique, se déposaient des oxydes de fer (hématite et magnétite), dont l'existence témoigne de la présence d'oxygène dans l'atmosphère.\nLa présence des fers rubanés dans les seules formations datant de plus de 2 milliards d'années permet de penser que ces conditions atmosphériques ont duré jusqu'à cette période. Au début de la vie, l'atmosphère était donc très pauvre en dioxygène, puis elle s'est progressivement enrichie.",
      "keyRule": "Pechblende abondante et fers rubanés prouvent une atmosphère primitive réductrice, très pauvre en dioxygène.",
      "formulas": [],
      "workedExample": {
        "title": "Ce que racontent les sables de 2,3 milliards d'années (texte 1)",
        "statement": "Des sables fluviatiles de 2,3 milliards d'années contiennent beaucoup de pechblende. Qu'en déduit-on pour l'atmosphère de l'époque ?",
        "methodSteps": [
          "La pechblende est un minerai d'uranium hautement oxydable : elle ne peut s'accumuler que si l'oxygène est rare.",
          "Son abondance dans ces sables anciens est donc incompatible avec une atmosphère riche en dioxygène.",
          "On en déduit une faible teneur de l'atmosphère en dioxygène au moment du dépôt, il y a 2,3 milliards d'années."
        ],
        "conclusion": "À 2,3 milliards d'années, l'atmosphère était très pauvre en dioxygène."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La pechblende, témoin du manque d'oxygène",
          "stepTheme": "La pechblende, témoin du manque d'oxygène",
          "stepBadge": "La pechblende, témoin du manque d'oxygène",
          "paragraphText": "• Pechblende : minerai d'uranium hautement oxydable, abondant dans des sables fluviatiles de 2,3 milliards d'années.\nSon abondance n'est compatible qu'avec une faible teneur de l'atmosphère en dioxygène au moment de son dépôt.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p01_q1",
            "type": "mcq",
            "prompt": "L'abondance de pechblende dans les sables anciens indique :",
            "options": [
              "Une atmosphère très riche en dioxygène",
              "Une faible teneur de l'atmosphère en dioxygène",
              "La présence d'animaux terrestres",
              "Une atmosphère identique à l'actuelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un minerai hautement oxydable ne peut abonder que si l'oxygène est rare."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le fer rubané",
          "stepTheme": "Le fer rubané",
          "stepBadge": "Le fer rubané",
          "paragraphText": "• Fer rubané : formation sédimentaire faite d'une alternance de strates blanches et de strates rouges.\nLes couches claires correspondent au fer ferreux déposé en atmosphère réductrice ; les oxydes de fer des autres couches témoignent de la présence d'oxygène.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p01_q2",
            "type": "mcq",
            "prompt": "Le fer rubané doit son nom à :",
            "options": [
              "Sa forme de ruban métallique",
              "L'alternance de strates blanches et de strates rouges qui le constituent",
              "La présence de pechblende",
              "Des fossiles en forme de ruban"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'explication donnée dans le texte 1 de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Réductrice puis légèrement oxydante",
          "stepTheme": "Réductrice puis légèrement oxydante",
          "stepBadge": "Réductrice puis légèrement oxydante",
          "paragraphText": "La structure du fer rubané s'explique par la succession de périodes où l'atmosphère était réductrice et de périodes où elle était légèrement oxydante.\nPendant les secondes, les algues proliféraient et leur activité photosynthétique produisait de l'oxygène.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p01_q3",
            "type": "mcq",
            "prompt": "Pendant les périodes légèrement oxydantes, se déposaient :",
            "options": [
              "Du fer ferreux uniquement",
              "De la pechblende",
              "Des oxydes de fer, hématite et magnétite",
              "Des sables rouges continentaux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte associe ces périodes à la prolifération des algues et au dépôt d'hématite et de magnétite."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Des formations de plus de 2 milliards d'années",
          "stepTheme": "Des formations de plus de 2 milliards d'années",
          "stepBadge": "Des formations de plus de 2 milliards d'années",
          "paragraphText": "Les fers rubanés ne se trouvent que dans les formations datant de plus de 2 milliards d'années.\nLa leçon en déduit que ces conditions atmosphériques alternées ont duré jusqu'à cette période.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p01_q4",
            "type": "mcq",
            "prompt": "Les fers rubanés se trouvent dans les formations datant de :",
            "options": [
              "Moins de 100 millions d'années",
              "Plus de 2 milliards d'années",
              "Toutes les époques sans distinction",
              "Uniquement l'ère actuelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la datation donnée dans le texte 1."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'atmosphère primitive n'était pas riche en oxygène",
          "stepTheme": "L'atmosphère primitive n'était pas riche en oxygène",
          "stepBadge": "L'atmosphère primitive n'était pas riche en oxygène",
          "paragraphText": "Piège : projeter l'atmosphère actuelle sur la Terre primitive.\nAu début de la vie, l'atmosphère était très pauvre en dioxygène ; elle s'est enrichie progressivement, avec l'apparition des algues qui l'enrichissent encore.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p01_q5",
            "type": "mcq",
            "prompt": "Au début de la vie, l'atmosphère était :",
            "options": [
              "Aussi riche en dioxygène qu'aujourd'hui",
              "Très pauvre en dioxygène",
              "Sans aucun gaz",
              "Composée uniquement d'ozone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première conclusion de l'analyse des résultats du texte 1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les algues enrichissent l'atmosphère",
          "stepTheme": "Les algues enrichissent l'atmosphère",
          "stepBadge": "Les algues enrichissent l'atmosphère",
          "paragraphText": "Au fur et à mesure que l'on s'élève dans le temps, l'atmosphère s'enrichit progressivement en dioxygène avec l'apparition des algues.\nLeur activité photosynthétique est la source de cet enrichissement.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p01_q6",
            "type": "mcq",
            "prompt": "L'enrichissement progressif de l'atmosphère en dioxygène est lié à :",
            "options": [
              "La pechblende",
              "L'apparition des algues et à leur photosynthèse",
              "La formation des sables fluviatiles",
              "La disparition du fer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse des résultats attribue l'enrichissement en dioxygène à l'apparition des algues."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l03_origine_vie_p01_q1",
          "type": "mcq",
          "prompt": "L'abondance de pechblende dans les sables anciens indique :",
          "options": [
            "Une atmosphère très riche en dioxygène",
            "Une faible teneur de l'atmosphère en dioxygène",
            "La présence d'animaux terrestres",
            "Une atmosphère identique à l'actuelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un minerai hautement oxydable ne peut abonder que si l'oxygène est rare."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p01_q2",
          "type": "mcq",
          "prompt": "Le fer rubané doit son nom à :",
          "options": [
            "Sa forme de ruban métallique",
            "L'alternance de strates blanches et de strates rouges qui le constituent",
            "La présence de pechblende",
            "Des fossiles en forme de ruban"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'explication donnée dans le texte 1 de la leçon."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p01_q3",
          "type": "mcq",
          "prompt": "Pendant les périodes légèrement oxydantes, se déposaient :",
          "options": [
            "Du fer ferreux uniquement",
            "De la pechblende",
            "Des oxydes de fer, hématite et magnétite",
            "Des sables rouges continentaux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte associe ces périodes à la prolifération des algues et au dépôt d'hématite et de magnétite."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p01_q4",
          "type": "mcq",
          "prompt": "Les fers rubanés se trouvent dans les formations datant de :",
          "options": [
            "Moins de 100 millions d'années",
            "Plus de 2 milliards d'années",
            "Toutes les époques sans distinction",
            "Uniquement l'ère actuelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la datation donnée dans le texte 1."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p01_q5",
          "type": "mcq",
          "prompt": "Au début de la vie, l'atmosphère était :",
          "options": [
            "Aussi riche en dioxygène qu'aujourd'hui",
            "Très pauvre en dioxygène",
            "Sans aucun gaz",
            "Composée uniquement d'ozone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première conclusion de l'analyse des résultats du texte 1."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p01_q6",
          "type": "mcq",
          "prompt": "L'enrichissement progressif de l'atmosphère en dioxygène est lié à :",
          "options": [
            "La pechblende",
            "L'apparition des algues et à leur photosynthèse",
            "La formation des sables fluviatiles",
            "La disparition du fer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse des résultats attribue l'enrichissement en dioxygène à l'apparition des algues."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l03_origine_vie_p02",
      "order": 2,
      "title": "Des couches rouges à la couche d'ozone et à la diversification",
      "summary": "Suivre l'enrichissement durable en dioxygène, la formation de l'ozone et le passage des procaryotes aux pluricellulaires.",
      "conceptExplanation": "Au-delà de 2 milliards d'années, les fers rubanés laissent place à des sables d'origine continentale riches en oxyde de fer : ce sont les premières couches rouges (redbeds), dont l'abondance témoigne de la présence constante d'oxygène dans l'atmosphère, à une teneur voisine de 1 % de sa valeur actuelle.\nLe dioxygène libéré par photosynthèse a cessé d'être mobilisé par des réactions chimiques et a pu envahir l'atmosphère, formant la couche d'ozone capable de protéger les êtres vivants des radiations solaires ultraviolettes.\nL'interprétation de la leçon enchaîne les grandes étapes : des procaryotes, on passe aux eucaryotes, puis aux êtres pluricellulaires ; de la reproduction asexuée, on passe à la reproduction sexuée ; des invertébrés aquatiques, on passe aux vertébrés terrestres.\nIl existe donc un lien étroit entre l'évolution du dioxygène et la naissance de la vie sur Terre : plus l'atmosphère s'enrichit en dioxygène, plus on passe des organismes unicellulaires aux organismes pluricellulaires. L'apparition de la vie est synonyme de l'apparition des premières cellules, des procaryotes, cellules isolées ou regroupées en filaments et dépourvues de noyaux caractérisés.",
      "keyRule": "Couches rouges, ozone protecteur et diversification vont ensemble : l'oxygène devenu constant permet le passage des procaryotes aux eucaryotes puis aux pluricellulaires.",
      "formulas": [],
      "workedExample": {
        "title": "Dater le changement avec les couches rouges (texte 1)",
        "statement": "Que remplacent les couches rouges et que prouve leur abondance ?",
        "methodSteps": [
          "Au-delà de 2 milliards d'années, les couches rouges remplacent les fers rubanés.",
          "Ce sont des sables d'origine continentale riches en oxyde de fer.",
          "Leur abondance témoigne de la présence constante d'oxygène dans l'atmosphère, à une teneur voisine de 1 % de sa valeur actuelle."
        ],
        "conclusion": "Les couches rouges marquent le passage à une atmosphère durablement oxygénée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les couches rouges (redbeds)",
          "stepTheme": "Les couches rouges (redbeds)",
          "stepBadge": "Les couches rouges (redbeds)",
          "paragraphText": "• Couches rouges (redbeds) : premières couches de sables d'origine continentale riches en oxyde de fer, apparues au-delà de 2 milliards d'années.\nLeur abondance témoigne de la présence constante d'oxygène dans l'atmosphère.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p02_q1",
            "type": "mcq",
            "prompt": "Les couches rouges témoignent :",
            "options": [
              "D'une disparition totale de l'oxygène",
              "De la présence constante d'oxygène dans l'atmosphère",
              "D'une atmosphère purement réductrice",
              "De l'apparition des vertébrés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'interprétation donnée dans le texte 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une teneur voisine de 1 pour cent",
          "stepTheme": "Une teneur voisine de 1 pour cent",
          "stepBadge": "Une teneur voisine de 1 pour cent",
          "paragraphText": "La teneur en oxygène attestée par les couches rouges est voisine de 1 % de sa valeur actuelle.\nElle reste donc très inférieure à la teneur d'aujourd'hui, mais elle est devenue constante.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p02_q2",
            "type": "mcq",
            "prompt": "La teneur en oxygène de l'époque des couches rouges est estimée à environ :",
            "options": [
              "La même que la valeur actuelle",
              "La moitié de la valeur actuelle",
              "1 % de sa valeur actuelle",
              "10 fois la valeur actuelle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte précise : une teneur voisine de 1 % de sa valeur actuelle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La couche d'ozone protectrice",
          "stepTheme": "La couche d'ozone protectrice",
          "stepBadge": "La couche d'ozone protectrice",
          "paragraphText": "Le dioxygène libéré par photosynthèse, n'étant plus mobilisé par des réactions chimiques, a envahi l'atmosphère.\nIl a formé la couche d'ozone, capable de protéger les êtres vivants des radiations solaires ultraviolettes.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p02_q3",
            "type": "mcq",
            "prompt": "La couche d'ozone protège les êtres vivants :",
            "options": [
              "Du froid des profondeurs marines",
              "Des radiations solaires ultraviolettes",
              "Des sulfures des dorsales",
              "De la déshydratation uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le rôle indiqué dans le texte 1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "De procaryotes à pluricellulaires",
          "stepTheme": "De procaryotes à pluricellulaires",
          "stepBadge": "De procaryotes à pluricellulaires",
          "paragraphText": "La leçon résume la diversification en trois passages successifs.\nDes procaryotes aux eucaryotes puis aux êtres pluricellulaires ; de la reproduction asexuée à la reproduction sexuée ; des invertébrés aquatiques aux vertébrés terrestres.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p02_q4",
            "type": "mcq",
            "prompt": "Selon l'interprétation de la leçon, on passe successivement :",
            "options": [
              "Des vertébrés aux invertébrés",
              "Des eucaryotes aux procaryotes",
              "Des procaryotes aux eucaryotes puis aux êtres pluricellulaires",
              "Des pluricellulaires aux unicellulaires"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'ordre donné dans le document d'interprétation de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les premières formes de vie sont des procaryotes",
          "stepTheme": "Les premières formes de vie sont des procaryotes",
          "stepBadge": "Les premières formes de vie sont des procaryotes",
          "paragraphText": "Piège : imaginer les premières formes de vie comme des cellules complètes avec noyau.\nLes premières formes de vie connues sont des cellules isolées ou regroupées en filaments, dépourvues de noyaux caractérisés : les procaryotes.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p02_q5",
            "type": "mcq",
            "prompt": "Les premières formes de vie connues sont :",
            "options": [
              "Des vertébrés aquatiques",
              "Des procaryotes, cellules dépourvues de noyaux caractérisés",
              "Des algues pluricellulaires",
              "Des eucaryotes à noyau bien formé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion générale de la leçon : l'apparition de la vie est l'apparition des premières cellules, les procaryotes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le lien entre oxygène et complexité",
          "stepTheme": "Le lien entre oxygène et complexité",
          "stepBadge": "Le lien entre oxygène et complexité",
          "paragraphText": "La conclusion de la première partie établit un lien étroit entre l'évolution du dioxygène et la naissance de la vie.\nPlus l'atmosphère s'enrichit en dioxygène, plus on passe des organismes unicellulaires aux organismes pluricellulaires.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p02_q6",
            "type": "mcq",
            "prompt": "Plus l'atmosphère s'enrichit en dioxygène, plus on passe :",
            "options": [
              "Des pluricellulaires aux unicellulaires",
              "Des organismes unicellulaires aux organismes pluricellulaires",
              "Des eucaryotes aux procaryotes",
              "Des vertébrés aux invertébrés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la formulation même de la conclusion de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l03_origine_vie_p02_q1",
          "type": "mcq",
          "prompt": "Les couches rouges témoignent :",
          "options": [
            "D'une disparition totale de l'oxygène",
            "De la présence constante d'oxygène dans l'atmosphère",
            "D'une atmosphère purement réductrice",
            "De l'apparition des vertébrés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'interprétation donnée dans le texte 1."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p02_q2",
          "type": "mcq",
          "prompt": "La teneur en oxygène de l'époque des couches rouges est estimée à environ :",
          "options": [
            "La même que la valeur actuelle",
            "La moitié de la valeur actuelle",
            "1 % de sa valeur actuelle",
            "10 fois la valeur actuelle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte précise : une teneur voisine de 1 % de sa valeur actuelle."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p02_q3",
          "type": "mcq",
          "prompt": "La couche d'ozone protège les êtres vivants :",
          "options": [
            "Du froid des profondeurs marines",
            "Des radiations solaires ultraviolettes",
            "Des sulfures des dorsales",
            "De la déshydratation uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le rôle indiqué dans le texte 1."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p02_q4",
          "type": "mcq",
          "prompt": "Selon l'interprétation de la leçon, on passe successivement :",
          "options": [
            "Des vertébrés aux invertébrés",
            "Des eucaryotes aux procaryotes",
            "Des procaryotes aux eucaryotes puis aux êtres pluricellulaires",
            "Des pluricellulaires aux unicellulaires"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'ordre donné dans le document d'interprétation de la leçon."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p02_q5",
          "type": "mcq",
          "prompt": "Les premières formes de vie connues sont :",
          "options": [
            "Des vertébrés aquatiques",
            "Des procaryotes, cellules dépourvues de noyaux caractérisés",
            "Des algues pluricellulaires",
            "Des eucaryotes à noyau bien formé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion générale de la leçon : l'apparition de la vie est l'apparition des premières cellules, les procaryotes."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p02_q6",
          "type": "mcq",
          "prompt": "Plus l'atmosphère s'enrichit en dioxygène, plus on passe :",
          "options": [
            "Des pluricellulaires aux unicellulaires",
            "Des organismes unicellulaires aux organismes pluricellulaires",
            "Des eucaryotes aux procaryotes",
            "Des vertébrés aux invertébrés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la formulation même de la conclusion de la leçon."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l03_origine_vie_p03",
      "order": 3,
      "title": "Une vie née dans des conditions hostiles, dans l'océan primitif",
      "summary": "Montrer, avec les bactéries des geysers et des dorsales, que la vie a pu apparaître dans l'océan primitif hostile.",
      "conceptExplanation": "Dans les eaux chaudes et acides (90 degrés, pH égal à 1) des geysers du parc de Yellowstone (Wyoming), on trouve des bactéries du genre Sulfolobus, dont le diamètre varie de 1 à 2 micromètres (le texte écrit Sulfoborus puis Sulforobus pour le même genre).\nLes fumeurs des dorsales océaniques rejettent des eaux à 350 degrés, riches en sulfures. On y a trouvé des organismes très proches des premières bactéries.\nSi des bactéries peuvent vivre dans cet environnement hostile, il est logique de penser que la vie a pu apparaître dans l'océan primitif, où les conditions étaient comparables.\nLa leçon conclut que les premiers êtres vivants sont apparus dans des conditions hostiles, dans l'océan primitif à température élevée, acide ou riche en sulfures.",
      "keyRule": "Des bactéries vivent aujourd'hui dans des eaux à 90 degrés et pH 1 ou des fumeurs à 350 degrés riches en sulfures : la vie a donc pu naître en milieu hostile, dans l'océan primitif.",
      "formulas": [],
      "workedExample": {
        "title": "Des geysers de Yellowstone à l'océan primitif (texte 2)",
        "statement": "Quel raisonnement la leçon tire-t-elle des bactéries de Yellowstone et des dorsales océaniques ?",
        "methodSteps": [
          "À Yellowstone, des bactéries vivent dans des eaux chaudes et acides à 90 degrés et pH 1.",
          "Près des fumeurs des dorsales, des organismes proches des premières bactéries vivent dans des eaux à 350 degrés riches en sulfures.",
          "Si la vie résiste aujourd'hui à un environnement hostile, elle a pu apparaître dans l'océan primitif, où les conditions étaient comparables."
        ],
        "conclusion": "Les milieux extrêmes actuels rendent plausible une naissance de la vie en milieu hostile."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les bactéries de Yellowstone",
          "stepTheme": "Les bactéries de Yellowstone",
          "stepBadge": "Les bactéries de Yellowstone",
          "paragraphText": "• Bactéries des geysers de Yellowstone : bactéries du genre appelé Sulfoborus dans le texte, vivant dans des eaux chaudes et acides des geysers du Wyoming.\nLeur diamètre varie de 1 à 2 micromètres.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p03_q1",
            "type": "mcq",
            "prompt": "Les bactéries de Yellowstone vivent dans des eaux :",
            "options": [
              "Froides et alcalines",
              "Chaudes et acides, à 90 degrés et pH 1",
              "Douces et tempérées",
              "Sans aucun sulfure, à 20 degrés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les conditions chiffrées données dans le texte 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les fumeurs des dorsales océaniques",
          "stepTheme": "Les fumeurs des dorsales océaniques",
          "stepBadge": "Les fumeurs des dorsales océaniques",
          "paragraphText": "Les fumeurs des dorsales océaniques rejettent des eaux à 350 degrés, riches en sulfures.\nOn y a trouvé des organismes très proches des premières bactéries.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p03_q2",
            "type": "mcq",
            "prompt": "Les eaux rejetées par les fumeurs des dorsales sont :",
            "options": [
              "À 350 degrés et riches en sulfures",
              "À 10 degrés et pauvres en minéraux",
              "Identiques à l'eau des geysers",
              "Sans organismes vivants"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les valeurs et la composition données dans le texte 2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Raisonner par comparaison des conditions",
          "stepTheme": "Raisonner par comparaison des conditions",
          "stepBadge": "Raisonner par comparaison des conditions",
          "paragraphText": "Méthode de la leçon : comparer les milieux extrêmes actuels à l'océan primitif.\nSi des bactéries vivent dans cet environnement hostile, la vie a pu apparaître dans l'océan primitif où les conditions étaient comparables.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p03_q3",
            "type": "mcq",
            "prompt": "Le raisonnement du texte 2 conclut que la vie a pu apparaître :",
            "options": [
              "Uniquement dans les lacs d'eau douce",
              "Dans l'océan primitif, aux conditions comparables aux milieux hostiles actuels",
              "Seulement après la couche d'ozone",
              "Dans l'atmosphère actuelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion logique tirée dans le texte 2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Un océan primitif hostile",
          "stepTheme": "Un océan primitif hostile",
          "stepBadge": "Un océan primitif hostile",
          "paragraphText": "L'analyse des résultats décrit l'océan primitif comme un milieu à température élevée, acide ou riche en sulfures.\nC'est dans ces conditions hostiles que les premiers êtres vivants sont apparus.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p03_q4",
            "type": "mcq",
            "prompt": "L'océan primitif est décrit comme :",
            "options": [
              "Froid et riche en oxygène",
              "À température élevée, acide ou riche en sulfures",
              "Identique aux océans actuels",
              "Sans eau liquide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois traits retenus dans l'analyse des résultats."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La taille des premières bactéries",
          "stepTheme": "La taille des premières bactéries",
          "stepBadge": "La taille des premières bactéries",
          "paragraphText": "Piège : confondre l'élément de 2 micromètres obtenu à Tokyo avec les bactéries de Yellowstone.\nCelles de Yellowstone mesurent de 1 à 2 micromètres de diamètre ; l'élément de Tokyo, comparable au même genre, mesure 2 micromètres.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p03_q5",
            "type": "mcq",
            "prompt": "Le diamètre des bactéries de Yellowstone varie de :",
            "options": [
              "10 à 20 micromètres",
              "1 à 2 micromètres",
              "100 à 200 micromètres",
              "1 à 2 millimètres"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la fourchette donnée dans le texte 2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des organismes proches des premières bactéries",
          "stepTheme": "Des organismes proches des premières bactéries",
          "stepBadge": "Des organismes proches des premières bactéries",
          "paragraphText": "Près des fumeurs des dorsales, les organismes trouvés sont très proches des premières bactéries.\nIls servent donc d'exemple actuel de ce à quoi pouvaient ressembler les premiers vivants.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p03_q6",
            "type": "mcq",
            "prompt": "Les organismes des fumeurs des dorsales sont décrits comme :",
            "options": [
              "Identiques aux algues des fers rubanés",
              "Très proches des premières bactéries",
              "Des vertébrés primitifs",
              "Des procaryotes disparus sans descendants"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte les présente comme très proches des premières bactéries."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l03_origine_vie_p03_q1",
          "type": "mcq",
          "prompt": "Les bactéries de Yellowstone vivent dans des eaux :",
          "options": [
            "Froides et alcalines",
            "Chaudes et acides, à 90 degrés et pH 1",
            "Douces et tempérées",
            "Sans aucun sulfure, à 20 degrés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les conditions chiffrées données dans le texte 2."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p03_q2",
          "type": "mcq",
          "prompt": "Les eaux rejetées par les fumeurs des dorsales sont :",
          "options": [
            "À 350 degrés et riches en sulfures",
            "À 10 degrés et pauvres en minéraux",
            "Identiques à l'eau des geysers",
            "Sans organismes vivants"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les valeurs et la composition données dans le texte 2."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p03_q3",
          "type": "mcq",
          "prompt": "Le raisonnement du texte 2 conclut que la vie a pu apparaître :",
          "options": [
            "Uniquement dans les lacs d'eau douce",
            "Dans l'océan primitif, aux conditions comparables aux milieux hostiles actuels",
            "Seulement après la couche d'ozone",
            "Dans l'atmosphère actuelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion logique tirée dans le texte 2."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p03_q4",
          "type": "mcq",
          "prompt": "L'océan primitif est décrit comme :",
          "options": [
            "Froid et riche en oxygène",
            "À température élevée, acide ou riche en sulfures",
            "Identique aux océans actuels",
            "Sans eau liquide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois traits retenus dans l'analyse des résultats."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p03_q5",
          "type": "mcq",
          "prompt": "Le diamètre des bactéries de Yellowstone varie de :",
          "options": [
            "10 à 20 micromètres",
            "1 à 2 micromètres",
            "100 à 200 micromètres",
            "1 à 2 millimètres"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la fourchette donnée dans le texte 2."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p03_q6",
          "type": "mcq",
          "prompt": "Les organismes des fumeurs des dorsales sont décrits comme :",
          "options": [
            "Identiques aux algues des fers rubanés",
            "Très proches des premières bactéries",
            "Des vertébrés primitifs",
            "Des procaryotes disparus sans descendants"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte les présente comme très proches des premières bactéries."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l03_origine_vie_p04",
      "order": 4,
      "title": "La soupe primitive et l'expérience de Miller et Urey",
      "summary": "Présenter l'hypothèse de Oparin et Haldane et sa vérification expérimentale de 1953.",
      "conceptExplanation": "En 1920, Oparin et Haldane (le texte écrit Aldane puis Oparin et Aldane) émettent l'hypothèse suivante : il aurait existé dans les premiers océans une soupe primitive de molécules organiques formées par l'action du rayonnement solaire sur l'atmosphère initiale réductrice ; ils estimaient que cette soupe comprenait principalement du méthane, de l'ammoniac, de l'eau et du dioxyde de carbone.\nEn 1953, les Américains Miller et Urey reconstituent en vase clos la mer et l'atmosphère primitive. En provoquant des étincelles électriques dans ce bouillon originel, ils obtiennent des acides aminés, la glycine et l'alanine.\nIls montrent ainsi que la synthèse de molécules organiques peut se faire à partir d'éléments minéraux.\nFormées dans l'atmosphère primitive ou apportées depuis l'espace par les météorites ou les comètes, les molécules organiques s'accumulent dans l'océan primitif, où elles donnent naissance à la soupe primitive.",
      "keyRule": "Hypothèse de 1920, preuve de 1953 : des étincelles dans une atmosphère primitive reconstituée produisent des acides aminés à partir d'éléments minéraux.",
      "formulas": [],
      "workedExample": {
        "title": "L'expérience de 1953, pas à pas (texte expérimental)",
        "statement": "Décris le dispositif de Miller et Urey et son résultat.",
        "methodSteps": [
          "Miller et Urey reconstituent en vase clos la mer et l'atmosphère primitive.",
          "Ils provoquent des étincelles électriques dans ce bouillon originel, simulant une source d'énergie.",
          "Ils obtiennent des acides aminés : la glycine et l'alanine.",
          "Ils montrent ainsi que la synthèse de molécules organiques peut se faire à partir d'éléments minéraux."
        ],
        "conclusion": "La matière organique peut naître de la matière minérale dans les conditions primitives simulées."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La soupe primitive",
          "stepTheme": "La soupe primitive",
          "stepBadge": "La soupe primitive",
          "paragraphText": "• Soupe primitive : ensemble de molécules organiques qui, selon Oparin et Haldane, existait dans les premiers océans.\nElle se serait formée par l'action du rayonnement solaire sur l'atmosphère initiale réductrice et comprenait principalement méthane, ammoniac, eau et dioxyde de carbone.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p04_q1",
            "type": "mcq",
            "prompt": "La soupe primitive de Oparin et Haldane aurait existé :",
            "options": [
              "Dans les premiers océans",
              "Dans les geysers actuels uniquement",
              "Dans les météorites seulement",
              "Dans la couche d'ozone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'hypothèse situe la soupe primitive dans les premiers océans."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les auteurs et la date de l'hypothèse",
          "stepTheme": "Les auteurs et la date de l'hypothèse",
          "stepBadge": "Les auteurs et la date de l'hypothèse",
          "paragraphText": "L'hypothèse de la soupe primitive est émise en 1920.\nLe texte l'attribue à Oparin et à Haldane, orthographié Aldane dans la suite du document.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p04_q2",
            "type": "mcq",
            "prompt": "L'hypothèse de la soupe primitive date de :",
            "options": [
              "1953",
              "1960",
              "1920",
              "1989"
            ],
            "correctAnswerIndex": 2,
            "explanation": "1920 pour l'hypothèse ; 1953 pour l'expérience de Miller et Urey ; 1960 pour les nouvelles analyses des météorites."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les étincelles de Miller et Urey",
          "stepTheme": "Les étincelles de Miller et Urey",
          "stepBadge": "Les étincelles de Miller et Urey",
          "paragraphText": "Miller et Urey provoquent des étincelles électriques dans le bouillon originel reconstitué en vase clos.\nIls reproduisent ainsi une source d'énergie agissant sur la mer et l'atmosphère primitives.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p04_q3",
            "type": "mcq",
            "prompt": "Dans leur expérience, Miller et Urey provoquent :",
            "options": [
              "Une baisse de température à 0 degré",
              "Des étincelles électriques dans le bouillon originel",
              "Une photosynthèse d'algues",
              "Une fermentation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le geste expérimental central décrit dans le texte."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Glycine et alanine obtenues",
          "stepTheme": "Glycine et alanine obtenues",
          "stepBadge": "Glycine et alanine obtenues",
          "paragraphText": "L'expérience de 1953 produit des acides aminés précis, nommés dans le texte.\nIl s'agit de la glycine et de l'alanine, obtenues à partir d'éléments minéraux.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p04_q4",
            "type": "mcq",
            "prompt": "Les acides aminés obtenus par Miller et Urey sont :",
            "options": [
              "La leucine et la glutamine",
              "La méthionine et l'isoleucine",
              "La glycine et l'alanine",
              "Aucun, l'expérience a échoué"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte nomme la glycine et l'alanine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une synthèse à partir d'éléments minéraux",
          "stepTheme": "Une synthèse à partir d'éléments minéraux",
          "stepBadge": "Une synthèse à partir d'éléments minéraux",
          "paragraphText": "Piège : croire que Miller et Urey ont créé des êtres vivants.\nIls ont seulement montré que la synthèse de molécules organiques peut se faire à partir d'éléments minéraux, première étape vers la vie.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p04_q5",
            "type": "mcq",
            "prompt": "L'expérience de Miller et Urey montre que :",
            "options": [
              "Des cellules vivantes naissent en vase clos",
              "La synthèse de molécules organiques peut se faire à partir d'éléments minéraux",
              "L'atmosphère primitive était riche en oxygène",
              "Les météorites sont inutiles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conclusion exacte tirée dans le texte."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les météorites apportent aussi des molécules",
          "stepTheme": "Les météorites apportent aussi des molécules",
          "stepBadge": "Les météorites apportent aussi des molécules",
          "paragraphText": "Depuis 1960, on a découvert des acides aminés et des molécules organiques dans les météorites.\nFormées sur la planète ou apportées depuis l'espace par les météorites ou les comètes, ces molécules alimentent la soupe primitive.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p04_q6",
            "type": "mcq",
            "prompt": "Des acides aminés ont été découverts :",
            "options": [
              "Uniquement à Yellowstone",
              "Dans les météorites",
              "Dans les couches rouges",
              "Dans la pechblende"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte rapporte cette découverte faite depuis 1960 par l'analyse des météorites."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l03_origine_vie_p04_q1",
          "type": "mcq",
          "prompt": "La soupe primitive de Oparin et Haldane aurait existé :",
          "options": [
            "Dans les premiers océans",
            "Dans les geysers actuels uniquement",
            "Dans les météorites seulement",
            "Dans la couche d'ozone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'hypothèse situe la soupe primitive dans les premiers océans."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p04_q2",
          "type": "mcq",
          "prompt": "L'hypothèse de la soupe primitive date de :",
          "options": [
            "1953",
            "1960",
            "1920",
            "1989"
          ],
          "correctAnswerIndex": 2,
          "explanation": "1920 pour l'hypothèse ; 1953 pour l'expérience de Miller et Urey ; 1960 pour les nouvelles analyses des météorites."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p04_q3",
          "type": "mcq",
          "prompt": "Dans leur expérience, Miller et Urey provoquent :",
          "options": [
            "Une baisse de température à 0 degré",
            "Des étincelles électriques dans le bouillon originel",
            "Une photosynthèse d'algues",
            "Une fermentation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le geste expérimental central décrit dans le texte."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p04_q4",
          "type": "mcq",
          "prompt": "Les acides aminés obtenus par Miller et Urey sont :",
          "options": [
            "La leucine et la glutamine",
            "La méthionine et l'isoleucine",
            "La glycine et l'alanine",
            "Aucun, l'expérience a échoué"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte nomme la glycine et l'alanine."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p04_q5",
          "type": "mcq",
          "prompt": "L'expérience de Miller et Urey montre que :",
          "options": [
            "Des cellules vivantes naissent en vase clos",
            "La synthèse de molécules organiques peut se faire à partir d'éléments minéraux",
            "L'atmosphère primitive était riche en oxygène",
            "Les météorites sont inutiles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conclusion exacte tirée dans le texte."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p04_q6",
          "type": "mcq",
          "prompt": "Des acides aminés ont été découverts :",
          "options": [
            "Uniquement à Yellowstone",
            "Dans les météorites",
            "Dans les couches rouges",
            "Dans la pechblende"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte rapporte cette découverte faite depuis 1960 par l'analyse des météorites."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l03_origine_vie_p05",
      "order": 5,
      "title": "Coacervats, nouvelles expériences et limites des faits expérimentaux",
      "summary": "Présenter les coacervats de Oparin, l'atmosphère révisée, l'expérience de Tokyo et la limite du passage à la cellule vivante.",
      "conceptExplanation": "Dans le même temps, Oparin obtient des coacervats dans une atmosphère identique, mais sous l'action de températures élevées. Il s'agit d'enchaînements d'acides aminés dont certains ont des propriétés enzymatiques.\nDepuis 1960, l'analyse des météorites a montré que l'atmosphère initiale était beaucoup moins riche en méthane et en ammoniac qu'on ne le pensait, mais plus riche en dioxyde de carbone. De nouvelles expériences prouvent que la synthèse de nouvelles molécules organiques reste possible dans ces conditions.\nAu laboratoire de la vie, à Tokyo, on a observé au microscope électronique un élément de 2 micromètres de diamètre, comparable aux bactéries de Yellowstone. Il a été obtenu en mélangeant d'énormes quantités d'acides aminés dans de l'eau et de l'azote, sans dioxygène, à une température de 250 degrés et sous une pression de 130 atmosphères pendant 6 heures. Cette expérience montre que la vie a pu apparaître en l'absence de dioxygène, dans les profondeurs de la mer primitive, il y a trois ou quatre milliards d'années.\nLimite essentielle : on peut obtenir expérimentalement des macromolécules par polymérisation, mais les produits obtenus n'ont jamais manifesté une seule des propriétés fondamentales des êtres vivants, capacité d'autorégulation et de reproduction. Les modalités de passage de la molécule organique inerte aux premières cellules vivantes nous sont totalement inconnues.",
      "keyRule": "Les expériences produisent molécules et coacervats, mais jamais un être vivant : le passage de l'inanimé au vivant reste inconnu, et c'est la limite à retenir.",
      "formulas": [],
      "workedExample": {
        "title": "L'expérience du laboratoire de la vie, à Tokyo (texte expérimental)",
        "statement": "Quelles conditions l'expérience de Tokyo réunit-elle et que montre-t-elle ?",
        "methodSteps": [
          "On mélange d'énormes quantités d'acides aminés dans de l'eau et de l'azote, sans dioxygène.",
          "Le mélange est porté à 250 degrés, sous une pression de 130 atmosphères, pendant 6 heures.",
          "On observe au microscope électronique un élément de 2 micromètres de diamètre, comparable aux bactéries de Yellowstone.",
          "L'expérience montre que la vie a pu apparaître sans dioxygène, dans les profondeurs de la mer primitive, il y a trois ou quatre milliards d'années."
        ],
        "conclusion": "Des structures comparables aux premières bactéries peuvent se former sans dioxygène, en conditions extrêmes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les coacervats de Oparin",
          "stepTheme": "Les coacervats de Oparin",
          "stepBadge": "Les coacervats de Oparin",
          "paragraphText": "• Coacervats : enchaînements d'acides aminés obtenus par Oparin sous l'action de températures élevées, dans une atmosphère identique à celle de l'expérience de 1953.\nCertains de ces enchaînements ont des propriétés enzymatiques.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p05_q1",
            "type": "mcq",
            "prompt": "Les coacervats obtenus par Oparin sont :",
            "options": [
              "Des cellules vivantes complètes",
              "Des enchaînements d'acides aminés, dont certains ont des propriétés enzymatiques",
              "Des fossiles de bactéries",
              "Des couches sédimentaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition donnée dans le texte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une atmosphère initiale révisée depuis 1960",
          "stepTheme": "Une atmosphère initiale révisée depuis 1960",
          "stepBadge": "Une atmosphère initiale révisée depuis 1960",
          "paragraphText": "Depuis 1960, l'analyse des météorites a montré que l'atmosphère initiale était moins riche en méthane et en ammoniac qu'on ne le pensait.\nElle était en revanche plus riche en dioxyde de carbone, et la synthèse de molécules organiques reste possible dans ces conditions.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p05_q2",
            "type": "mcq",
            "prompt": "Depuis 1960, on sait que l'atmosphère initiale était :",
            "options": [
              "Plus riche en méthane et en ammoniac",
              "Moins riche en méthane et en ammoniac, mais plus riche en dioxyde de carbone",
              "Identique à l'atmosphère actuelle",
              "Sans dioxyde de carbone"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la révision rapportée dans le texte, à partir de l'analyse des météorites."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les conditions de l'expérience de Tokyo",
          "stepTheme": "Les conditions de l'expérience de Tokyo",
          "stepBadge": "Les conditions de l'expérience de Tokyo",
          "paragraphText": "L'élément obtenu à Tokyo l'a été sans dioxygène, à 250 degrés et sous 130 atmosphères pendant 6 heures.\nLe mélange de départ contenait d'énormes quantités d'acides aminés, de l'eau et de l'azote.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p05_q3",
            "type": "mcq",
            "prompt": "L'expérience de Tokyo se déroule :",
            "options": [
              "Avec beaucoup de dioxygène, à 20 degrés",
              "Sans dioxygène, à 250 degrés et 130 atmosphères pendant 6 heures",
              "À 90 degrés et pH 1",
              "En vase clos avec des étincelles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les conditions chiffrées du texte ; les étincelles décrivent l'expérience de Miller et Urey."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Obtenir des macromolécules par polymérisation",
          "stepTheme": "Obtenir des macromolécules par polymérisation",
          "stepBadge": "Obtenir des macromolécules par polymérisation",
          "paragraphText": "Méthode expérimentale rappelée dans l'interprétation : on peut obtenir des macromolécules par polymérisation en laboratoire.\nC'est ainsi que les expériences enchaînent les petites molécules organiques en structures plus grandes.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p05_q4",
            "type": "mcq",
            "prompt": "En laboratoire, les macromolécules sont obtenues expérimentalement par :",
            "options": [
              "Photosynthèse",
              "Fermentation",
              "Polymérisation",
              "Sédimentation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte parle d'obtention expérimentale de macromolécules par polymérisation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Jamais une propriété du vivant",
          "stepTheme": "Jamais une propriété du vivant",
          "stepBadge": "Jamais une propriété du vivant",
          "paragraphText": "Piège majeur de la leçon : aucun produit expérimental n'a manifesté une propriété fondamentale des êtres vivants.\nNi autorégulation ni reproduction n'ont été obtenues, et le passage de la molécule inerte à la cellule vivante reste totalement inconnu.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p05_q5",
            "type": "mcq",
            "prompt": "Les produits obtenus expérimentalement n'ont jamais manifesté :",
            "options": [
              "Aucune réaction chimique",
              "Les propriétés fondamentales des êtres vivants, autorégulation et reproduction",
              "Aucune forme observable au microscope",
              "Aucun acide aminé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la limite formulée dans l'interprétation de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Il y a trois ou quatre milliards d'années",
          "stepTheme": "Il y a trois ou quatre milliards d'années",
          "stepBadge": "Il y a trois ou quatre milliards d'années",
          "paragraphText": "L'expérience de Tokyo conduit la leçon à dater l'apparition possible de la vie dans les profondeurs de la mer primitive.\nCette apparition remonterait à trois ou quatre milliards d'années.",
          "exercise": {
            "id": "terminale_a1_svt_l03_origine_vie_p05_q6",
            "type": "mcq",
            "prompt": "Selon l'expérience de Tokyo, la vie a pu apparaître dans les profondeurs de la mer primitive il y a :",
            "options": [
              "2,3 milliards d'années",
              "100 millions d'années",
              "Trois ou quatre milliards d'années",
              "1953 ans"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la datation donnée à la fin du récit de l'expérience de Tokyo."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l03_origine_vie_p05_q1",
          "type": "mcq",
          "prompt": "Les coacervats obtenus par Oparin sont :",
          "options": [
            "Des cellules vivantes complètes",
            "Des enchaînements d'acides aminés, dont certains ont des propriétés enzymatiques",
            "Des fossiles de bactéries",
            "Des couches sédimentaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition donnée dans le texte."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p05_q2",
          "type": "mcq",
          "prompt": "Depuis 1960, on sait que l'atmosphère initiale était :",
          "options": [
            "Plus riche en méthane et en ammoniac",
            "Moins riche en méthane et en ammoniac, mais plus riche en dioxyde de carbone",
            "Identique à l'atmosphère actuelle",
            "Sans dioxyde de carbone"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la révision rapportée dans le texte, à partir de l'analyse des météorites."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p05_q3",
          "type": "mcq",
          "prompt": "L'expérience de Tokyo se déroule :",
          "options": [
            "Avec beaucoup de dioxygène, à 20 degrés",
            "Sans dioxygène, à 250 degrés et 130 atmosphères pendant 6 heures",
            "À 90 degrés et pH 1",
            "En vase clos avec des étincelles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les conditions chiffrées du texte ; les étincelles décrivent l'expérience de Miller et Urey."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p05_q4",
          "type": "mcq",
          "prompt": "En laboratoire, les macromolécules sont obtenues expérimentalement par :",
          "options": [
            "Photosynthèse",
            "Fermentation",
            "Polymérisation",
            "Sédimentation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte parle d'obtention expérimentale de macromolécules par polymérisation."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p05_q5",
          "type": "mcq",
          "prompt": "Les produits obtenus expérimentalement n'ont jamais manifesté :",
          "options": [
            "Aucune réaction chimique",
            "Les propriétés fondamentales des êtres vivants, autorégulation et reproduction",
            "Aucune forme observable au microscope",
            "Aucun acide aminé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la limite formulée dans l'interprétation de la leçon."
        },
        {
          "id": "terminale_a1_svt_l03_origine_vie_p05_q6",
          "type": "mcq",
          "prompt": "Selon l'expérience de Tokyo, la vie a pu apparaître dans les profondeurs de la mer primitive il y a :",
          "options": [
            "2,3 milliards d'années",
            "100 millions d'années",
            "Trois ou quatre milliards d'années",
            "1953 ans"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la datation donnée à la fin du récit de l'expérience de Tokyo."
        }
      ]
    }
  ]
};
