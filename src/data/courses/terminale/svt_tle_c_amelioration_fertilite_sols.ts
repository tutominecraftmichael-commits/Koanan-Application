import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 11 : L'amélioration de la fertilité des sols » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2118
export const SVT_TLE_C_L11_AMELIORATION_FERTILITE_SOLS: CurriculumChapter = {
  "id": "terminale_c_svt_l11_amelioration_fertilite_sols",
  "subjectId": "svt",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 11,
  "title": "Leçon 11 : L'amélioration de la fertilité des sols",
  "summary": "On identifie les techniques d'amélioration de la fertilité d'un sol (engrais chimiques, organiques et verts, amendements calcaire et humifère, drainage, irrigation, labour, jachère et assolement) et on explique les effets de leur utilisation.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2118",
  "points": [
    {
      "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01",
      "order": 1,
      "title": "Les engrais chimiques ou minéraux",
      "summary": "Définir les engrais chimiques, leurs éléments (N, P, K) et leurs effets, y compris leurs risques à fortes doses.",
      "conceptExplanation": "Les engrais chimiques, ou engrais minéraux, apportent à la plante les éléments minéraux directement assimilables.\nIls sont constitués des éléments de base suivants : azote (N), phosphore (P) et potassium (K), appelés macronutriments.\nIls peuvent aussi être constitués d'éléments secondaires tels que le calcium, le soufre et le magnésium, et d'oligo-éléments comme le fer et le manganèse.\nLes engrais chimiques améliorent les propriétés chimiques du sol. Cependant, en dépit de leurs effets immédiats, ils sont connus pour leur toxicité à fortes doses et pour les risques de pollution de l'environnement liés à leur mauvaise utilisation : l'engrais chimique doit être utilisé de façon rationnelle pour préserver l'environnement.",
      "keyRule": "Engrais chimiques égale éléments N, P, K directement assimilables et effets immédiats, mais toxicité et pollution en cas d'abus : usage rationnel obligatoire.",
      "formulas": [],
      "workedExample": {
        "title": "Jugement d'affirmations sur les engrais (exercice 2)",
        "statement": "L'exercice 2 demande de relever les affirmations justes parmi des propositions sur les techniques d'amélioration de la fertilité, dont celle-ci : l'amendement calcaire augmente le pH du sol. Pour les engrais chimiques, quel usage la leçon recommande-t-elle ?",
        "methodSteps": [
          "On relève d'abord les effets immédiats et directs des engrais chimiques sur la nutrition minérale de la plante.",
          "On tient compte ensuite de l'avertissement du texte : toxicité à fortes doses et risques de pollution en cas de mauvaise utilisation.",
          "On retient donc un usage rationnel, adapté aux besoins du sol."
        ],
        "conclusion": "La leçon recommande un usage rationnel des engrais chimiques, malgré leurs effets immédiats."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les engrais chimiques ou minéraux",
          "stepTheme": "Les engrais chimiques ou minéraux",
          "stepBadge": "Les engrais chimiques ou minéraux",
          "paragraphText": "• Engrais chimiques (ou engrais minéraux) : des engrais qui apportent à la plante les éléments minéraux directement assimilables.\nC'est leur caractère directement assimilable qui les oppose aux engrais organiques.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01_q1",
            "type": "mcq",
            "prompt": "Les engrais chimiques apportent à la plante des éléments minéraux :",
            "options": [
              "Qui doivent d'abord être minéralisés pendant des mois",
              "Directement assimilables",
              "Uniquement sous forme d'humus",
              "Que la plante ne peut pas utiliser"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La première phrase du texte définit les engrais chimiques par des éléments minéraux directement assimilables."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les macronutriments N, P et K",
          "stepTheme": "Les macronutriments N, P et K",
          "stepBadge": "Les macronutriments N, P et K",
          "paragraphText": "Les éléments de base des engrais chimiques sont l'azote (N), le phosphore (P) et le potassium (K).\nLa leçon les appelle macronutriments.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01_q2",
            "type": "mcq",
            "prompt": "Les macronutriments de base des engrais chimiques sont :",
            "options": [
              "Le calcium, le soufre et le magnésium",
              "Le fer et le manganèse",
              "L'azote, le phosphore et le potassium",
              "Le carbone et l'oxygène"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte nomme azote (N), phosphore (P) et potassium (K) comme éléments de base appelés macronutriments."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Éléments secondaires et oligo-éléments",
          "stepTheme": "Éléments secondaires et oligo-éléments",
          "stepBadge": "Éléments secondaires et oligo-éléments",
          "paragraphText": "Les engrais chimiques peuvent aussi contenir des éléments secondaires : le calcium, le soufre et le magnésium.\nIls peuvent également contenir des oligo-éléments, comme le fer et le manganèse.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01_q3",
            "type": "mcq",
            "prompt": "Le fer et le manganèse sont cités dans le texte comme :",
            "options": [
              "Des macronutriments",
              "Des oligo-éléments",
              "Des éléments secondaires",
              "Des bactéries du sol"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte range le fer et le manganèse parmi les oligo-éléments, après les éléments secondaires calcium, soufre et magnésium."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'effet sur les propriétés chimiques du sol",
          "stepTheme": "L'effet sur les propriétés chimiques du sol",
          "stepBadge": "L'effet sur les propriétés chimiques du sol",
          "paragraphText": "Les engrais chimiques et organiques améliorent les propriétés chimiques du sol.\nLes engrais chimiques le font en mettant directement à la disposition de la plante des éléments minéraux assimilables.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01_q4",
            "type": "mcq",
            "prompt": "Les engrais chimiques améliorent principalement :",
            "options": [
              "Les propriétés chimiques du sol",
              "La structure grumeleuse à eux seuls",
              "L'aération du sol",
              "L'activité des vers de terre directement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'analyse attribue aux engrais chimiques et organiques l'amélioration des propriétés chimiques du sol."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La toxicité à fortes doses",
          "stepTheme": "La toxicité à fortes doses",
          "stepBadge": "La toxicité à fortes doses",
          "paragraphText": "Piège : augmenter les doses pour augmenter indéfiniment la production.\nEn dépit de leurs effets immédiats, les engrais chimiques sont connus pour leur toxicité à fortes doses et les risques de pollution liés à leur mauvaise utilisation.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01_q5",
            "type": "mcq",
            "prompt": "L'abus d'engrais chimiques expose à :",
            "options": [
              "Une meilleure structure du sol dans tous les cas",
              "Des risques de toxicité pour la plante et de pollution de l'environnement",
              "Aucun inconvénient",
              "Une disparition des oligo-éléments du sol uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La fin de l'analyse de la partie I et la conclusion insistent sur la toxicité à fortes doses et la pollution en cas d'abus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le jardin de la coopérative scolaire",
          "stepTheme": "Le jardin de la coopérative scolaire",
          "stepBadge": "Le jardin de la coopérative scolaire",
          "paragraphText": "La situation d'apprentissage part du jardin de légumes de la coopérative, exploité depuis trois ans, dont la production baisse et est de mauvaise qualité.\nLe professeur informe les élèves que le sol est devenu pauvre et a besoin d'éléments nutritifs pour améliorer sa fertilité.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01_q6",
            "type": "mcq",
            "prompt": "Dans la situation d'apprentissage, le sol du jardin de la coopérative est devenu :",
            "options": [
              "Trop riche en éléments nutritifs",
              "Pauvre, avec un besoin d'éléments nutritifs pour améliorer sa fertilité",
              "Inondé en permanence",
              "Trop calcaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le diagnostic du professeur encadreur qui lance le projet d'amélioration de la production du jardin."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01_q1",
          "type": "mcq",
          "prompt": "Les engrais chimiques apportent à la plante des éléments minéraux :",
          "options": [
            "Qui doivent d'abord être minéralisés pendant des mois",
            "Directement assimilables",
            "Uniquement sous forme d'humus",
            "Que la plante ne peut pas utiliser"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La première phrase du texte définit les engrais chimiques par des éléments minéraux directement assimilables."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01_q2",
          "type": "mcq",
          "prompt": "Les macronutriments de base des engrais chimiques sont :",
          "options": [
            "Le calcium, le soufre et le magnésium",
            "Le fer et le manganèse",
            "L'azote, le phosphore et le potassium",
            "Le carbone et l'oxygène"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte nomme azote (N), phosphore (P) et potassium (K) comme éléments de base appelés macronutriments."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01_q3",
          "type": "mcq",
          "prompt": "Le fer et le manganèse sont cités dans le texte comme :",
          "options": [
            "Des macronutriments",
            "Des oligo-éléments",
            "Des éléments secondaires",
            "Des bactéries du sol"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte range le fer et le manganèse parmi les oligo-éléments, après les éléments secondaires calcium, soufre et magnésium."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01_q4",
          "type": "mcq",
          "prompt": "Les engrais chimiques améliorent principalement :",
          "options": [
            "Les propriétés chimiques du sol",
            "La structure grumeleuse à eux seuls",
            "L'aération du sol",
            "L'activité des vers de terre directement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'analyse attribue aux engrais chimiques et organiques l'amélioration des propriétés chimiques du sol."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01_q5",
          "type": "mcq",
          "prompt": "L'abus d'engrais chimiques expose à :",
          "options": [
            "Une meilleure structure du sol dans tous les cas",
            "Des risques de toxicité pour la plante et de pollution de l'environnement",
            "Aucun inconvénient",
            "Une disparition des oligo-éléments du sol uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La fin de l'analyse de la partie I et la conclusion insistent sur la toxicité à fortes doses et la pollution en cas d'abus."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p01_q6",
          "type": "mcq",
          "prompt": "Dans la situation d'apprentissage, le sol du jardin de la coopérative est devenu :",
          "options": [
            "Trop riche en éléments nutritifs",
            "Pauvre, avec un besoin d'éléments nutritifs pour améliorer sa fertilité",
            "Inondé en permanence",
            "Trop calcaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le diagnostic du professeur encadreur qui lance le projet d'amélioration de la production du jardin."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02",
      "order": 2,
      "title": "Les engrais organiques et les engrais verts",
      "summary": "Distinguer les engrais organiques, qui exigent une minéralisation, et les engrais verts, dont les légumineuses fixent l'azote.",
      "conceptExplanation": "Les engrais organiques sont généralement d'origine animale ou végétale ; ils ne sont pas directement assimilables par la plante et subissent au préalable une minéralisation qui libère des éléments assimilables. Ils favorisent par ailleurs la multiplication rapide de la microflore du sol, améliorant ainsi les propriétés biologiques du sol.\nLes engrais organiques d'origine animale (déchets d'abattoirs : sang desséché, cornes torréfiées, déchets de poissons, boues d'épuration) sont intéressants pour leur apport en azote, mais n'enrichissent guère le sol en humus stable. Ceux d'origine végétale comprennent les déchets végétaux, les fumiers (litières végétales et déjections), le lisier et les fientes.\nUn engrais vert est une plante que l'on incorpore au sol qui la fait pousser pour en améliorer la fertilité. Les légumineuses utilisées comme engrais vert enrichissent le sol en azote assimilable, car leur système radiculaire associe des bactéries du genre Rhizobium, capables de fixer l'azote atmosphérique et de le transformer en azote assimilable.\nLes engrais verts couvrent rapidement le sol et le protègent contre l'érosion, divisent le sol grâce à leurs racines et stimulent les sécrétions microbiennes ; ils permettent d'accroître la production sur les mêmes parcelles, ce qui évite de changer de surfaces cultivées chaque année et empêche ainsi la déforestation.",
      "keyRule": "Organiques : minéralisation préalable et microflore stimulée ; engrais verts : couverture anti-érosion et, pour les légumineuses, azote fixé par Rhizobium.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir la technique pour le riz (exercice 3)",
        "statement": "Dans l'exercice 3, des élèves obtiennent de mauvaises récoltes de riz et un tableau compare les rendements : 2100 kg par hectare sans engrais ni légumineuse, 3800 avec 60 kg d'engrais azotés par hectare, 5900 avec une légumineuse comme engrais vert. Quelle technique le tableau désigne-t-il comme la meilleure ?",
        "methodSteps": [
          "On compare les trois rendements : le témoin sans apport donne 2100 kg par hectare.",
          "L'engrais azoté fait monter le rendement à 3800 kg par hectare, mais la légumineuse comme engrais vert le porte à 5900 kg par hectare.",
          "La légumineuse enrichit le sol en azote assimilable grâce aux bactéries Rhizobium de ses racines, ce qui explique le meilleur rendement."
        ],
        "conclusion": "La technique qui convient le mieux, d'après le tableau, est l'emploi d'une légumineuse comme engrais vert."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les engrais organiques",
          "stepTheme": "Les engrais organiques",
          "stepBadge": "Les engrais organiques",
          "paragraphText": "• Engrais organiques : des engrais généralement d'origine animale ou végétale.\nContrairement aux engrais chimiques, ils ne sont pas directement assimilables par la plante.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02_q1",
            "type": "mcq",
            "prompt": "Les engrais organiques se distinguent des engrais chimiques car ils :",
            "options": [
              "Sont directement assimilables par la plante",
              "Ne sont pas directement assimilables et subissent une minéralisation préalable",
              "Ne contiennent aucun élément nutritif",
              "Sont toujours d'origine minérale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse précise que les engrais organiques subissent au préalable une minéralisation qui libère les éléments assimilables."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Origines animale et végétale",
          "stepTheme": "Origines animale et végétale",
          "stepBadge": "Origines animale et végétale",
          "paragraphText": "D'origine animale : les déchets d'abattoirs comme le sang desséché, les cornes torréfiées, les déchets de poissons et les boues d'épuration des eaux.\nD'origine végétale : les déchets végétaux et les fumiers, composés de litières végétales et de déjections, ainsi que le lisier et les fientes.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02_q2",
            "type": "mcq",
            "prompt": "Parmi les exemples suivants, lequel est un engrais organique d'origine animale cité dans le texte ?",
            "options": [
              "Le sang desséché et les cornes torréfiées des déchets d'abattoirs",
              "L'engrais vert de légumineuses",
              "La chaux vive",
              "Le sulfate de calcium"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte cite les déchets d'abattoirs (sang desséché, cornes torréfiées, déchets de poissons) comme engrais organiques d'origine animale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'effet sur la microflore du sol",
          "stepTheme": "L'effet sur la microflore du sol",
          "stepBadge": "L'effet sur la microflore du sol",
          "paragraphText": "Les engrais organiques favorisent la multiplication rapide de la microflore du sol.\nIls améliorent ainsi les propriétés biologiques du sol, en plus des propriétés chimiques ; en revanche, ceux d'origine animale n'enrichissent guère le sol en humus stable.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02_q3",
            "type": "mcq",
            "prompt": "Les engrais organiques améliorent les propriétés biologiques du sol en :",
            "options": [
              "Élevant directement le pH jusqu'à 7",
              "Favorisant la multiplication rapide de la microflore du sol",
              "Floculant l'argile par les ions calcium",
              "Évacuant l'excès d'eau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le rôle souligné dès le texte : action favorisant la multiplication rapide de la microflore du sol."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L'engrais vert",
          "stepTheme": "L'engrais vert",
          "stepBadge": "L'engrais vert",
          "paragraphText": "• Engrais vert : une plante que l'on incorpore au sol qui la fait pousser, pour en améliorer la fertilité.\nCe peut être une plante cultivée spécialement dans ce but.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02_q4",
            "type": "mcq",
            "prompt": "Un engrais vert est :",
            "options": [
              "Un engrais chimique de couleur verte",
              "Une plante incorporée au sol qui la fait pousser pour améliorer sa fertilité",
              "Un amendement calcaire",
              "Un produit de traitement des plantes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition du texte est reprise mot pour mot dans cette étape."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les légumineuses et les bactéries Rhizobium",
          "stepTheme": "Les légumineuses et les bactéries Rhizobium",
          "stepBadge": "Les légumineuses et les bactéries Rhizobium",
          "paragraphText": "Les légumineuses utilisées comme engrais vert enrichissent le sol en azote assimilable.\nLeur système radiculaire associe des bactéries du genre Rhizobium, capables de fixer l'azote atmosphérique et de le transformer en azote assimilable.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02_q5",
            "type": "mcq",
            "prompt": "Les légumineuses enrichissent le sol en azote assimilable grâce à :",
            "options": [
              "Des bactéries du genre Rhizobium associées à leurs racines, qui fixent l'azote atmosphérique",
              "Leur décomposition en humus uniquement",
              "L'apport de chaux vive",
              "Leurs fleurs très abondantes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte attribue la fixation de l'azote atmosphérique aux bactéries Rhizobium du système radiculaire des légumineuses."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les rôles protecteurs des engrais verts",
          "stepTheme": "Les rôles protecteurs des engrais verts",
          "stepBadge": "Les rôles protecteurs des engrais verts",
          "paragraphText": "Les engrais verts couvrent rapidement le sol et protègent sa surface contre la battance des pluies et contre l'érosion.\nPiège : les réduire à un simple apport d'azote ; ils divisent aussi le sol par leurs racines, stimulent les sécrétions microbiennes et évitent de changer de parcelles chaque année, ce qui empêche la déforestation.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02_q6",
            "type": "mcq",
            "prompt": "Parmi les rôles suivants, lequel est attribué aux engrais verts dans le texte ?",
            "options": [
              "Provoquer l'érosion pour aérer le sol",
              "Couvrir rapidement le sol et protéger la surface contre l'érosion",
              "Remplacer les amendements calcaires sur les sols acides",
              "Augmenter la toxicité du sol"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le premier rôle listé pour les engrais verts est la couverture rapide du sol et sa protection contre la battance des pluies et l'érosion."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02_q1",
          "type": "mcq",
          "prompt": "Les engrais organiques se distinguent des engrais chimiques car ils :",
          "options": [
            "Sont directement assimilables par la plante",
            "Ne sont pas directement assimilables et subissent une minéralisation préalable",
            "Ne contiennent aucun élément nutritif",
            "Sont toujours d'origine minérale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse précise que les engrais organiques subissent au préalable une minéralisation qui libère les éléments assimilables."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02_q2",
          "type": "mcq",
          "prompt": "Parmi les exemples suivants, lequel est un engrais organique d'origine animale cité dans le texte ?",
          "options": [
            "Le sang desséché et les cornes torréfiées des déchets d'abattoirs",
            "L'engrais vert de légumineuses",
            "La chaux vive",
            "Le sulfate de calcium"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte cite les déchets d'abattoirs (sang desséché, cornes torréfiées, déchets de poissons) comme engrais organiques d'origine animale."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02_q3",
          "type": "mcq",
          "prompt": "Les engrais organiques améliorent les propriétés biologiques du sol en :",
          "options": [
            "Élevant directement le pH jusqu'à 7",
            "Favorisant la multiplication rapide de la microflore du sol",
            "Floculant l'argile par les ions calcium",
            "Évacuant l'excès d'eau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le rôle souligné dès le texte : action favorisant la multiplication rapide de la microflore du sol."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02_q4",
          "type": "mcq",
          "prompt": "Un engrais vert est :",
          "options": [
            "Un engrais chimique de couleur verte",
            "Une plante incorporée au sol qui la fait pousser pour améliorer sa fertilité",
            "Un amendement calcaire",
            "Un produit de traitement des plantes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition du texte est reprise mot pour mot dans cette étape."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02_q5",
          "type": "mcq",
          "prompt": "Les légumineuses enrichissent le sol en azote assimilable grâce à :",
          "options": [
            "Des bactéries du genre Rhizobium associées à leurs racines, qui fixent l'azote atmosphérique",
            "Leur décomposition en humus uniquement",
            "L'apport de chaux vive",
            "Leurs fleurs très abondantes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte attribue la fixation de l'azote atmosphérique aux bactéries Rhizobium du système radiculaire des légumineuses."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p02_q6",
          "type": "mcq",
          "prompt": "Parmi les rôles suivants, lequel est attribué aux engrais verts dans le texte ?",
          "options": [
            "Provoquer l'érosion pour aérer le sol",
            "Couvrir rapidement le sol et protéger la surface contre l'érosion",
            "Remplacer les amendements calcaires sur les sols acides",
            "Augmenter la toxicité du sol"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le premier rôle listé pour les engrais verts est la couverture rapide du sol et sa protection contre la battance des pluies et l'érosion."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03",
      "order": 3,
      "title": "L'amendement calcaire : corriger un sol acide et compact",
      "summary": "Comparer l'état du sol avant et après amendement calcaire et expliquer le rôle des ions calcium sur le pH et la structure.",
      "conceptExplanation": "Avant l'amendement calcaire, le sol est infertile : structure compacte, peu perméable et peu aérée ; activité biologique faible ; pH faible, de 4 à 5. Son mauvais état chimique vient d'un excès d'ions H+ libres responsables de l'acidité, et son mauvais état physique de l'absence d'ions Ca2+, qui entraîne une mauvaise floculation de l'humus et de l'argile.\nAprès l'amendement calcaire, le sol devient fertile : structure grumeleuse, perméable et aérée ; activité biologique intense ; pH élevé, de 6 à 7. Les ions Ca2+ floculent les particules d'argile et d'humus en agrégats stables (grumeaux) et remplacent les ions H+ sur le complexe argilo-humique.\nL'amendement calcaire se fait par apport de substances telles que la chaux vive, le sulfate de calcium ou le carbonate de calcium. La chaux vive introduit le calcium et élève le pH ; le carbonate de calcium élève le pH moins vite, à cause de la présence de l'acide carbonique ; le sulfate de calcium enrichit le sol en calcium sans élever le pH, car l'acide sulfurique formé est un acide fort qui s'oppose à l'élévation du pH.",
      "keyRule": "Avant : compact, acide (pH 4 à 5), inactif ; après apport de calcium : grumeleux, perméable, pH 6 à 7 et activité biologique intense.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer un sol avant et après amendement calcaire",
        "statement": "On analyse les propriétés d'un sol avant puis après un amendement calcaire : avant, structure compacte et pH de 4 à 5 ; après, structure grumeleuse et pH de 6 à 7. Explique le mécanisme de cette amélioration.",
        "methodSteps": [
          "Avant l'amendement, l'absence d'ions Ca2+ empêche la bonne floculation de l'humus et de l'argile (structure compacte) et l'excès d'ions H+ rend le sol acide.",
          "L'apport de calcaire (chaux vive, carbonate ou sulfate de calcium) fournit des ions Ca2+ qui se fixent sur le complexe argilo-humique en échange d'ions H+.",
          "Les Ca2+ floculent argile et humus en grumeaux (sol perméable et aéré) et les H+ libérés se combinent, ce qui amène le pH vers la neutralité."
        ],
        "conclusion": "Les ions Ca2+ corrigent à la fois la structure, le pH et l'activité biologique du sol."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'amendement calcaire",
          "stepTheme": "L'amendement calcaire",
          "stepBadge": "L'amendement calcaire",
          "paragraphText": "• Amendement calcaire : l'apport au sol de substances calciques pour corriger son infertilité.\nLa leçon cite la chaux vive, le sulfate de calcium et le carbonate de calcium.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03_q1",
            "type": "mcq",
            "prompt": "L'amendement calcaire consiste à apporter au sol :",
            "options": [
              "Des substances telles que la chaux vive, le sulfate de calcium ou le carbonate de calcium",
              "Uniquement des engrais azotés",
              "De l'humus décomposé",
              "De l'eau par canalisations"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'interprétation liste les trois substances de l'amendement calcaire : chaux vive, sulfate de calcium, carbonate de calcium."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'état du sol infertile avant amendement",
          "stepTheme": "L'état du sol infertile avant amendement",
          "stepBadge": "L'état du sol infertile avant amendement",
          "paragraphText": "Avant l'amendement calcaire, le sol présente une structure compacte, peu perméable et peu aérée.\nSon activité biologique est faible et son pH est faible, de 4 à 5 : un tel sol est dit infertile.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03_q2",
            "type": "mcq",
            "prompt": "Avant l'amendement calcaire, le sol infertile a un pH :",
            "options": [
              "Élevé, de 6 à 7",
              "Faible, de 4 à 5",
              "Toujours égal à 7",
              "Supérieur à 8"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les résultats de l'expérience donnent un pH faible de 4 à 5 avant amendement, et de 6 à 7 après."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'état du sol fertile après amendement",
          "stepTheme": "L'état du sol fertile après amendement",
          "stepBadge": "L'état du sol fertile après amendement",
          "paragraphText": "Après l'amendement calcaire, la structure du sol devient grumeleuse : le sol est perméable et aéré.\nSon activité biologique devient intense et son pH s'élève à 6 à 7 : un tel sol est dit fertile.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03_q3",
            "type": "mcq",
            "prompt": "Après l'amendement calcaire, le sol fertile présente :",
            "options": [
              "Une structure compacte et une activité biologique faible",
              "Une structure grumeleuse, perméable et aérée, avec une activité biologique intense",
              "Un pH de 4 à 5",
              "Un complexe argilo-humique dispersé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les résultats après amendement décrivent une structure grumeleuse, un sol perméable et aéré et une activité biologique intense."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le rôle des ions Ca2+ sur la structure et le pH",
          "stepTheme": "Le rôle des ions Ca2+ sur la structure et le pH",
          "stepBadge": "Le rôle des ions Ca2+ sur la structure et le pH",
          "paragraphText": "Les ions Ca2+ fournis au sol floculent les particules d'argile et d'humus en agrégats stables, ou grumeaux.\nIls remplacent aussi les ions H+ sur le complexe argilo-humique ; ces H+ libérés se combinent aux ions apportés, ce qui modifie le pH et l'amène vers la neutralité.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03_q4",
            "type": "mcq",
            "prompt": "Les ions Ca2+ améliorent le sol en :",
            "options": [
              "Augmentant son acidité",
              "Floculant argile et humus en grumeaux et en remplaçant les ions H+ sur le complexe argilo-humique",
              "Détruisant les vers de terre",
              "Rendant le sol imperméable"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'interprétation attribue aux Ca2+ la floculation en agrégats stables et l'échange avec les H+ du complexe argilo-humique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Tous les amendements calcaires n'élèvent pas le pH de la même façon",
          "stepTheme": "Tous les amendements calcaires n'élèvent pas le pH de la même façon",
          "stepBadge": "Tous les amendements calcaires n'élèvent pas le pH de la même façon",
          "paragraphText": "Piège : croire que tout apport calcique élève le pH.\nAvec le sulfate de calcium, l'acide sulfurique formé est un acide fort qui s'oppose à l'élévation du pH : le pH reste inchangé et le sol s'enrichit en calcium ; avec le carbonate de calcium, le pH s'élève moins vite qu'avec la chaux, à cause de l'acide carbonique.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03_q5",
            "type": "mcq",
            "prompt": "Avec le sulfate de calcium comme amendement, le pH du sol :",
            "options": [
              "S'élève très rapidement",
              "Reste inchangé, car l'acide sulfurique formé s'oppose à son élévation",
              "Chute à 4",
              "Devient supérieur à 8"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que pour le sulfate de calcium, le pH reste inchangé et le sol s'enrichit en calcium."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'action de la chaux vive",
          "stepTheme": "L'action de la chaux vive",
          "stepBadge": "L'action de la chaux vive",
          "paragraphText": "Exemple développé dans la leçon : la chaux vive introduit le calcium dans le sol ; l'ion Ca2+ se fixe sur le complexe argilo-humique en échange d'ions H+.\nLes ions hydroxydes libérés se combinent aux H+ pour donner de l'eau, ce qui élève le pH.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03_q6",
            "type": "mcq",
            "prompt": "Lors de l'apport de chaux vive, l'élévation du pH vient de ce que :",
            "options": [
              "Les ions H+ deviennent plus nombreux",
              "Les ions hydroxydes se combinent aux H+ pour donner de l'eau",
              "Le calcium détruit l'argile",
              "L'eau du sol disparaît"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le schéma réactionnel de la leçon montre les ions hydroxydes se combinant aux H+ pour donner de l'eau, ce qui élève le pH."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03_q1",
          "type": "mcq",
          "prompt": "L'amendement calcaire consiste à apporter au sol :",
          "options": [
            "Des substances telles que la chaux vive, le sulfate de calcium ou le carbonate de calcium",
            "Uniquement des engrais azotés",
            "De l'humus décomposé",
            "De l'eau par canalisations"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'interprétation liste les trois substances de l'amendement calcaire : chaux vive, sulfate de calcium, carbonate de calcium."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03_q2",
          "type": "mcq",
          "prompt": "Avant l'amendement calcaire, le sol infertile a un pH :",
          "options": [
            "Élevé, de 6 à 7",
            "Faible, de 4 à 5",
            "Toujours égal à 7",
            "Supérieur à 8"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les résultats de l'expérience donnent un pH faible de 4 à 5 avant amendement, et de 6 à 7 après."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03_q3",
          "type": "mcq",
          "prompt": "Après l'amendement calcaire, le sol fertile présente :",
          "options": [
            "Une structure compacte et une activité biologique faible",
            "Une structure grumeleuse, perméable et aérée, avec une activité biologique intense",
            "Un pH de 4 à 5",
            "Un complexe argilo-humique dispersé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les résultats après amendement décrivent une structure grumeleuse, un sol perméable et aéré et une activité biologique intense."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03_q4",
          "type": "mcq",
          "prompt": "Les ions Ca2+ améliorent le sol en :",
          "options": [
            "Augmentant son acidité",
            "Floculant argile et humus en grumeaux et en remplaçant les ions H+ sur le complexe argilo-humique",
            "Détruisant les vers de terre",
            "Rendant le sol imperméable"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'interprétation attribue aux Ca2+ la floculation en agrégats stables et l'échange avec les H+ du complexe argilo-humique."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03_q5",
          "type": "mcq",
          "prompt": "Avec le sulfate de calcium comme amendement, le pH du sol :",
          "options": [
            "S'élève très rapidement",
            "Reste inchangé, car l'acide sulfurique formé s'oppose à son élévation",
            "Chute à 4",
            "Devient supérieur à 8"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que pour le sulfate de calcium, le pH reste inchangé et le sol s'enrichit en calcium."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p03_q6",
          "type": "mcq",
          "prompt": "Lors de l'apport de chaux vive, l'élévation du pH vient de ce que :",
          "options": [
            "Les ions H+ deviennent plus nombreux",
            "Les ions hydroxydes se combinent aux H+ pour donner de l'eau",
            "Le calcium détruit l'argile",
            "L'eau du sol disparaît"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le schéma réactionnel de la leçon montre les ions hydroxydes se combinant aux H+ pour donner de l'eau, ce qui élève le pH."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04",
      "order": 4,
      "title": "L'amendement humifère : restaurer le complexe argilo-humique",
      "summary": "Comparer l'état du sol avant et après apport d'humus et expliquer ses effets physiques, chimiques et biologiques.",
      "conceptExplanation": "Avant l'amendement humifère, le sol est infertile : structure compacte et instable, complexe argilo-humique dispersé, peu d'échanges gazeux, décomposition de la matière organique, humification et minéralisation lentes, infiltration lente et faible absorption des ions par les plantes.\nAprès l'apport d'humus, le sol devient fertile : structure grumeleuse et aérée, complexe argilo-humique en agrégats stables et aérés, échanges gazeux importants, humification et minéralisation actives, bonne infiltration et bonne absorption des ions.\nL'apport d'humus peut se faire par la décomposition du mélange engrais vert et paille, ou d'autres matières organiques. L'humus s'associe à l'argile pour former le complexe argilo-humique, qui soude les éléments sableux en agrégats stables ; sa minéralisation met des éléments minéraux assimilables à la disposition de la plante, et l'humus, colloïde électronégatif, fixe les ions échangeables en excès pour les libérer en cas de déficit.\nL'humus nourrit aussi les micro-organismes et les vers de terre, et contient des activateurs de croissance qui stimulent l'alimentation minérale des plantes. L'exercice 2 retient comme juste l'affirmation selon laquelle l'amendement humifère sert de support et d'aliment aux microorganismes du sol.",
      "keyRule": "L'humus reforme le complexe argilo-humique en agrégats stables, nourrit la vie du sol et régule les ions échangeables.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer un sol avant et après amendement humifère",
        "statement": "Un sol présente une structure compacte et instable, un complexe argilo-humique dispersé et une minéralisation lente. Après apport d'humus, sa structure devient grumeleuse et la minéralisation active. Explique le rôle de l'humus.",
        "methodSteps": [
          "Physiquement, l'humus s'associe à l'argile pour former le complexe argilo-humique, qui soude les éléments sableux en agrégats stables : le sol devient aéré et perméable.",
          "Chimiquement, la minéralisation de l'humus fournit des éléments minéraux assimilables, et l'humus fixe les ions échangeables en excès pour les libérer en cas de déficit.",
          "Biologiquement, l'humus nourrit les micro-organismes et les vers de terre, qui améliorent la structure et l'aération."
        ],
        "conclusion": "L'amendement humifère corrige, comme l'amendement calcaire, les propriétés physiques, chimiques et biologiques du sol."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'amendement humifère",
          "stepTheme": "L'amendement humifère",
          "stepBadge": "L'amendement humifère",
          "paragraphText": "• Amendement humifère : l'apport d'humus au sol pour corriger son infertilité.\nIl peut se faire par la décomposition du mélange engrais vert et paille, ou d'autres matières organiques.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04_q1",
            "type": "mcq",
            "prompt": "L'apport d'humus au sol peut se faire par :",
            "options": [
              "La décomposition du mélange engrais vert et paille ou d'autres matières organiques",
              "L'apport de chaux vive",
              "Le drainage des parcelles",
              "L'injection de gaz"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'interprétation de la deuxième expérience indique cette origine de l'humus apporté au sol."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'état du sol avant l'apport d'humus",
          "stepTheme": "L'état du sol avant l'apport d'humus",
          "stepBadge": "L'état du sol avant l'apport d'humus",
          "paragraphText": "Avant l'amendement humifère, la structure est compacte et instable et le complexe argilo-humique est dispersé.\nL'infiltration est lente et l'absorption des ions par les plantes est faible : le sol est infertile.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04_q2",
            "type": "mcq",
            "prompt": "Avant l'amendement humifère, le complexe argilo-humique est :",
            "options": [
              "En agrégats stables et aérés",
              "Dispersé",
              "Absent de tout sol",
              "Remplacé par du calcaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les résultats avant apport d'humus décrivent un complexe argilo-humique dispersé, avec une structure compacte et instable."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'état du sol après l'apport d'humus",
          "stepTheme": "L'état du sol après l'apport d'humus",
          "stepBadge": "L'état du sol après l'apport d'humus",
          "paragraphText": "Après l'apport d'humus, la structure devient grumeleuse et aérée, avec un complexe argilo-humique en agrégats stables.\nLes échanges gazeux sont importants, l'infiltration est bonne et l'absorption des ions par les plantes est bonne.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04_q3",
            "type": "mcq",
            "prompt": "Après l'amendement humifère, on observe :",
            "options": [
              "Une infiltration lente",
              "Une bonne infiltration et une bonne absorption des ions par les plantes",
              "Une minéralisation lente",
              "Peu d'échanges gazeux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les résultats après apport d'humus listent une bonne infiltration et une bonne absorption des ions, à l'inverse de l'état initial."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le complexe argilo-humique",
          "stepTheme": "Le complexe argilo-humique",
          "stepBadge": "Le complexe argilo-humique",
          "paragraphText": "• Complexe argilo-humique : l'association de l'humus et de l'argile dans le sol.\nIl soude les éléments sableux et forme des agrégats stables, responsables de la bonne aération et de la bonne perméabilité du sol à l'eau.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04_q4",
            "type": "mcq",
            "prompt": "Le complexe argilo-humique se forme par l'association :",
            "options": [
              "Du sable et du calcaire",
              "De l'humus et de l'argile",
              "Des ions calcium et de l'eau",
              "Des engrais chimiques entre eux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'interprétation physique indique que l'humus s'associe à l'argile pour former le complexe argilo-humique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'humus régule les ions échangeables",
          "stepTheme": "L'humus régule les ions échangeables",
          "stepBadge": "L'humus régule les ions échangeables",
          "paragraphText": "L'humus est un colloïde électronégatif : il fixe les ions échangeables en excès.\nIl peut ensuite les libérer dans la solution du sol en cas de déficit, et le dioxyde de carbone et les acides humiques rendent assimilables des sels minéraux insolubles, surtout les phosphates.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04_q5",
            "type": "mcq",
            "prompt": "L'humus, colloïde électronégatif, joue sur les ions échangeables le rôle de :",
            "options": [
              "Les détruire définitivement",
              "Les fixer en excès pour les libérer en cas de déficit",
              "Les transformer en azote atmosphérique",
              "Les rendre tous insolubles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le rôle chimique décrit dans l'interprétation : stockage en cas d'excès, libération en cas de déficit."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'humus nourrit la vie du sol",
          "stepTheme": "L'humus nourrit la vie du sol",
          "stepBadge": "L'humus nourrit la vie du sol",
          "paragraphText": "L'humus nourrit les micro-organismes, par apport de sucres et de matières azotées, et les vers de terre.\nPiège tiré de l'exercice 2 : l'affirmation selon laquelle les engrais organiques apportent uniquement de l'humus au sol est à rejeter ; en revanche, celle qui dit que l'amendement humifère sert de support et d'aliment aux microorganismes du sol est juste.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04_q6",
            "type": "mcq",
            "prompt": "Selon l'exercice 2, l'affirmation juste concernant l'amendement humifère est qu'il :",
            "options": [
              "Apporte uniquement des ions calcium",
              "Sert de support et d'aliment aux microorganismes du sol",
              "Élève le pH par la chaux vive",
              "Évacue l'excès d'eau du sol"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'une des affirmations que l'exercice 2 demande de relever comme justes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04_q1",
          "type": "mcq",
          "prompt": "L'apport d'humus au sol peut se faire par :",
          "options": [
            "La décomposition du mélange engrais vert et paille ou d'autres matières organiques",
            "L'apport de chaux vive",
            "Le drainage des parcelles",
            "L'injection de gaz"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'interprétation de la deuxième expérience indique cette origine de l'humus apporté au sol."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04_q2",
          "type": "mcq",
          "prompt": "Avant l'amendement humifère, le complexe argilo-humique est :",
          "options": [
            "En agrégats stables et aérés",
            "Dispersé",
            "Absent de tout sol",
            "Remplacé par du calcaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les résultats avant apport d'humus décrivent un complexe argilo-humique dispersé, avec une structure compacte et instable."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04_q3",
          "type": "mcq",
          "prompt": "Après l'amendement humifère, on observe :",
          "options": [
            "Une infiltration lente",
            "Une bonne infiltration et une bonne absorption des ions par les plantes",
            "Une minéralisation lente",
            "Peu d'échanges gazeux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les résultats après apport d'humus listent une bonne infiltration et une bonne absorption des ions, à l'inverse de l'état initial."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04_q4",
          "type": "mcq",
          "prompt": "Le complexe argilo-humique se forme par l'association :",
          "options": [
            "Du sable et du calcaire",
            "De l'humus et de l'argile",
            "Des ions calcium et de l'eau",
            "Des engrais chimiques entre eux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'interprétation physique indique que l'humus s'associe à l'argile pour former le complexe argilo-humique."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04_q5",
          "type": "mcq",
          "prompt": "L'humus, colloïde électronégatif, joue sur les ions échangeables le rôle de :",
          "options": [
            "Les détruire définitivement",
            "Les fixer en excès pour les libérer en cas de déficit",
            "Les transformer en azote atmosphérique",
            "Les rendre tous insolubles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le rôle chimique décrit dans l'interprétation : stockage en cas d'excès, libération en cas de déficit."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p04_q6",
          "type": "mcq",
          "prompt": "Selon l'exercice 2, l'affirmation juste concernant l'amendement humifère est qu'il :",
          "options": [
            "Apporte uniquement des ions calcium",
            "Sert de support et d'aliment aux microorganismes du sol",
            "Élève le pH par la chaux vive",
            "Évacue l'excès d'eau du sol"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'une des affirmations que l'exercice 2 demande de relever comme justes."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05",
      "order": 5,
      "title": "Drainage, irrigation et labour : réguler l'eau et l'aération",
      "summary": "Définir les trois techniques de régulation de l'humidité et de l'aération du sol.",
      "conceptExplanation": "Le drainage consiste à évacuer l'excès d'eau d'un sol trop humide ou inondé, en vue d'améliorer sa fertilité et son aération.\nL'irrigation est l'apport d'eau par des canalisations à une parcelle de terre, lorsque les précipitations ne fournissent pas suffisamment d'humidité au sol.\nLe labour consiste à labourer, c'est-à-dire retourner la terre dans le but de l'ameublir ; il permet d'améliorer les propriétés physiques du sol : porosité, perméabilité à l'air et à l'eau.\nLe drainage, l'irrigation et le labour sont des techniques de régulation de l'humidité et de l'aération du sol.\nL'exercice 1 demande d'associer chaque technique à sa description : évacuation de l'excès d'eau pour le drainage, apport d'eau par des canalisations pour l'irrigation.",
      "keyRule": "Trop d'eau : drainage ; pas assez d'eau : irrigation ; sol tassé : labour qui ameublit et améliore porosité et perméabilité.",
      "formulas": [],
      "workedExample": {
        "title": "Associer techniques et descriptions (exercice 1)",
        "statement": "L'exercice 1 donne quatre descriptions : évacuation de l'excès d'eau d'un sol trop humide ou inondé ; apport d'eau par des canalisations à une parcelle de terre ; mise au repos d'un sol ; alternance de cultures. Associe les deux premières descriptions à leur technique.",
        "methodSteps": [
          "L'évacuation de l'excès d'eau d'un sol trop humide ou inondé correspond au drainage.",
          "L'apport d'eau par des canalisations à une parcelle de terre correspond à l'irrigation.",
          "La mise au repos et l'alternance de cultures relèvent des deux autres techniques de l'exercice : la jachère et l'assolement."
        ],
        "conclusion": "Drainage et irrigation sont les deux réponses attendues pour les descriptions liées à l'eau."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le drainage",
          "stepTheme": "Le drainage",
          "stepBadge": "Le drainage",
          "paragraphText": "• Drainage : l'évacuation de l'excès d'eau d'un sol trop humide ou inondé.\nIl vise à améliorer la fertilité et l'aération de ce sol.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05_q1",
            "type": "mcq",
            "prompt": "Le drainage consiste à :",
            "options": [
              "Apporter de l'eau par des canalisations",
              "Évacuer l'excès d'eau d'un sol trop humide ou inondé",
              "Retourner la terre pour l'ameublir",
              "Mettre le sol au repos"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de l'analyse, reprise dans les descriptions de l'exercice 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'irrigation",
          "stepTheme": "L'irrigation",
          "stepBadge": "L'irrigation",
          "paragraphText": "• Irrigation : l'apport d'eau par des canalisations à une parcelle de terre.\nElle se justifie lorsque les précipitations ne fournissent pas suffisamment d'humidité au sol.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05_q2",
            "type": "mcq",
            "prompt": "L'irrigation est nécessaire lorsque :",
            "options": [
              "Le sol est inondé",
              "Les précipitations ne fournissent pas suffisamment d'humidité au sol",
              "Le sol est trop aéré",
              "Le sol vient d'être labouré"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition de la leçon conditionne l'irrigation à l'insuffisance d'humidité apportée par les précipitations."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le labour ameublit la terre",
          "stepTheme": "Le labour ameublit la terre",
          "stepBadge": "Le labour ameublit la terre",
          "paragraphText": "Le labour consiste à retourner la terre dans le but de l'ameublir.\nIl améliore les propriétés physiques du sol : porosité, perméabilité à l'air et à l'eau.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05_q3",
            "type": "mcq",
            "prompt": "Le labour améliore les propriétés physiques du sol, notamment :",
            "options": [
              "Son pH uniquement",
              "Sa porosité et sa perméabilité à l'air et à l'eau",
              "Sa teneur en azote atmosphérique",
              "Son taux de calcium uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse attribue au labour l'amélioration de la porosité et de la perméabilité à l'air et à l'eau."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Choisir la technique selon le problème d'eau",
          "stepTheme": "Choisir la technique selon le problème d'eau",
          "stepBadge": "Choisir la technique selon le problème d'eau",
          "paragraphText": "Méthode : un sol trop humide ou inondé appelle le drainage ; un sol qui manque d'humidité appelle l'irrigation.\nUn sol tassé qui manque d'aération appelle le labour : les trois techniques régulent l'humidité et l'aération.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05_q4",
            "type": "mcq",
            "prompt": "Pour un sol inondé dont on veut améliorer l'aération, la technique adaptée est :",
            "options": [
              "L'irrigation",
              "Le drainage",
              "La jachère",
              "L'assolement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le drainage évacue l'excès d'eau d'un sol trop humide ou inondé en vue d'améliorer sa fertilité et son aération."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Drainage et irrigation sont opposés",
          "stepTheme": "Drainage et irrigation sont opposés",
          "stepBadge": "Drainage et irrigation sont opposés",
          "paragraphText": "Piège : confondre drainage et irrigation, qui agissent en sens inverse sur l'eau du sol.\nLe drainage retire l'excès d'eau ; l'irrigation en apporte quand elle manque.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05_q5",
            "type": "mcq",
            "prompt": "Drainage et irrigation se distinguent car :",
            "options": [
              "Ils font exactement la même chose",
              "Le drainage évacue l'excès d'eau, l'irrigation apporte de l'eau en cas de manque",
              "L'irrigation évacue l'eau des sols inondés",
              "Le drainage apporte l'eau par canalisations"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux définitions de la leçon sont symétriques et opposées : évacuer l'excès contre apporter le manquant."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les photographies des techniques agricoles",
          "stepTheme": "Les photographies des techniques agricoles",
          "stepBadge": "Les photographies des techniques agricoles",
          "paragraphText": "Les photographies observées dans la leçon présentent le drainage, l'irrigation, le labour, la jachère et l'assolement.\nLes trois premières illustrent la régulation de l'humidité et de l'aération ; les deux dernières sont des techniques culturales.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05_q6",
            "type": "mcq",
            "prompt": "Parmi les techniques photographiées, lesquelles régulent l'humidité et l'aération ?",
            "options": [
              "La jachère et l'assolement",
              "Le drainage, l'irrigation et le labour",
              "Uniquement le labour",
              "L'amendement calcaire et l'amendement humifère"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion de la partie III regroupe drainage, irrigation et labour comme techniques de régulation de l'humidité et de l'aération."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05_q1",
          "type": "mcq",
          "prompt": "Le drainage consiste à :",
          "options": [
            "Apporter de l'eau par des canalisations",
            "Évacuer l'excès d'eau d'un sol trop humide ou inondé",
            "Retourner la terre pour l'ameublir",
            "Mettre le sol au repos"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de l'analyse, reprise dans les descriptions de l'exercice 1."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05_q2",
          "type": "mcq",
          "prompt": "L'irrigation est nécessaire lorsque :",
          "options": [
            "Le sol est inondé",
            "Les précipitations ne fournissent pas suffisamment d'humidité au sol",
            "Le sol est trop aéré",
            "Le sol vient d'être labouré"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition de la leçon conditionne l'irrigation à l'insuffisance d'humidité apportée par les précipitations."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05_q3",
          "type": "mcq",
          "prompt": "Le labour améliore les propriétés physiques du sol, notamment :",
          "options": [
            "Son pH uniquement",
            "Sa porosité et sa perméabilité à l'air et à l'eau",
            "Sa teneur en azote atmosphérique",
            "Son taux de calcium uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse attribue au labour l'amélioration de la porosité et de la perméabilité à l'air et à l'eau."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05_q4",
          "type": "mcq",
          "prompt": "Pour un sol inondé dont on veut améliorer l'aération, la technique adaptée est :",
          "options": [
            "L'irrigation",
            "Le drainage",
            "La jachère",
            "L'assolement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le drainage évacue l'excès d'eau d'un sol trop humide ou inondé en vue d'améliorer sa fertilité et son aération."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05_q5",
          "type": "mcq",
          "prompt": "Drainage et irrigation se distinguent car :",
          "options": [
            "Ils font exactement la même chose",
            "Le drainage évacue l'excès d'eau, l'irrigation apporte de l'eau en cas de manque",
            "L'irrigation évacue l'eau des sols inondés",
            "Le drainage apporte l'eau par canalisations"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux définitions de la leçon sont symétriques et opposées : évacuer l'excès contre apporter le manquant."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p05_q6",
          "type": "mcq",
          "prompt": "Parmi les techniques photographiées, lesquelles régulent l'humidité et l'aération ?",
          "options": [
            "La jachère et l'assolement",
            "Le drainage, l'irrigation et le labour",
            "Uniquement le labour",
            "L'amendement calcaire et l'amendement humifère"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion de la partie III regroupe drainage, irrigation et labour comme techniques de régulation de l'humidité et de l'aération."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06",
      "order": 6,
      "title": "Jachère et assolement : les techniques culturales",
      "summary": "Définir la jachère et l'assolement, qui restaurent l'équilibre du sol, et conclure sur l'ensemble des techniques.",
      "conceptExplanation": "La jachère est la mise au repos d'un sol après une culture, pendant un certain temps, en vue de lui permettre de se reconstituer naturellement. Elle favorise le rétablissement des propriétés physiques, chimiques et biologiques du sol, entraînant l'équilibre de l'écosystème.\nL'assolement, ou rotation des cultures, est une alternance des cultures ayant des besoins minéraux différents sur un même sol, en vue d'assurer la conservation de sa fertilité. Elle favorise le rétablissement de l'équilibre minéral du sol.\nLa jachère et l'assolement sont des techniques culturales.\nLa conclusion générale de la leçon rassemble les trois voies d'amélioration de la fertilité : l'apport d'engrais, les amendements (calcaire ou humifère), et les techniques culturales et de régulation de l'humidité et de l'aération du sol.",
      "keyRule": "Jachère égale repos qui reconstitue le sol ; assolement égale rotation de cultures à besoins différents qui conserve l'équilibre minéral.",
      "formulas": [],
      "workedExample": {
        "title": "Associer jachère et assolement à leurs descriptions (exercice 1)",
        "statement": "Complète l'association de l'exercice 1 pour les deux techniques restantes : la mise au repos d'un sol après la récolte en vue de la reconstitution de sa fertilité, et l'alternance de cultures n'ayant pas les mêmes besoins en éléments minéraux sur un même sol.",
        "methodSteps": [
          "La mise au repos d'un sol après la récolte, en vue de la reconstitution de sa fertilité, correspond à la jachère.",
          "L'alternance de cultures n'ayant pas les mêmes besoins en éléments minéraux sur un même sol correspond à l'assolement.",
          "Ces deux techniques complètent le drainage et l'irrigation dans le tableau de l'exercice."
        ],
        "conclusion": "Jachère et assolement sont les deux techniques culturales de l'association demandée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La jachère",
          "stepTheme": "La jachère",
          "stepBadge": "La jachère",
          "paragraphText": "• Jachère : la mise au repos d'un sol après une culture, pendant un certain temps.\nCe repos lui permet de se reconstituer naturellement.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06_q1",
            "type": "mcq",
            "prompt": "La jachère consiste à :",
            "options": [
              "Alterner les cultures chaque année",
              "Mettre le sol au repos après une culture pour qu'il se reconstitue naturellement",
              "Retourner la terre profondément",
              "Apporter de l'eau par canalisations"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de l'analyse, reprise dans les descriptions de l'exercice 1."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les effets de la jachère",
          "stepTheme": "Les effets de la jachère",
          "stepBadge": "Les effets de la jachère",
          "paragraphText": "La jachère favorise le rétablissement des propriétés physiques, chimiques et biologiques du sol.\nElle entraîne ainsi l'équilibre de l'écosystème du sol mis au repos.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06_q2",
            "type": "mcq",
            "prompt": "La jachère favorise le rétablissement :",
            "options": [
              "Uniquement de la teneur en eau",
              "Des propriétés physiques, chimiques et biologiques du sol",
              "Du seul pH",
              "Des rendements immédiats"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse attribue à la jachère le rétablissement des trois catégories de propriétés du sol."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'assolement ou rotation des cultures",
          "stepTheme": "L'assolement ou rotation des cultures",
          "stepBadge": "L'assolement ou rotation des cultures",
          "paragraphText": "• Assolement (rotation des cultures) : l'alternance des cultures sur un même sol.\nLes cultures alternées ont des besoins minéraux différents, ce qui assure la conservation de la fertilité du sol.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06_q3",
            "type": "mcq",
            "prompt": "L'assolement est une alternance de cultures :",
            "options": [
              "Ayant exactement les mêmes besoins minéraux",
              "Ayant des besoins minéraux différents, sur un même sol",
              "Sur des sols différents chaque année",
              "Sans aucune culture certaines années"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition insiste sur des cultures ayant des besoins minéraux différents, alternées sur un même sol."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'effet de l'assolement sur l'équilibre minéral",
          "stepTheme": "L'effet de l'assolement sur l'équilibre minéral",
          "stepBadge": "L'effet de l'assolement sur l'équilibre minéral",
          "paragraphText": "En alternant des cultures aux besoins différents, l'assolement évite l'épuisement d'un même élément minéral.\nLa leçon précise qu'elle favorise le rétablissement de l'équilibre minéral du sol.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06_q4",
            "type": "mcq",
            "prompt": "L'assolement favorise principalement :",
            "options": [
              "Le rétablissement de l'équilibre minéral du sol",
              "L'acidification du sol",
              "La compaction du sol",
              "L'érosion des parcelles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'effet propre de l'assolement indiqué dans l'analyse, distinct de l'effet global de la jachère."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre jachère et assolement",
          "stepTheme": "Ne pas confondre jachère et assolement",
          "stepBadge": "Ne pas confondre jachère et assolement",
          "paragraphText": "Piège : confondre les deux techniques culturales.\nPendant la jachère, le sol n'est pas cultivé du tout ; pendant l'assolement, le sol reste cultivé, mais avec des cultures qui changent.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06_q5",
            "type": "mcq",
            "prompt": "La différence entre jachère et assolement est que :",
            "options": [
              "La jachère cultive des légumineuses, l'assolement aucune",
              "La jachère met le sol au repos sans culture, l'assolement alterne les cultures sur le sol cultivé",
              "Il n'y a aucune différence",
              "L'assolement met le sol au repos plusieurs années"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux définitions opposent le repos complet (jachère) à l'alternance des cultures (assolement)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La synthèse des trois voies d'amélioration",
          "stepTheme": "La synthèse des trois voies d'amélioration",
          "stepBadge": "La synthèse des trois voies d'amélioration",
          "paragraphText": "La conclusion générale rassemble les réponses aux trois hypothèses de la leçon : apport d'engrais, amendements calcaire ou humifère, techniques culturales et de régulation.\nPour le jardin de la coopérative de la situation d'apprentissage, le choix combine ces voies selon l'état du sol.",
          "exercise": {
            "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06_q6",
            "type": "mcq",
            "prompt": "Selon la conclusion générale, on peut améliorer la fertilité d'un sol par :",
            "options": [
              "Uniquement les engrais chimiques",
              "L'apport d'engrais, les amendements et les techniques culturales et de régulation de l'humidité et de l'aération",
              "Uniquement la jachère",
              "Le drainage seul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La conclusion générale énumère les trois familles de techniques validées dans la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06_q1",
          "type": "mcq",
          "prompt": "La jachère consiste à :",
          "options": [
            "Alterner les cultures chaque année",
            "Mettre le sol au repos après une culture pour qu'il se reconstitue naturellement",
            "Retourner la terre profondément",
            "Apporter de l'eau par canalisations"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de l'analyse, reprise dans les descriptions de l'exercice 1."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06_q2",
          "type": "mcq",
          "prompt": "La jachère favorise le rétablissement :",
          "options": [
            "Uniquement de la teneur en eau",
            "Des propriétés physiques, chimiques et biologiques du sol",
            "Du seul pH",
            "Des rendements immédiats"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse attribue à la jachère le rétablissement des trois catégories de propriétés du sol."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06_q3",
          "type": "mcq",
          "prompt": "L'assolement est une alternance de cultures :",
          "options": [
            "Ayant exactement les mêmes besoins minéraux",
            "Ayant des besoins minéraux différents, sur un même sol",
            "Sur des sols différents chaque année",
            "Sans aucune culture certaines années"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition insiste sur des cultures ayant des besoins minéraux différents, alternées sur un même sol."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06_q4",
          "type": "mcq",
          "prompt": "L'assolement favorise principalement :",
          "options": [
            "Le rétablissement de l'équilibre minéral du sol",
            "L'acidification du sol",
            "La compaction du sol",
            "L'érosion des parcelles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'effet propre de l'assolement indiqué dans l'analyse, distinct de l'effet global de la jachère."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06_q5",
          "type": "mcq",
          "prompt": "La différence entre jachère et assolement est que :",
          "options": [
            "La jachère cultive des légumineuses, l'assolement aucune",
            "La jachère met le sol au repos sans culture, l'assolement alterne les cultures sur le sol cultivé",
            "Il n'y a aucune différence",
            "L'assolement met le sol au repos plusieurs années"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux définitions opposent le repos complet (jachère) à l'alternance des cultures (assolement)."
        },
        {
          "id": "terminale_c_svt_l11_amelioration_fertilite_sols_p06_q6",
          "type": "mcq",
          "prompt": "Selon la conclusion générale, on peut améliorer la fertilité d'un sol par :",
          "options": [
            "Uniquement les engrais chimiques",
            "L'apport d'engrais, les amendements et les techniques culturales et de régulation de l'humidité et de l'aération",
            "Uniquement la jachère",
            "Le drainage seul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La conclusion générale énumère les trois familles de techniques validées dans la leçon."
        }
      ]
    }
  ]
};
