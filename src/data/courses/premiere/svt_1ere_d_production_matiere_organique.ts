import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 10 : La production de matière organique » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2794
export const SVT_1ERE_D_L10_PRODUCTION_MATIERE_ORGANIQUE: CurriculumChapter = {
  "id": "premiere_d_svt_l10_production_matiere_organique",
  "subjectId": "svt",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 10,
  "title": "Leçon 10 : La production de matière organique",
  "summary": "La plante verte produit la matière organique par la photosynthèse, sous l’influence de la lumière, du dioxyde de carbone et de la température, grâce à la chlorophylle des chloroplastes, selon un mécanisme en deux phases, lumineuse et sombre.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2794",
  "points": [
    {
      "id": "premiere_d_svt_l10_production_matiere_organique_p01",
      "order": 1,
      "title": "L’influence de la lumière : point de compensation, sciaphiles et héliophiles",
      "summary": "Lire la courbe d’influence de l’éclairement et distinguer plantes sciaphiles et héliophiles.",
      "conceptExplanation": "On place un plant de tomate et un plant de fougère à des éclairements solaires de plus en plus intenses, la température et la teneur en dioxyde de carbone restant constantes, et on mesure le dégagement de dioxygène, qui traduit l’intensité photosynthétique.\nEn absence d’éclairement et pour de faibles intensités lumineuses, l’intensité de la photosynthèse est négative car il y a consommation de dioxygène due à la respiration de la plante ; elle est nulle quand la quantité de dioxygène produite pendant la photosynthèse égale celle consommée pendant la respiration : c’est le point de compensation lumineux.\nL’intensité photosynthétique augmente ensuite progressivement pour atteindre son maximum à un éclairement plus faible pour la fougère et plus important pour la tomate, parce que la lumière stimule la photosynthèse.\nAu-delà de ces maxima, l’intensité reste constante pour la tomate et baisse légèrement pour la fougère, parce que les activités photosynthétiques ont atteint leur maximum ; ce maximum est atteint à un éclairement plus faible chez la fougère parce que c’est une plante d’ombre ou plante sciaphile, et à un éclairement plus important chez la tomate parce que c’est une plante de lumière ou plante héliophile.\nChez les plantes sciaphiles, l’intensité photosynthétique baisse après le maximum parce que les structures responsables de la photosynthèse se détériorent.",
      "keyRule": "La lumière stimule la photosynthèse jusqu’à un maximum, plus précoce chez les sciaphiles que chez les héliophiles.",
      "formulas": [],
      "workedExample": {
        "title": "Comparer la fougère et la tomate sur la courbe d’éclairement",
        "statement": "Sur les courbes de la leçon, le maximum d’intensité photosynthétique est atteint à 20 pour cent d’éclairement pour la fougère et à 70 pour cent pour la tomate. Explique cette différence.",
        "methodSteps": [
          "La fougère atteint son maximum à un éclairement plus faible : c’est une plante d’ombre, ou plante sciaphile.",
          "La tomate atteint son maximum à un éclairement plus important : c’est une plante de lumière, ou plante héliophile.",
          "Au-delà du maximum de la fougère, son intensité baisse légèrement car ses structures photosynthétiques se détériorent."
        ],
        "conclusion": "Ce sont les valeurs et l’interprétation des courbes de la partie I-1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le point de compensation lumineux",
          "stepTheme": "Le point de compensation lumineux",
          "stepBadge": "Le point de compensation lumineux",
          "paragraphText": "• Point de compensation lumineux : éclairement pour lequel la quantité de dioxygène produite pendant la photosynthèse égale la quantité de dioxygène consommée pendant la respiration.\nL’intensité photosynthétique mesurée est alors nulle.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p01_q1",
            "type": "mcq",
            "prompt": "Au point de compensation lumineux, la quantité de dioxygène produite par la photosynthèse est :",
            "options": [
              "Égale à celle consommée par la respiration",
              "Très supérieure à celle consommée par la respiration",
              "Nulle ainsi que la respiration",
              "Remplacée par du dioxyde de carbone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition du point de compensation donnée dans l’interprétation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une intensité négative à faible éclairement",
          "stepTheme": "Une intensité négative à faible éclairement",
          "stepBadge": "Une intensité négative à faible éclairement",
          "paragraphText": "En absence d’éclairement et pour de faibles intensités lumineuses, l’intensité de la photosynthèse est négative.\nCela s’explique par la consommation de dioxygène due à la respiration de la plante, qui se poursuit même sans photosynthèse nette.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p01_q2",
            "type": "mcq",
            "prompt": "À très faible éclairement, l’intensité photosynthétique est négative parce que :",
            "options": [
              "La plante produit trop de dioxygène",
              "La chlorophylle disparaît",
              "La respiration consomme du dioxygène sans production nette de la photosynthèse",
              "La température chute"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’interprétation du début des courbes d’éclairement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La lumière stimule la photosynthèse",
          "stepTheme": "La lumière stimule la photosynthèse",
          "stepBadge": "La lumière stimule la photosynthèse",
          "paragraphText": "À partir du point de compensation, l’intensité photosynthétique augmente progressivement avec l’éclairement.\nLa leçon l’explique par le fait que la lumière stimule la photosynthèse, jusqu’à un maximum propre à chaque plante.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p01_q3",
            "type": "mcq",
            "prompt": "Quand l’éclairement augmente au-delà du point de compensation, l’intensité photosynthétique :",
            "options": [
              "Diminue immédiatement",
              "Augmente progressivement jusqu’à un maximum",
              "Reste nulle",
              "Devient négative"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’analyse et l’interprétation des courbes chez la tomate et la fougère."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Sciaphiles et héliophiles",
          "stepTheme": "Sciaphiles et héliophiles",
          "stepBadge": "Sciaphiles et héliophiles",
          "paragraphText": "• Plante sciaphile : plante d’ombre, comme la fougère, dont le maximum photosynthétique est atteint à un éclairement plus faible.\n• Plante héliophile : plante de lumière, comme la tomate, dont le maximum est atteint à un éclairement plus important.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p01_q4",
            "type": "mcq",
            "prompt": "La fougère est une plante sciaphile, c’est-à-dire :",
            "options": [
              "Une plante de lumière",
              "Une plante sans chlorophylle",
              "Une plante aquatique",
              "Une plante d’ombre"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon oppose la fougère, plante d’ombre ou sciaphile, à la tomate, plante de lumière ou héliophile."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La baisse chez les sciaphiles après le maximum",
          "stepTheme": "La baisse chez les sciaphiles après le maximum",
          "stepBadge": "La baisse chez les sciaphiles après le maximum",
          "paragraphText": "Piège : après son maximum, l’intensité de la tomate reste constante, mais celle de la fougère baisse légèrement.\nChez les plantes sciaphiles, cette baisse s’explique par la détérioration des structures responsables de la photosynthèse.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p01_q5",
            "type": "mcq",
            "prompt": "Chez les plantes sciaphiles, l’intensité photosynthétique baisse après le maximum parce que :",
            "options": [
              "La respiration s’arrête",
              "Le dioxyde de carbone disparaît",
              "Les structures responsables de la photosynthèse se détériorent",
              "La lumière devient un nutriment"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’explication donnée à la fin de l’interprétation de l’expérience sur la lumière."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p01_q1",
          "type": "mcq",
          "prompt": "Au point de compensation lumineux, la quantité de dioxygène produite par la photosynthèse est :",
          "options": [
            "Égale à celle consommée par la respiration",
            "Très supérieure à celle consommée par la respiration",
            "Nulle ainsi que la respiration",
            "Remplacée par du dioxyde de carbone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition du point de compensation donnée dans l’interprétation."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p01_q2",
          "type": "mcq",
          "prompt": "À très faible éclairement, l’intensité photosynthétique est négative parce que :",
          "options": [
            "La plante produit trop de dioxygène",
            "La chlorophylle disparaît",
            "La respiration consomme du dioxygène sans production nette de la photosynthèse",
            "La température chute"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’interprétation du début des courbes d’éclairement."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p01_q3",
          "type": "mcq",
          "prompt": "Quand l’éclairement augmente au-delà du point de compensation, l’intensité photosynthétique :",
          "options": [
            "Diminue immédiatement",
            "Augmente progressivement jusqu’à un maximum",
            "Reste nulle",
            "Devient négative"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’analyse et l’interprétation des courbes chez la tomate et la fougère."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p01_q4",
          "type": "mcq",
          "prompt": "La fougère est une plante sciaphile, c’est-à-dire :",
          "options": [
            "Une plante de lumière",
            "Une plante sans chlorophylle",
            "Une plante aquatique",
            "Une plante d’ombre"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon oppose la fougère, plante d’ombre ou sciaphile, à la tomate, plante de lumière ou héliophile."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p01_q5",
          "type": "mcq",
          "prompt": "Chez les plantes sciaphiles, l’intensité photosynthétique baisse après le maximum parce que :",
          "options": [
            "La respiration s’arrête",
            "Le dioxyde de carbone disparaît",
            "Les structures responsables de la photosynthèse se détériorent",
            "La lumière devient un nutriment"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’explication donnée à la fin de l’interprétation de l’expérience sur la lumière."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l10_production_matiere_organique_p02",
      "order": 2,
      "title": "L’influence du dioxyde de carbone et de la température",
      "summary": "Lire les courbes d’influence de la teneur en dioxyde de carbone et de la température et expliquer le rôle des enzymes.",
      "conceptExplanation": "On place un plant dans un milieu où l’on fait varier la teneur en dioxyde de carbone, la température et l’éclairement restant constants, et on mesure le dégagement de dioxygène.\nPour des concentrations en dioxyde de carbone allant des plus faibles aux valeurs moyennes, le dégagement de dioxygène passe de valeurs négatives à des valeurs croissantes, car ces teneurs favorisent de plus en plus l’activité photosynthétique ; il atteint un maximum, le ralentissement observé étant dû à une saturation des structures responsables de la photosynthèse, et au-delà il reste constant.\nLa teneur en dioxyde de carbone de l’air, prise avec les autres facteurs, devient un facteur limitant pour l’activité photosynthétique.\nPour la température, on mesure l’absorption du dioxyde de carbone : l’intensité photosynthétique est nulle à basse température car les enzymes permettant la photosynthèse sont inhibées, elle croît quand les enzymes sont de plus en plus stimulées, atteint un maximum, puis diminue jusqu’à s’annuler aux températures élevées car les enzymes sont dénaturées par la chaleur.",
      "keyRule": "Dioxyde de carbone et température influencent la photosynthèse : saturation des structures d’un côté, inhibition puis dénaturation des enzymes de l’autre.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter la courbe d’influence de la température",
        "statement": "Sur la courbe de la leçon, l’intensité photosynthétique est nulle à 0 degré, maximale à 30 degrés et nulle à nouveau vers 45 degrés. Explique ces trois situations.",
        "methodSteps": [
          "À 0 degré, les enzymes permettant la photosynthèse sont inhibées : l’intensité est nulle.",
          "De 0 à 30 degrés, les enzymes sont de plus en plus stimulées : l’intensité croît jusqu’au maximum.",
          "Au-delà de 30 degrés, les enzymes sont dénaturées par la chaleur : l’intensité diminue jusqu’à s’annuler vers 45 degrés."
        ],
        "conclusion": "Ce sont les valeurs et l’interprétation de la courbe de température de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le dioxyde de carbone favorise la photosynthèse",
          "stepTheme": "Le dioxyde de carbone favorise la photosynthèse",
          "stepBadge": "Le dioxyde de carbone favorise la photosynthèse",
          "paragraphText": "Quand la teneur en dioxyde de carbone augmente à partir du point de compensation, le dégagement de dioxygène croît rapidement.\nLa leçon l’explique par le fait que ces teneurs favorisent de plus en plus l’activité photosynthétique.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p02_q1",
            "type": "mcq",
            "prompt": "Quand la teneur en dioxyde de carbone augmente dans la zone croissante de la courbe, l’activité photosynthétique :",
            "options": [
              "Est de plus en plus favorisée, avec un dégagement de dioxygène croissant",
              "Est inhibée",
              "Reste nulle",
              "Est remplacée par la respiration"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’interprétation de la partie croissante de la courbe du dioxyde de carbone."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La saturation des structures photosynthétiques",
          "stepTheme": "La saturation des structures photosynthétiques",
          "stepBadge": "La saturation des structures photosynthétiques",
          "paragraphText": "Le ralentissement du dégagement de dioxygène avant le maximum est dû à une saturation des structures responsables de la photosynthèse.\nAu-delà du maximum, le dégagement de dioxygène reste constant malgré l’augmentation du dioxyde de carbone.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p02_q2",
            "type": "mcq",
            "prompt": "Le ralentissement observé sur la courbe du dioxyde de carbone est dû à :",
            "options": [
              "La disparition de la lumière",
              "L’arrêt de la respiration",
              "La dénaturation immédiate des enzymes",
              "Une saturation des structures responsables de la photosynthèse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est l’explication donnée dans l’interprétation de l’expérience sur le dioxyde de carbone."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le dioxyde de carbone, facteur limitant",
          "stepTheme": "Le dioxyde de carbone, facteur limitant",
          "stepBadge": "Le dioxyde de carbone, facteur limitant",
          "paragraphText": "• Facteur limitant : facteur dont la faible valeur limite l’activité photosynthétique, même si les autres facteurs sont favorables.\nLa leçon indique que la teneur en dioxyde de carbone de l’air, prise avec les autres facteurs, devient un facteur limitant pour l’activité photosynthétique.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p02_q3",
            "type": "mcq",
            "prompt": "Dans la leçon, le dioxyde de carbone de l’air est présenté comme :",
            "options": [
              "Un facteur toujours en excès",
              "Un facteur limitant pour l’activité photosynthétique",
              "Un produit de la photosynthèse",
              "Un inhibiteur des enzymes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la remarque finale de l’interprétation de l’expérience sur le dioxyde de carbone."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Température basse : des enzymes inhibées",
          "stepTheme": "Température basse : des enzymes inhibées",
          "stepBadge": "Température basse : des enzymes inhibées",
          "paragraphText": "À 0 degré, l’intensité photosynthétique est nulle.\nLa leçon l’explique par le fait qu’à cette température, les enzymes permettant la photosynthèse sont inhibées.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p02_q4",
            "type": "mcq",
            "prompt": "À 0 degré, l’intensité photosynthétique est nulle parce que les enzymes :",
            "options": [
              "Sont dénaturées par la chaleur",
              "Sont inhibées",
              "Sont saturées de substrat",
              "Ont disparu de la feuille"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’interprétation du premier point de la courbe de température."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Température élevée : des enzymes dénaturées",
          "stepTheme": "Température élevée : des enzymes dénaturées",
          "stepBadge": "Température élevée : des enzymes dénaturées",
          "paragraphText": "Piège : l’inhibition par le froid ne doit pas être confondue avec la dénaturation par la chaleur.\nAu-delà de l’optimum, l’intensité diminue jusqu’à s’annuler car les enzymes sont dénaturées par la chaleur.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p02_q5",
            "type": "mcq",
            "prompt": "Aux températures élevées, l’intensité photosynthétique s’annule parce que les enzymes sont :",
            "options": [
              "Inhibées par le froid",
              "Stimulées au maximum",
              "Transformées en chlorophylle",
              "Dénaturées par la chaleur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est l’interprétation de la fin de la courbe de température."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p02_q1",
          "type": "mcq",
          "prompt": "Quand la teneur en dioxyde de carbone augmente dans la zone croissante de la courbe, l’activité photosynthétique :",
          "options": [
            "Est de plus en plus favorisée, avec un dégagement de dioxygène croissant",
            "Est inhibée",
            "Reste nulle",
            "Est remplacée par la respiration"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’interprétation de la partie croissante de la courbe du dioxyde de carbone."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p02_q2",
          "type": "mcq",
          "prompt": "Le ralentissement observé sur la courbe du dioxyde de carbone est dû à :",
          "options": [
            "La disparition de la lumière",
            "L’arrêt de la respiration",
            "La dénaturation immédiate des enzymes",
            "Une saturation des structures responsables de la photosynthèse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est l’explication donnée dans l’interprétation de l’expérience sur le dioxyde de carbone."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p02_q3",
          "type": "mcq",
          "prompt": "Dans la leçon, le dioxyde de carbone de l’air est présenté comme :",
          "options": [
            "Un facteur toujours en excès",
            "Un facteur limitant pour l’activité photosynthétique",
            "Un produit de la photosynthèse",
            "Un inhibiteur des enzymes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la remarque finale de l’interprétation de l’expérience sur le dioxyde de carbone."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p02_q4",
          "type": "mcq",
          "prompt": "À 0 degré, l’intensité photosynthétique est nulle parce que les enzymes :",
          "options": [
            "Sont dénaturées par la chaleur",
            "Sont inhibées",
            "Sont saturées de substrat",
            "Ont disparu de la feuille"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’interprétation du premier point de la courbe de température."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p02_q5",
          "type": "mcq",
          "prompt": "Aux températures élevées, l’intensité photosynthétique s’annule parce que les enzymes sont :",
          "options": [
            "Inhibées par le froid",
            "Stimulées au maximum",
            "Transformées en chlorophylle",
            "Dénaturées par la chaleur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est l’interprétation de la fin de la courbe de température."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l10_production_matiere_organique_p03",
      "order": 3,
      "title": "Les chloroplastes et les pigments de la chlorophylle",
      "summary": "Localiser la chlorophylle dans les thylakoïdes des chloroplastes et identifier les pigments séparés par chromatographie.",
      "conceptExplanation": "L’observation de l’épiderme d’une feuille verte au microscope optique montre la présence, dans les cellules, de structures de forme arrondie colorées en vert par la chlorophylle.\nLe microscope électronique permet d’observer le détail de ces structures : les feuilles vertes contiennent des structures appelées chloroplastes, renfermant la chlorophylle au niveau de ses thylakoïdes.\nPour extraire la chlorophylle, on broie des feuilles bien vertes dans de l’acétone en présence de sulfate de sodium anhydre et de carbonate de calcium, puis on filtre ; les pigments bruts peuvent ensuite être séparés par chromatographie, le solvant montant par capillarité dans la bande de papier et entraînant les différents pigments selon leur solubilité et leur affinité pour le support.\nLa chromatographie permet de séparer les différents pigments de la chlorophylle brute : la chlorophylle a et la chlorophylle b, de couleur verte, les xanthophylles, de couleur jaune, et le carotène, de couleur jaune orangé.\nLa chlorophylle contenue dans les chloroplastes est donc un ensemble de pigments.",
      "keyRule": "La chlorophylle est un ensemble de pigments logés dans les thylakoïdes des chloroplastes.",
      "formulas": [],
      "workedExample": {
        "title": "Lire le résultat d’une chromatographie de chlorophylle brute",
        "statement": "Une tache de chlorophylle brute est déposée sur une bande de papier à chromatographie placée dans une cuve de solvants. Quels pigments sont séparés et quelles sont leurs couleurs ?",
        "methodSteps": [
          "Le solvant monte par capillarité et entraîne les pigments, qui se séparent selon leur solubilité et leur affinité pour le support.",
          "On distingue la chlorophylle a et la chlorophylle b, de couleur verte.",
          "On distingue aussi les xanthophylles, de couleur jaune, et le carotène, de couleur jaune orangé."
        ],
        "conclusion": "Ce sont les résultats de la séparation des pigments chlorophylliens par chromatographie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les chloroplastes des feuilles vertes",
          "stepTheme": "Les chloroplastes des feuilles vertes",
          "stepBadge": "Les chloroplastes des feuilles vertes",
          "paragraphText": "• Chloroplastes : structures présentes dans les cellules des feuilles vertes, de forme arrondie et colorées en vert par la chlorophylle.\nLe microscope électronique permet d’en observer l’ultrastructure détaillée.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p03_q1",
            "type": "mcq",
            "prompt": "Les structures vertes observées dans les cellules des feuilles sont :",
            "options": [
              "Les chloroplastes",
              "Les mitochondries",
              "Les vacuoles",
              "Les noyaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Conclusion partielle de la leçon : les feuilles vertes contiennent des chloroplastes renfermant la chlorophylle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La chlorophylle au niveau des thylakoïdes",
          "stepTheme": "La chlorophylle au niveau des thylakoïdes",
          "stepBadge": "La chlorophylle au niveau des thylakoïdes",
          "paragraphText": "Les chloroplastes renferment la chlorophylle au niveau de ses thylakoïdes.\nC’est donc dans ces structures internes que se trouvent les pigments qui captent la lumière.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p03_q2",
            "type": "mcq",
            "prompt": "Dans le chloroplaste, la chlorophylle est localisée au niveau :",
            "options": [
              "Du stroma uniquement",
              "De la membrane externe uniquement",
              "Des thylakoïdes",
              "Des ribosomes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la localisation donnée dans la conclusion partielle de la partie II-1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "L’extraction de la chlorophylle",
          "stepTheme": "L’extraction de la chlorophylle",
          "stepBadge": "L’extraction de la chlorophylle",
          "paragraphText": "On broie des feuilles bien vertes dans de l’acétone, en présence de sulfate de sodium anhydre pour la déshydratation et de carbonate de calcium pour la neutralisation des acides organiques.\nOn obtient une solution bien verte, que l’on filtre : c’est la chlorophylle brute.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p03_q3",
            "type": "mcq",
            "prompt": "L’extraction de la chlorophylle se fait en broyant les feuilles dans :",
            "options": [
              "De l’acétone",
              "De l’eau iodée",
              "De la liqueur de Fehling",
              "De l’eau distillée pure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la manipulation décrite dans la partie II-2 de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le principe de la chromatographie",
          "stepTheme": "Le principe de la chromatographie",
          "stepBadge": "Le principe de la chromatographie",
          "paragraphText": "La bande de papier est placée dans une cuve de solvants, à l’abri de la lumière ; le solvant monte par capillarité et entraîne les pigments.\nIls se séparent selon leur vitesse de migration, qui dépend de leur solubilité dans le solvant et de leur affinité pour le support.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p03_q4",
            "type": "mcq",
            "prompt": "Dans la chromatographie, les pigments se séparent selon :",
            "options": [
              "Leur masse uniquement",
              "Leur température d’ébullition",
              "Leur solubilité dans le solvant et leur affinité pour le support",
              "Leur teneur en eau"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le principe de la séparation décrit dans la manipulation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les pigments de la chlorophylle brute",
          "stepTheme": "Les pigments de la chlorophylle brute",
          "stepBadge": "Les pigments de la chlorophylle brute",
          "paragraphText": "La chlorophylle brute contient la chlorophylle a et la chlorophylle b, de couleur verte.\nElle contient aussi les xanthophylles, de couleur jaune, et le carotène, de couleur jaune orangé : la chlorophylle est donc un ensemble de pigments.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p03_q5",
            "type": "mcq",
            "prompt": "Le carotène, séparé par chromatographie, est de couleur :",
            "options": [
              "Verte",
              "Jaune orangé",
              "Jaune",
              "Bleue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon distingue chlorophylle a et b vertes, xanthophylles jaunes et carotène jaune orangé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p03_q1",
          "type": "mcq",
          "prompt": "Les structures vertes observées dans les cellules des feuilles sont :",
          "options": [
            "Les chloroplastes",
            "Les mitochondries",
            "Les vacuoles",
            "Les noyaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Conclusion partielle de la leçon : les feuilles vertes contiennent des chloroplastes renfermant la chlorophylle."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p03_q2",
          "type": "mcq",
          "prompt": "Dans le chloroplaste, la chlorophylle est localisée au niveau :",
          "options": [
            "Du stroma uniquement",
            "De la membrane externe uniquement",
            "Des thylakoïdes",
            "Des ribosomes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la localisation donnée dans la conclusion partielle de la partie II-1."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p03_q3",
          "type": "mcq",
          "prompt": "L’extraction de la chlorophylle se fait en broyant les feuilles dans :",
          "options": [
            "De l’acétone",
            "De l’eau iodée",
            "De la liqueur de Fehling",
            "De l’eau distillée pure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la manipulation décrite dans la partie II-2 de la leçon."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p03_q4",
          "type": "mcq",
          "prompt": "Dans la chromatographie, les pigments se séparent selon :",
          "options": [
            "Leur masse uniquement",
            "Leur température d’ébullition",
            "Leur solubilité dans le solvant et leur affinité pour le support",
            "Leur teneur en eau"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le principe de la séparation décrit dans la manipulation."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p03_q5",
          "type": "mcq",
          "prompt": "Le carotène, séparé par chromatographie, est de couleur :",
          "options": [
            "Verte",
            "Jaune orangé",
            "Jaune",
            "Bleue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon distingue chlorophylle a et b vertes, xanthophylles jaunes et carotène jaune orangé."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l10_production_matiere_organique_p04",
      "order": 4,
      "title": "La chlorophylle capte la lumière et permet la production d’amidon",
      "summary": "Relier le spectre d’absorption de la chlorophylle à la capture de l’énergie lumineuse et montrer son rôle dans la production d’amidon.",
      "conceptExplanation": "Une plante à feuilles panachées est éclairée en présence de dioxyde de carbone pendant une journée ; après ébullition et décoloration à l’alcool bouillant, on teste la présence d’amidon avec l’eau iodée : la partie verte de la feuille se colore en bleu violacé, alors que la partie non verte ne se colore pas.\nLa chlorophylle, présente dans la partie verte, capte donc la lumière et permet la production de l’amidon, qui est une matière organique.\nAvec un prisme, la lumière blanche se décompose en un spectre d’émission de sept couleurs, du violet au rouge, radiations porteuses d’énergie ; lorsqu’on intercale une solution de chlorophylle brute, certaines bandes sont remplacées par des bandes sombres, sauf au niveau des bandes vertes.\nCes bandes sombres signifient que les radiations correspondantes ont été absorbées par la chlorophylle : c’est le spectre d’absorption de la chlorophylle brute, et l’absence de bandes sombres dans le vert signifie que les radiations vertes n’ont pas été absorbées.\nEn absorbant certaines radiations, la chlorophylle absorbe l’énergie lumineuse qu’elle convertit en énergie chimique utilisée dans la production de la matière organique.",
      "keyRule": "La chlorophylle absorbe certaines radiations, sauf le vert, et convertit leur énergie en énergie chimique.",
      "formulas": [],
      "workedExample": {
        "title": "Interpréter le test à l’eau iodée sur une feuille panachée",
        "statement": "Après une journée d’éclairement, une feuille panachée décolorée est testée à l’eau iodée : seule la partie verte devient bleu violacé. Interprète ce résultat.",
        "methodSteps": [
          "La coloration bleu violacé révèle la présence d’amidon dans la partie verte de la feuille.",
          "La partie non verte, sans chlorophylle, ne produit pas d’amidon.",
          "La chlorophylle de la partie verte a donc capté la lumière et permis la production d’amidon, une matière organique."
        ],
        "conclusion": "C’est l’interprétation de l’expérience de la feuille panachée de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "La feuille panachée et l’eau iodée",
          "stepTheme": "La feuille panachée et l’eau iodée",
          "stepBadge": "La feuille panachée et l’eau iodée",
          "paragraphText": "Après éclairement, ébullition et décoloration à l’alcool bouillant, la partie verte de la feuille panachée se colore en bleu violacé à l’eau iodée.\nLa partie non verte ne se colore pas en bleu violacé.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p04_q1",
            "type": "mcq",
            "prompt": "À l’eau iodée, la partie verte de la feuille panachée devient :",
            "options": [
              "Jaune orangé",
              "Rouge brique",
              "Incolore",
              "Bleu violacé"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La coloration bleu violacé révèle l’amidon formé dans la partie verte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Seule la partie verte produit de l’amidon",
          "stepTheme": "Seule la partie verte produit de l’amidon",
          "stepBadge": "Seule la partie verte produit de l’amidon",
          "paragraphText": "L’amidon, matière organique, n’est produit que dans la partie verte de la feuille.\nLa différence entre les deux parties est la présence de chlorophylle dans la partie verte.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p04_q2",
            "type": "mcq",
            "prompt": "L’expérience de la feuille panachée montre que la production d’amidon exige :",
            "options": [
              "L’absence de lumière",
              "La présence d’acétone",
              "La présence de chlorophylle",
              "Un chauffage prolongé"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de la leçon : la chlorophylle de la partie verte capte la lumière et permet la production de l’amidon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le spectre d’émission de la lumière blanche",
          "stepTheme": "Le spectre d’émission de la lumière blanche",
          "stepBadge": "Le spectre d’émission de la lumière blanche",
          "paragraphText": "• Spectre d’émission de la lumière blanche : ensemble des radiations obtenues par décomposition de la lumière blanche par un prisme, en sept couleurs du violet au rouge.\nCes radiations ont des longueurs d’onde différentes et sont porteuses d’énergie.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p04_q3",
            "type": "mcq",
            "prompt": "Le spectre d’émission de la lumière blanche est obtenu par décomposition de la lumière par :",
            "options": [
              "Un prisme",
              "Une solution de chlorophylle",
              "Une bande de papier",
              "Un microscope"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le dispositif de la première expérience de la partie III-1."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le spectre d’absorption de la chlorophylle",
          "stepTheme": "Le spectre d’absorption de la chlorophylle",
          "stepBadge": "Le spectre d’absorption de la chlorophylle",
          "paragraphText": "• Spectre d’absorption de la chlorophylle brute : ensemble des radiations absorbées par la chlorophylle, visibles comme des bandes sombres dans le spectre.\nLes bandes sombres signifient que ces radiations ont été absorbées par la chlorophylle.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p04_q4",
            "type": "mcq",
            "prompt": "Dans le spectre obtenu avec la chlorophylle, les bandes sombres indiquent des radiations :",
            "options": [
              "Réfléchies par le prisme",
              "Produites par la chlorophylle",
              "Sans énergie",
              "Absorbées par la chlorophylle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est l’interprétation de la deuxième expérience sur les spectres."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les radiations vertes ne sont pas absorbées",
          "stepTheme": "Les radiations vertes ne sont pas absorbées",
          "stepBadge": "Les radiations vertes ne sont pas absorbées",
          "paragraphText": "Piège : il n’y a pas de bandes sombres au niveau des bandes vertes du spectre.\nCela signifie que les radiations vertes n’ont pas été absorbées par la chlorophylle brute, ce qui explique la couleur verte des feuilles.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p04_q5",
            "type": "mcq",
            "prompt": "L’absence de bandes sombres dans le vert signifie que les radiations vertes :",
            "options": [
              "Sont les plus absorbées",
              "N’ont pas été absorbées par la chlorophylle brute",
              "Ont été détruites par le prisme",
              "Sont converties en amidon directement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la conclusion de l’analyse des deux spectres dans la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p04_q1",
          "type": "mcq",
          "prompt": "À l’eau iodée, la partie verte de la feuille panachée devient :",
          "options": [
            "Jaune orangé",
            "Rouge brique",
            "Incolore",
            "Bleu violacé"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La coloration bleu violacé révèle l’amidon formé dans la partie verte."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p04_q2",
          "type": "mcq",
          "prompt": "L’expérience de la feuille panachée montre que la production d’amidon exige :",
          "options": [
            "L’absence de lumière",
            "La présence d’acétone",
            "La présence de chlorophylle",
            "Un chauffage prolongé"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de la leçon : la chlorophylle de la partie verte capte la lumière et permet la production de l’amidon."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p04_q3",
          "type": "mcq",
          "prompt": "Le spectre d’émission de la lumière blanche est obtenu par décomposition de la lumière par :",
          "options": [
            "Un prisme",
            "Une solution de chlorophylle",
            "Une bande de papier",
            "Un microscope"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le dispositif de la première expérience de la partie III-1."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p04_q4",
          "type": "mcq",
          "prompt": "Dans le spectre obtenu avec la chlorophylle, les bandes sombres indiquent des radiations :",
          "options": [
            "Réfléchies par le prisme",
            "Produites par la chlorophylle",
            "Sans énergie",
            "Absorbées par la chlorophylle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est l’interprétation de la deuxième expérience sur les spectres."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p04_q5",
          "type": "mcq",
          "prompt": "L’absence de bandes sombres dans le vert signifie que les radiations vertes :",
          "options": [
            "Sont les plus absorbées",
            "N’ont pas été absorbées par la chlorophylle brute",
            "Ont été détruites par le prisme",
            "Sont converties en amidon directement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la conclusion de l’analyse des deux spectres dans la leçon."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l10_production_matiere_organique_p05",
      "order": 5,
      "title": "La phase lumineuse de la photosynthèse",
      "summary": "Décrire les trois étapes de la phase lumineuse : photolyse de l’eau, production d’ATP et réduction du transporteur final.",
      "conceptExplanation": "La production de la matière organique se fait en deux phases : une phase lumineuse et une phase sombre.\nLa phase lumineuse, ou phase claire, se déroule à la lumière, dans les membranes des thylakoïdes ; elle commence par la capture de l’énergie lumineuse par la chlorophylle et aboutit à la production d’énergie chimique avec libération de dioxygène.\nEn présence d’énergie lumineuse, la chlorophylle est excitée et libère des électrons, pris en charge dans la chaîne photosynthétique, qui est une chaîne d’oxydoréduction ; la chlorophylle oxydée capte des électrons provenant de la décomposition de l’eau, ou photolyse, au cours de laquelle il y a libération de dioxygène.\nLa chaîne photosynthétique transporte ensuite les électrons jusqu’à la sphère pédonculée, où l’ADP est transformé en ATP : c’est la production d’énergie chimique.\nEnfin, les électrons transférés et les protons issus de la photolyse de l’eau réduisent les molécules du transporteur final, qui devient réduit.",
      "keyRule": "Phase lumineuse égale photolyse de l’eau, libération de dioxygène, production d’ATP et réduction du transporteur final.",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner les trois étapes de la phase lumineuse",
        "statement": "Remets dans l’ordre les événements de la phase lumineuse : réduction du transporteur final, photolyse de l’eau, transformation de l’ADP en ATP.",
        "methodSteps": [
          "Étape 1 : la chlorophylle excitée libère des électrons et la photolyse de l’eau libère du dioxygène en lui fournissant des électrons.",
          "Étape 2 : la chaîne photosynthétique transporte les électrons jusqu’à la sphère pédonculée, où l’ADP est transformé en ATP.",
          "Étape 3 : les électrons et les protons issus de la photolyse réduisent le transporteur final."
        ],
        "conclusion": "Ce sont les trois étapes de la phase lumineuse décrites dans la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une phase qui se déroule à la lumière",
          "stepTheme": "Une phase qui se déroule à la lumière",
          "stepBadge": "Une phase qui se déroule à la lumière",
          "paragraphText": "• Phase lumineuse (ou phase claire) : première phase de la photosynthèse, qui se déroule à la lumière, dans les membranes des thylakoïdes.\nElle commence par la capture de l’énergie lumineuse par la chlorophylle.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p05_q1",
            "type": "mcq",
            "prompt": "La phase lumineuse de la photosynthèse se déroule :",
            "options": [
              "Dans le stroma, sans lumière",
              "À la lumière, dans les membranes des thylakoïdes",
              "Dans les racines",
              "Uniquement la nuit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la localisation donnée dans l’analyse du mécanisme de la photosynthèse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’excitation de la chlorophylle",
          "stepTheme": "L’excitation de la chlorophylle",
          "stepBadge": "L’excitation de la chlorophylle",
          "paragraphText": "En présence d’énergie lumineuse, la chlorophylle est excitée et on obtient de la chlorophylle oxydée et des électrons.\nLes électrons libérés sont pris en charge dans la chaîne photosynthétique, une chaîne d’oxydoréduction.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p05_q2",
            "type": "mcq",
            "prompt": "Lorsque la chlorophylle est excitée par la lumière, elle :",
            "options": [
              "Absorbe des électrons de l’eau immédiatement",
              "Se transforme en amidon",
              "Arrête la photosynthèse",
              "Libère des électrons et devient oxydée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est l’étape 1 de la phase lumineuse décrite dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La photolyse de l’eau",
          "stepTheme": "La photolyse de l’eau",
          "stepBadge": "La photolyse de l’eau",
          "paragraphText": "• Photolyse : décomposition de l’eau au cours de la phase lumineuse, qui fournit des électrons à la chlorophylle oxydée.\nAu cours de la photolyse de l’eau, il y a libération de dioxygène et de protons.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p05_q3",
            "type": "mcq",
            "prompt": "Au cours de la photolyse de l’eau, il y a libération :",
            "options": [
              "De dioxygène",
              "De dioxyde de carbone",
              "De glucose",
              "D’amidon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La photolyse fournit les électrons qui rendent la chlorophylle réduite et libère du dioxygène."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La production d’ATP",
          "stepTheme": "La production d’ATP",
          "stepBadge": "La production d’ATP",
          "paragraphText": "La chaîne photosynthétique transporte les électrons jusqu’à la sphère pédonculée.\nÀ ce niveau, il y a transformation de l’ADP en ATP, avec sortie de protons dans le stroma : c’est la production d’énergie chimique de la phase lumineuse.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p05_q4",
            "type": "mcq",
            "prompt": "À la sphère pédonculée, au cours de l’étape 2 de la phase lumineuse, il y a :",
            "options": [
              "Transformation de l’ATP en ADP",
              "Fixation du dioxyde de carbone",
              "Transformation de l’ADP en ATP",
              "Formation de glucose"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Cette étape de production d’ATP est l’étape 2 de la phase lumineuse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La réduction du transporteur final",
          "stepTheme": "La réduction du transporteur final",
          "stepBadge": "La réduction du transporteur final",
          "paragraphText": "Les électrons transférés par la chaîne photosynthétique et les protons issus de la photolyse de l’eau réduisent les molécules du transporteur final.\nCette réduction du transporteur constitue l’étape 3 de la phase lumineuse.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p05_q5",
            "type": "mcq",
            "prompt": "L’étape 3 de la phase lumineuse correspond à :",
            "options": [
              "La réduction du transporteur final par les électrons et les protons",
              "La fixation du dioxyde de carbone",
              "La décomposition de l’eau",
              "La régénération du ribulose diphosphate"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’étape 3 décrite dans l’interprétation de la phase lumineuse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p05_q1",
          "type": "mcq",
          "prompt": "La phase lumineuse de la photosynthèse se déroule :",
          "options": [
            "Dans le stroma, sans lumière",
            "À la lumière, dans les membranes des thylakoïdes",
            "Dans les racines",
            "Uniquement la nuit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la localisation donnée dans l’analyse du mécanisme de la photosynthèse."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p05_q2",
          "type": "mcq",
          "prompt": "Lorsque la chlorophylle est excitée par la lumière, elle :",
          "options": [
            "Absorbe des électrons de l’eau immédiatement",
            "Se transforme en amidon",
            "Arrête la photosynthèse",
            "Libère des électrons et devient oxydée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est l’étape 1 de la phase lumineuse décrite dans la leçon."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p05_q3",
          "type": "mcq",
          "prompt": "Au cours de la photolyse de l’eau, il y a libération :",
          "options": [
            "De dioxygène",
            "De dioxyde de carbone",
            "De glucose",
            "D’amidon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La photolyse fournit les électrons qui rendent la chlorophylle réduite et libère du dioxygène."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p05_q4",
          "type": "mcq",
          "prompt": "À la sphère pédonculée, au cours de l’étape 2 de la phase lumineuse, il y a :",
          "options": [
            "Transformation de l’ATP en ADP",
            "Fixation du dioxyde de carbone",
            "Transformation de l’ADP en ATP",
            "Formation de glucose"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Cette étape de production d’ATP est l’étape 2 de la phase lumineuse."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p05_q5",
          "type": "mcq",
          "prompt": "L’étape 3 de la phase lumineuse correspond à :",
          "options": [
            "La réduction du transporteur final par les électrons et les protons",
            "La fixation du dioxyde de carbone",
            "La décomposition de l’eau",
            "La régénération du ribulose diphosphate"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’étape 3 décrite dans l’interprétation de la phase lumineuse."
        }
      ]
    },
    {
      "id": "premiere_d_svt_l10_production_matiere_organique_p06",
      "order": 6,
      "title": "La phase sombre, le cycle de Calvin et l’importance de la photosynthèse",
      "summary": "Décrire la fixation du dioxyde de carbone dans le cycle de Calvin, écrire l’équation globale et dégager l’importance de la photosynthèse pour la biosphère.",
      "conceptExplanation": "La phase sombre ne nécessite pas de lumière, mais la présence de dioxyde de carbone ; elle utilise l’énergie chimique produite pendant la phase lumineuse pour produire la matière organique grâce au cycle de Calvin, et elle est aussi appelée phase d’assimilation.\nLe dioxyde de carbone absorbé arrive au niveau du stroma et se fixe sur un corps endogène qui est un sucre en cinq carbones, le ribulose diphosphate, grâce à une enzyme appelée carboxylase, pour donner un sucre en six carbones, très instable, rapidement hydrolysé en deux molécules de trioses, sucres en trois carbones : l’acide phosphoglycérique.\nLes molécules de trioses formées servent d’une part à régénérer le ribulose diphosphate et d’autre part à la fabrication des glucides, des lipides et des protides.\nL’ensemble de toutes les réactions qui se déroulent pendant la phase sombre constitue le cycle de Calvin, et la photosynthèse suit l’équation globale donnée en formule de ce point.\nLa photosynthèse est très importante pour la biosphère : la matière organique produite sert de nourriture aux êtres vivants, l’oxygène dégagé sert à la respiration des êtres vivants et l’absorption du dioxyde de carbone par les plantes vertes purifie l’air.",
      "keyRule": "Phase sombre égale cycle de Calvin dans le stroma : fixation du dioxyde de carbone, formation de trioses, fabrication de glucides, lipides et protides.",
      "formulas": [
        {
          "name": "Équation globale de la photosynthèse",
          "formula": "6CO_2 + 6H_2O \\rightarrow C_6H_{12}O_6 + 6O_2",
          "note": "En présence d’énergie lumineuse et de chlorophylle, le dioxyde de carbone et l’eau donnent du glucose et du dioxygène."
        }
      ],
      "workedExample": {
        "title": "Écrire et commenter l’équation globale de la photosynthèse",
        "statement": "À l’aide de la formule de ce point, écris l’équation globale de la photosynthèse et indique ce qu’elle consomme et ce qu’elle produit.",
        "methodSteps": [
          "L’équation globale montre que la plante consomme du dioxyde de carbone et de l’eau, en présence d’énergie lumineuse et de chlorophylle.",
          "Elle produit un glucide, le glucose, qui est la matière organique fabriquée.",
          "Elle dégage aussi du dioxygène, qui provient de la photolyse de l’eau de la phase lumineuse."
        ],
        "conclusion": "C’est l’équation globale donnée à la fin de la partie III de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une phase indépendante de la lumière",
          "stepTheme": "Une phase indépendante de la lumière",
          "stepBadge": "Une phase indépendante de la lumière",
          "paragraphText": "• Phase sombre (ou phase obscure, ou phase d’assimilation) : deuxième phase de la photosynthèse, qui ne nécessite pas de lumière mais la présence de dioxyde de carbone.\nElle utilise l’énergie chimique produite pendant la phase lumineuse.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p06_q1",
            "type": "mcq",
            "prompt": "La phase sombre de la photosynthèse nécessite :",
            "options": [
              "Directement la lumière",
              "L’absence totale d’énergie chimique",
              "La présence de dioxyde de carbone, sans lumière directe",
              "La présence d’oxygène uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’analyse précise qu’elle ne nécessite pas de lumière mais la présence de dioxyde de carbone."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La fixation du dioxyde de carbone sur le ribulose diphosphate",
          "stepTheme": "La fixation du dioxyde de carbone sur le ribulose diphosphate",
          "stepBadge": "La fixation du dioxyde de carbone sur le ribulose diphosphate",
          "paragraphText": "Dans le stroma, le dioxyde de carbone se fixe sur un sucre en cinq carbones, le ribulose diphosphate, grâce à une enzyme appelée carboxylase.\nIl se forme un sucre en six carbones, très instable.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p06_q2",
            "type": "mcq",
            "prompt": "Le dioxyde de carbone de la phase sombre se fixe sur :",
            "options": [
              "Un triose en trois carbones",
              "Le ribulose diphosphate, sucre en cinq carbones",
              "L’acide phosphoglycérique directement",
              "L’ADP"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la première réaction du cycle de Calvin décrite dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La formation des trioses",
          "stepTheme": "La formation des trioses",
          "stepBadge": "La formation des trioses",
          "paragraphText": "Le sucre en six carbones, très instable, est rapidement hydrolysé pour donner deux molécules de trioses, sucres en trois carbones.\nCes trioses sont l’acide phosphoglycérique, noté APG dans la leçon.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p06_q3",
            "type": "mcq",
            "prompt": "L’hydrolyse du sucre en six carbones donne :",
            "options": [
              "Du glucose directement et du dioxygène",
              "Du ribulose diphosphate uniquement",
              "De l’ATP et de l’eau",
              "Deux molécules de trioses, l’acide phosphoglycérique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les produits de l’hydrolyse décrits dans la phase sombre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le devenir des trioses et le cycle de Calvin",
          "stepTheme": "Le devenir des trioses et le cycle de Calvin",
          "stepBadge": "Le devenir des trioses et le cycle de Calvin",
          "paragraphText": "Les trioses formés servent d’une part à régénérer le ribulose diphosphate et d’autre part à la fabrication des glucides, des lipides et des protides.\nL’ensemble des réactions de la phase sombre constitue le cycle de Calvin.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p06_q4",
            "type": "mcq",
            "prompt": "L’ensemble des réactions de la phase sombre constitue :",
            "options": [
              "La chaîne photosynthétique",
              "La photolyse",
              "Le cycle de Calvin",
              "La chromatographie des pigments"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la définition du cycle de Calvin donnée dans la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’importance de la photosynthèse pour la biosphère",
          "stepTheme": "L’importance de la photosynthèse pour la biosphère",
          "stepBadge": "L’importance de la photosynthèse pour la biosphère",
          "paragraphText": "La matière organique produite par la photosynthèse sert de nourriture aux êtres vivants.\nL’oxygène dégagé sert à la respiration des êtres vivants, et l’absorption du dioxyde de carbone par les plantes vertes purifie l’air.",
          "exercise": {
            "id": "premiere_d_svt_l10_production_matiere_organique_p06_q5",
            "type": "mcq",
            "prompt": "D’après la conclusion générale, l’absorption du dioxyde de carbone par les plantes vertes :",
            "options": [
              "Purifie l’air",
              "Pollue l’air",
              "Arrête la respiration des êtres vivants",
              "Détruit la matière organique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conclusion cite la nourriture des êtres vivants, l’oxygène pour la respiration et la purification de l’air."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p06_q1",
          "type": "mcq",
          "prompt": "La phase sombre de la photosynthèse nécessite :",
          "options": [
            "Directement la lumière",
            "L’absence totale d’énergie chimique",
            "La présence de dioxyde de carbone, sans lumière directe",
            "La présence d’oxygène uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’analyse précise qu’elle ne nécessite pas de lumière mais la présence de dioxyde de carbone."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p06_q2",
          "type": "mcq",
          "prompt": "Le dioxyde de carbone de la phase sombre se fixe sur :",
          "options": [
            "Un triose en trois carbones",
            "Le ribulose diphosphate, sucre en cinq carbones",
            "L’acide phosphoglycérique directement",
            "L’ADP"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la première réaction du cycle de Calvin décrite dans la leçon."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p06_q3",
          "type": "mcq",
          "prompt": "L’hydrolyse du sucre en six carbones donne :",
          "options": [
            "Du glucose directement et du dioxygène",
            "Du ribulose diphosphate uniquement",
            "De l’ATP et de l’eau",
            "Deux molécules de trioses, l’acide phosphoglycérique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les produits de l’hydrolyse décrits dans la phase sombre."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p06_q4",
          "type": "mcq",
          "prompt": "L’ensemble des réactions de la phase sombre constitue :",
          "options": [
            "La chaîne photosynthétique",
            "La photolyse",
            "Le cycle de Calvin",
            "La chromatographie des pigments"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la définition du cycle de Calvin donnée dans la leçon."
        },
        {
          "id": "premiere_d_svt_l10_production_matiere_organique_p06_q5",
          "type": "mcq",
          "prompt": "D’après la conclusion générale, l’absorption du dioxyde de carbone par les plantes vertes :",
          "options": [
            "Purifie l’air",
            "Pollue l’air",
            "Arrête la respiration des êtres vivants",
            "Détruit la matière organique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conclusion cite la nourriture des êtres vivants, l’oxygène pour la respiration et la purification de l’air."
        }
      ]
    }
  ]
};
