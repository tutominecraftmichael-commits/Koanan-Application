import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 2nde G3-Les techniques de représentation de la terre.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const GEO_2DE_L03_TECHNIQUES_REPRESENTATION_TERRE: CurriculumChapter = {
  "id": "seconde_a_hg_geographie_l03_techniques_representation_terre",
  "subjectId": "histoire_geo",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [],
  "order": 3,
  "title": "Leçon 3 : Les techniques de représentation de la Terre",
  "summary": "Le globe et la carte, les types de cartes, les projections, les nouvelles techniques, l'élaboration d'une carte et le profil topographique.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "2nde G3-Les techniques de représentation de la terre.pdf",
  "points": [
    {
      "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01",
      "order": 1,
      "title": "Le globe terrestre et la carte",
      "summary": "Les deux grandes représentations de la Terre, leurs avantages et leurs inconvénients.",
      "conceptExplanation": "Le globe terrestre est une représentation sphérique et réduite de la Terre : c'est la plus fidèle.\n- Avantages : il reproduit les positions exactes des continents (29 %) et des océans (71 %), le réseau des méridiens et des parallèles, et permet de montrer la rotation.\n- Inconvénients : peu de détails, on ne voit pas toute la Terre d'un coup d'œil, pas d'échelle ni de légende, il ne peut pas être plié.\n\nLa carte est une représentation plane, réduite et simplifiée de la Terre ou d'une partie de la Terre.\n- Avantages : elle a une échelle et une légende, elle montre toute la Terre d'un coup d'œil, elle est facile à interpréter et à transporter.\n- Inconvénients : elle ne respecte pas la forme sphérique de la Terre et déforme les continents.",
      "keyRule": "Globe = sphérique, le plus fidèle, sans échelle ni légende ; carte = plane, réduite, simplifiée, avec échelle et légende, mais déformée.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir la bonne représentation",
        "statement": "Un élève veut voir toute la Terre d'un seul regard, avec une légende. Globe ou carte ?",
        "methodSteps": [
          "Le globe ne montre qu'une moitié de la Terre à la fois et n'a pas de légende.",
          "La carte (planisphère) montre toute la Terre et porte une échelle et une légende."
        ],
        "conclusion": "Il doit choisir une carte, en sachant qu'elle déforme un peu les continents."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le globe terrestre",
          "stepTheme": "Le globe terrestre",
          "stepBadge": "Le globe terrestre",
          "paragraphText": "Le globe terrestre est une représentation sphérique et réduite de la Terre.\nC'est la représentation la plus fidèle (conforme) de la Terre.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q1",
            "type": "mcq",
            "prompt": "Quelle est la représentation la plus fidèle de la Terre ?",
            "options": [
              "Le planisphère",
              "La mappemonde",
              "Le globe terrestre",
              "La carte topographique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le globe, sphérique comme la Terre, est la représentation la plus fidèle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les avantages du globe",
          "stepTheme": "Les avantages du globe",
          "stepBadge": "Les avantages du globe",
          "paragraphText": "Le globe :\n• reproduit les positions exactes des continents et des océans ;\n• montre le réseau des méridiens et des parallèles ;\n• permet de montrer le mouvement de rotation.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q2",
            "type": "mcq",
            "prompt": "Quel est un avantage du globe terrestre ?",
            "options": [
              "Il reproduit les positions exactes des continents et des océans",
              "Il permet de voir toute la Terre d'un seul coup d'œil",
              "Il porte toujours une échelle et une légende détaillées",
              "Il se plie facilement pour être rangé dans un sac"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le globe respecte la forme et les positions réelles des continents et des océans."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Les limites du globe",
          "stepTheme": "Les limites du globe",
          "stepBadge": "Les limites du globe",
          "paragraphText": "Le globe a des inconvénients :\n• il montre peu de détails ;\n• on ne voit jamais toute la Terre d'un coup d'œil ;\n• il n'a ni échelle ni légende ;\n• il ne peut pas être plié.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q3",
            "type": "mcq",
            "prompt": "Quel est un inconvénient du globe terrestre ?",
            "options": [
              "Il déforme la forme des continents",
              "Il ne respecte pas la forme sphérique de la Terre",
              "Il exagère la taille du Groenland",
              "On ne peut pas voir toute la Terre d'un coup d'œil"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le globe est fidèle, mais on n'en voit qu'une moitié à la fois."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La carte",
          "stepTheme": "La carte",
          "stepBadge": "La carte",
          "paragraphText": "La carte est une représentation plane, réduite et simplifiée de la Terre ou d'une partie de la Terre.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q4",
            "type": "mcq",
            "prompt": "Quelle définition correspond à la carte ?",
            "options": [
              "Une représentation sphérique et réduite de la Terre",
              "Une représentation plane, réduite et simplifiée de la Terre",
              "Une photographie de la Terre prise depuis un satellite",
              "Une représentation de la Terre en relief et en vraie grandeur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Plane, réduite et simplifiée : c'est la carte."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les avantages de la carte",
          "stepTheme": "Les avantages de la carte",
          "stepBadge": "Les avantages de la carte",
          "paragraphText": "La carte :\n• porte une échelle et une légende ;\n• permet de voir toute la Terre d'un coup d'œil ;\n• est facile à interpréter ;\n• est peu encombrante et facile à transporter.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q5",
            "type": "mcq",
            "prompt": "Quel est un avantage de la carte sur le globe ?",
            "options": [
              "Elle respecte parfaitement la forme sphérique de la Terre",
              "Elle porte une échelle et une légende",
              "Elle reproduit sans déformation la taille des continents",
              "Elle permet de montrer le mouvement de rotation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'échelle et la légende sont des atouts de la carte."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les limites de la carte",
          "stepTheme": "Les limites de la carte",
          "stepBadge": "Les limites de la carte",
          "paragraphText": "Représenter une sphère sur un plan oblige à la déformer.\nLa carte ne respecte donc pas la forme sphérique de la Terre et déforme la configuration des continents.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q6",
            "type": "mcq",
            "prompt": "Pourquoi une carte déforme-t-elle toujours un peu les continents ?",
            "options": [
              "Parce que les cartographes dessinent toujours à main levée",
              "Parce que les continents changent de forme chaque année",
              "Parce qu'elle ne porte jamais d'échelle",
              "Parce qu'on représente une Terre sphérique sur une surface plane"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On ne peut pas aplatir une sphère sans la déformer."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le bon outil",
          "stepTheme": "Le bon outil",
          "stepBadge": "Le bon outil",
          "paragraphText": "• Pour voir la forme réelle de la Terre : le globe.\n• Pour voir toute la Terre d'un coup d'œil, avec échelle et légende : la carte.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q7",
            "type": "mcq",
            "prompt": "Un professeur veut montrer la rotation de la Terre devant la classe. Quel outil choisir ?",
            "options": [
              "Le globe terrestre",
              "Le planisphère",
              "La carte thématique",
              "Le profil topographique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le globe permet de montrer le mouvement de rotation de la Terre."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q1",
          "type": "mcq",
          "prompt": "Quelle est la représentation la plus fidèle de la Terre ?",
          "options": [
            "Le planisphère",
            "La mappemonde",
            "Le globe terrestre",
            "La carte topographique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le globe, sphérique comme la Terre, est la représentation la plus fidèle."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q2",
          "type": "mcq",
          "prompt": "Quel est un avantage du globe terrestre ?",
          "options": [
            "Il reproduit les positions exactes des continents et des océans",
            "Il permet de voir toute la Terre d'un seul coup d'œil",
            "Il porte toujours une échelle et une légende détaillées",
            "Il se plie facilement pour être rangé dans un sac"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le globe respecte la forme et les positions réelles des continents et des océans."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q3",
          "type": "mcq",
          "prompt": "Quel est un inconvénient du globe terrestre ?",
          "options": [
            "Il déforme la forme des continents",
            "Il ne respecte pas la forme sphérique de la Terre",
            "Il exagère la taille du Groenland",
            "On ne peut pas voir toute la Terre d'un coup d'œil"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le globe est fidèle, mais on n'en voit qu'une moitié à la fois."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q4",
          "type": "mcq",
          "prompt": "Quelle définition correspond à la carte ?",
          "options": [
            "Une représentation sphérique et réduite de la Terre",
            "Une représentation plane, réduite et simplifiée de la Terre",
            "Une photographie de la Terre prise depuis un satellite",
            "Une représentation de la Terre en relief et en vraie grandeur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Plane, réduite et simplifiée : c'est la carte."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q5",
          "type": "mcq",
          "prompt": "Quel est un avantage de la carte sur le globe ?",
          "options": [
            "Elle respecte parfaitement la forme sphérique de la Terre",
            "Elle porte une échelle et une légende",
            "Elle reproduit sans déformation la taille des continents",
            "Elle permet de montrer le mouvement de rotation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'échelle et la légende sont des atouts de la carte."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q6",
          "type": "mcq",
          "prompt": "Pourquoi une carte déforme-t-elle toujours un peu les continents ?",
          "options": [
            "Parce que les cartographes dessinent toujours à main levée",
            "Parce que les continents changent de forme chaque année",
            "Parce qu'elle ne porte jamais d'échelle",
            "Parce qu'on représente une Terre sphérique sur une surface plane"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On ne peut pas aplatir une sphère sans la déformer."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p01_q7",
          "type": "mcq",
          "prompt": "Un professeur veut montrer la rotation de la Terre devant la classe. Quel outil choisir ?",
          "options": [
            "Le globe terrestre",
            "Le planisphère",
            "La carte thématique",
            "Le profil topographique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le globe permet de montrer le mouvement de rotation de la Terre."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02",
      "order": 2,
      "title": "Les types de cartes et leur utilité",
      "summary": "Cartes générales, thématiques et topographiques ; à quoi sert une carte.",
      "conceptExplanation": "On distingue :\n- les cartes générales : le planisphère (toute la Terre sur une seule surface plane) et la mappemonde (la Terre sur deux cercles voisins, un par hémisphère) ;\n- les cartes thématiques : elles représentent un thème précis (relief, climat, cours d'eau, population, économie...) ;\n- les cartes topographiques : elles représentent le relief par des courbes de niveau.\n\nUtilité de la carte :\n- dans la vie quotidienne : localiser des lieux, s'orienter, connaître le milieu, représenter des phénomènes et faire des prévisions ;\n- pour la recherche : comprendre la diffusion d'un phénomène (par exemple une épidémie) ;\n- pour prendre des décisions : défense et sécurité, aménagement du territoire et urbanisme.",
      "keyRule": "Planisphère = un seul tenant ; mappemonde = deux hémisphères ; thématique = un thème ; topographique = le relief en courbes de niveau.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir la bonne carte",
        "statement": "Le ministère de la Santé veut suivre la propagation d'une épidémie. Quelle carte utiliser ?",
        "methodSteps": [
          "Le sujet est un thème précis : une maladie.",
          "Une carte qui représente un thème précis est une carte thématique."
        ],
        "conclusion": "Il faut une carte thématique, outil de recherche et d'aide à la décision."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le planisphère",
          "stepTheme": "Le planisphère",
          "stepBadge": "Le planisphère",
          "paragraphText": "Le planisphère représente toute la Terre en un seul tenant, sur une seule surface plane.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q1",
            "type": "mcq",
            "prompt": "Comment s'appelle la carte qui représente toute la Terre sur une seule surface plane ?",
            "options": [
              "La mappemonde",
              "Le globe terrestre",
              "Le planisphère",
              "La carte topographique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Planisphère : toute la Terre en un seul tenant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La mappemonde",
          "stepTheme": "La mappemonde",
          "stepBadge": "La mappemonde",
          "paragraphText": "La mappemonde représente la Terre sur deux surfaces circulaires voisines : les deux hémisphères sont dessinés côte à côte.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce qui distingue la mappemonde du planisphère ?",
            "options": [
              "Elle représente la Terre sur une seule surface plane d'un seul tenant",
              "Elle représente le relief par des courbes de niveau",
              "Elle est sphérique comme le globe terrestre",
              "Elle représente les deux hémisphères sur deux cercles côte à côte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La mappemonde : deux cercles, un par hémisphère."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La carte thématique",
          "stepTheme": "La carte thématique",
          "stepBadge": "La carte thématique",
          "paragraphText": "La carte thématique représente un thème précis : le relief, le climat, les cours d'eau, la population, l'économie...",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q3",
            "type": "mcq",
            "prompt": "Une carte des densités de population en Côte d'Ivoire est une carte :",
            "options": [
              "Topographique",
              "Générale",
              "Thématique",
              "Muette"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle représente un thème précis (la population) : c'est une carte thématique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La carte topographique",
          "stepTheme": "La carte topographique",
          "stepBadge": "La carte topographique",
          "paragraphText": "La carte topographique représente les formes du relief par des lignes appelées courbes de niveau.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q4",
            "type": "mcq",
            "prompt": "Par quoi la carte topographique représente-t-elle le relief ?",
            "options": [
              "Par des couleurs de population",
              "Par des courbes de niveau",
              "Par des flèches de vent",
              "Par des symboles de cultures"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le relief est représenté par les courbes de niveau."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Utile au quotidien",
          "stepTheme": "Utile au quotidien",
          "stepBadge": "Utile au quotidien",
          "paragraphText": "Dans la vie quotidienne, la carte permet de :\n• localiser des lieux ;\n• s'orienter ;\n• connaître son milieu ;\n• représenter des phénomènes et faire des prévisions.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q5",
            "type": "mcq",
            "prompt": "Lequel de ces usages est une utilité quotidienne de la carte ?",
            "options": [
              "S'orienter pour trouver un lieu",
              "Mesurer la température de l'eau",
              "Calculer le taux de natalité",
              "Dater une roche ancienne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La carte sert d'abord à localiser et à s'orienter."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Utile à la recherche",
          "stepTheme": "Utile à la recherche",
          "stepBadge": "Utile à la recherche",
          "paragraphText": "En recherche, la carte aide à comprendre comment un phénomène se diffuse dans l'espace.\nExemple : la propagation d'une épidémie (géographie de la santé).",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q6",
            "type": "mcq",
            "prompt": "Pourquoi les chercheurs en santé utilisent-ils des cartes ?",
            "options": [
              "Pour comprendre comment une épidémie se diffuse dans l'espace",
              "Pour connaître la date d'apparition des premières maladies",
              "Pour fabriquer des médicaments plus efficaces",
              "Pour mesurer la température des malades"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La carte montre la diffusion d'un phénomène, comme une épidémie."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Utile pour décider",
          "stepTheme": "Utile pour décider",
          "stepBadge": "Utile pour décider",
          "paragraphText": "La carte aide à prendre des décisions :\n• dans les opérations de défense et de sécurité ;\n• dans l'aménagement du territoire et l'urbanisme (plans de villes, routes).",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q7",
            "type": "mcq",
            "prompt": "Dans quel domaine la carte aide-t-elle l'État à prendre des décisions ?",
            "options": [
              "La rédaction des lois de grammaire",
              "L'aménagement du territoire et l'urbanisme",
              "Le choix des programmes de télévision",
              "La fixation des prix au marché"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La carte est un outil d'aide à la décision pour l'aménagement et la sécurité."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q1",
          "type": "mcq",
          "prompt": "Comment s'appelle la carte qui représente toute la Terre sur une seule surface plane ?",
          "options": [
            "La mappemonde",
            "Le globe terrestre",
            "Le planisphère",
            "La carte topographique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Planisphère : toute la Terre en un seul tenant."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce qui distingue la mappemonde du planisphère ?",
          "options": [
            "Elle représente la Terre sur une seule surface plane d'un seul tenant",
            "Elle représente le relief par des courbes de niveau",
            "Elle est sphérique comme le globe terrestre",
            "Elle représente les deux hémisphères sur deux cercles côte à côte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La mappemonde : deux cercles, un par hémisphère."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q3",
          "type": "mcq",
          "prompt": "Une carte des densités de population en Côte d'Ivoire est une carte :",
          "options": [
            "Topographique",
            "Générale",
            "Thématique",
            "Muette"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle représente un thème précis (la population) : c'est une carte thématique."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q4",
          "type": "mcq",
          "prompt": "Par quoi la carte topographique représente-t-elle le relief ?",
          "options": [
            "Par des couleurs de population",
            "Par des courbes de niveau",
            "Par des flèches de vent",
            "Par des symboles de cultures"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le relief est représenté par les courbes de niveau."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q5",
          "type": "mcq",
          "prompt": "Lequel de ces usages est une utilité quotidienne de la carte ?",
          "options": [
            "S'orienter pour trouver un lieu",
            "Mesurer la température de l'eau",
            "Calculer le taux de natalité",
            "Dater une roche ancienne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La carte sert d'abord à localiser et à s'orienter."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q6",
          "type": "mcq",
          "prompt": "Pourquoi les chercheurs en santé utilisent-ils des cartes ?",
          "options": [
            "Pour comprendre comment une épidémie se diffuse dans l'espace",
            "Pour connaître la date d'apparition des premières maladies",
            "Pour fabriquer des médicaments plus efficaces",
            "Pour mesurer la température des malades"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La carte montre la diffusion d'un phénomène, comme une épidémie."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p02_q7",
          "type": "mcq",
          "prompt": "Dans quel domaine la carte aide-t-elle l'État à prendre des décisions ?",
          "options": [
            "La rédaction des lois de grammaire",
            "L'aménagement du territoire et l'urbanisme",
            "Le choix des programmes de télévision",
            "La fixation des prix au marché"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La carte est un outil d'aide à la décision pour l'aménagement et la sécurité."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03",
      "order": 3,
      "title": "Les projections cartographiques",
      "summary": "Mercator, Lambert, la projection polaire et l'UTM.",
      "conceptExplanation": "Une projection cartographique est un procédé géométrique qui fait correspondre à chaque point du globe un point sur une surface plane.\n\n- La projection cylindrique de Mercator : la Terre est projetée sur un cylindre tangent à l'équateur ; méridiens et parallèles forment un quadrillage. Elle représente bien la zone intertropicale, mais déforme le reste : le Groenland paraît plus de dix fois trop grand.\n- La projection conique de Lambert : la Terre est projetée sur un cône tangent aux latitudes moyennes ; elle représente bien les zones tempérées.\n- La projection polaire (ou zénithale) : la Terre est projetée sur un plan tangent au pôle ; elle représente bien les zones polaires.\n- La projection UTM (Universal Transverse Mercator), dérivée de Mercator : la Terre est projetée par bandes de 6° qu'on juxtapose pour couvrir tout le globe.\n\nChaque projection représente bien une zone et déforme les autres.",
      "keyRule": "Mercator (cylindre) = zone intertropicale ; Lambert (cône) = zones tempérées ; polaire (plan) = pôles.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir une projection",
        "statement": "Quelle projection choisir pour une carte précise de la Côte d'Ivoire, située entre 4° et 11° de latitude Nord ?",
        "methodSteps": [
          "La Côte d'Ivoire est dans la zone intertropicale.",
          "La projection qui représente le mieux cette zone est celle de Mercator."
        ],
        "conclusion": "La projection cylindrique de Mercator convient le mieux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Qu'est-ce qu'une projection ?",
          "stepTheme": "Qu'est-ce qu'une projection ?",
          "stepBadge": "Qu'est-ce qu'une projection ?",
          "paragraphText": "Une projection cartographique est un procédé géométrique qui fait correspondre à chaque point de la surface du globe un point sur une surface plane.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une projection cartographique ?",
            "options": [
              "Une photographie de la Terre prise depuis un avion ou un ballon",
              "Un tableau qui classe les pays du monde selon leur superficie",
              "Un procédé géométrique qui fait correspondre chaque point du globe à un point d'une surface plane",
              "Une méthode pour mesurer l'altitude d'une montagne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La projection permet de passer de la sphère au plan."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Mercator : le cylindre",
          "stepTheme": "Mercator : le cylindre",
          "stepBadge": "Mercator : le cylindre",
          "paragraphText": "Projection cylindrique de Mercator : la Terre est projetée sur un cylindre tangent à l'équateur.\nMéridiens et parallèles forment un quadrillage à angles droits.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q2",
            "type": "mcq",
            "prompt": "Sur quelle figure la projection de Mercator projette-t-elle la Terre ?",
            "options": [
              "Un cône tangent aux latitudes moyennes",
              "Un plan tangent au pôle",
              "Une sphère plus petite que la Terre",
              "Un cylindre tangent à l'équateur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Mercator = projection cylindrique (cylindre tangent à l'équateur)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Forces et faiblesses de Mercator",
          "stepTheme": "Forces et faiblesses de Mercator",
          "stepBadge": "Forces et faiblesses de Mercator",
          "paragraphText": "• Avantage : la zone intertropicale est bien représentée.\n• Inconvénient : les régions éloignées de l'équateur sont agrandies : le Groenland paraît plus de dix fois trop grand.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q3",
            "type": "mcq",
            "prompt": "Quelle zone la projection de Mercator représente-t-elle le mieux ?",
            "options": [
              "Les zones tempérées",
              "Les zones polaires",
              "La zone intertropicale",
              "Toutes les zones sans aucune déformation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Mercator représente bien la zone autour de l'équateur, entre les tropiques."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Lambert : le cône",
          "stepTheme": "Lambert : le cône",
          "stepBadge": "Lambert : le cône",
          "paragraphText": "Projection conique de Lambert : la Terre est projetée sur un cône tangent aux latitudes moyennes.\nElle représente bien les zones tempérées.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q4",
            "type": "mcq",
            "prompt": "Quelle zone la projection conique de Lambert représente-t-elle le mieux ?",
            "options": [
              "La zone intertropicale",
              "Les zones polaires",
              "L'équateur uniquement",
              "Les zones tempérées"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le cône touche la Terre aux latitudes moyennes : les zones tempérées."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La projection polaire",
          "stepTheme": "La projection polaire",
          "stepBadge": "La projection polaire",
          "paragraphText": "Projection polaire (ou zénithale) : la Terre est projetée sur un plan tangent au pôle.\nElle représente bien les zones polaires et déforme les autres.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q5",
            "type": "mcq",
            "prompt": "Pour une carte précise de l'Antarctique, quelle projection choisir ?",
            "options": [
              "La projection polaire (zénithale)",
              "La projection de Mercator",
              "La projection conique de Lambert",
              "La projection UTM par bandes de 6°"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'Antarctique est autour du pôle Sud : la projection polaire convient."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La projection UTM",
          "stepTheme": "La projection UTM",
          "stepBadge": "La projection UTM",
          "paragraphText": "La projection UTM (Universal Transverse Mercator) dérive de celle de Mercator.\nElle projette la Terre par bandes de 6° ; on juxtapose ces bandes pour représenter tout le globe.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q6",
            "type": "mcq",
            "prompt": "Comment la projection UTM représente-t-elle tout le globe ?",
            "options": [
              "En projetant la Terre sur un seul cône",
              "En juxtaposant des bandes de 6°",
              "En projetant la Terre sur un plan tangent au pôle",
              "En utilisant une seule bande autour de l'équateur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "UTM : des bandes de 6° placées côte à côte."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Aucune projection parfaite",
          "stepTheme": "Aucune projection parfaite",
          "stepBadge": "Aucune projection parfaite",
          "paragraphText": "Chaque projection représente bien une zone et déforme les autres.\nC'est pourquoi le Groenland paraît aussi grand que l'Afrique sur un planisphère de Mercator, alors qu'il est environ 14 fois plus petit.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q7",
            "type": "mcq",
            "prompt": "Pourquoi le Groenland paraît-il très grand sur une carte de Mercator ?",
            "options": [
              "Parce que le Groenland est réellement plus grand que l'Afrique",
              "Parce que Mercator agrandit les régions éloignées de l'équateur",
              "Parce que Mercator agrandit les régions proches de l'équateur",
              "Parce que le Groenland est situé sur l'équateur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Mercator est fidèle près de l'équateur et agrandit les hautes latitudes."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une projection cartographique ?",
          "options": [
            "Une photographie de la Terre prise depuis un avion ou un ballon",
            "Un tableau qui classe les pays du monde selon leur superficie",
            "Un procédé géométrique qui fait correspondre chaque point du globe à un point d'une surface plane",
            "Une méthode pour mesurer l'altitude d'une montagne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La projection permet de passer de la sphère au plan."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q2",
          "type": "mcq",
          "prompt": "Sur quelle figure la projection de Mercator projette-t-elle la Terre ?",
          "options": [
            "Un cône tangent aux latitudes moyennes",
            "Un plan tangent au pôle",
            "Une sphère plus petite que la Terre",
            "Un cylindre tangent à l'équateur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Mercator = projection cylindrique (cylindre tangent à l'équateur)."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q3",
          "type": "mcq",
          "prompt": "Quelle zone la projection de Mercator représente-t-elle le mieux ?",
          "options": [
            "Les zones tempérées",
            "Les zones polaires",
            "La zone intertropicale",
            "Toutes les zones sans aucune déformation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Mercator représente bien la zone autour de l'équateur, entre les tropiques."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q4",
          "type": "mcq",
          "prompt": "Quelle zone la projection conique de Lambert représente-t-elle le mieux ?",
          "options": [
            "La zone intertropicale",
            "Les zones polaires",
            "L'équateur uniquement",
            "Les zones tempérées"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le cône touche la Terre aux latitudes moyennes : les zones tempérées."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q5",
          "type": "mcq",
          "prompt": "Pour une carte précise de l'Antarctique, quelle projection choisir ?",
          "options": [
            "La projection polaire (zénithale)",
            "La projection de Mercator",
            "La projection conique de Lambert",
            "La projection UTM par bandes de 6°"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'Antarctique est autour du pôle Sud : la projection polaire convient."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q6",
          "type": "mcq",
          "prompt": "Comment la projection UTM représente-t-elle tout le globe ?",
          "options": [
            "En projetant la Terre sur un seul cône",
            "En juxtaposant des bandes de 6°",
            "En projetant la Terre sur un plan tangent au pôle",
            "En utilisant une seule bande autour de l'équateur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "UTM : des bandes de 6° placées côte à côte."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p03_q7",
          "type": "mcq",
          "prompt": "Pourquoi le Groenland paraît-il très grand sur une carte de Mercator ?",
          "options": [
            "Parce que le Groenland est réellement plus grand que l'Afrique",
            "Parce que Mercator agrandit les régions éloignées de l'équateur",
            "Parce que Mercator agrandit les régions proches de l'équateur",
            "Parce que le Groenland est situé sur l'équateur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Mercator est fidèle près de l'équateur et agrandit les hautes latitudes."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04",
      "order": 4,
      "title": "Les nouvelles techniques de représentation",
      "summary": "Photographie aérienne, cartomatique et télédétection.",
      "conceptExplanation": "- La photographie aérienne : on photographie le terrain d'en haut, depuis un avion ou un ballon. Ces photos servent de base aux cartes.\n- La cartomatique : la réalisation des cartes à l'ordinateur, avec des logiciels (comme Adobe Illustrator). C'est la Cartographie Assistée par Ordinateur (CAO).\n- La télédétection : l'observation à distance grâce aux satellites, dont les images servent à faire des cartes. Il existe deux types de satellites :\n  * les satellites géostationnaires, qui restent fixes au-dessus d'un même point de la Terre ;\n  * les satellites à défilement, sur une orbite polaire, qui tournent autour de la Terre en passant par les pôles.",
      "keyRule": "Photo aérienne (avion, ballon), cartomatique (ordinateur, CAO), télédétection (satellites géostationnaires ou à défilement).",
      "formulas": [],
      "workedExample": {
        "title": "Choisir une technique",
        "statement": "Pour cartographier en quelques jours les zones inondées de tout un pays, quelle technique utiliser ?",
        "methodSteps": [
          "La zone est très vaste.",
          "Les satellites observent de grandes surfaces à distance et rapidement.",
          "Leurs images sont ensuite traitées à l'ordinateur."
        ],
        "conclusion": "La télédétection, puis la cartomatique pour réaliser la carte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La photographie aérienne",
          "stepTheme": "La photographie aérienne",
          "stepBadge": "La photographie aérienne",
          "paragraphText": "La photographie aérienne consiste à photographier un terrain d'en haut, depuis un avion ou un ballon.\nCes photos servent de base à la réalisation des cartes.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q1",
            "type": "mcq",
            "prompt": "D'où prend-on une photographie aérienne ?",
            "options": [
              "Depuis un avion ou un ballon",
              "Depuis un satellite en orbite",
              "Depuis le sommet d'un immeuble",
              "Depuis un bateau en mer"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Aérienne : prise depuis un avion ou un ballon. Depuis un satellite, on parle de télédétection."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La cartomatique",
          "stepTheme": "La cartomatique",
          "stepBadge": "La cartomatique",
          "paragraphText": "La cartomatique est la réalisation des cartes à l'ordinateur, avec des logiciels.\nOn l'appelle aussi Cartographie Assistée par Ordinateur (CAO).",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce que la cartomatique ?",
            "options": [
              "La prise de photos du terrain depuis un avion",
              "L'observation de la Terre par satellite",
              "Le dessin des cartes à la main sur du papier calque",
              "La réalisation des cartes à l'aide d'un ordinateur (CAO)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Cartomatique = cartographie + informatique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La télédétection",
          "stepTheme": "La télédétection",
          "stepBadge": "La télédétection",
          "paragraphText": "La télédétection consiste à recueillir des informations à distance, grâce à des satellites.\nLes images satellites servent à réaliser des cartes.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q3",
            "type": "mcq",
            "prompt": "Avec quel outil se fait la télédétection ?",
            "options": [
              "Des ballons",
              "Des boussoles",
              "Des satellites",
              "Des papiers millimétrés"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La télédétection utilise des satellites."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les satellites géostationnaires",
          "stepTheme": "Les satellites géostationnaires",
          "stepBadge": "Les satellites géostationnaires",
          "paragraphText": "Les satellites géostationnaires restent fixes au-dessus d'un même point de la Terre : ils observent toujours la même région.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q4",
            "type": "mcq",
            "prompt": "Quelle est la particularité d'un satellite géostationnaire ?",
            "options": [
              "Il tourne autour de la Terre en passant par les pôles",
              "Il se déplace d'un continent à l'autre chaque jour",
              "Il reste fixe au-dessus d'un même point de la Terre",
              "Il photographie la Terre depuis un ballon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Géostationnaire : il reste au-dessus du même point."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les satellites à défilement",
          "stepTheme": "Les satellites à défilement",
          "stepBadge": "Les satellites à défilement",
          "paragraphText": "Les satellites à défilement ont une orbite polaire : ils tournent autour de la Terre en passant par les pôles et survolent ainsi toute la planète.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q5",
            "type": "mcq",
            "prompt": "Comment se déplace un satellite à défilement ?",
            "options": [
              "Il tourne autour de la Terre en passant par les pôles",
              "Il reste immobile au-dessus d'un même point",
              "Il reste au-dessus de l'équateur sans bouger",
              "Il se pose régulièrement sur la Terre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Défilement : orbite polaire, il survole successivement toutes les régions."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Combiner les techniques",
          "stepTheme": "Combiner les techniques",
          "stepBadge": "Combiner les techniques",
          "paragraphText": "Les techniques se complètent :\n• le satellite ou l'avion fournit les images ;\n• l'ordinateur (cartomatique) transforme ces images en carte.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q6",
            "type": "mcq",
            "prompt": "Un service veut une carte des forêts du pays à partir d'images satellites. Quelle technique utilise-t-il ensuite pour dessiner la carte ?",
            "options": [
              "La projection polaire",
              "Le profil topographique",
              "La photographie aérienne en ballon",
              "La cartomatique (cartographie assistée par ordinateur)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les images de télédétection sont traitées par cartomatique."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Aérien ou satellite ?",
          "stepTheme": "Aérien ou satellite ?",
          "stepBadge": "Aérien ou satellite ?",
          "paragraphText": "Attention :\n• photographie aérienne = avion ou ballon ;\n• télédétection = satellite.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q7",
            "type": "mcq",
            "prompt": "Une image de la Côte d'Ivoire prise par un satellite relève de :",
            "options": [
              "La photographie aérienne",
              "La télédétection",
              "La cartomatique",
              "La projection conique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une image prise par satellite relève de la télédétection."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q1",
          "type": "mcq",
          "prompt": "D'où prend-on une photographie aérienne ?",
          "options": [
            "Depuis un avion ou un ballon",
            "Depuis un satellite en orbite",
            "Depuis le sommet d'un immeuble",
            "Depuis un bateau en mer"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Aérienne : prise depuis un avion ou un ballon. Depuis un satellite, on parle de télédétection."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce que la cartomatique ?",
          "options": [
            "La prise de photos du terrain depuis un avion",
            "L'observation de la Terre par satellite",
            "Le dessin des cartes à la main sur du papier calque",
            "La réalisation des cartes à l'aide d'un ordinateur (CAO)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Cartomatique = cartographie + informatique."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q3",
          "type": "mcq",
          "prompt": "Avec quel outil se fait la télédétection ?",
          "options": [
            "Des ballons",
            "Des boussoles",
            "Des satellites",
            "Des papiers millimétrés"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La télédétection utilise des satellites."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q4",
          "type": "mcq",
          "prompt": "Quelle est la particularité d'un satellite géostationnaire ?",
          "options": [
            "Il tourne autour de la Terre en passant par les pôles",
            "Il se déplace d'un continent à l'autre chaque jour",
            "Il reste fixe au-dessus d'un même point de la Terre",
            "Il photographie la Terre depuis un ballon"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Géostationnaire : il reste au-dessus du même point."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q5",
          "type": "mcq",
          "prompt": "Comment se déplace un satellite à défilement ?",
          "options": [
            "Il tourne autour de la Terre en passant par les pôles",
            "Il reste immobile au-dessus d'un même point",
            "Il reste au-dessus de l'équateur sans bouger",
            "Il se pose régulièrement sur la Terre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Défilement : orbite polaire, il survole successivement toutes les régions."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q6",
          "type": "mcq",
          "prompt": "Un service veut une carte des forêts du pays à partir d'images satellites. Quelle technique utilise-t-il ensuite pour dessiner la carte ?",
          "options": [
            "La projection polaire",
            "Le profil topographique",
            "La photographie aérienne en ballon",
            "La cartomatique (cartographie assistée par ordinateur)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les images de télédétection sont traitées par cartomatique."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p04_q7",
          "type": "mcq",
          "prompt": "Une image de la Côte d'Ivoire prise par un satellite relève de :",
          "options": [
            "La photographie aérienne",
            "La télédétection",
            "La cartomatique",
            "La projection conique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une image prise par satellite relève de la télédétection."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05",
      "order": 5,
      "title": "L'élaboration d'une carte",
      "summary": "Les étapes de fabrication d'une carte et ses éléments obligatoires.",
      "conceptExplanation": "Les étapes de l'élaboration d'une carte :\n1. La collecte de l'information : rassembler les données (enquêtes, documents, photographies aériennes).\n2. Le traitement des données : les traduire en données qualitatives ou quantitatives.\n3. Le choix de l'échelle : l'échelle est le rapport entre une longueur sur la carte et la longueur correspondante sur le terrain.\n4. Le choix des symboles et la conception de la légende.\n5. Le renseignement de la carte : placer sur le fond de carte, à partir de la légende, les objets et phénomènes.\n\nUne carte comporte aussi : un titre (le nom de la carte, qui dit ce qu'elle représente), une date d'édition, l'orientation (la flèche du Nord) et un cadre.\n\nLire une échelle : à 1/50 000, 1 cm sur la carte représente 50 000 cm, soit 500 m, sur le terrain.",
      "keyRule": "Collecte, traitement, échelle, légende, renseignement ; une carte a un titre, une échelle, une légende, une orientation et une date.",
      "formulas": [],
      "workedExample": {
        "title": "Utiliser l'échelle",
        "statement": "Sur une carte au 1/50 000, deux villages sont à 4 cm l'un de l'autre. Quelle est la distance réelle ?",
        "methodSteps": [
          "1 cm sur la carte = 50 000 cm sur le terrain = 500 m.",
          "4 cm = 4 × 500 m = 2 000 m."
        ],
        "conclusion": "Les deux villages sont à 2 km l'un de l'autre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La collecte de l'information",
          "stepTheme": "La collecte de l'information",
          "stepBadge": "La collecte de l'information",
          "paragraphText": "La première étape est la collecte de l'information : rassembler toutes les données nécessaires.\nOn les obtient par des enquêtes, des documents, des photographies aériennes...",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q1",
            "type": "mcq",
            "prompt": "Quelle est la première étape de l'élaboration d'une carte ?",
            "options": [
              "Le choix de l'échelle",
              "La collecte de l'information",
              "La conception de la légende",
              "Le traitement des données"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On commence toujours par rassembler les informations."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "L'ordre des étapes",
          "stepTheme": "L'ordre des étapes",
          "stepBadge": "L'ordre des étapes",
          "paragraphText": "L'ordre des étapes est :\n1. collecte de l'information ;\n2. traitement des données ;\n3. choix de l'échelle ;\n4. choix des symboles et conception de la légende.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q2",
            "type": "mcq",
            "prompt": "Quelle étape vient juste après la collecte de l'information ?",
            "options": [
              "La conception de la légende",
              "Le choix du titre",
              "Le tracé du cadre",
              "Le traitement des données"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Après la collecte vient le traitement des données, puis l'échelle, puis la légende."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'échelle",
          "stepTheme": "L'échelle",
          "stepBadge": "L'échelle",
          "paragraphText": "L'échelle est le rapport entre une longueur sur la carte et la longueur correspondante sur le terrain.\nExemple : 1/50 000 signifie que 1 cm sur la carte vaut 50 000 cm (500 m) sur le terrain.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'échelle d'une carte ?",
            "options": [
              "Le rapport entre une longueur sur la carte et la longueur réelle sur le terrain",
              "La liste des symboles utilisés pour représenter les phénomènes",
              "La flèche qui indique la direction du Nord géographique",
              "Le nom qui indique ce que représente la carte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'échelle relie les distances de la carte aux distances réelles."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer une distance réelle",
          "stepTheme": "Calculer une distance réelle",
          "stepBadge": "Calculer une distance réelle",
          "paragraphText": "Méthode : distance réelle = distance sur la carte × dénominateur de l'échelle.\nPuis on convertit en mètres ou en kilomètres (100 000 cm = 1 km).",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q4",
            "type": "mcq",
            "prompt": "Sur une carte au 1/100 000, deux villes sont à 3 cm. Quelle est la distance réelle ?",
            "options": [
              "30 km",
              "300 m",
              "3 km",
              "300 km"
            ],
            "correctAnswerIndex": 2,
            "explanation": "3 × 100 000 = 300 000 cm = 3 km."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La légende",
          "stepTheme": "La légende",
          "stepBadge": "La légende",
          "paragraphText": "Après le traitement, on choisit les symboles (couleurs, cercles, triangles...) qui représentent les phénomènes.\nLa légende explique la signification de chaque symbole.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q5",
            "type": "mcq",
            "prompt": "À quoi sert la légende d'une carte ?",
            "options": [
              "À indiquer la direction du Nord géographique",
              "À donner la date de publication de la carte",
              "À embellir la présentation de la carte",
              "À expliquer la signification des symboles utilisés"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La légende traduit les symboles : sans elle, on ne peut pas lire la carte."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Titre, date, Nord et cadre",
          "stepTheme": "Titre, date, Nord et cadre",
          "stepBadge": "Titre, date, Nord et cadre",
          "paragraphText": "Une carte comporte aussi :\n• un titre : le nom de la carte, qui indique sa nature ;\n• une date d'édition : situer la période d'élaboration ;\n• l'orientation : la flèche du Nord, pour s'orienter ;\n• un cadre : pour la présentation.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q6",
            "type": "mcq",
            "prompt": "Quel élément de la carte permet de s'orienter ?",
            "options": [
              "Le titre de la carte",
              "Le cadre de la carte",
              "L'orientation (la flèche du Nord)",
              "La date d'édition de la carte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La flèche du Nord indique le Nord géographique et permet de s'orienter."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le rôle du titre",
          "stepTheme": "Le rôle du titre",
          "stepBadge": "Le rôle du titre",
          "paragraphText": "Le titre n'est pas une décoration : il dit ce que représente la carte (sa nature, son thème).\nC'est le cadre qui sert à embellir la présentation.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q7",
            "type": "mcq",
            "prompt": "Quel est le rôle du titre d'une carte ?",
            "options": [
              "Embellir la présentation de la carte",
              "Indiquer ce que représente la carte (sa nature)",
              "Indiquer la direction du Nord",
              "Donner le rapport entre la carte et le terrain"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le titre identifie la carte ; le cadre, lui, embellit la présentation."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q1",
          "type": "mcq",
          "prompt": "Quelle est la première étape de l'élaboration d'une carte ?",
          "options": [
            "Le choix de l'échelle",
            "La collecte de l'information",
            "La conception de la légende",
            "Le traitement des données"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On commence toujours par rassembler les informations."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q2",
          "type": "mcq",
          "prompt": "Quelle étape vient juste après la collecte de l'information ?",
          "options": [
            "La conception de la légende",
            "Le choix du titre",
            "Le tracé du cadre",
            "Le traitement des données"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Après la collecte vient le traitement des données, puis l'échelle, puis la légende."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'échelle d'une carte ?",
          "options": [
            "Le rapport entre une longueur sur la carte et la longueur réelle sur le terrain",
            "La liste des symboles utilisés pour représenter les phénomènes",
            "La flèche qui indique la direction du Nord géographique",
            "Le nom qui indique ce que représente la carte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'échelle relie les distances de la carte aux distances réelles."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q4",
          "type": "mcq",
          "prompt": "Sur une carte au 1/100 000, deux villes sont à 3 cm. Quelle est la distance réelle ?",
          "options": [
            "30 km",
            "300 m",
            "3 km",
            "300 km"
          ],
          "correctAnswerIndex": 2,
          "explanation": "3 × 100 000 = 300 000 cm = 3 km."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q5",
          "type": "mcq",
          "prompt": "À quoi sert la légende d'une carte ?",
          "options": [
            "À indiquer la direction du Nord géographique",
            "À donner la date de publication de la carte",
            "À embellir la présentation de la carte",
            "À expliquer la signification des symboles utilisés"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La légende traduit les symboles : sans elle, on ne peut pas lire la carte."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q6",
          "type": "mcq",
          "prompt": "Quel élément de la carte permet de s'orienter ?",
          "options": [
            "Le titre de la carte",
            "Le cadre de la carte",
            "L'orientation (la flèche du Nord)",
            "La date d'édition de la carte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La flèche du Nord indique le Nord géographique et permet de s'orienter."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p05_q7",
          "type": "mcq",
          "prompt": "Quel est le rôle du titre d'une carte ?",
          "options": [
            "Embellir la présentation de la carte",
            "Indiquer ce que représente la carte (sa nature)",
            "Indiquer la direction du Nord",
            "Donner le rapport entre la carte et le terrain"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le titre identifie la carte ; le cadre, lui, embellit la présentation."
        }
      ]
    },
    {
      "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06",
      "order": 6,
      "title": "Le profil topographique",
      "summary": "Lire les courbes de niveau et construire un profil du relief.",
      "conceptExplanation": "Le profil topographique est une coupe du relief, construite à partir des courbes de niveau d'une carte topographique.\n\n- Une courbe de niveau est une ligne imaginaire qui relie les points de même altitude.\n- L'équidistance est la différence d'altitude entre deux courbes de niveau consécutives.\n- Une courbe sur cinq est tracée plus épaisse : c'est la courbe maîtresse.\n\nÉtapes de construction :\n1. Identifier les courbes de niveau, l'équidistance, les points cotés (le plus haut et le plus bas) et les échelles. L'échelle des longueurs (en abscisse) est celle de la carte ; l'échelle des hauteurs (en ordonnée) se choisit d'après la dénivellation (altitude du point le plus haut − altitude du point le plus bas) : plus de 250 m, on prend 1/20 000 ; moins de 250 m, on prend 1/10 000.\n2. Sur du papier millimétré, tracer l'axe des distances (en km) et l'axe des altitudes (en m), reporter les points où le tracé coupe les courbes, puis les joindre.\n3. Identifier les grands ensembles et les éléments du relief (plaines, plateaux, collines, vallées).",
      "keyRule": "Courbe de niveau = points de même altitude ; équidistance = écart entre deux courbes ; abscisse = distances, ordonnée = altitudes.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir l'échelle des hauteurs",
        "statement": "Le point le plus haut du tracé est à 1 091 m, le plus bas à 804 m. Quelle échelle des hauteurs choisir ?",
        "methodSteps": [
          "Dénivellation : 1 091 − 804 = 287 m.",
          "287 m est supérieur à 250 m."
        ],
        "conclusion": "On choisit l'échelle des hauteurs au 1/20 000."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le profil topographique",
          "stepTheme": "Le profil topographique",
          "stepBadge": "Le profil topographique",
          "paragraphText": "Le profil topographique est une coupe qui montre la forme du relief le long d'un tracé.\nIl se construit à partir des courbes de niveau d'une carte topographique.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q1",
            "type": "mcq",
            "prompt": "À partir de quoi construit-on un profil topographique ?",
            "options": [
              "Des courbes de niveau d'une carte topographique",
              "Des couleurs d'une carte de population",
              "D'une photographie prise par satellite",
              "Du réseau des méridiens et des parallèles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le profil se construit en lisant les courbes de niveau."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La courbe de niveau",
          "stepTheme": "La courbe de niveau",
          "stepBadge": "La courbe de niveau",
          "paragraphText": "Une courbe de niveau est une ligne imaginaire qui relie tous les points de même altitude.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une courbe de niveau ?",
            "options": [
              "Une ligne imaginaire qui relie les points de même altitude",
              "Une ligne qui relie les villes de même population",
              "Une ligne qui suit le cours d'une rivière",
              "Une ligne qui indique la direction du Nord"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tous les points d'une même courbe de niveau ont la même altitude."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'équidistance",
          "stepTheme": "L'équidistance",
          "stepBadge": "L'équidistance",
          "paragraphText": "L'équidistance est la différence d'altitude entre deux courbes de niveau consécutives.\nExemple : des courbes à 100 m, 120 m, 140 m ont une équidistance de 20 m.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q3",
            "type": "mcq",
            "prompt": "Des courbes de niveau consécutives sont cotées 200 m, 250 m, 300 m. Quelle est l'équidistance ?",
            "options": [
              "100 m",
              "50 m",
              "250 m",
              "200 m"
            ],
            "correctAnswerIndex": 1,
            "explanation": "250 − 200 = 50 m : c'est l'écart d'altitude entre deux courbes voisines."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La courbe maîtresse",
          "stepTheme": "La courbe maîtresse",
          "stepBadge": "La courbe maîtresse",
          "paragraphText": "Pour faciliter la lecture, une courbe de niveau sur cinq est tracée en trait plus épais : c'est la courbe maîtresse.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q4",
            "type": "mcq",
            "prompt": "Comment appelle-t-on la courbe de niveau tracée plus épaisse, une sur cinq ?",
            "options": [
              "L'équidistance",
              "Le point coté",
              "La courbe maîtresse",
              "La courbe intermédiaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une courbe sur cinq, plus épaisse, est la courbe maîtresse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Les deux axes",
          "stepTheme": "Les deux axes",
          "stepBadge": "Les deux axes",
          "paragraphText": "Sur le papier millimétré :\n• l'axe horizontal (abscisse) porte les distances, en km, à l'échelle de la carte ;\n• l'axe vertical (ordonnée) porte les altitudes, en m.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q5",
            "type": "mcq",
            "prompt": "Que représente l'axe des ordonnées (vertical) d'un profil topographique ?",
            "options": [
              "Les distances, en kilomètres",
              "Les températures, en degrés",
              "Les dates des relevés",
              "Les altitudes, en mètres"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En ordonnée, les hauteurs (altitudes) ; en abscisse, les distances."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "L'échelle des hauteurs",
          "stepTheme": "L'échelle des hauteurs",
          "stepBadge": "L'échelle des hauteurs",
          "paragraphText": "Dénivellation = altitude du point le plus haut − altitude du point le plus bas.\n• Plus de 250 m : échelle des hauteurs au 1/20 000.\n• Moins de 250 m : échelle des hauteurs au 1/10 000.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q6",
            "type": "mcq",
            "prompt": "Le point le plus haut est à 480 m et le plus bas à 300 m. Quelle échelle des hauteurs choisir ?",
            "options": [
              "1/20 000",
              "1/50 000",
              "1/10 000",
              "1/100 000"
            ],
            "correctAnswerIndex": 2,
            "explanation": "480 − 300 = 180 m, moins de 250 m : on choisit 1/10 000."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Construire et interpréter",
          "stepTheme": "Construire et interpréter",
          "stepBadge": "Construire et interpréter",
          "paragraphText": "On reporte chaque point où le tracé coupe une courbe de niveau, à sa distance et à son altitude.\nOn joint les points, puis on identifie les éléments du relief : plaines, plateaux, collines, vallées.",
          "exercise": {
            "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q7",
            "type": "mcq",
            "prompt": "Quelle est la dernière étape de la réalisation d'un profil topographique ?",
            "options": [
              "Choisir le titre et la date d'édition de la carte",
              "Calculer l'équidistance des courbes de niveau",
              "Collecter les informations par des enquêtes",
              "Identifier les grands ensembles et les éléments du relief"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une fois la ligne tracée, on interprète : on nomme les formes du relief."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q1",
          "type": "mcq",
          "prompt": "À partir de quoi construit-on un profil topographique ?",
          "options": [
            "Des courbes de niveau d'une carte topographique",
            "Des couleurs d'une carte de population",
            "D'une photographie prise par satellite",
            "Du réseau des méridiens et des parallèles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le profil se construit en lisant les courbes de niveau."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une courbe de niveau ?",
          "options": [
            "Une ligne imaginaire qui relie les points de même altitude",
            "Une ligne qui relie les villes de même population",
            "Une ligne qui suit le cours d'une rivière",
            "Une ligne qui indique la direction du Nord"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tous les points d'une même courbe de niveau ont la même altitude."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q3",
          "type": "mcq",
          "prompt": "Des courbes de niveau consécutives sont cotées 200 m, 250 m, 300 m. Quelle est l'équidistance ?",
          "options": [
            "100 m",
            "50 m",
            "250 m",
            "200 m"
          ],
          "correctAnswerIndex": 1,
          "explanation": "250 − 200 = 50 m : c'est l'écart d'altitude entre deux courbes voisines."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q4",
          "type": "mcq",
          "prompt": "Comment appelle-t-on la courbe de niveau tracée plus épaisse, une sur cinq ?",
          "options": [
            "L'équidistance",
            "Le point coté",
            "La courbe maîtresse",
            "La courbe intermédiaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une courbe sur cinq, plus épaisse, est la courbe maîtresse."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q5",
          "type": "mcq",
          "prompt": "Que représente l'axe des ordonnées (vertical) d'un profil topographique ?",
          "options": [
            "Les distances, en kilomètres",
            "Les températures, en degrés",
            "Les dates des relevés",
            "Les altitudes, en mètres"
          ],
          "correctAnswerIndex": 3,
          "explanation": "En ordonnée, les hauteurs (altitudes) ; en abscisse, les distances."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q6",
          "type": "mcq",
          "prompt": "Le point le plus haut est à 480 m et le plus bas à 300 m. Quelle échelle des hauteurs choisir ?",
          "options": [
            "1/20 000",
            "1/50 000",
            "1/10 000",
            "1/100 000"
          ],
          "correctAnswerIndex": 2,
          "explanation": "480 − 300 = 180 m, moins de 250 m : on choisit 1/10 000."
        },
        {
          "id": "seconde_a_hg_geographie_l03_techniques_representation_terre_p06_q7",
          "type": "mcq",
          "prompt": "Quelle est la dernière étape de la réalisation d'un profil topographique ?",
          "options": [
            "Choisir le titre et la date d'édition de la carte",
            "Calculer l'équidistance des courbes de niveau",
            "Collecter les informations par des enquêtes",
            "Identifier les grands ensembles et les éléments du relief"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une fois la ligne tracée, on interprète : on nomme les formes du relief."
        }
      ]
    }
  ]
};
