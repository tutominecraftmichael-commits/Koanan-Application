import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Le résumé de texte argumentatif » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3761
export const FR_TLE_EE_L03_RESUME_TEXTE: CurriculumChapter = {
  "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif",
  "subjectId": "francais",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 3,
  "title": "Leçon 3 : Le résumé de texte argumentatif",
  "summary": "À la bibliothèque, les élèves de terminale découvrent une série de textes argumentatifs et décident d'en retenir l'essentiel : répondre aux questions de compréhension, repérer les idées essentielles et leur enchaînement, puis résumer le texte au quart de son volume.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3761",
  "points": [
    {
      "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01",
      "order": 1,
      "title": "Répondre aux questions de compréhension",
      "summary": "Identifier le thème, reformuler la thèse et déterminer la visée argumentative d'un texte.",
      "conceptExplanation": "Avant de résumer un texte argumentatif, la première séance apprend à répondre aux consignes de compréhension. Trois questions structurent ce travail.\n• Le thème : le sujet général dont parle le texte. Pour le texte 1 d'IMANI Ghana (revue « Contrepoints » du 12 février 2014), le thème est l'immigration clandestine ; pour le texte 2 de Clément WINSAVI (Fraternité Matin du 9 octobre 2013), c'est la dépigmentation.\n• La thèse : le point de vue que l'auteur défend et qu'il faut reformuler. Dans le texte 1, la réduction de la pauvreté est présentée comme le meilleur moyen de lutter efficacement contre l'immigration clandestine.\n• La visée argumentative : ce que l'auteur cherche à obtenir. Dans le texte 1, l'auteur interpelle les gouvernants pour qu'ils mettent en place les conditions de maintien de la jeunesse par la création d'emplois. Dans le texte 2, Clément WINSAVI veut convaincre les femmes et les hommes de conserver leur teint naturel.",
      "keyRule": "Trois réponses avant tout résumé : le thème (de quoi parle le texte), la thèse (ce que l'auteur défend) et la visée (ce qu'il veut obtenir).",
      "formulas": [],
      "workedExample": {
        "title": "Répondre aux questions sur le texte 1 (corrigé de la séance 1)",
        "statement": "Le texte 1 d'IMANI Ghana traite de l'immigration africaine vers l'Occident. Réponds aux trois questions de compréhension : thème, thèse reformulée, visée argumentative.",
        "methodSteps": [
          "Thème du texte : l'immigration, et plus précisément l'immigration clandestine.",
          "Thèse reformulée : la réduction de la pauvreté est le meilleur moyen pour lutter efficacement contre l'immigration clandestine.",
          "Visée argumentative : l'auteur interpelle les gouvernants à mettre en place les conditions de maintien de la jeunesse par la création d'emplois."
        ],
        "conclusion": "Thème, thèse et visée sont identifiés : la compréhension du texte est assurée avant le travail de résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le thème du texte",
          "stepTheme": "Le thème du texte",
          "stepBadge": "Le thème du texte",
          "paragraphText": "• Thème : sujet général dont parle un texte, exprimé en quelques mots.\nDans le texte 1 d'IMANI Ghana, le thème est l'immigration clandestine ; dans le texte 2 de Clément WINSAVI, le thème est la dépigmentation.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01_q1",
            "type": "mcq",
            "prompt": "Quel est le thème du texte 1 d'IMANI Ghana ?",
            "options": [
              "La dépigmentation",
              "L'immigration clandestine",
              "La beauté naturelle",
              "Le développement industriel de l'Europe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé de la séance 1 donne pour thème du texte 1 l'immigration, c'est-à-dire l'immigration clandestine. La dépigmentation est le thème du texte 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La thèse de l'auteur",
          "stepTheme": "La thèse de l'auteur",
          "stepBadge": "La thèse de l'auteur",
          "paragraphText": "• Thèse : point de vue que l'auteur défend dans son texte et que la consigne demande de reformuler.\nPour le texte 1, la thèse est : « Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine ».",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01_q2",
            "type": "mcq",
            "prompt": "Quelle reformulation correspond à la thèse du texte 1 ?",
            "options": [
              "Les migrants doivent être renvoyés chez eux",
              "Les Occidentaux doivent fermer leurs frontières",
              "La réduction de la pauvreté est le meilleur moyen pour lutter efficacement contre l'immigration clandestine",
              "L'Afrique doit importer davantage de produits industriels"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la reformulation donnée dans le corrigé : réduire la pauvreté en Afrique est le moyen le plus efficace contre l'immigration clandestine."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La visée argumentative",
          "stepTheme": "La visée argumentative",
          "stepBadge": "La visée argumentative",
          "paragraphText": "• Visée argumentative : effet que l'auteur cherche à produire sur son lecteur ou sur les personnes qu'il interpelle.\nDans le texte 1, l'auteur interpelle les gouvernants à mettre en place les conditions de maintien de la jeunesse par la création d'emplois.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est la visée argumentative de l'auteur du texte 1 ?",
            "options": [
              "Divertir les lecteurs par un récit de voyage",
              "Interpeller les gouvernants à créer les conditions de maintien de la jeunesse par la création d'emplois",
              "Décrire les paysages de l'océan Atlantique",
              "Encourager les jeunes à émigrer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé précise que l'auteur interpelle les gouvernants pour le maintien de la jeunesse, grâce à la création d'emplois."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les trois questions dans l'ordre",
          "stepTheme": "Les trois questions dans l'ordre",
          "stepBadge": "Les trois questions dans l'ordre",
          "paragraphText": "Méthode de la séance 1 : répondre aux consignes de compréhension dans l'ordre posé par le sujet.\n• Question 1 : quel est le thème du texte ?\n• Question 2 : reformulez la thèse de l'auteur.\n• Question 3 : quelle est la visée argumentative de l'auteur ?",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01_q4",
            "type": "mcq",
            "prompt": "Quelle est la deuxième question de compréhension du sujet ?",
            "options": [
              "Quelle est la visée argumentative de l'auteur ?",
              "Quel est le thème de ce texte ?",
              "Reformulez la thèse de l'auteur",
              "Résumez le texte au quart de son volume"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sujet pose d'abord le thème, puis demande de reformuler la thèse, puis la visée argumentative. Le résumé vient ensuite, dans une autre partie du sujet."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre thème et thèse",
          "stepTheme": "Ne pas confondre thème et thèse",
          "stepBadge": "Ne pas confondre thème et thèse",
          "paragraphText": "Piège : répondre à la question du thème par une phrase entière, ou à la question de la thèse par un seul mot.\nLe thème est un sujet général en quelques mots (l'immigration clandestine) ; la thèse est une affirmation complète que l'auteur défend.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01_q5",
            "type": "mcq",
            "prompt": "« L'immigration clandestine », pris seul, correspond à :",
            "options": [
              "La thèse de l'auteur",
              "La visée argumentative",
              "La conclusion du résumé",
              "Le thème du texte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un sujet général en quelques mots, c'est le thème. La thèse serait la phrase complète défendue par l'auteur sur ce thème."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le texte 2 sur la dépigmentation",
          "stepTheme": "Le texte 2 sur la dépigmentation",
          "stepBadge": "Le texte 2 sur la dépigmentation",
          "paragraphText": "Dans le corrigé du texte 2, le thème est la dépigmentation et la thèse est que les utilisateurs des produits pour la dépigmentation exposent leur vie et doivent prendre conscience de cela.\nLa structure du texte y est aussi dégagée : paragraphes 1 et 2, la généralisation de la dépigmentation ; paragraphes 3, 4 et 5, les effets néfastes de la dépigmentation.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01_q6",
            "type": "mcq",
            "prompt": "Selon le corrigé, quelle est la visée argumentative du texte 2 ?",
            "options": [
              "Convaincre les femmes et les hommes de conserver leur teint naturel",
              "Promouvoir les produits éclaircissants",
              "Présenter les métiers de la cosmétique",
              "Décrire les régions d'Afrique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Clément WINSAVI a écrit ce texte pour convaincre les femmes et les hommes de conserver leur teint naturel."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01_q1",
          "type": "mcq",
          "prompt": "Quel est le thème du texte 1 d'IMANI Ghana ?",
          "options": [
            "La dépigmentation",
            "L'immigration clandestine",
            "La beauté naturelle",
            "Le développement industriel de l'Europe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé de la séance 1 donne pour thème du texte 1 l'immigration, c'est-à-dire l'immigration clandestine. La dépigmentation est le thème du texte 2."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01_q2",
          "type": "mcq",
          "prompt": "Quelle reformulation correspond à la thèse du texte 1 ?",
          "options": [
            "Les migrants doivent être renvoyés chez eux",
            "Les Occidentaux doivent fermer leurs frontières",
            "La réduction de la pauvreté est le meilleur moyen pour lutter efficacement contre l'immigration clandestine",
            "L'Afrique doit importer davantage de produits industriels"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la reformulation donnée dans le corrigé : réduire la pauvreté en Afrique est le moyen le plus efficace contre l'immigration clandestine."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est la visée argumentative de l'auteur du texte 1 ?",
          "options": [
            "Divertir les lecteurs par un récit de voyage",
            "Interpeller les gouvernants à créer les conditions de maintien de la jeunesse par la création d'emplois",
            "Décrire les paysages de l'océan Atlantique",
            "Encourager les jeunes à émigrer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé précise que l'auteur interpelle les gouvernants pour le maintien de la jeunesse, grâce à la création d'emplois."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01_q4",
          "type": "mcq",
          "prompt": "Quelle est la deuxième question de compréhension du sujet ?",
          "options": [
            "Quelle est la visée argumentative de l'auteur ?",
            "Quel est le thème de ce texte ?",
            "Reformulez la thèse de l'auteur",
            "Résumez le texte au quart de son volume"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sujet pose d'abord le thème, puis demande de reformuler la thèse, puis la visée argumentative. Le résumé vient ensuite, dans une autre partie du sujet."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01_q5",
          "type": "mcq",
          "prompt": "« L'immigration clandestine », pris seul, correspond à :",
          "options": [
            "La thèse de l'auteur",
            "La visée argumentative",
            "La conclusion du résumé",
            "Le thème du texte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un sujet général en quelques mots, c'est le thème. La thèse serait la phrase complète défendue par l'auteur sur ce thème."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p01_q6",
          "type": "mcq",
          "prompt": "Selon le corrigé, quelle est la visée argumentative du texte 2 ?",
          "options": [
            "Convaincre les femmes et les hommes de conserver leur teint naturel",
            "Promouvoir les produits éclaircissants",
            "Présenter les métiers de la cosmétique",
            "Décrire les régions d'Afrique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Clément WINSAVI a écrit ce texte pour convaincre les femmes et les hommes de conserver leur teint naturel."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02",
      "order": 2,
      "title": "Identifier la situation d'argumentation et la stratégie argumentative",
      "summary": "Repérer thème, thèse et visée, puis analyser les indices d'énonciation, les connecteurs et la structure du texte.",
      "conceptExplanation": "La séance 2 apprend à identifier la situation d'argumentation d'un texte : son thème, la thèse de l'auteur et sa visée argumentative.\n• La stratégie argumentative : c'est l'ensemble des procédés d'écriture utilisé par l'auteur pour soutenir son point de vue ou réfuter un point de vue. Elle inclut son mode de raisonnement. Dans le texte 1, elle s'observe au niveau des indices d'énonciation, des indices de temps, des connecteurs logiques et des modalisateurs.\n• Les indices d'énonciation : les pronoms personnels (« ils » renvoie aux migrants ; « on » et « nous » sont des pronoms inclusifs traduisant tout le monde, y compris l'auteur ; « elle » renvoie à l'Afrique) et les adjectifs possessifs comme « leur ». Les indices temporels sont le passé composé, le présent de l'indicatif et le futur antérieur.\n• La structure du texte : c'est l'articulation ou l'organisation du texte ; elle permet de repérer les séquences argumentatives. Pour la dégager, on peut se laisser guider par les paragraphes, les connecteurs logiques ou les indices d'énonciation. Le texte 1 compte trois parties : l'immigration clandestine et ses conséquences, les causes de l'immigration clandestine, puis les propositions de solutions.",
      "keyRule": "La stratégie argumentative se repère dans les indices d'énonciation, les indices de temps, les connecteurs logiques et la structure du texte.",
      "formulas": [],
      "workedExample": {
        "title": "Analyser la situation d'argumentation du texte 1",
        "statement": "À partir du texte 1 sur l'immigration clandestine, identifie la situation d'argumentation puis relève des indices de la stratégie argumentative.",
        "methodSteps": [
          "Situation d'argumentation : thème, l'immigration clandestine ; thèse, « Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine » ; visée, convaincre les gouvernants de créer les conditions de maintien de la jeunesse par la création d'emplois.",
          "Indices d'énonciation : « ils » désigne les migrants, « on » et « nous » incluent tout le monde et l'auteur, « elle » désigne l'Afrique.",
          "Connecteurs : « mais » et « or » marquent l'opposition, « aussi » et « de plus » l'addition, « parce que » la cause, « donc » la conséquence.",
          "Structure en trois parties : l'immigration clandestine et ses conséquences, ses causes, puis les propositions de solutions."
        ],
        "conclusion": "Thème, thèse, visée, indices et structure décrivent ensemble la stratégie argumentative de l'auteur."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La situation d'argumentation",
          "stepTheme": "La situation d'argumentation",
          "stepBadge": "La situation d'argumentation",
          "paragraphText": "• Situation d'argumentation : ensemble formé par le thème du texte, la thèse de l'auteur et sa visée argumentative.\nL'identifier est la première partie du travail de la séance 2, avant l'étude de la stratégie argumentative.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02_q1",
            "type": "mcq",
            "prompt": "Identifier la situation d'argumentation d'un texte, c'est relever :",
            "options": [
              "Son nombre de mots et sa date de publication",
              "Son thème, la thèse de l'auteur et sa visée argumentative",
              "Uniquement ses exemples",
              "Ses paragraphes sans les lire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La séance 2 commence par la compréhension du texte : thème, thèse et visée argumentative."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La stratégie argumentative",
          "stepTheme": "La stratégie argumentative",
          "stepBadge": "La stratégie argumentative",
          "paragraphText": "• Stratégie argumentative : ensemble des procédés d'écriture utilisé par l'auteur pour soutenir son point de vue ou réfuter un point de vue.\nElle inclut le mode de raisonnement de l'auteur et s'observe notamment dans les indices d'énonciation, les connecteurs logiques et les modalisateurs.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02_q2",
            "type": "mcq",
            "prompt": "La stratégie argumentative d'un auteur, c'est :",
            "options": [
              "Le résumé de son texte",
              "Le titre de son texte",
              "L'ensemble des procédés d'écriture utilisés pour soutenir son point de vue ou réfuter un point de vue",
              "La liste de ses exemples uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition donnée dans les traces écrites de la séance 2."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les indices d'énonciation",
          "stepTheme": "Les indices d'énonciation",
          "stepBadge": "Les indices d'énonciation",
          "paragraphText": "• Indices d'énonciation : marques de la présence des personnes dans le texte, pronoms personnels et adjectifs possessifs.\nDans le texte 1 : « ils » renvoie aux migrants ; « on » et « nous » sont inclusifs et traduisent tout le monde, y compris l'auteur ; « elle » renvoie à l'Afrique ; « leur » est un adjectif possessif.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02_q3",
            "type": "mcq",
            "prompt": "Dans le texte 1, à quoi renvoie le pronom « ils » ?",
            "options": [
              "Aux gouvernants européens",
              "Aux migrants",
              "Aux industriels occidentaux",
              "Aux syndicats"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les traces écrites précisent le référent : « ils » renvoie aux migrants. « Elle » renvoie à l'Afrique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Dégager la structure du texte",
          "stepTheme": "Dégager la structure du texte",
          "stepBadge": "Dégager la structure du texte",
          "paragraphText": "• Structure du texte : articulation ou organisation du texte, qui permet de repérer les séquences argumentatives.\nMéthode : pour dégager la structure, on peut se laisser guider par les paragraphes, les connecteurs logiques ou les indices d'énonciation.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02_q4",
            "type": "mcq",
            "prompt": "Pour dégager la structure d'un texte, la leçon conseille de se laisser guider par :",
            "options": [
              "La longueur des phrases uniquement",
              "Les paragraphes, les connecteurs logiques ou les indices d'énonciation",
              "La couverture du livre",
              "Le nombre de pages"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois repères donnés dans les traces écrites de la séance 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Opposition ou addition : ne pas confondre les connecteurs",
          "stepTheme": "Opposition ou addition : ne pas confondre les connecteurs",
          "stepBadge": "Opposition ou addition : ne pas confondre les connecteurs",
          "paragraphText": "Piège : attribuer la même valeur à tous les connecteurs logiques.\nDans le texte 1 : « mais » et « or » expriment l'opposition, une rupture d'une logique ; « aussi » et « de plus » expriment l'addition ; « parce que » la cause ; « donc » la conséquence ; « si même » évoque une évidence.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02_q5",
            "type": "mcq",
            "prompt": "Dans le texte 1, quelle valeur exprime le connecteur « or » ?",
            "options": [
              "L'addition",
              "La cause",
              "La conséquence",
              "L'opposition"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Mais » et « or » sont rangés dans la leçon parmi les connecteurs d'opposition. L'addition est marquée par « aussi » et « de plus »."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le champ lexical de l'immigration",
          "stepTheme": "Le champ lexical de l'immigration",
          "stepBadge": "Le champ lexical de l'immigration",
          "paragraphText": "Le champ lexical propre au thème se relève dans le texte même.\nPour le texte 1 : les immigrants, gagner les Canaries, les clandestins, se lance, la traversée, barque de pêche, ce voyage, leur destination, préférer l'exode, afflux d'immigrés, vers l'Occident.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02_q6",
            "type": "mcq",
            "prompt": "Lequel de ces mots appartient au champ lexical de l'immigration dans le texte 1 ?",
            "options": [
              "La traversée",
              "La dépigmentation",
              "Le teint clair",
              "Les boutons incolores"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« La traversée » figure dans le relevé du champ lexical du texte 1. Les autres mots relèvent du texte 2 sur la dépigmentation."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02_q1",
          "type": "mcq",
          "prompt": "Identifier la situation d'argumentation d'un texte, c'est relever :",
          "options": [
            "Son nombre de mots et sa date de publication",
            "Son thème, la thèse de l'auteur et sa visée argumentative",
            "Uniquement ses exemples",
            "Ses paragraphes sans les lire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La séance 2 commence par la compréhension du texte : thème, thèse et visée argumentative."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02_q2",
          "type": "mcq",
          "prompt": "La stratégie argumentative d'un auteur, c'est :",
          "options": [
            "Le résumé de son texte",
            "Le titre de son texte",
            "L'ensemble des procédés d'écriture utilisés pour soutenir son point de vue ou réfuter un point de vue",
            "La liste de ses exemples uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition donnée dans les traces écrites de la séance 2."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02_q3",
          "type": "mcq",
          "prompt": "Dans le texte 1, à quoi renvoie le pronom « ils » ?",
          "options": [
            "Aux gouvernants européens",
            "Aux migrants",
            "Aux industriels occidentaux",
            "Aux syndicats"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les traces écrites précisent le référent : « ils » renvoie aux migrants. « Elle » renvoie à l'Afrique."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02_q4",
          "type": "mcq",
          "prompt": "Pour dégager la structure d'un texte, la leçon conseille de se laisser guider par :",
          "options": [
            "La longueur des phrases uniquement",
            "Les paragraphes, les connecteurs logiques ou les indices d'énonciation",
            "La couverture du livre",
            "Le nombre de pages"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois repères donnés dans les traces écrites de la séance 2."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02_q5",
          "type": "mcq",
          "prompt": "Dans le texte 1, quelle valeur exprime le connecteur « or » ?",
          "options": [
            "L'addition",
            "La cause",
            "La conséquence",
            "L'opposition"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Mais » et « or » sont rangés dans la leçon parmi les connecteurs d'opposition. L'addition est marquée par « aussi » et « de plus »."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p02_q6",
          "type": "mcq",
          "prompt": "Lequel de ces mots appartient au champ lexical de l'immigration dans le texte 1 ?",
          "options": [
            "La traversée",
            "La dépigmentation",
            "Le teint clair",
            "Les boutons incolores"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« La traversée » figure dans le relevé du champ lexical du texte 1. Les autres mots relèvent du texte 2 sur la dépigmentation."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03",
      "order": 3,
      "title": "Sélectionner les idées essentielles et leur enchaînement logique",
      "summary": "Supprimer l'accessoire dans chaque séquence, conserver les idées essentielles et les relier par des connecteurs.",
      "conceptExplanation": "La sélection des idées essentielles consiste à supprimer les arguments illustratifs et à conserver les idées essentielles de chaque séquence argumentative.\n• À supprimer : les exemples illustratifs, les digressions, les commentaires, les parenthèses, les insistances et les répétitions, les citations et les expansions.\n• À conserver : les idées essentielles du texte. Pour le texte 1, la leçon en retient treize, depuis « dans les dernières années, l'océan Atlantique est devenu le cimetière de milliers d'émigrants » jusqu'à la thèse « réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine » et l'appel aux États africains à cesser d'agir comme dans les années de prospérité.\n• L'enchaînement logique : les idées essentielles retenues sont ensuite reliées par des connecteurs appropriés, par exemple « mais », « néanmoins » ou « cependant » pour l'opposition, « de plus » ou « en outre » pour l'addition, « par conséquent » pour la conclusion.",
      "keyRule": "Sélectionner, c'est supprimer exemples, digressions, commentaires, parenthèses, répétitions, citations et expansions, puis relier les idées essentielles par des connecteurs logiques.",
      "formulas": [],
      "workedExample": {
        "title": "Sélectionner les idées essentielles du texte 2",
        "statement": "Sélectionne les idées essentielles du texte 2 sur la dépigmentation, paragraphe par paragraphe, comme dans le corrigé de la séance 2.",
        "methodSteps": [
          "Paragraphe 1 : la dépigmentation artificielle est devenue un véritable phénomène de société ; en Afrique, le teint clair est considéré comme un critère de beauté et le signe d'une certaine aisance sociale ; le phénomène reste difficile à extirper du subconscient.",
          "Paragraphe 2 : telles les femmes, des hommes se dépigmentent la peau ; la dépigmentation se généralise et se pratique par les femmes en majorité, mais aussi par les hommes qui ignorent ses conséquences.",
          "Paragraphes 3 et 4 : la dépigmentation n'est pas sans conséquences ; l'esthétique recherchée est dégradée, et d'autres complications compromettent la vie des pratiquants.",
          "Paragraphe 5 : les utilisateurs des produits pour la dépigmentation exposent leur vie et doivent prendre conscience de cela ; les femmes doivent accepter leur peau naturelle."
        ],
        "conclusion": "Chaque paragraphe livre ses idées essentielles, débarrassées des exemples et des détails illustratifs."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Sélectionner les idées essentielles",
          "stepTheme": "Sélectionner les idées essentielles",
          "stepBadge": "Sélectionner les idées essentielles",
          "paragraphText": "• Sélection des idées essentielles : opération qui consiste à supprimer les arguments illustratifs et à conserver les idées essentielles de chaque séquence argumentative.\nC'est l'étape qui prépare la reformulation puis la rédaction du résumé.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03_q1",
            "type": "mcq",
            "prompt": "Sélectionner les idées essentielles d'un texte consiste à :",
            "options": [
              "Tout recopier sans rien enlever",
              "Supprimer les arguments illustratifs et conserver les idées essentielles",
              "Ne garder que les exemples",
              "Réécrire le texte avec ses propres idées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition donnée au début de la partie sur la sélection, dans la séance 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Ce qu'il faut supprimer",
          "stepTheme": "Ce qu'il faut supprimer",
          "stepBadge": "Ce qu'il faut supprimer",
          "paragraphText": "La conclusion de la séance 2 liste ce qu'il faut supprimer dans chaque séquence argumentative.\n• Les exemples illustratifs\n• Les digressions\n• Les commentaires\n• Les parenthèses\n• Les insistances et les répétitions\n• Les citations\n• Les expansions",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03_q2",
            "type": "mcq",
            "prompt": "Parmi les éléments suivants, lequel doit être supprimé lors de la sélection ?",
            "options": [
              "Une idée essentielle du texte",
              "La thèse de l'auteur",
              "Un exemple illustratif",
              "L'enchaînement logique des idées"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les exemples illustratifs font partie des éléments à supprimer, avec les digressions, commentaires, parenthèses, répétitions, citations et expansions."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Ce que l'on conserve : l'idée essentielle",
          "stepTheme": "Ce que l'on conserve : l'idée essentielle",
          "stepBadge": "Ce que l'on conserve : l'idée essentielle",
          "paragraphText": "Une idée essentielle porte le raisonnement de l'auteur, sans détail illustratif.\nExemple dans le texte 1 : « les difficultés qu'ils rencontrent dans leurs pays poussent des milliers de jeunes Africains à préférer l'exode, même clandestin ».",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces phrases est une idée essentielle retenue pour le texte 1 ?",
            "options": [
              "Les clandestins sont entassés à 40 ou 50 sur des barques de pêche",
              "Une panne de moteur ou une trop grosse vague seront souvent mortelles",
              "Ils gagnent leur argent dans l'économie souterraine à Nouakchott",
              "Les difficultés rencontrées dans leurs pays poussent des milliers de jeunes Africains à préférer l'exode, même clandestin"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'idée essentielle numéro 2 de la sélection de la leçon. Les autres phrases sont des détails illustratifs à supprimer."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Relier les idées par l'enchaînement logique",
          "stepTheme": "Relier les idées par l'enchaînement logique",
          "stepBadge": "Relier les idées par l'enchaînement logique",
          "paragraphText": "Après la sélection, chaque idée essentielle est reliée à la suivante par un connecteur logique approprié.\nDans la leçon : avant l'idée de la thèse, on place « par conséquent » ; l'addition se marque par « de plus » ou « en outre » ; l'opposition par « toutefois » ou « cependant ».",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03_q4",
            "type": "mcq",
            "prompt": "Dans l'enchaînement logique de la leçon, quel connecteur introduit la thèse, dernière idée essentielle du texte 1 ?",
            "options": [
              "Depuis",
              "Par conséquent",
              "De plus",
              "Même si"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon place « par conséquent » avant l'idée essentielle qui énonce la thèse : réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Tout garder fait échouer le résumé",
          "stepTheme": "Tout garder fait échouer le résumé",
          "stepBadge": "Tout garder fait échouer le résumé",
          "paragraphText": "Piège : conserver les exemples, les citations et les répétitions au moment de la sélection.\nLe résumé doit tenir au quart du volume du texte : garder l'accessoire rend la longueur impossible à respecter et noie les idées essentielles.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03_q5",
            "type": "mcq",
            "prompt": "Que se passe-t-il si l'on conserve les exemples illustratifs et les citations dans sa sélection ?",
            "options": [
              "Le résumé devient plus fidèle",
              "Le résumé respecte mieux le quart du volume",
              "Le résumé gonfle et les idées essentielles sont noyées",
              "Le résumé devient plus personnel"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La sélection sert précisément à éliminer l'accessoire pour ne garder que les idées essentielles, en vue d'un résumé au quart du volume."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une idée essentielle du texte 2",
          "stepTheme": "Une idée essentielle du texte 2",
          "stepBadge": "Une idée essentielle du texte 2",
          "paragraphText": "Dans la sélection du texte 2, le paragraphe 3 livre une seule idée essentielle.\n« La dépigmentation n'est donc pas sans conséquences diverses. Au premier rang, l'esthétique qu'elle escomptait est dégradée. »",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03_q6",
            "type": "mcq",
            "prompt": "Quelle idée essentielle la sélection retient-elle pour le paragraphe 3 du texte 2 ?",
            "options": [
              "La dépigmentation est un critère de beauté en Afrique",
              "Les hommes se dépigmentent par plaisir",
              "La dépigmentation a des conséquences et l'esthétique recherchée est dégradée",
              "Les femmes doivent accepter leur peau naturelle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'idée retenue dans le corrigé pour le paragraphe 3. Les autres idées appartiennent aux paragraphes 1, 2 et 5."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03_q1",
          "type": "mcq",
          "prompt": "Sélectionner les idées essentielles d'un texte consiste à :",
          "options": [
            "Tout recopier sans rien enlever",
            "Supprimer les arguments illustratifs et conserver les idées essentielles",
            "Ne garder que les exemples",
            "Réécrire le texte avec ses propres idées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition donnée au début de la partie sur la sélection, dans la séance 2."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03_q2",
          "type": "mcq",
          "prompt": "Parmi les éléments suivants, lequel doit être supprimé lors de la sélection ?",
          "options": [
            "Une idée essentielle du texte",
            "La thèse de l'auteur",
            "Un exemple illustratif",
            "L'enchaînement logique des idées"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les exemples illustratifs font partie des éléments à supprimer, avec les digressions, commentaires, parenthèses, répétitions, citations et expansions."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces phrases est une idée essentielle retenue pour le texte 1 ?",
          "options": [
            "Les clandestins sont entassés à 40 ou 50 sur des barques de pêche",
            "Une panne de moteur ou une trop grosse vague seront souvent mortelles",
            "Ils gagnent leur argent dans l'économie souterraine à Nouakchott",
            "Les difficultés rencontrées dans leurs pays poussent des milliers de jeunes Africains à préférer l'exode, même clandestin"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'idée essentielle numéro 2 de la sélection de la leçon. Les autres phrases sont des détails illustratifs à supprimer."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03_q4",
          "type": "mcq",
          "prompt": "Dans l'enchaînement logique de la leçon, quel connecteur introduit la thèse, dernière idée essentielle du texte 1 ?",
          "options": [
            "Depuis",
            "Par conséquent",
            "De plus",
            "Même si"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon place « par conséquent » avant l'idée essentielle qui énonce la thèse : réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03_q5",
          "type": "mcq",
          "prompt": "Que se passe-t-il si l'on conserve les exemples illustratifs et les citations dans sa sélection ?",
          "options": [
            "Le résumé devient plus fidèle",
            "Le résumé respecte mieux le quart du volume",
            "Le résumé gonfle et les idées essentielles sont noyées",
            "Le résumé devient plus personnel"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La sélection sert précisément à éliminer l'accessoire pour ne garder que les idées essentielles, en vue d'un résumé au quart du volume."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p03_q6",
          "type": "mcq",
          "prompt": "Quelle idée essentielle la sélection retient-elle pour le paragraphe 3 du texte 2 ?",
          "options": [
            "La dépigmentation est un critère de beauté en Afrique",
            "Les hommes se dépigmentent par plaisir",
            "La dépigmentation a des conséquences et l'esthétique recherchée est dégradée",
            "Les femmes doivent accepter leur peau naturelle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'idée retenue dans le corrigé pour le paragraphe 3. Les autres idées appartiennent aux paragraphes 1, 2 et 5."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04",
      "order": 4,
      "title": "Reformuler les idées essentielles",
      "summary": "Reprendre les idées essentielles dans une expression personnelle, sans en altérer le sens.",
      "conceptExplanation": "La séance 3 définit la reformulation : reformuler les idées essentielles d'un texte, revient à les reprendre dans une expression personnelle sans en altérer le sens.\n• On peut utiliser des mots synonymes.\n• On peut utiliser des mots englobants ou génériques pour les énumérations.\n• On peut transformer des phrases complexes en phrases simples.\n• On peut transformer des phrases interrogatives directes en phrases interrogatives indirectes.\nAinsi, les deux premières idées essentielles du texte 1 deviennent : « depuis quelque temps, de nombreux Africains conscients des risques et au péril de leur vie préfèrent émigrer en Europe pour fuir les problèmes rencontrés chez eux ». Et pour le texte 2, le paragraphe 1 devient : « En Afrique, la dépigmentation est un symbole de beauté et de réussite sociale » et « le phénomène est ancré dans la conscience collective féminine ».",
      "keyRule": "Reformuler, c'est dire la même chose avec ses propres mots : synonymes, mots englobants, phrases simplifiées, sans jamais altérer le sens.",
      "formulas": [],
      "workedExample": {
        "title": "Reformuler les deux premières idées essentielles du texte 1",
        "statement": "Les idées sélectionnées disent que l'océan Atlantique est devenu le cimetière de milliers d'émigrants et que les difficultés rencontrées dans leurs pays poussent des milliers de jeunes Africains à préférer l'exode, même clandestin. Reformule-les.",
        "methodSteps": [
          "On garde le sens des deux idées : des Africains émigrent au péril de leur vie pour fuir leurs difficultés.",
          "On remplace les expressions du texte par des synonymes : émigrer en Europe, fuir les problèmes rencontrés chez eux.",
          "On fusionne les deux idées en une seule phrase personnelle.",
          "Résultat de la leçon : « depuis quelque temps, de nombreux Africains conscients des risques et au péril de leur vie préfèrent émigrer en Europe pour fuir les problèmes rencontrés chez eux »."
        ],
        "conclusion": "La reformulation conserve exactement le sens des idées essentielles, dans une expression personnelle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Reformuler une idée essentielle",
          "stepTheme": "Reformuler une idée essentielle",
          "stepBadge": "Reformuler une idée essentielle",
          "paragraphText": "• Reformuler : reprendre une idée essentielle dans une expression personnelle sans en altérer le sens.\nC'est le travail de la séance 3, entre la sélection des idées et la rédaction du résumé.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04_q1",
            "type": "mcq",
            "prompt": "Reformuler une idée essentielle, c'est :",
            "options": [
              "La recopier mot pour mot",
              "La reprendre dans une expression personnelle sans en altérer le sens",
              "La remplacer par son opinion personnelle",
              "La raccourcir en supprimant son sens"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition exacte donnée au début de la séance 3."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Utiliser des mots synonymes",
          "stepTheme": "Utiliser des mots synonymes",
          "stepBadge": "Utiliser des mots synonymes",
          "paragraphText": "Premier procédé de la séance 3 : remplacer les mots du texte par des mots synonymes.\nExemple de la leçon : « préférer l'exode » devient « préfèrent émigrer en Europe », et les difficultés du pays deviennent « les problèmes rencontrés chez eux ».",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04_q2",
            "type": "mcq",
            "prompt": "Quel procédé utilise la reformulation « préfèrent émigrer » pour remplacer « préférer l'exode » ?",
            "options": [
              "La citation",
              "La répétition",
              "Les mots synonymes",
              "La suppression de l'idée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Émigrer est un synonyme d'exode dans ce contexte : la leçon range ce procédé parmi les mots synonymes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Utiliser des mots englobants",
          "stepTheme": "Utiliser des mots englobants",
          "stepBadge": "Utiliser des mots englobants",
          "paragraphText": "Deuxième procédé : utiliser des mots englobants ou génériques pour les énumérations.\nAu lieu d'énumérer longuement, la reformulation regroupe : les droits humains, la démocratie, le syndicalisme et la protection de l'environnement deviennent, dans le résumé de la leçon, la création d'un climat favorable sur les plans politique, social et économique.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04_q3",
            "type": "mcq",
            "prompt": "À quoi servent les mots englobants ou génériques dans une reformulation ?",
            "options": [
              "À citer le texte exactement",
              "À remplacer les énumérations par un terme qui les regroupe",
              "À allonger le résumé",
              "À changer le sens des idées"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La séance 3 les présente comme le moyen de reprendre les énumérations sous un terme générique qui les englobe."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Transformer les phrases",
          "stepTheme": "Transformer les phrases",
          "stepBadge": "Transformer les phrases",
          "paragraphText": "La séance 3 autorise deux transformations de phrases.\n• Transformer des phrases complexes en phrases simples.\n• Transformer des phrases interrogatives directes en phrases interrogatives indirectes.\nAinsi, la question du texte « si même le risque de mort ne dissuade pas les clandestins, comment agir ? » devient, une fois reformulée, l'idée qu'il faut envisager des solutions au phénomène de l'immigration clandestine.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04_q4",
            "type": "mcq",
            "prompt": "Quelle transformation la séance 3 propose-t-elle pour les phrases interrogatives directes ?",
            "options": [
              "Les supprimer",
              "Les garder telles quelles entre guillemets",
              "Les transformer en phrases interrogatives indirectes",
              "Les mettre en style télégraphique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'une des deux transformations de phrases indiquées dans la séance 3, avec le passage des phrases complexes aux phrases simples."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Reformuler n'est ni recopier ni déformer",
          "stepTheme": "Reformuler n'est ni recopier ni déformer",
          "stepBadge": "Reformuler n'est ni recopier ni déformer",
          "paragraphText": "Piège double : recopier les phrases du texte, ce n'est pas reformuler ; changer le sens d'une idée, ce n'est plus être fidèle.\nLa reformulation exige une expression personnelle et un sens strictement conservé.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04_q5",
            "type": "mcq",
            "prompt": "Un élève recopie exactement une phrase du texte dans son résumé. Que faut-il en dire ?",
            "options": [
              "C'est une bonne reformulation",
              "Ce n'est pas une reformulation : il faut une expression personnelle sans altérer le sens",
              "C'est interdit seulement pour la première phrase",
              "C'est la méthode des mots englobants"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Reformuler suppose ses propres mots. Recopier le texte ne remplit pas la consigne d'expression personnelle."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Reformuler le paragraphe 1 du texte 2",
          "stepTheme": "Reformuler le paragraphe 1 du texte 2",
          "stepBadge": "Reformuler le paragraphe 1 du texte 2",
          "paragraphText": "Le corrigé de la séance 3 reformule le paragraphe 1 du texte 2 en deux phrases.\n« En Afrique, la dépigmentation est un symbole de beauté et de réussite sociale. »\n« Le phénomène est ancré dans la conscience collective féminine. »",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04_q6",
            "type": "mcq",
            "prompt": "Quelle phrase est la reformulation du paragraphe 1 du texte 2 dans le corrigé ?",
            "options": [
              "Le teint clair est considéré comme un critère de beauté et le signe d'une certaine aisance sociale",
              "En Afrique, la dépigmentation est un symbole de beauté et de réussite sociale",
              "La dépigmentation artificielle est devenue un véritable phénomène de société",
              "Des femmes analphabètes à celles lettrées, toutes semblent ne pas pouvoir résister"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la reformulation du corrigé : « symbole de beauté et de réussite sociale » reprend, en expression personnelle, le critère de beauté et l'aisance sociale du texte."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04_q1",
          "type": "mcq",
          "prompt": "Reformuler une idée essentielle, c'est :",
          "options": [
            "La recopier mot pour mot",
            "La reprendre dans une expression personnelle sans en altérer le sens",
            "La remplacer par son opinion personnelle",
            "La raccourcir en supprimant son sens"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition exacte donnée au début de la séance 3."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04_q2",
          "type": "mcq",
          "prompt": "Quel procédé utilise la reformulation « préfèrent émigrer » pour remplacer « préférer l'exode » ?",
          "options": [
            "La citation",
            "La répétition",
            "Les mots synonymes",
            "La suppression de l'idée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Émigrer est un synonyme d'exode dans ce contexte : la leçon range ce procédé parmi les mots synonymes."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04_q3",
          "type": "mcq",
          "prompt": "À quoi servent les mots englobants ou génériques dans une reformulation ?",
          "options": [
            "À citer le texte exactement",
            "À remplacer les énumérations par un terme qui les regroupe",
            "À allonger le résumé",
            "À changer le sens des idées"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La séance 3 les présente comme le moyen de reprendre les énumérations sous un terme générique qui les englobe."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04_q4",
          "type": "mcq",
          "prompt": "Quelle transformation la séance 3 propose-t-elle pour les phrases interrogatives directes ?",
          "options": [
            "Les supprimer",
            "Les garder telles quelles entre guillemets",
            "Les transformer en phrases interrogatives indirectes",
            "Les mettre en style télégraphique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'une des deux transformations de phrases indiquées dans la séance 3, avec le passage des phrases complexes aux phrases simples."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04_q5",
          "type": "mcq",
          "prompt": "Un élève recopie exactement une phrase du texte dans son résumé. Que faut-il en dire ?",
          "options": [
            "C'est une bonne reformulation",
            "Ce n'est pas une reformulation : il faut une expression personnelle sans altérer le sens",
            "C'est interdit seulement pour la première phrase",
            "C'est la méthode des mots englobants"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Reformuler suppose ses propres mots. Recopier le texte ne remplit pas la consigne d'expression personnelle."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p04_q6",
          "type": "mcq",
          "prompt": "Quelle phrase est la reformulation du paragraphe 1 du texte 2 dans le corrigé ?",
          "options": [
            "Le teint clair est considéré comme un critère de beauté et le signe d'une certaine aisance sociale",
            "En Afrique, la dépigmentation est un symbole de beauté et de réussite sociale",
            "La dépigmentation artificielle est devenue un véritable phénomène de société",
            "Des femmes analphabètes à celles lettrées, toutes semblent ne pas pouvoir résister"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la reformulation du corrigé : « symbole de beauté et de réussite sociale » reprend, en expression personnelle, le critère de beauté et l'aisance sociale du texte."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05",
      "order": 5,
      "title": "Rédiger le résumé au quart de sa longueur",
      "summary": "Calculer le nombre de mots attendu, appliquer la marge de tolérance et respecter les contraintes de l'exercice.",
      "conceptExplanation": "La séance 4 est consacrée à la rédaction du résumé. Avant de rédiger, il faut calculer le nombre de mots qu'il doit comporter.\n• Le texte 1 fait 801 mots. La réduction au quart revient à 200 mots.\n• La marge de tolérance est de plus ou moins 10 pour cent, soit 20 mots en moins ou en plus : le résumé doit être compris entre 180 et 220 mots. Le résumé rédigé collectivement dans la leçon compte 194 mots.\n• Les contraintes de l'exercice : respecter l'ordre des idées du texte ; rédiger dans une expression personnelle ; éviter le style télégraphique ; respecter le système énonciatif, c'est-à-dire utiliser les indices de personne du texte et respecter le système verbal ; se conformer à la consigne du nombre de mots à respecter ; présenter sa production en un bloc, c'est-à-dire sans faire des paragraphes.",
      "keyRule": "Avant d'écrire : calculer le quart du texte, appliquer la marge de plus ou moins 10 pour cent, puis rédiger en un seul bloc, dans l'ordre des idées et en expression personnelle.",
      "formulas": [],
      "workedExample": {
        "title": "Rédiger le résumé du texte 1 (rédaction collective de la séance 4)",
        "statement": "Le texte 1 compte 801 mots. Calcule la longueur du résumé attendu, puis indique comment la leçon le rédige.",
        "methodSteps": [
          "Calcul : le quart de 801 mots donne 200 mots.",
          "Marge de tolérance de plus ou moins 10 pour cent : 20 mots en moins ou en plus, donc un résumé compris entre 180 et 220 mots.",
          "Rédaction : les idées essentielles reformulées sont enchaînées dans l'ordre du texte, reliées par des connecteurs comme « toutefois » et « par conséquent », en expression personnelle.",
          "Présentation : le résumé est écrit en un seul bloc, sans paragraphes ; il compte 194 mots, donc dans la fourchette autorisée."
        ],
        "conclusion": "Le résumé de la leçon fait 194 mots : il respecte la longueur, l'ordre des idées et la présentation en un bloc."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Calculer le nombre de mots du résumé",
          "stepTheme": "Calculer le nombre de mots du résumé",
          "stepBadge": "Calculer le nombre de mots du résumé",
          "paragraphText": "Première opération de la séance 4 : avant de rédiger, calculer le nombre de mots que le résumé doit comporter.\nLe texte 1 fait 801 mots ; sa réduction au quart revient à 200 mots.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05_q1",
            "type": "mcq",
            "prompt": "Le texte 1 compte 801 mots. Combien de mots son résumé au quart doit-il comporter ?",
            "options": [
              "100 mots",
              "200 mots",
              "400 mots",
              "801 mots"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon calcule le quart de 801 mots et obtient 200 mots pour le résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La marge de tolérance",
          "stepTheme": "La marge de tolérance",
          "stepBadge": "La marge de tolérance",
          "paragraphText": "La marge de tolérance est de plus ou moins 10 pour cent.\nPour un résumé de 200 mots, cela fait 20 mots en moins ou en plus : le résumé doit être compris entre 180 et 220 mots.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05_q2",
            "type": "mcq",
            "prompt": "Avec la marge de tolérance, entre quels nombres de mots le résumé du texte 1 doit-il être compris ?",
            "options": [
              "Entre 200 et 220 mots",
              "Entre 100 et 200 mots",
              "Entre 190 et 210 mots",
              "Entre 180 et 220 mots"
            ],
            "correctAnswerIndex": 3,
            "explanation": "200 mots moins 20 et plus 20 : la fourchette va de 180 à 220 mots."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Respecter l'ordre des idées et le système énonciatif",
          "stepTheme": "Respecter l'ordre des idées et le système énonciatif",
          "stepBadge": "Respecter l'ordre des idées et le système énonciatif",
          "paragraphText": "Deux contraintes de l'exercice portent sur la fidélité au texte.\n• Respecter l'ordre des idées du texte.\n• Respecter le système énonciatif : utiliser les indices de personne du texte et respecter le système verbal.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05_q3",
            "type": "mcq",
            "prompt": "Que signifie respecter le système énonciatif dans un résumé ?",
            "options": [
              "Écrire à la première personne même si le texte est à la troisième",
              "Utiliser les indices de personne du texte et respecter le système verbal",
              "Changer tous les temps du texte au passé",
              "Supprimer tous les pronoms"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la formulation exacte de la contrainte donnée dans la séance 4."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le style télégraphique est à éviter",
          "stepTheme": "Le style télégraphique est à éviter",
          "stepBadge": "Le style télégraphique est à éviter",
          "paragraphText": "Parmi les contraintes de l'exercice, la leçon demande d'éviter le style télégraphique.\nLe résumé se rédige en phrases complètes et liées, dans une expression personnelle, et non en notes abrégées.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05_q4",
            "type": "mcq",
            "prompt": "Que faut-il éviter dans la rédaction du résumé ?",
            "options": [
              "Les phrases complètes",
              "Les connecteurs logiques",
              "Le style télégraphique",
              "L'expression personnelle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Éviter le style télégraphique » figure dans la liste des contraintes de l'exercice de la séance 4."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Présenter le résumé en un bloc",
          "stepTheme": "Présenter le résumé en un bloc",
          "stepBadge": "Présenter le résumé en un bloc",
          "paragraphText": "Dernière contrainte de présentation : présenter sa production en un bloc, c'est-à-dire sans faire des paragraphes.\nLe résumé de la leçon illustre cette règle : un seul bloc de texte, du début à la fin.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05_q5",
            "type": "mcq",
            "prompt": "Comment le résumé doit-il être présenté ?",
            "options": [
              "En plusieurs paragraphes numérotés",
              "En un bloc, sans faire des paragraphes",
              "En liste de phrases numérotées",
              "En tableau de deux colonnes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La contrainte est explicite dans la séance 4 : présenter sa production en un bloc, sans paragraphes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le résumé modèle compte 194 mots",
          "stepTheme": "Le résumé modèle compte 194 mots",
          "stepBadge": "Le résumé modèle compte 194 mots",
          "paragraphText": "Le résumé rédigé collectivement dans la leçon commence ainsi : « Depuis plusieurs années, de nombreux jeunes africains conscients des risques et au péril de leur vie, préfèrent émigrer en Europe pour fuir les problèmes rencontrés chez eux ».\nIl compte 194 mots : il est donc conforme à la fourchette de 180 à 220 mots.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05_q6",
            "type": "mcq",
            "prompt": "Le résumé modèle de la leçon compte 194 mots. Est-il conforme à la consigne ?",
            "options": [
              "Non, car il dépasse 220 mots",
              "Non, car il est en dessous de 180 mots",
              "Oui, car 194 est compris entre 180 et 220 mots",
              "Oui, car tout nombre de mots est accepté"
            ],
            "correctAnswerIndex": 2,
            "explanation": "194 se situe entre 180 et 220 : le résumé modèle respecte la longueur au quart avec sa marge de tolérance."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05_q1",
          "type": "mcq",
          "prompt": "Le texte 1 compte 801 mots. Combien de mots son résumé au quart doit-il comporter ?",
          "options": [
            "100 mots",
            "200 mots",
            "400 mots",
            "801 mots"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon calcule le quart de 801 mots et obtient 200 mots pour le résumé."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05_q2",
          "type": "mcq",
          "prompt": "Avec la marge de tolérance, entre quels nombres de mots le résumé du texte 1 doit-il être compris ?",
          "options": [
            "Entre 200 et 220 mots",
            "Entre 100 et 200 mots",
            "Entre 190 et 210 mots",
            "Entre 180 et 220 mots"
          ],
          "correctAnswerIndex": 3,
          "explanation": "200 mots moins 20 et plus 20 : la fourchette va de 180 à 220 mots."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05_q3",
          "type": "mcq",
          "prompt": "Que signifie respecter le système énonciatif dans un résumé ?",
          "options": [
            "Écrire à la première personne même si le texte est à la troisième",
            "Utiliser les indices de personne du texte et respecter le système verbal",
            "Changer tous les temps du texte au passé",
            "Supprimer tous les pronoms"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la formulation exacte de la contrainte donnée dans la séance 4."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05_q4",
          "type": "mcq",
          "prompt": "Que faut-il éviter dans la rédaction du résumé ?",
          "options": [
            "Les phrases complètes",
            "Les connecteurs logiques",
            "Le style télégraphique",
            "L'expression personnelle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Éviter le style télégraphique » figure dans la liste des contraintes de l'exercice de la séance 4."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05_q5",
          "type": "mcq",
          "prompt": "Comment le résumé doit-il être présenté ?",
          "options": [
            "En plusieurs paragraphes numérotés",
            "En un bloc, sans faire des paragraphes",
            "En liste de phrases numérotées",
            "En tableau de deux colonnes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La contrainte est explicite dans la séance 4 : présenter sa production en un bloc, sans paragraphes."
        },
        {
          "id": "terminale_a1_francais_ee_l03_resume_texte_argumentatif_p05_q6",
          "type": "mcq",
          "prompt": "Le résumé modèle de la leçon compte 194 mots. Est-il conforme à la consigne ?",
          "options": [
            "Non, car il dépasse 220 mots",
            "Non, car il est en dessous de 180 mots",
            "Oui, car 194 est compris entre 180 et 220 mots",
            "Oui, car tout nombre de mots est accepté"
          ],
          "correctAnswerIndex": 2,
          "explanation": "194 se situe entre 180 et 220 : le résumé modèle respecte la longueur au quart avec sa marge de tolérance."
        }
      ]
    }
  ]
};
