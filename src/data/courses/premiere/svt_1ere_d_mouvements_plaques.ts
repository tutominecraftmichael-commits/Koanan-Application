import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 7 : Les mouvements des plaques lithosphériques » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2791
export const SVT_1ERE_D_L07_MOUVEMENTS_PLAQUES: CurriculumChapter = {
  "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 7,
  "title": "Leçon 7 : Les mouvements des plaques lithosphériques",
  "summary": "Les plaques lithosphériques, délimitées par les zones sismiques et volcaniques, se déplacent grâce à l’activité des fonds océaniques et aux courants de convection de l’asthénosphère, avec des conséquences comme la subduction, l’obduction et la collision.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2791",
  "points": [
    {
      "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01",
      "order": 1,
      "title": "Zones sismiques et volcaniques et notion de plaque lithosphérique",
      "summary": "Identifier les plaques à partir de la répartition des séismes et des volcans et définir la plaque lithosphérique.",
      "conceptExplanation": "On observe sur la carte du monde que les volcans se trouvent au niveau des bordures de l’océan Pacifique, dans la zone axiale des océans Atlantique et Indien, au sud de l’Europe, autour de l’Arabie saoudite, dans la corne de l’Afrique et au niveau des bordures des îles situées près des côtes sud de l’Asie.\nLes séismes se trouvent dans les zones axiales des océans Atlantique et Indien, en bordure de la côte ouest de l’Amérique, au sud de l’Europe, autour de l’Arabie saoudite, dans la corne de l’Afrique et au niveau des îles situées près des côtes sud de l’Asie.\nLes séismes et les volcans sont donc localisés dans les mêmes zones : la zone circum-pacifique, la zone des dorsales océaniques et la zone allant des Açores à la fosse de Java en passant par la Méditerranée.\nCette répartition indique que la lithosphère est constituée de zones instables à fortes activités sismiques et volcaniques, qui subdivisent la lithosphère en de vastes zones stables appelées plaques lithosphériques.\nUne plaque lithosphérique est une vaste surface rigide, stable et mobile de la lithosphère délimitée par une zone active et instable.",
      "keyRule": "Séismes et volcans se concentrent dans les mêmes zones instables, qui délimitent les plaques lithosphériques.",
      "formulas": [],
      "workedExample": {
        "title": "Identifier les plaques sur le document de la leçon",
        "statement": "Le document présente quelques plaques lithosphériques désignées par des chiffres de 1 à 8. Associe chaque plaque à sa dénomination.",
        "methodSteps": [
          "Le corrigé donne : 1 égale plaque pacifique et 2 égale plaque nord-américaine.",
          "3 égale plaque africaine et 4 égale plaque Nazca.",
          "5 égale plaque australo-indienne, 6 égale plaque sud-américaine, 7 égale plaque antarctique et 8 égale plaque eurasiatique."
        ],
        "conclusion": "Ce sont les associations du corrigé de l’activité d’application de la partie I."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Des séismes et des volcans dans les mêmes zones",
          "stepTheme": "Des séismes et des volcans dans les mêmes zones",
          "stepBadge": "Des séismes et des volcans dans les mêmes zones",
          "paragraphText": "• Séismes et volcans : phénomènes localisés dans les mêmes zones de la surface du globe.\nOn les trouve notamment autour de l’océan Pacifique, dans la zone axiale des océans Atlantique et Indien et au sud de l’Europe.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01_q1",
            "type": "mcq",
            "prompt": "Les séismes et les volcans sont localisés :",
            "options": [
              "Dans les mêmes zones de la surface du globe",
              "Dans des zones totalement différentes",
              "Uniquement au centre des continents",
              "Uniquement sous les océans"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’analyse de la carte montre que séismes et volcans se trouvent dans les mêmes zones."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les trois principales zones actives",
          "stepTheme": "Les trois principales zones actives",
          "stepBadge": "Les trois principales zones actives",
          "paragraphText": "On distingue trois principales zones de séismes et de volcans.\n• La zone circum-pacifique, autour de l’océan Pacifique.\n• La zone des dorsales océaniques, zone axiale des océans Atlantique et Indien.\n• La zone allant des Açores à la fosse de Java en passant par la Méditerranée.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01_q2",
            "type": "mcq",
            "prompt": "La zone qui sépare l’Afrique et l’Eurasie en passant par la Méditerranée va :",
            "options": [
              "De l’Atlantique au Pacifique uniquement",
              "Du pôle Nord au pôle Sud",
              "Des Açores à la fosse de Java",
              "De la corne de l’Afrique à l’Arabie saoudite seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’une des trois principales zones listées dans l’analyse de la carte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La plaque lithosphérique",
          "stepTheme": "La plaque lithosphérique",
          "stepBadge": "La plaque lithosphérique",
          "paragraphText": "• Plaque lithosphérique : vaste surface rigide, stable et mobile de la lithosphère délimitée par une zone active et instable.\nLes zones instables à fortes activités sismiques et volcaniques subdivisent la lithosphère en ces vastes zones stables.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01_q3",
            "type": "mcq",
            "prompt": "Une plaque lithosphérique est :",
            "options": [
              "Une zone instable à forte activité sismique",
              "Une vaste surface rigide, stable et mobile délimitée par une zone active et instable",
              "Un fragment de dorsale océanique",
              "Une couche liquide du manteau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée dans la leçon après l’étude des principales plaques."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les principales plaques",
          "stepTheme": "Les principales plaques",
          "stepBadge": "Les principales plaques",
          "paragraphText": "Les principales plaques lithosphériques sont : la plaque eurasiatique, la plaque africaine, la plaque australo-indienne, la plaque sud-américaine, la plaque nord-américaine, la plaque pacifique et la plaque antarctique.\nOn a aussi des plaques mineures : les plaques Nazca, des Antilles, arabique, des Cocos et des Philippines.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01_q4",
            "type": "mcq",
            "prompt": "Parmi les plaques suivantes, laquelle est une plaque mineure citée dans la leçon ?",
            "options": [
              "La plaque africaine",
              "La plaque pacifique",
              "La plaque eurasiatique",
              "La plaque Nazca"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les plaques mineures citées sont Nazca, des Antilles, arabique, des Cocos et des Philippines."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Plaques continentales, océaniques et océano-continentales",
          "stepTheme": "Plaques continentales, océaniques et océano-continentales",
          "stepBadge": "Plaques continentales, océaniques et océano-continentales",
          "paragraphText": "On distingue des plaques continentales, comme la plaque arabique, des plaques océaniques, comme la plaque pacifique, et des plaques océano-continentales, comme la plaque africaine.\nLe type d’une plaque dépend de la nature de la lithosphère qu’elle porte.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01_q5",
            "type": "mcq",
            "prompt": "D’après la leçon, la plaque pacifique est une plaque :",
            "options": [
              "Continentale",
              "Océano-continentale",
              "Océanique",
              "Mineure uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon donne la plaque pacifique comme exemple de plaque océanique et la plaque africaine comme exemple de plaque océano-continentale."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre zone stable et zone instable",
          "stepTheme": "Ne pas confondre zone stable et zone instable",
          "stepBadge": "Ne pas confondre zone stable et zone instable",
          "paragraphText": "Piège : la plaque elle-même est la zone stable ; ce sont ses bordures, zones actives et instables, qui portent les séismes et les volcans.\nLa répartition des séismes et des volcans permet donc de délimiter les plaques.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01_q6",
            "type": "mcq",
            "prompt": "Les zones à fortes activités sismiques et volcaniques correspondent :",
            "options": [
              "Aux zones instables qui délimitent les plaques",
              "Au centre stable de chaque plaque",
              "Uniquement aux plaines abyssales",
              "Aux plateaux continentaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’interprétation précise que ces zones instables subdivisent la lithosphère en vastes zones stables, les plaques."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01_q1",
          "type": "mcq",
          "prompt": "Les séismes et les volcans sont localisés :",
          "options": [
            "Dans les mêmes zones de la surface du globe",
            "Dans des zones totalement différentes",
            "Uniquement au centre des continents",
            "Uniquement sous les océans"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’analyse de la carte montre que séismes et volcans se trouvent dans les mêmes zones."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01_q2",
          "type": "mcq",
          "prompt": "La zone qui sépare l’Afrique et l’Eurasie en passant par la Méditerranée va :",
          "options": [
            "De l’Atlantique au Pacifique uniquement",
            "Du pôle Nord au pôle Sud",
            "Des Açores à la fosse de Java",
            "De la corne de l’Afrique à l’Arabie saoudite seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’une des trois principales zones listées dans l’analyse de la carte."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01_q3",
          "type": "mcq",
          "prompt": "Une plaque lithosphérique est :",
          "options": [
            "Une zone instable à forte activité sismique",
            "Une vaste surface rigide, stable et mobile délimitée par une zone active et instable",
            "Un fragment de dorsale océanique",
            "Une couche liquide du manteau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée dans la leçon après l’étude des principales plaques."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01_q4",
          "type": "mcq",
          "prompt": "Parmi les plaques suivantes, laquelle est une plaque mineure citée dans la leçon ?",
          "options": [
            "La plaque africaine",
            "La plaque pacifique",
            "La plaque eurasiatique",
            "La plaque Nazca"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les plaques mineures citées sont Nazca, des Antilles, arabique, des Cocos et des Philippines."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01_q5",
          "type": "mcq",
          "prompt": "D’après la leçon, la plaque pacifique est une plaque :",
          "options": [
            "Continentale",
            "Océano-continentale",
            "Océanique",
            "Mineure uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon donne la plaque pacifique comme exemple de plaque océanique et la plaque africaine comme exemple de plaque océano-continentale."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p01_q6",
          "type": "mcq",
          "prompt": "Les zones à fortes activités sismiques et volcaniques correspondent :",
          "options": [
            "Aux zones instables qui délimitent les plaques",
            "Au centre stable de chaque plaque",
            "Uniquement aux plaines abyssales",
            "Aux plateaux continentaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’interprétation précise que ces zones instables subdivisent la lithosphère en vastes zones stables, les plaques."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02",
      "order": 2,
      "title": "L’activité des fonds océaniques : dorsale, accrétion et expansion",
      "summary": "Décrire le relief des fonds océaniques, l’accrétion au niveau du rift et l’expansion des fonds océaniques.",
      "conceptExplanation": "Un fond océanique est composé d’une dorsale médio-océanique ; de part et d’autre de la dorsale, on a successivement une plaine abyssale, un talus et un plateau continental.\nLa dorsale médio-océanique est constituée d’une chaîne de montagnes dont le centre est occupé par un rift ou fossé océanique ; les plaines abyssales sont des reliefs plats ; les talus sont des reliefs à forte pente situés aux limites océans-continents ; les plateaux continentaux sont des reliefs plats immergés prolongeant les continents.\nLe plancher des fonds océaniques est constitué, du bas vers le haut, de péridotites, de gabbros, de basaltes et de sédiments, et il est de nature basaltique.\nPar rapport au rift, on note une symétrie des âges du plancher océanique : plus on s’éloigne du rift, plus le plancher est âgé.\nAu niveau du rift, un magma basaltique est émis, subit une cristallisation et crée une nouvelle croûte océanique ; après consolidation, une nouvelle fissure apparaît et le phénomène se répète : c’est l’accrétion.\nCe renouvellement allonge les fonds océaniques : on parle d’expansion des fonds océaniques, qui fait déplacer les plaques lithosphériques ; c’est la tectonique des plaques, dont la dorsale est le siège mais pas le moteur.",
      "keyRule": "Au niveau du rift, l’accrétion crée une nouvelle croûte océanique et provoque l’expansion des fonds océaniques.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte sur les fonds océaniques de l’activité 1",
        "statement": "Complète le texte de l’activité d’application 1 avec les mots proposés : fossé, dorsale, basaltique, sédiments, accrétion, expansion, tectonique des plaques.",
        "methodSteps": [
          "Au centre de l’océan Atlantique, on observe une large surélévation avec à sa crête un fossé profond : c’est la dorsale.",
          "Les bassins océaniques sont de nature basaltique et recouverts de sédiments.",
          "Au niveau du rift sont émises des laves basaltiques : cette émission est appelée accrétion.",
          "On observe ainsi une expansion des fonds océaniques ; les mouvements des plaques sont appelés tectonique des plaques."
        ],
        "conclusion": "Ce sont les réponses du corrigé de l’activité d’application 1 de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dorsale médio-océanique et son rift",
          "stepTheme": "La dorsale médio-océanique et son rift",
          "stepBadge": "La dorsale médio-océanique et son rift",
          "paragraphText": "• Dorsale médio-océanique : chaîne de montagnes des fonds océaniques dont le centre est occupé par un rift ou fossé océanique.\nDe part et d’autre de la dorsale, on trouve successivement une plaine abyssale, un talus et un plateau continental.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02_q1",
            "type": "mcq",
            "prompt": "Le centre de la dorsale médio-océanique est occupé par :",
            "options": [
              "Une plaine abyssale",
              "Un plateau continental",
              "Une fosse de subduction uniquement",
              "Un rift ou fossé océanique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon décrit la dorsale comme une chaîne de montagnes dont le centre est occupé par un rift."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les reliefs des fonds océaniques",
          "stepTheme": "Les reliefs des fonds océaniques",
          "stepBadge": "Les reliefs des fonds océaniques",
          "paragraphText": "Les plaines abyssales sont des reliefs plats et les talus sont des reliefs à forte pente situés aux limites océans-continents.\nLes plateaux continentaux sont des reliefs plats immergés prolongeant les continents, et les fosses océaniques sont des zones étroites et profondes.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02_q2",
            "type": "mcq",
            "prompt": "Les talus sont des reliefs :",
            "options": [
              "Plats immergés prolongeant les continents",
              "À forte pente situés aux limites océans-continents",
              "En forme de chaîne de montagnes océanique",
              "Constitués uniquement de sédiments"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les définitions des reliefs données dans l’analyse des documents."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La constitution du plancher océanique",
          "stepTheme": "La constitution du plancher océanique",
          "stepBadge": "La constitution du plancher océanique",
          "paragraphText": "Le plancher des fonds océaniques est constitué, du bas vers le haut, de péridotites, de gabbros, de basaltes et de sédiments.\nL’interprétation précise que le plancher océanique est de nature basaltique.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02_q3",
            "type": "mcq",
            "prompt": "Du bas vers le haut, le plancher océanique est constitué de :",
            "options": [
              "Sédiments, basaltes, gabbros, péridotites",
              "Péridotites, gabbros, basaltes et sédiments",
              "Basaltes uniquement",
              "Granites et calcaires uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’ordre donné dans l’analyse des documents sur les fonds océaniques."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La symétrie des âges du plancher",
          "stepTheme": "La symétrie des âges du plancher",
          "stepBadge": "La symétrie des âges du plancher",
          "paragraphText": "Par rapport au rift, on note une symétrie des âges du plancher océanique.\nPlus on s’éloigne du rift, plus le plancher est âgé, ce qui indique qu’il est renouvelé au niveau du rift.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02_q4",
            "type": "mcq",
            "prompt": "Plus on s’éloigne du rift de la dorsale, plus le plancher océanique est :",
            "options": [
              "Jeune",
              "Minéralisé",
              "Épais en sédiments uniquement",
              "Âgé"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La symétrie des âges par rapport au rift montre que le plancher le plus âgé est le plus éloigné du rift."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L’accrétion au niveau du rift",
          "stepTheme": "L’accrétion au niveau du rift",
          "stepBadge": "L’accrétion au niveau du rift",
          "paragraphText": "• Accrétion : formation répétée d’une nouvelle croûte océanique au niveau du rift, par émission d’un magma basaltique qui se consolide, puis apparition d’une nouvelle fissure.\nLe magma émis subit une cristallisation fractionnée dans le fond océanique.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02_q5",
            "type": "mcq",
            "prompt": "L’accrétion correspond à :",
            "options": [
              "La création répétée d’une nouvelle croûte océanique au niveau du rift",
              "La disparition de la croûte dans une fosse",
              "L’érosion des continents",
              "La formation d’une croûte continentale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le mécanisme décrit dans l’interprétation de la partie II."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’expansion des fonds océaniques et la tectonique des plaques",
          "stepTheme": "L’expansion des fonds océaniques et la tectonique des plaques",
          "stepBadge": "L’expansion des fonds océaniques et la tectonique des plaques",
          "paragraphText": "Le renouvellement du plancher océanique allonge les fonds océaniques : on parle d’expansion des fonds océaniques.\nCette expansion fait déplacer les plaques lithosphériques : c’est la tectonique des plaques, dont la dorsale est le siège mais pas le moteur.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02_q6",
            "type": "mcq",
            "prompt": "La tectonique des plaques est définie dans la leçon comme :",
            "options": [
              "La formation des sédiments océaniques",
              "L’ensemble des volcans du globe",
              "Le mouvement des plaques lithosphériques",
              "La cristallisation du magma"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Phrase de la leçon : la tectonique des plaques est le mouvement des plaques lithosphériques."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02_q1",
          "type": "mcq",
          "prompt": "Le centre de la dorsale médio-océanique est occupé par :",
          "options": [
            "Une plaine abyssale",
            "Un plateau continental",
            "Une fosse de subduction uniquement",
            "Un rift ou fossé océanique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon décrit la dorsale comme une chaîne de montagnes dont le centre est occupé par un rift."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02_q2",
          "type": "mcq",
          "prompt": "Les talus sont des reliefs :",
          "options": [
            "Plats immergés prolongeant les continents",
            "À forte pente situés aux limites océans-continents",
            "En forme de chaîne de montagnes océanique",
            "Constitués uniquement de sédiments"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les définitions des reliefs données dans l’analyse des documents."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02_q3",
          "type": "mcq",
          "prompt": "Du bas vers le haut, le plancher océanique est constitué de :",
          "options": [
            "Sédiments, basaltes, gabbros, péridotites",
            "Péridotites, gabbros, basaltes et sédiments",
            "Basaltes uniquement",
            "Granites et calcaires uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’ordre donné dans l’analyse des documents sur les fonds océaniques."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02_q4",
          "type": "mcq",
          "prompt": "Plus on s’éloigne du rift de la dorsale, plus le plancher océanique est :",
          "options": [
            "Jeune",
            "Minéralisé",
            "Épais en sédiments uniquement",
            "Âgé"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La symétrie des âges par rapport au rift montre que le plancher le plus âgé est le plus éloigné du rift."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02_q5",
          "type": "mcq",
          "prompt": "L’accrétion correspond à :",
          "options": [
            "La création répétée d’une nouvelle croûte océanique au niveau du rift",
            "La disparition de la croûte dans une fosse",
            "L’érosion des continents",
            "La formation d’une croûte continentale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le mécanisme décrit dans l’interprétation de la partie II."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p02_q6",
          "type": "mcq",
          "prompt": "La tectonique des plaques est définie dans la leçon comme :",
          "options": [
            "La formation des sédiments océaniques",
            "L’ensemble des volcans du globe",
            "Le mouvement des plaques lithosphériques",
            "La cristallisation du magma"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Phrase de la leçon : la tectonique des plaques est le mouvement des plaques lithosphériques."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03",
      "order": 3,
      "title": "Le mécanisme : courants de convection et énergie interne du globe",
      "summary": "Expliquer le mouvement des plaques par les courants de convection de l’asthénosphère alimentés par l’énergie interne du globe.",
      "conceptExplanation": "Dans l’expérience de la leçon, on verse une poignée de riz dans un ballon à fond plat contenant de l’eau, puis on porte l’eau à ébullition : on observe des mouvements des grains de riz, qui se déplacent de façon alternative du fond vers la surface en suivant un trajet circulaire.\nLe mouvement des grains de riz est dû à celui des molécules d’eau : ces mouvements, d’une zone chaude vers une zone froide, sont dus à des courants de convection.\nUn mouvement de convection est un transfert d’énergie (chaleur) d’une zone chaude vers une zone froide dans un fluide (liquide ou gaz).\nL’intérieur du globe terrestre étant chaud et sa surface froide, l’énergie interne du globe, libérée par la désintégration des éléments radioactifs du manteau tels que l’uranium, le thorium et le potassium radioactif, provoque des courants de convection du manteau, précisément de l’asthénosphère.\nCes courants de convection font déplacer les plaques lithosphériques : ce sont des forces tectoniques.",
      "keyRule": "Le moteur du mouvement des plaques est l’énergie interne du globe, qui entretient les courants de convection de l’asthénosphère.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter l’expérience des grains de riz dans l’eau en ébullition",
        "statement": "Une poignée de riz est versée dans un ballon d’eau porté à ébullition. Explique le mouvement observé des grains de riz et son lien avec le mouvement des plaques.",
        "methodSteps": [
          "On observe des mouvements des grains de riz dans le ballon chauffé.",
          "Les grains se déplacent du fond vers la surface en suivant un trajet circulaire, entraînés par les molécules d’eau.",
          "Ces mouvements d’une zone chaude vers une zone froide sont des courants de convection.",
          "Par analogie, les courants de convection de l’asthénosphère font déplacer les plaques lithosphériques."
        ],
        "conclusion": "C’est l’interprétation de l’expérience de la partie III de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "L’expérience des grains de riz",
          "stepTheme": "L’expérience des grains de riz",
          "stepBadge": "L’expérience des grains de riz",
          "paragraphText": "On verse une poignée de riz dans un ballon à fond plat contenant de l’eau, puis on porte l’eau à ébullition.\nOn observe des mouvements des grains de riz, qui se déplacent du fond vers la surface en suivant un trajet circulaire.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03_q1",
            "type": "mcq",
            "prompt": "Dans l’expérience de la leçon, les grains de riz se déplacent :",
            "options": [
              "Du fond vers la surface en suivant un trajet circulaire",
              "Sans aucun mouvement",
              "Uniquement horizontalement au fond",
              "Vers l’extérieur du ballon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le résultat observé et analysé dans l’expérience de la partie III."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le courant de convection",
          "stepTheme": "Le courant de convection",
          "stepBadge": "Le courant de convection",
          "paragraphText": "• Courant de convection : transfert d’énergie (chaleur) d’une zone chaude vers une zone froide dans un fluide, liquide ou gaz.\nLe mouvement des grains de riz est dû à celui des molécules d’eau animées de ces courants.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03_q2",
            "type": "mcq",
            "prompt": "Un mouvement de convection est un transfert d’énergie :",
            "options": [
              "D’une zone froide vers une zone chaude, dans un solide",
              "Sans transfert de chaleur",
              "D’une zone chaude vers une zone froide, dans un fluide",
              "Uniquement dans le vide"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la définition donnée dans l’interprétation de l’expérience."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’origine de l’énergie interne du globe",
          "stepTheme": "L’origine de l’énergie interne du globe",
          "stepBadge": "L’origine de l’énergie interne du globe",
          "paragraphText": "L’énergie interne du globe terrestre est libérée par la désintégration des éléments radioactifs du manteau.\nLa leçon cite l’uranium, le thorium et le potassium radioactif.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03_q3",
            "type": "mcq",
            "prompt": "L’énergie interne du globe est libérée par la désintégration :",
            "options": [
              "Des sédiments océaniques",
              "D’éléments radioactifs du manteau comme l’uranium, le thorium et le potassium radioactif",
              "Du magma des volcans uniquement",
              "De l’eau des océans"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les éléments radioactifs cités dans la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les courants de convection de l’asthénosphère",
          "stepTheme": "Les courants de convection de l’asthénosphère",
          "stepBadge": "Les courants de convection de l’asthénosphère",
          "paragraphText": "L’intérieur du globe étant chaud et sa surface froide, l’énergie interne provoque des mouvements ou courants de convection du manteau, précisément de l’asthénosphère.\nCes courants font déplacer les plaques lithosphériques : on dit qu’ils sont des forces tectoniques.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03_q4",
            "type": "mcq",
            "prompt": "Les courants de convection qui font déplacer les plaques se produisent précisément dans :",
            "options": [
              "La croûte océanique",
              "Les dorsales elles-mêmes",
              "L’atmosphère",
              "L’asthénosphère"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon localise ces courants dans le manteau, précisément dans l’asthénosphère."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La dorsale est le siège, pas le moteur",
          "stepTheme": "La dorsale est le siège, pas le moteur",
          "stepBadge": "La dorsale est le siège, pas le moteur",
          "paragraphText": "Piège : la dorsale est le siège de la tectonique des plaques, mais elle n’en est pas le moteur.\nLa conclusion générale précise que le moteur est l’énergie interne du globe terrestre.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03_q5",
            "type": "mcq",
            "prompt": "Selon la conclusion générale de la leçon, le moteur de la tectonique des plaques est :",
            "options": [
              "La dorsale océanique",
              "Les séismes",
              "L’énergie interne du globe terrestre",
              "Les volcans"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les dorsales constituent le siège de la tectonique, et son moteur est l’énergie interne du globe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Le raisonnement de la partie III",
          "stepTheme": "Le raisonnement de la partie III",
          "stepBadge": "Le raisonnement de la partie III",
          "paragraphText": "La démarche suit l’expérience : présentation, résultats, analyse du trajet circulaire des grains, puis interprétation par les courants de convection.\nOn transpose ensuite ce mécanisme à l’asthénosphère pour expliquer le déplacement des plaques.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03_q6",
            "type": "mcq",
            "prompt": "Dans l’expérience, le mouvement des grains de riz est dû :",
            "options": [
              "Au mouvement des molécules d’eau, animées de courants de convection",
              "À l’ébullition elle-même sans courant",
              "À la forme du ballon uniquement",
              "Au poids des grains de riz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’interprétation attribue le mouvement des grains à celui des molécules d’eau."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03_q1",
          "type": "mcq",
          "prompt": "Dans l’expérience de la leçon, les grains de riz se déplacent :",
          "options": [
            "Du fond vers la surface en suivant un trajet circulaire",
            "Sans aucun mouvement",
            "Uniquement horizontalement au fond",
            "Vers l’extérieur du ballon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le résultat observé et analysé dans l’expérience de la partie III."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03_q2",
          "type": "mcq",
          "prompt": "Un mouvement de convection est un transfert d’énergie :",
          "options": [
            "D’une zone froide vers une zone chaude, dans un solide",
            "Sans transfert de chaleur",
            "D’une zone chaude vers une zone froide, dans un fluide",
            "Uniquement dans le vide"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la définition donnée dans l’interprétation de l’expérience."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03_q3",
          "type": "mcq",
          "prompt": "L’énergie interne du globe est libérée par la désintégration :",
          "options": [
            "Des sédiments océaniques",
            "D’éléments radioactifs du manteau comme l’uranium, le thorium et le potassium radioactif",
            "Du magma des volcans uniquement",
            "De l’eau des océans"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les éléments radioactifs cités dans la leçon."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03_q4",
          "type": "mcq",
          "prompt": "Les courants de convection qui font déplacer les plaques se produisent précisément dans :",
          "options": [
            "La croûte océanique",
            "Les dorsales elles-mêmes",
            "L’atmosphère",
            "L’asthénosphère"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon localise ces courants dans le manteau, précisément dans l’asthénosphère."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03_q5",
          "type": "mcq",
          "prompt": "Selon la conclusion générale de la leçon, le moteur de la tectonique des plaques est :",
          "options": [
            "La dorsale océanique",
            "Les séismes",
            "L’énergie interne du globe terrestre",
            "Les volcans"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les dorsales constituent le siège de la tectonique, et son moteur est l’énergie interne du globe."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p03_q6",
          "type": "mcq",
          "prompt": "Dans l’expérience, le mouvement des grains de riz est dû :",
          "options": [
            "Au mouvement des molécules d’eau, animées de courants de convection",
            "À l’ébullition elle-même sans courant",
            "À la forme du ballon uniquement",
            "Au poids des grains de riz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’interprétation attribue le mouvement des grains à celui des molécules d’eau."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04",
      "order": 4,
      "title": "Les conséquences des mouvements : subduction, obduction et collision",
      "summary": "Distinguer convergence, divergence et décrochement, puis subduction, obduction et collision et leurs conséquences.",
      "conceptExplanation": "On distingue les mouvements ou forces tectoniques de convergence, qui rapprochent deux plaques lithosphériques, les mouvements de divergence, qui séparent deux plaques lithosphériques, et les mouvements de décrochement, qui font déplacer horizontalement deux plaques l’une par rapport à l’autre.\nLes forces tectoniques peuvent provoquer la séparation de deux plaques, ce qui conduit à la formation de dorsales océaniques et à l’ouverture des océans.\nElles peuvent aussi provoquer l’affrontement de deux plaques : dans la subduction, une plaque océanique s’enfonce sous une autre plaque, continentale ou océanique ; la zone d’affrontement est appelée zone de subduction, et la subduction entraîne la formation de fosses océaniques, des éruptions volcaniques, des séismes, un métamorphisme et la formation de chaînes de montagnes de subduction.\nDans l’obduction, une plaque océanique s’enfonce totalement sous une plaque continentale puis monte sur cette dernière, ce qui entraîne la formation de chaînes de montagnes d’obduction.\nDans la collision, deux plaques de même densité s’affrontent, ce qui entraîne la formation de chaînes de montagnes de collision, comme la chaîne de l’Himalaya évoquée dans la situation d’apprentissage, formée par la rencontre de la plaque indienne et de la plaque asiatique.",
      "keyRule": "Subduction, obduction et collision sont trois formes d’affrontement de plaques qui conduisent à la formation de chaînes de montagnes.",
      "formulas": [],
      "workedExample": {
        "title": "Nommer les mouvements des documents de la situation d’évaluation 1",
        "statement": "Les documents présentent trois mouvements désignés par a, b et c. Nomme chacun d’eux et décris son déroulement.",
        "methodSteps": [
          "a égale subduction : une plaque océanique s’enfonce sous une autre plaque.",
          "b égale collision : deux plaques de même densité s’affrontent.",
          "c égale obduction : une plaque océanique s’enfonce totalement sous une plaque continentale puis monte sur cette dernière.",
          "Ces mouvements de plaques conduisent à la formation des chaînes de montagnes."
        ],
        "conclusion": "Ce sont les réponses du corrigé de la situation d’évaluation 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Convergence, divergence et décrochement",
          "stepTheme": "Convergence, divergence et décrochement",
          "stepBadge": "Convergence, divergence et décrochement",
          "paragraphText": "• Convergence : mouvement qui rapproche deux plaques lithosphériques.\n• Divergence : mouvement qui sépare deux plaques lithosphériques.\n• Décrochement : mouvement qui fait déplacer horizontalement deux plaques l’une par rapport à l’autre.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04_q1",
            "type": "mcq",
            "prompt": "Le mouvement de divergence entre deux plaques correspond à :",
            "options": [
              "Leur rapprochement",
              "Leur déplacement horizontal l’une par rapport à l’autre",
              "L’enfoncement de l’une sous l’autre",
              "Leur séparation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La divergence sépare deux plaques : elle conduit à la formation de dorsales océaniques et à l’ouverture des océans."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La séparation de deux plaques",
          "stepTheme": "La séparation de deux plaques",
          "stepBadge": "La séparation de deux plaques",
          "paragraphText": "La séparation de deux plaques conduit à la formation de dorsales océaniques et à l’ouverture des océans.\nC’est au niveau de ces dorsales que l’accrétion crée une nouvelle croûte océanique.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04_q2",
            "type": "mcq",
            "prompt": "La séparation de deux plaques lithosphériques conduit à :",
            "options": [
              "La formation de fosses océaniques uniquement",
              "La formation de dorsales océaniques et l’ouverture des océans",
              "La disparition des océans",
              "Un métamorphisme de contact uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la conséquence de la séparation donnée dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La subduction",
          "stepTheme": "La subduction",
          "stepBadge": "La subduction",
          "paragraphText": "• Subduction : enfoncement d’une plaque océanique sous une autre plaque, continentale ou océanique.\nLa zone d’affrontement est appelée zone de subduction.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04_q3",
            "type": "mcq",
            "prompt": "La subduction correspond à :",
            "options": [
              "La remontée d’une plaque océanique sur un continent",
              "L’enfoncement d’une plaque océanique sous une autre plaque",
              "L’affrontement de deux plaques de même densité sans enfoncement",
              "La séparation de deux plaques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée dans la leçon et reprise dans le corrigé de la situation d’évaluation 1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les conséquences de la subduction",
          "stepTheme": "Les conséquences de la subduction",
          "stepBadge": "Les conséquences de la subduction",
          "paragraphText": "La subduction entraîne la formation des fosses océaniques, des éruptions volcaniques, des séismes et un métamorphisme.\nElle entraîne aussi la formation de chaînes de montagnes de subduction.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04_q4",
            "type": "mcq",
            "prompt": "Parmi les phénomènes suivants, lequel est une conséquence de la subduction selon la leçon ?",
            "options": [
              "L’ouverture d’un océan",
              "La formation d’une plaine abyssale",
              "L’accrétion au niveau d’un rift",
              "La formation de fosses océaniques"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon liste fosses océaniques, éruptions volcaniques, séismes, métamorphisme et chaînes de montagnes de subduction."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L’obduction et la collision",
          "stepTheme": "L’obduction et la collision",
          "stepBadge": "L’obduction et la collision",
          "paragraphText": "• Obduction : une plaque océanique s’enfonce totalement sous une plaque continentale puis monte sur cette dernière, formant des chaînes de montagnes d’obduction.\n• Collision : deux plaques de même densité s’affrontent, formant des chaînes de montagnes de collision.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04_q5",
            "type": "mcq",
            "prompt": "La collision se produit lorsque :",
            "options": [
              "Deux plaques de même densité s’affrontent",
              "Une plaque océanique s’enfonce sous un continent",
              "Deux plaques s’écartent",
              "Deux plaques glissent horizontalement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition de la collision donnée dans la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’exemple de l’Himalaya",
          "stepTheme": "L’exemple de l’Himalaya",
          "stepBadge": "L’exemple de l’Himalaya",
          "paragraphText": "La situation d’apprentissage évoque la chaîne de montagnes de l’Himalaya, située à la frontière entre le continent indien et le continent asiatique.\nElle s’est formée à la suite d’une rencontre entre la plaque indienne et la plaque asiatique.",
          "exercise": {
            "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04_q6",
            "type": "mcq",
            "prompt": "D’après la situation d’apprentissage, la chaîne de l’Himalaya s’est formée à la suite :",
            "options": [
              "D’une accrétion océanique",
              "D’une érosion intense",
              "D’une rencontre entre la plaque indienne et la plaque asiatique",
              "D’une subduction océanique ancienne uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’exemple introductif de la leçon, une rencontre de plaques à l’origine d’une chaîne de montagnes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04_q1",
          "type": "mcq",
          "prompt": "Le mouvement de divergence entre deux plaques correspond à :",
          "options": [
            "Leur rapprochement",
            "Leur déplacement horizontal l’une par rapport à l’autre",
            "L’enfoncement de l’une sous l’autre",
            "Leur séparation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La divergence sépare deux plaques : elle conduit à la formation de dorsales océaniques et à l’ouverture des océans."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04_q2",
          "type": "mcq",
          "prompt": "La séparation de deux plaques lithosphériques conduit à :",
          "options": [
            "La formation de fosses océaniques uniquement",
            "La formation de dorsales océaniques et l’ouverture des océans",
            "La disparition des océans",
            "Un métamorphisme de contact uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la conséquence de la séparation donnée dans la leçon."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04_q3",
          "type": "mcq",
          "prompt": "La subduction correspond à :",
          "options": [
            "La remontée d’une plaque océanique sur un continent",
            "L’enfoncement d’une plaque océanique sous une autre plaque",
            "L’affrontement de deux plaques de même densité sans enfoncement",
            "La séparation de deux plaques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée dans la leçon et reprise dans le corrigé de la situation d’évaluation 1."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04_q4",
          "type": "mcq",
          "prompt": "Parmi les phénomènes suivants, lequel est une conséquence de la subduction selon la leçon ?",
          "options": [
            "L’ouverture d’un océan",
            "La formation d’une plaine abyssale",
            "L’accrétion au niveau d’un rift",
            "La formation de fosses océaniques"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon liste fosses océaniques, éruptions volcaniques, séismes, métamorphisme et chaînes de montagnes de subduction."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04_q5",
          "type": "mcq",
          "prompt": "La collision se produit lorsque :",
          "options": [
            "Deux plaques de même densité s’affrontent",
            "Une plaque océanique s’enfonce sous un continent",
            "Deux plaques s’écartent",
            "Deux plaques glissent horizontalement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition de la collision donnée dans la leçon."
        },
        {
          "id": "premiere_d_svt_l07_mouvements_plaques_lithospheriques_p04_q6",
          "type": "mcq",
          "prompt": "D’après la situation d’apprentissage, la chaîne de l’Himalaya s’est formée à la suite :",
          "options": [
            "D’une accrétion océanique",
            "D’une érosion intense",
            "D’une rencontre entre la plaque indienne et la plaque asiatique",
            "D’une subduction océanique ancienne uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’exemple introductif de la leçon, une rencontre de plaques à l’origine d’une chaîne de montagnes."
        }
      ]
    }
  ]
};
